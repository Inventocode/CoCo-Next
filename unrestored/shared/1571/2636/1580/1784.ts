/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1784
 */

var r = require("./1706/86/index")
var o = require("./1686/194")
var i = require("./1686/1267/index")
var a = require("./1686/758")
var /* [auto-meaningful-name] */o$process = o.process
r({
  global: true,
  enumerable: true,
  noTargetGet: true
}, {
  queueMicrotask: function (e) {
    var t = a && o$process.domain
    i(t ? t.bind(e) : e)
  }
})
