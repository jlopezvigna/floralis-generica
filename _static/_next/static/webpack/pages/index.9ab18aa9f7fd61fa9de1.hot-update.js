webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/navigation/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/navigation/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! twind */ \"./node_modules/twind/twind.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants_breakpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants/breakpoint */ \"./src/constants/breakpoint.tsx\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useWindowSize */ \"./src/hooks/useWindowSize.tsx\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.tsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mobile-menu */ \"./src/components/mobile-menu/index.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/jlopezvigna/Desktop/develop/floralis-generica/src/components/navigation/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Navigation = function Navigation(_ref) {\n  _s();\n\n  var onClick = _ref.onClick,\n      scrollDirection = _ref.scrollDirection,\n      top = _ref.top;\n\n  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(false),\n      _useToggle2 = Object(_Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useToggle, 2),\n      showMenu = _useToggle2[0],\n      toggleMenu = _useToggle2[1];\n\n  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  var isMobile = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n    return _constants_breakpoint__WEBPACK_IMPORTED_MODULE_5__[\"MD\"] > size.width;\n  }, [size]);\n\n  var handleClick = function handleClick(section) {\n    toggleMenu();\n    onClick(section);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"bg-white z-50\\tfixed top-0 left-0 right-0 delay-300 transition-all\"), Object(_Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"-top-20\"), scrollDirection === \"up\" && top * -1 > 80 && !showMenu), Object(_Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"shadow-md\"), top * -1 > 80)),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"flex items-center h-20\"),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"flex-shrink-0\"),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"h-16 w-16\"),\n            src: \"/images/logo.png\",\n            alt: \"logo\",\n            width: 56,\n            height: 65\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"flex items-center flex-grow justify-end z-50\"),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            toggled: showMenu,\n            toggle: toggleMenu,\n            size: isMobile ? 20 : 32,\n            rounded: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mobile_menu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      open: showMenu,\n      onClick: handleClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navigation, \"XNDQelh1fo2fC7uayJAjOko8VnM=\", false, function () {\n  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n});\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9pbmRleC50c3g/MjgzZiJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwib25DbGljayIsInNjcm9sbERpcmVjdGlvbiIsInRvcCIsInVzZVRvZ2dsZSIsInNob3dNZW51IiwidG9nZ2xlTWVudSIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwiaXNNb2JpbGUiLCJ1c2VNZW1vIiwiTUQiLCJ3aWR0aCIsImhhbmRsZUNsaWNrIiwic2VjdGlvbiIsImNsc3giLCJ0dyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0Q7QUFBQTs7QUFBQSxNQUFqREMsT0FBaUQsUUFBakRBLE9BQWlEO0FBQUEsTUFBeENDLGVBQXdDLFFBQXhDQSxlQUF3QztBQUFBLE1BQXZCQyxHQUF1QixRQUF2QkEsR0FBdUI7O0FBQUEsbUJBQ3RDQyxnRUFBUyxDQUFDLEtBQUQsQ0FENkI7QUFBQTtBQUFBLE1BQzlEQyxRQUQ4RDtBQUFBLE1BQ3BEQyxVQURvRDs7QUFFckUsTUFBTUMsSUFBSSxHQUFHQyxvRUFBYSxFQUExQjtBQUVBLE1BQU1DLFFBQWlCLEdBQUdDLHFEQUFPLENBQUM7QUFBQSxXQUFNQyx3REFBRSxHQUFHSixJQUFJLENBQUNLLEtBQWhCO0FBQUEsR0FBRCxFQUF3QixDQUFDTCxJQUFELENBQXhCLENBQWpDOztBQUVBLE1BQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBcUI7QUFDdkNSLGNBQVU7QUFDVkwsV0FBTyxDQUFDYSxPQUFELENBQVA7QUFDRCxHQUhEOztBQUlBLHNCQUNFO0FBQ0UsYUFBUyxFQUFFQyxvREFBSSxDQUNiQyxnREFBRSxzRUFEVyxpS0FHVkEsZ0RBQUUsV0FIUSxFQUdNZCxlQUFlLFNBQWYsSUFBNEJDLEdBQUcsR0FBRyxDQUFDLENBQVAsR0FBVyxFQUF2QyxJQUE2QyxDQUFDRSxRQUhwRCxrS0FLVlcsZ0RBQUUsYUFMUSxFQUtRYixHQUFHLEdBQUcsQ0FBQyxDQUFQLEdBQVcsRUFMbkIsRUFEakI7QUFBQSw0QkFTRTtBQUFLLGVBQVMsRUFBRWEsZ0RBQUUsMENBQWxCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFQSxnREFBRSwwQkFBbEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVBLGdEQUFFLGlCQUFsQjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUEsZ0RBQUUsYUFBbEI7QUFBaUMsZUFBRyxFQUFDLGtCQUFyQztBQUF3RCxlQUFHLEVBQUMsTUFBNUQ7QUFBbUUsaUJBQUssRUFBRSxFQUExRTtBQUE4RSxrQkFBTSxFQUFFO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFFQSxnREFBRSxnREFBbEI7QUFBQSxpQ0FDRSxxRUFBQyx1REFBRDtBQUFXLG1CQUFPLEVBQUVYLFFBQXBCO0FBQThCLGtCQUFNLEVBQUVDLFVBQXRDO0FBQWtELGdCQUFJLEVBQUVHLFFBQVEsR0FBRyxFQUFILEdBQVEsRUFBeEU7QUFBNEUsbUJBQU87QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBbUJFLHFFQUFDLHFEQUFEO0FBQVksVUFBSSxFQUFFSixRQUFsQjtBQUE0QixhQUFPLEVBQUVRO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0FqQ0Q7O0dBQU1iLFU7VUFDMkJJLHdELEVBQ2xCSSw0RDs7O0tBRlRSLFU7QUFtQ1NBLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0dyB9IGZyb20gJ3R3aW5kJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTUQgfSBmcm9tICdAL2NvbnN0YW50cy9icmVha3BvaW50JztcbmltcG9ydCBsaW5rcyBmcm9tICdAL2NvbnN0YW50cy9uYXZpZ2F0aW9uTGlua3MnO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnQC9ob29rcy91c2VXaW5kb3dTaXplJztcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnQC9ob29rcy91c2VUb2dnbGUnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJ2hhbWJ1cmdlci1yZWFjdCc7XG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuLi9tb2JpbGUtbWVudSc7XG5cbmludGVyZmFjZSBJTmF2aWdhdGlvbiB7XG4gIG9uQ2xpY2s6ICh4OiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNjcm9sbERpcmVjdGlvbjogc3RyaW5nO1xuICB0b3A6IG51bWJlcjtcbn1cblxuY29uc3QgTmF2aWdhdGlvbiA9ICh7IG9uQ2xpY2ssIHNjcm9sbERpcmVjdGlvbiwgdG9wIH06IElOYXZpZ2F0aW9uKSA9PiB7XG4gIGNvbnN0IFtzaG93TWVudSwgdG9nZ2xlTWVudV0gPSB1c2VUb2dnbGUoZmFsc2UpO1xuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xuXG4gIGNvbnN0IGlzTW9iaWxlOiBib29sZWFuID0gdXNlTWVtbygoKSA9PiBNRCA+IHNpemUud2lkdGgsIFtzaXplXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoc2VjdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgdG9nZ2xlTWVudSgpO1xuICAgIG9uQ2xpY2soc2VjdGlvbik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICB0dyhgYmctd2hpdGUgei01MFx0Zml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgZGVsYXktMzAwIHRyYW5zaXRpb24tYWxsYCksXG4gICAgICAgIHtcbiAgICAgICAgICBbdHcoYC10b3AtMjBgKV06IHNjcm9sbERpcmVjdGlvbiA9PT0gYHVwYCAmJiB0b3AgKiAtMSA+IDgwICYmICFzaG93TWVudSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBbdHcoYHNoYWRvdy1tZGApXTogdG9wICogLTEgPiA4MCB9LFxuICAgICAgKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYG1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04YCl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXggaXRlbXMtY2VudGVyIGgtMjBgKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBmbGV4LXNocmluay0wYCl9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3R3KGBoLTE2IHctMTZgKX0gc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiB3aWR0aD17NTZ9IGhlaWdodD17NjV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWdyb3cganVzdGlmeS1lbmQgei01MGApfT5cbiAgICAgICAgICAgIDxIYW1idXJnZXIgdG9nZ2xlZD17c2hvd01lbnV9IHRvZ2dsZT17dG9nZ2xlTWVudX0gc2l6ZT17aXNNb2JpbGUgPyAyMCA6IDMyfSByb3VuZGVkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TW9iaWxlTWVudSBvcGVuPXtzaG93TWVudX0gb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/navigation/index.tsx\n");

/***/ })

})