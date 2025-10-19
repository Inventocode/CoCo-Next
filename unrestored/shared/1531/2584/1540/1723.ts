/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1723
 */

"use strict";

var r = require("./1736/194");
var o = require("./1720/258/index");
var i = require("./936/index");
var a = require("./1742/247/index")("iterator");
var s = r.Uint8Array;
var c = i.values;
var l = i.keys;
var u = i.entries;
var d = o.aTypedArray;
var p = o.exportTypedArrayMethod;
var f = s && s.prototype[a];
var h = !!f && ("values" == f.name || undefined == f.name);
var m = function () {
  return c.call(d(this));
};
p("entries", function () {
  return u.call(d(this));
});
p("keys", function () {
  return l.call(d(this));
});
p("values", m, !h);
p(a, m, !h);