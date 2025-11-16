/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-7
 */

"use strict"

import { "285__part-6__Ve" as Ve, "285__part-6__Ge" as Ge, "285__part-6__ze" as ze, "285__part-6__Qe" as Qe, "285__part-6__We" as We, "285__part-6__Ke" as Ke } from "./index__part-6"
import * as /* [auto-meaningful-name] */$$_$$_1502_428 from "../../1502/428"
import * as /* [auto-meaningful-name] */$$_$$_1502_478 from "../../1502/478"
import /* [auto-meaningful-name] */$$_$$_75_index from "../../75/index"
import /* [auto-meaningful-name] */$$_$$_8 from "../../8"
import * as /* [auto-meaningful-name] */$$_$$_33_index from "../../33/index"
import * as /* [auto-meaningful-name] */$$_$$_108 from "../../108"
import * as /* [auto-meaningful-name] */$$_$$_140 from "../../140"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_96 from "../../96"
import * as /* [auto-meaningful-name] */$$_$$_95 from "../../95"
import * as /* [auto-meaningful-name] */$$_$$_80_index from "../../80/index"
import * as /* [auto-meaningful-name] */$$_$$_20 from "../../20"
import * as /* [auto-meaningful-name] */$$_$$_29 from "../../29"
import * as /* [auto-meaningful-name] */$$_$$_54 from "../../54"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_$$_1502_228 from "../../1502/228"
var Ye = ["prepare", "start", "active", "end"]
function qe(e) {
  return "active" === e || "end" === e
}
var $e = function (e, t) {
  var n = React.useState("none")
  var r = $$_$$_33_index.a(n, 2)
  var o = r[0]
  var a = r[1]
  var s = function () {
    var e = React.useRef(null)
    function t() {
      $$_$$_1502_228.a.cancel(e.current)
    }
    React.useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [function n(r) {
      var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
      t()
      var o = $$_$$_1502_228.a(function () {
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
  var c = $$_$$_33_index.a(s, 2)
  var u = c[0]
  var l = c[1]
  Ke(function () {
    if ("none" !== o && "end" !== o) {
      var e = Ye.indexOf(o)
      var n = Ye[e + 1]
      var r = t(o)
      if (false === r) {
        a(n)
      } else {
        u(function (e) {
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
  }, [e, o])
  React.useEffect(function () {
    return function () {
      l()
    }
  }, [])
  return [function () {
    a("prepare")
  }, o]
}
function Je(e, t, n, r) {
  var /* [auto-meaningful-name] */r$motionEnter = r.motionEnter
  var a = undefined === r$motionEnter || r$motionEnter
  var /* [auto-meaningful-name] */r$motionAppear = r.motionAppear
  var l = undefined === r$motionAppear || r$motionAppear
  var /* [auto-meaningful-name] */r$motionLeave = r.motionLeave
  var d = undefined === r$motionLeave || r$motionLeave
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
  var S = We()
  var T = $$_$$_33_index.a(S, 2)
  var B = T[0]
  var D = T[1]
  var I = We("none")
  var F = $$_$$_33_index.a(I, 2)
  var R = F[0]
  var P = F[1]
  var N = We(null)
  var M = $$_$$_33_index.a(N, 2)
  var j = M[0]
  var L = M[1]
  var U = React.useRef(false)
  var H = React.useRef(null)
  var V = React.useRef(false)
  var G = React.useRef(null)
  function z() {
    return n() || G.current
  }
  var Q = React.useRef(false)
  function W(e) {
    var t
    var n = z()
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === R && Q.current) {
        t = null === r$onAppearEnd || undefined === r$onAppearEnd ? undefined : r$onAppearEnd(n, e)
      } else {
        if ("enter" === R && Q.current) {
          t = null === r$onEnterEnd || undefined === r$onEnterEnd ? undefined : r$onEnterEnd(n, e)
        } else {
          if ("leave" === R && Q.current) {
            t = null === r$onLeaveEnd || undefined === r$onLeaveEnd ? undefined : r$onLeaveEnd(n, e)
          }
        }
      }
      if (!(false === t || V.current)) {
        P("none")
        L(null)
      }
    }
  }
  var K = function (e) {
    var t = React.useRef()
    var n = React.useRef(e)
    n.current = e
    var r = React.useCallback(function (e) {
      n.current(e)
    }, [])
    function o(e) {
      if (e) {
        e.removeEventListener(ze, r)
        e.removeEventListener(Ge, r)
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
        e.addEventListener(ze, r)
        e.addEventListener(Ge, r)
        t.current = e
      }
    }, o]
  }(W)
  var X = $$_$$_33_index.a(K, 1)[0]
  var Y = React.useMemo(function () {
    var e
    var t
    var n
    switch (R) {
      case "appear":
        e = {}
        $$_$$_29.a(e, "prepare", r$onAppearPrepare)
        $$_$$_29.a(e, "start", r$onAppearStart)
        $$_$$_29.a(e, "active", r$onAppearActive)
        return e
      case "enter":
        t = {}
        $$_$$_29.a(t, "prepare", r$onEnterPrepare)
        $$_$$_29.a(t, "start", r$onEnterStart)
        $$_$$_29.a(t, "active", r$onEnterActive)
        return t
      case "leave":
        n = {}
        $$_$$_29.a(n, "prepare", r$onLeavePrepare)
        $$_$$_29.a(n, "start", r$onLeaveStart)
        $$_$$_29.a(n, "active", r$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [R])
  var q = $e(R, function (e) {
    if ("prepare" === e) {
      var /* [auto-meaningful-name] */Y$prepare = Y.prepare
      return !!Y$prepare && Y$prepare(z())
    }
    var n
    if (Z in Y) {
      L((null === (n = Y[Z]) || undefined === n ? undefined : n.call(Y, z(), null)) || null)
    }
    if ("active" === Z) {
      X(z())
      if (r$motionDeadline > 0) {
        clearTimeout(H.current)
        H.current = setTimeout(function () {
          W({
            deadline: true
          })
        }, r$motionDeadline)
      }
    }
    return true
  })
  var $ = $$_$$_33_index.a(q, 2)
  var J = $[0]
  var Z = $[1]
  var ee = qe(Z)
  Q.current = ee
  Ke(function () {
    D(t)
    var n
    var /* [auto-meaningful-name] */U$current = U.current
    U.current = true
    if (e) {
      if (!U$current && t && l) {
        n = "appear"
      }
      if (U$current && t && a) {
        n = "enter"
      }
      if (U$current && !t && d || !U$current && r$motionLeaveImmediately && !t && d) {
        n = "leave"
      }
      if (n) {
        P(n)
        J()
      }
    }
  }, [t])
  React.useEffect(function () {
    if ("appear" === R && !l || "enter" === R && !a || "leave" === R && !d) {
      P("none")
    }
  }, [l, a, d])
  React.useEffect(function () {
    return function () {
      clearTimeout(H.current)
      V.current = true
    }
  }, [])
  React.useEffect(function () {
    if (undefined !== B && "none" === R) {
      if (!(null === r$onVisibleChanged || undefined === r$onVisibleChanged)) {
        r$onVisibleChanged(B)
      }
    }
  }, [B, R])
  var te = j
  if (Y.prepare && "start" === Z) {
    te = $$_$$_20.a({
      transition: "none"
    }, te)
  }
  return [R, Z, te, null !== B && undefined !== B ? B : t]
}
var Ze = function (e) {
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
var et = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === $$_$$_108.a(e)) {
    t = e.transitionSupport
  }
  var r = React.forwardRef(function (e, t) {
    var /* [auto-meaningful-name] */e$visible = e.visible
    var o = undefined === e$visible || e$visible
    var /* [auto-meaningful-name] */e$removeOnLeave = e.removeOnLeave
    var s = undefined === e$removeOnLeave || e$removeOnLeave
    var /* [auto-meaningful-name] */e$forceRender = e.forceRender
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$motionName = e.motionName
    var /* [auto-meaningful-name] */e$leavedClassName = e.leavedClassName
    var /* [auto-meaningful-name] */e$eventProps = e.eventProps
    var _ = n(e)
    var A = React.useRef()
    var g = React.useRef()
    var v = Je(_, o, function () {
      try {
        return $$_$$_1502_478.a(A.current || g.current)
      } catch (e) {
        return null
      }
    }, e)
    var m = $$_$$_33_index.a(v, 4)
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
      A.current = e
      $$_$$_1502_428.b(C.current, e)
    }, [])
    var S = $$_$$_20.a($$_$$_20.a({}, e$eventProps), {}, {
      visible: o
    })
    if (e$children) {
      if ("none" !== y && n(e)) {
        var T
        var B
        if ("prepare" === b) {
          B = "prepare"
        } else {
          if (qe(b)) {
            B = "active"
          } else {
            if ("start" === b) {
              B = "start"
            }
          }
        }
        O = e$children($$_$$_20.a($$_$$_20.a({}, S), {}, {
          className: $$_$$_8(Qe(e$motionName, y), (T = {}, $$_$$_29.a(T, Qe(e$motionName, "".concat(y, "-").concat(B)), B), $$_$$_29.a(T, e$motionName, "string" === typeof e$motionName), T)),
          style: w
        }), k)
      } else {
        O = E ? e$children($$_$$_20.a({}, S), k) : !s && x.current ? e$children($$_$$_20.a($$_$$_20.a({}, S), {}, {
          className: e$leavedClassName
        }), k) : e$forceRender ? e$children($$_$$_20.a($$_$$_20.a({}, S), {}, {
          style: {
            display: "none"
          }
        }), k) : null
      }
    } else {
      O = null
    }
    return React.createElement(Ze, {
      ref: g
    }, O)
  })
  r.displayName = "CSSMotion"
  return r
}(Ve)
function tt(e) {
  var t
  t = e && "object" === $$_$$_108.a(e) && "key" in e ? e : {
    key: e
  }
  return $$_$$_20.a($$_$$_20.a({}, t), {}, {
    key: String(t.key)
  })
}
function nt() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  return e.map(tt)
}
function rt() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = []
  var r = 0
  var /* [auto-meaningful-name] */t$length = t.length
  var o = nt(e)
  var a = nt(t)
  o.forEach(function (e) {
    for (var t = false, o = r; o < t$length; o += 1) {
      var s = a[o]
      if (s.key === e.key) {
        if (r < o) {
          n = n.concat(a.slice(r, o).map(function (e) {
            return $$_$$_20.a($$_$$_20.a({}, e), {}, {
              status: "add"
            })
          }))
          r = o
        }
        n.push($$_$$_20.a($$_$$_20.a({}, s), {}, {
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
    n = n.concat(a.slice(r).map(function (e) {
      return $$_$$_20.a($$_$$_20.a({}, e), {}, {
        status: "add"
      })
    }))
  }
  var s = {}
  n.forEach(function (e) {
    var /* [auto-meaningful-name] */e$key = e.key
    s[e$key] = (s[e$key] || 0) + 1
  })
  var c = Object.keys(s).filter(function (e) {
    return s[e] > 1
  })
  c.forEach(function (e) {
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
var it = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"]
var ot = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : et
  var n = function (e) {
    $$_$$_120.a(o, e)
    var n = $$_$$_140.a(o)
    function o() {
      var e
      $$_$$_95.a(this, o);
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
    $$_$$_96.a(o, [{
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$state$keyEntities = this.state.keyEntities
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$component = this$props.component
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$onVisibleChanged = this$props.onVisibleChanged
        var l = $$_$$_54.a(this$props, ["component", "children", "onVisibleChanged"])
        var f = this$props$component || React.Fragment
        var d = {}
        it.forEach(function (e) {
          d[e] = l[e]
          delete l[e]
        })
        delete l.keys
        return React.createElement(f, l, this$state$keyEntities.map(function (n) {
          var /* [auto-meaningful-name] */n$status = n.status
          var a = $$_$$_54.a(n, ["status"])
          var l = "add" === n$status || "keep" === n$status
          return React.createElement(t, $$_$$_19.a({}, d, {
            key: a.key,
            visible: l,
            eventProps: a,
            onVisibleChanged: function (t) {
              if (!(null === this$props$onVisibleChanged || undefined === this$props$onVisibleChanged)) {
                this$props$onVisibleChanged(t, {
                  key: a.key
                })
              }
              if (!t) {
                e.removeKey(a.key)
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
        var i = nt(e$keys)
        return {
          keyEntities: rt(t$keyEntities, i).filter(function (e) {
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
  return n
}(Ve)
var at = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n() {
    var e
    $$_$$_95.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      i[o] = arguments[o]
    }
    (e = t.call.apply(t, [this].concat(i))).closeTimer = null
    e.close = function (t) {
      if (t) {
        t.stopPropagation()
      }
      e.clearCloseTimer()
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$onClose = e$props.onClose
      var /* [auto-meaningful-name] */e$props$noticeKey = e$props.noticeKey
      if (e$props$onClose) {
        e$props$onClose(e$props$noticeKey)
      }
    }
    e.startCloseTimer = function () {
      if (e.props.duration) {
        e.closeTimer = window.setTimeout(function () {
          e.close()
        }, 1e3 * e.props.duration)
      }
    }
    e.clearCloseTimer = function () {
      if (e.closeTimer) {
        clearTimeout(e.closeTimer)
        e.closeTimer = null
      }
    }
    return e
  }
  $$_$$_96.a(n, [{
    key: "componentDidMount",
    value: function () {
      this.startCloseTimer()
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      if (this.props.duration !== e.duration || this.props.updateMark !== e.updateMark || this.props.visible !== e.visible && this.props.visible) {
        this.restartCloseTimer()
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.clearCloseTimer()
    }
  }, {
    key: "restartCloseTimer",
    value: function () {
      this.clearCloseTimer()
      this.startCloseTimer()
    }
  }, {
    key: "render",
    value: function () {
      var e = this
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$prefixCls = this$props.prefixCls
      var /* [auto-meaningful-name] */this$props$className = this$props.className
      var /* [auto-meaningful-name] */this$props$closable = this$props.closable
      var /* [auto-meaningful-name] */this$props$closeIcon = this$props.closeIcon
      var /* [auto-meaningful-name] */this$props$style = this$props.style
      var /* [auto-meaningful-name] */this$props$onClick = this$props.onClick
      var /* [auto-meaningful-name] */this$props$children = this$props.children
      var /* [auto-meaningful-name] */this$props$holder = this$props.holder
      var h = "".concat(this$props$prefixCls, "-notice")
      var p = Object.keys(this.props).reduce(function (t, n) {
        if (!("data-" !== n.substr(0, 5) && "aria-" !== n.substr(0, 5) && "role" !== n)) {
          t[n] = e.props[n]
        }
        return t
      }, {})
      var _ = React.createElement("div", $$_$$_19.a({
        className: $$_$$_8(h, this$props$className, $$_$$_29.a({}, "".concat(h, "-closable"), this$props$closable)),
        style: this$props$style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: this$props$onClick
      }, p), React.createElement("div", {
        className: "".concat(h, "-content")
      }, this$props$children), this$props$closable ? React.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(h, "-close")
      }, this$props$closeIcon || React.createElement("span", {
        className: "".concat(h, "-close-x")
      })) : null)
      return this$props$holder ? $$_$$_75_index.createPortal(_, this$props$holder) : _
    }
  }])
  return n
}(React.Component)
function st(e) {
  var t = React.useRef({})
  var n = React.useState([])
  var o = $$_$$_33_index.a(n, 2)
  var a = o[0]
  var s = o[1]
  return [function (n) {
    var o = true
    e.add(n, function (e, n) {
      var /* [auto-meaningful-name] */n$key = n.key
      if (e && (!t.current[n$key] || o)) {
        var c = React.createElement(at, $$_$$_19.a({}, n, {
          holder: e
        }))
        t.current[n$key] = c
        s(function (e) {
          var t = e.findIndex(function (e) {
            return e.key === n.key
          })
          if (-1 === t) {
            return [].concat($$_$$_80_index.a(e), [c])
          }
          var r = $$_$$_80_index.a(e)
          r[t] = c
          return r
        })
      }
      o = false
    })
  }, React.createElement(React.Fragment, null, a)]
}
at.defaultProps = {
  onClose: function () {},
  duration: 1.5
}
var ct = 0
var ut = Date.now()
function lt() {
  var e = ct
  ct += 1
  return "rcNotification_".concat(ut, "_").concat(e)
}
var ft = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n() {
    var e
    $$_$$_95.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      i[o] = arguments[o]
    }
    (e = t.call.apply(t, [this].concat(i))).state = {
      notices: []
    }
    e.hookRefs = new Map()
    e.add = function (t, n) {
      var r = t.key || lt()
      var i = $$_$$_20.a($$_$$_20.a({}, t), {}, {
        key: r
      })
      var /* [auto-meaningful-name] */e$props$maxCount = e.props.maxCount
      e.setState(function (e) {
        var /* [auto-meaningful-name] */e$notices = e.notices
        var a = e$notices.map(function (e) {
          return e.notice.key
        }).indexOf(r)
        var s = e$notices.concat()
        if (-1 !== a) {
          s.splice(a, 1, {
            notice: i,
            holderCallback: n
          })
        } else {
          if (e$props$maxCount && e$notices.length >= e$props$maxCount) {
            i.key = s[0].notice.key
            i.updateMark = lt()
            i.userPassKey = r
            s.shift()
          }
          s.push({
            notice: i,
            holderCallback: n
          })
        }
        return {
          notices: s
        }
      })
    }
    e.remove = function (t) {
      e.setState(function (e) {
        return {
          notices: e.notices.filter(function (e) {
            var /* [auto-meaningful-name] */e$notice = e.notice
            var /* [auto-meaningful-name] */e$notice$key = e$notice.key
            return (e$notice.userPassKey || e$notice$key) !== t
          })
        }
      })
    }
    e.noticePropsMap = {}
    return e
  }
  $$_$$_96.a(n, [{
    key: "getTransitionName",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$prefixCls = this$props.prefixCls
      var /* [auto-meaningful-name] */this$props$animation = this$props.animation
      var /* [auto-meaningful-name] */this$props$transitionName = this.props.transitionName
      if (!this$props$transitionName && this$props$animation) {
        this$props$transitionName = "".concat(this$props$prefixCls, "-").concat(this$props$animation)
      }
      return this$props$transitionName
    }
  }, {
    key: "render",
    value: function () {
      var e = this
      var /* [auto-meaningful-name] */this$state$notices = this.state.notices
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$prefixCls = this$props.prefixCls
      var /* [auto-meaningful-name] */this$props$className = this$props.className
      var /* [auto-meaningful-name] */this$props$closeIcon = this$props.closeIcon
      var /* [auto-meaningful-name] */this$props$style = this$props.style
      var l = []
      this$state$notices.forEach(function (n, r) {
        var /* [auto-meaningful-name] */n$notice = n.notice
        var /* [auto-meaningful-name] */n$holderCallback = n.holderCallback
        var c = r === this$state$notices.length - 1 ? n$notice.updateMark : undefined
        var /* [auto-meaningful-name] */n$notice$key = n$notice.key
        var /* [auto-meaningful-name] */n$notice$userPassKey = n$notice.userPassKey
        var h = $$_$$_20.a($$_$$_20.a($$_$$_20.a({
          prefixCls: this$props$prefixCls,
          closeIcon: this$props$closeIcon
        }, n$notice), n$notice.props), {}, {
          key: n$notice$key,
          noticeKey: n$notice$userPassKey || n$notice$key,
          updateMark: c,
          onClose: function (t) {
            var /* [auto-meaningful-name] */n$notice$onClose
            e.remove(t)
            if (!(null === (n$notice$onClose = n$notice.onClose) || undefined === n$notice$onClose)) {
              n$notice$onClose.call(n$notice)
            }
          },
          onClick: n$notice.onClick,
          children: n$notice.content
        })
        l.push(n$notice$key)
        e.noticePropsMap[n$notice$key] = {
          props: h,
          holderCallback: n$holderCallback
        }
      })
      return React.createElement("div", {
        className: $$_$$_8(this$props$prefixCls, this$props$className),
        style: this$props$style
      }, React.createElement(ot, {
        keys: l,
        motionName: this.getTransitionName(),
        onVisibleChanged: function (t, n) {
          var /* [auto-meaningful-name] */n$key = n.key
          if (!t) {
            delete e.noticePropsMap[n$key]
          }
        }
      }, function (t) {
        var /* [auto-meaningful-name] */t$key = t.key
        var /* [auto-meaningful-name] */t$className = t.className
        var /* [auto-meaningful-name] */t$style = t.style
        var /* [auto-meaningful-name] */t$visible = t.visible
        var l = e.noticePropsMap[t$key]
        var /* [auto-meaningful-name] */l$props = l.props
        var /* [auto-meaningful-name] */l$holderCallback = l.holderCallback
        return l$holderCallback ? React.createElement("div", {
          key: t$key,
          className: $$_$$_8(t$className, "".concat(this$props$prefixCls, "-hook-holder")),
          style: $$_$$_20.a({}, t$style),
          ref: function (t) {
            if ("undefined" !== typeof t$key) {
              if (t) {
                e.hookRefs.set(t$key, t)
                l$holderCallback(t, l$props)
              } else {
                e.hookRefs.delete(t$key)
              }
            }
          }
        }) : React.createElement(at, $$_$$_19.a({}, l$props, {
          className: $$_$$_8(t$className, null === l$props || undefined === l$props ? undefined : l$props.className),
          style: $$_$$_20.a($$_$$_20.a({}, t$style), null === l$props || undefined === l$props ? undefined : l$props.style),
          visible: t$visible
        }))
      }))
    }
  }])
  return n
}(React.Component)
ft.newInstance = undefined
ft.defaultProps = {
  prefixCls: "rc-notification",
  animation: "fade",
  style: {
    top: 65,
    left: "50%"
  }
}
ft.newInstance = function (e, t) {
  var n = e || {}
  var /* [auto-meaningful-name] */n$getContainer = n.getContainer
  var a = $$_$$_54.a(n, ["getContainer"])
  var c = document.createElement("div")
  if (n$getContainer) {
    n$getContainer().appendChild(c)
  } else {
    document.body.appendChild(c)
  }
  var u = false
  $$_$$_75_index.render(React.createElement(ft, $$_$$_19.a({}, a, {
    ref: function (e) {
      if (!u) {
        u = true
        t({
          notice: function (t) {
            e.add(t)
          },
          removeNotice: function (t) {
            e.remove(t)
          },
          component: e,
          destroy: function () {
            $$_$$_75_index.unmountComponentAtNode(c)
            if (c.parentNode) {
              c.parentNode.removeChild(c)
            }
          },
          useNotification: function () {
            return st(e)
          }
        })
      }
    }
  })), c)
}
var dt = ft
export { st as "285__part-7__st" }
export { dt as "285__part-7__dt" }
