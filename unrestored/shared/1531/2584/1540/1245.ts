/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1245
 */

"use strict"

var /* [auto-meaningful-name] */require$_1671_946$charAt = require("./1671/946").charAt
var o = require("./1684/310")
var i = require("./1541/423/index")
var a = require("./936/1066/index")
var /* [auto-meaningful-name] */i$set = i.set
var c = i.getterFor("String Iterator")
a(String, "String", function (e) {
  i$set(this, {
    type: "String Iterator",
    string: o(e),
    index: 0
  })
}, function () {
  var e
  var t = c(this)
  var /* [auto-meaningful-name] */t$string = t.string
  var /* [auto-meaningful-name] */t$index = t.index
  return t$index >= t$string.length ? {
    value: undefined,
    done: true
  } : (e = require$_1671_946$charAt(t$string, t$index), t.index += e.length, {
    value: e,
    done: false
  })
})
