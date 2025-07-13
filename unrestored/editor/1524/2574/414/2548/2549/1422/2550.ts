"use strict";

exports.assignProperties = function (e, t) {
  Object.keys(t).forEach(function (n) {
    e[n] = t[n];
  });
};
exports.assign = function (e, n, r) {
  if ("string" === typeof n && (n = n.split(".")), n.length > 1) {
    var o = n.shift();
    t.assign(e[o] = "[object Object]" === Object.prototype.toString.call(e[o]) ? e[o] : {}, n, r);
  } else {
    e[n[0]] = r;
  }
};