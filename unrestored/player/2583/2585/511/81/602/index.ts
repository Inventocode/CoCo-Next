/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：602
 */

"use strict"

var r = require("../74")
var i = require("../118")
var o = require("../37")
var a = require("../150")
var s = require("../117")
var u = require("./351")
var c = require("./409")
var l = require("./604")
var d = require("./382")
var f = require("../165")
var h = function () {
  function t() {}
  t.buildBitArray = function (t) {
    var e = 2 * t.length - 1
    if (null == t[t.length - 1].getRightChar()) {
      e -= 1
    }
    for (var n = 12 * e, r = new f.a(n), i = 0, o = t[0].getRightChar().getValue(), a = 11; a >= 0; --a) {
      if (0 != (o & 1 << a)) {
        r.set(i)
      }
      i++
    }
    for (a = 1; a < t.length; ++a) {
      for (var s = t[a], u = s.getLeftChar().getValue(), c = 11; c >= 0; --c) {
        if (0 != (u & 1 << c)) {
          r.set(i)
        }
        i++
      }
      if (null != s.getRightChar()) {
        var l = s.getRightChar().getValue()
        for (c = 11; c >= 0; --c) {
          if (0 != (l & 1 << c)) {
            r.set(i)
          }
          i++
        }
      }
    }
    return r
  }
  return t
}()
var p = require("../600/index")
var m = function () {
  function t(t, e, n, r) {
    this.leftchar = t
    this.rightchar = e
    this.finderpattern = n
    this.maybeLast = r
  }
  t.prototype.mayBeLast = function () {
    return this.maybeLast
  }
  t.prototype.getLeftChar = function () {
    return this.leftchar
  }
  t.prototype.getRightChar = function () {
    return this.rightchar
  }
  t.prototype.getFinderPattern = function () {
    return this.finderpattern
  }
  t.prototype.mustBeLast = function () {
    return null == this.rightchar
  }
  t.prototype.toString = function () {
    return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null" : this.finderpattern.getValue()) + " ]"
  }
  t.equals = function (e, n) {
    return e instanceof t && t.equalsOrNull(e.leftchar, n.leftchar) && t.equalsOrNull(e.rightchar, n.rightchar) && t.equalsOrNull(e.finderpattern, n.finderpattern)
  }
  t.equalsOrNull = function (e, n) {
    return null === e ? null === n : t.equals(e, n)
  }
  t.prototype.hashCode = function () {
    return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue()
  }
  return t
}()
var b = function () {
  function t(t, e, n) {
    this.pairs = t
    this.rowNumber = e
    this.wasReversed = n
  }
  t.prototype.getPairs = function () {
    return this.pairs
  }
  t.prototype.getRowNumber = function () {
    return this.rowNumber
  }
  t.prototype.isReversed = function () {
    return this.wasReversed
  }
  t.prototype.isEquivalent = function (t) {
    return this.checkEqualitity(this, t)
  }
  t.prototype.toString = function () {
    return "{ " + this.pairs + " }"
  }
  t.prototype.equals = function (e, n) {
    return e instanceof t && this.checkEqualitity(e, n) && e.wasReversed === n.wasReversed
  }
  t.prototype.checkEqualitity = function (t, e) {
    var n
    if (t && e) {
      t.forEach(function (t, r) {
        e.forEach(function (e) {
          if (t.getLeftChar().getValue() === e.getLeftChar().getValue() && t.getRightChar().getValue() === e.getRightChar().getValue() && t.getFinderPatter().getValue() === e.getFinderPatter().getValue()) {
            n = true
          }
        })
      })
      return n
    }
  }
  return t
}()
var g = function () {
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
var v = function (t) {
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
var _ = function (t) {
  function e() {
    var n = null !== t && t.apply(this, arguments) || this
    n.pairs = new Array(e.MAX_PAIRS)
    n.rows = new Array()
    n.startEnd = [2]
    return n
  }
  g(e, t)
  e.prototype.decodeRow = function (t, n, r) {
    this.pairs.length = 0
    this.startFromEven = false
    try {
      return e.constructResult(this.decodeRow2pairs(t, n))
    } catch (i) {}
    this.pairs.length = 0
    this.startFromEven = true
    return e.constructResult(this.decodeRow2pairs(t, n))
  }
  e.prototype.reset = function () {
    this.pairs.length = 0
    this.rows.length = 0
  }
  e.prototype.decodeRow2pairs = function (t, e) {
    for (var n, r = false; !r;) {
      try {
        this.pairs.push(this.retrieveNextPair(e, this.pairs, t))
      } catch (a) {
        if (a instanceof o.a) {
          if (!this.pairs.length) {
            throw new o.a()
          }
          r = true
        }
      }
    }
    if (this.checkChecksum()) {
      return this.pairs
    }
    n = !!this.rows.length
    this.storeRow(t, false)
    if (n) {
      var i = this.checkRowsBoolean(false)
      if (null != i) {
        return i
      }
      if (null != (i = this.checkRowsBoolean(true))) {
        return i
      }
    }
    throw new o.a()
  }
  e.prototype.checkRowsBoolean = function (t) {
    if (this.rows.length > 25) {
      this.rows.length = 0
      return null
    }
    this.pairs.length = 0
    if (t) {
      this.rows = this.rows.reverse()
    }
    var e = null
    try {
      e = this.checkRows(new Array(), 0)
    } catch (n) {
      console.log(n)
    }
    if (t) {
      this.rows = this.rows.reverse()
    }
    return e
  }
  e.prototype.checkRows = function (t, n) {
    for (var r, /* [auto-meaningful-name] */u$return, a = n; a < this.rows.length; a++) {
      var s = this.rows[a]
      this.pairs.length = 0
      try {
        for (r = undefined, u = v(t), c = u.next(), undefined; !c.done; c = u.next()) {
          var u
          var c
          var c$value = c.value
          this.pairs.push(c$value.getPairs())
        }
      } catch (f) {
        r = {
          error: f
        }
      } finally {
        try {
          if (c && !c.done && (u$return = u.return)) {
            u$return.call(u)
          }
        } finally {
          if (r) {
            throw r.error
          }
        }
      }
      this.pairs.push(s.getPairs())
      if (e.isValidSequence(this.pairs)) {
        if (this.checkChecksum()) {
          return this.pairs
        }
        var d = new Array(t)
        d.push(s)
        try {
          return this.checkRows(d, a + 1)
        } catch (h) {
          console.log(h)
        }
      }
    }
    throw new o.a()
  }
  e.isValidSequence = function (t) {
    var n
    var /* [auto-meaningful-name] */i$return
    try {
      for (var i = v(e.FINDER_PATTERN_SEQUENCES), o = i.next(); !o.done; o = i.next()) {
        var o$value = o.value
        if (!(t.length > o$value.length)) {
          for (var s = true, u = 0; u < t.length; u++) {
            if (t[u].getFinderPattern().getValue() != o$value[u]) {
              s = false
              break
            }
          }
          if (s) {
            return true
          }
        }
      }
    } catch (c) {
      n = {
        error: c
      }
    } finally {
      try {
        if (o && !o.done && (i$return = i.return)) {
          i$return.call(i)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
    return false
  }
  e.prototype.storeRow = function (t, n) {
    for (var r = 0, i = false, o = false; r < this.rows.length;) {
      var a = this.rows[r]
      if (a.getRowNumber() > t) {
        o = a.isEquivalent(this.pairs)
        break
      }
      i = a.isEquivalent(this.pairs)
      r++
    }
    if (!(o || i || e.isPartialRow(this.pairs, this.rows))) {
      this.rows.push(r, new b(this.pairs, t, n))
      this.removePartialRows(this.pairs, this.rows)
    }
  }
  e.prototype.removePartialRows = function (t, e) {
    var n
    var /* [auto-meaningful-name] */u$return
    var i
    var /* [auto-meaningful-name] */d$return
    var a
    var /* [auto-meaningful-name] */b$return
    try {
      for (var u = v(e), c = u.next(); !c.done; c = u.next()) {
        var c$value = c.value
        if (c$value.getPairs().length !== t.length) {
          try {
            for (i = undefined, d = v(c$value.getPairs()), f = d.next(), undefined; !f.done; f = d.next()) {
              var d
              var f
              var f$value = f.value
              var p = false
              try {
                for (a = undefined, b = v(t), g = b.next(), undefined; !g.done; g = b.next()) {
                  var b
                  var g
                  var g$value = g.value
                  if (m.equals(f$value, g$value)) {
                    p = true
                    break
                  }
                }
              } catch (y) {
                a = {
                  error: y
                }
              } finally {
                try {
                  if (g && !g.done && (b$return = b.return)) {
                    b$return.call(b)
                  }
                } finally {
                  if (a) {
                    throw a.error
                  }
                }
              }
              if (!p) {
                false
              }
            }
          } catch (w) {
            i = {
              error: w
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
        }
      }
    } catch (E) {
      n = {
        error: E
      }
    } finally {
      try {
        if (c && !c.done && (u$return = u.return)) {
          u$return.call(u)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
  }
  e.isPartialRow = function (t, e) {
    var n
    var /* [auto-meaningful-name] */u$return
    var i
    var /* [auto-meaningful-name] */f$return
    var a
    var /* [auto-meaningful-name] */b$return
    try {
      for (var u = v(e), c = u.next(); !c.done; c = u.next()) {
        var c$value = c.value
        var d = true
        try {
          for (i = undefined, f = v(t), h = f.next(), undefined; !h.done; h = f.next()) {
            var f
            var h
            var h$value = h.value
            var m = false
            try {
              for (a = undefined, b = v(c$value.getPairs()), g = b.next(), undefined; !g.done; g = b.next()) {
                var b
                var g
                var g$value = g.value
                if (h$value.equals(g$value)) {
                  m = true
                  break
                }
              }
            } catch (y) {
              a = {
                error: y
              }
            } finally {
              try {
                if (g && !g.done && (b$return = b.return)) {
                  b$return.call(b)
                }
              } finally {
                if (a) {
                  throw a.error
                }
              }
            }
            if (!m) {
              d = false
              break
            }
          }
        } catch (w) {
          i = {
            error: w
          }
        } finally {
          try {
            if (h && !h.done && (f$return = f.return)) {
              f$return.call(f)
            }
          } finally {
            if (i) {
              throw i.error
            }
          }
        }
        if (d) {
          return true
        }
      }
    } catch (E) {
      n = {
        error: E
      }
    } finally {
      try {
        if (c && !c.done && (u$return = u.return)) {
          u$return.call(u)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
    return false
  }
  e.prototype.getRows = function () {
    return this.rows
  }
  e.constructResult = function (t) {
    var e = h.buildBitArray(t)
    var n = p.a(e).parseInformation()
    var i = t[0].getFinderPattern().getResultPoints()
    var o = t[t.length - 1].getFinderPattern().getResultPoints()
    var s = [i[0], i[1], o[0], o[1]]
    return new a.a(n, null, null, s, r.a.RSS_EXPANDED, null)
  }
  e.prototype.checkChecksum = function () {
    var t = this.pairs.get(0)
    var e = t.getLeftChar()
    var n = t.getRightChar()
    if (null == n) {
      return false
    }
    for (var r = n.getChecksumPortion(), i = 2, o = 1; o < this.pairs.size(); ++o) {
      var a = this.pairs.get(o)
      r += a.getLeftChar().getChecksumPortion()
      i++
      var s = a.getRightChar()
      if (null != s) {
        r += s.getChecksumPortion()
        i++
      }
    }
    return 211 * (i - 4) + (r %= 211) == e.getValue()
  }
  e.getNextSecondBar = function (t, e) {
    var n
    if (t.get(e)) {
      n = t.getNextUnset(e)
      n = t.getNextSet(n)
    } else {
      n = t.getNextSet(e)
      n = t.getNextUnset(n)
    }
    return n
  }
  e.prototype.retrieveNextPair = function (t, n, r) {
    var i
    var a = n.length % 2 == 0
    if (this.startFromEven) {
      a = !a
    }
    var s = true
    var u = -1
    do {
      this.findNextPair(t, n, u)
      if (null == (i = this.parseFoundFinderPattern(t, r, a))) {
        u = e.getNextSecondBar(t, this.startEnd[0])
      } else {
        s = false
      }
    } while (s)
    var c
    var l = this.decodeDataCharacter(t, i, a, true)
    if (!this.isEmptyPair(n) && n[n.length - 1].mustBeLast()) {
      throw new o.a()
    }
    try {
      c = this.decodeDataCharacter(t, i, a, false)
    } catch (d) {
      c = null
      console.log(d)
    }
    return new m(l, c, i, true)
  }
  e.prototype.isEmptyPair = function (t) {
    return 0 === t.length
  }
  e.prototype.findNextPair = function (t, n, r) {
    var i = this.getDecodeFinderCounters()
    i[0] = 0
    i[1] = 0
    i[2] = 0
    i[3] = 0
    var a
    var s = t.getSize()
    if (r >= 0) {
      a = r
    } else if (this.isEmptyPair(n)) {
      a = 0
    } else {
      a = n[n.length - 1].getFinderPattern().getStartEnd()[1]
    }
    var u = n.length % 2 != 0
    if (this.startFromEven) {
      u = !u
    }
    for (var c = false; a < s && (c = !t.get(a));) {
      a++
    }
    for (var l = 0, d = a, f = a; f < s; f++) {
      if (t.get(f) != c) {
        i[l]++
      } else {
        if (3 == l) {
          if (u) {
            e.reverseCounters(i)
          }
          if (e.isFinderPattern(i)) {
            this.startEnd[0] = d
            return void (this.startEnd[1] = f)
          }
          if (u) {
            e.reverseCounters(i)
          }
          d += i[0] + i[1]
          i[0] = i[2]
          i[1] = i[3]
          i[2] = 0
          i[3] = 0
          l--
        } else {
          l++
        }
        i[l] = 1
        c = !c
      }
    }
    throw new o.a()
  }
  e.reverseCounters = function (t) {
    for (var t$length = t.length, n = 0; n < t$length / 2; ++n) {
      var r = t[n]
      t[n] = t[t$length - n - 1]
      t[t$length - n - 1] = r
    }
  }
  e.prototype.parseFoundFinderPattern = function (t, n, r) {
    var i
    var o
    var a
    if (r) {
      for (var u = this.startEnd[0] - 1; u >= 0 && !t.get(u);) {
        u--
      }
      u++
      i = this.startEnd[0] - u
      o = u
      a = this.startEnd[1]
    } else {
      o = this.startEnd[0]
      i = (a = t.getNextUnset(this.startEnd[1] + 1)) - this.startEnd[1]
    }
    var c
    var d = this.getDecodeFinderCounters()
    s.a.arraycopy(d, 0, d, 1, d.length - 1)
    d[0] = i
    try {
      c = this.parseFinderValue(d, e.FINDER_PATTERNS)
    } catch (f) {
      return null
    }
    return new l.a(c, [o, a], o, a, n)
  }
  e.prototype.decodeDataCharacter = function (t, n, r, a) {
    for (var s = this.getDataCharacterCounters(), u = 0; u < s.length; u++) {
      s[u] = 0
    }
    if (a) {
      e.recordPatternInReverse(t, n.getStartEnd()[0], s)
    } else {
      e.recordPattern(t, n.getStartEnd()[1], s)
      for (var l = 0, f = s.length - 1; l < f; l++, f--) {
        var h = s[l]
        s[l] = s[f]
        s[f] = h
      }
    }
    var p = i.a.sum(new Int32Array(s)) / 17
    var m = (n.getStartEnd()[1] - n.getStartEnd()[0]) / 15
    if (Math.abs(p - m) / m > .3) {
      throw new o.a()
    }
    var b = this.getOddCounts()
    var g = this.getEvenCounts()
    var v = this.getOddRoundingErrors()
    var _ = this.getEvenRoundingErrors()
    for (l = 0; l < s.length; l++) {
      var y = 1 * s[l] / p
      var w = y + .5
      if (w < 1) {
        if (y < .3) {
          throw new o.a()
        }
        w = 1
      } else if (w > 8) {
        if (y > 8.7) {
          throw new o.a()
        }
        w = 8
      }
      var E = l / 2
      if (0 == (1 & l)) {
        b[E] = w
        v[E] = y - w
      } else {
        g[E] = w
        _[E] = y - w
      }
    }
    this.adjustOddEvenCounts(17)
    var O = 4 * n.getValue() + (r ? 0 : 2) + (a ? 0 : 1) - 1
    var T = 0
    var A = 0
    for (l = b.length - 1; l >= 0; l--) {
      if (e.isNotA1left(n, r, a)) {
        var S = e.WEIGHTS[O][2 * l]
        A += b[l] * S
      }
      T += b[l]
    }
    var I = 0
    for (l = g.length - 1; l >= 0; l--) {
      if (e.isNotA1left(n, r, a)) {
        S = e.WEIGHTS[O][2 * l + 1]
        I += g[l] * S
      }
    }
    var C = A + I
    if (0 != (1 & T) || T > 13 || T < 4) {
      throw new o.a()
    }
    var j = (13 - T) / 2
    var M = e.SYMBOL_WIDEST[j]
    var k = 9 - M
    var R = d.a.getRSSvalue(b, M, true)
    var N = d.a.getRSSvalue(g, k, false)
    var x = R * e.EVEN_TOTAL_SUBSET[j] + N + e.GSUM[j]
    return new c.a(x, C)
  }
  e.isNotA1left = function (t, e, n) {
    return !(0 == t.getValue() && e && n)
  }
  e.prototype.adjustOddEvenCounts = function (t) {
    var n = i.a.sum(new Int32Array(this.getOddCounts()))
    var r = i.a.sum(new Int32Array(this.getEvenCounts()))
    var a = false
    var s = false
    if (n > 13) {
      s = true
    } else {
      if (n < 4) {
        a = true
      }
    }
    var u = false
    var c = false
    if (r > 13) {
      c = true
    } else {
      if (r < 4) {
        u = true
      }
    }
    var l = n + r - t
    var d = 1 == (1 & n)
    var f = 0 == (1 & r)
    if (1 == l) {
      if (d) {
        if (f) {
          throw new o.a()
        }
        s = true
      } else {
        if (!f) {
          throw new o.a()
        }
        c = true
      }
    } else if (-1 == l) {
      if (d) {
        if (f) {
          throw new o.a()
        }
        a = true
      } else {
        if (!f) {
          throw new o.a()
        }
        u = true
      }
    } else {
      if (0 != l) {
        throw new o.a()
      }
      if (d) {
        if (!f) {
          throw new o.a()
        }
        if (n < r) {
          a = true
          c = true
        } else {
          s = true
          u = true
        }
      } else if (f) {
        throw new o.a()
      }
    }
    if (a) {
      if (s) {
        throw new o.a()
      }
      e.increment(this.getOddCounts(), this.getOddRoundingErrors())
    }
    if (s) {
      e.decrement(this.getOddCounts(), this.getOddRoundingErrors())
    }
    if (u) {
      if (c) {
        throw new o.a()
      }
      e.increment(this.getEvenCounts(), this.getOddRoundingErrors())
    }
    if (c) {
      e.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
    }
  }
  e.SYMBOL_WIDEST = [7, 5, 4, 3, 1]
  e.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204]
  e.GSUM = [0, 348, 1388, 2948, 3988]
  e.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])]
  e.WEIGHTS = [[1, 3, 9, 27, 81, 32, 96, 77], [20, 60, 180, 118, 143, 7, 21, 63], [189, 145, 13, 39, 117, 140, 209, 205], [193, 157, 49, 147, 19, 57, 171, 91], [62, 186, 136, 197, 169, 85, 44, 132], [185, 133, 188, 142, 4, 12, 36, 108], [113, 128, 173, 97, 80, 29, 87, 50], [150, 28, 84, 41, 123, 158, 52, 156], [46, 138, 203, 187, 139, 206, 196, 166], [76, 17, 51, 153, 37, 111, 122, 155], [43, 129, 176, 106, 107, 110, 119, 146], [16, 48, 144, 10, 30, 90, 59, 177], [109, 116, 137, 200, 178, 112, 125, 164], [70, 210, 208, 202, 184, 130, 179, 115], [134, 191, 151, 31, 93, 68, 204, 190], [148, 22, 66, 198, 172, 94, 71, 2], [6, 18, 54, 162, 64, 192, 154, 40], [120, 149, 25, 75, 14, 42, 126, 167], [79, 26, 78, 23, 69, 207, 199, 175], [103, 98, 83, 38, 114, 131, 182, 124], [161, 61, 183, 127, 170, 88, 53, 159], [55, 165, 73, 8, 24, 72, 5, 15], [45, 135, 194, 160, 58, 174, 100, 89]]
  e.FINDER_PAT_A = 0
  e.FINDER_PAT_B = 1
  e.FINDER_PAT_C = 2
  e.FINDER_PAT_D = 3
  e.FINDER_PAT_E = 4
  e.FINDER_PAT_F = 5
  e.FINDER_PATTERN_SEQUENCES = [[e.FINDER_PAT_A, e.FINDER_PAT_A], [e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B], [e.FINDER_PAT_A, e.FINDER_PAT_C, e.FINDER_PAT_B, e.FINDER_PAT_D], [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_C], [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_D, e.FINDER_PAT_F], [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F], [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_D], [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_E], [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F], [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F]]
  e.MAX_PAIRS = 11
  return e
}(u.a)
exports.a = _
