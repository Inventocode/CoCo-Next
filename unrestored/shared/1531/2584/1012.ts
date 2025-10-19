/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1012
 */

"use strict";

export { o as a };
var r = Number.isNaN || function (e) {
  return "number" === typeof e && e !== e;
};
function i(e, t) {
  if (e.length !== t.length) {
    return false;
  }
  for (var n = 0; n < e.length; n++) {
    i = e[n];
    o = t[n];
    if (!(i === o || r(i) && r(o))) {
      return false;
    }
  }
  var i;
  var o;
  return true;
}
function o(e, t) {
  if (undefined === t) {
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