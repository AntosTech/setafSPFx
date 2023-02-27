import { WidgetHelper } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";

/**
 * This class creates the range fields like start/enddate for the header.
 *
 *  <div id="rangeplaceholder" class="nthqrange"></div>
 *
 *
 */
export default class NTHQRange {

    constructor (app, scheduler) {
        var me = this;

        me.app = app;
        me.scheduler = scheduler.scheduler;
        me.data = scheduler.data;
        me.dateFormat = scheduler.dateFormat;

        const [startDateField, endDateField, submitBtn] = WidgetHelper.createWidget([
            {
                type  : 'date',
                ref   : 'startDateField',
                value : me.data.filters.startDate,
                step  : '1d',
                label : 'Start',
                format : me.dateFormat,
                style : 'height: 25px; width:220px;',
                cls   : 'b-bright',
                max   : me.scheduler.endDate,
                onChange({ value }) {
                    me.endDateField.min = value;
                }
            },
            {
                type  : 'date',
                ref   : 'endDateField',
                value : me.data.filters.endDate,
                step  : '1d',
                label : 'End',
                format : me.dateFormat,
                style : 'height: 25px; width:220px;',
                cls   : 'b-bright',
                min   : me.scheduler.startDate,
                onChange({ value }) {
                    me.startDateField.max = value;
                }
            },
            {
                type     : 'button',
                ref      : 'rangeChangeBtn',
                text     : 'Submit',
                style : 'height: 25px; width:100px;min-height: 25px;',
                color    : 'b-orange b-raised',
                icon     : 'b-icon b-fa-play',
                onAction : me.onRangeChange.bind(me)
            },
        ]);

        me.scheduler.tbar.add(startDateField, endDateField, submitBtn);
        me.startDateField = me.scheduler.tbar.widgetMap.startDateField;
        me.endDateField = me.scheduler.tbar.widgetMap.endDateField;
    }

    /**
     * Set the a new timespan on the data. This will cause a reload of the data
     */
    onRangeChange() {

        const me = this;
        const data = me.data;
        data.setTimespan(this.startDateField.value, this.endDateField.value);
    }
}
