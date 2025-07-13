var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
var r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
exports.KANJI = new RegExp(n, "g");
exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
exports.BYTE = new RegExp(r, "g");
exports.NUMERIC = new RegExp("[0-9]+", "g");
exports.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
var i = new RegExp("^" + n + "$");
var o = new RegExp("^[0-9]+$");
var a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
exports.testKanji = function (e) {
  return i.test(e);
};
exports.testNumeric = function (e) {
  return o.test(e);
};
exports.testAlphanumeric = function (e) {
  return a.test(e);
};