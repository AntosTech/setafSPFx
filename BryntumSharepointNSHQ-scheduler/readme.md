# Requirements

- Sharepoint 2016 developer site (Sharepoint online used for development)
- VisualStudio (2017 used)
- nodejs + npm (https://www.npmjs.com/get-npm)
- Webpack and Babel (https://github.com/babel/babel-loader)
- Bryntum Scheduler package (see package.json for the version used)


# Installation

#### Sharepoint

This solution requires a Sharepoint site to deploy to. For development a development site can be used, or a common SP site
to which the wsp package can be deployed. In both cases the datalists need to be set up.

##### Create Lists

We used the following lists with the corresponding names

- BRPlusConfig (custom list)
    In the folder `DataModel` the template `BRPlusConfig` defines the structure for the event list. Upload this template to sharepoint and create a list from it.
- CountryFlags (picture list)
    In the folder `DataModel` the template `CountryFlags` defines the structure for the event list. Upload this template to sharepoint and create a list from it.    
- EventTypeList (a custom list)
    In the folder `DataModel` the template `EventTypeList` defines the structure for the event list. Upload this template to sharepoint and create a list from it.
- DirectorateList (a custom list)
    In the folder `DataModel` the template `DirectorateList` defines the structure for the event list. Upload this template to sharepoint and create a list from it.
- MasterEventCalendar (a calendarlist list)
    In the folder `DataModel` the template `MasterEventCalendar` defines the structure for the event list. Upload this template to sharepoint and create a list from it.
- PersonnelList (a custom list)
    In the folder `DataModel` the template `PersonnelList` defines the structure for the personnel list. Upload this template to sharepoint and create a list from it.


##### Check your data

To check the data of the lists (names in the returned by api result can differ from names used in the Sharepoint view) you can use the webhook e.g. for Events:

https://sitedomain/sites/developer/_api/web/Lists/getbytitle('MasterEventCalendar')/items?$select=*&$top=500
https://sitedomain/sites/developer/_api/web/Lists/getbytitle('EventTypeList')/items?$select=*&$top=500
https://sitedomain/sites/developer/_api/web/Lists/getbytitle('DirectorateList')/items?$select=*&$top=500
https://sitedomain/sites/developer/_api/web/Lists/getbytitle('PersonnelList')/items?$select=*&$top=500


#### VisualStudio Solution

- Clone `git@github.com:javascript-programming/BryntumSharepointNSHQ.git` to a folder named e.g. `NSHQ` on your harddrive.
- Open the solution in VisualStudio `NSHQ.sln`
- Install nodejs https://www.npmjs.com/get-npm and follow the instructions
- Open a console in the folder `cd .\NSHQ\PlanningView`
- Issue the command `npm i`
- Issue the command `webpack`
- In VisualStudio manage NuGet packages (`Tools->NuGet Package Manager-> Manage NuGet Packages for Solution`) and make sure jQuery is installed.
- In VisualStudio open the properties panel of the `NTHQ` project and set your sharepoint site url. Enter your credentials when asked.

##### Update library

The library is added to the lib folder. Currently version scheduler-3.0.0 is used. To update, download the lastest version of the scheduler from the customer zone.
Copy the downloaded `lib` folder to the project `lib` folder.

###### Code and Project files

All code and projectfiles can be found in the `PlanningView` folder.

- Content. The `Content` folder contains all css files. For example: The `Legend.css` file set the legend and category colors.
- DataModel. The `DataModel` folder contains the Sharepoint stp list templates.
- export. The `export` folder contains the export server code.
- lib. The `lib` folder contains the library for the scheduler.
- Pages. The `Pages` folder contains the Default.aspx file. To load offline you can use Offline.html page.
- Script. The `Scripts` folder contains all javascript files and namespaces which are used to build the app.
`App.js` is the main entry point of the application. `Scheduler.js` is the main entrypoint for webpack to build the bundle.


###### Deploy and publish

When the setup followed as described above is done the package can be deployed or published.

- For a deploy you can push the deploy trigger in the menu (`Build->Deploy`)
- For a publish you can right click the `NTHQ` project and click `publish`. Depending on the set target you can find the deploy packages (wsp file) in the folder `bin\debug` or `bin\release`.

###### Permissions and deploy properties in AppManifest.xml

When clicking the `AppManifest` file you will see some tabs. When developing and changing code it is recommended to increase the release version. In the second tab `Permissions` you can set the permission for the Add-in.
This is defaultly set on `SiteCollection: FullControl`. When deploying or importing the Add-In Sharepoint will ask for Trust of this app. Click `Trust it`.

The deployment sequence is the same as for our Sharepoint 2016 solution with ExtJs which is described here: https://www.bryntum.com/blog/adding-a-powerful-gantt-chart-to-a-sharepoint-site/.

# Known issues

VisualStudio keeps track of all files for deployment and inclusion in the project in Element.xml files. When you want a new file to be deployed then add it to the Solution. But some files (hidden in VS) should be kept out of the solution.
Do not add them accidently. It concerns the file `package.json`, `webpack.config` and all readme files. Adding the file `package.json` (npm package configuration) will cause a failed deploy.

#### Sharepoint 2013 IE11 and Edge

Minimum requirements are Sharepoint 2016 server. When deploying to 2013 please keep in mind the following:

Sharepoint 2013 does suport IE browsers until IE10. The Sharepoint master page adds `<meta http-equiv="X-UA-Compatible" content="IE=10" />` in the page header. This may cause disturbing views in Edge and in IE11 the page is set
to IE10 document mode which will cause the app fail to load. A workaround is setting `<meta http-equiv="X-UA-Compatible" content="IE=Edge" />` in the master page but this will trigger failures of Sharepoint functionality.

https://social.technet.microsoft.com/Forums/office/en-US/deb399f0-aba4-4d68-a435-ff51342c5a4f/sharepoint-2013-with-internet-explorer-11?forum=sharepointgeneral


## WSP deploy package

The compiled binary can be found here: https://github.com/javascript-programming/BryntumSharepointNSHQ/tree/master/PlanningView/bin/Release

The used list templates can be found here: https://github.com/javascript-programming/BryntumSharepointNSHQ/tree/master/PlanningView/DataModel

The security certificate is self signed, ignore the browser warning and click `advanced` and `proceed to site`.











