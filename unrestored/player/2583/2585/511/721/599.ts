"use strict";

export { o as a };
import * as r from "../81/index";
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
  function e(n) {
    var r = t.call(this, n.width, n.height) || this;
    r.canvas = n;
    r.buffer = e.makeBufferFromCanvasImageData(n);
    return r;
  }
  i(e, t);
  e.makeBufferFromCanvasImageData = function (t) {
    var n = t.getContext("2d");
    if (!n) {
      throw new Error("Couldn't get canvas context.");
    }
    var r = n.getImageData(0, 0, t.width, t.height);
    return e.toGrayscaleBuffer(r.data, t.width, t.height);
  };
  e.toGrayscaleBuffer = function (t, e, n) {
    for (var r = new Uint8ClampedArray(e * n), i = 0, o = 0, a = t.length; i < a; i += 4, o++) {
      var s = undefined;
      if (0 === t[i + 3]) {
        s = 255;
      } else {
        s = 306 * t[i] + 601 * t[i + 1] + 117 * t[i + 2] + 512 >> 10;
      }
      r[o] = s;
    }
    return r;
  };
  e.prototype.getRow = function (t, e) {
    if (t < 0 || t >= this.getHeight()) {
      throw new r.IllegalArgumentException("Requested row is outside the image: " + t);
    }
    var n = this.getWidth();
    var i = t * n;
    if (null === e) {
      e = this.buffer.slice(i, i + n);
    } else {
      if (e.length < n) {
        e = new Uint8ClampedArray(n);
      }
      e.set(this.buffer.slice(i, i + n));
    }
    return e;
  };
  e.prototype.getMatrix = function () {
    return this.buffer;
  };
  e.prototype.isCropSupported = function () {
    return true;
  };
  e.prototype.crop = function (e, n, r, i) {
    t.prototype.crop.call(this, e, n, r, i);
    return this;
  };
  e.prototype.isRotateSupported = function () {
    return true;
  };
  e.prototype.rotateCounterClockwise = function () {
    this.rotate(-90);
    return this;
  };
  e.prototype.rotateCounterClockwise45 = function () {
    this.rotate(-45);
    return this;
  };
  e.prototype.invert = function () {
    return new r.InvertedLuminanceSource(this);
  };
  e.prototype.getTempCanvasElement = function () {
    if (null === this.tempCanvasElement) {
      var t = this.canvas.ownerDocument.createElement("canvas");
      t.width = this.canvas.width;
      t.height = this.canvas.height;
      this.tempCanvasElement = t;
    }
    return this.tempCanvasElement;
  };
  e.prototype.rotate = function (t) {
    var n = this.getTempCanvasElement();
    if (!n) {
      throw new Error("Could not create a Canvas element.");
    }
    var r = t * e.DEGREE_TO_RADIANS;
    var i = this.canvas.width;
    var o = this.canvas.height;
    var a = Math.ceil(Math.abs(Math.cos(r)) * i + Math.abs(Math.sin(r)) * o);
    var s = Math.ceil(Math.abs(Math.sin(r)) * i + Math.abs(Math.cos(r)) * o);
    n.width = a;
    n.height = s;
    var u = n.getContext("2d");
    if (!u) {
      throw new Error("Could not create a Canvas Context element.");
    }
    u.translate(a / 2, s / 2);
    u.rotate(r);
    u.drawImage(this.canvas, i / -2, o / -2);
    this.buffer = e.makeBufferFromCanvasImageData(n);
    return this;
  };
  e.DEGREE_TO_RADIANS = Math.PI / 180;
  return e;
}(r.LuminanceSource);
export default o;