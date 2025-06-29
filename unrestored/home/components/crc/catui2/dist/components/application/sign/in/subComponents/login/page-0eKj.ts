"use strict";

/* harmony export (binding) */
export { LoginPageContainer };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator__ from "@babel/runtime/regenerator";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default from "@babel/runtime/regenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__base_icon__ from "../../base/icon-0d1w";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__base_toast__ from "./base/toast-pmLg";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__def__ from "../../def-9+Hp";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__auth__ from "../../auth-819E";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__i18n__ from "../../i18n-FsOf";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__cfg__ from "../../../../../../cfg-OT5r";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11__ByPassword__ from "./ByPassword-qDJt";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_12__BySMS__ from "./BySMS-c92C";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_13__style_module_css__ from "../../style.module.css-VPet";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_13__style_module_css___default from "../../style.module.css-VPet";
var _this = this;
var _styleModuleImportMap = {
  "../../style_module.css": {
    "wrap": "CUI-sign-in-dialog-wrap",
    "login-header": "CUI-sign-in-dialog-login-header",
    "dialog-btn-close": "CUI-sign-in-dialog-dialog-btn-close",
    "main": "CUI-sign-in-dialog-main",
    "content": "CUI-sign-in-dialog-content",
    "fully-content": "CUI-sign-in-dialog-fully-content",
    "error": "CUI-sign-in-dialog-error",
    "text": "CUI-sign-in-dialog-text",
    "tab-wrap": "CUI-sign-in-dialog-tab-wrap",
    "tab": "CUI-sign-in-dialog-tab",
    "slider": "CUI-sign-in-dialog-slider",
    "footer-text": "CUI-sign-in-dialog-footer-text",
    "text-wrap": "CUI-sign-in-dialog-text-wrap",
    "left": "CUI-sign-in-dialog-left",
    "right": "CUI-sign-in-dialog-right",
    "center": "CUI-sign-in-dialog-center",
    "tab-text": "CUI-sign-in-dialog-tab-text",
    "get-code": "CUI-sign-in-dialog-get-code",
    "enable": "CUI-sign-in-dialog-enable",
    "disable": "CUI-sign-in-dialog-disable",
    "input-error": "CUI-sign-in-dialog-input-error",
    "submit-error": "CUI-sign-in-dialog-submit-error",
    "login-agreement": "CUI-sign-in-dialog-login-agreement",
    "footer": "CUI-sign-in-dialog-footer",
    "third-party-btn-wrap": "CUI-sign-in-dialog-third-party-btn-wrap",
    "third-party-btn": "CUI-sign-in-dialog-third-party-btn",
    "agreement-container": "CUI-sign-in-dialog-agreement-container",
    "check-box": "CUI-sign-in-dialog-check-box",
    "agree": "CUI-sign-in-dialog-agree",
    "tip": "CUI-sign-in-dialog-tip",
    "btn-text": "CUI-sign-in-dialog-btn-text",
    "link": "CUI-sign-in-dialog-link",
    "tab-seleted": "CUI-sign-in-dialog-tab-seleted",
    "tab-unseleted": "CUI-sign-in-dialog-tab-unseleted",
    "clickable": "CUI-sign-in-dialog-clickable",
    "sign-in-btn": "CUI-sign-in-dialog-sign-in-btn",
    "text-main": "CUI-sign-in-dialog-text-main",
    "text-second": "CUI-sign-in-dialog-text-second"
  }
};
var useState = __WEBPACK_IMPORTED_MODULE_4_react__.useState;
var LoginMethod;
(function (LoginMethod) {
  LoginMethod[LoginMethod["BY_PASSWORD"] = 0] = "BY_PASSWORD";
  LoginMethod[LoginMethod["BY_SMS"] = 1] = "BY_SMS";
})(LoginMethod || (LoginMethod = {}));
var LoginPageContainer = function LoginPageContainer(props) {
  var isRequesting = props.isRequesting,
    setIsRequesting = props.setIsRequesting,
    switchView = props.switchView,
    smsTimeStamp = props.smsTimeStamp,
    setSmsTimeStamp = props.setSmsTimeStamp,
    onlyLogin = props.onlyLogin,
    onSmsLoginSuccess = props.onSmsLoginSuccess,
    onSmsLoginFailure = props.onSmsLoginFailure,
    onPasswordLoginSuccess = props.onPasswordLoginSuccess,
    onPasswordLoginFailure = props.onPasswordLoginFailure,
    reportMethod = props.reportMethod,
    disableThirdParty = props.disableThirdParty;
  var _useState = useState(LoginMethod.BY_PASSWORD),
    _useState2 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2),
    loginMethod = _useState2[0],
    setLoginMethod = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState3, 2),
    agreementChecked = _useState4[0],
    setAgreementChecked = _useState4[1];
  var onTabClick = function onTabClick(nextLoginMethod) {
    if (loginMethod === nextLoginMethod) {
      return;
    }
    setLoginMethod(nextLoginMethod);
  };
  var signinByQQ = function signinByQQ() {
    if (!agreementChecked) {
      __WEBPACK_IMPORTED_MODULE_6__base_toast__.message.custom({
        colorType: 'dark',
        content: '请阅读并同意用户协议、隐私协议、儿童隐私保护协议'
      });
      return;
    }
    signinByThirdParty('qq').catch(function (err) {
      return console.log(err);
    });
  };
  var signinByWechat = function signinByWechat() {
    if (!agreementChecked) {
      __WEBPACK_IMPORTED_MODULE_6__base_toast__.message.custom({
        colorType: 'dark',
        content: '请阅读并同意用户协议、隐私协议、儿童隐私保护协议'
      });
      return;
    }
    signinByThirdParty('wechat').catch(function (err) {
      return console.log(err);
    });
  };
  var signinByThirdParty = /*#__PURE__*/function () {
    var _ref = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.mark(function _callee3(loginMethod) {
      var prefix, redirectUrl, url, appid, pid, messageListener;
      return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              prefix = Object(__WEBPACK_IMPORTED_MODULE_10__cfg__.getConfig)().thirdPartyLoginPrefix;
              redirectUrl = Object(__WEBPACK_IMPORTED_MODULE_10__cfg__.getConfig)().redirectUrl;
              url = '';
              appid = '';
              pid = Object(__WEBPACK_IMPORTED_MODULE_8__auth__.getAuthModule)().getPid();
              if (loginMethod === 'qq') {
                appid = Object(__WEBPACK_IMPORTED_MODULE_10__cfg__.getConfig)().qqAppId;
                url = "".concat(prefix, "/get-qq-code.html?appid=").concat(appid, "&pid=").concat(pid, "&redirect_uri=").concat(redirectUrl, "/static/third_login-v3.html");
              } else {
                appid = Object(__WEBPACK_IMPORTED_MODULE_10__cfg__.getConfig)().wechatAppId;
                url = "".concat(prefix, "/get-weixin-code.html?appid=").concat(appid, "&scope=snsapi_login&state=").concat(Date.now(), "&pid=").concat(pid, "&redirect_uri=").concat(redirectUrl, "/static/third_login-v3.html");
              }
              url = "".concat(url, "?product_code=kitten+from=").concat(location.origin);
              window.open(url, 'newwindow', 'height=580, width=600, top=200, left=300, toolbar=no,' + 'menubar=no, scrollbars=no, resizable=no,location=no, status=no'); // 监听message事件
              messageListener = /*#__PURE__*/function () {
                var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.mark(function _callee2(e) {
                  var data, _data;
                  return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          data = JSON.parse(e.data);
                          if (data.existed) {
                            _context2.next = 8;
                            break;
                          }
                          if (data.oauth_ticket) {
                            _context2.next = 5;
                            break;
                          }
                          window.removeEventListener('message', messageListener);
                          return _context2.abrupt("return");
                        case 5:
                          Object(__WEBPACK_IMPORTED_MODULE_8__auth__.getAuthModule)().getAuth().create_user_for_third_party(data.oauth_ticket).then(/*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.mark(function _callee() {
                            var data;
                            return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return Object(__WEBPACK_IMPORTED_MODULE_8__auth__.getAuthModule)().getProfile();
                                  case 2:
                                    _context.next = 4;
                                    return _context.sent.data;
                                  case 4:
                                    data = _context.sent;
                                    props.onThirdPartyLoginSuccess && props.onThirdPartyLoginSuccess({
                                      nickname: data.nickname,
                                      userId: data.id.toString(),
                                      avatar: data.avatar_url,
                                      authType: __WEBPACK_IMPORTED_MODULE_8__auth__.AuthType.CODEMAO,
                                      source: loginMethod === 'qq' ? 'qq-login' : 'wc-login'
                                    });
                                    window.removeEventListener('message', messageListener);
                                  case 7:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }))).catch(function (e) {
                            console.error(e);
                            props.onThirdPartyLoginFailure && props.onThirdPartyLoginFailure({
                              source: loginMethod === 'qq' ? 'qq-login' : 'wc-login',
                              isSuccess: false,
                              error: e
                            });
                          });
                          _context2.next = 21;
                          break;
                        case 8:
                          _context2.prev = 8;
                          _context2.next = 11;
                          return Object(__WEBPACK_IMPORTED_MODULE_8__auth__.getAuthModule)().getProfile();
                        case 11:
                          _context2.next = 13;
                          return _context2.sent.data;
                        case 13:
                          _data = _context2.sent;
                          props.onThirdPartyLoginSuccess && props.onThirdPartyLoginSuccess({
                            nickname: _data.nickname,
                            userId: _data.id.toString(),
                            avatar: _data.avatar_url,
                            authType: __WEBPACK_IMPORTED_MODULE_8__auth__.AuthType.CODEMAO,
                            source: loginMethod === 'qq' ? 'qq-login' : 'wc-login'
                          });
                          window.removeEventListener('message', messageListener);
                          _context2.next = 21;
                          break;
                        case 18:
                          _context2.prev = 18;
                          _context2.t0 = _context2["catch"](8);
                          props.onThirdPartyLoginFailure && props.onThirdPartyLoginFailure({
                            source: loginMethod === 'qq' ? 'qq-login' : 'wc-login',
                            isSuccess: false,
                            error: _context2.t0
                          });
                        case 21:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[8, 18]]);
                }));
                return function messageListener(_x2) {
                  return _ref2.apply(this, arguments);
                };
              }();
              window.addEventListener('message', messageListener);
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function signinByThirdParty(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleAgreementChange = function handleAgreementChange(agree) {
    setAgreementChecked(agree);
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_4_react__.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-tab-wrap"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    onClick: onTabClick.bind(_this, LoginMethod.BY_PASSWORD),
    className: __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName___default("tab clickable ".concat(loginMethod === LoginMethod.BY_PASSWORD ? 'tab-seleted' : 'tab-unseleted'), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, Object(__WEBPACK_IMPORTED_MODULE_9__i18n__.getLanguage)('sign_in_dialog/sign_in_with_password')), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    onClick: onTabClick.bind(_this, LoginMethod.BY_SMS),
    className: __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName___default("tab clickable ".concat(loginMethod === LoginMethod.BY_SMS ? 'tab-seleted' : 'tab-unseleted'), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, Object(__WEBPACK_IMPORTED_MODULE_9__i18n__.getLanguage)('sign_in_dialog/sign_in_with_sms'))), loginMethod === LoginMethod.BY_PASSWORD && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_11__ByPassword__.ByPasswordComponent, {
    isRequesting: isRequesting,
    setIsRequesting: setIsRequesting,
    onPasswordLoginSuccess: onPasswordLoginSuccess,
    onPasswordLoginFailure: onPasswordLoginFailure,
    reportMethod: reportMethod,
    handleAgreementChange: handleAgreementChange
  }), loginMethod === LoginMethod.BY_SMS && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_12__BySMS__.BySMSComponent, {
    onlyLogin: onlyLogin,
    isRequesting: isRequesting,
    setIsRequesting: setIsRequesting,
    smsTimeStamp: smsTimeStamp,
    setSmsTimeStamp: setSmsTimeStamp,
    switchView: switchView,
    onSmsLoginSuccess: onSmsLoginSuccess,
    onSmsLoginFailure: onSmsLoginFailure,
    reportMethod: reportMethod,
    handleAgreementChange: handleAgreementChange
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-footer"
  }, !disableThirdParty && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-third-party-btn-wrap"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
    className: "CUI-sign-in-dialog-third-party-btn",
    onClick: signinByWechat,
    "data-report-click": "\u7528\u6237\u4FE1\u606F-\u5FAE\u4FE1\u767B\u5F55"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_icon__.Icon, {
    id: "#cui_iconweixin",
    size: 37,
    color: "#09b83e"
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
    className: "CUI-sign-in-dialog-third-party-btn",
    onClick: signinByQQ,
    "data-report-click": "\u7528\u6237\u4FE1\u606F-QQ\u767B\u5F55"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_icon__.Icon, {
    id: "#cui_iconQQ1",
    size: 37
  }))), !onlyLogin && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-footer-text"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
    className: "CUI-sign-in-dialog-text-wrap"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
    className: "CUI-sign-in-dialog-left CUI-sign-in-dialog-clickable CUI-sign-in-dialog-tab-text",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_7__def__.ContentView.FORGET_PASSWORD)
  }, Object(__WEBPACK_IMPORTED_MODULE_9__i18n__.getLanguage)('sign_in_dialog/find_password'))), "|", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
    className: "CUI-sign-in-dialog-text-wrap"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
    className: "CUI-sign-in-dialog-right CUI-sign-in-dialog-clickable CUI-sign-in-dialog-tab-text",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_7__def__.ContentView.REGISTER)
  }, Object(__WEBPACK_IMPORTED_MODULE_9__i18n__.getLanguage)('sign_in_dialog/sign_up_account'))))));
};
LoginPageContainer.defaultProps = {
  onPasswordLoginSuccess: function onPasswordLoginSuccess() {
    return undefined;
  },
  onPasswordLoginFailure: function onPasswordLoginFailure() {
    return undefined;
  },
  onSmsLoginSuccess: function onSmsLoginSuccess() {
    return undefined;
  },
  onSmsLoginFailure: function onSmsLoginFailure() {
    return undefined;
  },
  onThirdPartyLoginSuccess: function onThirdPartyLoginSuccess() {
    return undefined;
  },
  onThirdPartyLoginFailure: function onThirdPartyLoginFailure() {
    return undefined;
  },
  reportMethod: function reportMethod() {
    return undefined;
  },
  disableThirdParty: false
};

/***/