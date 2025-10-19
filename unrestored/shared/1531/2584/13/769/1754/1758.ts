/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1758
 */

"use strict";

var r = require("../568");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../746"));
var o = r(require("react"));
var a = r(require("../../../8"));
var s = r(require("../950"));
function c(e, t) {
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
function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      c(Object(n), true).forEach(function (t) {
        (0, i.default)(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        c(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
var l = function (e) {
  var t = e.prefixCls;
  var n = e.vertical;
  var r = e.reverse;
  var c = e.marks;
  var l = e.dots;
  var f = e.step;
  var d = e.included;
  var h = e.lowerBound;
  var p = e.upperBound;
  var _ = e.max;
  var A = e.min;
  var g = e.dotStyle;
  var v = e.activeDotStyle;
  var m = _ - A;
  var y = function (e, t, n, r, i, o) {
    (0, s.default)(!n || r > 0, "`Slider[step]` should be a positive number in order to make Slider[dots] work.");
    var a = Object.keys(t).map(parseFloat).sort(function (e, t) {
      return e - t;
    });
    if (n && r) {
      for (var c = i; c <= o; c += r) {
        if (-1 === a.indexOf(c)) {
          a.push(c);
        }
      }
    }
    return a;
  }(0, c, l, f, A, _).map(function (e) {
    var s;
    var c = "".concat(Math.abs(e - A) / m * 100, "%");
    var l = !d && e === p || d && e <= p && e >= h;
    var f = u(u({}, g), {}, n ? (0, i.default)({}, r ? "top" : "bottom", c) : (0, i.default)({}, r ? "right" : "left", c));
    if (l) {
      f = u(u({}, f), v);
    }
    var _ = (0, a.default)((s = {}, (0, i.default)(s, "".concat(t, "-dot"), true), (0, i.default)(s, "".concat(t, "-dot-active"), l), (0, i.default)(s, "".concat(t, "-dot-reverse"), r), s));
    return o.default.createElement("span", {
      className: _,
      style: f,
      key: e
    });
  });
  return o.default.createElement("div", {
    className: "".concat(t, "-step")
  }, y);
};
exports.default = l;