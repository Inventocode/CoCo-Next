module.exports = function (e) {
  try {
    return {
      error: false,
      value: e()
    };
  } catch (t) {
    return {
      error: true,
      value: t
    };
  }
};