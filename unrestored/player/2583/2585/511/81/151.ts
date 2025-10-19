/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：151
 */

"use strict";

function r(t, e) {
  if (undefined === e) {
    e = t.constructor;
  }
  var n = Error.captureStackTrace;
  if (n) {
    n(t, e);
  }
}
var i = function () {
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
var o = function (t) {
  function e(e) {
    var n = this.constructor;
    var i = t.call(this, e) || this;
    Object.defineProperty(i, "name", {
      value: n.name,
      enumerable: false,
      configurable: true
    });
    (function (t, e) {
      var n = Object.setPrototypeOf;
      if (n) {
        n(t, e);
      } else {
        t.__proto__ = e;
      }
    })(i, n.prototype);
    r(i);
    return i;
  }
  i(e, t);
  return e;
}(Error);
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
  function e(e) {
    if (undefined === e) {
      e = undefined;
    }
    var n = t.call(this, e) || this;
    n.message = e;
    return n;
  }
  a(e, t);
  e.prototype.getKind = function () {
    return this.constructor.kind;
  };
  e.kind = "Exception";
  return e;
}(o);
exports.a = s;