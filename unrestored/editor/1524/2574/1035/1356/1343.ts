"use strict";

export default (function e(t) {
  if (null === t) {
    return null;
  }
  if (Array.isArray(t)) {
    return t.map(e);
  }
  if ("object" === typeof t) {
    var n = {};
    for (var r in t) n[r] = e(t[r]);
    return n;
  }
  return t;
});