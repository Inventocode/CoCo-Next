import * as r from "../1738/332";
import * as o from "./309";
import * as i from "../1534/932";
import * as a from "./1066";
var s = i("IE_PROTO");
var c = Object.prototype;
module.exports = a ? Object.getPrototypeOf : function (e) {
  e = o(e);
  return r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null;
};