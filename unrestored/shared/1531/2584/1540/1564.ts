/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1564
 */

"use strict";

var r = require("./1623/86");
var o = require("./1563/1216");
var i = require("./1623/309");
var a = require("./1735/257");
var s = require("./1623/439");
var c = require("./1557/821/index");
r({
  target: "Array",
  proto: true
}, {
  flatMap: function (e) {
    var t;
    var n = i(this);
    var r = a(n.length);
    s(e);
    (t = c(n, 0)).length = o(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : undefined);
    return t;
  }
});