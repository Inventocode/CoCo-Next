/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1545__part-1
 */

"use strict"

import /* [auto-meaningful-name] */Classnames from "classnames"
import { createRef, createElement, Component, useCallback, cloneElement } from "react"
import * as /* [auto-meaningful-name] */$$_1543_229 from "../1543/229"
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
      var /* [auto-meaningful-name] */yThis$constructor = y(this).constructor
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
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      n[o] = arguments[o]
    }
    (e = a.call.apply(a, [this].concat(n))).moveRaf = null
    e.scrollbarRef = createRef()
    e.thumbRef = createRef()
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
      $$_1543_229.a.cancel(e.moveRaf)
    }
    e.onMouseDown = function (t) {
      var /* [auto-meaningful-name] */e$props$onStartMove = e.props.onStartMove
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
      var /* [auto-meaningful-name] */e$state = e.state
      var /* [auto-meaningful-name] */e$state$dragging = e$state.dragging
      var /* [auto-meaningful-name] */e$state$pageY = e$state.pageY
      var /* [auto-meaningful-name] */e$state$startTop = e$state.startTop
      var /* [auto-meaningful-name] */e$props$onScroll = e.props.onScroll
      $$_1543_229.a.cancel(e.moveRaf)
      if (e$state$dragging) {
        var s = e$state$startTop + (E(t) - e$state$pageY)
        var c = e.getEnableScrollRange()
        var l = e.getEnableHeightRange()
        var u = l ? s / l : 0
        var d = Math.ceil(u * c)
        e.moveRaf = $$_1543_229.a(function () {
          e$props$onScroll(d)
        })
      }
    }
    e.onMouseUp = function () {
      var /* [auto-meaningful-name] */e$props$onStopMove = e.props.onStopMove
      e.setState({
        dragging: false
      })
      e$props$onStopMove()
      e.removeEvents()
    }
    e.getSpinHeight = function () {
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$height = e$props.height
      var r = e$props$height / e$props.count * 10
      r = Math.max(r, 20)
      r = Math.min(r, e$props$height / 2)
      return Math.floor(r)
    }
    e.getEnableScrollRange = function () {
      var /* [auto-meaningful-name] */e$props = e.props
      return e$props.scrollHeight - e$props.height || 0
    }
    e.getEnableHeightRange = function () {
      return e.props.height - e.getSpinHeight() || 0
    }
    e.getTop = function () {
      var /* [auto-meaningful-name] */e$props$scrollTop = e.props.scrollTop
      var n = e.getEnableScrollRange()
      var r = e.getEnableHeightRange()
      return 0 === e$props$scrollTop || 0 === n ? 0 : e$props$scrollTop / n * r
    }
    e.showScroll = function () {
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$height = e$props.height
      return e$props.scrollHeight > e$props$height
    }
    return e
  }
  t = s
  if (n = [
    {
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
        var /* [auto-meaningful-name] */this$state = this.state
        var /* [auto-meaningful-name] */this$state$dragging = this$state.dragging
        var /* [auto-meaningful-name] */this$state$visible = this$state.visible
        var /* [auto-meaningful-name] */this$props$prefixCls = this.props.prefixCls
        var a = this.getSpinHeight()
        var s = this.getTop()
        var c = this.showScroll()
        var l = c && this$state$visible
        return createElement("div", {
          ref: this.scrollbarRef,
          className: Classnames("".concat(this$props$prefixCls, "-scrollbar"), h({}, "".concat(this$props$prefixCls, "-scrollbar-show"), c)),
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
        }, createElement("div", {
          ref: this.thumbRef,
          className: Classnames("".concat(this$props$prefixCls, "-scrollbar-thumb"), h({}, "".concat(this$props$prefixCls, "-scrollbar-thumb-moving"), this$state$dragging)),
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
    }
  ]) {
    g(t.prototype, n)
  }
  if (o) {
    g(t, o)
  }
  return s
}(Component)
function w(e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$setRef = e.setRef
  var o = useCallback(function (e) {
    e$setRef(e)
  }, [])
  return cloneElement(e$children, {
    ref: o
  })
}
export { O }
export { w }
