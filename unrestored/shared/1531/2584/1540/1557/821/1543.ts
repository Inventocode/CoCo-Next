/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1543
 */

var r = require("../../1541/231")
var o = require("../../1541/819")
var i = require("../../1541/247/index")("species")
module.exports = function (e) {
  var t
  if (o(e)) {
    if ("function" != typeof (t = e.constructor) || t !== Array && !o(t.prototype)) {
      if (r(t) && null === (t = t[i])) {
        t = undefined
      }
    } else {
      t = undefined
    }
  }
  return undefined === t ? Array : t
}
