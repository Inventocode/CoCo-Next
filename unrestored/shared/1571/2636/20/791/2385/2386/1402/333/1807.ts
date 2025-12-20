/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1807
 */

var /* [auto-meaningful-name] */$toString = {}.toString
module.exports = Array.isArray || function (e) {
  return "[object Array]" == $toString.call(e)
}
