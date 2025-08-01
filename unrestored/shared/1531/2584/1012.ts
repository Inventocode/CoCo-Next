"use strict";

export { o as a };
var r = Number.isNaN || function (e) {
  return "number" === typeof e && e !== e;
};
function i(e, t) {
  if (e.length !== t.length) {
    return !1;
  }
  for (var n = 0; n < e.length; n++) {
    i = e[n];
    o = t[n];
    if (!(i === o || r(i) && r(o))) {
      return !1;
    }
  }
  var i;
  var o;
  return !0;
}
function o(e, t) {
  if (void 0 === t) {
    t = i;
  }
  var n = null;
  function r() {
    for (var r = [], i = 0; i < arguments.length; i++) {
      r[i] = arguments[i];
    }
    if (n && n.lastThis === this && t(r, n.lastArgs)) {
      return n.lastResult;
    }
    var o = e.apply(this, r);
    n = {
      lastResult: o,
      lastArgs: r,
      lastThis: this
    };
    return o;
  }
  r.clear = function () {
    n = null;
  };
  return r;
}
export default o;