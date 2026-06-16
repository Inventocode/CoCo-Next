/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1609
 */

"use strict"

var r = require(/* 86 */"../1662/86")
var o = require(/* 825 */"./825")
var i = require(/* 441 */"../1581/441")
var a = require(/* 717 */"../1608/717")
var /* [auto-meaningful-name] */$join = [].join
var c = o != Object
var l = a("join", ",")
r({
  target: "Array",
  proto: true,
  forced: c || !l
}, {
  join: function (e) {
    return $join.call(i(this), undefined === e ? "," : e)
  }
})
