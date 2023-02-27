import { WidgetHelper, Popup, TabPanel, Checkbox } from "../../node_modules/@bryntum/calendar/calendar.module.js"

/**
 * This class creates the filter dialog.
 *
 * <div id="filterplaceholder" class="nthqfilter"></div>
 */
export default class NTHQFilter {

    constructor (app, scheduler) {

        var me = this;
        me.app = app;
        me.scheduler = scheduler;
        me.data = scheduler.data;
        me.categories = {};
        me.categoryHeaders = [];
        // indicate how many items per category column
        me.numberOfItemsPerColumn = 6;
        // adjust container height here
        me.containerHeight = 210;

        me.disableNetworkFilter = scheduler.disableNetworkFilter;

        const [filterBtn, resetFilterBtn] = WidgetHelper.append([
            {
                type     : 'button',
                cls      : 'nthqfilterbtn',
                ref      : 'filterBtn',
                text     : 'Filter',
                color    : 'b-orange b-raised',
                icon     : 'b-icon b-fa-filter',
                onAction : me.openFilterWindow.bind(me)
            },
            {
                type     : 'button',
                ref      : 'resetFilterBtn',
                text     : 'Reset Filter',
                color    : 'b-orange b-raised',
                cls      : 'nthqfilterbtn',
                icon     : 'b-icon b-fa-redo',
                disabled : true,
                onAction : me.resetFilter.bind(me)
            }
        ], { appendTo : document.getElementById('filterplaceholder') });

        me.filterBtn = filterBtn;
        me.resetFilterBtn = resetFilterBtn;
    }

    /**
     * Open the filter window and create the filter dialog for the first time
     */
    openFilterWindow () {

            const me = this;

            // We should have data before constructing the dialog
            if (!me.data.eventTypesLoaded || !me.data.directoratesLoaded || !me.data.strategicTypesLoaded)
                return;

            if (!me.popup) {
                me.createPopup();
            }

            if (!me.popup.isVisible) {
                me.setFilters();
                me.toggleSelectButtons();
                me.popup.show();
            }
            else {
                me.popup.hide();
            }
    }

    /**
     * Create and populate filter items
     *
     * @param items EventType or Directorate records
     * @param tabIndex
     * @returns {Array} An array of containers to add to the a dialog tab
     */
    getContainers (items, tabIndex, options = {}) {

        const me = this;
        let categories = {};

        // iterate each record and create a checkbox
        items.filter(item => item.isEventType ? item.Visible : true).forEach((item => {

            if (!categories[item.Category]) {
                categories[item.Category] = [];
            }
            // hash the checkboxes on category
            categories[item.Category].push(new Checkbox({
                cls   : 'nthqcategoryitem',
                typeId : item.id,
                checked : true,
                maxWidth : 150,
                style   : 'padding-left: 10px;',
                categoryItem : item,
                category : item.Category,
                onAction : me.onItemCheck.bind(me),
                tabIndex : tabIndex,
                text  : item.Name
            }));
        }));

        // Create the containers by iterating the categories
        let containers = [];
        Object.keys(categories).forEach(category => {

            let cat_items = [];
            me.categories[category] = categories[category].slice();

            // Split items up in numberOfItemsPerColumn per container
            while (categories[category].length > 0) {
                cat_items.push(categories[category].splice(0, me.numberOfItemsPerColumn));
            }

            cat_items.forEach((items, index) => {
                let container = {
                    type    : 'container',
                    cls     : 'nthqcategory'
                };

                let headerConfig = {
                    style   : 'height: 25px;',
                    cls     : 'nthqcategoryitem',
                    tabIndex : tabIndex
                };

                // Set the header for each category. Used to select all items in a category.
                if (index === 0) {
                    headerConfig.category = category;
                    headerConfig.checked = true;
                    headerConfig.onAction = me.onCategoryCheck.bind(me);
                    headerConfig.text = '<b><u>' + category + '</u></b>';

                    headerConfig = new Checkbox(headerConfig);
                    me.categoryHeaders.push(headerConfig);
                }

                items.unshift(headerConfig);
                container.items = items;
                containers.push(container);
            });
        });

        if (options.unaligned) {
            me.unaligned = new Checkbox({
                checked : false,
                cls     : 'nthqcategoryitem',
                text    : '<b>Unaligned Activities</b>',
                tabIndex: tabIndex,
                typeId  : 'unalignedactivities'
            });

            containers[0].items.push(me.unaligned);
        }

        return containers;
    }

    /**
     * create the popup filter dialog
     */
    createPopup () {

        const me = this;

        const applications = me.data.eventTypeStore.records;
        const directorates = me.data.directorateStore.records;
        const strategics = me.data.strategicTypeStore.records;
        const networks = me.data.networkTypeStore.records;
        const tags = me.data.eventTagStore.records;

        let tabNames = [];

        if (!me.disableNetworkFilter) {
            tabNames.push({ name: 'Network', items: networks, options : {}});
        }

        tabNames = tabNames.concat([
            { name: 'Applications', items: applications, options : {}},
            { name: 'Directorates', items: directorates, options : {}},
            { name: 'Strategic Approach', items: strategics, options : { unaligned: true }},
            { name: 'Tags', items: tags, options : {}}
            ]);


        let index = 0;

        const tabs = tabNames.map((tab, index) => {
            return {
                        title : tab.name,
                        height   : me.containerHeight,
                        layoutStyle : {
                            flexDirection : 'column'
                        },
                        items : me.getContainers(tab.items, index, tab.options)
                };
        });

        me.tabPanel = new TabPanel({
            ref   : 'filterTabpanel',
            cls   : 'nthqfilter-tabpanel',
            onTabchange : () => {
                me.toggleSelectButtons();
            },
            items  : tabs
        });

       me.popup = new Popup({
            forElement : document.querySelector('.nthqfilterbtn'),
            header   : false,
            autoClose : false,
            autoShow : false,
            style    : 'width: 900px;',
            cls      : 'nthqfilter-popup',
            layoutStyle : {
               flexDirection : 'column'
            },
            items    : [
               me.tabPanel,
                {
                    type    : 'container',
                    cls     : 'b-raised',
                    items : [
                        {
                            type : 'button',
                            text : 'Select all',
                            disabled : true,
                            ref  : 'selectAllBtn',
                            color    : 'b-orange b-raised',
                            onAction : me.selectAll.bind(me)
                        },
                        {
                            type : 'button',
                            text : 'Deselect all',
                            ref  : 'deselectAllBtn',
                            color    : 'b-orange b-raised',
                            onAction : me.deselectAll.bind(me)
                        },
                        {
                            type : 'button',
                            text : 'Submit',
                            color    : 'b-orange b-raised',
                            onAction : me.submitFilter.bind(me)
                        },
                        {
                            type : 'button',
                            text : 'Cancel',
                            color    : 'b-orange b-raised',
                            onAction : me.closeFilterPopup.bind(me)
                        }
                    ]
                }
            ]
        });
    }

    /**
     * Disable SelectAll or DeselectAll buttons when all items on a tab are selected or deselected
     */
    toggleSelectButtons () {
        const me = this;
        const tabIndex = me.tabPanel.activeIndex;

        const checkboxes = me.getAllCheckBoxes(tabIndex);

        const allSelected = !checkboxes.some(item => {
             return !item.checked
        });

        const allDeselected = !checkboxes.some(item => {
            return item.checked;
        });

        me.popup.widgetMap.selectAllBtn.disabled = allSelected;
        me.popup.widgetMap.deselectAllBtn.disabled = allDeselected;
    }

    /**
     * Handle the reset filter.
     */
    resetFilter () {
        const me = this;
        me.resetFilterBtn.disabled = true;
        me.data.resetFilter();

        if (me.popup) {
            me.popup.close();
        }
    }

    /**
     * Handle category click. Select or deselect all sub items.
     *
     * @param value
     */
    onCategoryCheck (value) {
        const me = this;

        if (!value.userAction)
            return;

        const category = me.categories[value.source.category];

        category.forEach(item => {
            item.checked = value.checked;
        });

        // if (value.source.category === 'PTS') {
        //     me.unplanned.checked = value.checked;
        // }

        me.toggleSelectButtons();
    }

    /**
     * Handle item click. Check header when all items are selected
     * @param value
     */

    onItemCheck (value) {
        const me = this;
        if (!value.userAction)
            return;

        me.setValueCategoryHeader(value.source.category);
        me.toggleSelectButtons();
    }

    /**
     * Set header checkbox value based on all items checked in a category
     * @param category
     */
    setValueCategoryHeader (category) {
        const me = this;
        const items = me.categories[category];
        const allSelected = !items.some(item => {
            return !item.checked;
        });
        const someDeselected = items.some(item => {
            return !item.checked;
        });

        if (allSelected || someDeselected) {
            const header = me.categoryHeaders.find(item => item.category === category);

            if (allSelected) {
                header.checked = true;
            }

            if (someDeselected) {
                header.checked = false;
            }

        }
    }

    selectOrDeselectAllItems (value) {

        const me = this;
        const tabIndex = me.tabPanel.activeIndex;
        let checkboxes = me.getAllCheckBoxes(tabIndex);

        checkboxes.forEach(checkbox => {
            checkbox.checked = value;
        });

        checkboxes = me.getCategoryCheckboxes(tabIndex);

        checkboxes.forEach(checkbox => {
            checkbox.checked = value;
        });

        this.popup.widgetMap.selectAllBtn.disabled = value;
        this.popup.widgetMap.deselectAllBtn.disabled = !value;
    }

    selectAll () {
        this.selectOrDeselectAllItems(true);
    }

    deselectAll () {
        this.selectOrDeselectAllItems(false);
    }

    /**
     * Apply this filter on the dataset
     */
    submitFilter () {
        const me = this;
        me.resetFilterBtn.disabled = false;

        let filters = {
            eventTypes : {},
            directorates : {},
            strategicTypes : {},
            networkTypes : {},
            eventTags : {}
        };

        const items = me.getAllCheckBoxes();

        items.forEach(item => {
            if (item.checked) {
                if (item.categoryItem.isEventType) {
                    filters.eventTypes[item.categoryItem.id] = item.categoryItem;
                }

                if (item.categoryItem.isDirectorate) {
                    filters.directorates[item.categoryItem.id] = item.categoryItem;
                }

                if (item.categoryItem.isStrategicType) {
                    filters.strategicTypes[item.categoryItem.id] = item.categoryItem;
                }

                if (item.categoryItem.isNetworkType) {
                    filters.networkTypes[item.categoryItem.id] = true;
                }

                if (item.categoryItem.isEventTag) {
                    filters.eventTags[item.categoryItem.id] = item.categoryItem;
                }

            }
        });

        if (me.unaligned.checked){
            filters.unaligned = true;
        }

        me.scheduler.data.filter(filters);
        me.popup.close();
    }

    /**
     * Get all checkboxes on a tab
     * @param tabIndex When undefined all checkboxes will be returned
     * @returns {Array}
     */
    getAllCheckBoxes (tabIndex) {

        const me = this;
        const checkboxes = [];

        Object.keys(me.categories).forEach(key => {

            const items = me.categories[key];

            items.forEach(item => {
                if (tabIndex === undefined) {
                    checkboxes.push(item);
                } else {

                    item.tabIndex === tabIndex && checkboxes.push(item);
                }
            });
        });

        return checkboxes;
    }

    /**
        Get all the category header checkboxes per tabIndex
     */
    getCategoryCheckboxes (tabIndex) {
        const me = this;
        const checkboxes = [];
        const items = me.categoryHeaders;

        items.forEach(item => {
            item.tabIndex === tabIndex && checkboxes.push(item);
        });

        return checkboxes;
    }

    /**
     * Set the filter default values.
     */
    setFilters () {
        const me = this;
        const filters = me.data.filters;

        const items = me.getAllCheckBoxes();

        items.forEach(item => {

            item.checked = false;

            if (item.categoryItem.isEventType && filters.eventTypes[item.typeId]) {
                item.checked = true;
            }

            if (item.categoryItem.isDirectorate && filters.directorates[item.typeId]) {
                item.checked = true;
            }

            if (item.categoryItem.isStrategicType && filters.strategicTypes[item.typeId]) {
                item.checked = true;
            }

            if (item.categoryItem.isNetworkType && filters.networkTypes[item.typeId]) {
                item.checked = true;
            }

            if (item.categoryItem.isEventTag && filters.eventTags[item.typeId]) {
                item.checked = true;
            }
        });

        const categories = Object.keys(me.categories);
        categories.forEach(category => {
            me.setValueCategoryHeader(category);
        });
    }

    closeFilterPopup () {
        this.popup.close();
    }

}
