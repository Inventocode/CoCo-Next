var r = require("../973/index");
var i = require("./1149");
var o = require("./1150/index");
module.exports = function (e, t) {
  var n = this.__data__;
  if (n instanceof r) {
    var a = n.__data__;
    if (!i || a.length < 199) {
      a.push([e, t]);
      this.size = ++n.size;
      return this;
    }
    n = this.__data__ = new o(a);
  }
  n.set(e, t);
  this.size = n.size;
  return this;
};