/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：408
 */

"use strict"

var n = require("./74")
var o = require("./181")
var i = require("./122")
var a = require("./36")
var u = require("./151")
var s = require("./170")
var c = require("./165")
var f = require("./191")
var h = require("./337")
var l = require("./296")
var d = require("./459")
var p = require("./509")
var g = require("./56")
var y = function () {
  function t(t) {
    var e = t.getHeight()
    if (e < 21 || 1 !== (3 & e)) {
      throw new g.a()
    }
    this.bitMatrix = t
  }
  t.prototype.readFormatInformation = function () {
    if (null !== this.parsedFormatInfo && undefined !== this.parsedFormatInfo) {
      return this.parsedFormatInfo
    }
    for (var t = 0, e = 0; e < 6; e++) {
      t = this.copyBit(e, 8, t)
    }
    t = this.copyBit(7, 8, t)
    t = this.copyBit(8, 8, t)
    t = this.copyBit(8, 7, t)
    for (var r = 5; r >= 0; r--) {
      t = this.copyBit(8, r, t)
    }
    var n = this.bitMatrix.getHeight()
    var o = 0
    var i = n - 7
    for (r = n - 1; r >= i; r--) {
      o = this.copyBit(8, r, o)
    }
    for (e = n - 8; e < n; e++) {
      o = this.copyBit(e, 8, o)
    }
    this.parsedFormatInfo = d.a.decodeFormatInformation(t, o)
    if (null !== this.parsedFormatInfo) {
      return this.parsedFormatInfo
    }
    throw new g.a()
  }
  t.prototype.readVersion = function () {
    if (null !== this.parsedVersion && undefined !== this.parsedVersion) {
      return this.parsedVersion
    }
    var t = this.bitMatrix.getHeight()
    var e = Math.floor((t - 17) / 4)
    if (e <= 6) {
      return l.a.getVersionForNumber(e)
    }
    for (var r = 0, n = t - 11, o = 5; o >= 0; o--) {
      for (var i = t - 9; i >= n; i--) {
        r = this.copyBit(i, o, r)
      }
    }
    var a = l.a.decodeVersionInformation(r)
    if (null !== a && a.getDimensionForVersion() === t) {
      this.parsedVersion = a
      return a
    }
    r = 0
    for (i = 5; i >= 0; i--) {
      for (o = t - 9; o >= n; o--) {
        r = this.copyBit(i, o, r)
      }
    }
    if (null !== (a = l.a.decodeVersionInformation(r)) && a.getDimensionForVersion() === t) {
      this.parsedVersion = a
      return a
    }
    throw new g.a()
  }
  t.prototype.copyBit = function (t, e, r) {
    return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? r << 1 | 1 : r << 1
  }
  t.prototype.readCodewords = function () {
    var t = this.readFormatInformation()
    var e = this.readVersion()
    var r = p.a.values.get(t.getDataMask())
    var n = this.bitMatrix.getHeight()
    r.unmaskBitMatrix(this.bitMatrix, n)
    for (var o = e.buildFunctionPattern(), i = true, a = new Uint8Array(e.getTotalCodewords()), u = 0, s = 0, c = 0, f = n - 1; f > 0; f -= 2) {
      if (6 === f) {
        f--
      }
      for (var h = 0; h < n; h++) {
        for (var l = i ? n - 1 - h : h, d = 0; d < 2; d++) {
          if (!o.get(f - d, l)) {
            c++
            s <<= 1
            if (this.bitMatrix.get(f - d, l)) {
              s |= 1
            }
            if (8 === c) {
              a[u++] = s
              c = 0
              s = 0
            }
          }
        }
      }
      i = !i
    }
    if (u !== e.getTotalCodewords()) {
      throw new g.a()
    }
    return a
  }
  t.prototype.remask = function () {
    if (null !== this.parsedFormatInfo) {
      var t = p.a.values[this.parsedFormatInfo.getDataMask()]
      var e = this.bitMatrix.getHeight()
      t.unmaskBitMatrix(this.bitMatrix, e)
    }
  }
  t.prototype.setMirror = function (t) {
    this.parsedVersion = null
    this.parsedFormatInfo = null
    this.isMirror = t
  }
  t.prototype.mirror = function () {
    for (var /* [auto-meaningful-name] */this$bitMatrix = this.bitMatrix, e = 0, r = this$bitMatrix.getWidth(); e < r; e++) {
      for (var n = e + 1, o = this$bitMatrix.getHeight(); n < o; n++) {
        if (this$bitMatrix.get(e, n) !== this$bitMatrix.get(n, e)) {
          this$bitMatrix.flip(n, e)
          this$bitMatrix.flip(e, n)
        }
      }
    }
  }
  return t
}()
var w = require("./63")
var v = function (t) {
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
var _ = function () {
  function t(t, e) {
    this.numDataCodewords = t
    this.codewords = e
  }
  t.getDataBlocks = function (e, r, n) {
    var o
    var /* [auto-meaningful-name] */h$return
    var a
    var /* [auto-meaningful-name] */g$return
    if (e.length !== r.getTotalCodewords()) {
      throw new w.a()
    }
    var s = r.getECBlocksForLevel(n)
    var c = 0
    var f = s.getECBlocks()
    try {
      for (var h = v(f), l = h.next(); !l.done; l = h.next()) {
        c += (y$value = l.value).getCount()
      }
    } catch (N) {
      o = {
        error: N
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
    var d = new Array(c)
    var p = 0
    try {
      for (var g = v(f), y = g.next(); !y.done; y = g.next()) {
        for (var /* [auto-meaningful-name] */y$value = y.value, m = 0; m < y$value.getCount(); m++) {
          var A = y$value.getDataCodewords()
          var E = s.getECCodewordsPerBlock() + A
          d[p++] = new t(A, new Uint8Array(E))
        }
      }
    } catch (D) {
      a = {
        error: D
      }
    } finally {
      try {
        if (y && !y.done && (g$return = g.return)) {
          g$return.call(g)
        }
      } finally {
        if (a) {
          throw a.error
        }
      }
    }
    for (var /* [auto-meaningful-name] */d0$codewords$length = d[0].codewords.length, I = d.length - 1; I >= 0;) {
      if (d[I].codewords.length === d0$codewords$length) {
        break
      }
      I--
    }
    I++
    var S = d0$codewords$length - s.getECCodewordsPerBlock()
    var T = 0
    for (m = 0; m < S; m++) {
      for (var O = 0; O < p; O++) {
        d[O].codewords[m] = e[T++]
      }
    }
    for (O = I; O < p; O++) {
      d[O].codewords[S] = e[T++]
    }
    var /* [auto-meaningful-name] */d0$codewords$length1 = d[0].codewords.length
    for (m = S; m < d0$codewords$length1; m++) {
      for (O = 0; O < p; O++) {
        var R = O < I ? m : m + 1
        d[O].codewords[R] = e[T++]
      }
    }
    return d
  }
  t.prototype.getNumDataCodewords = function () {
    return this.numDataCodewords
  }
  t.prototype.getCodewords = function () {
    return this.codewords
  }
  return t
}()
var m = require("./595")
var A = function () {
  function t(t) {
    this.mirrored = t
  }
  t.prototype.isMirrored = function () {
    return this.mirrored
  }
  t.prototype.applyMirroredCorrection = function (t) {
    if (this.mirrored && null !== t && !(t.length < 3)) {
      var e = t[0]
      t[0] = t[2]
      t[2] = e
    }
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
  function t() {
    this.rsDecoder = new h.a(f.a.QR_CODE_FIELD_256)
  }
  t.prototype.decodeBooleanArray = function (t, e) {
    return this.decodeBitMatrix(o.a.parseFromBooleanArray(t), e)
  }
  t.prototype.decodeBitMatrix = function (t, e) {
    var r = new y(t)
    var n = null
    try {
      return this.decodeBitMatrixParser(r, e)
    } catch (i) {
      n = i
    }
    try {
      r.remask()
      r.setMirror(true)
      r.readVersion()
      r.readFormatInformation()
      r.mirror()
      var o = this.decodeBitMatrixParser(r, e)
      o.setOther(new A(true))
      return o
    } catch (i) {
      if (null !== n) {
        throw n
      }
      throw i
    }
  }
  t.prototype.decodeBitMatrixParser = function (t, e) {
    var r
    var /* [auto-meaningful-name] */h$return
    var o
    var /* [auto-meaningful-name] */g$return
    var a = t.readVersion()
    var u = t.readFormatInformation().getErrorCorrectionLevel()
    var s = t.readCodewords()
    var c = _.getDataBlocks(s, a, u)
    var f = 0
    try {
      for (var h = E(c), l = h.next(); !l.done; l = h.next()) {
        f += (w = l.value).getNumDataCodewords()
      }
    } catch (I) {
      r = {
        error: I
      }
    } finally {
      try {
        if (l && !l.done && (h$return = h.return)) {
          h$return.call(h)
        }
      } finally {
        if (r) {
          throw r.error
        }
      }
    }
    var d = new Uint8Array(f)
    var p = 0
    try {
      for (var g = E(c), y = g.next(); !y.done; y = g.next()) {
        var w
        var v = (w = y.value).getCodewords()
        var A = w.getNumDataCodewords()
        this.correctErrors(v, A)
        for (var C = 0; C < A; C++) {
          d[p++] = v[C]
        }
      }
    } catch (S) {
      o = {
        error: S
      }
    } finally {
      try {
        if (y && !y.done && (g$return = g.return)) {
          g$return.call(g)
        }
      } finally {
        if (o) {
          throw o.error
        }
      }
    }
    return m.a.decode(d, a, u, e)
  }
  t.prototype.correctErrors = function (t, e) {
    var r = new Int32Array(t)
    try {
      this.rsDecoder.decode(r, t.length - e)
    } catch (o) {
      throw new c.a()
    }
    for (var n = 0; n < e; n++) {
      t[n] = r[n]
    }
  }
  return t
}()
var I = require("./116")
var S = require("./371")
var T = require("./372")
var O = require("./456")
var b = require("./73")
var R = function () {
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
var N = function (t) {
  function e(e, r, n) {
    var o = t.call(this, e, r) || this
    o.estimatedModuleSize = n
    return o
  }
  R(e, t)
  e.prototype.aboutEquals = function (t, e, r) {
    if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
      var n = Math.abs(t - this.estimatedModuleSize)
      return n <= 1 || n <= this.estimatedModuleSize
    }
    return false
  }
  e.prototype.combineEstimate = function (t, r, n) {
    return new e((this.getX() + r) / 2, (this.getY() + t) / 2, (this.estimatedModuleSize + n) / 2)
  }
  return e
}(b.a)
var D = function (t) {
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
var M = function () {
  function t(t, e, r, n, o, i, a) {
    this.image = t
    this.startX = e
    this.startY = r
    this.width = n
    this.height = o
    this.moduleSize = i
    this.resultPointCallback = a
    this.possibleCenters = []
    this.crossCheckStateCount = new Int32Array(3)
  }
  t.prototype.find = function () {
    for (var /* [auto-meaningful-name] */this$startX = this.startX, /* [auto-meaningful-name] */this$height = this.height, r = this$startX + this.width, n = this.startY + this$height / 2, o = new Int32Array(3), /* [auto-meaningful-name] */this$image = this.image, u = 0; u < this$height; u++) {
      var s = n + (0 === (1 & u) ? Math.floor((u + 1) / 2) : -Math.floor((u + 1) / 2))
      o[0] = 0
      o[1] = 0
      o[2] = 0
      for (var c = this$startX; c < r && !this$image.get(c, s);) {
        c++
      }
      for (var f = 0; c < r;) {
        if (this$image.get(c, s)) {
          if (1 === f) {
            o[1]++
          } else if (2 === f) {
            var h
            if (this.foundPatternCross(o)) {
              if (null !== (h = this.handlePossibleCenter(o, s, c))) {
                return h
              }
            }
            o[0] = o[2]
            o[1] = 1
            o[2] = 0
            f = 1
          } else {
            o[++f]++
          }
        } else {
          if (1 === f) {
            f++
          }
          o[f]++
        }
        c++
      }
      if (this.foundPatternCross(o)) {
        if (null !== (h = this.handlePossibleCenter(o, s, r))) {
          return h
        }
      }
    }
    if (0 !== this.possibleCenters.length) {
      return this.possibleCenters[0]
    }
    throw new a.a()
  }
  t.centerFromEnd = function (t, e) {
    return e - t[2] - t[1] / 2
  }
  t.prototype.foundPatternCross = function (t) {
    for (var /* [auto-meaningful-name] */this$moduleSize = this.moduleSize, r = this$moduleSize / 2, n = 0; n < 3; n++) {
      if (Math.abs(this$moduleSize - t[n]) >= r) {
        return false
      }
    }
    return true
  }
  t.prototype.crossCheckVertical = function (e, r, n, o) {
    var /* [auto-meaningful-name] */this$image = this.image
    var a = this$image.getHeight()
    var /* [auto-meaningful-name] */this$crossCheckStateCount = this.crossCheckStateCount
    this$crossCheckStateCount[0] = 0
    this$crossCheckStateCount[1] = 0
    this$crossCheckStateCount[2] = 0
    for (var s = e; s >= 0 && this$image.get(r, s) && this$crossCheckStateCount[1] <= n;) {
      this$crossCheckStateCount[1]++
      s--
    }
    if (s < 0 || this$crossCheckStateCount[1] > n) {
      return NaN
    }
    for (; s >= 0 && !this$image.get(r, s) && this$crossCheckStateCount[0] <= n;) {
      this$crossCheckStateCount[0]++
      s--
    }
    if (this$crossCheckStateCount[0] > n) {
      return NaN
    }
    for (s = e + 1; s < a && this$image.get(r, s) && this$crossCheckStateCount[1] <= n;) {
      this$crossCheckStateCount[1]++
      s++
    }
    if (s === a || this$crossCheckStateCount[1] > n) {
      return NaN
    }
    for (; s < a && !this$image.get(r, s) && this$crossCheckStateCount[2] <= n;) {
      this$crossCheckStateCount[2]++
      s++
    }
    if (this$crossCheckStateCount[2] > n) {
      return NaN
    }
    var c = this$crossCheckStateCount[0] + this$crossCheckStateCount[1] + this$crossCheckStateCount[2]
    return 5 * Math.abs(c - o) >= 2 * o ? NaN : this.foundPatternCross(this$crossCheckStateCount) ? t.centerFromEnd(this$crossCheckStateCount, s) : NaN
  }
  t.prototype.handlePossibleCenter = function (e, r, n) {
    var o
    var /* [auto-meaningful-name] */f$return
    var a = e[0] + e[1] + e[2]
    var u = t.centerFromEnd(e, n)
    var s = this.crossCheckVertical(r, u, 2 * e[1], a)
    if (!isNaN(s)) {
      var c = (e[0] + e[1] + e[2]) / 3
      try {
        for (var f = D(this.possibleCenters), h = f.next(); !h.done; h = f.next()) {
          var /* [auto-meaningful-name] */h$value = h.value
          if (h$value.aboutEquals(c, s, u)) {
            return h$value.combineEstimate(s, u, c)
          }
        }
      } catch (p) {
        o = {
          error: p
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
      var d = new N(u, s, c)
      this.possibleCenters.push(d)
      if (null !== this.resultPointCallback && undefined !== this.resultPointCallback) {
        this.resultPointCallback.foundPossibleResultPoint(d)
      }
    }
    return null
  }
  return t
}()
var P = function () {
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
var B = function (t) {
  function e(e, r, n, o) {
    var i = t.call(this, e, r) || this
    i.estimatedModuleSize = n
    i.count = o
    if (undefined === o) {
      i.count = 1
    }
    return i
  }
  P(e, t)
  e.prototype.getEstimatedModuleSize = function () {
    return this.estimatedModuleSize
  }
  e.prototype.getCount = function () {
    return this.count
  }
  e.prototype.aboutEquals = function (t, e, r) {
    if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
      var n = Math.abs(t - this.estimatedModuleSize)
      return n <= 1 || n <= this.estimatedModuleSize
    }
    return false
  }
  e.prototype.combineEstimate = function (t, r, n) {
    var o = this.count + 1
    return new e((this.count * this.getX() + r) / o, (this.count * this.getY() + t) / o, (this.count * this.estimatedModuleSize + n) / o, o)
  }
  return e
}(b.a)
var L = function () {
  function t(t) {
    this.bottomLeft = t[0]
    this.topLeft = t[1]
    this.topRight = t[2]
  }
  t.prototype.getBottomLeft = function () {
    return this.bottomLeft
  }
  t.prototype.getTopLeft = function () {
    return this.topLeft
  }
  t.prototype.getTopRight = function () {
    return this.topRight
  }
  return t
}()
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
  function t(t, e) {
    this.image = t
    this.resultPointCallback = e
    this.possibleCenters = []
    this.crossCheckStateCount = new Int32Array(5)
    this.resultPointCallback = e
  }
  t.prototype.getImage = function () {
    return this.image
  }
  t.prototype.getPossibleCenters = function () {
    return this.possibleCenters
  }
  t.prototype.find = function (e) {
    var r = null !== e && undefined !== e && undefined !== e.get(i.a.TRY_HARDER)
    var n = null !== e && undefined !== e && undefined !== e.get(i.a.PURE_BARCODE)
    var /* [auto-meaningful-name] */this$image = this.image
    var a = this$image.getHeight()
    var u = this$image.getWidth()
    var s = Math.floor(3 * a / (4 * t.MAX_MODULES))
    if (s < t.MIN_SKIP || r) {
      s = t.MIN_SKIP
    }
    for (var c = false, f = new Int32Array(5), h = s - 1; h < a && !c; h += s) {
      f[0] = 0
      f[1] = 0
      f[2] = 0
      f[3] = 0
      f[4] = 0
      for (var l = 0, d = 0; d < u; d++) {
        if (this$image.get(d, h)) {
          if (1 === (1 & l)) {
            l++
          }
          f[l]++
        } else if (0 === (1 & l)) {
          if (4 === l) {
            if (t.foundPatternCross(f)) {
              if (true !== this.handlePossibleCenter(f, h, d, n)) {
                f[0] = f[2]
                f[1] = f[3]
                f[2] = f[4]
                f[3] = 1
                f[4] = 0
                l = 3
                continue
              }
              s = 2
              if (true === this.hasSkipped) {
                c = this.haveMultiplyConfirmedCenters()
              } else {
                var p = this.findRowSkip()
                if (p > f[2]) {
                  h += p - f[2] - s
                  d = u - 1
                }
              }
              l = 0
              f[0] = 0
              f[1] = 0
              f[2] = 0
              f[3] = 0
              f[4] = 0
            } else {
              f[0] = f[2]
              f[1] = f[3]
              f[2] = f[4]
              f[3] = 1
              f[4] = 0
              l = 3
            }
          } else {
            f[++l]++
          }
        } else {
          f[l]++
        }
      }
      if (t.foundPatternCross(f)) {
        if (true === this.handlePossibleCenter(f, h, u, n)) {
          s = f[0]
          if (this.hasSkipped) {
            c = this.haveMultiplyConfirmedCenters()
          }
        }
      }
    }
    var g = this.selectBestPatterns()
    b.a.orderBestPatterns(g)
    return new L(g)
  }
  t.centerFromEnd = function (t, e) {
    return e - t[4] - t[3] - t[2] / 2
  }
  t.foundPatternCross = function (t) {
    for (var e = 0, r = 0; r < 5; r++) {
      var n = t[r]
      if (0 === n) {
        return false
      }
      e += n
    }
    if (e < 7) {
      return false
    }
    var o = e / 7
    var i = o / 2
    return Math.abs(o - t[0]) < i && Math.abs(o - t[1]) < i && Math.abs(3 * o - t[2]) < 3 * i && Math.abs(o - t[3]) < i && Math.abs(o - t[4]) < i
  }
  t.prototype.getCrossCheckStateCount = function () {
    var /* [auto-meaningful-name] */this$crossCheckStateCount = this.crossCheckStateCount
    this$crossCheckStateCount[0] = 0
    this$crossCheckStateCount[1] = 0
    this$crossCheckStateCount[2] = 0
    this$crossCheckStateCount[3] = 0
    this$crossCheckStateCount[4] = 0
    return this$crossCheckStateCount
  }
  t.prototype.crossCheckDiagonal = function (e, r, n, o) {
    for (var i = this.getCrossCheckStateCount(), a = 0, /* [auto-meaningful-name] */this$image = this.image; e >= a && r >= a && this$image.get(r - a, e - a);) {
      i[2]++
      a++
    }
    if (e < a || r < a) {
      return false
    }
    for (; e >= a && r >= a && !this$image.get(r - a, e - a) && i[1] <= n;) {
      i[1]++
      a++
    }
    if (e < a || r < a || i[1] > n) {
      return false
    }
    for (; e >= a && r >= a && this$image.get(r - a, e - a) && i[0] <= n;) {
      i[0]++
      a++
    }
    if (i[0] > n) {
      return false
    }
    var s = this$image.getHeight()
    var c = this$image.getWidth()
    for (a = 1; e + a < s && r + a < c && this$image.get(r + a, e + a);) {
      i[2]++
      a++
    }
    if (e + a >= s || r + a >= c) {
      return false
    }
    for (; e + a < s && r + a < c && !this$image.get(r + a, e + a) && i[3] < n;) {
      i[3]++
      a++
    }
    if (e + a >= s || r + a >= c || i[3] >= n) {
      return false
    }
    for (; e + a < s && r + a < c && this$image.get(r + a, e + a) && i[4] < n;) {
      i[4]++
      a++
    }
    if (i[4] >= n) {
      return false
    }
    var f = i[0] + i[1] + i[2] + i[3] + i[4]
    return Math.abs(f - o) < 2 * o && t.foundPatternCross(i)
  }
  t.prototype.crossCheckVertical = function (e, r, n, o) {
    for (var /* [auto-meaningful-name] */this$image = this.image, a = this$image.getHeight(), u = this.getCrossCheckStateCount(), s = e; s >= 0 && this$image.get(r, s);) {
      u[2]++
      s--
    }
    if (s < 0) {
      return NaN
    }
    for (; s >= 0 && !this$image.get(r, s) && u[1] <= n;) {
      u[1]++
      s--
    }
    if (s < 0 || u[1] > n) {
      return NaN
    }
    for (; s >= 0 && this$image.get(r, s) && u[0] <= n;) {
      u[0]++
      s--
    }
    if (u[0] > n) {
      return NaN
    }
    for (s = e + 1; s < a && this$image.get(r, s);) {
      u[2]++
      s++
    }
    if (s === a) {
      return NaN
    }
    for (; s < a && !this$image.get(r, s) && u[3] < n;) {
      u[3]++
      s++
    }
    if (s === a || u[3] >= n) {
      return NaN
    }
    for (; s < a && this$image.get(r, s) && u[4] < n;) {
      u[4]++
      s++
    }
    if (u[4] >= n) {
      return NaN
    }
    var c = u[0] + u[1] + u[2] + u[3] + u[4]
    return 5 * Math.abs(c - o) >= 2 * o ? NaN : t.foundPatternCross(u) ? t.centerFromEnd(u, s) : NaN
  }
  t.prototype.crossCheckHorizontal = function (e, r, n, o) {
    for (var /* [auto-meaningful-name] */this$image = this.image, a = this$image.getWidth(), u = this.getCrossCheckStateCount(), s = e; s >= 0 && this$image.get(s, r);) {
      u[2]++
      s--
    }
    if (s < 0) {
      return NaN
    }
    for (; s >= 0 && !this$image.get(s, r) && u[1] <= n;) {
      u[1]++
      s--
    }
    if (s < 0 || u[1] > n) {
      return NaN
    }
    for (; s >= 0 && this$image.get(s, r) && u[0] <= n;) {
      u[0]++
      s--
    }
    if (u[0] > n) {
      return NaN
    }
    for (s = e + 1; s < a && this$image.get(s, r);) {
      u[2]++
      s++
    }
    if (s === a) {
      return NaN
    }
    for (; s < a && !this$image.get(s, r) && u[3] < n;) {
      u[3]++
      s++
    }
    if (s === a || u[3] >= n) {
      return NaN
    }
    for (; s < a && this$image.get(s, r) && u[4] < n;) {
      u[4]++
      s++
    }
    if (u[4] >= n) {
      return NaN
    }
    var c = u[0] + u[1] + u[2] + u[3] + u[4]
    return 5 * Math.abs(c - o) >= o ? NaN : t.foundPatternCross(u) ? t.centerFromEnd(u, s) : NaN
  }
  t.prototype.handlePossibleCenter = function (e, r, n, o) {
    var i = e[0] + e[1] + e[2] + e[3] + e[4]
    var a = t.centerFromEnd(e, n)
    var u = this.crossCheckVertical(r, Math.floor(a), e[2], i)
    if (!isNaN(u) && (a = this.crossCheckHorizontal(Math.floor(a), Math.floor(u), e[2], i), !isNaN(a) && (!o || this.crossCheckDiagonal(Math.floor(u), Math.floor(a), e[2], i)))) {
      for (var s = i / 7, c = false, /* [auto-meaningful-name] */this$possibleCenters = this.possibleCenters, h = 0, /* [auto-meaningful-name] */this$possibleCenters$length = this$possibleCenters.length; h < this$possibleCenters$length; h++) {
        var d = this$possibleCenters[h]
        if (d.aboutEquals(s, u, a)) {
          this$possibleCenters[h] = d.combineEstimate(u, a, s)
          c = true
          break
        }
      }
      if (!c) {
        var p = new B(a, u, s)
        this$possibleCenters.push(p)
        if (null !== this.resultPointCallback && undefined !== this.resultPointCallback) {
          this.resultPointCallback.foundPossibleResultPoint(p)
        }
      }
      return true
    }
    return false
  }
  t.prototype.findRowSkip = function () {
    var e
    var /* [auto-meaningful-name] */o$return
    if (this.possibleCenters.length <= 1) {
      return 0
    }
    var n = null
    try {
      for (var o = F(this.possibleCenters), i = o.next(); !i.done; i = o.next()) {
        var /* [auto-meaningful-name] */i$value = i.value
        if (i$value.getCount() >= t.CENTER_QUORUM) {
          if (null != n) {
            this.hasSkipped = true
            return Math.floor((Math.abs(n.getX() - i$value.getX()) - Math.abs(n.getY() - i$value.getY())) / 2)
          }
          n = i$value
        }
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
    return 0
  }
  t.prototype.haveMultiplyConfirmedCenters = function () {
    var e
    var /* [auto-meaningful-name] */s$return
    var n
    var /* [auto-meaningful-name] */l$return
    var i = 0
    var a = 0
    var /* [auto-meaningful-name] */this$possibleCenters$length = this.possibleCenters.length
    try {
      for (var s = F(this.possibleCenters), c = s.next(); !c.done; c = s.next()) {
        if ((d$value = c.value).getCount() >= t.CENTER_QUORUM) {
          i++
          a += d$value.getEstimatedModuleSize()
        }
      }
    } catch (g) {
      e = {
        error: g
      }
    } finally {
      try {
        if (c && !c.done && (s$return = s.return)) {
          s$return.call(s)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    if (i < 3) {
      return false
    }
    var f = a / this$possibleCenters$length
    var h = 0
    try {
      for (var l = F(this.possibleCenters), d = l.next(); !d.done; d = l.next()) {
        var /* [auto-meaningful-name] */d$value = d.value
        h += Math.abs(d$value.getEstimatedModuleSize() - f)
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
    return h <= .05 * a
  }
  t.prototype.selectBestPatterns = function () {
    var t
    var /* [auto-meaningful-name] */f$return
    var r
    var /* [auto-meaningful-name] */w$return
    var /* [auto-meaningful-name] */this$possibleCenters$length = this.possibleCenters.length
    if (this$possibleCenters$length < 3) {
      throw new a.a()
    }
    var i
    var /* [auto-meaningful-name] */this$possibleCenters = this.possibleCenters
    if (this$possibleCenters$length > 3) {
      var s = 0
      var c = 0
      try {
        for (var f = F(this.possibleCenters), h = f.next(); !h.done; h = f.next()) {
          var l = h.value.getEstimatedModuleSize()
          s += l
          c += l * l
        }
      } catch (_) {
        t = {
          error: _
        }
      } finally {
        try {
          if (h && !h.done && (f$return = f.return)) {
            f$return.call(f)
          }
        } finally {
          if (t) {
            throw t.error
          }
        }
      }
      i = s / this$possibleCenters$length
      var d = Math.sqrt(c / this$possibleCenters$length - i * i)
      this$possibleCenters.sort(function (t, e) {
        var r = Math.abs(e.getEstimatedModuleSize() - i)
        var n = Math.abs(t.getEstimatedModuleSize() - i)
        return r < n ? -1 : r > n ? 1 : 0
      })
      for (var p = Math.max(.2 * i, d), g = 0; g < this$possibleCenters.length && this$possibleCenters.length > 3; g++) {
        var y = this$possibleCenters[g]
        if (Math.abs(y.getEstimatedModuleSize() - i) > p) {
          this$possibleCenters.splice(g, 1)
          g--
        }
      }
    }
    if (this$possibleCenters.length > 3) {
      s = 0
      try {
        for (var w = F(this$possibleCenters), v = w.next(); !v.done; v = w.next()) {
          s += v.value.getEstimatedModuleSize()
        }
      } catch (m) {
        r = {
          error: m
        }
      } finally {
        try {
          if (v && !v.done && (w$return = w.return)) {
            w$return.call(w)
          }
        } finally {
          if (r) {
            throw r.error
          }
        }
      }
      i = s / this$possibleCenters.length
      this$possibleCenters.sort(function (t, e) {
        if (e.getCount() === t.getCount()) {
          var r = Math.abs(e.getEstimatedModuleSize() - i)
          var n = Math.abs(t.getEstimatedModuleSize() - i)
          return r < n ? 1 : r > n ? -1 : 0
        }
        return e.getCount() - t.getCount()
      })
      this$possibleCenters.splice(3)
    }
    return [this$possibleCenters[0], this$possibleCenters[1], this$possibleCenters[2]]
  }
  t.CENTER_QUORUM = 2
  t.MIN_SKIP = 3
  t.MAX_MODULES = 57
  return t
}()
var k = function () {
  function t(t) {
    this.image = t
  }
  t.prototype.getImage = function () {
    return this.image
  }
  t.prototype.getResultPointCallback = function () {
    return this.resultPointCallback
  }
  t.prototype.detect = function (t) {
    this.resultPointCallback = null === t || undefined === t ? null : t.get(i.a.NEED_RESULT_POINT_CALLBACK)
    var e = new x(this.image, this.resultPointCallback).find(t)
    return this.processFinderPatternInfo(e)
  }
  t.prototype.processFinderPatternInfo = function (e) {
    var r = e.getTopLeft()
    var n = e.getTopRight()
    var o = e.getBottomLeft()
    var i = this.calculateModuleSize(r, n, o)
    if (i < 1) {
      throw new a.a("No pattern found in proccess finder.")
    }
    var u = t.computeDimension(r, n, o, i)
    var s = l.a.getProvisionalVersionForDimension(u)
    var c = s.getDimensionForVersion() - 7
    var f = null
    if (s.getAlignmentPatternCenters().length > 0) {
      for (var h = n.getX() - r.getX() + o.getX(), d = n.getY() - r.getY() + o.getY(), p = 1 - 3 / c, g = Math.floor(r.getX() + p * (h - r.getX())), y = Math.floor(r.getY() + p * (d - r.getY())), w = 4; w <= 16; w <<= 1) {
        try {
          f = this.findAlignmentInRegion(i, g, y, w)
          break
        } catch (A) {
          if (!(A instanceof a.a)) {
            throw A
          }
        }
      }
    }
    var v
    var _ = t.createTransform(r, n, o, f, u)
    var m = t.sampleGrid(this.image, _, u)
    v = null === f ? [o, r, n] : [o, r, n, f]
    return new S.a(m, v)
  }
  t.createTransform = function (t, e, r, n, o) {
    var i
    var a
    var u
    var s
    var c = o - 3.5
    if (null !== n) {
      i = n.getX()
      a = n.getY()
      s = u = c - 3
    } else {
      i = e.getX() - t.getX() + r.getX()
      a = e.getY() - t.getY() + r.getY()
      u = c
      s = c
    }
    return O.a.quadrilateralToQuadrilateral(3.5, 3.5, c, 3.5, u, s, 3.5, c, t.getX(), t.getY(), e.getX(), e.getY(), i, a, r.getX(), r.getY())
  }
  t.sampleGrid = function (t, e, r) {
    return T.a.getInstance().sampleGridWithTransform(t, r, r, e)
  }
  t.computeDimension = function (t, e, r, n) {
    var o = I.a.round(b.a.distance(t, e) / n)
    var i = I.a.round(b.a.distance(t, r) / n)
    var u = Math.floor((o + i) / 2) + 7
    switch (3 & u) {
      case 0:
        u++
        break
      case 2:
        u--
        break
      case 3:
        throw new a.a("Dimensions could be not found.")
    }
    return u
  }
  t.prototype.calculateModuleSize = function (t, e, r) {
    return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, r)) / 2
  }
  t.prototype.calculateModuleSizeOneWay = function (t, e) {
    var r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY()))
    var n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY()))
    return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14
  }
  t.prototype.sizeOfBlackWhiteBlackRunBothWays = function (t, e, r, n) {
    var o = this.sizeOfBlackWhiteBlackRun(t, e, r, n)
    var i = 1
    var a = t - (r - t)
    if (a < 0) {
      i = t / (t - a)
      a = 0
    } else {
      if (a >= this.image.getWidth()) {
        i = (this.image.getWidth() - 1 - t) / (a - t)
        a = this.image.getWidth() - 1
      }
    }
    var u = Math.floor(e - (n - e) * i)
    i = 1
    if (u < 0) {
      i = e / (e - u)
      u = 0
    } else {
      if (u >= this.image.getHeight()) {
        i = (this.image.getHeight() - 1 - e) / (u - e)
        u = this.image.getHeight() - 1
      }
    }
    a = Math.floor(t + (a - t) * i)
    return (o += this.sizeOfBlackWhiteBlackRun(t, e, a, u)) - 1
  }
  t.prototype.sizeOfBlackWhiteBlackRun = function (t, e, r, n) {
    var o = Math.abs(n - e) > Math.abs(r - t)
    if (o) {
      var i = t
      t = e
      e = i
      i = r
      r = n
      n = i
    }
    for (var a = Math.abs(r - t), u = Math.abs(n - e), s = -a / 2, c = t < r ? 1 : -1, f = e < n ? 1 : -1, h = 0, l = r + c, d = t, p = e; d !== l; d += c) {
      var g = o ? p : d
      var y = o ? d : p
      if (1 === h === this.image.get(g, y)) {
        if (2 === h) {
          return I.a.distance(d, p, t, e)
        }
        h++
      }
      if ((s += u) > 0) {
        if (p === n) {
          break
        }
        p += f
        s -= a
      }
    }
    return 2 === h ? I.a.distance(r + c, n, t, e) : NaN
  }
  t.prototype.findAlignmentInRegion = function (t, e, r, n) {
    var o = Math.floor(n * t)
    var i = Math.max(0, e - o)
    var u = Math.min(this.image.getWidth() - 1, e + o)
    if (u - i < 3 * t) {
      throw new a.a("Alignment top exceeds estimated module size.")
    }
    var s = Math.max(0, r - o)
    var c = Math.min(this.image.getHeight() - 1, r + o)
    if (c - s < 3 * t) {
      throw new a.a("Alignment bottom exceeds estimated module size.")
    }
    return new M(this.image, i, s, u - i, c - s, t, this.resultPointCallback).find()
  }
  return t
}()
var V = function () {
  function t() {
    this.decoder = new C()
  }
  t.prototype.getDecoder = function () {
    return this.decoder
  }
  t.prototype.decode = function (e, r) {
    var o
    var a
    if (undefined !== r && null !== r && undefined !== r.get(i.a.PURE_BARCODE)) {
      var c = t.extractPureBits(e.getBlackMatrix())
      o = this.decoder.decodeBitMatrix(c, r)
      a = t.NO_POINTS
    } else {
      var f = new k(e.getBlackMatrix()).detect(r)
      o = this.decoder.decodeBitMatrix(f.getBits(), r)
      a = f.getPoints()
    }
    if (o.getOther() instanceof A) {
      o.getOther().applyMirroredCorrection(a)
    }
    var h = new u.a(o.getText(), o.getRawBytes(), undefined, a, n.a.QR_CODE, undefined)
    var l = o.getByteSegments()
    if (null !== l) {
      h.putMetadata(s.a.BYTE_SEGMENTS, l)
    }
    var d = o.getECLevel()
    if (null !== d) {
      h.putMetadata(s.a.ERROR_CORRECTION_LEVEL, d)
    }
    if (o.hasStructuredAppend()) {
      h.putMetadata(s.a.STRUCTURED_APPEND_SEQUENCE, o.getStructuredAppendSequenceNumber())
      h.putMetadata(s.a.STRUCTURED_APPEND_PARITY, o.getStructuredAppendParity())
    }
    return h
  }
  t.prototype.reset = function () {}
  t.extractPureBits = function (t) {
    var e = t.getTopLeftOnBit()
    var r = t.getBottomRightOnBit()
    if (null === e || null === r) {
      throw new a.a()
    }
    var n = this.moduleSize(e, t)
    var i = e[1]
    var u = r[1]
    var s = e[0]
    var c = r[0]
    if (s >= c || i >= u) {
      throw new a.a()
    }
    if (u - i !== c - s && (c = s + (u - i)) >= t.getWidth()) {
      throw new a.a()
    }
    var f = Math.round((c - s + 1) / n)
    var h = Math.round((u - i + 1) / n)
    if (f <= 0 || h <= 0) {
      throw new a.a()
    }
    if (h !== f) {
      throw new a.a()
    }
    var l = Math.floor(n / 2)
    i += l
    var d = (s += l) + Math.floor((f - 1) * n) - c
    if (d > 0) {
      if (d > l) {
        throw new a.a()
      }
      s -= d
    }
    var p = i + Math.floor((h - 1) * n) - u
    if (p > 0) {
      if (p > l) {
        throw new a.a()
      }
      i -= p
    }
    for (var g = new o.a(f, h), y = 0; y < h; y++) {
      for (var w = i + Math.floor(y * n), v = 0; v < f; v++) {
        if (t.get(s + Math.floor(v * n), w)) {
          g.set(v, y)
        }
      }
    }
    return g
  }
  t.moduleSize = function (t, e) {
    for (var r = e.getHeight(), n = e.getWidth(), o = t[0], i = t[1], u = true, s = 0; o < n && i < r;) {
      if (u !== e.get(o, i)) {
        if (5 === ++s) {
          break
        }
        u = !u
      }
      o++
      i++
    }
    if (o === n || i === r) {
      throw new a.a()
    }
    return (o - t[0]) / 7
  }
  t.NO_POINTS = new Array()
  return t
}()
exports.a = V
