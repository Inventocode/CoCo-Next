/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：975
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.shortest_string_length = exports.equals = exports.remove = undefined
var r = require("../../1022/214")
exports.remove = function (e, t) {
  var n = e.indexOf(t)
  var r = n >= 0
  if (r) {
    e.splice(n, 1)
  }
  return r
}
exports.equals = function (e, t) {
  if (!(0, r.is_array)(e) || !(0, r.is_array)(t) || e.length != t.length) {
    return false
  }
  for (var n = 0; n < e.length; n++) {
    if (e[n] !== t[n]) {
      return false
    }
  }
  return true
}
exports.shortest_string_length = function (e) {
  return e.length ? e.reduce(function (e, t) {
    return e.length < t.length ? e : t
  }).length : 0
}
