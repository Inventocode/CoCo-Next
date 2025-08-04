"use strict";

var r = require("./568");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var i = r(require("./746"));
var o = r(require("react"));
function a(e, t) {
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
function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      a(Object(n), !0).forEach(function (t) {
        (0, i.default)(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        a(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
var c = function (e) {
  var t;
  var n;
  var r = e.className;
  var a = e.included;
  var c = e.vertical;
  var u = e.style;
  var l = e.length;
  var f = e.offset;
  var d = e.reverse;
  if (l < 0) {
    d = !d;
    l = Math.abs(l);
    f = 100 - f;
  }
  var h = c ? (t = {}, (0, i.default)(t, d ? "top" : "bottom", "".concat(f, "%")), (0, i.default)(t, d ? "bottom" : "top", "auto"), (0, i.default)(t, "height", "".concat(l, "%")), t) : (n = {}, (0, i.default)(n, d ? "right" : "left", "".concat(f, "%")), (0, i.default)(n, d ? "left" : "right", "auto"), (0, i.default)(n, "width", "".concat(l, "%")), n);
  var p = s(s({}, u), h);
  return a ? o.default.createElement("div", {
    className: r,
    style: p
  }) : null;
};
exports.default = c;