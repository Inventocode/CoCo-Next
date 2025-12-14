/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1178
 */

var r = require("./2495/index")
var i = require("./2502/index")
var o = require("./2504")
var a = require("./2505")
var s = require("./2506")
function c(e) {
  var t = -1
  var n = null == e ? 0 : e.length
  for (this.clear(); ++t < n;) {
    var r = e[t]
    this.set(r[0], r[1])
  }
}
c.prototype.clear = r
c.prototype.delete = i
c.prototype.get = o
c.prototype.has = a
c.prototype.set = s
module.exports = c
