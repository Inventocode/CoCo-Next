/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：300
 */

var r = require("./272")
var o = require("../1659/386/1208")
var i = require("../1659/241")
var a = require("../1656/628")
var object$defineProperty = Object.defineProperty
exports.f = r ? object$defineProperty : function (e, t, n) {
  i(e)
  t = a(t)
  i(n)
  if (o) {
    try {
      return object$defineProperty(e, t, n)
    } catch (r) {}
  }
  if ("get" in n || "set" in n) {
    throw TypeError("Accessors not supported")
  }
  if ("value" in n) {
    e[t] = n.value
  }
  return e
}
