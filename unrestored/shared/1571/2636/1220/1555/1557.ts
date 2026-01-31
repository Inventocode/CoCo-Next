/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1557
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var r = function (e) {
  if (e && e.__esModule) {
    return e
  }
  if (null === e || "object" !== p(e) && "function" !== typeof e) {
    return {
      default: e
    }
  }
  var t = d()
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
var o = u(require("../../50/index"))
var i = u(require("react-dom"))
var a = require("./1071/index")
var s = require("./1217")
var c = require("./941")
var l = u(require("./1218"))
function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
function d() {
  if ("function" !== typeof WeakMap) {
    return null
  }
  var e = new WeakMap()
  d = function () {
    return e
  }
  return e
}
function p(e) {
  return (p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
function f(e, t) {
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
      return h(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e)
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return h(e, t)
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
function h(e, t) {
  if (null == t || t > e.length) {
    t = e.length
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n]
  }
  return r
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
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}))
      return true
    } catch (e) {
      return false
    }
  }()
  return function () {
    var n
    var r = E(e)
    if (t) {
      var /* [auto-meaningful-name] */EThis$constructor = E(this).constructor
      n = Reflect.construct(r, arguments, EThis$constructor)
    } else {
      n = r.apply(this, arguments)
    }
    return b(this, n)
  }
}
function b(e, t) {
  return !t || "object" !== p(t) && "function" !== typeof t ? y(e) : t
}
function y(e) {
  if (undefined === e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return e
}
function E(e) {
  return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}
function O(e, t, n) {
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
var w = {
  start: "touchstart",
  move: "touchmove",
  stop: "touchend"
}
var C = {
  start: "mousedown",
  move: "mousemove",
  stop: "mouseup"
}
var T = C
var S = function (e) {
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
  }(u, e)
  var t
  var n
  var o
  var c = v(u)
  function u() {
    var e
    m(this, u)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), r = 0; r < arguments$length; r++) {
      n[r] = arguments[r]
    }
    O(y(e = c.call.apply(c, [this].concat(n))), "state", {
      dragging: false,
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    })
    O(y(e), "mounted", false)
    O(y(e), "handleDragStart", function (t) {
      e.props.onMouseDown(t)
      if (!e.props.allowAnyClick && "number" === typeof t.button && 0 !== t.button) {
        return false
      }
      var n = e.findDOMNode()
      if (!n || !n.ownerDocument || !n.ownerDocument.body) {
        throw new Error("<DraggableCore> not mounted on DragStart!")
      }
      var /* [auto-meaningful-name] */n$ownerDocument = n.ownerDocument
      if (!(e.props.disabled || !(t.target instanceof n$ownerDocument.defaultView.Node) || e.props.handle && !(0, a.matchesSelectorAndParentsTo)(t.target, e.props.handle, n) || e.props.cancel && (0, a.matchesSelectorAndParentsTo)(t.target, e.props.cancel, n))) {
        if ("touchstart" === t.type) {
          t.preventDefault()
        }
        var o = (0, a.getTouchIdentifier)(t)
        e.setState({
          touchIdentifier: o
        })
        var i = (0, s.getControlPosition)(t, o, y(e))
        if (null != i) {
          var c = i.x
          var u = i.y
          var d = (0, s.createCoreData)(y(e), c, u);
          (0, l.default)("DraggableCore: handleDragStart: %j", d);
          (0, l.default)("calling", e.props.onStart)
          if (false !== e.props.onStart(t, d) && false !== e.mounted) {
            if (e.props.enableUserSelectHack) {
              (0, a.addUserSelectStyles)(n$ownerDocument)
            }
            e.setState({
              dragging: true,
              lastX: c,
              lastY: u
            });
            (0, a.addEvent)(n$ownerDocument, T.move, e.handleDrag);
            (0, a.addEvent)(n$ownerDocument, T.stop, e.handleDragStop)
          }
        }
      }
    })
    O(y(e), "handleDrag", function (t) {
      var n = (0, s.getControlPosition)(t, e.state.touchIdentifier, y(e))
      if (null != n) {
        var r = n.x
        var o = n.y
        if (Array.isArray(e.props.grid)) {
          var i = r - e.state.lastX
          var a = o - e.state.lastY
          var c = f((0, s.snapToGrid)(e.props.grid, i, a), 2)
          i = c[0]
          a = c[1]
          if (!i && !a) {
            return
          }
          r = e.state.lastX + i
          o = e.state.lastY + a
        }
        var u = (0, s.createCoreData)(y(e), r, o);
        (0, l.default)("DraggableCore: handleDrag: %j", u)
        if (false !== e.props.onDrag(t, u) && false !== e.mounted) {
          e.setState({
            lastX: r,
            lastY: o
          })
        } else {
          try {
            e.handleDragStop(new MouseEvent("mouseup"))
          } catch (p) {
            var d = document.createEvent("MouseEvents")
            d.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            e.handleDragStop(d)
          }
        }
      }
    })
    O(y(e), "handleDragStop", function (t) {
      if (e.state.dragging) {
        var n = (0, s.getControlPosition)(t, e.state.touchIdentifier, y(e))
        if (null != n) {
          var r = n.x
          var o = n.y
          var i = (0, s.createCoreData)(y(e), r, o)
          if (false === e.props.onStop(t, i) || false === e.mounted) {
            return false
          }
          var c = e.findDOMNode()
          if (c && e.props.enableUserSelectHack) {
            (0, a.removeUserSelectStyles)(c.ownerDocument)
          }
          (0, l.default)("DraggableCore: handleDragStop: %j", i)
          e.setState({
            dragging: false,
            lastX: NaN,
            lastY: NaN
          })
          if (c) {
            (0, l.default)("DraggableCore: Removing handlers");
            (0, a.removeEvent)(c.ownerDocument, T.move, e.handleDrag);
            (0, a.removeEvent)(c.ownerDocument, T.stop, e.handleDragStop)
          }
        }
      }
    })
    O(y(e), "onMouseDown", function (t) {
      T = C
      return e.handleDragStart(t)
    })
    O(y(e), "onMouseUp", function (t) {
      T = C
      return e.handleDragStop(t)
    })
    O(y(e), "onTouchStart", function (t) {
      T = w
      return e.handleDragStart(t)
    })
    O(y(e), "onTouchEnd", function (t) {
      T = w
      return e.handleDragStop(t)
    })
    return e
  }
  t = u
  if (n = [
    {
      key: "componentDidMount",
      value: function () {
        this.mounted = true
        var e = this.findDOMNode()
        if (e) {
          (0, a.addEvent)(e, w.start, this.onTouchStart, {
            passive: false
          })
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.mounted = false
        var e = this.findDOMNode()
        if (e) {
          var /* [auto-meaningful-name] */e$ownerDocument = e.ownerDocument;
          (0, a.removeEvent)(e$ownerDocument, C.move, this.handleDrag);
          (0, a.removeEvent)(e$ownerDocument, w.move, this.handleDrag);
          (0, a.removeEvent)(e$ownerDocument, C.stop, this.handleDragStop);
          (0, a.removeEvent)(e$ownerDocument, w.stop, this.handleDragStop);
          (0, a.removeEvent)(e, w.start, this.onTouchStart, {
            passive: false
          })
          if (this.props.enableUserSelectHack) {
            (0, a.removeUserSelectStyles)(e$ownerDocument)
          }
        }
      }
    }, {
      key: "findDOMNode",
      value: function () {
        return this.props.nodeRef ? this.props.nodeRef.current : i.default.findDOMNode(this)
      }
    }, {
      key: "render",
      value: function () {
        return r.cloneElement(r.Children.only(this.props.children), {
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          onTouchEnd: this.onTouchEnd
        })
      }
    }
  ]) {
    g(t.prototype, n)
  }
  if (o) {
    g(t, o)
  }
  return u
}(r.Component)
exports.default = S
O(S, "displayName", "DraggableCore")
O(S, "propTypes", {
  allowAnyClick: o.default.bool,
  disabled: o.default.bool,
  enableUserSelectHack: o.default.bool,
  offsetParent: function (e, t) {
    if (e[t] && 1 !== e[t].nodeType) {
      throw new Error("Draggable's offsetParent must be a DOM Node.")
    }
  },
  grid: o.default.arrayOf(o.default.number),
  handle: o.default.string,
  cancel: o.default.string,
  nodeRef: o.default.object,
  onStart: o.default.func,
  onDrag: o.default.func,
  onStop: o.default.func,
  onMouseDown: o.default.func,
  scale: o.default.number,
  className: c.dontSetMe,
  style: c.dontSetMe,
  transform: c.dontSetMe
})
O(S, "defaultProps", {
  allowAnyClick: false,
  cancel: null,
  disabled: false,
  enableUserSelectHack: true,
  offsetParent: null,
  handle: null,
  grid: null,
  transform: null,
  onStart: function () {},
  onDrag: function () {},
  onStop: function () {},
  onMouseDown: function () {},
  scale: 1
})
