webpackHotUpdate("static/development/pages/rabota-za-kompiuterom-stoya.js",{

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
    className: "jsx-1396706753",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1396706753",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      style: {
        marginBottom: '30px',
        listStyleType: 'square'
      },
      className: "jsx-1396706753",
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
      className: "jsx-1396706753" + " " + "postLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, post.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1396706753" + " " + "postInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1396706753",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, " \u2014 "), post.date, ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: post.fbLink,
      className: "jsx-1396706753",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "\u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0435 \u0432 Facebook")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1396706753",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1396706753" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, post.description));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1396706753",
    css: "li.jsx-1396706753{font-size:20px;}.postInfo.jsx-1396706753{font-size:14px;}.postInfo.jsx-1396706753 a.jsx-1396706753{font-weight:normal;}.description.jsx-1396706753{margin-top:5px;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL2Jsb2cucm9nb3ZveS5tZS9jb21wb25lbnRzL3Bvc3QtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmMsQUFHc0IsQUFHRSxBQUdFLEFBR0YsZUFSbkIsQUFHQSxBQU1tQixJQUhuQixXQUlBIiwiZmlsZSI6Ii9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL2Jsb2cucm9nb3ZveS5tZS9jb21wb25lbnRzL3Bvc3QtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKHsgcG9zdHMgfSkgPT4gPGRpdiBzdHlsZT17e21hcmdpbjogJzAgYXV0byd9fT5cbiAgPHVsPlxuICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgPGxpIGtleT17cG9zdC5pZH0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICczMHB4JywgbGlzdFN0eWxlVHlwZTogJ3NxdWFyZSd9fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwb3N0TGlua1wiPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RJbmZvXCI+XG4gICAgICAgICAgICAgIDxzcGFuPiDigJQgPC9zcGFuPlxuICAgICAgICAgICAgICB7cG9zdC5kYXRlfSwgPGEgaHJlZj17cG9zdC5mYkxpbmt9PtC+0LHRgdGD0LbQtNC10L3QuNC1INCyIEZhY2Vib29rPC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntwb3N0LmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICA8L3VsPlxuICA8c3R5bGUganN4PntgXG4gICAgbGkge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAucG9zdEluZm8ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5wb3N0SW5mbyBhIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgYH08L3N0eWxlPlxuPC9kaXY+XG4iXX0= */\n/*@ sourceURL=/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/post-list.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=rabota-za-kompiuterom-stoya.js.135dc4bffbd45da02e5a.hot-update.js.map