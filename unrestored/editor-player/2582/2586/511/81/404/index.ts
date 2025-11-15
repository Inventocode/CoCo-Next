/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：404
 */

"use strict"

var n = require("../74")
var o = require("../164")
var i = require("../56")
var a = require("../37")
var u = require("../150")
var s = require("./123")
var c = require("../105")
var f = require("../169")
var h = require("../73/index")
var l = require("../117")
var d = require("../181/index")
var p = function () {
  function t(t, e) {
    this.bits = t
    this.points = e
  }
  t.prototype.getBits = function () {
    return this.bits
  }
  t.prototype.getPoints = function () {
    return this.points
  }
  return t
}()
var g = function (t) {
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
var y = function () {
  function t() {}
  t.detectMultiple = function (e, r, n) {
    var o = e.getBlackMatrix()
    var i = t.detect(n, o)
    if (!i.length) {
      (o = o.clone()).rotate180()
      i = t.detect(n, o)
    }
    return new p(o, i)
  }
  t.detect = function (e, r) {
    for (var n, /* [auto-meaningful-name] */f$return, i = new Array(), a = 0, u = 0, s = false; a < r.getHeight();) {
      var c = t.findVertices(r, a, u)
      if (null != c[0] || null != c[3]) {
        s = true
        i.push(c)
        if (!e) {
          break
        }
        if (null != c[2]) {
          u = Math.trunc(c[2].getX())
          a = Math.trunc(c[2].getY())
        } else {
          u = Math.trunc(c[4].getX())
          a = Math.trunc(c[4].getY())
        }
      } else {
        if (!s) {
          break
        }
        s = false
        u = 0
        try {
          for (n = undefined, f = g(i), h = f.next(), undefined; !h.done; h = f.next()) {
            var f
            var h
            var /* [auto-meaningful-name] */h$value = h.value
            if (null != h$value[1]) {
              a = Math.trunc(Math.max(a, h$value[1].getY()))
            }
            if (null != h$value[3]) {
              a = Math.max(a, Math.trunc(h$value[3].getY()))
            }
          }
        } catch (d) {
          n = {
            error: d
          }
        } finally {
          try {
            if (h && !h.done && (f$return = f.return)) {
              f$return.call(f)
            }
          } finally {
            if (n) {
              throw n.error
            }
          }
        }
        a += t.ROW_STEP
      }
    }
    return i
  }
  t.findVertices = function (e, r, n) {
    var o = e.getHeight()
    var i = e.getWidth()
    var a = new Array(8)
    t.copyToResult(a, t.findRowsWithPattern(e, o, i, r, n, t.START_PATTERN), t.INDEXES_START_PATTERN)
    if (null != a[4]) {
      n = Math.trunc(a[4].getX())
      r = Math.trunc(a[4].getY())
    }
    t.copyToResult(a, t.findRowsWithPattern(e, o, i, r, n, t.STOP_PATTERN), t.INDEXES_STOP_PATTERN)
    return a
  }
  t.copyToResult = function (t, e, r) {
    for (var n = 0; n < r.length; n++) {
      t[r[n]] = e[n]
    }
  }
  t.findRowsWithPattern = function (e, r, n, o, i, a) {
    for (var u = new Array(4), s = false, c = new Int32Array(a.length); o < r; o += t.ROW_STEP) {
      if (null != (g = t.findGuardPattern(e, i, o, n, false, a, c))) {
        for (; o > 0;) {
          if (null == (p = t.findGuardPattern(e, i, --o, n, false, a, c))) {
            o++
            break
          }
          g = p
        }
        u[0] = new h.a(g[0], o)
        u[1] = new h.a(g[1], o)
        s = true
        break
      }
    }
    var f = o + 1
    if (s) {
      for (var l = 0, p = Int32Array.from([Math.trunc(u[0].getX()), Math.trunc(u[1].getX())]); f < r; f++) {
        var g
        if (null != (g = t.findGuardPattern(e, p[0], f, n, false, a, c)) && Math.abs(p[0] - g[0]) < t.MAX_PATTERN_DRIFT && Math.abs(p[1] - g[1]) < t.MAX_PATTERN_DRIFT) {
          p = g
          l = 0
        } else {
          if (l > t.SKIPPED_ROW_COUNT_MAX) {
            break
          }
          l++
        }
      }
      f -= l + 1
      u[2] = new h.a(p[0], f)
      u[3] = new h.a(p[1], f)
    }
    if (f - o < t.BARCODE_MIN_HEIGHT) {
      d.a.fill(u, null)
    }
    return u
  }
  t.findGuardPattern = function (e, r, n, o, i, a, u) {
    d.a.fillWithin(u, 0, u.length, 0)
    for (var s = r, c = 0; e.get(s, n) && s > 0 && c++ < t.MAX_PIXEL_DRIFT;) {
      s--
    }
    for (var f = s, h = 0, /* [auto-meaningful-name] */a$length = a.length, g = i; f < o; f++) {
      if (e.get(f, n) !== g) {
        u[h]++
      } else {
        if (h === a$length - 1) {
          if (t.patternMatchVariance(u, a, t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE) {
            return new Int32Array([s, f])
          }
          s += u[0] + u[1]
          l.a.arraycopy(u, 2, u, 0, h - 1)
          u[h - 1] = 0
          u[h] = 0
          h--
        } else {
          h++
        }
        u[h] = 1
        g = !g
      }
    }
    return h === a$length - 1 && t.patternMatchVariance(u, a, t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE ? new Int32Array([s, f - 1]) : null
  }
  t.patternMatchVariance = function (t, e, r) {
    for (var /* [auto-meaningful-name] */t$length = t.length, o = 0, i = 0, a = 0; a < t$length; a++) {
      o += t[a]
      i += e[a]
    }
    if (o < i) {
      return 1 / 0
    }
    var u = o / i
    r *= u
    for (var s = 0, c = 0; c < t$length; c++) {
      var f = t[c]
      var h = e[c] * u
      var l = f > h ? f - h : h - f
      if (l > r) {
        return 1 / 0
      }
      s += l
    }
    return s / o
  }
  t.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5])
  t.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3])
  t.MAX_AVG_VARIANCE = .42
  t.MAX_INDIVIDUAL_VARIANCE = .8
  t.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3])
  t.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1])
  t.MAX_PIXEL_DRIFT = 3
  t.MAX_PATTERN_DRIFT = 5
  t.SKIPPED_ROW_COUNT_MAX = 25
  t.ROW_STEP = 5
  t.BARCODE_MIN_HEIGHT = 10
  return t
}()
var w = require("../118")
var v = require("../603")
var _ = function () {
  function t(e, r, n, o, i) {
    if (e instanceof t) {
      this.constructor_2(e)
    } else {
      this.constructor_1(e, r, n, o, i)
    }
  }
  t.prototype.constructor_1 = function (t, e, r, n, o) {
    var i = null == e || null == r
    var u = null == n || null == o
    if (i && u) {
      throw new a.a()
    }
    if (i) {
      e = new h.a(0, n.getY())
      r = new h.a(0, o.getY())
    } else {
      if (u) {
        n = new h.a(t.getWidth() - 1, e.getY())
        o = new h.a(t.getWidth() - 1, r.getY())
      }
    }
    this.image = t
    this.topLeft = e
    this.bottomLeft = r
    this.topRight = n
    this.bottomRight = o
    this.minX = Math.trunc(Math.min(e.getX(), r.getX()))
    this.maxX = Math.trunc(Math.max(n.getX(), o.getX()))
    this.minY = Math.trunc(Math.min(e.getY(), n.getY()))
    this.maxY = Math.trunc(Math.max(r.getY(), o.getY()))
  }
  t.prototype.constructor_2 = function (t) {
    this.image = t.image
    this.topLeft = t.getTopLeft()
    this.bottomLeft = t.getBottomLeft()
    this.topRight = t.getTopRight()
    this.bottomRight = t.getBottomRight()
    this.minX = t.getMinX()
    this.maxX = t.getMaxX()
    this.minY = t.getMinY()
    this.maxY = t.getMaxY()
  }
  t.merge = function (e, r) {
    return null == e ? r : null == r ? e : new t(e.image, e.topLeft, e.bottomLeft, r.topRight, r.bottomRight)
  }
  t.prototype.addMissingRows = function (e, r, n) {
    var /* [auto-meaningful-name] */this$topLeft = this.topLeft
    var /* [auto-meaningful-name] */this$bottomLeft = this.bottomLeft
    var /* [auto-meaningful-name] */this$topRight = this.topRight
    var /* [auto-meaningful-name] */this$bottomRight = this.bottomRight
    if (e > 0) {
      var s = n ? this.topLeft : this.topRight
      var c = Math.trunc(s.getY() - e)
      if (c < 0) {
        c = 0
      }
      var f = new h.a(s.getX(), c)
      if (n) {
        this$topLeft = f
      } else {
        this$topRight = f
      }
    }
    if (r > 0) {
      var l = n ? this.bottomLeft : this.bottomRight
      var d = Math.trunc(l.getY() + r)
      if (d >= this.image.getHeight()) {
        d = this.image.getHeight() - 1
      }
      var p = new h.a(l.getX(), d)
      if (n) {
        this$bottomLeft = p
      } else {
        this$bottomRight = p
      }
    }
    return new t(this.image, this$topLeft, this$bottomLeft, this$topRight, this$bottomRight)
  }
  t.prototype.getMinX = function () {
    return this.minX
  }
  t.prototype.getMaxX = function () {
    return this.maxX
  }
  t.prototype.getMinY = function () {
    return this.minY
  }
  t.prototype.getMaxY = function () {
    return this.maxY
  }
  t.prototype.getTopLeft = function () {
    return this.topLeft
  }
  t.prototype.getTopRight = function () {
    return this.topRight
  }
  t.prototype.getBottomLeft = function () {
    return this.bottomLeft
  }
  t.prototype.getBottomRight = function () {
    return this.bottomRight
  }
  return t
}()
var m = function () {
  function t(t, e, r, n) {
    this.columnCount = t
    this.errorCorrectionLevel = n
    this.rowCountUpperPart = e
    this.rowCountLowerPart = r
    this.rowCount = e + r
  }
  t.prototype.getColumnCount = function () {
    return this.columnCount
  }
  t.prototype.getErrorCorrectionLevel = function () {
    return this.errorCorrectionLevel
  }
  t.prototype.getRowCount = function () {
    return this.rowCount
  }
  t.prototype.getRowCountUpperPart = function () {
    return this.rowCountUpperPart
  }
  t.prototype.getRowCountLowerPart = function () {
    return this.rowCountLowerPart
  }
  return t
}()
var A = function () {
  function t() {
    this.buffer = ""
  }
  t.form = function (t, e) {
    var r = -1
    return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function (t, n, o, i, a, u) {
      if ("%%" === t) {
        return "%"
      }
      if (undefined !== e[++r]) {
        t = i ? parseInt(i.substr(1)) : undefined
        var s
        var c = a ? parseInt(a.substr(1)) : undefined
        switch (u) {
          case "s":
            s = e[r]
            break
          case "c":
            s = e[r][0]
            break
          case "f":
            s = parseFloat(e[r]).toFixed(t)
            break
          case "p":
            s = parseFloat(e[r]).toPrecision(t)
            break
          case "e":
            s = parseFloat(e[r]).toExponential(t)
            break
          case "x":
            s = parseInt(e[r]).toString(c || 16)
            break
          case "d":
            s = parseFloat(parseInt(e[r], c || 10).toPrecision(t)).toFixed(0)
        }
        s = "object" === typeof s ? JSON.stringify(s) : (+s).toString(c)
        for (var f = parseInt(o), h = o && o[0] + "" === "0" ? "0" : " "; s.length < f;) {
          s = undefined !== n ? s + h : h + s
        }
        return s
      }
    })
  }
  t.prototype.format = function (e) {
    for (var r = [], n = 1; n < arguments.length; n++) {
      r[n - 1] = arguments[n]
    }
    this.buffer += t.form(e, r)
  }
  t.prototype.toString = function () {
    return this.buffer
  }
  return t
}()
var E = function (t) {
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
var C = function () {
  function t(t) {
    this.boundingBox = new _(t)
    this.codewords = new Array(t.getMaxY() - t.getMinY() + 1)
  }
  t.prototype.getCodewordNearby = function (e) {
    var r = this.getCodeword(e)
    if (null != r) {
      return r
    }
    for (var n = 1; n < t.MAX_NEARBY_DISTANCE; n++) {
      var o = this.imageRowToCodewordIndex(e) - n
      if (o >= 0 && null != (r = this.codewords[o])) {
        return r
      }
      if ((o = this.imageRowToCodewordIndex(e) + n) < this.codewords.length && null != (r = this.codewords[o])) {
        return r
      }
    }
    return null
  }
  t.prototype.imageRowToCodewordIndex = function (t) {
    return t - this.boundingBox.getMinY()
  }
  t.prototype.setCodeword = function (t, e) {
    this.codewords[this.imageRowToCodewordIndex(t)] = e
  }
  t.prototype.getCodeword = function (t) {
    return this.codewords[this.imageRowToCodewordIndex(t)]
  }
  t.prototype.getBoundingBox = function () {
    return this.boundingBox
  }
  t.prototype.getCodewords = function () {
    return this.codewords
  }
  t.prototype.toString = function () {
    var t
    var /* [auto-meaningful-name] */o$return
    var r = new A()
    var n = 0
    try {
      for (var o = E(this.codewords), i = o.next(); !i.done; i = o.next()) {
        var /* [auto-meaningful-name] */i$value = i.value
        if (null != i$value) {
          r.format("%3d: %3d|%3d%n", n++, i$value.getRowNumber(), i$value.getValue())
        } else {
          r.format("%3d:    |   %n", n++)
        }
      }
    } catch (u) {
      t = {
        error: u
      }
    } finally {
      try {
        if (i && !i.done && (o$return = o.return)) {
          o$return.call(o)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    return r.toString()
  }
  t.MAX_NEARBY_DISTANCE = 5
  return t
}()
var I = function (t) {
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
var S = function (t, e) {
  var r = "function" === typeof Symbol && t[Symbol.iterator]
  if (!r) {
    return t
  }
  var n
  var o
  var i = r.call(t)
  var a = []
  try {
    for (; (undefined === e || e-- > 0) && !(n = i.next()).done;) {
      a.push(n.value)
    }
  } catch (u) {
    o = {
      error: u
    }
  } finally {
    try {
      if (n && !n.done && (r = i.return)) {
        r.call(i)
      }
    } finally {
      if (o) {
        throw o.error
      }
    }
  }
  return a
}
var T = function () {
  function t() {
    this.values = new Map()
  }
  t.prototype.setValue = function (t) {
    t = Math.trunc(t)
    var e = this.values.get(t)
    if (null == e) {
      e = 0
    }
    e++
    this.values.set(t, e)
  }
  t.prototype.getValue = function () {
    var t
    var /* [auto-meaningful-name] */i$return
    var r = -1
    var n = new Array()
    var o = function (t, e) {
      var o = function () {
        return t
      }
      var i = function () {
        return e
      }
      if (i() > r) {
        r = i();
        (n = []).push(o())
      } else {
        if (i() === r) {
          n.push(o())
        }
      }
    }
    try {
      for (var i = I(this.values.entries()), a = i.next(); !a.done; a = i.next()) {
        var u = S(a.value, 2)
        o(u[0], u[1])
      }
    } catch (c) {
      t = {
        error: c
      }
    } finally {
      try {
        if (a && !a.done && (i$return = i.return)) {
          i$return.call(i)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    return s.a.toIntArray(n)
  }
  t.prototype.getConfidence = function (t) {
    return this.values.get(t)
  }
  return t
}()
var O = function () {
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
var b = function (t) {
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
var R = function (t) {
  function e(e, r) {
    var n = t.call(this, e) || this
    n._isLeft = r
    return n
  }
  O(e, t)
  e.prototype.setRowNumbers = function () {
    var t
    var /* [auto-meaningful-name] */r$return
    try {
      for (var r = b(this.getCodewords()), n = r.next(); !n.done; n = r.next()) {
        var /* [auto-meaningful-name] */n$value = n.value
        if (null != n$value) {
          n$value.setRowNumberAsRowIndicatorColumn()
        }
      }
    } catch (i) {
      t = {
        error: i
      }
    } finally {
      try {
        if (n && !n.done && (r$return = r.return)) {
          r$return.call(r)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
  }
  e.prototype.adjustCompleteIndicatorColumnRowNumbers = function (t) {
    var e = this.getCodewords()
    this.setRowNumbers()
    this.removeIncorrectCodewords(e, t)
    for (var r = this.getBoundingBox(), n = this._isLeft ? r.getTopLeft() : r.getTopRight(), o = this._isLeft ? r.getBottomLeft() : r.getBottomRight(), i = this.imageRowToCodewordIndex(Math.trunc(n.getY())), a = this.imageRowToCodewordIndex(Math.trunc(o.getY())), u = -1, s = 1, c = 0, f = i; f < a; f++) {
      if (null != e[f]) {
        var h = e[f]
        var l = h.getRowNumber() - u
        if (0 === l) {
          c++
        } else if (1 === l) {
          s = Math.max(s, c)
          c = 1
          u = h.getRowNumber()
        } else if (l < 0 || h.getRowNumber() >= t.getRowCount() || l > f) {
          e[f] = null
        } else {
          for (var d = undefined, p = (d = s > 2 ? (s - 2) * l : l) >= f, g = 1; g <= d && !p; g++) {
            p = null != e[f - g]
          }
          if (p) {
            e[f] = null
          } else {
            u = h.getRowNumber()
            c = 1
          }
        }
      }
    }
  }
  e.prototype.getRowHeights = function () {
    var t
    var /* [auto-meaningful-name] */o$return
    var r = this.getBarcodeMetadata()
    if (null == r) {
      return null
    }
    this.adjustIncompleteIndicatorColumnRowNumbers(r)
    var n = new Int32Array(r.getRowCount())
    try {
      for (var o = b(this.getCodewords()), i = o.next(); !i.done; i = o.next()) {
        var /* [auto-meaningful-name] */i$value = i.value
        if (null != i$value) {
          var u = i$value.getRowNumber()
          if (u >= n.length) {
            continue
          }
          n[u]++
        }
      }
    } catch (s) {
      t = {
        error: s
      }
    } finally {
      try {
        if (i && !i.done && (o$return = o.return)) {
          o$return.call(o)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    return n
  }
  e.prototype.adjustIncompleteIndicatorColumnRowNumbers = function (t) {
    for (var e = this.getBoundingBox(), r = this._isLeft ? e.getTopLeft() : e.getTopRight(), n = this._isLeft ? e.getBottomLeft() : e.getBottomRight(), o = this.imageRowToCodewordIndex(Math.trunc(r.getY())), i = this.imageRowToCodewordIndex(Math.trunc(n.getY())), a = this.getCodewords(), u = -1, s = 1, c = 0, f = o; f < i; f++) {
      if (null != a[f]) {
        var h = a[f]
        h.setRowNumberAsRowIndicatorColumn()
        var l = h.getRowNumber() - u
        if (0 === l) {
          c++
        } else {
          if (1 === l) {
            s = Math.max(s, c)
            c = 1
            u = h.getRowNumber()
          } else {
            if (h.getRowNumber() >= t.getRowCount()) {
              a[f] = null
            } else {
              u = h.getRowNumber()
              c = 1
            }
          }
        }
      }
    }
  }
  e.prototype.getBarcodeMetadata = function () {
    var t
    var /* [auto-meaningful-name] */u$return
    var r = this.getCodewords()
    var n = new T()
    var o = new T()
    var i = new T()
    var a = new T()
    try {
      for (var u = b(r), c = u.next(); !c.done; c = u.next()) {
        var /* [auto-meaningful-name] */c$value = c.value
        if (null != c$value) {
          c$value.setRowNumberAsRowIndicatorColumn()
          var h = c$value.getValue() % 30
          var l = c$value.getRowNumber()
          switch (this._isLeft || (l += 2), l % 3) {
            case 0:
              o.setValue(3 * h + 1)
              break
            case 1:
              a.setValue(h / 3)
              i.setValue(h % 3)
              break
            case 2:
              n.setValue(h + 1)
          }
        }
      }
    } catch (p) {
      t = {
        error: p
      }
    } finally {
      try {
        if (c && !c.done && (u$return = u.return)) {
          u$return.call(u)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    if (0 === n.getValue().length || 0 === o.getValue().length || 0 === i.getValue().length || 0 === a.getValue().length || n.getValue()[0] < 1 || o.getValue()[0] + i.getValue()[0] < s.a.MIN_ROWS_IN_BARCODE || o.getValue()[0] + i.getValue()[0] > s.a.MAX_ROWS_IN_BARCODE) {
      return null
    }
    var d = new m(n.getValue()[0], o.getValue()[0], i.getValue()[0], a.getValue()[0])
    this.removeIncorrectCodewords(r, d)
    return d
  }
  e.prototype.removeIncorrectCodewords = function (t, e) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r]
      if (null != t[r]) {
        var o = n.getValue() % 30
        var i = n.getRowNumber()
        if (i > e.getRowCount()) {
          t[r] = null
        } else {
          switch (this._isLeft || (i += 2), i % 3) {
            case 0:
              if (3 * o + 1 !== e.getRowCountUpperPart()) {
                t[r] = null
              }
              break
            case 1:
              if (!(Math.trunc(o / 3) === e.getErrorCorrectionLevel() && o % 3 === e.getRowCountLowerPart())) {
                t[r] = null
              }
              break
            case 2:
              if (o + 1 !== e.getColumnCount()) {
                t[r] = null
              }
          }
        }
      }
    }
  }
  e.prototype.isLeft = function () {
    return this._isLeft
  }
  e.prototype.toString = function () {
    return "IsLeft: " + this._isLeft + "\n" + t.prototype.toString.call(this)
  }
  return e
}(C)
var N = function (t) {
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
var D = function () {
  function t(t, e) {
    this.ADJUST_ROW_NUMBER_SKIP = 2
    this.barcodeMetadata = t
    this.barcodeColumnCount = t.getColumnCount()
    this.boundingBox = e
    this.detectionResultColumns = new Array(this.barcodeColumnCount + 2)
  }
  t.prototype.getDetectionResultColumns = function () {
    this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0])
    this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1])
    var t
    var /* [auto-meaningful-name] */s$a$MAX_CODEWORDS_IN_BARCODE = s.a.MAX_CODEWORDS_IN_BARCODE
    do {
      t = s$a$MAX_CODEWORDS_IN_BARCODE
      s$a$MAX_CODEWORDS_IN_BARCODE = this.adjustRowNumbersAndGetCount()
    } while (s$a$MAX_CODEWORDS_IN_BARCODE > 0 && s$a$MAX_CODEWORDS_IN_BARCODE < t)
    return this.detectionResultColumns
  }
  t.prototype.adjustIndicatorColumnRowNumbers = function (t) {
    if (null != t) {
      t.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata)
    }
  }
  t.prototype.adjustRowNumbersAndGetCount = function () {
    var t = this.adjustRowNumbersByRow()
    if (0 === t) {
      return 0
    }
    for (var e = 1; e < this.barcodeColumnCount + 1; e++) {
      for (var r = this.detectionResultColumns[e].getCodewords(), n = 0; n < r.length; n++) {
        if (null != r[n]) {
          if (!r[n].hasValidRowNumber()) {
            this.adjustRowNumbers(e, n, r)
          }
        }
      }
    }
    return t
  }
  t.prototype.adjustRowNumbersByRow = function () {
    this.adjustRowNumbersFromBothRI()
    return this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI()
  }
  t.prototype.adjustRowNumbersFromBothRI = function () {
    if (null != this.detectionResultColumns[0] && null != this.detectionResultColumns[this.barcodeColumnCount + 1]) {
      for (var t = this.detectionResultColumns[0].getCodewords(), e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), r = 0; r < t.length; r++) {
        if (null != t[r] && null != e[r] && t[r].getRowNumber() === e[r].getRowNumber()) {
          for (var n = 1; n <= this.barcodeColumnCount; n++) {
            var o = this.detectionResultColumns[n].getCodewords()[r]
            if (null != o) {
              o.setRowNumber(t[r].getRowNumber())
              if (!o.hasValidRowNumber()) {
                this.detectionResultColumns[n].getCodewords()[r] = null
              }
            }
          }
        }
      }
    }
  }
  t.prototype.adjustRowNumbersFromRRI = function () {
    if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) {
      return 0
    }
    for (var e = 0, r = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), n = 0; n < r.length; n++) {
      if (null != r[n]) {
        for (var o = r[n].getRowNumber(), i = 0, a = this.barcodeColumnCount + 1; a > 0 && i < this.ADJUST_ROW_NUMBER_SKIP; a--) {
          var u = this.detectionResultColumns[a].getCodewords()[n]
          if (null != u) {
            i = t.adjustRowNumberIfValid(o, i, u)
            if (!u.hasValidRowNumber()) {
              e++
            }
          }
        }
      }
    }
    return e
  }
  t.prototype.adjustRowNumbersFromLRI = function () {
    if (null == this.detectionResultColumns[0]) {
      return 0
    }
    for (var e = 0, r = this.detectionResultColumns[0].getCodewords(), n = 0; n < r.length; n++) {
      if (null != r[n]) {
        for (var o = r[n].getRowNumber(), i = 0, a = 1; a < this.barcodeColumnCount + 1 && i < this.ADJUST_ROW_NUMBER_SKIP; a++) {
          var u = this.detectionResultColumns[a].getCodewords()[n]
          if (null != u) {
            i = t.adjustRowNumberIfValid(o, i, u)
            if (!u.hasValidRowNumber()) {
              e++
            }
          }
        }
      }
    }
    return e
  }
  t.adjustRowNumberIfValid = function (t, e, r) {
    if (!(null == r || r.hasValidRowNumber())) {
      if (r.isValidRowNumber(t)) {
        r.setRowNumber(t)
        e = 0
      } else {
        ++e
      }
    }
    return e
  }
  t.prototype.adjustRowNumbers = function (e, r, n) {
    var o
    var /* [auto-meaningful-name] */f$return
    var a = n[r]
    var u = this.detectionResultColumns[e - 1].getCodewords()
    var s = u
    if (null != this.detectionResultColumns[e + 1]) {
      s = this.detectionResultColumns[e + 1].getCodewords()
    }
    var c = new Array(14)
    c[2] = u[r]
    c[3] = s[r]
    if (r > 0) {
      c[0] = n[r - 1]
      c[4] = u[r - 1]
      c[5] = s[r - 1]
    }
    if (r > 1) {
      c[8] = n[r - 2]
      c[10] = u[r - 2]
      c[11] = s[r - 2]
    }
    if (r < n.length - 1) {
      c[1] = n[r + 1]
      c[6] = u[r + 1]
      c[7] = s[r + 1]
    }
    if (r < n.length - 2) {
      c[9] = n[r + 2]
      c[12] = u[r + 2]
      c[13] = s[r + 2]
    }
    try {
      for (var f = N(c), h = f.next(); !h.done; h = f.next()) {
        var /* [auto-meaningful-name] */h$value = h.value
        if (t.adjustRowNumber(a, h$value)) {
          return
        }
      }
    } catch (d) {
      o = {
        error: d
      }
    } finally {
      try {
        if (h && !h.done && (f$return = f.return)) {
          f$return.call(f)
        }
      } finally {
        if (o) {
          throw o.error
        }
      }
    }
  }
  t.adjustRowNumber = function (t, e) {
    return null != e && !(!e.hasValidRowNumber() || e.getBucket() !== t.getBucket()) && (t.setRowNumber(e.getRowNumber()), true)
  }
  t.prototype.getBarcodeColumnCount = function () {
    return this.barcodeColumnCount
  }
  t.prototype.getBarcodeRowCount = function () {
    return this.barcodeMetadata.getRowCount()
  }
  t.prototype.getBarcodeECLevel = function () {
    return this.barcodeMetadata.getErrorCorrectionLevel()
  }
  t.prototype.setBoundingBox = function (t) {
    this.boundingBox = t
  }
  t.prototype.getBoundingBox = function () {
    return this.boundingBox
  }
  t.prototype.setDetectionResultColumn = function (t, e) {
    this.detectionResultColumns[t] = e
  }
  t.prototype.getDetectionResultColumn = function (t) {
    return this.detectionResultColumns[t]
  }
  t.prototype.toString = function () {
    var t = this.detectionResultColumns[0]
    if (null == t) {
      t = this.detectionResultColumns[this.barcodeColumnCount + 1]
    }
    for (var e = new A(), r = 0; r < t.getCodewords().length; r++) {
      e.format("CW %3d:", r)
      for (var n = 0; n < this.barcodeColumnCount + 2; n++) {
        if (null != this.detectionResultColumns[n]) {
          var o = this.detectionResultColumns[n].getCodewords()[r]
          if (null != o) {
            e.format(" %3d|%3d", o.getRowNumber(), o.getValue())
          } else {
            e.format("    |   ")
          }
        } else {
          e.format("    |   ")
        }
      }
      e.format("%n")
    }
    return e.toString()
  }
  return t
}()
var M = function () {
  function t(e, r, n, o) {
    this.rowNumber = t.BARCODE_ROW_UNKNOWN
    this.startX = Math.trunc(e)
    this.endX = Math.trunc(r)
    this.bucket = Math.trunc(n)
    this.value = Math.trunc(o)
  }
  t.prototype.hasValidRowNumber = function () {
    return this.isValidRowNumber(this.rowNumber)
  }
  t.prototype.isValidRowNumber = function (e) {
    return e !== t.BARCODE_ROW_UNKNOWN && this.bucket === e % 3 * 3
  }
  t.prototype.setRowNumberAsRowIndicatorColumn = function () {
    this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3))
  }
  t.prototype.getWidth = function () {
    return this.endX - this.startX
  }
  t.prototype.getStartX = function () {
    return this.startX
  }
  t.prototype.getEndX = function () {
    return this.endX
  }
  t.prototype.getBucket = function () {
    return this.bucket
  }
  t.prototype.getValue = function () {
    return this.value
  }
  t.prototype.getRowNumber = function () {
    return this.rowNumber
  }
  t.prototype.setRowNumber = function (t) {
    this.rowNumber = t
  }
  t.prototype.toString = function () {
    return this.rowNumber + "|" + this.value
  }
  t.BARCODE_ROW_UNKNOWN = -1
  return t
}()
var P = require("../73/515")
var B = function () {
  function t() {}
  t.initialize = function () {
    for (var e = 0; e < s.a.SYMBOL_TABLE.length; e++) {
      for (var r = s.a.SYMBOL_TABLE[e], n = 1 & r, o = 0; o < s.a.BARS_IN_MODULE; o++) {
        for (var i = 0; (1 & r) === n;) {
          i += 1
          r >>= 1
        }
        n = 1 & r
        if (!t.RATIOS_TABLE[e]) {
          t.RATIOS_TABLE[e] = new Array(s.a.BARS_IN_MODULE)
        }
        t.RATIOS_TABLE[e][s.a.BARS_IN_MODULE - o - 1] = Math.fround(i / s.a.MODULES_IN_CODEWORD)
      }
    }
    this.bSymbolTableReady = true
  }
  t.getDecodedValue = function (e) {
    var r = t.getDecodedCodewordValue(t.sampleBitCounts(e))
    return -1 !== r ? r : t.getClosestDecodedValue(e)
  }
  t.sampleBitCounts = function (t) {
    for (var e = w.a.sum(t), r = new Int32Array(s.a.BARS_IN_MODULE), n = 0, o = 0, i = 0; i < s.a.MODULES_IN_CODEWORD; i++) {
      var a = e / (2 * s.a.MODULES_IN_CODEWORD) + i * e / s.a.MODULES_IN_CODEWORD
      if (o + t[n] <= a) {
        o += t[n]
        n++
      }
      r[n]++
    }
    return r
  }
  t.getDecodedCodewordValue = function (e) {
    var r = t.getBitValue(e)
    return -1 === s.a.getCodeword(r) ? -1 : r
  }
  t.getBitValue = function (t) {
    for (var e = 0, r = 0; r < t.length; r++) {
      for (var n = 0; n < t[r]; n++) {
        e = e << 1 | (r % 2 === 0 ? 1 : 0)
      }
    }
    return Math.trunc(e)
  }
  t.getClosestDecodedValue = function (e) {
    var r = w.a.sum(e)
    var n = new Array(s.a.BARS_IN_MODULE)
    if (r > 1) {
      for (var o = 0; o < n.length; o++) {
        n[o] = Math.fround(e[o] / r)
      }
    }
    var /* [auto-meaningful-name] */P$a$MAX_VALUE = P.a.MAX_VALUE
    var a = -1
    if (!this.bSymbolTableReady) {
      t.initialize()
    }
    for (var u = 0; u < t.RATIOS_TABLE.length; u++) {
      for (var c = 0, f = t.RATIOS_TABLE[u], h = 0; h < s.a.BARS_IN_MODULE; h++) {
        var l = Math.fround(f[h] - n[h])
        if ((c += Math.fround(l * l)) >= P$a$MAX_VALUE) {
          break
        }
      }
      if (c < P$a$MAX_VALUE) {
        P$a$MAX_VALUE = c
        a = s.a.SYMBOL_TABLE[u]
      }
    }
    return a
  }
  t.bSymbolTableReady = false
  t.RATIOS_TABLE = new Array(s.a.SYMBOL_TABLE.length).map(function (t) {
    return new Array(s.a.BARS_IN_MODULE)
  })
  return t
}()
var L = require("../592/index")
var F = function (t) {
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
var x = function () {
  function t() {}
  t.decode = function (e, r, n, o, i, u, s) {
    for (var c, f = new _(e, r, n, o, i), h = null, l = null, d = true;; d = false) {
      if (null != r) {
        h = t.getRowIndicatorColumn(e, f, r, true, u, s)
      }
      if (null != o) {
        l = t.getRowIndicatorColumn(e, f, o, false, u, s)
      }
      if (null == (c = t.merge(h, l))) {
        throw a.a.getNotFoundInstance()
      }
      var p = c.getBoundingBox()
      if (!d || null == p || !(p.getMinY() < f.getMinY() || p.getMaxY() > f.getMaxY())) {
        break
      }
      f = p
    }
    c.setBoundingBox(f)
    var g = c.getBarcodeColumnCount() + 1
    c.setDetectionResultColumn(0, h)
    c.setDetectionResultColumn(g, l)
    for (var y = null != h, w = 1; w <= g; w++) {
      var v = y ? w : g - w
      if (undefined === c.getDetectionResultColumn(v)) {
        var m = undefined
        m = 0 === v || v === g ? new R(f, 0 === v) : new C(f)
        c.setDetectionResultColumn(v, m)
        for (var A = -1, E = A, I = f.getMinY(); I <= f.getMaxY(); I++) {
          if ((A = t.getStartColumn(c, v, I, y)) < 0 || A > f.getMaxX()) {
            if (-1 === E) {
              continue
            }
            A = E
          }
          var S = t.detectCodeword(e, f.getMinX(), f.getMaxX(), y, A, I, u, s)
          if (null != S) {
            m.setCodeword(I, S)
            E = A
            u = Math.min(u, S.getWidth())
            s = Math.max(s, S.getWidth())
          }
        }
      }
    }
    return t.createDecoderResult(c)
  }
  t.merge = function (e, r) {
    if (null == e && null == r) {
      return null
    }
    var n = t.getBarcodeMetadata(e, r)
    if (null == n) {
      return null
    }
    var o = _.merge(t.adjustBoundingBox(e), t.adjustBoundingBox(r))
    return new D(n, o)
  }
  t.adjustBoundingBox = function (e) {
    var r
    var /* [auto-meaningful-name] */u$return
    if (null == e) {
      return null
    }
    var o = e.getRowHeights()
    if (null == o) {
      return null
    }
    var i = t.getMax(o)
    var a = 0
    try {
      for (var u = F(o), s = u.next(); !s.done; s = u.next()) {
        var /* [auto-meaningful-name] */s$value = s.value
        a += i - s$value
        if (s$value > 0) {
          break
        }
      }
    } catch (d) {
      r = {
        error: d
      }
    } finally {
      try {
        if (s && !s.done && (u$return = u.return)) {
          u$return.call(u)
        }
      } finally {
        if (r) {
          throw r.error
        }
      }
    }
    for (var f = e.getCodewords(), h = 0; a > 0 && null == f[h]; h++) {
      a--
    }
    var l = 0
    for (h = o.length - 1; h >= 0 && (l += i - o[h], !(o[h] > 0)); h--) {
      ;
    }
    for (h = f.length - 1; l > 0 && null == f[h]; h--) {
      l--
    }
    return e.getBoundingBox().addMissingRows(a, l, e.isLeft())
  }
  t.getMax = function (t) {
    var e
    var /* [auto-meaningful-name] */o$return
    var n = -1
    try {
      for (var o = F(t), i = o.next(); !i.done; i = o.next()) {
        var /* [auto-meaningful-name] */i$value = i.value
        n = Math.max(n, i$value)
      }
    } catch (u) {
      e = {
        error: u
      }
    } finally {
      try {
        if (i && !i.done && (o$return = o.return)) {
          o$return.call(o)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    return n
  }
  t.getBarcodeMetadata = function (t, e) {
    var r
    var n
    return null == t || null == (r = t.getBarcodeMetadata()) ? null == e ? null : e.getBarcodeMetadata() : null == e || null == (n = e.getBarcodeMetadata()) ? r : r.getColumnCount() !== n.getColumnCount() && r.getErrorCorrectionLevel() !== n.getErrorCorrectionLevel() && r.getRowCount() !== n.getRowCount() ? null : r
  }
  t.getRowIndicatorColumn = function (e, r, n, o, i, a) {
    for (var u = new R(r, o), s = 0; s < 2; s++) {
      for (var c = 0 === s ? 1 : -1, f = Math.trunc(Math.trunc(n.getX())), h = Math.trunc(Math.trunc(n.getY())); h <= r.getMaxY() && h >= r.getMinY(); h += c) {
        var l = t.detectCodeword(e, 0, e.getWidth(), o, f, h, i, a)
        if (null != l) {
          u.setCodeword(h, l)
          f = o ? l.getStartX() : l.getEndX()
        }
      }
    }
    return u
  }
  t.adjustCodewordCount = function (e, r) {
    var n = r[0][1]
    var o = n.getValue()
    var i = e.getBarcodeColumnCount() * e.getBarcodeRowCount() - t.getNumberOfECCodeWords(e.getBarcodeECLevel())
    if (0 === o.length) {
      if (i < 1 || i > s.a.MAX_CODEWORDS_IN_BARCODE) {
        throw a.a.getNotFoundInstance()
      }
      n.setValue(i)
    } else if (o[0] !== i) {
      n.setValue(i)
    }
  }
  t.createDecoderResult = function (e) {
    var r = t.createBarcodeMatrix(e)
    t.adjustCodewordCount(e, r)
    for (var n = new Array(), o = new Int32Array(e.getBarcodeRowCount() * e.getBarcodeColumnCount()), i = [], a = new Array(), u = 0; u < e.getBarcodeRowCount(); u++) {
      for (var c = 0; c < e.getBarcodeColumnCount(); c++) {
        var f = r[u][c + 1].getValue()
        var h = u * e.getBarcodeColumnCount() + c
        if (0 === f.length) {
          n.push(h)
        } else {
          if (1 === f.length) {
            o[h] = f[0]
          } else {
            a.push(h)
            i.push(f)
          }
        }
      }
    }
    for (var l = new Array(i.length), d = 0; d < l.length; d++) {
      l[d] = i[d]
    }
    return t.createDecoderResultFromAmbiguousValues(e.getBarcodeECLevel(), o, s.a.toIntArray(n), s.a.toIntArray(a), l)
  }
  t.createDecoderResultFromAmbiguousValues = function (e, r, n, i, a) {
    for (var u = new Int32Array(i.length), s = 100; s-- > 0;) {
      for (var c = 0; c < u.length; c++) {
        r[i[c]] = a[c][u[c]]
      }
      try {
        return t.decodeCodewords(r, e, n)
      } catch (f) {
        if (!(f instanceof o.a)) {
          throw f
        }
      }
      if (0 === u.length) {
        throw o.a.getChecksumInstance()
      }
      for (c = 0; c < u.length; c++) {
        if (u[c] < a[c].length - 1) {
          u[c]++
          break
        }
        u[c] = 0
        if (c === u.length - 1) {
          throw o.a.getChecksumInstance()
        }
      }
    }
    throw o.a.getChecksumInstance()
  }
  t.createBarcodeMatrix = function (t) {
    for (var e, /* [auto-meaningful-name] */c$return, n, /* [auto-meaningful-name] */l$return, i = Array.from({
        length: t.getBarcodeRowCount()
      }, function () {
        return new Array(t.getBarcodeColumnCount() + 2)
      }), a = 0; a < i.length; a++) {
      for (var u = 0; u < i[a].length; u++) {
        i[a][u] = new T()
      }
    }
    var s = 0
    try {
      for (var c = F(t.getDetectionResultColumns()), f = c.next(); !f.done; f = c.next()) {
        var /* [auto-meaningful-name] */f$value = f.value
        if (null != f$value) {
          try {
            for (n = undefined, l = F(f$value.getCodewords()), d = l.next(), undefined; !d.done; d = l.next()) {
              var l
              var d
              var /* [auto-meaningful-name] */d$value = d.value
              if (null != d$value) {
                var g = d$value.getRowNumber()
                if (g >= 0) {
                  if (g >= i.length) {
                    continue
                  }
                  i[g][s].setValue(d$value.getValue())
                }
              }
            }
          } catch (y) {
            n = {
              error: y
            }
          } finally {
            try {
              if (d && !d.done && (l$return = l.return)) {
                l$return.call(l)
              }
            } finally {
              if (n) {
                throw n.error
              }
            }
          }
        }
        s++
      }
    } catch (w) {
      e = {
        error: w
      }
    } finally {
      try {
        if (f && !f.done && (c$return = c.return)) {
          c$return.call(c)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    return i
  }
  t.isValidBarcodeColumn = function (t, e) {
    return e >= 0 && e <= t.getBarcodeColumnCount() + 1
  }
  t.getStartColumn = function (e, r, n, o) {
    var i
    var /* [auto-meaningful-name] */f$return
    var u = o ? 1 : -1
    var s = null
    if (t.isValidBarcodeColumn(e, r - u)) {
      s = e.getDetectionResultColumn(r - u).getCodeword(n)
    }
    if (null != s) {
      return o ? s.getEndX() : s.getStartX()
    }
    if (null != (s = e.getDetectionResultColumn(r).getCodewordNearby(n))) {
      return o ? s.getStartX() : s.getEndX()
    }
    if (t.isValidBarcodeColumn(e, r - u)) {
      s = e.getDetectionResultColumn(r - u).getCodewordNearby(n)
    }
    if (null != s) {
      return o ? s.getEndX() : s.getStartX()
    }
    for (var c = 0; t.isValidBarcodeColumn(e, r - u);) {
      r -= u
      try {
        for (i = undefined, f = F(e.getDetectionResultColumn(r).getCodewords()), h = f.next(), undefined; !h.done; h = f.next()) {
          var f
          var h
          var /* [auto-meaningful-name] */h$value = h.value
          if (null != h$value) {
            return (o ? h$value.getEndX() : h$value.getStartX()) + u * c * (h$value.getEndX() - h$value.getStartX())
          }
        }
      } catch (d) {
        i = {
          error: d
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
      c++
    }
    return o ? e.getBoundingBox().getMinX() : e.getBoundingBox().getMaxX()
  }
  t.detectCodeword = function (e, r, n, o, i, a, u, c) {
    i = t.adjustCodewordStartColumn(e, r, n, o, i, a)
    var f
    var h = t.getModuleBitCount(e, r, n, o, i, a)
    if (null == h) {
      return null
    }
    var l = w.a.sum(h)
    if (o) {
      f = i + l
    } else {
      for (var d = 0; d < h.length / 2; d++) {
        var p = h[d]
        h[d] = h[h.length - 1 - d]
        h[h.length - 1 - d] = p
      }
      i = (f = i) - l
    }
    if (!t.checkCodewordSkew(l, u, c)) {
      return null
    }
    var g = B.getDecodedValue(h)
    var y = s.a.getCodeword(g)
    return -1 === y ? null : new M(i, f, t.getCodewordBucketNumber(g), y)
  }
  t.getModuleBitCount = function (t, e, r, n, o, i) {
    for (var a = o, u = new Int32Array(8), s = 0, c = n ? 1 : -1, f = n; (n ? a < r : a >= e) && s < u.length;) {
      if (t.get(a, i) === f) {
        u[s]++
        a += c
      } else {
        s++
        f = !f
      }
    }
    return s === u.length || a === (n ? r : e) && s === u.length - 1 ? u : null
  }
  t.getNumberOfECCodeWords = function (t) {
    return 2 << t
  }
  t.adjustCodewordStartColumn = function (e, r, n, o, i, a) {
    for (var u = i, s = o ? -1 : 1, c = 0; c < 2; c++) {
      for (; (o ? u >= r : u < n) && o === e.get(u, a);) {
        if (Math.abs(i - u) > t.CODEWORD_SKEW_SIZE) {
          return i
        }
        u += s
      }
      s = -s
      o = !o
    }
    return u
  }
  t.checkCodewordSkew = function (e, r, n) {
    return r - t.CODEWORD_SKEW_SIZE <= e && e <= n + t.CODEWORD_SKEW_SIZE
  }
  t.decodeCodewords = function (e, r, n) {
    if (0 === e.length) {
      throw i.a.getFormatInstance()
    }
    var o = 1 << r + 1
    var a = t.correctErrors(e, n, o)
    t.verifyCodewordCount(e, o)
    var u = L.a.decode(e, "" + r)
    u.setErrorsCorrected(a)
    u.setErasures(n.length)
    return u
  }
  t.correctErrors = function (e, r, n) {
    if (null != r && r.length > n / 2 + t.MAX_ERRORS || n < 0 || n > t.MAX_EC_CODEWORDS) {
      throw o.a.getChecksumInstance()
    }
    return t.errorCorrection.decode(e, n, r)
  }
  t.verifyCodewordCount = function (t, e) {
    if (t.length < 4) {
      throw i.a.getFormatInstance()
    }
    var r = t[0]
    if (r > t.length) {
      throw i.a.getFormatInstance()
    }
    if (0 === r) {
      if (!(e < t.length)) {
        throw i.a.getFormatInstance()
      }
      t[0] = t.length - e
    }
  }
  t.getBitCountForCodeword = function (t) {
    for (var e = new Int32Array(8), r = 0, n = e.length - 1; !((1 & t) !== r && (r = 1 & t, --n < 0));) {
      e[n]++
      t >>= 1
    }
    return e
  }
  t.getCodewordBucketNumber = function (t) {
    return t instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(t) : this.getCodewordBucketNumber_number(t)
  }
  t.getCodewordBucketNumber_number = function (e) {
    return t.getCodewordBucketNumber(t.getBitCountForCodeword(e))
  }
  t.getCodewordBucketNumber_Int32Array = function (t) {
    return (t[0] - t[2] + t[4] - t[6] + 9) % 9
  }
  t.toString = function (t) {
    for (var e = new A(), r = 0; r < t.length; r++) {
      e.format("Row %2d: ", r)
      for (var n = 0; n < t[r].length; n++) {
        var o = t[r][n]
        if (0 === o.getValue().length) {
          e.format("        ", null)
        } else {
          e.format("%4d(%2d)", o.getValue()[0], o.getConfidence(o.getValue()[0]))
        }
      }
      e.format("%n")
    }
    return e.toString()
  }
  t.CODEWORD_SKEW_SIZE = 2
  t.MAX_ERRORS = 3
  t.MAX_EC_CODEWORDS = 512
  t.errorCorrection = new v.a()
  return t
}()
var k = function (t) {
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
var V = function () {
  function t() {}
  t.prototype.decode = function (e, r) {
    if (undefined === r) {
      r = null
    }
    var n = t.decode(e, r, false)
    if (null == n || 0 === n.length || null == n[0]) {
      throw a.a.getNotFoundInstance()
    }
    return n[0]
  }
  t.prototype.decodeMultiple = function (e, r) {
    if (undefined === r) {
      r = null
    }
    try {
      return t.decode(e, r, true)
    } catch (n) {
      if (n instanceof i.a || n instanceof o.a) {
        throw a.a.getNotFoundInstance()
      }
      throw n
    }
  }
  t.decode = function (e, r, o) {
    var i
    var /* [auto-meaningful-name] */h$return
    var s = new Array()
    var c = y.detectMultiple(e, r, o)
    try {
      for (var h = k(c.getPoints()), l = h.next(); !l.done; l = h.next()) {
        var /* [auto-meaningful-name] */l$value = l.value
        var p = x.decode(c.getBits(), l$value[4], l$value[5], l$value[6], l$value[7], t.getMinCodewordWidth(l$value), t.getMaxCodewordWidth(l$value))
        var g = new u.a(p.getText(), p.getRawBytes(), undefined, l$value, n.a.PDF_417)
        g.putMetadata(f.a.ERROR_CORRECTION_LEVEL, p.getECLevel())
        var w = p.getOther()
        if (null != w) {
          g.putMetadata(f.a.PDF417_EXTRA_METADATA, w)
        }
        s.push(g)
      }
    } catch (v) {
      i = {
        error: v
      }
    } finally {
      try {
        if (l && !l.done && (h$return = h.return)) {
          h$return.call(h)
        }
      } finally {
        if (i) {
          throw i.error
        }
      }
    }
    return s.map(function (t) {
      return t
    })
  }
  t.getMaxWidth = function (t, e) {
    return null == t || null == e ? 0 : Math.trunc(Math.abs(t.getX() - e.getX()))
  }
  t.getMinWidth = function (t, e) {
    return null == t || null == e ? c.a.MAX_VALUE : Math.trunc(Math.abs(t.getX() - e.getX()))
  }
  t.getMaxCodewordWidth = function (e) {
    return Math.floor(Math.max(Math.max(t.getMaxWidth(e[0], e[4]), t.getMaxWidth(e[6], e[2]) * s.a.MODULES_IN_CODEWORD / s.a.MODULES_IN_STOP_PATTERN), Math.max(t.getMaxWidth(e[1], e[5]), t.getMaxWidth(e[7], e[3]) * s.a.MODULES_IN_CODEWORD / s.a.MODULES_IN_STOP_PATTERN)))
  }
  t.getMinCodewordWidth = function (e) {
    return Math.floor(Math.min(Math.min(t.getMinWidth(e[0], e[4]), t.getMinWidth(e[6], e[2]) * s.a.MODULES_IN_CODEWORD / s.a.MODULES_IN_STOP_PATTERN), Math.min(t.getMinWidth(e[1], e[5]), t.getMinWidth(e[7], e[3]) * s.a.MODULES_IN_CODEWORD / s.a.MODULES_IN_STOP_PATTERN)))
  }
  t.prototype.reset = function () {}
  return t
}()
exports.a = V
