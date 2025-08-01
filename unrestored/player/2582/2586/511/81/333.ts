"use strict";

var n = require("./109");
var o = require("./373");
var i = function () {
  function t(t, e) {
    this.width = t;
    this.height = e;
  }
  t.prototype.getWidth = function () {
    return this.width;
  };
  t.prototype.getHeight = function () {
    return this.height;
  };
  t.prototype.isCropSupported = function () {
    return !1;
  };
  t.prototype.crop = function (t, e, r, n) {
    throw new o.a("This luminance source does not support cropping.");
  };
  t.prototype.isRotateSupported = function () {
    return !1;
  };
  t.prototype.rotateCounterClockwise = function () {
    throw new o.a("This luminance source does not support rotation by 90 degrees.");
  };
  t.prototype.rotateCounterClockwise45 = function () {
    throw new o.a("This luminance source does not support rotation by 45 degrees.");
  };
  t.prototype.toString = function () {
    for (var t = new Uint8ClampedArray(this.width), e = new n.a(), r = 0; r < this.height; r++) {
      for (var o = this.getRow(r, t), i = 0; i < this.width; i++) {
        var a = 255 & o[i];
        var u = void 0;
        u = a < 64 ? "#" : a < 128 ? "+" : a < 192 ? "." : " ";
        e.append(u);
      }
      e.append("\n");
    }
    return e.toString();
  };
  return t;
}();
exports.a = i;