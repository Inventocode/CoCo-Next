/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：247
 */

var r = require("../../1736/194");
var o = require("../../1541/932");
var i = require("../../1745/332");
var a = require("../../1541/815");
var s = require("../../1541/1054");
var c = require("./1206");
var l = o("wks");
var u = r.Symbol;
var d = c ? u : u && u.withoutSetter || a;
module.exports = function (e) {
  if (!(i(l, e) && (s || "string" == typeof l[e]))) {
    if (s && i(u, e)) {
      l[e] = u[e];
    } else {
      l[e] = d("Symbol." + e);
    }
  }
  return l[e];
};