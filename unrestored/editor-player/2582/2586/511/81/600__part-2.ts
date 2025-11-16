/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：600__part-2
 */

"use strict"

import { "600__part-0__u" as u } from "./600__part-0"
import { "600__part-1__f" as f, "600__part-1__l" as l, "600__part-1__p" as p } from "./600__part-1"
import * as /* [auto-meaningful-name] */$_109 from "./109"
import * as /* [auto-meaningful-name] */$_453_465 from "./453/465"
import * as /* [auto-meaningful-name] */$_221 from "./221"
import * as g from "./37"
var y = function () {
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
var w = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  y(e, t)
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() != e.HEADER_SIZE + p.GTIN_SIZE + e.WEIGHT_SIZE) {
      throw new g.a()
    }
    var t = new $_109.a()
    this.encodeCompressedGtin(t, e.HEADER_SIZE)
    this.encodeCompressedWeight(t, e.HEADER_SIZE + p.GTIN_SIZE, e.WEIGHT_SIZE)
    return t.toString()
  }
  e.HEADER_SIZE = 5
  e.WEIGHT_SIZE = 15
  return e
}(p)
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
}(w)
var m = function () {
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
var A = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  m(e, t)
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
}(w)
var E = function () {
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
var C = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  E(e, t)
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() < e.HEADER_SIZE + u.GTIN_SIZE) {
      throw new g.a()
    }
    var t = new $_109.a()
    this.encodeCompressedGtin(t, e.HEADER_SIZE)
    var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + u.GTIN_SIZE, e.LAST_DIGIT_SIZE)
    t.append("(392")
    t.append(r)
    t.append(")")
    var n = this.getGeneralDecoder().decodeGeneralPurposeField(e.HEADER_SIZE + u.GTIN_SIZE + e.LAST_DIGIT_SIZE, null)
    t.append(n.getNewString())
    return t.toString()
  }
  e.HEADER_SIZE = 8
  e.LAST_DIGIT_SIZE = 2
  return e
}(u)
var I = function () {
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
var S = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  I(e, t)
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() < e.HEADER_SIZE + u.GTIN_SIZE) {
      throw new g.a()
    }
    var t = new $_109.a()
    this.encodeCompressedGtin(t, e.HEADER_SIZE)
    var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + u.GTIN_SIZE, e.LAST_DIGIT_SIZE)
    t.append("(393")
    t.append(r)
    t.append(")")
    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + u.GTIN_SIZE + e.LAST_DIGIT_SIZE, e.FIRST_THREE_DIGITS_SIZE)
    if (n / 100 == 0) {
      t.append("0")
    }
    if (n / 10 == 0) {
      t.append("0")
    }
    t.append(n)
    var o = this.getGeneralDecoder().decodeGeneralPurposeField(e.HEADER_SIZE + u.GTIN_SIZE + e.LAST_DIGIT_SIZE + e.FIRST_THREE_DIGITS_SIZE, null)
    t.append(o.getNewString())
    return t.toString()
  }
  e.HEADER_SIZE = 8
  e.LAST_DIGIT_SIZE = 2
  e.FIRST_THREE_DIGITS_SIZE = 10
  return e
}(u)
var T = function () {
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
var O = function (t) {
  function e(e, r, n) {
    var o = t.call(this, e) || this
    o.dateCode = n
    o.firstAIdigits = r
    return o
  }
  T(e, t)
  e.prototype.parseInformation = function () {
    if (this.getInformation().getSize() != e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE + e.DATE_SIZE) {
      throw new g.a()
    }
    var t = new $_109.a()
    this.encodeCompressedGtin(t, e.HEADER_SIZE)
    this.encodeCompressedWeight(t, e.HEADER_SIZE + e.GTIN_SIZE, e.WEIGHT_SIZE)
    this.encodeCompressedDate(t, e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE)
    return t.toString()
  }
  e.prototype.encodeCompressedDate = function (t, r) {
    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(r, e.DATE_SIZE)
    if (38400 != n) {
      t.append("(")
      t.append(this.dateCode)
      t.append(")")
      var o = n % 32
      var i = (n /= 32) % 12 + 1
      var a = n /= 12
      if (a / 10 == 0) {
        t.append("0")
      }
      t.append(a)
      if (i / 10 == 0) {
        t.append("0")
      }
      t.append(i)
      if (o / 10 == 0) {
        t.append("0")
      }
      t.append(o)
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
function b(t) {
  try {
    if (t.get(1)) {
      return new f(t)
    }
    if (!t.get(2)) {
      return new l(t)
    }
    switch ($_453_465.a.extractNumericValueFromBitArray(t, 1, 4)) {
      case 4:
        return new _(t)
      case 5:
        return new A(t)
    }
    switch ($_453_465.a.extractNumericValueFromBitArray(t, 1, 5)) {
      case 12:
        return new C(t)
      case 13:
        return new S(t)
    }
    switch ($_453_465.a.extractNumericValueFromBitArray(t, 1, 7)) {
      case 56:
        return new O(t, "310", "11")
      case 57:
        return new O(t, "320", "11")
      case 58:
        return new O(t, "310", "13")
      case 59:
        return new O(t, "320", "13")
      case 60:
        return new O(t, "310", "15")
      case 61:
        return new O(t, "320", "15")
      case 62:
        return new O(t, "310", "17")
      case 63:
        return new O(t, "320", "17")
    }
  } catch (e) {
    console.log(e)
    throw new $_221.a("unknown decoder: " + t)
  }
}
export { b as "600__part-2__b" }
