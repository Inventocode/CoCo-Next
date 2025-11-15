/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1562
 */

"use strict"

var r = require("./1698/86/index")
var /* [auto-meaningful-name] */require$_1541_399$findIndex = require("./1541/399").findIndex
var i = require("./1558/633")
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
    return require$_1541_399$findIndex(this, e, arguments.length > 1 ? arguments[1] : undefined)
  }
})
i("findIndex")
