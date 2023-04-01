"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles/Post",{

/***/ "./pages/articles/Post.js":
/*!********************************!*\
  !*** ./pages/articles/Post.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Post() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { pid  } = router.query;\n    const [blogJson, setBlogJson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        for(let i = 0; i < _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__.length; i++){\n            if (_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i].slug === pid) {\n                setBlogJson(_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i]);\n                console.log(\"Found matching blog post:\", _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i]);\n                break;\n            }\n        }\n    }, [\n        pid\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space\",\n                style: {\n                    padding: \"1px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" container box\",\n                children: blogJson.desc.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: [\n                                item.key.startsWith(\"topHeading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-center my-3\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 53\n                                }, this),\n                                item.key.startsWith(\"title\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-start my-2\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 48\n                                }, this),\n                                item.key.startsWith(\"heading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-start my-2\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 50\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex justify-content-center\",\n                                    children: item.key.startsWith(\"image\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.text,\n                                        style: {\n                                            width: \"100%\",\n                                            maxWidth: \"700px\"\n                                        },\n                                        alt: \"Dynamic Image\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 50\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    }, item.key, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"mIYpughBD2lSxA6eUUFGTYtJe3Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9Qb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNiO0FBQ0U7QUFDSDtBQUVyQyxTQUFTTSxPQUFPOztJQUNkLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUVJLElBQUcsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTVCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQyxDQUFDO0lBRTFDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSyxJQUFJVyxJQUFJLEdBQUdBLElBQUlQLG1EQUFXLEVBQUVPLElBQUs7WUFDcEMsSUFBSVAsNENBQUksQ0FBQ08sRUFBRSxDQUFDRSxJQUFJLEtBQUtOLEtBQUs7Z0JBQ3hCRyxZQUFZTiw0Q0FBSSxDQUFDTyxFQUFFO2dCQUNuQkcsUUFBUUMsR0FBRyxDQUFDLDZCQUE2QlgsNENBQUksQ0FBQ08sRUFBRTtnQkFDaEQsS0FBTTtZQUNSLENBQUM7UUFDSDtJQUNGLEdBQUc7UUFBQ0o7S0FBSTtJQUVSLHFCQUNFOzswQkFDRSw4REFBQ1M7Z0JBQUlDLFdBQVU7Z0JBQVFDLE9BQU87b0JBQUNDLFNBQVE7Z0JBQUs7Ozs7OzswQkFDNUMsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNaUixTQUFTVyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbEIsOERBQUNOO2tDQUNDLDRFQUFDQTs0QkFBSUMsV0FBVTs7Z0NBQ1pLLEtBQUtDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLCtCQUFpQiw4REFBQ0M7b0NBQUdSLFdBQVU7OENBQXFCSyxLQUFLSSxJQUFJOzs7Ozs7Z0NBQ2pGSixLQUFLQyxHQUFHLENBQUNDLFVBQVUsQ0FBQywwQkFBWSw4REFBQ0c7b0NBQUdWLFdBQVU7OENBQW9CSyxLQUFLSSxJQUFJOzs7Ozs7Z0NBQzNFSixLQUFLQyxHQUFHLENBQUNDLFVBQVUsQ0FBQyw0QkFBYyw4REFBQ0k7b0NBQUVYLFdBQVU7OENBQW9CSyxLQUFLSSxJQUFJOzs7Ozs7OENBQzdFLDhEQUFDVjtvQ0FBSUMsV0FBVTs4Q0FDWkssS0FBS0MsR0FBRyxDQUFDQyxVQUFVLENBQUMsMEJBQVksOERBQUNLO3dDQUFJQyxLQUFNUixLQUFLSSxJQUFJO3dDQUFHUixPQUFPOzRDQUFDYSxPQUFNOzRDQUFPQyxVQUFTO3dDQUFPO3dDQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFOakdYLEtBQUtDLEdBQUc7Ozs7Ozs7Ozs7OztBQWM1QjtHQW5DU2xCOztRQUNRRixrREFBU0E7OztLQURqQkU7QUFxQ1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvUG9zdC5qcz8xYjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvbGVnYWN5L2ltYWdlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBibG9nIGZyb20gJy4uL0pTT04vQmxvZy5qc29uJztcblxuZnVuY3Rpb24gUG9zdCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW2Jsb2dKc29uLCBzZXRCbG9nSnNvbl0gPSB1c2VTdGF0ZSh7fSk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGJsb2dbaV0uc2x1ZyA9PT0gcGlkKSB7XG4gICAgICAgIHNldEJsb2dKc29uKGJsb2dbaV0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZvdW5kIG1hdGNoaW5nIGJsb2cgcG9zdDpcIiwgYmxvZ1tpXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3BpZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZScgc3R5bGU9e3twYWRkaW5nOlwiMXB4XCJ9fT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgY29udGFpbmVyIGJveCcgPlxuICAgICAgICB7YmxvZ0pzb24uZGVzYy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5rZXl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwidG9wSGVhZGluZ1wiKSAmJiA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBteS0zJz57KGl0ZW0udGV4dCl9PC9oMT59XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwidGl0bGVcIikgJiYgPGgzIGNsYXNzTmFtZT0ndGV4dC1zdGFydCBteS0yJz57KGl0ZW0udGV4dCl9PC9oMz59XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwiaGVhZGluZ1wiKSAmJiA8cCBjbGFzc05hbWU9J3RleHQtc3RhcnQgbXktMic+eyhpdGVtLnRleHQpfTwvcD59XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJpbWFnZVwiKSAmJiA8aW1nIHNyYz17KGl0ZW0udGV4dCl9IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsbWF4V2lkdGg6XCI3MDBweFwifX0gIGFsdD1cIkR5bmFtaWMgSW1hZ2VcIiAvPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInVzZVJvdXRlciIsImJsb2ciLCJQb3N0Iiwicm91dGVyIiwicGlkIiwicXVlcnkiLCJibG9nSnNvbiIsInNldEJsb2dKc29uIiwiaSIsImxlbmd0aCIsInNsdWciLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwYWRkaW5nIiwiZGVzYyIsIm1hcCIsIml0ZW0iLCJrZXkiLCJzdGFydHNXaXRoIiwiaDEiLCJ0ZXh0IiwiaDMiLCJwIiwiaW1nIiwic3JjIiwid2lkdGgiLCJtYXhXaWR0aCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/Post.js\n"));

/***/ })

});