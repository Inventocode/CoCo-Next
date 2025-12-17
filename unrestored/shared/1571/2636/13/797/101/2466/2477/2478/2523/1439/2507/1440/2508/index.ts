/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2508
 */

var r = require("../../../../../../../../../../253/2568/2569/2570/994/2490/1178/index")
var i = require("./2509")
var o = require("./2510")
function a(e) {
  var t = -1
  var n = null == e ? 0 : e.length
  for (this.__data__ = new r(); ++t < n;) {
    this.add(e[t])
  }
}
a.prototype.add = a.prototype.push = i
a.prototype.has = o
module.exports = a
