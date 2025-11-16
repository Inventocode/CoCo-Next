/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：ARYd__part-1
 */

"use strict"

/* harmony export (binding) */
import { "ARYd__part-0___createClass" as _createClass, "ARYd__part-0___classCallCheck" as _classCallCheck, "ARYd__part-0___possibleConstructorReturn" as _possibleConstructorReturn, "ARYd__part-0___inherits" as _inherits, "ARYd__part-0____decorate" as __decorate, "ARYd__part-0____awaiter" as __awaiter } from "./template-ARYd__part-0"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__sensorsData__ from "../sensorsData-yI2H"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__cfg__ from "../cfg-dpNx"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6_react_css_modules__ from "react-css-modules"
/* harmony import */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__crc_catui2_dist_themes__ from "./crc/catui2/dist/themes-P22Q"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__crc_catui2_dist_cfg__ from "./crc/catui2/dist/cfg-OT5r"
/* harmony import */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__ from "./crc/catui2/dist/components/application/sign/in/dialog-oqxr"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react"
/* harmony import */
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator"
// import '@crc/catui2/dist/components/application/sign-in-dialog/style_module.css';
import * as styles from "./styles-xr0F"
function detectCatLanguage(language) {
  switch (language) {
    case "zh":
    case "zh-CN":
      return "zh"
    case "tw":
    case "zh-TW":
      return "tw"
    case "en":
    case "en-US":
      return "en"
    default:
      return "en"
  }
}
function detectCatEnv() {
  switch (__WEBPACK_IMPORTED_MODULE_7__cfg__.config().env) {
    case "dev":
      return "development"
    case "test":
      return "test"
    case "staging":
      return "staging"
    case "prod":
      return "production"
    default:
      return "development"
  }
}
var SignInDialogView = function (_React$Component) {
  _inherits(SignInDialogView, _React$Component)
  function SignInDialogView(props) {
    _classCallCheck(this, SignInDialogView)
    var _this = _possibleConstructorReturn(this, (SignInDialogView.__proto__ || Object.getPrototypeOf(SignInDialogView)).call(this, props))
    _this.handleClose = _this.handleClose.bind(_this)
    _this.handleLoginSuccess = _this.handleLoginSuccess.bind(_this)
    return _this
  }
  _createClass(SignInDialogView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this
      __WEBPACK_IMPORTED_MODULE_3__crc_catui2_dist_cfg__.setEnv(detectCatEnv())
      __WEBPACK_IMPORTED_MODULE_5__crc_catui2_dist_themes__.setTheme(__WEBPACK_IMPORTED_MODULE_5__crc_catui2_dist_themes__.ThemeTypeEnum.Violet)
      var auth = __WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__.getAuthModule()
      auth.init().then(function () {
        // COCO登录
        auth.initIris(__WEBPACK_IMPORTED_MODULE_7__cfg__.config().pid, "appcraft")
        _this2.fetchUserInfo(false, "")
      })
    }
  }, {
    key: "fetchUserInfo",
    value: function fetchUserInfo() {
      var closeDialogFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true
      var loginMethod = arguments[1]
      return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee() {
        var auth
        var response
        var data
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (closeDialogFirst) {
                  this.props.setSignDialogVisibleAction(false)
                }
                auth = __WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__.getAuthModule()
                _context.prev = 2
                _context.next = 5
                return auth.checkAuthLogin()
              case 5:
                response = _context.sent
                if (!response) {
                  _context.next = 14
                  break
                }
                data = response.data
                this.props.asyncSetUserInfoAction({
                  id: data.id,
                  name: data.nickname,
                  avatar: data.avatar_url
                })
                // 神策用户关联
                __WEBPACK_IMPORTED_MODULE_8__sensorsData__.sensorsLoginReport(data.id)
                if (loginMethod) {
                  __WEBPACK_IMPORTED_MODULE_8__sensorsData__.sensorsCustomReport("LoginResult", {
                    loginMethod: loginMethod,
                    isSuccess: true,
                    isRegister: !closeDialogFirst,
                    failReason: ""
                  })
                }
                return _context.abrupt("return", true)
              case 14:
                this.props.asyncSetUserInfoAction(null)
                if (loginMethod) {
                  __WEBPACK_IMPORTED_MODULE_8__sensorsData__.sensorsCustomReport("LoginResult", {
                    loginMethod: loginMethod,
                    isSuccess: false,
                    isRegister: !closeDialogFirst,
                    failReason: ""
                  })
                }
              case 16:
                _context.next = 22
                break
              case 18:
                _context.prev = 18
                _context.t0 = _context["catch"](2)

                // console.error('fetchUserInfo ', error);
                this.props.setUserInfoFetchDoneAction()
                if (loginMethod) {
                  __WEBPACK_IMPORTED_MODULE_8__sensorsData__.sensorsCustomReport("LoginResult", {
                    loginMethod: loginMethod,
                    isSuccess: false,
                    isRegister: !closeDialogFirst,
                    failReason: _context.t0.message
                  })
                }
              case 22:
              case "end":
                return _context.stop()
            }
          }
        }, _callee, this, [[2, 18]])
      }))
    }
  }, {
    key: "handleLoginSuccess",
    value: function handleLoginSuccess(closeDialogFirst, loginMethod) {
      this.fetchUserInfo(closeDialogFirst, loginMethod)
    }
  }, {
    key: "handleLoginFailure",
    value: function handleLoginFailure(loginResult) {
      if (loginResult) {
        __WEBPACK_IMPORTED_MODULE_8__sensorsData__.sensorsCustomReport("LoginResult", {
          loginMethod: loginResult.source || "",
          isSuccess: false,
          isRegister: loginResult.source === "register",
          failReason: loginResult.error.msg || ""
        })
      }
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.props.setSignDialogVisibleAction(false)
    }
  }, {
    key: "render",
    value: function render() {
      var signDialogVisible = this.props.signDialogVisible
      if (!signDialogVisible) {
        return null
      }
      return __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__.SignInDialog, {
        language: detectCatLanguage("zh"),
        show: true,
        onCloseAnimationEnd: this.handleClose,
        onSmsLoginSuccess: this.handleLoginSuccess.bind(null, true, "sms-login"),
        onPasswordLoginSuccess: this.handleLoginSuccess.bind(null, true, "pwd-login"),
        onThirdPartyLoginSuccess: this.handleLoginSuccess.bind(null, true, "third-login"),
        onRegisterSuccess: this.handleLoginSuccess.bind(null, false, "pwd-login"),
        onPasswordLoginFailure: this.handleLoginFailure,
        onSmsLoginFailure: this.handleLoginFailure,
        onThirdPartyLoginFailure: this.handleLoginFailure,
        onRegisterFailure: this.handleLoginFailure,
        onRegisterConfirm: this.handleClose,
        centerShowUp: true
      })
    }
  }])
  return SignInDialogView
}(__WEBPACK_IMPORTED_MODULE_1_react__.Component)
SignInDialogView = __decorate([__WEBPACK_IMPORTED_MODULE_6_react_css_modules__(styles, {
  allowMultiple: true
})], SignInDialogView)

/***/
export { SignInDialogView as "ARYd__part-1__SignInDialogView" }
