import { Model } from "../../node_modules/@bryntum/calendar/calendar.module.js";

/**
 * EventType record model
 */
export default class NTHQEventType extends Model {

    static get fields() {
        return [
            { name: 'Id' },
            { name: 'Category' },
            { name: 'Name', dataSource: 'Title' },
            { name: 'ShortName' },
            { name: 'Tooltip' },
            { name: 'NonWorking', defaultValue : false },
            { name: 'Selected', defaultValue : false },
            { name: 'InLegend', defaultValue : false },
            { name: 'EventBackgroundColor', dataSource: 'seeb' },
            { name: 'EventFontColor' },
            { name: 'Icon' }
        ];
    }

    get isEventType () {
        return true;
    }

    getCategoryName() {
        let category = this.get('Category');

        if (category === 'SynchTool')
            category = 'Planned Activity';

        return category.toLowerCase().replace(/ /g, '');
    }

    getCls () {
        const name = this.get('Name').toLowerCase();
        const category = this.getCategoryName();
        const prefix = 'nthq';
        return prefix + category + ' ' + prefix + name.replace(/ /g, '-');
    }
}

NTHQEventType.idField = 'Id';
