"use strict";

/* harmony export (binding) */
export { PreviewTemplateView };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_classnames__ from "external/classnames-HW6M";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_classnames___default from "external/classnames-HW6M";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_antd__ from "antd";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_qrcode_react__ from "./qrcode/react-3Cpi";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_react_css_modules__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4_react_css_modules___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__cfg__ from "./cfg-dpNx";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__IconFont__ from "./IconFont-zVV7";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__sensorsData__ from "./sensorsData-yI2H";
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
var styles = require("./unnamed-aJKZ");
var PreviewTemplateView = function (_React$Component) {
  _inherits(PreviewTemplateView, _React$Component);
  function PreviewTemplateView(props) {
    _classCallCheck(this, PreviewTemplateView);
    var _this = _possibleConstructorReturn(this, (PreviewTemplateView.__proto__ || Object.getPrototypeOf(PreviewTemplateView)).call(this, props));
    _this.templateColor = ['blue', 'yellow', 'purple'];
    _this.handleTemplateClick = _this.handleTemplateClick.bind(_this);
    _this.handleQuitPreview = _this.handleQuitPreview.bind(_this);
    _this.handleRefreshIframe = _this.handleRefreshIframe.bind(_this);
    return _this;
  }
  _createClass(PreviewTemplateView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //
    }
  }, {
    key: "handleQuitPreview",
    value: function handleQuitPreview() {
      this.props.setPreviewTemplateInfoAction({
        id: -1,
        visible: false
      });
    }
  }, {
    key: "handleTemplateClick",
    value: function handleTemplateClick(id, name) {
      this.props.setPreviewTemplateInfoAction({
        id: id,
        visible: true
      });
      Object(__WEBPACK_IMPORTED_MODULE_7__sensorsData__.sensorsCustomReport)('TemplateClick', {
        template_name: name
      });
    }
  }, {
    key: "handleRefreshIframe",
    value: function handleRefreshIframe() {
      var iframe = document.getElementById('player');
      iframe.src = iframe.src;
    }
  }, {
    key: "handleOpenTemplate",
    value: function handleOpenTemplate(id) {
      var _config = Object(__WEBPACK_IMPORTED_MODULE_5__cfg__.config)(),
        cocoEditorUrl = _config.cocoEditorUrl;
      window.open(cocoEditorUrl + "?templateId=" + id, Date.now().toString());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _props = this.props,
        templateList = _props.templateList,
        previewTemplateInfo = _props.previewTemplateInfo;
      var template = templateList.find(function (item) {
        return item.id === previewTemplateInfo.id;
      });
      if (!previewTemplateInfo.visible || !template) {
        return null;
      }
      // 新人模版
      var list = templateList.filter(function (item) {
        return item.type === 2;
      }).slice(0, 3).sort(function (a, b) {
        return b.ordinal - a.ordinal;
      });
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'previewTemplate'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'templateList'
      }, list.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          key: item.id,
          onClick: function onClick() {
            return _this2.handleTemplateClick(item.id, item.name);
          },
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default('templateItem', _this2.templateColor[index], item.id === template.id && 'active')
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'imageBox'
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'image',
          style: {
            backgroundImage: "url(" + item.preview_url2 + ")"
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("img", {
          src: item.gif_url,
          alt: item.name,
          styleName: 'gif'
        }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'name'
        }, item.name), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'desc'
        }, item.description, " "));
      })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'quitPreviewBtn',
        onClick: this.handleQuitPreview
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: 'icon-quit',
        styleName: 'icon'
      }), "\u9000\u51FA\u9884\u89C8"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'previewBtnBox'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'btnItem',
        onClick: this.handleRefreshIframe
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: 'icon-refresh'
      })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__.Dropdown, {
        placement: 'top',
        overlay: __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'dropdown'
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'qrcodeImage'
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3_qrcode_react__.default, {
          value: template.player_url,
          size: 150,
          level: "M",
          imageSettings: {
            width: 40,
            height: 40,
            src: 'https://static.codemao.cn/coco/image/share-dialog/qrlogo.png'
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", null, "\u624B\u673A\u626B\u7801\uFF0C\u7ACB\u5373\u4F53\u9A8C"))
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'btnItem'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: 'icon-qrcode'
      }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'howBtn',
        onClick: function onClick() {
          return _this2.handleOpenTemplate(template.id);
        }
      }, "\u53BB\u770B\u770B\u600E\u4E48\u505A", __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: 'icon-right',
        styleName: 'icon'
      }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("iframe", {
        src: template.player_url,
        id: 'player',
        width: "100%",
        height: '100%',
        frameBorder: 0
      }));
    }
  }]);
  return PreviewTemplateView;
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);
PreviewTemplateView = __decorate([__WEBPACK_IMPORTED_MODULE_4_react_css_modules__(styles, {
  allowMultiple: true
})], PreviewTemplateView);

/***/