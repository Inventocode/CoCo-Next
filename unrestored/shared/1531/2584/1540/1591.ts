/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1591
 */

var r = require("./1623/86");
var o = Math.atanh;
var i = Math.log;
r({
  target: "Math",
  stat: true,
  forced: !(o && 1 / o(-0) < 0)
}, {
  atanh: function (e) {
    return 0 == (e = +e) ? e : i((1 + e) / (1 - e)) / 2;
  }
});