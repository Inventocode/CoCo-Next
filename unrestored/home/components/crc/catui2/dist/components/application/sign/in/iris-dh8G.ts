/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：dh8G
 */

"use strict"

/* unused harmony export NOT_LOGIN_MSG */
/* unused harmony export NETWORK_ERROR_MSG */
/* harmony export (immutable) */
/* harmony import */
export { getAuthModule }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_classCallCheck__ from "@babel/runtime/helpers/esm/classCallCheck"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_createClass__ from "@babel/runtime/helpers/esm/createClass"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_defineProperty__ from "@babel/runtime/helpers/esm/defineProperty"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator__ from "@babel/runtime/regenerator"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default from "@babel/runtime/regenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__i18n__ from "./i18n-FsOf"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__cfg__ from "../../../../cfg-OT5r"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__def__ from "./def-5NKK"
var NOT_LOGIN_MSG = "NOT_LOGIN"
var NETWORK_ERROR_MSG = "NETWORK_ERROR"
var authModule
var AuthModule = /*#__PURE__*/function () {
  function AuthModule() {
    var _this = this
    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_classCallCheck__.default(this, AuthModule)
    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_defineProperty__.default(this, "iris", undefined)
    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_defineProperty__.default(this, "codemaoAuth", undefined)
    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_defineProperty__.default(this, "codemaoCaptcha", undefined)
    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_defineProperty__.default(this, "pid", "")
    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_defineProperty__.default(this, "getCaptcha", /*#__PURE__*/function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.mark(function _callee(identity, domId, show, successCallback, failCallback, closeCallback) {
        var captcha
        return __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.codemaoCaptcha) {
                  _context.next = 2
                  break
                }
                throw Error("codemaoCaptcha is not initialized.")
              case 2:
                _context.next = 4
                return _this.codemaoCaptcha.get_captcha({
                  identity: identity,
                  dom_id: domId,
                  success_callback: successCallback,
                  fail_callback: failCallback,
                  close_callback: closeCallback,
                  init_options: {
                    product: "bind",
                    // 隐藏式按钮，直接弹出滑动验证
                    https: true // 必须设置https为true，否则极验会使用页面协议。(Kitten客户端协议名为'chrome-extension://')
                  }
                })
              case 4:
                captcha = _context.sent
                if (captcha) {
                  _context.next = 7
                  break
                }
                throw Error()
              case 7:
                _context.next = 9
                return captcha.init()
              case 9:
                if (show) {
                  captcha.show()
                }
                return _context.abrupt("return", captcha)
              case 11:
              case "end":
                return _context.stop()
            }
          }
        }, _callee)
      }))
      return function (_x, _x2, _x3, _x4, _x5, _x6) {
        return _ref.apply(this, arguments)
      }
    }())
    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_defineProperty__.default(this, "getErrorMsgType", function (error) {
      if (!_this.iris) {
        throw Error("Iris is not initialized.")
      }
      var errorCode = error.error_code
      var message = error.message
      var ERROR = _this.iris.ERROR
      console.error(Error("@frontend/iris API error code: ".concat(errorCode, "\n").concat(message)))
      var msg
      switch (errorCode) {
        case ERROR.PWD_IS_NOT_EQUAL_TO_CONFIRMED_PWD:
          msg = "sign_in_dialog/error/password_confirm/not_same"
          break
        case ERROR.PHONE_UNREGISTERED:
          msg = "sign_in_dialog/error/phone/unregisterd"
          break
        case ERROR.INVALID_PHONE_NUMBER:
          msg = "sign_in_dialog/error/phone/format"
          break
        case ERROR.INVALID_PASSWORD:
          msg = "sign_in_dialog/error/password/format"
          break
        case ERROR.USER_NOT_EXIST:
        case ERROR.USER_NOT_EXIST_OR_PWD_WRONG:
          msg = "sign_in_dialog/error/other/acc_or_pwd"
          break
        case ERROR.INVALID_CAPTCHA:
        case ERROR.VERIFY_CAPTCHA_FAIL:
          msg = "sign_in_dialog/error/sms_code/fail"
          break
        case ERROR.SEND_CAPTCHA_TOO_FRUQUENTLY:
          msg = "sign_in_dialog/error/sms_code/frequent_resend"
          break
        case ERROR.PHONE_REGISTERED:
        case ERROR.PHONE_BOUND_BY_OTHER_ACCOUNT:
          msg = "sign_in_dialog/phone_bound_by_other_account"
          break
        default:
          msg = "sign_in_dialog/error/other/network"
          break
      }
      return {
        msg: __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage(msg),
        type: _this.getErrorTypeByMsg(msg)
      }
    })
  }
  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_createClass__.default(AuthModule, [{
    key: "init",
    value: function () {
      var _init = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.mark(function _callee2() {
        var module
        return __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2
                return import("./unnamed-v9Ep")
              case 2:
                module = _context2.sent
                this.iris = module
              case 4:
              case "end":
                return _context2.stop()
            }
          }
        }, _callee2, this)
      }))
      function init() {
        return _init.apply(this, arguments)
      }
      return init
    }()
    /**
      * 初始化账号SDK
      * @param env 环境
      * @param pid 项目的pid
      * @param productCode 业务的productCode 比如kitten, wood, coco等
      * @param platfrom 业务的平台 'web'|'h5'
      * @param isInt 是否海外版 boolean
      */
  }, {
    key: "initIris",
    value: function initIris(pid, productCode) {
      var platform = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "web"
      var isInt = arguments.length > 3 ? arguments[3] : undefined
      if (!this.iris) {
        throw Error("Iris is not initialized.")
      }
      var env = __WEBPACK_IMPORTED_MODULE_6__cfg__.getConfig().irisEnv
      this.pid = pid
      this.iris.init({
        env: env,
        domain: env === "dev" ? "" : ".codemao.cn",
        // 本地调试时需要设置为空
        host: isInt ? __WEBPACK_IMPORTED_MODULE_6__cfg__.getConfig().iris.overseaHost : __WEBPACK_IMPORTED_MODULE_6__cfg__.getConfig().iris.host
      })
      this.codemaoAuth = this.iris.auth.init({
        pid: pid,
        product_code: productCode,
        platform: platform,
        appid: ""
      })
      this.codemaoCaptcha = new this.iris.captcha.CodemaoCaptcha({
        pid: pid
      })
    }
  }, {
    key: "getAuth",
    value:
    // 获取账号模块
    function getAuth() {
      if (!this.codemaoAuth) {
        throw Error("Iris is not initialized.")
      }
      return this.codemaoAuth
    }
  }, {
    key: "getPid",
    value: function getPid() {
      return this.pid
    }
    /**
     * 根据错误码，返回对应i18n信息
     * @param error Error
     */
  }, {
    key: "getErrorTypeByMsg",
    value: function getErrorTypeByMsg(errMsg) {
      var prefix = "sign_in_dialog/error/"
      return Object.values(__WEBPACK_IMPORTED_MODULE_7__def__.AuthErrorType).find(function (type) {
        return errMsg.startsWith("".concat(prefix).concat(type, "/"))
      }) || __WEBPACK_IMPORTED_MODULE_7__def__.AuthErrorType.OTHER
    }
  }, {
    key: "logout",
    value: function () {
      var _logout = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.getAuth().logout())
              case 1:
              case "end":
                return _context3.stop()
            }
          }
        }, _callee3, this)
      }))
      function logout() {
        return _logout.apply(this, arguments)
      }
      return logout
    }()
  }, {
    key: "getProfile",
    value: function () {
      var _getProfile = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.mark(function _callee4() {
        return __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.getAuth().get_profile())
              case 1:
              case "end":
                return _context4.stop()
            }
          }
        }, _callee4, this)
      }))
      function getProfile() {
        return _getProfile.apply(this, arguments)
      }
      return getProfile
    }()
  }, {
    key: "checkAuthLogin",
    value: function () {
      var _checkAuthLogin = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.mark(function _callee5() {
        var errorCode
        var message
        return __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.iris) {
                  _context5.next = 2
                  break
                }
                return _context5.abrupt("return")
              case 2:
                _context5.prev = 2
                _context5.next = 5
                return this.getAuth().get_profile()
              case 5:
                return _context5.abrupt("return", _context5.sent)
              case 8:
                _context5.prev = 8
                _context5.t0 = _context5["catch"](2)
                errorCode = _context5.t0.error_code
                message = _context5.t0.message
                if (!(errorCode === this.iris.ERROR.NO_TOKEN || errorCode === "E_0" || message === NOT_LOGIN_MSG)) {
                  _context5.next = 13
                  break
                }
                throw Error(NOT_LOGIN_MSG)
              case 13:
                throw Error(NETWORK_ERROR_MSG)
              case 14:
              case "end":
                return _context5.stop()
            }
          }
        }, _callee5, this, [[2, 8]])
      }))
      function checkAuthLogin() {
        return _checkAuthLogin.apply(this, arguments)
      }
      return checkAuthLogin
    }()
  }, {
    key: "getAgreements",
    value: function () {
      var _getAgreements = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.mark(function _callee6() {
        var agreementsData
        var idsData
        var agreementIds
        return __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.iris) {
                  _context6.next = 2
                  break
                }
                return _context6.abrupt("return")
              case 2:
                _context6.next = 4
                return this.iris.auth.get_auth_instance().get_agreements()
              case 4:
                agreementsData = _context6.sent
                idsData = agreementsData === null || agreementsData === undefined ? undefined : agreementsData.data
                agreementIds = []
                if (idsData && idsData instanceof Array) {
                  idsData.forEach(function (data) {
                    agreementIds.push(data.id)
                  })
                }
                return _context6.abrupt("return", agreementIds)
              case 9:
              case "end":
                return _context6.stop()
            }
          }
        }, _callee6, this)
      }))
      function getAgreements() {
        return _getAgreements.apply(this, arguments)
      }
      return getAgreements
    }()
  }])
  return AuthModule
}()
function getAuthModule() {
  if (!authModule) {
    authModule = new AuthModule()
  }
  return authModule
}

/***/
