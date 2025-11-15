/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：822
 */

var r = require("../1541/167")
var o = require("../1541/247/index")
var i = require("./629/index")
var a = o("species")
module.exports = function (e) {
  return i >= 51 || !r(function () {
    var t = [];
    (t.constructor = {})[a] = function () {
      return {
        foo: 1
      }
    }
    return 1 !== t[e](Boolean).foo
  })
}
