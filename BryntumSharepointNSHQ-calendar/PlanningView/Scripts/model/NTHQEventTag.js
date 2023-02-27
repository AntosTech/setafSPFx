import NTHQEventType from "./NTHQEventType";

/**
 * StrategicType record model
 */
export default class NTHQEventTag extends NTHQEventType {

    get isEventType () {
        return false;
    }
    get isEventTag () {
        return true;
    }
}

NTHQEventTag.idField = 'Id';
