/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2536
 */

var r = require("./1450/index")
var i = require("../../../../../253/2568/2569/2574/2582/771/index")
module.exports = function (e, t) {
  var n = -1
  var o = i(e) ? Array(e.length) : []
  r(e, function (e, r, i) {
    o[++n] = t(e, r, i)
  })
  return o
}
