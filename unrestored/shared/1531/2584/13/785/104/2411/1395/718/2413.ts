/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2413
 */

var r = require("./849")
var object$prototype = Object.prototype
var object$prototype$hasOwnProperty = object$prototype.hasOwnProperty
var object$prototype$toString = object$prototype.toString
var s = r ? r.toStringTag : undefined
module.exports = function (e) {
  var t = object$prototype$hasOwnProperty.call(e, s)
  var n = e[s]
  try {
    e[s] = undefined
    var r = true
  } catch (c) {}
  var i = object$prototype$toString.call(e)
  if (r) {
    if (t) {
      e[s] = n
    } else {
      delete e[s]
    }
  }
  return i
}
