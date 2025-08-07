"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alpha = undefined;
var r = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r];
    }
  }
  return e;
};
var i = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false;
      r.configurable = true;
      if ("value" in r) {
        r.writable = true;
      }
      Object.defineProperty(e, r.key, r);
    }
  }
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n);
    }
    if (r) {
      e(t, r);
    }
    return t;
  };
}();
var o = require("react");
var a = l(o);
var s = l(require("../../785/104/index"));
var c = function (e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = {};
  if (null != e) {
    for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
      t[n] = e[n];
    }
  }
  t.default = e;
  return t;
}(require("./2508"));
var u = l(require("../1158/index"));
function l(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
function f(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function d(e, t) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
}
var h = exports.Alpha = function (e) {
  function t() {
    var e;
    var n;
    var r;
    f(this, t);
    for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) {
      o[a] = arguments[a];
    }
    n = r = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o)));
    r.handleChange = function (e) {
      var t = c.calculateChange(e, r.props.hsl, r.props.direction, r.props.a, r.container);
      if (t && "function" === typeof r.props.onChange) {
        r.props.onChange(t, e);
      }
    };
    r.handleMouseDown = function (e) {
      r.handleChange(e);
      window.addEventListener("mousemove", r.handleChange);
      window.addEventListener("mouseup", r.handleMouseUp);
    };
    r.handleMouseUp = function () {
      r.unbindEventListeners();
    };
    r.unbindEventListeners = function () {
      window.removeEventListener("mousemove", r.handleChange);
      window.removeEventListener("mouseup", r.handleMouseUp);
    };
    return d(r, n);
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t);
      } else {
        e.__proto__ = t;
      }
    }
  })(t, e);
  i(t, [{
    key: "componentWillUnmount",
    value: function () {
      this.unbindEventListeners();
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.props.rgb;
      var n = (0, s.default)({
        default: {
          alpha: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: "0px 0px 0px 0px",
            overflow: "hidden",
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: "0px 0px 0px 0px",
            background: "linear-gradient(to right, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: "relative",
            height: "100%",
            margin: "0 3px"
          },
          pointer: {
            position: "absolute",
            left: 100 * t.a + "%"
          },
          slider: {
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            marginTop: "1px",
            transform: "translateX(-2px)"
          }
        },
        vertical: {
          gradient: {
            background: "linear-gradient(to bottom, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)"
          },
          pointer: {
            left: 0,
            top: 100 * t.a + "%"
          }
        },
        overwrite: r({}, this.props.style)
      }, {
        vertical: "vertical" === this.props.direction,
        overwrite: true
      });
      return a.default.createElement("div", {
        style: n.alpha
      }, a.default.createElement("div", {
        style: n.checkboard
      }, a.default.createElement(u.default, {
        renderers: this.props.renderers
      })), a.default.createElement("div", {
        style: n.gradient
      }), a.default.createElement("div", {
        style: n.container,
        ref: function (t) {
          return e.container = t;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, a.default.createElement("div", {
        style: n.pointer
      }, this.props.pointer ? a.default.createElement(this.props.pointer, this.props) : a.default.createElement("div", {
        style: n.slider
      }))));
    }
  }]);
  return t;
}(o.PureComponent || o.Component);
exports.default = h;