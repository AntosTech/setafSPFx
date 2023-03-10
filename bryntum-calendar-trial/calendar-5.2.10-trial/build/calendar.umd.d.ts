/*!
 *
 * Bryntum Calendar 5.2.10 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
declare module '@bryntum/calendar/calendar.umd.js' {

    type AnyConstructor<A = any> = new (...input: any[]) => A

    type CalendarDragMode = {
        type: 'create'|'move'|'resize'
        create: boolean
        move: boolean
        resize: boolean
    }

    type Breakpoint = {
        name: string
        configs?: object
        callback?: Function
    }

    type CalendarHit = {
        type: 'event'|'dayNumber'|'weekNumber'|'cellOverflow'|'schedule'
        date: Date
        eventRecord: EventModel
    }

    type ResponsiveState = {
        once: ResponsiveState
        when: Function|number
        callback?: Function
    }

    type DayCell = {
        date: Date
        key: string
        cellIndex: number
        day: number
        columnIndex: number
        visibleColumnIndex: number
        isNonWorking: boolean
        week: number[]
        isOtherMonth: boolean
        visible: boolean
        tomorrow: Date
        isRowStart: boolean
        isRowEnd: boolean
        hasOverflow: boolean
        events: EventModel[]
        renderedEvents: EventBar[]
    }

    type EventBar = {
        eventRecord: EventModel
        propagateEndDate: Date
        cls: DomClassList
        iconCls: DomClassList
        dataset: object
        eventColor: string
        isAllDay: boolean
        isOverflow: boolean
        overflows: boolean
        solidBar: boolean
    }

    type HourHeightBreakPoints = {
        thirty: number
        fifteen: number
        ten: number
        five: number
    }

    type HttpMethods = {
        create: 'POST'|'PUT'
        read: 'GET'|'POST'
        update: 'PATCH'|'POST'|'PUT'
        delete: 'DELETE'|'POST'
    }

    type FetchOptions = {
        method?: 'GET'|'POST'|'PUT'|'PATCH'|'DELETE'
        queryParams?: object
        headers?: object
        body?: object
        mode?: 'cors'|'no-cors'|'same-origin'
        credentials?: 'omit'|'same-origin'|'include'
        parseJson?: object
    }

    type DomConfig = {
        tag?: string
        parent?: HTMLElement
        nextSibling?: HTMLElement
        class?: string|object
        className?: string|object
        style?: string|object
        elementData?: object
        dataset?: object
        children?: DomConfig[]|object|string[]|HTMLElement[]
        html?: string
        tooltip?: object
        text?: string
        id?: string
        href?: string
        ns?: string
        src?: string
    }

    type FieldOption = {
        name: string
        type: 'string'|'number'|'date'|'boolean'
        text: string
    }

    type ValueFieldPlaceholders = {
        string: string
        number: string
        date: string
        list: string
    }

    type PanelHeader = {
        cls?: string|object
        dock?: 'top'|'right'|'bottom'|'left'
        title: string
        titleAlign?: 'start'|'center'|'end'
    }

    type EventRenderData = {
        eventRecord: EventModel
        resourceRecord: ResourceModel
        assignmentRecord: AssignmentModel
        startMS: number
        endMS: number
        height: number
        width: number
        top: number
        left: number
    }

    type TimelineContext = {
        domEvent: Event
        eventElement: HTMLElement
        cellElement: HTMLElement
        date: Date
        tick: TimeSpan
        tickIndex: number
        tickParentIndex: number
        tickStartDate: Date
        tickEndDate: Date
        row: Row
        index: number
        eventRecord?: EventModel
        assignmentRecord?: AssignmentModel
        resourceRecord?: ResourceModel
    }

    type AgendaColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class AgendaColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<AgendaColumnConfig>);
    }

    type EventColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class EventColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventColumnConfig>);
    }

    type CalendarTagConfig = {
        faPath: string
        stylesheet: string
    }

    export class CalendarTag extends TimelineBaseTag {
        constructor(config?: Partial<CalendarTagConfig>);
    }

    type CalendarDragConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        creatable: boolean
        disabled: boolean
        draggable: boolean
        footer: DomConfig
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        newName: string|Function
        recurrenceTip: string
        resizable: boolean
        tooltip: boolean|object|EventTip|Partial<EventTipConfig>
        validateCreateFn: Function|string
        validateMoveFn: Function|string
        validateResizeFn: Function|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class CalendarDrag extends CalendarFeature {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<CalendarDragConfig>);
    }

    type CalendarFeatureConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export abstract class CalendarFeature extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<CalendarFeatureConfig>);
    }

    type EventEditConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        dateFormat: string
        disabled: boolean
        editorConfig: object
        items: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        readOnly: boolean
        saveAndCloseOnEnter: boolean
        showRecurringUI: boolean
        timeFormat: string
        triggerEvent: string
        typeField: string
        weekStartDay: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EventEdit extends SchedulerEventEdit {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventEditConfig>);
        editEvent(eventRecord: EventModel, resourceRecord?: ResourceModel, element?: HTMLElement): Promise<void>;
    }

    type EventMenuConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        items: object
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        menu: object
        processItems: Function
        triggerEvent: string|boolean
        type: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EventMenu extends SchedulerEventMenu {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventMenuConfig>);
    }

    type EventTooltipConfig = {
        align: object|string
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        extendAllDayEndDay: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        renderer: Function|string
        showOn: 'click'|'contextmenu'|'mouseover'|'hover'
        titleRenderer: Function|string
        tooltip: EventTip
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EventTooltip extends CalendarFeature {
        readonly eventRecord: EventModel
        readonly tooltip: EventTip
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventTooltipConfig>);
    }

    type ExternalEventSourceConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        dragItemSelector: string
        dragRootElement: HTMLElement|string
        draggable: object
        getRecordFromElement: Function|string
        grid: Grid|string
        hideExternalProxy: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ExternalEventSource extends CalendarFeature {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ExternalEventSourceConfig>);
    }

    type LoadOnDemandConfig = {
        alwaysLoadNewRange: boolean
        beforeRequest: Function|string
        bubbleEvents: object
        callOnFunctions: boolean
        clearOnNewRange: boolean
        client: Widget
        dateFormat: string
        disabled: boolean
        endDateParamName: string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        startDateParamName: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class LoadOnDemand extends CalendarFeature {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<LoadOnDemandConfig>);
        refresh(): void;
    }

    type ScheduleMenuConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        items: object
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        menu: object
        processItems: Function
        triggerEvent: string|boolean
        type: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ScheduleMenu extends SchedulerScheduleMenu {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ScheduleMenuConfig>);
    }

    type WeekExpanderConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class WeekExpander extends CalendarFeature {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<WeekExpanderConfig>);
    }

    type PrintConfig = {
        titleRenderer: Function|string
        wysiwyg: boolean
        onPrint: Function
    }

    export class Print {
        onPrint: Function
        constructor(config?: Partial<PrintConfig>);
        print(): Promise<void>;
    }

    export abstract class DayLayout extends Base {
    }

    type FluidDayLayoutConfig = {
        clearanceMinutes: number
        gutter: boolean
        gutterWidth: number
        staggerMinimum: number
        staggerWidth: boolean|number
        stretch: boolean
    }

    export class FluidDayLayout extends DayLayout {
        constructor(config?: Partial<FluidDayLayoutConfig>);
    }

    type CalendarStoresClassConfig = {
        assignmentStore: AssignmentStore
        assignments: AssignmentModel[]|object[]|Partial<AssignmentModelConfig>[]
        crudManager: object|CrudManager|Partial<CrudManagerConfig>
        crudManagerClass: CrudManager
        defaultCalendar: string|ResourceModel
        destroyStores: boolean
        eventStore: EventStore
        events: EventModel[]|object[]|Partial<EventModelConfig>[]
        project: ProjectModel|object|Partial<ProjectModelConfig>
        resourceStore: ResourceStore
        resources: ResourceModel[]|object[]|Partial<ResourceModelConfig>[]
        onDataChange: Function
    }

    export class CalendarStoresClass extends ProjectConsumerClass {
        assignmentStore: AssignmentStore
        assignments: AssignmentModel[]|object[]|Partial<AssignmentModelConfig>[]
        crudManager: CrudManager
        defaultCalendar: ResourceModel
        eventStore: EventStore
        events: EventModel[]|object[]|Partial<EventModelConfig>[]
        resourceStore: ResourceStore
        resources: ResourceModel[]|object[]|Partial<ResourceModelConfig>[]
        onDataChange: Function
        constructor(config?: Partial<CalendarStoresClassConfig>);
    }

    export const CalendarStores : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & CalendarStoresClass>

    export class EventSorter {
        static defaultSorterFn(event1: EventModel, event2: EventModel): number;
    }

    type CalendarFeaturesType = {
        drag: CalendarDrag
        eventEdit: EventEdit
        eventMenu: EventMenu
        eventTooltip: EventTooltip
        externalEventSource: ExternalEventSource
        loadOnDemand: LoadOnDemand
        print: Print
        scheduleMenu: ScheduleMenu
        weekExpander: WeekExpander
    }

    type CalendarFeaturesConfigType = {
        drag: string|boolean|Partial<CalendarDragConfig>
        eventEdit: string|boolean|Partial<EventEditConfig>
        eventMenu: string|boolean|Partial<EventMenuConfig>
        eventTooltip: string|boolean|Partial<EventTooltipConfig>
        externalEventSource: string|boolean|Partial<ExternalEventSourceConfig>
        loadOnDemand: string|boolean|Partial<LoadOnDemandConfig>
        print: string|boolean|Partial<PrintConfig>
        scheduleMenu: string|boolean|Partial<ScheduleMenuConfig>
        weekExpander: string|boolean|Partial<WeekExpanderConfig>
    }

    type CalendarConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOverlap: boolean
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        assignmentStore: AssignmentStore
        assignments: AssignmentModel[]|object[]|Partial<AssignmentModelConfig>[]
        autoCreate: object|string|boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        // @deprecated
        breakpoints: object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        contextMenuTriggerEvent: 'contextmenu'|'click'|'dblclick'
        crudManager: object|CrudManager|Partial<CrudManagerConfig>
        crudManagerClass: CrudManager
        dataset: object
        date: Date
        dateFormat: string
        datePicker: object|boolean
        defaultBindProperty: string
        defaultCalendar: string|ResourceModel
        defaultFocus: Function
        defaults: object
        deselectOnClick: boolean
        destroyStores: boolean
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        enableDeleteKey: boolean
        enableRecurringEvents: boolean
        enableUndoRedoKeys: boolean
        eventSelectionDisabled: boolean
        eventStore: EventStore
        events: EventModel[]|object[]|Partial<EventModelConfig>[]
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideNonWorkingDays: boolean
        hideWhenEmpty: boolean
        highlightDate: boolean|Function
        highlightPredecessors: boolean
        highlightSuccessors: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        includeWeekendsButton: boolean|Partial<ButtonConfig>
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        isEventSelectable: Function
        itemCls: string
        items: object
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        maintainSelectionOnDatasetChange: boolean
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxDate: Date|string
        maxHeight: string|number
        maxWidth: string|number
        minDate: Date|string
        minHeight: string|number
        minWidth: string|number
        mode: string
        modeDefaults: object
        modes: object
        monitorResize: boolean
        multiEventSelect: boolean
        namedItems: object
        navigatorPlacement: 'toolbar'|'sidebar'
        nonWorkingDays: object
        overlaySidebar: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        project: ProjectModel|object|Partial<ProjectModelConfig>
        readOnly: boolean
        ref: string
        resourceImagePath: string
        resourceStore: ResourceStore
        resources: ResourceModel[]|object[]|Partial<ResourceModelConfig>[]
        responsive: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showRecurringUI: boolean
        showTooltipWhenDisabled: boolean
        sidebar: object|boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        syncMask: string|object|null
        tab: boolean|object
        tag: string
        tbar: object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        triggerSelectionChangeOnRemove: boolean
        ui: string|object
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        features: Partial<CalendarFeaturesConfigType>
        onActiveItemChange: Function
        onAfterEventEdit: Function
        onAfterEventSave: Function
        onAssignmentSelectionChange: Function
        onBeforeActiveItemChange: Function
        onBeforeAssignmentDelete: Function
        onBeforeAssignmentSelectionChange: Function
        onBeforeDestroy: Function
        onBeforeDragCreateEnd: Function
        onBeforeDragMoveEnd: Function
        onBeforeDragResizeEnd: Function
        onBeforeEventDelete: Function
        onBeforeEventEdit: Function
        onBeforeEventEditShow: Function
        onBeforeEventSave: Function
        onBeforeEventSelectionChange: Function
        onBeforeHide: Function
        onBeforePrint: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onCellOverflowClick: Function
        onContextMenuItem: Function
        onContextMenuToggleItem: Function
        onDataChange: Function
        onDateChange: Function
        onDateRangeChange: Function
        onDateRangeRequested: Function
        onDayNumberClick: Function
        onDestroy: Function
        onDragCreateEnd: Function
        onDragMoveEnd: Function
        onDragResizeEnd: Function
        onEmptyCellClick: Function
        onEventAutoCreated: Function
        onEventClick: Function
        onEventContextMenu: Function
        onEventDblClick: Function
        onEventEditBeforeSetRecord: Function
        onEventMenuBeforeShow: Function
        onEventMenuItem: Function
        onEventMenuShow: Function
        onEventMouseDown: Function
        onEventMouseOut: Function
        onEventMouseOver: Function
        onEventMouseUp: Function
        onEventPropagate: Function
        onEventSelectionChange: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onLoadOnDemandFail: Function
        onMonthNameClick: Function
        onNavigate: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onScheduleClick: Function
        onScheduleDblClick: Function
        onScheduleMenuBeforeShow: Function
        onScheduleMenuItem: Function
        onScheduleMenuShow: Function
        onScheduleMouseDown: Function
        onScheduleMouseOut: Function
        onScheduleMouseOver: Function
        onScheduleMouseUp: Function
        onSelectionChange: Function
        onShow: Function
        onToolClick: Function
        onViewPaint: Function
        onWeekNumberClick: Function
    }

    export class Calendar extends Panel implements ResponsiveClass, CalendarStoresClass, CrudManagerViewClass, RecurringEventsClass, EventNavigationClass, EventSelectionClass {
        readonly activeEvent: EventModel
        activeSubView: Widget
        activeView: Widget
        assignmentStore: AssignmentStore
        assignments: AssignmentModel[]|object[]|Partial<AssignmentModelConfig>[]
        crudManager: CrudManager
        date: Date
        readonly datePicker: CalendarDatePicker
        defaultCalendar: ResourceModel
        readonly editRecurrenceButton: RecurrenceLegendButton
        readonly eventSource: typeof CalendarMixin
        eventStore: EventStore
        events: EventModel[]|object[]|Partial<EventModelConfig>[]
        hideNonWorkingDays: boolean
        isEngineReady: boolean
        isEventSelectable: Function
        readonly localeManager: typeof LocaleManager
        maxDate: Date
        minDate: Date
        mode: string
        modeDefaults: object
        modes: object
        project: ProjectModel
        readOnly: boolean
        readonly recurrenceCombo: RecurrenceCombo
        resourceStore: ResourceStore
        resources: ResourceModel[]|object[]|Partial<ResourceModelConfig>[]
        selectedAssignments: AssignmentModel[]
        selectedEvents: EventModel[]
        readonly sidebar: Container
        readonly viewContainer: Container
        views: Widget[]
        features: CalendarFeaturesType
        onActiveItemChange: Function
        onAssignmentSelectionChange: Function
        onBeforeActiveItemChange: Function
        onBeforeAssignmentDelete: Function
        onBeforeAssignmentSelectionChange: Function
        onBeforeDestroy: Function
        onBeforeDragCreateEnd: Function
        onBeforeDragMoveEnd: Function
        onBeforeDragResizeEnd: Function
        onBeforeEventDelete: Function
        onBeforeEventSelectionChange: Function
        onBeforePrint: Function
        onBeforeResponsiveStateChange: Function
        onCatchAll: Function
        onCellOverflowClick: Function
        onDataChange: Function
        onDateChange: Function
        onDateRangeChange: Function
        onDateRangeRequested: Function
        onDayNumberClick: Function
        onDestroy: Function
        onDragCreateEnd: Function
        onDragMoveEnd: Function
        onDragResizeEnd: Function
        onEmptyCellClick: Function
        onEventAutoCreated: Function
        onEventClick: Function
        onEventContextMenu: Function
        onEventDblClick: Function
        onEventMouseDown: Function
        onEventMouseOut: Function
        onEventMouseOver: Function
        onEventMouseUp: Function
        onEventPropagate: Function
        onEventSelectionChange: Function
        onLoadOnDemandFail: Function
        onMonthNameClick: Function
        onNavigate: Function
        onRefresh: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onScheduleClick: Function
        onScheduleDblClick: Function
        onScheduleMouseDown: Function
        onScheduleMouseOut: Function
        onScheduleMouseOver: Function
        onScheduleMouseUp: Function
        onSelectionChange: Function
        onViewPaint: Function
        onWeekNumberClick: Function
        constructor(config?: Partial<CalendarConfig>);
        static L(text: string, templateData?: object): string;
        static optionalL(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        clearEventSelection(): void;
        createEvent(date?: Date): void;
        deselect(eventOrAssignment: EventModel|AssignmentModel): void;
        deselectAssignment(assignment: AssignmentModel, event?: Event): void;
        deselectAssignments(assignments: AssignmentModel[]): void;
        deselectEvent(event: EventModel): void;
        deselectEvents(events: EventModel[]): void;
        eachView(fn: Function, args?: object[], thisObj?: object): void;
        editEvent(eventRecord: EventModel, resourceRecord?: ResourceModel, element?: HTMLElement): void;
        getEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        getOccurrencesFor(recurringEvent: TimeSpan): TimeSpan[];
        hasListener(eventName: string): boolean;
        isAssignmentSelected(assignment: AssignmentModel): boolean;
        isEventSelected(event: EventModel): boolean;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        refresh(): void;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        resolveEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        resumeEvents(): boolean;
        select(eventOrAssignment: EventModel|AssignmentModel, preserveSelection?: boolean): void;
        selectAssignment(assignment: AssignmentModel, preserveSelection?: boolean, event?: Event): void;
        selectAssignments(assignments: AssignmentModel[]): void;
        selectEvent(event: EventModel, preserveSelection?: boolean): void;
        selectEvents(events: EventModel[], preserveSelection?: boolean): void;
        shiftNext(): void;
        shiftPrevious(): void;
        shiftToNow(): void;
        showContextMenu(event: Event, alignSpec?: object|HTMLElement): void;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
        updateLocalization(): void;
        updateProject(project: ProjectModel): void;
        whenProjectReady(callback: Function): void;
    }

    type EventNavigationClassConfig = {
        enableDeleteKey: boolean
        onNavigate: Function
    }

    export class EventNavigationClass extends SchedulerEventNavigationClass {
        readonly activeEvent: EventModel
        onNavigate: Function
        constructor(config?: Partial<EventNavigationClassConfig>);
    }

    export const EventNavigation : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & EventNavigationClass>

    type EventSelectionClassConfig = {
        deselectOnClick: boolean
        eventSelectionDisabled: boolean
        highlightPredecessors: boolean
        highlightSuccessors: boolean
        isEventSelectable: Function
        maintainSelectionOnDatasetChange: boolean
        multiEventSelect: boolean
        triggerSelectionChangeOnRemove: boolean
        onAssignmentSelectionChange: Function
        onBeforeAssignmentSelectionChange: Function
        onBeforeEventSelectionChange: Function
        onEventSelectionChange: Function
        onSelectionChange: Function
    }

    export class EventSelectionClass extends SchedulerEventSelectionClass {
        selectedEvents: EventModel[]
        onAssignmentSelectionChange: Function
        onBeforeAssignmentSelectionChange: Function
        onBeforeEventSelectionChange: Function
        onEventSelectionChange: Function
        onSelectionChange: Function
        constructor(config?: Partial<EventSelectionClassConfig>);
        clearEventSelection(): void;
        deselect(event: EventModel): void;
        deselectEvent(event: EventModel): void;
        deselectEvents(events: EventModel[]): void;
        isEventSelected(event: EventModel): boolean;
        select(event: EventModel, preserveSelection?: boolean): void;
        selectEvent(event: EventModel, preserveSelection?: boolean): void;
        selectEvents(events: EventModel[]): void;
    }

    export const EventSelection : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & EventSelectionClass>

    type AgendaViewFeaturesType = {
        cellEdit: CellEdit
        cellMenu: CellMenu
        cellTooltip: CellTooltip
        columnAutoWidth: ColumnAutoWidth
        columnDragToolbar: ColumnDragToolbar
        columnPicker: ColumnPicker
        columnRename: ColumnRename
        columnReorder: ColumnReorder
        columnResize: ColumnResize
        excelExporter: GridExcelExporter
        filter: Filter
        filterBar: FilterBar
        group: Group
        groupSummary: GridGroupSummary
        headerMenu: HeaderMenu
        mergeCells: MergeCells
        multipage: GridMultiPageExporter
        multipagevertical: GridMultiPageVerticalExporter
        pdfExport: GridPdfExport
        quickFind: QuickFind
        regionResize: RegionResize
        rowCopyPaste: RowCopyPaste
        rowExpander: RowExpander
        rowReorder: RowReorder
        search: Search
        singlepage: GridSinglePageExporter
        sort: Sort
        stickyCells: StickyCells
        stripe: Stripe
        summary: GridSummary
        tree: Tree
        treeGroup: TreeGroup
    }

    type AgendaViewFeaturesConfigType = {
        cellEdit: string|boolean|Partial<CellEditConfig>
        cellMenu: string|boolean|Partial<CellMenuConfig>
        cellTooltip: string|boolean|Partial<CellTooltipConfig>
        columnAutoWidth: string|boolean|Partial<ColumnAutoWidthConfig>
        columnDragToolbar: string|boolean|Partial<ColumnDragToolbarConfig>
        columnPicker: string|boolean|Partial<ColumnPickerConfig>
        columnRename: string|boolean|Partial<ColumnRenameConfig>
        columnReorder: string|boolean|Partial<ColumnReorderConfig>
        columnResize: string|boolean|Partial<ColumnResizeConfig>
        excelExporter: string|boolean|Partial<GridExcelExporterConfig>
        filter: string|boolean|Partial<FilterConfig>
        filterBar: string|boolean|Partial<FilterBarConfig>
        group: string|boolean|Partial<GroupConfig>
        groupSummary: string|boolean|Partial<GridGroupSummaryConfig>
        headerMenu: string|boolean|Partial<HeaderMenuConfig>
        mergeCells: string|boolean|Partial<MergeCellsConfig>
        multipage: string|boolean|Partial<GridMultiPageExporterConfig>
        multipagevertical: string|boolean|Partial<GridMultiPageVerticalExporterConfig>
        pdfExport: string|boolean|Partial<GridPdfExportConfig>
        quickFind: string|boolean|Partial<QuickFindConfig>
        regionResize: string|boolean|Partial<RegionResizeConfig>
        rowCopyPaste: string|boolean|Partial<RowCopyPasteConfig>
        rowExpander: string|boolean|Partial<RowExpanderConfig>
        rowReorder: string|boolean|Partial<RowReorderConfig>
        search: string|boolean|Partial<SearchConfig>
        singlepage: string|boolean|Partial<GridSinglePageExporterConfig>
        sort: string|boolean|Partial<SortConfig>
        stickyCells: string|boolean|Partial<StickyCellsConfig>
        stripe: string|boolean|Partial<StripeConfig>
        summary: string|boolean|Partial<GridSummaryConfig>
        tree: string|boolean|Partial<TreeConfig>
        treeGroup: string|boolean|Partial<TreeGroupConfig>
    }

    type AgendaViewConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        animateRemovingRows: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoCreate: object|string|boolean
        autoHeight: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        // @deprecated
        breakpoints: object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        columnLines: boolean
        columns: object|object[]
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        contextMenuTriggerEvent: 'contextmenu'|'click'|'dblclick'
        data: object[]|Model[]|Partial<ModelConfig>[]
        dataset: object
        date: Date
        dayCellRenderer: Function
        defaultBindProperty: string
        defaultFocus: Function
        defaultRegion: string
        defaults: object
        destroyStore: boolean
        disableGridRowModelWarning: boolean
        disabled: boolean
        dismissDelay: number
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        emptyText: string
        enableSticky: boolean
        enableTextSelection: boolean
        enableUndoRedoKeys: boolean
        endDate: Date
        eventFilter: Function
        eventHeight: number|string
        eventListTimeFormat: string
        eventRenderer: Function
        eventRowSpacing: number|string
        eventSorter: Function
        eventTimeRenderer: Function|string
        features: Partial<AgendaViewFeaturesConfigType>
        fillLastColumn: boolean
        fixedRowHeight: boolean
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        fullRowRefresh: boolean
        getHtml: Function|string
        getRowHeight: Function
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideEventOverflow: boolean
        hideHeaders: boolean
        hideNonWorkingDays: boolean
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        keyMap: object
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        longPressTime: number
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxDate: Date|string
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minDate: Date|string
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        nonWorkingDays: object
        offsetStartsBeforeEvents: boolean
        owner: Widget
        plugins: Function[]
        positioned: boolean
        preserveFocusOnDatasetChange: boolean
        preserveScrollOnDatasetChange: boolean
        preventTooltipOnTouch: boolean
        range: string|object
        readOnly: boolean
        ref: string
        resizeToFitIncludesHeader: boolean
        resourceImagePath: string
        responsive: object
        responsiveLevels: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        ripple: boolean|object
        rootElement: ShadowRoot
        rowHeight: number
        scrollAction: 'hide'|'realign'|null
        scrollManager: object|ScrollManager|Partial<ScrollManagerConfig>
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        scrollerClass: typeof Scroller
        selectionMode: object
        shortDateFormat: string
        shortDateTimeFormat: string
        shortEventCls: string
        shortEventDuration: string|number
        showAnimation: boolean|object
        showDirty: boolean
        showOnClick: boolean
        showOnHover: boolean
        showResourceAvatars: boolean|string
        showTooltipWhenDisabled: boolean
        startDate: Date
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        store: Store|Partial<StoreConfig>
        strips: object
        style: string
        subGridConfigs: object
        syncMask: string|object|null
        syncViewDate: boolean
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        timeFormat: string
        title: string
        tools: object
        tooltip: string|object
        trackMouse: boolean
        transitionDuration: number
        trapFocus: boolean
        ui: string|object
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeCancelCellEdit: Function
        onBeforeCellEditStart: Function
        onBeforeChangeDate: Function
        onBeforeClose: Function
        onBeforeColumnDragStart: Function
        onBeforeColumnDropFinalize: Function
        onBeforeCopy: Function
        onBeforeDestroy: Function
        onBeforeFinishCellEdit: Function
        onBeforeHide: Function
        onBeforePaste: Function
        onBeforePdfExport: Function
        onBeforeRenderRow: Function
        onBeforeRenderRows: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSelectionChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeToggleGroup: Function
        onBeforeToggleNode: Function
        onCancelCellEdit: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMenuBeforeShow: Function
        onCellMenuItem: Function
        onCellMenuShow: Function
        onCellMenuToggleItem: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onCollapseNode: Function
        onColumnDragStart: Function
        onColumnDrop: Function
        onContextMenuItem: Function
        onContextMenuToggleItem: Function
        onCopy: Function
        onDataChange: Function
        onDestroy: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onExpandNode: Function
        onFinishCellEdit: Function
        onFocusIn: Function
        onFocusOut: Function
        onHeaderMenuBeforeShow: Function
        onHeaderMenuItem: Function
        onHeaderMenuShow: Function
        onHeaderMenuToggleItem: Function
        onHide: Function
        onMouseOut: Function
        onMouseOver: Function
        onPaint: Function
        onPaste: Function
        onPdfExport: Function
        onPointerOver: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onRenderRow: Function
        onRenderRows: Function
        onResize: Function
        onResponsive: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onScroll: Function
        onSelectionChange: Function
        onShow: Function
        onStartCellEdit: Function
        onSubGridCollapse: Function
        onSubGridExpand: Function
        onToggleGroup: Function
        onToggleNode: Function
        onToolClick: Function
    }

    export class AgendaView extends EventList {
        offsetStartsBeforeEvents: boolean
        readonly resource: ResourceModel
        features: AgendaViewFeaturesType
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSelectionChange: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onDestroy: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onMouseOut: Function
        onMouseOver: Function
        onPointerOver: Function
        onRefresh: Function
        onResponsive: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onSelectionChange: Function
        constructor(config?: Partial<AgendaViewConfig>);
    }

    type CalendarDatePickerConfig = {
        activeDate: Date
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        cellRenderer: Function|string
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        date: Date
        dayNameFormat: string
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disableOtherMonthCells: boolean
        disableWeekends: boolean
        disabled: boolean
        disabledDates: Function|Date[]|string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editMonth: boolean
        eventRenderer: Function
        eventStore: EventStore
        flex: number|string
        floating: boolean
        focusDisabledDates: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        headerRenderer: Function|string
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideOtherMonthCells: boolean
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxDate: Date
        maxHeight: string|number
        maxWidth: string|number
        minColumnWidth: number
        minDate: Date
        minHeight: string|number
        minRowHeight: number|string
        minWidth: string|number
        monitorResize: boolean
        month: Month|object|Partial<MonthConfig>
        multiSelect: boolean|'range'
        namedItems: object
        nonWorkingDays: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        selection: Date[]
        showAnimation: boolean|object
        showEvents: boolean|'count'|'dots'
        showTooltipWhenDisabled: boolean
        showWeekColumn: boolean
        // @deprecated
        showWeekNumber: boolean
        sixWeeks: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        tip: object
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weekRenderer: Function|string
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeRefresh: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDateChange: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onSelectionChange: Function
        onShow: Function
        onToolClick: Function
    }

    export class CalendarDatePicker extends SchedulerDatePicker implements EventRendererClass {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<CalendarDatePickerConfig>);
        createEventDomConfig(renderData: object, eventRenderer?: Function): DomConfig;
    }

    type CalendarRowConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        animate: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoCreate: object|string|boolean
        autoHeight: boolean
        // @deprecated
        breakpoints: object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        date: Date
        dayCellNameFormat: string
        dayCellRenderer: Function
        dayHeaderRenderer: Function|string
        dayNameFormat: string
        dayNumberCompress: boolean
        dayNumberFormat: string
        daySeparator: string|string[]
        dayStartShift: string|number
        defaultBindProperty: string
        defaultEventRowCount: number
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        emptyCellRenderer: Function|object|string
        endDate: Date
        eventHeight: number|string
        eventRenderer: Function
        eventSorter: Function
        eventSpacing: number
        flex: number|string
        floating: boolean
        gutterHeight: number|string
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideNonWorkingDays: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxDate: Date|string
        maxHeight: string|number
        maxWidth: string|number
        minDate: Date|string
        minDayWidth: number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        nonWorkingDays: object
        overflowButtonRenderer: Function
        overflowClickAction: 'popup'|'expand'
        overflowPopup: Partial<OverflowPopupConfig>
        overflowPopupTrigger: 'click'|'mouseover'|'hover'
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        range: string|object
        readOnly: boolean
        ref: string
        resourceImagePath: string
        responsive: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        shortDateFormat: string
        shortDateTimeFormat: string
        shortEventCls: string
        shortEventDuration: string|number
        showAnimation: boolean|object
        showResourceAvatars: boolean|string
        showTooltipWhenDisabled: boolean
        startDate: Date
        style: string
        syncViewDate: boolean
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        timeFormat: string
        title: string
        tooltip: string|object
        ui: string|object
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeResponsiveStateChange: Function
        onBeforeShow: Function
        onBeforeShowOverflowPopup: Function
        onCatchAll: Function
        onDestroy: Function
        onEmptyCellClick: Function
        onEventAutoCreated: Function
        onFocusIn: Function
        onFocusOut: Function
        onHeightChange: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onShow: Function
        onShowOverflowPopup: Function
    }

    export class CalendarRow extends Widget implements ResponsiveClass, DayCellRendererClass, CalendarMixinClass, DateRangeOwnerClass {
        animateTimeShift: boolean
        date: Date
        dayCellCls: string
        readonly endDate: Date
        eventSpacing: number
        firstVisibleCell: HTMLElement
        firstVisibleDate: Date
        heightAnimation: Promise<any>
        lastVisibleCell: HTMLElement
        lastVisibleDate: Date
        maxDate: Date
        minDate: Date
        readonly modeName: string
        readonly overflowPopup: OverflowPopup
        range: object
        readonly startDate: Date
        readonly visibleCellSelector: string
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeResponsiveStateChange: Function
        onBeforeShowOverflowPopup: Function
        onCatchAll: Function
        onDestroy: Function
        onEmptyCellClick: Function
        onEventAutoCreated: Function
        onHeightChange: Function
        onRefresh: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onShowOverflowPopup: Function
        constructor(config?: Partial<CalendarRowConfig>);
        calendarHitTest(domEvent: Event|Element): CalendarHit;
        createEvent(date: Date): void;
        getDayElement(date: Date|string, strict: boolean): void;
        getEventElement(eventRecord: EventModel|string|number, date?: Date): HTMLElement;
        getEventElements(eventRecord: EventModel|string|number): HTMLElement[];
        getEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        next(): void;
        onEventCreated(eventRecord: EventModel): void;
        previous(): void;
        refresh(): void;
        refreshSoon(): void;
        resolveEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        scrollTo(target: EventModel|Date, options?: object): Promise<any>;
        toggleExpandCollapse(): Promise<void>;
    }

    type DayViewConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allDayEvents: CalendarRow|object|Partial<CalendarRowConfig>
        anchor: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoCreate: object|string|boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        // @deprecated
        breakpoints: object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        coreHours: object|Function|string
        currentTimeIndicatorRenderer: Function|string
        dataset: object
        date: Date
        dayCellRenderer: Function|string
        dayEndTime: string|number
        dayStartShift: string|number
        dayStartTime: string|number
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        endDate: Date
        eventFilter: Function
        eventHeight: number|string
        eventLayout: object
        eventRenderer: Function
        eventSorter: Function
        eventSpacing: number
        fitHours: boolean|object
        fixedDuration: boolean
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideNonWorkingDays: boolean
        hideWhenEmpty: boolean
        hourHeight: number
        hourHeightBreakpoints: HourHeightBreakPoints
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        increment: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxAllDayHeight: number|string
        maxDate: Date|string
        maxHeight: string|number
        maxWidth: string|number
        minDate: Date|string
        minDayWidth: number|string
        minEventHeight: number|string
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        nonWorkingDays: object
        overflowPopup: Partial<OverflowPopupConfig>
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        range: string|object
        readOnly: boolean
        ref: string
        resourceImagePath: string
        responsive: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        shortDateFormat: string
        shortDateTimeFormat: string
        shortEventCls: string
        shortEventDuration: string|number
        showAllDayHeader: boolean
        showAnimation: boolean|object
        showResourceAvatars: boolean|string
        showTime: boolean
        showTooltipWhenDisabled: boolean
        startDate: Date
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        syncViewDate: boolean
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        timeFormat: string
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        visibleStartTime: string|number
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        zoomOnMouseWheel: boolean
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onLayoutUpdate: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onShow: Function
        onTickChange: Function
        onToolClick: Function
    }

    export class DayView extends Panel implements ResponsiveClass, CalendarMixinClass, DayCellCollecterClass, DateRangeOwnerClass {
        readonly allDayEvents: CalendarRow
        animateTimeShift: boolean
        coreHours: object|Function|string
        date: Date
        dayCellCls: string
        dayEndTime: string|number
        dayStartTime: number
        readonly endDate: Date
        firstVisibleCell: HTMLElement
        firstVisibleDate: Date
        fitHours: boolean|object
        horizontalScroller: Scroller
        hourHeight: number
        hourHeightBreakpoints: HourHeightBreakPoints
        lastVisibleCell: HTMLElement
        lastVisibleDate: Date
        maxDate: Date
        minDate: Date
        minDayWidth: number|string
        minEventHeight: number|string
        readonly modeName: string
        readonly overflowPopup: OverflowPopup
        range: object
        readonly resource: ResourceModel
        readonly startDate: Date
        readonly visibleCellSelector: string
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeResponsiveStateChange: Function
        onCatchAll: Function
        onDestroy: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onLayoutUpdate: Function
        onRefresh: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onTickChange: Function
        constructor(config?: Partial<DayViewConfig>);
        calendarHitTest(domEvent: Event|Element): CalendarHit;
        createEvent(date: Date): void;
        getDayElement(date: Date|string, strict: boolean): void;
        getEventElement(eventRecord: EventModel|string|number, date?: Date): HTMLElement;
        getEventElements(eventRecord: EventModel|string|number): HTMLElement[];
        getEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        next(): void;
        onEventCreated(eventRecord: EventModel): void;
        previous(): void;
        refresh(): void;
        refreshSoon(): void;
        resolveEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        scrollTo(target: EventModel|Date, options?: object): Promise<any>;
        zoomBy(reqDelta: number, zoomCenter?: number|string): void;
        zoomTo(newHourHeight: number, zoomCenter?: number|string): void;
    }

    type EventListFeaturesType = {
        cellEdit: CellEdit
        cellMenu: CellMenu
        cellTooltip: CellTooltip
        columnAutoWidth: ColumnAutoWidth
        columnDragToolbar: ColumnDragToolbar
        columnPicker: ColumnPicker
        columnRename: ColumnRename
        columnReorder: ColumnReorder
        columnResize: ColumnResize
        excelExporter: GridExcelExporter
        filter: Filter
        filterBar: FilterBar
        group: Group
        groupSummary: GridGroupSummary
        headerMenu: HeaderMenu
        mergeCells: MergeCells
        multipage: GridMultiPageExporter
        multipagevertical: GridMultiPageVerticalExporter
        pdfExport: GridPdfExport
        quickFind: QuickFind
        regionResize: RegionResize
        rowCopyPaste: RowCopyPaste
        rowExpander: RowExpander
        rowReorder: RowReorder
        search: Search
        singlepage: GridSinglePageExporter
        sort: Sort
        stickyCells: StickyCells
        stripe: Stripe
        summary: GridSummary
        tree: Tree
        treeGroup: TreeGroup
    }

    type EventListFeaturesConfigType = {
        cellEdit: string|boolean|Partial<CellEditConfig>
        cellMenu: string|boolean|Partial<CellMenuConfig>
        cellTooltip: string|boolean|Partial<CellTooltipConfig>
        columnAutoWidth: string|boolean|Partial<ColumnAutoWidthConfig>
        columnDragToolbar: string|boolean|Partial<ColumnDragToolbarConfig>
        columnPicker: string|boolean|Partial<ColumnPickerConfig>
        columnRename: string|boolean|Partial<ColumnRenameConfig>
        columnReorder: string|boolean|Partial<ColumnReorderConfig>
        columnResize: string|boolean|Partial<ColumnResizeConfig>
        excelExporter: string|boolean|Partial<GridExcelExporterConfig>
        filter: string|boolean|Partial<FilterConfig>
        filterBar: string|boolean|Partial<FilterBarConfig>
        group: string|boolean|Partial<GroupConfig>
        groupSummary: string|boolean|Partial<GridGroupSummaryConfig>
        headerMenu: string|boolean|Partial<HeaderMenuConfig>
        mergeCells: string|boolean|Partial<MergeCellsConfig>
        multipage: string|boolean|Partial<GridMultiPageExporterConfig>
        multipagevertical: string|boolean|Partial<GridMultiPageVerticalExporterConfig>
        pdfExport: string|boolean|Partial<GridPdfExportConfig>
        quickFind: string|boolean|Partial<QuickFindConfig>
        regionResize: string|boolean|Partial<RegionResizeConfig>
        rowCopyPaste: string|boolean|Partial<RowCopyPasteConfig>
        rowExpander: string|boolean|Partial<RowExpanderConfig>
        rowReorder: string|boolean|Partial<RowReorderConfig>
        search: string|boolean|Partial<SearchConfig>
        singlepage: string|boolean|Partial<GridSinglePageExporterConfig>
        sort: string|boolean|Partial<SortConfig>
        stickyCells: string|boolean|Partial<StickyCellsConfig>
        stripe: string|boolean|Partial<StripeConfig>
        summary: string|boolean|Partial<GridSummaryConfig>
        tree: string|boolean|Partial<TreeConfig>
        treeGroup: string|boolean|Partial<TreeGroupConfig>
    }

    type EventListConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        animateRemovingRows: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoCreate: object|string|boolean
        autoHeight: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        // @deprecated
        breakpoints: object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        columnLines: boolean
        columns: object|object[]
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        contextMenuTriggerEvent: 'contextmenu'|'click'|'dblclick'
        data: object[]|Model[]|Partial<ModelConfig>[]
        dataset: object
        date: Date
        defaultBindProperty: string
        defaultFocus: Function
        defaultRegion: string
        defaults: object
        destroyStore: boolean
        disableGridRowModelWarning: boolean
        disabled: boolean
        dismissDelay: number
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        emptyText: string
        enableSticky: boolean
        enableTextSelection: boolean
        enableUndoRedoKeys: boolean
        endDate: Date
        eventFilter: Function
        eventHeight: number|string
        eventListTimeFormat: string
        eventSorter: Function
        features: Partial<EventListFeaturesConfigType>
        fillLastColumn: boolean
        fixedRowHeight: boolean
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        fullRowRefresh: boolean
        getHtml: Function|string
        getRowHeight: Function
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideHeaders: boolean
        hideNonWorkingDays: boolean
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        keyMap: object
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        longPressTime: number
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxDate: Date|string
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minDate: Date|string
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        nonWorkingDays: object
        owner: Widget
        plugins: Function[]
        positioned: boolean
        preserveFocusOnDatasetChange: boolean
        preserveScrollOnDatasetChange: boolean
        preventTooltipOnTouch: boolean
        range: string|object
        readOnly: boolean
        ref: string
        resizeToFitIncludesHeader: boolean
        resourceImagePath: string
        responsive: object
        responsiveLevels: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        ripple: boolean|object
        rootElement: ShadowRoot
        rowHeight: number
        scrollAction: 'hide'|'realign'|null
        scrollManager: object|ScrollManager|Partial<ScrollManagerConfig>
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        scrollerClass: typeof Scroller
        selectionMode: object
        shortDateFormat: string
        shortDateTimeFormat: string
        shortEventCls: string
        shortEventDuration: string|number
        showAnimation: boolean|object
        showDirty: boolean
        showOnClick: boolean
        showOnHover: boolean
        showResourceAvatars: boolean|string
        showTooltipWhenDisabled: boolean
        startDate: Date
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        store: Store|Partial<StoreConfig>
        strips: object
        style: string
        subGridConfigs: object
        syncMask: string|object|null
        syncViewDate: boolean
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        timeFormat: string
        title: string
        tools: object
        tooltip: string|object
        trackMouse: boolean
        transitionDuration: number
        trapFocus: boolean
        ui: string|object
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeCancelCellEdit: Function
        onBeforeCellEditStart: Function
        onBeforeChangeDate: Function
        onBeforeClose: Function
        onBeforeColumnDragStart: Function
        onBeforeColumnDropFinalize: Function
        onBeforeCopy: Function
        onBeforeDestroy: Function
        onBeforeFinishCellEdit: Function
        onBeforeHide: Function
        onBeforePaste: Function
        onBeforePdfExport: Function
        onBeforeRenderRow: Function
        onBeforeRenderRows: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSelectionChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeToggleGroup: Function
        onBeforeToggleNode: Function
        onCancelCellEdit: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMenuBeforeShow: Function
        onCellMenuItem: Function
        onCellMenuShow: Function
        onCellMenuToggleItem: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onCollapseNode: Function
        onColumnDragStart: Function
        onColumnDrop: Function
        onContextMenuItem: Function
        onContextMenuToggleItem: Function
        onCopy: Function
        onDataChange: Function
        onDestroy: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onExpandNode: Function
        onFinishCellEdit: Function
        onFocusIn: Function
        onFocusOut: Function
        onHeaderMenuBeforeShow: Function
        onHeaderMenuItem: Function
        onHeaderMenuShow: Function
        onHeaderMenuToggleItem: Function
        onHide: Function
        onMouseOut: Function
        onMouseOver: Function
        onPaint: Function
        onPaste: Function
        onPdfExport: Function
        onPointerOver: Function
        onReadOnly: Function
        onRecompose: Function
        onRenderRow: Function
        onRenderRows: Function
        onResize: Function
        onResponsive: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onScroll: Function
        onSelectionChange: Function
        onShow: Function
        onStartCellEdit: Function
        onSubGridCollapse: Function
        onSubGridExpand: Function
        onToggleGroup: Function
        onToggleNode: Function
        onToolClick: Function
    }

    export class EventList extends Grid implements ResponsiveClass, CalendarMixinClass, DayCellCollecterClass, DateRangeOwnerClass {
        animateTimeShift: boolean
        readonly count: number
        date: Date
        dayCellCls: string
        readonly endDate: Date
        firstVisibleCell: HTMLElement
        firstVisibleDate: Date
        lastVisibleCell: HTMLElement
        lastVisibleDate: Date
        readonly listRangeMenu: Partial<MenuConfig>
        maxDate: Date
        minDate: Date
        readonly modeName: string
        range: object
        readonly resource: ResourceModel
        readonly startDate: Date
        readonly visibleCellSelector: string
        features: EventListFeaturesType
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSelectionChange: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onDestroy: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onMouseOut: Function
        onMouseOver: Function
        onPointerOver: Function
        onResponsive: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onSelectionChange: Function
        constructor(config?: Partial<EventListConfig>);
        agendaEventDateRenderer(date: Date): DomConfig;
        calendarHitTest(domEvent: Event|Element): CalendarHit;
        changeMonth(): void;
        createEvent(date: Date): void;
        eventListEventTimeRenderer(eventRecord: EventModel): DomConfig;
        getDayElement(date: Date|string, strict: boolean): void;
        getEventElement(eventRecord: EventModel|string|number, date?: Date): HTMLElement;
        getEventElements(eventRecord: EventModel|string|number): HTMLElement[];
        getEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        next(): void;
        onCalendarStoreChange(): void;
        onEventCreated(eventRecord: EventModel): void;
        onMonthChange(): void;
        previous(): void;
        refresh(): void;
        refreshSoon(): void;
        resolveEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        scrollTo(target: EventModel|Date, options?: object): Promise<any>;
        updateEventStore(): void;
    }

    type EventTipConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dismissDelay: number
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        eventRecord: EventModel
        extendAllDayEndDay: boolean
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        getHtml: Function|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showOnHover: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        timeFormat: string
        title: string
        tools: object
        tooltip: string|object
        trackMouse: boolean
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onPointerOver: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class EventTip extends Tooltip {
        readonly eventRecord: EventModel
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventTipConfig>);
    }

    type ModeSelectorConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        button: Button
        buttonBar: ButtonGroup
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        minifiable: boolean
        minified: boolean
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class ModeSelector extends Container {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ModeSelectorConfig>);
    }

    type MonthViewConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoCreate: object|string|boolean
        autoRowHeight: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        // @deprecated
        breakpoints: object
        bubbleEvents: object
        callOnFunctions: boolean
        cellRenderer: Function|string
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        date: Date|string
        dayCellNameFormat: string
        dayCellRenderer: Function
        dayNameFormat: string
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disableOtherMonthCells: boolean
        disableWeekends: boolean
        disabled: boolean
        disabledDates: Function|Date[]|string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        emptyCellRenderer: Function|object|string
        eventFilter: Function
        eventHeight: number|string
        eventSorter: Function
        eventSpacing: number
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        headerRenderer: Function|string
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideNonWorkingDays: boolean
        hideOtherMonthCells: boolean
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxDate: Date|string
        maxEventsPerCell: number
        maxHeight: string|number
        maxWidth: string|number
        minColumnWidth: number
        minDate: Date|string
        minHeight: string|number
        minRowHeight: number|string
        minWidth: string|number
        monitorResize: boolean
        month: Month|object|Partial<MonthConfig>
        namedItems: object
        nonWorkingDays: object
        overflowButtonRenderer: Function
        overflowClickAction: 'popup'|'expand'
        overflowPopup: Partial<OverflowPopupConfig>
        overflowPopupTrigger: 'click'|'mouseover'|'hover'
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        resourceImagePath: string
        responsive: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        shortDateFormat: string
        shortDateTimeFormat: string
        shortEventCls: string
        shortEventDuration: string|number
        showAnimation: boolean|object
        showResourceAvatars: boolean|string
        showTooltipWhenDisabled: boolean
        showWeekColumn: boolean
        // @deprecated
        showWeekNumber: boolean
        sixWeeks: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        syncViewDate: boolean
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        timeFormat: string
        tip: object
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weekRenderer: Function|string
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeRefresh: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeShowOverflowPopup: Function
        onCatchAll: Function
        onDateChange: Function
        onDestroy: Function
        onEmptyCellClick: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onShow: Function
        onShowOverflowPopup: Function
        onToolClick: Function
        onWeekFlex: Function
        onWeekShrinkwrap: Function
    }

    export class MonthView extends CalendarPanel implements ResponsiveClass, DayCellCollecterClass, DayCellRendererClass, CalendarMixinClass {
        animateTimeShift: boolean
        autoRowHeight: boolean
        dayCellCls: string
        eventSpacing: number
        firstVisibleCell: HTMLElement
        firstVisibleDate: Date
        lastVisibleCell: HTMLElement
        lastVisibleDate: Date
        maxDate: Date
        minDate: Date
        readonly modeName: string
        readonly overflowPopup: OverflowPopup
        readonly resource: ResourceModel
        readonly visibleCellSelector: string
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeResponsiveStateChange: Function
        onBeforeShowOverflowPopup: Function
        onCatchAll: Function
        onDestroy: Function
        onEmptyCellClick: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onShowOverflowPopup: Function
        onWeekFlex: Function
        onWeekShrinkwrap: Function
        constructor(config?: Partial<MonthViewConfig>);
        calendarHitTest(domEvent: Event|Element): CalendarHit;
        createEvent(date: Date): void;
        flexWeekRow(date: Date|number): void;
        getDayElement(date: Date|string, strict: boolean): void;
        getEventElement(eventRecord: EventModel|string|number, date?: Date): HTMLElement;
        getEventElements(eventRecord: EventModel|string|number): HTMLElement[];
        getEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        onEventCreated(eventRecord: EventModel): void;
        refresh(): void;
        refreshSoon(): void;
        resolveEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        scrollTo(target: EventModel|Date, options?: object): Promise<any>;
        shrinkwrapWeekRow(week: Date|number): void;
    }

    type OverflowPopupConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        dateFormat: string
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        eventList: object
        eventRenderer: Function
        eventSorter: Function
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        namedItems: object
        onlyShowOverflow: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class OverflowPopup extends Popup {
        readonly activeDate: Date
        readonly cellData: DayCell
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<OverflowPopupConfig>);
    }

    type ResourceViewConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoCreate: object|string|boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        // @deprecated
        breakpoints: object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        eventHeight: number|string
        eventSorter: Function
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideNonWorkingDays: boolean
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxDate: Date|string
        maxHeight: string|number
        maxWidth: string|number
        meta: string|Function
        minDate: Date|string
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        nonWorkingDays: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        resourceImagePath: string
        resourceWidth: number|string
        responsive: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        shortDateFormat: string
        shortDateTimeFormat: string
        shortEventCls: string
        shortEventDuration: string|number
        showAnimation: boolean|object
        showAvatars: boolean
        showResourceAvatars: boolean|string
        showTooltipWhenDisabled: boolean
        stableResourceOrder: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        syncViewDate: boolean
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        timeFormat: string
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        view: object
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onEventAutoCreated: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onShow: Function
        onToolClick: Function
        onViewCreate: Function
    }

    export class ResourceView extends Panel implements ResponsiveClass, CalendarMixinClass {
        animateTimeShift: boolean
        dayCellCls: string
        firstVisibleCell: HTMLElement
        firstVisibleDate: Date
        hideNonWorkingDays: boolean
        lastVisibleCell: HTMLElement
        lastVisibleDate: Date
        maxDate: Date
        minDate: Date
        readonly modeName: string
        resourceWidth: number|string
        view: object
        readonly views: CalendarMixinClass[]
        readonly visibleCellSelector: string
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeResponsiveStateChange: Function
        onCatchAll: Function
        onDestroy: Function
        onEventAutoCreated: Function
        onRefresh: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onViewCreate: Function
        constructor(config?: Partial<ResourceViewConfig>);
        calendarHitTest(domEvent: Event|Element): CalendarHit;
        createEvent(date: Date): void;
        eachView(fn: Function, args?: object[], thisObj?: object): void;
        getDayElement(date: Date|string, strict: boolean): void;
        getEventElement(eventRecord: EventModel|string|number, date?: Date): HTMLElement;
        getEventElements(eventRecord: EventModel|string|number): HTMLElement[];
        getEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        onEventCreated(eventRecord: EventModel): void;
        refresh(): void;
        refreshSoon(): void;
        resolveEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        scrollTo(target: EventModel|Date, options?: object): Promise<any>;
    }

    type SidebarConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        // @deprecated
        breakpoints: object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        responsive: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        side: 'left'|'right'
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onShow: Function
        onToolClick: Function
    }

    export class Sidebar extends Panel implements ResponsiveClass {
        onBeforeDestroy: Function
        onBeforeResponsiveStateChange: Function
        onCatchAll: Function
        onDestroy: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        constructor(config?: Partial<SidebarConfig>);
    }

    type WeekViewConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allDayEvents: CalendarRow|object|Partial<CalendarRowConfig>
        anchor: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoCreate: object|string|boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        // @deprecated
        breakpoints: object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        coreHours: object|Function|string
        currentTimeIndicatorRenderer: Function|string
        dataset: object
        date: Date
        dayCellRenderer: Function|string
        dayEndTime: string|number
        dayStartShift: string|number
        dayStartTime: string|number
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        endDate: Date
        eventFilter: Function
        eventHeight: number|string
        eventLayout: object
        eventRenderer: Function
        eventSorter: Function
        eventSpacing: number
        fitHours: boolean|object
        fixedDuration: boolean
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideNonWorkingDays: boolean
        hideWhenEmpty: boolean
        hourHeight: number
        hourHeightBreakpoints: HourHeightBreakPoints
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        increment: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxAllDayHeight: number|string
        maxDate: Date|string
        maxHeight: string|number
        maxWidth: string|number
        minDate: Date|string
        minDayWidth: number|string
        minEventHeight: number|string
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        nonWorkingDays: object
        overflowPopup: Partial<OverflowPopupConfig>
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        range: string|object
        readOnly: boolean
        ref: string
        resourceImagePath: string
        responsive: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        shortDateFormat: string
        shortDateTimeFormat: string
        shortEventCls: string
        shortEventDuration: string|number
        showAllDayHeader: boolean
        showAnimation: boolean|object
        showResourceAvatars: boolean|string
        showTime: boolean
        showTooltipWhenDisabled: boolean
        startDate: Date
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        syncViewDate: boolean
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        timeFormat: string
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        visibleStartTime: string|number
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        zoomOnMouseWheel: boolean
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onLayoutUpdate: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onShow: Function
        onTickChange: Function
        onToolClick: Function
    }

    export class WeekView extends DayView {
        readonly resource: ResourceModel
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeResponsiveStateChange: Function
        onCatchAll: Function
        onDestroy: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        constructor(config?: Partial<WeekViewConfig>);
    }

    type YearViewConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoCreate: object|string|boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        // @deprecated
        breakpoints: object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        date: Date
        dayCellNameFormat: string
        dayCellRenderer: Function
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        emptyCellRenderer: Function|object|string
        eventFilter: Function
        eventHeight: number|string
        eventSorter: Function
        eventSpacing: number
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideNonWorkingDays: boolean
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxDate: Date|string
        maxHeight: string|number
        maxWidth: string|number
        minDate: Date|string
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        nonWorkingDays: object
        overflowButtonRenderer: Function
        overflowPopup: Partial<OverflowPopupConfig>
        overflowPopupTrigger: 'click'|'mouseover'|'hover'
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        resourceImagePath: string
        responsive: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        shortDateFormat: string
        shortDateTimeFormat: string
        shortEventCls: string
        shortEventDuration: string|number
        showAnimation: boolean|object
        showEvents: boolean|'heatmap'|'dots'
        showResourceAvatars: boolean|string
        showTooltipWhenDisabled: boolean
        sixWeeks: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        syncViewDate: boolean
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        timeFormat: string
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        year: number
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeResponsiveStateChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeShowOverflowPopup: Function
        onCatchAll: Function
        onDestroy: Function
        onEmptyCellClick: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onShow: Function
        onShowOverflowPopup: Function
        onToolClick: Function
    }

    export class YearView extends Panel implements ResponsiveClass, CalendarMixinClass, DayCellCollecterClass, DayCellRendererClass {
        animateTimeShift: boolean
        dayCellCls: string
        eventSpacing: number
        firstVisibleCell: HTMLElement
        firstVisibleDate: Date
        lastVisibleCell: HTMLElement
        lastVisibleDate: Date
        maxDate: Date
        minDate: Date
        readonly modeName: string
        readonly overflowPopup: OverflowPopup
        readonly resource: ResourceModel
        readonly visibleCellSelector: string
        onBeforeChangeDate: Function
        onBeforeDestroy: Function
        onBeforeResponsiveStateChange: Function
        onBeforeShowOverflowPopup: Function
        onCatchAll: Function
        onDestroy: Function
        onEmptyCellClick: Function
        onEventAutoCreated: Function
        onEventPropagate: Function
        onRefresh: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        onShowOverflowPopup: Function
        constructor(config?: Partial<YearViewConfig>);
        calendarHitTest(domEvent: Event|Element): CalendarHit;
        createEvent(date: Date): void;
        getDayElement(date: Date|string, strict: boolean): void;
        getEventElement(eventRecord: EventModel|string|number, date?: Date): HTMLElement;
        getEventElements(eventRecord: EventModel|string|number): HTMLElement[];
        getEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        onEventCreated(eventRecord: EventModel): void;
        refresh(): void;
        refreshSoon(): void;
        resolveEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        scrollTo(target: EventModel|Date, options?: object): Promise<any>;
    }

    type CalendarMixinClassConfig = {
        animateTimeShift: boolean
        autoCreate: object|string|boolean
        eventHeight: number|string
        eventSorter: Function
        hideNonWorkingDays: boolean
        maxDate: Date|string
        minDate: Date|string
        nonWorkingDays: object
        readOnly: boolean
        resourceImagePath: string
        shortDateFormat: string
        shortDateTimeFormat: string
        shortEventCls: string
        shortEventDuration: string|number
        showResourceAvatars: boolean|string
        syncViewDate: boolean
        timeFormat: string
        weekStartDay: number
        onBeforeChangeDate: Function
        onEventAutoCreated: Function
    }

    export class CalendarMixinClass {
        animateTimeShift: boolean
        dayCellCls: string
        firstVisibleCell: HTMLElement
        firstVisibleDate: Date
        lastVisibleCell: HTMLElement
        lastVisibleDate: Date
        maxDate: Date
        minDate: Date
        readonly modeName: string
        readonly visibleCellSelector: string
        onBeforeChangeDate: Function
        onEventAutoCreated: Function
        constructor(config?: Partial<CalendarMixinClassConfig>);
        calendarHitTest(domEvent: Event|Element): CalendarHit;
        createEvent(date: Date): void;
        getDayElement(date: Date|string, strict: boolean): void;
        getEventElement(eventRecord: EventModel|string|number, date?: Date): HTMLElement;
        getEventElements(eventRecord: EventModel|string|number): HTMLElement[];
        getEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        onEventCreated(eventRecord: EventModel): void;
        refresh(): void;
        refreshSoon(): void;
        resolveEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        scrollTo(target: EventModel|Date, options?: object): Promise<any>;
    }

    export const CalendarMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & CalendarMixinClass>

    type DateRangeOwnerClassConfig = {
        date: Date
        endDate: Date
        range: string|object
        startDate: Date
    }

    export class DateRangeOwnerClass {
        date: Date
        readonly endDate: Date
        range: object
        readonly startDate: Date
        constructor(config?: Partial<DateRangeOwnerClassConfig>);
        next(): void;
        previous(): void;
    }

    export const DateRangeOwner : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & DateRangeOwnerClass>

    type DayCellCollecterClassConfig = {
        eventFilter: Function
        onEventPropagate: Function
    }

    export class DayCellCollecterClass {
        onEventPropagate: Function
        constructor(config?: Partial<DayCellCollecterClassConfig>);
    }

    export const DayCellCollecter : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & DayCellCollecterClass>

    type DayCellRendererClassConfig = {
        dayCellNameFormat: string
        dayCellRenderer: Function
        emptyCellRenderer: Function|object|string
        eventSpacing: number
        overflowButtonRenderer: Function
        overflowPopup: Partial<OverflowPopupConfig>
        overflowPopupTrigger: 'click'|'mouseover'|'hover'
        onBeforeShowOverflowPopup: Function
        onEmptyCellClick: Function
        onShowOverflowPopup: Function
    }

    export class DayCellRendererClass {
        eventSpacing: number
        readonly overflowPopup: OverflowPopup
        onBeforeShowOverflowPopup: Function
        onEmptyCellClick: Function
        onShowOverflowPopup: Function
        constructor(config?: Partial<DayCellRendererClassConfig>);
    }

    export const DayCellRenderer : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & DayCellRendererClass>

    export class DaySelectableClass {
    }

    export const DaySelectable : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & DaySelectableClass>

    type EventRendererClassConfig = {
        eventRenderer: Function
    }

    export class EventRendererClass {
        constructor(config?: Partial<EventRendererClassConfig>);
        createEventDomConfig(renderData: object, eventRenderer?: Function): DomConfig;
    }

    export const EventRenderer : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & EventRendererClass>

    export abstract class Base {
        readonly config: object
        readonly isConstructing: boolean
        readonly isDestroyed: boolean
        readonly isDestroying: boolean
        constructor(...args: object[]);
        static destroy(...args: object[]): void;
        static initClass(): void;
        static isOfTypeName(type: string): boolean;
        static mixin(...mixins: Function[]): Function;
        callback(fn: string|Function, thisObject: object, args: object[]): void;
        construct(...args: object[]): void;
        destroy(): void;
        detachListeners(name: string|Symbol): void;
        doDestroy(): void;
        downloadTestCase(): void;
        resolveCallback(handler: string|Function, thisObj: object, enforceCallability?: boolean): object;
        setConfig(config: object): void;
    }

    export class GlobalEventsSingleton {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onTheme: Function
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        hasListener(eventName: string): boolean;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        resumeEvents(): boolean;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
    }
    export const GlobalEvents : GlobalEventsSingleton

    type WidgetTagConfig = {
        faPath: string
        stylesheet: string
    }

    export class WidgetTag {
        ready: Promise<any>
        widget: Widget
        constructor(config?: Partial<WidgetTagConfig>);
        destroy(): void;
    }

    type AjaxStoreConfig = {
        allowNoId: boolean
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoCommit: boolean
        autoLoad: boolean
        autoTree: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        chainedFields: string[]
        chainedFilterFn: Function
        createUrl: string
        data: object[]|Model[]|Partial<ModelConfig>[]
        deleteUrl: string
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        fetchOptions: object
        fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        filterParamName: string
        filters: object|object[]
        fireRemoveEventForMoveAction: boolean
        groupers: object[]
        headers: object
        httpMethods: HttpMethods
        id: string|number
        ignoreRemoteChangesInSTM: boolean
        keepUncommittedChanges: boolean
        listeners: object
        masterStore: Store
        modelClass: typeof Model
        pageParamName: string
        pageSize: number
        pageSizeParamName: string
        pageStartParamName: string
        params: object
        parentIdParamName: string
        readUrl: string
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        reapplySortersOnAdd: boolean
        responseDataProperty: string
        responseSuccessProperty: string
        responseTotalProperty: string
        restfulFilter: boolean
        sendAsFormData: boolean
        sortParamName: string
        sorters: object[]|string[]
        stm: StateTrackingManager
        storage: Collection|object|Partial<CollectionConfig>
        syncDataOnLoad: boolean|object
        transformFlatData: boolean
        tree: boolean
        updateUrl: string
        useLocaleSort: boolean|string|object
        useRawData: boolean|object
        useRestfulMethods: boolean
        verifyNoGeneratedIds: boolean
        writeAllFields: boolean
        onAdd: Function
        onAddConfirmed: Function
        onAfterRequest: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeLoad: Function
        onBeforeLoadChildren: Function
        onBeforeLoadPage: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeRequest: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onCommit: Function
        onCommitAdded: Function
        onCommitModified: Function
        onCommitRemoved: Function
        onDestroy: Function
        onException: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onLoad: Function
        onLoadChildren: Function
        onLoadChildrenStart: Function
        onLoadStart: Function
        onMove: Function
        onOutdent: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
    }

    export class AjaxStore extends Store {
        readonly allCount: number
        createUrl: string
        deleteUrl: string
        readonly isCommitting: boolean
        readonly isLoading: boolean|number
        readonly isPaged: boolean
        readonly lastPage: number
        params: object
        readUrl: string
        updateUrl: string
        onAdd: Function
        onAfterRequest: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeLoad: Function
        onBeforeLoadChildren: Function
        onBeforeLoadPage: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeRequest: Function
        onBeforeSort: Function
        onCatchAll: Function
        onCommit: Function
        onCommitAdded: Function
        onCommitModified: Function
        onCommitRemoved: Function
        onDestroy: Function
        onException: Function
        onFilter: Function
        onGroup: Function
        onIndent: Function
        onLoad: Function
        onLoadChildren: Function
        onLoadChildrenStart: Function
        onLoadStart: Function
        onOutdent: Function
        onRemove: Function
        onRemoveAll: Function
        onSort: Function
        constructor(config?: Partial<AjaxStoreConfig>);
        commit(): Promise<any>;
        encodeFilterParams(filters: CollectionFilter[]): void;
        encodeSorterParams(sorters: object[]): void;
        load(params?: object): Promise<any>;
        loadChildren(parentRecord: Model): Promise<any>;
        loadPage(page: number, params: object): Promise<any>;
        nextPage(): Promise<any>;
        previousPage(): Promise<any>;
    }

    export class Duration {
        magnitude: number
        readonly milliseconds: number
        unit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        isEqual(value: Duration): boolean;
    }

    type ModelConfig = {
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        id: string|number
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
    }

    export class Model implements ModelLinkClass, TreeNodeClass, ModelStmClass {
        static readonly allFields: DataField[]
        static autoExposeFields: boolean
        static childrenField: string
        static convertEmptyParentToLeaf: boolean|object
        static defaults: object
        static readonly fieldMap: object
        static readonly fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        static idField: string
        allChildren: Model[]
        readonly allFields: DataField[]
        readonly childLevel: number
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        descendantCount: number
        readonly fieldMap: object
        readonly fieldNames: string[]
        readonly fields: DataField[]
        readonly firstChild: Model
        readonly firstStore: Store
        readonly groupChildren: Model[]|undefined
        hasGeneratedId: boolean
        readonly hasLinks: boolean
        id: string|number
        internalId: number
        readonly isBatchUpdating: boolean
        isCommitting: boolean
        isCreating: boolean
        readonly isGroupHeader: boolean
        readonly isLeaf: boolean
        readonly isLinked: boolean
        readonly isLoaded: boolean
        readonly isModified: boolean
        readonly isParent: boolean
        readonly isPersistable: boolean
        readonly isPhantom: boolean
        readonly isRoot: boolean
        isValid: boolean
        json: string
        readonly lastChild: Model
        readonly modificationData: object
        readonly modificationDataToWrite: object
        readonly modifications: object
        readonly nextSibling: Model
        readonly orderedParentIndex: number
        readonly parent: Model
        parentId: number|string|null
        readonly parentIndex: number
        readonly previousSibling: Model
        previousSiblingsTotalCount: number
        readOnly: boolean
        stm: StateTrackingManager
        visibleDescendantCount: number
        constructor(config?: Partial<ModelConfig>);
        constructor(data?: object, store?: Store, meta?: object);
        static addField(fieldDef: string|object): void;
        static asId(model: Model|string|number): string|number;
        static getFieldDefinition(fieldName: string): DataField;
        static processField(fieldName: string, value: any): any;
        static removeField(fieldName: string): void;
        ancestorsExpanded(store?: Store): boolean;
        appendChild(childRecord: Model|Model[]|object|object[]|Partial<ModelConfig>|Partial<ModelConfig>[], silent?: boolean): Model|Model[]|null;
        beginBatch(): void;
        bubble(fn: Function, skipSelf?: boolean): void;
        bubbleWhile(fn: Function, skipSelf?: boolean): boolean;
        cancelBatch(): void;
        clearChanges(includeDescendants?: boolean): void;
        clearChildren(silent?: boolean): Model[];
        contains(childOrId: Model|string|number, skipSelf?: boolean): boolean;
        convertToParent(silent?: boolean): void;
        copy(newId?: number|string|object, deep?: boolean): Model;
        endBatch(silent?: boolean): void;
        equals(other: Model): boolean;
        generateId(): string;
        get(fieldName: string): any;
        getData(fieldName: string): any;
        getDataSource(fieldName: string): string;
        getDescendantCount(onlyVisible?: boolean, store?: Store): number;
        getFieldDefinition(fieldName: string): DataField;
        hasBatchedChange(fieldName: string): boolean;
        insertChild(childRecord: Model|Model[]|object|object[]|Partial<ModelConfig>|Partial<ModelConfig>[], before?: Model, silent?: boolean): Model|Model[]|null;
        isExpanded(store: Store): boolean;
        isFieldModified(fieldName: string): boolean;
        link(): typeof Proxy;
        remove(silent?: boolean): void;
        removeChild(childRecords: Model|Model[], isMove?: boolean, silent?: boolean): Model[];
        replaceChildren(childRecords: Model|Model[]): Model[];
        revertChanges(): void;
        set(field: string|object, value?: any, silent?: boolean): void;
        toJSON(): object;
        toString(): string;
        traverse(fn: Function, skipSelf?: boolean, options?: object|boolean): void;
        traverseBefore(fn: Function, skipSelf?: boolean, options?: object|boolean): void;
        traverseWhile(fn: Function, skipSelf?: boolean, options?: object|boolean): boolean;
    }

    type StoreConfig = {
        allowNoId: boolean
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoCommit: boolean
        autoTree: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        chainedFields: string[]
        chainedFilterFn: Function
        data: object[]|Model[]|Partial<ModelConfig>[]
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        filters: object|object[]
        fireRemoveEventForMoveAction: boolean
        groupers: object[]
        id: string|number
        ignoreRemoteChangesInSTM: boolean
        keepUncommittedChanges: boolean
        listeners: object
        masterStore: Store
        modelClass: typeof Model
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        reapplySortersOnAdd: boolean
        sorters: object[]|string[]
        stm: StateTrackingManager
        storage: Collection|object|Partial<CollectionConfig>
        syncDataOnLoad: boolean|object
        transformFlatData: boolean
        tree: boolean
        useLocaleSort: boolean|string|object
        useRawData: boolean|object
        verifyNoGeneratedIds: boolean
        onAdd: Function
        onAddConfirmed: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onMove: Function
        onOutdent: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
    }

    export class Store extends Base implements EventsClass, StoreFilterClass, StoreChangesClass, StoreCRUDClass, StoreSumClass, StoreSearchClass, StoreSortClass, StoreGroupClass, StoreChainedClass, StoreStateClass, StoreTreeClass, StoreStmClass, StoreSyncClass {
        static stores: Store[]
        readonly allCount: number
        readonly allRecords: Model[]
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoCommit: boolean
        readonly changes: object
        readonly count: number
        data: object[]
        readonly filters: Collection
        readonly first: Model
        readonly formattedJSON: string
        groupers: object[]
        readonly id: string|number
        ignoreRemoteChangesInSTM: boolean
        readonly isChained: boolean
        readonly isFiltered: boolean
        readonly isGrouped: boolean
        readonly isSorted: boolean
        readonly isTree: boolean
        json: string
        readonly last: Model
        leaves: Model[]
        modelClass: typeof Model
        readonly originalCount: number
        readonly records: Model[]
        readonly rootNode: Model
        readonly sorters: object[]
        verifyNoGeneratedIds: boolean
        onAdd: Function
        onAddConfirmed: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onMove: Function
        onOutdent: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
        constructor(config?: Partial<StoreConfig>);
        static getStore(id: string|number|object[]): Store;
        add(records: Model|Model[]|object|object[]|Partial<ModelConfig>|Partial<ModelConfig>[], silent?: boolean): Model[];
        addFilter(newFilters: object|Function, silent?: boolean): Promise<CollectionFilter>;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        addSorter(field: string|object[]|object|Function, ascending?: boolean): Promise<any>|null;
        applyChangesFromStore(otherStore: Store): void;
        applyChangeset(changes: object, transformFn?: Function, phantomIdField?: string): void;
        average(field: string, records: Model[]): number;
        beginBatch(): void;
        chain(chainedFilterFn?: Function, chainedFields?: string[], config?: object): Store;
        clearFilters(): Promise<any>|null;
        clearGroupers(): Promise<any>|null;
        clearSorters(): Promise<any>|null;
        commit(silent?: boolean): object;
        createRecord(data: object, skipExpose?: boolean): void;
        createSorterFn(sorters: object[]): Function;
        endBatch(): void;
        every(fn: Function, thisObj?: object, ignoreFilters?: boolean): any[];
        fillFromMaster(): void;
        filter(newFilters: object|object[]|Function): Promise<any>|null;
        filterBy(fn: Function): Promise<any>|null;
        find(fn: Function, searchAllRecords?: boolean): Model;
        findByField(field: string, value: any, distinct?: boolean, searchAllRecords?: boolean): object[];
        findRecord(fieldName: string, value: any, searchAllRecords?: boolean): Model;
        forEach(fn: Function, thisObj?: object, options?: object|boolean): void;
        getAt(index: number): Model;
        getById(id: Model|string|number): Model;
        getByInternalId(internalId: number): Model;
        getChildren(parent: Model): Model[];
        getCount(countProcessed?: boolean): number;
        getDistinctValues(field: string, searchAllRecords?: boolean): any[];
        getGroupRecords(groupValue: any): Model[];
        getGroupTitles(): string[];
        getNext(recordOrId: Model|string|number, wrap?: boolean, skipSpecialRows?: boolean): Model;
        getPrev(recordOrId: Model|string|number, wrap?: boolean, skipSpecialRows?: boolean): Model;
        getRange(start?: number, end?: number): Model[];
        getValueCount(field: string, value: any): number;
        group(field: string|object, ascending?: boolean, add?: boolean, performSort?: boolean, silent?: boolean): Promise<any>|null;
        groupSum(groupValue: any, field: string): number;
        hasListener(eventName: string): boolean;
        includes(recordOrId: Model|string|number): boolean;
        indent(nodes: Model|Model[]): Promise<void>;
        indexOf(recordOrId: Model|string|number, visibleRecords?: boolean, allExceptFilteredOutRecords?: boolean): number;
        insert(index: number, records: Model|Model[]|object|object[]|Partial<ModelConfig>|Partial<ModelConfig>[], silent?: boolean): Model[];
        isAvailable(recordOrId: Model|string|number): boolean;
        isRecordInGroup(record: Model, groupValue: any): boolean;
        loadChildren(parentRecord: Model): Promise<any>;
        makeChained(chainedFilterFn?: Function, chainedFields?: string[], config?: object): Store;
        map(fn: Function): any[];
        max(field: string, records: Model[]): number|Date;
        min(field: string, records: Model[]): number|Date;
        move(records: Model|Model[], beforeRecord: Model): void;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        onDataChange(event: object): void;
        outdent(nodes: Model|Model[]): Promise<void>;
        query(fn: Function, searchAllRecords?: boolean): Model[];
        reduce(fn: Function, initialValue: any): any;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        remove(records: string|string[]|number|number[]|Model|Model[], silent?: boolean): Model[];
        removeAll(silent?: boolean): boolean;
        removeAllListeners(): void;
        removeFilter(idOrInstance: string|CollectionFilter, silent?: boolean): Promise<any>|CollectionFilter;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        removeSorter(field: string|Function): Promise<any>|null;
        resumeAutoCommit(): void;
        resumeEvents(): boolean;
        revertChanges(): void;
        search(text: string, fields: string[], formatters?: Function[], searchAllRecords?: boolean): object[];
        setGroupers(groupers: object[]): Promise<any>|null;
        some(fn: Function, searchAllRecords?: boolean): boolean;
        sort(field: string|object[]|object|Function, ascending?: boolean, add?: boolean, silent?: boolean): Promise<any>|null;
        sum(field: string, records: Model[]): number;
        suspendAutoCommit(): void;
        suspendEvents(queue?: boolean): void;
        toJSON(): object[];
        toggleCollapse(idOrRecord: string|number|Model, collapse?: boolean): Promise<void>;
        traverse(fn: Function, topNode?: Model, skipTopNode?: boolean, options?: object|boolean): void;
        traverseWhile(fn: Function, topNode?: Model, skipTopNode?: boolean, options?: object): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
    }

    export class Wbs {
        readonly value: string
        static compare(lhs: string|Wbs, rhs: string|Wbs): number;
        static from(value: string|number|Wbs): Wbs;
        append(value: string|number): Wbs;
        isEqual(value: string|Wbs): boolean;
        match(pattern: string): boolean;
    }

    type ArrayDataFieldConfig = {
        alwaysWrite: boolean
        column: string|object
        compare: Function
        dataSource: string
        defaultValue: any
        internal: boolean
        label: string
        name: string
        nullText: string
        nullValue: any
        nullable: boolean
        persist: boolean
        readOnly: boolean
        type: 'string'|'array'|'boolean'|'date'|'model'|'object'|'number'|'int'|'durationunit'
    }

    export class ArrayDataField extends DataField {
        constructor(config?: Partial<ArrayDataFieldConfig>);
    }

    type BooleanDataFieldConfig = {
        alwaysWrite: boolean
        column: string|object
        compare: Function
        dataSource: string
        defaultValue: any
        internal: boolean
        label: string
        name: string
        nullText: string
        nullValue: boolean
        nullable: boolean
        persist: boolean
        readOnly: boolean
        type: 'string'|'array'|'boolean'|'date'|'model'|'object'|'number'|'int'|'durationunit'
    }

    export class BooleanDataField extends DataField {
        constructor(config?: Partial<BooleanDataFieldConfig>);
    }

    type DataFieldConfig = {
        alwaysWrite: boolean
        column: string|object
        compare: Function
        dataSource: string
        defaultValue: any
        internal: boolean
        label: string
        name: string
        nullText: string
        nullValue: any
        nullable: boolean
        persist: boolean
        readOnly: boolean
        type: 'string'|'array'|'boolean'|'date'|'model'|'object'|'number'|'int'|'durationunit'
    }

    export class DataField extends Base {
        constructor(config?: Partial<DataFieldConfig>);
        convert(value: any): any;
        isEqual(first: any, second: any): boolean;
        print(value: any): string;
        printValue(value: any): string;
        serialize(value: any, record: Model): any;
    }

    type DateDataFieldConfig = {
        alwaysWrite: boolean
        column: string|object
        compare: Function
        dataSource: string
        defaultValue: any
        format: string
        internal: boolean
        label: string
        name: string
        nullText: string
        nullValue: any
        nullable: boolean
        persist: boolean
        readOnly: boolean
        type: 'string'|'array'|'boolean'|'date'|'model'|'object'|'number'|'int'|'durationunit'
    }

    export class DateDataField extends DataField {
        constructor(config?: Partial<DateDataFieldConfig>);
    }

    type IntegerDataFieldConfig = {
        alwaysWrite: boolean
        column: string|object
        compare: Function
        dataSource: string
        defaultValue: any
        internal: boolean
        label: string
        name: string
        nullText: string
        nullValue: number
        nullable: boolean
        persist: boolean
        readOnly: boolean
        rounding: 'round'|'floor'|'ceil'
        type: 'string'|'array'|'boolean'|'date'|'model'|'object'|'number'|'int'|'durationunit'
    }

    export class IntegerDataField extends DataField {
        constructor(config?: Partial<IntegerDataFieldConfig>);
    }

    type NumberDataFieldConfig = {
        alwaysWrite: boolean
        column: string|object
        compare: Function
        dataSource: string
        defaultValue: any
        internal: boolean
        label: string
        name: string
        nullText: string
        nullValue: number
        nullable: boolean
        persist: boolean
        precision: number
        readOnly: boolean
        type: 'string'|'array'|'boolean'|'date'|'model'|'object'|'number'|'int'|'durationunit'
    }

    export class NumberDataField extends DataField {
        constructor(config?: Partial<NumberDataFieldConfig>);
    }

    type ObjectDataFieldConfig = {
        alwaysWrite: boolean
        column: string|object
        compare: Function
        dataSource: string
        defaultValue: any
        internal: boolean
        label: string
        name: string
        nullText: string
        nullValue: any
        nullable: boolean
        persist: boolean
        readOnly: boolean
        type: 'string'|'array'|'boolean'|'date'|'model'|'object'|'number'|'int'|'durationunit'
    }

    export class ObjectDataField extends DataField {
        constructor(config?: Partial<ObjectDataFieldConfig>);
    }

    type StringDataFieldConfig = {
        alwaysWrite: boolean
        column: string|object
        compare: Function
        dataSource: string
        defaultValue: any
        internal: boolean
        label: string
        name: string
        nullText: string
        nullValue: string
        nullable: boolean
        persist: boolean
        readOnly: boolean
        type: 'string'|'array'|'boolean'|'date'|'model'|'object'|'number'|'int'|'durationunit'
    }

    export class StringDataField extends DataField {
        constructor(config?: Partial<StringDataFieldConfig>);
    }

    export class ModelLinkClass {
        readonly hasLinks: boolean
        readonly isLinked: boolean
        link(): typeof Proxy;
    }

    export const ModelLink : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & ModelLinkClass>

    type StoreCRUDClassConfig = {
        autoCommit: boolean
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeRemove: Function
        onCommit: Function
        onRemove: Function
        onRemoveAll: Function
    }

    export class StoreCRUDClass {
        autoCommit: boolean
        readonly changes: object
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeRemove: Function
        onCommit: Function
        onRemove: Function
        onRemoveAll: Function
        constructor(config?: Partial<StoreCRUDClassConfig>);
        add(records: Model|Model[]|object|object[]|Partial<ModelConfig>|Partial<ModelConfig>[], silent?: boolean): Model[];
        commit(silent?: boolean): object;
        insert(index: number, records: Model|Model[]|object|object[]|Partial<ModelConfig>|Partial<ModelConfig>[], silent?: boolean): Model[];
        move(records: Model|Model[], beforeRecord: Model): void;
        remove(records: string|string[]|number|number[]|Model|Model[], silent?: boolean): Model[];
        removeAll(silent?: boolean): boolean;
        resumeAutoCommit(): void;
        revertChanges(): void;
        suspendAutoCommit(): void;
    }

    export const StoreCRUD : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreCRUDClass>

    type StoreChainedClassConfig = {
        chainedFields: string[]
        chainedFilterFn: Function
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        keepUncommittedChanges: boolean
        masterStore: Store
    }

    export class StoreChainedClass {
        readonly isChained: boolean
        constructor(config?: Partial<StoreChainedClassConfig>);
        chain(chainedFilterFn?: Function, chainedFields?: string[], config?: object): Store;
        fillFromMaster(): void;
        makeChained(chainedFilterFn?: Function, chainedFields?: string[], config?: object): Store;
    }

    export const StoreChained : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreChainedClass>

    type StoreChangesClassConfig = {
        applyChangesetFilterSortTarget: 'changes'|'none'
    }

    export class StoreChangesClass {
        applyChangesetFilterSortTarget: 'changes'|'none'
        constructor(config?: Partial<StoreChangesClassConfig>);
        applyChangesFromStore(otherStore: Store): void;
        applyChangeset(changes: object, transformFn?: Function, phantomIdField?: string): void;
    }

    export const StoreChanges : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreChangesClass>

    type StoreFilterClassConfig = {
        filters: object|object[]
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        onFilter: Function
    }

    export class StoreFilterClass {
        readonly filters: Collection
        readonly isFiltered: boolean
        onFilter: Function
        constructor(config?: Partial<StoreFilterClassConfig>);
        addFilter(newFilters: object|Function, silent?: boolean): Promise<CollectionFilter>;
        clearFilters(): Promise<any>|null;
        filter(newFilters: object|object[]|Function): Promise<any>|null;
        filterBy(fn: Function): Promise<any>|null;
        removeFilter(idOrInstance: string|CollectionFilter, silent?: boolean): Promise<any>|CollectionFilter;
    }

    export const StoreFilter : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreFilterClass>

    type StoreGroupClassConfig = {
        groupers: object[]
        onGroup: Function
    }

    export class StoreGroupClass {
        groupers: object[]
        readonly isGrouped: boolean
        onGroup: Function
        constructor(config?: Partial<StoreGroupClassConfig>);
        clearGroupers(): Promise<any>|null;
        getGroupRecords(groupValue: any): Model[];
        getGroupTitles(): string[];
        group(field: string|object, ascending?: boolean, add?: boolean, performSort?: boolean, silent?: boolean): Promise<any>|null;
        isRecordInGroup(record: Model, groupValue: any): boolean;
        setGroupers(groupers: object[]): Promise<any>|null;
    }

    export const StoreGroup : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreGroupClass>

    type StoreProxyClassConfig = {
        objectify: boolean
    }

    export class StoreProxyClass {
        constructor(config?: Partial<StoreProxyClassConfig>);
    }

    export const StoreProxy : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreProxyClass>

    export class StoreSearchClass {
        find(fn: Function, searchAllRecords?: boolean): Model;
        findByField(field: string, value: any, distinct?: boolean, searchAllRecords?: boolean): object[];
        findRecord(fieldName: string, value: any, searchAllRecords?: boolean): Model;
        query(fn: Function, searchAllRecords?: boolean): Model[];
        search(text: string, fields: string[], formatters?: Function[], searchAllRecords?: boolean): object[];
        some(fn: Function, searchAllRecords?: boolean): boolean;
    }

    export const StoreSearch : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreSearchClass>

    type StoreSortClassConfig = {
        reapplySortersOnAdd: boolean
        sorters: object[]|string[]
        useLocaleSort: boolean|string|object
        onBeforeSort: Function
        onSort: Function
    }

    export class StoreSortClass {
        readonly isSorted: boolean
        readonly sorters: object[]
        onBeforeSort: Function
        onSort: Function
        constructor(config?: Partial<StoreSortClassConfig>);
        addSorter(field: string|object[]|object|Function, ascending?: boolean): Promise<any>|null;
        clearSorters(): Promise<any>|null;
        createSorterFn(sorters: object[]): Function;
        removeSorter(field: string|Function): Promise<any>|null;
        sort(field: string|object[]|object|Function, ascending?: boolean, add?: boolean, silent?: boolean): Promise<any>|null;
    }

    export const StoreSort : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreSortClass>

    export class StoreStateClass {
    }

    export const StoreState : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreStateClass>

    export class StoreSumClass {
        average(field: string, records: Model[]): number;
        groupSum(groupValue: any, field: string): number;
        max(field: string, records: Model[]): number|Date;
        min(field: string, records: Model[]): number|Date;
        sum(field: string, records: Model[]): number;
    }

    export const StoreSum : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreSumClass>

    type StoreSyncClassConfig = {
        syncDataOnLoad: boolean|object
    }

    export class StoreSyncClass {
        constructor(config?: Partial<StoreSyncClassConfig>);
    }

    export const StoreSync : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreSyncClass>

    type StoreTreeClassConfig = {
        fireRemoveEventForMoveAction: boolean
        transformFlatData: boolean
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onIndent: Function
        onOutdent: Function
    }

    export class StoreTreeClass {
        readonly isTree: boolean
        leaves: Model[]
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onIndent: Function
        onOutdent: Function
        constructor(config?: Partial<StoreTreeClassConfig>);
        getChildren(parent: Model): Model[];
        indent(nodes: Model|Model[]): Promise<void>;
        loadChildren(parentRecord: Model): Promise<any>;
        outdent(nodes: Model|Model[]): Promise<void>;
        toggleCollapse(idOrRecord: string|number|Model, collapse?: boolean): Promise<void>;
    }

    export const StoreTree : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreTreeClass>

    type TreeNodeClassConfig = {
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
    }

    export class TreeNodeClass {
        static convertEmptyParentToLeaf: boolean|object
        allChildren: Model[]
        readonly childLevel: number
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        descendantCount: number
        readonly firstChild: Model
        readonly isLeaf: boolean
        readonly isLoaded: boolean
        readonly isParent: boolean
        readonly isRoot: boolean
        readonly lastChild: Model
        readonly nextSibling: Model
        readonly orderedParentIndex: number
        readonly parent: Model
        parentId: number|string|null
        readonly parentIndex: number
        readonly previousSibling: Model
        previousSiblingsTotalCount: number
        visibleDescendantCount: number
        constructor(config?: Partial<TreeNodeClassConfig>);
        ancestorsExpanded(store?: Store): boolean;
        appendChild(childRecord: Model|Model[]|object|object[]|Partial<ModelConfig>|Partial<ModelConfig>[], silent?: boolean): Model|Model[]|null;
        bubble(fn: Function, skipSelf?: boolean): void;
        bubbleWhile(fn: Function, skipSelf?: boolean): boolean;
        clearChildren(silent?: boolean): Model[];
        contains(childOrId: Model|string|number, skipSelf?: boolean): boolean;
        convertToParent(silent?: boolean): void;
        getDescendantCount(onlyVisible?: boolean, store?: Store): number;
        insertChild(childRecord: Model|Model[]|object|object[]|Partial<ModelConfig>|Partial<ModelConfig>[], before?: Model, silent?: boolean): Model|Model[]|null;
        isExpanded(store: Store): boolean;
        removeChild(childRecords: Model|Model[], isMove?: boolean, silent?: boolean): Model[];
        replaceChildren(childRecords: Model|Model[]): Model[];
        traverse(fn: Function, skipSelf?: boolean, options?: object|boolean): void;
        traverseBefore(fn: Function, skipSelf?: boolean, options?: object|boolean): void;
        traverseWhile(fn: Function, skipSelf?: boolean, options?: object|boolean): boolean;
    }

    export const TreeNode : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & TreeNodeClass>

    type StateTrackingManagerConfig = {
        autoRecord: boolean
        autoRecordTransactionStopTimeout: number
        bubbleEvents: object
        callOnFunctions: boolean
        disabled: boolean
        getTransactionTitle: Function
        listeners: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisabled: Function
        onQueueReset: Function
        onRecordingStart: Function
        onRecordingStop: Function
        onRestoringStart: Function
        onRestoringStop: Function
    }

    export class StateTrackingManager extends Base implements EventsClass {
        autoRecord: boolean
        canRedo: boolean
        canUndo: boolean
        disabled: boolean
        readonly isReady: boolean
        readonly isRecording: boolean
        readonly isRestoring: boolean
        length: number
        position: number
        readonly queue: string[]
        state: StateBase
        stores: Store[]
        readonly transaction: Transaction
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisabled: Function
        onQueueReset: Function
        onRecordingStart: Function
        onRecordingStop: Function
        onRestoringStart: Function
        onRestoringStop: Function
        constructor(config?: Partial<StateTrackingManagerConfig>);
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        addStore(store: Store): void;
        disable(): void;
        enable(): void;
        forEachStore(fn: Function): void;
        hasListener(eventName: string): boolean;
        hasStore(store: Store): boolean;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        redo(steps?: number): Promise<any>;
        redoAll(): Promise<any>;
        rejectTransaction(): void;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        removeStore(store: Store): void;
        resetQueue(): void;
        resetRedoQueue(): void;
        resetUndoQueue(): void;
        resumeEvents(): boolean;
        startTransaction(title?: string): void;
        stopTransaction(title?: string): void;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
        undo(steps?: number): Promise<any>;
        undoAll(): Promise<any>;
    }

    type TransactionConfig = {
        title: string
    }

    export class Transaction {
        length: number
        queue: ActionBase[]
        constructor(config?: Partial<TransactionConfig>);
        addAction(action: ActionBase|object): void;
        redo(): void;
        undo(): void;
    }

    export abstract class ActionBase {
        readonly type: string
        redo(): void;
        undo(): void;
    }

    type UpdateActionConfig = {
        model: Model
        newData: object
        oldData: object
    }

    export class UpdateAction extends ActionBase {
        constructor(config?: Partial<UpdateActionConfig>);
    }

    export class ModelStmClass {
        stm: StateTrackingManager
    }

    export const ModelStm : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & ModelStmClass>

    type StoreStmClassConfig = {
        ignoreRemoteChangesInSTM: boolean
        stm: StateTrackingManager
    }

    export class StoreStmClass {
        ignoreRemoteChangesInSTM: boolean
        constructor(config?: Partial<StoreStmClassConfig>);
    }

    export const StoreStm : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StoreStmClass>

    export abstract class StateBase {
    }

    type ContextMenuBaseConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        items: object
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        menu: object
        triggerEvent: string|boolean
        type: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export abstract class ContextMenuBase extends InstancePlugin {
        readonly menu: Menu
        readonly menuContext: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ContextMenuBaseConfig>);
        showContextMenu(event: Event, alignSpec?: object|HTMLElement): void;
    }

    export class AjaxHelper {
        static fetch(url: string, options?: FetchOptions): Promise<any>;
        static get(url: string, options?: FetchOptions): Promise<any>;
        static mockUrl(url: string, response: object|Function): void;
        static post(url: string, payload: string|object|FormData, options?: FetchOptions): Promise<any>;
    }

    export class AsyncHelper {
        static animationFrame(): Promise<void>;
        static sleep(millis: number): Promise<void>;
        static yield(): Promise<void>;
    }

    export class BrowserHelper {
        static readonly chromeVersion: number
        static readonly firefoxVersion: number
        static readonly isAndroid: boolean
        static readonly isChrome: boolean
        static readonly isFirefox: boolean
        static readonly isLinux: boolean
        static readonly isMac: boolean
        static readonly isMobileSafari: boolean
        static readonly isSafari: boolean
        static readonly isWebkit: boolean
        static readonly isWindows: boolean
        static getCookie(name: string): string;
        static searchParam(paramName: string, defaultValue?: string, search?: string): string;
    }

    export class CSSHelper {
        static findRule(selector: string|Function): CSSRule;
        static insertRule(cssText: string): CSSRule;
    }

    export class DateHelper {
        static defaultFormat: string
        static defaultParseFormat: string
        static readonly nonWorkingDays: object
        static readonly weekStartDay: number
        static add(date: Date|string, amount: number|string|Duration|object, unit?: string): Date;
        static as(toUnit: string, amount: number|string, fromUnit?: string): number;
        static asMilliseconds(amount: number|string, unit?: string): number;
        static asMonths(time: Date): number;
        static betweenLesser(date: Date, start: Date, end: Date): boolean;
        static betweenLesserEqual(date: Date, start: Date, end: Date): boolean;
        static ceil(time: Date, increment: string|number|object, base?: Date, weekStartDay?: number): Date;
        static clamp(date: Date, min: Date, max: Date): Date;
        static clearTime(date: Date, clone?: boolean): Date;
        static clone(date: Date): Date;
        static compare(first: Date, second: Date, unit?: string): number;
        static compareUnits(unit1: string, unit2: string): number;
        static constrain(date: Date, min?: Date, max?: Date): Date;
        static copyTimeValues(targetDate: Date, sourceDate: Date): Date;
        static create(definition: object): Date;
        static daysInMonth(date: Date): number;
        static diff(start: Date, end: Date, unit?: string, fractional?: boolean): number;
        static endOf(date: Date): void;
        static floor(time: Date, increment: string|number|object, base?: Date, weekStartDay?: number): Date;
        static format(date: Date, format?: string): string;
        static formatCount(count: number, unit: string): string;
        static formatDelta(delta: number, options?: object): string;
        static formatRange(dates: Date[], format: string): string;
        static get(date: Date, unit: string): number;
        static getDelta(delta: number, options?: object): object;
        static getDurationInUnit(start: Date, end: Date, unit: string): number;
        static getEndOfPreviousDay(date: Date, noNeedToClearTime?: boolean): Date;
        static getFirstDateOfMonth(date: Date): Date;
        static getLastDateOfMonth(date: Date): Date;
        static getLocalizedNameOfUnit(unit: string, plural?: boolean): string;
        static getNext(date: Date, unit: string, increment?: number, weekStartDay?: number): Date;
        static getShortNameOfUnit(unit: string): string;
        static getStartOfNextDay(date: Date, clone?: boolean, noNeedToClearTime?: boolean): Date;
        static getTime(hours: number|Date, minutes?: number, seconds?: number, ms?: number): Date;
        static getTimeOfDay(date: Date, unit?: string): number;
        static getUnitToBaseUnitRatio(baseUnit: string, unit: string, acceptEstimate?: boolean): number;
        static getWeekNumber(date: Date, weekStartDay?: number): number[];
        static intersectSpans(date1Start: Date, date1End: Date, date2Start: Date, date2End: Date): boolean;
        static is24HourFormat(format: string): boolean;
        static isAfter(first: Date, second: Date): boolean;
        static isBefore(first: Date, second: Date): boolean;
        static isDate(value: any): boolean;
        static isEqual(first: Date, second: Date, unit?: string): boolean;
        static isStartOf(date: Date, unit: string): boolean;
        static isValidDate(date: Date): boolean;
        static max(first: Date, second: Date): Date;
        static min(first: Date, second: Date): Date;
        static normalizeUnit(unit: string): string;
        static parse(dateString: string, format?: string): Date;
        static parseDuration(value: string, allowDecimals?: boolean, defaultUnit?: string): object;
        static parseTimeUnit(unitName: any): void;
        static round(time: Date, increment: string|number, base?: Date, weekStartDay?: number): Date;
        static set(date: Date, unit: string|object, amount: number): Date;
        static startOf(date: Date, unit?: string, clone?: boolean, weekStartDay?: number): Date;
        static timeSpanContains(spanStart: Date, spanEnd: Date, otherSpanStart: Date, otherSpanEnd: Date): boolean;
    }

    export class DomHelper {
        static readonly activeElement: HTMLElement
        static readonly scrollBarWidth: number
        static readonly themeInfo: object
        // @deprecated
        static addClasses(element: HTMLElement, classes: string[]): void;
        static addLeft(element: HTMLElement, x: number): void;
        static addTemporaryClass(element: HTMLElement, cls: string, duration: number, delayable: typeof Delayable): void;
        static addTop(element: HTMLElement, y: number): void;
        static addTranslateX(element: HTMLElement, x: number): void;
        static addTranslateY(element: HTMLElement, y: number): void;
        static alignTo(element: HTMLElement, target: HTMLElement|Rectangle, alignSpec?: object, round?: boolean): void;
        static append(parentElement: HTMLElement, elementOrConfig: HTMLElement|object|string): HTMLElement;
        static applyStyle(element: HTMLElement, style: string|object, overwrite?: boolean): void;
        static children(element: HTMLElement, selector: string): HTMLElement[];
        static createElement(config: DomConfig, options?: object): HTMLElement|HTMLElement[]|object;
        static down(element: HTMLElement, selector: string): HTMLElement;
        static elementFromPoint(x: number, y: number): HTMLElement;
        static focusWithoutScrolling(element: HTMLElement): void;
        static forEachChild(element: HTMLElement, fn: Function): void;
        static forEachSelector(element: HTMLElement, selector: string, fn: Function): void;
        static getChild(element: HTMLElement, selector: string): HTMLElement;
        static getEdgeSize(element: HTMLElement, edgeStyle: string, edges?: string): object;
        static getEventElement(event: Event|Element, elementName?: string): Element;
        static getId(element: HTMLElement): void;
        static getOffsetX(element: HTMLElement, container: HTMLElement): number;
        static getOffsetXY(element: HTMLElement, container: HTMLElement): number[];
        static getOffsetY(element: HTMLElement, container: HTMLElement): number;
        static getPageX(element: HTMLElement): number;
        static getPageY(element: HTMLElement): number;
        static getParents(element: HTMLElement): HTMLElement[];
        static getStyleValue(element: HTMLElement, propName: string|string[], inline?: boolean): string|object;
        static getTranslateX(element: HTMLElement): number;
        static getTranslateXY(element: HTMLElement): number[];
        static getTranslateY(element: HTMLElement): number;
        static getViewportIntersection(target: HTMLElement, docRect: Rectangle, method: string): Rectangle;
        static hasChild(element: HTMLElement, selector: string): boolean;
        static highlight(element: HTMLElement|Rectangle): void;
        static insertBefore(into: HTMLElement, element: HTMLElement, beforeElement: HTMLElement): HTMLElement;
        static insertFirst(into: HTMLElement, element: HTMLElement): HTMLElement;
        static isCustomElement(element: HTMLElement): boolean;
        static isDescendant(parentElement: HTMLElement, childElement: HTMLElement): boolean;
        static isEditable(): boolean;
        static isElement(value: any): boolean;
        static isFocusable(element: HTMLElement): boolean;
        static isInView(target: HTMLElement, whole?: boolean): Rectangle|boolean;
        static isNode(value: any): boolean;
        static isVisible(element: HTMLElement): boolean;
        static makeValidId(id: string): string;
        static measureSize(size: string, sourceElement: HTMLElement, round?: boolean): number;
        static measureText(text: string, sourceElement: HTMLElement): number;
        static parseStyle(style: string): object;
        // @deprecated
        static removeClasses(element: HTMLElement, classes: string[]): void;
        static removeEachSelector(element: HTMLElement, selector: string): void;
        static resetScrollBarWidth(): void;
        static setLeft(element: HTMLElement, x: number|string): void;
        static setLength(element: string|HTMLElement, style?: string, value?: number|string): string;
        static setTheme(newThemeName: string): Promise<any>;
        static setTop(element: HTMLElement, y: number|string): void;
        static setTranslateX(element: HTMLElement, x: number): void;
        static setTranslateXY(element: HTMLElement, x?: number, y?: number): void;
        static setTranslateY(element: HTMLElement, y: number): void;
        static slideIn(element: HTMLElement, direction?: number): Promise<void>;
        static sync(sourceElement: string|HTMLElement, targetElement: HTMLElement): HTMLElement;
        static syncClassList(element: HTMLElement, newClasses: string[]|string|object): boolean;
        static toggleClasses(element: HTMLElement, classes: string[], force?: boolean): void;
        // @deprecated
        static up(element: HTMLElement, selector: string): HTMLElement;
        static updateClassList(element: HTMLElement, classes: object|DomClassList): boolean;
    }

    export class DomSync {
        static addChild(parentElement: HTMLElement, childElement: HTMLElement, syncId: string|number): void;
        static getChild(element: HTMLElement, path: string): HTMLElement;
        static removeChild(parentElement: HTMLElement, childElement: HTMLElement): void;
        static sync(options: object): HTMLElement;
    }

    type DragHelperConfig = {
        autoSizeClonedTarget: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        cloneTarget: boolean
        constrain: boolean
        containers: HTMLElement[]
        dragThreshold: number
        dragWithin: HTMLElement
        dropTargetCls: string
        dropTargetSelector: string
        hideOriginalElement: boolean
        ignoreSelector: string
        invalidCls: string
        isElementDraggable: Function
        listeners: object
        lockX: boolean
        lockY: boolean
        maxX: number
        maxY: number
        minX: number
        minY: number
        mode: 'container'|'translateXY'
        outerElement: HTMLElement
        proxySelector: string
        removeProxyAfterDrop: boolean
        scrollManager: ScrollManager
        targetSelector: string
        touchStartDelay: number
        unifiedOffset: number
        unifiedProxy: boolean
        onAbort: Function
        onBeforeDestroy: Function
        onBeforeDragStart: Function
        onCatchAll: Function
        onDestroy: Function
        onDrag: Function
        onDragStart: Function
        onDrop: Function
    }

    export class DragHelper extends Base implements EventsClass {
        readonly isDragging: boolean
        onAbort: Function
        onBeforeDestroy: Function
        onBeforeDragStart: Function
        onCatchAll: Function
        onDestroy: Function
        onDrag: Function
        onDragStart: Function
        onDrop: Function
        constructor(config?: Partial<DragHelperConfig>);
        constructor(config: object);
        abort(): Promise<void>;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        animateProxyTo(element: HTMLElement|Rectangle, alignSpec?: object): Promise<void>;
        createProxy(element: HTMLElement): HTMLElement;
        hasListener(eventName: string): boolean;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        resumeEvents(): boolean;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
    }

    export class EventHelper {
        static readonly dblClickTime: number
        static readonly longPressTime: number
        static addListener(element: HTMLElement, eventName: string|object, handler?: Function, options?: object): Function;
        static getClientPoint(event: Event): Point;
        static getDistanceBetween(event1: Event, event2: Event): number;
        static getPagePoint(event: Event): Point;
        static getXY(event: Event): number[];
        static on(options: object): Function;
        static onTransitionEnd(detail: object): Function;
        static waitForTransitionEnd(detail: object): Promise<void>;
    }

    export class ObjectHelper {
        static assertArray(value: object, name: string): void;
        static assertBoolean(value: object, name: string): void;
        static assertClass(value: object, name: string): void;
        static assertFunction(value: object, name: string): void;
        static assertInstance(value: object, name: string): void;
        static assertNumber(value: object, name: string): void;
        static assertObject(value: object, name: string): void;
        static assertString(value: object, name: string): void;
        static assertType(value: object, type: string, name: string, allowNull?: boolean): void;
        static assign(dest: object, ...sources: object[]): object;
        static assignIf(dest: object, ...sources: object[]): object;
        static cleanupProperties(object: object, keepNull?: boolean): object;
        static clone(value: any, handler?: Function): any;
        static copyProperties(dest: object, source: object, props: string[]): object;
        static copyPropertiesIf(dest: object, source: object, props: string[]): object;
        static createTruthyKeys(source: string|string[]): void;
        static getMapPath(map: Map<any, any>, path: string|number|string[]|number[], defaultValue?: object): void;
        static getPath(object: object, path: string): any;
        static getPropertyDescriptor(object: object, propertyName: string): object;
        static getTruthyKeys(source: object): string[];
        static getTruthyValues(source: object): string[];
        static isDeeplyEqual(a: object, b: object, options?: object): boolean;
        static isEmpty(object: object): boolean;
        static isEqual(a: any, b: any): any;
        static isLessThan(a: any, b: any): boolean;
        static isMoreThan(a: any, b: any): boolean;
        static isObject(value: object): boolean;
        static isPartial(a: any, b: any): boolean;
        static keys(object: object, ignore?: object|Function, mapper?: Function): string[];
        static merge(dest: object, ...sources: object[]): object;
        static pathExists(object: object, path: string): boolean;
        static removeAllProperties(object: object): object;
        static round(number: number, digits: number): number;
        static roundTo(number: number, step?: number): number;
        static setPath(object: object, path: string, value: any): object;
        static toFixed(number: number, digits: number): string;
        static transformArrayToNamedObject(arrayOfItems: object[], prop?: string): object;
        static transformNamedObjectToArray(namedItems: object, prop?: string): object[];
        static typeOf(value: any): string;
    }

    export class StringHelper {
        static capitalize(string: string): string;
        static decodeHtml(str: string): string;
        static encodeAttributeSelector(attr: string, value: string|number): string;
        static encodeHtml(str: string): string;
        static generateUUID(): string;
        static safeJsonParse(string: string): object;
        static safeJsonStringify(object: object, replacer?: Function|string[]|number[], space?: string|number): string;
        static uncapitalize(string: string): string;
        static xss(): void;
    }

    export class WidgetHelper {
        static append(widget: object|object[], config?: HTMLElement|string|object): Widget[];
        static attachTooltip(element: HTMLElement, configOrText: string|object): HTMLElement;
        static createWidget(config: object): object;
        static destroyTooltipAttached(element: HTMLElement): void;
        static fromElement(element: HTMLElement|Event, type?: string|Function, limit?: HTMLElement|number): Widget;
        static getById(Id: string): Widget;
        static hasTooltipAttached(element: HTMLElement): boolean;
        static mask(element: HTMLElement, msg?: string): void;
        static openPopup(element: HTMLElement, config: Partial<PopupConfig>): any|object;
        static showContextMenu(element: HTMLElement|number[], config: object): any|object;
        static toast(msg: string): void;
        static unmask(element: HTMLElement): void;
    }

    export class XMLHelper {
        static convertFromObject(obj: object, options?: object): string;
    }

    export class DataGenerator {
        static generateData(count: number|object, randomHeight?: boolean, initialId?: number, reset?: boolean): object[];
        static generateEvents(): object[];
        static generateRow(): object;
    }

    export class DomClassList {
        value: string
        readonly values: string[]
        constructor(classes: string|object);
        add(...classes: (string|object)[]): void;
        assign(classList: object): void;
        assignTo(element: HTMLElement|DOMTokenList): void;
        clear(): DomClassList;
        clone(): DomClassList;
        contains(className: string): boolean;
        isEqual(other: DomClassList|string): boolean;
        remove(...classes: string[]): void;
        set(): DomClassList;
        split(): string[];
        toggle(className: string, force?: boolean): boolean;
        trim(): string;
    }

    export class Fullscreen {
        static enabled: boolean
        static isFullscreen: boolean
        static exit(): Promise<any>;
        static onFullscreenChange(fn: Function): void;
        static request(element: HTMLElement): Promise<any>;
        static unFullscreenChange(fn: Function): void;
    }

    type NumberFormatConfig = {
        fraction: number|number[]
        integer: number
        significant: number|number[]
        template: string
    }

    export class NumberFormat {
        constructor(config?: Partial<NumberFormatConfig>);
        as(change: string|object, cacheAs?: string): NumberFormat;
        format(value: number): string;
        parse(value: string, strict?: boolean): number;
        parseStrict(value: string): number;
        round(value: number|string): number;
        truncate(value: number|string): number;
    }

    export class Point extends Rectangle {
        constrain(into: Rectangle): void;
    }

    export class RandomGenerator {
        fromArray(array: any[]): any;
        nextRandom(max: number): number;
        randomArray(): void;
        reset(): void;
    }

    export class Rectangle {
        bottom: number
        center: Point
        height: number
        left: number
        right: number
        top: number
        width: number
        x: number
        y: number
        static client(element: HTMLElement, relativeTo?: HTMLElement, ignorePageScroll?: boolean): Rectangle;
        static content(element: HTMLElement, relativeTo?: HTMLElement, ignorePageScroll?: boolean): Rectangle;
        static from(element: HTMLElement|Widget|Mask, relativeTo?: HTMLElement, ignorePageScroll?: boolean): Rectangle;
        static fromScreen(element: HTMLElement, relativeTo?: HTMLElement): Rectangle;
        static inner(element: HTMLElement, relativeTo?: HTMLElement, ignorePageScroll?: boolean): Rectangle;
        static union(...rectangles: Rectangle[]): Rectangle;
        adjust(x: number, y: number, width: number, height: number): Rectangle;
        alignTo(spec: object): Rectangle;
        clone(): void;
        constrainTo(constrainTo: Rectangle, strict: boolean): Rectangle|boolean;
        contains(other: Rectangle): boolean;
        highlight(): void;
        intersect(other: Rectangle, useBoolean?: boolean, allowZeroDimensions?: boolean): Rectangle|boolean;
        moveTo(x: number, y: number): Rectangle;
        roundPx(devicePixelRatio?: number): void;
        translate(x: number, y: number): Rectangle;
    }

    type ScrollerConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        contentElement: HTMLElement|string
        element: HTMLElement
        listeners: object
        overflowX: string|boolean
        overflowY: string|boolean
        translate: boolean
        widget: Widget
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onScroll: Function
        onScrollend: Function
    }

    export class Scroller extends Base implements EventsClass, DelayableClass {
        readonly clientHeight: number
        readonly clientWidth: number
        readonly id: string
        readonly lastScrollLeft: number
        readonly maxX: number
        readonly maxY: number
        overflowX: boolean|string
        overflowY: boolean|string
        scrollHeight: number
        scrollLeft: number
        readonly scrollWidth: number
        viewport: Rectangle
        x: number
        y: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onScroll: Function
        onScrollend: Function
        constructor(config?: Partial<ScrollerConfig>);
        static scrollIntoView(element: HTMLElement, options?: object): Promise<any>;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        addPartner(otherScroller: Scroller, axes?: string|object): void;
        hasListener(eventName: string): boolean;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        removePartner(otherScroller: Scroller): void;
        resumeEvents(): boolean;
        scrollBy(xDelta?: number, yDelta?: number, options?: object|boolean): Promise<any>;
        scrollIntoView(element: HTMLElement|Rectangle, options?: object): Promise<any>;
        scrollTo(toX?: number, toY?: number, options?: object|boolean): Promise<any>;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
    }

    export class LocaleHelper {
        static mergeLocales(...locales: object[]): object;
        static publishLocale(localeName: string, config: object): void;
        static trimLocale(locale: object, toTrim: object, silent?: boolean): void;
    }

    export class LocaleManagerSingleton {
        locale: string|object
        readonly locales: object
        throwOnMissingLocale: boolean
        onLocale: Function
        applyLocale(name: string): boolean|Promise<any>;
        extendLocale(name: string, config: object): void;
        registerLocale(name: string, config: object): void;
    }
    export const LocaleManager : LocaleManagerSingleton

    type LocalizableClassConfig = {
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
    }

    export class LocalizableClass {
        readonly localeManager: typeof LocaleManager
        constructor(config?: Partial<LocalizableClassConfig>);
        static L(text: string, templateData?: object): string;
        static optionalL(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        updateLocalization(): void;
    }

    export const Localizable : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & LocalizableClass>

    export class DelayableClass {
    }

    export const Delayable : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & DelayableClass>

    type EventsClassConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        listeners: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class EventsClass {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventsClassConfig>);
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        hasListener(eventName: string): boolean;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        resumeEvents(): boolean;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
    }

    export const Events : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & EventsClass>

    type InstancePluginConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class InstancePlugin extends Base implements LocalizableClass, EventsClass {
        readonly client: Widget
        disabled: boolean
        readonly localeManager: typeof LocaleManager
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
        constructor(config?: Partial<InstancePluginConfig>);
        static L(text: string, templateData?: object): string;
        static optionalL(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        doDisable(): void;
        hasListener(eventName: string): boolean;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        resumeEvents(): boolean;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
        updateLocalization(): void;
    }

    type LoadMaskableClassConfig = {
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        syncMask: string|object|null
    }

    export class LoadMaskableClass {
        constructor(config?: Partial<LoadMaskableClassConfig>);
    }

    export const LoadMaskable : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & LoadMaskableClass>

    export class Override {
        static apply(override: object): void;
    }

    type PluggableClassConfig = {
        plugins: Function[]
    }

    export class PluggableClass {
        readonly plugins: object
        constructor(config?: Partial<PluggableClassConfig>);
        addPlugins(...plugins: Function[]): void;
        getPlugin(pluginClassOrName: string|Function): InstancePlugin;
        hasPlugin(pluginClassOrName: string|Function): boolean;
    }

    export const Pluggable : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & PluggableClass>

    type StateClassConfig = {
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
    }

    export class StateClass {
        readonly isStateful: boolean
        state: object
        constructor(config?: Partial<StateClassConfig>);
        applyState(state: object): void;
        getState(): object;
        loadState(stateId?: string, reload?: boolean): void;
        saveState(options?: object|string): void;
    }

    export const State : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StateClass>

    type StateProviderConfig = {
        prefix: string
        storage: 'local'|'memory'|StateStorage
        onRemove: Function
        onSave: Function
        onSet: Function
    }

    export class StateProvider {
        static instance: StateProvider
        data: object
        storage: StateStorage
        onRemove: Function
        onSave: Function
        onSet: Function
        constructor(config?: Partial<StateProviderConfig>);
        static setup(inst: 'local'|'memory'|StateProvider): StateProvider;
        clear(): StateProvider;
        getValue(key: string): object;
        setValue(key: string, value: object): StateProvider;
    }

    export class StateStorage {
        data: object
        keys: string[]
        clear(): void;
        getItem(key: string): any;
        removeItem(key: string): void;
        setItem(key: string, value: any): void;
    }

    type ClickRepeaterConfig = {
        accelerateDuration: number
        delay: number
        delegate: string
        element: HTMLElement
        endRate: number
        startRate: number
    }

    export class ClickRepeater {
        constructor(config?: Partial<ClickRepeaterConfig>);
    }

    type CollectionConfig = {
        autoFilter: boolean
        autoSort: boolean
        extraKeys: string[]|object[]
        idProperty: string
        sorters: object[]
        onChange: Function
        onNoChange: Function
    }

    export class Collection {
        readonly allValues: object[]
        readonly count: number
        readonly filterFunction: Function
        readonly filters: Collection
        readonly generation: number
        idProperty: string
        readonly isFiltered: boolean
        readonly isSorted: boolean
        readonly sortFunction: Function
        sorters: Collection
        readonly totalCount: number
        values: object[]
        onChange: Function
        onNoChange: Function
        constructor(config?: Partial<CollectionConfig>);
        add(...items: object[]): void;
        addFilter(filter: object): CollectionFilter;
        addSorter(sorter: object): CollectionSorter;
        changeId(item: string|number|object, newId: string|number): void;
        clear(): void;
        equals(other: Collection|any[], map?: Function): boolean;
        find(fn: Function, ignoreFilters?: boolean): object;
        findIndex(propertyName: string, value: any, ignoreFilters?: boolean): number;
        findItem(propertyName: string, value: any, ignoreFilters?: boolean): object|Set<any>;
        forEach(fn: Function, ignoreFilters?: boolean): void;
        get(id: any, ignoreFilters?: boolean): object;
        getBy(propertyName: string, value: any, ignoreFilters?: boolean): object;
        includes(item: object|string|number, ignoreFilters?: boolean): boolean;
        indexOf(item: object|string|number, ignoreFilters?: boolean): number;
        map(fn: Function, ignoreFilters?: boolean): object[];
        match(other: Collection): void;
        move(items: object|object[], beforeItem?: object): number;
        remove(...items: object[]): void;
        splice(index?: number, toRemove?: object[]|number, ...toAdd: object[]): void;
    }

    type CollectionFilterConfig = {
        caseSensitive: boolean
        convert: Function
        disabled: boolean
        filterBy: Function
        id: string
        internal: boolean
        operator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'|'isNotIncludedIn'|'includes'|'doesNotInclude'|'empty'|'notEmpty'|'between'|'notBetween'|'sameDay'|'isToday'|'isTomorrow'|'isYesterday'|'isThisWeek'|'isLastWeek'|'isNextWeek'|'isThisMonth'|'isLastMonth'|'isNextMonth'|'isThisYear'|'isLastYear'|'isNextYear'|'isYearToDate'|'isTrue'|'isFalse'
        property: string
        value: any
    }

    export class CollectionFilter {
        filterBy: Function
        operator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'|'isNotIncludedIn'|'includes'|'doesNotInclude'|'empty'|'notEmpty'|'between'|'notBetween'|'isToday'|'isTomorrow'|'isYesterday'|'isThisWeek'|'isLastWeek'|'isNextWeek'|'isThisMonth'|'isLastMonth'|'isNextMonth'|'isThisYear'|'isLastYear'|'isNextYear'|'isYearToDate'|'isTrue'|'isFalse'
        property: string
        value: any
        constructor(config?: Partial<CollectionFilterConfig>);
    }

    type CollectionSorterConfig = {
        convert: Function
        direction: 'ASC'|'DESC'
        id: string
        property: string
        sortFn: Function
        useLocaleSort: boolean|string|object
    }

    export class CollectionSorter {
        constructor(config?: Partial<CollectionSorterConfig>);
    }

    type MonthConfig = {
        date: Date|string
        hideNonWorkingDays: boolean
        nonWorkingDays: object
        sixWeeks: boolean
        weekStartDay: number
        onDateChange: Function
        onMonthChange: Function
        onWeekChange: Function
        onYearChange: Function
    }

    export class Month {
        readonly canonicalDayNumbers: number[]
        readonly dayColumnIndex: number[]
        readonly dayCount: number
        readonly endDate: Date
        sixWeeks: boolean
        readonly startDate: Date
        readonly visibleDayColumnIndex: number[]
        readonly weekCount: number
        readonly weekLength: number
        onDateChange: Function
        onMonthChange: Function
        onWeekChange: Function
        onYearChange: Function
        constructor(config?: Partial<MonthConfig>);
        eachDay(fn: Function): void;
        eachWeek(fn: Function): void;
        getWeekNumber(date: Date): number[];
        getWeekStart(week: number|number[]): void;
    }

    type ScrollManagerConfig = {
        direction: 'horizontal'|'vertical'|'both'
        element: HTMLElement
        scrollSpeed: number
        startScrollDelay: number
        stopScrollWhenPointerOut: boolean
        zoneWidth: number
    }

    export class ScrollManager {
        readonly isScrolling: boolean
        constructor(config?: Partial<ScrollManagerConfig>);
        startMonitoring(config: object): Function;
        stopMonitoring(element?: HTMLElement|HTMLElement[]): void;
    }

    type ButtonConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        href: string
        html: string|Function
        htmlCls: string|object
        icon: string
        iconAlign: 'start'|'end'
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        menu: object|object[]|Widget|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        menuIcon: string
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        pressed: boolean
        pressedIcon: string
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        target: string
        text: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        toggleGroup: string
        toggleable: boolean
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onBeforeShowMenu: Function
        onBeforeToggle: Function
        onCatchAll: Function
        onClick: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToggle: Function
    }

    export class Button extends Widget implements BadgeClass {
        badge: string
        color: string
        href: string
        icon: string
        iconAlign: 'start'|'end'
        menu: Widget
        menuIcon: string
        pressed: boolean
        pressedIcon: string
        target: string
        text: string
        toggleGroup: string
        toggleable: boolean
        onAction: Function
        onBeforeDestroy: Function
        onBeforeShowMenu: Function
        onBeforeToggle: Function
        onCatchAll: Function
        onClick: Function
        onDestroy: Function
        onToggle: Function
        constructor(config?: Partial<ButtonConfig>);
        eachWidget(fn: Function, deep?: boolean): boolean;
        toggle(pressed: boolean): void;
    }

    type ButtonGroupConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object[]|Button[]|Partial<ButtonConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        toggleGroup: boolean
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onClick: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToggle: Function
    }

    export class ButtonGroup extends Container {
        onAction: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onClick: Function
        onDestroy: Function
        onToggle: Function
        constructor(config?: Partial<ButtonGroupConfig>);
    }

    type CalendarPanelConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        cellRenderer: Function|string
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        date: Date|string
        dayNameFormat: string
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disableOtherMonthCells: boolean
        disableWeekends: boolean
        disabled: boolean
        disabledDates: Function|Date[]|string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        headerRenderer: Function|string
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideOtherMonthCells: boolean
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minColumnWidth: number
        minHeight: string|number
        minRowHeight: number|string
        minWidth: string|number
        monitorResize: boolean
        month: Month|object|Partial<MonthConfig>
        namedItems: object
        nonWorkingDays: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        showWeekColumn: boolean
        // @deprecated
        showWeekNumber: boolean
        sixWeeks: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        tip: object
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weekRenderer: Function|string
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeRefresh: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDateChange: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class CalendarPanel extends Panel {
        animateTimeShift: boolean
        date: Date
        readonly endDate: Date
        readonly startDate: Date
        readonly visibleWeekCount: number
        onBeforeDestroy: Function
        onBeforeRefresh: Function
        onCatchAll: Function
        onDateChange: Function
        onDestroy: Function
        onRefresh: Function
        constructor(config?: Partial<CalendarPanelConfig>);
        getCell(date: Date|string, strict: boolean): HTMLElement;
        refresh(): void;
        updateDate(): void;
        updateWeekStartDay(): void;
    }

    type CheckboxConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoCollapse: boolean|Function
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        checked: boolean
        checkedValue: any
        clearable: boolean|object
        cls: string|object
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tag: string
        text: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        uncheckedValue: any
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeChange: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onClick: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class Checkbox extends Field {
        checked: boolean
        name: string
        value: string
        onAction: Function
        onBeforeChange: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onChange: Function
        onClick: Function
        onDestroy: Function
        constructor(config?: Partial<CheckboxConfig>);
        check(): void;
        toggle(): void;
        uncheck(): void;
    }

    type ChipViewConfig = {
        activateOnMouseover: boolean
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowGroupSelect: boolean
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeHandler: string|Function
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        getItemCls: Function|string
        getItemStyle: Function|string
        groupHeaderTpl: Function
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        html: string|Function
        htmlCls: string|object
        iconTpl: Function
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemTpl: Function
        items: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        selectAllItem: boolean|string
        selected: object[]|number[]|string[]|Collection|object|Partial<CollectionConfig>|Partial<CollectionConfig>[]
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        store: object|object[]|Store|Partial<StoreConfig>|Partial<StoreConfig>[]
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        toggleAllIfCtrlPressed: boolean
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeItem: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onItem: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class ChipView extends List {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ChipViewConfig>);
    }

    type ComboConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        caseSensitive: boolean
        centered: boolean
        chipView: Partial<ChipViewConfig>
        clearTextOnPickerHide: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        createOnUnmatched: Function|string|boolean
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        displayValueRenderer: Function
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        emptyText: string
        encodeFilterParams: Function
        filterOnEnter: boolean
        filterOperator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'
        filterParamName: string
        filterSelected: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePickerOnSelect: boolean
        hideTrigger: boolean
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inlinePicker: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        items: object[]|string[]|object
        keyStrokeChangeDelay: number
        keyStrokeFilterDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listCls: string
        listItemTpl: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minChars: number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        multiValueSeparator: string
        name: string
        overlayAnchor: boolean
        owner: Widget
        picker: object
        pickerAlignElement: string
        pickerWidth: number
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        primaryFilter: object
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        store: Store|Partial<StoreConfig>
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggerAction: 'all'|'last'|null
        triggers: object
        ui: string|object
        validateFilter: boolean
        validateOnInput: boolean
        value: string|number[]|string[]
        valueField: string|null
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onSelect: Function
        onShow: Function
        onTrigger: Function
    }

    export class Combo extends PickerField {
        static readonly queryLast: string
        filterOperator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'
        readonly isEmpty: boolean
        readonly record: Model[]
        readonly records: Model[]
        store: Store|Partial<StoreConfig>
        value: object|number|string
        readonly valueCollection: Collection
        onAction: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onInput: Function
        onSelect: Function
        constructor(config?: Partial<ComboConfig>);
    }

    type ContainerConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class Container extends Widget {
        readonly firstItem: Widget
        isSettingValues: boolean
        isValid: boolean
        items: Widget[]|object|Partial<WidgetConfig>
        readonly lastItem: Widget
        layout: Layout
        layoutStyle: object
        record: Model
        values: object
        readonly visibleChildCount: number
        readonly widgetMap: object
        onBeforeDestroy: Function
        onBeforeSetRecord: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ContainerConfig>);
        add(...toAdd: (object|Widget|Partial<WidgetConfig>)[]): Widget|Widget[];
        getAt(index: number): Widget;
        getWidgetById(id: string): Widget;
        insert(toAdd: Widget, index: number|Widget): Widget;
        processWidgetConfig(): void;
        remove(...toRemove: Widget[]): Widget|Widget[];
        removeAll(): Widget[];
    }

    type DateFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        format: string
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keepTime: boolean|Date|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        max: string|Date
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        min: string|Date
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        picker: Partial<DatePickerConfig>
        pickerAlignElement: string
        pickerFormat: string
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        step: string|number|object
        strictParsing: boolean
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string|Date
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class DateField extends PickerField {
        format: string
        max: string|Date
        min: string|Date
        step: string|number|object
        value: string|Date
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<DateFieldConfig>);
    }

    type DatePickerConfig = {
        activeDate: Date
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        cellRenderer: Function|string
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        date: Date
        dayNameFormat: string
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disableOtherMonthCells: boolean
        disableWeekends: boolean
        disabled: boolean
        disabledDates: Function|Date[]|string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editMonth: boolean
        flex: number|string
        floating: boolean
        focusDisabledDates: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        headerRenderer: Function|string
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideOtherMonthCells: boolean
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxDate: Date
        maxHeight: string|number
        maxWidth: string|number
        minColumnWidth: number
        minDate: Date
        minHeight: string|number
        minRowHeight: number|string
        minWidth: string|number
        monitorResize: boolean
        month: Month|object|Partial<MonthConfig>
        multiSelect: boolean|'range'
        namedItems: object
        nonWorkingDays: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        selection: Date[]
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        showWeekColumn: boolean
        // @deprecated
        showWeekNumber: boolean
        sixWeeks: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        tip: object
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weekRenderer: Function|string
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeRefresh: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDateChange: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onSelectionChange: Function
        onShow: Function
        onToolClick: Function
    }

    export class DatePicker extends CalendarPanel {
        selection: Date[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onSelectionChange: Function
        constructor(config?: Partial<DatePickerConfig>);
    }

    type DateTimeFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        dateField: Partial<DateFieldConfig>
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        timeField: Partial<TimeFieldConfig>
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class DateTimeField extends Field {
        readonly dateField: DateField
        readonly timeField: TimeField
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<DateTimeFieldConfig>);
    }

    type DisplayFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tag: string
        template: Function
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class DisplayField extends Field {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<DisplayFieldConfig>);
    }

    type DurationFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowNegative: boolean
        allowedUnits: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        decimalPrecision: number
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        magnitude: number
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        max: string
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        min: string
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        step: number
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        unit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        useAbbreviation: boolean
        validateOnInput: boolean
        value: object|string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class DurationField extends TextField {
        allowedUnits: string
        magnitude: number
        max: string
        readonly milliseconds: number
        min: string
        unit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        value: string|number|object|Duration
        onAction: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        constructor(config?: Partial<DurationFieldConfig>);
    }

    type EditorConfig = {
        adopt: HTMLElement|string
        align: object
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        blurAction: 'complete'|'cancel'|null
        bubbleEvents: object
        callOnFunctions: boolean
        cancelKey: string
        centered: boolean
        cls: string|object
        completeKey: string
        completeOnChange: boolean
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        fitTargetContent: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideTarget: boolean
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inputField: object|string
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        invalidAction: 'block'|'allow'|'revert'
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        matchFont: boolean
        matchSize: boolean|object
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeCancel: Function
        onBeforeComplete: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeStart: Function
        onCancel: Function
        onCatchAll: Function
        onComplete: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onKeypress: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onStart: Function
    }

    export class Editor extends Container {
        onBeforeCancel: Function
        onBeforeComplete: Function
        onBeforeDestroy: Function
        onBeforeStart: Function
        onCancel: Function
        onCatchAll: Function
        onComplete: Function
        onDestroy: Function
        onKeypress: Function
        onStart: Function
        constructor(config?: Partial<EditorConfig>);
        cancelEdit(): void;
        completeEdit(): Promise<boolean>;
        startEdit(editObject: object): Promise<any>;
    }

    type FieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export abstract class Field extends Widget implements BadgeClass, LabelableClass {
        static readonly errorTip: Tooltip
        badge: string
        readonly errorTip: Tooltip
        input: HTMLElement
        readonly isEmpty: boolean
        readonly isEmptyInput: boolean
        readonly isValid: boolean
        label: string
        triggers: object
        value: any
        onAction: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onInput: Function
        onTrigger: Function
        constructor(config?: Partial<FieldConfig>);
        clear(): void;
        clearError(error?: string, silent?: boolean): void;
        getErrors(): string[];
        select(start?: number, end?: number): void;
        setError(error: string, silent?: boolean): void;
    }

    type FieldContainerConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class FieldContainer extends Container {
        readonly collapsing: boolean
        readonly expanding: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<FieldContainerConfig>);
    }

    type FieldFilterPickerConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        dateFormat: string
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        fields: FieldOption[]
        filter: object
        flex: number|string
        floating: boolean
        getValueFieldConfig: Function
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        operators: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        propertyFieldConfig: object
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        store: Store
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        valueFieldPlaceholders: ValueFieldPlaceholders
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class FieldFilterPicker extends Container {
        onBeforeDestroy: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        constructor(config?: Partial<FieldFilterPickerConfig>);
        getUniqueDataValues(): void;
    }

    type FieldFilterPickerGroupConfig = {
        addFilterButtonText: string
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        canDeleteFilter: Function
        canManageFilter: Function
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        dateFormat: string
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        fields: FieldOption[]
        filters: object[]
        flex: number|string
        floating: boolean
        getFieldFilterPickerConfig: Function
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        limitToProperty: string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        operators: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAddFilterButton: boolean
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        store: Store
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class FieldFilterPickerGroup extends Container {
        value: object[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        constructor(config?: Partial<FieldFilterPickerGroupConfig>);
        activateAll(): void;
        addFilter(filter?: object): void;
        deactivateAll(): void;
        getFilterPicker(filterIndex: number): FieldFilterPicker;
        getFilterPickerConfig(filter: CollectionFilter): void;
        removeFilterAt(filterIndex: number): void;
    }

    type FieldSetConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class FieldSet extends Panel implements LabelableClass {
        label: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<FieldSetConfig>);
    }

    type FileFieldConfig = {
        accept: string
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        multiple: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class FileField extends Field {
        readonly files: FileList
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<FileFieldConfig>);
        clear(): void;
    }

    type FilePickerConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        buttonConfig: Partial<ButtonConfig>
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        fileFieldConfig: Partial<FileFieldConfig>
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class FilePicker extends Container {
        readonly files: FileList
        onBeforeDestroy: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        constructor(config?: Partial<FilePickerConfig>);
        clear(): void;
    }

    type FilterFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        field: string
        filterFunction: Function
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        store: Store
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class FilterField extends TextField {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<FilterFieldConfig>);
    }

    type ListConfig = {
        activateOnMouseover: boolean
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowGroupSelect: boolean
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        getItemCls: Function|string
        getItemStyle: Function|string
        groupHeaderTpl: Function
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemTpl: Function
        items: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        selectAllItem: boolean|string
        selected: object[]|number[]|string[]|Collection|object|Partial<CollectionConfig>|Partial<CollectionConfig>[]
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        store: object|object[]|Store|Partial<StoreConfig>|Partial<StoreConfig>[]
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        toggleAllIfCtrlPressed: boolean
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeItem: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onItem: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class List extends Widget {
        readonly allSelected: boolean
        items: object[]
        readonly selected: Collection
        readonly store: Store
        onBeforeDestroy: Function
        onBeforeItem: Function
        onCatchAll: Function
        onDestroy: Function
        onItem: Function
        constructor(config?: Partial<ListConfig>);
        deselect(toSelect: string|string[]|number|number[]|object|object[]): void;
        deselectAll(): void;
        getRecordFromElement(element: HTMLElement): Model;
        select(toSelect: string|string[]|number|number[]|object|object[]): void;
        selectAll(): void;
    }

    type MaskConfig = {
        icon: string
        mode: 'bright'|'bright-blur'|'dark'|'dark-blur'
        owner: object|Widget|Partial<WidgetConfig>
        showDelay: number
        target: string|HTMLElement
        text: string
    }

    export class Mask {
        maxProgress: number
        progress: number
        constructor(config?: Partial<MaskConfig>);
        static mask(text: string|object, target: HTMLElement): Mask;
        static unmask(element: HTMLElement): Promise<any>|null;
        close(): Promise<any>;
        hide(): Promise<any>;
        show(): void;
    }

    type MenuConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        focusOnHover: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onItem: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToggle: Function
        onToolClick: Function
    }

    export class Menu extends Popup {
        readonly currentSubMenu: Menu
        readonly isSubMenu: boolean
        parentMenu: Menu
        selectedElement: HTMLElement
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onItem: Function
        onToggle: Function
        constructor(config?: Partial<MenuConfig>);
    }

    type MenuItemConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        checked: boolean
        closeParent: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        href: string
        html: string|Function
        htmlCls: string|object
        icon: string
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        menu: object|object[]
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        separator: boolean
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        target: '_self'|'_blank'|'_parent'|'_top'|null
        text: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        toggleGroup: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onItem: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToggle: Function
    }

    export class MenuItem extends Widget {
        checked: boolean
        readonly menu: Widget
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onItem: Function
        onToggle: Function
        constructor(config?: Partial<MenuItemConfig>);
        doAction(): void;
    }

    export class MessageDialogSingleton extends Popup {
        readonly cancelButton: number
        readonly okButton: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        alert(options: object): Promise<any>;
        confirm(options: object): Promise<any>;
        prompt(options: object): Promise<any>;
    }
    export const MessageDialog : MessageDialogSingleton

    type NumberFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        changeOnSpin: boolean|number
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        // @deprecated
        decimalPrecision: number
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        format: string|Partial<NumberFormatConfig>
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        largeStep: number
        // @deprecated
        leadingZeroes: number
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        max: number
        maxHeight: string|number
        maxWidth: string|number
        min: number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        step: number
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: number
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class NumberField extends Field {
        step: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<NumberFieldConfig>);
        changeValue(): void;
    }

    type PagingToolbarConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        overflow: string|object|null
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        store: AjaxStore
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        ui: string|object
        weight: number
        widgetCls: string
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class PagingToolbar extends Toolbar {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<PagingToolbarConfig>);
    }

    type PanelConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class Panel extends Container implements StateClass, ToolableClass {
        readonly bbar: Toolbar
        readonly collapsing: boolean
        readonly expanding: boolean
        readonly isStateful: boolean
        state: object
        readonly tbar: Toolbar
        title: string
        tools: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onToolClick: Function
        constructor(config?: Partial<PanelConfig>);
        applyState(state: object): void;
        getState(): object;
        loadState(stateId?: string, reload?: boolean): void;
        saveState(options?: object|string): void;
    }

    type PasswordFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class PasswordField extends Field {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<PasswordFieldConfig>);
    }

    type PickerFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        picker: object
        pickerAlignElement: string
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export abstract class PickerField extends TextField {
        readonly picker: Widget
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<PickerFieldConfig>);
        eachWidget(fn: Function, deep?: boolean): boolean;
        hidePicker(): void;
        showPicker(): void;
        togglePicker(): void;
    }

    type PopupConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class Popup extends Panel {
        maximized: boolean
        onBeforeClose: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<PopupConfig>);
        close(): void;
    }

    type RadioConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoCollapse: boolean|Function
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        checked: boolean
        checkedValue: any
        clearable: boolean
        cls: string|object
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tag: string
        text: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        uncheckedValue: any
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeChange: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onClick: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class Radio extends Checkbox {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RadioConfig>);
    }

    type RadioGroupConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        name: string
        namedItems: object
        options: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class RadioGroup extends FieldSet {
        value: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RadioGroupConfig>);
    }

    type SlideToggleConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoCollapse: boolean|Function
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        checked: boolean
        checkedValue: any
        clearable: boolean|object
        cls: string|object
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tag: string
        text: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        uncheckedValue: any
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeChange: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onClick: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class SlideToggle extends Checkbox {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SlideToggleConfig>);
    }

    type SliderConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        max: number
        maxHeight: string|number
        maxWidth: string|number
        min: number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltip: boolean
        showTooltipWhenDisabled: boolean
        showValue: boolean
        step: number
        style: string
        tab: boolean|object
        tag: string
        text: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggerChangeOnInput: boolean
        ui: string|object
        unit: string
        value: number
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class Slider extends Widget {
        max: number
        min: number
        step: number
        text: string
        triggerChangeOnInput: boolean
        value: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        onInput: Function
        constructor(config?: Partial<SliderConfig>);
    }

    type SplitterConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        orientation: 'auto'|'horizontal'|'vertical'
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onDrag: Function
        onDragStart: Function
        onDrop: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class Splitter extends Widget {
        readonly currentOrientation: string
        readonly orientation: 'auto'|'horizontal'|'vertical'
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDrag: Function
        onDragStart: Function
        onDrop: Function
        constructor(config?: Partial<SplitterConfig>);
    }

    type TabConfig = {
        active: boolean
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        href: string
        html: string|Function
        htmlCls: string|object
        icon: string
        iconAlign: 'start'|'end'
        id: string
        ignoreParentReadOnly: boolean
        index: number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        isFirst: boolean
        isLast: boolean
        item: Widget
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        menu: object|object[]|Widget|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        menuIcon: string
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        pressed: boolean
        pressedIcon: string
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tabPanel: TabPanel
        tag: string
        target: string
        text: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        titleProperty: string
        titleSource: string
        toggleGroup: string
        toggleable: boolean
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onBeforeShowMenu: Function
        onBeforeToggle: Function
        onCatchAll: Function
        onClick: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToggle: Function
    }

    export class Tab extends Button {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TabConfig>);
    }

    type TabBarConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        overflow: string|object|null
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        ui: string|object
        weight: number
        widgetCls: string
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class TabBar extends Toolbar {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TabBarConfig>);
    }

    type TabPanelConfig = {
        activeTab: number
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        animateTabChange: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoHeight: boolean
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tabMaxWidth: number
        tabMinWidth: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeTabChange: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTabChange: Function
    }

    export class TabPanel extends Container {
        readonly activeIndex: number
        readonly activeItem: Widget
        activeTab: number
        onBeforeDestroy: Function
        onBeforeTabChange: Function
        onCatchAll: Function
        onDestroy: Function
        onTabChange: Function
        constructor(config?: Partial<TabPanelConfig>);
    }

    type TextAreaFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        resize: 'none'|'both'|'horizontal'|'vertical'
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class TextAreaField extends Field {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TextAreaFieldConfig>);
    }

    type TextAreaPickerFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        picker: object
        pickerAlignElement: string
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        resize: 'none'|'both'|'horizontal'|'vertical'
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class TextAreaPickerField extends PickerField {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TextAreaPickerFieldConfig>);
    }

    type TextFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoComplete: string
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class TextField extends Field {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TextFieldConfig>);
    }

    type TimeFieldConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        flex: number|string
        floating: boolean
        format: string
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        keepDate: boolean
        keyStrokeChangeDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        max: string|Date
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        min: string|Date
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        name: string
        owner: Widget
        picker: object
        pickerAlignElement: string
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        step: string
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggers: object
        ui: string|object
        validateOnInput: boolean
        value: string|Date
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTrigger: Function
    }

    export class TimeField extends PickerField {
        format: string
        keepDate: boolean
        max: string|Date
        min: string|Date
        step: string|number|object
        value: string|Date
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TimeFieldConfig>);
        focusPicker(): void;
        showPicker(): void;
    }

    type TimePickerConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        format: string
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        max: Date|string
        maxHeight: string|number
        maxWidth: string|number
        min: Date|string
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        seconds: boolean
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        value: Date|string
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onTimeChange: Function
    }

    export class TimePicker extends Container {
        format: string
        initialValue: Date|string
        max: Date|string
        min: Date|string
        value: Date|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onTimeChange: Function
        constructor(config?: Partial<TimePickerConfig>);
    }

    type ToastConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showProgress: boolean
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        timeout: number
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class Toast extends Widget {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ToastConfig>);
        static hideAll(): void;
        static show(config: string|Partial<ToastConfig>): Toast;
        hide(): Promise<void>;
        show(): Promise<void>;
    }

    type ToolConfig = {
        adopt: HTMLElement|string
        align: 'start'|'end'
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        handler: Function|string
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        href: string
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        repeat: Partial<ClickRepeaterConfig>
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onClick: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class Tool extends Widget {
        onAction: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onClick: Function
        onDestroy: Function
        constructor(config?: Partial<ToolConfig>);
    }

    type ToolbarConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        overflow: string|object|null
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        ui: string|object
        weight: number
        widgetCls: string
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class Toolbar extends Container {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ToolbarConfig>);
    }

    type TooltipConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dismissDelay: number
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        getHtml: Function|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showOnHover: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trackMouse: boolean
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onPointerOver: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class Tooltip extends Popup {
        static readonly currentOverElement: HTMLElement
        readonly activeTarget: HTMLElement
        html: string
        readonly triggeredByEvent: Event
        onBeforeDestroy: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onPointerOver: Function
        constructor(config?: Partial<TooltipConfig>);
        showAsyncMessage(message: string): void;
    }

    type WidgetConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class Widget extends Base implements EventsClass, LocalizableClass, KeyMapClass {
        static $name: string
        static readonly tooltip: Tooltip
        static type: string
        alignSelf: string
        anchorSize: number[]
        appendTo: HTMLElement|string
        readonly cellInfo: object
        cls: string|object
        content: string
        readonly contentElement: HTMLElement
        dataset: object
        disabled: boolean
        readonly element: HTMLElement
        flex: number|string
        readonly focusElement: HTMLElement
        height: number|string
        hidden: boolean
        html: string
        id: string
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        readonly isVisible: boolean
        readonly localeManager: typeof LocaleManager
        margin: number|string
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        readonly nextSibling: Widget
        readonly overflowElement: HTMLElement
        readonly owner: Widget
        readonly previousSibling: Widget
        readOnly: boolean
        readonly ref: string
        scrollable: Scroller
        style: string|object|CSSStyleDeclaration
        readonly tab: Tab
        tooltip: string|object
        width: number|string
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        constructor(config?: Partial<WidgetConfig>);
        static L(text: string, templateData?: object): string;
        static attachTooltip(element: HTMLElement, configOrText: object|string): HTMLElement;
        static fromElement(element: HTMLElement|Event, type?: string|Function, limit?: HTMLElement|number): Widget;
        static initClass(): void;
        static optionalL(text: string, templateData?: object): string;
        static query(selector: string|Function, deep?: boolean): Widget;
        static queryAll(selector: string|Function, deep?: boolean): Widget[];
        L(text: string, templateData?: object): string;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        alignTo(spec?: object): void;
        closest(selector: string|Function, deep?: boolean, limit?: number|string|Widget): void;
        compose(): DomConfig;
        contains(elementOrWidget: HTMLElement|Widget, strict?: boolean): boolean;
        disable(): void;
        eachAncestor(fn: Function): boolean;
        eachWidget(fn: Function, deep?: boolean): boolean;
        enable(): void;
        exitFullscreen(): Promise<any>;
        focus(): void;
        hasListener(eventName: string): boolean;
        hide(animate?: boolean): Promise<any>;
        mask(msg: string|object): Mask;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        owns(target: HTMLElement|Event|Widget): void;
        query(filter: Function): Widget;
        queryAll(filter: Function): Widget[];
        recompose(): Promise<void>;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        requestFullscreen(): Promise<any>;
        resumeEvents(): boolean;
        revertFocus(force?: boolean): void;
        setXY(x?: number, y?: number): void;
        show(options?: object): Promise<any>;
        showBy(align: object|HTMLElement|number[]): Promise<any>;
        // @deprecated
        showByPoint(x: number|number[], y?: number, options?: object): Promise<any>;
        suspendEvents(queue?: boolean): void;
        toFront(): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
        unmask(): void;
        up(selector?: string|Function, deep?: boolean, limit?: number|string|Widget): void;
        updateLocalization(): void;
    }

    type YearPickerConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maxYear: number
        minHeight: string|number
        minWidth: string|number
        minYear: number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        startYear: number
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: Partial<ToolbarConfig>
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        year: number
        yearButtonCount: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onSelect: Function
        onShow: Function
        onToolClick: Function
    }

    export class YearPicker extends Panel {
        readonly endYear: number
        startYear: number
        value: number
        year: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onSelect: Function
        constructor(config?: Partial<YearPickerConfig>);
    }

    type UndoRedoBaseConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        showZeroActionBadge: boolean
        style: string
        tab: boolean|object
        tag: string
        text: boolean
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export abstract class UndoRedoBase extends Container {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<UndoRedoBaseConfig>);
    }

    type HistogramConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        data: object[]
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        getBarText: Function
        getBarTip: Function
        getRectClass: Function
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        omitZeroHeightBars: number
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        series: object[]
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        topValue: number
        ui: string|object
        values: number[]
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class Histogram extends Widget {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<HistogramConfig>);
    }

    type ScaleConfig = {
        adopt: HTMLElement|string
        align: string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        horizontal: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class Scale extends Widget {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ScaleConfig>);
    }

    type LayoutConfig = {
        containerCls: string
        itemCls: string
    }

    export class Layout {
        readonly owner: Widget
        constructor(config?: Partial<LayoutConfig>);
    }

    type BadgeClassConfig = {
        badge: string
    }

    export class BadgeClass {
        badge: string
        constructor(config?: Partial<BadgeClassConfig>);
    }

    export const Badge : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & BadgeClass>

    export class KeyMapClass {
    }

    export const KeyMap : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & KeyMapClass>

    type LabelableClassConfig = {
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
    }

    export class LabelableClass {
        label: string
        constructor(config?: Partial<LabelableClassConfig>);
    }

    export const Labelable : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & LabelableClass>

    type ResponsiveClassConfig = {
        // @deprecated
        breakpoints: object
        responsive: object
        responsiveRoot: boolean
        responsiveState: string
        responsiveTarget: string|Widget
        onBeforeResponsiveStateChange: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
    }

    export class ResponsiveClass {
        onBeforeResponsiveStateChange: Function
        onResponsiveHeightChange: Function
        onResponsiveStateChange: Function
        onResponsiveWidthChange: Function
        constructor(config?: Partial<ResponsiveClassConfig>);
    }

    export const Responsive : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & ResponsiveClass>

    type StyleableClassConfig = {
        css: object
        cssVarPrefix: string
    }

    export class StyleableClass {
        css: typeof Proxy
        constructor(config?: Partial<StyleableClassConfig>);
    }

    export const Styleable : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & StyleableClass>

    type ToolableClassConfig = {
        tools: object
    }

    export class ToolableClass {
        tools: object
        constructor(config?: Partial<ToolableClassConfig>);
    }

    export const Toolable : <T extends AnyConstructor<Widget>>(base : T) => AnyConstructor<InstanceType<T> & ToolableClass>

    type PanelCollapserConfig = {
        animation: object
        collapseTooltip: string
        direction: 'up'|'down'|'left'|'right'
        expandTooltip: string
        tool: object|Tool|Partial<ToolConfig>
    }

    export class PanelCollapser {
        constructor(config?: Partial<PanelCollapserConfig>);
    }

    type PanelCollapserOverlayConfig = {
        animation: object
        autoClose: boolean
        autoCloseDelay: number
        collapseTooltip: string
        direction: 'up'|'down'|'left'|'right'
        expandTooltip: string
        recollapseTool: object|Tool|Partial<ToolConfig>
        tool: object|Tool|Partial<ToolConfig>
    }

    export class PanelCollapserOverlay extends PanelCollapser {
        recollapseTool: Tool
        constructor(config?: Partial<PanelCollapserOverlayConfig>);
        toggleReveal(state?: boolean): void;
    }

    type AvatarRenderingConfig = {
        colorPrefix: string
        element: HTMLElement
        tooltip: Partial<TooltipConfig>
    }

    export class AvatarRendering extends Base {
        constructor(config?: Partial<AvatarRenderingConfig>);
        getResourceAvatar(options: object): DomConfig;
    }

    type ActionColumnConfig = {
        actions: object[]
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        disableIfGridReadOnly: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class ActionColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ActionColumnConfig>);
    }

    type AggregateColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        format: string|Partial<NumberFormatConfig>
        function: Function|string
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        includeParentInChangeSet: boolean
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        largeStep: number
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        max: number
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        min: number
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        step: number
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        unit: string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class AggregateColumn extends NumberColumn {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<AggregateColumnConfig>);
    }

    type CheckColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        checkCls: string
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showCheckAll: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        widgets: object[]
        width: number|string
        onBeforeDestroy: Function
        onBeforeToggle: Function
        onCatchAll: Function
        onDestroy: Function
        onToggle: Function
        onToggleAll: Function
    }

    export class CheckColumn extends WidgetColumn {
        onBeforeDestroy: Function
        onBeforeToggle: Function
        onCatchAll: Function
        onDestroy: Function
        onToggle: Function
        onToggleAll: Function
        constructor(config?: Partial<CheckColumnConfig>);
    }

    type ColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class Column extends Model implements EventsClass, LocalizableClass {
        static type: string
        cellCls: string
        readonly contentElement: HTMLElement
        readonly defaults: object
        readonly element: HTMLElement
        flex: number
        hidden: boolean
        icon: string
        readonly localeManager: typeof LocaleManager
        readonly subGrid: SubGrid
        text: string
        readonly textElement: HTMLElement
        readonly textWrapper: HTMLElement
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ColumnConfig>);
        static L(text: string, templateData?: object): string;
        static optionalL(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        getFilterableValue(record: Model): any;
        getRawValue(record: Model): any;
        hasListener(eventName: string): boolean;
        hide(): void;
        insertChild(childColumn: Model|Model[], before?: Model, silent?: boolean): Model|Model[]|null;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        refreshCell(record: Model): void;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        resizeToFitContent(widthMin: number|number[], widthMax: number): void;
        resumeEvents(): boolean;
        show(): void;
        suspendEvents(queue?: boolean): void;
        toggle(force?: boolean): void;
        toggleChildren(columns?: Column[], force?: boolean): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
        updateLocalization(): void;
    }

    type DateColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        format: string
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        max: string|Date
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        min: string|Date
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        step: string|number|object
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class DateColumn extends Column {
        format: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<DateColumnConfig>);
    }

    type NumberColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        format: string|Partial<NumberFormatConfig>
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        largeStep: number
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        max: number
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        min: number
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        step: number
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        unit: string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class NumberColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<NumberColumnConfig>);
    }

    type PercentColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        format: string|Partial<NumberFormatConfig>
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        largeStep: number
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        lowThreshold: number
        max: number
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        min: number
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        showValue: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        step: number
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        unit: string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class PercentColumn extends NumberColumn {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<PercentColumnConfig>);
        defaultRenderer(rendererData: object): DomConfig;
    }

    type RatingColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editable: boolean
        editor: boolean|string|object|Field|Partial<FieldConfig>
        emptyIcon: string
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filledIcon: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        format: string|Partial<NumberFormatConfig>
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        largeStep: number
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        max: number
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        min: number
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        step: number
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        unit: string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class RatingColumn extends NumberColumn {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RatingColumnConfig>);
    }

    type RowNumberColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class RowNumberColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RowNumberColumnConfig>);
        resizeToFitContent(): void;
    }

    type TemplateColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        template: Function
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class TemplateColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TemplateColumnConfig>);
    }

    type TimeColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        format: string
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class TimeColumn extends Column {
        format: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TimeColumnConfig>);
    }

    type TreeColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseIconCls: string
        collapseMode: string
        collapsed: boolean
        collapsedFolderIconCls: string
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        expandIconCls: string
        expandedFolderIconCls: string
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        indentSize: number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        leafIconCls: string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class TreeColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TreeColumnConfig>);
    }

    type WidgetColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        widgets: object[]
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class WidgetColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<WidgetColumnConfig>);
        onAfterWidgetSetValue(widget: Widget, renderData: object): void;
        onBeforeWidgetSetValue(widget: Widget, renderData: object): void;
    }

    type ColumnStoreConfig = {
        allowNoId: boolean
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoAddField: boolean
        autoCommit: boolean
        autoTree: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        chainedFields: string[]
        chainedFilterFn: Function
        data: object[]|Model[]|Partial<ModelConfig>[]
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        filters: object|object[]
        fireRemoveEventForMoveAction: boolean
        groupers: object[]
        id: string|number
        ignoreRemoteChangesInSTM: boolean
        keepUncommittedChanges: boolean
        listeners: object
        masterStore: Store
        modelClass: typeof Model
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        reapplySortersOnAdd: boolean
        sorters: object[]|string[]
        stm: StateTrackingManager
        storage: Collection|object|Partial<CollectionConfig>
        syncDataOnLoad: boolean|object
        transformFlatData: boolean
        tree: boolean
        useLocaleSort: boolean|string|object
        useRawData: boolean|object
        verifyNoGeneratedIds: boolean
        onAdd: Function
        onAddConfirmed: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onColumnHide: Function
        onColumnShow: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onMove: Function
        onOutdent: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
    }

    export class ColumnStore extends Store {
        readonly bottomColumns: Column[]
        readonly topColumns: Column[]
        readonly visibleColumns: Column[]
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onCatchAll: Function
        onColumnHide: Function
        onColumnShow: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIndent: Function
        onOutdent: Function
        onRemove: Function
        onRemoveAll: Function
        onSort: Function
        constructor(config?: Partial<ColumnStoreConfig>);
        static registerColumnType(columnClass: Function, simpleRenderer?: boolean): void;
        get(field: string): Column;
        getById(id: string|number): Column;
        indexOf(recordOrId: Model|string): number;
    }

    type GridRowModelConfig = {
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        expanded: boolean
        href: string
        iconCls: string
        id: string|number
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        rowHeight: number
        target: '_self'|'_blank'|'_parent'|'_top'|null
    }

    export class GridRowModel extends Model {
        cls: string
        readonly expanded: boolean
        href: string
        iconCls: string
        rowHeight: number
        target: '_self'|'_blank'|'_parent'|'_top'|null
        constructor(config?: Partial<GridRowModelConfig>);
    }

    type CellEditConfig = {
        addNewAtEnd: boolean|object
        autoEdit: boolean
        autoSelect: boolean
        blurAction: 'complete'|'cancel'
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        continueEditingOnCellClick: boolean
        disabled: boolean
        editNextOnEnterPress: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        triggerEvent: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class CellEdit extends InstancePlugin {
        readonly activeRecord: Model
        readonly isEditing: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<CellEditConfig>);
        cancelEditing(silent?: boolean): void;
        confirm(options: object): Promise<void>;
        finishEditing(): Promise<any>;
        startEditing(cellContext: object): Promise<any>;
    }

    type CellMenuConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        items: object
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        menu: object
        processItems: Function
        triggerEvent: string|boolean
        type: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class CellMenu extends ContextMenuBase {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<CellMenuConfig>);
    }

    type CellTooltipConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        client: Widget
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dismissDelay: number
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        getHtml: Function|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showOnHover: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        tooltipRenderer: Function
        trackMouse: boolean
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onPointerOver: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class CellTooltip extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onPointerOver: Function
        constructor(config?: Partial<CellTooltipConfig>);
    }

    type ColumnAutoWidthConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        default: number|number[]
        delay: number
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ColumnAutoWidth extends InstancePlugin implements DelayableClass {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ColumnAutoWidthConfig>);
    }

    type ColumnDragToolbarConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ColumnDragToolbar extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ColumnDragToolbarConfig>);
    }

    type ColumnPickerConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        createColumnsFromModel: boolean
        disabled: boolean
        groupByRegion: boolean
        groupByTag: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ColumnPicker extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ColumnPickerConfig>);
    }

    type ColumnRenameConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ColumnRename extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ColumnRenameConfig>);
    }

    type ColumnReorderConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ColumnReorder extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ColumnReorderConfig>);
    }

    type ColumnResizeConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        liveResize: string|boolean
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ColumnResize extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ColumnResizeConfig>);
    }

    type FilterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        isMulti: boolean|object
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        prioritizeColumns: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class Filter extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<FilterConfig>);
        closeFilterEditor(): void;
        showFilterEditor(column: Column|string, value?: any): void;
    }

    type FilterBarConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        compactMode: boolean
        disabled: boolean
        keyStrokeFilterDelay: number
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        prioritizeColumns: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class FilterBar extends InstancePlugin {
        compactMode: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<FilterBarConfig>);
        getColumnFilterField(column: Column): Widget;
        hideFilterBar(): void;
        showFilterBar(): void;
        toggleFilterBar(): void;
    }

    export class GridFeatureManager {
        static getInstanceDefaultFeatures(instance: object): object;
        static getInstanceFeatures(instance: object): object;
        static getTypeNameDefaultFeatures(forType?: string): object;
        static getTypeNameFeatures(forType?: string): object;
        static isDefaultFeatureForInstance(featureClass: InstancePlugin, forType?: string): boolean;
        static isDefaultFeatureForTypeName(featureClass: InstancePlugin, forType?: string): boolean;
        static registerFeature(featureClass: Function, onByDefault?: boolean, forType?: string|string[]): void;
    }

    type GroupConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        field: string
        groupSortFn: Function
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        renderer: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class Group extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<GroupConfig>);
        collapseAll(): void;
        expandAll(): void;
        toggleCollapse(recordOrId: Model|string, collapse: boolean): void;
    }

    type GridGroupSummaryConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        collapseToHeader: boolean
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        target: 'header'|'footer'
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class GridGroupSummary extends InstancePlugin {
        collapseToHeader: boolean
        target: 'header'|'footer'
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<GridGroupSummaryConfig>);
        refresh(): void;
    }

    type HeaderMenuConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        items: object
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        menu: object
        moveColumns: boolean
        processItems: Function
        triggerEvent: string|boolean
        type: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class HeaderMenu extends ContextMenuBase {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<HeaderMenuConfig>);
    }

    type MergeCellsConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        passthrough: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class MergeCells extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<MergeCellsConfig>);
    }

    type QuickFindConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class QuickFind extends InstancePlugin {
        readonly found: object[]
        readonly foundCount: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<QuickFindConfig>);
        clear(): void;
        gotoFirstHit(): void;
        gotoHit(index: number): void;
        gotoLastHit(): void;
        gotoNextHit(): void;
        gotoPrevHit(): void;
        search(find: string, columnFieldOrId: string): void;
    }

    type RegionResizeConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class RegionResize extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RegionResizeConfig>);
    }

    type RowCopyPasteConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        nameField: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class RowCopyPaste extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RowCopyPasteConfig>);
        clearClipboard(): void;
        copyRows(isCut?: boolean): void;
        generateNewName(record: Model): string;
        pasteRows(record?: Model): void;
    }

    type RowExpanderConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        column: object|ActionColumn|Partial<ActionColumnConfig>
        columnPosition: string
        disabled: boolean
        enableAnimations: boolean
        listeners: object
        loadingIndicatorHeight: number
        loadingIndicatorText: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        refreshOnRecordChange: boolean
        renderer: Function
        triggerEvent: string
        onBeforeCollapse: Function
        onBeforeDestroy: Function
        onBeforeExpand: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class RowExpander extends InstancePlugin {
        onBeforeCollapse: Function
        onBeforeDestroy: Function
        onBeforeExpand: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RowExpanderConfig>);
        collapse(record: Model): Promise<void>;
        expand(record: Model): Promise<void>;
    }

    type RowReorderConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        dragHelperConfig: Partial<DragHelperConfig>
        dropOnLeaf: boolean
        hoverExpandTimeout: number
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        showGrip: boolean
        touchStartDelay: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
        onGridRowAbort: Function
        onGridRowBeforeDragStart: Function
        onGridRowBeforeDropFinalize: Function
        onGridRowDrag: Function
        onGridRowDragStart: Function
        onGridRowDrop: Function
    }

    export class RowReorder extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onGridRowAbort: Function
        onGridRowBeforeDragStart: Function
        onGridRowBeforeDropFinalize: Function
        onGridRowDrag: Function
        onGridRowDragStart: Function
        onGridRowDrop: Function
        constructor(config?: Partial<RowReorderConfig>);
    }

    type SearchConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        keyMap: object
        limit: number
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        showHitIndex: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class Search extends InstancePlugin {
        readonly foundCount: number
        readonly isHitFocused: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SearchConfig>);
        clear(): void;
        gotoFirstHit(): void;
        gotoHit(index: number): void;
        gotoLastHit(): void;
        gotoNextHit(): void;
        gotoPrevHit(): void;
        search(text: string, gotoHit?: boolean, reapply?: boolean, fields?: string[]): Promise<void>;
    }

    type SortConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        multiSort: boolean
        prioritizeColumns: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class Sort extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SortConfig>);
    }

    type StickyCellsConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        contentSelector: string
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class StickyCells extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<StickyCellsConfig>);
    }

    type StripeConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class Stripe extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<StripeConfig>);
    }

    type GridSummaryConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        selectedOnly: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class GridSummary extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<GridSummaryConfig>);
        refresh(): void;
    }

    type TreeConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        expandOnCellClick: boolean
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class Tree extends InstancePlugin {
        expandOnCellClick: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TreeConfig>);
        collapse(idOrRecord: string|number|Model): Promise<void>;
        collapseAll(): Promise<void>;
        expand(idOrRecord: string|number|Model): Promise<void>;
        expandAll(): Promise<void>;
        expandOrCollapseAll(collapse?: boolean, topNode?: Model): Promise<void>;
        expandTo(idOrRecord: string|number|Model|string[]|number[]|Model[], scrollIntoView?: boolean): Promise<void>;
        toggleCollapse(idOrRecord: string|number|Model, collapse?: boolean, skipRefresh?: boolean): Promise<void>;
    }

    type TreeGroupConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        levels: (string|((model: Model) => any))[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        parentCls: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class TreeGroup extends InstancePlugin {
        levels: (string|((model: Model) => any))[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TreeGroupConfig>);
        clearGroups(): Promise<void>;
        group(levels: (string|((model: Model) => any))[]): Promise<void>;
    }

    type GridExcelExporterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        convertEmptyValueToEmptyString: boolean
        dateFormat: string
        disabled: boolean
        exporterClass: typeof TableExporter
        exporterConfig: object
        filename: string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        zipcelx: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class GridExcelExporter extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<GridExcelExporterConfig>);
        export(config: object): Promise<any>;
    }

    type GridPdfExportConfig = {
        alignRows: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        clientURL: string
        disabled: boolean
        enableDirectRendering: boolean
        exportDialog: Partial<ExportDialogConfig>
        exportMask: string
        exportProgressMask: string
        exportServer: string
        exporterType: string
        exporters: Exporter[]
        fetchOptions: FetchOptions
        fileFormat: 'pdf'|'png'
        fileName: string
        footerTpl: Function
        headerTpl: Function
        keepPathName: boolean
        keepRegionSizes: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        openAfterExport: boolean
        openInNewTab: boolean
        orientation: 'portrait'|'landscape'
        paperFormat: 'A1'|'A2'|'A3'|'A4'|'A5'|'Legal'|'Letter'
        repeatHeader: boolean
        rowsRange: 'all'|'visible'
        sendAsBinary: boolean
        showErrorToast: boolean
        translateURLsToAbsolute: boolean|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
        onExportStep: Function
    }

    export class GridPdfExport extends InstancePlugin {
        currentExportPromise: Promise<any>|null
        exportDialog: ExportDialog
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onExportStep: Function
        constructor(config?: Partial<GridPdfExportConfig>);
        export(config: object): Promise<any>;
        filterStyles(styles: string[]): string[];
        processExportContent(response: Response, config: object): Promise<void>;
        receiveExportContent(pages: object[], config: object): Promise<any>;
        showExportDialog(): Promise<void>;
    }

    type ExporterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        keepPathName: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        translateURLsToAbsolute: boolean|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class Exporter implements LocalizableClass, EventsClass {
        readonly localeManager: typeof LocaleManager
        readonly stylesheets: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ExporterConfig>);
        static L(text: string, templateData?: object): string;
        static optionalL(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        filterStyles(styles: string[]): string[];
        hasListener(eventName: string): boolean;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        pageTpl(data: object): string;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        resumeEvents(): boolean;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
        updateLocalization(): void;
    }

    type GridMultiPageExporterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        keepPathName: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        translateURLsToAbsolute: boolean|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class GridMultiPageExporter extends Exporter {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<GridMultiPageExporterConfig>);
    }

    type GridMultiPageVerticalExporterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        keepPathName: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        translateURLsToAbsolute: boolean|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class GridMultiPageVerticalExporter extends Exporter {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<GridMultiPageVerticalExporterConfig>);
    }

    type GridSinglePageExporterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        centerContentHorizontally: boolean
        keepPathName: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        translateURLsToAbsolute: boolean|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class GridSinglePageExporter extends Exporter {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<GridSinglePageExporterConfig>);
    }

    type RowConfig = {
        cls: string|DomClassList|object
    }

    export class Row extends Base {
        readonly bottom: number
        readonly cells: HTMLElement[]
        cls: DomClassList|object
        dataIndex: number
        readonly element: HTMLElement
        readonly elements: object
        height: number
        id: string|number
        readonly index: number
        readonly isFirst: boolean
        offsetHeight: number
        readonly top: number
        constructor(config?: Partial<RowConfig>);
        addCls(classes: string|object|DomClassList): void;
        assignCls(classes: object): void;
        eachCell(fn: Function): void;
        eachElement(fn: Function): void;
        getCell(columnId: string|number): HTMLElement;
        getCells(region: string): HTMLElement[];
        getElement(region: string): HTMLElement;
        getRectangle(region: string): Rectangle;
        removeCls(classes: string|object|DomClassList): void;
    }

    type LocationConfig = {
        column: Column
        columnId: string|number
        columnIndex: number
        field: string
        grid: Grid
        record: Model
        rowIndex: number
    }

    export class Location {
        readonly cell: HTMLElement
        readonly isActionable: boolean
        readonly isCell: boolean
        readonly isColumnHeader: boolean
        readonly isSelectable: boolean
        readonly rowIndex: number
        readonly target: HTMLElement
        constructor(config?: Partial<LocationConfig>);
        constructor(location: object|HTMLElement);
        move(where: number): Location;
    }

    type TableExporterConfig = {
        columns: string[]|object[]
        defaultColumnWidth: number
        exportDateAsInstance: boolean
        indent: boolean
        indentationSymbol: string
        showGroupHeader: boolean
        target: Grid
    }

    export class TableExporter extends Base {
        constructor(config?: Partial<TableExporterConfig>);
        export(config: object): object;
    }

    type GridFeaturesType = {
        cellEdit: CellEdit
        cellMenu: CellMenu
        cellTooltip: CellTooltip
        columnAutoWidth: ColumnAutoWidth
        columnDragToolbar: ColumnDragToolbar
        columnPicker: ColumnPicker
        columnRename: ColumnRename
        columnReorder: ColumnReorder
        columnResize: ColumnResize
        excelExporter: GridExcelExporter
        filter: Filter
        filterBar: FilterBar
        group: Group
        groupSummary: GridGroupSummary
        headerMenu: HeaderMenu
        mergeCells: MergeCells
        multipage: GridMultiPageExporter
        multipagevertical: GridMultiPageVerticalExporter
        pdfExport: GridPdfExport
        quickFind: QuickFind
        regionResize: RegionResize
        rowCopyPaste: RowCopyPaste
        rowExpander: RowExpander
        rowReorder: RowReorder
        search: Search
        singlepage: GridSinglePageExporter
        sort: Sort
        stickyCells: StickyCells
        stripe: Stripe
        summary: GridSummary
        tree: Tree
        treeGroup: TreeGroup
    }

    type GridFeaturesConfigType = {
        cellEdit: string|boolean|Partial<CellEditConfig>
        cellMenu: string|boolean|Partial<CellMenuConfig>
        cellTooltip: string|boolean|Partial<CellTooltipConfig>
        columnAutoWidth: string|boolean|Partial<ColumnAutoWidthConfig>
        columnDragToolbar: string|boolean|Partial<ColumnDragToolbarConfig>
        columnPicker: string|boolean|Partial<ColumnPickerConfig>
        columnRename: string|boolean|Partial<ColumnRenameConfig>
        columnReorder: string|boolean|Partial<ColumnReorderConfig>
        columnResize: string|boolean|Partial<ColumnResizeConfig>
        excelExporter: string|boolean|Partial<GridExcelExporterConfig>
        filter: string|boolean|Partial<FilterConfig>
        filterBar: string|boolean|Partial<FilterBarConfig>
        group: string|boolean|Partial<GroupConfig>
        groupSummary: string|boolean|Partial<GridGroupSummaryConfig>
        headerMenu: string|boolean|Partial<HeaderMenuConfig>
        mergeCells: string|boolean|Partial<MergeCellsConfig>
        multipage: string|boolean|Partial<GridMultiPageExporterConfig>
        multipagevertical: string|boolean|Partial<GridMultiPageVerticalExporterConfig>
        pdfExport: string|boolean|Partial<GridPdfExportConfig>
        quickFind: string|boolean|Partial<QuickFindConfig>
        regionResize: string|boolean|Partial<RegionResizeConfig>
        rowCopyPaste: string|boolean|Partial<RowCopyPasteConfig>
        rowExpander: string|boolean|Partial<RowExpanderConfig>
        rowReorder: string|boolean|Partial<RowReorderConfig>
        search: string|boolean|Partial<SearchConfig>
        singlepage: string|boolean|Partial<GridSinglePageExporterConfig>
        sort: string|boolean|Partial<SortConfig>
        stickyCells: string|boolean|Partial<StickyCellsConfig>
        stripe: string|boolean|Partial<StripeConfig>
        summary: string|boolean|Partial<GridSummaryConfig>
        tree: string|boolean|Partial<TreeConfig>
        treeGroup: string|boolean|Partial<TreeGroupConfig>
    }

    type GridConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        animateRemovingRows: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoHeight: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        columnLines: boolean
        columns: ColumnStore|object[]|object|Partial<ColumnStoreConfig>|Partial<ColumnStoreConfig>[]
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        contextMenuTriggerEvent: 'contextmenu'|'click'|'dblclick'
        data: object[]|Model[]|Partial<ModelConfig>[]
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaultRegion: string
        defaults: object
        destroyStore: boolean
        disableGridRowModelWarning: boolean
        disabled: boolean
        dismissDelay: number
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        emptyText: string
        enableSticky: boolean
        enableTextSelection: boolean
        enableUndoRedoKeys: boolean
        features: Partial<GridFeaturesConfigType>
        fillLastColumn: boolean
        fixedRowHeight: boolean
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        fullRowRefresh: boolean
        getHtml: Function|string
        getRowHeight: Function
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideHeaders: boolean
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        keyMap: object
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        longPressTime: number
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        owner: Widget
        plugins: Function[]
        positioned: boolean
        preserveFocusOnDatasetChange: boolean
        preserveScrollOnDatasetChange: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        resizeToFitIncludesHeader: boolean
        responsiveLevels: object
        ripple: boolean|object
        rootElement: ShadowRoot
        rowHeight: number
        scrollAction: 'hide'|'realign'|null
        scrollManager: object|ScrollManager|Partial<ScrollManagerConfig>
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        scrollerClass: typeof Scroller
        selectionMode: object
        showAnimation: boolean|object
        showDirty: boolean
        showOnClick: boolean
        showOnHover: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        store: Store|Partial<StoreConfig>
        strips: object
        style: string
        subGridConfigs: object
        syncMask: string|object|null
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trackMouse: boolean
        transitionDuration: number
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeCancelCellEdit: Function
        onBeforeCellEditStart: Function
        onBeforeClose: Function
        onBeforeColumnDragStart: Function
        onBeforeColumnDropFinalize: Function
        onBeforeCopy: Function
        onBeforeDestroy: Function
        onBeforeFinishCellEdit: Function
        onBeforeHide: Function
        onBeforePaste: Function
        onBeforePdfExport: Function
        onBeforeRenderRow: Function
        onBeforeRenderRows: Function
        onBeforeSelectionChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeToggleGroup: Function
        onBeforeToggleNode: Function
        onCancelCellEdit: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMenuBeforeShow: Function
        onCellMenuItem: Function
        onCellMenuShow: Function
        onCellMenuToggleItem: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onCollapseNode: Function
        onColumnDragStart: Function
        onColumnDrop: Function
        onContextMenuItem: Function
        onContextMenuToggleItem: Function
        onCopy: Function
        onDataChange: Function
        onDestroy: Function
        onExpandNode: Function
        onFinishCellEdit: Function
        onFocusIn: Function
        onFocusOut: Function
        onHeaderMenuBeforeShow: Function
        onHeaderMenuItem: Function
        onHeaderMenuShow: Function
        onHeaderMenuToggleItem: Function
        onHide: Function
        onMouseOut: Function
        onMouseOver: Function
        onPaint: Function
        onPaste: Function
        onPdfExport: Function
        onPointerOver: Function
        onReadOnly: Function
        onRecompose: Function
        onRenderRow: Function
        onRenderRows: Function
        onResize: Function
        onResponsive: Function
        onScroll: Function
        onSelectionChange: Function
        onShow: Function
        onStartCellEdit: Function
        onSubGridCollapse: Function
        onSubGridExpand: Function
        onToggleGroup: Function
        onToggleNode: Function
        onToolClick: Function
    }

    export class Grid extends GridBase {
        features: GridFeaturesType
        onBeforeDestroy: Function
        onBeforeSelectionChange: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onDestroy: Function
        onMouseOut: Function
        onMouseOver: Function
        onPointerOver: Function
        onResponsive: Function
        onSelectionChange: Function
        constructor(config?: Partial<GridConfig>);
    }

    type GridBaseFeaturesType = {
        cellEdit: CellEdit
        cellMenu: CellMenu
        cellTooltip: CellTooltip
        columnAutoWidth: ColumnAutoWidth
        columnDragToolbar: ColumnDragToolbar
        columnPicker: ColumnPicker
        columnRename: ColumnRename
        columnReorder: ColumnReorder
        columnResize: ColumnResize
        excelExporter: GridExcelExporter
        filter: Filter
        filterBar: FilterBar
        group: Group
        groupSummary: GridGroupSummary
        headerMenu: HeaderMenu
        mergeCells: MergeCells
        multipage: GridMultiPageExporter
        multipagevertical: GridMultiPageVerticalExporter
        pdfExport: GridPdfExport
        quickFind: QuickFind
        regionResize: RegionResize
        rowCopyPaste: RowCopyPaste
        rowExpander: RowExpander
        rowReorder: RowReorder
        search: Search
        singlepage: GridSinglePageExporter
        sort: Sort
        stickyCells: StickyCells
        stripe: Stripe
        summary: GridSummary
        tree: Tree
        treeGroup: TreeGroup
    }

    type GridBaseFeaturesConfigType = {
        cellEdit: string|boolean|Partial<CellEditConfig>
        cellMenu: string|boolean|Partial<CellMenuConfig>
        cellTooltip: string|boolean|Partial<CellTooltipConfig>
        columnAutoWidth: string|boolean|Partial<ColumnAutoWidthConfig>
        columnDragToolbar: string|boolean|Partial<ColumnDragToolbarConfig>
        columnPicker: string|boolean|Partial<ColumnPickerConfig>
        columnRename: string|boolean|Partial<ColumnRenameConfig>
        columnReorder: string|boolean|Partial<ColumnReorderConfig>
        columnResize: string|boolean|Partial<ColumnResizeConfig>
        excelExporter: string|boolean|Partial<GridExcelExporterConfig>
        filter: string|boolean|Partial<FilterConfig>
        filterBar: string|boolean|Partial<FilterBarConfig>
        group: string|boolean|Partial<GroupConfig>
        groupSummary: string|boolean|Partial<GridGroupSummaryConfig>
        headerMenu: string|boolean|Partial<HeaderMenuConfig>
        mergeCells: string|boolean|Partial<MergeCellsConfig>
        multipage: string|boolean|Partial<GridMultiPageExporterConfig>
        multipagevertical: string|boolean|Partial<GridMultiPageVerticalExporterConfig>
        pdfExport: string|boolean|Partial<GridPdfExportConfig>
        quickFind: string|boolean|Partial<QuickFindConfig>
        regionResize: string|boolean|Partial<RegionResizeConfig>
        rowCopyPaste: string|boolean|Partial<RowCopyPasteConfig>
        rowExpander: string|boolean|Partial<RowExpanderConfig>
        rowReorder: string|boolean|Partial<RowReorderConfig>
        search: string|boolean|Partial<SearchConfig>
        singlepage: string|boolean|Partial<GridSinglePageExporterConfig>
        sort: string|boolean|Partial<SortConfig>
        stickyCells: string|boolean|Partial<StickyCellsConfig>
        stripe: string|boolean|Partial<StripeConfig>
        summary: string|boolean|Partial<GridSummaryConfig>
        tree: string|boolean|Partial<TreeConfig>
        treeGroup: string|boolean|Partial<TreeGroupConfig>
    }

    type GridBaseConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        animateRemovingRows: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoHeight: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        columnLines: boolean
        columns: ColumnStore|object[]|object|Partial<ColumnStoreConfig>|Partial<ColumnStoreConfig>[]
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        contextMenuTriggerEvent: 'contextmenu'|'click'|'dblclick'
        data: object[]|Model[]|Partial<ModelConfig>[]
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaultRegion: string
        defaults: object
        destroyStore: boolean
        disableGridRowModelWarning: boolean
        disabled: boolean
        dismissDelay: number
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        emptyText: string
        enableSticky: boolean
        enableTextSelection: boolean
        enableUndoRedoKeys: boolean
        features: Partial<GridBaseFeaturesConfigType>
        fillLastColumn: boolean
        fixedRowHeight: boolean
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        fullRowRefresh: boolean
        getHtml: Function|string
        getRowHeight: Function
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideHeaders: boolean
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        keyMap: object
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        longPressTime: number
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        owner: Widget
        plugins: Function[]
        positioned: boolean
        preserveFocusOnDatasetChange: boolean
        preserveScrollOnDatasetChange: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        resizeToFitIncludesHeader: boolean
        responsiveLevels: object
        ripple: boolean|object
        rootElement: ShadowRoot
        rowHeight: number
        scrollAction: 'hide'|'realign'|null
        scrollManager: object|ScrollManager|Partial<ScrollManagerConfig>
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        scrollerClass: typeof Scroller
        selectionMode: object
        showAnimation: boolean|object
        showDirty: boolean
        showOnClick: boolean
        showOnHover: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        store: Store|Partial<StoreConfig>
        strips: object
        style: string
        subGridConfigs: object
        syncMask: string|object|null
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trackMouse: boolean
        transitionDuration: number
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeCancelCellEdit: Function
        onBeforeCellEditStart: Function
        onBeforeClose: Function
        onBeforeColumnDragStart: Function
        onBeforeColumnDropFinalize: Function
        onBeforeCopy: Function
        onBeforeDestroy: Function
        onBeforeFinishCellEdit: Function
        onBeforeHide: Function
        onBeforePaste: Function
        onBeforePdfExport: Function
        onBeforeRenderRow: Function
        onBeforeRenderRows: Function
        onBeforeSelectionChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeToggleGroup: Function
        onBeforeToggleNode: Function
        onCancelCellEdit: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMenuBeforeShow: Function
        onCellMenuItem: Function
        onCellMenuShow: Function
        onCellMenuToggleItem: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onCollapseNode: Function
        onColumnDragStart: Function
        onColumnDrop: Function
        onContextMenuItem: Function
        onContextMenuToggleItem: Function
        onCopy: Function
        onDataChange: Function
        onDestroy: Function
        onExpandNode: Function
        onFinishCellEdit: Function
        onFocusIn: Function
        onFocusOut: Function
        onHeaderMenuBeforeShow: Function
        onHeaderMenuItem: Function
        onHeaderMenuShow: Function
        onHeaderMenuToggleItem: Function
        onHide: Function
        onMouseOut: Function
        onMouseOver: Function
        onPaint: Function
        onPaste: Function
        onPdfExport: Function
        onPointerOver: Function
        onReadOnly: Function
        onRecompose: Function
        onRenderRow: Function
        onRenderRows: Function
        onResize: Function
        onResponsive: Function
        onScroll: Function
        onSelectionChange: Function
        onShow: Function
        onStartCellEdit: Function
        onSubGridCollapse: Function
        onSubGridExpand: Function
        onToggleGroup: Function
        onToggleNode: Function
        onToolClick: Function
    }

    export class GridBase extends Panel implements PluggableClass, StateClass, GridElementEventsClass, GridFeaturesClass, GridResponsiveClass, GridSelectionClass, GridStateClass, GridSubGridsClass, LoadMaskableClass {
        readonly bodyHeight: number
        columnLines: boolean
        readonly columns: ColumnStore|object[]|object|Partial<ColumnStoreConfig>|Partial<ColumnStoreConfig>[]
        data: object[]|Model[]|Partial<ModelConfig>[]
        emptyText: string
        enableUndoRedoKeys: boolean
        readonly features: GridBaseFeaturesType
        readonly firstVisibleRow: Row
        readonly footerHeight: number
        readonly headerHeight: number
        readonly isStateful: boolean
        readonly lastVisibleRow: Row
        readonly localeManager: typeof LocaleManager
        longPressTime: number
        readonly plugins: object
        readOnly: boolean
        readonly responsiveLevel: string
        rowHeight: number
        readonly scrollManager: object|ScrollManager|Partial<ScrollManagerConfig>
        selectedCell: object
        readonly selectedCellCSSSelector: string
        selectedRecord: Model
        selectedRecords: Model[]|number[]
        state: object
        store: Store|Partial<StoreConfig>
        readonly subGrids: object
        transitionDuration: number
        onBeforeCancelCellEdit: Function
        onBeforeCellEditStart: Function
        onBeforeColumnDragStart: Function
        onBeforeColumnDropFinalize: Function
        onBeforeCopy: Function
        onBeforeDestroy: Function
        onBeforeFinishCellEdit: Function
        onBeforePaste: Function
        onBeforePdfExport: Function
        onBeforeRenderRow: Function
        onBeforeRenderRows: Function
        onBeforeSelectionChange: Function
        onBeforeToggleGroup: Function
        onBeforeToggleNode: Function
        onCancelCellEdit: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMenuBeforeShow: Function
        onCellMenuItem: Function
        onCellMenuShow: Function
        onCellMenuToggleItem: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onCollapseNode: Function
        onColumnDragStart: Function
        onColumnDrop: Function
        onCopy: Function
        onDataChange: Function
        onDestroy: Function
        onExpandNode: Function
        onFinishCellEdit: Function
        onHeaderMenuBeforeShow: Function
        onHeaderMenuItem: Function
        onHeaderMenuShow: Function
        onHeaderMenuToggleItem: Function
        onMouseOut: Function
        onMouseOver: Function
        onPaste: Function
        onPdfExport: Function
        onPointerOver: Function
        onRenderRow: Function
        onRenderRows: Function
        onResponsive: Function
        onScroll: Function
        onSelectionChange: Function
        onStartCellEdit: Function
        onSubGridCollapse: Function
        onSubGridExpand: Function
        onToggleGroup: Function
        onToggleNode: Function
        constructor(config?: Partial<GridBaseConfig>);
        static L(text: string, templateData?: object): string;
        static optionalL(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        addPlugins(...plugins: Function[]): void;
        applyState(state: object): void;
        cancelEditing(silent?: boolean): void;
        clearGroups(): Promise<void>;
        collapse(idOrRecord: string|number|Model): Promise<void>;
        collapseAll(): Promise<void>;
        copyRows(isCut?: boolean): void;
        deselectAll(removeCurrentRecordsOnly?: boolean): void;
        deselectCell(cellSelector: object): object;
        deselectRow(recordOrId: Model|string|number): void;
        deselectRows(recordOrIds: Model|string|number|Model[]|string[]|number[]): void;
        disableScrollingCloseToEdges(subGrid: SubGrid|string): void;
        enableScrollingCloseToEdges(subGrid: SubGrid|string): void;
        expand(idOrRecord: string|number|Model): Promise<void>;
        expandAll(): Promise<void>;
        expandTo(idOrRecord: string|number|Model|string[]|number[]|Model[], scrollIntoView?: boolean): Promise<void>;
        finishEditing(): Promise<any>;
        getCell(cellContext: object): HTMLElement|null;
        getColumnFromElement(element: HTMLElement): Column;
        getHeaderElement(columnId: string|number|Column): HTMLElement;
        getPlugin(pluginClassOrName: string|Function): InstancePlugin;
        getRecordFromElement(element: HTMLElement): Model;
        getRowFor(recordOrId: HTMLElement|Model|string|number): Row;
        getState(): object;
        getSubGrid(region: string): SubGrid;
        getSubGridFromColumn(column: string|Column): SubGrid;
        group(levels: (string|((model: Model) => any))[]): Promise<void>;
        hasFeature(name: string): boolean;
        hasListener(eventName: string): boolean;
        hasPlugin(pluginClassOrName: string|Function): boolean;
        isSelectable(recordCellOrId: Model|object|string|number|Partial<ModelConfig>): boolean;
        isSelected(cellSelectorOrId: object|string|number|Model|Partial<ModelConfig>): boolean;
        loadState(stateId?: string, reload?: boolean): void;
        maskBody(loadMask: string|Partial<MaskConfig>): Mask;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        pasteRows(record?: Model): void;
        refreshColumn(column: Column): void;
        refreshRows(): void;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        renderContents(): void;
        renderRows(): void;
        restoreScroll(state?: object): void;
        resumeEvents(): boolean;
        saveState(options?: object|string): void;
        scrollCellIntoView(cellContext: object): void;
        scrollColumnIntoView(column: Column|string|number, options?: object): Promise<any>;
        scrollRowIntoView(recordOrId: Model|string|number, options?: object): Promise<any>;
        scrollToBottom(): Promise<any>;
        scrollToTop(): Promise<any>;
        selectAll(): void;
        selectCell(cellSelector: object, scrollIntoView?: boolean, addToSelection?: boolean, silent?: boolean): object;
        selectRange(fromId: string|number, toId: string|number): void;
        selectRow(options: object|Model|Partial<ModelConfig>): void;
        selectRows(recordOrIds: Model|string|number|Model[]|string[]|number[], addToSelection?: boolean): void;
        showContextMenu(event: Event, alignSpec?: object|HTMLElement): void;
        spliceSelectedRecords(index: number, toRemove: object[]|number, toAdd: object[]|object): void;
        startEditing(cellContext: object): Promise<any>;
        storeScroll(): object;
        suspendEvents(queue?: boolean): void;
        toggleCollapse(idOrRecord: string|number|Model, collapse?: boolean, skipRefresh?: boolean): Promise<void>;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
        unmaskBody(): void;
        updateLocalization(): void;
    }

    type SubGridConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        collapsed: boolean
        columns: ColumnStore
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        region: string
        resizable: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class SubGrid extends Widget {
        collapsed: boolean
        flex: number|string
        readonly rowElements: HTMLElement[]
        readonly viewRectangle: Rectangle
        width: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SubGridConfig>);
        collapse(): Promise<any>;
        expand(): Promise<any>;
        resizeColumnsToFitContent(): void;
        scrollColumnIntoView(column: Column|string|number, options?: object): Promise<any>;
    }

    type TreeGridFeaturesType = {
        cellEdit: CellEdit
        cellMenu: CellMenu
        cellTooltip: CellTooltip
        columnAutoWidth: ColumnAutoWidth
        columnDragToolbar: ColumnDragToolbar
        columnPicker: ColumnPicker
        columnRename: ColumnRename
        columnReorder: ColumnReorder
        columnResize: ColumnResize
        excelExporter: GridExcelExporter
        filter: Filter
        filterBar: FilterBar
        group: Group
        groupSummary: GridGroupSummary
        headerMenu: HeaderMenu
        mergeCells: MergeCells
        multipage: GridMultiPageExporter
        multipagevertical: GridMultiPageVerticalExporter
        pdfExport: GridPdfExport
        quickFind: QuickFind
        regionResize: RegionResize
        rowCopyPaste: RowCopyPaste
        rowExpander: RowExpander
        rowReorder: RowReorder
        search: Search
        singlepage: GridSinglePageExporter
        sort: Sort
        stickyCells: StickyCells
        stripe: Stripe
        summary: GridSummary
        tree: Tree
        treeGroup: TreeGroup
    }

    type TreeGridFeaturesConfigType = {
        cellEdit: string|boolean|Partial<CellEditConfig>
        cellMenu: string|boolean|Partial<CellMenuConfig>
        cellTooltip: string|boolean|Partial<CellTooltipConfig>
        columnAutoWidth: string|boolean|Partial<ColumnAutoWidthConfig>
        columnDragToolbar: string|boolean|Partial<ColumnDragToolbarConfig>
        columnPicker: string|boolean|Partial<ColumnPickerConfig>
        columnRename: string|boolean|Partial<ColumnRenameConfig>
        columnReorder: string|boolean|Partial<ColumnReorderConfig>
        columnResize: string|boolean|Partial<ColumnResizeConfig>
        excelExporter: string|boolean|Partial<GridExcelExporterConfig>
        filter: string|boolean|Partial<FilterConfig>
        filterBar: string|boolean|Partial<FilterBarConfig>
        group: string|boolean|Partial<GroupConfig>
        groupSummary: string|boolean|Partial<GridGroupSummaryConfig>
        headerMenu: string|boolean|Partial<HeaderMenuConfig>
        mergeCells: string|boolean|Partial<MergeCellsConfig>
        multipage: string|boolean|Partial<GridMultiPageExporterConfig>
        multipagevertical: string|boolean|Partial<GridMultiPageVerticalExporterConfig>
        pdfExport: string|boolean|Partial<GridPdfExportConfig>
        quickFind: string|boolean|Partial<QuickFindConfig>
        regionResize: string|boolean|Partial<RegionResizeConfig>
        rowCopyPaste: string|boolean|Partial<RowCopyPasteConfig>
        rowExpander: string|boolean|Partial<RowExpanderConfig>
        rowReorder: string|boolean|Partial<RowReorderConfig>
        search: string|boolean|Partial<SearchConfig>
        singlepage: string|boolean|Partial<GridSinglePageExporterConfig>
        sort: string|boolean|Partial<SortConfig>
        stickyCells: string|boolean|Partial<StickyCellsConfig>
        stripe: string|boolean|Partial<StripeConfig>
        summary: string|boolean|Partial<GridSummaryConfig>
        tree: string|boolean|Partial<TreeConfig>
        treeGroup: string|boolean|Partial<TreeGroupConfig>
    }

    type TreeGridConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        animateRemovingRows: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoHeight: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        columnLines: boolean
        columns: ColumnStore|object[]|object|Partial<ColumnStoreConfig>|Partial<ColumnStoreConfig>[]
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        contextMenuTriggerEvent: 'contextmenu'|'click'|'dblclick'
        data: object[]|Model[]|Partial<ModelConfig>[]
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaultRegion: string
        defaults: object
        destroyStore: boolean
        disableGridRowModelWarning: boolean
        disabled: boolean
        dismissDelay: number
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        emptyText: string
        enableSticky: boolean
        enableTextSelection: boolean
        enableUndoRedoKeys: boolean
        features: Partial<TreeGridFeaturesConfigType>
        fillLastColumn: boolean
        fixedRowHeight: boolean
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        fullRowRefresh: boolean
        getHtml: Function|string
        getRowHeight: Function
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideHeaders: boolean
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        keyMap: object
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        longPressTime: number
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        owner: Widget
        plugins: Function[]
        positioned: boolean
        preserveFocusOnDatasetChange: boolean
        preserveScrollOnDatasetChange: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        resizeToFitIncludesHeader: boolean
        responsiveLevels: object
        ripple: boolean|object
        rootElement: ShadowRoot
        rowHeight: number
        scrollAction: 'hide'|'realign'|null
        scrollManager: object|ScrollManager|Partial<ScrollManagerConfig>
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        scrollerClass: typeof Scroller
        selectionMode: object
        showAnimation: boolean|object
        showDirty: boolean
        showOnClick: boolean
        showOnHover: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        store: Store|Partial<StoreConfig>
        strips: object
        style: string
        subGridConfigs: object
        syncMask: string|object|null
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trackMouse: boolean
        transitionDuration: number
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeCancelCellEdit: Function
        onBeforeCellEditStart: Function
        onBeforeClose: Function
        onBeforeColumnDragStart: Function
        onBeforeColumnDropFinalize: Function
        onBeforeCopy: Function
        onBeforeDestroy: Function
        onBeforeFinishCellEdit: Function
        onBeforeHide: Function
        onBeforePaste: Function
        onBeforePdfExport: Function
        onBeforeRenderRow: Function
        onBeforeRenderRows: Function
        onBeforeSelectionChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeToggleGroup: Function
        onBeforeToggleNode: Function
        onCancelCellEdit: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMenuBeforeShow: Function
        onCellMenuItem: Function
        onCellMenuShow: Function
        onCellMenuToggleItem: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onCollapseNode: Function
        onColumnDragStart: Function
        onColumnDrop: Function
        onContextMenuItem: Function
        onContextMenuToggleItem: Function
        onCopy: Function
        onDataChange: Function
        onDestroy: Function
        onExpandNode: Function
        onFinishCellEdit: Function
        onFocusIn: Function
        onFocusOut: Function
        onHeaderMenuBeforeShow: Function
        onHeaderMenuItem: Function
        onHeaderMenuShow: Function
        onHeaderMenuToggleItem: Function
        onHide: Function
        onMouseOut: Function
        onMouseOver: Function
        onPaint: Function
        onPaste: Function
        onPdfExport: Function
        onPointerOver: Function
        onReadOnly: Function
        onRecompose: Function
        onRenderRow: Function
        onRenderRows: Function
        onResize: Function
        onResponsive: Function
        onScroll: Function
        onSelectionChange: Function
        onShow: Function
        onStartCellEdit: Function
        onSubGridCollapse: Function
        onSubGridExpand: Function
        onToggleGroup: Function
        onToggleNode: Function
        onToolClick: Function
    }

    export class TreeGrid extends Grid {
        features: TreeGridFeaturesType
        onBeforeDestroy: Function
        onBeforeSelectionChange: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onDestroy: Function
        onMouseOut: Function
        onMouseOver: Function
        onPointerOver: Function
        onResponsive: Function
        onSelectionChange: Function
        constructor(config?: Partial<TreeGridConfig>);
        collapse(idOrRecord: string|number|Model): Promise<void>;
        expand(idOrRecord: string|number|Model): Promise<void>;
        expandTo(idOrRecord: string|number|Model): Promise<void>;
        toggleCollapse(idOrRecord: string|number|Model, collapse?: boolean, skipRefresh?: boolean): Promise<void>;
    }

    type ExportDialogConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoSelectVisibleColumns: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        client: Grid
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePNGMultipageOption: boolean
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCancel: Function
        onCatchAll: Function
        onDestroy: Function
        onExport: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class ExportDialog extends Popup {
        readonly values: object
        onBeforeDestroy: Function
        onCancel: Function
        onCatchAll: Function
        onDestroy: Function
        onExport: Function
        constructor(config?: Partial<ExportDialogConfig>);
    }

    type GridElementEventsClassConfig = {
        enableUndoRedoKeys: boolean
        longPressTime: number
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onMouseOut: Function
        onMouseOver: Function
    }

    export class GridElementEventsClass {
        enableUndoRedoKeys: boolean
        longPressTime: number
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onMouseOut: Function
        onMouseOver: Function
        constructor(config?: Partial<GridElementEventsClassConfig>);
    }

    export const GridElementEvents : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & GridElementEventsClass>

    type GridFeaturesClassConfig = {
        features: object
    }

    export class GridFeaturesClass {
        readonly features: object
        constructor(config?: Partial<GridFeaturesClassConfig>);
        hasFeature(name: string): boolean;
    }

    export const GridFeatures : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & GridFeaturesClass>

    type GridResponsiveClassConfig = {
        responsiveLevels: object
        onResponsive: Function
    }

    export class GridResponsiveClass {
        readonly responsiveLevel: string
        onResponsive: Function
        constructor(config?: Partial<GridResponsiveClassConfig>);
    }

    export const GridResponsive : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & GridResponsiveClass>

    type GridSelectionClassConfig = {
        selectionMode: object
        onBeforeSelectionChange: Function
        onSelectionChange: Function
    }

    export class GridSelectionClass {
        selectedCell: object
        readonly selectedCellCSSSelector: string
        selectedRecord: Model
        selectedRecords: Model[]|number[]
        onBeforeSelectionChange: Function
        onSelectionChange: Function
        constructor(config?: Partial<GridSelectionClassConfig>);
        deselectAll(removeCurrentRecordsOnly?: boolean): void;
        deselectCell(cellSelector: object): object;
        deselectRow(recordOrId: Model|string|number): void;
        deselectRows(recordOrIds: Model|string|number|Model[]|string[]|number[]): void;
        isSelectable(recordCellOrId: Model|object|string|number|Partial<ModelConfig>): boolean;
        isSelected(cellSelectorOrId: object|string|number|Model|Partial<ModelConfig>): boolean;
        selectAll(): void;
        selectCell(cellSelector: object, scrollIntoView?: boolean, addToSelection?: boolean, silent?: boolean): object;
        selectRange(fromId: string|number, toId: string|number): void;
        selectRow(options: object|Model|Partial<ModelConfig>): void;
        selectRows(recordOrIds: Model|string|number|Model[]|string[]|number[], addToSelection?: boolean): void;
        spliceSelectedRecords(index: number, toRemove: object[]|number, toAdd: object[]|object): void;
    }

    export const GridSelection : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & GridSelectionClass>

    export class GridStateClass {
        state: object
    }

    export const GridState : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & GridStateClass>

    export class GridSubGridsClass {
        readonly subGrids: object
        getSubGrid(region: string): SubGrid;
        getSubGridFromColumn(column: string|Column): SubGrid;
    }

    export const GridSubGrids : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & GridSubGridsClass>

    type GridFieldFilterPickerConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowedFieldNames: string[]
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        dateFormat: string
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        fields: FieldOption[]
        filter: object
        flex: number|string
        floating: boolean
        getValueFieldConfig: Function
        grid: Grid
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        operators: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        propertyFieldConfig: object
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        store: Store
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        valueFieldPlaceholders: ValueFieldPlaceholders
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class GridFieldFilterPicker extends FieldFilterPicker {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<GridFieldFilterPickerConfig>);
    }

    type GridFieldFilterPickerGroupConfig = {
        addFilterButtonText: string
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowedFieldNames: string[]
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        canDeleteFilter: Function
        canManageFilter: Function
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        dateFormat: string
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        fields: FieldOption[]
        filters: object[]
        flex: number|string
        floating: boolean
        getFieldFilterPickerConfig: Function
        grid: Grid
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        limitToProperty: string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        operators: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAddFilterButton: boolean
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        store: Store
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class GridFieldFilterPickerGroup extends FieldFilterPickerGroup {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<GridFieldFilterPickerGroupConfig>);
    }

    type DurationColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        decimalPrecision: number|boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        format: string|Partial<NumberFormatConfig>
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        largeStep: number
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        max: number
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        min: number
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        step: number
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        unit: string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class DurationColumn extends NumberColumn {
        step: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<DurationColumnConfig>);
    }

    type ResourceCollapseColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class ResourceCollapseColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ResourceCollapseColumnConfig>);
    }

    type ResourceInfoColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoScaleThreshold: number
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        showEventCount: boolean
        showImage: boolean
        showMeta: Function
        showRole: boolean|string
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        useNameAsImageName: boolean
        // @deprecated
        validNames: string[]
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class ResourceInfoColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ResourceInfoColumnConfig>);
    }

    type TimeAxisColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        widgets: object[]
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class TimeAxisColumn extends WidgetColumn {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TimeAxisColumnConfig>);
        refreshHeader(): void;
    }

    type VerticalTimeAxisColumnConfig = {
        align: 'left'|'center'|'right'|'start'|'end'
        alwaysClearCell: boolean
        autoHeight: boolean
        autoSyncHtml: boolean
        autoWidth: boolean|number|number[]
        bubbleEvents: object
        callOnFunctions: boolean
        cellCls: string
        cellEditor: Partial<EditorConfig>
        cellMenuItems: object|boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        collapseMode: string
        collapsed: boolean
        collapsible: boolean
        draggable: boolean
        editTargetSelector: string
        editor: boolean|string|object|Field|Partial<FieldConfig>
        enableCellContextMenu: boolean
        enableHeaderContextMenu: boolean
        exportable: boolean
        exportedType: string
        field: string
        filterType: 'text'|'date'|'number'|'duration'
        filterable: boolean|Function|object
        finalizeCellEdit: Function
        fitMode: 'exact'|'textContent'|'value'|'none'|null
        flex: number
        groupRenderer: Function
        groupable: boolean
        headerMenuItems: object
        headerRenderer: Function
        hidden: boolean
        hideable: boolean
        htmlEncode: boolean
        htmlEncodeHeaderText: boolean
        icon: string
        id: string|number
        instantUpdate: boolean
        invalidAction: 'block'|'allow'|'revert'
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        locked: boolean
        maxWidth: number|string
        mergeCells: boolean
        mergeable: boolean
        minWidth: number|string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        region: string
        renderer: Function
        resizable: boolean
        responsiveLevels: object
        revertOnEscape: boolean
        sealed: boolean
        searchable: boolean
        showColumnPicker: boolean
        sortable: boolean|Function|Partial<CollectionSorterConfig>
        sum: 'sum'|'add'|'count'|'countNotEmpty'|'average'|Function
        summaries: object[]
        summaryRenderer: Function
        tags: string[]
        text: string
        tooltip: string|object
        tooltipRenderer: Function
        touchConfig: object
        tree: boolean
        type: 'text'|'number'|'date'|'check'|'rownumber'|'template'|'tree'|'widget'|'rating'|'percent'|'aggregate'|'action'|string
        width: number|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class VerticalTimeAxisColumn extends Column {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<VerticalTimeAxisColumnConfig>);
    }

    type AbstractCrudManagerConfig = {
        autoLoad: boolean
        autoSync: boolean
        autoSyncTimeout: number
        bubbleEvents: object
        callOnFunctions: boolean
        crudStores: Store[]|string[]|object[]|Partial<StoreConfig>[]
        forceSync: boolean
        listeners: object
        loadUrl: string
        phantomIdField: string
        phantomParentIdField: string
        resetIdsBeforeSync: boolean
        skipSuccessProperty: boolean
        storeIdProperty: string
        stores: Store[]|string[]|object[]|Partial<StoreConfig>[]
        supportShortSyncResponse: boolean
        syncApplySequence: string[]
        syncUrl: string
        trackResponseType: boolean
        validateResponse: boolean
        writeAllFields: boolean
        onBeforeDestroy: Function
        onBeforeLoad: Function
        onBeforeLoadApply: Function
        onBeforeResponseApply: Function
        onBeforeSync: Function
        onBeforeSyncApply: Function
        onCatchAll: Function
        onDestroy: Function
        onHasChanges: Function
        onLoad: Function
        onLoadCanceled: Function
        onLoadFail: Function
        onNoChanges: Function
        onRequestDone: Function
        onRequestFail: Function
        onSync: Function
        onSyncCanceled: Function
        onSyncDelayed: Function
        onSyncFail: Function
    }

    export abstract class AbstractCrudManager extends Base implements AbstractCrudManagerMixinClass {
        readonly changes: object
        readonly crudRevision: number
        crudStores: object[]
        forceSync: boolean
        inlineData: object
        readonly isCrudManagerLoading: boolean
        readonly isCrudManagerSyncing: boolean
        readonly isLoading: boolean
        json: string
        loadUrl: string
        readonly revision: number
        stores: object[]
        syncApplySequence: object[]
        syncUrl: string
        onBeforeDestroy: Function
        onBeforeLoad: Function
        onBeforeLoadApply: Function
        onBeforeResponseApply: Function
        onBeforeSync: Function
        onBeforeSyncApply: Function
        onCatchAll: Function
        onDestroy: Function
        onHasChanges: Function
        onLoad: Function
        onLoadCanceled: Function
        onLoadFail: Function
        onNoChanges: Function
        onRequestDone: Function
        onRequestFail: Function
        onSync: Function
        onSyncCanceled: Function
        onSyncDelayed: Function
        onSyncFail: Function
        constructor(config?: Partial<AbstractCrudManagerConfig>);
        acceptChanges(): void;
        addCrudStore(store: Store|string|object|Store[]|string[]|object[]|Partial<StoreConfig>|Partial<StoreConfig>[], position?: number, fromStore?: string|Store|object|Partial<StoreConfig>): void;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        addStore(store: Store|string|object|Store[]|string[]|object[]|Partial<StoreConfig>|Partial<StoreConfig>[], position?: number, fromStore?: string|Store|object|Partial<StoreConfig>): void;
        addStoreToApplySequence(store: Store|object|Store[]|object[]|Partial<StoreConfig>|Partial<StoreConfig>[], position?: number, fromStore?: string|Store|object|Partial<StoreConfig>): void;
        applyChangeset(changes: object, transformFn?: Function, phantomIdField?: string): void;
        abstract cancelRequest(promise: Promise<any>, reject: Function): void;
        crudStoreHasChanges(storeId?: string|Store): boolean;
        abstract decode(response: string): object;
        abstract encode(request: object): string;
        getCrudStore(storeId: string): Store;
        getStoreDescriptor(storeId: string|Store): object;
        hasListener(eventName: string): boolean;
        load(options?: object|string): Promise<any>;
        loadCrudManagerData(response: object, options?: object): void;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeCrudStore(store: object|string|Store|Partial<StoreConfig>): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        removeStoreFromApplySequence(store: object|string|Store|Partial<StoreConfig>): void;
        resumeAutoSync(doSync?: boolean): void;
        resumeEvents(): boolean;
        revertChanges(): void;
        abstract sendRequest(request: object): Promise<any>;
        suspendAutoSync(): void;
        suspendEvents(queue?: boolean): void;
        sync(): Promise<any>;
        toJSON(): object;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
    }

    type AbstractCrudManagerMixinClassConfig = {
        autoLoad: boolean
        autoSync: boolean
        autoSyncTimeout: number
        bubbleEvents: object
        callOnFunctions: boolean
        crudStores: Store[]|string[]|object[]|Partial<StoreConfig>[]
        forceSync: boolean
        listeners: object
        loadUrl: string
        phantomIdField: string
        phantomParentIdField: string
        resetIdsBeforeSync: boolean
        skipSuccessProperty: boolean
        storeIdProperty: string
        supportShortSyncResponse: boolean
        syncApplySequence: string[]
        syncUrl: string
        trackResponseType: boolean
        validateResponse: boolean
        writeAllFields: boolean
        onBeforeDestroy: Function
        onBeforeLoad: Function
        onBeforeLoadApply: Function
        onBeforeResponseApply: Function
        onBeforeSync: Function
        onBeforeSyncApply: Function
        onCatchAll: Function
        onDestroy: Function
        onHasChanges: Function
        onLoad: Function
        onLoadCanceled: Function
        onLoadFail: Function
        onNoChanges: Function
        onRequestDone: Function
        onRequestFail: Function
        onSync: Function
        onSyncCanceled: Function
        onSyncDelayed: Function
        onSyncFail: Function
    }

    export abstract class AbstractCrudManagerMixinClass implements DelayableClass, EventsClass, AbstractCrudManagerValidationClass {
        readonly changes: object
        readonly crudRevision: number
        crudStores: object[]
        forceSync: boolean
        readonly isCrudManagerLoading: boolean
        readonly isCrudManagerSyncing: boolean
        loadUrl: string
        syncApplySequence: object[]
        syncUrl: string
        onBeforeDestroy: Function
        onBeforeLoad: Function
        onBeforeLoadApply: Function
        onBeforeResponseApply: Function
        onBeforeSync: Function
        onBeforeSyncApply: Function
        onCatchAll: Function
        onDestroy: Function
        onHasChanges: Function
        onLoad: Function
        onLoadCanceled: Function
        onLoadFail: Function
        onNoChanges: Function
        onRequestDone: Function
        onRequestFail: Function
        onSync: Function
        onSyncCanceled: Function
        onSyncDelayed: Function
        onSyncFail: Function
        constructor(config?: Partial<AbstractCrudManagerMixinClassConfig>);
        acceptChanges(): void;
        addCrudStore(store: Store|string|object|Store[]|string[]|object[]|Partial<StoreConfig>|Partial<StoreConfig>[], position?: number, fromStore?: string|Store|object|Partial<StoreConfig>): void;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        addStoreToApplySequence(store: Store|object|Store[]|object[]|Partial<StoreConfig>|Partial<StoreConfig>[], position?: number, fromStore?: string|Store|object|Partial<StoreConfig>): void;
        applyChangeset(changes: object, transformFn?: Function, phantomIdField?: string): void;
        abstract cancelRequest(promise: Promise<any>, reject: Function): void;
        crudStoreHasChanges(storeId?: string|Store): boolean;
        abstract decode(response: string): object;
        abstract encode(request: object): string;
        getCrudStore(storeId: string): Store;
        getStoreDescriptor(storeId: string|Store): object;
        hasListener(eventName: string): boolean;
        load(options?: object|string): Promise<any>;
        loadCrudManagerData(response: object, options?: object): void;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeCrudStore(store: object|string|Store|Partial<StoreConfig>): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        removeStoreFromApplySequence(store: object|string|Store|Partial<StoreConfig>): void;
        resumeAutoSync(doSync?: boolean): void;
        resumeEvents(): boolean;
        revertChanges(): void;
        abstract sendRequest(request: object): Promise<any>;
        suspendAutoSync(): void;
        suspendEvents(queue?: boolean): void;
        sync(): Promise<any>;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
    }

    export const AbstractCrudManagerMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & AbstractCrudManagerMixinClass>

    type JsonEncoderClassConfig = {
        encoder: object
    }

    export class JsonEncoderClass {
        constructor(config?: Partial<JsonEncoderClassConfig>);
        decode(responseText: string): object;
        encode(requestData: object): string;
    }

    export const JsonEncoder : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & JsonEncoderClass>

    type AbstractCrudManagerValidationClassConfig = {
        skipSuccessProperty: boolean
        validateResponse: boolean
    }

    export class AbstractCrudManagerValidationClass {
        constructor(config?: Partial<AbstractCrudManagerValidationClassConfig>);
    }

    export const AbstractCrudManagerValidation : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & AbstractCrudManagerValidationClass>

    type CrudManagerViewClassConfig = {
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        syncMask: string|object|null
    }

    export class CrudManagerViewClass extends LoadMaskableClass {
        constructor(config?: Partial<CrudManagerViewClassConfig>);
    }

    export const CrudManagerView : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & CrudManagerViewClass>

    type AjaxTransportClassConfig = {
        transport: object
        onBeforeSend: Function
    }

    export abstract class AjaxTransportClass {
        onBeforeSend: Function
        constructor(config?: Partial<AjaxTransportClassConfig>);
        cancelRequest(requestPromise: Promise<any>): void;
        sendRequest(request: object): Promise<any>;
    }

    export const AjaxTransport : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & AjaxTransportClass>

    type TimelineBaseTagConfig = {
        faPath: string
        stylesheet: string
    }

    export abstract class TimelineBaseTag extends WidgetTag {
        constructor(config?: Partial<TimelineBaseTagConfig>);
    }

    type AssignmentStoreConfig = {
        allowNoId: boolean
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoCommit: boolean
        autoLoad: boolean
        autoTree: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        chainedFields: string[]
        chainedFilterFn: Function
        createUrl: string
        data: object[]|Model[]|Partial<ModelConfig>[]
        deleteUrl: string
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        fetchOptions: object
        fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        filterParamName: string
        filters: object|object[]
        fireRemoveEventForMoveAction: boolean
        groupers: object[]
        headers: object
        httpMethods: HttpMethods
        id: string|number
        ignoreRemoteChangesInSTM: boolean
        keepUncommittedChanges: boolean
        listeners: object
        masterStore: Store
        modelClass: typeof Model
        pageParamName: string
        pageSize: number
        pageSizeParamName: string
        pageStartParamName: string
        params: object
        parentIdParamName: string
        readUrl: string
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        reapplySortersOnAdd: boolean
        responseDataProperty: string
        responseSuccessProperty: string
        responseTotalProperty: string
        restfulFilter: boolean
        sendAsFormData: boolean
        sortParamName: string
        sorters: object[]|string[]
        stm: StateTrackingManager
        storage: Collection|object|Partial<CollectionConfig>
        syncDataOnLoad: boolean|object
        transformFlatData: boolean
        tree: boolean
        updateUrl: string
        useLocaleSort: boolean|string|object
        useRawData: boolean|object
        useRestfulMethods: boolean
        verifyNoGeneratedIds: boolean
        writeAllFields: boolean
        onAdd: Function
        onAddConfirmed: Function
        onAfterRequest: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeLoad: Function
        onBeforeLoadChildren: Function
        onBeforeLoadPage: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeRequest: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onCommit: Function
        onCommitAdded: Function
        onCommitModified: Function
        onCommitRemoved: Function
        onDestroy: Function
        onException: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onLoad: Function
        onLoadChildren: Function
        onLoadChildrenStart: Function
        onLoadStart: Function
        onMove: Function
        onOutdent: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
    }

    export class AssignmentStore extends AjaxStore implements AssignmentStoreMixinClass, PartOfProjectClass {
        readonly assignmentStore: AssignmentStore
        data: object[]
        readonly dependencyStore: DependencyStore
        readonly eventStore: EventStore
        readonly project: ProjectModel
        readonly resourceStore: ResourceStore
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onCatchAll: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIndent: Function
        onOutdent: Function
        onRemove: Function
        onRemoveAll: Function
        onSort: Function
        constructor(config?: Partial<AssignmentStoreConfig>);
        add(records: AssignmentModel|AssignmentModel[]|object|object[]|Partial<AssignmentModelConfig>|Partial<AssignmentModelConfig>[], silent?: boolean): AssignmentModel[];
        addAsync(records: AssignmentModel|AssignmentModel[]|object|object[]|Partial<AssignmentModelConfig>|Partial<AssignmentModelConfig>[], silent?: boolean): Promise<AssignmentModel[]>;
        assignEventToResource(event: TimeSpan, resources: ResourceModel|ResourceModel[], assignmentSetupFn?: Function, removeExistingAssignments?: boolean): AssignmentModel[];
        getAssignmentForEventAndResource(event: EventModel|string|number, resource: ResourceModel|string|number): AssignmentModel;
        getAssignmentsForEvent(event: TimeSpan): AssignmentModel[];
        getAssignmentsForResource(resource: ResourceModel): AssignmentModel[];
        getEventsForResource(resource: ResourceModel|string|number): TimeSpan[];
        getResourcesForEvent(event: EventModel): ResourceModel[];
        isEventAssignedToResource(event: EventModel|string|number, resource: ResourceModel|string|number): boolean;
        loadDataAsync(data: object[]): Promise<void>;
        mapAssignmentsForEvent(event: EventModel, fn?: Function, filterFn?: Function): EventModel[]|any[];
        mapAssignmentsForResource(resource: ResourceModel|number|string, fn?: Function, filterFn?: Function): ResourceModel[]|any[];
        removeAssignmentsForEvent(event: TimeSpan): void;
        removeAssignmentsForResource(resource: ResourceModel|any): void;
        unassignEventFromResource(event: TimeSpan|string|number, resources?: ResourceModel|string|number): AssignmentModel|AssignmentModel[];
    }

    type CrudManagerConfig = {
        assignmentStore: AssignmentStore|object|Partial<AssignmentStoreConfig>
        autoLoad: boolean
        autoSync: boolean
        autoSyncTimeout: number
        bubbleEvents: object
        callOnFunctions: boolean
        crudStores: Store[]|string[]|object[]|Partial<StoreConfig>[]
        dependencyStore: DependencyStore|object|Partial<DependencyStoreConfig>
        encoder: object
        eventStore: EventStore|object|Partial<EventStoreConfig>
        forceSync: boolean
        listeners: object
        loadUrl: string
        phantomIdField: string
        phantomParentIdField: string
        project: ProjectModel
        resetIdsBeforeSync: boolean
        resourceStore: ResourceStore|object|Partial<ResourceStoreConfig>
        skipSuccessProperty: boolean
        storeIdProperty: string
        stores: Store[]|string[]|object[]|Partial<StoreConfig>[]
        supportShortSyncResponse: boolean
        syncApplySequence: string[]
        syncUrl: string
        trackResponseType: boolean
        transport: object
        validateResponse: boolean
        writeAllFields: boolean
        onBeforeDestroy: Function
        onBeforeLoad: Function
        onBeforeLoadApply: Function
        onBeforeResponseApply: Function
        onBeforeSend: Function
        onBeforeSync: Function
        onBeforeSyncApply: Function
        onCatchAll: Function
        onDestroy: Function
        onHasChanges: Function
        onLoad: Function
        onLoadCanceled: Function
        onLoadFail: Function
        onNoChanges: Function
        onRequestDone: Function
        onRequestFail: Function
        onSync: Function
        onSyncCanceled: Function
        onSyncDelayed: Function
        onSyncFail: Function
    }

    export class CrudManager extends AbstractCrudManager implements ProjectCrudManagerClass, JsonEncoderClass, AjaxTransportClass {
        assignmentStore: AssignmentStore
        readonly changes: object
        readonly crudRevision: number
        crudStores: object[]
        dependencyStore: DependencyStore
        eventStore: EventStore
        forceSync: boolean
        readonly isCrudManagerLoading: boolean
        readonly isCrudManagerSyncing: boolean
        loadUrl: string
        resourceStore: ResourceStore
        resourceTimeRangeStore: Store
        syncApplySequence: object[]
        syncUrl: string
        timeRangeStore: Store
        onBeforeDestroy: Function
        onBeforeLoad: Function
        onBeforeLoadApply: Function
        onBeforeResponseApply: Function
        onBeforeSend: Function
        onBeforeSync: Function
        onBeforeSyncApply: Function
        onCatchAll: Function
        onDestroy: Function
        onHasChanges: Function
        onLoad: Function
        onLoadCanceled: Function
        onLoadFail: Function
        onNoChanges: Function
        onRequestDone: Function
        onRequestFail: Function
        onSync: Function
        onSyncCanceled: Function
        onSyncDelayed: Function
        onSyncFail: Function
        constructor(config?: Partial<CrudManagerConfig>);
        acceptChanges(): void;
        addCrudStore(store: Store|string|object|Store[]|string[]|object[]|Partial<StoreConfig>|Partial<StoreConfig>[], position?: number, fromStore?: string|Store|object|Partial<StoreConfig>): void;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        addStoreToApplySequence(store: Store|object|Store[]|object[]|Partial<StoreConfig>|Partial<StoreConfig>[], position?: number, fromStore?: string|Store|object|Partial<StoreConfig>): void;
        applyChangeset(changes: object, transformFn?: Function, phantomIdField?: string): void;
        cancelRequest(requestPromise: Promise<any>): void;
        crudStoreHasChanges(storeId?: string|Store): boolean;
        decode(responseText: string): object;
        encode(requestData: object): string;
        getCrudStore(storeId: string): Store;
        getStoreDescriptor(storeId: string|Store): object;
        hasListener(eventName: string): boolean;
        load(options?: object|string): Promise<any>;
        loadCrudManagerData(response: object, options?: object): void;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeCrudStore(store: object|string|Store|Partial<StoreConfig>): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        removeStoreFromApplySequence(store: object|string|Store|Partial<StoreConfig>): void;
        resumeAutoSync(doSync?: boolean): void;
        resumeEvents(): boolean;
        revertChanges(): void;
        sendRequest(request: object): Promise<any>;
        suspendAutoSync(): void;
        suspendEvents(queue?: boolean): void;
        sync(): Promise<any>;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
    }

    type DependencyStoreConfig = {
        allowNoId: boolean
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoCommit: boolean
        autoLoad: boolean
        autoTree: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        chainedFields: string[]
        chainedFilterFn: Function
        createUrl: string
        data: object[]|Model[]|Partial<ModelConfig>[]
        deleteUrl: string
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        fetchOptions: object
        fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        filterParamName: string
        filters: object|object[]
        fireRemoveEventForMoveAction: boolean
        groupers: object[]
        headers: object
        httpMethods: HttpMethods
        id: string|number
        ignoreRemoteChangesInSTM: boolean
        keepUncommittedChanges: boolean
        listeners: object
        masterStore: Store
        modelClass: typeof Model
        pageParamName: string
        pageSize: number
        pageSizeParamName: string
        pageStartParamName: string
        params: object
        parentIdParamName: string
        readUrl: string
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        reapplySortersOnAdd: boolean
        responseDataProperty: string
        responseSuccessProperty: string
        responseTotalProperty: string
        restfulFilter: boolean
        sendAsFormData: boolean
        sortParamName: string
        sorters: object[]|string[]
        stm: StateTrackingManager
        storage: Collection|object|Partial<CollectionConfig>
        syncDataOnLoad: boolean|object
        transformFlatData: boolean
        tree: boolean
        updateUrl: string
        useLocaleSort: boolean|string|object
        useRawData: boolean|object
        useRestfulMethods: boolean
        verifyNoGeneratedIds: boolean
        writeAllFields: boolean
        onAdd: Function
        onAddConfirmed: Function
        onAfterRequest: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeLoad: Function
        onBeforeLoadChildren: Function
        onBeforeLoadPage: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeRequest: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onCommit: Function
        onCommitAdded: Function
        onCommitModified: Function
        onCommitRemoved: Function
        onDestroy: Function
        onException: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onLoad: Function
        onLoadChildren: Function
        onLoadChildrenStart: Function
        onLoadStart: Function
        onMove: Function
        onOutdent: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
    }

    export class DependencyStore extends AjaxStore implements PartOfProjectClass, DependencyStoreMixinClass {
        readonly assignmentStore: AssignmentStore
        data: object[]
        readonly dependencyStore: DependencyStore
        readonly eventStore: EventStore
        readonly project: ProjectModel
        readonly resourceStore: ResourceStore
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onCatchAll: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIndent: Function
        onOutdent: Function
        onRemove: Function
        onRemoveAll: Function
        onSort: Function
        constructor(config?: Partial<DependencyStoreConfig>);
        add(records: DependencyModel|DependencyModel[]|object|object[]|Partial<DependencyModelConfig>|Partial<DependencyModelConfig>[], silent?: boolean): DependencyModel[];
        addAsync(records: DependencyModel|DependencyModel[]|object|object[]|Partial<DependencyModelConfig>|Partial<DependencyModelConfig>[], silent?: boolean): Promise<DependencyModel[]>;
        getDependencyForSourceAndTargetEvents(sourceEvent: EventModel|string, targetEvent: EventModel|string): DependencyModel;
        getEventDependencies(event: EventModel): DependencyModel[];
        getEventsLinkingDependency(sourceEvent: EventModel|string, targetEvent: EventModel|string): DependencyModel;
        getHighlightedDependencies(cls: string): DependencyBaseModel[];
        isValidDependency(dependencyOrFromId: DependencyModel|TimeSpan|number|string, toId?: TimeSpan|number|string, type?: number): Promise<boolean>;
        isValidDependencyToCreate(fromId: TimeSpan|number|string, toId: TimeSpan|number|string, type: number): boolean;
        loadDataAsync(data: object[]): Promise<void>;
    }

    type EventStoreConfig = {
        allowNoId: boolean
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoCommit: boolean
        autoLoad: boolean
        autoTree: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        chainedFields: string[]
        chainedFilterFn: Function
        createUrl: string
        data: object[]|Model[]|Partial<ModelConfig>[]
        deleteUrl: string
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        fetchOptions: object
        fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        filterParamName: string
        filters: object|object[]
        fireRemoveEventForMoveAction: boolean
        groupers: object[]
        headers: object
        httpMethods: HttpMethods
        id: string|number
        ignoreRemoteChangesInSTM: boolean
        keepUncommittedChanges: boolean
        listeners: object
        masterStore: Store
        modelClass: EventModel
        pageParamName: string
        pageSize: number
        pageSizeParamName: string
        pageStartParamName: string
        params: object
        parentIdParamName: string
        readUrl: string
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        reapplySortersOnAdd: boolean
        removeUnassignedEvent: boolean
        responseDataProperty: string
        responseSuccessProperty: string
        responseTotalProperty: string
        restfulFilter: boolean
        sendAsFormData: boolean
        singleAssignment: boolean
        sortParamName: string
        sorters: object[]|string[]
        stm: StateTrackingManager
        storage: Collection|object|Partial<CollectionConfig>
        syncDataOnLoad: boolean|object
        transformFlatData: boolean
        tree: boolean
        updateUrl: string
        useLocaleSort: boolean|string|object
        useRawData: boolean|object
        useRestfulMethods: boolean
        verifyNoGeneratedIds: boolean
        writeAllFields: boolean
        onAdd: Function
        onAddConfirmed: Function
        onAfterRequest: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeLoad: Function
        onBeforeLoadChildren: Function
        onBeforeLoadPage: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeRequest: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onCommit: Function
        onCommitAdded: Function
        onCommitModified: Function
        onCommitRemoved: Function
        onDestroy: Function
        onException: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onLoad: Function
        onLoadChildren: Function
        onLoadChildrenStart: Function
        onLoadDateRange: Function
        onLoadStart: Function
        onMove: Function
        onOutdent: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
    }

    export class EventStore extends AjaxStore implements PartOfProjectClass, SharedEventStoreMixinClass, EventStoreMixinClass, RecurringEventsMixinClass, GetEventsMixinClass {
        readonly assignmentStore: AssignmentStore
        data: object[]
        readonly dependencyStore: DependencyStore
        readonly eventStore: EventStore
        modelClass: typeof EventModel
        readonly project: ProjectModel
        readonly resourceStore: ResourceStore
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onCatchAll: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIndent: Function
        onLoadDateRange: Function
        onOutdent: Function
        onRemove: Function
        onRemoveAll: Function
        onSort: Function
        constructor(config?: Partial<EventStoreConfig>);
        add(records: EventModel|EventModel[]|object|object[]|Partial<EventModelConfig>|Partial<EventModelConfig>[], silent?: boolean): EventModel[];
        addAsync(records: EventModel|EventModel[]|object|object[]|Partial<EventModelConfig>|Partial<EventModelConfig>[], silent?: boolean): Promise<EventModel[]>;
        append(record: EventModel): void;
        assignEventToResource(event: EventModel|string|number, resource: ResourceModel|string|number|ResourceModel[]|string[]|number[], removeExistingAssignments?: boolean): AssignmentModel[];
        forEachScheduledEvent(fn: Function, thisObj?: object): void;
        getAssignmentsForEvent(event: EventModel|string|number): AssignmentModel[];
        getAssignmentsForResource(resource: ResourceModel|string|number): AssignmentModel[];
        getEventCounts(options: object): void;
        getEvents(options: object): EventModel[]|Map<any, any>;
        getEventsForResource(resource: ResourceModel|string|number): EventModel[];
        getRecurringEvents(): EventModel[];
        getRecurringTimeSpans(): TimeSpan[];
        getResourcesForEvent(event: EventModel|string|number): ResourceModel[];
        getTotalTimeSpan(): object;
        isDateRangeAvailable(start: Date, end: Date, excludeEvent: EventModel|null, resource: ResourceModel): boolean;
        isEventAssignedToResource(event: EventModel|string|number, resource: ResourceModel|string|number): boolean;
        isEventPersistable(event: EventModel): boolean;
        loadDataAsync(data: object[]): Promise<void>;
        reassignEventFromResourceToResource(event: EventModel, oldResource: ResourceModel|ResourceModel[], newResource: ResourceModel|ResourceModel[]): void;
        removeAssignmentsForEvent(event: EventModel|string|number): void;
        removeAssignmentsForResource(resource: ResourceModel|string|number): void;
        unassignEventFromResource(event: EventModel|string|number, resource: ResourceModel|string|number): void;
    }

    type ResourceStoreConfig = {
        allowNoId: boolean
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoCommit: boolean
        autoLoad: boolean
        autoTree: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        chainedFields: string[]
        chainedFilterFn: Function
        createUrl: string
        data: object[]|Model[]|Partial<ModelConfig>[]
        deleteUrl: string
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        fetchOptions: object
        fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        filterParamName: string
        filters: object|object[]
        fireRemoveEventForMoveAction: boolean
        groupers: object[]
        headers: object
        httpMethods: HttpMethods
        id: string|number
        ignoreRemoteChangesInSTM: boolean
        keepUncommittedChanges: boolean
        listeners: object
        masterStore: Store
        modelClass: typeof Model
        pageParamName: string
        pageSize: number
        pageSizeParamName: string
        pageStartParamName: string
        params: object
        parentIdParamName: string
        readUrl: string
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        reapplySortersOnAdd: boolean
        responseDataProperty: string
        responseSuccessProperty: string
        responseTotalProperty: string
        restfulFilter: boolean
        sendAsFormData: boolean
        sortParamName: string
        sorters: object[]|string[]
        stm: StateTrackingManager
        storage: Collection|object|Partial<CollectionConfig>
        syncDataOnLoad: boolean|object
        transformFlatData: boolean
        tree: boolean
        updateUrl: string
        useLocaleSort: boolean|string|object
        useRawData: boolean|object
        useRestfulMethods: boolean
        verifyNoGeneratedIds: boolean
        writeAllFields: boolean
        onAdd: Function
        onAddConfirmed: Function
        onAfterRequest: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeLoad: Function
        onBeforeLoadChildren: Function
        onBeforeLoadPage: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeRequest: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onCommit: Function
        onCommitAdded: Function
        onCommitModified: Function
        onCommitRemoved: Function
        onDestroy: Function
        onException: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onLoad: Function
        onLoadChildren: Function
        onLoadChildrenStart: Function
        onLoadStart: Function
        onMove: Function
        onOutdent: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
    }

    export class ResourceStore extends AjaxStore implements PartOfProjectClass, ResourceStoreMixinClass {
        readonly assignmentStore: AssignmentStore
        data: object[]
        readonly dependencyStore: DependencyStore
        readonly eventStore: EventStore
        readonly project: ProjectModel
        readonly resourceStore: ResourceStore
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onCatchAll: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIndent: Function
        onOutdent: Function
        onRemove: Function
        onRemoveAll: Function
        onSort: Function
        constructor(config?: Partial<ResourceStoreConfig>);
        add(records: ResourceModel|ResourceModel[]|object|object[]|Partial<ResourceModelConfig>|Partial<ResourceModelConfig>[], silent?: boolean): ResourceModel[];
        addAsync(records: ResourceModel|ResourceModel[]|object|object[]|Partial<ResourceModelConfig>|Partial<ResourceModelConfig>[], silent?: boolean): Promise<ResourceModel[]>;
        getAvailableResources(startDate: Date, endDate: Date): ResourceModel[];
        loadDataAsync(data: object[]): Promise<void>;
    }

    type ResourceTimeRangeStoreConfig = {
        allowNoId: boolean
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoCommit: boolean
        autoLoad: boolean
        autoTree: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        chainedFields: string[]
        chainedFilterFn: Function
        createUrl: string
        data: object[]|Model[]|Partial<ModelConfig>[]
        deleteUrl: string
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        fetchOptions: object
        fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        filterParamName: string
        filters: object|object[]
        fireRemoveEventForMoveAction: boolean
        groupers: object[]
        headers: object
        httpMethods: HttpMethods
        id: string|number
        ignoreRemoteChangesInSTM: boolean
        keepUncommittedChanges: boolean
        listeners: object
        masterStore: Store
        modelClass: typeof Model
        pageParamName: string
        pageSize: number
        pageSizeParamName: string
        pageStartParamName: string
        params: object
        parentIdParamName: string
        readUrl: string
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        reapplySortersOnAdd: boolean
        resourceStore: ResourceStore
        responseDataProperty: string
        responseSuccessProperty: string
        responseTotalProperty: string
        restfulFilter: boolean
        sendAsFormData: boolean
        sortParamName: string
        sorters: object[]|string[]
        stm: StateTrackingManager
        storage: Collection|object|Partial<CollectionConfig>
        syncDataOnLoad: boolean|object
        transformFlatData: boolean
        tree: boolean
        updateUrl: string
        useLocaleSort: boolean|string|object
        useRawData: boolean|object
        useRestfulMethods: boolean
        verifyNoGeneratedIds: boolean
        writeAllFields: boolean
        onAdd: Function
        onAddConfirmed: Function
        onAfterRequest: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeLoad: Function
        onBeforeLoadChildren: Function
        onBeforeLoadPage: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeRequest: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onCommit: Function
        onCommitAdded: Function
        onCommitModified: Function
        onCommitRemoved: Function
        onDestroy: Function
        onException: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onLoad: Function
        onLoadChildren: Function
        onLoadChildrenStart: Function
        onLoadStart: Function
        onMove: Function
        onOutdent: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
    }

    export class ResourceTimeRangeStore extends AjaxStore {
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onCatchAll: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIndent: Function
        onOutdent: Function
        onRemove: Function
        onRemoveAll: Function
        onSort: Function
        constructor(config?: Partial<ResourceTimeRangeStoreConfig>);
        getRanges(options: object): ResourceTimeRangeModel[];
    }

    type TimeAxisConfig = {
        allowNoId: boolean
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoAdjust: boolean
        autoCommit: boolean
        autoTree: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        chainedFields: string[]
        chainedFilterFn: Function
        continuous: boolean
        data: object[]|Model[]|Partial<ModelConfig>[]
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        filters: object|object[]
        fireRemoveEventForMoveAction: boolean
        generateTicks: Function
        groupers: object[]
        id: string|number
        ignoreRemoteChangesInSTM: boolean
        include: object
        keepUncommittedChanges: boolean
        listeners: object
        masterStore: Store
        modelClass: typeof Model
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        reapplySortersOnAdd: boolean
        sorters: object[]|string[]
        stm: StateTrackingManager
        storage: Collection|object|Partial<CollectionConfig>
        syncDataOnLoad: boolean|object
        transformFlatData: boolean
        tree: boolean
        useLocaleSort: boolean|string|object
        useRawData: boolean|object
        verifyNoGeneratedIds: boolean
        onAdd: Function
        onAddConfirmed: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeReconfigure: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onInvalidFilter: Function
        onMove: Function
        onOutdent: Function
        onReconfigure: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
    }

    export class TimeAxis extends Store {
        endDate: Date
        generateTicks: Function
        isContinuous: boolean
        startDate: Date
        ticks: object[]
        viewPreset: ViewPreset
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeReconfigure: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onCatchAll: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIndent: Function
        onInvalidFilter: Function
        onOutdent: Function
        onReconfigure: Function
        onRemove: Function
        onRemoveAll: Function
        onSort: Function
        constructor(config?: Partial<TimeAxisConfig>);
        dateInAxis(date: Date): boolean;
        filterBy(fn: Function, thisObj?: object): Promise<any>|null;
        getDateFromTick(tick: number, roundingMethod?: 'floor'|'round'|'ceil'): Date;
        getTickFromDate(date: Date): number;
        setTimeSpan(newStartDate: Date, newEndDate: Date): void;
        shift(amount: number, unit?: string): void;
        shiftNext(amount?: number): void;
        shiftPrevious(amount?: number): void;
        timeSpanInAxis(start: Date, end: Date): boolean;
    }

    export class AssignmentStoreMixinClass {
        data: object[]
        add(records: AssignmentModel|AssignmentModel[]|object|object[]|Partial<AssignmentModelConfig>|Partial<AssignmentModelConfig>[], silent?: boolean): AssignmentModel[];
        addAsync(records: AssignmentModel|AssignmentModel[]|object|object[]|Partial<AssignmentModelConfig>|Partial<AssignmentModelConfig>[], silent?: boolean): Promise<AssignmentModel[]>;
        assignEventToResource(event: TimeSpan, resources: ResourceModel|ResourceModel[], assignmentSetupFn?: Function, removeExistingAssignments?: boolean): AssignmentModel[];
        getAssignmentForEventAndResource(event: EventModel|string|number, resource: ResourceModel|string|number): AssignmentModel;
        getAssignmentsForEvent(event: TimeSpan): AssignmentModel[];
        getAssignmentsForResource(resource: ResourceModel): AssignmentModel[];
        getEventsForResource(resource: ResourceModel|string|number): TimeSpan[];
        getResourcesForEvent(event: EventModel): ResourceModel[];
        isEventAssignedToResource(event: EventModel|string|number, resource: ResourceModel|string|number): boolean;
        loadDataAsync(data: object[]): Promise<void>;
        mapAssignmentsForEvent(event: EventModel, fn?: Function, filterFn?: Function): EventModel[]|any[];
        mapAssignmentsForResource(resource: ResourceModel|number|string, fn?: Function, filterFn?: Function): ResourceModel[]|any[];
        removeAssignmentsForEvent(event: TimeSpan): void;
        removeAssignmentsForResource(resource: ResourceModel|any): void;
        unassignEventFromResource(event: TimeSpan|string|number, resources?: ResourceModel|string|number): AssignmentModel|AssignmentModel[];
    }

    export const AssignmentStoreMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & AssignmentStoreMixinClass>

    export class AttachToProjectMixinClass {
        attachToAssignmentStore(store: AssignmentStore): void;
        attachToCalendarManagerStore(store: Store): void;
        attachToDependencyStore(store: DependencyStore): void;
        attachToEventStore(store: EventStore): void;
        attachToProject(project: ProjectModel): void;
        attachToResourceStore(store: ResourceStore): void;
    }

    export const AttachToProjectMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & AttachToProjectMixinClass>

    export class DependencyStoreMixinClass {
        data: object[]
        add(records: DependencyModel|DependencyModel[]|object|object[]|Partial<DependencyModelConfig>|Partial<DependencyModelConfig>[], silent?: boolean): DependencyModel[];
        addAsync(records: DependencyModel|DependencyModel[]|object|object[]|Partial<DependencyModelConfig>|Partial<DependencyModelConfig>[], silent?: boolean): Promise<DependencyModel[]>;
        getDependencyForSourceAndTargetEvents(sourceEvent: EventModel|string, targetEvent: EventModel|string): DependencyModel;
        getEventDependencies(event: EventModel): DependencyModel[];
        getEventsLinkingDependency(sourceEvent: EventModel|string, targetEvent: EventModel|string): DependencyModel;
        getHighlightedDependencies(cls: string): DependencyBaseModel[];
        isValidDependency(dependencyOrFromId: DependencyModel|TimeSpan|number|string, toId?: TimeSpan|number|string, type?: number): Promise<boolean>;
        isValidDependencyToCreate(fromId: TimeSpan|number|string, toId: TimeSpan|number|string, type: number): boolean;
        loadDataAsync(data: object[]): Promise<void>;
    }

    export const DependencyStoreMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & DependencyStoreMixinClass>

    export class EventStoreMixinClass {
        assignEventToResource(event: EventModel|string|number, resource: ResourceModel|string|number|ResourceModel[]|string[]|number[], removeExistingAssignments?: boolean): AssignmentModel[];
        forEachScheduledEvent(fn: Function, thisObj?: object): void;
        getAssignmentsForEvent(event: EventModel|string|number): AssignmentModel[];
        getAssignmentsForResource(resource: ResourceModel|string|number): AssignmentModel[];
        getEventCounts(options: object): void;
        getEventsForResource(resource: ResourceModel|string|number): EventModel[];
        getResourcesForEvent(event: EventModel|string|number): ResourceModel[];
        getTotalTimeSpan(): object;
        isDateRangeAvailable(start: Date, end: Date, excludeEvent: EventModel|null, resource: ResourceModel): boolean;
        isEventAssignedToResource(event: EventModel|string|number, resource: ResourceModel|string|number): boolean;
        isEventPersistable(event: EventModel): boolean;
        reassignEventFromResourceToResource(event: EventModel, oldResource: ResourceModel|ResourceModel[], newResource: ResourceModel|ResourceModel[]): void;
        removeAssignmentsForEvent(event: EventModel|string|number): void;
        removeAssignmentsForResource(resource: ResourceModel|string|number): void;
        unassignEventFromResource(event: EventModel|string|number, resource: ResourceModel|string|number): void;
    }

    export const EventStoreMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & EventStoreMixinClass>

    type GetEventsMixinClassConfig = {
        onLoadDateRange: Function
    }

    export class GetEventsMixinClass {
        onLoadDateRange: Function
        getEvents(options: object): EventModel[]|Map<any, any>;
    }

    export const GetEventsMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & GetEventsMixinClass>

    export class PartOfProjectClass {
        readonly assignmentStore: AssignmentStore
        readonly dependencyStore: DependencyStore
        readonly eventStore: EventStore
        readonly project: ProjectModel
        readonly resourceStore: ResourceStore
    }

    export const PartOfProject : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & PartOfProjectClass>

    type ProjectConsumerClassConfig = {
        destroyStores: boolean
        project: ProjectModel|object|Partial<ProjectModelConfig>
        onDataChange: Function
    }

    export class ProjectConsumerClass {
        isEngineReady: boolean
        project: ProjectModel
        onDataChange: Function
        constructor(config?: Partial<ProjectConsumerClassConfig>);
        updateProject(project: ProjectModel): void;
        whenProjectReady(callback: Function): void;
    }

    export const ProjectConsumer : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & ProjectConsumerClass>

    type ProjectCrudManagerClassConfig = {
        autoLoad: boolean
        autoSync: boolean
        autoSyncTimeout: number
        bubbleEvents: object
        callOnFunctions: boolean
        crudStores: Store[]|string[]|object[]|Partial<StoreConfig>[]
        encoder: object
        forceSync: boolean
        listeners: object
        loadUrl: string
        phantomIdField: string
        phantomParentIdField: string
        resetIdsBeforeSync: boolean
        skipSuccessProperty: boolean
        storeIdProperty: string
        supportShortSyncResponse: boolean
        syncApplySequence: string[]
        syncUrl: string
        trackResponseType: boolean
        transport: object
        validateResponse: boolean
        writeAllFields: boolean
        onBeforeDestroy: Function
        onBeforeLoad: Function
        onBeforeLoadApply: Function
        onBeforeResponseApply: Function
        onBeforeSend: Function
        onBeforeSync: Function
        onBeforeSyncApply: Function
        onCatchAll: Function
        onDestroy: Function
        onHasChanges: Function
        onLoad: Function
        onLoadCanceled: Function
        onLoadFail: Function
        onNoChanges: Function
        onRequestDone: Function
        onRequestFail: Function
        onSync: Function
        onSyncCanceled: Function
        onSyncDelayed: Function
        onSyncFail: Function
    }

    export class ProjectCrudManagerClass implements AbstractCrudManagerMixinClass, AjaxTransportClass, JsonEncoderClass {
        readonly changes: object
        readonly crudRevision: number
        crudStores: object[]
        forceSync: boolean
        readonly isCrudManagerLoading: boolean
        readonly isCrudManagerSyncing: boolean
        loadUrl: string
        syncApplySequence: object[]
        syncUrl: string
        onBeforeDestroy: Function
        onBeforeLoad: Function
        onBeforeLoadApply: Function
        onBeforeResponseApply: Function
        onBeforeSend: Function
        onBeforeSync: Function
        onBeforeSyncApply: Function
        onCatchAll: Function
        onDestroy: Function
        onHasChanges: Function
        onLoad: Function
        onLoadCanceled: Function
        onLoadFail: Function
        onNoChanges: Function
        onRequestDone: Function
        onRequestFail: Function
        onSync: Function
        onSyncCanceled: Function
        onSyncDelayed: Function
        onSyncFail: Function
        constructor(config?: Partial<ProjectCrudManagerClassConfig>);
        acceptChanges(): void;
        addCrudStore(store: Store|string|object|Store[]|string[]|object[]|Partial<StoreConfig>|Partial<StoreConfig>[], position?: number, fromStore?: string|Store|object|Partial<StoreConfig>): void;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        addStoreToApplySequence(store: Store|object|Store[]|object[]|Partial<StoreConfig>|Partial<StoreConfig>[], position?: number, fromStore?: string|Store|object|Partial<StoreConfig>): void;
        applyChangeset(changes: object, transformFn?: Function, phantomIdField?: string): void;
        cancelRequest(requestPromise: Promise<any>): void;
        crudStoreHasChanges(storeId?: string|Store): boolean;
        decode(responseText: string): object;
        encode(requestData: object): string;
        getCrudStore(storeId: string): Store;
        getStoreDescriptor(storeId: string|Store): object;
        hasListener(eventName: string): boolean;
        load(options?: object|string): Promise<any>;
        loadCrudManagerData(response: object, options?: object): void;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeCrudStore(store: object|string|Store|Partial<StoreConfig>): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        removeStoreFromApplySequence(store: object|string|Store|Partial<StoreConfig>): void;
        resumeAutoSync(doSync?: boolean): void;
        resumeEvents(): boolean;
        revertChanges(): void;
        sendRequest(request: object): Promise<any>;
        suspendAutoSync(): void;
        suspendEvents(queue?: boolean): void;
        sync(): Promise<any>;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
    }

    export const ProjectCrudManager : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & ProjectCrudManagerClass>

    export class RecurringEventsMixinClass extends RecurringTimeSpansMixinClass {
        getRecurringEvents(): EventModel[];
    }

    export const RecurringEventsMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & RecurringEventsMixinClass>

    export class RecurringTimeSpansMixinClass {
        getRecurringTimeSpans(): TimeSpan[];
    }

    export const RecurringTimeSpansMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & RecurringTimeSpansMixinClass>

    export class ResourceStoreMixinClass {
        data: object[]
        add(records: ResourceModel|ResourceModel[]|object|object[]|Partial<ResourceModelConfig>|Partial<ResourceModelConfig>[], silent?: boolean): ResourceModel[];
        addAsync(records: ResourceModel|ResourceModel[]|object|object[]|Partial<ResourceModelConfig>|Partial<ResourceModelConfig>[], silent?: boolean): Promise<ResourceModel[]>;
        getAvailableResources(startDate: Date, endDate: Date): ResourceModel[];
        loadDataAsync(data: object[]): Promise<void>;
    }

    export const ResourceStoreMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & ResourceStoreMixinClass>

    type SharedEventStoreMixinClassConfig = {
        removeUnassignedEvent: boolean
        singleAssignment: boolean
    }

    export class SharedEventStoreMixinClass {
        data: object[]
        modelClass: typeof EventModel
        constructor(config?: Partial<SharedEventStoreMixinClassConfig>);
        add(records: EventModel|EventModel[]|object|object[]|Partial<EventModelConfig>|Partial<EventModelConfig>[], silent?: boolean): EventModel[];
        addAsync(records: EventModel|EventModel[]|object|object[]|Partial<EventModelConfig>|Partial<EventModelConfig>[], silent?: boolean): Promise<EventModel[]>;
        append(record: EventModel): void;
        loadDataAsync(data: object[]): Promise<void>;
    }

    export const SharedEventStoreMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & SharedEventStoreMixinClass>

    type RecurrenceLegendConfig = {
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
    }

    export class RecurrenceLegend implements LocalizableClass {
        readonly localeManager: typeof LocaleManager
        constructor(config?: Partial<RecurrenceLegendConfig>);
        static L(text: string, templateData?: object): string;
        static getLegend(recurrenceRecurrence: RecurrenceModel, timeSpanStartDate?: Date): string;
        static optionalL(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        updateLocalization(): void;
    }

    type AbstractTimeRangesConfig = {
        bodyRenderer: Function
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        enableResizing: boolean
        headerRenderer: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        showHeaderElements: boolean
        showTooltip: boolean|Partial<TooltipConfig>
        tooltipTemplate: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export abstract class AbstractTimeRanges extends InstancePlugin implements DelayableClass {
        showHeaderElements: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<AbstractTimeRangesConfig>);
        getTipHtml(): void;
        shouldRenderRange(range: TimeSpan, startDate?: Date, endDate?: Date): boolean;
    }

    type ColumnLinesConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ColumnLines extends InstancePlugin implements DelayableClass {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ColumnLinesConfig>);
    }

    type DependenciesConfig = {
        allowCreate: boolean
        allowDropOnEventBar: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        clickWidth: number
        client: Widget
        creationTooltip: Partial<TooltipConfig>
        creationTooltipTemplate: Function
        disabled: boolean
        drawOnScroll: boolean
        highlightDependenciesOnEventHover: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        markerDef: string
        radius: number
        renderer: Function
        showCreationTooltip: boolean
        showTooltip: boolean
        terminalCls: string
        terminalSides: string[]
        tooltip: Partial<TooltipConfig>
        tooltipTemplate: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class Dependencies extends InstancePlugin implements DelayableClass, DependencyCreationClass, DependencyTooltipClass {
        allowDropOnEventBar: boolean
        clickWidth: number
        creationTooltipTemplate: Function
        drawOnScroll: boolean
        highlightDependenciesOnEventHover: boolean
        renderer: Function
        tooltipTemplate: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<DependenciesConfig>);
        abort(): void;
        // @deprecated
        drawForEvent(): void;
        hideTerminals(eventElement: HTMLElement): void;
        refresh(): void;
        resolveDependencyRecord(element: HTMLElement): DependencyModel;
        showTerminals(timeSpanRecord: TimeSpan, element: HTMLElement): void;
    }

    type DependencyEditConfig = {
        autoClose: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        editorConfig: Partial<PopupConfig>
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        saveAndCloseOnEnter: boolean
        showDeleteButton: boolean
        showLagField: boolean
        triggerEvent: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class DependencyEdit extends InstancePlugin {
        readonly cancelButton: Button
        readonly deleteButton: Button
        readonly fromNameField: DisplayField
        readonly lagField: DurationField
        readonly saveButton: Button
        readonly toNameField: DisplayField
        readonly typeField: Combo
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<DependencyEditConfig>);
        editDependency(dependencyRecord: DependencyModel): void;
        onAfterSave(dependencyRecord: DependencyModel): void;
        onBeforeSave(dependencyRecord: DependencyModel): void;
    }

    type EventCopyPasteConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        copyPasteAction: 'clone'|'assign'
        disabled: boolean
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        nameField: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EventCopyPaste extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventCopyPasteConfig>);
        clearClipboard(): void;
        copyEvents(records?: EventModel[]|AssignmentModel[], isCut?: boolean): void;
        generateNewName(eventRecord: EventModel): string;
        pasteEvents(date?: Date, resourceRecord?: ResourceModel): void;
    }

    type EventDragConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        constrainDragToResource: boolean
        constrainDragToTimeSlot: boolean
        constrainDragToTimeline: boolean
        copyKey: 'CTRL'|'ALT'|'SHIFT'|'META'|''
        copyMode: 'auto'|'assignment'|'event'
        disabled: boolean
        dragHelperConfig: Partial<DragHelperConfig>
        externalDropTargetSelector: string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        showExactDropPosition: boolean
        showTooltip: boolean
        snapToPosition: Function
        throttleDragEvent: boolean
        tip: Partial<TooltipConfig>
        tooltipTemplate: Function
        unifiedDrag: boolean
        validatorFn: Function
        validatorFnThisObj: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EventDrag extends DragBase {
        constrainDragToResource: boolean
        constrainDragToTimeSlot: boolean
        copyKey: 'CTRL'|'ALT'|'SHIFT'|'META'|''
        copyMode: 'auto'|'assignment'|'event'
        readonly mode: 'move'|'copy'
        unifiedDrag: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventDragConfig>);
        getRelatedRecords(assignmentRecord: AssignmentModel): AssignmentModel[];
    }

    type EventDragCreateConfig = {
        allowResizeToZero: boolean
        bottomHandle: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        dragThreshold: number
        dragTolerance: number
        dynamicHandleSize: boolean
        // @deprecated
        handleSize: number
        leftHandle: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        lockLayout: boolean
        reservedSpace: number
        rightHandle: boolean
        showExactResizePosition: boolean
        showTooltip: boolean
        tip: Tooltip|object|Partial<TooltipConfig>
        tooltipTemplate: Function
        topHandle: boolean
        // @deprecated
        touchHandleSize: number
        validatorFn: Function
        validatorFnThisObj: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EventDragCreate extends DragCreateBase {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventDragCreateConfig>);
    }

    type EventDragSelectConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EventDragSelect extends InstancePlugin implements DelayableClass {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventDragSelectConfig>);
    }

    type SchedulerEventEditConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        dateFormat: string
        disabled: boolean
        editorConfig: object
        items: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        readOnly: boolean
        saveAndCloseOnEnter: boolean
        showRecurringUI: boolean
        timeFormat: string
        triggerEvent: string
        typeField: string
        weekStartDay: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class SchedulerEventEdit extends EditBase implements RecurringEventEditClass {
        readonly cancelButton: Button
        readonly deleteButton: Button
        readonly editRecurrenceButton: RecurrenceLegendButton
        editor: Popup
        readonly endDateField: DateField
        readonly endTimeField: TimeField
        readonly eventRecord: EventModel
        readonly isEditing: boolean
        readonly nameField: TextField
        readOnly: boolean
        readonly recurrenceCombo: RecurrenceCombo
        readonly resourceField: Combo
        readonly saveButton: Button
        readonly startDateField: DateField
        readonly startTimeField: TimeField
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SchedulerEventEditConfig>);
        editEvent(eventRecord: EventModel, resourceRecord?: ResourceModel, element?: HTMLElement): void;
    }

    type EventFilterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EventFilter extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventFilterConfig>);
    }

    type SchedulerEventMenuConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        items: object
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        menu: object
        processItems: Function
        triggerEvent: string|boolean
        type: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class SchedulerEventMenu extends TimeSpanMenuBase {
        readonly menuContext: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SchedulerEventMenuConfig>);
        showContextMenuFor(eventRecord: EventModel, options?: object): void;
    }

    type EventNonWorkingTimeConfig = {
        bodyRenderer: Function
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        enableResizing: boolean
        headerRenderer: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        maxTimeAxisUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        showHeaderElements: boolean
        showTooltip: boolean|Partial<TooltipConfig>
        tooltipTemplate: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EventNonWorkingTime extends AbstractTimeRanges implements NonWorkingTimeMixinClass {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventNonWorkingTimeConfig>);
    }

    type EventResizeConfig = {
        allowResizeToZero: boolean
        bottomHandle: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        dragThreshold: number
        dynamicHandleSize: boolean
        // @deprecated
        handleSize: number
        leftHandle: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        reservedSpace: number
        rightHandle: boolean
        showExactResizePosition: boolean
        showTooltip: boolean
        tip: Tooltip|object|Partial<TooltipConfig>
        tooltipTemplate: Function
        topHandle: boolean
        // @deprecated
        touchHandleSize: number
        validatorFn: Function
        validatorFnThisObj: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EventResize extends InstancePlugin {
        tip: Tooltip|object|Partial<TooltipConfig>
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EventResizeConfig>);
    }

    type SchedulerEventTooltipConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoShow: boolean
        autoUpdate: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        client: Widget
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dismissDelay: number
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        getHtml: Function|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showOnHover: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        template: Function
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trackMouse: boolean
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onPointerOver: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class SchedulerEventTooltip extends TooltipBase {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onPointerOver: Function
        constructor(config?: Partial<SchedulerEventTooltipConfig>);
    }

    type GroupSummaryConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        collapseToHeader: boolean
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        renderer: Function
        showTooltip: boolean
        summaries: object[]
        target: 'header'|'footer'
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class GroupSummary extends GridGroupSummary {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<GroupSummaryConfig>);
    }

    type HeaderZoomConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class HeaderZoom extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<HeaderZoomConfig>);
    }

    type LabelsConfig = {
        after: object
        before: object
        blurAction: 'complete'|'cancel'
        bottom: object
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        labelCharWidth: number
        labelCls: string
        labelLayoutMode: 'default'|'estimate'|'measure'
        left: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        right: object
        top: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class Labels extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<LabelsConfig>);
    }

    type NonWorkingTimeConfig = {
        bodyRenderer: Function
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        enableResizing: boolean
        headerRenderer: Function
        hideRangesOnZooming: boolean
        // @deprecated
        highlightWeekends: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        maxTimeAxisUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        showHeaderElements: boolean
        showTooltip: boolean|Partial<TooltipConfig>
        tooltipTemplate: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class NonWorkingTime extends AbstractTimeRanges implements NonWorkingTimeMixinClass {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<NonWorkingTimeConfig>);
        shouldRenderRange(range: TimeSpan): boolean;
    }

    type PanConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        enableInHeader: boolean
        horizontal: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        vertical: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class Pan extends InstancePlugin {
        enableInHeader: boolean
        horizontal: boolean
        readonly isActive: boolean
        vertical: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<PanConfig>);
    }

    type ResourceTimeRangesConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        enableMouseEvents: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        tabIndex: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ResourceTimeRanges extends ResourceTimeRangesBase {
        enableMouseEvents: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ResourceTimeRangesConfig>);
        getElementFromResourceTimeRangeRecord(record: ResourceTimeRangeModel): HTMLElement;
        resolveResourceTimeRangeRecord(rangeElement: HTMLElement): ResourceTimeRangeModel;
    }

    type ScheduleContextConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        renderer: string|Function
        triggerEvent: 'click'|'hover'|'contextmenu'|'mousedown'
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ScheduleContext extends InstancePlugin {
        context: object
        readonly timelineContext: TimelineContext
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ScheduleContextConfig>);
    }

    type SchedulerScheduleMenuConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        items: object
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        menu: object
        processItems: Function
        triggerEvent: string|boolean
        type: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class SchedulerScheduleMenu extends TimeSpanMenuBase {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SchedulerScheduleMenuConfig>);
    }

    type ScheduleTooltipConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        hideForNonWorkingTime: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ScheduleTooltip extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ScheduleTooltipConfig>);
        generateTipContent(context: object): string;
        getText(date: Date, event: Event, resourceRecord: ResourceModel): string;
    }

    type SimpleEventEditConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        editorConfig: Partial<EditorConfig>
        field: string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        triggerEvent: string
        onBeforeCancel: Function
        onBeforeComplete: Function
        onBeforeDestroy: Function
        onBeforeStart: Function
        onCancel: Function
        onCatchAll: Function
        onComplete: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
        onStart: Function
    }

    export class SimpleEventEdit extends InstancePlugin {
        readonly eventRecord: EventModel
        onBeforeCancel: Function
        onBeforeComplete: Function
        onBeforeDestroy: Function
        onBeforeStart: Function
        onCancel: Function
        onCatchAll: Function
        onComplete: Function
        onDestroy: Function
        onStart: Function
        constructor(config?: Partial<SimpleEventEditConfig>);
        editEvent(eventRecord: EventModel, resourceRecord?: ResourceModel): void;
    }

    type StickyEventsConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class StickyEvents extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<StickyEventsConfig>);
    }

    type SummaryConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        renderer: Function
        selectedOnly: boolean
        showTooltip: boolean
        summaries: object[]
        verticalSummaryColumnConfig: Partial<ColumnConfig>
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class Summary extends TimelineSummary {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SummaryConfig>);
    }

    type TimeAxisHeaderMenuConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        items: object
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        menu: object
        moveColumns: boolean
        processItems: Function
        triggerEvent: string|boolean
        type: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class TimeAxisHeaderMenu extends HeaderMenu {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TimeAxisHeaderMenuConfig>);
    }

    type TimeRangesConfig = {
        bodyRenderer: Function
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        currentDateFormat: string
        currentTimeLineUpdateInterval: number
        disabled: boolean
        enableResizing: boolean
        headerRenderer: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        showCurrentTimeLine: boolean|object
        showHeaderElements: boolean
        showTooltip: boolean|Partial<TooltipConfig>
        store: Store|object|Partial<StoreConfig>
        tooltipTemplate: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class TimeRanges extends AbstractTimeRanges {
        showCurrentTimeLine: boolean|object
        store: Store
        timeRanges: TimeSpan[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TimeRangesConfig>);
    }

    type TimeSelectionConfig = {
        bodyRenderer: Function
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        enableResizing: boolean
        headerRenderer: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        selectedTimeSpan: object
        showHeaderElements: boolean
        showTooltip: boolean|Partial<TooltipConfig>
        tooltipTemplate: Function
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class TimeSelection extends AbstractTimeRanges {
        selectedTimeSpan: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TimeSelectionConfig>);
    }

    type TimelineSummaryConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        selectedOnly: boolean
        showTooltip: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export abstract class TimelineSummary extends GridSummary {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TimelineSummaryConfig>);
        refresh(): void;
    }

    type DragBaseConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        constrainDragToTimeline: boolean
        disabled: boolean
        dragHelperConfig: Partial<DragHelperConfig>
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        showExactDropPosition: boolean
        showTooltip: boolean
        throttleDragEvent: boolean
        tip: Partial<TooltipConfig>
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export abstract class DragBase extends InstancePlugin {
        readonly isDragging: boolean
        throttleDragEvent: boolean
        tip: Tooltip
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<DragBaseConfig>);
        getTipHtml(): void;
    }

    type DragCreateBaseConfig = {
        allowResizeToZero: boolean
        bottomHandle: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        dragThreshold: number
        dragTolerance: number
        dynamicHandleSize: boolean
        // @deprecated
        handleSize: number
        leftHandle: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        reservedSpace: number
        rightHandle: boolean
        showExactResizePosition: boolean
        showTooltip: boolean
        tip: Tooltip|object|Partial<TooltipConfig>
        tooltipTemplate: Function
        topHandle: boolean
        // @deprecated
        touchHandleSize: number
        validatorFn: Function
        validatorFnThisObj: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class DragCreateBase extends EventResize {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<DragCreateBaseConfig>);
    }

    type EditBaseConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        dateFormat: string
        disabled: boolean
        editorConfig: Partial<PopupConfig>
        items: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        saveAndCloseOnEnter: boolean
        timeFormat: string
        weekStartDay: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class EditBase extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<EditBaseConfig>);
        onAfterSave(eventRecord: EventModel): void;
        onBeforeSave(eventRecord: EventModel): void;
    }

    type ResourceTimeRangesBaseConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        tabIndex: number
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export abstract class ResourceTimeRangesBase extends InstancePlugin {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ResourceTimeRangesBaseConfig>);
    }

    type TimeSpanMenuBaseConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        disabled: boolean
        items: object
        keyMap: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        menu: object
        triggerEvent: string|boolean
        type: string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export abstract class TimeSpanMenuBase extends ContextMenuBase {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<TimeSpanMenuBaseConfig>);
    }

    type TooltipBaseConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoShow: boolean
        autoUpdate: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        client: Widget
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dismissDelay: number
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        getHtml: Function|string
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showOnHover: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trackMouse: boolean
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onPointerOver: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class TooltipBase extends InstancePlugin {
        readonly tooltip: Tooltip
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onPointerOver: Function
        constructor(config?: Partial<TooltipBaseConfig>);
    }

    type ExcelExporterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        convertEmptyValueToEmptyString: boolean
        dateFormat: string
        disabled: boolean
        exporterClass: typeof ScheduleTableExporter
        exporterConfig: object
        filename: string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        zipcelx: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
    }

    export class ExcelExporter extends GridExcelExporter {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ExcelExporterConfig>);
    }

    type PdfExportConfig = {
        alignRows: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        client: Widget
        clientURL: string
        disabled: boolean
        enableDirectRendering: boolean
        exportDialog: Partial<SchedulerExportDialogConfig>
        exportMask: string
        exportProgressMask: string
        exportServer: string
        exporterType: string
        exporters: Exporter[]
        fetchOptions: FetchOptions
        fileFormat: 'pdf'|'png'
        fileName: string
        footerTpl: Function
        headerTpl: Function
        keepPathName: boolean
        keepRegionSizes: object
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        openAfterExport: boolean
        openInNewTab: boolean
        orientation: 'portrait'|'landscape'
        paperFormat: 'A1'|'A2'|'A3'|'A4'|'A5'|'Legal'|'Letter'
        rangeEnd: Date
        rangeStart: Date
        repeatHeader: boolean
        rowsRange: 'all'|'visible'
        scheduleRange: 'completeview'|'currentview'|'daterange'
        sendAsBinary: boolean
        showErrorToast: boolean
        translateURLsToAbsolute: boolean|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onDisable: Function
        onEnable: Function
        onExportStep: Function
    }

    export class PdfExport extends GridPdfExport {
        exportDialog: SchedulerExportDialog
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<PdfExportConfig>);
    }

    type MultiPageExporterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        keepPathName: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        translateURLsToAbsolute: boolean|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class MultiPageExporter extends GridMultiPageExporter {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<MultiPageExporterConfig>);
    }

    type MultiPageVerticalExporterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        keepPathName: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        translateURLsToAbsolute: boolean|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class MultiPageVerticalExporter extends GridMultiPageVerticalExporter {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<MultiPageVerticalExporterConfig>);
    }

    type SinglePageExporterConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        centerContentHorizontally: boolean
        keepPathName: boolean
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        translateURLsToAbsolute: boolean|string
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
    }

    export class SinglePageExporter extends GridSinglePageExporter {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SinglePageExporterConfig>);
    }

    type DependencyCreationClassConfig = {
        allowCreate: boolean
        allowDropOnEventBar: boolean
        creationTooltip: Partial<TooltipConfig>
        creationTooltipTemplate: Function
        showCreationTooltip: boolean
        terminalCls: string
        terminalSides: string[]
    }

    export class DependencyCreationClass {
        allowDropOnEventBar: boolean
        creationTooltipTemplate: Function
        constructor(config?: Partial<DependencyCreationClassConfig>);
        abort(): void;
        hideTerminals(eventElement: HTMLElement): void;
        showTerminals(timeSpanRecord: TimeSpan, element: HTMLElement): void;
    }

    export const DependencyCreation : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & DependencyCreationClass>

    type DependencyTooltipClassConfig = {
        showTooltip: boolean
        tooltip: Partial<TooltipConfig>
        tooltipTemplate: Function
    }

    export class DependencyTooltipClass {
        tooltipTemplate: Function
        constructor(config?: Partial<DependencyTooltipClassConfig>);
    }

    export const DependencyTooltip : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & DependencyTooltipClass>

    type NonWorkingTimeMixinClassConfig = {
        maxTimeAxisUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
    }

    export class NonWorkingTimeMixinClass {
        constructor(config?: Partial<NonWorkingTimeMixinClassConfig>);
    }

    export const NonWorkingTimeMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & NonWorkingTimeMixinClass>

    type RecurringEventEditClassConfig = {
        showRecurringUI: boolean
    }

    export class RecurringEventEditClass {
        readonly editRecurrenceButton: RecurrenceLegendButton
        readonly recurrenceCombo: RecurrenceCombo
        constructor(config?: Partial<RecurringEventEditClassConfig>);
    }

    export const RecurringEventEdit : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & RecurringEventEditClass>

    type AssignmentModelConfig = {
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        drawDependencies: boolean
        event: string|number|EventModel
        eventId: string|number
        id: string|number
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        resource: string|number|ResourceModel
        resourceId: string|number
    }

    export class AssignmentModel extends Model implements AssignmentModelMixinClass {
        drawDependencies: boolean
        event: string|number|EventModel
        eventId: string|number
        readonly eventName: string
        isPersistable: boolean
        resource: string|number|ResourceModel
        resourceId: string|number
        readonly resourceName: string
        constructor(config?: Partial<AssignmentModelConfig>);
        getResource(): ResourceModel;
        setAsync(field: string|object, value: any, silent?: boolean): Promise<void>;
        toString(): string;
    }

    type DependencyBaseModelConfig = {
        bidirectional: boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        from: string|number
        fromEvent: string|number|EventModel
        fromSide: 'top'|'left'|'bottom'|'right'
        id: string|number
        lag: number
        lagUnit: 'ms'|'s'|'m'|'h'|'d'|'w'|'M'|'y'
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        to: string|number
        toEvent: string|number|EventModel
        toSide: 'top'|'left'|'bottom'|'right'
        type: number
    }

    export class DependencyBaseModel extends Model {
        static readonly Type: object
        bidirectional: boolean
        cls: string
        from: string|number
        fromEvent: string|number|EventModel
        fromSide: 'top'|'left'|'bottom'|'right'
        fullLag: Duration
        hardType: number
        readonly isPersistable: boolean
        lag: number
        readonly lagUnit: 'ms'|'s'|'m'|'h'|'d'|'w'|'M'|'y'
        to: string|number
        toEvent: string|number|EventModel
        toSide: 'top'|'left'|'bottom'|'right'
        type: number
        constructor(config?: Partial<DependencyBaseModelConfig>);
        getHardType(): number;
        highlight(cls: string): void;
        isHighlightedWith(cls: string): boolean;
        setAsync(field: string|object, value: any, silent?: boolean): Promise<void>;
        setHardType(type: number): void;
        setLag(lag: number|string|object, lagUnit?: 'ms'|'s'|'m'|'h'|'d'|'w'|'M'|'y'): void;
        unhighlight(cls: string): void;
    }

    type DependencyModelConfig = {
        bidirectional: boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        from: string|number
        fromEvent: string|number|EventModel
        fromSide: 'top'|'left'|'bottom'|'right'
        id: string|number
        lag: number
        lagUnit: 'ms'|'s'|'m'|'h'|'d'|'w'|'M'|'y'
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        to: string|number
        toEvent: string|number|EventModel
        toSide: 'top'|'left'|'bottom'|'right'
        type: number
    }

    export class DependencyModel extends DependencyBaseModel {
        constructor(config?: Partial<DependencyModelConfig>);
    }

    type EventModelConfig = {
        allDay: boolean
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: DomClassList|string|string[]|object
        draggable: boolean
        duration: number
        durationUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        endDate: string|Date
        eventColor: string
        eventStyle: string
        exceptionDates: string|string[]
        iconCls: string
        id: string|number
        milestoneWidth: number
        name: string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        recurrenceRule: string
        resizable: boolean|string
        resourceId: string|number
        resources: string|number
        startDate: string|Date
        stickyContents: boolean
        style: string
    }

    export class EventModel extends TimeSpan implements RecurringTimeSpanClass, EventModelMixinClass {
        allDay: boolean
        readonly assignments: AssignmentModel[]
        draggable: boolean
        duration: number
        endDate: string|Date
        eventColor: string
        eventStyle: string
        exceptionDates: string|string[]
        fullDuration: Duration
        id: string|number
        isDraggable: boolean
        readonly isInterDay: boolean
        readonly isOccurrence: boolean
        readonly isPersistable: boolean
        readonly isRecurring: boolean
        readonly isResizable: boolean|string
        milestoneWidth: number
        readonly occurrenceIndex: number
        readonly predecessors: DependencyBaseModel[]
        recurrence: RecurrenceModel
        recurrenceModel: string
        recurrenceRule: string
        resizable: boolean|string
        resource: ResourceModel
        resourceId: string|number
        readonly resources: ResourceModel[]
        startDate: string|Date
        stickyContents: boolean
        readonly successors: DependencyBaseModel[]
        supportsRecurring: boolean
        constructor(config?: Partial<EventModelConfig>);
        assign(resource: ResourceModel|string|number|ResourceModel[]|string[]|number[], removeExistingAssignments?: boolean): void;
        getOccurrencesForDateRange(startDate: Date, endDate?: Date): TimeSpan[];
        getResource(resourceId?: string): ResourceModel;
        hasException(date: Date): boolean;
        isAssignedTo(resource: ResourceModel|string|number): boolean;
        isEditable(fieldName: string): boolean;
        reassign(oldResourceId: ResourceModel|string|number, newResourceId: ResourceModel|string|number): void;
        remove(): void;
        setAsync(field: string|object, value: any, silent?: boolean): Promise<void>;
        setRecurrence(recurrence: object|string|RecurrenceModel|Partial<RecurrenceModelConfig>, interval?: number, recurrenceEnd?: number|Date): void;
        shift(unit: 'ms'|'s'|'m'|'h'|'d'|'w'|'M'|'y', amount: number): Promise<any>;
        unassign(resource?: ResourceModel|string|number): void;
    }

    type ProjectModelConfig = {
        assignmentModelClass: typeof AssignmentModel
        assignmentStore: AssignmentStore|object|Partial<AssignmentStoreConfig>
        assignmentStoreClass: typeof AssignmentStore|object
        assignments: AssignmentModel[]|object[]|Partial<AssignmentModelConfig>[]
        assignmentsData: AssignmentModel[]
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        dependencies: DependencyModel[]|object[]|Partial<DependencyModelConfig>[]
        dependenciesData: DependencyModel[]
        dependencyModelClass: typeof DependencyModel
        dependencyStore: DependencyStore|object|Partial<DependencyStoreConfig>
        dependencyStoreClass: typeof DependencyStore|object
        eventModelClass: typeof EventModel
        eventStore: EventStore|object|Partial<EventStoreConfig>
        eventStoreClass: typeof EventStore|object
        events: EventModel[]|object[]|Partial<EventModelConfig>[]
        eventsData: EventModel[]
        id: string|number
        json: string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        resourceModelClass: typeof ResourceModel
        resourceStore: ResourceStore|object|Partial<ResourceStoreConfig>
        resourceStoreClass: typeof ResourceStore|object
        resourceTimeRangeStore: ResourceTimeRangeStore|object|Partial<ResourceTimeRangeStoreConfig>
        resourceTimeRangeStoreClass: typeof ResourceTimeRangeStore|object
        resourceTimeRanges: ResourceTimeRangeModel[]|object[]|Partial<ResourceTimeRangeModelConfig>[]
        resourceTimeRangesData: ResourceTimeRangeModel[]
        resources: ResourceModel[]|object[]|Partial<ResourceModelConfig>[]
        resourcesData: ResourceModel[]
        silenceInitialCommit: boolean
        stm: object|StateTrackingManager|Partial<StateTrackingManagerConfig>
        timeRangeStore: Store|object|Partial<StoreConfig>
        timeRangeStoreClass: typeof Store|object
        timeRanges: TimeSpan[]|object[]|Partial<TimeSpanConfig>[]
        timeRangesData: TimeSpan[]
        onChange: Function
        onDataReady: Function
    }

    export class ProjectModel extends Model implements ProjectModelMixinClass {
        assignmentStore: AssignmentStore
        assignments: AssignmentModel[]|object[]|Partial<AssignmentModelConfig>[]
        readonly changes: object
        dependencies: DependencyModel[]|object[]|Partial<DependencyModelConfig>[]
        dependencyStore: DependencyStore
        eventStore: EventStore
        events: EventModel[]|object[]|Partial<EventModelConfig>[]
        inlineData: object
        json: string
        resourceStore: ResourceStore
        resourceTimeRangeStore: ResourceTimeRangeStore
        resourceTimeRanges: ResourceTimeRangeModel[]|object[]|Partial<ResourceTimeRangeModelConfig>[]
        resources: ResourceModel[]|object[]|Partial<ResourceModelConfig>[]
        stm: StateTrackingManager
        timeRangeStore: Store
        timeRanges: TimeSpan[]|object[]|Partial<TimeSpanConfig>[]
        onChange: Function
        onDataReady: Function
        constructor(config?: Partial<ProjectModelConfig>);
        commitAsync(): Promise<void>;
        loadInlineData(dataPackage: object): Promise<void>;
        toJSON(): object;
    }

    type RecurrenceModelConfig = {
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        count: number
        days: string[]
        endDate: Date
        frequency: 'DAILY'|'WEEKLY'|'MONTHLY'|'YEARLY'
        id: string|number
        interval: number
        monthDays: number[]
        months: number[]
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        positions: number
        readOnly: boolean
    }

    export class RecurrenceModel extends Model {
        count: number
        days: string[]
        endDate: Date
        frequency: 'DAILY'|'WEEKLY'|'MONTHLY'|'YEARLY'
        interval: number
        readonly isRecurrenceModel: boolean
        monthDays: number[]
        months: number[]
        positions: number
        rule: string
        timeSpan: TimeSpan
        constructor(config?: Partial<RecurrenceModelConfig>);
    }

    type ResourceModelConfig = {
        barMargin: number
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: string
        columnWidth: number
        eventColor: string
        eventLayout: 'stack'|'pack'|'mixed'|'none'
        eventStyle: string
        expanded: boolean
        href: string
        iconCls: string
        id: string|number
        image: string
        imageUrl: string
        name: string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        resourceMargin: number
        rowHeight: number
        target: '_self'|'_blank'|'_parent'|'_top'|null
    }

    export class ResourceModel extends GridRowModel implements ResourceModelMixinClass {
        assignments: AssignmentModel[]
        barMargin: number
        columnWidth: number
        eventColor: string
        eventLayout: 'stack'|'pack'|'mixed'|'none'
        eventStyle: string
        readonly events: EventModel[]
        id: string|number
        image: string
        imageUrl: string
        readonly initials: string
        readonly isPersistable: boolean
        name: string
        resourceMargin: number
        rowHeight: number
        constructor(config?: Partial<ResourceModelConfig>);
        getEvents(): EventModel[];
        setAsync(field: string|object, value: any, silent?: boolean): Promise<void>;
        unassignAll(): void;
    }

    type ResourceTimeRangeModelConfig = {
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: DomClassList|string|string[]|object
        duration: number
        durationUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        endDate: string|Date
        iconCls: string
        id: string|number
        name: string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        resourceId: string|number
        startDate: string|Date
        style: string
        timeRangeColor: string
    }

    export class ResourceTimeRangeModel extends TimeSpan {
        resource: ResourceModel
        resourceId: string|number
        timeRangeColor: string
        constructor(config?: Partial<ResourceTimeRangeModelConfig>);
    }

    type TimeSpanConfig = {
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        cls: DomClassList|string|string[]|object
        duration: number
        durationUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        endDate: string|Date
        iconCls: string
        id: string|number
        name: string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        startDate: string|Date
        style: string
    }

    export class TimeSpan extends Model {
        cls: DomClassList|string|string[]|object
        readonly dates: Date[]
        duration: number
        readonly durationMS: number
        durationUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        endDate: string|Date
        readonly eventStore: EventStore
        fullDuration: Duration
        iconCls: string
        readonly isMilestone: boolean
        isScheduled: boolean
        name: string
        startDate: string|Date
        style: string
        wbsCode: string
        constructor(config?: Partial<TimeSpanConfig>);
        exportToICS(icsEventConfig?: object): void;
        forEachDate(func: Function, thisObj: object): void;
        isEditable(fieldName: string): boolean;
        setDuration(duration: number, durationUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'): void;
        setEndDate(date: Date, keepDuration?: boolean): void;
        setStartDate(date: Date, keepDuration?: boolean): void;
        setStartEndDate(start: Date, end: Date, silent?: boolean): void;
        shift(unit: 'ms'|'s'|'m'|'h'|'d'|'w'|'M'|'y', amount: number): void;
        split(splitPoint?: number|string): TimeSpan;
    }

    type AssignmentModelMixinClassConfig = {
        drawDependencies: boolean
        eventId: string|number
        resourceId: string|number
    }

    export class AssignmentModelMixinClass {
        drawDependencies: boolean
        eventId: string|number
        readonly eventName: string
        isPersistable: boolean
        resourceId: string|number
        readonly resourceName: string
        constructor(config?: Partial<AssignmentModelMixinClassConfig>);
        getResource(): ResourceModel;
        setAsync(field: string|object, value: any, silent?: boolean): Promise<void>;
        toString(): string;
    }

    export const AssignmentModelMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & AssignmentModelMixinClass>

    type EventModelMixinClassConfig = {
        allDay: boolean
        draggable: boolean
        duration: number
        endDate: string|Date
        eventColor: string
        eventStyle: string
        id: string|number
        milestoneWidth: number
        resizable: boolean|string
        resourceId: string|number
        resources: string|number
        startDate: string|Date
        stickyContents: boolean
    }

    export class EventModelMixinClass {
        allDay: boolean
        readonly assignments: AssignmentModel[]
        draggable: boolean
        duration: number
        endDate: string|Date
        eventColor: string
        eventStyle: string
        fullDuration: Duration
        id: string|number
        isDraggable: boolean
        readonly isInterDay: boolean
        readonly isPersistable: boolean
        readonly isResizable: boolean|string
        milestoneWidth: number
        readonly predecessors: DependencyBaseModel[]
        resizable: boolean|string
        resource: ResourceModel
        resourceId: string|number
        readonly resources: ResourceModel[]
        startDate: string|Date
        stickyContents: boolean
        readonly successors: DependencyBaseModel[]
        constructor(config?: Partial<EventModelMixinClassConfig>);
        assign(resource: ResourceModel|string|number|ResourceModel[]|string[]|number[], removeExistingAssignments?: boolean): void;
        getResource(resourceId?: string): ResourceModel;
        isAssignedTo(resource: ResourceModel|string|number): boolean;
        isEditable(fieldName: string): boolean;
        reassign(oldResourceId: ResourceModel|string|number, newResourceId: ResourceModel|string|number): void;
        setAsync(field: string|object, value: any, silent?: boolean): Promise<void>;
        shift(unit: 'ms'|'s'|'m'|'h'|'d'|'w'|'M'|'y', amount: number): Promise<any>;
        unassign(resource?: ResourceModel|string|number): void;
    }

    export const EventModelMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & EventModelMixinClass>

    type ProjectModelMixinClassConfig = {
        json: string
        resourceTimeRangeStore: ResourceTimeRangeStore|object|Partial<ResourceTimeRangeStoreConfig>
        resourceTimeRangeStoreClass: typeof ResourceTimeRangeStore|object
        resourceTimeRangesData: ResourceTimeRangeModel[]
        stm: object|StateTrackingManager|Partial<StateTrackingManagerConfig>
        timeRangeStore: Store|object|Partial<StoreConfig>
        timeRangeStoreClass: typeof Store|object
        timeRangesData: TimeSpan[]
        onChange: Function
    }

    export class ProjectModelMixinClass {
        readonly changes: object
        inlineData: object
        json: string
        resourceTimeRangeStore: ResourceTimeRangeStore
        stm: StateTrackingManager
        timeRangeStore: Store
        onChange: Function
        constructor(config?: Partial<ProjectModelMixinClassConfig>);
        commitAsync(): Promise<void>;
        loadInlineData(dataPackage: object): Promise<void>;
        toJSON(): object;
    }

    export const ProjectModelMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & ProjectModelMixinClass>

    type RecurringTimeSpanClassConfig = {
        exceptionDates: string|string[]
        recurrenceRule: string
    }

    export class RecurringTimeSpanClass {
        exceptionDates: string|string[]
        readonly isOccurrence: boolean
        readonly isRecurring: boolean
        readonly occurrenceIndex: number
        recurrence: RecurrenceModel
        recurrenceModel: string
        recurrenceRule: string
        supportsRecurring: boolean
        constructor(config?: Partial<RecurringTimeSpanClassConfig>);
        getOccurrencesForDateRange(startDate: Date, endDate?: Date): TimeSpan[];
        hasException(date: Date): boolean;
        remove(): void;
        setRecurrence(recurrence: object|string|RecurrenceModel|Partial<RecurrenceModelConfig>, interval?: number, recurrenceEnd?: number|Date): void;
    }

    export const RecurringTimeSpan : <T extends AnyConstructor<TimeSpan>>(base : T) => AnyConstructor<InstanceType<T> & RecurringTimeSpanClass>

    type ResourceModelMixinClassConfig = {
        barMargin: number
        columnWidth: number
        eventColor: string
        eventLayout: 'stack'|'pack'|'mixed'|'none'
        eventStyle: string
        id: string|number
        image: string
        imageUrl: string
        name: string
        resourceMargin: number
        rowHeight: number
    }

    export class ResourceModelMixinClass {
        assignments: AssignmentModel[]
        barMargin: number
        columnWidth: number
        eventColor: string
        eventLayout: 'stack'|'pack'|'mixed'|'none'
        eventStyle: string
        readonly events: EventModel[]
        id: string|number
        image: string
        imageUrl: string
        readonly initials: string
        readonly isPersistable: boolean
        name: string
        resourceMargin: number
        rowHeight: number
        constructor(config?: Partial<ResourceModelMixinClassConfig>);
        getEvents(): EventModel[];
        setAsync(field: string|object, value: any, silent?: boolean): Promise<void>;
        unassignAll(): void;
    }

    export const ResourceModelMixin : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & ResourceModelMixinClass>

    export class PresetManagerSingleton extends PresetStore {
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onCatchAll: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIndent: Function
        onOutdent: Function
        onRemove: Function
        onRemoveAll: Function
        onSort: Function
        deletePreset(id: string): void;
        normalizePreset(presetOrId: string|object): ViewPreset;
        registerPreset(id: string, config: object): ViewPreset;
    }
    export const PresetManager : PresetManagerSingleton

    type PresetStoreConfig = {
        allowNoId: boolean
        applyChangesetFilterSortTarget: 'changes'|'none'
        autoCommit: boolean
        autoTree: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        chainedFields: string[]
        chainedFilterFn: Function
        data: object[]|Model[]|Partial<ModelConfig>[]
        doRelayToMaster: string[]
        dontRelayToMaster: string
        excludeCollapsedRecords: boolean
        fields: string[]|object[]|DataField[]|Partial<DataFieldConfig>[]
        filters: object|object[]
        fireRemoveEventForMoveAction: boolean
        groupers: object[]
        id: string|number
        ignoreRemoteChangesInSTM: boolean
        keepUncommittedChanges: boolean
        listeners: object
        masterStore: Store
        modelClass: typeof Model
        reapplyFilterOnAdd: boolean
        reapplyFilterOnUpdate: boolean
        reapplySortersOnAdd: boolean
        sorters: object[]|string[]
        stm: StateTrackingManager
        storage: Collection|object|Partial<CollectionConfig>
        syncDataOnLoad: boolean|object
        transformFlatData: boolean
        tree: boolean
        useLocaleSort: boolean|string|object
        useRawData: boolean|object
        verifyNoGeneratedIds: boolean
        zoomOrder: number
        onAdd: Function
        onAddConfirmed: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onBeforeUpdate: Function
        onCatchAll: Function
        onChange: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIdChange: Function
        onIndent: Function
        onMove: Function
        onOutdent: Function
        onRefresh: Function
        onRemove: Function
        onRemoveAll: Function
        onRootChange: Function
        onSort: Function
        onUpdate: Function
    }

    export class PresetStore extends Store {
        onAdd: Function
        onBeforeAdd: Function
        onBeforeCommit: Function
        onBeforeDestroy: Function
        onBeforeIndent: Function
        onBeforeOutdent: Function
        onBeforeRemove: Function
        onBeforeSort: Function
        onCatchAll: Function
        onCommit: Function
        onDestroy: Function
        onFilter: Function
        onGroup: Function
        onIndent: Function
        onOutdent: Function
        onRemove: Function
        onRemoveAll: Function
        onSort: Function
        constructor(config?: Partial<PresetStoreConfig>);
    }

    type ViewPresetConfig = {
        base: string
        children: boolean|object[]|Model[]|Partial<ModelConfig>[]
        columnLinesFor: number
        defaultSpan: number
        displayDateFormat: string
        headers: object[]
        id: string|number
        mainHeaderLevel: number
        mainUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        name: string
        orderedParentIndex: number
        parentId: string|number|null
        parentIndex: number
        readOnly: boolean
        rowHeight: number
        shiftIncrement: number
        shiftUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        start: number|string
        tickHeight: number
        tickWidth: number
        timeResolution: object
    }

    export class ViewPreset extends Model {
        base: string
        columnLinesFor: number
        defaultSpan: number
        displayDateFormat: string
        headers: object[]
        mainHeaderLevel: number
        mainUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        name: string
        rowHeight: number
        shiftIncrement: number
        shiftUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        start: number|string
        tickHeight: number
        tickWidth: number
        timeResolution: object
        constructor(config?: Partial<ViewPresetConfig>);
    }

    type ScheduleTableExporterConfig = {
        columns: string[]|object[]
        defaultColumnWidth: number
        eventColumns: string[]|object[]
        exportDateAsInstance: boolean
        includeUnassigned: boolean
        indent: boolean
        indentationSymbol: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        showGroupHeader: boolean
        target: Grid
    }

    export class ScheduleTableExporter extends TableExporter implements LocalizableClass {
        readonly localeManager: typeof LocaleManager
        constructor(config?: Partial<ScheduleTableExporterConfig>);
        static L(text: string, templateData?: object): string;
        static optionalL(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        updateLocalization(): void;
    }

    type ResourceHeaderConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        columnWidth: number
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        fillWidth: boolean
        fitWidth: boolean
        flex: number|string
        floating: boolean
        headerRenderer: Function
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showAvatars: boolean
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class ResourceHeader extends Widget {
        fillWidth: boolean
        fitWidth: boolean
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ResourceHeaderConfig>);
        refresh(): void;
    }

    type SchedulerFeaturesType = {
        cellEdit: CellEdit
        cellMenu: CellMenu
        cellTooltip: CellTooltip
        columnAutoWidth: ColumnAutoWidth
        columnDragToolbar: ColumnDragToolbar
        columnLines: ColumnLines
        columnPicker: ColumnPicker
        columnRename: ColumnRename
        columnReorder: ColumnReorder
        columnResize: ColumnResize
        dependencies: Dependencies
        dependencyEdit: DependencyEdit
        eventCopyPaste: EventCopyPaste
        eventDrag: EventDrag
        eventDragCreate: EventDragCreate
        eventDragSelect: EventDragSelect
        eventEdit: SchedulerEventEdit
        eventFilter: EventFilter
        eventMenu: SchedulerEventMenu
        eventNonWorkingTime: EventNonWorkingTime
        eventResize: EventResize
        eventTooltip: SchedulerEventTooltip
        excelExporter: ExcelExporter
        filter: Filter
        filterBar: FilterBar
        group: Group
        groupSummary: GroupSummary
        headerMenu: HeaderMenu
        headerZoom: HeaderZoom
        labels: Labels
        mergeCells: MergeCells
        multipage: MultiPageExporter
        multipagevertical: MultiPageVerticalExporter
        nonWorkingTime: NonWorkingTime
        pan: Pan
        pdfExport: PdfExport
        quickFind: QuickFind
        regionResize: RegionResize
        resourceTimeRanges: ResourceTimeRanges
        rowCopyPaste: RowCopyPaste
        rowExpander: RowExpander
        rowReorder: RowReorder
        scheduleContext: ScheduleContext
        scheduleMenu: SchedulerScheduleMenu
        scheduleTooltip: ScheduleTooltip
        search: Search
        simpleEventEdit: SimpleEventEdit
        singlepage: SinglePageExporter
        sort: Sort
        stickyCells: StickyCells
        stickyEvents: StickyEvents
        stripe: Stripe
        summary: Summary
        timeAxisHeaderMenu: TimeAxisHeaderMenu
        timeRanges: TimeRanges
        timeSelection: TimeSelection
        tree: Tree
        treeGroup: TreeGroup
    }

    type SchedulerFeaturesConfigType = {
        cellEdit: string|boolean|Partial<CellEditConfig>
        cellMenu: string|boolean|Partial<CellMenuConfig>
        cellTooltip: string|boolean|Partial<CellTooltipConfig>
        columnAutoWidth: string|boolean|Partial<ColumnAutoWidthConfig>
        columnDragToolbar: string|boolean|Partial<ColumnDragToolbarConfig>
        columnLines: string|boolean|Partial<ColumnLinesConfig>
        columnPicker: string|boolean|Partial<ColumnPickerConfig>
        columnRename: string|boolean|Partial<ColumnRenameConfig>
        columnReorder: string|boolean|Partial<ColumnReorderConfig>
        columnResize: string|boolean|Partial<ColumnResizeConfig>
        dependencies: string|boolean|Partial<DependenciesConfig>
        dependencyEdit: string|boolean|Partial<DependencyEditConfig>
        eventCopyPaste: string|boolean|Partial<EventCopyPasteConfig>
        eventDrag: string|boolean|Partial<EventDragConfig>
        eventDragCreate: string|boolean|Partial<EventDragCreateConfig>
        eventDragSelect: string|boolean|Partial<EventDragSelectConfig>
        eventEdit: string|boolean|Partial<SchedulerEventEditConfig>
        eventFilter: string|boolean|Partial<EventFilterConfig>
        eventMenu: string|boolean|Partial<SchedulerEventMenuConfig>
        eventNonWorkingTime: string|boolean|Partial<EventNonWorkingTimeConfig>
        eventResize: string|boolean|Partial<EventResizeConfig>
        eventTooltip: string|boolean|Partial<SchedulerEventTooltipConfig>
        excelExporter: string|boolean|Partial<ExcelExporterConfig>
        filter: string|boolean|Partial<FilterConfig>
        filterBar: string|boolean|Partial<FilterBarConfig>
        group: string|boolean|Partial<GroupConfig>
        groupSummary: string|boolean|Partial<GroupSummaryConfig>
        headerMenu: string|boolean|Partial<HeaderMenuConfig>
        headerZoom: string|boolean|Partial<HeaderZoomConfig>
        labels: string|boolean|Partial<LabelsConfig>
        mergeCells: string|boolean|Partial<MergeCellsConfig>
        multipage: string|boolean|Partial<MultiPageExporterConfig>
        multipagevertical: string|boolean|Partial<MultiPageVerticalExporterConfig>
        nonWorkingTime: string|boolean|Partial<NonWorkingTimeConfig>
        pan: string|boolean|Partial<PanConfig>
        pdfExport: string|boolean|Partial<PdfExportConfig>
        quickFind: string|boolean|Partial<QuickFindConfig>
        regionResize: string|boolean|Partial<RegionResizeConfig>
        resourceTimeRanges: string|boolean|Partial<ResourceTimeRangesConfig>
        rowCopyPaste: string|boolean|Partial<RowCopyPasteConfig>
        rowExpander: string|boolean|Partial<RowExpanderConfig>
        rowReorder: string|boolean|Partial<RowReorderConfig>
        scheduleContext: string|boolean|Partial<ScheduleContextConfig>
        scheduleMenu: string|boolean|Partial<SchedulerScheduleMenuConfig>
        scheduleTooltip: string|boolean|Partial<ScheduleTooltipConfig>
        search: string|boolean|Partial<SearchConfig>
        simpleEventEdit: string|boolean|Partial<SimpleEventEditConfig>
        singlepage: string|boolean|Partial<SinglePageExporterConfig>
        sort: string|boolean|Partial<SortConfig>
        stickyCells: string|boolean|Partial<StickyCellsConfig>
        stickyEvents: string|boolean|Partial<StickyEventsConfig>
        stripe: string|boolean|Partial<StripeConfig>
        summary: string|boolean|Partial<SummaryConfig>
        timeAxisHeaderMenu: string|boolean|Partial<TimeAxisHeaderMenuConfig>
        timeRanges: string|boolean|Partial<TimeRangesConfig>
        timeSelection: string|boolean|Partial<TimeSelectionConfig>
        tree: string|boolean|Partial<TreeConfig>
        treeGroup: string|boolean|Partial<TreeGroupConfig>
    }

    type SchedulerConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowCreate: boolean
        allowDropOnEventBar: boolean
        allowOver: boolean
        allowOverlap: boolean
        anchor: boolean
        anchorToTarget: boolean
        animateRemovingRows: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        assignmentStore: AssignmentStore|object|Partial<AssignmentStoreConfig>
        assignments: AssignmentModel[]|object[]|Partial<AssignmentModelConfig>[]
        autoAdjustTimeAxis: boolean
        autoClose: boolean
        autoHeight: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        barMargin: number
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        bufferCoef: number
        bufferThreshold: number
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        columnLines: boolean
        columns: ColumnStore|object[]|object|Partial<ColumnStoreConfig>|Partial<ColumnStoreConfig>[]
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        contextMenuTriggerEvent: 'contextmenu'|'click'|'dblclick'
        createEventOnDblClick: boolean|object
        creationTooltip: Partial<TooltipConfig>
        creationTooltipTemplate: Function
        crudManager: object|CrudManager|Partial<CrudManagerConfig>
        crudManagerClass: typeof CrudManager
        data: object[]|Model[]|Partial<ModelConfig>[]
        dataset: object
        date: Date
        dateFormat: string
        dateSeparator: string
        defaultBindProperty: string
        defaultFocus: Function
        defaultRegion: string
        defaultResourceImageName: string
        defaults: object
        dependencies: DependencyModel[]|object[]|Partial<DependencyModelConfig>[]
        dependencyStore: DependencyStore|object|Partial<DependencyStoreConfig>
        descriptionFormat: string|string[]|boolean[]
        descriptionRenderer: Function
        deselectOnClick: boolean
        destroyStore: boolean
        destroyStores: boolean
        disableGridRowModelWarning: boolean
        disabled: boolean
        dismissDelay: number
        displayDateFormat: string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        durationDisplayPrecision: number|boolean
        emptyText: string
        enableDeleteKey: boolean
        enableEventAnimations: boolean
        enableRecurringEvents: boolean
        enableSticky: boolean
        enableTextSelection: boolean
        enableUndoRedoKeys: boolean
        endDate: Date|string
        endParamName: string
        eventBarTextField: string
        eventBodyTemplate: Function
        eventColor: 'red'|'pink'|'purple'|'violet'|'indigo'|'blue'|'cyan'|'teal'|'green'|'lime'|'yellow'|'orange'|'deep-orange'|'gray'|'gantt-green'
        eventLayout: 'stack'|'pack'|'mixed'|'none'|object
        eventRenderer: Function
        eventRendererThisObj: object
        eventSelectionDisabled: boolean
        eventStore: EventStore|object|Partial<EventStoreConfig>
        eventStyle: 'plain'|'border'|'colored'|'hollow'|'line'|'dashed'|'minimal'|'rounded'|'calendar'|'interday'
        events: EventModel[]|object[]|Partial<EventModelConfig>[]
        features: Partial<SchedulerFeaturesConfigType>
        fillLastColumn: boolean
        fillTicks: boolean
        fixedRowHeight: boolean
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        forceFit: boolean
        fullRowRefresh: boolean
        getDateConstraints: Function
        getHtml: Function|string
        getRowHeight: Function
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideHeaders: boolean
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        highlightPredecessors: boolean
        highlightSuccessors: boolean
        // @deprecated
        horizontalEventSorterFn: Function
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        infiniteScroll: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        isEventSelectable: Function
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        keyMap: object
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        longPressTime: number
        maintainSelectionOnDatasetChange: boolean
        managedEventSizing: boolean
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxTimeAxisUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        maxWidth: string|number
        maxZoomLevel: number
        maximizable: boolean
        maximized: boolean
        milestoneAlign: 'start'|'center'|'end'
        milestoneCharWidth: number
        milestoneLayoutMode: 'default'|'estimate'|'data'|'measure'
        milestoneTextPosition: 'inside'|'outside'|'always-outside'
        minHeight: string|number
        minWidth: string|number
        minZoomLevel: number
        modal: boolean
        mode: 'horizontal'|'vertical'
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        multiEventSelect: boolean
        namedItems: object
        narrowEventWidth: number
        overlappingEventSorter: Function
        owner: Widget
        partner: TimelineBase
        passStartEndParameters: boolean
        plugins: Function[]
        positioned: boolean
        preCalculateHeightLimit: number
        preserveFocusOnDatasetChange: boolean
        preserveScrollOnDatasetChange: boolean
        presets: object[]
        preventTooltipOnTouch: boolean
        project: ProjectModel|object|Partial<ProjectModelConfig>
        range: 'day'|'week'|'month'
        readOnly: boolean
        ref: string
        resizeToFitIncludesHeader: boolean
        resourceColumns: Partial<ResourceHeaderConfig>
        resourceImageExtension: string
        resourceImagePath: string
        resourceMargin: number
        resourceStore: ResourceStore|object|Partial<ResourceStoreConfig>
        resourceTimeRangeStore: ResourceTimeRangeStore|object|Partial<ResourceTimeRangeStoreConfig>
        resourceTimeRanges: ResourceTimeRangeModel[]|object[]|Partial<ResourceTimeRangeModelConfig>[]
        resources: ResourceModel[]|object[]|Partial<ResourceModelConfig>[]
        responsiveLevels: object
        ripple: boolean|object
        rootElement: ShadowRoot
        rowHeight: number
        scrollAction: 'hide'|'realign'|null
        scrollManager: object|ScrollManager|Partial<ScrollManagerConfig>
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        scrollerClass: typeof Scroller
        selectionMode: object
        showAnimation: boolean|object
        showCreationTooltip: boolean
        showDirty: boolean
        showOnClick: boolean
        showOnHover: boolean
        showRecurringUI: boolean
        showTooltip: boolean
        showTooltipWhenDisabled: boolean
        snap: boolean
        snapRelativeToEventStartDate: boolean
        startDate: Date|string
        startParamName: string
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        stepUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        stickyHeaders: boolean
        store: Store|Partial<StoreConfig>
        strips: object
        style: string
        subGridConfigs: object
        suppressFit: boolean
        syncMask: string|object|null
        tab: boolean|object
        tag: string
        tbar: object[]|object
        terminalCls: string
        terminalSides: string[]
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        tickSize: number
        timeAxis: object|TimeAxis|Partial<TimeAxisConfig>
        timeRangeStore: Store|object|Partial<StoreConfig>
        timeRanges: TimeSpan[]|object[]|Partial<TimeSpanConfig>[]
        title: string
        tools: object
        tooltip: string|object
        tooltipTemplate: Function
        trackMouse: boolean
        transitionDuration: number
        trapFocus: boolean
        triggerSelectionChangeOnRemove: boolean
        ui: string|object
        useInitialAnimation: boolean|string
        verticalTimeAxisColumn: Partial<VerticalTimeAxisColumnConfig>
        viewPreset: string|object
        visibleDate: Date|object
        visibleZoomFactor: number
        weekStartDay: number
        weight: number
        width: string|number
        workingTime: object
        x: number
        y: number
        zoomKeepsOriginalTimespan: boolean
        zoomOnMouseWheel: boolean
        zoomOnTimeAxisDoubleClick: boolean
        onAfterDependencySave: Function
        onAfterDragCreate: Function
        onAfterEventDrop: Function
        onAfterEventEdit: Function
        onAfterEventSave: Function
        onAssignmentSelectionChange: Function
        onBeforeAssignmentDelete: Function
        onBeforeAssignmentSelectionChange: Function
        onBeforeCancelCellEdit: Function
        onBeforeCellEditStart: Function
        onBeforeClose: Function
        onBeforeColumnDragStart: Function
        onBeforeColumnDropFinalize: Function
        onBeforeCopy: Function
        onBeforeDependencyAdd: Function
        onBeforeDependencyDelete: Function
        onBeforeDependencyEdit: Function
        onBeforeDependencyEditShow: Function
        onBeforeDependencySave: Function
        onBeforeDestroy: Function
        onBeforeDragCreate: Function
        onBeforeDragCreateFinalize: Function
        onBeforeEventAdd: Function
        onBeforeEventDelete: Function
        onBeforeEventDrag: Function
        onBeforeEventDragSelect: Function
        onBeforeEventDropFinalize: Function
        onBeforeEventEdit: Function
        onBeforeEventEditShow: Function
        onBeforeEventResize: Function
        onBeforeEventResizeFinalize: Function
        onBeforeEventSave: Function
        onBeforeEventSelectionChange: Function
        onBeforeFinishCellEdit: Function
        onBeforeHide: Function
        onBeforePan: Function
        onBeforePaste: Function
        onBeforePdfExport: Function
        onBeforePresetChange: Function
        onBeforeRenderRow: Function
        onBeforeRenderRows: Function
        onBeforeSelectionChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeToggleGroup: Function
        onBeforeToggleNode: Function
        onCancelCellEdit: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMenuBeforeShow: Function
        onCellMenuItem: Function
        onCellMenuShow: Function
        onCellMenuToggleItem: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onCollapseNode: Function
        onColumnDragStart: Function
        onColumnDrop: Function
        onContextMenuItem: Function
        onContextMenuToggleItem: Function
        onCopy: Function
        onDataChange: Function
        onDateRangeChange: Function
        onDependenciesDrawn: Function
        onDependencyClick: Function
        onDependencyDblClick: Function
        onDependencyMouseOut: Function
        onDependencyMouseOver: Function
        onDestroy: Function
        onDragCreateEnd: Function
        onDragCreateStart: Function
        onEventAutoCreated: Function
        onEventClick: Function
        onEventContextMenu: Function
        onEventDblClick: Function
        onEventDrag: Function
        onEventDragAbort: Function
        onEventDragModeChange: Function
        onEventDragReset: Function
        onEventDragStart: Function
        onEventDrop: Function
        onEventEditBeforeSetRecord: Function
        onEventKeyDown: Function
        onEventKeyUp: Function
        onEventMenuBeforeShow: Function
        onEventMenuItem: Function
        onEventMenuShow: Function
        onEventMouseDown: Function
        onEventMouseEnter: Function
        onEventMouseLeave: Function
        onEventMouseOut: Function
        onEventMouseOver: Function
        onEventMouseUp: Function
        onEventPartialResize: Function
        onEventResizeEnd: Function
        onEventResizeStart: Function
        onEventSelectionChange: Function
        onExpandNode: Function
        onFinishCellEdit: Function
        onFocusIn: Function
        onFocusOut: Function
        onHeaderMenuBeforeShow: Function
        onHeaderMenuItem: Function
        onHeaderMenuShow: Function
        onHeaderMenuToggleItem: Function
        onHide: Function
        onMouseOut: Function
        onMouseOver: Function
        onNavigate: Function
        onPaint: Function
        onPaste: Function
        onPdfExport: Function
        onPointerOver: Function
        onPresetChange: Function
        onReadOnly: Function
        onRecompose: Function
        onReleaseEvent: Function
        onRenderEvent: Function
        onRenderRow: Function
        onRenderRows: Function
        onResize: Function
        onResourceHeaderClick: Function
        onResourceHeaderContextmenu: Function
        onResourceHeaderDblclick: Function
        onResourceTimeRangeClick: Function
        onResourceTimeRangeContextMenu: Function
        onResourceTimeRangeDblClick: Function
        onResourceTimeRangeMouseDown: Function
        onResourceTimeRangeMouseOut: Function
        onResourceTimeRangeMouseOver: Function
        onResourceTimeRangeMouseUp: Function
        onResponsive: Function
        onScheduleClick: Function
        onScheduleContextMenu: Function
        onScheduleDblClick: Function
        onScheduleMenuBeforeShow: Function
        onScheduleMenuItem: Function
        onScheduleMenuShow: Function
        onScheduleMouseDown: Function
        onScheduleMouseEnter: Function
        onScheduleMouseLeave: Function
        onScheduleMouseMove: Function
        onScheduleMouseUp: Function
        onScroll: Function
        onSelectionChange: Function
        onShow: Function
        onStartCellEdit: Function
        onSubGridCollapse: Function
        onSubGridExpand: Function
        onTimeAxisChange: Function
        onTimeAxisHeaderClick: Function
        onTimeAxisHeaderContextMenu: Function
        onTimeAxisHeaderContextMenuBeforeShow: Function
        onTimeAxisHeaderContextMenuItem: Function
        onTimeAxisHeaderContextMenuShow: Function
        onTimeAxisHeaderDblClick: Function
        onTimeRangeHeaderClick: Function
        onTimeRangeHeaderContextMenu: Function
        onTimeRangeHeaderDblClick: Function
        onTimeSelectionChange: Function
        onTimeSelectionElementClick: Function
        onTimelineContextChange: Function
        onTimelineViewportResize: Function
        onToggleGroup: Function
        onToggleNode: Function
        onToolClick: Function
        onVisibleDateRangeChange: Function
    }

    export class Scheduler extends SchedulerBase {
        features: SchedulerFeaturesType
        onAssignmentSelectionChange: Function
        onBeforeAssignmentDelete: Function
        onBeforeAssignmentSelectionChange: Function
        onBeforeDestroy: Function
        onBeforeEventDelete: Function
        onBeforeEventSelectionChange: Function
        onBeforePresetChange: Function
        onBeforeSelectionChange: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onDestroy: Function
        onEventClick: Function
        onEventContextMenu: Function
        onEventDblClick: Function
        onEventMouseDown: Function
        onEventMouseEnter: Function
        onEventMouseLeave: Function
        onEventMouseOut: Function
        onEventMouseOver: Function
        onEventMouseUp: Function
        onEventSelectionChange: Function
        onMouseOut: Function
        onMouseOver: Function
        onNavigate: Function
        onPointerOver: Function
        onPresetChange: Function
        onResponsive: Function
        onScheduleClick: Function
        onScheduleContextMenu: Function
        onScheduleDblClick: Function
        onScheduleMouseDown: Function
        onScheduleMouseEnter: Function
        onScheduleMouseLeave: Function
        onScheduleMouseMove: Function
        onScheduleMouseUp: Function
        onSelectionChange: Function
        onTimeAxisHeaderClick: Function
        onTimeAxisHeaderContextMenu: Function
        onTimeAxisHeaderDblClick: Function
        onTimelineContextChange: Function
        constructor(config?: Partial<SchedulerConfig>);
    }

    type SchedulerBaseFeaturesType = {
        cellEdit: CellEdit
        cellMenu: CellMenu
        cellTooltip: CellTooltip
        columnAutoWidth: ColumnAutoWidth
        columnDragToolbar: ColumnDragToolbar
        columnLines: ColumnLines
        columnPicker: ColumnPicker
        columnRename: ColumnRename
        columnReorder: ColumnReorder
        columnResize: ColumnResize
        dependencies: Dependencies
        dependencyEdit: DependencyEdit
        eventCopyPaste: EventCopyPaste
        eventDrag: EventDrag
        eventDragCreate: EventDragCreate
        eventDragSelect: EventDragSelect
        eventEdit: SchedulerEventEdit
        eventFilter: EventFilter
        eventMenu: SchedulerEventMenu
        eventNonWorkingTime: EventNonWorkingTime
        eventResize: EventResize
        eventTooltip: SchedulerEventTooltip
        excelExporter: ExcelExporter
        filter: Filter
        filterBar: FilterBar
        group: Group
        groupSummary: GroupSummary
        headerMenu: HeaderMenu
        headerZoom: HeaderZoom
        labels: Labels
        mergeCells: MergeCells
        multipage: MultiPageExporter
        multipagevertical: MultiPageVerticalExporter
        nonWorkingTime: NonWorkingTime
        pan: Pan
        pdfExport: PdfExport
        quickFind: QuickFind
        regionResize: RegionResize
        resourceTimeRanges: ResourceTimeRanges
        rowCopyPaste: RowCopyPaste
        rowExpander: RowExpander
        rowReorder: RowReorder
        scheduleContext: ScheduleContext
        scheduleMenu: SchedulerScheduleMenu
        scheduleTooltip: ScheduleTooltip
        search: Search
        simpleEventEdit: SimpleEventEdit
        singlepage: SinglePageExporter
        sort: Sort
        stickyCells: StickyCells
        stickyEvents: StickyEvents
        stripe: Stripe
        summary: Summary
        timeAxisHeaderMenu: TimeAxisHeaderMenu
        timeRanges: TimeRanges
        timeSelection: TimeSelection
        tree: Tree
        treeGroup: TreeGroup
    }

    type SchedulerBaseFeaturesConfigType = {
        cellEdit: string|boolean|Partial<CellEditConfig>
        cellMenu: string|boolean|Partial<CellMenuConfig>
        cellTooltip: string|boolean|Partial<CellTooltipConfig>
        columnAutoWidth: string|boolean|Partial<ColumnAutoWidthConfig>
        columnDragToolbar: string|boolean|Partial<ColumnDragToolbarConfig>
        columnLines: string|boolean|Partial<ColumnLinesConfig>
        columnPicker: string|boolean|Partial<ColumnPickerConfig>
        columnRename: string|boolean|Partial<ColumnRenameConfig>
        columnReorder: string|boolean|Partial<ColumnReorderConfig>
        columnResize: string|boolean|Partial<ColumnResizeConfig>
        dependencies: string|boolean|Partial<DependenciesConfig>
        dependencyEdit: string|boolean|Partial<DependencyEditConfig>
        eventCopyPaste: string|boolean|Partial<EventCopyPasteConfig>
        eventDrag: string|boolean|Partial<EventDragConfig>
        eventDragCreate: string|boolean|Partial<EventDragCreateConfig>
        eventDragSelect: string|boolean|Partial<EventDragSelectConfig>
        eventEdit: string|boolean|Partial<SchedulerEventEditConfig>
        eventFilter: string|boolean|Partial<EventFilterConfig>
        eventMenu: string|boolean|Partial<SchedulerEventMenuConfig>
        eventNonWorkingTime: string|boolean|Partial<EventNonWorkingTimeConfig>
        eventResize: string|boolean|Partial<EventResizeConfig>
        eventTooltip: string|boolean|Partial<SchedulerEventTooltipConfig>
        excelExporter: string|boolean|Partial<ExcelExporterConfig>
        filter: string|boolean|Partial<FilterConfig>
        filterBar: string|boolean|Partial<FilterBarConfig>
        group: string|boolean|Partial<GroupConfig>
        groupSummary: string|boolean|Partial<GroupSummaryConfig>
        headerMenu: string|boolean|Partial<HeaderMenuConfig>
        headerZoom: string|boolean|Partial<HeaderZoomConfig>
        labels: string|boolean|Partial<LabelsConfig>
        mergeCells: string|boolean|Partial<MergeCellsConfig>
        multipage: string|boolean|Partial<MultiPageExporterConfig>
        multipagevertical: string|boolean|Partial<MultiPageVerticalExporterConfig>
        nonWorkingTime: string|boolean|Partial<NonWorkingTimeConfig>
        pan: string|boolean|Partial<PanConfig>
        pdfExport: string|boolean|Partial<PdfExportConfig>
        quickFind: string|boolean|Partial<QuickFindConfig>
        regionResize: string|boolean|Partial<RegionResizeConfig>
        resourceTimeRanges: string|boolean|Partial<ResourceTimeRangesConfig>
        rowCopyPaste: string|boolean|Partial<RowCopyPasteConfig>
        rowExpander: string|boolean|Partial<RowExpanderConfig>
        rowReorder: string|boolean|Partial<RowReorderConfig>
        scheduleContext: string|boolean|Partial<ScheduleContextConfig>
        scheduleMenu: string|boolean|Partial<SchedulerScheduleMenuConfig>
        scheduleTooltip: string|boolean|Partial<ScheduleTooltipConfig>
        search: string|boolean|Partial<SearchConfig>
        simpleEventEdit: string|boolean|Partial<SimpleEventEditConfig>
        singlepage: string|boolean|Partial<SinglePageExporterConfig>
        sort: string|boolean|Partial<SortConfig>
        stickyCells: string|boolean|Partial<StickyCellsConfig>
        stickyEvents: string|boolean|Partial<StickyEventsConfig>
        stripe: string|boolean|Partial<StripeConfig>
        summary: string|boolean|Partial<SummaryConfig>
        timeAxisHeaderMenu: string|boolean|Partial<TimeAxisHeaderMenuConfig>
        timeRanges: string|boolean|Partial<TimeRangesConfig>
        timeSelection: string|boolean|Partial<TimeSelectionConfig>
        tree: string|boolean|Partial<TreeConfig>
        treeGroup: string|boolean|Partial<TreeGroupConfig>
    }

    type SchedulerBaseConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowCreate: boolean
        allowDropOnEventBar: boolean
        allowOver: boolean
        allowOverlap: boolean
        anchor: boolean
        anchorToTarget: boolean
        animateRemovingRows: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        assignmentStore: AssignmentStore|object|Partial<AssignmentStoreConfig>
        assignments: AssignmentModel[]|object[]|Partial<AssignmentModelConfig>[]
        autoAdjustTimeAxis: boolean
        autoClose: boolean
        autoHeight: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        barMargin: number
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        bufferCoef: number
        bufferThreshold: number
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        columnLines: boolean
        columns: ColumnStore|object[]|object|Partial<ColumnStoreConfig>|Partial<ColumnStoreConfig>[]
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        contextMenuTriggerEvent: 'contextmenu'|'click'|'dblclick'
        createEventOnDblClick: boolean|object
        creationTooltip: Partial<TooltipConfig>
        creationTooltipTemplate: Function
        crudManager: object|CrudManager|Partial<CrudManagerConfig>
        crudManagerClass: typeof CrudManager
        data: object[]|Model[]|Partial<ModelConfig>[]
        dataset: object
        date: Date
        dateFormat: string
        dateSeparator: string
        defaultBindProperty: string
        defaultFocus: Function
        defaultRegion: string
        defaultResourceImageName: string
        defaults: object
        dependencies: DependencyModel[]|object[]|Partial<DependencyModelConfig>[]
        dependencyStore: DependencyStore|object|Partial<DependencyStoreConfig>
        descriptionFormat: string|string[]|boolean[]
        descriptionRenderer: Function
        deselectOnClick: boolean
        destroyStore: boolean
        destroyStores: boolean
        disableGridRowModelWarning: boolean
        disabled: boolean
        dismissDelay: number
        displayDateFormat: string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        durationDisplayPrecision: number|boolean
        emptyText: string
        enableDeleteKey: boolean
        enableEventAnimations: boolean
        enableRecurringEvents: boolean
        enableSticky: boolean
        enableTextSelection: boolean
        enableUndoRedoKeys: boolean
        endDate: Date|string
        endParamName: string
        eventBarTextField: string
        eventBodyTemplate: Function
        eventColor: 'red'|'pink'|'purple'|'violet'|'indigo'|'blue'|'cyan'|'teal'|'green'|'lime'|'yellow'|'orange'|'deep-orange'|'gray'|'gantt-green'
        eventLayout: 'stack'|'pack'|'mixed'|'none'|object
        eventRenderer: Function
        eventRendererThisObj: object
        eventSelectionDisabled: boolean
        eventStore: EventStore|object|Partial<EventStoreConfig>
        eventStyle: 'plain'|'border'|'colored'|'hollow'|'line'|'dashed'|'minimal'|'rounded'|'calendar'|'interday'
        events: EventModel[]|object[]|Partial<EventModelConfig>[]
        features: Partial<SchedulerBaseFeaturesConfigType>
        fillLastColumn: boolean
        fillTicks: boolean
        fixedRowHeight: boolean
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        forceFit: boolean
        fullRowRefresh: boolean
        getDateConstraints: Function
        getHtml: Function|string
        getRowHeight: Function
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideHeaders: boolean
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        highlightPredecessors: boolean
        highlightSuccessors: boolean
        // @deprecated
        horizontalEventSorterFn: Function
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        infiniteScroll: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        isEventSelectable: Function
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        keyMap: object
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        longPressTime: number
        maintainSelectionOnDatasetChange: boolean
        managedEventSizing: boolean
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxTimeAxisUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        maxWidth: string|number
        maxZoomLevel: number
        maximizable: boolean
        maximized: boolean
        milestoneAlign: 'start'|'center'|'end'
        milestoneCharWidth: number
        milestoneLayoutMode: 'default'|'estimate'|'data'|'measure'
        milestoneTextPosition: 'inside'|'outside'|'always-outside'
        minHeight: string|number
        minWidth: string|number
        minZoomLevel: number
        modal: boolean
        mode: 'horizontal'|'vertical'
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        multiEventSelect: boolean
        namedItems: object
        narrowEventWidth: number
        overlappingEventSorter: Function
        owner: Widget
        partner: TimelineBase
        passStartEndParameters: boolean
        plugins: Function[]
        positioned: boolean
        preCalculateHeightLimit: number
        preserveFocusOnDatasetChange: boolean
        preserveScrollOnDatasetChange: boolean
        presets: object[]
        preventTooltipOnTouch: boolean
        project: ProjectModel|object|Partial<ProjectModelConfig>
        range: 'day'|'week'|'month'
        readOnly: boolean
        ref: string
        resizeToFitIncludesHeader: boolean
        resourceColumns: Partial<ResourceHeaderConfig>
        resourceImageExtension: string
        resourceImagePath: string
        resourceMargin: number
        resourceStore: ResourceStore|object|Partial<ResourceStoreConfig>
        resourceTimeRangeStore: ResourceTimeRangeStore|object|Partial<ResourceTimeRangeStoreConfig>
        resourceTimeRanges: ResourceTimeRangeModel[]|object[]|Partial<ResourceTimeRangeModelConfig>[]
        resources: ResourceModel[]|object[]|Partial<ResourceModelConfig>[]
        responsiveLevels: object
        ripple: boolean|object
        rootElement: ShadowRoot
        rowHeight: number
        scrollAction: 'hide'|'realign'|null
        scrollManager: object|ScrollManager|Partial<ScrollManagerConfig>
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        scrollerClass: typeof Scroller
        selectionMode: object
        showAnimation: boolean|object
        showCreationTooltip: boolean
        showDirty: boolean
        showOnClick: boolean
        showOnHover: boolean
        showRecurringUI: boolean
        showTooltip: boolean
        showTooltipWhenDisabled: boolean
        snap: boolean
        snapRelativeToEventStartDate: boolean
        startDate: Date|string
        startParamName: string
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        stepUnit: 'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'
        stickyHeaders: boolean
        store: Store|Partial<StoreConfig>
        strips: object
        style: string
        subGridConfigs: object
        suppressFit: boolean
        syncMask: string|object|null
        tab: boolean|object
        tag: string
        tbar: object[]|object
        terminalCls: string
        terminalSides: string[]
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        tickSize: number
        timeAxis: object|TimeAxis|Partial<TimeAxisConfig>
        timeRangeStore: Store|object|Partial<StoreConfig>
        timeRanges: TimeSpan[]|object[]|Partial<TimeSpanConfig>[]
        title: string
        tools: object
        tooltip: string|object
        tooltipTemplate: Function
        trackMouse: boolean
        transitionDuration: number
        trapFocus: boolean
        triggerSelectionChangeOnRemove: boolean
        ui: string|object
        useInitialAnimation: boolean|string
        verticalTimeAxisColumn: Partial<VerticalTimeAxisColumnConfig>
        viewPreset: string|object
        visibleDate: Date|object
        visibleZoomFactor: number
        weekStartDay: number
        weight: number
        width: string|number
        workingTime: object
        x: number
        y: number
        zoomKeepsOriginalTimespan: boolean
        zoomOnMouseWheel: boolean
        zoomOnTimeAxisDoubleClick: boolean
        onAfterDependencySave: Function
        onAfterDragCreate: Function
        onAfterEventDrop: Function
        onAfterEventEdit: Function
        onAfterEventSave: Function
        onAssignmentSelectionChange: Function
        onBeforeAssignmentDelete: Function
        onBeforeAssignmentSelectionChange: Function
        onBeforeCancelCellEdit: Function
        onBeforeCellEditStart: Function
        onBeforeClose: Function
        onBeforeColumnDragStart: Function
        onBeforeColumnDropFinalize: Function
        onBeforeCopy: Function
        onBeforeDependencyAdd: Function
        onBeforeDependencyDelete: Function
        onBeforeDependencyEdit: Function
        onBeforeDependencyEditShow: Function
        onBeforeDependencySave: Function
        onBeforeDestroy: Function
        onBeforeDragCreate: Function
        onBeforeDragCreateFinalize: Function
        onBeforeEventAdd: Function
        onBeforeEventDelete: Function
        onBeforeEventDrag: Function
        onBeforeEventDragSelect: Function
        onBeforeEventDropFinalize: Function
        onBeforeEventEdit: Function
        onBeforeEventEditShow: Function
        onBeforeEventResize: Function
        onBeforeEventResizeFinalize: Function
        onBeforeEventSave: Function
        onBeforeEventSelectionChange: Function
        onBeforeFinishCellEdit: Function
        onBeforeHide: Function
        onBeforePan: Function
        onBeforePaste: Function
        onBeforePdfExport: Function
        onBeforePresetChange: Function
        onBeforeRenderRow: Function
        onBeforeRenderRows: Function
        onBeforeSelectionChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeToggleGroup: Function
        onBeforeToggleNode: Function
        onCancelCellEdit: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMenuBeforeShow: Function
        onCellMenuItem: Function
        onCellMenuShow: Function
        onCellMenuToggleItem: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onCollapseNode: Function
        onColumnDragStart: Function
        onColumnDrop: Function
        onContextMenuItem: Function
        onContextMenuToggleItem: Function
        onCopy: Function
        onDataChange: Function
        onDateRangeChange: Function
        onDependenciesDrawn: Function
        onDependencyClick: Function
        onDependencyDblClick: Function
        onDependencyMouseOut: Function
        onDependencyMouseOver: Function
        onDestroy: Function
        onDragCreateEnd: Function
        onDragCreateStart: Function
        onEventAutoCreated: Function
        onEventClick: Function
        onEventContextMenu: Function
        onEventDblClick: Function
        onEventDrag: Function
        onEventDragAbort: Function
        onEventDragModeChange: Function
        onEventDragReset: Function
        onEventDragStart: Function
        onEventDrop: Function
        onEventEditBeforeSetRecord: Function
        onEventKeyDown: Function
        onEventKeyUp: Function
        onEventMenuBeforeShow: Function
        onEventMenuItem: Function
        onEventMenuShow: Function
        onEventMouseDown: Function
        onEventMouseEnter: Function
        onEventMouseLeave: Function
        onEventMouseOut: Function
        onEventMouseOver: Function
        onEventMouseUp: Function
        onEventPartialResize: Function
        onEventResizeEnd: Function
        onEventResizeStart: Function
        onEventSelectionChange: Function
        onExpandNode: Function
        onFinishCellEdit: Function
        onFocusIn: Function
        onFocusOut: Function
        onHeaderMenuBeforeShow: Function
        onHeaderMenuItem: Function
        onHeaderMenuShow: Function
        onHeaderMenuToggleItem: Function
        onHide: Function
        onMouseOut: Function
        onMouseOver: Function
        onNavigate: Function
        onPaint: Function
        onPaste: Function
        onPdfExport: Function
        onPointerOver: Function
        onPresetChange: Function
        onReadOnly: Function
        onRecompose: Function
        onReleaseEvent: Function
        onRenderEvent: Function
        onRenderRow: Function
        onRenderRows: Function
        onResize: Function
        onResourceHeaderClick: Function
        onResourceHeaderContextmenu: Function
        onResourceHeaderDblclick: Function
        onResourceTimeRangeClick: Function
        onResourceTimeRangeContextMenu: Function
        onResourceTimeRangeDblClick: Function
        onResourceTimeRangeMouseDown: Function
        onResourceTimeRangeMouseOut: Function
        onResourceTimeRangeMouseOver: Function
        onResourceTimeRangeMouseUp: Function
        onResponsive: Function
        onScheduleClick: Function
        onScheduleContextMenu: Function
        onScheduleDblClick: Function
        onScheduleMenuBeforeShow: Function
        onScheduleMenuItem: Function
        onScheduleMenuShow: Function
        onScheduleMouseDown: Function
        onScheduleMouseEnter: Function
        onScheduleMouseLeave: Function
        onScheduleMouseMove: Function
        onScheduleMouseUp: Function
        onScroll: Function
        onSelectionChange: Function
        onShow: Function
        onStartCellEdit: Function
        onSubGridCollapse: Function
        onSubGridExpand: Function
        onTimeAxisChange: Function
        onTimeAxisHeaderClick: Function
        onTimeAxisHeaderContextMenu: Function
        onTimeAxisHeaderContextMenuBeforeShow: Function
        onTimeAxisHeaderContextMenuItem: Function
        onTimeAxisHeaderContextMenuShow: Function
        onTimeAxisHeaderDblClick: Function
        onTimeRangeHeaderClick: Function
        onTimeRangeHeaderContextMenu: Function
        onTimeRangeHeaderDblClick: Function
        onTimeSelectionChange: Function
        onTimeSelectionElementClick: Function
        onTimelineContextChange: Function
        onTimelineViewportResize: Function
        onToggleGroup: Function
        onToggleNode: Function
        onToolClick: Function
        onVisibleDateRangeChange: Function
    }

    export class SchedulerBase extends TimelineBase implements DescribableClass, SchedulerEventNavigationClass, SchedulerEventSelectionClass, SchedulerDomClass, SchedulerDomEventsClass, SchedulerEventRenderingClass, SchedulerRegionsClass, SchedulerScrollClass, SchedulerStateClass, SchedulerStoresClass, TimelineDateMapperClass, TimelineDomEventsClass, TimelineEventRenderingClass, TimelineScrollClass, TimelineViewPresetsClass, TimelineZoomableClass, CrudManagerViewClass, ProjectConsumerClass {
        static eventColors: string[]
        static eventStyles: string[]
        allowDropOnEventBar: boolean
        assignmentStore: AssignmentStore
        assignments: AssignmentModel[]|object[]|Partial<AssignmentModelConfig>[]
        barMargin: number
        creationTooltipTemplate: Function
        crudManager: CrudManager
        dateSeparator: string
        dependencies: DependencyModel[]|object[]|Partial<DependencyModelConfig>[]
        dependencyStore: DependencyStore
        descriptionFormat: string|string[]|boolean[]
        displayDateFormat: string
        readonly editRecurrenceButton: RecurrenceLegendButton
        eventColor: 'red'|'pink'|'purple'|'violet'|'indigo'|'blue'|'cyan'|'teal'|'green'|'lime'|'yellow'|'orange'|'deep-orange'|'gray'|'gantt-green'
        eventLayout: 'stack'|'pack'|'mixed'|'none'|object
        eventStore: EventStore
        events: EventModel[]|object[]|Partial<EventModelConfig>[]
        fillTicks: boolean
        isEngineReady: boolean
        isEventSelectable: Function
        readonly localeManager: typeof LocaleManager
        maxZoomLevel: number
        milestoneAlign: 'start'|'center'|'end'
        milestoneCharWidth: number
        milestoneLayoutMode: 'default'|'estimate'|'data'|'measure'
        milestoneTextPosition: 'inside'|'outside'|'always-outside'
        minZoomLevel: number
        readonly mode: 'horizontal'|'vertical'
        overlappingEventSorter: Function
        presets: PresetStore|object[]|Partial<PresetStoreConfig>[]
        project: ProjectModel
        readOnly: boolean
        readonly recurrenceCombo: RecurrenceCombo
        readonly resourceColumnWidth: number
        readonly resourceColumns: ResourceHeader
        resourceMargin: number
        resourceStore: ResourceStore
        resourceTimeRangeStore: ResourceTimeRangeStore|object|Partial<ResourceTimeRangeStoreConfig>
        resourceTimeRanges: ResourceTimeRangeModel[]|object[]|Partial<ResourceTimeRangeModelConfig>[]
        resources: ResourceModel[]|object[]|Partial<ResourceModelConfig>[]
        scrollLeft: number
        scrollTop: number
        scrollX: number
        selectedAssignments: AssignmentModel[]
        selectedEvents: EventModel[]
        snap: boolean
        state: object
        tickSize: number
        timeRangeStore: Store|object|Partial<StoreConfig>
        timeRanges: TimeSpan[]|object[]|Partial<TimeSpanConfig>[]
        timeResolution: object|number
        readonly timelineContext: TimelineContext
        readonly timelineScroller: Scroller
        tooltipTemplate: Function
        useInitialAnimation: boolean|string
        viewPreset: ViewPreset|string
        readonly viewportCenterDate: Date
        readonly visibleResources: object
        zoomLevel: number
        features: SchedulerBaseFeaturesType
        onAfterDependencySave: Function
        onAfterDragCreate: Function
        onAfterEventDrop: Function
        onAfterEventSave: Function
        onAssignmentSelectionChange: Function
        onBeforeAssignmentDelete: Function
        onBeforeAssignmentSelectionChange: Function
        onBeforeDependencyAdd: Function
        onBeforeDependencyDelete: Function
        onBeforeDependencyEdit: Function
        onBeforeDependencyEditShow: Function
        onBeforeDependencySave: Function
        onBeforeDestroy: Function
        onBeforeDragCreate: Function
        onBeforeDragCreateFinalize: Function
        onBeforeEventAdd: Function
        onBeforeEventDelete: Function
        onBeforeEventDrag: Function
        onBeforeEventDragSelect: Function
        onBeforeEventDropFinalize: Function
        onBeforeEventEdit: Function
        onBeforeEventEditShow: Function
        onBeforeEventResize: Function
        onBeforeEventResizeFinalize: Function
        onBeforeEventSave: Function
        onBeforeEventSelectionChange: Function
        onBeforePan: Function
        onBeforePresetChange: Function
        onBeforeSelectionChange: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onDependenciesDrawn: Function
        onDependencyClick: Function
        onDependencyDblClick: Function
        onDependencyMouseOut: Function
        onDependencyMouseOver: Function
        onDestroy: Function
        onDragCreateEnd: Function
        onDragCreateStart: Function
        onEventAutoCreated: Function
        onEventClick: Function
        onEventContextMenu: Function
        onEventDblClick: Function
        onEventDrag: Function
        onEventDragAbort: Function
        onEventDragModeChange: Function
        onEventDragReset: Function
        onEventDragStart: Function
        onEventDrop: Function
        onEventEditBeforeSetRecord: Function
        onEventKeyDown: Function
        onEventKeyUp: Function
        onEventMenuBeforeShow: Function
        onEventMenuItem: Function
        onEventMenuShow: Function
        onEventMouseDown: Function
        onEventMouseEnter: Function
        onEventMouseLeave: Function
        onEventMouseOut: Function
        onEventMouseOver: Function
        onEventMouseUp: Function
        onEventPartialResize: Function
        onEventResizeEnd: Function
        onEventResizeStart: Function
        onEventSelectionChange: Function
        onMouseOut: Function
        onMouseOver: Function
        onNavigate: Function
        onPointerOver: Function
        onPresetChange: Function
        onReleaseEvent: Function
        onRenderEvent: Function
        onResourceHeaderClick: Function
        onResourceHeaderContextmenu: Function
        onResourceHeaderDblclick: Function
        onResourceTimeRangeClick: Function
        onResourceTimeRangeContextMenu: Function
        onResourceTimeRangeDblClick: Function
        onResourceTimeRangeMouseDown: Function
        onResourceTimeRangeMouseOut: Function
        onResourceTimeRangeMouseOver: Function
        onResourceTimeRangeMouseUp: Function
        onResponsive: Function
        onScheduleClick: Function
        onScheduleContextMenu: Function
        onScheduleDblClick: Function
        onScheduleMenuBeforeShow: Function
        onScheduleMenuItem: Function
        onScheduleMenuShow: Function
        onScheduleMouseDown: Function
        onScheduleMouseEnter: Function
        onScheduleMouseLeave: Function
        onScheduleMouseMove: Function
        onScheduleMouseUp: Function
        onSelectionChange: Function
        onTimeAxisHeaderClick: Function
        onTimeAxisHeaderContextMenu: Function
        onTimeAxisHeaderContextMenuBeforeShow: Function
        onTimeAxisHeaderContextMenuItem: Function
        onTimeAxisHeaderContextMenuShow: Function
        onTimeAxisHeaderDblClick: Function
        onTimeSelectionChange: Function
        onTimeSelectionElementClick: Function
        onTimelineContextChange: Function
        constructor(config?: Partial<SchedulerBaseConfig>);
        static L(text: string, templateData?: object): string;
        static optionalL(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        abort(): void;
        addListener(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        applyStartEndParameters(): void;
        clearEventSelection(): void;
        createEvent(date: Date, resourceRecord: ResourceModel): Promise<void>;
        deselect(eventOrAssignment: EventModel|AssignmentModel): void;
        deselectAssignment(assignment: AssignmentModel, event?: Event): void;
        deselectAssignments(assignments: AssignmentModel[]): void;
        deselectEvent(event: EventModel): void;
        deselectEvents(events: EventModel[]): void;
        editEvent(eventRecord: EventModel, resourceRecord?: ResourceModel): void;
        getCoordinateFromDate(date: Date|number, options?: boolean|object): number;
        getDateFromCoordinate(coordinate: number, roundingMethod?: 'floor'|'round'|'ceil', local?: boolean, allowOutOfRange?: boolean): Date;
        getDateFromDomEvent(e: Event, roundingMethod?: 'floor'|'round'|'ceil', allowOutOfRange?: boolean): Date;
        getDateFromXY(xy: any[], roundingMethod?: 'floor'|'round'|'ceil', local?: boolean, allowOutOfRange?: boolean): Date;
        getElementFromAssignmentRecord(assignmentRecord: AssignmentModel): HTMLElement;
        getElementFromEventRecord(eventRecord: EventModel, resourceRecord: ResourceModel): HTMLElement;
        getElementFromResourceTimeRangeRecord(record: ResourceTimeRangeModel): HTMLElement;
        getElementsFromEventRecord(eventRecord: EventModel, resourceRecord?: ResourceModel): HTMLElement[];
        getMilestoneLabelWidth(eventRecord: EventModel, resourceRecord: ResourceModel): number;
        getResourceEventBox(eventRecord: EventModel, resourceRecord: ResourceModel, includeOutside?: boolean): Rectangle;
        getResourceRegion(resourceRecord: ResourceModel, startDate: Date, endDate: Date): Rectangle;
        getScheduleRegion(resourceRecord: ResourceModel, eventRecord: EventModel): Rectangle;
        getStartEndDatesFromRectangle(rect: Rectangle, roundingMethod: 'floor'|'round'|'ceil', duration: number): object;
        getTimeSpanDistance(startDate: Date, endDate: Date): number;
        hasListener(eventName: string): boolean;
        hideTerminals(eventElement: HTMLElement): void;
        isAssignmentSelected(assignment: AssignmentModel): boolean;
        isDateRangeAvailable(start: Date, end: Date, excludeEvent: EventModel|null, resource: ResourceModel): boolean;
        isEventSelected(event: EventModel): boolean;
        on(config: object|string, thisObj?: object|Function, oldThisObj?: object): Function;
        onEventCreated(eventRecord: EventModel): void;
        relayAll(through: EventsClass, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object|string, thisObj: object|Function, oldThisObj: object): void;
        repaintEventsForResource(resourceRecord: ResourceModel): void;
        resolveAssignmentRecord(element: HTMLElement): AssignmentModel;
        resolveDependencyRecord(element: HTMLElement): DependencyModel;
        resolveEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        resolveResourceRecord(elementOrEvent: HTMLElement|Event, xy?: number[]): ResourceModel;
        resolveResourceTimeRangeRecord(rangeElement: HTMLElement): ResourceTimeRangeModel;
        resolveRowRecord(elementOrEvent: HTMLElement|Event): ResourceModel;
        restartInitialAnimation(initialAnimation: boolean|string): void;
        resumeEvents(): boolean;
        resumeRefresh(trigger: boolean): Promise<void>;
        scheduleEvent(config: object): Promise<void>;
        scrollAssignmentIntoView(assignmentRecord: AssignmentModel, options?: object): Promise<any>;
        scrollEventIntoView(eventRecord: EventModel, options?: object): Promise<any>;
        scrollHorizontallyTo(x: number, options?: object|boolean): Promise<any>;
        scrollResourceEventIntoView(resourceRecord: ResourceModel, eventRecord: EventModel, options?: object): Promise<any>;
        scrollResourceIntoView(resourceRecord: ResourceModel, options?: object): Promise<any>;
        scrollTo(x: number, options?: object|boolean): Promise<any>;
        scrollToDate(date: Date, options?: object): Promise<any>;
        scrollToNow(options?: object): Promise<any>;
        scrollVerticallyTo(y: number, options?: object|boolean): Promise<any>;
        select(eventOrAssignment: EventModel|AssignmentModel, preserveSelection?: boolean): void;
        selectAssignment(assignment: AssignmentModel, preserveSelection?: boolean, event?: Event): void;
        selectAssignments(assignments: AssignmentModel[]): void;
        selectEvent(event: EventModel, preserveSelection?: boolean): void;
        selectEvents(events: EventModel[], preserveSelection?: boolean): void;
        setTimeSpan(startDate: Date, endDate: Date): void;
        shift(amount: number, unit?: 'ms'|'s'|'m'|'h'|'d'|'w'|'M'|'y'): void;
        shiftNext(amount?: number): void;
        shiftPrevious(amount?: number): void;
        showContextMenu(event: Event, alignSpec?: object|HTMLElement): void;
        showTerminals(timeSpanRecord: TimeSpan, element: HTMLElement): void;
        suspendEvents(queue?: boolean): void;
        suspendRefresh(): void;
        trigger(eventName: string, param?: object): boolean|Promise<any>;
        un(config: object|string, thisObj?: object|Function, oldThisObj?: object): void;
        updateLocalization(): void;
        updateProject(project: ProjectModel): void;
        whenProjectReady(callback: Function): void;
        zoomIn(levels?: number, options?: object): number|null;
        zoomInFull(): number|null;
        zoomOut(levels?: number, options?: object): number|null;
        zoomOutFull(): number|null;
        zoomTo(config: object|string|number): void;
        zoomToFit(options?: object): void;
        zoomToLevel(preset: number, options?: object): number|null;
        zoomToSpan(config: object): number|null;
    }

    type TimelineBaseFeaturesType = {
        cellEdit: CellEdit
        cellMenu: CellMenu
        cellTooltip: CellTooltip
        columnAutoWidth: ColumnAutoWidth
        columnDragToolbar: ColumnDragToolbar
        columnPicker: ColumnPicker
        columnRename: ColumnRename
        columnReorder: ColumnReorder
        columnResize: ColumnResize
        excelExporter: GridExcelExporter
        filter: Filter
        filterBar: FilterBar
        group: Group
        groupSummary: GridGroupSummary
        headerMenu: HeaderMenu
        mergeCells: MergeCells
        multipage: GridMultiPageExporter
        multipagevertical: GridMultiPageVerticalExporter
        pdfExport: GridPdfExport
        quickFind: QuickFind
        regionResize: RegionResize
        rowCopyPaste: RowCopyPaste
        rowExpander: RowExpander
        rowReorder: RowReorder
        search: Search
        singlepage: GridSinglePageExporter
        sort: Sort
        stickyCells: StickyCells
        stripe: Stripe
        summary: GridSummary
        tree: Tree
        treeGroup: TreeGroup
    }

    type TimelineBaseFeaturesConfigType = {
        cellEdit: string|boolean|Partial<CellEditConfig>
        cellMenu: string|boolean|Partial<CellMenuConfig>
        cellTooltip: string|boolean|Partial<CellTooltipConfig>
        columnAutoWidth: string|boolean|Partial<ColumnAutoWidthConfig>
        columnDragToolbar: string|boolean|Partial<ColumnDragToolbarConfig>
        columnPicker: string|boolean|Partial<ColumnPickerConfig>
        columnRename: string|boolean|Partial<ColumnRenameConfig>
        columnReorder: string|boolean|Partial<ColumnReorderConfig>
        columnResize: string|boolean|Partial<ColumnResizeConfig>
        excelExporter: string|boolean|Partial<GridExcelExporterConfig>
        filter: string|boolean|Partial<FilterConfig>
        filterBar: string|boolean|Partial<FilterBarConfig>
        group: string|boolean|Partial<GroupConfig>
        groupSummary: string|boolean|Partial<GridGroupSummaryConfig>
        headerMenu: string|boolean|Partial<HeaderMenuConfig>
        mergeCells: string|boolean|Partial<MergeCellsConfig>
        multipage: string|boolean|Partial<GridMultiPageExporterConfig>
        multipagevertical: string|boolean|Partial<GridMultiPageVerticalExporterConfig>
        pdfExport: string|boolean|Partial<GridPdfExportConfig>
        quickFind: string|boolean|Partial<QuickFindConfig>
        regionResize: string|boolean|Partial<RegionResizeConfig>
        rowCopyPaste: string|boolean|Partial<RowCopyPasteConfig>
        rowExpander: string|boolean|Partial<RowExpanderConfig>
        rowReorder: string|boolean|Partial<RowReorderConfig>
        search: string|boolean|Partial<SearchConfig>
        singlepage: string|boolean|Partial<GridSinglePageExporterConfig>
        sort: string|boolean|Partial<SortConfig>
        stickyCells: string|boolean|Partial<StickyCellsConfig>
        stripe: string|boolean|Partial<StripeConfig>
        summary: string|boolean|Partial<GridSummaryConfig>
        tree: string|boolean|Partial<TreeConfig>
        treeGroup: string|boolean|Partial<TreeGroupConfig>
    }

    type TimelineBaseConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowOver: boolean
        anchor: boolean
        anchorToTarget: boolean
        animateRemovingRows: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoAdjustTimeAxis: boolean
        autoClose: boolean
        autoHeight: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        barMargin: number
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        bufferCoef: number
        bufferThreshold: number
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        columnLines: boolean
        columns: ColumnStore|object[]|object|Partial<ColumnStoreConfig>|Partial<ColumnStoreConfig>[]
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        contextMenuTriggerEvent: 'contextmenu'|'click'|'dblclick'
        data: object[]|Model[]|Partial<ModelConfig>[]
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaultRegion: string
        defaults: object
        destroyStore: boolean
        disableGridRowModelWarning: boolean
        disabled: boolean
        dismissDelay: number
        displayDateFormat: string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        durationDisplayPrecision: number|boolean
        emptyText: string
        enableEventAnimations: boolean
        enableRecurringEvents: boolean
        enableSticky: boolean
        enableTextSelection: boolean
        enableUndoRedoKeys: boolean
        endDate: Date|string
        eventColor: 'red'|'pink'|'purple'|'violet'|'indigo'|'blue'|'cyan'|'teal'|'green'|'lime'|'yellow'|'orange'|'deep-orange'|'gray'|'gantt-green'
        eventStyle: 'plain'|'border'|'colored'|'hollow'|'line'|'dashed'|'minimal'|'rounded'|'calendar'|'interday'
        features: Partial<TimelineBaseFeaturesConfigType>
        fillLastColumn: boolean
        fillTicks: boolean
        fixedRowHeight: boolean
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        forSelector: string
        forceFit: boolean
        fullRowRefresh: boolean
        getHtml: Function|string
        getRowHeight: Function
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideDelay: number
        hideHeaders: boolean
        hideOnDelegateChange: boolean
        hideWhenEmpty: boolean
        hoverDelay: number
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        infiniteScroll: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        keyMap: object
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        loadMask: string|object|null
        loadMaskDefaults: object|Mask|Partial<MaskConfig>
        loadMaskError: object|Mask|boolean|Partial<MaskConfig>
        loadingMsg: string
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        longPressTime: number
        managedEventSizing: boolean
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maxZoomLevel: number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        minZoomLevel: number
        modal: boolean
        monitorResize: boolean
        mouseOffsetX: number
        mouseOffsetY: number
        namedItems: object
        owner: Widget
        partner: TimelineBase
        plugins: Function[]
        positioned: boolean
        preserveFocusOnDatasetChange: boolean
        preserveScrollOnDatasetChange: boolean
        presets: object[]
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        resizeToFitIncludesHeader: boolean
        responsiveLevels: object
        ripple: boolean|object
        rootElement: ShadowRoot
        rowHeight: number
        scrollAction: 'hide'|'realign'|null
        scrollManager: object|ScrollManager|Partial<ScrollManagerConfig>
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        scrollerClass: typeof Scroller
        selectionMode: object
        showAnimation: boolean|object
        showDirty: boolean
        showOnClick: boolean
        showOnHover: boolean
        showTooltipWhenDisabled: boolean
        snap: boolean
        snapRelativeToEventStartDate: boolean
        startDate: Date|string
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        stickyHeaders: boolean
        store: Store|Partial<StoreConfig>
        strips: object
        style: string
        subGridConfigs: object
        suppressFit: boolean
        syncMask: string|object|null
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        tickSize: number
        timeAxis: object|TimeAxis|Partial<TimeAxisConfig>
        title: string
        tools: object
        tooltip: string|object
        trackMouse: boolean
        transitionDuration: number
        trapFocus: boolean
        ui: string|object
        viewPreset: string|object
        visibleDate: Date|object
        visibleZoomFactor: number
        weekStartDay: number
        weight: number
        width: string|number
        workingTime: object
        x: number
        y: number
        zoomKeepsOriginalTimespan: boolean
        zoomOnMouseWheel: boolean
        zoomOnTimeAxisDoubleClick: boolean
        onBeforeAssignmentDelete: Function
        onBeforeCancelCellEdit: Function
        onBeforeCellEditStart: Function
        onBeforeClose: Function
        onBeforeColumnDragStart: Function
        onBeforeColumnDropFinalize: Function
        onBeforeCopy: Function
        onBeforeDestroy: Function
        onBeforeEventDelete: Function
        onBeforeFinishCellEdit: Function
        onBeforeHide: Function
        onBeforePaste: Function
        onBeforePdfExport: Function
        onBeforePresetChange: Function
        onBeforeRenderRow: Function
        onBeforeRenderRows: Function
        onBeforeSelectionChange: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onBeforeToggleGroup: Function
        onBeforeToggleNode: Function
        onCancelCellEdit: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMenuBeforeShow: Function
        onCellMenuItem: Function
        onCellMenuShow: Function
        onCellMenuToggleItem: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onCollapseNode: Function
        onColumnDragStart: Function
        onColumnDrop: Function
        onContextMenuItem: Function
        onContextMenuToggleItem: Function
        onCopy: Function
        onDataChange: Function
        onDateRangeChange: Function
        onDestroy: Function
        onExpandNode: Function
        onFinishCellEdit: Function
        onFocusIn: Function
        onFocusOut: Function
        onHeaderMenuBeforeShow: Function
        onHeaderMenuItem: Function
        onHeaderMenuShow: Function
        onHeaderMenuToggleItem: Function
        onHide: Function
        onMouseOut: Function
        onMouseOver: Function
        onPaint: Function
        onPaste: Function
        onPdfExport: Function
        onPointerOver: Function
        onPresetChange: Function
        onReadOnly: Function
        onRecompose: Function
        onRenderRow: Function
        onRenderRows: Function
        onResize: Function
        onResponsive: Function
        onScroll: Function
        onSelectionChange: Function
        onShow: Function
        onStartCellEdit: Function
        onSubGridCollapse: Function
        onSubGridExpand: Function
        onTimeAxisChange: Function
        onTimeAxisHeaderClick: Function
        onTimeAxisHeaderContextMenu: Function
        onTimeAxisHeaderDblClick: Function
        onTimelineContextChange: Function
        onTimelineViewportResize: Function
        onToggleGroup: Function
        onToggleNode: Function
        onToolClick: Function
        onVisibleDateRangeChange: Function
    }

    export abstract class TimelineBase extends Grid implements TimelineDateMapperClass, TimelineDomEventsClass, TimelineEventRenderingClass, TimelineScrollClass, TimelineStateClass, TimelineViewPresetsClass, TimelineZoomableClass, RecurringEventsClass {
        static eventColors: string[]
        static eventStyles: string[]
        barMargin: number
        displayDateFormat: string
        enableEventAnimations: boolean
        endDate: Date
        eventColor: 'red'|'pink'|'purple'|'violet'|'indigo'|'blue'|'cyan'|'teal'|'green'|'lime'|'yellow'|'orange'|'deep-orange'|'gray'|'gantt-green'
        fillTicks: boolean
        forceFit: boolean
        readonly hasVisibleEvents: boolean
        maxZoomLevel: number
        minZoomLevel: number
        readonly partners: TimelineBase
        presets: PresetStore|object[]|Partial<PresetStoreConfig>[]
        scrollLeft: number
        scrollTop: number
        scrollX: number
        snap: boolean
        startDate: Date
        state: object
        tickSize: number
        readonly timeAxis: TimeAxis
        readonly timeAxisSubGrid: SubGrid
        readonly timeAxisSubGridElement: HTMLElement
        readonly timeAxisViewModel: TimeAxisViewModel
        timeResolution: object|number
        readonly timelineContext: TimelineContext
        readonly timelineScroller: Scroller
        viewPreset: ViewPreset|string
        readonly viewportCenterDate: Date
        readonly visibleDateRange: object
        workingTime: object
        zoomLevel: number
        features: TimelineBaseFeaturesType
        onBeforeAssignmentDelete: Function
        onBeforeDestroy: Function
        onBeforeEventDelete: Function
        onBeforePresetChange: Function
        onBeforeSelectionChange: Function
        onCatchAll: Function
        onCellClick: Function
        onCellContextMenu: Function
        onCellDblClick: Function
        onCellMouseOut: Function
        onCellMouseOver: Function
        onDateRangeChange: Function
        onDestroy: Function
        onMouseOut: Function
        onMouseOver: Function
        onPointerOver: Function
        onPresetChange: Function
        onResponsive: Function
        onSelectionChange: Function
        onTimeAxisChange: Function
        onTimeAxisHeaderClick: Function
        onTimeAxisHeaderContextMenu: Function
        onTimeAxisHeaderDblClick: Function
        onTimelineContextChange: Function
        onTimelineViewportResize: Function
        onVisibleDateRangeChange: Function
        constructor(config?: Partial<TimelineBaseConfig>);
        addPartner(otherTimeline: TimelineBase): void;
        formatDuration(The: number, nbrDecimals?: number): number;
        getCoordinateFromDate(date: Date|number, options?: boolean|object): number;
        getDateFromCoordinate(coordinate: number, roundingMethod?: 'floor'|'round'|'ceil', local?: boolean, allowOutOfRange?: boolean): Date;
        getDateFromDomEvent(e: Event, roundingMethod?: 'floor'|'round'|'ceil', allowOutOfRange?: boolean): Date;
        getDateFromXY(xy: any[], roundingMethod?: 'floor'|'round'|'ceil', local?: boolean, allowOutOfRange?: boolean): Date;
        getForegroundDomConfigs(configs: any[]): void;
        getHeaderDomConfigs(configs: any[]): void;
        getOccurrencesFor(recurringEvent: TimeSpan): TimeSpan[];
        getStartEndDatesFromRectangle(rect: Rectangle, roundingMethod: 'floor'|'round'|'ceil', duration: number): object;
        getTimeSpanDistance(startDate: Date, endDate: Date): number;
        isPartneredWith(partner: TimelineBase): boolean;
        preserveViewCenter(fn: Function, thisObj: object, ...args: any[]): void;
        refreshWithTransition(): void;
        removePartner(otherTimeline: TimelineBase): void;
        scrollHorizontallyTo(x: number, options?: object|boolean): Promise<any>;
        scrollTo(x: number, options?: object|boolean): Promise<any>;
        scrollToDate(date: Date, options?: object): Promise<any>;
        scrollToNow(options?: object): Promise<any>;
        scrollVerticallyTo(y: number, options?: object|boolean): Promise<any>;
        setEndDate(date: Date, keepDuration?: boolean): void;
        setStartDate(date: Date, keepDuration?: boolean): void;
        setTimeSpan(startDate: Date, endDate: Date): void;
        shift(amount: number, unit?: 'ms'|'s'|'m'|'h'|'d'|'w'|'M'|'y'): void;
        shiftNext(amount?: number): void;
        shiftPrevious(amount?: number): void;
        zoomIn(levels?: number, options?: object): number|null;
        zoomInFull(): number|null;
        zoomOut(levels?: number, options?: object): number|null;
        zoomOutFull(): number|null;
        zoomTo(config: object|string|number): void;
        zoomToFit(options?: object): void;
        zoomToLevel(preset: number, options?: object): number|null;
        zoomToSpan(config: object): number|null;
    }

    type SchedulerExportDialogConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoSelectVisibleColumns: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        client: Grid
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePNGMultipageOption: boolean
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCancel: Function
        onCatchAll: Function
        onDestroy: Function
        onExport: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class SchedulerExportDialog extends ExportDialog {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SchedulerExportDialogConfig>);
    }

    type DescribableClassConfig = {
        dateFormat: string
        dateSeparator: string
        descriptionFormat: string|string[]|boolean[]
        descriptionRenderer: Function
    }

    export class DescribableClass {
        dateSeparator: string
        descriptionFormat: string|string[]|boolean[]
        constructor(config?: Partial<DescribableClassConfig>);
    }

    export const Describable : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & DescribableClass>

    type SchedulerEventNavigationClassConfig = {
        enableDeleteKey: boolean
        onNavigate: Function
    }

    export class SchedulerEventNavigationClass {
        onNavigate: Function
        constructor(config?: Partial<SchedulerEventNavigationClassConfig>);
    }

    export const SchedulerEventNavigation : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & SchedulerEventNavigationClass>

    type SchedulerEventSelectionClassConfig = {
        deselectOnClick: boolean
        eventSelectionDisabled: boolean
        highlightPredecessors: boolean
        highlightSuccessors: boolean
        isEventSelectable: Function
        maintainSelectionOnDatasetChange: boolean
        multiEventSelect: boolean
        triggerSelectionChangeOnRemove: boolean
        onAssignmentSelectionChange: Function
        onBeforeAssignmentSelectionChange: Function
        onBeforeEventSelectionChange: Function
        onEventSelectionChange: Function
    }

    export class SchedulerEventSelectionClass {
        isEventSelectable: Function
        selectedAssignments: AssignmentModel[]
        selectedEvents: EventModel[]
        onAssignmentSelectionChange: Function
        onBeforeAssignmentSelectionChange: Function
        onBeforeEventSelectionChange: Function
        onEventSelectionChange: Function
        constructor(config?: Partial<SchedulerEventSelectionClassConfig>);
        clearEventSelection(): void;
        deselect(eventOrAssignment: EventModel|AssignmentModel): void;
        deselectAssignment(assignment: AssignmentModel, event?: Event): void;
        deselectAssignments(assignments: AssignmentModel[]): void;
        deselectEvent(event: EventModel): void;
        deselectEvents(events: EventModel[]): void;
        isAssignmentSelected(assignment: AssignmentModel): boolean;
        isEventSelected(event: EventModel): boolean;
        select(eventOrAssignment: EventModel|AssignmentModel, preserveSelection?: boolean): void;
        selectAssignment(assignment: AssignmentModel, preserveSelection?: boolean, event?: Event): void;
        selectAssignments(assignments: AssignmentModel[]): void;
        selectEvent(event: EventModel, preserveSelection?: boolean): void;
        selectEvents(events: EventModel[], preserveSelection?: boolean): void;
    }

    export const SchedulerEventSelection : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & SchedulerEventSelectionClass>

    type RecurringEventsClassConfig = {
        enableRecurringEvents: boolean
        onBeforeAssignmentDelete: Function
        onBeforeEventDelete: Function
    }

    export class RecurringEventsClass {
        onBeforeAssignmentDelete: Function
        onBeforeEventDelete: Function
        constructor(config?: Partial<RecurringEventsClassConfig>);
        getOccurrencesFor(recurringEvent: TimeSpan): TimeSpan[];
    }

    export const RecurringEvents : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & RecurringEventsClass>

    export class SchedulerDomClass {
        getElementFromAssignmentRecord(assignmentRecord: AssignmentModel): HTMLElement;
        getElementFromEventRecord(eventRecord: EventModel, resourceRecord: ResourceModel): HTMLElement;
        getElementsFromEventRecord(eventRecord: EventModel, resourceRecord?: ResourceModel): HTMLElement[];
        resolveAssignmentRecord(element: HTMLElement): AssignmentModel;
        resolveEventRecord(elementOrEvent: HTMLElement|Event): EventModel;
        resolveResourceRecord(elementOrEvent: HTMLElement|Event, xy?: number[]): ResourceModel;
        resolveRowRecord(elementOrEvent: HTMLElement|Event): ResourceModel;
    }

    export const SchedulerDom : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & SchedulerDomClass>

    type SchedulerDomEventsClassConfig = {
        onEventClick: Function
        onEventContextMenu: Function
        onEventDblClick: Function
        onEventMouseDown: Function
        onEventMouseEnter: Function
        onEventMouseLeave: Function
        onEventMouseOut: Function
        onEventMouseOver: Function
        onEventMouseUp: Function
        onScheduleClick: Function
        onScheduleContextMenu: Function
        onScheduleDblClick: Function
        onScheduleMouseDown: Function
        onScheduleMouseEnter: Function
        onScheduleMouseLeave: Function
        onScheduleMouseMove: Function
        onScheduleMouseUp: Function
    }

    export class SchedulerDomEventsClass {
        onEventClick: Function
        onEventContextMenu: Function
        onEventDblClick: Function
        onEventMouseDown: Function
        onEventMouseEnter: Function
        onEventMouseLeave: Function
        onEventMouseOut: Function
        onEventMouseOver: Function
        onEventMouseUp: Function
        onScheduleClick: Function
        onScheduleContextMenu: Function
        onScheduleDblClick: Function
        onScheduleMouseDown: Function
        onScheduleMouseEnter: Function
        onScheduleMouseLeave: Function
        onScheduleMouseMove: Function
        onScheduleMouseUp: Function
    }

    export const SchedulerDomEvents : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & SchedulerDomEventsClass>

    type SchedulerEventRenderingClassConfig = {
        barMargin: number
        defaultResourceImageName: string
        eventBarTextField: string
        eventBodyTemplate: Function
        eventLayout: 'stack'|'pack'|'mixed'|'none'|object
        eventRenderer: Function
        eventRendererThisObj: object
        // @deprecated
        horizontalEventSorterFn: Function
        milestoneAlign: 'start'|'center'|'end'
        milestoneCharWidth: number
        milestoneLayoutMode: 'default'|'estimate'|'data'|'measure'
        milestoneTextPosition: 'inside'|'outside'|'always-outside'
        narrowEventWidth: number
        overlappingEventSorter: Function
        resourceColumns: Partial<ResourceHeaderConfig>
        resourceImageExtension: string
        resourceImagePath: string
        resourceMargin: number
        useInitialAnimation: boolean|string
    }

    export class SchedulerEventRenderingClass {
        eventLayout: 'stack'|'pack'|'mixed'|'none'|object
        milestoneAlign: 'start'|'center'|'end'
        milestoneCharWidth: number
        milestoneLayoutMode: 'default'|'estimate'|'data'|'measure'
        milestoneTextPosition: 'inside'|'outside'|'always-outside'
        overlappingEventSorter: Function
        readonly resourceColumnWidth: number
        readonly resourceColumns: ResourceHeader
        resourceMargin: number
        useInitialAnimation: boolean|string
        constructor(config?: Partial<SchedulerEventRenderingClassConfig>);
        getMilestoneLabelWidth(eventRecord: EventModel, resourceRecord: ResourceModel): number;
        repaintEventsForResource(resourceRecord: ResourceModel): void;
        restartInitialAnimation(initialAnimation: boolean|string): void;
    }

    export const SchedulerEventRendering : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & SchedulerEventRenderingClass>

    export class SchedulerRegionsClass {
        getResourceEventBox(eventRecord: EventModel, resourceRecord: ResourceModel, includeOutside?: boolean): Rectangle;
        getResourceRegion(resourceRecord: ResourceModel, startDate: Date, endDate: Date): Rectangle;
        getScheduleRegion(resourceRecord: ResourceModel, eventRecord: EventModel): Rectangle;
    }

    export const SchedulerRegions : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & SchedulerRegionsClass>

    export class SchedulerScrollClass {
        scrollAssignmentIntoView(assignmentRecord: AssignmentModel, options?: object): Promise<any>;
        scrollEventIntoView(eventRecord: EventModel, options?: object): Promise<any>;
        scrollResourceEventIntoView(resourceRecord: ResourceModel, eventRecord: EventModel, options?: object): Promise<any>;
        scrollResourceIntoView(resourceRecord: ResourceModel, options?: object): Promise<any>;
    }

    export const SchedulerScroll : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & SchedulerScrollClass>

    export class SchedulerStateClass {
        state: object
    }

    export const SchedulerState : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & SchedulerStateClass>

    type SchedulerStoresClassConfig = {
        crudManager: object|CrudManager|Partial<CrudManagerConfig>
        crudManagerClass: typeof CrudManager
        destroyStores: boolean
        endParamName: string
        passStartEndParameters: boolean
        project: ProjectModel|object|Partial<ProjectModelConfig>
        resourceTimeRangeStore: ResourceTimeRangeStore|object|Partial<ResourceTimeRangeStoreConfig>
        resourceTimeRanges: ResourceTimeRangeModel[]|object[]|Partial<ResourceTimeRangeModelConfig>[]
        startParamName: string
        timeRangeStore: Store|object|Partial<StoreConfig>
        timeRanges: TimeSpan[]|object[]|Partial<TimeSpanConfig>[]
        onDataChange: Function
    }

    export class SchedulerStoresClass extends ProjectConsumerClass {
        crudManager: CrudManager
        resourceTimeRangeStore: ResourceTimeRangeStore|object|Partial<ResourceTimeRangeStoreConfig>
        resourceTimeRanges: ResourceTimeRangeModel[]|object[]|Partial<ResourceTimeRangeModelConfig>[]
        timeRangeStore: Store|object|Partial<StoreConfig>
        timeRanges: TimeSpan[]|object[]|Partial<TimeSpanConfig>[]
        onDataChange: Function
        constructor(config?: Partial<SchedulerStoresClassConfig>);
        applyStartEndParameters(): void;
    }

    export const SchedulerStores : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & SchedulerStoresClass>

    type TimelineDateMapperClassConfig = {
        snap: boolean
    }

    export class TimelineDateMapperClass {
        displayDateFormat: string
        snap: boolean
        timeResolution: object|number
        readonly viewportCenterDate: Date
        constructor(config?: Partial<TimelineDateMapperClassConfig>);
        getCoordinateFromDate(date: Date|number, options?: boolean|object): number;
        getDateFromCoordinate(coordinate: number, roundingMethod?: 'floor'|'round'|'ceil', local?: boolean, allowOutOfRange?: boolean): Date;
        getDateFromDomEvent(e: Event, roundingMethod?: 'floor'|'round'|'ceil', allowOutOfRange?: boolean): Date;
        getDateFromXY(xy: any[], roundingMethod?: 'floor'|'round'|'ceil', local?: boolean, allowOutOfRange?: boolean): Date;
        getStartEndDatesFromRectangle(rect: Rectangle, roundingMethod: 'floor'|'round'|'ceil', duration: number): object;
        getTimeSpanDistance(startDate: Date, endDate: Date): number;
    }

    export const TimelineDateMapper : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & TimelineDateMapperClass>

    type TimelineDomEventsClassConfig = {
        onTimeAxisHeaderClick: Function
        onTimeAxisHeaderContextMenu: Function
        onTimeAxisHeaderDblClick: Function
        onTimelineContextChange: Function
    }

    export class TimelineDomEventsClass {
        readonly timelineContext: TimelineContext
        onTimeAxisHeaderClick: Function
        onTimeAxisHeaderContextMenu: Function
        onTimeAxisHeaderDblClick: Function
        onTimelineContextChange: Function
    }

    export const TimelineDomEvents : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & TimelineDomEventsClass>

    type TimelineEventRenderingClassConfig = {
        barMargin: number
        eventColor: 'red'|'pink'|'purple'|'violet'|'indigo'|'blue'|'cyan'|'teal'|'green'|'lime'|'yellow'|'orange'|'deep-orange'|'gray'|'gantt-green'
        eventStyle: 'plain'|'border'|'colored'|'hollow'|'line'|'dashed'|'minimal'|'rounded'|'calendar'|'interday'
        fillTicks: boolean
        managedEventSizing: boolean
        tickSize: number
    }

    export class TimelineEventRenderingClass {
        static eventColors: string[]
        static eventStyles: string[]
        barMargin: number
        eventColor: 'red'|'pink'|'purple'|'violet'|'indigo'|'blue'|'cyan'|'teal'|'green'|'lime'|'yellow'|'orange'|'deep-orange'|'gray'|'gantt-green'
        fillTicks: boolean
        tickSize: number
        constructor(config?: Partial<TimelineEventRenderingClassConfig>);
    }

    export const TimelineEventRendering : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & TimelineEventRenderingClass>

    type TimelineScrollClassConfig = {
        bufferCoef: number
        bufferThreshold: number
        infiniteScroll: boolean
    }

    export class TimelineScrollClass {
        scrollLeft: number
        scrollTop: number
        scrollX: number
        readonly timelineScroller: Scroller
        constructor(config?: Partial<TimelineScrollClassConfig>);
        scrollHorizontallyTo(x: number, options?: object|boolean): Promise<any>;
        scrollTo(x: number, options?: object|boolean): Promise<any>;
        scrollToDate(date: Date, options?: object): Promise<any>;
        scrollToNow(options?: object): Promise<any>;
        scrollVerticallyTo(y: number, options?: object|boolean): Promise<any>;
    }

    export const TimelineScroll : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & TimelineScrollClass>

    export class TimelineStateClass {
        state: object
    }

    export const TimelineState : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & TimelineStateClass>

    type TimelineViewPresetsClassConfig = {
        displayDateFormat: string
        presets: object[]
        viewPreset: string|object
        onBeforePresetChange: Function
        onPresetChange: Function
    }

    export class TimelineViewPresetsClass {
        presets: PresetStore|object[]|Partial<PresetStoreConfig>[]
        viewPreset: ViewPreset|string
        onBeforePresetChange: Function
        onPresetChange: Function
        constructor(config?: Partial<TimelineViewPresetsClassConfig>);
    }

    export const TimelineViewPresets : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & TimelineViewPresetsClass>

    type TimelineZoomableClassConfig = {
        maxZoomLevel: number
        minZoomLevel: number
        visibleZoomFactor: number
        zoomKeepsOriginalTimespan: boolean
        zoomOnMouseWheel: boolean
        zoomOnTimeAxisDoubleClick: boolean
    }

    export class TimelineZoomableClass {
        maxZoomLevel: number
        minZoomLevel: number
        zoomLevel: number
        constructor(config?: Partial<TimelineZoomableClassConfig>);
        setTimeSpan(startDate: Date, endDate: Date): void;
        shift(amount: number, unit?: 'ms'|'s'|'m'|'h'|'d'|'w'|'M'|'y'): void;
        shiftNext(amount?: number): void;
        shiftPrevious(amount?: number): void;
        zoomIn(levels?: number, options?: object): number|null;
        zoomInFull(): number|null;
        zoomOut(levels?: number, options?: object): number|null;
        zoomOutFull(): number|null;
        zoomTo(config: object|string|number): void;
        zoomToFit(options?: object): void;
        zoomToLevel(preset: number, options?: object): number|null;
        zoomToSpan(config: object): number|null;
    }

    export const TimelineZoomable : <T extends AnyConstructor<Base>>(base : T) => AnyConstructor<InstanceType<T> & TimelineZoomableClass>

    type TimeAxisViewModelConfig = {
        bubbleEvents: object
        callOnFunctions: boolean
        listeners: object
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onReconfigure: Function
        onUpdate: Function
    }

    export class TimeAxisViewModel extends EventsClass {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        onReconfigure: Function
        onUpdate: Function
        constructor(config?: Partial<TimeAxisViewModelConfig>);
        getDateFromPosition(position: number, roundingMethod?: 'floor'|'round'|'ceil', allowOutOfRange?: boolean): Date;
        getDistanceBetweenDates(start: Date, end: Date): number;
        getDistanceForDuration(durationMS: number): number;
        getPositionFromDate(date: Date): number;
    }

    type RecurrenceConfirmationPopupConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class RecurrenceConfirmationPopup extends Popup {
        readonly cancelButton: Button
        readonly changeMultipleButton: Button
        readonly changeSingleButton: Button
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RecurrenceConfirmationPopupConfig>);
        confirm(config: object): void;
        onCancelButtonClick(): void;
        onChangeMultipleButtonClick(): void;
        onChangeSingleButtonClick(): void;
        processMultipleRecords(): void;
        processSingleRecord(): void;
    }

    type RecurrenceEditorConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoShow: boolean
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        closable: boolean
        closeAction: 'hide'|'destroy'
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        focusOnToFront: boolean
        footer: object|string
        forElement: HTMLElement
        header: string|boolean|PanelHeader
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        maximizable: boolean
        maximized: boolean
        minHeight: string|number
        minWidth: string|number
        modal: boolean
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showOnClick: boolean
        showTooltipWhenDisabled: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeClose: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToolClick: Function
    }

    export class RecurrenceEditor extends Popup {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RecurrenceEditorConfig>);
        syncEventRecord(): void;
    }

    type RecurrenceLegendButtonConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        href: string
        html: string|Function
        htmlCls: string|object
        icon: string
        iconAlign: 'start'|'end'
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        menu: object|object[]|Widget|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        menuIcon: string
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        owner: Widget
        positioned: boolean
        pressed: boolean
        pressedIcon: string
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        target: string
        text: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        toggleGroup: string
        toggleable: boolean
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onBeforeShowMenu: Function
        onBeforeToggle: Function
        onCatchAll: Function
        onClick: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToggle: Function
    }

    export class RecurrenceLegendButton extends Button {
        recurrence: RecurrenceModel
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RecurrenceLegendButtonConfig>);
    }

    type RecurrenceComboConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        caseSensitive: boolean
        centered: boolean
        chipView: Partial<ChipViewConfig>
        clearTextOnPickerHide: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        createOnUnmatched: Function|string|boolean
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        displayValueRenderer: Function
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        emptyText: string
        encodeFilterParams: Function
        filterOnEnter: boolean
        filterOperator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'
        filterParamName: string
        filterSelected: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePickerOnSelect: boolean
        hideTrigger: boolean
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inlinePicker: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        items: object[]|string[]|object
        keyStrokeChangeDelay: number
        keyStrokeFilterDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listCls: string
        listItemTpl: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minChars: number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        multiValueSeparator: string
        name: string
        overlayAnchor: boolean
        owner: Widget
        picker: object
        pickerAlignElement: string
        pickerWidth: number
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        primaryFilter: object
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        store: Store|Partial<StoreConfig>
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggerAction: 'all'|'last'|null
        triggers: object
        ui: string|object
        validateFilter: boolean
        validateOnInput: boolean
        value: string|number[]|string[]
        valueField: string|null
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onSelect: Function
        onShow: Function
        onTrigger: Function
    }

    export class RecurrenceCombo extends RecurrenceFrequencyCombo {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RecurrenceComboConfig>);
    }

    type RecurrenceDaysButtonGroupConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object[]|Button[]|Partial<ButtonConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        toggleGroup: boolean
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onClick: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
        onToggle: Function
    }

    export class RecurrenceDaysButtonGroup extends ButtonGroup {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RecurrenceDaysButtonGroupConfig>);
    }

    type RecurrenceDaysComboConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        caseSensitive: boolean
        centered: boolean
        chipView: Partial<ChipViewConfig>
        clearTextOnPickerHide: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        createOnUnmatched: Function|string|boolean
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        displayValueRenderer: Function
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        emptyText: string
        encodeFilterParams: Function
        filterOnEnter: boolean
        filterOperator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'
        filterParamName: string
        filterSelected: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePickerOnSelect: boolean
        hideTrigger: boolean
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inlinePicker: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        items: object[]|string[]|object
        keyStrokeChangeDelay: number
        keyStrokeFilterDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listCls: string
        listItemTpl: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minChars: number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        multiValueSeparator: string
        name: string
        overlayAnchor: boolean
        owner: Widget
        picker: object
        pickerAlignElement: string
        pickerWidth: number
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        primaryFilter: object
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        store: Store|Partial<StoreConfig>
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggerAction: 'all'|'last'|null
        triggers: object
        ui: string|object
        validateFilter: boolean
        validateOnInput: boolean
        value: string|number[]|string[]
        valueField: string|null
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onSelect: Function
        onShow: Function
        onTrigger: Function
    }

    export class RecurrenceDaysCombo extends Combo {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RecurrenceDaysComboConfig>);
    }

    type RecurrenceFrequencyComboConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        caseSensitive: boolean
        centered: boolean
        chipView: Partial<ChipViewConfig>
        clearTextOnPickerHide: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        createOnUnmatched: Function|string|boolean
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        displayValueRenderer: Function
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        emptyText: string
        encodeFilterParams: Function
        filterOnEnter: boolean
        filterOperator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'
        filterParamName: string
        filterSelected: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePickerOnSelect: boolean
        hideTrigger: boolean
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inlinePicker: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        items: object[]|string[]|object
        keyStrokeChangeDelay: number
        keyStrokeFilterDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listCls: string
        listItemTpl: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minChars: number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        multiValueSeparator: string
        name: string
        overlayAnchor: boolean
        owner: Widget
        picker: object
        pickerAlignElement: string
        pickerWidth: number
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        primaryFilter: object
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        store: Store|Partial<StoreConfig>
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggerAction: 'all'|'last'|null
        triggers: object
        ui: string|object
        validateFilter: boolean
        validateOnInput: boolean
        value: string|number[]|string[]
        valueField: string|null
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onSelect: Function
        onShow: Function
        onTrigger: Function
    }

    export class RecurrenceFrequencyCombo extends Combo {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RecurrenceFrequencyComboConfig>);
    }

    type RecurrencePositionsComboConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        caseSensitive: boolean
        centered: boolean
        chipView: Partial<ChipViewConfig>
        clearTextOnPickerHide: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        createOnUnmatched: Function|string|boolean
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        displayValueRenderer: Function
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        emptyText: string
        encodeFilterParams: Function
        filterOnEnter: boolean
        filterOperator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'
        filterParamName: string
        filterSelected: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePickerOnSelect: boolean
        hideTrigger: boolean
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inlinePicker: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        items: object[]|string[]|object
        keyStrokeChangeDelay: number
        keyStrokeFilterDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listCls: string
        listItemTpl: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minChars: number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        multiValueSeparator: string
        name: string
        overlayAnchor: boolean
        owner: Widget
        picker: object
        pickerAlignElement: string
        pickerWidth: number
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        primaryFilter: object
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        store: Store|Partial<StoreConfig>
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggerAction: 'all'|'last'|null
        triggers: object
        ui: string|object
        validateFilter: boolean
        validateOnInput: boolean
        value: string|number[]|string[]
        valueField: string|null
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onSelect: Function
        onShow: Function
        onTrigger: Function
    }

    export class RecurrencePositionsCombo extends Combo {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RecurrencePositionsComboConfig>);
    }

    type RecurrenceStopConditionComboConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        caseSensitive: boolean
        centered: boolean
        chipView: Partial<ChipViewConfig>
        clearTextOnPickerHide: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        createOnUnmatched: Function|string|boolean
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        displayValueRenderer: Function
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        emptyText: string
        encodeFilterParams: Function
        filterOnEnter: boolean
        filterOperator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'
        filterParamName: string
        filterSelected: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePickerOnSelect: boolean
        hideTrigger: boolean
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inlinePicker: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        items: object[]|string[]|object
        keyStrokeChangeDelay: number
        keyStrokeFilterDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listCls: string
        listItemTpl: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minChars: number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        multiValueSeparator: string
        name: string
        overlayAnchor: boolean
        owner: Widget
        picker: object
        pickerAlignElement: string
        pickerWidth: number
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        primaryFilter: object
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        store: Store|Partial<StoreConfig>
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggerAction: 'all'|'last'|null
        triggers: object
        ui: string|object
        validateFilter: boolean
        validateOnInput: boolean
        value: string|number[]|string[]
        valueField: string|null
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onSelect: Function
        onShow: Function
        onTrigger: Function
    }

    export class RecurrenceStopConditionCombo extends Combo {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<RecurrenceStopConditionComboConfig>);
    }

    type ProjectComboConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        caseSensitive: boolean
        centered: boolean
        chipView: Partial<ChipViewConfig>
        clearTextOnPickerHide: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        createOnUnmatched: Function|string|boolean
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        displayValueRenderer: Function
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        emptyText: string
        encodeFilterParams: Function
        filterOnEnter: boolean
        filterOperator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'
        filterParamName: string
        filterSelected: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePickerOnSelect: boolean
        hideTrigger: boolean
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inlinePicker: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        items: object[]|string[]|object
        keyStrokeChangeDelay: number
        keyStrokeFilterDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listCls: string
        listItemTpl: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minChars: number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        multiValueSeparator: string
        name: string
        overlayAnchor: boolean
        owner: Widget
        picker: object
        pickerAlignElement: string
        pickerWidth: number
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        primaryFilter: object
        project: ProjectModel
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        store: Store|Partial<StoreConfig>
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggerAction: 'all'|'last'|null
        triggers: object
        ui: string|object
        validateFilter: boolean
        validateOnInput: boolean
        value: string|number[]|string[]
        valueField: string
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onSelect: Function
        onShow: Function
        onTrigger: Function
    }

    export class ProjectCombo extends Combo {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ProjectComboConfig>);
    }

    type ResourceComboConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        caseSensitive: boolean
        centered: boolean
        chipView: Partial<ChipViewConfig>
        clearTextOnPickerHide: boolean
        clearable: boolean|object
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        createOnUnmatched: Function|string|boolean
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        displayValueRenderer: Function
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        emptyText: string
        encodeFilterParams: Function
        filterOnEnter: boolean
        filterOperator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'
        filterParamName: string
        filterSelected: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePickerOnSelect: boolean
        hideTrigger: boolean
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inlinePicker: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        items: object[]|string[]|object
        keyStrokeChangeDelay: number
        keyStrokeFilterDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listCls: string
        listItemTpl: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minChars: number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        multiValueSeparator: string
        name: string
        overlayAnchor: boolean
        owner: Widget
        picker: object
        pickerAlignElement: string
        pickerWidth: number
        placeholder: string
        positioned: boolean
        preventTooltipOnTouch: boolean
        primaryFilter: object
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showEventColor: boolean
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        store: Store|Partial<StoreConfig>
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggerAction: 'all'|'last'|null
        triggers: object
        ui: string|object
        validateFilter: boolean
        validateOnInput: boolean
        value: string|number[]|string[]
        valueField: string|null
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onSelect: Function
        onShow: Function
        onTrigger: Function
    }

    export class ResourceCombo extends Combo {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ResourceComboConfig>);
    }

    type ResourceFilterConfig = {
        activateOnMouseover: boolean
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        allowGroupSelect: boolean
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        eventStore: EventStore
        flex: number|string
        floating: boolean
        getItemCls: Function|string
        getItemStyle: Function|string
        groupHeaderTpl: Function
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemTpl: Function
        items: object[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        masterFilter: Function
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        selectAllItem: boolean|string
        selected: object[]|number[]|string[]|Collection|object|Partial<CollectionConfig>|Partial<CollectionConfig>[]
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        store: object|object[]|Store|Partial<StoreConfig>|Partial<StoreConfig>[]
        style: string
        tab: boolean|object
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        toggleAllIfCtrlPressed: boolean
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeItem: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onItem: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class ResourceFilter extends List {
        readonly value: ResourceModel[]
        onBeforeDestroy: Function
        onCatchAll: Function
        onChange: Function
        onDestroy: Function
        constructor(config?: Partial<ResourceFilterConfig>);
    }

    type SchedulerDatePickerConfig = {
        activeDate: Date
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        animateTimeShift: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bbar: object[]|object
        bodyCls: string|object
        bubbleEvents: object
        callOnFunctions: boolean
        cellRenderer: Function|string
        centered: boolean
        cls: string|object
        collapsed: boolean
        collapsible: boolean|PanelCollapser
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        date: Date
        dayNameFormat: string
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disableOtherMonthCells: boolean
        disableWeekends: boolean
        disabled: boolean
        disabledDates: Function|Date[]|string
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editMonth: boolean
        eventStore: EventStore
        flex: number|string
        floating: boolean
        focusDisabledDates: boolean
        footer: object|string
        header: string|boolean|PanelHeader
        headerRenderer: Function|string
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideOtherMonthCells: boolean
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxDate: Date
        maxHeight: string|number
        maxWidth: string|number
        minColumnWidth: number
        minDate: Date
        minHeight: string|number
        minRowHeight: number|string
        minWidth: string|number
        monitorResize: boolean
        month: Month|object|Partial<MonthConfig>
        multiSelect: boolean|'range'
        namedItems: object
        nonWorkingDays: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        selection: Date[]
        showAnimation: boolean|object
        showEvents: boolean|'count'
        showTooltipWhenDisabled: boolean
        showWeekColumn: boolean
        // @deprecated
        showWeekNumber: boolean
        sixWeeks: boolean
        stateId: string
        stateProvider: StateProvider
        stateful: boolean|object|string[]
        statefulEvents: object|string[]
        strips: object
        style: string
        tab: boolean|object
        tag: string
        tbar: object[]|object
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        tip: object
        title: string
        tools: object
        tooltip: string|object
        trapFocus: boolean
        ui: string|object
        weekRenderer: Function|string
        weekStartDay: number
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeRefresh: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDateChange: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onRefresh: Function
        onResize: Function
        onSelectionChange: Function
        onShow: Function
        onToolClick: Function
    }

    export class SchedulerDatePicker extends DatePicker {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<SchedulerDatePickerConfig>);
    }

    type UndoRedoConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoUpdateRecord: boolean
        bubbleEvents: object
        callOnFunctions: boolean
        centered: boolean
        cls: string|object
        color: string
        constrainTo: HTMLElement|Widget|Rectangle
        content: string
        contentElementCls: string|object
        dataset: object
        defaultBindProperty: string
        defaultFocus: Function
        defaults: object
        disabled: boolean
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hideWhenEmpty: boolean
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        itemCls: string
        items: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        layout: string|object
        layoutStyle: object
        lazyItems: object|object[]|Widget[]|Partial<WidgetConfig>|Partial<WidgetConfig>[]
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxWidth: string|number
        minHeight: string|number
        minWidth: string|number
        monitorResize: boolean
        namedItems: object
        owner: Widget
        positioned: boolean
        preventTooltipOnTouch: boolean
        project: ProjectModel
        readOnly: boolean
        ref: string
        ripple: boolean|object
        rootElement: ShadowRoot
        scheduler: Widget|string
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        showZeroActionBadge: boolean
        style: string
        tab: boolean|object
        tag: string
        text: boolean
        textAlign: 'left'|'center'|'right'|'start'|'end'
        textContent: boolean
        title: string
        tooltip: string|object
        ui: string|object
        weight: number
        width: string|number
        x: number
        y: number
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeSetRecord: Function
        onBeforeShow: Function
        onCatchAll: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onShow: Function
    }

    export class UndoRedo extends UndoRedoBase {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<UndoRedoConfig>);
    }

    type ViewPresetComboConfig = {
        adopt: HTMLElement|string
        align: object|string
        alignSelf: string
        anchor: boolean
        appendTo: HTMLElement|string
        ariaDescription: string
        ariaLabel: string
        autoClose: boolean
        autoComplete: string
        autoExpand: boolean
        autoSelect: boolean
        badge: string
        bubbleEvents: object
        callOnFunctions: boolean
        caseSensitive: boolean
        centered: boolean
        chipView: Partial<ChipViewConfig>
        clearTextOnPickerHide: boolean
        clearable: boolean|object
        client: TimelineBase
        cls: string|object
        constrainTo: HTMLElement|Widget|Rectangle
        containValues: boolean|string|Function
        container: object|object[]|FieldContainer|Widget[]|Partial<FieldContainerConfig>|Partial<WidgetConfig>|Partial<FieldContainerConfig>[]|Partial<WidgetConfig>[]
        content: string
        contentElementCls: string|object
        createOnUnmatched: Function|string|boolean
        dataset: object
        defaultBindProperty: string
        disabled: boolean
        displayField: string
        displayValueRenderer: Function
        dock: 'top'|'bottom'|'left'|'right'|'start'|'end'|'header'|'pre-header'|object
        draggable: boolean|object
        editable: boolean
        emptyText: string
        encodeFilterParams: Function
        filterOnEnter: boolean
        filterOperator: '='|'!='|'>'|'>='|'<'|'<='|'*'|'startsWith'|'endsWith'|'isIncludedIn'
        filterParamName: string
        filterSelected: boolean
        flex: number|string
        floating: boolean
        height: string|number
        hidden: boolean
        hideAnimation: boolean|object
        hidePickerOnSelect: boolean
        hideTrigger: boolean
        highlightExternalChange: boolean
        hint: string|Function
        hintHtml: string|Function
        html: string|Function
        htmlCls: string|object
        id: string
        ignoreParentReadOnly: boolean
        inline: boolean
        inlinePicker: boolean
        inputAlign: string
        inputAttributes: object
        inputType: string
        inputWidth: string|number
        insertBefore: HTMLElement|string
        insertFirst: HTMLElement|string
        items: object[]|string[]|object
        keyStrokeChangeDelay: number
        keyStrokeFilterDelay: number
        label: string
        labelCls: string|object
        labelPosition: 'before'|'above'
        labelWidth: string|number
        labels: object[]
        listCls: string
        listItemTpl: Function
        listeners: object
        localeClass: typeof Base
        localizable: boolean
        localizableProperties: string[]
        margin: number|string
        maskDefaults: object|Mask|Partial<MaskConfig>
        masked: boolean|string|object|Mask|Partial<MaskConfig>
        maxHeight: string|number
        maxLength: number
        maxWidth: string|number
        minChars: number
        minHeight: string|number
        minLength: number
        minWidth: string|number
        monitorResize: boolean
        multiSelect: boolean
        multiValueSeparator: string
        name: string
        overlayAnchor: boolean
        owner: Widget
        picker: object
        pickerAlignElement: string
        pickerWidth: number
        placeholder: string
        positioned: boolean
        presets: any[]
        preventTooltipOnTouch: boolean
        primaryFilter: object
        readOnly: boolean
        ref: string
        required: boolean
        revertOnEscape: boolean
        ripple: boolean|object
        rootElement: ShadowRoot
        scrollAction: 'hide'|'realign'|null
        scrollable: boolean|object|Scroller|Partial<ScrollerConfig>
        showAnimation: boolean|object
        showTooltipWhenDisabled: boolean
        spellCheck: boolean
        store: Store|Partial<StoreConfig>
        style: string
        tab: boolean|object
        tabIndex: number
        tag: string
        textAlign: 'left'|'center'|'right'|'start'|'end'
        title: string
        tooltip: string|object
        triggerAction: 'all'|'last'|null
        triggers: object
        ui: string|object
        validateFilter: boolean
        validateOnInput: boolean
        value: string|number[]|string[]
        valueField: string|null
        weight: number
        width: string|number
        x: number
        y: number
        onAction: Function
        onBeforeDestroy: Function
        onBeforeHide: Function
        onBeforeShow: Function
        onCatchAll: Function
        onChange: Function
        onClear: Function
        onDestroy: Function
        onFocusIn: Function
        onFocusOut: Function
        onHide: Function
        onInput: Function
        onPaint: Function
        onReadOnly: Function
        onRecompose: Function
        onResize: Function
        onSelect: Function
        onShow: Function
        onTrigger: Function
    }

    export class ViewPresetCombo extends Combo {
        onBeforeDestroy: Function
        onCatchAll: Function
        onDestroy: Function
        constructor(config?: Partial<ViewPresetComboConfig>);
    }

}
