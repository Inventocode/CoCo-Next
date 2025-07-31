"use strict";

function r(e, t) {
  if (null == t || t > e.length) {
    t = e.length;
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
}
export { r as a };
export default r;