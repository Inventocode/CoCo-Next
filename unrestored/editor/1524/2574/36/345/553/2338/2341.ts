var r = require("./716").getSymbolSize;
exports.getRowColCoords = function (e) {
  if (1 === e) {
    return [];
  }
  for (var t = Math.floor(e / 7) + 2, n = r(e), i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), o = [n - 7], a = 1; a < t - 1; a++) {
    o[a] = o[a - 1] - i;
  }
  o.push(6);
  return o.reverse();
};
exports.getPositions = function (e) {
  for (var n = [], r = t.getRowColCoords(e), i = r.length, o = 0; o < i; o++) {
    for (var a = 0; a < i; a++) {
      if (!(0 === o && 0 === a || 0 === o && a === i - 1 || o === i - 1 && 0 === a)) {
        n.push([r[o], r[a]]);
      }
    }
  }
  return n;
};