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
  name: "Integrations",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ShoppingTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
  name: "Apps",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ShoppingTwoTone"], {
    style: {
      fontSize: '16px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
    lineNumber: 56,
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
    lineNumber: 64,
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
    lineNumber: 71,
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
    lineNumber: 113,
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
    lineNumber: 127,
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
    lineNumber: 141,
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
    lineNumber: 163,
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
    lineNumber: 185,
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
    lineNumber: 199,
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
    lineNumber: 213,
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
    lineNumber: 239,
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
    lineNumber: 313,
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
    lineNumber: 375,
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
    lineNumber: 418,
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
    lineNumber: 423,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJwYXRoIiwibmFtZSIsImljb24iLCJmb250U2l6ZSIsImNoaWxkcmVuIiwiYmFkZ2UiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsZ0VBQ2I7QUFDRUEsTUFBSSxFQUFFLEdBRFI7QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsTUFBSSxlQUFFLHFFQUFDLDZEQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixDQURhLEVBTWI7QUFDRUYsTUFBSSxFQUFFLGNBRFI7QUFFRUMsTUFBSSxlQUFFLHFFQUFDLGlFQUFEO0FBQWlCLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRlI7QUFHRUMsVUFBUSxFQUFFLENBQ1I7QUFDRUosUUFBSSxFQUFFLGdCQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBRFEsRUFLUjtBQUNFRCxRQUFJLEVBQUUsZ0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FMUSxFQVNSO0FBQ0VELFFBQUksRUFBRSxjQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBVFEsRUFhUjtBQUNFRCxRQUFJLEVBQUUsWUFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWJRO0FBSFosQ0FOYSxFQTRCYjtBQUNFQSxNQUFJLEVBQUUsTUFEUjtBQUVFQyxNQUFJLGVBQUUscUVBQUMsaUVBQUQ7QUFBaUIsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUjtBQUdFQyxVQUFRLEVBQUUsQ0FDUjtBQUNFSixRQUFJLEVBQUUsZ0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEUSxFQUtSO0FBQ0VELFFBQUksRUFBRSxnQkFEUjtBQUVFQyxRQUFJ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QUEsZUFGUjtBQUdFQyxVQUFRLEVBQUUsQ0FDUjtBQUNFSixRQUFJLEVBQUUsaUJBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEUSxFQUtSO0FBQ0VELFFBQUksRUFBRSxrQkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxRLEVBU1I7QUFDRUQsUUFBSSxFQUFFLGlCQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBVFEsRUFhUjtBQUNFRCxRQUFJLEVBQUUsbUJBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FiUSxFQWlCUjtBQUNFRCxRQUFJLEVBQUUsd0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FqQlEsRUFxQlI7QUFDRUQsUUFBSSxFQUFFLG9CQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBckJRLEVBeUJSO0FBQ0VELFFBQUksRUFBRSxzQkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXpCUSxFQTZCUjtBQUNFRCxRQUFJLEVBQUUsZ0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0E3QlEsRUFpQ1I7QUFDRUQsUUFBSSxFQUFFLG9CQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBakNRO0FBSFosQ0FsWGEsRUE0WmI7QUFDRUQsTUFBSSxFQUFFLHlCQURSO0FBRUVDLE1BQUksRUFBRSxlQUZSO0FBR0VDLE1BQUksZUFBRSxxRUFBQyx1RUFBRDtBQUF1QixTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVo7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSLENBNVphLEVBaWFiO0FBQ0VILE1BQUksRUFBRSxhQURSO0FBRUVDLE1BQUksRUFBRSx1QkFGUjtBQUdFQyxNQUFJLGVBQUUscUVBQUMsNkRBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVo7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSLENBamFhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZjhiMDRmYjQwYTM2MzEzNzNhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxlcnRUd29Ub25lLCBDb21wYXNzVHdvVG9uZSwgQ3Jvd25Ud29Ub25lLCBEaWZmVHdvVG9uZSwgRWRpdFR3b1RvbmUsIEZpcmVUd29Ub25lLCBGb2xkZXJUd29Ub25lLCBIb21lVHdvVG9uZSwgTGF5b3V0VHdvVG9uZSwgUGljdHVyZVR3b1RvbmUsIFBpZUNoYXJ0VHdvVG9uZSwgUXVlc3Rpb25DaXJjbGVUd29Ub25lLCBTaG9wcGluZ1R3b1RvbmUsIFN3aXRjaGVyVHdvVG9uZSwgVW5sb2NrVHdvVG9uZSwgV2FybmluZ1R3b1RvbmUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgIGljb246IDxIb21lVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+XG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkludGVncmF0aW9uc1wiLFxuICAgIGljb246IDxTaG9wcGluZ1R3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9hcHBzL2NhbGVuZGFyXCIsXG4gICAgICAgIG5hbWU6IFwiQ2FsZW5kYXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvYXBwcy9tZXNzYWdlc1wiLFxuICAgICAgICBuYW1lOiBcIk1lc3NhZ2VzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2FwcHMvc29jaWFsXCIsXG4gICAgICAgIG5hbWU6IFwiU29jaWFsXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2FwcHMvY2hhdFwiLFxuICAgICAgICBuYW1lOiBcIkNoYXRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQXBwc1wiLFxuICAgIGljb246IDxTaG9wcGluZ1R3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9hcHBzL2NhbGVuZGFyXCIsXG4gICAgICAgIG5hbWU6IFwiQ2FsZW5kYXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvYXBwcy9tZXNzYWdlc1wiLFxuICAgICAgICBuYW1lOiBcIk1lc3NhZ2VzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2FwcHMvc29jaWFsXCIsXG4gICAgICAgIG5hbWU6IFwiU29jaWFsXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2FwcHMvY2hhdFwiLFxuICAgICAgICBuYW1lOiBcIkNoYXRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3dpZGdldHNcIixcbiAgICBuYW1lOiBcIldpZGdldHNcIixcbiAgICBpY29uOiA8RmlyZVR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBiYWRnZToge1xuICAgICAgdmFsdWU6IFwiNVwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvdGFza2JvYXJkXCIsXG4gICAgbmFtZTogXCJUYXNrYm9hcmRcIixcbiAgICBpY29uOiA8TGF5b3V0VHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGJhZGdlOiB7XG4gICAgICB2YWx1ZTogXCJOZXdcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ2hhcnRzXCIsXG4gICAgaWNvbjogPFBpZUNoYXJ0VHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NoYXJ0cy9wbG90c1wiLFxuICAgICAgICBuYW1lOiBcIlBsb3RzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NoYXJ0cy9heGVzXCIsXG4gICAgICAgIG5hbWU6IFwiQXhlc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9jaGFydHMvbGVnZW5kc1wiLFxuICAgICAgICBuYW1lOiBcIkxlZ2VuZHNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvY2hhcnRzL3N1bmJ1cnN0XCIsXG4gICAgICAgIG5hbWU6IFwiU3VuYnVyc3RcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvY2hhcnRzL3JhZGlhbFwiLFxuICAgICAgICBuYW1lOiBcIlJhZGlhbFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9jaGFydHMvc2Fua2V5c1wiLFxuICAgICAgICBuYW1lOiBcIlNhbmtleXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvY2hhcnRzL3RyZWVtYXBzXCIsXG4gICAgICAgIG5hbWU6IFwiVHJlZW1hcHNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvY2hhcnRzL3JhZGFyXCIsXG4gICAgICAgIG5hbWU6IFwiUmFkYXIgY2hhcnRzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NoYXJ0cy9taXNjXCIsXG4gICAgICAgIG5hbWU6IFwiTWlzY1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNZWRpYVwiLFxuICAgIGljb246IDxQaWN0dXJlVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL21lZGlhL2dyaWRcIixcbiAgICAgICAgbmFtZTogXCJHcmlkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL21lZGlhL3RpbGVcIixcbiAgICAgICAgbmFtZTogXCJUaWxlXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1hcHNcIixcbiAgICBpY29uOiA8Q29tcGFzc1R3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9tYXBzL21hcmtlcnNcIixcbiAgICAgICAgbmFtZTogXCJNYXJrZXJzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL21hcHMvZ2VvanNvblwiLFxuICAgICAgICBuYW1lOiBcIkdlbyBKU09OXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkV4dHJhc1wiLFxuICAgIGljb246IDxDcm93blR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9leHRyYXMvaW52b2ljZVwiLFxuICAgICAgICBuYW1lOiBcIkludm9pY2VcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZXh0cmFzL3RpbWVsaW5lXCIsXG4gICAgICAgIG5hbWU6IFwiVGltZWxpbmVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZXh0cmFzL2JsYW5rXCIsXG4gICAgICAgIG5hbWU6IFwiQmxhbmtcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZXh0cmFzL3ByaWNpbmdcIixcbiAgICAgICAgbmFtZTogXCJQcmljaW5nXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkF1dGhlbnRpY2F0aW9uXCIsXG4gICAgaWNvbjogPFVubG9ja1R3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9zaWduaW5cIixcbiAgICAgICAgbmFtZTogXCJTaWduaW5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvc2lnbnVwXCIsXG4gICAgICAgIG5hbWU6IFwiU2lnbnVwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2ZvcmdvdFwiLFxuICAgICAgICBuYW1lOiBcIkZvcmdvdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9sb2Nrc2NyZWVuXCIsXG4gICAgICAgIG5hbWU6IFwiTG9ja3NjcmVlblwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFcnJvclwiLFxuICAgIGljb246IDxXYXJuaW5nVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3RoaXNyb3V0ZWRvZXNudHdvcmtcIixcbiAgICAgICAgbmFtZTogXCI0MDRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvNTAwXCIsXG4gICAgICAgIG5hbWU6IFwiRXJyb3JcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR2VuZXJhbCBlbGVtZW50c1wiLFxuICAgIGljb246IDxGb2xkZXJUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZ2VuZXJhbC9idXR0b25cIixcbiAgICAgICAgbmFtZTogXCJCdXR0b25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZ2VuZXJhbC9pY29uXCIsXG4gICAgICAgIG5hbWU6IFwiSWNvblwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOYXZpZ2F0aW9uXCIsXG4gICAgaWNvbjogPFN3aXRjaGVyVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL25hdmlnYXRpb24vYnJlYWRjcnVtYlwiLFxuICAgICAgICBuYW1lOiBcIkJyZWFkY3J1bWJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbmF2aWdhdGlvbi9kcm9wZG93blwiLFxuICAgICAgICBuYW1lOiBcIkRyb3Bkb3duXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL25hdmlnYXRpb24vbWVudVwiLFxuICAgICAgICBuYW1lOiBcIk1lbnVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbmF2aWdhdGlvbi9wYWdpbmF0aW9uXCIsXG4gICAgICAgIG5hbWU6IFwiUGFnaW5hdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9uYXZpZ2F0aW9uL3N0ZXBzXCIsXG4gICAgICAgIG5hbWU6IFwiU3RlcHNcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGF0YSBlbnRyeVwiLFxuICAgIGljb246IDxFZGl0VHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvYXV0b2NvbXBsZXRlXCIsXG4gICAgICAgIG5hbWU6IFwiQXV0b0NvbXBsZXRlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvY2hlY2tib3hcIixcbiAgICAgICAgbmFtZTogXCJDaGVja2JveFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L2Nhc2NhZGVyXCIsXG4gICAgICAgIG5hbWU6IFwiQ2FzY2FkZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9kYXRlcGlja2VyXCIsXG4gICAgICAgIG5hbWU6IFwiRGF0ZSBwaWNrZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9mb3JtXCIsXG4gICAgICAgIG5hbWU6IFwiZm9ybVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L2lucHV0bnVtYmVyXCIsXG4gICAgICAgIG5hbWU6IFwiSW5wdXQgbnVtYmVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvaW5wdXRcIixcbiAgICAgICAgbmFtZTogXCJJbnB1dFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L21lbnRpb25cIixcbiAgICAgICAgbmFtZTogXCJNZW50aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvcmF0ZVwiLFxuICAgICAgICBuYW1lOiBcIlJhdGVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9yYWRpb1wiLFxuICAgICAgICBuYW1lOiBcIlJhZGlvXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvc3dpdGNoXCIsXG4gICAgICAgIG5hbWU6IFwiU3dpdGNoXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvc2xpZGVyXCIsXG4gICAgICAgIG5hbWU6IFwiU2xpZGVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvc2VsZWN0XCIsXG4gICAgICAgIG5hbWU6IFwiU2VsZWN0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvdHJlZXNlbGVjdFwiLFxuICAgICAgICBuYW1lOiBcIlRyZWUgc2VsZWN0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvdHJhbnNmZXJcIixcbiAgICAgICAgbmFtZTogXCJUcmFuc2ZlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L3RpbWVwaWNrZXJcIixcbiAgICAgICAgbmFtZTogXCJUaW1lIHBpY2tlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L3VwbG9hZFwiLFxuICAgICAgICBuYW1lOiBcIlVwbG9hZFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEYXRhIGRpc3BsYXlcIixcbiAgICBpY29uOiA8RGlmZlR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvYXZhdGFyXCIsXG4gICAgICAgIG5hbWU6IFwiQXZhdGFyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS9iYWRnZVwiLFxuICAgICAgICBuYW1lOiBcIkJhZGdlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS9jb2xsYXBzZVwiLFxuICAgICAgICBuYW1lOiBcIkNvbGxhcHNlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS9jYXJvdXNlbFwiLFxuICAgICAgICBuYW1lOiBcIkNhcm91c2VsXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS9jYXJkXCIsXG4gICAgICAgIG5hbWU6IFwiQ2FyZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvY2FsZW5kYXJcIixcbiAgICAgICAgbmFtZTogXCJDYWxlbmRhclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvbGlzdFwiLFxuICAgICAgICBuYW1lOiBcIkxpc3RcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L3BvcG92ZXJcIixcbiAgICAgICAgbmFtZTogXCJQb3BvdmVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS90cmVlXCIsXG4gICAgICAgIG5hbWU6IFwiVHJlZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvdG9vbHRpcFwiLFxuICAgICAgICBuYW1lOiBcIlRvb2x0aXBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L3RpbWVsaW5lXCIsXG4gICAgICAgIG5hbWU6IFwiVGltZWxpbmVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L3RhZ1wiLFxuICAgICAgICBuYW1lOiBcIlRhZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvdGFic1wiLFxuICAgICAgICBuYW1lOiBcIlRhYnNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L3RhYmxlXCIsXG4gICAgICAgIG5hbWU6IFwiVGFibGVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRmVlZGJhY2tcIixcbiAgICBpY29uOiA8QWxlcnRUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZmVlZGJhY2svYWxlcnRcIixcbiAgICAgICAgbmFtZTogXCJBbGVydFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9mZWVkYmFjay9kcmF3ZXJcIixcbiAgICAgICAgbmFtZTogXCJEcmF3ZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZmVlZGJhY2svbW9kYWxcIixcbiAgICAgICAgbmFtZTogXCJNb2RhbFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9mZWVkYmFjay9tZXNzYWdlXCIsXG4gICAgICAgIG5hbWU6IFwiTWVzc2FnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9mZWVkYmFjay9ub3RpZmljYXRpb25cIixcbiAgICAgICAgbmFtZTogXCJOb3RpZmljYXRpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZmVlZGJhY2svcHJvZ3Jlc3NcIixcbiAgICAgICAgbmFtZTogXCJQcm9ncmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9mZWVkYmFjay9wb3Bjb25maXJtXCIsXG4gICAgICAgIG5hbWU6IFwiUG9wIGNvbmZpcm1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZmVlZGJhY2svc3BpblwiLFxuICAgICAgICBuYW1lOiBcIlNwaW5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZmVlZGJhY2svc2tlbGV0b25cIixcbiAgICAgICAgbmFtZTogXCJTa2VsZXRvblwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvL29uZS1yZWFkbWUuZnVzZXB4LmNvbVwiLFxuICAgIG5hbWU6IFwiRG9jdW1lbnRhdGlvblwiLFxuICAgIGljb246IDxRdWVzdGlvbkNpcmNsZVR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPlxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvL255YXNoYS5tZVwiLFxuICAgIG5hbWU6IFwiQnJvd3NlIG1vcmUgdGVtcGxhdGVzXCIsXG4gICAgaWNvbjogPEZpcmVUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz5cbiAgfVxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=