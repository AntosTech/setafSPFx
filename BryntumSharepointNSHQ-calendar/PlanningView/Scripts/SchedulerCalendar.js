import NTHQCalendar from './view/BRPlusCalendar.js';
// import '../lib/Calendar/feature/print/Print.js';
import { DateHelper, LocaleManager } from "../node_modules/@bryntum/calendar/calendar.module.js";
import NTHQEventTooltip from "./info/NTHQEventTooltip.js";
import NTHQEventDetails from "./info/NTHQEventDetails.js";
import NTHQData from './data/NTHQData.js';
import NTHQHeader from "./header/NTHQHeader.js";
import ColorHelper from "./helper/ColorHelper.js";


LocaleManager.extendLocale('En', {
    DayView : {
        expandAllDayRow   : 'Click to expand all-day section'
    },
});

/**
 * This class will create the scheduler. The application uses the following template that needs to be placed in the html/aspx page on
 * which this app is rendered
 *
 */
export class NTHQScheduler {

    get isCalendar() {
        return true;
    }

    get isScheduler() {
        return false;
    }

    constructor(app, strategic) {

        const me = this;
        me.app = app;
        me.data = new NTHQData(app, me);
        window.data = me.data;
        me.dateFormat  ='DD/MM/YYYY';
        me.strategic = !!strategic;

        me.eventDetails = new NTHQEventDetails(me);
        me.eventToolTip = new NTHQEventTooltip(me);

        me.createScheduler();
        me.data.setTimespan(me.scheduler.activeView.startDate, me.scheduler.activeView.endDate);
        me.keys = {};
    }

    eventRenderer({ eventRecord, renderData }) {

        if (renderData.isAllDay) {
            renderData.style.color = ColorHelper.getColorRule(eventRecord.eventColor, eventRecord.fontColor);
        }

        const icons = eventRecord.EventTags.map(tag => tag.Icon);

        if (icons.length) {

            const children = [];

            icons.forEach(icon => {
                children.unshift({
                    tag       : 'i',
                    className : 'b-fa ' + icon
                });
            });

            const childContent = {
                tag  : 'span',
                html : eventRecord.Title
            };

            children.push(childContent);

            return {
                children
            }
        }

        return eventRecord.Title;
    }

    dayHeaderRenderer (headerDomConfig, cellData) {
        this.keys[cellData.key] = cellData.renderedEvents;
    }

    dayCellRenderer (renderedEvents, style) {

        const nonWorkingEvents = renderedEvents.filter(event => {
            const eventRecord = event.eventRecord || event;
            const allDay = event.isAllDay || eventRecord.fAllDayEvent;
            return allDay && eventRecord.isNonWorking;
        }).map(event => event.eventRecord || event);

        if (nonWorkingEvents.length){
            let event = nonWorkingEvents[0];
            if (nonWorkingEvents.length > 1) {
                const shapeHoliday = nonWorkingEvents.filter(nonWorkingEvent => nonWorkingEvent.TypeOfEvent.Name === 'SHAPE Holiday')[0];
                if (shapeHoliday) {
                    event = shapeHoliday;
                }
            }

            style.backgroundColor = event.eventColor;
        }
    }

    createScheduler () {
        const me = this;

        const start = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

        me.scheduler = new NTHQCalendar({

            appendTo             : 'schedulerplaceholder',
            eventStyle           : 'border',

            monitorResize : true,
            autoCreate : false,

            scrollToDate (view, date) {
                try {
                    view.scrollTo(new Date(), {highlight: true }).catch(() => {
                    });
                } catch (err) {
                    console.log(err);
                }
            },

            shiftToNow() {
                // Reaction to this to change the activeView's date happens in onCalendarDateChange.
                // updateDate changes the sidebar date if there is a sidebar, else it calls
                // onCalendarDateChange directly.
                this.date = DateHelper.clearTime(new Date());
                this.updateViewDescription();
                if (this.activeView.isAgendaView) {
                    this.scrollToDate(this.activeView, new Date());
                }
            },

            tbar : {
                items : {
                    addEventButton : {
                        type   : 'button',
                        text   : 'Add event',
                        weight : 400,
                        icon   : 'b-fa b-fa-calendar',
                        onAction : () => {
                            const record = me.data.configStore.getById('NewEventUrl');
                            if (record) {
                                window.open(record.Value, '_blank');
                            }
                        }

                    },
                    print :  {
                        type    : 'button',
                        text    : 'Print',
                        weight : 401,
                        icon    : 'b-fa b-fa-print',
                        onClick : () => {
                            me.scheduler.features.print.print();
                        }
                    },
                    settings : {
                        type   : 'button',
                        icon   : 'b-fa b-fa-cog',
                        weight : 800,
                        style  : 'margin-left: 1em',
                        menu   : {
                            items : {
                                toggleShowWeek : {
                                    text    : 'Week column',
                                    checked : true,
                                    onToggle({ checked }) {
                                        me.scheduler && (me.scheduler.activeView.showWeekNumber = checked);
                                    }
                                },
                                toggleNonWorkingDays : {
                                    text    : 'Nonworking days',
                                    checked : true,
                                    onToggle({ checked }) {
                                        me.scheduler && (me.scheduler.activeView.hideNonWorkingDays = !checked);
                                    }
                                }
                            }
                        }
                    }
                }
            },

            sidebar : {
                collapsed : true,
                items : {
                    resourceFilter : {
                        hidden : true
                    }
                },

                listeners : {
                    dateChange(params) {
                        me.scheduler.onMyDateChange(params);
                    }
                }
            },

            mode : 'month',

            modeDefaults : {
                eventRenderer : this.eventRenderer.bind(me),
                overflowClickAction : 'expand',

                // showTime: false,

                myOnOverflowClick () {
                    const { allDayEvents } = this;
                    if (allDayEvents) {
                        allDayEvents.toggleExpandCollapse();
                        this.allDayToggleIcon.dataset.btip = allDayEvents.expanded ? this.L('L{collapseAllDayRow}') : this.L('L{expandAllDayRow}');
                    }
                },

                listeners : {
                    cellOverflowClick ({ domEvent }) {
                        domEvent.preventDefault();
                        // this.myOnOverflowClick();
                    }
                },

                onCornerClick(event) {
                    event.preventDefault();
                    this.myOnOverflowClick();
                }
            },

            modes : {
                // Disable year view completely
                agenda: {
                    range : '1 week',
                    preserveScrollOnDatasetChange: false,
                    cellRenderer: function (cellData) {
                        const renderedEvents = cellData.record.events;
                        const style = {};
                        me.dayCellRenderer(renderedEvents, style);
                        if (style.backgroundColor) {
                            cellData.rowElement.style.backgroundColor = style.backgroundColor;
                        } else {
                            cellData.rowElement.style.backgroundColor = '';
                        }
                    },
                    listeners : {
                        beforeShow ({ source: activeItem }) {
                            if (!activeItem._listRangeMenu) {
                                activeItem.listRangeMenu.items.listRangeDecadeItem.hidden = true;
                                activeItem.listRangeMenu.items.listRangeYearItem.hidden = true;
                            }

                            me.scheduler.selectedEvents = [];
                        }

                    }
                },
                year: false,
                month : {
                    minRowHeight: 100,
                    dayCellRenderer : function(cellData, domConfig) {
                        me.dayCellRenderer(cellData.renderedEvents, domConfig.style);
                    },
                    weekRenderer (cell, week) {
                        cell.innerHTML = `<span class="week-text">WEEK ${week[1]}</span>`;
                    }
                },
                week: {
                    dayHeaderRenderer : me.dayHeaderRenderer.bind(me),
                    dayCellRenderer : function(domConfig, cellData) {
                        const renderedEvents = me.keys[cellData.key];
                        if (renderedEvents) {
                            me.dayCellRenderer(renderedEvents, domConfig.style);
                        }
                        return domConfig;
                    }
                },
                day: {
                    dayHeaderRenderer : me.dayHeaderRenderer.bind(me),
                    dayCellRenderer : function(domConfig, cellData) {
                        const renderedEvents = me.keys[cellData.key];
                        if (renderedEvents) {
                            me.dayCellRenderer(renderedEvents, domConfig.style);
                        }
                        return domConfig;
                    }
                }
            },

            features: {
                print          : true,
                drag           : false,
                eventTooltip   : me.eventToolTip.getCalendarConfig(),
                eventEdit      : me.eventDetails.getConfig()
            },

            date: start,

            eventStore: me.data.eventStore,
            resourceStore: me.data.resourceStore,

            onMyDateChange({ date }) {
                const { activeItem } = this.widgetMap.viewContainer.layout;

                if (activeItem) {

                    // If the activeItem already contains the date, set it silently
                    if (DateHelper.intersectSpans(activeItem.startDate, activeItem.endDate, date, date) && !this.changingSidebarDate) {
                        activeItem._date = date;
                    }
                    // If te UI needs changing, go through the setter
                    else {
                        activeItem.date = date;
                    }

                    if (!DateHelper.timeSpanContains(me.data.filters.startDate, me.data.filters.endDate, activeItem.startDate, activeItem.endDate)) {
                        me.data.setTimespan(activeItem.startDate, activeItem.endDate);
                    }

                    if (activeItem.isAgendaView) {
                        this.scrollToDate(activeItem, date);
                    }
                }
            },

            listeners: {

                activeItemChange({ activeItem }) {

                    me.keys = {};

                    if (activeItem.isAgendaView) {
                        me.scheduler.date = new Date();
                        this.scrollToDate(activeItem, me.scheduler.date);
                    }
                },

                viewPaint({ source : view }) {
                    const { widgetMap } = this.tbar.widgetMap.settings.menu;

                    // These views can hide and show a week column
                    if (view.isMonthView || view.isYearView) {
                        widgetMap.toggleShowWeek.disabled = false;
                        widgetMap.toggleShowWeek.checked = view.showWeekNumber;
                    }
                    else {
                        widgetMap.toggleShowWeek.disabled = true;
                    }

                    // A one day DayView can't toggle hiding and showing nonworking days
                    if (view.isDayView && view.duration === 1) {
                        widgetMap.toggleNonWorkingDays.disabled = true;
                    }
                    else {
                        widgetMap.toggleNonWorkingDays.disabled = false;
                        widgetMap.toggleNonWorkingDays.checked = !view.hideNonWorkingDays;
                    }
                },

                // Set the event detail dialog title
                beforeEventEditShow({ editor, eventRecord }) {
                    me.eventDetails.setTitle(editor, eventRecord);
                    me.eventDetails.setValues(editor, eventRecord);
                },

                // Set the eventRecord to have it available on beforeEventEditShow
                beforeEventEdit({eventRecord, eventEdit}) {
                    eventEdit.eventRecord = eventRecord;
                }
            }
        });
        window.scheduler = me.scheduler;
    }

    // Load the header when we have collected all data from the EventType- and Strategic Approach List
    eventTypesLoaded () {
        const me = this;
        let configRecord = me.data.configStore.getById('DisableNetworkFilterCalendar');
        me.disableNetworkFilter = configRecord && configRecord.getBoolValue();
        configRecord = me.data.configStore.getById('DisablePrintCalendar');
        me.disablePrint = configRecord && configRecord.getBoolValue();
        me.scheduler.tbar.widgetMap.print.hidden = this.disablePrint;
        new NTHQHeader(this.app, this);
    }
}

