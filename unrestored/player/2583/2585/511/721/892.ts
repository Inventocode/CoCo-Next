/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：892
 */

"use strict"

var r = require("../81/index")
var i = require("./261")
var o = function () {
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
!function (t) {
  function e(e, n) {
    var i = this
    var o = new r.MultiFormatReader()
    o.setHints(e);
    (i = t.call(this, o, e, n) || this).reader = o
    return i
  }
  o(e, t)
  Object.defineProperty(e.prototype, "possibleFormats", {
    set: function (t) {
      this.hints.set(r.DecodeHintType.POSSIBLE_FORMATS, t)
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
}(i.a)
