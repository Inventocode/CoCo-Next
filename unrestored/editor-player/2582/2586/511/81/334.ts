/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：334
 */

"use strict"

var n = function () {
  function t(t, e, r, n, o, i) {
    if (undefined === o) {
      o = -1
    }
    if (undefined === i) {
      i = -1
    }
    this.rawBytes = t
    this.text = e
    this.byteSegments = r
    this.ecLevel = n
    this.structuredAppendSequenceNumber = o
    this.structuredAppendParity = i
    this.numBits = undefined === t || null === t ? 0 : 8 * t.length
  }
  t.prototype.getRawBytes = function () {
    return this.rawBytes
  }
  t.prototype.getNumBits = function () {
    return this.numBits
  }
  t.prototype.setNumBits = function (t) {
    this.numBits = t
  }
  t.prototype.getText = function () {
    return this.text
  }
  t.prototype.getByteSegments = function () {
    return this.byteSegments
  }
  t.prototype.getECLevel = function () {
    return this.ecLevel
  }
  t.prototype.getErrorsCorrected = function () {
    return this.errorsCorrected
  }
  t.prototype.setErrorsCorrected = function (t) {
    this.errorsCorrected = t
  }
  t.prototype.getErasures = function () {
    return this.erasures
  }
  t.prototype.setErasures = function (t) {
    this.erasures = t
  }
  t.prototype.getOther = function () {
    return this.other
  }
  t.prototype.setOther = function (t) {
    this.other = t
  }
  t.prototype.hasStructuredAppend = function () {
    return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0
  }
  t.prototype.getStructuredAppendParity = function () {
    return this.structuredAppendParity
  }
  t.prototype.getStructuredAppendSequenceNumber = function () {
    return this.structuredAppendSequenceNumber
  }
  return t
}()
exports.a = n
