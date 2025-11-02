/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2533
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ColorWrap = undefined
var r = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var i = function () {
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
var o = require("react")
var a = u(o)
var s = u(require("./1420/index"))
var c = function (e) {
  if (e && e.__esModule) {
    return e
  }
  var t = {}
  if (null != e) {
    for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
      t[n] = e[n]
    }
  }
  t.default = e
  return t
}(require("./2534/index"))
function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var l = exports.ColorWrap = function (e) {
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
        if (c.simpleCheckForValidColor(e)) {
          var r = c.toState(e, e.h || t.state.oldHue)
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
        if (c.simpleCheckForValidColor(e)) {
          var r = c.toState(e, e.h || t.state.oldHue)
          if (t.props.onSwatchHover) {
            t.props.onSwatchHover(r, n)
          }
        }
      }
      t.state = r({}, c.toState(e.color, 0))
      t.debounce = (0, s.default)(function (e, t, n) {
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
    i(n, [{
      key: "render",
      value: function () {
        var t = {}
        if (this.props.onSwatchHover) {
          t.onSwatchHover = this.handleSwatchHover
        }
        return a.default.createElement(e, r({}, this.props, this.state, {
          onChange: this.handleChange
        }, t))
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        return r({}, c.toState(e.color, t.oldHue))
      }
    }])
    return n
  }(o.PureComponent || o.Component)
  t.propTypes = r({}, e.propTypes)
  t.defaultProps = r({}, e.defaultProps, {
    color: {
      h: 250,
      s: .5,
      l: .2,
      a: 1
    }
  })
  return t
}
exports.default = l
