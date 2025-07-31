"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Checkboard = void 0;
var r = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r];
    }
  }
  return e;
};
var i = require("../../../0/index");
var o = c(i);
var a = c(require("../../784/104/index"));
var s = function (e) {
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
}(require("./2499"));
function c(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
var u = exports.Checkboard = function (e) {
  var t = e.white;
  var n = e.grey;
  var c = e.size;
  var u = e.renderers;
  var l = e.borderRadius;
  var f = e.boxShadow;
  var h = e.children;
  var d = (0, a.default)({
    default: {
      grid: {
        borderRadius: l,
        boxShadow: f,
        absolute: "0px 0px 0px 0px",
        background: "url(" + s.get(t, n, c, u.canvas) + ") center left"
      }
    }
  });
  return (0, i.isValidElement)(h) ? o.default.cloneElement(h, r({}, h.props, {
    style: r({}, h.props.style, d.grid)
  })) : o.default.createElement("div", {
    style: d.grid
  });
};
u.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
};
exports.default = u;