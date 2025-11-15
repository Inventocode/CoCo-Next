/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：495
 */

var r = require("../1541/332")
var o = require("../1541/309")
var i = require("../1541/933")
var a = require("../1630/1067")
var s = i("IE_PROTO")
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
module.exports = a ? Object.getPrototypeOf : function (e) {
  e = o(e)
  return r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Object$prototype : null
}
