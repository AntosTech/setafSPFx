"use strict";

StartTest(t => {
  let calendar, eventStore, resourceStore;
  async function getCalendar(config) {
    const calendar = await t.getCalendar(config);
    eventStore = calendar.eventStore;
    resourceStore = calendar.resourceStore;
    return calendar;
  }
  t.beforeEach(() => {
    var _calendar;
    return (_calendar = calendar) === null || _calendar === void 0 ? void 0 : _calendar.destroy();
  });
  t.it('Should not change sidebar width when month changes for all locales and themes', async t => {
    calendar = await getCalendar({
      date: new Date(2019, 9, 14),
      events: [],
      resources: [],
      modes: {
        week: null,
        month: null,
        year: null,
        agenda: null
      },
      datePicker: {
        animateTimeShift: false
      }
    });
    const {
        datePicker,
        sidebar
      } = calendar,
      locales = Object.keys(window.bryntum.locales),
      themes = ['classic-light', 'classic-dark', 'material', 'stockholm', 'classic'],
      testMonthLengths = async (themeName, localeName) => {
        for (let i = 0; i < 12; i++) {
          const {
            refreshCount
          } = datePicker;
          await t.type(null, '[ENTER]');
          await t.waitFor(() => datePicker.refreshCount > refreshCount);

          // Active cell may change, but there must always be only one
          t.is(datePicker.element.querySelectorAll('.b-calendar-cell[role="gridcell"][tabIndex="0"]').length, 1, `Active cell count is 1 for ${DateHelper._monthNames[i]}`);

          // Must not have changed width
          if (sidebar.element.offsetWidth !== offsetWidth) {
            t.fail(`${themeName}, ${localeName}, ${DomHelper._monthNames[datePicker.month.month]} caused resize`);
          }
        }
      };
    await t.waitFor(() => datePicker.refreshCount);
    datePicker.widgetMap.nextMonth.element.focus();

    // Cache starting width of sidebar
    const {
      offsetWidth
    } = sidebar.element;

    // Every month for every locale for every theme must get a refresh.
    // Plus one for the reset back to En at test's end.
    t.willFireNTimes(datePicker, 'refresh', ((locales.length + 1) * 12 + locales.length + 1) * (themes.length - 1) + 1);
    await t.forEveryThemeAndLocale(testMonthLengths);
  });
  t.it('Should not change sidebar width when month changes for all locales and themes with examples font used', async t => {
    // Start up the Calendar using the same font as the examples pages
    calendar = await getCalendar({
      style: {
        fontFamily: 'Poppins, "Helvetica Neue", Arial, Helvetica, sans-serif'
      },
      date: new Date(2019, 9, 14),
      events: [],
      resources: [],
      modes: {
        week: null,
        month: null,
        year: null,
        agenda: null
      },
      datePicker: {
        animateTimeShift: false
      }
    });
    const {
        datePicker,
        sidebar
      } = calendar,
      locales = Object.keys(window.bryntum.locales),
      themes = ['classic-light', 'classic-dark', 'material', 'stockholm', 'classic'],
      testMonthLengths = async (themeName, localeName) => {
        for (let i = 0; i < 12; i++) {
          const {
            refreshCount
          } = datePicker;
          await t.type(null, '[ENTER]');
          await t.waitFor(() => datePicker.refreshCount > refreshCount);

          // Active cell may change, but there must always be only one
          t.is(datePicker.element.querySelectorAll('.b-calendar-cell[role="gridcell"][tabIndex="0"]').length, 1, `Active cell count is 1 for ${DateHelper._monthNames[i]}`);

          // Must not have changed width
          if (sidebar.element.offsetWidth !== offsetWidth) {
            t.fail(`${themeName}, ${localeName}, ${DomHelper._monthNames[datePicker.month.month]} caused resize`);
          }
        }
      };
    await t.waitFor(() => datePicker.refreshCount);
    datePicker.widgetMap.nextMonth.element.focus();
    const {
      offsetWidth
    } = sidebar.element;

    // Every month for every locale for every theme must get a refresh.
    // Plus one for the reset back to En at test's end.
    t.willFireNTimes(datePicker, 'refresh', ((locales.length + 1) * 12 + locales.length + 1) * (themes.length - 1) + 1);
    await t.forEveryThemeAndLocale(testMonthLengths);
  });
  t.it('Sidebar navigation', async t => {
    eventStore = new EventStore({
      data: t.getHackathonData().events.rows
    });
    resourceStore = new ResourceStore({
      data: t.getHackathonData().resources.rows
    });
    calendar = await t.getCalendar({
      date: new Date(2019, 9, 14),
      eventStore,
      resourceStore
    });
    await t.click('.b-sidebar .b-datepicker [data-date="2019-10-20"]');
    t.is(calendar.modes.week.startDate, new Date(2019, 9, 20), 'Navigated correctly');
    await t.click('button[data-ref=monthShowButton]');
    t.is(calendar.mode, 'month');
    t.wontFire(calendar.activeView, 'resize');
    await t.click('.b-sidebar .b-datepicker [data-date="2019-09-30"]');
    t.is(calendar.modes.month.startDate, new Date(2019, 8, 1), 'Navigated correctly using month strict date ownership');
    await t.click('button:contains(Year)');
    async () => t.is(calendar.mode, 'year');
    await t.click('.b-sidebar .b-datepicker [data-ref="nextMonth"]');
    await t.waitForSelector('.b-sidebar .b-datepicker [data-date="2019-10-15"]');
    await t.click('.b-sidebar .b-datepicker [data-ref="nextMonth"]');
    await t.waitForSelector('.b-sidebar .b-datepicker [data-date="2019-11-15"]');
    await t.click('.b-sidebar .b-datepicker [data-ref="nextMonth"]');
    await t.click('.b-sidebar .b-datepicker [data-date="2020-01-11"]');
    t.is(calendar.modes.year.startDate, new Date(2019, 11, 29), 'Navigated correctly using year strict date ownership');
    await t.click('button[data-ref=monthShowButton]');
    await t.waitForAnimations();
    t.is(calendar.mode, 'month');
  });
  t.it('Sidebar initially collapsed', async t => {
    eventStore = new EventStore({
      // Add a recurring meeting
      data: t.getHackathonData().events.rows.concat([{
        duration: 1,
        durationUnit: 'hour',
        id: 'twice-weekly',
        name: 'Recurring Meeting',
        recurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
        startDate: new Date(2019, 9, 15, 13)
      }])
    });
    resourceStore = new ResourceStore({
      data: t.getHackathonData().resources.rows
    });
    calendar = await t.getCalendar({
      date: new Date(2019, 9, 14),
      eventStore,
      resourceStore,
      mode: 'month',
      sidebar: {
        collapsed: true
      }
    });
    t.isApproxPx(calendar.sidebar.element.getBoundingClientRect().right, 0, 'It\'s off the left immediately');
  });
  t.it('Allow datePicker to be configured away through sidebar items', async t => {
    eventStore = new EventStore({
      // Add a recurring meeting
      data: t.getHackathonData().events.rows.concat([{
        duration: 1,
        durationUnit: 'hour',
        id: 'twice-weekly',
        name: 'Recurring Meeting',
        recurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
        startDate: new Date(2019, 9, 15, 13)
      }])
    });
    resourceStore = new ResourceStore({
      data: t.getHackathonData().resources.rows
    });
    calendar = await t.getCalendar({
      date: new Date(2019, 9, 14),
      eventStore,
      resourceStore,
      sidebar: {
        items: {
          datePicker: false
        }
      }
    });

    // If this test executes with no errors and has no DatePicker, that's a pass
    t.selectorCountIs('.b-sidebar [data-ref="datePicker"]', 0, 'Sidebar\'s preconfgured datePicker correctly not present');
    t.selectorCountIs('.b-sidebar .b-datepicker', 0, 'Sidebar\'s preconfgured datePicker correctly not present');
  });
  t.it('Allow datePicker to be configured away through Calendar config', async t => {
    eventStore = new EventStore({
      // Add a recurring meeting
      data: t.getHackathonData().events.rows.concat([{
        duration: 1,
        durationUnit: 'hour',
        id: 'twice-weekly',
        name: 'Recurring Meeting',
        recurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
        startDate: new Date(2019, 9, 15, 13)
      }])
    });
    resourceStore = new ResourceStore({
      data: t.getHackathonData().resources.rows
    });
    calendar = await t.getCalendar({
      date: new Date(2019, 9, 14),
      eventStore,
      resourceStore,
      datePicker: null
    });

    // If this test executes with no errors and has no DatePicker, that's a pass
    t.selectorCountIs('.b-sidebar [data-ref="datePicker"]', 0, 'Sidebar\'s preconfgured datePicker correctly not present');
    t.selectorCountIs('.b-sidebar .b-datepicker', 0, 'Sidebar\'s preconfgured datePicker correctly not present');
  });
  t.it('Sidebar collapse overlay', async t => {
    eventStore = new EventStore({
      // Add a recurring meeting
      data: t.getHackathonData().events.rows.concat([{
        duration: 1,
        durationUnit: 'hour',
        id: 'twice-weekly',
        name: 'Recurring Meeting',
        recurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
        startDate: new Date(2019, 9, 15, 13)
      }])
    });
    resourceStore = new ResourceStore({
      data: t.getHackathonData().resources.rows
    });
    calendar = await t.getCalendar({
      date: new Date(2019, 9, 14),
      overlaySidebar: true,
      responsive: null,
      eventStore,
      resourceStore
    });

    // Sidebar collapse tool has been configured away because the Sidebar has no header
    t.selectorNotExists('.b-collapsetool');
    await t.click(calendar.tbar.widgetMap.toggleSideBar.element);

    // The locker element must become visible
    await t.waitForSelector('.b-panel-overlay-revealed .b-panel-collapse-size-locker');
    await t.click(calendar.tbar.widgetMap.toggleSideBar.element);

    // The locker element must become invisible
    await t.waitForSelectorNotFound('.b-panel-overlay-revealed .b-panel-collapse-size-locker');
  });

  // https://github.com/bryntum/support/issues/2850
  t.it('Should respect weekStartDay set on Calendar', async t => {
    calendar = await t.getCalendar({
      weekStartDay: 1
    });
    t.is(calendar.widgetMap.datePicker.weekStartDay, 1, 'datePicker configured ok');
    t.contentLike('.b-sidebar .b-calendar-day-header[data-column-index="0"]', 'M', 'Sidebar datepicker should respect weekStartDay');
  });
});