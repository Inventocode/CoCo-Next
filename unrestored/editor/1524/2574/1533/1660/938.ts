import * as r from "../1626/231";
import * as o from "../1659/634";
module.exports = function (e, t, n) {
  var i;
  var a;
  if (o && "function" == typeof (i = t.constructor) && i !== n && r(a = i.prototype) && a !== n.prototype) {
    o(e, a);
  }
  return e;
};