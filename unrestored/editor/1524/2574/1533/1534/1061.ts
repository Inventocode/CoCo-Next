var r = require("../935/437");
var o = require("./631").f;
var i = {}.toString;
var a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
module.exports.f = function (e) {
  return a && "[object Window]" == i.call(e) ? function (e) {
    try {
      return o(e);
    } catch (t) {
      return a.slice();
    }
  }(e) : o(r(e));
};