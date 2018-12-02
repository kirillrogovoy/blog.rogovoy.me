webpackHotUpdate("static/development/pages/3-knigi.js",{

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
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/post-list.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: '0 auto'
    },
    className: "jsx-1530548994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1530548994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      style: {
        marginBottom: '30px'
      },
      className: "jsx-1530548994",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(post.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1530548994" + " " + "postLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, post.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1530548994" + " " + "postInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1530548994",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, " \u2014 "), post.date, ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: post.fbLink,
      className: "jsx-1530548994",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "\u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0435 \u0432 Facebook")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1530548994",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1530548994" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, post.description));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1530548994",
    css: "li.jsx-1530548994{font-size:20px;}a.jsx-1530548994{-webkit-text-decoration:none;text-decoration:none;font-weight:bold;color:#d07070;}a.jsx-1530548994:hover{color:#f08080;}a.jsx-1530548994:visited{color:#bbb;}.postInfo.jsx-1530548994{font-size:14px;}.postInfo.jsx-1530548994 a.jsx-1530548994{font-weight:normal;}.description.jsx-1530548994{margin-top:5px;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL2Jsb2cucm9nb3ZveS5tZS9jb21wb25lbnRzL3Bvc3QtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmMsQUFHc0IsQUFHTSxBQUtQLEFBR0gsQUFHTSxBQUdFLEFBR0YsV0FScEIsR0FIQyxDQVJBLEFBY0EsQUFNbUIsSUFIbkIsV0FJQSxvQkFsQm1CLGlCQUNILGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL2Jsb2cucm9nb3ZveS5tZS9jb21wb25lbnRzL3Bvc3QtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKHsgcG9zdHMgfSkgPT4gPGRpdiBzdHlsZT17e21hcmdpbjogJzAgYXV0byd9fT5cbiAgPHVsPlxuICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgPGxpIGtleT17cG9zdC5pZH0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICczMHB4J319PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBvc3RMaW5rXCI+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdEluZm9cIj5cbiAgICAgICAgICAgICAgPHNwYW4+IOKAlCA8L3NwYW4+XG4gICAgICAgICAgICAgIHtwb3N0LmRhdGV9LCA8YSBocmVmPXtwb3N0LmZiTGlua30+0L7QsdGB0YPQttC00LXQvdC40LUg0LIgRmFjZWJvb2s8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3Bvc3QuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gIDwvdWw+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICBsaSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogI2QwNzA3MDtcbiAgICB9XG4gICAgYTpob3ZlciB7XG4gICAgICBjb2xvcjogI2YwODA4MDtcbiAgICB9XG4gICAgYTp2aXNpdGVkIHtcbiAgICAgIGNvbG9yOiAjYmJiO1xuICAgfVxuICAgIC5wb3N0SW5mbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnBvc3RJbmZvIGEge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L2Rpdj5cbiJdfQ== */\n/*@ sourceURL=/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/post-list.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=3-knigi.js.e32f530994646a57c9fd.hot-update.js.map