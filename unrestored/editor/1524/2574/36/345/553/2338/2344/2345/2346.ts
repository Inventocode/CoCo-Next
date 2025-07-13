import * as r from "../../761";
var i = r.alloc(512);
var o = r.alloc(256);
!function () {
  for (var e = 1, t = 0; t < 255; t++) {
    i[t] = e;
    o[e] = t;
    if (256 & (e <<= 1)) {
      e ^= 285;
    }
  }
  for (t = 255; t < 512; t++) {
    i[t] = i[t - 255];
  }
}();
exports.log = function (e) {
  if (e < 1) {
    throw new Error("log(" + e + ")");
  }
  return o[e];
};
exports.exp = function (e) {
  return i[e];
};
exports.mul = function (e, t) {
  return 0 === e || 0 === t ? 0 : i[o[e] + o[t]];
};