/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2544
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.CopyToClipboard = undefined
var r = i(require("react"))
var o = i(require("./2545/index"))
function i(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
function a(e) {
  return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
function s(e, t) {
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
function c(e, t) {
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
function l(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
function u(e, t) {
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
function d(e, t) {
  return !t || "object" !== a(t) && "function" !== typeof t ? f(e) : t
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
  return (h = Object.setPrototypeOf || function (e, t) {
    e.__proto__ = t
    return e
  })(e, t)
}
function m(e, t, n) {
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
var g = function (e) {
  function t() {
    var e
    var n
    l(this, t)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, a = new Array(arguments$length), s = 0; s < arguments$length; s++) {
      a[s] = arguments[s]
    }
    m(f(n = d(this, (e = p(t)).call.apply(e, [this].concat(a)))), "onClick", function (e) {
      var /* [auto-meaningful-name] */n$props = n.props
      var /* [auto-meaningful-name] */n$props$text = n$props.text
      var /* [auto-meaningful-name] */n$props$onCopy = n$props.onCopy
      var /* [auto-meaningful-name] */n$props$children = n$props.children
      var /* [auto-meaningful-name] */n$props$options = n$props.options
      var l = r.default.Children.only(n$props$children)
      var u = (0, o.default)(n$props$text, n$props$options)
      if (n$props$onCopy) {
        n$props$onCopy(n$props$text, u)
      }
      if (l && l.props && "function" === typeof l.props.onClick) {
        l.props.onClick(e)
      }
    })
    return n
  }
  var n
  var i
  var a;
  (function (e, t) {
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
      h(e, t)
    }
  })(t, e)
  n = t
  if (i = [{
    key: "render",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      this$props.text
      this$props.onCopy
      this$props.options
      var /* [auto-meaningful-name] */this$props$children = this$props.children
      var n = c(this$props, ["text", "onCopy", "options", "children"])
      var o = r.default.Children.only(this$props$children)
      return r.default.cloneElement(o, function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          if (t % 2) {
            s(n, true).forEach(function (t) {
              m(e, t, n[t])
            })
          } else {
            if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            } else {
              s(n).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
            }
          }
        }
        return e
      }({}, n, {
        onClick: this.onClick
      }))
    }
  }]) {
    u(n.prototype, i)
  }
  if (a) {
    u(n, a)
  }
  return t
}(r.default.PureComponent)
exports.CopyToClipboard = g
m(g, "defaultProps", {
  onCopy: undefined,
  options: undefined
})
