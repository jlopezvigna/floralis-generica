webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/mobile-menu/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/mobile-menu/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! twind */ \"./node_modules/twind/twind.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _constants_navigationLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants/navigationLinks */ \"./src/constants/navigationLinks.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/jlopezvigna/Desktop/develop/floralis-generica/src/components/mobile-menu/index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar MobileMenu = function MobileMenu(_ref) {\n  var open = _ref.open,\n      _onClick = _ref.onClick;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"bg-orange-500 -translate-x-full opacity-0 z-10 transition-all delay-300\\t\"), Object(_Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"opacity-100 translate-x-0 \"), open)),\n    style: {\n      top: 0,\n      bottom: 0,\n      position: 'absolute',\n      left: 0,\n      right: 0,\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      zIndex: 49,\n      height: '100vh',\n      width: '100vw' //\n      // position: relative;\n      //   transform: 'translateX(-100vw)',\n      //   opacity: 0,\n      //   zIndex: 10,\n      //   transition: 'transform .5s ease, opacity ease .2s',\n\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3\"),\n      children: _constants_navigationLinks__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (link) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          role: \"button\",\n          \"aria-hidden\": \"true\",\n          tabIndex: 0,\n          onClick: function onClick() {\n            return _onClick(link.element);\n          },\n          className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"text-orange-50 block px-3 py-2 text-2xl font-medium\"),\n          children: link.label\n        }, link.label, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = MobileMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"MobileMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlLW1lbnUvaW5kZXgudHN4P2I2NjciXSwibmFtZXMiOlsiTW9iaWxlTWVudSIsIm9wZW4iLCJvbkNsaWNrIiwiY2xzeCIsInR3IiwidG9wIiwiYm90dG9tIiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiekluZGV4IiwiaGVpZ2h0Iiwid2lkdGgiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJlbGVtZW50IiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsUUFBVCxRQUFTQSxPQUFUO0FBQUEsc0JBQ2pCO0FBQ0UsYUFBUyxFQUFFQyxvREFBSSxDQUFDQyxnREFBRSw2RUFBSCxpS0FDWkEsZ0RBQUUsOEJBRFUsRUFDdUJILElBRHZCLEVBRGpCO0FBSUUsU0FBSyxFQUFFO0FBQ0xJLFNBQUcsRUFBRSxDQURBO0FBRUxDLFlBQU0sRUFBRSxDQUZIO0FBR0xDLGNBQVEsRUFBRSxVQUhMO0FBSUxDLFVBQUksRUFBRSxDQUpEO0FBS0xDLFdBQUssRUFBRSxDQUxGO0FBTUxDLGFBQU8sRUFBRSxNQU5KO0FBT0xDLGdCQUFVLEVBQUUsUUFQUDtBQVFMQyxvQkFBYyxFQUFFLFFBUlg7QUFTTEMsWUFBTSxFQUFFLEVBVEg7QUFVTEMsWUFBTSxFQUFFLE9BVkg7QUFXTEMsV0FBSyxFQUFFLE9BWEYsQ0FZTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBakJLLEtBSlQ7QUFBQSwyQkF3QkU7QUFBSyxlQUFTLEVBQUVaLG9EQUFJLDhFQUFwQjtBQUFBLGdCQUNHYSxrRUFBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNUO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSx5QkFBWSxNQUhkO0FBSUUsa0JBQVEsRUFBRSxDQUpaO0FBS0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNaEIsUUFBTyxDQUFDZ0IsSUFBSSxDQUFDQyxPQUFOLENBQWI7QUFBQSxXQUxYO0FBTUUsbUJBQVMsRUFBRWhCLG9EQUFJLHVEQU5qQjtBQUFBLG9CQVFHZSxJQUFJLENBQUNFO0FBUlIsV0FDT0YsSUFBSSxDQUFDRSxLQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGlCO0FBQUEsQ0FBbkI7O0tBQU1wQixVO0FBMENTQSx5RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21vYmlsZS1tZW51L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0dyB9IGZyb20gJ3R3aW5kJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IGxpbmtzIGZyb20gJ0AvY29uc3RhbnRzL25hdmlnYXRpb25MaW5rcyc7XG5cbmNvbnN0IE1vYmlsZU1lbnUgPSAoeyBvcGVuLCBvbkNsaWNrIH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y2xzeCh0dyhgYmctb3JhbmdlLTUwMCAtdHJhbnNsYXRlLXgtZnVsbCBvcGFjaXR5LTAgei0xMCB0cmFuc2l0aW9uLWFsbCBkZWxheS0zMDBcdGApLCB7XG4gICAgICBbdHcoYG9wYWNpdHktMTAwIHRyYW5zbGF0ZS14LTAgYCldOiBvcGVuLFxuICAgIH0pfVxuICAgIHN0eWxlPXt7XG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgekluZGV4OiA0OSxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgLy9cbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC8vICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwdncpJyxcbiAgICAgIC8vICAgb3BhY2l0eTogMCxcbiAgICAgIC8vICAgekluZGV4OiAxMCxcbiAgICAgIC8vICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuNXMgZWFzZSwgb3BhY2l0eSBlYXNlIC4ycycsXG4gICAgfX1cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0yIHB0LTIgcGItMyBzcGFjZS15LTEgc206cHgtM2ApfT5cbiAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBrZXk9e2xpbmsubGFiZWx9XG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGxpbmsuZWxlbWVudCl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGB0ZXh0LW9yYW5nZS01MCBibG9jayBweC0zIHB5LTIgdGV4dC0yeGwgZm9udC1tZWRpdW1gKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/mobile-menu/index.tsx\n");

/***/ })

})