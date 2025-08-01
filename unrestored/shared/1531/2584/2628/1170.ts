"use strict";

module.exports = function (e, t) {
  if (e === t) {
    return !0;
  }
  if (!e || !t) {
    return !1;
  }
  var n = Object.keys(e);
  var r = Object.keys(t);
  var i = n.length;
  if (r.length !== i) {
    return !1;
  }
  for (var o = 0; o < i; o++) {
    var a = n[o];
    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) {
      return !1;
    }
  }
  return !0;
};