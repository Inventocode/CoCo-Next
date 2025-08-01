"use strict";

var n = require("./180");
var o = require("./455");
var i = function (t) {
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
var a = function () {
  function t(t) {
    for (var e = [], r = 1; r < arguments.length; r++) {
      e[r - 1] = arguments[r];
    }
    this.ecCodewordsPerBlock = t;
    this.ecBlocks = e;
  }
  t.prototype.getECCodewordsPerBlock = function () {
    return this.ecCodewordsPerBlock;
  };
  t.prototype.getNumBlocks = function () {
    var t;
    var e;
    var r = 0;
    var n = this.ecBlocks;
    try {
      for (var o = i(n), a = o.next(); !a.done; a = o.next()) {
        r += a.value.getCount();
      }
    } catch (u) {
      t = {
        error: u
      };
    } finally {
      try {
        if (a && !a.done && (e = o.return)) {
          e.call(o);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
    return r;
  };
  t.prototype.getTotalECCodewords = function () {
    return this.ecCodewordsPerBlock * this.getNumBlocks();
  };
  t.prototype.getECBlocks = function () {
    return this.ecBlocks;
  };
  return t;
}();
var u = function () {
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
var s = require("./56");
var c = require("./63");
var f = function (t) {
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
var h = function () {
  function t(t, e) {
    for (var r, n, o = [], i = 2; i < arguments.length; i++) {
      o[i - 2] = arguments[i];
    }
    this.versionNumber = t;
    this.alignmentPatternCenters = e;
    this.ecBlocks = o;
    var a = 0;
    var u = o[0].getECCodewordsPerBlock();
    var s = o[0].getECBlocks();
    try {
      for (var c = f(s), h = c.next(); !h.done; h = c.next()) {
        var l = h.value;
        a += l.getCount() * (l.getDataCodewords() + u);
      }
    } catch (d) {
      r = {
        error: d
      };
    } finally {
      try {
        if (h && !h.done && (n = c.return)) {
          n.call(c);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    this.totalCodewords = a;
  }
  t.prototype.getVersionNumber = function () {
    return this.versionNumber;
  };
  t.prototype.getAlignmentPatternCenters = function () {
    return this.alignmentPatternCenters;
  };
  t.prototype.getTotalCodewords = function () {
    return this.totalCodewords;
  };
  t.prototype.getDimensionForVersion = function () {
    return 17 + 4 * this.versionNumber;
  };
  t.prototype.getECBlocksForLevel = function (t) {
    return this.ecBlocks[t.getValue()];
  };
  t.getProvisionalVersionForDimension = function (t) {
    if (t % 4 !== 1) {
      throw new s.a();
    }
    try {
      return this.getVersionForNumber((t - 17) / 4);
    } catch (e) {
      throw new s.a();
    }
  };
  t.getVersionForNumber = function (e) {
    if (e < 1 || e > 40) {
      throw new c.a();
    }
    return t.VERSIONS[e - 1];
  };
  t.decodeVersionInformation = function (e) {
    for (var r = Number.MAX_SAFE_INTEGER, n = 0, i = 0; i < t.VERSION_DECODE_INFO.length; i++) {
      var a = t.VERSION_DECODE_INFO[i];
      if (a === e) {
        return t.getVersionForNumber(i + 7);
      }
      var u = o.a.numBitsDiffering(e, a);
      if (u < r) {
        n = i + 7;
        r = u;
      }
    }
    return r <= 3 ? t.getVersionForNumber(n) : null;
  };
  t.prototype.buildFunctionPattern = function () {
    var t = this.getDimensionForVersion();
    var e = new n.a(t);
    e.setRegion(0, 0, 9, 9);
    e.setRegion(t - 8, 0, 8, 9);
    e.setRegion(0, t - 8, 9, 8);
    for (var r = this.alignmentPatternCenters.length, o = 0; o < r; o++) {
      for (var i = this.alignmentPatternCenters[o] - 2, a = 0; a < r; a++) {
        if (!(0 === o && (0 === a || a === r - 1) || o === r - 1 && 0 === a)) {
          e.setRegion(this.alignmentPatternCenters[a] - 2, i, 5, 5);
        }
      }
    }
    e.setRegion(6, 9, 1, t - 17);
    e.setRegion(9, 6, t - 17, 1);
    if (this.versionNumber > 6) {
      e.setRegion(t - 11, 0, 3, 6);
      e.setRegion(0, t - 11, 6, 3);
    }
    return e;
  };
  t.prototype.toString = function () {
    return "" + this.versionNumber;
  };
  t.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]);
  t.VERSIONS = [new t(1, new Int32Array(0), new a(7, new u(1, 19)), new a(10, new u(1, 16)), new a(13, new u(1, 13)), new a(17, new u(1, 9))), new t(2, Int32Array.from([6, 18]), new a(10, new u(1, 34)), new a(16, new u(1, 28)), new a(22, new u(1, 22)), new a(28, new u(1, 16))), new t(3, Int32Array.from([6, 22]), new a(15, new u(1, 55)), new a(26, new u(1, 44)), new a(18, new u(2, 17)), new a(22, new u(2, 13))), new t(4, Int32Array.from([6, 26]), new a(20, new u(1, 80)), new a(18, new u(2, 32)), new a(26, new u(2, 24)), new a(16, new u(4, 9))), new t(5, Int32Array.from([6, 30]), new a(26, new u(1, 108)), new a(24, new u(2, 43)), new a(18, new u(2, 15), new u(2, 16)), new a(22, new u(2, 11), new u(2, 12))), new t(6, Int32Array.from([6, 34]), new a(18, new u(2, 68)), new a(16, new u(4, 27)), new a(24, new u(4, 19)), new a(28, new u(4, 15))), new t(7, Int32Array.from([6, 22, 38]), new a(20, new u(2, 78)), new a(18, new u(4, 31)), new a(18, new u(2, 14), new u(4, 15)), new a(26, new u(4, 13), new u(1, 14))), new t(8, Int32Array.from([6, 24, 42]), new a(24, new u(2, 97)), new a(22, new u(2, 38), new u(2, 39)), new a(22, new u(4, 18), new u(2, 19)), new a(26, new u(4, 14), new u(2, 15))), new t(9, Int32Array.from([6, 26, 46]), new a(30, new u(2, 116)), new a(22, new u(3, 36), new u(2, 37)), new a(20, new u(4, 16), new u(4, 17)), new a(24, new u(4, 12), new u(4, 13))), new t(10, Int32Array.from([6, 28, 50]), new a(18, new u(2, 68), new u(2, 69)), new a(26, new u(4, 43), new u(1, 44)), new a(24, new u(6, 19), new u(2, 20)), new a(28, new u(6, 15), new u(2, 16))), new t(11, Int32Array.from([6, 30, 54]), new a(20, new u(4, 81)), new a(30, new u(1, 50), new u(4, 51)), new a(28, new u(4, 22), new u(4, 23)), new a(24, new u(3, 12), new u(8, 13))), new t(12, Int32Array.from([6, 32, 58]), new a(24, new u(2, 92), new u(2, 93)), new a(22, new u(6, 36), new u(2, 37)), new a(26, new u(4, 20), new u(6, 21)), new a(28, new u(7, 14), new u(4, 15))), new t(13, Int32Array.from([6, 34, 62]), new a(26, new u(4, 107)), new a(22, new u(8, 37), new u(1, 38)), new a(24, new u(8, 20), new u(4, 21)), new a(22, new u(12, 11), new u(4, 12))), new t(14, Int32Array.from([6, 26, 46, 66]), new a(30, new u(3, 115), new u(1, 116)), new a(24, new u(4, 40), new u(5, 41)), new a(20, new u(11, 16), new u(5, 17)), new a(24, new u(11, 12), new u(5, 13))), new t(15, Int32Array.from([6, 26, 48, 70]), new a(22, new u(5, 87), new u(1, 88)), new a(24, new u(5, 41), new u(5, 42)), new a(30, new u(5, 24), new u(7, 25)), new a(24, new u(11, 12), new u(7, 13))), new t(16, Int32Array.from([6, 26, 50, 74]), new a(24, new u(5, 98), new u(1, 99)), new a(28, new u(7, 45), new u(3, 46)), new a(24, new u(15, 19), new u(2, 20)), new a(30, new u(3, 15), new u(13, 16))), new t(17, Int32Array.from([6, 30, 54, 78]), new a(28, new u(1, 107), new u(5, 108)), new a(28, new u(10, 46), new u(1, 47)), new a(28, new u(1, 22), new u(15, 23)), new a(28, new u(2, 14), new u(17, 15))), new t(18, Int32Array.from([6, 30, 56, 82]), new a(30, new u(5, 120), new u(1, 121)), new a(26, new u(9, 43), new u(4, 44)), new a(28, new u(17, 22), new u(1, 23)), new a(28, new u(2, 14), new u(19, 15))), new t(19, Int32Array.from([6, 30, 58, 86]), new a(28, new u(3, 113), new u(4, 114)), new a(26, new u(3, 44), new u(11, 45)), new a(26, new u(17, 21), new u(4, 22)), new a(26, new u(9, 13), new u(16, 14))), new t(20, Int32Array.from([6, 34, 62, 90]), new a(28, new u(3, 107), new u(5, 108)), new a(26, new u(3, 41), new u(13, 42)), new a(30, new u(15, 24), new u(5, 25)), new a(28, new u(15, 15), new u(10, 16))), new t(21, Int32Array.from([6, 28, 50, 72, 94]), new a(28, new u(4, 116), new u(4, 117)), new a(26, new u(17, 42)), new a(28, new u(17, 22), new u(6, 23)), new a(30, new u(19, 16), new u(6, 17))), new t(22, Int32Array.from([6, 26, 50, 74, 98]), new a(28, new u(2, 111), new u(7, 112)), new a(28, new u(17, 46)), new a(30, new u(7, 24), new u(16, 25)), new a(24, new u(34, 13))), new t(23, Int32Array.from([6, 30, 54, 78, 102]), new a(30, new u(4, 121), new u(5, 122)), new a(28, new u(4, 47), new u(14, 48)), new a(30, new u(11, 24), new u(14, 25)), new a(30, new u(16, 15), new u(14, 16))), new t(24, Int32Array.from([6, 28, 54, 80, 106]), new a(30, new u(6, 117), new u(4, 118)), new a(28, new u(6, 45), new u(14, 46)), new a(30, new u(11, 24), new u(16, 25)), new a(30, new u(30, 16), new u(2, 17))), new t(25, Int32Array.from([6, 32, 58, 84, 110]), new a(26, new u(8, 106), new u(4, 107)), new a(28, new u(8, 47), new u(13, 48)), new a(30, new u(7, 24), new u(22, 25)), new a(30, new u(22, 15), new u(13, 16))), new t(26, Int32Array.from([6, 30, 58, 86, 114]), new a(28, new u(10, 114), new u(2, 115)), new a(28, new u(19, 46), new u(4, 47)), new a(28, new u(28, 22), new u(6, 23)), new a(30, new u(33, 16), new u(4, 17))), new t(27, Int32Array.from([6, 34, 62, 90, 118]), new a(30, new u(8, 122), new u(4, 123)), new a(28, new u(22, 45), new u(3, 46)), new a(30, new u(8, 23), new u(26, 24)), new a(30, new u(12, 15), new u(28, 16))), new t(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new a(30, new u(3, 117), new u(10, 118)), new a(28, new u(3, 45), new u(23, 46)), new a(30, new u(4, 24), new u(31, 25)), new a(30, new u(11, 15), new u(31, 16))), new t(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new a(30, new u(7, 116), new u(7, 117)), new a(28, new u(21, 45), new u(7, 46)), new a(30, new u(1, 23), new u(37, 24)), new a(30, new u(19, 15), new u(26, 16))), new t(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new a(30, new u(5, 115), new u(10, 116)), new a(28, new u(19, 47), new u(10, 48)), new a(30, new u(15, 24), new u(25, 25)), new a(30, new u(23, 15), new u(25, 16))), new t(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new a(30, new u(13, 115), new u(3, 116)), new a(28, new u(2, 46), new u(29, 47)), new a(30, new u(42, 24), new u(1, 25)), new a(30, new u(23, 15), new u(28, 16))), new t(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new a(30, new u(17, 115)), new a(28, new u(10, 46), new u(23, 47)), new a(30, new u(10, 24), new u(35, 25)), new a(30, new u(19, 15), new u(35, 16))), new t(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new a(30, new u(17, 115), new u(1, 116)), new a(28, new u(14, 46), new u(21, 47)), new a(30, new u(29, 24), new u(19, 25)), new a(30, new u(11, 15), new u(46, 16))), new t(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new a(30, new u(13, 115), new u(6, 116)), new a(28, new u(14, 46), new u(23, 47)), new a(30, new u(44, 24), new u(7, 25)), new a(30, new u(59, 16), new u(1, 17))), new t(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new a(30, new u(12, 121), new u(7, 122)), new a(28, new u(12, 47), new u(26, 48)), new a(30, new u(39, 24), new u(14, 25)), new a(30, new u(22, 15), new u(41, 16))), new t(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new a(30, new u(6, 121), new u(14, 122)), new a(28, new u(6, 47), new u(34, 48)), new a(30, new u(46, 24), new u(10, 25)), new a(30, new u(2, 15), new u(64, 16))), new t(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new a(30, new u(17, 122), new u(4, 123)), new a(28, new u(29, 46), new u(14, 47)), new a(30, new u(49, 24), new u(10, 25)), new a(30, new u(24, 15), new u(46, 16))), new t(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new a(30, new u(4, 122), new u(18, 123)), new a(28, new u(13, 46), new u(32, 47)), new a(30, new u(48, 24), new u(14, 25)), new a(30, new u(42, 15), new u(32, 16))), new t(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new a(30, new u(20, 117), new u(4, 118)), new a(28, new u(40, 47), new u(7, 48)), new a(30, new u(43, 24), new u(22, 25)), new a(30, new u(10, 15), new u(67, 16))), new t(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new a(30, new u(19, 118), new u(6, 119)), new a(28, new u(18, 47), new u(31, 48)), new a(30, new u(34, 24), new u(34, 25)), new a(30, new u(20, 15), new u(61, 16)))];
  return t;
}();
exports.a = h;