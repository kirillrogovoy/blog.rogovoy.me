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
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/article */ "./components/article.js");
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/article.js";


var articleList = [{
  id: '3-knigi',
  title: '3 knigi',
  fbLink: 'http://example.com'
}, {
  id: 'chem-ukraina',
  title: 'Chem Ukraina'
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
      lineNumber: 17
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=3-knigi.js.aac30b8d2409a4b4f32a.hot-update.js.map