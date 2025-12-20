/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：701
 */

"use strict"

export { r as b }
export { i as a }
var r = function (e) {
  return e.scrollTop
}
function i(e, t) {
  var /* [auto-meaningful-name] */e$timeout = e.timeout
  var /* [auto-meaningful-name] */e$style = e.style
  var i = undefined === e$style ? {} : e$style
  return {
    duration: i.transitionDuration || "number" === typeof e$timeout ? e$timeout : e$timeout[t.mode] || 0,
    delay: i.transitionDelay
  }
}
export default i
