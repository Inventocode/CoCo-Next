/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：ROpr
 */

"use strict";

/* unused harmony export ErrorCode */
/* unused harmony export setOverseaPid */
/* unused harmony export getOverseaPid */
/* unused harmony export getErrorMsgAndType */
/* unused harmony export checkAuthLogin */
/* harmony export (immutable) */
/* unused harmony export handleLogout */
/* harmony export (immutable) */
export { handleLoginByEmail };
/* harmony export (immutable) */
export { handleResetPwd };
/* harmony export (immutable) */
export { sendEmail };
/* harmony export (immutable) */
export { checkRegisterEmail };
/* harmony import */
export { register };
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator__ from "@babel/runtime/regenerator";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default from "@babel/runtime/regenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_axios__ from "axios";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_axios___default from "axios";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__cfg__ from "../../../../../../../../../../../../../../cfg-OT5r";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__sign_in_dialog_auth_iris__ from "../../../../../../../../../../iris-dh8G";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__i18n__ from "./i18n-K_kJ";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__def__ from "./def-qU3I"; // 此文件为账号相关API，仅供海外版使用
// 常规版、Edu版使用SDK (@frontend/iris)
var ErrorCode;
(function (ErrorCode) {
  ErrorCode["TICKET_ERROR"] = "GCAP_1";
  ErrorCode["NOT_EXIST_USER"] = "AC3_3";
  ErrorCode["SEND_FREQUENTLY"] = "AC3_23";
  ErrorCode["BLACK_LIST"] = "AC3_44";
  ErrorCode["SEND_LIMIT"] = "AC3_48";
  ErrorCode["CODE_CHECK_FAIL"] = "A_5";
  ErrorCode["CODE_CHECK_FAIL1"] = "AC3_13";
  ErrorCode["PASSWORD_ILLEGAL"] = "AC3_53";
  ErrorCode["PASSWORD_WEAK"] = "AC3_54";
  ErrorCode["EMAIL_REGISTER"] = "AC3_61";
  ErrorCode["EMAIL_ILLEGAL"] = "AC3_62";
  ErrorCode["PASSWORD_DIFFERENT"] = "AC3_10";
  ErrorCode["PASSWORD_OR_ACCOUNT_ERROR"] = "AC_0";
  ErrorCode["PASSWORD_OR_ACCOUNT_ERROR1"] = "AC_1";
  ErrorCode["PASSWORD_OR_ACCOUNT_ERROR2"] = "AC_45";
  ErrorCode["NETWORK_ERROR"] = "network_error";
})(ErrorCode || (ErrorCode = {}));
var overseaPid;
var setOverseaPid = function setOverseaPid(pid) {
  overseaPid = pid;
};
var getOverseaPid = function getOverseaPid() {
  return overseaPid;
};
var getErrorMsgAndType = function getErrorMsgAndType(errorCode) {
  var msg;
  var type = __WEBPACK_IMPORTED_MODULE_6__def__.AuthErrorType.OTHER;
  switch (errorCode) {
    case ErrorCode.PASSWORD_OR_ACCOUNT_ERROR:
    case ErrorCode.PASSWORD_OR_ACCOUNT_ERROR1:
    case ErrorCode.PASSWORD_OR_ACCOUNT_ERROR2:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/other/acc_or_pwd");
      break;
    case ErrorCode.TICKET_ERROR:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/other/network");
      break;
    case ErrorCode.EMAIL_REGISTER:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/email/exist");
      type = __WEBPACK_IMPORTED_MODULE_6__def__.AuthErrorType.EMAIL;
      break;
    case ErrorCode.BLACK_LIST:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/email/black_list");
      type = __WEBPACK_IMPORTED_MODULE_6__def__.AuthErrorType.EMAIL;
      break;
    case ErrorCode.SEND_FREQUENTLY:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/email/email_often");
      type = __WEBPACK_IMPORTED_MODULE_6__def__.AuthErrorType.CODE;
      break;
    case ErrorCode.SEND_LIMIT:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/email/send_exceed_limit");
      break;
    case ErrorCode.CODE_CHECK_FAIL:
    case ErrorCode.CODE_CHECK_FAIL1:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/sms_code/fail");
      type = __WEBPACK_IMPORTED_MODULE_6__def__.AuthErrorType.CODE;
      break;
    case ErrorCode.PASSWORD_DIFFERENT:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/password_confirm/not_same");
      break;
    case ErrorCode.NOT_EXIST_USER:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/email/not_exist");
      type = __WEBPACK_IMPORTED_MODULE_6__def__.AuthErrorType.EMAIL;
      break;
    case ErrorCode.PASSWORD_ILLEGAL:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/password/format");
      type = __WEBPACK_IMPORTED_MODULE_6__def__.AuthErrorType.PWD;
      break;
    case ErrorCode.PASSWORD_WEAK:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/password/simple");
      type = __WEBPACK_IMPORTED_MODULE_6__def__.AuthErrorType.PWD;
      break;
    case ErrorCode.EMAIL_ILLEGAL:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/email/format");
      type = __WEBPACK_IMPORTED_MODULE_6__def__.AuthErrorType.EMAIL;
      break;
    default:
      msg = __WEBPACK_IMPORTED_MODULE_5__i18n__.getLanguage("sign_in_dialog/error/other/network");
      break;
  }
  return {
    msg: msg,
    type: type
  };
};
function requestUserInfo() {
  return _requestUserInfo.apply(this, arguments);
}
function _requestUserInfo() {
  _requestUserInfo = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee3() {
    var url;
    var requestConfig;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "".concat(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig().iris.overseaHost.tiger, "/tiger/user");
            requestConfig = {
              url: url,
              method: "get",
              withCredentials: true
            };
            return _context3.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default(requestConfig).then(/*#__PURE__*/function () {
              var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee(res) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(res.status === 200)) {
                          _context.next = 4;
                          break;
                        }
                        return _context.abrupt("return", res.data);
                      case 4:
                        if (!(res.status === 204)) {
                          _context.next = 8;
                          break;
                        }
                        throw __WEBPACK_IMPORTED_MODULE_6__def__.NOT_LOGIN_MSG;
                      case 8:
                        throw __WEBPACK_IMPORTED_MODULE_6__def__.NETWORK_ERROR_MSG;
                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return function (_x9) {
                return _ref.apply(this, arguments);
              };
            }()).catch(/*#__PURE__*/function () {
              var _ref2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee2(error) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        throw Error(error);
                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return function (_x10) {
                return _ref2.apply(this, arguments);
              };
            }()));
          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _requestUserInfo.apply(this, arguments);
}
function requestLoginByEmail(_x) {
  return _requestLoginByEmail.apply(this, arguments);
}
function _requestLoginByEmail() {
  _requestLoginByEmail = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee6(loginData) {
    var url;
    var requestConfig;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            url = "".concat(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig().iris.overseaHost.tiger, "/tiger/accounts/login");
            requestConfig = {
              url: url,
              method: "POST",
              withCredentials: true,
              data: {
                identity: loginData.email,
                password: loginData.password,
                pid: getOverseaPid()
              }
            };
            return _context6.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default(requestConfig).then(/*#__PURE__*/function () {
              var _ref3 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee4(res) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(res.status === 200)) {
                          _context4.next = 2;
                          break;
                        }
                        return _context4.abrupt("return", res.data.user_info);
                      case 2:
                        throw getErrorMsgAndType(ErrorCode.NETWORK_ERROR);
                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));
              return function (_x11) {
                return _ref3.apply(this, arguments);
              };
            }()).catch(/*#__PURE__*/function () {
              var _ref4 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee5(error) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        throw getErrorMsgAndType(error.response && error.response.data.error_code);
                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));
              return function (_x12) {
                return _ref4.apply(this, arguments);
              };
            }()));
          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _requestLoginByEmail.apply(this, arguments);
}
function requestLogout() {
  return _requestLogout.apply(this, arguments);
}
function _requestLogout() {
  _requestLogout = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee9() {
    var url;
    var requestConfig;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            url = "".concat(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig().iris.overseaHost.tiger, "/tiger/accounts/logout");
            requestConfig = {
              url: url,
              method: "POST",
              withCredentials: true
            };
            return _context9.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default(requestConfig).then(/*#__PURE__*/function () {
              var _ref5 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee7(res) {
                var data;
                var statusText;
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        if (!(res.status === 204)) {
                          _context7.next = 4;
                          break;
                        }
                        data = res.data;
                        statusText = res.statusText;
                        return _context7.abrupt("return", {
                          data: data,
                          statusText: statusText
                        });
                      case 4:
                        throw getErrorMsgAndType(ErrorCode.NETWORK_ERROR);
                      case 5:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));
              return function (_x13) {
                return _ref5.apply(this, arguments);
              };
            }()).catch(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee8() {
              return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      throw getErrorMsgAndType(ErrorCode.NETWORK_ERROR);
                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }))));
          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _requestLogout.apply(this, arguments);
}
function checkAuthLogin() {
  return _checkAuthLogin.apply(this, arguments);
}
function _checkAuthLogin() {
  _checkAuthLogin = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee10() {
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return requestUserInfo();
          case 2:
            return _context10.abrupt("return", _context10.sent);
          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _checkAuthLogin.apply(this, arguments);
}
function handleLoginByEmail(_x2) {
  return _handleLoginByEmail.apply(this, arguments);
}
function _handleLoginByEmail() {
  _handleLoginByEmail = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee11(loginData) {
    var authInfo;
    var nickname;
    var id;
    var avatarUrl;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return requestLoginByEmail(loginData);
          case 3:
            authInfo = _context11.sent;
            nickname = authInfo.nickname;
            id = authInfo.id;
            avatarUrl = authInfo.avatar_url;
            return _context11.abrupt("return", {
              isSuccess: true,
              authInfo: {
                nickname: nickname,
                userId: id.toString(),
                avatar: avatarUrl,
                authType: __WEBPACK_IMPORTED_MODULE_6__def__.AuthType.CODEMAO
              }
            });
          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11["catch"](0);
            return _context11.abrupt("return", {
              isSuccess: false,
              error: _context11.t0
            });
          case 11:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return _handleLoginByEmail.apply(this, arguments);
}
function handleLogout() {
  return _handleLogout.apply(this, arguments);
}
function _handleLogout() {
  _handleLogout = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee12() {
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return requestLogout();
          case 3:
            return _context12.abrupt("return", {
              isSuccess: true
            });
          case 6:
            _context12.prev = 6;
            _context12.t0 = _context12["catch"](0);
            return _context12.abrupt("return", {
              isSuccess: false,
              error: _context12.t0
            });
          case 9:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 6]]);
  }));
  return _handleLogout.apply(this, arguments);
}
function handleResetPwd(_x3) {
  return _handleResetPwd.apply(this, arguments);
}
function _handleResetPwd() {
  _handleResetPwd = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee15(resetData) {
    var url;
    var requestConfig;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            url = "".concat(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig().iris.overseaHost.tiger, "/tiger/v3/web/accounts/password/email");
            requestConfig = {
              url: url,
              method: "post",
              withCredentials: true,
              data: {
                captcha: resetData.code,
                email: resetData.email,
                password: resetData.password
              }
            };
            return _context15.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default(requestConfig).then(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee13() {
              return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      return _context13.abrupt("return", {
                        isSuccess: true
                      });
                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }))).catch(/*#__PURE__*/function () {
              var _ref8 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee14(error) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        return _context14.abrupt("return", {
                          isSuccess: false,
                          error: getErrorMsgAndType(error.response && error.response.data.error_code)
                        });
                      case 1:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));
              return function (_x14) {
                return _ref8.apply(this, arguments);
              };
            }()));
          case 6:
            _context15.prev = 6;
            _context15.t0 = _context15["catch"](0);
            return _context15.abrupt("return", {
              isSuccess: false,
              error: _context15.t0
            });
          case 9:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 6]]);
  }));
  return _handleResetPwd.apply(this, arguments);
}
function sendEmail(_x4, _x5, _x6) {
  return _sendEmail.apply(this, arguments);
}
function _sendEmail() {
  _sendEmail = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee19(email, type, callBack) {
    var e;
    var ticket;
    var requestConfig;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return new Promise(function (resolve) {
              try {
                __WEBPACK_IMPORTED_MODULE_4__sign_in_dialog_auth_iris__.getAuthModule().getCaptcha(email, "", true, /*#__PURE__*/function () {
                  var _ref9 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee16(ticket) {
                    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee16$(_context16) {
                      while (1) {
                        switch (_context16.prev = _context16.next) {
                          case 0:
                            return _context16.abrupt("return", resolve(ticket));
                          case 1:
                          case "end":
                            return _context16.stop();
                        }
                      }
                    }, _callee16);
                  }));
                  return function (_x15) {
                    return _ref9.apply(this, arguments);
                  };
                }());
              } catch (err) {
                e = __WEBPACK_IMPORTED_MODULE_4__sign_in_dialog_auth_iris__.getAuthModule().getErrorMsgType(err);
                resolve("");
              }
            });
          case 3:
            ticket = _context19.sent;
            if (ticket) {
              _context19.next = 6;
              break;
            }
            throw e;
          case 6:
            requestConfig = {
              url: "".concat(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig().iris.overseaHost.tiger).concat(type === "reset" ? "/tiger/v3/web/accounts/captcha/password/email" : "/tiger/v3/web/accounts/email/captcha/send"),
              method: "post",
              withCredentials: true,
              headers: {
                "X-Captcha-Ticket": ticket
              },
              data: {
                email: email
              }
            };
            return _context19.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default(requestConfig).then(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee17() {
              return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      callBack();
                      return _context17.abrupt("return", {
                        isSuccess: true
                      });
                    case 2:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }))).catch(/*#__PURE__*/function () {
              var _ref11 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee18(error) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        return _context18.abrupt("return", {
                          isSuccess: false,
                          error: getErrorMsgAndType(error.response && error.response.data.error_code)
                        });
                      case 1:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18);
              }));
              return function (_x16) {
                return _ref11.apply(this, arguments);
              };
            }()));
          case 10:
            _context19.prev = 10;
            _context19.t0 = _context19["catch"](0);
            return _context19.abrupt("return", {
              isSuccess: false,
              error: _context19.t0
            });
          case 13:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[0, 10]]);
  }));
  return _sendEmail.apply(this, arguments);
}
function checkRegisterEmail(_x7) {
  return _checkRegisterEmail.apply(this, arguments);
}
function _checkRegisterEmail() {
  _checkRegisterEmail = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee22(data) {
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            return _context22.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default({
              url: "".concat(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig().iris.overseaHost.tiger, "/tiger/v3/web/accounts/email/captcha/check"),
              method: "post",
              withCredentials: true,
              data: {
                captcha: data.code,
                email: data.email
              }
            }).then(/*#__PURE__*/function () {
              var _ref12 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee20(res) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        if (!(res.data && res.data.captchaTicket)) {
                          _context20.next = 2;
                          break;
                        }
                        return _context20.abrupt("return", {
                          isSuccess: true,
                          captchaTicket: res.data.captchaTicket
                        });
                      case 2:
                        ;
                        return _context20.abrupt("return", {
                          isSuccess: false,
                          error: getErrorMsgAndType(ErrorCode.NETWORK_ERROR)
                        });
                      case 4:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20);
              }));
              return function (_x17) {
                return _ref12.apply(this, arguments);
              };
            }()).catch(/*#__PURE__*/function () {
              var _ref13 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee21(error) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee21$(_context21) {
                  while (1) {
                    switch (_context21.prev = _context21.next) {
                      case 0:
                        return _context21.abrupt("return", {
                          isSuccess: false,
                          error: getErrorMsgAndType(error.response && error.response.data.error_code)
                        });
                      case 1:
                      case "end":
                        return _context21.stop();
                    }
                  }
                }, _callee21);
              }));
              return function (_x18) {
                return _ref13.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));
  return _checkRegisterEmail.apply(this, arguments);
}
;
function register(_x8) {
  return _register.apply(this, arguments);
}
function _register() {
  _register = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee25(data) {
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            return _context25.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default({
              url: "".concat(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig().iris.overseaHost.tiger, "/tiger/v3/web/accounts/email/register"),
              method: "post",
              withCredentials: true,
              data: {
                captchaTicket: data.captchaTicket,
                password: data.password,
                rePassword: data.rePassword,
                pid: getOverseaPid()
              }
            }).then(/*#__PURE__*/function () {
              var _ref14 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee23(res) {
                var _res$data$user_info;
                var nickname;
                var id;
                var avatar_url;
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        if (!(res.data && res.data.user_info)) {
                          _context23.next = 3;
                          break;
                        }
                        _res$data$user_info = res.data.user_info;
                        nickname = _res$data$user_info.nickname;
                        id = _res$data$user_info.id;
                        avatar_url = _res$data$user_info.avatar_url;
                        return _context23.abrupt("return", {
                          isSuccess: true,
                          authInfo: {
                            nickname: nickname,
                            userId: id.toString(),
                            avatar: avatar_url,
                            authType: __WEBPACK_IMPORTED_MODULE_6__def__.AuthType.CODEMAO
                          }
                        });
                      case 3:
                        ;
                        return _context23.abrupt("return", {
                          isSuccess: false,
                          error: getErrorMsgAndType(ErrorCode.NETWORK_ERROR)
                        });
                      case 5:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23);
              }));
              return function (_x19) {
                return _ref14.apply(this, arguments);
              };
            }()).catch(/*#__PURE__*/function () {
              var _ref15 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee24(error) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee24$(_context24) {
                  while (1) {
                    switch (_context24.prev = _context24.next) {
                      case 0:
                        return _context24.abrupt("return", {
                          isSuccess: false,
                          error: getErrorMsgAndType(error.response && error.response.data.error_code)
                        });
                      case 1:
                      case "end":
                        return _context24.stop();
                    }
                  }
                }, _callee24);
              }));
              return function (_x20) {
                return _ref15.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));
  return _register.apply(this, arguments);
}
;

/***/