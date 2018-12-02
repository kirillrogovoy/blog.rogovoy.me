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
  title: '3 knigi'
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
      lineNumber: 16
    },
    __self: this
  });
}

/***/ }),

/***/ "./components/article.js":
/*!*******************************!*\
  !*** ./components/article.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/article.js";



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  console.log('props', props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "article",
    dangerouslySetInnerHTML: {
      __html: props.content
    },
    className: "jsx-828909409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "828909409",
    css: ".article{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL2Jsb2cucm9nb3ZveS5tZS9jb21wb25lbnRzL2FydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3VCLEFBR21CLFVBQ1oiLCJmaWxlIjoiL1VzZXJzL2tpcmlsbHJvZ292b3kvUHJvamVjdHMvYmxvZy5yb2dvdm95Lm1lL2NvbXBvbmVudHMvYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zb2xlLmxvZygncHJvcHMnLCBwcm9wcylcbiAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzcz1cImFydGljbGVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcHJvcHMuY29udGVudH19PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLmFydGljbGUge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG59XG4iXX0= */\n/*@ sourceURL=/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/article.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=3-knigi.js.d077e3c5d865c6187c26.hot-update.js.map