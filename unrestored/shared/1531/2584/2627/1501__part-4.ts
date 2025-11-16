/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1501__part-4
 */

"use strict"

import { "1501__part-0__A" as A } from "./1501__part-0"
import { "1501__part-1__m" as m } from "./1501__part-1"
import L from "../8"
import * as /* [auto-meaningful-name] */$$_20 from "../20"
import /* [auto-meaningful-name] */$$_75_index from "../75/index"
import * as /* [auto-meaningful-name] */$$_108 from "../108"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_96 from "../96"
import * as /* [auto-meaningful-name] */$$_95 from "../95"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_33_index from "../33/index"
import * as /* [auto-meaningful-name] */$$_29 from "../29"
import "../242/index"
function Q(e, t) {
  if ("function" === typeof e) {
    e(t)
  } else {
    if ("object" === $$_108.a(e) && e && "current" in e) {
      e.current = t
    }
  }
}
function W(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var K = function (e, t) {
  var n = {
    animationend: W("Animation", "AnimationEnd"),
    transitionend: W("Transition", "TransitionEnd")
  }
  if (e) {
    if (!("AnimationEvent" in t)) {
      delete n.animationend.animation
    }
    if (!("TransitionEvent" in t)) {
      delete n.transitionend.transition
    }
  }
  return n
}(m(), "undefined" !== typeof window ? window : {})
var X = {}
if (m()) {
  var Y = document.createElement("div")
  X = Y.style
}
var q = {}
function $(e) {
  if (q[e]) {
    return q[e]
  }
  var t = K[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, i = 0; i < n$length; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in X) {
        q[e] = t[o]
        return q[e]
      }
    }
  }
  return ""
}
var J = $("animationend")
var Z = $("transitionend")
var ee = !(!J || !Z)
var te = J || "animationend"
var ne = Z || "transitionend"
function re(e, t) {
  return e ? "object" === $$_108.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function ie(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = $$_33_index.a(n, 2)
  var a = r[0]
  var s = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [a, function (e) {
    if (!t.current) {
      s(e)
    }
  }]
}
var oe = m() ? React.useLayoutEffect : React.useEffect
var ae = ["prepare", "start", "active", "end"]
function se(e) {
  return "active" === e || "end" === e
}
var ce = function (e, t) {
  var n = React.useState("none")
  var r = $$_33_index.a(n, 2)
  var a = r[0]
  var s = r[1]
  var c = function () {
    var e = React.useRef(null)
    function t() {
      A.cancel(e.current)
    }
    React.useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [function n(r) {
      var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
      t()
      var o = A(function () {
        if (i <= 1) {
          r({
            isCanceled: function () {
              return o !== e.current
            }
          })
        } else {
          n(r, i - 1)
        }
      })
      e.current = o
    }, t]
  }()
  var u = $$_33_index.a(c, 2)
  var l = u[0]
  var f = u[1]
  oe(function () {
    if ("none" !== a && "end" !== a) {
      var e = ae.indexOf(a)
      var n = ae[e + 1]
      var r = t(a)
      if (false === r) {
        s(n)
      } else {
        l(function (e) {
          function t() {
            if (!e.isCanceled()) {
              s(n)
            }
          }
          if (true === r) {
            t()
          } else {
            Promise.resolve(r).then(t)
          }
        })
      }
    }
  }, [e, a])
  React.useEffect(function () {
    return function () {
      f()
    }
  }, [])
  return [function () {
    s("prepare")
  }, a]
}
function ue(e, t, n, r) {
  var /* [auto-meaningful-name] */r$motionEnter = r.motionEnter
  var s = undefined === r$motionEnter || r$motionEnter
  var /* [auto-meaningful-name] */r$motionAppear = r.motionAppear
  var u = undefined === r$motionAppear || r$motionAppear
  var /* [auto-meaningful-name] */r$motionLeave = r.motionLeave
  var f = undefined === r$motionLeave || r$motionLeave
  var /* [auto-meaningful-name] */r$motionDeadline = r.motionDeadline
  var /* [auto-meaningful-name] */r$motionLeaveImmediately = r.motionLeaveImmediately
  var /* [auto-meaningful-name] */r$onAppearPrepare = r.onAppearPrepare
  var /* [auto-meaningful-name] */r$onEnterPrepare = r.onEnterPrepare
  var /* [auto-meaningful-name] */r$onLeavePrepare = r.onLeavePrepare
  var /* [auto-meaningful-name] */r$onAppearStart = r.onAppearStart
  var /* [auto-meaningful-name] */r$onEnterStart = r.onEnterStart
  var /* [auto-meaningful-name] */r$onLeaveStart = r.onLeaveStart
  var /* [auto-meaningful-name] */r$onAppearActive = r.onAppearActive
  var /* [auto-meaningful-name] */r$onEnterActive = r.onEnterActive
  var /* [auto-meaningful-name] */r$onLeaveActive = r.onLeaveActive
  var /* [auto-meaningful-name] */r$onAppearEnd = r.onAppearEnd
  var /* [auto-meaningful-name] */r$onEnterEnd = r.onEnterEnd
  var /* [auto-meaningful-name] */r$onLeaveEnd = r.onLeaveEnd
  var /* [auto-meaningful-name] */r$onVisibleChanged = r.onVisibleChanged
  var k = ie()
  var S = $$_33_index.a(k, 2)
  var T = S[0]
  var B = S[1]
  var D = ie("none")
  var I = $$_33_index.a(D, 2)
  var F = I[0]
  var R = I[1]
  var P = ie(null)
  var N = $$_33_index.a(P, 2)
  var j = N[0]
  var L = N[1]
  var U = React.useRef(false)
  var H = React.useRef(null)
  var V = React.useRef(false)
  var G = React.useRef(null)
  function Q() {
    return n() || G.current
  }
  var W = React.useRef(false)
  function K(e) {
    var t
    var n = Q()
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === F && W.current) {
        t = null === r$onAppearEnd || undefined === r$onAppearEnd ? undefined : r$onAppearEnd(n, e)
      } else {
        if ("enter" === F && W.current) {
          t = null === r$onEnterEnd || undefined === r$onEnterEnd ? undefined : r$onEnterEnd(n, e)
        } else {
          if ("leave" === F && W.current) {
            t = null === r$onLeaveEnd || undefined === r$onLeaveEnd ? undefined : r$onLeaveEnd(n, e)
          }
        }
      }
      if (!(false === t || V.current)) {
        R("none")
        L(null)
      }
    }
  }
  var X = function (e) {
    var t = React.useRef()
    var n = React.useRef(e)
    n.current = e
    var r = React.useCallback(function (e) {
      n.current(e)
    }, [])
    function i(e) {
      if (e) {
        e.removeEventListener(ne, r)
        e.removeEventListener(te, r)
      }
    }
    React.useEffect(function () {
      return function () {
        i(t.current)
      }
    }, [])
    return [function (e) {
      if (t.current && t.current !== e) {
        i(t.current)
      }
      if (e && e !== t.current) {
        e.addEventListener(ne, r)
        e.addEventListener(te, r)
        t.current = e
      }
    }, i]
  }(K)
  var Y = $$_33_index.a(X, 1)[0]
  var q = React.useMemo(function () {
    var e
    var t
    var n
    switch (F) {
      case "appear":
        e = {}
        $$_29.a(e, "prepare", r$onAppearPrepare)
        $$_29.a(e, "start", r$onAppearStart)
        $$_29.a(e, "active", r$onAppearActive)
        return e
      case "enter":
        t = {}
        $$_29.a(t, "prepare", r$onEnterPrepare)
        $$_29.a(t, "start", r$onEnterStart)
        $$_29.a(t, "active", r$onEnterActive)
        return t
      case "leave":
        n = {}
        $$_29.a(n, "prepare", r$onLeavePrepare)
        $$_29.a(n, "start", r$onLeaveStart)
        $$_29.a(n, "active", r$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [F])
  var $ = ce(F, function (e) {
    if ("prepare" === e) {
      var /* [auto-meaningful-name] */q$prepare = q.prepare
      return !!q$prepare && q$prepare(Q())
    }
    var n
    if (ee in q) {
      L((null === (n = q[ee]) || undefined === n ? undefined : n.call(q, Q(), null)) || null)
    }
    if ("active" === ee) {
      Y(Q())
      if (r$motionDeadline > 0) {
        clearTimeout(H.current)
        H.current = setTimeout(function () {
          K({
            deadline: true
          })
        }, r$motionDeadline)
      }
    }
    return true
  })
  var J = $$_33_index.a($, 2)
  var Z = J[0]
  var ee = J[1]
  var re = se(ee)
  W.current = re
  oe(function () {
    B(t)
    var n
    var /* [auto-meaningful-name] */U$current = U.current
    U.current = true
    if (e) {
      if (!U$current && t && u) {
        n = "appear"
      }
      if (U$current && t && s) {
        n = "enter"
      }
      if (U$current && !t && f || !U$current && r$motionLeaveImmediately && !t && f) {
        n = "leave"
      }
      if (n) {
        R(n)
        Z()
      }
    }
  }, [t])
  React.useEffect(function () {
    if ("appear" === F && !u || "enter" === F && !s || "leave" === F && !f) {
      R("none")
    }
  }, [u, s, f])
  React.useEffect(function () {
    return function () {
      clearTimeout(H.current)
      V.current = true
    }
  }, [])
  React.useEffect(function () {
    if (undefined !== T && "none" === F) {
      if (!(null === r$onVisibleChanged || undefined === r$onVisibleChanged)) {
        r$onVisibleChanged(T)
      }
    }
  }, [T, F])
  var ae = j
  if (q.prepare && "start" === ee) {
    ae = $$_20.a({
      transition: "none"
    }, ae)
  }
  return [F, ee, ae, null !== T && undefined !== T ? T : t]
}
var le = function (e) {
  $$_120.a(n, e)
  var t = $$_140.a(n)
  function n() {
    $$_95.a(this, n)
    return t.apply(this, arguments)
  }
  $$_96.a(n, [{
    key: "render",
    value: function () {
      return this.props.children
    }
  }])
  return n
}(React.Component)
var fe = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === $$_108.a(e)) {
    t = e.transitionSupport
  }
  var r = React.forwardRef(function (e, t) {
    var /* [auto-meaningful-name] */e$visible = e.visible
    var a = undefined === e$visible || e$visible
    var /* [auto-meaningful-name] */e$removeOnLeave = e.removeOnLeave
    var c = undefined === e$removeOnLeave || e$removeOnLeave
    var /* [auto-meaningful-name] */e$forceRender = e.forceRender
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$motionName = e.motionName
    var /* [auto-meaningful-name] */e$leavedClassName = e.leavedClassName
    var /* [auto-meaningful-name] */e$eventProps = e.eventProps
    var p = n(e)
    var _ = React.useRef()
    var A = React.useRef()
    var g = ue(p, a, function () {
      try {
        return (e = _.current || A.current) instanceof HTMLElement ? e : $$_75_index.findDOMNode(e)
      } catch (t) {
        return null
      }
      var e
    }, e)
    var m = $$_33_index.a(g, 4)
    var y = m[0]
    var b = m[1]
    var w = m[2]
    var E = m[3]
    var x = React.useRef(E)
    if (E) {
      x.current = true
    }
    var C = React.useRef(t)
    C.current = t
    var O
    var k = React.useCallback(function (e) {
      _.current = e
      Q(C.current, e)
    }, [])
    var S = $$_20.a($$_20.a({}, e$eventProps), {}, {
      visible: a
    })
    if (e$children) {
      if ("none" !== y && n(e)) {
        var T
        var B
        if ("prepare" === b) {
          B = "prepare"
        } else {
          if (se(b)) {
            B = "active"
          } else {
            if ("start" === b) {
              B = "start"
            }
          }
        }
        O = e$children($$_20.a($$_20.a({}, S), {}, {
          className: L(re(e$motionName, y), (T = {}, $$_29.a(T, re(e$motionName, "".concat(y, "-").concat(B)), B), $$_29.a(T, e$motionName, "string" === typeof e$motionName), T)),
          style: w
        }), k)
      } else {
        O = E ? e$children($$_20.a({}, S), k) : !c && x.current ? e$children($$_20.a($$_20.a({}, S), {}, {
          className: e$leavedClassName
        }), k) : e$forceRender ? e$children($$_20.a($$_20.a({}, S), {}, {
          style: {
            display: "none"
          }
        }), k) : null
      }
    } else {
      O = null
    }
    return React.createElement(le, {
      ref: A
    }, O)
  })
  r.displayName = "CSSMotion"
  return r
}(ee)
export { ee as "1501__part-4__ee" }
export { fe as "1501__part-4__fe" }
