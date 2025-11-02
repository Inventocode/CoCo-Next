/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：404
 */

"use strict"

var r = require("../74")
var i = require("../164")
var o = require("../56")
var a = require("../37")
var s = require("../150")
var u = require("./123")
var c = require("../105")
var l = require("../169")
var d = require("../73/index")
var f = require("../117")
var h = require("../181/index")
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
var m = function (t) {
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
var b = function () {
  function t() {}
  t.detectMultiple = function (e, n, r) {
    var i = e.getBlackMatrix()
    var o = t.detect(r, i)
    if (!o.length) {
      (i = i.clone()).rotate180()
      o = t.detect(r, i)
    }
    return new p(i, o)
  }
  t.detect = function (e, n) {
    for (var r, /* [auto-meaningful-name] */l$return, o = new Array(), a = 0, s = 0, u = false; a < n.getHeight();) {
      var c = t.findVertices(n, a, s)
      if (null != c[0] || null != c[3]) {
        u = true
        o.push(c)
        if (!e) {
          break
        }
        if (null != c[2]) {
          s = Math.trunc(c[2].getX())
          a = Math.trunc(c[2].getY())
        } else {
          s = Math.trunc(c[4].getX())
          a = Math.trunc(c[4].getY())
        }
      } else {
        if (!u) {
          break
        }
        u = false
        s = 0
        try {
          for (r = undefined, l = m(o), d = l.next(), undefined; !d.done; d = l.next()) {
            var l
            var d
            var d$value = d.value
            if (null != d$value[1]) {
              a = Math.trunc(Math.max(a, d$value[1].getY()))
            }
            if (null != d$value[3]) {
              a = Math.max(a, Math.trunc(d$value[3].getY()))
            }
          }
        } catch (h) {
          r = {
            error: h
          }
        } finally {
          try {
            if (d && !d.done && (l$return = l.return)) {
              l$return.call(l)
            }
          } finally {
            if (r) {
              throw r.error
            }
          }
        }
        a += t.ROW_STEP
      }
    }
    return o
  }
  t.findVertices = function (e, n, r) {
    var i = e.getHeight()
    var o = e.getWidth()
    var a = new Array(8)
    t.copyToResult(a, t.findRowsWithPattern(e, i, o, n, r, t.START_PATTERN), t.INDEXES_START_PATTERN)
    if (null != a[4]) {
      r = Math.trunc(a[4].getX())
      n = Math.trunc(a[4].getY())
    }
    t.copyToResult(a, t.findRowsWithPattern(e, i, o, n, r, t.STOP_PATTERN), t.INDEXES_STOP_PATTERN)
    return a
  }
  t.copyToResult = function (t, e, n) {
    for (var r = 0; r < n.length; r++) {
      t[n[r]] = e[r]
    }
  }
  t.findRowsWithPattern = function (e, n, r, i, o, a) {
    for (var s = new Array(4), u = false, c = new Int32Array(a.length); i < n; i += t.ROW_STEP) {
      if (null != (m = t.findGuardPattern(e, o, i, r, false, a, c))) {
        for (; i > 0;) {
          if (null == (p = t.findGuardPattern(e, o, --i, r, false, a, c))) {
            i++
            break
          }
          m = p
        }
        s[0] = new d.a(m[0], i)
        s[1] = new d.a(m[1], i)
        u = true
        break
      }
    }
    var l = i + 1
    if (u) {
      for (var f = 0, p = Int32Array.from([Math.trunc(s[0].getX()), Math.trunc(s[1].getX())]); l < n; l++) {
        var m
        if (null != (m = t.findGuardPattern(e, p[0], l, r, false, a, c)) && Math.abs(p[0] - m[0]) < t.MAX_PATTERN_DRIFT && Math.abs(p[1] - m[1]) < t.MAX_PATTERN_DRIFT) {
          p = m
          f = 0
        } else {
          if (f > t.SKIPPED_ROW_COUNT_MAX) {
            break
          }
          f++
        }
      }
      l -= f + 1
      s[2] = new d.a(p[0], l)
      s[3] = new d.a(p[1], l)
    }
    if (l - i < t.BARCODE_MIN_HEIGHT) {
      h.a.fill(s, null)
    }
    return s
  }
  t.findGuardPattern = function (e, n, r, i, o, a, s) {
    h.a.fillWithin(s, 0, s.length, 0)
    for (var u = n, c = 0; e.get(u, r) && u > 0 && c++ < t.MAX_PIXEL_DRIFT;) {
      u--
    }
    for (var l = u, d = 0, a$length = a.length, m = o; l < i; l++) {
      if (e.get(l, r) !== m) {
        s[d]++
      } else {
        if (d === a$length - 1) {
          if (t.patternMatchVariance(s, a, t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE) {
            return new Int32Array([u, l])
          }
          u += s[0] + s[1]
          f.a.arraycopy(s, 2, s, 0, d - 1)
          s[d - 1] = 0
          s[d] = 0
          d--
        } else {
          d++
        }
        s[d] = 1
        m = !m
      }
    }
    return d === a$length - 1 && t.patternMatchVariance(s, a, t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE ? new Int32Array([u, l - 1]) : null
  }
  t.patternMatchVariance = function (t, e, n) {
    for (var t$length = t.length, i = 0, o = 0, a = 0; a < t$length; a++) {
      i += t[a]
      o += e[a]
    }
    if (i < o) {
      return 1 / 0
    }
    var s = i / o
    n *= s
    for (var u = 0, c = 0; c < t$length; c++) {
      var l = t[c]
      var d = e[c] * s
      var f = l > d ? l - d : d - l
      if (f > n) {
        return 1 / 0
      }
      u += f
    }
    return u / i
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
var g = require("../118")
var v = require("../603")
var _ = function () {
  function t(e, n, r, i, o) {
    if (e instanceof t) {
      this.constructor_2(e)
    } else {
      this.constructor_1(e, n, r, i, o)
    }
  }
  t.prototype.constructor_1 = function (t, e, n, r, i) {
    var o = null == e || null == n
    var s = null == r || null == i
    if (o && s) {
      throw new a.a()
    }
    if (o) {
      e = new d.a(0, r.getY())
      n = new d.a(0, i.getY())
    } else {
      if (s) {
        r = new d.a(t.getWidth() - 1, e.getY())
        i = new d.a(t.getWidth() - 1, n.getY())
      }
    }
    this.image = t
    this.topLeft = e
    this.bottomLeft = n
    this.topRight = r
    this.bottomRight = i
    this.minX = Math.trunc(Math.min(e.getX(), n.getX()))
    this.maxX = Math.trunc(Math.max(r.getX(), i.getX()))
    this.minY = Math.trunc(Math.min(e.getY(), r.getY()))
    this.maxY = Math.trunc(Math.max(n.getY(), i.getY()))
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
  t.merge = function (e, n) {
    return null == e ? n : null == n ? e : new t(e.image, e.topLeft, e.bottomLeft, n.topRight, n.bottomRight)
  }
  t.prototype.addMissingRows = function (e, n, r) {
    var this$topLeft = this.topLeft
    var this$bottomLeft = this.bottomLeft
    var this$topRight = this.topRight
    var this$bottomRight = this.bottomRight
    if (e > 0) {
      var u = r ? this.topLeft : this.topRight
      var c = Math.trunc(u.getY() - e)
      if (c < 0) {
        c = 0
      }
      var l = new d.a(u.getX(), c)
      if (r) {
        this$topLeft = l
      } else {
        this$topRight = l
      }
    }
    if (n > 0) {
      var f = r ? this.bottomLeft : this.bottomRight
      var h = Math.trunc(f.getY() + n)
      if (h >= this.image.getHeight()) {
        h = this.image.getHeight() - 1
      }
      var p = new d.a(f.getX(), h)
      if (r) {
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
var y = function () {
  function t(t, e, n, r) {
    this.columnCount = t
    this.errorCorrectionLevel = r
    this.rowCountUpperPart = e
    this.rowCountLowerPart = n
    this.rowCount = e + n
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
var w = function () {
  function t() {
    this.buffer = ""
  }
  t.form = function (t, e) {
    var n = -1
    return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function (t, r, i, o, a, s) {
      if ("%%" === t) {
        return "%"
      }
      if (undefined !== e[++n]) {
        t = o ? parseInt(o.substr(1)) : undefined
        var u
        var c = a ? parseInt(a.substr(1)) : undefined
        switch (s) {
          case "s":
            u = e[n]
            break
          case "c":
            u = e[n][0]
            break
          case "f":
            u = parseFloat(e[n]).toFixed(t)
            break
          case "p":
            u = parseFloat(e[n]).toPrecision(t)
            break
          case "e":
            u = parseFloat(e[n]).toExponential(t)
            break
          case "x":
            u = parseInt(e[n]).toString(c || 16)
            break
          case "d":
            u = parseFloat(parseInt(e[n], c || 10).toPrecision(t)).toFixed(0)
        }
        u = "object" === typeof u ? JSON.stringify(u) : (+u).toString(c)
        for (var l = parseInt(i), d = i && i[0] + "" === "0" ? "0" : " "; u.length < l;) {
          u = undefined !== r ? u + d : d + u
        }
        return u
      }
    })
  }
  t.prototype.format = function (e) {
    for (var n = [], r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r]
    }
    this.buffer += t.form(e, n)
  }
  t.prototype.toString = function () {
    return this.buffer
  }
  return t
}()
var E = function (t) {
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
var O = function () {
  function t(t) {
    this.boundingBox = new _(t)
    this.codewords = new Array(t.getMaxY() - t.getMinY() + 1)
  }
  t.prototype.getCodewordNearby = function (e) {
    var n = this.getCodeword(e)
    if (null != n) {
      return n
    }
    for (var r = 1; r < t.MAX_NEARBY_DISTANCE; r++) {
      var i = this.imageRowToCodewordIndex(e) - r
      if (i >= 0 && null != (n = this.codewords[i])) {
        return n
      }
      if ((i = this.imageRowToCodewordIndex(e) + r) < this.codewords.length && null != (n = this.codewords[i])) {
        return n
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
    var /* [auto-meaningful-name] */i$return
    var n = new w()
    var r = 0
    try {
      for (var i = E(this.codewords), o = i.next(); !o.done; o = i.next()) {
        var o$value = o.value
        if (null != o$value) {
          n.format("%3d: %3d|%3d%n", r++, o$value.getRowNumber(), o$value.getValue())
        } else {
          n.format("%3d:    |   %n", r++)
        }
      }
    } catch (s) {
      t = {
        error: s
      }
    } finally {
      try {
        if (o && !o.done && (i$return = i.return)) {
          i$return.call(i)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    return n.toString()
  }
  t.MAX_NEARBY_DISTANCE = 5
  return t
}()
var T = function (t) {
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
var A = function (t, e) {
  var n = "function" === typeof Symbol && t[Symbol.iterator]
  if (!n) {
    return t
  }
  var r
  var i
  var o = n.call(t)
  var a = []
  try {
    for (; (undefined === e || e-- > 0) && !(r = o.next()).done;) {
      a.push(r.value)
    }
  } catch (s) {
    i = {
      error: s
    }
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o)
      }
    } finally {
      if (i) {
        throw i.error
      }
    }
  }
  return a
}
var S = function () {
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
    var /* [auto-meaningful-name] */o$return
    var n = -1
    var r = new Array()
    var i = function (t, e) {
      var i = function () {
        return t
      }
      var o = function () {
        return e
      }
      if (o() > n) {
        n = o();
        (r = []).push(i())
      } else {
        if (o() === n) {
          r.push(i())
        }
      }
    }
    try {
      for (var o = T(this.values.entries()), a = o.next(); !a.done; a = o.next()) {
        var s = A(a.value, 2)
        i(s[0], s[1])
      }
    } catch (c) {
      t = {
        error: c
      }
    } finally {
      try {
        if (a && !a.done && (o$return = o.return)) {
          o$return.call(o)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    return u.a.toIntArray(r)
  }
  t.prototype.getConfidence = function (t) {
    return this.values.get(t)
  }
  return t
}()
var I = function () {
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
var C = function (t) {
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
var j = function (t) {
  function e(e, n) {
    var r = t.call(this, e) || this
    r._isLeft = n
    return r
  }
  I(e, t)
  e.prototype.setRowNumbers = function () {
    var t
    var /* [auto-meaningful-name] */n$return
    try {
      for (var n = C(this.getCodewords()), r = n.next(); !r.done; r = n.next()) {
        var r$value = r.value
        if (null != r$value) {
          r$value.setRowNumberAsRowIndicatorColumn()
        }
      }
    } catch (o) {
      t = {
        error: o
      }
    } finally {
      try {
        if (r && !r.done && (n$return = n.return)) {
          n$return.call(n)
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
    for (var n = this.getBoundingBox(), r = this._isLeft ? n.getTopLeft() : n.getTopRight(), i = this._isLeft ? n.getBottomLeft() : n.getBottomRight(), o = this.imageRowToCodewordIndex(Math.trunc(r.getY())), a = this.imageRowToCodewordIndex(Math.trunc(i.getY())), s = -1, u = 1, c = 0, l = o; l < a; l++) {
      if (null != e[l]) {
        var d = e[l]
        var f = d.getRowNumber() - s
        if (0 === f) {
          c++
        } else if (1 === f) {
          u = Math.max(u, c)
          c = 1
          s = d.getRowNumber()
        } else if (f < 0 || d.getRowNumber() >= t.getRowCount() || f > l) {
          e[l] = null
        } else {
          for (var h = undefined, p = (h = u > 2 ? (u - 2) * f : f) >= l, m = 1; m <= h && !p; m++) {
            p = null != e[l - m]
          }
          if (p) {
            e[l] = null
          } else {
            s = d.getRowNumber()
            c = 1
          }
        }
      }
    }
  }
  e.prototype.getRowHeights = function () {
    var t
    var /* [auto-meaningful-name] */i$return
    var n = this.getBarcodeMetadata()
    if (null == n) {
      return null
    }
    this.adjustIncompleteIndicatorColumnRowNumbers(n)
    var r = new Int32Array(n.getRowCount())
    try {
      for (var i = C(this.getCodewords()), o = i.next(); !o.done; o = i.next()) {
        var o$value = o.value
        if (null != o$value) {
          var s = o$value.getRowNumber()
          if (s >= r.length) {
            continue
          }
          r[s]++
        }
      }
    } catch (u) {
      t = {
        error: u
      }
    } finally {
      try {
        if (o && !o.done && (i$return = i.return)) {
          i$return.call(i)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    return r
  }
  e.prototype.adjustIncompleteIndicatorColumnRowNumbers = function (t) {
    for (var e = this.getBoundingBox(), n = this._isLeft ? e.getTopLeft() : e.getTopRight(), r = this._isLeft ? e.getBottomLeft() : e.getBottomRight(), i = this.imageRowToCodewordIndex(Math.trunc(n.getY())), o = this.imageRowToCodewordIndex(Math.trunc(r.getY())), a = this.getCodewords(), s = -1, u = 1, c = 0, l = i; l < o; l++) {
      if (null != a[l]) {
        var d = a[l]
        d.setRowNumberAsRowIndicatorColumn()
        var f = d.getRowNumber() - s
        if (0 === f) {
          c++
        } else {
          if (1 === f) {
            u = Math.max(u, c)
            c = 1
            s = d.getRowNumber()
          } else {
            if (d.getRowNumber() >= t.getRowCount()) {
              a[l] = null
            } else {
              s = d.getRowNumber()
              c = 1
            }
          }
        }
      }
    }
  }
  e.prototype.getBarcodeMetadata = function () {
    var t
    var /* [auto-meaningful-name] */s$return
    var n = this.getCodewords()
    var r = new S()
    var i = new S()
    var o = new S()
    var a = new S()
    try {
      for (var s = C(n), c = s.next(); !c.done; c = s.next()) {
        var c$value = c.value
        if (null != c$value) {
          c$value.setRowNumberAsRowIndicatorColumn()
          var d = c$value.getValue() % 30
          var f = c$value.getRowNumber()
          switch (this._isLeft || (f += 2), f % 3) {
            case 0:
              i.setValue(3 * d + 1)
              break
            case 1:
              a.setValue(d / 3)
              o.setValue(d % 3)
              break
            case 2:
              r.setValue(d + 1)
          }
        }
      }
    } catch (p) {
      t = {
        error: p
      }
    } finally {
      try {
        if (c && !c.done && (s$return = s.return)) {
          s$return.call(s)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    if (0 === r.getValue().length || 0 === i.getValue().length || 0 === o.getValue().length || 0 === a.getValue().length || r.getValue()[0] < 1 || i.getValue()[0] + o.getValue()[0] < u.a.MIN_ROWS_IN_BARCODE || i.getValue()[0] + o.getValue()[0] > u.a.MAX_ROWS_IN_BARCODE) {
      return null
    }
    var h = new y(r.getValue()[0], i.getValue()[0], o.getValue()[0], a.getValue()[0])
    this.removeIncorrectCodewords(n, h)
    return h
  }
  e.prototype.removeIncorrectCodewords = function (t, e) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      if (null != t[n]) {
        var i = r.getValue() % 30
        var o = r.getRowNumber()
        if (o > e.getRowCount()) {
          t[n] = null
        } else {
          switch (this._isLeft || (o += 2), o % 3) {
            case 0:
              if (3 * i + 1 !== e.getRowCountUpperPart()) {
                t[n] = null
              }
              break
            case 1:
              if (!(Math.trunc(i / 3) === e.getErrorCorrectionLevel() && i % 3 === e.getRowCountLowerPart())) {
                t[n] = null
              }
              break
            case 2:
              if (i + 1 !== e.getColumnCount()) {
                t[n] = null
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
}(O)
var M = function (t) {
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
var k = function () {
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
    var u$a$MAX_CODEWORDS_IN_BARCODE = u.a.MAX_CODEWORDS_IN_BARCODE
    do {
      t = u$a$MAX_CODEWORDS_IN_BARCODE
      u$a$MAX_CODEWORDS_IN_BARCODE = this.adjustRowNumbersAndGetCount()
    } while (u$a$MAX_CODEWORDS_IN_BARCODE > 0 && u$a$MAX_CODEWORDS_IN_BARCODE < t)
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
      for (var n = this.detectionResultColumns[e].getCodewords(), r = 0; r < n.length; r++) {
        if (null != n[r]) {
          if (!n[r].hasValidRowNumber()) {
            this.adjustRowNumbers(e, r, n)
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
      for (var t = this.detectionResultColumns[0].getCodewords(), e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), n = 0; n < t.length; n++) {
        if (null != t[n] && null != e[n] && t[n].getRowNumber() === e[n].getRowNumber()) {
          for (var r = 1; r <= this.barcodeColumnCount; r++) {
            var i = this.detectionResultColumns[r].getCodewords()[n]
            if (null != i) {
              i.setRowNumber(t[n].getRowNumber())
              if (!i.hasValidRowNumber()) {
                this.detectionResultColumns[r].getCodewords()[n] = null
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
    for (var e = 0, n = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), r = 0; r < n.length; r++) {
      if (null != n[r]) {
        for (var i = n[r].getRowNumber(), o = 0, a = this.barcodeColumnCount + 1; a > 0 && o < this.ADJUST_ROW_NUMBER_SKIP; a--) {
          var s = this.detectionResultColumns[a].getCodewords()[r]
          if (null != s) {
            o = t.adjustRowNumberIfValid(i, o, s)
            if (!s.hasValidRowNumber()) {
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
    for (var e = 0, n = this.detectionResultColumns[0].getCodewords(), r = 0; r < n.length; r++) {
      if (null != n[r]) {
        for (var i = n[r].getRowNumber(), o = 0, a = 1; a < this.barcodeColumnCount + 1 && o < this.ADJUST_ROW_NUMBER_SKIP; a++) {
          var s = this.detectionResultColumns[a].getCodewords()[r]
          if (null != s) {
            o = t.adjustRowNumberIfValid(i, o, s)
            if (!s.hasValidRowNumber()) {
              e++
            }
          }
        }
      }
    }
    return e
  }
  t.adjustRowNumberIfValid = function (t, e, n) {
    if (!(null == n || n.hasValidRowNumber())) {
      if (n.isValidRowNumber(t)) {
        n.setRowNumber(t)
        e = 0
      } else {
        ++e
      }
    }
    return e
  }
  t.prototype.adjustRowNumbers = function (e, n, r) {
    var i
    var /* [auto-meaningful-name] */l$return
    var a = r[n]
    var s = this.detectionResultColumns[e - 1].getCodewords()
    var u = s
    if (null != this.detectionResultColumns[e + 1]) {
      u = this.detectionResultColumns[e + 1].getCodewords()
    }
    var c = new Array(14)
    c[2] = s[n]
    c[3] = u[n]
    if (n > 0) {
      c[0] = r[n - 1]
      c[4] = s[n - 1]
      c[5] = u[n - 1]
    }
    if (n > 1) {
      c[8] = r[n - 2]
      c[10] = s[n - 2]
      c[11] = u[n - 2]
    }
    if (n < r.length - 1) {
      c[1] = r[n + 1]
      c[6] = s[n + 1]
      c[7] = u[n + 1]
    }
    if (n < r.length - 2) {
      c[9] = r[n + 2]
      c[12] = s[n + 2]
      c[13] = u[n + 2]
    }
    try {
      for (var l = M(c), d = l.next(); !d.done; d = l.next()) {
        var d$value = d.value
        if (t.adjustRowNumber(a, d$value)) {
          return
        }
      }
    } catch (h) {
      i = {
        error: h
      }
    } finally {
      try {
        if (d && !d.done && (l$return = l.return)) {
          l$return.call(l)
        }
      } finally {
        if (i) {
          throw i.error
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
    for (var e = new w(), n = 0; n < t.getCodewords().length; n++) {
      e.format("CW %3d:", n)
      for (var r = 0; r < this.barcodeColumnCount + 2; r++) {
        if (null != this.detectionResultColumns[r]) {
          var i = this.detectionResultColumns[r].getCodewords()[n]
          if (null != i) {
            e.format(" %3d|%3d", i.getRowNumber(), i.getValue())
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
var R = function () {
  function t(e, n, r, i) {
    this.rowNumber = t.BARCODE_ROW_UNKNOWN
    this.startX = Math.trunc(e)
    this.endX = Math.trunc(n)
    this.bucket = Math.trunc(r)
    this.value = Math.trunc(i)
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
var N = require("../73/515")
var x = function () {
  function t() {}
  t.initialize = function () {
    for (var e = 0; e < u.a.SYMBOL_TABLE.length; e++) {
      for (var n = u.a.SYMBOL_TABLE[e], r = 1 & n, i = 0; i < u.a.BARS_IN_MODULE; i++) {
        for (var o = 0; (1 & n) === r;) {
          o += 1
          n >>= 1
        }
        r = 1 & n
        if (!t.RATIOS_TABLE[e]) {
          t.RATIOS_TABLE[e] = new Array(u.a.BARS_IN_MODULE)
        }
        t.RATIOS_TABLE[e][u.a.BARS_IN_MODULE - i - 1] = Math.fround(o / u.a.MODULES_IN_CODEWORD)
      }
    }
    this.bSymbolTableReady = true
  }
  t.getDecodedValue = function (e) {
    var n = t.getDecodedCodewordValue(t.sampleBitCounts(e))
    return -1 !== n ? n : t.getClosestDecodedValue(e)
  }
  t.sampleBitCounts = function (t) {
    for (var e = g.a.sum(t), n = new Int32Array(u.a.BARS_IN_MODULE), r = 0, i = 0, o = 0; o < u.a.MODULES_IN_CODEWORD; o++) {
      var a = e / (2 * u.a.MODULES_IN_CODEWORD) + o * e / u.a.MODULES_IN_CODEWORD
      if (i + t[r] <= a) {
        i += t[r]
        r++
      }
      n[r]++
    }
    return n
  }
  t.getDecodedCodewordValue = function (e) {
    var n = t.getBitValue(e)
    return -1 === u.a.getCodeword(n) ? -1 : n
  }
  t.getBitValue = function (t) {
    for (var e = 0, n = 0; n < t.length; n++) {
      for (var r = 0; r < t[n]; r++) {
        e = e << 1 | (n % 2 === 0 ? 1 : 0)
      }
    }
    return Math.trunc(e)
  }
  t.getClosestDecodedValue = function (e) {
    var n = g.a.sum(e)
    var r = new Array(u.a.BARS_IN_MODULE)
    if (n > 1) {
      for (var i = 0; i < r.length; i++) {
        r[i] = Math.fround(e[i] / n)
      }
    }
    var n$a$MAX_VALUE = N.a.MAX_VALUE
    var a = -1
    if (!this.bSymbolTableReady) {
      t.initialize()
    }
    for (var s = 0; s < t.RATIOS_TABLE.length; s++) {
      for (var c = 0, l = t.RATIOS_TABLE[s], d = 0; d < u.a.BARS_IN_MODULE; d++) {
        var f = Math.fround(l[d] - r[d])
        if ((c += Math.fround(f * f)) >= n$a$MAX_VALUE) {
          break
        }
      }
      if (c < n$a$MAX_VALUE) {
        n$a$MAX_VALUE = c
        a = u.a.SYMBOL_TABLE[s]
      }
    }
    return a
  }
  t.bSymbolTableReady = false
  t.RATIOS_TABLE = new Array(u.a.SYMBOL_TABLE.length).map(function (t) {
    return new Array(u.a.BARS_IN_MODULE)
  })
  return t
}()
var D = require("../592/index")
var L = function (t) {
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
var B = function () {
  function t() {}
  t.decode = function (e, n, r, i, o, s, u) {
    for (var c, l = new _(e, n, r, i, o), d = null, f = null, h = true;; h = false) {
      if (null != n) {
        d = t.getRowIndicatorColumn(e, l, n, true, s, u)
      }
      if (null != i) {
        f = t.getRowIndicatorColumn(e, l, i, false, s, u)
      }
      if (null == (c = t.merge(d, f))) {
        throw a.a.getNotFoundInstance()
      }
      var p = c.getBoundingBox()
      if (!h || null == p || !(p.getMinY() < l.getMinY() || p.getMaxY() > l.getMaxY())) {
        break
      }
      l = p
    }
    c.setBoundingBox(l)
    var m = c.getBarcodeColumnCount() + 1
    c.setDetectionResultColumn(0, d)
    c.setDetectionResultColumn(m, f)
    for (var b = null != d, g = 1; g <= m; g++) {
      var v = b ? g : m - g
      if (undefined === c.getDetectionResultColumn(v)) {
        var y = undefined
        y = 0 === v || v === m ? new j(l, 0 === v) : new O(l)
        c.setDetectionResultColumn(v, y)
        for (var w = -1, E = w, T = l.getMinY(); T <= l.getMaxY(); T++) {
          if ((w = t.getStartColumn(c, v, T, b)) < 0 || w > l.getMaxX()) {
            if (-1 === E) {
              continue
            }
            w = E
          }
          var A = t.detectCodeword(e, l.getMinX(), l.getMaxX(), b, w, T, s, u)
          if (null != A) {
            y.setCodeword(T, A)
            E = w
            s = Math.min(s, A.getWidth())
            u = Math.max(u, A.getWidth())
          }
        }
      }
    }
    return t.createDecoderResult(c)
  }
  t.merge = function (e, n) {
    if (null == e && null == n) {
      return null
    }
    var r = t.getBarcodeMetadata(e, n)
    if (null == r) {
      return null
    }
    var i = _.merge(t.adjustBoundingBox(e), t.adjustBoundingBox(n))
    return new k(r, i)
  }
  t.adjustBoundingBox = function (e) {
    var n
    var /* [auto-meaningful-name] */s$return
    if (null == e) {
      return null
    }
    var i = e.getRowHeights()
    if (null == i) {
      return null
    }
    var o = t.getMax(i)
    var a = 0
    try {
      for (var s = L(i), u = s.next(); !u.done; u = s.next()) {
        var u$value = u.value
        a += o - u$value
        if (u$value > 0) {
          break
        }
      }
    } catch (h) {
      n = {
        error: h
      }
    } finally {
      try {
        if (u && !u.done && (s$return = s.return)) {
          s$return.call(s)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
    for (var l = e.getCodewords(), d = 0; a > 0 && null == l[d]; d++) {
      a--
    }
    var f = 0
    for (d = i.length - 1; d >= 0 && (f += o - i[d], !(i[d] > 0)); d--) {
      ;
    }
    for (d = l.length - 1; f > 0 && null == l[d]; d--) {
      f--
    }
    return e.getBoundingBox().addMissingRows(a, f, e.isLeft())
  }
  t.getMax = function (t) {
    var e
    var /* [auto-meaningful-name] */i$return
    var r = -1
    try {
      for (var i = L(t), o = i.next(); !o.done; o = i.next()) {
        var o$value = o.value
        r = Math.max(r, o$value)
      }
    } catch (s) {
      e = {
        error: s
      }
    } finally {
      try {
        if (o && !o.done && (i$return = i.return)) {
          i$return.call(i)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    return r
  }
  t.getBarcodeMetadata = function (t, e) {
    var n
    var r
    return null == t || null == (n = t.getBarcodeMetadata()) ? null == e ? null : e.getBarcodeMetadata() : null == e || null == (r = e.getBarcodeMetadata()) ? n : n.getColumnCount() !== r.getColumnCount() && n.getErrorCorrectionLevel() !== r.getErrorCorrectionLevel() && n.getRowCount() !== r.getRowCount() ? null : n
  }
  t.getRowIndicatorColumn = function (e, n, r, i, o, a) {
    for (var s = new j(n, i), u = 0; u < 2; u++) {
      for (var c = 0 === u ? 1 : -1, l = Math.trunc(Math.trunc(r.getX())), d = Math.trunc(Math.trunc(r.getY())); d <= n.getMaxY() && d >= n.getMinY(); d += c) {
        var f = t.detectCodeword(e, 0, e.getWidth(), i, l, d, o, a)
        if (null != f) {
          s.setCodeword(d, f)
          l = i ? f.getStartX() : f.getEndX()
        }
      }
    }
    return s
  }
  t.adjustCodewordCount = function (e, n) {
    var r = n[0][1]
    var i = r.getValue()
    var o = e.getBarcodeColumnCount() * e.getBarcodeRowCount() - t.getNumberOfECCodeWords(e.getBarcodeECLevel())
    if (0 === i.length) {
      if (o < 1 || o > u.a.MAX_CODEWORDS_IN_BARCODE) {
        throw a.a.getNotFoundInstance()
      }
      r.setValue(o)
    } else if (i[0] !== o) {
      r.setValue(o)
    }
  }
  t.createDecoderResult = function (e) {
    var n = t.createBarcodeMatrix(e)
    t.adjustCodewordCount(e, n)
    for (var r = new Array(), i = new Int32Array(e.getBarcodeRowCount() * e.getBarcodeColumnCount()), o = [], a = new Array(), s = 0; s < e.getBarcodeRowCount(); s++) {
      for (var c = 0; c < e.getBarcodeColumnCount(); c++) {
        var l = n[s][c + 1].getValue()
        var d = s * e.getBarcodeColumnCount() + c
        if (0 === l.length) {
          r.push(d)
        } else {
          if (1 === l.length) {
            i[d] = l[0]
          } else {
            a.push(d)
            o.push(l)
          }
        }
      }
    }
    for (var f = new Array(o.length), h = 0; h < f.length; h++) {
      f[h] = o[h]
    }
    return t.createDecoderResultFromAmbiguousValues(e.getBarcodeECLevel(), i, u.a.toIntArray(r), u.a.toIntArray(a), f)
  }
  t.createDecoderResultFromAmbiguousValues = function (e, n, r, o, a) {
    for (var s = new Int32Array(o.length), u = 100; u-- > 0;) {
      for (var c = 0; c < s.length; c++) {
        n[o[c]] = a[c][s[c]]
      }
      try {
        return t.decodeCodewords(n, e, r)
      } catch (l) {
        if (!(l instanceof i.a)) {
          throw l
        }
      }
      if (0 === s.length) {
        throw i.a.getChecksumInstance()
      }
      for (c = 0; c < s.length; c++) {
        if (s[c] < a[c].length - 1) {
          s[c]++
          break
        }
        s[c] = 0
        if (c === s.length - 1) {
          throw i.a.getChecksumInstance()
        }
      }
    }
    throw i.a.getChecksumInstance()
  }
  t.createBarcodeMatrix = function (t) {
    for (var e, /* [auto-meaningful-name] */c$return, r, /* [auto-meaningful-name] */f$return, o = Array.from({
        length: t.getBarcodeRowCount()
      }, function () {
        return new Array(t.getBarcodeColumnCount() + 2)
      }), a = 0; a < o.length; a++) {
      for (var s = 0; s < o[a].length; s++) {
        o[a][s] = new S()
      }
    }
    var u = 0
    try {
      for (var c = L(t.getDetectionResultColumns()), l = c.next(); !l.done; l = c.next()) {
        var l$value = l.value
        if (null != l$value) {
          try {
            for (r = undefined, f = L(l$value.getCodewords()), h = f.next(), undefined; !h.done; h = f.next()) {
              var f
              var h
              var h$value = h.value
              if (null != h$value) {
                var m = h$value.getRowNumber()
                if (m >= 0) {
                  if (m >= o.length) {
                    continue
                  }
                  o[m][u].setValue(h$value.getValue())
                }
              }
            }
          } catch (b) {
            r = {
              error: b
            }
          } finally {
            try {
              if (h && !h.done && (f$return = f.return)) {
                f$return.call(f)
              }
            } finally {
              if (r) {
                throw r.error
              }
            }
          }
        }
        u++
      }
    } catch (g) {
      e = {
        error: g
      }
    } finally {
      try {
        if (l && !l.done && (c$return = c.return)) {
          c$return.call(c)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    return o
  }
  t.isValidBarcodeColumn = function (t, e) {
    return e >= 0 && e <= t.getBarcodeColumnCount() + 1
  }
  t.getStartColumn = function (e, n, r, i) {
    var o
    var /* [auto-meaningful-name] */l$return
    var s = i ? 1 : -1
    var u = null
    if (t.isValidBarcodeColumn(e, n - s)) {
      u = e.getDetectionResultColumn(n - s).getCodeword(r)
    }
    if (null != u) {
      return i ? u.getEndX() : u.getStartX()
    }
    if (null != (u = e.getDetectionResultColumn(n).getCodewordNearby(r))) {
      return i ? u.getStartX() : u.getEndX()
    }
    if (t.isValidBarcodeColumn(e, n - s)) {
      u = e.getDetectionResultColumn(n - s).getCodewordNearby(r)
    }
    if (null != u) {
      return i ? u.getEndX() : u.getStartX()
    }
    for (var c = 0; t.isValidBarcodeColumn(e, n - s);) {
      n -= s
      try {
        for (o = undefined, l = L(e.getDetectionResultColumn(n).getCodewords()), d = l.next(), undefined; !d.done; d = l.next()) {
          var l
          var d
          var d$value = d.value
          if (null != d$value) {
            return (i ? d$value.getEndX() : d$value.getStartX()) + s * c * (d$value.getEndX() - d$value.getStartX())
          }
        }
      } catch (h) {
        o = {
          error: h
        }
      } finally {
        try {
          if (d && !d.done && (l$return = l.return)) {
            l$return.call(l)
          }
        } finally {
          if (o) {
            throw o.error
          }
        }
      }
      c++
    }
    return i ? e.getBoundingBox().getMinX() : e.getBoundingBox().getMaxX()
  }
  t.detectCodeword = function (e, n, r, i, o, a, s, c) {
    o = t.adjustCodewordStartColumn(e, n, r, i, o, a)
    var l
    var d = t.getModuleBitCount(e, n, r, i, o, a)
    if (null == d) {
      return null
    }
    var f = g.a.sum(d)
    if (i) {
      l = o + f
    } else {
      for (var h = 0; h < d.length / 2; h++) {
        var p = d[h]
        d[h] = d[d.length - 1 - h]
        d[d.length - 1 - h] = p
      }
      o = (l = o) - f
    }
    if (!t.checkCodewordSkew(f, s, c)) {
      return null
    }
    var m = x.getDecodedValue(d)
    var b = u.a.getCodeword(m)
    return -1 === b ? null : new R(o, l, t.getCodewordBucketNumber(m), b)
  }
  t.getModuleBitCount = function (t, e, n, r, i, o) {
    for (var a = i, s = new Int32Array(8), u = 0, c = r ? 1 : -1, l = r; (r ? a < n : a >= e) && u < s.length;) {
      if (t.get(a, o) === l) {
        s[u]++
        a += c
      } else {
        u++
        l = !l
      }
    }
    return u === s.length || a === (r ? n : e) && u === s.length - 1 ? s : null
  }
  t.getNumberOfECCodeWords = function (t) {
    return 2 << t
  }
  t.adjustCodewordStartColumn = function (e, n, r, i, o, a) {
    for (var s = o, u = i ? -1 : 1, c = 0; c < 2; c++) {
      for (; (i ? s >= n : s < r) && i === e.get(s, a);) {
        if (Math.abs(o - s) > t.CODEWORD_SKEW_SIZE) {
          return o
        }
        s += u
      }
      u = -u
      i = !i
    }
    return s
  }
  t.checkCodewordSkew = function (e, n, r) {
    return n - t.CODEWORD_SKEW_SIZE <= e && e <= r + t.CODEWORD_SKEW_SIZE
  }
  t.decodeCodewords = function (e, n, r) {
    if (0 === e.length) {
      throw o.a.getFormatInstance()
    }
    var i = 1 << n + 1
    var a = t.correctErrors(e, r, i)
    t.verifyCodewordCount(e, i)
    var s = D.a.decode(e, "" + n)
    s.setErrorsCorrected(a)
    s.setErasures(r.length)
    return s
  }
  t.correctErrors = function (e, n, r) {
    if (null != n && n.length > r / 2 + t.MAX_ERRORS || r < 0 || r > t.MAX_EC_CODEWORDS) {
      throw i.a.getChecksumInstance()
    }
    return t.errorCorrection.decode(e, r, n)
  }
  t.verifyCodewordCount = function (t, e) {
    if (t.length < 4) {
      throw o.a.getFormatInstance()
    }
    var n = t[0]
    if (n > t.length) {
      throw o.a.getFormatInstance()
    }
    if (0 === n) {
      if (!(e < t.length)) {
        throw o.a.getFormatInstance()
      }
      t[0] = t.length - e
    }
  }
  t.getBitCountForCodeword = function (t) {
    for (var e = new Int32Array(8), n = 0, r = e.length - 1; !((1 & t) !== n && (n = 1 & t, --r < 0));) {
      e[r]++
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
    for (var e = new w(), n = 0; n < t.length; n++) {
      e.format("Row %2d: ", n)
      for (var r = 0; r < t[n].length; r++) {
        var i = t[n][r]
        if (0 === i.getValue().length) {
          e.format("        ", null)
        } else {
          e.format("%4d(%2d)", i.getValue()[0], i.getConfidence(i.getValue()[0]))
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
var P = function (t) {
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
var U = function () {
  function t() {}
  t.prototype.decode = function (e, n) {
    if (undefined === n) {
      n = null
    }
    var r = t.decode(e, n, false)
    if (null == r || 0 === r.length || null == r[0]) {
      throw a.a.getNotFoundInstance()
    }
    return r[0]
  }
  t.prototype.decodeMultiple = function (e, n) {
    if (undefined === n) {
      n = null
    }
    try {
      return t.decode(e, n, true)
    } catch (r) {
      if (r instanceof o.a || r instanceof i.a) {
        throw a.a.getNotFoundInstance()
      }
      throw r
    }
  }
  t.decode = function (e, n, i) {
    var o
    var /* [auto-meaningful-name] */d$return
    var u = new Array()
    var c = b.detectMultiple(e, n, i)
    try {
      for (var d = P(c.getPoints()), f = d.next(); !f.done; f = d.next()) {
        var f$value = f.value
        var p = B.decode(c.getBits(), f$value[4], f$value[5], f$value[6], f$value[7], t.getMinCodewordWidth(f$value), t.getMaxCodewordWidth(f$value))
        var m = new s.a(p.getText(), p.getRawBytes(), undefined, f$value, r.a.PDF_417)
        m.putMetadata(l.a.ERROR_CORRECTION_LEVEL, p.getECLevel())
        var g = p.getOther()
        if (null != g) {
          m.putMetadata(l.a.PDF417_EXTRA_METADATA, g)
        }
        u.push(m)
      }
    } catch (v) {
      o = {
        error: v
      }
    } finally {
      try {
        if (f && !f.done && (d$return = d.return)) {
          d$return.call(d)
        }
      } finally {
        if (o) {
          throw o.error
        }
      }
    }
    return u.map(function (t) {
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
    return Math.floor(Math.max(Math.max(t.getMaxWidth(e[0], e[4]), t.getMaxWidth(e[6], e[2]) * u.a.MODULES_IN_CODEWORD / u.a.MODULES_IN_STOP_PATTERN), Math.max(t.getMaxWidth(e[1], e[5]), t.getMaxWidth(e[7], e[3]) * u.a.MODULES_IN_CODEWORD / u.a.MODULES_IN_STOP_PATTERN)))
  }
  t.getMinCodewordWidth = function (e) {
    return Math.floor(Math.min(Math.min(t.getMinWidth(e[0], e[4]), t.getMinWidth(e[6], e[2]) * u.a.MODULES_IN_CODEWORD / u.a.MODULES_IN_STOP_PATTERN), Math.min(t.getMinWidth(e[1], e[5]), t.getMinWidth(e[7], e[3]) * u.a.MODULES_IN_CODEWORD / u.a.MODULES_IN_STOP_PATTERN)))
  }
  t.prototype.reset = function () {}
  return t
}()
exports.a = U
