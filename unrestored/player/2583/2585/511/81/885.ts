"use strict";

var r = require("./347");
var i = require("./333");
var o = require("./117");
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
  function e(e, n, r, i, o, s, u) {
    var c = t.call(this, n, r) || this;
    c.dataWidth = i;
    c.dataHeight = o;
    c.left = s;
    c.top = u;
    if (4 === e.BYTES_PER_ELEMENT) {
      for (var l = n * r, d = new Uint8ClampedArray(l), f = 0; f < l; f++) {
        var h = e[f];
        var p = h >> 16 & 255;
        var m = h >> 7 & 510;
        var b = 255 & h;
        d[f] = (p + m + b) / 4 & 255;
      }
      c.luminances = d;
    } else {
      c.luminances = e;
    }
    if (undefined === i) {
      c.dataWidth = n;
    }
    if (undefined === o) {
      c.dataHeight = r;
    }
    if (undefined === s) {
      c.left = 0;
    }
    if (undefined === u) {
      c.top = 0;
    }
    if (c.left + n > c.dataWidth || c.top + r > c.dataHeight) {
      throw new a.a("Crop rectangle does not fit within image data.");
    }
    return c;
  }
  s(e, t);
  e.prototype.getRow = function (t, e) {
    if (t < 0 || t >= this.getHeight()) {
      throw new a.a("Requested row is outside the image: " + t);
    }
    var n = this.getWidth();
    if (null === e || undefined === e || e.length < n) {
      e = new Uint8ClampedArray(n);
    }
    var r = (t + this.top) * this.dataWidth + this.left;
    o.a.arraycopy(this.luminances, r, e, 0, n);
    return e;
  };
  e.prototype.getMatrix = function () {
    var t = this.getWidth();
    var e = this.getHeight();
    if (t === this.dataWidth && e === this.dataHeight) {
      return this.luminances;
    }
    var n = t * e;
    var r = new Uint8ClampedArray(n);
    var i = this.top * this.dataWidth + this.left;
    if (t === this.dataWidth) {
      o.a.arraycopy(this.luminances, i, r, 0, n);
      return r;
    }
    for (var a = 0; a < e; a++) {
      var s = a * t;
      o.a.arraycopy(this.luminances, i, r, s, t);
      i += this.dataWidth;
    }
    return r;
  };
  e.prototype.isCropSupported = function () {
    return true;
  };
  e.prototype.crop = function (t, n, r, i) {
    return new e(this.luminances, r, i, this.dataWidth, this.dataHeight, this.left + t, this.top + n);
  };
  e.prototype.invert = function () {
    return new r.a(this);
  };
}(i.a);