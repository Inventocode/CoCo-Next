/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：629
 */

var r;
var o;
var i = require("../../1736/194");
var a = require("./630");
var s = i.process;
var c = i.Deno;
var l = s && s.versions || c && c.version;
var u = l && l.v8;
if (u) {
  o = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1];
} else {
  if (a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/))) {
    o = r[1];
  }
}
module.exports = o && +o;