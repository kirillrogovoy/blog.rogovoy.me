webpackHotUpdate("static/development/pages/3-knigi.js",{

/***/ "./pages/3-knigi.js":
/*!**************************!*\
  !*** ./pages/3-knigi.js ***!
  \**************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post */ "./post.js");
/* harmony import */ var _articles_3_knigi_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../articles/3-knigi.md */ "./articles/3-knigi.md");
/* harmony import */ var _articles_3_knigi_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_articles_3_knigi_md__WEBPACK_IMPORTED_MODULE_1__);


var id = '3-knigi';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_post__WEBPACK_IMPORTED_MODULE_0__[/* renderPost */ "a"])(id, _articles_3_knigi_md__WEBPACK_IMPORTED_MODULE_1___default.a);
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/3-knigi")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./post.js":
/*!*****************!*\
  !*** ./post.js ***!
  \*****************/
/*! exports provided: articleList, renderPost */
/*! exports used: renderPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export articleList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/post */ "./components/post.js");
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/post.js";


var articleList = [{
  id: '3-knigi',
  date: '09.11.2018',
  title: '3 knigi',
  description: 'Kak i chto',
  tags: ['a', 'b'],
  fbLink: 'http://example.com'
}, {
  id: 'chem-ukraina',
  date: '03.11.2018',
  title: 'Chem Ukraina',
  description: 'Chem i pochemu',
  tags: ['a', 'b'],
  fbLink: 'http://example.com'
}];
function renderPost(id, content) {
  var meta = articleList.find(function (a) {
    return a.id === id;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_post__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    meta: meta,
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=3-knigi.js.b2ef4ffaa3dc20faeb26.hot-update.js.map