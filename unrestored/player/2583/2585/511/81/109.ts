"use strict";

var r = require("./126");
var i = function () {
  function t(t) {
    if (undefined === t) {
      t = "";
    }
    this.value = t;
  }
  t.prototype.enableDecoding = function (t) {
    this.encoding = t;
    return this;
  };
  t.prototype.append = function (t) {
    if ("string" === typeof t) {
      this.value += t.toString();
    } else {
      if (this.encoding) {
        this.value += r.a.castAsNonUtf8Char(t, this.encoding);
      } else {
        this.value += String.fromCharCode(t);
      }
    }
    return this;
  };
  t.prototype.appendChars = function (t, e, n) {
    for (var r = e; e < e + n; r++) {
      this.append(t[r]);
    }
    return this;
  };
  t.prototype.length = function () {
    return this.value.length;
  };
  t.prototype.charAt = function (t) {
    return this.value.charAt(t);
  };
  t.prototype.deleteCharAt = function (t) {
    this.value = this.value.substr(0, t) + this.value.substring(t + 1);
  };
  t.prototype.setCharAt = function (t, e) {
    this.value = this.value.substr(0, t) + e + this.value.substr(t + 1);
  };
  t.prototype.substring = function (t, e) {
    return this.value.substring(t, e);
  };
  t.prototype.setLengthToZero = function () {
    this.value = "";
  };
  t.prototype.toString = function () {
    return this.value;
  };
  t.prototype.insert = function (t, e) {
    this.value = this.value.substr(0, t) + e + this.value.substr(t + e.length);
  };
  return t;
}();
exports.a = i;