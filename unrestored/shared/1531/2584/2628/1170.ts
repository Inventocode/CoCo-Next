"use strict";

module.exports = function (e, t) {
  if (e === t) {
    return true;
  }
  if (!e || !t) {
    return false;
  }
  var n = Object.keys(e);
  var r = Object.keys(t);
  var i = n.length;
  if (r.length !== i) {
    return false;
  }
  for (var o = 0; o < i; o++) {
    var a = n[o];
    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) {
      return false;
    }
  }
  return true;
};