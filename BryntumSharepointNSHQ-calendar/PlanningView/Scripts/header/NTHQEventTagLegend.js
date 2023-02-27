import { WidgetHelper } from "../../node_modules/@bryntum/calendar/calendar.module.js";

/**
 * Create the Legend of the application
 * This class requires a placeholder on the page
 * <div id="eventtaglegendlaceholder" class="nthqlegend"></div>
 *
 */
export default class NTHQEventTypeLegend {

    constructor (app, scheduler) {

        const me = this;
        me.eventTagStore = scheduler.data.eventTagStore;
        me.configStore = scheduler.data.configStore;

        const legendConfigWidth = me.configStore.getById('LegendWidth'),
            container = document.getElementById('eventtaglegendplaceholder');

        if (legendConfigWidth) {
            container.style.width = legendConfigWidth.Value + 'px'
        }

        const items = [];

        me.eventTagStore.forEach(eventType => {
            items.push(me.createItem(eventType));
        });

        WidgetHelper.append([
            {
                type    : 'container',
                cls     : 'nthqeventtaglegend_container',
                items   : items
            },
        ], { appendTo : container } );

    }

    createItem (eventTag) {

        const box_css = 'nthqeventtaglegend_box';

        return {
            cls: box_css,
            tooltip: eventTag.Name,
            html : `<i class="${eventTag.Icon} b-fa" aria-hidden="true"></i><span> -- ${eventTag.Name}</span>`
        };
    }
}
