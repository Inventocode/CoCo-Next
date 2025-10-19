/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：126
 */

"use strict";

var n = require("./124");
var o = require("./166");
var i = require("./226");
var a = function () {
  function t() {}
  t.castAsNonUtf8Char = function (t, e) {
    if (undefined === e) {
      e = null;
    }
    var r = e ? e.getName() : this.ISO88591;
    return i.a.decode(new Uint8Array([t]), r);
  };
  t.guessEncoding = function (e, r) {
    if (null !== r && undefined !== r && undefined !== r.get(n.a.CHARACTER_SET)) {
      return r.get(n.a.CHARACTER_SET).toString();
    }
    for (var o = e.length, i = true, a = true, u = true, s = 0, c = 0, f = 0, h = 0, l = 0, d = 0, p = 0, g = 0, y = 0, w = 0, v = 0, _ = e.length > 3 && 239 === e[0] && 187 === e[1] && 191 === e[2], m = 0; m < o && (i || a || u); m++) {
      var A = 255 & e[m];
      if (u) {
        if (s > 0) {
          if (0 === (128 & A)) {
            u = false;
          } else {
            s--;
          }
        } else {
          if (0 !== (128 & A)) {
            if (0 === (64 & A)) {
              u = false;
            } else {
              s++;
              if (0 === (32 & A)) {
                c++;
              } else {
                s++;
                if (0 === (16 & A)) {
                  f++;
                } else {
                  s++;
                  if (0 === (8 & A)) {
                    h++;
                  } else {
                    u = false;
                  }
                }
              }
            }
          }
        }
      }
      if (i) {
        if (A > 127 && A < 160) {
          i = false;
        } else {
          if (A > 159 && (A < 192 || 215 === A || 247 === A)) {
            v++;
          }
        }
      }
      if (a) {
        if (l > 0) {
          if (A < 64 || 127 === A || A > 252) {
            a = false;
          } else {
            l--;
          }
        } else {
          if (128 === A || 160 === A || A > 239) {
            a = false;
          } else {
            if (A > 160 && A < 224) {
              d++;
              g = 0;
              if (++p > y) {
                y = p;
              }
            } else {
              if (A > 127) {
                l++;
                p = 0;
                if (++g > w) {
                  w = g;
                }
              } else {
                p = 0;
                g = 0;
              }
            }
          }
        }
      }
    }
    if (u && s > 0) {
      u = false;
    }
    if (a && l > 0) {
      a = false;
    }
    return u && (_ || c + f + h > 0) ? t.UTF8 : a && (t.ASSUME_SHIFT_JIS || y >= 3 || w >= 3) ? t.SHIFT_JIS : i && a ? 2 === y && 2 === d || 10 * v >= o ? t.SHIFT_JIS : t.ISO88591 : i ? t.ISO88591 : a ? t.SHIFT_JIS : u ? t.UTF8 : t.PLATFORM_DEFAULT_ENCODING;
  };
  t.format = function (t) {
    for (var e = [], r = 1; r < arguments.length; r++) {
      e[r - 1] = arguments[r];
    }
    var n = -1;
    function o(t, r, o, i, a, u) {
      if ("%%" === t) {
        return "%";
      }
      if (undefined !== e[++n]) {
        t = i ? parseInt(i.substr(1)) : undefined;
        var s;
        var c = a ? parseInt(a.substr(1)) : undefined;
        switch (u) {
          case "s":
            s = e[n];
            break;
          case "c":
            s = e[n][0];
            break;
          case "f":
            s = parseFloat(e[n]).toFixed(t);
            break;
          case "p":
            s = parseFloat(e[n]).toPrecision(t);
            break;
          case "e":
            s = parseFloat(e[n]).toExponential(t);
            break;
          case "x":
            s = parseInt(e[n]).toString(c || 16);
            break;
          case "d":
            s = parseFloat(parseInt(e[n], c || 10).toPrecision(t)).toFixed(0);
        }
        s = "object" === typeof s ? JSON.stringify(s) : (+s).toString(c);
        for (var f = parseInt(o), h = o && o[0] + "" === "0" ? "0" : " "; s.length < f;) {
          s = undefined !== r ? s + h : h + s;
        }
        return s;
      }
    }
    var i = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
    return t.replace(i, o);
  };
  t.getBytes = function (t, e) {
    return i.a.encode(t, e);
  };
  t.getCharCode = function (t, e) {
    if (undefined === e) {
      e = 0;
    }
    return t.charCodeAt(e);
  };
  t.getCharAt = function (t) {
    return String.fromCharCode(t);
  };
  t.SHIFT_JIS = o.a.SJIS.getName();
  t.GB2312 = "GB2312";
  t.ISO88591 = o.a.ISO8859_1.getName();
  t.EUC_JP = "EUC_JP";
  t.UTF8 = o.a.UTF8.getName();
  t.PLATFORM_DEFAULT_ENCODING = t.UTF8;
  t.ASSUME_SHIFT_JIS = false;
  return t;
}();
exports.a = a;