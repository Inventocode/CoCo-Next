"use strict";

var n = require("../56");
var o = require("../221");
var i = require("../109");
var a = function () {
  function t(t, e) {
    if (e) {
      this.decodedInformation = null;
    } else {
      this.finished = t;
      this.decodedInformation = e;
    }
  }
  t.prototype.getDecodedInformation = function () {
    return this.decodedInformation;
  };
  t.prototype.isFinished = function () {
    return this.finished;
  };
  return t;
}();
var u = function () {
  function t(t) {
    this.newPosition = t;
  }
  t.prototype.getNewPosition = function () {
    return this.newPosition;
  };
  return t;
}();
var s = function () {
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
var c = function (t) {
  function e(e, r) {
    var n = t.call(this, e) || this;
    n.value = r;
    return n;
  }
  s(e, t);
  e.prototype.getValue = function () {
    return this.value;
  };
  e.prototype.isFNC1 = function () {
    return this.value === e.FNC1;
  };
  e.FNC1 = "$";
  return e;
}(u);
var f = function () {
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
var h = function (t) {
  function e(e, r, n) {
    var o = t.call(this, e) || this;
    if (n) {
      o.remaining = !0;
      o.remainingValue = o.remainingValue;
    } else {
      o.remaining = !1;
      o.remainingValue = 0;
    }
    o.newString = r;
    return o;
  }
  f(e, t);
  e.prototype.getNewString = function () {
    return this.newString;
  };
  e.prototype.isRemaining = function () {
    return this.remaining;
  };
  e.prototype.getRemainingValue = function () {
    return this.remainingValue;
  };
  return e;
}(u);
var l = function () {
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
var d = function (t) {
  function e(e, r, o) {
    var i = t.call(this, e) || this;
    if (r < 0 || r > 10 || o < 0 || o > 10) {
      throw new n.a();
    }
    i.firstDigit = r;
    i.secondDigit = o;
    return i;
  }
  l(e, t);
  e.prototype.getFirstDigit = function () {
    return this.firstDigit;
  };
  e.prototype.getSecondDigit = function () {
    return this.secondDigit;
  };
  e.prototype.getValue = function () {
    return 10 * this.firstDigit + this.secondDigit;
  };
  e.prototype.isFirstDigitFNC1 = function () {
    return this.firstDigit === e.FNC1;
  };
  e.prototype.isSecondDigitFNC1 = function () {
    return this.secondDigit === e.FNC1;
  };
  e.prototype.isAnyFNC1 = function () {
    return this.firstDigit === e.FNC1 || this.secondDigit === e.FNC1;
  };
  e.FNC1 = 10;
  return e;
}(u);
var p = require("../37");
var g = function (t) {
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
var y = function () {
  function t() {}
  t.parseFieldsInGeneralPurpose = function (e) {
    var r;
    var n;
    var o;
    var i;
    var a;
    var u;
    var s;
    var c;
    if (!e) {
      return null;
    }
    if (e.length < 2) {
      throw new p.a();
    }
    var f = e.substring(0, 2);
    try {
      for (var h = g(t.TWO_DIGIT_DATA_LENGTH), l = h.next(); !l.done; l = h.next()) {
        if ((C = l.value)[0] === f) {
          return C[1] === t.VARIABLE_LENGTH ? t.processVariableAI(2, C[2], e) : t.processFixedAI(2, C[1], e);
        }
      }
    } catch (I) {
      r = {
        error: I
      };
    } finally {
      try {
        if (l && !l.done && (n = h.return)) {
          n.call(h);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    if (e.length < 3) {
      throw new p.a();
    }
    var d = e.substring(0, 3);
    try {
      for (var y = g(t.THREE_DIGIT_DATA_LENGTH), w = y.next(); !w.done; w = y.next()) {
        if ((C = w.value)[0] === d) {
          return C[1] === t.VARIABLE_LENGTH ? t.processVariableAI(3, C[2], e) : t.processFixedAI(3, C[1], e);
        }
      }
    } catch (S) {
      o = {
        error: S
      };
    } finally {
      try {
        if (w && !w.done && (i = y.return)) {
          i.call(y);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    try {
      for (var v = g(t.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), _ = v.next(); !_.done; _ = v.next()) {
        if ((C = _.value)[0] === d) {
          return C[1] === t.VARIABLE_LENGTH ? t.processVariableAI(4, C[2], e) : t.processFixedAI(4, C[1], e);
        }
      }
    } catch (T) {
      a = {
        error: T
      };
    } finally {
      try {
        if (_ && !_.done && (u = v.return)) {
          u.call(v);
        }
      } finally {
        if (a) {
          throw a.error;
        }
      }
    }
    if (e.length < 4) {
      throw new p.a();
    }
    var m = e.substring(0, 4);
    try {
      for (var A = g(t.FOUR_DIGIT_DATA_LENGTH), E = A.next(); !E.done; E = A.next()) {
        var C;
        if ((C = E.value)[0] === m) {
          return C[1] === t.VARIABLE_LENGTH ? t.processVariableAI(4, C[2], e) : t.processFixedAI(4, C[1], e);
        }
      }
    } catch (O) {
      s = {
        error: O
      };
    } finally {
      try {
        if (E && !E.done && (c = A.return)) {
          c.call(A);
        }
      } finally {
        if (s) {
          throw s.error;
        }
      }
    }
    throw new p.a();
  };
  t.processFixedAI = function (e, r, n) {
    if (n.length < e) {
      throw new p.a();
    }
    var o = n.substring(0, e);
    if (n.length < e + r) {
      throw new p.a();
    }
    var i = n.substring(e, e + r);
    var a = n.substring(e + r);
    var u = "(" + o + ")" + i;
    var s = t.parseFieldsInGeneralPurpose(a);
    return null == s ? u : u + s;
  };
  t.processVariableAI = function (e, r, n) {
    var o;
    var i = n.substring(0, e);
    o = n.length < e + r ? n.length : e + r;
    var a = n.substring(e, o);
    var u = n.substring(o);
    var s = "(" + i + ")" + a;
    var c = t.parseFieldsInGeneralPurpose(u);
    return null == c ? s : s + c;
  };
  t.VARIABLE_LENGTH = [];
  t.TWO_DIGIT_DATA_LENGTH = [["00", 18], ["01", 14], ["02", 14], ["10", t.VARIABLE_LENGTH, 20], ["11", 6], ["12", 6], ["13", 6], ["15", 6], ["17", 6], ["20", 2], ["21", t.VARIABLE_LENGTH, 20], ["22", t.VARIABLE_LENGTH, 29], ["30", t.VARIABLE_LENGTH, 8], ["37", t.VARIABLE_LENGTH, 8], ["90", t.VARIABLE_LENGTH, 30], ["91", t.VARIABLE_LENGTH, 30], ["92", t.VARIABLE_LENGTH, 30], ["93", t.VARIABLE_LENGTH, 30], ["94", t.VARIABLE_LENGTH, 30], ["95", t.VARIABLE_LENGTH, 30], ["96", t.VARIABLE_LENGTH, 30], ["97", t.VARIABLE_LENGTH, 3], ["98", t.VARIABLE_LENGTH, 30], ["99", t.VARIABLE_LENGTH, 30]];
  t.THREE_DIGIT_DATA_LENGTH = [["240", t.VARIABLE_LENGTH, 30], ["241", t.VARIABLE_LENGTH, 30], ["242", t.VARIABLE_LENGTH, 6], ["250", t.VARIABLE_LENGTH, 30], ["251", t.VARIABLE_LENGTH, 30], ["253", t.VARIABLE_LENGTH, 17], ["254", t.VARIABLE_LENGTH, 20], ["400", t.VARIABLE_LENGTH, 30], ["401", t.VARIABLE_LENGTH, 30], ["402", 17], ["403", t.VARIABLE_LENGTH, 30], ["410", 13], ["411", 13], ["412", 13], ["413", 13], ["414", 13], ["420", t.VARIABLE_LENGTH, 20], ["421", t.VARIABLE_LENGTH, 15], ["422", 3], ["423", t.VARIABLE_LENGTH, 15], ["424", 3], ["425", 3], ["426", 3]];
  t.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [["310", 6], ["311", 6], ["312", 6], ["313", 6], ["314", 6], ["315", 6], ["316", 6], ["320", 6], ["321", 6], ["322", 6], ["323", 6], ["324", 6], ["325", 6], ["326", 6], ["327", 6], ["328", 6], ["329", 6], ["330", 6], ["331", 6], ["332", 6], ["333", 6], ["334", 6], ["335", 6], ["336", 6], ["340", 6], ["341", 6], ["342", 6], ["343", 6], ["344", 6], ["345", 6], ["346", 6], ["347", 6], ["348", 6], ["349", 6], ["350", 6], ["351", 6], ["352", 6], ["353", 6], ["354", 6], ["355", 6], ["356", 6], ["357", 6], ["360", 6], ["361", 6], ["362", 6], ["363", 6], ["364", 6], ["365", 6], ["366", 6], ["367", 6], ["368", 6], ["369", 6], ["390", t.VARIABLE_LENGTH, 15], ["391", t.VARIABLE_LENGTH, 18], ["392", t.VARIABLE_LENGTH, 15], ["393", t.VARIABLE_LENGTH, 18], ["703", t.VARIABLE_LENGTH, 30]];
  t.FOUR_DIGIT_DATA_LENGTH = [["7001", 13], ["7002", t.VARIABLE_LENGTH, 30], ["7003", 10], ["8001", 14], ["8002", t.VARIABLE_LENGTH, 20], ["8003", t.VARIABLE_LENGTH, 30], ["8004", t.VARIABLE_LENGTH, 30], ["8005", 6], ["8006", 18], ["8007", t.VARIABLE_LENGTH, 30], ["8008", t.VARIABLE_LENGTH, 12], ["8018", 18], ["8020", t.VARIABLE_LENGTH, 25], ["8100", 6], ["8101", 10], ["8102", 2], ["8110", t.VARIABLE_LENGTH, 70], ["8200", t.VARIABLE_LENGTH, 70]];
  return t;
}();
var w = function () {
  function t(t) {
    this.buffer = new i.a();
    this.information = t;
  }
  t.prototype.decodeAllCodes = function (t, e) {
    for (var r = e, n = null;;) {
      var o = this.decodeGeneralPurposeField(r, n);
      var i = y.parseFieldsInGeneralPurpose(o.getNewString());
      if (null != i) {
        t.append(i);
      }
      n = o.isRemaining() ? "" + o.getRemainingValue() : null;
      if (r === o.getNewPosition()) {
        break;
      }
      r = o.getNewPosition();
    }
    return t.toString();
  };
  t.prototype.isStillNumeric = function (t) {
    if (t + 7 > this.information.getSize()) {
      return t + 4 <= this.information.getSize();
    }
    for (var e = t; e < t + 3; ++e) {
      if (this.information.get(e)) {
        return !0;
      }
    }
    return this.information.get(t + 3);
  };
  t.prototype.decodeNumeric = function (t) {
    if (t + 7 > this.information.getSize()) {
      var e = this.extractNumericValueFromBitArray(t, 4);
      return new d(this.information.getSize(), 0 === e ? d.FNC1 : e - 1, d.FNC1);
    }
    var r = this.extractNumericValueFromBitArray(t, 7);
    return new d(t + 7, (r - 8) / 11, (r - 8) % 11);
  };
  t.prototype.extractNumericValueFromBitArray = function (e, r) {
    return t.extractNumericValueFromBitArray(this.information, e, r);
  };
  t.extractNumericValueFromBitArray = function (t, e, r) {
    for (var n = 0, o = 0; o < r; ++o) {
      if (t.get(e + o)) {
        n |= 1 << r - o - 1;
      }
    }
    return n;
  };
  t.prototype.decodeGeneralPurposeField = function (t, e) {
    this.buffer.setLengthToZero();
    if (null != e) {
      this.buffer.append(e);
    }
    this.current.setPosition(t);
    var r = this.parseBlocks();
    return null != r && r.isRemaining() ? new h(this.current.getPosition(), this.buffer.toString(), r.getRemainingValue()) : new h(this.current.getPosition(), this.buffer.toString());
  };
  t.prototype.parseBlocks = function () {
    var t;
    var e;
    do {
      var r = this.current.getPosition();
      t = this.current.isAlpha() ? (e = this.parseAlphaBlock()).isFinished() : this.current.isIsoIec646() ? (e = this.parseIsoIec646Block()).isFinished() : (e = this.parseNumericBlock()).isFinished();
      if (!(r !== this.current.getPosition()) && !t) {
        break;
      }
    } while (!t);
    return e.getDecodedInformation();
  };
  t.prototype.parseNumericBlock = function () {
    for (; this.isStillNumeric(this.current.getPosition());) {
      var t = this.decodeNumeric(this.current.getPosition());
      this.current.setPosition(t.getNewPosition());
      if (t.isFirstDigitFNC1()) {
        var e = void 0;
        e = t.isSecondDigitFNC1() ? new h(this.current.getPosition(), this.buffer.toString()) : new h(this.current.getPosition(), this.buffer.toString(), t.getSecondDigit());
        return new a(!0, e);
      }
      this.buffer.append(t.getFirstDigit());
      if (t.isSecondDigitFNC1()) {
        e = new h(this.current.getPosition(), this.buffer.toString());
        return new a(!0, e);
      }
      this.buffer.append(t.getSecondDigit());
    }
    if (this.isNumericToAlphaNumericLatch(this.current.getPosition())) {
      this.current.setAlpha();
      this.current.incrementPosition(4);
    }
    return new a(!1);
  };
  t.prototype.parseIsoIec646Block = function () {
    for (; this.isStillIsoIec646(this.current.getPosition());) {
      var t = this.decodeIsoIec646(this.current.getPosition());
      this.current.setPosition(t.getNewPosition());
      if (t.isFNC1()) {
        var e = new h(this.current.getPosition(), this.buffer.toString());
        return new a(!0, e);
      }
      this.buffer.append(t.getValue());
    }
    if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
      this.current.incrementPosition(3);
      this.current.setNumeric();
    } else {
      if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
        if (this.current.getPosition() + 5 < this.information.getSize()) {
          this.current.incrementPosition(5);
        } else {
          this.current.setPosition(this.information.getSize());
        }
        this.current.setAlpha();
      }
    }
    return new a(!1);
  };
  t.prototype.parseAlphaBlock = function () {
    for (; this.isStillAlpha(this.current.getPosition());) {
      var t = this.decodeAlphanumeric(this.current.getPosition());
      this.current.setPosition(t.getNewPosition());
      if (t.isFNC1()) {
        var e = new h(this.current.getPosition(), this.buffer.toString());
        return new a(!0, e);
      }
      this.buffer.append(t.getValue());
    }
    if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
      this.current.incrementPosition(3);
      this.current.setNumeric();
    } else {
      if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
        if (this.current.getPosition() + 5 < this.information.getSize()) {
          this.current.incrementPosition(5);
        } else {
          this.current.setPosition(this.information.getSize());
        }
        this.current.setIsoIec646();
      }
    }
    return new a(!1);
  };
  t.prototype.isStillIsoIec646 = function (t) {
    if (t + 5 > this.information.getSize()) {
      return !1;
    }
    var e = this.extractNumericValueFromBitArray(t, 5);
    if (e >= 5 && e < 16) {
      return !0;
    }
    if (t + 7 > this.information.getSize()) {
      return !1;
    }
    var r = this.extractNumericValueFromBitArray(t, 7);
    if (r >= 64 && r < 116) {
      return !0;
    }
    if (t + 8 > this.information.getSize()) {
      return !1;
    }
    var n = this.extractNumericValueFromBitArray(t, 8);
    return n >= 232 && n < 253;
  };
  t.prototype.decodeIsoIec646 = function (t) {
    var e = this.extractNumericValueFromBitArray(t, 5);
    if (15 === e) {
      return new c(t + 5, c.FNC1);
    }
    if (e >= 5 && e < 15) {
      return new c(t + 5, "0" + (e - 5));
    }
    var r;
    var o = this.extractNumericValueFromBitArray(t, 7);
    if (o >= 64 && o < 90) {
      return new c(t + 7, "" + (o + 1));
    }
    if (o >= 90 && o < 116) {
      return new c(t + 7, "" + (o + 7));
    }
    switch (this.extractNumericValueFromBitArray(t, 8)) {
      case 232:
        r = "!";
        break;
      case 233:
        r = '"';
        break;
      case 234:
        r = "%";
        break;
      case 235:
        r = "&";
        break;
      case 236:
        r = "'";
        break;
      case 237:
        r = "(";
        break;
      case 238:
        r = ")";
        break;
      case 239:
        r = "*";
        break;
      case 240:
        r = "+";
        break;
      case 241:
        r = ",";
        break;
      case 242:
        r = "-";
        break;
      case 243:
        r = ".";
        break;
      case 244:
        r = "/";
        break;
      case 245:
        r = ":";
        break;
      case 246:
        r = ";";
        break;
      case 247:
        r = "<";
        break;
      case 248:
        r = "=";
        break;
      case 249:
        r = ">";
        break;
      case 250:
        r = "?";
        break;
      case 251:
        r = "_";
        break;
      case 252:
        r = " ";
        break;
      default:
        throw new n.a();
    }
    return new c(t + 8, r);
  };
  t.prototype.isStillAlpha = function (t) {
    if (t + 5 > this.information.getSize()) {
      return !1;
    }
    var e = this.extractNumericValueFromBitArray(t, 5);
    if (e >= 5 && e < 16) {
      return !0;
    }
    if (t + 6 > this.information.getSize()) {
      return !1;
    }
    var r = this.extractNumericValueFromBitArray(t, 6);
    return r >= 16 && r < 63;
  };
  t.prototype.decodeAlphanumeric = function (t) {
    var e = this.extractNumericValueFromBitArray(t, 5);
    if (15 === e) {
      return new c(t + 5, c.FNC1);
    }
    if (e >= 5 && e < 15) {
      return new c(t + 5, "0" + (e - 5));
    }
    var r;
    var n = this.extractNumericValueFromBitArray(t, 6);
    if (n >= 32 && n < 58) {
      return new c(t + 6, "" + (n + 33));
    }
    switch (n) {
      case 58:
        r = "*";
        break;
      case 59:
        r = ",";
        break;
      case 60:
        r = "-";
        break;
      case 61:
        r = ".";
        break;
      case 62:
        r = "/";
        break;
      default:
        throw new o.a("Decoding invalid alphanumeric value: " + n);
    }
    return new c(t + 6, r);
  };
  t.prototype.isAlphaTo646ToAlphaLatch = function (t) {
    if (t + 1 > this.information.getSize()) {
      return !1;
    }
    for (var e = 0; e < 5 && e + t < this.information.getSize(); ++e) {
      if (2 === e) {
        if (!this.information.get(t + 2)) {
          return !1;
        }
      } else if (this.information.get(t + e)) {
        return !1;
      }
    }
    return !0;
  };
  t.prototype.isAlphaOr646ToNumericLatch = function (t) {
    if (t + 3 > this.information.getSize()) {
      return !1;
    }
    for (var e = t; e < t + 3; ++e) {
      if (this.information.get(e)) {
        return !1;
      }
    }
    return !0;
  };
  t.prototype.isNumericToAlphaNumericLatch = function (t) {
    if (t + 1 > this.information.getSize()) {
      return !1;
    }
    for (var e = 0; e < 4 && e + t < this.information.getSize(); ++e) {
      if (this.information.get(t + e)) {
        return !1;
      }
    }
    return !0;
  };
  return t;
}();
exports.a = w;