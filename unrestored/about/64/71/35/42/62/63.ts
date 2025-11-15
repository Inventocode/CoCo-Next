/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：63
 */

"use strict"

var r = "function" === typeof Symbol && Symbol.for
var i = r ? Symbol.for("react.element") : 60103
var o = r ? Symbol.for("react.portal") : 60106
var a = r ? Symbol.for("react.fragment") : 60107
var s = r ? Symbol.for("react.strict_mode") : 60108
var u = r ? Symbol.for("react.profiler") : 60114
var l = r ? Symbol.for("react.provider") : 60109
var c = r ? Symbol.for("react.context") : 60110
var f = r ? Symbol.for("react.async_mode") : 60111
var d = r ? Symbol.for("react.concurrent_mode") : 60111
var p = r ? Symbol.for("react.forward_ref") : 60112
var h = r ? Symbol.for("react.suspense") : 60113
var m = r ? Symbol.for("react.suspense_list") : 60120
var v = r ? Symbol.for("react.memo") : 60115
var y = r ? Symbol.for("react.lazy") : 60116
var g = r ? Symbol.for("react.block") : 60121
var b = r ? Symbol.for("react.fundamental") : 60117
var _ = r ? Symbol.for("react.responder") : 60118
var E = r ? Symbol.for("react.scope") : 60119
function O(e) {
  if ("object" === typeof e && null !== e) {
    var /* [auto-meaningful-name] */e$$$typeof = e.$$typeof
    switch (e$$$typeof) {
      case i:
        switch (e = e.type) {
          case f:
          case d:
          case a:
          case u:
          case s:
          case h:
            return e
          default:
            switch (e = e && e.$$typeof) {
              case c:
              case p:
              case y:
              case v:
              case l:
                return e
              default:
                return e$$$typeof
            }
        }
      case o:
        return e$$$typeof
    }
  }
}
function w(e) {
  return O(e) === d
}
exports.AsyncMode = f
exports.ConcurrentMode = d
exports.ContextConsumer = c
exports.ContextProvider = l
exports.Element = i
exports.ForwardRef = p
exports.Fragment = a
exports.Lazy = y
exports.Memo = v
exports.Portal = o
exports.Profiler = u
exports.StrictMode = s
exports.Suspense = h
exports.isAsyncMode = function (e) {
  return w(e) || O(e) === f
}
exports.isConcurrentMode = w
exports.isContextConsumer = function (e) {
  return O(e) === c
}
exports.isContextProvider = function (e) {
  return O(e) === l
}
exports.isElement = function (e) {
  return "object" === typeof e && null !== e && e.$$typeof === i
}
exports.isForwardRef = function (e) {
  return O(e) === p
}
exports.isFragment = function (e) {
  return O(e) === a
}
exports.isLazy = function (e) {
  return O(e) === y
}
exports.isMemo = function (e) {
  return O(e) === v
}
exports.isPortal = function (e) {
  return O(e) === o
}
exports.isProfiler = function (e) {
  return O(e) === u
}
exports.isStrictMode = function (e) {
  return O(e) === s
}
exports.isSuspense = function (e) {
  return O(e) === h
}
exports.isValidElementType = function (e) {
  return "string" === typeof e || "function" === typeof e || e === a || e === d || e === u || e === s || e === h || e === m || "object" === typeof e && null !== e && (e.$$typeof === y || e.$$typeof === v || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === E || e.$$typeof === g)
}
exports.typeOf = O
