import NTHQFilter from "./NTHQFilter.js";
import NTHQNavigationBar from "./NTHQNavigationBar.js";
import NTHQEventTypeLegend from "./NTHQEventTypeLegend.js";
import NTHQEventTagLegend from "./NTHQEventTagLegend.js";

/**
 * Wrapper class for the header. This class requires the follwing placeholder on the html/aspx page
 *
 * <div id="headerplaceholder" class="nthqheader">
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
 */
export default class NTHQHeader {

    constructor(app, scheduler) {

        const me = this;

        me.app = app;
        me.scheduler = scheduler;

        me.app.header = this;

        me.navigationBar = new NTHQNavigationBar(app, scheduler);
        me.filter = new NTHQFilter(app, scheduler);
        me.eventTypelegend = new NTHQEventTypeLegend(app, scheduler);
        me.eventTagLegend = new NTHQEventTagLegend(app, scheduler);
    }
}
