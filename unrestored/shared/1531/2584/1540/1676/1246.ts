/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1246
 */

var r = require("../1735/257")
var o = require("../1745/310")
var i = require("../1679/1071")
var a = require("../1675/421")
var math$ceil = Math.ceil
var c = function (e) {
  return function (t, n, c) {
    var l
    var u
    var d = o(a(t))
    var d$length = d.length
    var f = undefined === c ? " " : o(c)
    var h = r(n)
    return h <= d$length || "" == f ? d : (l = h - d$length, (u = i.call(f, math$ceil(l / f.length))).length > l && (u = u.slice(0, l)), e ? d + u : u + d)
  }
}
module.exports = {
  start: c(false),
  end: c(true)
}
