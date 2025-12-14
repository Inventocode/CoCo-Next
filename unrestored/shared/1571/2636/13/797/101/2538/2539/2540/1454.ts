/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1454
 */

var r = require("../../../../../253/2588/1461/2585/502/index")
var i = exports && !exports.nodeType && exports
var o = i && "object" == typeof module && module && !module.nodeType && module
var a = o && o.exports === i ? r.Buffer : undefined
var s = a ? a.allocUnsafe : undefined
module.exports = function (e, t) {
  if (t) {
    return e.slice()
  }
  var /* [auto-meaningful-name] */e$length = e.length
  var r = s ? s(e$length) : new e.constructor(e$length)
  e.copy(r)
  return r
}
