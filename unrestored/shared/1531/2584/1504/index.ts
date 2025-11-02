/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1504
 */

"use strict"

import React = require("react");
import o = require("../8");
var i = function __importDefault(module) {
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
}(o)
import a = require("./788");
function s(e, t) {
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
function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      s(Object(n), true).forEach(function (t) {
        l(e, t, n[t])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      } else {
        s(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
    }
  }
  return e
}
function l(e, t, n) {
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
var u = React.forwardRef(function (e, t) {
  var e$height = e.height
  var e$offset = e.offset
  var e$children = e.children
  var e$prefixCls = e.prefixCls
  var e$onInnerResize = e.onInnerResize
  var p = {}
  var f = {
    display: "flex",
    flexDirection: "column"
  }
  if (undefined !== e$offset) {
    p = {
      height: e$height,
      position: "relative",
      overflow: "hidden"
    }
    f = c(c({}, f), {}, {
      transform: "translateY(".concat(e$offset, "px)"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    })
  }
  return React.createElement("div", {
    style: p
  }, React.createElement(a.a, {
    onResize: function (e) {
      if (e.offsetHeight && e$onInnerResize) {
        e$onInnerResize()
      }
    }
  }, React.createElement("div", {
    style: f,
    className: i()(l({}, "".concat(e$prefixCls, "-holder-inner"), e$prefixCls)),
    ref: t
  }, e$children)))
})
u.displayName = "Filler"
var d = u
import p = require("./228");
function f(e) {
  return (f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
function h(e, t, n) {
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
function m(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
function g(e, t) {
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
function _(e, t) {
  return (_ = Object.setPrototypeOf || function (e, t) {
    e.__proto__ = t
    return e
  })(e, t)
}
function v(e) {
  var t = function () {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
      return false
    }
    if (Reflect.construct.sham) {
      return false
    }
    if ("function" === typeof Proxy) {
      return true
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
      return true
    } catch (e) {
      return false
    }
  }()
  return function () {
    var n
    var r = y(e)
    if (t) {
      var yThis$constructor = y(this).constructor
      n = Reflect.construct(r, arguments, yThis$constructor)
    } else {
      n = r.apply(this, arguments)
    }
    return b(this, n)
  }
}
function b(e, t) {
  if (t && ("object" === f(t) || "function" === typeof t)) {
    return t
  }
  if (undefined !== t) {
    throw new TypeError("Derived constructors may only return object or undefined")
  }
  return function (e) {
    if (undefined === e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return e
  }(e)
}
function y(e) {
  return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}
function E(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY
}
var O = function (e) {
  !function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function")
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: true,
        configurable: true
      }
    })
    if (t) {
      _(e, t)
    }
  }(s, e)
  var t
  var n
  var o
  var a = v(s)
  function s() {
    var e
    m(this, s)
    for (var arguments$length = arguments.length, n = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      n[o] = arguments[o]
    }
    (e = a.call.apply(a, [this].concat(n))).moveRaf = null
    e.scrollbarRef = React.createRef()
    e.thumbRef = React.createRef()
    e.visibleTimeout = null
    e.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    }
    e.delayHidden = function () {
      clearTimeout(e.visibleTimeout)
      e.setState({
        visible: true
      })
      e.visibleTimeout = setTimeout(function () {
        e.setState({
          visible: false
        })
      }, 2e3)
    }
    e.onScrollbarTouchStart = function (e) {
      e.preventDefault()
    }
    e.onContainerMouseDown = function (e) {
      e.stopPropagation()
      e.preventDefault()
    }
    e.patchEvents = function () {
      window.addEventListener("mousemove", e.onMouseMove)
      window.addEventListener("mouseup", e.onMouseUp)
      e.thumbRef.current.addEventListener("touchmove", e.onMouseMove)
      e.thumbRef.current.addEventListener("touchend", e.onMouseUp)
    }
    e.removeEvents = function () {
      window.removeEventListener("mousemove", e.onMouseMove)
      window.removeEventListener("mouseup", e.onMouseUp)
      e.scrollbarRef.current.removeEventListener("touchstart", e.onScrollbarTouchStart)
      e.thumbRef.current.removeEventListener("touchstart", e.onMouseDown)
      e.thumbRef.current.removeEventListener("touchmove", e.onMouseMove)
      e.thumbRef.current.removeEventListener("touchend", e.onMouseUp)
      p.a.cancel(e.moveRaf)
    }
    e.onMouseDown = function (t) {
      var e$props$onStartMove = e.props.onStartMove
      e.setState({
        dragging: true,
        pageY: E(t),
        startTop: e.getTop()
      })
      e$props$onStartMove()
      e.patchEvents()
      t.stopPropagation()
      t.preventDefault()
    }
    e.onMouseMove = function (t) {
      var e$state = e.state
      var e$state$dragging = e$state.dragging
      var e$state$pageY = e$state.pageY
      var e$state$startTop = e$state.startTop
      var e$props$onScroll = e.props.onScroll
      p.a.cancel(e.moveRaf)
      if (e$state$dragging) {
        var s = e$state$startTop + (E(t) - e$state$pageY)
        var c = e.getEnableScrollRange()
        var l = e.getEnableHeightRange()
        var u = l ? s / l : 0
        var d = Math.ceil(u * c)
        e.moveRaf = p.a(function () {
          e$props$onScroll(d)
        })
      }
    }
    e.onMouseUp = function () {
      var e$props$onStopMove = e.props.onStopMove
      e.setState({
        dragging: false
      })
      e$props$onStopMove()
      e.removeEvents()
    }
    e.getSpinHeight = function () {
      var e$props = e.props
      var e$props$height = e$props.height
      var r = e$props$height / e$props.count * 10
      r = Math.max(r, 20)
      r = Math.min(r, e$props$height / 2)
      return Math.floor(r)
    }
    e.getEnableScrollRange = function () {
      var e$props = e.props
      return e$props.scrollHeight - e$props.height || 0
    }
    e.getEnableHeightRange = function () {
      return e.props.height - e.getSpinHeight() || 0
    }
    e.getTop = function () {
      var e$props$scrollTop = e.props.scrollTop
      var n = e.getEnableScrollRange()
      var r = e.getEnableHeightRange()
      return 0 === e$props$scrollTop || 0 === n ? 0 : e$props$scrollTop / n * r
    }
    e.showScroll = function () {
      var e$props = e.props
      var e$props$height = e$props.height
      return e$props.scrollHeight > e$props$height
    }
    return e
  }
  t = s
  if (n = [{
    key: "componentDidMount",
    value: function () {
      this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart)
      this.thumbRef.current.addEventListener("touchstart", this.onMouseDown)
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      if (e.scrollTop !== this.props.scrollTop) {
        this.delayHidden()
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.removeEvents()
      clearTimeout(this.visibleTimeout)
    }
  }, {
    key: "render",
    value: function () {
      var this$state = this.state
      var this$state$dragging = this$state.dragging
      var this$state$visible = this$state.visible
      var this$props$prefixCls = this.props.prefixCls
      var a = this.getSpinHeight()
      var s = this.getTop()
      var c = this.showScroll()
      var l = c && this$state$visible
      return React.createElement("div", {
        ref: this.scrollbarRef,
        className: i()("".concat(this$props$prefixCls, "-scrollbar"), h({}, "".concat(this$props$prefixCls, "-scrollbar-show"), c)),
        style: {
          width: 8,
          top: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: l ? null : "none"
        },
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, React.createElement("div", {
        ref: this.thumbRef,
        className: i()("".concat(this$props$prefixCls, "-scrollbar-thumb"), h({}, "".concat(this$props$prefixCls, "-scrollbar-thumb-moving"), this$state$dragging)),
        style: {
          width: "100%",
          height: a,
          top: s,
          left: 0,
          position: "absolute",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: 99,
          cursor: "pointer",
          userSelect: "none"
        },
        onMouseDown: this.onMouseDown
      }))
    }
  }]) {
    g(t.prototype, n)
  }
  if (o) {
    g(t, o)
  }
  return s
}(React.Component)
function w(e) {
  var e$children = e.children
  var e$setRef = e.setRef
  var o = React.useCallback(function (e) {
    e$setRef(e)
  }, [])
  return React.cloneElement(e$children, {
    ref: o
  })
}
import C = require("./478");
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
  if (n = [{
    key: "set",
    value: function (e, t) {
      this.maps[e] = t
    }
  }, {
    key: "get",
    value: function (e) {
      return this.maps[e]
    }
  }]) {
    T(t.prototype, n)
  }
  if (r) {
    T(t, r)
  }
  return e
}()
function I(e, t) {
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
      return A(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e)
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return A(e, t)
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
function A(e, t) {
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
      var e$length = e.length
      var t$length = t.length
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
function U(e, t) {
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
      return W(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e)
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return W(e, t)
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
function W(e, t) {
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
  var e$prefixCls = e.prefixCls
  var o = undefined === e$prefixCls ? "rc-virtual-list" : e$prefixCls
  var e$className = e.className
  var e$height = e.height
  var e$itemHeight = e.itemHeight
  var e$fullHeight = e.fullHeight
  var u = undefined === e$fullHeight || e$fullHeight
  var e$style = e.style
  var e$data = e.data
  var e$children = e.children
  var e$itemKey = e.itemKey
  var e$virtual = e.virtual
  var e$component = e.component
  var b = undefined === e$component ? "div" : e$component
  var e$onScroll = e.onScroll
  var e$onVisibleChange = e.onVisibleChange
  var T = H(e, L)
  var A = !(false === e$virtual || !e$height || !e$itemHeight)
  var N = A && e$data && e$itemHeight * e$data.length > e$height
  var R = U(React.useState(0), 2)
  var x = R[0]
  var B = R[1]
  var W = U(React.useState(false), 2)
  var Y = W[0]
  var K = W[1]
  var q = i()(o, e$className)
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
  var oe = U(k(X, $), 1)[0]
  re.current = oe
  var ie = U(function (e, t, n) {
    var o = I(React.useState(0), 2)
    var i = o[0]
    var a = o[1]
    var s = React.useRef(new Map())
    var c = React.useRef(new S())
    var l = React.useRef(0)
    function u() {
      l.current += 1
      var l$current = l.current
      Promise.resolve().then(function () {
        if (l$current === l.current) {
          s.current.forEach(function (e, t) {
            if (e && e.offsetParent) {
              var n = C.a(e)
              var n$offsetHeight = n.offsetHeight
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
    return [function (r, o) {
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
    }, u, c.current, i]
  }($, null, null), 4)
  var ae = ie[0]
  var se = ie[1]
  var ce = ie[2]
  var le = ie[3]
  var ue = React.useMemo(function () {
    if (!A) {
      return {
        scrollHeight: undefined,
        start: 0,
        end: X.length - 1,
        offset: undefined
      }
    }
    var /* [auto-meaningful-name] */z$current
    if (!N) {
      return {
        scrollHeight: (null === (z$current = Z.current) || undefined === z$current ? undefined : z$current.offsetHeight) || 0,
        start: 0,
        end: X.length - 1,
        offset: undefined
      }
    }
    for (var t, n, r, o = 0, x$length = X.length, a = 0; a < x$length; a += 1) {
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
  }, [N, A, x, X, le, e$height])
  var ue$scrollHeight = ue.scrollHeight
  var ue$start = ue.start
  var ue$end = ue.end
  var ue$offset = ue.offset
  ne.current.start = ue$start
  ne.current.end = ue$end
  var me = ue$scrollHeight - e$height
  var ge = React.useRef(me)
  ge.current = me
  var _e = x <= 0
  var ve = x >= me
  var be = M(_e, ve)
  var ye = U(function (e, t, n, o) {
    var i = React.useRef(0)
    var a = React.useRef(null)
    var s = React.useRef(null)
    var c = React.useRef(false)
    var l = M(t, n)
    return [function (t) {
      if (e) {
        p.a.cancel(a.current)
        var t$deltaY = t.deltaY
        i.current += t$deltaY
        s.current = t$deltaY
        if (!l(t$deltaY)) {
          if (!D) {
            t.preventDefault()
          }
          a.current = p.a(function () {
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
    }]
  }(A, _e, ve, function (e) {
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
  }(A, Q, function (e, t) {
    return !be(e, t) && (Ee({
      preventDefault: function () {},
      deltaY: e
    }), true)
  })
  React.useLayoutEffect(function () {
    function e(e) {
      if (A) {
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
  }, [A])
  var we = function (e, t, n, o, i, a, s, c) {
    var l = React.useRef()
    return function (r) {
      if (null !== r && undefined !== r) {
        p.a.cancel(l.current)
        if ("number" === typeof r) {
          s(r)
        } else if (r && "object" === j(r)) {
          var u
          var r$align = r.align
          u = "index" in r ? r.index : t.findIndex(function (e) {
            return i(e) === r.key
          })
          var r$offset = r.offset
          var h = undefined === r$offset ? 0 : r$offset
          !function r(c, f) {
            if (!(c < 0) && e.current) {
              var e$current$clientHeight = e.current.clientHeight
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
                    var e$current$scrollTop = e.current.scrollTop
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
              l.current = p.a(function () {
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
    var /* [auto-meaningful-name] */j$current
    if (!(null === (j$current = J.current) || undefined === j$current)) {
      j$current.delayHidden()
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
    var a$getKey = a.getKey
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
    if (A) {
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
      var e$currentTarget$scrollTop = e.currentTarget.scrollTop
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
  }, Ce)), A && React.createElement(O, {
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
export { q as a }
export default q
