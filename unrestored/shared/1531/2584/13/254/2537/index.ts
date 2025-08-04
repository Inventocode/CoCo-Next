"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Swatch = void 0;
var r = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r];
    }
  }
  return e;
};
var i = c(require("react"));
var o = c(require("../../785/104/index"));
var a = require("./2538");
var s = c(require("../1158/index"));
function c(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
var u = exports.Swatch = function (e) {
  var t = e.color;
  var n = e.style;
  var a = e.onClick;
  var c = void 0 === a ? function () {} : a;
  var u = e.onHover;
  var l = e.title;
  var f = void 0 === l ? t : l;
  var d = e.children;
  var h = e.focus;
  var p = e.focusStyle;
  var _ = void 0 === p ? {} : p;
  var A = "transparent" === t;
  var g = (0, o.default)({
    default: {
      swatch: r({
        background: t,
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        outline: "none"
      }, n, h ? _ : {})
    }
  });
  var v = {};
  if (u) {
    v.onMouseOver = function (e) {
      return u(t, e);
    };
  }
  return i.default.createElement("div", r({
    style: g.swatch,
    onClick: function (e) {
      return c(t, e);
    },
    title: f,
    tabIndex: 0,
    onKeyDown: function (e) {
      return 13 === e.keyCode && c(t, e);
    }
  }, v), d, A && i.default.createElement(s.default, {
    borderRadius: g.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }));
};
exports.default = (0, a.handleFocus)(u);