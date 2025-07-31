"use strict";

export { i as b };
export { o as a };
export { a as c };
var r = function (e, t) {
  return (r = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n];
    }
  })(e, t);
};
function i(e, t) {
  function n() {
    this.constructor = e;
  }
  r(e, t);
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var o = function () {
  return (o = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
Object.create;
function a() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
    e += arguments[t].length;
  }
  var r = Array(e);
  var i = 0;
  for (t = 0; t < n; t++) {
    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) {
      r[i] = o[a];
    }
  }
  return r;
}
Object.create;
export default o;