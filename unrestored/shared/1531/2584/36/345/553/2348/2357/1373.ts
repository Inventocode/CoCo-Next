exports.isValid = function (e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};