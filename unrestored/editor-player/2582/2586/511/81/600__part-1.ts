/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：600__part-1
 */

"use strict"

import { "600__part-0__u" as u } from "./600__part-0"
import * as /* [auto-meaningful-name] */$_453_index from "./453/index"
import * as /* [auto-meaningful-name] */$_109 from "./109"
var c = function () {
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
var f = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  c(e, t)
  e.prototype.parseInformation = function () {
    var t = new $_109.a()
    t.append("(01)")
    var r = t.length()
    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE, 4)
    t.append(n)
    this.encodeCompressedGtinWithoutAI(t, e.HEADER_SIZE + 4, r)
    return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE + 44)
  }
  e.HEADER_SIZE = 4
  return e
}(u)
var h = function () {
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
var l = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  h(e, t)
  e.prototype.parseInformation = function () {
    var t = new $_109.a()
    return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE)
  }
  e.HEADER_SIZE = 5
  return e
}($_453_index.a)
var d = function () {
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
var p = function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  d(e, t)
  e.prototype.encodeCompressedWeight = function (t, e, r) {
    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e, r)
    this.addWeightCode(t, n)
    for (var o = this.checkWeight(n), i = 1e5, a = 0; a < 5; ++a) {
      if (o / i === 0) {
        t.append("0")
      }
      i /= 10
    }
    t.append(o)
  }
  return e
}(u)
export { f as "600__part-1__f" }
export { l as "600__part-1__l" }
export { p as "600__part-1__p" }
