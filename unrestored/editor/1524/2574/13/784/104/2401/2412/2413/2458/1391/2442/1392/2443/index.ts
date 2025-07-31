var r = require("../../../../../../../../../../254/2503/2504/2505/972/2425/1150/index");
var i = require("./2444");
var o = require("./2445");
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