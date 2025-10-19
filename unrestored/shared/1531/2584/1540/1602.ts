/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1602
 */

var r = require("./1623/86");
var o = Math.log;
var i = Math.LN2;
r({
  target: "Math",
  stat: true
}, {
  log2: function (e) {
    return o(e) / i;
  }
});