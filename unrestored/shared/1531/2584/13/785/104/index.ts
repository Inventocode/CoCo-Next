"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = void 0;
var r = u(require("./2411/index"));
var i = u(require("./2483/index"));
var o = u(require("./2503"));
var a = u(require("./2504"));
var s = u(require("./2505"));
var c = u(require("./2506"));
function u(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
exports.hover = a.default;
exports.handleHover = a.default;
exports.handleActive = s.default;
exports.loop = c.default;
var l = exports.ReactCSS = function (e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
    n[a - 1] = arguments[a];
  }
  var s = (0, r.default)(n);
  var c = (0, i.default)(e, s);
  return (0, o.default)(c);
};
exports.default = l;