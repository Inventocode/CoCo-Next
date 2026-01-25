/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：995
 */

var r = require("./2481")
var i = require("./2482")
var o = require("./2483")
var a = require("./2484/index")
var s = require("./2485")
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
