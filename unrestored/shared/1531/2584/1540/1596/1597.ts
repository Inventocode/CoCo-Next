/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1597
 */

var r = require("../1592/1069")
var math$abs = Math.abs
var math$pow = Math.pow
var a = math$pow(2, -52)
var s = math$pow(2, -23)
var c = math$pow(2, 127) * (2 - s)
var l = math$pow(2, -126)
module.exports = Math.fround || function (e) {
  var t
  var n
  var i = math$abs(e)
  var u = r(e)
  return i < l ? u * (i / l / s + 1 / a - 1 / a) * l * s : (n = (t = (1 + s / a) * i) - (t - i)) > c || n != n ? u * (1 / 0) : u * n
}
