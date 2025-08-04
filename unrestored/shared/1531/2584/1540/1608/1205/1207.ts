var r = require("../../1738/231");
module.exports = function (e, t) {
  var n;
  var o;
  if ("string" === t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) {
    return o;
  }
  if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) {
    return o;
  }
  if ("string" !== t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) {
    return o;
  }
  throw TypeError("Can't convert object to primitive value");
};