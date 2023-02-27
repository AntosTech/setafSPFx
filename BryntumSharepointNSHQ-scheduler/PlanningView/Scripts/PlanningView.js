import { Scheduler, TimeRanges }  from "../node_modules/@bryntum/scheduler/scheduler.module.js";

import NTHQEventTooltip from "./info/NTHQEventTooltip.js";
import NTHQEventDetails from "./info/NTHQEventDetails.js";

import NTHQData from './data/NTHQData.js';
import NTHQHeader from "./header/NTHQHeader";
import ColorHelper from "./helper/ColorHelper.js";
import './plugin/Icons.js';

/**
 * This class will create the scheduler. The application uses the following template that needs to be placed in the html/aspx page on
 * which this app is rendered
 *
 * <div class="nthqplaceholder">
 <div id="headerplaceholder" class="nthqheader">
 <div class="nthqheadertoprow">
 <div id="rangeplaceholder" class="nthqrange"></div>
 <div id="filterplaceholder" class="nthqfilter"></div>
 <div id="searchplaceholder" class="nthqsearch"></div>
 </div>

 <div class="nthqheaderbottomrow">
 <div id="sortplaceholder" class="nthqsort"></div>
 <div id="legendplaceholder" class="nthqlegend"></div>
 </div>

 </div>

 <div id="schedulerplaceholder" class="nthqscheduler"></div>
 </div>
 */
export default class PlanningView {

    get isScheduler() {
        return true;
    }

    constructor(app) {

        const me = this;
        me.app = app;
        me.data = new NTHQData(app, me);
        me.dateFormat  ='DD/MM/YYYY';
        me.strategic = false;

        const start = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        me.data.setTimespan(start);
    }

    createScheduler () {

        const me = this;
        // Create the Scheduler

        const configRecord = me.data.configStore.getById('PrintUrl');

        me.scheduler = new Scheduler({

            appendTo             : 'schedulerplaceholder',
            eventStyle           : 'border',

            // Fit the number of records within the available viewport height
            autoHeight           : true,

            // Fit all timeaxis columns over the available schedulingview, false will set scrollbars
            forceFit             : true,

            zoomOnMouseWheel          : false,
            zoomOnTimeAxisDoubleClick : false,

            // stretch hour <> events over a day tick
            fillTicks : true,
            milestoneLayoutMode : 'estimate',

            createEventOnDblClick     : false,
            enableRecurringEvents : true,

            tbar : {
                items: {
                    addEventButton: {
                        type    : 'button',
                        text    : 'Add event',
                        height  : 25,
                        minHeight: 25,
                        weight  : 400,
                        icon    : 'b-fa b-fa-calendar',
                        onAction: () => {
                            const record = me.data.configStore.getById('NewEventUrl');
                            if (record) {
                                window.open(record.Value, '_blank');
                            }
                        }
                    }
                }
            },

            features: {
                icons          : true,
                search         : true,
                nonWorkingTime : true,
                eventResize    : false,
                eventDrag      : false,
                eventDragCreate: false,
                eventTooltip   : new NTHQEventTooltip(me).getConfig(),
                eventEdit      : new NTHQEventDetails(me).getConfig(),
                timeRanges : {
                    enableResizing      : false,
                    showCurrentTimeLine : true,
                    headerRenderer({timeRange}) {
                        const style = ColorHelper.getColorStyle(timeRange.eventColor, timeRange.fontColor);
                        return `<span style="${style}height:100%;width:100%;">${timeRange.name}</span>`
                    },
                    showHeaderElements  : true,
                    showTooltip         : true,
                    tooltipTemplate     : ({ timeRange }) => timeRange.name
                },
                pdfExport : {
                    exportServer : configRecord ? configRecord.Value : '',
                    translateURLsToAbsolute : configRecord ? configRecord.Value : '',
                    keepPathName : false
                }
            },

            columns: [
                {
                    text : 'Directorate',
                    width: 125,
                    field: 'DirectorateOrDivisionName',
                    editor : false
                },
                {
                    text : 'Schedule Overview',
                    width: 200,
                    field: 'Title',
                    editor: false,
                    htmlEncode: false,
                    renderer : function (info) {
                        const me = this,
                            record = info.record,
                            value = record.get(me.field);

                        let imageUrl;

                        if (record.imageUrl) {
                            imageUrl = record.imageUrl;
                            return `
                            <div class="b-resource-info">
                                ${imageUrl ? `<img class="b-resource-image" draggable="false" src="${imageUrl}">` : ''}
                                <dl>
                                    <dt>${value}</dt>
                                </dl>
                            </div>
                        `;
                        } else {
                            return info.value;
                        }
                    }
                }
            ],

            rowHeight: 40,
            barMargin: 10,
            startDate: me.data.filters.startDate,
            endDate  : me.data.filters.endDate,

            presets    : [
                {
                    base : 'dayAndWeek',
                    id   : 'MyDayAndWeek',
                    displayDateFormat: me.dateFormat,
                    timeResolution   : {
                        unit     : 'day',
                        increment: 1
                    }
                }
            ],
            // Customize preset
            viewPreset: 'MyDayAndWeek',
            project : {
                // store for "timeRanges" feature
                eventStore: me.data.eventStore,
                resourceStore: me.data.resourceStore,
                timeRangeStore: me.data.timeRangesStore
            },

            eventRenderer({ eventRecord, renderData }) {

                let style = 'color:' + ColorHelper.getColorRule(eventRecord.eventColor, eventRecord.fontColor) + ';';

                if (renderData.startsOutsideView) {
                    style += 'margin-left:' + (-1 * Math.round(renderData.left)) + 'px;';
                }

                return '<span style="' + style + '">' + eventRecord.Title + '</span>';
            },

            listeners: {
                // Set the event detail dialog title
                beforeEventEditShow({eventRecord, editor, eventEdit}) {

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

                    let linkToDetails = eventRecord.LinkToDetails;

                    if (linkToDetails) {
                        title = '<a style="color: white;" target="_blank" href="' + linkToDetails.Url + '">' + title + '</a>';
                    }

                    editor.title = title;
                },
                // Set the eventRecord to have it available on beforeEventEditShow
                beforeEventEdit({eventRecord, eventEdit}) {
                    eventEdit.eventRecord = eventRecord;
                }
            }
        });
    }

    // Load the header when we have collected all data from the EventType- and Strategic Approach List
    eventTypesLoaded () {

        const me = this;
        this.createScheduler();

        let configRecord = me.data.configStore.getById('DisableNetworkFilterScheduler');
        me.disableNetworkFilter = configRecord && configRecord.getBoolValue();

        configRecord = me.data.configStore.getById('DisablePrintScheduler');
        me.disablePrint = configRecord && configRecord.getBoolValue();

        new NTHQHeader(this.app, me);
    }
}

