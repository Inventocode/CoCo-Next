/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：939
 */

var r = require("../1738/231")
var o = require("../1666/634")
module.exports = function (e, t, n) {
  var /* [auto-meaningful-name] */t$constructor
  var /* [auto-meaningful-name] */t$constructor$prototype
  if (o && "function" == typeof (t$constructor = t.constructor) && t$constructor !== n && r(t$constructor$prototype = t$constructor.prototype) && t$constructor$prototype !== n.prototype) {
    o(e, t$constructor$prototype)
  }
  return e
}
