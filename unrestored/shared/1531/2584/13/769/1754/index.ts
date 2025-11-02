/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1754
 */

"use strict"

var r = require("../1046/index")
var i = require("../568")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = function (e) {
  var t;
  (t = function (e) {
    (0, l.default)(n, e)
    var t = function (e) {
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
        var r = (0, d.default)(e)
        if (t) {
          var _0D$defaultThis$constructor = (0, d.default)(this).constructor
          n = Reflect.construct(r, arguments, _0D$defaultThis$constructor)
        } else {
          n = r.apply(this, arguments)
        }
        return (0, f.default)(this, n)
      }
    }(n)
    function n(e) {
      var r;
      (0, s.default)(this, n);
      (r = t.call(this, e)).onMouseDown = function (e) {
        if (0 === e.button) {
          var r$props$vertical = r.props.vertical
          var n = y.getMousePosition(r$props$vertical, e)
          if (y.isEventFromHandle(e, r.handlesRefs)) {
            var i = y.getHandleCenterPosition(r$props$vertical, e.target)
            r.dragOffset = n - i
            n = i
          } else {
            r.dragOffset = 0
          }
          r.removeDocumentEvents()
          r.onStart(n)
          r.addDocumentMouseEvents()
        }
      }
      r.onTouchStart = function (e) {
        if (!y.isNotTouchEvent(e)) {
          var r$props$vertical = r.props.vertical
          var n = y.getTouchPosition(r$props$vertical, e)
          if (y.isEventFromHandle(e, r.handlesRefs)) {
            var i = y.getHandleCenterPosition(r$props$vertical, e.target)
            r.dragOffset = n - i
            n = i
          } else {
            r.dragOffset = 0
          }
          r.onStart(n)
          r.addDocumentTouchEvents()
          y.pauseEvent(e)
        }
      }
      r.onFocus = function (e) {
        var r$props = r.props
        var r$props$onFocus = r$props.onFocus
        var r$props$vertical = r$props.vertical
        if (y.isEventFromHandle(e, r.handlesRefs)) {
          var o = y.getHandleCenterPosition(r$props$vertical, e.target)
          r.dragOffset = 0
          r.onStart(o)
          y.pauseEvent(e)
          if (r$props$onFocus) {
            r$props$onFocus(e)
          }
        }
      }
      r.onBlur = function (e) {
        var r$props$onBlur = r.props.onBlur
        r.onEnd()
        if (r$props$onBlur) {
          r$props$onBlur(e)
        }
      }
      r.onMouseUp = function () {
        if (r.handlesRefs[r.prevMovedHandleIndex]) {
          r.handlesRefs[r.prevMovedHandleIndex].clickFocus()
        }
      }
      r.onMouseMove = function (e) {
        if (r.sliderRef) {
          var t = y.getMousePosition(r.props.vertical, e)
          r.onMove(e, t - r.dragOffset)
        } else {
          r.onEnd()
        }
      }
      r.onTouchMove = function (e) {
        if (!y.isNotTouchEvent(e) && r.sliderRef) {
          var t = y.getTouchPosition(r.props.vertical, e)
          r.onMove(e, t - r.dragOffset)
        } else {
          r.onEnd()
        }
      }
      r.onKeyDown = function (e) {
        if (r.sliderRef && y.isEventFromHandle(e, r.handlesRefs)) {
          r.onKeyboard(e)
        }
      }
      r.onClickMarkLabel = function (e, t) {
        e.stopPropagation()
        r.onChange({
          value: t
        })
        r.setState({
          value: t
        }, function () {
          return r.onEnd(true)
        })
      }
      r.saveSlider = function (e) {
        r.sliderRef = e
      }
      var e$step = e.step
      var e$max = e.max
      var e$min = e.min
      var c = !isFinite(e$max - e$min) || (e$max - e$min) % e$step === 0;
      (0, A.default)(!e$step || Math.floor(e$step) !== e$step || c, "Slider[max] - Slider[min] (".concat(e$max - e$min, ") should be a multiple of Slider[step] (").concat(e$step, ")"))
      r.handlesRefs = {}
      return r
    }
    (0, c.default)(n, [{
      key: "componentDidMount",
      value: function () {
        this.document = this.sliderRef && this.sliderRef.ownerDocument
        var this$props = this.props
        var this$props$autoFocus = this$props.autoFocus
        var this$props$disabled = this$props.disabled
        if (this$props$autoFocus && !this$props$disabled) {
          this.focus()
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        if ((0, u.default)((0, d.default)(n.prototype), "componentWillUnmount", this)) {
          (0, u.default)((0, d.default)(n.prototype), "componentWillUnmount", this).call(this)
        }
        this.removeDocumentEvents()
      }
    }, {
      key: "getSliderStart",
      value: function () {
        var this$sliderRef = this.sliderRef
        var this$props = this.props
        var this$props$vertical = this$props.vertical
        var this$props$reverse = this$props.reverse
        var i = this$sliderRef.getBoundingClientRect()
        return this$props$vertical ? this$props$reverse ? i.bottom : i.top : window.pageXOffset + (this$props$reverse ? i.right : i.left)
      }
    }, {
      key: "getSliderLength",
      value: function () {
        var this$sliderRef = this.sliderRef
        if (!this$sliderRef) {
          return 0
        }
        var t = this$sliderRef.getBoundingClientRect()
        return this.props.vertical ? t.height : t.width
      }
    }, {
      key: "addDocumentTouchEvents",
      value: function () {
        this.onTouchMoveListener = (0, p.default)(this.document, "touchmove", this.onTouchMove)
        this.onTouchUpListener = (0, p.default)(this.document, "touchend", this.onEnd)
      }
    }, {
      key: "addDocumentMouseEvents",
      value: function () {
        this.onMouseMoveListener = (0, p.default)(this.document, "mousemove", this.onMouseMove)
        this.onMouseUpListener = (0, p.default)(this.document, "mouseup", this.onEnd)
      }
    }, {
      key: "removeDocumentEvents",
      value: function () {
        if (this.onTouchMoveListener) {
          this.onTouchMoveListener.remove()
        }
        if (this.onTouchUpListener) {
          this.onTouchUpListener.remove()
        }
        if (this.onMouseMoveListener) {
          this.onMouseMoveListener.remove()
        }
        if (this.onMouseUpListener) {
          this.onMouseUpListener.remove()
        }
      }
    }, {
      key: "focus",
      value: function () {
        if (!this.props.disabled) {
          this.handlesRefs[0].focus()
        }
      }
    }, {
      key: "blur",
      value: function () {
        var e = this
        if (!this.props.disabled) {
          Object.keys(this.handlesRefs).forEach(function (t) {
            if (e.handlesRefs[t] && e.handlesRefs[t].blur) {
              e.handlesRefs[t].blur()
            }
          })
        }
      }
    }, {
      key: "calcValue",
      value: function (e) {
        var this$props = this.props
        var this$props$vertical = this$props.vertical
        var this$props$min = this$props.min
        var this$props$max = this$props.max
        var o = Math.abs(Math.max(e, 0) / this.getSliderLength())
        return this$props$vertical ? (1 - o) * (this$props$max - this$props$min) + this$props$min : o * (this$props$max - this$props$min) + this$props$min
      }
    }, {
      key: "calcValueByPos",
      value: function (e) {
        var t = (this.props.reverse ? -1 : 1) * (e - this.getSliderStart())
        return this.trimAlignValue(this.calcValue(t))
      }
    }, {
      key: "calcOffset",
      value: function (e) {
        var this$props = this.props
        var this$props$min = this$props.min
        var r = (e - this$props$min) / (this$props.max - this$props$min)
        return Math.max(0, 100 * r)
      }
    }, {
      key: "saveHandle",
      value: function (e, t) {
        this.handlesRefs[e] = t
      }
    }, {
      key: "render",
      value: function () {
        var e
        var this$props = this.props
        var this$props$prefixCls = this$props.prefixCls
        var this$props$className = this$props.className
        var this$props$marks = this$props.marks
        var this$props$dots = this$props.dots
        var this$props$step = this$props.step
        var this$props$included = this$props.included
        var this$props$disabled = this$props.disabled
        var this$props$vertical = this$props.vertical
        var this$props$reverse = this$props.reverse
        var this$props$min = this$props.min
        var this$props$max = this$props.max
        var this$props$children = this$props.children
        var this$props$maximumTrackStyle = this$props.maximumTrackStyle
        var this$props$style = this$props.style
        var this$props$railStyle = this$props.railStyle
        var this$props$dotStyle = this$props.dotStyle
        var this$props$activeDotStyle = this$props.activeDotStyle
        var T = (0, u.default)((0, d.default)(n.prototype), "render", this).call(this)
        var t$tracks = T.tracks
        var t$handles = T.handles
        var I = (0, _.default)(this$props$prefixCls, (e = {}, (0, a.default)(e, "".concat(this$props$prefixCls, "-with-marks"), Object.keys(this$props$marks).length), (0, a.default)(e, "".concat(this$props$prefixCls, "-disabled"), this$props$disabled), (0, a.default)(e, "".concat(this$props$prefixCls, "-vertical"), this$props$vertical), (0, a.default)(e, this$props$className, this$props$className), e))
        return h.default.createElement("div", {
          ref: this.saveSlider,
          className: I,
          onTouchStart: this$props$disabled ? E : this.onTouchStart,
          onMouseDown: this$props$disabled ? E : this.onMouseDown,
          onMouseUp: this$props$disabled ? E : this.onMouseUp,
          onKeyDown: this$props$disabled ? E : this.onKeyDown,
          onFocus: this$props$disabled ? E : this.onFocus,
          onBlur: this$props$disabled ? E : this.onBlur,
          style: this$props$style
        }, h.default.createElement("div", {
          className: "".concat(this$props$prefixCls, "-rail"),
          style: w(w({}, this$props$maximumTrackStyle), this$props$railStyle)
        }), t$tracks, h.default.createElement(g.default, {
          prefixCls: this$props$prefixCls,
          vertical: this$props$vertical,
          reverse: this$props$reverse,
          marks: this$props$marks,
          dots: this$props$dots,
          step: this$props$step,
          included: this$props$included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: this$props$max,
          min: this$props$min,
          dotStyle: this$props$dotStyle,
          activeDotStyle: this$props$activeDotStyle
        }), t$handles, h.default.createElement(v.default, {
          className: "".concat(this$props$prefixCls, "-mark"),
          onClickLabel: this$props$disabled ? E : this.onClickMarkLabel,
          vertical: this$props$vertical,
          marks: this$props$marks,
          included: this$props$included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: this$props$max,
          min: this$props$min,
          reverse: this$props$reverse
        }), this$props$children)
      }
    }])
    return n
  }(e)).displayName = "ComponentEnhancer(".concat(e.displayName, ")")
  t.defaultProps = w(w({}, e.defaultProps), {}, {
    prefixCls: "rc-slider",
    className: "",
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function (e) {
      var e$index = e.index
      var n = (0, o.default)(e, ["index"])
      delete n.dragging
      return null === n.value ? null : h.default.createElement(m.default, Object.assign({}, n, {
        key: e$index
      }))
    },
    onBeforeChange: E,
    onChange: E,
    onAfterChange: E,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    reverse: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  })
  return t
}
var o = i(require("./1188/index"))
var a = i(require("../746"))
var s = i(require("../1044"))
var c = i(require("../1045"))
var u = i(require("./1756/index"))
var l = i(require("../1047/index"))
var f = i(require("../1048/index"))
var d = i(require("../927"))
var h = i(require("react"))
var p = i(require("./1256"))
var _ = i(require("../../../8"))
var A = i(require("../950"))
var g = i(require("./1758"))
var v = i(require("./1759"))
var m = i(require("./1760"))
var y = r(require("../1257/index"))
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
function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      b(Object(n), true).forEach(function (t) {
        (0, a.default)(e, t, n[t])
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
function E() {}
