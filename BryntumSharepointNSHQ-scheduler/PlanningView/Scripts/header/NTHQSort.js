import { WidgetHelper } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";

/**
 * This class handles the sorting behaviour and adds two comboboxes for sorting in to the header
 *
 * <div id="sortplaceholder" class="nthqsort"></div>
 */
export default class NTHQSort {

    constructor (app, scheduler) {

        var me = this;
        me.app = app;
        me.scheduler = scheduler;

        const [sortFieldCombo, sortDirectionCombo] = WidgetHelper.createWidget([
            {
                type     : 'combo',
                ref      : 'sortFieldCombo',
                color    : 'b-orange b-raised',
                label    : 'Sort',
                listCls : 'nthqsortlist',
                cls     : 'nthqsortfield',
                value    : 'By Start Date',
                items    : [
                    'By Start Date',
                    'By Last Name',
                    'By Directorate',
                    'By Directorate and Rank',
                    'By Rank',
                    'By Event Type',
                    'By Location',
                    'By Nationality'
                ],
                onAction : me.sortByField.bind(me)
            },
            {
                type     : 'combo',
                ref      : 'sortDirectionCombo',
                placeholder: 'Sort direction',
                listCls : 'nthqsortlist',
                cls     : 'nthqsortfield',
                items    : ['Ascending', 'Descending'],
                value    : 'Ascending',
                text     : 'Reset Filter',
                onAction : me.sortDirection.bind(me)
            }
        ]);

        me.scheduler.data.sorter = me.sortByField.bind(me);
        me.scheduler.scheduler.tbar.add(sortFieldCombo, sortDirectionCombo);
        me.sortFieldCombo = me.scheduler.scheduler.tbar.widgetMap.sortFieldCombo;
        me.sortDirectionCombo = me.scheduler.scheduler.tbar.widgetMap.sortDirectionCombo;
    }

    /**
     * Perform the sorting on the resourceStore.
     */
    sortByField () {
        const me = this;
        const value = me.sortFieldCombo.value;
        const resourceStore = me.scheduler.scheduler.store;
        const ascending = me.sortDirectionCombo.value !== 'Descending';

        resourceStore.clearSorters();

        switch (value) {
            case 'By Last Name':
                resourceStore.sort('Lastname', ascending);
                break;
            case 'By Directorate':
                 resourceStore.sort('DirectorateOrDivisionName', ascending);
                break;
            case 'By Directorate and Rank':
                resourceStore.sort([{ field: 'DirectorateOrDivisionName', ascending}, { field: 'Rank', ascending}]);
                break;
            case 'By Rank':
                resourceStore.sort('Rank', ascending);
                break;
            case 'By Event Type':
                resourceStore.sort('TypeOfEventName', ascending);
                break;
            case 'By Location':
                resourceStore.sort('Location', ascending);
                break;
            case 'By Nationality':
                resourceStore.sort('Nationality', ascending);
                break;
            case 'By Start Date':
                resourceStore.sort('startDate', ascending);
                break;
        }
    }

    sortDirection (value) {
        this.sortByField();
    }


}
