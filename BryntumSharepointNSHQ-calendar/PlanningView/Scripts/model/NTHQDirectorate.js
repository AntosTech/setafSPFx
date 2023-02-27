import { Model } from "../../node_modules/@bryntum/calendar/calendar.module.js";

/**
 * Directorate record model
 */
export default class NTHQDirectorate extends Model {

    static get fields() {
        return [
            { name: 'Id' },
            { name: 'Category' },
            { name: 'Name', dataSource : 'Title' },
            { name: 'Selected', defaultValue : false }
        ];
    }

    get isDirectorate () {
        return true;
    }

    getCategoryName() {
        let category = this.get('Category');
        return category.toLowerCase().replace(' ', '');
    }

}

NTHQDirectorate.idField = 'Id';
