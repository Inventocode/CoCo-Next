/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1602
 */

"use strict"

var r = require("./1706/86/index")
var /* [auto-meaningful-name] */require$_1581_401$findIndex = require("./1581/401").findIndex
var i = require("./1598/637")
var a = true
if ("findIndex" in []) {
  Array(1).findIndex(function () {
    a = false
  })
}
r({
  target: "Array",
  proto: true,
  forced: a
}, {
  findIndex: function (e) {
    return require$_1581_401$findIndex(this, e, arguments.length > 1 ? arguments[1] : undefined)
  }
})
i("findIndex")
