/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：794
 */

module.exports = function (e, t) {
  "use strict"

  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    }
  }
  var r = n(e)
  var i = n(t)
  function o(e, t) {
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
  function a(e, t, n) {
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
  function s() {
    return (s = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
          e[r] = n[r]
        }
      }
      return e
    }).apply(this, arguments)
  }
  function c(e, t) {
    var n
    var r = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      n = Object.getOwnPropertySymbols(e)
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })
      }
      r.push.apply(r, n)
    }
    return r
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {}
      if (t % 2) {
        c(Object(n), true).forEach(function (t) {
          a(e, t, n[t])
        })
      } else {
        if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        } else {
          c(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
      }
    }
    return e
  }
  function l(e) {
    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }
  function f(e, t) {
    return (f = Object.setPrototypeOf || function (e, t) {
      e.__proto__ = t
      return e
    })(e, t)
  }
  function d(e) {
    if (undefined === e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return e
  }
  function h(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e
      }
    }(e) || function (e, t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = []
        var r = true
        var i = false
        var o = undefined
        try {
          for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = true) {
            ;
          }
        } catch (e) {
          i = true
          o = e
        } finally {
          try {
            if (!(r || null == s.return)) {
              s.return()
            }
          } finally {
            if (i) {
              throw o
            }
          }
        }
        return n
      }
    }(e, t) || p(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }
  function p(e, t) {
    if (e) {
      if ("string" == typeof e) {
        return _(e, t)
      }
      var n = Object.prototype.toString.call(e).slice(8, -1)
      if ("Object" === n && e.constructor) {
        n = e.constructor.name
      }
      return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : undefined
    }
  }
  function _(e, t) {
    if (null == t || t > e.length) {
      t = e.length
    }
    for (var n = 0, r = new Array(t); n < t; n++) {
      r[n] = e[n]
    }
    return r
  }
  function A(e, t) {
    return new Promise(function (n, r) {
      var i
      var o = new Image()
      o.onload = function () {
        return n(o)
      }
      o.onerror = r
      if (0 == (null !== (i = e) && !!i.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i)) && t) {
        o.crossOrigin = t
      }
      o.src = e
    })
  }
  var g
  var v = !("undefined" == typeof window || "undefined" == typeof navigator || !("ontouchstart" in window || 0 < navigator.msMaxTouchPoints))
  var m = "undefined" != typeof File
  var y = {
    touch: {
      react: {
        down: "onTouchStart",
        mouseDown: "onMouseDown",
        drag: "onTouchMove",
        move: "onTouchMove",
        mouseMove: "onMouseMove",
        up: "onTouchEnd",
        mouseUp: "onMouseUp"
      },
      native: {
        down: "touchstart",
        mouseDown: "mousedown",
        drag: "touchmove",
        move: "touchmove",
        mouseMove: "mousemove",
        up: "touchend",
        mouseUp: "mouseup"
      }
    },
    desktop: {
      react: {
        down: "onMouseDown",
        drag: "onDragOver",
        move: "onMouseMove",
        up: "onMouseUp"
      },
      native: {
        down: "mousedown",
        drag: "dragStart",
        move: "mousemove",
        up: "mouseup"
      }
    }
  }
  var b = v ? y.touch : y.desktop
  var w = "undefined" != typeof window && window.devicePixelRatio ? window.devicePixelRatio : 1
  var E = {
    x: .5,
    y: .5
  }
  var x = function () {
    !function (e, t) {
      if ("function" != typeof t && null !== t) {
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
        f(e, t)
      }
    }(r, i.default.Component)
    var e
    var t
    var n = function (t) {
      var n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) {
          return false
        }
        if (Reflect.construct.sham) {
          return false
        }
        if ("function" == typeof Proxy) {
          return true
        }
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function () {}))
          return true
        } catch (e) {
          return false
        }
      }()
      return function () {
        var /* [auto-meaningful-name] */lThis$constructor
        var r
        var i
        var o = l(t)
        r = this
        return !(i = n ? (lThis$constructor = l(this).constructor, Reflect.construct(o, arguments, lThis$constructor)) : o.apply(this, arguments)) || "object" != typeof i && "function" != typeof i ? d(r) : i
      }
    }(r)
    function r(e) {
      var t;
      (function (e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      })(this, r)
      a(d(t = n.call(this, e)), "state", {
        drag: false,
        my: null,
        mx: null,
        image: E
      })
      a(d(t), "handleImageReady", function (e) {
        var n = t.getInitialSize(e.width, e.height)
        n.resource = e
        n.x = .5
        n.y = .5
        n.backgroundColor = t.props.backgroundColor
        t.setState({
          drag: false,
          image: n
        }, t.props.onImageReady)
        t.props.onLoadSuccess(n)
      })
      a(d(t), "clearImage", function () {
        t.canvas.getContext("2d").clearRect(0, 0, t.canvas.width, t.canvas.height)
        t.setState({
          image: E
        })
      })
      a(d(t), "handleMouseDown", function (e) {
        (e = e || window.event).preventDefault()
        t.setState({
          drag: true,
          mx: null,
          my: null
        })
      })
      a(d(t), "handleMouseUp", function () {
        if (t.state.drag) {
          t.setState({
            drag: false
          })
          t.props.onMouseUp()
        }
      })
      a(d(t), "handleMouseMove", function (e) {
        var n
        var r
        var i
        var o
        var a
        var s
        var c
        var l
        var f
        var d
        var h
        var p
        var _
        var A
        var g
        var v
        e = e || window.event
        if (false !== t.state.drag) {
          e.preventDefault()
          i = {
            mx: n = e.targetTouches ? e.targetTouches[0].pageX : e.clientX,
            my: r = e.targetTouches ? e.targetTouches[0].pageY : e.clientY
          }
          v = t.props.rotate
          v = (v %= 360) < 0 ? v + 360 : v
          if (t.state.mx && t.state.my) {
            o = t.state.mx - n
            a = t.state.my - r
            s = t.state.image.width * t.props.scale
            c = t.state.image.height * t.props.scale
            f = (l = t.getCroppingRect()).x
            d = l.y
            f *= s
            d *= c
            h = function (e) {
              return e * (Math.PI / 180)
            }
            p = Math.cos(h(v))
            A = d + -o * (_ = Math.sin(h(v))) + a * p
            g = {
              x: (f + o * p + a * _) / s + 1 / t.props.scale * t.getXScale() / 2,
              y: A / c + 1 / t.props.scale * t.getYScale() / 2
            }
            t.props.onPositionChange(g)
            i.image = u(u({}, t.state.image), g)
          }
          t.setState(i)
          t.props.onMouseMove(e)
        }
      })
      a(d(t), "setCanvas", function (e) {
        t.canvas = e
      })
      t.canvas = null
      return t
    }
    e = r
    if (t = [
      {
        key: "componentDidMount",
        value: function () {
          if (this.props.disableHiDPIScaling) {
            w = 1
          }
          var e
          var /* [auto-meaningful-name] */b$native
          var n = this.canvas.getContext("2d")
          if (this.props.image) {
            this.loadImage(this.props.image)
          }
          this.paint(n)
          if (document) {
            e = !!function () {
              var e = false
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = true
                  }
                })
                window.addEventListener("test", t, t)
                window.removeEventListener("test", t, t)
              } catch (t) {
                e = false
              }
              return e
            }() && {
              passive: false
            }
            b$native = b.native
            document.addEventListener(b$native.move, this.handleMouseMove, e)
            document.addEventListener(b$native.up, this.handleMouseUp, e)
            if (v) {
              document.addEventListener(b$native.mouseMove, this.handleMouseMove, e)
              document.addEventListener(b$native.mouseUp, this.handleMouseUp, e)
            }
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function (e, t) {
          if (this.props.image && this.props.image !== e.image || this.props.width !== e.width || this.props.height !== e.height || this.props.backgroundColor !== e.backgroundColor) {
            this.loadImage(this.props.image)
          } else {
            if (!(this.props.image || t.image === E)) {
              this.clearImage()
            }
          }
          var n = this.canvas.getContext("2d")
          n.clearRect(0, 0, this.canvas.width, this.canvas.height)
          this.paint(n)
          this.paintImage(n, this.state.image, this.props.border)
          if (!(e.image === this.props.image && e.width === this.props.width && e.height === this.props.height && e.position === this.props.position && e.scale === this.props.scale && e.rotate === this.props.rotate && t.my === this.state.my && t.mx === this.state.mx && t.image.x === this.state.image.x && t.image.y === this.state.image.y && t.backgroundColor === this.state.backgroundColor)) {
            this.props.onImageChange()
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          var /* [auto-meaningful-name] */b$native
          if (document) {
            b$native = b.native
            document.removeEventListener(b$native.move, this.handleMouseMove, false)
            document.removeEventListener(b$native.up, this.handleMouseUp, false)
            if (v) {
              document.removeEventListener(b$native.mouseMove, this.handleMouseMove, false)
              document.removeEventListener(b$native.mouseUp, this.handleMouseUp, false)
            }
          }
        }
      }, {
        key: "isVertical",
        value: function () {
          return !this.props.disableCanvasRotation && this.props.rotate % 180 != 0
        }
      }, {
        key: "getBorders",
        value: function (e) {
          var t = 0 < arguments.length && undefined !== e ? e : this.props.border
          return Array.isArray(t) ? t : [t, t]
        }
      }, {
        key: "getDimensions",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$width = this$props.width
          var /* [auto-meaningful-name] */this$props$height = this$props.height
          var /* [auto-meaningful-name] */this$props$rotate = this$props.rotate
          var /* [auto-meaningful-name] */this$props$border = this$props.border
          var o = {}
          var a = h(this.getBorders(this$props$border), 2)
          var s = a[0]
          var c = a[1]
          var u = this$props$width
          var l = this$props$height
          if (this.isVertical()) {
            o.width = l
            o.height = u
          } else {
            o.width = u
            o.height = l
          }
          o.width += 2 * s
          o.height += 2 * c
          return {
            canvas: o,
            rotate: this$props$rotate,
            width: this$props$width,
            height: this$props$height,
            border: this$props$border
          }
        }
      }, {
        key: "getImage",
        value: function () {
          var e = this.getCroppingRect()
          var /* [auto-meaningful-name] */this$state$image = this.state.image
          e.x *= this$state$image.resource.width
          e.y *= this$state$image.resource.height
          e.width *= this$state$image.resource.width
          e.height *= this$state$image.resource.height
          var n = document.createElement("canvas")
          if (this.isVertical()) {
            n.width = e.height
            n.height = e.width
          } else {
            n.width = e.width
            n.height = e.height
          }
          var r = n.getContext("2d")
          r.translate(n.width / 2, n.height / 2)
          r.rotate(this.props.rotate * Math.PI / 180)
          r.translate(-n.width / 2, -n.height / 2)
          if (this.isVertical()) {
            r.translate((n.width - n.height) / 2, (n.height - n.width) / 2)
          }
          if (this$state$image.backgroundColor) {
            r.fillStyle = this$state$image.backgroundColor
            r.fillRect(-e.x, -e.y, this$state$image.resource.width, this$state$image.resource.height)
          }
          r.drawImage(this$state$image.resource, -e.x, -e.y)
          return n
        }
      }, {
        key: "getImageScaledToCanvas",
        value: function () {
          var e = this.getDimensions()
          var /* [auto-meaningful-name] */e$width = e.width
          var /* [auto-meaningful-name] */e$height = e.height
          var r = document.createElement("canvas")
          if (this.isVertical()) {
            r.width = e$height
            r.height = e$width
          } else {
            r.width = e$width
            r.height = e$height
          }
          this.paintImage(r.getContext("2d"), this.state.image, 0, 1)
          return r
        }
      }, {
        key: "getXScale",
        value: function () {
          var e = this.props.width / this.props.height
          var t = this.state.image.width / this.state.image.height
          return Math.min(1, e / t)
        }
      }, {
        key: "getYScale",
        value: function () {
          var e = this.props.height / this.props.width
          var t = this.state.image.height / this.state.image.width
          return Math.min(1, e / t)
        }
      }, {
        key: "getCroppingRect",
        value: function () {
          var e = this.props.position || {
            x: this.state.image.x,
            y: this.state.image.y
          }
          var t = 1 / this.props.scale * this.getXScale()
          var n = 1 / this.props.scale * this.getYScale()
          var r = {
            x: e.x - t / 2,
            y: e.y - n / 2,
            width: t,
            height: n
          }
          var i = 0
          var o = 1 - r.width
          var a = 0
          var s = 1 - r.height
          if (this.props.disableBoundaryChecks || 1 < t || 1 < n) {
            i = -r.width
            a = -r.height
            s = o = 1
          }
          return u(u({}, r), {}, {
            x: Math.max(i, Math.min(r.x, o)),
            y: Math.max(a, Math.min(r.y, s))
          })
        }
      }, {
        key: "loadImage",
        value: function (e) {
          var t
          if (m && e instanceof File) {
            this.loadingImage = (t = e, new Promise(function (e, n) {
              var r = new FileReader()
              r.onload = function (t) {
                try {
                  var r = A(t.target.result)
                  e(r)
                } catch (t) {
                  n(t)
                }
              }
              r.readAsDataURL(t)
            }).then(this.handleImageReady).catch(this.props.onLoadFailure))
          } else {
            if ("string" == typeof e) {
              this.loadingImage = A(e, this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure)
            }
          }
        }
      }, {
        key: "getInitialSize",
        value: function (e, t) {
          var n
          var r
          var i = this.getDimensions()
          if (t / e < i.height / i.width) {
            r = e * ((n = this.getDimensions().height) / t)
          } else {
            n = t * ((r = this.getDimensions().width) / e)
          }
          return {
            height: n,
            width: r
          }
        }
      }, {
        key: "paintImage",
        value: function (e, t, n, r) {
          var i
          var o = 3 < arguments.length && undefined !== r ? r : w
          if (t.resource) {
            i = this.calculatePosition(t, n)
            e.save()
            e.translate(e.canvas.width / 2, e.canvas.height / 2)
            e.rotate(this.props.rotate * Math.PI / 180)
            e.translate(-e.canvas.width / 2, -e.canvas.height / 2)
            if (this.isVertical()) {
              e.translate((e.canvas.width - e.canvas.height) / 2, (e.canvas.height - e.canvas.width) / 2)
            }
            e.scale(o, o)
            e.globalCompositeOperation = "destination-over"
            e.drawImage(t.resource, i.x, i.y, i.width, i.height)
            if (t.backgroundColor) {
              e.fillStyle = t.backgroundColor
              e.fillRect(i.x, i.y, i.width, i.height)
            }
            e.restore()
          }
        }
      }, {
        key: "calculatePosition",
        value: function (e, t) {
          e = e || this.state.image
          var n = h(this.getBorders(t), 2)
          var r = n[0]
          var i = n[1]
          var o = this.getCroppingRect()
          var a = e.width * this.props.scale
          var s = e.height * this.props.scale
          var c = -o.x * a
          var u = -o.y * s
          if (this.isVertical()) {
            c += i
            u += r
          } else {
            c += r
            u += i
          }
          return {
            x: c,
            y: u,
            height: s,
            width: a
          }
        }
      }, {
        key: "paint",
        value: function (e) {
          e.save()
          e.scale(w, w)
          e.translate(0, 0)
          e.fillStyle = "rgba(" + this.props.color.slice(0, 4).join(",") + ")"
          var t
          var n
          var r
          var i
          var o
          var a
          var s
          var c
          var /* [auto-meaningful-name] */this$props$borderRadius = this.props.borderRadius
          var l = this.getDimensions()
          var f = h(this.getBorders(l.border), 2)
          var d = f[0]
          var p = f[1]
          var /* [auto-meaningful-name] */l$canvas$height = l.canvas.height
          var /* [auto-meaningful-name] */l$canvas$width = l.canvas.width
          this$props$borderRadius = Math.max(this$props$borderRadius, 0)
          this$props$borderRadius = Math.min(this$props$borderRadius, l$canvas$width / 2 - d, l$canvas$height / 2 - p)
          e.beginPath()
          t = e
          i = l$canvas$width - 2 * (n = d)
          o = l$canvas$height - 2 * (r = p)
          if (0 === (a = this$props$borderRadius)) {
            t.rect(n, r, i, o)
          } else {
            s = i - a
            c = o - a
            t.translate(n, r)
            t.arc(a, a, a, Math.PI, 1.5 * Math.PI)
            t.lineTo(s, 0)
            t.arc(s, a, a, 1.5 * Math.PI, 2 * Math.PI)
            t.lineTo(i, c)
            t.arc(s, c, a, 2 * Math.PI, .5 * Math.PI)
            t.lineTo(a, o)
            t.arc(a, c, a, .5 * Math.PI, Math.PI)
            t.translate(-n, -r)
          }
          e.rect(l$canvas$width, 0, -l$canvas$width, l$canvas$height)
          e.fill("evenodd")
          e.restore()
        }
      }, {
        key: "render",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          this$props.scale
          this$props.rotate
          this$props.image
          this$props.border
          this$props.borderRadius
          this$props.width
          this$props.height
          this$props.position
          this$props.color
          this$props.backgroundColor
          var /* [auto-meaningful-name] */this$props$style = this$props.style
          this$props.crossOrigin
          this$props.onLoadFailure
          this$props.onLoadSuccess
          this$props.onImageReady
          this$props.onImageChange
          this$props.onMouseUp
          this$props.onMouseMove
          this$props.onPositionChange
          this$props.disableBoundaryChecks
          this$props.disableHiDPIScaling
          this$props.disableCanvasRotation
          var n = function (e, t) {
            if (null == e) {
              return {}
            }
            var n
            var r = function (e, t) {
              if (null == e) {
                return {}
              }
              for (var n, r = {}, i = Object.keys(e), o = 0; o < i.length; o++) {
                n = i[o]
                if (!(0 <= t.indexOf(n))) {
                  r[n] = e[n]
                }
              }
              return r
            }(e, t)
            if (Object.getOwnPropertySymbols) {
              for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++) {
                n = i[o]
                if (!(0 <= t.indexOf(n))) {
                  if (Object.prototype.propertyIsEnumerable.call(e, n)) {
                    r[n] = e[n]
                  }
                }
              }
            }
            return r
          }(this$props, ["scale", "rotate", "image", "border", "borderRadius", "width", "height", "position", "color", "backgroundColor", "style", "crossOrigin", "onLoadFailure", "onLoadSuccess", "onImageReady", "onImageChange", "onMouseUp", "onMouseMove", "onPositionChange", "disableBoundaryChecks", "disableHiDPIScaling", "disableCanvasRotation"])
          var r = this.getDimensions()
          var o = {
            width: r.canvas.width,
            height: r.canvas.height,
            cursor: this.state.drag ? "grabbing" : "grab",
            touchAction: "none"
          }
          var a = {
            width: r.canvas.width * w,
            height: r.canvas.height * w,
            style: u(u({}, o), this$props$style)
          }
          a[b.react.down] = this.handleMouseDown
          if (v) {
            a[b.react.mouseDown] = this.handleMouseDown
          }
          return i.default.createElement("canvas", s({
            ref: this.setCanvas
          }, a, n))
        }
      }
    ]) {
      o(e.prototype, t)
    }
    return r
  }()
  a(x, "propTypes", {
    scale: r.default.number,
    rotate: r.default.number,
    image: r.default.oneOfType([r.default.string].concat(function (e) {
      if (Array.isArray(e)) {
        return _(e)
      }
    }(g = m ? [r.default.instanceOf(File)] : []) || function (e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        return Array.from(e)
      }
    }(g) || p(g) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }())),
    border: r.default.oneOfType([r.default.number, r.default.arrayOf(r.default.number)]),
    borderRadius: r.default.number,
    width: r.default.number,
    height: r.default.number,
    position: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    color: r.default.arrayOf(r.default.number),
    backgroundColor: r.default.string,
    crossOrigin: r.default.oneOf(["", "anonymous", "use-credentials"]),
    onLoadFailure: r.default.func,
    onLoadSuccess: r.default.func,
    onImageReady: r.default.func,
    onImageChange: r.default.func,
    onMouseUp: r.default.func,
    onMouseMove: r.default.func,
    onPositionChange: r.default.func,
    disableBoundaryChecks: r.default.bool,
    disableHiDPIScaling: r.default.bool,
    disableCanvasRotation: r.default.bool
  })
  a(x, "defaultProps", {
    scale: 1,
    rotate: 0,
    border: 25,
    borderRadius: 0,
    width: 200,
    height: 200,
    color: [0, 0, 0, .5],
    onLoadFailure: function () {},
    onLoadSuccess: function () {},
    onImageReady: function () {},
    onImageChange: function () {},
    onMouseUp: function () {},
    onMouseMove: function () {},
    onPositionChange: function () {},
    disableBoundaryChecks: false,
    disableHiDPIScaling: false,
    disableCanvasRotation: true
  })
  return x
}(require("../50/index"), require("react"))
