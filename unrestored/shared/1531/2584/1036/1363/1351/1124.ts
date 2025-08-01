"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.uniToStrPos = exports.strPosToUni = void 0;
exports.strPosToUni = function (e) {
  for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.length, n = 0, r = 0; r < t; r++) {
    var i = e.charCodeAt(r);
    if (i >= 55296 && i <= 57343) {
      n++;
      r++;
    }
  }
  if (r !== t) {
    throw Error("Invalid offset - splits unicode bytes");
  }
  return r - n;
};
exports.uniToStrPos = function (e, t) {
  for (var n = 0; t > 0; t--) {
    var r = e.charCodeAt(n);
    n += r >= 55296 && r <= 57343 ? 2 : 1;
  }
  return n;
};