/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1500__part-5
 */

"use strict"

import { "1500__part-1__h" as h } from "./index__part-1"
import _ from "../8"
import * as /* [auto-meaningful-name] */$$_108 from "../108"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_54 from "../54"
import * as /* [auto-meaningful-name] */$$_33_index from "../33/index"
import * as /* [auto-meaningful-name] */$$_20 from "../20"
import * as /* [auto-meaningful-name] */$$_29 from "../29"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_95 from "../95"
import * as /* [auto-meaningful-name] */$$_96 from "../96"
import * as /* [auto-meaningful-name] */$$_103 from "../103"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import * as /* [auto-meaningful-name] */$$_75_index from "../75/index"
import /* [auto-meaningful-name] */_$$_75_index from "../75/index"
var U = function (e) {
  return +setTimeout(e, 16)
}
var W = function (e) {
  return clearTimeout(e)
}
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  U = function (e) {
    return window.requestAnimationFrame(e)
  }
  W = function (e) {
    return window.cancelAnimationFrame(e)
  }
}
var H = 0
var V = new Map()
function z(e) {
  V.delete(e)
}
function Y(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1
  var n = H += 1
  function r(t) {
    if (0 === t) {
      z(n)
      e()
    } else {
      var o = U(function () {
        r(t - 1)
      })
      V.set(n, o)
    }
  }
  r(t)
  return n
}
function K(e, t) {
  return !!e && e.contains(t)
}
function q(e) {
  return e instanceof HTMLElement ? e : _$$_75_index.findDOMNode(e)
}
function X(e, t, n, r) {
  var o = _$$_75_index.unstable_batchedUpdates ? function (e) {
    _$$_75_index.unstable_batchedUpdates(n, e)
  } : n
  if (e.addEventListener) {
    e.addEventListener(t, o, r)
  }
  return {
    remove: function () {
      if (e.removeEventListener) {
        e.removeEventListener(t, o)
      }
    }
  }
}
function Q() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement)
}
Y.cancel = function (e) {
  var t = V.get(e)
  z(t)
  return W(t)
}
var Z = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$didUpdate = e.didUpdate
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$children = e.children
  var i = React.useRef()
  React.useImperativeHandle(t, function () {
    return {}
  })
  var a = React.useRef(false)
  if (!a.current && Q()) {
    i.current = e$getContainer()
    a.current = true
  }
  React.useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  React.useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */i$current
      var /* [auto-meaningful-name] */i$current$parentNode
      if (!(null === (i$current = i.current) || undefined === i$current || null === (i$current$parentNode = i$current.parentNode) || undefined === i$current$parentNode)) {
        i$current$parentNode.removeChild(i.current)
      }
    }
  }, [])
  return i.current ? _$$_75_index.createPortal(e$children, i.current) : null
})
function J(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
function $(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var ee = function (e, t) {
  var n = {
    animationend: $("Animation", "AnimationEnd"),
    transitionend: $("Transition", "TransitionEnd")
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
}(Q(), "undefined" !== typeof window ? window : {})
var te = {}
if (Q()) {
  var ne = document.createElement("div")
  te = ne.style
}
var re = {}
function oe(e) {
  if (re[e]) {
    return re[e]
  }
  var t = ee[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, o = 0; o < n$length; o += 1) {
      var i = n[o]
      if (Object.prototype.hasOwnProperty.call(t, i) && i in te) {
        re[e] = t[i]
        return re[e]
      }
    }
  }
  return ""
}
var ie = oe("animationend")
var ae = oe("transitionend")
var se = !(!ie || !ae)
var ce = ie || "animationend"
var le = ae || "transitionend"
function ue(e, t) {
  return e ? "object" === $$_108.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function de(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = $$_33_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [o, function (e) {
    if (!t.current) {
      i(e)
    }
  }]
}
var pe = Q() ? React.useLayoutEffect : React.useEffect
var fe = ["prepare", "start", "active", "end"]
function he(e) {
  return "active" === e || "end" === e
}
var me = function (e, t) {
  var n = React.useState("none")
  var r = $$_33_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = function () {
    var e = React.useRef(null)
    function t() {
      Y.cancel(e.current)
    }
    React.useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [function n(r) {
      var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
      t()
      var i = Y(function () {
        if (o <= 1) {
          r({
            isCanceled: function () {
              return i !== e.current
            }
          })
        } else {
          n(r, o - 1)
        }
      })
      e.current = i
    }, t]
  }()
  var c = $$_33_index.a(a, 2)
  var u = c[0]
  var d = c[1]
  pe(function () {
    if ("none" !== o && "end" !== o) {
      var e = fe.indexOf(o)
      var n = fe[e + 1]
      var r = t(o)
      if (false === r) {
        i(n)
      } else {
        u(function (e) {
          function t() {
            if (!e.isCanceled()) {
              i(n)
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
  }, [e, o])
  React.useEffect(function () {
    return function () {
      d()
    }
  }, [])
  return [function () {
    i("prepare")
  }, o]
}
function ge(e, t, n, r) {
  var /* [auto-meaningful-name] */r$motionEnter = r.motionEnter
  var c = undefined === r$motionEnter || r$motionEnter
  var /* [auto-meaningful-name] */r$motionAppear = r.motionAppear
  var d = undefined === r$motionAppear || r$motionAppear
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
  var j = de()
  var N = $$_33_index.a(j, 2)
  var R = N[0]
  var k = N[1]
  var x = de("none")
  var D = $$_33_index.a(x, 2)
  var M = D[0]
  var L = D[1]
  var P = de(null)
  var B = $$_33_index.a(P, 2)
  var F = B[0]
  var G = B[1]
  var U = React.useRef(false)
  var W = React.useRef(null)
  var H = React.useRef(false)
  var V = React.useRef(null)
  function z() {
    return n() || V.current
  }
  var Y = React.useRef(false)
  function K(e) {
    var t
    var n = z()
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === M && Y.current) {
        t = null === r$onAppearEnd || undefined === r$onAppearEnd ? undefined : r$onAppearEnd(n, e)
      } else {
        if ("enter" === M && Y.current) {
          t = null === r$onEnterEnd || undefined === r$onEnterEnd ? undefined : r$onEnterEnd(n, e)
        } else {
          if ("leave" === M && Y.current) {
            t = null === r$onLeaveEnd || undefined === r$onLeaveEnd ? undefined : r$onLeaveEnd(n, e)
          }
        }
      }
      if (!(false === t || H.current)) {
        L("none")
        G(null)
      }
    }
  }
  var q = function (e) {
    var t = React.useRef()
    var n = React.useRef(e)
    n.current = e
    var r = React.useCallback(function (e) {
      n.current(e)
    }, [])
    function o(e) {
      if (e) {
        e.removeEventListener(le, r)
        e.removeEventListener(ce, r)
      }
    }
    React.useEffect(function () {
      return function () {
        o(t.current)
      }
    }, [])
    return [function (e) {
      if (t.current && t.current !== e) {
        o(t.current)
      }
      if (e && e !== t.current) {
        e.addEventListener(le, r)
        e.addEventListener(ce, r)
        t.current = e
      }
    }, o]
  }(K)
  var X = $$_33_index.a(q, 1)[0]
  var Q = React.useMemo(function () {
    var e
    var t
    var n
    switch (M) {
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
  }, [M])
  var Z = me(M, function (e) {
    if ("prepare" === e) {
      var /* [auto-meaningful-name] */Q$prepare = Q.prepare
      return !!Q$prepare && Q$prepare(z())
    }
    var n
    if (ee in Q) {
      G((null === (n = Q[ee]) || undefined === n ? undefined : n.call(Q, z(), null)) || null)
    }
    if ("active" === ee) {
      X(z())
      if (r$motionDeadline > 0) {
        clearTimeout(W.current)
        W.current = setTimeout(function () {
          K({
            deadline: true
          })
        }, r$motionDeadline)
      }
    }
    return true
  })
  var J = $$_33_index.a(Z, 2)
  var $ = J[0]
  var ee = J[1]
  var te = he(ee)
  Y.current = te
  pe(function () {
    k(t)
    var n
    var /* [auto-meaningful-name] */U$current = U.current
    U.current = true
    if (e) {
      if (!U$current && t && d) {
        n = "appear"
      }
      if (U$current && t && c) {
        n = "enter"
      }
      if (U$current && !t && f || !U$current && r$motionLeaveImmediately && !t && f) {
        n = "leave"
      }
      if (n) {
        L(n)
        $()
      }
    }
  }, [t])
  React.useEffect(function () {
    if ("appear" === M && !d || "enter" === M && !c || "leave" === M && !f) {
      L("none")
    }
  }, [d, c, f])
  React.useEffect(function () {
    return function () {
      clearTimeout(W.current)
      H.current = true
    }
  }, [])
  React.useEffect(function () {
    if (undefined !== R && "none" === M) {
      if (!(null === r$onVisibleChanged || undefined === r$onVisibleChanged)) {
        r$onVisibleChanged(R)
      }
    }
  }, [R, M])
  var ne = F
  if (Q.prepare && "start" === ee) {
    ne = $$_20.a({
      transition: "none"
    }, ne)
  }
  return [M, ee, ne, null !== R && undefined !== R ? R : t]
}
var _e = function (e) {
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
var ve = function (e) {
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
    var u = undefined === e$removeOnLeave || e$removeOnLeave
    var /* [auto-meaningful-name] */e$forceRender = e.forceRender
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$motionName = e.motionName
    var /* [auto-meaningful-name] */e$leavedClassName = e.leavedClassName
    var /* [auto-meaningful-name] */e$eventProps = e.eventProps
    var v = n(e)
    var b = React.useRef()
    var y = React.useRef()
    var E = ge(v, a, function () {
      try {
        return q(b.current || y.current)
      } catch (e) {
        return null
      }
    }, e)
    var O = $$_33_index.a(E, 4)
    var w = O[0]
    var C = O[1]
    var T = O[2]
    var S = O[3]
    var I = React.useRef(S)
    if (S) {
      I.current = true
    }
    var A = React.useRef(t)
    A.current = t
    var j
    var N = React.useCallback(function (e) {
      b.current = e
      h(A.current, e)
    }, [])
    var R = $$_20.a($$_20.a({}, e$eventProps), {}, {
      visible: a
    })
    if (e$children) {
      if ("none" !== w && n(e)) {
        var k
        var x
        if ("prepare" === C) {
          x = "prepare"
        } else {
          if (he(C)) {
            x = "active"
          } else {
            if ("start" === C) {
              x = "start"
            }
          }
        }
        j = e$children($$_20.a($$_20.a({}, R), {}, {
          className: _(ue(e$motionName, w), (k = {}, $$_29.a(k, ue(e$motionName, "".concat(w, "-").concat(x)), x), $$_29.a(k, e$motionName, "string" === typeof e$motionName), k)),
          style: T
        }), N)
      } else {
        j = S ? e$children($$_20.a({}, R), N) : !u && I.current ? e$children($$_20.a($$_20.a({}, R), {}, {
          className: e$leavedClassName
        }), N) : e$forceRender ? e$children($$_20.a($$_20.a({}, R), {}, {
          style: {
            display: "none"
          }
        }), N) : null
      }
    } else {
      j = null
    }
    return React.createElement(_e, {
      ref: y
    }, j)
  })
  r.displayName = "CSSMotion"
  return r
}(se)
function be(e) {
  var t
  t = e && "object" === $$_108.a(e) && "key" in e ? e : {
    key: e
  }
  return $$_20.a($$_20.a({}, t), {}, {
    key: String(t.key)
  })
}
function ye() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  return e.map(be)
}
function Ee() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = []
  var r = 0
  var /* [auto-meaningful-name] */t$length = t.length
  var a = ye(e)
  var s = ye(t)
  a.forEach(function (e) {
    for (var t = false, a = r; a < t$length; a += 1) {
      var c = s[a]
      if (c.key === e.key) {
        if (r < a) {
          n = n.concat(s.slice(r, a).map(function (e) {
            return $$_20.a($$_20.a({}, e), {}, {
              status: "add"
            })
          }))
          r = a
        }
        n.push($$_20.a($$_20.a({}, c), {}, {
          status: "keep"
        }))
        r += 1
        t = true
        break
      }
    }
    if (!t) {
      n.push($$_20.a($$_20.a({}, e), {}, {
        status: "remove"
      }))
    }
  })
  if (r < t$length) {
    n = n.concat(s.slice(r).map(function (e) {
      return $$_20.a($$_20.a({}, e), {}, {
        status: "add"
      })
    }))
  }
  var c = {}
  n.forEach(function (e) {
    var /* [auto-meaningful-name] */e$key = e.key
    c[e$key] = (c[e$key] || 0) + 1
  })
  var l = Object.keys(c).filter(function (e) {
    return c[e] > 1
  })
  l.forEach(function (e) {
    (n = n.filter(function (t) {
      var /* [auto-meaningful-name] */t$key = t.key
      var /* [auto-meaningful-name] */t$status = t.status
      return t$key !== e || "remove" !== t$status
    })).forEach(function (t) {
      if (t.key === e) {
        t.status = "keep"
      }
    })
  })
  return n
}
var Oe = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"]
!function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : ve
  var n = function (e) {
    $$_120.a(o, e)
    var n = $$_140.a(o)
    function o() {
      var e
      $$_95.a(this, o);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      }
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : $$_20.a($$_20.a({}, e), {}, {
                status: "removed"
              })
            })
          }
        })
      }
      return e
    }
    $$_96.a(o, [{
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$state$keyEntities = this.state.keyEntities
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$component = this$props.component
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$onVisibleChanged = this$props.onVisibleChanged
        var u = $$_54.a(this$props, ["component", "children", "onVisibleChanged"])
        var d = this$props$component || React.Fragment
        var p = {}
        Oe.forEach(function (e) {
          p[e] = u[e]
          delete u[e]
        })
        delete u.keys
        return React.createElement(d, u, this$state$keyEntities.map(function (n) {
          var /* [auto-meaningful-name] */n$status = n.status
          var i = $$_54.a(n, ["status"])
          var u = "add" === n$status || "keep" === n$status
          return React.createElement(t, $$_19.a({}, p, {
            key: i.key,
            visible: u,
            eventProps: i,
            onVisibleChanged: function (t) {
              if (!(null === this$props$onVisibleChanged || undefined === this$props$onVisibleChanged)) {
                this$props$onVisibleChanged(t, {
                  key: i.key
                })
              }
              if (!t) {
                e.removeKey(i.key)
              }
            }
          }), this$props$children)
        }))
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var /* [auto-meaningful-name] */e$keys = e.keys
        var /* [auto-meaningful-name] */t$keyEntities = t.keyEntities
        var o = ye(e$keys)
        return {
          keyEntities: Ee(t$keyEntities, o).filter(function (e) {
            var t = t$keyEntities.find(function (t) {
              var /* [auto-meaningful-name] */t$key = t.key
              return e.key === t$key
            })
            return !t || "removed" !== t.status || "remove" !== e.status
          })
        }
      }
    }])
    return o
  }(React.Component)
  n.defaultProps = {
    component: "div"
  }
}(se)
var we = ve
function Ce(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$motion = e.motion
  var /* [auto-meaningful-name] */e$animation = e.animation
  var /* [auto-meaningful-name] */e$transitionName = e.transitionName
  return e$motion || (e$animation ? {
    motionName: "".concat(e$prefixCls, "-").concat(e$animation)
  } : e$transitionName ? {
    motionName: e$transitionName
  } : null)
}
function Te(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$mask = e.mask
  var /* [auto-meaningful-name] */e$maskMotion = e.maskMotion
  var /* [auto-meaningful-name] */e$maskAnimation = e.maskAnimation
  var /* [auto-meaningful-name] */e$maskTransitionName = e.maskTransitionName
  if (!e$mask) {
    return null
  }
  var d = {}
  if (e$maskMotion || e$maskTransitionName || e$maskAnimation) {
    d = $$_20.a({
      motionAppear: true
    }, Ce({
      motion: e$maskMotion,
      prefixCls: e$prefixCls,
      transitionName: e$maskTransitionName,
      animation: e$maskAnimation
    }))
  }
  return React.createElement(we, $$_19.a({}, d, {
    visible: e$visible,
    removeOnLeave: true
  }), function (e) {
    var /* [auto-meaningful-name] */e$className = e.className
    return React.createElement("div", {
      style: {
        zIndex: e$zIndex
      },
      className: _("".concat(e$prefixCls, "-mask"), e$className)
    })
  })
}
export { Y as "1500__part-5__Y" }
export { K as "1500__part-5__K" }
export { q as "1500__part-5__q" }
export { X as "1500__part-5__X" }
export { Z as "1500__part-5__Z" }
export { J as "1500__part-5__J" }
export { we as "1500__part-5__we" }
export { Ce as "1500__part-5__Ce" }
export { Te as "1500__part-5__Te" }
