"use strict";

/* unused harmony export ErrorSign */
/* unused harmony export setOverseaPid */
/* unused harmony export getOverseaPid */
/* unused harmony export getErroMsgAndType */
/* unused harmony export handleGetUserInfo */
/* unused harmony export checkAuthLogin */
/* harmony export (immutable) */
export { handleLoginByEmail };
/* unused harmony export handleLogout */
/* harmony export (immutable) */
export { handleRegisterByEmail };
/* harmony export (immutable) */
export { handleResetPwd };
/* harmony import */
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
import * as __WEBPACK_IMPORTED_MODULE_3__cfg__ from "../../../../../../../../../../../../../cfg-OT5r";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__i18n__ from "./i18n-4U0O";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__def__ from "./def-vB1L"; // 此文件为账号相关API，仅供海外版使用
// 常规版、Edu版使用SDK (@frontend/iris)
var ErrorSign;
(function (ErrorSign) {
  ErrorSign[ErrorSign["NETWORK_ERROR"] = 0] = "NETWORK_ERROR";
  ErrorSign[ErrorSign["CODE_ERROR"] = 1] = "CODE_ERROR";
  ErrorSign[ErrorSign["LOGIN_ERROR"] = 2] = "LOGIN_ERROR";
  ErrorSign[ErrorSign["EMAIL_OFTEN_ERROR"] = 3] = "EMAIL_OFTEN_ERROR";
  ErrorSign[ErrorSign["EXIST_ERROR"] = 4] = "EXIST_ERROR";
  ErrorSign[ErrorSign["RESET_LIMIT_ERROR"] = 5] = "RESET_LIMIT_ERROR";
  ErrorSign[ErrorSign["NOT_EXIST_ERROR"] = 6] = "NOT_EXIST_ERROR";
  ErrorSign[ErrorSign["UNKNOWN_ERROR"] = 7] = "UNKNOWN_ERROR";
})(ErrorSign || (ErrorSign = {}));
var overseaPid;
var setOverseaPid = function setOverseaPid(pid) {
  overseaPid = pid;
};
var getOverseaPid = function getOverseaPid() {
  return overseaPid;
};
var getErroMsgAndType = function getErroMsgAndType(errorCode) {
  var msg;
  var type = __WEBPACK_IMPORTED_MODULE_5__def__.AuthErrorType.OTHER;
  switch (errorCode) {
    case ErrorSign.NETWORK_ERROR:
      msg = Object(__WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage)('sign_in_dialog/error/other/network');
      break;
    case ErrorSign.LOGIN_ERROR:
      msg = Object(__WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage)('sign_in_dialog/error/other/acc_or_pwd');
      break;
    case ErrorSign.EMAIL_OFTEN_ERROR:
      msg = Object(__WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage)('sign_in_dialog/error/email/email_often');
      break;
    case ErrorSign.EXIST_ERROR:
      msg = Object(__WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage)('sign_in_dialog/error/email/exist');
      type = __WEBPACK_IMPORTED_MODULE_5__def__.AuthErrorType.EMAIL;
      break;
    case ErrorSign.NOT_EXIST_ERROR:
      msg = Object(__WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage)('sign_in_dialog/error/email/not_exist');
      type = __WEBPACK_IMPORTED_MODULE_5__def__.AuthErrorType.EMAIL;
      break;
    case ErrorSign.RESET_LIMIT_ERROR:
      msg = Object(__WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage)('sign_in_dialog/error/email/send_exceed_limit');
      break;
    default:
      msg = Object(__WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage)('sign_in_dialog/error/other/network');
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
  _requestUserInfo = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee3() {
    var url;
    var requestConfig;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "".concat(Object(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig)().overseaApi.host, "/tiger/user");
            requestConfig = {
              url: url,
              method: 'get',
              withCredentials: true
            };
            return _context3.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default(requestConfig).then(/*#__PURE__*/function () {
              var _ref = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee(res) {
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
                        throw __WEBPACK_IMPORTED_MODULE_5__def__.NOT_LOGIN_MSG;
                      case 8:
                        throw __WEBPACK_IMPORTED_MODULE_5__def__.NETWORK_ERROR_MSG;
                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return function (_x7) {
                return _ref.apply(this, arguments);
              };
            }()).catch(/*#__PURE__*/function () {
              var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee2(error) {
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
              return function (_x8) {
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
  _requestLoginByEmail = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee6(loginData) {
    var url;
    var requestConfig;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            url = "".concat(Object(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig)().overseaApi.host, "/tiger/accounts/login");
            requestConfig = {
              url: url,
              method: 'POST',
              withCredentials: true,
              data: {
                identity: loginData.email,
                password: loginData.password,
                pid: getOverseaPid()
              }
            };
            return _context6.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default(requestConfig).then(/*#__PURE__*/function () {
              var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee4(res) {
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
                        throw getErroMsgAndType(ErrorSign.NETWORK_ERROR);
                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));
              return function (_x9) {
                return _ref3.apply(this, arguments);
              };
            }()).catch(/*#__PURE__*/function () {
              var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee5(error) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.t0 = error.response.data.error_code;
                        _context5.next = _context5.t0 === 'AC_0' ? 3 : _context5.t0 === 'AC_1' ? 3 : _context5.t0 === 'AC_45' ? 3 : 4;
                        break;
                      case 3:
                        throw getErroMsgAndType(ErrorSign.LOGIN_ERROR);
                      case 4:
                        throw getErroMsgAndType(ErrorSign.NETWORK_ERROR);
                      case 5:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));
              return function (_x10) {
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
function requestRegisterByEmail(_x2) {
  return _requestRegisterByEmail.apply(this, arguments);
}
function _requestRegisterByEmail() {
  _requestRegisterByEmail = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee9(registerData) {
    var url;
    var pid;
    var requestConfig;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            url = "".concat(Object(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig)().overseaApi.host, "/tiger/accounts/register/email");
            pid = getOverseaPid();
            requestConfig = {
              url: url,
              method: 'post',
              withCredentials: true,
              data: {
                email: registerData.email,
                password: registerData.password,
                language: 'en',
                pid: pid
              }
            };
            return _context9.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default(requestConfig).then(/*#__PURE__*/function () {
              var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee7(res) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        if (!(res.status === 204 || res.status === 201)) {
                          _context7.next = 4;
                          break;
                        }
                        return _context7.abrupt("return", true);
                      case 4:
                        throw getErroMsgAndType(ErrorSign.UNKNOWN_ERROR);
                      case 5:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));
              return function (_x11) {
                return _ref5.apply(this, arguments);
              };
            }()).catch(/*#__PURE__*/function () {
              var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee8(error) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.t0 = error.response.data.error_code;
                        _context8.next = _context8.t0 === 'AC_13' ? 3 : _context8.t0 === 'AC_11' ? 4 : 5;
                        break;
                      case 3:
                        throw getErroMsgAndType(ErrorSign.EXIST_ERROR);
                      case 4:
                        throw getErroMsgAndType(ErrorSign.EMAIL_OFTEN_ERROR);
                      case 5:
                        throw getErroMsgAndType(ErrorSign.UNKNOWN_ERROR);
                      case 6:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));
              return function (_x12) {
                return _ref6.apply(this, arguments);
              };
            }()));
          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _requestRegisterByEmail.apply(this, arguments);
}
function requestResetPwd(_x3) {
  return _requestResetPwd.apply(this, arguments);
}
function _requestResetPwd() {
  _requestResetPwd = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee12(email) {
    var url;
    var requestConfig;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            url = "".concat(Object(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig)().overseaApi.host, "/tiger/accounts/password/reset/email");
            requestConfig = {
              url: url,
              method: 'post',
              withCredentials: true,
              data: {
                email: email,
                language: 'en'
              }
            };
            return _context12.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default(requestConfig).then(/*#__PURE__*/function () {
              var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee10(res) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!(res.status === 204)) {
                          _context10.next = 4;
                          break;
                        }
                        return _context10.abrupt("return", true);
                      case 4:
                        throw getErroMsgAndType(ErrorSign.UNKNOWN_ERROR);
                      case 5:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));
              return function (_x13) {
                return _ref7.apply(this, arguments);
              };
            }()).catch(/*#__PURE__*/function () {
              var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee11(error) {
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.t0 = error.response.data.error_code;
                        _context11.next = _context11.t0 === 'AC_27' ? 3 : _context11.t0 === 'AC_43' ? 4 : 5;
                        break;
                      case 3:
                        throw getErroMsgAndType(ErrorSign.NOT_EXIST_ERROR);
                      case 4:
                        throw getErroMsgAndType(ErrorSign.RESET_LIMIT_ERROR);
                      case 5:
                        throw getErroMsgAndType(ErrorSign.NETWORK_ERROR);
                      case 6:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              }));
              return function (_x14) {
                return _ref8.apply(this, arguments);
              };
            }()));
          case 3:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _requestResetPwd.apply(this, arguments);
}
function requestLogout() {
  return _requestLogout.apply(this, arguments);
}
function _requestLogout() {
  _requestLogout = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee15() {
    var url;
    var requestConfig;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            url = "".concat(Object(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig)().overseaApi.host, "/tiger/accounts/logout");
            requestConfig = {
              url: url,
              method: 'POST',
              withCredentials: true
            };
            return _context15.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_axios___default(requestConfig).then(/*#__PURE__*/function () {
              var _ref9 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee13(res) {
                var data;
                var statusText;
                return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        if (!(res.status === 204)) {
                          _context13.next = 6;
                          break;
                        }
                        data = res.data;
                        statusText = res.statusText;
                        return _context13.abrupt("return", {
                          data: data,
                          statusText: statusText
                        });
                      case 6:
                        throw getErroMsgAndType(ErrorSign.UNKNOWN_ERROR);
                      case 7:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));
              return function (_x15) {
                return _ref9.apply(this, arguments);
              };
            }()).catch(/*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee14() {
              return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      throw getErroMsgAndType(ErrorSign.NETWORK_ERROR);
                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }))));
          case 3:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _requestLogout.apply(this, arguments);
}
function handleGetUserInfo() {
  return _handleGetUserInfo.apply(this, arguments);
}
function _handleGetUserInfo() {
  _handleGetUserInfo = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee16() {
    var authInfo;
    var nickname;
    var id;
    var avatarUrl;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return requestUserInfo();
          case 3:
            authInfo = _context16.sent;
            nickname = authInfo.nickname;
            id = authInfo.id;
            avatarUrl = authInfo.avatar_url;
            return _context16.abrupt("return", {
              isSuccess: true,
              authInfo: {
                nickname: nickname,
                userId: id.toString(),
                avatar: avatarUrl,
                authType: __WEBPACK_IMPORTED_MODULE_5__def__.AuthType.CODEMAO
              }
            });
          case 8:
            _context16.prev = 8;
            _context16.t0 = _context16["catch"](0);
            return _context16.abrupt("return", {
              isSuccess: false,
              error: _context16.t0
            });
          case 11:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 8]]);
  }));
  return _handleGetUserInfo.apply(this, arguments);
}
function checkAuthLogin() {
  return _checkAuthLogin.apply(this, arguments);
}
function _checkAuthLogin() {
  _checkAuthLogin = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee17() {
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return requestUserInfo();
          case 2:
            return _context17.abrupt("return", _context17.sent);
          case 3:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _checkAuthLogin.apply(this, arguments);
}
function handleLoginByEmail(_x4) {
  return _handleLoginByEmail.apply(this, arguments);
}
function _handleLoginByEmail() {
  _handleLoginByEmail = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee18(loginData) {
    var authInfo;
    var nickname;
    var id;
    var avatarUrl;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return requestLoginByEmail(loginData);
          case 3:
            authInfo = _context18.sent;
            nickname = authInfo.nickname;
            id = authInfo.id;
            avatarUrl = authInfo.avatar_url;
            return _context18.abrupt("return", {
              isSuccess: true,
              authInfo: {
                nickname: nickname,
                userId: id.toString(),
                avatar: avatarUrl,
                authType: __WEBPACK_IMPORTED_MODULE_5__def__.AuthType.CODEMAO
              }
            });
          case 8:
            _context18.prev = 8;
            _context18.t0 = _context18["catch"](0);
            return _context18.abrupt("return", {
              isSuccess: false,
              error: _context18.t0
            });
          case 11:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[0, 8]]);
  }));
  return _handleLoginByEmail.apply(this, arguments);
}
function handleLogout() {
  return _handleLogout.apply(this, arguments);
}
function _handleLogout() {
  _handleLogout = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee19() {
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return requestLogout();
          case 3:
            return _context19.abrupt("return", {
              isSuccess: true
            });
          case 6:
            _context19.prev = 6;
            _context19.t0 = _context19["catch"](0);
            return _context19.abrupt("return", {
              isSuccess: false,
              error: _context19.t0
            });
          case 9:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[0, 6]]);
  }));
  return _handleLogout.apply(this, arguments);
}
function handleRegisterByEmail(_x5) {
  return _handleRegisterByEmail.apply(this, arguments);
}
function _handleRegisterByEmail() {
  _handleRegisterByEmail = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee20(registerData) {
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            _context20.next = 3;
            return requestRegisterByEmail(registerData);
          case 3:
            return _context20.abrupt("return", {
              isSuccess: true
            });
          case 6:
            _context20.prev = 6;
            _context20.t0 = _context20["catch"](0);
            return _context20.abrupt("return", {
              isSuccess: false,
              error: _context20.t0
            });
          case 9:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[0, 6]]);
  }));
  return _handleRegisterByEmail.apply(this, arguments);
}
function handleResetPwd(_x6) {
  return _handleResetPwd.apply(this, arguments);
}
function _handleResetPwd() {
  _handleResetPwd = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee21(email) {
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            _context21.next = 3;
            return requestResetPwd(email);
          case 3:
            return _context21.abrupt("return", {
              isSuccess: true
            });
          case 6:
            _context21.prev = 6;
            _context21.t0 = _context21["catch"](0);
            return _context21.abrupt("return", {
              isSuccess: false,
              error: _context21.t0
            });
          case 9:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[0, 6]]);
  }));
  return _handleResetPwd.apply(this, arguments);
}

/***/