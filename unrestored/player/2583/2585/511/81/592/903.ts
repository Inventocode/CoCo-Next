/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：903
 */

"use strict";

var r = require("../181/index");
var i = require("../181/459");
var o = require("../151");
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
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }
  a(e, t);
  e.kind = "NullPointerException";
  return e;
}(o.a);
var u = function () {
  function t() {}
  t.prototype.writeBytes = function (t) {
    this.writeBytesOffset(t, 0, t.length);
  };
  t.prototype.writeBytesOffset = function (t, e, n) {
    if (null == t) {
      throw new s();
    }
    if (e < 0 || e > t.length || n < 0 || e + n > t.length || e + n < 0) {
      throw new i.a();
    }
    if (0 !== n) {
      for (var r = 0; r < n; r++) {
        this.write(t[e + r]);
      }
    }
  };
  t.prototype.flush = function () {};
  t.prototype.close = function () {};
  return t;
}();
var c = require("../105");
var l = require("../63");
var d = function () {
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
var f = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }
  d(e, t);
  return e;
}(o.a);
var h = require("../117");
var p = function () {
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
var m = function (t) {
  function e(e) {
    if (undefined === e) {
      e = 32;
    }
    var n = t.call(this) || this;
    n.count = 0;
    if (e < 0) {
      throw new l.a("Negative initial size: " + e);
    }
    n.buf = new Uint8Array(e);
    return n;
  }
  p(e, t);
  e.prototype.ensureCapacity = function (t) {
    if (t - this.buf.length > 0) {
      this.grow(t);
    }
  };
  e.prototype.grow = function (t) {
    var e = this.buf.length << 1;
    if (e - t < 0) {
      e = t;
    }
    if (e < 0) {
      if (t < 0) {
        throw new f();
      }
      e = c.a.MAX_VALUE;
    }
    this.buf = r.a.copyOfUint8Array(this.buf, e);
  };
  e.prototype.write = function (t) {
    this.ensureCapacity(this.count + 1);
    this.buf[this.count] = t;
    this.count += 1;
  };
  e.prototype.writeBytesOffset = function (t, e, n) {
    if (e < 0 || e > t.length || n < 0 || e + n - t.length > 0) {
      throw new i.a();
    }
    this.ensureCapacity(this.count + n);
    h.a.arraycopy(t, e, this.buf, this.count, n);
    this.count += n;
  };
  e.prototype.writeTo = function (t) {
    t.writeBytesOffset(this.buf, 0, this.count);
  };
  e.prototype.reset = function () {
    this.count = 0;
  };
  e.prototype.toByteArray = function () {
    return r.a.copyOfUint8Array(this.buf, this.count);
  };
  e.prototype.size = function () {
    return this.count;
  };
  e.prototype.toString = function (t) {
    return t ? "string" === typeof t ? this.toString_string(t) : this.toString_number(t) : this.toString_void();
  };
  e.prototype.toString_void = function () {
    return new String(this.buf).toString();
  };
  e.prototype.toString_string = function (t) {
    return new String(this.buf).toString();
  };
  e.prototype.toString_number = function (t) {
    return new String(this.buf).toString();
  };
  e.prototype.close = function () {};
  return e;
}(u);
exports.a = m;