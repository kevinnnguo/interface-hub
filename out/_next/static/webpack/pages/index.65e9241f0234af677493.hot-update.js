webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Overview.js":
/*!********************************!*\
  !*** ./components/Overview.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/timeline */ "./node_modules/antd/lib/timeline/index.js");
/* harmony import */ var antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/progress */ "./node_modules/antd/lib/progress/index.js");
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-vis */ "./node_modules/react-vis/es/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_PostCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/PostCard */ "./components/shared/PostCard.js");
/* harmony import */ var _shared_StatCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/StatCard */ "./components/shared/StatCard.js");
/* harmony import */ var _shared_WeatherCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/WeatherCard */ "./components/shared/WeatherCard.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles/GlobalStyles */ "./components/styles/GlobalStyles.js");

















var _jsxFileName = "D:\\WebSolutions\\interface-hub\\template\\components\\Overview.js",
    _this = undefined;









var MonthPicker = antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_10___default.a.MonthPicker;
var axes = Array.from(Array(12).keys());

var generate = function generate() {
  var arr = [];
  axes.map(function (x) {
    var y = Math.floor(Math.random() * 10) + 1;
    arr.push({
      x: x,
      y: y
    });
  });
  return arr;
};

var series = [{
  title: 'Views',
  data: generate()
}, {
  title: 'Sales',
  data: generate()
}];
var Legend = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Overview__Legend",
  componentId: "sc-1phv1b2-0"
})(["display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0;.rv-discrete-color-legend{display:inline-block;width:auto !important;}.rv-discrete-color-legend-item{padding-top:0;padding-bottom:0;}"]);
_c = Legend;

var menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "flex",
      align: "middle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["FileZipTwoTone"], {
        style: {
          fontSize: '16px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        className: "mx-3",
        children: "Archive"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "flex",
      align: "middle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["EditTwoTone"], {
        style: {
          fontSize: '16px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        className: "mx-3",
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "flex",
      align: "middle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["RestTwoTone"], {
        style: {
          fontSize: '16px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        className: "mx-3",
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default.a.Divider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "flex",
      align: "middle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["SaveTwoTone"], {
        style: {
          fontSize: '16px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        className: "mx-3",
        children: "Save as"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "flex",
      align: "middle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["PrinterTwoTone"], {
        style: {
          fontSize: '16px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        className: "mx-3",
        children: "Print"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 72,
  columnNumber: 3
}, undefined);

var data = [{
  title: 'Click through ratio',
  subtitle: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
      className: "mr-1",
      children: "15%"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["RiseOutlined"], {
      style: {
        fontSize: '20px'
      },
      className: "text-success"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 7
  }, undefined)
}, {
  title: 'Cost per thousand',
  subtitle: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
      className: "mr-1",
      children: "$320.89"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["FallOutlined"], {
      style: {
        fontSize: '20px'
      },
      className: "text-error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 7
  }, undefined)
}, {
  title: 'Bounce rate',
  subtitle: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
      className: "mr-1",
      children: "34%"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["RiseOutlined"], {
      style: {
        fontSize: '20px'
      },
      className: "text-success"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 7
  }, undefined)
}];

var TimelinePeriod = function TimelinePeriod(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_StyledSmall, {
    className: "text-muted",
    children: content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 3
  }, _this);
};

_c2 = TimelinePeriod;

var Overview = function Overview() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
      gutter: 16,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        xs: 24,
        sm: 12,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_shared_StatCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
          type: "fill",
          title: "Orders",
          value: 103,
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["BookOutlined"], {
            style: {
              fontSize: '20px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 19
          }, _this),
          color: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_19__["theme"].primaryColor,
          clickHandler: function clickHandler() {
            return antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default.a.info('Campaign stat button clicked');
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        xs: 24,
        sm: 12,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_shared_StatCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
          type: "fill",
          title: "Customers",
          value: 230,
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["PhoneOutlined"], {
            style: {
              fontSize: '20px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 19
          }, _this),
          color: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_19__["theme"].darkColor,
          clickHandler: function clickHandler() {
            return antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default.a.info('Customers stat button clicked');
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        xs: 24,
        sm: 12,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_shared_StatCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
          type: "fill",
          title: "Integrations",
          value: 323,
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["BellOutlined"], {
            style: {
              fontSize: '20px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 19
          }, _this),
          color: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_19__["theme"].warningColor,
          clickHandler: function clickHandler() {
            return antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default.a.info('Queries stat button clicked');
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        xs: 24,
        sm: 12,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_shared_StatCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
          type: "fill",
          title: "Errors",
          value: 870,
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["MessageOutlined"], {
            style: {
              fontSize: '20px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 19
          }, _this),
          color: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_19__["theme"].errorColor,
          clickHandler: function clickHandler() {
            return antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default.a.info('Opens stat button clicked');
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_card__WEBPACK_IMPORTED_MODULE_4___default.a, {
      title: "Sales analytics",
      extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        overlay: menu,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["EllipsisOutlined"], {
          style: {
            fontSize: '20px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }, _this),
      bodyStyle: {
        padding: '1rem'
      },
      className: "mb-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_no_ssr__WEBPACK_IMPORTED_MODULE_15___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Legend, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_14__["DiscreteColorLegend"], {
            width: 180,
            height: 20,
            items: series
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(MonthPicker, {
            placeholder: "Select a month"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_14__["FlexibleWidthXYPlot"], {
          xType: "ordinal",
          height: 340,
          xDistance: 100,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_14__["VerticalGridLines"], {
            style: {
              strokeWidth: 0.5
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_14__["HorizontalGridLines"], {
            style: {
              strokeWidth: 0.5
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_14__["XAxis"], {
            style: {
              strokeWidth: 0.5
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_14__["YAxis"], {
            style: {
              strokeWidth: 0.5
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_14__["VerticalBarSeries"], {
            color: "#007bff",
            data: series[0].data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_14__["VerticalBarSeries"], {
            color: "rgb(211, 232, 255)",
            data: series[1].data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
      gutter: 16,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        sm: 24,
        md: 8,
        className: "mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_card__WEBPACK_IMPORTED_MODULE_4___default.a, {
          bodyStyle: {
            padding: 0
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
            type: "flex",
            align: "middle",
            justify: "center",
            gutter: 16,
            className: "py-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_progress__WEBPACK_IMPORTED_MODULE_3___default.a, {
              type: "dashboard",
              percent: 90,
              width: 181,
              format: function format(percent) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  className: "text-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_StyledDiv, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["ApiTwoTone"], {
                      style: {
                        fontSize: '20px'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_StyledDiv2, {
                    className: "h5 mb-0",
                    children: percent
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                    className: "h6",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("small", {
                      children: "30% commission rate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default.a, {
            itemLayout: "horizontal",
            dataSource: data,
            renderItem: function renderItem(item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default.a.Item.Meta, {
                  title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_StyledA, {
                    href: "/",
                    className: "px-4",
                    children: [item.title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                      className: "mr-auto"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("small", {
                      children: item.subtitle
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 17
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        sm: 24,
        md: 8,
        className: "mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_card__WEBPACK_IMPORTED_MODULE_4___default.a, {
          title: "Tasks",
          extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
            overlay: menu,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["EllipsisOutlined"], {
              style: {
                fontSize: '20px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 15
          }, _this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a, {
            pending: "Tasks pending...",
            className: "mt-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "text-truncate",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TimelinePeriod, {
                  content: "09.45"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  children: "Create a services site"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 302,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "text-truncate",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TimelinePeriod, {
                  content: "11.20"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  children: "Solve initial network problems"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 308,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
              dot: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["DatabaseTwoTone"], {
                style: {
                  fontSize: '16px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 19
              }, _this),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "text-truncate",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TimelinePeriod, {
                  content: "13.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 317,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  children: "Technical testing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 318,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "text-truncate",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TimelinePeriod, {
                  content: "15.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 323,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  children: "Network problems being solved"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        sm: 24,
        md: 8,
        className: "mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_card__WEBPACK_IMPORTED_MODULE_4___default.a, {
          title: "Activity",
          extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
            overlay: menu,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["EllipsisOutlined"], {
              style: {
                fontSize: '20px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 15
          }, _this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a, {
            pending: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "ml-4",
              children: "Activities pending..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 24
            }, _this),
            className: "mt-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
              dot: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
                size: 24,
                src: "/images/face1.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 22
              }, _this),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "ml-4 text-truncate",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TimelinePeriod, {
                  content: "9.45"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 347,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                    children: "John Doe"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 349,
                    columnNumber: 21
                  }, _this), " launched a new application"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 346,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
              dot: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
                size: 24,
                src: "/images/face2.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 22
              }, _this),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "ml-4 text-truncate",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TimelinePeriod, {
                  content: "11.20"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 357,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                    children: "Paula Bean"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 21
                  }, _this), " Cleared calendar events"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 358,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
              dot: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
                size: 24,
                src: "/images/face3.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 364,
                columnNumber: 22
              }, _this),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "ml-4 text-truncate",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TimelinePeriod, {
                  content: "13.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                    children: "Peter Hadji"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 369,
                    columnNumber: 21
                  }, _this), " Joined your mailing list"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
              dot: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
                size: 24,
                src: "/images/face4.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 22
              }, _this),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "ml-4 text-truncate",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TimelinePeriod, {
                  content: "15.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 377,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                    children: "Trevor Belmont"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 379,
                    columnNumber: 21
                  }, _this), " Created a new task list"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 378,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
      gutter: 16,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        md: 24,
        lg: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_shared_WeatherCard__WEBPACK_IMPORTED_MODULE_18__["default"], {
          city: "harare",
          country: "zw",
          days: 7
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        md: 24,
        lg: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_shared_PostCard__WEBPACK_IMPORTED_MODULE_16__["default"], {
          title: "Shrimp and Chorizo Paella",
          subtitle: "Yesterday",
          image: "/images/unsplash/1.jpg",
          images: ['/images/unsplash/1.jpg', '/images/unsplash/15.jpg'],
          imageHeight: 365,
          text: "Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 5
  }, _this);
};

_c3 = Overview;
/* harmony default export */ __webpack_exports__["default"] = (Overview);

var _StyledSmall = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])("small").withConfig({
  displayName: "Overview___StyledSmall",
  componentId: "sc-1phv1b2-1"
})(["display:block;"]);

var _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])("div").withConfig({
  displayName: "Overview___StyledDiv",
  componentId: "sc-1phv1b2-2"
})(["display:block;color:#007bff;margin:auto;"]);

var _StyledDiv2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])("div").withConfig({
  displayName: "Overview___StyledDiv2",
  componentId: "sc-1phv1b2-3"
})(["display:block;"]);

var _StyledA = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])("a").withConfig({
  displayName: "Overview___StyledA",
  componentId: "sc-1phv1b2-4"
})(["display:flex;"]);

var _c, _c2, _c3;

$RefreshReg$(_c, "Legend");
$RefreshReg$(_c2, "TimelinePeriod");
$RefreshReg$(_c3, "Overview");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PdmVydmlldy5qcyJdLCJuYW1lcyI6WyJNb250aFBpY2tlciIsImF4ZXMiLCJBcnJheSIsImZyb20iLCJrZXlzIiwiZ2VuZXJhdGUiLCJhcnIiLCJtYXAiLCJ4IiwieSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzZXJpZXMiLCJ0aXRsZSIsImRhdGEiLCJMZWdlbmQiLCJzdHlsZWQiLCJkaXYiLCJtZW51IiwiZm9udFNpemUiLCJzdWJ0aXRsZSIsIlRpbWVsaW5lUGVyaW9kIiwiY29udGVudCIsIk92ZXJ2aWV3IiwidGhlbWUiLCJwcmltYXJ5Q29sb3IiLCJpbmZvIiwiZGFya0NvbG9yIiwid2FybmluZ0NvbG9yIiwiZXJyb3JDb2xvciIsInBhZGRpbmciLCJzdHJva2VXaWR0aCIsInBlcmNlbnQiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxXLGdFQUFBQSxXO0FBRVIsSUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVRSxJQUFWLEVBQVgsQ0FBYjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0FMLE1BQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUFDLENBQUMsRUFBSTtBQUNaLFFBQU1DLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixJQUFpQyxDQUEzQztBQUNBTixPQUFHLENBQUNPLElBQUosQ0FBUztBQUFFTCxPQUFDLEVBQURBLENBQUY7QUFBS0MsT0FBQyxFQUFEQTtBQUFMLEtBQVQ7QUFDRCxH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YWNrL3BhZ2VzL2luZGV4LjY1ZTkyNDFmMDIzNGFmNjc3NDkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGlUd29Ub25lLCBCZWxsT3V0bGluZWQsIEJvb2tPdXRsaW5lZCwgRGF0YWJhc2VUd29Ub25lLCBFZGl0VHdvVG9uZSwgRWxsaXBzaXNPdXRsaW5lZCwgRmFsbE91dGxpbmVkLCBGaWxlWmlwVHdvVG9uZSwgTWVzc2FnZU91dGxpbmVkLCBQaG9uZU91dGxpbmVkLCBQcmludGVyVHdvVG9uZSwgUmVzdFR3b1RvbmUsIFJpc2VPdXRsaW5lZCwgU2F2ZVR3b1RvbmUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIENhcmQsXG4gIENvbCxcbiAgRGF0ZVBpY2tlcixcbiAgRHJvcGRvd24sXG4gIExpc3QsXG4gIE1lbnUsXG4gIE1lc3NhZ2UsXG4gIFByb2dyZXNzLFxuICBSb3csXG4gIFRpbWVsaW5lXG59IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtcbiAgRGlzY3JldGVDb2xvckxlZ2VuZCxcbiAgRmxleGlibGVXaWR0aFhZUGxvdCxcbiAgSG9yaXpvbnRhbEdyaWRMaW5lcyxcbiAgVmVydGljYWxCYXJTZXJpZXMsXG4gIFZlcnRpY2FsR3JpZExpbmVzLFxuICBYQXhpcyxcbiAgWUF4aXNcbn0gZnJvbSAncmVhY3QtdmlzJztcblxuaW1wb3J0IE5vU1NSIGZyb20gJ3JlYWN0LW5vLXNzcic7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi9zaGFyZWQvUG9zdENhcmQnO1xuaW1wb3J0IFN0YXRDYXJkIGZyb20gJy4vc2hhcmVkL1N0YXRDYXJkJztcbmltcG9ydCBXZWF0aGVyQ2FyZCBmcm9tICcuL3NoYXJlZC9XZWF0aGVyQ2FyZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi9zdHlsZXMvR2xvYmFsU3R5bGVzJztcblxuY29uc3QgeyBNb250aFBpY2tlciB9ID0gRGF0ZVBpY2tlcjtcblxuY29uc3QgYXhlcyA9IEFycmF5LmZyb20oQXJyYXkoMTIpLmtleXMoKSk7XG5cbmNvbnN0IGdlbmVyYXRlID0gKCkgPT4ge1xuICBsZXQgYXJyID0gW107XG4gIGF4ZXMubWFwKHggPT4ge1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgIGFyci5wdXNoKHsgeCwgeSB9KTtcbiAgfSk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBzZXJpZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1ZpZXdzJyxcbiAgICBkYXRhOiBnZW5lcmF0ZSgpXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NhbGVzJyxcbiAgICBkYXRhOiBnZW5lcmF0ZSgpXG4gIH1cbl07XG5cbmNvbnN0IExlZ2VuZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIC5ydi1kaXNjcmV0ZS1jb2xvci1sZWdlbmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5ydi1kaXNjcmV0ZS1jb2xvci1sZWdlbmQtaXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmNvbnN0IG1lbnUgPSAoXG4gIDxNZW51PlxuICAgIDxNZW51Lkl0ZW0+XG4gICAgICA8Um93IHR5cGU9XCJmbGV4XCIgYWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgPEZpbGVaaXBUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtM1wiPkFyY2hpdmU8L3NwYW4+XG4gICAgICA8L1Jvdz5cbiAgICA8L01lbnUuSXRlbT5cbiAgICA8TWVudS5JdGVtPlxuICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGFsaWduPVwibWlkZGxlXCI+XG4gICAgICAgIDxFZGl0VHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTNcIj5FZGl0PC9zcGFuPlxuICAgICAgPC9Sb3c+XG4gICAgPC9NZW51Lkl0ZW0+XG4gICAgPE1lbnUuSXRlbT5cbiAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBhbGlnbj1cIm1pZGRsZVwiPlxuICAgICAgICA8UmVzdFR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0zXCI+RGVsZXRlPC9zcGFuPlxuICAgICAgPC9Sb3c+XG4gICAgPC9NZW51Lkl0ZW0+XG4gICAgPE1lbnUuRGl2aWRlciAvPlxuICAgIDxNZW51Lkl0ZW0+XG4gICAgICA8Um93IHR5cGU9XCJmbGV4XCIgYWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgPFNhdmVUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtM1wiPlNhdmUgYXM8L3NwYW4+XG4gICAgICA8L1Jvdz5cbiAgICA8L01lbnUuSXRlbT5cbiAgICA8TWVudS5JdGVtPlxuICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGFsaWduPVwibWlkZGxlXCI+XG4gICAgICAgIDxQcmludGVyVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTNcIj5QcmludDwvc3Bhbj5cbiAgICAgIDwvUm93PlxuICAgIDwvTWVudS5JdGVtPlxuICA8L01lbnU+XG4pO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgdGl0bGU6ICdDbGljayB0aHJvdWdoIHJhdGlvJyxcbiAgICBzdWJ0aXRsZTogKFxuICAgICAgPHNwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTFcIj4xNSU8L3NwYW4+XG4gICAgICAgIDxSaXNlT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6ICcyMHB4JyB9fSBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIiAvPlxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQ29zdCBwZXIgdGhvdXNhbmQnLFxuICAgIHN1YnRpdGxlOiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMVwiPiQzMjAuODk8L3NwYW4+XG4gICAgICAgIDxGYWxsT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6ICcyMHB4JyB9fSBjbGFzc05hbWU9XCJ0ZXh0LWVycm9yXCIgLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0JvdW5jZSByYXRlJyxcbiAgICBzdWJ0aXRsZTogKFxuICAgICAgPHNwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTFcIj4zNCU8L3NwYW4+XG4gICAgICAgIDxSaXNlT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6ICcyMHB4JyB9fSBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIiAvPlxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfVxuXTtcblxuY29uc3QgVGltZWxpbmVQZXJpb2QgPSAoeyBjb250ZW50IH0pID0+IChcbiAgPHNtYWxsXG4gICAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiXG4gICAgY3NzPXtgXG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICBgfVxuICA+XG4gICAge2NvbnRlbnR9XG4gIDwvc21hbGw+XG4pO1xuXG5jb25zdCBPdmVydmlldyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJvdyBndXR0ZXI9ezE2fT5cbiAgICAgICAgPENvbCB4cz17MjR9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgdHlwZT1cImZpbGxcIlxuICAgICAgICAgICAgdGl0bGU9XCJPcmRlcnNcIlxuICAgICAgICAgICAgdmFsdWU9ezEwM31cbiAgICAgICAgICAgIGljb249ezxCb29rT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6ICcyMHB4J319IC8+fVxuICAgICAgICAgICAgY29sb3I9e3RoZW1lLnByaW1hcnlDb2xvcn1cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4gTWVzc2FnZS5pbmZvKCdDYW1wYWlnbiBzdGF0IGJ1dHRvbiBjbGlja2VkJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxsXCJcbiAgICAgICAgICAgIHRpdGxlPVwiQ3VzdG9tZXJzXCJcbiAgICAgICAgICAgIHZhbHVlPXsyMzB9XG4gICAgICAgICAgICBpY29uPXs8UGhvbmVPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnfX0gIC8+fVxuICAgICAgICAgICAgY29sb3I9e3RoZW1lLmRhcmtDb2xvcn1cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4gTWVzc2FnZS5pbmZvKCdDdXN0b21lcnMgc3RhdCBidXR0b24gY2xpY2tlZCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICB0eXBlPVwiZmlsbFwiXG4gICAgICAgICAgICB0aXRsZT1cIkludGVncmF0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17MzIzfVxuICAgICAgICAgICAgaWNvbj17PEJlbGxPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnfX0gLz59XG4gICAgICAgICAgICBjb2xvcj17dGhlbWUud2FybmluZ0NvbG9yfVxuICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiBNZXNzYWdlLmluZm8oJ1F1ZXJpZXMgc3RhdCBidXR0b24gY2xpY2tlZCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICB0eXBlPVwiZmlsbFwiXG4gICAgICAgICAgICB0aXRsZT1cIkVycm9yc1wiXG4gICAgICAgICAgICB2YWx1ZT17ODcwfVxuICAgICAgICAgICAgaWNvbj17PE1lc3NhZ2VPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnfX0gLz59XG4gICAgICAgICAgICBjb2xvcj17dGhlbWUuZXJyb3JDb2xvcn1cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4gTWVzc2FnZS5pbmZvKCdPcGVucyBzdGF0IGJ1dHRvbiBjbGlja2VkJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgPENhcmRcbiAgICAgICAgdGl0bGU9XCJTYWxlcyBhbmFseXRpY3NcIlxuICAgICAgICBleHRyYT17XG4gICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6ICcyMHB4JyB9fSAvPlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIH1cbiAgICAgICAgYm9keVN0eWxlPXt7IHBhZGRpbmc6ICcxcmVtJyB9fVxuICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcbiAgICAgID5cbiAgICAgICAgPE5vU1NSPlxuICAgICAgICAgIDxMZWdlbmQ+XG4gICAgICAgICAgICA8RGlzY3JldGVDb2xvckxlZ2VuZCB3aWR0aD17MTgwfSBoZWlnaHQ9ezIwfSBpdGVtcz17c2VyaWVzfSAvPlxuICAgICAgICAgICAgPE1vbnRoUGlja2VyIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgbW9udGhcIiAvPlxuICAgICAgICAgIDwvTGVnZW5kPlxuICAgICAgICAgIDxGbGV4aWJsZVdpZHRoWFlQbG90IHhUeXBlPVwib3JkaW5hbFwiIGhlaWdodD17MzQwfSB4RGlzdGFuY2U9ezEwMH0+XG4gICAgICAgICAgICA8VmVydGljYWxHcmlkTGluZXMgc3R5bGU9e3sgc3Ryb2tlV2lkdGg6IDAuNSB9fSAvPlxuICAgICAgICAgICAgPEhvcml6b250YWxHcmlkTGluZXMgc3R5bGU9e3sgc3Ryb2tlV2lkdGg6IDAuNSB9fSAvPlxuICAgICAgICAgICAgPFhBeGlzIHN0eWxlPXt7IHN0cm9rZVdpZHRoOiAwLjUgfX0gLz5cbiAgICAgICAgICAgIDxZQXhpcyBzdHlsZT17eyBzdHJva2VXaWR0aDogMC41IH19IC8+XG4gICAgICAgICAgICA8VmVydGljYWxCYXJTZXJpZXMgY29sb3I9XCIjMDA3YmZmXCIgZGF0YT17c2VyaWVzWzBdLmRhdGF9IC8+XG4gICAgICAgICAgICA8VmVydGljYWxCYXJTZXJpZXNcbiAgICAgICAgICAgICAgY29sb3I9XCJyZ2IoMjExLCAyMzIsIDI1NSlcIlxuICAgICAgICAgICAgICBkYXRhPXtzZXJpZXNbMV0uZGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GbGV4aWJsZVdpZHRoWFlQbG90PlxuICAgICAgICA8L05vU1NSPlxuICAgICAgPC9DYXJkPlxuXG4gICAgICA8Um93IGd1dHRlcj17MTZ9PlxuICAgICAgICA8Q29sIHNtPXsyNH0gbWQ9ezh9IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8Q2FyZCBib2R5U3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgICAgdHlwZT1cImZsZXhcIlxuICAgICAgICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBndXR0ZXI9ezE2fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS00XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFByb2dyZXNzXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhc2hib2FyZFwiXG4gICAgICAgICAgICAgICAgcGVyY2VudD17OTB9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezE4MX1cbiAgICAgICAgICAgICAgICBmb3JtYXQ9e3BlcmNlbnQgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17YFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEFwaVR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcyMHB4J319IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaDUgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgY3NzPXtgXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3BlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPjMwJSBjb21taXNzaW9uIHJhdGU8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzPXtgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItYXV0b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2l0ZW0uc3VidGl0bGV9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc209ezI0fSBtZD17OH0gY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIlRhc2tzXCJcbiAgICAgICAgICAgIGV4dHJhPXtcbiAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxuICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiAnMjBweCcgfX0gLz5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGltZWxpbmUgcGVuZGluZz1cIlRhc2tzIHBlbmRpbmcuLi5cIiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgIDxUaW1lbGluZS5JdGVtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAgPFRpbWVsaW5lUGVyaW9kIGNvbnRlbnQ9XCIwOS40NVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5DcmVhdGUgYSBzZXJ2aWNlcyBzaXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1RpbWVsaW5lLkl0ZW0+XG4gICAgICAgICAgICAgIDxUaW1lbGluZS5JdGVtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAgPFRpbWVsaW5lUGVyaW9kIGNvbnRlbnQ9XCIxMS4yMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Tb2x2ZSBpbml0aWFsIG5ldHdvcmsgcHJvYmxlbXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvVGltZWxpbmUuSXRlbT5cbiAgICAgICAgICAgICAgPFRpbWVsaW5lLkl0ZW1cbiAgICAgICAgICAgICAgICBkb3Q9e1xuICAgICAgICAgICAgICAgICAgPERhdGFiYXNlVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8VGltZWxpbmVQZXJpb2QgY29udGVudD1cIjEzLjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlRlY2huaWNhbCB0ZXN0aW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1RpbWVsaW5lLkl0ZW0+XG4gICAgICAgICAgICAgIDxUaW1lbGluZS5JdGVtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAgPFRpbWVsaW5lUGVyaW9kIGNvbnRlbnQ9XCIxNS4wMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5OZXR3b3JrIHByb2JsZW1zIGJlaW5nIHNvbHZlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9UaW1lbGluZS5JdGVtPlxuICAgICAgICAgICAgPC9UaW1lbGluZT5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNtPXsyNH0gbWQ9ezh9IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJBY3Rpdml0eVwiXG4gICAgICAgICAgICBleHRyYT17XG4gICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fT5cbiAgICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnIH19IC8+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRpbWVsaW5lXG4gICAgICAgICAgICAgIHBlbmRpbmc9ezxkaXYgY2xhc3NOYW1lPVwibWwtNFwiPkFjdGl2aXRpZXMgcGVuZGluZy4uLjwvZGl2Pn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUaW1lbGluZS5JdGVtXG4gICAgICAgICAgICAgICAgZG90PXs8QXZhdGFyIHNpemU9ezI0fSBzcmM9XCIvaW1hZ2VzL2ZhY2UxLmpwZ1wiIC8+fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IHRleHQtdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxUaW1lbGluZVBlcmlvZCBjb250ZW50PVwiOS40NVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGE+Sm9obiBEb2U8L2E+IGxhdW5jaGVkIGEgbmV3IGFwcGxpY2F0aW9uXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvVGltZWxpbmUuSXRlbT5cbiAgICAgICAgICAgICAgPFRpbWVsaW5lLkl0ZW1cbiAgICAgICAgICAgICAgICBkb3Q9ezxBdmF0YXIgc2l6ZT17MjR9IHNyYz1cIi9pbWFnZXMvZmFjZTIuanBnXCIgLz59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTQgdGV4dC10cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAgPFRpbWVsaW5lUGVyaW9kIGNvbnRlbnQ9XCIxMS4yMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGE+UGF1bGEgQmVhbjwvYT4gQ2xlYXJlZCBjYWxlbmRhciBldmVudHNcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9UaW1lbGluZS5JdGVtPlxuICAgICAgICAgICAgICA8VGltZWxpbmUuSXRlbVxuICAgICAgICAgICAgICAgIGRvdD17PEF2YXRhciBzaXplPXsyNH0gc3JjPVwiL2ltYWdlcy9mYWNlMy5qcGdcIiAvPn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCB0ZXh0LXRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8VGltZWxpbmVQZXJpb2QgY29udGVudD1cIjEzLjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YT5QZXRlciBIYWRqaTwvYT4gSm9pbmVkIHlvdXIgbWFpbGluZyBsaXN0XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvVGltZWxpbmUuSXRlbT5cbiAgICAgICAgICAgICAgPFRpbWVsaW5lLkl0ZW1cbiAgICAgICAgICAgICAgICBkb3Q9ezxBdmF0YXIgc2l6ZT17MjR9IHNyYz1cIi9pbWFnZXMvZmFjZTQuanBnXCIgLz59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTQgdGV4dC10cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAgPFRpbWVsaW5lUGVyaW9kIGNvbnRlbnQ9XCIxNS4wMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGE+VHJldm9yIEJlbG1vbnQ8L2E+IENyZWF0ZWQgYSBuZXcgdGFzayBsaXN0XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvVGltZWxpbmUuSXRlbT5cbiAgICAgICAgICAgIDwvVGltZWxpbmU+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICA8Um93IGd1dHRlcj17MTZ9PlxuICAgICAgICA8Q29sIG1kPXsyNH0gbGc9ezEyfT5cbiAgICAgICAgICA8V2VhdGhlckNhcmQgY2l0eT1cImhhcmFyZVwiIGNvdW50cnk9XCJ6d1wiIGRheXM9ezd9IC8+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgbWQ9ezI0fSBsZz17MTJ9PlxuICAgICAgICAgIDxQb3N0Q2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJTaHJpbXAgYW5kIENob3Jpem8gUGFlbGxhXCJcbiAgICAgICAgICAgIHN1YnRpdGxlPVwiWWVzdGVyZGF5XCJcbiAgICAgICAgICAgIGltYWdlPVwiL2ltYWdlcy91bnNwbGFzaC8xLmpwZ1wiXG4gICAgICAgICAgICBpbWFnZXM9e1tcbiAgICAgICAgICAgICAgJy9pbWFnZXMvdW5zcGxhc2gvMS5qcGcnLFxuICAgICAgICAgICAgICAnL2ltYWdlcy91bnNwbGFzaC8xNS5qcGcnXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ9ezM2NX1cbiAgICAgICAgICAgIHRleHQ9XCJQaGlsZWFzIEZvZ2cgYW5kIEFvdWRhIHdlbnQgb24gYm9hcmQsIHdoZXJlIHRoZXkgZm91bmQgRml4IGFscmVhZHkgaW5zdGFsbGVkLiBCZWxvdyBkZWNrIHdhcyBhIHNxdWFyZSBjYWJpbiwgb2Ygd2hpY2ggdGhlIHdhbGxzIGJ1bGdlZCBvdXQgaW4gdGhlIGZvcm0gb2YgY290cywgYWJvdmUgYSBjaXJjdWxhciBkaXZhbjsgaW4gdGhlIGNlbnRyZSB3YXMgYSB0YWJsZSBwcm92aWRlZCB3aXRoIGEgc3dpbmdpbmcgbGFtcC5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdmVydmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=