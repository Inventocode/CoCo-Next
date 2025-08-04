var n;
var r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
exports.getSymbolSize = function (e) {
  if (!e) {
    throw new Error("\"version\" cannot be null or undefined");
  }
  if (e < 1 || e > 40) {
    throw new Error("\"version\" should be in range from 1 to 40");
  }
  return 4 * e + 17;
};
exports.getSymbolTotalCodewords = function (e) {
  return r[e];
};
exports.getBCHDigit = function (e) {
  for (var t = 0; 0 !== e;) {
    t++;
    e >>>= 1;
  }
  return t;
};
exports.setToSJISFunction = function (e) {
  if ("function" !== typeof e) {
    throw new Error("\"toSJISFunc\" is not a valid function.");
  }
  n = e;
};
exports.isKanjiModeEnabled = function () {
  return "undefined" !== typeof n;
};
exports.toSJIS = function (e) {
  return n(e);
};