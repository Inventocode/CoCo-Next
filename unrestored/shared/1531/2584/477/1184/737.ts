/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：737
 */

"use strict";

export { i as d };
export { o as c };
export { a as b };
export { s as a };
import r = require("./306");
function i(e, t) {
  if (undefined === t) {
    t = 0;
  }
  return "string" !== typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "...";
}
function o(e, t) {
  var n = e;
  var r = n.length;
  if (r <= 150) {
    return n;
  }
  if (t > r) {
    t = r;
  }
  var i = Math.max(t - 60, 0);
  if (i < 5) {
    i = 0;
  }
  var o = Math.min(i + 140, r);
  if (o > r - 5) {
    o = r;
  }
  if (o === r) {
    i = Math.max(o - 140, 0);
  }
  n = n.slice(i, o);
  if (i > 0) {
    n = "'{snip} " + n;
  }
  if (o < r) {
    n += " {snip}";
  }
  return n;
}
function a(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  for (var n = [], r = 0; r < e.length; r++) {
    var i = e[r];
    try {
      n.push(String(i));
    } catch (o) {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function s(e, t) {
  return !!r.k(e) && (r.j(t) ? t.test(e) : "string" === typeof t && -1 !== e.indexOf(t));
}
export default s;