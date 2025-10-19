/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1746
 */

"use strict";

var r = /[^\0-\u007E]/;
var o = /[.\u3002\uFF0E\uFF61]/g;
var i = "Overflow: input needs wider integers to process";
var a = Math.floor;
var s = String.fromCharCode;
var c = function (e) {
  return e + 22 + 75 * (e < 26);
};
var l = function (e, t, n) {
  var r = 0;
  for (e = n ? a(e / 700) : e >> 1, e += a(e / t); e > 455; r += 36) {
    e = a(e / 35);
  }
  return a(r + 36 * e / (e + 38));
};
var u = function (e) {
  var t;
  var n;
  var r = [];
  var o = (e = function (e) {
    for (var t = [], n = 0, r = e.length; n < r;) {
      var o = e.charCodeAt(n++);
      if (o >= 55296 && o <= 56319 && n < r) {
        var i = e.charCodeAt(n++);
        if (56320 == (64512 & i)) {
          t.push(((1023 & o) << 10) + (1023 & i) + 65536);
        } else {
          t.push(o);
          n--;
        }
      } else {
        t.push(o);
      }
    }
    return t;
  }(e)).length;
  var u = 128;
  var d = 0;
  var p = 72;
  for (t = 0; t < e.length; t++) {
    if ((n = e[t]) < 128) {
      r.push(s(n));
    }
  }
  var f = r.length;
  var h = f;
  for (f && r.push("-"); h < o;) {
    var m = 2147483647;
    for (t = 0; t < e.length; t++) {
      if ((n = e[t]) >= u && n < m) {
        m = n;
      }
    }
    var g = h + 1;
    if (m - u > a((2147483647 - d) / g)) {
      throw RangeError(i);
    }
    for (d += (m - u) * g, u = m, t = 0; t < e.length; t++) {
      if ((n = e[t]) < u && ++d > 2147483647) {
        throw RangeError(i);
      }
      if (n == u) {
        for (var _ = d, v = 36;; v += 36) {
          var b = v <= p ? 1 : v >= p + 26 ? 26 : v - p;
          if (_ < b) {
            break;
          }
          var y = _ - b;
          var E = 36 - b;
          r.push(s(c(b + y % E)));
          _ = a(y / E);
        }
        r.push(s(c(_)));
        p = l(d, g, h == f);
        d = 0;
        ++h;
      }
    }
    ++d;
    ++u;
  }
  return r.join("");
};
module.exports = function (e) {
  var t;
  var n;
  var i = [];
  var a = e.toLowerCase().replace(o, ".").split(".");
  for (t = 0; t < a.length; t++) {
    n = a[t];
    i.push(r.test(n) ? "xn--" + u(n) : n);
  }
  return i.join(".");
};