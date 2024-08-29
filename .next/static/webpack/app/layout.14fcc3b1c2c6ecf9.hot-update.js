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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Lang; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _lang_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang.module.scss */ \"(app-pages-browser)/./src/lang/lang.module.scss\");\n/* harmony import */ var _lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lang_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Lang() {\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [curentLang, setCurentLang] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"ua\");\n    const { t, i18n } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();\n    const languages = [\n        {\n            name: \"ua\",\n            imgSrc: \"/icons/langFlags/ua.png\"\n        },\n        {\n            name: \"ru\",\n            imgSrc: \"/icons/langFlags/ua.png\"\n        },\n        {\n            name: \"en\",\n            imgSrc: \"en\"\n        }\n    ];\n    const hendleChange = (e)=>{\n        i18n.changeLanguage(e.name);\n        setActive((prev)=>!prev);\n        setCurentLang(e.name);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().lang),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: (e)=>setActive((prev)=>!prev),\n                className: (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ua) + \" \" + (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().activeLang),\n                children: curentLang\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: active ? (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().drop_down_list) + \" \" + (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().drop_down_list),\n                children: languages.map((el)=>[\n                        el.name !== curentLang ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>hendleChange(el),\n                                className: (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().lang),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: el.imgSrc,\n                                    alt: el.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this) : \"\"\n                    ])\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Lang, \"h1cLExyk5ZWkvBI2JYFgqWYXQGQ=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = Lang;\nvar _c;\n$RefreshReg$(_c, \"Lang\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9sYW5nL0xhbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQUNSO0FBQ047QUFFbEIsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0MsTUFBTSxFQUFFTSxDQUFDLEVBQUVDLElBQUksRUFBRSxHQUFHVCw2REFBY0E7SUFDbEMsTUFBTVUsWUFBWTtRQUNoQjtZQUFFQyxNQUFNO1lBQU1DLFFBQVE7UUFBMEI7UUFDaEQ7WUFBRUQsTUFBTTtZQUFNQyxRQUFRO1FBQTBCO1FBQ2hEO1lBQUVELE1BQU07WUFBTUMsUUFBUTtRQUFLO0tBQzVCO0lBRUQsTUFBTUMsZUFBZSxDQUFDQztRQUNwQkwsS0FBS00sY0FBYyxDQUFDRCxFQUFFSCxJQUFJO1FBQzFCTixVQUFVLENBQUNXLE9BQVMsQ0FBQ0E7UUFDckJULGNBQWNPLEVBQUVILElBQUk7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBV2pCLCtEQUFVOzswQkFDeEIsOERBQUNnQjtnQkFDQ0csU0FBUyxDQUFDTixJQUFNVCxVQUFVLENBQUNXLE9BQVMsQ0FBQ0E7Z0JBQ3JDRSxXQUFXakIsNkRBQVEsR0FBRyxNQUFNQSxxRUFBZ0I7MEJBRTNDSzs7Ozs7OzBCQUVILDhEQUFDaUI7Z0JBQ0NMLFdBQ0VkLFNBQ0lILHlFQUFvQixHQUFHLE1BQU1BLGlFQUFZLEdBQ3pDQSx5RUFBb0I7MEJBR3pCUyxVQUFVZSxHQUFHLENBQUMsQ0FBQ0MsS0FBTzt3QkFDckJBLEdBQUdmLElBQUksS0FBS0wsMkJBQ1YsOERBQUNxQjtzQ0FDQyw0RUFBQ1Y7Z0NBQ0NHLFNBQVMsSUFBTVAsYUFBYWE7Z0NBQzVCUixXQUFXakIsK0RBQVU7MENBRXJCLDRFQUFDMkI7b0NBQUlDLEtBQUtILEdBQUdkLE1BQU07b0NBQUVrQixLQUFLSixHQUFHZixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7bUNBSXJDO3FCQUVIOzs7Ozs7Ozs7Ozs7QUFJVDtHQWpEd0JSOztRQUlGSCx5REFBY0E7OztLQUpaRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGFuZy9MYW5nLnRzeD8yY2QxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9sYW5nLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5nKCkge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VyZW50TGFuZywgc2V0Q3VyZW50TGFuZ10gPSB1c2VTdGF0ZShcInVhXCIpO1xuXG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgbGFuZ3VhZ2VzID0gW1xuICAgIHsgbmFtZTogXCJ1YVwiLCBpbWdTcmM6IFwiL2ljb25zL2xhbmdGbGFncy91YS5wbmdcIiB9LFxuICAgIHsgbmFtZTogXCJydVwiLCBpbWdTcmM6IFwiL2ljb25zL2xhbmdGbGFncy91YS5wbmdcIiB9LFxuICAgIHsgbmFtZTogXCJlblwiLCBpbWdTcmM6IFwiZW5cIiB9LFxuICBdO1xuXG4gIGNvbnN0IGhlbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGUubmFtZSk7XG4gICAgc2V0QWN0aXZlKChwcmV2KSA9PiAhcHJldik7XG4gICAgc2V0Q3VyZW50TGFuZyhlLm5hbWUpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGFuZ30+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRBY3RpdmUoKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS51YSArIFwiIFwiICsgc3R5bGUuYWN0aXZlTGFuZ31cbiAgICAgID5cbiAgICAgICAge2N1cmVudExhbmd9XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bFxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgPyBzdHlsZS5kcm9wX2Rvd25fbGlzdCArIFwiIFwiICsgc3R5bGUuYWN0aXZlXG4gICAgICAgICAgICA6IHN0eWxlLmRyb3BfZG93bl9saXN0XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge2xhbmd1YWdlcy5tYXAoKGVsKSA9PiBbXG4gICAgICAgICAgZWwubmFtZSAhPT0gY3VyZW50TGFuZyA/IChcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhlbmRsZUNoYW5nZShlbCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5sYW5nfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2VsLmltZ1NyY30gYWx0PXtlbC5uYW1lfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICApLFxuICAgICAgICBdKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb24iLCJzdHlsZSIsInVzZVN0YXRlIiwiTGFuZyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImN1cmVudExhbmciLCJzZXRDdXJlbnRMYW5nIiwidCIsImkxOG4iLCJsYW5ndWFnZXMiLCJuYW1lIiwiaW1nU3JjIiwiaGVuZGxlQ2hhbmdlIiwiZSIsImNoYW5nZUxhbmd1YWdlIiwicHJldiIsImRpdiIsImNsYXNzTmFtZSIsImxhbmciLCJvbkNsaWNrIiwidWEiLCJhY3RpdmVMYW5nIiwidWwiLCJkcm9wX2Rvd25fbGlzdCIsIm1hcCIsImVsIiwibGkiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lang/Lang.tsx\n"));

/***/ })

});