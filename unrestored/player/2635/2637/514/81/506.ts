/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：506
 */

"use strict"

var r = require("./74")
var i = require("./165")
var o = require("./122")
var a = require("./56")
var s = require("./36")
var u = require("./151")
var c = require("./73/index")
var l = require("./171")
var d = function () {
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
var f = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this
  }
  d(e, t)
  e.findStartPattern = function (t) {
    for (var n = t.getSize(), r = t.getNextSet(0), i = 0, o = Int32Array.from([0, 0, 0, 0, 0, 0]), a = r, u = false, c = r; c < n; c++) {
      if (t.get(c) !== u) {
        o[i]++
      } else {
        if (5 === i) {
          for (var /* [auto-meaningful-name] */e$MAX_AVG_VARIANCE = e.MAX_AVG_VARIANCE, f = -1, /* [auto-meaningful-name] */e$CODE_START_A = e.CODE_START_A; e$CODE_START_A <= e.CODE_START_C; e$CODE_START_A++) {
            var p = l.a.patternMatchVariance(o, e.CODE_PATTERNS[e$CODE_START_A], e.MAX_INDIVIDUAL_VARIANCE)
            if (p < e$MAX_AVG_VARIANCE) {
              e$MAX_AVG_VARIANCE = p
              f = e$CODE_START_A
            }
          }
          if (f >= 0 && t.isRange(Math.max(0, a - (c - a) / 2), a, false)) {
            return Int32Array.from([a, c, f])
          }
          a += o[0] + o[1];
          (o = o.slice(2, o.length - 1))[i - 1] = 0
          o[i] = 0
          i--
        } else {
          i++
        }
        o[i] = 1
        u = !u
      }
    }
    throw new s.a()
  }
  e.decodeCode = function (t, n, r) {
    l.a.recordPattern(t, r, n)
    for (var /* [auto-meaningful-name] */e$MAX_AVG_VARIANCE = e.MAX_AVG_VARIANCE, o = -1, a = 0; a < e.CODE_PATTERNS.length; a++) {
      var u = e.CODE_PATTERNS[a]
      var c = this.patternMatchVariance(n, u, e.MAX_INDIVIDUAL_VARIANCE)
      if (c < e$MAX_AVG_VARIANCE) {
        e$MAX_AVG_VARIANCE = c
        o = a
      }
    }
    if (o >= 0) {
      return o
    }
    throw new s.a()
  }
  e.prototype.decodeRow = function (t, n, l) {
    var d
    var f = l && true === l.get(o.a.ASSUME_GS1)
    var h = e.findStartPattern(n)
    var p = h[2]
    var m = 0
    var b = new Uint8Array(20)
    switch (b[m++] = p, p) {
      case e.CODE_START_A:
        d = e.CODE_CODE_A
        break
      case e.CODE_START_B:
        d = e.CODE_CODE_B
        break
      case e.CODE_START_C:
        d = e.CODE_CODE_C
        break
      default:
        throw new a.a()
    }
    for (var g = false, v = false, _ = "", y = h[0], w = h[1], E = Int32Array.from([0, 0, 0, 0, 0, 0]), O = 0, T = 0, A = p, S = 0, I = true, C = false, j = false; !g;) {
      var M = v
      switch (v = false, O = T, T = e.decodeCode(n, E, w), b[m++] = T, T !== e.CODE_STOP && (I = true), T !== e.CODE_STOP && (A += ++S * T), y = w, w += E.reduce(function (t, e) {
        return t + e
      }, 0), T) {
        case e.CODE_START_A:
        case e.CODE_START_B:
        case e.CODE_START_C:
          throw new a.a()
      }
      switch (d) {
        case e.CODE_CODE_A:
          if (T < 64) {
            _ += j === C ? String.fromCharCode(" ".charCodeAt(0) + T) : String.fromCharCode(" ".charCodeAt(0) + T + 128)
            j = false
          } else if (T < 96) {
            _ += j === C ? String.fromCharCode(T - 64) : String.fromCharCode(T + 64)
            j = false
          } else {
            switch (T !== e.CODE_STOP && (I = false), T) {
              case e.CODE_FNC_1:
                if (f) {
                  if (0 === _.length) {
                    _ += "]C1"
                  } else {
                    _ += String.fromCharCode(29)
                  }
                }
                break
              case e.CODE_FNC_2:
              case e.CODE_FNC_3:
                break
              case e.CODE_FNC_4_A:
                if (!C && j) {
                  C = true
                  j = false
                } else {
                  if (C && j) {
                    C = false
                    j = false
                  } else {
                    j = true
                  }
                }
                break
              case e.CODE_SHIFT:
                v = true
                d = e.CODE_CODE_B
                break
              case e.CODE_CODE_B:
                d = e.CODE_CODE_B
                break
              case e.CODE_CODE_C:
                d = e.CODE_CODE_C
                break
              case e.CODE_STOP:
                g = true
            }
          }
          break
        case e.CODE_CODE_B:
          if (T < 96) {
            _ += j === C ? String.fromCharCode(" ".charCodeAt(0) + T) : String.fromCharCode(" ".charCodeAt(0) + T + 128)
            j = false
          } else {
            switch (T !== e.CODE_STOP && (I = false), T) {
              case e.CODE_FNC_1:
                if (f) {
                  if (0 === _.length) {
                    _ += "]C1"
                  } else {
                    _ += String.fromCharCode(29)
                  }
                }
                break
              case e.CODE_FNC_2:
              case e.CODE_FNC_3:
                break
              case e.CODE_FNC_4_B:
                if (!C && j) {
                  C = true
                  j = false
                } else {
                  if (C && j) {
                    C = false
                    j = false
                  } else {
                    j = true
                  }
                }
                break
              case e.CODE_SHIFT:
                v = true
                d = e.CODE_CODE_A
                break
              case e.CODE_CODE_A:
                d = e.CODE_CODE_A
                break
              case e.CODE_CODE_C:
                d = e.CODE_CODE_C
                break
              case e.CODE_STOP:
                g = true
            }
          }
          break
        case e.CODE_CODE_C:
          if (T < 100) {
            if (T < 10) {
              _ += "0"
            }
            _ += T
          } else {
            switch (T !== e.CODE_STOP && (I = false), T) {
              case e.CODE_FNC_1:
                if (f) {
                  if (0 === _.length) {
                    _ += "]C1"
                  } else {
                    _ += String.fromCharCode(29)
                  }
                }
                break
              case e.CODE_CODE_A:
                d = e.CODE_CODE_A
                break
              case e.CODE_CODE_B:
                d = e.CODE_CODE_B
                break
              case e.CODE_STOP:
                g = true
            }
          }
      }
      if (M) {
        d = d === e.CODE_CODE_A ? e.CODE_CODE_B : e.CODE_CODE_A
      }
    }
    var k = w - y
    w = n.getNextUnset(w)
    if (!n.isRange(w, Math.min(n.getSize(), w + (w - y) / 2), false)) {
      throw new s.a()
    }
    if ((A -= S * O) % 103 !== O) {
      throw new i.a()
    }
    var /* [auto-meaningful-name] */_$length = _.length
    if (0 === _$length) {
      throw new s.a()
    }
    if (_$length > 0 && I) {
      _ = d === e.CODE_CODE_C ? _.substring(0, _$length - 2) : _.substring(0, _$length - 1)
    }
    for (var N = (h[1] + h[0]) / 2, x = y + k / 2, /* [auto-meaningful-name] */b$length = b.length, L = new Uint8Array(b$length), B = 0; B < b$length; B++) {
      L[B] = b[B]
    }
    var P = [new c.a(N, t), new c.a(x, t)]
    return new u.a(_, L, 0, P, r.a.CODE_128, new Date().getTime())
  }
  e.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])]
  e.MAX_AVG_VARIANCE = .25
  e.MAX_INDIVIDUAL_VARIANCE = .7
  e.CODE_SHIFT = 98
  e.CODE_CODE_C = 99
  e.CODE_CODE_B = 100
  e.CODE_CODE_A = 101
  e.CODE_FNC_1 = 102
  e.CODE_FNC_2 = 97
  e.CODE_FNC_3 = 96
  e.CODE_FNC_4_A = 101
  e.CODE_FNC_4_B = 100
  e.CODE_START_A = 103
  e.CODE_START_B = 104
  e.CODE_START_C = 105
  e.CODE_STOP = 106
  return e
}(l.a)
exports.a = f
