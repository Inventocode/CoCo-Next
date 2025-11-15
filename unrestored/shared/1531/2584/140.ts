/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：140
 */

"use strict"

export { o as a }
import /* [auto-meaningful-name] */$_273 = require("./273")
import /* [auto-meaningful-name] */$_322 = require("./322")
function o(e) {
  var t = function () {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
      return false
    }
    if (Reflect.construct.sham) {
      return false
    }
    if ("function" === typeof Proxy) {
      return true
    }
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}))
      return true
    } catch (e) {
      return false
    }
  }()
  return function () {
    var n
    var o = $_273.a(e)
    if (t) {
      var /* [auto-meaningful-name] */$_273$aThis$constructor = $_273.a(this).constructor
      n = Reflect.construct(o, arguments, $_273$aThis$constructor)
    } else {
      n = o.apply(this, arguments)
    }
    return $_322.a(this, n)
  }
}
export default o
