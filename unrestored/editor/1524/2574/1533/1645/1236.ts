var r = require("../1659/241");
var o = require("../1626/231");
var i = require("../1639/1237");
module.exports = function (e, t) {
  if (r(e), o(t) && t.constructor === e) {
    return t;
  }
  var n = i.f(e);
  (0, n.resolve)(t);
  return n.promise;
};