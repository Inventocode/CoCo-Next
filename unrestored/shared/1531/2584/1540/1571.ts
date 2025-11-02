/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1571
 */

"use strict"

var r = require("./1623/86")
var require$1733399$map = require("./1733/399").map
r({
  target: "Array",
  proto: true,
  forced: !require("./1557/822")("map")
}, {
  map: function (e) {
    return require$1733399$map(this, e, arguments.length > 1 ? arguments[1] : undefined)
  }
})
