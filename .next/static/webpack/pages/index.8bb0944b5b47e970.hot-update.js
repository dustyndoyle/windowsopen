"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), lowestTemp = ref[0], setLowestTemp = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), highestTemp = ref1[0], setHighestTemp = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}), forcast = ref3[0], setForcast = ref3[1];\n    var formSubmit = function(e) {\n        e.preventDefault();\n        setIsLoading(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var fetchForcast = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var getForcast, forcastJson;\n                return _Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"https://api.openweathermap.org/data/3.0/onecall?lat=40.039398&lon=-76.307083&appid=a2f85fc503b97eb3a803c2eda45085da\");\n                        case 2:\n                            getForcast = _ctx.sent;\n                            _ctx.next = 5;\n                            return getForcast.json();\n                        case 5:\n                            forcastJson = _ctx.sent;\n                            setForcast(forcastJson);\n                            setIsLoading(false);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchForcast() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (isLoading) {\n            fetchForcast().catch(function(e) {\n                return console.error(e);\n            });\n        }\n    }, [\n        isLoading\n    ]);\n    console.log(forcast);\n    console.log(isLoading);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Should I Open My Windows?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Should I open my windows today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Should I Open My Windows?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: function(e) {\n                            return formSubmit(e);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"form-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        children: [\n                                            \"Lowest Temperature\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                onChange: function(e) {\n                                                    return setLowestTemp(e.target.value);\n                                                },\n                                                type: \"number\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 38\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        children: [\n                                            \"Highest Temperature\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                onChange: function(e) {\n                                                    return setHighestTemp(e.target.value);\n                                                },\n                                                type: \"number\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 39\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"form-row\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"Mja3BspEp11+QpuVEyZWuXkEgLc=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVDLElBQUksRUFBQyxRQUFROzs7OztxREFBRzs7Ozs7OzZDQUFRO2tEQUN4Ryw4REFBQ0wsT0FBSzs7NENBQUMscUJBQW1COzBEQUFBLDhEQUFDQyxPQUFLO2dEQUFDQyxRQUFRLEVBQUUsU0FBQzNCLENBQUM7MkRBQUtOLGNBQWMsQ0FBQ00sQ0FBQyxDQUFDNEIsTUFBTSxDQUFDQyxLQUFLLENBQUM7aURBQUE7Z0RBQUVDLElBQUksRUFBQyxRQUFROzs7OztxREFBRzs7Ozs7OzZDQUFROzs7Ozs7cUNBQ3RHOzBDQUNOLDhEQUFDbkIsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFVBQVU7MENBQ3ZCLDRFQUFDbUIsUUFBTTtvQ0FBQ0QsSUFBSSxFQUFDLFFBQVE7OENBQUMsUUFBTTs7Ozs7eUNBQVM7Ozs7O3FDQUNqQzs7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNILENBQ1A7Q0FDRjtHQWxES3hDLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQW9EViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtsb3dlc3RUZW1wLCBzZXRMb3dlc3RUZW1wXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaGlnaGVzdFRlbXAsIHNldEhpZ2hlc3RUZW1wXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZm9yY2FzdCwgc2V0Rm9yY2FzdF0gPSB1c2VTdGF0ZSh7fSk7XG4gIFxuICBjb25zdCBmb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hGb3JjYXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZ2V0Rm9yY2FzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9NDAuMDM5Mzk4Jmxvbj0tNzYuMzA3MDgzJmFwcGlkPWEyZjg1ZmM1MDNiOTdlYjNhODAzYzJlZGE0NTA4NWRhYCk7XG4gICAgICBjb25zdCBmb3JjYXN0SnNvbiA9IGF3YWl0IGdldEZvcmNhc3QuanNvbigpO1xuICAgICAgc2V0Rm9yY2FzdChmb3JjYXN0SnNvbik7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBpZiggaXNMb2FkaW5nICkge1xuICAgICAgZmV0Y2hGb3JjYXN0KCkuY2F0Y2goIGUgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gICAgfVxuICB9LCBbaXNMb2FkaW5nXSlcblxuICBjb25zb2xlLmxvZyhmb3JjYXN0KVxuICBjb25zb2xlLmxvZyhpc0xvYWRpbmcpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaG91bGQgSSBPcGVuIE15IFdpbmRvd3M/PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNob3VsZCBJIG9wZW4gbXkgd2luZG93cyB0b2RheT9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFNob3VsZCBJIE9wZW4gTXkgV2luZG93cz9cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGZvcm1TdWJtaXQoZSl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgIDxsYWJlbD5Mb3dlc3QgVGVtcGVyYXR1cmU8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb3dlc3RUZW1wKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT1cIm51bWJlclwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5IaWdoZXN0IFRlbXBlcmF0dXJlPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SGlnaGVzdFRlbXAoZS50YXJnZXQudmFsdWUpfSB0eXBlPVwibnVtYmVyXCIgLz48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJsb3dlc3RUZW1wIiwic2V0TG93ZXN0VGVtcCIsImhpZ2hlc3RUZW1wIiwic2V0SGlnaGVzdFRlbXAiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmb3JjYXN0Iiwic2V0Rm9yY2FzdCIsImZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaEZvcmNhc3QiLCJnZXRGb3JjYXN0IiwiZm9yY2FzdEpzb24iLCJmZXRjaCIsImpzb24iLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});