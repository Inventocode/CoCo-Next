var r = require("../../../../../../../../../../../254/2503/2504/2505/972/2425/1150/index");
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