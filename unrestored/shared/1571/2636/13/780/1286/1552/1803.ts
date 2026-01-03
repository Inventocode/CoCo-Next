/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1803
 */

var r = require("./1801/1287")
module.exports = function (e, t) {
  if (e) {
    if ("string" === typeof e) {
      return r(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : undefined
  }
}
