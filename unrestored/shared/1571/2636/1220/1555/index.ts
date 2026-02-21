/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1555
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
Object.defineProperty(exports, "DraggableCore", {
  enumerable: true,
  get: function () {
    return u.default
  }
})
exports.default = undefined
var r = function (e) {
  if (e && e.__esModule) {
    return e
  }
  if (null === e || "object" !== h(e) && "function" !== typeof e) {
    return {
      default: e
    }
  }
  var t = f()
  if (t && t.has(e)) {
    return t.get(e)
  }
  var n = {}
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
    var i = r ? Object.getOwnPropertyDescriptor(e, o) : null
    if (i && (i.get || i.set)) {
      Object.defineProperty(n, o, i)
    } else {
      n[o] = e[o]
    }
  }
  n.default = e
  if (t) {
    t.set(e, n)
  }
  return n
}(require("react"))
var o = p(require("../../50/index"))
var i = p(require("react-dom"))
var a = p(require("classnames"))
var s = require("./1071/index")
var c = require("./1217")
var l = require("./941")
var u = p(require("./1557"))
var d = p(require("./1218"))
function p(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
function f() {
  if ("function" !== typeof WeakMap) {
    return null
  }
  var e = new WeakMap()
  f = function () {
    return e
  }
  return e
}
function h(e) {
  return (h = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
function m() {
  return (m = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t]
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r]
      }
    }
    return e
  }).apply(this, arguments)
}
function g(e, t) {
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
function _(e, t) {
  return function (e) {
    if (Array.isArray(e)) {
      return e
    }
  }(e) || function (e, t) {
    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) {
      return
    }
    var n = []
    var r = true
    var o = false
    var i = undefined
    try {
      for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = true) {
        ;
      }
    } catch (c) {
      o = true
      i = c
    } finally {
      try {
        if (!(r || null == s.return)) {
          s.return()
        }
      } finally {
        if (o) {
          throw i
        }
      }
    }
    return n
  }(e, t) || function (e, t) {
    if (!e) {
      return
    }
    if ("string" === typeof e) {
      return v(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e)
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return v(e, t)
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
function v(e, t) {
  if (null == t || t > e.length) {
    t = e.length
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n]
  }
  return r
}
function b(e, t) {
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
function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      b(Object(n), true).forEach(function (t) {
        I(e, t, n[t])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      } else {
        b(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
    }
  }
  return e
}
function E(e, t) {
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
function O(e, t, n) {
  if (t) {
    E(e.prototype, t)
  }
  if (n) {
    E(e, n)
  }
  return e
}
function w(e, t) {
  return (w = Object.setPrototypeOf || function (e, t) {
    e.__proto__ = t
    return e
  })(e, t)
}
function C(e) {
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
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}))
      return true
    } catch (e) {
      return false
    }
  }()
  return function () {
    var n
    var r = A(e)
    if (t) {
      var /* [auto-meaningful-name] */AThis$constructor = A(this).constructor
      n = Reflect.construct(r, arguments, AThis$constructor)
    } else {
      n = r.apply(this, arguments)
    }
    return T(this, n)
  }
}
function T(e, t) {
  return !t || "object" !== h(t) && "function" !== typeof t ? S(e) : t
}
function S(e) {
  if (undefined === e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return e
}
function A(e) {
  return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}
function I(e, t, n) {
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
var j = function (e) {
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
      w(e, t)
    }
  }(n, e)
  var t = C(n)
  function n(e) {
    var r;
    (function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    })(this, n)
    I(S(r = t.call(this, e)), "onDragStart", function (e, t) {
      (0, d.default)("Draggable: onDragStart: %j", t)
      if (false === r.props.onStart(e, (0, c.createDraggableData)(S(r), t))) {
        return false
      }
      r.setState({
        dragging: true,
        dragged: true
      })
    })
    I(S(r), "onDrag", function (e, t) {
      if (!r.state.dragging) {
        return false
      }
      (0, d.default)("Draggable: onDrag: %j", t)
      var n = (0, c.createDraggableData)(S(r), t)
      var o = {
        x: n.x,
        y: n.y
      }
      if (r.props.bounds) {
        var i = o.x
        var a = o.y
        o.x += r.state.slackX
        o.y += r.state.slackY
        var s = _((0, c.getBoundPosition)(S(r), o.x, o.y), 2)
        var l = s[0]
        var u = s[1]
        o.x = l
        o.y = u
        o.slackX = r.state.slackX + (i - o.x)
        o.slackY = r.state.slackY + (a - o.y)
        n.x = o.x
        n.y = o.y
        n.deltaX = o.x - r.state.x
        n.deltaY = o.y - r.state.y
      }
      if (false === r.props.onDrag(e, n)) {
        return false
      }
      r.setState(o)
    })
    I(S(r), "onDragStop", function (e, t) {
      if (!r.state.dragging) {
        return false
      }
      if (false === r.props.onStop(e, (0, c.createDraggableData)(S(r), t))) {
        return false
      }
      (0, d.default)("Draggable: onDragStop: %j", t)
      var n = {
        dragging: false,
        slackX: 0,
        slackY: 0
      }
      if (Boolean(r.props.position)) {
        var /* [auto-meaningful-name] */r$props$position = r.props.position
        var /* [auto-meaningful-name] */r$props$position$x = r$props$position.x
        var /* [auto-meaningful-name] */r$props$position$y = r$props$position.y
        n.x = r$props$position$x
        n.y = r$props$position$y
      }
      r.setState(n)
    })
    r.state = {
      dragging: false,
      dragged: false,
      x: e.position ? e.position.x : e.defaultPosition.x,
      y: e.position ? e.position.y : e.defaultPosition.y,
      prevPropsPosition: y({}, e.position),
      slackX: 0,
      slackY: 0,
      isElementSVG: false
    }
    if (!(!e.position || e.onDrag || e.onStop)) {
      console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")
    }
    return r
  }
  O(n, null, [
    {
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var /* [auto-meaningful-name] */e$position = e.position
        var /* [auto-meaningful-name] */t$prevPropsPosition = t.prevPropsPosition
        return !e$position || t$prevPropsPosition && e$position.x === t$prevPropsPosition.x && e$position.y === t$prevPropsPosition.y ? null : ((0, d.default)("Draggable: getDerivedStateFromProps %j", {
          position: e$position,
          prevPropsPosition: t$prevPropsPosition
        }), {
          x: e$position.x,
          y: e$position.y,
          prevPropsPosition: y({}, e$position)
        })
      }
    }
  ])
  O(n, [
    {
      key: "componentDidMount",
      value: function () {
        if ("undefined" !== typeof window.SVGElement && this.findDOMNode() instanceof window.SVGElement) {
          this.setState({
            isElementSVG: true
          })
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.setState({
          dragging: false
        })
      }
    }, {
      key: "findDOMNode",
      value: function () {
        return this.props.nodeRef ? this.props.nodeRef.current : i.default.findDOMNode(this)
      }
    }, {
      key: "render",
      value: function () {
        var e
        var /* [auto-meaningful-name] */this$props = this.props
        this$props.axis
        this$props.bounds
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$defaultPosition = this$props.defaultPosition
        var /* [auto-meaningful-name] */this$props$defaultClassName = this$props.defaultClassName
        var /* [auto-meaningful-name] */this$props$defaultClassNameDragging = this$props.defaultClassNameDragging
        var /* [auto-meaningful-name] */this$props$defaultClassNameDragged = this$props.defaultClassNameDragged
        var /* [auto-meaningful-name] */this$props$position = this$props.position
        var /* [auto-meaningful-name] */this$props$positionOffset = this$props.positionOffset
        this$props.scale
        var h = g(this$props, ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"])
        var _ = {}
        var v = null
        var b = !Boolean(this$props$position) || this.state.dragging
        var E = this$props$position || this$props$defaultPosition
        var O = {
          x: (0, c.canDragX)(this) && b ? this.state.x : E.x,
          y: (0, c.canDragY)(this) && b ? this.state.y : E.y
        }
        if (this.state.isElementSVG) {
          v = (0, s.createSVGTransform)(O, this$props$positionOffset)
        } else {
          _ = (0, s.createCSSTransform)(O, this$props$positionOffset)
        }
        var w = (0, a.default)(this$props$children.props.className || "", this$props$defaultClassName, (I(e = {}, this$props$defaultClassNameDragging, this.state.dragging), I(e, this$props$defaultClassNameDragged, this.state.dragged), e))
        return r.createElement(u.default, m({}, h, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), r.cloneElement(r.Children.only(this$props$children), {
          className: w,
          style: y(y({}, this$props$children.props.style), _),
          transform: v
        }))
      }
    }
  ])
  return n
}(r.Component)
exports.default = j
I(j, "displayName", "Draggable")
I(j, "propTypes", y(y({}, u.default.propTypes), {}, {
  axis: o.default.oneOf(["both", "x", "y", "none"]),
  bounds: o.default.oneOfType([
    o.default.shape({
      left: o.default.number,
      right: o.default.number,
      top: o.default.number,
      bottom: o.default.number
    }), o.default.string, o.default.oneOf([false])
  ]),
  defaultClassName: o.default.string,
  defaultClassNameDragging: o.default.string,
  defaultClassNameDragged: o.default.string,
  defaultPosition: o.default.shape({
    x: o.default.number,
    y: o.default.number
  }),
  positionOffset: o.default.shape({
    x: o.default.oneOfType([o.default.number, o.default.string]),
    y: o.default.oneOfType([o.default.number, o.default.string])
  }),
  position: o.default.shape({
    x: o.default.number,
    y: o.default.number
  }),
  className: l.dontSetMe,
  style: l.dontSetMe,
  transform: l.dontSetMe
}))
I(j, "defaultProps", y(y({}, u.default.defaultProps), {}, {
  axis: "both",
  bounds: false,
  defaultClassName: "react-draggable",
  defaultClassNameDragging: "react-draggable-dragging",
  defaultClassNameDragged: "react-draggable-dragged",
  defaultPosition: {
    x: 0,
    y: 0
  },
  position: null,
  scale: 1
}))
