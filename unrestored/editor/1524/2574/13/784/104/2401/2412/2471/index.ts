import * as r from "./1402/index";
import * as i from "./762/index";
module.exports = function (e, t) {
  var n = -1;
  var o = i(e) ? Array(e.length) : [];
  r(e, function (e, r, i) {
    o[++n] = t(e, r, i);
  });
  return o;
};