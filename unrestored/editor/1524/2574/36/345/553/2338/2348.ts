import * as r from "./716";
var i = r.getBCHDigit(1335);
exports.getEncodedBits = function (e, t) {
  for (var n = e.bit << 3 | t, o = n << 10; r.getBCHDigit(o) - i >= 0;) {
    o ^= 1335 << r.getBCHDigit(o) - i;
  }
  return 21522 ^ (n << 10 | o);
};