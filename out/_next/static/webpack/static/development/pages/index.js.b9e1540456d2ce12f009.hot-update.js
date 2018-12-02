webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/post-list.js":
/*!*********************************!*\
  !*** ./components/post-list.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _article_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.js */ "./article.js");
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/post-list.js";




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '90%',
      maxWidth: '600px',
      margin: '0 auto'
    },
    className: "jsx-1811846587",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1811846587",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _article_js__WEBPACK_IMPORTED_MODULE_3__[/* articleList */ "a"].map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: article.id,
      style: {
        marginBottom: '10px'
      },
      className: "jsx-1811846587",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(article.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1811846587" + " " + "articleLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, article.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1811846587",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1811846587" + " " + "articleInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, article.date, ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: article.fbLink,
      className: "jsx-1811846587",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "\u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0435 \u0432 FB")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1811846587",
    css: "li.jsx-1811846587{font-size:20px;}a.jsx-1811846587{-webkit-text-decoration:none;text-decoration:none;font-weight:bold;color:#d07070;}a.jsx-1811846587:hover{color:#f08080;}a.jsx-1811846587:visited{color:red;}.articleInfo.jsx-1811846587{font-size:14px;color:#777;}.articleInfo.jsx-1811846587 a.jsx-1811846587{font-weight:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL2Jsb2cucm9nb3ZveS5tZS9jb21wb25lbnRzL3Bvc3QtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmMsQUFHc0IsQUFHTSxBQUtQLEFBR0osQUFHTyxBQUlFLFVBTnJCLElBSEEsQ0FSQSxBQWNlLElBSWYsT0FIQSx3QkFabUIsaUJBQ0gsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2tpcmlsbHJvZ292b3kvUHJvamVjdHMvYmxvZy5yb2dvdm95Lm1lL2NvbXBvbmVudHMvcG9zdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgYXJ0aWNsZUxpc3QgfSBmcm9tICcuLi9hcnRpY2xlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiA8ZGl2IHN0eWxlPXt7d2lkdGg6ICc5MCUnLCBtYXhXaWR0aDogJzYwMHB4JywgbWFyZ2luOiAnMCBhdXRvJ319PlxuICA8dWw+XG4gICAgICB7YXJ0aWNsZUxpc3QubWFwKGFydGljbGUgPT4gKFxuICAgICAgICA8bGkga2V5PXthcnRpY2xlLmlkfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzEwcHgnfX0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgLyR7YXJ0aWNsZS5pZH1gfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYXJ0aWNsZUxpbmtcIj57YXJ0aWNsZS50aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGljbGVJbmZvXCI+XG4gICAgICAgICAgICAgIHthcnRpY2xlLmRhdGV9LCA8YSBocmVmPXthcnRpY2xlLmZiTGlua30+0L7QsdGB0YPQttC00LXQvdC40LUg0LIgRkI8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgPC91bD5cbiAgPHN0eWxlIGpzeD57YFxuICAgIGxpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZDA3MDcwO1xuICAgIH1cbiAgICBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZjA4MDgwO1xuICAgIH1cbiAgICBhOnZpc2l0ZWQge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gICAgLmFydGljbGVJbmZvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzc3NztcbiAgICB9XG4gICAgLmFydGljbGVJbmZvIGEge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbjwvZGl2PlxuIl19 */\n/*@ sourceURL=/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/post-list.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.b9e1540456d2ce12f009.hot-update.js.map