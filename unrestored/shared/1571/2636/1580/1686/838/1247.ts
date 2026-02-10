/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1247
 */

var r = require("../../1282/240")
module.exports = function (e, t, n) {
  var o
  var i
  r(e)
  try {
    if (undefined === (o = e.return)) {
      if ("throw" === t) {
        throw n
      }
      return n
    }
    o = o.call(e)
  } catch (a) {
    i = true
    o = a
  }
  if ("throw" === t) {
    throw n
  }
  if (i) {
    throw o
  }
  r(o)
  return n
}
