/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：ARYd__part-1
 */

"use strict"

/* harmony export (binding) */
import { _createClass, _classCallCheck, _possibleConstructorReturn, _inherits, __decorate, __awaiter } from "./template-ARYd__part-0"
import * as __WEBPACK_IMPORTED_MODULE_7__api_login__ from "./api/login-yshM"
import * as __WEBPACK_IMPORTED_MODULE_6__sensorsData__ from "../sensorsData-yI2H"
import * as __WEBPACK_IMPORTED_MODULE_5__cfg__ from "../cfg-dpNx"
import __WEBPACK_IMPORTED_MODULE_4_classnames___default from "classnames"
import * as __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ from "react-css-modules"
import * as __WEBPACK_IMPORTED_MODULE_2_react__ from "react"
import * as __WEBPACK_IMPORTED_MODULE_1__crc_iframe_api__ from "./crc/iframe/api-JrJq"
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator"
import * as styles from "./styles-xr0F"
function getLanguage(language) {
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
function getCurrentEnvironment() {
  switch (__WEBPACK_IMPORTED_MODULE_5__cfg__.config().env) {
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
    _this._iframeRef = __WEBPACK_IMPORTED_MODULE_2_react__.createRef()
    _this._api = undefined
    _this.state = {
      iframeReady: false
    }
    _this.handleLoginSuccess = _this.handleLoginSuccess.bind(_this)
    return _this
  }
  _createClass(SignInDialogView, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this
        this.fetchUserInfo(false, "")
        this._api = __WEBPACK_IMPORTED_MODULE_1__crc_iframe_api__.createCodemaoLoginIframeApi({
          onEvent: function onEvent(payload) {
          // console.log('收到事件:', payload);
            switch (payload.event) {
              case "IFRAME_READY":
                _this2.setState({
                  iframeReady: true
                })
                if (_this2.timer) {
                  clearTimeout(_this2.timer)
                }
                break
              case "PASSWORD_LOGIN_SUCCESS":
                _this2.handleLoginSuccess("pwd-login")
                break
              case "PASSWORD_LOGIN_FAILURE":
                _this2.handleLoginFailure(payload.value)
                break
              case "SMS_LOGIN_SUCCESS":
                _this2.handleLoginSuccess("sms-login")
                break
              case "SMS_LOGIN_FAILURE":
                _this2.handleLoginFailure(payload.value)
                break
              case "THIRD_PARTY_LOGIN_SUCCESS":
                _this2.handleLoginSuccess("third-login")
                break
              case "THIRD_PARTY_LOGIN_FAILURE":
                _this2.handleLoginFailure(payload.value)
                break
              case "REGISTER_SUCCESS":
                _this2.handleLoginSuccess("pwd-login")
                break
              case "REGISTER_FAILURE":
                _this2.handleLoginFailure(payload.value)
                break
              case "REGISTER_CONFIRM":
              // console.log('注册确认');
                break
              case "BIND_PHONE_SUCCESS":
              // console.log(`绑定手机成功: ${payload.value}`);
                break
              case "CLOSE_ANIMATION_END":
                _this2.props.setSignDialogVisibleAction(false)
                _this2.setState({
                  iframeReady: false
                })
                break
              case "REPORT":
                break
              default:
                console.info("未知事件:", payload)
            }
          }
        }, {
          getWindow: function getWindow() {
            return _this2._iframeRef.current ? _this2._iframeRef.current.contentWindow : window
          }
        })
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var _this3 = this
        var _props = this.props
        var signDialogVisible = _props.signDialogVisible
        var setSignDialogVisibleAction = _props.setSignDialogVisibleAction
        var setCommonToastAction = _props.setCommonToastAction
        if (signDialogVisible && !this.state.iframeReady) {
          this.timer = setTimeout(function () {
            setSignDialogVisibleAction(false)
            setCommonToastAction({
              visible: true,
              type: "error",
              message: "登录页面加载失败，请稍后重试!"
            })
            _this3.setState({
              iframeReady: false
            })
          }, 5000)
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this._api) {
          this._api.dispose()
        }
      }
    }, {
      key: "fetchUserInfo",
      value: function fetchUserInfo() {
        var closeDialogFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true
        var loginMethod = arguments[1]
        return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee() {
          var data
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (closeDialogFirst) {
                    this.props.setSignDialogVisibleAction(false)
                    this.setState({
                      iframeReady: false
                    })
                  }
                  _context.prev = 1
                  _context.next = 4
                  return __WEBPACK_IMPORTED_MODULE_7__api_login__.getAccountProfile()
                case 4:
                  data = _context.sent
                  if (!data.id) {
                    _context.next = 12
                    break
                  }
                  this.props.asyncSetUserInfoAction({
                    id: data.id,
                    name: data.nickname,
                    avatar: data.avatar_url
                  })
                  // 神策用户关联
                  __WEBPACK_IMPORTED_MODULE_6__sensorsData__.sensorsLoginReport(data.id)
                  if (loginMethod) {
                    __WEBPACK_IMPORTED_MODULE_6__sensorsData__.sensorsCustomReport("LoginResult", {
                      loginMethod: loginMethod,
                      isSuccess: true,
                      isRegister: !closeDialogFirst,
                      failReason: ""
                    })
                  }
                  return _context.abrupt("return", true)
                case 12:
                  this.props.asyncSetUserInfoAction(null)
                  if (loginMethod) {
                    __WEBPACK_IMPORTED_MODULE_6__sensorsData__.sensorsCustomReport("LoginResult", {
                      loginMethod: loginMethod,
                      isSuccess: false,
                      isRegister: !closeDialogFirst,
                      failReason: ""
                    })
                  }
                case 14:
                  _context.next = 20
                  break
                case 16:
                  _context.prev = 16
                  _context.t0 = _context["catch"](1)

                  // console.error('fetchUserInfo ', error);
                  this.props.setUserInfoFetchDoneAction()
                  if (loginMethod) {
                    __WEBPACK_IMPORTED_MODULE_6__sensorsData__.sensorsCustomReport("LoginResult", {
                      loginMethod: loginMethod,
                      isSuccess: false,
                      isRegister: !closeDialogFirst,
                      failReason: _context.t0.message
                    })
                  }
                case 20:
                case "end":
                  return _context.stop()
              }
            }
          }, _callee, this, [[1, 16]])
        }))
      }
    }, {
      key: "handleLoginSuccess",
      value: function handleLoginSuccess(loginMethod) {
        this.fetchUserInfo(true, loginMethod)
      }
    }, {
      key: "handleLoginFailure",
      value: function handleLoginFailure(loginResult) {
        if (loginResult) {
          __WEBPACK_IMPORTED_MODULE_6__sensorsData__.sensorsCustomReport("LoginResult", {
            loginMethod: loginResult.source || "",
            isSuccess: false,
            isRegister: loginResult.source === "register",
            failReason: loginResult.error.msg || ""
          })
        }
      }
    }, {
      key: "render",
      value: function render() {
        var signDialogVisible = this.props.signDialogVisible
        var iframeUrl = __WEBPACK_IMPORTED_MODULE_1__crc_iframe_api__.getCodemaoLoginIframeUrl({
          env: getCurrentEnvironment(),
          language: getLanguage("zh"),
          onlyLogin: false,
          disableThirdParty: false,
          ageLimit: false,
          theme: "violet",
          pageView: "login",
          pid: __WEBPACK_IMPORTED_MODULE_5__cfg__.config().pid,
          productCode: __WEBPACK_IMPORTED_MODULE_5__cfg__.config().productCode
        })
        return signDialogVisible ? __WEBPACK_IMPORTED_MODULE_2_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_4_classnames___default("wrapper", this.state.iframeReady && "ready")
        }, __WEBPACK_IMPORTED_MODULE_2_react__.createElement("iframe", {
          allow: "autoplay; fullscreen; clipboard-read; clipboard-write; encrypted-media; microphone; geolocation; camera",
          ref: this._iframeRef,
          src: iframeUrl,
          style: {
            border: "none",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: this.state.iframeReady ? "block" : "none"
          },
          title: "codemao-login iframe"
        })) : null
      }
    }
  ])
  return SignInDialogView
}(__WEBPACK_IMPORTED_MODULE_2_react__.Component)
SignInDialogView = __decorate([
  __WEBPACK_IMPORTED_MODULE_3_react_css_modules__(styles, {
    allowMultiple: true
  })
], SignInDialogView)

/***/
export { SignInDialogView }
