webpackHotUpdate_N_E("pages/_error",{

/***/ "./components/NotFound.js":
/*!********************************!*\
  !*** ./components/NotFound.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_AnimatedBG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/AnimatedBG */ "./components/styles/AnimatedBG.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http-status */ "./node_modules/http-status/lib/index.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "D:\\WebSolutions\\interface-hub\\template\\components\\NotFound.js",
    _this = undefined;




var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NotFound__Content",
  componentId: "sc-m3gxly-0"
})(["max-width:400px;z-index:2;min-width:300px;h1{font-size:10rem;}"]);
_c = Content;

var NotFound = function NotFound(_ref) {
  var code = _ref.code;
  var title = code === 404 ? 'This page could not be found' : http_status__WEBPACK_IMPORTED_MODULE_4___default.a[code] || 'An unexpected error has occurred';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "flex",
    align: "middle",
    justify: "center",
    className: "bg-white text-center",
    style: {
      minHeight: '100vh'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_AnimatedBG__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {}, item, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Content, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyledH, {
        className: "".concat(code === 404 ? 'text-warning' : 'text-error', " mb-0"),
        children: code
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
        className: "mb-1 mt-1 text-body",
        children: [title, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_c2 = NotFound;
/* harmony default export */ __webpack_exports__["default"] = (NotFound);

var _StyledH = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])("h1").withConfig({
  displayName: "NotFound___StyledH",
  componentId: "sc-m3gxly-1"
})(["font-weight:900;"]);

var _c, _c2;

$RefreshReg$(_c, "Content");
$RefreshReg$(_c2, "NotFound");

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

/***/ }),

/***/ "./components/styles/AnimatedBG.js":
/*!*****************************************!*\
  !*** ./components/styles/AnimatedBG.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var AnimatedBG = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AnimatedBG",
  componentId: "sc-n8w0g8-0"
})(["position:absolute;width:100vw;height:100vh;top:0;left:0;z-index:1;overflow:hidden;span{position:absolute;display:block;width:20px;height:20px;background:rgba(0,0,0,0.04);animation:spin 50s linear infinite;bottom:-120px;}span:nth-child(1){left:10%;width:60px;height:60px;animation-delay:50s;}span:nth-child(2){left:20%;width:30px;height:30px;animation-delay:2s;animation-duration:40s;}span:nth-child(3){left:30%;width:40px;height:40px;animation-delay:30s;}span:nth-child(4){left:40%;width:60px;height:60px;animation-delay:0s;animation-duration:20s;}span:nth-child(5){left:50%;width:30px;height:30px;animation-delay:10s;}span:nth-child(6){left:60%;width:100px;height:100px;animation-delay:0s;}span:nth-child(7){left:70%;width:120px;height:120px;animation-delay:10s;}span:nth-child(8){left:80%;width:30px;height:30px;animation-delay:20s;animation-duration:40s;}span:nth-child(9){left:90%;width:20px;height:20px;animation-delay:30s;animation-duration:30s;}@keyframes spin{0%{transform:translateY(0) rotate(0deg);opacity:1;}100%{transform:translateY(-1000px) rotate(720deg);opacity:0;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (AnimatedBG);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/http-status/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/http-status/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 2.5.1
// # node-http-status

// **Reference:**  

// - https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
// - https://tools.ietf.org/html/rfc2324#section-2.3.2

// ## Classes

// The first digit of the status-code defines the class of response. The last two digits do not have any categorization role. There are five values for the first digit:
var classes;

classes = {
  // 1xx - The 1xx (Informational) class of status code indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.
  '1xx': 'Informational',
  '1xx_NAME': 'INFORMATIONAL',
  '1xx_MESSAGE': 'Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.',
  INFORMATIONAL: '1xx',
  // 2xx - The 2xx (Successful) class of status code indicates that the client's request was successfully received, understood, and accepted.
  '2xx': 'Successful',
  '2xx_NAME': 'SUCCESSFUL',
  '2xx_MESSAGE': 'Indicates that the client\'s request was successfully received, understood, and accepted.',
  SUCCESSFUL: '2xx',
  // 3xx - The 3xx (Redirection) class of status code indicates that further action needs to be taken by the user agent in order to fulfill the request.
  '3xx': 'Redirection',
  '3xx_NAME': 'REDIRECTION',
  '3xx_MESSAGE': 'Indicates that further action needs to be taken by the user agent in order to fulfill the request.',
  REDIRECTION: '3xx',
  // 4xx - The 4xx (Client Error) class of status code indicates that the client seems to have erred.
  '4xx': 'Client Error',
  '4xx_NAME': 'CLIENT_ERROR',
  '4xx_MESSAGE': 'Indicates that the client seems to have erred.',
  CLIENT_ERROR: '4xx',
  // 5xx - The 5xx (Server Error) class of status code indicates that the server is aware that it has erred or is incapable of performing the requested method.
  '5xx': 'Server Error',
  '5xx_NAME': 'SERVER_ERROR',
  '5xx_MESSAGE': 'Indicates that the server is aware that it has erred or is incapable of performing the requested method.',
  SERVER_ERROR: '5xx'
};

module.exports = {
  classes: classes,
  // ## Informational 1xx

  // Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.

  // 100 - The server has received the request headers and the client should proceed to send the request body.
  100: 'Continue',
  '100_NAME': 'CONTINUE',
  '100_MESSAGE': 'The server has received the request headers and the client should proceed to send the request body.',
  '100_CLASS': classes.INFORMATIONAL,
  CONTINUE: 100,
  // 101 - The requester has asked the server to switch protocols and the server has agreed to do so.
  101: 'Switching Protocols',
  '101_NAME': 'SWITCHING_PROTOCOLS',
  '101_MESSAGE': 'The requester has asked the server to switch protocols and the server has agreed to do so.',
  '101_CLASS': classes.INFORMATIONAL,
  SWITCHING_PROTOCOLS: 101,
  // 102 Processing (WebDAV; RFC 2518) - A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.
  102: 'Processing',
  '102_NAME': 'PROCESSING',
  '102_MESSAGE': 'A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.',
  '102_CLASS': classes.INFORMATIONAL,
  PROCESSING: 102,
  // 103 Early Hints (RFC 8297) - Used to return some response headers before final HTTP message.
  103: 'Early Hints',
  '103_NAME': 'EARLY_HINTS',
  '103_MESSAGE': 'Used to return some response headers before final HTTP message.',
  '103_CLASS': classes.INFORMATIONAL,
  EARLY_HINTS: 103,
  // ## Successful 2xx

  // Indicates that the client's request was successfully received, understood, and accepted.

  // 200 - Standard response for successful HTTP requests.
  200: 'OK',
  '200_NAME': 'OK',
  '200_MESSAGE': 'Standard response for successful HTTP requests.',
  '200_CLASS': classes.SUCCESSFUL,
  OK: 200,
  // 201 - The request has been fulfilled, resulting in the creation of a new resource.
  201: 'Created',
  '201_NAME': 'CREATED',
  '201_MESSAGE': 'The request has been fulfilled, resulting in the creation of a new resource.',
  '201_CLASS': classes.SUCCESSFUL,
  CREATED: 201,
  // 202 - The request has been accepted for processing, but the processing has not been completed.
  202: 'Accepted',
  '202_NAME': 'ACCEPTED',
  '202_MESSAGE': 'The request has been accepted for processing, but the processing has not been completed.',
  '202_CLASS': classes.SUCCESSFUL,
  ACCEPTED: 202,
  // 203 (since HTTP/1.1) - The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.
  203: 'Non-Authoritative Information',
  '203_NAME': 'NON_AUTHORITATIVE_INFORMATION',
  '203_MESSAGE': 'The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin\'s response.',
  '203_CLASS': classes.SUCCESSFUL,
  NON_AUTHORITATIVE_INFORMATION: 203,
  // 204 - The server successfully processed the request and is not returning any content.
  204: 'No Content',
  '204_NAME': 'NO_CONTENT',
  '204_MESSAGE': 'The server successfully processed the request and is not returning any content.',
  '204_CLASS': classes.SUCCESSFUL,
  NO_CONTENT: 204,
  // 205 - The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.
  205: 'Reset Content',
  '205_NAME': 'RESET_CONTENT',
  '205_MESSAGE': 'The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.',
  '205_CLASS': classes.SUCCESSFUL,
  RESET_CONTENT: 205,
  // 206 (RFC 7233) - The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
  206: 'Partial Content',
  '206_NAME': 'PARTIAL_CONTENT',
  '206_MESSAGE': 'The server is delivering only part of the resource (byte serving) due to a range header sent by the client.',
  '206_CLASS': classes.SUCCESSFUL,
  PARTIAL_CONTENT: 206,
  // 207 (WebDAV; RFC 4918) - The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
  207: 'Multi Status',
  '207_NAME': 'MULTI_STATUS',
  '207_MESSAGE': 'The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.',
  '207_CLASS': classes.SUCCESSFUL,
  MULTI_STATUS: 207,
  // 208 (WebDAV; RFC 5842) - The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.
  208: 'Already Reported',
  '208_NAME': 'ALREADY_REPORTED',
  '208_MESSAGE': 'The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.',
  '208_CLASS': classes.SUCCESSFUL,
  ALREADY_REPORTED: 208,
  // 226 (RFC 3229) - The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
  226: 'IM Used',
  '226_NAME': 'IM_USED',
  '226_MESSAGE': 'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
  '226_CLASS': classes.SUCCESSFUL,
  IM_USED: 226,
  // ## Redirection 3xx

  // Indicates that further action needs to be taken by the user agent in order to fulfill the request.

  // 300 - Indicates multiple options for the resource from which the client may choose.
  300: 'Multiple Choices',
  '300_NAME': 'MULTIPLE_CHOICES',
  '300_MESSAGE': 'Indicates multiple options for the resource from which the client may choose.',
  '300_CLASS': classes.REDIRECTION,
  MULTIPLE_CHOICES: 300,
  // 301 - This and all future requests should be directed to the given URI.
  301: 'Moved Permanently',
  '301_NAME': 'MOVED_PERMANENTLY',
  '301_MESSAGE': 'This and all future requests should be directed to the given URI.',
  '301_CLASS': classes.REDIRECTION,
  MOVED_PERMANENTLY: 301,
  // 302 - This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.
  302: 'Found',
  '302_NAME': 'FOUND',
  '302_MESSAGE': 'This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.',
  '302_CLASS': classes.REDIRECTION,
  FOUND: 302,
  // 303 (since HTTP/1.1) - The response to the request can be found under another URI using the GET method.
  303: 'See Other',
  '303_NAME': 'SEE_OTHER',
  '303_MESSAGE': 'The response to the request can be found under another URI using the GET method.',
  '303_CLASS': classes.REDIRECTION,
  SEE_OTHER: 303,
  // 304 (RFC 7232) - Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
  304: 'Not Modified',
  '304_NAME': 'NOT_MODIFIED',
  '304_MESSAGE': 'Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.',
  '304_CLASS': classes.REDIRECTION,
  NOT_MODIFIED: 304,
  // 305 (since HTTP/1.1) - The requested resource is available only through a proxy, the address for which is provided in the response.
  305: 'Use Proxy',
  '305_NAME': 'USE_PROXY',
  '305_MESSAGE': 'The requested resource is available only through a proxy, the address for which is provided in the response.',
  '305_CLASS': classes.REDIRECTION,
  USE_PROXY: 305,
  // 306 - No longer used. Originally meant "Subsequent requests should use the specified proxy.
  306: 'Switch Proxy',
  '306_NAME': 'SWITCH_PROXY',
  '306_MESSAGE': 'No longer used. Originally meant "Subsequent requests should use the specified proxy.',
  '306_CLASS': classes.REDIRECTION,
  SWITCH_PROXY: 306,
  // 307 (since HTTP/1.1) - In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
  307: 'Temporary Redirect',
  '307_NAME': 'TEMPORARY_REDIRECT',
  '307_MESSAGE': 'In this case, the request should be repeated with another URI; however, future requests should still use the original URI.',
  '307_CLASS': classes.REDIRECTION,
  TEMPORARY_REDIRECT: 307,
  // 308 (RFC 7538) - The request and all future requests should be repeated using another URI.
  308: 'Permanent Redirect',
  '308_NAME': 'PERMANENT_REDIRECT',
  '308_MESSAGE': 'The request and all future requests should be repeated using another URI.',
  '308_CLASS': classes.REDIRECTION,
  PERMANENT_REDIRECT: 308,
  // ## Client Error 4xx

  // Indicates that the client seems to have erred.

  // 400 - The server cannot or will not process the request due to an apparent client error.
  400: 'Bad Request',
  '400_NAME': 'BAD_REQUEST',
  '400_MESSAGE': 'The server cannot or will not process the request due to an apparent client error.',
  '400_CLASS': classes.CLIENT_ERROR,
  BAD_REQUEST: 400,
  // 401 (RFC 7235) - Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.
  401: 'Unauthorized',
  '401_NAME': 'UNAUTHORIZED',
  '401_MESSAGE': 'Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.',
  '401_CLASS': classes.CLIENT_ERROR,
  UNAUTHORIZED: 401,
  // 402 - Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.
  402: 'Payment Required',
  '402_NAME': 'PAYMENT_REQUIRED',
  '402_MESSAGE': 'Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.',
  '402_CLASS': classes.CLIENT_ERROR,
  PAYMENT_REQUIRED: 402,
  // 403 - The request was valid, but the server is refusing action.
  403: 'Forbidden',
  '403_NAME': 'FORBIDDEN',
  '403_MESSAGE': 'The request was valid, but the server is refusing action.',
  '403_CLASS': classes.CLIENT_ERROR,
  FORBIDDEN: 403,
  // 404 - The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
  404: 'Not Found',
  '404_NAME': 'NOT_FOUND',
  '404_MESSAGE': 'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
  '404_CLASS': classes.CLIENT_ERROR,
  NOT_FOUND: 404,
  // 405 - A request method is not supported for the requested resource.
  405: 'Method Not Allowed',
  '405_NAME': 'METHOD_NOT_ALLOWED',
  '405_MESSAGE': 'A request method is not supported for the requested resource.',
  '405_CLASS': classes.CLIENT_ERROR,
  METHOD_NOT_ALLOWED: 405,
  // 406 - The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
  406: 'Not Acceptable',
  '406_NAME': 'NOT_ACCEPTABLE',
  '406_MESSAGE': 'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',
  '406_CLASS': classes.CLIENT_ERROR,
  NOT_ACCEPTABLE: 406,
  // 407 (RFC 7235) - The client must first authenticate itself with the proxy.
  407: 'Proxy Authentication Required',
  '407_NAME': 'PROXY_AUTHENTICATION_REQUIRED',
  '407_MESSAGE': 'The client must first authenticate itself with the proxy.',
  '407_CLASS': classes.CLIENT_ERROR,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  // 408 - The server timed out waiting for the request.
  408: 'Request Time-out',
  '408_NAME': 'REQUEST_TIMEOUT',
  '408_MESSAGE': 'The server timed out waiting for the request.',
  '408_CLASS': classes.CLIENT_ERROR,
  REQUEST_TIMEOUT: 408,
  // 409 - Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.
  409: 'Conflict',
  '409_NAME': 'CONFLICT',
  '409_MESSAGE': 'Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.',
  '409_CLASS': classes.CLIENT_ERROR,
  CONFLICT: 409,
  // 410 - Indicates that the resource requested is no longer available and will not be available again.
  410: 'Gone',
  '410_NAME': 'GONE',
  '410_MESSAGE': 'Indicates that the resource requested is no longer available and will not be available again.',
  '410_CLASS': classes.CLIENT_ERROR,
  GONE: 410,
  // 411 - The request did not specify the length of its content, which is required by the requested resource.
  411: 'Length Required',
  '411_NAME': 'LENGTH_REQUIRED',
  '411_MESSAGE': 'The request did not specify the length of its content, which is required by the requested resource.',
  '411_CLASS': classes.CLIENT_ERROR,
  LENGTH_REQUIRED: 411,
  // 412 (RFC 7232) - The server does not meet one of the preconditions that the requester put on the request.
  412: 'Precondition Failed',
  '412_NAME': 'PRECONDITION_FAILED',
  '412_MESSAGE': 'The server does not meet one of the preconditions that the requester put on the request.',
  '412_CLASS': classes.CLIENT_ERROR,
  PRECONDITION_FAILED: 412,
  // 413 (RFC 7231) - The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".
  413: 'Request Entity Too Large',
  '413_NAME': 'REQUEST_ENTITY_TOO_LARGE',
  '413_MESSAGE': 'The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".',
  '413_CLASS': classes.CLIENT_ERROR,
  REQUEST_ENTITY_TOO_LARGE: 413,
  // 414 (RFC 7231) - The URI provided was too long for the server to process.
  414: 'Request-URI Too Large',
  '414_NAME': 'REQUEST_URI_TOO_LONG',
  '414_MESSAGE': 'The URI provided was too long for the server to process.',
  '414_CLASS': classes.CLIENT_ERROR,
  REQUEST_URI_TOO_LONG: 414,
  // 415 - The request entity has a media type which the server or resource does not support.
  415: 'Unsupported Media Type',
  '415_NAME': 'UNSUPPORTED_MEDIA_TYPE',
  '415_MESSAGE': 'The request entity has a media type which the server or resource does not support.',
  '415_CLASS': classes.CLIENT_ERROR,
  UNSUPPORTED_MEDIA_TYPE: 415,
  // 416 (RFC 7233) - The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
  416: 'Requested Range not Satisfiable',
  '416_NAME': 'REQUESTED_RANGE_NOT_SATISFIABLE',
  '416_MESSAGE': 'The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.',
  '416_CLASS': classes.CLIENT_ERROR,
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  // 417 - The server cannot meet the requirements of the Expect request-header field.
  417: 'Expectation Failed',
  '417_NAME': 'EXPECTATION_FAILED',
  '417_MESSAGE': 'The server cannot meet the requirements of the Expect request-header field.',
  '417_CLASS': classes.CLIENT_ERROR,
  EXPECTATION_FAILED: 417,
  // 418 (RFC 2324, RFC 7168) - Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout. This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.
  418: 'I\'m a teapot',
  '418_NAME': 'IM_A_TEAPOT',
  '418_MESSAGE': 'Any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot". The resulting entity body MAY be short and stout.',
  '418_CLASS': classes.CLIENT_ERROR,
  IM_A_TEAPOT: 418,
  // 421 (RFC 7540) - The request was directed at a server that is not able to produce a response.
  421: 'Misdirected Request',
  '421_NAME': 'MISDIRECTED_REQUEST',
  '421_MESSAGE': 'The request was directed at a server that is not able to produce a response.',
  '421_CLASS': classes.CLIENT_ERROR,
  MISDIRECTED_REQUEST: 421,
  // 422 (WebDAV; RFC 4918) - The request was well-formed but was unable to be followed due to semantic errors.
  422: 'Unprocessable Entity',
  '422_NAME': 'UNPROCESSABLE_ENTITY',
  '422_MESSAGE': 'The request was well-formed but was unable to be followed due to semantic errors.',
  '422_CLASS': classes.CLIENT_ERROR,
  UNPROCESSABLE_ENTITY: 422,
  // 423 (WebDAV; RFC 4918) - The resource that is being accessed is locked.
  423: 'Locked',
  '423_NAME': 'LOCKED',
  '423_MESSAGE': 'The resource that is being accessed is locked.',
  '423_CLASS': classes.CLIENT_ERROR,
  LOCKED: 423,
  // 424 (WebDAV; RFC 4918) - The request failed because it depended on another request and that request failed.
  424: 'Failed Dependency',
  '424_NAME': 'FAILED_DEPENDENCY',
  '424_MESSAGE': 'The request failed because it depended on another request and that request failed.',
  '424_CLASS': classes.CLIENT_ERROR,
  FAILED_DEPENDENCY: 424,
  // 426 - The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
  426: 'Upgrade Required',
  '426_NAME': 'UPGRADE_REQUIRED',
  '426_MESSAGE': 'The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.',
  '426_CLASS': classes.CLIENT_ERROR,
  UPGRADE_REQUIRED: 426,
  // 428 (RFC 6585) - The origin server requires the request to be conditional.
  428: 'Precondition Required', // RFC 6585
  '428_NAME': 'PRECONDITION_REQUIRED',
  '428_MESSAGE': 'The origin server requires the request to be conditional.',
  '428_CLASS': classes.CLIENT_ERROR,
  PRECONDITION_REQUIRED: 428,
  // 429 (RFC 6585) - The user has sent too many requests in a given amount of time.
  429: 'Too Many Requests',
  '429_NAME': 'TOO_MANY_REQUESTS',
  '429_MESSAGE': 'The user has sent too many requests in a given amount of time.',
  '429_CLASS': classes.CLIENT_ERROR,
  TOO_MANY_REQUESTS: 429,
  // 431 (RFC 6585) - The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.
  431: 'Request Header Fields Too Large', // RFC 6585
  '431_NAME': 'REQUEST_HEADER_FIELDS_TOO_LARGE',
  '431_MESSAGE': 'The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.',
  '431_CLASS': classes.CLIENT_ERROR,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  // 451 (RFC 7725) - A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.
  451: 'Unavailable For Legal Reasons',
  '451_NAME': 'UNAVAILABLE_FOR_LEGAL_REASONS',
  '451_MESSAGE': 'A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.',
  '451_CLASS': classes.CLIENT_ERROR,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  // ## Server Error 5xx

  // Indicates that the server is aware that it has erred or is incapable of performing the requested method.

  // 500 - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
  500: 'Internal Server Error',
  '500_NAME': 'INTERNAL_SERVER_ERROR',
  '500_MESSAGE': 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.',
  '500_CLASS': classes.SERVER_ERROR,
  INTERNAL_SERVER_ERROR: 500,
  // 501 - The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.
  501: 'Not Implemented',
  '501_NAME': 'NOT_IMPLEMENTED',
  '501_MESSAGE': 'The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.',
  '501_CLASS': classes.SERVER_ERROR,
  NOT_IMPLEMENTED: 501,
  // 502 - The server was acting as a gateway or proxy and received an invalid response from the upstream server.
  502: 'Bad Gateway',
  '502_NAME': 'BAD_GATEWAY',
  '502_MESSAGE': 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
  '502_CLASS': classes.SERVER_ERROR,
  BAD_GATEWAY: 502,
  // 503 - The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
  503: 'Service Unavailable',
  '503_NAME': 'SERVICE_UNAVAILABLE',
  '503_MESSAGE': 'The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.',
  '503_CLASS': classes.SERVER_ERROR,
  SERVICE_UNAVAILABLE: 503,
  // 504 - The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
  504: 'Gateway Time-out',
  '504_NAME': 'GATEWAY_TIMEOUT',
  '504_MESSAGE': 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.',
  '504_CLASS': classes.SERVER_ERROR,
  GATEWAY_TIMEOUT: 504,
  // 505 - The server does not support the HTTP protocol version used in the request.
  505: 'HTTP Version not Supported',
  '505_NAME': 'HTTP_VERSION_NOT_SUPPORTED',
  '505_MESSAGE': 'The server does not support the HTTP protocol version used in the request.',
  '505_CLASS': classes.SERVER_ERROR,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  // 506 (RFC 2295) - Transparent content negotiation for the request results in a circular reference.
  506: 'Variant Also Negotiates',
  '506_NAME': 'VARIANT_ALSO_NEGOTIATES',
  '506_MESSAGE': 'Transparent content negotiation for the request results in a circular reference.',
  '506_CLASS': classes.SERVER_ERROR,
  VARIANT_ALSO_NEGOTIATES: 506,
  // 507 (WebDAV; RFC 4918) - The server is unable to store the representation needed to complete the request.
  507: 'Insufficient Storage',
  '507_NAME': 'INSUFFICIENT_STORAGE',
  '507_MESSAGE': 'The server is unable to store the representation needed to complete the request.',
  '507_CLASS': classes.SERVER_ERROR,
  INSUFFICIENT_STORAGE: 507,
  // 508 (WebDAV; RFC 5842) - The server detected an infinite loop while processing the request.
  508: 'Loop Detected',
  '508_NAME': 'LOOP_DETECTED',
  '508_MESSAGE': 'The server detected an infinite loop while processing the request.',
  '508_CLASS': classes.SERVER_ERROR,
  LOOP_DETECTED: 508,
  // 510 (RFC 2774) - Further extensions to the request are required for the server to fulfil it.
  510: 'Not Extended',
  '510_NAME': 'NOT_EXTENDED',
  '510_MESSAGE': 'Further extensions to the request are required for the server to fulfil it.',
  '510_CLASS': classes.SERVER_ERROR,
  NOT_EXTENDED: 510,
  // 511 (RFC 6585) - The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.
  511: 'Network Authentication Required',
  '511_NAME': 'NETWORK_AUTHENTICATION_REQUIRED',
  '511_MESSAGE': 'The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.',
  '511_CLASS': classes.SERVER_ERROR,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
  // ## Extra code

  // Extra HTTP code implemented by vendors and other specifications.
  extra: {
    // ### Unofficial codes

    // The following codes are not specified by any standard.
    unofficial: {
      // 103 - Used in the resumable requests proposal to resume aborted PUT or POST requests.
      103: 'Checkpoint',
      '103_NAME': 'CHECKPOINT',
      '103_MESSAGE': 'Used in the resumable requests proposal to resume aborted PUT or POST requests.',
      '103_CLASS': classes.INFORMATIONAL,
      CHECKPOINT: 103,
      // 419 Page Expired (Laravel Framework) - Used by the Laravel Framework when a CSRF Token is missing or expired.
      419: 'Page Expired',
      '419_NAME': 'PAGE_EXPIRED',
      '419_MESSAGE': 'Used by the Laravel Framework when a CSRF Token is missing or expired.',
      '419_CLASS': classes.CLIENT_ERROR,
      PAGE_EXPIRED: 419,
      // 218 This is fine (Apache Web Server) - Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.
      218: 'This is fine',
      '218_NAME': 'THIS_IS_FINE',
      '218_MESSAGE': 'Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.',
      '218_CLASS': classes.SUCCESSFUL,
      THIS_IS_FINE: 218,
      // 420 Enhance Your Calm (Twitter) - Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.
      420: 'Enhance Your Calm',
      '420_NAME': 'ENHANCE_YOUR_CALM',
      '420_MESSAGE': 'Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.',
      '420_CLASS': classes.CLIENT_ERROR,
      ENHANCE_YOUR_CALM: 420,
      // 450 Blocked by Windows Parental (Microsoft) - The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.
      450: 'Blocked by Windows Parental Controls',
      '450_NAME': 'BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS',
      '450_MESSAGE': 'The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.',
      '450_CLASS': classes.CLIENT_ERROR,
      BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450,
      // 498 Invalid Token (Esri) - Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.
      498: 'Invalid Token',
      '498_NAME': 'INVALID_TOKEN',
      '498_MESSAGE': 'Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.',
      '498_CLASS': classes.CLIENT_ERROR,
      INVALID_TOKEN: 498,
      // 499 Token Required (Esri) - Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.
      499: 'Token Required',
      '499_NAME': 'TOKEN_REQUIRED',
      '499_MESSAGE': 'Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.',
      '499_CLASS': classes.CLIENT_ERROR,
      TOKEN_REQUIRED: 499,
      // 509 Bandwidth Limit Exceeded (Apache Web Server/cPanel) - The server has exceeded the bandwidth specified by the server administrator.
      509: 'Bandwidth Limit Exceeded',
      '509_NAME': 'BANDWIDTH_LIMIT_EXCEEDED',
      '509_MESSAGE': 'The server has exceeded the bandwidth specified by the server administrator.',
      '509_CLASS': classes.SERVER_ERROR,
      BANDWIDTH_LIMIT_EXCEEDED: 509,
      // 530 Site is frozen - Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.
      530: 'Site is frozen',
      '530_NAME': 'SITE_IS_FROZEN',
      '530_MESSAGE': 'Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.',
      '530_CLASS': classes.SERVER_ERROR,
      SITE_IS_FROZEN: 530,
      // 598 (Informal convention) Network read timeout error - Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.
      598: 'Network read timeout error',
      '598_NAME': 'NETWORK_READ_TIMEOUT_ERROR',
      '598_MESSAGE': 'Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.',
      '598_CLASS': classes.SERVER_ERROR,
      NETWORK_READ_TIMEOUT_ERROR: 598
    },
    // ### Internet Information Services (IIS)

    // Microsoft's Internet Information Services (IIS) web server expands the 4xx error space to signal errors with the client's request.
    iis: {
      // 440 - The client's session has expired and must log in again.
      440: 'Login Time-out',
      '440_NAME': 'LOGIN_TIME_OUT',
      '440_MESSAGE': 'The client\'s session has expired and must log in again.',
      '440_CLASS': classes.CLIENT_ERROR,
      LOGIN_TIME_OUT: 440,
      // 449 - The server cannot honour the request because the user has not provided the required information.
      449: 'Retry With',
      '449_NAME': 'RETRY_WITH',
      '449_MESSAGE': 'The server cannot honour the request because the user has not provided the required information.',
      '449_CLASS': classes.CLIENT_ERROR,
      RETRY_WITH: 449,
      // 451 - Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users' mailbox.
      451: 'Redirect',
      '451_NAME': 'REDIRECT',
      '451_MESSAGE': 'Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users\' mailbox.',
      '451_CLASS': classes.CLIENT_ERROR,
      REDIRECT: 451
    },
    // ### NGINX

    // The NGINX web server software expands the 4xx error space to signal issues with the client's request.
    nginx: {
      // 444 - Used internally to instruct the server to return no information to the client and close the connection immediately.
      444: 'No Response',
      '444_NAME': 'NO_RESPONSE',
      '444_MESSAGE': 'Used internally to instruct the server to return no information to the client and close the connection immediately.',
      '444_CLASS': classes.CLIENT_ERROR,
      NO_RESPONSE: 444,
      // 494 - Client sent too large request or too long header line.
      494: 'Request header too large',
      '494_NAME': 'REQUEST_HEADER_TOO_LARGE',
      '494_MESSAGE': 'Client sent too large request or too long header line.',
      '494_CLASS': classes.CLIENT_ERROR,
      REQUEST_HEADER_TOO_LARGE: 494,
      // 495 - An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.
      495: 'SSL Certificate Error',
      '495_NAME': 'SSL_CERTIFICATE_ERROR',
      '495_MESSAGE': 'An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.',
      '495_CLASS': classes.CLIENT_ERROR,
      SSL_CERTIFICATE_ERROR: 495,
      // 496 - An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.
      496: 'SSL Certificate Required',
      '496_NAME': 'SSL_CERTIFICATE_REQUIRED',
      '496_MESSAGE': 'An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.',
      '496_CLASS': classes.CLIENT_ERROR,
      SSL_CERTIFICATE_REQUIRED: 496,
      // 497 - An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.
      497: 'HTTP Request Sent to HTTPS Port',
      '497_NAME': 'HTTP_REQUEST_SENT_TO_HTTPS_PORT',
      '497_MESSAGE': 'An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.',
      '497_CLASS': classes.CLIENT_ERROR,
      HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497,
      // 499 - Used when the client has closed the request before the server could send a response.
      499: 'Client Closed Request',
      '499_NAME': 'CLIENT_CLOSED_REQUEST',
      '499_MESSAGE': 'Used when the client has closed the request before the server could send a response.',
      '499_CLASS': classes.CLIENT_ERROR,
      CLIENT_CLOSED_REQUEST: 499
    },
    // ### Cloudflare

    // Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin server.
    cloudflare: {
      // 520 - The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.
      520: 'Unknown Error',
      '520_NAME': 'UNKNOWN_ERROR',
      '520_MESSAGE': 'The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.',
      '520_CLASS': classes.SERVER_ERROR,
      UNKNOWN_ERROR: 520,
      // 521 - The origin server has refused the connection from Cloudflare.
      521: 'Web Server Is Down',
      '521_NAME': 'WEB_SERVER_IS_DOWN',
      '521_MESSAGE': 'The origin server has refused the connection from Cloudflare.',
      '521_CLASS': classes.SERVER_ERROR,
      WEB_SERVER_IS_DOWN: 521,
      // 522 - Cloudflare could not negotiate a TCP handshake with the origin server.
      522: 'Connection Timed Out',
      '522_NAME': 'CONNECTION_TIMED_OUT',
      '522_MESSAGE': 'Cloudflare could not negotiate a TCP handshake with the origin server.',
      '522_CLASS': classes.SERVER_ERROR,
      CONNECTION_TIMED_OUT: 522,
      // 523 - Cloudflare could not reach the origin server.
      523: 'Origin Is Unreachable',
      '523_NAME': 'ORIGIN_IS_UNREACHABLE',
      '523_MESSAGE': 'Cloudflare could not reach the origin server.',
      '523_CLASS': classes.SERVER_ERROR,
      ORIGIN_IS_UNREACHABLE: 523,
      // 524 - Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.
      524: 'A Timeout Occurred',
      '524_NAME': 'A_TIMEOUT_OCCURRED',
      '524_MESSAGE': 'Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.',
      '524_CLASS': classes.SERVER_ERROR,
      A_TIMEOUT_OCCURRED: 524,
      // 525 - Cloudflare could not negotiate a SSL/TLS handshake with the origin server.
      525: 'SSL Handshake Failed',
      '525_NAME': 'SSL_HANDSHAKE_FAILED',
      '525_MESSAGE': 'Cloudflare could not negotiate a SSL/TLS handshake with the origin server.',
      '525_CLASS': classes.SERVER_ERROR,
      SSL_HANDSHAKE_FAILED: 525,
      // 526 - Cloudflare could not validate the SSL/TLS certificate that the origin server presented.
      526: 'Invalid SSL Certificate',
      '526_NAME': 'INVALID_SSL_CERTIFICATE',
      '526_MESSAGE': 'Cloudflare could not validate the SSL/TLS certificate that the origin server presented.',
      '526_CLASS': classes.SERVER_ERROR,
      INVALID_SSL_CERTIFICATE: 526,
      // 527 - Error 527 indicates that the request timed out or failed after the WAN connection had been established.
      527: 'Railgun Error',
      '527_NAME': 'RAILGUN_ERROR',
      '527_MESSAGE': 'Error 527 indicates that the request timed out or failed after the WAN connection had been established.',
      '527_CLASS': classes.SERVER_ERROR,
      RAILGUN_ERROR: 527
    }
  }
};


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5CWebSolutions%5Cinterface-hub%5Ctemplate%5Cpages%5C_error.js!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5CWebSolutions%5Cinterface-hub%5Ctemplate%5Cpages%5C_error.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NotFound */ "./components/NotFound.js");







var _jsxFileName = "D:\\WebSolutions\\interface-hub\\template\\pages\\_error.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Error = /*#__PURE__*/function (_Component) {
  Object(D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Error, _Component);

  var _super = _createSuper(Error);

  function Error() {
    Object(D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Error);

    return _super.apply(this, arguments);
  }

  Object(D_WebSolutions_interface_hub_template_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Error, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        children: this.props.statusCode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_NotFound__WEBPACK_IMPORTED_MODULE_7__["default"], {
          code: this.props.statusCode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 35
        }, this)
      }, void 0, false);
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Error);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZXMvQW5pbWF0ZWRCRy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2h0dHAtc3RhdHVzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOlsiQ29udGVudCIsInN0eWxlZCIsImRpdiIsIk5vdEZvdW5kIiwiY29kZSIsInRpdGxlIiwiSFRUUFN0YXR1cyIsIm1pbkhlaWdodCIsIm1hcCIsIml0ZW0iLCJBbmltYXRlZEJHIiwiRXJyb3IiLCJwcm9wcyIsInN0YXR1c0NvZGUiLCJyZXMiLCJlcnIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNFQUFiO0tBQU1GLE87O0FBU04sSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3QixNQUFNQyxLQUFLLEdBQ1RELElBQUksS0FBSyxHQUFULEdBQ0ksOEJBREosR0FFSUUsa0RBQVUsQ0FBQ0YsSUFBRCxDQUFWLElBQW9CLGtDQUgxQjtBQUtBLHNCQUNFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxTQUFLLEVBQUMsUUFGUjtBQUdFLFdBQU8sRUFBQyxRQUhWO0FBSUUsYUFBUyxFQUFDLHNCQUpaO0FBS0UsU0FBSyxFQUFFO0FBQUVHLGVBQVMsRUFBRTtBQUFiLEtBTFQ7QUFBQSw0QkFPRSxxRUFBQywwREFBRDtBQUFBLGdCQUNHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEJDLEdBQTVCLENBQWdDLFVBQUFDLElBQUk7QUFBQSw0QkFDbkMsaUZBQVdBLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbUM7QUFBQSxPQUFwQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQWFFLHFFQUFDLE9BQUQ7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLFlBQUtMLElBQUksS0FBSyxHQUFULEdBQWUsY0FBZixHQUFnQyxZQUFyQyxVQURYO0FBQUEsa0JBTUdBO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0U7QUFBSSxpQkFBUyxFQUFDLHFCQUFkO0FBQUEsbUJBQXFDQyxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQWpDRDs7TUFBTUYsUTtBQW1DU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBRUEsSUFBTU8sVUFBVSxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlrQ0FBaEI7QUFtR2VRLHlFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SUFBNEk7QUFDNUk7QUFDQTtBQUNBLHVIQUF1SDtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN21CQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNENBQTZEO0FBQ3BGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztJQUVNQyxLOzs7Ozs7Ozs7Ozs7OzZCQU1LO0FBQ1AsMEJBQ0U7QUFBQSxrQkFBRyxLQUFLQyxLQUFMLENBQVdDLFVBQVgsaUJBQXlCLHFFQUFDLDREQUFEO0FBQVUsY0FBSSxFQUFFLEtBQUtELEtBQUwsQ0FBV0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1Qix1QkFERjtBQUdEOzs7MENBVG9DO0FBQUEsVUFBWkMsR0FBWSxRQUFaQSxHQUFZO0FBQUEsVUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ25DLFVBQU1GLFVBQVUsR0FBR0MsR0FBRyxHQUFHQSxHQUFHLENBQUNELFVBQVAsR0FBb0JFLEdBQUcsR0FBR0EsR0FBRyxDQUFDRixVQUFQLEdBQW9CLElBQWpFO0FBQ0EsYUFBTztBQUFFQSxrQkFBVSxFQUFWQTtBQUFGLE9BQVA7QUFDRDs7OztFQUppQkcsK0M7O0FBYUxMLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19lcnJvci45Mjk0YzI2NGZiNmNhY2E1MGNiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkQkcgZnJvbSAnLi9zdHlsZXMvQW5pbWF0ZWRCRyc7XG5pbXBvcnQgSFRUUFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICdhbnRkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgei1pbmRleDogMjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMTByZW07XG4gIH1cbmA7XG5cbmNvbnN0IE5vdEZvdW5kID0gKHsgY29kZSB9KSA9PiB7XG4gIGNvbnN0IHRpdGxlID1cbiAgICBjb2RlID09PSA0MDRcbiAgICAgID8gJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnXG4gICAgICA6IEhUVFBTdGF0dXNbY29kZV0gfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztcblxuICByZXR1cm4gKFxuICAgIDxSb3dcbiAgICAgIHR5cGU9XCJmbGV4XCJcbiAgICAgIGFsaWduPVwibWlkZGxlXCJcbiAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1jZW50ZXJcIlxuICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMTAwdmgnIH19XG4gICAgPlxuICAgICAgPEFuaW1hdGVkQkc+XG4gICAgICAgIHtbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0ubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxzcGFuIGtleT17aXRlbX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0FuaW1hdGVkQkc+XG5cbiAgICAgIDxDb250ZW50PlxuICAgICAgICA8aDFcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NvZGUgPT09IDQwNCA/ICd0ZXh0LXdhcm5pbmcnIDogJ3RleHQtZXJyb3InfSBtYi0wYH1cbiAgICAgICAgICBjc3M9e2BcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb2RlfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMSBtdC0xIHRleHQtYm9keVwiPnt0aXRsZX0gPC9oNj5cbiAgICAgIDwvQ29udGVudD5cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEFuaW1hdGVkQkcgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICBhbmltYXRpb246IHNwaW4gNTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBib3R0b206IC0xMjBweDtcbiAgfVxuXG4gIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICBsZWZ0OiAxMCU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGFuaW1hdGlvbi1kZWxheTogNTBzO1xuICB9XG5cbiAgc3BhbjpudGgtY2hpbGQoMikge1xuICAgIGxlZnQ6IDIwJTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDQwcztcbiAgfVxuXG4gIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICBsZWZ0OiAzMCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMzBzO1xuICB9XG5cbiAgc3BhbjpudGgtY2hpbGQoNCkge1xuICAgIGxlZnQ6IDQwJTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcbiAgfVxuXG4gIHNwYW46bnRoLWNoaWxkKDUpIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMTBzO1xuICB9XG5cbiAgc3BhbjpudGgtY2hpbGQoNikge1xuICAgIGxlZnQ6IDYwJTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICB9XG5cbiAgc3BhbjpudGgtY2hpbGQoNykge1xuICAgIGxlZnQ6IDcwJTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDEwcztcbiAgfVxuXG4gIHNwYW46bnRoLWNoaWxkKDgpIHtcbiAgICBsZWZ0OiA4MCU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMjBzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNDBzO1xuICB9XG5cbiAgc3BhbjpudGgtY2hpbGQoOSkge1xuICAgIGxlZnQ6IDkwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzMHM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMHM7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHJvdGF0ZSg3MjBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkQkc7XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNS4xXG4vLyAjIG5vZGUtaHR0cC1zdGF0dXNcblxuLy8gKipSZWZlcmVuY2U6KiogIFxuXG4vLyAtIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL2h0dHAtc3RhdHVzLWNvZGVzL2h0dHAtc3RhdHVzLWNvZGVzLnhodG1sXG4vLyAtIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMzI0I3NlY3Rpb24tMi4zLjJcblxuLy8gIyMgQ2xhc3Nlc1xuXG4vLyBUaGUgZmlyc3QgZGlnaXQgb2YgdGhlIHN0YXR1cy1jb2RlIGRlZmluZXMgdGhlIGNsYXNzIG9mIHJlc3BvbnNlLiBUaGUgbGFzdCB0d28gZGlnaXRzIGRvIG5vdCBoYXZlIGFueSBjYXRlZ29yaXphdGlvbiByb2xlLiBUaGVyZSBhcmUgZml2ZSB2YWx1ZXMgZm9yIHRoZSBmaXJzdCBkaWdpdDpcbnZhciBjbGFzc2VzO1xuXG5jbGFzc2VzID0ge1xuICAvLyAxeHggLSBUaGUgMXh4IChJbmZvcm1hdGlvbmFsKSBjbGFzcyBvZiBzdGF0dXMgY29kZSBpbmRpY2F0ZXMgYW4gaW50ZXJpbSByZXNwb25zZSBmb3IgY29tbXVuaWNhdGluZyBjb25uZWN0aW9uIHN0YXR1cyBvciByZXF1ZXN0IHByb2dyZXNzIHByaW9yIHRvIGNvbXBsZXRpbmcgdGhlIHJlcXVlc3RlZCBhY3Rpb24gYW5kIHNlbmRpbmcgYSBmaW5hbCByZXNwb25zZS5cbiAgJzF4eCc6ICdJbmZvcm1hdGlvbmFsJyxcbiAgJzF4eF9OQU1FJzogJ0lORk9STUFUSU9OQUwnLFxuICAnMXh4X01FU1NBR0UnOiAnSW5kaWNhdGVzIGFuIGludGVyaW0gcmVzcG9uc2UgZm9yIGNvbW11bmljYXRpbmcgY29ubmVjdGlvbiBzdGF0dXMgb3IgcmVxdWVzdCBwcm9ncmVzcyBwcmlvciB0byBjb21wbGV0aW5nIHRoZSByZXF1ZXN0ZWQgYWN0aW9uIGFuZCBzZW5kaW5nIGEgZmluYWwgcmVzcG9uc2UuJyxcbiAgSU5GT1JNQVRJT05BTDogJzF4eCcsXG4gIC8vIDJ4eCAtIFRoZSAyeHggKFN1Y2Nlc3NmdWwpIGNsYXNzIG9mIHN0YXR1cyBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjbGllbnQncyByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsbHkgcmVjZWl2ZWQsIHVuZGVyc3Rvb2QsIGFuZCBhY2NlcHRlZC5cbiAgJzJ4eCc6ICdTdWNjZXNzZnVsJyxcbiAgJzJ4eF9OQU1FJzogJ1NVQ0NFU1NGVUwnLFxuICAnMnh4X01FU1NBR0UnOiAnSW5kaWNhdGVzIHRoYXQgdGhlIGNsaWVudFxcJ3MgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bGx5IHJlY2VpdmVkLCB1bmRlcnN0b29kLCBhbmQgYWNjZXB0ZWQuJyxcbiAgU1VDQ0VTU0ZVTDogJzJ4eCcsXG4gIC8vIDN4eCAtIFRoZSAzeHggKFJlZGlyZWN0aW9uKSBjbGFzcyBvZiBzdGF0dXMgY29kZSBpbmRpY2F0ZXMgdGhhdCBmdXJ0aGVyIGFjdGlvbiBuZWVkcyB0byBiZSB0YWtlbiBieSB0aGUgdXNlciBhZ2VudCBpbiBvcmRlciB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlxuICAnM3h4JzogJ1JlZGlyZWN0aW9uJyxcbiAgJzN4eF9OQU1FJzogJ1JFRElSRUNUSU9OJyxcbiAgJzN4eF9NRVNTQUdFJzogJ0luZGljYXRlcyB0aGF0IGZ1cnRoZXIgYWN0aW9uIG5lZWRzIHRvIGJlIHRha2VuIGJ5IHRoZSB1c2VyIGFnZW50IGluIG9yZGVyIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuJyxcbiAgUkVESVJFQ1RJT046ICczeHgnLFxuICAvLyA0eHggLSBUaGUgNHh4IChDbGllbnQgRXJyb3IpIGNsYXNzIG9mIHN0YXR1cyBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjbGllbnQgc2VlbXMgdG8gaGF2ZSBlcnJlZC5cbiAgJzR4eCc6ICdDbGllbnQgRXJyb3InLFxuICAnNHh4X05BTUUnOiAnQ0xJRU5UX0VSUk9SJyxcbiAgJzR4eF9NRVNTQUdFJzogJ0luZGljYXRlcyB0aGF0IHRoZSBjbGllbnQgc2VlbXMgdG8gaGF2ZSBlcnJlZC4nLFxuICBDTElFTlRfRVJST1I6ICc0eHgnLFxuICAvLyA1eHggLSBUaGUgNXh4IChTZXJ2ZXIgRXJyb3IpIGNsYXNzIG9mIHN0YXR1cyBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBzZXJ2ZXIgaXMgYXdhcmUgdGhhdCBpdCBoYXMgZXJyZWQgb3IgaXMgaW5jYXBhYmxlIG9mIHBlcmZvcm1pbmcgdGhlIHJlcXVlc3RlZCBtZXRob2QuXG4gICc1eHgnOiAnU2VydmVyIEVycm9yJyxcbiAgJzV4eF9OQU1FJzogJ1NFUlZFUl9FUlJPUicsXG4gICc1eHhfTUVTU0FHRSc6ICdJbmRpY2F0ZXMgdGhhdCB0aGUgc2VydmVyIGlzIGF3YXJlIHRoYXQgaXQgaGFzIGVycmVkIG9yIGlzIGluY2FwYWJsZSBvZiBwZXJmb3JtaW5nIHRoZSByZXF1ZXN0ZWQgbWV0aG9kLicsXG4gIFNFUlZFUl9FUlJPUjogJzV4eCdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGFzc2VzOiBjbGFzc2VzLFxuICAvLyAjIyBJbmZvcm1hdGlvbmFsIDF4eFxuXG4gIC8vIEluZGljYXRlcyBhbiBpbnRlcmltIHJlc3BvbnNlIGZvciBjb21tdW5pY2F0aW5nIGNvbm5lY3Rpb24gc3RhdHVzIG9yIHJlcXVlc3QgcHJvZ3Jlc3MgcHJpb3IgdG8gY29tcGxldGluZyB0aGUgcmVxdWVzdGVkIGFjdGlvbiBhbmQgc2VuZGluZyBhIGZpbmFsIHJlc3BvbnNlLlxuXG4gIC8vIDEwMCAtIFRoZSBzZXJ2ZXIgaGFzIHJlY2VpdmVkIHRoZSByZXF1ZXN0IGhlYWRlcnMgYW5kIHRoZSBjbGllbnQgc2hvdWxkIHByb2NlZWQgdG8gc2VuZCB0aGUgcmVxdWVzdCBib2R5LlxuICAxMDA6ICdDb250aW51ZScsXG4gICcxMDBfTkFNRSc6ICdDT05USU5VRScsXG4gICcxMDBfTUVTU0FHRSc6ICdUaGUgc2VydmVyIGhhcyByZWNlaXZlZCB0aGUgcmVxdWVzdCBoZWFkZXJzIGFuZCB0aGUgY2xpZW50IHNob3VsZCBwcm9jZWVkIHRvIHNlbmQgdGhlIHJlcXVlc3QgYm9keS4nLFxuICAnMTAwX0NMQVNTJzogY2xhc3Nlcy5JTkZPUk1BVElPTkFMLFxuICBDT05USU5VRTogMTAwLFxuICAvLyAxMDEgLSBUaGUgcmVxdWVzdGVyIGhhcyBhc2tlZCB0aGUgc2VydmVyIHRvIHN3aXRjaCBwcm90b2NvbHMgYW5kIHRoZSBzZXJ2ZXIgaGFzIGFncmVlZCB0byBkbyBzby5cbiAgMTAxOiAnU3dpdGNoaW5nIFByb3RvY29scycsXG4gICcxMDFfTkFNRSc6ICdTV0lUQ0hJTkdfUFJPVE9DT0xTJyxcbiAgJzEwMV9NRVNTQUdFJzogJ1RoZSByZXF1ZXN0ZXIgaGFzIGFza2VkIHRoZSBzZXJ2ZXIgdG8gc3dpdGNoIHByb3RvY29scyBhbmQgdGhlIHNlcnZlciBoYXMgYWdyZWVkIHRvIGRvIHNvLicsXG4gICcxMDFfQ0xBU1MnOiBjbGFzc2VzLklORk9STUFUSU9OQUwsXG4gIFNXSVRDSElOR19QUk9UT0NPTFM6IDEwMSxcbiAgLy8gMTAyIFByb2Nlc3NpbmcgKFdlYkRBVjsgUkZDIDI1MTgpIC0gQSBXZWJEQVYgcmVxdWVzdCBtYXkgY29udGFpbiBtYW55IHN1Yi1yZXF1ZXN0cyBpbnZvbHZpbmcgZmlsZSBvcGVyYXRpb25zLCByZXF1aXJpbmcgYSBsb25nIHRpbWUgdG8gY29tcGxldGUgdGhlIHJlcXVlc3QuIFRoaXMgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgc2VydmVyIGhhcyByZWNlaXZlZCBhbmQgaXMgcHJvY2Vzc2luZyB0aGUgcmVxdWVzdCwgYnV0IG5vIHJlc3BvbnNlIGlzIGF2YWlsYWJsZSB5ZXQuWzddIFRoaXMgcHJldmVudHMgdGhlIGNsaWVudCBmcm9tIHRpbWluZyBvdXQgYW5kIGFzc3VtaW5nIHRoZSByZXF1ZXN0IHdhcyBsb3N0LlxuICAxMDI6ICdQcm9jZXNzaW5nJyxcbiAgJzEwMl9OQU1FJzogJ1BST0NFU1NJTkcnLFxuICAnMTAyX01FU1NBR0UnOiAnQSBXZWJEQVYgcmVxdWVzdCBtYXkgY29udGFpbiBtYW55IHN1Yi1yZXF1ZXN0cyBpbnZvbHZpbmcgZmlsZSBvcGVyYXRpb25zLCByZXF1aXJpbmcgYSBsb25nIHRpbWUgdG8gY29tcGxldGUgdGhlIHJlcXVlc3QuIFRoaXMgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgc2VydmVyIGhhcyByZWNlaXZlZCBhbmQgaXMgcHJvY2Vzc2luZyB0aGUgcmVxdWVzdCwgYnV0IG5vIHJlc3BvbnNlIGlzIGF2YWlsYWJsZSB5ZXQuWzddIFRoaXMgcHJldmVudHMgdGhlIGNsaWVudCBmcm9tIHRpbWluZyBvdXQgYW5kIGFzc3VtaW5nIHRoZSByZXF1ZXN0IHdhcyBsb3N0LicsXG4gICcxMDJfQ0xBU1MnOiBjbGFzc2VzLklORk9STUFUSU9OQUwsXG4gIFBST0NFU1NJTkc6IDEwMixcbiAgLy8gMTAzIEVhcmx5IEhpbnRzIChSRkMgODI5NykgLSBVc2VkIHRvIHJldHVybiBzb21lIHJlc3BvbnNlIGhlYWRlcnMgYmVmb3JlIGZpbmFsIEhUVFAgbWVzc2FnZS5cbiAgMTAzOiAnRWFybHkgSGludHMnLFxuICAnMTAzX05BTUUnOiAnRUFSTFlfSElOVFMnLFxuICAnMTAzX01FU1NBR0UnOiAnVXNlZCB0byByZXR1cm4gc29tZSByZXNwb25zZSBoZWFkZXJzIGJlZm9yZSBmaW5hbCBIVFRQIG1lc3NhZ2UuJyxcbiAgJzEwM19DTEFTUyc6IGNsYXNzZXMuSU5GT1JNQVRJT05BTCxcbiAgRUFSTFlfSElOVFM6IDEwMyxcbiAgLy8gIyMgU3VjY2Vzc2Z1bCAyeHhcblxuICAvLyBJbmRpY2F0ZXMgdGhhdCB0aGUgY2xpZW50J3MgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bGx5IHJlY2VpdmVkLCB1bmRlcnN0b29kLCBhbmQgYWNjZXB0ZWQuXG5cbiAgLy8gMjAwIC0gU3RhbmRhcmQgcmVzcG9uc2UgZm9yIHN1Y2Nlc3NmdWwgSFRUUCByZXF1ZXN0cy5cbiAgMjAwOiAnT0snLFxuICAnMjAwX05BTUUnOiAnT0snLFxuICAnMjAwX01FU1NBR0UnOiAnU3RhbmRhcmQgcmVzcG9uc2UgZm9yIHN1Y2Nlc3NmdWwgSFRUUCByZXF1ZXN0cy4nLFxuICAnMjAwX0NMQVNTJzogY2xhc3Nlcy5TVUNDRVNTRlVMLFxuICBPSzogMjAwLFxuICAvLyAyMDEgLSBUaGUgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQsIHJlc3VsdGluZyBpbiB0aGUgY3JlYXRpb24gb2YgYSBuZXcgcmVzb3VyY2UuXG4gIDIwMTogJ0NyZWF0ZWQnLFxuICAnMjAxX05BTUUnOiAnQ1JFQVRFRCcsXG4gICcyMDFfTUVTU0FHRSc6ICdUaGUgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQsIHJlc3VsdGluZyBpbiB0aGUgY3JlYXRpb24gb2YgYSBuZXcgcmVzb3VyY2UuJyxcbiAgJzIwMV9DTEFTUyc6IGNsYXNzZXMuU1VDQ0VTU0ZVTCxcbiAgQ1JFQVRFRDogMjAxLFxuICAvLyAyMDIgLSBUaGUgcmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZywgYnV0IHRoZSBwcm9jZXNzaW5nIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuXG4gIDIwMjogJ0FjY2VwdGVkJyxcbiAgJzIwMl9OQU1FJzogJ0FDQ0VQVEVEJyxcbiAgJzIwMl9NRVNTQUdFJzogJ1RoZSByZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nLCBidXQgdGhlIHByb2Nlc3NpbmcgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC4nLFxuICAnMjAyX0NMQVNTJzogY2xhc3Nlcy5TVUNDRVNTRlVMLFxuICBBQ0NFUFRFRDogMjAyLFxuICAvLyAyMDMgKHNpbmNlIEhUVFAvMS4xKSAtIFRoZSBzZXJ2ZXIgaXMgYSB0cmFuc2Zvcm1pbmcgcHJveHkgKGUuZy4gYSBXZWIgYWNjZWxlcmF0b3IpIHRoYXQgcmVjZWl2ZWQgYSAyMDAgT0sgZnJvbSBpdHMgb3JpZ2luLCBidXQgaXMgcmV0dXJuaW5nIGEgbW9kaWZpZWQgdmVyc2lvbiBvZiB0aGUgb3JpZ2luJ3MgcmVzcG9uc2UuXG4gIDIwMzogJ05vbi1BdXRob3JpdGF0aXZlIEluZm9ybWF0aW9uJyxcbiAgJzIwM19OQU1FJzogJ05PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OJyxcbiAgJzIwM19NRVNTQUdFJzogJ1RoZSBzZXJ2ZXIgaXMgYSB0cmFuc2Zvcm1pbmcgcHJveHkgKGUuZy4gYSBXZWIgYWNjZWxlcmF0b3IpIHRoYXQgcmVjZWl2ZWQgYSAyMDAgT0sgZnJvbSBpdHMgb3JpZ2luLCBidXQgaXMgcmV0dXJuaW5nIGEgbW9kaWZpZWQgdmVyc2lvbiBvZiB0aGUgb3JpZ2luXFwncyByZXNwb25zZS4nLFxuICAnMjAzX0NMQVNTJzogY2xhc3Nlcy5TVUNDRVNTRlVMLFxuICBOT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTjogMjAzLFxuICAvLyAyMDQgLSBUaGUgc2VydmVyIHN1Y2Nlc3NmdWxseSBwcm9jZXNzZWQgdGhlIHJlcXVlc3QgYW5kIGlzIG5vdCByZXR1cm5pbmcgYW55IGNvbnRlbnQuXG4gIDIwNDogJ05vIENvbnRlbnQnLFxuICAnMjA0X05BTUUnOiAnTk9fQ09OVEVOVCcsXG4gICcyMDRfTUVTU0FHRSc6ICdUaGUgc2VydmVyIHN1Y2Nlc3NmdWxseSBwcm9jZXNzZWQgdGhlIHJlcXVlc3QgYW5kIGlzIG5vdCByZXR1cm5pbmcgYW55IGNvbnRlbnQuJyxcbiAgJzIwNF9DTEFTUyc6IGNsYXNzZXMuU1VDQ0VTU0ZVTCxcbiAgTk9fQ09OVEVOVDogMjA0LFxuICAvLyAyMDUgLSBUaGUgc2VydmVyIHN1Y2Nlc3NmdWxseSBwcm9jZXNzZWQgdGhlIHJlcXVlc3QsIGJ1dCBpcyBub3QgcmV0dXJuaW5nIGFueSBjb250ZW50LiBVbmxpa2UgYSAyMDQgcmVzcG9uc2UsIHRoaXMgcmVzcG9uc2UgcmVxdWlyZXMgdGhhdCB0aGUgcmVxdWVzdGVyIHJlc2V0IHRoZSBkb2N1bWVudCB2aWV3LlxuICAyMDU6ICdSZXNldCBDb250ZW50JyxcbiAgJzIwNV9OQU1FJzogJ1JFU0VUX0NPTlRFTlQnLFxuICAnMjA1X01FU1NBR0UnOiAnVGhlIHNlcnZlciBzdWNjZXNzZnVsbHkgcHJvY2Vzc2VkIHRoZSByZXF1ZXN0LCBidXQgaXMgbm90IHJldHVybmluZyBhbnkgY29udGVudC4gVW5saWtlIGEgMjA0IHJlc3BvbnNlLCB0aGlzIHJlc3BvbnNlIHJlcXVpcmVzIHRoYXQgdGhlIHJlcXVlc3RlciByZXNldCB0aGUgZG9jdW1lbnQgdmlldy4nLFxuICAnMjA1X0NMQVNTJzogY2xhc3Nlcy5TVUNDRVNTRlVMLFxuICBSRVNFVF9DT05URU5UOiAyMDUsXG4gIC8vIDIwNiAoUkZDIDcyMzMpIC0gVGhlIHNlcnZlciBpcyBkZWxpdmVyaW5nIG9ubHkgcGFydCBvZiB0aGUgcmVzb3VyY2UgKGJ5dGUgc2VydmluZykgZHVlIHRvIGEgcmFuZ2UgaGVhZGVyIHNlbnQgYnkgdGhlIGNsaWVudC5cbiAgMjA2OiAnUGFydGlhbCBDb250ZW50JyxcbiAgJzIwNl9OQU1FJzogJ1BBUlRJQUxfQ09OVEVOVCcsXG4gICcyMDZfTUVTU0FHRSc6ICdUaGUgc2VydmVyIGlzIGRlbGl2ZXJpbmcgb25seSBwYXJ0IG9mIHRoZSByZXNvdXJjZSAoYnl0ZSBzZXJ2aW5nKSBkdWUgdG8gYSByYW5nZSBoZWFkZXIgc2VudCBieSB0aGUgY2xpZW50LicsXG4gICcyMDZfQ0xBU1MnOiBjbGFzc2VzLlNVQ0NFU1NGVUwsXG4gIFBBUlRJQUxfQ09OVEVOVDogMjA2LFxuICAvLyAyMDcgKFdlYkRBVjsgUkZDIDQ5MTgpIC0gVGhlIG1lc3NhZ2UgYm9keSB0aGF0IGZvbGxvd3MgaXMgYnkgZGVmYXVsdCBhbiBYTUwgbWVzc2FnZSBhbmQgY2FuIGNvbnRhaW4gYSBudW1iZXIgb2Ygc2VwYXJhdGUgcmVzcG9uc2UgY29kZXMsIGRlcGVuZGluZyBvbiBob3cgbWFueSBzdWItcmVxdWVzdHMgd2VyZSBtYWRlLlxuICAyMDc6ICdNdWx0aSBTdGF0dXMnLFxuICAnMjA3X05BTUUnOiAnTVVMVElfU1RBVFVTJyxcbiAgJzIwN19NRVNTQUdFJzogJ1RoZSBtZXNzYWdlIGJvZHkgdGhhdCBmb2xsb3dzIGlzIGJ5IGRlZmF1bHQgYW4gWE1MIG1lc3NhZ2UgYW5kIGNhbiBjb250YWluIGEgbnVtYmVyIG9mIHNlcGFyYXRlIHJlc3BvbnNlIGNvZGVzLCBkZXBlbmRpbmcgb24gaG93IG1hbnkgc3ViLXJlcXVlc3RzIHdlcmUgbWFkZS4nLFxuICAnMjA3X0NMQVNTJzogY2xhc3Nlcy5TVUNDRVNTRlVMLFxuICBNVUxUSV9TVEFUVVM6IDIwNyxcbiAgLy8gMjA4IChXZWJEQVY7IFJGQyA1ODQyKSAtIFRoZSBtZW1iZXJzIG9mIGEgREFWIGJpbmRpbmcgaGF2ZSBhbHJlYWR5IGJlZW4gZW51bWVyYXRlZCBpbiBhIHByZWNlZGluZyBwYXJ0IG9mIHRoZSAobXVsdGlzdGF0dXMpIHJlc3BvbnNlLCBhbmQgYXJlIG5vdCBiZWluZyBpbmNsdWRlZCBhZ2Fpbi5cbiAgMjA4OiAnQWxyZWFkeSBSZXBvcnRlZCcsXG4gICcyMDhfTkFNRSc6ICdBTFJFQURZX1JFUE9SVEVEJyxcbiAgJzIwOF9NRVNTQUdFJzogJ1RoZSBtZW1iZXJzIG9mIGEgREFWIGJpbmRpbmcgaGF2ZSBhbHJlYWR5IGJlZW4gZW51bWVyYXRlZCBpbiBhIHByZWNlZGluZyBwYXJ0IG9mIHRoZSAobXVsdGlzdGF0dXMpIHJlc3BvbnNlLCBhbmQgYXJlIG5vdCBiZWluZyBpbmNsdWRlZCBhZ2Fpbi4nLFxuICAnMjA4X0NMQVNTJzogY2xhc3Nlcy5TVUNDRVNTRlVMLFxuICBBTFJFQURZX1JFUE9SVEVEOiAyMDgsXG4gIC8vIDIyNiAoUkZDIDMyMjkpIC0gVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIGEgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLCBhbmQgdGhlIHJlc3BvbnNlIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlc3VsdCBvZiBvbmUgb3IgbW9yZSBpbnN0YW5jZS1tYW5pcHVsYXRpb25zIGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2UuXG4gIDIyNjogJ0lNIFVzZWQnLFxuICAnMjI2X05BTUUnOiAnSU1fVVNFRCcsXG4gICcyMjZfTUVTU0FHRSc6ICdUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgYSByZXF1ZXN0IGZvciB0aGUgcmVzb3VyY2UsIGFuZCB0aGUgcmVzcG9uc2UgaXMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcmVzdWx0IG9mIG9uZSBvciBtb3JlIGluc3RhbmNlLW1hbmlwdWxhdGlvbnMgYXBwbGllZCB0byB0aGUgY3VycmVudCBpbnN0YW5jZS4nLFxuICAnMjI2X0NMQVNTJzogY2xhc3Nlcy5TVUNDRVNTRlVMLFxuICBJTV9VU0VEOiAyMjYsXG4gIC8vICMjIFJlZGlyZWN0aW9uIDN4eFxuXG4gIC8vIEluZGljYXRlcyB0aGF0IGZ1cnRoZXIgYWN0aW9uIG5lZWRzIHRvIGJlIHRha2VuIGJ5IHRoZSB1c2VyIGFnZW50IGluIG9yZGVyIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXG5cbiAgLy8gMzAwIC0gSW5kaWNhdGVzIG11bHRpcGxlIG9wdGlvbnMgZm9yIHRoZSByZXNvdXJjZSBmcm9tIHdoaWNoIHRoZSBjbGllbnQgbWF5IGNob29zZS5cbiAgMzAwOiAnTXVsdGlwbGUgQ2hvaWNlcycsXG4gICczMDBfTkFNRSc6ICdNVUxUSVBMRV9DSE9JQ0VTJyxcbiAgJzMwMF9NRVNTQUdFJzogJ0luZGljYXRlcyBtdWx0aXBsZSBvcHRpb25zIGZvciB0aGUgcmVzb3VyY2UgZnJvbSB3aGljaCB0aGUgY2xpZW50IG1heSBjaG9vc2UuJyxcbiAgJzMwMF9DTEFTUyc6IGNsYXNzZXMuUkVESVJFQ1RJT04sXG4gIE1VTFRJUExFX0NIT0lDRVM6IDMwMCxcbiAgLy8gMzAxIC0gVGhpcyBhbmQgYWxsIGZ1dHVyZSByZXF1ZXN0cyBzaG91bGQgYmUgZGlyZWN0ZWQgdG8gdGhlIGdpdmVuIFVSSS5cbiAgMzAxOiAnTW92ZWQgUGVybWFuZW50bHknLFxuICAnMzAxX05BTUUnOiAnTU9WRURfUEVSTUFORU5UTFknLFxuICAnMzAxX01FU1NBR0UnOiAnVGhpcyBhbmQgYWxsIGZ1dHVyZSByZXF1ZXN0cyBzaG91bGQgYmUgZGlyZWN0ZWQgdG8gdGhlIGdpdmVuIFVSSS4nLFxuICAnMzAxX0NMQVNTJzogY2xhc3Nlcy5SRURJUkVDVElPTixcbiAgTU9WRURfUEVSTUFORU5UTFk6IDMwMSxcbiAgLy8gMzAyIC0gVGhpcyBpcyBhbiBleGFtcGxlIG9mIGluZHVzdHJ5IHByYWN0aWNlIGNvbnRyYWRpY3RpbmcgdGhlIHN0YW5kYXJkLiBUaGUgSFRUUC8xLjAgc3BlY2lmaWNhdGlvbiAoUkZDIDE5NDUpIHJlcXVpcmVkIHRoZSBjbGllbnQgdG8gcGVyZm9ybSBhIHRlbXBvcmFyeSByZWRpcmVjdCAodGhlIG9yaWdpbmFsIGRlc2NyaWJpbmcgcGhyYXNlIHdhcyBcIk1vdmVkIFRlbXBvcmFyaWx5XCIpLCBidXQgcG9wdWxhciBicm93c2VycyBpbXBsZW1lbnRlZCAzMDIgd2l0aCB0aGUgZnVuY3Rpb25hbGl0eSBvZiBhIDMwMyBTZWUgT3RoZXIuIFRoZXJlZm9yZSwgSFRUUC8xLjEgYWRkZWQgc3RhdHVzIGNvZGVzIDMwMyBhbmQgMzA3IHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlIHR3byBiZWhhdmlvdXJzLlxuICAzMDI6ICdGb3VuZCcsXG4gICczMDJfTkFNRSc6ICdGT1VORCcsXG4gICczMDJfTUVTU0FHRSc6ICdUaGlzIGlzIGFuIGV4YW1wbGUgb2YgaW5kdXN0cnkgcHJhY3RpY2UgY29udHJhZGljdGluZyB0aGUgc3RhbmRhcmQuIFRoZSBIVFRQLzEuMCBzcGVjaWZpY2F0aW9uIChSRkMgMTk0NSkgcmVxdWlyZWQgdGhlIGNsaWVudCB0byBwZXJmb3JtIGEgdGVtcG9yYXJ5IHJlZGlyZWN0ICh0aGUgb3JpZ2luYWwgZGVzY3JpYmluZyBwaHJhc2Ugd2FzIFwiTW92ZWQgVGVtcG9yYXJpbHlcIiksIGJ1dCBwb3B1bGFyIGJyb3dzZXJzIGltcGxlbWVudGVkIDMwMiB3aXRoIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGEgMzAzIFNlZSBPdGhlci4gVGhlcmVmb3JlLCBIVFRQLzEuMSBhZGRlZCBzdGF0dXMgY29kZXMgMzAzIGFuZCAzMDcgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGUgdHdvIGJlaGF2aW91cnMuJyxcbiAgJzMwMl9DTEFTUyc6IGNsYXNzZXMuUkVESVJFQ1RJT04sXG4gIEZPVU5EOiAzMDIsXG4gIC8vIDMwMyAoc2luY2UgSFRUUC8xLjEpIC0gVGhlIHJlc3BvbnNlIHRvIHRoZSByZXF1ZXN0IGNhbiBiZSBmb3VuZCB1bmRlciBhbm90aGVyIFVSSSB1c2luZyB0aGUgR0VUIG1ldGhvZC5cbiAgMzAzOiAnU2VlIE90aGVyJyxcbiAgJzMwM19OQU1FJzogJ1NFRV9PVEhFUicsXG4gICczMDNfTUVTU0FHRSc6ICdUaGUgcmVzcG9uc2UgdG8gdGhlIHJlcXVlc3QgY2FuIGJlIGZvdW5kIHVuZGVyIGFub3RoZXIgVVJJIHVzaW5nIHRoZSBHRVQgbWV0aG9kLicsXG4gICczMDNfQ0xBU1MnOiBjbGFzc2VzLlJFRElSRUNUSU9OLFxuICBTRUVfT1RIRVI6IDMwMyxcbiAgLy8gMzA0IChSRkMgNzIzMikgLSBJbmRpY2F0ZXMgdGhhdCB0aGUgcmVzb3VyY2UgaGFzIG5vdCBiZWVuIG1vZGlmaWVkIHNpbmNlIHRoZSB2ZXJzaW9uIHNwZWNpZmllZCBieSB0aGUgcmVxdWVzdCBoZWFkZXJzIElmLU1vZGlmaWVkLVNpbmNlIG9yIElmLU5vbmUtTWF0Y2guXG4gIDMwNDogJ05vdCBNb2RpZmllZCcsXG4gICczMDRfTkFNRSc6ICdOT1RfTU9ESUZJRUQnLFxuICAnMzA0X01FU1NBR0UnOiAnSW5kaWNhdGVzIHRoYXQgdGhlIHJlc291cmNlIGhhcyBub3QgYmVlbiBtb2RpZmllZCBzaW5jZSB0aGUgdmVyc2lvbiBzcGVjaWZpZWQgYnkgdGhlIHJlcXVlc3QgaGVhZGVycyBJZi1Nb2RpZmllZC1TaW5jZSBvciBJZi1Ob25lLU1hdGNoLicsXG4gICczMDRfQ0xBU1MnOiBjbGFzc2VzLlJFRElSRUNUSU9OLFxuICBOT1RfTU9ESUZJRUQ6IDMwNCxcbiAgLy8gMzA1IChzaW5jZSBIVFRQLzEuMSkgLSBUaGUgcmVxdWVzdGVkIHJlc291cmNlIGlzIGF2YWlsYWJsZSBvbmx5IHRocm91Z2ggYSBwcm94eSwgdGhlIGFkZHJlc3MgZm9yIHdoaWNoIGlzIHByb3ZpZGVkIGluIHRoZSByZXNwb25zZS5cbiAgMzA1OiAnVXNlIFByb3h5JyxcbiAgJzMwNV9OQU1FJzogJ1VTRV9QUk9YWScsXG4gICczMDVfTUVTU0FHRSc6ICdUaGUgcmVxdWVzdGVkIHJlc291cmNlIGlzIGF2YWlsYWJsZSBvbmx5IHRocm91Z2ggYSBwcm94eSwgdGhlIGFkZHJlc3MgZm9yIHdoaWNoIGlzIHByb3ZpZGVkIGluIHRoZSByZXNwb25zZS4nLFxuICAnMzA1X0NMQVNTJzogY2xhc3Nlcy5SRURJUkVDVElPTixcbiAgVVNFX1BST1hZOiAzMDUsXG4gIC8vIDMwNiAtIE5vIGxvbmdlciB1c2VkLiBPcmlnaW5hbGx5IG1lYW50IFwiU3Vic2VxdWVudCByZXF1ZXN0cyBzaG91bGQgdXNlIHRoZSBzcGVjaWZpZWQgcHJveHkuXG4gIDMwNjogJ1N3aXRjaCBQcm94eScsXG4gICczMDZfTkFNRSc6ICdTV0lUQ0hfUFJPWFknLFxuICAnMzA2X01FU1NBR0UnOiAnTm8gbG9uZ2VyIHVzZWQuIE9yaWdpbmFsbHkgbWVhbnQgXCJTdWJzZXF1ZW50IHJlcXVlc3RzIHNob3VsZCB1c2UgdGhlIHNwZWNpZmllZCBwcm94eS4nLFxuICAnMzA2X0NMQVNTJzogY2xhc3Nlcy5SRURJUkVDVElPTixcbiAgU1dJVENIX1BST1hZOiAzMDYsXG4gIC8vIDMwNyAoc2luY2UgSFRUUC8xLjEpIC0gSW4gdGhpcyBjYXNlLCB0aGUgcmVxdWVzdCBzaG91bGQgYmUgcmVwZWF0ZWQgd2l0aCBhbm90aGVyIFVSSTsgaG93ZXZlciwgZnV0dXJlIHJlcXVlc3RzIHNob3VsZCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIFVSSS5cbiAgMzA3OiAnVGVtcG9yYXJ5IFJlZGlyZWN0JyxcbiAgJzMwN19OQU1FJzogJ1RFTVBPUkFSWV9SRURJUkVDVCcsXG4gICczMDdfTUVTU0FHRSc6ICdJbiB0aGlzIGNhc2UsIHRoZSByZXF1ZXN0IHNob3VsZCBiZSByZXBlYXRlZCB3aXRoIGFub3RoZXIgVVJJOyBob3dldmVyLCBmdXR1cmUgcmVxdWVzdHMgc2hvdWxkIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgVVJJLicsXG4gICczMDdfQ0xBU1MnOiBjbGFzc2VzLlJFRElSRUNUSU9OLFxuICBURU1QT1JBUllfUkVESVJFQ1Q6IDMwNyxcbiAgLy8gMzA4IChSRkMgNzUzOCkgLSBUaGUgcmVxdWVzdCBhbmQgYWxsIGZ1dHVyZSByZXF1ZXN0cyBzaG91bGQgYmUgcmVwZWF0ZWQgdXNpbmcgYW5vdGhlciBVUkkuXG4gIDMwODogJ1Blcm1hbmVudCBSZWRpcmVjdCcsXG4gICczMDhfTkFNRSc6ICdQRVJNQU5FTlRfUkVESVJFQ1QnLFxuICAnMzA4X01FU1NBR0UnOiAnVGhlIHJlcXVlc3QgYW5kIGFsbCBmdXR1cmUgcmVxdWVzdHMgc2hvdWxkIGJlIHJlcGVhdGVkIHVzaW5nIGFub3RoZXIgVVJJLicsXG4gICczMDhfQ0xBU1MnOiBjbGFzc2VzLlJFRElSRUNUSU9OLFxuICBQRVJNQU5FTlRfUkVESVJFQ1Q6IDMwOCxcbiAgLy8gIyMgQ2xpZW50IEVycm9yIDR4eFxuXG4gIC8vIEluZGljYXRlcyB0aGF0IHRoZSBjbGllbnQgc2VlbXMgdG8gaGF2ZSBlcnJlZC5cblxuICAvLyA0MDAgLSBUaGUgc2VydmVyIGNhbm5vdCBvciB3aWxsIG5vdCBwcm9jZXNzIHRoZSByZXF1ZXN0IGR1ZSB0byBhbiBhcHBhcmVudCBjbGllbnQgZXJyb3IuXG4gIDQwMDogJ0JhZCBSZXF1ZXN0JyxcbiAgJzQwMF9OQU1FJzogJ0JBRF9SRVFVRVNUJyxcbiAgJzQwMF9NRVNTQUdFJzogJ1RoZSBzZXJ2ZXIgY2Fubm90IG9yIHdpbGwgbm90IHByb2Nlc3MgdGhlIHJlcXVlc3QgZHVlIHRvIGFuIGFwcGFyZW50IGNsaWVudCBlcnJvci4nLFxuICAnNDAwX0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIEJBRF9SRVFVRVNUOiA0MDAsXG4gIC8vIDQwMSAoUkZDIDcyMzUpIC0gU2ltaWxhciB0byA0MDMgRm9yYmlkZGVuLCBidXQgc3BlY2lmaWNhbGx5IGZvciB1c2Ugd2hlbiBhdXRoZW50aWNhdGlvbiBpcyByZXF1aXJlZCBhbmQgaGFzIGZhaWxlZCBvciBoYXMgbm90IHlldCBiZWVuIHByb3ZpZGVkLlxuICA0MDE6ICdVbmF1dGhvcml6ZWQnLFxuICAnNDAxX05BTUUnOiAnVU5BVVRIT1JJWkVEJyxcbiAgJzQwMV9NRVNTQUdFJzogJ1NpbWlsYXIgdG8gNDAzIEZvcmJpZGRlbiwgYnV0IHNwZWNpZmljYWxseSBmb3IgdXNlIHdoZW4gYXV0aGVudGljYXRpb24gaXMgcmVxdWlyZWQgYW5kIGhhcyBmYWlsZWQgb3IgaGFzIG5vdCB5ZXQgYmVlbiBwcm92aWRlZC4nLFxuICAnNDAxX0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxuICAvLyA0MDIgLSBSZXNlcnZlZCBmb3IgZnV0dXJlIHVzZS4gVGhlIG9yaWdpbmFsIGludGVudGlvbiB3YXMgdGhhdCB0aGlzIGNvZGUgbWlnaHQgYmUgdXNlZCBhcyBwYXJ0IG9mIHNvbWUgZm9ybSBvZiBkaWdpdGFsIGNhc2ggb3IgbWljcm9wYXltZW50IHNjaGVtZSwgYXMgcHJvcG9zZWQgZm9yIGV4YW1wbGUgYnkgR05VIFRhbGVyLCBidXQgdGhhdCBoYXMgbm90IHlldCBoYXBwZW5lZCwgYW5kIHRoaXMgY29kZSBpcyBub3QgdXN1YWxseSB1c2VkLlxuICA0MDI6ICdQYXltZW50IFJlcXVpcmVkJyxcbiAgJzQwMl9OQU1FJzogJ1BBWU1FTlRfUkVRVUlSRUQnLFxuICAnNDAyX01FU1NBR0UnOiAnUmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2UuIFRoZSBvcmlnaW5hbCBpbnRlbnRpb24gd2FzIHRoYXQgdGhpcyBjb2RlIG1pZ2h0IGJlIHVzZWQgYXMgcGFydCBvZiBzb21lIGZvcm0gb2YgZGlnaXRhbCBjYXNoIG9yIG1pY3JvcGF5bWVudCBzY2hlbWUsIGFzIHByb3Bvc2VkIGZvciBleGFtcGxlIGJ5IEdOVSBUYWxlciwgYnV0IHRoYXQgaGFzIG5vdCB5ZXQgaGFwcGVuZWQsIGFuZCB0aGlzIGNvZGUgaXMgbm90IHVzdWFsbHkgdXNlZC4nLFxuICAnNDAyX0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIFBBWU1FTlRfUkVRVUlSRUQ6IDQwMixcbiAgLy8gNDAzIC0gVGhlIHJlcXVlc3Qgd2FzIHZhbGlkLCBidXQgdGhlIHNlcnZlciBpcyByZWZ1c2luZyBhY3Rpb24uXG4gIDQwMzogJ0ZvcmJpZGRlbicsXG4gICc0MDNfTkFNRSc6ICdGT1JCSURERU4nLFxuICAnNDAzX01FU1NBR0UnOiAnVGhlIHJlcXVlc3Qgd2FzIHZhbGlkLCBidXQgdGhlIHNlcnZlciBpcyByZWZ1c2luZyBhY3Rpb24uJyxcbiAgJzQwM19DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICBGT1JCSURERU46IDQwMyxcbiAgLy8gNDA0IC0gVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBjb3VsZCBub3QgYmUgZm91bmQgYnV0IG1heSBiZSBhdmFpbGFibGUgaW4gdGhlIGZ1dHVyZS4gU3Vic2VxdWVudCByZXF1ZXN0cyBieSB0aGUgY2xpZW50IGFyZSBwZXJtaXNzaWJsZS5cbiAgNDA0OiAnTm90IEZvdW5kJyxcbiAgJzQwNF9OQU1FJzogJ05PVF9GT1VORCcsXG4gICc0MDRfTUVTU0FHRSc6ICdUaGUgcmVxdWVzdGVkIHJlc291cmNlIGNvdWxkIG5vdCBiZSBmb3VuZCBidXQgbWF5IGJlIGF2YWlsYWJsZSBpbiB0aGUgZnV0dXJlLiBTdWJzZXF1ZW50IHJlcXVlc3RzIGJ5IHRoZSBjbGllbnQgYXJlIHBlcm1pc3NpYmxlLicsXG4gICc0MDRfQ0xBU1MnOiBjbGFzc2VzLkNMSUVOVF9FUlJPUixcbiAgTk9UX0ZPVU5EOiA0MDQsXG4gIC8vIDQwNSAtIEEgcmVxdWVzdCBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBmb3IgdGhlIHJlcXVlc3RlZCByZXNvdXJjZS5cbiAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgJzQwNV9OQU1FJzogJ01FVEhPRF9OT1RfQUxMT1dFRCcsXG4gICc0MDVfTUVTU0FHRSc6ICdBIHJlcXVlc3QgbWV0aG9kIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UuJyxcbiAgJzQwNV9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICBNRVRIT0RfTk9UX0FMTE9XRUQ6IDQwNSxcbiAgLy8gNDA2IC0gVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBpcyBjYXBhYmxlIG9mIGdlbmVyYXRpbmcgb25seSBjb250ZW50IG5vdCBhY2NlcHRhYmxlIGFjY29yZGluZyB0byB0aGUgQWNjZXB0IGhlYWRlcnMgc2VudCBpbiB0aGUgcmVxdWVzdC5cbiAgNDA2OiAnTm90IEFjY2VwdGFibGUnLFxuICAnNDA2X05BTUUnOiAnTk9UX0FDQ0VQVEFCTEUnLFxuICAnNDA2X01FU1NBR0UnOiAnVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBpcyBjYXBhYmxlIG9mIGdlbmVyYXRpbmcgb25seSBjb250ZW50IG5vdCBhY2NlcHRhYmxlIGFjY29yZGluZyB0byB0aGUgQWNjZXB0IGhlYWRlcnMgc2VudCBpbiB0aGUgcmVxdWVzdC4nLFxuICAnNDA2X0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIE5PVF9BQ0NFUFRBQkxFOiA0MDYsXG4gIC8vIDQwNyAoUkZDIDcyMzUpIC0gVGhlIGNsaWVudCBtdXN0IGZpcnN0IGF1dGhlbnRpY2F0ZSBpdHNlbGYgd2l0aCB0aGUgcHJveHkuXG4gIDQwNzogJ1Byb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcbiAgJzQwN19OQU1FJzogJ1BST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEJyxcbiAgJzQwN19NRVNTQUdFJzogJ1RoZSBjbGllbnQgbXVzdCBmaXJzdCBhdXRoZW50aWNhdGUgaXRzZWxmIHdpdGggdGhlIHByb3h5LicsXG4gICc0MDdfQ0xBU1MnOiBjbGFzc2VzLkNMSUVOVF9FUlJPUixcbiAgUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQ6IDQwNyxcbiAgLy8gNDA4IC0gVGhlIHNlcnZlciB0aW1lZCBvdXQgd2FpdGluZyBmb3IgdGhlIHJlcXVlc3QuXG4gIDQwODogJ1JlcXVlc3QgVGltZS1vdXQnLFxuICAnNDA4X05BTUUnOiAnUkVRVUVTVF9USU1FT1VUJyxcbiAgJzQwOF9NRVNTQUdFJzogJ1RoZSBzZXJ2ZXIgdGltZWQgb3V0IHdhaXRpbmcgZm9yIHRoZSByZXF1ZXN0LicsXG4gICc0MDhfQ0xBU1MnOiBjbGFzc2VzLkNMSUVOVF9FUlJPUixcbiAgUkVRVUVTVF9USU1FT1VUOiA0MDgsXG4gIC8vIDQwOSAtIEluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBwcm9jZXNzZWQgYmVjYXVzZSBvZiBjb25mbGljdCBpbiB0aGUgcmVxdWVzdCwgc3VjaCBhcyBhbiBlZGl0IGNvbmZsaWN0IGJldHdlZW4gbXVsdGlwbGUgc2ltdWx0YW5lb3VzIHVwZGF0ZXMuXG4gIDQwOTogJ0NvbmZsaWN0JyxcbiAgJzQwOV9OQU1FJzogJ0NPTkZMSUNUJyxcbiAgJzQwOV9NRVNTQUdFJzogJ0luZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBwcm9jZXNzZWQgYmVjYXVzZSBvZiBjb25mbGljdCBpbiB0aGUgcmVxdWVzdCwgc3VjaCBhcyBhbiBlZGl0IGNvbmZsaWN0IGJldHdlZW4gbXVsdGlwbGUgc2ltdWx0YW5lb3VzIHVwZGF0ZXMuJyxcbiAgJzQwOV9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICBDT05GTElDVDogNDA5LFxuICAvLyA0MTAgLSBJbmRpY2F0ZXMgdGhhdCB0aGUgcmVzb3VyY2UgcmVxdWVzdGVkIGlzIG5vIGxvbmdlciBhdmFpbGFibGUgYW5kIHdpbGwgbm90IGJlIGF2YWlsYWJsZSBhZ2Fpbi5cbiAgNDEwOiAnR29uZScsXG4gICc0MTBfTkFNRSc6ICdHT05FJyxcbiAgJzQxMF9NRVNTQUdFJzogJ0luZGljYXRlcyB0aGF0IHRoZSByZXNvdXJjZSByZXF1ZXN0ZWQgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBhbmQgd2lsbCBub3QgYmUgYXZhaWxhYmxlIGFnYWluLicsXG4gICc0MTBfQ0xBU1MnOiBjbGFzc2VzLkNMSUVOVF9FUlJPUixcbiAgR09ORTogNDEwLFxuICAvLyA0MTEgLSBUaGUgcmVxdWVzdCBkaWQgbm90IHNwZWNpZnkgdGhlIGxlbmd0aCBvZiBpdHMgY29udGVudCwgd2hpY2ggaXMgcmVxdWlyZWQgYnkgdGhlIHJlcXVlc3RlZCByZXNvdXJjZS5cbiAgNDExOiAnTGVuZ3RoIFJlcXVpcmVkJyxcbiAgJzQxMV9OQU1FJzogJ0xFTkdUSF9SRVFVSVJFRCcsXG4gICc0MTFfTUVTU0FHRSc6ICdUaGUgcmVxdWVzdCBkaWQgbm90IHNwZWNpZnkgdGhlIGxlbmd0aCBvZiBpdHMgY29udGVudCwgd2hpY2ggaXMgcmVxdWlyZWQgYnkgdGhlIHJlcXVlc3RlZCByZXNvdXJjZS4nLFxuICAnNDExX0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIExFTkdUSF9SRVFVSVJFRDogNDExLFxuICAvLyA0MTIgKFJGQyA3MjMyKSAtIFRoZSBzZXJ2ZXIgZG9lcyBub3QgbWVldCBvbmUgb2YgdGhlIHByZWNvbmRpdGlvbnMgdGhhdCB0aGUgcmVxdWVzdGVyIHB1dCBvbiB0aGUgcmVxdWVzdC5cbiAgNDEyOiAnUHJlY29uZGl0aW9uIEZhaWxlZCcsXG4gICc0MTJfTkFNRSc6ICdQUkVDT05ESVRJT05fRkFJTEVEJyxcbiAgJzQxMl9NRVNTQUdFJzogJ1RoZSBzZXJ2ZXIgZG9lcyBub3QgbWVldCBvbmUgb2YgdGhlIHByZWNvbmRpdGlvbnMgdGhhdCB0aGUgcmVxdWVzdGVyIHB1dCBvbiB0aGUgcmVxdWVzdC4nLFxuICAnNDEyX0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIFBSRUNPTkRJVElPTl9GQUlMRUQ6IDQxMixcbiAgLy8gNDEzIChSRkMgNzIzMSkgLSBUaGUgcmVxdWVzdCBpcyBsYXJnZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgb3IgYWJsZSB0byBwcm9jZXNzLiBQcmV2aW91c2x5IGNhbGxlZCBcIlJlcXVlc3QgRW50aXR5IFRvbyBMYXJnZVwiLlxuICA0MTM6ICdSZXF1ZXN0IEVudGl0eSBUb28gTGFyZ2UnLFxuICAnNDEzX05BTUUnOiAnUkVRVUVTVF9FTlRJVFlfVE9PX0xBUkdFJyxcbiAgJzQxM19NRVNTQUdFJzogJ1RoZSByZXF1ZXN0IGlzIGxhcmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyBvciBhYmxlIHRvIHByb2Nlc3MuIFByZXZpb3VzbHkgY2FsbGVkIFwiUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlXCIuJyxcbiAgJzQxM19DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICBSRVFVRVNUX0VOVElUWV9UT09fTEFSR0U6IDQxMyxcbiAgLy8gNDE0IChSRkMgNzIzMSkgLSBUaGUgVVJJIHByb3ZpZGVkIHdhcyB0b28gbG9uZyBmb3IgdGhlIHNlcnZlciB0byBwcm9jZXNzLlxuICA0MTQ6ICdSZXF1ZXN0LVVSSSBUb28gTGFyZ2UnLFxuICAnNDE0X05BTUUnOiAnUkVRVUVTVF9VUklfVE9PX0xPTkcnLFxuICAnNDE0X01FU1NBR0UnOiAnVGhlIFVSSSBwcm92aWRlZCB3YXMgdG9vIGxvbmcgZm9yIHRoZSBzZXJ2ZXIgdG8gcHJvY2Vzcy4nLFxuICAnNDE0X0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIFJFUVVFU1RfVVJJX1RPT19MT05HOiA0MTQsXG4gIC8vIDQxNSAtIFRoZSByZXF1ZXN0IGVudGl0eSBoYXMgYSBtZWRpYSB0eXBlIHdoaWNoIHRoZSBzZXJ2ZXIgb3IgcmVzb3VyY2UgZG9lcyBub3Qgc3VwcG9ydC5cbiAgNDE1OiAnVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZScsXG4gICc0MTVfTkFNRSc6ICdVTlNVUFBPUlRFRF9NRURJQV9UWVBFJyxcbiAgJzQxNV9NRVNTQUdFJzogJ1RoZSByZXF1ZXN0IGVudGl0eSBoYXMgYSBtZWRpYSB0eXBlIHdoaWNoIHRoZSBzZXJ2ZXIgb3IgcmVzb3VyY2UgZG9lcyBub3Qgc3VwcG9ydC4nLFxuICAnNDE1X0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIFVOU1VQUE9SVEVEX01FRElBX1RZUEU6IDQxNSxcbiAgLy8gNDE2IChSRkMgNzIzMykgLSBUaGUgY2xpZW50IGhhcyBhc2tlZCBmb3IgYSBwb3J0aW9uIG9mIHRoZSBmaWxlIChieXRlIHNlcnZpbmcpLCBidXQgdGhlIHNlcnZlciBjYW5ub3Qgc3VwcGx5IHRoYXQgcG9ydGlvbi5cbiAgNDE2OiAnUmVxdWVzdGVkIFJhbmdlIG5vdCBTYXRpc2ZpYWJsZScsXG4gICc0MTZfTkFNRSc6ICdSRVFVRVNURURfUkFOR0VfTk9UX1NBVElTRklBQkxFJyxcbiAgJzQxNl9NRVNTQUdFJzogJ1RoZSBjbGllbnQgaGFzIGFza2VkIGZvciBhIHBvcnRpb24gb2YgdGhlIGZpbGUgKGJ5dGUgc2VydmluZyksIGJ1dCB0aGUgc2VydmVyIGNhbm5vdCBzdXBwbHkgdGhhdCBwb3J0aW9uLicsXG4gICc0MTZfQ0xBU1MnOiBjbGFzc2VzLkNMSUVOVF9FUlJPUixcbiAgUkVRVUVTVEVEX1JBTkdFX05PVF9TQVRJU0ZJQUJMRTogNDE2LFxuICAvLyA0MTcgLSBUaGUgc2VydmVyIGNhbm5vdCBtZWV0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIEV4cGVjdCByZXF1ZXN0LWhlYWRlciBmaWVsZC5cbiAgNDE3OiAnRXhwZWN0YXRpb24gRmFpbGVkJyxcbiAgJzQxN19OQU1FJzogJ0VYUEVDVEFUSU9OX0ZBSUxFRCcsXG4gICc0MTdfTUVTU0FHRSc6ICdUaGUgc2VydmVyIGNhbm5vdCBtZWV0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIEV4cGVjdCByZXF1ZXN0LWhlYWRlciBmaWVsZC4nLFxuICAnNDE3X0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIEVYUEVDVEFUSU9OX0ZBSUxFRDogNDE3LFxuICAvLyA0MTggKFJGQyAyMzI0LCBSRkMgNzE2OCkgLSBBbnkgYXR0ZW1wdCB0byBicmV3IGNvZmZlZSB3aXRoIGEgdGVhcG90IHNob3VsZCByZXN1bHQgaW4gdGhlIGVycm9yIGNvZGUgXCI0MTggSSdtIGEgdGVhcG90XCIuIFRoZSByZXN1bHRpbmcgZW50aXR5IGJvZHkgTUFZIGJlIHNob3J0IGFuZCBzdG91dC4gVGhpcyBjb2RlIHdhcyBkZWZpbmVkIGluIDE5OTggYXMgb25lIG9mIHRoZSB0cmFkaXRpb25hbCBJRVRGIEFwcmlsIEZvb2xzJyBqb2tlcywgaW4gUkZDIDIzMjQsIEh5cGVyIFRleHQgQ29mZmVlIFBvdCBDb250cm9sIFByb3RvY29sLCBhbmQgaXMgbm90IGV4cGVjdGVkIHRvIGJlIGltcGxlbWVudGVkIGJ5IGFjdHVhbCBIVFRQIHNlcnZlcnMuIFRoZSBSRkMgc3BlY2lmaWVzIHRoaXMgY29kZSBzaG91bGQgYmUgcmV0dXJuZWQgYnkgdGVhcG90cyByZXF1ZXN0ZWQgdG8gYnJldyBjb2ZmZWUuIFRoaXMgSFRUUCBzdGF0dXMgaXMgdXNlZCBhcyBhbiBFYXN0ZXIgZWdnIGluIHNvbWUgd2Vic2l0ZXMsIGluY2x1ZGluZyBHb29nbGUuY29tLlxuICA0MTg6ICdJXFwnbSBhIHRlYXBvdCcsXG4gICc0MThfTkFNRSc6ICdJTV9BX1RFQVBPVCcsXG4gICc0MThfTUVTU0FHRSc6ICdBbnkgYXR0ZW1wdCB0byBicmV3IGNvZmZlZSB3aXRoIGEgdGVhcG90IHNob3VsZCByZXN1bHQgaW4gdGhlIGVycm9yIGNvZGUgXCI0MTggSVxcJ20gYSB0ZWFwb3RcIi4gVGhlIHJlc3VsdGluZyBlbnRpdHkgYm9keSBNQVkgYmUgc2hvcnQgYW5kIHN0b3V0LicsXG4gICc0MThfQ0xBU1MnOiBjbGFzc2VzLkNMSUVOVF9FUlJPUixcbiAgSU1fQV9URUFQT1Q6IDQxOCxcbiAgLy8gNDIxIChSRkMgNzU0MCkgLSBUaGUgcmVxdWVzdCB3YXMgZGlyZWN0ZWQgYXQgYSBzZXJ2ZXIgdGhhdCBpcyBub3QgYWJsZSB0byBwcm9kdWNlIGEgcmVzcG9uc2UuXG4gIDQyMTogJ01pc2RpcmVjdGVkIFJlcXVlc3QnLFxuICAnNDIxX05BTUUnOiAnTUlTRElSRUNURURfUkVRVUVTVCcsXG4gICc0MjFfTUVTU0FHRSc6ICdUaGUgcmVxdWVzdCB3YXMgZGlyZWN0ZWQgYXQgYSBzZXJ2ZXIgdGhhdCBpcyBub3QgYWJsZSB0byBwcm9kdWNlIGEgcmVzcG9uc2UuJyxcbiAgJzQyMV9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICBNSVNESVJFQ1RFRF9SRVFVRVNUOiA0MjEsXG4gIC8vIDQyMiAoV2ViREFWOyBSRkMgNDkxOCkgLSBUaGUgcmVxdWVzdCB3YXMgd2VsbC1mb3JtZWQgYnV0IHdhcyB1bmFibGUgdG8gYmUgZm9sbG93ZWQgZHVlIHRvIHNlbWFudGljIGVycm9ycy5cbiAgNDIyOiAnVW5wcm9jZXNzYWJsZSBFbnRpdHknLFxuICAnNDIyX05BTUUnOiAnVU5QUk9DRVNTQUJMRV9FTlRJVFknLFxuICAnNDIyX01FU1NBR0UnOiAnVGhlIHJlcXVlc3Qgd2FzIHdlbGwtZm9ybWVkIGJ1dCB3YXMgdW5hYmxlIHRvIGJlIGZvbGxvd2VkIGR1ZSB0byBzZW1hbnRpYyBlcnJvcnMuJyxcbiAgJzQyMl9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICBVTlBST0NFU1NBQkxFX0VOVElUWTogNDIyLFxuICAvLyA0MjMgKFdlYkRBVjsgUkZDIDQ5MTgpIC0gVGhlIHJlc291cmNlIHRoYXQgaXMgYmVpbmcgYWNjZXNzZWQgaXMgbG9ja2VkLlxuICA0MjM6ICdMb2NrZWQnLFxuICAnNDIzX05BTUUnOiAnTE9DS0VEJyxcbiAgJzQyM19NRVNTQUdFJzogJ1RoZSByZXNvdXJjZSB0aGF0IGlzIGJlaW5nIGFjY2Vzc2VkIGlzIGxvY2tlZC4nLFxuICAnNDIzX0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIExPQ0tFRDogNDIzLFxuICAvLyA0MjQgKFdlYkRBVjsgUkZDIDQ5MTgpIC0gVGhlIHJlcXVlc3QgZmFpbGVkIGJlY2F1c2UgaXQgZGVwZW5kZWQgb24gYW5vdGhlciByZXF1ZXN0IGFuZCB0aGF0IHJlcXVlc3QgZmFpbGVkLlxuICA0MjQ6ICdGYWlsZWQgRGVwZW5kZW5jeScsXG4gICc0MjRfTkFNRSc6ICdGQUlMRURfREVQRU5ERU5DWScsXG4gICc0MjRfTUVTU0FHRSc6ICdUaGUgcmVxdWVzdCBmYWlsZWQgYmVjYXVzZSBpdCBkZXBlbmRlZCBvbiBhbm90aGVyIHJlcXVlc3QgYW5kIHRoYXQgcmVxdWVzdCBmYWlsZWQuJyxcbiAgJzQyNF9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICBGQUlMRURfREVQRU5ERU5DWTogNDI0LFxuICAvLyA0MjYgLSBUaGUgY2xpZW50IHNob3VsZCBzd2l0Y2ggdG8gYSBkaWZmZXJlbnQgcHJvdG9jb2wgc3VjaCBhcyBUTFMvMS4wLCBnaXZlbiBpbiB0aGUgVXBncmFkZSBoZWFkZXIgZmllbGQuXG4gIDQyNjogJ1VwZ3JhZGUgUmVxdWlyZWQnLFxuICAnNDI2X05BTUUnOiAnVVBHUkFERV9SRVFVSVJFRCcsXG4gICc0MjZfTUVTU0FHRSc6ICdUaGUgY2xpZW50IHNob3VsZCBzd2l0Y2ggdG8gYSBkaWZmZXJlbnQgcHJvdG9jb2wgc3VjaCBhcyBUTFMvMS4wLCBnaXZlbiBpbiB0aGUgVXBncmFkZSBoZWFkZXIgZmllbGQuJyxcbiAgJzQyNl9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICBVUEdSQURFX1JFUVVJUkVEOiA0MjYsXG4gIC8vIDQyOCAoUkZDIDY1ODUpIC0gVGhlIG9yaWdpbiBzZXJ2ZXIgcmVxdWlyZXMgdGhlIHJlcXVlc3QgdG8gYmUgY29uZGl0aW9uYWwuXG4gIDQyODogJ1ByZWNvbmRpdGlvbiBSZXF1aXJlZCcsIC8vIFJGQyA2NTg1XG4gICc0MjhfTkFNRSc6ICdQUkVDT05ESVRJT05fUkVRVUlSRUQnLFxuICAnNDI4X01FU1NBR0UnOiAnVGhlIG9yaWdpbiBzZXJ2ZXIgcmVxdWlyZXMgdGhlIHJlcXVlc3QgdG8gYmUgY29uZGl0aW9uYWwuJyxcbiAgJzQyOF9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICBQUkVDT05ESVRJT05fUkVRVUlSRUQ6IDQyOCxcbiAgLy8gNDI5IChSRkMgNjU4NSkgLSBUaGUgdXNlciBoYXMgc2VudCB0b28gbWFueSByZXF1ZXN0cyBpbiBhIGdpdmVuIGFtb3VudCBvZiB0aW1lLlxuICA0Mjk6ICdUb28gTWFueSBSZXF1ZXN0cycsXG4gICc0MjlfTkFNRSc6ICdUT09fTUFOWV9SRVFVRVNUUycsXG4gICc0MjlfTUVTU0FHRSc6ICdUaGUgdXNlciBoYXMgc2VudCB0b28gbWFueSByZXF1ZXN0cyBpbiBhIGdpdmVuIGFtb3VudCBvZiB0aW1lLicsXG4gICc0MjlfQ0xBU1MnOiBjbGFzc2VzLkNMSUVOVF9FUlJPUixcbiAgVE9PX01BTllfUkVRVUVTVFM6IDQyOSxcbiAgLy8gNDMxIChSRkMgNjU4NSkgLSBUaGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBwcm9jZXNzIHRoZSByZXF1ZXN0IGJlY2F1c2UgZWl0aGVyIGFuIGluZGl2aWR1YWwgaGVhZGVyIGZpZWxkLCBvciBhbGwgdGhlIGhlYWRlciBmaWVsZHMgY29sbGVjdGl2ZWx5LCBhcmUgdG9vIGxhcmdlLlxuICA0MzE6ICdSZXF1ZXN0IEhlYWRlciBGaWVsZHMgVG9vIExhcmdlJywgLy8gUkZDIDY1ODVcbiAgJzQzMV9OQU1FJzogJ1JFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0UnLFxuICAnNDMxX01FU1NBR0UnOiAnVGhlIHNlcnZlciBpcyB1bndpbGxpbmcgdG8gcHJvY2VzcyB0aGUgcmVxdWVzdCBiZWNhdXNlIGVpdGhlciBhbiBpbmRpdmlkdWFsIGhlYWRlciBmaWVsZCwgb3IgYWxsIHRoZSBoZWFkZXIgZmllbGRzIGNvbGxlY3RpdmVseSwgYXJlIHRvbyBsYXJnZS4nLFxuICAnNDMxX0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gIFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0U6IDQzMSxcbiAgLy8gNDUxIChSRkMgNzcyNSkgLSBBIHNlcnZlciBvcGVyYXRvciBoYXMgcmVjZWl2ZWQgYSBsZWdhbCBkZW1hbmQgdG8gZGVueSBhY2Nlc3MgdG8gYSByZXNvdXJjZSBvciB0byBhIHNldCBvZiByZXNvdXJjZXMgdGhhdCBpbmNsdWRlcyB0aGUgcmVxdWVzdGVkIHJlc291cmNlLlxuICA0NTE6ICdVbmF2YWlsYWJsZSBGb3IgTGVnYWwgUmVhc29ucycsXG4gICc0NTFfTkFNRSc6ICdVTkFWQUlMQUJMRV9GT1JfTEVHQUxfUkVBU09OUycsXG4gICc0NTFfTUVTU0FHRSc6ICdBIHNlcnZlciBvcGVyYXRvciBoYXMgcmVjZWl2ZWQgYSBsZWdhbCBkZW1hbmQgdG8gZGVueSBhY2Nlc3MgdG8gYSByZXNvdXJjZSBvciB0byBhIHNldCBvZiByZXNvdXJjZXMgdGhhdCBpbmNsdWRlcyB0aGUgcmVxdWVzdGVkIHJlc291cmNlLicsXG4gICc0NTFfQ0xBU1MnOiBjbGFzc2VzLkNMSUVOVF9FUlJPUixcbiAgVU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlM6IDQ1MSxcbiAgLy8gIyMgU2VydmVyIEVycm9yIDV4eFxuXG4gIC8vIEluZGljYXRlcyB0aGF0IHRoZSBzZXJ2ZXIgaXMgYXdhcmUgdGhhdCBpdCBoYXMgZXJyZWQgb3IgaXMgaW5jYXBhYmxlIG9mIHBlcmZvcm1pbmcgdGhlIHJlcXVlc3RlZCBtZXRob2QuXG5cbiAgLy8gNTAwIC0gQSBnZW5lcmljIGVycm9yIG1lc3NhZ2UsIGdpdmVuIHdoZW4gYW4gdW5leHBlY3RlZCBjb25kaXRpb24gd2FzIGVuY291bnRlcmVkIGFuZCBubyBtb3JlIHNwZWNpZmljIG1lc3NhZ2UgaXMgc3VpdGFibGUuXG4gIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG4gICc1MDBfTkFNRSc6ICdJTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAnNTAwX01FU1NBR0UnOiAnQSBnZW5lcmljIGVycm9yIG1lc3NhZ2UsIGdpdmVuIHdoZW4gYW4gdW5leHBlY3RlZCBjb25kaXRpb24gd2FzIGVuY291bnRlcmVkIGFuZCBubyBtb3JlIHNwZWNpZmljIG1lc3NhZ2UgaXMgc3VpdGFibGUuJyxcbiAgJzUwMF9DTEFTUyc6IGNsYXNzZXMuU0VSVkVSX0VSUk9SLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1I6IDUwMCxcbiAgLy8gNTAxIC0gVGhlIHNlcnZlciBlaXRoZXIgZG9lcyBub3QgcmVjb2duaXplIHRoZSByZXF1ZXN0IG1ldGhvZCwgb3IgaXQgbGFja3MgdGhlIGFiaWxpdHkgdG8gZnVsZmlsIHRoZSByZXF1ZXN0LiBVc3VhbGx5IHRoaXMgaW1wbGllcyBmdXR1cmUgYXZhaWxhYmlsaXR5LlxuICA1MDE6ICdOb3QgSW1wbGVtZW50ZWQnLFxuICAnNTAxX05BTUUnOiAnTk9UX0lNUExFTUVOVEVEJyxcbiAgJzUwMV9NRVNTQUdFJzogJ1RoZSBzZXJ2ZXIgZWl0aGVyIGRvZXMgbm90IHJlY29nbml6ZSB0aGUgcmVxdWVzdCBtZXRob2QsIG9yIGl0IGxhY2tzIHRoZSBhYmlsaXR5IHRvIGZ1bGZpbCB0aGUgcmVxdWVzdC4gVXN1YWxseSB0aGlzIGltcGxpZXMgZnV0dXJlIGF2YWlsYWJpbGl0eS4nLFxuICAnNTAxX0NMQVNTJzogY2xhc3Nlcy5TRVJWRVJfRVJST1IsXG4gIE5PVF9JTVBMRU1FTlRFRDogNTAxLFxuICAvLyA1MDIgLSBUaGUgc2VydmVyIHdhcyBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5IGFuZCByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIGZyb20gdGhlIHVwc3RyZWFtIHNlcnZlci5cbiAgNTAyOiAnQmFkIEdhdGV3YXknLFxuICAnNTAyX05BTUUnOiAnQkFEX0dBVEVXQVknLFxuICAnNTAyX01FU1NBR0UnOiAnVGhlIHNlcnZlciB3YXMgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSBhbmQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSB1cHN0cmVhbSBzZXJ2ZXIuJyxcbiAgJzUwMl9DTEFTUyc6IGNsYXNzZXMuU0VSVkVSX0VSUk9SLFxuICBCQURfR0FURVdBWTogNTAyLFxuICAvLyA1MDMgLSBUaGUgc2VydmVyIGlzIGN1cnJlbnRseSB1bmF2YWlsYWJsZSAoYmVjYXVzZSBpdCBpcyBvdmVybG9hZGVkIG9yIGRvd24gZm9yIG1haW50ZW5hbmNlKS4gR2VuZXJhbGx5LCB0aGlzIGlzIGEgdGVtcG9yYXJ5IHN0YXRlLlxuICA1MDM6ICdTZXJ2aWNlIFVuYXZhaWxhYmxlJyxcbiAgJzUwM19OQU1FJzogJ1NFUlZJQ0VfVU5BVkFJTEFCTEUnLFxuICAnNTAzX01FU1NBR0UnOiAnVGhlIHNlcnZlciBpcyBjdXJyZW50bHkgdW5hdmFpbGFibGUgKGJlY2F1c2UgaXQgaXMgb3ZlcmxvYWRlZCBvciBkb3duIGZvciBtYWludGVuYW5jZSkuIEdlbmVyYWxseSwgdGhpcyBpcyBhIHRlbXBvcmFyeSBzdGF0ZS4nLFxuICAnNTAzX0NMQVNTJzogY2xhc3Nlcy5TRVJWRVJfRVJST1IsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEU6IDUwMyxcbiAgLy8gNTA0IC0gVGhlIHNlcnZlciB3YXMgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSBhbmQgZGlkIG5vdCByZWNlaXZlIGEgdGltZWx5IHJlc3BvbnNlIGZyb20gdGhlIHVwc3RyZWFtIHNlcnZlci5cbiAgNTA0OiAnR2F0ZXdheSBUaW1lLW91dCcsXG4gICc1MDRfTkFNRSc6ICdHQVRFV0FZX1RJTUVPVVQnLFxuICAnNTA0X01FU1NBR0UnOiAnVGhlIHNlcnZlciB3YXMgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSBhbmQgZGlkIG5vdCByZWNlaXZlIGEgdGltZWx5IHJlc3BvbnNlIGZyb20gdGhlIHVwc3RyZWFtIHNlcnZlci4nLFxuICAnNTA0X0NMQVNTJzogY2xhc3Nlcy5TRVJWRVJfRVJST1IsXG4gIEdBVEVXQVlfVElNRU9VVDogNTA0LFxuICAvLyA1MDUgLSBUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIEhUVFAgcHJvdG9jb2wgdmVyc2lvbiB1c2VkIGluIHRoZSByZXF1ZXN0LlxuICA1MDU6ICdIVFRQIFZlcnNpb24gbm90IFN1cHBvcnRlZCcsXG4gICc1MDVfTkFNRSc6ICdIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRCcsXG4gICc1MDVfTUVTU0FHRSc6ICdUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIEhUVFAgcHJvdG9jb2wgdmVyc2lvbiB1c2VkIGluIHRoZSByZXF1ZXN0LicsXG4gICc1MDVfQ0xBU1MnOiBjbGFzc2VzLlNFUlZFUl9FUlJPUixcbiAgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQ6IDUwNSxcbiAgLy8gNTA2IChSRkMgMjI5NSkgLSBUcmFuc3BhcmVudCBjb250ZW50IG5lZ290aWF0aW9uIGZvciB0aGUgcmVxdWVzdCByZXN1bHRzIGluIGEgY2lyY3VsYXIgcmVmZXJlbmNlLlxuICA1MDY6ICdWYXJpYW50IEFsc28gTmVnb3RpYXRlcycsXG4gICc1MDZfTkFNRSc6ICdWQVJJQU5UX0FMU09fTkVHT1RJQVRFUycsXG4gICc1MDZfTUVTU0FHRSc6ICdUcmFuc3BhcmVudCBjb250ZW50IG5lZ290aWF0aW9uIGZvciB0aGUgcmVxdWVzdCByZXN1bHRzIGluIGEgY2lyY3VsYXIgcmVmZXJlbmNlLicsXG4gICc1MDZfQ0xBU1MnOiBjbGFzc2VzLlNFUlZFUl9FUlJPUixcbiAgVkFSSUFOVF9BTFNPX05FR09USUFURVM6IDUwNixcbiAgLy8gNTA3IChXZWJEQVY7IFJGQyA0OTE4KSAtIFRoZSBzZXJ2ZXIgaXMgdW5hYmxlIHRvIHN0b3JlIHRoZSByZXByZXNlbnRhdGlvbiBuZWVkZWQgdG8gY29tcGxldGUgdGhlIHJlcXVlc3QuXG4gIDUwNzogJ0luc3VmZmljaWVudCBTdG9yYWdlJyxcbiAgJzUwN19OQU1FJzogJ0lOU1VGRklDSUVOVF9TVE9SQUdFJyxcbiAgJzUwN19NRVNTQUdFJzogJ1RoZSBzZXJ2ZXIgaXMgdW5hYmxlIHRvIHN0b3JlIHRoZSByZXByZXNlbnRhdGlvbiBuZWVkZWQgdG8gY29tcGxldGUgdGhlIHJlcXVlc3QuJyxcbiAgJzUwN19DTEFTUyc6IGNsYXNzZXMuU0VSVkVSX0VSUk9SLFxuICBJTlNVRkZJQ0lFTlRfU1RPUkFHRTogNTA3LFxuICAvLyA1MDggKFdlYkRBVjsgUkZDIDU4NDIpIC0gVGhlIHNlcnZlciBkZXRlY3RlZCBhbiBpbmZpbml0ZSBsb29wIHdoaWxlIHByb2Nlc3NpbmcgdGhlIHJlcXVlc3QuXG4gIDUwODogJ0xvb3AgRGV0ZWN0ZWQnLFxuICAnNTA4X05BTUUnOiAnTE9PUF9ERVRFQ1RFRCcsXG4gICc1MDhfTUVTU0FHRSc6ICdUaGUgc2VydmVyIGRldGVjdGVkIGFuIGluZmluaXRlIGxvb3Agd2hpbGUgcHJvY2Vzc2luZyB0aGUgcmVxdWVzdC4nLFxuICAnNTA4X0NMQVNTJzogY2xhc3Nlcy5TRVJWRVJfRVJST1IsXG4gIExPT1BfREVURUNURUQ6IDUwOCxcbiAgLy8gNTEwIChSRkMgMjc3NCkgLSBGdXJ0aGVyIGV4dGVuc2lvbnMgdG8gdGhlIHJlcXVlc3QgYXJlIHJlcXVpcmVkIGZvciB0aGUgc2VydmVyIHRvIGZ1bGZpbCBpdC5cbiAgNTEwOiAnTm90IEV4dGVuZGVkJyxcbiAgJzUxMF9OQU1FJzogJ05PVF9FWFRFTkRFRCcsXG4gICc1MTBfTUVTU0FHRSc6ICdGdXJ0aGVyIGV4dGVuc2lvbnMgdG8gdGhlIHJlcXVlc3QgYXJlIHJlcXVpcmVkIGZvciB0aGUgc2VydmVyIHRvIGZ1bGZpbCBpdC4nLFxuICAnNTEwX0NMQVNTJzogY2xhc3Nlcy5TRVJWRVJfRVJST1IsXG4gIE5PVF9FWFRFTkRFRDogNTEwLFxuICAvLyA1MTEgKFJGQyA2NTg1KSAtIFRoZSBjbGllbnQgbmVlZHMgdG8gYXV0aGVudGljYXRlIHRvIGdhaW4gbmV0d29yayBhY2Nlc3MuIEludGVuZGVkIGZvciB1c2UgYnkgaW50ZXJjZXB0aW5nIHByb3hpZXMgdXNlZCB0byBjb250cm9sIGFjY2VzcyB0byB0aGUgbmV0d29yay5cbiAgNTExOiAnTmV0d29yayBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZCcsXG4gICc1MTFfTkFNRSc6ICdORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEJyxcbiAgJzUxMV9NRVNTQUdFJzogJ1RoZSBjbGllbnQgbmVlZHMgdG8gYXV0aGVudGljYXRlIHRvIGdhaW4gbmV0d29yayBhY2Nlc3MuIEludGVuZGVkIGZvciB1c2UgYnkgaW50ZXJjZXB0aW5nIHByb3hpZXMgdXNlZCB0byBjb250cm9sIGFjY2VzcyB0byB0aGUgbmV0d29yay4nLFxuICAnNTExX0NMQVNTJzogY2xhc3Nlcy5TRVJWRVJfRVJST1IsXG4gIE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQ6IDUxMSxcbiAgLy8gIyMgRXh0cmEgY29kZVxuXG4gIC8vIEV4dHJhIEhUVFAgY29kZSBpbXBsZW1lbnRlZCBieSB2ZW5kb3JzIGFuZCBvdGhlciBzcGVjaWZpY2F0aW9ucy5cbiAgZXh0cmE6IHtcbiAgICAvLyAjIyMgVW5vZmZpY2lhbCBjb2Rlc1xuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlcyBhcmUgbm90IHNwZWNpZmllZCBieSBhbnkgc3RhbmRhcmQuXG4gICAgdW5vZmZpY2lhbDoge1xuICAgICAgLy8gMTAzIC0gVXNlZCBpbiB0aGUgcmVzdW1hYmxlIHJlcXVlc3RzIHByb3Bvc2FsIHRvIHJlc3VtZSBhYm9ydGVkIFBVVCBvciBQT1NUIHJlcXVlc3RzLlxuICAgICAgMTAzOiAnQ2hlY2twb2ludCcsXG4gICAgICAnMTAzX05BTUUnOiAnQ0hFQ0tQT0lOVCcsXG4gICAgICAnMTAzX01FU1NBR0UnOiAnVXNlZCBpbiB0aGUgcmVzdW1hYmxlIHJlcXVlc3RzIHByb3Bvc2FsIHRvIHJlc3VtZSBhYm9ydGVkIFBVVCBvciBQT1NUIHJlcXVlc3RzLicsXG4gICAgICAnMTAzX0NMQVNTJzogY2xhc3Nlcy5JTkZPUk1BVElPTkFMLFxuICAgICAgQ0hFQ0tQT0lOVDogMTAzLFxuICAgICAgLy8gNDE5IFBhZ2UgRXhwaXJlZCAoTGFyYXZlbCBGcmFtZXdvcmspIC0gVXNlZCBieSB0aGUgTGFyYXZlbCBGcmFtZXdvcmsgd2hlbiBhIENTUkYgVG9rZW4gaXMgbWlzc2luZyBvciBleHBpcmVkLlxuICAgICAgNDE5OiAnUGFnZSBFeHBpcmVkJyxcbiAgICAgICc0MTlfTkFNRSc6ICdQQUdFX0VYUElSRUQnLFxuICAgICAgJzQxOV9NRVNTQUdFJzogJ1VzZWQgYnkgdGhlIExhcmF2ZWwgRnJhbWV3b3JrIHdoZW4gYSBDU1JGIFRva2VuIGlzIG1pc3Npbmcgb3IgZXhwaXJlZC4nLFxuICAgICAgJzQxOV9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICAgICAgUEFHRV9FWFBJUkVEOiA0MTksXG4gICAgICAvLyAyMTggVGhpcyBpcyBmaW5lIChBcGFjaGUgV2ViIFNlcnZlcikgLSBVc2VkIGFzIGEgY2F0Y2gtYWxsIGVycm9yIGNvbmRpdGlvbiBmb3IgYWxsb3dpbmcgcmVzcG9uc2UgYm9kaWVzIHRvIGZsb3cgdGhyb3VnaCBBcGFjaGUgd2hlbiBQcm94eUVycm9yT3ZlcnJpZGUgaXMgZW5hYmxlZC4gV2hlbiBQcm94eUVycm9yT3ZlcnJpZGUgaXMgZW5hYmxlZCBpbiBBcGFjaGUsIHJlc3BvbnNlIGJvZGllcyB0aGF0IGNvbnRhaW4gYSBzdGF0dXMgY29kZSBvZiA0eHggb3IgNXh4IGFyZSBhdXRvbWF0aWNhbGx5IGRpc2NhcmRlZCBieSBBcGFjaGUgaW4gZmF2b3Igb2YgYSBnZW5lcmljIHJlc3BvbnNlIG9yIGEgY3VzdG9tIHJlc3BvbnNlIHNwZWNpZmllZCBieSB0aGUgRXJyb3JEb2N1bWVudCBkaXJlY3RpdmUuXG4gICAgICAyMTg6ICdUaGlzIGlzIGZpbmUnLFxuICAgICAgJzIxOF9OQU1FJzogJ1RISVNfSVNfRklORScsXG4gICAgICAnMjE4X01FU1NBR0UnOiAnVXNlZCBhcyBhIGNhdGNoLWFsbCBlcnJvciBjb25kaXRpb24gZm9yIGFsbG93aW5nIHJlc3BvbnNlIGJvZGllcyB0byBmbG93IHRocm91Z2ggQXBhY2hlIHdoZW4gUHJveHlFcnJvck92ZXJyaWRlIGlzIGVuYWJsZWQuIFdoZW4gUHJveHlFcnJvck92ZXJyaWRlIGlzIGVuYWJsZWQgaW4gQXBhY2hlLCByZXNwb25zZSBib2RpZXMgdGhhdCBjb250YWluIGEgc3RhdHVzIGNvZGUgb2YgNHh4IG9yIDV4eCBhcmUgYXV0b21hdGljYWxseSBkaXNjYXJkZWQgYnkgQXBhY2hlIGluIGZhdm9yIG9mIGEgZ2VuZXJpYyByZXNwb25zZSBvciBhIGN1c3RvbSByZXNwb25zZSBzcGVjaWZpZWQgYnkgdGhlIEVycm9yRG9jdW1lbnQgZGlyZWN0aXZlLicsXG4gICAgICAnMjE4X0NMQVNTJzogY2xhc3Nlcy5TVUNDRVNTRlVMLFxuICAgICAgVEhJU19JU19GSU5FOiAyMTgsXG4gICAgICAvLyA0MjAgRW5oYW5jZSBZb3VyIENhbG0gKFR3aXR0ZXIpIC0gUmV0dXJuZWQgYnkgdmVyc2lvbiAxIG9mIHRoZSBUd2l0dGVyIFNlYXJjaCBhbmQgVHJlbmRzIEFQSSB3aGVuIHRoZSBjbGllbnQgaXMgYmVpbmcgcmF0ZSBsaW1pdGVkOyB2ZXJzaW9ucyAxLjEgYW5kIGxhdGVyIHVzZSB0aGUgNDI5IFRvbyBNYW55IFJlcXVlc3RzIHJlc3BvbnNlIGNvZGUgaW5zdGVhZC5cbiAgICAgIDQyMDogJ0VuaGFuY2UgWW91ciBDYWxtJyxcbiAgICAgICc0MjBfTkFNRSc6ICdFTkhBTkNFX1lPVVJfQ0FMTScsXG4gICAgICAnNDIwX01FU1NBR0UnOiAnUmV0dXJuZWQgYnkgdmVyc2lvbiAxIG9mIHRoZSBUd2l0dGVyIFNlYXJjaCBhbmQgVHJlbmRzIEFQSSB3aGVuIHRoZSBjbGllbnQgaXMgYmVpbmcgcmF0ZSBsaW1pdGVkOyB2ZXJzaW9ucyAxLjEgYW5kIGxhdGVyIHVzZSB0aGUgNDI5IFRvbyBNYW55IFJlcXVlc3RzIHJlc3BvbnNlIGNvZGUgaW5zdGVhZC4nLFxuICAgICAgJzQyMF9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICAgICAgRU5IQU5DRV9ZT1VSX0NBTE06IDQyMCxcbiAgICAgIC8vIDQ1MCBCbG9ja2VkIGJ5IFdpbmRvd3MgUGFyZW50YWwgKE1pY3Jvc29mdCkgLSBUaGUgTWljcm9zb2Z0IGV4dGVuc2lvbiBjb2RlIGluZGljYXRlZCB3aGVuIFdpbmRvd3MgUGFyZW50YWwgQ29udHJvbHMgYXJlIHR1cm5lZCBvbiBhbmQgYXJlIGJsb2NraW5nIGFjY2VzcyB0byB0aGUgcmVxdWVzdGVkIHdlYnBhZ2UuXG4gICAgICA0NTA6ICdCbG9ja2VkIGJ5IFdpbmRvd3MgUGFyZW50YWwgQ29udHJvbHMnLFxuICAgICAgJzQ1MF9OQU1FJzogJ0JMT0NLRURfQllfV0lORE9XU19QQVJFTlRBTF9DT05UUk9MUycsXG4gICAgICAnNDUwX01FU1NBR0UnOiAnVGhlIE1pY3Jvc29mdCBleHRlbnNpb24gY29kZSBpbmRpY2F0ZWQgd2hlbiBXaW5kb3dzIFBhcmVudGFsIENvbnRyb2xzIGFyZSB0dXJuZWQgb24gYW5kIGFyZSBibG9ja2luZyBhY2Nlc3MgdG8gdGhlIHJlcXVlc3RlZCB3ZWJwYWdlLicsXG4gICAgICAnNDUwX0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gICAgICBCTE9DS0VEX0JZX1dJTkRPV1NfUEFSRU5UQUxfQ09OVFJPTFM6IDQ1MCxcbiAgICAgIC8vIDQ5OCBJbnZhbGlkIFRva2VuIChFc3JpKSAtIFJldHVybmVkIGJ5IEFyY0dJUyBmb3IgU2VydmVyLiBDb2RlIDQ5OCBpbmRpY2F0ZXMgYW4gZXhwaXJlZCBvciBvdGhlcndpc2UgaW52YWxpZCB0b2tlbi5cbiAgICAgIDQ5ODogJ0ludmFsaWQgVG9rZW4nLFxuICAgICAgJzQ5OF9OQU1FJzogJ0lOVkFMSURfVE9LRU4nLFxuICAgICAgJzQ5OF9NRVNTQUdFJzogJ1JldHVybmVkIGJ5IEFyY0dJUyBmb3IgU2VydmVyLiBDb2RlIDQ5OCBpbmRpY2F0ZXMgYW4gZXhwaXJlZCBvciBvdGhlcndpc2UgaW52YWxpZCB0b2tlbi4nLFxuICAgICAgJzQ5OF9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICAgICAgSU5WQUxJRF9UT0tFTjogNDk4LFxuICAgICAgLy8gNDk5IFRva2VuIFJlcXVpcmVkIChFc3JpKSAtIFJldHVybmVkIGJ5IEFyY0dJUyBmb3IgU2VydmVyLiBDb2RlIDQ5OSBpbmRpY2F0ZXMgdGhhdCBhIHRva2VuIGlzIHJlcXVpcmVkIGJ1dCB3YXMgbm90IHN1Ym1pdHRlZC5cbiAgICAgIDQ5OTogJ1Rva2VuIFJlcXVpcmVkJyxcbiAgICAgICc0OTlfTkFNRSc6ICdUT0tFTl9SRVFVSVJFRCcsXG4gICAgICAnNDk5X01FU1NBR0UnOiAnUmV0dXJuZWQgYnkgQXJjR0lTIGZvciBTZXJ2ZXIuIENvZGUgNDk5IGluZGljYXRlcyB0aGF0IGEgdG9rZW4gaXMgcmVxdWlyZWQgYnV0IHdhcyBub3Qgc3VibWl0dGVkLicsXG4gICAgICAnNDk5X0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gICAgICBUT0tFTl9SRVFVSVJFRDogNDk5LFxuICAgICAgLy8gNTA5IEJhbmR3aWR0aCBMaW1pdCBFeGNlZWRlZCAoQXBhY2hlIFdlYiBTZXJ2ZXIvY1BhbmVsKSAtIFRoZSBzZXJ2ZXIgaGFzIGV4Y2VlZGVkIHRoZSBiYW5kd2lkdGggc3BlY2lmaWVkIGJ5IHRoZSBzZXJ2ZXIgYWRtaW5pc3RyYXRvci5cbiAgICAgIDUwOTogJ0JhbmR3aWR0aCBMaW1pdCBFeGNlZWRlZCcsXG4gICAgICAnNTA5X05BTUUnOiAnQkFORFdJRFRIX0xJTUlUX0VYQ0VFREVEJyxcbiAgICAgICc1MDlfTUVTU0FHRSc6ICdUaGUgc2VydmVyIGhhcyBleGNlZWRlZCB0aGUgYmFuZHdpZHRoIHNwZWNpZmllZCBieSB0aGUgc2VydmVyIGFkbWluaXN0cmF0b3IuJyxcbiAgICAgICc1MDlfQ0xBU1MnOiBjbGFzc2VzLlNFUlZFUl9FUlJPUixcbiAgICAgIEJBTkRXSURUSF9MSU1JVF9FWENFRURFRDogNTA5LFxuICAgICAgLy8gNTMwIFNpdGUgaXMgZnJvemVuIC0gVXNlZCBieSB0aGUgUGFudGhlb24gd2ViIHBsYXRmb3JtIHRvIGluZGljYXRlIGEgc2l0ZSB0aGF0IGhhcyBiZWVuIGZyb3plbiBkdWUgdG8gaW5hY3Rpdml0eS5cbiAgICAgIDUzMDogJ1NpdGUgaXMgZnJvemVuJyxcbiAgICAgICc1MzBfTkFNRSc6ICdTSVRFX0lTX0ZST1pFTicsXG4gICAgICAnNTMwX01FU1NBR0UnOiAnVXNlZCBieSB0aGUgUGFudGhlb24gd2ViIHBsYXRmb3JtIHRvIGluZGljYXRlIGEgc2l0ZSB0aGF0IGhhcyBiZWVuIGZyb3plbiBkdWUgdG8gaW5hY3Rpdml0eS4nLFxuICAgICAgJzUzMF9DTEFTUyc6IGNsYXNzZXMuU0VSVkVSX0VSUk9SLFxuICAgICAgU0lURV9JU19GUk9aRU46IDUzMCxcbiAgICAgIC8vIDU5OCAoSW5mb3JtYWwgY29udmVudGlvbikgTmV0d29yayByZWFkIHRpbWVvdXQgZXJyb3IgLSBVc2VkIGJ5IHNvbWUgSFRUUCBwcm94aWVzIHRvIHNpZ25hbCBhIG5ldHdvcmsgcmVhZCB0aW1lb3V0IGJlaGluZCB0aGUgcHJveHkgdG8gYSBjbGllbnQgaW4gZnJvbnQgb2YgdGhlIHByb3h5LlxuICAgICAgNTk4OiAnTmV0d29yayByZWFkIHRpbWVvdXQgZXJyb3InLFxuICAgICAgJzU5OF9OQU1FJzogJ05FVFdPUktfUkVBRF9USU1FT1VUX0VSUk9SJyxcbiAgICAgICc1OThfTUVTU0FHRSc6ICdVc2VkIGJ5IHNvbWUgSFRUUCBwcm94aWVzIHRvIHNpZ25hbCBhIG5ldHdvcmsgcmVhZCB0aW1lb3V0IGJlaGluZCB0aGUgcHJveHkgdG8gYSBjbGllbnQgaW4gZnJvbnQgb2YgdGhlIHByb3h5LicsXG4gICAgICAnNTk4X0NMQVNTJzogY2xhc3Nlcy5TRVJWRVJfRVJST1IsXG4gICAgICBORVRXT1JLX1JFQURfVElNRU9VVF9FUlJPUjogNTk4XG4gICAgfSxcbiAgICAvLyAjIyMgSW50ZXJuZXQgSW5mb3JtYXRpb24gU2VydmljZXMgKElJUylcblxuICAgIC8vIE1pY3Jvc29mdCdzIEludGVybmV0IEluZm9ybWF0aW9uIFNlcnZpY2VzIChJSVMpIHdlYiBzZXJ2ZXIgZXhwYW5kcyB0aGUgNHh4IGVycm9yIHNwYWNlIHRvIHNpZ25hbCBlcnJvcnMgd2l0aCB0aGUgY2xpZW50J3MgcmVxdWVzdC5cbiAgICBpaXM6IHtcbiAgICAgIC8vIDQ0MCAtIFRoZSBjbGllbnQncyBzZXNzaW9uIGhhcyBleHBpcmVkIGFuZCBtdXN0IGxvZyBpbiBhZ2Fpbi5cbiAgICAgIDQ0MDogJ0xvZ2luIFRpbWUtb3V0JyxcbiAgICAgICc0NDBfTkFNRSc6ICdMT0dJTl9USU1FX09VVCcsXG4gICAgICAnNDQwX01FU1NBR0UnOiAnVGhlIGNsaWVudFxcJ3Mgc2Vzc2lvbiBoYXMgZXhwaXJlZCBhbmQgbXVzdCBsb2cgaW4gYWdhaW4uJyxcbiAgICAgICc0NDBfQ0xBU1MnOiBjbGFzc2VzLkNMSUVOVF9FUlJPUixcbiAgICAgIExPR0lOX1RJTUVfT1VUOiA0NDAsXG4gICAgICAvLyA0NDkgLSBUaGUgc2VydmVyIGNhbm5vdCBob25vdXIgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgdXNlciBoYXMgbm90IHByb3ZpZGVkIHRoZSByZXF1aXJlZCBpbmZvcm1hdGlvbi5cbiAgICAgIDQ0OTogJ1JldHJ5IFdpdGgnLFxuICAgICAgJzQ0OV9OQU1FJzogJ1JFVFJZX1dJVEgnLFxuICAgICAgJzQ0OV9NRVNTQUdFJzogJ1RoZSBzZXJ2ZXIgY2Fubm90IGhvbm91ciB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSB1c2VyIGhhcyBub3QgcHJvdmlkZWQgdGhlIHJlcXVpcmVkIGluZm9ybWF0aW9uLicsXG4gICAgICAnNDQ5X0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gICAgICBSRVRSWV9XSVRIOiA0NDksXG4gICAgICAvLyA0NTEgLSBVc2VkIGluIEV4Y2hhbmdlIEFjdGl2ZVN5bmMgd2hlbiBlaXRoZXIgYSBtb3JlIGVmZmljaWVudCBzZXJ2ZXIgaXMgYXZhaWxhYmxlIG9yIHRoZSBzZXJ2ZXIgY2Fubm90IGFjY2VzcyB0aGUgdXNlcnMnIG1haWxib3guXG4gICAgICA0NTE6ICdSZWRpcmVjdCcsXG4gICAgICAnNDUxX05BTUUnOiAnUkVESVJFQ1QnLFxuICAgICAgJzQ1MV9NRVNTQUdFJzogJ1VzZWQgaW4gRXhjaGFuZ2UgQWN0aXZlU3luYyB3aGVuIGVpdGhlciBhIG1vcmUgZWZmaWNpZW50IHNlcnZlciBpcyBhdmFpbGFibGUgb3IgdGhlIHNlcnZlciBjYW5ub3QgYWNjZXNzIHRoZSB1c2Vyc1xcJyBtYWlsYm94LicsXG4gICAgICAnNDUxX0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gICAgICBSRURJUkVDVDogNDUxXG4gICAgfSxcbiAgICAvLyAjIyMgTkdJTlhcblxuICAgIC8vIFRoZSBOR0lOWCB3ZWIgc2VydmVyIHNvZnR3YXJlIGV4cGFuZHMgdGhlIDR4eCBlcnJvciBzcGFjZSB0byBzaWduYWwgaXNzdWVzIHdpdGggdGhlIGNsaWVudCdzIHJlcXVlc3QuXG4gICAgbmdpbng6IHtcbiAgICAgIC8vIDQ0NCAtIFVzZWQgaW50ZXJuYWxseSB0byBpbnN0cnVjdCB0aGUgc2VydmVyIHRvIHJldHVybiBubyBpbmZvcm1hdGlvbiB0byB0aGUgY2xpZW50IGFuZCBjbG9zZSB0aGUgY29ubmVjdGlvbiBpbW1lZGlhdGVseS5cbiAgICAgIDQ0NDogJ05vIFJlc3BvbnNlJyxcbiAgICAgICc0NDRfTkFNRSc6ICdOT19SRVNQT05TRScsXG4gICAgICAnNDQ0X01FU1NBR0UnOiAnVXNlZCBpbnRlcm5hbGx5IHRvIGluc3RydWN0IHRoZSBzZXJ2ZXIgdG8gcmV0dXJuIG5vIGluZm9ybWF0aW9uIHRvIHRoZSBjbGllbnQgYW5kIGNsb3NlIHRoZSBjb25uZWN0aW9uIGltbWVkaWF0ZWx5LicsXG4gICAgICAnNDQ0X0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gICAgICBOT19SRVNQT05TRTogNDQ0LFxuICAgICAgLy8gNDk0IC0gQ2xpZW50IHNlbnQgdG9vIGxhcmdlIHJlcXVlc3Qgb3IgdG9vIGxvbmcgaGVhZGVyIGxpbmUuXG4gICAgICA0OTQ6ICdSZXF1ZXN0IGhlYWRlciB0b28gbGFyZ2UnLFxuICAgICAgJzQ5NF9OQU1FJzogJ1JFUVVFU1RfSEVBREVSX1RPT19MQVJHRScsXG4gICAgICAnNDk0X01FU1NBR0UnOiAnQ2xpZW50IHNlbnQgdG9vIGxhcmdlIHJlcXVlc3Qgb3IgdG9vIGxvbmcgaGVhZGVyIGxpbmUuJyxcbiAgICAgICc0OTRfQ0xBU1MnOiBjbGFzc2VzLkNMSUVOVF9FUlJPUixcbiAgICAgIFJFUVVFU1RfSEVBREVSX1RPT19MQVJHRTogNDk0LFxuICAgICAgLy8gNDk1IC0gQW4gZXhwYW5zaW9uIG9mIHRoZSA0MDAgQmFkIFJlcXVlc3QgcmVzcG9uc2UgY29kZSwgdXNlZCB3aGVuIHRoZSBjbGllbnQgaGFzIHByb3ZpZGVkIGFuIGludmFsaWQgY2xpZW50IGNlcnRpZmljYXRlLlxuICAgICAgNDk1OiAnU1NMIENlcnRpZmljYXRlIEVycm9yJyxcbiAgICAgICc0OTVfTkFNRSc6ICdTU0xfQ0VSVElGSUNBVEVfRVJST1InLFxuICAgICAgJzQ5NV9NRVNTQUdFJzogJ0FuIGV4cGFuc2lvbiBvZiB0aGUgNDAwIEJhZCBSZXF1ZXN0IHJlc3BvbnNlIGNvZGUsIHVzZWQgd2hlbiB0aGUgY2xpZW50IGhhcyBwcm92aWRlZCBhbiBpbnZhbGlkIGNsaWVudCBjZXJ0aWZpY2F0ZS4nLFxuICAgICAgJzQ5NV9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICAgICAgU1NMX0NFUlRJRklDQVRFX0VSUk9SOiA0OTUsXG4gICAgICAvLyA0OTYgLSBBbiBleHBhbnNpb24gb2YgdGhlIDQwMCBCYWQgUmVxdWVzdCByZXNwb25zZSBjb2RlLCB1c2VkIHdoZW4gYSBjbGllbnQgY2VydGlmaWNhdGUgaXMgcmVxdWlyZWQgYnV0IG5vdCBwcm92aWRlZC5cbiAgICAgIDQ5NjogJ1NTTCBDZXJ0aWZpY2F0ZSBSZXF1aXJlZCcsXG4gICAgICAnNDk2X05BTUUnOiAnU1NMX0NFUlRJRklDQVRFX1JFUVVJUkVEJyxcbiAgICAgICc0OTZfTUVTU0FHRSc6ICdBbiBleHBhbnNpb24gb2YgdGhlIDQwMCBCYWQgUmVxdWVzdCByZXNwb25zZSBjb2RlLCB1c2VkIHdoZW4gYSBjbGllbnQgY2VydGlmaWNhdGUgaXMgcmVxdWlyZWQgYnV0IG5vdCBwcm92aWRlZC4nLFxuICAgICAgJzQ5Nl9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICAgICAgU1NMX0NFUlRJRklDQVRFX1JFUVVJUkVEOiA0OTYsXG4gICAgICAvLyA0OTcgLSBBbiBleHBhbnNpb24gb2YgdGhlIDQwMCBCYWQgUmVxdWVzdCByZXNwb25zZSBjb2RlLCB1c2VkIHdoZW4gdGhlIGNsaWVudCBoYXMgbWFkZSBhIEhUVFAgcmVxdWVzdCB0byBhIHBvcnQgbGlzdGVuaW5nIGZvciBIVFRQUyByZXF1ZXN0cy5cbiAgICAgIDQ5NzogJ0hUVFAgUmVxdWVzdCBTZW50IHRvIEhUVFBTIFBvcnQnLFxuICAgICAgJzQ5N19OQU1FJzogJ0hUVFBfUkVRVUVTVF9TRU5UX1RPX0hUVFBTX1BPUlQnLFxuICAgICAgJzQ5N19NRVNTQUdFJzogJ0FuIGV4cGFuc2lvbiBvZiB0aGUgNDAwIEJhZCBSZXF1ZXN0IHJlc3BvbnNlIGNvZGUsIHVzZWQgd2hlbiB0aGUgY2xpZW50IGhhcyBtYWRlIGEgSFRUUCByZXF1ZXN0IHRvIGEgcG9ydCBsaXN0ZW5pbmcgZm9yIEhUVFBTIHJlcXVlc3RzLicsXG4gICAgICAnNDk3X0NMQVNTJzogY2xhc3Nlcy5DTElFTlRfRVJST1IsXG4gICAgICBIVFRQX1JFUVVFU1RfU0VOVF9UT19IVFRQU19QT1JUOiA0OTcsXG4gICAgICAvLyA0OTkgLSBVc2VkIHdoZW4gdGhlIGNsaWVudCBoYXMgY2xvc2VkIHRoZSByZXF1ZXN0IGJlZm9yZSB0aGUgc2VydmVyIGNvdWxkIHNlbmQgYSByZXNwb25zZS5cbiAgICAgIDQ5OTogJ0NsaWVudCBDbG9zZWQgUmVxdWVzdCcsXG4gICAgICAnNDk5X05BTUUnOiAnQ0xJRU5UX0NMT1NFRF9SRVFVRVNUJyxcbiAgICAgICc0OTlfTUVTU0FHRSc6ICdVc2VkIHdoZW4gdGhlIGNsaWVudCBoYXMgY2xvc2VkIHRoZSByZXF1ZXN0IGJlZm9yZSB0aGUgc2VydmVyIGNvdWxkIHNlbmQgYSByZXNwb25zZS4nLFxuICAgICAgJzQ5OV9DTEFTUyc6IGNsYXNzZXMuQ0xJRU5UX0VSUk9SLFxuICAgICAgQ0xJRU5UX0NMT1NFRF9SRVFVRVNUOiA0OTlcbiAgICB9LFxuICAgIC8vICMjIyBDbG91ZGZsYXJlXG5cbiAgICAvLyBDbG91ZGZsYXJlJ3MgcmV2ZXJzZSBwcm94eSBzZXJ2aWNlIGV4cGFuZHMgdGhlIDV4eCBzZXJpZXMgb2YgZXJyb3JzIHNwYWNlIHRvIHNpZ25hbCBpc3N1ZXMgd2l0aCB0aGUgb3JpZ2luIHNlcnZlci5cbiAgICBjbG91ZGZsYXJlOiB7XG4gICAgICAvLyA1MjAgLSBUaGUgNTIwIGVycm9yIGlzIHVzZWQgYXMgYSBcImNhdGNoLWFsbCByZXNwb25zZSBmb3Igd2hlbiB0aGUgb3JpZ2luIHNlcnZlciByZXR1cm5zIHNvbWV0aGluZyB1bmV4cGVjdGVkXCIsIGxpc3RpbmcgY29ubmVjdGlvbiByZXNldHMsIGxhcmdlIGhlYWRlcnMsIGFuZCBlbXB0eSBvciBpbnZhbGlkIHJlc3BvbnNlcyBhcyBjb21tb24gdHJpZ2dlcnMuXG4gICAgICA1MjA6ICdVbmtub3duIEVycm9yJyxcbiAgICAgICc1MjBfTkFNRSc6ICdVTktOT1dOX0VSUk9SJyxcbiAgICAgICc1MjBfTUVTU0FHRSc6ICdUaGUgNTIwIGVycm9yIGlzIHVzZWQgYXMgYSBcImNhdGNoLWFsbCByZXNwb25zZSBmb3Igd2hlbiB0aGUgb3JpZ2luIHNlcnZlciByZXR1cm5zIHNvbWV0aGluZyB1bmV4cGVjdGVkXCIsIGxpc3RpbmcgY29ubmVjdGlvbiByZXNldHMsIGxhcmdlIGhlYWRlcnMsIGFuZCBlbXB0eSBvciBpbnZhbGlkIHJlc3BvbnNlcyBhcyBjb21tb24gdHJpZ2dlcnMuJyxcbiAgICAgICc1MjBfQ0xBU1MnOiBjbGFzc2VzLlNFUlZFUl9FUlJPUixcbiAgICAgIFVOS05PV05fRVJST1I6IDUyMCxcbiAgICAgIC8vIDUyMSAtIFRoZSBvcmlnaW4gc2VydmVyIGhhcyByZWZ1c2VkIHRoZSBjb25uZWN0aW9uIGZyb20gQ2xvdWRmbGFyZS5cbiAgICAgIDUyMTogJ1dlYiBTZXJ2ZXIgSXMgRG93bicsXG4gICAgICAnNTIxX05BTUUnOiAnV0VCX1NFUlZFUl9JU19ET1dOJyxcbiAgICAgICc1MjFfTUVTU0FHRSc6ICdUaGUgb3JpZ2luIHNlcnZlciBoYXMgcmVmdXNlZCB0aGUgY29ubmVjdGlvbiBmcm9tIENsb3VkZmxhcmUuJyxcbiAgICAgICc1MjFfQ0xBU1MnOiBjbGFzc2VzLlNFUlZFUl9FUlJPUixcbiAgICAgIFdFQl9TRVJWRVJfSVNfRE9XTjogNTIxLFxuICAgICAgLy8gNTIyIC0gQ2xvdWRmbGFyZSBjb3VsZCBub3QgbmVnb3RpYXRlIGEgVENQIGhhbmRzaGFrZSB3aXRoIHRoZSBvcmlnaW4gc2VydmVyLlxuICAgICAgNTIyOiAnQ29ubmVjdGlvbiBUaW1lZCBPdXQnLFxuICAgICAgJzUyMl9OQU1FJzogJ0NPTk5FQ1RJT05fVElNRURfT1VUJyxcbiAgICAgICc1MjJfTUVTU0FHRSc6ICdDbG91ZGZsYXJlIGNvdWxkIG5vdCBuZWdvdGlhdGUgYSBUQ1AgaGFuZHNoYWtlIHdpdGggdGhlIG9yaWdpbiBzZXJ2ZXIuJyxcbiAgICAgICc1MjJfQ0xBU1MnOiBjbGFzc2VzLlNFUlZFUl9FUlJPUixcbiAgICAgIENPTk5FQ1RJT05fVElNRURfT1VUOiA1MjIsXG4gICAgICAvLyA1MjMgLSBDbG91ZGZsYXJlIGNvdWxkIG5vdCByZWFjaCB0aGUgb3JpZ2luIHNlcnZlci5cbiAgICAgIDUyMzogJ09yaWdpbiBJcyBVbnJlYWNoYWJsZScsXG4gICAgICAnNTIzX05BTUUnOiAnT1JJR0lOX0lTX1VOUkVBQ0hBQkxFJyxcbiAgICAgICc1MjNfTUVTU0FHRSc6ICdDbG91ZGZsYXJlIGNvdWxkIG5vdCByZWFjaCB0aGUgb3JpZ2luIHNlcnZlci4nLFxuICAgICAgJzUyM19DTEFTUyc6IGNsYXNzZXMuU0VSVkVSX0VSUk9SLFxuICAgICAgT1JJR0lOX0lTX1VOUkVBQ0hBQkxFOiA1MjMsXG4gICAgICAvLyA1MjQgLSBDbG91ZGZsYXJlIHdhcyBhYmxlIHRvIGNvbXBsZXRlIGEgVENQIGNvbm5lY3Rpb24gdG8gdGhlIG9yaWdpbiBzZXJ2ZXIsIGJ1dCBkaWQgbm90IHJlY2VpdmUgYSB0aW1lbHkgSFRUUCByZXNwb25zZS5cbiAgICAgIDUyNDogJ0EgVGltZW91dCBPY2N1cnJlZCcsXG4gICAgICAnNTI0X05BTUUnOiAnQV9USU1FT1VUX09DQ1VSUkVEJyxcbiAgICAgICc1MjRfTUVTU0FHRSc6ICdDbG91ZGZsYXJlIHdhcyBhYmxlIHRvIGNvbXBsZXRlIGEgVENQIGNvbm5lY3Rpb24gdG8gdGhlIG9yaWdpbiBzZXJ2ZXIsIGJ1dCBkaWQgbm90IHJlY2VpdmUgYSB0aW1lbHkgSFRUUCByZXNwb25zZS4nLFxuICAgICAgJzUyNF9DTEFTUyc6IGNsYXNzZXMuU0VSVkVSX0VSUk9SLFxuICAgICAgQV9USU1FT1VUX09DQ1VSUkVEOiA1MjQsXG4gICAgICAvLyA1MjUgLSBDbG91ZGZsYXJlIGNvdWxkIG5vdCBuZWdvdGlhdGUgYSBTU0wvVExTIGhhbmRzaGFrZSB3aXRoIHRoZSBvcmlnaW4gc2VydmVyLlxuICAgICAgNTI1OiAnU1NMIEhhbmRzaGFrZSBGYWlsZWQnLFxuICAgICAgJzUyNV9OQU1FJzogJ1NTTF9IQU5EU0hBS0VfRkFJTEVEJyxcbiAgICAgICc1MjVfTUVTU0FHRSc6ICdDbG91ZGZsYXJlIGNvdWxkIG5vdCBuZWdvdGlhdGUgYSBTU0wvVExTIGhhbmRzaGFrZSB3aXRoIHRoZSBvcmlnaW4gc2VydmVyLicsXG4gICAgICAnNTI1X0NMQVNTJzogY2xhc3Nlcy5TRVJWRVJfRVJST1IsXG4gICAgICBTU0xfSEFORFNIQUtFX0ZBSUxFRDogNTI1LFxuICAgICAgLy8gNTI2IC0gQ2xvdWRmbGFyZSBjb3VsZCBub3QgdmFsaWRhdGUgdGhlIFNTTC9UTFMgY2VydGlmaWNhdGUgdGhhdCB0aGUgb3JpZ2luIHNlcnZlciBwcmVzZW50ZWQuXG4gICAgICA1MjY6ICdJbnZhbGlkIFNTTCBDZXJ0aWZpY2F0ZScsXG4gICAgICAnNTI2X05BTUUnOiAnSU5WQUxJRF9TU0xfQ0VSVElGSUNBVEUnLFxuICAgICAgJzUyNl9NRVNTQUdFJzogJ0Nsb3VkZmxhcmUgY291bGQgbm90IHZhbGlkYXRlIHRoZSBTU0wvVExTIGNlcnRpZmljYXRlIHRoYXQgdGhlIG9yaWdpbiBzZXJ2ZXIgcHJlc2VudGVkLicsXG4gICAgICAnNTI2X0NMQVNTJzogY2xhc3Nlcy5TRVJWRVJfRVJST1IsXG4gICAgICBJTlZBTElEX1NTTF9DRVJUSUZJQ0FURTogNTI2LFxuICAgICAgLy8gNTI3IC0gRXJyb3IgNTI3IGluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IHRpbWVkIG91dCBvciBmYWlsZWQgYWZ0ZXIgdGhlIFdBTiBjb25uZWN0aW9uIGhhZCBiZWVuIGVzdGFibGlzaGVkLlxuICAgICAgNTI3OiAnUmFpbGd1biBFcnJvcicsXG4gICAgICAnNTI3X05BTUUnOiAnUkFJTEdVTl9FUlJPUicsXG4gICAgICAnNTI3X01FU1NBR0UnOiAnRXJyb3IgNTI3IGluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IHRpbWVkIG91dCBvciBmYWlsZWQgYWZ0ZXIgdGhlIFdBTiBjb25uZWN0aW9uIGhhZCBiZWVuIGVzdGFibGlzaGVkLicsXG4gICAgICAnNTI3X0NMQVNTJzogY2xhc3Nlcy5TRVJWRVJfRVJST1IsXG4gICAgICBSQUlMR1VOX0VSUk9SOiA1MjdcbiAgICB9XG4gIH1cbn07XG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkQ6XFxcXFdlYlNvbHV0aW9uc1xcXFxpbnRlcmZhY2UtaHViXFxcXHRlbXBsYXRlXFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuXG5jbGFzcyBFcnJvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZXMsIGVyciB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiBudWxsO1xuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD57dGhpcy5wcm9wcy5zdGF0dXNDb2RlICYmIDxOb3RGb3VuZCBjb2RlPXt0aGlzLnByb3BzLnN0YXR1c0NvZGV9IC8+fTwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG4iXSwic291cmNlUm9vdCI6IiJ9