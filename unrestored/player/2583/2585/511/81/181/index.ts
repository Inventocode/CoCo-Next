"use strict";

var r = require("../117");
var i = require("../63");
var o = require("./459");
var a = function () {
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
var s = function (t) {
  function e(e, n) {
    if (void 0 === e) {
      e = void 0;
    }
    if (void 0 === n) {
      n = void 0;
    }
    var r = t.call(this, n) || this;
    r.index = e;
    r.message = n;
    return r;
  }
  a(e, t);
  e.kind = "ArrayIndexOutOfBoundsException";
  return e;
}(o.a);
var u = function (t) {
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
var c = function () {
  function t() {}
  t.fill = function (t, e) {
    for (var n = 0, r = t.length; n < r; n++) {
      t[n] = e;
    }
  };
  t.fillWithin = function (e, n, r, i) {
    t.rangeCheck(e.length, n, r);
    for (var o = n; o < r; o++) {
      e[o] = i;
    }
  };
  t.rangeCheck = function (t, e, n) {
    if (e > n) {
      throw new i.a("fromIndex(" + e + ") > toIndex(" + n + ")");
    }
    if (e < 0) {
      throw new s(e);
    }
    if (n > t) {
      throw new s(n);
    }
  };
  t.asList = function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
    return t;
  };
  t.create = function (t, e, n) {
    return Array.from({
      length: t
    }).map(function (t) {
      return Array.from({
        length: e
      }).fill(n);
    });
  };
  t.createInt32Array = function (t, e, n) {
    return Array.from({
      length: t
    }).map(function (t) {
      return Int32Array.from({
        length: e
      }).fill(n);
    });
  };
  t.equals = function (t, e) {
    if (!t) {
      return !1;
    }
    if (!e) {
      return !1;
    }
    if (!t.length) {
      return !1;
    }
    if (!e.length) {
      return !1;
    }
    if (t.length !== e.length) {
      return !1;
    }
    for (var n = 0, r = t.length; n < r; n++) {
      if (t[n] !== e[n]) {
        return !1;
      }
    }
    return !0;
  };
  t.hashCode = function (t) {
    var e;
    var n;
    if (null === t) {
      return 0;
    }
    var r = 1;
    try {
      for (var i = u(t), o = i.next(); !o.done; o = i.next()) {
        r = 31 * r + o.value;
      }
    } catch (a) {
      e = {
        error: a
      };
    } finally {
      try {
        if (o && !o.done && (n = i.return)) {
          n.call(i);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return r;
  };
  t.fillUint8Array = function (t, e) {
    for (var n = 0; n !== t.length; n++) {
      t[n] = e;
    }
  };
  t.copyOf = function (t, e) {
    return t.slice(0, e);
  };
  t.copyOfUint8Array = function (t, e) {
    if (t.length <= e) {
      var n = new Uint8Array(e);
      n.set(t);
      return n;
    }
    return t.slice(0, e);
  };
  t.copyOfRange = function (t, e, n) {
    var i = n - e;
    var o = new Int32Array(i);
    r.a.arraycopy(t, e, o, 0, i);
    return o;
  };
  t.binarySearch = function (e, n, r) {
    if (void 0 === r) {
      r = t.numberComparator;
    }
    for (var i = 0, o = e.length - 1; i <= o;) {
      var a = o + i >> 1;
      var s = r(n, e[a]);
      if (s > 0) {
        i = a + 1;
      } else {
        if (!(s < 0)) {
          return a;
        }
        o = a - 1;
      }
    }
    return -i - 1;
  };
  t.numberComparator = function (t, e) {
    return t - e;
  };
  return t;
}();
exports.a = c;