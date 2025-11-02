/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1369
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("./359")
var i = require("./1366/498")
exports.traverseAncerstors = function e(t, n) {
  var t$parentRequest = t.parentRequest
  return null !== t$parentRequest && (!!n(t$parentRequest) || e(t$parentRequest, n))
}
var o = function (e) {
  return function (t) {
    var n = function (n) {
      return null !== n && null !== n.target && n.target.matchesTag(e)(t)
    }
    n.metaData = new i.Metadata(e, t)
    return n
  }
}
exports.taggedConstraint = o
var a = o(r.NAMED_TAG)
exports.namedConstraint = a
exports.typeConstraint = function (e) {
  return function (t) {
    var n = null
    if (null !== t) {
      n = t.bindings[0]
      if ("string" === typeof e) {
        return n.serviceIdentifier === e
      }
      var t$bindings0$implementationType = t.bindings[0].implementationType
      return e === t$bindings0$implementationType
    }
    return false
  }
}
