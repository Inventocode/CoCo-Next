/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1100
 */

var r = require("../1686/194")
var o = require("../1705/168")
var i = require("../1686/948")
var /* [auto-meaningful-name] */require$$_1768_257_index$NATIVE_ARRAY_BUFFER_VIEWS = require("../1768/257/index").NATIVE_ARRAY_BUFFER_VIEWS
var /* [auto-meaningful-name] */r$ArrayBuffer = r.ArrayBuffer
var /* [auto-meaningful-name] */r$Int8Array = r.Int8Array
module.exports = !require$$_1768_257_index$NATIVE_ARRAY_BUFFER_VIEWS || !o(function () {
  r$Int8Array(1)
}) || !o(function () {
  new r$Int8Array(-1)
}) || !i(function (e) {
  new r$Int8Array()
  new r$Int8Array(null)
  new r$Int8Array(1.5)
  new r$Int8Array(e)
}, true) || o(function () {
  return 1 !== new r$Int8Array(new r$ArrayBuffer(2), 1, undefined).length
})
