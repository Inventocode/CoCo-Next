/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1602
 */

"use strict"

var r = require("./1662/86")
var /* [auto-meaningful-name] */require$_1758_401$findIndex = require("./1758/401").findIndex
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
    return require$_1758_401$findIndex(this, e, arguments.length > 1 ? arguments[1] : undefined)
  }
})
i("findIndex")
