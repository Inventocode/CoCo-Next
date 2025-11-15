/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2493
 */

var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
module.exports = function (e) {
  var /* [auto-meaningful-name] */e$length = e.length
  var r = new e.constructor(e$length)
  if (e$length && "string" == typeof e[0] && Object$prototype$hasOwnProperty.call(e, "index")) {
    r.index = e.index
    r.input = e.input
  }
  return r
}
