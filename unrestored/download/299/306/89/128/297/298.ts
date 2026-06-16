/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：298
 */

"use strict"

var r = "function" === typeof Symbol && Symbol.for
var i = r ? Symbol.for("react.element") : 60103
var o = r ? Symbol.for("react.portal") : 60106
var a = r ? Symbol.for("react.fragment") : 60107
var s = r ? Symbol.for("react.strict_mode") : 60108
var u = r ? Symbol.for("react.profiler") : 60114
var c = r ? Symbol.for("react.provider") : 60109
var l = r ? Symbol.for("react.context") : 60110
var f = r ? Symbol.for("react.async_mode") : 60111
var p = r ? Symbol.for("react.concurrent_mode") : 60111
var d = r ? Symbol.for("react.forward_ref") : 60112
var h = r ? Symbol.for("react.suspense") : 60113
var g = r ? Symbol.for("react.suspense_list") : 60120
var m = r ? Symbol.for("react.memo") : 60115
var v = r ? Symbol.for("react.lazy") : 60116
var y = r ? Symbol.for("react.block") : 60121
var _ = r ? Symbol.for("react.fundamental") : 60117
var b = r ? Symbol.for("react.responder") : 60118
var w = r ? Symbol.for("react.scope") : 60119
function S(e) {
  if ("object" === typeof e && null !== e) {
    var /* [auto-meaningful-name] */e$$$typeof = e.$$typeof
    switch (e$$$typeof) {
      case i:
        switch (e = e.type) {
          case f:
          case p:
          case a:
          case u:
          case s:
          case h:
            return e
          default:
            switch (e = e && e.$$typeof) {
              case l:
              case d:
              case v:
              case m:
              case c:
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
function k(e) {
  return S(e) === p
}
exports.AsyncMode = f
exports.ConcurrentMode = p
exports.ContextConsumer = l
exports.ContextProvider = c
exports.Element = i
exports.ForwardRef = d
exports.Fragment = a
exports.Lazy = v
exports.Memo = m
exports.Portal = o
exports.Profiler = u
exports.StrictMode = s
exports.Suspense = h
exports.isAsyncMode = function (e) {
  return k(e) || S(e) === f
}
exports.isConcurrentMode = k
exports.isContextConsumer = function (e) {
  return S(e) === l
}
exports.isContextProvider = function (e) {
  return S(e) === c
}
exports.isElement = function (e) {
  return "object" === typeof e && null !== e && e.$$typeof === i
}
exports.isForwardRef = function (e) {
  return S(e) === d
}
exports.isFragment = function (e) {
  return S(e) === a
}
exports.isLazy = function (e) {
  return S(e) === v
}
exports.isMemo = function (e) {
  return S(e) === m
}
exports.isPortal = function (e) {
  return S(e) === o
}
exports.isProfiler = function (e) {
  return S(e) === u
}
exports.isStrictMode = function (e) {
  return S(e) === s
}
exports.isSuspense = function (e) {
  return S(e) === h
}
exports.isValidElementType = function (e) {
  return "string" === typeof e || "function" === typeof e || e === a || e === p || e === u || e === s || e === h || e === g || "object" === typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === c || e.$$typeof === l || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === b || e.$$typeof === w || e.$$typeof === y)
}
exports.typeOf = S
