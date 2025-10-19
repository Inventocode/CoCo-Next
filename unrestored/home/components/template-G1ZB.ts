/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：G1ZB
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { HeaderView };
import * as __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ from "@babel/runtime/regenerator";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ from "react-css-modules";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default from "react-css-modules";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__crc_catui2_dist_components_application_sign_in_dialog__ from "./crc/catui2/dist/components/application/sign/in/dialog-oqxr";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_antd__ from "antd";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5_classnames__ from "classnames";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_5_classnames___default from "classnames";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__IconFont__ from "./IconFont-zVV7";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__sensorsData__ from "../sensorsData-yI2H";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__utils_url__ from "../utils/url-hVAD";
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
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      if (result.done) {
        resolve(result.value);
      } else {
        new P(function (resolve) {
          resolve(result.value);
        }).then(fulfilled, rejected);
      }
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
import * as styles from "./styles-ZbQe";
var serviceAgreementList = [{
  label: "用户协议",
  link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_userserviceProtocol.html"
}, {
  label: "隐私协议",
  link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_privacyProtocol.html"
}, {
  label: "儿童隐私保护协议",
  link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_childrenPrivacyProtectProtocol.html"
}, {
  label: "个人信息保护政策摘要",
  link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationProtectionPolicySummary.html"
}, {
  label: "个人信息收集清单",
  link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationCollectionList.html"
}, {
  label: "个人信息共享清单",
  link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationSharingList.html"
}];
var HeaderView = function (_React$Component) {
  _inherits(HeaderView, _React$Component);
  function HeaderView(props) {
    _classCallCheck(this, HeaderView);
    var _this = _possibleConstructorReturn(this, (HeaderView.__proto__ || Object.getPrototypeOf(HeaderView)).call(this, props));
    _this.state = {
      helpDropdownVisible: false
    };
    _this.handleShowCourse = _this.handleShowCourse.bind(_this);
    _this.handleHelpDropdownVisibleChange = _this.handleHelpDropdownVisibleChange.bind(_this);
    _this.handleLogin = _this.handleLogin.bind(_this);
    _this.handleLoginOut = _this.handleLoginOut.bind(_this);
    return _this;
  }
  _createClass(HeaderView, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleLogin",
    value: function handleLogin() {
      this.props.setSignDialogVisibleAction(true);
      // 点击登录按钮埋点
      __WEBPACK_IMPORTED_MODULE_7__sensorsData__.sensorsCustomReport("LoginButtonClick");
    }
  }, {
    key: "handleLoginOut",
    value: function handleLoginOut() {
      return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__crc_catui2_dist_components_application_sign_in_dialog__.getAuthModule().logout();
              case 3:
                this.props.asyncSetUserInfoAction(null);
                _context.next = 9;
                break;
              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.error("logout ", _context.t0);
              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));
    }
  }, {
    key: "handleHelpDropdownVisibleChange",
    value: function handleHelpDropdownVisibleChange(visible) {
      this.setState({
        helpDropdownVisible: visible
      });
    }
  }, {
    key: "handleShowCourse",
    value: function handleShowCourse() {
      var _props = this.props;
      var courseListVisible = _props.courseListVisible;
      var userInfo = _props.userInfo;
      if (!userInfo || userInfo.isNewUser || courseListVisible) {
        return;
      }
      this.props.setCourseDialogVisibleAction(true);
      this.setState({
        helpDropdownVisible: false
      });
    }
  }, {
    key: "handleDocument",
    value: function handleDocument() {
      window.open("https://codemao.yuque.com/kzbwh0/ogrtbo", Date.now().toString());
    }
  }, {
    key: "handleFeedback",
    value: function handleFeedback() {
      window.open("https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd", Date.now().toString());
    }
  }, {
    key: "renderUserInfo",
    value: function renderUserInfo(userInfo) {
      if (userInfo) {
        return __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__.Dropdown, {
          overlay: __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
            styleName: "dropdown"
          }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
            styleName: "dropdownItem",
            onClick: function onClick() {
              return window.open(__WEBPACK_IMPORTED_MODULE_8__utils_url__.getCommunityAccountSettingUrl(), "_blank");
            }
          }, "账号设置"), __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__.Dropdown, {
            overlay: __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
              styleName: "dropdown agreementDropdown"
            }, serviceAgreementList.map(function (item, index) {
              return __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
                key: index,
                styleName: "dropdownItem",
                onClick: function onClick() {
                  return window.open(item.link, "_blank");
                }
              }, item.label);
            })),
            placement: "topLeft"
          }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
            styleName: "dropdownItem"
          }, "服务协议", __WEBPACK_IMPORTED_MODULE_1_react__.createElement("span", {
            styleName: "subMenuArrow"
          }, "▶"))), __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
            styleName: "dropdownItem",
            onClick: this.handleLoginOut
          }, "退出登录")),
          trigger: ["click"]
        }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
          styleName: "userInfo"
        }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
          styleName: "userAvatar",
          style: {
            backgroundImage: "url(" + userInfo.avatar + ")"
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
          type: "icon-dropdown-down",
          styleName: "iconDown"
        }))));
      }
      return __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
        styleName: "userLogin",
        onClick: this.handleLogin
      }, "登录");
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props;
      var courseListVisible = _props2.courseListVisible;
      var userInfo = _props2.userInfo;
      var helpDropdownVisible = this.state.helpDropdownVisible;
      return __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
        styleName: "header"
      }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
        styleName: "left"
      }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("img", {
        src: "https://creation.codemao.cn/coco/home/logo.png",
        styleName: "logoImg",
        alt: ""
      }), __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
        styleName: "iconItem"
      }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__.Dropdown, {
        overlay: __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
          styleName: "dropdown"
        }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_5_classnames___default("dropdownItem", (!userInfo || userInfo.isNewUser || courseListVisible) && "disabled"),
          onClick: this.handleShowCourse
        }, "入门教程"), __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
          styleName: "dropdownItem",
          onClick: this.handleDocument
        }, "帮助文档")),
        onVisibleChange: this.handleHelpDropdownVisibleChange,
        visible: helpDropdownVisible,
        trigger: ["click"]
      }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: "icon-help"
      }), __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: "icon-dropdown-down",
        styleName: "iconDown"
      })))), __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
        styleName: "iconItem",
        onClick: this.handleFeedback
      }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: "icon-feedback"
      }))), this.renderUserInfo(userInfo));
    }
  }]);
  return HeaderView;
}(__WEBPACK_IMPORTED_MODULE_1_react__.Component);
HeaderView = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules__(styles, {
  allowMultiple: true
})], HeaderView);

/***/