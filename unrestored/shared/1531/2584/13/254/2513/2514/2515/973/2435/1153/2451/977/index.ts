/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：977
 */

var r = require("./2448")
module.exports = function (e, t) {
  var e$__data__ = e.__data__
  return r(t) ? e$__data__["string" == typeof t ? "string" : "hash"] : e$__data__.map
}
