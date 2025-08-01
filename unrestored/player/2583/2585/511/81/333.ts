"use strict";

var r = require("./109");
var i = require("./373");
var o = function () {
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
  t.prototype.crop = function (t, e, n, r) {
    throw new i.a("This luminance source does not support cropping.");
  };
  t.prototype.isRotateSupported = function () {
    return !1;
  };
  t.prototype.rotateCounterClockwise = function () {
    throw new i.a("This luminance source does not support rotation by 90 degrees.");
  };
  t.prototype.rotateCounterClockwise45 = function () {
    throw new i.a("This luminance source does not support rotation by 45 degrees.");
  };
  t.prototype.toString = function () {
    for (var t = new Uint8ClampedArray(this.width), e = new r.a(), n = 0; n < this.height; n++) {
      for (var i = this.getRow(n, t), o = 0; o < this.width; o++) {
        var a = 255 & i[o];
        var s = void 0;
        s = a < 64 ? "#" : a < 128 ? "+" : a < 192 ? "." : " ";
        e.append(s);
      }
      e.append("\n");
    }
    return e.toString();
  };
  return t;
}();
exports.a = o;