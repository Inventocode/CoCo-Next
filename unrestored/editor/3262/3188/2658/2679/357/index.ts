import * as r from "../529";
import * as i from "./1295";
import * as o from "./1961/index";
module.exports = function (e) {
  return function () {
    var t;
    var n = r(e);
    if (i()) {
      var a = r(this).constructor;
      t = Reflect.construct(n, arguments, a);
    } else {
      t = n.apply(this, arguments);
    }
    return o(this, t);
  };
};