/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1676
 */

"use strict";

var r = require("../1623/86");
var o = require("./1246").end;
r({
  target: "String",
  proto: true,
  forced: require("./1247")
}, {
  padEnd: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : undefined);
  }
});