module.exports = function (e) {
  return "object" === typeof e ? null !== e : "function" === typeof e;
};