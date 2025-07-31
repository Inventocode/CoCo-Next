var r = require("../../../../../989/1086/index");
var i = require("./1872");
var o = require("./1873");
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