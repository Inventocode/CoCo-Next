/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2411
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenNames = undefined;
var r = s(require("./2412/index"));
var i = s(require("../2483/1142/index"));
var o = s(require("./1395/index"));
var a = s(require("./2422/index"));
function s(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
var c = exports.flattenNames = function e() {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  var n = [];
  (0, a.default)(t, function (t) {
    if (Array.isArray(t)) {
      e(t).map(function (e) {
        return n.push(e);
      });
    } else {
      if ((0, o.default)(t)) {
        (0, i.default)(t, function (e, t) {
          if (true === e) {
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