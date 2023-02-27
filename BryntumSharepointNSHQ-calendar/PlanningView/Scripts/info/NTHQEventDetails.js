import { EventTooltip, DisplayField } from "../../node_modules/@bryntum/calendar/calendar.module.js";

/**
 * This class generates the configuration for the eventdetails dialog.
 *
 * Based on the dataset.eventType attribute a field can be indicated when to be shown
 *
*              {
            type  : 'text',
            ref   : 'eventTypeField',
            index : 1,
            label : 'Type',
            dataset : { eventType : true, planningcalendar : true, training: true, plannedactivity : true, pmt : true, planningcalendarcategories : true }
        },
 */
export default class NTHQEventDetails {

    constructor (scheduler) {
        const me = this;
        this.scheduler = scheduler;
        me.dateFormat = scheduler.dateFormat;
    }

    getConfig () {

        const me = this;

        return {
            readOnly : true,
            timeFormat: 'HH:mm',
            showRecurringUI: false,
            dateFormat : me.dateFormat,
            triggerEvent : 'eventclick',
            bbar : {
                items : {
                    deleteButton : false
                }
            },
            // Based on TypeOfEvent fields are hidden or shown
            toggleEventType(eventType) {
                this.editor.element.dataset.eventType = eventType || '';
                this.editor.eachWidget(widget => {
                    if (widget.dataset && widget.dataset.eventType) {
                        widget.hidden = Boolean(widget.dataset[eventType]) !== true;
                    }

                    if (widget.ref === 'allDay') {
                        widget.hidden = false;
                    }

                 });
            },
            items : {
                //allDay : false,
                nameField : false,
                resourceField : false,
                eventTypeField            : {
                    type   : 'text',
                    weight : -1000,
                    ref    : 'eventTypeField',
                    label  : 'Type',
                    dataset: {
                        eventType                 : true,
                        planningcalendar          : true,
                        training                  : true,
                        plannedactivity           : true,
                        pmt                       : true,
                        planningcalendarcategories: true
                    }
                },
                descriptionField          : {
                    type   : 'displayfield',
                    weight : 900,
                    ref    : 'descriptionField',
                    label  : 'Description',
                    dataset: {
                        eventType                 : true,
                        planningcalendar          : true,
                        plannedactivity           : true,
                        pmt                       : true,
                        planningcalendarcategories: true
                    }
                },
                locationField             : {
                    type   : 'text',
                    weight : 910,
                    ref    : 'locationField',
                    label  : 'Location',
                    dataset: {
                        eventType: true,
                        pts: true
                    }
                },
                personDetailsField        : {
                    type   : 'text',
                    weight : 930,
                    ref    : 'personDetailsField',
                    label  : 'Person',
                    dataset: {
                        eventType: true,
                        pts: true
                    }
                },
                actionOfficerField        : {
                    type   : 'text',
                    weight : 940,
                    ref    : 'actionOfficerField',
                    name   : 'ActionOfficer',
                    label  : 'Action Officer',
                    dataset: {
                        eventType                 : true,
                        planningcalendar          : true,
                        plannedactivity           : true,
                        pmt                       : true,
                        planningcalendarcategories: true
                    }
                },
                directorateField          : {
                    type   : 'text',
                    weight : 950,
                    ref    : 'directorateField',
                    name   : 'DirectorateOrDivisionName',
                    label  : 'Directorate',
                    dataset: {
                        eventType                 : true,
                        planningcalendar          : true,
                        plannedactivity           : true,
                        planningcalendarcategories: true
                    }
                },
                strategicApproachTypeField: {
                    type   : 'text',
                    weight : 960,
                    ref    : 'strategicApproachTypeField',
                    name   : 'StrategicApproachTypeName',
                    label  : 'Strategic Approach',
                    dataset: {
                        eventType           : true,
                        planningcalendar          : true,
                        plannedactivity           : true,
                        planningcalendarcategories: true,
                        pmt                       : true
                    }
                },
                participantsField         : {
                    type   : 'display',
                    weight : 970,
                    cls    : 'b-has-label nthqparticipants_table',
                    label  : 'Participants',
                    ref    : 'participantsField',
                    dataset: {
                        eventType: true,
                        plannedactivity: true
                    }
                }
            }
        };
    }

    setTitle (editor, eventRecord) {
        const category = eventRecord.eventType;
        let title = '';
        switch (category) {
            case 'pts':
                const personDetails = eventRecord.PersonDetails;
                const personName = personDetails ? personDetails.Fullname : '';
                title = eventRecord.isApproved() ? eventRecord.TypeOfEvent.Name : 'P ' + personName;
                break;
            default:
                title = eventRecord.Title;
        }

        let linkToDetails = eventRecord.LinkToDetails;

        if (linkToDetails) {
            title = '<a style="color: white;" target="_blank" href="' + linkToDetails.Url + '">' + title + '</a>';
        }

        editor.title = title;
    }

    setValues (editor, eventRecord) {

        const me = this;
        editor.eachWidget(widget => {

            widget.suspendEvents();
            if (!widget.hidden) {

                switch (widget.ref) {

                    case 'allDay':
                        widget.hidden = !eventRecord.allDay;
                        break;

                    case 'eventTypeField':
                        widget.value = eventRecord.TypeOfEvent.Name;
                        break;
                    case 'personDetailsField':
                        widget.value = eventRecord.PersonDetails.Fullname;
                        break;
                    case 'locationField':
                        const person = eventRecord.PersonDetails;
                        widget.value = person.City + ',' + person.Country;
                        break;
                    case 'descriptionField':
                        if (eventRecord.Description) {
                            widget.content = '<dl><dt style="margin-bottom: 10px">Description</dt><dd>' + eventRecord.Description + '</dd></dl>';
                            widget.hidden =  false;
                        } else {
                            widget.hidden = true;
                        }
                        break;
                    case 'strategicApproachTypeField':
                        const strategic = me.scheduler.strategic;
                        const label = eventRecord.StrategicApproachTypeName;

                        if (strategic && label && label.length > 0) {
                            widget.hidden =  false;
                        } else {
                            widget.hidden = true;
                        }
                        break;
                    case 'participantsField':
                        let participants = eventRecord.Participants;

                        let content = '<label class="b-align-start">Participants</label>';
                        content += '<div class="b-field-inner">';

                        if (participants) {

                            content += '<table><th>Directorate</th><th>Number</th><th>Attendee</th>';

                            participants = participants.split('|###');
                            participants.forEach(participant => {

                                content += '<tr>';

                                let columns = participant.split('|');
                                if (columns.length === 3) {
                                    columns.forEach(column => {
                                        let value = column.split('=');
                                        content += '<td>' + value[1] + '</td>';
                                    });
                                }

                                content += '</tr>';
                            });
                            content += '</table>';
                        }

                        content += '</div>';
                        widget.content = content;
                        break;
                }
            }

            widget.resumeEvents();
        });
    }

}
