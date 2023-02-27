import { Model } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";

/**
 * Config record model
 */
export default class NTHQConfig extends Model {

    static get fields() {
        return [
            { name: 'id', dataSource: 'Title' },
            { name: 'Name' },
            { name: 'Value', defaultValue: '' },
            { name: 'LegendWidth' }
        ];
    }

    getBoolValue() {
        let val = this.Value.toLowerCase();
        val = val === 'yes' ? true : val === 'no' ? false : val;
        return Boolean(val);
    }
}
