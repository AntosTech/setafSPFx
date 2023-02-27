import NTHQEventType from "./NTHQEventType";

/**
 * StrategicType record model
 */
export default class NTHQStrategicType extends NTHQEventType {

    get isEventType () {
        return false;
    }

    get isLOE () {
        return this.getCategoryName() === 'loe';
    }

    get isStrategicType () {
        return true;
    }

}

NTHQStrategicType.idField = 'Id';
