/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1597
 */

var r = require("../1592/1069")
var /* [auto-meaningful-name] */Math$abs = Math.abs
var /* [auto-meaningful-name] */Math$pow = Math.pow
var a = Math$pow(2, -52)
var s = Math$pow(2, -23)
var c = Math$pow(2, 127) * (2 - s)
var l = Math$pow(2, -126)
module.exports = Math.fround || function (e) {
  var t
  var n
  var i = Math$abs(e)
  var u = r(e)
  return i < l ? u * (i / l / s + 1 / a - 1 / a) * l * s : (n = (t = (1 + s / a) * i) - (t - i)) > c || n != n ? u * (1 / 0) : u * n
}
