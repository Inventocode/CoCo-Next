/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1545__part-2
 */

"use strict"

import { d } from "./index__part-0"
import { O, w } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_1543_229 from "../1543/229"
import i from "../8"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_1543_482 from "../1543/482"
function T(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    r.enumerable = r.enumerable || false
    r.configurable = true
    if ("value" in r) {
      r.writable = true
    }
    Object.defineProperty(e, r.key, r)
  }
}
var S = function () {
  function e() {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }(this, e)
    this.maps = undefined
    this.maps = Object.create(null)
  }
  var t
  var n
  var r
  t = e
  if (n = [
    {
      key: "set",
      value: function (e, t) {
        this.maps[e] = t
      }
    }, {
      key: "get",
      value: function (e) {
        return this.maps[e]
      }
    }
  ]) {
    T(t.prototype, n)
  }
  if (r) {
    T(t, r)
  }
  return e
}()
function A(e, t) {
  return function (e) {
    if (Array.isArray(e)) {
      return e
    }
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
    if (null == n) {
      return
    }
    var r
    var o
    var i = []
    var a = true
    var s = false
    try {
      for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = true) {
        ;
      }
    } catch (c) {
      s = true
      o = c
    } finally {
      try {
        if (!(a || null == n.return)) {
          n.return()
        }
      } finally {
        if (s) {
          throw o
        }
      }
    }
    return i
  }(e, t) || function (e, t) {
    if (!e) {
      return
    }
    if ("string" === typeof e) {
      return I(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e)
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return I(e, t)
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
function I(e, t) {
  if (null == t || t > e.length) {
    t = e.length
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n]
  }
  return r
}
function j(e) {
  return (j = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
function N(e, t) {
  return function (e) {
    if (Array.isArray(e)) {
      return e
    }
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
    if (null == n) {
      return
    }
    var r
    var o
    var i = []
    var a = true
    var s = false
    try {
      for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = true) {
        ;
      }
    } catch (c) {
      s = true
      o = c
    } finally {
      try {
        if (!(a || null == n.return)) {
          n.return()
        }
      } finally {
        if (s) {
          throw o
        }
      }
    }
    return i
  }(e, t) || function (e, t) {
    if (!e) {
      return
    }
    if ("string" === typeof e) {
      return R(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e)
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return R(e, t)
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
function R(e, t) {
  if (null == t || t > e.length) {
    t = e.length
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n]
  }
  return r
}
function k(e, t, n) {
  var o = N(React.useState(e), 2)
  var i = o[0]
  var a = o[1]
  var s = N(React.useState(null), 2)
  var c = s[0]
  var l = s[1]
  React.useEffect(function () {
    var r = function (e, t, n) {
      var r
      var o
      var /* [auto-meaningful-name] */e$length = e.length
      var /* [auto-meaningful-name] */t$length = t.length
      if (0 === e$length && 0 === t$length) {
        return null
      }
      if (e$length < t$length) {
        r = e
        o = t
      } else {
        r = t
        o = e
      }
      var s = {
        __EMPTY_ITEM__: true
      }
      function c(e) {
        return undefined !== e ? n(e) : s
      }
      for (var l = null, u = 1 !== Math.abs(e$length - t$length), d = 0; d < o.length; d += 1) {
        var p = c(r[d])
        if (p !== c(o[d])) {
          l = d
          u = u || p !== c(o[d + 1])
          break
        }
      }
      return null === l ? null : {
        index: l,
        multiple: u
      }
    }(i || [], e || [], t)
    if (undefined !== (null === r || undefined === r ? undefined : r.index)) {
      if (!(null === n || undefined === n)) {
        n(r.index)
      }
      l(e[r.index])
    }
    a(e)
  }, [e])
  return [c]
}
function x(e) {
  return (x = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
var D = "object" === ("undefined" === typeof navigator ? "undefined" : x(navigator)) && /Firefox/i.test(navigator.userAgent)
var M = function (e, t) {
  var n = React.useRef(false)
  var o = React.useRef(null)
  function i() {
    clearTimeout(o.current)
    n.current = true
    o.current = setTimeout(function () {
      n.current = false
    }, 50)
  }
  var a = React.useRef({
    top: e,
    bottom: t
  })
  a.current.top = e
  a.current.bottom = t
  return function (e) {
    var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
    var r = e < 0 && a.current.top || e > 0 && a.current.bottom
    if (t && r) {
      clearTimeout(o.current)
      n.current = false
    } else {
      if (!(r && !n.current)) {
        i()
      }
    }
    return !n.current && r
  }
}
var L = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll", "onVisibleChange"]
function P() {
  return (P = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t]
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r]
      }
    }
    return e
  }).apply(this, arguments)
}
function B(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })
    }
    n.push.apply(n, r)
  }
  return n
}
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      B(Object(n), true).forEach(function (t) {
        G(e, t, n[t])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      } else {
        B(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
    }
  }
  return e
}
function G(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    e[t] = n
  }
  return e
}
function W(e, t) {
  return function (e) {
    if (Array.isArray(e)) {
      return e
    }
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
    if (null == n) {
      return
    }
    var r
    var o
    var i = []
    var a = true
    var s = false
    try {
      for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = true) {
        ;
      }
    } catch (c) {
      s = true
      o = c
    } finally {
      try {
        if (!(a || null == n.return)) {
          n.return()
        }
      } finally {
        if (s) {
          throw o
        }
      }
    }
    return i
  }(e, t) || function (e, t) {
    if (!e) {
      return
    }
    if ("string" === typeof e) {
      return U(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e)
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return U(e, t)
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
function U(e, t) {
  if (null == t || t > e.length) {
    t = e.length
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n]
  }
  return r
}
function H(e, t) {
  if (null == e) {
    return {}
  }
  var n
  var r
  var o = function (e, t) {
    if (null == e) {
      return {}
    }
    var n
    var r
    var o = {}
    var i = Object.keys(e)
    for (r = 0; r < i.length; r++) {
      n = i[r]
      if (!(t.indexOf(n) >= 0)) {
        o[n] = e[n]
      }
    }
    return o
  }(e, t)
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e)
    for (r = 0; r < i.length; r++) {
      n = i[r]
      if (!(t.indexOf(n) >= 0)) {
        if (Object.prototype.propertyIsEnumerable.call(e, n)) {
          o[n] = e[n]
        }
      }
    }
  }
  return o
}
var V = []
var z = {
  overflowY: "auto",
  overflowAnchor: "none"
}
function Y(e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var o = undefined === e$prefixCls ? "rc-virtual-list" : e$prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$itemHeight = e.itemHeight
  var /* [auto-meaningful-name] */e$fullHeight = e.fullHeight
  var u = undefined === e$fullHeight || e$fullHeight
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$data = e.data
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$itemKey = e.itemKey
  var /* [auto-meaningful-name] */e$virtual = e.virtual
  var /* [auto-meaningful-name] */e$component = e.component
  var b = undefined === e$component ? "div" : e$component
  var /* [auto-meaningful-name] */e$onScroll = e.onScroll
  var /* [auto-meaningful-name] */e$onVisibleChange = e.onVisibleChange
  var T = H(e, L)
  var I = !(false === e$virtual || !e$height || !e$itemHeight)
  var N = I && e$data && e$itemHeight * e$data.length > e$height
  var R = W(React.useState(0), 2)
  var x = R[0]
  var B = R[1]
  var U = W(React.useState(false), 2)
  var Y = U[0]
  var K = U[1]
  var q = i(o, e$className)
  var X = e$data || V
  var Q = React.useRef()
  var Z = React.useRef()
  var J = React.useRef()
  var $ = React.useCallback(function (e) {
    return "function" === typeof e$itemKey ? e$itemKey(e) : null === e || undefined === e ? undefined : e[e$itemKey]
  }, [e$itemKey])
  var ee = {
    getKey: $
  }
  function te(e) {
    B(function (t) {
      var n = function (e) {
        var t = e
        if (!Number.isNaN(ge.current)) {
          t = Math.min(t, ge.current)
        }
        return t = Math.max(t, 0)
      }("function" === typeof e ? e(t) : e)
      Q.current.scrollTop = n
      return n
    })
  }
  var ne = React.useRef({
    start: 0,
    end: X.length
  })
  var re = React.useRef()
  var oe = W(k(X, $), 1)[0]
  re.current = oe
  var ie = W(function (e, t, n) {
    var o = A(React.useState(0), 2)
    var i = o[0]
    var a = o[1]
    var s = React.useRef(new Map())
    var c = React.useRef(new S())
    var l = React.useRef(0)
    function u() {
      l.current += 1
      var /* [auto-meaningful-name] */l$current = l.current
      Promise.resolve().then(function () {
        if (l$current === l.current) {
          s.current.forEach(function (e, t) {
            if (e && e.offsetParent) {
              var n = $$_1543_482.a(e)
              var /* [auto-meaningful-name] */n$offsetHeight = n.offsetHeight
              if (c.current.get(t) !== n$offsetHeight) {
                c.current.set(t, n.offsetHeight)
              }
            }
          })
          a(function (e) {
            return e + 1
          })
        }
      })
    }
    return [
      function (r, o) {
        var i = e(r)
        var a = s.current.get(i)
        if (o) {
          s.current.set(i, o)
          u()
        } else {
          s.current.delete(i)
        }
        if (!a !== !o) {
          if (o) {
            if (!(null === t || undefined === t)) {
              t(r)
            }
          } else {
            if (!(null === n || undefined === n)) {
              n(r)
            }
          }
        }
      }, u, c.current, i
    ]
  }($, null, null), 4)
  var ae = ie[0]
  var se = ie[1]
  var ce = ie[2]
  var le = ie[3]
  var ue = React.useMemo(function () {
    if (!I) {
      return {
        scrollHeight: undefined,
        start: 0,
        end: X.length - 1,
        offset: undefined
      }
    }
    var /* [auto-meaningful-name] */Z$current
    if (!N) {
      return {
        scrollHeight: (null === (Z$current = Z.current) || undefined === Z$current ? undefined : Z$current.offsetHeight) || 0,
        start: 0,
        end: X.length - 1,
        offset: undefined
      }
    }
    for (var t, n, r, o = 0, /* [auto-meaningful-name] */X$length = X.length, a = 0; a < X$length; a += 1) {
      var l = X[a]
      var u = $(l)
      var d = ce.get(u)
      var p = o + (undefined === d ? e$itemHeight : d)
      if (p >= x && undefined === t) {
        t = a
        n = o
      }
      if (p > x + e$height && undefined === r) {
        r = a
      }
      o = p
    }
    if (undefined === t) {
      t = 0
      n = 0
    }
    if (undefined === r) {
      r = X.length - 1
    }
    return {
      scrollHeight: o,
      start: t,
      end: r = Math.min(r + 1, X.length),
      offset: n
    }
  }, [N, I, x, X, le, e$height])
  var /* [auto-meaningful-name] */ue$scrollHeight = ue.scrollHeight
  var /* [auto-meaningful-name] */ue$start = ue.start
  var /* [auto-meaningful-name] */ue$end = ue.end
  var /* [auto-meaningful-name] */ue$offset = ue.offset
  ne.current.start = ue$start
  ne.current.end = ue$end
  var me = ue$scrollHeight - e$height
  var ge = React.useRef(me)
  ge.current = me
  var _e = x <= 0
  var ve = x >= me
  var be = M(_e, ve)
  var ye = W(function (e, t, n, o) {
    var i = React.useRef(0)
    var a = React.useRef(null)
    var s = React.useRef(null)
    var c = React.useRef(false)
    var l = M(t, n)
    return [
      function (t) {
        if (e) {
          $$_1543_229.a.cancel(a.current)
          var /* [auto-meaningful-name] */t$deltaY = t.deltaY
          i.current += t$deltaY
          s.current = t$deltaY
          if (!l(t$deltaY)) {
            if (!D) {
              t.preventDefault()
            }
            a.current = $$_1543_229.a(function () {
              var e = c.current ? 10 : 1
              o(i.current * e)
              i.current = 0
            })
          }
        }
      }, function (t) {
        if (e) {
          c.current = t.detail === s.current
        }
      }
    ]
  }(I, _e, ve, function (e) {
    te(function (t) {
      return t + e
    })
  }), 2)
  var Ee = ye[0]
  var Oe = ye[1]
  !function (e, t, n) {
    var o
    var i = React.useRef(false)
    var a = React.useRef(0)
    var s = React.useRef(null)
    var c = React.useRef(null)
    var l = function (e) {
      if (i.current) {
        var t = Math.ceil(e.touches[0].pageY)
        var r = a.current - t
        a.current = t
        if (n(r)) {
          e.preventDefault()
        }
        clearInterval(c.current)
        c.current = setInterval(function () {
          if (!n(r *= 14 / 15, true) || Math.abs(r) <= .1) {
            clearInterval(c.current)
          }
        }, 16)
      }
    }
    var u = function () {
      i.current = false
      o()
    }
    var d = function (e) {
      o()
      if (!(1 !== e.touches.length || i.current)) {
        i.current = true
        a.current = Math.ceil(e.touches[0].pageY)
        s.current = e.target
        s.current.addEventListener("touchmove", l)
        s.current.addEventListener("touchend", u)
      }
    }
    o = function () {
      if (s.current) {
        s.current.removeEventListener("touchmove", l)
        s.current.removeEventListener("touchend", u)
      }
    }
    React.useLayoutEffect(function () {
      if (e) {
        t.current.addEventListener("touchstart", d)
      }
      return function () {
        t.current.removeEventListener("touchstart", d)
        o()
        clearInterval(c.current)
      }
    }, [e])
  }(I, Q, function (e, t) {
    return !be(e, t) && (Ee({
      preventDefault: function () {},
      deltaY: e
    }), true)
  })
  React.useLayoutEffect(function () {
    function e(e) {
      if (I) {
        e.preventDefault()
      }
    }
    Q.current.addEventListener("wheel", Ee)
    Q.current.addEventListener("DOMMouseScroll", Oe)
    Q.current.addEventListener("MozMousePixelScroll", e)
    return function () {
      Q.current.removeEventListener("wheel", Ee)
      Q.current.removeEventListener("DOMMouseScroll", Oe)
      Q.current.removeEventListener("MozMousePixelScroll", e)
    }
  }, [I])
  var we = function (e, t, n, o, i, a, s, c) {
    var l = React.useRef()
    return function (r) {
      if (null !== r && undefined !== r) {
        $$_1543_229.a.cancel(l.current)
        if ("number" === typeof r) {
          s(r)
        } else if (r && "object" === j(r)) {
          var u
          var /* [auto-meaningful-name] */r$align = r.align
          u = "index" in r ? r.index : t.findIndex(function (e) {
            return i(e) === r.key
          })
          var /* [auto-meaningful-name] */r$offset = r.offset
          var h = undefined === r$offset ? 0 : r$offset
          !function r(c, f) {
            if (!(c < 0) && e.current) {
              var /* [auto-meaningful-name] */e$current$clientHeight = e.current.clientHeight
              var g = false
              var _ = f
              if (e$current$clientHeight) {
                for (var v = f || r$align, b = 0, y = 0, E = 0, O = Math.min(t.length, u), w = 0; w <= O; w += 1) {
                  var C = i(t[w])
                  y = b
                  var T = n.get(C)
                  b = E = y + (undefined === T ? o : T)
                  if (w === u && undefined === T) {
                    g = true
                  }
                }
                var S = null
                switch (v) {
                  case "top":
                    S = y - h
                    break
                  case "bottom":
                    S = E - e$current$clientHeight + h
                    break
                  default:
                    var /* [auto-meaningful-name] */e$current$scrollTop = e.current.scrollTop
                    if (y < e$current$scrollTop) {
                      _ = "top"
                    } else {
                      if (E > e$current$scrollTop + e$current$clientHeight) {
                        _ = "bottom"
                      }
                    }
                }
                if (null !== S && S !== e.current.scrollTop) {
                  s(S)
                }
              }
              l.current = $$_1543_229.a(function () {
                if (g) {
                  a()
                }
                r(c - 1, _)
              })
            }
          }(3)
        }
      } else {
        c()
      }
    }
  }(Q, X, ce, e$itemHeight, $, se, te, function () {
    var /* [auto-meaningful-name] */J$current
    if (!(null === (J$current = J.current) || undefined === J$current)) {
      J$current.delayHidden()
    }
  })
  React.useImperativeHandle(t, function () {
    return {
      scrollTo: we
    }
  })
  React.useLayoutEffect(function () {
    if (e$onVisibleChange) {
      var e = X.slice(ue$start, ue$end + 1)
      e$onVisibleChange(e, X)
    }
  }, [ue$start, ue$end, X])
  var Ce = function (e, t, n, o, i, a) {
    var /* [auto-meaningful-name] */a$getKey = a.getKey
    return e.slice(t, n + 1).map(function (e, n) {
      var a = i(e, t + n, {})
      var c = a$getKey(e)
      return React.createElement(w, {
        key: c,
        setRef: function (t) {
          return o(e, t)
        }
      }, a)
    })
  }(X, ue$start, ue$end, ae, e$children, ee)
  var Te = null
  if (e$height) {
    Te = F(G({}, u ? "height" : "maxHeight", e$height), z)
    if (I) {
      Te.overflowY = "hidden"
      if (Y) {
        Te.pointerEvents = "none"
      }
    }
  }
  return React.createElement("div", P({
    style: F(F({}, e$style), {}, {
      position: "relative"
    }),
    className: q
  }, T), React.createElement(b, {
    className: "".concat(o, "-holder"),
    style: Te,
    ref: Q,
    onScroll: function (e) {
      var /* [auto-meaningful-name] */e$currentTarget$scrollTop = e.currentTarget.scrollTop
      if (e$currentTarget$scrollTop !== x) {
        te(e$currentTarget$scrollTop)
      }
      if (!(null === e$onScroll || undefined === e$onScroll)) {
        e$onScroll(e)
      }
    }
  }, React.createElement(d, {
    prefixCls: o,
    height: ue$scrollHeight,
    offset: ue$offset,
    onInnerResize: se,
    ref: Z
  }, Ce)), I && React.createElement(O, {
    ref: J,
    prefixCls: o,
    scrollTop: x,
    height: e$height,
    scrollHeight: ue$scrollHeight,
    count: X.length,
    onScroll: function (e) {
      te(e)
    },
    onStartMove: function () {
      K(true)
    },
    onStopMove: function () {
      K(false)
    }
  }))
}
var K = React.forwardRef(Y)
K.displayName = "List"
var q = K
export { q }
