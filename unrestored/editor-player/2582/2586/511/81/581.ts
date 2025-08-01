"use strict";

var n = require("./63");
var o = function () {
  function t(t) {
    this.binarizer = t;
    if (null === t) {
      throw new n.a("Binarizer must be non-null.");
    }
  }
  t.prototype.getWidth = function () {
    return this.binarizer.getWidth();
  };
  t.prototype.getHeight = function () {
    return this.binarizer.getHeight();
  };
  t.prototype.getBlackRow = function (t, e) {
    return this.binarizer.getBlackRow(t, e);
  };
  t.prototype.getBlackMatrix = function () {
    if (!(null !== this.matrix && void 0 !== this.matrix)) {
      this.matrix = this.binarizer.getBlackMatrix();
    }
    return this.matrix;
  };
  t.prototype.isCropSupported = function () {
    return this.binarizer.getLuminanceSource().isCropSupported();
  };
  t.prototype.crop = function (e, r, n, o) {
    var i = this.binarizer.getLuminanceSource().crop(e, r, n, o);
    return new t(this.binarizer.createBinarizer(i));
  };
  t.prototype.isRotateSupported = function () {
    return this.binarizer.getLuminanceSource().isRotateSupported();
  };
  t.prototype.rotateCounterClockwise = function () {
    var e = this.binarizer.getLuminanceSource().rotateCounterClockwise();
    return new t(this.binarizer.createBinarizer(e));
  };
  t.prototype.rotateCounterClockwise45 = function () {
    var e = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
    return new t(this.binarizer.createBinarizer(e));
  };
  t.prototype.toString = function () {
    try {
      return this.getBlackMatrix().toString();
    } catch (t) {
      return "";
    }
  };
  return t;
}();
exports.a = o;