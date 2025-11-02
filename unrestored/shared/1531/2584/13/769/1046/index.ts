/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1046
 */

var r = require("./1081")
function i() {
  if ("function" !== typeof WeakMap) {
    return null
  }
  var e = new WeakMap()
  i = function () {
    return e
  }
  return e
}
module.exports = function (e) {
  if (e && e.__esModule) {
    return e
  }
  if (null === e || "object" !== r(e) && "function" !== typeof e) {
    return {
      default: e
    }
  }
  var t = i()
  if (t && t.has(e)) {
    return t.get(e)
  }
  var n = {}
  var o = Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
    var s = o ? Object.getOwnPropertyDescriptor(e, a) : null
    if (s && (s.get || s.set)) {
      Object.defineProperty(n, a, s)
    } else {
      n[a] = e[a]
    }
  }
  n.default = e
  if (t) {
    t.set(e, n)
  }
  return n
}
