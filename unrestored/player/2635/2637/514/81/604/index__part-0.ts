/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：604__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_222 from "../222"
import * as /* [auto-meaningful-name] */$_469 from "./469"
import * as /* [auto-meaningful-name] */$$_457 from "../457"
var a = function () {
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
var s = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  a(e, t)
  e.prototype.encodeCompressedGtin = function (t, e) {
    t.append("(01)")
    var n = t.length()
    t.append("9")
    this.encodeCompressedGtinWithoutAI(t, e, n)
  }
  e.prototype.encodeCompressedGtinWithoutAI = function (t, n, r) {
    for (var i = 0; i < 4; ++i) {
      var o = this.getGeneralDecoder().extractNumericValueFromBitArray(n + 10 * i, 10)
      if (o / 100 === 0) {
        t.append("0")
      }
      if (o / 10 === 0) {
        t.append("0")
      }
      t.append(o)
    }
    e.appendCheckDigit(t, r)
  }
  e.appendCheckDigit = function (t, e) {
    for (var n = 0, r = 0; r < 13; r++) {
      var i = t.charAt(r + e).charCodeAt(0) - "0".charCodeAt(0)
      n += 0 === (1 & r) ? 3 * i : i
    }
    if (10 === (n = 10 - n % 10)) {
      n = 0
    }
    t.append(n)
  }
  e.GTIN_SIZE = 40
  return e
}($$_457.a)
export { s }
