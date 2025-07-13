var n = Object.prototype.toString;
module.exports = function (e) {
  return n.call(e);
};