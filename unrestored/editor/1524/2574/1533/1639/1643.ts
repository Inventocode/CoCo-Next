module.exports = function (e) {
  try {
    return {
      error: !1,
      value: e()
    };
  } catch (t) {
    return {
      error: !0,
      value: t
    };
  }
};