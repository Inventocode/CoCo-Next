/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：600__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$_221 from "./221"
import * as /* [auto-meaningful-name] */$_453_465 from "./453/465"
import * as /* [auto-meaningful-name] */$_453_index from "./453/index"
var a = function () {
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
var u = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  a(e, t)
  e.prototype.encodeCompressedGtin = function (t, e) {
    t.append("(01)")
    var r = t.length()
    t.append("9")
    this.encodeCompressedGtinWithoutAI(t, e, r)
  }
  e.prototype.encodeCompressedGtinWithoutAI = function (t, r, n) {
    for (var o = 0; o < 4; ++o) {
      var i = this.getGeneralDecoder().extractNumericValueFromBitArray(r + 10 * o, 10)
      if (i / 100 === 0) {
        t.append("0")
      }
      if (i / 10 === 0) {
        t.append("0")
      }
      t.append(i)
    }
    e.appendCheckDigit(t, n)
  }
  e.appendCheckDigit = function (t, e) {
    for (var r = 0, n = 0; n < 13; n++) {
      var o = t.charAt(n + e).charCodeAt(0) - "0".charCodeAt(0)
      r += 0 === (1 & n) ? 3 * o : o
    }
    if (10 === (r = 10 - r % 10)) {
      r = 0
    }
    t.append(r)
  }
  e.GTIN_SIZE = 40
  return e
}($_453_index.a)
export { u as "600__part-0__u" }
