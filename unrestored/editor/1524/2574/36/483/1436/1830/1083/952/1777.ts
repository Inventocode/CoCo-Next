import * as r from "./1775/953";
module.exports = function (e, t) {
  var n = this.__data__;
  var i = r(n, e);
  if (i < 0) {
    ++this.size;
    n.push([e, t]);
  } else {
    n[i][1] = t;
  }
  return this;
};