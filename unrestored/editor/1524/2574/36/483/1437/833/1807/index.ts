import * as r from "../../958";
import * as i from "./1808";
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