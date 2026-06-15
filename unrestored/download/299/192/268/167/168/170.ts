/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：170
 */

"use strict"

var r
var i
var o
var a = require(/* 9 */"../../../275/9")
var s = require(/* 14 */"../../../228/14")
var u = require(/* 26 */"../../../237/26")
var c = require(/* 55 */"../../../233/55/index")
var l = require(/* 86 */"../../../263/49/86/index")
var f = require(/* 34 */"../../../228/34/index")
var p = require(/* 18 */"../../../233/18/index")
var d = require(/* 63 */"../../../228/63")
var h = p("iterator")
var g = false
if ([].keys) {
  if ("next" in (o = [].keys())) {
    if ((i = l(l(o))) !== Object.prototype) {
      r = i
    }
  } else {
    g = true
  }
}
if (!u(r) || a(function () {
  var e = {}
  return r[h].call(e) !== e
})) {
  r = {}
} else {
  if (d) {
    r = c(r)
  }
}
if (!s(r[h])) {
  f(r, h, function () {
    return this
  })
}
module.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: g
}
