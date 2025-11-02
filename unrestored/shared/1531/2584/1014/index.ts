/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1014
 */

"use strict"

function r(e) {
  return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
function o() {
  return (o = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t]
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r]
      }
    }
    return e
  }).apply(this, arguments)
}
function i(e, t) {
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
function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      i(n, true).forEach(function (t) {
        g(e, t, n[t])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      } else {
        i(n).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
    }
  }
  return e
}
function s(e, t) {
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
function c(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
function l(e, t) {
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
function u(e, t, n) {
  if (t) {
    l(e.prototype, t)
  }
  if (n) {
    l(e, n)
  }
  return e
}
function d(e, t) {
  return !t || "object" !== r(t) && "function" !== typeof t ? f(e) : t
}
function p(e) {
  return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}
function f(e) {
  if (undefined === e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return e
}
function h(e, t) {
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
    m(e, t)
  }
}
function m(e, t) {
  return (m = Object.setPrototypeOf || function (e, t) {
    e.__proto__ = t
    return e
  })(e, t)
}
function g(e, t, n) {
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
var _ = require("react")
require("../50/index")
var v = require("./2539/index")
var b = require("./1422")
function y(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n)
    if (r < 128) {
      t += String.fromCharCode(r)
    } else {
      if (r < 2048) {
        t += String.fromCharCode(192 | r >> 6)
        t += String.fromCharCode(128 | 63 & r)
      } else {
        if (r < 55296 || r >= 57344) {
          t += String.fromCharCode(224 | r >> 12)
          t += String.fromCharCode(128 | r >> 6 & 63)
          t += String.fromCharCode(128 | 63 & r)
        } else {
          n++
          r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n))
          t += String.fromCharCode(240 | r >> 18)
          t += String.fromCharCode(128 | r >> 12 & 63)
          t += String.fromCharCode(128 | r >> 6 & 63)
          t += String.fromCharCode(128 | 63 & r)
        }
      }
    }
  }
  return t
}
var E = {
  size: 128,
  level: "L",
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  includeMargin: false
}
function O(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
  var n = []
  e.forEach(function (e, r) {
    var o = null
    e.forEach(function (i, a) {
      if (!i && null !== o) {
        n.push("M".concat(o + t, " ").concat(r + t, "h").concat(a - o, "v1H").concat(o + t, "z"))
        return void (o = null)
      }
      if (a !== e.length - 1) {
        if (i && null === o) {
          o = a
        }
      } else {
        if (!i) {
          return
        }
        if (null === o) {
          n.push("M".concat(a + t, ",").concat(r + t, " h1v1H").concat(a + t, "z"))
        } else {
          n.push("M".concat(o + t, ",").concat(r + t, " h").concat(a + 1 - o, "v1H").concat(o + t, "z"))
        }
      }
    })
  })
  return n.join("")
}
function w(e, t) {
  return e.slice().map(function (e, n) {
    return n < t.y || n >= t.y + t.h ? e : e.map(function (e, n) {
      return (n < t.x || n >= t.x + t.w) && e
    })
  })
}
function C(e, t) {
  var e$imageSettings = e.imageSettings
  var e$size = e.size
  var e$includeMargin = e.includeMargin
  if (null == e$imageSettings) {
    return null
  }
  var i = e$includeMargin ? 4 : 0
  var a = t.length + 2 * i
  var s = Math.floor(.1 * e$size)
  var c = a / e$size
  var l = (e$imageSettings.width || s) * c
  var u = (e$imageSettings.height || s) * c
  var d = null == e$imageSettings.x ? t.length / 2 - l / 2 : e$imageSettings.x * c
  var p = null == e$imageSettings.y ? t.length / 2 - u / 2 : e$imageSettings.y * c
  var f = null
  if (e$imageSettings.excavate) {
    var h = Math.floor(d)
    var m = Math.floor(p)
    f = {
      x: h,
      y: m,
      w: Math.ceil(l + d - h),
      h: Math.ceil(u + p - m)
    }
  }
  return {
    x: d,
    y: p,
    h: u,
    w: l,
    excavation: f
  }
}
var T = function () {
  try {
    new Path2D().addPath(new Path2D())
  } catch (e) {
    return false
  }
  return true
}()
var S = function (e) {
  function t() {
    var e
    var n
    c(this, t)
    for (var arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
      o[i] = arguments[i]
    }
    g(f(n = d(this, (e = p(t)).call.apply(e, [this].concat(o)))), "_canvas", undefined)
    g(f(n), "_image", undefined)
    g(f(n), "state", {
      imgLoaded: false
    })
    g(f(n), "handleImageLoad", function () {
      n.setState({
        imgLoaded: true
      })
    })
    return n
  }
  h(t, e)
  u(t, [{
    key: "componentDidMount",
    value: function () {
      if (this._image && this._image.complete) {
        this.handleImageLoad()
      }
      this.update()
    }
  }, {
    key: "componentWillReceiveProps",
    value: function (e) {
      var /* [auto-meaningful-name] */this$props$imageSettings
      var /* [auto-meaningful-name] */e$imageSettings
      if ((null === (this$props$imageSettings = this.props.imageSettings) || undefined === this$props$imageSettings ? undefined : this$props$imageSettings.src) !== (null === (e$imageSettings = e.imageSettings) || undefined === e$imageSettings ? undefined : e$imageSettings.src)) {
        this.setState({
          imgLoaded: false
        })
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function () {
      this.update()
    }
  }, {
    key: "update",
    value: function () {
      var this$props = this.props
      var this$props$value = this$props.value
      var this$props$size = this$props.size
      var this$props$level = this$props.level
      var this$props$bgColor = this$props.bgColor
      var this$props$fgColor = this$props.fgColor
      var this$props$includeMargin = this$props.includeMargin
      var this$props$imageSettings = this$props.imageSettings
      var c = new v(-1, b[this$props$level])
      c.addData(y(this$props$value))
      c.make()
      if (null != this._canvas) {
        var this$_canvas = this._canvas
        var u = this$_canvas.getContext("2d")
        if (!u) {
          return
        }
        var c$modules = c.modules
        if (null === c$modules) {
          return
        }
        var p = this$props$includeMargin ? 4 : 0
        var f = c$modules.length + 2 * p
        var h = C(this.props, c$modules)
        if (null != this$props$imageSettings && null != h && null != h.excavation) {
          c$modules = w(c$modules, h.excavation)
        }
        var m = window.devicePixelRatio || 1
        this$_canvas.height = this$_canvas.width = this$props$size * m
        var g = this$props$size / f * m
        u.scale(g, g)
        u.fillStyle = this$props$bgColor
        u.fillRect(0, 0, f, f)
        u.fillStyle = this$props$fgColor
        if (T) {
          u.fill(new Path2D(O(c$modules, p)))
        } else {
          c$modules.forEach(function (e, t) {
            e.forEach(function (e, n) {
              if (e) {
                u.fillRect(n + p, t + p, 1, 1)
              }
            })
          })
        }
        if (this.state.imgLoaded && this._image && null != h) {
          u.drawImage(this._image, h.x + p, h.y + p, h.w, h.h)
        }
      }
    }
  }, {
    key: "render",
    value: function () {
      var e = this
      var this$props = this.props
      this$props.value
      var this$props$size = this$props.size
      this$props.level
      this$props.bgColor
      this$props.fgColor
      var this$props$style = this$props.style
      this$props.includeMargin
      var this$props$imageSettings = this$props.imageSettings
      var c = s(this$props, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin", "imageSettings"])
      var l = a({
        height: this$props$size,
        width: this$props$size
      }, this$props$style)
      var u = null
      var d = this$props$imageSettings && this$props$imageSettings.src
      if (null != this$props$imageSettings && null != d) {
        u = _.createElement("img", {
          src: d,
          style: {
            display: "none"
          },
          onLoad: this.handleImageLoad,
          ref: function (t) {
            return e._image = t
          }
        })
      }
      return _.createElement(_.Fragment, null, _.createElement("canvas", o({
        style: l,
        height: this$props$size,
        width: this$props$size,
        ref: function (t) {
          return e._canvas = t
        }
      }, c)), u)
    }
  }])
  return t
}(_.PureComponent)
g(S, "defaultProps", E)
var I = function (e) {
  function t() {
    c(this, t)
    return d(this, p(t).apply(this, arguments))
  }
  h(t, e)
  u(t, [{
    key: "render",
    value: function () {
      var this$props = this.props
      var this$props$value = this$props.value
      var this$props$size = this$props.size
      var this$props$level = this$props.level
      var this$props$bgColor = this$props.bgColor
      var this$props$fgColor = this$props.fgColor
      var this$props$includeMargin = this$props.includeMargin
      var this$props$imageSettings = this$props.imageSettings
      var u = s(this$props, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"])
      var d = new v(-1, b[this$props$level])
      d.addData(y(this$props$value))
      d.make()
      var d$modules = d.modules
      if (null === d$modules) {
        return null
      }
      var f = this$props$includeMargin ? 4 : 0
      var h = d$modules.length + 2 * f
      var m = C(this.props, d$modules)
      var g = null
      if (null != this$props$imageSettings && null != m) {
        if (null != m.excavation) {
          d$modules = w(d$modules, m.excavation)
        }
        g = _.createElement("image", {
          xlinkHref: this$props$imageSettings.src,
          height: m.h,
          width: m.w,
          x: m.x + f,
          y: m.y + f,
          preserveAspectRatio: "none"
        })
      }
      var E = O(d$modules, f)
      return _.createElement("svg", o({
        shapeRendering: "crispEdges",
        height: this$props$size,
        width: this$props$size,
        viewBox: "0 0 ".concat(h, " ").concat(h)
      }, u), _.createElement("path", {
        fill: this$props$bgColor,
        d: "M0,0 h".concat(h, "v").concat(h, "H0z")
      }), _.createElement("path", {
        fill: this$props$fgColor,
        d: E
      }), g)
    }
  }])
  return t
}(_.PureComponent)
g(I, "defaultProps", E)
var A = function (e) {
  var e$renderAs = e.renderAs
  var n = s(e, ["renderAs"])
  var r = "svg" === e$renderAs ? I : S
  return _.createElement(r, n)
}
A.defaultProps = a({
  renderAs: "canvas"
}, E)
module.exports = A
