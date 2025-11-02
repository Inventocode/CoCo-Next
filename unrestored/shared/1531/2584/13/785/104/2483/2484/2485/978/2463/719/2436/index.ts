/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2436
 */

var r = require("../../../../../../../../../254/2513/2514/2515/2516/1150")
var i = require("./2437/index")
var o = require("../../../../../../../../../254/2533/1420/475")
var a = require("../../../1397")
var s = /^\[object .+?Constructor\]$/
var function$prototype = Function.prototype
var object$prototype = Object.prototype
var function$prototype$toString = function$prototype.toString
var object$prototype$hasOwnProperty = object$prototype.hasOwnProperty
var d = RegExp("^" + function$prototype$toString.call(object$prototype$hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
module.exports = function (e) {
  return !(!o(e) || i(e)) && (r(e) ? d : s).test(a(e))
}
