/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：235
 */

"use strict"

var /* [auto-meaningful-name] */require_30_$$_268_65_30_index$f = require(/* 30 */"../268/65/30/index").f
module.exports = function (e, t, n) {
  if (!(n in e)) {
    require_30_$$_268_65_30_index$f(e, n, {
      configurable: true,
      get: function () {
        return t[n]
      },
      set: function (e) {
        t[n] = e
      }
    })
  }
}
