"use strict";

var n = require("../74");
var o = require("../118");
var i = require("../37");
var a = require("../150");
var u = require("../117");
var s = require("./351");
var c = require("./409");
var f = require("./604");
var h = require("./382");
var l = require("../165");
var d = function () {
  function t() {}
  t.buildBitArray = function (t) {
    var e = 2 * t.length - 1;
    if (null == t[t.length - 1].getRightChar()) {
      e -= 1;
    }
    for (var r = 12 * e, n = new l.a(r), o = 0, i = t[0].getRightChar().getValue(), a = 11; a >= 0; --a) {
      if (0 != (i & 1 << a)) {
        n.set(o);
      }
      o++;
    }
    for (a = 1; a < t.length; ++a) {
      for (var u = t[a], s = u.getLeftChar().getValue(), c = 11; c >= 0; --c) {
        if (0 != (s & 1 << c)) {
          n.set(o);
        }
        o++;
      }
      if (null != u.getRightChar()) {
        var f = u.getRightChar().getValue();
        for (c = 11; c >= 0; --c) {
          if (0 != (f & 1 << c)) {
            n.set(o);
          }
          o++;
        }
      }
    }
    return n;
  };
  return t;
}();
var p = require("../600");
var g = function () {
  function t(t, e, r, n) {
    this.leftchar = t;
    this.rightchar = e;
    this.finderpattern = r;
    this.maybeLast = n;
  }
  t.prototype.mayBeLast = function () {
    return this.maybeLast;
  };
  t.prototype.getLeftChar = function () {
    return this.leftchar;
  };
  t.prototype.getRightChar = function () {
    return this.rightchar;
  };
  t.prototype.getFinderPattern = function () {
    return this.finderpattern;
  };
  t.prototype.mustBeLast = function () {
    return null == this.rightchar;
  };
  t.prototype.toString = function () {
    return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null" : this.finderpattern.getValue()) + " ]";
  };
  t.equals = function (e, r) {
    return e instanceof t && t.equalsOrNull(e.leftchar, r.leftchar) && t.equalsOrNull(e.rightchar, r.rightchar) && t.equalsOrNull(e.finderpattern, r.finderpattern);
  };
  t.equalsOrNull = function (e, r) {
    return null === e ? null === r : t.equals(e, r);
  };
  t.prototype.hashCode = function () {
    return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
  };
  return t;
}();
var y = function () {
  function t(t, e, r) {
    this.pairs = t;
    this.rowNumber = e;
    this.wasReversed = r;
  }
  t.prototype.getPairs = function () {
    return this.pairs;
  };
  t.prototype.getRowNumber = function () {
    return this.rowNumber;
  };
  t.prototype.isReversed = function () {
    return this.wasReversed;
  };
  t.prototype.isEquivalent = function (t) {
    return this.checkEqualitity(this, t);
  };
  t.prototype.toString = function () {
    return "{ " + this.pairs + " }";
  };
  t.prototype.equals = function (e, r) {
    return e instanceof t && this.checkEqualitity(e, r) && e.wasReversed === r.wasReversed;
  };
  t.prototype.checkEqualitity = function (t, e) {
    var r;
    if (t && e) {
      t.forEach(function (t, n) {
        e.forEach(function (e) {
          if (t.getLeftChar().getValue() === e.getLeftChar().getValue() && t.getRightChar().getValue() === e.getRightChar().getValue() && t.getFinderPatter().getValue() === e.getFinderPatter().getValue()) {
            r = !0;
          }
        });
      });
      return r;
    }
  };
  return t;
}();
var w = function () {
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
var v = function (t) {
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
          t = void 0;
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
var _ = function (t) {
  function e() {
    var r = null !== t && t.apply(this, arguments) || this;
    r.pairs = new Array(e.MAX_PAIRS);
    r.rows = new Array();
    r.startEnd = [2];
    return r;
  }
  w(e, t);
  e.prototype.decodeRow = function (t, r, n) {
    this.pairs.length = 0;
    this.startFromEven = !1;
    try {
      return e.constructResult(this.decodeRow2pairs(t, r));
    } catch (o) {}
    this.pairs.length = 0;
    this.startFromEven = !0;
    return e.constructResult(this.decodeRow2pairs(t, r));
  };
  e.prototype.reset = function () {
    this.pairs.length = 0;
    this.rows.length = 0;
  };
  e.prototype.decodeRow2pairs = function (t, e) {
    for (var r, n = !1; !n;) {
      try {
        this.pairs.push(this.retrieveNextPair(e, this.pairs, t));
      } catch (a) {
        if (a instanceof i.a) {
          if (!this.pairs.length) {
            throw new i.a();
          }
          n = !0;
        }
      }
    }
    if (this.checkChecksum()) {
      return this.pairs;
    }
    r = !!this.rows.length;
    this.storeRow(t, !1);
    if (r) {
      var o = this.checkRowsBoolean(!1);
      if (null != o) {
        return o;
      }
      if (null != (o = this.checkRowsBoolean(!0))) {
        return o;
      }
    }
    throw new i.a();
  };
  e.prototype.checkRowsBoolean = function (t) {
    if (this.rows.length > 25) {
      this.rows.length = 0;
      return null;
    }
    this.pairs.length = 0;
    if (t) {
      this.rows = this.rows.reverse();
    }
    var e = null;
    try {
      e = this.checkRows(new Array(), 0);
    } catch (r) {
      console.log(r);
    }
    if (t) {
      this.rows = this.rows.reverse();
    }
    return e;
  };
  e.prototype.checkRows = function (t, r) {
    for (var n, o, a = r; a < this.rows.length; a++) {
      var u = this.rows[a];
      this.pairs.length = 0;
      try {
        for (n = void 0, s = v(t), c = s.next(), void 0; !c.done; c = s.next()) {
          var s;
          var c;
          var f = c.value;
          this.pairs.push(f.getPairs());
        }
      } catch (l) {
        n = {
          error: l
        };
      } finally {
        try {
          if (c && !c.done && (o = s.return)) {
            o.call(s);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      this.pairs.push(u.getPairs());
      if (e.isValidSequence(this.pairs)) {
        if (this.checkChecksum()) {
          return this.pairs;
        }
        var h = new Array(t);
        h.push(u);
        try {
          return this.checkRows(h, a + 1);
        } catch (d) {
          console.log(d);
        }
      }
    }
    throw new i.a();
  };
  e.isValidSequence = function (t) {
    var r;
    var n;
    try {
      for (var o = v(e.FINDER_PATTERN_SEQUENCES), i = o.next(); !i.done; i = o.next()) {
        var a = i.value;
        if (!(t.length > a.length)) {
          for (var u = !0, s = 0; s < t.length; s++) {
            if (t[s].getFinderPattern().getValue() != a[s]) {
              u = !1;
              break;
            }
          }
          if (u) {
            return !0;
          }
        }
      }
    } catch (c) {
      r = {
        error: c
      };
    } finally {
      try {
        if (i && !i.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    return !1;
  };
  e.prototype.storeRow = function (t, r) {
    for (var n = 0, o = !1, i = !1; n < this.rows.length;) {
      var a = this.rows[n];
      if (a.getRowNumber() > t) {
        i = a.isEquivalent(this.pairs);
        break;
      }
      o = a.isEquivalent(this.pairs);
      n++;
    }
    if (!(i || o || e.isPartialRow(this.pairs, this.rows))) {
      this.rows.push(n, new y(this.pairs, t, r));
      this.removePartialRows(this.pairs, this.rows);
    }
  };
  e.prototype.removePartialRows = function (t, e) {
    var r;
    var n;
    var o;
    var i;
    var a;
    var u;
    try {
      for (var s = v(e), c = s.next(); !c.done; c = s.next()) {
        var f = c.value;
        if (f.getPairs().length !== t.length) {
          try {
            for (o = void 0, h = v(f.getPairs()), l = h.next(), void 0; !l.done; l = h.next()) {
              var h;
              var l;
              var d = l.value;
              var p = !1;
              try {
                for (a = void 0, y = v(t), w = y.next(), void 0; !w.done; w = y.next()) {
                  var y;
                  var w;
                  var _ = w.value;
                  if (g.equals(d, _)) {
                    p = !0;
                    break;
                  }
                }
              } catch (m) {
                a = {
                  error: m
                };
              } finally {
                try {
                  if (w && !w.done && (u = y.return)) {
                    u.call(y);
                  }
                } finally {
                  if (a) {
                    throw a.error;
                  }
                }
              }
              if (!p) {
                !1;
              }
            }
          } catch (A) {
            o = {
              error: A
            };
          } finally {
            try {
              if (l && !l.done && (i = h.return)) {
                i.call(h);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
        }
      }
    } catch (E) {
      r = {
        error: E
      };
    } finally {
      try {
        if (c && !c.done && (n = s.return)) {
          n.call(s);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
  };
  e.isPartialRow = function (t, e) {
    var r;
    var n;
    var o;
    var i;
    var a;
    var u;
    try {
      for (var s = v(e), c = s.next(); !c.done; c = s.next()) {
        var f = c.value;
        var h = !0;
        try {
          for (o = void 0, l = v(t), d = l.next(), void 0; !d.done; d = l.next()) {
            var l;
            var d;
            var p = d.value;
            var g = !1;
            try {
              for (a = void 0, y = v(f.getPairs()), w = y.next(), void 0; !w.done; w = y.next()) {
                var y;
                var w;
                var _ = w.value;
                if (p.equals(_)) {
                  g = !0;
                  break;
                }
              }
            } catch (m) {
              a = {
                error: m
              };
            } finally {
              try {
                if (w && !w.done && (u = y.return)) {
                  u.call(y);
                }
              } finally {
                if (a) {
                  throw a.error;
                }
              }
            }
            if (!g) {
              h = !1;
              break;
            }
          }
        } catch (A) {
          o = {
            error: A
          };
        } finally {
          try {
            if (d && !d.done && (i = l.return)) {
              i.call(l);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
        if (h) {
          return !0;
        }
      }
    } catch (E) {
      r = {
        error: E
      };
    } finally {
      try {
        if (c && !c.done && (n = s.return)) {
          n.call(s);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    return !1;
  };
  e.prototype.getRows = function () {
    return this.rows;
  };
  e.constructResult = function (t) {
    var e = d.buildBitArray(t);
    var r = Object(p.a)(e).parseInformation();
    var o = t[0].getFinderPattern().getResultPoints();
    var i = t[t.length - 1].getFinderPattern().getResultPoints();
    var u = [o[0], o[1], i[0], i[1]];
    return new a.a(r, null, null, u, n.a.RSS_EXPANDED, null);
  };
  e.prototype.checkChecksum = function () {
    var t = this.pairs.get(0);
    var e = t.getLeftChar();
    var r = t.getRightChar();
    if (null == r) {
      return !1;
    }
    for (var n = r.getChecksumPortion(), o = 2, i = 1; i < this.pairs.size(); ++i) {
      var a = this.pairs.get(i);
      n += a.getLeftChar().getChecksumPortion();
      o++;
      var u = a.getRightChar();
      if (null != u) {
        n += u.getChecksumPortion();
        o++;
      }
    }
    return 211 * (o - 4) + (n %= 211) == e.getValue();
  };
  e.getNextSecondBar = function (t, e) {
    var r;
    if (t.get(e)) {
      r = t.getNextUnset(e);
      r = t.getNextSet(r);
    } else {
      r = t.getNextSet(e);
      r = t.getNextUnset(r);
    }
    return r;
  };
  e.prototype.retrieveNextPair = function (t, r, n) {
    var o;
    var a = r.length % 2 == 0;
    if (this.startFromEven) {
      a = !a;
    }
    var u = !0;
    var s = -1;
    do {
      this.findNextPair(t, r, s);
      if (null == (o = this.parseFoundFinderPattern(t, n, a))) {
        s = e.getNextSecondBar(t, this.startEnd[0]);
      } else {
        u = !1;
      }
    } while (u);
    var c;
    var f = this.decodeDataCharacter(t, o, a, !0);
    if (!this.isEmptyPair(r) && r[r.length - 1].mustBeLast()) {
      throw new i.a();
    }
    try {
      c = this.decodeDataCharacter(t, o, a, !1);
    } catch (h) {
      c = null;
      console.log(h);
    }
    return new g(f, c, o, !0);
  };
  e.prototype.isEmptyPair = function (t) {
    return 0 === t.length;
  };
  e.prototype.findNextPair = function (t, r, n) {
    var o = this.getDecodeFinderCounters();
    o[0] = 0;
    o[1] = 0;
    o[2] = 0;
    o[3] = 0;
    var a;
    var u = t.getSize();
    if (n >= 0) {
      a = n;
    } else if (this.isEmptyPair(r)) {
      a = 0;
    } else {
      a = r[r.length - 1].getFinderPattern().getStartEnd()[1];
    }
    var s = r.length % 2 != 0;
    if (this.startFromEven) {
      s = !s;
    }
    for (var c = !1; a < u && (c = !t.get(a));) {
      a++;
    }
    for (var f = 0, h = a, l = a; l < u; l++) {
      if (t.get(l) != c) {
        o[f]++;
      } else {
        if (3 == f) {
          if (s) {
            e.reverseCounters(o);
          }
          if (e.isFinderPattern(o)) {
            this.startEnd[0] = h;
            return void (this.startEnd[1] = l);
          }
          if (s) {
            e.reverseCounters(o);
          }
          h += o[0] + o[1];
          o[0] = o[2];
          o[1] = o[3];
          o[2] = 0;
          o[3] = 0;
          f--;
        } else {
          f++;
        }
        o[f] = 1;
        c = !c;
      }
    }
    throw new i.a();
  };
  e.reverseCounters = function (t) {
    for (var e = t.length, r = 0; r < e / 2; ++r) {
      var n = t[r];
      t[r] = t[e - r - 1];
      t[e - r - 1] = n;
    }
  };
  e.prototype.parseFoundFinderPattern = function (t, r, n) {
    var o;
    var i;
    var a;
    if (n) {
      for (var s = this.startEnd[0] - 1; s >= 0 && !t.get(s);) {
        s--;
      }
      s++;
      o = this.startEnd[0] - s;
      i = s;
      a = this.startEnd[1];
    } else {
      i = this.startEnd[0];
      o = (a = t.getNextUnset(this.startEnd[1] + 1)) - this.startEnd[1];
    }
    var c;
    var h = this.getDecodeFinderCounters();
    u.a.arraycopy(h, 0, h, 1, h.length - 1);
    h[0] = o;
    try {
      c = this.parseFinderValue(h, e.FINDER_PATTERNS);
    } catch (l) {
      return null;
    }
    return new f.a(c, [i, a], i, a, r);
  };
  e.prototype.decodeDataCharacter = function (t, r, n, a) {
    for (var u = this.getDataCharacterCounters(), s = 0; s < u.length; s++) {
      u[s] = 0;
    }
    if (a) {
      e.recordPatternInReverse(t, r.getStartEnd()[0], u);
    } else {
      e.recordPattern(t, r.getStartEnd()[1], u);
      for (var f = 0, l = u.length - 1; f < l; f++, l--) {
        var d = u[f];
        u[f] = u[l];
        u[l] = d;
      }
    }
    var p = o.a.sum(new Int32Array(u)) / 17;
    var g = (r.getStartEnd()[1] - r.getStartEnd()[0]) / 15;
    if (Math.abs(p - g) / g > .3) {
      throw new i.a();
    }
    var y = this.getOddCounts();
    var w = this.getEvenCounts();
    var v = this.getOddRoundingErrors();
    var _ = this.getEvenRoundingErrors();
    for (f = 0; f < u.length; f++) {
      var m = 1 * u[f] / p;
      var A = m + .5;
      if (A < 1) {
        if (m < .3) {
          throw new i.a();
        }
        A = 1;
      } else if (A > 8) {
        if (m > 8.7) {
          throw new i.a();
        }
        A = 8;
      }
      var E = f / 2;
      if (0 == (1 & f)) {
        y[E] = A;
        v[E] = m - A;
      } else {
        w[E] = A;
        _[E] = m - A;
      }
    }
    this.adjustOddEvenCounts(17);
    var C = 4 * r.getValue() + (n ? 0 : 2) + (a ? 0 : 1) - 1;
    var I = 0;
    var S = 0;
    for (f = y.length - 1; f >= 0; f--) {
      if (e.isNotA1left(r, n, a)) {
        var T = e.WEIGHTS[C][2 * f];
        S += y[f] * T;
      }
      I += y[f];
    }
    var O = 0;
    for (f = w.length - 1; f >= 0; f--) {
      if (e.isNotA1left(r, n, a)) {
        T = e.WEIGHTS[C][2 * f + 1];
        O += w[f] * T;
      }
    }
    var b = S + O;
    if (0 != (1 & I) || I > 13 || I < 4) {
      throw new i.a();
    }
    var R = (13 - I) / 2;
    var N = e.SYMBOL_WIDEST[R];
    var D = 9 - N;
    var M = h.a.getRSSvalue(y, N, !0);
    var P = h.a.getRSSvalue(w, D, !1);
    var B = M * e.EVEN_TOTAL_SUBSET[R] + P + e.GSUM[R];
    return new c.a(B, b);
  };
  e.isNotA1left = function (t, e, r) {
    return !(0 == t.getValue() && e && r);
  };
  e.prototype.adjustOddEvenCounts = function (t) {
    var r = o.a.sum(new Int32Array(this.getOddCounts()));
    var n = o.a.sum(new Int32Array(this.getEvenCounts()));
    var a = !1;
    var u = !1;
    if (r > 13) {
      u = !0;
    } else {
      if (r < 4) {
        a = !0;
      }
    }
    var s = !1;
    var c = !1;
    if (n > 13) {
      c = !0;
    } else {
      if (n < 4) {
        s = !0;
      }
    }
    var f = r + n - t;
    var h = 1 == (1 & r);
    var l = 0 == (1 & n);
    if (1 == f) {
      if (h) {
        if (l) {
          throw new i.a();
        }
        u = !0;
      } else {
        if (!l) {
          throw new i.a();
        }
        c = !0;
      }
    } else if (-1 == f) {
      if (h) {
        if (l) {
          throw new i.a();
        }
        a = !0;
      } else {
        if (!l) {
          throw new i.a();
        }
        s = !0;
      }
    } else {
      if (0 != f) {
        throw new i.a();
      }
      if (h) {
        if (!l) {
          throw new i.a();
        }
        if (r < n) {
          a = !0;
          c = !0;
        } else {
          u = !0;
          s = !0;
        }
      } else if (l) {
        throw new i.a();
      }
    }
    if (a) {
      if (u) {
        throw new i.a();
      }
      e.increment(this.getOddCounts(), this.getOddRoundingErrors());
    }
    if (u) {
      e.decrement(this.getOddCounts(), this.getOddRoundingErrors());
    }
    if (s) {
      if (c) {
        throw new i.a();
      }
      e.increment(this.getEvenCounts(), this.getOddRoundingErrors());
    }
    if (c) {
      e.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
    }
  };
  e.SYMBOL_WIDEST = [7, 5, 4, 3, 1];
  e.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204];
  e.GSUM = [0, 348, 1388, 2948, 3988];
  e.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])];
  e.WEIGHTS = [[1, 3, 9, 27, 81, 32, 96, 77], [20, 60, 180, 118, 143, 7, 21, 63], [189, 145, 13, 39, 117, 140, 209, 205], [193, 157, 49, 147, 19, 57, 171, 91], [62, 186, 136, 197, 169, 85, 44, 132], [185, 133, 188, 142, 4, 12, 36, 108], [113, 128, 173, 97, 80, 29, 87, 50], [150, 28, 84, 41, 123, 158, 52, 156], [46, 138, 203, 187, 139, 206, 196, 166], [76, 17, 51, 153, 37, 111, 122, 155], [43, 129, 176, 106, 107, 110, 119, 146], [16, 48, 144, 10, 30, 90, 59, 177], [109, 116, 137, 200, 178, 112, 125, 164], [70, 210, 208, 202, 184, 130, 179, 115], [134, 191, 151, 31, 93, 68, 204, 190], [148, 22, 66, 198, 172, 94, 71, 2], [6, 18, 54, 162, 64, 192, 154, 40], [120, 149, 25, 75, 14, 42, 126, 167], [79, 26, 78, 23, 69, 207, 199, 175], [103, 98, 83, 38, 114, 131, 182, 124], [161, 61, 183, 127, 170, 88, 53, 159], [55, 165, 73, 8, 24, 72, 5, 15], [45, 135, 194, 160, 58, 174, 100, 89]];
  e.FINDER_PAT_A = 0;
  e.FINDER_PAT_B = 1;
  e.FINDER_PAT_C = 2;
  e.FINDER_PAT_D = 3;
  e.FINDER_PAT_E = 4;
  e.FINDER_PAT_F = 5;
  e.FINDER_PATTERN_SEQUENCES = [[e.FINDER_PAT_A, e.FINDER_PAT_A], [e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B], [e.FINDER_PAT_A, e.FINDER_PAT_C, e.FINDER_PAT_B, e.FINDER_PAT_D], [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_C], [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_D, e.FINDER_PAT_F], [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F], [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_D], [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_E], [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F], [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F]];
  e.MAX_PAIRS = 11;
  return e;
}(s.a);
exports.a = _;