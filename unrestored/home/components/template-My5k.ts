"use strict";

/* harmony export (binding) */
export { MenuView };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_classnames__ from "classnames";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_classnames___default from "classnames";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ from "react-css-modules";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default from "react-css-modules";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ from "react-router-dom";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__IconFont__ from "./IconFont-zVV7";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__cfg__ from "../cfg-dpNx";
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var styles = require("./unnamed-HR1v");
var MenuView = function (_React$Component) {
  _inherits(MenuView, _React$Component);
  function MenuView(props) {
    _classCallCheck(this, MenuView);
    return _possibleConstructorReturn(this, (MenuView.__proto__ || Object.getPrototypeOf(MenuView)).call(this, props));
  }
  _createClass(MenuView, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleOpenDiscoverUrl",
    value: function handleOpenDiscoverUrl() {
      var _config = Object(__WEBPACK_IMPORTED_MODULE_5__cfg__.config)(),
        discoverUrl = _config.discoverUrl;
      window.open(discoverUrl, Date.now().toString());
    }
  }, {
    key: "render_navLink",
    value: function render_navLink(url, content, icon) {
      var current_url = '/' + location.pathname.split('/').pop();
      var active = current_url === url;
      // 主页
      if (url === '/home') {
        active = current_url === '/' || current_url === '/home';
      }
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__.NavLink, {
        to: url,
        styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default('menuItem', active && 'active')
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__IconFont__.default, {
        type: icon,
        styleName: 'menuIcon'
      }), content);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'menu'
      }, this.render_navLink('/home', '主页', 'icon-home'), this.render_navLink('/work', '我的作品', 'icon-work'), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'menuItem',
        onClick: this.handleOpenDiscoverUrl
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'discover'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__IconFont__.default, {
        type: 'icon-discover',
        styleName: 'menuIcon'
      }), "\u53D1\u73B0"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__IconFont__.default, {
        type: 'icon-discover-arrow',
        styleName: 'menuArrow'
      }))));
    }
  }]);
  return MenuView;
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);
MenuView = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules__(styles, {
  allowMultiple: true
})], MenuView);

/***/