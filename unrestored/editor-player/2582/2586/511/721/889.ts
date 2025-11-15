/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：889
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
    return t.call(this, new n.AztecCodeReader(), e, r) || this
  }
  i(e, t)
}(o.a)
