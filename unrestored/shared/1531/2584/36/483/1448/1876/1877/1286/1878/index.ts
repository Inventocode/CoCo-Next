var r = require("../../../../../990/1087/index");
var i = require("./1879");
var o = require("./1880");
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