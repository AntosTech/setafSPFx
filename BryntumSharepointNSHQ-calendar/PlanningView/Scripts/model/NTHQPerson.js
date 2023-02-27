import { Model } from "../../node_modules/@bryntum/calendar/calendar.module.js";

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
            { name: 'VoipPhone' }
        ];
    }

    get isPerson () {
        return true;
    }
}

NTHQPerson.idField = 'PersonId';
