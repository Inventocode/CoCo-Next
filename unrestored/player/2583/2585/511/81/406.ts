"use strict";

var r = require("./74");
var i = require("./180");
var o = require("./124");
var a = require("./37");
var s = require("./150");
var u = require("./169");
var c = require("./117");
var l = require("./164");
var d = require("./191/index");
var f = require("./335");
var h = require("./56");
var p = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var n = e && t[e];
  var r = 0;
  if (n) {
    return n.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = void 0;
        }
        return {
          value: t && t[r++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var m = function () {
  function t(t, e, n) {
    this.ecCodewords = t;
    this.ecBlocks = [e];
    if (n) {
      this.ecBlocks.push(n);
    }
  }
  t.prototype.getECCodewords = function () {
    return this.ecCodewords;
  };
  t.prototype.getECBlocks = function () {
    return this.ecBlocks;
  };
  return t;
}();
var b = function () {
  function t(t, e) {
    this.count = t;
    this.dataCodewords = e;
  }
  t.prototype.getCount = function () {
    return this.count;
  };
  t.prototype.getDataCodewords = function () {
    return this.dataCodewords;
  };
  return t;
}();
var g = function () {
  function t(t, e, n, r, i, o) {
    var a;
    var s;
    this.versionNumber = t;
    this.symbolSizeRows = e;
    this.symbolSizeColumns = n;
    this.dataRegionSizeRows = r;
    this.dataRegionSizeColumns = i;
    this.ecBlocks = o;
    var u = 0;
    var c = o.getECCodewords();
    var l = o.getECBlocks();
    try {
      for (var d = p(l), f = d.next(); !f.done; f = d.next()) {
        var h = f.value;
        u += h.getCount() * (h.getDataCodewords() + c);
      }
    } catch (m) {
      a = {
        error: m
      };
    } finally {
      try {
        if (f && !f.done && (s = d.return)) {
          s.call(d);
        }
      } finally {
        if (a) {
          throw a.error;
        }
      }
    }
    this.totalCodewords = u;
  }
  t.prototype.getVersionNumber = function () {
    return this.versionNumber;
  };
  t.prototype.getSymbolSizeRows = function () {
    return this.symbolSizeRows;
  };
  t.prototype.getSymbolSizeColumns = function () {
    return this.symbolSizeColumns;
  };
  t.prototype.getDataRegionSizeRows = function () {
    return this.dataRegionSizeRows;
  };
  t.prototype.getDataRegionSizeColumns = function () {
    return this.dataRegionSizeColumns;
  };
  t.prototype.getTotalCodewords = function () {
    return this.totalCodewords;
  };
  t.prototype.getECBlocks = function () {
    return this.ecBlocks;
  };
  t.getVersionForDimensions = function (e, n) {
    var r;
    var i;
    if (0 !== (1 & e) || 0 !== (1 & n)) {
      throw new h.a();
    }
    try {
      for (var o = p(t.VERSIONS), a = o.next(); !a.done; a = o.next()) {
        var s = a.value;
        if (s.symbolSizeRows === e && s.symbolSizeColumns === n) {
          return s;
        }
      }
    } catch (u) {
      r = {
        error: u
      };
    } finally {
      try {
        if (a && !a.done && (i = o.return)) {
          i.call(o);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    throw new h.a();
  };
  t.prototype.toString = function () {
    return "" + this.versionNumber;
  };
  t.buildVersions = function () {
    return [new t(1, 10, 10, 8, 8, new m(5, new b(1, 3))), new t(2, 12, 12, 10, 10, new m(7, new b(1, 5))), new t(3, 14, 14, 12, 12, new m(10, new b(1, 8))), new t(4, 16, 16, 14, 14, new m(12, new b(1, 12))), new t(5, 18, 18, 16, 16, new m(14, new b(1, 18))), new t(6, 20, 20, 18, 18, new m(18, new b(1, 22))), new t(7, 22, 22, 20, 20, new m(20, new b(1, 30))), new t(8, 24, 24, 22, 22, new m(24, new b(1, 36))), new t(9, 26, 26, 24, 24, new m(28, new b(1, 44))), new t(10, 32, 32, 14, 14, new m(36, new b(1, 62))), new t(11, 36, 36, 16, 16, new m(42, new b(1, 86))), new t(12, 40, 40, 18, 18, new m(48, new b(1, 114))), new t(13, 44, 44, 20, 20, new m(56, new b(1, 144))), new t(14, 48, 48, 22, 22, new m(68, new b(1, 174))), new t(15, 52, 52, 24, 24, new m(42, new b(2, 102))), new t(16, 64, 64, 14, 14, new m(56, new b(2, 140))), new t(17, 72, 72, 16, 16, new m(36, new b(4, 92))), new t(18, 80, 80, 18, 18, new m(48, new b(4, 114))), new t(19, 88, 88, 20, 20, new m(56, new b(4, 144))), new t(20, 96, 96, 22, 22, new m(68, new b(4, 174))), new t(21, 104, 104, 24, 24, new m(56, new b(6, 136))), new t(22, 120, 120, 18, 18, new m(68, new b(6, 175))), new t(23, 132, 132, 20, 20, new m(62, new b(8, 163))), new t(24, 144, 144, 22, 22, new m(62, new b(8, 156), new b(2, 155))), new t(25, 8, 18, 6, 16, new m(7, new b(1, 5))), new t(26, 8, 32, 6, 14, new m(11, new b(1, 10))), new t(27, 12, 26, 10, 24, new m(14, new b(1, 16))), new t(28, 12, 36, 10, 16, new m(18, new b(1, 22))), new t(29, 16, 36, 14, 16, new m(24, new b(1, 32))), new t(30, 16, 48, 14, 22, new m(28, new b(1, 49)))];
  };
  t.VERSIONS = t.buildVersions();
  return t;
}();
var v = require("./63");
var _ = function () {
  function t(e) {
    var n = e.getHeight();
    if (n < 8 || n > 144 || 0 !== (1 & n)) {
      throw new h.a();
    }
    this.version = t.readVersion(e);
    this.mappingBitMatrix = this.extractDataRegion(e);
    this.readMappingMatrix = new i.a(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
  }
  t.prototype.getVersion = function () {
    return this.version;
  };
  t.readVersion = function (t) {
    var e = t.getHeight();
    var n = t.getWidth();
    return g.getVersionForDimensions(e, n);
  };
  t.prototype.readCodewords = function () {
    var t = new Int8Array(this.version.getTotalCodewords());
    var e = 0;
    var n = 4;
    var r = 0;
    var i = this.mappingBitMatrix.getHeight();
    var o = this.mappingBitMatrix.getWidth();
    var a = !1;
    var s = !1;
    var u = !1;
    var c = !1;
    do {
      if (n !== i || 0 !== r || a) {
        if (n !== i - 2 || 0 !== r || 0 === (3 & o) || s) {
          if (n !== i + 4 || 2 !== r || 0 !== (7 & o) || u) {
            if (n !== i - 2 || 0 !== r || 4 !== (7 & o) || c) {
              do {
                if (n < i && r >= 0 && !this.readMappingMatrix.get(r, n)) {
                  t[e++] = 255 & this.readUtah(n, r, i, o);
                }
                n -= 2;
                r += 2;
              } while (n >= 0 && r < o);
              n += 1;
              r += 3;
              do {
                if (n >= 0 && r < o && !this.readMappingMatrix.get(r, n)) {
                  t[e++] = 255 & this.readUtah(n, r, i, o);
                }
                n += 2;
                r -= 2;
              } while (n < i && r >= 0);
              n += 3;
              r += 1;
            } else {
              t[e++] = 255 & this.readCorner4(i, o);
              n -= 2;
              r += 2;
              c = !0;
            }
          } else {
            t[e++] = 255 & this.readCorner3(i, o);
            n -= 2;
            r += 2;
            u = !0;
          }
        } else {
          t[e++] = 255 & this.readCorner2(i, o);
          n -= 2;
          r += 2;
          s = !0;
        }
      } else {
        t[e++] = 255 & this.readCorner1(i, o);
        n -= 2;
        r += 2;
        a = !0;
      }
    } while (n < i || r < o);
    if (e !== this.version.getTotalCodewords()) {
      throw new h.a();
    }
    return t;
  };
  t.prototype.readModule = function (t, e, n, r) {
    if (t < 0) {
      t += n;
      e += 4 - (n + 4 & 7);
    }
    if (e < 0) {
      e += r;
      t += 4 - (r + 4 & 7);
    }
    this.readMappingMatrix.set(e, t);
    return this.mappingBitMatrix.get(e, t);
  };
  t.prototype.readUtah = function (t, e, n, r) {
    var i = 0;
    if (this.readModule(t - 2, e - 2, n, r)) {
      i |= 1;
    }
    i <<= 1;
    if (this.readModule(t - 2, e - 1, n, r)) {
      i |= 1;
    }
    i <<= 1;
    if (this.readModule(t - 1, e - 2, n, r)) {
      i |= 1;
    }
    i <<= 1;
    if (this.readModule(t - 1, e - 1, n, r)) {
      i |= 1;
    }
    i <<= 1;
    if (this.readModule(t - 1, e, n, r)) {
      i |= 1;
    }
    i <<= 1;
    if (this.readModule(t, e - 2, n, r)) {
      i |= 1;
    }
    i <<= 1;
    if (this.readModule(t, e - 1, n, r)) {
      i |= 1;
    }
    i <<= 1;
    if (this.readModule(t, e, n, r)) {
      i |= 1;
    }
    return i;
  };
  t.prototype.readCorner1 = function (t, e) {
    var n = 0;
    if (this.readModule(t - 1, 0, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(t - 1, 1, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(t - 1, 2, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 2, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 1, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(1, e - 1, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(2, e - 1, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(3, e - 1, t, e)) {
      n |= 1;
    }
    return n;
  };
  t.prototype.readCorner2 = function (t, e) {
    var n = 0;
    if (this.readModule(t - 3, 0, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(t - 2, 0, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(t - 1, 0, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 4, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 3, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 2, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 1, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(1, e - 1, t, e)) {
      n |= 1;
    }
    return n;
  };
  t.prototype.readCorner3 = function (t, e) {
    var n = 0;
    if (this.readModule(t - 1, 0, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(t - 1, e - 1, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 3, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 2, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 1, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(1, e - 3, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(1, e - 2, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(1, e - 1, t, e)) {
      n |= 1;
    }
    return n;
  };
  t.prototype.readCorner4 = function (t, e) {
    var n = 0;
    if (this.readModule(t - 3, 0, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(t - 2, 0, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(t - 1, 0, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 2, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(0, e - 1, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(1, e - 1, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(2, e - 1, t, e)) {
      n |= 1;
    }
    n <<= 1;
    if (this.readModule(3, e - 1, t, e)) {
      n |= 1;
    }
    return n;
  };
  t.prototype.extractDataRegion = function (t) {
    var e = this.version.getSymbolSizeRows();
    var n = this.version.getSymbolSizeColumns();
    if (t.getHeight() !== e) {
      throw new v.a("Dimension of bitMatrix must match the version size");
    }
    for (var r = this.version.getDataRegionSizeRows(), o = this.version.getDataRegionSizeColumns(), a = e / r | 0, s = n / o | 0, u = a * r, c = s * o, l = new i.a(c, u), d = 0; d < a; ++d) {
      for (var f = d * r, h = 0; h < s; ++h) {
        for (var p = h * o, m = 0; m < r; ++m) {
          for (var b = d * (r + 2) + 1 + m, g = f + m, _ = 0; _ < o; ++_) {
            var y = h * (o + 2) + 1 + _;
            if (t.get(y, b)) {
              var w = p + _;
              l.set(w, g);
            }
          }
        }
      }
    }
    return l;
  };
  return t;
}();
var y = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var n = e && t[e];
  var r = 0;
  if (n) {
    return n.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = void 0;
        }
        return {
          value: t && t[r++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var w = function () {
  function t(t, e) {
    this.numDataCodewords = t;
    this.codewords = e;
  }
  t.getDataBlocks = function (e, n) {
    var r;
    var i;
    var o;
    var a;
    var s = n.getECBlocks();
    var u = 0;
    var c = s.getECBlocks();
    try {
      for (var l = y(c), d = l.next(); !d.done; d = l.next()) {
        u += (b = d.value).getCount();
      }
    } catch (k) {
      r = {
        error: k
      };
    } finally {
      try {
        if (d && !d.done && (i = l.return)) {
          i.call(l);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    var f = new Array(u);
    var h = 0;
    try {
      for (var p = y(c), m = p.next(); !m.done; m = p.next()) {
        for (var b = m.value, g = 0; g < b.getCount(); g++) {
          var _ = b.getDataCodewords();
          var w = s.getECCodewords() + _;
          f[h++] = new t(_, new Uint8Array(w));
        }
      }
    } catch (R) {
      o = {
        error: R
      };
    } finally {
      try {
        if (m && !m.done && (a = p.return)) {
          a.call(p);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    var E = f[0].codewords.length - s.getECCodewords();
    var O = E - 1;
    var T = 0;
    for (g = 0; g < O; g++) {
      for (var A = 0; A < h; A++) {
        f[A].codewords[g] = e[T++];
      }
    }
    var S = 24 === n.getVersionNumber();
    var I = S ? 8 : h;
    for (A = 0; A < I; A++) {
      f[A].codewords[E - 1] = e[T++];
    }
    var C = f[0].codewords.length;
    for (g = E; g < C; g++) {
      for (A = 0; A < h; A++) {
        var j = S ? (A + 8) % h : A;
        var M = S && j > 7 ? g - 1 : g;
        f[j].codewords[M] = e[T++];
      }
    }
    if (T !== e.length) {
      throw new v.a();
    }
    return f;
  };
  t.prototype.getNumDataCodewords = function () {
    return this.numDataCodewords;
  };
  t.prototype.getCodewords = function () {
    return this.codewords;
  };
  return t;
}();
var E = require("./589");
var O = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var n = e && t[e];
  var r = 0;
  if (n) {
    return n.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = void 0;
        }
        return {
          value: t && t[r++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var T = function () {
  function t() {
    this.rsDecoder = new f.a(d.a.DATA_MATRIX_FIELD_256);
  }
  t.prototype.decode = function (t) {
    var e;
    var n;
    var r = new _(t);
    var i = r.getVersion();
    var o = r.readCodewords();
    var a = w.getDataBlocks(o, i);
    var s = 0;
    try {
      for (var u = O(a), c = u.next(); !c.done; c = u.next()) {
        s += c.value.getNumDataCodewords();
      }
    } catch (g) {
      e = {
        error: g
      };
    } finally {
      try {
        if (c && !c.done && (n = u.return)) {
          n.call(u);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    for (var l = new Uint8Array(s), d = a.length, f = 0; f < d; f++) {
      var h = a[f];
      var p = h.getCodewords();
      var m = h.getNumDataCodewords();
      this.correctErrors(p, m);
      for (var b = 0; b < m; b++) {
        l[b * d + f] = p[b];
      }
    }
    return E.a.decode(l);
  };
  t.prototype.correctErrors = function (t, e) {
    var n = new Int32Array(t);
    try {
      this.rsDecoder.decode(n, t.length - e);
    } catch (i) {
      throw new l.a();
    }
    for (var r = 0; r < e; r++) {
      t[r] = n[r];
    }
  };
  return t;
}();
var A = require("./401");
var S = require("./371");
var I = require("./372");
var C = require("./73/index");
var j = function () {
  function t(t) {
    this.image = t;
    this.rectangleDetector = new A.a(this.image);
  }
  t.prototype.detect = function () {
    var e = this.rectangleDetector.detect();
    var n = this.detectSolid1(e);
    (n = this.detectSolid2(n))[3] = this.correctTopRight(n);
    if (!n[3]) {
      throw new a.a();
    }
    var r = (n = this.shiftToModuleCenter(n))[0];
    var i = n[1];
    var o = n[2];
    var s = n[3];
    var u = this.transitionsBetween(r, s) + 1;
    var c = this.transitionsBetween(o, s) + 1;
    if (1 === (1 & u)) {
      u += 1;
    }
    if (1 === (1 & c)) {
      c += 1;
    }
    if (4 * u < 7 * c && 4 * c < 7 * u) {
      u = c = Math.max(u, c);
    }
    var l = t.sampleGrid(this.image, r, i, o, s, u, c);
    return new S.a(l, [r, i, o, s]);
  };
  t.shiftPoint = function (t, e, n) {
    var r = (e.getX() - t.getX()) / (n + 1);
    var i = (e.getY() - t.getY()) / (n + 1);
    return new C.a(t.getX() + r, t.getY() + i);
  };
  t.moveAway = function (t, e, n) {
    var r = t.getX();
    var i = t.getY();
    if (r < e) {
      r -= 1;
    } else {
      r += 1;
    }
    if (i < n) {
      i -= 1;
    } else {
      i += 1;
    }
    return new C.a(r, i);
  };
  t.prototype.detectSolid1 = function (t) {
    var e = t[0];
    var n = t[1];
    var r = t[3];
    var i = t[2];
    var o = this.transitionsBetween(e, n);
    var a = this.transitionsBetween(n, r);
    var s = this.transitionsBetween(r, i);
    var u = this.transitionsBetween(i, e);
    var c = o;
    var l = [i, e, n, r];
    if (c > a) {
      c = a;
      l[0] = e;
      l[1] = n;
      l[2] = r;
      l[3] = i;
    }
    if (c > s) {
      c = s;
      l[0] = n;
      l[1] = r;
      l[2] = i;
      l[3] = e;
    }
    if (c > u) {
      l[0] = r;
      l[1] = i;
      l[2] = e;
      l[3] = n;
    }
    return l;
  };
  t.prototype.detectSolid2 = function (e) {
    var n = e[0];
    var r = e[1];
    var i = e[2];
    var o = e[3];
    var a = this.transitionsBetween(n, o);
    var s = t.shiftPoint(r, i, 4 * (a + 1));
    var u = t.shiftPoint(i, r, 4 * (a + 1));
    if (this.transitionsBetween(s, n) < this.transitionsBetween(u, o)) {
      e[0] = n;
      e[1] = r;
      e[2] = i;
      e[3] = o;
    } else {
      e[0] = r;
      e[1] = i;
      e[2] = o;
      e[3] = n;
    }
    return e;
  };
  t.prototype.correctTopRight = function (e) {
    var n = e[0];
    var r = e[1];
    var i = e[2];
    var o = e[3];
    var a = this.transitionsBetween(n, o);
    var s = this.transitionsBetween(r, o);
    var u = t.shiftPoint(n, r, 4 * (s + 1));
    var c = t.shiftPoint(i, r, 4 * (a + 1));
    a = this.transitionsBetween(u, o);
    s = this.transitionsBetween(c, o);
    var l = new C.a(o.getX() + (i.getX() - r.getX()) / (a + 1), o.getY() + (i.getY() - r.getY()) / (a + 1));
    var d = new C.a(o.getX() + (n.getX() - r.getX()) / (s + 1), o.getY() + (n.getY() - r.getY()) / (s + 1));
    return this.isValid(l) ? this.isValid(d) ? this.transitionsBetween(u, l) + this.transitionsBetween(c, l) > this.transitionsBetween(u, d) + this.transitionsBetween(c, d) ? l : d : l : this.isValid(d) ? d : null;
  };
  t.prototype.shiftToModuleCenter = function (e) {
    var n = e[0];
    var r = e[1];
    var i = e[2];
    var o = e[3];
    var a = this.transitionsBetween(n, o) + 1;
    var s = this.transitionsBetween(i, o) + 1;
    var u = t.shiftPoint(n, r, 4 * s);
    var c = t.shiftPoint(i, r, 4 * a);
    if (1 === (1 & (a = this.transitionsBetween(u, o) + 1))) {
      a += 1;
    }
    if (1 === (1 & (s = this.transitionsBetween(c, o) + 1))) {
      s += 1;
    }
    var l;
    var d;
    var f = (n.getX() + r.getX() + i.getX() + o.getX()) / 4;
    var h = (n.getY() + r.getY() + i.getY() + o.getY()) / 4;
    n = t.moveAway(n, f, h);
    r = t.moveAway(r, f, h);
    i = t.moveAway(i, f, h);
    o = t.moveAway(o, f, h);
    u = t.shiftPoint(n, r, 4 * s);
    u = t.shiftPoint(u, o, 4 * a);
    l = t.shiftPoint(r, n, 4 * s);
    l = t.shiftPoint(l, i, 4 * a);
    c = t.shiftPoint(i, o, 4 * s);
    c = t.shiftPoint(c, r, 4 * a);
    d = t.shiftPoint(o, i, 4 * s);
    return [u, l, c, d = t.shiftPoint(d, n, 4 * a)];
  };
  t.prototype.isValid = function (t) {
    return t.getX() >= 0 && t.getX() < this.image.getWidth() && t.getY() > 0 && t.getY() < this.image.getHeight();
  };
  t.sampleGrid = function (t, e, n, r, i, o, a) {
    return I.a.getInstance().sampleGrid(t, o, a, .5, .5, o - .5, .5, o - .5, a - .5, .5, a - .5, e.getX(), e.getY(), i.getX(), i.getY(), r.getX(), r.getY(), n.getX(), n.getY());
  };
  t.prototype.transitionsBetween = function (t, e) {
    var n = Math.trunc(t.getX());
    var r = Math.trunc(t.getY());
    var i = Math.trunc(e.getX());
    var o = Math.trunc(e.getY());
    var a = Math.abs(o - r) > Math.abs(i - n);
    if (a) {
      var s = n;
      n = r;
      r = s;
      s = i;
      i = o;
      o = s;
    }
    for (var u = Math.abs(i - n), c = Math.abs(o - r), l = -u / 2, d = r < o ? 1 : -1, f = n < i ? 1 : -1, h = 0, p = this.image.get(a ? r : n, a ? n : r), m = n, b = r; m !== i; m += f) {
      var g = this.image.get(a ? b : m, a ? m : b);
      if (g !== p) {
        h++;
        p = g;
      }
      if ((l += c) > 0) {
        if (b === o) {
          break;
        }
        b += d;
        l -= u;
      }
    }
    return h;
  };
  return t;
}();
var M = function () {
  function t() {
    this.decoder = new T();
  }
  t.prototype.decode = function (e, n) {
    var i;
    var a;
    if (void 0 === n) {
      n = null;
    }
    if (null != n && n.has(o.a.PURE_BARCODE)) {
      var l = t.extractPureBits(e.getBlackMatrix());
      i = this.decoder.decode(l);
      a = t.NO_POINTS;
    } else {
      var d = new j(e.getBlackMatrix()).detect();
      i = this.decoder.decode(d.getBits());
      a = d.getPoints();
    }
    var f = i.getRawBytes();
    var h = new s.a(i.getText(), f, 8 * f.length, a, r.a.DATA_MATRIX, c.a.currentTimeMillis());
    var p = i.getByteSegments();
    if (null != p) {
      h.putMetadata(u.a.BYTE_SEGMENTS, p);
    }
    var m = i.getECLevel();
    if (null != m) {
      h.putMetadata(u.a.ERROR_CORRECTION_LEVEL, m);
    }
    return h;
  };
  t.prototype.reset = function () {};
  t.extractPureBits = function (t) {
    var e = t.getTopLeftOnBit();
    var n = t.getBottomRightOnBit();
    if (null == e || null == n) {
      throw new a.a();
    }
    var r = this.moduleSize(e, t);
    var o = e[1];
    var s = n[1];
    var u = e[0];
    var c = (n[0] - u + 1) / r;
    var l = (s - o + 1) / r;
    if (c <= 0 || l <= 0) {
      throw new a.a();
    }
    var d = r / 2;
    o += d;
    u += d;
    for (var f = new i.a(c, l), h = 0; h < l; h++) {
      for (var p = o + h * r, m = 0; m < c; m++) {
        if (t.get(u + m * r, p)) {
          f.set(m, h);
        }
      }
    }
    return f;
  };
  t.moduleSize = function (t, e) {
    for (var n = e.getWidth(), r = t[0], i = t[1]; r < n && e.get(r, i);) {
      r++;
    }
    if (r === n) {
      throw new a.a();
    }
    var o = r - t[0];
    if (0 === o) {
      throw new a.a();
    }
    return o;
  };
  t.NO_POINTS = [];
  return t;
}();
exports.a = M;