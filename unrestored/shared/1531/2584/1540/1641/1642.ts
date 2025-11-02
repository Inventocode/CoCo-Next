/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1642
 */

"use strict"

var r = require("./1065")
var o = require("../1253/825")
module.exports = r ? {}.toString : function () {
  return "[object " + o(this) + "]"
}
