/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：687
 */

"use strict"

var r = require("../242/index")
var i = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
}
var o = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
}
var a = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
}
var s = {}
function c(e) {
  return r.isMemo(e) ? a : s[e.$$typeof] || i
}
s[r.ForwardRef] = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
}
s[r.Memo] = a
var object$defineProperty = Object.defineProperty
var object$getOwnPropertyNames = Object.getOwnPropertyNames
var object$getOwnPropertySymbols = Object.getOwnPropertySymbols
var object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
var object$getPrototypeOf = Object.getPrototypeOf
var object$prototype = Object.prototype
module.exports = function e(t, n, r) {
  if ("string" !== typeof n) {
    if (object$prototype) {
      var i = object$getPrototypeOf(n)
      if (i && i !== object$prototype) {
        e(t, i, r)
      }
    }
    var a = object$getOwnPropertyNames(n)
    if (object$getOwnPropertySymbols) {
      a = a.concat(object$getOwnPropertySymbols(n))
    }
    for (var s = c(t), _ = c(n), A = 0; A < a.length; ++A) {
      var g = a[A]
      if (!o[g] && (!r || !r[g]) && (!_ || !_[g]) && (!s || !s[g])) {
        var v = object$getOwnPropertyDescriptor(n, g)
        try {
          object$defineProperty(t, g, v)
        } catch (m) {}
      }
    }
  }
  return t
}
