var r = require("../716");
var i = require("../1365");
var o = require("../1136");
var a = require("../717");
var s = require("./1366");
var c = require("../../../../../24/481/1123/758");
var u = r.getBCHDigit(7973);
function l(e, t) {
  return a.getCharCountIndicator(e, t) + 4;
}
function f(e, t) {
  var n = 0;
  e.forEach(function (e) {
    var r = l(e.mode, t);
    n += r + e.getBitsLength();
  });
  return n;
}
exports.from = function (e, t) {
  return s.isValid(e) ? parseInt(e, 10) : t;
};
exports.getCapacity = function (e, t, n) {
  if (!s.isValid(e)) {
    throw new Error("Invalid QR Code version");
  }
  if ("undefined" === typeof n) {
    n = a.BYTE;
  }
  var o = 8 * (r.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t));
  if (n === a.MIXED) {
    return o;
  }
  var c = o - l(n, e);
  switch (n) {
    case a.NUMERIC:
      return Math.floor(c / 10 * 3);
    case a.ALPHANUMERIC:
      return Math.floor(c / 11 * 2);
    case a.KANJI:
      return Math.floor(c / 13);
    case a.BYTE:
    default:
      return Math.floor(c / 8);
  }
};
exports.getBestVersionForData = function (e, n) {
  var r;
  var i = o.from(n, o.M);
  if (c(e)) {
    if (e.length > 1) {
      return function (e, n) {
        for (var r = 1; r <= 40; r++) {
          if (f(e, r) <= exports.getCapacity(r, n, a.MIXED)) {
            return r;
          }
        }
      }(e, i);
    }
    if (0 === e.length) {
      return 1;
    }
    r = e[0];
  } else {
    r = e;
  }
  return function (e, n, r) {
    for (var i = 1; i <= 40; i++) {
      if (n <= exports.getCapacity(i, r, e)) {
        return i;
      }
    }
  }(r.mode, r.getLength(), i);
};
exports.getEncodedBits = function (e) {
  if (!s.isValid(e) || e < 7) {
    throw new Error("Invalid QR Code version");
  }
  for (var t = e << 12; r.getBCHDigit(t) - u >= 0;) {
    t ^= 7973 << r.getBCHDigit(t) - u;
  }
  return e << 12 | t;
};