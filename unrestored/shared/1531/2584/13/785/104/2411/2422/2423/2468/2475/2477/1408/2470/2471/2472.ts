/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2472
 */

var r = require("../../../../../../../../../../../254/2513/2514/2515/973/2435/1153/index");
function i(e, t) {
  if ("function" != typeof e || null != t && "function" != typeof t) {
    throw new TypeError("Expected a function");
  }
  var n = function n() {
    var r = arguments;
    var i = t ? t.apply(this, r) : r[0];
    var o = n.cache;
    if (o.has(i)) {
      return o.get(i);
    }
    var a = e.apply(this, r);
    n.cache = o.set(i, a) || o;
    return a;
  };
  n.cache = new (i.Cache || r)();
  return n;
}
i.Cache = r;
module.exports = i;