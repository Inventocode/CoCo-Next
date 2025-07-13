"use strict";

export { i as c };
export { o as b };
export { a };
import * as r from "./316";
function i(e, t) {
  if (void 0 === t) {
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
  return !!Object(r.h)(e) && (Object(r.g)(t) ? t.test(e) : "string" === typeof t && -1 !== e.indexOf(t));
}