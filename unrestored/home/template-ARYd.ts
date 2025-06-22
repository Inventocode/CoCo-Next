"use strict";

/* harmony export (binding) */
export { SignInDialogView };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ from "@babel/runtime/regenerator";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__ from "./crc/catui2/dist/components/application/sign/in/dialog-oqxr";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__crc_catui2_dist_cfg__ from "./crc/catui2/dist/cfg-OT5r";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__crc_catui2_dist_themes_violet_index_css__ from "./crc/catui2/dist/themes/violet/index/css-ASuZ";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__crc_catui2_dist_themes_violet_index_css___default from "./crc/catui2/dist/themes/violet/index/css-ASuZ";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__crc_catui2_dist_themes__ from "./crc/catui2/dist/themes/index-P22Q";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6_react_css_modules__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_6_react_css_modules___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__cfg__ from "./cfg-dpNx";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__sensorsData__ from "./sensorsData-yI2H";
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
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

// import '@crc/catui2/dist/components/application/sign-in-dialog/style_module.css';

var styles = require("./unnamed-xr0F");
function detectCatLanguage(language) {
  switch (language) {
    case 'zh':
    case 'zh-CN':
      return 'zh';
    case 'tw':
    case 'zh-TW':
      return 'tw';
    case 'en':
    case 'en-US':
      return 'en';
    default:
      return 'en';
  }
}
function detectCatEnv() {
  switch (Object(__WEBPACK_IMPORTED_MODULE_7__cfg__.config)().env) {
    case 'dev':
      return 'development';
    case 'test':
      return 'test';
    case 'staging':
      return 'staging';
    case 'prod':
      return 'production';
    default:
      return 'development';
  }
}
var SignInDialogView = function (_React$Component) {
  _inherits(SignInDialogView, _React$Component);
  function SignInDialogView(props) {
    _classCallCheck(this, SignInDialogView);
    var _this = _possibleConstructorReturn(this, (SignInDialogView.__proto__ || Object.getPrototypeOf(SignInDialogView)).call(this, props));
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleLoginSuccess = _this.handleLoginSuccess.bind(_this);
    return _this;
  }
  _createClass(SignInDialogView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      Object(__WEBPACK_IMPORTED_MODULE_3__crc_catui2_dist_cfg__.setEnv)(detectCatEnv());
      Object(__WEBPACK_IMPORTED_MODULE_5__crc_catui2_dist_themes__.setTheme)(__WEBPACK_IMPORTED_MODULE_5__crc_catui2_dist_themes__.ThemeTypeEnum.Violet);
      var auth = Object(__WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__.getAuthModule)();
      auth.init().then(function () {
        // COCO登录
        auth.initIris(Object(__WEBPACK_IMPORTED_MODULE_7__cfg__.config)().pid, 'appcraft');
        _this2.fetchUserInfo(false, '');
      });
    }
  }, {
    key: "fetchUserInfo",
    value: function fetchUserInfo() {
      var closeDialogFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var loginMethod = arguments[1];
      return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee() {
        var auth, response, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (closeDialogFirst) {
                  this.props.setSignDialogVisibleAction(false);
                }
                auth = Object(__WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__.getAuthModule)();
                _context.prev = 2;
                _context.next = 5;
                return auth.checkAuthLogin();
              case 5:
                response = _context.sent;
                if (!response) {
                  _context.next = 14;
                  break;
                }
                data = response.data;
                this.props.asyncSetUserInfoAction({
                  id: data.id,
                  name: data.nickname,
                  avatar: data.avatar_url
                });
                // 神策用户关联
                Object(__WEBPACK_IMPORTED_MODULE_8__sensorsData__.sensorsLoginReport)(data.id);
                if (loginMethod) {
                  Object(__WEBPACK_IMPORTED_MODULE_8__sensorsData__.sensorsCustomReport)('LoginResult', {
                    loginMethod: loginMethod,
                    isSuccess: true,
                    isRegister: !closeDialogFirst,
                    failReason: ''
                  });
                }
                return _context.abrupt("return", true);
              case 14:
                this.props.asyncSetUserInfoAction(null);
                if (loginMethod) {
                  Object(__WEBPACK_IMPORTED_MODULE_8__sensorsData__.sensorsCustomReport)('LoginResult', {
                    loginMethod: loginMethod,
                    isSuccess: false,
                    isRegister: !closeDialogFirst,
                    failReason: ''
                  });
                }
              case 16:
                _context.next = 22;
                break;
              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](2);

                // console.error('fetchUserInfo ', error);
                this.props.setUserInfoFetchDoneAction();
                if (loginMethod) {
                  Object(__WEBPACK_IMPORTED_MODULE_8__sensorsData__.sensorsCustomReport)('LoginResult', {
                    loginMethod: loginMethod,
                    isSuccess: false,
                    isRegister: !closeDialogFirst,
                    failReason: _context.t0.message
                  });
                }
              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 18]]);
      }));
    }
  }, {
    key: "handleLoginSuccess",
    value: function handleLoginSuccess(closeDialogFirst, loginMethod) {
      this.fetchUserInfo(closeDialogFirst, loginMethod);
    }
  }, {
    key: "handleLoginFailure",
    value: function handleLoginFailure(loginResult) {
      if (loginResult) {
        Object(__WEBPACK_IMPORTED_MODULE_8__sensorsData__.sensorsCustomReport)('LoginResult', {
          loginMethod: loginResult.source || '',
          isSuccess: false,
          isRegister: loginResult.source === 'register',
          failReason: loginResult.error.msg || ''
        });
      }
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.props.setSignDialogVisibleAction(false);
    }
  }, {
    key: "render",
    value: function render() {
      var signDialogVisible = this.props.signDialogVisible;
      if (!signDialogVisible) {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__.SignInDialog, {
        language: detectCatLanguage('zh'),
        show: true,
        onCloseAnimationEnd: this.handleClose,
        onSmsLoginSuccess: this.handleLoginSuccess.bind(null, true, 'sms-login'),
        onPasswordLoginSuccess: this.handleLoginSuccess.bind(null, true, 'pwd-login'),
        onThirdPartyLoginSuccess: this.handleLoginSuccess.bind(null, true, 'third-login'),
        onRegisterSuccess: this.handleLoginSuccess.bind(null, false, 'pwd-login'),
        onPasswordLoginFailure: this.handleLoginFailure,
        onSmsLoginFailure: this.handleLoginFailure,
        onThirdPartyLoginFailure: this.handleLoginFailure,
        onRegisterFailure: this.handleLoginFailure,
        onRegisterConfirm: this.handleClose,
        centerShowUp: true
      });
    }
  }]);
  return SignInDialogView;
}(__WEBPACK_IMPORTED_MODULE_1_react__.Component);
SignInDialogView = __decorate([__WEBPACK_IMPORTED_MODULE_6_react_css_modules__(styles, {
  allowMultiple: true
})], SignInDialogView);

/***/