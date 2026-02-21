/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1600
 */

"use strict"

var r = require("./1662/86")
var /* [auto-meaningful-name] */require$_1758_401$filter = require("./1758/401").filter
r({
  target: "Array",
  proto: true,
  forced: !require("./1597/833")("filter")
}, {
  filter: function (e) {
    return require$_1758_401$filter(this, e, arguments.length > 1 ? arguments[1] : undefined)
  }
})
