/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1047
 */

var r = require("./1752")
module.exports = function (e, t) {
  if ("function" !== typeof t && null !== t) {
    throw new TypeError("Super expression must either be null or a function")
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true
    }
  })
  if (t) {
    r(e, t)
  }
}
