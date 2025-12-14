/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：714
 */

var /* [auto-meaningful-name] */$toString = {}.toString
module.exports = function (e) {
  return $toString.call(e).slice(8, -1)
}
