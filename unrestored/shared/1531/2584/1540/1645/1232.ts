/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1232
 */

var r = require("../1736/194")
var o = require("../1745/310")
var require$$1686753Index$trim = require("../1686/753/index").trim
var a = require("../1686/753/941")
var r$parseInt = r.parseInt
var c = /^[+-]?0[Xx]/
var l = 8 !== r$parseInt(a + "08") || 22 !== r$parseInt(a + "0x16")
module.exports = l ? function (e, t) {
  var n = require$$1686753Index$trim(o(e))
  return r$parseInt(n, t >>> 0 || (c.test(n) ? 16 : 10))
} : r$parseInt
