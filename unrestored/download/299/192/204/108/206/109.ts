/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：109
 */

"use strict"

var r = require(/* 10 */"../../../208/10")
var i = require(/* 9 */"../../../275/9")
var o = require(/* 14 */"../../../228/14")
var a = require(/* 47 */"../../../263/47/index")
var s = require(/* 54 */"../../../228/54")
var u = require(/* 138 */"../../../228/34/137/138")
var c = function () {}
var l = s("Reflect", "construct")
var f = /^\s*(?:class|function)\b/
var p = r(f.exec)
var d = !f.test(c)
var h = function (e) {
  if (!o(e)) {
    return false
  }
  try {
    l(c, [], e)
    return true
  } catch (t) {
    return false
  }
}
var g = function (e) {
  if (!o(e)) {
    return false
  }
  switch (a(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false
  }
  try {
    return d || !!p(f, u(e))
  } catch (t) {
    return true
  }
}
g.sham = true
module.exports = !l || i(function () {
  var e
  return h(h.call) || !h(Object) || !h(function () {
    e = true
  }) || e
}) ? g : h
