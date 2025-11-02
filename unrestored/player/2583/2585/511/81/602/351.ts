/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：351
 */

"use strict"

var r = require("../118")
var i = require("../37")
var o = require("../170")
var a = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n]
      }
    })(e, n)
  }
  return function (e, n) {
    function r() {
      this.constructor = e
    }
    t(e, n)
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
var s = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var n = e && t[e]
  var r = 0
  if (n) {
    return n.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = undefined
        }
        return {
          value: t && t[r++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var u = function (t) {
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
  e.prototype.parseFinderValue = function (t, n) {
    for (var r = 0; r < n.length; r++) {
      if (o.a.patternMatchVariance(t, n[r], e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) {
        return r
      }
    }
    throw new i.a()
  }
  e.count = function (t) {
    return r.a.sum(new Int32Array(t))
  }
  e.increment = function (t, e) {
    for (var n = 0, r = e[0], i = 1; i < t.length; i++) {
      if (e[i] > r) {
        r = e[i]
        n = i
      }
    }
    t[n]++
  }
  e.decrement = function (t, e) {
    for (var n = 0, r = e[0], i = 1; i < t.length; i++) {
      if (e[i] < r) {
        r = e[i]
        n = i
      }
    }
    t[n]--
  }
  e.isFinderPattern = function (t) {
    var n
    var /* [auto-meaningful-name] */c$return
    var i = t[0] + t[1]
    var o = i / (i + t[2] + t[3])
    if (o >= e.MIN_FINDER_PATTERN_RATIO && o <= e.MAX_FINDER_PATTERN_RATIO) {
      var number$MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER
      var number$MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER
      try {
        for (var c = s(t), l = c.next(); !l.done; l = c.next()) {
          var l$value = l.value
          if (l$value > number$MIN_SAFE_INTEGER) {
            number$MIN_SAFE_INTEGER = l$value
          }
          if (l$value < number$MAX_SAFE_INTEGER) {
            number$MAX_SAFE_INTEGER = l$value
          }
        }
      } catch (f) {
        n = {
          error: f
        }
      } finally {
        try {
          if (l && !l.done && (c$return = c.return)) {
            c$return.call(c)
          }
        } finally {
          if (n) {
            throw n.error
          }
        }
      }
      return number$MIN_SAFE_INTEGER < 10 * number$MAX_SAFE_INTEGER
    }
    return false
  }
  e.MAX_AVG_VARIANCE = .2
  e.MAX_INDIVIDUAL_VARIANCE = .45
  e.MIN_FINDER_PATTERN_RATIO = 9.5 / 12
  e.MAX_FINDER_PATTERN_RATIO = 12.5 / 14
  return e
}(o.a)
exports.a = u
