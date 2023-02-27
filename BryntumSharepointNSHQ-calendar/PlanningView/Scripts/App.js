'use strict';

/**
 * Requirements
 *
 * In Default.aspx the folowing script tags are set
 *
 * The bundled Scheduler.js file.
 *  <script type="text/javascript" src="../Scripts/Scheduler.umd.js"></script>
 *
 * This javascript file.
 *  <script type="text/javascript" src="../Scripts/App.js"></script>
 *
 *
 * The flow of this file
 *
 * - Get the sp.js script then:
 *  - initializePage wait for documentReady
 *     - When document ready:
 *       - Get RequestExecutor script to fetch data, then:
 *          - initializeApp (scheduler defined in Secheduler.js)
 *              - Load data from the lists and calendar
 *                  - When data loaded:
 *                      - Create the instance of the scheduler
 *
 **/

/**
 * Class to construct the Page with the embedded Scheduler.
 *
 * @param {any} hostWebUrl The SP uri where the api resides
 * @param {any} appWebUrl The SP uri where the app resides
 */
function Page(hostWebUrl, appWebUrl) {

    this.hostWebUrl = hostWebUrl;
    this.appWebUrl = appWebUrl;

    // Listname to be retrieved should be set overhere
    this.lists = {
        config: { name: 'BRPlusConfig' },
        directorates: { name: 'DirectorateList' },
        eventTypes: { name: 'EventTypeList' },
        strategicTypes: { name: 'StrategicApproachList' },
        networkTypes: { name: 'NetworkType' },
        events: { name: 'MasterEventCalendar' },
        personnel: { name: 'PersonnelList' },
        countryFlags: { name: 'CountryAlpha3Codes', query: '$select=*,FileRef' },
        navigationItems: { name: 'NavigationList' },
        eventTags: { name: 'EventTagList' }
    };

    Object.values(this.lists).forEach(function (value) { value.url = this.hostWebUrl; }, this);


    /**
     * Function to fetch data cross Sharepoint domains
     *
     * @param {any} list The name of the list, calendar of library
     * @param {any} success Success callback, gets the returned data array as input param
     * @param {any} error Error callback to handle errors
     * @param {any} scope Scope of the function call, defaultly set on this class.
     * @param {any} dataUrl The SP uri where the data list resides
     */
    this.getDataset = function (list, success, error, scope) {

        // Query will be set by set remoteFilter in the data NTHQData component class.
        var query = list.query || '$select=*&$top=500';

        this.executor.executeAsync({
            url: this.appWebUrl + "/_api/SP.AppContextSite(@target)/web/Lists/getbytitle('" + list.name + "')/items?" + query + "&@target='" +  list.url + "'",
            method: 'GET',
            headers: { "Accept": "application/json; odata=verbose" },
            success: function (response) {
                if (success) {
                    try {
                        var result = JSON.parse(response.body);
                        // console.log(result.d.results);
                        success.call(scope || this, result.d.results);
                    } catch (e) {
                        error && error.call(scope || this, e);
                    }
                }
            },
            error: function (response) {
               error && error.call(scope || this, response);
            }
        });
    };

    /**
     * Handle errors
     * @param {any} response
     */
    this.error = function (response) {
        console.log(response);
    };

    this.getTimeZoneOffset = function (success, scope) {
        var context = SP.ClientContext.get_current();
        var web = context.get_web();
        var timeZone = web.get_regionalSettings().get_timeZone();
        var localTzOffset = new Date().getTimezoneOffset();

        context.load(timeZone);
        context.executeQueryAsync(
            function onSucceeded() {
                var spTzOffset = timeZone.get_timeZone().get_information().get_bias();
                success.call(scope || this, spTzOffset - localTzOffset);
            },
            function onFailure () {
                success.call(scope || this, 0);
            }
        );
    };

    /**
     * Initialize the app. Creates the data fetcher, loads the data and creates the scheduler.
     **/
    this.initializeApp = function () {
        this.executor = new SP.RequestExecutor(this.appWebUrl);

        var icon = document.querySelector('.ms-siteicon-img');

        if (icon) {
            icon.src = '../images/NSHQCrest.png';
        }

        new BryntumLib.NTHQScheduler(this);
    };

    // Start the initialization when the RequestExecutor is loaded, else we can not fetch data. Sharepoint documentation prefers this way over a script tag.
    $.getScript(this.hostWebUrl + "/_layouts/15/SP.RequestExecutor.js", this.initializeApp.bind(this));
}

/**
 * Global funtion the initialize the Page.
 **/
function initializePage()
{
    // A function to retrieve parameters from the url.
    function getParameterByName(name, url) {
        if (!url)
            url = window.location.href;

        name = name.replace(/[\[\]]/g, "\\$&");

        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);

        if (!results)
            return null;

        if (!results[2])
            return '';

        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Create a new Page when the document is ready.
    $(document).ready(function () {

        // Sharepoint pages can not be loaded in a iFrame, we need to adjust the link target for the back button
        if (isIE()) {
            var el = document.querySelector('#appBackLink a');
            if (el) {
                el.target = '_top';
            }
        }

        document.nthqPage = new Page(getParameterByName("SPHostUrl"), getParameterByName("SPAppWebUrl"));
    });
}

function isIE() {
    return  /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
}

// Sharepoint set the browser in compatibility mode, when can prevent that by loading the app in a iFrame. ie.html which will set the correct meta header
if (top === self) { // we are not in the iframe
    if (isIE()) {
        window.location.replace('ie.html?' + window.location.href);
    }
}

// Load javascript SP namespace script before starting the proces.
ExecuteOrDelayUntilScriptLoaded(function () {
    initializePage();
}, "sp.js");
