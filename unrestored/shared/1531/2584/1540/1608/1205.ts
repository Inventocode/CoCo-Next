/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1205
 */

var r = require("../1541/231")
var o = require("../1541/749")
var i = require("../1583/1584/1207")
var a = require("../1541/247/index")("toPrimitive")
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
