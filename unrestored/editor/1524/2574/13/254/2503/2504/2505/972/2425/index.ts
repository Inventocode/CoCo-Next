import * as r from "../973/index";
import * as i from "./1149";
import * as o from "./1150/index";
module.exports = function (e, t) {
  var n = this.__data__;
  if (n instanceof r) {
    var a = n.__data__;
    if (!i || a.length < 199) {
      a.push([e, t]);
      this.size = ++n.size;
      return this;
    }
    n = this.__data__ = new o(a);
  }
  n.set(e, t);
  this.size = n.size;
  return this;
};