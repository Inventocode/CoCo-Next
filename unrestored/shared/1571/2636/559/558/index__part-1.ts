/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：558__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */$$_$$_40_index from "../../40/index"
import * as /* [auto-meaningful-name] */$$_$$_107 from "../../107"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_1543_432 from "../../1543/432"
import * as /* [auto-meaningful-name] */$_1497 from "./1497"
function l(e) {
  return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
function f(e, t, n) {
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
function d(e, t) {
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
var h = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-",
  O: "-o-"
}
function p() {
  if (undefined !== r) {
    return r
  }
  r = ""
  var /* [auto-meaningful-name] */document$createElementP$style = document.createElement("p").style
  for (var t in h) if (t + "Transform" in document$createElementP$style) {
    r = t
  }
  return r
}
function _() {
  return p() ? "".concat(p(), "TransitionProperty") : "transitionProperty"
}
function A() {
  return p() ? "".concat(p(), "Transform") : "transform"
}
function g(e, t) {
  var n = _()
  if (n) {
    e.style[n] = t
    if ("transitionProperty" !== n) {
      e.style.transitionProperty = t
    }
  }
}
function v(e, t) {
  var n = A()
  if (n) {
    e.style[n] = t
    if ("transform" !== n) {
      e.style.transform = t
    }
  }
}
var m
var y = /matrix\((.*)\)/
var b = /matrix3d\((.*)\)/
function w(e) {
  var /* [auto-meaningful-name] */e$style$display = e.style.display
  e.style.display = "none"
  e.offsetHeight
  e.style.display = e$style$display
}
function E(e, t, n) {
  var r = n
  if ("object" !== l(t)) {
    return "undefined" !== typeof r ? ("number" === typeof r && (r = "".concat(r, "px")), void (e.style[t] = r)) : m(e, t)
  }
  for (var i in t) if (t.hasOwnProperty(i)) {
    E(e, i, t[i])
  }
}
function x(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")]
  var r = "scroll".concat(t ? "Top" : "Left")
  if ("number" !== typeof n) {
    var /* [auto-meaningful-name] */e$document = e.document
    if ("number" !== typeof (n = e$document.documentElement[r])) {
      n = e$document.body[r]
    }
  }
  return n
}
function C(e) {
  return x(e)
}
function O(e) {
  return x(e, true)
}
function k(e) {
  var t = function (e) {
    var t
    var n
    var r
    var /* [auto-meaningful-name] */e$ownerDocument = e.ownerDocument
    var /* [auto-meaningful-name] */e$ownerDocument$body = e$ownerDocument.body
    var a = e$ownerDocument && e$ownerDocument.documentElement
    n = (t = e.getBoundingClientRect()).left
    r = t.top
    return {
      left: n -= a.clientLeft || e$ownerDocument$body.clientLeft || 0,
      top: r -= a.clientTop || e$ownerDocument$body.clientTop || 0
    }
  }(e)
  var /* [auto-meaningful-name] */e$ownerDocument = e.ownerDocument
  var r = e$ownerDocument.defaultView || e$ownerDocument.parentWindow
  t.left += C(r)
  t.top += O(r)
  return t
}
function S(e) {
  return null !== e && undefined !== e && e == e.window
}
function T(e) {
  return S(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument
}
var B = new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ")(?!px)[a-z%]+$"), "i")
var D = /^(top|right|bottom|left)$/
var I = "left"
function R(e, t) {
  return "left" === e ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e
}
function F(e) {
  return "left" === e ? "right" : "right" === e ? "left" : "top" === e ? "bottom" : "bottom" === e ? "top" : undefined
}
function P(e, t, n) {
  if ("static" === E(e, "position")) {
    e.style.position = "relative"
  }
  var r = -999
  var i = -999
  var o = R("left", n)
  var a = R("top", n)
  var s = F(o)
  var c = F(a)
  if ("left" !== o) {
    r = 999
  }
  if ("top" !== a) {
    i = 999
  }
  var u
  var l = ""
  var f = k(e)
  if ("left" in t || "top" in t) {
    l = (u = e).style.transitionProperty || u.style[_()] || ""
    g(e, "none")
  }
  if ("left" in t) {
    e.style[s] = ""
    e.style[o] = "".concat(r, "px")
  }
  if ("top" in t) {
    e.style[c] = ""
    e.style[a] = "".concat(i, "px")
  }
  w(e)
  var d = k(e)
  var h = {}
  for (var p in t) if (t.hasOwnProperty(p)) {
    var A = R(p, n)
    var v = "left" === p ? r : i
    var m = f[p] - d[p]
    h[A] = A === p ? v + m : v - m
  }
  E(e, h)
  w(e)
  if ("left" in t || "top" in t) {
    g(e, l)
  }
  var y = {}
  for (var b in t) if (t.hasOwnProperty(b)) {
    var x = R(b, n)
    var C = t[b] - f[b]
    y[x] = b === x ? h[x] + C : h[x] - C
  }
  E(e, y)
}
function N(e, t) {
  var n = k(e)
  var r = function (e) {
    var t = window.getComputedStyle(e, null)
    var n = t.getPropertyValue("transform") || t.getPropertyValue(A())
    if (n && "none" !== n) {
      var r = n.replace(/[^0-9\-.,]/g, "").split(",")
      return {
        x: parseFloat(r[12] || r[4], 0),
        y: parseFloat(r[13] || r[5], 0)
      }
    }
    return {
      x: 0,
      y: 0
    }
  }(e)
  var i = {
    x: r.x,
    y: r.y
  }
  if ("left" in t) {
    i.x = r.x + t.left - n.left
  }
  if ("top" in t) {
    i.y = r.y + t.top - n.top
  }
  (function (e, t) {
    var n = window.getComputedStyle(e, null)
    var r = n.getPropertyValue("transform") || n.getPropertyValue(A())
    if (r && "none" !== r) {
      var i
      var o = r.match(y)
      if (o) {
        (i = (o = o[1]).split(",").map(function (e) {
          return parseFloat(e, 10)
        }))[4] = t.x
        i[5] = t.y
        v(e, "matrix(".concat(i.join(","), ")"))
      } else {
        (i = r.match(b)[1].split(",").map(function (e) {
          return parseFloat(e, 10)
        }))[12] = t.x
        i[13] = t.y
        v(e, "matrix3d(".concat(i.join(","), ")"))
      }
    } else {
      v(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"))
    }
  })(e, i)
}
function M(e, t) {
  for (var n = 0; n < e.length; n++) {
    t(e[n])
  }
}
function L(e) {
  return "border-box" === m(e, "boxSizing")
}
if ("undefined" !== typeof window) {
  m = window.getComputedStyle ? function (e, t, n) {
    var r = n
    var i = ""
    var o = T(e)
    if (r = r || o.defaultView.getComputedStyle(e, null)) {
      i = r.getPropertyValue(t) || r[t]
    }
    return i
  } : function (e, t) {
    var n = e.currentStyle && e.currentStyle[t]
    if (B.test(n) && !D.test(t)) {
      var /* [auto-meaningful-name] */e$style = e.style
      var i = e$style[I]
      var o = e.runtimeStyle[I]
      e.runtimeStyle[I] = e.currentStyle[I]
      e$style[I] = "fontSize" === t ? "1em" : n || 0
      n = e$style.pixelLeft + "px"
      e$style[I] = i
      e.runtimeStyle[I] = o
    }
    return "" === n ? "auto" : n
  }
}
var j = ["margin", "border", "padding"]
function U(e, t, n) {
  var r
  var i = {}
  var /* [auto-meaningful-name] */e$style = e.style
  for (r in t) if (t.hasOwnProperty(r)) {
    i[r] = e$style[r]
    e$style[r] = t[r]
  }
  for (r in n.call(e), t) if (t.hasOwnProperty(r)) {
    e$style[r] = i[r]
  }
}
function H(e, t, n) {
  var r
  var i
  var o
  var a = 0
  for (i = 0; i < t.length; i++) {
    if (r = t[i]) {
      for (o = 0; o < n.length; o++) {
        var s = undefined
        s = "border" === r ? "".concat(r).concat(n[o], "Width") : r + n[o]
        a += parseFloat(m(e, s)) || 0
      }
    }
  }
  return a
}
var V = {
  getParent: function (e) {
    var t = e
    do {
      t = 11 === t.nodeType && t.host ? t.host : t.parentNode
    } while (t && 1 !== t.nodeType && 9 !== t.nodeType)
    return t
  }
}
function G(e, t, n) {
  var r = n
  if (S(e)) {
    return "width" === t ? V.viewportWidth(e) : V.viewportHeight(e)
  }
  if (9 === e.nodeType) {
    return "width" === t ? V.docWidth(e) : V.docHeight(e)
  }
  var i = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"]
  var o = "width" === t ? e.getBoundingClientRect().width : e.getBoundingClientRect().height
  m(e)
  var a = L(e)
  var s = 0
  if (null === o || undefined === o || o <= 0) {
    o = undefined
    if (null === (s = m(e, t)) || undefined === s || Number(s) < 0) {
      s = e.style[t] || 0
    }
    s = parseFloat(s) || 0
  }
  if (undefined === r) {
    r = a ? 1 : -1
  }
  var c = undefined !== o || a
  var u = o || s
  return -1 === r ? c ? u - H(e, ["border", "padding"], i) : s : c ? 1 === r ? u : u + (2 === r ? -H(e, ["border"], i) : H(e, ["margin"], i)) : s + H(e, j.slice(r), i)
}
M(["Width", "Height"], function (e) {
  V["doc".concat(e)] = function (t) {
    var /* [auto-meaningful-name] */t$document = t.document
    return Math.max(t$document.documentElement["scroll".concat(e)], t$document.body["scroll".concat(e)], V["viewport".concat(e)](t$document))
  }
  V["viewport".concat(e)] = function (t) {
    var n = "client".concat(e)
    var /* [auto-meaningful-name] */t$document = t.document
    var /* [auto-meaningful-name] */t$document$body = t$document.body
    var o = t$document.documentElement[n]
    return "CSS1Compat" === t$document.compatMode && o || t$document$body && t$document$body[n] || o
  }
})
var z = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
}
function Q() {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
    t[n] = arguments[n]
  }
  var r
  var i = t[0]
  if (0 !== i.offsetWidth) {
    r = G.apply(undefined, t)
  } else {
    U(i, z, function () {
      r = G.apply(undefined, t)
    })
  }
  return r
}
function W(e, t) {
  for (var n in t) if (t.hasOwnProperty(n)) {
    e[n] = t[n]
  }
  return e
}
M(["width", "height"], function (e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1)
  V["outer".concat(t)] = function (t, n) {
    return t && Q(t, e, n ? 0 : 1)
  }
  var n = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"]
  V[e] = function (t, r) {
    var i = r
    if (undefined === i) {
      return t && Q(t, e, -1)
    }
    if (t) {
      m(t)
      if (L(t)) {
        i += H(t, ["padding", "border"], n)
      }
      return E(t, e, i)
    }
  }
})
var K = {
  getWindow: function (e) {
    if (e && e.document && e.setTimeout) {
      return e
    }
    var t = e.ownerDocument || e
    return t.defaultView || t.parentWindow
  },
  getDocument: T,
  offset: function (e, t, n) {
    if ("undefined" === typeof t) {
      return k(e)
    }
    !function (e, t, n) {
      if (n.ignoreShake) {
        var r = k(e)
        var i = r.left.toFixed(0)
        var o = r.top.toFixed(0)
        var a = t.left.toFixed(0)
        var s = t.top.toFixed(0)
        if (i === a && o === s) {
          return
        }
      }
      if (n.useCssRight || n.useCssBottom) {
        P(e, t, n)
      } else {
        if (n.useCssTransform && A() in document.body.style) {
          N(e, t)
        } else {
          P(e, t, n)
        }
      }
    }(e, t, n || {})
  },
  isWindow: S,
  each: M,
  css: E,
  clone: function (e) {
    var t
    var n = {}
    for (t in e) if (e.hasOwnProperty(t)) {
      n[t] = e[t]
    }
    if (e.overflow) {
      for (t in e) if (e.hasOwnProperty(t)) {
        n.overflow[t] = e.overflow[t]
      }
    }
    return n
  },
  mix: W,
  getWindowScrollLeft: function (e) {
    return C(e)
  },
  getWindowScrollTop: function (e) {
    return O(e)
  },
  merge: function () {
    for (var e = {}, t = 0; t < arguments.length; t++) {
      K.mix(e, t < 0 || arguments.length <= t ? undefined : arguments[t])
    }
    return e
  },
  viewportWidth: 0,
  viewportHeight: 0
}
W(K, V)
var /* [auto-meaningful-name] */K$getParent = K.getParent
function Y(e) {
  if (K.isWindow(e) || 9 === e.nodeType) {
    return null
  }
  var t
  var /* [auto-meaningful-name] */K$getDocumentE$body = K.getDocument(e).body
  var r = K.css(e, "position")
  if (!("fixed" === r || "absolute" === r)) {
    return "html" === e.nodeName.toLowerCase() ? null : K$getParent(e)
  }
  for (t = K$getParent(e); t && t !== K$getDocumentE$body && 9 !== t.nodeType; t = K$getParent(t)) {
    if ("static" !== (r = K.css(t, "position"))) {
      return t
    }
  }
  return null
}
var /* [auto-meaningful-name] */_K$getParent = K.getParent
function $(e, t) {
  for (var n = {
      left: 0,
      right: 1 / 0,
      top: 0,
      bottom: 1 / 0
    }, r = Y(e), i = K.getDocument(e), o = i.defaultView || i.parentWindow, /* [auto-meaningful-name] */i$body = i.body, /* [auto-meaningful-name] */i$documentElement = i.documentElement; r;) {
    if (-1 !== navigator.userAgent.indexOf("MSIE") && 0 === r.clientWidth || r === i$body || r === i$documentElement || "visible" === K.css(r, "overflow")) {
      if (r === i$body || r === i$documentElement) {
        break
      }
    } else {
      var c = K.offset(r)
      c.left += r.clientLeft
      c.top += r.clientTop
      n.top = Math.max(n.top, c.top)
      n.right = Math.min(n.right, c.left + r.clientWidth)
      n.bottom = Math.min(n.bottom, c.top + r.clientHeight)
      n.left = Math.max(n.left, c.left)
    }
    r = Y(r)
  }
  var u = null
  if (!(K.isWindow(e) || 9 === e.nodeType)) {
    u = e.style.position
    if ("absolute" === K.css(e, "position")) {
      e.style.position = "fixed"
    }
  }
  var l = K.getWindowScrollLeft(o)
  var f = K.getWindowScrollTop(o)
  var d = K.viewportWidth(o)
  var h = K.viewportHeight(o)
  var /* [auto-meaningful-name] */i$documentElement$scrollWidth = i$documentElement.scrollWidth
  var /* [auto-meaningful-name] */i$documentElement$scrollHeight = i$documentElement.scrollHeight
  var A = window.getComputedStyle(i$body)
  if ("hidden" === A.overflowX) {
    i$documentElement$scrollWidth = o.innerWidth
  }
  if ("hidden" === A.overflowY) {
    i$documentElement$scrollHeight = o.innerHeight
  }
  if (e.style) {
    e.style.position = u
  }
  if (t || function (e) {
    if (K.isWindow(e) || 9 === e.nodeType) {
      return false
    }
    var /* [auto-meaningful-name] */K$getDocumentE$body = K.getDocument(e).body
    var n = null
    for (n = _K$getParent(e); n && n !== K$getDocumentE$body; n = _K$getParent(n)) {
      if ("fixed" === K.css(n, "position")) {
        return true
      }
    }
    return false
  }(e)) {
    n.left = Math.max(n.left, l)
    n.top = Math.max(n.top, f)
    n.right = Math.min(n.right, l + d)
    n.bottom = Math.min(n.bottom, f + h)
  } else {
    var g = Math.max(i$documentElement$scrollWidth, l + d)
    n.right = Math.min(n.right, g)
    var v = Math.max(i$documentElement$scrollHeight, f + h)
    n.bottom = Math.min(n.bottom, v)
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null
}
function J(e) {
  var t
  var n
  var r
  if (K.isWindow(e) || 9 === e.nodeType) {
    var i = K.getWindow(e)
    t = {
      left: K.getWindowScrollLeft(i),
      top: K.getWindowScrollTop(i)
    }
    n = K.viewportWidth(i)
    r = K.viewportHeight(i)
  } else {
    t = K.offset(e)
    n = K.outerWidth(e)
    r = K.outerHeight(e)
  }
  t.width = n
  t.height = r
  return t
}
function Z(e, t) {
  var n = t.charAt(0)
  var r = t.charAt(1)
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$left = e.left
  var /* [auto-meaningful-name] */e$top = e.top
  if ("c" === n) {
    e$top += e$height / 2
  } else {
    if ("b" === n) {
      e$top += e$height
    }
  }
  if ("c" === r) {
    e$left += e$width / 2
  } else {
    if ("r" === r) {
      e$left += e$width
    }
  }
  return {
    left: e$left,
    top: e$top
  }
}
function ee(e, t, n, r, i) {
  var o = Z(t, n[1])
  var a = Z(e, n[0])
  var s = [a.left - o.left, a.top - o.top]
  return {
    left: Math.round(e.left - s[0] + r[0] - i[0]),
    top: Math.round(e.top - s[1] + r[1] - i[1])
  }
}
function te(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right
}
function ne(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom
}
function re(e, t, n) {
  var r = []
  K.each(e, function (e) {
    r.push(e.replace(t, function (e) {
      return n[e]
    }))
  })
  return r
}
function ie(e, t) {
  e[t] = -e[t]
  return e
}
function oe(e, t) {
  return (/%$/.test(e) ? parseInt(e.substring(0, e.length - 1), 10) / 100 * t : parseInt(e, 10)) || 0
}
function ae(e, t) {
  e[0] = oe(e[0], t.width)
  e[1] = oe(e[1], t.height)
}
function se(e, t, n, r) {
  var /* [auto-meaningful-name] */n$points = n.points
  var o = n.offset || [0, 0]
  var a = n.targetOffset || [0, 0]
  var /* [auto-meaningful-name] */n$overflow = n.overflow
  var c = n.source || e
  o = [].concat(o)
  a = [].concat(a)
  var u = {}
  var l = 0
  var f = $(c, !(!(n$overflow = n$overflow || {}) || !n$overflow.alwaysByViewport))
  var d = J(c)
  ae(o, d)
  ae(a, t)
  var h = ee(d, t, n$points, o, a)
  var p = K.merge(d, h)
  if (f && (n$overflow.adjustX || n$overflow.adjustY) && r) {
    if (n$overflow.adjustX && te(h, d, f)) {
      var _ = re(n$points, /[lr]/gi, {
        l: "r",
        r: "l"
      })
      var A = ie(o, 0)
      var g = ie(a, 0)
      if (!function (e, t, n) {
        return e.left > n.right || e.left + t.width < n.left
      }(ee(d, t, _, A, g), d, f)) {
        l = 1
        n$points = _
        o = A
        a = g
      }
    }
    if (n$overflow.adjustY && ne(h, d, f)) {
      var v = re(n$points, /[tb]/gi, {
        t: "b",
        b: "t"
      })
      var m = ie(o, 1)
      var y = ie(a, 1)
      if (!function (e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top
      }(ee(d, t, v, m, y), d, f)) {
        l = 1
        n$points = v
        o = m
        a = y
      }
    }
    if (l) {
      h = ee(d, t, n$points, o, a)
      K.mix(p, h)
    }
    var b = te(h, d, f)
    var w = ne(h, d, f)
    if (b || w) {
      var E = n$points
      if (b) {
        E = re(n$points, /[lr]/gi, {
          l: "r",
          r: "l"
        })
      }
      if (w) {
        E = re(n$points, /[tb]/gi, {
          t: "b",
          b: "t"
        })
      }
      n$points = E
      o = n.offset || [0, 0]
      a = n.targetOffset || [0, 0]
    }
    u.adjustX = n$overflow.adjustX && b
    u.adjustY = n$overflow.adjustY && w
    if (u.adjustX || u.adjustY) {
      p = function (e, t, n, r) {
        var i = K.clone(e)
        var o = {
          width: t.width,
          height: t.height
        }
        if (r.adjustX && i.left < n.left) {
          i.left = n.left
        }
        if (r.resizeWidth && i.left >= n.left && i.left + o.width > n.right) {
          o.width -= i.left + o.width - n.right
        }
        if (r.adjustX && i.left + o.width > n.right) {
          i.left = Math.max(n.right - o.width, n.left)
        }
        if (r.adjustY && i.top < n.top) {
          i.top = n.top
        }
        if (r.resizeHeight && i.top >= n.top && i.top + o.height > n.bottom) {
          o.height -= i.top + o.height - n.bottom
        }
        if (r.adjustY && i.top + o.height > n.bottom) {
          i.top = Math.max(n.bottom - o.height, n.top)
        }
        return K.mix(i, o)
      }(h, d, f, u)
    }
  }
  if (p.width !== d.width) {
    K.css(c, "width", K.width(c) + p.width - d.width)
  }
  if (p.height !== d.height) {
    K.css(c, "height", K.height(c) + p.height - d.height)
  }
  K.offset(c, {
    left: p.left,
    top: p.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  })
  return {
    points: n$points,
    offset: o,
    targetOffset: a,
    overflow: u
  }
}
function ce(e, t, n) {
  var r = n.target || t
  return se(e, J(r), n, !function (e, t) {
    var n = $(e, t)
    var r = J(e)
    return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom
  }(r, n.overflow && n.overflow.alwaysByViewport))
}
function ue(e, t, n) {
  var r
  var i
  var o = K.getDocument(e)
  var a = o.defaultView || o.parentWindow
  var s = K.getWindowScrollLeft(a)
  var c = K.getWindowScrollTop(a)
  var u = K.viewportWidth(a)
  var l = K.viewportHeight(a)
  r = "pageX" in t ? t.pageX : s + t.clientX
  i = "pageY" in t ? t.pageY : c + t.clientY
  var h = r >= 0 && r <= s + u && i >= 0 && i <= c + l
  return se(e, {
    left: r,
    top: i,
    width: 0,
    height: 0
  }, function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {}
      if (t % 2) {
        d(n, true).forEach(function (t) {
          f(e, t, n[t])
        })
      } else {
        if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        } else {
          d(n).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
      }
    }
    return e
  }({}, n, {
    points: [n.points[0], "cc"]
  }), h)
}
ce.__getOffsetParent = Y
ce.__getVisibleRectForElement = $
export { ce }
export { ue }
