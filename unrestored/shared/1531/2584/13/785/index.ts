/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：785
 */

"use strict"

export { io as a }
import React = require("react");
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
}(React)
import o = require("./104/index");
var a = function __importDefault(module) {
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
var s = function (e, t, n, r, i) {
  var i$clientWidth = i.clientWidth
  var i$clientHeight = i.clientHeight
  var s = "number" === typeof e.pageX ? e.pageX : e.touches[0].pageX
  var c = "number" === typeof e.pageY ? e.pageY : e.touches[0].pageY
  var u = s - (i.getBoundingClientRect().left + window.pageXOffset)
  var l = c - (i.getBoundingClientRect().top + window.pageYOffset)
  if ("vertical" === n) {
    var f = undefined
    f = l < 0 ? 0 : l > i$clientHeight ? 1 : Math.round(100 * l / i$clientHeight) / 100
    if (t.a !== f) {
      return {
        h: t.h,
        s: t.s,
        l: t.l,
        a: f,
        source: "rgb"
      }
    }
  } else {
    var d = undefined
    if (r !== (d = u < 0 ? 0 : u > i$clientWidth ? 1 : Math.round(100 * u / i$clientWidth) / 100)) {
      return {
        h: t.h,
        s: t.s,
        l: t.l,
        a: d,
        source: "rgb"
      }
    }
  }
  return null
}
var c = {}
var u = function (e, t, n, r) {
  var i = e + "-" + t + "-" + n + (r ? "-server" : "")
  if (c[i]) {
    return c[i]
  }
  var o = function (e, t, n, r) {
    if ("undefined" === typeof document && !r) {
      return null
    }
    var i = r ? new r() : document.createElement("canvas")
    i.width = 2 * n
    i.height = 2 * n
    var o = i.getContext("2d")
    return o ? (o.fillStyle = e, o.fillRect(0, 0, i.width, i.height), o.fillStyle = t, o.fillRect(0, 0, n, n), o.translate(n, n), o.fillRect(0, 0, n, n), i.toDataURL()) : null
  }(e, t, n, r)
  c[i] = o
  return o
}
var l = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var f = function (e) {
  var e$white = e.white
  var e$grey = e.grey
  var e$size = e.size
  var e$renderers = e.renderers
  var e$borderRadius = e.borderRadius
  var e$boxShadow = e.boxShadow
  var e$children = e.children
  var h = a()({
    default: {
      grid: {
        borderRadius: e$borderRadius,
        boxShadow: e$boxShadow,
        absolute: "0px 0px 0px 0px",
        background: "url(" + u(e$white, e$grey, e$size, e$renderers.canvas) + ") center left"
      }
    }
  })
  return React.isValidElement(e$children) ? i.a.cloneElement(e$children, l({}, e$children.props, {
    style: l({}, e$children.props.style, h.grid)
  })) : i.a.createElement("div", {
    style: h.grid
  })
}
f.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
}
var d = f
var h = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var p = function () {
  function e(e, t) {
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
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
function _(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
function A(e, t) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return !t || "object" !== typeof t && "function" !== typeof t ? e : t
}
var g = function (e) {
  function t() {
    var e
    var n
    var r
    _(this, t)
    for (var arguments$length = arguments.length, o = Array(arguments$length), a = 0; a < arguments$length; a++) {
      o[a] = arguments[a]
    }
    n = r = A(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o)))
    r.handleChange = function (e) {
      var t = s(e, r.props.hsl, r.props.direction, r.props.a, r.container)
      if (t && "function" === typeof r.props.onChange) {
        r.props.onChange(t, e)
      }
    }
    r.handleMouseDown = function (e) {
      r.handleChange(e)
      window.addEventListener("mousemove", r.handleChange)
      window.addEventListener("mouseup", r.handleMouseUp)
    }
    r.handleMouseUp = function () {
      r.unbindEventListeners()
    }
    r.unbindEventListeners = function () {
      window.removeEventListener("mousemove", r.handleChange)
      window.removeEventListener("mouseup", r.handleMouseUp)
    }
    return A(r, n)
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t)
      } else {
        e.__proto__ = t
      }
    }
  })(t, e)
  p(t, [{
    key: "componentWillUnmount",
    value: function () {
      this.unbindEventListeners()
    }
  }, {
    key: "render",
    value: function () {
      var e = this
      var this$props$rgb = this.props.rgb
      var n = a()({
        default: {
          alpha: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: "0px 0px 0px 0px",
            overflow: "hidden",
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: "0px 0px 0px 0px",
            background: "linear-gradient(to right, rgba(" + this$props$rgb.r + "," + this$props$rgb.g + "," + this$props$rgb.b + ", 0) 0%,\n           rgba(" + this$props$rgb.r + "," + this$props$rgb.g + "," + this$props$rgb.b + ", 1) 100%)",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: "relative",
            height: "100%",
            margin: "0 3px"
          },
          pointer: {
            position: "absolute",
            left: 100 * this$props$rgb.a + "%"
          },
          slider: {
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            marginTop: "1px",
            transform: "translateX(-2px)"
          }
        },
        vertical: {
          gradient: {
            background: "linear-gradient(to bottom, rgba(" + this$props$rgb.r + "," + this$props$rgb.g + "," + this$props$rgb.b + ", 0) 0%,\n           rgba(" + this$props$rgb.r + "," + this$props$rgb.g + "," + this$props$rgb.b + ", 1) 100%)"
          },
          pointer: {
            left: 0,
            top: 100 * this$props$rgb.a + "%"
          }
        },
        overwrite: h({}, this.props.style)
      }, {
        vertical: "vertical" === this.props.direction,
        overwrite: true
      })
      return i.a.createElement("div", {
        style: n.alpha
      }, i.a.createElement("div", {
        style: n.checkboard
      }, i.a.createElement(d, {
        renderers: this.props.renderers
      })), i.a.createElement("div", {
        style: n.gradient
      }), i.a.createElement("div", {
        style: n.container,
        ref: function (t) {
          return e.container = t
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, i.a.createElement("div", {
        style: n.pointer
      }, this.props.pointer ? i.a.createElement(this.props.pointer, this.props) : i.a.createElement("div", {
        style: n.slider
      }))))
    }
  }])
  return t
}(React.PureComponent || React.Component)
var v = function () {
  function e(e, t) {
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
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
var m = [38, 40]
var y = 1
var b = function (e) {
  function t(e) {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }(this, t)
    var n = function (e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
    n.handleBlur = function () {
      if (n.state.blurValue) {
        n.setState({
          value: n.state.blurValue,
          blurValue: null
        })
      }
    }
    n.handleChange = function (e) {
      n.setUpdatedValue(e.target.value, e)
    }
    n.handleKeyDown = function (e) {
      var /* [auto-meaningful-name] */e$keyCode
      var r = function (e) {
        return Number(String(e).replace(/%/g, ""))
      }(e.target.value)
      if (!isNaN(r) && (e$keyCode = e.keyCode, m.indexOf(e$keyCode) > -1)) {
        var i = n.getArrowOffset()
        var o = 38 === e.keyCode ? r + i : r - i
        n.setUpdatedValue(o, e)
      }
    }
    n.handleDrag = function (e) {
      if (n.props.dragLabel) {
        var t = Math.round(n.props.value + e.movementX)
        if (t >= 0 && t <= n.props.dragMax && n.props.onChange) {
          n.props.onChange(n.getValueObjectWithLabel(t), e)
        }
      }
    }
    n.handleMouseDown = function (e) {
      if (n.props.dragLabel) {
        e.preventDefault()
        n.handleDrag(e)
        window.addEventListener("mousemove", n.handleDrag)
        window.addEventListener("mouseup", n.handleMouseUp)
      }
    }
    n.handleMouseUp = function () {
      n.unbindEventListeners()
    }
    n.unbindEventListeners = function () {
      window.removeEventListener("mousemove", n.handleDrag)
      window.removeEventListener("mouseup", n.handleMouseUp)
    }
    n.state = {
      value: String(e.value).toUpperCase(),
      blurValue: String(e.value).toUpperCase()
    }
    n.inputId = "rc-editable-input-" + y++
    return n
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t)
      } else {
        e.__proto__ = t
      }
    }
  })(t, e)
  v(t, [{
    key: "componentDidUpdate",
    value: function (e, t) {
      if (!(this.props.value === this.state.value || e.value === this.props.value && t.value === this.state.value)) {
        if (this.input === document.activeElement) {
          this.setState({
            blurValue: String(this.props.value).toUpperCase()
          })
        } else {
          this.setState({
            value: String(this.props.value).toUpperCase(),
            blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
          })
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.unbindEventListeners()
    }
  }, {
    key: "getValueObjectWithLabel",
    value: function (e) {
      return function (e, t, n) {
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
      }({}, this.props.label, e)
    }
  }, {
    key: "getArrowOffset",
    value: function () {
      return this.props.arrowOffset || 1
    }
  }, {
    key: "setUpdatedValue",
    value: function (e, t) {
      var n = this.props.label ? this.getValueObjectWithLabel(e) : e
      if (this.props.onChange) {
        this.props.onChange(n, t)
      }
      this.setState({
        value: e
      })
    }
  }, {
    key: "render",
    value: function () {
      var e = this
      var t = a()({
        default: {
          wrap: {
            position: "relative"
          }
        },
        "user-override": {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        "dragLabel-true": {
          label: {
            cursor: "ew-resize"
          }
        }
      }, {
        "user-override": true
      }, this.props)
      return i.a.createElement("div", {
        style: t.wrap
      }, i.a.createElement("input", {
        id: this.inputId,
        style: t.input,
        ref: function (t) {
          return e.input = t
        },
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        placeholder: this.props.placeholder,
        spellCheck: "false"
      }), this.props.label && !this.props.hideLabel ? i.a.createElement("label", {
        htmlFor: this.inputId,
        style: t.label,
        onMouseDown: this.handleMouseDown
      }, this.props.label) : null)
    }
  }])
  return t
}(React.PureComponent || React.Component)
var w = function (e, t, n, r) {
  var r$clientWidth = r.clientWidth
  var r$clientHeight = r.clientHeight
  var a = "number" === typeof e.pageX ? e.pageX : e.touches[0].pageX
  var s = "number" === typeof e.pageY ? e.pageY : e.touches[0].pageY
  var c = a - (r.getBoundingClientRect().left + window.pageXOffset)
  var u = s - (r.getBoundingClientRect().top + window.pageYOffset)
  if ("vertical" === t) {
    var l = undefined
    if (u < 0) {
      l = 359
    } else if (u > r$clientHeight) {
      l = 0
    } else {
      l = 360 * (-100 * u / r$clientHeight + 100) / 100
    }
    if (n.h !== l) {
      return {
        h: l,
        s: n.s,
        l: n.l,
        a: n.a,
        source: "hsl"
      }
    }
  } else {
    var f = undefined
    if (c < 0) {
      f = 0
    } else if (c > r$clientWidth) {
      f = 359
    } else {
      f = 360 * (100 * c / r$clientWidth) / 100
    }
    if (n.h !== f) {
      return {
        h: f,
        s: n.s,
        l: n.l,
        a: n.a,
        source: "hsl"
      }
    }
  }
  return null
}
var E = function () {
  function e(e, t) {
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
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
function x(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
function C(e, t) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return !t || "object" !== typeof t && "function" !== typeof t ? e : t
}
var O = function (e) {
  function t() {
    var e
    var n
    var r
    x(this, t)
    for (var arguments$length = arguments.length, o = Array(arguments$length), a = 0; a < arguments$length; a++) {
      o[a] = arguments[a]
    }
    n = r = C(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o)))
    r.handleChange = function (e) {
      var t = w(e, r.props.direction, r.props.hsl, r.container)
      if (t && "function" === typeof r.props.onChange) {
        r.props.onChange(t, e)
      }
    }
    r.handleMouseDown = function (e) {
      r.handleChange(e)
      window.addEventListener("mousemove", r.handleChange)
      window.addEventListener("mouseup", r.handleMouseUp)
    }
    r.handleMouseUp = function () {
      r.unbindEventListeners()
    }
    return C(r, n)
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t)
      } else {
        e.__proto__ = t
      }
    }
  })(t, e)
  E(t, [{
    key: "componentWillUnmount",
    value: function () {
      this.unbindEventListeners()
    }
  }, {
    key: "unbindEventListeners",
    value: function () {
      window.removeEventListener("mousemove", this.handleChange)
      window.removeEventListener("mouseup", this.handleMouseUp)
    }
  }, {
    key: "render",
    value: function () {
      var e = this
      var this$props$direction = this.props.direction
      var n = undefined === this$props$direction ? "horizontal" : this$props$direction
      var r = a()({
        default: {
          hue: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: "0 2px",
            position: "relative",
            height: "100%",
            borderRadius: this.props.radius
          },
          pointer: {
            position: "absolute",
            left: 100 * this.props.hsl.h / 360 + "%"
          },
          slider: {
            marginTop: "1px",
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            transform: "translateX(-2px)"
          }
        },
        vertical: {
          pointer: {
            left: "0px",
            top: -100 * this.props.hsl.h / 360 + 100 + "%"
          }
        }
      }, {
        vertical: "vertical" === n
      })
      return i.a.createElement("div", {
        style: r.hue
      }, i.a.createElement("div", {
        className: "hue-" + n,
        style: r.container,
        ref: function (t) {
          return e.container = t
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, i.a.createElement("style", null, "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "), i.a.createElement("div", {
        style: r.pointer
      }, this.props.pointer ? i.a.createElement(this.props.pointer, this.props) : i.a.createElement("div", {
        style: r.slider
      }))))
    }
  }])
  return t
}(React.PureComponent || React.Component)
import k = require("../../50/index");
var S = function __importDefault(module) {
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
}(k)
var T = function () {
  this.__data__ = []
  this.size = 0
}
var B = function (e, t) {
  return e === t || e !== e && t !== t
}
var D = function (e, t) {
  for (var e$length = e.length; e$length--;) {
    if (B(e[e$length][0], t)) {
      return e$length
    }
  }
  return -1
}
var array$prototype$splice = Array.prototype.splice
var F = function (e) {
  var this$__data__ = this.__data__
  var n = D(this$__data__, e)
  return !(n < 0) && (n == this$__data__.length - 1 ? this$__data__.pop() : array$prototype$splice.call(this$__data__, n, 1), --this.size, true)
}
var R = function (e) {
  var this$__data__ = this.__data__
  var n = D(this$__data__, e)
  return n < 0 ? undefined : this$__data__[n][1]
}
var P = function (e) {
  return D(this.__data__, e) > -1
}
var N = function (e, t) {
  var this$__data__ = this.__data__
  var r = D(this$__data__, e)
  if (r < 0) {
    ++this.size
    this$__data__.push([e, t])
  } else {
    this$__data__[r][1] = t
  }
  return this
}
function M(e) {
  var t = -1
  var n = null == e ? 0 : e.length
  for (this.clear(); ++t < n;) {
    var r = e[t]
    this.set(r[0], r[1])
  }
}
M.prototype.clear = T
M.prototype.delete = F
M.prototype.get = R
M.prototype.has = P
M.prototype.set = N
var j = M
var L = function () {
  this.__data__ = new j()
  this.size = 0
}
var U = function (e) {
  var this$__data__ = this.__data__
  var n = this$__data__.delete(e)
  this.size = this$__data__.size
  return n
}
var H = function (e) {
  return this.__data__.get(e)
}
var V = function (e) {
  return this.__data__.has(e)
}
import G = require("./325");
var g$a$Symbol = G.a.Symbol
var _object$prototype = Object.prototype
var _object$prototype$hasOwnProperty = _object$prototype.hasOwnProperty
var _object$prototype$toString = _object$prototype.toString
var X = g$a$Symbol ? g$a$Symbol.toStringTag : undefined
var Y = function (e) {
  var t = _object$prototype$hasOwnProperty.call(e, X)
  var n = e[X]
  try {
    e[X] = undefined
    var r = true
  } catch (o) {}
  var i = _object$prototype$toString.call(e)
  if (r) {
    if (t) {
      e[X] = n
    } else {
      delete e[X]
    }
  }
  return i
}
var object$prototype$toString = Object.prototype.toString
var $ = function (e) {
  return object$prototype$toString.call(e)
}
var J = g$a$Symbol ? g$a$Symbol.toStringTag : undefined
var Z = function (e) {
  return null == e ? undefined === e ? "[object Undefined]" : "[object Null]" : J && J in Object(e) ? Y(e) : $(e)
}
var ee = function (e) {
  var t = typeof e
  return null != e && ("object" == t || "function" == t)
}
var te = function (e) {
  if (!ee(e)) {
    return false
  }
  var t = Z(e)
  return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
}
var ne = G.a["__core-js_shared__"]
var re = function () {
  var e = /[^.]+$/.exec(ne && ne.keys && ne.keys.IE_PROTO || "")
  return e ? "Symbol(src)_1." + e : ""
}()
var ie = function (e) {
  return !!re && re in e
}
var _function$prototype$toString = Function.prototype.toString
var ae = function (e) {
  if (null != e) {
    try {
      return _function$prototype$toString.call(e)
    } catch (t) {}
    try {
      return e + ""
    } catch (t) {}
  }
  return ""
}
var se = /^\[object .+?Constructor\]$/
var _function$prototype = Function.prototype
var _object$prototype2 = Object.prototype
var _function$prototype$toString2 = _function$prototype.toString
var _object$prototype$hasOwnProperty2 = _object$prototype2.hasOwnProperty
var de = RegExp("^" + _function$prototype$toString2.call(_object$prototype$hasOwnProperty2).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
var he = function (e) {
  return !(!ee(e) || ie(e)) && (te(e) ? de : se).test(ae(e))
}
var pe = function (e, t) {
  return null == e ? undefined : e[t]
}
var _e = function (e, t) {
  var n = pe(e, t)
  return he(n) ? n : undefined
}
var Ae = _e(G.a, "Map")
var ge = _e(Object, "create")
var ve = function () {
  this.__data__ = ge ? ge(null) : {}
  this.size = 0
}
var me = function (e) {
  var t = this.has(e) && delete this.__data__[e]
  this.size -= t ? 1 : 0
  return t
}
var _object$prototype$hasOwnProperty3 = Object.prototype.hasOwnProperty
var be = function (e) {
  var this$__data__ = this.__data__
  if (ge) {
    var n = this$__data__[e]
    return "__lodash_hash_undefined__" === n ? undefined : n
  }
  return _object$prototype$hasOwnProperty3.call(this$__data__, e) ? this$__data__[e] : undefined
}
var _object$prototype$hasOwnProperty4 = Object.prototype.hasOwnProperty
var Ee = function (e) {
  var this$__data__ = this.__data__
  return ge ? undefined !== this$__data__[e] : _object$prototype$hasOwnProperty4.call(this$__data__, e)
}
var xe = function (e, t) {
  var this$__data__ = this.__data__
  this.size += this.has(e) ? 0 : 1
  this$__data__[e] = ge && undefined === t ? "__lodash_hash_undefined__" : t
  return this
}
function Ce(e) {
  var t = -1
  var n = null == e ? 0 : e.length
  for (this.clear(); ++t < n;) {
    var r = e[t]
    this.set(r[0], r[1])
  }
}
Ce.prototype.clear = ve
Ce.prototype.delete = me
Ce.prototype.get = be
Ce.prototype.has = Ee
Ce.prototype.set = xe
var Oe = Ce
var ke = function () {
  this.size = 0
  this.__data__ = {
    hash: new Oe(),
    map: new (Ae || j)(),
    string: new Oe()
  }
}
var Se = function (e) {
  var t = typeof e
  return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
}
var Te = function (e, t) {
  var e$__data__ = e.__data__
  return Se(t) ? e$__data__["string" == typeof t ? "string" : "hash"] : e$__data__.map
}
var Be = function (e) {
  var t = Te(this, e).delete(e)
  this.size -= t ? 1 : 0
  return t
}
var De = function (e) {
  return Te(this, e).get(e)
}
var Ie = function (e) {
  return Te(this, e).has(e)
}
var Fe = function (e, t) {
  var n = Te(this, e)
  var n$size = n.size
  n.set(e, t)
  this.size += n.size == n$size ? 0 : 1
  return this
}
function Re(e) {
  var t = -1
  var n = null == e ? 0 : e.length
  for (this.clear(); ++t < n;) {
    var r = e[t]
    this.set(r[0], r[1])
  }
}
Re.prototype.clear = ke
Re.prototype.delete = Be
Re.prototype.get = De
Re.prototype.has = Ie
Re.prototype.set = Fe
var Pe = Re
var Ne = function (e, t) {
  var this$__data__ = this.__data__
  if (this$__data__ instanceof j) {
    var this$__data__$__data__ = this$__data__.__data__
    if (!Ae || this$__data__$__data__.length < 199) {
      this$__data__$__data__.push([e, t])
      this.size = ++this$__data__.size
      return this
    }
    this$__data__ = this.__data__ = new Pe(this$__data__$__data__)
  }
  this$__data__.set(e, t)
  this.size = this$__data__.size
  return this
}
function Me(e) {
  var t = this.__data__ = new j(e)
  this.size = t.size
}
Me.prototype.clear = L
Me.prototype.delete = U
Me.prototype.get = H
Me.prototype.has = V
Me.prototype.set = Ne
var je = Me
var Le = function () {
  try {
    var e = _e(Object, "defineProperty")
    e({}, "", {})
    return e
  } catch (t) {}
}()
var Ue = function (e, t, n) {
  if ("__proto__" == t && Le) {
    Le(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    })
  } else {
    e[t] = n
  }
}
var He = function (e, t, n) {
  if (undefined !== n && !B(e[t], n) || undefined === n && !(t in e)) {
    Ue(e, t, n)
  }
}
var Ve = function (e) {
  return function (t, n, r) {
    for (var i = -1, o = Object(t), a = r(t), a$length = a.length; a$length--;) {
      var c = a[e ? a$length : ++i]
      if (false === n(o[c], c, o)) {
        break
      }
    }
    return t
  }
}()
import Ge = require("./1464");
var g$a$Uint8Array = G.a.Uint8Array
var Qe = function (e) {
  var t = new e.constructor(e.byteLength)
  new g$a$Uint8Array(t).set(new g$a$Uint8Array(e))
  return t
}
var We = function (e, t) {
  var n = t ? Qe(e.buffer) : e.buffer
  return new e.constructor(n, e.byteOffset, e.length)
}
var Ke = function (e, t) {
  var n = -1
  var e$length = e.length
  for (t || (t = Array(e$length)); ++n < e$length;) {
    t[n] = e[n]
  }
  return t
}
var object$create = Object.create
var Ye = function () {
  function e() {}
  return function (t) {
    if (!ee(t)) {
      return {}
    }
    if (object$create) {
      return object$create(t)
    }
    e.prototype = t
    var n = new e()
    e.prototype = undefined
    return n
  }
}()
var qe = function (e, t) {
  return function (n) {
    return e(t(n))
  }
}
var $e = qe(Object.getPrototypeOf, Object)
var _object$prototype3 = Object.prototype
var Ze = function (e) {
  var t = e && e.constructor
  return e === ("function" == typeof t && t.prototype || _object$prototype3)
}
var et = function (e) {
  return "function" != typeof e.constructor || Ze(e) ? {} : Ye($e(e))
}
var tt = function (e) {
  return null != e && "object" == typeof e
}
var nt = function (e) {
  return tt(e) && "[object Arguments]" == Z(e)
}
var _object$prototype4 = Object.prototype
var _object$prototype$hasOwnProperty5 = _object$prototype4.hasOwnProperty
var _object$prototype$propertyIsEnumerable = _object$prototype4.propertyIsEnumerable
var at = nt(function () {
  return arguments
}()) ? nt : function (e) {
  return tt(e) && _object$prototype$hasOwnProperty5.call(e, "callee") && !_object$prototype$propertyIsEnumerable.call(e, "callee")
}
var array$isArray = Array.isArray
var ct = function (e) {
  return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}
var ut = function (e) {
  return null != e && ct(e.length) && !te(e)
}
var lt = function (e) {
  return tt(e) && ut(e)
}
import ft = require("./731/index");
var function$prototype = Function.prototype
var object$prototype = Object.prototype
var function$prototype$toString = function$prototype.toString
var _object$prototype$hasOwnProperty6 = object$prototype.hasOwnProperty
var At = function$prototype$toString.call(Object)
var gt = function (e) {
  if (!tt(e) || "[object Object]" != Z(e)) {
    return false
  }
  var t = $e(e)
  if (null === t) {
    return true
  }
  var n = _object$prototype$hasOwnProperty6.call(t, "constructor") && t.constructor
  return "function" == typeof n && n instanceof n && function$prototype$toString.call(n) == At
}
var vt = {}
vt["[object Float32Array]"] = vt["[object Float64Array]"] = vt["[object Int8Array]"] = vt["[object Int16Array]"] = vt["[object Int32Array]"] = vt["[object Uint8Array]"] = vt["[object Uint8ClampedArray]"] = vt["[object Uint16Array]"] = vt["[object Uint32Array]"] = true
vt["[object Arguments]"] = vt["[object Array]"] = vt["[object ArrayBuffer]"] = vt["[object Boolean]"] = vt["[object DataView]"] = vt["[object Date]"] = vt["[object Error]"] = vt["[object Function]"] = vt["[object Map]"] = vt["[object Number]"] = vt["[object Object]"] = vt["[object RegExp]"] = vt["[object Set]"] = vt["[object String]"] = vt["[object WeakMap]"] = false
var mt = function (e) {
  return tt(e) && ct(e.length) && !!vt[Z(e)]
}
var yt = function (e) {
  return function (t) {
    return e(t)
  }
}
import bt = require("./1173/index");
var wt = bt.a && bt.a.isTypedArray
var Et = wt ? yt(wt) : mt
var xt = function (e, t) {
  if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) {
    return e[t]
  }
}
var _object$prototype$hasOwnProperty7 = Object.prototype.hasOwnProperty
var Ot = function (e, t, n) {
  var r = e[t]
  if (!(_object$prototype$hasOwnProperty7.call(e, t) && B(r, n) && (undefined !== n || t in e))) {
    Ue(e, t, n)
  }
}
var kt = function (e, t, n, r) {
  var i = !n
  if (!n) {
    n = {}
  }
  for (var o = -1, t$length = t.length; ++o < t$length;) {
    var s = t[o]
    var c = r ? r(n[s], e[s], s, n, e) : undefined
    if (undefined === c) {
      c = e[s]
    }
    if (i) {
      Ue(n, s, c)
    } else {
      Ot(n, s, c)
    }
  }
  return n
}
var St = function (e, t) {
  for (var n = -1, r = Array(e); ++n < e;) {
    r[n] = t(n)
  }
  return r
}
var Tt = /^(?:0|[1-9]\d*)$/
var Bt = function (e, t) {
  var n = typeof e
  return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && Tt.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var _object$prototype$hasOwnProperty8 = Object.prototype.hasOwnProperty
var It = function (e, t) {
  var n = array$isArray(e)
  var r = !n && at(e)
  var i = !n && !r && ft.a(e)
  var o = !n && !r && !i && Et(e)
  var a = n || r || i || o
  var s = a ? St(e.length, String) : []
  var s$length = s.length
  for (var u in e) if (!(!t && !_object$prototype$hasOwnProperty8.call(e, u) || a && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Bt(u, s$length)))) {
    s.push(u)
  }
  return s
}
var Ft = function (e) {
  var t = []
  if (null != e) {
    for (var n in Object(e)) t.push(n)
  }
  return t
}
var _object$prototype$hasOwnProperty9 = Object.prototype.hasOwnProperty
var Pt = function (e) {
  if (!ee(e)) {
    return Ft(e)
  }
  var t = Ze(e)
  var n = []
  for (var r in e) if ("constructor" != r || !t && _object$prototype$hasOwnProperty9.call(e, r)) {
    n.push(r)
  }
  return n
}
var Nt = function (e) {
  return ut(e) ? It(e, true) : Pt(e)
}
var Mt = function (e) {
  return kt(e, Nt(e))
}
var jt = function (e, t, n, r, i, o, a) {
  var s = xt(e, n)
  var c = xt(t, n)
  var u = a.get(c)
  if (u) {
    He(e, n, u)
  } else {
    var l = o ? o(s, c, n + "", e, t, a) : undefined
    var f = undefined === l
    if (f) {
      var d = array$isArray(c)
      var h = !d && ft.a(c)
      var p = !d && !h && Et(c)
      l = c
      if (d || h || p) {
        if (array$isArray(s)) {
          l = s
        } else {
          if (lt(s)) {
            l = Ke(s)
          } else {
            if (h) {
              f = false
              l = Ge.a(c, true)
            } else {
              if (p) {
                f = false
                l = We(c, true)
              } else {
                l = []
              }
            }
          }
        }
      } else {
        if (gt(c) || at(c)) {
          l = s
          if (at(s)) {
            l = Mt(s)
          } else {
            if (!(ee(s) && !te(s))) {
              l = et(c)
            }
          }
        } else {
          f = false
        }
      }
    }
    if (f) {
      a.set(c, l)
      i(l, c, r, o, a)
      a.delete(c)
    }
    He(e, n, l)
  }
}
var Lt = function e(t, n, r, i, o) {
  if (t !== n) {
    Ve(n, function (a, s) {
      if (!o) {
        o = new je()
      }
      if (ee(a)) {
        jt(t, n, s, r, e, i, o)
      } else {
        var c = i ? i(xt(t, s), a, s + "", t, n, o) : undefined
        if (undefined === c) {
          c = a
        }
        He(t, s, c)
      }
    }, Nt)
  }
}
var Ut = function (e) {
  return e
}
var Ht = function (e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t)
    case 1:
      return e.call(t, n[0])
    case 2:
      return e.call(t, n[0], n[1])
    case 3:
      return e.call(t, n[0], n[1], n[2])
  }
  return e.apply(t, n)
}
var _math$max = Math.max
var Gt = function (e, t, n) {
  t = _math$max(undefined === t ? e.length - 1 : t, 0)
  return function () {
    for (var r = arguments, i = -1, o = _math$max(r.length - t, 0), a = Array(o); ++i < o;) {
      a[i] = r[t + i]
    }
    i = -1
    for (var s = Array(t + 1); ++i < t;) {
      s[i] = r[i]
    }
    s[t] = n(a)
    return Ht(e, this, s)
  }
}
var zt = function (e) {
  return function () {
    return e
  }
}
var Qt = Le ? function (e, t) {
  return Le(e, "toString", {
    configurable: true,
    enumerable: false,
    value: zt(t),
    writable: true
  })
} : Ut
var date$now = Date.now
var Kt = function (e) {
  var t = 0
  var n = 0
  return function () {
    var r = date$now()
    var i = 16 - (r - n)
    n = r
    if (i > 0) {
      if (++t >= 800) {
        return arguments[0]
      }
    } else {
      t = 0
    }
    return e.apply(undefined, arguments)
  }
}(Qt)
var Xt = function (e, t) {
  return Kt(Gt(e, t, Ut), e + "")
}
var Yt = function (e, t, n) {
  if (!ee(n)) {
    return false
  }
  var r = typeof t
  return !!("number" == r ? ut(n) && Bt(t, n.length) : "string" == r && t in n) && B(n[t], e)
}
var qt = function (e) {
  return Xt(function (t, n) {
    var r = -1
    var n$length = n.length
    var o = n$length > 1 ? n[n$length - 1] : undefined
    var a = n$length > 2 ? n[2] : undefined
    for (o = e.length > 3 && "function" == typeof o ? (n$length--, o) : undefined, a && Yt(n[0], n[1], a) && (o = n$length < 3 ? undefined : o, n$length = 1), t = Object(t); ++r < n$length;) {
      var s = n[r]
      if (s) {
        e(t, s, r, o)
      }
    }
    return t
  })
}(function (e, t, n) {
  Lt(e, t, n)
})
var $t = function (e) {
  var e$zDepth = e.zDepth
  var e$radius = e.radius
  var e$background = e.background
  var e$children = e.children
  var e$styles = e.styles
  var c = undefined === e$styles ? {} : e$styles
  var u = a()(qt({
    default: {
      wrap: {
        position: "relative",
        display: "inline-block"
      },
      content: {
        position: "relative"
      },
      bg: {
        absolute: "0px 0px 0px 0px",
        boxShadow: "0 " + e$zDepth + "px " + 4 * e$zDepth + "px rgba(0,0,0,.24)",
        borderRadius: e$radius,
        background: e$background
      }
    },
    "zDepth-0": {
      bg: {
        boxShadow: "none"
      }
    },
    "zDepth-1": {
      bg: {
        boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
      }
    },
    "zDepth-2": {
      bg: {
        boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
      }
    },
    "zDepth-3": {
      bg: {
        boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
      }
    },
    "zDepth-4": {
      bg: {
        boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
      }
    },
    "zDepth-5": {
      bg: {
        boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
      }
    },
    square: {
      bg: {
        borderRadius: "0"
      }
    },
    circle: {
      bg: {
        borderRadius: "50%"
      }
    }
  }, c), {
    "zDepth-1": 1 === e$zDepth
  })
  return i.a.createElement("div", {
    style: u.wrap
  }, i.a.createElement("div", {
    style: u.bg
  }), i.a.createElement("div", {
    style: u.content
  }, e$children))
}
$t.propTypes = {
  background: S.a.string,
  zDepth: S.a.oneOf([0, 1, 2, 3, 4, 5]),
  radius: S.a.number,
  styles: S.a.object
}
$t.defaultProps = {
  background: "#fff",
  zDepth: 1,
  radius: 2,
  styles: {}
}
var Jt = $t
var Zt = function () {
  return G.a.Date.now()
}
var en = /\s/
var tn = function (e) {
  for (var e$length = e.length; e$length-- && en.test(e.charAt(e$length));) {
    ;
  }
  return e$length
}
var nn = /^\s+/
var rn = function (e) {
  return e ? e.slice(0, tn(e) + 1).replace(nn, "") : e
}
var on = function (e) {
  return "symbol" == typeof e || tt(e) && "[object Symbol]" == Z(e)
}
var an = /^[-+]0x[0-9a-f]+$/i
var sn = /^0b[01]+$/i
var cn = /^0o[0-7]+$/i
var un = parseInt
var ln = function (e) {
  if ("number" == typeof e) {
    return e
  }
  if (on(e)) {
    return NaN
  }
  if (ee(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e
    e = ee(t) ? t + "" : t
  }
  if ("string" != typeof e) {
    return 0 === e ? e : +e
  }
  e = rn(e)
  var n = sn.test(e)
  return n || cn.test(e) ? un(e.slice(2), n ? 2 : 8) : an.test(e) ? NaN : +e
}
var math$max = Math.max
var math$min = Math.min
var hn = function (e, t, n) {
  var r
  var i
  var o
  var a
  var s
  var c
  var u = 0
  var l = false
  var f = false
  var d = true
  if ("function" != typeof e) {
    throw new TypeError("Expected a function")
  }
  function h(t) {
    var n = r
    var o = i
    r = i = undefined
    u = t
    return a = e.apply(o, n)
  }
  function p(e) {
    u = e
    s = setTimeout(A, t)
    return l ? h(e) : a
  }
  function _(e) {
    var n = e - c
    return undefined === c || n >= t || n < 0 || f && e - u >= o
  }
  function A() {
    var e = Zt()
    if (_(e)) {
      return g(e)
    }
    s = setTimeout(A, function (e) {
      var n = t - (e - c)
      return f ? math$min(n, o - (e - u)) : n
    }(e))
  }
  function g(e) {
    s = undefined
    return d && r ? h(e) : (r = i = undefined, a)
  }
  function v() {
    var e = Zt()
    var n = _(e)
    r = arguments
    i = this
    c = e
    if (n) {
      if (undefined === s) {
        return p(c)
      }
      if (f) {
        clearTimeout(s)
        s = setTimeout(A, t)
        return h(c)
      }
    }
    if (undefined === s) {
      s = setTimeout(A, t)
    }
    return a
  }
  t = ln(t) || 0
  if (ee(n)) {
    l = !!n.leading
    o = (f = "maxWait" in n) ? math$max(ln(n.maxWait) || 0, t) : o
    d = "trailing" in n ? !!n.trailing : d
  }
  v.cancel = function () {
    if (undefined !== s) {
      clearTimeout(s)
    }
    u = 0
    r = c = i = s = undefined
  }
  v.flush = function () {
    return undefined === s ? a : g(Zt())
  }
  return v
}
var pn = function (e, t, n) {
  var r = true
  var i = true
  if ("function" != typeof e) {
    throw new TypeError("Expected a function")
  }
  if (ee(n)) {
    r = "leading" in n ? !!n.leading : r
    i = "trailing" in n ? !!n.trailing : i
  }
  return hn(e, t, {
    leading: r,
    maxWait: t,
    trailing: i
  })
}
var _n = function () {
  function e(e, t) {
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
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
var An = function (e) {
  function t(e) {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }(this, t)
    var n = function (e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
    n.handleChange = function (e) {
      if ("function" === typeof n.props.onChange) {
        n.throttle(n.props.onChange, function (e, t, n) {
          var r = n.getBoundingClientRect()
          var r$width = r.width
          var r$height = r.height
          var a = "number" === typeof e.pageX ? e.pageX : e.touches[0].pageX
          var s = "number" === typeof e.pageY ? e.pageY : e.touches[0].pageY
          var c = a - (n.getBoundingClientRect().left + window.pageXOffset)
          var u = s - (n.getBoundingClientRect().top + window.pageYOffset)
          if (c < 0) {
            c = 0
          } else {
            if (c > r$width) {
              c = r$width
            }
          }
          if (u < 0) {
            u = 0
          } else {
            if (u > r$height) {
              u = r$height
            }
          }
          var l = c / r$width
          var f = 1 - u / r$height
          return {
            h: t.h,
            s: l,
            v: f,
            a: t.a,
            source: "hsv"
          }
        }(e, n.props.hsl, n.container), e)
      }
    }
    n.handleMouseDown = function (e) {
      n.handleChange(e)
      var t = n.getContainerRenderWindow()
      t.addEventListener("mousemove", n.handleChange)
      t.addEventListener("mouseup", n.handleMouseUp)
    }
    n.handleMouseUp = function () {
      n.unbindEventListeners()
    }
    n.throttle = pn(function (e, t, n) {
      e(t, n)
    }, 50)
    return n
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t)
      } else {
        e.__proto__ = t
      }
    }
  })(t, e)
  _n(t, [{
    key: "componentWillUnmount",
    value: function () {
      this.throttle.cancel()
      this.unbindEventListeners()
    }
  }, {
    key: "getContainerRenderWindow",
    value: function () {
      for (var this$container = this.container, t = window; !t.document.contains(this$container) && t.parent !== t;) {
        t = t.parent
      }
      return t
    }
  }, {
    key: "unbindEventListeners",
    value: function () {
      var e = this.getContainerRenderWindow()
      e.removeEventListener("mousemove", this.handleChange)
      e.removeEventListener("mouseup", this.handleMouseUp)
    }
  }, {
    key: "render",
    value: function () {
      var e = this
      var t = this.props.style || {}
      var t$color = t.color
      var t$white = t.white
      var t$black = t.black
      var t$pointer = t.pointer
      var t$circle = t.circle
      var u = a()({
        default: {
          color: {
            absolute: "0px 0px 0px 0px",
            background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
            borderRadius: this.props.radius
          },
          white: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          black: {
            absolute: "0px 0px 0px 0px",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: "absolute",
            top: -100 * this.props.hsv.v + 100 + "%",
            left: 100 * this.props.hsv.s + "%",
            cursor: "default"
          },
          circle: {
            width: "4px",
            height: "4px",
            boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
            borderRadius: "50%",
            cursor: "hand",
            transform: "translate(-2px, -2px)"
          }
        },
        custom: {
          color: t$color,
          white: t$white,
          black: t$black,
          pointer: t$pointer,
          circle: t$circle
        }
      }, {
        custom: !!this.props.style
      })
      return i.a.createElement("div", {
        style: u.color,
        ref: function (t) {
          return e.container = t
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, i.a.createElement("style", null, "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "), i.a.createElement("div", {
        style: u.white,
        className: "saturation-white"
      }, i.a.createElement("div", {
        style: u.black,
        className: "saturation-black"
      }), i.a.createElement("div", {
        style: u.pointer
      }, this.props.pointer ? i.a.createElement(this.props.pointer, this.props) : i.a.createElement("div", {
        style: u.circle
      }))))
    }
  }])
  return t
}(React.PureComponent || React.Component)
var gn = function (e, t) {
  for (var n = -1, r = null == e ? 0 : e.length; ++n < r && false !== t(e[n], n, e);) {
    ;
  }
  return e
}
var vn = qe(Object.keys, Object)
var _object$prototype$hasOwnProperty0 = Object.prototype.hasOwnProperty
var yn = function (e) {
  if (!Ze(e)) {
    return vn(e)
  }
  var t = []
  for (var n in Object(e)) if (_object$prototype$hasOwnProperty0.call(e, n) && "constructor" != n) {
    t.push(n)
  }
  return t
}
var bn = function (e) {
  return ut(e) ? It(e) : yn(e)
}
var wn = function (e, t) {
  return function (n, r) {
    if (null == n) {
      return n
    }
    if (!ut(n)) {
      return e(n, r)
    }
    for (var n$length = n.length, o = t ? n$length : -1, a = Object(n); (t ? o-- : ++o < n$length) && false !== r(a[o], o, a);) {
      ;
    }
    return n
  }
}(function (e, t) {
  return e && Ve(e, t, bn)
})
var En = function (e) {
  return "function" == typeof e ? e : Ut
}
var xn = function (e, t) {
  return (array$isArray(e) ? gn : wn)(e, En(t))
}
import Cn = require("../225");
var On = function __importDefault(module) {
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
}(Cn)
var kn = function (e) {
  var t = 0
  var n = 0
  xn(["r", "g", "b", "a", "h", "s", "l", "v"], function (r) {
    if (e[r] && (t += 1, isNaN(e[r]) || (n += 1), "s" === r || "l" === r)) {
      if (/^\d+%$/.test(e[r])) {
        n += 1
      }
    }
  })
  return t === n && e
}
var Sn = function (e, t) {
  var n = e.hex ? On()(e.hex) : On()(e)
  var r = n.toHsl()
  var i = n.toHsv()
  var o = n.toRgb()
  var a = n.toHex()
  if (0 === r.s) {
    r.h = t || 0
    i.h = t || 0
  }
  return {
    hsl: r,
    hex: "000000" === a && 0 === o.a ? "transparent" : "#" + a,
    rgb: o,
    hsv: i,
    oldHue: e.h || t || r.h,
    source: e.source
  }
}
var Tn = function (e) {
  if ("transparent" === e) {
    return true
  }
  var t = "#" === String(e).charAt(0) ? 1 : 0
  return e.length !== 4 + t && e.length < 7 + t && On()(e).isValid()
}
var Bn = function (e) {
  if (!e) {
    return "#fff"
  }
  var t = Sn(e)
  return "transparent" === t.hex ? "rgba(0,0,0,0.4)" : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128 ? "#000" : "#fff"
}
var Dn = function (e, t) {
  var n = e.replace("°", "")
  return On()(t + " (" + n + ")")._ok
}
var In = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var Fn = function () {
  function e(e, t) {
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
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
var Rn = function (e) {
  var t = function (t) {
    function n(e) {
      !function (e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }(this, n)
      var t = function (e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
      }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this))
      t.handleChange = function (e, n) {
        if (kn(e)) {
          var r = Sn(e, e.h || t.state.oldHue)
          t.setState(r)
          if (t.props.onChangeComplete) {
            t.debounce(t.props.onChangeComplete, r, n)
          }
          if (t.props.onChange) {
            t.props.onChange(r, n)
          }
        }
      }
      t.handleSwatchHover = function (e, n) {
        if (kn(e)) {
          var r = Sn(e, e.h || t.state.oldHue)
          if (t.props.onSwatchHover) {
            t.props.onSwatchHover(r, n)
          }
        }
      }
      t.state = In({}, Sn(e.color, 0))
      t.debounce = hn(function (e, t, n) {
        e(t, n)
      }, 100)
      return t
    }
    (function (e, t) {
      if ("function" !== typeof t && null !== t) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t)
        } else {
          e.__proto__ = t
        }
      }
    })(n, t)
    Fn(n, [{
      key: "render",
      value: function () {
        var t = {}
        if (this.props.onSwatchHover) {
          t.onSwatchHover = this.handleSwatchHover
        }
        return i.a.createElement(e, In({}, this.props, this.state, {
          onChange: this.handleChange
        }, t))
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        return In({}, Sn(e.color, t.oldHue))
      }
    }])
    return n
  }(React.PureComponent || React.Component)
  t.propTypes = In({}, e.propTypes)
  t.defaultProps = In({}, e.defaultProps, {
    color: {
      h: 250,
      s: .5,
      l: .2,
      a: 1
    }
  })
  return t
}
var Pn = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var Nn = function () {
  function e(e, t) {
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
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
function Mn(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
function jn(e, t) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return !t || "object" !== typeof t && "function" !== typeof t ? e : t
}
function Ln(e, t) {
  if ("function" !== typeof t && null !== t) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof t)
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (t) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(e, t)
    } else {
      e.__proto__ = t
    }
  }
}
var Un = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var Hn = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "span"
  return function (n) {
    function r() {
      var e
      var t
      var n
      Mn(this, r)
      for (var arguments$length = arguments.length, o = Array(arguments$length), a = 0; a < arguments$length; a++) {
        o[a] = arguments[a]
      }
      t = n = jn(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(o)))
      n.state = {
        focus: false
      }
      n.handleFocus = function () {
        return n.setState({
          focus: true
        })
      }
      n.handleBlur = function () {
        return n.setState({
          focus: false
        })
      }
      return jn(n, t)
    }
    Ln(r, n)
    Nn(r, [{
      key: "render",
      value: function () {
        return i.a.createElement(t, {
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, i.a.createElement(e, Pn({}, this.props, this.state)))
      }
    }])
    return r
  }(i.a.Component)
}(function (e) {
  var e$color = e.color
  var e$style = e.style
  var e$onClick = e.onClick
  var o = undefined === e$onClick ? function () {} : e$onClick
  var e$onHover = e.onHover
  var e$title = e.title
  var u = undefined === e$title ? e$color : e$title
  var e$children = e.children
  var e$focus = e.focus
  var e$focusStyle = e.focusStyle
  var p = undefined === e$focusStyle ? {} : e$focusStyle
  var _ = "transparent" === e$color
  var A = a()({
    default: {
      swatch: Un({
        background: e$color,
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        outline: "none"
      }, e$style, e$focus ? p : {})
    }
  })
  var g = {}
  if (e$onHover) {
    g.onMouseOver = function (e) {
      return e$onHover(e$color, e)
    }
  }
  return i.a.createElement("div", Un({
    style: A.swatch,
    onClick: function (e) {
      return o(e$color, e)
    },
    title: u,
    tabIndex: 0,
    onKeyDown: function (e) {
      return 13 === e.keyCode && o(e$color, e)
    }
  }, g), e$children, _ && i.a.createElement(d, {
    borderRadius: A.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }))
})
var Vn = function (e) {
  var e$direction = e.direction
  var n = a()({
    default: {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    vertical: {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, {
    vertical: "vertical" === e$direction
  })
  return i.a.createElement("div", {
    style: n.picker
  })
}
var Gn = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var zn = function (e) {
  var e$rgb = e.rgb
  var e$hsl = e.hsl
  var e$width = e.width
  var e$height = e.height
  var e$onChange = e.onChange
  var e$direction = e.direction
  var e$style = e.style
  var e$renderers = e.renderers
  var e$pointer = e.pointer
  var e$className = e.className
  var h = undefined === e$className ? "" : e$className
  var p = a()({
    default: {
      picker: {
        position: "relative",
        width: e$width,
        height: e$height
      },
      alpha: {
        radius: "2px",
        style: e$style
      }
    }
  })
  return i.a.createElement("div", {
    style: p.picker,
    className: "alpha-picker " + h
  }, i.a.createElement(g, Gn({}, p.alpha, {
    rgb: e$rgb,
    hsl: e$hsl,
    pointer: e$pointer,
    renderers: e$renderers,
    onChange: e$onChange,
    direction: e$direction
  })))
}
zn.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: Vn
}
Rn(zn)
var Qn = function (e, t) {
  for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) {
    i[n] = t(e[n], n, e)
  }
  return i
}
var Wn = function (e) {
  this.__data__.set(e, "__lodash_hash_undefined__")
  return this
}
var Kn = function (e) {
  return this.__data__.has(e)
}
function Xn(e) {
  var t = -1
  var n = null == e ? 0 : e.length
  for (this.__data__ = new Pe(); ++t < n;) {
    this.add(e[t])
  }
}
Xn.prototype.add = Xn.prototype.push = Wn
Xn.prototype.has = Kn
var Yn = Xn
var qn = function (e, t) {
  for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) {
    if (t(e[n], n, e)) {
      return true
    }
  }
  return false
}
var $n = function (e, t) {
  return e.has(t)
}
var Jn = function (e, t, n, r, i, o) {
  var a = 1 & n
  var e$length = e.length
  var t$length = t.length
  if (e$length != t$length && !(a && t$length > e$length)) {
    return false
  }
  var u = o.get(e)
  var l = o.get(t)
  if (u && l) {
    return u == t && l == e
  }
  var f = -1
  var d = true
  var h = 2 & n ? new Yn() : undefined
  for (o.set(e, t), o.set(t, e); ++f < e$length;) {
    var p = e[f]
    var _ = t[f]
    if (r) {
      var A = a ? r(_, p, f, t, e, o) : r(p, _, f, e, t, o)
    }
    if (undefined !== A) {
      if (A) {
        continue
      }
      d = false
      break
    }
    if (h) {
      if (!qn(t, function (e, t) {
        if (!$n(h, t) && (p === e || i(p, e, n, r, o))) {
          return h.push(t)
        }
      })) {
        d = false
        break
      }
    } else if (p !== _ && !i(p, _, n, r, o)) {
      d = false
      break
    }
  }
  o.delete(e)
  o.delete(t)
  return d
}
var Zn = function (e) {
  var t = -1
  var n = Array(e.size)
  e.forEach(function (e, r) {
    n[++t] = [r, e]
  })
  return n
}
var er = function (e) {
  var t = -1
  var n = Array(e.size)
  e.forEach(function (e) {
    n[++t] = e
  })
  return n
}
var tr = g$a$Symbol ? g$a$Symbol.prototype : undefined
var nr = tr ? tr.valueOf : undefined
var rr = function (e, t, n, r, i, o, a) {
  switch (n) {
    case "[object DataView]":
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
        return false
      }
      e = e.buffer
      t = t.buffer
    case "[object ArrayBuffer]":
      return !(e.byteLength != t.byteLength || !o(new g$a$Uint8Array(e), new g$a$Uint8Array(t)))
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return B(+e, +t)
    case "[object Error]":
      return e.name == t.name && e.message == t.message
    case "[object RegExp]":
    case "[object String]":
      return e == t + ""
    case "[object Map]":
      var s = Zn
    case "[object Set]":
      var c = 1 & r
      if (s || (s = er), e.size != t.size && !c) {
        return false
      }
      var u = a.get(e)
      if (u) {
        return u == t
      }
      r |= 2
      a.set(e, t)
      var l = Jn(s(e), s(t), r, i, o, a)
      a.delete(e)
      return l
    case "[object Symbol]":
      if (nr) {
        return nr.call(e) == nr.call(t)
      }
  }
  return false
}
var ir = function (e, t) {
  for (var n = -1, t$length = t.length, e$length = e.length; ++n < t$length;) {
    e[e$length + n] = t[n]
  }
  return e
}
var or = function (e, t, n) {
  var r = t(e)
  return array$isArray(e) ? r : ir(r, n(e))
}
var ar = function (e, t) {
  for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
    var a = e[n]
    if (t(a, n, e)) {
      o[i++] = a
    }
  }
  return o
}
var sr = function () {
  return []
}
var object$prototype$propertyIsEnumerable = Object.prototype.propertyIsEnumerable
var object$getOwnPropertySymbols = Object.getOwnPropertySymbols
var lr = object$getOwnPropertySymbols ? function (e) {
  return null == e ? [] : (e = Object(e), ar(object$getOwnPropertySymbols(e), function (t) {
    return object$prototype$propertyIsEnumerable.call(e, t)
  }))
} : sr
var fr = function (e) {
  return or(e, bn, lr)
}
var _object$prototype$hasOwnProperty1 = Object.prototype.hasOwnProperty
var hr = function (e, t, n, r, i, o) {
  var a = 1 & n
  var s = fr(e)
  var s$length = s.length
  if (s$length != fr(t).length && !a) {
    return false
  }
  for (var u = s$length; u--;) {
    var l = s[u]
    if (!(a ? l in t : _object$prototype$hasOwnProperty1.call(t, l))) {
      return false
    }
  }
  var f = o.get(e)
  var d = o.get(t)
  if (f && d) {
    return f == t && d == e
  }
  var h = true
  o.set(e, t)
  o.set(t, e)
  for (var p = a; ++u < s$length;) {
    var _ = e[l = s[u]]
    var A = t[l]
    if (r) {
      var g = a ? r(A, _, l, t, e, o) : r(_, A, l, e, t, o)
    }
    if (!(undefined === g ? _ === A || i(_, A, n, r, o) : g)) {
      h = false
      break
    }
    if (!p) {
      p = "constructor" == l
    }
  }
  if (h && !p) {
    var e$constructor = e.constructor
    var t$constructor = t.constructor
    if (!(e$constructor == t$constructor || !("constructor" in e) || !("constructor" in t) || "function" == typeof e$constructor && e$constructor instanceof e$constructor && "function" == typeof t$constructor && t$constructor instanceof t$constructor)) {
      h = false
    }
  }
  o.delete(e)
  o.delete(t)
  return h
}
var pr = _e(G.a, "DataView")
var _r = _e(G.a, "Promise")
var Ar = _e(G.a, "Set")
var gr = _e(G.a, "WeakMap")
var vr = ae(pr)
var mr = ae(Ae)
var yr = ae(_r)
var br = ae(Ar)
var wr = ae(gr)
var Er = Z
if (pr && "[object DataView]" != Er(new pr(new ArrayBuffer(1))) || Ae && "[object Map]" != Er(new Ae()) || _r && "[object Promise]" != Er(_r.resolve()) || Ar && "[object Set]" != Er(new Ar()) || gr && "[object WeakMap]" != Er(new gr())) {
  Er = function (e) {
    var t = Z(e)
    var n = "[object Object]" == t ? e.constructor : undefined
    var r = n ? ae(n) : ""
    if (r) {
      switch (r) {
        case vr:
          return "[object DataView]"
        case mr:
          return "[object Map]"
        case yr:
          return "[object Promise]"
        case br:
          return "[object Set]"
        case wr:
          return "[object WeakMap]"
      }
    }
    return t
  }
}
var xr = Er
var object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
var Or = function (e, t, n, r, i, o) {
  var a = array$isArray(e)
  var s = array$isArray(t)
  var c = a ? "[object Array]" : xr(e)
  var u = s ? "[object Array]" : xr(t)
  var l = "[object Object]" == (c = "[object Arguments]" == c ? "[object Object]" : c)
  var f = "[object Object]" == (u = "[object Arguments]" == u ? "[object Object]" : u)
  var d = c == u
  if (d && ft.a(e)) {
    if (!ft.a(t)) {
      return false
    }
    a = true
    l = false
  }
  if (d && !l) {
    if (!o) {
      o = new je()
    }
    return a || Et(e) ? Jn(e, t, n, r, i, o) : rr(e, t, c, n, r, i, o)
  }
  if (!(1 & n)) {
    var h = l && object$prototype$hasOwnProperty.call(e, "__wrapped__")
    var p = f && object$prototype$hasOwnProperty.call(t, "__wrapped__")
    if (h || p) {
      var _ = h ? e.value() : e
      var A = p ? t.value() : t
      if (!o) {
        o = new je()
      }
      return i(_, A, n, r, o)
    }
  }
  return !!d && (o || (o = new je()), hr(e, t, n, r, i, o))
}
var kr = function e(t, n, r, i, o) {
  return t === n || (null == t || null == n || !tt(t) && !tt(n) ? t !== t && n !== n : Or(t, n, r, i, e, o))
}
var Sr = function (e, t, n, r) {
  var n$length = n.length
  var o = n$length
  var a = !r
  if (null == e) {
    return !o
  }
  for (e = Object(e); n$length--;) {
    var s = n[n$length]
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) {
      return false
    }
  }
  for (; ++n$length < o;) {
    var c = (s = n[n$length])[0]
    var u = e[c]
    var l = s[1]
    if (a && s[2]) {
      if (undefined === u && !(c in e)) {
        return false
      }
    } else {
      var f = new je()
      if (r) {
        var d = r(u, l, c, e, t, f)
      }
      if (!(undefined === d ? kr(l, u, 3, r, f) : d)) {
        return false
      }
    }
  }
  return true
}
var Tr = function (e) {
  return e === e && !ee(e)
}
var Br = function (e) {
  for (var t = bn(e), t$length = t.length; t$length--;) {
    var r = t[t$length]
    var i = e[r]
    t[t$length] = [r, i, Tr(i)]
  }
  return t
}
var Dr = function (e, t) {
  return function (n) {
    return null != n && n[e] === t && (undefined !== t || e in Object(n))
  }
}
var Ir = function (e) {
  var t = Br(e)
  return 1 == t.length && t[0][2] ? Dr(t[0][0], t[0][1]) : function (n) {
    return n === e || Sr(n, e, t)
  }
}
var Fr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
var Rr = /^\w*$/
var Pr = function (e, t) {
  if (array$isArray(e)) {
    return false
  }
  var n = typeof e
  return !("number" != n && "symbol" != n && "boolean" != n && null != e && !on(e)) || Rr.test(e) || !Fr.test(e) || null != t && e in Object(t)
}
function Nr(e, t) {
  if ("function" != typeof e || null != t && "function" != typeof t) {
    throw new TypeError("Expected a function")
  }
  var n = function n() {
    var r = arguments
    var i = t ? t.apply(this, r) : r[0]
    var n$cache = n.cache
    if (n$cache.has(i)) {
      return n$cache.get(i)
    }
    var a = e.apply(this, r)
    n.cache = n$cache.set(i, a) || n$cache
    return a
  }
  n.cache = new (Nr.Cache || Pe)()
  return n
}
Nr.Cache = Pe
var Mr = Nr
var jr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
var Lr = /\\(\\)?/g
var Ur = function (e) {
  var t = Mr(e, function (e) {
    if (500 === t$cache.size) {
      t$cache.clear()
    }
    return e
  })
  var t$cache = t.cache
  return t
}(function (e) {
  var t = []
  if (46 === e.charCodeAt(0)) {
    t.push("")
  }
  e.replace(jr, function (e, n, r, i) {
    t.push(r ? i.replace(Lr, "$1") : n || e)
  })
  return t
})
var Hr = g$a$Symbol ? g$a$Symbol.prototype : undefined
var Vr = Hr ? Hr.toString : undefined
var Gr = function e(t) {
  if ("string" == typeof t) {
    return t
  }
  if (array$isArray(t)) {
    return Qn(t, e) + ""
  }
  if (on(t)) {
    return Vr ? Vr.call(t) : ""
  }
  var n = t + ""
  return "0" == n && 1 / t == -1 / 0 ? "-0" : n
}
var zr = function (e) {
  return null == e ? "" : Gr(e)
}
var Qr = function (e, t) {
  return array$isArray(e) ? e : Pr(e, t) ? [e] : Ur(zr(e))
}
var Wr = function (e) {
  if ("string" == typeof e || on(e)) {
    return e
  }
  var t = e + ""
  return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}
var Kr = function (e, t) {
  for (var n = 0, tQrTE$length = (t = Qr(t, e)).length; null != e && n < tQrTE$length;) {
    e = e[Wr(t[n++])]
  }
  return n && n == tQrTE$length ? e : undefined
}
var Xr = function (e, t, n) {
  var r = null == e ? undefined : Kr(e, t)
  return undefined === r ? n : r
}
var Yr = function (e, t) {
  return null != e && t in Object(e)
}
var qr = function (e, t, n) {
  for (var r = -1, tQrTE$length = (t = Qr(t, e)).length, o = false; ++r < tQrTE$length;) {
    var a = Wr(t[r])
    if (!(o = null != e && n(e, a))) {
      break
    }
    e = e[a]
  }
  return o || ++r != tQrTE$length ? o : !!(tQrTE$length = null == e ? 0 : e.length) && ct(tQrTE$length) && Bt(a, tQrTE$length) && (array$isArray(e) || at(e))
}
var $r = function (e, t) {
  return null != e && qr(e, t, Yr)
}
var Jr = function (e, t) {
  return Pr(e) && Tr(t) ? Dr(Wr(e), t) : function (n) {
    var r = Xr(n, e)
    return undefined === r && r === t ? $r(n, e) : kr(t, r, 3)
  }
}
var Zr = function (e) {
  return function (t) {
    return null == t ? undefined : t[e]
  }
}
var ei = function (e) {
  return function (t) {
    return Kr(t, e)
  }
}
var ti = function (e) {
  return Pr(e) ? Zr(Wr(e)) : ei(e)
}
var ni = function (e) {
  return "function" == typeof e ? e : null == e ? Ut : "object" == typeof e ? array$isArray(e) ? Jr(e[0], e[1]) : Ir(e) : ti(e)
}
var ri = function (e, t) {
  var n = -1
  var r = ut(e) ? Array(e.length) : []
  wn(e, function (e, i, o) {
    r[++n] = t(e, i, o)
  })
  return r
}
var ii = function (e, t) {
  return (array$isArray(e) ? Qn : ri)(e, ni(t, 3))
}
var oi = function (e) {
  var e$colors = e.colors
  var e$onClick = e.onClick
  var e$onSwatchHover = e.onSwatchHover
  var o = a()({
    default: {
      swatches: {
        marginRight: "-10px"
      },
      swatch: {
        width: "22px",
        height: "22px",
        float: "left",
        marginRight: "10px",
        marginBottom: "10px",
        borderRadius: "4px"
      },
      clear: {
        clear: "both"
      }
    }
  })
  return i.a.createElement("div", {
    style: o.swatches
  }, ii(e$colors, function (e) {
    return i.a.createElement(Hn, {
      key: e,
      color: e,
      style: o.swatch,
      onClick: e$onClick,
      onHover: e$onSwatchHover,
      focusStyle: {
        boxShadow: "0 0 4px " + e
      }
    })
  }), i.a.createElement("div", {
    style: o.clear
  }))
}
var ai = function (e) {
  var e$onChange = e.onChange
  var e$onSwatchHover = e.onSwatchHover
  var e$hex = e.hex
  var e$colors = e.colors
  var e$width = e.width
  var e$triangle = e.triangle
  var e$styles = e.styles
  var l = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var h = undefined === e$className ? "" : e$className
  var p = "transparent" === e$hex
  var _ = function (e, n) {
    if (Tn(e)) {
      e$onChange({
        hex: e,
        source: "hex"
      }, n)
    }
  }
  var A = a()(qt({
    default: {
      card: {
        width: e$width,
        background: "#fff",
        boxShadow: "0 1px rgba(0,0,0,.1)",
        borderRadius: "6px",
        position: "relative"
      },
      head: {
        height: "110px",
        background: e$hex,
        borderRadius: "6px 6px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      },
      body: {
        padding: "10px"
      },
      label: {
        fontSize: "18px",
        color: Bn(e$hex),
        position: "relative"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 10px 10px 10px",
        borderColor: "transparent transparent " + e$hex + " transparent",
        position: "absolute",
        top: "-10px",
        left: "50%",
        marginLeft: "-10px"
      },
      input: {
        width: "100%",
        fontSize: "12px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "22px",
        boxShadow: "inset 0 0 0 1px #ddd",
        borderRadius: "4px",
        padding: "0 7px",
        boxSizing: "border-box"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      }
    }
  }, l), {
    "hide-triangle": "hide" === e$triangle
  })
  return i.a.createElement("div", {
    style: A.card,
    className: "block-picker " + h
  }, i.a.createElement("div", {
    style: A.triangle
  }), i.a.createElement("div", {
    style: A.head
  }, p && i.a.createElement(d, {
    borderRadius: "6px 6px 0 0"
  }), i.a.createElement("div", {
    style: A.label
  }, e$hex)), i.a.createElement("div", {
    style: A.body
  }, i.a.createElement(oi, {
    colors: e$colors,
    onClick: _,
    onSwatchHover: e$onSwatchHover
  }), i.a.createElement(b, {
    style: {
      input: A.input
    },
    value: e$hex,
    onChange: _
  })))
}
ai.propTypes = {
  width: S.a.oneOfType([S.a.string, S.a.number]),
  colors: S.a.arrayOf(S.a.string),
  triangle: S.a.oneOf(["top", "hide"]),
  styles: S.a.object
}
ai.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {}
}
Rn(ai)
var si = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  a100: "#ff8a80",
  a200: "#ff5252",
  a400: "#ff1744",
  a700: "#d50000"
}
var ci = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
  a100: "#ff80ab",
  a200: "#ff4081",
  a400: "#f50057",
  a700: "#c51162"
}
var ui = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  a100: "#ea80fc",
  a200: "#e040fb",
  a400: "#d500f9",
  a700: "#aa00ff"
}
var li = {
  50: "#ede7f6",
  100: "#d1c4e9",
  200: "#b39ddb",
  300: "#9575cd",
  400: "#7e57c2",
  500: "#673ab7",
  600: "#5e35b1",
  700: "#512da8",
  800: "#4527a0",
  900: "#311b92",
  a100: "#b388ff",
  a200: "#7c4dff",
  a400: "#651fff",
  a700: "#6200ea"
}
var fi = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  a100: "#8c9eff",
  a200: "#536dfe",
  a400: "#3d5afe",
  a700: "#304ffe"
}
var di = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  a100: "#82b1ff",
  a200: "#448aff",
  a400: "#2979ff",
  a700: "#2962ff"
}
var hi = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  a100: "#80d8ff",
  a200: "#40c4ff",
  a400: "#00b0ff",
  a700: "#0091ea"
}
var pi = {
  50: "#e0f7fa",
  100: "#b2ebf2",
  200: "#80deea",
  300: "#4dd0e1",
  400: "#26c6da",
  500: "#00bcd4",
  600: "#00acc1",
  700: "#0097a7",
  800: "#00838f",
  900: "#006064",
  a100: "#84ffff",
  a200: "#18ffff",
  a400: "#00e5ff",
  a700: "#00b8d4"
}
var _i = {
  50: "#e0f2f1",
  100: "#b2dfdb",
  200: "#80cbc4",
  300: "#4db6ac",
  400: "#26a69a",
  500: "#009688",
  600: "#00897b",
  700: "#00796b",
  800: "#00695c",
  900: "#004d40",
  a100: "#a7ffeb",
  a200: "#64ffda",
  a400: "#1de9b6",
  a700: "#00bfa5"
}
var Ai = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  a100: "#b9f6ca",
  a200: "#69f0ae",
  a400: "#00e676",
  a700: "#00c853"
}
var gi = {
  50: "#f1f8e9",
  100: "#dcedc8",
  200: "#c5e1a5",
  300: "#aed581",
  400: "#9ccc65",
  500: "#8bc34a",
  600: "#7cb342",
  700: "#689f38",
  800: "#558b2f",
  900: "#33691e",
  a100: "#ccff90",
  a200: "#b2ff59",
  a400: "#76ff03",
  a700: "#64dd17"
}
var vi = {
  50: "#f9fbe7",
  100: "#f0f4c3",
  200: "#e6ee9c",
  300: "#dce775",
  400: "#d4e157",
  500: "#cddc39",
  600: "#c0ca33",
  700: "#afb42b",
  800: "#9e9d24",
  900: "#827717",
  a100: "#f4ff81",
  a200: "#eeff41",
  a400: "#c6ff00",
  a700: "#aeea00"
}
var mi = {
  50: "#fffde7",
  100: "#fff9c4",
  200: "#fff59d",
  300: "#fff176",
  400: "#ffee58",
  500: "#ffeb3b",
  600: "#fdd835",
  700: "#fbc02d",
  800: "#f9a825",
  900: "#f57f17",
  a100: "#ffff8d",
  a200: "#ffff00",
  a400: "#ffea00",
  a700: "#ffd600"
}
var yi = {
  50: "#fff8e1",
  100: "#ffecb3",
  200: "#ffe082",
  300: "#ffd54f",
  400: "#ffca28",
  500: "#ffc107",
  600: "#ffb300",
  700: "#ffa000",
  800: "#ff8f00",
  900: "#ff6f00",
  a100: "#ffe57f",
  a200: "#ffd740",
  a400: "#ffc400",
  a700: "#ffab00"
}
var bi = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  a100: "#ffd180",
  a200: "#ffab40",
  a400: "#ff9100",
  a700: "#ff6d00"
}
var wi = {
  50: "#fbe9e7",
  100: "#ffccbc",
  200: "#ffab91",
  300: "#ff8a65",
  400: "#ff7043",
  500: "#ff5722",
  600: "#f4511e",
  700: "#e64a19",
  800: "#d84315",
  900: "#bf360c",
  a100: "#ff9e80",
  a200: "#ff6e40",
  a400: "#ff3d00",
  a700: "#dd2c00"
}
var Ei = {
  50: "#efebe9",
  100: "#d7ccc8",
  200: "#bcaaa4",
  300: "#a1887f",
  400: "#8d6e63",
  500: "#795548",
  600: "#6d4c41",
  700: "#5d4037",
  800: "#4e342e",
  900: "#3e2723"
}
var xi = {
  50: "#eceff1",
  100: "#cfd8dc",
  200: "#b0bec5",
  300: "#90a4ae",
  400: "#78909c",
  500: "#607d8b",
  600: "#546e7a",
  700: "#455a64",
  800: "#37474f",
  900: "#263238"
}
var Ci = function (e) {
  var e$color = e.color
  var e$onClick = e.onClick
  var e$onSwatchHover = e.onSwatchHover
  var e$hover = e.hover
  var e$active = e.active
  var e$circleSize = e.circleSize
  var e$circleSpacing = e.circleSpacing
  var l = a()({
    default: {
      swatch: {
        width: e$circleSize,
        height: e$circleSize,
        marginRight: e$circleSpacing,
        marginBottom: e$circleSpacing,
        transform: "scale(1)",
        transition: "100ms transform ease"
      },
      Swatch: {
        borderRadius: "50%",
        background: "transparent",
        boxShadow: "inset 0 0 0 " + (e$circleSize / 2 + 1) + "px " + e$color,
        transition: "100ms box-shadow ease"
      }
    },
    hover: {
      swatch: {
        transform: "scale(1.2)"
      }
    },
    active: {
      Swatch: {
        boxShadow: "inset 0 0 0 3px " + e$color
      }
    }
  }, {
    hover: e$hover,
    active: e$active
  })
  return i.a.createElement("div", {
    style: l.swatch
  }, i.a.createElement(Hn, {
    style: l.Swatch,
    color: e$color,
    onClick: e$onClick,
    onHover: e$onSwatchHover,
    focusStyle: {
      boxShadow: l.Swatch.boxShadow + ", 0 0 5px " + e$color
    }
  }))
}
Ci.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
}
var Oi = o.handleHover(Ci)
var ki = function (e) {
  var e$width = e.width
  var e$onChange = e.onChange
  var e$onSwatchHover = e.onSwatchHover
  var e$colors = e.colors
  var e$hex = e.hex
  var e$circleSize = e.circleSize
  var e$styles = e.styles
  var l = undefined === e$styles ? {} : e$styles
  var e$circleSpacing = e.circleSpacing
  var e$className = e.className
  var h = undefined === e$className ? "" : e$className
  var p = a()(qt({
    default: {
      card: {
        width: e$width,
        display: "flex",
        flexWrap: "wrap",
        marginRight: -e$circleSpacing,
        marginBottom: -e$circleSpacing
      }
    }
  }, l))
  var _ = function (e, t) {
    return e$onChange({
      hex: e,
      source: "hex"
    }, t)
  }
  return i.a.createElement("div", {
    style: p.card,
    className: "circle-picker " + h
  }, ii(e$colors, function (e) {
    return i.a.createElement(Oi, {
      key: e,
      color: e,
      onClick: _,
      onSwatchHover: e$onSwatchHover,
      active: e$hex === e.toLowerCase(),
      circleSize: e$circleSize,
      circleSpacing: e$circleSpacing
    })
  }))
}
ki.propTypes = {
  width: S.a.oneOfType([S.a.string, S.a.number]),
  circleSize: S.a.number,
  circleSpacing: S.a.number,
  styles: S.a.object
}
ki.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [si[500], ci[500], ui[500], li[500], fi[500], di[500], hi[500], pi[500], _i[500], Ai[500], gi[500], vi[500], mi[500], yi[500], bi[500], wi[500], Ei[500], xi[500]],
  styles: {}
}
Rn(ki)
var Si = function (e) {
  return undefined === e
}
import Ti = require("./1465");
var Bi = function __importDefault(module) {
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
}(Ti)
var Di = function () {
  function e(e, t) {
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
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
var Ii = function (e) {
  function t(e) {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }(this, t)
    var n = function (e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
    n.toggleViews = function () {
      if ("hex" === n.state.view) {
        n.setState({
          view: "rgb"
        })
      } else {
        if ("rgb" === n.state.view) {
          n.setState({
            view: "hsl"
          })
        } else {
          if ("hsl" === n.state.view) {
            if (1 === n.props.hsl.a) {
              n.setState({
                view: "hex"
              })
            } else {
              n.setState({
                view: "rgb"
              })
            }
          }
        }
      }
    }
    n.handleChange = function (e, t) {
      if (e.hex) {
        if (Tn(e.hex)) {
          n.props.onChange({
            hex: e.hex,
            source: "hex"
          }, t)
        }
      } else {
        if (e.r || e.g || e.b) {
          n.props.onChange({
            r: e.r || n.props.rgb.r,
            g: e.g || n.props.rgb.g,
            b: e.b || n.props.rgb.b,
            source: "rgb"
          }, t)
        } else {
          if (e.a) {
            if (e.a < 0) {
              e.a = 0
            } else {
              if (e.a > 1) {
                e.a = 1
              }
            }
            n.props.onChange({
              h: n.props.hsl.h,
              s: n.props.hsl.s,
              l: n.props.hsl.l,
              a: Math.round(100 * e.a) / 100,
              source: "rgb"
            }, t)
          } else {
            if (e.h || e.s || e.l) {
              if ("string" === typeof e.s && e.s.includes("%")) {
                e.s = e.s.replace("%", "")
              }
              if ("string" === typeof e.l && e.l.includes("%")) {
                e.l = e.l.replace("%", "")
              }
              if (1 == e.s) {
                e.s = .01
              } else {
                if (1 == e.l) {
                  e.l = .01
                }
              }
              n.props.onChange({
                h: e.h || n.props.hsl.h,
                s: Number(Si(e.s) ? n.props.hsl.s : e.s),
                l: Number(Si(e.l) ? n.props.hsl.l : e.l),
                source: "hsl"
              }, t)
            }
          }
        }
      }
    }
    n.showHighlight = function (e) {
      e.currentTarget.style.background = "#eee"
    }
    n.hideHighlight = function (e) {
      e.currentTarget.style.background = "transparent"
    }
    if (1 !== e.hsl.a && "hex" === e.view) {
      n.state = {
        view: "rgb"
      }
    } else {
      n.state = {
        view: e.view
      }
    }
    return n
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t)
      } else {
        e.__proto__ = t
      }
    }
  })(t, e)
  Di(t, [{
    key: "render",
    value: function () {
      var e = this
      var t = a()({
        default: {
          wrap: {
            paddingTop: "16px",
            display: "flex"
          },
          fields: {
            flex: "1",
            display: "flex",
            marginLeft: "-6px"
          },
          field: {
            paddingLeft: "6px",
            width: "100%"
          },
          alpha: {
            paddingLeft: "6px",
            width: "100%"
          },
          toggle: {
            width: "32px",
            textAlign: "right",
            position: "relative"
          },
          icon: {
            marginRight: "-4px",
            marginTop: "12px",
            cursor: "pointer",
            position: "relative"
          },
          iconHighlight: {
            position: "absolute",
            width: "24px",
            height: "28px",
            background: "#eee",
            borderRadius: "4px",
            top: "10px",
            left: "12px",
            display: "none"
          },
          input: {
            fontSize: "11px",
            color: "#333",
            width: "100%",
            borderRadius: "2px",
            border: "none",
            boxShadow: "inset 0 0 0 1px #dadada",
            height: "21px",
            textAlign: "center"
          },
          label: {
            textTransform: "uppercase",
            fontSize: "11px",
            lineHeight: "11px",
            color: "#969696",
            textAlign: "center",
            display: "block",
            marginTop: "12px"
          },
          svg: {
            fill: "#333",
            width: "24px",
            height: "24px",
            border: "1px transparent solid",
            borderRadius: "5px"
          }
        },
        disableAlpha: {
          alpha: {
            display: "none"
          }
        }
      }, this.props, this.state)
      var n = undefined
      if ("hex" === this.state.view) {
        n = i.a.createElement("div", {
          style: t.fields,
          className: "flexbox-fix"
        }, i.a.createElement("div", {
          style: t.field
        }, i.a.createElement(b, {
          style: {
            input: t.input,
            label: t.label
          },
          label: "hex",
          value: this.props.hex,
          onChange: this.handleChange
        })))
      } else {
        if ("rgb" === this.state.view) {
          n = i.a.createElement("div", {
            style: t.fields,
            className: "flexbox-fix"
          }, i.a.createElement("div", {
            style: t.field
          }, i.a.createElement(b, {
            style: {
              input: t.input,
              label: t.label
            },
            label: "r",
            value: this.props.rgb.r,
            onChange: this.handleChange
          })), i.a.createElement("div", {
            style: t.field
          }, i.a.createElement(b, {
            style: {
              input: t.input,
              label: t.label
            },
            label: "g",
            value: this.props.rgb.g,
            onChange: this.handleChange
          })), i.a.createElement("div", {
            style: t.field
          }, i.a.createElement(b, {
            style: {
              input: t.input,
              label: t.label
            },
            label: "b",
            value: this.props.rgb.b,
            onChange: this.handleChange
          })), i.a.createElement("div", {
            style: t.alpha
          }, i.a.createElement(b, {
            style: {
              input: t.input,
              label: t.label
            },
            label: "a",
            value: this.props.rgb.a,
            arrowOffset: .01,
            onChange: this.handleChange
          })))
        } else {
          if ("hsl" === this.state.view) {
            n = i.a.createElement("div", {
              style: t.fields,
              className: "flexbox-fix"
            }, i.a.createElement("div", {
              style: t.field
            }, i.a.createElement(b, {
              style: {
                input: t.input,
                label: t.label
              },
              label: "h",
              value: Math.round(this.props.hsl.h),
              onChange: this.handleChange
            })), i.a.createElement("div", {
              style: t.field
            }, i.a.createElement(b, {
              style: {
                input: t.input,
                label: t.label
              },
              label: "s",
              value: Math.round(100 * this.props.hsl.s) + "%",
              onChange: this.handleChange
            })), i.a.createElement("div", {
              style: t.field
            }, i.a.createElement(b, {
              style: {
                input: t.input,
                label: t.label
              },
              label: "l",
              value: Math.round(100 * this.props.hsl.l) + "%",
              onChange: this.handleChange
            })), i.a.createElement("div", {
              style: t.alpha
            }, i.a.createElement(b, {
              style: {
                input: t.input,
                label: t.label
              },
              label: "a",
              value: this.props.hsl.a,
              arrowOffset: .01,
              onChange: this.handleChange
            })))
          }
        }
      }
      return i.a.createElement("div", {
        style: t.wrap,
        className: "flexbox-fix"
      }, n, i.a.createElement("div", {
        style: t.toggle
      }, i.a.createElement("div", {
        style: t.icon,
        onClick: this.toggleViews,
        ref: function (t) {
          return e.icon = t
        }
      }, i.a.createElement(Bi.a, {
        style: t.svg,
        onMouseOver: this.showHighlight,
        onMouseEnter: this.showHighlight,
        onMouseOut: this.hideHighlight
      }))))
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function (e, t) {
      return 1 !== e.hsl.a && "hex" === t.view ? {
        view: "rgb"
      } : null
    }
  }])
  return t
}(i.a.Component)
Ii.defaultProps = {
  view: "hex"
}
var Fi = Ii
var Ri = function () {
  var e = a()({
    default: {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        transform: "translate(-6px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  })
  return i.a.createElement("div", {
    style: e.picker
  })
}
var Pi = function () {
  var e = a()({
    default: {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    }
  })
  return i.a.createElement("div", {
    style: e.picker
  })
}
var Ni = function (e) {
  var e$width = e.width
  var e$onChange = e.onChange
  var e$disableAlpha = e.disableAlpha
  var e$rgb = e.rgb
  var e$hsl = e.hsl
  var e$hsv = e.hsv
  var e$hex = e.hex
  var e$renderers = e.renderers
  var e$styles = e.styles
  var h = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var _ = undefined === e$className ? "" : e$className
  var e$defaultView = e.defaultView
  var v = a()(qt({
    default: {
      picker: {
        width: e$width,
        background: "#fff",
        borderRadius: "2px",
        boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
        boxSizing: "initial",
        fontFamily: "Menlo"
      },
      saturation: {
        width: "100%",
        paddingBottom: "55%",
        position: "relative",
        borderRadius: "2px 2px 0 0",
        overflow: "hidden"
      },
      Saturation: {
        radius: "2px 2px 0 0"
      },
      body: {
        padding: "16px 16px 12px"
      },
      controls: {
        display: "flex"
      },
      color: {
        width: "32px"
      },
      swatch: {
        marginTop: "6px",
        width: "16px",
        height: "16px",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden"
      },
      active: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "8px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
        background: "rgba(" + e$rgb.r + ", " + e$rgb.g + ", " + e$rgb.b + ", " + e$rgb.a + ")",
        zIndex: "2"
      },
      toggles: {
        flex: "1"
      },
      hue: {
        height: "10px",
        position: "relative",
        marginBottom: "8px"
      },
      Hue: {
        radius: "2px"
      },
      alpha: {
        height: "10px",
        position: "relative"
      },
      Alpha: {
        radius: "2px"
      }
    },
    disableAlpha: {
      color: {
        width: "22px"
      },
      alpha: {
        display: "none"
      },
      hue: {
        marginBottom: "0px"
      },
      swatch: {
        width: "10px",
        height: "10px",
        marginTop: "0px"
      }
    }
  }, h), {
    disableAlpha: e$disableAlpha
  })
  return i.a.createElement("div", {
    style: v.picker,
    className: "chrome-picker " + _
  }, i.a.createElement("div", {
    style: v.saturation
  }, i.a.createElement(An, {
    style: v.Saturation,
    hsl: e$hsl,
    hsv: e$hsv,
    pointer: Pi,
    onChange: e$onChange
  })), i.a.createElement("div", {
    style: v.body
  }, i.a.createElement("div", {
    style: v.controls,
    className: "flexbox-fix"
  }, i.a.createElement("div", {
    style: v.color
  }, i.a.createElement("div", {
    style: v.swatch
  }, i.a.createElement("div", {
    style: v.active
  }), i.a.createElement(d, {
    renderers: e$renderers
  }))), i.a.createElement("div", {
    style: v.toggles
  }, i.a.createElement("div", {
    style: v.hue
  }, i.a.createElement(O, {
    style: v.Hue,
    hsl: e$hsl,
    pointer: Ri,
    onChange: e$onChange
  })), i.a.createElement("div", {
    style: v.alpha
  }, i.a.createElement(g, {
    style: v.Alpha,
    rgb: e$rgb,
    hsl: e$hsl,
    pointer: Ri,
    renderers: e$renderers,
    onChange: e$onChange
  })))), i.a.createElement(Fi, {
    rgb: e$rgb,
    hsl: e$hsl,
    hex: e$hex,
    view: e$defaultView,
    onChange: e$onChange,
    disableAlpha: e$disableAlpha
  })))
}
Ni.propTypes = {
  width: S.a.oneOfType([S.a.string, S.a.number]),
  disableAlpha: S.a.bool,
  styles: S.a.object,
  defaultView: S.a.oneOf(["hex", "rgb", "hsl"])
}
Ni.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {}
}
Rn(Ni)
var Mi = function (e) {
  var e$color = e.color
  var e$onClick = e.onClick
  var r = undefined === e$onClick ? function () {} : e$onClick
  var e$onSwatchHover = e.onSwatchHover
  var e$active = e.active
  var c = a()({
    default: {
      color: {
        background: e$color,
        width: "15px",
        height: "15px",
        float: "left",
        marginRight: "5px",
        marginBottom: "5px",
        position: "relative",
        cursor: "pointer"
      },
      dot: {
        absolute: "5px 5px 5px 5px",
        background: Bn(e$color),
        borderRadius: "50%",
        opacity: "0"
      }
    },
    active: {
      dot: {
        opacity: "1"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      dot: {
        background: "#000"
      }
    },
    transparent: {
      dot: {
        background: "#000"
      }
    }
  }, {
    active: e$active,
    "color-#FFFFFF": "#FFFFFF" === e$color,
    transparent: "transparent" === e$color
  })
  return i.a.createElement(Hn, {
    style: c.color,
    color: e$color,
    onClick: r,
    onHover: e$onSwatchHover,
    focusStyle: {
      boxShadow: "0 0 4px " + e$color
    }
  }, i.a.createElement("div", {
    style: c.dot
  }))
}
var ji = function (e) {
  var e$hex = e.hex
  var e$rgb = e.rgb
  var e$onChange = e.onChange
  var o = a()({
    default: {
      fields: {
        display: "flex",
        paddingBottom: "6px",
        paddingRight: "5px",
        position: "relative"
      },
      active: {
        position: "absolute",
        top: "6px",
        left: "5px",
        height: "9px",
        width: "9px",
        background: e$hex
      },
      HEXwrap: {
        flex: "6",
        position: "relative"
      },
      HEXinput: {
        width: "80%",
        padding: "0px",
        paddingLeft: "20%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      HEXlabel: {
        display: "none"
      },
      RGBwrap: {
        flex: "3",
        position: "relative"
      },
      RGBinput: {
        width: "70%",
        padding: "0px",
        paddingLeft: "30%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      RGBlabel: {
        position: "absolute",
        top: "3px",
        left: "0px",
        lineHeight: "16px",
        textTransform: "uppercase",
        fontSize: "12px",
        color: "#999"
      }
    }
  })
  var s = function (e, t) {
    if (e.r || e.g || e.b) {
      e$onChange({
        r: e.r || e$rgb.r,
        g: e.g || e$rgb.g,
        b: e.b || e$rgb.b,
        source: "rgb"
      }, t)
    } else {
      e$onChange({
        hex: e.hex,
        source: "hex"
      }, t)
    }
  }
  return i.a.createElement("div", {
    style: o.fields,
    className: "flexbox-fix"
  }, i.a.createElement("div", {
    style: o.active
  }), i.a.createElement(b, {
    style: {
      wrap: o.HEXwrap,
      input: o.HEXinput,
      label: o.HEXlabel
    },
    label: "hex",
    value: e$hex,
    onChange: s
  }), i.a.createElement(b, {
    style: {
      wrap: o.RGBwrap,
      input: o.RGBinput,
      label: o.RGBlabel
    },
    label: "r",
    value: e$rgb.r,
    onChange: s
  }), i.a.createElement(b, {
    style: {
      wrap: o.RGBwrap,
      input: o.RGBinput,
      label: o.RGBlabel
    },
    label: "g",
    value: e$rgb.g,
    onChange: s
  }), i.a.createElement(b, {
    style: {
      wrap: o.RGBwrap,
      input: o.RGBinput,
      label: o.RGBlabel
    },
    label: "b",
    value: e$rgb.b,
    onChange: s
  }))
}
var Li = function (e) {
  var e$onChange = e.onChange
  var e$onSwatchHover = e.onSwatchHover
  var e$colors = e.colors
  var e$hex = e.hex
  var e$rgb = e.rgb
  var e$styles = e.styles
  var u = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var f = undefined === e$className ? "" : e$className
  var d = a()(qt({
    default: {
      Compact: {
        background: "#f6f6f6",
        radius: "4px"
      },
      compact: {
        paddingTop: "5px",
        paddingLeft: "5px",
        boxSizing: "initial",
        width: "240px"
      },
      clear: {
        clear: "both"
      }
    }
  }, u))
  var h = function (e, n) {
    if (e.hex) {
      if (Tn(e.hex)) {
        e$onChange({
          hex: e.hex,
          source: "hex"
        }, n)
      }
    } else {
      e$onChange(e, n)
    }
  }
  return i.a.createElement(Jt, {
    style: d.Compact,
    styles: u
  }, i.a.createElement("div", {
    style: d.compact,
    className: "compact-picker " + f
  }, i.a.createElement("div", null, ii(e$colors, function (e) {
    return i.a.createElement(Mi, {
      key: e,
      color: e,
      active: e.toLowerCase() === e$hex,
      onClick: h,
      onSwatchHover: e$onSwatchHover
    })
  }), i.a.createElement("div", {
    style: d.clear
  })), i.a.createElement(ji, {
    hex: e$hex,
    rgb: e$rgb,
    onChange: h
  })))
}
Li.propTypes = {
  colors: S.a.arrayOf(S.a.string),
  styles: S.a.object
}
Li.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
}
Rn(Li)
var Ui = o.handleHover(function (e) {
  var e$hover = e.hover
  var e$color = e.color
  var e$onClick = e.onClick
  var e$onSwatchHover = e.onSwatchHover
  var s = {
    position: "relative",
    zIndex: "2",
    outline: "2px solid #fff",
    boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
  }
  var c = a()({
    default: {
      swatch: {
        width: "25px",
        height: "25px",
        fontSize: "0"
      }
    },
    hover: {
      swatch: s
    }
  }, {
    hover: e$hover
  })
  return i.a.createElement("div", {
    style: c.swatch
  }, i.a.createElement(Hn, {
    color: e$color,
    onClick: e$onClick,
    onHover: e$onSwatchHover,
    focusStyle: s
  }))
})
var Hi = function (e) {
  var e$width = e.width
  var e$colors = e.colors
  var e$onChange = e.onChange
  var e$onSwatchHover = e.onSwatchHover
  var e$triangle = e.triangle
  var e$styles = e.styles
  var u = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var f = undefined === e$className ? "" : e$className
  var d = a()(qt({
    default: {
      card: {
        width: e$width,
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.2)",
        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
        borderRadius: "4px",
        position: "relative",
        padding: "5px",
        display: "flex",
        flexWrap: "wrap"
      },
      triangle: {
        position: "absolute",
        border: "7px solid transparent",
        borderBottomColor: "#fff"
      },
      triangleShadow: {
        position: "absolute",
        border: "8px solid transparent",
        borderBottomColor: "rgba(0,0,0,0.15)"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-14px",
        left: "10px"
      },
      triangleShadow: {
        top: "-16px",
        left: "9px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-14px",
        right: "10px"
      },
      triangleShadow: {
        top: "-16px",
        right: "9px"
      }
    },
    "bottom-left-triangle": {
      triangle: {
        top: "35px",
        left: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        left: "9px",
        transform: "rotate(180deg)"
      }
    },
    "bottom-right-triangle": {
      triangle: {
        top: "35px",
        right: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        right: "9px",
        transform: "rotate(180deg)"
      }
    }
  }, u), {
    "hide-triangle": "hide" === e$triangle,
    "top-left-triangle": "top-left" === e$triangle,
    "top-right-triangle": "top-right" === e$triangle,
    "bottom-left-triangle": "bottom-left" === e$triangle,
    "bottom-right-triangle": "bottom-right" === e$triangle
  })
  var h = function (e, t) {
    return e$onChange({
      hex: e,
      source: "hex"
    }, t)
  }
  return i.a.createElement("div", {
    style: d.card,
    className: "github-picker " + f
  }, i.a.createElement("div", {
    style: d.triangleShadow
  }), i.a.createElement("div", {
    style: d.triangle
  }), ii(e$colors, function (e) {
    return i.a.createElement(Ui, {
      color: e,
      key: e,
      onClick: h,
      onSwatchHover: e$onSwatchHover
    })
  }))
}
Hi.propTypes = {
  width: S.a.oneOfType([S.a.string, S.a.number]),
  colors: S.a.arrayOf(S.a.string),
  triangle: S.a.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: S.a.object
}
Hi.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {}
}
Rn(Hi)
var Vi = function (e) {
  var e$direction = e.direction
  var n = a()({
    default: {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    vertical: {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, {
    vertical: "vertical" === e$direction
  })
  return i.a.createElement("div", {
    style: n.picker
  })
}
var Gi = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var zi = function (e) {
  var e$width = e.width
  var e$height = e.height
  var e$onChange = e.onChange
  var e$hsl = e.hsl
  var e$direction = e.direction
  var e$pointer = e.pointer
  var e$styles = e.styles
  var l = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var d = undefined === e$className ? "" : e$className
  var h = a()(qt({
    default: {
      picker: {
        position: "relative",
        width: e$width,
        height: e$height
      },
      hue: {
        radius: "2px"
      }
    }
  }, l))
  return i.a.createElement("div", {
    style: h.picker,
    className: "hue-picker " + d
  }, i.a.createElement(O, Gi({}, h.hue, {
    hsl: e$hsl,
    pointer: e$pointer,
    onChange: function (e) {
      return e$onChange({
        a: 1,
        h: e.h,
        l: .5,
        s: 1
      })
    },
    direction: e$direction
  })))
}
zi.propTypes = {
  styles: S.a.object
}
zi.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: Vi,
  styles: {}
}
Rn(zi)
Rn(function (e) {
  var e$onChange = e.onChange
  var e$hex = e.hex
  var e$rgb = e.rgb
  var e$styles = e.styles
  var s = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var u = undefined === e$className ? "" : e$className
  var l = a()(qt({
    default: {
      material: {
        width: "98px",
        height: "98px",
        padding: "16px",
        fontFamily: "Roboto"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "2px solid " + e$hex,
        outline: "none",
        height: "30px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "1px solid #eee",
        outline: "none",
        height: "30px"
      },
      RGBlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      split: {
        display: "flex",
        marginRight: "-10px",
        paddingTop: "11px"
      },
      third: {
        flex: "1",
        paddingRight: "10px"
      }
    }
  }, s))
  var f = function (e, n) {
    if (e.hex) {
      if (Tn(e.hex)) {
        e$onChange({
          hex: e.hex,
          source: "hex"
        }, n)
      }
    } else {
      if (e.r || e.g || e.b) {
        e$onChange({
          r: e.r || e$rgb.r,
          g: e.g || e$rgb.g,
          b: e.b || e$rgb.b,
          source: "rgb"
        }, n)
      }
    }
  }
  return i.a.createElement(Jt, {
    styles: s
  }, i.a.createElement("div", {
    style: l.material,
    className: "material-picker " + u
  }, i.a.createElement(b, {
    style: {
      wrap: l.HEXwrap,
      input: l.HEXinput,
      label: l.HEXlabel
    },
    label: "hex",
    value: e$hex,
    onChange: f
  }), i.a.createElement("div", {
    style: l.split,
    className: "flexbox-fix"
  }, i.a.createElement("div", {
    style: l.third
  }, i.a.createElement(b, {
    style: {
      wrap: l.RGBwrap,
      input: l.RGBinput,
      label: l.RGBlabel
    },
    label: "r",
    value: e$rgb.r,
    onChange: f
  })), i.a.createElement("div", {
    style: l.third
  }, i.a.createElement(b, {
    style: {
      wrap: l.RGBwrap,
      input: l.RGBinput,
      label: l.RGBlabel
    },
    label: "g",
    value: e$rgb.g,
    onChange: f
  })), i.a.createElement("div", {
    style: l.third
  }, i.a.createElement(b, {
    style: {
      wrap: l.RGBwrap,
      input: l.RGBinput,
      label: l.RGBlabel
    },
    label: "b",
    value: e$rgb.b,
    onChange: f
  })))))
})
var Qi = function (e) {
  var e$onChange = e.onChange
  var e$rgb = e.rgb
  var e$hsv = e.hsv
  var e$hex = e.hex
  var s = a()({
    default: {
      fields: {
        paddingTop: "5px",
        paddingBottom: "9px",
        width: "80px",
        position: "relative"
      },
      divider: {
        height: "5px"
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        marginLeft: "40%",
        width: "40%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "5px",
        fontSize: "13px",
        paddingLeft: "3px",
        marginRight: "10px"
      },
      RGBlabel: {
        left: "0px",
        top: "0px",
        width: "34px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px",
        position: "absolute"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        marginLeft: "20%",
        width: "80%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "6px",
        fontSize: "13px",
        paddingLeft: "3px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "14px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px"
      },
      fieldSymbols: {
        position: "absolute",
        top: "5px",
        right: "-7px",
        fontSize: "13px"
      },
      symbol: {
        height: "20px",
        lineHeight: "22px",
        paddingBottom: "7px"
      }
    }
  })
  var c = function (e, i) {
    if (e["#"]) {
      if (Tn(e["#"])) {
        e$onChange({
          hex: e["#"],
          source: "hex"
        }, i)
      }
    } else {
      if (e.r || e.g || e.b) {
        e$onChange({
          r: e.r || e$rgb.r,
          g: e.g || e$rgb.g,
          b: e.b || e$rgb.b,
          source: "rgb"
        }, i)
      } else {
        if (e.h || e.s || e.v) {
          e$onChange({
            h: e.h || e$hsv.h,
            s: e.s || e$hsv.s,
            v: e.v || e$hsv.v,
            source: "hsv"
          }, i)
        }
      }
    }
  }
  return i.a.createElement("div", {
    style: s.fields
  }, i.a.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "h",
    value: Math.round(e$hsv.h),
    onChange: c
  }), i.a.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "s",
    value: Math.round(100 * e$hsv.s),
    onChange: c
  }), i.a.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "v",
    value: Math.round(100 * e$hsv.v),
    onChange: c
  }), i.a.createElement("div", {
    style: s.divider
  }), i.a.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "r",
    value: e$rgb.r,
    onChange: c
  }), i.a.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "g",
    value: e$rgb.g,
    onChange: c
  }), i.a.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "b",
    value: e$rgb.b,
    onChange: c
  }), i.a.createElement("div", {
    style: s.divider
  }), i.a.createElement(b, {
    style: {
      wrap: s.HEXwrap,
      input: s.HEXinput,
      label: s.HEXlabel
    },
    label: "#",
    value: e$hex.replace("#", ""),
    onChange: c
  }), i.a.createElement("div", {
    style: s.fieldSymbols
  }, i.a.createElement("div", {
    style: s.symbol
  }, "°"), i.a.createElement("div", {
    style: s.symbol
  }, "%"), i.a.createElement("div", {
    style: s.symbol
  }, "%")))
}
var Wi = function (e) {
  var e$hsl = e.hsl
  var n = a()({
    default: {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    },
    "black-outline": {
      picker: {
        boxShadow: "inset 0 0 0 1px #000"
      }
    }
  }, {
    "black-outline": e$hsl.l > .5
  })
  return i.a.createElement("div", {
    style: n.picker
  })
}
var Ki = function () {
  var e = a()({
    default: {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "4px 0 4px 6px",
        borderColor: "transparent transparent transparent #fff",
        position: "absolute",
        top: "1px",
        left: "1px"
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "5px 0 5px 8px",
        borderColor: "transparent transparent transparent #555"
      },
      left: {
        Extend: "triangleBorder",
        transform: "translate(-13px, -4px)"
      },
      leftInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      },
      right: {
        Extend: "triangleBorder",
        transform: "translate(20px, -14px) rotate(180deg)"
      },
      rightInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      }
    }
  })
  return i.a.createElement("div", {
    style: e.pointer
  }, i.a.createElement("div", {
    style: e.left
  }, i.a.createElement("div", {
    style: e.leftInside
  })), i.a.createElement("div", {
    style: e.right
  }, i.a.createElement("div", {
    style: e.rightInside
  })))
}
var Xi = function (e) {
  var e$onClick = e.onClick
  var e$label = e.label
  var e$children = e.children
  var e$active = e.active
  var s = a()({
    default: {
      button: {
        backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
        border: "1px solid #878787",
        borderRadius: "2px",
        height: "20px",
        boxShadow: "0 1px 0 0 #EAEAEA",
        fontSize: "14px",
        color: "#000",
        lineHeight: "20px",
        textAlign: "center",
        marginBottom: "10px",
        cursor: "pointer"
      }
    },
    active: {
      button: {
        boxShadow: "0 0 0 1px #878787"
      }
    }
  }, {
    active: e$active
  })
  return i.a.createElement("div", {
    style: s.button,
    onClick: e$onClick
  }, e$label || e$children)
}
var Yi = function (e) {
  var e$rgb = e.rgb
  var e$currentColor = e.currentColor
  var r = a()({
    default: {
      swatches: {
        border: "1px solid #B3B3B3",
        borderBottom: "1px solid #F0F0F0",
        marginBottom: "2px",
        marginTop: "1px"
      },
      new: {
        height: "34px",
        background: "rgb(" + e$rgb.r + "," + e$rgb.g + ", " + e$rgb.b + ")",
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
      },
      current: {
        height: "34px",
        background: e$currentColor,
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
      },
      label: {
        fontSize: "14px",
        color: "#000",
        textAlign: "center"
      }
    }
  })
  return i.a.createElement("div", null, i.a.createElement("div", {
    style: r.label
  }, "new"), i.a.createElement("div", {
    style: r.swatches
  }, i.a.createElement("div", {
    style: r.new
  }), i.a.createElement("div", {
    style: r.current
  })), i.a.createElement("div", {
    style: r.label
  }, "current"))
}
var qi = function () {
  function e(e, t) {
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
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
var $i = function (e) {
  function t(e) {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }(this, t)
    var n = function (e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
    n.state = {
      currentColor: e.hex
    }
    return n
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t)
      } else {
        e.__proto__ = t
      }
    }
  })(t, e)
  qi(t, [{
    key: "render",
    value: function () {
      var this$props = this.props
      var this$props$styles = this$props.styles
      var n = undefined === this$props$styles ? {} : this$props$styles
      var this$props$className = this$props.className
      var o = undefined === this$props$className ? "" : this$props$className
      var s = a()(qt({
        default: {
          picker: {
            background: "#DCDCDC",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
            boxSizing: "initial",
            width: "513px"
          },
          head: {
            backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
            borderBottom: "1px solid #B1B1B1",
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
            height: "23px",
            lineHeight: "24px",
            borderRadius: "4px 4px 0 0",
            fontSize: "13px",
            color: "#4D4D4D",
            textAlign: "center"
          },
          body: {
            padding: "15px 15px 0",
            display: "flex"
          },
          saturation: {
            width: "256px",
            height: "256px",
            position: "relative",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0",
            overflow: "hidden"
          },
          hue: {
            position: "relative",
            height: "256px",
            width: "19px",
            marginLeft: "10px",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0"
          },
          controls: {
            width: "180px",
            marginLeft: "10px"
          },
          top: {
            display: "flex"
          },
          previews: {
            width: "60px"
          },
          actions: {
            flex: "1",
            marginLeft: "20px"
          }
        }
      }, n))
      return i.a.createElement("div", {
        style: s.picker,
        className: "photoshop-picker " + o
      }, i.a.createElement("div", {
        style: s.head
      }, this.props.header), i.a.createElement("div", {
        style: s.body,
        className: "flexbox-fix"
      }, i.a.createElement("div", {
        style: s.saturation
      }, i.a.createElement(An, {
        hsl: this.props.hsl,
        hsv: this.props.hsv,
        pointer: Wi,
        onChange: this.props.onChange
      })), i.a.createElement("div", {
        style: s.hue
      }, i.a.createElement(O, {
        direction: "vertical",
        hsl: this.props.hsl,
        pointer: Ki,
        onChange: this.props.onChange
      })), i.a.createElement("div", {
        style: s.controls
      }, i.a.createElement("div", {
        style: s.top,
        className: "flexbox-fix"
      }, i.a.createElement("div", {
        style: s.previews
      }, i.a.createElement(Yi, {
        rgb: this.props.rgb,
        currentColor: this.state.currentColor
      })), i.a.createElement("div", {
        style: s.actions
      }, i.a.createElement(Xi, {
        label: "OK",
        onClick: this.props.onAccept,
        active: true
      }), i.a.createElement(Xi, {
        label: "Cancel",
        onClick: this.props.onCancel
      }), i.a.createElement(Qi, {
        onChange: this.props.onChange,
        rgb: this.props.rgb,
        hsv: this.props.hsv,
        hex: this.props.hex
      }))))))
    }
  }])
  return t
}(i.a.Component)
$i.propTypes = {
  header: S.a.string,
  styles: S.a.object
}
$i.defaultProps = {
  header: "Color Picker",
  styles: {}
}
Rn($i)
var Ji = function (e) {
  var e$onChange = e.onChange
  var e$rgb = e.rgb
  var e$hsl = e.hsl
  var e$hex = e.hex
  var e$disableAlpha = e.disableAlpha
  var c = a()({
    default: {
      fields: {
        display: "flex",
        paddingTop: "4px"
      },
      single: {
        flex: "1",
        paddingLeft: "6px"
      },
      alpha: {
        flex: "1",
        paddingLeft: "6px"
      },
      double: {
        flex: "2"
      },
      input: {
        width: "80%",
        padding: "4px 10% 3px",
        border: "none",
        boxShadow: "inset 0 0 0 1px #ccc",
        fontSize: "11px"
      },
      label: {
        display: "block",
        textAlign: "center",
        fontSize: "11px",
        color: "#222",
        paddingTop: "3px",
        paddingBottom: "4px",
        textTransform: "capitalize"
      }
    },
    disableAlpha: {
      alpha: {
        display: "none"
      }
    }
  }, {
    disableAlpha: e$disableAlpha
  })
  var u = function (e, i) {
    if (e.hex) {
      if (Tn(e.hex)) {
        e$onChange({
          hex: e.hex,
          source: "hex"
        }, i)
      }
    } else {
      if (e.r || e.g || e.b) {
        e$onChange({
          r: e.r || e$rgb.r,
          g: e.g || e$rgb.g,
          b: e.b || e$rgb.b,
          a: e$rgb.a,
          source: "rgb"
        }, i)
      } else {
        if (e.a) {
          if (e.a < 0) {
            e.a = 0
          } else {
            if (e.a > 100) {
              e.a = 100
            }
          }
          e.a /= 100
          e$onChange({
            h: e$hsl.h,
            s: e$hsl.s,
            l: e$hsl.l,
            a: e.a,
            source: "rgb"
          }, i)
        }
      }
    }
  }
  return i.a.createElement("div", {
    style: c.fields,
    className: "flexbox-fix"
  }, i.a.createElement("div", {
    style: c.double
  }, i.a.createElement(b, {
    style: {
      input: c.input,
      label: c.label
    },
    label: "hex",
    value: e$hex.replace("#", ""),
    onChange: u
  })), i.a.createElement("div", {
    style: c.single
  }, i.a.createElement(b, {
    style: {
      input: c.input,
      label: c.label
    },
    label: "r",
    value: e$rgb.r,
    onChange: u,
    dragLabel: "true",
    dragMax: "255"
  })), i.a.createElement("div", {
    style: c.single
  }, i.a.createElement(b, {
    style: {
      input: c.input,
      label: c.label
    },
    label: "g",
    value: e$rgb.g,
    onChange: u,
    dragLabel: "true",
    dragMax: "255"
  })), i.a.createElement("div", {
    style: c.single
  }, i.a.createElement(b, {
    style: {
      input: c.input,
      label: c.label
    },
    label: "b",
    value: e$rgb.b,
    onChange: u,
    dragLabel: "true",
    dragMax: "255"
  })), i.a.createElement("div", {
    style: c.alpha
  }, i.a.createElement(b, {
    style: {
      input: c.input,
      label: c.label
    },
    label: "a",
    value: Math.round(100 * e$rgb.a),
    onChange: u,
    dragLabel: "true",
    dragMax: "100"
  })))
}
var Zi = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var eo = function (e) {
  var e$colors = e.colors
  var e$onClick = e.onClick
  var r = undefined === e$onClick ? function () {} : e$onClick
  var e$onSwatchHover = e.onSwatchHover
  var s = a()({
    default: {
      colors: {
        margin: "0 -10px",
        padding: "10px 0 0 10px",
        borderTop: "1px solid #eee",
        display: "flex",
        flexWrap: "wrap",
        position: "relative"
      },
      swatchWrap: {
        width: "16px",
        height: "16px",
        margin: "0 10px 10px 0"
      },
      swatch: {
        borderRadius: "3px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
      }
    },
    "no-presets": {
      colors: {
        display: "none"
      }
    }
  }, {
    "no-presets": !e$colors || !e$colors.length
  })
  var c = function (e, t) {
    r({
      hex: e,
      source: "hex"
    }, t)
  }
  return i.a.createElement("div", {
    style: s.colors,
    className: "flexbox-fix"
  }, e$colors.map(function (e) {
    var t = "string" === typeof e ? {
      color: e
    } : e
    var n = "" + t.color + (t.title || "")
    return i.a.createElement("div", {
      key: n,
      style: s.swatchWrap
    }, i.a.createElement(Hn, Zi({}, t, {
      style: s.swatch,
      onClick: c,
      onHover: e$onSwatchHover,
      focusStyle: {
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color
      }
    })))
  }))
}
eo.propTypes = {
  colors: S.a.arrayOf(S.a.oneOfType([S.a.string, S.a.shape({
    color: S.a.string,
    title: S.a.string
  })])).isRequired
}
var to = eo
var no = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var ro = function (e) {
  var e$width = e.width
  var e$rgb = e.rgb
  var e$hex = e.hex
  var e$hsv = e.hsv
  var e$hsl = e.hsl
  var e$onChange = e.onChange
  var e$onSwatchHover = e.onSwatchHover
  var e$disableAlpha = e.disableAlpha
  var e$presetColors = e.presetColors
  var e$renderers = e.renderers
  var e$styles = e.styles
  var _ = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var v = undefined === e$className ? "" : e$className
  var m = a()(qt({
    default: no({
      picker: {
        width: e$width,
        padding: "10px 10px 0",
        boxSizing: "initial",
        background: "#fff",
        borderRadius: "4px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
      },
      saturation: {
        width: "100%",
        paddingBottom: "75%",
        position: "relative",
        overflow: "hidden"
      },
      Saturation: {
        radius: "3px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      controls: {
        display: "flex"
      },
      sliders: {
        padding: "4px 0",
        flex: "1"
      },
      color: {
        width: "24px",
        height: "24px",
        position: "relative",
        marginTop: "4px",
        marginLeft: "4px",
        borderRadius: "3px"
      },
      activeColor: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "2px",
        background: "rgba(" + e$rgb.r + "," + e$rgb.g + "," + e$rgb.b + "," + e$rgb.a + ")",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      hue: {
        position: "relative",
        height: "10px",
        overflow: "hidden"
      },
      Hue: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      alpha: {
        position: "relative",
        height: "10px",
        marginTop: "4px",
        overflow: "hidden"
      },
      Alpha: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      }
    }, _),
    disableAlpha: {
      color: {
        height: "10px"
      },
      hue: {
        height: "10px"
      },
      alpha: {
        display: "none"
      }
    }
  }, _), {
    disableAlpha: e$disableAlpha
  })
  return i.a.createElement("div", {
    style: m.picker,
    className: "sketch-picker " + v
  }, i.a.createElement("div", {
    style: m.saturation
  }, i.a.createElement(An, {
    style: m.Saturation,
    hsl: e$hsl,
    hsv: e$hsv,
    onChange: e$onChange
  })), i.a.createElement("div", {
    style: m.controls,
    className: "flexbox-fix"
  }, i.a.createElement("div", {
    style: m.sliders
  }, i.a.createElement("div", {
    style: m.hue
  }, i.a.createElement(O, {
    style: m.Hue,
    hsl: e$hsl,
    onChange: e$onChange
  })), i.a.createElement("div", {
    style: m.alpha
  }, i.a.createElement(g, {
    style: m.Alpha,
    rgb: e$rgb,
    hsl: e$hsl,
    renderers: e$renderers,
    onChange: e$onChange
  }))), i.a.createElement("div", {
    style: m.color
  }, i.a.createElement(d, null), i.a.createElement("div", {
    style: m.activeColor
  }))), i.a.createElement(Ji, {
    rgb: e$rgb,
    hsl: e$hsl,
    hex: e$hex,
    onChange: e$onChange,
    disableAlpha: e$disableAlpha
  }), i.a.createElement(to, {
    colors: e$presetColors,
    onClick: e$onChange,
    onSwatchHover: e$onSwatchHover
  }))
}
ro.propTypes = {
  disableAlpha: S.a.bool,
  width: S.a.oneOfType([S.a.string, S.a.number]),
  styles: S.a.object
}
ro.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
  presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
}
var io = Rn(ro)
var oo = function (e) {
  var e$hsl = e.hsl
  var e$offset = e.offset
  var e$onClick = e.onClick
  var o = undefined === e$onClick ? function () {} : e$onClick
  var e$active = e.active
  var e$first = e.first
  var e$last = e.last
  var l = a()({
    default: {
      swatch: {
        height: "12px",
        background: "hsl(" + e$hsl.h + ", 50%, " + 100 * e$offset + "%)",
        cursor: "pointer"
      }
    },
    first: {
      swatch: {
        borderRadius: "2px 0 0 2px"
      }
    },
    last: {
      swatch: {
        borderRadius: "0 2px 2px 0"
      }
    },
    active: {
      swatch: {
        transform: "scaleY(1.8)",
        borderRadius: "3.6px/2px"
      }
    }
  }, {
    active: e$active,
    first: e$first,
    last: e$last
  })
  return i.a.createElement("div", {
    style: l.swatch,
    onClick: function (e) {
      return o({
        h: e$hsl.h,
        s: .5,
        l: e$offset,
        source: "hsl"
      }, e)
    }
  })
}
var ao = function (e) {
  var e$onClick = e.onClick
  var e$hsl = e.hsl
  var r = a()({
    default: {
      swatches: {
        marginTop: "20px"
      },
      swatch: {
        boxSizing: "border-box",
        width: "20%",
        paddingRight: "1px",
        float: "left"
      },
      clear: {
        clear: "both"
      }
    }
  })
  return i.a.createElement("div", {
    style: r.swatches
  }, i.a.createElement("div", {
    style: r.swatch
  }, i.a.createElement(oo, {
    hsl: e$hsl,
    offset: ".80",
    active: Math.abs(e$hsl.l - .8) < .1 && Math.abs(e$hsl.s - .5) < .1,
    onClick: e$onClick,
    first: true
  })), i.a.createElement("div", {
    style: r.swatch
  }, i.a.createElement(oo, {
    hsl: e$hsl,
    offset: ".65",
    active: Math.abs(e$hsl.l - .65) < .1 && Math.abs(e$hsl.s - .5) < .1,
    onClick: e$onClick
  })), i.a.createElement("div", {
    style: r.swatch
  }, i.a.createElement(oo, {
    hsl: e$hsl,
    offset: ".50",
    active: Math.abs(e$hsl.l - .5) < .1 && Math.abs(e$hsl.s - .5) < .1,
    onClick: e$onClick
  })), i.a.createElement("div", {
    style: r.swatch
  }, i.a.createElement(oo, {
    hsl: e$hsl,
    offset: ".35",
    active: Math.abs(e$hsl.l - .35) < .1 && Math.abs(e$hsl.s - .5) < .1,
    onClick: e$onClick
  })), i.a.createElement("div", {
    style: r.swatch
  }, i.a.createElement(oo, {
    hsl: e$hsl,
    offset: ".20",
    active: Math.abs(e$hsl.l - .2) < .1 && Math.abs(e$hsl.s - .5) < .1,
    onClick: e$onClick,
    last: true
  })), i.a.createElement("div", {
    style: r.clear
  }))
}
var so = function () {
  var e = a()({
    default: {
      picker: {
        width: "14px",
        height: "14px",
        borderRadius: "6px",
        transform: "translate(-7px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  })
  return i.a.createElement("div", {
    style: e.picker
  })
}
var co = function (e) {
  var e$hsl = e.hsl
  var e$onChange = e.onChange
  var e$pointer = e.pointer
  var e$styles = e.styles
  var s = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var u = undefined === e$className ? "" : e$className
  var l = a()(qt({
    default: {
      hue: {
        height: "12px",
        position: "relative"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, s))
  return i.a.createElement("div", {
    style: l.wrap || {},
    className: "slider-picker " + u
  }, i.a.createElement("div", {
    style: l.hue
  }, i.a.createElement(O, {
    style: l.Hue,
    hsl: e$hsl,
    pointer: e$pointer,
    onChange: e$onChange
  })), i.a.createElement("div", {
    style: l.swatches
  }, i.a.createElement(ao, {
    hsl: e$hsl,
    onClick: e$onChange
  })))
}
co.propTypes = {
  styles: S.a.object
}
co.defaultProps = {
  pointer: so,
  styles: {}
}
Rn(co)
import uo = require("./1466");
var lo = function __importDefault(module) {
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
}(uo)
var fo = function (e) {
  var e$color = e.color
  var e$onClick = e.onClick
  var r = undefined === e$onClick ? function () {} : e$onClick
  var e$onSwatchHover = e.onSwatchHover
  var e$first = e.first
  var e$last = e.last
  var e$active = e.active
  var l = a()({
    default: {
      color: {
        width: "40px",
        height: "24px",
        cursor: "pointer",
        background: e$color,
        marginBottom: "1px"
      },
      check: {
        color: Bn(e$color),
        marginLeft: "8px",
        display: "none"
      }
    },
    first: {
      color: {
        overflow: "hidden",
        borderRadius: "2px 2px 0 0"
      }
    },
    last: {
      color: {
        overflow: "hidden",
        borderRadius: "0 0 2px 2px"
      }
    },
    active: {
      check: {
        display: "block"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      check: {
        color: "#333"
      }
    },
    transparent: {
      check: {
        color: "#333"
      }
    }
  }, {
    first: e$first,
    last: e$last,
    active: e$active,
    "color-#FFFFFF": "#FFFFFF" === e$color,
    transparent: "transparent" === e$color
  })
  return i.a.createElement(Hn, {
    color: e$color,
    style: l.color,
    onClick: r,
    onHover: e$onSwatchHover,
    focusStyle: {
      boxShadow: "0 0 4px " + e$color
    }
  }, i.a.createElement("div", {
    style: l.check
  }, i.a.createElement(lo.a, null)))
}
var ho = function (e) {
  var e$onClick = e.onClick
  var e$onSwatchHover = e.onSwatchHover
  var e$group = e.group
  var e$active = e.active
  var s = a()({
    default: {
      group: {
        paddingBottom: "10px",
        width: "40px",
        float: "left",
        marginRight: "10px"
      }
    }
  })
  return i.a.createElement("div", {
    style: s.group
  }, ii(e$group, function (e, a) {
    return i.a.createElement(fo, {
      key: e,
      color: e,
      active: e.toLowerCase() === e$active,
      first: 0 === a,
      last: a === e$group.length - 1,
      onClick: e$onClick,
      onSwatchHover: e$onSwatchHover
    })
  }))
}
var po = function (e) {
  var e$width = e.width
  var e$height = e.height
  var e$onChange = e.onChange
  var e$onSwatchHover = e.onSwatchHover
  var e$colors = e.colors
  var e$hex = e.hex
  var e$styles = e.styles
  var l = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var d = undefined === e$className ? "" : e$className
  var h = a()(qt({
    default: {
      picker: {
        width: e$width,
        height: e$height
      },
      overflow: {
        height: e$height,
        overflowY: "scroll"
      },
      body: {
        padding: "16px 0 6px 16px"
      },
      clear: {
        clear: "both"
      }
    }
  }, l))
  var p = function (e, t) {
    return e$onChange({
      hex: e,
      source: "hex"
    }, t)
  }
  return i.a.createElement("div", {
    style: h.picker,
    className: "swatches-picker " + d
  }, i.a.createElement(Jt, null, i.a.createElement("div", {
    style: h.overflow
  }, i.a.createElement("div", {
    style: h.body
  }, ii(e$colors, function (e) {
    return i.a.createElement(ho, {
      key: e.toString(),
      group: e,
      active: e$hex,
      onClick: p,
      onSwatchHover: e$onSwatchHover
    })
  }), i.a.createElement("div", {
    style: h.clear
  })))))
}
po.propTypes = {
  width: S.a.oneOfType([S.a.string, S.a.number]),
  height: S.a.oneOfType([S.a.string, S.a.number]),
  colors: S.a.arrayOf(S.a.arrayOf(S.a.string)),
  styles: S.a.object
}
po.defaultProps = {
  width: 320,
  height: 240,
  colors: [[si[900], si[700], si[500], si[300], si[100]], [ci[900], ci[700], ci[500], ci[300], ci[100]], [ui[900], ui[700], ui[500], ui[300], ui[100]], [li[900], li[700], li[500], li[300], li[100]], [fi[900], fi[700], fi[500], fi[300], fi[100]], [di[900], di[700], di[500], di[300], di[100]], [hi[900], hi[700], hi[500], hi[300], hi[100]], [pi[900], pi[700], pi[500], pi[300], pi[100]], [_i[900], _i[700], _i[500], _i[300], _i[100]], ["#194D33", Ai[700], Ai[500], Ai[300], Ai[100]], [gi[900], gi[700], gi[500], gi[300], gi[100]], [vi[900], vi[700], vi[500], vi[300], vi[100]], [mi[900], mi[700], mi[500], mi[300], mi[100]], [yi[900], yi[700], yi[500], yi[300], yi[100]], [bi[900], bi[700], bi[500], bi[300], bi[100]], [wi[900], wi[700], wi[500], wi[300], wi[100]], [Ei[900], Ei[700], Ei[500], Ei[300], Ei[100]], [xi[900], xi[700], xi[500], xi[300], xi[100]], ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]],
  styles: {}
}
Rn(po)
var _o = function (e) {
  var e$onChange = e.onChange
  var e$onSwatchHover = e.onSwatchHover
  var e$hex = e.hex
  var e$colors = e.colors
  var e$width = e.width
  var e$triangle = e.triangle
  var e$styles = e.styles
  var l = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var d = undefined === e$className ? "" : e$className
  var h = a()(qt({
    default: {
      card: {
        width: e$width,
        background: "#fff",
        border: "0 solid rgba(0,0,0,0.25)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
        borderRadius: "4px",
        position: "relative"
      },
      body: {
        padding: "15px 9px 9px 15px"
      },
      label: {
        fontSize: "18px",
        color: "#fff"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent #fff transparent",
        position: "absolute"
      },
      triangleShadow: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
        position: "absolute"
      },
      hash: {
        background: "#F0F0F0",
        height: "30px",
        width: "30px",
        borderRadius: "4px 0 0 4px",
        float: "left",
        color: "#98A1A4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      input: {
        width: "100px",
        fontSize: "14px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "28px",
        boxShadow: "inset 0 0 0 1px #F0F0F0",
        boxSizing: "content-box",
        borderRadius: "0 4px 4px 0",
        float: "left",
        paddingLeft: "8px"
      },
      swatch: {
        width: "30px",
        height: "30px",
        float: "left",
        borderRadius: "4px",
        margin: "0 6px 6px 0"
      },
      clear: {
        clear: "both"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-10px",
        left: "12px"
      },
      triangleShadow: {
        top: "-11px",
        left: "12px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-10px",
        right: "12px"
      },
      triangleShadow: {
        top: "-11px",
        right: "12px"
      }
    }
  }, l), {
    "hide-triangle": "hide" === e$triangle,
    "top-left-triangle": "top-left" === e$triangle,
    "top-right-triangle": "top-right" === e$triangle
  })
  var p = function (e, n) {
    if (Tn(e)) {
      e$onChange({
        hex: e,
        source: "hex"
      }, n)
    }
  }
  return i.a.createElement("div", {
    style: h.card,
    className: "twitter-picker " + d
  }, i.a.createElement("div", {
    style: h.triangleShadow
  }), i.a.createElement("div", {
    style: h.triangle
  }), i.a.createElement("div", {
    style: h.body
  }, ii(e$colors, function (e, t) {
    return i.a.createElement(Hn, {
      key: t,
      color: e,
      hex: e,
      style: h.swatch,
      onClick: p,
      onHover: e$onSwatchHover,
      focusStyle: {
        boxShadow: "0 0 4px " + e
      }
    })
  }), i.a.createElement("div", {
    style: h.hash
  }, "#"), i.a.createElement(b, {
    label: null,
    style: {
      input: h.input
    },
    value: e$hex.replace("#", ""),
    onChange: p
  }), i.a.createElement("div", {
    style: h.clear
  })))
}
_o.propTypes = {
  width: S.a.oneOfType([S.a.string, S.a.number]),
  triangle: S.a.oneOf(["hide", "top-left", "top-right"]),
  colors: S.a.arrayOf(S.a.string),
  styles: S.a.object
}
_o.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {}
}
Rn(_o)
var Ao = function (e) {
  var t = a()({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        border: "2px #fff solid",
        transform: "translate(-12px, -13px)",
        background: "hsl(" + Math.round(e.hsl.h) + ", " + Math.round(100 * e.hsl.s) + "%, " + Math.round(100 * e.hsl.l) + "%)"
      }
    }
  })
  return i.a.createElement("div", {
    style: t.picker
  })
}
Ao.propTypes = {
  hsl: S.a.shape({
    h: S.a.number,
    s: S.a.number,
    l: S.a.number,
    a: S.a.number
  })
}
Ao.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: .2,
    s: .5
  }
}
var go = Ao
var vo = function (e) {
  var t = a()({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        transform: "translate(-10px, -7px)",
        background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
        border: "2px white solid"
      }
    }
  })
  return i.a.createElement("div", {
    style: t.picker
  })
}
vo.propTypes = {
  hsl: S.a.shape({
    h: S.a.number,
    s: S.a.number,
    l: S.a.number,
    a: S.a.number
  })
}
vo.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: .2,
    s: .5
  }
}
var mo = vo
var yo = function (e) {
  var e$onChange = e.onChange
  var e$rgb = e.rgb
  var e$hsl = e.hsl
  var e$hex = e.hex
  var e$hsv = e.hsv
  var c = function (e, n) {
    if (e.hex) {
      if (Tn(e.hex)) {
        e$onChange({
          hex: e.hex,
          source: "hex"
        }, n)
      }
    } else if (e.rgb) {
      var r = e.rgb.split(",")
      if (Dn(e.rgb, "rgb")) {
        e$onChange({
          r: r[0],
          g: r[1],
          b: r[2],
          a: 1,
          source: "rgb"
        }, n)
      }
    } else if (e.hsv) {
      var i = e.hsv.split(",")
      if (Dn(e.hsv, "hsv")) {
        i[2] = i[2].replace("%", "")
        i[1] = i[1].replace("%", "")
        i[0] = i[0].replace("°", "")
        if (1 == i[1]) {
          i[1] = .01
        } else {
          if (1 == i[2]) {
            i[2] = .01
          }
        }
        e$onChange({
          h: Number(i[0]),
          s: Number(i[1]),
          v: Number(i[2]),
          source: "hsv"
        }, n)
      }
    } else if (e.hsl) {
      var o = e.hsl.split(",")
      if (Dn(e.hsl, "hsl")) {
        o[2] = o[2].replace("%", "")
        o[1] = o[1].replace("%", "")
        o[0] = o[0].replace("°", "")
        if (1 == d[1]) {
          d[1] = .01
        } else {
          if (1 == d[2]) {
            d[2] = .01
          }
        }
        e$onChange({
          h: Number(o[0]),
          s: Number(o[1]),
          v: Number(o[2]),
          source: "hsl"
        }, n)
      }
    }
  }
  var u = a()({
    default: {
      wrap: {
        display: "flex",
        height: "100px",
        marginTop: "4px"
      },
      fields: {
        width: "100%"
      },
      column: {
        paddingTop: "10px",
        display: "flex",
        justifyContent: "space-between"
      },
      double: {
        padding: "0px 4.4px",
        boxSizing: "border-box"
      },
      input: {
        width: "100%",
        height: "38px",
        boxSizing: "border-box",
        padding: "4px 10% 3px",
        textAlign: "center",
        border: "1px solid #dadce0",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      input2: {
        height: "38px",
        width: "100%",
        border: "1px solid #dadce0",
        boxSizing: "border-box",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        paddingLeft: "10px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label: {
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "35px",
        top: "-6px",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label2: {
        left: "10px",
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "32px",
        top: "-6px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      single: {
        flexGrow: "1",
        margin: "0px 4.4px"
      }
    }
  })
  var l = e$rgb.r + ", " + e$rgb.g + ", " + e$rgb.b
  var f = Math.round(e$hsl.h) + "°, " + Math.round(100 * e$hsl.s) + "%, " + Math.round(100 * e$hsl.l) + "%"
  var d = Math.round(e$hsv.h) + "°, " + Math.round(100 * e$hsv.s) + "%, " + Math.round(100 * e$hsv.v) + "%"
  return i.a.createElement("div", {
    style: u.wrap,
    className: "flexbox-fix"
  }, i.a.createElement("div", {
    style: u.fields
  }, i.a.createElement("div", {
    style: u.double
  }, i.a.createElement(b, {
    style: {
      input: u.input,
      label: u.label
    },
    label: "hex",
    value: e$hex,
    onChange: c
  })), i.a.createElement("div", {
    style: u.column
  }, i.a.createElement("div", {
    style: u.single
  }, i.a.createElement(b, {
    style: {
      input: u.input2,
      label: u.label2
    },
    label: "rgb",
    value: l,
    onChange: c
  })), i.a.createElement("div", {
    style: u.single
  }, i.a.createElement(b, {
    style: {
      input: u.input2,
      label: u.label2
    },
    label: "hsv",
    value: d,
    onChange: c
  })), i.a.createElement("div", {
    style: u.single
  }, i.a.createElement(b, {
    style: {
      input: u.input2,
      label: u.label2
    },
    label: "hsl",
    value: f,
    onChange: c
  })))))
}
var bo = function (e) {
  var e$width = e.width
  var e$onChange = e.onChange
  var e$rgb = e.rgb
  var e$hsl = e.hsl
  var e$hsv = e.hsv
  var e$hex = e.hex
  var e$header = e.header
  var e$styles = e.styles
  var f = undefined === e$styles ? {} : e$styles
  var e$className = e.className
  var h = undefined === e$className ? "" : e$className
  var p = a()(qt({
    default: {
      picker: {
        width: e$width,
        background: "#fff",
        border: "1px solid #dfe1e5",
        boxSizing: "initial",
        display: "flex",
        flexWrap: "wrap",
        borderRadius: "8px 8px 0px 0px"
      },
      head: {
        height: "57px",
        width: "100%",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "16px",
        fontSize: "20px",
        boxSizing: "border-box",
        fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
      },
      saturation: {
        width: "70%",
        padding: "0px",
        position: "relative",
        overflow: "hidden"
      },
      swatch: {
        width: "30%",
        height: "228px",
        padding: "0px",
        background: "rgba(" + e$rgb.r + ", " + e$rgb.g + ", " + e$rgb.b + ", 1)",
        position: "relative",
        overflow: "hidden"
      },
      body: {
        margin: "auto",
        width: "95%"
      },
      controls: {
        display: "flex",
        boxSizing: "border-box",
        height: "52px",
        paddingTop: "22px"
      },
      color: {
        width: "32px"
      },
      hue: {
        height: "8px",
        position: "relative",
        margin: "0px 16px 0px 16px",
        width: "100%"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, f))
  return i.a.createElement("div", {
    style: p.picker,
    className: "google-picker " + h
  }, i.a.createElement("div", {
    style: p.head
  }, e$header), i.a.createElement("div", {
    style: p.swatch
  }), i.a.createElement("div", {
    style: p.saturation
  }, i.a.createElement(An, {
    hsl: e$hsl,
    hsv: e$hsv,
    pointer: go,
    onChange: e$onChange
  })), i.a.createElement("div", {
    style: p.body
  }, i.a.createElement("div", {
    style: p.controls,
    className: "flexbox-fix"
  }, i.a.createElement("div", {
    style: p.hue
  }, i.a.createElement(O, {
    style: p.Hue,
    hsl: e$hsl,
    radius: "4px",
    pointer: mo,
    onChange: e$onChange
  }))), i.a.createElement(yo, {
    rgb: e$rgb,
    hsl: e$hsl,
    hex: e$hex,
    hsv: e$hsv,
    onChange: e$onChange
  })))
}
bo.propTypes = {
  width: S.a.oneOfType([S.a.string, S.a.number]),
  styles: S.a.object,
  header: S.a.string
}
bo.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
}
Rn(bo)
export default io
