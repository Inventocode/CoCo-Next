/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1600
 */

"use strict"

var r = require("./1706/86/index")
var /* [auto-meaningful-name] */require$_1581_401$filter = require("./1581/401").filter
r({
  target: "Array",
  proto: true,
  forced: !require("./1597/833")("filter")
}, {
  filter: function (e) {
    return require$_1581_401$filter(this, e, arguments.length > 1 ? arguments[1] : undefined)
  }
})
