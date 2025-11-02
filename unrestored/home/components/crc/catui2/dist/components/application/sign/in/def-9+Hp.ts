/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：9+Hp
 */

"use strict"

/* harmony export (binding) */
/* harmony export (binding) */
export { SMS_COUNT_DOWN }
// 短信验证码倒计时（短信登录、注册、重置密码共用一个计时器）
export { ContentView }
var SMS_COUNT_DOWN = 60
var ContentView;
(function (ContentView) {
  ContentView[ContentView["REGISTER"] = 0] = "REGISTER"
  ContentView[ContentView["LOGIN"] = 1] = "LOGIN"
  ContentView[ContentView["FORGET_PASSWORD"] = 2] = "FORGET_PASSWORD"
})(ContentView || (ContentView = {}))

/***/
