/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：150
 */

"use strict"

var n = require("./117")
var o = function () {
  function t(t, e, r, o, i, a) {
    if (undefined === r) {
      r = null == e ? 0 : 8 * e.length
    }
    if (undefined === a) {
      a = n.a.currentTimeMillis()
    }
    this.text = t
    this.rawBytes = e
    this.numBits = r
    this.resultPoints = o
    this.format = i
    this.timestamp = a
    this.text = t
    this.rawBytes = e
    this.numBits = undefined === r || null === r ? null === e || undefined === e ? 0 : 8 * e.length : r
    this.resultPoints = o
    this.format = i
    this.resultMetadata = null
    this.timestamp = undefined === a || null === a ? n.a.currentTimeMillis() : a
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
    var this$resultPoints = this.resultPoints
    if (null === this$resultPoints) {
      this.resultPoints = t
    } else if (null !== t && t.length > 0) {
      var r = new Array(this$resultPoints.length + t.length)
      n.a.arraycopy(this$resultPoints, 0, r, 0, this$resultPoints.length)
      n.a.arraycopy(t, 0, r, this$resultPoints.length, t.length)
      this.resultPoints = r
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
exports.a = o
