/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：961
 */

var r = require("../1648/714")
var o = require("../1723/958")
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
