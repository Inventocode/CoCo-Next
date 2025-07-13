import * as r from "../1250/472";
import * as o from "../1534/631";
import * as i from "../1534/1060";
import * as a from "../1659/241";
module.exports = r("Reflect", "ownKeys") || function (e) {
  var t = o.f(a(e));
  var n = i.f;
  return n ? t.concat(n(e)) : t;
};