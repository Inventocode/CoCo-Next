/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：559__part-4
 */

"use strict"

import { pe, he } from "./index__part-3"
import /* [auto-meaningful-name] */ReactDom from "react-dom"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_106 from "../106"
import * as /* [auto-meaningful-name] */$$_103 from "../103"
import /* [auto-meaningful-name] */Classnames from "classnames"
import { forwardRef, useRef, useImperativeHandle, useEffect, useState, useLayoutEffect, useCallback, useMemo, Component, createElement, Fragment } from "react"
import * as /* [auto-meaningful-name] */$$_54 from "../54"
import * as /* [auto-meaningful-name] */$$_40_index from "../40/index"
import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_107 from "../107"
function ge(e, t) {
  if ("function" === typeof e) {
    e(t)
  } else {
    if ("object" === $$_107.a(e) && e && "current" in e) {
      e.current = t
    }
  }
}
function _e(e, t, n, r) {
  var o = ReactDom.unstable_batchedUpdates ? function (e) {
    ReactDom.unstable_batchedUpdates(n, e)
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
function ve() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement)
}
var be = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$didUpdate = e.didUpdate
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$children = e.children
  var i = useRef()
  useImperativeHandle(t, function () {
    return {}
  })
  var a = useRef(false)
  if (!a.current && ve()) {
    i.current = e$getContainer()
    a.current = true
  }
  useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */i$current
      var /* [auto-meaningful-name] */i$current$parentNode
      if (!(null === (i$current = i.current) || undefined === i$current || null === (i$current$parentNode = i$current.parentNode) || undefined === i$current$parentNode)) {
        i$current$parentNode.removeChild(i.current)
      }
    }
  }, [])
  return i.current ? ReactDom.createPortal(e$children, i.current) : null
})
function ye(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
function Ee(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var Oe = function (e, t) {
  var n = {
    animationend: Ee("Animation", "AnimationEnd"),
    transitionend: Ee("Transition", "TransitionEnd")
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
}(ve(), "undefined" !== typeof window ? window : {})
var we = {}
if (ve()) {
  var Ce = document.createElement("div")
  we = Ce.style
}
var Te = {}
function Se(e) {
  if (Te[e]) {
    return Te[e]
  }
  var t = Oe[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, o = 0; o < n$length; o += 1) {
      var i = n[o]
      if (Object.prototype.hasOwnProperty.call(t, i) && i in we) {
        Te[e] = t[i]
        return Te[e]
      }
    }
  }
  return ""
}
var Ae = Se("animationend")
var Ie = Se("transitionend")
var je = !(!Ae || !Ie)
var Ne = Ae || "animationend"
var Re = Ie || "transitionend"
function ke(e, t) {
  return e ? "object" === $$_107.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function xe(e) {
  var t = useRef(false)
  var n = useState(e)
  var r = $$_40_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [
    o, function (e) {
      if (!t.current) {
        i(e)
      }
    }
  ]
}
var De = ve() ? useLayoutEffect : useEffect
var Me = ["prepare", "start", "active", "end"]
function Le(e) {
  return "active" === e || "end" === e
}
var Pe = function (e, t) {
  var n = useState("none")
  var r = $$_40_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = function () {
    var e = useRef(null)
    function t() {
      pe.cancel(e.current)
    }
    useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [
      function n(r) {
        var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
        t()
        var i = pe(function () {
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
      }, t
    ]
  }()
  var c = $$_40_index.a(a, 2)
  var u = c[0]
  var d = c[1]
  De(function () {
    if ("none" !== o && "end" !== o) {
      var e = Me.indexOf(o)
      var n = Me[e + 1]
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
  useEffect(function () {
    return function () {
      d()
    }
  }, [])
  return [
    function () {
      i("prepare")
    }, o
  ]
}
function Be(e, t, n, r) {
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
  var j = xe()
  var N = $$_40_index.a(j, 2)
  var R = N[0]
  var k = N[1]
  var x = xe("none")
  var D = $$_40_index.a(x, 2)
  var M = D[0]
  var L = D[1]
  var P = xe(null)
  var B = $$_40_index.a(P, 2)
  var F = B[0]
  var G = B[1]
  var W = useRef(false)
  var U = useRef(null)
  var H = useRef(false)
  var V = useRef(null)
  function z() {
    return n() || V.current
  }
  var Y = useRef(false)
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
    var t = useRef()
    var n = useRef(e)
    n.current = e
    var r = useCallback(function (e) {
      n.current(e)
    }, [])
    function o(e) {
      if (e) {
        e.removeEventListener(Re, r)
        e.removeEventListener(Ne, r)
      }
    }
    useEffect(function () {
      return function () {
        o(t.current)
      }
    }, [])
    return [
      function (e) {
        if (t.current && t.current !== e) {
          o(t.current)
        }
        if (e && e !== t.current) {
          e.addEventListener(Re, r)
          e.addEventListener(Ne, r)
          t.current = e
        }
      }, o
    ]
  }(K)
  var X = $$_40_index.a(q, 1)[0]
  var Q = useMemo(function () {
    var e
    var t
    var n
    switch (M) {
      case "appear":
        e = {}
        $$_35.a(e, "prepare", r$onAppearPrepare)
        $$_35.a(e, "start", r$onAppearStart)
        $$_35.a(e, "active", r$onAppearActive)
        return e
      case "enter":
        t = {}
        $$_35.a(t, "prepare", r$onEnterPrepare)
        $$_35.a(t, "start", r$onEnterStart)
        $$_35.a(t, "active", r$onEnterActive)
        return t
      case "leave":
        n = {}
        $$_35.a(n, "prepare", r$onLeavePrepare)
        $$_35.a(n, "start", r$onLeaveStart)
        $$_35.a(n, "active", r$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [M])
  var Z = Pe(M, function (e) {
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
        clearTimeout(U.current)
        U.current = setTimeout(function () {
          K({
            deadline: true
          })
        }, r$motionDeadline)
      }
    }
    return true
  })
  var J = $$_40_index.a(Z, 2)
  var $ = J[0]
  var ee = J[1]
  var te = Le(ee)
  Y.current = te
  De(function () {
    k(t)
    var n
    var /* [auto-meaningful-name] */W$current = W.current
    W.current = true
    if (e) {
      if (!W$current && t && d) {
        n = "appear"
      }
      if (W$current && t && c) {
        n = "enter"
      }
      if (W$current && !t && f || !W$current && r$motionLeaveImmediately && !t && f) {
        n = "leave"
      }
      if (n) {
        L(n)
        $()
      }
    }
  }, [t])
  useEffect(function () {
    if ("appear" === M && !d || "enter" === M && !c || "leave" === M && !f) {
      L("none")
    }
  }, [d, c, f])
  useEffect(function () {
    return function () {
      clearTimeout(U.current)
      H.current = true
    }
  }, [])
  useEffect(function () {
    if (undefined !== R && "none" === M) {
      if (!(null === r$onVisibleChanged || undefined === r$onVisibleChanged)) {
        r$onVisibleChanged(R)
      }
    }
  }, [R, M])
  var ne = F
  if (Q.prepare && "start" === ee) {
    ne = $$_21.a({
      transition: "none"
    }, ne)
  }
  return [M, ee, ne, null !== R && undefined !== R ? R : t]
}
var Fe = function (e) {
  $$_120.a(n, e)
  var t = $$_140.a(n)
  function n() {
    $$_103.a(this, n)
    return t.apply(this, arguments)
  }
  $$_106.a(n, [
    {
      key: "render",
      value: function () {
        return this.props.children
      }
    }
  ])
  return n
}(Component)
var Ge = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === $$_107.a(e)) {
    t = e.transitionSupport
  }
  var r = forwardRef(function (e, t) {
    var /* [auto-meaningful-name] */e$visible = e.visible
    var a = undefined === e$visible || e$visible
    var /* [auto-meaningful-name] */e$removeOnLeave = e.removeOnLeave
    var u = undefined === e$removeOnLeave || e$removeOnLeave
    var /* [auto-meaningful-name] */e$forceRender = e.forceRender
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$motionName = e.motionName
    var /* [auto-meaningful-name] */e$leavedClassName = e.leavedClassName
    var /* [auto-meaningful-name] */e$eventProps = e.eventProps
    var _ = n(e)
    var v = useRef()
    var b = useRef()
    var y = Be(_, a, function () {
      try {
        return he(v.current || b.current)
      } catch (e) {
        return null
      }
    }, e)
    var E = $$_40_index.a(y, 4)
    var O = E[0]
    var w = E[1]
    var C = E[2]
    var T = E[3]
    var S = useRef(T)
    if (T) {
      S.current = true
    }
    var A = useRef(t)
    A.current = t
    var I
    var j = useCallback(function (e) {
      v.current = e
      ge(A.current, e)
    }, [])
    var N = $$_21.a($$_21.a({}, e$eventProps), {}, {
      visible: a
    })
    if (e$children) {
      if ("none" !== O && n(e)) {
        var R
        var k
        if ("prepare" === w) {
          k = "prepare"
        } else {
          if (Le(w)) {
            k = "active"
          } else {
            if ("start" === w) {
              k = "start"
            }
          }
        }
        I = e$children($$_21.a($$_21.a({}, N), {}, {
          className: Classnames(ke(e$motionName, O), (R = {}, $$_35.a(R, ke(e$motionName, "".concat(O, "-").concat(k)), k), $$_35.a(R, e$motionName, "string" === typeof e$motionName), R)),
          style: C
        }), j)
      } else {
        I = T ? e$children($$_21.a({}, N), j) : !u && S.current ? e$children($$_21.a($$_21.a({}, N), {}, {
          className: e$leavedClassName
        }), j) : e$forceRender ? e$children($$_21.a($$_21.a({}, N), {}, {
          style: {
            display: "none"
          }
        }), j) : null
      }
    } else {
      I = null
    }
    return createElement(Fe, {
      ref: b
    }, I)
  })
  r.displayName = "CSSMotion"
  return r
}(je)
function We(e) {
  var t
  t = e && "object" === $$_107.a(e) && "key" in e ? e : {
    key: e
  }
  return $$_21.a($$_21.a({}, t), {}, {
    key: String(t.key)
  })
}
function Ue() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  return e.map(We)
}
function He() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = []
  var r = 0
  var /* [auto-meaningful-name] */t$length = t.length
  var a = Ue(e)
  var s = Ue(t)
  a.forEach(function (e) {
    for (var t = false, a = r; a < t$length; a += 1) {
      var c = s[a]
      if (c.key === e.key) {
        if (r < a) {
          n = n.concat(s.slice(r, a).map(function (e) {
            return $$_21.a($$_21.a({}, e), {}, {
              status: "add"
            })
          }))
          r = a
        }
        n.push($$_21.a($$_21.a({}, c), {}, {
          status: "keep"
        }))
        r += 1
        t = true
        break
      }
    }
    if (!t) {
      n.push($$_21.a($$_21.a({}, e), {}, {
        status: "remove"
      }))
    }
  })
  if (r < t$length) {
    n = n.concat(s.slice(r).map(function (e) {
      return $$_21.a($$_21.a({}, e), {}, {
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
var Ve = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"]
!function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : Ge
  var n = function (e) {
    $$_120.a(o, e)
    var n = $$_140.a(o)
    function o() {
      var e
      $$_103.a(this, o);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      }
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : $$_21.a($$_21.a({}, e), {}, {
                status: "removed"
              })
            })
          }
        })
      }
      return e
    }
    $$_106.a(o, [
      {
        key: "render",
        value: function () {
          var e = this
          var /* [auto-meaningful-name] */this$state$keyEntities = this.state.keyEntities
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$component = this$props.component
          var /* [auto-meaningful-name] */this$props$children = this$props.children
          var /* [auto-meaningful-name] */this$props$onVisibleChanged = this$props.onVisibleChanged
          var u = $$_54.a(this$props, ["component", "children", "onVisibleChanged"])
          var d = this$props$component || Fragment
          var p = {}
          Ve.forEach(function (e) {
            p[e] = u[e]
            delete u[e]
          })
          delete u.keys
          return createElement(d, u, this$state$keyEntities.map(function (n) {
            var /* [auto-meaningful-name] */n$status = n.status
            var i = $$_54.a(n, ["status"])
            var u = "add" === n$status || "keep" === n$status
            return createElement(t, $$_19.a({}, p, {
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
      }
    ], [
      {
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          var /* [auto-meaningful-name] */e$keys = e.keys
          var /* [auto-meaningful-name] */t$keyEntities = t.keyEntities
          var o = Ue(e$keys)
          return {
            keyEntities: He(t$keyEntities, o).filter(function (e) {
              var t = t$keyEntities.find(function (t) {
                var /* [auto-meaningful-name] */t$key = t.key
                return e.key === t$key
              })
              return !t || "removed" !== t.status || "remove" !== e.status
            })
          }
        }
      }
    ])
    return o
  }(Component)
  n.defaultProps = {
    component: "div"
  }
}(je)
var ze = Ge
function Ye(e) {
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
function Ke(e) {
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
    d = $$_21.a({
      motionAppear: true
    }, Ye({
      motion: e$maskMotion,
      prefixCls: e$prefixCls,
      transitionName: e$maskTransitionName,
      animation: e$maskAnimation
    }))
  }
  return createElement(ze, $$_19.a({}, d, {
    visible: e$visible,
    removeOnLeave: true
  }), function (e) {
    var /* [auto-meaningful-name] */e$className = e.className
    return createElement("div", {
      style: {
        zIndex: e$zIndex
      },
      className: Classnames("".concat(e$prefixCls, "-mask"), e$className)
    })
  })
}
export { ge }
export { _e }
export { be }
export { ye }
export { ze }
export { Ye }
export { Ke }
