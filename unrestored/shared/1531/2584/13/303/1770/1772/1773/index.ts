/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1773
 */

"use strict";

var r = require("../../952/index");
var i = require("./1774");
var o = require("./1775");
module.exports = function (e) {
  for (var t, n = 0, a = ""; !t;) {
    a += o(i, r.get(), 1);
    t = e < Math.pow(16, n + 1);
    n++;
  }
  return a;
};