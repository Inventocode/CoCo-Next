/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：907
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */Module_81 from /* 81 */"../81/index"
import * as /* [auto-meaningful-name] */Module_260 from /* 260 */"./260"
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
var a = function (t) {
  function e(e, n) {
    return t.call(this, new Module_81.QRCodeReader(), e, n) || this
  }
  o(e, t)
  return e
}(Module_260.a)
export default a
