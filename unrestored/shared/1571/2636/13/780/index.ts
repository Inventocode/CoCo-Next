/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：780
 */

"use strict"

var r = require("./1068/index")
var i = require("./571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = i(require("./755"))
var a = i(require("./1066"))
var s = i(require("./1067"))
var c = i(require("./1069/index"))
var u = i(require("./1070/index"))
var l = i(require("./940"))
var f = i(require("react"))
var d = i(require("./963"))
var h = i(require("./1793"))
var p = i(require("./1794/index"))
var _ = r(require("./1286/index"))
function A(e, t) {
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
function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      A(Object(n), true).forEach(function (t) {
        (0, o.default)(e, t, n[t])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      } else {
        A(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
    }
  }
  return e
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
var m = function (e) {
  (0, c.default)(n, e)
  var t = v(n)
  function n(e) {
    var r;
    (0, a.default)(this, n);
    (r = t.call(this, e)).onEnd = function (e) {
      var /* [auto-meaningful-name] */r$state$dragging = r.state.dragging
      r.removeDocumentEvents()
      if (r$state$dragging || e) {
        r.props.onAfterChange(r.getValue())
      }
      r.setState({
        dragging: false
      })
    }
    var i = undefined !== e.defaultValue ? e.defaultValue : e.min
    var o = undefined !== e.value ? e.value : i
    r.state = {
      value: r.trimAlignValue(o),
      dragging: false
    };
    (0, d.default)(!("minimumTrackStyle" in e), "minimumTrackStyle will be deprecated, please use trackStyle instead.");
    (0, d.default)(!("maximumTrackStyle" in e), "maximumTrackStyle will be deprecated, please use railStyle instead.")
    return r
  }
  (0, s.default)(n, [
    {
      key: "calcValueByPos",
      value: function (e) {
        return 0
      }
    }, {
      key: "calcOffset",
      value: function (e) {
        return 0
      }
    }, {
      key: "saveHandle",
      value: function (e, t) {}
    }, {
      key: "removeDocumentEvents",
      value: function () {}
    }, {
      key: "componentDidUpdate",
      value: function (e, t) {
        if ("value" in this.props || "min" in this.props || "max" in this.props) {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$value = this$props.value
          var /* [auto-meaningful-name] */this$props$onChange = this$props.onChange
          var o = undefined !== this$props$value ? this$props$value : t.value
          var a = this.trimAlignValue(o, this.props)
          if (a !== t.value) {
            this.setState({
              value: a
            })
            if (_.isValueOutOfRange(o, this.props)) {
              this$props$onChange(a)
            }
          }
        }
      }
    }, {
      key: "onChange",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props = this.props
        var n = !("value" in this$props)
        var r = e.value > this.props.max ? g(g({}, e), {}, {
          value: this.props.max
        }) : e
        if (n) {
          this.setState(r)
        }
        var /* [auto-meaningful-name] */r$value = r.value
        this$props.onChange(r$value)
      }
    }, {
      key: "onStart",
      value: function (e) {
        this.setState({
          dragging: true
        })
        var /* [auto-meaningful-name] */this$props = this.props
        var n = this.getValue()
        this$props.onBeforeChange(n)
        var r = this.calcValueByPos(e)
        this.startValue = r
        this.startPosition = e
        if (r !== n) {
          this.prevMovedHandleIndex = 0
          this.onChange({
            value: r
          })
        }
      }
    }, {
      key: "onMove",
      value: function (e, t) {
        _.pauseEvent(e)
        var /* [auto-meaningful-name] */this$state$value = this.state.value
        var r = this.calcValueByPos(t)
        if (r !== this$state$value) {
          this.onChange({
            value: r
          })
        }
      }
    }, {
      key: "onKeyboard",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$reverse = this$props.reverse
        var /* [auto-meaningful-name] */this$props$vertical = this$props.vertical
        var i = _.getKeyboardValueMutator(e, this$props$vertical, this$props$reverse)
        if (i) {
          _.pauseEvent(e)
          var /* [auto-meaningful-name] */this$state$value = this.state.value
          var a = i(this$state$value, this.props)
          var s = this.trimAlignValue(a)
          if (s === this$state$value) {
            return
          }
          this.onChange({
            value: s
          })
          this.props.onAfterChange(s)
          this.onEnd()
        }
      }
    }, {
      key: "getValue",
      value: function () {
        return this.state.value
      }
    }, {
      key: "getLowerBound",
      value: function () {
        return this.props.min
      }
    }, {
      key: "getUpperBound",
      value: function () {
        return this.state.value
      }
    }, {
      key: "trimAlignValue",
      value: function (e) {
        var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
        if (null === e) {
          return null
        }
        var n = g(g({}, this.props), t)
        var r = _.ensureValueInRange(e, n)
        return _.ensureValuePrecision(r, n)
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$prefixCls = this$props.prefixCls
        var /* [auto-meaningful-name] */this$props$vertical = this$props.vertical
        var /* [auto-meaningful-name] */this$props$included = this$props.included
        var /* [auto-meaningful-name] */this$props$disabled = this$props.disabled
        var /* [auto-meaningful-name] */this$props$minimumTrackStyle = this$props.minimumTrackStyle
        var /* [auto-meaningful-name] */this$props$trackStyle = this$props.trackStyle
        var /* [auto-meaningful-name] */this$props$handleStyle = this$props.handleStyle
        var /* [auto-meaningful-name] */this$props$tabIndex = this$props.tabIndex
        var /* [auto-meaningful-name] */this$props$ariaLabelForHandle = this$props.ariaLabelForHandle
        var /* [auto-meaningful-name] */this$props$ariaLabelledByForHandle = this$props.ariaLabelledByForHandle
        var /* [auto-meaningful-name] */this$props$ariaValueTextFormatterForHandle = this$props.ariaValueTextFormatterForHandle
        var /* [auto-meaningful-name] */this$props$min = this$props.min
        var /* [auto-meaningful-name] */this$props$max = this$props.max
        var /* [auto-meaningful-name] */this$props$startPoint = this$props.startPoint
        var /* [auto-meaningful-name] */this$props$reverse = this$props.reverse
        var /* [auto-meaningful-name] */this$props$handle = this$props.handle
        var /* [auto-meaningful-name] */this$state = this.state
        var /* [auto-meaningful-name] */this$state$value = this$state.value
        var /* [auto-meaningful-name] */this$state$dragging = this$state.dragging
        var x = this.calcOffset(this$state$value)
        var C = this$props$handle({
          className: "".concat(this$props$prefixCls, "-handle"),
          prefixCls: this$props$prefixCls,
          vertical: this$props$vertical,
          offset: x,
          value: this$state$value,
          dragging: this$state$dragging,
          disabled: this$props$disabled,
          min: this$props$min,
          max: this$props$max,
          reverse: this$props$reverse,
          index: 0,
          tabIndex: this$props$tabIndex,
          ariaLabel: this$props$ariaLabelForHandle,
          ariaLabelledBy: this$props$ariaLabelledByForHandle,
          ariaValueTextFormatter: this$props$ariaValueTextFormatterForHandle,
          style: this$props$handleStyle[0] || this$props$handleStyle,
          ref: function (t) {
            return e.saveHandle(0, t)
          }
        })
        var O = undefined !== this$props$startPoint ? this.calcOffset(this$props$startPoint) : 0
        var k = this$props$trackStyle[0] || this$props$trackStyle
        return {
          tracks: f.default.createElement(h.default, {
            className: "".concat(this$props$prefixCls, "-track"),
            vertical: this$props$vertical,
            included: this$props$included,
            offset: O,
            reverse: this$props$reverse,
            length: x - O,
            style: g(g({}, this$props$minimumTrackStyle), k)
          }),
          handles: C
        }
      }
    }
  ])
  return n
}(f.default.Component)
var y = (0, p.default)(m)
exports.default = y
