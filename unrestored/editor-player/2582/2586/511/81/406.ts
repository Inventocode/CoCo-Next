/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：406
 */

"use strict";

var n = require("./74");
var o = require("./180");
var i = require("./124");
var a = require("./37");
var u = require("./150");
var s = require("./169");
var c = require("./117");
var f = require("./164");
var h = require("./191/index");
var l = require("./335");
var d = require("./56");
var p = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var r = e && t[e];
  var n = 0;
  if (r) {
    return r.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[n++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var g = function () {
  function t(t, e, r) {
    this.ecCodewords = t;
    this.ecBlocks = [e];
    if (r) {
      this.ecBlocks.push(r);
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
var y = function () {
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
var w = function () {
  function t(t, e, r, n, o, i) {
    var a;
    var u;
    this.versionNumber = t;
    this.symbolSizeRows = e;
    this.symbolSizeColumns = r;
    this.dataRegionSizeRows = n;
    this.dataRegionSizeColumns = o;
    this.ecBlocks = i;
    var s = 0;
    var c = i.getECCodewords();
    var f = i.getECBlocks();
    try {
      for (var h = p(f), l = h.next(); !l.done; l = h.next()) {
        var d = l.value;
        s += d.getCount() * (d.getDataCodewords() + c);
      }
    } catch (g) {
      a = {
        error: g
      };
    } finally {
      try {
        if (l && !l.done && (u = h.return)) {
          u.call(h);
        }
      } finally {
        if (a) {
          throw a.error;
        }
      }
    }
    this.totalCodewords = s;
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
  t.getVersionForDimensions = function (e, r) {
    var n;
    var o;
    if (0 !== (1 & e) || 0 !== (1 & r)) {
      throw new d.a();
    }
    try {
      for (var i = p(t.VERSIONS), a = i.next(); !a.done; a = i.next()) {
        var u = a.value;
        if (u.symbolSizeRows === e && u.symbolSizeColumns === r) {
          return u;
        }
      }
    } catch (s) {
      n = {
        error: s
      };
    } finally {
      try {
        if (a && !a.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    throw new d.a();
  };
  t.prototype.toString = function () {
    return "" + this.versionNumber;
  };
  t.buildVersions = function () {
    return [new t(1, 10, 10, 8, 8, new g(5, new y(1, 3))), new t(2, 12, 12, 10, 10, new g(7, new y(1, 5))), new t(3, 14, 14, 12, 12, new g(10, new y(1, 8))), new t(4, 16, 16, 14, 14, new g(12, new y(1, 12))), new t(5, 18, 18, 16, 16, new g(14, new y(1, 18))), new t(6, 20, 20, 18, 18, new g(18, new y(1, 22))), new t(7, 22, 22, 20, 20, new g(20, new y(1, 30))), new t(8, 24, 24, 22, 22, new g(24, new y(1, 36))), new t(9, 26, 26, 24, 24, new g(28, new y(1, 44))), new t(10, 32, 32, 14, 14, new g(36, new y(1, 62))), new t(11, 36, 36, 16, 16, new g(42, new y(1, 86))), new t(12, 40, 40, 18, 18, new g(48, new y(1, 114))), new t(13, 44, 44, 20, 20, new g(56, new y(1, 144))), new t(14, 48, 48, 22, 22, new g(68, new y(1, 174))), new t(15, 52, 52, 24, 24, new g(42, new y(2, 102))), new t(16, 64, 64, 14, 14, new g(56, new y(2, 140))), new t(17, 72, 72, 16, 16, new g(36, new y(4, 92))), new t(18, 80, 80, 18, 18, new g(48, new y(4, 114))), new t(19, 88, 88, 20, 20, new g(56, new y(4, 144))), new t(20, 96, 96, 22, 22, new g(68, new y(4, 174))), new t(21, 104, 104, 24, 24, new g(56, new y(6, 136))), new t(22, 120, 120, 18, 18, new g(68, new y(6, 175))), new t(23, 132, 132, 20, 20, new g(62, new y(8, 163))), new t(24, 144, 144, 22, 22, new g(62, new y(8, 156), new y(2, 155))), new t(25, 8, 18, 6, 16, new g(7, new y(1, 5))), new t(26, 8, 32, 6, 14, new g(11, new y(1, 10))), new t(27, 12, 26, 10, 24, new g(14, new y(1, 16))), new t(28, 12, 36, 10, 16, new g(18, new y(1, 22))), new t(29, 16, 36, 14, 16, new g(24, new y(1, 32))), new t(30, 16, 48, 14, 22, new g(28, new y(1, 49)))];
  };
  t.VERSIONS = t.buildVersions();
  return t;
}();
var v = require("./63");
var _ = function () {
  function t(e) {
    var r = e.getHeight();
    if (r < 8 || r > 144 || 0 !== (1 & r)) {
      throw new d.a();
    }
    this.version = t.readVersion(e);
    this.mappingBitMatrix = this.extractDataRegion(e);
    this.readMappingMatrix = new o.a(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
  }
  t.prototype.getVersion = function () {
    return this.version;
  };
  t.readVersion = function (t) {
    var e = t.getHeight();
    var r = t.getWidth();
    return w.getVersionForDimensions(e, r);
  };
  t.prototype.readCodewords = function () {
    var t = new Int8Array(this.version.getTotalCodewords());
    var e = 0;
    var r = 4;
    var n = 0;
    var o = this.mappingBitMatrix.getHeight();
    var i = this.mappingBitMatrix.getWidth();
    var a = false;
    var u = false;
    var s = false;
    var c = false;
    do {
      if (r !== o || 0 !== n || a) {
        if (r !== o - 2 || 0 !== n || 0 === (3 & i) || u) {
          if (r !== o + 4 || 2 !== n || 0 !== (7 & i) || s) {
            if (r !== o - 2 || 0 !== n || 4 !== (7 & i) || c) {
              do {
                if (r < o && n >= 0 && !this.readMappingMatrix.get(n, r)) {
                  t[e++] = 255 & this.readUtah(r, n, o, i);
                }
                r -= 2;
                n += 2;
              } while (r >= 0 && n < i);
              r += 1;
              n += 3;
              do {
                if (r >= 0 && n < i && !this.readMappingMatrix.get(n, r)) {
                  t[e++] = 255 & this.readUtah(r, n, o, i);
                }
                r += 2;
                n -= 2;
              } while (r < o && n >= 0);
              r += 3;
              n += 1;
            } else {
              t[e++] = 255 & this.readCorner4(o, i);
              r -= 2;
              n += 2;
              c = true;
            }
          } else {
            t[e++] = 255 & this.readCorner3(o, i);
            r -= 2;
            n += 2;
            s = true;
          }
        } else {
          t[e++] = 255 & this.readCorner2(o, i);
          r -= 2;
          n += 2;
          u = true;
        }
      } else {
        t[e++] = 255 & this.readCorner1(o, i);
        r -= 2;
        n += 2;
        a = true;
      }
    } while (r < o || n < i);
    if (e !== this.version.getTotalCodewords()) {
      throw new d.a();
    }
    return t;
  };
  t.prototype.readModule = function (t, e, r, n) {
    if (t < 0) {
      t += r;
      e += 4 - (r + 4 & 7);
    }
    if (e < 0) {
      e += n;
      t += 4 - (n + 4 & 7);
    }
    this.readMappingMatrix.set(e, t);
    return this.mappingBitMatrix.get(e, t);
  };
  t.prototype.readUtah = function (t, e, r, n) {
    var o = 0;
    if (this.readModule(t - 2, e - 2, r, n)) {
      o |= 1;
    }
    o <<= 1;
    if (this.readModule(t - 2, e - 1, r, n)) {
      o |= 1;
    }
    o <<= 1;
    if (this.readModule(t - 1, e - 2, r, n)) {
      o |= 1;
    }
    o <<= 1;
    if (this.readModule(t - 1, e - 1, r, n)) {
      o |= 1;
    }
    o <<= 1;
    if (this.readModule(t - 1, e, r, n)) {
      o |= 1;
    }
    o <<= 1;
    if (this.readModule(t, e - 2, r, n)) {
      o |= 1;
    }
    o <<= 1;
    if (this.readModule(t, e - 1, r, n)) {
      o |= 1;
    }
    o <<= 1;
    if (this.readModule(t, e, r, n)) {
      o |= 1;
    }
    return o;
  };
  t.prototype.readCorner1 = function (t, e) {
    var r = 0;
    if (this.readModule(t - 1, 0, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(t - 1, 1, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(t - 1, 2, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 2, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 1, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(1, e - 1, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(2, e - 1, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(3, e - 1, t, e)) {
      r |= 1;
    }
    return r;
  };
  t.prototype.readCorner2 = function (t, e) {
    var r = 0;
    if (this.readModule(t - 3, 0, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(t - 2, 0, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(t - 1, 0, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 4, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 3, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 2, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 1, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(1, e - 1, t, e)) {
      r |= 1;
    }
    return r;
  };
  t.prototype.readCorner3 = function (t, e) {
    var r = 0;
    if (this.readModule(t - 1, 0, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(t - 1, e - 1, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 3, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 2, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 1, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(1, e - 3, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(1, e - 2, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(1, e - 1, t, e)) {
      r |= 1;
    }
    return r;
  };
  t.prototype.readCorner4 = function (t, e) {
    var r = 0;
    if (this.readModule(t - 3, 0, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(t - 2, 0, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(t - 1, 0, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 2, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(0, e - 1, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(1, e - 1, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(2, e - 1, t, e)) {
      r |= 1;
    }
    r <<= 1;
    if (this.readModule(3, e - 1, t, e)) {
      r |= 1;
    }
    return r;
  };
  t.prototype.extractDataRegion = function (t) {
    var e = this.version.getSymbolSizeRows();
    var r = this.version.getSymbolSizeColumns();
    if (t.getHeight() !== e) {
      throw new v.a("Dimension of bitMatrix must match the version size");
    }
    for (var n = this.version.getDataRegionSizeRows(), i = this.version.getDataRegionSizeColumns(), a = e / n | 0, u = r / i | 0, s = a * n, c = u * i, f = new o.a(c, s), h = 0; h < a; ++h) {
      for (var l = h * n, d = 0; d < u; ++d) {
        for (var p = d * i, g = 0; g < n; ++g) {
          for (var y = h * (n + 2) + 1 + g, w = l + g, _ = 0; _ < i; ++_) {
            var m = d * (i + 2) + 1 + _;
            if (t.get(m, y)) {
              var A = p + _;
              f.set(A, w);
            }
          }
        }
      }
    }
    return f;
  };
  return t;
}();
var m = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var r = e && t[e];
  var n = 0;
  if (r) {
    return r.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[n++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var A = function () {
  function t(t, e) {
    this.numDataCodewords = t;
    this.codewords = e;
  }
  t.getDataBlocks = function (e, r) {
    var n;
    var o;
    var i;
    var a;
    var u = r.getECBlocks();
    var s = 0;
    var c = u.getECBlocks();
    try {
      for (var f = m(c), h = f.next(); !h.done; h = f.next()) {
        s += (y = h.value).getCount();
      }
    } catch (D) {
      n = {
        error: D
      };
    } finally {
      try {
        if (h && !h.done && (o = f.return)) {
          o.call(f);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    var l = new Array(s);
    var d = 0;
    try {
      for (var p = m(c), g = p.next(); !g.done; g = p.next()) {
        for (var y = g.value, w = 0; w < y.getCount(); w++) {
          var _ = y.getDataCodewords();
          var A = u.getECCodewords() + _;
          l[d++] = new t(_, new Uint8Array(A));
        }
      }
    } catch (M) {
      i = {
        error: M
      };
    } finally {
      try {
        if (g && !g.done && (a = p.return)) {
          a.call(p);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    var E = l[0].codewords.length - u.getECCodewords();
    var C = E - 1;
    var I = 0;
    for (w = 0; w < C; w++) {
      for (var S = 0; S < d; S++) {
        l[S].codewords[w] = e[I++];
      }
    }
    var T = 24 === r.getVersionNumber();
    var O = T ? 8 : d;
    for (S = 0; S < O; S++) {
      l[S].codewords[E - 1] = e[I++];
    }
    var b = l[0].codewords.length;
    for (w = E; w < b; w++) {
      for (S = 0; S < d; S++) {
        var R = T ? (S + 8) % d : S;
        var N = T && R > 7 ? w - 1 : w;
        l[R].codewords[N] = e[I++];
      }
    }
    if (I !== e.length) {
      throw new v.a();
    }
    return l;
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
var C = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var r = e && t[e];
  var n = 0;
  if (r) {
    return r.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[n++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var I = function () {
  function t() {
    this.rsDecoder = new l.a(h.a.DATA_MATRIX_FIELD_256);
  }
  t.prototype.decode = function (t) {
    var e;
    var r;
    var n = new _(t);
    var o = n.getVersion();
    var i = n.readCodewords();
    var a = A.getDataBlocks(i, o);
    var u = 0;
    try {
      for (var s = C(a), c = s.next(); !c.done; c = s.next()) {
        u += c.value.getNumDataCodewords();
      }
    } catch (w) {
      e = {
        error: w
      };
    } finally {
      try {
        if (c && !c.done && (r = s.return)) {
          r.call(s);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    for (var f = new Uint8Array(u), h = a.length, l = 0; l < h; l++) {
      var d = a[l];
      var p = d.getCodewords();
      var g = d.getNumDataCodewords();
      this.correctErrors(p, g);
      for (var y = 0; y < g; y++) {
        f[y * h + l] = p[y];
      }
    }
    return E.a.decode(f);
  };
  t.prototype.correctErrors = function (t, e) {
    var r = new Int32Array(t);
    try {
      this.rsDecoder.decode(r, t.length - e);
    } catch (o) {
      throw new f.a();
    }
    for (var n = 0; n < e; n++) {
      t[n] = r[n];
    }
  };
  return t;
}();
var S = require("./401");
var T = require("./371");
var O = require("./372");
var b = require("./73/index");
var R = function () {
  function t(t) {
    this.image = t;
    this.rectangleDetector = new S.a(this.image);
  }
  t.prototype.detect = function () {
    var e = this.rectangleDetector.detect();
    var r = this.detectSolid1(e);
    (r = this.detectSolid2(r))[3] = this.correctTopRight(r);
    if (!r[3]) {
      throw new a.a();
    }
    var n = (r = this.shiftToModuleCenter(r))[0];
    var o = r[1];
    var i = r[2];
    var u = r[3];
    var s = this.transitionsBetween(n, u) + 1;
    var c = this.transitionsBetween(i, u) + 1;
    if (1 === (1 & s)) {
      s += 1;
    }
    if (1 === (1 & c)) {
      c += 1;
    }
    if (4 * s < 7 * c && 4 * c < 7 * s) {
      s = c = Math.max(s, c);
    }
    var f = t.sampleGrid(this.image, n, o, i, u, s, c);
    return new T.a(f, [n, o, i, u]);
  };
  t.shiftPoint = function (t, e, r) {
    var n = (e.getX() - t.getX()) / (r + 1);
    var o = (e.getY() - t.getY()) / (r + 1);
    return new b.a(t.getX() + n, t.getY() + o);
  };
  t.moveAway = function (t, e, r) {
    var n = t.getX();
    var o = t.getY();
    if (n < e) {
      n -= 1;
    } else {
      n += 1;
    }
    if (o < r) {
      o -= 1;
    } else {
      o += 1;
    }
    return new b.a(n, o);
  };
  t.prototype.detectSolid1 = function (t) {
    var e = t[0];
    var r = t[1];
    var n = t[3];
    var o = t[2];
    var i = this.transitionsBetween(e, r);
    var a = this.transitionsBetween(r, n);
    var u = this.transitionsBetween(n, o);
    var s = this.transitionsBetween(o, e);
    var c = i;
    var f = [o, e, r, n];
    if (c > a) {
      c = a;
      f[0] = e;
      f[1] = r;
      f[2] = n;
      f[3] = o;
    }
    if (c > u) {
      c = u;
      f[0] = r;
      f[1] = n;
      f[2] = o;
      f[3] = e;
    }
    if (c > s) {
      f[0] = n;
      f[1] = o;
      f[2] = e;
      f[3] = r;
    }
    return f;
  };
  t.prototype.detectSolid2 = function (e) {
    var r = e[0];
    var n = e[1];
    var o = e[2];
    var i = e[3];
    var a = this.transitionsBetween(r, i);
    var u = t.shiftPoint(n, o, 4 * (a + 1));
    var s = t.shiftPoint(o, n, 4 * (a + 1));
    if (this.transitionsBetween(u, r) < this.transitionsBetween(s, i)) {
      e[0] = r;
      e[1] = n;
      e[2] = o;
      e[3] = i;
    } else {
      e[0] = n;
      e[1] = o;
      e[2] = i;
      e[3] = r;
    }
    return e;
  };
  t.prototype.correctTopRight = function (e) {
    var r = e[0];
    var n = e[1];
    var o = e[2];
    var i = e[3];
    var a = this.transitionsBetween(r, i);
    var u = this.transitionsBetween(n, i);
    var s = t.shiftPoint(r, n, 4 * (u + 1));
    var c = t.shiftPoint(o, n, 4 * (a + 1));
    a = this.transitionsBetween(s, i);
    u = this.transitionsBetween(c, i);
    var f = new b.a(i.getX() + (o.getX() - n.getX()) / (a + 1), i.getY() + (o.getY() - n.getY()) / (a + 1));
    var h = new b.a(i.getX() + (r.getX() - n.getX()) / (u + 1), i.getY() + (r.getY() - n.getY()) / (u + 1));
    return this.isValid(f) ? this.isValid(h) ? this.transitionsBetween(s, f) + this.transitionsBetween(c, f) > this.transitionsBetween(s, h) + this.transitionsBetween(c, h) ? f : h : f : this.isValid(h) ? h : null;
  };
  t.prototype.shiftToModuleCenter = function (e) {
    var r = e[0];
    var n = e[1];
    var o = e[2];
    var i = e[3];
    var a = this.transitionsBetween(r, i) + 1;
    var u = this.transitionsBetween(o, i) + 1;
    var s = t.shiftPoint(r, n, 4 * u);
    var c = t.shiftPoint(o, n, 4 * a);
    if (1 === (1 & (a = this.transitionsBetween(s, i) + 1))) {
      a += 1;
    }
    if (1 === (1 & (u = this.transitionsBetween(c, i) + 1))) {
      u += 1;
    }
    var f;
    var h;
    var l = (r.getX() + n.getX() + o.getX() + i.getX()) / 4;
    var d = (r.getY() + n.getY() + o.getY() + i.getY()) / 4;
    r = t.moveAway(r, l, d);
    n = t.moveAway(n, l, d);
    o = t.moveAway(o, l, d);
    i = t.moveAway(i, l, d);
    s = t.shiftPoint(r, n, 4 * u);
    s = t.shiftPoint(s, i, 4 * a);
    f = t.shiftPoint(n, r, 4 * u);
    f = t.shiftPoint(f, o, 4 * a);
    c = t.shiftPoint(o, i, 4 * u);
    c = t.shiftPoint(c, n, 4 * a);
    h = t.shiftPoint(i, o, 4 * u);
    return [s, f, c, h = t.shiftPoint(h, r, 4 * a)];
  };
  t.prototype.isValid = function (t) {
    return t.getX() >= 0 && t.getX() < this.image.getWidth() && t.getY() > 0 && t.getY() < this.image.getHeight();
  };
  t.sampleGrid = function (t, e, r, n, o, i, a) {
    return O.a.getInstance().sampleGrid(t, i, a, .5, .5, i - .5, .5, i - .5, a - .5, .5, a - .5, e.getX(), e.getY(), o.getX(), o.getY(), n.getX(), n.getY(), r.getX(), r.getY());
  };
  t.prototype.transitionsBetween = function (t, e) {
    var r = Math.trunc(t.getX());
    var n = Math.trunc(t.getY());
    var o = Math.trunc(e.getX());
    var i = Math.trunc(e.getY());
    var a = Math.abs(i - n) > Math.abs(o - r);
    if (a) {
      var u = r;
      r = n;
      n = u;
      u = o;
      o = i;
      i = u;
    }
    for (var s = Math.abs(o - r), c = Math.abs(i - n), f = -s / 2, h = n < i ? 1 : -1, l = r < o ? 1 : -1, d = 0, p = this.image.get(a ? n : r, a ? r : n), g = r, y = n; g !== o; g += l) {
      var w = this.image.get(a ? y : g, a ? g : y);
      if (w !== p) {
        d++;
        p = w;
      }
      if ((f += c) > 0) {
        if (y === i) {
          break;
        }
        y += h;
        f -= s;
      }
    }
    return d;
  };
  return t;
}();
var N = function () {
  function t() {
    this.decoder = new I();
  }
  t.prototype.decode = function (e, r) {
    var o;
    var a;
    if (undefined === r) {
      r = null;
    }
    if (null != r && r.has(i.a.PURE_BARCODE)) {
      var f = t.extractPureBits(e.getBlackMatrix());
      o = this.decoder.decode(f);
      a = t.NO_POINTS;
    } else {
      var h = new R(e.getBlackMatrix()).detect();
      o = this.decoder.decode(h.getBits());
      a = h.getPoints();
    }
    var l = o.getRawBytes();
    var d = new u.a(o.getText(), l, 8 * l.length, a, n.a.DATA_MATRIX, c.a.currentTimeMillis());
    var p = o.getByteSegments();
    if (null != p) {
      d.putMetadata(s.a.BYTE_SEGMENTS, p);
    }
    var g = o.getECLevel();
    if (null != g) {
      d.putMetadata(s.a.ERROR_CORRECTION_LEVEL, g);
    }
    return d;
  };
  t.prototype.reset = function () {};
  t.extractPureBits = function (t) {
    var e = t.getTopLeftOnBit();
    var r = t.getBottomRightOnBit();
    if (null == e || null == r) {
      throw new a.a();
    }
    var n = this.moduleSize(e, t);
    var i = e[1];
    var u = r[1];
    var s = e[0];
    var c = (r[0] - s + 1) / n;
    var f = (u - i + 1) / n;
    if (c <= 0 || f <= 0) {
      throw new a.a();
    }
    var h = n / 2;
    i += h;
    s += h;
    for (var l = new o.a(c, f), d = 0; d < f; d++) {
      for (var p = i + d * n, g = 0; g < c; g++) {
        if (t.get(s + g * n, p)) {
          l.set(g, d);
        }
      }
    }
    return l;
  };
  t.moduleSize = function (t, e) {
    for (var r = e.getWidth(), n = t[0], o = t[1]; n < r && e.get(n, o);) {
      n++;
    }
    if (n === r) {
      throw new a.a();
    }
    var i = n - t[0];
    if (0 === i) {
      throw new a.a();
    }
    return i;
  };
  t.NO_POINTS = [];
  return t;
}();
exports.a = N;