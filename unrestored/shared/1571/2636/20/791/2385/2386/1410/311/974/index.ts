/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：974
 */

var r = require("../../../../../../../1058/1393/1143/532")
var i = require("../../../../../../../1058/1393/1143/283/1120")
var o = require("./2009")
var a = require("./2010")
function s(t) {
  var n = "function" === typeof Map ? new Map() : undefined
  module.exports = s = function (e) {
    if (null === e || !o(e)) {
      return e
    }
    if ("function" !== typeof e) {
      throw new TypeError("Super expression must either be null or a function")
    }
    if ("undefined" !== typeof n) {
      if (n.has(e)) {
        return n.get(e)
      }
      n.set(e, t)
    }
    function t() {
      return a(e, arguments, r(this).constructor)
    }
    t.prototype = Object.create(e.prototype, {
      constructor: {
        value: t,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    return i(t, e)
  }
  return s(t)
}
module.exports = s
