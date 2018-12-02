webpackHotUpdate("static/development/pages/index.js",{

/***/ "./article.js":
/*!********************!*\
  !*** ./article.js ***!
  \********************/
/*! exports provided: articleList, renderArticle */
/*! exports used: articleList, renderArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return articleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return renderArticle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/article */ "./components/article.js");
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/article.js";


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
function renderArticle(id, content) {
  var meta = articleList.find(function (a) {
    return a.id === id;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    meta: meta,
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_post_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post-list */ "./components/post-list.js");
/* harmony import */ var _article_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.js */ "./article.js");
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_post_list__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    articleList: _article_js__WEBPACK_IMPORTED_MODULE_3__[/* articleList */ "a"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.3c370d9310084eadc3db.hot-update.js.map