import { Model } from "../../node_modules/@bryntum/calendar/calendar.module.js";

/**
 * CountryFlag record model
 */
export default class NTHQCountryFlag extends Model {

    static get fields() {
        return [
            { name: 'FileRef' },
            { name: 'CountryCode' },
            { name: 'CountryName' }
        ];
    }
}

NTHQCountryFlag.idField = 'CountryCode';
