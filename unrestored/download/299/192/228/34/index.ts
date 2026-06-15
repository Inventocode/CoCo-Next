/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：34
 */

"use strict"

var r = require(/* 14 */"../14")
var i = require(/* 30 */"../../268/65/30/index")
var o = require(/* 137 */"./137/index")
var a = require(/* 99 */"../../288/13/99")
module.exports = function (e, t, n, s) {
  if (!s) {
    s = {}
  }
  var /* [auto-meaningful-name] */s$enumerable = s.enumerable
  var c = undefined !== s.name ? s.name : t
  if (r(n)) {
    o(n, c, s)
  }
  if (s.global) {
    if (s$enumerable) {
      e[t] = n
    } else {
      a(t, n)
    }
  } else {
    try {
      if (s.unsafe) {
        if (e[t]) {
          s$enumerable = true
        }
      } else {
        delete e[t]
      }
    } catch (l) {}
    if (s$enumerable) {
      e[t] = n
    } else {
      i.f(e, t, {
        value: n,
        enumerable: false,
        configurable: !s.nonConfigurable,
        writable: !s.nonWritable
      })
    }
  }
  return e
}
