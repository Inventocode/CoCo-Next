/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：351
 */

"use strict"

var n = require("../118")
var o = require("../37")
var i = require("../170")
var a = function () {
  var t = function (e, r) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e
    } || function (t, e) {
      for (var r in e) if (e.hasOwnProperty(r)) {
        t[r] = e[r]
      }
    })(e, r)
  }
  return function (e, r) {
    function n() {
      this.constructor = e
    }
    t(e, r)
    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n())
  }
}()
var u = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var r = e && t[e]
  var n = 0
  if (r) {
    return r.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined
        }
        return {
          value: t && t[n++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var s = function (t) {
  function e() {
    var e = t.call(this) || this
    e.decodeFinderCounters = new Int32Array(4)
    e.dataCharacterCounters = new Int32Array(8)
    e.oddRoundingErrors = new Array(4)
    e.evenRoundingErrors = new Array(4)
    e.oddCounts = new Array(e.dataCharacterCounters.length / 2)
    e.evenCounts = new Array(e.dataCharacterCounters.length / 2)
    return e
  }
  a(e, t)
  e.prototype.getDecodeFinderCounters = function () {
    return this.decodeFinderCounters
  }
  e.prototype.getDataCharacterCounters = function () {
    return this.dataCharacterCounters
  }
  e.prototype.getOddRoundingErrors = function () {
    return this.oddRoundingErrors
  }
  e.prototype.getEvenRoundingErrors = function () {
    return this.evenRoundingErrors
  }
  e.prototype.getOddCounts = function () {
    return this.oddCounts
  }
  e.prototype.getEvenCounts = function () {
    return this.evenCounts
  }
  e.prototype.parseFinderValue = function (t, r) {
    for (var n = 0; n < r.length; n++) {
      if (i.a.patternMatchVariance(t, r[n], e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) {
        return n
      }
    }
    throw new o.a()
  }
  e.count = function (t) {
    return n.a.sum(new Int32Array(t))
  }
  e.increment = function (t, e) {
    for (var r = 0, n = e[0], o = 1; o < t.length; o++) {
      if (e[o] > n) {
        n = e[o]
        r = o
      }
    }
    t[r]++
  }
  e.decrement = function (t, e) {
    for (var r = 0, n = e[0], o = 1; o < t.length; o++) {
      if (e[o] < n) {
        n = e[o]
        r = o
      }
    }
    t[r]--
  }
  e.isFinderPattern = function (t) {
    var r
    var /* [auto-meaningful-name] */c$return
    var o = t[0] + t[1]
    var i = o / (o + t[2] + t[3])
    if (i >= e.MIN_FINDER_PATTERN_RATIO && i <= e.MAX_FINDER_PATTERN_RATIO) {
      var /* [auto-meaningful-name] */Number$MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER
      var /* [auto-meaningful-name] */Number$MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER
      try {
        for (var c = u(t), f = c.next(); !f.done; f = c.next()) {
          var /* [auto-meaningful-name] */f$value = f.value
          if (f$value > Number$MIN_SAFE_INTEGER) {
            Number$MIN_SAFE_INTEGER = f$value
          }
          if (f$value < Number$MAX_SAFE_INTEGER) {
            Number$MAX_SAFE_INTEGER = f$value
          }
        }
      } catch (l) {
        r = {
          error: l
        }
      } finally {
        try {
          if (f && !f.done && (c$return = c.return)) {
            c$return.call(c)
          }
        } finally {
          if (r) {
            throw r.error
          }
        }
      }
      return Number$MIN_SAFE_INTEGER < 10 * Number$MAX_SAFE_INTEGER
    }
    return false
  }
  e.MAX_AVG_VARIANCE = .2
  e.MAX_INDIVIDUAL_VARIANCE = .45
  e.MIN_FINDER_PATTERN_RATIO = 9.5 / 12
  e.MAX_FINDER_PATTERN_RATIO = 12.5 / 14
  return e
}(i.a)
exports.a = s
