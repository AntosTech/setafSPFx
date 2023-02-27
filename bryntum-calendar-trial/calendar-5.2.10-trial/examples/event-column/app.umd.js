'use strict';

var {
    Column,
    ColumnStore,
    Calendar
} = bryntum.calendar;
class MyAgendaColumn extends Column {
    static get type() {
        return 'myagendacolumn';
    }

    static get defaults() {
        return {
            filterable : false,
            sortable   : false,
            editor     : false,
            searchable : false
        };
    }

    /**
   * This is s standard Grid cell renderer. The record passed is DayCellCollecter DayCell
   * structure which contains contextual information about the date that the cell is
   * being rendered for, and also an events array which is the event records which coincide
   * with the date.
   *
   * A cell renderer may return a DomHelper DOM configuration object to easily create complex,
   * nested content.
   */
    renderer({
        record: cellData,
        grid,
        cellElement
    }) {
        var {
                events
            } = cellData,
            roomEvents = events.reduce((v, e) => {
                (v[e.room] || (v[e.room] = [])).push(e);
                return v;
            }, {}),
            children = [],
            result = {
                class : 'my-agenda-room-list',
                children
            };
        grid.showTime = true;
        grid.eventHeight = 'auto';

        // Cell must have a date for it to be interacted with
        cellElement.dataset.date = cellData.key;
        for (var room in roomEvents) {
            var _events = roomEvents[room];
            children.push({
                class    : 'my-agenda-room',
                children : [{
                    class : 'my-agenda-room-name',
                    text  : room
                }, {
                    class : {
                        'my-agenda-event-list'      : 1,
                        // We need this class so that event bars inherit the right look
                        'b-cal-event-bar-container' : 1
                    },
                    children : _events.map(eventRecord => {
                        // This is the standard provided way of creating a DomHelper definition
                        // of an event bar.
                        var eventDomConfig = grid.createEventDomConfig({
                            date : cellData.date,
                            eventRecord
                        });

                        // Arrow shows that it continues either way.
                        eventDomConfig.className['b-continues-future'] = eventRecord.endingDate > cellData.tomorrow;
                        eventDomConfig.className['b-continues-past'] = eventRecord.startDate < cellData.date;
                        return eventDomConfig;
                    })
                }]
            });
        }
        return result;
    }
}

// Register this Column type so that in the app we can use type : 'myagendacolumn'
ColumnStore.registerColumnType(MyAgendaColumn);
var calendar = new Calendar({
    // Start life looking at this date
    date        : new Date(2022, 8, 12),
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        loadUrl  : 'data/data.json',
        autoLoad : true
    },
    // Where the avatar rendering utility finds the resource images
    resourceImagePath : '../_shared/images/users/',
    // Show event presence as a count badge in the date picker cells
    datePicker        : {
        showEvents : 'count'
    },
    // A block of configs which is applied to all modes.
    modeDefaults : {
        daySelector : true
    },
    mode  : 'agenda',
    modes : {
        week   : null,
        month  : null,
        year   : null,
        agenda : {
            columns : {
                // Override the provided agenda column with our own
                agenda : {
                    type : 'myagendacolumn'
                }
            }
        },
        eventlist : {
            // knock out default column set - we just want to show
            // an EventColumn
            columns : {
                name      : null,
                startDate : null,
                endDate   : null,
                resources : false,
                event     : {
                    type : 'calendarevents'
                }
            }
        }
    },
    features : {
        eventEdit : {
            items : {
                resourceField : {
                    listItemTpl(data) {
                        return `${data.name} (${data.role})`;
                    }
                }
            }
        }
    },
    appendTo : 'container'
});
