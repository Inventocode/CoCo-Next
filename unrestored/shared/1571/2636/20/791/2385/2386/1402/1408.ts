/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1408
 */

"use strict"

var /* [auto-meaningful-name] */require$$_1410_311_index$ObjectSetPrototypeOf = require("../1410/311/index").ObjectSetPrototypeOf
module.exports = o
var i = require("./1409")
function o(e) {
  if (!(this instanceof o)) {
    return new o(e)
  }
  i.call(this, e)
}
require$$_1410_311_index$ObjectSetPrototypeOf(o.prototype, i.prototype)
require$$_1410_311_index$ObjectSetPrototypeOf(o, i)
o.prototype._transform = function (e, t, n) {
  n(null, e)
}
