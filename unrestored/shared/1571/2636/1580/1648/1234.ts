/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1234
 */

var r = require("../1705/231")
var o = require("../1581/757/index")
var i = require("../1623/1624/1236")
var a = require("../1686/246")("toPrimitive")
module.exports = function (e, t) {
  if (!r(e) || o(e)) {
    return e
  }
  var n
  var s = e[a]
  if (undefined !== s) {
    if (undefined === t) {
      t = "default"
    }
    n = s.call(e, t)
    if (!r(n) || o(n)) {
      return n
    }
    throw TypeError("Can't convert object to primitive value")
  }
  if (undefined === t) {
    t = "number"
  }
  return i(e, t)
}
