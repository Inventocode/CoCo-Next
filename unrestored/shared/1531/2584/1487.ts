var r;
!function (o) {
  "use strict";

  function i(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
  }
  function a(e, t, n, r, o, a) {
    return i((s = i(i(t, e), i(r, a))) << (c = o) | s >>> 32 - c, n);
    var s;
    var c;
  }
  function s(e, t, n, r, o, i, s) {
    return a(t & n | ~t & r, e, t, o, i, s);
  }
  function c(e, t, n, r, o, i, s) {
    return a(t & r | n & ~r, e, t, o, i, s);
  }
  function l(e, t, n, r, o, i, s) {
    return a(t ^ n ^ r, e, t, o, i, s);
  }
  function u(e, t, n, r, o, i, s) {
    return a(n ^ (t | ~r), e, t, o, i, s);
  }
  function d(e, t) {
    var n;
    var r;
    var o;
    var a;
    var d;
    e[t >> 5] |= 128 << t % 32;
    e[14 + (t + 64 >>> 9 << 4)] = t;
    var p = 1732584193;
    var f = -271733879;
    var h = -1732584194;
    var m = 271733878;
    for (n = 0; n < e.length; n += 16) {
      r = p;
      o = f;
      a = h;
      d = m;
      p = s(p, f, h, m, e[n], 7, -680876936);
      m = s(m, p, f, h, e[n + 1], 12, -389564586);
      h = s(h, m, p, f, e[n + 2], 17, 606105819);
      f = s(f, h, m, p, e[n + 3], 22, -1044525330);
      p = s(p, f, h, m, e[n + 4], 7, -176418897);
      m = s(m, p, f, h, e[n + 5], 12, 1200080426);
      h = s(h, m, p, f, e[n + 6], 17, -1473231341);
      f = s(f, h, m, p, e[n + 7], 22, -45705983);
      p = s(p, f, h, m, e[n + 8], 7, 1770035416);
      m = s(m, p, f, h, e[n + 9], 12, -1958414417);
      h = s(h, m, p, f, e[n + 10], 17, -42063);
      f = s(f, h, m, p, e[n + 11], 22, -1990404162);
      p = s(p, f, h, m, e[n + 12], 7, 1804603682);
      m = s(m, p, f, h, e[n + 13], 12, -40341101);
      h = s(h, m, p, f, e[n + 14], 17, -1502002290);
      p = c(p, f = s(f, h, m, p, e[n + 15], 22, 1236535329), h, m, e[n + 1], 5, -165796510);
      m = c(m, p, f, h, e[n + 6], 9, -1069501632);
      h = c(h, m, p, f, e[n + 11], 14, 643717713);
      f = c(f, h, m, p, e[n], 20, -373897302);
      p = c(p, f, h, m, e[n + 5], 5, -701558691);
      m = c(m, p, f, h, e[n + 10], 9, 38016083);
      h = c(h, m, p, f, e[n + 15], 14, -660478335);
      f = c(f, h, m, p, e[n + 4], 20, -405537848);
      p = c(p, f, h, m, e[n + 9], 5, 568446438);
      m = c(m, p, f, h, e[n + 14], 9, -1019803690);
      h = c(h, m, p, f, e[n + 3], 14, -187363961);
      f = c(f, h, m, p, e[n + 8], 20, 1163531501);
      p = c(p, f, h, m, e[n + 13], 5, -1444681467);
      m = c(m, p, f, h, e[n + 2], 9, -51403784);
      h = c(h, m, p, f, e[n + 7], 14, 1735328473);
      p = l(p, f = c(f, h, m, p, e[n + 12], 20, -1926607734), h, m, e[n + 5], 4, -378558);
      m = l(m, p, f, h, e[n + 8], 11, -2022574463);
      h = l(h, m, p, f, e[n + 11], 16, 1839030562);
      f = l(f, h, m, p, e[n + 14], 23, -35309556);
      p = l(p, f, h, m, e[n + 1], 4, -1530992060);
      m = l(m, p, f, h, e[n + 4], 11, 1272893353);
      h = l(h, m, p, f, e[n + 7], 16, -155497632);
      f = l(f, h, m, p, e[n + 10], 23, -1094730640);
      p = l(p, f, h, m, e[n + 13], 4, 681279174);
      m = l(m, p, f, h, e[n], 11, -358537222);
      h = l(h, m, p, f, e[n + 3], 16, -722521979);
      f = l(f, h, m, p, e[n + 6], 23, 76029189);
      p = l(p, f, h, m, e[n + 9], 4, -640364487);
      m = l(m, p, f, h, e[n + 12], 11, -421815835);
      h = l(h, m, p, f, e[n + 15], 16, 530742520);
      p = u(p, f = l(f, h, m, p, e[n + 2], 23, -995338651), h, m, e[n], 6, -198630844);
      m = u(m, p, f, h, e[n + 7], 10, 1126891415);
      h = u(h, m, p, f, e[n + 14], 15, -1416354905);
      f = u(f, h, m, p, e[n + 5], 21, -57434055);
      p = u(p, f, h, m, e[n + 12], 6, 1700485571);
      m = u(m, p, f, h, e[n + 3], 10, -1894986606);
      h = u(h, m, p, f, e[n + 10], 15, -1051523);
      f = u(f, h, m, p, e[n + 1], 21, -2054922799);
      p = u(p, f, h, m, e[n + 8], 6, 1873313359);
      m = u(m, p, f, h, e[n + 15], 10, -30611744);
      h = u(h, m, p, f, e[n + 6], 15, -1560198380);
      f = u(f, h, m, p, e[n + 13], 21, 1309151649);
      p = u(p, f, h, m, e[n + 4], 6, -145523070);
      m = u(m, p, f, h, e[n + 11], 10, -1120210379);
      h = u(h, m, p, f, e[n + 2], 15, 718787259);
      f = u(f, h, m, p, e[n + 9], 21, -343485551);
      p = i(p, r);
      f = i(f, o);
      h = i(h, a);
      m = i(m, d);
    }
    return [p, f, h, m];
  }
  function p(e) {
    var t;
    var n = "";
    var r = 32 * e.length;
    for (t = 0; t < r; t += 8) {
      n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
    }
    return n;
  }
  function f(e) {
    var t;
    var n = [];
    for (n[(e.length >> 2) - 1] = undefined, t = 0; t < n.length; t += 1) {
      n[t] = 0;
    }
    var r = 8 * e.length;
    for (t = 0; t < r; t += 8) {
      n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
    }
    return n;
  }
  function h(e) {
    var t;
    var n;
    var r = "";
    for (n = 0; n < e.length; n += 1) {
      t = e.charCodeAt(n);
      r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
    }
    return r;
  }
  function m(e) {
    return unescape(encodeURIComponent(e));
  }
  function g(e) {
    return function (e) {
      return p(d(f(e), 8 * e.length));
    }(m(e));
  }
  function _(e, t) {
    return function (e, t) {
      var n;
      var r;
      var o = f(e);
      var i = [];
      var a = [];
      for (i[15] = a[15] = undefined, o.length > 16 && (o = d(o, 8 * e.length)), n = 0; n < 16; n += 1) {
        i[n] = 909522486 ^ o[n];
        a[n] = 1549556828 ^ o[n];
      }
      r = d(i.concat(f(t)), 512 + 8 * t.length);
      return p(d(a.concat(r), 640));
    }(m(e), m(t));
  }
  function v(e, t, n) {
    return t ? n ? _(t, e) : h(_(t, e)) : n ? g(e) : h(g(e));
  }
  if (!(undefined === (r = function () {
    return v;
  }.call(exports, require, exports, module)))) {
    module.exports = r;
  }
}();