/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：978
 */

var r = require("./2463")
var i = require("../../../../../../254/2513/2514/2515/973/2435/1152")
var o = require("./2464")
var a = require("./2465")
var s = require("./2466")
var c = require("../../../../2411/1395/718/index")
var u = require("./1397")
var l = u(r)
var f = u(i)
var d = u(o)
var h = u(a)
var p = u(s)
var _ = c
if (r && "[object DataView]" != _(new r(new ArrayBuffer(1))) || i && "[object Map]" != _(new i()) || o && "[object Promise]" != _(o.resolve()) || a && "[object Set]" != _(new a()) || s && "[object WeakMap]" != _(new s())) {
  _ = function (e) {
    var t = c(e)
    var n = "[object Object]" == t ? e.constructor : undefined
    var r = n ? u(n) : ""
    if (r) {
      switch (r) {
        case l:
          return "[object DataView]"
        case f:
          return "[object Map]"
        case d:
          return "[object Promise]"
        case h:
          return "[object Set]"
        case p:
          return "[object WeakMap]"
      }
    }
    return t
  }
}
module.exports = _
