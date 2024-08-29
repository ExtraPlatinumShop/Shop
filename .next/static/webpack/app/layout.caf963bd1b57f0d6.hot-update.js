"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/lang/Lang.tsx":
/*!***************************!*\
  !*** ./src/lang/Lang.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Lang; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _lang_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang.module.scss */ \"(app-pages-browser)/./src/lang/lang.module.scss\");\n/* harmony import */ var _lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lang_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Lang() {\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [curentLang, setCurentLang] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { t, i18n } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();\n    const languages = [\n        {\n            name: \"ua\",\n            imgSrc: \"ua\"\n        },\n        {\n            name: \"ru\",\n            imgSrc: \"ru\"\n        },\n        {\n            name: \"en\",\n            imgSrc: \"en\"\n        }\n    ];\n    const hendleChange = (e)=>{\n        i18n.changeLanguage(e.target.innerHTML);\n        setActive((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().lang),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: (e)=>hendleChange(e),\n                className: (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ua) + \" \" + (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().activeLang),\n                children: \"ua\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: active ? (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().drop_down_list) + \" \" + (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().drop_down_list),\n                children: [\n                    languages.map((el)=>[\n                            el.name !== /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>i18n.changeLanguage(el.name),\n                                className: (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().en),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: el.imgSrc,\n                                    alt: el.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 10\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 12\n                            }, this)\n                        ]),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {}, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>i18n.changeLanguage(\"ru\"),\n                            className: (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ru),\n                            children: \"ru\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Lang, \"8tFW5lt+b8PI9GaE7UnbsmMVhaU=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = Lang;\nvar _c;\n$RefreshReg$(_c, \"Lang\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9sYW5nL0xhbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQUNSO0FBQ047QUFFbEIsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0MsTUFBTSxFQUFFTSxDQUFDLEVBQUVDLElBQUksRUFBRSxHQUFHVCw2REFBY0E7SUFDbEMsTUFBTVUsWUFBWTtRQUNoQjtZQUFFQyxNQUFNO1lBQU1DLFFBQVE7UUFBSztRQUMzQjtZQUFFRCxNQUFNO1lBQU1DLFFBQVE7UUFBSztRQUMzQjtZQUFFRCxNQUFNO1lBQU1DLFFBQVE7UUFBSztLQUM1QjtJQUVELE1BQU1DLGVBQWUsQ0FBQ0M7UUFFcEJMLEtBQUtNLGNBQWMsQ0FBQ0QsRUFBRUUsTUFBTSxDQUFDQyxTQUFTO1FBQ3RDWixVQUFVLENBQUNhLE9BQVMsQ0FBQ0E7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV25CLCtEQUFVOzswQkFDeEIsOERBQUNrQjtnQkFDQ0csU0FBUyxDQUFDUixJQUFNRCxhQUFhQztnQkFDN0JNLFdBQVduQiw2REFBUSxHQUFHLE1BQU1BLHFFQUFnQjswQkFDN0M7Ozs7OzswQkFHRCw4REFBQ3dCO2dCQUNDTCxXQUNFaEIsU0FDSUgseUVBQW9CLEdBQUcsTUFBTUEsaUVBQVksR0FDekNBLHlFQUFvQjs7b0JBR3pCUyxVQUFVaUIsR0FBRyxDQUFDQyxDQUFBQSxLQUFLOzRCQUNsQkEsR0FBR2pCLElBQUksbUJBQ04sOERBQUNRO2dDQUFJRyxTQUFTLElBQU1iLEtBQUtNLGNBQWMsQ0FBQ2EsR0FBR2pCLElBQUk7Z0NBQUdTLFdBQVduQiw2REFBUTswQ0FDdkUsNEVBQUM2QjtvQ0FBSUMsS0FBS0gsR0FBR2hCLE1BQU07b0NBQUVvQixLQUFLSixHQUFHakIsSUFBSTs7Ozs7Ozs7Ozs7eUJBRWpDO2tDQUNELDhEQUFDc0I7Ozs7O2tDQUdELDhEQUFDQTtrQ0FDQyw0RUFBQ2Q7NEJBQUlHLFNBQVMsSUFBTWIsS0FBS00sY0FBYyxDQUFDOzRCQUFPSyxXQUFXbkIsNkRBQVE7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlFO0dBakR3QkU7O1FBSUZILHlEQUFjQTs7O0tBSlpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYW5nL0xhbmcudHN4PzJjZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2xhbmcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmcoKSB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJlbnRMYW5nLCBzZXRDdXJlbnRMYW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgICB7IG5hbWU6IFwidWFcIiwgaW1nU3JjOiBcInVhXCIgfSxcbiAgICB7IG5hbWU6IFwicnVcIiwgaW1nU3JjOiBcInJ1XCIgfSxcbiAgICB7IG5hbWU6IFwiZW5cIiwgaW1nU3JjOiBcImVuXCIgfSxcbiAgXTtcblxuICBjb25zdCBoZW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gIFxuICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoZS50YXJnZXQuaW5uZXJIVE1MKTtcbiAgICBzZXRBY3RpdmUoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sYW5nfT5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KGUpID0+IGhlbmRsZUNoYW5nZShlKX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS51YSArIFwiIFwiICsgc3R5bGUuYWN0aXZlTGFuZ31cbiAgICAgID5cbiAgICAgICAgdWFcbiAgICAgIDwvZGl2PlxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICA/IHN0eWxlLmRyb3BfZG93bl9saXN0ICsgXCIgXCIgKyBzdHlsZS5hY3RpdmVcbiAgICAgICAgICAgIDogc3R5bGUuZHJvcF9kb3duX2xpc3RcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7bGFuZ3VhZ2VzLm1hcChlbCA9PltcbiAgICAgICAgICBlbC5uYW1lICE9PVxuICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGkxOG4uY2hhbmdlTGFuZ3VhZ2UoZWwubmFtZSl9IGNsYXNzTmFtZT17c3R5bGUuZW59PlxuICAgICAgICAgPGltZyBzcmM9e2VsLmltZ1NyY30gYWx0PXtlbC5uYW1lfSAvPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgIF0pfVxuICAgICAgICA8bGk+XG4gICAgICAgXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGkxOG4uY2hhbmdlTGFuZ3VhZ2UoXCJydVwiKX0gY2xhc3NOYW1lPXtzdHlsZS5ydX0+XG4gICAgICAgICAgICBydVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2xhdGlvbiIsInN0eWxlIiwidXNlU3RhdGUiLCJMYW5nIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY3VyZW50TGFuZyIsInNldEN1cmVudExhbmciLCJ0IiwiaTE4biIsImxhbmd1YWdlcyIsIm5hbWUiLCJpbWdTcmMiLCJoZW5kbGVDaGFuZ2UiLCJlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwibGFuZyIsIm9uQ2xpY2siLCJ1YSIsImFjdGl2ZUxhbmciLCJ1bCIsImRyb3BfZG93bl9saXN0IiwibWFwIiwiZWwiLCJlbiIsImltZyIsInNyYyIsImFsdCIsImxpIiwicnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lang/Lang.tsx\n"));

/***/ })

});