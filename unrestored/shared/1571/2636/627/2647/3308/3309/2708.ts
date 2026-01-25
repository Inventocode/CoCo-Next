/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2708
 */

var a = require("../../../../13/780/755")
module.exports = function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {}
    var r = Object.keys(n)
    if ("function" === typeof Object.getOwnPropertySymbols) {
      r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))
    }
    r.forEach(function (t) {
      a(e, t, n[t])
    })
  }
  return e
}
