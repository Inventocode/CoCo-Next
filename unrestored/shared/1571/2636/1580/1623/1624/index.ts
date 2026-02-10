/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1624
 */

"use strict"

var r = require("../../1282/240")
var o = require("./1236")
module.exports = function (e) {
  r(this)
  if ("string" === e || "default" === e) {
    e = "string"
  } else if ("number" !== e) {
    throw TypeError("Incorrect hint")
  }
  return o(this, e)
}
