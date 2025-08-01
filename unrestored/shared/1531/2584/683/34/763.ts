"use strict";

var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty;
var o = Object.prototype.propertyIsEnumerable;
function a(e) {
  if (null === e || void 0 === e) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(e);
}
module.exports = function () {
  try {
    if (!Object.assign) {
      return !1;
    }
    var e = new String("abc");
    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) {
      return !1;
    }
    for (var t = {}, n = 0; n < 10; n++) {
      t["_" + String.fromCharCode(n)] = n;
    }
    if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
      return t[e];
    }).join("")) {
      return !1;
    }
    var r = {};
    "abcdefghijklmnopqrst".split("").forEach(function (e) {
      r[e] = e;
    });
    return "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
  } catch (i) {
    return !1;
  }
}() ? Object.assign : function (e, t) {
  for (var n, s, c = a(e), u = 1; u < arguments.length; u++) {
    for (var l in n = Object(arguments[u])) if (i.call(n, l)) {
      c[l] = n[l];
    }
    if (r) {
      s = r(n);
      for (var f = 0; f < s.length; f++) {
        if (o.call(n, s[f])) {
          c[s[f]] = n[s[f]];
        }
      }
    }
  }
  return c;
};