/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：30
 */

"use strict"

var r = require(/* 16 */"../../../275/16")
var i = require(/* 135 */"./135")
var o = require(/* 136 */"./136")
var a = require(/* 27 */"../../../225/27")
var s = require(/* 94 */"../../../247/44/94")
var u = TypeError
var /* [auto-meaningful-name] */Object$defineProperty = Object.defineProperty
var /* [auto-meaningful-name] */Object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
var /* [auto-meaningful-name] */Enumerable = "enumerable"
var /* [auto-meaningful-name] */Configurable = "configurable"
var /* [auto-meaningful-name] */Writable = "writable"
exports.f = r ? o ? function (e, t, n) {
  a(e)
  t = s(t)
  a(n)
  if ("function" === typeof e && "prototype" === t && "value" in n && Writable in n && !n[Writable]) {
    var r = Object$getOwnPropertyDescriptor(e, t)
    if (r && r[Writable]) {
      e[t] = n.value
      n = {
        configurable: Configurable in n ? n[Configurable] : r[Configurable],
        enumerable: Enumerable in n ? n[Enumerable] : r[Enumerable],
        writable: false
      }
    }
  }
  return Object$defineProperty(e, t, n)
} : Object$defineProperty : function (e, t, n) {
  a(e)
  t = s(t)
  a(n)
  if (i) {
    try {
      return Object$defineProperty(e, t, n)
    } catch (r) {}
  }
  if ("get" in n || "set" in n) {
    throw new u("Accessors not supported")
  }
  if ("value" in n) {
    e[t] = n.value
  }
  return e
}
