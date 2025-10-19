/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1567
 */

"use strict";

var r = require("./1623/86");
var o = require("./1721/817").includes;
var i = require("./936/633");
r({
  target: "Array",
  proto: true
}, {
  includes: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : undefined);
  }
});
i("includes");