/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：386
 */

var r = require(/* 271 */"../1662/271")
var o = require(/* 944 */"./944")
var i = require(/* 631 */"../1282/631")
var a = require(/* 441 */"./441")
var s = require(/* 632 */"./632")
var c = require(/* 334 */"../1282/334")
var l = require(/* 1237 */"../1662/300/1237")
var /* [auto-meaningful-name] */Object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
exports.f = r ? Object$getOwnPropertyDescriptor : function (e, t) {
  e = a(e)
  t = s(t)
  if (l) {
    try {
      return Object$getOwnPropertyDescriptor(e, t)
    } catch (n) {}
  }
  if (c(e, t)) {
    return i(!o.f.call(e, t), e[t])
  }
}
