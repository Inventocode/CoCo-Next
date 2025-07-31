"use strict";

var r = require("../568");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var i = r(require("../746"));
var o = r(require("./1185/index"));
var a = r(require("../1043"));
var s = r(require("../1044"));
var c = r(require("../1046/index"));
var u = r(require("../1047/index"));
var l = r(require("../926"));
var f = r(require("../../../0/index"));
var h = r(require("../../../8"));
var d = r(require("./1253"));
function p(e, t) {
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
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      p(Object(n), !0).forEach(function (t) {
        (0, i.default)(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        p(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
function A(e) {
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
var g = function (e) {
  (0, c.default)(n, e);
  var t = A(n);
  function n() {
    var e;
    (0, a.default)(this, n);
    (e = t.apply(this, arguments)).state = {
      clickFocused: !1
    };
    e.setHandleRef = function (t) {
      e.handle = t;
    };
    e.handleMouseUp = function () {
      if (document.activeElement === e.handle) {
        e.setClickFocus(!0);
      }
    };
    e.handleMouseDown = function (t) {
      t.preventDefault();
      e.focus();
    };
    e.handleBlur = function () {
      e.setClickFocus(!1);
    };
    e.handleKeyDown = function () {
      e.setClickFocus(!1);
    };
    return e;
  }
  (0, s.default)(n, [{
    key: "componentDidMount",
    value: function () {
      this.onMouseUpListener = (0, d.default)(document, "mouseup", this.handleMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: "setClickFocus",
    value: function (e) {
      this.setState({
        clickFocused: e
      });
    }
  }, {
    key: "clickFocus",
    value: function () {
      this.setClickFocus(!0);
      this.focus();
    }
  }, {
    key: "focus",
    value: function () {
      this.handle.focus();
    }
  }, {
    key: "blur",
    value: function () {
      this.handle.blur();
    }
  }, {
    key: "render",
    value: function () {
      var e;
      var t;
      var n;
      var r = this.props;
      var a = r.prefixCls;
      var s = r.vertical;
      var c = r.reverse;
      var u = r.offset;
      var l = r.style;
      var d = r.disabled;
      var p = r.min;
      var A = r.max;
      var g = r.value;
      var v = r.tabIndex;
      var m = r.ariaLabel;
      var y = r.ariaLabelledBy;
      var b = r.ariaValueTextFormatter;
      var w = (0, o.default)(r, ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"]);
      var E = (0, h.default)(this.props.className, (0, i.default)({}, "".concat(a, "-handle-click-focused"), this.state.clickFocused));
      var x = s ? (e = {}, (0, i.default)(e, c ? "top" : "bottom", "".concat(u, "%")), (0, i.default)(e, c ? "bottom" : "top", "auto"), (0, i.default)(e, "transform", c ? null : "translateY(+50%)"), e) : (t = {}, (0, i.default)(t, c ? "right" : "left", "".concat(u, "%")), (0, i.default)(t, c ? "left" : "right", "auto"), (0, i.default)(t, "transform", "translateX(".concat(c ? "+" : "-", "50%)")), t);
      var C = _(_({}, l), x);
      var O = v || 0;
      if (d || null === v) {
        O = null;
      }
      if (b) {
        n = b(g);
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
        "aria-valuemin": p,
        "aria-valuemax": A,
        "aria-valuenow": g,
        "aria-disabled": !!d,
        "aria-label": m,
        "aria-labelledby": y,
        "aria-valuetext": n
      }));
    }
  }]);
  return n;
}(f.default.Component);
exports.default = g;