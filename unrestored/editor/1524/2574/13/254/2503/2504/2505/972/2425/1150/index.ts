import * as r from "./2430/index";
import * as i from "./2437/index";
import * as o from "./2439";
import * as a from "./2440";
import * as s from "./2441";
function c(e) {
  var t = -1;
  var n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
c.prototype.clear = r;
c.prototype.delete = i;
c.prototype.get = o;
c.prototype.has = a;
c.prototype.set = s;
module.exports = c;