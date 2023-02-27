import { EventModel } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";

/**
 * Event record model
 */
export default  class NTHQEvent extends EventModel {

    static get fields() {
        return [
            { name : 'id', dataSource : 'Id' },
            { name: 'ActionOfficer' },
            { name: 'ApprovalStatus' },
            { name: 'Category' },
            { name: 'Classification' },
            { name: 'Command' },
            { name: 'CommandProperties' },
            { name: 'CommunityOfInterest' },
            { name: 'DataSource' },
            { name: 'CommandProperties' },
            { name: 'DirectorateOrDivision' },
            { name: 'DirectorateOrDivisionId', dataSource: 'DirectorateOrDivisionId', convert: this.getLookupValues },
            { name: 'DirectorateOrDivisionName' },
            // { name: 'startDate', dataSource: 'EventDate' },
            // { name: 'endDate', dataSource: 'EndDate' },
            { name: 'EnduringGoals'  },
            { name: 'EventId', dataSource: 'Id' },
            { name: 'FocusArea' },
            { name: 'InternalEvent' },
            { name: 'LevelOfAttendance' },
            { name: 'LinesOfEffort' },
            { name: 'LinesOfEngagement' },
            { name: 'LinesOfOperation' },
            { name: 'LinesOfDetails' },
            { name: 'LinkToRelatedDocument' },
            { name: 'LinkToRelatedWorkSpace' },
            { name: 'LinkToDetails' },
            { name: 'LocationLatitude' },
            { name: 'LocationLongitude' },
            { name: 'Location' },
            { name: 'LocationName' },
            { name: 'LocationRoom' },
            { name: 'MissionNumber' },
            { name: 'NatoResponseForce', dataSource : 'NATOResponseForce' },
            { name: 'NatoExercise' },
            { name: 'NatoOperation' },
            { name: 'Participants', dataSource : 'Participants0' },
            { name: 'PartnerShip' },
            { name: 'PersonDetails' },
            { name: 'PersonId' },
            { name: 'resourceId' },
            { name: 'Title' },
            { name: 'Description' },
            { name: 'name', dataSource: 'Title' },
            { name: 'TypeOfEvent' },
            { name: 'TypeOfEventId' },
            // used to switch between eventype categories
            { name: 'eventType' },
            { name: 'RecurrenceData' },
            { name: 'UID' },
            { name: 'Duration' },
            { name: 'RecurrenceID' },
            { name: 'StrategicApproachType' },
            { name: 'StrategicApproachTypeId', convert: this.getLookupValues },
            { name: 'StrategicApproachTypeName' },
            { name: 'StrategicApproachTypeDescription' },
            { name: 'NetworkId' },
            { name: 'NetworkType' },
            { name: 'EventTags' },
            { name: 'EventTagsId', convert: this.getLookupValues },
            // { name: 'allDay', dataSource: 'fAllDayEvent' },
            { name: 'fontColor' }
        ];
    }

    static getLookupValues (value) {
        if (value && value.results) {
            return value.results;
        }

        return [];
    }

    getDirectorateOrDivisionName () {
        return this.DirectorateOrDivision.map(directorate => directorate.Name).join(', ');
    }

    getStrategicApproachName () {
        return this.StrategicApproachType.map(strategic => strategic.Name).join(', ');
    }

    getStrategicApproachDescription () {
        return this.StrategicApproachType.map(strategic => strategic.Description).join(', ').trim();
    }

    getStrategicApproachLOEType () {
        const items =  this.StrategicApproachType.filter(type => type.isLOE);
        if (items.length > 0) return items[0];
    }

    getStrategicApproachLOEName () {
        const type = this.getStrategicApproachLOEType();
        if (type) {
            return type.Name;
        }

        return 'Other';
    }

    isApproved () {

        const me = this;
        let approvalStatus = me.ApprovalStatus || me.TypeOfEvent.Name;

        if (approvalStatus) {
            return approvalStatus.toLowerCase().indexOf('approved') !== -1;
        }
    }


    getOccurrencesForDateRange(startDate, endDate) {
        try {
            return super.getOccurrencesForDateRange.apply(this, arguments);
        } catch (err) {
            if (this.stores.length) {
                this.project = this.stores[0];
                return this.stores[0].getOccurrencesForTimeSpan(this, startDate, endDate);
            }
            return [];
        }
    }

}

