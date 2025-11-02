/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：877
 */

"use strict"

var n = require("./260")
var o = require("../590")
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
    if (undefined === e) {
      e = null
    }
    if (undefined === r) {
      r = 500
    }
    var n = new o.a()
    n.setHints(e)
    return t.call(this, n, r) || this
  }
  i(e, t)
  e.prototype.decodeBitmap = function (t) {
    return this.reader.decodeWithState(t)
  }
}(n.a)
