var r;
var o;
import * as i from "../1738/194";
import * as a from "./1067/630";
var s = i.process;
var c = i.Deno;
var l = s && s.versions || c && c.version;
var u = l && l.v8;
if (u) {
  o = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1];
} else {
  if (a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/))) {
    o = r[1];
  }
}
module.exports = o && +o;