/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：894
 */

"use strict"

export { a }
import * as r from "../81/index"
import * as i from "./261"
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
    return t.call(this, new r.QRCodeReader(), e, n) || this
  }
  o(e, t)
  return e
}(i.a)
export default a
