StartTest(async t => {
    const
        calendar = bryntum.query('calendar'),
        sel       = selector => `bryntum-calendar -> ${selector}`;

    await t.waitForSelector(sel('.b-cal-event'));

    t.it('Should support rendering + dragging event in a webcomponent', async t => {
        t.firesOnce(calendar, 'eventclick');
        t.firesOnce(calendar.eventStore, 'update');

        await t.click(sel('.b-cal-event:contains(Click me)'));
        await t.dragBy({
            source : sel('.b-cal-event'),
            delta  : [-100, 0]
        });

        await t.waitForSelectorNotFound('.b-dragging');

        let movedTask;
        await t.waitFor(() => (movedTask = calendar.eventStore.changes?.modified[0]));

        t.is(movedTask.startDate, new Date(2018, 3, 2, 10), 'Start Date updated');
    });

    t.it('Should support typing', async t => {
        t.firesOnce(calendar, 'eventdblclick');
        t.firesOnce(calendar.eventStore, 'update');

        await t.doubleClick(sel('.b-cal-event:contains(Drag me)'));
        await t.type(null, 'foo[ENTER]', null, null, null, true);
        await t.waitForSelector(sel('.b-cal-event:contains(foo)'));
    });

    // https://github.com/bryntum/support/issues/4969
    t.it('Should have demo toolbar localization', async t => {
        await t.moveMouseTo('[data-ref="fullscreenButton"]');
        await t.waitForSelector('.b-tooltip:contains("Full screen")');
    });

});
