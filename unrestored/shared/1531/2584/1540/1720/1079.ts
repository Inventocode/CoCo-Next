/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1079
 */

var r = require("../1736/194")
var o = require("../1736/167")
var i = require("../1565/935")
var require$258Index$NATIVE_ARRAY_BUFFER_VIEWS = require("./258/index").NATIVE_ARRAY_BUFFER_VIEWS
var r$ArrayBuffer = r.ArrayBuffer
var r$Int8Array = r.Int8Array
module.exports = !require$258Index$NATIVE_ARRAY_BUFFER_VIEWS || !o(function () {
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
