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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), lowestTemp = ref[0], setLowestTemp = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), highestTemp = ref1[0], setHighestTemp = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}), forcast = ref3[0], setForcast = ref3[1];\n    var formSubmit = function(e) {\n        e.preventDefault();\n        setIsLoading(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        function fetchForcast() {\n            return _fetchForcast.apply(this, arguments);\n        }\n        function _fetchForcast() {\n            _fetchForcast = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var getForcast, forcastJson;\n                return _Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"https://api.openweathermap.org/data/3.0/onecall?lat=40.039398&lon=-76.307083&appid=a2f85fc503b97eb3a803c2eda45085da\");\n                        case 2:\n                            getForcast = _ctx.sent;\n                            _ctx.next = 5;\n                            return getForcast.json();\n                        case 5:\n                            forcastJson = _ctx.sent;\n                            console.log(forcastJson);\n                            return _ctx.abrupt(\"return\", forcastJson);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _fetchForcast.apply(this, arguments);\n        }\n        if (isLoading) {\n            var forcastData = fetchForcast().catch(function(e) {\n                return console.error(e);\n            });\n            console.log(forcastData);\n            setForcast({\n                temp: \"80\"\n            });\n            setIsLoading(false);\n        }\n    }, [\n        isLoading\n    ]);\n    console.log(forcast);\n    console.log(isLoading);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Should I Open My Windows?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Should I open my windows today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Should I Open My Windows?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: function(e) {\n                            return formSubmit(e);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"form-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        children: [\n                                            \"Lowest Temperature\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                onChange: function(e) {\n                                                    return setLowestTemp(e.target.value);\n                                                },\n                                                type: \"number\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 38\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        children: [\n                                            \"Highest Temperature\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                onChange: function(e) {\n                                                    return setHighestTemp(e.target.value);\n                                                },\n                                                type: \"number\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 39\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"form-row\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"Mja3BspEp11+QpuVEyZWuXkEgLc=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVOztrREFDdkIsOERBQUNhLE9BQUs7OzRDQUFDLG9CQUFrQjswREFBQSw4REFBQ0MsT0FBSztnREFBQ0MsUUFBUSxFQUFFLFNBQUM3QixDQUFDOzJEQUFLUixhQUFhLENBQUNRLENBQUMsQ0FBQzhCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO2lEQUFBO2dEQUFFQyxJQUFJLEVBQUMsUUFBUTs7Ozs7cURBQUc7Ozs7Ozs2Q0FBUTtrREFDeEcsOERBQUNMLE9BQUs7OzRDQUFDLHFCQUFtQjswREFBQSw4REFBQ0MsT0FBSztnREFBQ0MsUUFBUSxFQUFFLFNBQUM3QixDQUFDOzJEQUFLTixjQUFjLENBQUNNLENBQUMsQ0FBQzhCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO2lEQUFBO2dEQUFFQyxJQUFJLEVBQUMsUUFBUTs7Ozs7cURBQUc7Ozs7Ozs2Q0FBUTs7Ozs7O3FDQUN0RzswQ0FDTiw4REFBQ25CLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxVQUFVOzBDQUN2Qiw0RUFBQ21CLFFBQU07b0NBQUNELElBQUksRUFBQyxRQUFROzhDQUFDLFFBQU07Ozs7O3lDQUFTOzs7OztxQ0FDakM7Ozs7Ozs2QkFDRDs7Ozs7O3FCQUNGOzs7Ozs7YUFDSCxDQUNQO0NBQ0Y7R0FyREsxQyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUF1RFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbbG93ZXN0VGVtcCwgc2V0TG93ZXN0VGVtcF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2hpZ2hlc3RUZW1wLCBzZXRIaWdoZXN0VGVtcF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZvcmNhc3QsIHNldEZvcmNhc3RdID0gdXNlU3RhdGUoe30pO1xuICBcbiAgY29uc3QgZm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRm9yY2FzdCgpIHtcbiAgICAgIGNvbnN0IGdldEZvcmNhc3QgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PTQwLjAzOTM5OCZsb249LTc2LjMwNzA4MyZhcHBpZD1hMmY4NWZjNTAzYjk3ZWIzYTgwM2MyZWRhNDUwODVkYWApO1xuICAgICAgY29uc3QgZm9yY2FzdEpzb24gPSBhd2FpdCBnZXRGb3JjYXN0Lmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGZvcmNhc3RKc29uKVxuICAgICAgcmV0dXJuIGZvcmNhc3RKc29uO1xuICAgIH1cbiAgICBpZiggaXNMb2FkaW5nICkge1xuICAgICAgY29uc3QgZm9yY2FzdERhdGEgPSBmZXRjaEZvcmNhc3QoKS5jYXRjaCggZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcbiAgICAgIGNvbnNvbGUubG9nKGZvcmNhc3REYXRhKVxuICAgICAgc2V0Rm9yY2FzdCh7dGVtcDogXCI4MFwifSk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9LCBbaXNMb2FkaW5nXSlcblxuICBjb25zb2xlLmxvZyhmb3JjYXN0KVxuICBjb25zb2xlLmxvZyhpc0xvYWRpbmcpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaG91bGQgSSBPcGVuIE15IFdpbmRvd3M/PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNob3VsZCBJIG9wZW4gbXkgd2luZG93cyB0b2RheT9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFNob3VsZCBJIE9wZW4gTXkgV2luZG93cz9cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGZvcm1TdWJtaXQoZSl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgIDxsYWJlbD5Mb3dlc3QgVGVtcGVyYXR1cmU8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb3dlc3RUZW1wKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT1cIm51bWJlclwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5IaWdoZXN0IFRlbXBlcmF0dXJlPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SGlnaGVzdFRlbXAoZS50YXJnZXQudmFsdWUpfSB0eXBlPVwibnVtYmVyXCIgLz48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJsb3dlc3RUZW1wIiwic2V0TG93ZXN0VGVtcCIsImhpZ2hlc3RUZW1wIiwic2V0SGlnaGVzdFRlbXAiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmb3JjYXN0Iiwic2V0Rm9yY2FzdCIsImZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaEZvcmNhc3QiLCJnZXRGb3JjYXN0IiwiZm9yY2FzdEpzb24iLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZm9yY2FzdERhdGEiLCJjYXRjaCIsImVycm9yIiwidGVtcCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});