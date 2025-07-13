import * as r from "../../../../../1437/1087/831";
module.exports = function (e, t) {
  for (var n = e.length; n--;) {
    if (r(e[n][0], t)) {
      return n;
    }
  }
  return -1;
};