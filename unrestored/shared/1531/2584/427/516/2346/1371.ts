/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1371
 */

for (var n = [], r = 0; r < 256; ++r) {
  n[r] = (r + 256).toString(16).substr(1)
}
module.exports = function (e, t) {
  var r = t || 0
  var i = n
  return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
}
