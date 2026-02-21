/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1249
 */

"use strict"

var r
var o
var i
var a = require("../../1659/168")
var s = require("../../1625/497")
var c = require("../../1782/425")
var l = require("../334")
var u = require("../246/index")
var d = require("../../1581/533")
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
