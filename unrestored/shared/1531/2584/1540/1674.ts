/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1674
 */

"use strict"

var r = require("./1623/86")
var o = require("./1684/1075")
var i = require("./1675/421")
var a = require("./1745/310")
r({
  target: "String",
  proto: true,
  forced: !require("./1684/1076")("includes")
}, {
  includes: function (e) {
    return !!~a(i(this)).indexOf(a(o(e)), arguments.length > 1 ? arguments[1] : undefined)
  }
})
