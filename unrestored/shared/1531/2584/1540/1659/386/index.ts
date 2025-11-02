/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：386
 */

var r = require("../../1623/272")
var o = require("../../1541/931")
var i = require("../../1665/627")
var a = require("../../1678/437")
var s = require("../../1656/628")
var c = require("../../1745/332")
var l = require("./1208")
var object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
exports.f = r ? object$getOwnPropertyDescriptor : function (e, t) {
  e = a(e)
  t = s(t)
  if (l) {
    try {
      return object$getOwnPropertyDescriptor(e, t)
    } catch (n) {}
  }
  if (c(e, t)) {
    return i(!o.f.call(e, t), e[t])
  }
}
