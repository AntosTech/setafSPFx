/*!
 *
 * Bryntum Scheduler 5.2.0
 *
 * Copyright(c) 2022 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("En",[],t):"object"==typeof exports?exports.En=t():(e.bryntum=e.bryntum||{},e.bryntum.locales=e.bryntum.locales||{},e.bryntum.locales.En=t())}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./lib/Scheduler/localization/En.js")}({"../Core/lib/Core/localization/En.js":function(e,t,n){"use strict";n.r(t);var o={localeName:"En",localeDesc:"English",Object:{Yes:"Yes",No:"No",Cancel:"Cancel",Ok:"OK",Week:"Week"},Combo:{noResults:"No results",recordNotCommitted:"Record could not be addded",addNewValue:function(e){return"Add ".concat(e)}},FilePicker:{file:"File"},Field:{badInput:"Invalid field value",patternMismatch:"Value should match a specific pattern",rangeOverflow:function(e){return"Value must be less than or equal to ".concat(e.max)},rangeUnderflow:function(e){return"Value must be greater than or equal to ".concat(e.min)},stepMismatch:"Value should fit the step",tooLong:"Value should be shorter",tooShort:"Value should be longer",typeMismatch:"Value is required to be in a special format",valueMissing:"This field is required",invalidValue:"Invalid field value",minimumValueViolation:"Minimum value violation",maximumValueViolation:"Maximum value violation",fieldRequired:"This field is required",validateFilter:"Value must be selected from the list"},DateField:{invalidDate:"Invalid date input"},DatePicker:{gotoPrevYear:"Go to previous year",gotoPrevMonth:"Go to previous month",gotoNextMonth:"Go to next month",gotoNextYear:"Go to next year"},NumberFormat:{locale:"en-US",currency:"USD"},DurationField:{invalidUnit:"Invalid unit"},TimeField:{invalidTime:"Invalid time input"},TimePicker:{hour:"Hour",minute:"Minute"},List:{loading:"Loading..."},GridBase:{loadMask:"Loading...",syncMask:"Saving changes, please wait..."},PagingToolbar:{firstPage:"Go to first page",prevPage:"Go to previous page",page:"Page",nextPage:"Go to next page",lastPage:"Go to last page",reload:"Reload current page",noRecords:"No records to display",pageCountTemplate:function(e){return"of ".concat(e.lastPage)},summaryTemplate:function(e){return"Displaying records ".concat(e.start," - ").concat(e.end," of ").concat(e.allCount)}},PanelCollapser:{Collapse:"Collapse",Expand:"Expand"},Popup:{close:"Close"},UndoRedo:{Undo:"Undo",Redo:"Redo",UndoLastAction:"Undo last action",RedoLastAction:"Redo last undone action",NoActions:"No items in the undo queue"},FieldFilterPicker:{equals:"equals",doesNotEqual:"does not equal",isEmpty:"is empty",isNotEmpty:"is not empty",contains:"contains",doesNotContain:"does not contain",startsWith:"starts with",endsWith:"ends with",isOneOf:"is one of",isNotOneOf:"is not one of",isGreaterThan:"is greater than",isLessThan:"is less than",isGreaterThanOrEqualTo:"is greater than or equal to",isLessThanOrEqualTo:"is less than or equal to",isBetween:"is between",isNotBetween:"is not between",isBefore:"is before",isAfter:"is after",isToday:"is today",isTomorrow:"is tomorrow",isYesterday:"is yesterday",isThisWeek:"is this week",isNextWeek:"is next week",isLastWeek:"is last week",isThisMonth:"is this month",isNextMonth:"is next month",isLastMonth:"is last month",isThisYear:"is this year",isNextYear:"is next year",isLastYear:"is last year",isYearToDate:"is year to date",isTrue:"is true",isFalse:"is false",selectAProperty:"Select a property",selectAnOperator:"Select an operator",caseSensitive:"Case-sensitive",and:"and",dateFormat:"D/M/YY",selectOneOrMoreValues:"Select one or more values",enterAValue:"Enter a value",enterANumber:"Enter a number",selectADate:"Select a date"},FieldFilterPickerGroup:{addFilter:"Add filter"},DateHelper:{locale:"en-US",weekStartDay:0,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"millisecond",plural:"ms",abbrev:"ms"},{single:"second",plural:"seconds",abbrev:"s"},{single:"minute",plural:"minutes",abbrev:"min"},{single:"hour",plural:"hours",abbrev:"h"},{single:"day",plural:"days",abbrev:"d"},{single:"week",plural:"weeks",abbrev:"w"},{single:"month",plural:"months",abbrev:"mon"},{single:"quarter",plural:"quarters",abbrev:"q"},{single:"year",plural:"years",abbrev:"yr"},{single:"decade",plural:"decades",abbrev:"dec"}],unitAbbreviations:[["mil"],["s","sec"],["m","min"],["h","hr"],["d"],["w","wk"],["mo","mon","mnt"],["q","quar","qrt"],["y","yr"],["dec"]],parsers:{L:"MM/DD/YYYY",LT:"HH:mm A"},ordinalSuffix:function(e){var t="th";["11","12","13"].find((function(t){return e.endsWith(t)}))||(t={1:"st",2:"nd",3:"rd"}[e[e.length-1]]||"th");return e+t}},TrialButton:{downloadTrial:"Download trial"},TrialPanel:{title:"Please complete fields",name:"Name",email:"Email",company:"Company",product:"Product",cancel:"Cancel",submit:"Submit",downloadStarting:"Download starting, please wait..."}};t.default=o},"../Core/lib/Core/localization/LocaleHelper.js":function(e,t,n){"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t),n.d(t,"default",(function(){return s}));var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"mergeLocales",value:function(){for(var e={},t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return n.forEach((function(t){Object.keys(t).forEach((function(n){"object"===i(t[n])?e[n]=r(r({},e[n]),t[n]):e[n]=t[n]}))})),e}},{key:"trimLocale",value:function(e,t){var n=function(t,n){e[t]&&(n?e[t][n]&&delete e[t][n]:delete e[t])};Object.keys(t).forEach((function(e){Object.keys(t[e]).length>0?Object.keys(t[e]).forEach((function(t){return n(e,t)})):n(e)}))}},{key:"publishLocale",value:function(e,t){var n=globalThis.bryntum=globalThis.bryntum||{},o=n.locales=n.locales||{};o[e]=o[e]?this.mergeLocales(o[e],t):t}}],(n=null)&&l(t.prototype,n),o&&l(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()},"../Grid/lib/Grid/localization/En.js":function(e,t,n){"use strict";n.r(t);var o=n("../Core/lib/Core/localization/En.js"),r=n("../Core/lib/Core/localization/LocaleHelper.js"),a=new String,i=r.default.mergeLocales(o.default,{ColumnPicker:{column:"Column",columnsMenu:"Columns",hideColumn:"Hide column",hideColumnShort:"Hide",newColumns:"New columns"},Filter:{applyFilter:"Apply filter",filter:"Filter",editFilter:"Edit filter",on:"On",before:"Before",after:"After",equals:"Equals",lessThan:"Less than",moreThan:"More than",removeFilter:"Remove filter",disableFilter:"Disable filter"},FilterBar:{enableFilterBar:"Show filter bar",disableFilterBar:"Hide filter bar"},Group:{group:"Group",groupAscending:"Group ascending",groupDescending:"Group descending",groupAscendingShort:"Ascending",groupDescendingShort:"Descending",stopGrouping:"Stop grouping",stopGroupingShort:"Stop"},HeaderMenu:{moveBefore:function(e){return'Move before "'.concat(e,'"')},moveAfter:function(e){return'Move after "'.concat(e,'"')},collapseColumn:"Collapse column",expandColumn:"Expand column"},ColumnRename:{rename:"Rename"},MergeCells:{mergeCells:"Merge cells",menuTooltip:"Merge cells with same value when sorted by this column"},Search:{searchForValue:"Search for value"},Sort:{sort:"Sort",sortAscending:"Sort ascending",sortDescending:"Sort descending",multiSort:"Multi sort",removeSorter:"Remove sorter",addSortAscending:"Add ascending sorter",addSortDescending:"Add descending sorter",toggleSortAscending:"Change to ascending",toggleSortDescending:"Change to descending",sortAscendingShort:"Ascending",sortDescendingShort:"Descending",removeSorterShort:"Remove",addSortAscendingShort:"+ Ascending",addSortDescendingShort:"+ Descending"},Column:{columnLabel:function(e){return"".concat(e.text?"".concat(e.text," column. "):"","SPACE for context menu").concat(e.sortable?", ENTER to sort":"")},cellLabel:a},Checkbox:{toggleRowSelect:"Toggle row selection",toggleSelection:"Toggle selection of entire dataset"},RatingColumn:{cellLabel:function(e){var t;return"".concat(e.text?e.text:""," ").concat(null!==(t=e.location)&&void 0!==t&&t.record?"rating : ".concat(e.location.record[e.field]||0):"")}},GridBase:{loadFailedMessage:"Data loading failed!",syncFailedMessage:"Data synchronization failed!",unspecifiedFailure:"Unspecified failure",networkFailure:"Network error",parseFailure:"Failed to parse server response",serverResponse:"Server response:",noRows:"No records to display",moveColumnLeft:"Move to left section",moveColumnRight:"Move to right section",moveColumnTo:function(e){return"Move column to ".concat(e)}},CellMenu:{removeRow:"Delete"},RowCopyPaste:{copyRecord:"Copy",cutRecord:"Cut",pasteRecord:"Paste"},PdfExport:{"Waiting for response from server":"Waiting for response from server...","Export failed":"Export failed","Server error":"Server error","Generating pages":"Generating pages...","Click to abort":"Abort"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Export settings",export:"Export",exporterType:"Control pagination",cancel:"Cancel",fileFormat:"File format",rows:"Rows",alignRows:"Align rows",columns:"Columns",paperFormat:"Paper format",orientation:"Orientation",repeatHeader:"Repeat header"},ExportRowsCombo:{all:"All rows",visible:"Visible rows"},ExportOrientationCombo:{portrait:"Portrait",landscape:"Landscape"},SinglePageExporter:{singlepage:"Single page"},MultiPageExporter:{multipage:"Multiple pages",exportingPage:function(e){var t=e.currentPage,n=e.totalPages;return"Exporting page ".concat(t,"/").concat(n)}},MultiPageVerticalExporter:{multipagevertical:"Multiple pages (vertical)",exportingPage:function(e){var t=e.currentPage,n=e.totalPages;return"Exporting page ".concat(t,"/").concat(n)}},RowExpander:{loading:"Loading"}});t.default=i},"./lib/Scheduler/localization/En.js":function(e,t,n){"use strict";n.r(t);var o=n("../Grid/lib/Grid/localization/En.js"),r=n("../Core/lib/Core/localization/LocaleHelper.js").default.mergeLocales(o.default,{Object:{newEvent:"New event"},ResourceInfoColumn:{eventCountText:function(e){return e+" event"+(1!==e?"s":"")}},Dependencies:{from:"From",to:"To",valid:"Valid",invalid:"Invalid"},DependencyType:{SS:"SS",SF:"SF",FS:"FS",FF:"FF",StartToStart:"Start-to-Start",StartToEnd:"Start-to-Finish",EndToStart:"Finish-to-Start",EndToEnd:"Finish-to-Finish",short:["SS","SF","FS","FF"],long:["Start-to-Start","Start-to-Finish","Finish-to-Start","Finish-to-Finish"]},DependencyEdit:{From:"From",To:"To",Type:"Type",Lag:"Lag","Edit dependency":"Edit dependency",Save:"Save",Delete:"Delete",Cancel:"Cancel",StartToStart:"Start to Start",StartToEnd:"Start to End",EndToStart:"End to Start",EndToEnd:"End to End"},EventEdit:{Name:"Name",Resource:"Resource",Start:"Start",End:"End",Save:"Save",Delete:"Delete",Cancel:"Cancel","Edit event":"Edit event",Repeat:"Repeat"},EventDrag:{eventOverlapsExisting:"Event overlaps existing event for this resource",noDropOutsideTimeline:"Event may not be dropped completely outside the timeline"},SchedulerBase:{"Add event":"Add event","Delete event":"Delete event","Unassign event":"Unassign event"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom",activeDateRange:"Date range",startText:"Start date",endText:"End date",todayText:"Today"},EventCopyPaste:{copyEvent:"Copy event",cutEvent:"Cut event",pasteEvent:"Paste event"},EventFilter:{filterEvents:"Filter tasks",byName:"By name"},TimeRanges:{showCurrentTimeLine:"Show current timeline"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Seconds"},minuteAndHour:{topDateFormat:"ddd MM/DD, hA",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd MM/DD",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Day"},day:{name:"Day/hours"},week:{name:"Week/hours"},dayAndWeek:{displayDateFormat:"ll LST",name:"Week/days"},dayAndMonth:{name:"Month"},weekAndDay:{displayDateFormat:"ll LST",name:"Week"},weekAndMonth:{name:"Weeks"},weekAndDayLetter:{name:"Weeks/weekdays"},weekDateAndMonth:{name:"Months/weeks"},monthAndYear:{name:"Months"},year:{name:"Years"},manyYears:{name:"Multiple years"}},RecurrenceConfirmationPopup:{"delete-title":"You are deleting an event","delete-all-message":"Do you want to delete all occurrences of this event?","delete-further-message":"Do you want to delete this and all future occurrences of this event, or only the selected occurrence?","delete-further-btn-text":"Delete All Future Events","delete-only-this-btn-text":"Delete Only This Event","update-title":"You are changing a repeating event","update-all-message":"Do you want to change all occurrences of this event?","update-further-message":"Do you want to change only this occurrence of the event, or this and all future occurrences?","update-further-btn-text":"All Future Events","update-only-this-btn-text":"Only This Event",Yes:"Yes",Cancel:"Cancel",width:600},RecurrenceLegend:{" and ":" and ",Daily:"Daily","Weekly on {1}":function(e){var t=e.days;return"Weekly on ".concat(t)},"Monthly on {1}":function(e){var t=e.days;return"Monthly on ".concat(t)},"Yearly on {1} of {2}":function(e){var t=e.days,n=e.months;return"Yearly on ".concat(t," of ").concat(n)},"Every {0} days":function(e){var t=e.interval;return"Every ".concat(t," days")},"Every {0} weeks on {1}":function(e){var t=e.interval,n=e.days;return"Every ".concat(t," weeks on ").concat(n)},"Every {0} months on {1}":function(e){var t=e.interval,n=e.days;return"Every ".concat(t," months on ").concat(n)},"Every {0} years on {1} of {2}":function(e){var t=e.interval,n=e.days,o=e.months;return"Every ".concat(t," years on ").concat(n," of ").concat(o)},position1:"the first",position2:"the second",position3:"the third",position4:"the fourth",position5:"the fifth","position-1":"the last",day:"day",weekday:"weekday","weekend day":"weekend day",daysFormat:function(e){var t=e.position,n=e.days;return"".concat(t," ").concat(n)}},RecurrenceEditor:{"Repeat event":"Repeat event",Cancel:"Cancel",Save:"Save",Frequency:"Frequency",Every:"Every",DAILYintervalUnit:"day(s)",WEEKLYintervalUnit:"week(s)",MONTHLYintervalUnit:"month(s)",YEARLYintervalUnit:"year(s)",Each:"Each","On the":"On the","End repeat":"End repeat","time(s)":"time(s)"},RecurrenceDaysCombo:{day:"day",weekday:"weekday","weekend day":"weekend day"},RecurrencePositionsCombo:{position1:"first",position2:"second",position3:"third",position4:"fourth",position5:"fifth","position-1":"last"},RecurrenceStopConditionCombo:{Never:"Never",After:"After","On date":"On date"},RecurrenceFrequencyCombo:{Daily:"Daily",Weekly:"Weekly",Monthly:"Monthly",Yearly:"Yearly"},RecurrenceCombo:{None:"None",Custom:"Custom..."},Summary:{"Summary for":function(e){return"Summary for ".concat(e)}},ScheduleRangeCombo:{completeview:"Complete schedule",currentview:"Visible schedule",daterange:"Date range",completedata:"Complete schedule (for all events)"},SchedulerExportDialog:{"Schedule range":"Schedule range","Export from":"From","Export to":"To"},ExcelExporter:{"No resource assigned":"No resource assigned"},CrudManagerView:{serverResponseLabel:"Server response:"},DurationColumn:{Duration:"Duration"}});t.default=r}}).default}));