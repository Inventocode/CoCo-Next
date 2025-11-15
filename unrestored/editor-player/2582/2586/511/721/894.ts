/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：894
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */$$_81_index from "../81/index"
import * as /* [auto-meaningful-name] */$_261 from "./261"
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
var a = function (t) {
  function e(e, r) {
    return t.call(this, new $$_81_index.QRCodeReader(), e, r) || this
  }
  i(e, t)
  return e
}($_261.a)
export default a
