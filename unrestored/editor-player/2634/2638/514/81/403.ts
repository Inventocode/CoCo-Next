/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：403
 */

"use strict"

var n = require("./151")
var o = require("./74")
var i = require("./122")
var a = require("./170")
var u = require("./115")
var s = require("./504")
var c = require("./453")
var f = function () {
  function t() {}
  t.prototype.decode = function (t, e) {
    if (undefined === e) {
      e = null
    }
    var r = null
    var i = new c.a(t.getBlackMatrix())
    var f = null
    var h = null
    try {
      f = (l = i.detectMirror(false)).getPoints()
      this.reportFoundResultPoints(e, f)
      h = new s.a().decode(l)
    } catch (y) {
      r = y
    }
    if (null == h) {
      try {
        var l
        f = (l = i.detectMirror(true)).getPoints()
        this.reportFoundResultPoints(e, f)
        h = new s.a().decode(l)
      } catch (y) {
        if (null != r) {
          throw r
        }
        throw y
      }
    }
    var d = new n.a(h.getText(), h.getRawBytes(), h.getNumBits(), f, o.a.AZTEC, u.a.currentTimeMillis())
    var p = h.getByteSegments()
    if (null != p) {
      d.putMetadata(a.a.BYTE_SEGMENTS, p)
    }
    var g = h.getECLevel()
    if (null != g) {
      d.putMetadata(a.a.ERROR_CORRECTION_LEVEL, g)
    }
    return d
  }
  t.prototype.reportFoundResultPoints = function (t, e) {
    if (null != t) {
      var r = t.get(i.a.NEED_RESULT_POINT_CALLBACK)
      if (null != r) {
        e.forEach(function (t, e, n) {
          r.foundPossibleResultPoint(t)
        })
      }
    }
  }
  t.prototype.reset = function () {}
  return t
}()
exports.a = f
