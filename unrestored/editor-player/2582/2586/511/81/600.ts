"use strict";

export { b as a };
var n = require("./221");
var o = require("./453/465");
var i = require("./453/index");
var a = function () {
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
var u = function (t) {
  function e(e) {
    return t.call(this, e) || this;
  }
  a(e, t);
  e.prototype.encodeCompressedGtin = function (t, e) {
    t.append("(01)");
    var r = t.length();
    t.append("9");
    this.encodeCompressedGtinWithoutAI(t, e, r);
  };
  e.prototype.encodeCompressedGtinWithoutAI = function (t, r, n) {
    for (var o = 0; o < 4; ++o) {
      var i = this.getGeneralDecoder().extractNumericValueFromBitArray(r + 10 * o, 10);
      if (i / 100 === 0) {
        t.append("0");
      }
      if (i / 10 === 0) {
        t.append("0");
      }
      t.append(i);
    }
    e.appendCheckDigit(t, n);
  };
  e.appendCheckDigit = function (t, e) {
    for (var r = 0, n = 0; n < 13; n++) {
      var o = t.charAt(n + e).charCodeAt(0) - "0".charCodeAt(0);
      r += 0 === (1 & n) ? 3 * o : o;
    }
    if (10 === (r = 10 - r % 10)) {
      r = 0;
    }
    t.append(r);
  };
  e.GTIN_SIZE = 40;
  return e;
}(i.a);
var s = require("./109");
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
  function e(e) {
    return t.call(this, e) || this;
  }
  c(e, t);
  e.prototype.parseInformation = function () {
    var t = new s.a();
    t.append("(01)");
    var r = t.length();
    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE, 4);
    t.append(n);
    this.encodeCompressedGtinWithoutAI(t, e.HEADER_SIZE + 4, r);
    return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE + 44);
  };
  e.HEADER_SIZE = 4;
  return e;
}(u);
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
  function e(e) {
    return t.call(this, e) || this;
  }
  h(e, t);
  e.prototype.parseInformation = function () {
    var t = new s.a();
    return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE);
  };
  e.HEADER_SIZE = 5;
  return e;
}(i.a);
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
  function e(e) {
    return t.call(this, e) || this;
  }
  d(e, t);
  e.prototype.encodeCompressedWeight = function (t, e, r) {
    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e, r);
    this.addWeightCode(t, n);
    for (var o = this.checkWeight(n), i = 1e5, a = 0; a < 5; ++a) {
      if (o / i === 0) {
        t.append("0");
      }
      i /= 10;
    }
    t.append(o);
  };
  return e;
}(u);
var g = require("./37");
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
  function e(e) {
    return t.call(this, e) || this;
  }
  y(e, t);
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() != e.HEADER_SIZE + p.GTIN_SIZE + e.WEIGHT_SIZE) {
      throw new g.a();
    }
    var t = new s.a();
    this.encodeCompressedGtin(t, e.HEADER_SIZE);
    this.encodeCompressedWeight(t, e.HEADER_SIZE + p.GTIN_SIZE, e.WEIGHT_SIZE);
    return t.toString();
  };
  e.HEADER_SIZE = 5;
  e.WEIGHT_SIZE = 15;
  return e;
}(p);
var v = function () {
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
var _ = function (t) {
  function e(e) {
    return t.call(this, e) || this;
  }
  v(e, t);
  e.prototype.addWeightCode = function (t, e) {
    t.append("(3103)");
  };
  e.prototype.checkWeight = function (t) {
    return t;
  };
  return e;
}(w);
var m = function () {
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
var A = function (t) {
  function e(e) {
    return t.call(this, e) || this;
  }
  m(e, t);
  e.prototype.addWeightCode = function (t, e) {
    if (e < 1e4) {
      t.append("(3202)");
    } else {
      t.append("(3203)");
    }
  };
  e.prototype.checkWeight = function (t) {
    return t < 1e4 ? t : t - 1e4;
  };
  return e;
}(w);
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
  function e(e) {
    return t.call(this, e) || this;
  }
  E(e, t);
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() < e.HEADER_SIZE + u.GTIN_SIZE) {
      throw new g.a();
    }
    var t = new s.a();
    this.encodeCompressedGtin(t, e.HEADER_SIZE);
    var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + u.GTIN_SIZE, e.LAST_DIGIT_SIZE);
    t.append("(392");
    t.append(r);
    t.append(")");
    var n = this.getGeneralDecoder().decodeGeneralPurposeField(e.HEADER_SIZE + u.GTIN_SIZE + e.LAST_DIGIT_SIZE, null);
    t.append(n.getNewString());
    return t.toString();
  };
  e.HEADER_SIZE = 8;
  e.LAST_DIGIT_SIZE = 2;
  return e;
}(u);
var I = function () {
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
var S = function (t) {
  function e(e) {
    return t.call(this, e) || this;
  }
  I(e, t);
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() < e.HEADER_SIZE + u.GTIN_SIZE) {
      throw new g.a();
    }
    var t = new s.a();
    this.encodeCompressedGtin(t, e.HEADER_SIZE);
    var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + u.GTIN_SIZE, e.LAST_DIGIT_SIZE);
    t.append("(393");
    t.append(r);
    t.append(")");
    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + u.GTIN_SIZE + e.LAST_DIGIT_SIZE, e.FIRST_THREE_DIGITS_SIZE);
    if (n / 100 == 0) {
      t.append("0");
    }
    if (n / 10 == 0) {
      t.append("0");
    }
    t.append(n);
    var o = this.getGeneralDecoder().decodeGeneralPurposeField(e.HEADER_SIZE + u.GTIN_SIZE + e.LAST_DIGIT_SIZE + e.FIRST_THREE_DIGITS_SIZE, null);
    t.append(o.getNewString());
    return t.toString();
  };
  e.HEADER_SIZE = 8;
  e.LAST_DIGIT_SIZE = 2;
  e.FIRST_THREE_DIGITS_SIZE = 10;
  return e;
}(u);
var T = function () {
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
var O = function (t) {
  function e(e, r, n) {
    var o = t.call(this, e) || this;
    o.dateCode = n;
    o.firstAIdigits = r;
    return o;
  }
  T(e, t);
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() != e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE + e.DATE_SIZE) {
      throw new g.a();
    }
    var t = new s.a();
    this.encodeCompressedGtin(t, e.HEADER_SIZE);
    this.encodeCompressedWeight(t, e.HEADER_SIZE + e.GTIN_SIZE, e.WEIGHT_SIZE);
    this.encodeCompressedDate(t, e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE);
    return t.toString();
  };
  e.prototype.encodeCompressedDate = function (t, r) {
    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(r, e.DATE_SIZE);
    if (38400 != n) {
      t.append("(");
      t.append(this.dateCode);
      t.append(")");
      var o = n % 32;
      var i = (n /= 32) % 12 + 1;
      var a = n /= 12;
      if (a / 10 == 0) {
        t.append("0");
      }
      t.append(a);
      if (i / 10 == 0) {
        t.append("0");
      }
      t.append(i);
      if (o / 10 == 0) {
        t.append("0");
      }
      t.append(o);
    }
  };
  e.prototype.addWeightCode = function (t, e) {
    t.append("(");
    t.append(this.firstAIdigits);
    t.append(e / 1e5);
    t.append(")");
  };
  e.prototype.checkWeight = function (t) {
    return t % 1e5;
  };
  e.HEADER_SIZE = 8;
  e.WEIGHT_SIZE = 20;
  e.DATE_SIZE = 16;
  return e;
}(p);
function b(t) {
  try {
    if (t.get(1)) {
      return new f(t);
    }
    if (!t.get(2)) {
      return new l(t);
    }
    switch (o.a.extractNumericValueFromBitArray(t, 1, 4)) {
      case 4:
        return new _(t);
      case 5:
        return new A(t);
    }
    switch (o.a.extractNumericValueFromBitArray(t, 1, 5)) {
      case 12:
        return new C(t);
      case 13:
        return new S(t);
    }
    switch (o.a.extractNumericValueFromBitArray(t, 1, 7)) {
      case 56:
        return new O(t, "310", "11");
      case 57:
        return new O(t, "320", "11");
      case 58:
        return new O(t, "310", "13");
      case 59:
        return new O(t, "320", "13");
      case 60:
        return new O(t, "310", "15");
      case 61:
        return new O(t, "320", "15");
      case 62:
        return new O(t, "310", "17");
      case 63:
        return new O(t, "320", "17");
    }
  } catch (e) {
    throw console.log(e), new n.a("unknown decoder: " + t);
  }
}
export default b;