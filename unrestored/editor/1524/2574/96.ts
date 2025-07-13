"use strict";

function r(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1;
    r.configurable = !0;
    if ("value" in r) {
      r.writable = !0;
    }
    Object.defineProperty(e, r.key, r);
  }
}
function i(e, t, n) {
  if (t) {
    r(e.prototype, t);
  }
  if (n) {
    r(e, n);
  }
  return e;
}
export { i as a };