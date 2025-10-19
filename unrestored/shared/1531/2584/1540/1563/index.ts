/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1563
 */

"use strict";

var r = require("../1623/86");
var o = require("./1216");
var i = require("../1623/309");
var a = require("../1735/257");
var s = require("../1680/473");
var c = require("../1557/821/index");
r({
  target: "Array",
  proto: true
}, {
  flat: function () {
    var e = arguments.length ? arguments[0] : undefined;
    var t = i(this);
    var n = a(t.length);
    var r = c(t, 0);
    r.length = o(r, t, t, n, 0, undefined === e ? 1 : s(e));
    return r;
  }
});