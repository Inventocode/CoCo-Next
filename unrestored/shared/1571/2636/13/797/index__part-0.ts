/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：797__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_101_index from "./101/index"
import /* [auto-meaningful-name] */_$_101_index from "./101/index"
var s = function (e, t, n, r, i) {
  var /* [auto-meaningful-name] */i$clientWidth = i.clientWidth
  var /* [auto-meaningful-name] */i$clientHeight = i.clientHeight
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
  var /* [auto-meaningful-name] */e$white = e.white
  var /* [auto-meaningful-name] */e$grey = e.grey
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$renderers = e.renderers
  var /* [auto-meaningful-name] */e$borderRadius = e.borderRadius
  var /* [auto-meaningful-name] */e$boxShadow = e.boxShadow
  var /* [auto-meaningful-name] */e$children = e.children
  var h = _$_101_index({
    default: {
      grid: {
        borderRadius: e$borderRadius,
        boxShadow: e$boxShadow,
        absolute: "0px 0px 0px 0px",
        background: "url(" + u(e$white, e$grey, e$size, e$renderers.canvas) + ") center left"
      }
    }
  })
  return React.isValidElement(e$children) ? _React.cloneElement(e$children, l({}, e$children.props, {
    style: l({}, e$children.props.style, h.grid)
  })) : _React.createElement("div", {
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
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = Array(arguments$length), a = 0; a < arguments$length; a++) {
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
  p(t, [
    {
      key: "componentWillUnmount",
      value: function () {
        this.unbindEventListeners()
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props$rgb = this.props.rgb
        var n = _$_101_index({
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
        return _React.createElement("div", {
          style: n.alpha
        }, _React.createElement("div", {
          style: n.checkboard
        }, _React.createElement(d, {
          renderers: this.props.renderers
        })), _React.createElement("div", {
          style: n.gradient
        }), _React.createElement("div", {
          style: n.container,
          ref: function (t) {
            return e.container = t
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        }, _React.createElement("div", {
          style: n.pointer
        }, this.props.pointer ? _React.createElement(this.props.pointer, this.props) : _React.createElement("div", {
          style: n.slider
        }))))
      }
    }
  ])
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
  v(t, [
    {
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
        var t = _$_101_index({
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
        return _React.createElement("div", {
          style: t.wrap
        }, _React.createElement("input", {
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
        }), this.props.label && !this.props.hideLabel ? _React.createElement("label", {
          htmlFor: this.inputId,
          style: t.label,
          onMouseDown: this.handleMouseDown
        }, this.props.label) : null)
      }
    }
  ])
  return t
}(React.PureComponent || React.Component)
var w = function (e, t, n, r) {
  var /* [auto-meaningful-name] */r$clientWidth = r.clientWidth
  var /* [auto-meaningful-name] */r$clientHeight = r.clientHeight
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
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = Array(arguments$length), a = 0; a < arguments$length; a++) {
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
  E(t, [
    {
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
        var /* [auto-meaningful-name] */this$props$direction = this.props.direction
        var n = undefined === this$props$direction ? "horizontal" : this$props$direction
        var r = _$_101_index({
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
        return _React.createElement("div", {
          style: r.hue
        }, _React.createElement("div", {
          className: "hue-" + n,
          style: r.container,
          ref: function (t) {
            return e.container = t
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        }, _React.createElement("style", null, "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "), _React.createElement("div", {
          style: r.pointer
        }, this.props.pointer ? _React.createElement(this.props.pointer, this.props) : _React.createElement("div", {
          style: r.slider
        }))))
      }
    }
  ])
  return t
}(React.PureComponent || React.Component)
export { d }
export { g }
export { b }
export { O }
