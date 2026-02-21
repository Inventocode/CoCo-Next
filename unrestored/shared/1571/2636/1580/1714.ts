/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1714
 */

"use strict"

var r = require("./1662/86")
var o = require("./1724/1096")
var i = require("./1720/424")
var a = require("./1282/310")
r({
  target: "String",
  proto: true,
  forced: !require("./1724/1097")("includes")
}, {
  includes: function (e) {
    return !!~a(i(this)).indexOf(a(o(e)), arguments.length > 1 ? arguments[1] : undefined)
  }
})
