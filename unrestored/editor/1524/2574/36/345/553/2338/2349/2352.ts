import * as r from "../761";
import * as i from "../717";
function o(e) {
  this.mode = i.BYTE;
  this.data = r.from(e);
}
o.getBitsLength = function (e) {
  return 8 * e;
};
o.prototype.getLength = function () {
  return this.data.length;
};
o.prototype.getBitsLength = function () {
  return o.getBitsLength(this.data.length);
};
o.prototype.write = function (e) {
  for (var t = 0, n = this.data.length; t < n; t++) {
    e.put(this.data[t], 8);
  }
};
module.exports = o;