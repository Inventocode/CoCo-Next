/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1662
 */

var r = require("./1623/86");
var o = require("./1659/241");
var i = Object.isExtensible;
r({
  target: "Reflect",
  stat: true
}, {
  isExtensible: function (e) {
    o(e);
    return !i || i(e);
  }
});