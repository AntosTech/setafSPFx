import { Model } from "../../node_modules/@bryntum/calendar/calendar.module.js";

/**
 * Navigation record model
 */
export default class NTHQNavigationItem extends Model {

    static get fields() {
        return [
            { name: 'id', dataSource: 'Id' },
            { name: 'Text', dataSource: 'Title' },
            { name: 'Url' },
            { name: 'Icon' }
        ];
    }


}
