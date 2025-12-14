/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：946
 */

var r = require("./945")
var o = require("./826")
var i = r("keys")
module.exports = function (e) {
  return i[e] || (i[e] = o(e))
}
