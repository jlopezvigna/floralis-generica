webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/mobile-menu/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/mobile-menu/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! twind */ \"./node_modules/twind/twind.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _constants_navigationLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants/navigationLinks */ \"./src/constants/navigationLinks.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/jlopezvigna/Desktop/develop/floralis-generica/src/components/mobile-menu/index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar MobileMenu = function MobileMenu(_ref) {\n  var open = _ref.open;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"-translate-x-full opacity-0 z-10 transition-transform\"), Object(_Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"opacity-100 translate-x-0 transition-transform\"), open)),\n    style: {\n      backgroundColor: 'red',\n      top: 0,\n      bottom: 0,\n      position: 'absolute',\n      left: 0,\n      right: 0,\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      zIndex: 49,\n      height: '100vh',\n      width: '100vw' //\n      // position: relative;\n      //   transform: 'translateX(-100vw)',\n      //   opacity: 0,\n      //   zIndex: 10,\n      //   transition: 'transform .5s ease, opacity ease .2s',\n\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3\"),\n      children: _constants_navigationLinks__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (link) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: link.href,\n          className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"text-gray-500 block px-3 py-2 text-2xl font-medium\"),\n          children: link.label\n        }, link.label, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = MobileMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"MobileMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlLW1lbnUvaW5kZXgudHN4P2I2NjciXSwibmFtZXMiOlsiTW9iaWxlTWVudSIsIm9wZW4iLCJjbHN4IiwidHciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b3AiLCJib3R0b20iLCJwb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ6SW5kZXgiLCJoZWlnaHQiLCJ3aWR0aCIsImxpbmtzIiwibWFwIiwibGluayIsImhyZWYiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxzQkFDakI7QUFDRSxhQUFTLEVBQUVDLG9EQUFJLENBQUNDLGdEQUFFLHlEQUFILGlLQUNaQSxnREFBRSxrREFEVSxFQUMyQ0YsSUFEM0MsRUFEakI7QUFJRSxTQUFLLEVBQUU7QUFDTEcscUJBQWUsRUFBRSxLQURaO0FBRUxDLFNBQUcsRUFBRSxDQUZBO0FBR0xDLFlBQU0sRUFBRSxDQUhIO0FBSUxDLGNBQVEsRUFBRSxVQUpMO0FBS0xDLFVBQUksRUFBRSxDQUxEO0FBTUxDLFdBQUssRUFBRSxDQU5GO0FBT0xDLGFBQU8sRUFBRSxNQVBKO0FBUUxDLGdCQUFVLEVBQUUsUUFSUDtBQVNMQyxvQkFBYyxFQUFFLFFBVFg7QUFVTEMsWUFBTSxFQUFFLEVBVkg7QUFXTEMsWUFBTSxFQUFFLE9BWEg7QUFZTEMsV0FBSyxFQUFFLE9BWkYsQ0FhTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbEJLLEtBSlQ7QUFBQSwyQkF5QkU7QUFBSyxlQUFTLEVBQUViLG9EQUFJLDhFQUFwQjtBQUFBLGdCQUNHYyxrRUFBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNUO0FBQW9CLGNBQUksRUFBRUEsSUFBSSxDQUFDQyxJQUEvQjtBQUFxQyxtQkFBUyxFQUFFakIsb0RBQUksc0RBQXBEO0FBQUEsb0JBQ0dnQixJQUFJLENBQUNFO0FBRFIsV0FBUUYsSUFBSSxDQUFDRSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGlCO0FBQUEsQ0FBbkI7O0tBQU1wQixVO0FBb0NTQSx5RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21vYmlsZS1tZW51L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0dyB9IGZyb20gJ3R3aW5kJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IGxpbmtzIGZyb20gJ0AvY29uc3RhbnRzL25hdmlnYXRpb25MaW5rcyc7XG5cbmNvbnN0IE1vYmlsZU1lbnUgPSAoeyBvcGVuIH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y2xzeCh0dyhgLXRyYW5zbGF0ZS14LWZ1bGwgb3BhY2l0eS0wIHotMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm1gKSwge1xuICAgICAgW3R3KGBvcGFjaXR5LTEwMCB0cmFuc2xhdGUteC0wIHRyYW5zaXRpb24tdHJhbnNmb3JtYCldOiBvcGVuLFxuICAgIH0pfVxuICAgIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHpJbmRleDogNDksXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgIC8vXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAvLyAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMHZ3KScsXG4gICAgICAvLyAgIG9wYWNpdHk6IDAsXG4gICAgICAvLyAgIHpJbmRleDogMTAsXG4gICAgICAvLyAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjVzIGVhc2UsIG9wYWNpdHkgZWFzZSAuMnMnLFxuICAgIH19XG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xIHNtOnB4LTNgKX0+XG4gICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgIDxhIGtleT17bGluay5sYWJlbH0gaHJlZj17bGluay5ocmVmfSBjbGFzc05hbWU9e2Nsc3goYHRleHQtZ3JheS01MDAgYmxvY2sgcHgtMyBweS0yIHRleHQtMnhsIGZvbnQtbWVkaXVtYCl9PlxuICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICA8L2E+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/mobile-menu/index.tsx\n");

/***/ })

})