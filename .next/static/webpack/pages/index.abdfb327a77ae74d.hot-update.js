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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), lowestTemp = ref[0], setLowestTemp = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), highestTemp = ref1[0], setHighestTemp = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), forcast = ref3[0], setForcast = ref3[1];\n    var formSubmit = function(e) {\n        e.preventDefault();\n        setIsLoading(true);\n    };\n    var fetchForcast = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var getForcast, forcastJson;\n            return _Users_dustyn_sites_windowsopen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"https://api.openweathermap.org/data/3.0/onecall?lat=40.039398&lon=-76.307083&exclude=current,minutely,hourly,alerts&units=imperial&appid=a2f85fc503b97eb3a803c2eda45085da\");\n                    case 2:\n                        getForcast = _ctx.sent;\n                        _ctx.next = 5;\n                        return getForcast.json();\n                    case 5:\n                        forcastJson = _ctx.sent;\n                        setForcast(forcastJson.daily[0]);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchForcast() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (isLoading) {\n            fetchForcast().then(function() {\n                return setIsLoading(false);\n            }).catch(function(e) {\n                return console.error(e);\n            });\n        }\n    }, [\n        isLoading\n    ]);\n    console.log(forcast);\n    console.log(isLoading);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Should I Open My Windows?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Should I open my windows today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Should I Open My Windows?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    !forcast ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: function(e) {\n                            return formSubmit(e);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"form-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        children: [\n                                            \"Lowest Temperature\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                onChange: function(e) {\n                                                    return setLowestTemp(e.target.value);\n                                                },\n                                                type: \"number\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 40\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        children: [\n                                            \"Highest Temperature\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                onChange: function(e) {\n                                                    return setHighestTemp(e.target.value);\n                                                },\n                                                type: \"number\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"form-row\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: isLoading ? true : false,\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: \"Forcast Here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dustyn/sites/windowsopen/pages/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"u6FPA3YDvBZ9YbQuRLYg9Y4Yqdo=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxDQUFDUSxDQUFDLENBQUM4QixNQUFNLENBQUNDLEtBQUssQ0FBQztpREFBQTtnREFBRUMsSUFBSSxFQUFDLFFBQVE7Ozs7O3FEQUFHOzs7Ozs7NkNBQVE7a0RBQ3hHLDhEQUFDTCxPQUFLOzs0Q0FBQyxxQkFBbUI7MERBQUEsOERBQUNDLE9BQUs7Z0RBQUNDLFFBQVEsRUFBRSxTQUFDN0IsQ0FBQzsyREFBS04sY0FBYyxDQUFDTSxDQUFDLENBQUM4QixNQUFNLENBQUNDLEtBQUssQ0FBQztpREFBQTtnREFBRUMsSUFBSSxFQUFDLFFBQVE7Ozs7O3FEQUFHOzs7Ozs7NkNBQVE7Ozs7OztxQ0FDdEc7MENBQ04sOERBQUNuQixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsVUFBVTswQ0FDdkIsNEVBQUNtQixRQUFNO29DQUFDRCxJQUFJLEVBQUMsUUFBUTtvQ0FBQ0UsUUFBUSxFQUFFdkMsU0FBUyxHQUFHLElBQUksR0FBRyxLQUFLOzhDQUFFLFFBQU07Ozs7O3lDQUFTOzs7OztxQ0FDckU7Ozs7Ozs2QkFDRCxpQkFFUCw4REFBQ2tCLEtBQUc7a0NBQUMsY0FBWTs7Ozs7NkJBQU07Ozs7OztxQkFFcEI7Ozs7OzthQUNILENBQ1A7Q0FDRjtHQXJES3ZCLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXVEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtsb3dlc3RUZW1wLCBzZXRMb3dlc3RUZW1wXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaGlnaGVzdFRlbXAsIHNldEhpZ2hlc3RUZW1wXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZm9yY2FzdCwgc2V0Rm9yY2FzdF0gPSB1c2VTdGF0ZSgpO1xuICBcbiAgY29uc3QgZm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IGZldGNoRm9yY2FzdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnZXRGb3JjYXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD00MC4wMzkzOTgmbG9uPS03Ni4zMDcwODMmZXhjbHVkZT1jdXJyZW50LG1pbnV0ZWx5LGhvdXJseSxhbGVydHMmdW5pdHM9aW1wZXJpYWwmYXBwaWQ9YTJmODVmYzUwM2I5N2ViM2E4MDNjMmVkYTQ1MDg1ZGFgKTtcbiAgICBjb25zdCBmb3JjYXN0SnNvbiA9IGF3YWl0IGdldEZvcmNhc3QuanNvbigpO1xuICAgIHNldEZvcmNhc3QoZm9yY2FzdEpzb24uZGFpbHlbMF0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgaWYoIGlzTG9hZGluZyApIHtcbiAgICAgIGZldGNoRm9yY2FzdCgpLnRoZW4oICgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpLmNhdGNoKCBlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICAgIH1cbiAgfSwgW2lzTG9hZGluZ10pXG5cbiAgY29uc29sZS5sb2coZm9yY2FzdClcbiAgY29uc29sZS5sb2coaXNMb2FkaW5nKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2hvdWxkIEkgT3BlbiBNeSBXaW5kb3dzPzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTaG91bGQgSSBvcGVuIG15IHdpbmRvd3MgdG9kYXk/XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBTaG91bGQgSSBPcGVuIE15IFdpbmRvd3M/XG4gICAgICAgIDwvaDE+XG4gICAgICAgIHshZm9yY2FzdCA/XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBmb3JtU3VibWl0KGUpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPkxvd2VzdCBUZW1wZXJhdHVyZTxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldExvd2VzdFRlbXAoZS50YXJnZXQudmFsdWUpfSB0eXBlPVwibnVtYmVyXCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgICA8bGFiZWw+SGlnaGVzdCBUZW1wZXJhdHVyZTxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldEhpZ2hlc3RUZW1wKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT1cIm51bWJlclwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNMb2FkaW5nID8gdHJ1ZSA6IGZhbHNlfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgOlxuICAgICAgICAgIDxkaXY+Rm9yY2FzdCBIZXJlPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsImxvd2VzdFRlbXAiLCJzZXRMb3dlc3RUZW1wIiwiaGlnaGVzdFRlbXAiLCJzZXRIaWdoZXN0VGVtcCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZvcmNhc3QiLCJzZXRGb3JjYXN0IiwiZm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoRm9yY2FzdCIsImdldEZvcmNhc3QiLCJmb3JjYXN0SnNvbiIsImZldGNoIiwianNvbiIsImRhaWx5IiwidGhlbiIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});