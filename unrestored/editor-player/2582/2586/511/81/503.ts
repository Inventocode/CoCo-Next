"use strict";

var n = require("./74");
var o = require("./164");
var i = require("./124");
var a = require("./56");
var u = require("./37");
var s = require("./150");
var c = require("./73/index");
var f = require("./170");
var h = function () {
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
var l = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }
  h(e, t);
  e.findStartPattern = function (t) {
    for (var r = t.getSize(), n = t.getNextSet(0), o = 0, i = Int32Array.from([0, 0, 0, 0, 0, 0]), a = n, s = !1, c = n; c < r; c++) {
      if (t.get(c) !== s) {
        i[o]++;
      } else {
        if (5 === o) {
          for (var h = e.MAX_AVG_VARIANCE, l = -1, d = e.CODE_START_A; d <= e.CODE_START_C; d++) {
            var p = f.a.patternMatchVariance(i, e.CODE_PATTERNS[d], e.MAX_INDIVIDUAL_VARIANCE);
            if (p < h) {
              h = p;
              l = d;
            }
          }
          if (l >= 0 && t.isRange(Math.max(0, a - (c - a) / 2), a, !1)) {
            return Int32Array.from([a, c, l]);
          }
          a += i[0] + i[1];
          (i = i.slice(2, i.length - 1))[o - 1] = 0;
          i[o] = 0;
          o--;
        } else {
          o++;
        }
        i[o] = 1;
        s = !s;
      }
    }
    throw new u.a();
  };
  e.decodeCode = function (t, r, n) {
    f.a.recordPattern(t, n, r);
    for (var o = e.MAX_AVG_VARIANCE, i = -1, a = 0; a < e.CODE_PATTERNS.length; a++) {
      var s = e.CODE_PATTERNS[a];
      var c = this.patternMatchVariance(r, s, e.MAX_INDIVIDUAL_VARIANCE);
      if (c < o) {
        o = c;
        i = a;
      }
    }
    if (i >= 0) {
      return i;
    }
    throw new u.a();
  };
  e.prototype.decodeRow = function (t, r, f) {
    var h;
    var l = f && !0 === f.get(i.a.ASSUME_GS1);
    var d = e.findStartPattern(r);
    var p = d[2];
    var g = 0;
    var y = new Uint8Array(20);
    switch (y[g++] = p, p) {
      case e.CODE_START_A:
        h = e.CODE_CODE_A;
        break;
      case e.CODE_START_B:
        h = e.CODE_CODE_B;
        break;
      case e.CODE_START_C:
        h = e.CODE_CODE_C;
        break;
      default:
        throw new a.a();
    }
    for (var w = !1, v = !1, _ = "", m = d[0], A = d[1], E = Int32Array.from([0, 0, 0, 0, 0, 0]), C = 0, I = 0, S = p, T = 0, O = !0, b = !1, R = !1; !w;) {
      var N = v;
      switch (v = !1, C = I, I = e.decodeCode(r, E, A), y[g++] = I, I !== e.CODE_STOP && (O = !0), I !== e.CODE_STOP && (S += ++T * I), m = A, A += E.reduce(function (t, e) {
        return t + e;
      }, 0), I) {
        case e.CODE_START_A:
        case e.CODE_START_B:
        case e.CODE_START_C:
          throw new a.a();
      }
      switch (h) {
        case e.CODE_CODE_A:
          if (I < 64) {
            _ += R === b ? String.fromCharCode(" ".charCodeAt(0) + I) : String.fromCharCode(" ".charCodeAt(0) + I + 128);
            R = !1;
          } else if (I < 96) {
            _ += R === b ? String.fromCharCode(I - 64) : String.fromCharCode(I + 64);
            R = !1;
          } else {
            switch (I !== e.CODE_STOP && (O = !1), I) {
              case e.CODE_FNC_1:
                if (l) {
                  if (0 === _.length) {
                    _ += "]C1";
                  } else {
                    _ += String.fromCharCode(29);
                  }
                }
                break;
              case e.CODE_FNC_2:
              case e.CODE_FNC_3:
                break;
              case e.CODE_FNC_4_A:
                if (!b && R) {
                  b = !0;
                  R = !1;
                } else {
                  if (b && R) {
                    b = !1;
                    R = !1;
                  } else {
                    R = !0;
                  }
                }
                break;
              case e.CODE_SHIFT:
                v = !0;
                h = e.CODE_CODE_B;
                break;
              case e.CODE_CODE_B:
                h = e.CODE_CODE_B;
                break;
              case e.CODE_CODE_C:
                h = e.CODE_CODE_C;
                break;
              case e.CODE_STOP:
                w = !0;
            }
          }
          break;
        case e.CODE_CODE_B:
          if (I < 96) {
            _ += R === b ? String.fromCharCode(" ".charCodeAt(0) + I) : String.fromCharCode(" ".charCodeAt(0) + I + 128);
            R = !1;
          } else {
            switch (I !== e.CODE_STOP && (O = !1), I) {
              case e.CODE_FNC_1:
                if (l) {
                  if (0 === _.length) {
                    _ += "]C1";
                  } else {
                    _ += String.fromCharCode(29);
                  }
                }
                break;
              case e.CODE_FNC_2:
              case e.CODE_FNC_3:
                break;
              case e.CODE_FNC_4_B:
                if (!b && R) {
                  b = !0;
                  R = !1;
                } else {
                  if (b && R) {
                    b = !1;
                    R = !1;
                  } else {
                    R = !0;
                  }
                }
                break;
              case e.CODE_SHIFT:
                v = !0;
                h = e.CODE_CODE_A;
                break;
              case e.CODE_CODE_A:
                h = e.CODE_CODE_A;
                break;
              case e.CODE_CODE_C:
                h = e.CODE_CODE_C;
                break;
              case e.CODE_STOP:
                w = !0;
            }
          }
          break;
        case e.CODE_CODE_C:
          if (I < 100) {
            if (I < 10) {
              _ += "0";
            }
            _ += I;
          } else {
            switch (I !== e.CODE_STOP && (O = !1), I) {
              case e.CODE_FNC_1:
                if (l) {
                  if (0 === _.length) {
                    _ += "]C1";
                  } else {
                    _ += String.fromCharCode(29);
                  }
                }
                break;
              case e.CODE_CODE_A:
                h = e.CODE_CODE_A;
                break;
              case e.CODE_CODE_B:
                h = e.CODE_CODE_B;
                break;
              case e.CODE_STOP:
                w = !0;
            }
          }
      }
      if (N) {
        h = h === e.CODE_CODE_A ? e.CODE_CODE_B : e.CODE_CODE_A;
      }
    }
    var D = A - m;
    A = r.getNextUnset(A);
    if (!r.isRange(A, Math.min(r.getSize(), A + (A - m) / 2), !1)) {
      throw new u.a();
    }
    if ((S -= T * C) % 103 !== C) {
      throw new o.a();
    }
    var M = _.length;
    if (0 === M) {
      throw new u.a();
    }
    if (M > 0 && O) {
      _ = h === e.CODE_CODE_C ? _.substring(0, M - 2) : _.substring(0, M - 1);
    }
    for (var P = (d[1] + d[0]) / 2, B = m + D / 2, L = y.length, F = new Uint8Array(L), x = 0; x < L; x++) {
      F[x] = y[x];
    }
    var k = [new c.a(P, t), new c.a(B, t)];
    return new s.a(_, F, 0, k, n.a.CODE_128, new Date().getTime());
  };
  e.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])];
  e.MAX_AVG_VARIANCE = .25;
  e.MAX_INDIVIDUAL_VARIANCE = .7;
  e.CODE_SHIFT = 98;
  e.CODE_CODE_C = 99;
  e.CODE_CODE_B = 100;
  e.CODE_CODE_A = 101;
  e.CODE_FNC_1 = 102;
  e.CODE_FNC_2 = 97;
  e.CODE_FNC_3 = 96;
  e.CODE_FNC_4_A = 101;
  e.CODE_FNC_4_B = 100;
  e.CODE_START_A = 103;
  e.CODE_START_B = 104;
  e.CODE_START_C = 105;
  e.CODE_STOP = 106;
  return e;
}(f.a);
exports.a = l;