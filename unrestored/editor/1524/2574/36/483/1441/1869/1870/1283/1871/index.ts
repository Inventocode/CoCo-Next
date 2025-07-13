import * as r from "../../../../../989/1086/index";
import * as i from "./1872";
import * as o from "./1873";
function a(e) {
  var t = -1;
  var n = null == e ? 0 : e.length;
  for (this.__data__ = new r(); ++t < n;) {
    this.add(e[t]);
  }
}
a.prototype.add = a.prototype.push = i;
a.prototype.has = o;
module.exports = a;