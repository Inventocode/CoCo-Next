/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：KI63
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { TemplateItemView };
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ from "react-css-modules";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default from "react-css-modules";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__cfg__ from "../cfg-dpNx";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__sensorsData__ from "../sensorsData-yI2H";
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) {
        descriptor.writable = true;
      }
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) {
      defineProperties(Constructor.prototype, protoProps);
    }
    if (staticProps) {
      defineProperties(Constructor, staticProps);
    }
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
  if (superClass) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(subClass, superClass);
    } else {
      subClass.__proto__ = superClass;
    }
  }
}
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length;
  var r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
  var d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  if (c > 3 && r) {
    Object.defineProperty(target, key, r);
  }
  return r;
};
import * as styles from "./styles-RQs1";
var TemplateItemView = function (_React$Component) {
  _inherits(TemplateItemView, _React$Component);
  function TemplateItemView(props) {
    _classCallCheck(this, TemplateItemView);
    var _this = _possibleConstructorReturn(this, (TemplateItemView.__proto__ || Object.getPrototypeOf(TemplateItemView)).call(this, props));
    _this.state = {
      isNewUser: false
    };
    return _this;
  }
  _createClass(TemplateItemView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //
    }
  }, {
    key: "handleTemplateClick",
    value: function handleTemplateClick(id, name) {
      __WEBPACK_IMPORTED_MODULE_3__sensorsData__.sensorsCustomReport("TemplateClick", {
        template_name: name
      });
      var _config = __WEBPACK_IMPORTED_MODULE_2__cfg__.config();
      var cocoEditorUrl = _config.cocoEditorUrl;
      window.open(cocoEditorUrl + "?templateId=" + id, Date.now().toString());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var item = this.props.item;
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "templateItem",
        onClick: function onClick() {
          return _this2.handleTemplateClick(item.id, item.name);
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "image",
        style: {
          backgroundImage: "url(" + item.preview_url + ")"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("img", {
        src: item.gif_url,
        alt: item.name,
        styleName: "gif"
      })));
    }
  }]);
  return TemplateItemView;
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);
TemplateItemView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, {
  allowMultiple: true
})], TemplateItemView);

/***/