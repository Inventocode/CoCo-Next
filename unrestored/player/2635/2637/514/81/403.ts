/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：403
 */

"use strict"

var r = require("./151")
var i = require("./74")
var o = require("./122")
var a = require("./170")
var s = require("./115")
var u = require("./504")
var c = require("./453")
var l = function () {
  function t() {}
  t.prototype.decode = function (t, e) {
    if (undefined === e) {
      e = null
    }
    var n = null
    var o = new c.a(t.getBlackMatrix())
    var l = null
    var d = null
    try {
      l = (f = o.detectMirror(false)).getPoints()
      this.reportFoundResultPoints(e, l)
      d = new u.a().decode(f)
    } catch (b) {
      n = b
    }
    if (null == d) {
      try {
        var f
        l = (f = o.detectMirror(true)).getPoints()
        this.reportFoundResultPoints(e, l)
        d = new u.a().decode(f)
      } catch (b) {
        if (null != n) {
          throw n
        }
        throw b
      }
    }
    var h = new r.a(d.getText(), d.getRawBytes(), d.getNumBits(), l, i.a.AZTEC, s.a.currentTimeMillis())
    var p = d.getByteSegments()
    if (null != p) {
      h.putMetadata(a.a.BYTE_SEGMENTS, p)
    }
    var m = d.getECLevel()
    if (null != m) {
      h.putMetadata(a.a.ERROR_CORRECTION_LEVEL, m)
    }
    return h
  }
  t.prototype.reportFoundResultPoints = function (t, e) {
    if (null != t) {
      var n = t.get(o.a.NEED_RESULT_POINT_CALLBACK)
      if (null != n) {
        e.forEach(function (t, e, r) {
          n.foundPossibleResultPoint(t)
        })
      }
    }
  }
  t.prototype.reset = function () {}
  return t
}()
exports.a = l
