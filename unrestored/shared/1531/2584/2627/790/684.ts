/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：684
 */

"use strict"

import /* [auto-meaningful-name] */$$_$$_29 = require("../../29")
import /* [auto-meaningful-name] */$$_$$_20 = require("../../20")
import /* [auto-meaningful-name] */$$_$$_33_index = require("../../33/index")
import /* [auto-meaningful-name] */$$_$$_108 = require("../../108")
import /* [auto-meaningful-name] */React = require("react")
import /* [auto-meaningful-name] */$$_$$_739_1503_1009 = require("../../739/1503/1009")
import /* [auto-meaningful-name] */$$_$$_1026_690 = require("../../1026/690")
import /* [auto-meaningful-name] */$$_$$_8 = require("../../8")
var f = function __importDefault(module) {
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
}($$_$$_8)
import /* [auto-meaningful-name] */$$_462 = require("../462")
function h(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var p = function (e, t) {
  var n = {
    animationend: h("Animation", "AnimationEnd"),
    transitionend: h("Transition", "TransitionEnd")
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
}($$_462.a(), "undefined" !== typeof window ? window : {})
var _ = {}
if ($$_462.a()) {
  var A = document.createElement("div")
  _ = A.style
}
var g = {}
function v(e) {
  if (g[e]) {
    return g[e]
  }
  var t = p[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, i = 0; i < n$length; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in _) {
        g[e] = t[o]
        return g[e]
      }
    }
  }
  return ""
}
var m = v("animationend")
var y = v("transitionend")
var b = !(!m || !y)
var w = m || "animationend"
var E = y || "transitionend"
function x(e, t) {
  return e ? "object" === $$_$$_108.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function C(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = $$_$$_33_index.a(n, 2)
  var i = r[0]
  var a = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [i, function (e) {
    if (!t.current) {
      a(e)
    }
  }]
}
var O = $$_462.a() ? React.useLayoutEffect : React.useEffect
import /* [auto-meaningful-name] */$$_$$_1026_413 = require("../../1026/413")
var S = ["prepare", "start", "active", "end"]
function T(e) {
  return "active" === e || "end" === e
}
var B = function (e, t) {
  var n = React.useState("none")
  var r = $$_$$_33_index.a(n, 2)
  var i = r[0]
  var a = r[1]
  var c = function () {
    var e = React.useRef(null)
    function t() {
      $$_$$_1026_413.a.cancel(e.current)
    }
    React.useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [function n(r) {
      var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
      t()
      var o = $$_$$_1026_413.a(function () {
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
  var u = $$_$$_33_index.a(c, 2)
  var l = u[0]
  var f = u[1]
  O(function () {
    if ("none" !== i && "end" !== i) {
      var e = S.indexOf(i)
      var n = S[e + 1]
      var r = t(i)
      if (false === r) {
        a(n)
      } else {
        l(function (e) {
          function t() {
            if (!e.isCanceled()) {
              a(n)
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
      f()
    }
  }, [])
  return [function () {
    a("prepare")
  }, i]
}
function D(e, t, n, a) {
  var /* [auto-meaningful-name] */a$motionEnter = a.motionEnter
  var u = undefined === a$motionEnter || a$motionEnter
  var /* [auto-meaningful-name] */a$motionAppear = a.motionAppear
  var f = undefined === a$motionAppear || a$motionAppear
  var /* [auto-meaningful-name] */a$motionLeave = a.motionLeave
  var h = undefined === a$motionLeave || a$motionLeave
  var /* [auto-meaningful-name] */a$motionDeadline = a.motionDeadline
  var /* [auto-meaningful-name] */a$motionLeaveImmediately = a.motionLeaveImmediately
  var /* [auto-meaningful-name] */a$onAppearPrepare = a.onAppearPrepare
  var /* [auto-meaningful-name] */a$onEnterPrepare = a.onEnterPrepare
  var /* [auto-meaningful-name] */a$onLeavePrepare = a.onLeavePrepare
  var /* [auto-meaningful-name] */a$onAppearStart = a.onAppearStart
  var /* [auto-meaningful-name] */a$onEnterStart = a.onEnterStart
  var /* [auto-meaningful-name] */a$onLeaveStart = a.onLeaveStart
  var /* [auto-meaningful-name] */a$onAppearActive = a.onAppearActive
  var /* [auto-meaningful-name] */a$onEnterActive = a.onEnterActive
  var /* [auto-meaningful-name] */a$onLeaveActive = a.onLeaveActive
  var /* [auto-meaningful-name] */a$onAppearEnd = a.onAppearEnd
  var /* [auto-meaningful-name] */a$onEnterEnd = a.onEnterEnd
  var /* [auto-meaningful-name] */a$onLeaveEnd = a.onLeaveEnd
  var /* [auto-meaningful-name] */a$onVisibleChanged = a.onVisibleChanged
  var P = C()
  var N = $$_$$_33_index.a(P, 2)
  var M = N[0]
  var j = N[1]
  var L = C("none")
  var U = $$_$$_33_index.a(L, 2)
  var H = U[0]
  var V = U[1]
  var G = C(null)
  var z = $$_$$_33_index.a(G, 2)
  var Q = z[0]
  var W = z[1]
  var K = React.useRef(false)
  var X = React.useRef(null)
  var Y = React.useRef(false)
  var q = React.useRef(null)
  function $() {
    return n() || q.current
  }
  var J = React.useRef(false)
  function Z(e) {
    var t
    var n = $()
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === H && J.current) {
        t = null === a$onAppearEnd || undefined === a$onAppearEnd ? undefined : a$onAppearEnd(n, e)
      } else {
        if ("enter" === H && J.current) {
          t = null === a$onEnterEnd || undefined === a$onEnterEnd ? undefined : a$onEnterEnd(n, e)
        } else {
          if ("leave" === H && J.current) {
            t = null === a$onLeaveEnd || undefined === a$onLeaveEnd ? undefined : a$onLeaveEnd(n, e)
          }
        }
      }
      if (!(false === t || Y.current)) {
        V("none")
        W(null)
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
    function i(e) {
      if (e) {
        e.removeEventListener(E, r)
        e.removeEventListener(w, r)
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
        e.addEventListener(E, r)
        e.addEventListener(w, r)
        t.current = e
      }
    }, i]
  }(Z)
  var te = $$_$$_33_index.a(ee, 1)[0]
  var ne = React.useMemo(function () {
    var e
    var t
    var n
    switch (H) {
      case "appear":
        e = {}
        $$_$$_29.a(e, "prepare", a$onAppearPrepare)
        $$_$$_29.a(e, "start", a$onAppearStart)
        $$_$$_29.a(e, "active", a$onAppearActive)
        return e
      case "enter":
        t = {}
        $$_$$_29.a(t, "prepare", a$onEnterPrepare)
        $$_$$_29.a(t, "start", a$onEnterStart)
        $$_$$_29.a(t, "active", a$onEnterActive)
        return t
      case "leave":
        n = {}
        $$_$$_29.a(n, "prepare", a$onLeavePrepare)
        $$_$$_29.a(n, "start", a$onLeaveStart)
        $$_$$_29.a(n, "active", a$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [H])
  var re = B(H, function (e) {
    if ("prepare" === e) {
      var /* [auto-meaningful-name] */ne$prepare = ne.prepare
      return !!ne$prepare && ne$prepare($())
    }
    var n
    if (ae in ne) {
      W((null === (n = ne[ae]) || undefined === n ? undefined : n.call(ne, $(), null)) || null)
    }
    if ("active" === ae) {
      te($())
      if (a$motionDeadline > 0) {
        clearTimeout(X.current)
        X.current = setTimeout(function () {
          Z({
            deadline: true
          })
        }, a$motionDeadline)
      }
    }
    return true
  })
  var ie = $$_$$_33_index.a(re, 2)
  var oe = ie[0]
  var ae = ie[1]
  var se = T(ae)
  J.current = se
  O(function () {
    j(t)
    var n
    var /* [auto-meaningful-name] */K$current = K.current
    K.current = true
    if (e) {
      if (!K$current && t && f) {
        n = "appear"
      }
      if (K$current && t && u) {
        n = "enter"
      }
      if (K$current && !t && h || !K$current && a$motionLeaveImmediately && !t && h) {
        n = "leave"
      }
      if (n) {
        V(n)
        oe()
      }
    }
  }, [t])
  React.useEffect(function () {
    if ("appear" === H && !f || "enter" === H && !u || "leave" === H && !h) {
      V("none")
    }
  }, [f, u, h])
  React.useEffect(function () {
    return function () {
      clearTimeout(X.current)
      Y.current = true
    }
  }, [])
  React.useEffect(function () {
    if (undefined !== M && "none" === H) {
      if (!(null === a$onVisibleChanged || undefined === a$onVisibleChanged)) {
        a$onVisibleChanged(M)
      }
    }
  }, [M, H])
  var ce = Q
  if (ne.prepare && "start" === ae) {
    ce = $$_$$_20.a({
      transition: "none"
    }, ce)
  }
  return [H, ae, ce, null !== M && undefined !== M ? M : t]
}
import /* [auto-meaningful-name] */$$_$$_95 = require("../../95")
import /* [auto-meaningful-name] */$$_$$_96 = require("../../96")
import /* [auto-meaningful-name] */$$_$$_120 = require("../../120")
import /* [auto-meaningful-name] */$$_$$_140 = require("../../140")
var N = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n() {
    $$_$$_95.a(this, n)
    return t.apply(this, arguments)
  }
  $$_$$_96.a(n, [{
    key: "render",
    value: function () {
      return this.props.children
    }
  }])
  return n
}(React.Component)
var M = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === $$_$$_108.a(e)) {
    t = e.transitionSupport
  }
  var l = React.forwardRef(function (e, t) {
    var /* [auto-meaningful-name] */e$visible = e.visible
    var l = undefined === e$visible || e$visible
    var /* [auto-meaningful-name] */e$removeOnLeave = e.removeOnLeave
    var h = undefined === e$removeOnLeave || e$removeOnLeave
    var /* [auto-meaningful-name] */e$forceRender = e.forceRender
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$motionName = e.motionName
    var /* [auto-meaningful-name] */e$leavedClassName = e.leavedClassName
    var /* [auto-meaningful-name] */e$eventProps = e.eventProps
    var m = n(e)
    var y = React.useRef()
    var b = React.useRef()
    var w = D(m, l, function () {
      try {
        return $$_$$_739_1503_1009.a(y.current || b.current)
      } catch (e) {
        return null
      }
    }, e)
    var E = $$_$$_33_index.a(w, 4)
    var C = E[0]
    var O = E[1]
    var k = E[2]
    var S = E[3]
    var B = React.useRef(S)
    if (S) {
      B.current = true
    }
    var I = React.useRef(t)
    I.current = t
    var F
    var R = React.useCallback(function (e) {
      y.current = e
      $$_$$_1026_690.b(I.current, e)
    }, [])
    var P = $$_$$_20.a($$_$$_20.a({}, e$eventProps), {}, {
      visible: l
    })
    if (e$children) {
      if ("none" !== C && n(e)) {
        var M
        var j
        if ("prepare" === O) {
          j = "prepare"
        } else {
          if (T(O)) {
            j = "active"
          } else {
            if ("start" === O) {
              j = "start"
            }
          }
        }
        F = e$children($$_$$_20.a($$_$$_20.a({}, P), {}, {
          className: f()(x(e$motionName, C), (M = {}, $$_$$_29.a(M, x(e$motionName, "".concat(C, "-").concat(j)), j), $$_$$_29.a(M, e$motionName, "string" === typeof e$motionName), M)),
          style: k
        }), R)
      } else {
        F = S ? e$children($$_$$_20.a({}, P), R) : !h && B.current ? e$children($$_$$_20.a($$_$$_20.a({}, P), {}, {
          className: e$leavedClassName
        }), R) : e$forceRender ? e$children($$_$$_20.a($$_$$_20.a({}, P), {}, {
          style: {
            display: "none"
          }
        }), R) : null
      }
    } else {
      F = null
    }
    return React.createElement(N, {
      ref: b
    }, F)
  })
  l.displayName = "CSSMotion"
  return l
}(b)
import /* [auto-meaningful-name] */$$_$$_19 = require("../../19")
import /* [auto-meaningful-name] */$$_$$_54 = require("../../54")
function U(e) {
  var t
  t = e && "object" === $$_$$_108.a(e) && "key" in e ? e : {
    key: e
  }
  return $$_$$_20.a($$_$$_20.a({}, t), {}, {
    key: String(t.key)
  })
}
function H() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  return e.map(U)
}
function V() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = []
  var r = 0
  var /* [auto-meaningful-name] */t$length = t.length
  var a = H(e)
  var s = H(t)
  a.forEach(function (e) {
    for (var t = false, a = r; a < t$length; a += 1) {
      var c = s[a]
      if (c.key === e.key) {
        if (r < a) {
          n = n.concat(s.slice(r, a).map(function (e) {
            return $$_$$_20.a($$_$$_20.a({}, e), {}, {
              status: "add"
            })
          }))
          r = a
        }
        n.push($$_$$_20.a($$_$$_20.a({}, c), {}, {
          status: "keep"
        }))
        r += 1
        t = true
        break
      }
    }
    if (!t) {
      n.push($$_$$_20.a($$_$$_20.a({}, e), {}, {
        status: "remove"
      }))
    }
  })
  if (r < t$length) {
    n = n.concat(s.slice(r).map(function (e) {
      return $$_$$_20.a($$_$$_20.a({}, e), {}, {
        status: "add"
      })
    }))
  }
  var c = {}
  n.forEach(function (e) {
    var /* [auto-meaningful-name] */e$key = e.key
    c[e$key] = (c[e$key] || 0) + 1
  })
  var u = Object.keys(c).filter(function (e) {
    return c[e] > 1
  })
  u.forEach(function (e) {
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
var G = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
(function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : M
  var n = function (e) {
    $$_$$_120.a(r, e)
    var n = $$_$$_140.a(r)
    function r() {
      var e
      $$_$$_95.a(this, r);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      }
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : $$_$$_20.a($$_$$_20.a({}, e), {}, {
                status: "removed"
              })
            })
          }
        })
      }
      return e
    }
    $$_$$_96.a(r, [{
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$state$keyEntities = this.state.keyEntities
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$component = this$props.component
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$onVisibleChanged = this$props.onVisibleChanged
        var c = $$_$$_54.a(this$props, ["component", "children", "onVisibleChanged"])
        var u = this$props$component || React.Fragment
        var l = {}
        G.forEach(function (e) {
          l[e] = c[e]
          delete c[e]
        })
        delete c.keys
        return React.createElement(u, c, this$state$keyEntities.map(function (n) {
          var /* [auto-meaningful-name] */n$status = n.status
          var i = $$_$$_54.a(n, ["status"])
          var c = "add" === n$status || "keep" === n$status
          return React.createElement(t, $$_$$_19.a({}, l, {
            key: i.key,
            visible: c,
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
        var i = H(e$keys)
        return {
          keyEntities: V(t$keyEntities, i).filter(function (e) {
            var t = t$keyEntities.find(function (t) {
              var /* [auto-meaningful-name] */t$key = t.key
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
})(b)
export { M as a }
export default M
