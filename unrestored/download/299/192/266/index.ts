/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：266
 */

"use strict"

var r = require(/* 6 */"../275/6")
var i = require(/* 20 */"../288/20/index")
var o = require(/* 49 */"../263/49/index")
var a = require(/* 31 */"../204/31")
var s = require(/* 164 */"./164/index")
var u = require(/* 29 */"../204/29")
var c = require(/* 9 */"../275/9")
var /* [auto-meaningful-name] */r$RangeError = r.RangeError
var /* [auto-meaningful-name] */r$Int8Array = r.Int8Array
var p = r$Int8Array && r$Int8Array.prototype
var d = p && p.set
var /* [auto-meaningful-name] */o$aTypedArray = o.aTypedArray
var /* [auto-meaningful-name] */o$exportTypedArrayMethod = o.exportTypedArrayMethod
var m = !c(function () {
  var e = new Uint8ClampedArray(2)
  i(d, e, {
    length: 1,
    0: 3
  }, 1)
  return 3 !== e[1]
})
var v = m && o.NATIVE_ARRAY_BUFFER_VIEWS && c(function () {
  var e = new r$Int8Array(2)
  e.set(1)
  e.set("2", 1)
  return 0 !== e[0] || 2 !== e[1]
})
o$exportTypedArrayMethod("set", function (e) {
  o$aTypedArray(this)
  var t = s(arguments.length > 1 ? arguments[1] : undefined, 1)
  var n = u(e)
  if (m) {
    return i(d, this, n, t)
  }
  var /* [auto-meaningful-name] */this$length = this.length
  var o = a(n)
  var c = 0
  if (o + t > this$length) {
    throw new r$RangeError("Wrong length")
  }
  for (; c < o;) {
    this[t + c] = n[c++]
  }
}, !m || v)
