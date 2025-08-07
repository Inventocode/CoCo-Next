"use strict";

function r(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false;
    r.configurable = true;
    if ("value" in r) {
      r.writable = true;
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
export default i;