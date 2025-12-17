/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：604__part-2
 */

"use strict"

import { s } from "./index__part-0"
import { l, f, p } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_108 from "../108"
import * as /* [auto-meaningful-name] */$_469 from "./469"
import * as /* [auto-meaningful-name] */$$_222 from "../222"
import * as /* [auto-meaningful-name] */$$_36 from "../36"
var b = function () {
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
var g = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  b(e, t)
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() != e.HEADER_SIZE + p.GTIN_SIZE + e.WEIGHT_SIZE) {
      throw new $$_36.a()
    }
    var t = new $$_108.a()
    this.encodeCompressedGtin(t, e.HEADER_SIZE)
    this.encodeCompressedWeight(t, e.HEADER_SIZE + p.GTIN_SIZE, e.WEIGHT_SIZE)
    return t.toString()
  }
  e.HEADER_SIZE = 5
  e.WEIGHT_SIZE = 15
  return e
}(p)
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
  function e(e) {
    return t.call(this, e) || this
  }
  v(e, t)
  e.prototype.addWeightCode = function (t, e) {
    t.append("(3103)")
  }
  e.prototype.checkWeight = function (t) {
    return t
  }
  return e
}(g)
var y = function () {
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
var w = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  y(e, t)
  e.prototype.addWeightCode = function (t, e) {
    if (e < 1e4) {
      t.append("(3202)")
    } else {
      t.append("(3203)")
    }
  }
  e.prototype.checkWeight = function (t) {
    return t < 1e4 ? t : t - 1e4
  }
  return e
}(g)
var E = function () {
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
var O = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  E(e, t)
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() < e.HEADER_SIZE + s.GTIN_SIZE) {
      throw new $$_36.a()
    }
    var t = new $$_108.a()
    this.encodeCompressedGtin(t, e.HEADER_SIZE)
    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + s.GTIN_SIZE, e.LAST_DIGIT_SIZE)
    t.append("(392")
    t.append(n)
    t.append(")")
    var r = this.getGeneralDecoder().decodeGeneralPurposeField(e.HEADER_SIZE + s.GTIN_SIZE + e.LAST_DIGIT_SIZE, null)
    t.append(r.getNewString())
    return t.toString()
  }
  e.HEADER_SIZE = 8
  e.LAST_DIGIT_SIZE = 2
  return e
}(s)
var T = function () {
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
var A = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  T(e, t)
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() < e.HEADER_SIZE + s.GTIN_SIZE) {
      throw new $$_36.a()
    }
    var t = new $$_108.a()
    this.encodeCompressedGtin(t, e.HEADER_SIZE)
    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + s.GTIN_SIZE, e.LAST_DIGIT_SIZE)
    t.append("(393")
    t.append(n)
    t.append(")")
    var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + s.GTIN_SIZE + e.LAST_DIGIT_SIZE, e.FIRST_THREE_DIGITS_SIZE)
    if (r / 100 == 0) {
      t.append("0")
    }
    if (r / 10 == 0) {
      t.append("0")
    }
    t.append(r)
    var i = this.getGeneralDecoder().decodeGeneralPurposeField(e.HEADER_SIZE + s.GTIN_SIZE + e.LAST_DIGIT_SIZE + e.FIRST_THREE_DIGITS_SIZE, null)
    t.append(i.getNewString())
    return t.toString()
  }
  e.HEADER_SIZE = 8
  e.LAST_DIGIT_SIZE = 2
  e.FIRST_THREE_DIGITS_SIZE = 10
  return e
}(s)
var S = function () {
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
var I = function (t) {
  function e(e, n, r) {
    var i = t.call(this, e) || this
    i.dateCode = r
    i.firstAIdigits = n
    return i
  }
  S(e, t)
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() != e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE + e.DATE_SIZE) {
      throw new $$_36.a()
    }
    var t = new $$_108.a()
    this.encodeCompressedGtin(t, e.HEADER_SIZE)
    this.encodeCompressedWeight(t, e.HEADER_SIZE + e.GTIN_SIZE, e.WEIGHT_SIZE)
    this.encodeCompressedDate(t, e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE)
    return t.toString()
  }
  e.prototype.encodeCompressedDate = function (t, n) {
    var r = this.getGeneralDecoder().extractNumericValueFromBitArray(n, e.DATE_SIZE)
    if (38400 != r) {
      t.append("(")
      t.append(this.dateCode)
      t.append(")")
      var i = r % 32
      var o = (r /= 32) % 12 + 1
      var a = r /= 12
      if (a / 10 == 0) {
        t.append("0")
      }
      t.append(a)
      if (o / 10 == 0) {
        t.append("0")
      }
      t.append(o)
      if (i / 10 == 0) {
        t.append("0")
      }
      t.append(i)
    }
  }
  e.prototype.addWeightCode = function (t, e) {
    t.append("(")
    t.append(this.firstAIdigits)
    t.append(e / 1e5)
    t.append(")")
  }
  e.prototype.checkWeight = function (t) {
    return t % 1e5
  }
  e.HEADER_SIZE = 8
  e.WEIGHT_SIZE = 20
  e.DATE_SIZE = 16
  return e
}(p)
function C(t) {
  try {
    if (t.get(1)) {
      return new l(t)
    }
    if (!t.get(2)) {
      return new f(t)
    }
    switch ($_469.a.extractNumericValueFromBitArray(t, 1, 4)) {
      case 4:
        return new _(t)
      case 5:
        return new w(t)
    }
    switch ($_469.a.extractNumericValueFromBitArray(t, 1, 5)) {
      case 12:
        return new O(t)
      case 13:
        return new A(t)
    }
    switch ($_469.a.extractNumericValueFromBitArray(t, 1, 7)) {
      case 56:
        return new I(t, "310", "11")
      case 57:
        return new I(t, "320", "11")
      case 58:
        return new I(t, "310", "13")
      case 59:
        return new I(t, "320", "13")
      case 60:
        return new I(t, "310", "15")
      case 61:
        return new I(t, "320", "15")
      case 62:
        return new I(t, "310", "17")
      case 63:
        return new I(t, "320", "17")
    }
  } catch (e) {
    console.log(e)
    throw new $$_222.a("unknown decoder: " + t)
  }
}
export { C }
