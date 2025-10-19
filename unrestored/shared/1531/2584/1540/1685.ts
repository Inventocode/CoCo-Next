/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1685
 */

"use strict";

var r = require("./1623/86");
var o = require("./1686/753/index").trim;
r({
  target: "String",
  proto: true,
  forced: require("./1686/1078")("trim")
}, {
  trim: function () {
    return o(this);
  }
});