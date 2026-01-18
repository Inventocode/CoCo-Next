/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：797__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_50_index from "../../50/index"
import /* [auto-meaningful-name] */$$_$$_50_index1 from "../../50/index"
var T = function () {
  this.__data__ = []
  this.size = 0
}
var B = function (e, t) {
  return e === t || e !== e && t !== t
}
var D = function (e, t) {
  for (var /* [auto-meaningful-name] */e$length = e.length; e$length--;) {
    if (B(e[e$length][0], t)) {
      return e$length
    }
  }
  return -1
}
var /* [auto-meaningful-name] */Array$prototype$splice = Array.prototype.splice
var R = function (e) {
  var /* [auto-meaningful-name] */this$__data__ = this.__data__
  var n = D(this$__data__, e)
  return !(n < 0) && (n == this$__data__.length - 1 ? this$__data__.pop() : Array$prototype$splice.call(this$__data__, n, 1), --this.size, true)
}
var F = function (e) {
  var /* [auto-meaningful-name] */this$__data__ = this.__data__
  var n = D(this$__data__, e)
  return n < 0 ? undefined : this$__data__[n][1]
}
var P = function (e) {
  return D(this.__data__, e) > -1
}
var N = function (e, t) {
  var /* [auto-meaningful-name] */this$__data__ = this.__data__
  var r = D(this$__data__, e)
  if (r < 0) {
    ++this.size
    this$__data__.push([e, t])
  } else {
    this$__data__[r][1] = t
  }
  return this
}
function M(e) {
  var t = -1
  var n = null == e ? 0 : e.length
  for (this.clear(); ++t < n;) {
    var r = e[t]
    this.set(r[0], r[1])
  }
}
M.prototype.clear = T
M.prototype.delete = R
M.prototype.get = F
M.prototype.has = P
M.prototype.set = N
var L = M
var j = function () {
  this.__data__ = new L()
  this.size = 0
}
var U = function (e) {
  var /* [auto-meaningful-name] */this$__data__ = this.__data__
  var n = this$__data__.delete(e)
  this.size = this$__data__.size
  return n
}
var H = function (e) {
  return this.__data__.get(e)
}
var V = function (e) {
  return this.__data__.has(e)
}
export { B }
export { L }
export { j }
export { U }
export { H }
export { V }
