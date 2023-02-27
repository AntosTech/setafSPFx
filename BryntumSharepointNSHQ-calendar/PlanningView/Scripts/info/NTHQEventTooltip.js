import { DateHelper } from "../../node_modules/@bryntum/calendar/calendar.module.js";

/**
 * Generate the tooltip. Based on the TypeOfEvent category specific fields are shown.
 */
export default class NTHQEventTooltip {

    constructor (scheduler) {
        const me = this;
        me.scheduler = scheduler;
        me.dateFormat = scheduler.dateFormat;
    }

    getConfig() {

        const me = this;

        return {
            header : {
                titleAlign : 'start'
            },

            template : data => me.getTooltip(data)
        };
    }

    getCalendarConfig() {
        const me = this;

        return {
            showOn : 'hover',
            closable : false,
            align : 'l-r',

            onClientOverflowChange() {

                if (!this.lastAlignSpec)
                    return;

                if (!DomHelper.isVisible(this.lastAlignSpec.target)) {
                    this.hide();
                }
            },

            tooltip: {
                getHtml : data => {
                    return me.getTooltip({tip : data.tip, eventRecord: data.tip.eventRecord } );
                },
                tools : {
                    edit : false,
                    delete : false
                }

            }
        }
    }

    getTooltip (data) {

        const me = this;
        const eventRecord = data.eventRecord;

        if (!eventRecord)
            return;

        const category = eventRecord.eventType;
        let title = '';

        switch (category) {
            case 'pts':
                const personDetails = eventRecord.PersonDetails;
                const personName = personDetails ? personDetails.Fullname : '';
                title = eventRecord.isApproved() ? eventRecord.TypeOfEvent.Name : 'P ' + personName;
                break;
            default:
                title = eventRecord.Title;
        }

        // Set the title for the tooltip
        data.tip.title = title;

        let body = '';

        switch (category) {
            case 'pts':
                body = me.getTitleLine(eventRecord) + me.getRangeLine(eventRecord) + me.getLocationLine(eventRecord) + me.getPersonNameLine(eventRecord) + me.getPersonRankLine(eventRecord) + me.getPersonNationalityLine(eventRecord);
                break;
            case 'training':
                body = me.getRangeLine(eventRecord);
                break;
            case 'planningcalendar':
            case 'pmt':
            case 'plannedactivity':
            case 'planningcalendarcategories':
                body = me.getRangeLine(eventRecord) + me.getDescriptionLine(eventRecord) + me.getActionOfficerLine(eventRecord) + me.getStrategicApproachLine(eventRecord);
                break;
        }

        return '<dl>' + body + '</dl>';
    }

    getRangeLine (eventRecord) {
        return `<dt>Schedule:</dt>
                <dd>
                    ${DateHelper.format(eventRecord.startDate, this.dateFormat)} - ${DateHelper.format(eventRecord.endDate, this.dateFormat)}
                </dd>`;
    }

    getTitleLine (eventRecord) {
        return `<dt>Title:</dt><dd>${eventRecord.Title}</dd>`;
    }

    getDescriptionLine (eventRecord) {
        return `<dt>Description:</dt><dd>${this.getValue(eventRecord.Description)}</dd>`;
    }

    getLocationLine (eventRecord) {

        const person = eventRecord.PersonDetails;
        const location = eventRecord.Location || eventRecord.LocationName;

        if (location) {
            return  `<dt>Location:</dt><dd>${location}</dd>`;
        }

        if (person) {
            return  `<dt>Location:</dt><dd>${person.City || ''}, ${person.Country}</dd>`;
        }

        return this.getValue(location);
    }

    getPersonNameLine (eventRecord) {

        const person = eventRecord.PersonDetails;

        if (person) {
            return `<dt>Person:</dt><dd>${person.Fullname}</dd>`;
        }

        return '';
    }

    getPersonRankLine (eventRecord) {

        const person = eventRecord.PersonDetails;

        if (person) {
            return `<dt>Rank:</dt><dd>${person.Rank}</dd>`;
        }

        return '';
    }

    getPersonNationalityLine (eventRecord) {

        const person = eventRecord.PersonDetails;

        if (person) {
            return `<dt>Nationality:</dt><dd>${person.Nationality}</dd>`;
        }

        return '';
    }

    getActionOfficerLine (eventRecord) {
        return `<dt>Action Officer:</dt><dd>${this.getValue(eventRecord.ActionOfficer)}</dd>`;
    }

    getStrategicApproachLine (eventRecord) {
        const label = eventRecord.StrategicApproachTypeName;
        if (this.scheduler.strategic && label && label.length > 0) {
           return `<dt>Strategic Approach:</dt><dd>${label}</dd>`;
        }

        return '';
    }

    getValue (value) {
        if (value === null || value === '' || value === undefined) {
            return 'no data';
        }

        return value;
    }

}
