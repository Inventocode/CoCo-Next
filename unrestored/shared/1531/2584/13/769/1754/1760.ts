/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1760
 */

"use strict"

var r = require("../568")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var i = r(require("../746"))
var o = r(require("./1188/index"))
var a = r(require("../1044"))
var s = r(require("../1045"))
var c = r(require("../1047/index"))
var u = r(require("../1048/index"))
var l = r(require("../927"))
var f = r(require("react"))
var d = r(require("../../../8"))
var h = r(require("./1256"))
function p(e, t) {
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
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      p(Object(n), true).forEach(function (t) {
        (0, i.default)(e, t, n[t])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      } else {
        p(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
    }
  }
  return e
}
function A(e) {
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
    var r = (0, l.default)(e)
    if (t) {
      var /* [auto-meaningful-name] */_0L$defaultThis$constructor = (0, l.default)(this).constructor
      n = Reflect.construct(r, arguments, _0L$defaultThis$constructor)
    } else {
      n = r.apply(this, arguments)
    }
    return (0, u.default)(this, n)
  }
}
var g = function (e) {
  (0, c.default)(n, e)
  var t = A(n)
  function n() {
    var e;
    (0, a.default)(this, n);
    (e = t.apply(this, arguments)).state = {
      clickFocused: false
    }
    e.setHandleRef = function (t) {
      e.handle = t
    }
    e.handleMouseUp = function () {
      if (document.activeElement === e.handle) {
        e.setClickFocus(true)
      }
    }
    e.handleMouseDown = function (t) {
      t.preventDefault()
      e.focus()
    }
    e.handleBlur = function () {
      e.setClickFocus(false)
    }
    e.handleKeyDown = function () {
      e.setClickFocus(false)
    }
    return e
  }
  (0, s.default)(n, [{
    key: "componentDidMount",
    value: function () {
      this.onMouseUpListener = (0, h.default)(document, "mouseup", this.handleMouseUp)
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove()
      }
    }
  }, {
    key: "setClickFocus",
    value: function (e) {
      this.setState({
        clickFocused: e
      })
    }
  }, {
    key: "clickFocus",
    value: function () {
      this.setClickFocus(true)
      this.focus()
    }
  }, {
    key: "focus",
    value: function () {
      this.handle.focus()
    }
  }, {
    key: "blur",
    value: function () {
      this.handle.blur()
    }
  }, {
    key: "render",
    value: function () {
      var e
      var t
      var n
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$prefixCls = this$props.prefixCls
      var /* [auto-meaningful-name] */this$props$vertical = this$props.vertical
      var /* [auto-meaningful-name] */this$props$reverse = this$props.reverse
      var /* [auto-meaningful-name] */this$props$offset = this$props.offset
      var /* [auto-meaningful-name] */this$props$style = this$props.style
      var /* [auto-meaningful-name] */this$props$disabled = this$props.disabled
      var /* [auto-meaningful-name] */this$props$min = this$props.min
      var /* [auto-meaningful-name] */this$props$max = this$props.max
      var /* [auto-meaningful-name] */this$props$value = this$props.value
      var /* [auto-meaningful-name] */this$props$tabIndex = this$props.tabIndex
      var /* [auto-meaningful-name] */this$props$ariaLabel = this$props.ariaLabel
      var /* [auto-meaningful-name] */this$props$ariaLabelledBy = this$props.ariaLabelledBy
      var /* [auto-meaningful-name] */this$props$ariaValueTextFormatter = this$props.ariaValueTextFormatter
      var w = (0, o.default)(this$props, ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"])
      var E = (0, d.default)(this.props.className, (0, i.default)({}, "".concat(this$props$prefixCls, "-handle-click-focused"), this.state.clickFocused))
      var x = this$props$vertical ? (e = {}, (0, i.default)(e, this$props$reverse ? "top" : "bottom", "".concat(this$props$offset, "%")), (0, i.default)(e, this$props$reverse ? "bottom" : "top", "auto"), (0, i.default)(e, "transform", this$props$reverse ? null : "translateY(+50%)"), e) : (t = {}, (0, i.default)(t, this$props$reverse ? "right" : "left", "".concat(this$props$offset, "%")), (0, i.default)(t, this$props$reverse ? "left" : "right", "auto"), (0, i.default)(t, "transform", "translateX(".concat(this$props$reverse ? "+" : "-", "50%)")), t)
      var C = _(_({}, this$props$style), x)
      var O = this$props$tabIndex || 0
      if (this$props$disabled || null === this$props$tabIndex) {
        O = null
      }
      if (this$props$ariaValueTextFormatter) {
        n = this$props$ariaValueTextFormatter(this$props$value)
      }
      return f.default.createElement("div", Object.assign({
        ref: this.setHandleRef,
        tabIndex: O
      }, w, {
        className: E,
        style: C,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        role: "slider",
        "aria-valuemin": this$props$min,
        "aria-valuemax": this$props$max,
        "aria-valuenow": this$props$value,
        "aria-disabled": !!this$props$disabled,
        "aria-label": this$props$ariaLabel,
        "aria-labelledby": this$props$ariaLabelledBy,
        "aria-valuetext": n
      }))
    }
  }])
  return n
}(f.default.Component)
exports.default = g
