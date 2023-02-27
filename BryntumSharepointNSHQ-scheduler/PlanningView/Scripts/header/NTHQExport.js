import { WidgetHelper } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";

/**
 * This class creates the range fields like start/enddate for the header.
 *
 *  <div id="rangeplaceholder" class="nthqrange"></div>
 *
 *
 */
export default class NTHQExport {

    constructor (app, scheduler) {
        var me = this;

        me.app = app;
        me.scheduler = scheduler.scheduler;
        me.data = scheduler.data;

        if (!scheduler.disablePrint) {
            WidgetHelper.append([
                {
                    type : 'button',
                    cls  : 'nthqexportbtn',
                    text : 'Print',
                    color: 'b-orange b-raised',
                    icon : 'fa fa-file-pdf',
                    onAction() {
                        me.scheduler.features.pdfExport.showExportDialog();
                    }
                }
            ], {appendTo: document.getElementById('exportplaceholder')});
        }
    }
}
