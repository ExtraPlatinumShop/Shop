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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Lang; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _lang_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang.module.scss */ \"(app-pages-browser)/./src/lang/lang.module.scss\");\n/* harmony import */ var _lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lang_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Lang() {\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [curentLang, setCurentLang] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"UA\");\n    const { t, i18n } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();\n    const languages = [\n        {\n            locale: \"ua\",\n            name: \"UA\",\n            imgSrc: \"/icons/langFlags/ua.png\"\n        },\n        {\n            name: \"RU\",\n            imgSrc: \"/icons/langFlags/ru.png\"\n        },\n        {\n            name: \"ENG\",\n            imgSrc: \"/icons/langFlags/us.png\"\n        }\n    ];\n    const hendleChange = (e)=>{\n        i18n.changeLanguage(e.name);\n        setActive((prev)=>!prev);\n        setCurentLang(e.name);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().lang),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: (e)=>setActive((prev)=>!prev),\n                className: (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ua) + \" \" + (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().activeLang),\n                children: curentLang\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: active ? (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().drop_down_list) + \" \" + (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().drop_down_list),\n                children: languages.map((el)=>[\n                        el.name !== curentLang ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>hendleChange(el),\n                                className: (_lang_module_scss__WEBPACK_IMPORTED_MODULE_3___default().lang),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: el.imgSrc,\n                                    alt: el.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this) : \"\"\n                    ])\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Projects/Shop/src/lang/Lang.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Lang, \"nyVme5Kdbgtpg/jwbUii+FPnsi0=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = Lang;\nvar _c;\n$RefreshReg$(_c, \"Lang\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9sYW5nL0xhbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQUNSO0FBQ047QUFFbEIsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0MsTUFBTSxFQUFFTSxDQUFDLEVBQUVDLElBQUksRUFBRSxHQUFHVCw2REFBY0E7SUFDbEMsTUFBTVUsWUFBWTtRQUNoQjtZQUFDQyxRQUFPO1lBQU1DLE1BQU07WUFBTUMsUUFBUTtRQUEwQjtRQUM1RDtZQUFFRCxNQUFNO1lBQU1DLFFBQVE7UUFBMEI7UUFDaEQ7WUFBRUQsTUFBTTtZQUFPQyxRQUFRO1FBQTBCO0tBQ2xEO0lBRUQsTUFBTUMsZUFBZSxDQUFDQztRQUNwQk4sS0FBS08sY0FBYyxDQUFDRCxFQUFFSCxJQUFJO1FBQzFCUCxVQUFVLENBQUNZLE9BQVMsQ0FBQ0E7UUFDckJWLGNBQWNRLEVBQUVILElBQUk7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBV2xCLCtEQUFVOzswQkFDeEIsOERBQUNpQjtnQkFDQ0csU0FBUyxDQUFDTixJQUFNVixVQUFVLENBQUNZLE9BQVMsQ0FBQ0E7Z0JBQ3JDRSxXQUFXbEIsNkRBQVEsR0FBRyxNQUFNQSxxRUFBZ0I7MEJBRTNDSzs7Ozs7OzBCQUVILDhEQUFDa0I7Z0JBQ0NMLFdBQ0VmLFNBQ0lILHlFQUFvQixHQUFHLE1BQU1BLGlFQUFZLEdBQ3pDQSx5RUFBb0I7MEJBR3pCUyxVQUFVZ0IsR0FBRyxDQUFDLENBQUNDLEtBQU87d0JBQ3JCQSxHQUFHZixJQUFJLEtBQUtOLDJCQUNWLDhEQUFDc0I7c0NBQ0MsNEVBQUNWO2dDQUNDRyxTQUFTLElBQU1QLGFBQWFhO2dDQUM1QlIsV0FBV2xCLCtEQUFVOzBDQUVyQiw0RUFBQzRCO29DQUFJQyxLQUFLSCxHQUFHZCxNQUFNO29DQUFFa0IsS0FBS0osR0FBR2YsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O21DQUlyQztxQkFFSDs7Ozs7Ozs7Ozs7O0FBSVQ7R0FqRHdCVDs7UUFJRkgseURBQWNBOzs7S0FKWkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xhbmcvTGFuZy50c3g/MmNkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vbGFuZy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZygpIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1cmVudExhbmcsIHNldEN1cmVudExhbmddID0gdXNlU3RhdGUoXCJVQVwiKTtcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgICB7bG9jYWxlOid1YScsIG5hbWU6IFwiVUFcIiwgaW1nU3JjOiBcIi9pY29ucy9sYW5nRmxhZ3MvdWEucG5nXCIgfSxcbiAgICB7IG5hbWU6IFwiUlVcIiwgaW1nU3JjOiBcIi9pY29ucy9sYW5nRmxhZ3MvcnUucG5nXCIgfSxcbiAgICB7IG5hbWU6IFwiRU5HXCIsIGltZ1NyYzogXCIvaWNvbnMvbGFuZ0ZsYWdzL3VzLnBuZ1wiIH0sXG4gIF07XG5cbiAgY29uc3QgaGVuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoZS5uYW1lKTtcbiAgICBzZXRBY3RpdmUoKHByZXYpID0+ICFwcmV2KTtcbiAgICBzZXRDdXJlbnRMYW5nKGUubmFtZSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sYW5nfT5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KGUpID0+IHNldEFjdGl2ZSgocHJldikgPT4gIXByZXYpfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnVhICsgXCIgXCIgKyBzdHlsZS5hY3RpdmVMYW5nfVxuICAgICAgPlxuICAgICAgICB7Y3VyZW50TGFuZ31cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICA/IHN0eWxlLmRyb3BfZG93bl9saXN0ICsgXCIgXCIgKyBzdHlsZS5hY3RpdmVcbiAgICAgICAgICAgIDogc3R5bGUuZHJvcF9kb3duX2xpc3RcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7bGFuZ3VhZ2VzLm1hcCgoZWwpID0+IFtcbiAgICAgICAgICBlbC5uYW1lICE9PSBjdXJlbnRMYW5nID8gKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGVuZGxlQ2hhbmdlKGVsKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmxhbmd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZWwuaW1nU3JjfSBhbHQ9e2VsLm5hbWV9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICksXG4gICAgICAgIF0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2xhdGlvbiIsInN0eWxlIiwidXNlU3RhdGUiLCJMYW5nIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY3VyZW50TGFuZyIsInNldEN1cmVudExhbmciLCJ0IiwiaTE4biIsImxhbmd1YWdlcyIsImxvY2FsZSIsIm5hbWUiLCJpbWdTcmMiLCJoZW5kbGVDaGFuZ2UiLCJlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwibGFuZyIsIm9uQ2xpY2siLCJ1YSIsImFjdGl2ZUxhbmciLCJ1bCIsImRyb3BfZG93bl9saXN0IiwibWFwIiwiZWwiLCJsaSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lang/Lang.tsx\n"));

/***/ })

});