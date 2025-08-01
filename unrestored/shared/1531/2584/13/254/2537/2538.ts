"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.handleFocus = void 0;
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
var o = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1;
      r.configurable = !0;
      if ("value" in r) {
        r.writable = !0;
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
var a = require("../../../0/index");
var s = (r = a) && r.__esModule ? r : {
  default: r
};
function c(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function u(e, t) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
}
function l(e, t) {
  if ("function" !== typeof t && null !== t) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
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
exports.handleFocus = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
  return function (n) {
    function r() {
      var e;
      var t;
      var n;
      c(this, r);
      for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) {
        o[a] = arguments[a];
      }
      t = n = u(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(o)));
      n.state = {
        focus: !1
      };
      n.handleFocus = function () {
        return n.setState({
          focus: !0
        });
      };
      n.handleBlur = function () {
        return n.setState({
          focus: !1
        });
      };
      return u(n, t);
    }
    l(r, n);
    o(r, [{
      key: "render",
      value: function () {
        return s.default.createElement(t, {
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, s.default.createElement(e, i({}, this.props, this.state)));
      }
    }]);
    return r;
  }(s.default.Component);
};