/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：225
 */

"use strict"

var r = require(/* 13 */"../288/13/index")
var i = require(/* 107 */"./107")
var o = require(/* 9 */"../275/9")
var a = require(/* 112 */"../215/112/index")
var s = require(/* 27 */"./27")
var u = require(/* 84 */"./84")
var c = require(/* 64 */"./64")
var /* [auto-meaningful-name] */a$ArrayBuffer = a.ArrayBuffer
var /* [auto-meaningful-name] */a$DataView = a.DataView
var /* [auto-meaningful-name] */a$DataView$prototype = a$DataView.prototype
var d = i(a$ArrayBuffer.prototype.slice)
var h = i(a$DataView$prototype.getUint8)
var g = i(a$DataView$prototype.setUint8)
r({
  target: "ArrayBuffer",
  proto: true,
  unsafe: true,
  forced: o(function () {
    return !new a$ArrayBuffer(2).slice(1, undefined).byteLength
  })
}, {
  slice: function (e, t) {
    if (d && undefined === t) {
      return d(s(this), e)
    }
    for (var /* [auto-meaningful-name] */sThis$byteLength = s(this).byteLength, r = u(e, sThis$byteLength), i = u(undefined === t ? sThis$byteLength : t, sThis$byteLength), o = new a$ArrayBuffer(c(i - r)), a = new a$DataView(this), p = new a$DataView(o), m = 0; r < i;) {
      g(p, m++, h(a, r++))
    }
    return o
  }
})
