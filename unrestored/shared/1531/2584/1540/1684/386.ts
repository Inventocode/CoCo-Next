/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：386
 */

var r = require("../1541/272")
var o = require("../1541/931")
var i = require("../1541/627")
var a = require("../1541/437")
var s = require("../1541/628")
var c = require("../1541/332")
var l = require("../1541/300/1208")
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
