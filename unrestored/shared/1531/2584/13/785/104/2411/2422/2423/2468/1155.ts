var r = require("../../../2412/446");
var i = require("../../../../../../254/2533/1420/2531/979");
var o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var a = /^\w*$/;
module.exports = function (e, t) {
  if (r(e)) {
    return !1;
  }
  var n = typeof e;
  return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || a.test(e) || !o.test(e) || null != t && e in Object(t);
};