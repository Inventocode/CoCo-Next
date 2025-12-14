/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1221
 */

"use strict"

var r = require("react")
var o = function () {
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
var i = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var a = {
  base: {
    position: "absolute",
    userSelect: "none",
    MsUserSelect: "none"
  },
  top: {
    width: "100%",
    height: "10px",
    top: "-5px",
    left: "0px",
    cursor: "row-resize"
  },
  right: {
    width: "10px",
    height: "100%",
    top: "0px",
    right: "-5px",
    cursor: "col-resize"
  },
  bottom: {
    width: "100%",
    height: "10px",
    bottom: "-5px",
    left: "0px",
    cursor: "row-resize"
  },
  left: {
    width: "10px",
    height: "100%",
    top: "0px",
    left: "-5px",
    cursor: "col-resize"
  },
  topRight: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-10px",
    top: "-10px",
    cursor: "ne-resize"
  },
  bottomRight: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-10px",
    bottom: "-10px",
    cursor: "se-resize"
  },
  bottomLeft: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "-10px",
    bottom: "-10px",
    cursor: "sw-resize"
  },
  topLeft: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "-10px",
    top: "-10px",
    cursor: "nw-resize"
  }
}
var s = function (e) {
  return r.createElement("div", {
    className: e.className,
    style: i({}, a.base, a[e.direction], e.replaceStyles || {}),
    onMouseDown: function (t) {
      e.onResizeStart(t, e.direction)
    },
    onTouchStart: function (t) {
      e.onResizeStart(t, e.direction)
    }
  }, e.children)
}
var c = {
  userSelect: "none",
  MozUserSelect: "none",
  WebkitUserSelect: "none",
  MsUserSelect: "none"
}
var l = {
  userSelect: "auto",
  MozUserSelect: "auto",
  WebkitUserSelect: "auto",
  MsUserSelect: "auto"
}
var u = function (e, t, n) {
  return Math.max(Math.min(e, n), t)
}
var d = function (e, t) {
  return Math.round(e / t) * t
}
var p = function (e, t) {
  return t.reduce(function (t, n) {
    return Math.abs(n - e) < Math.abs(t - e) ? n : t
  })
}
var f = function (e, t) {
  return e.substr(e.length - t.length, t.length) === t
}
var h = function (e) {
  return "auto" === e.toString() || f(e.toString(), "px") || f(e.toString(), "%") || f(e.toString(), "vh") || f(e.toString(), "vw") || f(e.toString(), "vmax") || f(e.toString(), "vmin") ? e.toString() : e + "px"
}
var m = ["style", "className", "grid", "snap", "bounds", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio"]
var g = function (e) {
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
    n.state = {
      isResizing: false,
      resizeCursor: "auto",
      width: "undefined" === typeof (n.propsSize && n.propsSize.width) ? "auto" : n.propsSize && n.propsSize.width,
      height: "undefined" === typeof (n.propsSize && n.propsSize.height) ? "auto" : n.propsSize && n.propsSize.height,
      direction: "right",
      original: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }
    }
    n.updateExtendsProps(e)
    n.onResizeStart = n.onResizeStart.bind(n)
    n.onMouseMove = n.onMouseMove.bind(n)
    n.onMouseUp = n.onMouseUp.bind(n)
    if ("undefined" !== typeof window) {
      window.addEventListener("mouseup", n.onMouseUp)
      window.addEventListener("mousemove", n.onMouseMove)
      window.addEventListener("mouseleave", n.onMouseUp)
      window.addEventListener("touchmove", n.onMouseMove)
      window.addEventListener("touchend", n.onMouseUp)
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
  o(t, [
    {
      key: "updateExtendsProps",
      value: function (e) {
        this.extendsProps = Object.keys(e).reduce(function (t, n) {
          if (!(-1 !== m.indexOf(n))) {
            t[n] = e[n]
          }
          return t
        }, {})
      }
    }, {
      key: "getParentSize",
      value: function () {
        var /* [auto-meaningful-name] */this$base = this.base
        if (!this$base) {
          return {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
        var t = false
        var /* [auto-meaningful-name] */this$parentNode$style$flexWrap = this.parentNode.style.flexWrap
        var /* [auto-meaningful-name] */this$base$style$minWidth = this$base.style.minWidth
        if ("wrap" !== this$parentNode$style$flexWrap) {
          t = true
          this.parentNode.style.flexWrap = "wrap"
        }
        this$base.style.position = "relative"
        this$base.style.minWidth = "100%"
        var o = {
          width: this$base.offsetWidth,
          height: this$base.offsetHeight
        }
        this$base.style.position = "absolute"
        if (t) {
          this.parentNode.style.flexWrap = this$parentNode$style$flexWrap
        }
        this$base.style.minWidth = this$base$style$minWidth
        return o
      }
    }, {
      key: "componentDidMount",
      value: function () {
        var /* [auto-meaningful-name] */this$size = this.size
        this.setState({
          width: this.state.width || this$size.width,
          height: this.state.height || this$size.height
        })
        var /* [auto-meaningful-name] */this$parentNode = this.parentNode
        if (this$parentNode instanceof HTMLElement && !this.base) {
          var n = document.createElement("div")
          n.style.width = "100%"
          n.style.height = "100%"
          n.style.position = "absolute"
          n.style.transform = "scale(0, 0)"
          n.style.left = "0"
          n.style.flex = "0"
          if (n.classList) {
            n.classList.add("__resizable_base__")
          } else {
            n.className += "__resizable_base__"
          }
          this$parentNode.appendChild(n)
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function (e) {
        this.updateExtendsProps(e)
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        if ("undefined" !== typeof window) {
          window.removeEventListener("mouseup", this.onMouseUp)
          window.removeEventListener("mousemove", this.onMouseMove)
          window.removeEventListener("mouseleave", this.onMouseUp)
          window.removeEventListener("touchmove", this.onMouseMove)
          window.removeEventListener("touchend", this.onMouseUp)
          var /* [auto-meaningful-name] */this$parentNode = this.parentNode
          var /* [auto-meaningful-name] */this$base = this.base
          if (!this$base || !this$parentNode) {
            return
          }
          if (!(this$parentNode instanceof HTMLElement) || !(this$base instanceof Node)) {
            return
          }
          this$parentNode.removeChild(this$base)
        }
      }
    }, {
      key: "calculateNewSize",
      value: function (e, t) {
        var n = this.propsSize && this.propsSize[t]
        return "auto" !== this.state[t] || this.state.original[t] !== e || "undefined" !== typeof n && "auto" !== n ? e : "auto"
      }
    }, {
      key: "onResizeStart",
      value: function (e, t) {
        var n = 0
        var r = 0
        if (e.nativeEvent instanceof MouseEvent) {
          n = e.nativeEvent.clientX
          r = e.nativeEvent.clientY
          if (3 === e.nativeEvent.which) {
            return
          }
        } else if (e.nativeEvent instanceof TouchEvent) {
          n = e.nativeEvent.touches[0].clientX
          r = e.nativeEvent.touches[0].clientY
        }
        if (this.props.onResizeStart) {
          this.props.onResizeStart(e, t, this.resizable)
        }
        if (this.props.size) {
          if ("undefined" !== typeof this.props.size.height && this.props.size.height !== this.state.height) {
            this.setState({
              height: this.props.size.height
            })
          }
          if ("undefined" !== typeof this.props.size.width && this.props.size.width !== this.state.width) {
            this.setState({
              width: this.props.size.width
            })
          }
        }
        this.setState({
          original: {
            x: n,
            y: r,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: true,
          resizeCursor: window.getComputedStyle(e.target).cursor,
          direction: t
        })
      }
    }, {
      key: "onMouseMove",
      value: function (e) {
        if (this.state.isResizing) {
          var t = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
          var n = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY
          var /* [auto-meaningful-name] */this$state = this.state
          var /* [auto-meaningful-name] */this$state$direction = this$state.direction
          var /* [auto-meaningful-name] */this$state$original = this$state.original
          var /* [auto-meaningful-name] */this$state$width = this$state.width
          var /* [auto-meaningful-name] */this$state$height = this$state.height
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$lockAspectRatio = this$props.lockAspectRatio
          var /* [auto-meaningful-name] */this$props$lockAspectRatioExtraHeight = this$props.lockAspectRatioExtraHeight
          var /* [auto-meaningful-name] */this$props$lockAspectRatioExtraWidth = this$props.lockAspectRatioExtraWidth
          var g = this.props.scale || 1
          var /* [auto-meaningful-name] */_this$props = this.props
          var /* [auto-meaningful-name] */_this$props$maxWidth = _this$props.maxWidth
          var /* [auto-meaningful-name] */_this$props$maxHeight = _this$props.maxHeight
          var /* [auto-meaningful-name] */_this$props$minWidth = _this$props.minWidth
          var /* [auto-meaningful-name] */_this$props$minHeight = _this$props.minHeight
          var O = this.props.resizeRatio || 1
          var w = this.getParentSize()
          if (_this$props$maxWidth && "string" === typeof _this$props$maxWidth && f(_this$props$maxWidth, "%")) {
            var C = Number(_this$props$maxWidth.replace("%", "")) / 100
            _this$props$maxWidth = w.width * C
          }
          if (_this$props$maxHeight && "string" === typeof _this$props$maxHeight && f(_this$props$maxHeight, "%")) {
            var T = Number(_this$props$maxHeight.replace("%", "")) / 100
            _this$props$maxHeight = w.height * T
          }
          if (_this$props$minWidth && "string" === typeof _this$props$minWidth && f(_this$props$minWidth, "%")) {
            var S = Number(_this$props$minWidth.replace("%", "")) / 100
            _this$props$minWidth = w.width * S
          }
          if (_this$props$minHeight && "string" === typeof _this$props$minHeight && f(_this$props$minHeight, "%")) {
            var A = Number(_this$props$minHeight.replace("%", "")) / 100
            _this$props$minHeight = w.height * A
          }
          _this$props$maxWidth = "undefined" === typeof _this$props$maxWidth ? undefined : Number(_this$props$maxWidth)
          _this$props$maxHeight = "undefined" === typeof _this$props$maxHeight ? undefined : Number(_this$props$maxHeight)
          _this$props$minWidth = "undefined" === typeof _this$props$minWidth ? undefined : Number(_this$props$minWidth)
          _this$props$minHeight = "undefined" === typeof _this$props$minHeight ? undefined : Number(_this$props$minHeight)
          var I = "number" === typeof this$props$lockAspectRatio ? this$props$lockAspectRatio : this$state$original.width / this$state$original.height
          var /* [auto-meaningful-name] */this$state$original$width = this$state$original.width
          var /* [auto-meaningful-name] */this$state$original$height = this$state$original.height
          if (/right/i.test(this$state$direction)) {
            this$state$original$width = this$state$original.width + (t - this$state$original.x) * O / g
            if (this$props$lockAspectRatio) {
              this$state$original$height = (this$state$original$width - this$props$lockAspectRatioExtraWidth) / I + this$props$lockAspectRatioExtraHeight
            }
          }
          if (/left/i.test(this$state$direction)) {
            this$state$original$width = this$state$original.width - (t - this$state$original.x) * O / g
            if (this$props$lockAspectRatio) {
              this$state$original$height = (this$state$original$width - this$props$lockAspectRatioExtraWidth) / I + this$props$lockAspectRatioExtraHeight
            }
          }
          if (/bottom/i.test(this$state$direction)) {
            this$state$original$height = this$state$original.height + (n - this$state$original.y) * O / g
            if (this$props$lockAspectRatio) {
              this$state$original$width = (this$state$original$height - this$props$lockAspectRatioExtraHeight) * I + this$props$lockAspectRatioExtraWidth
            }
          }
          if (/top/i.test(this$state$direction)) {
            this$state$original$height = this$state$original.height - (n - this$state$original.y) * O / g
            if (this$props$lockAspectRatio) {
              this$state$original$width = (this$state$original$height - this$props$lockAspectRatioExtraHeight) * I + this$props$lockAspectRatioExtraWidth
            }
          }
          if ("parent" === this.props.bounds) {
            var /* [auto-meaningful-name] */this$parentNode = this.parentNode
            if (this$parentNode instanceof HTMLElement) {
              var k = this$parentNode.getBoundingClientRect()
              var /* [auto-meaningful-name] */k$left = k.left
              var /* [auto-meaningful-name] */k$top = k.top
              var M = this.resizable.getBoundingClientRect()
              var /* [auto-meaningful-name] */M$left = M.left
              var /* [auto-meaningful-name] */M$top = M.top
              var B = this$parentNode.offsetWidth + (k$left - M$left)
              var F = this$parentNode.offsetHeight + (k$top - M$top)
              _this$props$maxWidth = _this$props$maxWidth && _this$props$maxWidth < B ? _this$props$maxWidth : B
              _this$props$maxHeight = _this$props$maxHeight && _this$props$maxHeight < F ? _this$props$maxHeight : F
            }
          } else if ("window" === this.props.bounds) {
            if ("undefined" !== typeof window) {
              var G = this.resizable.getBoundingClientRect()
              var /* [auto-meaningful-name] */G$left = G.left
              var /* [auto-meaningful-name] */G$top = G.top
              var H = window.innerWidth - G$left
              var V = window.innerHeight - G$top
              _this$props$maxWidth = _this$props$maxWidth && _this$props$maxWidth < H ? _this$props$maxWidth : H
              _this$props$maxHeight = _this$props$maxHeight && _this$props$maxHeight < V ? _this$props$maxHeight : V
            }
          } else if (this.props.bounds instanceof HTMLElement) {
            var z = this.props.bounds.getBoundingClientRect()
            var /* [auto-meaningful-name] */z$left = z.left
            var /* [auto-meaningful-name] */z$top = z.top
            var q = this.resizable.getBoundingClientRect()
            var /* [auto-meaningful-name] */q$left = q.left
            var /* [auto-meaningful-name] */q$top = q.top
            if (!(this.props.bounds instanceof HTMLElement)) {
              return
            }
            var Z = this.props.bounds.offsetWidth + (z$left - q$left)
            var J = this.props.bounds.offsetHeight + (z$top - q$top)
            _this$props$maxWidth = _this$props$maxWidth && _this$props$maxWidth < Z ? _this$props$maxWidth : Z
            _this$props$maxHeight = _this$props$maxHeight && _this$props$maxHeight < J ? _this$props$maxHeight : J
          }
          var $ = "undefined" === typeof _this$props$minWidth ? 10 : _this$props$minWidth
          var ee = "undefined" === typeof _this$props$maxWidth || _this$props$maxWidth < 0 ? this$state$original$width : _this$props$maxWidth
          var te = "undefined" === typeof _this$props$minHeight ? 10 : _this$props$minHeight
          var ne = "undefined" === typeof _this$props$maxHeight || _this$props$maxHeight < 0 ? this$state$original$height : _this$props$maxHeight
          if (this$props$lockAspectRatio) {
            var re = (te - this$props$lockAspectRatioExtraHeight) * I + this$props$lockAspectRatioExtraWidth
            var oe = (ne - this$props$lockAspectRatioExtraHeight) * I + this$props$lockAspectRatioExtraWidth
            var ie = ($ - this$props$lockAspectRatioExtraWidth) / I + this$props$lockAspectRatioExtraHeight
            var ae = (ee - this$props$lockAspectRatioExtraWidth) / I + this$props$lockAspectRatioExtraHeight
            var se = Math.max($, re)
            var ce = Math.min(ee, oe)
            var le = Math.max(te, ie)
            var ue = Math.min(ne, ae)
            this$state$original$width = u(this$state$original$width, se, ce)
            this$state$original$height = u(this$state$original$height, le, ue)
          } else {
            this$state$original$width = u(this$state$original$width, $, ee)
            this$state$original$height = u(this$state$original$height, te, ne)
          }
          if (this.props.grid) {
            this$state$original$width = d(this$state$original$width, this.props.grid[0])
          }
          if (this.props.grid) {
            this$state$original$height = d(this$state$original$height, this.props.grid[1])
          }
          if (this.props.snap && this.props.snap.x) {
            this$state$original$width = p(this$state$original$width, this.props.snap.x)
          }
          if (this.props.snap && this.props.snap.y) {
            this$state$original$height = p(this$state$original$height, this.props.snap.y)
          }
          var de = {
            width: this$state$original$width - this$state$original.width,
            height: this$state$original$height - this$state$original.height
          }
          if (this$state$width && "string" === typeof this$state$width && f(this$state$width, "%")) {
            this$state$original$width = this$state$original$width / w.width * 100 + "%"
          }
          if (this$state$height && "string" === typeof this$state$height && f(this$state$height, "%")) {
            this$state$original$height = this$state$original$height / w.height * 100 + "%"
          }
          this.setState({
            width: this.calculateNewSize(this$state$original$width, "width"),
            height: this.calculateNewSize(this$state$original$height, "height")
          })
          if (this.props.onResize) {
            this.props.onResize(e, this$state$direction, this.resizable, de)
          }
        }
      }
    }, {
      key: "onMouseUp",
      value: function (e) {
        var /* [auto-meaningful-name] */this$state = this.state
        var /* [auto-meaningful-name] */this$state$isResizing = this$state.isResizing
        var /* [auto-meaningful-name] */this$state$direction = this$state.direction
        var /* [auto-meaningful-name] */this$state$original = this$state.original
        if (this$state$isResizing) {
          var i = {
            width: this.size.width - this$state$original.width,
            height: this.size.height - this$state$original.height
          }
          if (this.props.onResizeStop) {
            this.props.onResizeStop(e, this$state$direction, this.resizable, i)
          }
          if (this.props.size) {
            this.setState(this.props.size)
          }
          this.setState({
            isResizing: false,
            resizeCursor: "auto"
          })
        }
      }
    }, {
      key: "updateSize",
      value: function (e) {
        this.setState({
          width: e.width,
          height: e.height
        })
      }
    }, {
      key: "renderResizer",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$enable = this$props.enable
        var /* [auto-meaningful-name] */this$props$handleStyles = this$props.handleStyles
        var /* [auto-meaningful-name] */this$props$handleClasses = this$props.handleClasses
        var /* [auto-meaningful-name] */this$props$handleWrapperStyle = this$props.handleWrapperStyle
        var /* [auto-meaningful-name] */this$props$handleWrapperClass = this$props.handleWrapperClass
        var /* [auto-meaningful-name] */this$props$handleComponent = this$props.handleComponent
        if (!this$props$enable) {
          return null
        }
        var u = Object.keys(this$props$enable).map(function (t) {
          return false !== this$props$enable[t] ? r.createElement(s, {
            key: t,
            direction: t,
            onResizeStart: e.onResizeStart,
            replaceStyles: this$props$handleStyles && this$props$handleStyles[t],
            className: this$props$handleClasses && this$props$handleClasses[t]
          }, this$props$handleComponent && this$props$handleComponent[t] ? r.createElement(this$props$handleComponent[t]) : null) : null
        })
        return r.createElement("span", {
          className: this$props$handleWrapperClass,
          style: this$props$handleWrapperStyle
        }, u)
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var t = this.state.isResizing ? c : l
        return r.createElement("div", i({
          ref: function (t) {
            if (t) {
              e.resizable = t
            }
          },
          style: i({
            position: "relative"
          }, t, this.props.style, this.sizeStyle, {
            maxWidth: this.props.maxWidth,
            maxHeight: this.props.maxHeight,
            minWidth: this.props.minWidth,
            minHeight: this.props.minHeight,
            boxSizing: "border-box"
          }),
          className: this.props.className
        }, this.extendsProps), this.state.isResizing && r.createElement("div", {
          style: {
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0)",
            cursor: "" + (this.state.resizeCursor || "auto"),
            opacity: "0",
            position: "fixed",
            zIndex: "9999",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0"
          }
        }), this.props.children, this.renderResizer())
      }
    }, {
      key: "parentNode",
      get: function () {
        return this.resizable.parentNode
      }
    }, {
      key: "propsSize",
      get: function () {
        return this.props.size || this.props.defaultSize
      }
    }, {
      key: "base",
      get: function () {
        var /* [auto-meaningful-name] */this$parentNode = this.parentNode
        if (this$parentNode) {
          for (var t = [].slice.call(this$parentNode.children), n = 0; n < t.length; n += 1) {
            var r = t[n]
            if (r instanceof HTMLElement && r.classList.contains("__resizable_base__")) {
              return r
            }
          }
        }
      }
    }, {
      key: "size",
      get: function () {
        var e = 0
        var t = 0
        if ("undefined" !== typeof window) {
          var /* [auto-meaningful-name] */this$resizable$offsetWidth = this.resizable.offsetWidth
          var /* [auto-meaningful-name] */this$resizable$offsetHeight = this.resizable.offsetHeight
          var /* [auto-meaningful-name] */this$resizable$style$position = this.resizable.style.position
          if ("relative" !== this$resizable$style$position) {
            this.resizable.style.position = "relative"
          }
          e = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : this$resizable$offsetWidth
          t = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : this$resizable$offsetHeight
          this.resizable.style.position = this$resizable$style$position
        }
        return {
          width: e,
          height: t
        }
      }
    }, {
      key: "sizeStyle",
      get: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props$size = this.props.size
        var n = function (t) {
          if ("undefined" === typeof e.state[t] || "auto" === e.state[t]) {
            return "auto"
          }
          if (e.propsSize && e.propsSize[t] && f(e.propsSize[t].toString(), "%")) {
            if (f(e.state[t].toString(), "%")) {
              return e.state[t].toString()
            }
            var n = e.getParentSize()
            return Number(e.state[t].toString().replace("px", "")) / n[t] * 100 + "%"
          }
          return h(e.state[t])
        }
        return {
          width: this$props$size && "undefined" !== typeof this$props$size.width && !this.state.isResizing ? h(this$props$size.width) : n("width"),
          height: this$props$size && "undefined" !== typeof this$props$size.height && !this.state.isResizing ? h(this$props$size.height) : n("height")
        }
      }
    }
  ])
  return t
}(r.Component)
g.defaultProps = {
  onResizeStart: function () {},
  onResize: function () {},
  onResizeStop: function () {},
  enable: {
    top: true,
    right: true,
    bottom: true,
    left: true,
    topRight: true,
    bottomRight: true,
    bottomLeft: true,
    topLeft: true
  },
  style: {},
  grid: [1, 1],
  lockAspectRatio: false,
  lockAspectRatioExtraWidth: 0,
  lockAspectRatioExtraHeight: 0,
  scale: 1,
  resizeRatio: 1
}
exports.a = g
