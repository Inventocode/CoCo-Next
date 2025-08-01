var r = require("../../../../../../../../../../254/2513/2514/2515/973/2435/1153/index");
var i = require("./2454");
var o = require("./2455");
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