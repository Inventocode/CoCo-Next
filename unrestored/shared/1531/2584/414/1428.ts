/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1428
 */

"use strict"

var r
Object.defineProperty(exports, "__esModule", {
  value: true
});
(function (e) {
  e.IdentityCheck = "IdentityCheck"
  e.DeepValueCheck = "DeepValueCheck"
  e.NoCheck = "NoCheck"
})(r = exports.ChangeDetectionStrategyType || (exports.ChangeDetectionStrategyType = {}))
var o = function () {
  function e() {
    var e
    this.strategyMap = ((e = {})[r.DeepValueCheck] = new a(), e[r.IdentityCheck] = new i(function (e, t) {
      return e === t
    }), e[r.NoCheck] = new i(function (e, t) {
      return false
    }), e)
  }
  e.prototype.getStrategy = function (e) {
    return this.strategyMap[e]
  }
  return e
}()
exports.ChangeDetectionService = o
var i = function () {
  function e(e) {
    this.strategy = e
  }
  e.prototype.areEqual = function (e, t) {
    return this.strategy(e, t)
  }
  return e
}()
var a = function () {
  function e() {}
  e.prototype.areEqual = function (t, n) {
    return e.areEquivalent(e.copy(t), e.copy(n))
  }
  e.unwrapStringOrNumber = function (e) {
    return e instanceof Number || e instanceof String ? e.valueOf() : e
  }
  e.copy = function (e) {
    if (!e) {
      return e
    }
    if (Array.isArray(e)) {
      for (var t = [], n = 0; n < e.length; n++) {
        t.push(this.copy(e[n]))
      }
      return t
    }
    return "object" !== typeof e ? e : [{}, e].reduce(function (e, t) {
      Object.keys(t).forEach(function (n) {
        e[n] = t[n]
      })
      return e
    }, {})
  }
  e.isNaN = function (e) {
    return Number.isNaN ? Number.isNaN(e) : "number" === typeof e && isNaN(e)
  }
  e.areEquivalent = function (t, n) {
    t = e.unwrapStringOrNumber(t)
    n = e.unwrapStringOrNumber(n)
    if (t === n) {
      return true
    }
    if (null === t || null === n || typeof t !== typeof n) {
      return false
    }
    if (e.isNaN(t) && e.isNaN(n)) {
      return true
    }
    if (t instanceof Date) {
      return n instanceof Date && t.valueOf() === n.valueOf()
    }
    if ("function" === typeof t) {
      return false
    }
    if ("object" !== typeof t || t.$$typeof && "Symbol(react.element)" === t.$$typeof.toString()) {
      return t == n
    }
    if (Object.isFrozen(t) || Object.isFrozen(n)) {
      return t === n
    }
    var r = undefined === t.areEquivPropertyTracking
    var o = undefined === n.areEquivPropertyTracking
    try {
      var i = undefined
      if (r) {
        t.areEquivPropertyTracking = []
      } else if (t.areEquivPropertyTracking.some(function (e) {
        return e === n
      })) {
        return true
      }
      if (o) {
        n.areEquivPropertyTracking = []
      } else if (n.areEquivPropertyTracking.some(function (e) {
        return e === t
      })) {
        return true
      }
      t.areEquivPropertyTracking.push(n)
      n.areEquivPropertyTracking.push(t)
      var a = {}
      for (i in t) if ("areEquivPropertyTracking" != i) {
        a[i] = null
      }
      for (i in n) if ("areEquivPropertyTracking" != i) {
        a[i] = null
      }
      for (i in a) if (!this.areEquivalent(t[i], n[i])) {
        return false
      }
      return true
    } finally {
      if (r) {
        delete t.areEquivPropertyTracking
      }
      if (o) {
        delete n.areEquivPropertyTracking
      }
    }
  }
  return e
}()
