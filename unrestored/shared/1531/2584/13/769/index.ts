"use strict";

var r = require("./1046/index");
var i = require("./568");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var o = i(require("./746"));
var a = i(require("./1044"));
var s = i(require("./1045"));
var c = i(require("./1047/index"));
var u = i(require("./1048/index"));
var l = i(require("./927"));
var f = i(require("react"));
var d = i(require("./950"));
var h = i(require("./1753"));
var p = i(require("./1754/index"));
var _ = r(require("./1257/index"));
function A(e, t) {
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
function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      A(Object(n), !0).forEach(function (t) {
        (0, o.default)(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        A(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
function v(e) {
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
    var r = (0, l.default)(e);
    if (t) {
      var i = (0, l.default)(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else {
      n = r.apply(this, arguments);
    }
    return (0, u.default)(this, n);
  };
}
var m = function (e) {
  (0, c.default)(n, e);
  var t = v(n);
  function n(e) {
    var r;
    (0, a.default)(this, n);
    (r = t.call(this, e)).onEnd = function (e) {
      var t = r.state.dragging;
      r.removeDocumentEvents();
      if (t || e) {
        r.props.onAfterChange(r.getValue());
      }
      r.setState({
        dragging: !1
      });
    };
    var i = void 0 !== e.defaultValue ? e.defaultValue : e.min;
    var o = void 0 !== e.value ? e.value : i;
    r.state = {
      value: r.trimAlignValue(o),
      dragging: !1
    };
    (0, d.default)(!("minimumTrackStyle" in e), "minimumTrackStyle will be deprecated, please use trackStyle instead.");
    (0, d.default)(!("maximumTrackStyle" in e), "maximumTrackStyle will be deprecated, please use railStyle instead.");
    return r;
  }
  (0, s.default)(n, [{
    key: "calcValueByPos",
    value: function (e) {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function (e) {
      return 0;
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
        var n = this.props;
        var r = n.value;
        var i = n.onChange;
        var o = void 0 !== r ? r : t.value;
        var a = this.trimAlignValue(o, this.props);
        if (a !== t.value) {
          this.setState({
            value: a
          });
          if (_.isValueOutOfRange(o, this.props)) {
            i(a);
          }
        }
      }
    }
  }, {
    key: "onChange",
    value: function (e) {
      var t = this.props;
      var n = !("value" in t);
      var r = e.value > this.props.max ? g(g({}, e), {}, {
        value: this.props.max
      }) : e;
      if (n) {
        this.setState(r);
      }
      var i = r.value;
      t.onChange(i);
    }
  }, {
    key: "onStart",
    value: function (e) {
      this.setState({
        dragging: !0
      });
      var t = this.props;
      var n = this.getValue();
      t.onBeforeChange(n);
      var r = this.calcValueByPos(e);
      this.startValue = r;
      this.startPosition = e;
      if (r !== n) {
        this.prevMovedHandleIndex = 0;
        this.onChange({
          value: r
        });
      }
    }
  }, {
    key: "onMove",
    value: function (e, t) {
      _.pauseEvent(e);
      var n = this.state.value;
      var r = this.calcValueByPos(t);
      if (r !== n) {
        this.onChange({
          value: r
        });
      }
    }
  }, {
    key: "onKeyboard",
    value: function (e) {
      var t = this.props;
      var n = t.reverse;
      var r = t.vertical;
      var i = _.getKeyboardValueMutator(e, r, n);
      if (i) {
        _.pauseEvent(e);
        var o = this.state.value;
        var a = i(o, this.props);
        var s = this.trimAlignValue(a);
        if (s === o) {
          return;
        }
        this.onChange({
          value: s
        });
        this.props.onAfterChange(s);
        this.onEnd();
      }
    }
  }, {
    key: "getValue",
    value: function () {
      return this.state.value;
    }
  }, {
    key: "getLowerBound",
    value: function () {
      return this.props.min;
    }
  }, {
    key: "getUpperBound",
    value: function () {
      return this.state.value;
    }
  }, {
    key: "trimAlignValue",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (null === e) {
        return null;
      }
      var n = g(g({}, this.props), t);
      var r = _.ensureValueInRange(e, n);
      return _.ensureValuePrecision(r, n);
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.props;
      var n = t.prefixCls;
      var r = t.vertical;
      var i = t.included;
      var o = t.disabled;
      var a = t.minimumTrackStyle;
      var s = t.trackStyle;
      var c = t.handleStyle;
      var u = t.tabIndex;
      var l = t.ariaLabelForHandle;
      var d = t.ariaLabelledByForHandle;
      var p = t.ariaValueTextFormatterForHandle;
      var _ = t.min;
      var A = t.max;
      var v = t.startPoint;
      var m = t.reverse;
      var y = t.handle;
      var b = this.state;
      var w = b.value;
      var E = b.dragging;
      var x = this.calcOffset(w);
      var C = y({
        className: "".concat(n, "-handle"),
        prefixCls: n,
        vertical: r,
        offset: x,
        value: w,
        dragging: E,
        disabled: o,
        min: _,
        max: A,
        reverse: m,
        index: 0,
        tabIndex: u,
        ariaLabel: l,
        ariaLabelledBy: d,
        ariaValueTextFormatter: p,
        style: c[0] || c,
        ref: function (t) {
          return e.saveHandle(0, t);
        }
      });
      var O = void 0 !== v ? this.calcOffset(v) : 0;
      var k = s[0] || s;
      return {
        tracks: f.default.createElement(h.default, {
          className: "".concat(n, "-track"),
          vertical: r,
          included: i,
          offset: O,
          reverse: m,
          length: x - O,
          style: g(g({}, a), k)
        }),
        handles: C
      };
    }
  }]);
  return n;
}(f.default.Component);
var y = (0, p.default)(m);
exports.default = y;