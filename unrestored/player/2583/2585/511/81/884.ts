"use strict";

var r = require("./117");
var i = require("./333");
var o = require("./347");
var a = require("./63");
var s = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
!function (t) {
  function e(e, n, r, i, o, s, u, c) {
    var l = t.call(this, s, u) || this;
    l.yuvData = e;
    l.dataWidth = n;
    l.dataHeight = r;
    l.left = i;
    l.top = o;
    if (i + s > n || o + u > r) {
      throw new a.a("Crop rectangle does not fit within image data.");
    }
    if (c) {
      l.reverseHorizontal(s, u);
    }
    return l;
  }
  s(e, t);
  e.prototype.getRow = function (t, e) {
    if (t < 0 || t >= this.getHeight()) {
      throw new a.a("Requested row is outside the image: " + t);
    }
    var n = this.getWidth();
    if (null === e || void 0 === e || e.length < n) {
      e = new Uint8ClampedArray(n);
    }
    var i = (t + this.top) * this.dataWidth + this.left;
    r.a.arraycopy(this.yuvData, i, e, 0, n);
    return e;
  };
  e.prototype.getMatrix = function () {
    var t = this.getWidth();
    var e = this.getHeight();
    if (t === this.dataWidth && e === this.dataHeight) {
      return this.yuvData;
    }
    var n = t * e;
    var i = new Uint8ClampedArray(n);
    var o = this.top * this.dataWidth + this.left;
    if (t === this.dataWidth) {
      r.a.arraycopy(this.yuvData, o, i, 0, n);
      return i;
    }
    for (var a = 0; a < e; a++) {
      var s = a * t;
      r.a.arraycopy(this.yuvData, o, i, s, t);
      o += this.dataWidth;
    }
    return i;
  };
  e.prototype.isCropSupported = function () {
    return !0;
  };
  e.prototype.crop = function (t, n, r, i) {
    return new e(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + n, r, i, !1);
  };
  e.prototype.renderThumbnail = function () {
    for (var t = this.getWidth() / e.THUMBNAIL_SCALE_FACTOR, n = this.getHeight() / e.THUMBNAIL_SCALE_FACTOR, r = new Int32Array(t * n), i = this.yuvData, o = this.top * this.dataWidth + this.left, a = 0; a < n; a++) {
      for (var s = a * t, u = 0; u < t; u++) {
        var c = 255 & i[o + u * e.THUMBNAIL_SCALE_FACTOR];
        r[s + u] = 4278190080 | 65793 * c;
      }
      o += this.dataWidth * e.THUMBNAIL_SCALE_FACTOR;
    }
    return r;
  };
  e.prototype.getThumbnailWidth = function () {
    return this.getWidth() / e.THUMBNAIL_SCALE_FACTOR;
  };
  e.prototype.getThumbnailHeight = function () {
    return this.getHeight() / e.THUMBNAIL_SCALE_FACTOR;
  };
  e.prototype.reverseHorizontal = function (t, e) {
    for (var n = this.yuvData, r = 0, i = this.top * this.dataWidth + this.left; r < e; r++, i += this.dataWidth) {
      for (var o = i + t / 2, a = i, s = i + t - 1; a < o; a++, s--) {
        var u = n[a];
        n[a] = n[s];
        n[s] = u;
      }
    }
  };
  e.prototype.invert = function () {
    return new o.a(this);
  };
  e.THUMBNAIL_SCALE_FACTOR = 2;
}(i.a);