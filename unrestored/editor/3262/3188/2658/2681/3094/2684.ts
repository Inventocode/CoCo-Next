"use strict";

var r = require("../../../../3190/624/index");
var i = require("../../220");
var a = require("../../230");
var s = require("../../../../3190/494");
var o = require("../../../../../1524/2574/1/index");
var l = o.mark(y);
var u = o.mark(T);
var c = o.mark(b);
function p() {
  var e = require("../../3131/2638");
  p = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.assertSimpleType = P;
exports.makeStrongCache = v;
exports.makeStrongCacheSync = function (e) {
  return h(v(e));
};
exports.makeWeakCache = m;
exports.makeWeakCacheSync = function (e) {
  return h(m(e));
};
var f = require("./2791");
var d = require("./2704");
var h = function (e) {
  return p()(e).sync;
};
function y() {
  return o.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          return e.abrupt("return", !0);
        case 1:
        case "end":
          return e.stop();
      }
    }
  }, l);
}
function m(e) {
  return g(WeakMap, e);
}
function v(e) {
  return g(Map, e);
}
function g(e, t) {
  var n = new e();
  var r = new e();
  var i = new e();
  return o.mark(function e(a, s) {
    var l;
    var u;
    var c;
    var p;
    var h;
    var y;
    var m;
    var v;
    return o.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.delegateYield((0, f.isAsync)(), "t0", 1);
          case 1:
            l = e.t0;
            u = l ? r : n;
            return e.delegateYield(b(l, u, i, a, s), "t1", 4);
          case 4:
            if (!(c = e.t1).valid) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", c.value);
          case 7:
            if (p = new x(s), h = t(a, p), !(0, d.isIterableIterator)(h)) {
              e.next = 15;
              break;
            }
            v = h;
            return e.delegateYield((0, f.onFirstPause)(v, function () {
              y = S(p, i, a);
            }), "t2", 12);
          case 12:
            m = e.t2;
            e.next = 16;
            break;
          case 15:
            m = h;
          case 16:
            E(u, p, a, m);
            if (y) {
              i.delete(a);
              y.release(m);
            }
            return e.abrupt("return", m);
          case 19:
          case "end":
            return e.stop();
        }
      }
    }, e);
  });
}
function T(e, t, n) {
  var r;
  var i;
  var a;
  var l;
  var c;
  var p;
  return o.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          if (!(r = e.get(t))) {
            o.next = 20;
            break;
          }
          i = s(r);
          o.prev = 3;
          i.s();
        case 5:
          if ((a = i.n()).done) {
            o.next = 12;
            break;
          }
          l = a.value;
          c = l.value;
          p = l.valid;
          return o.delegateYield(p(n), "t0", 8);
        case 8:
          if (!o.t0) {
            o.next = 10;
            break;
          }
          return o.abrupt("return", {
            valid: !0,
            value: c
          });
        case 10:
          o.next = 5;
          break;
        case 12:
          o.next = 17;
          break;
        case 14:
          o.prev = 14;
          o.t1 = o.catch(3);
          i.e(o.t1);
        case 17:
          o.prev = 17;
          i.f();
          return o.finish(17);
        case 20:
          return o.abrupt("return", {
            valid: !1,
            value: null
          });
        case 21:
        case "end":
          return o.stop();
      }
    }
  }, u, null, [[3, 14, 17, 20]]);
}
function b(e, t, n, r, i) {
  var a;
  var s;
  var l;
  return o.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          return o.delegateYield(T(t, r, i), "t0", 1);
        case 1:
          if (!(a = o.t0).valid) {
            o.next = 4;
            break;
          }
          return o.abrupt("return", a);
        case 4:
          if (!e) {
            o.next = 11;
            break;
          }
          return o.delegateYield(T(n, r, i), "t1", 6);
        case 6:
          if (!(s = o.t1).valid) {
            o.next = 11;
            break;
          }
          return o.delegateYield((0, f.waitFor)(s.value.promise), "t2", 9);
        case 9:
          l = o.t2;
          return o.abrupt("return", {
            valid: !0,
            value: l
          });
        case 11:
          return o.abrupt("return", {
            valid: !1,
            value: null
          });
        case 12:
        case "end":
          return o.stop();
      }
    }
  }, c);
}
function S(e, t, n) {
  var r = new A();
  E(t, e, n, r);
  return r;
}
function E(e, t, n, r) {
  if (!t.configured()) {
    t.forever();
  }
  var i = e.get(n);
  switch (t.deactivate(), t.mode()) {
    case "forever":
      i = [{
        value: r,
        valid: y
      }];
      e.set(n, i);
      break;
    case "invalidate":
      i = [{
        value: r,
        valid: t.validator()
      }];
      e.set(n, i);
      break;
    case "valid":
      if (i) {
        i.push({
          value: r,
          valid: t.validator()
        });
      } else {
        i = [{
          value: r,
          valid: t.validator()
        }];
        e.set(n, i);
      }
  }
}
var x = function () {
  function e(t) {
    i(this, e);
    this._active = !0;
    this._never = !1;
    this._forever = !1;
    this._invalidate = !1;
    this._configured = !1;
    this._pairs = [];
    this._data = void 0;
    this._data = t;
  }
  a(e, [{
    key: "simple",
    value: function () {
      return function (e) {
        function t(t) {
          if ("boolean" !== typeof t) {
            return e.using(function () {
              return P(t());
            });
          }
          if (t) {
            e.forever();
          } else {
            e.never();
          }
        }
        t.forever = function () {
          return e.forever();
        };
        t.never = function () {
          return e.never();
        };
        t.using = function (t) {
          return e.using(function () {
            return P(t());
          });
        };
        t.invalidate = function (t) {
          return e.invalidate(function () {
            return P(t());
          });
        };
        return t;
      }(this);
    }
  }, {
    key: "mode",
    value: function () {
      return this._never ? "never" : this._forever ? "forever" : this._invalidate ? "invalidate" : "valid";
    }
  }, {
    key: "forever",
    value: function () {
      if (!this._active) {
        throw new Error("Cannot change caching after evaluation has completed.");
      }
      if (this._never) {
        throw new Error("Caching has already been configured with .never()");
      }
      this._forever = !0;
      this._configured = !0;
    }
  }, {
    key: "never",
    value: function () {
      if (!this._active) {
        throw new Error("Cannot change caching after evaluation has completed.");
      }
      if (this._forever) {
        throw new Error("Caching has already been configured with .forever()");
      }
      this._never = !0;
      this._configured = !0;
    }
  }, {
    key: "using",
    value: function (e) {
      var t = this;
      if (!this._active) {
        throw new Error("Cannot change caching after evaluation has completed.");
      }
      if (this._never || this._forever) {
        throw new Error("Caching has already been configured with .never or .forever()");
      }
      this._configured = !0;
      var n = e(this._data);
      var r = (0, f.maybeAsync)(e, "You appear to be using an async cache handler, but Babel has been called synchronously");
      return (0, f.isThenable)(n) ? n.then(function (e) {
        t._pairs.push([e, r]);
        return e;
      }) : (this._pairs.push([n, r]), n);
    }
  }, {
    key: "invalidate",
    value: function (e) {
      this._invalidate = !0;
      return this.using(e);
    }
  }, {
    key: "validator",
    value: function () {
      var e = this._pairs;
      return o.mark(function t(n) {
        var i;
        var a;
        var l;
        var u;
        var c;
        return o.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                i = s(e);
                t.prev = 1;
                i.s();
              case 3:
                if ((a = i.n()).done) {
                  t.next = 12;
                  break;
                }
                l = r(a.value, 2);
                u = l[0];
                c = l[1];
                t.t0 = u;
                return t.delegateYield(c(n), "t1", 7);
              case 7:
                if (t.t2 = t.t1, t.t0 === t.t2) {
                  t.next = 10;
                  break;
                }
                return t.abrupt("return", !1);
              case 10:
                t.next = 3;
                break;
              case 12:
                t.next = 17;
                break;
              case 14:
                t.prev = 14;
                t.t3 = t.catch(1);
                i.e(t.t3);
              case 17:
                t.prev = 17;
                i.f();
                return t.finish(17);
              case 20:
                return t.abrupt("return", !0);
              case 21:
              case "end":
                return t.stop();
            }
          }
        }, t, null, [[1, 14, 17, 20]]);
      });
    }
  }, {
    key: "deactivate",
    value: function () {
      this._active = !1;
    }
  }, {
    key: "configured",
    value: function () {
      return this._configured;
    }
  }]);
  return e;
}();
function P(e) {
  if ((0, f.isThenable)(e)) {
    throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");
  }
  if (null != e && "string" !== typeof e && "boolean" !== typeof e && "number" !== typeof e) {
    throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");
  }
  return e;
}
var A = function () {
  function e() {
    var t = this;
    i(this, e);
    this.released = !1;
    this.promise = void 0;
    this._resolve = void 0;
    this.promise = new Promise(function (e) {
      t._resolve = e;
    });
  }
  a(e, [{
    key: "release",
    value: function (e) {
      this.released = !0;
      this._resolve(e);
    }
  }]);
  return e;
}();