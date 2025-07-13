import * as r from "../../../../2509/2517/850";
module.exports = function (e, t) {
  for (var n = e.length; n--;) {
    if (r(e[n][0], t)) {
      return n;
    }
  }
  return -1;
};