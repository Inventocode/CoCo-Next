"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = undefined;
var r;
var i = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r];
    }
  }
  return e;
};
var o = require("react");
var a = (r = o) && r.__esModule ? r : {
  default: r
};
function s(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function c(e, t) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
}
function u(e, t) {
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
}
var l = exports.hover = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "span";
  return function (n) {
    function r() {
      var n;
      var o;
      var u;
      s(this, r);
      for (var l = arguments.length, f = Array(l), d = 0; d < l; d++) {
        f[d] = arguments[d];
      }
      o = u = c(this, (n = r.__proto__ || Object.getPrototypeOf(r)).call.apply(n, [this].concat(f)));
      u.state = {
        hover: false
      };
      u.handleMouseOver = function () {
        return u.setState({
          hover: true
        });
      };
      u.handleMouseOut = function () {
        return u.setState({
          hover: false
        });
      };
      u.render = function () {
        return a.default.createElement(t, {
          onMouseOver: u.handleMouseOver,
          onMouseOut: u.handleMouseOut
        }, a.default.createElement(e, i({}, u.props, u.state)));
      };
      return c(u, o);
    }
    u(r, n);
    return r;
  }(a.default.Component);
};
exports.default = l;