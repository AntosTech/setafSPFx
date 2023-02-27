import NTHQEventType from "./NTHQEventType";

/**
 * StrategicType record model
 */
export default class NTHQNetworkType extends NTHQEventType {

    get isEventType () {
        return false;
    }

    get isStrategicType () {
        return false;
    }

    get isNetworkType () {
        return true;
    }

}

NTHQNetworkType.idField = 'Id';
