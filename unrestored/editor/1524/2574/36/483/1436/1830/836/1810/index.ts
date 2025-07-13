import * as r from "../../638";
import * as i from "../../../../1437/958";
import * as o from "./1811";
var a = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  if (!r(e)) {
    return o(e);
  }
  var t = i(e);
  var n = [];
  for (var s in e) if ("constructor" != s || !t && a.call(e, s)) {
    n.push(s);
  }
  return n;
};