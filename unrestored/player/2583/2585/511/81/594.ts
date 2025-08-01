"use strict";

var r = require("./181/index");
var i = require("./109");
var o = function (t) {
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
var a = function () {
  function t(t, e) {
    this.width = t;
    this.height = e;
    for (var n = new Array(e), r = 0; r !== e; r++) {
      n[r] = new Uint8Array(t);
    }
    this.bytes = n;
  }
  t.prototype.getHeight = function () {
    return this.height;
  };
  t.prototype.getWidth = function () {
    return this.width;
  };
  t.prototype.get = function (t, e) {
    return this.bytes[e][t];
  };
  t.prototype.getArray = function () {
    return this.bytes;
  };
  t.prototype.setNumber = function (t, e, n) {
    this.bytes[e][t] = n;
  };
  t.prototype.setBoolean = function (t, e, n) {
    this.bytes[e][t] = n ? 1 : 0;
  };
  t.prototype.clear = function (t) {
    var e;
    var n;
    try {
      for (var i = o(this.bytes), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        r.a.fill(s, t);
      }
    } catch (u) {
      e = {
        error: u
      };
    } finally {
      try {
        if (a && !a.done && (n = i.return)) {
          n.call(i);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  };
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return !1;
    }
    var n = e;
    if (this.width !== n.width) {
      return !1;
    }
    if (this.height !== n.height) {
      return !1;
    }
    for (var r = 0, i = this.height; r < i; ++r) {
      for (var o = this.bytes[r], a = n.bytes[r], s = 0, u = this.width; s < u; ++s) {
        if (o[s] !== a[s]) {
          return !1;
        }
      }
    }
    return !0;
  };
  t.prototype.toString = function () {
    for (var t = new i.a(), e = 0, n = this.height; e < n; ++e) {
      for (var r = this.bytes[e], o = 0, a = this.width; o < a; ++o) {
        switch (r[o]) {
          case 0:
            t.append(" 0");
            break;
          case 1:
            t.append(" 1");
            break;
          default:
            t.append("  ");
        }
      }
      t.append("\n");
    }
    return t.toString();
  };
  return t;
}();
exports.a = a;