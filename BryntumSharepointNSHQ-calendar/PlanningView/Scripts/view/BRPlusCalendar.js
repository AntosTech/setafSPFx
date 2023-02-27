import { Calendar } from "../../node_modules/@bryntum/calendar/calendar.module.js";

export default class NTHQCalendar extends Calendar {

    changeModes(modes, was) {
        const ret =  super.changeModes(modes, was);
        this.$modes.flush();
        return ret;
    }
}
