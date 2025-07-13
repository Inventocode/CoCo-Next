module.exports = function (e) {
  return -1 !== Function.toString.call(e).indexOf("[native code]");
};