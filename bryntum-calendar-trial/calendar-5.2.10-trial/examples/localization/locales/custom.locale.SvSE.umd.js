!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var t in r)("object"==typeof exports?exports:e)[t]=r[t]}}(window,(function(){return function(e){var n={};function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)r.d(t,a,function(n){return e[n]}.bind(null,a));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./examples/localization/locales/custom.locale.SvSE.js")}({"../Core/lib/Core/localization/LocaleHelper.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocaleHelper; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\n/**\n * @module Core/localization/LocaleHelper\n */\n/**\n * Provides locale management methods.\n */\nvar LocaleHelper = /*#__PURE__*/function () {\n  function LocaleHelper() {\n    _classCallCheck(this, LocaleHelper);\n  }\n  _createClass(LocaleHelper, null, [{\n    key: "mergeLocales",\n    value:\n    /**\n     * Merges all properties of provided locales into new locale.\n     * Locales are merged in order they provided and locales which go later replace same properties of previous locales.\n     * @param {...Object} locales Locales to merge\n     * @returns {Object} Merged locale\n     */\n    function mergeLocales() {\n      var result = {};\n      for (var _len = arguments.length, locales = new Array(_len), _key = 0; _key < _len; _key++) {\n        locales[_key] = arguments[_key];\n      }\n      locales.forEach(function (locale) {\n        Object.keys(locale).forEach(function (key) {\n          if (_typeof(locale[key]) === \'object\') {\n            result[key] = _objectSpread(_objectSpread({}, result[key]), locale[key]);\n          } else {\n            result[key] = locale[key];\n          }\n        });\n      });\n      return result;\n    }\n\n    /**\n     * Removes all properties from `locale` that are present in the provided `toTrim`.\n     * @param {Object} locale Locale to process\n     * @param {Object} toTrim Object enumerating properties that should be removed\n     * @param {boolean} [silent=true] When `true` ignores missing properties that should be removed (default).\n     * When `false` throws exceptions in such cases.\n     */\n  }, {\n    key: "trimLocale",\n    value: function trimLocale(locale, toTrim) {\n      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      var remove = function remove(key, subKey) {\n        if (locale[key]) {\n          if (subKey) {\n            if (locale[key][subKey]) {\n              delete locale[key][subKey];\n            }\n          } else {\n            delete locale[key];\n          }\n        }\n      };\n      Object.keys(toTrim).forEach(function (key) {\n        if (Object.keys(toTrim[key]).length > 0) {\n          Object.keys(toTrim[key]).forEach(function (subKey) {\n            return remove(key, subKey);\n          });\n        } else {\n          remove(key);\n        }\n      });\n    }\n\n    /**\n     * Put the locale under `globalThis.bryntum.locales` to make sure it can be discovered automatically\n     * @param {String} localeName Locale name\n     * @param {Object} config Locale config\n     */\n  }, {\n    key: "publishLocale",\n    value: function publishLocale(localeName, config) {\n      var bryntum = globalThis.bryntum = globalThis.bryntum || {},\n        locales = bryntum.locales = bryntum.locales || {};\n      // Avoid registering locales twice\n      locales[localeName] = !locales[localeName] ? config : this.mergeLocales(locales[localeName], config);\n    }\n  }]);\n  return LocaleHelper;\n}();\n\n\n//# sourceURL=webpack:///../Core/lib/Core/localization/LocaleHelper.js?')},"../Core/lib/Core/localization/SvSE.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar localeName = 'SvSE',\n  localeDesc = 'Svenska',\n  locale = {\n    localeName: localeName,\n    localeDesc: localeDesc,\n    Object: {\n      Yes: 'Ja',\n      No: 'Nej',\n      Cancel: 'Avbryt',\n      Ok: 'OK',\n      Week: 'Vecka' // used in DateHelper and Calendar views\n    },\n\n    //region Widgets\n\n    Combo: {\n      noResults: 'Inga resultat',\n      recordNotCommitted: 'Post kunde inte läggas till',\n      addNewValue: function addNewValue(value) {\n        return \"L\\xE4gg till \".concat(value);\n      }\n    },\n    FilePicker: {\n      file: 'Fil'\n    },\n    Field: {\n      // native input ValidityState statuses\n      badInput: 'Ogiltigt värde',\n      patternMismatch: 'Värdet ska matcha ett specifikt mönster',\n      rangeOverflow: function rangeOverflow(value) {\n        return \"V\\xE4rdet m\\xE5ste vara mindre \\xE4n eller lika med \".concat(value.max);\n      },\n      rangeUnderflow: function rangeUnderflow(value) {\n        return \"V\\xE4rdet m\\xE5ste vara st\\xF6rre \\xE4n eller lika med \".concat(value.min);\n      },\n      stepMismatch: 'Värdet bör passa steget',\n      tooLong: 'Värdet för långt',\n      tooShort: 'Värdet för kort',\n      typeMismatch: 'Värdet är inte i förväntat format',\n      valueMissing: 'Detta fält är obligatoriskt',\n      invalidValue: 'Ogiltigt värde',\n      minimumValueViolation: 'För lågt värde',\n      maximumValueViolation: 'För högt värde',\n      fieldRequired: 'Detta fält är obligatoriskt',\n      validateFilter: 'Värdet måste väljas från listan'\n    },\n    DateField: {\n      invalidDate: 'Ogiltigt datum'\n    },\n    DatePicker: {\n      gotoPrevYear: 'Gå till föregående år',\n      gotoPrevMonth: 'Gå till föregående månad',\n      gotoNextMonth: 'Gå till nästa månad',\n      gotoNextYear: 'Gå till nästa år'\n    },\n    NumberFormat: {\n      locale: 'sv-SE',\n      currency: 'SEK'\n    },\n    DurationField: {\n      invalidUnit: 'Ogiltig enhet'\n    },\n    TimeField: {\n      invalidTime: 'Ogiltig tid'\n    },\n    TimePicker: {\n      hour: 'Timme',\n      minute: 'Minut',\n      second: 'sekund'\n    },\n    List: {\n      loading: 'Laddar...'\n    },\n    // needed here due to LoadMaskable\n    GridBase: {\n      loadMask: 'Laddar...',\n      syncMask: 'Sparar ändringar, vänligen vänta...'\n    },\n    PagingToolbar: {\n      firstPage: 'Gå till första sidan',\n      prevPage: 'Gå till föregående sida',\n      page: 'Sida',\n      nextPage: 'Gå till nästa sida',\n      lastPage: 'Gå till sista sidan',\n      reload: 'Ladda om den aktuella sidan',\n      noRecords: 'Inga rader att visa',\n      pageCountTemplate: function pageCountTemplate(data) {\n        return \"av \".concat(data.lastPage);\n      },\n      summaryTemplate: function summaryTemplate(data) {\n        return \"Visar poster \".concat(data.start, \" - \").concat(data.end, \" av \").concat(data.allCount);\n      }\n    },\n    PanelCollapser: {\n      Collapse: 'Fäll ihop',\n      Expand: 'Expandera'\n    },\n    Popup: {\n      close: 'Stäng'\n    },\n    UndoRedo: {\n      Undo: 'Ångra',\n      Redo: 'Gör om',\n      UndoLastAction: 'Ångra senaste åtgärden',\n      RedoLastAction: 'Gör om senast ångrade åtgärden',\n      NoActions: 'Inga åtgärder inspelade'\n    },\n    FieldFilterPicker: {\n      equals: 'är lika med',\n      doesNotEqual: 'är inte lika med',\n      isEmpty: 'är tom',\n      isNotEmpty: 'är inte tom',\n      contains: 'innehåller',\n      doesNotContain: 'innehåller inte',\n      startsWith: 'börjar med',\n      endsWith: 'slutar med',\n      isOneOf: 'är en av',\n      isNotOneOf: 'är inte en av',\n      isGreaterThan: 'är större än',\n      isLessThan: 'är mindre än',\n      isGreaterThanOrEqualTo: 'är större än eller lika med',\n      isLessThanOrEqualTo: 'är mindre än eller lika med',\n      isBetween: 'är mellan',\n      isNotBetween: 'är inte mellan',\n      isBefore: 'är före',\n      isAfter: 'är efter',\n      isToday: 'är idag',\n      isTomorrow: 'är imorgon',\n      isYesterday: 'är igår',\n      isThisWeek: 'är denna vecka',\n      isNextWeek: 'är nästa vecka',\n      isLastWeek: 'är föregående vecka',\n      isThisMonth: 'är denna månad',\n      isNextMonth: 'är nästa månad',\n      isLastMonth: 'är föregående månad',\n      isThisYear: 'är i år',\n      isNextYear: 'är nästa år',\n      isLastYear: 'är föregående år',\n      isYearToDate: 'är i år fram till idag',\n      isTrue: 'är sant',\n      isFalse: 'är falskt',\n      selectAProperty: 'Välj ett fält',\n      selectAnOperator: 'Välj en jämförelseoperator',\n      caseSensitive: 'Skiftlägeskänslig',\n      and: 'och',\n      dateFormat: 'YYYY-MM-DD',\n      selectOneOrMoreValues: 'Välj ett eller flera värden',\n      enterAValue: 'Ange ett värde',\n      enterANumber: 'Ange ett nummer',\n      selectADate: 'Välj ett datum'\n    },\n    FieldFilterPickerGroup: {\n      addFilter: 'Lägg till filter'\n    },\n    //endregion\n\n    //region Others\n\n    DateHelper: {\n      locale: 'sv-SE',\n      weekStartDay: 1,\n      // Non-working days which match weekends by default, but can be changed according to schedule needs\n      nonWorkingDays: {\n        0: true,\n        6: true\n      },\n      // Days considered as weekends by the selected country, but could be working days in the schedule\n      weekends: {\n        0: true,\n        6: true\n      },\n      unitNames: [{\n        single: 'millisekund',\n        plural: 'millisekunder',\n        abbrev: 'ms'\n      }, {\n        single: 'sekund',\n        plural: 'sekunder',\n        abbrev: 's'\n      }, {\n        single: 'minut',\n        plural: 'minuter',\n        abbrev: 'min'\n      }, {\n        single: 'timme',\n        plural: 'timmar',\n        abbrev: 'tim'\n      }, {\n        single: 'dag',\n        plural: 'dagar',\n        abbrev: 'd'\n      }, {\n        single: 'vecka',\n        plural: 'vecka',\n        abbrev: 'v'\n      }, {\n        single: 'månad',\n        plural: 'månader',\n        abbrev: 'mån'\n      }, {\n        single: 'kvartal',\n        plural: 'kvartal',\n        abbrev: 'kv'\n      }, {\n        single: 'år',\n        plural: 'år',\n        abbrev: 'år'\n      }, {\n        single: 'årtionde',\n        plural: 'årtionden',\n        abbrev: 'årtionden'\n      }],\n      // Used to build a RegExp for parsing time units.\n      // The full names from above are added into the generated Regexp.\n      // So you may type \"2 v\" or \"2 ve\" or \"2 vecka\" or \"2 vecka\" into a DurationField.\n      // When generating its display value though, it uses the full localized names above.\n      unitAbbreviations: [['ms', 'mil'], ['s', 'sek'], ['m', 'min'], ['t', 'tim', 'h'], ['d'], ['v', 've'], ['må', 'mån'], ['kv', 'kva'], [], []],\n      ordinalSuffix: function ordinalSuffix(number) {\n        var lastDigit = number[number.length - 1];\n        return number + (number !== '11' && number !== '12' && (lastDigit === '1' || lastDigit === '2') ? 'a' : 'e');\n      },\n      parsers: {\n        L: 'YYYY-MM-DD',\n        LT: 'HH:mm',\n        LTS: 'HH:mm:ss'\n      }\n    }\n\n    //endregion\n  };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Core/lib/Core/localization/SvSE.js?")},"../Grid/lib/Grid/localization/SvSE.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Core_localization_SvSE_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core/localization/SvSE.js */ \"../Core/lib/Core/localization/SvSE.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar\n  // This will be a truthy empty string so it can be used as a localized result.\n  emptyString = new String(),\n  // eslint-disable-line no-new-wrappers\n  locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Core_localization_SvSE_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    //region Features\n\n    ColumnPicker: {\n      column: 'Kolumn',\n      columnsMenu: 'Kolumner',\n      hideColumn: 'Dölj kolumn',\n      hideColumnShort: 'Dölj',\n      newColumns: 'Nya kolumner'\n    },\n    Filter: {\n      applyFilter: 'Använd filter',\n      editFilter: 'Redigera filter',\n      filter: 'Filter',\n      on: 'På',\n      before: 'Före',\n      after: 'Efter',\n      equals: 'Lika med',\n      lessThan: 'Mindre än',\n      moreThan: 'Större än',\n      removeFilter: 'Ta bort filter',\n      disableFilter: 'Inaktivera filter'\n    },\n    FilterBar: {\n      enableFilterBar: 'Visa filterrad',\n      disableFilterBar: 'Dölj filterrad'\n    },\n    Group: {\n      group: 'Gruppera',\n      groupAscending: 'Gruppera stigande',\n      groupDescending: 'Gruppera fallande',\n      groupAscendingShort: 'Stigande',\n      groupDescendingShort: 'Fallande',\n      stopGrouping: 'Sluta gruppera',\n      stopGroupingShort: 'Sluta'\n    },\n    MergeCells: {\n      mergeCells: 'Slå ihop celler',\n      menuTooltip: 'Slå ihop celler när kolumnen är sorterad'\n    },\n    HeaderMenu: {\n      moveBefore: function moveBefore(text) {\n        return \"Flytta f\\xF6re \\\"\".concat(text, \"\\\"\");\n      },\n      moveAfter: function moveAfter(text) {\n        return \"Flytta efter \\\"\".concat(text, \"\\\"\");\n      },\n      collapseColumn: 'Expandera kolumn',\n      expandColumn: 'Fäll ihop kolumn'\n    },\n    ColumnRename: {\n      rename: 'Byt namn'\n    },\n    Search: {\n      searchForValue: 'Sök efter värde'\n    },\n    Sort: {\n      sort: 'Sortera',\n      sortAscending: 'Sortera stigande',\n      sortDescending: 'Sortera fallande',\n      multiSort: 'Multisortering',\n      addSortAscending: 'Lägg till stigande',\n      addSortDescending: 'Lägg till fallande',\n      toggleSortAscending: 'Ändra till stigande',\n      toggleSortDescending: 'Ändra till fallande',\n      removeSorter: 'Ta bort sorterare',\n      sortAscendingShort: 'Stigande',\n      sortDescendingShort: 'Fallande',\n      removeSorterShort: 'Ta bort',\n      addSortAscendingShort: '+ Stigande',\n      addSortDescendingShort: '+ Fallande'\n    },\n    //endregion\n\n    //region Grid\n\n    Column: {\n      columnLabel: function columnLabel(column) {\n        return \"\".concat(column.text ? \"\".concat(column.text, \" kolumn. \") : '', \"SPACE f\\xF6r snabbmenyn\").concat(column.sortable ? ', ENTER för att sortera' : '');\n      },\n      cellLabel: emptyString\n    },\n    Checkbox: {\n      toggleRowSelect: 'Växla radval',\n      toggleSelection: 'Växla val av hela datamängden'\n    },\n    RatingColumn: {\n      cellLabel: function cellLabel(column) {\n        var _column$location;\n        return \"\".concat(column.text ? column.text : '', \" \").concat((_column$location = column.location) !== null && _column$location !== void 0 && _column$location.record ? \"rating : \".concat(column.location.record[column.field], \" || 0\") : '');\n      }\n    },\n    GridBase: {\n      loadFailedMessage: 'Ett fel har uppstått, vänligen försök igen!',\n      syncFailedMessage: 'Datasynkronisering misslyckades!',\n      unspecifiedFailure: 'Ospecificerat fel',\n      networkFailure: 'Nätverksfel',\n      parseFailure: 'Det gick inte att bearbeta serversvaret',\n      serverResponse: 'Serversvar:',\n      noRows: 'Inga rader att visa',\n      moveColumnLeft: 'Flytta till vänstra sektionen',\n      moveColumnRight: 'Flytta till högra sektionen',\n      moveColumnTo: function moveColumnTo(region) {\n        return \"Flytta kolumn till \".concat(region);\n      }\n    },\n    CellMenu: {\n      removeRow: 'Ta bort'\n    },\n    RowCopyPaste: {\n      copyRecord: 'Kopiera',\n      cutRecord: 'Klipp',\n      pasteRecord: 'Klistra'\n    },\n    //endregion\n\n    //region Export\n\n    PdfExport: {\n      'Waiting for response from server': 'Väntar på svar från servern...',\n      'Export failed': 'Export misslyckades',\n      'Server error': 'Serverfel',\n      'Generating pages': 'Genererar sidor...',\n      'Click to abort': 'Avbryt'\n    },\n    ExportDialog: {\n      width: '40em',\n      labelWidth: '13em',\n      exportSettings: 'Exportera inställningar',\n      \"export\": 'Exportera',\n      exporterType: 'Styra sidbrytningarna',\n      cancel: 'Avbryt',\n      fileFormat: 'Filformat',\n      rows: 'Кader',\n      alignRows: 'Anpassa raderna',\n      columns: 'Kolumner',\n      paperFormat: 'Pappersformat',\n      orientation: 'Orientering',\n      repeatHeader: 'Upprepa rubriken'\n    },\n    ExportRowsCombo: {\n      all: 'Alla rader',\n      visible: 'Synliga rader'\n    },\n    ExportOrientationCombo: {\n      portrait: 'Stående',\n      landscape: 'Liggande'\n    },\n    SinglePageExporter: {\n      singlepage: 'En sida'\n    },\n    MultiPageExporter: {\n      multipage: 'Flera sidor',\n      exportingPage: function exportingPage(_ref) {\n        var currentPage = _ref.currentPage,\n          totalPages = _ref.totalPages;\n        return \"Exporterar sidan \".concat(currentPage, \"/\").concat(totalPages);\n      }\n    },\n    MultiPageVerticalExporter: {\n      multipagevertical: 'Flera sidor (lodrätt)',\n      exportingPage: function exportingPage(_ref2) {\n        var currentPage = _ref2.currentPage,\n          totalPages = _ref2.totalPages;\n        return \"Exporterar sidan \".concat(currentPage, \"/\").concat(totalPages);\n      }\n    },\n    RowExpander: {\n      loading: 'Laddar',\n      expand: 'Expandera',\n      collapse: 'Fäll ihop'\n    }\n\n    //endregion\n  });\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Grid/lib/Grid/localization/SvSE.js?")},"../Scheduler/lib/Scheduler/localization/SvSE.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Grid_localization_SvSE_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Grid/localization/SvSE.js */ \"../Grid/lib/Grid/localization/SvSE.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Grid_localization_SvSE_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  Object: {\n    newEvent: 'Ny händelse'\n  },\n  ResourceInfoColumn: {\n    eventCountText: function eventCountText(data) {\n      return data + ' händelse' + (data !== 1 ? 'r' : '');\n    }\n  },\n  Dependencies: {\n    from: 'Från',\n    to: 'Till',\n    valid: 'Giltig',\n    invalid: 'Ogiltig'\n  },\n  DependencyType: {\n    SS: 'SS',\n    SF: 'SA',\n    FS: 'AS',\n    FF: 'AA',\n    StartToStart: 'Start-Till-Start',\n    StartToEnd: 'Start-Till-Avslut',\n    EndToStart: 'Avslut-Till-Start',\n    EndToEnd: 'Avslut-Till-Avslut',\n    \"short\": ['SS', 'SA', 'AS', 'AA'],\n    \"long\": ['Start-Till-Start', 'Start-Till-Avslut', 'Avslut-Till-Start', 'Avslut-Till-Avslut']\n  },\n  EventEdit: {\n    Name: 'Namn',\n    Resource: 'Resurs',\n    Start: 'Start',\n    End: 'Slut',\n    Save: 'Spara',\n    Delete: 'Ta bort',\n    Cancel: 'Avbryt',\n    'Edit event': 'Redigera bokning',\n    Repeat: 'Upprepa'\n  },\n  DependencyEdit: {\n    From: 'Från',\n    To: 'Till',\n    Type: 'Typ',\n    Lag: 'Fördröjning',\n    'Edit dependency': 'Ändra beroende',\n    Save: 'Spara',\n    Delete: 'Ta bort',\n    Cancel: 'Avbryt',\n    StartToStart: 'Start till Start',\n    StartToEnd: 'Start till Slut',\n    EndToStart: 'Slut till Start',\n    EndToEnd: 'Slut till Slut'\n  },\n  EventDrag: {\n    eventOverlapsExisting: 'Överlappar befintlig händelse för den här resursen',\n    noDropOutsideTimeline: 'Händelsen kan inte släppas utanför tidsaxeln'\n  },\n  SchedulerBase: {\n    'Add event': 'Lägg till bokning',\n    'Delete event': 'Ta bort bokning',\n    'Unassign event': 'Ta bort resurskoppling'\n  },\n  TimeAxisHeaderMenu: {\n    pickZoomLevel: 'Välj zoomnivå',\n    activeDateRange: 'Aktivt datumintervall',\n    startText: 'Start datum',\n    endText: 'Slut datum',\n    todayText: 'I dag'\n  },\n  EventCopyPaste: {\n    copyEvent: 'Kopiera bokning',\n    cutEvent: 'Klipp ut bokning',\n    pasteEvent: 'Klistra in bokning'\n  },\n  EventFilter: {\n    filterEvents: 'Filtrera händelser',\n    byName: 'Med namn'\n  },\n  TimeRanges: {\n    showCurrentTimeLine: 'Visa aktuell tidslinje'\n  },\n  PresetManager: {\n    secondAndMinute: {\n      name: 'Sekunder'\n    },\n    minuteAndHour: {\n      topDateFormat: 'ddd, DD/MM, h:mm',\n      name: 'Minuter'\n    },\n    hourAndDay: {\n      topDateFormat: 'ddd DD/MM',\n      name: 'Dag'\n    },\n    day: {\n      name: 'Dag'\n    },\n    week: {\n      name: 'Vecka/timmar'\n    },\n    dayAndWeek: {\n      name: 'Vecka/dagar'\n    },\n    dayAndMonth: {\n      name: 'Månad'\n    },\n    weekAndDay: {\n      displayDateFormat: 'HH:mm',\n      name: 'Vecka'\n    },\n    weekAndMonth: {\n      name: 'Veckor'\n    },\n    weekAndDayLetter: {\n      name: 'Veckor/veckodagar'\n    },\n    weekDateAndMonth: {\n      name: 'Månader/veckor'\n    },\n    monthAndYear: {\n      name: 'Månader'\n    },\n    year: {\n      name: 'År'\n    },\n    manyYears: {\n      name: 'Flera år'\n    }\n  },\n  RecurrenceConfirmationPopup: {\n    'delete-title': 'Borttagning av bokning',\n    'delete-all-message': 'Vill du ta bort alla instanser av denna bokning?',\n    'delete-further-message': 'Vill du ta bort denna och alla framtida instanser av denna bokning, eller bara denna?',\n    'delete-further-btn-text': 'Ta bort alla framtida',\n    'delete-only-this-btn-text': 'Ta bort endast denna',\n    'update-title': 'Redigering av upprepad bokning',\n    'update-all-message': 'Vill du ändra alla instanser av denna bokning?',\n    'update-further-message': 'Vill du ändra på endast denna instans, eller denna och alla framtida?',\n    'update-further-btn-text': 'Alla framtida',\n    'update-only-this-btn-text': 'Endast denna',\n    Yes: 'Ja',\n    Cancel: 'Avbryt',\n    width: 500\n  },\n  RecurrenceLegend: {\n    ' and ': ' och ',\n    // frequency patterns\n    Daily: 'Daglig',\n    'Weekly on {1}': function WeeklyOn1(_ref) {\n      var days = _ref.days;\n      return \"Veckovis p\\xE5 \".concat(days);\n    },\n    'Monthly on {1}': function MonthlyOn1(_ref2) {\n      var days = _ref2.days;\n      return \"M\\xE5ntaligen den \".concat(days);\n    },\n    'Yearly on {1} of {2}': function YearlyOn1Of2(_ref3) {\n      var days = _ref3.days,\n        months = _ref3.months;\n      return \"\\xC5rligen \".concat(days, \" \").concat(months);\n    },\n    'Every {0} days': function Every0Days(_ref4) {\n      var interval = _ref4.interval;\n      return \"Var \".concat(interval, \" dag\");\n    },\n    'Every {0} weeks on {1}': function Every0WeeksOn1(_ref5) {\n      var interval = _ref5.interval,\n        days = _ref5.days;\n      return \"Var \".concat(interval, \" vecka p\\xE5 \").concat(days);\n    },\n    'Every {0} months on {1}': function Every0MonthsOn1(_ref6) {\n      var interval = _ref6.interval,\n        days = _ref6.days;\n      return \"Var \".concat(interval, \" m\\xE5nad \").concat(days);\n    },\n    'Every {0} years on {1} of {2}': function Every0YearsOn1Of2(_ref7) {\n      var interval = _ref7.interval,\n        days = _ref7.days,\n        months = _ref7.months;\n      return \"Var \".concat(interval, \" \\xE5r p\\xE5 \").concat(days, \" av \").concat(months);\n    },\n    // day position translations\n    position1: 'den första',\n    position2: 'den andra',\n    position3: 'den tredje',\n    position4: 'den fjärde',\n    position5: 'den femte',\n    'position-1': 'den sista',\n    // day options\n    day: 'dagen',\n    weekday: 'veckodagen',\n    'weekend day': 'dagen i veckoslut',\n    // {0} - day position info (\"the last\"/\"the first\"/...)\n    // {1} - day info (\"Sunday\"/\"Monday\"/.../\"day\"/\"weekday\"/\"weekend day\")\n    // For example:\n    //  \"the last Sunday\"\n    //  \"the first weekday\"\n    //  \"the second weekend day\"\n    daysFormat: function daysFormat(_ref8) {\n      var position = _ref8.position,\n        days = _ref8.days;\n      return \"\".concat(position, \" \").concat(days);\n    }\n  },\n  RecurrenceEditor: {\n    'Repeat event': 'Upprepa bokning',\n    Cancel: 'Avbryt',\n    Save: 'Spara',\n    Frequency: 'Frekvens',\n    Every: 'Var',\n    DAILYintervalUnit: 'dag',\n    WEEKLYintervalUnit: 'vecka',\n    MONTHLYintervalUnit: 'månad',\n    YEARLYintervalUnit: 'år',\n    Each: 'Varje',\n    'On the': 'På den',\n    'End repeat': 'Avsluta upprepning',\n    'time(s)': 'upprepningar'\n  },\n  RecurrenceDaysCombo: {\n    day: 'dagen',\n    weekday: 'veckodagen',\n    'weekend day': 'dagen i veckoslutet'\n  },\n  RecurrencePositionsCombo: {\n    position1: 'första',\n    position2: 'andra',\n    position3: 'tredje',\n    position4: 'fjärde',\n    position5: 'femte',\n    'position-1': 'sista'\n  },\n  RecurrenceStopConditionCombo: {\n    Never: 'Aldrig',\n    After: 'Efter',\n    'On date': 'På datum'\n  },\n  RecurrenceFrequencyCombo: {\n    Daily: 'Daglig',\n    Weekly: 'Veckovis',\n    Monthly: 'Månatlig',\n    Yearly: 'Årlig'\n  },\n  RecurrenceCombo: {\n    None: 'Ingen',\n    Custom: 'Anpassad...'\n  },\n  //region Features\n\n  Summary: {\n    'Summary for': function SummaryFor(date) {\n      return \"Sammanfattning f\\xF6r \".concat(date);\n    }\n  },\n  //endregion\n\n  //region Export\n\n  ScheduleRangeCombo: {\n    completeview: 'Hela schemat',\n    currentview: 'Aktuell vy',\n    daterange: 'Datumintervall',\n    completedata: 'Hela schemat (alla aktiviteter)'\n  },\n  SchedulerExportDialog: {\n    'Schedule range': 'Tidsintervall',\n    'Export from': 'Från',\n    'Export to': 'Till'\n  },\n  ExcelExporter: {\n    'No resource assigned': 'Ingen resurs tilldelad'\n  },\n  //endregion\n\n  CrudManagerView: {\n    serverResponseLabel: 'Serversvar:'\n  },\n  DurationColumn: {\n    Duration: 'Varaktighet'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Scheduler/lib/Scheduler/localization/SvSE.js?")},"./examples/localization/locales/custom.locale.SvSE.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n/* harmony import */ var _lib_Calendar_localization_SvSE_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/Calendar/localization/SvSE.js */ \"./lib/Calendar/localization/SvSE.js\");\n\n\nvar customSvSELocale = {\n  \"extends\": 'SvSE',\n  App: {\n    'Localization demo': 'Lokaliseringsdemo'\n  },\n  Button: {\n    'Add column': 'Lägg till kolumn',\n    'Display hints': 'Visa tips',\n    'Remove column': 'Ta bort kolumn',\n    'Show all day events': 'Visa heldagshändelser',\n    'My button': function MyButton(data) {\n      return \"Min knapp \".concat(data);\n    },\n    Apply: 'Verkställ'\n  },\n  Checkbox: {\n    'Auto apply': 'Auto applicera',\n    Automatically: 'Automatiskt'\n  },\n  CodeEditor: {\n    'Code editor': 'Kodredigerare',\n    'Download code': 'Ladda ner kod'\n  },\n  Column: {\n    Name: 'Namn',\n    Company: 'Företag'\n  },\n  EventType: {\n    Meeting: 'Möte',\n    Phone: 'Telefon',\n    Lunch: 'Fika',\n    Workout: 'Träning'\n  },\n  EventColor: {\n    Meeting: 'green',\n    Phone: 'red',\n    Lunch: 'blue',\n    Workout: 'orange'\n  },\n  Combo: {\n    Theme: 'Välj tema',\n    Language: 'Välj språk',\n    Size: 'Välj storlek'\n  },\n  Shared: {\n    'Full size': 'Full storlek',\n    'Locale changed': 'Språk ändrat',\n    'Phone size': 'Telefonstorlek'\n  },\n  Tooltip: {\n    infoButton: 'Klicka för att visa information och byta tema eller språk',\n    codeButton: 'Klicka för att visa den inbyggda kodredigeraren',\n    hintCheck: 'Markera för att automatiskt visa tips när du laddar exemplet',\n    fullscreenButton: 'Fullskärm'\n  }\n};\n\n// Publishing locales to be loaded automatically (for umd bundles)\n_lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publishLocale('SvSE', _lib_Calendar_localization_SvSE_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n_lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publishLocale('SvSE-Custom', customSvSELocale);\n\n//# sourceURL=webpack:///./examples/localization/locales/custom.locale.SvSE.js?")},"./lib/Calendar/localization/SvSE.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scheduler_localization_SvSE_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Scheduler/localization/SvSE.js */ \"../Scheduler/lib/Scheduler/localization/SvSE.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Scheduler_localization_SvSE_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  EventEdit: {\n    Calendar: 'Kalender',\n    'All day': 'Heldag',\n    day: 'Dag',\n    week: 'Vecka',\n    month: 'Månad',\n    year: 'År',\n    decade: 'Årtionde'\n  },\n  EventMenu: {\n    duplicateEvent: 'Kopiera bokning',\n    copy: 'kopia'\n  },\n  Calendar: {\n    Today: 'Idag',\n    next: function next(range) {\n      return \"N\\xE4sta \".concat(range);\n    },\n    previous: function previous(range) {\n      return \"F\\xF6reg\\xE5ende \".concat(range);\n    },\n    plusMore: function plusMore(value) {\n      return \"+\".concat(value, \" more\");\n    },\n    allDay: 'Heldag',\n    endsOn: function endsOn(d) {\n      return \"Slutar \".concat(d);\n    },\n    weekOfYear: function weekOfYear(_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n        y = _ref2[0],\n        w = _ref2[1];\n      return \"Vecka \".concat(w, \", \").concat(y);\n    },\n    loadFail: 'Det gick inte att ladda kalenderdata. Kontakta din systemadministratör'\n  },\n  CalendarDrag: {\n    holdCtrlForRecurrence: 'Håll ner CTRL för upprepande händelse'\n  },\n  CalendarMixin: {\n    eventCount: function eventCount(count) {\n      return \"\".concat(count || 'Inga', \" h\\xE4ndelse\").concat(count === 1 ? '' : 'r');\n    }\n  },\n  ModeSelector: {\n    includeWeekends: 'Inkluder helger',\n    weekends: 'Helger'\n  },\n  EventTip: {\n    'Edit event': 'Redigera bokning',\n    timeFormat: 'LT'\n  },\n  AgendaView: {\n    Agenda: 'Dagordning'\n  },\n  MonthView: {\n    Month: 'Månad',\n    monthUnit: 'månad'\n  },\n  WeekView: {\n    weekUnit: 'Vecka'\n  },\n  YearView: {\n    Year: 'År',\n    yearUnit: 'år'\n  },\n  EventList: {\n    List: 'Lista',\n    Start: 'Start',\n    Finish: 'Avsluta'\n  },\n  DayView: {\n    Day: 'Dag',\n    dayUnit: 'dag',\n    daysUnit: 'dagar',\n    expandAllDayRow: 'Expandera heldagssektionen',\n    collapseAllDayRow: 'Fäll ihop heldagssektionen',\n    timeFormat: 'LT'\n  },\n  Sidebar: {\n    'Filter events': 'Filtrera händelser'\n  },\n  WeekExpander: {\n    expandTip: 'Klicka för att expandera raden',\n    collapseTip: 'Klicka för att dölja radenу'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///./lib/Calendar/localization/SvSE.js?")}})}));