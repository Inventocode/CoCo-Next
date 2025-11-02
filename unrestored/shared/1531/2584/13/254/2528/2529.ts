/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2529
 */

var r = require("../2533/1420/index")
var i = require("../2533/1420/475")
module.exports = function (e, t, n) {
  var o = true
  var a = true
  if ("function" != typeof e) {
    throw new TypeError("Expected a function")
  }
  if (i(n)) {
    o = "leading" in n ? !!n.leading : o
    a = "trailing" in n ? !!n.trailing : a
  }
  return r(e, t, {
    leading: o,
    maxWait: t,
    trailing: a
  })
}
