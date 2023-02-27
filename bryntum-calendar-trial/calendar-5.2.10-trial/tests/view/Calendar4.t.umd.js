"use strict";

StartTest(t => {
  let calendar, /* eventStore, resourceStore,*/harness;
  const getCalendar = async config => {
    const calendar = await t.getCalendar(config);
    // eventStore = calendar.eventStore;
    // resourceStore = calendar.resourceStore;
    return calendar;
  };
  t.beforeEach(() => {
    t.setupCalendarTest(calendar, harness);
  });

  // https://github.com/bryntum/support/issues/5433
  t.it('Should keep sidebar datePicker date in sync when "Today" button is clicked', async t => {
    const today = DateHelper.clearTime(new Date()),
      previousMonth = DateHelper.add(today, -1, 'month').getMonth();
    calendar = await getCalendar({
      date: today,
      events: [],
      resources: []
    });
    const {
      datePicker
    } = calendar.sidebar.widgetMap;
    t.is(calendar.date, today);
    t.is(datePicker.date, today);
    await t.click('button[data-ref="prevMonth"]');
    t.is(datePicker.date.getMonth(), previousMonth, 'Correct month');
    await t.click(calendar.widgetMap.todayButton.element);
    t.is(calendar.date, today);
    t.is(datePicker.date, today);
  });

  // https://github.com/bryntum/support/issues/5460
  t.it('Should correctly duplicate multi assigned events', async t => {
    t.mockUrl('test-duplicate-multi-assigned-data', {
      delay: 100,
      responseText: JSON.stringify({
        success: true,
        resources: {
          rows: [{
            id: 1,
            name: 'Resource 1'
          }, {
            id: 2,
            name: 'Resource 2'
          }]
        },
        events: {
          rows: [{
            id: 1,
            name: 'Event 1',
            startDate: '2022-06-05',
            endDate: '2022-06-10',
            duration: 5,
            durationUnit: 'd'
          }]
        },
        assignments: {
          rows: [{
            id: 1,
            eventId: 1,
            resourceId: 1
          }, {
            id: 2,
            eventId: 1,
            resourceId: 2
          }]
        }
      })
    });
    calendar = await getCalendar({
      crudManager: {
        transport: {
          load: {
            url: 'test-duplicate-multi-assigned-data'
          }
        },
        autoLoad: true,
        autoSync: false
      },
      modes: {
        day: null,
        week: null,
        year: null,
        agenda: null
      },
      date: '2022-06-05'
    });
    const {
      eventStore
    } = calendar;

    // Starting condition
    t.is(eventStore.count, 1);
    await t.rightClick('.b-cal-event-wrap');
    await t.click('.b-menuitem[data-ref="duplicate"]');

    // Duplicate has worked
    t.is(eventStore.count, 2);

    // Same assignments
    t.isDeeply(eventStore.first.resources, eventStore.last.resources);
    await t.doubleClick(`.b-cal-event-wrap[data-event-id="${eventStore.last.id}"]`);

    // Resource field must be a multiselect with two chips
    t.waitForSelectorCount('[data-ref="resourceField"] .b-chip', 2);
  });

  // https://github.com/bryntum/support/issues/5528
  t.it('Should fire dayNumberClick and monthNameClick', async t => {
    calendar = await getCalendar({
      events: [{
        startDate: '2022-06-01',
        endDate: '2022-06-02',
        name: 'Just to get an Agenda cell'
      }],
      resources: [],
      sidebar: false,
      mode: 'week',
      date: '2022-06-03',
      listeners: {
        dayNumberClick(e) {
          events.push([e.type, e.source.type]);
        },
        weekNumberClick(e) {
          events.push([e.type, e.source.type]);
        },
        monthNameClick(e) {
          events.push([e.type, e.source.type]);
        }
      }
    });
    const events = [];
    await t.click('.b-cal-cell-header[data-header-date="2022-06-03"]');

    // Clicking the week view's day header must navigate to day view
    await t.waitFor(() => calendar.mode === 'day');
    await t.waitForAnimations();
    await t.click('[data-ref="monthShowButton"]');
    await t.waitFor(() => calendar.mode === 'month');
    await t.waitForAnimations();
    await t.click('.b-week-num');

    // Clicking the month view's first column week number must navigate to week view
    await t.waitFor(() => calendar.mode === 'week');
    await t.waitForAnimations();
    await t.click('[data-ref="monthShowButton"]');
    await t.waitFor(() => calendar.mode === 'month');
    await t.waitForAnimations();

    // Clicking the month view's in-cell day number must navigate to day view
    await t.click('.b-calendar-cell[data-date="2022-06-03"] .b-day-num');
    await t.waitFor(() => calendar.mode === 'day');
    await t.waitForAnimations();
    await t.click('[data-ref="yearShowButton"]');
    await t.waitFor(() => calendar.mode === 'year');
    await t.waitForAnimations();

    // Clicking the year view's month name must navigate to month view
    await t.click('.b-yearview-month-name[data-month-date="2022-06-01"');
    await t.waitFor(() => calendar.mode === 'month');
    await t.waitForAnimations();
    await t.click('[data-ref="yearShowButton"]');
    await t.waitFor(() => calendar.mode === 'year');
    await t.waitForAnimations();

    // Clicking the year view's week number cell must navigate to month view
    await t.click('.b-yearview [data-week="2022,23"] .b-week-number-cell');
    await t.waitFor(() => calendar.mode === 'week');
    await t.waitForAnimations();
    await t.click('[data-ref="agendaShowButton"]');
    await t.waitFor(() => calendar.mode === 'agenda');
    await t.waitForAnimations();
    await t.click('[data-date="2022-06-01"] .b-cal-agenda-date-date-number');
    await t.waitFor(() => calendar.mode === 'day');
    await t.waitForAnimations();
    t.isDeeply(events, [['daynumberclick', 'calendarrow'], ['weeknumberclick', 'monthview'], ['daynumberclick', 'monthview'], ['monthnameclick', 'yearview'], ['weeknumberclick', 'yearview'], ['daynumberclick', 'agendaview']]);
  });
  t.it('Should always have modeDefaults available as a Proxy', async t => {
    calendar = await getCalendar({
      modes: {
        week: false,
        month: false,
        year: false,
        agenda: false
      }
    });
    const {
      hourHeight
    } = calendar.modes.day;
    calendar.modeDefaults.hourHeight = 60;

    // Must have changed
    t.isGreater(calendar.modes.day.hourHeight, hourHeight);
  });
});