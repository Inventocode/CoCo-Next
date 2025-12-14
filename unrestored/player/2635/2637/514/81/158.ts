/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：158
 */

"use strict"

var r = require("./152")
var i = function () {
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
var o = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this
  }
  i(e, t)
  e.kind = "WriterException"
  return e
}(r.a)
exports.a = o
