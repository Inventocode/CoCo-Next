/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：449
 */

"use strict";

var r = require("./73/index");
var i = require("./587");
var o = require("./118");
var a = require("./401");
var s = require("./191/index");
var u = require("./335");
var c = require("./37");
var l = require("./372");
var d = require("./105");
var f = function () {
  function t(t, e) {
    this.x = t;
    this.y = e;
  }
  t.prototype.toResultPoint = function () {
    return new r.a(this.getX(), this.getY());
  };
  t.prototype.getX = function () {
    return this.x;
  };
  t.prototype.getY = function () {
    return this.y;
  };
  return t;
}();
var h = function () {
  function t(t) {
    this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]);
    this.image = t;
  }
  t.prototype.detect = function () {
    return this.detectMirror(false);
  };
  t.prototype.detectMirror = function (t) {
    var e = this.getMatrixCenter();
    var n = this.getBullsEyeCorners(e);
    if (t) {
      var r = n[0];
      n[0] = n[2];
      n[2] = r;
    }
    this.extractParameters(n);
    var o = this.sampleGrid(this.image, n[this.shift % 4], n[(this.shift + 1) % 4], n[(this.shift + 2) % 4], n[(this.shift + 3) % 4]);
    var a = this.getMatrixCornerPoints(n);
    return new i.a(o, a, this.compact, this.nbDataBlocks, this.nbLayers);
  };
  t.prototype.extractParameters = function (t) {
    if (!this.isValidPoint(t[0]) || !this.isValidPoint(t[1]) || !this.isValidPoint(t[2]) || !this.isValidPoint(t[3])) {
      throw new c.a();
    }
    var e = 2 * this.nbCenterLayers;
    var n = new Int32Array([this.sampleLine(t[0], t[1], e), this.sampleLine(t[1], t[2], e), this.sampleLine(t[2], t[3], e), this.sampleLine(t[3], t[0], e)]);
    this.shift = this.getRotation(n, e);
    for (var r = 0, i = 0; i < 4; i++) {
      var o = n[(this.shift + i) % 4];
      if (this.compact) {
        r <<= 7;
        r += o >> 1 & 127;
      } else {
        r <<= 10;
        r += (o >> 2 & 992) + (o >> 1 & 31);
      }
    }
    var a = this.getCorrectedParameterData(r, this.compact);
    if (this.compact) {
      this.nbLayers = 1 + (a >> 6);
      this.nbDataBlocks = 1 + (63 & a);
    } else {
      this.nbLayers = 1 + (a >> 11);
      this.nbDataBlocks = 1 + (2047 & a);
    }
  };
  t.prototype.getRotation = function (t, e) {
    var n = 0;
    t.forEach(function (t, r, i) {
      n = (n << 3) + ((t >> e - 2 << 1) + (1 & t));
    });
    n = ((1 & n) << 11) + (n >> 1);
    for (var r = 0; r < 4; r++) {
      if (d.a.bitCount(n ^ this.EXPECTED_CORNER_BITS[r]) <= 2) {
        return r;
      }
    }
    throw new c.a();
  };
  t.prototype.getCorrectedParameterData = function (t, e) {
    var n;
    var r;
    if (e) {
      n = 7;
      r = 2;
    } else {
      n = 10;
      r = 4;
    }
    for (var i = n - r, o = new Int32Array(n), a = n - 1; a >= 0; --a) {
      o[a] = 15 & t;
      t >>= 4;
    }
    try {
      new u.a(s.a.AZTEC_PARAM).decode(o, i);
    } catch (d) {
      throw new c.a();
    }
    var l = 0;
    for (a = 0; a < r; a++) {
      l = (l << 4) + o[a];
    }
    return l;
  };
  t.prototype.getBullsEyeCorners = function (t) {
    var e = t;
    var n = t;
    var i = t;
    var o = t;
    var a = true;
    for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
      var s = this.getFirstDifferent(e, a, 1, -1);
      var u = this.getFirstDifferent(n, a, 1, 1);
      var l = this.getFirstDifferent(i, a, -1, 1);
      var d = this.getFirstDifferent(o, a, -1, -1);
      if (this.nbCenterLayers > 2) {
        var f = this.distancePoint(d, s) * this.nbCenterLayers / (this.distancePoint(o, e) * (this.nbCenterLayers + 2));
        if (f < .75 || f > 1.25 || !this.isWhiteOrBlackRectangle(s, u, l, d)) {
          break;
        }
      }
      e = s;
      n = u;
      i = l;
      o = d;
      a = !a;
    }
    if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) {
      throw new c.a();
    }
    this.compact = 5 === this.nbCenterLayers;
    var h = new r.a(e.getX() + .5, e.getY() - .5);
    var p = new r.a(n.getX() + .5, n.getY() + .5);
    var m = new r.a(i.getX() - .5, i.getY() + .5);
    var b = new r.a(o.getX() - .5, o.getY() - .5);
    return this.expandSquare([h, p, m, b], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
  };
  t.prototype.getMatrixCenter = function () {
    var t;
    var e;
    var n;
    var r;
    try {
      t = (l = new a.a(this.image).detect())[0];
      e = l[1];
      n = l[2];
      r = l[3];
    } catch (d) {
      var i = this.image.getWidth() / 2;
      var s = this.image.getHeight() / 2;
      t = this.getFirstDifferent(new f(i + 7, s - 7), false, 1, -1).toResultPoint();
      e = this.getFirstDifferent(new f(i + 7, s + 7), false, 1, 1).toResultPoint();
      n = this.getFirstDifferent(new f(i - 7, s + 7), false, -1, 1).toResultPoint();
      r = this.getFirstDifferent(new f(i - 7, s - 7), false, -1, -1).toResultPoint();
    }
    var u = o.a.round((t.getX() + r.getX() + e.getX() + n.getX()) / 4);
    var c = o.a.round((t.getY() + r.getY() + e.getY() + n.getY()) / 4);
    try {
      var l;
      t = (l = new a.a(this.image, 15, u, c).detect())[0];
      e = l[1];
      n = l[2];
      r = l[3];
    } catch (d) {
      t = this.getFirstDifferent(new f(u + 7, c - 7), false, 1, -1).toResultPoint();
      e = this.getFirstDifferent(new f(u + 7, c + 7), false, 1, 1).toResultPoint();
      n = this.getFirstDifferent(new f(u - 7, c + 7), false, -1, 1).toResultPoint();
      r = this.getFirstDifferent(new f(u - 7, c - 7), false, -1, -1).toResultPoint();
    }
    u = o.a.round((t.getX() + r.getX() + e.getX() + n.getX()) / 4);
    c = o.a.round((t.getY() + r.getY() + e.getY() + n.getY()) / 4);
    return new f(u, c);
  };
  t.prototype.getMatrixCornerPoints = function (t) {
    return this.expandSquare(t, 2 * this.nbCenterLayers, this.getDimension());
  };
  t.prototype.sampleGrid = function (t, e, n, r, i) {
    var o = l.a.getInstance();
    var a = this.getDimension();
    var s = a / 2 - this.nbCenterLayers;
    var u = a / 2 + this.nbCenterLayers;
    return o.sampleGrid(t, a, a, s, s, u, s, u, u, s, u, e.getX(), e.getY(), n.getX(), n.getY(), r.getX(), r.getY(), i.getX(), i.getY());
  };
  t.prototype.sampleLine = function (t, e, n) {
    for (var r = 0, i = this.distanceResultPoint(t, e), a = i / n, s = t.getX(), u = t.getY(), c = a * (e.getX() - t.getX()) / i, l = a * (e.getY() - t.getY()) / i, d = 0; d < n; d++) {
      if (this.image.get(o.a.round(s + d * c), o.a.round(u + d * l))) {
        r |= 1 << n - d - 1;
      }
    }
    return r;
  };
  t.prototype.isWhiteOrBlackRectangle = function (t, e, n, r) {
    t = new f(t.getX() - 3, t.getY() + 3);
    e = new f(e.getX() - 3, e.getY() - 3);
    n = new f(n.getX() + 3, n.getY() - 3);
    r = new f(r.getX() + 3, r.getY() + 3);
    var i = this.getColor(r, t);
    if (0 === i) {
      return false;
    }
    var o = this.getColor(t, e);
    return o === i && (o = this.getColor(e, n)) === i && (o = this.getColor(n, r)) === i;
  };
  t.prototype.getColor = function (t, e) {
    for (var n = this.distancePoint(t, e), r = (e.getX() - t.getX()) / n, i = (e.getY() - t.getY()) / n, a = 0, s = t.getX(), u = t.getY(), c = this.image.get(t.getX(), t.getY()), l = Math.ceil(n), d = 0; d < l; d++) {
      s += r;
      u += i;
      if (this.image.get(o.a.round(s), o.a.round(u)) !== c) {
        a++;
      }
    }
    var f = a / n;
    return f > .1 && f < .9 ? 0 : f <= .1 === c ? 1 : -1;
  };
  t.prototype.getFirstDifferent = function (t, e, n, r) {
    for (var i = t.getX() + n, o = t.getY() + r; this.isValid(i, o) && this.image.get(i, o) === e;) {
      i += n;
      o += r;
    }
    for (i -= n, o -= r; this.isValid(i, o) && this.image.get(i, o) === e;) {
      i += n;
    }
    for (i -= n; this.isValid(i, o) && this.image.get(i, o) === e;) {
      o += r;
    }
    return new f(i, o -= r);
  };
  t.prototype.expandSquare = function (t, e, n) {
    var i = n / (2 * e);
    var o = t[0].getX() - t[2].getX();
    var a = t[0].getY() - t[2].getY();
    var s = (t[0].getX() + t[2].getX()) / 2;
    var u = (t[0].getY() + t[2].getY()) / 2;
    var c = new r.a(s + i * o, u + i * a);
    var l = new r.a(s - i * o, u - i * a);
    o = t[1].getX() - t[3].getX();
    a = t[1].getY() - t[3].getY();
    s = (t[1].getX() + t[3].getX()) / 2;
    u = (t[1].getY() + t[3].getY()) / 2;
    return [c, new r.a(s + i * o, u + i * a), l, new r.a(s - i * o, u - i * a)];
  };
  t.prototype.isValid = function (t, e) {
    return t >= 0 && t < this.image.getWidth() && e > 0 && e < this.image.getHeight();
  };
  t.prototype.isValidPoint = function (t) {
    var e = o.a.round(t.getX());
    var n = o.a.round(t.getY());
    return this.isValid(e, n);
  };
  t.prototype.distancePoint = function (t, e) {
    return o.a.distance(t.getX(), t.getY(), e.getX(), e.getY());
  };
  t.prototype.distanceResultPoint = function (t, e) {
    return o.a.distance(t.getX(), t.getY(), e.getX(), e.getY());
  };
  t.prototype.getDimension = function () {
    return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (d.a.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
  };
  return t;
}();
exports.a = h;