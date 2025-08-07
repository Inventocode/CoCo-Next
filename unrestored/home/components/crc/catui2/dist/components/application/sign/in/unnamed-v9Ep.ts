"use strict";

/* harmony export (binding) */
export { api as CodemaoApi };
/* harmony export (binding) */
export { CodemaoError };
/* harmony export (binding) */
export { CodemaoRequest };
/* harmony export (binding) */
export { ERROR_TYPE as ERROR };
/* harmony export (binding) */
export { utils as U };
/* harmony export (binding) */
export { auth };
/* harmony export (binding) */
export { index as captcha };
/* harmony export (binding) */
export { init$1 as init };
var configs = {
  dev: {
    env: 'dev',
    host: {
      tiger: 'https://backend-dev.codemao.cn',
      platform: 'https://dev-open-service.codemao.cn'
    },
    domain: '.codemao.cn'
  },
  staging: {
    env: 'staging',
    host: {
      tiger: 'https://backend-test.codemao.cn',
      platform: 'https://staging-open-service.codemao.cn'
    },
    domain: '.codemao.cn'
  },
  prod: {
    env: 'prod',
    host: {
      tiger: 'https://api.codemao.cn',
      platform: 'https://open-service.codemao.cn'
    },
    domain: '.codemao.cn'
  },
  'api-test': {
    env: 'api-test',
    host: {
      tiger: 'https://test-api.codemao.cn',
      platform: 'https://test-open-service.codemao.cn'
    },
    domain: '.codemao.cn'
  },
  test: {
    env: 'test',
    host: {
      tiger: 'https://test-api.codemao.cn',
      platform: 'https://test-open-service.codemao.cn'
    },
    domain: '.codemao.cn'
  },
  press: {
    env: 'press',
    host: {
      tiger: 'https://press-api.codemao.cn',
      platform: 'https://press-open-service.codemao.cn'
    },
    domain: '.codemao.cn'
  }
};

/**
 * 业务逻辑错误信息集合。
 * 可以在接口的catch通过err.error_code获取到。
 */
var ERROR_TYPE;
(function (ERROR_TYPE) {
  /**
   *
   * 不符合要求的初始化参数
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_INIT_PARAMS"] = -1] = "INVALID_INIT_PARAMS";
  /**
   * Invalid phone number.
   * 不符合要求的电话号码。
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_PHONE_NUMBER"] = 0] = "INVALID_PHONE_NUMBER";
  /**
   * Invalid captcha.
   * 不符合要求的短信验证码。
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_CAPTCHA"] = 1] = "INVALID_CAPTCHA";
  /**
   * Invalid password.
   * 不符合要求的密码。
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_PASSWORD"] = 2] = "INVALID_PASSWORD";
  /**
   * Invalid username.
   * 不符合要求的用户名。
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_USERNAME"] = 3] = "INVALID_USERNAME";
  /**
   * Invalid nickname.
   * 不符合要求的昵称。
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_NICKNAME"] = 4] = "INVALID_NICKNAME";
  /**
   * Invalid fullname.
   * 不符合要求的全名。
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_FULLNAME"] = 5] = "INVALID_FULLNAME";
  /**
   * Invalid qq.
   * 不符合要求的qq号码。
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_QQ"] = 6] = "INVALID_QQ";
  /**
   * Invalid description.
   * 不符合要求的个人描述。
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_DESCRIPTION"] = 7] = "INVALID_DESCRIPTION";
  /**
   * Invalid sex.
   * 不符合要求的性别。
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_SEX"] = 8] = "INVALID_SEX";
  /**
   * Invalid birthday.
   * 不符合要求的生日时间戳。
   * 格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的
   * 总秒数, 如2018年1月1日，即birthday值为:1514736000
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_BIRTHDAY"] = 9] = "INVALID_BIRTHDAY";
  /**
   * Password not equals confirm password.
   * 密码与确认密码不一致。
   */
  ERROR_TYPE[ERROR_TYPE["PWD_IS_NOT_EQUAL_TO_CONFIRMED_PWD"] = 10] = "PWD_IS_NOT_EQUAL_TO_CONFIRMED_PWD";
  /**
   * No access token when request authorized api.
   * Token 已过期或者没有 token
   * 通常需要重新登录。
   */
  ERROR_TYPE[ERROR_TYPE["NO_TOKEN"] = 11] = "NO_TOKEN";
  /**
   * An error code only appears when the request timeout.
   * 当请求超时会出现的错误码。
   */
  ERROR_TYPE[ERROR_TYPE["REQUEST_TIMEOUT"] = 12] = "REQUEST_TIMEOUT";
  /**
   * An error code only appears when request.onerror ran.
   * 当request.onerror方法被触发时捕获到的错误。
   */
  ERROR_TYPE[ERROR_TYPE["REQUEST_ERROR"] = 13] = "REQUEST_ERROR";
  /**
   * 手机号已注册
   */
  ERROR_TYPE[ERROR_TYPE["PHONE_REGISTERED"] = 14] = "PHONE_REGISTERED";
  /**
   * 手机号暂未注册
   */
  ERROR_TYPE[ERROR_TYPE["PHONE_UNREGISTERED"] = 15] = "PHONE_UNREGISTERED";
  /**
   * 用户不存在或者密码错误
   */
  ERROR_TYPE[ERROR_TYPE["USER_NOT_EXIST_OR_PWD_WRONG"] = 16] = "USER_NOT_EXIST_OR_PWD_WRONG";
  /**
   * 用户不存在
   */
  ERROR_TYPE[ERROR_TYPE["USER_NOT_EXIST"] = 17] = "USER_NOT_EXIST";
  /**
   * 不能设置未来的日期
   */
  ERROR_TYPE[ERROR_TYPE["CANNOT_SET_FUTURE_DATE"] = 18] = "CANNOT_SET_FUTURE_DATE";
  /**
   * 不能重复设置用户名
   */
  ERROR_TYPE[ERROR_TYPE["CANNOT_SET_USERNAME_REPEATEDLY"] = 19] = "CANNOT_SET_USERNAME_REPEATEDLY";
  /**
   * 该用户名已经存在
   */
  ERROR_TYPE[ERROR_TYPE["USERNAME_EXIST"] = 20] = "USERNAME_EXIST";
  /**
   * 用户需要绑定手机
   */
  ERROR_TYPE[ERROR_TYPE["NEED_TO_BIND_PHONE"] = 21] = "NEED_TO_BIND_PHONE";
  /**
   * 需要用当前绑定手机发验证码
   */
  ERROR_TYPE[ERROR_TYPE["USE_BOUND_PHONE_TO_RECEIVE_CAPTCHA"] = 22] = "USE_BOUND_PHONE_TO_RECEIVE_CAPTCHA";
  /**
   * 错误的旧密码
   */
  ERROR_TYPE[ERROR_TYPE["WRONG_OLD_PWD"] = 23] = "WRONG_OLD_PWD";
  /**
   * 密码不一致
   */
  ERROR_TYPE[ERROR_TYPE["PWDS_DO_NOT_MATCH"] = 24] = "PWDS_DO_NOT_MATCH";
  /**
   * 初始密码只能设置一次
   */
  ERROR_TYPE[ERROR_TYPE["INIT_PWD_CAN_SET_ONLY_ONCE"] = 25] = "INIT_PWD_CAN_SET_ONLY_ONCE";
  /**
   * 需存在主账号(至少包含邮箱、用户名、手机其一)
   */
  ERROR_TYPE[ERROR_TYPE["NEED_PRIMARY_ACCOUNT"] = 26] = "NEED_PRIMARY_ACCOUNT";
  /**
   * 校验码验证失败
   */
  ERROR_TYPE[ERROR_TYPE["VERIFY_CAPTCHA_FAIL"] = 27] = "VERIFY_CAPTCHA_FAIL";
  /**
   * 用户已经绑定过手机
   */
  ERROR_TYPE[ERROR_TYPE["USER_PHONE_BOUND"] = 28] = "USER_PHONE_BOUND";
  /**
   * 原手机号不正确
   */
  ERROR_TYPE[ERROR_TYPE["OLD_PHONE_WRONG"] = 29] = "OLD_PHONE_WRONG";
  /**
   * 非法操作
   */
  ERROR_TYPE[ERROR_TYPE["ILLEGAL_OPERATION"] = 30] = "ILLEGAL_OPERATION";
  /**
   * 不能绑定原手机号
   */
  ERROR_TYPE[ERROR_TYPE["CANNOT_BIND_OLD_PHONE"] = 31] = "CANNOT_BIND_OLD_PHONE";
  /**
   * 不合法的oauth_ticket
   */
  ERROR_TYPE[ERROR_TYPE["ILLEGAL_OAUTH_TICKET"] = 32] = "ILLEGAL_OAUTH_TICKET";
  /**
   * 不合法的授权类别
   */
  ERROR_TYPE[ERROR_TYPE["ILLEGAL_AUTHORIZATION_CATEGORY"] = 33] = "ILLEGAL_AUTHORIZATION_CATEGORY";
  /**
   * 第三方授权账号已被绑定
   */
  ERROR_TYPE[ERROR_TYPE["THIRD_PARTY_ACCOUNT_BOUND"] = 34] = "THIRD_PARTY_ACCOUNT_BOUND";
  /**
   * 账号已经绑定同类型授权账号
   */
  ERROR_TYPE[ERROR_TYPE["AUTHORIZATION_ACCOUNT_BOUND"] = 35] = "AUTHORIZATION_ACCOUNT_BOUND";
  /**
   * 请先绑定手机或者设置用户名及密码
   */
  ERROR_TYPE[ERROR_TYPE["BIND_PHONE_OR_SET_USERNAME_AND_PWD"] = 36] = "BIND_PHONE_OR_SET_USERNAME_AND_PWD";
  /**
   * 发送验证码过于频繁
   */
  ERROR_TYPE[ERROR_TYPE["SEND_CAPTCHA_TOO_FRUQUENTLY"] = 37] = "SEND_CAPTCHA_TOO_FRUQUENTLY";
  /**
   * 不合法的pid
   */
  ERROR_TYPE[ERROR_TYPE["ILLEGAL_PID"] = 38] = "ILLEGAL_PID";
  /**
   * 已经存在相同的昵称
   */
  ERROR_TYPE[ERROR_TYPE["NICKNAME_EXIST"] = 39] = "NICKNAME_EXIST";
  /**
   * 该手机号已被其他帐号绑定
   */
  ERROR_TYPE[ERROR_TYPE["PHONE_BOUND_BY_OTHER_ACCOUNT"] = 40] = "PHONE_BOUND_BY_OTHER_ACCOUNT";
  /**
   * QQ登录错误
   */
  ERROR_TYPE[ERROR_TYPE["QQ_ERROR_RECEIVED"] = 41] = "QQ_ERROR_RECEIVED";
  /**
   * 微信登录错误
   */
  ERROR_TYPE[ERROR_TYPE["WECHAR_ERROR_RECEIVED"] = 42] = "WECHAR_ERROR_RECEIVED";
  /**
   * access token 不合法
   */
  ERROR_TYPE[ERROR_TYPE["TOKEN_INVALID"] = 43] = "TOKEN_INVALID";
  /**
   * refresh token 不合法
   */
  ERROR_TYPE[ERROR_TYPE["REFRESH_TOKEN_INVALID"] = 44] = "REFRESH_TOKEN_INVALID";
  /**
   * 错误的 ticket
   */
  ERROR_TYPE[ERROR_TYPE["WRONG_TICKET"] = 45] = "WRONG_TICKET";
  /**
   * 利用旧登录态的 cookie 去获取新登录态的 token的接口
   * 可能会出现的错误。
   */
  ERROR_TYPE[ERROR_TYPE["COOKIE_INVALID"] = 46] = "COOKIE_INVALID";
  ERROR_TYPE[ERROR_TYPE["Appid_NotFound"] = 47] = "Appid_NotFound";
  ERROR_TYPE[ERROR_TYPE["Default_CaptchaRule_NotFound"] = 48] = "Default_CaptchaRule_NotFound";
  ERROR_TYPE[ERROR_TYPE["TencentCaptcha_Exception"] = 49] = "TencentCaptcha_Exception";
  ERROR_TYPE[ERROR_TYPE["GeetestCaptcha_Exception"] = 50] = "GeetestCaptcha_Exception";
  /**
   * 邮箱校验错误
   */
  ERROR_TYPE[ERROR_TYPE["INVALID_EMAIL_ADDRESS"] = 51] = "INVALID_EMAIL_ADDRESS";
  /**
   * 邮箱应注册过了
   */
  ERROR_TYPE[ERROR_TYPE["EMAIL_HAS_REGISTERED"] = 52] = "EMAIL_HAS_REGISTERED";
  /**
   * 账号被黑名单限制
   */
  ERROR_TYPE[ERROR_TYPE["ACCOUNT_HAS_BLOCKED"] = 53] = "ACCOUNT_HAS_BLOCKED";
  /**
   * 账号被黑名单限制
   */
  ERROR_TYPE[ERROR_TYPE["RECEIVABLE_CAPTCHA_TIMES_LIMITTED"] = 54] = "RECEIVABLE_CAPTCHA_TIMES_LIMITTED";
  /**
   * 必须传入协议id
   */
  ERROR_TYPE[ERROR_TYPE["AGREEMENT_IDS"] = 55] = "AGREEMENT_IDS";
})(ERROR_TYPE || (ERROR_TYPE = {}));
var version = "0.16.0";

// All Account 3.0 apis for web.
var Api = {
  REGISTER_SEND_CAPTCHA: '/tiger/v3/web/accounts/captcha/register/phone/with-agreement',
  REGISTER: '/tiger/v3/web/accounts/register/phone/with-agreement',
  LOGIN_CAPTCHA: '/tiger/v3/web/accounts/captcha/login/post-process',
  LOGIN_PHONE: '/tiger/v3/web/accounts/phone/login/post-process',
  LOGIN_ACCOUNT: '/tiger/v3/web/accounts/login',
  LOGIN_WECHAT: '/tiger/v3/web/accounts/oauth/wechat',
  LOGIN_QQ: '/tiger/v3/web/accounts/oauth/qq',
  BIND_PHONE_FOR_THIRD_PARTY: '/tiger/v3/web/accounts/captcha/oauth',
  CREATE_USER_FOR_THIRD_PARTY: '/tiger/v3/web/accounts/oauth/third-party',
  SET_USERNAME: '/tiger/v3/web/accounts/username',
  BIND_PHONE_CAPTCHA: '/tiger/v3/web/accounts/captcha/phone/bind',
  BIND_PHONE: '/tiger/v3/web/accounts/phone/bind',
  BIND_PHONE_CHECK: '/tiger/v3/web/accounts/phone/check',
  REBIND_PHONE_CAPTCHA: '/tiger/v3/web/accounts/captcha/phone/change',
  REBIND_PHONE: '/tiger/v3/web/accounts/phone/change',
  CHANGE_PWD_BY_OLD: '/tiger/v3/web/accounts/password',
  CHNAGE_PWD_BY_PHONE_CAPTCHA: '/tiger/v3/web/accounts/captcha/password/update',
  CHANGE_PWD_BY_PHONE: '/tiger/v3/web/accounts/password/phone',
  INIT_PASSWORD: '/tiger/v3/web/accounts/password/setting',
  RESET_PWD_CAPTCHA: '/tiger/v3/web/accounts/captcha/password/reset',
  RESET_PWD_TOKEN: '/tiger/v3/web/accounts/captcha/password/check',
  RESET_PWD: '/tiger/v3/web/accounts/password/reset',
  SET_PROFILE: '/tiger/v3/web/accounts/info',
  CHECK_BIND_FOR_THIRD_PARTY: '/tiger/v3/web/accounts/oauths',
  BIND_WECHAT: '/tiger/v3/web/accounts/oauth/wechat/bind',
  UNBIND_WECHAT: '/tiger/v3/web/accounts/oauth/wechat/unbind',
  BIND_QQ: '/tiger/v3/web/accounts/oauth/qq/bind',
  UNBIND_QQ: '/tiger/v3/web/accounts/oauth/qq/unbind',
  GET_PROFILE: '/tiger/v3/web/accounts/profile',
  GET_AUTH: '/tiger/v3/web/accounts/privacy',
  // 获取年级信息
  GET_GRADE_LIST: '/tiger/v3/web/accounts/grade-list',
  LOGOUT: '/tiger/v3/web/accounts/logout',
  SEND_UNIVERSAL_CAPTCHA: '/tiger/v3/web/accounts/captcha/common',
  VERIFY_UNIVERSAL_CAPTCHA: '/tiger/v3/web/accounts/captcha/common/check',
  LOGIN_CAPTCHA_SILENCE: '/tiger/v3/web/accounts/captcha/login/silence',
  LOGIN_PHONE_SILENCE: '/tiger/v3/web/accounts/phone/login/silence',
  LOGIN_ACCOUNT_TICKET: '/tiger/v3/web/accounts/login/security',
  // 邮箱验证码发送
  SEND_EMAIL_REGISTERATION_CAPTCHA: '/tiger/v3/web/accounts/email/captcha/send',
  // 验证邮箱验证码
  VERIFY_EMAIL_REGISTERATION_CAPTCHA: '/tiger/v3/web/accounts/email/captcha/check',
  // 邮箱注册
  REGISTER_BY_EMAIL: '/tiger/v3/web/accounts/email/register',
  // 获取协议列表
  GET_AGREEMENTS: '/tiger/v3/web/accounts/agreements',
  // 获取需签署的协议列表
  GET_AGREEMENTS_NEED_SIGN: '/tiger/v3/web/accounts/agreements/need-sign',
  // 签署协议列表
  SIGN_AGREEMENTS: '/tiger/v3/web/accounts/agreements/sign',
  // 语音验证码
  VOICE_CAPTCHA: '/tiger/v3/web/accounts/voice/captcha/send',
  // 查询最新协议-免登录开放接口
  FIND_LATEST_PROTOCOL_LIST: '/tiger/v3/web/accounts/protocol/list'
};
var TIGER_CAPTCHA_API = {
  GET_RULE: '/tiger/captcha/graph/rule',
  GET_GEETEST_PARAMS: '/tiger/captcha/graph/geetest/register_slide',
  CHECK_AND_GET_GEETEST_TICKET: '/tiger/captcha/graph/tickets/geetest',
  CHECK_AND_GET_WATERPROOFWALL_TICKET: '/tiger/captcha/graph/tickets/waterproof-wall'
};
var PLATFORM_CAPTCHA_API = {
  GET_RULE: '/captcha/rule/v3',
  GET_GEETEST_PARAMS: '/captcha/geetest/register',
  CHECK_AND_GET_GEETEST_TICKET: '/captcha/geetest/verify',
  CHECK_AND_GET_TENCENT_TICKET: '/captcha/tencent',
  CHECK_AND_GET_NEXTDATA_TICKET: '/captcha/nextdata',
  CHECK_AND_GET_NETEASE_TICKET: '/captcha/netease',
  CHECK_AND_GET_ALIYUN_TICKET: '/captcha/aliyun'
};
var TIGER_TOKEN_API = {
  REFRESH_TOKEN: '/tiger/v3/web/accounts/tokens/refresh',
  DELETE_TOKEN: '/tiger/v3/web/accounts/tokens',
  GET_TOKEN_FROM_OLD_COOKIE: '/tiger/v3/web/accounts/tokens/convert'
};
var PUBLIC_HEADERS = {
  Net: navigator.connection ? navigator.connection.effectiveType : '',
  'SDK-Account-Version': version
};
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Api: Api,
  TIGER_CAPTCHA_API: TIGER_CAPTCHA_API,
  PLATFORM_CAPTCHA_API: PLATFORM_CAPTCHA_API,
  TIGER_TOKEN_API: TIGER_TOKEN_API,
  PUBLIC_HEADERS: PUBLIC_HEADERS
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) {
      d[p] = b[p];
    }
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) {
        t[p] = s[p];
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
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
        adopt(result.value).then(fulfilled, rejected);
      }
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) {
        throw t[1];
      }
      return t[1];
    },
    trys: [],
    ops: []
  };
  var f;
  var y;
  var t;
  var g;
  g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  };
  if (typeof Symbol === "function") {
    g[Symbol.iterator] = function () {
      return this;
    };
  }
  return g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) {
      throw new TypeError("Generator is already executing.");
    }
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) {
          return t;
        }
        if (y = 0, t) {
          op = [op[0] & 2, t.value];
        }
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) {
              _.ops.pop();
            }
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) {
      throw op[1];
    }
    return {
      value: op[0] ? op[1] : undefined,
      done: true
    };
  }
}

/**
 * This file is used to integrate error message.
 */
/**
 * 到底叫什么？¸
 * 原来 {string} error_msg  Error message.
 */
/**
 * Creates an instance of CodemaoError.
 *
 * @param {number} error_code Unique error code.
 *
 * @param {number} message Unique error code.
 *
 * @param {string} response   Error original body.
 */
var CodemaoError = /** @class */function (_super) {
  __extends(CodemaoError, _super);
  function CodemaoError(options) {
    var _this = _super.call(this, options.message) || this;
    var error_code = options.error_code;
    var _a = options.error_origin_response;
    var error_origin_response = _a === undefined ? {
      error_code: error_code,
      error_message: options.message,
      error_number: error_code || null
    } : _a;
    if (options.error_code !== undefined) {
      _this.error_code = error_code;
    }
    if (options.error_body) {
      _this.error_body = options.error_body;
    }
    _this.response = error_origin_response;
    return _this;
  }
  return CodemaoError;
}(Error);
var CodemaoConsoleError = /** @class */function () {
  function CodemaoConsoleError(message) {
    console.error("Iris SDK error: " + message);
  }
  return CodemaoConsoleError;
}();
// Map the back-end error to iris error.
var BackendError = {
  AC3_0: {
    error_code: ERROR_TYPE.PHONE_REGISTERED,
    message: 'Phone number is registered.'
  },
  AC3_1: {
    error_code: ERROR_TYPE.PHONE_UNREGISTERED,
    message: 'Phone number is unregistered.'
  },
  AC3_2: {
    error_code: ERROR_TYPE.USER_NOT_EXIST_OR_PWD_WRONG,
    message: 'User doesn\'t exist or password is wrong.'
  },
  AC3_3: {
    error_code: ERROR_TYPE.USER_NOT_EXIST,
    message: 'User doesn\'t exist.'
  },
  AC3_4: {
    error_code: ERROR_TYPE.CANNOT_SET_FUTURE_DATE,
    message: 'Cannot set a future date.'
  },
  AC3_5: {
    error_code: ERROR_TYPE.CANNOT_SET_USERNAME_REPEATEDLY,
    message: 'Cannot set the username repeatedly.'
  },
  AC3_6: {
    error_code: ERROR_TYPE.USERNAME_EXIST,
    message: 'Username is already existed.'
  },
  AC3_7: {
    error_code: ERROR_TYPE.NEED_TO_BIND_PHONE,
    message: 'User need to bind a phone.'
  },
  AC3_8: {
    error_code: ERROR_TYPE.USE_BOUND_PHONE_TO_RECEIVE_CAPTCHA,
    message: 'Need to use the bound phone to receive the captcha.'
  },
  AC3_9: {
    error_code: ERROR_TYPE.WRONG_OLD_PWD,
    message: 'Wrong old password.'
  },
  AC3_10: {
    error_code: ERROR_TYPE.PWDS_DO_NOT_MATCH,
    message: 'Passwords do not match.'
  },
  AC3_11: {
    error_code: ERROR_TYPE.INIT_PWD_CAN_SET_ONLY_ONCE,
    message: 'Init-password can be set only once.'
  },
  AC3_12: {
    error_code: ERROR_TYPE.NEED_PRIMARY_ACCOUNT,
    message: 'Primary account should exist.(one of email, username and phone number).'
  },
  AC3_13: {
    error_code: ERROR_TYPE.VERIFY_CAPTCHA_FAIL,
    message: 'Fail when verifying the captcha.'
  },
  AC3_14: {
    error_code: ERROR_TYPE.USER_PHONE_BOUND,
    message: 'User has bound a phone.'
  },
  AC3_15: {
    error_code: ERROR_TYPE.OLD_PHONE_WRONG,
    message: 'Old phone number is wrong.'
  },
  AC3_16: {
    error_code: ERROR_TYPE.ILLEGAL_OPERATION,
    message: 'Operation is illegal.'
  },
  AC3_17: {
    error_code: ERROR_TYPE.CANNOT_BIND_OLD_PHONE,
    message: 'Cannot bind phone with a old phone number.'
  },
  AC3_18: {
    error_code: ERROR_TYPE.ILLEGAL_OAUTH_TICKET,
    message: 'Oauth_ticket is illegal.'
  },
  AC3_19: {
    error_code: ERROR_TYPE.ILLEGAL_AUTHORIZATION_CATEGORY,
    message: 'Authorization category is illegal.'
  },
  AC3_20: {
    error_code: ERROR_TYPE.THIRD_PARTY_ACCOUNT_BOUND,
    message: 'Third-party account has been bound.'
  },
  AC3_21: {
    error_code: ERROR_TYPE.AUTHORIZATION_ACCOUNT_BOUND,
    message: 'Account has been bound with the the same authorization account.'
  },
  AC3_22: {
    error_code: ERROR_TYPE.BIND_PHONE_OR_SET_USERNAME_AND_PWD,
    message: 'Please bind a phone or set the username.'
  },
  AC3_23: {
    error_code: ERROR_TYPE.SEND_CAPTCHA_TOO_FRUQUENTLY,
    message: 'Request captchas too fruquently.'
  },
  AC3_24: {
    error_code: ERROR_TYPE.ILLEGAL_PID,
    message: 'Pid is illegal.'
  },
  AC3_25: {
    error_code: ERROR_TYPE.NICKNAME_EXIST,
    message: 'Nickname is already existed.'
  },
  AC3_26: {
    error_code: ERROR_TYPE.PHONE_BOUND_BY_OTHER_ACCOUNT,
    message: 'Phone has been bound by other account.'
  },
  AC3_27: {
    error_code: ERROR_TYPE.WRONG_TICKET,
    message: 'Ticket is wrong.'
  },
  AC3_44: {
    error_code: ERROR_TYPE.ACCOUNT_HAS_BLOCKED,
    message: 'Account has blocked in blacklist.'
  },
  AC3_48: {
    error_code: ERROR_TYPE.RECEIVABLE_CAPTCHA_TIMES_LIMITTED,
    message: 'Reached the specified limitation of sending times.'
  },
  AC3_61: {
    error_code: ERROR_TYPE.EMAIL_HAS_REGISTERED,
    message: 'Email has registered.'
  },
  C_1: {
    error_code: ERROR_TYPE.QQ_ERROR_RECEIVED,
    message: 'Receive error from QQ when login with it.'
  },
  C_2: {
    error_code: ERROR_TYPE.WECHAR_ERROR_RECEIVED,
    message: 'Receive error from WeChat when login with it.'
  },
  GCAP_1: {
    error_code: ERROR_TYPE.INVALID_CAPTCHA,
    message: 'Invalid Ticket.'
  },
  '10000000': {
    error_code: ERROR_TYPE.TOKEN_INVALID,
    message: 'Access token is invalid.'
  },
  '10000001': {
    error_code: ERROR_TYPE.REFRESH_TOKEN_INVALID,
    message: 'Refresh token is invalid.'
  },
  '10000002': {
    error_code: ERROR_TYPE.COOKIE_INVALID,
    message: 'Fail to convert cookie to token.'
  },
  '10017001': {
    error_code: ERROR_TYPE.Appid_NotFound,
    message: 'AppidNotFoundException'
  },
  '10017002': {
    error_code: ERROR_TYPE.Default_CaptchaRule_NotFound,
    message: 'DefaultCaptchaRuleNotFoundException'
  },
  '10017003': {
    error_code: ERROR_TYPE.TencentCaptcha_Exception,
    message: 'TencentCaptchaException'
  },
  '10017004': {
    error_code: ERROR_TYPE.GeetestCaptcha_Exception,
    message: 'GeetestCaptchaException'
  }
};
var initParamsRuleAlias = {
  pid: {
    required: true,
    types: ['string']
  },
  appid: {
    required: true,
    types: ['string', 'number']
  },
  product_code: {
    required: true,
    types: ['string', 'number']
  }
};
var initParamsValidateHelper = function ($config) {
  if (!$config) {
    throw new Error('you should specify a config to init Iris auth module');
  }
  Object.keys(initParamsRuleAlias).forEach(function (rule_key) {
    if (rule_key !== 'platform') {
      var value = $config[rule_key];
      if (initParamsRuleAlias[rule_key].required && !value && value !== '') {
        throw new CodemaoError({
          error_code: ERROR_TYPE.INVALID_INIT_PARAMS,
          message: rule_key + " is required,but got null or undefined"
        });
      }
      var type = typeof $config[rule_key];
      if (!initParamsRuleAlias[rule_key].types.includes(type)) {
        throw new CodemaoError({
          error_code: ERROR_TYPE.INVALID_INIT_PARAMS,
          message: rule_key + " should be type of " + initParamsRuleAlias[rule_key].type.join(' or ') + ",but got " + type
        });
      }
    }
  });
  return true;
};

// IrisInitParams;
var _initParams = {};
var getInitParams = function () {
  return _initParams;
};
var setInitParams = function (initParams) {
  _initParams = initParams;
};
// IrisConfig
var _config = configs['prod'];
var getConfig = function () {
  return _config;
};
var setConfig = function (config) {
  _config = config;
};
// AuthConfig
var _authConfig;
var getAuthConfig = function () {
  return _authConfig;
};
var setAuthConfig = function (config) {
  _authConfig = config;
};

/**
 * Request module to send request.
 */
var CodemaoRequest = /** @class */function () {
  function CodemaoRequest(config) {
    this.hostType = config && config.hostType || 'tiger';
    this.timeout = config && config.timeout || 20000;
    this.public_headers = config && config.public_headers;
  }
  CodemaoRequest.prototype.get_complete_url = function (url, params) {
    var params_str = Object.keys(params).filter(function (key) {
      return params[key];
    }).map(function (key) {
      return key + "=" + params[key];
    }).join('&');
    return Object.keys(params).length === 0 ? "" + getConfig().host[this.hostType] + url : "" + getConfig().host[this.hostType] + url + "?" + params_str;
  };
  CodemaoRequest.prototype.dispatch_request = function (options) {
    return __awaiter(this, undefined, undefined, function () {
      var _this = this;
      return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
          var url = options.url;
          var method = options.method;
          var data = options.data;
          var without_base_url = options.without_base_url;
          var params = options.params || {};
          var compatibleHeaders = {};
          if (getInitParams().auth_version) {
            compatibleHeaders['Auth-Version'] = getInitParams().auth_version;
          }
          if (getInitParams().client_id) {
            compatibleHeaders['Client-ID'] = getInitParams().client_id;
          }
          var headers = __assign(__assign(__assign({}, _this.public_headers), options.headers), compatibleHeaders);
          var request_url = without_base_url ? url : _this.get_complete_url(url, params);
          // [client_id和auth_version] 由 body 修改到 headers 中，所以删了原有assign逻辑❗️
          var request = new XMLHttpRequest(); // 低版本IE？Nodejs？小程序？还是只考虑web端？
          request.open(method.toUpperCase(), request_url, true);
          // Data will be sent with json Content-Type
          if (data) {
            request.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
          }
          request.timeout = getInitParams().requestTimeout || _this.timeout;
          request.withCredentials = true;
          request.onreadystatechange = function handle_loaded() {
            var _a;
            if (!request || request.readyState !== 4) {
              return;
            }
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
              return;
            }
            if (request.status >= 200 && request.status <= 300) {
              var response = request.response;
              if (response) {
                // status
                resolve({
                  status: request.status,
                  statusText: request.statusText,
                  data: JSON.parse(response)
                });
              } else {
                resolve({
                  status: request.status,
                  statusText: request.statusText,
                  data: null
                });
              }
            } else {
              try {
                var response = JSON.parse(request.response);
                // contains iris's error & request_with_token() back-end error.
                var error = BackendError[response.error_code];
                if (error) {
                  reject(new CodemaoError(__assign(__assign({}, error), {
                    error_origin_response: response
                  })));
                } else {
                  reject(new CodemaoError({
                    error_code: response.error_code,
                    error_body: ((_a = response.catastrophe) === null || _a === undefined ? undefined : _a.error) || response,
                    error_origin_response: response,
                    message: "Get error from " + request_url + "."
                  }));
                }
              } catch (error) {
                reject(error);
              }
            }
            // Clean up request.
            // request = null;
          };
          // Handle low level network errors
          request.onerror = function () {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new CodemaoError({
              error_code: ERROR_TYPE.REQUEST_ERROR,
              message: 'Network error.'
            }));
            // Clean up request.
            // request = null;
          };
          // Handle timeout
          request.ontimeout = function () {
            reject(new CodemaoError({
              error_code: ERROR_TYPE.REQUEST_TIMEOUT,
              message: "ECONNABORTED:timeout of " + request.timeout + " ms exceeded."
            }));
            // Clean up request.
            // request = null;
          };
          try {
            if ('setRequestHeader' in request) {
              Object.keys(headers).forEach(function (val) {
                request.setRequestHeader(val, headers[val]);
              });
            }
          } catch (error) {
            console.error(error);
            console.log('headers is ', headers);
            throw new Error('Iris Error: 设置请求头时出错，请检查请求头，不能含有中文');
          }
          if (data) {
            request.send(JSON.stringify(data));
          } else {
            request.send();
          }
        })];
      });
    });
  };
  return CodemaoRequest;
}();
var TigerApi = new CodemaoRequest();
var PlatformApi = new CodemaoRequest({
  hostType: 'platform'
});

// Function to check if input params' properties are valid.
function check_input_existence(obj, check_properties) {
  if (obj) {
    Object.keys(obj).map(function (property) {
      if (check_properties.indexOf(property) === -1) {
        new CodemaoConsoleError("\u8BF7\u786E\u8BA4 " + property + " \u53C2\u6570\u662F\u5426\u5408\u6CD5");
      }
    });
  }
}
// All RegExp for validation
var phone_number_pattern = /^1[3456789]\d{9}$/;
var captcha_pattern = /^\d{6}$/;
var password_pattern = /^[a-zA-Z0-9\_\-@#?!~$^&\*\(\)\/%<>,\.;:"+=|\\{}\[\]]{6,20}$/;
var username_pattern = /^[a-zA-Z]{1}\w{5,29}$/;
// eslint-disable-next-line no-misleading-character-class
var nickname_pattern = /^[^\s☀☁☂ϟ☉☼☾☽♁♨❄❅❆☃☁✉℡℻☎☏✂✄✆✎✏✐✑✒✇℗©®🅏🆏⚐⚑⚆⚇⚈⚉⚞⚟⚠⚬⚭⚮⚯☊㋀㋁㋂㋃㋄㋅㋆㋇㋈㋉㋊㋋㏠㏡㏢㏣㏤㏥㏦㏧㏨㏩ ㏪㏫㏬㏭㏮㏯㏰㏱㏲㏳㏴㏵㏶㏷㏸㏹㏺㏻㏼㏽㏾㍘㍙㍚㍛㍜㍝㍞㍟㍠㍡㍢㍣㍤㍥㍦㍧㍨㍩㍪㍫㍬㍭㍮㍯㍰㏂㏘♳♴♵♶♷♸♹♺♲♻♼♽⚀⚁⚂⚃⚄⚅]{1,20}$/;
var fullname_pattern = /^([\u4e00-\u9fa5]{2,20}|[a-zA-Z](\s?[a-zA-Z]){3,29})$/;
var qq_pattern = /^\d{5,20}$/;
var email_address_pattern = /^\w+@[a-z0-9]+\.[a-z]{2,4}/;
//
function check(property_name, pattern, error_code) {
  return function (property_value) {
    if (!pattern.test(property_value)) {
      throw new CodemaoError({
        error_code: error_code,
        message: "Invalid " + property_name + " \"" + property_value + "\", it should match the RegExp " + pattern + "."
      });
    }
  };
}
// Function to check phone number
var check_phone_number = check('phone_number', phone_number_pattern, ERROR_TYPE.INVALID_PHONE_NUMBER);
//
var validate_email_address = check('email_address', email_address_pattern, ERROR_TYPE.INVALID_EMAIL_ADDRESS);
// Function to check captcha
var check_captcha = check('captcha', captcha_pattern, ERROR_TYPE.INVALID_CAPTCHA);
// Function to check password
var check_password = check('password', password_pattern, ERROR_TYPE.INVALID_PASSWORD);
// Function to check username
var check_username = check('username', username_pattern, ERROR_TYPE.INVALID_USERNAME);
// Function to check nickname
var check_nickname = check('nickname', nickname_pattern, ERROR_TYPE.INVALID_NICKNAME);
// Function to check fullname
var check_fullname = check('fullname', fullname_pattern, ERROR_TYPE.INVALID_FULLNAME);
// Function to check qq
var check_qq = check('qq', qq_pattern, ERROR_TYPE.INVALID_QQ);
// Function to check description
function check_description(description) {
  if (description.length > 50) {
    throw new CodemaoError({
      error_code: ERROR_TYPE.INVALID_DESCRIPTION,
      message: 'Invalid description, it should contains only 0 - 50 characters.'
    });
  }
}
// Function to check sex
function check_sex(sex) {
  if (sex !== 0 && sex !== 1) {
    throw new CodemaoError({
      error_code: ERROR_TYPE.INVALID_SEX,
      message: "Invalid sex \"" + sex + "\", it should be 0 or 1."
    });
  }
}
// Function to check birthday
function check_birthday(birthday) {
  if (!Number.isInteger(birthday)) {
    throw new CodemaoError({
      error_code: ERROR_TYPE.INVALID_BIRTHDAY,
      message: "Invalid birthday \"" + birthday + "\", it should be a integer number."
    });
  }
}
/**
 * Function to check register options.
 *
 * @export
 * @param {RegisterOptions} options
 */
function check_register_options(options) {
  var phone_number = options.phone_number;
  var password = options.password;
  var captcha = options.captcha;
  var agreement_ids = options.agreement_ids;
  check_phone_number(phone_number);
  check_password(password);
  check_captcha(captcha);
  check_agreement_ids(agreement_ids);
}
/**
 *
 * @param profile
 */
function check_agreement_ids(ids) {
  if (!(ids === null || ids === undefined ? undefined : ids.length)) {
    throw new CodemaoError({
      error_code: ERROR_TYPE.AGREEMENT_IDS,
      message: 'agreement_ids should not be an empty array.'
    });
  }
}
/**
 * Function to check user profilr for set_profile.
 *
 * @export
 * @param {UserProfile} profile
 */
function check_profile(profile) {
  var birthday = profile.birthday;
  var sex = profile.sex;
  var fullname = profile.fullname;
  var nickname = profile.nickname;
  var qq = profile.qq;
  var description = profile.description;
  if (birthday) {
    check_birthday(birthday);
  }
  if (sex) {
    check_sex(sex);
  }
  if (fullname) {
    check_fullname(fullname);
  }
  if (nickname) {
    check_nickname(nickname);
  }
  if (qq) {
    check_qq(qq);
  }
  if (description) {
    check_description(description);
  }
}
/**
 * Functio to check if password equals confirm password.
 *
 * @export
 * @param {string} pwd
 * @param {string} pwd_confirm
 */
function check_if_pwd_equals_confirmed_pwd(pwd, pwd_confirm) {
  if (pwd !== pwd_confirm) {
    throw new CodemaoError({
      error_code: ERROR_TYPE.PWD_IS_NOT_EQUAL_TO_CONFIRMED_PWD,
      message: 'Password is not equal to confirmed password.'
    });
  }
}
/**
 * Function to retry a promise for retries times.
 *
 * @export
 * @param {number} retries
 * @param {Function} fn
 * @returns {Promise<any>}
 */
function retry(retries, fn) {
  return __awaiter(this, undefined, undefined, function () {
    var result;
    var err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);
          return [4 /*yield*/, fn()];
        case 1:
          result = _a.sent();
          return [2 /*return*/, result];
        case 2:
          err_1 = _a.sent();
          if (retries > 1) {
            return [2 /*return*/, retry(retries - 1, fn)];
          } else {
            throw new CodemaoError({
              message: 'Get geetest init params fail, please reload the page or try again later.'
            });
          }
        case 3:
          return [2 /*return*/];
      }
    });
  });
}
// Function to set cookie with options.
function set_cookie(options) {
  var name = options.name;
  var value = options.value;
  var domain = options.domain;
  var max_age = options.max_age;
  var cookieString = name + "=" + value + "; domain=" + domain + "; max-age=" + max_age + "; path=/;";
  var sameSiteCookie = cookieString + " samesite=none; secure";
  document.cookie = cookieString;
  document.cookie = sameSiteCookie;
}
// Function to get cookie by name.
function get_cookie(name) {
  var cookies = {};
  document.cookie.split(';').forEach(function (cookie) {
    var first_equal_mark_position = cookie.indexOf('=');
    var key = cookie.slice(0, first_equal_mark_position);
    var value = cookie.slice(first_equal_mark_position + 1);
    cookies[key.trim()] = value;
  });
  return cookies[name];
}
// Function to clear cookie by setting max-age to negative number.
function clear_cookie(name, domain) {
  set_cookie({
    name: name,
    value: '',
    domain: domain,
    max_age: -999999
  });
}
// Function to generate the cookie name according to the env.
function get_cookie_name(type) {
  var env = getConfig().env;
  var prefix = env === 'prod' ? '' : env + "-";
  if (type === 'token_type') {
    /**
     * All possible result
     * 1. prod -- token-type
     * 2. dev -- dev-token-type
     * 3. staging -- staging-token-type
     * 4. api-test -- api-test-token-type
     */
    return prefix + "token-type";
  }
  /**
   * All possible result
   * 1. prod -- ${type}-token
   * 2. dev -- dev-${type}-token
   * 3. staging -- staging-${type}-token
   * 4. api-test -- api-test-${type}-token
   */
  return "" + prefix + type + "-token";
}
function is_cookie_exist(cookie) {
  return cookie && cookie !== 'undefined' && cookie !== '' ? true : false;
}
function load_script(url, id, timeout) {
  return __awaiter(this, undefined, undefined, function () {
    return __generator(this, function (_a) {
      return [2 /*return*/, new Promise(function (resolve, reject) {
        if (!document.getElementById(id)) {
          var timer_1;
          if (timeout) {
            timer_1 = setTimeout(function () {
              resolve();
              clearTimeout(timer_1);
            }, timeout * 1000);
          }
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.onload = function () {
            resolve();
            if (timer_1) {
              clearTimeout(timer_1);
            }
          };
          script.id = id;
          script.src = url;
          script.setAttribute('defer', '');
          document.getElementsByTagName('head')[0].appendChild(script);
        } else {
          resolve();
        }
      })];
    });
  });
}
function hasProperty(key, object) {
  return Object.prototype.hasOwnProperty.call(object, key);
}
function appendDomNode(domNodeType, opts, style) {
  return new Promise(function (resolve, reject) {
    var node = document.createElement(domNodeType);
    node.onload = function () {
      resolve(!!1);
    };
    node.onerror = function () {
      reject(!!0);
    };
    if (opts) {
      Object.keys(opts).forEach(function (keyname) {
        var value = opts[keyname];
        if (keyname !== 'innerHTML' && keyname !== 'style') {
          node.setAttribute(keyname, typeof value !== 'string' ? JSON.stringify(value) : value);
        }
      });
    }
    node.innerHTML = opts.innerHTML;
    node.setAttribute('style', style || '');
    document.body.appendChild(node);
    resolve(!!1);
  });
}
function simpleHash(tag) {
  var timestamp = "" + new Date().getTime() / 1000;
  return "iris-" + tag + "-" + parseInt(timestamp, 10);
}
var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  check_input_existence: check_input_existence,
  check_phone_number: check_phone_number,
  validate_email_address: validate_email_address,
  check_captcha: check_captcha,
  check_password: check_password,
  check_username: check_username,
  check_nickname: check_nickname,
  check_fullname: check_fullname,
  check_qq: check_qq,
  check_description: check_description,
  check_sex: check_sex,
  check_birthday: check_birthday,
  check_register_options: check_register_options,
  check_agreement_ids: check_agreement_ids,
  check_profile: check_profile,
  check_if_pwd_equals_confirmed_pwd: check_if_pwd_equals_confirmed_pwd,
  retry: retry,
  set_cookie: set_cookie,
  get_cookie: get_cookie,
  clear_cookie: clear_cookie,
  get_cookie_name: get_cookie_name,
  is_cookie_exist: is_cookie_exist,
  load_script: load_script,
  hasProperty: hasProperty,
  appendDomNode: appendDomNode,
  simpleHash: simpleHash
});

// A class to manage token for CodemaoAuth and business parties.
var CodemaoToken = /** @class */function () {
  function CodemaoToken() {
    this.request = new CodemaoRequest({
      public_headers: __assign({
        'Product-Code': getAuthConfig().product_code,
        Platform: getAuthConfig().platform
      }, PUBLIC_HEADERS)
    });
  }
  CodemaoToken.prototype.dispatch_request = function (options) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.request.dispatch_request(options)];
      });
    });
  };
  // Get the full access token -- 'type access-token'
  CodemaoToken.prototype.get_complete_access_token = function () {
    var token_type = get_cookie(get_cookie_name('token_type'));
    var access_token = get_cookie(get_cookie_name('access'));
    if (is_cookie_exist(token_type) && is_cookie_exist(access_token)) {
      return token_type + " " + access_token;
    } else {
      // Clear the previous access & type cookie.
      var domain = getConfig().domain;
      clear_cookie(get_cookie_name('access'), domain);
      clear_cookie(get_cookie_name('token_type'), domain);
      throw new CodemaoError({
        error_code: ERROR_TYPE.NO_TOKEN,
        message: 'NO Token(cookie might have been expired). Please login.'
      });
    }
  };
  // Get local access token which stored in cookie.
  CodemaoToken.prototype.get_access = function (authorization) {
    return __awaiter(this, undefined, undefined, function () {
      var _a;
      var res;
      var err_1;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.check();
            switch (_a) {
              case 'ACCESS_EXIST':
                return [3 /*break*/, 1];
              case 'REFRESH_EXIST':
                return [3 /*break*/, 2];
              case 'NO_TOKEN':
                return [3 /*break*/, 4];
            }
            return [3 /*break*/, 7];
          case 1:
            // Get the access token directly.
            return [2 /*return*/, this.get_complete_access_token()];
          case 2:
            // Refresh firstly, then get access token.
            return [4 /*yield*/, this.refresh()];
          case 3:
            // Refresh firstly, then get access token.
            _b.sent();
            return [2 /*return*/, this.get_complete_access_token()];
          case 4:
            _b.trys.push([4, 6,, 7]);
            return [4 /*yield*/, this.convert_cookie_to_token(authorization)];
          case 5:
            res = _b.sent();
            this.set(res.data);
            return [2 /*return*/, this.get_complete_access_token()];
          case 6:
            err_1 = _b.sent();
            // Case 2: no token and no cookie or get cookie_invalid
            this.clear();
            throw new CodemaoError({
              error_code: ERROR_TYPE.NO_TOKEN,
              message: 'NO Token. Please login.'
            });
          case 7:
            return [2 /*return*/];
        }
      });
    });
  };
  CodemaoToken.prototype.convert_cookie_to_token = function (authorization) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: TIGER_TOKEN_API.GET_TOKEN_FROM_OLD_COOKIE,
          method: 'post',
          headers: authorization ? {
            Authorization: "Bearer " + authorization
          } : {}
        })];
      });
    });
  };
  // Get local refresh token which stored in cookie.
  CodemaoToken.prototype.get_refresh = function () {
    if (getInitParams().auth_version) {
      if (this.check() === 'NO_TOKEN') {
        throw new CodemaoError({
          error_code: ERROR_TYPE.NO_TOKEN,
          message: 'NO Token. Please login.'
        });
      }
    }
    return get_cookie(get_cookie_name('refresh'));
  };
  // Pass the token to cookie.
  // Every time after auth.login_xxx() & refresh().
  CodemaoToken.prototype.set = function (token) {
    var access = token.access;
    var refresh = token.refresh;
    var domain = getConfig().domain;
    // Set access token to cookie.
    if (access && access.token && access.type && access.expires_in) {
      set_cookie({
        name: get_cookie_name('access'),
        value: access.token,
        domain: domain,
        max_age: access.expires_in
      });
      // Set token type to cookie.
      set_cookie({
        name: get_cookie_name('token_type'),
        value: access.type,
        domain: domain,
        max_age: access.expires_in
      });
    } else {
      console.warn('Unexpected access token response from back-end: ', access);
    }
    // Check if refresh_token exists.
    // Set it to cookie if it exists.
    if (refresh) {
      if (!refresh.token || !refresh.expires_in) {
        console.warn('Unexpected refresh token response from back-end: ', refresh);
      }
      set_cookie({
        name: get_cookie_name('refresh'),
        value: refresh.token,
        domain: domain,
        max_age: refresh.expires_in
      });
    }
  };
  // Refresh token from back-end.
  CodemaoToken.prototype.refresh_token = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          method: 'put',
          url: TIGER_TOKEN_API.REFRESH_TOKEN,
          data: {
            refresh_token: this.get_refresh()
          }
        })];
      });
    });
  };
  // Refresh token from back-end and pass it to cookie.
  CodemaoToken.prototype.refresh = function () {
    return __awaiter(this, undefined, undefined, function () {
      var token_res;
      var err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);
            return [4 /*yield*/, this.refresh_token()];
          case 1:
            token_res = _a.sent();
            this.set(token_res.data);
            return [3 /*break*/, 3];
          case 2:
            err_2 = _a.sent();
            // Clear cookie when refresh_token is invalid.
            if (err_2.error_code === ERROR_TYPE.REFRESH_TOKEN_INVALID) {
              this.clear();
            }
            throw err_2;
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  // Check if it's necessary to refresh token.
  CodemaoToken.prototype.check = function () {
    // access_token is not expired
    if (is_cookie_exist(get_cookie(get_cookie_name('access'))) && is_cookie_exist(get_cookie(get_cookie_name('token_type')))) {
      return 'ACCESS_EXIST';
    }
    // access_token expired, refresh_token is not expired.
    if (is_cookie_exist(get_cookie(get_cookie_name('refresh')))) {
      return 'REFRESH_EXIST';
    }
    // both of them are expired.
    // or,
    // someone tries to request the api without login.
    return 'NO_TOKEN';
  };
  // Clear local token through setting cookie.
  CodemaoToken.prototype.clear = function () {
    var domain = getConfig().domain;
    clear_cookie(get_cookie_name('access'), domain);
    clear_cookie(get_cookie_name('token_type'), domain);
    clear_cookie(get_cookie_name('refresh'), domain);
  };
  return CodemaoToken;
}();
function retry_when_token_err(retries, fn) {
  return __awaiter(this, undefined, undefined, function () {
    var result;
    var err_3;
    var error_code;
    var token;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 5]);
          return [4 /*yield*/, fn()];
        case 1:
          result = _a.sent();
          return [2 /*return*/, result];
        case 2:
          err_3 = _a.sent();
          error_code = err_3.error_code;
          if (!(error_code === ERROR_TYPE.TOKEN_INVALID && retries > 1)) {
            return [3 /*break*/, 4];
          }
          token = new CodemaoToken();
          return [4 /*yield*/, token.refresh()];
        case 3:
          _a.sent();
          return [2 /*return*/, retry_when_token_err(retries - 1, fn)];
        case 4:
          throw err_3;
        case 5:
          return [2 /*return*/];
      }
    });
  });
}
var _instance;
function init(params) {
  if (!params.appid) {
    params.appid = '';
  }
  initParamsValidateHelper(params);
  setAuthConfig(params);
  if (['pid', 'appid', 'product_code', 'platform'].every(function (param) {
    return hasProperty(param, getAuthConfig());
  })) {
    _instance = new CodemaoAuth();
    return _instance;
  } else {
    throw new Error('Auth init fail.Check init params.');
  }
}
/**
 * @function 根据断言判断是否合并header更新信息
 * @param originalHeader         required 被merge header
 * @param assertion              断言
 * @param specifiedNewHeader     更多指定信息
 */
var mergeHeaderConf = function (originalHeader, assertion, specifiedNewHeader) {
  return assertion !== false ? __assign(__assign(__assign({}, originalHeader), {
    'X-Captcha-Id': getAuthConfig().appid || ''
  }), specifiedNewHeader) : originalHeader;
};
// TODO hi,buddys！后续希望大家不要再使用英文写注释了。
/**
 *
 * en: Returns the CodemaoAuth object. You must initialize the CodemaoAuth object
 * with iris.auth.init() before calling this method.
 *
 * zh-cn: 使用前须先通过iris.auth.init实例一个CodemaoAuth对象
 *
 * @export
 * @returns
 */
function get_auth_instance() {
  // 没有实例
  if (!_instance) {
    throw new CodemaoError({
      message: 'Iris SDK error: Please run init() correctly, before get_auth_instance().'
    });
  }
  return _instance;
}
var retries_when_got_token_err = 2;
var CodemaoAuth = /** @class */function () {
  function CodemaoAuth() {
    var _a;
    this.request = new CodemaoRequest({
      public_headers: __assign(__assign({
        'Product-Code': getAuthConfig().product_code,
        pid: getAuthConfig().pid,
        Platform: getAuthConfig().platform
      }, PUBLIC_HEADERS), (_a = getInitParams()) === null || _a === undefined ? undefined : _a.custom_headers)
    });
    this.token = new CodemaoToken();
  }
  /**
   * Dispatch a request with options.
   *
   * @param options
   * @returns {Promise<{}>}
   */
  CodemaoAuth.prototype.dispatch_request = function (options) {
    return __awaiter(this, undefined, undefined, function () {
      var _a;
      var _b;
      var _this = this;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            if (!(options.with_token && getInitParams().auth_version)) {
              return [3 /*break*/, 2];
            }
            options.headers = options.headers || {};
            // eslint-disable-next-line require-atomic-updates
            _a = options.headers;
            _b = 'Authorization';
            return [4 /*yield*/, this.token.get_access()];
          case 1:
            // eslint-disable-next-line require-atomic-updates
            _a[_b] = _c.sent();
            return [2 /*return*/, retry_when_token_err(retries_when_got_token_err, function () {
              return __awaiter(_this, undefined, undefined, function () {
                return __generator(this, function (_a) {
                  return [2 /*return*/, this.request.dispatch_request(options)];
                });
              });
            })];
          case 2:
            return [2 /*return*/, this.request.dispatch_request(options)];
        }
      });
    });
  };
  /**
   * @function     发送邮箱注册验证码
   * @param email  待注册邮箱
   * @param ticket 凭证
   */
  CodemaoAuth.prototype.email_register_send_captcha = function (email, ticket) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        validate_email_address(email);
        return [2 /*return*/, this.dispatch_request({
          url: Api.SEND_EMAIL_REGISTERATION_CAPTCHA,
          method: 'post',
          data: {
            email: email
          },
          headers: mergeHeaderConf({
            'X-Captcha-Ticket': ticket
          })
        })];
      });
    });
  };
  /**
   * @function        验证邮箱注册验证码
   * @param  email    待注册邮箱
   * @param  captcha  邮箱注册验证码
   */
  CodemaoAuth.prototype.validate_email_register_captcha = function (email, captcha) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        validate_email_address(email);
        return [2 /*return*/, this.dispatch_request({
          url: Api.VERIFY_EMAIL_REGISTERATION_CAPTCHA,
          method: 'post',
          data: {
            email: email,
            captcha: captcha
          }
        })];
      });
    });
  };
  /**
   * @function 邮箱注册账号
   * @param    request_body {captchaTicket: string, password: string, rePassword: string}  待注册邮箱
   */
  CodemaoAuth.prototype.register_email = function (register_params, pid) {
    return __awaiter(this, undefined, undefined, function () {
      var captchaTicket;
      var password;
      var rePassword;
      return __generator(this, function (_a) {
        captchaTicket = register_params.captchaTicket;
        password = register_params.password;
        rePassword = register_params.rePassword;
        check_password(password);
        check_password(rePassword);
        check_if_pwd_equals_confirmed_pwd(password, rePassword);
        return [2 /*return*/, this.dispatch_request({
          url: Api.REGISTER_BY_EMAIL,
          method: 'post',
          data: {
            captchaTicket: captchaTicket,
            password: password,
            rePassword: rePassword,
            pid: pid
          }
        })];
      });
    });
  };
  /**
   * @function   获取所有协议列表
   */
  CodemaoAuth.prototype.get_agreements = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.GET_AGREEMENTS,
          method: 'get'
        })];
      });
    });
  };
  /**
   * @function   获取需签署的协议列表
   */
  CodemaoAuth.prototype.get_agreements_need_sign = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.GET_AGREEMENTS_NEED_SIGN,
          method: 'get'
        })];
      });
    });
  };
  /**
   * @function   签署协议
   */
  CodemaoAuth.prototype.sign_agreements = function (agreement_ids, pid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.SIGN_AGREEMENTS,
          method: 'post',
          data: {
            agreement_ids: agreement_ids,
            pid: pid
          }
        })];
      });
    });
  };
  /**
   * @function  查询最新协议-免登录开放接口
   * @param     codeList 协议code集合
   * @param     pid      业务方pid
   */
  CodemaoAuth.prototype.find_latest_protocol_list = function (codeList, pid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.FIND_LATEST_PROTOCOL_LIST,
          method: 'post',
          data: {
            codeList: codeList,
            pid: pid
          }
        })];
      });
    });
  };
  /**
   * @function  请求语音验证码
   * @param     phone_number 手机号码
   * @param     type         类型
   * @param     ticket       图形验证码ticket
   */
  CodemaoAuth.prototype.send_voice_captcha = function (captcha_params, ticket, oauth_ticket) {
    return __awaiter(this, undefined, undefined, function () {
      var phone_number;
      var type;
      var register_res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            phone_number = captcha_params.phone_number;
            type = captcha_params.type;
            check_phone_number(phone_number);
            return [4 /*yield*/, this.dispatch_request({
              url: Api.VOICE_CAPTCHA,
              method: 'post',
              data: {
                phone_number: phone_number,
                type: type.toUpperCase(),
                oauth_ticket: oauth_ticket
              },
              headers: mergeHeaderConf({
                'X-Captcha-Ticket': ticket
              })
            })];
          case 1:
            register_res = _a.sent();
            if (register_res.status === 200) {
              this.token.set(register_res.data.auth.token);
            }
            return [2 /*return*/, register_res];
        }
      });
    });
  };
  /**
   * 发送手机号码注册验证码
   *
   * @param phone_number
   * @param ticket
   * @param pid
   */
  CodemaoAuth.prototype.register_send_captcha = function (phone_number, ticket, pid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        return [2 /*return*/, this.dispatch_request({
          url: Api.REGISTER_SEND_CAPTCHA,
          method: 'post',
          data: {
            phone_number: phone_number,
            pid: pid
          },
          headers: mergeHeaderConf({
            'X-Captcha-Ticket': ticket
          })
        })];
      });
    });
  };
  /**
   * 手机号码注册
   *
   * @param options
   * @param specific_pid 可选参数，以特定的pid进行这次请求
   */
  CodemaoAuth.prototype.register = function (options, specific_pid) {
    return __awaiter(this, undefined, undefined, function () {
      var pid;
      var register_res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            // TODO: 该方法主要校验存在性，check_register_options已做，不需要
            check_input_existence(options, ['phone_number', 'captcha', 'password', 'agreement_ids']);
            check_register_options(options);
            pid = specific_pid || getAuthConfig().pid;
            return [4 /*yield*/, this.dispatch_request({
              url: Api.REGISTER,
              method: 'post',
              data: __assign(__assign({}, options), {
                pid: pid
              })
            })];
          case 1:
            register_res = _a.sent();
            if (register_res.status === 200) {
              this.token.set(register_res.data.auth.token);
            }
            return [2 /*return*/, register_res];
        }
      });
    });
  };
  /**
   * 发送登录验证码
   *
   * @param phone_number
   * @param ticket
   * @param pid
   */
  CodemaoAuth.prototype.login_captcha = function (phone_number, ticket, pid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        return [2 /*return*/, this.dispatch_request({
          url: Api.LOGIN_CAPTCHA,
          method: 'post',
          data: {
            phone_number: phone_number,
            pid: pid
          },
          headers: mergeHeaderConf({
            'X-Captcha-Ticket': ticket
          })
        })];
      });
    });
  };
  /**
   * 手机登录
   *
   * @param phone_number
   * @param captcha
   * @param specific_pid 可选参数，以特定的pid进行这次请求
   */
  CodemaoAuth.prototype.login_phone = function (phone_number, captcha, specific_pid, agreement_ids) {
    return __awaiter(this, undefined, undefined, function () {
      var pid;
      var login_res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            check_phone_number(phone_number);
            check_captcha(captcha);
            pid = specific_pid || getAuthConfig().pid;
            return [4 /*yield*/, this.dispatch_request({
              url: Api.LOGIN_PHONE,
              method: 'post',
              data: {
                phone_number: phone_number,
                captcha: captcha,
                pid: pid,
                agreement_ids: agreement_ids || [-1]
              }
            })];
          case 1:
            login_res = _a.sent();
            if (login_res.status === 200) {
              this.token.set(login_res.data.auth.token);
            }
            return [2 /*return*/, login_res];
        }
      });
    });
  };
  /**
   * 账号登录
   *
   * @param identity
   * @param password
   * @param specific_pid 可选参数，以特定的pid进行这次请求
   */
  CodemaoAuth.prototype.login_account = function (identity, password, specific_pid, agreement_ids) {
    return __awaiter(this, undefined, undefined, function () {
      var pid;
      var login_res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            pid = specific_pid || getAuthConfig().pid;
            return [4 /*yield*/, this.dispatch_request({
              url: Api.LOGIN_ACCOUNT,
              method: 'post',
              data: {
                identity: identity,
                password: password,
                pid: pid,
                agreement_ids: agreement_ids || [-1]
              }
            })];
          case 1:
            login_res = _a.sent();
            if (login_res.status === 200) {
              this.token.set(login_res.data.auth.token);
            }
            return [2 /*return*/, login_res];
        }
      });
    });
  };
  /**
   * 微信网页端登录
   *
   * @param code
   * @param specific_pid 可选参数，以特定的pid进行这次请求
   * @param appid 可选,不传默认开放平台网页应用登录, 也可传编程猫下各公众号appid，需联系后端账号负责人配置
   */
  CodemaoAuth.prototype.login_wechat = function (code, agreement_ids, specific_pid, appid) {
    return __awaiter(this, undefined, undefined, function () {
      var pid;
      var login_res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            pid = specific_pid || getAuthConfig().pid;
            return [4 /*yield*/, this.dispatch_request({
              url: Api.LOGIN_WECHAT,
              method: 'post',
              data: {
                code: code,
                pid: pid,
                appid: appid,
                agreement_ids: agreement_ids || [-1]
              }
            })];
          case 1:
            login_res = _a.sent();
            if (login_res.status === 200 && login_res.data.auth) {
              this.token.set(login_res.data.auth.token);
            }
            return [2 /*return*/, login_res];
        }
      });
    });
  };
  /**
   * @function QQ网页端登录
   * @param code
   * @param specific_pid 可选参数，以特定的pid进行这次请求
   */
  CodemaoAuth.prototype.login_qq = function (code, agreement_ids, specific_pid) {
    return __awaiter(this, undefined, undefined, function () {
      var pid;
      var login_res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            pid = specific_pid || getAuthConfig().pid;
            return [4 /*yield*/, this.dispatch_request({
              url: Api.LOGIN_QQ,
              method: 'post',
              data: {
                code: code,
                pid: pid,
                agreement_ids: agreement_ids || [-1]
              }
            })];
          case 1:
            login_res = _a.sent();
            if (login_res.status === 200 && login_res.data.auth) {
              this.token.set(login_res.data.auth.token);
            }
            return [2 /*return*/, login_res];
        }
      });
    });
  };
  /**
   * 发送第三方绑定手机验证码
   *
   * @param phone_number
   * @param oauth_ticket
   */
  CodemaoAuth.prototype.bind_phone_for_third_party = function (phone_number, oauth_ticket) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        return [2 /*return*/, this.dispatch_request({
          url: Api.BIND_PHONE_FOR_THIRD_PARTY,
          method: 'post',
          data: {
            phone_number: phone_number,
            oauth_ticket: oauth_ticket
          }
        })];
      });
    });
  };
  /**
   * 第三方登录（激活）
   *
   * @param ticket
   * @param captcha
   */
  CodemaoAuth.prototype.create_user_for_third_party = function (oauth_ticket, captcha, agreement_ids) {
    return __awaiter(this, undefined, undefined, function () {
      var login_res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (captcha) {
              check_captcha(captcha);
            }
            return [4 /*yield*/, this.dispatch_request({
              url: Api.CREATE_USER_FOR_THIRD_PARTY,
              method: 'post',
              data: captcha ? {
                oauth_ticket: oauth_ticket,
                captcha: captcha,
                agreement_ids: agreement_ids || [-1]
              } : {
                oauth_ticket: oauth_ticket,
                agreement_ids: agreement_ids || [-1]
              }
            })];
          case 1:
            login_res = _a.sent();
            if (login_res.status === 200) {
              this.token.set(login_res.data.auth.token);
            }
            return [2 /*return*/, login_res];
        }
      });
    });
  };
  /**
   * 退出登录
   *
   */
  CodemaoAuth.prototype.logout = function () {
    return __awaiter(this, undefined, undefined, function () {
      var res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.dispatch_request({
              url: Api.LOGOUT,
              method: 'post',
              data: {
                refresh_token: this.token.get_refresh()
              },
              with_token: true
            })];
          case 1:
            res = _a.sent();
            if (res) {
              this.token.clear();
            }
            return [2 /*return*/, res];
        }
      });
    });
  };
  /**
   * 发送绑定手机验证码
   *
   * @param phone_number
   * @param pid
   */
  CodemaoAuth.prototype.bind_phone_captcha = function (phone_number, ticket, pid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        return [2 /*return*/, this.dispatch_request({
          url: Api.BIND_PHONE_CAPTCHA,
          method: 'post',
          data: {
            phone_number: phone_number,
            pid: pid
          },
          headers: mergeHeaderConf({
            'X-Captcha-Ticket': ticket
          }),
          with_token: true
        })];
      });
    });
  };
  /**
   * 绑定手机
   *
   * @param phone_number
   * @param captcha
   */
  CodemaoAuth.prototype.bind_phone = function (phone_number, captcha) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        check_captcha(captcha);
        return [2 /*return*/, this.dispatch_request({
          url: Api.BIND_PHONE,
          method: 'patch',
          data: {
            phone_number: phone_number,
            captcha: captcha
          },
          with_token: true
        })];
      });
    });
  };
  /**
   * 检测输入手机是否当前绑定手机
   *
   * @param phone_number
   */
  CodemaoAuth.prototype.bind_phone_check = function (phone_number) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        return [2 /*return*/, this.dispatch_request({
          url: Api.BIND_PHONE_CHECK,
          method: 'get',
          params: {
            phone_number: phone_number
          },
          with_token: true
        })];
      });
    });
  };
  /**
   * 发送更新绑定手机的验证码
   *
   * @param phone_number
   * @param old_phone_number
   * @param pid
   */
  CodemaoAuth.prototype.rebind_phone_captcha = function (phone_number, old_phone_number, pid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        check_phone_number(old_phone_number);
        return [2 /*return*/, this.dispatch_request({
          url: Api.REBIND_PHONE_CAPTCHA,
          method: 'post',
          data: {
            phone_number: phone_number,
            old_phone_number: old_phone_number,
            pid: pid
          },
          with_token: true
        })];
      });
    });
  };
  /**
   * 更新绑定手机
   *
   * @param phone_number
   * @param captcha
   */
  CodemaoAuth.prototype.rebind_phone = function (phone_number, captcha) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        check_captcha(captcha);
        return [2 /*return*/, this.dispatch_request({
          url: Api.REBIND_PHONE,
          method: 'patch',
          data: {
            phone_number: phone_number,
            captcha: captcha
          },
          with_token: true
        })];
      });
    });
  };
  /**
   * 发送重置密码的验证码
   *
   * @param phone_number
   * @param ticket
   * @param pid
   */
  CodemaoAuth.prototype.reset_pwd_captcha = function (phone_number, ticket, pid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        return [2 /*return*/, this.dispatch_request({
          url: Api.RESET_PWD_CAPTCHA,
          method: 'post',
          data: {
            phone_number: phone_number,
            pid: pid
          },
          headers: mergeHeaderConf({
            'X-Captcha-Ticket': ticket
          })
        })];
      });
    });
  };
  /**
   * 检测并重置密码ticket
   *
   * @param phone_number
   * @param captcha
   */
  CodemaoAuth.prototype.reset_pwd_token = function (phone_number, captcha) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        check_captcha(captcha);
        return [2 /*return*/, this.dispatch_request({
          url: Api.RESET_PWD_TOKEN,
          method: 'post',
          data: {
            phone_number: phone_number,
            captcha: captcha
          }
        })];
      });
    });
  };
  /**
   * 重置密码
   *
   * @param ticket
   * @param pwd
   * @param pwd_confirm
   */
  CodemaoAuth.prototype.reset_pwd = function (ticket, pwd, pwd_confirm) {
    return __awaiter(this, undefined, undefined, function () {
      var request_options;
      var token;
      var err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            check_password(pwd);
            check_password(pwd_confirm);
            check_if_pwd_equals_confirmed_pwd(pwd, pwd_confirm);
            request_options = {
              url: Api.RESET_PWD,
              method: 'patch',
              data: {
                ticket: ticket,
                password: pwd,
                confirm_password: pwd_confirm
              }
            };
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.token.get_access()];
          case 2:
            token = _a.sent();
            return [3 /*break*/, 4];
          case 3:
            err_1 = _a.sent();
            token = '';
            return [3 /*break*/, 4];
          case 4:
            if (token !== '') {
              Object.assign(request_options, {
                with_token: true
              });
            }
            return [2 /*return*/, this.dispatch_request(request_options)];
        }
      });
    });
  };
  /**
   * 通用验证码之发送验证码
   *
   * @param {string} phone_number
   * @param {string} ticket
   * @param {string} pid
   */
  CodemaoAuth.prototype.send_universal_captcha = function (phone_number, ticket, pid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        return [2 /*return*/, this.dispatch_request({
          url: Api.SEND_UNIVERSAL_CAPTCHA,
          method: 'post',
          data: {
            phone_number: phone_number,
            pid: pid
          },
          headers: mergeHeaderConf({
            'X-Captcha-Ticket': ticket
          })
        })];
      });
    });
  };
  /**
   * 通用验证码之校验验证码
   *
   * @param {string} phone_number
   * @param {string} captcha
   */
  CodemaoAuth.prototype.verify_universal_captcha = function (phone_number, captcha) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        check_captcha(captcha);
        return [2 /*return*/, this.dispatch_request({
          url: Api.VERIFY_UNIVERSAL_CAPTCHA,
          method: 'post',
          data: {
            phone_number: phone_number,
            captcha: captcha
          }
        })];
      });
    });
  };
  /**
   * 发送登录验证码(静默注册版本)
   *
   * @param {string} phone_number
   * @param {string} ticket
   * @param {string} pid
   */
  CodemaoAuth.prototype.login_captcha_silence = function (phone_number, ticket, pid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        return [2 /*return*/, this.dispatch_request({
          url: Api.LOGIN_CAPTCHA_SILENCE,
          method: 'post',
          data: {
            phone_number: phone_number,
            pid: pid
          },
          headers: mergeHeaderConf({
            'X-Captcha-Ticket': ticket
          })
        })];
      });
    });
  };
  /**
   * 手机登录(静默注册版)
   *
   * @param {string} phone_number
   * @param {string} captcha
   * @param {string} specific_pid 特定的pid
   */
  // public async login_phone_silence(phone_number: any, captcha: any, specific_pid: any): Promise<SilenceLoginResponse>;
  // public async login_phone_silence(
  //   login_info: {
  //     phone_number: string;
  //     captcha: string;
  //     agreement_ids?: number[];
  //   },
  //   specific_pid?: string,
  // ): Promise<SilenceLoginResponse>;
  CodemaoAuth.prototype.login_phone_silence = function (first_param, second_param, third_param, agreement_ids) {
    return __awaiter(this, undefined, undefined, function () {
      var phone_number;
      var captcha;
      var
      // agreement_ids = undefined,
      specific_pid;
      var pid;
      var login_res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            phone_number = '';
            captcha = '';
            specific_pid = '';
            if (typeof first_param === 'string') {
              phone_number = first_param || '';
              captcha = second_param || '';
              specific_pid = third_param || '';
            }
            if (typeof first_param === 'object') {
              phone_number = (first_param === null || first_param === undefined ? undefined : first_param.phone_number) || '';
              captcha = (first_param === null || first_param === undefined ? undefined : first_param.captcha) || '';
              // agreement_ids = first_param?.agreement_ids || undefined;
              agreement_ids = first_param === null || first_param === undefined ? undefined : first_param.agreement_ids;
              specific_pid = second_param || '';
            }
            check_phone_number(phone_number);
            check_captcha(captcha);
            pid = specific_pid || getAuthConfig().pid;
            return [4 /*yield*/, this.dispatch_request({
              url: Api.LOGIN_PHONE_SILENCE,
              method: 'post',
              data: {
                phone_number: phone_number,
                captcha: captcha,
                pid: pid,
                agreement_ids: agreement_ids || [-1]
              }
            })];
          case 1:
            login_res = _a.sent();
            if (login_res.status === 200) {
              this.token.set(login_res.data.auth.token);
            }
            return [2 /*return*/, login_res];
        }
      });
    });
  };
  CodemaoAuth.prototype.get_access_token = function (authorization) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.token.get_access(authorization)];
      });
    });
  };
  CodemaoAuth.prototype.request_with_token = function (options) {
    return __awaiter(this, undefined, undefined, function () {
      var token_options;
      return __generator(this, function (_a) {
        token_options = {
          with_token: true,
          without_base_url: true
        };
        return [2 /*return*/, this.dispatch_request(Object.assign(options, token_options))];
      });
    });
  };
  /**
   * 设置用户名
   *
   * @param username
   */
  CodemaoAuth.prototype.set_username = function (username) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_username(username);
        return [2 /*return*/, this.dispatch_request({
          url: Api.SET_USERNAME,
          method: 'patch',
          data: {
            username: username
          },
          with_token: true
        })];
      });
    });
  };
  /**
   * 设置初始密码
   *
   * @param pwd
   * @param pwd_confirm
   */
  CodemaoAuth.prototype.init_password = function (pwd, pwd_confirm) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_password(pwd);
        check_password(pwd_confirm);
        check_if_pwd_equals_confirmed_pwd(pwd, pwd_confirm);
        return [2 /*return*/, this.dispatch_request({
          url: Api.INIT_PASSWORD,
          method: 'patch',
          data: {
            password: pwd,
            confirm_password: pwd_confirm
          },
          with_token: true
        })];
      });
    });
  };
  /**
   * 更新密码（通过提供旧密码）
   *
   * @param old_pwd
   * @param new_pwd
   * @param new_pwd_confirm
   */
  CodemaoAuth.prototype.change_pwd_by_old = function (old_pwd, new_pwd, new_pwd_confirm) {
    return __awaiter(this, undefined, undefined, function () {
      var res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            // U.check_password(old_pwd);
            check_password(new_pwd);
            check_password(new_pwd_confirm);
            check_if_pwd_equals_confirmed_pwd(new_pwd, new_pwd_confirm);
            return [4 /*yield*/, this.dispatch_request({
              url: Api.CHANGE_PWD_BY_OLD,
              method: 'patch',
              data: {
                old_password: old_pwd,
                password: new_pwd,
                confirm_password: new_pwd_confirm
              },
              with_token: true
            })];
          case 1:
            res = _a.sent();
            if (res) {
              this.token.clear();
            }
            return [2 /*return*/, res];
        }
      });
    });
  };
  /**
   * 发送更新密码的验证码
   *
   * @param phone_number
   * @param pid
   */
  CodemaoAuth.prototype.change_pwd_by_phone_captcha = function (phone_number, pid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        check_phone_number(phone_number);
        return [2 /*return*/, this.dispatch_request({
          url: Api.CHNAGE_PWD_BY_PHONE_CAPTCHA,
          method: 'post',
          data: {
            phone_number: phone_number,
            pid: pid
          },
          with_token: true
        })];
      });
    });
  };
  /**
   * 更新密码（通过手机）
   *
   * @param phone_number
   * @param captcha
   * @param pwd
   */
  CodemaoAuth.prototype.change_pwd_by_phone = function (phone_number, captcha, pwd) {
    return __awaiter(this, undefined, undefined, function () {
      var res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            check_phone_number(phone_number);
            check_captcha(captcha);
            check_password(pwd);
            return [4 /*yield*/, this.dispatch_request({
              url: Api.CHANGE_PWD_BY_PHONE,
              method: 'patch',
              data: {
                phone_number: phone_number,
                captcha: captcha,
                password: pwd
              },
              with_token: true
            })];
          case 1:
            res = _a.sent();
            if (res) {
              this.token.clear();
            }
            return [2 /*return*/, res];
        }
      });
    });
  };
  /**
   * 更新用户信息
   *
   * @param profile
   */
  CodemaoAuth.prototype.set_profile = function (profile) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        if (profile) {
          check_input_existence(profile, ['nickname', 'avatar_url', 'fullname', 'birthday', 'sex', 'qq', 'description', 'grade']);
          check_profile(profile);
        }
        return [2 /*return*/, this.dispatch_request({
          url: Api.SET_PROFILE,
          method: 'patch',
          data: __assign({}, profile),
          with_token: true
        })];
      });
    });
  };
  /**
   * 第三方服务绑定状态
   *
   */
  CodemaoAuth.prototype.check_bind_for_third_party = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.CHECK_BIND_FOR_THIRD_PARTY,
          method: 'get',
          with_token: true
        })];
      });
    });
  };
  /**
   * 绑定微信
   *
   * @param code 第三方授权后会在回调地址携带code的参数
   * @param appid 可选,不传默认开放平台网页应用登录, 也可传编程猫下各公众号appid，需联系后端账号负责人配置
   */
  CodemaoAuth.prototype.bind_wechat = function (code, appid) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.BIND_WECHAT,
          method: 'post',
          data: {
            code: code,
            appid: appid
          },
          with_token: true
        })];
      });
    });
  };
  /**
   * 解绑微信
   *
   */
  CodemaoAuth.prototype.unbind_wechat = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.UNBIND_WECHAT,
          method: 'patch',
          with_token: true
        })];
      });
    });
  };
  /**
   * 绑定QQ
   *
   */
  CodemaoAuth.prototype.bind_qq = function (code, pid, agreement_ids) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.BIND_QQ,
          method: 'post',
          data: {
            code: code,
            agreement_ids: agreement_ids
          },
          with_token: true
        })];
      });
    });
  };
  /**
   * 解绑QQ
   *
   */
  CodemaoAuth.prototype.unbind_qq = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.UNBIND_QQ,
          method: 'patch',
          with_token: true
        })];
      });
    });
  };
  /**
   * 获取基本用户信息
   *
   */
  CodemaoAuth.prototype.get_profile = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.GET_PROFILE,
          method: 'get',
          with_token: true
        })];
      });
    });
  };
  /**
   * 获取主账号信息（私密信息）
   */
  CodemaoAuth.prototype.get_auth = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.GET_AUTH,
          method: 'get',
          with_token: true
        })];
      });
    });
  };
  /**
   * 极验账号登录
   *
   * @param {string} identity 用户的标识，支持传用户名，手机号，email
   * @param {string} password 登录密码
   * @param {string} pid 产品对外id
   * @param {string} auth_version Auth版本的标识，用于兼容
   * @param {string} ticket
   */
  CodemaoAuth.prototype.login_account_ticket = function (identity, password, pid, ticket, agreement_ids) {
    return __awaiter(this, undefined, undefined, function () {
      var login_res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.dispatch_request({
              url: Api.LOGIN_ACCOUNT_TICKET,
              method: 'post',
              data: {
                identity: identity,
                password: password,
                pid: pid,
                agreement_ids: agreement_ids || [-1]
              },
              headers: mergeHeaderConf({
                'X-Captcha-Ticket': ticket
              })
            })];
          case 1:
            login_res = _a.sent();
            if (login_res.status === 200) {
              this.token.set(login_res.data.auth.token);
            }
            return [2 /*return*/, login_res];
        }
      });
    });
  };
  CodemaoAuth.prototype.get_grade_list = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.dispatch_request({
          url: Api.GET_GRADE_LIST,
          method: 'get'
        })];
      });
    });
  };
  return CodemaoAuth;
}();
var auth = /*#__PURE__*/Object.freeze({
  __proto__: null,
  init: init,
  get_auth_instance: get_auth_instance,
  CodemaoAuth: CodemaoAuth
});
var getFingerPrint = function () {
  return __awaiter(undefined, undefined, undefined, function () {
    return __generator(this, function (_a) {
      return [2 /*return*/, new Promise(function (resolve) {
        var getHash = function () {
          if (typeof Fingerprint2 !== 'undefined') {
            Fingerprint2.get(function (components) {
              var values = components.map(function (component) {
                return component.value;
              });
              resolve(Fingerprint2.x64hash128(values.join(''), 31));
            });
          } else {
            resolve('');
          }
        };
        if (window.requestIdleCallback) {
          window.requestIdleCallback(getHash);
        } else {
          setTimeout(getHash, 500);
        }
      })];
    });
  });
};
var BasicCaptcha = /** @class */function () {
  function BasicCaptcha(opt) {
    this.options = opt;
  }
  return BasicCaptcha;
}();
var captchaResourceUrls = {
  FINGER_PRINT_2: 'https://static.codemao.cn/iris/fingerprint2.min.js',
  // 极验
  GEETEST: 'https://static.codemao.cn/arch/gt.js',
  // 腾讯
  TENCENT: 'https://turing.captcha.qcloud.com/TCaptcha.js',
  // 数美
  NEXTDATA: 'https://static.codemao.cn/arch/smcp.min.js',
  // 数美（连接新加机房）
  // NEXTDATA_ABROAD: 'https://static.codemao.cn/arch/smcp.min.js',
  // 网易
  NETEASE: 'https://static.codemao.cn/arch/netease-load.min.js',
  // 阿里云
  ALIYUN: 'https://g.alicdn.com/AWSC/AWSC/awsc.js'
};
var fallbackParamsMaker = function (reminder, errorObject) {
  return {
    message: reminder,
    error: errorObject
  };
};
var defaultGeetestInitOptions = {
  product: 'bind',
  width: '300px'
};
var GeetestCaptcha = /** @class */function (_super) {
  __extends(GeetestCaptcha, _super);
  function GeetestCaptcha(options) {
    var _this = _super.call(this, options) || this;
    _this.product_id = options.product_id || '';
    _this.dom_id = options.dom_id;
    _this.success_callback = options.success_callback;
    _this.init_options = options.init_options;
    _this.fail_callback = options.fail_callback;
    _this.close_callback = options.close_callback;
    return _this;
  }
  GeetestCaptcha.prototype.get_init_params = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, PlatformApi.dispatch_request({
          url: PLATFORM_CAPTCHA_API.GET_GEETEST_PARAMS,
          method: 'post',
          data: {
            appid: this.product_id
          }
        })];
      });
    });
  };
  GeetestCaptcha.prototype.init_geetest = function (options) {
    return __awaiter(this, undefined, undefined, function () {
      var params;
      var data;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, retry(3, function () {
              return __awaiter(_this, undefined, undefined, function () {
                return __generator(this, function (_a) {
                  return [2 /*return*/, this.get_init_params()];
                });
              });
            })];
          case 1:
            params = _a.sent();
            data = params.data;
            return [2 /*return*/, new Promise(function (resolve) {
              initGeetest(__assign({
                gt: data.gt,
                challenge: data.challenge,
                offline: !data.success,
                new_captcha: data.new_captcha
              }, options), function (captcha_obj) {
                captcha_obj.onReady(function () {
                  resolve(captcha_obj);
                }).onSuccess(function () {
                  return __awaiter(_this, undefined, undefined, function () {
                    var ticket_res;
                    var error_1;
                    return __generator(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          _a.trys.push([0, 2,, 3]);
                          return [4 /*yield*/, this.get_ticket()];
                        case 1:
                          ticket_res = _a.sent();
                          this.success_callback(ticket_res.data.ticket, this.product_id);
                          return [3 /*break*/, 3];
                        case 2:
                          error_1 = _a.sent();
                          if (this.fail_callback) {
                            this.fail_callback(error_1);
                          }
                          return [3 /*break*/, 3];
                        case 3:
                          return [2 /*return*/];
                      }
                    });
                  });
                }).onError(function () {
                  if (_this.fail_callback) {
                    _this.fail_callback();
                  }
                  throw new Error('Got error in Geetest captcha.');
                }).onClose(function () {
                  if (!_this.captcha_obj.getValidate() && _this.close_callback) {
                    _this.close_callback();
                  }
                });
              });
            })];
        }
      });
    });
  };
  GeetestCaptcha.prototype.init = function () {
    return __awaiter(this, undefined, undefined, function () {
      var init_options;
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            init_options = this.init_options || defaultGeetestInitOptions;
            return [4 /*yield*/, load_script(captchaResourceUrls.GEETEST, 'geetest-captcha')];
          case 1:
            _b.sent();
            _a = this;
            return [4 /*yield*/, this.init_geetest(init_options)];
          case 2:
            _a.captcha_obj = _b.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  GeetestCaptcha.prototype.show = function () {
    // Show the captcha.
    if (this.init_options && this.init_options.product !== 'bind') {
      this.captcha_obj.appendTo("#" + this.dom_id);
      // When product is 'bind', it need to use verify() to show the captcha.
      return;
    } else {
      this.captcha_obj.verify();
    }
  };
  GeetestCaptcha.prototype.get_ticket = function () {
    return __awaiter(this, undefined, undefined, function () {
      var result;
      return __generator(this, function (_a) {
        result = this.captcha_obj.getValidate();
        return [2 /*return*/, PlatformApi.dispatch_request({
          url: PLATFORM_CAPTCHA_API.CHECK_AND_GET_GEETEST_TICKET,
          method: 'post',
          data: {
            geetest_challenge: result.geetest_challenge,
            geetest_validate: result.geetest_validate,
            geetest_seccode: result.geetest_seccode,
            appid: this.product_id
          }
        })];
      });
    });
  };
  GeetestCaptcha.create = function (create_options, extra) {
    var dom_id = create_options.dom_id;
    var success_callback = create_options.success_callback;
    var fail_callback = create_options.fail_callback;
    var close_callback = create_options.close_callback;
    var specified_appid = create_options.product_id;
    var init_options = create_options.init_options;
    return new GeetestCaptcha({
      product_id: specified_appid || extra.appid,
      dom_id: dom_id,
      success_callback: success_callback,
      fail_callback: fail_callback,
      close_callback: close_callback,
      init_options: init_options
    });
  };
  return GeetestCaptcha;
}(BasicCaptcha);

// 数美文档 📖 https://help.ishumei.com/docs/tw/captcha/WEB
var defaultSMInitOptions = {
  product: 'popup',
  width: 300
};
var SMCaptcha = /** @class */function (_super) {
  __extends(SMCaptcha, _super);
  function SMCaptcha(opts) {
    var _this = _super.call(this, opts) || this;
    _this.instance = new Object();
    _this.options = opts;
    _this.instance = new Object();
    return _this;
  }
  SMCaptcha.prototype.init = function () {
    return __awaiter(this, undefined, undefined, function () {
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!(typeof initSMCaptcha === 'undefined')) {
              return [3 /*break*/, 2];
            }
            return [4 /*yield*/, load_script(captchaResourceUrls.NEXTDATA, 'SM_GT')];
          case 1:
            _b.sent();
            _b.label = 2;
          case 2:
            // TODO: 需要校验dom_id等与产品模式的关系？
            _a = this;
            return [4 /*yield*/, this.init_smCaptcha()];
          case 3:
            // TODO: 需要校验dom_id等与产品模式的关系？
            _a.instance = _b.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  SMCaptcha.prototype.init_smCaptcha = function () {
    return __awaiter(this, undefined, undefined, function () {
      var _a;
      var dom_id;
      var success_callback;
      var fail_callback;
      var close_callback;
      var init_options;
      var _this = this;
      return __generator(this, function (_b) {
        _a = this.options;
        dom_id = _a.dom_id;
        success_callback = _a.success_callback;
        fail_callback = _a.fail_callback;
        close_callback = _a.close_callback;
        init_options = _a.init_options;
        return [2 /*return*/, new Promise(function (resolve, reject) {
          initSMCaptcha(__assign(__assign(__assign({
            appendTo: dom_id && "#" + dom_id,
            appid: _this.options.product_id
          }, defaultSMInitOptions), init_options), {
            organization: 'sXoTexBWs1dfyzt8eTev'
          }), function (instance) {
            if (!instance) {
              throw new Error('shumei captcha init failed message: can not get instance');
            }
            instance.onReady(function () {
              resolve(instance);
            });
            instance.onSuccess(function (data) {
              return __awaiter(_this, undefined, undefined, function () {
                var ticket_res;
                var error_1;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      if (!data.pass) {
                        return [3 /*break*/, 5];
                      }
                      _a.label = 1;
                    case 1:
                      _a.trys.push([1, 3,, 4]);
                      return [4 /*yield*/, this.get_ticket()];
                    case 2:
                      ticket_res = _a.sent();
                      if (success_callback === null || success_callback === undefined) {
                        undefined;
                      } else {
                        success_callback(ticket_res.data.ticket, this.options.product_id || '');
                      }
                      return [3 /*break*/, 4];
                    case 3:
                      error_1 = _a.sent();
                      if (fail_callback === null || fail_callback === undefined) {
                        undefined;
                      } else {
                        fail_callback(fallbackParamsMaker('success_callback triggerd fatal error', error_1));
                      }
                      return [3 /*break*/, 4];
                    case 4:
                      return [3 /*break*/, 6];
                    case 5:
                      if (fail_callback === null || fail_callback === undefined) {
                        undefined;
                      } else {
                        fail_callback(fallbackParamsMaker('incorrect captcha checking', data));
                      }
                      _a.label = 6;
                    case 6:
                      return [2 /*return*/];
                  }
                });
              });
            });
            instance.onError(function (errType, errMsg) {
              var errorObj = fallbackParamsMaker('some error occurred', {
                errType: errType,
                errMsg: errMsg
              });
              if (fail_callback === null || fail_callback === undefined) {
                undefined;
              } else {
                fail_callback(errorObj);
              }
              reject(errorObj);
            });
            instance.onClose(function () {
              if (close_callback === null || close_callback === undefined) {
                undefined;
              } else {
                close_callback();
              }
            });
          });
        })];
      });
    });
  };
  SMCaptcha.prototype.show = function () {
    var init_options = this.options.init_options;
    if (this.options && ['embed', 'float'].includes((init_options === null || init_options === undefined ? undefined : init_options.product) || '')) {
      this.instance.appendTo("#" + this.options.dom_id);
      return;
    }
    this.instance.verify();
  };
  SMCaptcha.prototype.get_ticket = function (rid) {
    return __awaiter(this, undefined, undefined, function () {
      var result;
      return __generator(this, function (_a) {
        result = this.instance.getValidate();
        return [2 /*return*/, PlatformApi.dispatch_request({
          url: PLATFORM_CAPTCHA_API.CHECK_AND_GET_NEXTDATA_TICKET,
          method: 'post',
          data: {
            rid: result.rid,
            appid: this.options.product_id
          }
        })];
      });
    });
  };
  SMCaptcha.create = function (create_options, extra) {
    var dom_id = create_options.dom_id;
    var success_callback = create_options.success_callback;
    var fail_callback = create_options.fail_callback;
    var close_callback = create_options.close_callback;
    var init_options = create_options.init_options;
    var specified_appid = create_options.product_id;
    return new SMCaptcha({
      product_id: specified_appid || extra.appid,
      dom_id: dom_id,
      success_callback: success_callback,
      fail_callback: fail_callback,
      close_callback: close_callback,
      init_options: init_options
    });
  };
  return SMCaptcha;
}(BasicCaptcha);

// 腾讯是智能模式，所以不需要初始化默认值
var defaultTencentInitOptions = {};
var CmTencentCaptcha = /** @class */function (_super) {
  __extends(CmTencentCaptcha, _super);
  function CmTencentCaptcha(options) {
    var _this = _super.call(this, options) || this;
    _this.product_id = options.product_id || '';
    _this.dom_id = options.dom_id;
    _this.success_callback = options.success_callback;
    _this.fail_callback = options.fail_callback;
    _this.close_callback = options.close_callback;
    _this.request = new CodemaoRequest();
    return _this;
  }
  CmTencentCaptcha.prototype.init = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(typeof TencentCaptcha === 'undefined')) {
              return [3 /*break*/, 2];
            }
            return [4 /*yield*/, load_script(captchaResourceUrls.TENCENT, 'TENCENT_GT')];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [4 /*yield*/, this.initTencentCaptcha(this.dom_id)];
          case 3:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  CmTencentCaptcha.prototype.initTencentCaptcha = function (dom_id) {
    return __awaiter(this, undefined, undefined, function () {
      var tencentCaptchaCallback;
      var _this = this;
      return __generator(this, function (_a) {
        tencentCaptchaCallback = function (res) {
          return __awaiter(_this, undefined, undefined, function () {
            var ticket_res;
            var error_1;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (res == null) {
                    return [2 /*return*/];
                  }
                  if (!(res.ret === 0)) {
                    return [3 /*break*/, 5];
                  }
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3,, 4]);
                  return [4 /*yield*/, this.get_ticket(res.ticket, res.randstr)];
                case 2:
                  ticket_res = _a.sent();
                  this.success_callback(ticket_res.data.ticket, this.product_id);
                  return [3 /*break*/, 4];
                case 3:
                  error_1 = _a.sent();
                  if (this.fail_callback) {
                    this.fail_callback(error_1);
                  }
                  return [3 /*break*/, 4];
                case 4:
                  return [3 /*break*/, 6];
                case 5:
                  if (res.ret === 1) {
                    if (this.fail_callback) {
                      this.fail_callback();
                    }
                  } else if (res.ret === 2) {
                    if (this.close_callback) {
                      this.close_callback();
                    }
                  }
                  _a.label = 6;
                case 6:
                  return [2 /*return*/];
              }
            });
          });
        };
        if (dom_id) {
          this.captcha_obj = new TencentCaptcha(document.getElementById(dom_id), this.product_id, tencentCaptchaCallback, defaultTencentInitOptions);
        } else {
          this.captcha_obj = new TencentCaptcha(this.product_id, tencentCaptchaCallback, defaultTencentInitOptions);
        }
        return [2 /*return*/];
      });
    });
  };
  CmTencentCaptcha.prototype.show = function () {
    this.captcha_obj.show();
  };
  CmTencentCaptcha.prototype.get_ticket = function (ticket, randstr) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, PlatformApi.dispatch_request({
          url: PLATFORM_CAPTCHA_API.CHECK_AND_GET_TENCENT_TICKET,
          method: 'post',
          data: {
            appid: this.product_id,
            tencentTicket: ticket,
            randomStr: randstr
          }
        })];
      });
    });
  };
  CmTencentCaptcha.create = function (create_options, extra) {
    var dom_id = create_options.dom_id;
    var success_callback = create_options.success_callback;
    var fail_callback = create_options.fail_callback;
    var close_callback = create_options.close_callback;
    var specified_appid = create_options.product_id;
    return new CmTencentCaptcha({
      product_id: specified_appid || extra.appid,
      dom_id: dom_id,
      success_callback: success_callback,
      fail_callback: fail_callback,
      close_callback: close_callback
    });
  };
  return CmTencentCaptcha;
}(BasicCaptcha);

// 网易文档 📖 https://support.dun.163.com/documents/15588062143475712?docId=294963579379175424&locale=zh-CN
var defaultNeteaseInitOptions = {
  mode: 'popup',
  width: 300
};
var WrapperId = simpleHash('mask');
var InnerId = simpleHash('inner');
var NeteaseCaptcha = /** @class */function (_super) {
  __extends(NeteaseCaptcha, _super);
  function NeteaseCaptcha(opts) {
    var _this = _super.call(this, opts) || this;
    _this.instance = new Object();
    _this.options = opts;
    _this.instance = new Object();
    // 网易验证码使用popup模式必须要传入一个domNode，且根据它进行定位
    // 所以如果没有传入dom_id则需要为用户创建一个..
    var that = _this;
    (function () {
      var _a;
      var _b;
      return __awaiter(this, undefined, undefined, function () {
        var offset;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              offset = 0 - (((_b = (_a = that.options) === null || _a === undefined ? undefined : _a.init_options) === null || _b === undefined ? undefined : _b.width) || defaultNeteaseInitOptions.width) / 2;
              if (!(!that.options.dom_id && !document.getElementById(WrapperId))) {
                return [3 /*break*/, 2];
              }
              return [4 /*yield*/, appendDomNode('div', {
                id: WrapperId,
                innerHTML: "<div style=\"position: absolute; width: 2px; height: 2px; left: 50%; top: 50%; transform: translate(-50%, -50%); margin: " + offset + "px 0 0 " + offset + "px\" id=\"" + InnerId + "\"/>"
              }, "position: fixed;\n          left: 0px;\n          top: 0px;\n          height: 100vh;\n          width: 100vw;\n          background: rgba(0, 0, 0, .5);\n          z-index: 999;")];
            case 1:
              _c.sent();
              _c.label = 2;
            case 2:
              return [2 /*return*/];
          }
        });
      });
    })();
    return _this;
  }
  NeteaseCaptcha.prototype.init = function () {
    return __awaiter(this, undefined, undefined, function () {
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!(typeof initNECaptcha === 'undefined')) {
              return [3 /*break*/, 2];
            }
            return [4 /*yield*/, load_script(captchaResourceUrls.NETEASE, 'NETEASE_GT')];
          case 1:
            _b.sent();
            _b.label = 2;
          case 2:
            _a = this;
            return [4 /*yield*/, this.init_NECaptcha()];
          case 3:
            _a.instance = _b.sent();
            this.show();
            return [2 /*return*/];
        }
      });
    });
  };
  NeteaseCaptcha.prototype.init_NECaptcha = function () {
    return __awaiter(this, undefined, undefined, function () {
      var _a;
      var dom_id;
      var success_callback;
      var fail_callback;
      var close_callback;
      var init_options;
      var _this = this;
      return __generator(this, function (_b) {
        _a = this.options;
        dom_id = _a.dom_id;
        success_callback = _a.success_callback;
        fail_callback = _a.fail_callback;
        close_callback = _a.close_callback;
        init_options = _a.init_options;
        return [2 /*return*/, new Promise(function (resolve, reject) {
          initNECaptcha(__assign(__assign(__assign({
            captchaId: _this.options.product_id,
            element: dom_id ? "#" + dom_id : "#" + InnerId,
            appendTo: dom_id ? "#" + dom_id : "#" + InnerId
          }, defaultNeteaseInitOptions), init_options), {
            onVerify: function (err, data) {
              return __awaiter(_this, undefined, undefined, function () {
                var ticket_res;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      if (!err) {
                        return [3 /*break*/, 1];
                      }
                      if (fail_callback === null || fail_callback === undefined) {
                        undefined;
                      } else {
                        fail_callback(fallbackParamsMaker('incorrect captcha checking', err));
                      }
                      return [3 /*break*/, 3];
                    case 1:
                      return [4 /*yield*/, this.get_ticket(data.validate)];
                    case 2:
                      ticket_res = _a.sent();
                      if (success_callback === null || success_callback === undefined) {
                        undefined;
                      } else {
                        success_callback(ticket_res.data.ticket, this.options.product_id || '');
                      }
                      this.clearMask();
                      _a.label = 3;
                    case 3:
                      return [2 /*return*/];
                  }
                });
              });
            },
            onError: function (err) {
              if (fail_callback === null || fail_callback === undefined) {
                undefined;
              } else {
                fail_callback(fallbackParamsMaker('fatal error occurred', err));
              }
            },
            onClose: function () {
              if (close_callback === null || close_callback === undefined) {
                undefined;
              } else {
                close_callback();
              }
              _this.clearMask();
            }
          }), function (instance) {
            resolve(instance);
          }, function (err) {
            var errorObj = fallbackParamsMaker('some error occurred', err);
            if (fail_callback === null || fail_callback === undefined) {
              undefined;
            } else {
              fail_callback(errorObj);
            }
            reject(errorObj);
          });
        })];
      });
    });
  };
  NeteaseCaptcha.prototype.show = function () {
    this.instance.popUp();
  };
  NeteaseCaptcha.prototype.clearMask = function () {
    var mask = document.getElementById(WrapperId);
    if (mask) {
      setTimeout(function () {
        document.body.removeChild(mask);
      }, 600);
    }
  };
  NeteaseCaptcha.prototype.get_ticket = function (validate) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, PlatformApi.dispatch_request({
          url: PLATFORM_CAPTCHA_API.CHECK_AND_GET_NETEASE_TICKET,
          method: 'post',
          data: {
            validate: validate,
            appid: this.options.product_id
          }
        })];
      });
    });
  };
  NeteaseCaptcha.create = function (create_options, extra) {
    var dom_id = create_options.dom_id;
    var success_callback = create_options.success_callback;
    var fail_callback = create_options.fail_callback;
    var close_callback = create_options.close_callback;
    var init_options = create_options.init_options;
    var specified_appid = create_options.product_id;
    return new NeteaseCaptcha({
      product_id: specified_appid || extra.appid,
      dom_id: dom_id,
      success_callback: success_callback,
      fail_callback: fail_callback,
      close_callback: close_callback,
      init_options: init_options
    });
  };
  return NeteaseCaptcha;
}(BasicCaptcha);
var aliyun_config = {
  appkey: 'FFFF00000000017E8E25',
  scene: 'nc_login_h5'
};
var aliyun_captcha_dom_id = 'aliyun_captcha_dom_id';
var aliyun_captcha_dom_wrapper_id = 'aliyun_captcha_dom_wrapper_id';
var aliyun_captcha_dom_close_id = "aliyun_captcha_dom_close_id";
var AliyunCaptcha = /** @class */function (_super) {
  __extends(AliyunCaptcha, _super);
  function AliyunCaptcha(options) {
    var _this = _super.call(this, options) || this;
    _this.handleOnCancel = function () {
      if (_this.close_callback) {
        _this.close_callback();
      }
      _this.clearMask();
    };
    // 滑块验证
    _this.initNCCaptcha = function (config) {
      AWSC.use('nc', function (state, module) {
        // 初始化
        window.nc = module.init(__assign(__assign({}, config), {
          renderTo: aliyun_captcha_dom_id,
          // 前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
          success: function (data) {
            return __awaiter(_this, undefined, undefined, function () {
              var ticketData;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, this.get_ticket(data)];
                  case 1:
                    ticketData = _a.sent();
                    if (ticketData.status === 200) {
                      if (this === null || this === undefined) {
                        undefined;
                      } else {
                        this.success_callback(ticketData.data.ticket, ticketData.data.appid);
                      }
                      if (this === null || this === undefined) {
                        undefined;
                      } else {
                        this.clearMask();
                      }
                    } else {
                      if (this.fail_callback) {
                        this.fail_callback(ticketData);
                      }
                    }
                    return [2 /*return*/];
                }
              });
            });
          },
          // 滑动验证失败时触发该回调参数。
          fail: function (failCode) {
            if (_this.fail_callback) {
              _this.fail_callback(failCode);
            }
            throw new Error('验证失败');
          },
          // 验证码加载出现异常时触发该回调参数。
          error: function (errorCode) {
            if (_this.fail_callback) {
              _this.fail_callback(errorCode);
            }
            throw new Error('验证异常');
          }
        }));
      });
    };
    _this.product_id = options.product_id || '';
    _this.dom_id = options.dom_id;
    _this.success_callback = options.success_callback;
    _this.fail_callback = options.fail_callback;
    _this.close_callback = options.close_callback;
    _this.request = new CodemaoRequest();
    return _this;
  }
  AliyunCaptcha.prototype.init = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(typeof AWSC === 'undefined')) {
              return [3 /*break*/, 2];
            }
            return [4 /*yield*/, load_script(captchaResourceUrls.ALIYUN, 'ALIYUN_GT')];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [4 /*yield*/, this.initAliyunCaptcha()];
          case 3:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  AliyunCaptcha.prototype.initAliyunCaptcha = function () {
    return __awaiter(this, undefined, undefined, function () {
      var aliyunCloseBtn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!!document.getElementById(aliyun_captcha_dom_id)) {
              return [3 /*break*/, 2];
            }
            return [4 /*yield*/, appendDomNode('div', {
              id: aliyun_captcha_dom_wrapper_id,
              innerHTML: "\n            <div\n              style=\"position: absolute; display: flex; flex-direction: column; padding-top: 20px; justify-content: flex-start; align-items: center; width: 400px; height: 130px; background-color: #fff; left: 50%; top: 50%; transform: translate(-50%, -50%);\"\n            >\n              <div style=\"font-size: 20px\">\u62D6\u52A8\u4E0B\u65B9\u6ED1\u5757\u5B8C\u6210\u9A8C\u8BC1</div>\n              <div\n                style=\"display: flex; justify-content: center; align-items: center; bottom: 20px\"\n                id=\"" + aliyun_captcha_dom_id + "\"\n              >\n              </div>\n              <div id=\"" + aliyun_captcha_dom_close_id + "\" style=\"cursor: pointer; color: blue; position: absolute; top: 20px; right: 20px\">\u5173\u95ED</div>\n            </div>\n          "
            }, "position: fixed;\n        left: 0px;\n        top: 0px;\n        height: 100vh;\n        width: 100vw;\n        background: rgba(0, 0, 0, .5);\n        z-index: 999;")];
          case 1:
            _a.sent();
            aliyunCloseBtn = document.getElementById(aliyun_captcha_dom_close_id);
            if (aliyunCloseBtn === null || aliyunCloseBtn === undefined) {
              undefined;
            } else {
              aliyunCloseBtn.addEventListener('click', this.handleOnCancel);
            }
            _a.label = 2;
          case 2:
            return [2 /*return*/];
        }
      });
    });
  };
  AliyunCaptcha.prototype.clearMask = function () {
    var mask = document.getElementById(aliyun_captcha_dom_wrapper_id);
    if (mask) {
      setTimeout(function () {
        document.body.removeChild(mask);
      }, 600);
    }
  };
  AliyunCaptcha.prototype.show = function () {
    this.initNCCaptcha(aliyun_config);
  };
  AliyunCaptcha.prototype.get_ticket = function (params) {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, PlatformApi.dispatch_request({
          url: PLATFORM_CAPTCHA_API.CHECK_AND_GET_ALIYUN_TICKET,
          method: 'post',
          data: __assign({
            appKey: aliyun_config.appkey,
            scene: aliyun_config.scene
          }, params)
        })];
      });
    });
  };
  AliyunCaptcha.create = function (create_options, extra) {
    var dom_id = create_options.dom_id;
    var success_callback = create_options.success_callback;
    var fail_callback = create_options.fail_callback;
    var close_callback = create_options.close_callback;
    var specified_appid = create_options.product_id;
    return new AliyunCaptcha({
      product_id: specified_appid || extra.appid,
      dom_id: dom_id,
      success_callback: success_callback,
      fail_callback: fail_callback,
      close_callback: close_callback
    });
  };
  return AliyunCaptcha;
}(BasicCaptcha);

// TODO 错误处理
var CodemaoCaptcha = /** @class */function () {
  function CodemaoCaptcha(options) {
    this.pid = options.pid;
  }
  // 从服务端确定用哪个验证码服务商
  CodemaoCaptcha.prototype.get_rule_from_server = function (identity, scene) {
    if (scene === undefined) {
      scene = '';
    }
    return __awaiter(this, undefined, undefined, function () {
      var deviceId;
      var timestamp;
      var res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, load_script(captchaResourceUrls.FINGER_PRINT_2, 'finger-print', 10)];
          case 1:
            _a.sent();
            return [4 /*yield*/, getFingerPrint()];
          case 2:
            deviceId = _a.sent();
            timestamp = "" + new Date().getTime() / 1000;
            return [4 /*yield*/, PlatformApi.dispatch_request({
              url: PLATFORM_CAPTCHA_API.GET_RULE,
              method: 'post',
              data: {
                identity: identity,
                scene: scene,
                pid: getInitParams().pid || this.pid,
                deviceId: deviceId,
                timestamp: parseInt(timestamp, 10)
              }
            })];
          case 3:
            res = _a.sent();
            return [2 /*return*/, res.data];
        }
      });
    });
  };
  CodemaoCaptcha.prototype.get_captcha = function (options) {
    var _a;
    return __awaiter(this, undefined, undefined, function () {
      var identity;
      var _b;
      var scene;
      var success_callback;
      var fail_callback;
      var res;
      var rule;
      var appid;
      var ticket;
      var disableCaptcha;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            identity = options.identity;
            _b = options.scene;
            scene = _b === undefined ? '' : _b;
            success_callback = options.success_callback;
            fail_callback = options.fail_callback;
            return [4 /*yield*/, this.get_rule_from_server(identity, scene)];
          case 1:
            res = _c.sent();
            // TODO: single if ?
            if (res) {
              rule = res.rule;
              appid = res.appid;
              ticket = res.ticket;
              if (Object.keys(captchaResourceUrls).includes(rule)) {
                // TODO: single if x2 ?
                if (appid) {
                  // 根据策略执行对应的算法
                  return [2 /*return*/, (_a = strategyTargetSelector(rule)) === null || _a === undefined ? undefined : _a.create(options, {
                    appid: appid
                  })];
                }
              } else {
                disableCaptcha = new DisableCaptcha(ticket, success_callback, fail_callback);
                return [2 /*return*/, disableCaptcha];
              }
            }
            return [2 /*return*/];
        }
      });
    });
  };
  return CodemaoCaptcha;
}();
var DisableCaptcha = /** @class */function () {
  function DisableCaptcha(ticket, success_callback, fail_callback) {
    this.ticket = ticket;
    this.success_callback = success_callback;
    this.fail_callback = fail_callback;
  }
  DisableCaptcha.prototype.init = function () {
    return __awaiter(this, undefined, undefined, function () {
      return __generator(this, function (_a) {
        console.log('DisableCaptcha init');
        return [2 /*return*/];
      });
    });
  };
  DisableCaptcha.prototype.show = function () {
    if (this.ticket) {
      this.success_callback(this.ticket, '');
    } else {
      if (this.fail_callback) {
        this.fail_callback();
      }
    }
  };
  return DisableCaptcha;
}();
// 策略分配
var strategyTargetSelector = function (contextKeyWhoNamedRuleByBackend) {
  switch (contextKeyWhoNamedRuleByBackend) {
    case 'GEETEST':
      return GeetestCaptcha;
    case 'TENCENT':
      return CmTencentCaptcha;
    case 'NETEASE':
      return NeteaseCaptcha;
    case 'NEXTDATA':
      return SMCaptcha;
    case 'ALIYUN':
      return AliyunCaptcha;
    case 'DEFAULT':
      return DisableCaptcha;
  }
};
var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  GeetestCaptcha: GeetestCaptcha,
  SMCaptcha: SMCaptcha,
  CmTencentCaptcha: CmTencentCaptcha,
  NeteaseCaptcha: NeteaseCaptcha,
  CodemaoCaptcha: CodemaoCaptcha,
  DisableCaptcha: DisableCaptcha
});
function init$1(options) {
  var env = options.env;
  var domain = options.domain;
  var _a = options.auth_version;
  var _b = options.pid;
  var _c = options.client_id;
  var requestTimeout = options.requestTimeout;
  var host = options.host;
  if (env) {
    if (configs[env]) {
      setConfig(configs[env]);
      if (host) {
        var config = getConfig();
        config.host = host;
      }
    } else {
      console.warn("Unknown env \"" + env + "\", config has been set to default value.");
    }
  }
  if (domain !== undefined) {
    var config = getConfig();
    config.domain = domain;
  }
  setInitParams(options);
}

/***/