/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：948
 */

var r = require("../1608/705")
var o = require("../1244/945")
module.exports = function (e, t) {
  var /* [auto-meaningful-name] */e$exec = e.exec
  if ("function" === typeof e$exec) {
    var i = e$exec.call(e, t)
    if ("object" !== typeof i) {
      throw TypeError("RegExp exec method returned something other than an Object or null")
    }
    return i
  }
  if ("RegExp" !== r(e)) {
    throw TypeError("RegExp#exec called on incompatible receiver")
  }
  return o.call(e, t)
}
