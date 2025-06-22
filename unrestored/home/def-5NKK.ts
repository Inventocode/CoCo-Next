"use strict";

/* harmony export (binding) */
export { AuthType as b };
/* harmony export (binding) */
export { AuthErrorType };
var AuthType;
(function (AuthType) {
  AuthType[AuthType["CODEMAO"] = 1] = "CODEMAO";
  AuthType[AuthType["WECHAT"] = 7] = "WECHAT";
})(AuthType || (AuthType = {}));
var AuthErrorType;
(function (AuthErrorType) {
  AuthErrorType["PHONE"] = "phone";
  AuthErrorType["PWD"] = "password";
  AuthErrorType["PWD_CONFIRM"] = "password_confirm";
  AuthErrorType["SMS_CODE"] = "sms_code";
  AuthErrorType["OTHER"] = "other";
})(AuthErrorType || (AuthErrorType = {}));

/***/