/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2538
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.handleFocus = undefined
var r
var i = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
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
var a = require("react")
var s = (r = a) && r.__esModule ? r : {
  default: r
}
function c(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
function u(e, t) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return !t || "object" !== typeof t && "function" !== typeof t ? e : t
}
function l(e, t) {
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
exports.handleFocus = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "span"
  return function (n) {
    function r() {
      var e
      var t
      var n
      c(this, r)
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = Array(arguments$length), a = 0; a < arguments$length; a++) {
        o[a] = arguments[a]
      }
      t = n = u(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(o)))
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
      return u(n, t)
    }
    l(r, n)
    o(r, [{
      key: "render",
      value: function () {
        return s.default.createElement(t, {
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, s.default.createElement(e, i({}, this.props, this.state)))
      }
    }])
    return r
  }(s.default.Component)
}
