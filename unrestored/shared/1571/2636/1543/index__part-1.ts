/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1543__part-1
 */

"use strict"

import w from "../8"
import * as /* [auto-meaningful-name] */$_432 from "./432"
import * as /* [auto-meaningful-name] */$_482 from "./482"
import * as /* [auto-meaningful-name] */$_229 from "./229"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_106 from "../106"
import * as /* [auto-meaningful-name] */$$_103 from "../103"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_54 from "../54"
import * as /* [auto-meaningful-name] */$$_40_index from "../40/index"
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$_1021 from "./1021"
import * as /* [auto-meaningful-name] */$$_107 from "../107"
import * as /* [auto-meaningful-name] */$_378 from "./378"
function I(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var j = function (e, t) {
  var n = {
    animationend: I("Animation", "AnimationEnd"),
    transitionend: I("Transition", "TransitionEnd")
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
}($_378.a(), "undefined" !== typeof window ? window : {})
var N = {}
if ($_378.a()) {
  var R = document.createElement("div")
  N = R.style
}
var k = {}
function x(e) {
  if (k[e]) {
    return k[e]
  }
  var t = j[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, o = 0; o < n$length; o += 1) {
      var i = n[o]
      if (Object.prototype.hasOwnProperty.call(t, i) && i in N) {
        k[e] = t[i]
        return k[e]
      }
    }
  }
  return ""
}
var D = x("animationend")
var M = x("transitionend")
var L = !(!D || !M)
var P = D || "animationend"
var B = M || "transitionend"
function F(e, t) {
  return e ? "object" === $$_107.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function G(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = $$_40_index.a(n, 2)
  var i = r[0]
  var s = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [
    i, function (e) {
      if (!t.current) {
        s(e)
      }
    }
  ]
}
var W = $_378.a() ? React.useLayoutEffect : React.useEffect
var U = ["prepare", "start", "active", "end"]
function H(e) {
  return "active" === e || "end" === e
}
var V = function (e, t) {
  var n = React.useState("none")
  var r = $$_40_index.a(n, 2)
  var i = r[0]
  var s = r[1]
  var c = function () {
    var e = React.useRef(null)
    function t() {
      $_229.a.cancel(e.current)
    }
    React.useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [
      function n(r) {
        var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
        t()
        var i = $_229.a(function () {
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
  var l = $$_40_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  W(function () {
    if ("none" !== i && "end" !== i) {
      var e = U.indexOf(i)
      var n = U[e + 1]
      var r = t(i)
      if (false === r) {
        s(n)
      } else {
        u(function (e) {
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
  }, [e, i])
  React.useEffect(function () {
    return function () {
      d()
    }
  }, [])
  return [
    function () {
      s("prepare")
    }, i
  ]
}
function z(e, t, n, i) {
  var /* [auto-meaningful-name] */i$motionEnter = i.motionEnter
  var l = undefined === i$motionEnter || i$motionEnter
  var /* [auto-meaningful-name] */i$motionAppear = i.motionAppear
  var d = undefined === i$motionAppear || i$motionAppear
  var /* [auto-meaningful-name] */i$motionLeave = i.motionLeave
  var f = undefined === i$motionLeave || i$motionLeave
  var /* [auto-meaningful-name] */i$motionDeadline = i.motionDeadline
  var /* [auto-meaningful-name] */i$motionLeaveImmediately = i.motionLeaveImmediately
  var /* [auto-meaningful-name] */i$onAppearPrepare = i.onAppearPrepare
  var /* [auto-meaningful-name] */i$onEnterPrepare = i.onEnterPrepare
  var /* [auto-meaningful-name] */i$onLeavePrepare = i.onLeavePrepare
  var /* [auto-meaningful-name] */i$onAppearStart = i.onAppearStart
  var /* [auto-meaningful-name] */i$onEnterStart = i.onEnterStart
  var /* [auto-meaningful-name] */i$onLeaveStart = i.onLeaveStart
  var /* [auto-meaningful-name] */i$onAppearActive = i.onAppearActive
  var /* [auto-meaningful-name] */i$onEnterActive = i.onEnterActive
  var /* [auto-meaningful-name] */i$onLeaveActive = i.onLeaveActive
  var /* [auto-meaningful-name] */i$onAppearEnd = i.onAppearEnd
  var /* [auto-meaningful-name] */i$onEnterEnd = i.onEnterEnd
  var /* [auto-meaningful-name] */i$onLeaveEnd = i.onLeaveEnd
  var /* [auto-meaningful-name] */i$onVisibleChanged = i.onVisibleChanged
  var j = G()
  var N = $$_40_index.a(j, 2)
  var R = N[0]
  var k = N[1]
  var x = G("none")
  var D = $$_40_index.a(x, 2)
  var M = D[0]
  var L = D[1]
  var F = G(null)
  var U = $$_40_index.a(F, 2)
  var z = U[0]
  var Y = U[1]
  var K = React.useRef(false)
  var q = React.useRef(null)
  var X = React.useRef(false)
  var Q = React.useRef(null)
  function Z() {
    return n() || Q.current
  }
  var J = React.useRef(false)
  function $(e) {
    var t
    var n = Z()
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === M && J.current) {
        t = null === i$onAppearEnd || undefined === i$onAppearEnd ? undefined : i$onAppearEnd(n, e)
      } else {
        if ("enter" === M && J.current) {
          t = null === i$onEnterEnd || undefined === i$onEnterEnd ? undefined : i$onEnterEnd(n, e)
        } else {
          if ("leave" === M && J.current) {
            t = null === i$onLeaveEnd || undefined === i$onLeaveEnd ? undefined : i$onLeaveEnd(n, e)
          }
        }
      }
      if (!(false === t || X.current)) {
        L("none")
        Y(null)
      }
    }
  }
  var ee = function (e) {
    var t = React.useRef()
    var n = React.useRef(e)
    n.current = e
    var r = React.useCallback(function (e) {
      n.current(e)
    }, [])
    function o(e) {
      if (e) {
        e.removeEventListener(B, r)
        e.removeEventListener(P, r)
      }
    }
    React.useEffect(function () {
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
          e.addEventListener(B, r)
          e.addEventListener(P, r)
          t.current = e
        }
      }, o
    ]
  }($)
  var te = $$_40_index.a(ee, 1)[0]
  var ne = React.useMemo(function () {
    var e
    var t
    var n
    switch (M) {
      case "appear":
        e = {}
        $$_35.a(e, "prepare", i$onAppearPrepare)
        $$_35.a(e, "start", i$onAppearStart)
        $$_35.a(e, "active", i$onAppearActive)
        return e
      case "enter":
        t = {}
        $$_35.a(t, "prepare", i$onEnterPrepare)
        $$_35.a(t, "start", i$onEnterStart)
        $$_35.a(t, "active", i$onEnterActive)
        return t
      case "leave":
        n = {}
        $$_35.a(n, "prepare", i$onLeavePrepare)
        $$_35.a(n, "start", i$onLeaveStart)
        $$_35.a(n, "active", i$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [M])
  var re = V(M, function (e) {
    if ("prepare" === e) {
      var /* [auto-meaningful-name] */ne$prepare = ne.prepare
      return !!ne$prepare && ne$prepare(Z())
    }
    var n
    if (ae in ne) {
      Y((null === (n = ne[ae]) || undefined === n ? undefined : n.call(ne, Z(), null)) || null)
    }
    if ("active" === ae) {
      te(Z())
      if (i$motionDeadline > 0) {
        clearTimeout(q.current)
        q.current = setTimeout(function () {
          $({
            deadline: true
          })
        }, i$motionDeadline)
      }
    }
    return true
  })
  var oe = $$_40_index.a(re, 2)
  var ie = oe[0]
  var ae = oe[1]
  var se = H(ae)
  J.current = se
  W(function () {
    k(t)
    var n
    var /* [auto-meaningful-name] */K$current = K.current
    K.current = true
    if (e) {
      if (!K$current && t && d) {
        n = "appear"
      }
      if (K$current && t && l) {
        n = "enter"
      }
      if (K$current && !t && f || !K$current && i$motionLeaveImmediately && !t && f) {
        n = "leave"
      }
      if (n) {
        L(n)
        ie()
      }
    }
  }, [t])
  React.useEffect(function () {
    if ("appear" === M && !d || "enter" === M && !l || "leave" === M && !f) {
      L("none")
    }
  }, [d, l, f])
  React.useEffect(function () {
    return function () {
      clearTimeout(q.current)
      X.current = true
    }
  }, [])
  React.useEffect(function () {
    if (undefined !== R && "none" === M) {
      if (!(null === i$onVisibleChanged || undefined === i$onVisibleChanged)) {
        i$onVisibleChanged(R)
      }
    }
  }, [R, M])
  var ce = z
  if (ne.prepare && "start" === ae) {
    ce = $$_21.a({
      transition: "none"
    }, ce)
  }
  return [M, ae, ce, null !== R && undefined !== R ? R : t]
}
var Y = function (e) {
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
}(React.Component)
var K = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === $$_107.a(e)) {
    t = e.transitionSupport
  }
  var i = React.forwardRef(function (e, t) {
    var /* [auto-meaningful-name] */e$visible = e.visible
    var c = undefined === e$visible || e$visible
    var /* [auto-meaningful-name] */e$removeOnLeave = e.removeOnLeave
    var u = undefined === e$removeOnLeave || e$removeOnLeave
    var /* [auto-meaningful-name] */e$forceRender = e.forceRender
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$motionName = e.motionName
    var /* [auto-meaningful-name] */e$leavedClassName = e.leavedClassName
    var /* [auto-meaningful-name] */e$eventProps = e.eventProps
    var g = n(e)
    var _ = React.useRef()
    var y = React.useRef()
    var E = z(g, c, function () {
      try {
        return $_482.a(_.current || y.current)
      } catch (e) {
        return null
      }
    }, e)
    var O = $$_40_index.a(E, 4)
    var C = O[0]
    var T = O[1]
    var S = O[2]
    var A = O[3]
    var I = React.useRef(A)
    if (A) {
      I.current = true
    }
    var j = React.useRef(t)
    j.current = t
    var N
    var R = React.useCallback(function (e) {
      _.current = e
      $_432.b(j.current, e)
    }, [])
    var k = $$_21.a($$_21.a({}, e$eventProps), {}, {
      visible: c
    })
    if (e$children) {
      if ("none" !== C && n(e)) {
        var x
        var D
        if ("prepare" === T) {
          D = "prepare"
        } else {
          if (H(T)) {
            D = "active"
          } else {
            if ("start" === T) {
              D = "start"
            }
          }
        }
        N = e$children($$_21.a($$_21.a({}, k), {}, {
          className: w(F(e$motionName, C), (x = {}, $$_35.a(x, F(e$motionName, "".concat(C, "-").concat(D)), D), $$_35.a(x, e$motionName, "string" === typeof e$motionName), x)),
          style: S
        }), R)
      } else {
        N = A ? e$children($$_21.a({}, k), R) : !u && I.current ? e$children($$_21.a($$_21.a({}, k), {}, {
          className: e$leavedClassName
        }), R) : e$forceRender ? e$children($$_21.a($$_21.a({}, k), {}, {
          style: {
            display: "none"
          }
        }), R) : null
      }
    } else {
      N = null
    }
    return React.createElement(Y, {
      ref: y
    }, N)
  })
  i.displayName = "CSSMotion"
  return i
}(L)
function q(e) {
  var t
  t = e && "object" === $$_107.a(e) && "key" in e ? e : {
    key: e
  }
  return $$_21.a($$_21.a({}, t), {}, {
    key: String(t.key)
  })
}
function X() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  return e.map(q)
}
function Q() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = []
  var r = 0
  var /* [auto-meaningful-name] */t$length = t.length
  var i = X(e)
  var a = X(t)
  i.forEach(function (e) {
    for (var t = false, i = r; i < t$length; i += 1) {
      var c = a[i]
      if (c.key === e.key) {
        if (r < i) {
          n = n.concat(a.slice(r, i).map(function (e) {
            return $$_21.a($$_21.a({}, e), {}, {
              status: "add"
            })
          }))
          r = i
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
    n = n.concat(a.slice(r).map(function (e) {
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
var Z = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"]
!function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : K
  var n = function (e) {
    $$_120.a(r, e)
    var n = $$_140.a(r)
    function r() {
      var e
      $$_103.a(this, r);
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
    $$_106.a(r, [
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
          var d = this$props$component || React.Fragment
          var p = {}
          Z.forEach(function (e) {
            p[e] = u[e]
            delete u[e]
          })
          delete u.keys
          return React.createElement(d, u, this$state$keyEntities.map(function (n) {
            var /* [auto-meaningful-name] */n$status = n.status
            var o = $$_54.a(n, ["status"])
            var u = "add" === n$status || "keep" === n$status
            return React.createElement(t, $$_19.a({}, p, {
              key: o.key,
              visible: u,
              eventProps: o,
              onVisibleChanged: function (t) {
                if (!(null === this$props$onVisibleChanged || undefined === this$props$onVisibleChanged)) {
                  this$props$onVisibleChanged(t, {
                    key: o.key
                  })
                }
                if (!t) {
                  e.removeKey(o.key)
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
          var o = X(e$keys)
          return {
            keyEntities: Q(t$keyEntities, o).filter(function (e) {
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
    return r
  }(React.Component)
  n.defaultProps = {
    component: "div"
  }
}(L)
var J = K
function $(e) {
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
function ee(e) {
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
    }, $({
      motion: e$maskMotion,
      prefixCls: e$prefixCls,
      transitionName: e$maskTransitionName,
      animation: e$maskAnimation
    }))
  }
  return React.createElement(J, $$_19.a({}, d, {
    visible: e$visible,
    removeOnLeave: true
  }), function (e) {
    var /* [auto-meaningful-name] */e$className = e.className
    return React.createElement("div", {
      style: {
        zIndex: e$zIndex
      },
      className: w("".concat(e$prefixCls, "-mask"), e$className)
    })
  })
}
export { J }
export { $ }
export { ee }
