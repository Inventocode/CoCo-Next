/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1732
 */

"use strict";

var r = require("./1720/258/index");
var o = require("./1735/949");
var i = require("./1736/167");
var a = r.aTypedArray;
var s = r.exportTypedArrayMethod;
var c = [].slice;
s("slice", function (e, t) {
  for (var n = c.call(a(this), e, t), r = o(this), i = 0, s = n.length, l = new r(s); s > i;) {
    l[i] = n[i++];
  }
  return l;
}, i(function () {
  new Int8Array(1).slice();
}));