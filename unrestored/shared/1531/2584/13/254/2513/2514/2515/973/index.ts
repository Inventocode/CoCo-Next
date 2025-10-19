/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：973
 */

var r = require("./974/index");
var i = require("./2431");
var o = require("./2432");
var a = require("./2433");
var s = require("./2434");
var c = require("./2435/index");
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