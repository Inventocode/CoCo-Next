/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1239
 */

var r = require("../1659/241")
var o = require("../1738/231")
var i = require("../1646/1240")
module.exports = function (e, t) {
  r(e)
  if (o(t) && t.constructor === e) {
    return t
  }
  var n = i.f(e);
  (0, n.resolve)(t)
  return n.promise
}
