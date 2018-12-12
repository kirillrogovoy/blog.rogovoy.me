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
    className: "jsx-3712776356",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, meta.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: meta.description,
    className: "jsx-3712776356",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "keywords",
    content: meta.tags.join(','),
    className: "jsx-3712776356",
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
      color: '#777'
    },
    className: "jsx-3712776356",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\u041D\u0430\u0437\u0430\u0434")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      color: '#d07070',
      fontSize: '42px',
      letterSpacing: '-0.63px',
      marginBottom: '50px'
    },
    className: "jsx-3712776356",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, meta.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    },
    className: "jsx-3712776356" + " " + "markdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_separator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3712776356",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3712776356",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_post_list__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    posts: Object(_post__WEBPACK_IMPORTED_MODULE_7__[/* getRandomPosts */ "b"])(3).filter(function (post) {
      return post.id !== meta.id;
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3712776356",
    css: ".markdown{font-size:21px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;line-height:30px;text-align:start;}.markdown img{width:100%;margin-top:15px;}.markdown h2{font-size:34px;line-height:39px;margin:56px 0 0 0;}.markdown h2+p{margin-top:13px;}.markdown p{margin:29px 0 0 0;}.markdown ul,.markdown ol{margin-top:5px;}.markdown li{list-style-type:square;}.markdown a{-webkit-text-decoration:none;text-decoration:none;font-weight:bold;color:#d07070;}.markdown a:hover{color:#f08080;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL2Jsb2cucm9nb3ZveS5tZS9jb21wb25lbnRzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUN1QixBQUd3QixBQU1KLEFBSUksQUFLQyxBQUdFLEFBR0gsQUFHUSxBQUdGLEFBS1AsV0F6QkUsR0EwQmxCLENBaEN1QixBQVVKLEFBV25CLENBTkEsRUFHQSxLQU1BLElBakJBLEtBSW9CLGtCQUNwQixBQWVtQixpQkFDSCxjQUNoQixtQ0E1Qm1CLGlCQUNBLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMva2lyaWxscm9nb3ZveS9Qcm9qZWN0cy9ibG9nLnJvZ292b3kubWUvY29tcG9uZW50cy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3QtbGlzdCdcbmltcG9ydCBTZXBhcmF0b3IgZnJvbSAnLi9zZXBhcmF0b3InXG5pbXBvcnQgeyBnZXRSYW5kb21Qb3N0cyB9IGZyb20gJy4uL3Bvc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IG1ldGEsIGNvbnRlbnQgfSkge1xuICByZXR1cm4gPExheW91dD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57bWV0YS50aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e21ldGEudGFncy5qb2luKCcsJyl9IC8+XG4gICAgPC9IZWFkPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YSBzdHlsZT17e2NvbG9yOiAnIzc3Nyd9fT7QndCw0LfQsNC0PC9hPlxuICAgIDwvTGluaz5cbiAgICA8aDEgc3R5bGU9e3tcbiAgICAgIGNvbG9yOiAnI2QwNzA3MCcsXG4gICAgICBmb250U2l6ZTogJzQycHgnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjYzcHgnLFxuICAgICAgbWFyZ2luQm90dG9tOiAnNTBweCdcbiAgICB9fT5cbiAgICAgIHttZXRhLnRpdGxlfVxuICAgIDwvaDE+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnR9fT48L2Rpdj5cblxuICAgIDxTZXBhcmF0b3IgLz5cblxuICAgIDxkaXY+XG4gICAgICA8aDM+0JTRgNGD0LPQuNC1INGB0YLQsNGC0YzQuDo8L2gzPlxuICAgICAgPFBvc3RMaXN0IHBvc3RzPXtnZXRSYW5kb21Qb3N0cygzKS5maWx0ZXIocG9zdCA9PiBwb3N0LmlkICE9PSBtZXRhLmlkKX0gLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAubWFya2Rvd24ge1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzlweDtcbiAgICAgICAgbWFyZ2luOiA1NnB4IDAgMCAwO1xuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGgyICsgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICB9XG4gICAgICAubWFya2Rvd24gcCB7XG4gICAgICAgIG1hcmdpbjogMjlweCAwIDAgMDtcbiAgICAgIH1cbiAgICAgIC5tYXJrZG93biB1bCwgLm1hcmtkb3duIG9sIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG4gICAgICB9XG4gICAgICAubWFya2Rvd24gYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjZDA3MDcwO1xuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2YwODA4MDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxufVxuIl19 */\n/*@ sourceURL=/Users/kirillrogovoy/Projects/blog.rogovoy.me/components/post.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./pages/rabota-za-kompiuterom-stoya.js":
/*!**********************************************!*\
  !*** ./pages/rabota-za-kompiuterom-stoya.js ***!
  \**********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post */ "./post.js");
/* harmony import */ var _posts_rabota_za_kompiuterom_stoya_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/rabota-za-kompiuterom-stoya.md */ "./posts/rabota-za-kompiuterom-stoya.md");
/* harmony import */ var _posts_rabota_za_kompiuterom_stoya_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_posts_rabota_za_kompiuterom_stoya_md__WEBPACK_IMPORTED_MODULE_1__);


var id = 'rabota-za-kompiuterom-stoya';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_post__WEBPACK_IMPORTED_MODULE_0__[/* renderPost */ "c"])(id, _posts_rabota_za_kompiuterom_stoya_md__WEBPACK_IMPORTED_MODULE_1___default.a);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/rabota-za-kompiuterom-stoya")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./post.js":
/*!*****************!*\
  !*** ./post.js ***!
  \*****************/
/*! exports provided: renderPost, getAllPosts, getRandomPosts */
/*! exports used: getAllPosts, getRandomPosts, renderPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return renderPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRandomPosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/post */ "./components/post.js");
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/post.js";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var posts = [{
  id: '3-knigi',
  date: '09.11.2018',
  title: '3 книги прочитать всем',
  description: 'Развивайся епта',
  tags: ['a', 'b'],
  fbLink: 'http://example.com'
}, {
  id: 'rabota-za-kompiuterom-stoya',
  date: '05.12.2018',
  title: 'Работать за компьютером стоя: зачем и как',
  description: 'Почему работать сидя – вредно и какие есть решения проблемы',
  tags: [],
  fbLink: '#',
  isDraft: true
}];
function renderPost(id, content) {
  var meta = posts.find(function (a) {
    return a.id === id;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_post__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    meta: meta,
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  });
}
function getAllPosts() {
  return posts.filter(function (post) {
    return !post.isDraft;
  });
}
function getRandomPosts(number) {
  return shuffle(getAllPosts()).slice(0, number);
}

function shuffle(b) {
  var a = _toConsumableArray(b);

  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [a[j], a[i]];
    a[i] = _ref[0];
    a[j] = _ref[1];
  }

  return a;
}

/***/ })

})
//# sourceMappingURL=rabota-za-kompiuterom-stoya.js.1b5818b3b429e26055d6.hot-update.js.map