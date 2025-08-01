"use strict";

function n(t, e) {
  if (void 0 === e) {
    e = t.constructor;
  }
  var r = Error.captureStackTrace;
  if (r) {
    r(t, e);
  }
}
var o = function () {
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
var i = function (t) {
  function e(e) {
    var r = this.constructor;
    var o = t.call(this, e) || this;
    Object.defineProperty(o, "name", {
      value: r.name,
      enumerable: !1,
      configurable: !0
    });
    (function (t, e) {
      var r = Object.setPrototypeOf;
      if (r) {
        r(t, e);
      } else {
        t.__proto__ = e;
      }
    })(o, r.prototype);
    n(o);
    return o;
  }
  o(e, t);
  return e;
}(Error);
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
    if (void 0 === e) {
      e = void 0;
    }
    var r = t.call(this, e) || this;
    r.message = e;
    return r;
  }
  a(e, t);
  e.prototype.getKind = function () {
    return this.constructor.kind;
  };
  e.kind = "Exception";
  return e;
}(i);
exports.a = u;