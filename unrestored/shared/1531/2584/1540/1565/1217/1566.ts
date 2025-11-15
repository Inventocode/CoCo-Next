/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1566
 */

var r = require("../../1541/241")
var o = require("../../1626/827/1218")
module.exports = function (e, t, n, i) {
  try {
    return i ? t(r(n)[0], n[1]) : t(n)
  } catch (a) {
    o(e, "throw", a)
  }
}
