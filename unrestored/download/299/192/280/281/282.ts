/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：282
 */

"use strict"

var /* [auto-meaningful-name] */require_119_$_119$charAt = require(/* 119 */"./119").charAt
var i = require(/* 36 */"../../209/36")
var o = require(/* 35 */"../../233/35/index")
var a = require(/* 168 */"../../268/167/168/index")
var s = require(/* 123 */"../../268/167/123")
var /* [auto-meaningful-name] */StringIterator = "String Iterator"
var /* [auto-meaningful-name] */o$set = o.set
var l = o.getterFor(StringIterator)
a(String, "String", function (e) {
  o$set(this, {
    type: StringIterator,
    string: i(e),
    index: 0
  })
}, function () {
  var e
  var t = l(this)
  var /* [auto-meaningful-name] */t$string = t.string
  var /* [auto-meaningful-name] */t$index = t.index
  return t$index >= t$string.length ? s(undefined, true) : (e = require_119_$_119$charAt(t$string, t$index), t.index += e.length, s(e, false))
})
