"use strict";

exports.parse = function e(t, n) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r;
  if (Array.isArray(n)) {
    n.forEach(function (n) {
      return e(t, n, r, o);
    });
  } else if ("function" === typeof n) {
    n(t, r, o, e);
  } else {
    var i = Object.keys(n)[0];
    if (Array.isArray(n[i])) {
      o[i] = {};
      e(t, n[i], r, o[i]);
    } else {
      o[i] = n[i](t, r, o, e);
    }
  }
  return r;
};
exports.conditional = function (e, t) {
  return function (n, r, o, i) {
    if (t(n, r, o)) {
      i(n, e, r, o);
    }
  };
};
exports.loop = function (e, t) {
  return function (n, r, o, i) {
    for (var a = [], s = n.pos; t(n, r, o);) {
      var c = {};
      if (i(n, e, r, c), n.pos === s) {
        break;
      }
      s = n.pos;
      a.push(c);
    }
    return a;
  };
};