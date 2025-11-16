/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：785__part-3
 */

"use strict"

import { "785__part-2__Z" as Z, "785__part-2__ee" as ee, "785__part-2__te" as te } from "./index__part-2"
import * as /* [auto-meaningful-name] */$_325_index from "./325/index"
import * as /* [auto-meaningful-name] */$_1464 from "./1464"
var /* [auto-meaningful-name] */$_325_index$a$Uint8Array = $_325_index.a.Uint8Array
var Qe = function (e) {
  var t = new e.constructor(e.byteLength)
  new $_325_index$a$Uint8Array(t).set(new $_325_index$a$Uint8Array(e))
  return t
}
var We = function (e, t) {
  var n = t ? Qe(e.buffer) : e.buffer
  return new e.constructor(n, e.byteOffset, e.length)
}
var Ke = function (e, t) {
  var n = -1
  var /* [auto-meaningful-name] */e$length = e.length
  for (t || (t = Array(e$length)); ++n < e$length;) {
    t[n] = e[n]
  }
  return t
}
var /* [auto-meaningful-name] */Object$create = Object.create
var Ye = function () {
  function e() {}
  return function (t) {
    if (!ee(t)) {
      return {}
    }
    if (Object$create) {
      return Object$create(t)
    }
    e.prototype = t
    var n = new e()
    e.prototype = undefined
    return n
  }
}()
var qe = function (e, t) {
  return function (n) {
    return e(t(n))
  }
}
var $e = qe(Object.getPrototypeOf, Object)
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var Ze = function (e) {
  var t = e && e.constructor
  return e === ("function" == typeof t && t.prototype || Object$prototype)
}
var et = function (e) {
  return "function" != typeof e.constructor || Ze(e) ? {} : Ye($e(e))
}
var tt = function (e) {
  return null != e && "object" == typeof e
}
var nt = function (e) {
  return tt(e) && "[object Arguments]" == Z(e)
}
var /* [auto-meaningful-name] */_Object$prototype = Object.prototype
var /* [auto-meaningful-name] */_Object$prototype$hasOwnProperty = _Object$prototype.hasOwnProperty
var /* [auto-meaningful-name] */_Object$prototype$propertyIsEnumerable = _Object$prototype.propertyIsEnumerable
var at = nt(function () {
  return arguments
}()) ? nt : function (e) {
  return tt(e) && _Object$prototype$hasOwnProperty.call(e, "callee") && !_Object$prototype$propertyIsEnumerable.call(e, "callee")
}
var /* [auto-meaningful-name] */Array$isArray = Array.isArray
var ct = function (e) {
  return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}
var ut = function (e) {
  return null != e && ct(e.length) && !te(e)
}
var lt = function (e) {
  return tt(e) && ut(e)
}
export { $_325_index$a$Uint8Array as "785__part-3__ze" }
export { We as "785__part-3__We" }
export { Ke as "785__part-3__Ke" }
export { qe as "785__part-3__qe" }
export { $e as "785__part-3__$e" }
export { Ze as "785__part-3__Ze" }
export { et as "785__part-3__et" }
export { tt as "785__part-3__tt" }
export { at as "785__part-3__at" }
export { Array$isArray as "785__part-3__st" }
export { ct as "785__part-3__ct" }
export { ut as "785__part-3__ut" }
export { lt as "785__part-3__lt" }
