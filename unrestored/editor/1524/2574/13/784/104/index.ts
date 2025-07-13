"use strict";

var r = u(require("./2401/index"));
var i = u(require("./2473/index"));
var o = u(require("./2493"));
var a = u(require("./2494"));
var s = u(require("./2495"));
var c = u(require("./2496"));
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
export default l;