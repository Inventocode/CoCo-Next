/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：47
 */

"use strict"

var r = require(/* 199 */"./199")
var i = require(/* 14 */"../../228/14")
var o = require(/* 53 */"../../208/106/53")
var a = require(/* 18 */"../../233/18/index")("toStringTag")
var s = Object
var u = "Arguments" === o(function () {
  return arguments
}())
module.exports = r ? o : function (e) {
  var t
  var n
  var r
  return undefined === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
    try {
      return e[t]
    } catch (n) {}
  }(t = s(e), a)) ? n : u ? o(t) : "Object" === (r = o(t)) && i(t.callee) ? "Arguments" : r
}
