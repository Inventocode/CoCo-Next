/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：16
 */

"use strict"

export { l as a }
export { H as c }
export { unstable_batchedUpdates as b } from "../75/index"
export { W as d }
export { q as e }
export { z as f }
import /* [auto-meaningful-name] */React = require("react")
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(React)
require("../50/index")
var o = i.a.createContext(null)
var a = function (e) {
  e()
}
var s = {
  notify: function () {}
}
function c() {
  var e = a
  var t = null
  var n = null
  return {
    clear: function () {
      t = null
      n = null
    },
    notify: function () {
      e(function () {
        for (var e = t; e;) {
          e.callback()
          e = e.next
        }
      })
    },
    get: function () {
      for (var e = [], n = t; n;) {
        e.push(n)
        n = n.next
      }
      return e
    },
    subscribe: function (e) {
      var r = true
      var i = n = {
        callback: e,
        next: null,
        prev: n
      }
      if (i.prev) {
        i.prev.next = i
      } else {
        t = i
      }
      return function () {
        if (r && null !== t) {
          r = false
          if (i.next) {
            i.next.prev = i.prev
          } else {
            n = i.prev
          }
          if (i.prev) {
            i.prev.next = i.next
          } else {
            t = i.next
          }
        }
      }
    }
  }
}
var u = function () {
  function e(e, t) {
    this.store = e
    this.parentSub = t
    this.unsubscribe = null
    this.listeners = s
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.addNestedSub = function (e) {
    this.trySubscribe()
    return this.listeners.subscribe(e)
  }
  e$prototype.notifyNestedSubs = function () {
    this.listeners.notify()
  }
  e$prototype.handleChangeWrapper = function () {
    if (this.onStateChange) {
      this.onStateChange()
    }
  }
  e$prototype.isSubscribed = function () {
    return Boolean(this.unsubscribe)
  }
  e$prototype.trySubscribe = function () {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper)
      this.listeners = c()
    }
  }
  e$prototype.tryUnsubscribe = function () {
    if (this.unsubscribe) {
      this.unsubscribe()
      this.unsubscribe = null
      this.listeners.clear()
      this.listeners = s
    }
  }
  return e
}()
var l = function (e) {
  var /* [auto-meaningful-name] */e$store = e.store
  var /* [auto-meaningful-name] */e$context = e.context
  var /* [auto-meaningful-name] */e$children = e.children
  var s = React.useMemo(function () {
    var e = new u(e$store)
    e.onStateChange = e.notifyNestedSubs
    return {
      store: e$store,
      subscription: e
    }
  }, [e$store])
  var c = React.useMemo(function () {
    return e$store.getState()
  }, [e$store])
  React.useEffect(function () {
    var /* [auto-meaningful-name] */s$subscription = s.subscription
    s$subscription.trySubscribe()
    if (c !== e$store.getState()) {
      s$subscription.notifyNestedSubs()
    }
    return function () {
      s$subscription.tryUnsubscribe()
      s$subscription.onStateChange = null
    }
  }, [s, c])
  var l = e$context || o
  return i.a.createElement(l.Provider, {
    value: s
  }, e$children)
}
import /* [auto-meaningful-name] */$$_19 = require("../19")
import /* [auto-meaningful-name] */$$_337 = require("../337")
import /* [auto-meaningful-name] */$_687 = require("./687")
var p = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_687)
import /* [auto-meaningful-name] */$$_242_index = require("../242/index")
var A = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? React.useLayoutEffect : React.useEffect
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
  var I = $$_337.a(n, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"])
  var F = D
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
    var h = I$pure ? React.useMemo : function (e) {
      return e()
    }
    function x(n) {
      var o = React.useMemo(function () {
        var /* [auto-meaningful-name] */n$reactReduxForwardedRef = n.reactReduxForwardedRef
        var t = $$_337.a(n, ["reactReduxForwardedRef"])
        return [n.context, n$reactReduxForwardedRef, t]
      }, [n])
      var s = o[0]
      var c = o[1]
      var l = o[2]
      var p = React.useMemo(function () {
        return s && s.Consumer && $$_242_index.isContextConsumer(i.a.createElement(s.Consumer, null)) ? s : F
      }, [s, F])
      var A = React.useContext(p)
      var x = Boolean(n.store) && Boolean(n.store.getState) && Boolean(n.store.dispatch)
      if (Boolean(A)) {
        Boolean(A.store)
      }
      var O = x ? n.store : A.store
      var k = React.useMemo(function () {
        return function (t) {
          return e(t.dispatch, a)
        }(O)
      }, [O])
      var S = React.useMemo(function () {
        if (!C) {
          return v
        }
        var e = new u(O, x ? null : A.subscription)
        var t = e.notifyNestedSubs.bind(e)
        return [e, t]
      }, [O, x, A])
      var T = S[0]
      var B = S[1]
      var D = React.useMemo(function () {
        return x ? A : $$_19.a({}, A, {
          subscription: T
        })
      }, [x, A, T])
      var I = React.useReducer(m, g, E)
      var R = I[0][0]
      var P = I[1]
      if (R && R.error) {
        throw R.error
      }
      var N = React.useRef()
      var M = React.useRef(l)
      var j = React.useRef()
      var L = React.useRef(false)
      var U = h(function () {
        return j.current && l === M.current ? j.current : k(O.getState(), l)
      }, [O, R, l])
      y(b, [M, N, L, l, U, j, B])
      y(w, [C, O, T, k, M, N, L, j, B, P], [O, T, k])
      var H = React.useMemo(function () {
        return i.a.createElement(t, $$_19.a({}, U, {
          ref: c
        }))
      }, [c, t, U])
      return React.useMemo(function () {
        return C ? i.a.createElement(p.Provider, {
          value: D
        }, H) : H
      }, [p, H, D])
    }
    var O = I$pure ? i.a.memo(x) : x
    O.WrappedComponent = t
    O.displayName = o
    if (T) {
      var S = i.a.forwardRef(function (e, t) {
        return i.a.createElement(O, $$_19.a({}, e, {
          reactReduxForwardedRef: t
        }))
      })
      S.displayName = o
      S.WrappedComponent = t
      return p()(S, t)
    }
    return p()(O, t)
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
import /* [auto-meaningful-name] */Redux = require("redux")
function S(e) {
  return function (t, n) {
    var r = e(t, n)
    function i() {
      return r
    }
    i.dependsOnOwnProps = false
    return i
  }
}
function T(e) {
  return null !== e.dependsOnOwnProps && undefined !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
}
function B(e, t) {
  return function (t, n) {
    n.displayName
    var r = function (e, t) {
      return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
    }
    r.dependsOnOwnProps = true
    r.mapToProps = function (t, n) {
      r.mapToProps = e
      r.dependsOnOwnProps = T(e)
      var i = r(t, n)
      if ("function" === typeof i) {
        r.mapToProps = i
        r.dependsOnOwnProps = T(i)
        i = r(t, n)
      }
      return i
    }
    return r
  }
}
var D = [function (e) {
  return "function" === typeof e ? B(e) : undefined
}, function (e) {
  return e ? undefined : S(function (e) {
    return {
      dispatch: e
    }
  })
}, function (e) {
  return e && "object" === typeof e ? S(function (t) {
    return Redux.bindActionCreators(e, t)
  }) : undefined
}]
var I = [function (e) {
  return "function" === typeof e ? B(e) : undefined
}, function (e) {
  return e ? undefined : S(function () {
    return {}
  })
}]
function F(e, t, n) {
  return $$_19.a({}, n, {}, e, {}, t)
}
var R = [function (e) {
  return "function" === typeof e ? function (e) {
    return function (t, n) {
      n.displayName
      var r
      var /* [auto-meaningful-name] */n$pure = n.pure
      var /* [auto-meaningful-name] */n$areMergedPropsEqual = n.areMergedPropsEqual
      var a = false
      return function (t, n, s) {
        var c = e(t, n, s)
        if (a) {
          if (!(n$pure && n$areMergedPropsEqual(c, r))) {
            r = c
          }
        } else {
          a = true
          r = c
        }
        return r
      }
    }
  }(e) : undefined
}, function (e) {
  return e ? undefined : function () {
    return F
  }
}]
function P(e, t, n, r) {
  return function (i, o) {
    return n(e(i, o), t(r, o), o)
  }
}
function N(e, t, n, r, i) {
  var o
  var a
  var s
  var c
  var u
  var /* [auto-meaningful-name] */i$areStatesEqual = i.areStatesEqual
  var /* [auto-meaningful-name] */i$areOwnPropsEqual = i.areOwnPropsEqual
  var /* [auto-meaningful-name] */i$areStatePropsEqual = i.areStatePropsEqual
  var h = false
  function p(i, h) {
    var p = !i$areOwnPropsEqual(h, a)
    var _ = !i$areStatesEqual(i, o)
    o = i
    a = h
    return p && _ ? (s = e(o, a), t.dependsOnOwnProps && (c = t(r, a)), u = n(s, c, a)) : p ? (e.dependsOnOwnProps && (s = e(o, a)), t.dependsOnOwnProps && (c = t(r, a)), u = n(s, c, a)) : _ ? function () {
      var t = e(o, a)
      var r = !i$areStatePropsEqual(t, s)
      s = t
      if (r) {
        u = n(s, c, a)
      }
      return u
    }() : u
  }
  return function (i, l) {
    return h ? p(i, l) : (s = e(o = i, a = l), c = t(r, a), u = n(s, c, a), h = true, u)
  }
}
function M(e, t) {
  var /* [auto-meaningful-name] */t$initMapStateToProps = t.initMapStateToProps
  var /* [auto-meaningful-name] */t$initMapDispatchToProps = t.initMapDispatchToProps
  var /* [auto-meaningful-name] */t$initMergeProps = t.initMergeProps
  var o = $$_337.a(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"])
  var a = t$initMapStateToProps(e, o)
  var s = t$initMapDispatchToProps(e, o)
  var c = t$initMergeProps(e, o)
  return (o.pure ? N : P)(a, s, c, e, o)
}
function j(e, t, n) {
  for (var r = t.length - 1; r >= 0; r--) {
    var i = t[r](e)
    if (i) {
      return i
    }
  }
  return function (t, r) {
    throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
  }
}
function L(e, t) {
  return e === t
}
function U(e) {
  var t = undefined === e ? {} : e
  var /* [auto-meaningful-name] */t$connectHOC = t.connectHOC
  var r = undefined === t$connectHOC ? x : t$connectHOC
  var /* [auto-meaningful-name] */t$mapStateToPropsFactories = t.mapStateToPropsFactories
  var o = undefined === t$mapStateToPropsFactories ? I : t$mapStateToPropsFactories
  var /* [auto-meaningful-name] */t$mapDispatchToPropsFactories = t.mapDispatchToPropsFactories
  var s = undefined === t$mapDispatchToPropsFactories ? D : t$mapDispatchToPropsFactories
  var /* [auto-meaningful-name] */t$mergePropsFactories = t.mergePropsFactories
  var u = undefined === t$mergePropsFactories ? R : t$mergePropsFactories
  var /* [auto-meaningful-name] */t$selectorFactory = t.selectorFactory
  var h = undefined === t$selectorFactory ? M : t$selectorFactory
  return function (e, t, n, i) {
    if (undefined === i) {
      i = {}
    }
    var a = i
    var /* [auto-meaningful-name] */a$pure = a.pure
    var l = undefined === a$pure || a$pure
    var /* [auto-meaningful-name] */a$areStatesEqual = a.areStatesEqual
    var _ = undefined === a$areStatesEqual ? L : a$areStatesEqual
    var /* [auto-meaningful-name] */a$areOwnPropsEqual = a.areOwnPropsEqual
    var g = undefined === a$areOwnPropsEqual ? O : a$areOwnPropsEqual
    var /* [auto-meaningful-name] */a$areStatePropsEqual = a.areStatePropsEqual
    var m = undefined === a$areStatePropsEqual ? O : a$areStatePropsEqual
    var /* [auto-meaningful-name] */a$areMergedPropsEqual = a.areMergedPropsEqual
    var b = undefined === a$areMergedPropsEqual ? O : a$areMergedPropsEqual
    var w = $$_337.a(a, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"])
    var E = j(e, o, "mapStateToProps")
    var x = j(t, s, "mapDispatchToProps")
    var C = j(n, u, "mergeProps")
    return r(h, $$_19.a({
      methodName: "connect",
      getDisplayName: function (e) {
        return "Connect(" + e + ")"
      },
      shouldHandleStateChanges: Boolean(e),
      initMapStateToProps: E,
      initMapDispatchToProps: x,
      initMergeProps: C,
      pure: l,
      areStatesEqual: _,
      areOwnPropsEqual: g,
      areStatePropsEqual: m,
      areMergedPropsEqual: b
    }, w))
  }
}
var H = U()
function V() {
  return React.useContext(o)
}
function G(e) {
  if (undefined === e) {
    e = o
  }
  var t = e === o ? V : function () {
    return React.useContext(e)
  }
  return function () {
    return t().store
  }
}
var z = G()
function Q(e) {
  if (undefined === e) {
    e = o
  }
  var t = e === o ? z : G(e)
  return function () {
    return t().dispatch
  }
}
var W = Q()
var K = function (e, t) {
  return e === t
}
function X(e) {
  if (undefined === e) {
    e = o
  }
  var t = e === o ? V : function () {
    return React.useContext(e)
  }
  return function (e, n) {
    if (undefined === n) {
      n = K
    }
    var i = t()
    var o = function (e, t, n, i) {
      var o
      var a = React.useReducer(function (e) {
        return e + 1
      }, 0)[1]
      var s = React.useMemo(function () {
        return new u(n, i)
      }, [n, i])
      var c = React.useRef()
      var l = React.useRef()
      var f = React.useRef()
      var d = React.useRef()
      var h = n.getState()
      try {
        o = e !== l.current || h !== f.current || c.current ? e(h) : d.current
      } catch (p) {
        if (c.current) {
          p.message += "\nThe error may be correlated with this previous error:\n" + c.current.stack + "\n\n"
        }
        throw p
      }
      A(function () {
        l.current = e
        f.current = h
        d.current = o
        c.current = undefined
      })
      A(function () {
        function e() {
          try {
            var e = l.current(n.getState())
            if (t(e, d.current)) {
              return
            }
            d.current = e
          } catch (p) {
            c.current = p
          }
          a()
        }
        s.onStateChange = e
        s.trySubscribe()
        e()
        return function () {
          return s.tryUnsubscribe()
        }
      }, [n, s])
      return o
    }(e, n, i.store, i.subscription)
    React.useDebugValue(o)
    return o
  }
}
var /* [auto-meaningful-name] */$$unstable_batchedUpdates
var q = X()
import /* [auto-meaningful-name] */$$_75_index = require("../75/index")
$$unstable_batchedUpdates = $$_75_index.unstable_batchedUpdates
a = $$unstable_batchedUpdates
export default l
