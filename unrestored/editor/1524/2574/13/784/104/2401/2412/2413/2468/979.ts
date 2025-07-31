var r = require("../../../../../../254/2523/1413/2521/978");
module.exports = function (e) {
  if ("string" == typeof e || r(e)) {
    return e;
  }
  var t = e + "";
  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
};