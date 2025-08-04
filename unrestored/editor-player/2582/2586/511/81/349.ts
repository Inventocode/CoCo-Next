"use strict";

var n = require("./74");
var o = require("./124");
var i = require("./37");
var a = require("./503");
var u = require("./504");
var s = require("./505");
var c = require("./150");
var f = require("./170");
var h = require("./402/index");
var l = require("./402/192");
var d = function () {
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
var g = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    return e;
  }
  d(e, t);
  e.prototype.decodeMiddle = function (t, e, r) {
    var n;
    var o;
    var i;
    var a;
    var u = this.decodeMiddleCounters;
    u[0] = 0;
    u[1] = 0;
    u[2] = 0;
    u[3] = 0;
    for (var s = t.getSize(), c = e[1], f = 0; f < 4 && c < s; f++) {
      var h = l.a.decodeDigit(t, u, c, l.a.L_PATTERNS);
      r += String.fromCharCode("0".charCodeAt(0) + h);
      try {
        for (n = void 0, d = p(u), g = d.next(), void 0; !g.done; g = d.next()) {
          var d;
          var g;
          c += g.value;
        }
      } catch (v) {
        n = {
          error: v
        };
      } finally {
        try {
          if (g && !g.done && (o = d.return)) {
            o.call(d);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
    }
    c = l.a.findGuardPattern(t, c, !0, l.a.MIDDLE_PATTERN, new Int32Array(l.a.MIDDLE_PATTERN.length).fill(0))[1];
    for (f = 0; f < 4 && c < s; f++) {
      h = l.a.decodeDigit(t, u, c, l.a.L_PATTERNS);
      r += String.fromCharCode("0".charCodeAt(0) + h);
      try {
        for (i = void 0, y = p(u), w = y.next(), void 0; !w.done; w = y.next()) {
          var y;
          var w;
          c += w.value;
        }
      } catch (_) {
        i = {
          error: _
        };
      } finally {
        try {
          if (w && !w.done && (a = y.return)) {
            a.call(y);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
    }
    return {
      rowOffset: c,
      resultString: r
    };
  };
  e.prototype.getBarcodeFormat = function () {
    return n.a.EAN_8;
  };
  return e;
}(l.a);
var y = function () {
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
var w = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ean13Reader = new h.a();
    return e;
  }
  y(e, t);
  e.prototype.getBarcodeFormat = function () {
    return n.a.UPC_A;
  };
  e.prototype.decode = function (t, e) {
    return this.maybeReturnResult(this.ean13Reader.decode(t));
  };
  e.prototype.decodeRow = function (t, e, r) {
    return this.maybeReturnResult(this.ean13Reader.decodeRow(t, e, r));
  };
  e.prototype.decodeMiddle = function (t, e, r) {
    return this.ean13Reader.decodeMiddle(t, e, r);
  };
  e.prototype.maybeReturnResult = function (t) {
    var e = t.getText();
    if ("0" === e.charAt(0)) {
      var r = new c.a(e.substring(1), null, null, t.getResultPoints(), n.a.UPC_A);
      if (null != t.getResultMetadata()) {
        r.putAllMetadata(t.getResultMetadata());
      }
      return r;
    }
    throw new i.a();
  };
  e.prototype.reset = function () {
    this.ean13Reader.reset();
  };
  return e;
}(l.a);
var v = require("./109");
var _ = function () {
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
var A = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.decodeMiddleCounters = new Int32Array(4);
    return e;
  }
  _(e, t);
  e.prototype.decodeMiddle = function (t, r, n) {
    var o;
    var i;
    var a = this.decodeMiddleCounters.map(function (t) {
      return t;
    });
    a[0] = 0;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    for (var u = t.getSize(), s = r[1], c = 0, f = 0; f < 6 && s < u; f++) {
      var h = e.decodeDigit(t, a, s, e.L_AND_G_PATTERNS);
      n += String.fromCharCode("0".charCodeAt(0) + h % 10);
      try {
        for (o = void 0, l = m(a), d = l.next(), void 0; !d.done; d = l.next()) {
          var l;
          var d;
          s += d.value;
        }
      } catch (p) {
        o = {
          error: p
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
      if (h >= 10) {
        c |= 1 << 5 - f;
      }
    }
    e.determineNumSysAndCheckDigit(new v.a(n), c);
    return s;
  };
  e.prototype.decodeEnd = function (t, r) {
    return e.findGuardPatternWithoutCounters(t, r, !0, e.MIDDLE_END_PATTERN);
  };
  e.prototype.checkChecksum = function (t) {
    return l.a.checkChecksum(e.convertUPCEtoUPCA(t));
  };
  e.determineNumSysAndCheckDigit = function (t, e) {
    for (var r = 0; r <= 1; r++) {
      for (var n = 0; n < 10; n++) {
        if (e === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r][n]) {
          t.insert(0, "0" + r);
          return void t.append("0" + n);
        }
      }
    }
    throw i.a.getNotFoundInstance();
  };
  e.prototype.getBarcodeFormat = function () {
    return n.a.UPC_E;
  };
  e.convertUPCEtoUPCA = function (t) {
    var e = t.slice(1, 7).split("").map(function (t) {
      return t.charCodeAt(0);
    });
    var r = new v.a();
    r.append(t.charAt(0));
    var n = e[5];
    switch (n) {
      case 0:
      case 1:
      case 2:
        r.appendChars(e, 0, 2);
        r.append(n);
        r.append("0000");
        r.appendChars(e, 2, 3);
        break;
      case 3:
        r.appendChars(e, 0, 3);
        r.append("00000");
        r.appendChars(e, 3, 2);
        break;
      case 4:
        r.appendChars(e, 0, 4);
        r.append("00000");
        r.append(e[4]);
        break;
      default:
        r.appendChars(e, 0, 5);
        r.append("0000");
        r.append(n);
    }
    if (t.length >= 8) {
      r.append(t.charAt(7));
    }
    return r.toString();
  };
  e.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
  e.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])];
  return e;
}(l.a);
var E = function () {
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
var I = function (t) {
  function e(e) {
    var r = t.call(this) || this;
    var i = null == e ? null : e.get(o.a.POSSIBLE_FORMATS);
    var a = [];
    if (null != i) {
      if (i.indexOf(n.a.EAN_13) > -1) {
        a.push(new h.a());
      } else {
        if (i.indexOf(n.a.UPC_A) > -1) {
          a.push(new w());
        }
      }
      if (i.indexOf(n.a.EAN_8) > -1) {
        a.push(new g());
      }
      if (i.indexOf(n.a.UPC_E) > -1) {
        a.push(new A());
      }
    }
    if (0 === a.length) {
      a.push(new h.a());
      a.push(new g());
      a.push(new A());
    }
    r.readers = a;
    return r;
  }
  E(e, t);
  e.prototype.decodeRow = function (t, e, r) {
    var a;
    var u;
    try {
      for (var s = C(this.readers), f = s.next(); !f.done; f = s.next()) {
        var h = f.value;
        try {
          var l = h.decodeRow(t, e, r);
          var d = l.getBarcodeFormat() === n.a.EAN_13 && "0" === l.getText().charAt(0);
          var p = null == r ? null : r.get(o.a.POSSIBLE_FORMATS);
          var g = null == p || p.includes(n.a.UPC_A);
          if (d && g) {
            var y = l.getRawBytes();
            var w = new c.a(l.getText().substring(1), y, y.length, l.getResultPoints(), n.a.UPC_A);
            w.putAllMetadata(l.getResultMetadata());
            return w;
          }
          return l;
        } catch (v) {}
      }
    } catch (_) {
      a = {
        error: _
      };
    } finally {
      try {
        if (f && !f.done && (u = s.return)) {
          u.call(s);
        }
      } finally {
        if (a) {
          throw a.error;
        }
      }
    }
    throw new i.a();
  };
  e.prototype.reset = function () {
    var t;
    var e;
    try {
      for (var r = C(this.readers), n = r.next(); !n.done; n = r.next()) {
        n.value.reset();
      }
    } catch (o) {
      t = {
        error: o
      };
    } finally {
      try {
        if (n && !n.done && (e = r.return)) {
          e.call(r);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
  };
  return e;
}(f.a);
var S = require("./602/index");
var T = require("./509");
var O = function () {
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
var b = function (t) {
  function e(e) {
    var r = t.call(this) || this;
    r.readers = [];
    var i = e ? e.get(o.a.POSSIBLE_FORMATS) : null;
    var c = e && void 0 !== e.get(o.a.ASSUME_CODE_39_CHECK_DIGIT);
    if (i) {
      if (i.includes(n.a.EAN_13) || i.includes(n.a.UPC_A) || i.includes(n.a.EAN_8) || i.includes(n.a.UPC_E)) {
        r.readers.push(new I(e));
      }
      if (i.includes(n.a.CODE_39)) {
        r.readers.push(new u.a(c));
      }
      if (i.includes(n.a.CODE_128)) {
        r.readers.push(new a.a());
      }
      if (i.includes(n.a.ITF)) {
        r.readers.push(new s.a());
      }
      if (i.includes(n.a.RSS_14)) {
        r.readers.push(new T.a());
      }
      if (i.includes(n.a.RSS_EXPANDED)) {
        console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk.");
        r.readers.push(new S.a());
      }
    }
    if (0 === r.readers.length) {
      r.readers.push(new I(e));
      r.readers.push(new u.a());
      r.readers.push(new I(e));
      r.readers.push(new a.a());
      r.readers.push(new s.a());
      r.readers.push(new T.a());
    }
    return r;
  }
  O(e, t);
  e.prototype.decodeRow = function (t, e, r) {
    for (var n = 0; n < this.readers.length; n++) {
      try {
        return this.readers[n].decodeRow(t, e, r);
      } catch (o) {}
    }
    throw new i.a();
  };
  e.prototype.reset = function () {
    this.readers.forEach(function (t) {
      return t.reset();
    });
  };
  return e;
}(f.a);
exports.a = b;