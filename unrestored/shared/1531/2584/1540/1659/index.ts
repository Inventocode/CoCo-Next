/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1659
 */

var r = require("../1623/86");
var o = require("../1623/272");
var i = require("./241");
var a = require("./386/index");
r({
  target: "Reflect",
  stat: true,
  sham: !o
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a.f(i(e), t);
  }
});