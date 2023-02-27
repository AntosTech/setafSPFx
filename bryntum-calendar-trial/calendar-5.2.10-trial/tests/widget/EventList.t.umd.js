"use strict";

StartTest(t => {
  let calendar;
  t.beforeEach(() => {
    var _calendar;
    (_calendar = calendar) === null || _calendar === void 0 ? void 0 : _calendar.destroy();
  });

  // https://github.com/bryntum/support/issues/2834
  t.it('Should use icons defined with b-icon', async t => {
    calendar = await t.getCalendar({
      modes: {
        list: true
      },
      mode: 'list'
    });
    t.chain({
      waitForSelector: '.b-eventlist'
    }, {
      rightClick: '.b-grid-header[data-column="name"]'
    }, {
      waitForElementVisible: '.b-icon-calendar-week',
      desc: 'b-icon applied'
    }, () => t.elementIsVisible('.b-icon-calendar-week', 'Icon calendar is visible'));
  });
  t.it('Key events should be handled only once', async t => {
    const startDate = DateHelper.clearTime(new Date());
    calendar = await t.getCalendar({
      eventStore: {
        data: [{
          name: 'Test',
          startDate,
          endDate: DateHelper.add(startDate, 1, 'day')
        }]
      },
      modes: {
        list: true
      },
      mode: 'list'
    });
    let keydownCounter = 0;
    t.spyOn(calendar.modes.list, 'handleEvent').and.callFake(e => {
      if (e.type === 'keydown') {
        if (++keydownCounter > 1) {
          t.fail('Multiple keydown events delivered to ListView');
        }
      }
    });
    await t.click('.b-grid-cell');

    // This should only end up in handleEvent once (for each component event - keydown, keyup, keypress)
    await t.keyPress(document.activeElement, '[ENTER]');
  });
  t.it('eventClick', async t => {
    const startDate = DateHelper.clearTime(new Date());
    let clickedResource, clickedEvent;
    calendar = await t.getCalendar({
      resourceImagePath: '../examples/_shared/images/users/',
      eventStore: {
        data: [{
          name: 'Test',
          startDate,
          endDate: DateHelper.add(startDate, 1, 'day'),
          resourceId: 1
        }]
      },
      resourceStore: {
        data: [{
          id: 1,
          name: 'Bruce Wayne',
          image: 'arnold.jpg',
          eventColor: 'blue',
          alias: 'Batman'
        }, {
          id: 2,
          name: 'Clark Kent',
          image: 'rob.jpg',
          eventColor: 'orange',
          alias: 'Superman'
        }]
      },
      modes: {
        list: {
          columns: {
            name: null,
            startDate: null,
            endDate: null,
            event: {
              type: 'calendarevents'
            }
          }
        }
      },
      mode: 'list',
      listeners: {
        resourceClick({
          resourceRecord,
          eventRecord
        }) {
          clickedResource = resourceRecord;
          clickedEvent = eventRecord;
        }
      }
    });
    t.willFireNTimes(calendar, 'cellClick', 2);
    t.willFireNTimes(calendar, 'eventClick', 2);
    t.firesOnce(calendar, 'resourceClick');
    await t.click('img.b-resource-avatar');
    await t.click('.b-grid-cell');

    // resourceClick works
    t.is(clickedEvent, calendar.eventStore.first);
    t.is(clickedResource, calendar.resourceStore.getById(1));
  });
  t.it('EventColumn', async t => {
    const startDate = DateHelper.clearTime(new Date());
    calendar = await t.getCalendar({
      resourceImagePath: '../examples/_shared/images/users/',
      eventStore: {
        data: [{
          name: 'Test',
          startDate,
          endDate: DateHelper.add(startDate, 1, 'day'),
          resourceId: 1
        }]
      },
      resourceStore: {
        data: [{
          id: 1,
          name: 'Bruce Wayne',
          image: 'arnold.jpg',
          eventColor: 'blue',
          alias: 'Batman'
        }, {
          id: 2,
          name: 'Clark Kent',
          image: 'rob.jpg',
          eventColor: 'orange',
          alias: 'Superman'
        }]
      },
      modes: {
        list: {
          // knock out default column set - we just want to show
          // an EventColumn
          columns: {
            name: null,
            startDate: null,
            endDate: null,
            event: {
              type: 'calendarevents'
            }
          }
        }
      },
      mode: 'list'
    });
  });
  t.describe('Snapping to range start', t => {
    function validateListRange() {
      let passes = false,
        failingEvent;
      calendar.activeView.store.forEach(e => {
        for (let d = e.startDate; !passes && d < e.endDate; d.setDate(d.getDate() + 1)) {
          // The event's date must intersect with the view's range
          passes = DateHelper.intersectSpans(e.startDate, e.endDate, calendar.activeView.startDate, calendar.activeView.endDate);
          if (!passes) {
            failingEvent = e;
          }
        }
      });
      if (!passes) {
        t.fail(`Event ${failingEvent.name} not coinciding with EventList's range found`);
      }
      calendar.eventStore.forEach(e => {
        if (!calendar.activeView.store.includes(e)) {
          for (let d = e.startDate; !passes && d < e.endDate; d.setDate(d.getDate() + 1)) {
            // The event's date must *NOT* intersect with the view's range
            passes = !DateHelper.intersectSpans(e.startDate, e.endDate, calendar.activeView.startDate, calendar.activeView.endDate);
            if (!passes) {
              failingEvent = e;
            }
          }
        }
      });
      if (!passes) {
        t.fail(`Event ${failingEvent.name} coinciding with EventList's range found`);
      }
    }
    t.it('View\'s events must intersect the view\'s range', async t => {
      const eventStore = new EventStore({
        data: t.getHackathonData().events.rows
      });
      const resourceStore = new ResourceStore({
        data: t.getHackathonData().resources.rows
      });
      calendar = await t.getCalendar({
        date: '2019-10-16',
        eventStore,
        resourceStore,
        modes: {
          day: null,
          week: null,
          month: null,
          year: null,
          agenda: null,
          list: {
            range: '1w'
          }
        },
        mode: 'list'
      });
      validateListRange();

      // must have snapped to range start
      t.is(calendar.activeView.startDate, new Date(2019, 9, 13));
      t.is(calendar.activeView.endDate, new Date(2019, 9, 20));
      await t.click(calendar.widgetMap.nextButton.element);
      validateListRange();

      // must have snapped to range start
      t.is(calendar.activeView.startDate, new Date(2019, 9, 20));
      t.is(calendar.activeView.endDate, new Date(2019, 9, 27));
      await t.click('[data-ref="datePicker"] .b-calendar-cell[data-date="2019-10-16"]');

      // must have snapped to range start
      t.is(calendar.activeView.startDate, new Date(2019, 9, 13));
      t.is(calendar.activeView.endDate, new Date(2019, 9, 20));
      calendar.activeView.range = '3d';
      t.is(calendar.activeView.startDate, new Date(2019, 9, 16));
      t.is(calendar.activeView.endDate, new Date(2019, 9, 19));
      await t.click('[data-ref="datePicker"] .b-calendar-cell[data-date="2019-10-17"]');

      // Using the selected date as the start
      t.is(calendar.activeView.startDate, new Date(2019, 9, 17));
      t.is(calendar.activeView.endDate, new Date(2019, 9, 20));
      calendar.activeView.range = '1 decade';

      // must have snapped to decade which is the 2010s
      t.is(calendar.activeView.startDate, new Date(2010, 0, 1));
      t.is(calendar.activeView.endDate, new Date(2020, 0, 1));
      await t.click(calendar.widgetMap.prevButton.element);

      // must have snapped to decade which is the 2000s
      t.is(calendar.activeView.startDate, new Date(2000, 0, 1));
      t.is(calendar.activeView.endDate, new Date(2010, 0, 1));
    });
  });
  t.it('columns should override where field matches', async t => {
    calendar = await t.getCalendar({
      modes: {
        list: {
          columns: [{
            field: 'name',
            text: 'Test 1'
          }, {
            field: 'startDate',
            text: 'Test 2'
          }, {
            field: 'endDate',
            text: 'Test 3'
          }]
        }
      },
      mode: 'list'
    });

    // Check that configured columns override the default
    t.selectorExists('.b-grid-header[data-column="name"]:contains(Test 1)');
    t.selectorExists('.b-grid-header[data-column="startDate"]:contains(Test 2)');
    t.selectorExists('.b-grid-header[data-column="endDate"]:contains(Test 3)');
  });
  t.it('Should change count on range change', async t => {
    const eventStore = new EventStore({
      data: [{
        startDate: '2019-12-01T09:00',
        endDate: '2019-12-01T10:00',
        name: 'Monday the 1st'
      }, {
        startDate: '2019-12-05T09:00',
        endDate: '2019-12-05T10:00',
        name: 'Thursday the 5th'
      }, {
        startDate: '2019-12-18T09:00',
        endDate: '2019-12-18T10:00',
        name: 'Wednesday the 18th'
      }]
    });
    calendar = await t.getCalendar({
      date: '2019-12-01',
      eventStore,
      modes: {
        day: null,
        week: null,
        month: null,
        year: null,
        agenda: null,
        list: true
      }
    });
    const list = calendar.activeView;
    t.isDeeply(list.range, {
      magnitude: 1,
      unit: 'month'
    });
    t.is(list.store.count, 3);
    await t.rightClick('.b-grid-header');
    await t.click('.b-menuitem[data-ref="listRangeItem"]');
    await t.moveMouseTo('.b-menuitem[data-ref="listRangeDayItem"]');
    await t.click('.b-menuitem[data-ref="listRangeWeekItem"]');
    await t.waitFor(() => list.store.count === 2);
    t.isDeeply(list.range, {
      magnitude: 1,
      unit: 'week'
    });
    await t.click('.b-menuitem[data-ref="listRangeDayItem"]');
    await t.waitFor(() => list.store.count === 1);
    t.isDeeply(list.range, {
      magnitude: 1,
      unit: 'day'
    });

    // Hide the menu. Next show it should have correct checked state
    await t.click('[data-ref="viewDescription"]');
    await t.rightClick('.b-grid-header');

    // Upon re-show of the menu, the checked item must be in sync with reality
    await t.click('.b-menuitem[data-ref="listRangeItem"]');
    await t.waitForSelector('.b-menuitem[data-ref="listRangeDayItem"].b-checked');
  });
  t.it('Should sync record removal', async t => {
    const eventStore = new EventStore({
      data: [{
        startDate: '2019-12-01T09:00',
        endDate: '2019-12-01T10:00',
        name: 'Monday the 1st'
      }, {
        startDate: '2019-12-05T09:00',
        endDate: '2019-12-05T10:00',
        name: 'Thursday the 5th'
      }, {
        startDate: '2019-12-18T09:00',
        endDate: '2019-12-18T10:00',
        name: 'Wednesday the 18th'
      }]
    });
    calendar = await t.getCalendar({
      datePicker: {
        showEvents: 'count'
      },
      date: '2019-12-01',
      eventStore,
      modes: {
        day: null,
        week: null,
        month: null,
        year: null,
        agenda: null,
        list: true
      }
    });
    t.selectorCountIs('.b-calendar-cell .b-cell-events-badge', 3);
    t.selectorCountIs('.b-calendar-cell[data-date="2019-12-01"] .b-cell-events-badge.b-datepicker-1-to-3-events:contains(1)', 1);
    t.selectorCountIs('.b-calendar-cell[data-date="2019-12-05"] .b-cell-events-badge.b-datepicker-1-to-3-events:contains(1)', 1);
    t.selectorCountIs('.b-calendar-cell[data-date="2019-12-18"] .b-cell-events-badge.b-datepicker-1-to-3-events:contains(1)', 1);
    await t.rightClick('.b-grid-row[data-date="2019-12-01"] .b-grid-cell');
    await t.click('.b-menuitem[data-ref="deleteEvent"]');
    await t.waitFor(() => eventStore.count === 2 && t.query('.b-calendar-cell .b-cell-events-badge').length === 2);
    t.selectorCountIs('.b-calendar-cell .b-cell-events-badge', 2);
    t.selectorCountIs('.b-calendar-cell[data-date="2019-12-01"] .b-cell-events-badge', 0);
    t.selectorCountIs('.b-calendar-cell[data-date="2019-12-05"] .b-cell-events-badge.b-datepicker-1-to-3-events:contains(1)', 1);
    t.selectorCountIs('.b-calendar-cell[data-date="2019-12-18"] .b-cell-events-badge.b-datepicker-1-to-3-events:contains(1)', 1);
    await t.rightClick('.b-grid-row[data-date="2019-12-05"] .b-grid-cell');
    await t.click('.b-menuitem[data-ref="deleteEvent"]');
    await t.waitFor(() => eventStore.count === 1 && t.query('.b-calendar-cell .b-cell-events-badge').length === 1);
    t.selectorCountIs('.b-calendar-cell .b-cell-events-badge', 1);
    t.selectorCountIs('.b-calendar-cell[data-date="2019-12-01"] .b-cell-events-badge', 0);
    t.selectorCountIs('.b-calendar-cell[data-date="2019-12-05"] .b-cell-events-badge', 0);
    t.selectorCountIs('.b-calendar-cell[data-date="2019-12-18"] .b-cell-events-badge.b-datepicker-1-to-3-events:contains(1)', 1);
    await t.rightClick('.b-grid-row[data-date="2019-12-18"] .b-grid-cell');
    await t.click('.b-menuitem[data-ref="deleteEvent"]');
    await t.waitFor(() => eventStore.count === 0 && t.query('.b-calendar-cell .b-cell-events-badge').length === 0);
  });
  t.it('Should show correct context menu', async t => {
    const startDate = new Date();
    calendar = await t.getCalendar({
      eventStore: {
        data: [{
          id: 1,
          name: 'Test',
          startDate,
          endDate: DateHelper.add(startDate, 1, 'day')
        }]
      },
      modes: {
        day: null,
        week: null,
        month: null,
        year: null,
        agenda: null,
        list: true
      }
    });
    await t.rightClick('.b-grid-cell');
    t.selectorExists('.b-menuitem[data-ref="editEvent"]', 'Edit option exists');
    t.selectorExists('.b-menuitem[data-ref="deleteEvent"]', 'Delete option exists');
    t.selectorExists('.b-menuitem[data-ref="duplicate"]', 'Duplicate option exists');
    await t.click('.b-menuitem[data-ref="editEvent"]');
    t.selectorExists('.b-eventeditor', 'Event option works');
    await t.click('.b-button[data-ref="cancelButton"]');
    await t.rightClick('.b-grid-cell');
    await t.click('.b-menuitem[data-ref="duplicate"]');
    t.is(calendar.eventStore.count, 2, 'Duplicate option works');
    await t.rightClick('.b-grid-cell');
    await t.click('.b-menuitem[data-ref="deleteEvent"]');
    t.is(calendar.eventStore.count, 1, 'Delete option works');
  });

  // https://github.com/bryntum/support/issues/5246
  t.it('columns should be in configured order', async t => {
    calendar = await t.getCalendar({
      sidebar: false,
      modes: {
        list: {
          columns: [{
            field: 'endDate',
            text: 'Should be first'
          }, {
            field: 'startDate',
            text: 'Should be second'
          }, {
            field: 'name',
            text: 'Should be third'
          }]
        }
      },
      mode: 'list'
    });

    // Check that configured columns override the default in the configured order
    t.selectorExists('.b-grid-header[data-column="endDate"][aria-colIndex="1"]:contains(Should be first)');
    t.selectorExists('.b-grid-header[data-column="startDate"][aria-colIndex="2"]:contains(Should be second)');
    t.selectorExists('.b-grid-header[data-column="name"][aria-colIndex="3"]:contains(Should be third)');
  });
  t.it('should not scroll to top on click', async t => {
    calendar = await t.getCalendar({
      sidebar: false,
      events: t.getHackathonData().events.rows.concat([{
        duration: 1,
        durationUnit: 'hour',
        id: 'twice-weekly',
        name: 'Recurring Meeting',
        recurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
        startDate: new Date(2019, 9, 15, 13)
      }]),
      modes: {
        day: null,
        week: null,
        month: null,
        year: null,
        agenda: null,
        list: {
          range: '1 year'
        }
      }
    });
    const list = calendar.activeView;
    list.scrollable.scrollBy(null, 500);
    await t.waitFor(() => list.scrollable.y === 500);
    await t.click(list.element);

    // Nothing *should* happen, so there's nothing to wait for. The test is that nothing happened.
    await t.waitFor(100);

    // Must not scroll on click
    t.is(list.scrollable.y, 500);
  });
});