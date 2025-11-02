/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1432
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.loop = exports.conditional = exports.parse = undefined
exports.parse = function e(t, n) {
  var r = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {}
  var o = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : r
  if (Array.isArray(n)) {
    n.forEach(function (n) {
      return e(t, n, r, o)
    })
  } else if ("function" === typeof n) {
    n(t, r, o, e)
  } else {
    var i = Object.keys(n)[0]
    if (Array.isArray(n[i])) {
      o[i] = {}
      e(t, n[i], r, o[i])
    } else {
      o[i] = n[i](t, r, o, e)
    }
  }
  return r
}
exports.conditional = function (e, t) {
  return function (n, r, o, i) {
    if (t(n, r, o)) {
      i(n, e, r, o)
    }
  }
}
exports.loop = function (e, t) {
  return function (n, r, o, i) {
    for (var a = [], n$pos = n.pos; t(n, r, o);) {
      var c = {}
      i(n, e, r, c)
      if (n.pos === n$pos) {
        break
      }
      n$pos = n.pos
      a.push(c)
    }
    return a
  }
}
