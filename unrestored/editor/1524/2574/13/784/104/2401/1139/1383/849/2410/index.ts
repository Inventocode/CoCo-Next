import * as r from "../../../../../../../254/2503/2504/2505/852/2478/1146";
import * as i from "./2411";
var o = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  if (!r(e)) {
    return i(e);
  }
  var t = [];
  for (var n in Object(e)) if (o.call(e, n) && "constructor" != n) {
    t.push(n);
  }
  return t;
};