/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1604
 */

var r = require("./1698/86/index")
var o = require("./1541/167")
var i = require("./1594/940")
var /* [auto-meaningful-name] */Math$abs = Math.abs
var /* [auto-meaningful-name] */Math$exp = Math.exp
var /* [auto-meaningful-name] */Math$E = Math.E
r({
  target: "Math",
  stat: true,
  forced: o(function () {
    return -2e-17 != Math.sinh(-2e-17)
  })
}, {
  sinh: function (e) {
    return Math$abs(e = +e) < 1 ? (i(e) - i(-e)) / 2 : (Math$exp(e - 1) - Math$exp(-e - 1)) * (Math$E / 2)
  }
})
