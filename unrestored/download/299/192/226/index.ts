/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：226
 */

"use strict"

var r = require(/* 13 */"../288/13/index")
var i = require(/* 227 */"./227/index")
var o = require(/* 153 */"./153/index")
r({
  target: "Object",
  stat: true
}, {
  fromEntries: function (e) {
    var t = {}
    i(e, function (e, n) {
      o(t, e, n)
    }, {
      AS_ENTRIES: true
    })
    return t
  }
})
