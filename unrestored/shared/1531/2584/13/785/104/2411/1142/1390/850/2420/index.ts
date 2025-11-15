/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2420
 */

var r = require("../../../../../../../254/2513/2514/2515/853/2488/1149")
var i = require("./2421")
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
module.exports = function (e) {
  if (!r(e)) {
    return i(e)
  }
  var t = []
  for (var n in Object(e)) if (Object$prototype$hasOwnProperty.call(e, n) && "constructor" != n) {
    t.push(n)
  }
  return t
}
