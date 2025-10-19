/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1660
 */

var r = require("../1623/86");
var o = require("../1659/241");
var i = require("./495");
r({
  target: "Reflect",
  stat: true,
  sham: !require("./1067")
}, {
  getPrototypeOf: function (e) {
    return i(o(e));
  }
});