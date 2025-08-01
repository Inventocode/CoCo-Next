"use strict";

var n = function () {
  function t() {}
  t.singletonList = function (t) {
    return [t];
  };
  t.min = function (t, e) {
    return t.sort(e)[0];
  };
  return t;
}();
var o = require("./165");
var i = function () {
  function t(t) {
    this.previous = t;
  }
  t.prototype.getPrevious = function () {
    return this.previous;
  };
  return t;
}();
var a = require("./105");
var u = function () {
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
var s = function (t) {
  function e(e, r, n) {
    var o = t.call(this, e) || this;
    o.value = r;
    o.bitCount = n;
    return o;
  }
  u(e, t);
  e.prototype.appendTo = function (t, e) {
    t.appendBits(this.value, this.bitCount);
  };
  e.prototype.add = function (t, r) {
    return new e(this, t, r);
  };
  e.prototype.addBinaryShift = function (t, r) {
    console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token");
    return new e(this, t, r);
  };
  e.prototype.toString = function () {
    var t = this.value & (1 << this.bitCount) - 1;
    t |= 1 << this.bitCount;
    return "<" + a.a.toBinaryString(t | 1 << this.bitCount).substring(1) + ">";
  };
  return e;
}(i);
var c = function () {
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
var f = function (t) {
  function e(e, r, n) {
    var o = t.call(this, e, 0, 0) || this;
    o.binaryShiftStart = r;
    o.binaryShiftByteCount = n;
    return o;
  }
  c(e, t);
  e.prototype.appendTo = function (t, e) {
    for (var r = 0; r < this.binaryShiftByteCount; r++) {
      if (0 === r || 31 === r && this.binaryShiftByteCount <= 62) {
        t.appendBits(31, 5);
        if (this.binaryShiftByteCount > 62) {
          t.appendBits(this.binaryShiftByteCount - 31, 16);
        } else {
          if (0 === r) {
            t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5);
          } else {
            t.appendBits(this.binaryShiftByteCount - 31, 5);
          }
        }
      }
      t.appendBits(e[this.binaryShiftStart + r], 8);
    }
  };
  e.prototype.addBinaryShift = function (t, r) {
    return new e(this, t, r);
  };
  e.prototype.toString = function () {
    return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
  };
  return e;
}(s);
function h(t, e, r) {
  return new s(t, e, r);
}
var l = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"];
var d = new s(null, 0, 0);
var p = [Int32Array.from([0, 327708, 327710, 327709, 656318]), Int32Array.from([590318, 0, 327710, 327709, 656318]), Int32Array.from([262158, 590300, 0, 590301, 932798]), Int32Array.from([327709, 327708, 656318, 0, 327710]), Int32Array.from([327711, 656380, 656382, 656381, 0])];
var g = require("./181/index");
var y = function (t) {
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
var w = function (t) {
  var e;
  var r;
  try {
    for (var n = y(t), o = n.next(); !o.done; o = n.next()) {
      var i = o.value;
      g.a.fill(i, -1);
    }
  } catch (a) {
    e = {
      error: a
    };
  } finally {
    try {
      if (o && !o.done && (r = n.return)) {
        r.call(n);
      }
    } finally {
      if (e) {
        throw e.error;
      }
    }
  }
  t[0][4] = 0;
  t[1][4] = 0;
  t[1][0] = 28;
  t[3][4] = 0;
  t[2][4] = 0;
  t[2][0] = 15;
  return t;
}(g.a.createInt32Array(6, 6));
var v = require("./126");
var _ = function (t) {
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
var m = function () {
  function t(t, e, r, n) {
    this.token = t;
    this.mode = e;
    this.binaryShiftByteCount = r;
    this.bitCount = n;
  }
  t.prototype.getMode = function () {
    return this.mode;
  };
  t.prototype.getToken = function () {
    return this.token;
  };
  t.prototype.getBinaryShiftByteCount = function () {
    return this.binaryShiftByteCount;
  };
  t.prototype.getBitCount = function () {
    return this.bitCount;
  };
  t.prototype.latchAndAppend = function (e, r) {
    var n = this.bitCount;
    var o = this.token;
    if (e !== this.mode) {
      var i = p[this.mode][e];
      o = h(o, 65535 & i, i >> 16);
      n += i >> 16;
    }
    var a = 2 === e ? 4 : 5;
    return new t(o = h(o, r, a), e, 0, n + a);
  };
  t.prototype.shiftAndAppend = function (e, r) {
    var n = this.token;
    var o = 2 === this.mode ? 4 : 5;
    n = h(n, w[this.mode][e], o);
    return new t(n = h(n, r, 5), this.mode, 0, this.bitCount + o + 5);
  };
  t.prototype.addBinaryShiftChar = function (e) {
    var r = this.token;
    var n = this.mode;
    var o = this.bitCount;
    if (4 === this.mode || 2 === this.mode) {
      var i = p[n][0];
      r = h(r, 65535 & i, i >> 16);
      o += i >> 16;
      n = 0;
    }
    var a = 0 === this.binaryShiftByteCount || 31 === this.binaryShiftByteCount ? 18 : 62 === this.binaryShiftByteCount ? 9 : 8;
    var u = new t(r, n, this.binaryShiftByteCount + 1, o + a);
    if (2078 === u.binaryShiftByteCount) {
      u = u.endBinaryShift(e + 1);
    }
    return u;
  };
  t.prototype.endBinaryShift = function (e) {
    if (0 === this.binaryShiftByteCount) {
      return this;
    }
    var r = this.token;
    return new t(r = function (t, e, r) {
      return new f(t, e, r);
    }(r, e - this.binaryShiftByteCount, this.binaryShiftByteCount), this.mode, 0, this.bitCount);
  };
  t.prototype.isBetterThanOrEqualTo = function (e) {
    var r = this.bitCount + (p[this.mode][e.mode] >> 16);
    if (this.binaryShiftByteCount < e.binaryShiftByteCount) {
      r += t.calculateBinaryShiftCost(e) - t.calculateBinaryShiftCost(this);
    } else {
      if (this.binaryShiftByteCount > e.binaryShiftByteCount && e.binaryShiftByteCount > 0) {
        r += 10;
      }
    }
    return r <= e.bitCount;
  };
  t.prototype.toBitArray = function (t) {
    for (var e, r, n = [], i = this.endBinaryShift(t.length).token; null !== i; i = i.getPrevious()) {
      n.unshift(i);
    }
    var a = new o.a();
    try {
      for (var u = _(n), s = u.next(); !s.done; s = u.next()) {
        s.value.appendTo(a, t);
      }
    } catch (c) {
      e = {
        error: c
      };
    } finally {
      try {
        if (s && !s.done && (r = u.return)) {
          r.call(u);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return a;
  };
  t.prototype.toString = function () {
    return v.a.format("%s bits=%d bytes=%d", l[this.mode], this.bitCount, this.binaryShiftByteCount);
  };
  t.calculateBinaryShiftCost = function (t) {
    return t.binaryShiftByteCount > 62 ? 21 : t.binaryShiftByteCount > 31 ? 20 : t.binaryShiftByteCount > 0 ? 10 : 0;
  };
  t.INITIAL_STATE = new t(d, 0, 0, 0);
  return t;
}();
var A = function (t) {
  var e = v.a.getCharCode(" ");
  var r = v.a.getCharCode(".");
  var n = v.a.getCharCode(",");
  t[0][e] = 1;
  for (var o = v.a.getCharCode("Z"), i = v.a.getCharCode("A"), a = i; a <= o; a++) {
    t[0][a] = a - i + 2;
  }
  t[1][e] = 1;
  var u = v.a.getCharCode("z");
  var s = v.a.getCharCode("a");
  for (a = s; a <= u; a++) {
    t[1][a] = a - s + 2;
  }
  t[2][e] = 1;
  var c = v.a.getCharCode("9");
  var f = v.a.getCharCode("0");
  for (a = f; a <= c; a++) {
    t[2][a] = a - f + 2;
  }
  t[2][n] = 12;
  t[2][r] = 13;
  for (var h = ["\0", " ", "\x01", "\x02", "\x03", "\x04", "\x05", "\x06", "\x07", "\b", "\t", "\n", "\v", "\f", "\r", "\x1b", "\x1c", "\x1d", "\x1e", "\x1f", "@", "\\", "^", "_", "`", "|", "~", "\x7f"], l = 0; l < h.length; l++) {
    t[3][v.a.getCharCode(h[l])] = l;
  }
  var d = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
  for (l = 0; l < d.length; l++) {
    if (v.a.getCharCode(d[l]) > 0) {
      t[4][v.a.getCharCode(d[l])] = l;
    }
  }
  return t;
}(g.a.createInt32Array(5, 256));
var E = function (t) {
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
var C = function () {
  function t(t) {
    this.text = t;
  }
  t.prototype.encode = function () {
    for (var e = v.a.getCharCode(" "), r = v.a.getCharCode("\n"), o = n.singletonList(m.INITIAL_STATE), i = 0; i < this.text.length; i++) {
      var a = void 0;
      var u = i + 1 < this.text.length ? this.text[i + 1] : 0;
      switch (this.text[i]) {
        case v.a.getCharCode("\r"):
          a = u === r ? 2 : 0;
          break;
        case v.a.getCharCode("."):
          a = u === e ? 3 : 0;
          break;
        case v.a.getCharCode(","):
          a = u === e ? 4 : 0;
          break;
        case v.a.getCharCode(":"):
          a = u === e ? 5 : 0;
          break;
        default:
          a = 0;
      }
      if (a > 0) {
        o = t.updateStateListForPair(o, i, a);
        i++;
      } else {
        o = this.updateStateListForChar(o, i);
      }
    }
    return n.min(o, function (t, e) {
      return t.getBitCount() - e.getBitCount();
    }).toBitArray(this.text);
  };
  t.prototype.updateStateListForChar = function (e, r) {
    var n;
    var o;
    var i = [];
    try {
      for (var a = E(e), u = a.next(); !u.done; u = a.next()) {
        var s = u.value;
        this.updateStateForChar(s, r, i);
      }
    } catch (c) {
      n = {
        error: c
      };
    } finally {
      try {
        if (u && !u.done && (o = a.return)) {
          o.call(a);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return t.simplifyStates(i);
  };
  t.prototype.updateStateForChar = function (t, e, r) {
    for (var n = 255 & this.text[e], o = A[t.getMode()][n] > 0, i = null, a = 0; a <= 4; a++) {
      var u = A[a][n];
      if (u > 0) {
        if (null == i) {
          i = t.endBinaryShift(e);
        }
        if (!o || a === t.getMode() || 2 === a) {
          var s = i.latchAndAppend(a, u);
          r.push(s);
        }
        if (!o && w[t.getMode()][a] >= 0) {
          var c = i.shiftAndAppend(a, u);
          r.push(c);
        }
      }
    }
    if (t.getBinaryShiftByteCount() > 0 || 0 === A[t.getMode()][n]) {
      var f = t.addBinaryShiftChar(e);
      r.push(f);
    }
  };
  t.updateStateListForPair = function (t, e, r) {
    var n;
    var o;
    var i = [];
    try {
      for (var a = E(t), u = a.next(); !u.done; u = a.next()) {
        var s = u.value;
        this.updateStateForPair(s, e, r, i);
      }
    } catch (c) {
      n = {
        error: c
      };
    } finally {
      try {
        if (u && !u.done && (o = a.return)) {
          o.call(a);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return this.simplifyStates(i);
  };
  t.updateStateForPair = function (t, e, r, n) {
    var o = t.endBinaryShift(e);
    n.push(o.latchAndAppend(4, r));
    if (4 !== t.getMode()) {
      n.push(o.shiftAndAppend(4, r));
    }
    if (3 === r || 4 === r) {
      var i = o.latchAndAppend(2, 16 - r).latchAndAppend(2, 1);
      n.push(i);
    }
    if (t.getBinaryShiftByteCount() > 0) {
      var a = t.addBinaryShiftChar(e).addBinaryShiftChar(e + 1);
      n.push(a);
    }
  };
  t.simplifyStates = function (t) {
    var e;
    var r;
    var n;
    var o;
    var i = [];
    try {
      for (var a = E(t), u = a.next(); !u.done; u = a.next()) {
        var s = u.value;
        var c = !0;
        var f = function (t) {
          if (t.isBetterThanOrEqualTo(s)) {
            c = !1;
            return "break";
          }
          if (s.isBetterThanOrEqualTo(t)) {
            i = i.filter(function (e) {
              return e !== t;
            });
          }
        };
        try {
          for (n = void 0, h = E(i), l = h.next(), void 0; !l.done; l = h.next()) {
            var h;
            var l;
            if ("break" === f(l.value)) {
              break;
            }
          }
        } catch (d) {
          n = {
            error: d
          };
        } finally {
          try {
            if (l && !l.done && (o = h.return)) {
              o.call(h);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
        if (c) {
          i.push(s);
        }
      }
    } catch (p) {
      e = {
        error: p
      };
    } finally {
      try {
        if (u && !u.done && (r = a.return)) {
          r.call(a);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return i;
  };
  return t;
}();
exports.a = C;