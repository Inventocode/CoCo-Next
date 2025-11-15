/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：892
 */

"use strict"

var n = require("../81/index")
var o = require("./261")
var i = function () {
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
!function (t) {
  function e(e, r) {
    var o = this
    var i = new n.MultiFormatReader()
    i.setHints(e);
    (o = t.call(this, i, e, r) || this).reader = i
    return o
  }
  i(e, t)
  Object.defineProperty(e.prototype, "possibleFormats", {
    set: function (t) {
      this.hints.set(n.DecodeHintType.POSSIBLE_FORMATS, t)
      this.reader.setHints(this.hints)
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.decodeBitmap = function (t) {
    return this.reader.decodeWithState(t)
  }
  e.prototype.setHints = function (t) {
    this.hints = t
    this.reader.setHints(this.hints)
  }
}(o.a)
