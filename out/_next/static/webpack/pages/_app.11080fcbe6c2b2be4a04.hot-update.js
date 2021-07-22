webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/routes.js":
/*!***********************!*\
  !*** ./lib/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

var _jsxFileName = "D:\\WebSolutions\\interface-hub\\template\\lib\\routes.js";

/* harmony default export */ __webpack_exports__["default"] = ([{
  path: "/",
  name: "Home",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HomeTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 11
  }, undefined)
}, {
  name: "Market Places",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ApiTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/market/lazada",
    name: "Lazada"
  }, {
    path: "/market/shopee",
    name: "Shopee"
  }]
}, {
  name: "Apps",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ShoppingTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/apps/calendar",
    name: "Calendar"
  }, {
    path: "/apps/messages",
    name: "Messages"
  }, {
    path: "/apps/social",
    name: "Social"
  }, {
    path: "/apps/chat",
    name: "Chat"
  }]
}, {
  path: "/widgets",
  name: "Widgets",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["FireTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 11
  }, undefined),
  badge: {
    value: "5"
  }
}, {
  path: "/taskboard",
  name: "Taskboard",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["LayoutTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 11
  }, undefined),
  badge: {
    value: "New"
  }
}, {
  name: "Charts",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["PieChartTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/charts/plots",
    name: "Plots"
  }, {
    path: "/charts/axes",
    name: "Axes"
  }, {
    path: "/charts/legends",
    name: "Legends"
  }, {
    path: "/charts/sunburst",
    name: "Sunburst"
  }, {
    path: "/charts/radial",
    name: "Radial"
  }, {
    path: "/charts/sankeys",
    name: "Sankeys"
  }, {
    path: "/charts/treemaps",
    name: "Treemaps"
  }, {
    path: "/charts/radar",
    name: "Radar charts"
  }, {
    path: "/charts/misc",
    name: "Misc"
  }]
}, {
  name: "Media",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["PictureTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/media/grid",
    name: "Grid"
  }, {
    path: "/media/tile",
    name: "Tile"
  }]
}, {
  name: "Maps",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CompassTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/maps/markers",
    name: "Markers"
  }, {
    path: "/maps/geojson",
    name: "Geo JSON"
  }]
}, {
  name: "Extras",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CrownTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/extras/invoice",
    name: "Invoice"
  }, {
    path: "/extras/timeline",
    name: "Timeline"
  }, {
    path: "/extras/blank",
    name: "Blank"
  }, {
    path: "/extras/pricing",
    name: "Pricing"
  }]
}, {
  name: "Authentication",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UnlockTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/signin",
    name: "Signin"
  }, {
    path: "/signup",
    name: "Signup"
  }, {
    path: "/forgot",
    name: "Forgot"
  }, {
    path: "/lockscreen",
    name: "Lockscreen"
  }]
}, {
  name: "Error",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["WarningTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/thisroutedoesntwork",
    name: "404"
  }, {
    path: "/500",
    name: "Error"
  }]
}, {
  name: "General elements",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["FolderTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/general/button",
    name: "Button"
  }, {
    path: "/general/icon",
    name: "Icon"
  }]
}, {
  name: "Navigation",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SwitcherTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 205,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/navigation/breadcrumb",
    name: "Breadcrumb"
  }, {
    path: "/navigation/dropdown",
    name: "Dropdown"
  }, {
    path: "/navigation/menu",
    name: "Menu"
  }, {
    path: "/navigation/pagination",
    name: "Pagination"
  }, {
    path: "/navigation/steps",
    name: "Steps"
  }]
}, {
  name: "Data entry",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EditTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 231,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/data-entry/autocomplete",
    name: "AutoComplete"
  }, {
    path: "/data-entry/checkbox",
    name: "Checkbox"
  }, {
    path: "/data-entry/cascader",
    name: "Cascader"
  }, {
    path: "/data-entry/datepicker",
    name: "Date picker"
  }, {
    path: "/data-entry/form",
    name: "form"
  }, {
    path: "/data-entry/inputnumber",
    name: "Input number"
  }, {
    path: "/data-entry/input",
    name: "Input"
  }, {
    path: "/data-entry/mention",
    name: "Mention"
  }, {
    path: "/data-entry/rate",
    name: "Rate"
  }, {
    path: "/data-entry/radio",
    name: "Radio"
  }, {
    path: "/data-entry/switch",
    name: "Switch"
  }, {
    path: "/data-entry/slider",
    name: "Slider"
  }, {
    path: "/data-entry/select",
    name: "Select"
  }, {
    path: "/data-entry/treeselect",
    name: "Tree select"
  }, {
    path: "/data-entry/transfer",
    name: "Transfer"
  }, {
    path: "/data-entry/timepicker",
    name: "Time picker"
  }, {
    path: "/data-entry/upload",
    name: "Upload"
  }]
}, {
  name: "Data display",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["DiffTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 305,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/data-display/avatar",
    name: "Avatar"
  }, {
    path: "/data-display/badge",
    name: "Badge"
  }, {
    path: "/data-display/collapse",
    name: "Collapse"
  }, {
    path: "/data-display/carousel",
    name: "Carousel"
  }, {
    path: "/data-display/card",
    name: "Card"
  }, {
    path: "/data-display/calendar",
    name: "Calendar"
  }, {
    path: "/data-display/list",
    name: "List"
  }, {
    path: "/data-display/popover",
    name: "Popover"
  }, {
    path: "/data-display/tree",
    name: "Tree"
  }, {
    path: "/data-display/tooltip",
    name: "Tooltip"
  }, {
    path: "/data-display/timeline",
    name: "Timeline"
  }, {
    path: "/data-display/tag",
    name: "Tag"
  }, {
    path: "/data-display/tabs",
    name: "Tabs"
  }, {
    path: "/data-display/table",
    name: "Table"
  }]
}, {
  name: "Feedback",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["AlertTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 367,
    columnNumber: 11
  }, undefined),
  children: [{
    path: "/feedback/alert",
    name: "Alert"
  }, {
    path: "/feedback/drawer",
    name: "Drawer"
  }, {
    path: "/feedback/modal",
    name: "Modal"
  }, {
    path: "/feedback/message",
    name: "Message"
  }, {
    path: "/feedback/notification",
    name: "Notification"
  }, {
    path: "/feedback/progress",
    name: "Progress"
  }, {
    path: "/feedback/popconfirm",
    name: "Pop confirm"
  }, {
    path: "/feedback/spin",
    name: "Spin"
  }, {
    path: "/feedback/skeleton",
    name: "Skeleton"
  }]
}, {
  path: "//one-readme.fusepx.com",
  name: "Documentation",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["QuestionCircleTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 410,
    columnNumber: 11
  }, undefined)
}, {
  path: "//nyasha.me",
  name: "Browse more templates",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["FireTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 415,
    columnNumber: 11
  }, undefined)
}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJwYXRoIiwibmFtZSIsImljb24iLCJmb250U2l6ZSIsImNoaWxkcmVuIiwiYmFkZ2UiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsZ0VBQ2I7QUFDRUEsTUFBSSxFQUFFLEdBRFI7QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsTUFBSSxlQUFFLHFFQUFDLDZEQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixDQURhLEVBTWI7QUFDRUYsTUFBSSxFQUFFLGVBRFI7QUFFRUMsTUFBSSxlQUFFLHFFQUFDLDREQUFEO0FBQVksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUjtBQUdFQyxVQUFRLEVBQUUsQ0FDUjtBQUNFSixRQUFJLEVBQUUsZ0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEUSxFQUtSO0FBQ0VELFFBQUksRUFBRSxnQkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxRO0FBSFosQ0FOYSxFQW9CYjtBQUNFQSxNQUFJLEVBQUUsTUFEUjtBQUVFQyxNQUFJLGVBQUUscUVBQUMsaUVBQUQ7QUFBaUIsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUjtBQUdFQyxVQUFRLEVBQUUsQ0FDUjtBQUNFSixRQUFJLEVBQUUsZ0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEUSxFQUtSO0FBQ0VELFFBQUksRUFBRSxnQkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxRLEVBU1I7QUFDRUQsUUFBSSxFQUFFLGNBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUUSxFQWFSO0FBQ0VELFFBQUksRUFBRSxZQURSO0FBRUVDLFFBQUks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QUVFQyxRQUFJLEVBQUU7QUFGUixHQUxRLEVBU1I7QUFDRUQsUUFBSSxFQUFFLGlCQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBVFEsRUFhUjtBQUNFRCxRQUFJLEVBQUUsbUJBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FiUSxFQWlCUjtBQUNFRCxRQUFJLEVBQUUsd0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FqQlEsRUFxQlI7QUFDRUQsUUFBSSxFQUFFLG9CQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBckJRLEVBeUJSO0FBQ0VELFFBQUksRUFBRSxzQkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXpCUSxFQTZCUjtBQUNFRCxRQUFJLEVBQUUsZ0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0E3QlEsRUFpQ1I7QUFDRUQsUUFBSSxFQUFFLG9CQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBakNRO0FBSFosQ0ExV2EsRUFvWmI7QUFDRUQsTUFBSSxFQUFFLHlCQURSO0FBRUVDLE1BQUksRUFBRSxlQUZSO0FBR0VDLE1BQUksZUFBRSxxRUFBQyx1RUFBRDtBQUF1QixTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVo7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSLENBcFphLEVBeVpiO0FBQ0VILE1BQUksRUFBRSxhQURSO0FBRUVDLE1BQUksRUFBRSx1QkFGUjtBQUdFQyxNQUFJLGVBQUUscUVBQUMsNkRBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVo7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSLENBelphLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMTA4MGZjYmU2YzJiMmJlNGEwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxlcnRUd29Ub25lLCBDb21wYXNzVHdvVG9uZSwgQ3Jvd25Ud29Ub25lLCBEaWZmVHdvVG9uZSwgRWRpdFR3b1RvbmUsIEZpcmVUd29Ub25lLCBGb2xkZXJUd29Ub25lLCBIb21lVHdvVG9uZSwgTGF5b3V0VHdvVG9uZSwgUGljdHVyZVR3b1RvbmUsIFBpZUNoYXJ0VHdvVG9uZSwgUXVlc3Rpb25DaXJjbGVUd29Ub25lLCBTaG9wcGluZ1R3b1RvbmUsIFN3aXRjaGVyVHdvVG9uZSwgVW5sb2NrVHdvVG9uZSwgV2FybmluZ1R3b1RvbmUsIEFwaVR3b1RvbmUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgIGljb246IDxIb21lVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+XG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1hcmtldCBQbGFjZXNcIixcbiAgICBpY29uOiA8QXBpVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL21hcmtldC9sYXphZGFcIixcbiAgICAgICAgbmFtZTogXCJMYXphZGFcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbWFya2V0L3Nob3BlZVwiLFxuICAgICAgICBuYW1lOiBcIlNob3BlZVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBcHBzXCIsXG4gICAgaWNvbjogPFNob3BwaW5nVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2FwcHMvY2FsZW5kYXJcIixcbiAgICAgICAgbmFtZTogXCJDYWxlbmRhclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9hcHBzL21lc3NhZ2VzXCIsXG4gICAgICAgIG5hbWU6IFwiTWVzc2FnZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvYXBwcy9zb2NpYWxcIixcbiAgICAgICAgbmFtZTogXCJTb2NpYWxcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvYXBwcy9jaGF0XCIsXG4gICAgICAgIG5hbWU6IFwiQ2hhdFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvd2lkZ2V0c1wiLFxuICAgIG5hbWU6IFwiV2lkZ2V0c1wiLFxuICAgIGljb246IDxGaXJlVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGJhZGdlOiB7XG4gICAgICB2YWx1ZTogXCI1XCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi90YXNrYm9hcmRcIixcbiAgICBuYW1lOiBcIlRhc2tib2FyZFwiLFxuICAgIGljb246IDxMYXlvdXRUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgYmFkZ2U6IHtcbiAgICAgIHZhbHVlOiBcIk5ld1wiXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDaGFydHNcIixcbiAgICBpY29uOiA8UGllQ2hhcnRUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvY2hhcnRzL3Bsb3RzXCIsXG4gICAgICAgIG5hbWU6IFwiUGxvdHNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvY2hhcnRzL2F4ZXNcIixcbiAgICAgICAgbmFtZTogXCJBeGVzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NoYXJ0cy9sZWdlbmRzXCIsXG4gICAgICAgIG5hbWU6IFwiTGVnZW5kc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9jaGFydHMvc3VuYnVyc3RcIixcbiAgICAgICAgbmFtZTogXCJTdW5idXJzdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9jaGFydHMvcmFkaWFsXCIsXG4gICAgICAgIG5hbWU6IFwiUmFkaWFsXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NoYXJ0cy9zYW5rZXlzXCIsXG4gICAgICAgIG5hbWU6IFwiU2Fua2V5c1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9jaGFydHMvdHJlZW1hcHNcIixcbiAgICAgICAgbmFtZTogXCJUcmVlbWFwc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9jaGFydHMvcmFkYXJcIixcbiAgICAgICAgbmFtZTogXCJSYWRhciBjaGFydHNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvY2hhcnRzL21pc2NcIixcbiAgICAgICAgbmFtZTogXCJNaXNjXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1lZGlhXCIsXG4gICAgaWNvbjogPFBpY3R1cmVUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbWVkaWEvZ3JpZFwiLFxuICAgICAgICBuYW1lOiBcIkdyaWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbWVkaWEvdGlsZVwiLFxuICAgICAgICBuYW1lOiBcIlRpbGVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWFwc1wiLFxuICAgIGljb246IDxDb21wYXNzVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL21hcHMvbWFya2Vyc1wiLFxuICAgICAgICBuYW1lOiBcIk1hcmtlcnNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbWFwcy9nZW9qc29uXCIsXG4gICAgICAgIG5hbWU6IFwiR2VvIEpTT05cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRXh0cmFzXCIsXG4gICAgaWNvbjogPENyb3duVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2V4dHJhcy9pbnZvaWNlXCIsXG4gICAgICAgIG5hbWU6IFwiSW52b2ljZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9leHRyYXMvdGltZWxpbmVcIixcbiAgICAgICAgbmFtZTogXCJUaW1lbGluZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9leHRyYXMvYmxhbmtcIixcbiAgICAgICAgbmFtZTogXCJCbGFua1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9leHRyYXMvcHJpY2luZ1wiLFxuICAgICAgICBuYW1lOiBcIlByaWNpbmdcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQXV0aGVudGljYXRpb25cIixcbiAgICBpY29uOiA8VW5sb2NrVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3NpZ25pblwiLFxuICAgICAgICBuYW1lOiBcIlNpZ25pblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9zaWdudXBcIixcbiAgICAgICAgbmFtZTogXCJTaWdudXBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZm9yZ290XCIsXG4gICAgICAgIG5hbWU6IFwiRm9yZ290XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2xvY2tzY3JlZW5cIixcbiAgICAgICAgbmFtZTogXCJMb2Nrc2NyZWVuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkVycm9yXCIsXG4gICAgaWNvbjogPFdhcm5pbmdUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvdGhpc3JvdXRlZG9lc250d29ya1wiLFxuICAgICAgICBuYW1lOiBcIjQwNFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi81MDBcIixcbiAgICAgICAgbmFtZTogXCJFcnJvclwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHZW5lcmFsIGVsZW1lbnRzXCIsXG4gICAgaWNvbjogPEZvbGRlclR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9nZW5lcmFsL2J1dHRvblwiLFxuICAgICAgICBuYW1lOiBcIkJ1dHRvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9nZW5lcmFsL2ljb25cIixcbiAgICAgICAgbmFtZTogXCJJY29uXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5hdmlnYXRpb25cIixcbiAgICBpY29uOiA8U3dpdGNoZXJUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbmF2aWdhdGlvbi9icmVhZGNydW1iXCIsXG4gICAgICAgIG5hbWU6IFwiQnJlYWRjcnVtYlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9uYXZpZ2F0aW9uL2Ryb3Bkb3duXCIsXG4gICAgICAgIG5hbWU6IFwiRHJvcGRvd25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbmF2aWdhdGlvbi9tZW51XCIsXG4gICAgICAgIG5hbWU6IFwiTWVudVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9uYXZpZ2F0aW9uL3BhZ2luYXRpb25cIixcbiAgICAgICAgbmFtZTogXCJQYWdpbmF0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL25hdmlnYXRpb24vc3RlcHNcIixcbiAgICAgICAgbmFtZTogXCJTdGVwc1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEYXRhIGVudHJ5XCIsXG4gICAgaWNvbjogPEVkaXRUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9hdXRvY29tcGxldGVcIixcbiAgICAgICAgbmFtZTogXCJBdXRvQ29tcGxldGVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9jaGVja2JveFwiLFxuICAgICAgICBuYW1lOiBcIkNoZWNrYm94XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvY2FzY2FkZXJcIixcbiAgICAgICAgbmFtZTogXCJDYXNjYWRlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L2RhdGVwaWNrZXJcIixcbiAgICAgICAgbmFtZTogXCJEYXRlIHBpY2tlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L2Zvcm1cIixcbiAgICAgICAgbmFtZTogXCJmb3JtXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvaW5wdXRudW1iZXJcIixcbiAgICAgICAgbmFtZTogXCJJbnB1dCBudW1iZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9pbnB1dFwiLFxuICAgICAgICBuYW1lOiBcIklucHV0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvbWVudGlvblwiLFxuICAgICAgICBuYW1lOiBcIk1lbnRpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9yYXRlXCIsXG4gICAgICAgIG5hbWU6IFwiUmF0ZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L3JhZGlvXCIsXG4gICAgICAgIG5hbWU6IFwiUmFkaW9cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9zd2l0Y2hcIixcbiAgICAgICAgbmFtZTogXCJTd2l0Y2hcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9zbGlkZXJcIixcbiAgICAgICAgbmFtZTogXCJTbGlkZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9zZWxlY3RcIixcbiAgICAgICAgbmFtZTogXCJTZWxlY3RcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS90cmVlc2VsZWN0XCIsXG4gICAgICAgIG5hbWU6IFwiVHJlZSBzZWxlY3RcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS90cmFuc2ZlclwiLFxuICAgICAgICBuYW1lOiBcIlRyYW5zZmVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvdGltZXBpY2tlclwiLFxuICAgICAgICBuYW1lOiBcIlRpbWUgcGlja2VyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvdXBsb2FkXCIsXG4gICAgICAgIG5hbWU6IFwiVXBsb2FkXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRhdGEgZGlzcGxheVwiLFxuICAgIGljb246IDxEaWZmVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS9hdmF0YXJcIixcbiAgICAgICAgbmFtZTogXCJBdmF0YXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L2JhZGdlXCIsXG4gICAgICAgIG5hbWU6IFwiQmFkZ2VcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L2NvbGxhcHNlXCIsXG4gICAgICAgIG5hbWU6IFwiQ29sbGFwc2VcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L2Nhcm91c2VsXCIsXG4gICAgICAgIG5hbWU6IFwiQ2Fyb3VzZWxcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L2NhcmRcIixcbiAgICAgICAgbmFtZTogXCJDYXJkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS9jYWxlbmRhclwiLFxuICAgICAgICBuYW1lOiBcIkNhbGVuZGFyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS9saXN0XCIsXG4gICAgICAgIG5hbWU6IFwiTGlzdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvcG9wb3ZlclwiLFxuICAgICAgICBuYW1lOiBcIlBvcG92ZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L3RyZWVcIixcbiAgICAgICAgbmFtZTogXCJUcmVlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS90b29sdGlwXCIsXG4gICAgICAgIG5hbWU6IFwiVG9vbHRpcFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvdGltZWxpbmVcIixcbiAgICAgICAgbmFtZTogXCJUaW1lbGluZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvdGFnXCIsXG4gICAgICAgIG5hbWU6IFwiVGFnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS90YWJzXCIsXG4gICAgICAgIG5hbWU6IFwiVGFic1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvdGFibGVcIixcbiAgICAgICAgbmFtZTogXCJUYWJsZVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGZWVkYmFja1wiLFxuICAgIGljb246IDxBbGVydFR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9mZWVkYmFjay9hbGVydFwiLFxuICAgICAgICBuYW1lOiBcIkFsZXJ0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2ZlZWRiYWNrL2RyYXdlclwiLFxuICAgICAgICBuYW1lOiBcIkRyYXdlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9mZWVkYmFjay9tb2RhbFwiLFxuICAgICAgICBuYW1lOiBcIk1vZGFsXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2ZlZWRiYWNrL21lc3NhZ2VcIixcbiAgICAgICAgbmFtZTogXCJNZXNzYWdlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2ZlZWRiYWNrL25vdGlmaWNhdGlvblwiLFxuICAgICAgICBuYW1lOiBcIk5vdGlmaWNhdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9mZWVkYmFjay9wcm9ncmVzc1wiLFxuICAgICAgICBuYW1lOiBcIlByb2dyZXNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2ZlZWRiYWNrL3BvcGNvbmZpcm1cIixcbiAgICAgICAgbmFtZTogXCJQb3AgY29uZmlybVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9mZWVkYmFjay9zcGluXCIsXG4gICAgICAgIG5hbWU6IFwiU3BpblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9mZWVkYmFjay9za2VsZXRvblwiLFxuICAgICAgICBuYW1lOiBcIlNrZWxldG9uXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi8vb25lLXJlYWRtZS5mdXNlcHguY29tXCIsXG4gICAgbmFtZTogXCJEb2N1bWVudGF0aW9uXCIsXG4gICAgaWNvbjogPFF1ZXN0aW9uQ2lyY2xlVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+XG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi8vbnlhc2hhLm1lXCIsXG4gICAgbmFtZTogXCJCcm93c2UgbW9yZSB0ZW1wbGF0ZXNcIixcbiAgICBpY29uOiA8RmlyZVR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPlxuICB9XG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==