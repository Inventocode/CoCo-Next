var r = require("../1608/705");
var o = require("../1244/945");
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