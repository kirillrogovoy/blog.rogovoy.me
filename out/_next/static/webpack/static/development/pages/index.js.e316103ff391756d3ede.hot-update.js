webpackHotUpdate("static/development/pages/index.js",{

/***/ "./post.js":
/*!*****************!*\
  !*** ./post.js ***!
  \*****************/
/*! exports provided: articleList, renderPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export articleList */
/* unused harmony export renderPost */
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
//# sourceMappingURL=index.js.e316103ff391756d3ede.hot-update.js.map