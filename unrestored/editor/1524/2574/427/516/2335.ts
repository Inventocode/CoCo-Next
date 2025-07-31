var r;
var i;
var o = require("./2336/1363");
var a = require("./2336/1364");
var s = 0;
var c = 0;
module.exports = function (e, t, n) {
  var u = t && n || 0;
  var l = t || [];
  var f = (e = e || {}).node || r;
  var h = void 0 !== e.clockseq ? e.clockseq : i;
  if (null == f || null == h) {
    var d = o();
    if (null == f) {
      f = r = [1 | d[0], d[1], d[2], d[3], d[4], d[5]];
    }
    if (null == h) {
      h = i = 16383 & (d[6] << 8 | d[7]);
    }
  }
  var p = void 0 !== e.msecs ? e.msecs : new Date().getTime();
  var _ = void 0 !== e.nsecs ? e.nsecs : c + 1;
  var A = p - s + (_ - c) / 1e4;
  if (A < 0 && void 0 === e.clockseq && (h = h + 1 & 16383), (A < 0 || p > s) && void 0 === e.nsecs && (_ = 0), _ >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  s = p;
  c = _;
  i = h;
  var g = (1e4 * (268435455 & (p += 122192928e5)) + _) % 4294967296;
  l[u++] = g >>> 24 & 255;
  l[u++] = g >>> 16 & 255;
  l[u++] = g >>> 8 & 255;
  l[u++] = 255 & g;
  var v = p / 4294967296 * 1e4 & 268435455;
  l[u++] = v >>> 8 & 255;
  l[u++] = 255 & v;
  l[u++] = v >>> 24 & 15 | 16;
  l[u++] = v >>> 16 & 255;
  l[u++] = h >>> 8 | 128;
  l[u++] = 255 & h;
  for (var m = 0; m < 6; ++m) {
    l[u + m] = f[m];
  }
  return t || a(l);
};