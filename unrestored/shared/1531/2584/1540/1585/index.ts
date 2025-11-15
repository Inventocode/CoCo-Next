/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1585
 */

"use strict"

var r = require("../1541/231")
var o = require("../1541/300/index")
var i = require("./495")
var a = require("../1541/247/index")("hasInstance")
var /* [auto-meaningful-name] */Function$prototype = Function.prototype
if (!(a in Function$prototype)) {
  o.f(Function$prototype, a, {
    value: function (e) {
      if ("function" != typeof this || !r(e)) {
        return false
      }
      if (!r(this.prototype)) {
        return e instanceof this
      }
      for (; e = i(e);) {
        if (this.prototype === e) {
          return true
        }
      }
      return false
    }
  })
}
