import { Config, Calendar } from '../../build/calendar.module.js';

StartTest(t => {
    let calendar, scheduler;

    t.beforeEach(() => calendar?.destroy?.());

    async function setup(schedulerConfig = {}, calendarConfig = {}) {
        calendar = new Calendar(Config.merge(calendarConfig, {
            appendTo : document.body,

            mode : 'timeline',

            date : new Date(2021, 7, 22),

            modes : {
                day    : null,
                week   : null,
                month  : null,
                year   : null,
                agenda : null,

                timeline : {
                    type : 'scheduler',

                    displayName : 'Timeline',

                    eventStyle : 'calendar',

                    columns : [
                        { field : 'name', text : 'Resource', width : 165 }
                    ],

                    viewPreset : {
                        base : 'hourAndDay',

                        tickWidth : 40,

                        headers : [{
                            unit       : 'day',
                            dateFormat : 'ddd MM/DD'
                        }, {
                            unit       : 'hour',
                            dateFormat : 'h'
                        }]
                    },

                    ...schedulerConfig
                }
            }
        }));

        scheduler = calendar.modes.timeline;

        await calendar.project.commitAsync();
    }

    t.it('Should scroll when clicking dates in current range in sidebar calendar', async t => {
        await setup();

        t.is(scheduler.startDate, new Date(2021, 7, 22), 'Correct time axis start');
        t.is(scheduler.endDate, new Date(2021, 7, 29), 'Correct time axis end');

        await t.click('.b-sidebar [data-date="2021-08-24"]');

        // Only ticks in range are rendered, this assertions checks that it has scrolled as expected
        await t.waitForSelector('[data-tick-index="62"]');

        t.is(scheduler.startDate, new Date(2021, 7, 22), 'Time axis start unaffected');
        t.is(scheduler.endDate, new Date(2021, 7, 29), 'Time axis end unaffected');

        await t.click('.b-sidebar [data-date="2021-08-28"]');

        await t.waitForSelector('[data-tick-index="158"]');

        await t.click('.b-sidebar [data-date="2021-08-22"]');

        await t.waitForSelector('[data-tick-index="0"]');

        t.pass('Scrolled as expected');
    });

    t.it('Should change week when clicking dates out of range in sidebar calendar', async t => {
        await setup();

        await t.click('.b-sidebar [data-date="2021-08-31"]');

        await t.waitForSelector('[data-tick-index="62"]');

        t.is(scheduler.startDate, new Date(2021, 7, 29), 'Correct time axis start');
        t.is(scheduler.endDate, new Date(2021, 8, 5), 'Correct time axis end');

        t.selectorExists('.b-calendar-view-desc:textEquals("Aug - Sep 2021 (Week 35)")');

        await t.click('.b-sidebar [data-date="2021-08-08"]');

        await t.waitForSelector('[data-tick-index="0"]');

        t.is(scheduler.startDate, new Date(2021, 7, 8), 'Correct time axis start');
        t.is(scheduler.endDate, new Date(2021, 7, 15), 'Correct time axis end');

        t.selectorExists('.b-calendar-view-desc:textEquals("August 2021 (Week 32)")');
    });

    t.it('Should support changing range', async t => {
        await setup({
            range : 'month'
        });

        await t.waitForSelector('.b-calendar-view-desc:textEquals(August, 2021)');
        t.is(scheduler.startDate, new Date(2021, 7, 1), 'Correct time axis start with initial range specified');
        t.is(scheduler.endDate, new Date(2021, 8, 1), 'Correct time axis end with initial range specified');
        t.is(scheduler.date, new Date(2021, 7, 22), 'Date unchanged');

        scheduler.range = 'day';

        await t.waitForSelector('.b-calendar-view-desc:textEquals(August 22, 2021)');
        t.is(scheduler.startDate, new Date(2021, 7, 22), 'Correct time axis start after changing range');
        t.is(scheduler.endDate, new Date(2021, 7, 23), 'Correct time axis end after changing range');
        t.is(scheduler.date, new Date(2021, 7, 22), 'Date unchanged');
    });

    t.it('Should step with next and previous buttons', async t => {
        await setup();

        await t.click('[data-ref=prevButton]');

        t.is(scheduler.startDate, new Date(2021, 7, 15), 'Correct time axis start after step back');
        t.is(scheduler.endDate, new Date(2021, 7, 22), 'Correct time axis end');

        await t.click('[data-ref=prevButton]');

        t.is(scheduler.startDate, new Date(2021, 7, 8), 'Correct time axis start after another step back');
        t.is(scheduler.endDate, new Date(2021, 7, 15), 'Correct time axis end');

        await t.click('[data-ref=nextButton]');

        t.is(scheduler.startDate, new Date(2021, 7, 15), 'Correct time axis start after step forward');
        t.is(scheduler.endDate, new Date(2021, 7, 22), 'Correct time axis end');

        await t.click('[data-ref=nextButton]');

        t.is(scheduler.startDate, new Date(2021, 7, 22), 'Correct time axis start after another step forward');
        t.is(scheduler.endDate, new Date(2021, 7, 29), 'Correct time axis end');
    });

    t.it('Should support changing step size', async t => {
        await setup({
            range    : 'month',
            stepUnit : 'day'
        });

        await t.click('[data-ref=prevButton]');

        await t.waitForSelector('[data-tick-index="480"]');

        t.is(scheduler.startDate, new Date(2021, 7, 1), 'Correct time axis start after step #1');
        t.is(scheduler.endDate, new Date(2021, 8, 1), 'Correct time axis end');
        t.is(scheduler.date, new Date(2021, 7, 21), 'Correct date');

        await t.click('[data-ref=prevButton]');

        await t.waitForSelector('[data-tick-index="456"]');

        t.is(scheduler.startDate, new Date(2021, 7, 1), 'Correct time axis start after step #2');
        t.is(scheduler.endDate, new Date(2021, 8, 1), 'Correct time axis end');
        t.is(scheduler.date, new Date(2021, 7, 20), 'Correct date');

        scheduler.stepUnit = 'month';

        await t.click('[data-ref=nextButton]');

        t.is(scheduler.startDate, new Date(2021, 8, 1), 'Correct time axis start after step #3');
        t.is(scheduler.endDate, new Date(2021, 9, 1), 'Correct time axis end');
        t.is(scheduler.date, new Date(2021, 8, 20), 'Correct date');
    });

    t.it('Should not crash when clicking time axis header', async t => {
        await setup();

        await t.click('.b-sch-header-timeaxis-cell');

        t.pass('Did not crash');
    });

    t.it('Editing recurring event', async t => {
        await setup(undefined, {
            sidebar : false,
            events  : [{
                duration       : 8,
                durationUnit   : 'hour',
                id             : 'twice-weekly',
                name           : 'Recurring Meeting',
                recurrenceRule : 'FREQ=WEEKLY;BYDAY=TU,TH',
                startDate      : new Date(2021, 7, 22, 8),
                resourceId     : 1
            }],
            resources : [{
                id   : 1,
                name : 'Resource'
            }],
            modes : {
                week : true
            }
        });
        const event = scheduler.eventStore.first;

        await t.doubleClick('.b-sch-event-wrap');

        await t.waitFor(() => calendar.features.eventEdit.editor?.containsFocus);

        await t.click('[data-ref="startTimeField"] [data-ref="forward"]');
        await t.click('[data-ref="startTimeField"] [data-ref="forward"]');

        await t.click('[data-ref="saveButton"]');

        await t.click('.b-recurrenceconfirmationpopup [data-ref="changeMultipleButton"]');

        // We have budged it forward to 9
        await t.waitFor(() => scheduler.getDateFromCoordinate(scheduler.getEventElement(event).getBoundingClientRect().x, null, false).getHours() === 9);

        t.pass('Did not crash');
    });

    // https://github.com/bryntum/support/issues/4529
    t.it('Should not trigger sync double clicking to create event in Scheduler child view', async t => {
        await setup({}, {
            crudManager : {
                autoSyncTimeout : 1,
                resourceStore   : {
                    data : [{ name : 'Bob' }]
                },
                autoLoad : false,
                autoSync : true
            }
        });

        t.wontFire(calendar.crudManager, 'beforesync');

        await t.doubleClick('.b-sch-timeaxis-cell', null, null, null, [10, 10]);

        await t.waitFor(100);
    });
});
