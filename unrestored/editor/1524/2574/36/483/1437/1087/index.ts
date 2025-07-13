import * as r from "./1088/index";
import * as i from "./831";
var o = Object.prototype.hasOwnProperty;
module.exports = function (e, t, n) {
  var a = e[t];
  if (!(o.call(e, t) && i(a, n) && (void 0 !== n || t in e))) {
    r(e, t, n);
  }
};