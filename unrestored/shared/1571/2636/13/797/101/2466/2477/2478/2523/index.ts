/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2523
 */

var r = require("./1439/index")
var i = require("./2524")
var o = require("./2530/index")
var a = require("./1180")
var s = require("./1446")
var c = require("./1447")
var u = require("./1001")
module.exports = function (e, t) {
  return a(e) && s(t) ? c(u(e), t) : function (n) {
    var a = i(n, e)
    return undefined === a && a === t ? o(n, e) : r(t, a, 3)
  }
}
