/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1538
 */

"use strict"

var r = "function" === typeof Symbol && Symbol.for
var i = r ? Symbol.for("react.element") : 60103
var o = r ? Symbol.for("react.portal") : 60106
var a = r ? Symbol.for("react.fragment") : 60107
var s = r ? Symbol.for("react.strict_mode") : 60108
var c = r ? Symbol.for("react.profiler") : 60114
var u = r ? Symbol.for("react.provider") : 60109
var l = r ? Symbol.for("react.context") : 60110
var f = r ? Symbol.for("react.async_mode") : 60111
var d = r ? Symbol.for("react.concurrent_mode") : 60111
var h = r ? Symbol.for("react.forward_ref") : 60112
var p = r ? Symbol.for("react.suspense") : 60113
var _ = r ? Symbol.for("react.suspense_list") : 60120
var A = r ? Symbol.for("react.memo") : 60115
var g = r ? Symbol.for("react.lazy") : 60116
var v = r ? Symbol.for("react.block") : 60121
var m = r ? Symbol.for("react.fundamental") : 60117
var y = r ? Symbol.for("react.responder") : 60118
var b = r ? Symbol.for("react.scope") : 60119
function w(e) {
  if ("object" === typeof e && null !== e) {
    var e$$$typeof = e.$$typeof
    switch (e$$$typeof) {
      case i:
        switch (e = e.type) {
          case f:
          case d:
          case a:
          case c:
          case s:
          case p:
            return e
          default:
            switch (e = e && e.$$typeof) {
              case l:
              case h:
              case g:
              case A:
              case u:
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
function E(e) {
  return w(e) === d
}
exports.AsyncMode = f
exports.ConcurrentMode = d
exports.ContextConsumer = l
exports.ContextProvider = u
exports.Element = i
exports.ForwardRef = h
exports.Fragment = a
exports.Lazy = g
exports.Memo = A
exports.Portal = o
exports.Profiler = c
exports.StrictMode = s
exports.Suspense = p
exports.isAsyncMode = function (e) {
  return E(e) || w(e) === f
}
exports.isConcurrentMode = E
exports.isContextConsumer = function (e) {
  return w(e) === l
}
exports.isContextProvider = function (e) {
  return w(e) === u
}
exports.isElement = function (e) {
  return "object" === typeof e && null !== e && e.$$typeof === i
}
exports.isForwardRef = function (e) {
  return w(e) === h
}
exports.isFragment = function (e) {
  return w(e) === a
}
exports.isLazy = function (e) {
  return w(e) === g
}
exports.isMemo = function (e) {
  return w(e) === A
}
exports.isPortal = function (e) {
  return w(e) === o
}
exports.isProfiler = function (e) {
  return w(e) === c
}
exports.isStrictMode = function (e) {
  return w(e) === s
}
exports.isSuspense = function (e) {
  return w(e) === p
}
exports.isValidElementType = function (e) {
  return "string" === typeof e || "function" === typeof e || e === a || e === d || e === c || e === s || e === p || e === _ || "object" === typeof e && null !== e && (e.$$typeof === g || e.$$typeof === A || e.$$typeof === u || e.$$typeof === l || e.$$typeof === h || e.$$typeof === m || e.$$typeof === y || e.$$typeof === b || e.$$typeof === v)
}
exports.typeOf = w
