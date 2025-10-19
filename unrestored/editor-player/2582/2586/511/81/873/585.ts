/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：585
 */

"use strict";

export { u as a };
import * as n from "../347";
import * as o from "../333";
import * as i from "../63";
var a = function () {
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
var u = function (t) {
  function e(r) {
    var n = t.call(this, r.width, r.height) || this;
    n.canvas = r;
    n.tempCanvasElement = null;
    n.buffer = e.makeBufferFromCanvasImageData(r);
    return n;
  }
  a(e, t);
  e.makeBufferFromCanvasImageData = function (t) {
    var r = t.getContext("2d").getImageData(0, 0, t.width, t.height);
    return e.toGrayscaleBuffer(r.data, t.width, t.height);
  };
  e.toGrayscaleBuffer = function (t, e, r) {
    for (var n = new Uint8ClampedArray(e * r), o = 0, i = 0, a = t.length; o < a; o += 4, i++) {
      var u = undefined;
      if (0 === t[o + 3]) {
        u = 255;
      } else {
        u = 306 * t[o] + 601 * t[o + 1] + 117 * t[o + 2] + 512 >> 10;
      }
      n[i] = u;
    }
    return n;
  };
  e.prototype.getRow = function (t, e) {
    if (t < 0 || t >= this.getHeight()) {
      throw new i.a("Requested row is outside the image: " + t);
    }
    var r = this.getWidth();
    var n = t * r;
    if (null === e) {
      e = this.buffer.slice(n, n + r);
    } else {
      if (e.length < r) {
        e = new Uint8ClampedArray(r);
      }
      e.set(this.buffer.slice(n, n + r));
    }
    return e;
  };
  e.prototype.getMatrix = function () {
    return this.buffer;
  };
  e.prototype.isCropSupported = function () {
    return true;
  };
  e.prototype.crop = function (e, r, n, o) {
    t.prototype.crop.call(this, e, r, n, o);
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
    var r = this.getTempCanvasElement();
    var n = r.getContext("2d");
    var o = t * e.DEGREE_TO_RADIANS;
    var i = this.canvas.width;
    var a = this.canvas.height;
    var u = Math.ceil(Math.abs(Math.cos(o)) * i + Math.abs(Math.sin(o)) * a);
    var s = Math.ceil(Math.abs(Math.sin(o)) * i + Math.abs(Math.cos(o)) * a);
    r.width = u;
    r.height = s;
    n.translate(u / 2, s / 2);
    n.rotate(o);
    n.drawImage(this.canvas, i / -2, a / -2);
    this.buffer = e.makeBufferFromCanvasImageData(r);
    return this;
  };
  e.prototype.invert = function () {
    return new n.a(this);
  };
  e.DEGREE_TO_RADIANS = Math.PI / 180;
  return e;
}(o.a);
export default u;