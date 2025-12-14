/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：151
 */

"use strict"

var r = require("./115")
var i = function () {
  function t(t, e, n, i, o, a) {
    if (undefined === n) {
      n = null == e ? 0 : 8 * e.length
    }
    if (undefined === a) {
      a = r.a.currentTimeMillis()
    }
    this.text = t
    this.rawBytes = e
    this.numBits = n
    this.resultPoints = i
    this.format = o
    this.timestamp = a
    this.text = t
    this.rawBytes = e
    this.numBits = undefined === n || null === n ? null === e || undefined === e ? 0 : 8 * e.length : n
    this.resultPoints = i
    this.format = o
    this.resultMetadata = null
    this.timestamp = undefined === a || null === a ? r.a.currentTimeMillis() : a
  }
  t.prototype.getText = function () {
    return this.text
  }
  t.prototype.getRawBytes = function () {
    return this.rawBytes
  }
  t.prototype.getNumBits = function () {
    return this.numBits
  }
  t.prototype.getResultPoints = function () {
    return this.resultPoints
  }
  t.prototype.getBarcodeFormat = function () {
    return this.format
  }
  t.prototype.getResultMetadata = function () {
    return this.resultMetadata
  }
  t.prototype.putMetadata = function (t, e) {
    if (null === this.resultMetadata) {
      this.resultMetadata = new Map()
    }
    this.resultMetadata.set(t, e)
  }
  t.prototype.putAllMetadata = function (t) {
    if (null !== t) {
      if (null === this.resultMetadata) {
        this.resultMetadata = t
      } else {
        this.resultMetadata = new Map(t)
      }
    }
  }
  t.prototype.addResultPoints = function (t) {
    var /* [auto-meaningful-name] */this$resultPoints = this.resultPoints
    if (null === this$resultPoints) {
      this.resultPoints = t
    } else if (null !== t && t.length > 0) {
      var n = new Array(this$resultPoints.length + t.length)
      r.a.arraycopy(this$resultPoints, 0, n, 0, this$resultPoints.length)
      r.a.arraycopy(t, 0, n, this$resultPoints.length, t.length)
      this.resultPoints = n
    }
  }
  t.prototype.getTimestamp = function () {
    return this.timestamp
  }
  t.prototype.toString = function () {
    return this.text
  }
  return t
}()
exports.a = i
