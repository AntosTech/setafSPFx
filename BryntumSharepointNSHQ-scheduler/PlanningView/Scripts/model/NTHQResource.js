import { ResourceModel } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";

/**
 * Resource record model
 */
export default class NTHQResource extends ResourceModel {

    static get fields() {
        return [
            { name: 'ResourceId' },
            { name: 'Title' },
            { name: 'DirectorateOrDivisionName' },
            { name: 'DirectorateOrDivisionId', defaultValue: [] },
            { name: 'PersonDetails' },
            { name: 'Rank' },
            { name: 'Nationality' },
            { name: 'Lastname' },
            { name: 'TypeOfEvent' },
            { name: 'TypeOfEventName' },
            { name: 'TypeOfEventId' },
            { name: 'StrategicApproachTypeId', defaultValue: [] },
            { name: 'StrategicApproachTypeName' },
            { name: 'StrategicApproachTypeLOEName' },
            { name: 'Location' },
            { name: 'Country' },
            { name: 'imageUrl' },
            { name: 'startDate', type: 'date' },
            { name: 'NetworkId' },
            { name: 'EventTagsId', defaultValue: [] },
        ];
    }

}

NTHQResource.idField = 'ResourceId';
