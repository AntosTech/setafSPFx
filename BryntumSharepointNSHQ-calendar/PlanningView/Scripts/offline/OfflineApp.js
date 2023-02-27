import { NTHQScheduler } from '../SchedulerCalendar.js';

/**
 * This function is for offline testing. Data is retrieved from /DataModel/Data/
 * @param hostWebUrl
 * @param appWebUrl
 * @constructor
 */
function Page(hostWebUrl, appWebUrl) {

    this.hostWebUrl = hostWebUrl;

    this.lists = {
        directorates : { name : 'directorates.json' },
        eventTypes : { name : 'eventtypes.json' },
        strategicTypes : { name: 'strategic.json' },
        networkTypes: { name: 'networktypes.json' },
        events : { name : 'events.json' },
        personnel : { name : 'personnel.json' },
        countryFlags: { name: 'countries.json' },
        config : { name: 'config.json' },
        navigationItems : { name: 'navigation.json' },
        eventTags : { name: 'eventtags.json' }
    };

    Object.values(this.lists).forEach(function (value) { value.url = this.hostWebUrl; }, this);

    this.getTimeZoneOffset = function (success, scope) {
        var localTzOffset = new Date().getTimezoneOffset();
        success.call(scope || this, -60 - localTzOffset);
    };


    this.getDataset = function (list, success, error, scope) {
        fetch(list.url + list.name).then(function (response) {
            response.json().then(function (result) {
                success.call(scope || this, result.rows || result);
            });
        }).catch(error.bind(scope || this));
    };

    this.initializeApp = function () {
           new NTHQScheduler(this);
    };
}

function isIE() {
    return  /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
}

if (top === self) { // we are not in the iframe
    if (isIE()) {
        window.location.replace('ie.html?' + window.location.href + window.location.search);
    }
}

new Page('../DataModel/Data/').initializeApp();
