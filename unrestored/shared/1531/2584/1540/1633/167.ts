module.exports = function (e) {
  try {
    return !!e();
  } catch (t) {
    return !0;
  }
};