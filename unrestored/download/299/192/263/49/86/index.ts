/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：86
 */

"use strict"

var r = require(/* 24 */"../../../233/24")
var i = require(/* 14 */"../../../228/14")
var o = require(/* 29 */"../../../204/29")
var a = require(/* 101 */"../../../233/55/101")
var s = require(/* 221 */"./221")
var u = a("IE_PROTO")
var c = Object
var /* [auto-meaningful-name] */c$prototype = c.prototype
module.exports = s ? c.getPrototypeOf : function (e) {
  var t = o(e)
  if (r(t, u)) {
    return t[u]
  }
  var /* [auto-meaningful-name] */t$constructor = t.constructor
  return i(t$constructor) && t instanceof t$constructor ? t$constructor.prototype : t instanceof c ? c$prototype : null
}
