/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1744
 */

var r = require("./1698/86/index")
var o = require("./1541/194")
var i = require("./1646/1238/index")
var a = require("./1573/750")
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
