/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2493
 */

var object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
module.exports = function (e) {
  var e$length = e.length
  var r = new e.constructor(e$length)
  if (e$length && "string" == typeof e[0] && object$prototype$hasOwnProperty.call(e, "index")) {
    r.index = e.index
    r.input = e.input
  }
  return r
}
