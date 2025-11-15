/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1230
 */

var /* [auto-meaningful-name] */Math$log = Math.log
module.exports = Math.log1p || function (e) {
  return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math$log(1 + e)
}
