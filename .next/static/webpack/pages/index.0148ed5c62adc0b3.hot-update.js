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

/***/ "./components/GadView.js":
/*!*******************************!*\
  !*** ./components/GadView.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GadView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n//call openai api and display the result\n\nvar _s = $RefreshSig$();\n\n\n\nfunction GadView(pToChild) {\n    _s();\n    const [adBox, setAdBox] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const runGenerator = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/build\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    buyv: pToChild.pToChild\n                })\n            });\n            setAdBox(result);\n        } catch (error) {\n            // error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \" Create some google ads\"\n                }, void 0, false, {\n                    fileName: \"/Users/okerawerk/aifeelize/components/GadView.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onClick: runGenerator,\n                    type: \"submit\",\n                    value: \"Generate ads\"\n                }, void 0, false, {\n                    fileName: \"/Users/okerawerk/aifeelize/components/GadView.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: adBox\n                }, void 0, false, {\n                    fileName: \"/Users/okerawerk/aifeelize/components/GadView.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/okerawerk/aifeelize/components/GadView.js\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(GadView, \"uSe3S2VCJBUwPA1sfWviGgaf6YY=\");\n_c = GadView;\nvar _c;\n$RefreshReg$(_c, \"GadView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhZFZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBd0M7QUFDeEM7O0FBQXlDO0FBR0k7QUFDWjtBQUtsQixTQUFTSSxRQUFRQyxRQUFRLEVBQUU7O0lBQ3RDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUE7SUFLckMsTUFBTUssZUFBZSxPQUFPQyxRQUFVO1FBQ25DQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUk7WUFDRCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sY0FBYztnQkFDeENDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ04sZ0JBQWdCO2dCQUNoQjtnQkFDR0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFQyxNQUFNYixTQUFTQSxRQUFRO2dCQUFDO1lBQ25EO1lBRUlFLFNBQVNZO1FBQ2IsRUFBRSxPQUFNQyxPQUFPO1lBQ1gsNEJBQTRCO1lBQzVCQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2RFLE1BQU1GLE1BQU1HLE9BQU87UUFDbkI7SUFFWjtJQUdBLHFCQUNJO2tCQUNJLDRFQUFDQzs7OEJBRUcsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDO29CQUFNQyxTQUFTbkI7b0JBQWNvQixNQUFLO29CQUFTQyxPQUFNOzs7Ozs7OEJBQ3RELDhEQUFDTDs4QkFBS2xCOzs7Ozs7Ozs7Ozs7O0FBT2QsQ0FBQztHQXhDbUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FkVmlldy5qcz9mN2IwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY2FsbCBvcGVuYWkgYXBpIGFuZCBkaXNwbGF5IHRoZSByZXN1bHRcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cblxuaW1wb3J0IHN0eWxlcyBmcm9tICcvcGFnZXMvaW5kZXgubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWRWaWV3KHBUb0NoaWxkKSB7XG4gICAgY29uc3QgW2FkQm94LCBzZXRBZEJveF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgXG5cblxuIGNvbnN0IHJ1bkdlbmVyYXRvciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9idWlsZFwiLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGJ1eXY6IHBUb0NoaWxkLnBUb0NoaWxkIH0pLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZXRBZEJveChyZXN1bHQpOyBcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBlcnJvciBoYW5kbGluZyBsb2dpYyBoZXJlXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGgzPiBDcmVhdGUgc29tZSBnb29nbGUgYWRzPC9oMz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DbGljaz17cnVuR2VuZXJhdG9yfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBhZHNcIiAvPlxuICAgICAgICAgICAgPGRpdj57YWRCb3h9PC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgIClcbiAgIFxuXG4gICAgfVxuICAgIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVzIiwidXNlU3RhdGUiLCJHYWRWaWV3IiwicFRvQ2hpbGQiLCJhZEJveCIsInNldEFkQm94IiwicnVuR2VuZXJhdG9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJidXl2IiwicmVzdWx0IiwiZXJyb3IiLCJjb25zb2xlIiwiYWxlcnQiLCJtZXNzYWdlIiwiZGl2IiwiaDMiLCJpbnB1dCIsIm9uQ2xpY2siLCJ0eXBlIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GadView.js\n"));

/***/ })

});