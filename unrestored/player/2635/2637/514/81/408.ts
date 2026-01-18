/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：408
 */

"use strict"

var r = require("./74")
var i = require("./181")
var o = require("./122")
var a = require("./36")
var s = require("./151")
var u = require("./170")
var c = require("./165")
var l = require("./191")
var d = require("./337")
var f = require("./296")
var h = require("./459")
var p = require("./509")
var m = require("./56")
var b = function () {
  function t(t) {
    var e = t.getHeight()
    if (e < 21 || 1 !== (3 & e)) {
      throw new m.a()
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
    for (var n = 5; n >= 0; n--) {
      t = this.copyBit(8, n, t)
    }
    var r = this.bitMatrix.getHeight()
    var i = 0
    var o = r - 7
    for (n = r - 1; n >= o; n--) {
      i = this.copyBit(8, n, i)
    }
    for (e = r - 8; e < r; e++) {
      i = this.copyBit(e, 8, i)
    }
    this.parsedFormatInfo = h.a.decodeFormatInformation(t, i)
    if (null !== this.parsedFormatInfo) {
      return this.parsedFormatInfo
    }
    throw new m.a()
  }
  t.prototype.readVersion = function () {
    if (null !== this.parsedVersion && undefined !== this.parsedVersion) {
      return this.parsedVersion
    }
    var t = this.bitMatrix.getHeight()
    var e = Math.floor((t - 17) / 4)
    if (e <= 6) {
      return f.a.getVersionForNumber(e)
    }
    for (var n = 0, r = t - 11, i = 5; i >= 0; i--) {
      for (var o = t - 9; o >= r; o--) {
        n = this.copyBit(o, i, n)
      }
    }
    var a = f.a.decodeVersionInformation(n)
    if (null !== a && a.getDimensionForVersion() === t) {
      this.parsedVersion = a
      return a
    }
    n = 0
    for (o = 5; o >= 0; o--) {
      for (i = t - 9; i >= r; i--) {
        n = this.copyBit(o, i, n)
      }
    }
    if (null !== (a = f.a.decodeVersionInformation(n)) && a.getDimensionForVersion() === t) {
      this.parsedVersion = a
      return a
    }
    throw new m.a()
  }
  t.prototype.copyBit = function (t, e, n) {
    return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? n << 1 | 1 : n << 1
  }
  t.prototype.readCodewords = function () {
    var t = this.readFormatInformation()
    var e = this.readVersion()
    var n = p.a.values.get(t.getDataMask())
    var r = this.bitMatrix.getHeight()
    n.unmaskBitMatrix(this.bitMatrix, r)
    for (var i = e.buildFunctionPattern(), o = true, a = new Uint8Array(e.getTotalCodewords()), s = 0, u = 0, c = 0, l = r - 1; l > 0; l -= 2) {
      if (6 === l) {
        l--
      }
      for (var d = 0; d < r; d++) {
        for (var f = o ? r - 1 - d : d, h = 0; h < 2; h++) {
          if (!i.get(l - h, f)) {
            c++
            u <<= 1
            if (this.bitMatrix.get(l - h, f)) {
              u |= 1
            }
            if (8 === c) {
              a[s++] = u
              c = 0
              u = 0
            }
          }
        }
      }
      o = !o
    }
    if (s !== e.getTotalCodewords()) {
      throw new m.a()
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
    for (var /* [auto-meaningful-name] */this$bitMatrix = this.bitMatrix, e = 0, n = this$bitMatrix.getWidth(); e < n; e++) {
      for (var r = e + 1, i = this$bitMatrix.getHeight(); r < i; r++) {
        if (this$bitMatrix.get(e, r) !== this$bitMatrix.get(r, e)) {
          this$bitMatrix.flip(r, e)
          this$bitMatrix.flip(e, r)
        }
      }
    }
  }
  return t
}()
var g = require("./63")
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
var _ = function () {
  function t(t, e) {
    this.numDataCodewords = t
    this.codewords = e
  }
  t.getDataBlocks = function (e, n, r) {
    var i
    var /* [auto-meaningful-name] */d$return
    var a
    var /* [auto-meaningful-name] */m$return
    if (e.length !== n.getTotalCodewords()) {
      throw new g.a()
    }
    var u = n.getECBlocksForLevel(r)
    var c = 0
    var l = u.getECBlocks()
    try {
      for (var d = v(l), f = d.next(); !f.done; f = d.next()) {
        c += (b$value = f.value).getCount()
      }
    } catch (M) {
      i = {
        error: M
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
    var h = new Array(c)
    var p = 0
    try {
      for (var m = v(l), b = m.next(); !b.done; b = m.next()) {
        for (var /* [auto-meaningful-name] */b$value = b.value, y = 0; y < b$value.getCount(); y++) {
          var w = b$value.getDataCodewords()
          var E = u.getECCodewordsPerBlock() + w
          h[p++] = new t(w, new Uint8Array(E))
        }
      }
    } catch (k) {
      a = {
        error: k
      }
    } finally {
      try {
        if (b && !b.done && (m$return = m.return)) {
          m$return.call(m)
        }
      } finally {
        if (a) {
          throw a.error
        }
      }
    }
    for (var /* [auto-meaningful-name] */h0$codewords$length = h[0].codewords.length, T = h.length - 1; T >= 0;) {
      if (h[T].codewords.length === h0$codewords$length) {
        break
      }
      T--
    }
    T++
    var A = h0$codewords$length - u.getECCodewordsPerBlock()
    var S = 0
    for (y = 0; y < A; y++) {
      for (var I = 0; I < p; I++) {
        h[I].codewords[y] = e[S++]
      }
    }
    for (I = T; I < p; I++) {
      h[I].codewords[A] = e[S++]
    }
    var /* [auto-meaningful-name] */h0$codewords$length1 = h[0].codewords.length
    for (y = A; y < h0$codewords$length1; y++) {
      for (I = 0; I < p; I++) {
        var j = I < T ? y : y + 1
        h[I].codewords[j] = e[S++]
      }
    }
    return h
  }
  t.prototype.getNumDataCodewords = function () {
    return this.numDataCodewords
  }
  t.prototype.getCodewords = function () {
    return this.codewords
  }
  return t
}()
var y = require("./595")
var w = function () {
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
  function t() {
    this.rsDecoder = new d.a(l.a.QR_CODE_FIELD_256)
  }
  t.prototype.decodeBooleanArray = function (t, e) {
    return this.decodeBitMatrix(i.a.parseFromBooleanArray(t), e)
  }
  t.prototype.decodeBitMatrix = function (t, e) {
    var n = new b(t)
    var r = null
    try {
      return this.decodeBitMatrixParser(n, e)
    } catch (o) {
      r = o
    }
    try {
      n.remask()
      n.setMirror(true)
      n.readVersion()
      n.readFormatInformation()
      n.mirror()
      var i = this.decodeBitMatrixParser(n, e)
      i.setOther(new w(true))
      return i
    } catch (o) {
      if (null !== r) {
        throw r
      }
      throw o
    }
  }
  t.prototype.decodeBitMatrixParser = function (t, e) {
    var n
    var /* [auto-meaningful-name] */d$return
    var i
    var /* [auto-meaningful-name] */m$return
    var a = t.readVersion()
    var s = t.readFormatInformation().getErrorCorrectionLevel()
    var u = t.readCodewords()
    var c = _.getDataBlocks(u, a, s)
    var l = 0
    try {
      for (var d = E(c), f = d.next(); !f.done; f = d.next()) {
        l += (g = f.value).getNumDataCodewords()
      }
    } catch (T) {
      n = {
        error: T
      }
    } finally {
      try {
        if (f && !f.done && (d$return = d.return)) {
          d$return.call(d)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
    var h = new Uint8Array(l)
    var p = 0
    try {
      for (var m = E(c), b = m.next(); !b.done; b = m.next()) {
        var g
        var v = (g = b.value).getCodewords()
        var w = g.getNumDataCodewords()
        this.correctErrors(v, w)
        for (var O = 0; O < w; O++) {
          h[p++] = v[O]
        }
      }
    } catch (A) {
      i = {
        error: A
      }
    } finally {
      try {
        if (b && !b.done && (m$return = m.return)) {
          m$return.call(m)
        }
      } finally {
        if (i) {
          throw i.error
        }
      }
    }
    return y.a.decode(h, a, s, e)
  }
  t.prototype.correctErrors = function (t, e) {
    var n = new Int32Array(t)
    try {
      this.rsDecoder.decode(n, t.length - e)
    } catch (i) {
      throw new c.a()
    }
    for (var r = 0; r < e; r++) {
      t[r] = n[r]
    }
  }
  return t
}()
var T = require("./116")
var A = require("./371")
var S = require("./372")
var I = require("./456")
var C = require("./73/index")
var j = function () {
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
var M = function (t) {
  function e(e, n, r) {
    var i = t.call(this, e, n) || this
    i.estimatedModuleSize = r
    return i
  }
  j(e, t)
  e.prototype.aboutEquals = function (t, e, n) {
    if (Math.abs(e - this.getY()) <= t && Math.abs(n - this.getX()) <= t) {
      var r = Math.abs(t - this.estimatedModuleSize)
      return r <= 1 || r <= this.estimatedModuleSize
    }
    return false
  }
  e.prototype.combineEstimate = function (t, n, r) {
    return new e((this.getX() + n) / 2, (this.getY() + t) / 2, (this.estimatedModuleSize + r) / 2)
  }
  return e
}(C.a)
var k = function (t) {
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
var R = function () {
  function t(t, e, n, r, i, o, a) {
    this.image = t
    this.startX = e
    this.startY = n
    this.width = r
    this.height = i
    this.moduleSize = o
    this.resultPointCallback = a
    this.possibleCenters = []
    this.crossCheckStateCount = new Int32Array(3)
  }
  t.prototype.find = function () {
    for (var /* [auto-meaningful-name] */this$startX = this.startX, /* [auto-meaningful-name] */this$height = this.height, n = this$startX + this.width, r = this.startY + this$height / 2, i = new Int32Array(3), /* [auto-meaningful-name] */this$image = this.image, s = 0; s < this$height; s++) {
      var u = r + (0 === (1 & s) ? Math.floor((s + 1) / 2) : -Math.floor((s + 1) / 2))
      i[0] = 0
      i[1] = 0
      i[2] = 0
      for (var c = this$startX; c < n && !this$image.get(c, u);) {
        c++
      }
      for (var l = 0; c < n;) {
        if (this$image.get(c, u)) {
          if (1 === l) {
            i[1]++
          } else if (2 === l) {
            var d
            if (this.foundPatternCross(i)) {
              if (null !== (d = this.handlePossibleCenter(i, u, c))) {
                return d
              }
            }
            i[0] = i[2]
            i[1] = 1
            i[2] = 0
            l = 1
          } else {
            i[++l]++
          }
        } else {
          if (1 === l) {
            l++
          }
          i[l]++
        }
        c++
      }
      if (this.foundPatternCross(i)) {
        if (null !== (d = this.handlePossibleCenter(i, u, n))) {
          return d
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
    for (var /* [auto-meaningful-name] */this$moduleSize = this.moduleSize, n = this$moduleSize / 2, r = 0; r < 3; r++) {
      if (Math.abs(this$moduleSize - t[r]) >= n) {
        return false
      }
    }
    return true
  }
  t.prototype.crossCheckVertical = function (e, n, r, i) {
    var /* [auto-meaningful-name] */this$image = this.image
    var a = this$image.getHeight()
    var /* [auto-meaningful-name] */this$crossCheckStateCount = this.crossCheckStateCount
    this$crossCheckStateCount[0] = 0
    this$crossCheckStateCount[1] = 0
    this$crossCheckStateCount[2] = 0
    for (var u = e; u >= 0 && this$image.get(n, u) && this$crossCheckStateCount[1] <= r;) {
      this$crossCheckStateCount[1]++
      u--
    }
    if (u < 0 || this$crossCheckStateCount[1] > r) {
      return NaN
    }
    for (; u >= 0 && !this$image.get(n, u) && this$crossCheckStateCount[0] <= r;) {
      this$crossCheckStateCount[0]++
      u--
    }
    if (this$crossCheckStateCount[0] > r) {
      return NaN
    }
    for (u = e + 1; u < a && this$image.get(n, u) && this$crossCheckStateCount[1] <= r;) {
      this$crossCheckStateCount[1]++
      u++
    }
    if (u === a || this$crossCheckStateCount[1] > r) {
      return NaN
    }
    for (; u < a && !this$image.get(n, u) && this$crossCheckStateCount[2] <= r;) {
      this$crossCheckStateCount[2]++
      u++
    }
    if (this$crossCheckStateCount[2] > r) {
      return NaN
    }
    var c = this$crossCheckStateCount[0] + this$crossCheckStateCount[1] + this$crossCheckStateCount[2]
    return 5 * Math.abs(c - i) >= 2 * i ? NaN : this.foundPatternCross(this$crossCheckStateCount) ? t.centerFromEnd(this$crossCheckStateCount, u) : NaN
  }
  t.prototype.handlePossibleCenter = function (e, n, r) {
    var i
    var /* [auto-meaningful-name] */l$return
    var a = e[0] + e[1] + e[2]
    var s = t.centerFromEnd(e, r)
    var u = this.crossCheckVertical(n, s, 2 * e[1], a)
    if (!isNaN(u)) {
      var c = (e[0] + e[1] + e[2]) / 3
      try {
        for (var l = k(this.possibleCenters), d = l.next(); !d.done; d = l.next()) {
          var /* [auto-meaningful-name] */d$value = d.value
          if (d$value.aboutEquals(c, u, s)) {
            return d$value.combineEstimate(u, s, c)
          }
        }
      } catch (p) {
        i = {
          error: p
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
      var h = new M(s, u, c)
      this.possibleCenters.push(h)
      if (null !== this.resultPointCallback && undefined !== this.resultPointCallback) {
        this.resultPointCallback.foundPossibleResultPoint(h)
      }
    }
    return null
  }
  return t
}()
var N = function () {
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
var x = function (t) {
  function e(e, n, r, i) {
    var o = t.call(this, e, n) || this
    o.estimatedModuleSize = r
    o.count = i
    if (undefined === i) {
      o.count = 1
    }
    return o
  }
  N(e, t)
  e.prototype.getEstimatedModuleSize = function () {
    return this.estimatedModuleSize
  }
  e.prototype.getCount = function () {
    return this.count
  }
  e.prototype.aboutEquals = function (t, e, n) {
    if (Math.abs(e - this.getY()) <= t && Math.abs(n - this.getX()) <= t) {
      var r = Math.abs(t - this.estimatedModuleSize)
      return r <= 1 || r <= this.estimatedModuleSize
    }
    return false
  }
  e.prototype.combineEstimate = function (t, n, r) {
    var i = this.count + 1
    return new e((this.count * this.getX() + n) / i, (this.count * this.getY() + t) / i, (this.count * this.estimatedModuleSize + r) / i, i)
  }
  return e
}(C.a)
var D = function () {
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
    var n = null !== e && undefined !== e && undefined !== e.get(o.a.TRY_HARDER)
    var r = null !== e && undefined !== e && undefined !== e.get(o.a.PURE_BARCODE)
    var /* [auto-meaningful-name] */this$image = this.image
    var a = this$image.getHeight()
    var s = this$image.getWidth()
    var u = Math.floor(3 * a / (4 * t.MAX_MODULES))
    if (u < t.MIN_SKIP || n) {
      u = t.MIN_SKIP
    }
    for (var c = false, l = new Int32Array(5), d = u - 1; d < a && !c; d += u) {
      l[0] = 0
      l[1] = 0
      l[2] = 0
      l[3] = 0
      l[4] = 0
      for (var f = 0, h = 0; h < s; h++) {
        if (this$image.get(h, d)) {
          if (1 === (1 & f)) {
            f++
          }
          l[f]++
        } else if (0 === (1 & f)) {
          if (4 === f) {
            if (t.foundPatternCross(l)) {
              if (true !== this.handlePossibleCenter(l, d, h, r)) {
                l[0] = l[2]
                l[1] = l[3]
                l[2] = l[4]
                l[3] = 1
                l[4] = 0
                f = 3
                continue
              }
              u = 2
              if (true === this.hasSkipped) {
                c = this.haveMultiplyConfirmedCenters()
              } else {
                var p = this.findRowSkip()
                if (p > l[2]) {
                  d += p - l[2] - u
                  h = s - 1
                }
              }
              f = 0
              l[0] = 0
              l[1] = 0
              l[2] = 0
              l[3] = 0
              l[4] = 0
            } else {
              l[0] = l[2]
              l[1] = l[3]
              l[2] = l[4]
              l[3] = 1
              l[4] = 0
              f = 3
            }
          } else {
            l[++f]++
          }
        } else {
          l[f]++
        }
      }
      if (t.foundPatternCross(l)) {
        if (true === this.handlePossibleCenter(l, d, s, r)) {
          u = l[0]
          if (this.hasSkipped) {
            c = this.haveMultiplyConfirmedCenters()
          }
        }
      }
    }
    var m = this.selectBestPatterns()
    C.a.orderBestPatterns(m)
    return new D(m)
  }
  t.centerFromEnd = function (t, e) {
    return e - t[4] - t[3] - t[2] / 2
  }
  t.foundPatternCross = function (t) {
    for (var e = 0, n = 0; n < 5; n++) {
      var r = t[n]
      if (0 === r) {
        return false
      }
      e += r
    }
    if (e < 7) {
      return false
    }
    var i = e / 7
    var o = i / 2
    return Math.abs(i - t[0]) < o && Math.abs(i - t[1]) < o && Math.abs(3 * i - t[2]) < 3 * o && Math.abs(i - t[3]) < o && Math.abs(i - t[4]) < o
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
  t.prototype.crossCheckDiagonal = function (e, n, r, i) {
    for (var o = this.getCrossCheckStateCount(), a = 0, /* [auto-meaningful-name] */this$image = this.image; e >= a && n >= a && this$image.get(n - a, e - a);) {
      o[2]++
      a++
    }
    if (e < a || n < a) {
      return false
    }
    for (; e >= a && n >= a && !this$image.get(n - a, e - a) && o[1] <= r;) {
      o[1]++
      a++
    }
    if (e < a || n < a || o[1] > r) {
      return false
    }
    for (; e >= a && n >= a && this$image.get(n - a, e - a) && o[0] <= r;) {
      o[0]++
      a++
    }
    if (o[0] > r) {
      return false
    }
    var u = this$image.getHeight()
    var c = this$image.getWidth()
    for (a = 1; e + a < u && n + a < c && this$image.get(n + a, e + a);) {
      o[2]++
      a++
    }
    if (e + a >= u || n + a >= c) {
      return false
    }
    for (; e + a < u && n + a < c && !this$image.get(n + a, e + a) && o[3] < r;) {
      o[3]++
      a++
    }
    if (e + a >= u || n + a >= c || o[3] >= r) {
      return false
    }
    for (; e + a < u && n + a < c && this$image.get(n + a, e + a) && o[4] < r;) {
      o[4]++
      a++
    }
    if (o[4] >= r) {
      return false
    }
    var l = o[0] + o[1] + o[2] + o[3] + o[4]
    return Math.abs(l - i) < 2 * i && t.foundPatternCross(o)
  }
  t.prototype.crossCheckVertical = function (e, n, r, i) {
    for (var /* [auto-meaningful-name] */this$image = this.image, a = this$image.getHeight(), s = this.getCrossCheckStateCount(), u = e; u >= 0 && this$image.get(n, u);) {
      s[2]++
      u--
    }
    if (u < 0) {
      return NaN
    }
    for (; u >= 0 && !this$image.get(n, u) && s[1] <= r;) {
      s[1]++
      u--
    }
    if (u < 0 || s[1] > r) {
      return NaN
    }
    for (; u >= 0 && this$image.get(n, u) && s[0] <= r;) {
      s[0]++
      u--
    }
    if (s[0] > r) {
      return NaN
    }
    for (u = e + 1; u < a && this$image.get(n, u);) {
      s[2]++
      u++
    }
    if (u === a) {
      return NaN
    }
    for (; u < a && !this$image.get(n, u) && s[3] < r;) {
      s[3]++
      u++
    }
    if (u === a || s[3] >= r) {
      return NaN
    }
    for (; u < a && this$image.get(n, u) && s[4] < r;) {
      s[4]++
      u++
    }
    if (s[4] >= r) {
      return NaN
    }
    var c = s[0] + s[1] + s[2] + s[3] + s[4]
    return 5 * Math.abs(c - i) >= 2 * i ? NaN : t.foundPatternCross(s) ? t.centerFromEnd(s, u) : NaN
  }
  t.prototype.crossCheckHorizontal = function (e, n, r, i) {
    for (var /* [auto-meaningful-name] */this$image = this.image, a = this$image.getWidth(), s = this.getCrossCheckStateCount(), u = e; u >= 0 && this$image.get(u, n);) {
      s[2]++
      u--
    }
    if (u < 0) {
      return NaN
    }
    for (; u >= 0 && !this$image.get(u, n) && s[1] <= r;) {
      s[1]++
      u--
    }
    if (u < 0 || s[1] > r) {
      return NaN
    }
    for (; u >= 0 && this$image.get(u, n) && s[0] <= r;) {
      s[0]++
      u--
    }
    if (s[0] > r) {
      return NaN
    }
    for (u = e + 1; u < a && this$image.get(u, n);) {
      s[2]++
      u++
    }
    if (u === a) {
      return NaN
    }
    for (; u < a && !this$image.get(u, n) && s[3] < r;) {
      s[3]++
      u++
    }
    if (u === a || s[3] >= r) {
      return NaN
    }
    for (; u < a && this$image.get(u, n) && s[4] < r;) {
      s[4]++
      u++
    }
    if (s[4] >= r) {
      return NaN
    }
    var c = s[0] + s[1] + s[2] + s[3] + s[4]
    return 5 * Math.abs(c - i) >= i ? NaN : t.foundPatternCross(s) ? t.centerFromEnd(s, u) : NaN
  }
  t.prototype.handlePossibleCenter = function (e, n, r, i) {
    var o = e[0] + e[1] + e[2] + e[3] + e[4]
    var a = t.centerFromEnd(e, r)
    var s = this.crossCheckVertical(n, Math.floor(a), e[2], o)
    if (!isNaN(s) && (a = this.crossCheckHorizontal(Math.floor(a), Math.floor(s), e[2], o), !isNaN(a) && (!i || this.crossCheckDiagonal(Math.floor(s), Math.floor(a), e[2], o)))) {
      for (var u = o / 7, c = false, /* [auto-meaningful-name] */this$possibleCenters = this.possibleCenters, d = 0, /* [auto-meaningful-name] */this$possibleCenters$length = this$possibleCenters.length; d < this$possibleCenters$length; d++) {
        var h = this$possibleCenters[d]
        if (h.aboutEquals(u, s, a)) {
          this$possibleCenters[d] = h.combineEstimate(s, a, u)
          c = true
          break
        }
      }
      if (!c) {
        var p = new x(a, s, u)
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
    var /* [auto-meaningful-name] */i$return
    if (this.possibleCenters.length <= 1) {
      return 0
    }
    var r = null
    try {
      for (var i = L(this.possibleCenters), o = i.next(); !o.done; o = i.next()) {
        var /* [auto-meaningful-name] */o$value = o.value
        if (o$value.getCount() >= t.CENTER_QUORUM) {
          if (null != r) {
            this.hasSkipped = true
            return Math.floor((Math.abs(r.getX() - o$value.getX()) - Math.abs(r.getY() - o$value.getY())) / 2)
          }
          r = o$value
        }
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
    return 0
  }
  t.prototype.haveMultiplyConfirmedCenters = function () {
    var e
    var /* [auto-meaningful-name] */u$return
    var r
    var /* [auto-meaningful-name] */f$return
    var o = 0
    var a = 0
    var /* [auto-meaningful-name] */this$possibleCenters$length = this.possibleCenters.length
    try {
      for (var u = L(this.possibleCenters), c = u.next(); !c.done; c = u.next()) {
        if ((h$value = c.value).getCount() >= t.CENTER_QUORUM) {
          o++
          a += h$value.getEstimatedModuleSize()
        }
      }
    } catch (m) {
      e = {
        error: m
      }
    } finally {
      try {
        if (c && !c.done && (u$return = u.return)) {
          u$return.call(u)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    if (o < 3) {
      return false
    }
    var l = a / this$possibleCenters$length
    var d = 0
    try {
      for (var f = L(this.possibleCenters), h = f.next(); !h.done; h = f.next()) {
        var /* [auto-meaningful-name] */h$value = h.value
        d += Math.abs(h$value.getEstimatedModuleSize() - l)
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
    return d <= .05 * a
  }
  t.prototype.selectBestPatterns = function () {
    var t
    var /* [auto-meaningful-name] */l$return
    var n
    var /* [auto-meaningful-name] */g$return
    var /* [auto-meaningful-name] */this$possibleCenters$length = this.possibleCenters.length
    if (this$possibleCenters$length < 3) {
      throw new a.a()
    }
    var o
    var /* [auto-meaningful-name] */this$possibleCenters = this.possibleCenters
    if (this$possibleCenters$length > 3) {
      var u = 0
      var c = 0
      try {
        for (var l = L(this.possibleCenters), d = l.next(); !d.done; d = l.next()) {
          var f = d.value.getEstimatedModuleSize()
          u += f
          c += f * f
        }
      } catch (_) {
        t = {
          error: _
        }
      } finally {
        try {
          if (d && !d.done && (l$return = l.return)) {
            l$return.call(l)
          }
        } finally {
          if (t) {
            throw t.error
          }
        }
      }
      o = u / this$possibleCenters$length
      var h = Math.sqrt(c / this$possibleCenters$length - o * o)
      this$possibleCenters.sort(function (t, e) {
        var n = Math.abs(e.getEstimatedModuleSize() - o)
        var r = Math.abs(t.getEstimatedModuleSize() - o)
        return n < r ? -1 : n > r ? 1 : 0
      })
      for (var p = Math.max(.2 * o, h), m = 0; m < this$possibleCenters.length && this$possibleCenters.length > 3; m++) {
        var b = this$possibleCenters[m]
        if (Math.abs(b.getEstimatedModuleSize() - o) > p) {
          this$possibleCenters.splice(m, 1)
          m--
        }
      }
    }
    if (this$possibleCenters.length > 3) {
      u = 0
      try {
        for (var g = L(this$possibleCenters), v = g.next(); !v.done; v = g.next()) {
          u += v.value.getEstimatedModuleSize()
        }
      } catch (y) {
        n = {
          error: y
        }
      } finally {
        try {
          if (v && !v.done && (g$return = g.return)) {
            g$return.call(g)
          }
        } finally {
          if (n) {
            throw n.error
          }
        }
      }
      o = u / this$possibleCenters.length
      this$possibleCenters.sort(function (t, e) {
        if (e.getCount() === t.getCount()) {
          var n = Math.abs(e.getEstimatedModuleSize() - o)
          var r = Math.abs(t.getEstimatedModuleSize() - o)
          return n < r ? 1 : n > r ? -1 : 0
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
var P = function () {
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
    this.resultPointCallback = null === t || undefined === t ? null : t.get(o.a.NEED_RESULT_POINT_CALLBACK)
    var e = new B(this.image, this.resultPointCallback).find(t)
    return this.processFinderPatternInfo(e)
  }
  t.prototype.processFinderPatternInfo = function (e) {
    var n = e.getTopLeft()
    var r = e.getTopRight()
    var i = e.getBottomLeft()
    var o = this.calculateModuleSize(n, r, i)
    if (o < 1) {
      throw new a.a("No pattern found in proccess finder.")
    }
    var s = t.computeDimension(n, r, i, o)
    var u = f.a.getProvisionalVersionForDimension(s)
    var c = u.getDimensionForVersion() - 7
    var l = null
    if (u.getAlignmentPatternCenters().length > 0) {
      for (var d = r.getX() - n.getX() + i.getX(), h = r.getY() - n.getY() + i.getY(), p = 1 - 3 / c, m = Math.floor(n.getX() + p * (d - n.getX())), b = Math.floor(n.getY() + p * (h - n.getY())), g = 4; g <= 16; g <<= 1) {
        try {
          l = this.findAlignmentInRegion(o, m, b, g)
          break
        } catch (w) {
          if (!(w instanceof a.a)) {
            throw w
          }
        }
      }
    }
    var v
    var _ = t.createTransform(n, r, i, l, s)
    var y = t.sampleGrid(this.image, _, s)
    v = null === l ? [i, n, r] : [i, n, r, l]
    return new A.a(y, v)
  }
  t.createTransform = function (t, e, n, r, i) {
    var o
    var a
    var s
    var u
    var c = i - 3.5
    if (null !== r) {
      o = r.getX()
      a = r.getY()
      u = s = c - 3
    } else {
      o = e.getX() - t.getX() + n.getX()
      a = e.getY() - t.getY() + n.getY()
      s = c
      u = c
    }
    return I.a.quadrilateralToQuadrilateral(3.5, 3.5, c, 3.5, s, u, 3.5, c, t.getX(), t.getY(), e.getX(), e.getY(), o, a, n.getX(), n.getY())
  }
  t.sampleGrid = function (t, e, n) {
    return S.a.getInstance().sampleGridWithTransform(t, n, n, e)
  }
  t.computeDimension = function (t, e, n, r) {
    var i = T.a.round(C.a.distance(t, e) / r)
    var o = T.a.round(C.a.distance(t, n) / r)
    var s = Math.floor((i + o) / 2) + 7
    switch (3 & s) {
      case 0:
        s++
        break
      case 2:
        s--
        break
      case 3:
        throw new a.a("Dimensions could be not found.")
    }
    return s
  }
  t.prototype.calculateModuleSize = function (t, e, n) {
    return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, n)) / 2
  }
  t.prototype.calculateModuleSizeOneWay = function (t, e) {
    var n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY()))
    var r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY()))
    return isNaN(n) ? r / 7 : isNaN(r) ? n / 7 : (n + r) / 14
  }
  t.prototype.sizeOfBlackWhiteBlackRunBothWays = function (t, e, n, r) {
    var i = this.sizeOfBlackWhiteBlackRun(t, e, n, r)
    var o = 1
    var a = t - (n - t)
    if (a < 0) {
      o = t / (t - a)
      a = 0
    } else {
      if (a >= this.image.getWidth()) {
        o = (this.image.getWidth() - 1 - t) / (a - t)
        a = this.image.getWidth() - 1
      }
    }
    var s = Math.floor(e - (r - e) * o)
    o = 1
    if (s < 0) {
      o = e / (e - s)
      s = 0
    } else {
      if (s >= this.image.getHeight()) {
        o = (this.image.getHeight() - 1 - e) / (s - e)
        s = this.image.getHeight() - 1
      }
    }
    a = Math.floor(t + (a - t) * o)
    return (i += this.sizeOfBlackWhiteBlackRun(t, e, a, s)) - 1
  }
  t.prototype.sizeOfBlackWhiteBlackRun = function (t, e, n, r) {
    var i = Math.abs(r - e) > Math.abs(n - t)
    if (i) {
      var o = t
      t = e
      e = o
      o = n
      n = r
      r = o
    }
    for (var a = Math.abs(n - t), s = Math.abs(r - e), u = -a / 2, c = t < n ? 1 : -1, l = e < r ? 1 : -1, d = 0, f = n + c, h = t, p = e; h !== f; h += c) {
      var m = i ? p : h
      var b = i ? h : p
      if (1 === d === this.image.get(m, b)) {
        if (2 === d) {
          return T.a.distance(h, p, t, e)
        }
        d++
      }
      if ((u += s) > 0) {
        if (p === r) {
          break
        }
        p += l
        u -= a
      }
    }
    return 2 === d ? T.a.distance(n + c, r, t, e) : NaN
  }
  t.prototype.findAlignmentInRegion = function (t, e, n, r) {
    var i = Math.floor(r * t)
    var o = Math.max(0, e - i)
    var s = Math.min(this.image.getWidth() - 1, e + i)
    if (s - o < 3 * t) {
      throw new a.a("Alignment top exceeds estimated module size.")
    }
    var u = Math.max(0, n - i)
    var c = Math.min(this.image.getHeight() - 1, n + i)
    if (c - u < 3 * t) {
      throw new a.a("Alignment bottom exceeds estimated module size.")
    }
    return new R(this.image, o, u, s - o, c - u, t, this.resultPointCallback).find()
  }
  return t
}()
var U = function () {
  function t() {
    this.decoder = new O()
  }
  t.prototype.getDecoder = function () {
    return this.decoder
  }
  t.prototype.decode = function (e, n) {
    var i
    var a
    if (undefined !== n && null !== n && undefined !== n.get(o.a.PURE_BARCODE)) {
      var c = t.extractPureBits(e.getBlackMatrix())
      i = this.decoder.decodeBitMatrix(c, n)
      a = t.NO_POINTS
    } else {
      var l = new P(e.getBlackMatrix()).detect(n)
      i = this.decoder.decodeBitMatrix(l.getBits(), n)
      a = l.getPoints()
    }
    if (i.getOther() instanceof w) {
      i.getOther().applyMirroredCorrection(a)
    }
    var d = new s.a(i.getText(), i.getRawBytes(), undefined, a, r.a.QR_CODE, undefined)
    var f = i.getByteSegments()
    if (null !== f) {
      d.putMetadata(u.a.BYTE_SEGMENTS, f)
    }
    var h = i.getECLevel()
    if (null !== h) {
      d.putMetadata(u.a.ERROR_CORRECTION_LEVEL, h)
    }
    if (i.hasStructuredAppend()) {
      d.putMetadata(u.a.STRUCTURED_APPEND_SEQUENCE, i.getStructuredAppendSequenceNumber())
      d.putMetadata(u.a.STRUCTURED_APPEND_PARITY, i.getStructuredAppendParity())
    }
    return d
  }
  t.prototype.reset = function () {}
  t.extractPureBits = function (t) {
    var e = t.getTopLeftOnBit()
    var n = t.getBottomRightOnBit()
    if (null === e || null === n) {
      throw new a.a()
    }
    var r = this.moduleSize(e, t)
    var o = e[1]
    var s = n[1]
    var u = e[0]
    var c = n[0]
    if (u >= c || o >= s) {
      throw new a.a()
    }
    if (s - o !== c - u && (c = u + (s - o)) >= t.getWidth()) {
      throw new a.a()
    }
    var l = Math.round((c - u + 1) / r)
    var d = Math.round((s - o + 1) / r)
    if (l <= 0 || d <= 0) {
      throw new a.a()
    }
    if (d !== l) {
      throw new a.a()
    }
    var f = Math.floor(r / 2)
    o += f
    var h = (u += f) + Math.floor((l - 1) * r) - c
    if (h > 0) {
      if (h > f) {
        throw new a.a()
      }
      u -= h
    }
    var p = o + Math.floor((d - 1) * r) - s
    if (p > 0) {
      if (p > f) {
        throw new a.a()
      }
      o -= p
    }
    for (var m = new i.a(l, d), b = 0; b < d; b++) {
      for (var g = o + Math.floor(b * r), v = 0; v < l; v++) {
        if (t.get(u + Math.floor(v * r), g)) {
          m.set(v, b)
        }
      }
    }
    return m
  }
  t.moduleSize = function (t, e) {
    for (var n = e.getHeight(), r = e.getWidth(), i = t[0], o = t[1], s = true, u = 0; i < r && o < n;) {
      if (s !== e.get(i, o)) {
        if (5 === ++u) {
          break
        }
        s = !s
      }
      i++
      o++
    }
    if (i === r || o === n) {
      throw new a.a()
    }
    return (i - t[0]) / 7
  }
  t.NO_POINTS = new Array()
  return t
}()
exports.a = U
