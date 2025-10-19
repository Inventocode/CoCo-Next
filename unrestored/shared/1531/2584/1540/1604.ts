/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1604
 */

var r = require("./1623/86");
var o = require("./1736/167");
var i = require("./1594/940");
var a = Math.abs;
var s = Math.exp;
var c = Math.E;
r({
  target: "Math",
  stat: true,
  forced: o(function () {
    return -2e-17 != Math.sinh(-2e-17);
  })
}, {
  sinh: function (e) {
    return a(e = +e) < 1 ? (i(e) - i(-e)) / 2 : (s(e - 1) - s(-e - 1)) * (c / 2);
  }
});