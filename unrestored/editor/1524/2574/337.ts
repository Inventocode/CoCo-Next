"use strict";

function r(e, t) {
  if (null == e) {
    return {};
  }
  var n;
  var r;
  var i = {};
  var o = Object.keys(e);
  for (r = 0; r < o.length; r++) {
    n = o[r];
    if (!(t.indexOf(n) >= 0)) {
      i[n] = e[n];
    }
  }
  return i;
}
export { r as a };
export default r;