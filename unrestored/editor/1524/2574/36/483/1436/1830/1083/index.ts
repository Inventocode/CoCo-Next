var r = require("./952/index");
var i = require("./1778");
var o = require("./1779");
var a = require("./1780");
var s = require("./1781");
var c = require("./1782");
function u(e) {
  var t = this.__data__ = new r(e);
  this.size = t.size;
}
u.prototype.clear = i;
u.prototype.delete = o;
u.prototype.get = a;
u.prototype.has = s;
u.prototype.set = c;
module.exports = u;