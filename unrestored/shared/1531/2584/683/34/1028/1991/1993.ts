/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1993
 */

"use strict";

var r = function (e) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "true" : "false";
    case "number":
      return isFinite(e) ? e : "";
    default:
      return "";
  }
};
module.exports = function (e, t, n, s) {
  t = t || "&";
  n = n || "=";
  if (null === e) {
    e = undefined;
  }
  return "object" === typeof e ? o(a(e), function (a) {
    var s = encodeURIComponent(r(a)) + n;
    return i(e[a]) ? o(e[a], function (e) {
      return s + encodeURIComponent(r(e));
    }).join(t) : s + encodeURIComponent(r(e[a]));
  }).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : "";
};
var i = Array.isArray || function (e) {
  return "[object Array]" === Object.prototype.toString.call(e);
};
function o(e, t) {
  if (e.map) {
    return e.map(t);
  }
  for (var n = [], r = 0; r < e.length; r++) {
    n.push(t(e[r], r));
  }
  return n;
}
var a = Object.keys || function (e) {
  var t = [];
  for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
    t.push(n);
  }
  return t;
};