/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1726
 */

"use strict"

var r = require("./1724/258")
var /* [auto-meaningful-name] */require$_1541_399$map = require("./1541/399").map
var i = require("./1735/949")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("map", function (e) {
  return require$_1541_399$map(r$aTypedArray(this), e, arguments.length > 1 ? arguments[1] : undefined, function (e, t) {
    return new (i(e))(t)
  })
})
