/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2458
 */

var r = require("../../../../../../1395/718/849");
var i = require("../../../../../../../2483/2484/2485/2494/1157/1400");
var o = require("../../../../../../../../../254/2513/2514/2519/2527/851");
var a = require("../1399/index");
var s = require("./2459");
var c = require("./2460");
var u = r ? r.prototype : undefined;
var l = u ? u.valueOf : undefined;
module.exports = function (e, t, n, r, u, f, d) {
  switch (n) {
    case "[object DataView]":
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
        return false;
      }
      e = e.buffer;
      t = t.buffer;
    case "[object ArrayBuffer]":
      return !(e.byteLength != t.byteLength || !f(new i(e), new i(t)));
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return o(+e, +t);
    case "[object Error]":
      return e.name == t.name && e.message == t.message;
    case "[object RegExp]":
    case "[object String]":
      return e == t + "";
    case "[object Map]":
      var h = s;
    case "[object Set]":
      var p = 1 & r;
      if (h || (h = c), e.size != t.size && !p) {
        return false;
      }
      var _ = d.get(e);
      if (_) {
        return _ == t;
      }
      r |= 2;
      d.set(e, t);
      var A = a(h(e), h(t), r, u, f, d);
      d.delete(e);
      return A;
    case "[object Symbol]":
      if (l) {
        return l.call(e) == l.call(t);
      }
  }
  return false;
};