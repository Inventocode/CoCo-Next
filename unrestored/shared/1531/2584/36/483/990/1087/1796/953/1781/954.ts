var r = require("../../../../../1444/1088/832");
module.exports = function (e, t) {
  for (var n = e.length; n--;) {
    if (r(e[n][0], t)) {
      return n;
    }
  }
  return -1;
};