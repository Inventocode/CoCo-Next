var n = {}.toString;
module.exports = Array.isArray || function (e) {
  return "[object Array]" == n.call(e);
};