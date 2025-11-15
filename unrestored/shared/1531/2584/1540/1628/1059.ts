/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1059
 */

var r = require("../1541/472")
var o = require("../1541/631/index")
var i = require("../1541/1061")
var a = require("../1541/241")
module.exports = r("Reflect", "ownKeys") || function (e) {
  var t = o.f(a(e))
  var n = i.f
  return n ? t.concat(n(e)) : t
}
