/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：122
 */

"use strict"

var r = require(/* 6 */"../../275/6")
var i = require(/* 9 */"../../275/9")
var o = require(/* 248 */"./248")
var /* [auto-meaningful-name] */require_49_$$_$$_263_49_index$NATIVE_ARRAY_BUFFER_VIEWS = require(/* 49 */"../../263/49/index").NATIVE_ARRAY_BUFFER_VIEWS
var /* [auto-meaningful-name] */r$ArrayBuffer = r.ArrayBuffer
var /* [auto-meaningful-name] */r$Int8Array = r.Int8Array
module.exports = !require_49_$$_$$_263_49_index$NATIVE_ARRAY_BUFFER_VIEWS || !i(function () {
  r$Int8Array(1)
}) || !i(function () {
  new r$Int8Array(-1)
}) || !o(function (e) {
  new r$Int8Array()
  new r$Int8Array(null)
  new r$Int8Array(1.5)
  new r$Int8Array(e)
}, true) || i(function () {
  return 1 !== new r$Int8Array(new r$ArrayBuffer(2), 1, undefined).length
})
