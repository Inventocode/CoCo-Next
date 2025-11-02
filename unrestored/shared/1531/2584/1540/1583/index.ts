/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1583
 */

var r = require("../1740/422")
var o = require("./1584")
var i = require("../1742/247/index")("toPrimitive")
var date$prototype = Date.prototype
if (!(i in date$prototype)) {
  r(date$prototype, i, o)
}
