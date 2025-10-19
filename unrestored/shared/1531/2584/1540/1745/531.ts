/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：531
 */

var r = require("../1623/300").f;
var o = require("./332");
var i = require("../1742/247/index")("toStringTag");
module.exports = function (e, t, n) {
  if (e && !o(e = n ? e : e.prototype, i)) {
    r(e, i, {
      configurable: true,
      value: t
    });
  }
};