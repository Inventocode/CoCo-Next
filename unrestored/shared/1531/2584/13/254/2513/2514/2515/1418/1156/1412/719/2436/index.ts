/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2436
 */

var r = require("../../../../../2516/1150")
var i = require("./2437/index")
var o = require("../../../../../../../../2533/1420/475")
var a = require("../../../../../../../../../785/104/2483/2484/2485/978/1397")
var s = /^\[object .+?Constructor\]$/
var /* [auto-meaningful-name] */Function$prototype = Function.prototype
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */Function$prototype$toString = Function$prototype.toString
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object$prototype.hasOwnProperty
var d = RegExp("^" + Function$prototype$toString.call(Object$prototype$hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
module.exports = function (e) {
  return !(!o(e) || i(e)) && (r(e) ? d : s).test(a(e))
}
