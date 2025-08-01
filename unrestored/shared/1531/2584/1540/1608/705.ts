var n = {}.toString;
module.exports = function (e) {
  return n.call(e).slice(8, -1);
};