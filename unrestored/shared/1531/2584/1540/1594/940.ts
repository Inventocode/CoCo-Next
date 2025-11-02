/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：940
 */

var math$expm1 = Math.expm1
var math$exp = Math.exp
module.exports = !math$expm1 || math$expm1(10) > 22025.465794806718 || math$expm1(10) < 22025.465794806718 || -2e-17 != math$expm1(-2e-17) ? function (e) {
  return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : math$exp(e) - 1
} : math$expm1
