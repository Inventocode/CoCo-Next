!function (e) {
  "use strict";

  exports.encode = function (t) {
    var n;
    var r = new Uint8Array(t);
    var i = r.length;
    var o = "";
    for (n = 0; n < i; n += 3) {
      o += e[r[n] >> 2];
      o += e[(3 & r[n]) << 4 | r[n + 1] >> 4];
      o += e[(15 & r[n + 1]) << 2 | r[n + 2] >> 6];
      o += e[63 & r[n + 2]];
    }
    if (i % 3 === 2) {
      o = o.substring(0, o.length - 1) + "=";
    } else {
      if (i % 3 === 1) {
        o = o.substring(0, o.length - 2) + "==";
      }
    }
    return o;
  };
  exports.decode = function (t) {
    var n;
    var r;
    var i;
    var o;
    var a;
    var s = .75 * t.length;
    var c = t.length;
    var u = 0;
    if ("=" === t[t.length - 1]) {
      s--;
      if ("=" === t[t.length - 2]) {
        s--;
      }
    }
    var l = new ArrayBuffer(s);
    var f = new Uint8Array(l);
    for (n = 0; n < c; n += 4) {
      r = e.indexOf(t[n]);
      i = e.indexOf(t[n + 1]);
      o = e.indexOf(t[n + 2]);
      a = e.indexOf(t[n + 3]);
      f[u++] = r << 2 | i >> 4;
      f[u++] = (15 & i) << 4 | o >> 2;
      f[u++] = (3 & o) << 6 | 63 & a;
    }
    return l;
  };
}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");