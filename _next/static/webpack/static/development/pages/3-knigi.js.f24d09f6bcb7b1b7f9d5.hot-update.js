webpackHotUpdate("static/development/pages/3-knigi.js",{

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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout */ "./components/layout.js");
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/article.js";


var articleList = [{
  id: '3-knigi',
  title: '3 knigi'
}, {
  id: 'chem-ukraina',
  title: 'Chem Ukraina'
}];
function renderArticle(id, text) {
  var meta = articleList.find(function (a) {
    return a.id === id;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: text
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

/***/ }),

/***/ "./pages/3-knigi.js":
/*!**************************!*\
  !*** ./pages/3-knigi.js ***!
  \**************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../article */ "./article.js");
/* harmony import */ var _articles_3_knigi_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../articles/3-knigi.md */ "./articles/3-knigi.md");
/* harmony import */ var _articles_3_knigi_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_articles_3_knigi_md__WEBPACK_IMPORTED_MODULE_1__);


var id = '3-knigi';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_article__WEBPACK_IMPORTED_MODULE_0__[/* renderArticle */ "b"])(id, _articles_3_knigi_md__WEBPACK_IMPORTED_MODULE_1___default.a);
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

/***/ })

})
//# sourceMappingURL=3-knigi.js.f24d09f6bcb7b1b7f9d5.hot-update.js.map