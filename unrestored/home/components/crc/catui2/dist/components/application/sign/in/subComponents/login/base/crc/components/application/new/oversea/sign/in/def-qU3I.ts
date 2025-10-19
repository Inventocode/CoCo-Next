/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：qU3I
 */

"use strict";

/* harmony export (binding) */
/* harmony export (binding) */
export { AuthType };
/* harmony export (binding) */
export { AuthErrorType };
/* harmony export (binding) */
export { NOT_LOGIN_MSG };
export { NETWORK_ERROR_MSG };
var AuthType;
(function (AuthType) {
  AuthType[AuthType["CODEMAO"] = 1] = "CODEMAO";
  AuthType[AuthType["WECHAT"] = 7] = "WECHAT";
})(AuthType || (AuthType = {}));
var AuthErrorType;
(function (AuthErrorType) {
  AuthErrorType["EMAIL"] = "email";
  AuthErrorType["PWD"] = "password";
  AuthErrorType["REPWD"] = "rePassword";
  AuthErrorType["CODE"] = "code";
  AuthErrorType["OTHER"] = "other";
})(AuthErrorType || (AuthErrorType = {}));
var NOT_LOGIN_MSG = "NOT_LOGIN";
var NETWORK_ERROR_MSG = "NETWORK_ERROR";

/***/