var n = Function.prototype.toString;
module.exports = function (e) {
  if (null != e) {
    try {
      return n.call(e);
    } catch (t) {}
    try {
      return e + "";
    } catch (t) {}
  }
  return "";
};