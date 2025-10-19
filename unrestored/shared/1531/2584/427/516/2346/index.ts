/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2346
 */

var r = require("./1370");
var i = require("./1371");
module.exports = function (e, t, n) {
  var o = t && n || 0;
  if ("string" == typeof e) {
    t = "binary" === e ? new Array(16) : null;
    e = null;
  }
  var a = (e = e || {}).random || (e.rng || r)();
  a[6] = 15 & a[6] | 64;
  a[8] = 63 & a[8] | 128;
  if (t) {
    for (var s = 0; s < 16; ++s) {
      t[o + s] = a[s];
    }
  }
  return t || i(a);
};