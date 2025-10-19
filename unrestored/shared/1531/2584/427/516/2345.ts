/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2345
 */

var r;
var i;
var o = require("./2346/1370");
var a = require("./2346/1371");
var s = 0;
var c = 0;
module.exports = function (e, t, n) {
  var u = t && n || 0;
  var l = t || [];
  var f = (e = e || {}).node || r;
  var d = undefined !== e.clockseq ? e.clockseq : i;
  if (null == f || null == d) {
    var h = o();
    if (null == f) {
      f = r = [1 | h[0], h[1], h[2], h[3], h[4], h[5]];
    }
    if (null == d) {
      d = i = 16383 & (h[6] << 8 | h[7]);
    }
  }
  var p = undefined !== e.msecs ? e.msecs : new Date().getTime();
  var _ = undefined !== e.nsecs ? e.nsecs : c + 1;
  var A = p - s + (_ - c) / 1e4;
  if (A < 0 && undefined === e.clockseq) {
    d = d + 1 & 16383;
  }
  if ((A < 0 || p > s) && undefined === e.nsecs) {
    _ = 0;
  }
  if (_ >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  s = p;
  c = _;
  i = d;
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
  l[u++] = d >>> 8 | 128;
  l[u++] = 255 & d;
  for (var m = 0; m < 6; ++m) {
    l[u + m] = f[m];
  }
  return t || a(l);
};