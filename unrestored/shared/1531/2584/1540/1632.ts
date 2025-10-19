/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1632
 */

var r = require("./1623/86");
var o = require("./1736/167");
var i = require("./1738/231");
var a = Object.isExtensible;
r({
  target: "Object",
  stat: true,
  forced: o(function () {
    a(1);
  })
}, {
  isExtensible: function (e) {
    return !!i(e) && (!a || a(e));
  }
});