/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2481
 */

var r = require("../../../../254/2533/2534/2535/2536/1409/index")
var i = require("../../../../254/2513/2514/2519/2527/762/index")
module.exports = function (e, t) {
  var n = -1
  var o = i(e) ? Array(e.length) : []
  r(e, function (e, r, i) {
    o[++n] = t(e, r, i)
  })
  return o
}
