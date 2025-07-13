import * as r from "../1601/705";
import * as o from "../1241/944";
module.exports = function (e, t) {
  var n = e.exec;
  if ("function" === typeof n) {
    var i = n.call(e, t);
    if ("object" !== typeof i) {
      throw TypeError("RegExp exec method returned something other than an Object or null");
    }
    return i;
  }
  if ("RegExp" !== r(e)) {
    throw TypeError("RegExp#exec called on incompatible receiver");
  }
  return o.call(e, t);
};