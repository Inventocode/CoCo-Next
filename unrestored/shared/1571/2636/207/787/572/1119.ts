/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1119
 */

var r = require("../711/2004/1327")
module.exports = function (e, t) {
  if (e) {
    if ("string" === typeof e) {
      return r(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : undefined
  }
}
