/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：386
 */

var r = require("../../1699/271")
var o = require("../../1581/944")
var i = require("../631")
var a = require("../../1581/441")
var s = require("../../1696/632")
var c = require("../../1581/334")
var l = require("./1237")
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
