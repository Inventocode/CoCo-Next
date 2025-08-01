var r = require("../1666/241");
var o = require("../1633/231");
var i = require("../1646/1240");
module.exports = function (e, t) {
  if (r(e), o(t) && t.constructor === e) {
    return t;
  }
  var n = i.f(e);
  (0, n.resolve)(t);
  return n.promise;
};