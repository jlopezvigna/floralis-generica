webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/navigation/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/navigation/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! twind */ \"./node_modules/twind/twind.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants_breakpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants/breakpoint */ \"./src/constants/breakpoint.tsx\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useWindowSize */ \"./src/hooks/useWindowSize.tsx\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.tsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mobile-menu */ \"./src/components/mobile-menu/index.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/jlopezvigna/Desktop/develop/floralis-generica/src/components/navigation/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Navigation = function Navigation(_ref) {\n  _s();\n\n  var onClick = _ref.onClick,\n      scrollDirection = _ref.scrollDirection,\n      top = _ref.top;\n\n  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(false),\n      _useToggle2 = Object(_Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useToggle, 2),\n      showMenu = _useToggle2[0],\n      toggleMenu = _useToggle2[1];\n\n  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  var isMobile = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n    return _constants_breakpoint__WEBPACK_IMPORTED_MODULE_5__[\"MD\"] > size.width;\n  }, [size]);\n\n  var handleClick = function handleClick(section) {\n    toggleMenu();\n    onClick(section);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"bg-white z-50\\tfixed top-0 left-0 right-0 delay-300 transition-all\"), Object(_Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"-top-20\"), scrollDirection === \"up\" && top * -1 > 80 && !showMenu), Object(_Users_jlopezvigna_Desktop_develop_floralis_generica_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"shadow-md\"), top * -1 > 80)),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"flex items-center h-20\"),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"flex-shrink-0\"),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"h-16 w-16\"),\n            src: \"/images/logo.png\",\n            alt: \"logo\",\n            width: 56,\n            height: 65\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_3__[\"tw\"])(\"flex items-center flex-grow justify-end z-50\"),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            toggled: showMenu,\n            toggle: toggleMenu,\n            size: isMobile ? 20 : 24,\n            rounded: true,\n            color: \"#0a222c\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mobile_menu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      open: showMenu,\n      onClick: handleClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navigation, \"XNDQelh1fo2fC7uayJAjOko8VnM=\", false, function () {\n  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n});\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9pbmRleC50c3g/MjgzZiJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwib25DbGljayIsInNjcm9sbERpcmVjdGlvbiIsInRvcCIsInVzZVRvZ2dsZSIsInNob3dNZW51IiwidG9nZ2xlTWVudSIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwiaXNNb2JpbGUiLCJ1c2VNZW1vIiwiTUQiLCJ3aWR0aCIsImhhbmRsZUNsaWNrIiwic2VjdGlvbiIsImNsc3giLCJ0dyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0Q7QUFBQTs7QUFBQSxNQUFqREMsT0FBaUQsUUFBakRBLE9BQWlEO0FBQUEsTUFBeENDLGVBQXdDLFFBQXhDQSxlQUF3QztBQUFBLE1BQXZCQyxHQUF1QixRQUF2QkEsR0FBdUI7O0FBQUEsbUJBQ3RDQyxnRUFBUyxDQUFDLEtBQUQsQ0FENkI7QUFBQTtBQUFBLE1BQzlEQyxRQUQ4RDtBQUFBLE1BQ3BEQyxVQURvRDs7QUFFckUsTUFBTUMsSUFBSSxHQUFHQyxvRUFBYSxFQUExQjtBQUVBLE1BQU1DLFFBQWlCLEdBQUdDLHFEQUFPLENBQUM7QUFBQSxXQUFNQyx3REFBRSxHQUFHSixJQUFJLENBQUNLLEtBQWhCO0FBQUEsR0FBRCxFQUF3QixDQUFDTCxJQUFELENBQXhCLENBQWpDOztBQUVBLE1BQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBcUI7QUFDdkNSLGNBQVU7QUFDVkwsV0FBTyxDQUFDYSxPQUFELENBQVA7QUFDRCxHQUhEOztBQUlBLHNCQUNFO0FBQ0UsYUFBUyxFQUFFQyxvREFBSSxDQUNiQyxnREFBRSxzRUFEVyxpS0FHVkEsZ0RBQUUsV0FIUSxFQUdNZCxlQUFlLFNBQWYsSUFBNEJDLEdBQUcsR0FBRyxDQUFDLENBQVAsR0FBVyxFQUF2QyxJQUE2QyxDQUFDRSxRQUhwRCxrS0FLVlcsZ0RBQUUsYUFMUSxFQUtRYixHQUFHLEdBQUcsQ0FBQyxDQUFQLEdBQVcsRUFMbkIsRUFEakI7QUFBQSw0QkFTRTtBQUFLLGVBQVMsRUFBRWEsZ0RBQUUsMENBQWxCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFQSxnREFBRSwwQkFBbEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVBLGdEQUFFLGlCQUFsQjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUEsZ0RBQUUsYUFBbEI7QUFBaUMsZUFBRyxFQUFDLGtCQUFyQztBQUF3RCxlQUFHLEVBQUMsTUFBNUQ7QUFBbUUsaUJBQUssRUFBRSxFQUExRTtBQUE4RSxrQkFBTSxFQUFFO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFFQSxnREFBRSxnREFBbEI7QUFBQSxpQ0FDRSxxRUFBQyx1REFBRDtBQUFXLG1CQUFPLEVBQUVYLFFBQXBCO0FBQThCLGtCQUFNLEVBQUVDLFVBQXRDO0FBQWtELGdCQUFJLEVBQUVHLFFBQVEsR0FBRyxFQUFILEdBQVEsRUFBeEU7QUFBNEUsbUJBQU8sTUFBbkY7QUFBb0YsaUJBQUssRUFBQztBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFtQkUscUVBQUMscURBQUQ7QUFBWSxVQUFJLEVBQUVKLFFBQWxCO0FBQTRCLGFBQU8sRUFBRVE7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQWpDRDs7R0FBTWIsVTtVQUMyQkksd0QsRUFDbEJJLDREOzs7S0FGVFIsVTtBQW1DU0EseUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR3IH0gZnJvbSAndHdpbmQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNRCB9IGZyb20gJ0AvY29uc3RhbnRzL2JyZWFrcG9pbnQnO1xuaW1wb3J0IGxpbmtzIGZyb20gJ0AvY29uc3RhbnRzL25hdmlnYXRpb25MaW5rcyc7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICdAL2hvb2tzL3VzZVdpbmRvd1NpemUnO1xuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tICdAL2hvb2tzL3VzZVRvZ2dsZSc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnaGFtYnVyZ2VyLXJlYWN0JztcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4uL21vYmlsZS1tZW51JztcblxuaW50ZXJmYWNlIElOYXZpZ2F0aW9uIHtcbiAgb25DbGljazogKHg6IHN0cmluZykgPT4gdm9pZDtcbiAgc2Nyb2xsRGlyZWN0aW9uOiBzdHJpbmc7XG4gIHRvcDogbnVtYmVyO1xufVxuXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgb25DbGljaywgc2Nyb2xsRGlyZWN0aW9uLCB0b3AgfTogSU5hdmlnYXRpb24pID0+IHtcbiAgY29uc3QgW3Nob3dNZW51LCB0b2dnbGVNZW51XSA9IHVzZVRvZ2dsZShmYWxzZSk7XG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XG5cbiAgY29uc3QgaXNNb2JpbGU6IGJvb2xlYW4gPSB1c2VNZW1vKCgpID0+IE1EID4gc2l6ZS53aWR0aCwgW3NpemVdKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChzZWN0aW9uOiBzdHJpbmcpID0+IHtcbiAgICB0b2dnbGVNZW51KCk7XG4gICAgb25DbGljayhzZWN0aW9uKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8bmF2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIHR3KGBiZy13aGl0ZSB6LTUwXHRmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBkZWxheS0zMDAgdHJhbnNpdGlvbi1hbGxgKSxcbiAgICAgICAge1xuICAgICAgICAgIFt0dyhgLXRvcC0yMGApXTogc2Nyb2xsRGlyZWN0aW9uID09PSBgdXBgICYmIHRvcCAqIC0xID4gODAgJiYgIXNob3dNZW51LFxuICAgICAgICB9LFxuICAgICAgICB7IFt0dyhgc2hhZG93LW1kYCldOiB0b3AgKiAtMSA+IDgwIH0sXG4gICAgICApfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThgKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgZmxleCBpdGVtcy1jZW50ZXIgaC0yMGApfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXgtc2hyaW5rLTBgKX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17dHcoYGgtMTYgdy0xNmApfSBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIHdpZHRoPXs1Nn0gaGVpZ2h0PXs2NX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXggaXRlbXMtY2VudGVyIGZsZXgtZ3JvdyBqdXN0aWZ5LWVuZCB6LTUwYCl9PlxuICAgICAgICAgICAgPEhhbWJ1cmdlciB0b2dnbGVkPXtzaG93TWVudX0gdG9nZ2xlPXt0b2dnbGVNZW51fSBzaXplPXtpc01vYmlsZSA/IDIwIDogMjR9IHJvdW5kZWQgY29sb3I9XCIjMGEyMjJjXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNb2JpbGVNZW51IG9wZW49e3Nob3dNZW51fSBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navigation/index.tsx\n");

/***/ })

})