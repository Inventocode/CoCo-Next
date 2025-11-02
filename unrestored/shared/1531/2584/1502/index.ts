/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1502
 */

"use strict"

import r = require("../29");
import o = require("../33/index");
import i = require("../54");
import React = require("react");
import s = require("../20");
import c = require("../19");
import l = require("../95");
import u = require("../96");
import d = require("../103");
import p = require("../120");
import f = require("../140");
import h = require("../75/index");
var m = function __importDefault(module) {
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
}(h)
import g = require("../1504/228");
import _ = require("./558");
import v = require("../1504/478");
import b = require("./428");
import y = require("./488");
import E = require("./999");
import O = require("../8");
var w = function __importDefault(module) {
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
}(O)
function C(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
import T = require("./1000");
import S = require("../108");
import I = require("./378");
function A(e, t) {
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
    animationend: A("Animation", "AnimationEnd"),
    transitionend: A("Transition", "TransitionEnd")
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
}(I.a(), "undefined" !== typeof window ? window : {})
var N = {}
if (I.a()) {
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
    for (var n = Object.keys(t), n$length = n.length, o = 0; o < n$length; o += 1) {
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
  return e ? "object" === S.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function G(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = o.a(n, 2)
  var i = r[0]
  var s = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [i, function (e) {
    if (!t.current) {
      s(e)
    }
  }]
}
var U = I.a() ? React.useLayoutEffect : React.useEffect
var W = ["prepare", "start", "active", "end"]
function H(e) {
  return "active" === e || "end" === e
}
var V = function (e, t) {
  var n = React.useState("none")
  var r = o.a(n, 2)
  var i = r[0]
  var s = r[1]
  var c = function () {
    var e = React.useRef(null)
    function t() {
      g.a.cancel(e.current)
    }
    React.useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [function n(r) {
      var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
      t()
      var i = g.a(function () {
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
  var l = o.a(c, 2)
  var u = l[0]
  var d = l[1]
  U(function () {
    if ("none" !== i && "end" !== i) {
      var e = W.indexOf(i)
      var n = W[e + 1]
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
  return [function () {
    s("prepare")
  }, i]
}
function z(e, t, n, i) {
  var i$motionEnter = i.motionEnter
  var l = undefined === i$motionEnter || i$motionEnter
  var i$motionAppear = i.motionAppear
  var d = undefined === i$motionAppear || i$motionAppear
  var i$motionLeave = i.motionLeave
  var f = undefined === i$motionLeave || i$motionLeave
  var i$motionDeadline = i.motionDeadline
  var i$motionLeaveImmediately = i.motionLeaveImmediately
  var i$onAppearPrepare = i.onAppearPrepare
  var i$onEnterPrepare = i.onEnterPrepare
  var i$onLeavePrepare = i.onLeavePrepare
  var i$onAppearStart = i.onAppearStart
  var i$onEnterStart = i.onEnterStart
  var i$onLeaveStart = i.onLeaveStart
  var i$onAppearActive = i.onAppearActive
  var i$onEnterActive = i.onEnterActive
  var i$onLeaveActive = i.onLeaveActive
  var i$onAppearEnd = i.onAppearEnd
  var i$onEnterEnd = i.onEnterEnd
  var i$onLeaveEnd = i.onLeaveEnd
  var i$onVisibleChanged = i.onVisibleChanged
  var j = G()
  var N = o.a(j, 2)
  var R = N[0]
  var k = N[1]
  var x = G("none")
  var D = o.a(x, 2)
  var M = D[0]
  var L = D[1]
  var F = G(null)
  var W = o.a(F, 2)
  var z = W[0]
  var Y = W[1]
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
    return [function (e) {
      if (t.current && t.current !== e) {
        o(t.current)
      }
      if (e && e !== t.current) {
        e.addEventListener(B, r)
        e.addEventListener(P, r)
        t.current = e
      }
    }, o]
  }($)
  var te = o.a(ee, 1)[0]
  var ne = React.useMemo(function () {
    var e
    var t
    var n
    switch (M) {
      case "appear":
        e = {}
        r.a(e, "prepare", i$onAppearPrepare)
        r.a(e, "start", i$onAppearStart)
        r.a(e, "active", i$onAppearActive)
        return e
      case "enter":
        t = {}
        r.a(t, "prepare", i$onEnterPrepare)
        r.a(t, "start", i$onEnterStart)
        r.a(t, "active", i$onEnterActive)
        return t
      case "leave":
        n = {}
        r.a(n, "prepare", i$onLeavePrepare)
        r.a(n, "start", i$onLeaveStart)
        r.a(n, "active", i$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [M])
  var re = V(M, function (e) {
    if ("prepare" === e) {
      var ne$prepare = ne.prepare
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
  var oe = o.a(re, 2)
  var ie = oe[0]
  var ae = oe[1]
  var se = H(ae)
  J.current = se
  U(function () {
    k(t)
    var n
    var k$current = K.current
    K.current = true
    if (e) {
      if (!k$current && t && d) {
        n = "appear"
      }
      if (k$current && t && l) {
        n = "enter"
      }
      if (k$current && !t && f || !k$current && i$motionLeaveImmediately && !t && f) {
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
    ce = s.a({
      transition: "none"
    }, ce)
  }
  return [M, ae, ce, null !== R && undefined !== R ? R : t]
}
var Y = function (e) {
  p.a(n, e)
  var t = f.a(n)
  function n() {
    l.a(this, n)
    return t.apply(this, arguments)
  }
  u.a(n, [{
    key: "render",
    value: function () {
      return this.props.children
    }
  }])
  return n
}(React.Component)
var K = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === S.a(e)) {
    t = e.transitionSupport
  }
  var i = React.forwardRef(function (e, t) {
    var e$visible = e.visible
    var c = undefined === e$visible || e$visible
    var e$removeOnLeave = e.removeOnLeave
    var u = undefined === e$removeOnLeave || e$removeOnLeave
    var e$forceRender = e.forceRender
    var e$children = e.children
    var e$motionName = e.motionName
    var e$leavedClassName = e.leavedClassName
    var e$eventProps = e.eventProps
    var g = n(e)
    var _ = React.useRef()
    var y = React.useRef()
    var E = z(g, c, function () {
      try {
        return v.a(_.current || y.current)
      } catch (e) {
        return null
      }
    }, e)
    var O = o.a(E, 4)
    var C = O[0]
    var T = O[1]
    var S = O[2]
    var I = O[3]
    var A = React.useRef(I)
    if (I) {
      A.current = true
    }
    var j = React.useRef(t)
    j.current = t
    var N
    var R = React.useCallback(function (e) {
      _.current = e
      b.b(j.current, e)
    }, [])
    var k = s.a(s.a({}, e$eventProps), {}, {
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
        N = e$children(s.a(s.a({}, k), {}, {
          className: w()(F(e$motionName, C), (x = {}, r.a(x, F(e$motionName, "".concat(C, "-").concat(D)), D), r.a(x, e$motionName, "string" === typeof e$motionName), x)),
          style: S
        }), R)
      } else {
        N = I ? e$children(s.a({}, k), R) : !u && A.current ? e$children(s.a(s.a({}, k), {}, {
          className: e$leavedClassName
        }), R) : e$forceRender ? e$children(s.a(s.a({}, k), {}, {
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
  t = e && "object" === S.a(e) && "key" in e ? e : {
    key: e
  }
  return s.a(s.a({}, t), {}, {
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
  var t$length = t.length
  var i = X(e)
  var a = X(t)
  i.forEach(function (e) {
    for (var t = false, i = r; i < t$length; i += 1) {
      var c = a[i]
      if (c.key === e.key) {
        if (r < i) {
          n = n.concat(a.slice(r, i).map(function (e) {
            return s.a(s.a({}, e), {}, {
              status: "add"
            })
          }))
          r = i
        }
        n.push(s.a(s.a({}, c), {}, {
          status: "keep"
        }))
        r += 1
        t = true
        break
      }
    }
    if (!t) {
      n.push(s.a(s.a({}, e), {}, {
        status: "remove"
      }))
    }
  })
  if (r < t$length) {
    n = n.concat(a.slice(r).map(function (e) {
      return s.a(s.a({}, e), {}, {
        status: "add"
      })
    }))
  }
  var c = {}
  n.forEach(function (e) {
    var e$key = e.key
    c[e$key] = (c[e$key] || 0) + 1
  })
  var l = Object.keys(c).filter(function (e) {
    return c[e] > 1
  })
  l.forEach(function (e) {
    (n = n.filter(function (t) {
      var t$key = t.key
      var t$status = t.status
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
    p.a(r, e)
    var n = f.a(r)
    function r() {
      var e
      l.a(this, r);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      }
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : s.a(s.a({}, e), {}, {
                status: "removed"
              })
            })
          }
        })
      }
      return e
    }
    u.a(r, [{
      key: "render",
      value: function () {
        var e = this
        var this$state$keyEntities = this.state.keyEntities
        var this$props = this.props
        var this$props$component = this$props.component
        var this$props$children = this$props.children
        var this$props$onVisibleChanged = this$props.onVisibleChanged
        var u = i.a(this$props, ["component", "children", "onVisibleChanged"])
        var d = this$props$component || React.Fragment
        var p = {}
        Z.forEach(function (e) {
          p[e] = u[e]
          delete u[e]
        })
        delete u.keys
        return React.createElement(d, u, this$state$keyEntities.map(function (n) {
          var n$status = n.status
          var o = i.a(n, ["status"])
          var u = "add" === n$status || "keep" === n$status
          return React.createElement(t, c.a({}, p, {
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
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var e$keys = e.keys
        var t$keyEntities = t.keyEntities
        var o = X(e$keys)
        return {
          keyEntities: Q(t$keyEntities, o).filter(function (e) {
            var t = t$keyEntities.find(function (t) {
              var t$key = t.key
              return e.key === t$key
            })
            return !t || "removed" !== t.status || "remove" !== e.status
          })
        }
      }
    }])
    return r
  }(React.Component)
  n.defaultProps = {
    component: "div"
  }
}(L)
var J = K
function $(e) {
  var e$prefixCls = e.prefixCls
  var e$motion = e.motion
  var e$animation = e.animation
  var e$transitionName = e.transitionName
  return e$motion || (e$animation ? {
    motionName: "".concat(e$prefixCls, "-").concat(e$animation)
  } : e$transitionName ? {
    motionName: e$transitionName
  } : null)
}
function ee(e) {
  var e$prefixCls = e.prefixCls
  var e$visible = e.visible
  var e$zIndex = e.zIndex
  var e$mask = e.mask
  var e$maskMotion = e.maskMotion
  var e$maskAnimation = e.maskAnimation
  var e$maskTransitionName = e.maskTransitionName
  if (!e$mask) {
    return null
  }
  var d = {}
  if (e$maskMotion || e$maskTransitionName || e$maskAnimation) {
    d = s.a({
      motionAppear: true
    }, $({
      motion: e$maskMotion,
      prefixCls: e$prefixCls,
      transitionName: e$maskTransitionName,
      animation: e$maskAnimation
    }))
  }
  return React.createElement(J, c.a({}, d, {
    visible: e$visible,
    removeOnLeave: true
  }), function (e) {
    var e$className = e.className
    return React.createElement("div", {
      style: {
        zIndex: e$zIndex
      },
      className: w()("".concat(e$prefixCls, "-mask"), e$className)
    })
  })
}
import te = require("../1500/555/index");
import ne = require("../110");
var re = function __importDefault(module) {
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
}(ne)
import oe = require("../171");
var ie = ["measure", "align", null, "motion"]
var ae = React.forwardRef(function (e, t) {
  var e$visible = e.visible
  var e$prefixCls = e.prefixCls
  var _e$className = e.className
  var _e$style = e.style
  var e$children = e.children
  var e$zIndex = e.zIndex
  var e$stretch = e.stretch
  var e$destroyPopupOnHide = e.destroyPopupOnHide
  var e$forceRender = e.forceRender
  var e$align = e.align
  var e$point = e.point
  var e$getRootDomNode = e.getRootDomNode
  var e$getClassNameFromAlign = e.getClassNameFromAlign
  var e$onAlign = e.onAlign
  var e$onMouseEnter = e.onMouseEnter
  var e$onMouseLeave = e.onMouseLeave
  var e$onMouseDown = e.onMouseDown
  var e$onTouchStart = e.onTouchStart
  var S = React.useRef()
  var I = React.useRef()
  var A = React.useState()
  var j = o.a(A, 2)
  var N = j[0]
  var R = j[1]
  var k = function (e) {
    var t = React.useState({
      width: 0,
      height: 0
    })
    var n = o.a(t, 2)
    var r = n[0]
    var i = n[1]
    return [React.useMemo(function () {
      var t = {}
      if (e) {
        var r$width = r.width
        var r$height = r.height
        if (-1 !== e.indexOf("height") && r$height) {
          t.height = r$height
        } else {
          if (-1 !== e.indexOf("minHeight") && r$height) {
            t.minHeight = r$height
          }
        }
        if (-1 !== e.indexOf("width") && r$width) {
          t.width = r$width
        } else {
          if (-1 !== e.indexOf("minWidth") && r$width) {
            t.minWidth = r$width
          }
        }
      }
      return t
    }, [e, r]), function (e) {
      i({
        width: e.offsetWidth,
        height: e.offsetHeight
      })
    }]
  }(e$stretch)
  var x = o.a(k, 2)
  var D = x[0]
  var M = x[1]
  var L = function (e, t) {
    var n = React.useState(null)
    var r = o.a(n, 2)
    var i = r[0]
    var s = r[1]
    var c = React.useRef()
    var l = React.useRef(false)
    function u(e) {
      if (!l.current) {
        s(e)
      }
    }
    function d() {
      g.a.cancel(c.current)
    }
    React.useEffect(function () {
      u("measure")
    }, [e])
    React.useEffect(function () {
      switch (i) {
        case "measure":
          t()
      }
      if (i) {
        c.current = g.a(oe.a(re.a.mark(function e() {
          var t
          var n
          return re.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = ie.indexOf(i)
                  if ((n = ie[t + 1]) && -1 !== t) {
                    u(n)
                  }
                case 3:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        })))
      }
    }, [i])
    React.useEffect(function () {
      return function () {
        l.current = true
        d()
      }
    }, [])
    return [i, function (e) {
      d()
      c.current = g.a(function () {
        u(function (e) {
          switch (i) {
            case "align":
              return "motion"
            case "motion":
              return "stable"
          }
          return e
        })
        if (!(null === e || undefined === e)) {
          e()
        }
      })
    }]
  }(e$visible, function () {
    if (e$stretch) {
      M(e$getRootDomNode())
    }
  })
  var P = o.a(L, 2)
  var B = P[0]
  var F = P[1]
  var G = React.useRef()
  function U() {
    var /* [auto-meaningful-name] */s$current
    if (!(null === (s$current = S.current) || undefined === s$current)) {
      s$current.forceAlign()
    }
  }
  function W(e, t) {
    var n = e$getClassNameFromAlign(t)
    if (N !== n) {
      R(n)
    }
    if ("align" === B) {
      if (N !== n) {
        Promise.resolve().then(function () {
          U()
        })
      } else {
        F(function () {
          var /* [auto-meaningful-name] */g$current
          if (!(null === (g$current = G.current) || undefined === g$current)) {
            g$current.call(G)
          }
        })
      }
      if (!(null === e$onAlign || undefined === e$onAlign)) {
        e$onAlign(e, t)
      }
    }
  }
  var H = s.a({}, $(e))
  function V() {
    return new Promise(function (e) {
      G.current = e
    })
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = H[e]
    H[e] = function (e, n) {
      F()
      return null === t || undefined === t ? undefined : t(e, n)
    }
  })
  React.useEffect(function () {
    if (!(H.motionName || "motion" !== B)) {
      F()
    }
  }, [H.motionName, B])
  React.useImperativeHandle(t, function () {
    return {
      forceAlign: U,
      getElement: function () {
        return I.current
      }
    }
  })
  var z = s.a(s.a({}, D), {}, {
    zIndex: e$zIndex,
    opacity: "motion" !== B && "stable" !== B && e$visible ? 0 : undefined,
    pointerEvents: "stable" === B ? undefined : "none"
  }, _e$style)
  var Y = true
  if (!(!(null === e$align || undefined === e$align ? undefined : e$align.points) || "align" !== B && "stable" !== B)) {
    Y = false
  }
  var K = e$children
  if (React.Children.count(e$children) > 1) {
    K = React.createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  return React.createElement(J, c.a({
    visible: e$visible,
    ref: I,
    leavedClassName: "".concat(e$prefixCls, "-hidden")
  }, H, {
    onAppearPrepare: V,
    onEnterPrepare: V,
    removeOnLeave: e$destroyPopupOnHide,
    forceRender: e$forceRender
  }), function (e, t) {
    var e$className = e.className
    var e$style = e.style
    var c = w()(e$prefixCls, _e$className, N, e$className)
    return React.createElement(te.a, {
      target: e$point || e$getRootDomNode,
      key: "popup",
      ref: S,
      monitorWindowResize: true,
      disabled: Y,
      align: e$align,
      onAlign: W
    }, React.createElement("div", {
      ref: t,
      className: c,
      onMouseEnter: e$onMouseEnter,
      onMouseLeave: e$onMouseLeave,
      onMouseDownCapture: e$onMouseDown,
      onTouchStartCapture: e$onTouchStart,
      style: s.a(s.a({}, e$style), z)
    }, K))
  })
})
ae.displayName = "PopupInner"
var se = ae
var ce = React.forwardRef(function (e, t) {
  var e$prefixCls = e.prefixCls
  var e$visible = e.visible
  var e$zIndex = e.zIndex
  var e$children = e.children
  var e$mobile = e.mobile
  var e$mobileUndefinedE$mobileE$mobile$popupClassName = (e$mobile = undefined === e$mobile ? {} : e$mobile).popupClassName
  var e$mobile$popupStyle = e$mobile.popupStyle
  var e$mobile$popupMotion = e$mobile.popupMotion
  var f = undefined === e$mobile$popupMotion ? {} : e$mobile$popupMotion
  var e$mobile$popupRender = e$mobile.popupRender
  var m = React.useRef()
  React.useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return m.current
      }
    }
  })
  var g = s.a({
    zIndex: e$zIndex
  }, e$mobile$popupStyle)
  var _ = e$children
  if (React.Children.count(e$children) > 1) {
    _ = React.createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  if (e$mobile$popupRender) {
    _ = e$mobile$popupRender(_)
  }
  return React.createElement(J, c.a({
    visible: e$visible,
    ref: m,
    removeOnLeave: true
  }, f), function (e, t) {
    var e$className = e.className
    var e$style = e.style
    var i = w()(e$prefixCls, e$mobileUndefinedE$mobileE$mobile$popupClassName, e$className)
    return React.createElement("div", {
      ref: t,
      className: i,
      style: s.a(s.a({}, e$style), g)
    }, _)
  })
})
ce.displayName = "MobilePopupInner"
var le = ce
var ue = ["visible", "mobile"]
var de = React.forwardRef(function (e, t) {
  var e$visible = e.visible
  var e$mobile = e.mobile
  var l = i.a(e, ue)
  var u = React.useState(e$visible)
  var d = o.a(u, 2)
  var p = d[0]
  var f = d[1]
  var h = React.useState(false)
  var m = o.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = s.a(s.a({}, l), {}, {
    visible: p
  })
  React.useEffect(function () {
    f(e$visible)
    if (e$visible && e$mobile) {
      _(T.a())
    }
  }, [e$visible, e$mobile])
  var b = g ? React.createElement(le, c.a({}, v, {
    mobile: e$mobile,
    ref: t
  })) : React.createElement(se, c.a({}, v, {
    ref: t
  }))
  return React.createElement("div", null, React.createElement(ee, v), b)
})
de.displayName = "Popup"
var pe = de
var fe = React.createContext(null)
function he() {}
function me() {
  return ""
}
function ge(e) {
  return e ? e.ownerDocument : window.document
}
var _e = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"]
var ve = function (e) {
  var t = function (t) {
    p.a(r, t)
    var n = f.a(r)
    function r(e) {
      var t
      var o
      l.a(this, r);
      (t = n.call(this, e)).popupRef = React.createRef()
      t.triggerRef = React.createRef()
      t.attachId = undefined
      t.clickOutsideHandler = undefined
      t.touchOutsideHandler = undefined
      t.contextMenuOutsideHandler1 = undefined
      t.contextMenuOutsideHandler2 = undefined
      t.mouseDownTimeout = undefined
      t.focusTime = undefined
      t.preClickTime = undefined
      t.preTouchTime = undefined
      t.delayTimer = undefined
      t.hasPopupMouseDown = undefined
      t.onMouseEnter = function (e) {
        var t$props$mouseEnterDelay = t.props.mouseEnterDelay
        t.fireEvents("onMouseEnter", e)
        t.delaySetPopupVisible(true, t$props$mouseEnterDelay, t$props$mouseEnterDelay ? null : e)
      }
      t.onMouseMove = function (e) {
        t.fireEvents("onMouseMove", e)
        t.setPoint(e)
      }
      t.onMouseLeave = function (e) {
        t.fireEvents("onMouseLeave", e)
        t.delaySetPopupVisible(false, t.props.mouseLeaveDelay)
      }
      t.onPopupMouseEnter = function () {
        t.clearDelayTimer()
      }
      t.onPopupMouseLeave = function (e) {
        var /* [auto-meaningful-name] */t$popupRef$current
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && _.a(null === (t$popupRef$current = t.popupRef.current) || undefined === t$popupRef$current ? undefined : t$popupRef$current.getElement(), e.relatedTarget))) {
          t.delaySetPopupVisible(false, t.props.mouseLeaveDelay)
        }
      }
      t.onFocus = function (e) {
        t.fireEvents("onFocus", e)
        t.clearDelayTimer()
        if (t.isFocusToShow()) {
          t.focusTime = Date.now()
          t.delaySetPopupVisible(true, t.props.focusDelay)
        }
      }
      t.onMouseDown = function (e) {
        t.fireEvents("onMouseDown", e)
        t.preClickTime = Date.now()
      }
      t.onTouchStart = function (e) {
        t.fireEvents("onTouchStart", e)
        t.preTouchTime = Date.now()
      }
      t.onBlur = function (e) {
        t.fireEvents("onBlur", e)
        t.clearDelayTimer()
        if (t.isBlurToHide()) {
          t.delaySetPopupVisible(false, t.props.blurDelay)
        }
      }
      t.onContextMenu = function (e) {
        e.preventDefault()
        t.fireEvents("onContextMenu", e)
        t.setPopupVisible(true, e)
      }
      t.onContextMenuClose = function () {
        if (t.isContextMenuToShow()) {
          t.close()
        }
      }
      t.onClick = function (e) {
        t.fireEvents("onClick", e)
        if (t.focusTime) {
          var n
          if (t.preClickTime && t.preTouchTime) {
            n = Math.min(t.preClickTime, t.preTouchTime)
          } else {
            if (t.preClickTime) {
              n = t.preClickTime
            } else {
              if (t.preTouchTime) {
                n = t.preTouchTime
              }
            }
          }
          if (Math.abs(n - t.focusTime) < 20) {
            return
          }
          t.focusTime = 0
        }
        t.preClickTime = 0
        t.preTouchTime = 0
        if (t.isClickToShow() && (t.isClickToHide() || t.isBlurToHide()) && e && e.preventDefault) {
          e.preventDefault()
        }
        var r = !t.state.popupVisible
        if (t.isClickToHide() && !r || r && t.isClickToShow()) {
          t.setPopupVisible(!t.state.popupVisible, e)
        }
      }
      t.onPopupMouseDown = function () {
        var /* [auto-meaningful-name] */t$context
        t.hasPopupMouseDown = true
        clearTimeout(t.mouseDownTimeout)
        t.mouseDownTimeout = window.setTimeout(function () {
          t.hasPopupMouseDown = false
        }, 0)
        if (t.context) {
          (t$context = t.context).onPopupMouseDown.apply(t$context, arguments)
        }
      }
      t.onDocumentClick = function (e) {
        if (!t.props.mask || t.props.maskClosable) {
          var e$target = e.target
          var r = t.getRootDomNode()
          var o = t.getPopupDomNode()
          if (!(_.a(r, e$target) && !t.isContextMenuOnly() || _.a(o, e$target) || t.hasPopupMouseDown)) {
            t.close()
          }
        }
      }
      t.getRootDomNode = function () {
        var t$props$getTriggerDOMNode = t.props.getTriggerDOMNode
        if (t$props$getTriggerDOMNode) {
          return t$props$getTriggerDOMNode(t.triggerRef.current)
        }
        try {
          var n = v.a(t.triggerRef.current)
          if (n) {
            return n
          }
        } catch (r) {}
        return m.a.findDOMNode(d.a(t))
      }
      t.getPopupClassNameFromAlign = function (e) {
        var n = []
        var t$props = t.props
        var t$props$popupPlacement = t$props.popupPlacement
        var t$props$builtinPlacements = t$props.builtinPlacements
        var t$props$prefixCls = t$props.prefixCls
        var t$props$alignPoint = t$props.alignPoint
        var t$props$getPopupClassNameFromAlign = t$props.getPopupClassNameFromAlign
        if (t$props$popupPlacement && t$props$builtinPlacements) {
          n.push(function (e, t, n, r) {
            for (var n$points = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
              var s = i[a]
              if (C(e[s].points, n$points, r)) {
                return "".concat(t, "-placement-").concat(s)
              }
            }
            return ""
          }(t$props$builtinPlacements, t$props$prefixCls, e, t$props$alignPoint))
        }
        if (t$props$getPopupClassNameFromAlign) {
          n.push(t$props$getPopupClassNameFromAlign(e))
        }
        return n.join(" ")
      }
      t.getComponent = function () {
        var t$props = t.props
        var t$props$prefixCls = t$props.prefixCls
        var t$props$destroyPopupOnHide = t$props.destroyPopupOnHide
        var t$props$popupClassName = t$props.popupClassName
        var t$props$onPopupAlign = t$props.onPopupAlign
        var t$props$popupMotion = t$props.popupMotion
        var t$props$popupAnimation = t$props.popupAnimation
        var t$props$popupTransitionName = t$props.popupTransitionName
        var t$props$popupStyle = t$props.popupStyle
        var t$props$mask = t$props.mask
        var t$props$maskAnimation = t$props.maskAnimation
        var t$props$maskTransitionName = t$props.maskTransitionName
        var t$props$maskMotion = t$props.maskMotion
        var t$props$zIndex = t$props.zIndex
        var t$props$popup = t$props.popup
        var t$props$stretch = t$props.stretch
        var t$props$alignPoint = t$props.alignPoint
        var t$props$mobile = t$props.mobile
        var t$props$forceRender = t$props.forceRender
        var t$state = t.state
        var t$state$popupVisible = t$state.popupVisible
        var t$state$point = t$state.point
        var T = t.getPopupAlign()
        var S = {}
        if (t.isMouseEnterToShow()) {
          S.onMouseEnter = t.onPopupMouseEnter
        }
        if (t.isMouseLeaveToHide()) {
          S.onMouseLeave = t.onPopupMouseLeave
        }
        S.onMouseDown = t.onPopupMouseDown
        S.onTouchStart = t.onPopupMouseDown
        return React.createElement(pe, c.a({
          prefixCls: t$props$prefixCls,
          destroyPopupOnHide: t$props$destroyPopupOnHide,
          visible: t$state$popupVisible,
          point: t$props$alignPoint && t$state$point,
          className: t$props$popupClassName,
          align: T,
          onAlign: t$props$onPopupAlign,
          animation: t$props$popupAnimation,
          getClassNameFromAlign: t.getPopupClassNameFromAlign
        }, S, {
          stretch: t$props$stretch,
          getRootDomNode: t.getRootDomNode,
          style: t$props$popupStyle,
          mask: t$props$mask,
          zIndex: t$props$zIndex,
          transitionName: t$props$popupTransitionName,
          maskAnimation: t$props$maskAnimation,
          maskTransitionName: t$props$maskTransitionName,
          maskMotion: t$props$maskMotion,
          ref: t.popupRef,
          motion: t$props$popupMotion,
          mobile: t$props$mobile,
          forceRender: t$props$forceRender
        }), "function" === typeof t$props$popup ? t$props$popup() : t$props$popup)
      }
      t.attachParent = function (e) {
        g.a.cancel(t.attachId)
        var n
        var t$props = t.props
        var t$props$getPopupContainer = t$props.getPopupContainer
        var t$props$getDocument = t$props.getDocument
        var a = t.getRootDomNode()
        if (t$props$getPopupContainer) {
          if (a || 0 === t$props$getPopupContainer.length) {
            n = t$props$getPopupContainer(a)
          }
        } else {
          n = t$props$getDocument(t.getRootDomNode()).body
        }
        if (n) {
          n.appendChild(e)
        } else {
          t.attachId = g.a(function () {
            t.attachParent(e)
          })
        }
      }
      t.getContainer = function () {
        var e = (0, t.props.getDocument)(t.getRootDomNode()).createElement("div")
        e.style.position = "absolute"
        e.style.top = "0"
        e.style.left = "0"
        e.style.width = "100%"
        t.attachParent(e)
        return e
      }
      t.setPoint = function (e) {
        if (t.props.alignPoint && e) {
          t.setState({
            point: {
              pageX: e.pageX,
              pageY: e.pageY
            }
          })
        }
      }
      t.handlePortalUpdate = function () {
        if (t.state.prevPopupVisible !== t.state.popupVisible) {
          t.props.afterPopupVisibleChange(t.state.popupVisible)
        }
      }
      t.triggerContextValue = {
        onPopupMouseDown: t.onPopupMouseDown
      }
      o = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible
      t.state = {
        prevPopupVisible: o,
        popupVisible: o
      }
      _e.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n)
        }
      })
      return t
    }
    u.a(r, [{
      key: "componentDidMount",
      value: function () {
        this.componentDidUpdate()
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        var e
        var this$props = this.props
        if (this.state.popupVisible) {
          if (!(this.clickOutsideHandler || !this.isClickToHide() && !this.isContextMenuToShow())) {
            e = this$props.getDocument(this.getRootDomNode())
            this.clickOutsideHandler = y.a(e, "mousedown", this.onDocumentClick)
          }
          if (!this.touchOutsideHandler) {
            e = e || this$props.getDocument(this.getRootDomNode())
            this.touchOutsideHandler = y.a(e, "touchstart", this.onDocumentClick)
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            e = e || this$props.getDocument(this.getRootDomNode())
            this.contextMenuOutsideHandler1 = y.a(e, "scroll", this.onContextMenuClose)
          }
          return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = y.a(window, "blur", this.onContextMenuClose)))
        }
        this.clearOutsideHandler()
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.clearDelayTimer()
        this.clearOutsideHandler()
        clearTimeout(this.mouseDownTimeout)
        g.a.cancel(this.attachId)
      }
    }, {
      key: "getPopupDomNode",
      value: function () {
        var /* [auto-meaningful-name] */this$popupRef$current
        return (null === (this$popupRef$current = this.popupRef.current) || undefined === this$popupRef$current ? undefined : this$popupRef$current.getElement()) || null
      }
    }, {
      key: "getPopupAlign",
      value: function () {
        var this$props = this.props
        var this$props$popupPlacement = this$props.popupPlacement
        var this$props$popupAlign = this$props.popupAlign
        var this$props$builtinPlacements = this$props.builtinPlacements
        return this$props$popupPlacement && this$props$builtinPlacements ? function (e, t, n) {
          var r = e[t] || {}
          return s.a(s.a({}, r), n)
        }(this$props$builtinPlacements, this$props$popupPlacement, this$props$popupAlign) : this$props$popupAlign
      }
    }, {
      key: "setPopupVisible",
      value: function (e, t) {
        var this$props$alignPoint = this.props.alignPoint
        var this$state$popupVisible = this.state.popupVisible
        this.clearDelayTimer()
        if (this$state$popupVisible !== e) {
          if (!("popupVisible" in this.props)) {
            this.setState({
              popupVisible: e,
              prevPopupVisible: this$state$popupVisible
            })
          }
          this.props.onPopupVisibleChange(e)
        }
        if (this$props$alignPoint && t && e) {
          this.setPoint(t)
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function (e, t, n) {
        var r = this
        var o = 1e3 * t
        this.clearDelayTimer()
        if (o) {
          var i = n ? {
            pageX: n.pageX,
            pageY: n.pageY
          } : null
          this.delayTimer = window.setTimeout(function () {
            r.setPopupVisible(e, i)
            r.clearDelayTimer()
          }, o)
        } else {
          this.setPopupVisible(e, n)
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function () {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer)
          this.delayTimer = null
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function () {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove()
          this.clickOutsideHandler = null
        }
        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove()
          this.contextMenuOutsideHandler1 = null
        }
        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove()
          this.contextMenuOutsideHandler2 = null
        }
        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove()
          this.touchOutsideHandler = null
        }
      }
    }, {
      key: "createTwoChains",
      value: function (e) {
        var this$props$children$props = this.props.children.props
        var this$props = this.props
        return this$props$children$props[e] && this$props[e] ? this["fire".concat(e)] : this$props$children$props[e] || this$props[e]
      }
    }, {
      key: "isClickToShow",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("click") || -1 !== this$props$showAction.indexOf("click")
      }
    }, {
      key: "isContextMenuOnly",
      value: function () {
        var this$props$action = this.props.action
        return "contextMenu" === this$props$action || 1 === this$props$action.length && "contextMenu" === this$props$action[0]
      }
    }, {
      key: "isContextMenuToShow",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("contextMenu") || -1 !== this$props$showAction.indexOf("contextMenu")
      }
    }, {
      key: "isClickToHide",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$hideAction = this$props.hideAction
        return -1 !== this$props$action.indexOf("click") || -1 !== this$props$hideAction.indexOf("click")
      }
    }, {
      key: "isMouseEnterToShow",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("hover") || -1 !== this$props$showAction.indexOf("mouseEnter")
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$hideAction = this$props.hideAction
        return -1 !== this$props$action.indexOf("hover") || -1 !== this$props$hideAction.indexOf("mouseLeave")
      }
    }, {
      key: "isFocusToShow",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("focus") || -1 !== this$props$showAction.indexOf("focus")
      }
    }, {
      key: "isBlurToHide",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$hideAction = this$props.hideAction
        return -1 !== this$props$action.indexOf("focus") || -1 !== this$props$hideAction.indexOf("blur")
      }
    }, {
      key: "forcePopupAlign",
      value: function () {
        var /* [auto-meaningful-name] */this$popupRef$current
        if (this.state.popupVisible) {
          if (!(null === (this$popupRef$current = this.popupRef.current) || undefined === this$popupRef$current)) {
            this$popupRef$current.forceAlign()
          }
        }
      }
    }, {
      key: "fireEvents",
      value: function (e, t) {
        var n = this.props.children.props[e]
        if (n) {
          n(t)
        }
        var r = this.props[e]
        if (r) {
          r(t)
        }
      }
    }, {
      key: "close",
      value: function () {
        this.setPopupVisible(false)
      }
    }, {
      key: "render",
      value: function () {
        var this$state$popupVisible = this.state.popupVisible
        var this$props = this.props
        var this$props$children = this$props.children
        var this$props$forceRender = this$props.forceRender
        var this$props$alignPoint = this$props.alignPoint
        var this$props$className = this$props.className
        var this$props$autoDestroy = this$props.autoDestroy
        var u = React.Children.only(this$props$children)
        var d = {
          key: "trigger"
        }
        if (this.isContextMenuToShow()) {
          d.onContextMenu = this.onContextMenu
        } else {
          d.onContextMenu = this.createTwoChains("onContextMenu")
        }
        if (this.isClickToHide() || this.isClickToShow()) {
          d.onClick = this.onClick
          d.onMouseDown = this.onMouseDown
          d.onTouchStart = this.onTouchStart
        } else {
          d.onClick = this.createTwoChains("onClick")
          d.onMouseDown = this.createTwoChains("onMouseDown")
          d.onTouchStart = this.createTwoChains("onTouchStart")
        }
        if (this.isMouseEnterToShow()) {
          d.onMouseEnter = this.onMouseEnter
          if (this$props$alignPoint) {
            d.onMouseMove = this.onMouseMove
          }
        } else {
          d.onMouseEnter = this.createTwoChains("onMouseEnter")
        }
        if (this.isMouseLeaveToHide()) {
          d.onMouseLeave = this.onMouseLeave
        } else {
          d.onMouseLeave = this.createTwoChains("onMouseLeave")
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          d.onFocus = this.onFocus
          d.onBlur = this.onBlur
        } else {
          d.onFocus = this.createTwoChains("onFocus")
          d.onBlur = this.createTwoChains("onBlur")
        }
        var p = w()(u && u.props && u.props.className, this$props$className)
        if (p) {
          d.className = p
        }
        var f = s.a({}, d)
        if (b.c(u)) {
          f.ref = b.a(this.triggerRef, u.ref)
        }
        var h
        var m = React.cloneElement(u, f)
        if (this$state$popupVisible || this.popupRef.current || this$props$forceRender) {
          h = React.createElement(e, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent())
        }
        if (!this$state$popupVisible && this$props$autoDestroy) {
          h = null
        }
        return React.createElement(fe.Provider, {
          value: this.triggerContextValue
        }, m, h)
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var e$popupVisible = e.popupVisible
        var r = {}
        if (undefined !== e$popupVisible && t.popupVisible !== e$popupVisible) {
          r.popupVisible = e$popupVisible
          r.prevPopupVisible = t.popupVisible
        }
        return r
      }
    }])
    return r
  }(React.Component)
  t.contextType = fe
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: me,
    getDocument: ge,
    onPopupVisibleChange: he,
    afterPopupVisibleChange: he,
    onPopupAlign: he,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: .1,
    focusDelay: 0,
    blurDelay: .15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  }
  return t
}(E.a)
var be = {
  adjustX: 1,
  adjustY: 1
}
var ye = [0, 0]
var Ee = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: be,
    offset: [0, -4],
    targetOffset: ye
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: be,
    offset: [0, -4],
    targetOffset: ye
  },
  topRight: {
    points: ["br", "tr"],
    overflow: be,
    offset: [0, -4],
    targetOffset: ye
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: be,
    offset: [0, 4],
    targetOffset: ye
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: be,
    offset: [0, 4],
    targetOffset: ye
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: be,
    offset: [0, 4],
    targetOffset: ye
  }
}
var Oe = React.forwardRef(function (e, t) {
  var e$arrow = e.arrow
  var s = undefined !== e$arrow && e$arrow
  var e$prefixCls = e.prefixCls
  var l = undefined === e$prefixCls ? "rc-dropdown" : e$prefixCls
  var e$transitionName = e.transitionName
  var e$animation = e.animation
  var e$align = e.align
  var e$placement = e.placement
  var h = undefined === e$placement ? "bottomLeft" : e$placement
  var e$placements = e.placements
  var g = undefined === e$placements ? Ee : e$placements
  var e$getPopupContainer = e.getPopupContainer
  var e$showAction = e.showAction
  var e$hideAction = e.hideAction
  var e$overlayClassName = e.overlayClassName
  var e$overlayStyle = e.overlayStyle
  var e$visible = e.visible
  var e$trigger = e.trigger
  var T = undefined === e$trigger ? ["hover"] : e$trigger
  var S = i.a(e, ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger"])
  var I = React.useState()
  var A = o.a(I, 2)
  var j = A[0]
  var N = A[1]
  var R = "visible" in e ? e$visible : j
  var k = React.useRef(null)
  React.useImperativeHandle(t, function () {
    return k.current
  })
  var x = function () {
    var e$overlay = e.overlay
    return "function" === typeof e$overlay ? e$overlay() : e$overlay
  }
  var D = function (t) {
    var e$onOverlayClick = e.onOverlayClick
    var x$props = x().props
    N(false)
    if (e$onOverlayClick) {
      e$onOverlayClick(t)
    }
    if (x$props.onClick) {
      x$props.onClick(t)
    }
  }
  var M = function () {
    var e = x()
    var t = {
      prefixCls: "".concat(l, "-menu"),
      onClick: D
    }
    if ("string" === typeof e.type) {
      delete t.prefixCls
    }
    return React.createElement(React.Fragment, null, s && React.createElement("div", {
      className: "".concat(l, "-arrow")
    }), React.cloneElement(e, t))
  }
  var L = e$hideAction
  if (!(L || -1 === T.indexOf("contextMenu"))) {
    L = ["click"]
  }
  return React.createElement(ve, Object.assign({}, S, {
    prefixCls: l,
    ref: k,
    popupClassName: w()(e$overlayClassName, r.a({}, "".concat(l, "-show-arrow"), s)),
    popupStyle: e$overlayStyle,
    builtinPlacements: g,
    action: T,
    showAction: e$showAction,
    hideAction: L || [],
    popupPlacement: h,
    popupAlign: e$align,
    popupTransitionName: e$transitionName,
    popupAnimation: e$animation,
    popupVisible: R,
    stretch: function () {
      var e$minOverlayWidthMatchTrigger = e.minOverlayWidthMatchTrigger
      var e$alignPoint = e.alignPoint
      return "minOverlayWidthMatchTrigger" in e ? e$minOverlayWidthMatchTrigger : !e$alignPoint
    }() ? "minWidth" : "",
    popup: "function" === typeof e.overlay ? M : M(),
    onPopupVisibleChange: function (t) {
      var e$onVisibleChange = e.onVisibleChange
      N(t)
      if ("function" === typeof e$onVisibleChange) {
        e$onVisibleChange(t)
      }
    },
    getPopupContainer: e$getPopupContainer
  }), function () {
    var e$children = e.children
    var n = e$children.props ? e$children.props : {}
    var r = w()(n.className, function () {
      var e$openClassName = e.openClassName
      return undefined !== e$openClassName ? e$openClassName : "".concat(l, "-open")
    }())
    return j && e$children ? React.cloneElement(e$children, {
      className: r
    }) : e$children
  }())
})
export { Oe as a }
export default Oe
