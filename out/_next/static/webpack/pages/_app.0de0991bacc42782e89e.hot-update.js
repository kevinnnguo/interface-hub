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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJwYXRoIiwibmFtZSIsImljb24iLCJmb250U2l6ZSIsImNoaWxkcmVuIiwiYmFkZ2UiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsZ0VBQ2I7QUFDRUEsTUFBSSxFQUFFLEdBRFI7QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsTUFBSSxlQUFFLHFFQUFDLDZEQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixDQURhLEVBTWI7QUFDRUYsTUFBSSxFQUFFLGVBRFI7QUFFRUMsTUFBSSxlQUFFLHFFQUFDLDREQUFEO0FBQVksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUjtBQUdFQyxVQUFRLEVBQUUsQ0FDUjtBQUNFSixRQUFJLEVBQUUsZ0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEUSxFQUtSO0FBQ0VELFFBQUksRUFBRSxnQkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxRLEVBU1I7QUFDRUQsUUFBSSxFQUFFLGNBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUUSxFQWFSO0FBQ0VELFFBQUksRUFBRSxZQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBYlE7QUFIWixDQU5hLEVBNEJiO0FBQ0VBLE1BQUksRUFBRSxNQURSO0FBRUVDLE1BQUksZUFBRSxxRUFBQyxpRUFBRDtBQUFpQixTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVo7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZSO0FBR0VDLFVBQVEsRUFBRSxDQUNSO0FBQ0VKLFFBQUksRUFBRSxnQkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURRLEVBS1I7QUFDRUQsUUFBSSxFQUFFLGdCQURSO0FBRUVDLFFBQUks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QSxlQUZSO0FBR0VDLFVBQVEsRUFBRSxDQUNSO0FBQ0VKLFFBQUksRUFBRSxpQkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURRLEVBS1I7QUFDRUQsUUFBSSxFQUFFLGtCQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTFEsRUFTUjtBQUNFRCxRQUFJLEVBQUUsaUJBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUUSxFQWFSO0FBQ0VELFFBQUksRUFBRSxtQkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWJRLEVBaUJSO0FBQ0VELFFBQUksRUFBRSx3QkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWpCUSxFQXFCUjtBQUNFRCxRQUFJLEVBQUUsb0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FyQlEsRUF5QlI7QUFDRUQsUUFBSSxFQUFFLHNCQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBekJRLEVBNkJSO0FBQ0VELFFBQUksRUFBRSxnQkFEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQTdCUSxFQWlDUjtBQUNFRCxRQUFJLEVBQUUsb0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FqQ1E7QUFIWixDQWxYYSxFQTRaYjtBQUNFRCxNQUFJLEVBQUUseUJBRFI7QUFFRUMsTUFBSSxFQUFFLGVBRlI7QUFHRUMsTUFBSSxlQUFFLHFFQUFDLHVFQUFEO0FBQXVCLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsQ0E1WmEsRUFpYWI7QUFDRUgsTUFBSSxFQUFFLGFBRFI7QUFFRUMsTUFBSSxFQUFFLHVCQUZSO0FBR0VDLE1BQUksZUFBRSxxRUFBQyw2REFBRDtBQUFhLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsQ0FqYWEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBkZTA5OTFiYWNjNDI3ODJlODllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGVydFR3b1RvbmUsIENvbXBhc3NUd29Ub25lLCBDcm93blR3b1RvbmUsIERpZmZUd29Ub25lLCBFZGl0VHdvVG9uZSwgRmlyZVR3b1RvbmUsIEZvbGRlclR3b1RvbmUsIEhvbWVUd29Ub25lLCBMYXlvdXRUd29Ub25lLCBQaWN0dXJlVHdvVG9uZSwgUGllQ2hhcnRUd29Ub25lLCBRdWVzdGlvbkNpcmNsZVR3b1RvbmUsIFNob3BwaW5nVHdvVG9uZSwgU3dpdGNoZXJUd29Ub25lLCBVbmxvY2tUd29Ub25lLCBXYXJuaW5nVHdvVG9uZSwgQXBpVHdvVG9uZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgbmFtZTogXCJIb21lXCIsXG4gICAgaWNvbjogPEhvbWVUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz5cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWFya2V0IFBsYWNlc1wiLFxuICAgIGljb246IDxBcGlUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvYXBwcy9jYWxlbmRhclwiLFxuICAgICAgICBuYW1lOiBcIkNhbGVuZGFyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2FwcHMvbWVzc2FnZXNcIixcbiAgICAgICAgbmFtZTogXCJNZXNzYWdlc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9hcHBzL3NvY2lhbFwiLFxuICAgICAgICBuYW1lOiBcIlNvY2lhbFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9hcHBzL2NoYXRcIixcbiAgICAgICAgbmFtZTogXCJDaGF0XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFwcHNcIixcbiAgICBpY29uOiA8U2hvcHBpbmdUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvYXBwcy9jYWxlbmRhclwiLFxuICAgICAgICBuYW1lOiBcIkNhbGVuZGFyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2FwcHMvbWVzc2FnZXNcIixcbiAgICAgICAgbmFtZTogXCJNZXNzYWdlc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9hcHBzL3NvY2lhbFwiLFxuICAgICAgICBuYW1lOiBcIlNvY2lhbFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9hcHBzL2NoYXRcIixcbiAgICAgICAgbmFtZTogXCJDaGF0XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi93aWRnZXRzXCIsXG4gICAgbmFtZTogXCJXaWRnZXRzXCIsXG4gICAgaWNvbjogPEZpcmVUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgYmFkZ2U6IHtcbiAgICAgIHZhbHVlOiBcIjVcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Rhc2tib2FyZFwiLFxuICAgIG5hbWU6IFwiVGFza2JvYXJkXCIsXG4gICAgaWNvbjogPExheW91dFR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBiYWRnZToge1xuICAgICAgdmFsdWU6IFwiTmV3XCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNoYXJ0c1wiLFxuICAgIGljb246IDxQaWVDaGFydFR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9jaGFydHMvcGxvdHNcIixcbiAgICAgICAgbmFtZTogXCJQbG90c1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9jaGFydHMvYXhlc1wiLFxuICAgICAgICBuYW1lOiBcIkF4ZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvY2hhcnRzL2xlZ2VuZHNcIixcbiAgICAgICAgbmFtZTogXCJMZWdlbmRzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NoYXJ0cy9zdW5idXJzdFwiLFxuICAgICAgICBuYW1lOiBcIlN1bmJ1cnN0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NoYXJ0cy9yYWRpYWxcIixcbiAgICAgICAgbmFtZTogXCJSYWRpYWxcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvY2hhcnRzL3NhbmtleXNcIixcbiAgICAgICAgbmFtZTogXCJTYW5rZXlzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NoYXJ0cy90cmVlbWFwc1wiLFxuICAgICAgICBuYW1lOiBcIlRyZWVtYXBzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NoYXJ0cy9yYWRhclwiLFxuICAgICAgICBuYW1lOiBcIlJhZGFyIGNoYXJ0c1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9jaGFydHMvbWlzY1wiLFxuICAgICAgICBuYW1lOiBcIk1pc2NcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWVkaWFcIixcbiAgICBpY29uOiA8UGljdHVyZVR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9tZWRpYS9ncmlkXCIsXG4gICAgICAgIG5hbWU6IFwiR3JpZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9tZWRpYS90aWxlXCIsXG4gICAgICAgIG5hbWU6IFwiVGlsZVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNYXBzXCIsXG4gICAgaWNvbjogPENvbXBhc3NUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbWFwcy9tYXJrZXJzXCIsXG4gICAgICAgIG5hbWU6IFwiTWFya2Vyc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9tYXBzL2dlb2pzb25cIixcbiAgICAgICAgbmFtZTogXCJHZW8gSlNPTlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFeHRyYXNcIixcbiAgICBpY29uOiA8Q3Jvd25Ud29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZXh0cmFzL2ludm9pY2VcIixcbiAgICAgICAgbmFtZTogXCJJbnZvaWNlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2V4dHJhcy90aW1lbGluZVwiLFxuICAgICAgICBuYW1lOiBcIlRpbWVsaW5lXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2V4dHJhcy9ibGFua1wiLFxuICAgICAgICBuYW1lOiBcIkJsYW5rXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2V4dHJhcy9wcmljaW5nXCIsXG4gICAgICAgIG5hbWU6IFwiUHJpY2luZ1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBdXRoZW50aWNhdGlvblwiLFxuICAgIGljb246IDxVbmxvY2tUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvc2lnbmluXCIsXG4gICAgICAgIG5hbWU6IFwiU2lnbmluXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3NpZ251cFwiLFxuICAgICAgICBuYW1lOiBcIlNpZ251cFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9mb3Jnb3RcIixcbiAgICAgICAgbmFtZTogXCJGb3Jnb3RcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbG9ja3NjcmVlblwiLFxuICAgICAgICBuYW1lOiBcIkxvY2tzY3JlZW5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRXJyb3JcIixcbiAgICBpY29uOiA8V2FybmluZ1R3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi90aGlzcm91dGVkb2VzbnR3b3JrXCIsXG4gICAgICAgIG5hbWU6IFwiNDA0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiLzUwMFwiLFxuICAgICAgICBuYW1lOiBcIkVycm9yXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdlbmVyYWwgZWxlbWVudHNcIixcbiAgICBpY29uOiA8Rm9sZGVyVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2dlbmVyYWwvYnV0dG9uXCIsXG4gICAgICAgIG5hbWU6IFwiQnV0dG9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2dlbmVyYWwvaWNvblwiLFxuICAgICAgICBuYW1lOiBcIkljb25cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTmF2aWdhdGlvblwiLFxuICAgIGljb246IDxTd2l0Y2hlclR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9uYXZpZ2F0aW9uL2JyZWFkY3J1bWJcIixcbiAgICAgICAgbmFtZTogXCJCcmVhZGNydW1iXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL25hdmlnYXRpb24vZHJvcGRvd25cIixcbiAgICAgICAgbmFtZTogXCJEcm9wZG93blwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9uYXZpZ2F0aW9uL21lbnVcIixcbiAgICAgICAgbmFtZTogXCJNZW51XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL25hdmlnYXRpb24vcGFnaW5hdGlvblwiLFxuICAgICAgICBuYW1lOiBcIlBhZ2luYXRpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbmF2aWdhdGlvbi9zdGVwc1wiLFxuICAgICAgICBuYW1lOiBcIlN0ZXBzXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRhdGEgZW50cnlcIixcbiAgICBpY29uOiA8RWRpdFR3b1RvbmUgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fSAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L2F1dG9jb21wbGV0ZVwiLFxuICAgICAgICBuYW1lOiBcIkF1dG9Db21wbGV0ZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L2NoZWNrYm94XCIsXG4gICAgICAgIG5hbWU6IFwiQ2hlY2tib3hcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9jYXNjYWRlclwiLFxuICAgICAgICBuYW1lOiBcIkNhc2NhZGVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvZGF0ZXBpY2tlclwiLFxuICAgICAgICBuYW1lOiBcIkRhdGUgcGlja2VyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvZm9ybVwiLFxuICAgICAgICBuYW1lOiBcImZvcm1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9pbnB1dG51bWJlclwiLFxuICAgICAgICBuYW1lOiBcIklucHV0IG51bWJlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L2lucHV0XCIsXG4gICAgICAgIG5hbWU6IFwiSW5wdXRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS9tZW50aW9uXCIsXG4gICAgICAgIG5hbWU6IFwiTWVudGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L3JhdGVcIixcbiAgICAgICAgbmFtZTogXCJSYXRlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZW50cnkvcmFkaW9cIixcbiAgICAgICAgbmFtZTogXCJSYWRpb1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L3N3aXRjaFwiLFxuICAgICAgICBuYW1lOiBcIlN3aXRjaFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L3NsaWRlclwiLFxuICAgICAgICBuYW1lOiBcIlNsaWRlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L3NlbGVjdFwiLFxuICAgICAgICBuYW1lOiBcIlNlbGVjdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L3RyZWVzZWxlY3RcIixcbiAgICAgICAgbmFtZTogXCJUcmVlIHNlbGVjdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWVudHJ5L3RyYW5zZmVyXCIsXG4gICAgICAgIG5hbWU6IFwiVHJhbnNmZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS90aW1lcGlja2VyXCIsXG4gICAgICAgIG5hbWU6IFwiVGltZSBwaWNrZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1lbnRyeS91cGxvYWRcIixcbiAgICAgICAgbmFtZTogXCJVcGxvYWRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGF0YSBkaXNwbGF5XCIsXG4gICAgaWNvbjogPERpZmZUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L2F2YXRhclwiLFxuICAgICAgICBuYW1lOiBcIkF2YXRhclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvYmFkZ2VcIixcbiAgICAgICAgbmFtZTogXCJCYWRnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvY29sbGFwc2VcIixcbiAgICAgICAgbmFtZTogXCJDb2xsYXBzZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvY2Fyb3VzZWxcIixcbiAgICAgICAgbmFtZTogXCJDYXJvdXNlbFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvY2FyZFwiLFxuICAgICAgICBuYW1lOiBcIkNhcmRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L2NhbGVuZGFyXCIsXG4gICAgICAgIG5hbWU6IFwiQ2FsZW5kYXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L2xpc3RcIixcbiAgICAgICAgbmFtZTogXCJMaXN0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS9wb3BvdmVyXCIsXG4gICAgICAgIG5hbWU6IFwiUG9wb3ZlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kYXRhLWRpc3BsYXkvdHJlZVwiLFxuICAgICAgICBuYW1lOiBcIlRyZWVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L3Rvb2x0aXBcIixcbiAgICAgICAgbmFtZTogXCJUb29sdGlwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS90aW1lbGluZVwiLFxuICAgICAgICBuYW1lOiBcIlRpbWVsaW5lXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS90YWdcIixcbiAgICAgICAgbmFtZTogXCJUYWdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGF0YS1kaXNwbGF5L3RhYnNcIixcbiAgICAgICAgbmFtZTogXCJUYWJzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2RhdGEtZGlzcGxheS90YWJsZVwiLFxuICAgICAgICBuYW1lOiBcIlRhYmxlXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZlZWRiYWNrXCIsXG4gICAgaWNvbjogPEFsZXJ0VHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2ZlZWRiYWNrL2FsZXJ0XCIsXG4gICAgICAgIG5hbWU6IFwiQWxlcnRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZmVlZGJhY2svZHJhd2VyXCIsXG4gICAgICAgIG5hbWU6IFwiRHJhd2VyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2ZlZWRiYWNrL21vZGFsXCIsXG4gICAgICAgIG5hbWU6IFwiTW9kYWxcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZmVlZGJhY2svbWVzc2FnZVwiLFxuICAgICAgICBuYW1lOiBcIk1lc3NhZ2VcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZmVlZGJhY2svbm90aWZpY2F0aW9uXCIsXG4gICAgICAgIG5hbWU6IFwiTm90aWZpY2F0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2ZlZWRiYWNrL3Byb2dyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwiUHJvZ3Jlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZmVlZGJhY2svcG9wY29uZmlybVwiLFxuICAgICAgICBuYW1lOiBcIlBvcCBjb25maXJtXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2ZlZWRiYWNrL3NwaW5cIixcbiAgICAgICAgbmFtZTogXCJTcGluXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2ZlZWRiYWNrL3NrZWxldG9uXCIsXG4gICAgICAgIG5hbWU6IFwiU2tlbGV0b25cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiLy9vbmUtcmVhZG1lLmZ1c2VweC5jb21cIixcbiAgICBuYW1lOiBcIkRvY3VtZW50YXRpb25cIixcbiAgICBpY29uOiA8UXVlc3Rpb25DaXJjbGVUd29Ub25lIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0gLz5cbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiLy9ueWFzaGEubWVcIixcbiAgICBuYW1lOiBcIkJyb3dzZSBtb3JlIHRlbXBsYXRlc1wiLFxuICAgIGljb246IDxGaXJlVHdvVG9uZSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19IC8+XG4gIH1cbl07XG4iXSwic291cmNlUm9vdCI6IiJ9