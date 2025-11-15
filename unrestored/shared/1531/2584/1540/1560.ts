/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1560
 */

"use strict"

var r = require("./1698/86/index")
var /* [auto-meaningful-name] */require$_1541_399$filter = require("./1541/399").filter
r({
  target: "Array",
  proto: true,
  forced: !require("./1557/822")("filter")
}, {
  filter: function (e) {
    return require$_1541_399$filter(this, e, arguments.length > 1 ? arguments[1] : undefined)
  }
})
