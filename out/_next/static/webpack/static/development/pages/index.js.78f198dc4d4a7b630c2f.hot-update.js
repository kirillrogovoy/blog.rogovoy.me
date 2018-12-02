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
    className: "jsx-931204427",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-931204427",
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
      className: "jsx-931204427",
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
      className: "jsx-931204427" + " " + "articleLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, article.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-931204427",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-931204427" + " " + "articleInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "18.09.2018, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: article.fbLink,
      className: "jsx-931204427",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "\u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0435 \u0432 FB")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "931204427",
    css: ".articleLink.jsx-931204427{-webkit-text-decoration:none;text-decoration:none;font-weight:bold;color:#555;}.articleLink.jsx-931204427:hover{color:#999;}.articleInfo.jsx-931204427{font-size:14px;color:#777;}.articleInfo.jsx-931204427 a.jsx-931204427{color:#555;}.articleInfo.jsx-931204427 a.jsx-931204427:hover{color:#999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL2Jsb2cucm9nb3ZveS5tZS9jb21wb25lbnRzL3Bvc3QtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmMsQUFHNEIsQUFLUixBQUdJLEFBSUosQUFHQSxXQVRmLEFBT0EsQUFHQSxJQVBlLFdBQ2Ysd0JBVG1CLGlCQUNOLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2tpcmlsbHJvZ292b3kvUHJvamVjdHMvYmxvZy5yb2dvdm95Lm1lL2NvbXBvbmVudHMvcG9zdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgYXJ0aWNsZUxpc3QgfSBmcm9tICcuLi9hcnRpY2xlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiA8ZGl2IHN0eWxlPXt7d2lkdGg6ICc5MCUnLCBtYXhXaWR0aDogJzYwMHB4JywgbWFyZ2luOiAnMCBhdXRvJ319PlxuICA8dWw+XG4gICAgICB7YXJ0aWNsZUxpc3QubWFwKGFydGljbGUgPT4gKFxuICAgICAgICA8bGkga2V5PXthcnRpY2xlLmlkfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzEwcHgnfX0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgLyR7YXJ0aWNsZS5pZH1gfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYXJ0aWNsZUxpbmtcIj57YXJ0aWNsZS50aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGljbGVJbmZvXCI+XG4gICAgICAgICAgICAgICAgMTguMDkuMjAxOCwgPGEgaHJlZj17YXJ0aWNsZS5mYkxpbmt9PtC+0LHRgdGD0LbQtNC10L3QuNC1INCyIEZCPC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gIDwvdWw+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuYXJ0aWNsZUxpbmsge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICB9XG4gICAgLmFydGljbGVMaW5rOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxuICAgIC5hcnRpY2xlSW5mbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgfVxuICAgIC5hcnRpY2xlSW5mbyBhIHtcbiAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgfVxuICAgIC5hcnRpY2xlSW5mbyBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L2Rpdj5cbiJdfQ== */\n/*@ sourceURL=/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/post-list.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.78f198dc4d4a7b630c2f.hot-update.js.map