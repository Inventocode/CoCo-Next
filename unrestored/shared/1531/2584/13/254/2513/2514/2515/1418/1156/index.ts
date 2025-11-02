/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1156
 */

var r = require("./1412")
module.exports = function (e, t, n) {
  if ("__proto__" == t && r) {
    r(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    })
  } else {
    e[t] = n
  }
}
