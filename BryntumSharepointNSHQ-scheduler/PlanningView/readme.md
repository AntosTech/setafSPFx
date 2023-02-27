# Code and folders

### Content folder

The content folder contains the core scheduler library and css files.

- `scheduler.module.js` is imported in `\Scripts\scheduler.js` and bundled with webpack into `Scheduler.umd.js`.
- `scheduler.stockholm.css` contains the scheduler markup and need to be imported in `\Pages\Default.aspx` like `<link rel="Stylesheet" type="text/css" href="../Content/scheduler/scheduler.stockholm.css" />`
- `App.css` contains general application markup. Also it does autosizing of `schedulerplaceholder` in `\Pages\Default.aspx`

### Pages

The Pages folder contains the main page (webpart) in which the Addin is embedded. See in the `PlaceHolderAdditionalPageHead` which javascript and css files are embedded.

The application is set in div classed `nthqplaceholder`   

    <div class="nthqplaceholder">
            <div id="headerplaceholder" class="nthqheader">
                            <div id="filterplaceholder" class="nthqfilter"></div>
                            <div id="legendplaceholder" class="nthqlegend"></div>
            </div>

            <div id="schedulerplaceholder" class="nthqscheduler"></div>
     </div>

### Scripts

##### App.js

The `App.js` file implements the application flow of the page.

The flow of this file

- Get the sp.js script then:
    - initializePage wait for documentReady
        - When document ready:
            - Get RequestExecutor script to fetch data, then:
                - initializeApp (scheduler defined in Scheduler.js)
                    - Create the instance of the scheduler
                        - Loads data and configs


###### getDatasets

Dataset or sharepoint lists are retrieved by the getDataset function.

    this.getDataset = function (dataUrl, list, success, error, scope) {
            this.executor.executeAsync({
                url: this.appWebUrl + "/_api/SP.AppContextSite(@target)/web/Lists/getbytitle('" + list + "')/items?$select=*&$top=500&@target='" +  dataUrl + "'",
                method: 'GET',
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (response) {
                    if (success) {
                        try {
                            var result = JSON.parse(response.body);
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

 The `dataUrl` is the site where the list is added. `list` is the name of the Calendar, Custom List or Library.

##### Scheduler.js

The `Scheduler.js` file contains the configuration of the scheduler. The GroupedSummary example is taken as a base. When making changes to the file
the `Scheduler.umd.js` need to be re-created by issuing the webpack command in the project root folder.

The file contains the model definitions to map to the data of the Sharepoint lists.

### model

The model folder contains the datamodels used. They wrap the records in the stores.

 

    class NTHQEvent extends EventModel {

        static get fields() {
                return [
                    { name : 'id', dataSource : 'Id' },
                    { name: 'ActionOfficer' },
                    { name: 'ApprovalStatus' },
                    { name: 'Category' },
                    { name: 'Classification' },
                    { name: 'Command' },
                    { name: 'CommandProperties' },
                    { name: 'CommunityOfInterest' },
                    { name: 'DataSource' },
                    { name: 'CommandProperties' },
                    { name: 'DirectorateOrDivision' },
                    { name: 'DirectorateOrDivisionId', dataSource: 'DirectorateOrDivisionId', convert: this.getLookupValues },
                    { name: 'DirectorateOrDivisionName' },
                    { name: 'startDate', dataSource: 'EventDate', type: 'date' },
                    { name: 'endDate', dataSource: 'EndDate', type: 'date' },
                    { name: 'EnduringGoals'  },
                    { name: 'EventId', dataSource: 'Id' },
                    { name: 'FocusArea' },
                    { name: 'InternalEvent' },
                    { name: 'LevelOfAttendance' },
                    { name: 'LinesOfEffort' },
                    { name: 'LinesOfEngagement' },
                    { name: 'LinesOfOperation' },
                    { name: 'LinesOfDetails' },
                    { name: 'LinkToRelatedDocument' },
                    { name: 'LinkToRelatedWorkSpace' },
                    { name: 'LinkToDetails' },
                    { name: 'LocationLatitude' },
                    { name: 'LocationLongitude' },
                    { name: 'LocationName' },
                    { name: 'LocationRoom' },
                    { name: 'MissionNumber' },
                    { name: 'NatoResponseForce', dataSource : 'NATOResponseForce' },
                    { name: 'NatoExercise' },
                    { name: 'NatoOperation' },
                    { name: 'Participants', dataSource : 'Participants0' },
                    { name: 'PartnerShip' },
                    { name: 'PersonDetails' },
                    { name: 'PersonId' },
                    { name: 'resourceId' },
                    { name: 'Title' },
                    { name: 'Description' },
                    { name: 'name', dataSource: 'Title' },
                    { name: 'TypeOfEvent' },
                    { name: 'TypeOfEventId' },
                    // used to switch between eventype categories
                    { name: 'eventType' },
                    { name: 'RecurrenceData' },
                    { name: 'UID' },
                    { name: 'Duration' },
                    { name: 'RecurrenceID' },
                    { name: 'StrategicApproachType' },
                    { name: 'StrategicApproachTypeId', convert: this.getLookupValues },
                    { name: 'StrategicApproachTypeName' },
                    { name: 'StrategicApproachTypeDescription' }
                ];
    }

Make sure the `resourceId` field maps to the correct field defined in the EventModel.

The `datasource` property maps to the Sharepoint field names.

###### Resources

    class NTHQResource extends ResourceModel {

        static get fields() {
                return [
                    { name: 'ResourceId' },
                    { name: 'Title' },
                    { name: 'DirectorateOrDivisionName' },
                    { name: 'DirectorateOrDivisionId', defaultValue: [] },
                    { name: 'PersonDetails' },
                    { name: 'Rank' },
                    { name: 'Nationality' },
                    { name: 'TypeOfEvent' },
                    { name: 'TypeOfEventName' },
                    { name: 'TypeOfEventId' },
                    { name: 'StrategicApproachTypeId', defaultValue: [] },
                    { name: 'StrategicApproachTypeName' },
                    { name: 'StrategicApproachTypeLOEName' },
                    { name: 'Location' },
                    { name: 'Country' },
                    { name: 'imageUrl' },
                    { name: 'startDate', type: 'date' }
                ];
            }
    }

The `imageUrl` property should map to the `name` field of your Sharepoint `Picture` library.


###### NTHQEventType and NTHQStrategicType

    class NTHQEventType extends Model {

        static get fields() {
                return [
                    { name: 'Id' },
                    { name: 'Category' },
                    { name: 'Name', dataSource: 'Title' },
                    { name: 'NonWorking', defaultValue : false },
                    { name: 'Selected', defaultValue : false },
                    { name: 'EventBackgroundColor', dataSource: 'seeb' }
                ];
            }
    }


###### NTHQDirectorate

    class NTHQDirectorate extends Model {
    
        static get fields() {
            return [
                { name: 'Id' },
                { name: 'Category' },
                { name: 'Name', dataSource : 'Title' },
                { name: 'Selected', defaultValue : false }
            ];
        }
    }
    
    NTHQDirectorate.idField = 'Id';

###### NTHQPerson

    export default class NTHQPerson extends Model {
    
        static get fields() {
            return [
                { name: 'Building' },
                { name: 'City' },
                { name: 'Country' },
                { name: 'CountryCode', convert: function (value) { return value ? value.toLowerCase() : value; } },
                { name: 'DeskPhone' },
                { name: 'EmailClass' },
                { name: 'EmailUnclass' },
                { name: 'Firstname' },
                { name: 'Floor' },
                { name: 'Lastname' },
                { name: 'Location' },
                { name: 'MobilePhone' },
                { name: 'Nationality' },
                { name: 'PersonId' },
                { name: 'Rank' },
                { name: 'Room' },
                { name: 'Nationality' },
                { name: 'Section', dataSource : 'SectionId' },
                { name: 'Fullname', dataSource : 'Title' },
                { name: 'VoipPhone' }
            ];
        }
    
    }
    
    NTHQPerson.idField = 'PersonId';
    
 ###### NTHQConfig
 
    class NTHQConfig extends Model {
    
        static get fields() {
            return [
                { name: 'id', dataSource: 'Title' },
                { name: 'Name' },
                { name: 'Value' }
            ];
        }
    }
    
 ###### NTHQCountryFlag
 
     export default class NTHQCountryFlag extends Model {
     
         static get fields() {
             return [
                 { name: 'FileRef' },
                 { name: 'CountryCode' },
                 { name: 'CountryName' }
             ];
         }
     }
     
     NTHQCountryFlag.idField = 'CountryCode';
 
 
