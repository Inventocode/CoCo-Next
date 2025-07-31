"use strict";

var r;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
(function (e) {
  e.IdentityCheck = "IdentityCheck";
  e.DeepValueCheck = "DeepValueCheck";
  e.NoCheck = "NoCheck";
})(r = exports.ChangeDetectionStrategyType || (exports.ChangeDetectionStrategyType = {}));
var o = function () {
  function e() {
    var e;
    this.strategyMap = ((e = {})[r.DeepValueCheck] = new a(), e[r.IdentityCheck] = new i(function (e, t) {
      return e === t;
    }), e[r.NoCheck] = new i(function (e, t) {
      return !1;
    }), e);
  }
  e.prototype.getStrategy = function (e) {
    return this.strategyMap[e];
  };
  return e;
}();
exports.ChangeDetectionService = o;
var i = function () {
  function e(e) {
    this.strategy = e;
  }
  e.prototype.areEqual = function (e, t) {
    return this.strategy(e, t);
  };
  return e;
}();
var a = function () {
  function e() {}
  e.prototype.areEqual = function (t, n) {
    return e.areEquivalent(e.copy(t), e.copy(n));
  };
  e.unwrapStringOrNumber = function (e) {
    return e instanceof Number || e instanceof String ? e.valueOf() : e;
  };
  e.copy = function (e) {
    if (!e) {
      return e;
    }
    if (Array.isArray(e)) {
      for (var t = [], n = 0; n < e.length; n++) {
        t.push(this.copy(e[n]));
      }
      return t;
    }
    return "object" !== typeof e ? e : [{}, e].reduce(function (e, t) {
      Object.keys(t).forEach(function (n) {
        e[n] = t[n];
      });
      return e;
    }, {});
  };
  e.isNaN = function (e) {
    return Number.isNaN ? Number.isNaN(e) : "number" === typeof e && isNaN(e);
  };
  e.areEquivalent = function (t, n) {
    if (t = e.unwrapStringOrNumber(t), n = e.unwrapStringOrNumber(n), t === n) {
      return !0;
    }
    if (null === t || null === n || typeof t !== typeof n) {
      return !1;
    }
    if (e.isNaN(t) && e.isNaN(n)) {
      return !0;
    }
    if (t instanceof Date) {
      return n instanceof Date && t.valueOf() === n.valueOf();
    }
    if ("function" === typeof t) {
      return !1;
    }
    if ("object" !== typeof t || t.$$typeof && "Symbol(react.element)" === t.$$typeof.toString()) {
      return t == n;
    }
    if (Object.isFrozen(t) || Object.isFrozen(n)) {
      return t === n;
    }
    var r = void 0 === t.areEquivPropertyTracking;
    var o = void 0 === n.areEquivPropertyTracking;
    try {
      var i = void 0;
      if (r) {
        t.areEquivPropertyTracking = [];
      } else if (t.areEquivPropertyTracking.some(function (e) {
        return e === n;
      })) {
        return !0;
      }
      if (o) {
        n.areEquivPropertyTracking = [];
      } else if (n.areEquivPropertyTracking.some(function (e) {
        return e === t;
      })) {
        return !0;
      }
      t.areEquivPropertyTracking.push(n);
      n.areEquivPropertyTracking.push(t);
      var a = {};
      for (i in t) if ("areEquivPropertyTracking" != i) {
        a[i] = null;
      }
      for (i in n) if ("areEquivPropertyTracking" != i) {
        a[i] = null;
      }
      for (i in a) if (!this.areEquivalent(t[i], n[i])) {
        return !1;
      }
      return !0;
    } finally {
      if (r) {
        delete t.areEquivPropertyTracking;
      }
      if (o) {
        delete n.areEquivPropertyTracking;
      }
    }
  };
  return e;
}();