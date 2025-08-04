"use strict";

var r = require("./74");
var i = require("./124");
var o = require("./37");
var a = require("./503");
var s = require("./504");
var u = require("./505");
var c = require("./150");
var l = require("./170");
var d = require("./402/index");
var f = require("./402/192");
var h = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
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
var m = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    return e;
  }
  h(e, t);
  e.prototype.decodeMiddle = function (t, e, n) {
    var r;
    var i;
    var o;
    var a;
    var s = this.decodeMiddleCounters;
    s[0] = 0;
    s[1] = 0;
    s[2] = 0;
    s[3] = 0;
    for (var u = t.getSize(), c = e[1], l = 0; l < 4 && c < u; l++) {
      var d = f.a.decodeDigit(t, s, c, f.a.L_PATTERNS);
      n += String.fromCharCode("0".charCodeAt(0) + d);
      try {
        for (r = void 0, h = p(s), m = h.next(), void 0; !m.done; m = h.next()) {
          var h;
          var m;
          c += m.value;
        }
      } catch (v) {
        r = {
          error: v
        };
      } finally {
        try {
          if (m && !m.done && (i = h.return)) {
            i.call(h);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
    }
    c = f.a.findGuardPattern(t, c, !0, f.a.MIDDLE_PATTERN, new Int32Array(f.a.MIDDLE_PATTERN.length).fill(0))[1];
    for (l = 0; l < 4 && c < u; l++) {
      d = f.a.decodeDigit(t, s, c, f.a.L_PATTERNS);
      n += String.fromCharCode("0".charCodeAt(0) + d);
      try {
        for (o = void 0, b = p(s), g = b.next(), void 0; !g.done; g = b.next()) {
          var b;
          var g;
          c += g.value;
        }
      } catch (_) {
        o = {
          error: _
        };
      } finally {
        try {
          if (g && !g.done && (a = b.return)) {
            a.call(b);
          }
        } finally {
          if (o) {
            throw o.error;
          }
        }
      }
    }
    return {
      rowOffset: c,
      resultString: n
    };
  };
  e.prototype.getBarcodeFormat = function () {
    return r.a.EAN_8;
  };
  return e;
}(f.a);
var b = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ean13Reader = new d.a();
    return e;
  }
  b(e, t);
  e.prototype.getBarcodeFormat = function () {
    return r.a.UPC_A;
  };
  e.prototype.decode = function (t, e) {
    return this.maybeReturnResult(this.ean13Reader.decode(t));
  };
  e.prototype.decodeRow = function (t, e, n) {
    return this.maybeReturnResult(this.ean13Reader.decodeRow(t, e, n));
  };
  e.prototype.decodeMiddle = function (t, e, n) {
    return this.ean13Reader.decodeMiddle(t, e, n);
  };
  e.prototype.maybeReturnResult = function (t) {
    var e = t.getText();
    if ("0" === e.charAt(0)) {
      var n = new c.a(e.substring(1), null, null, t.getResultPoints(), r.a.UPC_A);
      if (null != t.getResultMetadata()) {
        n.putAllMetadata(t.getResultMetadata());
      }
      return n;
    }
    throw new o.a();
  };
  e.prototype.reset = function () {
    this.ean13Reader.reset();
  };
  return e;
}(f.a);
var v = require("./109");
var _ = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
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
var w = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.decodeMiddleCounters = new Int32Array(4);
    return e;
  }
  _(e, t);
  e.prototype.decodeMiddle = function (t, n, r) {
    var i;
    var o;
    var a = this.decodeMiddleCounters.map(function (t) {
      return t;
    });
    a[0] = 0;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    for (var s = t.getSize(), u = n[1], c = 0, l = 0; l < 6 && u < s; l++) {
      var d = e.decodeDigit(t, a, u, e.L_AND_G_PATTERNS);
      r += String.fromCharCode("0".charCodeAt(0) + d % 10);
      try {
        for (i = void 0, f = y(a), h = f.next(), void 0; !h.done; h = f.next()) {
          var f;
          var h;
          u += h.value;
        }
      } catch (p) {
        i = {
          error: p
        };
      } finally {
        try {
          if (h && !h.done && (o = f.return)) {
            o.call(f);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      if (d >= 10) {
        c |= 1 << 5 - l;
      }
    }
    e.determineNumSysAndCheckDigit(new v.a(r), c);
    return u;
  };
  e.prototype.decodeEnd = function (t, n) {
    return e.findGuardPatternWithoutCounters(t, n, !0, e.MIDDLE_END_PATTERN);
  };
  e.prototype.checkChecksum = function (t) {
    return f.a.checkChecksum(e.convertUPCEtoUPCA(t));
  };
  e.determineNumSysAndCheckDigit = function (t, e) {
    for (var n = 0; n <= 1; n++) {
      for (var r = 0; r < 10; r++) {
        if (e === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[n][r]) {
          t.insert(0, "0" + n);
          return void t.append("0" + r);
        }
      }
    }
    throw o.a.getNotFoundInstance();
  };
  e.prototype.getBarcodeFormat = function () {
    return r.a.UPC_E;
  };
  e.convertUPCEtoUPCA = function (t) {
    var e = t.slice(1, 7).split("").map(function (t) {
      return t.charCodeAt(0);
    });
    var n = new v.a();
    n.append(t.charAt(0));
    var r = e[5];
    switch (r) {
      case 0:
      case 1:
      case 2:
        n.appendChars(e, 0, 2);
        n.append(r);
        n.append("0000");
        n.appendChars(e, 2, 3);
        break;
      case 3:
        n.appendChars(e, 0, 3);
        n.append("00000");
        n.appendChars(e, 3, 2);
        break;
      case 4:
        n.appendChars(e, 0, 4);
        n.append("00000");
        n.append(e[4]);
        break;
      default:
        n.appendChars(e, 0, 5);
        n.append("0000");
        n.append(r);
    }
    if (t.length >= 8) {
      n.append(t.charAt(7));
    }
    return n.toString();
  };
  e.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
  e.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])];
  return e;
}(f.a);
var E = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
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
var T = function (t) {
  function e(e) {
    var n = t.call(this) || this;
    var o = null == e ? null : e.get(i.a.POSSIBLE_FORMATS);
    var a = [];
    if (null != o) {
      if (o.indexOf(r.a.EAN_13) > -1) {
        a.push(new d.a());
      } else {
        if (o.indexOf(r.a.UPC_A) > -1) {
          a.push(new g());
        }
      }
      if (o.indexOf(r.a.EAN_8) > -1) {
        a.push(new m());
      }
      if (o.indexOf(r.a.UPC_E) > -1) {
        a.push(new w());
      }
    }
    if (0 === a.length) {
      a.push(new d.a());
      a.push(new m());
      a.push(new w());
    }
    n.readers = a;
    return n;
  }
  E(e, t);
  e.prototype.decodeRow = function (t, e, n) {
    var a;
    var s;
    try {
      for (var u = O(this.readers), l = u.next(); !l.done; l = u.next()) {
        var d = l.value;
        try {
          var f = d.decodeRow(t, e, n);
          var h = f.getBarcodeFormat() === r.a.EAN_13 && "0" === f.getText().charAt(0);
          var p = null == n ? null : n.get(i.a.POSSIBLE_FORMATS);
          var m = null == p || p.includes(r.a.UPC_A);
          if (h && m) {
            var b = f.getRawBytes();
            var g = new c.a(f.getText().substring(1), b, b.length, f.getResultPoints(), r.a.UPC_A);
            g.putAllMetadata(f.getResultMetadata());
            return g;
          }
          return f;
        } catch (v) {}
      }
    } catch (_) {
      a = {
        error: _
      };
    } finally {
      try {
        if (l && !l.done && (s = u.return)) {
          s.call(u);
        }
      } finally {
        if (a) {
          throw a.error;
        }
      }
    }
    throw new o.a();
  };
  e.prototype.reset = function () {
    var t;
    var e;
    try {
      for (var n = O(this.readers), r = n.next(); !r.done; r = n.next()) {
        r.value.reset();
      }
    } catch (i) {
      t = {
        error: i
      };
    } finally {
      try {
        if (r && !r.done && (e = n.return)) {
          e.call(n);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
  };
  return e;
}(l.a);
var A = require("./602/index");
var S = require("./509");
var I = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var C = function (t) {
  function e(e) {
    var n = t.call(this) || this;
    n.readers = [];
    var o = e ? e.get(i.a.POSSIBLE_FORMATS) : null;
    var c = e && void 0 !== e.get(i.a.ASSUME_CODE_39_CHECK_DIGIT);
    if (o) {
      if (o.includes(r.a.EAN_13) || o.includes(r.a.UPC_A) || o.includes(r.a.EAN_8) || o.includes(r.a.UPC_E)) {
        n.readers.push(new T(e));
      }
      if (o.includes(r.a.CODE_39)) {
        n.readers.push(new s.a(c));
      }
      if (o.includes(r.a.CODE_128)) {
        n.readers.push(new a.a());
      }
      if (o.includes(r.a.ITF)) {
        n.readers.push(new u.a());
      }
      if (o.includes(r.a.RSS_14)) {
        n.readers.push(new S.a());
      }
      if (o.includes(r.a.RSS_EXPANDED)) {
        console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk.");
        n.readers.push(new A.a());
      }
    }
    if (0 === n.readers.length) {
      n.readers.push(new T(e));
      n.readers.push(new s.a());
      n.readers.push(new T(e));
      n.readers.push(new a.a());
      n.readers.push(new u.a());
      n.readers.push(new S.a());
    }
    return n;
  }
  I(e, t);
  e.prototype.decodeRow = function (t, e, n) {
    for (var r = 0; r < this.readers.length; r++) {
      try {
        return this.readers[r].decodeRow(t, e, n);
      } catch (i) {}
    }
    throw new o.a();
  };
  e.prototype.reset = function () {
    this.readers.forEach(function (t) {
      return t.reset();
    });
  };
  return e;
}(l.a);
exports.a = C;