var r = require("../1626/231");
var o = require("../1659/634");
module.exports = function (e, t, n) {
  var i;
  var a;
  if (o && "function" == typeof (i = t.constructor) && i !== n && r(a = i.prototype) && a !== n.prototype) {
    o(e, a);
  }
  return e;
};