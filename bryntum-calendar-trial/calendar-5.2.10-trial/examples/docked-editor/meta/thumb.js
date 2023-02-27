/* global shared */
shared.fireMouseEvent('dblclick', document.querySelector('.b-cal-event-wrap'));

// raise flag indicating page is ready for taking screenshot after editor has revealed
setTimeout(() => {
    window.__thumb_ready = true;
}, 500);
