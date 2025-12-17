/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：512
 */

"use strict"

var r = require("./606/353")
var i = require("./606/412")
var o = function () {
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
var a = function (t) {
  function e(e, n, r) {
    var i = t.call(this, e, n) || this
    i.count = 0
    i.finderPattern = r
    return i
  }
  o(e, t)
  e.prototype.getFinderPattern = function () {
    return this.finderPattern
  }
  e.prototype.getCount = function () {
    return this.count
  }
  e.prototype.incrementCount = function () {
    this.count++
  }
  return e
}(i.a)
var s = require("./151")
var u = require("./122")
var c = require("./36")
var l = require("./108")
var d = require("./74")
var f = require("./73/index")
var h = require("./606/608")
var p = require("./116")
var m = require("./606/382")
var b = require("./115")
var g = require("./171")
var v = function () {
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
var _ = function (t) {
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
var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this
    e.possibleLeftPairs = []
    e.possibleRightPairs = []
    return e
  }
  v(e, t)
  e.prototype.decodeRow = function (t, n, r) {
    var i
    var /* [auto-meaningful-name] */d$return
    var a
    var /* [auto-meaningful-name] */p$return
    var u = this.decodePair(n, false, t, r)
    e.addOrTally(this.possibleLeftPairs, u)
    n.reverse()
    var l = this.decodePair(n, true, t, r)
    e.addOrTally(this.possibleRightPairs, l)
    n.reverse()
    try {
      for (var d = _(this.possibleLeftPairs), f = d.next(); !f.done; f = d.next()) {
        var /* [auto-meaningful-name] */f$value = f.value
        if (f$value.getCount() > 1) {
          try {
            for (a = undefined, p = _(this.possibleRightPairs), m = p.next(), undefined; !m.done; m = p.next()) {
              var p
              var m
              var /* [auto-meaningful-name] */m$value = m.value
              if (m$value.getCount() > 1 && e.checkChecksum(f$value, m$value)) {
                return e.constructResult(f$value, m$value)
              }
            }
          } catch (g) {
            a = {
              error: g
            }
          } finally {
            try {
              if (m && !m.done && (p$return = p.return)) {
                p$return.call(p)
              }
            } finally {
              if (a) {
                throw a.error
              }
            }
          }
        }
      }
    } catch (v) {
      i = {
        error: v
      }
    } finally {
      try {
        if (f && !f.done && (d$return = d.return)) {
          d$return.call(d)
        }
      } finally {
        if (i) {
          throw i.error
        }
      }
    }
    throw new c.a()
  }
  e.addOrTally = function (t, e) {
    var n
    var /* [auto-meaningful-name] */o$return
    if (null != e) {
      var i = false
      try {
        for (var o = _(t), a = o.next(); !a.done; a = o.next()) {
          var /* [auto-meaningful-name] */a$value = a.value
          if (a$value.getValue() === e.getValue()) {
            a$value.incrementCount()
            i = true
            break
          }
        }
      } catch (u) {
        n = {
          error: u
        }
      } finally {
        try {
          if (a && !a.done && (o$return = o.return)) {
            o$return.call(o)
          }
        } finally {
          if (n) {
            throw n.error
          }
        }
      }
      if (!i) {
        t.push(e)
      }
    }
  }
  e.prototype.reset = function () {
    this.possibleLeftPairs.length = 0
    this.possibleRightPairs.length = 0
  }
  e.constructResult = function (t, e) {
    for (var n = 4537077 * t.getValue() + e.getValue(), r = new String(n).toString(), i = new l.a(), o = 13 - r.length; o > 0; o--) {
      i.append("0")
    }
    i.append(r)
    var a = 0
    for (o = 0; o < 13; o++) {
      var u = i.charAt(o).charCodeAt(0) - "0".charCodeAt(0)
      a += 0 === (1 & o) ? 3 * u : u
    }
    if (10 === (a = 10 - a % 10)) {
      a = 0
    }
    i.append(a.toString())
    var c = t.getFinderPattern().getResultPoints()
    var f = e.getFinderPattern().getResultPoints()
    return new s.a(i.toString(), null, 0, [c[0], c[1], f[0], f[1]], d.a.RSS_14, new Date().getTime())
  }
  e.checkChecksum = function (t, e) {
    var n = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79
    var r = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue()
    if (r > 72) {
      r--
    }
    if (r > 8) {
      r--
    }
    return n === r
  }
  e.prototype.decodePair = function (t, e, n, r) {
    try {
      var i = this.findFinderPattern(t, e)
      var o = this.parseFoundFinderPattern(t, n, e, i)
      var s = null == r ? null : r.get(u.a.NEED_RESULT_POINT_CALLBACK)
      if (null != s) {
        var c = (i[0] + i[1]) / 2
        if (e) {
          c = t.getSize() - 1 - c
        }
        s.foundPossibleResultPoint(new f.a(c, n))
      }
      var l = this.decodeDataCharacter(t, o, true)
      var d = this.decodeDataCharacter(t, o, false)
      return new a(1597 * l.getValue() + d.getValue(), l.getChecksumPortion() + 4 * d.getChecksumPortion(), o)
    } catch (h) {
      return null
    }
  }
  e.prototype.decodeDataCharacter = function (t, n, r) {
    for (var o = this.getDataCharacterCounters(), a = 0; a < o.length; a++) {
      o[a] = 0
    }
    if (r) {
      g.a.recordPatternInReverse(t, n.getStartEnd()[0], o)
    } else {
      g.a.recordPattern(t, n.getStartEnd()[1] + 1, o)
      for (var s = 0, u = o.length - 1; s < u; s++, u--) {
        var l = o[s]
        o[s] = o[u]
        o[u] = l
      }
    }
    var d = r ? 16 : 15
    var f = p.a.sum(new Int32Array(o)) / d
    var h = this.getOddCounts()
    var b = this.getEvenCounts()
    var v = this.getOddRoundingErrors()
    var _ = this.getEvenRoundingErrors()
    for (s = 0; s < o.length; s++) {
      var y = o[s] / f
      var w = Math.floor(y + .5)
      if (w < 1) {
        w = 1
      } else {
        if (w > 8) {
          w = 8
        }
      }
      var E = Math.floor(s / 2)
      if (0 === (1 & s)) {
        h[E] = w
        v[E] = y - w
      } else {
        b[E] = w
        _[E] = y - w
      }
    }
    this.adjustOddEvenCounts(r, d)
    var O = 0
    var T = 0
    for (s = h.length - 1; s >= 0; s--) {
      T *= 9
      T += h[s]
      O += h[s]
    }
    var A = 0
    var S = 0
    for (s = b.length - 1; s >= 0; s--) {
      A *= 9
      A += b[s]
      S += b[s]
    }
    var I = T + 3 * A
    if (r) {
      if (0 !== (1 & O) || O > 12 || O < 4) {
        throw new c.a()
      }
      var C = (12 - O) / 2
      var j = 9 - (x = e.OUTSIDE_ODD_WIDEST[C])
      var M = m.a.getRSSvalue(h, x, false)
      var k = m.a.getRSSvalue(b, j, true)
      var R = e.OUTSIDE_EVEN_TOTAL_SUBSET[C]
      var N = e.OUTSIDE_GSUM[C]
      return new i.a(M * R + k + N, I)
    }
    if (0 !== (1 & S) || S > 10 || S < 4) {
      throw new c.a()
    }
    C = (10 - S) / 2
    j = 9 - (x = e.INSIDE_ODD_WIDEST[C])
    M = m.a.getRSSvalue(h, x, true)
    k = m.a.getRSSvalue(b, j, false)
    var x
    var D = e.INSIDE_ODD_TOTAL_SUBSET[C]
    N = e.INSIDE_GSUM[C]
    return new i.a(k * D + M + N, I)
  }
  e.prototype.findFinderPattern = function (t, e) {
    var n = this.getDecodeFinderCounters()
    n[0] = 0
    n[1] = 0
    n[2] = 0
    n[3] = 0
    for (var i = t.getSize(), o = false, a = 0; a < i && e !== (o = !t.get(a));) {
      a++
    }
    for (var s = 0, u = a, l = a; l < i; l++) {
      if (t.get(l) !== o) {
        n[s]++
      } else {
        if (3 === s) {
          if (r.a.isFinderPattern(n)) {
            return [u, l]
          }
          u += n[0] + n[1]
          n[0] = n[2]
          n[1] = n[3]
          n[2] = 0
          n[3] = 0
          s--
        } else {
          s++
        }
        n[s] = 1
        o = !o
      }
    }
    throw new c.a()
  }
  e.prototype.parseFoundFinderPattern = function (t, n, r, i) {
    for (var o = t.get(i[0]), a = i[0] - 1; a >= 0 && o !== t.get(a);) {
      a--
    }
    a++
    var s = i[0] - a
    var u = this.getDecodeFinderCounters()
    var c = new Int32Array(u.length)
    b.a.arraycopy(u, 0, c, 1, u.length - 1)
    c[0] = s
    var l = this.parseFinderValue(c, e.FINDER_PATTERNS)
    var d = a
    var f = i[1]
    if (r) {
      d = t.getSize() - 1 - d
      f = t.getSize() - 1 - f
    }
    return new h.a(l, [a, i[1]], d, f, n)
  }
  e.prototype.adjustOddEvenCounts = function (t, e) {
    var n = p.a.sum(new Int32Array(this.getOddCounts()))
    var i = p.a.sum(new Int32Array(this.getEvenCounts()))
    var o = false
    var a = false
    var s = false
    var u = false
    if (t) {
      if (n > 12) {
        a = true
      } else {
        if (n < 4) {
          o = true
        }
      }
      if (i > 12) {
        u = true
      } else {
        if (i < 4) {
          s = true
        }
      }
    } else {
      if (n > 11) {
        a = true
      } else {
        if (n < 5) {
          o = true
        }
      }
      if (i > 10) {
        u = true
      } else {
        if (i < 4) {
          s = true
        }
      }
    }
    var l = n + i - e
    var d = (1 & n) === (t ? 1 : 0)
    var f = 1 === (1 & i)
    if (1 === l) {
      if (d) {
        if (f) {
          throw new c.a()
        }
        a = true
      } else {
        if (!f) {
          throw new c.a()
        }
        u = true
      }
    } else if (-1 === l) {
      if (d) {
        if (f) {
          throw new c.a()
        }
        o = true
      } else {
        if (!f) {
          throw new c.a()
        }
        s = true
      }
    } else {
      if (0 !== l) {
        throw new c.a()
      }
      if (d) {
        if (!f) {
          throw new c.a()
        }
        if (n < i) {
          o = true
          u = true
        } else {
          a = true
          s = true
        }
      } else if (f) {
        throw new c.a()
      }
    }
    if (o) {
      if (a) {
        throw new c.a()
      }
      r.a.increment(this.getOddCounts(), this.getOddRoundingErrors())
    }
    if (a) {
      r.a.decrement(this.getOddCounts(), this.getOddRoundingErrors())
    }
    if (s) {
      if (u) {
        throw new c.a()
      }
      r.a.increment(this.getEvenCounts(), this.getOddRoundingErrors())
    }
    if (u) {
      r.a.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
    }
  }
  e.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126]
  e.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81]
  e.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715]
  e.INSIDE_GSUM = [0, 336, 1036, 1516]
  e.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1]
  e.INSIDE_ODD_WIDEST = [2, 4, 6, 8]
  e.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]), Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]), Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]), Int32Array.from([1, 3, 9, 1])]
  return e
}(r.a)
exports.a = y
