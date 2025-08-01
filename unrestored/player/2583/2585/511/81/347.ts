"use strict";

var r = require("./333");
var i = function () {
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
var o = function (t) {
  function e(e) {
    var n = t.call(this, e.getWidth(), e.getHeight()) || this;
    n.delegate = e;
    return n;
  }
  i(e, t);
  e.prototype.getRow = function (t, e) {
    for (var n = this.delegate.getRow(t, e), r = this.getWidth(), i = 0; i < r; i++) {
      n[i] = 255 - (255 & n[i]);
    }
    return n;
  };
  e.prototype.getMatrix = function () {
    for (var t = this.delegate.getMatrix(), e = this.getWidth() * this.getHeight(), n = new Uint8ClampedArray(e), r = 0; r < e; r++) {
      n[r] = 255 - (255 & t[r]);
    }
    return n;
  };
  e.prototype.isCropSupported = function () {
    return this.delegate.isCropSupported();
  };
  e.prototype.crop = function (t, n, r, i) {
    return new e(this.delegate.crop(t, n, r, i));
  };
  e.prototype.isRotateSupported = function () {
    return this.delegate.isRotateSupported();
  };
  e.prototype.invert = function () {
    return this.delegate;
  };
  e.prototype.rotateCounterClockwise = function () {
    return new e(this.delegate.rotateCounterClockwise());
  };
  e.prototype.rotateCounterClockwise45 = function () {
    return new e(this.delegate.rotateCounterClockwise45());
  };
  return e;
}(r.a);
exports.a = o;