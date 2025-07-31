var r = require("./3036");
exports.encode = function (e) {
  var t;
  var n = "";
  var i = function (e) {
    return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
  }(e);
  do {
    t = 31 & i;
    if ((i >>>= 5) > 0) {
      t |= 32;
    }
    n += r.encode(t);
  } while (i > 0);
  return n;
};
exports.decode = function (e, t, n) {
  var i;
  var a;
  var s = e.length;
  var o = 0;
  var l = 0;
  do {
    if (t >= s) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }
    if (-1 === (a = r.decode(e.charCodeAt(t++)))) {
      throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
    }
    i = !!(32 & a);
    o += (a &= 31) << l;
    l += 5;
  } while (i);
  n.value = function (e) {
    var t = e >> 1;
    return 1 === (1 & e) ? -t : t;
  }(o);
  n.rest = t;
};