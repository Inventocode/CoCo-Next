/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：509
 */

"use strict"

var n = require("./351")
var o = require("./409")
var i = function () {
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
var a = function (t) {
  function e(e, r, n) {
    var o = t.call(this, e, r) || this
    o.count = 0
    o.finderPattern = n
    return o
  }
  i(e, t)
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
}(o.a)
var u = require("../150")
var s = require("../124")
var c = require("../37")
var f = require("../109")
var h = require("../74")
var l = require("../73/index")
var d = require("./604")
var p = require("../118")
var g = require("./382")
var y = require("../117")
var w = require("../170")
var v = function () {
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
var _ = function (t) {
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
var m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this
    e.possibleLeftPairs = []
    e.possibleRightPairs = []
    return e
  }
  v(e, t)
  e.prototype.decodeRow = function (t, r, n) {
    var o
    var /* [auto-meaningful-name] */h$return
    var a
    var /* [auto-meaningful-name] */p$return
    var s = this.decodePair(r, false, t, n)
    e.addOrTally(this.possibleLeftPairs, s)
    r.reverse()
    var f = this.decodePair(r, true, t, n)
    e.addOrTally(this.possibleRightPairs, f)
    r.reverse()
    try {
      for (var h = _(this.possibleLeftPairs), l = h.next(); !l.done; l = h.next()) {
        var /* [auto-meaningful-name] */l$value = l.value
        if (l$value.getCount() > 1) {
          try {
            for (a = undefined, p = _(this.possibleRightPairs), g = p.next(), undefined; !g.done; g = p.next()) {
              var p
              var g
              var /* [auto-meaningful-name] */g$value = g.value
              if (g$value.getCount() > 1 && e.checkChecksum(l$value, g$value)) {
                return e.constructResult(l$value, g$value)
              }
            }
          } catch (w) {
            a = {
              error: w
            }
          } finally {
            try {
              if (g && !g.done && (p$return = p.return)) {
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
      o = {
        error: v
      }
    } finally {
      try {
        if (l && !l.done && (h$return = h.return)) {
          h$return.call(h)
        }
      } finally {
        if (o) {
          throw o.error
        }
      }
    }
    throw new c.a()
  }
  e.addOrTally = function (t, e) {
    var r
    var /* [auto-meaningful-name] */i$return
    if (null != e) {
      var o = false
      try {
        for (var i = _(t), a = i.next(); !a.done; a = i.next()) {
          var /* [auto-meaningful-name] */a$value = a.value
          if (a$value.getValue() === e.getValue()) {
            a$value.incrementCount()
            o = true
            break
          }
        }
      } catch (s) {
        r = {
          error: s
        }
      } finally {
        try {
          if (a && !a.done && (i$return = i.return)) {
            i$return.call(i)
          }
        } finally {
          if (r) {
            throw r.error
          }
        }
      }
      if (!o) {
        t.push(e)
      }
    }
  }
  e.prototype.reset = function () {
    this.possibleLeftPairs.length = 0
    this.possibleRightPairs.length = 0
  }
  e.constructResult = function (t, e) {
    for (var r = 4537077 * t.getValue() + e.getValue(), n = new String(r).toString(), o = new f.a(), i = 13 - n.length; i > 0; i--) {
      o.append("0")
    }
    o.append(n)
    var a = 0
    for (i = 0; i < 13; i++) {
      var s = o.charAt(i).charCodeAt(0) - "0".charCodeAt(0)
      a += 0 === (1 & i) ? 3 * s : s
    }
    if (10 === (a = 10 - a % 10)) {
      a = 0
    }
    o.append(a.toString())
    var c = t.getFinderPattern().getResultPoints()
    var l = e.getFinderPattern().getResultPoints()
    return new u.a(o.toString(), null, 0, [c[0], c[1], l[0], l[1]], h.a.RSS_14, new Date().getTime())
  }
  e.checkChecksum = function (t, e) {
    var r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79
    var n = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue()
    if (n > 72) {
      n--
    }
    if (n > 8) {
      n--
    }
    return r === n
  }
  e.prototype.decodePair = function (t, e, r, n) {
    try {
      var o = this.findFinderPattern(t, e)
      var i = this.parseFoundFinderPattern(t, r, e, o)
      var u = null == n ? null : n.get(s.a.NEED_RESULT_POINT_CALLBACK)
      if (null != u) {
        var c = (o[0] + o[1]) / 2
        if (e) {
          c = t.getSize() - 1 - c
        }
        u.foundPossibleResultPoint(new l.a(c, r))
      }
      var f = this.decodeDataCharacter(t, i, true)
      var h = this.decodeDataCharacter(t, i, false)
      return new a(1597 * f.getValue() + h.getValue(), f.getChecksumPortion() + 4 * h.getChecksumPortion(), i)
    } catch (d) {
      return null
    }
  }
  e.prototype.decodeDataCharacter = function (t, r, n) {
    for (var i = this.getDataCharacterCounters(), a = 0; a < i.length; a++) {
      i[a] = 0
    }
    if (n) {
      w.a.recordPatternInReverse(t, r.getStartEnd()[0], i)
    } else {
      w.a.recordPattern(t, r.getStartEnd()[1] + 1, i)
      for (var u = 0, s = i.length - 1; u < s; u++, s--) {
        var f = i[u]
        i[u] = i[s]
        i[s] = f
      }
    }
    var h = n ? 16 : 15
    var l = p.a.sum(new Int32Array(i)) / h
    var d = this.getOddCounts()
    var y = this.getEvenCounts()
    var v = this.getOddRoundingErrors()
    var _ = this.getEvenRoundingErrors()
    for (u = 0; u < i.length; u++) {
      var m = i[u] / l
      var A = Math.floor(m + .5)
      if (A < 1) {
        A = 1
      } else {
        if (A > 8) {
          A = 8
        }
      }
      var E = Math.floor(u / 2)
      if (0 === (1 & u)) {
        d[E] = A
        v[E] = m - A
      } else {
        y[E] = A
        _[E] = m - A
      }
    }
    this.adjustOddEvenCounts(n, h)
    var C = 0
    var I = 0
    for (u = d.length - 1; u >= 0; u--) {
      I *= 9
      I += d[u]
      C += d[u]
    }
    var S = 0
    var T = 0
    for (u = y.length - 1; u >= 0; u--) {
      S *= 9
      S += y[u]
      T += y[u]
    }
    var O = I + 3 * S
    if (n) {
      if (0 !== (1 & C) || C > 12 || C < 4) {
        throw new c.a()
      }
      var b = (12 - C) / 2
      var R = 9 - (B = e.OUTSIDE_ODD_WIDEST[b])
      var N = g.a.getRSSvalue(d, B, false)
      var D = g.a.getRSSvalue(y, R, true)
      var M = e.OUTSIDE_EVEN_TOTAL_SUBSET[b]
      var P = e.OUTSIDE_GSUM[b]
      return new o.a(N * M + D + P, O)
    }
    if (0 !== (1 & T) || T > 10 || T < 4) {
      throw new c.a()
    }
    b = (10 - T) / 2
    R = 9 - (B = e.INSIDE_ODD_WIDEST[b])
    N = g.a.getRSSvalue(d, B, true)
    D = g.a.getRSSvalue(y, R, false)
    var B
    var L = e.INSIDE_ODD_TOTAL_SUBSET[b]
    P = e.INSIDE_GSUM[b]
    return new o.a(D * L + N + P, O)
  }
  e.prototype.findFinderPattern = function (t, e) {
    var r = this.getDecodeFinderCounters()
    r[0] = 0
    r[1] = 0
    r[2] = 0
    r[3] = 0
    for (var o = t.getSize(), i = false, a = 0; a < o && e !== (i = !t.get(a));) {
      a++
    }
    for (var u = 0, s = a, f = a; f < o; f++) {
      if (t.get(f) !== i) {
        r[u]++
      } else {
        if (3 === u) {
          if (n.a.isFinderPattern(r)) {
            return [s, f]
          }
          s += r[0] + r[1]
          r[0] = r[2]
          r[1] = r[3]
          r[2] = 0
          r[3] = 0
          u--
        } else {
          u++
        }
        r[u] = 1
        i = !i
      }
    }
    throw new c.a()
  }
  e.prototype.parseFoundFinderPattern = function (t, r, n, o) {
    for (var i = t.get(o[0]), a = o[0] - 1; a >= 0 && i !== t.get(a);) {
      a--
    }
    a++
    var u = o[0] - a
    var s = this.getDecodeFinderCounters()
    var c = new Int32Array(s.length)
    y.a.arraycopy(s, 0, c, 1, s.length - 1)
    c[0] = u
    var f = this.parseFinderValue(c, e.FINDER_PATTERNS)
    var h = a
    var l = o[1]
    if (n) {
      h = t.getSize() - 1 - h
      l = t.getSize() - 1 - l
    }
    return new d.a(f, [a, o[1]], h, l, r)
  }
  e.prototype.adjustOddEvenCounts = function (t, e) {
    var r = p.a.sum(new Int32Array(this.getOddCounts()))
    var o = p.a.sum(new Int32Array(this.getEvenCounts()))
    var i = false
    var a = false
    var u = false
    var s = false
    if (t) {
      if (r > 12) {
        a = true
      } else {
        if (r < 4) {
          i = true
        }
      }
      if (o > 12) {
        s = true
      } else {
        if (o < 4) {
          u = true
        }
      }
    } else {
      if (r > 11) {
        a = true
      } else {
        if (r < 5) {
          i = true
        }
      }
      if (o > 10) {
        s = true
      } else {
        if (o < 4) {
          u = true
        }
      }
    }
    var f = r + o - e
    var h = (1 & r) === (t ? 1 : 0)
    var l = 1 === (1 & o)
    if (1 === f) {
      if (h) {
        if (l) {
          throw new c.a()
        }
        a = true
      } else {
        if (!l) {
          throw new c.a()
        }
        s = true
      }
    } else if (-1 === f) {
      if (h) {
        if (l) {
          throw new c.a()
        }
        i = true
      } else {
        if (!l) {
          throw new c.a()
        }
        u = true
      }
    } else {
      if (0 !== f) {
        throw new c.a()
      }
      if (h) {
        if (!l) {
          throw new c.a()
        }
        if (r < o) {
          i = true
          s = true
        } else {
          a = true
          u = true
        }
      } else if (l) {
        throw new c.a()
      }
    }
    if (i) {
      if (a) {
        throw new c.a()
      }
      n.a.increment(this.getOddCounts(), this.getOddRoundingErrors())
    }
    if (a) {
      n.a.decrement(this.getOddCounts(), this.getOddRoundingErrors())
    }
    if (u) {
      if (s) {
        throw new c.a()
      }
      n.a.increment(this.getEvenCounts(), this.getOddRoundingErrors())
    }
    if (s) {
      n.a.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
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
}(n.a)
exports.a = m
