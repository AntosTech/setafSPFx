import { WidgetHelper } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";

/**
 * Create the Navigationbar of the application
 * This class requires a placeholder on the page
 * <div class="nthq_nav_row"></div>
 *
 */
export default class NTHQNavigationBar {

    constructor (app, scheduler) {

        const me = this;
        me.navigationItemStore = scheduler.data.navigationItemStore;



        const container = document.querySelector('.nthq_nav_row'),
            items = [];

        me.navigationItemStore.forEach(navigationItem => {
           items.push(me.createItem(navigationItem));
        });

        WidgetHelper.append([
            {
                type    : 'container',
                items   : items
            },
        ], { appendTo : container } );

    }

    createItem (navigationItem) {

        const box_css = 'nthq_navigation_item',
            url = navigationItem.Url || {};

        return {
            cls: box_css,
            type: 'button',
            tooltip : url.Description,
            href : url.Url,
            text : navigationItem.Text,
            target : '_blank',
            icon : navigationItem.Icon
        };
    }
}
