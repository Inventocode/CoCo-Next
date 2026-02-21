/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1275
 */

var r = require("../1771/256")
var o = require("../1282/310")
var i = require("../1659/1092")
var a = require("../1720/424")
var /* [auto-meaningful-name] */Math$ceil = Math.ceil
var c = function (e) {
  return function (t, n, c) {
    var l
    var u
    var d = o(a(t))
    var /* [auto-meaningful-name] */d$length = d.length
    var f = undefined === c ? " " : o(c)
    var h = r(n)
    return h <= d$length || "" == f ? d : (l = h - d$length, (u = i.call(f, Math$ceil(l / f.length))).length > l && (u = u.slice(0, l)), e ? d + u : u + d)
  }
}
module.exports = {
  start: c(false),
  end: c(true)
}
