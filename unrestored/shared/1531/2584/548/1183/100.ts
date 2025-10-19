/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：100
 */

"use strict";

function r(e) {
  var t;
  var n;
  var i = "";
  if ("string" === typeof e || "number" === typeof e) {
    i += e;
  } else if ("object" === typeof e) {
    if (Array.isArray(e)) {
      for (t = 0; t < e.length; t++) {
        if (e[t] && (n = r(e[t]))) {
          if (i) {
            i += " ";
          }
          i += n;
        }
      }
    } else {
      for (t in e) if (e[t]) {
        if (i) {
          i += " ";
        }
        i += t;
      }
    }
  }
  return i;
}
exports.a = function () {
  for (var e, t, n = 0, i = ""; n < arguments.length;) {
    if ((e = arguments[n++]) && (t = r(e))) {
      if (i) {
        i += " ";
      }
      i += t;
    }
  }
  return i;
};