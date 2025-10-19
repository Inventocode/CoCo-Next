/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：585
 */

"use strict";

export { s as a };
import * as r from "../347";
import * as i from "../333";
import * as o from "../63";
var a = function () {
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
var s = function (t) {
  function e(n) {
    var r = t.call(this, n.width, n.height) || this;
    r.canvas = n;
    r.tempCanvasElement = null;
    r.buffer = e.makeBufferFromCanvasImageData(n);
    return r;
  }
  a(e, t);
  e.makeBufferFromCanvasImageData = function (t) {
    var n = t.getContext("2d").getImageData(0, 0, t.width, t.height);
    return e.toGrayscaleBuffer(n.data, t.width, t.height);
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
      throw new o.a("Requested row is outside the image: " + t);
    }
    var n = this.getWidth();
    var r = t * n;
    if (null === e) {
      e = this.buffer.slice(r, r + n);
    } else {
      if (e.length < n) {
        e = new Uint8ClampedArray(n);
      }
      e.set(this.buffer.slice(r, r + n));
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
    var r = n.getContext("2d");
    var i = t * e.DEGREE_TO_RADIANS;
    var o = this.canvas.width;
    var a = this.canvas.height;
    var s = Math.ceil(Math.abs(Math.cos(i)) * o + Math.abs(Math.sin(i)) * a);
    var u = Math.ceil(Math.abs(Math.sin(i)) * o + Math.abs(Math.cos(i)) * a);
    n.width = s;
    n.height = u;
    r.translate(s / 2, u / 2);
    r.rotate(i);
    r.drawImage(this.canvas, o / -2, a / -2);
    this.buffer = e.makeBufferFromCanvasImageData(n);
    return this;
  };
  e.prototype.invert = function () {
    return new r.a(this);
  };
  e.DEGREE_TO_RADIANS = Math.PI / 180;
  return e;
}(i.a);
export default s;