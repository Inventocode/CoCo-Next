/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1220
 */

"use strict"

var r
var o
var i
var a = require("../../1541/167")
var s = require("../../1585/495")
var c = require("../../1541/422")
var l = require("../../1541/332")
var u = require("../../1541/247/index")
var d = require("../../1684/530")
var p = u("iterator")
var f = false
if ([].keys) {
  if ("next" in (i = [].keys())) {
    if ((o = s(s(i))) !== Object.prototype) {
      r = o
    }
  } else {
    f = true
  }
}
var h = undefined == r || a(function () {
  var e = {}
  return r[p].call(e) !== e
})
if (h) {
  r = {}
}
if (!(d && !h || l(r, p))) {
  c(r, p, function () {
    return this
  })
}
module.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: f
}
