/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：634
 */

var r = require("../1541/241")
var o = require("../1666/1221")
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var /* [auto-meaningful-name] */Object$getOwnPropertyDescriptorObject$prototype__proto__$set
  var t = false
  var n = {}
  try {
    (Object$getOwnPropertyDescriptorObject$prototype__proto__$set = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, [])
    t = n instanceof Array
  } catch (i) {}
  return function (n, i) {
    r(n)
    o(i)
    if (t) {
      Object$getOwnPropertyDescriptorObject$prototype__proto__$set.call(n, i)
    } else {
      n.__proto__ = i
    }
    return n
  }
}() : undefined)
