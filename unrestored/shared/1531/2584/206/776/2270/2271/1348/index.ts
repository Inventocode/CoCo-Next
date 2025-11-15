/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1348
 */

var t
var r
var i
t = require("./2279")
r = require("./2280")
i = function (e, n, i) {
  return r(t(e), n, i)
}
module.exports = {
  VERSION: "0.3.2",
  typeCheck: i,
  parsedTypeCheck: r,
  parseType: t
}
