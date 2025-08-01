var r = require("./716").getSymbolSize;
exports.getPositions = function (e) {
  var t = r(e);
  return [[0, 0], [t - 7, 0], [0, t - 7]];
};