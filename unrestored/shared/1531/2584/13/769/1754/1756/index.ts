/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1756
 */

var r = require("./1757");
function i(t, n, o) {
  if ("undefined" !== typeof Reflect && Reflect.get) {
    module.exports = i = Reflect.get;
  } else {
    module.exports = i = function (e, t, n) {
      var i = r(e, t);
      if (i) {
        var o = Object.getOwnPropertyDescriptor(i, t);
        return o.get ? o.get.call(n) : o.value;
      }
    };
  }
  return i(t, n, o || t);
}
module.exports = i;