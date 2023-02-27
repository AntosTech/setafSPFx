import { WidgetHelper, DomHelper, ObjectHelper, DateHelper } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";

/**
 * This class creates the search functionality.
 *
 * <div id="searchplaceholder" class="nthqsearch"></div>
 */
export default class NTQHSearch {

    constructor (app, scheduler) {

        var me = this;
        me.app = app;
        me.scheduler = scheduler.scheduler;

        [me.search, me.previousBtn, me.nextBtn] = WidgetHelper.createWidget([
            {
                type      : 'text',
                ref       : 'searchField',
                clearable : true,
                style    : 'height: 25px; width:150px;min-height: 25px;',
                label     : '<i class="b-icon b-icon-search"></i>',
                cls       : 'b-bright',
                onChange  : me.onSearchFieldChange.bind(me),
                onClear   : me.onSearchFieldClear.bind(me)
            },
            {
                type     : 'button',
                ref      : 'prevBtn',
                color    : 'b-orange b-raised',
                icon     : 'b-icon b-icon-up',
                style    : 'height: 25px;min-height: 25px;',
                disabled : true,
                tooltip  : {
                    html : `
                        <div class="header">Go to previous hit</div>
                        <div class="content">
                            You can also hold <code>[shift]</code> and press <code>[f3]</code> or <code>[ctrl]/[cmd] + [g]</code>
                        </div>
                    `,
                    position : 'bottom center'
                },
                onAction : me.onPrevHit.bind(me)
            },
            {
                type     : 'button',
                ref      : 'nextBtn',
                color    : 'b-orange b-raised',
                icon     : 'b-icon b-icon-down',
                style    : 'height: 25px;min-height: 25px;',
                disabled : true,
                tooltip  : {
                    html : `
                        <div class="header">Go to next hit</div>
                        <div class="content">
                            You can also press <code>[f3]</code> or <code>[ctrl]/[cmd] + [g]</code>
                        </div>
                    `,
                    position : 'bottom center'
                },
                onAction : me.onNextHit.bind(me)
            }
        ]);

        me.scheduler.tbar.add('->', me.search, me.previousBtn, me.nextBtn);

        me.search = me.scheduler.tbar.widgetMap.searchField;
        me.previousBtn = me.scheduler.tbar.widgetMap.prevBtn;
        me.nextBtn = me.scheduler.tbar.widgetMap.nextBtn;

        me.scheduler.on({
            search: me.onSearchPerformed,
            clearsearch: me.onClearPerformed
        }, me);

    }

    onNextHit() {
        DomHelper.focusWithoutScrolling(this.scheduler.element);
        this.scheduler.features.search.gotoNextHit(false, { animate : 300 });
    }

    onPrevHit() {
        DomHelper.focusWithoutScrolling(this.scheduler.element);
        this.scheduler.features.search.gotoPrevHit({ animate : 300 });
    }

    onSearchPerformed({ find, found }) {
        const me     = this,
            search = me.search;

        // Needed when you search by calling search method manually.
        // Suspend events so as not to cause feedabck and do the search twice.
        if (!ObjectHelper.isEqual(search.value, find)) {
            search.suspendEvents();
            search.value = find instanceof Date ? DateHelper.format(find, 'L') : find;
            search.resumeEvents();
        }
        search.badge = found.length;
        DomHelper.focusWithoutScrolling(me.scheduler.element);
        me.previousBtn.enable();
        me.nextBtn.enable();
    }

    onClearPerformed() {
        const me = this;

        // need when you reset search by calling clear method manually
        me.search.value = '';

        me.search.badge = null;
        me.previousBtn.disable();
        me.nextBtn.disable();
    }

    onSearchFieldClear() {
        this.scheduler.features.search.clear();
    }

    onSearchFieldChange({ value }) {
        this.scheduler.features.search.search(value);
    }


}
