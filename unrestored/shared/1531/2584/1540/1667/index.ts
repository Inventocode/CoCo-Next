var r = require("../1623/272");
var o = require("../1736/194");
var i = require("./818");
var a = require("./939");
var s = require("../1740/422");
var c = require("../1623/300").f;
var l = require("./631/index").f;
var u = require("../1683/1073");
var d = require("../1745/310");
var p = require("../1668/944");
var f = require("../1683/1074");
var h = require("../1745/398/index");
var m = require("../1736/167");
var g = require("../1745/332");
var _ = require("../1745/423/index").enforce;
var v = require("./751");
var b = require("../1742/247/index");
var y = require("./1242");
var E = require("./1243");
var O = b("match");
var w = o.RegExp;
var C = w.prototype;
var T = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var S = /a/g;
var I = /a/g;
var A = new w(S) !== S;
var j = f.UNSUPPORTED_Y;
var N = r && (!A || j || y || E || m(function () {
  I[O] = false;
  return w(S) != S || w(I) == I || "/a/i" != w(S, "i");
}));
if (i("RegExp", N)) {
  for (var R = function (e, t) {
      var n;
      var r;
      var o;
      var i;
      var c;
      var l;
      var f = this instanceof R;
      var h = u(e);
      var m = undefined === t;
      var v = [];
      var b = e;
      if (!f && h && m && e.constructor === R) {
        return e;
      }
      if (h || e instanceof R) {
        e = e.source;
        if (m) {
          t = "flags" in b ? b.flags : p.call(b);
        }
      }
      e = undefined === e ? "" : d(e);
      t = undefined === t ? "" : d(t);
      b = e;
      if (y && "dotAll" in S && (r = !!t && t.indexOf("s") > -1)) {
        t = t.replace(/s/g, "");
      }
      n = t;
      if (j && "sticky" in S && (o = !!t && t.indexOf("y") > -1)) {
        t = t.replace(/y/g, "");
      }
      if (E) {
        e = (i = function (e) {
          for (var t, n = e.length, r = 0, o = "", i = [], a = {}, s = false, c = false, l = 0, u = ""; r <= n; r++) {
            if ("\\" === (t = e.charAt(r))) {
              t += e.charAt(++r);
            } else if ("]" === t) {
              s = false;
            } else if (!s) {
              switch (true) {
                case "[" === t:
                  s = true;
                  break;
                case "(" === t:
                  if (T.test(e.slice(r + 1))) {
                    r += 2;
                    c = true;
                  }
                  o += t;
                  l++;
                  continue;
                case ">" === t && c:
                  if ("" === u || g(a, u)) {
                    throw new SyntaxError("Invalid capture group name");
                  }
                  a[u] = true;
                  i.push([u, l]);
                  c = false;
                  u = "";
                  continue;
              }
            }
            if (c) {
              u += t;
            } else {
              o += t;
            }
          }
          return [o, i];
        }(e))[0];
        v = i[1];
      }
      c = a(w(e, t), f ? this : C, R);
      if (r || o || v.length) {
        l = _(c);
        if (r) {
          l.dotAll = true;
          l.raw = R(function (e) {
            for (var t, n = e.length, r = 0, o = "", i = false; r <= n; r++) {
              if ("\\" !== (t = e.charAt(r))) {
                if (i || "." !== t) {
                  if ("[" === t) {
                    i = true;
                  } else {
                    if ("]" === t) {
                      i = false;
                    }
                  }
                  o += t;
                } else {
                  o += "[\\s\\S]";
                }
              } else {
                o += t + e.charAt(++r);
              }
            }
            return o;
          }(e), n);
        }
        if (o) {
          l.sticky = true;
        }
        if (v.length) {
          l.groups = v;
        }
      }
      if (e !== b) {
        try {
          s(c, "source", "" === b ? "(?:)" : b);
        } catch (O) {}
      }
      return c;
    }, k = function (e) {
      if (!(e in R)) {
        c(R, e, {
          configurable: true,
          get: function () {
            return w[e];
          },
          set: function (t) {
            w[e] = t;
          }
        });
      }
    }, x = l(w), D = 0; x.length > D;) {
    k(x[D++]);
  }
  C.constructor = R;
  R.prototype = C;
  h(o, "RegExp", R);
}
v("RegExp");