/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1464
 */

"use strict";

(function (e) {
  var r = require("./325")
  var i = "object" == typeof exports && exports && !exports.nodeType && exports
  var o = i && "object" == typeof e && e && !e.nodeType && e
  var a = o && o.exports === i ? r.a.Buffer : undefined
  var s = a ? a.allocUnsafe : undefined
  exports.a = function (e, t) {
    if (t) {
      return e.slice()
    }
    var e$length = e.length
    var r = s ? s(e$length) : new e.constructor(e$length)
    e.copy(r)
    return r
  }
}).call(this, require("../../155/1167/574")(module))
