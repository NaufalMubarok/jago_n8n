/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/BackToTop.tsx":
/*!**********************************!*\
  !*** ./components/BackToTop.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BackToTop)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction BackToTop() {\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const toggleVisibility = ()=>{\n            if (window.scrollY > 400) {\n                setVisible(true);\n            } else {\n                setVisible(false);\n            }\n        };\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>window.removeEventListener(\"scroll\", toggleVisibility);\n    }, []);\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: scrollToTop,\n        className: `fixed bottom-8 right-8 z-50 w-14 h-14 text-3xl flex items-center justify-center \r\n      rounded-full shadow-xl bg-green-600 text-white hover:bg-green-700 transition-all \r\n      ${visible ? \"opacity-100\" : \"opacity-0 pointer-events-none\"}`,\n        children: \"↑\"\n    }, void 0, false, {\n        fileName: \"D:\\\\laragonnew\\\\www\\\\jago_n8n\\\\components\\\\BackToTop.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhY2tUb1RvcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRDO0FBRTdCLFNBQVNFO0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxtQkFBbUI7WUFDdkIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHLEtBQUs7Z0JBQ3hCSCxXQUFXO1lBQ2IsT0FBTztnQkFDTEEsV0FBVztZQUNiO1FBQ0Y7UUFFQUUsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtJQUNwRCxHQUFHLEVBQUU7SUFFTCxNQUFNSyxjQUFjO1FBQ2xCSixPQUFPSyxRQUFRLENBQUM7WUFDZEMsS0FBSztZQUNMQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxTQUFTTDtRQUNUTSxXQUFXLENBQUM7O01BRVosRUFBRWIsVUFBVSxnQkFBZ0IsZ0NBQWdDLENBQUM7a0JBQzlEOzs7Ozs7QUFJTCIsInNvdXJjZXMiOlsid2VicGFjazovL2phZ29fbjhuLy4vY29tcG9uZW50cy9CYWNrVG9Ub3AudHN4P2NlYjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2tUb1RvcCgpIHtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiA0MDApIHtcclxuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRvZ2dsZVZpc2liaWxpdHkpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRvZ2dsZVZpc2liaWxpdHkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9XHJcbiAgICAgIGNsYXNzTmFtZT17YGZpeGVkIGJvdHRvbS04IHJpZ2h0LTggei01MCB3LTE0IGgtMTQgdGV4dC0zeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXHJcbiAgICAgIHJvdW5kZWQtZnVsbCBzaGFkb3cteGwgYmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JlZW4tNzAwIHRyYW5zaXRpb24tYWxsIFxyXG4gICAgICAke3Zpc2libGUgPyBcIm9wYWNpdHktMTAwXCIgOiBcIm9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lXCJ9YH1cclxuICAgID5cclxuICAgICAg4oaRXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJhY2tUb1RvcCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidG9nZ2xlVmlzaWJpbGl0eSIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BackToTop.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BackToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackToTop */ \"./components/BackToTop.tsx\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"https://app.sandbox.midtrans.com/snap/snap.js\",\n                \"data-client-key\": \"Mid-client-Sym6WkPCiEYD_ocr\"\n            }, void 0, false, {\n                fileName: \"D:\\\\laragonnew\\\\www\\\\jago_n8n\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\laragonnew\\\\www\\\\jago_n8n\\\\pages\\\\_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackToTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\laragonnew\\\\www\\\\jago_n8n\\\\pages\\\\_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFFaUI7QUFDZjtBQUVqQixTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFOzswQkFDRSw4REFBQ0gsb0RBQU1BO2dCQUNMSSxLQUFJO2dCQUNKQyxtQkFBaUJDLDZCQUEyQzs7Ozs7OzBCQUU5RCw4REFBQ0o7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ0osNkRBQVNBOzs7Ozs7O0FBR2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFnb19uOG4vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBCYWNrVG9Ub3AgZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrVG9Ub3AnXHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2NyaXB0XHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9hcHAuc2FuZGJveC5taWR0cmFucy5jb20vc25hcC9zbmFwLmpzXCJcclxuICAgICAgICBkYXRhLWNsaWVudC1rZXk9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01JRFRSQU5TX0NMSUVOVF9LRVl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPEJhY2tUb1RvcCAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCYWNrVG9Ub3AiLCJTY3JpcHQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzcmMiLCJkYXRhLWNsaWVudC1rZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTUlEVFJBTlNfQ0xJRU5UX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();