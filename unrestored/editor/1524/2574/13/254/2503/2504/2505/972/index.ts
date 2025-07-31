var r = require("./973/index");
var i = require("./2421");
var o = require("./2422");
var a = require("./2423");
var s = require("./2424");
var c = require("./2425/index");
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