/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：744
 */

"use strict"

var r = require("./520/926")
function i(e, t) {
  return function (e, t, n) {
    var i
    var o
    if ("function" === typeof e.indexOf) {
      switch (typeof t) {
        case "number":
          if (0 === t) {
            for (i = 1 / t; n < e.length;) {
              if (0 === (o = e[n]) && 1 / o === i) {
                return n
              }
              n += 1
            }
            return -1
          }
          if (t !== t) {
            for (; n < e.length;) {
              if ("number" === typeof (o = e[n]) && o !== o) {
                return n
              }
              n += 1
            }
            return -1
          }
          return e.indexOf(t, n)
        case "string":
        case "boolean":
        case "function":
        case "undefined":
          return e.indexOf(t, n)
        case "object":
          if (null === t) {
            return e.indexOf(t, n)
          }
      }
    }
    for (; n < e.length;) {
      if (r.a(e[n], t)) {
        return n
      }
      n += 1
    }
    return -1
  }(t, e, 0) >= 0
}
var o = require("./217/521")
var a = o.a(i)
exports.a = a
