"use strict";

var n = require("./584");
var o = require("./165");
var i = require("./180");
var a = require("./37");
var u = function () {
  var t = function (e, r) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var r in e) if (e.hasOwnProperty(r)) {
        t[r] = e[r];
      }
    })(e, r);
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r);
    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
var s = function (t) {
  function e(r) {
    var n = t.call(this, r) || this;
    n.luminances = e.EMPTY;
    n.buckets = new Int32Array(e.LUMINANCE_BUCKETS);
    return n;
  }
  u(e, t);
  e.prototype.getBlackRow = function (t, r) {
    var n = this.getLuminanceSource();
    var i = n.getWidth();
    if (undefined === r || null === r || r.getSize() < i) {
      r = new o.a(i);
    } else {
      r.clear();
    }
    this.initArrays(i);
    for (var a = n.getRow(t, this.luminances), u = this.buckets, s = 0; s < i; s++) {
      u[(255 & a[s]) >> e.LUMINANCE_SHIFT]++;
    }
    var c = e.estimateBlackPoint(u);
    if (i < 3) {
      for (s = 0; s < i; s++) {
        if ((255 & a[s]) < c) {
          r.set(s);
        }
      }
    } else {
      var f = 255 & a[0];
      var h = 255 & a[1];
      for (s = 1; s < i - 1; s++) {
        var l = 255 & a[s + 1];
        if ((4 * h - f - l) / 2 < c) {
          r.set(s);
        }
        f = h;
        h = l;
      }
    }
    return r;
  };
  e.prototype.getBlackMatrix = function () {
    var t = this.getLuminanceSource();
    var r = t.getWidth();
    var n = t.getHeight();
    var o = new i.a(r, n);
    this.initArrays(r);
    for (var a = this.buckets, u = 1; u < 5; u++) {
      for (var s = Math.floor(n * u / 5), c = t.getRow(s, this.luminances), f = Math.floor(4 * r / 5), h = Math.floor(r / 5); h < f; h++) {
        a[(255 & c[h]) >> e.LUMINANCE_SHIFT]++;
      }
    }
    var l = e.estimateBlackPoint(a);
    var d = t.getMatrix();
    for (u = 0; u < n; u++) {
      var p = u * r;
      for (h = 0; h < r; h++) {
        if ((255 & d[p + h]) < l) {
          o.set(h, u);
        }
      }
    }
    return o;
  };
  e.prototype.createBinarizer = function (t) {
    return new e(t);
  };
  e.prototype.initArrays = function (t) {
    if (this.luminances.length < t) {
      this.luminances = new Uint8ClampedArray(t);
    }
    for (var r = this.buckets, n = 0; n < e.LUMINANCE_BUCKETS; n++) {
      r[n] = 0;
    }
  };
  e.estimateBlackPoint = function (t) {
    for (var r = t.length, n = 0, o = 0, i = 0, u = 0; u < r; u++) {
      if (t[u] > i) {
        o = u;
        i = t[u];
      }
      if (t[u] > n) {
        n = t[u];
      }
    }
    var s = 0;
    var c = 0;
    for (u = 0; u < r; u++) {
      var f = u - o;
      if ((p = t[u] * f * f) > c) {
        s = u;
        c = p;
      }
    }
    if (o > s) {
      var h = o;
      o = s;
      s = h;
    }
    if (s - o <= r / 16) {
      throw new a.a();
    }
    var l = s - 1;
    var d = -1;
    for (u = s - 1; u > o; u--) {
      var p;
      var g = u - o;
      if ((p = g * g * (s - u) * (n - t[u])) > d) {
        l = u;
        d = p;
      }
    }
    return l << e.LUMINANCE_SHIFT;
  };
  e.LUMINANCE_BITS = 5;
  e.LUMINANCE_SHIFT = 8 - e.LUMINANCE_BITS;
  e.LUMINANCE_BUCKETS = 1 << e.LUMINANCE_BITS;
  e.EMPTY = Uint8ClampedArray.from([0]);
  return e;
}(n.a);
exports.a = s;