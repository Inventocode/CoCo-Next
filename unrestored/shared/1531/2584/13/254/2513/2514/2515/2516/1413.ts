/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1413
 */

(function (e) {
  var r = require("../../../../2533/1420/2530/499/index")
  var i = exports && !exports.nodeType && exports
  var o = i && "object" == typeof e && e && !e.nodeType && e
  var a = o && o.exports === i ? r.Buffer : undefined
  var s = a ? a.allocUnsafe : undefined
  e.exports = function (e, t) {
    if (t) {
      return e.slice()
    }
    var e$length = e.length
    var r = s ? s(e$length) : new e.constructor(e$length)
    e.copy(r)
    return r
  }
}).call(this, require("../../../../../../31/571")(module))
