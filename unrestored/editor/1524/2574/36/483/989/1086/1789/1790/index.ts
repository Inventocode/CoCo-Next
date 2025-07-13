import * as r from "./1791/index";
import * as i from "./1792";
import * as o from "./1793";
import * as a from "./1794";
import * as s from "./1795";
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