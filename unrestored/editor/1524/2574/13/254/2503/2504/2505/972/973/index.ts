var r = require("./2416");
var i = require("./2417");
var o = require("./2418");
var a = require("./2419");
var s = require("./2420/index");
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