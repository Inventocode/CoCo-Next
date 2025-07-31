var r = require("./1789/index");
var i = require("./1796");
var o = require("./1798");
var a = require("./1799");
var s = require("./1800/index");
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