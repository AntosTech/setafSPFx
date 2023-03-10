"use strict";

StartTest(t => {
  t.it('Sanity', async t => {
    let w;
    await t.click('.b-cal-event-wrap');
    const calendar = bryntum.query('calendar');
    await t.moveMouseTo('.b-tool[data-ref="edit"]');
    await t.waitForSelector('.b-tooltip:contains(Edit event)');
    await t.click('.b-tool[data-ref="edit"]');
    await t.waitFor(() => {
      var _calendar$features$ev;
      w = (_calendar$features$ev = calendar.features.eventEdit._editor) === null || _calendar$features$ev === void 0 ? void 0 : _calendar$features$ev.widgetMap;
      return Boolean(w);
    });
    await t.click('.b-datefield .b-fieldtrigger[data-ref="expand"]');
    await t.moveMouseTo('.b-datepicker.b-floating button[data-ref="prevMonth"]');
    await t.waitForSelector('.b-tooltip:contains(Go to previous month)');
    await t.rightClick('.b-dayview-day-detail .b-cal-event-wrap');
    await t.waitForSelector('.b-menu');
    calendar.eachWidget(w => {
      if (!w.rtl) {
        t.fail(`Widget ${w.id} has not inherited the RTL setting`);
      }
    });
  });
});