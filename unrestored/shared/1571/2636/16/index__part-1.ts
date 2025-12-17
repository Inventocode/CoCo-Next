/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：16__part-1
 */

"use strict"

import { o, u } from "./index__part-0"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_339 from "../339"
import * as /* [auto-meaningful-name] */$_695 from "./695"
import /* [auto-meaningful-name] */_$_ from "./695"
import * as /* [auto-meaningful-name] */$$_241_index from "../241/index"
var A = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? _React.useLayoutEffect : _React.useEffect
var g = []
var v = [null, null]
function m(e, t) {
  var n = e[1]
  return [t.payload, n + 1]
}
function y(e, t, n) {
  A(function () {
    return e.apply(undefined, t)
  }, n)
}
function b(e, t, n, r, i, o, a) {
  e.current = r
  t.current = i
  n.current = false
  if (o.current) {
    o.current = null
    a()
  }
}
function w(e, t, n, r, i, o, a, s, c, u) {
  if (e) {
    var l = false
    var f = null
    var d = function () {
      if (!l) {
        var e
        var n
        var d = t.getState()
        try {
          e = r(d, i.current)
        } catch (h) {
          n = h
          f = h
        }
        if (!n) {
          f = null
        }
        if (e === o.current) {
          if (!a.current) {
            c()
          }
        } else {
          o.current = e
          s.current = e
          a.current = true
          u({
            type: "STORE_UPDATED",
            payload: {
              error: n
            }
          })
        }
      }
    }
    n.onStateChange = d
    n.trySubscribe()
    d()
    return function () {
      l = true
      n.tryUnsubscribe()
      n.onStateChange = null
      if (f) {
        throw f
      }
    }
  }
}
var E = function () {
  return [null, 0]
}
function x(e, t) {
  if (undefined === t) {
    t = {}
  }
  var n = t
  var /* [auto-meaningful-name] */n$getDisplayName = n.getDisplayName
  var s = undefined === n$getDisplayName ? function (e) {
    return "ConnectAdvanced(" + e + ")"
  } : n$getDisplayName
  var /* [auto-meaningful-name] */n$methodName = n.methodName
  var l = undefined === n$methodName ? "connectAdvanced" : n$methodName
  var /* [auto-meaningful-name] */n$renderCountProp = n.renderCountProp
  var A = undefined === n$renderCountProp ? undefined : n$renderCountProp
  var /* [auto-meaningful-name] */n$shouldHandleStateChanges = n.shouldHandleStateChanges
  var C = undefined === n$shouldHandleStateChanges || n$shouldHandleStateChanges
  var /* [auto-meaningful-name] */n$storeKey = n.storeKey
  var k = undefined === n$storeKey ? "store" : n$storeKey
  n.withRef
  var /* [auto-meaningful-name] */n$forwardRef = n.forwardRef
  var T = undefined !== n$forwardRef && n$forwardRef
  var /* [auto-meaningful-name] */n$context = n.context
  var D = undefined === n$context ? o : n$context
  var I = $$_339.a(n, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"])
  var R = D
  return function (t) {
    var n = t.displayName || t.name || "Component"
    var o = s(n)
    var a = $$_19.a({}, I, {
      getDisplayName: s,
      methodName: l,
      renderCountProp: A,
      shouldHandleStateChanges: C,
      storeKey: k,
      displayName: o,
      wrappedComponentName: n,
      WrappedComponent: t
    })
    var /* [auto-meaningful-name] */I$pure = I.pure
    var h = I$pure ? _React.useMemo : function (e) {
      return e()
    }
    function x(n) {
      var o = _React.useMemo(function () {
        var /* [auto-meaningful-name] */n$reactReduxForwardedRef = n.reactReduxForwardedRef
        var t = $$_339.a(n, ["reactReduxForwardedRef"])
        return [n.context, n$reactReduxForwardedRef, t]
      }, [n])
      var s = o[0]
      var c = o[1]
      var l = o[2]
      var p = _React.useMemo(function () {
        return s && s.Consumer && $$_241_index.isContextConsumer(React.createElement(s.Consumer, null)) ? s : R
      }, [s, R])
      var A = _React.useContext(p)
      var x = Boolean(n.store) && Boolean(n.store.getState) && Boolean(n.store.dispatch)
      if (Boolean(A)) {
        Boolean(A.store)
      }
      var O = x ? n.store : A.store
      var k = _React.useMemo(function () {
        return function (t) {
          return e(t.dispatch, a)
        }(O)
      }, [O])
      var S = _React.useMemo(function () {
        if (!C) {
          return v
        }
        var e = new u(O, x ? null : A.subscription)
        var t = e.notifyNestedSubs.bind(e)
        return [e, t]
      }, [O, x, A])
      var T = S[0]
      var B = S[1]
      var D = _React.useMemo(function () {
        return x ? A : $$_19.a({}, A, {
          subscription: T
        })
      }, [x, A, T])
      var I = _React.useReducer(m, g, E)
      var F = I[0][0]
      var P = I[1]
      if (F && F.error) {
        throw F.error
      }
      var N = _React.useRef()
      var M = _React.useRef(l)
      var L = _React.useRef()
      var j = _React.useRef(false)
      var U = h(function () {
        return L.current && l === M.current ? L.current : k(O.getState(), l)
      }, [O, F, l])
      y(b, [M, N, j, l, U, L, B])
      y(w, [C, O, T, k, M, N, j, L, B, P], [O, T, k])
      var H = _React.useMemo(function () {
        return React.createElement(t, $$_19.a({}, U, {
          ref: c
        }))
      }, [c, t, U])
      return _React.useMemo(function () {
        return C ? React.createElement(p.Provider, {
          value: D
        }, H) : H
      }, [p, H, D])
    }
    var O = I$pure ? React.memo(x) : x
    O.WrappedComponent = t
    O.displayName = o
    if (T) {
      var S = React.forwardRef(function (e, t) {
        return React.createElement(O, $$_19.a({}, e, {
          reactReduxForwardedRef: t
        }))
      })
      S.displayName = o
      S.WrappedComponent = t
      return _$_(S, t)
    }
    return _$_(O, t)
  }
}
function C(e, t) {
  return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
}
function O(e, t) {
  if (C(e, t)) {
    return true
  }
  if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) {
    return false
  }
  var n = Object.keys(e)
  var r = Object.keys(t)
  if (n.length !== r.length) {
    return false
  }
  for (var i = 0; i < n.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !C(e[n[i]], t[n[i]])) {
      return false
    }
  }
  return true
}
export { A }
export { x }
export { O }
