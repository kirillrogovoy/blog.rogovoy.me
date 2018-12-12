webpackHotUpdate("static/development/pages/rabota-za-kompiuterom-stoya.js",{

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_post_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/post-list */ "./components/post-list.js");
/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./separator */ "./components/separator.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post */ "./post.js");
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/post.js";








/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var meta = _ref.meta,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1634066694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, meta.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: meta.description,
    className: "jsx-1634066694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "keywords",
    content: meta.tags.join(','),
    className: "jsx-1634066694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      color: '#777',
      textDecoration: 'underline'
    },
    className: "jsx-1634066694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\u041D\u0430\u0437\u0430\u0434")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginBottom: '50px'
    },
    className: "jsx-1634066694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      color: '#d07070',
      fontSize: '42px',
      letterSpacing: '-0.63px',
      marginBottom: '10px'
    },
    className: "jsx-1634066694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, meta.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      fontSize: '17px'
    },
    className: "jsx-1634066694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1634066694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, meta.date), ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      fontWeight: '300'
    },
    href: meta.fbLink,
    className: "jsx-1634066694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0435 \u0432 Facebook"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    },
    className: "jsx-1634066694" + " " + "markdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_separator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OtherPosts, {
    currentPostId: meta.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1634066694",
    css: ".markdown{font-size:21px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;line-height:30px;text-align:start;}.markdown img{width:100%;margin-top:15px;}.markdown h2{font-size:34px;line-height:39px;margin:56px 0 0 0;}.markdown h2+p{margin-top:13px;}.markdown p{margin:29px 0 0 0;}.markdown ul,.markdown ol{margin-top:5px;}.markdown li{list-style-type:square;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL2Jsb2cucm9nb3ZveS5tZS9jb21wb25lbnRzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUN1QixBQUd3QixBQU1KLEFBSUksQUFLQyxBQUdFLEFBR0gsQUFHUSxXQWpCUCxJQU5LLEFBVUosQUFXbkIsQ0FOQSxFQUdBLEtBTUEsSUFqQkEsS0FJb0Isa0JBQ3BCLGtFQVhtQixpQkFDQSxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2tpcmlsbHJvZ292b3kvUHJvamVjdHMvYmxvZy5yb2dvdm95Lm1lL2NvbXBvbmVudHMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0LWxpc3QnXG5pbXBvcnQgU2VwYXJhdG9yIGZyb20gJy4vc2VwYXJhdG9yJ1xuaW1wb3J0IHsgZ2V0UmFuZG9tUG9zdHMgfSBmcm9tICcuLi9wb3N0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBtZXRhLCBjb250ZW50IH0pIHtcbiAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e21ldGEudGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXttZXRhLnRhZ3Muam9pbignLCcpfSAvPlxuICAgIDwvSGVhZD5cbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPGEgc3R5bGU9e3tjb2xvcjogJyM3NzcnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9fT7QndCw0LfQsNC0PC9hPlxuICAgIDwvTGluaz5cbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBtYXJnaW5Cb3R0b206ICc1MHB4J1xuICAgIH19PlxuICAgICAgPGgxIHN0eWxlPXt7XG4gICAgICAgIGNvbG9yOiAnI2QwNzA3MCcsXG4gICAgICAgIGZvbnRTaXplOiAnNDJweCcsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICctMC42M3B4JyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCdcbiAgICAgIH19PlxuICAgICAgICB7bWV0YS50aXRsZX1cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcxN3B4J319PlxuICAgICAgICA8c3Bhbj57bWV0YS5kYXRlfTwvc3Bhbj4sIDxhIHN0eWxlPXt7Zm9udFdlaWdodDogJzMwMCd9fSBocmVmPXttZXRhLmZiTGlua30+0L7QsdGB0YPQttC00LXQvdC40LUg0LIgRmFjZWJvb2s8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudH19PjwvZGl2PlxuXG4gICAgPFNlcGFyYXRvciAvPlxuXG4gICAgPE90aGVyUG9zdHMgY3VycmVudFBvc3RJZD17bWV0YS5pZH0gLz5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAubWFya2Rvd24ge1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzlweDtcbiAgICAgICAgbWFyZ2luOiA1NnB4IDAgMCAwO1xuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGgyICsgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICB9XG4gICAgICAubWFya2Rvd24gcCB7XG4gICAgICAgIG1hcmdpbjogMjlweCAwIDAgMDtcbiAgICAgIH1cbiAgICAgIC5tYXJrZG93biB1bCwgLm1hcmtkb3duIG9sIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbn1cblxuZnVuY3Rpb24gT3RoZXJQb3N0cyhwcm9wcykge1xuICBjb25zdCBwb3N0cyA9IGdldFJhbmRvbVBvc3RzKDMpLmZpbHRlcihwb3N0ID0+IHBvc3QuaWQgIT09IHByb3BzLmN1cnJlbnRQb3N0SWQpXG4gIGlmIChwb3N0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiA8ZGl2PlxuICAgIDxoMz7QlNGA0YPQs9C40LUg0YHRgtCw0YLRjNC4OjwvaDM+XG4gICAgPFBvc3RMaXN0IHBvc3RzPXtwb3N0c30gLz5cbiAgPC9kaXY+XG59XG4iXX0= */\n/*@ sourceURL=/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/post.js */",
    __self: this
  }));
});

function OtherPosts(props) {
  var posts = Object(_post__WEBPACK_IMPORTED_MODULE_7__[/* getRandomPosts */ "b"])(3).filter(function (post) {
    return post.id !== props.currentPostId;
  });

  if (posts.length === 0) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_post_list__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    posts: posts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=rabota-za-kompiuterom-stoya.js.2604fa7ee1d643a6223f.hot-update.js.map