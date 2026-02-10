/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1606
 */

var r = require("../../1282/240")
var o = require("../../1686/838/1247")
module.exports = function (e, t, n, i) {
  try {
    return i ? t(r(n)[0], n[1]) : t(n)
  } catch (a) {
    o(e, "throw", a)
  }
}
