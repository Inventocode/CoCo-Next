/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：206
 */

"use strict"

var r = require(/* 106 */"../../../208/106/index")
var i = require(/* 109 */"./109")
var o = require(/* 26 */"../../../237/26")
var a = require(/* 18 */"../../../233/18/index")("species")
var s = Array
module.exports = function (e) {
  var t
  if (r(e)) {
    t = e.constructor
    if (i(t) && (t === s || r(t.prototype)) || o(t) && null === (t = t[a])) {
      t = undefined
    }
  }
  return undefined === t ? s : t
}
