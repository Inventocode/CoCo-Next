/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：0bWe
 */

"use strict";

/* harmony export (immutable) */
/* harmony export (immutable) */
export { handleLoginByPassword };
/* harmony export (immutable) */
export { handleLoginBySms };
/* harmony export (immutable) */
export { handleSendSmsCode };
/* harmony export (immutable) */
export { handleRegister };
/* harmony export (immutable) */
export { handleResetPwdToken };
/* harmony export (immutable) */
export { handleResetPwd };
/* harmony import */
export { handleBindPhone };
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator__ from "@babel/runtime/regenerator";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default from "@babel/runtime/regenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__iris__ from "./iris-dh8G";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__def__ from "./def-5NKK";
function handleLoginByPassword(_x) {
  return _handleLoginByPassword.apply(this, arguments);
}
function _handleLoginByPassword() {
  _handleLoginByPassword = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee2(param) {
    var username;
    var password;
    var getCaptchaFallback;
    var e;
    var ticket;
    var _yield$getAuthModule$;
    var data;
    var _data$user_info;
    var nickname;
    var id;
    var avatarUrl;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            username = param.username;
            password = param.password;
            getCaptchaFallback = param.getCaptchaFallback;
            _context2.next = 4;
            return new Promise(function (resolve) {
              try {
                __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getCaptcha(username, "", true, /*#__PURE__*/function () {
                  var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee(ticket) {
                    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", resolve(ticket));
                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  return function (_x10) {
                    return _ref.apply(this, arguments);
                  };
                }(), getCaptchaFallback, getCaptchaFallback);
              } catch (err) {
                e = __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getErrorMsgType(err);
                resolve("");
              }
            });
          case 4:
            ticket = _context2.sent;
            if (ticket) {
              _context2.next = 7;
              break;
            }
            throw e;
          case 7:
            _context2.next = 9;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAuth().login_account_ticket(username, password, __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getPid(), ticket);
          case 9:
            _yield$getAuthModule$ = _context2.sent;
            data = _yield$getAuthModule$.data;
            _data$user_info = data.user_info;
            nickname = _data$user_info.nickname;
            id = _data$user_info.id;
            avatarUrl = _data$user_info.avatar_url;
            return _context2.abrupt("return", {
              isSuccess: true,
              authInfo: {
                nickname: nickname,
                userId: id.toString(),
                avatar: avatarUrl,
                authType: __WEBPACK_IMPORTED_MODULE_3__def__.AuthType.CODEMAO
              }
            });
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", {
              isSuccess: false,
              error: __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getErrorMsgType(_context2.t0)
            });
          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));
  return _handleLoginByPassword.apply(this, arguments);
}
function handleLoginBySms(_x2) {
  return _handleLoginBySms.apply(this, arguments);
}
function _handleLoginBySms() {
  _handleLoginBySms = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee3(param) {
    var phone;
    var code;
    var _yield$getAuthModule$2;
    var data;
    var _data$user_info2;
    var nickname;
    var id;
    var avatarUrl;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            phone = param.phone;
            code = param.code;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAuth().login_phone(phone, code);
          case 4:
            _yield$getAuthModule$2 = _context3.sent;
            data = _yield$getAuthModule$2.data;
            _data$user_info2 = data.user_info;
            nickname = _data$user_info2.nickname;
            id = _data$user_info2.id;
            avatarUrl = _data$user_info2.avatar_url;
            return _context3.abrupt("return", {
              isSuccess: true,
              authInfo: {
                nickname: nickname,
                userId: id.toString(),
                avatar: avatarUrl,
                authType: __WEBPACK_IMPORTED_MODULE_3__def__.AuthType.CODEMAO
              }
            });
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", {
              isSuccess: false,
              error: __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getErrorMsgType(_context3.t0)
            });
          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return _handleLoginBySms.apply(this, arguments);
}
function handleSendSmsCode(_x3, _x4, _x5) {
  return _handleSendSmsCode.apply(this, arguments);
}
function _handleSendSmsCode() {
  _handleSendSmsCode = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee4(phone, type, getCaptchaFallback) {
    var pid;
    var e;
    var ticket;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            pid = __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getPid();
            _context4.next = 3;
            return new Promise(function (resolve) {
              try {
                __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getCaptcha(phone, "", true, function (ticket) {
                  return resolve(ticket);
                }, getCaptchaFallback, getCaptchaFallback);
              } catch (err) {
                e = __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getErrorMsgType(err);
                resolve("");
              }
            });
          case 3:
            ticket = _context4.sent;
            if (ticket) {
              _context4.next = 6;
              break;
            }
            return _context4.abrupt("return", e);
          case 6:
            _context4.prev = 6;
            if (!(type === "login")) {
              _context4.next = 10;
              break;
            }
            _context4.next = 10;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAuth().login_captcha(phone, ticket, pid);
          case 10:
            if (!(type === "register")) {
              _context4.next = 13;
              break;
            }
            _context4.next = 13;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAuth().register_send_captcha(phone, ticket, pid);
          case 13:
            if (!(type === "reset")) {
              _context4.next = 16;
              break;
            }
            _context4.next = 16;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAuth().reset_pwd_captcha(phone, ticket, pid);
          case 16:
            if (!(type === "phoneBind")) {
              _context4.next = 19;
              break;
            }
            _context4.next = 19;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAuth().bind_phone_captcha(phone, ticket, pid);
          case 19:
            _context4.next = 24;
            break;
          case 21:
            _context4.prev = 21;
            _context4.t0 = _context4["catch"](6);
            return _context4.abrupt("return", __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getErrorMsgType(_context4.t0));
          case 24:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[6, 21]]);
  }));
  return _handleSendSmsCode.apply(this, arguments);
}
function handleRegister(_x6) {
  return _handleRegister.apply(this, arguments);
}
function _handleRegister() {
  _handleRegister = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee5(param) {
    var phone;
    var password;
    var code;
    var agreementIds;
    var _yield$getAuthModule$3;
    var data;
    var _data$user_info3;
    var nickname;
    var id;
    var avatarUrl;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            phone = param.phone;
            password = param.password;
            code = param.code;
            _context5.prev = 1;
            _context5.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAgreements();
          case 4:
            agreementIds = _context5.sent;
            if (!(!agreementIds || agreementIds.length === 0)) {
              _context5.next = 7;
              break;
            }
            return _context5.abrupt("return", {
              isSuccess: false,
              error: __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getErrorMsgType("sign_in_dialog/error/other/network")
            });
          case 7:
            _context5.next = 9;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAuth().register({
              phone_number: phone,
              password: password,
              captcha: code,
              agreement_ids: agreementIds
            });
          case 9:
            _yield$getAuthModule$3 = _context5.sent;
            data = _yield$getAuthModule$3.data;
            _data$user_info3 = data.user_info;
            nickname = _data$user_info3.nickname;
            id = _data$user_info3.id;
            avatarUrl = _data$user_info3.avatar_url;
            return _context5.abrupt("return", {
              isSuccess: true,
              authInfo: {
                nickname: nickname,
                userId: id.toString(),
                avatar: avatarUrl,
                authType: __WEBPACK_IMPORTED_MODULE_3__def__.AuthType.CODEMAO
              }
            });
          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](1);
            return _context5.abrupt("return", {
              isSuccess: false,
              error: __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getErrorMsgType(_context5.t0)
            });
          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 15]]);
  }));
  return _handleRegister.apply(this, arguments);
}
function handleResetPwdToken(_x7) {
  return _handleResetPwdToken.apply(this, arguments);
}
function _handleResetPwdToken() {
  _handleResetPwdToken = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee6(param) {
    var phone;
    var code;
    var _yield$getAuthModule$4;
    var data;
    var ticket;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            phone = param.phone;
            code = param.code;
            _context6.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAuth().reset_pwd_token(phone, code);
          case 4:
            _yield$getAuthModule$4 = _context6.sent;
            data = _yield$getAuthModule$4.data;
            ticket = data.ticket;
            return _context6.abrupt("return", ticket);
          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getErrorMsgType(_context6.t0));
          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return _handleResetPwdToken.apply(this, arguments);
}
function handleResetPwd(_x8) {
  return _handleResetPwd.apply(this, arguments);
}
function _handleResetPwd() {
  _handleResetPwd = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee7(param) {
    var password;
    var passwordConfirm;
    var ticket;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            password = param.password;
            passwordConfirm = param.passwordConfirm;
            ticket = param.ticket;
            _context7.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAuth().reset_pwd(ticket, password, passwordConfirm);
          case 4:
            return _context7.abrupt("return", {
              isSuccess: true
            });
          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", {
              isSuccess: false,
              error: __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getErrorMsgType(_context7.t0)
            });
          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return _handleResetPwd.apply(this, arguments);
}
function handleBindPhone(_x9) {
  return _handleBindPhone.apply(this, arguments);
}
function _handleBindPhone() {
  _handleBindPhone = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee8(param) {
    var phone;
    var code;
    var result;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            phone = param.phone;
            code = param.code;
            _context8.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getAuth().bind_phone(phone, code);
          case 4:
            result = _context8.sent;
            return _context8.abrupt("return", result.statusText);
          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            return _context8.abrupt("return", __WEBPACK_IMPORTED_MODULE_2__iris__.getAuthModule().getErrorMsgType(_context8.t0));
          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return _handleBindPhone.apply(this, arguments);
}

/***/