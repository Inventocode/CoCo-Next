/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2488
 */

var r = require("../../../../../2533/1420/475")
var i = require("./1149")
var o = require("./2489")
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
module.exports = function (e) {
  if (!r(e)) {
    return o(e)
  }
  var t = i(e)
  var n = []
  for (var s in e) if ("constructor" != s || !t && Object$prototype$hasOwnProperty.call(e, s)) {
    n.push(s)
  }
  return n
}
