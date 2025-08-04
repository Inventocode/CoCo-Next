var r = require("./977/index");
module.exports = function (e, t) {
  var n = r(this, e);
  var i = n.size;
  n.set(e, t);
  this.size += n.size == i ? 0 : 1;
  return this;
};