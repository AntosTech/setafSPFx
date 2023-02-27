import XmlToJson from './XmlToJson.js';
import NTHQEvent from '../model/NTHQEvent.js';
import { DateHelper } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";


/**
 * This class parser the recurrence data retrieved from Sharepoint.
 */
export default class NTHQRecurrenceParser {

    constructor (events, start, end, tzString) {

        const me = this;
        me.rawEvents = events;
        me.tzString = tzString;

        // days of weeks and ween of month formats returned by SP
        me.dayOfWeek = ['su','mo','tu','we','th','fr','sa'];
        me.weekOfMonth = ['first','second','third','fourth'];

        me.start = start;
        me.end = end;

        me.parseRecurrentEvents(events);
    }

    adjustForTimezone(date) {
        return new Date(new Date(date.getTime()).toLocaleString("en-US", { timeZone: this.tzString }));
    }

    /**
     * Process all events and build the recurrence sequence.
     * @param events
     */
    parseRecurrentEvents (events = []) {
        const me = this;
        me.events = [];
        me.recurringEvents = {};

        // Split up events by type
        events.forEach(event => {

            if (!event.EventDate || !event.EndDate)
                return;

            if (event.fAllDayEvent === true) {
                 event.startDate = event.EventDate.replace(/:\d\dZ/, '');
                 event.endDate = event.EndDate.replace(/:\d\dZ/, '');
             } else {
               event.startDate = event.EventDate;
               event.endDate = event.EndDate;
            }

            event = new NTHQEvent(event);
            event.setStartEndDate(me.adjustForTimezone(event.startDate), me.adjustForTimezone(event.endDate), true);

            switch (event.EventType) {

                case 0:
                    // normal events do not need further processing
                    me.events.push(event);
                    break;
                case 1:
                    // recurrence events
                    me.getRecurrentEvent(event.UID).event = me.parseRecurrenceRule(event);
                    break;
                case 3:
                    // deletions
                    me.getRecurrentEvent(event.UID).deletions.push(event);
                    break;
                case 4:
                    // overrides
                    me.getRecurrentEvent(event.UID).exceptions.push(event);
                    break;
            }
        });

        let recurringEvents = me.getRecurringEvents();

        // Add exceptions and add exception overrides to the event list
         recurringEvents.forEach(record => {
             let event = record.event;
             let overrideDates = record.exceptions.map(exception => exception.RecurrenceID);
             let deletionDates = record.deletions.map(exception => exception.RecurrenceID);
             event.exceptionDates = overrideDates.concat(deletionDates);
             // Exceptions are handled as normal events and pushed to the eventlist.
             [].push.apply(me.events, record.exceptions);

             // eventEndDate is the end of the recurrence cyclus
            if (!event.recurrence.count) {
                event.recurrence.endDate = event.endDate;
            }

             let firstDayOfWeek = me.dayOfWeek.indexOf(event.RecurrenceData.firstDayOfWeek || 'su');
             if (event.allDay) {
                 //event.endDate = null;
                 event.startDate = DateHelper.clearTime(event.startDate, true);
                 event.endDate = DateHelper.getNext(event.startDate, 's', event.Duration, firstDayOfWeek);
             } else {
                 event.endDate = DateHelper.getNext(event.startDate, 's', event.Duration, firstDayOfWeek);
             }
             me.events.push(event);
         });
    }

    /**
     * Return the record for an recurring event. This contains the event, deletions and exceptions
     * @param uid
     * @returns {*}
     */
    getRecurrentEvent (uid) {

        const me = this;

        if (!me.recurringEvents[uid]) {
            me.recurringEvents[uid] = {
                exceptions: [],
                deletions : []
            }
        }

        return me.recurringEvents[uid];
    }

    getEvents () {
        return this.events
    }

    getRecurringEvents () {
        return Object.values(this.recurringEvents);
    }

    getTimespans () {
        return Object.values(this.recurringEvents).map(record => record.event);
    }

    /**
     * Translate SharePoint recurrence meta data into rfc5545 recurrence rule.
     *
     * https://tools.ietf.org/html/rfc5545#section-3.3.10
     * @param event
     * @returns {*}
     */
    parseRecurrenceRule (event) {

        const me = this;
        const parsed = XmlToJson.xml2json(event.RecurrenceData);

        if (parsed) {

            event.RecurrenceData = parsed.recurrence.rule || {};

            const repeat = event.RecurrenceData.repeat;
            const repeatInstances = event.RecurrenceData.repeatInstances;

            let freq, interval, bysetpos, byday, bymonth, bymonthday, count;

            count = me.parseNumber(repeatInstances);

            // Determine frequency type
            if (repeat) {

                // Narrow down to one item for parsing common properties
                let item = repeat.monthly || repeat.monthlyByDay || repeat.yearly || repeat.yearlyByDay;

                if (repeat.daily) {
                    freq = 'DAILY';
                    interval = repeat.daily.dayFrequency ? parseInt(repeat.daily.dayFrequency) : 1;
                }

                if (repeat.weekly) {
                    freq = 'WEEKLY';
                    interval = repeat.weekly.weekFrequency ? parseInt(repeat.weekly.weekFrequency) : 1;
                }

                if (repeat.monthly || repeat.monthlyByDay) {
                    freq = 'MONTHLY';
                    interval = item.monthFrequency ? parseInt(item.monthFrequency) : 1;
                }

                if (repeat.yearly || repeat.yearlyByDay) {
                    freq = 'YEARLY';
                    interval = item.yearFrequency ? parseInt(item.yearFrequency) : 1;
                }

                if (item) {
                    bysetpos = me.parseWeekDayOfMonth(item.weekdayOfMonth);
                    bymonth = me.parseNumber(item.month);
                    bymonthday = me.parseNumber(item.day);
                }

               // Weekly can also contain weekdays
               byday = me.parseDays(item || repeat.weekly);
            }

            // Set the rule on the event which becomes a recurrence template and generates the timerange model on the recurrence property.
            event.recurrenceRule = me.buildRule({freq, interval, bysetpos, byday, bymonth, bymonthday, count });
        }

        // debugger
         return event;
    }

    parseWeekDayOfMonth (weekdayOfMonth) {

        //Sharepoint can return 'first, second, third' translate that into a number. Last 'last' will be translated into -1;
        if (isNaN(parseInt(weekdayOfMonth))) {
            let index = this.weekOfMonth.indexOf(weekdayOfMonth);
            return index === -1 ? index : index + 1;
        }

        return parseInt(weekdayOfMonth);
    }

    parseNumber (number) {
        if (isNaN(parseInt(number))) {
            return;
        }

        return parseInt(number);
    }

    /**
     * Build , seperated day string for the BYDAY property
     *
     * @param item
     * @returns {any}
     */
    parseDays (item) {
        if (item) {
            let days = me.dayOfWeek.filter(day => {
                return item[day];
            });

            return days.length ? days.join(',').toUpperCase() : null;
        }
    }

    /**
     * Concat the rules into a string
     * @param config
     * @returns {string}
     */
    buildRule (config) {
        const keys = Object.keys(config);
        let rule = '';

        keys.forEach(key => {
            if (config[key] !== undefined && config[key] !== null)
                rule += key.toUpperCase() + '=' + config[key] + ';';
        });

        return rule;
    }
}
