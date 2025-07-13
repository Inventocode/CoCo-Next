import * as r from "../2458/1398";
import * as i from "../../../1139/1383/849/index";
module.exports = function (e) {
  for (var t = i(e), n = t.length; n--;) {
    var o = t[n];
    var a = e[o];
    t[n] = [o, a, r(a)];
  }
  return t;
};