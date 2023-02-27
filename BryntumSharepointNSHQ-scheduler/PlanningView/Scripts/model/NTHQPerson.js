import { Model } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";

/**
 * Person record model
 */
export default class NTHQPerson extends Model {

    static get fields() {
        return [
            { name: 'Building' },
            { name: 'City' },
            { name: 'Country' },
            { name: 'CountryCode', convert: function (value) { return value ? value.toLowerCase() : value; } },
            { name: 'DeskPhone' },
            { name: 'EmailClass' },
            { name: 'EmailUnclass' },
            { name: 'Firstname' },
            { name: 'Floor' },
            { name: 'Lastname' },
            { name: 'Location' },
            { name: 'MobilePhone' },
            { name: 'Nationality' },
            { name: 'PersonId' },
            { name: 'Rank' },
            { name: 'Room' },
            { name: 'Nationality' },
            { name: 'Section', dataSource : 'SectionId' },
            { name: 'Fullname', dataSource : 'Title' },
            { name: 'VoipPhone' },
            { name: 'EndOfTour', dataSource : 'End_x0020_of_x0020_Tour', type : 'date', nullValue : new Date(), nullable : false }
        ];
    }

    get isPerson () {
        return true;
    }
}

NTHQPerson.idField = 'PersonId';
