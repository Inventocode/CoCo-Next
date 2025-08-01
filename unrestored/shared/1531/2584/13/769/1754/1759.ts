"use strict";

var r = require("../568");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var i = r(require("../746"));
var o = r(require("../1048/1081"));
var a = r(require("../../../0/index"));
var s = r(require("../../../8"));
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
      c(Object(n), !0).forEach(function (t) {
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
  var t = e.className;
  var n = e.vertical;
  var r = e.reverse;
  var c = e.marks;
  var l = e.included;
  var f = e.upperBound;
  var d = e.lowerBound;
  var h = e.max;
  var p = e.min;
  var _ = e.onClickLabel;
  var A = Object.keys(c);
  var g = h - p;
  var v = A.map(parseFloat).sort(function (e, t) {
    return e - t;
  }).map(function (e) {
    var h;
    var A = c[e];
    var v = "object" === (0, o.default)(A) && !a.default.isValidElement(A);
    var m = v ? A.label : A;
    if (!m && 0 !== m) {
      return null;
    }
    var y = !l && e === f || l && e <= f && e >= d;
    var b = (0, s.default)((h = {}, (0, i.default)(h, "".concat(t, "-text"), !0), (0, i.default)(h, "".concat(t, "-text-active"), y), h));
    var w = (0, i.default)({
      marginBottom: "-50%"
    }, r ? "top" : "bottom", "".concat((e - p) / g * 100, "%"));
    var E = (0, i.default)({
      transform: "translateX(".concat(r ? "50%" : "-50%", ")"),
      msTransform: "translateX(".concat(r ? "50%" : "-50%", ")")
    }, r ? "right" : "left", "".concat((e - p) / g * 100, "%"));
    var x = n ? w : E;
    var C = v ? u(u({}, x), A.style) : x;
    return a.default.createElement("span", {
      className: b,
      style: C,
      key: e,
      onMouseDown: function (t) {
        return _(t, e);
      },
      onTouchStart: function (t) {
        return _(t, e);
      }
    }, m);
  });
  return a.default.createElement("div", {
    className: t
  }, v);
};
exports.default = l;