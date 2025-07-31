"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.flattenNames = void 0;
var r = s(require("./2402"));
var i = s(require("./1139/index"));
var o = s(require("./1388/index"));
var a = s(require("./2412/index"));
function s(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
var c = exports.flattenNames = function e() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  var n = [];
  (0, a.default)(t, function (t) {
    if (Array.isArray(t)) {
      e(t).map(function (e) {
        return n.push(e);
      });
    } else {
      if ((0, o.default)(t)) {
        (0, i.default)(t, function (e, t) {
          if (!0 === e) {
            n.push(t);
          }
          n.push(t + "-" + e);
        });
      } else {
        if ((0, r.default)(t)) {
          n.push(t);
        }
      }
    }
  });
  return n;
};
exports.default = c;