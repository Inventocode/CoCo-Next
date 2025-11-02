/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：402
 */

"use strict"

var r = require("../74")
var i = require("./192")
var o = require("../37")
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
    e.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])
    return e
  }
  a(e, t)
  e.prototype.decodeMiddle = function (t, n, r) {
    var o
    var /* [auto-meaningful-name] */b$return
    var u
    var /* [auto-meaningful-name] */v$return
    var this$decodeMiddleCounters = this.decodeMiddleCounters
    this$decodeMiddleCounters[0] = 0
    this$decodeMiddleCounters[1] = 0
    this$decodeMiddleCounters[2] = 0
    this$decodeMiddleCounters[3] = 0
    for (var d = t.getSize(), f = n[1], h = 0, p = 0; p < 6 && f < d; p++) {
      var m = i.a.decodeDigit(t, this$decodeMiddleCounters, f, i.a.L_AND_G_PATTERNS)
      r += String.fromCharCode("0".charCodeAt(0) + m % 10)
      try {
        for (o = undefined, b = s(this$decodeMiddleCounters), g = b.next(), undefined; !g.done; g = b.next()) {
          var b
          var g
          f += g.value
        }
      } catch (y) {
        o = {
          error: y
        }
      } finally {
        try {
          if (g && !g.done && (b$return = b.return)) {
            b$return.call(b)
          }
        } finally {
          if (o) {
            throw o.error
          }
        }
      }
      if (m >= 10) {
        h |= 1 << 5 - p
      }
    }
    r = e.determineFirstDigit(r, h)
    f = i.a.findGuardPattern(t, f, true, i.a.MIDDLE_PATTERN, new Int32Array(i.a.MIDDLE_PATTERN.length).fill(0))[1]
    for (p = 0; p < 6 && f < d; p++) {
      m = i.a.decodeDigit(t, this$decodeMiddleCounters, f, i.a.L_PATTERNS)
      r += String.fromCharCode("0".charCodeAt(0) + m)
      try {
        for (u = undefined, v = s(this$decodeMiddleCounters), _ = v.next(), undefined; !_.done; _ = v.next()) {
          var v
          var _
          f += _.value
        }
      } catch (w) {
        u = {
          error: w
        }
      } finally {
        try {
          if (_ && !_.done && (v$return = v.return)) {
            v$return.call(v)
          }
        } finally {
          if (u) {
            throw u.error
          }
        }
      }
    }
    return {
      rowOffset: f,
      resultString: r
    }
  }
  e.prototype.getBarcodeFormat = function () {
    return r.a.EAN_13
  }
  e.determineFirstDigit = function (t, e) {
    for (var n = 0; n < 10; n++) {
      if (e === this.FIRST_DIGIT_ENCODINGS[n]) {
        return t = String.fromCharCode("0".charCodeAt(0) + n) + t
      }
    }
    throw new o.a()
  }
  e.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26]
  return e
}(i.a)
exports.a = u
