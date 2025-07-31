"use strict";

var r = require("../1045/index");
var i = require("../568");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t;
  (t = function (e) {
    (0, l.default)(n, e);
    var t = function (e) {
      var t = function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) {
          return !1;
        }
        if (Reflect.construct.sham) {
          return !1;
        }
        if ("function" === typeof Proxy) {
          return !0;
        }
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
          return !0;
        } catch (e) {
          return !1;
        }
      }();
      return function () {
        var n;
        var r = (0, h.default)(e);
        if (t) {
          var i = (0, h.default)(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else {
          n = r.apply(this, arguments);
        }
        return (0, f.default)(this, n);
      };
    }(n);
    function n(e) {
      var r;
      (0, s.default)(this, n);
      (r = t.call(this, e)).onMouseDown = function (e) {
        if (0 === e.button) {
          var t = r.props.vertical;
          var n = y.getMousePosition(t, e);
          if (y.isEventFromHandle(e, r.handlesRefs)) {
            var i = y.getHandleCenterPosition(t, e.target);
            r.dragOffset = n - i;
            n = i;
          } else {
            r.dragOffset = 0;
          }
          r.removeDocumentEvents();
          r.onStart(n);
          r.addDocumentMouseEvents();
        }
      };
      r.onTouchStart = function (e) {
        if (!y.isNotTouchEvent(e)) {
          var t = r.props.vertical;
          var n = y.getTouchPosition(t, e);
          if (y.isEventFromHandle(e, r.handlesRefs)) {
            var i = y.getHandleCenterPosition(t, e.target);
            r.dragOffset = n - i;
            n = i;
          } else {
            r.dragOffset = 0;
          }
          r.onStart(n);
          r.addDocumentTouchEvents();
          y.pauseEvent(e);
        }
      };
      r.onFocus = function (e) {
        var t = r.props;
        var n = t.onFocus;
        var i = t.vertical;
        if (y.isEventFromHandle(e, r.handlesRefs)) {
          var o = y.getHandleCenterPosition(i, e.target);
          r.dragOffset = 0;
          r.onStart(o);
          y.pauseEvent(e);
          if (n) {
            n(e);
          }
        }
      };
      r.onBlur = function (e) {
        var t = r.props.onBlur;
        r.onEnd();
        if (t) {
          t(e);
        }
      };
      r.onMouseUp = function () {
        if (r.handlesRefs[r.prevMovedHandleIndex]) {
          r.handlesRefs[r.prevMovedHandleIndex].clickFocus();
        }
      };
      r.onMouseMove = function (e) {
        if (r.sliderRef) {
          var t = y.getMousePosition(r.props.vertical, e);
          r.onMove(e, t - r.dragOffset);
        } else {
          r.onEnd();
        }
      };
      r.onTouchMove = function (e) {
        if (!y.isNotTouchEvent(e) && r.sliderRef) {
          var t = y.getTouchPosition(r.props.vertical, e);
          r.onMove(e, t - r.dragOffset);
        } else {
          r.onEnd();
        }
      };
      r.onKeyDown = function (e) {
        if (r.sliderRef && y.isEventFromHandle(e, r.handlesRefs)) {
          r.onKeyboard(e);
        }
      };
      r.onClickMarkLabel = function (e, t) {
        e.stopPropagation();
        r.onChange({
          value: t
        });
        r.setState({
          value: t
        }, function () {
          return r.onEnd(!0);
        });
      };
      r.saveSlider = function (e) {
        r.sliderRef = e;
      };
      var i = e.step;
      var o = e.max;
      var a = e.min;
      var c = !isFinite(o - a) || (o - a) % i === 0;
      (0, A.default)(!i || Math.floor(i) !== i || c, "Slider[max] - Slider[min] (".concat(o - a, ") should be a multiple of Slider[step] (").concat(i, ")"));
      r.handlesRefs = {};
      return r;
    }
    (0, c.default)(n, [{
      key: "componentDidMount",
      value: function () {
        this.document = this.sliderRef && this.sliderRef.ownerDocument;
        var e = this.props;
        var t = e.autoFocus;
        var n = e.disabled;
        if (t && !n) {
          this.focus();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        if ((0, u.default)((0, h.default)(n.prototype), "componentWillUnmount", this)) {
          (0, u.default)((0, h.default)(n.prototype), "componentWillUnmount", this).call(this);
        }
        this.removeDocumentEvents();
      }
    }, {
      key: "getSliderStart",
      value: function () {
        var e = this.sliderRef;
        var t = this.props;
        var n = t.vertical;
        var r = t.reverse;
        var i = e.getBoundingClientRect();
        return n ? r ? i.bottom : i.top : window.pageXOffset + (r ? i.right : i.left);
      }
    }, {
      key: "getSliderLength",
      value: function () {
        var e = this.sliderRef;
        if (!e) {
          return 0;
        }
        var t = e.getBoundingClientRect();
        return this.props.vertical ? t.height : t.width;
      }
    }, {
      key: "addDocumentTouchEvents",
      value: function () {
        this.onTouchMoveListener = (0, p.default)(this.document, "touchmove", this.onTouchMove);
        this.onTouchUpListener = (0, p.default)(this.document, "touchend", this.onEnd);
      }
    }, {
      key: "addDocumentMouseEvents",
      value: function () {
        this.onMouseMoveListener = (0, p.default)(this.document, "mousemove", this.onMouseMove);
        this.onMouseUpListener = (0, p.default)(this.document, "mouseup", this.onEnd);
      }
    }, {
      key: "removeDocumentEvents",
      value: function () {
        if (this.onTouchMoveListener) {
          this.onTouchMoveListener.remove();
        }
        if (this.onTouchUpListener) {
          this.onTouchUpListener.remove();
        }
        if (this.onMouseMoveListener) {
          this.onMouseMoveListener.remove();
        }
        if (this.onMouseUpListener) {
          this.onMouseUpListener.remove();
        }
      }
    }, {
      key: "focus",
      value: function () {
        if (!this.props.disabled) {
          this.handlesRefs[0].focus();
        }
      }
    }, {
      key: "blur",
      value: function () {
        var e = this;
        if (!this.props.disabled) {
          Object.keys(this.handlesRefs).forEach(function (t) {
            if (e.handlesRefs[t] && e.handlesRefs[t].blur) {
              e.handlesRefs[t].blur();
            }
          });
        }
      }
    }, {
      key: "calcValue",
      value: function (e) {
        var t = this.props;
        var n = t.vertical;
        var r = t.min;
        var i = t.max;
        var o = Math.abs(Math.max(e, 0) / this.getSliderLength());
        return n ? (1 - o) * (i - r) + r : o * (i - r) + r;
      }
    }, {
      key: "calcValueByPos",
      value: function (e) {
        var t = (this.props.reverse ? -1 : 1) * (e - this.getSliderStart());
        return this.trimAlignValue(this.calcValue(t));
      }
    }, {
      key: "calcOffset",
      value: function (e) {
        var t = this.props;
        var n = t.min;
        var r = (e - n) / (t.max - n);
        return Math.max(0, 100 * r);
      }
    }, {
      key: "saveHandle",
      value: function (e, t) {
        this.handlesRefs[e] = t;
      }
    }, {
      key: "render",
      value: function () {
        var e;
        var t = this.props;
        var r = t.prefixCls;
        var i = t.className;
        var o = t.marks;
        var s = t.dots;
        var c = t.step;
        var l = t.included;
        var f = t.disabled;
        var p = t.vertical;
        var A = t.reverse;
        var m = t.min;
        var y = t.max;
        var b = t.children;
        var x = t.maximumTrackStyle;
        var C = t.style;
        var O = t.railStyle;
        var S = t.dotStyle;
        var k = t.activeDotStyle;
        var T = (0, u.default)((0, h.default)(n.prototype), "render", this).call(this);
        var B = T.tracks;
        var D = T.handles;
        var I = (0, _.default)(r, (e = {}, (0, a.default)(e, "".concat(r, "-with-marks"), Object.keys(o).length), (0, a.default)(e, "".concat(r, "-disabled"), f), (0, a.default)(e, "".concat(r, "-vertical"), p), (0, a.default)(e, i, i), e));
        return d.default.createElement("div", {
          ref: this.saveSlider,
          className: I,
          onTouchStart: f ? E : this.onTouchStart,
          onMouseDown: f ? E : this.onMouseDown,
          onMouseUp: f ? E : this.onMouseUp,
          onKeyDown: f ? E : this.onKeyDown,
          onFocus: f ? E : this.onFocus,
          onBlur: f ? E : this.onBlur,
          style: C
        }, d.default.createElement("div", {
          className: "".concat(r, "-rail"),
          style: w(w({}, x), O)
        }), B, d.default.createElement(g.default, {
          prefixCls: r,
          vertical: p,
          reverse: A,
          marks: o,
          dots: s,
          step: c,
          included: l,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: y,
          min: m,
          dotStyle: S,
          activeDotStyle: k
        }), D, d.default.createElement(v.default, {
          className: "".concat(r, "-mark"),
          onClickLabel: f ? E : this.onClickMarkLabel,
          vertical: p,
          marks: o,
          included: l,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: y,
          min: m,
          reverse: A
        }), b);
      }
    }]);
    return n;
  }(e)).displayName = "ComponentEnhancer(".concat(e.displayName, ")");
  t.defaultProps = w(w({}, e.defaultProps), {}, {
    prefixCls: "rc-slider",
    className: "",
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function (e) {
      var t = e.index;
      var n = (0, o.default)(e, ["index"]);
      delete n.dragging;
      return null === n.value ? null : d.default.createElement(m.default, Object.assign({}, n, {
        key: t
      }));
    },
    onBeforeChange: E,
    onChange: E,
    onAfterChange: E,
    included: !0,
    disabled: !1,
    dots: !1,
    vertical: !1,
    reverse: !1,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  });
  return t;
};
var o = i(require("./1185/index"));
var a = i(require("../746"));
var s = i(require("../1043"));
var c = i(require("../1044"));
var u = i(require("./1749/index"));
var l = i(require("../1046/index"));
var f = i(require("../1047/index"));
var h = i(require("../926"));
var d = i(require("../../../0/index"));
var p = i(require("./1253"));
var _ = i(require("../../../8"));
var A = i(require("../949"));
var g = i(require("./1751"));
var v = i(require("./1752"));
var m = i(require("./1753"));
var y = r(require("../1254/index"));
function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    n.push.apply(n, r);
  }
  return n;
}
function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      b(Object(n), !0).forEach(function (t) {
        (0, a.default)(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        b(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
function E() {}