/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1188
 */

var r = require("./1755");
module.exports = function (e, t) {
  if (null == e) {
    return {};
  }
  var n;
  var i;
  var o = r(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++) {
      n = a[i];
      if (!(t.indexOf(n) >= 0)) {
        if (Object.prototype.propertyIsEnumerable.call(e, n)) {
          o[n] = e[n];
        }
      }
    }
  }
  return o;
};