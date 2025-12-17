/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：16__part-2
 */

"use strict"

import { o, u } from "./index__part-0"
import { A, x, O } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_339 from "../339"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */Redux from "redux"
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
var D = [
  function (e) {
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
  }
]
var I = [
  function (e) {
    return "function" === typeof e ? B(e) : undefined
  }, function (e) {
    return e ? undefined : S(function () {
      return {}
    })
  }
]
function R(e, t, n) {
  return $$_19.a({}, n, {}, e, {}, t)
}
var F = [
  function (e) {
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
      return R
    }
  }
]
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
  var o = $$_339.a(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"])
  var a = t$initMapStateToProps(e, o)
  var s = t$initMapDispatchToProps(e, o)
  var c = t$initMergeProps(e, o)
  return (o.pure ? N : P)(a, s, c, e, o)
}
function L(e, t, n) {
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
function j(e, t) {
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
  var u = undefined === t$mergePropsFactories ? F : t$mergePropsFactories
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
    var _ = undefined === a$areStatesEqual ? j : a$areStatesEqual
    var /* [auto-meaningful-name] */a$areOwnPropsEqual = a.areOwnPropsEqual
    var g = undefined === a$areOwnPropsEqual ? O : a$areOwnPropsEqual
    var /* [auto-meaningful-name] */a$areStatePropsEqual = a.areStatePropsEqual
    var m = undefined === a$areStatePropsEqual ? O : a$areStatePropsEqual
    var /* [auto-meaningful-name] */a$areMergedPropsEqual = a.areMergedPropsEqual
    var b = undefined === a$areMergedPropsEqual ? O : a$areMergedPropsEqual
    var w = $$_339.a(a, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"])
    var E = L(e, o, "mapStateToProps")
    var x = L(t, s, "mapDispatchToProps")
    var C = L(n, u, "mergeProps")
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
var q = X()
export { H }
export { z }
export { W }
export { q }
