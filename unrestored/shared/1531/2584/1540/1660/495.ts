/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：495
 */

var r = require("../1745/332")
var o = require("../1623/309")
var i = require("../1541/933")
var a = require("./1067")
var s = i("IE_PROTO")
var object$prototype = Object.prototype
module.exports = a ? Object.getPrototypeOf : function (e) {
  e = o(e)
  return r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? object$prototype : null
}
