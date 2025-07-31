exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};
var n = 3;
var r = 3;
var i = 40;
var o = 10;
function a(e, n, r) {
  switch (e) {
    case exports.Patterns.PATTERN000:
      return (n + r) % 2 === 0;
    case exports.Patterns.PATTERN001:
      return n % 2 === 0;
    case exports.Patterns.PATTERN010:
      return r % 3 === 0;
    case exports.Patterns.PATTERN011:
      return (n + r) % 3 === 0;
    case exports.Patterns.PATTERN100:
      return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 === 0;
    case exports.Patterns.PATTERN101:
      return n * r % 2 + n * r % 3 === 0;
    case exports.Patterns.PATTERN110:
      return (n * r % 2 + n * r % 3) % 2 === 0;
    case exports.Patterns.PATTERN111:
      return (n * r % 3 + (n + r) % 2) % 2 === 0;
    default:
      throw new Error("bad maskPattern:" + e);
  }
}
exports.isValid = function (e) {
  return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
};
exports.from = function (e) {
  return exports.isValid(e) ? parseInt(e, 10) : void 0;
};
exports.getPenaltyN1 = function (e) {
  for (var t = e.size, r = 0, i = 0, o = 0, a = null, s = null, c = 0; c < t; c++) {
    i = o = 0;
    a = s = null;
    for (var u = 0; u < t; u++) {
      var l = e.get(c, u);
      if (l === a) {
        i++;
      } else {
        if (i >= 5) {
          r += n + (i - 5);
        }
        a = l;
        i = 1;
      }
      if ((l = e.get(u, c)) === s) {
        o++;
      } else {
        if (o >= 5) {
          r += n + (o - 5);
        }
        s = l;
        o = 1;
      }
    }
    if (i >= 5) {
      r += n + (i - 5);
    }
    if (o >= 5) {
      r += n + (o - 5);
    }
  }
  return r;
};
exports.getPenaltyN2 = function (e) {
  for (var t = e.size, n = 0, i = 0; i < t - 1; i++) {
    for (var o = 0; o < t - 1; o++) {
      var a = e.get(i, o) + e.get(i, o + 1) + e.get(i + 1, o) + e.get(i + 1, o + 1);
      if (!(4 !== a && 0 !== a)) {
        n++;
      }
    }
  }
  return n * r;
};
exports.getPenaltyN3 = function (e) {
  for (var t = e.size, n = 0, r = 0, o = 0, a = 0; a < t; a++) {
    r = o = 0;
    for (var s = 0; s < t; s++) {
      r = r << 1 & 2047 | e.get(a, s);
      if (s >= 10 && (1488 === r || 93 === r)) {
        n++;
      }
      o = o << 1 & 2047 | e.get(s, a);
      if (s >= 10 && (1488 === o || 93 === o)) {
        n++;
      }
    }
  }
  return n * i;
};
exports.getPenaltyN4 = function (e) {
  for (var t = 0, n = e.data.length, r = 0; r < n; r++) {
    t += e.data[r];
  }
  return Math.abs(Math.ceil(100 * t / n / 5) - 10) * o;
};
exports.applyMask = function (e, t) {
  for (var n = t.size, r = 0; r < n; r++) {
    for (var i = 0; i < n; i++) {
      if (!t.isReserved(i, r)) {
        t.xor(i, r, a(e, i, r));
      }
    }
  }
};
exports.getBestMask = function (e, n) {
  for (var r = Object.keys(exports.Patterns).length, i = 0, o = 1 / 0, a = 0; a < r; a++) {
    n(a);
    exports.applyMask(a, e);
    var s = exports.getPenaltyN1(e) + exports.getPenaltyN2(e) + exports.getPenaltyN3(e) + exports.getPenaltyN4(e);
    exports.applyMask(a, e);
    if (s < o) {
      o = s;
      i = a;
    }
  }
  return i;
};