import { WidgetHelper } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";

/**
 * This class creates the range fields like start/enddate for the header.
 *
 *  <div id="rangeplaceholder" class="nthqrange"></div>
 *
 *
 */
export default class NTHQStrategic {

    constructor (app, scheduler) {
        var me = this;

        me.app = app;
        me.scheduler = scheduler;
        me.data = scheduler.data;

        const [strategicSwitch, strategicGroup] = WidgetHelper.append([
            {
                type     : 'checkbox',
                ref      : 'strategicChk',
                cls     : 'nthqstrategicfield',
                checked : me.scheduler.strategic,
                text     : 'Strategic',
                onAction : me.switchStrategicMode.bind(me)
            },
            {
                type     : 'checkbox',
                ref      : 'groupLOEChk',
                cls     : 'nthqgroupfield',
                hidden  : !me.scheduler.strategic,
                checked : false,
                text     : 'Group by LOE',
                onAction : me.groupByLOE.bind(me)
            }

        ], { appendTo : document.getElementById('strategicplaceholder') });

        me.strategicGrpField = strategicGroup;

    }

    groupByLOE (value) {
        const store = this.scheduler.data.resourceStore;
        const groupField = 'StrategicApproachTypeLOEName';

        if (value.checked) {
            store.group(groupField);
        } else {
            store.clearGroupers();
        }
    }

    switchStrategicMode (value) {
        const me = this;

        me.app.header.switchStrategicMode(value.checked);

        me.strategicGrpField.hidden = !me.scheduler.strategic;

        if (!me.scheduler.strategic) {
            const store =  me.data.resourceStore;
            me.strategicGrpField.checked = false;
            store.clearGroupers();
        }
    }


}
