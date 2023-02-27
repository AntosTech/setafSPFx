import { WidgetHelper } from "../../node_modules/@bryntum/calendar/calendar.module.js";
import ColorHelper from '../helper/ColorHelper.js';

/**
 * Create the Legend of the application
 * This class requires a placeholder on the page
 * <div id="legendplaceholder" class="nthqlegend"></div>
 *
 * In the file Content/legend.css you can update the legend colors.
 */
export default class NTHQEventTypeLegend {

    constructor (app, scheduler) {

        const me = this;
        me.eventTypeStore = scheduler.data.eventTypeStore;
        me.configStore = scheduler.data.configStore;

        const legendConfigWidth = me.configStore.getById('LegendWidth'),
            container = document.getElementById('eventtypelegendplaceholder');

        if (legendConfigWidth) {
            container.style.width = legendConfigWidth.Value + 'px'
        }

        const items = [];

        me.eventTypeStore.forEach(eventType => {
            if (eventType.InLegend) {
                items.push(me.createItem(eventType));
            }
        });

        WidgetHelper.append([
            {
                type    : 'container',
                items   : [
                    {
                        type : 'container',
                        items: items
                    }
                ]
            },
        ], { appendTo : container } );

    }

    createItem (eventType) {

        const box_css = 'nthqeventtypelegend_box',
            style = ColorHelper.getColorStyle(eventType.EventBackgroundColor, eventType.EventFontColor);

        return {
            cls: box_css,
            style : style,
            tooltip: eventType.Tooltip || eventType.Name,
            html : eventType.ShortName || eventType.Name
        };
    }
}
