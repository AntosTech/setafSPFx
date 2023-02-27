import NTHQEventType from "../model/NTHQEventType.js";
import NTHQDirectorate from "../model/NTHQDirectorate.js";
import NTHQEventTag from "../model/NTHQEventTag.js";
import NTHQCountryFlag from "../model/NTHQCountryFlag";
import NTHQStrategicType from "../model/NTHQStrategicType";
import NTHQNetworkType from "../model/NTHQNetworkType";
import NTHQPerson from "../model/NTHQPerson.js";
import NTHQNavigationItem from "../model/NTHQNavigationItem.js";

import { Store, EventStore, ResourceStore, DateHelper } from "../../node_modules/@bryntum/calendar/calendar.module.js";
import NTHQRecurrenceParser from "./NTHQRecurrenceParser.js";
import NTHQResource from '../model/NTHQResource.js';
import NTHQEvent from '../model/NTHQEvent.js';
import NTHQConfig from "../model/NTHQConfig";

/**
 * This class generates resources, events and timezones from the calendar list events.
 */

export default class NTHQData {

    constructor (app, scheduler) {

        const me= this;
        me.app = app;
        me.scheduler = scheduler;
        me.lists = app.lists;
        me.filters = {};

        me.eventTypesLoaded = false;
        me.directoratesLoaded = false;
        me.personnelLoaded = false;
        me.countryFlagsLoaded = true;
        me.strategicTypesLoaded = false;
        me.networkTypesLoaded  =false;
        me.configLoaded = false;
        me.navigationItemsLoaded = false;
        me.eventTagsLoaded = false;

        me.createStores();
    }

    /**
     * Reloads the dataset from sharepoint when the timeaxis has changed.
     *
     * @param start
     * @param end
     */
    setTimespan (start, end) {

        const me = this;

        if (!end) {
            end = DateHelper.add(start, 1, 'month');
        }

        me.filters.startDate = start;
        me.filters.endDate = end;

        const scheduler = me.getScheduler();

        me.loadData(me.filters).then(() => {

            if (scheduler) {
              scheduler.activeView.refreshSoonNow();
            }
        });
    }

    getScheduler() {
        return this.scheduler.scheduler;
    }

    getStore() {
        return this.resourceStore;
    }

    getTimeRangesStore () {
       return this.timeRangesStore;
    }

    /**
     * Filter the local stores on EventTypes and Directorates
     *
     * @param filters
     */

    filter (filters = {}) {

        const me = this;

        filters.startDate = me.filters.startDate;
        filters.endDate = me.filters.endDate;
        me.filters = filters;

        const store = me.scheduler.isScheduler ? me.resourceStore : me.eventStore;

        store.clearFilters(true);
        me.timeRangesStore.clearFilters(true);

        me.scheduler.strategic = !!Object.keys(me.filters.strategicTypes).length;

        const hasValue = (map, arr, every) => {
          if (every) {
              return arr.length > 0 && arr.every(item => map[item]);
          } else { return arr.some(item => map[item]); }
        };

        // filter the stores in eventType and directorateOrDivisionId
        if (filters.eventTypes && filters.directorates) {

            const filterFn = rec => {

                let approved = false;
                let record = rec.recurringEvent || rec;

                if (me.scheduler.strategic) {
                    approved = (filters.eventTypes[record.TypeOfEventId]
                        && hasValue(filters.directorates, record.DirectorateOrDivisionId)
                        && hasValue(filters.strategicTypes, record.StrategicApproachTypeId, filters.unaligned));
                } else {
                    approved = (filters.eventTypes[record.TypeOfEventId] && hasValue(filters.directorates, record.DirectorateOrDivisionId));
                }

                if (!me.scheduler.disableNetworkFilter) {
                    approved = approved && !!filters.networkTypes[record.NetworkId];
                }

                if (Object.keys(filters.eventTags).length) {
                    if (record.EventTagsId.length) {
                        approved = approved && hasValue(filters.eventTags, record.EventTagsId);
                    } else {
                        approved = false;
                    }
                }

                return (approved) || (me.filters.unplanned && hasValue(filters.directorates, record.DirectorateOrDivisionId) && record.TypeOfEventId === 'unplanned');
            };

            store.filterBy(filterFn);
        }
    }

    /**
     * Set the queries for fetching listdata
     *
     * @param filters
     */
    setRemoteFilter (filters) {
        const me = this;

        if (!filters.startDate || !filters.endDate) {
            console.log('No start- or enddate set');
            return;
        }

        let query = "$select=*,Duration,RecurrenceData,EventType,MasterSeriesItemID,RecurrenceID,UID&$top=2000";

        let cl1 = "(EventDate lt '" + filters.startDate.toISOString() + "' and EndDate gt '" + filters.startDate.toISOString() + "')";
        let cl2 = "(EventDate gt '" + filters.startDate.toISOString() + "' and EventDate lt '" + filters.endDate.toISOString() + "')";

        me.lists.events.query = query + '&$filter=' + cl1 + ' or ' + cl2 + '';
    }

    /**
     * Filter have both the properties eventTypes and directorates, both hashes with ids
     * @param filters
     */
    loadData (filters) {

        const me = this;

        console.log('Load data');

        filters = filters || me.filters || {};

        me.setRemoteFilter(filters);

        return new Promise (resolve => {
            this.loadListItem(me.lists.config, me.configLoaded).then(
                () => me.loadListItem(me.lists.directorates, me.directoratesLoaded).then(
                () => me.loadListItem(me.lists.eventTypes, me.eventTypesLoaded).then(
                () => me.loadListItem(me.lists.strategicTypes, me.strategicTypesLoaded).then(
                () => me.loadListItem(me.lists.networkTypes, me.networkTypesLoaded).then(
                () => me.loadListItem(me.lists.personnel, me.personnelLoaded).then(
                () => me.loadListItem(me.lists.countryFlags, me.countryFlagsLoaded).then(
                () => me.loadListItem(me.lists.navigationItems, me.navigationItemsLoaded).then(
                () => me.loadListItem(me.lists.eventTags, me.eventTagsLoaded).then(
                () => me.loadListItem(me.lists.events).then(() => {
                    me.extractResourcesFromEvents();
                    me.setNewData();
                    resolve();
                }))))))))))
        });
    }

    /**
     * Loads a listitem. Listitem has format { name: {string}, url: {string}, query : {string}}
     *
     * @param item
     * @param skip Do not load but resolve directly
     * @returns {Promise<any>}
     */
    loadListItem (item, skip) {

        const me = this;

        return new Promise(resolve => {

            if (skip) {
                resolve.call(me)
            }
            else {
                me.app.getDataset(item, data => {
                    item.data = data;
                    resolve.call(me, data)
                }, me.errorFn, me);
            }
        });
    }

    /**
     * Set data on eventtype and directorate store.
     */
    setEventTypeAndDirectorateData () {
        const me = this;

        if (!me.configLoaded) {
            me.configStore.data = me.lists.config.data;
            me.configLoaded = true;
            const timezone = me.configStore.getById('Timezone');
            if (timezone) {
                me.tzString = timezone.Value;
            } else {
                this.tzString = 'Europe/Brussels';
            }
        }

        if (!me.eventTypesLoaded && !me.directoratesLoaded && !me.strategicTypesLoaded && !me.networkTypesLoaded) {
            me.eventTypeStore.data = me.lists.eventTypes.data;
            me.eventTypesLoaded = true;
            me.directorateStore.data = me.lists.directorates.data;
            me.directoratesLoaded = true;
            me.strategicTypeStore.data = me.lists.strategicTypes.data;
            me.strategicTypesLoaded = true;
            me.networkTypeStore.data = me.lists.networkTypes.data;
            me.networkTypesLoaded = true;
            me.eventTagStore.data = me.lists.eventTags.data;
            me.eventTagsLoaded = true;

            me.setFilterDefaults();
            me.scheduler.eventTypesLoaded();
        }
    }

    /**
     * Set data on the personnel store
     */
    setPersonnelData () {
        const me = this;

        if (!me.personnelLoaded) {
            me.personnelStore.data = me.lists.personnel.data;
            me.personnelLoaded = true;
        }
    }

    /**
     * Set data on the countryflag store
     */
    setCountryData () {
        const me = this;

        if (!me.countryFlagsLoaded) {
            me.countryFlagStore.data = me.lists.countryFlags.data;
            me.countryFlagsLoaded = true;
        }
    }

    /**
     * Set data on the navigation item store
     */
    setNavigationData () {
        const me = this;

        if (!me.navigationItemsLoaded) {
            me.navigationItemStore.data = me.lists.navigationItems.data;
            me.navigationItemsLoaded = true;
        }
    }

    /**
     * Set new data on the eventStore, resourceStore and timeRangesStore. This will update the scheduler view because these stores are attached to
     * the scheduler.
     * We set the filters first else we get unwanted view updates. Filters should apply on adding new data.
     */
    setNewData () {
        const me = this;
        me.filter(me.filters);
        me.eventStore.clear();
        me.eventStore.data = me.getEventRecords();
        me.resourceStore.data = me.getResourceRecords(me.filters.unplanned);
       // me.timeRangesStore.data = me.getNonWorkingTimeRecords();

    }

    errorFn (err) {
        console.log(err);
    }

    /**
     * Clear all filters except daterange
     *
     */
    resetFilter () {
        const me = this;
        me.filter(me.setFilterDefaults());
    }

    /**
     * Create all the used stores in the application
     */
    createStores () {
        const me = this;

        me.configStore = new Store({
            modelClass: NTHQConfig
        });

        me.eventTypeStore = new Store({
            modelClass: NTHQEventType
        });

        me.strategicTypeStore = new Store({
            modelClass: NTHQStrategicType
        });

        me.networkTypeStore = new Store({
           modelClass: NTHQNetworkType
        });

        me.directorateStore = new Store({
            modelClass: NTHQDirectorate
        });

        me.personnelStore = new Store({
            modelClass: NTHQPerson
        });

        me.eventStore = new EventStore({
            modelClass: NTHQEvent
        });

        me.resourceStore = new ResourceStore({
            modelClass: NTHQResource
        });

        me.timeRangesStore = new Store({
            modelClass: NTHQEvent
        });

        me.countryFlagStore = new Store({
            modelClass: NTHQCountryFlag
        });

        me.navigationItemStore = new Store({
            modelClass: NTHQNavigationItem
        });

        me.eventTagStore = new Store({
            modelClass: NTHQEventTag
        });
    }

    /**
     * Create the resource models from the events.
     *
     * - Creates EventType-, Personnel- and DirectorateStore
     * - Person data is attached to the resource.
     *
     */
    extractResourcesFromEvents() {
        const me = this;
        let resources = {};

        me.events = [];
        me.nonWorkingEvents = [];

        // We set EventTypes, Personnel and Directorates first.
        me.setNavigationData();
        me.setEventTypeAndDirectorateData();
        me.setPersonnelData();
        me.setCountryData();


        // Parse recurrence data and prepare the eventmodels
        const parser = new NTHQRecurrenceParser(me.lists.events.data, me.filters.startDate, me.filters.endDate, this.tzString);
        const events = parser.getEvents();

        // Prefixes for the resource ids
        const tdy_prefix = 'person_';
        const planning_prefix = 'planning_';
        const unplanned_prefix = 'unplanned_';

        const setLookupRecordsOnEvent = (targetField, store, ids = []) => {
            ids.forEach(id => {
               const value = store.getById(id);
               if (value) {
                   targetField.push(value);
               }
            });
        };

        events.forEach(event => {

            let resource;
            const eventType = me.eventTypeStore.getById(event.TypeOfEventId);

            event.DirectorateOrDivision = [];
            event.StrategicApproachType = [];
            event.EventTags = [];

            setLookupRecordsOnEvent(event.DirectorateOrDivision, me.directorateStore, event.DirectorateOrDivisionId);
            setLookupRecordsOnEvent(event.StrategicApproachType, me.strategicTypeStore, event.StrategicApproachTypeId);
            setLookupRecordsOnEvent(event.EventTags, me.eventTagStore, event.EventTagsId);

            if (eventType && event.DirectorateOrDivision.length > 0) {

                event.TypeOfEvent = eventType;
                event.eventColor = eventType.EventBackgroundColor;
                event.fontColor = eventType.EventFontColor;

                // NonWorking is added to the TimeRangesStore like holidays. This is marked in the EventTypeList as NonWorking
                if (eventType.NonWorking === true) {
                    event.isNonWorking = true;
                    event.allDay = event.fAllDayEvent;

                    if (event.allDay) {
                        event.cls = ['non-working', 'all-day'];
                    }

                    me.events.push(event);
                } else {

                    let resourceId;
                    const category = eventType.getCategoryName();

                    //Used for switches
                    event.eventType = category;

                    switch (category) {

                        case 'pts':

                            let personDetails = event.PersonDetails;

                            if (personDetails && !personDetails.isPerson) {
                                try {
                                    personDetails = JSON.parse(personDetails);
                                } catch {
                                    personDetails = null;
                                    console.log('Error parsing json for event ' + event.Title);
                                }
                            }

                            if (personDetails) {
                                resourceId = tdy_prefix + personDetails.id;

                                let person = me.personnelStore.getById(personDetails.id);

                                if (person) {
                                    resource = me.buildPersonResource(tdy_prefix, person);

                                    event.PersonDetails = person;
                                    event.person = person.Fullname;
                                }
                            }

                            break;

                        default:
                            // concat all directorate ids, can be multiple now
                            resourceId = planning_prefix + event.TypeOfEvent.id + '_' + event.DirectorateOrDivisionId.join('-') + event.Title.replace(/ /g, '_');
                            event.PersonDetails = null;

                            resource = {
                                ResourceId: resourceId,
                                Title     : event.Title,
                                Location  : event.LocationName
                            };

                            break;
                    }

                    if (!resources[resourceId] && resource) {
                        resource.DirectorateOrDivisionId = event.DirectorateOrDivisionId;
                        resource.DirectorateOrDivisionName = event.getDirectorateOrDivisionName();
                        resource.TypeOfEvent = eventType;
                        resource.TypeOfEventName = eventType.Name;
                        resource.TypeOfEventId = eventType.id;
                        resource.startDate = event.startDate;

                        resource.StrategicApproachTypeId = event.StrategicApproachTypeId;
                        resource.StrategicApproachTypeName = event.getStrategicApproachName();
                        resource.StrategicApproachTypeLOEName = event.getStrategicApproachLOEName();
                        resource.NetworkId = event.NetworkId;

                        resources[resourceId] = resource;
                    } else {
                        resource = resources[resourceId];
                    }

                    if (resource) {
                        event.DirectorateOrDivisionName = event.getDirectorateOrDivisionName();
                        event.StrategicApproachTypeName = event.getStrategicApproachName();
                        event.StrategicApproachTypeDescription = event.getStrategicApproachDescription();

                        event.resourceId = resourceId;
                        event.style =  { "border" : "0px;" };
                        me.events.push(event);
                    }
                }
            }
        });

        // Calculate unplanned personnel.
        if (!me.scheduler.isCalendar) {
            me.personnelStore.forEach(record => {
                // There is no pts record for this person
                if (!resources[tdy_prefix + record.id]) {
                    const resource = me.buildPersonResource(unplanned_prefix, record);
                    const directorate = this.directorateStore.getById(record.Section);

                    if (directorate) {
                        resource.DirectorateOrDivisionId = [directorate.id];
                        resource.DirectorateOrDivisionName = directorate.Name;
                        resource.NetworkId = 'None';
                    }

                    resource.StrategicApproachTypeLOEName = 'Unplanned';
                    resources[resource.ResourceId] = resource;
                }
            });
        }

        me.resources = resources;
    }

    /**
     * Set data we a person record like tdy's or leaves
     * @param prefix
     * @param record
     * @returns {{ResourceId: *, Title: *, Rank: *, Nationality: *, Lastname: *, Location: string, TypeOfEventId: string}}
     */
    buildPersonResource (prefix , record) {

        const me = this;
        const countryCode = record.CountryCode;

        let image = null;
        if (countryCode) {
            const countryRecord = me.countryFlagStore.getById(countryCode.toLowerCase());
            if (countryRecord) {
                image = countryRecord.FileRef;
            }
        }

        return {
            ResourceId: prefix + record.id,
            Title: record.Fullname,
            Rank: record.Rank,
            Nationality: record.Nationality,
            Lastname: record.Lastname,
            imageUrl: image,
            Location: record.City + ', ' + record.Country,
            TypeOfEventId: 'unplanned'
        };
    }

    /**
     * Get the resource records.
     * @param includeUnplanned Mark true to include unplanned personnel
     * @returns {any[]}
     */
    getResourceRecords (includeUnplanned) {

        const records = Object.values(this.resources);

        if (!includeUnplanned) {
            return records.filter( record => record.TypeOfEventId !== 'unplanned' );
        }

        return records;
    }

    getEventRecords () {
        return this.events;
    }

    getNonWorkingTimeRecords () {
        return this.nonWorkingEvents;
    }

    /**
     * Set the filter defaults for this application. Defaults are marked in de EventType and DirectorateList as 'Selected'
     * @returns {{}|*}
     */
    setFilterDefaults () {

        const me = this;
        const filters = me.filters || {};

        filters.unplanned = false;
        filters.unaligned = false;
        filters.eventTypes = {};
        filters.directorates = {};
        filters.strategicTypes = {};
        filters.networkTypes = {};
        filters.eventTags = {};

        const applications = me.eventTypeStore.records;
        const directorates = me.directorateStore.records;
        const strategics = me.strategicTypeStore.records;
        const networks = me.networkTypeStore.records;
        const tags = me.eventTagStore.records;

        applications.forEach(item => {
            if (item.Selected === true)
                filters.eventTypes[item.id] = true;
        });

        directorates.forEach(item => {
            if (item.Selected === true || item.Selected === null)
                filters.directorates[item.id] = true;
        });

        strategics.forEach(item => {
            if (item.Selected === true || item.Selected === null)
                filters.strategicTypes[item.id] = true;
        });

        networks.forEach(item => {
            if (item.Selected === true || item.Selected === null)
                filters.networkTypes[item.id] = true;
        });

        tags.forEach(item => {
            if (item.Selected === true || item.Selected === null)
                filters.eventTags[item.id] = true;
        });

        return me.filters;
    }
}
