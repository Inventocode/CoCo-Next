/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：600__part-1
 */

"use strict"

import { "600__part-0__s" as s } from "./600__part-0"
import * as /* [auto-meaningful-name] */$_453_index from "./453/index"
import * as /* [auto-meaningful-name] */$_109 from "./109"
var c = function () {
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
var l = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  c(e, t)
  e.prototype.parseInformation = function () {
    var t = new $_109.a()
    t.append("(01)")
    var n = t.length()
    var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE, 4)
    t.append(r)
    this.encodeCompressedGtinWithoutAI(t, e.HEADER_SIZE + 4, n)
    return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE + 44)
  }
  e.HEADER_SIZE = 4
  return e
}(s)
var d = function () {
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
var f = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  d(e, t)
  e.prototype.parseInformation = function () {
    var t = new $_109.a()
    return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE)
  }
  e.HEADER_SIZE = 5
  return e
}($_453_index.a)
var h = function () {
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
var p = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  h(e, t)
  e.prototype.encodeCompressedWeight = function (t, e, n) {
    var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e, n)
    this.addWeightCode(t, r)
    for (var i = this.checkWeight(r), o = 1e5, a = 0; a < 5; ++a) {
      if (i / o === 0) {
        t.append("0")
      }
      o /= 10
    }
    t.append(i)
  }
  return e
}(s)
export { l as "600__part-1__l" }
export { f as "600__part-1__f" }
export { p as "600__part-1__p" }
