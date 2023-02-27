/* global shared */
shared.fireMouseEvent('click', document.querySelector('.b-calendar-cell[data-date="2022-07-07"] .b-cal-cell-no-content'));

setTimeout(() => {
    // raise flag for thumb generator indicating page is ready for taking screenshot
    window.__thumb_ready = true;
}, 300);
