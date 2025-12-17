/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：300
 */

var r = require("../../1699/271")
var o = require("./1237")
var i = require("../240")
var a = require("../../1696/632")
var /* [auto-meaningful-name] */Object$defineProperty = Object.defineProperty
exports.f = r ? Object$defineProperty : function (e, t, n) {
  i(e)
  t = a(t)
  i(n)
  if (o) {
    try {
      return Object$defineProperty(e, t, n)
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
