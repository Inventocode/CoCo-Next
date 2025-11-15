/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：940
 */

var /* [auto-meaningful-name] */Math$expm1 = Math.expm1
var /* [auto-meaningful-name] */Math$exp = Math.exp
module.exports = !Math$expm1 || Math$expm1(10) > 22025.465794806718 || Math$expm1(10) < 22025.465794806718 || -2e-17 != Math$expm1(-2e-17) ? function (e) {
  return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math$exp(e) - 1
} : Math$expm1
