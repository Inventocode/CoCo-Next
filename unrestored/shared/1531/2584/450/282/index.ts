/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：282
 */

(function (r, i, o) {
  (function (t) {
    t.version = "0.17.1";
    var a = 1200;
    var s = 1252;
    if ("undefined" === typeof cptable) {
      if ("undefined" !== typeof r) {
        r.cptable = require("./1259");
      } else {
        if ("undefined" !== typeof window) {
          window.cptable = require("./1259");
        }
      }
    }
    for (var c = [874, 932, 936, 949, 950], u = 0; u <= 8; ++u) {
      c.push(1250 + u);
    }
    var l = {
      0: 1252,
      1: 65001,
      2: 65001,
      77: 1e4,
      128: 932,
      129: 949,
      130: 1361,
      134: 936,
      136: 950,
      161: 1253,
      162: 1254,
      163: 1258,
      177: 1255,
      178: 1256,
      186: 1257,
      204: 1251,
      222: 874,
      238: 1250,
      255: 1252,
      69: 6969
    };
    var f = function (e) {
      if (-1 != c.indexOf(e)) {
        s = l[0] = e;
      }
    };
    var d = function (e) {
      a = e;
      f(e);
    };
    function h() {
      d(1200);
      f(1252);
    }
    function p(e) {
      for (var t = [], n = 0, r = e.length; n < r; ++n) {
        t[n] = e.charCodeAt(n);
      }
      return t;
    }
    var _ = function (e) {
      var t = e.charCodeAt(0);
      var n = e.charCodeAt(1);
      return 255 == t && 254 == n ? function (e) {
        for (var t = [], n = 0; n < e.length >> 1; ++n) {
          t[n] = String.fromCharCode(e.charCodeAt(2 * n) + (e.charCodeAt(2 * n + 1) << 8));
        }
        return t.join("");
      }(e.slice(2)) : 254 == t && 255 == n ? function (e) {
        for (var t = [], n = 0; n < e.length >> 1; ++n) {
          t[n] = String.fromCharCode(e.charCodeAt(2 * n + 1) + (e.charCodeAt(2 * n) << 8));
        }
        return t.join("");
      }(e.slice(2)) : 65279 == t ? e.slice(1) : e;
    };
    var A = function (e) {
      return String.fromCharCode(e);
    };
    var g = function (e) {
      return String.fromCharCode(e);
    };
    if ("undefined" !== typeof cptable) {
      d = function (e) {
        a = e;
        f(e);
      };
      _ = function (e) {
        return 255 === e.charCodeAt(0) && 254 === e.charCodeAt(1) ? cptable.utils.decode(1200, p(e.slice(2))) : e;
      };
      A = function (e) {
        return 1200 === a ? String.fromCharCode(e) : cptable.utils.decode(a, [255 & e, e >> 8])[0];
      };
      g = function (e) {
        return cptable.utils.decode(s, [e])[0];
      };
    }
    var v = function () {
      var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      return {
        encode: function (t) {
          for (var n = "", r = 0, i = 0, o = 0, a = 0, s = 0, c = 0, u = 0, l = 0; l < t.length;) {
            a = (r = t.charCodeAt(l++)) >> 2;
            s = (3 & r) << 4 | (i = t.charCodeAt(l++)) >> 4;
            c = (15 & i) << 2 | (o = t.charCodeAt(l++)) >> 6;
            u = 63 & o;
            if (isNaN(i)) {
              c = u = 64;
            } else {
              if (isNaN(o)) {
                u = 64;
              }
            }
            n += e.charAt(a) + e.charAt(s) + e.charAt(c) + e.charAt(u);
          }
          return n;
        },
        decode: function (t) {
          var n = "";
          var r = 0;
          var i = 0;
          var o = 0;
          var a = 0;
          var s = 0;
          var c = 0;
          t = t.replace(/[^\w\+\/\=]/g, "");
          for (var u = 0; u < t.length;) {
            r = e.indexOf(t.charAt(u++)) << 2 | (a = e.indexOf(t.charAt(u++))) >> 4;
            n += String.fromCharCode(r);
            i = (15 & a) << 4 | (s = e.indexOf(t.charAt(u++))) >> 2;
            if (64 !== s) {
              n += String.fromCharCode(i);
            }
            o = (3 & s) << 6 | (c = e.indexOf(t.charAt(u++)));
            if (64 !== c) {
              n += String.fromCharCode(o);
            }
          }
          return n;
        }
      };
    }();
    var m = "undefined" !== typeof i && "undefined" !== typeof o && "undefined" !== typeof o.versions && !!o.versions.node;
    var y = function () {};
    if ("undefined" !== typeof i) {
      var b = !i.from;
      if (!b) {
        try {
          i.from("foo", "utf8");
        } catch (_l) {
          b = true;
        }
      }
      y = b ? function (e, t) {
        return t ? new i(e, t) : new i(e);
      } : i.from.bind(i);
      if (!i.alloc) {
        i.alloc = function (e) {
          return new i(e);
        };
      }
      if (!i.allocUnsafe) {
        i.allocUnsafe = function (e) {
          return new i(e);
        };
      }
    }
    function w(e) {
      return m ? i.alloc(e) : new Array(e);
    }
    function E(e) {
      return m ? i.allocUnsafe(e) : new Array(e);
    }
    var x = function (e) {
      return m ? y(e, "binary") : e.split("").map(function (e) {
        return 255 & e.charCodeAt(0);
      });
    };
    function C(e) {
      if ("undefined" === typeof ArrayBuffer) {
        return x(e);
      }
      for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), r = 0; r != e.length; ++r) {
        n[r] = 255 & e.charCodeAt(r);
      }
      return t;
    }
    function O(e) {
      if (Array.isArray(e)) {
        return e.map(function (e) {
          return String.fromCharCode(e);
        }).join("");
      }
      for (var t = [], n = 0; n < e.length; ++n) {
        t[n] = String.fromCharCode(e[n]);
      }
      return t.join("");
    }
    function k(e) {
      if ("undefined" == typeof ArrayBuffer) {
        throw new Error("Unsupported");
      }
      if (e instanceof ArrayBuffer) {
        return k(new Uint8Array(e));
      }
      for (var t = new Array(e.length), n = 0; n < e.length; ++n) {
        t[n] = e[n];
      }
      return t;
    }
    var S = function (e) {
      return [].concat.apply([], e);
    };
    var T = /\u0000/g;
    var B = /[\u0001-\u0006]/g;
    var D = {};
    var I = function (e) {
      function t(e) {
        for (var t = "", n = e.length - 1; n >= 0;) {
          t += e.charAt(n--);
        }
        return t;
      }
      function n(e, t) {
        for (var n = ""; n.length < t;) {
          n += e;
        }
        return n;
      }
      function r(e, t) {
        var r = "" + e;
        return r.length >= t ? r : n("0", t - r.length) + r;
      }
      function i(e, t) {
        var r = "" + e;
        return r.length >= t ? r : n(" ", t - r.length) + r;
      }
      function o(e, t) {
        var r = "" + e;
        return r.length >= t ? r : r + n(" ", t - r.length);
      }
      e.version = "0.11.2";
      var a = Math.pow(2, 32);
      function s(e, t) {
        return e > a || e < -a ? function (e, t) {
          var r = "" + Math.round(e);
          return r.length >= t ? r : n("0", t - r.length) + r;
        }(e, t) : function (e, t) {
          var r = "" + e;
          return r.length >= t ? r : n("0", t - r.length) + r;
        }(Math.round(e), t);
      }
      function c(e, t) {
        t = t || 0;
        return e.length >= 7 + t && 103 === (32 | e.charCodeAt(t)) && 101 === (32 | e.charCodeAt(t + 1)) && 110 === (32 | e.charCodeAt(t + 2)) && 101 === (32 | e.charCodeAt(t + 3)) && 114 === (32 | e.charCodeAt(t + 4)) && 97 === (32 | e.charCodeAt(t + 5)) && 108 === (32 | e.charCodeAt(t + 6));
      }
      var u = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]];
      var l = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
      function f(e) {
        e[0] = "General";
        e[1] = "0";
        e[2] = "0.00";
        e[3] = "#,##0";
        e[4] = "#,##0.00";
        e[9] = "0%";
        e[10] = "0.00%";
        e[11] = "0.00E+00";
        e[12] = "# ?/?";
        e[13] = "# ??/??";
        e[14] = "m/d/yy";
        e[15] = "d-mmm-yy";
        e[16] = "d-mmm";
        e[17] = "mmm-yy";
        e[18] = "h:mm AM/PM";
        e[19] = "h:mm:ss AM/PM";
        e[20] = "h:mm";
        e[21] = "h:mm:ss";
        e[22] = "m/d/yy h:mm";
        e[37] = "#,##0 ;(#,##0)";
        e[38] = "#,##0 ;[Red](#,##0)";
        e[39] = "#,##0.00;(#,##0.00)";
        e[40] = "#,##0.00;[Red](#,##0.00)";
        e[45] = "mm:ss";
        e[46] = "[h]:mm:ss";
        e[47] = "mmss.0";
        e[48] = "##0.0E+0";
        e[49] = "@";
        e[56] = "\"上午/下午 \"hh\"時\"mm\"分\"ss\"秒 \"";
      }
      var d = {};
      f(d);
      var h = [];
      var p = 0;
      for (p = 5; p <= 8; ++p) {
        h[p] = 32 + p;
      }
      for (p = 23; p <= 26; ++p) {
        h[p] = 0;
      }
      for (p = 27; p <= 31; ++p) {
        h[p] = 14;
      }
      for (p = 50; p <= 58; ++p) {
        h[p] = 14;
      }
      for (p = 59; p <= 62; ++p) {
        h[p] = p - 58;
      }
      for (p = 67; p <= 68; ++p) {
        h[p] = p - 58;
      }
      for (p = 72; p <= 75; ++p) {
        h[p] = p - 58;
      }
      for (p = 67; p <= 68; ++p) {
        h[p] = p - 57;
      }
      for (p = 76; p <= 78; ++p) {
        h[p] = p - 56;
      }
      for (p = 79; p <= 81; ++p) {
        h[p] = p - 34;
      }
      var _ = [];
      function A(e, t, n) {
        for (var r = e < 0 ? -1 : 1, i = e * r, o = 0, a = 1, s = 0, c = 1, u = 0, l = 0, f = Math.floor(i); u < t && (s = (f = Math.floor(i)) * a + o, l = f * u + c, !(i - f < 5e-8));) {
          i = 1 / (i - f);
          o = a;
          a = s;
          c = u;
          u = l;
        }
        if (l > t) {
          if (u > t) {
            l = c;
            s = o;
          } else {
            l = u;
            s = a;
          }
        }
        if (!n) {
          return [0, r * s, l];
        }
        var d = Math.floor(r * s / l);
        return [d, r * s - d * l, l];
      }
      function g(e, t, n) {
        if (e > 2958465 || e < 0) {
          return null;
        }
        var r = 0 | e;
        var i = Math.floor(86400 * (e - r));
        var o = 0;
        var a = [];
        var s = {
          D: r,
          T: i,
          u: 86400 * (e - r) - i,
          y: 0,
          m: 0,
          d: 0,
          H: 0,
          M: 0,
          S: 0,
          q: 0
        };
        if (Math.abs(s.u) < 1e-6) {
          s.u = 0;
        }
        if (t && t.date1904) {
          r += 1462;
        }
        if (s.u > .9999) {
          s.u = 0;
          if (86400 == ++i) {
            s.T = i = 0;
            ++r;
            ++s.D;
          }
        }
        if (60 === r) {
          a = n ? [1317, 10, 29] : [1900, 2, 29];
          o = 3;
        } else if (0 === r) {
          a = n ? [1317, 8, 29] : [1900, 1, 0];
          o = 6;
        } else {
          if (r > 60) {
            --r;
          }
          var c = new Date(1900, 0, 1);
          c.setDate(c.getDate() + r - 1);
          a = [c.getFullYear(), c.getMonth() + 1, c.getDate()];
          o = c.getDay();
          if (r < 60) {
            o = (o + 6) % 7;
          }
          if (n) {
            o = function (e, t) {
              t[0] -= 581;
              var n = e.getDay();
              if (e < 60) {
                n = (n + 6) % 7;
              }
              return n;
            }(c, a);
          }
        }
        s.y = a[0];
        s.m = a[1];
        s.d = a[2];
        s.S = i % 60;
        i = Math.floor(i / 60);
        s.M = i % 60;
        i = Math.floor(i / 60);
        s.H = i;
        s.q = o;
        return s;
      }
      _[5] = _[63] = "\"$\"#,##0_);\\(\"$\"#,##0\\)";
      _[6] = _[64] = "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)";
      _[7] = _[65] = "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)";
      _[8] = _[66] = "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)";
      _[41] = "_(* #,##0_);_(* \\(#,##0\\);_(* \"-\"_);_(@_)";
      _[42] = "_(\"$\"* #,##0_);_(\"$\"* \\(#,##0\\);_(\"$\"* \"-\"_);_(@_)";
      _[43] = "_(* #,##0.00_);_(* \\(#,##0.00\\);_(* \"-\"??_);_(@_)";
      _[44] = "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)";
      e.parse_date_code = g;
      var v = new Date(1899, 11, 31, 0, 0, 0);
      var m = v.getTime();
      var y = new Date(1900, 2, 1, 0, 0, 0);
      function b(e, t) {
        var n = e.getTime();
        if (t) {
          n -= 1262304e5;
        } else {
          if (e >= y) {
            n += 864e5;
          }
        }
        return (n - (m + 6e4 * (e.getTimezoneOffset() - v.getTimezoneOffset()))) / 864e5;
      }
      e._general_int = function (e) {
        return e.toString(10);
      };
      var w = function () {
        var e = /(?:\.0*|(\.\d*[1-9])0+)$/;
        function t(t) {
          return -1 == t.indexOf(".") ? t : t.replace(e, "$1");
        }
        var n = /(?:\.0*|(\.\d*[1-9])0+)[Ee]/;
        var r = /(E[+-])(\d)$/;
        return function (e) {
          var i;
          var o = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
          i = o >= -4 && o <= -1 ? e.toPrecision(10 + o) : Math.abs(o) <= 9 ? function (e) {
            var n = e < 0 ? 12 : 11;
            var r = t(e.toFixed(12));
            return r.length <= n || (r = e.toPrecision(10)).length <= n ? r : e.toExponential(5);
          }(e) : 10 === o ? e.toFixed(10).substr(0, 12) : function (e) {
            var n = t(e.toFixed(11));
            return n.length > (e < 0 ? 12 : 11) || "0" === n || "-0" === n ? e.toPrecision(6) : n;
          }(e);
          return t(function (e) {
            return -1 == e.indexOf("E") ? e : e.replace(n, "$1E").replace(r, "$10$2");
          }(i.toUpperCase()));
        };
      }();
      function E(e, t) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "TRUE" : "FALSE";
          case "number":
            return (0 | e) === e ? e.toString(10) : w(e);
          case "undefined":
            return "";
          case "object":
            if (null == e) {
              return "";
            }
            if (e instanceof Date) {
              return R(14, b(e, t && t.date1904), t);
            }
        }
        throw new Error("unsupported value in General format: " + e);
      }
      function x(e, t, n, i) {
        var o;
        var a = "";
        var s = 0;
        var c = 0;
        var f = n.y;
        var d = 0;
        switch (e) {
          case 98:
            f = n.y + 543;
          case 121:
            switch (t.length) {
              case 1:
              case 2:
                o = f % 100;
                d = 2;
                break;
              default:
                o = f % 1e4;
                d = 4;
            }
            break;
          case 109:
            switch (t.length) {
              case 1:
              case 2:
                o = n.m;
                d = t.length;
                break;
              case 3:
                return l[n.m - 1][1];
              case 5:
                return l[n.m - 1][0];
              default:
                return l[n.m - 1][2];
            }
            break;
          case 100:
            switch (t.length) {
              case 1:
              case 2:
                o = n.d;
                d = t.length;
                break;
              case 3:
                return u[n.q][0];
              default:
                return u[n.q][1];
            }
            break;
          case 104:
            switch (t.length) {
              case 1:
              case 2:
                o = 1 + (n.H + 11) % 12;
                d = t.length;
                break;
              default:
                throw "bad hour format: " + t;
            }
            break;
          case 72:
            switch (t.length) {
              case 1:
              case 2:
                o = n.H;
                d = t.length;
                break;
              default:
                throw "bad hour format: " + t;
            }
            break;
          case 77:
            switch (t.length) {
              case 1:
              case 2:
                o = n.M;
                d = t.length;
                break;
              default:
                throw "bad minute format: " + t;
            }
            break;
          case 115:
            if ("s" != t && "ss" != t && ".0" != t && ".00" != t && ".000" != t) {
              throw "bad second format: " + t;
            }
            return 0 !== n.u || "s" != t && "ss" != t ? (c = i >= 2 ? 3 === i ? 1e3 : 100 : 1 === i ? 10 : 1, (s = Math.round(c * (n.S + n.u))) >= 60 * c && (s = 0), "s" === t ? 0 === s ? "0" : "" + s / c : (a = r(s, 2 + i), "ss" === t ? a.substr(0, 2) : "." + a.substr(2, t.length - 1))) : r(n.S, t.length);
          case 90:
            switch (t) {
              case "[h]":
              case "[hh]":
                o = 24 * n.D + n.H;
                break;
              case "[m]":
              case "[mm]":
                o = 60 * (24 * n.D + n.H) + n.M;
                break;
              case "[s]":
              case "[ss]":
                o = 60 * (60 * (24 * n.D + n.H) + n.M) + Math.round(n.S + n.u);
                break;
              default:
                throw "bad abstime format: " + t;
            }
            d = 3 === t.length ? 1 : 2;
            break;
          case 101:
            o = f;
            d = 1;
        }
        return d > 0 ? r(o, d) : "";
      }
      function C(e) {
        if (e.length <= 3) {
          return e;
        }
        for (var t = e.length % 3, n = e.substr(0, t); t != e.length; t += 3) {
          n += (n.length > 0 ? "," : "") + e.substr(t, 3);
        }
        return n;
      }
      e._general_num = w;
      e._general = E;
      var O = function () {
        var e = /%/g;
        var a = /# (\?+)( ?)\/( ?)(\d+)/;
        var c = /^#*0*\.([0#]+)/;
        var u = /\).*[0#]/;
        var l = /\(###\) ###\\?-####/;
        function f(e) {
          for (var t, n = "", r = 0; r != e.length; ++r) {
            switch (t = e.charCodeAt(r)) {
              case 35:
                break;
              case 63:
                n += " ";
                break;
              case 48:
                n += "0";
                break;
              default:
                n += String.fromCharCode(t);
            }
          }
          return n;
        }
        function d(e, t) {
          var n = Math.pow(10, t);
          return "" + Math.round(e * n) / n;
        }
        function h(e, t) {
          var n = e - Math.floor(e);
          var r = Math.pow(10, t);
          return t < ("" + Math.round(n * r)).length ? 0 : Math.round(n * r);
        }
        function p(_, g, v) {
          if (40 === _.charCodeAt(0) && !g.match(u)) {
            var m = g.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
            return v >= 0 ? p("n", m, v) : "(" + p("n", m, -v) + ")";
          }
          if (44 === g.charCodeAt(g.length - 1)) {
            return function (e, t, n) {
              for (var r = t.length - 1; 44 === t.charCodeAt(r - 1);) {
                --r;
              }
              return O(e, t.substr(0, r), n / Math.pow(10, 3 * (t.length - r)));
            }(_, g, v);
          }
          if (-1 !== g.indexOf("%")) {
            return function (t, r, i) {
              var o = r.replace(e, "");
              var a = r.length - o.length;
              return O(t, o, i * Math.pow(10, 2 * a)) + n("%", a);
            }(_, g, v);
          }
          if (-1 !== g.indexOf("E")) {
            return function e(t, n) {
              var r;
              var i = t.indexOf("E") - t.indexOf(".") - 1;
              if (t.match(/^#+0.0E\+0$/)) {
                if (0 == n) {
                  return "0.0E+0";
                }
                if (n < 0) {
                  return "-" + e(t, -n);
                }
                var o = t.indexOf(".");
                if (-1 === o) {
                  o = t.indexOf("E");
                }
                var a = Math.floor(Math.log(n) * Math.LOG10E) % o;
                if (a < 0) {
                  a += o;
                }
                if (-1 === (r = (n / Math.pow(10, a)).toPrecision(i + 1 + (o + a) % o)).indexOf("e")) {
                  var s = Math.floor(Math.log(n) * Math.LOG10E);
                  for (-1 === r.indexOf(".") ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + a) : r += "E+" + (s - a); "0." === r.substr(0, 2);) {
                    r = (r = r.charAt(0) + r.substr(2, o) + "." + r.substr(2 + o)).replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
                  }
                  r = r.replace(/\+-/, "-");
                }
                r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (e, t, n, r) {
                  return t + n + r.substr(0, (o + a) % o) + "." + r.substr(a) + "E";
                });
              } else {
                r = n.toExponential(i);
              }
              if (t.match(/E\+00$/) && r.match(/e[+-]\d$/)) {
                r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1);
              }
              if (t.match(/E\-/) && r.match(/e\+/)) {
                r = r.replace(/e\+/, "e");
              }
              return r.replace("e", "E");
            }(g, v);
          }
          if (36 === g.charCodeAt(0)) {
            return "$" + p(_, g.substr(" " == g.charAt(1) ? 2 : 1), v);
          }
          var y;
          var b;
          var w;
          var E;
          var x = Math.abs(v);
          var k = v < 0 ? "-" : "";
          if (g.match(/^00+$/)) {
            return k + s(x, g.length);
          }
          if (g.match(/^[#?]+$/)) {
            if ("0" === (y = s(v, 0))) {
              y = "";
            }
            return y.length > g.length ? y : f(g.substr(0, g.length - y.length)) + y;
          }
          if (b = g.match(a)) {
            return function (e, t, o) {
              var a = parseInt(e[4], 10);
              var s = Math.round(t * a);
              var c = Math.floor(s / a);
              var u = s - c * a;
              var l = a;
              return o + (0 === c ? "" : "" + c) + " " + (0 === u ? n(" ", e[1].length + 1 + e[4].length) : i(u, e[1].length) + e[2] + "/" + e[3] + r(l, e[4].length));
            }(b, x, k);
          }
          if (g.match(/^#+0+$/)) {
            return k + s(x, g.length - g.indexOf("0"));
          }
          if (b = g.match(c)) {
            y = d(v, b[1].length).replace(/^([^\.]+)$/, "$1." + f(b[1])).replace(/\.$/, "." + f(b[1])).replace(/\.(\d*)$/, function (e, t) {
              return "." + t + n("0", f(b[1]).length - t.length);
            });
            return -1 !== g.indexOf("0.") ? y : y.replace(/^0\./, ".");
          }
          g = g.replace(/^#+([0.])/, "$1");
          if (b = g.match(/^(0*)\.(#*)$/)) {
            return k + d(x, b[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, b[1].length ? "0." : ".");
          }
          if (b = g.match(/^#{1,3},##0(\.?)$/)) {
            return k + C(s(x, 0));
          }
          if (b = g.match(/^#,##0\.([#0]*0)$/)) {
            return v < 0 ? "-" + p(_, g, -v) : C("" + (Math.floor(v) + function (e, t) {
              return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
            }(v, b[1].length))) + "." + r(h(v, b[1].length), b[1].length);
          }
          if (b = g.match(/^#,#*,#0/)) {
            return p(_, g.replace(/^#,#*,/, ""), v);
          }
          if (b = g.match(/^([0#]+)(\\?-([0#]+))+$/)) {
            y = t(p(_, g.replace(/[\\-]/g, ""), v));
            w = 0;
            return t(t(g.replace(/\\/g, "")).replace(/[0#]/g, function (e) {
              return w < y.length ? y.charAt(w++) : "0" === e ? "0" : "";
            }));
          }
          if (g.match(l)) {
            return "(" + (y = p(_, "##########", v)).substr(0, 3) + ") " + y.substr(3, 3) + "-" + y.substr(6);
          }
          var S = "";
          if (b = g.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
            w = Math.min(b[4].length, 7);
            E = A(x, Math.pow(10, w) - 1, false);
            y = "" + k;
            if (" " == (S = O("n", b[1], E[1])).charAt(S.length - 1)) {
              S = S.substr(0, S.length - 1) + "0";
            }
            y += S + b[2] + "/" + b[3];
            if ((S = o(E[2], w)).length < b[4].length) {
              S = f(b[4].substr(b[4].length - S.length)) + S;
            }
            return y += S;
          }
          if (b = g.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
            w = Math.min(Math.max(b[1].length, b[4].length), 7);
            return k + ((E = A(x, Math.pow(10, w) - 1, true))[0] || (E[1] ? "" : "0")) + " " + (E[1] ? i(E[1], w) + b[2] + "/" + b[3] + o(E[2], w) : n(" ", 2 * w + 1 + b[2].length + b[3].length));
          }
          if (b = g.match(/^[#0?]+$/)) {
            y = s(v, 0);
            return g.length <= y.length ? y : f(g.substr(0, g.length - y.length)) + y;
          }
          if (b = g.match(/^([#0?]+)\.([#0]+)$/)) {
            y = "" + v.toFixed(Math.min(b[2].length, 10)).replace(/([^0])0+$/, "$1");
            w = y.indexOf(".");
            var T = g.indexOf(".") - w;
            var B = g.length - y.length - T;
            return f(g.substr(0, T) + y + g.substr(g.length - B));
          }
          if (b = g.match(/^00,000\.([#0]*0)$/)) {
            w = h(v, b[1].length);
            return v < 0 ? "-" + p(_, g, -v) : C(function (e) {
              return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? 0 | e : e - 1 | 0) : "" + Math.floor(e);
            }(v)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function (e) {
              return "00," + (e.length < 3 ? r(0, 3 - e.length) : "") + e;
            }) + "." + r(w, b[1].length);
          }
          switch (g) {
            case "###,##0.00":
              return p(_, "#,##0.00", v);
            case "###,###":
            case "##,###":
            case "#,###":
              var D = C(s(x, 0));
              return "0" !== D ? k + D : "";
            case "###,###.00":
              return p(_, "###,##0.00", v).replace(/^0\./, ".");
            case "#,###.00":
              return p(_, "#,##0.00", v).replace(/^0\./, ".");
          }
          throw new Error("unsupported format |" + g + "|");
        }
        function _(s, d, h) {
          if (40 === s.charCodeAt(0) && !d.match(u)) {
            var p = d.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
            return h >= 0 ? _("n", p, h) : "(" + _("n", p, -h) + ")";
          }
          if (44 === d.charCodeAt(d.length - 1)) {
            return function (e, t, n) {
              for (var r = t.length - 1; 44 === t.charCodeAt(r - 1);) {
                --r;
              }
              return O(e, t.substr(0, r), n / Math.pow(10, 3 * (t.length - r)));
            }(s, d, h);
          }
          if (-1 !== d.indexOf("%")) {
            return function (t, r, i) {
              var o = r.replace(e, "");
              var a = r.length - o.length;
              return O(t, o, i * Math.pow(10, 2 * a)) + n("%", a);
            }(s, d, h);
          }
          if (-1 !== d.indexOf("E")) {
            return function e(t, n) {
              var r;
              var i = t.indexOf("E") - t.indexOf(".") - 1;
              if (t.match(/^#+0.0E\+0$/)) {
                if (0 == n) {
                  return "0.0E+0";
                }
                if (n < 0) {
                  return "-" + e(t, -n);
                }
                var o = t.indexOf(".");
                if (-1 === o) {
                  o = t.indexOf("E");
                }
                var a = Math.floor(Math.log(n) * Math.LOG10E) % o;
                if (a < 0) {
                  a += o;
                }
                if (!(r = (n / Math.pow(10, a)).toPrecision(i + 1 + (o + a) % o)).match(/[Ee]/)) {
                  var s = Math.floor(Math.log(n) * Math.LOG10E);
                  if (-1 === r.indexOf(".")) {
                    r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + a);
                  } else {
                    r += "E+" + (s - a);
                  }
                  r = r.replace(/\+-/, "-");
                }
                r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (e, t, n, r) {
                  return t + n + r.substr(0, (o + a) % o) + "." + r.substr(a) + "E";
                });
              } else {
                r = n.toExponential(i);
              }
              if (t.match(/E\+00$/) && r.match(/e[+-]\d$/)) {
                r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1);
              }
              if (t.match(/E\-/) && r.match(/e\+/)) {
                r = r.replace(/e\+/, "e");
              }
              return r.replace("e", "E");
            }(d, h);
          }
          if (36 === d.charCodeAt(0)) {
            return "$" + _(s, d.substr(" " == d.charAt(1) ? 2 : 1), h);
          }
          var g;
          var v;
          var m;
          var y;
          var b = Math.abs(h);
          var w = h < 0 ? "-" : "";
          if (d.match(/^00+$/)) {
            return w + r(b, d.length);
          }
          if (d.match(/^[#?]+$/)) {
            g = "" + h;
            if (0 === h) {
              g = "";
            }
            return g.length > d.length ? g : f(d.substr(0, d.length - g.length)) + g;
          }
          if (v = d.match(a)) {
            return function (e, t, r) {
              return r + (0 === t ? "" : "" + t) + n(" ", e[1].length + 2 + e[4].length);
            }(v, b, w);
          }
          if (d.match(/^#+0+$/)) {
            return w + r(b, d.length - d.indexOf("0"));
          }
          if (v = d.match(c)) {
            g = (g = ("" + h).replace(/^([^\.]+)$/, "$1." + f(v[1])).replace(/\.$/, "." + f(v[1]))).replace(/\.(\d*)$/, function (e, t) {
              return "." + t + n("0", f(v[1]).length - t.length);
            });
            return -1 !== d.indexOf("0.") ? g : g.replace(/^0\./, ".");
          }
          d = d.replace(/^#+([0.])/, "$1");
          if (v = d.match(/^(0*)\.(#*)$/)) {
            return w + ("" + b).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, v[1].length ? "0." : ".");
          }
          if (v = d.match(/^#{1,3},##0(\.?)$/)) {
            return w + C("" + b);
          }
          if (v = d.match(/^#,##0\.([#0]*0)$/)) {
            return h < 0 ? "-" + _(s, d, -h) : C("" + h) + "." + n("0", v[1].length);
          }
          if (v = d.match(/^#,#*,#0/)) {
            return _(s, d.replace(/^#,#*,/, ""), h);
          }
          if (v = d.match(/^([0#]+)(\\?-([0#]+))+$/)) {
            g = t(_(s, d.replace(/[\\-]/g, ""), h));
            m = 0;
            return t(t(d.replace(/\\/g, "")).replace(/[0#]/g, function (e) {
              return m < g.length ? g.charAt(m++) : "0" === e ? "0" : "";
            }));
          }
          if (d.match(l)) {
            return "(" + (g = _(s, "##########", h)).substr(0, 3) + ") " + g.substr(3, 3) + "-" + g.substr(6);
          }
          var E = "";
          if (v = d.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
            m = Math.min(v[4].length, 7);
            y = A(b, Math.pow(10, m) - 1, false);
            g = "" + w;
            if (" " == (E = O("n", v[1], y[1])).charAt(E.length - 1)) {
              E = E.substr(0, E.length - 1) + "0";
            }
            g += E + v[2] + "/" + v[3];
            if ((E = o(y[2], m)).length < v[4].length) {
              E = f(v[4].substr(v[4].length - E.length)) + E;
            }
            return g += E;
          }
          if (v = d.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
            m = Math.min(Math.max(v[1].length, v[4].length), 7);
            return w + ((y = A(b, Math.pow(10, m) - 1, true))[0] || (y[1] ? "" : "0")) + " " + (y[1] ? i(y[1], m) + v[2] + "/" + v[3] + o(y[2], m) : n(" ", 2 * m + 1 + v[2].length + v[3].length));
          }
          if (v = d.match(/^[#0?]+$/)) {
            g = "" + h;
            return d.length <= g.length ? g : f(d.substr(0, d.length - g.length)) + g;
          }
          if (v = d.match(/^([#0]+)\.([#0]+)$/)) {
            g = "" + h.toFixed(Math.min(v[2].length, 10)).replace(/([^0])0+$/, "$1");
            m = g.indexOf(".");
            var x = d.indexOf(".") - m;
            var k = d.length - g.length - x;
            return f(d.substr(0, x) + g + d.substr(d.length - k));
          }
          if (v = d.match(/^00,000\.([#0]*0)$/)) {
            return h < 0 ? "-" + _(s, d, -h) : C("" + h).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function (e) {
              return "00," + (e.length < 3 ? r(0, 3 - e.length) : "") + e;
            }) + "." + r(0, v[1].length);
          }
          switch (d) {
            case "###,###":
            case "##,###":
            case "#,###":
              var S = C("" + b);
              return "0" !== S ? w + S : "";
            default:
              if (d.match(/\.[0#?]*$/)) {
                return _(s, d.slice(0, d.lastIndexOf(".")), h) + f(d.slice(d.lastIndexOf(".")));
              }
          }
          throw new Error("unsupported format |" + d + "|");
        }
        return function (e, t, n) {
          return (0 | n) === n ? _(e, t, n) : p(e, t, n);
        };
      }();
      function k(e) {
        for (var t = [], n = false, r = 0, i = 0; r < e.length; ++r) {
          switch (e.charCodeAt(r)) {
            case 34:
              n = !n;
              break;
            case 95:
            case 42:
            case 92:
              ++r;
              break;
            case 59:
              t[t.length] = e.substr(i, r - i);
              i = r + 1;
          }
        }
        t[t.length] = e.substr(i);
        if (true === n) {
          throw new Error("Format |" + e + "| unterminated string ");
        }
        return t;
      }
      e._split = k;
      var S = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
      function T(e) {
        for (var t = 0, n = "", r = ""; t < e.length;) {
          switch (n = e.charAt(t)) {
            case "G":
              if (c(e, t)) {
                t += 6;
              }
              t++;
              break;
            case "\"":
              for (; 34 !== e.charCodeAt(++t) && t < e.length;) {
                ;
              }
              ++t;
              break;
            case "\\":
            case "_":
              t += 2;
              break;
            case "@":
              ++t;
              break;
            case "B":
            case "b":
              if ("1" === e.charAt(t + 1) || "2" === e.charAt(t + 1)) {
                return true;
              }
            case "M":
            case "D":
            case "Y":
            case "H":
            case "S":
            case "E":
            case "m":
            case "d":
            case "y":
            case "h":
            case "s":
            case "e":
            case "g":
              return true;
            case "A":
            case "a":
            case "上":
              if ("A/P" === e.substr(t, 3).toUpperCase()) {
                return true;
              }
              if ("AM/PM" === e.substr(t, 5).toUpperCase()) {
                return true;
              }
              if ("上午/下午" === e.substr(t, 5).toUpperCase()) {
                return true;
              }
              ++t;
              break;
            case "[":
              for (r = n; "]" !== e.charAt(t++) && t < e.length;) {
                r += e.charAt(t);
              }
              if (r.match(S)) {
                return true;
              }
              break;
            case ".":
            case "0":
            case "#":
              for (; t < e.length && ("0#?.,E+-%".indexOf(n = e.charAt(++t)) > -1 || "\\" == n && "-" == e.charAt(t + 1) && "0#".indexOf(e.charAt(t + 2)) > -1);) {
                ;
              }
              break;
            case "?":
              for (; e.charAt(++t) === n;) {
                ;
              }
              break;
            case "*":
              ++t;
              if (!(" " != e.charAt(t) && "*" != e.charAt(t))) {
                ++t;
              }
              break;
            case "(":
            case ")":
              ++t;
              break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1;) {
                ;
              }
              break;
            case " ":
            default:
              ++t;
          }
        }
        return false;
      }
      function B(e, t, n, r) {
        for (var i, o, a, s = [], u = "", l = 0, f = "", d = "t", h = "H"; l < e.length;) {
          switch (f = e.charAt(l)) {
            case "G":
              if (!c(e, l)) {
                throw new Error("unrecognized character " + f + " in " + e);
              }
              s[s.length] = {
                t: "G",
                v: "General"
              };
              l += 7;
              break;
            case "\"":
              for (u = ""; 34 !== (a = e.charCodeAt(++l)) && l < e.length;) {
                u += String.fromCharCode(a);
              }
              s[s.length] = {
                t: "t",
                v: u
              };
              ++l;
              break;
            case "\\":
              var p = e.charAt(++l),
                _ = "(" === p || ")" === p ? p : "t";
              s[s.length] = {
                t: _,
                v: p
              };
              ++l;
              break;
            case "_":
              s[s.length] = {
                t: "t",
                v: " "
              };
              l += 2;
              break;
            case "@":
              s[s.length] = {
                t: "T",
                v: t
              };
              ++l;
              break;
            case "B":
            case "b":
              if ("1" === e.charAt(l + 1) || "2" === e.charAt(l + 1)) {
                if (null == i && null == (i = g(t, n, "2" === e.charAt(l + 1)))) {
                  return "";
                }
                s[s.length] = {
                  t: "X",
                  v: e.substr(l, 2)
                };
                d = f;
                l += 2;
                break;
              }
            case "M":
            case "D":
            case "Y":
            case "H":
            case "S":
            case "E":
              f = f.toLowerCase();
            case "m":
            case "d":
            case "y":
            case "h":
            case "s":
            case "e":
            case "g":
              if (t < 0) {
                return "";
              }
              if (null == i && null == (i = g(t, n))) {
                return "";
              }
              for (u = f; ++l < e.length && e.charAt(l).toLowerCase() === f;) {
                u += f;
              }
              if ("m" === f && "h" === d.toLowerCase()) {
                f = "M";
              }
              if ("h" === f) {
                f = h;
              }
              s[s.length] = {
                t: f,
                v: u
              };
              d = f;
              break;
            case "A":
            case "a":
            case "上":
              var A = {
                t: f,
                v: f
              };
              if (null == i && (i = g(t, n)), "A/P" === e.substr(l, 3).toUpperCase() ? (null != i && (A.v = i.H >= 12 ? "P" : "A"), A.t = "T", h = "h", l += 3) : "AM/PM" === e.substr(l, 5).toUpperCase() ? (null != i && (A.v = i.H >= 12 ? "PM" : "AM"), A.t = "T", l += 5, h = "h") : "上午/下午" === e.substr(l, 5).toUpperCase() ? (null != i && (A.v = i.H >= 12 ? "下午" : "上午"), A.t = "T", l += 5, h = "h") : (A.t = "t", ++l), null == i && "T" === A.t) {
                return "";
              }
              s[s.length] = A;
              d = f;
              break;
            case "[":
              for (u = f; "]" !== e.charAt(l++) && l < e.length;) {
                u += e.charAt(l);
              }
              if ("]" !== u.slice(-1)) {
                throw "unterminated \"[\" block: |" + u + "|";
              }
              if (u.match(S)) {
                if (null == i && null == (i = g(t, n))) {
                  return "";
                }
                s[s.length] = {
                  t: "Z",
                  v: u.toLowerCase()
                };
                d = u.charAt(1);
              } else if (u.indexOf("$") > -1) {
                u = (u.match(/\$([^-\[\]]*)/) || [])[1] || "$";
                if (!T(e)) {
                  s[s.length] = {
                    t: "t",
                    v: u
                  };
                }
              }
              break;
            case ".":
              if (null != i) {
                for (u = f; ++l < e.length && "0" === (f = e.charAt(l));) {
                  u += f;
                }
                s[s.length] = {
                  t: "s",
                  v: u
                };
                break;
              }
            case "0":
            case "#":
              for (u = f; ++l < e.length && "0#?.,E+-%".indexOf(f = e.charAt(l)) > -1;) {
                u += f;
              }
              s[s.length] = {
                t: "n",
                v: u
              };
              break;
            case "?":
              for (u = f; e.charAt(++l) === f;) {
                u += f;
              }
              s[s.length] = {
                t: f,
                v: u
              };
              d = f;
              break;
            case "*":
              ++l;
              if (!(" " != e.charAt(l) && "*" != e.charAt(l))) {
                ++l;
              }
              break;
            case "(":
            case ")":
              s[s.length] = {
                t: 1 === r ? "t" : f,
                v: f
              };
              ++l;
              break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              for (u = f; l < e.length && "0123456789".indexOf(e.charAt(++l)) > -1;) {
                u += e.charAt(l);
              }
              s[s.length] = {
                t: "D",
                v: u
              };
              break;
            case " ":
              s[s.length] = {
                t: f,
                v: f
              };
              ++l;
              break;
            case "$":
              s[s.length] = {
                t: "t",
                v: "$"
              };
              ++l;
              break;
            default:
              if (-1 === ",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f)) {
                throw new Error("unrecognized character " + f + " in " + e);
              }
              s[s.length] = {
                t: "t",
                v: f
              };
              ++l;
          }
        }
        var v;
        var m = 0;
        var y = 0;
        for (l = s.length - 1, d = "t"; l >= 0; --l) {
          switch (s[l].t) {
            case "h":
            case "H":
              s[l].t = h;
              d = "h";
              if (m < 1) {
                m = 1;
              }
              break;
            case "s":
              if (v = s[l].v.match(/\.0+$/)) {
                y = Math.max(y, v[0].length - 1);
              }
              if (m < 3) {
                m = 3;
              }
            case "d":
            case "y":
            case "M":
            case "e":
              d = s[l].t;
              break;
            case "m":
              if ("s" === d) {
                s[l].t = "M";
                if (m < 2) {
                  m = 2;
                }
              }
              break;
            case "X":
              break;
            case "Z":
              if (m < 1 && s[l].v.match(/[Hh]/)) {
                m = 1;
              }
              if (m < 2 && s[l].v.match(/[Mm]/)) {
                m = 2;
              }
              if (m < 3 && s[l].v.match(/[Ss]/)) {
                m = 3;
              }
          }
        }
        switch (m) {
          case 0:
            break;
          case 1:
            if (i.u >= .5) {
              i.u = 0;
              ++i.S;
            }
            if (i.S >= 60) {
              i.S = 0;
              ++i.M;
            }
            if (i.M >= 60) {
              i.M = 0;
              ++i.H;
            }
            break;
          case 2:
            if (i.u >= .5) {
              i.u = 0;
              ++i.S;
            }
            if (i.S >= 60) {
              i.S = 0;
              ++i.M;
            }
        }
        var b;
        var w = "";
        for (l = 0; l < s.length; ++l) {
          switch (s[l].t) {
            case "t":
            case "T":
            case " ":
            case "D":
              break;
            case "X":
              s[l].v = "";
              s[l].t = ";";
              break;
            case "d":
            case "m":
            case "y":
            case "h":
            case "H":
            case "M":
            case "s":
            case "e":
            case "b":
            case "Z":
              s[l].v = x(s[l].t.charCodeAt(0), s[l].v, i, y);
              s[l].t = "t";
              break;
            case "n":
            case "?":
              for (b = l + 1; null != s[b] && ("?" === (f = s[b].t) || "D" === f || (" " === f || "t" === f) && null != s[b + 1] && ("?" === s[b + 1].t || "t" === s[b + 1].t && "/" === s[b + 1].v) || "(" === s[l].t && (" " === f || "n" === f || ")" === f) || "t" === f && ("/" === s[b].v || " " === s[b].v && null != s[b + 1] && "?" == s[b + 1].t));) {
                s[l].v += s[b].v;
                s[b] = {
                  v: "",
                  t: ";"
                };
                ++b;
              }
              w += s[l].v;
              l = b - 1;
              break;
            case "G":
              s[l].t = "t";
              s[l].v = E(t, n);
          }
        }
        var C;
        var k;
        var B = "";
        if (w.length > 0) {
          if (40 == w.charCodeAt(0)) {
            C = t < 0 && 45 === w.charCodeAt(0) ? -t : t;
            k = O("n", w, C);
          } else {
            k = O("n", w, C = t < 0 && r > 1 ? -t : t);
            if (C < 0 && s[0] && "t" == s[0].t) {
              k = k.substr(1);
              s[0].v = "-" + s[0].v;
            }
          }
          b = k.length - 1;
          var D = s.length;
          for (l = 0; l < s.length; ++l) {
            if (null != s[l] && "t" != s[l].t && s[l].v.indexOf(".") > -1) {
              D = l;
              break;
            }
          }
          var I = s.length;
          if (D === s.length && -1 === k.indexOf("E")) {
            for (l = s.length - 1; l >= 0; --l) {
              if (null != s[l] && -1 !== "n?".indexOf(s[l].t)) {
                if (b >= s[l].v.length - 1) {
                  b -= s[l].v.length;
                  s[l].v = k.substr(b + 1, s[l].v.length);
                } else {
                  if (b < 0) {
                    s[l].v = "";
                  } else {
                    s[l].v = k.substr(0, b + 1);
                    b = -1;
                  }
                }
                s[l].t = "t";
                I = l;
              }
            }
            if (b >= 0 && I < s.length) {
              s[I].v = k.substr(0, b + 1) + s[I].v;
            }
          } else if (D !== s.length && -1 === k.indexOf("E")) {
            for (b = k.indexOf(".") - 1, l = D; l >= 0; --l) {
              if (null != s[l] && -1 !== "n?".indexOf(s[l].t)) {
                for (o = s[l].v.indexOf(".") > -1 && l === D ? s[l].v.indexOf(".") - 1 : s[l].v.length - 1, B = s[l].v.substr(o + 1); o >= 0; --o) {
                  if (b >= 0 && ("0" === s[l].v.charAt(o) || "#" === s[l].v.charAt(o))) {
                    B = k.charAt(b--) + B;
                  }
                }
                s[l].v = B;
                s[l].t = "t";
                I = l;
              }
            }
            for (b >= 0 && I < s.length && (s[I].v = k.substr(0, b + 1) + s[I].v), b = k.indexOf(".") + 1, l = D; l < s.length; ++l) {
              if (null != s[l] && (-1 !== "n?(".indexOf(s[l].t) || l === D)) {
                for (o = s[l].v.indexOf(".") > -1 && l === D ? s[l].v.indexOf(".") + 1 : 0, B = s[l].v.substr(0, o); o < s[l].v.length; ++o) {
                  if (b < k.length) {
                    B += k.charAt(b++);
                  }
                }
                s[l].v = B;
                s[l].t = "t";
                I = l;
              }
            }
          }
        }
        for (l = 0; l < s.length; ++l) {
          if (null != s[l] && "n?".indexOf(s[l].t) > -1) {
            C = r > 1 && t < 0 && l > 0 && "-" === s[l - 1].v ? -t : t;
            s[l].v = O(s[l].t, s[l].v, C);
            s[l].t = "t";
          }
        }
        var F = "";
        for (l = 0; l !== s.length; ++l) {
          if (null != s[l]) {
            F += s[l].v;
          }
        }
        return F;
      }
      e.is_date = T;
      e._eval = B;
      var D = /\[[=<>]/;
      var I = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
      function F(e, t) {
        if (null == t) {
          return false;
        }
        var n = parseFloat(t[2]);
        switch (t[1]) {
          case "=":
            if (e == n) {
              return true;
            }
            break;
          case ">":
            if (e > n) {
              return true;
            }
            break;
          case "<":
            if (e < n) {
              return true;
            }
            break;
          case "<>":
            if (e != n) {
              return true;
            }
            break;
          case ">=":
            if (e >= n) {
              return true;
            }
            break;
          case "<=":
            if (e <= n) {
              return true;
            }
        }
        return false;
      }
      function R(e, t, n) {
        if (null == n) {
          n = {};
        }
        var r = "";
        switch (typeof e) {
          case "string":
            r = "m/d/yy" == e && n.dateNF ? n.dateNF : e;
            break;
          case "number":
            if (null == (r = 14 == e && n.dateNF ? n.dateNF : (null != n.table ? n.table : d)[e])) {
              r = n.table && n.table[h[e]] || d[h[e]];
            }
            if (null == r) {
              r = _[e] || "General";
            }
        }
        if (c(r, 0)) {
          return E(t, n);
        }
        if (t instanceof Date) {
          t = b(t, n.date1904);
        }
        var i = function (e, t) {
          var n = k(e);
          var r = n.length;
          var i = n[r - 1].indexOf("@");
          if (r < 4 && i > -1) {
            --r;
          }
          if (n.length > 4) {
            throw new Error("cannot find right format for |" + n.join("|") + "|");
          }
          if ("number" !== typeof t) {
            return [4, 4 === n.length || i > -1 ? n[n.length - 1] : "@"];
          }
          switch (n.length) {
            case 1:
              n = i > -1 ? ["General", "General", "General", n[0]] : [n[0], n[0], n[0], "@"];
              break;
            case 2:
              n = i > -1 ? [n[0], n[0], n[0], n[1]] : [n[0], n[1], n[0], "@"];
              break;
            case 3:
              n = i > -1 ? [n[0], n[1], n[0], n[2]] : [n[0], n[1], n[2], "@"];
          }
          var o = t > 0 ? n[0] : t < 0 ? n[1] : n[2];
          if (-1 === n[0].indexOf("[") && -1 === n[1].indexOf("[")) {
            return [r, o];
          }
          if (null != n[0].match(D) || null != n[1].match(D)) {
            var a = n[0].match(I);
            var s = n[1].match(I);
            return F(t, a) ? [r, n[0]] : F(t, s) ? [r, n[1]] : [r, n[null != a && null != s ? 2 : 1]];
          }
          return [r, o];
        }(r, t);
        if (c(i[1])) {
          return E(t, n);
        }
        if (true === t) {
          t = "TRUE";
        } else if (false === t) {
          t = "FALSE";
        } else if ("" === t || null == t) {
          return "";
        }
        return B(i[1], t, n, i[0]);
      }
      function P(e, t) {
        if ("number" != typeof t) {
          t = +t || -1;
          for (var n = 0; n < 392; ++n) {
            if (undefined != d[n]) {
              if (d[n] == e) {
                t = n;
                break;
              }
            } else if (t < 0) {
              t = n;
            }
          }
          if (t < 0) {
            t = 391;
          }
        }
        d[t] = e;
        return t;
      }
      e.load = P;
      e._table = d;
      e.get_table = function () {
        return d;
      };
      e.load_table = function (e) {
        for (var t = 0; 392 != t; ++t) {
          if (undefined !== e[t]) {
            P(e[t], t);
          }
        }
      };
      e.init_table = f;
      e.format = R;
    };
    I(D);
    var F;
    var R = {
      "General Number": "General",
      "General Date": D._table[22],
      "Long Date": "dddd, mmmm dd, yyyy",
      "Medium Date": D._table[15],
      "Short Date": D._table[14],
      "Long Time": D._table[19],
      "Medium Time": D._table[18],
      "Short Time": D._table[20],
      Currency: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
      Fixed: D._table[2],
      Standard: D._table[4],
      Percent: D._table[10],
      Scientific: D._table[11],
      "Yes/No": "\"Yes\";\"Yes\";\"No\";@",
      "True/False": "\"True\";\"True\";\"False\";@",
      "On/Off": "\"Yes\";\"Yes\";\"No\";@"
    };
    var P = {
      5: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
      6: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
      7: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
      8: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
      23: "General",
      24: "General",
      25: "General",
      26: "General",
      27: "m/d/yy",
      28: "m/d/yy",
      29: "m/d/yy",
      30: "m/d/yy",
      31: "m/d/yy",
      32: "h:mm:ss",
      33: "h:mm:ss",
      34: "h:mm:ss",
      35: "h:mm:ss",
      36: "m/d/yy",
      41: "_(* #,##0_);_(* (#,##0);_(* \"-\"_);_(@_)",
      42: "_(\"$\"* #,##0_);_(\"$\"* (#,##0);_(\"$\"* \"-\"_);_(@_)",
      43: "_(* #,##0.00_);_(* (#,##0.00);_(* \"-\"??_);_(@_)",
      44: "_(\"$\"* #,##0.00_);_(\"$\"* (#,##0.00);_(\"$\"* \"-\"??_);_(@_)",
      50: "m/d/yy",
      51: "m/d/yy",
      52: "m/d/yy",
      53: "m/d/yy",
      54: "m/d/yy",
      55: "m/d/yy",
      56: "m/d/yy",
      57: "m/d/yy",
      58: "m/d/yy",
      59: "0",
      60: "0.00",
      61: "#,##0",
      62: "#,##0.00",
      63: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
      64: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
      65: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
      66: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
      67: "0%",
      68: "0.00%",
      69: "# ?/?",
      70: "# ??/??",
      71: "m/d/yy",
      72: "m/d/yy",
      73: "d-mmm-yy",
      74: "d-mmm",
      75: "mmm-yy",
      76: "h:mm",
      77: "h:mm:ss",
      78: "m/d/yy h:mm",
      79: "mm:ss",
      80: "[h]:mm:ss",
      81: "mmss.0"
    };
    var N = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
    !function (e) {
      e.version = "1.2.0";
      var t = function () {
        for (var e = 0, t = new Array(256), n = 0; 256 != n; ++n) {
          e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = n) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1;
          t[n] = e;
        }
        return "undefined" !== typeof Int32Array ? new Int32Array(t) : t;
      }();
      e.table = t;
      e.bstr = function (e, n) {
        for (var r = -1 ^ n, i = e.length - 1, o = 0; o < i;) {
          r = (r = r >>> 8 ^ t[255 & (r ^ e.charCodeAt(o++))]) >>> 8 ^ t[255 & (r ^ e.charCodeAt(o++))];
        }
        if (o === i) {
          r = r >>> 8 ^ t[255 & (r ^ e.charCodeAt(o))];
        }
        return -1 ^ r;
      };
      e.buf = function (e, n) {
        if (e.length > 1e4) {
          return function (e, n) {
            for (var r = -1 ^ n, i = e.length - 7, o = 0; o < i;) {
              r = (r = (r = (r = (r = (r = (r = (r = r >>> 8 ^ t[255 & (r ^ e[o++])]) >>> 8 ^ t[255 & (r ^ e[o++])]) >>> 8 ^ t[255 & (r ^ e[o++])]) >>> 8 ^ t[255 & (r ^ e[o++])]) >>> 8 ^ t[255 & (r ^ e[o++])]) >>> 8 ^ t[255 & (r ^ e[o++])]) >>> 8 ^ t[255 & (r ^ e[o++])]) >>> 8 ^ t[255 & (r ^ e[o++])];
            }
            for (; o < i + 7;) {
              r = r >>> 8 ^ t[255 & (r ^ e[o++])];
            }
            return -1 ^ r;
          }(e, n);
        }
        for (var r = -1 ^ n, i = e.length - 3, o = 0; o < i;) {
          r = (r = (r = (r = r >>> 8 ^ t[255 & (r ^ e[o++])]) >>> 8 ^ t[255 & (r ^ e[o++])]) >>> 8 ^ t[255 & (r ^ e[o++])]) >>> 8 ^ t[255 & (r ^ e[o++])];
        }
        for (; o < i + 3;) {
          r = r >>> 8 ^ t[255 & (r ^ e[o++])];
        }
        return -1 ^ r;
      };
      e.str = function (e, n) {
        for (var r, i, o = -1 ^ n, a = 0, s = e.length; a < s;) {
          if ((r = e.charCodeAt(a++)) < 128) {
            o = o >>> 8 ^ t[255 & (o ^ r)];
          } else {
            if (r < 2048) {
              o = (o = o >>> 8 ^ t[255 & (o ^ (192 | r >> 6 & 31))]) >>> 8 ^ t[255 & (o ^ (128 | 63 & r))];
            } else {
              if (r >= 55296 && r < 57344) {
                r = 64 + (1023 & r);
                i = 1023 & e.charCodeAt(a++);
                o = (o = (o = (o = o >>> 8 ^ t[255 & (o ^ (240 | r >> 8 & 7))]) >>> 8 ^ t[255 & (o ^ (128 | r >> 2 & 63))]) >>> 8 ^ t[255 & (o ^ (128 | i >> 6 & 15 | (3 & r) << 4))]) >>> 8 ^ t[255 & (o ^ (128 | 63 & i))];
              } else {
                o = (o = (o = o >>> 8 ^ t[255 & (o ^ (224 | r >> 12 & 15))]) >>> 8 ^ t[255 & (o ^ (128 | r >> 6 & 63))]) >>> 8 ^ t[255 & (o ^ (128 | 63 & r))];
              }
            }
          }
        }
        return -1 ^ o;
      };
    }(F = {});
    var M;
    var j = function () {
      var e;
      var t = {};
      function r(e) {
        if ("/" == e.charAt(e.length - 1)) {
          return -1 === e.slice(0, -1).indexOf("/") ? e : r(e.slice(0, -1));
        }
        var t = e.lastIndexOf("/");
        return -1 === t ? e : e.slice(0, t + 1);
      }
      function i(e) {
        if ("/" == e.charAt(e.length - 1)) {
          return i(e.slice(0, -1));
        }
        var t = e.lastIndexOf("/");
        return -1 === t ? e : e.slice(t + 1);
      }
      function o(e, t) {
        if ("string" === typeof t) {
          t = new Date(t);
        }
        var n = t.getHours();
        n = (n = n << 6 | t.getMinutes()) << 5 | t.getSeconds() >>> 1;
        e.write_shift(2, n);
        var r = t.getFullYear() - 1980;
        r = (r = r << 4 | t.getMonth() + 1) << 5 | t.getDate();
        e.write_shift(2, r);
      }
      function a(e) {
        jt(e, 0);
        for (var t = {}, n = 0; e.l <= e.length - 4;) {
          var r = e.read_shift(2);
          var i = e.read_shift(2);
          var o = e.l + i;
          var a = {};
          switch (r) {
            case 21589:
              if (1 & (n = e.read_shift(1))) {
                a.mtime = e.read_shift(4);
              }
              if (i > 5) {
                if (2 & n) {
                  a.atime = e.read_shift(4);
                }
                if (4 & n) {
                  a.ctime = e.read_shift(4);
                }
              }
              if (a.mtime) {
                a.mt = new Date(1e3 * a.mtime);
              }
          }
          e.l = o;
          t[r] = a;
        }
        return t;
      }
      function s() {
        return e || (e = require("./951"));
      }
      function c(e, t) {
        if (80 == e[0] && 75 == e[1]) {
          return se(e, t);
        }
        if (e.length < 512) {
          throw new Error("CFB file size " + e.length + " < 512");
        }
        var n;
        var r;
        var i;
        var o;
        var a;
        var s;
        var c = 512;
        var d = [];
        var h = e.slice(0, 512);
        jt(h, 0);
        var p = function (e) {
          if (80 == e[e.l] && 75 == e[e.l + 1]) {
            return [0, 0];
          }
          e.chk(y, "Header Signature: ");
          e.l += 16;
          var t = e.read_shift(2, "u");
          return [e.read_shift(2, "u"), t];
        }(h);
        switch (n = p[0]) {
          case 3:
            c = 512;
            break;
          case 4:
            c = 4096;
            break;
          case 0:
            if (0 == p[1]) {
              return se(e, t);
            }
          default:
            throw new Error("Major Version: Expected 3 or 4 saw " + n);
        }
        if (512 !== c) {
          jt(h = e.slice(0, c), 28);
        }
        var _ = e.slice(0, c);
        !function (e, t) {
          var n;
          switch (e.l += 2, n = e.read_shift(2)) {
            case 9:
              if (3 != t) {
                throw new Error("Sector Shift: Expected 9 saw " + n);
              }
              break;
            case 12:
              if (4 != t) {
                throw new Error("Sector Shift: Expected 12 saw " + n);
              }
              break;
            default:
              throw new Error("Sector Shift: Expected 9 or 12 saw " + n);
          }
          e.chk("0600", "Mini Sector Shift: ");
          e.chk("000000000000", "Reserved: ");
        }(h, n);
        var A = h.read_shift(4, "i");
        if (3 === n && 0 !== A) {
          throw new Error("# Directory Sectors: Expected 0 saw " + A);
        }
        h.l += 4;
        o = h.read_shift(4, "i");
        h.l += 4;
        h.chk("00100000", "Mini Stream Cutoff Size: ");
        a = h.read_shift(4, "i");
        r = h.read_shift(4, "i");
        s = h.read_shift(4, "i");
        i = h.read_shift(4, "i");
        for (var v = -1, m = 0; m < 109 && !((v = h.read_shift(4, "i")) < 0); ++m) {
          d[m] = v;
        }
        var b = function (e, t) {
          for (var n = Math.ceil(e.length / t) - 1, r = [], i = 1; i < n; ++i) {
            r[i - 1] = e.slice(i * t, (i + 1) * t);
          }
          r[n - 1] = e.slice(n * t);
          return r;
        }(e, c);
        !function e(t, n, r, i, o) {
          var a = g;
          if (t === g) {
            if (0 !== n) {
              throw new Error("DIFAT chain shorter than expected");
            }
          } else if (-1 !== t) {
            var s = r[t];
            var c = (i >>> 2) - 1;
            if (!s) {
              return;
            }
            for (var u = 0; u < c && (a = It(s, 4 * u)) !== g; ++u) {
              o.push(a);
            }
            e(It(s, i - 4), n - 1, r, i, o);
          }
        }(s, i, b, c, d);
        var w = function (e, t, n, r) {
          var i = e.length;
          var o = [];
          var a = [];
          var s = [];
          var c = [];
          var u = r - 1;
          var l = 0;
          var f = 0;
          var d = 0;
          var h = 0;
          for (l = 0; l < i; ++l) {
            s = [];
            if ((d = l + t) >= i) {
              d -= i;
            }
            if (!a[d]) {
              c = [];
              var p = [];
              for (f = d; f >= 0;) {
                p[f] = true;
                a[f] = true;
                s[s.length] = f;
                c.push(e[f]);
                var _ = n[Math.floor(4 * f / r)];
                if (r < 4 + (h = 4 * f & u)) {
                  throw new Error("FAT boundary crossed: " + f + " 4 " + r);
                }
                if (!e[_]) {
                  break;
                }
                f = It(e[_], h);
                if (p[f]) {
                  break;
                }
              }
              o[d] = {
                nodes: s,
                data: ut([c])
              };
            }
          }
          return o;
        }(b, o, d, c);
        w[o].name = "!Directory";
        if (r > 0 && a !== g) {
          w[a].name = "!MiniFAT";
        }
        w[d[0]].name = "!FAT";
        w.fat_addrs = d;
        w.ssz = c;
        var E = [];
        var x = [];
        var C = [];
        !function (e, t, n, r, i, o, a, s) {
          for (var c, d = 0, h = r.length ? 2 : 0, p = t[e].data, _ = 0, A = 0; _ < p.length; _ += 128) {
            var v = p.slice(_, _ + 128);
            jt(v, 64);
            A = v.read_shift(2);
            c = ft(v, 0, A - h);
            r.push(c);
            var m = {
              name: c,
              type: v.read_shift(1),
              color: v.read_shift(1),
              L: v.read_shift(4, "i"),
              R: v.read_shift(4, "i"),
              C: v.read_shift(4, "i"),
              clsid: v.read_shift(16),
              state: v.read_shift(4, "i"),
              start: 0,
              size: 0
            };
            if (0 !== v.read_shift(2) + v.read_shift(2) + v.read_shift(2) + v.read_shift(2)) {
              m.ct = f(v, v.l - 8);
            }
            if (0 !== v.read_shift(2) + v.read_shift(2) + v.read_shift(2) + v.read_shift(2)) {
              m.mt = f(v, v.l - 8);
            }
            m.start = v.read_shift(4, "i");
            m.size = v.read_shift(4, "i");
            if (m.size < 0 && m.start < 0) {
              m.size = m.type = 0;
              m.start = g;
              m.name = "";
            }
            if (5 === m.type) {
              d = m.start;
              if (i > 0 && d !== g) {
                t[d].name = "!StreamData";
              }
            } else {
              if (m.size >= 4096) {
                m.storage = "fat";
                if (undefined === t[m.start]) {
                  t[m.start] = l(n, m.start, t.fat_addrs, t.ssz);
                }
                t[m.start].name = m.name;
                m.content = t[m.start].data.slice(0, m.size);
              } else {
                m.storage = "minifat";
                if (m.size < 0) {
                  m.size = 0;
                } else {
                  if (d !== g && m.start !== g && t[d]) {
                    m.content = u(m, t[d].data, (t[s] || {}).data);
                  }
                }
              }
            }
            if (m.content) {
              jt(m.content, 0);
            }
            o[c] = m;
            a.push(m);
          }
        }(o, w, b, E, r, {}, x, a);
        (function (e, t, n) {
          for (var r = 0, i = 0, o = 0, a = 0, s = 0, c = n.length, u = [], l = []; r < c; ++r) {
            u[r] = l[r] = r;
            t[r] = n[r];
          }
          for (; s < l.length; ++s) {
            r = l[s];
            i = e[r].L;
            o = e[r].R;
            a = e[r].C;
            if (u[r] === r) {
              if (-1 !== i && u[i] !== i) {
                u[r] = u[i];
              }
              if (-1 !== o && u[o] !== o) {
                u[r] = u[o];
              }
            }
            if (-1 !== a) {
              u[a] = r;
            }
            if (-1 !== i && r != u[r]) {
              u[i] = u[r];
              if (l.lastIndexOf(i) < s) {
                l.push(i);
              }
            }
            if (-1 !== o && r != u[r]) {
              u[o] = u[r];
              if (l.lastIndexOf(o) < s) {
                l.push(o);
              }
            }
          }
          for (r = 1; r < c; ++r) {
            if (u[r] === r) {
              if (-1 !== o && u[o] !== o) {
                u[r] = u[o];
              } else {
                if (-1 !== i && u[i] !== i) {
                  u[r] = u[i];
                }
              }
            }
          }
          for (r = 1; r < c; ++r) {
            if (0 !== e[r].type) {
              if ((s = r) != u[s]) {
                do {
                  s = u[s];
                  t[r] = t[s] + "/" + t[r];
                } while (0 !== s && -1 !== u[s] && s != u[s]);
              }
              u[r] = -1;
            }
          }
          for (t[0] += "/", r = 1; r < c; ++r) {
            if (2 !== e[r].type) {
              t[r] += "/";
            }
          }
        })(x, C, E);
        E.shift();
        var O = {
          FileIndex: x,
          FullPaths: C
        };
        if (t && t.raw) {
          O.raw = {
            header: _,
            sectors: b
          };
        }
        return O;
      }
      function u(e, t, n) {
        for (var r = e.start, i = e.size, o = [], a = r; n && i > 0 && a >= 0;) {
          o.push(t.slice(a * A, a * A + A));
          i -= A;
          a = It(n, 4 * a);
        }
        return 0 === o.length ? Ut(0) : S(o).slice(0, e.size);
      }
      function l(e, t, n, r, i) {
        var o = [];
        var a = [];
        if (!i) {
          i = [];
        }
        var s = r - 1;
        var c = 0;
        var u = 0;
        for (c = t; c >= 0;) {
          i[c] = true;
          o[o.length] = c;
          a.push(e[c]);
          var l = n[Math.floor(4 * c / r)];
          if (r < 4 + (u = 4 * c & s)) {
            throw new Error("FAT boundary crossed: " + c + " 4 " + r);
          }
          if (!e[l]) {
            break;
          }
          c = It(e[l], u);
        }
        return {
          nodes: o,
          data: ut([a])
        };
      }
      function f(e, t) {
        return new Date(1e3 * (Dt(e, t + 4) / 1e7 * Math.pow(2, 32) + Dt(e, t) / 1e7 - 11644473600));
      }
      function d(e, t) {
        var n = t || {};
        var r = n.root || "Root Entry";
        if (!e.FullPaths) {
          e.FullPaths = [];
        }
        if (!e.FileIndex) {
          e.FileIndex = [];
        }
        if (e.FullPaths.length !== e.FileIndex.length) {
          throw new Error("inconsistent CFB structure");
        }
        if (0 === e.FullPaths.length) {
          e.FullPaths[0] = r + "/";
          e.FileIndex[0] = {
            name: r,
            type: 5
          };
        }
        if (n.CLSID) {
          e.FileIndex[0].clsid = n.CLSID;
        }
        (function (e) {
          var t = "\u0001Sh33tJ5";
          if (j.find(e, "/" + t)) {
            return;
          }
          var n = Ut(4);
          n[0] = 55;
          n[1] = n[3] = 50;
          n[2] = 54;
          e.FileIndex.push({
            name: t,
            type: 2,
            content: n,
            size: 4,
            L: 69,
            R: 69,
            C: 69
          });
          e.FullPaths.push(e.FullPaths[0] + t);
          h(e);
        })(e);
      }
      function h(e, t) {
        d(e);
        for (var n = false, o = false, a = e.FullPaths.length - 1; a >= 0; --a) {
          var s = e.FileIndex[a];
          switch (s.type) {
            case 0:
              if (o) {
                n = true;
              } else {
                e.FileIndex.pop();
                e.FullPaths.pop();
              }
              break;
            case 1:
            case 2:
            case 5:
              o = true;
              if (isNaN(s.R * s.L * s.C)) {
                n = true;
              }
              if (s.R > -1 && s.L > -1 && s.R == s.L) {
                n = true;
              }
              break;
            default:
              n = true;
          }
        }
        if (n || t) {
          var c = new Date(1987, 1, 19);
          var u = 0;
          var l = [];
          for (a = 0; a < e.FullPaths.length; ++a) {
            if (0 !== e.FileIndex[a].type) {
              l.push([e.FullPaths[a], e.FileIndex[a]]);
            }
          }
          for (a = 0; a < l.length; ++a) {
            var f = r(l[a][0]);
            for (o = false, u = 0; u < l.length; ++u) {
              if (l[u][0] === f) {
                o = true;
              }
            }
            if (!o) {
              l.push([f, {
                name: i(f).replace("/", ""),
                type: 1,
                clsid: C,
                ct: c,
                mt: c,
                content: null
              }]);
            }
          }
          for (l.sort(function (e, t) {
            return function (e, t) {
              for (var n = e.split("/"), r = t.split("/"), i = 0, o = 0, a = Math.min(n.length, r.length); i < a; ++i) {
                if (o = n[i].length - r[i].length) {
                  return o;
                }
                if (n[i] != r[i]) {
                  return n[i] < r[i] ? -1 : 1;
                }
              }
              return n.length - r.length;
            }(e[0], t[0]);
          }), e.FullPaths = [], e.FileIndex = [], a = 0; a < l.length; ++a) {
            e.FullPaths[a] = l[a][0];
            e.FileIndex[a] = l[a][1];
          }
          for (a = 0; a < l.length; ++a) {
            var h = e.FileIndex[a];
            var p = e.FullPaths[a];
            h.name = i(p).replace("/", "");
            h.L = h.R = h.C = -(h.color = 1);
            h.size = h.content ? h.content.length : 0;
            h.start = 0;
            h.clsid = h.clsid || C;
            if (0 === a) {
              h.C = l.length > 1 ? 1 : -1;
              h.size = 0;
              h.type = 5;
            } else if ("/" == p.slice(-1)) {
              for (u = a + 1; u < l.length && r(e.FullPaths[u]) != p; ++u) {
                ;
              }
              for (h.C = u >= l.length ? -1 : u, u = a + 1; u < l.length && r(e.FullPaths[u]) != r(p); ++u) {
                ;
              }
              h.R = u >= l.length ? -1 : u;
              h.type = 1;
            } else {
              if (r(e.FullPaths[a + 1] || "") == r(p)) {
                h.R = a + 1;
              }
              h.type = 2;
            }
          }
        }
      }
      function p(e, t) {
        var n = t || {};
        h(e);
        if ("zip" == n.fileType) {
          return function (e, t) {
            var n = t || {};
            var r = [];
            var i = [];
            var a = Ut(1);
            var s = n.compression ? 8 : 0;
            var c = 0;
            0;
            var u = 0;
            var l = 0;
            var f = 0;
            var d = 0;
            var h = e.FullPaths[0];
            var p = h;
            var A = e.FileIndex[0];
            var g = [];
            var v = 0;
            for (u = 1; u < e.FullPaths.length; ++u) {
              p = e.FullPaths[u].slice(h.length);
              if ((A = e.FileIndex[u]).size && A.content && "\u0001Sh33tJ5" != p) {
                var m = f;
                var y = Ut(p.length);
                for (l = 0; l < p.length; ++l) {
                  y.write_shift(1, 127 & p.charCodeAt(l));
                }
                y = y.slice(0, y.l);
                g[d] = F.buf(A.content, 0);
                var b = A.content;
                if (8 == s) {
                  w = b;
                  b = _ ? _.deflateRawSync(w) : X(w);
                }
                (a = Ut(30)).write_shift(4, 67324752);
                a.write_shift(2, 20);
                a.write_shift(2, c);
                a.write_shift(2, s);
                if (A.mt) {
                  o(a, A.mt);
                } else {
                  a.write_shift(4, 0);
                }
                a.write_shift(-4, 8 & c ? 0 : g[d]);
                a.write_shift(4, 8 & c ? 0 : b.length);
                a.write_shift(4, 8 & c ? 0 : A.content.length);
                a.write_shift(2, y.length);
                a.write_shift(2, 0);
                f += a.length;
                r.push(a);
                f += y.length;
                r.push(y);
                f += b.length;
                r.push(b);
                if (8 & c) {
                  (a = Ut(12)).write_shift(-4, g[d]);
                  a.write_shift(4, b.length);
                  a.write_shift(4, A.content.length);
                  f += a.l;
                  r.push(a);
                }
                (a = Ut(46)).write_shift(4, 33639248);
                a.write_shift(2, 0);
                a.write_shift(2, 20);
                a.write_shift(2, c);
                a.write_shift(2, s);
                a.write_shift(4, 0);
                a.write_shift(-4, g[d]);
                a.write_shift(4, b.length);
                a.write_shift(4, A.content.length);
                a.write_shift(2, y.length);
                a.write_shift(2, 0);
                a.write_shift(2, 0);
                a.write_shift(2, 0);
                a.write_shift(2, 0);
                a.write_shift(4, 0);
                a.write_shift(4, m);
                v += a.l;
                i.push(a);
                v += y.length;
                i.push(y);
                ++d;
              }
            }
            var w;
            (a = Ut(22)).write_shift(4, 101010256);
            a.write_shift(2, 0);
            a.write_shift(2, 0);
            a.write_shift(2, d);
            a.write_shift(2, d);
            a.write_shift(4, v);
            a.write_shift(4, f);
            a.write_shift(2, 0);
            return S([S(r), S(i), a]);
          }(e, n);
        }
        var r = function (e) {
          for (var t = 0, n = 0, r = 0; r < e.FileIndex.length; ++r) {
            var i = e.FileIndex[r];
            if (i.content) {
              var o = i.content.length;
              if (o > 0) {
                if (o < 4096) {
                  t += o + 63 >> 6;
                } else {
                  n += o + 511 >> 9;
                }
              }
            }
          }
          for (var a = e.FullPaths.length + 3 >> 2, s = t + 127 >> 7, c = (t + 7 >> 3) + n + a + s, u = c + 127 >> 7, l = u <= 109 ? 0 : Math.ceil((u - 109) / 127); c + u + l + 127 >> 7 > u;) {
            l = ++u <= 109 ? 0 : Math.ceil((u - 109) / 127);
          }
          var f = [1, l, u, s, a, n, t, 0];
          e.FileIndex[0].size = t << 6;
          f[7] = (e.FileIndex[0].start = f[0] + f[1] + f[2] + f[3] + f[4] + f[5]) + (f[6] + 7 >> 3);
          return f;
        }(e);
        var i = Ut(r[7] << 9);
        var a = 0;
        var s = 0;
        for (a = 0; a < 8; ++a) {
          i.write_shift(1, b[a]);
        }
        for (a = 0; a < 8; ++a) {
          i.write_shift(2, 0);
        }
        for (i.write_shift(2, 62), i.write_shift(2, 3), i.write_shift(2, 65534), i.write_shift(2, 9), i.write_shift(2, 6), a = 0; a < 3; ++a) {
          i.write_shift(2, 0);
        }
        for (i.write_shift(4, 0), i.write_shift(4, r[2]), i.write_shift(4, r[0] + r[1] + r[2] + r[3] - 1), i.write_shift(4, 0), i.write_shift(4, 4096), i.write_shift(4, r[3] ? r[0] + r[1] + r[2] - 1 : g), i.write_shift(4, r[3]), i.write_shift(-4, r[1] ? r[0] - 1 : g), i.write_shift(4, r[1]), a = 0; a < 109; ++a) {
          i.write_shift(-4, a < r[2] ? r[1] + a : -1);
        }
        if (r[1]) {
          for (s = 0; s < r[1]; ++s) {
            for (; a < 236 + 127 * s; ++a) {
              i.write_shift(-4, a < r[2] ? r[1] + a : -1);
            }
            i.write_shift(-4, s === r[1] - 1 ? g : s + 1);
          }
        }
        var c = function (e) {
          for (s += e; a < s - 1; ++a) {
            i.write_shift(-4, a + 1);
          }
          if (e) {
            ++a;
            i.write_shift(-4, g);
          }
        };
        for (s = a = 0, s += r[1]; a < s; ++a) {
          i.write_shift(-4, O.DIFSECT);
        }
        for (s += r[2]; a < s; ++a) {
          i.write_shift(-4, O.FATSECT);
        }
        c(r[3]);
        c(r[4]);
        for (var u = 0, l = 0, f = e.FileIndex[0]; u < e.FileIndex.length; ++u) {
          if ((f = e.FileIndex[u]).content) {
            if (!((l = f.content.length) < 4096)) {
              f.start = s;
              c(l + 511 >> 9);
            }
          }
        }
        for (c(r[6] + 7 >> 3); 511 & i.l;) {
          i.write_shift(-4, O.ENDOFCHAIN);
        }
        for (s = a = 0, u = 0; u < e.FileIndex.length; ++u) {
          if ((f = e.FileIndex[u]).content) {
            if (!(!(l = f.content.length) || l >= 4096)) {
              f.start = s;
              c(l + 63 >> 6);
            }
          }
        }
        for (; 511 & i.l;) {
          i.write_shift(-4, O.ENDOFCHAIN);
        }
        for (a = 0; a < r[4] << 2; ++a) {
          var d = e.FullPaths[a];
          if (d && 0 !== d.length) {
            f = e.FileIndex[a];
            if (0 === a) {
              f.start = f.size ? f.start - 1 : g;
            }
            var p = 0 === a && n.root || f.name;
            l = 2 * (p.length + 1);
            i.write_shift(64, p, "utf16le");
            i.write_shift(2, l);
            i.write_shift(1, f.type);
            i.write_shift(1, f.color);
            i.write_shift(-4, f.L);
            i.write_shift(-4, f.R);
            i.write_shift(-4, f.C);
            if (f.clsid) {
              i.write_shift(16, f.clsid, "hex");
            } else {
              for (u = 0; u < 4; ++u) {
                i.write_shift(4, 0);
              }
            }
            i.write_shift(4, f.state || 0);
            i.write_shift(4, 0);
            i.write_shift(4, 0);
            i.write_shift(4, 0);
            i.write_shift(4, 0);
            i.write_shift(4, f.start);
            i.write_shift(4, f.size);
            i.write_shift(4, 0);
          } else {
            for (u = 0; u < 17; ++u) {
              i.write_shift(4, 0);
            }
            for (u = 0; u < 3; ++u) {
              i.write_shift(4, -1);
            }
            for (u = 0; u < 12; ++u) {
              i.write_shift(4, 0);
            }
          }
        }
        for (a = 1; a < e.FileIndex.length; ++a) {
          if ((f = e.FileIndex[a]).size >= 4096) {
            for (i.l = f.start + 1 << 9, u = 0; u < f.size; ++u) {
              i.write_shift(1, f.content[u]);
            }
            for (; 511 & u; ++u) {
              i.write_shift(1, 0);
            }
          }
        }
        for (a = 1; a < e.FileIndex.length; ++a) {
          if ((f = e.FileIndex[a]).size > 0 && f.size < 4096) {
            for (u = 0; u < f.size; ++u) {
              i.write_shift(1, f.content[u]);
            }
            for (; 63 & u; ++u) {
              i.write_shift(1, 0);
            }
          }
        }
        for (; i.l < i.length;) {
          i.write_shift(1, 0);
        }
        return i;
      }
      t.version = "1.1.4";
      var _;
      var A = 64;
      var g = -2;
      var y = "d0cf11e0a1b11ae1";
      var b = [208, 207, 17, 224, 161, 177, 26, 225];
      var C = "00000000000000000000000000000000";
      var O = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: g,
        FREESECT: -1,
        HEADER_SIGNATURE: y,
        HEADER_MINOR_VERSION: "3e00",
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: C,
        EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
      };
      function k(e) {
        for (var t = new Array(e.length), n = 0; n < e.length; ++n) {
          t[n] = String.fromCharCode(e[n]);
        }
        return t.join("");
      }
      var D = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      var I = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
      var R = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
      function P(e) {
        var t = 139536 & (e << 1 | e << 11) | 558144 & (e << 5 | e << 15);
        return 255 & (t >> 16 | t >> 8 | t);
      }
      for (var N = "undefined" !== typeof Uint8Array, M = N ? new Uint8Array(256) : [], L = 0; L < 256; ++L) {
        M[L] = P(L);
      }
      function U(e, t) {
        var n = M[255 & e];
        return t <= 8 ? n >>> 8 - t : (n = n << 8 | M[e >> 8 & 255], t <= 16 ? n >>> 16 - t : (n = n << 8 | M[e >> 16 & 255]) >>> 24 - t);
      }
      function H(e, t) {
        var n = 7 & t;
        var r = t >>> 3;
        return (e[r] | (n <= 6 ? 0 : e[r + 1] << 8)) >>> n & 3;
      }
      function V(e, t) {
        var n = 7 & t;
        var r = t >>> 3;
        return (e[r] | (n <= 5 ? 0 : e[r + 1] << 8)) >>> n & 7;
      }
      function G(e, t) {
        var n = 7 & t;
        var r = t >>> 3;
        return (e[r] | (n <= 3 ? 0 : e[r + 1] << 8)) >>> n & 31;
      }
      function z(e, t) {
        var n = 7 & t;
        var r = t >>> 3;
        return (e[r] | (n <= 1 ? 0 : e[r + 1] << 8)) >>> n & 127;
      }
      function Q(e, t, n) {
        var r = 7 & t;
        var i = t >>> 3;
        var o = (1 << n) - 1;
        var a = e[i] >>> r;
        return n < 8 - r ? a & o : (a |= e[i + 1] << 8 - r, n < 16 - r ? a & o : (a |= e[i + 2] << 16 - r, n < 24 - r ? a & o : (a |= e[i + 3] << 24 - r) & o));
      }
      function W(e, t) {
        var n = e.length;
        var r = 2 * n > t ? 2 * n : t + 5;
        var i = 0;
        if (n >= t) {
          return e;
        }
        if (m) {
          var o = E(r);
          if (e.copy) {
            e.copy(o);
          } else {
            for (; i < e.length; ++i) {
              o[i] = e[i];
            }
          }
          return o;
        }
        if (N) {
          var a = new Uint8Array(r);
          if (a.set) {
            a.set(e);
          } else {
            for (; i < e.length; ++i) {
              a[i] = e[i];
            }
          }
          return a;
        }
        e.length = r;
        return e;
      }
      function K(e) {
        for (var t = new Array(e), n = 0; n < e; ++n) {
          t[n] = 0;
        }
        return t;
      }
      var X = function () {
        var e = function (e, t) {
          for (var n = 0; n < e.length;) {
            var r = Math.min(65535, e.length - n);
            var i = n + r == e.length;
            for (t.write_shift(1, +i), t.write_shift(2, r), t.write_shift(2, 65535 & ~r); r-- > 0;) {
              t[t.l++] = e[n++];
            }
          }
          return t.l;
        };
        return function (t) {
          var n = Ut(50 + Math.floor(1.1 * t.length));
          var r = e(t, n);
          return n.slice(0, r);
        };
      }();
      function Y(e, t, n) {
        var r = 1;
        var i = 0;
        var o = 0;
        var a = 0;
        var s = 0;
        var c = e.length;
        var u = N ? new Uint16Array(32) : K(32);
        for (o = 0; o < 32; ++o) {
          u[o] = 0;
        }
        for (o = c; o < n; ++o) {
          e[o] = 0;
        }
        c = e.length;
        var l = N ? new Uint16Array(c) : K(c);
        for (o = 0; o < c; ++o) {
          u[i = e[o]]++;
          if (r < i) {
            r = i;
          }
          l[o] = 0;
        }
        for (u[0] = 0, o = 1; o <= r; ++o) {
          u[o + 16] = s = s + u[o - 1] << 1;
        }
        for (o = 0; o < c; ++o) {
          if (0 != (s = e[o])) {
            l[o] = u[s + 16]++;
          }
        }
        var f = 0;
        for (o = 0; o < c; ++o) {
          if (0 != (f = e[o])) {
            for (s = U(l[o], r) >> r - f, a = (1 << r + 4 - f) - 1; a >= 0; --a) {
              t[s | a << f] = 15 & f | o << 4;
            }
          }
        }
        return r;
      }
      var q = N ? new Uint16Array(512) : K(512);
      var $ = N ? new Uint16Array(32) : K(32);
      if (!N) {
        for (var J = 0; J < 512; ++J) {
          q[J] = 0;
        }
        for (J = 0; J < 32; ++J) {
          $[J] = 0;
        }
      }
      !function () {
        for (var e = [], t = 0; t < 32; t++) {
          e.push(5);
        }
        Y(e, $, 32);
        var n = [];
        for (t = 0; t <= 143; t++) {
          n.push(8);
        }
        for (; t <= 255; t++) {
          n.push(9);
        }
        for (; t <= 279; t++) {
          n.push(7);
        }
        for (; t <= 287; t++) {
          n.push(8);
        }
        Y(n, q, 288);
      }();
      var Z = N ? new Uint16Array(32768) : K(32768);
      var ee = N ? new Uint16Array(32768) : K(32768);
      var te = N ? new Uint16Array(128) : K(128);
      var ne = 1;
      var re = 1;
      function ie(e, t) {
        var n = G(e, t) + 257;
        var r = G(e, t += 5) + 1;
        var i = function (e, t) {
          var n = 7 & t;
          var r = t >>> 3;
          return (e[r] | (n <= 4 ? 0 : e[r + 1] << 8)) >>> n & 15;
        }(e, t += 5) + 4;
        t += 4;
        for (var o = 0, a = N ? new Uint8Array(19) : K(19), s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], c = 1, u = N ? new Uint8Array(8) : K(8), l = N ? new Uint8Array(8) : K(8), f = a.length, d = 0; d < i; ++d) {
          a[D[d]] = o = V(e, t);
          if (c < o) {
            c = o;
          }
          u[o]++;
          t += 3;
        }
        var h = 0;
        for (u[0] = 0, d = 1; d <= c; ++d) {
          l[d] = h = h + u[d - 1] << 1;
        }
        for (d = 0; d < f; ++d) {
          if (0 != (h = a[d])) {
            s[d] = l[h]++;
          }
        }
        var p = 0;
        for (d = 0; d < f; ++d) {
          if (0 != (p = a[d])) {
            h = M[s[d]] >> 8 - p;
            for (var _ = (1 << 7 - p) - 1; _ >= 0; --_) {
              te[h | _ << p] = 7 & p | d << 3;
            }
          }
        }
        var A = [];
        for (c = 1; A.length < n + r;) {
          switch (t += 7 & (h = te[z(e, t)]), h >>>= 3) {
            case 16:
              for (o = 3 + H(e, t), t += 2, h = A[A.length - 1]; o-- > 0;) {
                A.push(h);
              }
              break;
            case 17:
              for (o = 3 + V(e, t), t += 3; o-- > 0;) {
                A.push(0);
              }
              break;
            case 18:
              for (o = 11 + z(e, t), t += 7; o-- > 0;) {
                A.push(0);
              }
              break;
            default:
              A.push(h);
              if (c < h) {
                c = h;
              }
          }
        }
        var g = A.slice(0, n);
        var v = A.slice(n);
        for (d = n; d < 286; ++d) {
          g[d] = 0;
        }
        for (d = r; d < 30; ++d) {
          v[d] = 0;
        }
        ne = Y(g, Z, 286);
        re = Y(v, ee, 30);
        return t;
      }
      function oe(e, t) {
        var n = function (e, t) {
          if (3 == e[0] && !(3 & e[1])) {
            return [w(t), 2];
          }
          for (var n = 0, r = 0, i = E(t || 1 << 18), o = 0, a = i.length >>> 0, s = 0, c = 0; 0 == (1 & r);) {
            r = V(e, n);
            n += 3;
            if (r >>> 1 != 0) {
              for (r >>> 1 == 1 ? (s = 9, c = 5) : (n = ie(e, n), s = ne, c = re), !t && a < o + 32767 && (a = (i = W(i, o + 32767)).length);;) {
                var u = Q(e, n, s);
                var l = r >>> 1 == 1 ? q[u] : Z[u];
                n += 15 & l;
                if (0 === ((l >>>= 4) >>> 8 & 255)) {
                  i[o++] = l;
                } else {
                  if (256 == l) {
                    break;
                  }
                  var f = (l -= 257) < 8 ? 0 : l - 4 >> 2;
                  if (f > 5) {
                    f = 0;
                  }
                  var d = o + I[l];
                  if (f > 0) {
                    d += Q(e, n, f);
                    n += f;
                  }
                  u = Q(e, n, c);
                  n += 15 & (l = r >>> 1 == 1 ? $[u] : ee[u]);
                  var h = (l >>>= 4) < 4 ? 0 : l - 2 >> 1;
                  var p = R[l];
                  for (h > 0 && (p += Q(e, n, h), n += h), !t && a < d && (a = (i = W(i, d)).length); o < d;) {
                    i[o] = i[o - p];
                    ++o;
                  }
                }
              }
            } else {
              if (7 & n) {
                n += 8 - (7 & n);
              }
              var _ = e[n >>> 3] | e[1 + (n >>> 3)] << 8;
              n += 32;
              if (!t && a < o + _) {
                a = (i = W(i, o + _)).length;
              }
              if ("function" === typeof e.copy) {
                e.copy(i, o, n >>> 3, (n >>> 3) + _);
                o += _;
                n += 8 * _;
              } else {
                for (; _-- > 0;) {
                  i[o++] = e[n >>> 3];
                  n += 8;
                }
              }
            }
          }
          return [t ? i : i.slice(0, o), n + 7 >>> 3];
        }(e.slice(e.l || 0), t);
        e.l += n[1];
        return n[0];
      }
      function ae(e, t) {
        if (!e) {
          throw new Error(t);
        }
        if ("undefined" !== typeof console) {
          console.error(t);
        }
      }
      function se(e, t) {
        var n = e;
        jt(n, 0);
        var r = {
          FileIndex: [],
          FullPaths: []
        };
        d(r, {
          root: t.root
        });
        for (var i = n.length - 4; (80 != n[i] || 75 != n[i + 1] || 5 != n[i + 2] || 6 != n[i + 3]) && i >= 0;) {
          --i;
        }
        n.l = i + 4;
        n.l += 4;
        var o = n.read_shift(2);
        n.l += 6;
        var s = n.read_shift(4);
        for (n.l = s, i = 0; i < o; ++i) {
          n.l += 20;
          var c = n.read_shift(4);
          var u = n.read_shift(4);
          var l = n.read_shift(2);
          var f = n.read_shift(2);
          var h = n.read_shift(2);
          n.l += 8;
          var p = n.read_shift(4);
          var _ = a(n.slice(n.l + l, n.l + l + f));
          n.l += l + f + h;
          var A = n.l;
          n.l = p + 4;
          ce(n, c, u, r, _);
          n.l = A;
        }
        return r;
      }
      function ce(e, t, n, r, i) {
        e.l += 2;
        var o = e.read_shift(2);
        var s = e.read_shift(2);
        var c = function (e) {
          var t = 65535 & e.read_shift(2);
          var n = 65535 & e.read_shift(2);
          var r = new Date();
          var i = 31 & n;
          var o = 15 & (n >>>= 5);
          n >>>= 4;
          r.setMilliseconds(0);
          r.setFullYear(n + 1980);
          r.setMonth(o - 1);
          r.setDate(i);
          var a = 31 & t;
          var s = 63 & (t >>>= 5);
          t >>>= 6;
          r.setHours(t);
          r.setMinutes(s);
          r.setSeconds(a << 1);
          return r;
        }(e);
        if (8257 & o) {
          throw new Error("Unsupported ZIP encryption");
        }
        for (var u = e.read_shift(4), l = e.read_shift(4), f = e.read_shift(4), d = e.read_shift(2), h = e.read_shift(2), p = "", A = 0; A < d; ++A) {
          p += String.fromCharCode(e[e.l++]);
        }
        if (h) {
          var g = a(e.slice(e.l, e.l + h));
          if ((g[21589] || {}).mt) {
            c = g[21589].mt;
          }
          if (((i || {})[21589] || {}).mt) {
            c = i[21589].mt;
          }
        }
        e.l += h;
        var v = e.slice(e.l, e.l + l);
        switch (s) {
          case 8:
            v = function (e, t) {
              if (!_) {
                return oe(e, t);
              }
              var n = new (0, _.InflateRaw)();
              var r = n._processChunk(e.slice(e.l), n._finishFlushFlag);
              e.l += n.bytesRead;
              return r;
            }(e, f);
            break;
          case 0:
            break;
          default:
            throw new Error("Unsupported ZIP Compression method " + s);
        }
        var m = false;
        if (8 & o) {
          if (134695760 == (u = e.read_shift(4))) {
            u = e.read_shift(4);
            m = true;
          }
          l = e.read_shift(4);
          f = e.read_shift(4);
        }
        if (l != t) {
          ae(m, "Bad compressed size: " + t + " != " + l);
        }
        if (f != n) {
          ae(m, "Bad uncompressed size: " + n + " != " + f);
        }
        var y = F.buf(v, 0);
        if (u >> 0 != y >> 0) {
          ae(m, "Bad CRC32 checksum: " + u + " != " + y);
        }
        ue(r, p, v, {
          unsafe: true,
          mt: c
        });
      }
      function ue(e, t, n, r) {
        var o = r && r.unsafe;
        if (!o) {
          d(e);
        }
        var a = !o && j.find(e, t);
        if (!a) {
          var s = e.FullPaths[0];
          if (t.slice(0, s.length) == s) {
            s = t;
          } else {
            if ("/" != s.slice(-1)) {
              s += "/";
            }
            s = (s + t).replace("//", "/");
          }
          a = {
            name: i(t),
            type: 2
          };
          e.FileIndex.push(a);
          e.FullPaths.push(s);
          if (!o) {
            j.utils.cfb_gc(e);
          }
        }
        a.content = n;
        a.size = n ? n.length : 0;
        if (r) {
          if (r.CLSID) {
            a.clsid = r.CLSID;
          }
          if (r.mt) {
            a.mt = r.mt;
          }
          if (r.ct) {
            a.ct = r.ct;
          }
        }
        return a;
      }
      t.find = function (e, t) {
        var n = e.FullPaths.map(function (e) {
          return e.toUpperCase();
        });
        var r = n.map(function (e) {
          var t = e.split("/");
          return t[t.length - ("/" == e.slice(-1) ? 2 : 1)];
        });
        var i = false;
        if (47 === t.charCodeAt(0)) {
          i = true;
          t = n[0].slice(0, -1) + t;
        } else {
          i = -1 !== t.indexOf("/");
        }
        var o = t.toUpperCase();
        var a = true === i ? n.indexOf(o) : r.indexOf(o);
        if (-1 !== a) {
          return e.FileIndex[a];
        }
        var s = !o.match(B);
        for (o = o.replace(T, ""), s && (o = o.replace(B, "!")), a = 0; a < n.length; ++a) {
          if ((s ? n[a].replace(B, "!") : n[a]).replace(T, "") == o) {
            return e.FileIndex[a];
          }
          if ((s ? r[a].replace(B, "!") : r[a]).replace(T, "") == o) {
            return e.FileIndex[a];
          }
        }
        return null;
      };
      t.read = function (t, n) {
        switch (n && n.type || "base64") {
          case "file":
            return function (t, n) {
              s();
              return c(e.readFileSync(t), n);
            }(t, n);
          case "base64":
            return c(x(v.decode(t)), n);
          case "binary":
            return c(x(t), n);
        }
        return c(t, n);
      };
      t.parse = c;
      t.write = function (t, n) {
        var r = p(t, n);
        switch (n && n.type) {
          case "file":
            s();
            e.writeFileSync(n.filename, r);
            return r;
          case "binary":
            return k(r);
          case "base64":
            return v.encode(k(r));
        }
        return r;
      };
      t.writeFile = function (t, n, r) {
        s();
        var i = p(t, r);
        e.writeFileSync(n, i);
      };
      t.utils = {
        cfb_new: function (e) {
          var t = {};
          d(t, e);
          return t;
        },
        cfb_add: ue,
        cfb_del: function (e, t) {
          d(e);
          var n = j.find(e, t);
          if (n) {
            for (var r = 0; r < e.FileIndex.length; ++r) {
              if (e.FileIndex[r] == n) {
                e.FileIndex.splice(r, 1);
                e.FullPaths.splice(r, 1);
                return true;
              }
            }
          }
          return false;
        },
        cfb_mov: function (e, t, n) {
          d(e);
          var r = j.find(e, t);
          if (r) {
            for (var o = 0; o < e.FileIndex.length; ++o) {
              if (e.FileIndex[o] == r) {
                e.FileIndex[o].name = i(n);
                e.FullPaths[o] = n;
                return true;
              }
            }
          }
          return false;
        },
        cfb_gc: function (e) {
          h(e, true);
        },
        ReadShift: Rt,
        CheckField: Mt,
        prep_blob: jt,
        bconcat: S,
        use_zlib: function (e) {
          try {
            var t = new (0, e.InflateRaw)();
            t._processChunk(new Uint8Array([3, 0]), t._finishFlushFlag);
            if (!t.bytesRead) {
              throw new Error("zlib does not expose bytesRead");
            }
            _ = e;
          } catch (_l) {
            console.error("cannot use native zlib: " + (_l.message || _l));
          }
        },
        _deflateRaw: X,
        _inflateRaw: oe,
        consts: O
      };
      return t;
    }();
    try {
      M = require("./951");
    } catch (_l) {}
    function L(e) {
      return "string" === typeof e ? C(e) : Array.isArray(e) ? function (e) {
        if ("undefined" === typeof Uint8Array) {
          throw new Error("Unsupported");
        }
        return new Uint8Array(e);
      }(e) : e;
    }
    function U(e, t, n) {
      if ("undefined" !== typeof M && M.writeFileSync) {
        return n ? M.writeFileSync(e, t, n) : M.writeFileSync(e, t);
      }
      var r = "utf8" == n ? je(t) : t;
      if ("undefined" !== typeof IE_SaveFile) {
        return IE_SaveFile(r, e);
      }
      if ("undefined" !== typeof Blob) {
        var i = new Blob([L(r)], {
          type: "application/octet-stream"
        });
        if ("undefined" !== typeof navigator && navigator.msSaveBlob) {
          return navigator.msSaveBlob(i, e);
        }
        if ("undefined" !== typeof saveAs) {
          return saveAs(i, e);
        }
        if ("undefined" !== typeof URL && "undefined" !== typeof document && document.createElement && URL.createObjectURL) {
          var o = URL.createObjectURL(i);
          if ("object" === typeof chrome && "function" == typeof (chrome.downloads || {}).download) {
            if (URL.revokeObjectURL && "undefined" !== typeof setTimeout) {
              setTimeout(function () {
                URL.revokeObjectURL(o);
              }, 6e4);
            }
            return chrome.downloads.download({
              url: o,
              filename: e,
              saveAs: true
            });
          }
          var a = document.createElement("a");
          if (null != a.download) {
            a.download = e;
            a.href = o;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            if (URL.revokeObjectURL && "undefined" !== typeof setTimeout) {
              setTimeout(function () {
                URL.revokeObjectURL(o);
              }, 6e4);
            }
            return o;
          }
        }
      }
      if ("undefined" !== typeof $ && "undefined" !== typeof File && "undefined" !== typeof Folder) {
        try {
          var s = File(e);
          s.open("w");
          s.encoding = "binary";
          if (Array.isArray(t)) {
            t = O(t);
          }
          s.write(t);
          s.close();
          return t;
        } catch (_l) {
          if (!_l.message || !_l.message.match(/onstruct/)) {
            throw _l;
          }
        }
      }
      throw new Error("cannot save file " + e);
    }
    function H(e) {
      for (var t = Object.keys(e), n = [], r = 0; r < t.length; ++r) {
        if (Object.prototype.hasOwnProperty.call(e, t[r])) {
          n.push(t[r]);
        }
      }
      return n;
    }
    function V(e, t) {
      for (var n = [], r = H(e), i = 0; i !== r.length; ++i) {
        if (null == n[e[r[i]][t]]) {
          n[e[r[i]][t]] = r[i];
        }
      }
      return n;
    }
    function G(e) {
      for (var t = [], n = H(e), r = 0; r !== n.length; ++r) {
        t[e[n[r]]] = n[r];
      }
      return t;
    }
    function z(e) {
      for (var t = [], n = H(e), r = 0; r !== n.length; ++r) {
        t[e[n[r]]] = parseInt(n[r], 10);
      }
      return t;
    }
    var Q = new Date(1899, 11, 30, 0, 0, 0);
    function W(e, t) {
      var n = e.getTime();
      if (t) {
        n -= 1263168e5;
      }
      return (n - (Q.getTime() + 6e4 * (e.getTimezoneOffset() - Q.getTimezoneOffset()))) / 864e5;
    }
    var K = new Date();
    var X = Q.getTime() + 6e4 * (K.getTimezoneOffset() - Q.getTimezoneOffset());
    var Y = K.getTimezoneOffset();
    function q(e) {
      var t = new Date();
      t.setTime(24 * e * 60 * 60 * 1e3 + X);
      if (t.getTimezoneOffset() !== Y) {
        t.setTime(t.getTime() + 6e4 * (t.getTimezoneOffset() - Y));
      }
      return t;
    }
    function J(e) {
      var t = 0;
      var n = 0;
      var r = false;
      var i = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
      if (!i) {
        throw new Error("|" + e + "| is not an ISO8601 Duration");
      }
      for (var o = 1; o != i.length; ++o) {
        if (i[o]) {
          switch (n = 1, o > 3 && (r = true), i[o].slice(i[o].length - 1)) {
            case "Y":
              throw new Error("Unsupported ISO Duration Field: " + i[o].slice(i[o].length - 1));
            case "D":
              n *= 24;
            case "H":
              n *= 60;
            case "M":
              if (!r) {
                throw new Error("Unsupported ISO Duration Field: M");
              }
              n *= 60;
          }
          t += n * parseInt(i[o], 10);
        }
      }
      return t;
    }
    var Z = new Date("2017-02-19T19:06:09.000Z");
    if (isNaN(Z.getFullYear())) {
      Z = new Date("2/19/17");
    }
    var ee = 2017 == Z.getFullYear();
    function te(e, t) {
      var n = new Date(e);
      if (ee) {
        if (t > 0) {
          n.setTime(n.getTime() + 60 * n.getTimezoneOffset() * 1e3);
        } else {
          if (t < 0) {
            n.setTime(n.getTime() - 60 * n.getTimezoneOffset() * 1e3);
          }
        }
        return n;
      }
      if (e instanceof Date) {
        return e;
      }
      if (1917 == Z.getFullYear() && !isNaN(n.getFullYear())) {
        var r = n.getFullYear();
        if (!(e.indexOf("" + r) > -1)) {
          n.setFullYear(n.getFullYear() + 100);
        }
        return n;
      }
      var i = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"];
      var o = new Date(+i[0], +i[1] - 1, +i[2], +i[3] || 0, +i[4] || 0, +i[5] || 0);
      if (e.indexOf("Z") > -1) {
        o = new Date(o.getTime() - 60 * o.getTimezoneOffset() * 1e3);
      }
      return o;
    }
    function ne(e) {
      for (var t = "", n = 0; n != e.length; ++n) {
        t += String.fromCharCode(e[n]);
      }
      return t;
    }
    function re(e) {
      if ("undefined" != typeof JSON && !Array.isArray(e)) {
        return JSON.parse(JSON.stringify(e));
      }
      if ("object" != typeof e || null == e) {
        return e;
      }
      if (e instanceof Date) {
        return new Date(e.getTime());
      }
      var t = {};
      for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
        t[n] = re(e[n]);
      }
      return t;
    }
    function ie(e, t) {
      for (var n = ""; n.length < t;) {
        n += e;
      }
      return n;
    }
    function oe(e) {
      var t = Number(e);
      if (!isNaN(t)) {
        return t;
      }
      if (!/\d/.test(e)) {
        return t;
      }
      var n = 1;
      var r = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function () {
        n *= 100;
        return "";
      });
      return isNaN(t = Number(r)) ? (r = r.replace(/[(](.*)[)]/, function (e, t) {
        n = -n;
        return t;
      }), isNaN(t = Number(r)) ? t : t / n) : t / n;
    }
    function ae(e) {
      var t = new Date(e);
      var n = new Date(NaN);
      var r = t.getYear();
      var i = t.getMonth();
      var o = t.getDate();
      return isNaN(o) || r < 0 || r > 8099 ? n : (i > 0 || o > 1) && 101 != r || e.toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/) ? t : e.match(/[^-0-9:,\/\\]/) ? n : t;
    }
    var se;
    var ce = 5 == "abacaba".split(/(:?b)/i).length;
    function ue(e) {
      return e ? e.data ? _(e.data) : e.asNodeBuffer && m ? _(e.asNodeBuffer().toString("binary")) : e.asBinary ? _(e.asBinary()) : e._data && e._data.getContent ? _(ne(Array.prototype.slice.call(e._data.getContent(), 0))) : e.content && e.type ? _(ne(e.content)) : null : null;
    }
    function le(e) {
      return e && ".bin" === e.name.slice(-4) ? function (e) {
        if (!e) {
          return null;
        }
        if (e.data) {
          return p(e.data);
        }
        if (e.asNodeBuffer && m) {
          return e.asNodeBuffer();
        }
        if (e._data && e._data.getContent) {
          var t = e._data.getContent();
          return "string" == typeof t ? p(t) : Array.prototype.slice.call(t);
        }
        return e.content && e.type ? e.content : null;
      }(e) : ue(e);
    }
    function fe(e, t) {
      for (var n = e.FullPaths || H(e.files), r = t.toLowerCase(), i = r.replace(/\//g, "\\"), o = 0; o < n.length; ++o) {
        var a = n[o].toLowerCase();
        if (r == a || i == a) {
          return e.files[n[o]];
        }
      }
      return null;
    }
    function de(e, t) {
      var n = fe(e, t);
      if (null == n) {
        throw new Error("Cannot find file " + t + " in zip");
      }
      return n;
    }
    function he(e, t, n) {
      if (!n) {
        return le(de(e, t));
      }
      if (!t) {
        return null;
      }
      try {
        return he(e, t);
      } catch (_l) {
        return null;
      }
    }
    function pe(e, t, n) {
      if (!n) {
        return ue(de(e, t));
      }
      if (!t) {
        return null;
      }
      try {
        return pe(e, t);
      } catch (_l) {
        return null;
      }
    }
    function _e(e, t, n) {
      if (e.FullPaths) {
        j.utils.cfb_add(e, t, n);
      } else {
        e.file(t, n);
      }
    }
    function Ae() {
      return se ? new se() : j.utils.cfb_new();
    }
    function ge(e, t) {
      if ("/" == e.charAt(0)) {
        return e.slice(1);
      }
      var n = t.split("/");
      if ("/" != t.slice(-1)) {
        n.pop();
      }
      for (var r = e.split("/"); 0 !== r.length;) {
        var i = r.shift();
        if (".." === i) {
          n.pop();
        } else {
          if ("." !== i) {
            n.push(i);
          }
        }
      }
      return n.join("/");
    }
    if ("undefined" !== typeof JSZipSync) {
      se = JSZipSync;
    }
    if (module.exports && "undefined" === typeof se) {
      se = require("./1769");
    }
    var ve = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n";
    var me = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;
    var ye = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/gm;
    if (!ve.match(ye)) {
      ye = /<[^>]*>/g;
    }
    var be = /<\w*:/;
    var we = /<(\/?)\w+:/;
    function Ee(e, t, n) {
      for (var r = {}, i = 0, o = 0; i !== e.length && 32 !== (o = e.charCodeAt(i)) && 10 !== o && 13 !== o; ++i) {
        ;
      }
      if (!t) {
        r[0] = e.slice(0, i);
      }
      if (i === e.length) {
        return r;
      }
      var a = e.match(me);
      var s = 0;
      var c = "";
      var u = 0;
      var l = "";
      var f = "";
      var d = 1;
      if (a) {
        for (u = 0; u != a.length; ++u) {
          for (f = a[u], o = 0; o != f.length && 61 !== f.charCodeAt(o); ++o) {
            ;
          }
          for (l = f.slice(0, o).trim(); 32 == f.charCodeAt(o + 1);) {
            ++o;
          }
          for (d = 34 == (i = f.charCodeAt(o + 1)) || 39 == i ? 1 : 0, c = f.slice(o + 1 + d, f.length - d), s = 0; s != l.length && 58 !== l.charCodeAt(s); ++s) {
            ;
          }
          if (s === l.length) {
            if (l.indexOf("_") > 0) {
              l = l.slice(0, l.indexOf("_"));
            }
            r[l] = c;
            if (!n) {
              r[l.toLowerCase()] = c;
            }
          } else {
            var h = (5 === s && "xmlns" === l.slice(0, 5) ? "xmlns" : "") + l.slice(s + 1);
            if (r[h] && "ext" == l.slice(s - 3, s)) {
              continue;
            }
            r[h] = c;
            if (!n) {
              r[h.toLowerCase()] = c;
            }
          }
        }
      }
      return r;
    }
    function xe(e) {
      return e.replace(we, "<$1");
    }
    var Ce = {
      "&quot;": "\"",
      "&apos;": "'",
      "&gt;": ">",
      "&lt;": "<",
      "&amp;": "&"
    };
    var Oe = G(Ce);
    var ke = function () {
      var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi;
      var t = /_x([\da-fA-F]{4})_/gi;
      return function n(r) {
        var i = r + "";
        var o = i.indexOf("<![CDATA[");
        if (-1 == o) {
          return i.replace(e, function (e, t) {
            return Ce[e] || String.fromCharCode(parseInt(t, e.indexOf("x") > -1 ? 16 : 10)) || e;
          }).replace(t, function (e, t) {
            return String.fromCharCode(parseInt(t, 16));
          });
        }
        var a = i.indexOf("]]>");
        return n(i.slice(0, o)) + i.slice(o + 9, a) + n(i.slice(a + 3));
      };
    }();
    var Se = /[&<>'"]/g;
    var Te = /[\u0000-\u0008\u000b-\u001f]/g;
    function Be(e) {
      return (e + "").replace(Se, function (e) {
        return Oe[e];
      }).replace(Te, function (e) {
        return "_x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + "_";
      });
    }
    function De(e) {
      return Be(e).replace(/ /g, "_x0020_");
    }
    var Ie = /[\u0000-\u001f]/g;
    function Fe(e) {
      return (e + "").replace(Se, function (e) {
        return Oe[e];
      }).replace(/\n/g, "<br/>").replace(Ie, function (e) {
        return "&#x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + ";";
      });
    }
    var Re = function () {
      var e = /&#(\d+);/g;
      function t(e, t) {
        return String.fromCharCode(parseInt(t, 10));
      }
      return function (n) {
        return n.replace(e, t);
      };
    }();
    var Pe = function (e) {
      return e.replace(/(\r\n|[\r\n])/g, "&#10;");
    };
    function Ne(e) {
      switch (e) {
        case 1:
        case true:
        case "1":
        case "true":
        case "TRUE":
          return true;
        default:
          return false;
      }
    }
    var Me = function (e) {
      for (var t = "", n = 0, r = 0, i = 0, o = 0, a = 0, s = 0; n < e.length;) {
        if ((r = e.charCodeAt(n++)) < 128) {
          t += String.fromCharCode(r);
        } else {
          i = e.charCodeAt(n++);
          if (r > 191 && r < 224) {
            a = (31 & r) << 6;
            a |= 63 & i;
            t += String.fromCharCode(a);
          } else {
            o = e.charCodeAt(n++);
            if (r < 240) {
              t += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & o);
            } else {
              s = ((7 & r) << 18 | (63 & i) << 12 | (63 & o) << 6 | 63 & (a = e.charCodeAt(n++))) - 65536;
              t += String.fromCharCode(55296 + (s >>> 10 & 1023));
              t += String.fromCharCode(56320 + (1023 & s));
            }
          }
        }
      }
      return t;
    };
    var je = function (e) {
      for (var t = [], n = 0, r = 0, i = 0; n < e.length;) {
        switch (r = e.charCodeAt(n++), true) {
          case r < 128:
            t.push(String.fromCharCode(r));
            break;
          case r < 2048:
            t.push(String.fromCharCode(192 + (r >> 6)));
            t.push(String.fromCharCode(128 + (63 & r)));
            break;
          case r >= 55296 && r < 57344:
            r -= 55296;
            i = e.charCodeAt(n++) - 56320 + (r << 10);
            t.push(String.fromCharCode(240 + (i >> 18 & 7)));
            t.push(String.fromCharCode(144 + (i >> 12 & 63)));
            t.push(String.fromCharCode(128 + (i >> 6 & 63)));
            t.push(String.fromCharCode(128 + (63 & i)));
            break;
          default:
            t.push(String.fromCharCode(224 + (r >> 12)));
            t.push(String.fromCharCode(128 + (r >> 6 & 63)));
            t.push(String.fromCharCode(128 + (63 & r)));
        }
      }
      return t.join("");
    };
    if (m) {
      var Le = function (e) {
        var t;
        var n;
        var r;
        var o = i.alloc(2 * e.length);
        var a = 1;
        var s = 0;
        var c = 0;
        for (n = 0; n < e.length; n += a) {
          a = 1;
          if ((r = e.charCodeAt(n)) < 128) {
            t = r;
          } else {
            if (r < 224) {
              t = 64 * (31 & r) + (63 & e.charCodeAt(n + 1));
              a = 2;
            } else {
              if (r < 240) {
                t = 4096 * (15 & r) + 64 * (63 & e.charCodeAt(n + 1)) + (63 & e.charCodeAt(n + 2));
                a = 3;
              } else {
                a = 4;
                t = 262144 * (7 & r) + 4096 * (63 & e.charCodeAt(n + 1)) + 64 * (63 & e.charCodeAt(n + 2)) + (63 & e.charCodeAt(n + 3));
                c = 55296 + ((t -= 65536) >>> 10 & 1023);
                t = 56320 + (1023 & t);
              }
            }
          }
          if (0 !== c) {
            o[s++] = 255 & c;
            o[s++] = c >>> 8;
            c = 0;
          }
          o[s++] = t % 256;
          o[s++] = t >>> 8;
        }
        return o.slice(0, s).toString("ucs2");
      };
      var Ue = "foo bar bazâð£";
      if (Me(Ue) == Le(Ue)) {
        Me = Le;
      }
      var He = function (e) {
        return y(e, "binary").toString("utf8");
      };
      if (Me(Ue) == He(Ue)) {
        Me = He;
      }
      je = function (e) {
        return y(e, "utf8").toString("binary");
      };
    }
    var Ve = function () {
      var e = {};
      return function (t, n) {
        var r = t + "|" + (n || "");
        return e[r] ? e[r] : e[r] = new RegExp("<(?:\\w+:)?" + t + "(?: xml:space=\"preserve\")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?" + t + ">", n || "");
      };
    }();
    var Ge = function () {
      var e = [["nbsp", " "], ["middot", "·"], ["quot", "\""], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function (e) {
        return [new RegExp("&" + e[0] + ";", "ig"), e[1]];
      });
      return function (t) {
        for (var n = t.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, "\n").replace(/<[^>]*>/g, ""), r = 0; r < e.length; ++r) {
          n = n.replace(e[r][0], e[r][1]);
        }
        return n;
      };
    }();
    var ze = function () {
      var e = {};
      return function (t) {
        return undefined !== e[t] ? e[t] : e[t] = new RegExp("<(?:vt:)?" + t + ">([\\s\\S]*?)</(?:vt:)?" + t + ">", "g");
      };
    }();
    var Qe = /<\/?(?:vt:)?variant>/g;
    var We = /<(?:vt:)([^>]*)>([\s\S]*)</;
    function Ke(e, t) {
      var n = Ee(e);
      var r = e.match(ze(n.baseType)) || [];
      var i = [];
      if (r.length != n.size) {
        if (t.WTF) {
          throw new Error("unexpected vector length " + r.length + " != " + n.size);
        }
        return i;
      }
      r.forEach(function (e) {
        var t = e.replace(Qe, "").match(We);
        if (t) {
          i.push({
            v: Me(t[2]),
            t: t[1]
          });
        }
      });
      return i;
    }
    var Xe = /(^\s|\s$|\n)/;
    function Ye(e, t) {
      return "<" + e + (t.match(Xe) ? " xml:space=\"preserve\"" : "") + ">" + t + "</" + e + ">";
    }
    function qe(e) {
      return H(e).map(function (t) {
        return " " + t + "=\"" + e[t] + "\"";
      }).join("");
    }
    function $e(e, t, n) {
      return "<" + e + (null != n ? qe(n) : "") + (null != t ? (t.match(Xe) ? " xml:space=\"preserve\"" : "") + ">" + t + "</" + e : "/") + ">";
    }
    function Je(e, t) {
      try {
        return e.toISOString().replace(/\.\d*/, "");
      } catch (_l) {
        if (t) {
          throw _l;
        }
      }
      return "";
    }
    var Ze;
    var et;
    var tt = {
      dc: "http://purl.org/dc/elements/1.1/",
      dcterms: "http://purl.org/dc/terms/",
      dcmitype: "http://purl.org/dc/dcmitype/",
      mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
      r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
      sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
      vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
      xsi: "http://www.w3.org/2001/XMLSchema-instance",
      xsd: "http://www.w3.org/2001/XMLSchema",
      main: ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"]
    };
    var nt = "urn:schemas-microsoft-com:office:office";
    var rt = "urn:schemas-microsoft-com:office:excel";
    var it = "urn:schemas-microsoft-com:office:spreadsheet";
    var ot = "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882";
    var at = "http://macVmlSchemaUri";
    var st = "urn:schemas-microsoft-com:vml";
    var ct = "http://www.w3.org/TR/REC-html40";
    var ut = function (e) {
      for (var t = [], n = 0; n < e[0].length; ++n) {
        if (e[0][n]) {
          for (var r = 0, i = e[0][n].length; r < i; r += 10240) {
            t.push.apply(t, e[0][n].slice(r, r + 10240));
          }
        }
      }
      return t;
    };
    var lt = ut;
    var ft = function (e, t, n) {
      for (var r = [], i = t; i < n; i += 2) {
        r.push(String.fromCharCode(Tt(e, i)));
      }
      return r.join("").replace(T, "");
    };
    var dt = ft;
    var ht = function (e, t, n) {
      for (var r = [], i = t; i < t + n; ++i) {
        r.push(("0" + e[i].toString(16)).slice(-2));
      }
      return r.join("");
    };
    var pt = ht;
    var _t = function (e, t, n) {
      for (var r = [], i = t; i < n; i++) {
        r.push(String.fromCharCode(St(e, i)));
      }
      return r.join("");
    };
    var At = _t;
    var gt = function (e, t) {
      var n = Dt(e, t);
      return n > 0 ? _t(e, t + 4, t + 4 + n - 1) : "";
    };
    var vt = gt;
    var mt = function (e, t) {
      var n = Dt(e, t);
      return n > 0 ? _t(e, t + 4, t + 4 + n - 1) : "";
    };
    var yt = mt;
    var bt = function (e, t) {
      var n = 2 * Dt(e, t);
      return n > 0 ? _t(e, t + 4, t + 4 + n - 1) : "";
    };
    var wt = bt;
    Ze = et = function (e, t) {
      var n = Dt(e, t);
      return n > 0 ? ft(e, t + 4, t + 4 + n) : "";
    };
    var Et;
    var xt;
    var Ct = function (e, t) {
      var n = Dt(e, t);
      return n > 0 ? _t(e, t + 4, t + 4 + n) : "";
    };
    var Ot = Ct;
    Et = xt = function (e, t) {
      return function (e, t) {
        for (var n = 1 - 2 * (e[t + 7] >>> 7), r = ((127 & e[t + 7]) << 4) + (e[t + 6] >>> 4 & 15), i = 15 & e[t + 6], o = 5; o >= 0; --o) {
          i = 256 * i + e[t + o];
        }
        return 2047 == r ? 0 == i ? n * (1 / 0) : NaN : (0 == r ? r = -1022 : (r -= 1023, i += Math.pow(2, 52)), n * Math.pow(2, r - 52) * i);
      }(e, t);
    };
    var kt = function (e) {
      return Array.isArray(e);
    };
    if (m) {
      ft = function (e, t, n) {
        return i.isBuffer(e) ? e.toString("utf16le", t, n).replace(T, "") : dt(e, t, n);
      };
      ht = function (e, t, n) {
        return i.isBuffer(e) ? e.toString("hex", t, t + n) : pt(e, t, n);
      };
      gt = function (e, t) {
        if (!i.isBuffer(e)) {
          return vt(e, t);
        }
        var n = e.readUInt32LE(t);
        return n > 0 ? e.toString("utf8", t + 4, t + 4 + n - 1) : "";
      };
      mt = function (e, t) {
        if (!i.isBuffer(e)) {
          return yt(e, t);
        }
        var n = e.readUInt32LE(t);
        return n > 0 ? e.toString("utf8", t + 4, t + 4 + n - 1) : "";
      };
      bt = function (e, t) {
        if (!i.isBuffer(e)) {
          return wt(e, t);
        }
        var n = 2 * e.readUInt32LE(t);
        return e.toString("utf16le", t + 4, t + 4 + n - 1);
      };
      Ze = function (e, t) {
        if (!i.isBuffer(e)) {
          return et(e, t);
        }
        var n = e.readUInt32LE(t);
        return e.toString("utf16le", t + 4, t + 4 + n);
      };
      Ct = function (e, t) {
        if (!i.isBuffer(e)) {
          return Ot(e, t);
        }
        var n = e.readUInt32LE(t);
        return e.toString("utf8", t + 4, t + 4 + n);
      };
      _t = function (e, t, n) {
        return i.isBuffer(e) ? e.toString("utf8", t, n) : At(e, t, n);
      };
      ut = function (e) {
        return e[0].length > 0 && i.isBuffer(e[0][0]) ? i.concat(e[0]) : lt(e);
      };
      S = function (e) {
        return i.isBuffer(e[0]) ? i.concat(e) : [].concat.apply([], e);
      };
      Et = function (e, t) {
        return i.isBuffer(e) ? e.readDoubleLE(t) : xt(e, t);
      };
      kt = function (e) {
        return i.isBuffer(e) || Array.isArray(e);
      };
    }
    if ("undefined" !== typeof cptable) {
      ft = function (e, t, n) {
        return cptable.utils.decode(1200, e.slice(t, n)).replace(T, "");
      };
      _t = function (e, t, n) {
        return cptable.utils.decode(65001, e.slice(t, n));
      };
      gt = function (e, t) {
        var n = Dt(e, t);
        return n > 0 ? cptable.utils.decode(s, e.slice(t + 4, t + 4 + n - 1)) : "";
      };
      mt = function (e, t) {
        var n = Dt(e, t);
        return n > 0 ? cptable.utils.decode(a, e.slice(t + 4, t + 4 + n - 1)) : "";
      };
      bt = function (e, t) {
        var n = 2 * Dt(e, t);
        return n > 0 ? cptable.utils.decode(1200, e.slice(t + 4, t + 4 + n - 1)) : "";
      };
      Ze = function (e, t) {
        var n = Dt(e, t);
        return n > 0 ? cptable.utils.decode(1200, e.slice(t + 4, t + 4 + n)) : "";
      };
      Ct = function (e, t) {
        var n = Dt(e, t);
        return n > 0 ? cptable.utils.decode(65001, e.slice(t + 4, t + 4 + n)) : "";
      };
    }
    var St = function (e, t) {
      return e[t];
    };
    var Tt = function (e, t) {
      return 256 * e[t + 1] + e[t];
    };
    var Bt = function (e, t) {
      var n = 256 * e[t + 1] + e[t];
      return n < 32768 ? n : -1 * (65535 - n + 1);
    };
    var Dt = function (e, t) {
      return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
    };
    var It = function (e, t) {
      return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
    };
    var Ft = function (e, t) {
      return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
    };
    function Rt(e, t) {
      var n;
      var r;
      var o;
      var s;
      var c;
      var u;
      var l = "";
      var f = [];
      switch (t) {
        case "dbcs":
          if (u = this.l, m && i.isBuffer(this)) {
            l = this.slice(this.l, this.l + 2 * e).toString("utf16le");
          } else {
            for (c = 0; c < e; ++c) {
              l += String.fromCharCode(Tt(this, u));
              u += 2;
            }
          }
          e *= 2;
          break;
        case "utf8":
          l = _t(this, this.l, this.l + e);
          break;
        case "utf16le":
          e *= 2;
          l = ft(this, this.l, this.l + e);
          break;
        case "wstr":
          if ("undefined" === typeof cptable) {
            return Rt.call(this, e, "dbcs");
          }
          l = cptable.utils.decode(a, this.slice(this.l, this.l + 2 * e));
          e *= 2;
          break;
        case "lpstr-ansi":
          l = gt(this, this.l);
          e = 4 + Dt(this, this.l);
          break;
        case "lpstr-cp":
          l = mt(this, this.l);
          e = 4 + Dt(this, this.l);
          break;
        case "lpwstr":
          l = bt(this, this.l);
          e = 4 + 2 * Dt(this, this.l);
          break;
        case "lpp4":
          e = 4 + Dt(this, this.l);
          l = Ze(this, this.l);
          if (2 & e) {
            e += 2;
          }
          break;
        case "8lpp4":
          e = 4 + Dt(this, this.l);
          l = Ct(this, this.l);
          if (3 & e) {
            e += 4 - (3 & e);
          }
          break;
        case "cstr":
          for (e = 0, l = ""; 0 !== (o = St(this, this.l + e++));) {
            f.push(A(o));
          }
          l = f.join("");
          break;
        case "_wstr":
          for (e = 0, l = ""; 0 !== (o = Tt(this, this.l + e));) {
            f.push(A(o));
            e += 2;
          }
          e += 2;
          l = f.join("");
          break;
        case "dbcs-cont":
          for (l = "", u = this.l, c = 0; c < e; ++c) {
            if (this.lens && -1 !== this.lens.indexOf(u)) {
              o = St(this, u);
              this.l = u + 1;
              s = Rt.call(this, e - c, o ? "dbcs-cont" : "sbcs-cont");
              return f.join("") + s;
            }
            f.push(A(Tt(this, u)));
            u += 2;
          }
          l = f.join("");
          e *= 2;
          break;
        case "cpstr":
          if ("undefined" !== typeof cptable) {
            l = cptable.utils.decode(a, this.slice(this.l, this.l + e));
            break;
          }
        case "sbcs-cont":
          for (l = "", u = this.l, c = 0; c != e; ++c) {
            if (this.lens && -1 !== this.lens.indexOf(u)) {
              o = St(this, u);
              this.l = u + 1;
              s = Rt.call(this, e - c, o ? "dbcs-cont" : "sbcs-cont");
              return f.join("") + s;
            }
            f.push(A(St(this, u)));
            u += 1;
          }
          l = f.join("");
          break;
        default:
          switch (e) {
            case 1:
              n = St(this, this.l);
              this.l++;
              return n;
            case 2:
              n = ("i" === t ? Bt : Tt)(this, this.l);
              this.l += 2;
              return n;
            case 4:
            case -4:
              return "i" === t || 0 === (128 & this[this.l + 3]) ? (n = (e > 0 ? It : Ft)(this, this.l), this.l += 4, n) : (r = Dt(this, this.l), this.l += 4, r);
            case 8:
            case -8:
              if ("f" === t) {
                r = 8 == e ? Et(this, this.l) : Et([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0);
                this.l += 8;
                return r;
              }
              e = 8;
            case 16:
              l = ht(this, this.l, e);
          }
      }
      this.l += e;
      return l;
    }
    var Pt = function (e, t, n) {
      e[n] = 255 & t;
      e[n + 1] = t >>> 8 & 255;
    };
    function Nt(e, t, n) {
      var r = 0;
      var i = 0;
      if ("dbcs" === n) {
        for (i = 0; i != t.length; ++i) {
          Pt(this, t.charCodeAt(i), this.l + 2 * i);
        }
        r = 2 * t.length;
      } else if ("sbcs" === n) {
        if ("undefined" !== typeof cptable && 874 == s) {
          for (i = 0; i != t.length; ++i) {
            var o = cptable.utils.encode(s, t.charAt(i));
            this[this.l + i] = o[0];
          }
        } else {
          for (t = t.replace(/[^\x00-\x7F]/g, "_"), i = 0; i != t.length; ++i) {
            this[this.l + i] = 255 & t.charCodeAt(i);
          }
        }
        r = t.length;
      } else {
        if ("hex" === n) {
          for (; i < e; ++i) {
            this[this.l++] = parseInt(t.slice(2 * i, 2 * i + 2), 16) || 0;
          }
          return this;
        }
        if ("utf16le" === n) {
          var a = Math.min(this.l + e, this.length);
          for (i = 0; i < Math.min(t.length, e); ++i) {
            var c = t.charCodeAt(i);
            this[this.l++] = 255 & c;
            this[this.l++] = c >> 8;
          }
          for (; this.l < a;) {
            this[this.l++] = 0;
          }
          return this;
        }
        switch (e) {
          case 1:
            r = 1;
            this[this.l] = 255 & t;
            break;
          case 2:
            r = 2;
            this[this.l] = 255 & t;
            t >>>= 8;
            this[this.l + 1] = 255 & t;
            break;
          case 3:
            r = 3;
            this[this.l] = 255 & t;
            t >>>= 8;
            this[this.l + 1] = 255 & t;
            t >>>= 8;
            this[this.l + 2] = 255 & t;
            break;
          case 4:
            r = 4;
            (function (e, t, n) {
              e[n] = 255 & t;
              e[n + 1] = t >>> 8 & 255;
              e[n + 2] = t >>> 16 & 255;
              e[n + 3] = t >>> 24 & 255;
            })(this, t, this.l);
            break;
          case 8:
            if (r = 8, "f" === n) {
              !function (e, t, n) {
                var r = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7;
                var i = 0;
                var o = 0;
                var a = r ? -t : t;
                if (isFinite(a)) {
                  if (0 == a) {
                    i = o = 0;
                  } else {
                    i = Math.floor(Math.log(a) / Math.LN2);
                    o = a * Math.pow(2, 52 - i);
                    if (i <= -1023 && (!isFinite(o) || o < Math.pow(2, 52))) {
                      i = -1022;
                    } else {
                      o -= Math.pow(2, 52);
                      i += 1023;
                    }
                  }
                } else {
                  i = 2047;
                  o = isNaN(t) ? 26985 : 0;
                }
                for (var s = 0; s <= 5; ++s, o /= 256) {
                  e[n + s] = 255 & o;
                }
                e[n + 6] = (15 & i) << 4 | 15 & o;
                e[n + 7] = i >> 4 | r;
              }(this, t, this.l);
              break;
            }
          case 16:
            break;
          case -4:
            r = 4;
            (function (e, t, n) {
              e[n] = 255 & t;
              e[n + 1] = t >> 8 & 255;
              e[n + 2] = t >> 16 & 255;
              e[n + 3] = t >> 24 & 255;
            })(this, t, this.l);
        }
      }
      this.l += r;
      return this;
    }
    function Mt(e, t) {
      var n = ht(this, this.l, e.length >> 1);
      if (n !== e) {
        throw new Error(t + "Expected " + e + " saw " + n);
      }
      this.l += e.length >> 1;
    }
    function jt(e, t) {
      e.l = t;
      e.read_shift = Rt;
      e.chk = Mt;
      e.write_shift = Nt;
    }
    function Lt(e, t) {
      e.l += t;
    }
    function Ut(e) {
      var t = w(e);
      jt(t, 0);
      return t;
    }
    function Ht(e, t, n) {
      if (e) {
        var r;
        var i;
        var o;
        jt(e, e.l || 0);
        for (var a = e.length, s = 0, c = 0; e.l < a;) {
          if (128 & (s = e.read_shift(1))) {
            s = (127 & s) + ((127 & e.read_shift(1)) << 7);
          }
          var u = au[s] || au[65535];
          for (o = 127 & (r = e.read_shift(1)), i = 1; i < 4 && 128 & r; ++i) {
            o += (127 & (r = e.read_shift(1))) << 7 * i;
          }
          c = e.l + o;
          var l = (u.f || Lt)(e, o, n);
          e.l = c;
          if (t(l, u.n, s)) {
            return;
          }
        }
      }
    }
    function Vt() {
      var e = [];
      var t = m ? 256 : 2048;
      var n = function (e) {
        var t = Ut(e);
        jt(t, 0);
        return t;
      };
      var r = n(t);
      var i = function () {
        if (r) {
          if (r.length > r.l) {
            (r = r.slice(0, r.l)).l = r.length;
          }
          if (r.length > 0) {
            e.push(r);
          }
          r = null;
        }
      };
      var o = function (e) {
        return r && e < r.length - r.l ? r : (i(), r = n(Math.max(e + 1, t)));
      };
      return {
        next: o,
        push: function (e) {
          i();
          if (null == (r = e).l) {
            r.l = r.length;
          }
          o(t);
        },
        end: function () {
          i();
          return ut([e]);
        },
        _bufs: e
      };
    }
    function Gt(e, t, n, r) {
      var i;
      var o = +su[t];
      if (!isNaN(o)) {
        if (!r) {
          r = au[o].p || (n || []).length || 0;
        }
        i = 1 + (o >= 128 ? 1 : 0) + 1;
        if (r >= 128) {
          ++i;
        }
        if (r >= 16384) {
          ++i;
        }
        if (r >= 2097152) {
          ++i;
        }
        var a = e.next(i);
        if (o <= 127) {
          a.write_shift(1, o);
        } else {
          a.write_shift(1, 128 + (127 & o));
          a.write_shift(1, o >> 7);
        }
        for (var s = 0; 4 != s; ++s) {
          if (!(r >= 128)) {
            a.write_shift(1, r);
            break;
          }
          a.write_shift(1, 128 + (127 & r));
          r >>= 7;
        }
        if (r > 0 && kt(n)) {
          e.push(n);
        }
      }
    }
    function zt(e, t, n) {
      var r = re(e);
      if (t.s) {
        if (r.cRel) {
          r.c += t.s.c;
        }
        if (r.rRel) {
          r.r += t.s.r;
        }
      } else {
        if (r.cRel) {
          r.c += t.c;
        }
        if (r.rRel) {
          r.r += t.r;
        }
      }
      if (!n || n.biff < 12) {
        for (; r.c >= 256;) {
          r.c -= 256;
        }
        for (; r.r >= 65536;) {
          r.r -= 65536;
        }
      }
      return r;
    }
    function Qt(e, t, n) {
      var r = re(e);
      r.s = zt(r.s, t.s, n);
      r.e = zt(r.e, t.s, n);
      return r;
    }
    function Wt(e, t) {
      if (e.cRel && e.c < 0) {
        for (e = re(e); e.c < 0;) {
          e.c += t > 8 ? 16384 : 256;
        }
      }
      if (e.rRel && e.r < 0) {
        for (e = re(e); e.r < 0;) {
          e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
        }
      }
      var n = Zt(e);
      if (!(e.cRel || null == e.cRel)) {
        n = n.replace(/^([A-Z])/, "$$$1");
      }
      if (!(e.rRel || null == e.rRel)) {
        n = function (e) {
          return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
        }(n);
      }
      return n;
    }
    function Kt(e, t) {
      return 0 != e.s.r || e.s.rRel || e.e.r != (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) || e.e.rRel ? 0 != e.s.c || e.s.cRel || e.e.c != (t.biff >= 12 ? 16383 : 255) || e.e.cRel ? Wt(e.s, t.biff) + ":" + Wt(e.e, t.biff) : (e.s.rRel ? "" : "$") + Yt(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Yt(e.e.r) : (e.s.cRel ? "" : "$") + $t(e.s.c) + ":" + (e.e.cRel ? "" : "$") + $t(e.e.c);
    }
    function Xt(e) {
      return parseInt(e.replace(/\$(\d+)$/, "$1"), 10) - 1;
    }
    function Yt(e) {
      return "" + (e + 1);
    }
    function qt(e) {
      for (var t = e.replace(/^\$([A-Z])/, "$1"), n = 0, r = 0; r !== t.length; ++r) {
        n = 26 * n + t.charCodeAt(r) - 64;
      }
      return n - 1;
    }
    function $t(e) {
      if (e < 0) {
        throw new Error("invalid column " + e);
      }
      var t = "";
      for (++e; e; e = Math.floor((e - 1) / 26)) {
        t = String.fromCharCode((e - 1) % 26 + 65) + t;
      }
      return t;
    }
    function Jt(e) {
      for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
        var i = e.charCodeAt(r);
        if (i >= 48 && i <= 57) {
          t = 10 * t + (i - 48);
        } else {
          if (i >= 65 && i <= 90) {
            n = 26 * n + (i - 64);
          }
        }
      }
      return {
        c: n - 1,
        r: t - 1
      };
    }
    function Zt(e) {
      for (var t = e.c + 1, n = ""; t; t = (t - 1) / 26 | 0) {
        n = String.fromCharCode((t - 1) % 26 + 65) + n;
      }
      return n + (e.r + 1);
    }
    function en(e) {
      var t = e.indexOf(":");
      return -1 == t ? {
        s: Jt(e),
        e: Jt(e)
      } : {
        s: Jt(e.slice(0, t)),
        e: Jt(e.slice(t + 1))
      };
    }
    function tn(e, t) {
      return "undefined" === typeof t || "number" === typeof t ? tn(e.s, e.e) : ("string" !== typeof e && (e = Zt(e)), "string" !== typeof t && (t = Zt(t)), e == t ? e : e + ":" + t);
    }
    function nn(e) {
      var t = {
        s: {
          c: 0,
          r: 0
        },
        e: {
          c: 0,
          r: 0
        }
      };
      var n = 0;
      var r = 0;
      var i = 0;
      var o = e.length;
      for (n = 0; r < o && !((i = e.charCodeAt(r) - 64) < 1 || i > 26); ++r) {
        n = 26 * n + i;
      }
      for (t.s.c = --n, n = 0; r < o && !((i = e.charCodeAt(r) - 48) < 0 || i > 9); ++r) {
        n = 10 * n + i;
      }
      t.s.r = --n;
      if (r === o || 58 === e.charCodeAt(++r)) {
        t.e.c = t.s.c;
        t.e.r = t.s.r;
        return t;
      }
      for (n = 0; r != o && !((i = e.charCodeAt(r) - 64) < 1 || i > 26); ++r) {
        n = 26 * n + i;
      }
      for (t.e.c = --n, n = 0; r != o && !((i = e.charCodeAt(r) - 48) < 0 || i > 9); ++r) {
        n = 10 * n + i;
      }
      t.e.r = --n;
      return t;
    }
    function rn(e, t) {
      var n = "d" == e.t && t instanceof Date;
      if (null != e.z) {
        try {
          return e.w = D.format(e.z, n ? W(t) : t);
        } catch (_l) {}
      }
      try {
        return e.w = D.format((e.XF || {}).numFmtId || (n ? 14 : 0), n ? W(t) : t);
      } catch (_l) {
        return "" + t;
      }
    }
    function on(e, t, n) {
      return null == e || null == e.t || "z" == e.t ? "" : undefined !== e.w ? e.w : ("d" == e.t && !e.z && n && n.dateNF && (e.z = n.dateNF), rn(e, undefined == t ? e.v : t));
    }
    function an(e, t) {
      var n = t && t.sheet ? t.sheet : "Sheet1";
      var r = {};
      r[n] = e;
      return {
        SheetNames: [n],
        Sheets: r
      };
    }
    function sn(e, t, n) {
      var r = n || {};
      var i = e ? Array.isArray(e) : r.dense;
      var o = e || (i ? [] : {});
      var a = 0;
      var s = 0;
      if (o && null != r.origin) {
        if ("number" == typeof r.origin) {
          a = r.origin;
        } else {
          var c = "string" == typeof r.origin ? Jt(r.origin) : r.origin;
          a = c.r;
          s = c.c;
        }
        if (!o["!ref"]) {
          o["!ref"] = "A1:A1";
        }
      }
      var u = {
        s: {
          c: 1e7,
          r: 1e7
        },
        e: {
          c: 0,
          r: 0
        }
      };
      if (o["!ref"]) {
        var l = nn(o["!ref"]);
        u.s.c = l.s.c;
        u.s.r = l.s.r;
        u.e.c = Math.max(u.e.c, l.e.c);
        u.e.r = Math.max(u.e.r, l.e.r);
        if (-1 == a) {
          u.e.r = a = l.e.r + 1;
        }
      }
      for (var f = 0; f != t.length; ++f) {
        if (t[f]) {
          if (!Array.isArray(t[f])) {
            throw new Error("aoa_to_sheet expects an array of arrays");
          }
          for (var d = 0; d != t[f].length; ++d) {
            if ("undefined" !== typeof t[f][d]) {
              var h = {
                v: t[f][d]
              };
              var p = a + f;
              var _ = s + d;
              if (u.s.r > p) {
                u.s.r = p;
              }
              if (u.s.c > _) {
                u.s.c = _;
              }
              if (u.e.r < p) {
                u.e.r = p;
              }
              if (u.e.c < _) {
                u.e.c = _;
              }
              if (!t[f][d] || "object" !== typeof t[f][d] || Array.isArray(t[f][d]) || t[f][d] instanceof Date) {
                if (Array.isArray(h.v)) {
                  h.f = t[f][d][1];
                  h.v = h.v[0];
                }
                if (null === h.v) {
                  if (h.f) {
                    h.t = "n";
                  } else {
                    if (!r.sheetStubs) {
                      continue;
                    }
                    h.t = "z";
                  }
                } else if ("number" === typeof h.v) {
                  h.t = "n";
                } else {
                  if ("boolean" === typeof h.v) {
                    h.t = "b";
                  } else {
                    if (h.v instanceof Date) {
                      h.z = r.dateNF || D._table[14];
                      if (r.cellDates) {
                        h.t = "d";
                        h.w = D.format(h.z, W(h.v));
                      } else {
                        h.t = "n";
                        h.v = W(h.v);
                        h.w = D.format(h.z, h.v);
                      }
                    } else {
                      h.t = "s";
                    }
                  }
                }
              } else {
                h = t[f][d];
              }
              if (i) {
                if (!o[p]) {
                  o[p] = [];
                }
                if (o[p][_] && o[p][_].z) {
                  h.z = o[p][_].z;
                }
                o[p][_] = h;
              } else {
                var A = Zt({
                  c: _,
                  r: p
                });
                if (o[A] && o[A].z) {
                  h.z = o[A].z;
                }
                o[A] = h;
              }
            }
          }
        }
      }
      if (u.s.c < 1e7) {
        o["!ref"] = tn(u);
      }
      return o;
    }
    function cn(e, t) {
      return sn(null, e, t);
    }
    function un(e, t) {
      if (!t) {
        t = Ut(4);
      }
      t.write_shift(4, e);
      return t;
    }
    function ln(e) {
      var t = e.read_shift(4);
      return 0 === t ? "" : e.read_shift(t, "dbcs");
    }
    function fn(e, t) {
      var n = false;
      if (null == t) {
        n = true;
        t = Ut(4 + 2 * e.length);
      }
      t.write_shift(4, e.length);
      if (e.length > 0) {
        t.write_shift(0, e, "dbcs");
      }
      return n ? t.slice(0, t.l) : t;
    }
    function dn(e) {
      return {
        ich: e.read_shift(2),
        ifnt: e.read_shift(2)
      };
    }
    function hn(e, t) {
      var n = e.l;
      var r = e.read_shift(1);
      var i = ln(e);
      var o = [];
      var a = {
        t: i,
        h: i
      };
      if (0 !== (1 & r)) {
        for (var s = e.read_shift(4), c = 0; c != s; ++c) {
          o.push(dn(e));
        }
        a.r = o;
      } else {
        a.r = [{
          ich: 0,
          ifnt: 0
        }];
      }
      e.l = n + t;
      return a;
    }
    !function (e, t) {
      var r;
      if ("undefined" !== typeof t) {
        r = t;
      } else {
        try {
          r = require("./1082");
        } catch (_l) {
          r = null;
        }
      }
      e.rc4 = function (e, t) {
        var n = new Array(256);
        var r = 0;
        var i = 0;
        var o = 0;
        var a = 0;
        for (i = 0; 256 != i; ++i) {
          n[i] = i;
        }
        for (i = 0; 256 != i; ++i) {
          o = o + n[i] + e[i % e.length].charCodeAt(0) & 255;
          a = n[i];
          n[i] = n[o];
          n[o] = a;
        }
        i = o = 0;
        var s = w(t.length);
        for (r = 0; r != t.length; ++r) {
          o = (o + n[i = i + 1 & 255]) % 256;
          a = n[i];
          n[i] = n[o];
          n[o] = a;
          s[r] = t[r] ^ n[n[i] + n[o] & 255];
        }
        return s;
      };
      e.md5 = function (e) {
        if (!r) {
          throw new Error("Unsupported crypto");
        }
        return r.createHash("md5").update(e).digest("hex");
      };
    }({}, "undefined" !== typeof crypto ? crypto : undefined);
    var pn = hn;
    function _n(e, t) {
      var n = false;
      if (null == t) {
        n = true;
        t = Ut(23 + 4 * e.t.length);
      }
      t.write_shift(1, 1);
      fn(e.t, t);
      t.write_shift(4, 1);
      (function (e, t) {
        if (!t) {
          t = Ut(4);
        }
        t.write_shift(2, e.ich || 0);
        t.write_shift(2, e.ifnt || 0);
      })({
        ich: 0,
        ifnt: 0
      }, t);
      return n ? t.slice(0, t.l) : t;
    }
    function An(e) {
      var t = e.read_shift(4);
      var n = e.read_shift(2);
      n += e.read_shift(1) << 16;
      e.l++;
      return {
        c: t,
        iStyleRef: n
      };
    }
    function gn(e, t) {
      if (null == t) {
        t = Ut(8);
      }
      t.write_shift(-4, e.c);
      t.write_shift(3, e.iStyleRef || e.s);
      t.write_shift(1, 0);
      return t;
    }
    function vn(e) {
      var t = e.read_shift(2);
      t += e.read_shift(1) << 16;
      e.l++;
      return {
        c: -1,
        iStyleRef: t
      };
    }
    function mn(e, t) {
      if (null == t) {
        t = Ut(4);
      }
      t.write_shift(3, e.iStyleRef || e.s);
      t.write_shift(1, 0);
      return t;
    }
    var yn = ln;
    var bn = fn;
    function wn(e) {
      var t = e.read_shift(4);
      return 0 === t || 4294967295 === t ? "" : e.read_shift(t, "dbcs");
    }
    function En(e, t) {
      var n = false;
      if (null == t) {
        n = true;
        t = Ut(127);
      }
      t.write_shift(4, e.length > 0 ? e.length : 4294967295);
      if (e.length > 0) {
        t.write_shift(0, e, "dbcs");
      }
      return n ? t.slice(0, t.l) : t;
    }
    var xn = ln;
    var Cn = wn;
    var On = En;
    function kn(e) {
      var t = e.slice(e.l, e.l + 4);
      var n = 1 & t[0];
      var r = 2 & t[0];
      e.l += 4;
      t[0] &= 252;
      var i = 0 === r ? Et([0, 0, 0, 0, t[0], t[1], t[2], t[3]], 0) : It(t, 0) >> 2;
      return n ? i / 100 : i;
    }
    function Sn(e, t) {
      if (null == t) {
        t = Ut(4);
      }
      var n = 0;
      var r = 0;
      var i = 100 * e;
      if (e == (0 | e) && e >= -(1 << 29) && e < 1 << 29) {
        r = 1;
      } else {
        if (i == (0 | i) && i >= -(1 << 29) && i < 1 << 29) {
          r = 1;
          n = 1;
        }
      }
      if (!r) {
        throw new Error("unsupported RkNumber " + e);
      }
      t.write_shift(-4, ((n ? i : e) << 2) + (n + 2));
    }
    function Tn(e) {
      var t = {
        s: {},
        e: {}
      };
      t.s.r = e.read_shift(4);
      t.e.r = e.read_shift(4);
      t.s.c = e.read_shift(4);
      t.e.c = e.read_shift(4);
      return t;
    }
    var Bn = Tn;
    var Dn = function (e, t) {
      if (!t) {
        t = Ut(16);
      }
      t.write_shift(4, e.s.r);
      t.write_shift(4, e.e.r);
      t.write_shift(4, e.s.c);
      t.write_shift(4, e.e.c);
      return t;
    };
    function In(e) {
      if (e.length - e.l < 8) {
        throw "XLS Xnum Buffer underflow";
      }
      return e.read_shift(8, "f");
    }
    function Fn(e, t) {
      return (t || Ut(8)).write_shift(8, e, "f");
    }
    function Rn(e, t) {
      if (!t) {
        t = Ut(8);
      }
      if (!e || e.auto) {
        t.write_shift(4, 0);
        t.write_shift(4, 0);
        return t;
      }
      if (null != e.index) {
        t.write_shift(1, 2);
        t.write_shift(1, e.index);
      } else {
        if (null != e.theme) {
          t.write_shift(1, 6);
          t.write_shift(1, e.theme);
        } else {
          t.write_shift(1, 5);
          t.write_shift(1, 0);
        }
      }
      var n = e.tint || 0;
      if (n > 0) {
        n *= 32767;
      } else {
        if (n < 0) {
          n *= 32768;
        }
      }
      t.write_shift(2, n);
      if (e.rgb && null == e.theme) {
        var r = e.rgb || "FFFFFF";
        if ("number" == typeof r) {
          r = ("000000" + r.toString(16)).slice(-6);
        }
        t.write_shift(1, parseInt(r.slice(0, 2), 16));
        t.write_shift(1, parseInt(r.slice(2, 4), 16));
        t.write_shift(1, parseInt(r.slice(4, 6), 16));
        t.write_shift(1, 255);
      } else {
        t.write_shift(2, 0);
        t.write_shift(1, 0);
        t.write_shift(1, 0);
      }
      return t;
    }
    function Pn(e, t) {
      var n = e.read_shift(4);
      switch (n) {
        case 0:
          return "";
        case 4294967295:
        case 4294967294:
          return {
            2: "BITMAP",
            3: "METAFILEPICT",
            8: "DIB",
            14: "ENHMETAFILE"
          }[e.read_shift(4)] || "";
      }
      if (n > 400) {
        throw new Error("Unsupported Clipboard: " + n.toString(16));
      }
      e.l -= 4;
      return e.read_shift(0, 1 == t ? "lpstr" : "lpwstr");
    }
    var Nn = [80, 81];
    var Mn = {
      1: {
        n: "CodePage",
        t: 2
      },
      2: {
        n: "Category",
        t: 80
      },
      3: {
        n: "PresentationFormat",
        t: 80
      },
      4: {
        n: "ByteCount",
        t: 3
      },
      5: {
        n: "LineCount",
        t: 3
      },
      6: {
        n: "ParagraphCount",
        t: 3
      },
      7: {
        n: "SlideCount",
        t: 3
      },
      8: {
        n: "NoteCount",
        t: 3
      },
      9: {
        n: "HiddenCount",
        t: 3
      },
      10: {
        n: "MultimediaClipCount",
        t: 3
      },
      11: {
        n: "ScaleCrop",
        t: 11
      },
      12: {
        n: "HeadingPairs",
        t: 4108
      },
      13: {
        n: "TitlesOfParts",
        t: 4126
      },
      14: {
        n: "Manager",
        t: 80
      },
      15: {
        n: "Company",
        t: 80
      },
      16: {
        n: "LinksUpToDate",
        t: 11
      },
      17: {
        n: "CharacterCount",
        t: 3
      },
      19: {
        n: "SharedDoc",
        t: 11
      },
      22: {
        n: "HyperlinksChanged",
        t: 11
      },
      23: {
        n: "AppVersion",
        t: 3,
        p: "version"
      },
      24: {
        n: "DigSig",
        t: 65
      },
      26: {
        n: "ContentType",
        t: 80
      },
      27: {
        n: "ContentStatus",
        t: 80
      },
      28: {
        n: "Language",
        t: 80
      },
      29: {
        n: "Version",
        t: 80
      },
      255: {}
    };
    var jn = {
      1: {
        n: "CodePage",
        t: 2
      },
      2: {
        n: "Title",
        t: 80
      },
      3: {
        n: "Subject",
        t: 80
      },
      4: {
        n: "Author",
        t: 80
      },
      5: {
        n: "Keywords",
        t: 80
      },
      6: {
        n: "Comments",
        t: 80
      },
      7: {
        n: "Template",
        t: 80
      },
      8: {
        n: "LastAuthor",
        t: 80
      },
      9: {
        n: "RevNumber",
        t: 80
      },
      10: {
        n: "EditTime",
        t: 64
      },
      11: {
        n: "LastPrinted",
        t: 64
      },
      12: {
        n: "CreatedDate",
        t: 64
      },
      13: {
        n: "ModifiedDate",
        t: 64
      },
      14: {
        n: "PageCount",
        t: 3
      },
      15: {
        n: "WordCount",
        t: 3
      },
      16: {
        n: "CharCount",
        t: 3
      },
      17: {
        n: "Thumbnail",
        t: 71
      },
      18: {
        n: "Application",
        t: 80
      },
      19: {
        n: "DocSecurity",
        t: 3
      },
      255: {}
    };
    var Ln = {
      2147483648: {
        n: "Locale",
        t: 19
      },
      2147483651: {
        n: "Behavior",
        t: 19
      },
      1919054434: {}
    };
    !function () {
      for (var e in Ln) if (Object.prototype.hasOwnProperty.call(Ln, e)) {
        Mn[e] = jn[e] = Ln[e];
      }
    }();
    var Un = V(Mn, "n");
    var Hn = V(jn, "n");
    var Vn = {
      1: "US",
      2: "CA",
      3: "",
      7: "RU",
      20: "EG",
      30: "GR",
      31: "NL",
      32: "BE",
      33: "FR",
      34: "ES",
      36: "HU",
      39: "IT",
      41: "CH",
      43: "AT",
      44: "GB",
      45: "DK",
      46: "SE",
      47: "NO",
      48: "PL",
      49: "DE",
      52: "MX",
      55: "BR",
      61: "AU",
      64: "NZ",
      66: "TH",
      81: "JP",
      82: "KR",
      84: "VN",
      86: "CN",
      90: "TR",
      105: "JS",
      213: "DZ",
      216: "MA",
      218: "LY",
      351: "PT",
      354: "IS",
      358: "FI",
      420: "CZ",
      886: "TW",
      961: "LB",
      962: "JO",
      963: "SY",
      964: "IQ",
      965: "KW",
      966: "SA",
      971: "AE",
      972: "IL",
      974: "QA",
      981: "IR",
      65535: "US"
    };
    var Gn = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
    var zn = re([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (e) {
      return [e >> 16 & 255, e >> 8 & 255, 255 & e];
    }));
    var Qn = {
      0: "#NULL!",
      7: "#DIV/0!",
      15: "#VALUE!",
      23: "#REF!",
      29: "#NAME?",
      36: "#NUM!",
      42: "#N/A",
      43: "#GETTING_DATA",
      255: "#WTF?"
    };
    var Wn = z(Qn);
    var Kn = {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
      "application/vnd.ms-excel.binIndexWs": "TODO",
      "application/vnd.ms-excel.intlmacrosheet": "TODO",
      "application/vnd.ms-excel.binIndexMs": "TODO",
      "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
      "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
      "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
      "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
      "application/vnd.ms-excel.pivotTable": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
      "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
      "application/vnd.ms-office.chartstyle+xml": "TODO",
      "application/vnd.ms-office.chartex+xml": "TODO",
      "application/vnd.ms-excel.calcChain": "calcchains",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
      "application/vnd.ms-office.activeX": "TODO",
      "application/vnd.ms-office.activeX+xml": "TODO",
      "application/vnd.ms-excel.attachedToolbars": "TODO",
      "application/vnd.ms-excel.connections": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
      "application/vnd.ms-excel.externalLink": "links",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
      "application/vnd.ms-excel.sheetMetadata": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "TODO",
      "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
      "application/vnd.ms-excel.pivotCacheRecords": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
      "application/vnd.ms-excel.queryTable": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
      "application/vnd.ms-excel.userNames": "TODO",
      "application/vnd.ms-excel.revisionHeaders": "TODO",
      "application/vnd.ms-excel.revisionLog": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
      "application/vnd.ms-excel.tableSingleCells": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
      "application/vnd.ms-excel.slicer": "TODO",
      "application/vnd.ms-excel.slicerCache": "TODO",
      "application/vnd.ms-excel.slicer+xml": "TODO",
      "application/vnd.ms-excel.slicerCache+xml": "TODO",
      "application/vnd.ms-excel.wsSortMap": "TODO",
      "application/vnd.ms-excel.table": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
      "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
      "application/vnd.ms-excel.Timeline+xml": "TODO",
      "application/vnd.ms-excel.TimelineCache+xml": "TODO",
      "application/vnd.ms-office.vbaProject": "vba",
      "application/vnd.ms-office.vbaProjectSignature": "vba",
      "application/vnd.ms-office.volatileDependencies": "TODO",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
      "application/vnd.ms-excel.controlproperties+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.model+data": "TODO",
      "application/vnd.ms-excel.Survey+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
      "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
      "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
      "application/vnd.openxmlformats-package.relationships+xml": "rels",
      "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
      "image/png": "TODO",
      sheet: "js"
    };
    var Xn = function () {
      var e = {
        workbooks: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
          xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
          xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
          xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
          xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
        },
        strs: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
          xlsb: "application/vnd.ms-excel.sharedStrings"
        },
        comments: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
          xlsb: "application/vnd.ms-excel.comments"
        },
        sheets: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
          xlsb: "application/vnd.ms-excel.worksheet"
        },
        charts: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
          xlsb: "application/vnd.ms-excel.chartsheet"
        },
        dialogs: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
          xlsb: "application/vnd.ms-excel.dialogsheet"
        },
        macros: {
          xlsx: "application/vnd.ms-excel.macrosheet+xml",
          xlsb: "application/vnd.ms-excel.macrosheet"
        },
        styles: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
          xlsb: "application/vnd.ms-excel.styles"
        }
      };
      H(e).forEach(function (t) {
        ["xlsm", "xlam"].forEach(function (n) {
          if (!e[t][n]) {
            e[t][n] = e[t].xlsx;
          }
        });
      });
      H(e).forEach(function (t) {
        H(e[t]).forEach(function (n) {
          Kn[e[t][n]] = t;
        });
      });
      return e;
    }();
    var Yn = function (e) {
      for (var t = [], n = H(e), r = 0; r !== n.length; ++r) {
        if (null == t[e[n[r]]]) {
          t[e[n[r]]] = [];
        }
        t[e[n[r]]].push(n[r]);
      }
      return t;
    }(Kn);
    tt.CT = "http://schemas.openxmlformats.org/package/2006/content-types";
    var qn = $e("Types", null, {
      xmlns: tt.CT,
      "xmlns:xsd": tt.xsd,
      "xmlns:xsi": tt.xsi
    });
    var $n = [["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["data", "application/vnd.openxmlformats-officedocument.model+data"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", Yn.rels[0]]].map(function (e) {
      return $e("Default", null, {
        Extension: e[0],
        ContentType: e[1]
      });
    });
    var Jn = {
      WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
      SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
      HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
      VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
      XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
      XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
      XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
      CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
      CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
      VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
    };
    function Zn(e) {
      var t = e.lastIndexOf("/");
      return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
    }
    function er(e, t) {
      var n = {
        "!id": {}
      };
      if (!e) {
        return n;
      }
      if ("/" !== t.charAt(0)) {
        t = "/" + t;
      }
      var r = {};
      (e.match(ye) || []).forEach(function (e) {
        var i = Ee(e);
        if ("<Relationship" === i[0]) {
          var o = {};
          o.Type = i.Type;
          o.Target = i.Target;
          o.Id = i.Id;
          o.TargetMode = i.TargetMode;
          var a = "External" === i.TargetMode ? i.Target : ge(i.Target, t);
          n[a] = o;
          r[i.Id] = o;
        }
      });
      n["!id"] = r;
      return n;
    }
    tt.RELS = "http://schemas.openxmlformats.org/package/2006/relationships";
    var tr = $e("Relationships", null, {
      xmlns: tt.RELS
    });
    function nr(e) {
      var t = [ve, tr];
      H(e["!id"]).forEach(function (n) {
        t[t.length] = $e("Relationship", null, e["!id"][n]);
      });
      if (t.length > 2) {
        t[t.length] = "</Relationships>";
        t[1] = t[1].replace("/>", ">");
      }
      return t.join("");
    }
    var rr = [Jn.HLINK, Jn.XPATH, Jn.XMISS];
    function ir(e, t, n, r, i, o) {
      if (!i) {
        i = {};
      }
      if (!e["!id"]) {
        e["!id"] = {};
      }
      if (t < 0) {
        for (t = 1; e["!id"]["rId" + t]; ++t) {
          ;
        }
      }
      i.Id = "rId" + t;
      i.Type = r;
      i.Target = n;
      if (o) {
        i.TargetMode = o;
      } else {
        if (rr.indexOf(i.Type) > -1) {
          i.TargetMode = "External";
        }
      }
      if (e["!id"][i.Id]) {
        throw new Error("Cannot rewrite rId " + t);
      }
      e["!id"][i.Id] = i;
      e[("/" + i.Target).replace("//", "/")] = i;
      return t;
    }
    function or(e, t, n) {
      return ["  <rdf:Description rdf:about=\"" + e + "\">\n", "    <rdf:type rdf:resource=\"http://docs.oasis-open.org/ns/office/1.2/meta/" + (n || "odf") + "#" + t + "\"/>\n", "  </rdf:Description>\n"].join("");
    }
    var ar = function () {
      var e = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><office:document-meta xmlns:office=\"urn:oasis:names:tc:opendocument:xmlns:office:1.0\" xmlns:meta=\"urn:oasis:names:tc:opendocument:xmlns:meta:1.0\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" office:version=\"1.2\"><office:meta><meta:generator>SheetJS " + t.version + "</meta:generator></office:meta></office:document-meta>";
      return function () {
        return e;
      };
    }();
    var sr = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
    tt.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties";
    Jn.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
    var cr = function () {
      for (var e = new Array(sr.length), t = 0; t < sr.length; ++t) {
        var n = sr[t];
        var r = "(?:" + n[0].slice(0, n[0].indexOf(":")) + ":)" + n[0].slice(n[0].indexOf(":") + 1);
        e[t] = new RegExp("<" + r + "[^>]*>([\\s\\S]*?)</" + r + ">");
      }
      return e;
    }();
    function ur(e) {
      var t = {};
      e = Me(e);
      for (var n = 0; n < sr.length; ++n) {
        var r = sr[n];
        var i = e.match(cr[n]);
        if (null != i && i.length > 0) {
          t[r[1]] = ke(i[1]);
        }
        if ("date" === r[2] && t[r[1]]) {
          t[r[1]] = te(t[r[1]]);
        }
      }
      return t;
    }
    var lr = $e("cp:coreProperties", null, {
      "xmlns:cp": tt.CORE_PROPS,
      "xmlns:dc": tt.dc,
      "xmlns:dcterms": tt.dcterms,
      "xmlns:dcmitype": tt.dcmitype,
      "xmlns:xsi": tt.xsi
    });
    function fr(e, t, n, r, i) {
      if (null == i[e] && null != t && "" !== t) {
        i[e] = t;
        t = Be(t);
        r[r.length] = n ? $e(e, t, n) : Ye(e, t);
      }
    }
    var dr = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]];
    function hr(e, t, n, r) {
      var i = [];
      if ("string" == typeof e) {
        i = Ke(e, r);
      } else {
        for (var o = 0; o < e.length; ++o) {
          i = i.concat(e[o].map(function (e) {
            return {
              v: e
            };
          }));
        }
      }
      var a = "string" == typeof t ? Ke(t, r).map(function (e) {
        return e.v;
      }) : t;
      var s = 0;
      var c = 0;
      if (a.length > 0) {
        for (var u = 0; u !== i.length; u += 2) {
          switch (c = +i[u + 1].v, i[u].v) {
            case "Worksheets":
            case "工作表":
            case "Листы":
            case "أوراق العمل":
            case "ワークシート":
            case "גליונות עבודה":
            case "Arbeitsblätter":
            case "Çalışma Sayfaları":
            case "Feuilles de calcul":
            case "Fogli di lavoro":
            case "Folhas de cálculo":
            case "Planilhas":
            case "Regneark":
            case "Hojas de cálculo":
            case "Werkbladen":
              n.Worksheets = c;
              n.SheetNames = a.slice(s, s + c);
              break;
            case "Named Ranges":
            case "Rangos con nombre":
            case "名前付き一覧":
            case "Benannte Bereiche":
            case "Navngivne områder":
              n.NamedRanges = c;
              n.DefinedNames = a.slice(s, s + c);
              break;
            case "Charts":
            case "Diagramme":
              n.Chartsheets = c;
              n.ChartNames = a.slice(s, s + c);
          }
          s += c;
        }
      }
    }
    tt.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";
    Jn.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
    var pr = $e("Properties", null, {
      xmlns: tt.EXT_PROPS,
      "xmlns:vt": tt.vt
    });
    tt.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties";
    Jn.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties";
    var _r = /<[^>]+>[^<]*/g;
    var Ar = $e("Properties", null, {
      xmlns: tt.CUST_PROPS,
      "xmlns:vt": tt.vt
    });
    function gr(e) {
      var t = [ve, Ar];
      if (!e) {
        return t.join("");
      }
      var n = 1;
      H(e).forEach(function (r) {
        ++n;
        t[t.length] = $e("property", function (e, t) {
          switch (typeof e) {
            case "string":
              var n = $e("vt:lpwstr", Be(e));
              if (t) {
                n = n.replace(/&quot;/g, "_x0022_");
              }
              return n;
            case "number":
              return $e((0 | e) == e ? "vt:i4" : "vt:r8", Be(String(e)));
            case "boolean":
              return $e("vt:bool", e ? "true" : "false");
          }
          if (e instanceof Date) {
            return $e("vt:filetime", Je(e));
          }
          throw new Error("Unable to serialize " + e);
        }(e[r], true), {
          fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
          pid: n,
          name: Be(r)
        });
      });
      if (t.length > 2) {
        t[t.length] = "</Properties>";
        t[1] = t[1].replace("/>", ">");
      }
      return t.join("");
    }
    var vr = {
      Title: "Title",
      Subject: "Subject",
      Author: "Author",
      Keywords: "Keywords",
      Comments: "Description",
      LastAuthor: "LastAuthor",
      RevNumber: "Revision",
      Application: "AppName",
      LastPrinted: "LastPrinted",
      CreatedDate: "Created",
      ModifiedDate: "LastSaved",
      Category: "Category",
      Manager: "Manager",
      Company: "Company",
      AppVersion: "Version",
      ContentStatus: "ContentStatus",
      Identifier: "Identifier",
      Language: "Language"
    };
    var mr = G(vr);
    function yr(e, t, n) {
      e[t = mr[t] || t] = n;
    }
    function br(e) {
      var t = e.read_shift(4);
      var n = e.read_shift(4);
      return new Date(1e3 * (n / 1e7 * Math.pow(2, 32) + t / 1e7 - 11644473600)).toISOString().replace(/\.000/, "");
    }
    function wr(e, t, n) {
      var r = e.l;
      var i = e.read_shift(0, "lpstr-cp");
      if (n) {
        for (; e.l - r & 3;) {
          ++e.l;
        }
      }
      return i;
    }
    function Er(e, t, n) {
      var r = e.read_shift(0, "lpwstr");
      if (n) {
        e.l += 4 - (r.length + 1 & 3) & 3;
      }
      return r;
    }
    function xr(e, t, n) {
      return 31 === t ? Er(e) : wr(e, 0, n);
    }
    function Cr(e, t, n) {
      return xr(e, t, false === n ? 0 : 4);
    }
    function Or(e) {
      return function (e) {
        for (var t = e.read_shift(4), n = [], r = 0; r != t; ++r) {
          n[r] = e.read_shift(0, "lpstr-cp").replace(T, "");
        }
        return n;
      }(e);
    }
    function kr(e) {
      return [Dr(e, 81), Dr(e, 3)];
    }
    function Sr(e) {
      return function (e) {
        for (var t = e.read_shift(4), n = [], r = 0; r != t / 2; ++r) {
          n.push(kr(e));
        }
        return n;
      }(e);
    }
    function Tr(e, t) {
      for (var n = e.read_shift(4), r = {}, i = 0; i != n; ++i) {
        var o = e.read_shift(4);
        var a = e.read_shift(4);
        r[o] = e.read_shift(a, 1200 === t ? "utf16le" : "utf8").replace(T, "").replace(B, "!");
        if (1200 === t && a % 2) {
          e.l += 2;
        }
      }
      if (3 & e.l) {
        e.l = e.l >> 3 << 2;
      }
      return r;
    }
    function Br(e) {
      var t = e.read_shift(4);
      var n = e.slice(e.l, e.l + t);
      e.l += t;
      if ((3 & t) > 0) {
        e.l += 4 - (3 & t) & 3;
      }
      return n;
    }
    function Dr(e, t, n) {
      var r;
      var i = e.read_shift(2);
      var o = n || {};
      e.l += 2;
      if (12 !== t && i !== t && -1 === Nn.indexOf(t)) {
        throw new Error("Expected type " + t + " saw " + i);
      }
      switch (12 === t ? i : t) {
        case 2:
          r = e.read_shift(2, "i");
          if (!o.raw) {
            e.l += 2;
          }
          return r;
        case 3:
          return r = e.read_shift(4, "i");
        case 11:
          return 0 !== e.read_shift(4);
        case 19:
          return r = e.read_shift(4);
        case 30:
          return wr(e, 0, 4).replace(T, "");
        case 31:
          return Er(e);
        case 64:
          return br(e);
        case 65:
          return Br(e);
        case 71:
          return function (e) {
            var t = {};
            t.Size = e.read_shift(4);
            e.l += t.Size + 3 - (t.Size - 1) % 4;
            return t;
          }(e);
        case 80:
          return Cr(e, i, !o.raw).replace(T, "");
        case 81:
          return function (e, t) {
            if (!t) {
              throw new Error("VtUnalignedString must have positive length");
            }
            return xr(e, t, 0);
          }(e, i).replace(T, "");
        case 4108:
          return Sr(e);
        case 4126:
          return Or(e);
        default:
          throw new Error("TypedPropertyValue unrecognized type " + t + " " + i);
      }
    }
    function Ir(e, t) {
      var n = Ut(4);
      var r = Ut(4);
      switch (n.write_shift(4, 80 == e ? 31 : e), e) {
        case 3:
          r.write_shift(-4, t);
          break;
        case 5:
          (r = Ut(8)).write_shift(8, t, "f");
          break;
        case 11:
          r.write_shift(4, t ? 1 : 0);
          break;
        case 64:
          r = function (e) {
            var t = ("string" == typeof e ? new Date(Date.parse(e)) : e).getTime() / 1e3 + 11644473600;
            var n = t % Math.pow(2, 32);
            var r = (t - n) / Math.pow(2, 32);
            r *= 1e7;
            var i = (n *= 1e7) / Math.pow(2, 32) | 0;
            if (i > 0) {
              n %= Math.pow(2, 32);
              r += i;
            }
            var o = Ut(8);
            o.write_shift(4, n);
            o.write_shift(4, r);
            return o;
          }(t);
          break;
        case 31:
        case 80:
          for ((r = Ut(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2))).write_shift(4, t.length + 1), r.write_shift(0, t, "dbcs"); r.l != r.length;) {
            r.write_shift(1, 0);
          }
          break;
        default:
          throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
      }
      return S([n, r]);
    }
    function Fr(e, t) {
      var n = e.l;
      var r = e.read_shift(4);
      var i = e.read_shift(4);
      var o = [];
      var a = 0;
      var s = 0;
      var c = -1;
      var u = {};
      for (a = 0; a != i; ++a) {
        var l = e.read_shift(4);
        var f = e.read_shift(4);
        o[a] = [l, f + n];
      }
      o.sort(function (e, t) {
        return e[1] - t[1];
      });
      var h = {};
      for (a = 0; a != i; ++a) {
        if (e.l !== o[a][1]) {
          var p = true;
          if (a > 0 && t) {
            switch (t[o[a - 1][0]].t) {
              case 2:
                if (e.l + 2 === o[a][1]) {
                  e.l += 2;
                  p = false;
                }
                break;
              case 80:
              case 4108:
                if (e.l <= o[a][1]) {
                  e.l = o[a][1];
                  p = false;
                }
            }
          }
          if ((!t || 0 == a) && e.l <= o[a][1]) {
            p = false;
            e.l = o[a][1];
          }
          if (p) {
            throw new Error("Read Error: Expected address " + o[a][1] + " at " + e.l + " :" + a);
          }
        }
        if (t) {
          var _ = t[o[a][0]];
          h[_.n] = Dr(e, _.t, {
            raw: true
          });
          if ("version" === _.p) {
            h[_.n] = String(h[_.n] >> 16) + "." + ("0000" + String(65535 & h[_.n])).slice(-4);
          }
          if ("CodePage" == _.n) {
            switch (h[_.n]) {
              case 0:
                h[_.n] = 1252;
              case 874:
              case 932:
              case 936:
              case 949:
              case 950:
              case 1250:
              case 1251:
              case 1253:
              case 1254:
              case 1255:
              case 1256:
              case 1257:
              case 1258:
              case 1e4:
              case 1200:
              case 1201:
              case 1252:
              case 65e3:
              case -536:
              case 65001:
              case -535:
                d(s = h[_.n] >>> 0 & 65535);
                break;
              default:
                throw new Error("Unsupported CodePage: " + h[_.n]);
            }
          }
        } else if (1 === o[a][0]) {
          s = h.CodePage = Dr(e, 2);
          d(s);
          if (-1 !== c) {
            var A = e.l;
            e.l = o[c][1];
            u = Tr(e, s);
            e.l = A;
          }
        } else if (0 === o[a][0]) {
          if (0 === s) {
            c = a;
            e.l = o[a + 1][1];
            continue;
          }
          u = Tr(e, s);
        } else {
          var g;
          var v = u[o[a][0]];
          switch (e[e.l]) {
            case 65:
              e.l += 4;
              g = Br(e);
              break;
            case 30:
            case 31:
              e.l += 4;
              g = Cr(e, e[e.l - 4]).replace(/\u0000+$/, "");
              break;
            case 3:
              e.l += 4;
              g = e.read_shift(4, "i");
              break;
            case 19:
              e.l += 4;
              g = e.read_shift(4);
              break;
            case 5:
              e.l += 4;
              g = e.read_shift(8, "f");
              break;
            case 11:
              e.l += 4;
              g = Ur(e, 4);
              break;
            case 64:
              e.l += 4;
              g = te(br(e));
              break;
            default:
              throw new Error("unparsed value: " + e[e.l]);
          }
          h[v] = g;
        }
      }
      e.l = n + r;
      return h;
    }
    var Rr = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"].concat(["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"]);
    function Pr(e) {
      switch (typeof e) {
        case "boolean":
          return 11;
        case "number":
          return (0 | e) == e ? 3 : 5;
        case "string":
          return 31;
        case "object":
          if (e instanceof Date) {
            return 64;
          }
      }
      return -1;
    }
    function Nr(e, t, n) {
      var r = Ut(8);
      var i = [];
      var o = [];
      var a = 8;
      var s = 0;
      var c = Ut(8);
      var u = Ut(8);
      c.write_shift(4, 2);
      c.write_shift(4, 1200);
      u.write_shift(4, 1);
      o.push(c);
      i.push(u);
      a += 8 + c.length;
      if (!t) {
        (u = Ut(8)).write_shift(4, 0);
        i.unshift(u);
        var l = [Ut(4)];
        for (l[0].write_shift(4, e.length), s = 0; s < e.length; ++s) {
          var f = e[s][0];
          for ((c = Ut(8 + 2 * (f.length + 1) + (f.length % 2 ? 0 : 2))).write_shift(4, s + 2), c.write_shift(4, f.length + 1), c.write_shift(0, f, "dbcs"); c.l != c.length;) {
            c.write_shift(1, 0);
          }
          l.push(c);
        }
        c = S(l);
        o.unshift(c);
        a += 8 + c.length;
      }
      for (s = 0; s < e.length; ++s) {
        if ((!t || t[e[s][0]]) && !(Rr.indexOf(e[s][0]) > -1) && null != e[s][1]) {
          var d = e[s][1];
          var h = 0;
          if (t) {
            var p = n[h = +t[e[s][0]]];
            if ("version" == p.p && "string" == typeof d) {
              var _ = d.split(".");
              d = (+_[0] << 16) + (+_[1] || 0);
            }
            c = Ir(p.t, d);
          } else {
            var A = Pr(d);
            if (-1 == A) {
              A = 31;
              d = String(d);
            }
            c = Ir(A, d);
          }
          o.push(c);
          (u = Ut(8)).write_shift(4, t ? h : 2 + s);
          i.push(u);
          a += 8 + c.length;
        }
      }
      var g = 8 * (o.length + 1);
      for (s = 0; s < o.length; ++s) {
        i[s].write_shift(4, g);
        g += o[s].length;
      }
      r.write_shift(4, a);
      r.write_shift(4, o.length);
      return S([r].concat(i).concat(o));
    }
    function Mr(e, t, n) {
      var r = e.content;
      if (!r) {
        return {};
      }
      jt(r, 0);
      var i;
      var o;
      var a;
      var s;
      var c = 0;
      r.chk("feff", "Byte Order: ");
      r.read_shift(2);
      var u = r.read_shift(4);
      var l = r.read_shift(16);
      if (l !== j.utils.consts.HEADER_CLSID && l !== n) {
        throw new Error("Bad PropertySet CLSID " + l);
      }
      if (1 !== (i = r.read_shift(4)) && 2 !== i) {
        throw new Error("Unrecognized #Sets: " + i);
      }
      o = r.read_shift(16);
      s = r.read_shift(4);
      if (1 === i && s !== r.l) {
        throw new Error("Length mismatch: " + s + " !== " + r.l);
      }
      if (2 === i) {
        a = r.read_shift(16);
        c = r.read_shift(4);
      }
      var f;
      var d = Fr(r, t);
      var h = {
        SystemIdentifier: u
      };
      for (var p in d) h[p] = d[p];
      h.FMTID = o;
      if (1 === i) {
        return h;
      }
      if (c - r.l == 2) {
        r.l += 2;
      }
      if (r.l !== c) {
        throw new Error("Length mismatch 2: " + r.l + " !== " + c);
      }
      try {
        f = Fr(r, null);
      } catch (_l) {}
      for (p in f) h[p] = f[p];
      h.FMTID = [o, a];
      return h;
    }
    function jr(e, t, n, r, i, o) {
      var a = Ut(i ? 68 : 48);
      var s = [a];
      a.write_shift(2, 65534);
      a.write_shift(2, 0);
      a.write_shift(4, 842412599);
      a.write_shift(16, j.utils.consts.HEADER_CLSID, "hex");
      a.write_shift(4, i ? 2 : 1);
      a.write_shift(16, t, "hex");
      a.write_shift(4, i ? 68 : 48);
      var c = Nr(e, n, r);
      s.push(c);
      if (i) {
        var u = Nr(i, null, null);
        a.write_shift(16, o, "hex");
        a.write_shift(4, 68 + c.length);
        s.push(u);
      }
      return S(s);
    }
    function Lr(e, t) {
      e.read_shift(t);
      return null;
    }
    function Ur(e, t) {
      return 1 === e.read_shift(t);
    }
    function Hr(e, t) {
      if (!t) {
        t = Ut(2);
      }
      t.write_shift(2, +!!e);
      return t;
    }
    function Vr(e) {
      return e.read_shift(2, "u");
    }
    function Gr(e, t) {
      if (!t) {
        t = Ut(2);
      }
      t.write_shift(2, e);
      return t;
    }
    function zr(e, t) {
      return function (e, t, n) {
        for (var r = [], i = e.l + t; e.l < i;) {
          r.push(n(e, i - e.l));
        }
        if (i !== e.l) {
          throw new Error("Slurp error");
        }
        return r;
      }(e, t, Vr);
    }
    function Qr(e, t, n) {
      var r = e.read_shift(n && n.biff >= 12 ? 2 : 1);
      var i = "sbcs-cont";
      var o = a;
      if (n && n.biff >= 8) {
        a = 1200;
      }
      if (n && 8 != n.biff) {
        if (12 == n.biff) {
          i = "wstr";
        }
      } else {
        if (e.read_shift(1)) {
          i = "dbcs-cont";
        }
      }
      if (n.biff >= 2 && n.biff <= 5) {
        i = "cpstr";
      }
      var s = r ? e.read_shift(r, i) : "";
      a = o;
      return s;
    }
    function Wr(e) {
      var t = a;
      a = 1200;
      var n;
      var r = e.read_shift(2);
      var i = e.read_shift(1);
      var o = 4 & i;
      var s = 8 & i;
      var c = 1 + (1 & i);
      var u = 0;
      var l = {};
      if (s) {
        u = e.read_shift(2);
      }
      if (o) {
        n = e.read_shift(4);
      }
      var f = 2 == c ? "dbcs-cont" : "sbcs-cont";
      var d = 0 === r ? "" : e.read_shift(r, f);
      if (s) {
        e.l += 4 * u;
      }
      if (o) {
        e.l += n;
      }
      l.t = d;
      if (!s) {
        l.raw = "<t>" + l.t + "</t>";
        l.r = l.t;
      }
      a = t;
      return l;
    }
    function Kr(e) {
      var t = e.t || "";
      var n = Ut(3);
      n.write_shift(2, t.length);
      n.write_shift(1, 1);
      var r = Ut(2 * t.length);
      r.write_shift(2 * t.length, t, "utf16le");
      return S([n, r]);
    }
    function Xr(e, t, n) {
      if (n) {
        if (n.biff >= 2 && n.biff <= 5) {
          return e.read_shift(t, "cpstr");
        }
        if (n.biff >= 12) {
          return e.read_shift(t, "dbcs-cont");
        }
      }
      return 0 === e.read_shift(1) ? e.read_shift(t, "sbcs-cont") : e.read_shift(t, "dbcs-cont");
    }
    function Yr(e, t, n) {
      var r = e.read_shift(n && 2 == n.biff ? 1 : 2);
      return 0 === r ? (e.l++, "") : Xr(e, r, n);
    }
    function qr(e, t, n) {
      if (n.biff > 5) {
        return Yr(e, 0, n);
      }
      var r = e.read_shift(1);
      return 0 === r ? (e.l++, "") : e.read_shift(r, n.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
    }
    function $r(e, t, n) {
      if (!n) {
        n = Ut(3 + 2 * e.length);
      }
      n.write_shift(2, e.length);
      n.write_shift(1, 1);
      n.write_shift(31, e, "utf16le");
      return n;
    }
    function Jr(e, t) {
      var n = e.read_shift(16);
      switch (16, n) {
        case "e0c9ea79f9bace118c8200aa004ba90b":
          return function (e) {
            var t = e.read_shift(4);
            var n = e.l;
            var r = false;
            if (t > 24) {
              e.l += t - 24;
              if ("795881f43b1d7f48af2c825dc4852763" === e.read_shift(16)) {
                r = true;
              }
              e.l = n;
            }
            var i = e.read_shift((r ? t - 24 : t) >> 1, "utf16le").replace(T, "");
            if (r) {
              e.l += 24;
            }
            return i;
          }(e);
        case "0303000000000000c000000000000046":
          return function (e) {
            e.l += 2;
            var t = e.read_shift(0, "lpstr-ansi");
            e.l += 2;
            if (57005 != e.read_shift(2)) {
              throw new Error("Bad FileMoniker");
            }
            if (0 === e.read_shift(4)) {
              return t.replace(/\\/g, "/");
            }
            var n = e.read_shift(4);
            if (3 != e.read_shift(2)) {
              throw new Error("Bad FileMoniker");
            }
            return e.read_shift(n >> 1, "utf16le").replace(T, "");
          }(e);
        default:
          throw new Error("Unsupported Moniker " + n);
      }
    }
    function Zr(e) {
      var t = e.read_shift(4);
      return t > 0 ? e.read_shift(t, "utf16le").replace(T, "") : "";
    }
    function ei(e) {
      var t = Ut(512);
      var n = 0;
      var r = e.Target;
      var i = r.indexOf("#") > -1 ? 31 : 23;
      switch (r.charAt(0)) {
        case "#":
          i = 28;
          break;
        case ".":
          i &= -3;
      }
      t.write_shift(4, 2);
      t.write_shift(4, i);
      var o = [8, 6815827, 6619237, 4849780, 83];
      for (n = 0; n < o.length; ++n) {
        t.write_shift(4, o[n]);
      }
      if (28 == i) {
        for (r = r.slice(1), t.write_shift(4, r.length + 1), n = 0; n < r.length; ++n) {
          t.write_shift(2, r.charCodeAt(n));
        }
        t.write_shift(2, 0);
      } else if (2 & i) {
        for (o = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < o.length; ++n) {
          t.write_shift(1, parseInt(o[n], 16));
        }
        for (t.write_shift(4, 2 * (r.length + 1)), n = 0; n < r.length; ++n) {
          t.write_shift(2, r.charCodeAt(n));
        }
        t.write_shift(2, 0);
      } else {
        for (o = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), n = 0; n < o.length; ++n) {
          t.write_shift(1, parseInt(o[n], 16));
        }
        for (var a = 0; "../" == r.slice(3 * a, 3 * a + 3) || "..\\" == r.slice(3 * a, 3 * a + 3);) {
          ++a;
        }
        for (t.write_shift(2, a), t.write_shift(4, r.length + 1), n = 0; n < r.length; ++n) {
          t.write_shift(1, 255 & r.charCodeAt(n));
        }
        for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), n = 0; n < 6; ++n) {
          t.write_shift(4, 0);
        }
      }
      return t.slice(0, t.l);
    }
    function ti(e) {
      return [e.read_shift(1), e.read_shift(1), e.read_shift(1), e.read_shift(1)];
    }
    function ni(e, t) {
      var n = ti(e);
      n[3] = 0;
      return n;
    }
    function ri(e) {
      return {
        r: e.read_shift(2),
        c: e.read_shift(2),
        ixfe: e.read_shift(2)
      };
    }
    function ii(e, t, n, r) {
      if (!r) {
        r = Ut(6);
      }
      r.write_shift(2, e);
      r.write_shift(2, t);
      r.write_shift(2, n || 0);
      return r;
    }
    function oi(e, t, n) {
      var r = n.biff > 8 ? 4 : 2;
      return [e.read_shift(r), e.read_shift(r, "i"), e.read_shift(r, "i")];
    }
    function ai(e) {
      return [e.read_shift(2), kn(e)];
    }
    function si(e) {
      var t = e.read_shift(2);
      var n = e.read_shift(2);
      return {
        s: {
          c: e.read_shift(2),
          r: t
        },
        e: {
          c: e.read_shift(2),
          r: n
        }
      };
    }
    function ci(e, t) {
      if (!t) {
        t = Ut(8);
      }
      t.write_shift(2, e.s.r);
      t.write_shift(2, e.e.r);
      t.write_shift(2, e.s.c);
      t.write_shift(2, e.e.c);
      return t;
    }
    function ui(e) {
      var t = e.read_shift(2);
      var n = e.read_shift(2);
      return {
        s: {
          c: e.read_shift(1),
          r: t
        },
        e: {
          c: e.read_shift(1),
          r: n
        }
      };
    }
    var li = ui;
    function fi(e) {
      e.l += 4;
      var t = e.read_shift(2);
      var n = e.read_shift(2);
      var r = e.read_shift(2);
      e.l += 12;
      return [n, t, r];
    }
    function di(e) {
      e.l += 2;
      e.l += e.read_shift(2);
    }
    var hi = {
      0: di,
      4: di,
      5: di,
      6: di,
      7: function (e) {
        e.l += 4;
        e.cf = e.read_shift(2);
        return {};
      },
      8: di,
      9: di,
      10: di,
      11: di,
      12: di,
      13: function (e) {
        var t = {};
        e.l += 4;
        e.l += 16;
        t.fSharedNote = e.read_shift(2);
        e.l += 4;
        return t;
      },
      14: di,
      15: di,
      16: di,
      17: di,
      18: di,
      19: di,
      20: di,
      21: fi
    };
    function pi(e, t) {
      var n = {
        BIFFVer: 0,
        dt: 0
      };
      switch (n.BIFFVer = e.read_shift(2), (t -= 2) >= 2 && (n.dt = e.read_shift(2), e.l -= 2), n.BIFFVer) {
        case 1536:
        case 1280:
        case 1024:
        case 768:
        case 512:
        case 2:
        case 7:
          break;
        default:
          if (t > 6) {
            throw new Error("Unexpected BIFF Ver " + n.BIFFVer);
          }
      }
      e.read_shift(t);
      return n;
    }
    function _i(e, t, n) {
      var r = 1536;
      var i = 16;
      switch (n.bookType) {
        case "biff8":
          break;
        case "biff5":
          r = 1280;
          i = 8;
          break;
        case "biff4":
          r = 4;
          i = 6;
          break;
        case "biff3":
          r = 3;
          i = 6;
          break;
        case "biff2":
          r = 2;
          i = 4;
          break;
        case "xla":
          break;
        default:
          throw new Error("unsupported BIFF version");
      }
      var o = Ut(i);
      o.write_shift(2, r);
      o.write_shift(2, t);
      if (i > 4) {
        o.write_shift(2, 29282);
      }
      if (i > 6) {
        o.write_shift(2, 1997);
      }
      if (i > 8) {
        o.write_shift(2, 49161);
        o.write_shift(2, 1);
        o.write_shift(2, 1798);
        o.write_shift(2, 0);
      }
      return o;
    }
    function Ai(e, t) {
      var n = !t || t.biff >= 8 ? 2 : 1;
      var r = Ut(8 + n * e.name.length);
      r.write_shift(4, e.pos);
      r.write_shift(1, e.hs || 0);
      r.write_shift(1, e.dt);
      r.write_shift(1, e.name.length);
      if (t.biff >= 8) {
        r.write_shift(1, 1);
      }
      r.write_shift(n * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
      var i = r.slice(0, r.l);
      i.l = r.l;
      return i;
    }
    function gi(e, t, n) {
      var r = 0;
      if (!(n && 2 == n.biff)) {
        r = e.read_shift(2);
      }
      var i = e.read_shift(2);
      if (n && 2 == n.biff) {
        r = 1 - (i >> 15);
        i &= 32767;
      }
      return [{
        Unsynced: 1 & r,
        DyZero: (2 & r) >> 1,
        ExAsc: (4 & r) >> 2,
        ExDsc: (8 & r) >> 3
      }, i];
    }
    function vi(e, t, n, r) {
      var i = n && 5 == n.biff;
      if (!r) {
        r = Ut(i ? 3 + t.length : 5 + 2 * t.length);
      }
      r.write_shift(2, e);
      r.write_shift(i ? 1 : 2, t.length);
      if (!i) {
        r.write_shift(1, 1);
      }
      r.write_shift((i ? 1 : 2) * t.length, t, i ? "sbcs" : "utf16le");
      var o = r.length > r.l ? r.slice(0, r.l) : r;
      if (null == o.l) {
        o.l = o.length;
      }
      return o;
    }
    var mi = qr;
    function yi(e, t, n) {
      var r = e.l + t;
      var i = 8 != n.biff && n.biff ? 2 : 4;
      var o = e.read_shift(i);
      var a = e.read_shift(i);
      var s = e.read_shift(2);
      var c = e.read_shift(2);
      e.l = r;
      return {
        s: {
          r: o,
          c: s
        },
        e: {
          r: a,
          c: c
        }
      };
    }
    function bi(e, t, n, r) {
      var i = n && 5 == n.biff;
      if (!r) {
        r = Ut(i ? 16 : 20);
      }
      r.write_shift(2, 0);
      if (e.style) {
        r.write_shift(2, e.numFmtId || 0);
        r.write_shift(2, 65524);
      } else {
        r.write_shift(2, e.numFmtId || 0);
        r.write_shift(2, t << 4);
      }
      r.write_shift(4, 0);
      r.write_shift(4, 0);
      if (!i) {
        r.write_shift(4, 0);
      }
      r.write_shift(2, 0);
      return r;
    }
    function wi(e, t, n) {
      var r = ri(e);
      if (2 == n.biff) {
        ++e.l;
      }
      var i = function (e) {
        var t = e.read_shift(1);
        return 1 === e.read_shift(1) ? t : 1 === t;
      }(e);
      r.val = i;
      r.t = true === i || false === i ? "b" : "e";
      return r;
    }
    function Ei(e, t, n, r, i, o) {
      var a = Ut(8);
      ii(e, t, r, a);
      (function (e, t, n) {
        if (!n) {
          n = Ut(2);
        }
        n.write_shift(1, +e);
        n.write_shift(1, "e" == t ? 1 : 0);
      })(n, o, a);
      return a;
    }
    var xi = function (e, t, n) {
      return 0 === t ? "" : qr(e, 0, n);
    };
    function Ci(e, t, n) {
      var r;
      var i = e.read_shift(2);
      var o = {
        fBuiltIn: 1 & i,
        fWantAdvise: i >>> 1 & 1,
        fWantPict: i >>> 2 & 1,
        fOle: i >>> 3 & 1,
        fOleLink: i >>> 4 & 1,
        cf: i >>> 5 & 1023,
        fIcon: i >>> 15 & 1
      };
      if (14849 === n.sbcch) {
        r = function (e, t, n) {
          e.l += 4;
          t -= 4;
          var r = e.l + t;
          var i = Qr(e, 0, n);
          var o = e.read_shift(2);
          if (o !== (r -= e.l)) {
            throw new Error("Malformed AddinUdf: padding = " + r + " != " + o);
          }
          e.l += o;
          return i;
        }(e, t - 2, n);
      }
      o.body = r || e.read_shift(t - 2);
      if ("string" === typeof r) {
        o.Name = r;
      }
      return o;
    }
    var Oi = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"];
    function ki(e, t, n) {
      var r = e.l + t;
      var i = e.read_shift(2);
      var o = e.read_shift(1);
      var a = e.read_shift(1);
      var s = e.read_shift(n && 2 == n.biff ? 1 : 2);
      var c = 0;
      if (!n || n.biff >= 5) {
        if (5 != n.biff) {
          e.l += 2;
        }
        c = e.read_shift(2);
        if (5 == n.biff) {
          e.l += 2;
        }
        e.l += 4;
      }
      var u = Xr(e, a, n);
      if (32 & i) {
        u = Oi[u.charCodeAt(0)];
      }
      var l = r - e.l;
      if (n && 2 == n.biff) {
        --l;
      }
      return {
        chKey: o,
        Name: u,
        itab: c,
        rgce: r != e.l && 0 !== s && l > 0 ? function (e, t, n, r) {
          var i;
          var o = e.l + t;
          var a = Qa(e, r, n);
          if (o !== e.l) {
            i = za(e, o - e.l, a, n);
          }
          return [a, i];
        }(e, l, n, s) : []
      };
    }
    function Si(e, t, n) {
      if (n.biff < 8) {
        return function (e, t, n) {
          if (3 == e[e.l + 1]) {
            e[e.l]++;
          }
          var r = Qr(e, 0, n);
          return 3 == r.charCodeAt(0) ? r.slice(1) : r;
        }(e, 0, n);
      }
      for (var r = [], i = e.l + t, o = e.read_shift(n.biff > 8 ? 4 : 2); 0 !== o--;) {
        r.push(oi(e, n.biff, n));
      }
      if (e.l != i) {
        throw new Error("Bad ExternSheet: " + e.l + " != " + i);
      }
      return r;
    }
    function Ti(e, t, n) {
      var r = li(e, 6);
      switch (n.biff) {
        case 2:
          e.l++;
          t -= 7;
          break;
        case 3:
        case 4:
          e.l += 2;
          t -= 8;
          break;
        default:
          e.l += 6;
          t -= 12;
      }
      return [r, Ja(e, t, n)];
    }
    var Bi = [];
    function Di(e) {
      var t = Ut(24);
      var n = Jt(e[0]);
      t.write_shift(2, n.r);
      t.write_shift(2, n.r);
      t.write_shift(2, n.c);
      t.write_shift(2, n.c);
      for (var r = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), i = 0; i < 16; ++i) {
        t.write_shift(1, parseInt(r[i], 16));
      }
      return S([t, ei(e[1])]);
    }
    function Ii(e) {
      var t = e[1].Tooltip;
      var n = Ut(10 + 2 * (t.length + 1));
      n.write_shift(2, 2048);
      var r = Jt(e[0]);
      n.write_shift(2, r.r);
      n.write_shift(2, r.r);
      n.write_shift(2, r.c);
      n.write_shift(2, r.c);
      for (var i = 0; i < t.length; ++i) {
        n.write_shift(2, t.charCodeAt(i));
      }
      n.write_shift(2, 0);
      return n;
    }
    function Fi(e, t, n) {
      if (!n.cellStyles) {
        return Lt(e, t);
      }
      var r = n && n.biff >= 12 ? 4 : 2;
      var i = e.read_shift(r);
      var o = e.read_shift(r);
      var a = e.read_shift(r);
      var s = e.read_shift(r);
      var c = e.read_shift(2);
      if (2 == r) {
        e.l += 2;
      }
      var u = {
        s: i,
        e: o,
        w: a,
        ixfe: s,
        flags: c
      };
      if (n.biff >= 5 || !n.biff) {
        u.level = c >> 8 & 7;
      }
      return u;
    }
    Bi[8] = function (e, t) {
      var n = e.l + t;
      e.l += 10;
      var r = e.read_shift(2);
      e.l += 4;
      e.l += 2;
      e.l += 2;
      e.l += 2;
      e.l += 4;
      var i = e.read_shift(1);
      e.l += i;
      e.l = n;
      return {
        fmt: r
      };
    };
    var Ri = ri;
    var Pi = zr;
    var Ni = Yr;
    var Mi = function () {
      var e = {
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
        8: 865,
        9: 437,
        10: 850,
        11: 437,
        13: 437,
        14: 850,
        15: 437,
        16: 850,
        17: 437,
        18: 850,
        19: 932,
        20: 850,
        21: 437,
        22: 850,
        23: 865,
        24: 437,
        25: 437,
        26: 850,
        27: 437,
        28: 863,
        29: 850,
        31: 852,
        34: 852,
        35: 852,
        36: 860,
        37: 850,
        38: 866,
        55: 850,
        64: 852,
        77: 936,
        78: 949,
        79: 950,
        80: 874,
        87: 1252,
        88: 1252,
        89: 1252,
        108: 863,
        134: 737,
        135: 852,
        136: 857,
        204: 1257,
        255: 16969
      };
      var t = G({
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127
      });
      function n(t, n) {
        var r = n || {};
        if (!r.dateNF) {
          r.dateNF = "yyyymmdd";
        }
        return cn(function (t, n) {
          var r = [];
          var i = w(1);
          switch (n.type) {
            case "base64":
              i = x(v.decode(t));
              break;
            case "binary":
              i = x(t);
              break;
            case "buffer":
            case "array":
              i = t;
          }
          jt(i, 0);
          var o = i.read_shift(1);
          var a = !!(136 & o);
          var s = false;
          var c = false;
          switch (o) {
            case 2:
            case 3:
              break;
            case 48:
            case 49:
              s = true;
              a = true;
              break;
            case 131:
            case 139:
              break;
            case 140:
              c = true;
              break;
            case 245:
              break;
            default:
              throw new Error("DBF Unsupported Version: " + o.toString(16));
          }
          var u = 0;
          var l = 521;
          if (2 == o) {
            u = i.read_shift(2);
          }
          i.l += 3;
          if (2 != o) {
            u = i.read_shift(4);
          }
          if (u > 1048576) {
            u = 1e6;
          }
          if (2 != o) {
            l = i.read_shift(2);
          }
          var f = i.read_shift(2);
          var d = n.codepage || 1252;
          if (2 != o) {
            i.l += 16;
            i.read_shift(1);
            if (0 !== i[i.l]) {
              d = e[i[i.l]];
            }
            i.l += 1;
            i.l += 2;
          }
          if (c) {
            i.l += 36;
          }
          for (var h = [], p = {}, _ = Math.min(i.length, 2 == o ? 521 : l - 10 - (s ? 264 : 0)), A = c ? 32 : 11; i.l < _ && 13 != i[i.l];) {
            switch ((p = {}).name = cptable.utils.decode(d, i.slice(i.l, i.l + A)).replace(/[\u0000\r\n].*$/g, ""), i.l += A, p.type = String.fromCharCode(i.read_shift(1)), 2 == o || c || (p.offset = i.read_shift(4)), p.len = i.read_shift(1), 2 == o && (p.offset = i.read_shift(2)), p.dec = i.read_shift(1), p.name.length && h.push(p), 2 != o && (i.l += c ? 13 : 14), p.type) {
              case "B":
                if (!(s && 8 == p.len || !n.WTF)) {
                  console.log("Skipping " + p.name + ":" + p.type);
                }
                break;
              case "G":
              case "P":
                if (n.WTF) {
                  console.log("Skipping " + p.name + ":" + p.type);
                }
                break;
              case "+":
              case "0":
              case "@":
              case "C":
              case "D":
              case "F":
              case "I":
              case "L":
              case "M":
              case "N":
              case "O":
              case "T":
              case "Y":
                break;
              default:
                throw new Error("Unknown Field Type: " + p.type);
            }
          }
          if (13 !== i[i.l]) {
            i.l = l - 1;
          }
          if (13 !== i.read_shift(1)) {
            throw new Error("DBF Terminator not found " + i.l + " " + i[i.l]);
          }
          i.l = l;
          var g = 0;
          var m = 0;
          for (r[0] = [], m = 0; m != h.length; ++m) {
            r[0][m] = h[m].name;
          }
          for (; u-- > 0;) {
            if (42 !== i[i.l]) {
              for (++i.l, r[++g] = [], m = 0, m = 0; m != h.length; ++m) {
                var y = i.slice(i.l, i.l + h[m].len);
                i.l += h[m].len;
                jt(y, 0);
                var b = cptable.utils.decode(d, y);
                switch (h[m].type) {
                  case "C":
                    if (b.trim().length) {
                      r[g][m] = b.replace(/\s+$/, "");
                    }
                    break;
                  case "D":
                    if (8 === b.length) {
                      r[g][m] = new Date(+b.slice(0, 4), +b.slice(4, 6) - 1, +b.slice(6, 8));
                    } else {
                      r[g][m] = b;
                    }
                    break;
                  case "F":
                    r[g][m] = parseFloat(b.trim());
                    break;
                  case "+":
                  case "I":
                    r[g][m] = c ? 2147483648 ^ y.read_shift(-4, "i") : y.read_shift(4, "i");
                    break;
                  case "L":
                    switch (b.trim().toUpperCase()) {
                      case "Y":
                      case "T":
                        r[g][m] = true;
                        break;
                      case "N":
                      case "F":
                        r[g][m] = false;
                        break;
                      case "":
                      case "?":
                        break;
                      default:
                        throw new Error("DBF Unrecognized L:|" + b + "|");
                    }
                    break;
                  case "M":
                    if (!a) {
                      throw new Error("DBF Unexpected MEMO for type " + o.toString(16));
                    }
                    r[g][m] = "##MEMO##" + (c ? parseInt(b.trim(), 10) : y.read_shift(4));
                    break;
                  case "N":
                    if ((b = b.replace(/\u0000/g, "").trim()) && "." != b) {
                      r[g][m] = +b || 0;
                    }
                    break;
                  case "@":
                    r[g][m] = new Date(y.read_shift(-8, "f") - 621356832e5);
                    break;
                  case "T":
                    r[g][m] = new Date(864e5 * (y.read_shift(4) - 2440588) + y.read_shift(4));
                    break;
                  case "Y":
                    r[g][m] = y.read_shift(4, "i") / 1e4;
                    break;
                  case "O":
                    r[g][m] = -y.read_shift(-8, "f");
                    break;
                  case "B":
                    if (s && 8 == h[m].len) {
                      r[g][m] = y.read_shift(8, "f");
                      break;
                    }
                  case "G":
                  case "P":
                    y.l += h[m].len;
                    break;
                  case "0":
                    if ("_NullFlags" === h[m].name) {
                      break;
                    }
                  default:
                    throw new Error("DBF Unsupported data type " + h[m].type);
                }
              }
            } else {
              i.l += f;
            }
          }
          if (2 != o && i.l < i.length && 26 != i[i.l++]) {
            throw new Error("DBF EOF Marker missing " + (i.l - 1) + " of " + i.length + " " + i[i.l - 1].toString(16));
          }
          if (n && n.sheetRows) {
            r = r.slice(0, n.sheetRows);
          }
          return r;
        }(t, r), r);
      }
      var r = {
        B: 8,
        C: 250,
        L: 1,
        D: 8,
        "?": 0,
        "": 0
      };
      return {
        versions: [2, 3, 48, 49, 131, 139, 140, 245],
        to_workbook: function (e, t) {
          try {
            return an(n(e, t), t);
          } catch (_l) {
            if (t && t.WTF) {
              throw _l;
            }
          }
          return {
            SheetNames: [],
            Sheets: {}
          };
        },
        to_sheet: n,
        from_sheet: function (e, n) {
          var i = n || {};
          if (+i.codepage >= 0) {
            d(+i.codepage);
          }
          if ("string" == i.type) {
            throw new Error("Cannot write DBF to JS string");
          }
          var o = Vt();
          var a = sl(e, {
            header: 1,
            raw: true,
            cellDates: true
          });
          var c = a[0];
          var u = a.slice(1);
          var l = 0;
          var f = 0;
          var h = 0;
          var p = 1;
          for (l = 0; l < c.length; ++l) {
            if (null != l) {
              ++h;
              if ("number" === typeof c[l]) {
                c[l] = c[l].toString(10);
              }
              if ("string" !== typeof c[l]) {
                throw new Error("DBF Invalid column name " + c[l] + " |" + typeof c[l] + "|");
              }
              if (c.indexOf(c[l]) !== l) {
                for (f = 0; f < 1024; ++f) {
                  if (-1 == c.indexOf(c[l] + "_" + f)) {
                    c[l] += "_" + f;
                    break;
                  }
                }
              }
            }
          }
          var _ = nn(e["!ref"]);
          var A = [];
          for (l = 0; l <= _.e.c - _.s.c; ++l) {
            var g = [];
            for (f = 0; f < u.length; ++f) {
              if (null != u[f][l]) {
                g.push(u[f][l]);
              }
            }
            if (0 != g.length && null != c[l]) {
              var v = "";
              var m = "";
              for (f = 0; f < g.length; ++f) {
                switch (typeof g[f]) {
                  case "number":
                    m = "B";
                    break;
                  case "string":
                    m = "C";
                    break;
                  case "boolean":
                    m = "L";
                    break;
                  case "object":
                    m = g[f] instanceof Date ? "D" : "C";
                    break;
                  default:
                    m = "C";
                }
                if ("C" == (v = v && v != m ? "C" : m)) {
                  break;
                }
              }
              p += r[v] || 0;
              A[l] = v;
            } else {
              A[l] = "?";
            }
          }
          var y = o.next(32);
          for (y.write_shift(4, 318902576), y.write_shift(4, u.length), y.write_shift(2, 296 + 32 * h), y.write_shift(2, p), l = 0; l < 4; ++l) {
            y.write_shift(4, 0);
          }
          for (y.write_shift(4, 0 | (+t[s] || 3) << 8), l = 0, f = 0; l < c.length; ++l) {
            if (null != c[l]) {
              var b = o.next(32);
              var w = (c[l].slice(-10) + "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000").slice(0, 11);
              b.write_shift(1, w, "sbcs");
              b.write_shift(1, "?" == A[l] ? "C" : A[l], "sbcs");
              b.write_shift(4, f);
              b.write_shift(1, r[A[l]] || 0);
              b.write_shift(1, 0);
              b.write_shift(1, 2);
              b.write_shift(4, 0);
              b.write_shift(1, 0);
              b.write_shift(4, 0);
              b.write_shift(4, 0);
              f += r[A[l]] || 0;
            }
          }
          var E = o.next(264);
          for (E.write_shift(4, 13), l = 0; l < 65; ++l) {
            E.write_shift(4, 0);
          }
          for (l = 0; l < u.length; ++l) {
            var x = o.next(p);
            for (x.write_shift(1, 0), f = 0; f < c.length; ++f) {
              if (null != c[f]) {
                switch (A[f]) {
                  case "L":
                    x.write_shift(1, null == u[l][f] ? 63 : u[l][f] ? 84 : 70);
                    break;
                  case "B":
                    x.write_shift(8, u[l][f] || 0, "f");
                    break;
                  case "D":
                    if (u[l][f]) {
                      x.write_shift(4, ("0000" + u[l][f].getFullYear()).slice(-4), "sbcs");
                      x.write_shift(2, ("00" + (u[l][f].getMonth() + 1)).slice(-2), "sbcs");
                      x.write_shift(2, ("00" + u[l][f].getDate()).slice(-2), "sbcs");
                    } else {
                      x.write_shift(8, "00000000", "sbcs");
                    }
                    break;
                  case "C":
                    var C = String(u[l][f] || "");
                    for (x.write_shift(1, C, "sbcs"), h = 0; h < 250 - C.length; ++h) {
                      x.write_shift(1, 32);
                    }
                }
              }
            }
          }
          o.next(1).write_shift(1, 26);
          return o.end();
        }
      };
    }();
    var ji = function () {
      var e = {
        AA: "À",
        BA: "Á",
        CA: "Â",
        DA: 195,
        HA: "Ä",
        JA: 197,
        AE: "È",
        BE: "É",
        CE: "Ê",
        HE: "Ë",
        AI: "Ì",
        BI: "Í",
        CI: "Î",
        HI: "Ï",
        AO: "Ò",
        BO: "Ó",
        CO: "Ô",
        DO: 213,
        HO: "Ö",
        AU: "Ù",
        BU: "Ú",
        CU: "Û",
        HU: "Ü",
        Aa: "à",
        Ba: "á",
        Ca: "â",
        Da: 227,
        Ha: "ä",
        Ja: 229,
        Ae: "è",
        Be: "é",
        Ce: "ê",
        He: "ë",
        Ai: "ì",
        Bi: "í",
        Ci: "î",
        Hi: "ï",
        Ao: "ò",
        Bo: "ó",
        Co: "ô",
        Do: 245,
        Ho: "ö",
        Au: "ù",
        Bu: "ú",
        Cu: "û",
        Hu: "ü",
        KC: "Ç",
        Kc: "ç",
        q: "æ",
        z: "œ",
        a: "Æ",
        j: "Œ",
        DN: 209,
        Dn: 241,
        Hy: 255,
        S: 169,
        c: 170,
        R: 174,
        B: 180,
        0: 176,
        1: 177,
        2: 178,
        3: 179,
        5: 181,
        6: 182,
        7: 183,
        Q: 185,
        k: 186,
        b: 208,
        i: 216,
        l: 222,
        s: 240,
        y: 248,
        "!": 161,
        "\"": 162,
        "#": 163,
        "(": 164,
        "%": 165,
        "'": 167,
        "H ": 168,
        "+": 171,
        ";": 187,
        "<": 188,
        "=": 189,
        ">": 190,
        "?": 191,
        "{": 223
      };
      var t = new RegExp("\u001bN(" + H(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
      var n = function (t, n) {
        var r = e[n];
        return "number" == typeof r ? g(r) : r;
      };
      var r = function (e, t, n) {
        var r = t.charCodeAt(0) - 32 << 4 | n.charCodeAt(0) - 48;
        return 59 == r ? e : g(r);
      };
      function i(e, i) {
        var o;
        var a = e.split(/[\n\r]+/);
        var s = -1;
        var c = -1;
        var u = 0;
        var l = 0;
        var f = [];
        var h = [];
        var p = null;
        var _ = {};
        var A = [];
        var g = [];
        var v = [];
        var m = 0;
        for (+i.codepage >= 0 && d(+i.codepage); u !== a.length; ++u) {
          m = 0;
          var y;
          var b = a[u].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, r).replace(t, n);
          var w = b.replace(/;;/g, "\u0000").split(";").map(function (e) {
            return e.replace(/\u0000/g, ";");
          });
          var E = w[0];
          if (b.length > 0) {
            switch (E) {
              case "ID":
              case "E":
              case "B":
              case "O":
                break;
              case "P":
                if ("P" == w[1].charAt(0)) {
                  h.push(b.slice(3).replace(/;;/g, ";"));
                }
                break;
              case "C":
                var x = false,
                  C = false,
                  O = false,
                  k = false,
                  S = -1,
                  T = -1;
                for (l = 1; l < w.length; ++l) {
                  switch (w[l].charAt(0)) {
                    case "A":
                      break;
                    case "X":
                      c = parseInt(w[l].slice(1)) - 1;
                      C = true;
                      break;
                    case "Y":
                      for (s = parseInt(w[l].slice(1)) - 1, C || (c = 0), o = f.length; o <= s; ++o) {
                        f[o] = [];
                      }
                      break;
                    case "K":
                      if ("\"" === (y = w[l].slice(1)).charAt(0)) {
                        y = y.slice(1, y.length - 1);
                      } else {
                        if ("TRUE" === y) {
                          y = true;
                        } else {
                          if ("FALSE" === y) {
                            y = false;
                          } else {
                            if (isNaN(oe(y))) {
                              if (!isNaN(ae(y).getDate())) {
                                y = te(y);
                              }
                            } else {
                              y = oe(y);
                              if (null !== p && D.is_date(p)) {
                                y = q(y);
                              }
                            }
                          }
                        }
                      }
                      if ("undefined" !== typeof cptable && "string" == typeof y && "string" != (i || {}).type && (i || {}).codepage) {
                        y = cptable.utils.decode(i.codepage, y);
                      }
                      x = true;
                      break;
                    case "E":
                      k = true;
                      var B = fa(w[l].slice(1), {
                        r: s,
                        c: c
                      });
                      f[s][c] = [f[s][c], B];
                      break;
                    case "S":
                      O = true;
                      f[s][c] = [f[s][c], "S5S"];
                      break;
                    case "G":
                      break;
                    case "R":
                      S = parseInt(w[l].slice(1)) - 1;
                      break;
                    case "C":
                      T = parseInt(w[l].slice(1)) - 1;
                      break;
                    default:
                      if (i && i.WTF) {
                        throw new Error("SYLK bad record " + b);
                      }
                  }
                }
                if (x && (f[s][c] && 2 == f[s][c].length ? f[s][c][0] = y : f[s][c] = y, p = null), O) {
                  if (k) {
                    throw new Error("SYLK shared formula cannot have own formula");
                  }
                  var I = S > -1 && f[S][T];
                  if (!I || !I[1]) {
                    throw new Error("SYLK shared formula cannot find base");
                  }
                  f[s][c][1] = pa(I[1], {
                    r: s - S,
                    c: c - T
                  });
                }
                break;
              case "F":
                var F = 0;
                for (l = 1; l < w.length; ++l) {
                  switch (w[l].charAt(0)) {
                    case "X":
                      c = parseInt(w[l].slice(1)) - 1;
                      ++F;
                      break;
                    case "Y":
                      for (s = parseInt(w[l].slice(1)) - 1, o = f.length; o <= s; ++o) {
                        f[o] = [];
                      }
                      break;
                    case "M":
                      m = parseInt(w[l].slice(1)) / 20;
                      break;
                    case "F":
                    case "G":
                      break;
                    case "P":
                      p = h[parseInt(w[l].slice(1))];
                      break;
                    case "S":
                    case "D":
                    case "N":
                      break;
                    case "W":
                      for (v = w[l].slice(1).split(" "), o = parseInt(v[0], 10); o <= parseInt(v[1], 10); ++o) {
                        m = parseInt(v[2], 10);
                        g[o - 1] = 0 === m ? {
                          hidden: true
                        } : {
                          wch: m
                        };
                        Co(g[o - 1]);
                      }
                      break;
                    case "C":
                      if (!g[c = parseInt(w[l].slice(1)) - 1]) {
                        g[c] = {};
                      }
                      break;
                    case "R":
                      if (!A[s = parseInt(w[l].slice(1)) - 1]) {
                        A[s] = {};
                      }
                      if (m > 0) {
                        A[s].hpt = m;
                        A[s].hpx = ko(m);
                      } else {
                        if (0 === m) {
                          A[s].hidden = true;
                        }
                      }
                      break;
                    default:
                      if (i && i.WTF) {
                        throw new Error("SYLK bad record " + b);
                      }
                  }
                }
                if (F < 1) {
                  p = null;
                }
                break;
              default:
                if (i && i.WTF) {
                  throw new Error("SYLK bad record " + b);
                }
            }
          }
        }
        if (A.length > 0) {
          _["!rows"] = A;
        }
        if (g.length > 0) {
          _["!cols"] = g;
        }
        if (i && i.sheetRows) {
          f = f.slice(0, i.sheetRows);
        }
        return [f, _];
      }
      function o(e, t) {
        var n = function (e, t) {
          switch (t.type) {
            case "base64":
              return i(v.decode(e), t);
            case "binary":
              return i(e, t);
            case "buffer":
              return i(e.toString("binary"), t);
            case "array":
              return i(ne(e), t);
          }
          throw new Error("Unrecognized type " + t.type);
        }(e, t);
        var r = n[0];
        var o = n[1];
        var a = cn(r, t);
        H(o).forEach(function (e) {
          a[e] = o[e];
        });
        return a;
      }
      function a(e, t, n, r) {
        var i = "C;Y" + (n + 1) + ";X" + (r + 1) + ";K";
        switch (e.t) {
          case "n":
            i += e.v || 0;
            if (e.f && !e.F) {
              i += ";E" + ha(e.f, {
                r: n,
                c: r
              });
            }
            break;
          case "b":
            i += e.v ? "TRUE" : "FALSE";
            break;
          case "e":
            i += e.w || e.v;
            break;
          case "d":
            i += "\"" + (e.w || e.v) + "\"";
            break;
          case "s":
            i += "\"" + e.v.replace(/"/g, "") + "\"";
        }
        return i;
      }
      e["|"] = 254;
      return {
        to_workbook: function (e, t) {
          return an(o(e, t), t);
        },
        to_sheet: o,
        from_sheet: function (e, t) {
          var n;
          var r;
          var i = ["ID;PWXL;N;E"];
          var o = [];
          var s = nn(e["!ref"]);
          var c = Array.isArray(e);
          var u = "\r\n";
          i.push("P;PGeneral");
          i.push("F;P0;DG0G8;M255");
          if (e["!cols"]) {
            r = i;
            e["!cols"].forEach(function (e, t) {
              var n = "F;W" + (t + 1) + " " + (t + 1) + " ";
              if (e.hidden) {
                n += "0";
              } else {
                if ("number" == typeof e.width) {
                  e.wpx = yo(e.width);
                }
                if ("number" == typeof e.wpx) {
                  e.wch = bo(e.wpx);
                }
                if ("number" == typeof e.wch) {
                  n += Math.round(e.wch);
                }
              }
              if (" " != n.charAt(n.length - 1)) {
                r.push(n);
              }
            });
          }
          if (e["!rows"]) {
            (function (e, t) {
              t.forEach(function (t, n) {
                var r = "F;";
                if (t.hidden) {
                  r += "M0;";
                } else {
                  if (t.hpt) {
                    r += "M" + 20 * t.hpt + ";";
                  } else {
                    if (t.hpx) {
                      r += "M" + 20 * Oo(t.hpx) + ";";
                    }
                  }
                }
                if (r.length > 2) {
                  e.push(r + "R" + (n + 1));
                }
              });
            })(i, e["!rows"]);
          }
          i.push("B;Y" + (s.e.r - s.s.r + 1) + ";X" + (s.e.c - s.s.c + 1) + ";D" + [s.s.c, s.s.r, s.e.c, s.e.r].join(" "));
          for (var l = s.s.r; l <= s.e.r; ++l) {
            for (var f = s.s.c; f <= s.e.c; ++f) {
              var d = Zt({
                r: l,
                c: f
              });
              if ((n = c ? (e[l] || [])[f] : e[d]) && (null != n.v || n.f && !n.F)) {
                o.push(a(n, 0, l, f));
              }
            }
          }
          return i.join(u) + u + o.join(u) + u + "E" + u;
        }
      };
    }();
    var Li = function () {
      function e(e, t) {
        for (var n = e.split("\n"), r = -1, i = -1, o = 0, a = []; o !== n.length; ++o) {
          if ("BOT" !== n[o].trim()) {
            if (!(r < 0)) {
              var s = n[o].trim().split(",");
              var c = s[0];
              var u = s[1];
              var l = n[++o].trim();
              switch (+c) {
                case -1:
                  if ("BOT" === l) {
                    a[++r] = [];
                    i = 0;
                    continue;
                  }
                  if ("EOD" !== l) {
                    throw new Error("Unrecognized DIF special command " + l);
                  }
                  break;
                case 0:
                  if ("TRUE" === l) {
                    a[r][i] = true;
                  } else {
                    if ("FALSE" === l) {
                      a[r][i] = false;
                    } else {
                      if (isNaN(oe(u))) {
                        if (isNaN(ae(u).getDate())) {
                          a[r][i] = u;
                        } else {
                          a[r][i] = te(u);
                        }
                      } else {
                        a[r][i] = oe(u);
                      }
                    }
                  }
                  ++i;
                  break;
                case 1:
                  l = l.slice(1, l.length - 1);
                  a[r][i++] = "" !== l ? l : null;
              }
              if ("EOD" === l) {
                break;
              }
            }
          } else {
            a[++r] = [];
            i = 0;
          }
        }
        if (t && t.sheetRows) {
          a = a.slice(0, t.sheetRows);
        }
        return a;
      }
      function t(t, n) {
        return cn(function (t, n) {
          switch (n.type) {
            case "base64":
              return e(v.decode(t), n);
            case "binary":
              return e(t, n);
            case "buffer":
              return e(t.toString("binary"), n);
            case "array":
              return e(ne(t), n);
          }
          throw new Error("Unrecognized type " + n.type);
        }(t, n), n);
      }
      return {
        to_workbook: function (e, n) {
          return an(t(e, n), n);
        },
        to_sheet: t,
        from_sheet: function () {
          var e = function (e, t, n, r, i) {
            e.push(t);
            e.push(n + "," + r);
            e.push("\"" + i.replace(/"/g, "\"\"") + "\"");
          };
          var t = function (e, t, n, r) {
            e.push(t + "," + n);
            e.push(1 == t ? "\"" + r.replace(/"/g, "\"\"") + "\"" : r);
          };
          return function (n) {
            var r;
            var i = [];
            var o = nn(n["!ref"]);
            var a = Array.isArray(n);
            e(i, "TABLE", 0, 1, "sheetjs");
            e(i, "VECTORS", 0, o.e.r - o.s.r + 1, "");
            e(i, "TUPLES", 0, o.e.c - o.s.c + 1, "");
            e(i, "DATA", 0, 0, "");
            for (var s = o.s.r; s <= o.e.r; ++s) {
              t(i, -1, 0, "BOT");
              for (var c = o.s.c; c <= o.e.c; ++c) {
                var u = Zt({
                  r: s,
                  c: c
                });
                if (r = a ? (n[s] || [])[c] : n[u]) {
                  switch (r.t) {
                    case "n":
                      var l = r.w;
                      if (!(l || null == r.v)) {
                        l = r.v;
                      }
                      if (null == l) {
                        if (r.f && !r.F) {
                          t(i, 1, 0, "=" + r.f);
                        } else {
                          t(i, 1, 0, "");
                        }
                      } else {
                        t(i, 0, l, "V");
                      }
                      break;
                    case "b":
                      t(i, 0, r.v ? 1 : 0, r.v ? "TRUE" : "FALSE");
                      break;
                    case "s":
                      t(i, 1, 0, isNaN(r.v) ? r.v : "=\"" + r.v + "\"");
                      break;
                    case "d":
                      if (!r.w) {
                        r.w = D.format(r.z || D._table[14], W(te(r.v)));
                      }
                      t(i, 0, r.w, "V");
                      break;
                    default:
                      t(i, 1, 0, "");
                  }
                } else {
                  t(i, 1, 0, "");
                }
              }
            }
            t(i, -1, 0, "EOD");
            return i.join("\r\n");
          };
        }()
      };
    }();
    var Ui = function () {
      function e(e) {
        return e.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
      }
      function t(e, t) {
        return cn(function (e, t) {
          for (var n = e.split("\n"), r = -1, i = -1, o = 0, a = []; o !== n.length; ++o) {
            var s = n[o].trim().split(":");
            if ("cell" === s[0]) {
              var c = Jt(s[1]);
              if (a.length <= c.r) {
                for (r = a.length; r <= c.r; ++r) {
                  if (!a[r]) {
                    a[r] = [];
                  }
                }
              }
              switch (r = c.r, i = c.c, s[2]) {
                case "t":
                  a[r][i] = s[3].replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n");
                  break;
                case "v":
                  a[r][i] = +s[3];
                  break;
                case "vtf":
                  var u = s[s.length - 1];
                case "vtc":
                  switch (s[3]) {
                    case "nl":
                      a[r][i] = !!+s[4];
                      break;
                    default:
                      a[r][i] = +s[4];
                  }
                  if ("vtf" == s[2]) {
                    a[r][i] = [a[r][i], u];
                  }
              }
            }
          }
          if (t && t.sheetRows) {
            a = a.slice(0, t.sheetRows);
          }
          return a;
        }(e, t), t);
      }
      var n = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n");
      var r = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join("\n") + "\n";
      var i = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join("\n");
      var o = "--SocialCalcSpreadsheetControlSave--";
      function a(t) {
        if (!t || !t["!ref"]) {
          return "";
        }
        for (var n, r = [], i = [], o = "", a = en(t["!ref"]), s = Array.isArray(t), c = a.s.r; c <= a.e.r; ++c) {
          for (var u = a.s.c; u <= a.e.c; ++u) {
            o = Zt({
              r: c,
              c: u
            });
            if ((n = s ? (t[c] || [])[u] : t[o]) && null != n.v && "z" !== n.t) {
              switch (i = ["cell", o, "t"], n.t) {
                case "s":
                case "str":
                  i.push(e(n.v));
                  break;
                case "n":
                  if (n.f) {
                    i[2] = "vtf";
                    i[3] = "n";
                    i[4] = n.v;
                    i[5] = e(n.f);
                  } else {
                    i[2] = "v";
                    i[3] = n.v;
                  }
                  break;
                case "b":
                  i[2] = "vt" + (n.f ? "f" : "c");
                  i[3] = "nl";
                  i[4] = n.v ? "1" : "0";
                  i[5] = e(n.f || (n.v ? "TRUE" : "FALSE"));
                  break;
                case "d":
                  var l = W(te(n.v));
                  i[2] = "vtc";
                  i[3] = "nd";
                  i[4] = "" + l;
                  i[5] = n.w || D.format(n.z || D._table[14], l);
                  break;
                case "e":
                  continue;
              }
              r.push(i.join(":"));
            }
          }
        }
        r.push("sheet:c:" + (a.e.c - a.s.c + 1) + ":r:" + (a.e.r - a.s.r + 1) + ":tvf:1");
        r.push("valueformat:1:text-wiki");
        return r.join("\n");
      }
      return {
        to_workbook: function (e, n) {
          return an(t(e, n), n);
        },
        to_sheet: t,
        from_sheet: function (e) {
          return [n, r, i, r, a(e), o].join("\n");
        }
      };
    }();
    var Hi = function () {
      function e(e, t, n, r, i) {
        if (i.raw) {
          t[n][r] = e;
        } else {
          if (!("" === e)) {
            if ("TRUE" === e) {
              t[n][r] = true;
            } else {
              if ("FALSE" === e) {
                t[n][r] = false;
              } else {
                if (isNaN(oe(e))) {
                  if (isNaN(ae(e).getDate())) {
                    t[n][r] = e;
                  } else {
                    t[n][r] = te(e);
                  }
                } else {
                  t[n][r] = oe(e);
                }
              }
            }
          }
        }
      }
      var t = {
        44: ",",
        9: "\t",
        59: ";"
      };
      var n = {
        44: 3,
        9: 2,
        59: 1
      };
      function r(e) {
        for (var r = {}, i = false, o = 0, a = 0; o < e.length; ++o) {
          if (34 == (a = e.charCodeAt(o))) {
            i = !i;
          } else {
            if (!i && a in t) {
              r[a] = (r[a] || 0) + 1;
            }
          }
        }
        for (o in a = [], r) if (Object.prototype.hasOwnProperty.call(r, o)) {
          a.push([r[o], o]);
        }
        if (!a.length) {
          for (o in r = n) if (Object.prototype.hasOwnProperty.call(r, o)) {
            a.push([r[o], o]);
          }
        }
        a.sort(function (e, t) {
          return e[0] - t[0] || n[e[1]] - n[t[1]];
        });
        return t[a.pop()[1]];
      }
      function i(e, t) {
        var n = t || {};
        var i = "";
        var o = n.dense ? [] : {};
        var a = {
          s: {
            c: 0,
            r: 0
          },
          e: {
            c: 0,
            r: 0
          }
        };
        if ("sep=" == e.slice(0, 4)) {
          if (13 == e.charCodeAt(5) && 10 == e.charCodeAt(6)) {
            i = e.charAt(4);
            e = e.slice(7);
          } else {
            if (13 == e.charCodeAt(5) || 10 == e.charCodeAt(5)) {
              i = e.charAt(4);
              e = e.slice(6);
            } else {
              i = r(e.slice(0, 1024));
            }
          }
        } else {
          i = r(e.slice(0, 1024));
        }
        var s = 0;
        var c = 0;
        var u = 0;
        var l = 0;
        var f = 0;
        var d = i.charCodeAt(0);
        var h = false;
        var p = 0;
        e = e.replace(/\r\n/gm, "\n");
        var _ = null != n.dateNF ? function (e) {
          var t = "number" == typeof e ? D._table[e] : e;
          t = t.replace(N, "(\\d+)");
          return new RegExp("^" + t + "$");
        }(n.dateNF) : null;
        function A() {
          var t = e.slice(l, f);
          var r = {};
          if ("\"" == t.charAt(0) && "\"" == t.charAt(t.length - 1)) {
            t = t.slice(1, -1).replace(/""/g, "\"");
          }
          if (0 === t.length) {
            r.t = "z";
          } else if (n.raw) {
            r.t = "s";
            r.v = t;
          } else if (0 === t.trim().length) {
            r.t = "s";
            r.v = t;
          } else if (61 == t.charCodeAt(0)) {
            if (34 == t.charCodeAt(1) && 34 == t.charCodeAt(t.length - 1)) {
              r.t = "s";
              r.v = t.slice(2, -1).replace(/""/g, "\"");
            } else {
              if (1 != t.length) {
                r.t = "n";
                r.f = t.slice(1);
              } else {
                r.t = "s";
                r.v = t;
              }
            }
          } else if ("TRUE" == t) {
            r.t = "b";
            r.v = true;
          } else if ("FALSE" == t) {
            r.t = "b";
            r.v = false;
          } else if (isNaN(u = oe(t))) {
            if (!isNaN(ae(t).getDate()) || _ && t.match(_)) {
              r.z = n.dateNF || D._table[14];
              var i = 0;
              if (_ && t.match(_)) {
                t = function (e, t, n) {
                  var r = -1;
                  var i = -1;
                  var o = -1;
                  var a = -1;
                  var s = -1;
                  var c = -1;
                  (t.match(N) || []).forEach(function (e, t) {
                    var u = parseInt(n[t + 1], 10);
                    switch (e.toLowerCase().charAt(0)) {
                      case "y":
                        r = u;
                        break;
                      case "d":
                        o = u;
                        break;
                      case "h":
                        a = u;
                        break;
                      case "s":
                        c = u;
                        break;
                      case "m":
                        if (a >= 0) {
                          s = u;
                        } else {
                          i = u;
                        }
                    }
                  });
                  if (c >= 0 && -1 == s && i >= 0) {
                    s = i;
                    i = -1;
                  }
                  var u = ("" + (r >= 0 ? r : new Date().getFullYear())).slice(-4) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2) + "-" + ("00" + (o >= 1 ? o : 1)).slice(-2);
                  if (7 == u.length) {
                    u = "0" + u;
                  }
                  if (8 == u.length) {
                    u = "20" + u;
                  }
                  var l = ("00" + (a >= 0 ? a : 0)).slice(-2) + ":" + ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2);
                  return -1 == a && -1 == s && -1 == c ? u : -1 == r && -1 == i && -1 == o ? l : u + "T" + l;
                }(0, n.dateNF, t.match(_) || []);
                i = 1;
              }
              if (n.cellDates) {
                r.t = "d";
                r.v = te(t, i);
              } else {
                r.t = "n";
                r.v = W(te(t, i));
              }
              if (false !== n.cellText) {
                r.w = D.format(r.z, r.v instanceof Date ? W(r.v) : r.v);
              }
              if (!n.cellNF) {
                delete r.z;
              }
            } else {
              r.t = "s";
              r.v = t;
            }
          } else {
            r.t = "n";
            if (false !== n.cellText) {
              r.w = t;
            }
            r.v = u;
          }
          if (!("z" == r.t)) {
            if (n.dense) {
              if (!o[s]) {
                o[s] = [];
              }
              o[s][c] = r;
            } else {
              o[Zt({
                c: c,
                r: s
              })] = r;
            }
          }
          l = f + 1;
          if (a.e.c < c) {
            a.e.c = c;
          }
          if (a.e.r < s) {
            a.e.r = s;
          }
          if (p == d) {
            ++c;
          } else if (c = 0, ++s, n.sheetRows && n.sheetRows <= s) {
            return true;
          }
        }
        e: for (; f < e.length; ++f) {
          switch (p = e.charCodeAt(f)) {
            case 34:
              h = !h;
              break;
            case d:
            case 10:
            case 13:
              if (!h && A()) {
                break e;
              }
          }
        }
        if (f - l > 0) {
          A();
        }
        o["!ref"] = tn(a);
        return o;
      }
      function o(t, n) {
        return n && n.PRN ? "sep=" == t.slice(0, 4) || t.indexOf("\t") >= 0 || t.indexOf(",") >= 0 || t.indexOf(";") >= 0 ? i(t, n) : cn(function (t, n) {
          var r = n || {};
          var i = [];
          if (!t || 0 === t.length) {
            return i;
          }
          for (var o = t.split(/[\r\n]/), a = o.length - 1; a >= 0 && 0 === o[a].length;) {
            --a;
          }
          for (var s = 10, c = 0, u = 0; u <= a; ++u) {
            if (-1 == (c = o[u].indexOf(" "))) {
              c = o[u].length;
            } else {
              c++;
            }
            s = Math.max(s, c);
          }
          for (u = 0; u <= a; ++u) {
            i[u] = [];
            var l = 0;
            for (e(o[u].slice(0, s).trim(), i, u, l, r), l = 1; l <= (o[u].length - s) / 10 + 1; ++l) {
              e(o[u].slice(s + 10 * (l - 1), s + 10 * l).trim(), i, u, l, r);
            }
          }
          if (r.sheetRows) {
            i = i.slice(0, r.sheetRows);
          }
          return i;
        }(t, n), n) : i(t, n);
      }
      function a(e, t) {
        var n = "";
        var r = "string" == t.type ? [0, 0, 0, 0] : Xu(e, t);
        switch (t.type) {
          case "base64":
            n = v.decode(e);
            break;
          case "binary":
            n = e;
            break;
          case "buffer":
            n = 65001 == t.codepage ? e.toString("utf8") : t.codepage && "undefined" !== typeof cptable ? cptable.utils.decode(t.codepage, e) : e.toString("binary");
            break;
          case "array":
            n = ne(e);
            break;
          case "string":
            n = e;
            break;
          default:
            throw new Error("Unrecognized type " + t.type);
        }
        if (239 == r[0] && 187 == r[1] && 191 == r[2]) {
          n = Me(n.slice(3));
        } else {
          if ("binary" == t.type && "undefined" !== typeof cptable && t.codepage) {
            n = cptable.utils.decode(t.codepage, cptable.utils.encode(28591, n));
          }
        }
        return "socialcalc:version:" == n.slice(0, 19) ? Ui.to_sheet("string" == t.type ? n : Me(n), t) : o(n, t);
      }
      return {
        to_workbook: function (e, t) {
          return an(a(e, t), t);
        },
        to_sheet: a,
        from_sheet: function (e) {
          for (var t, n = [], r = nn(e["!ref"]), i = Array.isArray(e), o = r.s.r; o <= r.e.r; ++o) {
            for (var a = [], s = r.s.c; s <= r.e.c; ++s) {
              var c = Zt({
                r: o,
                c: s
              });
              if ((t = i ? (e[o] || [])[s] : e[c]) && null != t.v) {
                for (var u = (t.w || (on(t), t.w) || "").slice(0, 10); u.length < 10;) {
                  u += " ";
                }
                a.push(u + (0 === s ? " " : ""));
              } else {
                a.push("          ");
              }
            }
            n.push(a.join(""));
          }
          return n.join("\n");
        }
      };
    }();
    var Vi = function () {
      function e(e, t) {
        if (!e) {
          return e;
        }
        var n = t || {};
        var r = n.dense ? [] : {};
        var i = "Sheet1";
        var o = 0;
        var c = {};
        var u = [i];
        var l = {
          s: {
            r: 0,
            c: 0
          },
          e: {
            r: 0,
            c: 0
          }
        };
        var f = n.sheetRows || 0;
        if (2 == e[2]) {
          n.Enum = a;
        } else if (26 == e[2]) {
          n.Enum = s;
        } else {
          if (14 != e[2]) {
            throw new Error("Unrecognized LOTUS BOF " + e[2]);
          }
          n.Enum = s;
          n.qpro = true;
          e.l = 0;
        }
        (function (e, t, n) {
          if (e) {
            jt(e, e.l || 0);
            for (var r = n.Enum || a; e.l < e.length;) {
              var i = e.read_shift(2);
              var o = r[i] || r[255];
              var s = e.read_shift(2);
              var c = e.l + s;
              var u = (o.f || Lt)(e, s, n);
              e.l = c;
              if (t(u, o.n, i)) {
                return;
              }
            }
          }
        })(e, function (t, a, s) {
          if (2 == e[2]) {
            switch (s) {
              case 0:
                n.vers = t;
                if (t >= 4096) {
                  n.qpro = true;
                }
                break;
              case 6:
                l = t;
                break;
              case 15:
                if (!n.qpro) {
                  t[1].v = t[1].v.slice(1);
                }
              case 13:
              case 14:
              case 16:
              case 51:
                if (14 == s && 112 == (112 & t[2]) && (15 & t[2]) > 1 && (15 & t[2]) < 15) {
                  t[1].z = n.dateNF || D._table[14];
                  if (n.cellDates) {
                    t[1].t = "d";
                    t[1].v = q(t[1].v);
                  }
                }
                if (n.dense) {
                  if (!r[t[0].r]) {
                    r[t[0].r] = [];
                  }
                  r[t[0].r][t[0].c] = t[1];
                } else {
                  r[Zt(t[0])] = t[1];
                }
            }
          } else {
            switch (s) {
              case 22:
                t[1].v = t[1].v.slice(1);
              case 23:
              case 24:
              case 25:
              case 37:
              case 39:
              case 40:
                if (t[3] > o && (r["!ref"] = tn(l), c[i] = r, r = n.dense ? [] : {}, l = {
                  s: {
                    r: 0,
                    c: 0
                  },
                  e: {
                    r: 0,
                    c: 0
                  }
                }, o = t[3], i = "Sheet" + (o + 1), u.push(i)), f > 0 && t[0].r >= f) {
                  break;
                }
                if (n.dense) {
                  if (!r[t[0].r]) {
                    r[t[0].r] = [];
                  }
                  r[t[0].r][t[0].c] = t[1];
                } else {
                  r[Zt(t[0])] = t[1];
                }
                if (l.e.c < t[0].c) {
                  l.e.c = t[0].c;
                }
                if (l.e.r < t[0].r) {
                  l.e.r = t[0].r;
                }
            }
          }
        }, n);
        r["!ref"] = tn(l);
        c[i] = r;
        return {
          SheetNames: u,
          Sheets: c
        };
      }
      function t(e, t, n) {
        var r = [{
          c: 0,
          r: 0
        }, {
          t: "n",
          v: 0
        }, 0];
        if (n.qpro && 20768 != n.vers) {
          r[0].c = e.read_shift(1);
          e.l++;
          r[0].r = e.read_shift(2);
          e.l += 2;
        } else {
          r[2] = e.read_shift(1);
          r[0].c = e.read_shift(2);
          r[0].r = e.read_shift(2);
        }
        return r;
      }
      function n(e, n, r) {
        var i = e.l + n;
        var o = t(e, 0, r);
        o[1].t = "s";
        if (20768 == r.vers) {
          e.l++;
          var a = e.read_shift(1);
          o[1].v = e.read_shift(a, "utf8");
          return o;
        }
        if (r.qpro) {
          e.l++;
        }
        o[1].v = e.read_shift(i - e.l, "cstr");
        return o;
      }
      function r(e) {
        var t = [{
          c: 0,
          r: 0
        }, {
          t: "n",
          v: 0
        }, 0];
        t[0].r = e.read_shift(2);
        t[3] = e[e.l++];
        t[0].c = e[e.l++];
        return t;
      }
      function i(e, t) {
        var n = r(e);
        var i = e.read_shift(4);
        var o = e.read_shift(4);
        var a = e.read_shift(2);
        if (65535 == a) {
          n[1].v = 0;
          return n;
        }
        var s = 32768 & a;
        a = (32767 & a) - 16446;
        n[1].v = (2 * s - 1) * ((a > 0 ? o << a : o >>> -a) + (a > -32 ? i << a + 32 : i >>> -(a + 32)));
        return n;
      }
      function o(e, t) {
        var n = r(e);
        var i = e.read_shift(8, "f");
        n[1].v = i;
        return n;
      }
      var a = {
        0: {
          n: "BOF",
          f: Vr
        },
        1: {
          n: "EOF"
        },
        2: {
          n: "CALCMODE"
        },
        3: {
          n: "CALCORDER"
        },
        4: {
          n: "SPLIT"
        },
        5: {
          n: "SYNC"
        },
        6: {
          n: "RANGE",
          f: function (e) {
            var t = {
              s: {
                c: 0,
                r: 0
              },
              e: {
                c: 0,
                r: 0
              }
            };
            t.s.c = e.read_shift(2);
            t.s.r = e.read_shift(2);
            t.e.c = e.read_shift(2);
            t.e.r = e.read_shift(2);
            if (65535 == t.s.c) {
              t.s.c = t.e.c = t.s.r = t.e.r = 0;
            }
            return t;
          }
        },
        7: {
          n: "WINDOW1"
        },
        8: {
          n: "COLW1"
        },
        9: {
          n: "WINTWO"
        },
        10: {
          n: "COLW2"
        },
        11: {
          n: "NAME"
        },
        12: {
          n: "BLANK"
        },
        13: {
          n: "INTEGER",
          f: function (e, n, r) {
            var i = t(e, 0, r);
            i[1].v = e.read_shift(2, "i");
            return i;
          }
        },
        14: {
          n: "NUMBER",
          f: function (e, n, r) {
            var i = t(e, 0, r);
            i[1].v = e.read_shift(8, "f");
            return i;
          }
        },
        15: {
          n: "LABEL",
          f: n
        },
        16: {
          n: "FORMULA",
          f: function (e, n, r) {
            var i = e.l + n;
            var o = t(e, 0, r);
            o[1].v = e.read_shift(8, "f");
            if (r.qpro) {
              e.l = i;
            } else {
              var a = e.read_shift(2);
              e.l += a;
            }
            return o;
          }
        },
        24: {
          n: "TABLE"
        },
        25: {
          n: "ORANGE"
        },
        26: {
          n: "PRANGE"
        },
        27: {
          n: "SRANGE"
        },
        28: {
          n: "FRANGE"
        },
        29: {
          n: "KRANGE1"
        },
        32: {
          n: "HRANGE"
        },
        35: {
          n: "KRANGE2"
        },
        36: {
          n: "PROTEC"
        },
        37: {
          n: "FOOTER"
        },
        38: {
          n: "HEADER"
        },
        39: {
          n: "SETUP"
        },
        40: {
          n: "MARGINS"
        },
        41: {
          n: "LABELFMT"
        },
        42: {
          n: "TITLES"
        },
        43: {
          n: "SHEETJS"
        },
        45: {
          n: "GRAPH"
        },
        46: {
          n: "NGRAPH"
        },
        47: {
          n: "CALCCOUNT"
        },
        48: {
          n: "UNFORMATTED"
        },
        49: {
          n: "CURSORW12"
        },
        50: {
          n: "WINDOW"
        },
        51: {
          n: "STRING",
          f: n
        },
        55: {
          n: "PASSWORD"
        },
        56: {
          n: "LOCKED"
        },
        60: {
          n: "QUERY"
        },
        61: {
          n: "QUERYNAME"
        },
        62: {
          n: "PRINT"
        },
        63: {
          n: "PRINTNAME"
        },
        64: {
          n: "GRAPH2"
        },
        65: {
          n: "GRAPHNAME"
        },
        66: {
          n: "ZOOM"
        },
        67: {
          n: "SYMSPLIT"
        },
        68: {
          n: "NSROWS"
        },
        69: {
          n: "NSCOLS"
        },
        70: {
          n: "RULER"
        },
        71: {
          n: "NNAME"
        },
        72: {
          n: "ACOMM"
        },
        73: {
          n: "AMACRO"
        },
        74: {
          n: "PARSE"
        },
        255: {
          n: "",
          f: Lt
        }
      };
      var s = {
        0: {
          n: "BOF"
        },
        1: {
          n: "EOF"
        },
        3: {
          n: "??"
        },
        4: {
          n: "??"
        },
        5: {
          n: "??"
        },
        6: {
          n: "??"
        },
        7: {
          n: "??"
        },
        9: {
          n: "??"
        },
        10: {
          n: "??"
        },
        11: {
          n: "??"
        },
        12: {
          n: "??"
        },
        14: {
          n: "??"
        },
        15: {
          n: "??"
        },
        16: {
          n: "??"
        },
        17: {
          n: "??"
        },
        18: {
          n: "??"
        },
        19: {
          n: "??"
        },
        21: {
          n: "??"
        },
        22: {
          n: "LABEL16",
          f: function (e, t) {
            var n = r(e);
            n[1].t = "s";
            n[1].v = e.read_shift(t - 4, "cstr");
            return n;
          }
        },
        23: {
          n: "NUMBER17",
          f: i
        },
        24: {
          n: "NUMBER18",
          f: function (e, t) {
            var n = r(e);
            n[1].v = e.read_shift(2);
            var i = n[1].v >> 1;
            if (1 & n[1].v) {
              switch (7 & i) {
                case 1:
                  i = 500 * (i >> 3);
                  break;
                case 2:
                  i = (i >> 3) / 20;
                  break;
                case 4:
                  i = (i >> 3) / 2e3;
                  break;
                case 6:
                  i = (i >> 3) / 16;
                  break;
                case 7:
                  i = (i >> 3) / 64;
                  break;
                default:
                  throw "unknown NUMBER_18 encoding " + (7 & i);
              }
            }
            n[1].v = i;
            return n;
          }
        },
        25: {
          n: "FORMULA19",
          f: function (e, t) {
            var n = i(e);
            e.l += t - 14;
            return n;
          }
        },
        26: {
          n: "??"
        },
        27: {
          n: "??"
        },
        28: {
          n: "??"
        },
        29: {
          n: "??"
        },
        30: {
          n: "??"
        },
        31: {
          n: "??"
        },
        33: {
          n: "??"
        },
        37: {
          n: "NUMBER25",
          f: function (e, t) {
            var n = r(e);
            var i = e.read_shift(4);
            n[1].v = i >> 6;
            return n;
          }
        },
        39: {
          n: "NUMBER27",
          f: o
        },
        40: {
          n: "FORMULA28",
          f: function (e, t) {
            var n = o(e);
            e.l += t - 10;
            return n;
          }
        },
        255: {
          n: "",
          f: Lt
        }
      };
      return {
        to_workbook: function (t, n) {
          switch (n.type) {
            case "base64":
              return e(x(v.decode(t)), n);
            case "binary":
              return e(x(t), n);
            case "buffer":
            case "array":
              return e(t, n);
          }
          throw "Unsupported type " + n.type;
        }
      };
    }();
    var Gi = function () {
      var e = Ve("t");
      var t = Ve("rPr");
      function n(n) {
        var r = n.match(e);
        if (!r) {
          return {
            t: "s",
            v: ""
          };
        }
        var i = {
          t: "s",
          v: ke(r[1])
        };
        var o = n.match(t);
        if (o) {
          i.s = function (e) {
            var t = {};
            var n = e.match(ye);
            var r = 0;
            var i = false;
            if (n) {
              for (; r != n.length; ++r) {
                var o = Ee(n[r]);
                switch (o[0].replace(/\w*:/g, "")) {
                  case "<condense":
                  case "<extend":
                    break;
                  case "<shadow":
                    if (!o.val) {
                      break;
                    }
                  case "<shadow>":
                  case "<shadow/>":
                    t.shadow = 1;
                    break;
                  case "</shadow>":
                    break;
                  case "<charset":
                    if ("1" == o.val) {
                      break;
                    }
                    t.cp = l[parseInt(o.val, 10)];
                    break;
                  case "<outline":
                    if (!o.val) {
                      break;
                    }
                  case "<outline>":
                  case "<outline/>":
                    t.outline = 1;
                    break;
                  case "</outline>":
                    break;
                  case "<rFont":
                    t.name = o.val;
                    break;
                  case "<sz":
                    t.sz = o.val;
                    break;
                  case "<strike":
                    if (!o.val) {
                      break;
                    }
                  case "<strike>":
                  case "<strike/>":
                    t.strike = 1;
                    break;
                  case "</strike>":
                    break;
                  case "<u":
                    if (!o.val) {
                      break;
                    }
                    switch (o.val) {
                      case "double":
                        t.uval = "double";
                        break;
                      case "singleAccounting":
                        t.uval = "single-accounting";
                        break;
                      case "doubleAccounting":
                        t.uval = "double-accounting";
                    }
                  case "<u>":
                  case "<u/>":
                    t.u = 1;
                    break;
                  case "</u>":
                    break;
                  case "<b":
                    if ("0" == o.val) {
                      break;
                    }
                  case "<b>":
                  case "<b/>":
                    t.b = 1;
                    break;
                  case "</b>":
                    break;
                  case "<i":
                    if ("0" == o.val) {
                      break;
                    }
                  case "<i>":
                  case "<i/>":
                    t.i = 1;
                    break;
                  case "</i>":
                    break;
                  case "<color":
                    if (o.rgb) {
                      t.color = o.rgb.slice(2, 8);
                    }
                    break;
                  case "<family":
                    t.family = o.val;
                    break;
                  case "<vertAlign":
                    t.valign = o.val;
                    break;
                  case "<scheme":
                    break;
                  case "<extLst":
                  case "<extLst>":
                  case "</extLst>":
                    break;
                  case "<ext":
                    i = true;
                    break;
                  case "</ext>":
                    i = false;
                    break;
                  default:
                    if (47 !== o[0].charCodeAt(1) && !i) {
                      throw new Error("Unrecognized rich format " + o[0]);
                    }
                }
              }
            }
            return t;
          }(o[1]);
        }
        return i;
      }
      var r = /<(?:\w+:)?r>/g;
      var i = /<\/(?:\w+:)?r>/;
      return function (e) {
        return e.replace(r, "").split(i).map(n).filter(function (e) {
          return e.v;
        });
      };
    }();
    var zi = function () {
      var e = /(\r\n|\n)/g;
      function t(t) {
        var n = [[], t.v, []];
        return t.v ? (t.s && function (e, t, n) {
          var r = [];
          if (e.u) {
            r.push("text-decoration: underline;");
          }
          if (e.uval) {
            r.push("text-underline-style:" + e.uval + ";");
          }
          if (e.sz) {
            r.push("font-size:" + e.sz + "pt;");
          }
          if (e.outline) {
            r.push("text-effect: outline;");
          }
          if (e.shadow) {
            r.push("text-shadow: auto;");
          }
          t.push("<span style=\"" + r.join("") + "\">");
          if (e.b) {
            t.push("<b>");
            n.push("</b>");
          }
          if (e.i) {
            t.push("<i>");
            n.push("</i>");
          }
          if (e.strike) {
            t.push("<s>");
            n.push("</s>");
          }
          var i = e.valign || "";
          if ("superscript" == i || "super" == i) {
            i = "sup";
          } else {
            if ("subscript" == i) {
              i = "sub";
            }
          }
          if ("" != i) {
            t.push("<" + i + ">");
            n.push("</" + i + ">");
          }
          n.push("</span>");
        }(t.s, n[0], n[2]), n[0].join("") + n[1].replace(e, "<br/>") + n[2].join("")) : "";
      }
      return function (e) {
        return e.map(t).join("");
      };
    }();
    var Qi = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g;
    var Wi = /<(?:\w+:)?r>/;
    var Ki = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
    function Xi(e, t) {
      var n = !t || t.cellHTML;
      var r = {};
      return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (r.t = ke(Me(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), r.r = Me(e), n && (r.h = Fe(r.t))) : e.match(Wi) && (r.r = Me(e), r.t = ke(Me((e.replace(Ki, "").match(Qi) || []).join("").replace(ye, ""))), n && (r.h = zi(Gi(r.r)))), r) : {
        t: ""
      };
    }
    var Yi = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;
    var qi = /<(?:\w+:)?(?:si|sstItem)>/g;
    var $i = /<\/(?:\w+:)?(?:si|sstItem)>/;
    Jn.SST = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
    var Ji = /^\s|\s$|[\t\n\r]/;
    function Zi(e, t) {
      if (!t.bookSST) {
        return "";
      }
      var n = [ve];
      n[n.length] = $e("sst", null, {
        xmlns: tt.main[0],
        count: e.Count,
        uniqueCount: e.Unique
      });
      for (var r = 0; r != e.length; ++r) {
        if (null != e[r]) {
          var i = e[r];
          var o = "<si>";
          if (i.r) {
            o += i.r;
          } else {
            o += "<t";
            if (!i.t) {
              i.t = "";
            }
            if (i.t.match(Ji)) {
              o += " xml:space=\"preserve\"";
            }
            o += ">" + Be(i.t) + "</t>";
          }
          o += "</si>";
          n[n.length] = o;
        }
      }
      if (n.length > 2) {
        n[n.length] = "</sst>";
        n[1] = n[1].replace("/>", ">");
      }
      return n.join("");
    }
    var eo = function (e, t) {
      var n = false;
      if (null == t) {
        n = true;
        t = Ut(15 + 4 * e.t.length);
      }
      t.write_shift(1, 0);
      fn(e.t, t);
      return n ? t.slice(0, t.l) : t;
    };
    function to(e) {
      var t = Vt();
      Gt(t, "BrtBeginSst", function (e, t) {
        if (!t) {
          t = Ut(8);
        }
        t.write_shift(4, e.Count);
        t.write_shift(4, e.Unique);
        return t;
      }(e));
      for (var n = 0; n < e.length; ++n) {
        Gt(t, "BrtSSTItem", eo(e[n]));
      }
      Gt(t, "BrtEndSst");
      return t.end();
    }
    function no(e) {
      if ("undefined" !== typeof cptable) {
        return cptable.utils.encode(s, e);
      }
      for (var t = [], n = e.split(""), r = 0; r < n.length; ++r) {
        t[r] = n[r].charCodeAt(0);
      }
      return t;
    }
    function ro(e, t) {
      var n = {};
      n.Major = e.read_shift(2);
      n.Minor = e.read_shift(2);
      if (t >= 4) {
        e.l += t - 4;
      }
      return n;
    }
    function io(e) {
      for (var t = e.read_shift(4), n = e.l + t - 4, r = {}, i = e.read_shift(4), o = []; i-- > 0;) {
        o.push({
          t: e.read_shift(4),
          v: e.read_shift(0, "lpp4")
        });
      }
      r.name = e.read_shift(0, "lpp4");
      r.comps = o;
      if (e.l != n) {
        throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + n);
      }
      return r;
    }
    function oo(e) {
      var t = function (e) {
        var t = {};
        e.read_shift(4);
        e.l += 4;
        t.id = e.read_shift(0, "lpp4");
        t.name = e.read_shift(0, "lpp4");
        t.R = ro(e, 4);
        t.U = ro(e, 4);
        t.W = ro(e, 4);
        return t;
      }(e);
      t.ename = e.read_shift(0, "8lpp4");
      t.blksz = e.read_shift(4);
      t.cmode = e.read_shift(4);
      if (4 != e.read_shift(4)) {
        throw new Error("Bad !Primary record");
      }
      return t;
    }
    function ao(e, t) {
      var n = e.l + t;
      var r = {};
      r.Flags = 63 & e.read_shift(4);
      e.l += 4;
      r.AlgID = e.read_shift(4);
      var i = false;
      switch (r.AlgID) {
        case 26126:
        case 26127:
        case 26128:
          i = 36 == r.Flags;
          break;
        case 26625:
          i = 4 == r.Flags;
          break;
        case 0:
          i = 16 == r.Flags || 4 == r.Flags || 36 == r.Flags;
          break;
        default:
          throw "Unrecognized encryption algorithm: " + r.AlgID;
      }
      if (!i) {
        throw new Error("Encryption Flags/AlgID mismatch");
      }
      r.AlgIDHash = e.read_shift(4);
      r.KeySize = e.read_shift(4);
      r.ProviderType = e.read_shift(4);
      e.l += 8;
      r.CSPName = e.read_shift(n - e.l >> 1, "utf16le");
      e.l = n;
      return r;
    }
    function so(e, t) {
      var n = {};
      var r = e.l + t;
      e.l += 4;
      n.Salt = e.slice(e.l, e.l + 16);
      e.l += 16;
      n.Verifier = e.slice(e.l, e.l + 16);
      e.l += 16;
      e.read_shift(4);
      n.VerifierHash = e.slice(e.l, r);
      e.l = r;
      return n;
    }
    function co(e) {
      if (36 != (63 & e.read_shift(4))) {
        throw new Error("EncryptionInfo mismatch");
      }
      var t = e.read_shift(4);
      return {
        t: "Std",
        h: ao(e, t),
        v: so(e, e.length - e.l)
      };
    }
    function uo() {
      throw new Error("File is password-protected: ECMA-376 Extensible");
    }
    function lo(e) {
      var t = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
      e.l += 4;
      var n = e.read_shift(e.length - e.l, "utf8");
      var r = {};
      n.replace(ye, function (e) {
        var n = Ee(e);
        switch (xe(n[0])) {
          case "<?xml":
            break;
          case "<encryption":
          case "</encryption>":
            break;
          case "<keyData":
            t.forEach(function (e) {
              r[e] = n[e];
            });
            break;
          case "<dataIntegrity":
            r.encryptedHmacKey = n.encryptedHmacKey;
            r.encryptedHmacValue = n.encryptedHmacValue;
            break;
          case "<keyEncryptors>":
          case "<keyEncryptors":
            r.encs = [];
            break;
          case "</keyEncryptors>":
            break;
          case "<keyEncryptor":
            r.uri = n.uri;
            break;
          case "</keyEncryptor>":
            break;
          case "<encryptedKey":
            r.encs.push(n);
            break;
          default:
            throw n[0];
        }
      });
      return r;
    }
    function fo(e) {
      var t;
      var n;
      var r = 0;
      var i = no(e);
      var o = i.length + 1;
      for ((t = w(o))[0] = i.length, n = 1; n != o; ++n) {
        t[n] = i[n - 1];
      }
      for (n = o - 1; n >= 0; --n) {
        r = ((0 === (16384 & r) ? 0 : 1) | r << 1 & 32767) ^ t[n];
      }
      return 52811 ^ r;
    }
    var ho = function () {
      var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0];
      var t = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163];
      var n = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628];
      var r = function (e, t) {
        return 255 & ((n = e ^ t) / 2 | 128 * n);
        var n;
      };
      return function (i) {
        for (var o, a, s, c = no(i), u = function (e) {
            for (var r = t[e.length - 1], i = 104, o = e.length - 1; o >= 0; --o) {
              for (var a = e[o], s = 0; 7 != s; ++s) {
                if (64 & a) {
                  r ^= n[i];
                }
                a *= 2;
                --i;
              }
            }
            return r;
          }(c), l = c.length, f = w(16), d = 0; 16 != d; ++d) {
          f[d] = 0;
        }
        for (1 === (1 & l) && (o = u >> 8, f[l] = r(e[0], o), --l, o = 255 & u, a = c[c.length - 1], f[l] = r(a, o)); l > 0;) {
          o = u >> 8;
          f[--l] = r(c[l], o);
          o = 255 & u;
          f[--l] = r(c[l], o);
        }
        for (l = 15, s = 15 - c.length; s > 0;) {
          o = u >> 8;
          f[l] = r(e[s], o);
          --s;
          o = 255 & u;
          f[--l] = r(c[l], o);
          --l;
          --s;
        }
        return f;
      };
    }();
    var po = function (e) {
      var t = 0;
      var n = ho(e);
      return function (e) {
        var r = function (e, t, n, r, i) {
          var o;
          var a;
          for (i || (i = t), r || (r = ho(e)), o = 0; o != t.length; ++o) {
            a = t[o];
            a = 255 & ((a ^= r[n]) >> 5 | a << 3);
            i[o] = a;
            ++n;
          }
          return [i, n, r];
        }("", e, t, n);
        t = r[1];
        return r[0];
      };
    };
    function _o(e, t, n) {
      var r = n || {};
      r.Info = e.read_shift(2);
      e.l -= 2;
      if (1 === r.Info) {
        r.Data = function (e) {
          var t = {};
          var n = t.EncryptionVersionInfo = ro(e, 4);
          if (1 != n.Major || 1 != n.Minor) {
            throw "unrecognized version code " + n.Major + " : " + n.Minor;
          }
          t.Salt = e.read_shift(16);
          t.EncryptedVerifier = e.read_shift(16);
          t.EncryptedVerifierHash = e.read_shift(16);
          return t;
        }(e);
      } else {
        r.Data = function (e, t) {
          var n = {};
          var r = n.EncryptionVersionInfo = ro(e, 4);
          t -= 4;
          if (2 != r.Minor) {
            throw new Error("unrecognized minor version code: " + r.Minor);
          }
          if (r.Major > 4 || r.Major < 2) {
            throw new Error("unrecognized major version code: " + r.Major);
          }
          n.Flags = e.read_shift(4);
          t -= 4;
          var i = e.read_shift(4);
          t -= 4;
          n.EncryptionHeader = ao(e, i);
          t -= i;
          n.EncryptionVerifier = so(e, t);
          return n;
        }(e, t);
      }
      return r;
    }
    var Ao = function () {
      function e(e, n) {
        switch (n.type) {
          case "base64":
            return t(v.decode(e), n);
          case "binary":
            return t(e, n);
          case "buffer":
            return t(e.toString("binary"), n);
          case "array":
            return t(ne(e), n);
        }
        throw new Error("Unrecognized type " + n.type);
      }
      function t(e, t) {
        var n = (t || {}).dense ? [] : {};
        if (!e.match(/\\trowd/)) {
          throw new Error("RTF missing table");
        }
        n["!ref"] = tn({
          s: {
            c: 0,
            r: 0
          },
          e: {
            c: 0,
            r: 0
          }
        });
        return n;
      }
      return {
        to_workbook: function (t, n) {
          return an(e(t, n), n);
        },
        to_sheet: e,
        from_sheet: function (e) {
          for (var t, n = ["{\\rtf1\\ansi"], r = nn(e["!ref"]), i = Array.isArray(e), o = r.s.r; o <= r.e.r; ++o) {
            n.push("\\trowd\\trautofit1");
            for (var a = r.s.c; a <= r.e.c; ++a) {
              n.push("\\cellx" + (a + 1));
            }
            for (n.push("\\pard\\intbl"), a = r.s.c; a <= r.e.c; ++a) {
              var s = Zt({
                r: o,
                c: a
              });
              if ((t = i ? (e[o] || [])[a] : e[s]) && (null != t.v || t.f && !t.F)) {
                n.push(" " + (t.w || (on(t), t.w)));
                n.push("\\cell");
              }
            }
            n.push("\\pard\\intbl\\row");
          }
          return n.join("") + "}";
        }
      };
    }();
    function go(e) {
      for (var t = 0, n = 1; 3 != t; ++t) {
        n = 256 * n + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
      }
      return n.toString(16).toUpperCase().slice(1);
    }
    function vo(e, t) {
      if (0 === t) {
        return e;
      }
      var n = function (e) {
        var t = e[0] / 255;
        var n = e[1] / 255;
        var r = e[2] / 255;
        var i = Math.max(t, n, r);
        var o = Math.min(t, n, r);
        var a = i - o;
        if (0 === a) {
          return [0, 0, t];
        }
        var s;
        var c = 0;
        var u = i + o;
        switch (s = a / (u > 1 ? 2 - u : u), i) {
          case t:
            c = ((n - r) / a + 6) % 6;
            break;
          case n:
            c = (r - t) / a + 2;
            break;
          case r:
            c = (t - n) / a + 4;
        }
        return [c / 6, s, u / 2];
      }(function (e) {
        var t = e.slice("#" === e[0] ? 1 : 0).slice(0, 6);
        return [parseInt(t.slice(0, 2), 16), parseInt(t.slice(2, 4), 16), parseInt(t.slice(4, 6), 16)];
      }(e));
      n[2] = t < 0 ? n[2] * (1 + t) : 1 - (1 - n[2]) * (1 - t);
      return go(function (e) {
        var t;
        var n = e[0];
        var r = e[1];
        var i = e[2];
        var o = 2 * r * (i < .5 ? i : 1 - i);
        var a = i - o / 2;
        var s = [a, a, a];
        var c = 6 * n;
        if (0 !== r) {
          switch (0 | c) {
            case 0:
            case 6:
              t = o * c;
              s[0] += o;
              s[1] += t;
              break;
            case 1:
              t = o * (2 - c);
              s[0] += t;
              s[1] += o;
              break;
            case 2:
              t = o * (c - 2);
              s[1] += o;
              s[2] += t;
              break;
            case 3:
              t = o * (4 - c);
              s[1] += t;
              s[2] += o;
              break;
            case 4:
              t = o * (c - 4);
              s[2] += o;
              s[0] += t;
              break;
            case 5:
              t = o * (6 - c);
              s[2] += t;
              s[0] += o;
          }
        }
        for (var u = 0; 3 != u; ++u) {
          s[u] = Math.round(255 * s[u]);
        }
        return s;
      }(n));
    }
    var mo = 6;
    function yo(e) {
      return Math.floor((e + Math.round(128 / mo) / 256) * mo);
    }
    function bo(e) {
      return Math.floor((e - 5) / mo * 100 + .5) / 100;
    }
    function wo(e) {
      return Math.round((e * mo + 5) / mo * 256) / 256;
    }
    function Eo(e) {
      return wo(bo(yo(e)));
    }
    function xo(e) {
      var t = Math.abs(e - Eo(e));
      var n = mo;
      if (t > .005) {
        for (mo = 1; mo < 15; ++mo) {
          if (Math.abs(e - Eo(e)) <= t) {
            t = Math.abs(e - Eo(e));
            n = mo;
          }
        }
      }
      mo = n;
    }
    function Co(e) {
      if (e.width) {
        e.wpx = yo(e.width);
        e.wch = bo(e.wpx);
        e.MDW = mo;
      } else {
        if (e.wpx) {
          e.wch = bo(e.wpx);
          e.width = wo(e.wch);
          e.MDW = mo;
        } else {
          if ("number" == typeof e.wch) {
            e.width = wo(e.wch);
            e.wpx = yo(e.width);
            e.MDW = mo;
          }
        }
      }
      if (e.customWidth) {
        delete e.customWidth;
      }
    }
    function Oo(e) {
      return 96 * e / 96;
    }
    function ko(e) {
      return 96 * e / 96;
    }
    var So = {
      None: "none",
      Solid: "solid",
      Gray50: "mediumGray",
      Gray75: "darkGray",
      Gray25: "lightGray",
      HorzStripe: "darkHorizontal",
      VertStripe: "darkVertical",
      ReverseDiagStripe: "darkDown",
      DiagStripe: "darkUp",
      DiagCross: "darkGrid",
      ThickDiagCross: "darkTrellis",
      ThinHorzStripe: "lightHorizontal",
      ThinVertStripe: "lightVertical",
      ThinReverseDiagStripe: "lightDown",
      ThinHorzCross: "lightGrid"
    };
    var To = ["numFmtId", "fillId", "fontId", "borderId", "xfId"];
    var Bo = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
    var Do = function () {
      var e = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/;
      var t = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/;
      var n = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/;
      var r = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/;
      var i = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
      return function (o, a, s) {
        var c;
        var u = {};
        return o ? ((c = (o = o.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "")).match(e)) && function (e, t, n) {
          t.NumberFmt = [];
          for (var r = H(D._table), i = 0; i < r.length; ++i) {
            t.NumberFmt[r[i]] = D._table[r[i]];
          }
          var o = e[0].match(ye);
          if (o) {
            for (i = 0; i < o.length; ++i) {
              var a = Ee(o[i]);
              switch (xe(a[0])) {
                case "<numFmts":
                case "</numFmts>":
                case "<numFmts/>":
                case "<numFmts>":
                  break;
                case "<numFmt":
                  var s = ke(Me(a.formatCode)),
                    c = parseInt(a.numFmtId, 10);
                  if (t.NumberFmt[c] = s, c > 0) {
                    if (c > 392) {
                      for (c = 392; c > 60 && null != t.NumberFmt[c]; --c) {
                        ;
                      }
                      t.NumberFmt[c] = s;
                    }
                    D.load(s, c);
                  }
                  break;
                case "</numFmt>":
                  break;
                default:
                  if (n.WTF) {
                    throw new Error("unrecognized " + a[0] + " in numFmts");
                  }
              }
            }
          }
        }(c, u, s), (c = o.match(r)) && function (e, t, n, r) {
          t.Fonts = [];
          var i = {};
          var o = false;
          (e[0].match(ye) || []).forEach(function (e) {
            var a = Ee(e);
            switch (xe(a[0])) {
              case "<fonts":
              case "<fonts>":
              case "</fonts>":
                break;
              case "<font":
              case "<font>":
                break;
              case "</font>":
              case "<font/>":
                t.Fonts.push(i);
                i = {};
                break;
              case "<name":
                if (a.val) {
                  i.name = Me(a.val);
                }
                break;
              case "<name/>":
              case "</name>":
                break;
              case "<b":
                i.bold = a.val ? Ne(a.val) : 1;
                break;
              case "<b/>":
                i.bold = 1;
                break;
              case "<i":
                i.italic = a.val ? Ne(a.val) : 1;
                break;
              case "<i/>":
                i.italic = 1;
                break;
              case "<u":
                switch (a.val) {
                  case "none":
                    i.underline = 0;
                    break;
                  case "single":
                    i.underline = 1;
                    break;
                  case "double":
                    i.underline = 2;
                    break;
                  case "singleAccounting":
                    i.underline = 33;
                    break;
                  case "doubleAccounting":
                    i.underline = 34;
                }
                break;
              case "<u/>":
                i.underline = 1;
                break;
              case "<strike":
                i.strike = a.val ? Ne(a.val) : 1;
                break;
              case "<strike/>":
                i.strike = 1;
                break;
              case "<outline":
                i.outline = a.val ? Ne(a.val) : 1;
                break;
              case "<outline/>":
                i.outline = 1;
                break;
              case "<shadow":
                i.shadow = a.val ? Ne(a.val) : 1;
                break;
              case "<shadow/>":
                i.shadow = 1;
                break;
              case "<condense":
                i.condense = a.val ? Ne(a.val) : 1;
                break;
              case "<condense/>":
                i.condense = 1;
                break;
              case "<extend":
                i.extend = a.val ? Ne(a.val) : 1;
                break;
              case "<extend/>":
                i.extend = 1;
                break;
              case "<sz":
                if (a.val) {
                  i.sz = +a.val;
                }
                break;
              case "<sz/>":
              case "</sz>":
                break;
              case "<vertAlign":
                if (a.val) {
                  i.vertAlign = a.val;
                }
                break;
              case "<vertAlign/>":
              case "</vertAlign>":
                break;
              case "<family":
                if (a.val) {
                  i.family = parseInt(a.val, 10);
                }
                break;
              case "<family/>":
              case "</family>":
                break;
              case "<scheme":
                if (a.val) {
                  i.scheme = a.val;
                }
                break;
              case "<scheme/>":
              case "</scheme>":
                break;
              case "<charset":
                if ("1" == a.val) {
                  break;
                }
                a.codepage = l[parseInt(a.val, 10)];
                break;
              case "<color":
                if (i.color || (i.color = {}), a.auto && (i.color.auto = Ne(a.auto)), a.rgb) {
                  i.color.rgb = a.rgb.slice(-6);
                } else if (a.indexed) {
                  i.color.index = parseInt(a.indexed, 10);
                  var s = zn[i.color.index];
                  if (81 == i.color.index) {
                    s = zn[1];
                  }
                  if (!s) {
                    throw new Error(e);
                  }
                  i.color.rgb = s[0].toString(16) + s[1].toString(16) + s[2].toString(16);
                } else if (a.theme) {
                  i.color.theme = parseInt(a.theme, 10);
                  if (a.tint) {
                    i.color.tint = parseFloat(a.tint);
                  }
                  if (a.theme && n.themeElements && n.themeElements.clrScheme) {
                    i.color.rgb = vo(n.themeElements.clrScheme[i.color.theme].rgb, i.color.tint || 0);
                  }
                }
                break;
              case "<color/>":
              case "</color>":
                break;
              case "<AlternateContent":
                o = true;
                break;
              case "</AlternateContent>":
                o = false;
                break;
              case "<extLst":
              case "<extLst>":
              case "</extLst>":
                break;
              case "<ext":
                o = true;
                break;
              case "</ext>":
                o = false;
                break;
              default:
                if (r && r.WTF && !o) {
                  throw new Error("unrecognized " + a[0] + " in fonts");
                }
            }
          });
        }(c, u, a, s), (c = o.match(n)) && function (e, t, n, r) {
          t.Fills = [];
          var i = {};
          var o = false;
          (e[0].match(ye) || []).forEach(function (e) {
            var n = Ee(e);
            switch (xe(n[0])) {
              case "<fills":
              case "<fills>":
              case "</fills>":
                break;
              case "<fill>":
              case "<fill":
              case "<fill/>":
                i = {};
                t.Fills.push(i);
                break;
              case "</fill>":
              case "<gradientFill>":
                break;
              case "<gradientFill":
              case "</gradientFill>":
                t.Fills.push(i);
                i = {};
                break;
              case "<patternFill":
              case "<patternFill>":
                if (n.patternType) {
                  i.patternType = n.patternType;
                }
                break;
              case "<patternFill/>":
              case "</patternFill>":
                break;
              case "<bgColor":
                if (!i.bgColor) {
                  i.bgColor = {};
                }
                if (n.indexed) {
                  i.bgColor.indexed = parseInt(n.indexed, 10);
                }
                if (n.theme) {
                  i.bgColor.theme = parseInt(n.theme, 10);
                }
                if (n.tint) {
                  i.bgColor.tint = parseFloat(n.tint);
                }
                if (n.rgb) {
                  i.bgColor.rgb = n.rgb.slice(-6);
                }
                break;
              case "<bgColor/>":
              case "</bgColor>":
                break;
              case "<fgColor":
                if (!i.fgColor) {
                  i.fgColor = {};
                }
                if (n.theme) {
                  i.fgColor.theme = parseInt(n.theme, 10);
                }
                if (n.tint) {
                  i.fgColor.tint = parseFloat(n.tint);
                }
                if (null != n.rgb) {
                  i.fgColor.rgb = n.rgb.slice(-6);
                }
                break;
              case "<fgColor/>":
              case "</fgColor>":
                break;
              case "<stop":
              case "<stop/>":
              case "</stop>":
                break;
              case "<color":
              case "<color/>":
              case "</color>":
                break;
              case "<extLst":
              case "<extLst>":
              case "</extLst>":
                break;
              case "<ext":
                o = true;
                break;
              case "</ext>":
                o = false;
                break;
              default:
                if (r && r.WTF && !o) {
                  throw new Error("unrecognized " + n[0] + " in fills");
                }
            }
          });
        }(c, u, 0, s), (c = o.match(i)) && function (e, t, n, r) {
          t.Borders = [];
          var i = {};
          var o = false;
          (e[0].match(ye) || []).forEach(function (e) {
            var n = Ee(e);
            switch (xe(n[0])) {
              case "<borders":
              case "<borders>":
              case "</borders>":
                break;
              case "<border":
              case "<border>":
              case "<border/>":
                i = {};
                if (n.diagonalUp) {
                  i.diagonalUp = Ne(n.diagonalUp);
                }
                if (n.diagonalDown) {
                  i.diagonalDown = Ne(n.diagonalDown);
                }
                t.Borders.push(i);
                break;
              case "</border>":
              case "<left/>":
                break;
              case "<left":
              case "<left>":
              case "</left>":
              case "<right/>":
                break;
              case "<right":
              case "<right>":
              case "</right>":
              case "<top/>":
                break;
              case "<top":
              case "<top>":
              case "</top>":
              case "<bottom/>":
                break;
              case "<bottom":
              case "<bottom>":
              case "</bottom>":
                break;
              case "<diagonal":
              case "<diagonal>":
              case "<diagonal/>":
              case "</diagonal>":
                break;
              case "<horizontal":
              case "<horizontal>":
              case "<horizontal/>":
              case "</horizontal>":
                break;
              case "<vertical":
              case "<vertical>":
              case "<vertical/>":
              case "</vertical>":
                break;
              case "<start":
              case "<start>":
              case "<start/>":
              case "</start>":
                break;
              case "<end":
              case "<end>":
              case "<end/>":
              case "</end>":
                break;
              case "<color":
              case "<color>":
                break;
              case "<color/>":
              case "</color>":
                break;
              case "<extLst":
              case "<extLst>":
              case "</extLst>":
                break;
              case "<ext":
                o = true;
                break;
              case "</ext>":
                o = false;
                break;
              default:
                if (r && r.WTF && !o) {
                  throw new Error("unrecognized " + n[0] + " in borders");
                }
            }
          });
        }(c, u, 0, s), (c = o.match(t)) && function (e, t, n) {
          var r;
          t.CellXf = [];
          var i = false;
          (e[0].match(ye) || []).forEach(function (e) {
            var o = Ee(e);
            var a = 0;
            switch (xe(o[0])) {
              case "<cellXfs":
              case "<cellXfs>":
              case "<cellXfs/>":
              case "</cellXfs>":
                break;
              case "<xf":
              case "<xf/>":
                for (delete (r = o)[0], a = 0; a < To.length; ++a) {
                  if (r[To[a]]) {
                    r[To[a]] = parseInt(r[To[a]], 10);
                  }
                }
                for (a = 0; a < Bo.length; ++a) {
                  if (r[Bo[a]]) {
                    r[Bo[a]] = Ne(r[Bo[a]]);
                  }
                }
                if (r.numFmtId > 392) {
                  for (a = 392; a > 60; --a) {
                    if (t.NumberFmt[r.numFmtId] == t.NumberFmt[a]) {
                      r.numFmtId = a;
                      break;
                    }
                  }
                }
                t.CellXf.push(r);
                break;
              case "</xf>":
                break;
              case "<alignment":
              case "<alignment/>":
                var s = {};
                if (o.vertical) {
                  s.vertical = o.vertical;
                }
                if (o.horizontal) {
                  s.horizontal = o.horizontal;
                }
                if (null != o.textRotation) {
                  s.textRotation = o.textRotation;
                }
                if (o.indent) {
                  s.indent = o.indent;
                }
                if (o.wrapText) {
                  s.wrapText = Ne(o.wrapText);
                }
                r.alignment = s;
                break;
              case "</alignment>":
              case "<protection":
                break;
              case "</protection>":
              case "<protection/>":
                break;
              case "<AlternateContent":
                i = true;
                break;
              case "</AlternateContent>":
                i = false;
                break;
              case "<extLst":
              case "<extLst>":
              case "</extLst>":
                break;
              case "<ext":
                i = true;
                break;
              case "</ext>":
                i = false;
                break;
              default:
                if (n && n.WTF && !i) {
                  throw new Error("unrecognized " + o[0] + " in cellXfs");
                }
            }
          });
        }(c, u, s), u) : u;
      };
    }();
    var Io = $e("styleSheet", null, {
      xmlns: tt.main[0],
      "xmlns:vt": tt.vt
    });
    function Fo(e, t) {
      var n;
      var r = [ve, Io];
      if (e.SSF && null != (n = function (e) {
        var t = ["<numFmts>"];
        [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (n) {
          for (var r = n[0]; r <= n[1]; ++r) {
            if (null != e[r]) {
              t[t.length] = $e("numFmt", null, {
                numFmtId: r,
                formatCode: Be(e[r])
              });
            }
          }
        });
        return 1 === t.length ? "" : (t[t.length] = "</numFmts>", t[0] = $e("numFmts", null, {
          count: t.length - 2
        }).replace("/>", ">"), t.join(""));
      }(e.SSF))) {
        r[r.length] = n;
      }
      r[r.length] = "<fonts count=\"1\"><font><sz val=\"12\"/><color theme=\"1\"/><name val=\"Calibri\"/><family val=\"2\"/><scheme val=\"minor\"/></font></fonts>";
      r[r.length] = "<fills count=\"2\"><fill><patternFill patternType=\"none\"/></fill><fill><patternFill patternType=\"gray125\"/></fill></fills>";
      r[r.length] = "<borders count=\"1\"><border><left/><right/><top/><bottom/><diagonal/></border></borders>";
      r[r.length] = "<cellStyleXfs count=\"1\"><xf numFmtId=\"0\" fontId=\"0\" fillId=\"0\" borderId=\"0\"/></cellStyleXfs>";
      if (n = function (e) {
        var t = [];
        t[t.length] = $e("cellXfs", null);
        e.forEach(function (e) {
          t[t.length] = $e("xf", null, e);
        });
        t[t.length] = "</cellXfs>";
        return 2 === t.length ? "" : (t[0] = $e("cellXfs", null, {
          count: t.length - 2
        }).replace("/>", ">"), t.join(""));
      }(t.cellXfs)) {
        r[r.length] = n;
      }
      r[r.length] = "<cellStyles count=\"1\"><cellStyle name=\"Normal\" xfId=\"0\" builtinId=\"0\"/></cellStyles>";
      r[r.length] = "<dxfs count=\"0\"/>";
      r[r.length] = "<tableStyles count=\"0\" defaultTableStyle=\"TableStyleMedium9\" defaultPivotStyle=\"PivotStyleMedium4\"/>";
      if (r.length > 2) {
        r[r.length] = "</styleSheet>";
        r[1] = r[1].replace("/>", ">");
      }
      return r.join("");
    }
    function Ro(e, t, n) {
      if (!n) {
        n = Ut(6 + 4 * t.length);
      }
      n.write_shift(2, e);
      fn(t, n);
      var r = n.length > n.l ? n.slice(0, n.l) : n;
      if (null == n.l) {
        n.l = n.length;
      }
      return r;
    }
    function Po(e, t) {
      if (!t) {
        t = Ut(153);
      }
      t.write_shift(2, 20 * e.sz);
      (function (e, t) {
        if (!t) {
          t = Ut(2);
        }
        var n = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
        t.write_shift(1, n);
        t.write_shift(1, 0);
      })(e, t);
      t.write_shift(2, e.bold ? 700 : 400);
      var n = 0;
      if ("superscript" == e.vertAlign) {
        n = 1;
      } else {
        if ("subscript" == e.vertAlign) {
          n = 2;
        }
      }
      t.write_shift(2, n);
      t.write_shift(1, e.underline || 0);
      t.write_shift(1, e.family || 0);
      t.write_shift(1, e.charset || 0);
      t.write_shift(1, 0);
      Rn(e.color, t);
      var r = 0;
      if ("major" == e.scheme) {
        r = 1;
      }
      if ("minor" == e.scheme) {
        r = 2;
      }
      t.write_shift(1, r);
      fn(e.name, t);
      return t.length > t.l ? t.slice(0, t.l) : t;
    }
    Jn.STY = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
    var No = G(["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"]);
    var Mo = Lt;
    function jo(e, t) {
      if (!t) {
        t = Ut(84);
      }
      var n = No[e.patternType];
      if (null == n) {
        n = 40;
      }
      t.write_shift(4, n);
      var r = 0;
      if (40 != n) {
        for (Rn({
          auto: 1
        }, t), Rn({
          auto: 1
        }, t); r < 12; ++r) {
          t.write_shift(4, 0);
        }
      } else {
        for (; r < 4; ++r) {
          t.write_shift(4, 0);
        }
        for (; r < 12; ++r) {
          t.write_shift(4, 0);
        }
      }
      return t.length > t.l ? t.slice(0, t.l) : t;
    }
    function Lo(e, t, n) {
      if (!n) {
        n = Ut(16);
      }
      n.write_shift(2, t || 0);
      n.write_shift(2, e.numFmtId || 0);
      n.write_shift(2, 0);
      n.write_shift(2, 0);
      n.write_shift(2, 0);
      n.write_shift(1, 0);
      n.write_shift(1, 0);
      n.write_shift(1, 0);
      n.write_shift(1, 0);
      n.write_shift(1, 0);
      n.write_shift(1, 0);
      return n;
    }
    function Uo(e, t) {
      if (!t) {
        t = Ut(10);
      }
      t.write_shift(1, 0);
      t.write_shift(1, 0);
      t.write_shift(4, 0);
      t.write_shift(4, 0);
      return t;
    }
    var Ho = Lt;
    function Vo(e) {
      Gt(e, "BrtBeginBorders", un(1));
      Gt(e, "BrtBorder", function (e, t) {
        if (!t) {
          t = Ut(51);
        }
        t.write_shift(1, 0);
        Uo(0, t);
        Uo(0, t);
        Uo(0, t);
        Uo(0, t);
        Uo(0, t);
        return t.length > t.l ? t.slice(0, t.l) : t;
      }());
      Gt(e, "BrtEndBorders");
    }
    function Go(e) {
      Gt(e, "BrtBeginStyles", un(1));
      Gt(e, "BrtStyle", function (e, t) {
        if (!t) {
          t = Ut(52);
        }
        t.write_shift(4, e.xfId);
        t.write_shift(2, 1);
        t.write_shift(1, +e.builtinId);
        t.write_shift(1, 0);
        En(e.name || "", t);
        return t.length > t.l ? t.slice(0, t.l) : t;
      }({
        xfId: 0,
        builtinId: 0,
        name: "Normal"
      }));
      Gt(e, "BrtEndStyles");
    }
    function zo(e) {
      Gt(e, "BrtBeginTableStyles", function (e, t, n) {
        var r = Ut(2052);
        r.write_shift(4, e);
        En(t, r);
        En(n, r);
        return r.length > r.l ? r.slice(0, r.l) : r;
      }(0, "TableStyleMedium9", "PivotStyleMedium4"));
      Gt(e, "BrtEndTableStyles");
    }
    function Qo(e, t) {
      var n = Vt();
      Gt(n, "BrtBeginStyleSheet");
      (function (e, t) {
        if (t) {
          var n = 0;
          [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (e) {
            for (var r = e[0]; r <= e[1]; ++r) {
              if (null != t[r]) {
                ++n;
              }
            }
          });
          if (0 != n) {
            Gt(e, "BrtBeginFmts", un(n));
            [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (n) {
              for (var r = n[0]; r <= n[1]; ++r) {
                if (null != t[r]) {
                  Gt(e, "BrtFmt", Ro(r, t[r]));
                }
              }
            });
            Gt(e, "BrtEndFmts");
          }
        }
      })(n, e.SSF);
      (function (e) {
        Gt(e, "BrtBeginFonts", un(1));
        Gt(e, "BrtFont", Po({
          sz: 12,
          color: {
            theme: 1
          },
          name: "Calibri",
          family: 2,
          scheme: "minor"
        }));
        Gt(e, "BrtEndFonts");
      })(n);
      (function (e) {
        Gt(e, "BrtBeginFills", un(2));
        Gt(e, "BrtFill", jo({
          patternType: "none"
        }));
        Gt(e, "BrtFill", jo({
          patternType: "gray125"
        }));
        Gt(e, "BrtEndFills");
      })(n);
      Vo(n);
      (function (e) {
        Gt(e, "BrtBeginCellStyleXFs", un(1));
        Gt(e, "BrtXF", Lo({
          numFmtId: 0,
          fontId: 0,
          fillId: 0,
          borderId: 0
        }, 65535));
        Gt(e, "BrtEndCellStyleXFs");
      })(n);
      (function (e, t) {
        Gt(e, "BrtBeginCellXFs", un(t.length));
        t.forEach(function (t) {
          Gt(e, "BrtXF", Lo(t, 0));
        });
        Gt(e, "BrtEndCellXFs");
      })(n, t.cellXfs);
      Go(n);
      (function (e) {
        Gt(e, "BrtBeginDXFs", un(0));
        Gt(e, "BrtEndDXFs");
      })(n);
      zo(n);
      Gt(n, "BrtEndStyleSheet");
      return n.end();
    }
    Jn.THEME = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
    var Wo = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
    function Ko(e, t, n) {
      t.themeElements.clrScheme = [];
      var r = {};
      (e[0].match(ye) || []).forEach(function (e) {
        var i = Ee(e);
        switch (i[0]) {
          case "<a:clrScheme":
          case "</a:clrScheme>":
            break;
          case "<a:srgbClr":
            r.rgb = i.val;
            break;
          case "<a:sysClr":
            r.rgb = i.lastClr;
            break;
          case "<a:dk1>":
          case "</a:dk1>":
          case "<a:lt1>":
          case "</a:lt1>":
          case "<a:dk2>":
          case "</a:dk2>":
          case "<a:lt2>":
          case "</a:lt2>":
          case "<a:accent1>":
          case "</a:accent1>":
          case "<a:accent2>":
          case "</a:accent2>":
          case "<a:accent3>":
          case "</a:accent3>":
          case "<a:accent4>":
          case "</a:accent4>":
          case "<a:accent5>":
          case "</a:accent5>":
          case "<a:accent6>":
          case "</a:accent6>":
          case "<a:hlink>":
          case "</a:hlink>":
          case "<a:folHlink>":
          case "</a:folHlink>":
            if ("/" === i[0].charAt(1)) {
              t.themeElements.clrScheme[Wo.indexOf(i[0])] = r;
              r = {};
            } else {
              r.name = i[0].slice(3, i[0].length - 1);
            }
            break;
          default:
            if (n && n.WTF) {
              throw new Error("Unrecognized " + i[0] + " in clrScheme");
            }
        }
      });
    }
    function Xo() {}
    function Yo() {}
    var qo = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/;
    var $o = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/;
    var Jo = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
    var Zo = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
    function ea(e, t) {
      if (!e || 0 === e.length) {
        return ea(ta());
      }
      var n;
      var r = {};
      if (!(n = e.match(Zo))) {
        throw new Error("themeElements not found in theme");
      }
      (function (e, t, n) {
        var r;
        t.themeElements = {};
        [["clrScheme", qo, Ko], ["fontScheme", $o, Xo], ["fmtScheme", Jo, Yo]].forEach(function (i) {
          if (!(r = e.match(i[1]))) {
            throw new Error(i[0] + " not found in themeElements");
          }
          i[2](r, t, n);
        });
      })(n[0], r, t);
      r.raw = e;
      return r;
    }
    function ta(e, t) {
      if (t && t.themeXLSX) {
        return t.themeXLSX;
      }
      if (e && "string" == typeof e.raw) {
        return e.raw;
      }
      var n = [ve];
      n[n.length] = "<a:theme xmlns:a=\"http://schemas.openxmlformats.org/drawingml/2006/main\" name=\"Office Theme\">";
      n[n.length] = "<a:themeElements>";
      n[n.length] = "<a:clrScheme name=\"Office\">";
      n[n.length] = "<a:dk1><a:sysClr val=\"windowText\" lastClr=\"000000\"/></a:dk1>";
      n[n.length] = "<a:lt1><a:sysClr val=\"window\" lastClr=\"FFFFFF\"/></a:lt1>";
      n[n.length] = "<a:dk2><a:srgbClr val=\"1F497D\"/></a:dk2>";
      n[n.length] = "<a:lt2><a:srgbClr val=\"EEECE1\"/></a:lt2>";
      n[n.length] = "<a:accent1><a:srgbClr val=\"4F81BD\"/></a:accent1>";
      n[n.length] = "<a:accent2><a:srgbClr val=\"C0504D\"/></a:accent2>";
      n[n.length] = "<a:accent3><a:srgbClr val=\"9BBB59\"/></a:accent3>";
      n[n.length] = "<a:accent4><a:srgbClr val=\"8064A2\"/></a:accent4>";
      n[n.length] = "<a:accent5><a:srgbClr val=\"4BACC6\"/></a:accent5>";
      n[n.length] = "<a:accent6><a:srgbClr val=\"F79646\"/></a:accent6>";
      n[n.length] = "<a:hlink><a:srgbClr val=\"0000FF\"/></a:hlink>";
      n[n.length] = "<a:folHlink><a:srgbClr val=\"800080\"/></a:folHlink>";
      n[n.length] = "</a:clrScheme>";
      n[n.length] = "<a:fontScheme name=\"Office\">";
      n[n.length] = "<a:majorFont>";
      n[n.length] = "<a:latin typeface=\"Cambria\"/>";
      n[n.length] = "<a:ea typeface=\"\"/>";
      n[n.length] = "<a:cs typeface=\"\"/>";
      n[n.length] = "<a:font script=\"Jpan\" typeface=\"ＭＳ Ｐゴシック\"/>";
      n[n.length] = "<a:font script=\"Hang\" typeface=\"맑은 고딕\"/>";
      n[n.length] = "<a:font script=\"Hans\" typeface=\"宋体\"/>";
      n[n.length] = "<a:font script=\"Hant\" typeface=\"新細明體\"/>";
      n[n.length] = "<a:font script=\"Arab\" typeface=\"Times New Roman\"/>";
      n[n.length] = "<a:font script=\"Hebr\" typeface=\"Times New Roman\"/>";
      n[n.length] = "<a:font script=\"Thai\" typeface=\"Tahoma\"/>";
      n[n.length] = "<a:font script=\"Ethi\" typeface=\"Nyala\"/>";
      n[n.length] = "<a:font script=\"Beng\" typeface=\"Vrinda\"/>";
      n[n.length] = "<a:font script=\"Gujr\" typeface=\"Shruti\"/>";
      n[n.length] = "<a:font script=\"Khmr\" typeface=\"MoolBoran\"/>";
      n[n.length] = "<a:font script=\"Knda\" typeface=\"Tunga\"/>";
      n[n.length] = "<a:font script=\"Guru\" typeface=\"Raavi\"/>";
      n[n.length] = "<a:font script=\"Cans\" typeface=\"Euphemia\"/>";
      n[n.length] = "<a:font script=\"Cher\" typeface=\"Plantagenet Cherokee\"/>";
      n[n.length] = "<a:font script=\"Yiii\" typeface=\"Microsoft Yi Baiti\"/>";
      n[n.length] = "<a:font script=\"Tibt\" typeface=\"Microsoft Himalaya\"/>";
      n[n.length] = "<a:font script=\"Thaa\" typeface=\"MV Boli\"/>";
      n[n.length] = "<a:font script=\"Deva\" typeface=\"Mangal\"/>";
      n[n.length] = "<a:font script=\"Telu\" typeface=\"Gautami\"/>";
      n[n.length] = "<a:font script=\"Taml\" typeface=\"Latha\"/>";
      n[n.length] = "<a:font script=\"Syrc\" typeface=\"Estrangelo Edessa\"/>";
      n[n.length] = "<a:font script=\"Orya\" typeface=\"Kalinga\"/>";
      n[n.length] = "<a:font script=\"Mlym\" typeface=\"Kartika\"/>";
      n[n.length] = "<a:font script=\"Laoo\" typeface=\"DokChampa\"/>";
      n[n.length] = "<a:font script=\"Sinh\" typeface=\"Iskoola Pota\"/>";
      n[n.length] = "<a:font script=\"Mong\" typeface=\"Mongolian Baiti\"/>";
      n[n.length] = "<a:font script=\"Viet\" typeface=\"Times New Roman\"/>";
      n[n.length] = "<a:font script=\"Uigh\" typeface=\"Microsoft Uighur\"/>";
      n[n.length] = "<a:font script=\"Geor\" typeface=\"Sylfaen\"/>";
      n[n.length] = "</a:majorFont>";
      n[n.length] = "<a:minorFont>";
      n[n.length] = "<a:latin typeface=\"Calibri\"/>";
      n[n.length] = "<a:ea typeface=\"\"/>";
      n[n.length] = "<a:cs typeface=\"\"/>";
      n[n.length] = "<a:font script=\"Jpan\" typeface=\"ＭＳ Ｐゴシック\"/>";
      n[n.length] = "<a:font script=\"Hang\" typeface=\"맑은 고딕\"/>";
      n[n.length] = "<a:font script=\"Hans\" typeface=\"宋体\"/>";
      n[n.length] = "<a:font script=\"Hant\" typeface=\"新細明體\"/>";
      n[n.length] = "<a:font script=\"Arab\" typeface=\"Arial\"/>";
      n[n.length] = "<a:font script=\"Hebr\" typeface=\"Arial\"/>";
      n[n.length] = "<a:font script=\"Thai\" typeface=\"Tahoma\"/>";
      n[n.length] = "<a:font script=\"Ethi\" typeface=\"Nyala\"/>";
      n[n.length] = "<a:font script=\"Beng\" typeface=\"Vrinda\"/>";
      n[n.length] = "<a:font script=\"Gujr\" typeface=\"Shruti\"/>";
      n[n.length] = "<a:font script=\"Khmr\" typeface=\"DaunPenh\"/>";
      n[n.length] = "<a:font script=\"Knda\" typeface=\"Tunga\"/>";
      n[n.length] = "<a:font script=\"Guru\" typeface=\"Raavi\"/>";
      n[n.length] = "<a:font script=\"Cans\" typeface=\"Euphemia\"/>";
      n[n.length] = "<a:font script=\"Cher\" typeface=\"Plantagenet Cherokee\"/>";
      n[n.length] = "<a:font script=\"Yiii\" typeface=\"Microsoft Yi Baiti\"/>";
      n[n.length] = "<a:font script=\"Tibt\" typeface=\"Microsoft Himalaya\"/>";
      n[n.length] = "<a:font script=\"Thaa\" typeface=\"MV Boli\"/>";
      n[n.length] = "<a:font script=\"Deva\" typeface=\"Mangal\"/>";
      n[n.length] = "<a:font script=\"Telu\" typeface=\"Gautami\"/>";
      n[n.length] = "<a:font script=\"Taml\" typeface=\"Latha\"/>";
      n[n.length] = "<a:font script=\"Syrc\" typeface=\"Estrangelo Edessa\"/>";
      n[n.length] = "<a:font script=\"Orya\" typeface=\"Kalinga\"/>";
      n[n.length] = "<a:font script=\"Mlym\" typeface=\"Kartika\"/>";
      n[n.length] = "<a:font script=\"Laoo\" typeface=\"DokChampa\"/>";
      n[n.length] = "<a:font script=\"Sinh\" typeface=\"Iskoola Pota\"/>";
      n[n.length] = "<a:font script=\"Mong\" typeface=\"Mongolian Baiti\"/>";
      n[n.length] = "<a:font script=\"Viet\" typeface=\"Arial\"/>";
      n[n.length] = "<a:font script=\"Uigh\" typeface=\"Microsoft Uighur\"/>";
      n[n.length] = "<a:font script=\"Geor\" typeface=\"Sylfaen\"/>";
      n[n.length] = "</a:minorFont>";
      n[n.length] = "</a:fontScheme>";
      n[n.length] = "<a:fmtScheme name=\"Office\">";
      n[n.length] = "<a:fillStyleLst>";
      n[n.length] = "<a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill>";
      n[n.length] = "<a:gradFill rotWithShape=\"1\">";
      n[n.length] = "<a:gsLst>";
      n[n.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"50000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>";
      n[n.length] = "<a:gs pos=\"35000\"><a:schemeClr val=\"phClr\"><a:tint val=\"37000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>";
      n[n.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:tint val=\"15000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
      n[n.length] = "</a:gsLst>";
      n[n.length] = "<a:lin ang=\"16200000\" scaled=\"1\"/>";
      n[n.length] = "</a:gradFill>";
      n[n.length] = "<a:gradFill rotWithShape=\"1\">";
      n[n.length] = "<a:gsLst>";
      n[n.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"100000\"/><a:shade val=\"100000\"/><a:satMod val=\"130000\"/></a:schemeClr></a:gs>";
      n[n.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:tint val=\"50000\"/><a:shade val=\"100000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
      n[n.length] = "</a:gsLst>";
      n[n.length] = "<a:lin ang=\"16200000\" scaled=\"0\"/>";
      n[n.length] = "</a:gradFill>";
      n[n.length] = "</a:fillStyleLst>";
      n[n.length] = "<a:lnStyleLst>";
      n[n.length] = "<a:ln w=\"9525\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"><a:shade val=\"95000\"/><a:satMod val=\"105000\"/></a:schemeClr></a:solidFill><a:prstDash val=\"solid\"/></a:ln>";
      n[n.length] = "<a:ln w=\"25400\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/></a:ln>";
      n[n.length] = "<a:ln w=\"38100\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/></a:ln>";
      n[n.length] = "</a:lnStyleLst>";
      n[n.length] = "<a:effectStyleLst>";
      n[n.length] = "<a:effectStyle>";
      n[n.length] = "<a:effectLst>";
      n[n.length] = "<a:outerShdw blurRad=\"40000\" dist=\"20000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"38000\"/></a:srgbClr></a:outerShdw>";
      n[n.length] = "</a:effectLst>";
      n[n.length] = "</a:effectStyle>";
      n[n.length] = "<a:effectStyle>";
      n[n.length] = "<a:effectLst>";
      n[n.length] = "<a:outerShdw blurRad=\"40000\" dist=\"23000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"35000\"/></a:srgbClr></a:outerShdw>";
      n[n.length] = "</a:effectLst>";
      n[n.length] = "</a:effectStyle>";
      n[n.length] = "<a:effectStyle>";
      n[n.length] = "<a:effectLst>";
      n[n.length] = "<a:outerShdw blurRad=\"40000\" dist=\"23000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"35000\"/></a:srgbClr></a:outerShdw>";
      n[n.length] = "</a:effectLst>";
      n[n.length] = "<a:scene3d><a:camera prst=\"orthographicFront\"><a:rot lat=\"0\" lon=\"0\" rev=\"0\"/></a:camera><a:lightRig rig=\"threePt\" dir=\"t\"><a:rot lat=\"0\" lon=\"0\" rev=\"1200000\"/></a:lightRig></a:scene3d>";
      n[n.length] = "<a:sp3d><a:bevelT w=\"63500\" h=\"25400\"/></a:sp3d>";
      n[n.length] = "</a:effectStyle>";
      n[n.length] = "</a:effectStyleLst>";
      n[n.length] = "<a:bgFillStyleLst>";
      n[n.length] = "<a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill>";
      n[n.length] = "<a:gradFill rotWithShape=\"1\">";
      n[n.length] = "<a:gsLst>";
      n[n.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"40000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
      n[n.length] = "<a:gs pos=\"40000\"><a:schemeClr val=\"phClr\"><a:tint val=\"45000\"/><a:shade val=\"99000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
      n[n.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:shade val=\"20000\"/><a:satMod val=\"255000\"/></a:schemeClr></a:gs>";
      n[n.length] = "</a:gsLst>";
      n[n.length] = "<a:path path=\"circle\"><a:fillToRect l=\"50000\" t=\"-80000\" r=\"50000\" b=\"180000\"/></a:path>";
      n[n.length] = "</a:gradFill>";
      n[n.length] = "<a:gradFill rotWithShape=\"1\">";
      n[n.length] = "<a:gsLst>";
      n[n.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"80000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>";
      n[n.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:shade val=\"30000\"/><a:satMod val=\"200000\"/></a:schemeClr></a:gs>";
      n[n.length] = "</a:gsLst>";
      n[n.length] = "<a:path path=\"circle\"><a:fillToRect l=\"50000\" t=\"50000\" r=\"50000\" b=\"50000\"/></a:path>";
      n[n.length] = "</a:gradFill>";
      n[n.length] = "</a:bgFillStyleLst>";
      n[n.length] = "</a:fmtScheme>";
      n[n.length] = "</a:themeElements>";
      n[n.length] = "<a:objectDefaults>";
      n[n.length] = "<a:spDef>";
      n[n.length] = "<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx=\"1\"><a:schemeClr val=\"accent1\"/></a:lnRef><a:fillRef idx=\"3\"><a:schemeClr val=\"accent1\"/></a:fillRef><a:effectRef idx=\"2\"><a:schemeClr val=\"accent1\"/></a:effectRef><a:fontRef idx=\"minor\"><a:schemeClr val=\"lt1\"/></a:fontRef></a:style>";
      n[n.length] = "</a:spDef>";
      n[n.length] = "<a:lnDef>";
      n[n.length] = "<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx=\"2\"><a:schemeClr val=\"accent1\"/></a:lnRef><a:fillRef idx=\"0\"><a:schemeClr val=\"accent1\"/></a:fillRef><a:effectRef idx=\"1\"><a:schemeClr val=\"accent1\"/></a:effectRef><a:fontRef idx=\"minor\"><a:schemeClr val=\"tx1\"/></a:fontRef></a:style>";
      n[n.length] = "</a:lnDef>";
      n[n.length] = "</a:objectDefaults>";
      n[n.length] = "<a:extraClrSchemeLst/>";
      n[n.length] = "</a:theme>";
      return n.join("");
    }
    function na(e) {
      var t = {};
      switch (t.xclrType = e.read_shift(2), t.nTintShade = e.read_shift(2), t.xclrType) {
        case 0:
          e.l += 4;
          break;
        case 1:
          t.xclrValue = function (e, t) {
            return Lt(e, t);
          }(e, 4);
          break;
        case 2:
          t.xclrValue = ti(e);
          break;
        case 3:
          t.xclrValue = function (e) {
            return e.read_shift(4);
          }(e);
          break;
        case 4:
          e.l += 4;
      }
      e.l += 8;
      return t;
    }
    function ra(e) {
      var t = e.read_shift(2);
      var n = e.read_shift(2) - 4;
      var r = [t];
      switch (t) {
        case 4:
        case 5:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
          r[1] = na(e);
          break;
        case 6:
          r[1] = function (e, t) {
            return Lt(e, t);
          }(e, n);
          break;
        case 14:
        case 15:
          r[1] = e.read_shift(1 === n ? 1 : 2);
          break;
        default:
          throw new Error("Unrecognized ExtProp type: " + t + " " + n);
      }
      return r;
    }
    Jn.IMG = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
    Jn.DRAW = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";
    var ia = 1024;
    function oa(e, t) {
      for (var n = [21600, 21600], r = ["m0,0l0", n[1], n[0], n[1], n[0], "0xe"].join(","), i = [$e("xml", null, {
          "xmlns:v": st,
          "xmlns:o": nt,
          "xmlns:x": rt,
          "xmlns:mv": at
        }).replace(/\/>/, ">"), $e("o:shapelayout", $e("o:idmap", null, {
          "v:ext": "edit",
          data: e
        }), {
          "v:ext": "edit"
        }), $e("v:shapetype", [$e("v:stroke", null, {
          joinstyle: "miter"
        }), $e("v:path", null, {
          gradientshapeok: "t",
          "o:connecttype": "rect"
        })].join(""), {
          id: "_x0000_t202",
          "o:spt": 202,
          coordsize: n.join(","),
          path: r
        })]; ia < 1e3 * e;) {
        ia += 1e3;
      }
      t.forEach(function (e) {
        var t = Jt(e[0]);
        var n = {
          color2: "#BEFF82",
          type: "gradient"
        };
        if ("gradient" == n.type) {
          n.angle = "-180";
        }
        var r = "gradient" == n.type ? $e("o:fill", null, {
          type: "gradientUnscaled",
          "v:ext": "view"
        }) : null;
        var o = $e("v:fill", r, n);
        ++ia;
        i = i.concat(["<v:shape" + qe({
          id: "_x0000_s" + ia,
          type: "#_x0000_t202",
          style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""),
          fillcolor: "#ECFAD4",
          strokecolor: "#edeaa1"
        }) + ">", o, $e("v:shadow", null, {
          on: "t",
          obscured: "t"
        }), $e("v:path", null, {
          "o:connecttype": "none"
        }), "<v:textbox><div style=\"text-align:left\"></div></v:textbox>", "<x:ClientData ObjectType=\"Note\">", "<x:MoveWithCells/>", "<x:SizeWithCells/>", Ye("x:Anchor", [t.c + 1, 0, t.r + 1, 0, t.c + 3, 20, t.r + 5, 20].join(",")), Ye("x:AutoFill", "False"), Ye("x:Row", String(t.r)), Ye("x:Column", String(t.c)), e[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"]);
      });
      i.push("</xml>");
      return i.join("");
    }
    Jn.CMNT = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
    var aa = $e("comments", null, {
      xmlns: tt.main[0]
    });
    function sa(e) {
      var t = [ve, aa];
      var n = [];
      t.push("<authors>");
      e.forEach(function (e) {
        e[1].forEach(function (e) {
          var r = Be(e.a);
          if (!(n.indexOf(r) > -1)) {
            n.push(r);
            t.push("<author>" + r + "</author>");
          }
        });
      });
      t.push("</authors>");
      t.push("<commentList>");
      e.forEach(function (e) {
        e[1].forEach(function (r) {
          t.push("<comment ref=\"" + e[0] + "\" authorId=\"" + n.indexOf(Be(r.a)) + "\"><text>");
          t.push(Ye("t", null == r.t ? "" : Be(r.t)));
          t.push("</text></comment>");
        });
      });
      t.push("</commentList>");
      if (t.length > 2) {
        t[t.length] = "</comments>";
        t[1] = t[1].replace("/>", ">");
      }
      return t.join("");
    }
    var ca = ln;
    function ua(e) {
      var t = Vt();
      var n = [];
      Gt(t, "BrtBeginComments");
      Gt(t, "BrtBeginCommentAuthors");
      e.forEach(function (e) {
        e[1].forEach(function (e) {
          if (!(n.indexOf(e.a) > -1)) {
            n.push(e.a.slice(0, 54));
            Gt(t, "BrtCommentAuthor", function (e) {
              return fn(e.slice(0, 54));
            }(e.a));
          }
        });
      });
      Gt(t, "BrtEndCommentAuthors");
      Gt(t, "BrtBeginCommentList");
      e.forEach(function (e) {
        e[1].forEach(function (r) {
          r.iauthor = n.indexOf(r.a);
          var i = {
            s: Jt(e[0]),
            e: Jt(e[0])
          };
          Gt(t, "BrtBeginComment", function (e, t) {
            if (null == t) {
              t = Ut(36);
            }
            t.write_shift(4, e[1].iauthor);
            Dn(e[0], t);
            t.write_shift(4, 0);
            t.write_shift(4, 0);
            t.write_shift(4, 0);
            t.write_shift(4, 0);
            return t;
          }([i, r]));
          if (r.t && r.t.length > 0) {
            Gt(t, "BrtCommentText", _n(r));
          }
          Gt(t, "BrtEndComment");
          delete r.iauthor;
        });
      });
      Gt(t, "BrtEndCommentList");
      Gt(t, "BrtEndComments");
      return t.end();
    }
    var la = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
    Jn.DS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet";
    Jn.MS = "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet";
    var fa = function () {
      var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g;
      var t = {
        r: 0,
        c: 0
      };
      function n(e, n, r, i) {
        var o = false;
        var a = false;
        if (0 == r.length) {
          a = true;
        } else {
          if ("[" == r.charAt(0)) {
            a = true;
            r = r.slice(1, -1);
          }
        }
        if (0 == i.length) {
          o = true;
        } else {
          if ("[" == i.charAt(0)) {
            o = true;
            i = i.slice(1, -1);
          }
        }
        var s = r.length > 0 ? 0 | parseInt(r, 10) : 0;
        var c = i.length > 0 ? 0 | parseInt(i, 10) : 0;
        if (o) {
          c += t.c;
        } else {
          --c;
        }
        if (a) {
          s += t.r;
        } else {
          --s;
        }
        return n + (o ? "" : "$") + $t(c) + (a ? "" : "$") + Yt(s);
      }
      return function (r, i) {
        t = i;
        return r.replace(e, n);
      };
    }();
    var da = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
    var ha = function (e, t) {
      return e.replace(da, function (e, n, r, i, o, a) {
        var s = qt(i) - (r ? 0 : t.c);
        var c = Xt(a) - (o ? 0 : t.r);
        return n + "R" + (0 == c ? "" : o ? c + 1 : "[" + c + "]") + "C" + (0 == s ? "" : r ? s + 1 : "[" + s + "]");
      });
    };
    function pa(e, t) {
      return e.replace(da, function (e, n, r, i, o, a) {
        return n + ("$" == r ? r + i : $t(qt(i) + t.c)) + ("$" == o ? o + a : Yt(Xt(a) + t.r));
      });
    }
    function _a(e, t, n) {
      var r = en(t).s;
      var i = Jt(n);
      return pa(e, {
        r: i.r - r.r,
        c: i.c - r.c
      });
    }
    function Aa(e) {
      return e.replace(/_xlfn\./g, "");
    }
    function ga(e) {
      e.l += 1;
    }
    function va(e, t) {
      var n = e.read_shift(1 == t ? 1 : 2);
      return [16383 & n, n >> 14 & 1, n >> 15 & 1];
    }
    function ma(e, t, n) {
      var r = 2;
      if (n) {
        if (n.biff >= 2 && n.biff <= 5) {
          return ya(e);
        }
        if (12 == n.biff) {
          r = 4;
        }
      }
      var i = e.read_shift(r);
      var o = e.read_shift(r);
      var a = va(e, 2);
      var s = va(e, 2);
      return {
        s: {
          r: i,
          c: a[0],
          cRel: a[1],
          rRel: a[2]
        },
        e: {
          r: o,
          c: s[0],
          cRel: s[1],
          rRel: s[2]
        }
      };
    }
    function ya(e) {
      var t = va(e, 2);
      var n = va(e, 2);
      var r = e.read_shift(1);
      var i = e.read_shift(1);
      return {
        s: {
          r: t[0],
          c: r,
          cRel: t[1],
          rRel: t[2]
        },
        e: {
          r: n[0],
          c: i,
          cRel: n[1],
          rRel: n[2]
        }
      };
    }
    function ba(e, t, n) {
      if (n && n.biff >= 2 && n.biff <= 5) {
        return function (e) {
          var t = va(e, 2);
          var n = e.read_shift(1);
          return {
            r: t[0],
            c: n,
            cRel: t[1],
            rRel: t[2]
          };
        }(e);
      }
      var r = e.read_shift(n && 12 == n.biff ? 4 : 2);
      var i = va(e, 2);
      return {
        r: r,
        c: i[0],
        cRel: i[1],
        rRel: i[2]
      };
    }
    function wa(e) {
      var t = e.read_shift(2);
      var n = e.read_shift(2);
      return {
        r: t,
        c: 255 & n,
        fQuoted: !!(16384 & n),
        cRel: n >> 15,
        rRel: n >> 15
      };
    }
    function Ea(e) {
      return [e.read_shift(1), e.read_shift(1)];
    }
    function xa(e, t) {
      var n = [e.read_shift(1)];
      if (12 == t) {
        switch (n[0]) {
          case 2:
            n[0] = 4;
            break;
          case 4:
            n[0] = 16;
            break;
          case 0:
            n[0] = 1;
            break;
          case 1:
            n[0] = 2;
        }
      }
      switch (n[0]) {
        case 4:
          n[1] = Ur(e, 1) ? "TRUE" : "FALSE";
          if (12 != t) {
            e.l += 7;
          }
          break;
        case 37:
        case 16:
          n[1] = Qn[e[e.l]];
          e.l += 12 == t ? 4 : 8;
          break;
        case 0:
          e.l += 8;
          break;
        case 1:
          n[1] = In(e);
          break;
        case 2:
          n[1] = qr(e, 0, {
            biff: t > 0 && t < 8 ? 2 : t
          });
          break;
        default:
          throw new Error("Bad SerAr: " + n[0]);
      }
      return n;
    }
    function Ca(e, t, n) {
      for (var r = e.read_shift(12 == n.biff ? 4 : 2), i = [], o = 0; o != r; ++o) {
        i.push((12 == n.biff ? Bn : si)(e, 8));
      }
      return i;
    }
    function Oa(e, t, n) {
      var r = 0;
      var i = 0;
      if (12 == n.biff) {
        r = e.read_shift(4);
        i = e.read_shift(4);
      } else {
        i = 1 + e.read_shift(1);
        r = 1 + e.read_shift(2);
      }
      if (n.biff >= 2 && n.biff < 8) {
        --r;
        if (0 == --i) {
          i = 256;
        }
      }
      for (var o = 0, a = []; o != r && (a[o] = []); ++o) {
        for (var s = 0; s != i; ++s) {
          a[o][s] = xa(e, n.biff);
        }
      }
      return a;
    }
    function ka(e, t, n) {
      e.l += 2;
      return [wa(e)];
    }
    function Sa(e) {
      e.l += 6;
      return [];
    }
    var Ta = ka;
    var Ba = Sa;
    var Da = Sa;
    var Ia = ka;
    function Fa(e) {
      e.l += 2;
      return [Vr(e), 1 & e.read_shift(2)];
    }
    var Ra = ka;
    var Pa = Fa;
    var Na = Sa;
    var Ma = ka;
    var ja = ka;
    var La = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
    var Ua = {
      1: {
        n: "PtgExp",
        f: function (e, t, n) {
          e.l++;
          return n && 12 == n.biff ? [e.read_shift(4, "i"), 0] : [e.read_shift(2), e.read_shift(n && 2 == n.biff ? 1 : 2)];
        }
      },
      2: {
        n: "PtgTbl",
        f: Lt
      },
      3: {
        n: "PtgAdd",
        f: ga
      },
      4: {
        n: "PtgSub",
        f: ga
      },
      5: {
        n: "PtgMul",
        f: ga
      },
      6: {
        n: "PtgDiv",
        f: ga
      },
      7: {
        n: "PtgPower",
        f: ga
      },
      8: {
        n: "PtgConcat",
        f: ga
      },
      9: {
        n: "PtgLt",
        f: ga
      },
      10: {
        n: "PtgLe",
        f: ga
      },
      11: {
        n: "PtgEq",
        f: ga
      },
      12: {
        n: "PtgGe",
        f: ga
      },
      13: {
        n: "PtgGt",
        f: ga
      },
      14: {
        n: "PtgNe",
        f: ga
      },
      15: {
        n: "PtgIsect",
        f: ga
      },
      16: {
        n: "PtgUnion",
        f: ga
      },
      17: {
        n: "PtgRange",
        f: ga
      },
      18: {
        n: "PtgUplus",
        f: ga
      },
      19: {
        n: "PtgUminus",
        f: ga
      },
      20: {
        n: "PtgPercent",
        f: ga
      },
      21: {
        n: "PtgParen",
        f: ga
      },
      22: {
        n: "PtgMissArg",
        f: ga
      },
      23: {
        n: "PtgStr",
        f: function (e, t, n) {
          e.l++;
          return Qr(e, 0, n);
        }
      },
      26: {
        n: "PtgSheet",
        f: function (e, t, n) {
          e.l += 5;
          e.l += 2;
          e.l += 2 == n.biff ? 1 : 4;
          return ["PTGSHEET"];
        }
      },
      27: {
        n: "PtgEndSheet",
        f: function (e, t, n) {
          e.l += 2 == n.biff ? 4 : 5;
          return ["PTGENDSHEET"];
        }
      },
      28: {
        n: "PtgErr",
        f: function (e) {
          e.l++;
          return Qn[e.read_shift(1)];
        }
      },
      29: {
        n: "PtgBool",
        f: function (e) {
          e.l++;
          return 0 !== e.read_shift(1);
        }
      },
      30: {
        n: "PtgInt",
        f: function (e) {
          e.l++;
          return e.read_shift(2);
        }
      },
      31: {
        n: "PtgNum",
        f: function (e) {
          e.l++;
          return In(e);
        }
      },
      32: {
        n: "PtgArray",
        f: function (e, t, n) {
          var r = (96 & e[e.l++]) >> 5;
          e.l += 2 == n.biff ? 6 : 12 == n.biff ? 14 : 7;
          return [r];
        }
      },
      33: {
        n: "PtgFunc",
        f: function (e, t, n) {
          var r = (96 & e[e.l]) >> 5;
          e.l += 1;
          var i = e.read_shift(n && n.biff <= 3 ? 1 : 2);
          return [us[i], cs[i], r];
        }
      },
      34: {
        n: "PtgFuncVar",
        f: function (e, t, n) {
          var r = e[e.l++];
          var i = e.read_shift(1);
          var o = n && n.biff <= 3 ? [88 == r ? -1 : 0, e.read_shift(1)] : function (e) {
            return [e[e.l + 1] >> 7, 32767 & e.read_shift(2)];
          }(e);
          return [i, (0 === o[0] ? cs : ss)[o[1]]];
        }
      },
      35: {
        n: "PtgName",
        f: function (e, t, n) {
          var r = e.read_shift(1) >>> 5 & 3;
          var i = !n || n.biff >= 8 ? 4 : 2;
          var o = e.read_shift(i);
          switch (n.biff) {
            case 2:
              e.l += 5;
              break;
            case 3:
            case 4:
              e.l += 8;
              break;
            case 5:
              e.l += 12;
          }
          return [r, 0, o];
        }
      },
      36: {
        n: "PtgRef",
        f: function (e, t, n) {
          var r = (96 & e[e.l]) >> 5;
          e.l += 1;
          return [r, ba(e, 0, n)];
        }
      },
      37: {
        n: "PtgArea",
        f: function (e, t, n) {
          return [(96 & e[e.l++]) >> 5, ma(e, n.biff >= 2 && n.biff, n)];
        }
      },
      38: {
        n: "PtgMemArea",
        f: function (e, t, n) {
          var r = e.read_shift(1) >>> 5 & 3;
          e.l += n && 2 == n.biff ? 3 : 4;
          return [r, e.read_shift(n && 2 == n.biff ? 1 : 2)];
        }
      },
      39: {
        n: "PtgMemErr",
        f: Lt
      },
      40: {
        n: "PtgMemNoMem",
        f: Lt
      },
      41: {
        n: "PtgMemFunc",
        f: function (e, t, n) {
          return [e.read_shift(1) >>> 5 & 3, e.read_shift(n && 2 == n.biff ? 1 : 2)];
        }
      },
      42: {
        n: "PtgRefErr",
        f: function (e, t, n) {
          var r = e.read_shift(1) >>> 5 & 3;
          e.l += 4;
          if (n.biff < 8) {
            e.l--;
          }
          if (12 == n.biff) {
            e.l += 2;
          }
          return [r];
        }
      },
      43: {
        n: "PtgAreaErr",
        f: function (e, t, n) {
          var r = (96 & e[e.l++]) >> 5;
          e.l += n && n.biff > 8 ? 12 : n.biff < 8 ? 6 : 8;
          return [r];
        }
      },
      44: {
        n: "PtgRefN",
        f: function (e, t, n) {
          var r = (96 & e[e.l]) >> 5;
          e.l += 1;
          return [r, function (e, t, n) {
            var r = n && n.biff ? n.biff : 8;
            if (r >= 2 && r <= 5) {
              return function (e) {
                var t = e.read_shift(2);
                var n = e.read_shift(1);
                var r = (32768 & t) >> 15;
                var i = (16384 & t) >> 14;
                t &= 16383;
                if (1 == r && t >= 8192) {
                  t -= 16384;
                }
                if (1 == i && n >= 128) {
                  n -= 256;
                }
                return {
                  r: t,
                  c: n,
                  cRel: i,
                  rRel: r
                };
              }(e);
            }
            var i = e.read_shift(r >= 12 ? 4 : 2);
            var o = e.read_shift(2);
            var a = (16384 & o) >> 14;
            var s = (32768 & o) >> 15;
            o &= 16383;
            if (1 == s) {
              for (; i > 524287;) {
                i -= 1048576;
              }
            }
            if (1 == a) {
              for (; o > 8191;) {
                o -= 16384;
              }
            }
            return {
              r: i,
              c: o,
              cRel: a,
              rRel: s
            };
          }(e, 0, n)];
        }
      },
      45: {
        n: "PtgAreaN",
        f: function (e, t, n) {
          return [(96 & e[e.l++]) >> 5, function (e, t, n) {
            if (n.biff < 8) {
              return ya(e);
            }
            var r = e.read_shift(12 == n.biff ? 4 : 2);
            var i = e.read_shift(12 == n.biff ? 4 : 2);
            var o = va(e, 2);
            var a = va(e, 2);
            return {
              s: {
                r: r,
                c: o[0],
                cRel: o[1],
                rRel: o[2]
              },
              e: {
                r: i,
                c: a[0],
                cRel: a[1],
                rRel: a[2]
              }
            };
          }(e, 0, n)];
        }
      },
      46: {
        n: "PtgMemAreaN",
        f: function (e) {
          return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)];
        }
      },
      47: {
        n: "PtgMemNoMemN",
        f: function (e) {
          return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)];
        }
      },
      57: {
        n: "PtgNameX",
        f: function (e, t, n) {
          return 5 == n.biff ? function (e) {
            var t = e.read_shift(1) >>> 5 & 3;
            var n = e.read_shift(2, "i");
            e.l += 8;
            var r = e.read_shift(2);
            e.l += 12;
            return [t, n, r];
          }(e) : [e.read_shift(1) >>> 5 & 3, e.read_shift(2), e.read_shift(4)];
        }
      },
      58: {
        n: "PtgRef3d",
        f: function (e, t, n) {
          var r = (96 & e[e.l]) >> 5;
          e.l += 1;
          var i = e.read_shift(2);
          if (n && 5 == n.biff) {
            e.l += 12;
          }
          return [r, i, ba(e, 0, n)];
        }
      },
      59: {
        n: "PtgArea3d",
        f: function (e, t, n) {
          var r = (96 & e[e.l++]) >> 5;
          var i = e.read_shift(2, "i");
          if (n) {
            switch (n.biff) {
              case 5:
                e.l += 12;
                6;
                break;
              case 12:
                12;
            }
          }
          return [r, i, ma(e, 0, n)];
        }
      },
      60: {
        n: "PtgRefErr3d",
        f: function (e, t, n) {
          var r = (96 & e[e.l++]) >> 5;
          var i = e.read_shift(2);
          var o = 4;
          if (n) {
            switch (n.biff) {
              case 5:
                o = 15;
                break;
              case 12:
                o = 6;
            }
          }
          e.l += o;
          return [r, i];
        }
      },
      61: {
        n: "PtgAreaErr3d",
        f: function (e, t, n) {
          var r = (96 & e[e.l++]) >> 5;
          var i = e.read_shift(2);
          var o = 8;
          if (n) {
            switch (n.biff) {
              case 5:
                e.l += 12;
                o = 6;
                break;
              case 12:
                o = 12;
            }
          }
          e.l += o;
          return [r, i];
        }
      },
      255: {}
    };
    var Ha = {
      64: 32,
      96: 32,
      65: 33,
      97: 33,
      66: 34,
      98: 34,
      67: 35,
      99: 35,
      68: 36,
      100: 36,
      69: 37,
      101: 37,
      70: 38,
      102: 38,
      71: 39,
      103: 39,
      72: 40,
      104: 40,
      73: 41,
      105: 41,
      74: 42,
      106: 42,
      75: 43,
      107: 43,
      76: 44,
      108: 44,
      77: 45,
      109: 45,
      78: 46,
      110: 46,
      79: 47,
      111: 47,
      88: 34,
      120: 34,
      89: 57,
      121: 57,
      90: 58,
      122: 58,
      91: 59,
      123: 59,
      92: 60,
      124: 60,
      93: 61,
      125: 61
    };
    !function () {
      for (var e in Ha) Ua[e] = Ua[Ha[e]];
    }();
    var Va = {
      1: {
        n: "PtgElfLel",
        f: Fa
      },
      2: {
        n: "PtgElfRw",
        f: Ma
      },
      3: {
        n: "PtgElfCol",
        f: Ta
      },
      6: {
        n: "PtgElfRwV",
        f: ja
      },
      7: {
        n: "PtgElfColV",
        f: Ia
      },
      10: {
        n: "PtgElfRadical",
        f: Ra
      },
      11: {
        n: "PtgElfRadicalS",
        f: Na
      },
      13: {
        n: "PtgElfColS",
        f: Ba
      },
      15: {
        n: "PtgElfColSV",
        f: Da
      },
      16: {
        n: "PtgElfRadicalLel",
        f: Pa
      },
      25: {
        n: "PtgList",
        f: function (e) {
          e.l += 2;
          var t = e.read_shift(2);
          var n = e.read_shift(2);
          var r = e.read_shift(4);
          var i = e.read_shift(2);
          var o = e.read_shift(2);
          return {
            ixti: t,
            coltype: 3 & n,
            rt: La[n >> 2 & 31],
            idx: r,
            c: i,
            C: o
          };
        }
      },
      29: {
        n: "PtgSxName",
        f: function (e) {
          e.l += 2;
          return [e.read_shift(4)];
        }
      },
      255: {}
    };
    var Ga = {
      0: {
        n: "PtgAttrNoop",
        f: function (e) {
          e.l += 4;
          return [0, 0];
        }
      },
      1: {
        n: "PtgAttrSemi",
        f: function (e, t, n) {
          var r = 255 & e[e.l + 1] ? 1 : 0;
          e.l += n && 2 == n.biff ? 3 : 4;
          return [r];
        }
      },
      2: {
        n: "PtgAttrIf",
        f: function (e, t, n) {
          var r = 255 & e[e.l + 1] ? 1 : 0;
          e.l += 2;
          return [r, e.read_shift(n && 2 == n.biff ? 1 : 2)];
        }
      },
      4: {
        n: "PtgAttrChoose",
        f: function (e, t, n) {
          e.l += 2;
          for (var r = e.read_shift(n && 2 == n.biff ? 1 : 2), i = [], o = 0; o <= r; ++o) {
            i.push(e.read_shift(n && 2 == n.biff ? 1 : 2));
          }
          return i;
        }
      },
      8: {
        n: "PtgAttrGoto",
        f: function (e, t, n) {
          var r = 255 & e[e.l + 1] ? 1 : 0;
          e.l += 2;
          return [r, e.read_shift(n && 2 == n.biff ? 1 : 2)];
        }
      },
      16: {
        n: "PtgAttrSum",
        f: function (e, t, n) {
          e.l += n && 2 == n.biff ? 3 : 4;
        }
      },
      32: {
        n: "PtgAttrBaxcel",
        f: function (e) {
          var t = 1 & e[e.l + 1];
          e.l += 4;
          return [t, 1];
        }
      },
      64: {
        n: "PtgAttrSpace",
        f: function (e) {
          e.read_shift(2);
          return Ea(e);
        }
      },
      65: {
        n: "PtgAttrSpaceSemi",
        f: function (e) {
          e.read_shift(2);
          return Ea(e);
        }
      },
      128: {
        n: "PtgAttrIfError",
        f: function (e) {
          var t = 255 & e[e.l + 1] ? 1 : 0;
          e.l += 2;
          return [t, e.read_shift(2)];
        }
      },
      255: {}
    };
    function za(e, t, n, r) {
      if (r.biff < 8) {
        return Lt(e, t);
      }
      for (var i = e.l + t, o = [], a = 0; a !== n.length; ++a) {
        switch (n[a][0]) {
          case "PtgArray":
            n[a][1] = Oa(e, 0, r);
            o.push(n[a][1]);
            break;
          case "PtgMemArea":
            n[a][2] = Ca(e, n[a][1], r);
            o.push(n[a][2]);
            break;
          case "PtgExp":
            if (r && 12 == r.biff) {
              n[a][1][1] = e.read_shift(4);
              o.push(n[a][1]);
            }
            break;
          case "PtgList":
          case "PtgElfRadicalS":
          case "PtgElfColS":
          case "PtgElfColSV":
            throw "Unsupported " + n[a][0];
        }
      }
      if (0 !== (t = i - e.l)) {
        o.push(Lt(e, t));
      }
      return o;
    }
    function Qa(e, t, n) {
      for (var r, i, o = e.l + t, a = []; o != e.l;) {
        t = o - e.l;
        i = e[e.l];
        r = Ua[i];
        if (!(24 !== i && 25 !== i)) {
          r = (24 === i ? Va : Ga)[e[e.l + 1]];
        }
        if (r && r.f) {
          a.push([r.n, r.f(e, t, n)]);
        } else {
          Lt(e, t);
        }
      }
      return a;
    }
    function Wa(e) {
      for (var t = [], n = 0; n < e.length; ++n) {
        for (var r = e[n], i = [], o = 0; o < r.length; ++o) {
          var a = r[o];
          if (a) {
            switch (a[0]) {
              case 2:
                i.push("\"" + a[1].replace(/"/g, "\"\"") + "\"");
                break;
              default:
                i.push(a[1]);
            }
          } else {
            i.push("");
          }
        }
        t.push(i.join(","));
      }
      return t.join(";");
    }
    Ga[33] = Ga[32];
    var Ka = {
      PtgAdd: "+",
      PtgConcat: "&",
      PtgDiv: "/",
      PtgEq: "=",
      PtgGe: ">=",
      PtgGt: ">",
      PtgLe: "<=",
      PtgLt: "<",
      PtgMul: "*",
      PtgNe: "<>",
      PtgPower: "^",
      PtgSub: "-"
    };
    var Xa = new RegExp(/[^\w\u4E00-\u9FFF\u3040-\u30FF]/);
    function Ya(e, t, n) {
      if (!e) {
        return "SH33TJSERR0";
      }
      if (n.biff > 8 && (!e.XTI || !e.XTI[t])) {
        return e.SheetNames[t];
      }
      if (!e.XTI) {
        return "SH33TJSERR6";
      }
      var r = e.XTI[t];
      if (n.biff < 8) {
        if (t > 1e4) {
          t -= 65536;
        }
        if (t < 0) {
          t = -t;
        }
        return 0 == t ? "" : e.XTI[t - 1];
      }
      if (!r) {
        return "SH33TJSERR1";
      }
      var i = "";
      if (n.biff > 8) {
        switch (e[r[0]][0]) {
          case 357:
            i = -1 == r[1] ? "#REF" : e.SheetNames[r[1]];
            return r[1] == r[2] ? i : i + ":" + e.SheetNames[r[2]];
          case 358:
            return null != n.SID ? e.SheetNames[n.SID] : "SH33TJSSAME" + e[r[0]][0];
          case 355:
          default:
            return "SH33TJSSRC" + e[r[0]][0];
        }
      }
      switch (e[r[0]][0][0]) {
        case 1025:
          i = -1 == r[1] ? "#REF" : e.SheetNames[r[1]] || "SH33TJSERR3";
          return r[1] == r[2] ? i : i + ":" + e.SheetNames[r[2]];
        case 14849:
          return e[r[0]].slice(1).map(function (e) {
            return e.Name;
          }).join(";;");
        default:
          return e[r[0]][0][3] ? (i = -1 == r[1] ? "#REF" : e[r[0]][0][3][r[1]] || "SH33TJSERR4", r[1] == r[2] ? i : i + ":" + e[r[0]][0][3][r[2]]) : "SH33TJSERR2";
      }
    }
    function qa(e, t, n) {
      return function (e, t) {
        if (!e && !(t && t.biff <= 5 && t.biff >= 2)) {
          throw new Error("empty sheet name");
        }
        return Xa.test(e) ? "'" + e + "'" : e;
      }(Ya(e, t, n), n);
    }
    function $a(e, t, n, r, i) {
      var o;
      var a;
      var s;
      var c;
      var u = i && i.biff || 8;
      var l = {
        s: {
          c: 0,
          r: 0
        },
        e: {
          c: 0,
          r: 0
        }
      };
      var f = [];
      var d = 0;
      var h = 0;
      var p = "";
      if (!e[0] || !e[0][0]) {
        return "";
      }
      for (var _ = -1, A = "", g = 0, v = e[0].length; g < v; ++g) {
        var m = e[0][g];
        switch (m[0]) {
          case "PtgUminus":
            f.push("-" + f.pop());
            break;
          case "PtgUplus":
            f.push("+" + f.pop());
            break;
          case "PtgPercent":
            f.push(f.pop() + "%");
            break;
          case "PtgAdd":
          case "PtgConcat":
          case "PtgDiv":
          case "PtgEq":
          case "PtgGe":
          case "PtgGt":
          case "PtgLe":
          case "PtgLt":
          case "PtgMul":
          case "PtgNe":
          case "PtgPower":
          case "PtgSub":
            if (o = f.pop(), a = f.pop(), _ >= 0) {
              switch (e[0][_][1][0]) {
                case 0:
                  A = ie(" ", e[0][_][1][1]);
                  break;
                case 1:
                  A = ie("\r", e[0][_][1][1]);
                  break;
                default:
                  if (A = "", i.WTF) {
                    throw new Error("Unexpected PtgAttrSpaceType " + e[0][_][1][0]);
                  }
              }
              a += A;
              _ = -1;
            }
            f.push(a + Ka[m[0]] + o);
            break;
          case "PtgIsect":
            o = f.pop();
            a = f.pop();
            f.push(a + " " + o);
            break;
          case "PtgUnion":
            o = f.pop();
            a = f.pop();
            f.push(a + "," + o);
            break;
          case "PtgRange":
            o = f.pop();
            a = f.pop();
            f.push(a + ":" + o);
            break;
          case "PtgAttrChoose":
          case "PtgAttrGoto":
          case "PtgAttrIf":
          case "PtgAttrIfError":
            break;
          case "PtgRef":
            s = zt(m[1][1], l, i);
            f.push(Wt(s, u));
            break;
          case "PtgRefN":
            s = n ? zt(m[1][1], n, i) : m[1][1];
            f.push(Wt(s, u));
            break;
          case "PtgRef3d":
            d = m[1][1];
            s = zt(m[1][2], l, i);
            p = qa(r, d, i);
            f.push(p + "!" + Wt(s, u));
            break;
          case "PtgFunc":
          case "PtgFuncVar":
            var y = m[1][0],
              b = m[1][1];
            if (!y) {
              y = 0;
            }
            var w = 0 == (y &= 127) ? [] : f.slice(-y);
            f.length -= y;
            if ("User" === b) {
              b = w.shift();
            }
            f.push(b + "(" + w.join(",") + ")");
            break;
          case "PtgBool":
            f.push(m[1] ? "TRUE" : "FALSE");
            break;
          case "PtgInt":
            f.push(m[1]);
            break;
          case "PtgNum":
            f.push(String(m[1]));
            break;
          case "PtgStr":
            f.push("\"" + m[1].replace(/"/g, "\"\"") + "\"");
            break;
          case "PtgErr":
            f.push(m[1]);
            break;
          case "PtgAreaN":
            c = Qt(m[1][1], n ? {
              s: n
            } : l, i);
            f.push(Kt(c, i));
            break;
          case "PtgArea":
            c = Qt(m[1][1], l, i);
            f.push(Kt(c, i));
            break;
          case "PtgArea3d":
            d = m[1][1];
            c = m[1][2];
            p = qa(r, d, i);
            f.push(p + "!" + Kt(c, i));
            break;
          case "PtgAttrSum":
            f.push("SUM(" + f.pop() + ")");
            break;
          case "PtgAttrBaxcel":
          case "PtgAttrSemi":
            break;
          case "PtgName":
            h = m[1][2];
            var E = (r.names || [])[h - 1] || (r[0] || [])[h],
              x = E ? E.Name : "SH33TJSNAME" + String(h);
            if (x in ls) {
              x = ls[x];
            }
            f.push(x);
            break;
          case "PtgNameX":
            var C,
              O = m[1][1];
            if (h = m[1][2], !(i.biff <= 5)) {
              var k = "";
              if (!(14849 == ((r[O] || [])[0] || [])[0])) {
                if (1025 == ((r[O] || [])[0] || [])[0]) {
                  if (r[O][h] && r[O][h].itab > 0) {
                    k = r.SheetNames[r[O][h].itab - 1] + "!";
                  }
                } else {
                  k = r.SheetNames[h - 1] + "!";
                }
              }
              if (r[O] && r[O][h]) {
                k += r[O][h].Name;
              } else if (r[0] && r[0][h]) {
                k += r[0][h].Name;
              } else {
                var S = Ya(r, O, i).split(";;");
                if (S[h - 1]) {
                  k = S[h - 1];
                } else {
                  k += "SH33TJSERRX";
                }
              }
              f.push(k);
              break;
            }
            if (O < 0) {
              O = -O;
            }
            if (r[O]) {
              C = r[O][h];
            }
            if (!C) {
              C = {
                Name: "SH33TJSERRY"
              };
            }
            f.push(C.Name);
            break;
          case "PtgParen":
            var T = "(",
              B = ")";
            if (_ >= 0) {
              switch (A = "", e[0][_][1][0]) {
                case 2:
                  T = ie(" ", e[0][_][1][1]) + T;
                  break;
                case 3:
                  T = ie("\r", e[0][_][1][1]) + T;
                  break;
                case 4:
                  B = ie(" ", e[0][_][1][1]) + B;
                  break;
                case 5:
                  B = ie("\r", e[0][_][1][1]) + B;
                  break;
                default:
                  if (i.WTF) {
                    throw new Error("Unexpected PtgAttrSpaceType " + e[0][_][1][0]);
                  }
              }
              _ = -1;
            }
            f.push(T + f.pop() + B);
            break;
          case "PtgRefErr":
          case "PtgRefErr3d":
            f.push("#REF!");
            break;
          case "PtgExp":
            s = {
              c: m[1][1],
              r: m[1][0]
            };
            var D = {
              c: n.c,
              r: n.r
            };
            if (r.sharedf[Zt(s)]) {
              var I = r.sharedf[Zt(s)];
              f.push($a(I, l, D, r, i));
            } else {
              var F = false;
              for (o = 0; o != r.arrayf.length; ++o) {
                a = r.arrayf[o];
                if (!(s.c < a[0].s.c || s.c > a[0].e.c) && !(s.r < a[0].s.r || s.r > a[0].e.r)) {
                  f.push($a(a[1], l, D, r, i));
                  F = true;
                  break;
                }
              }
              if (!F) {
                f.push(m[1]);
              }
            }
            break;
          case "PtgArray":
            f.push("{" + Wa(m[1]) + "}");
            break;
          case "PtgMemArea":
            break;
          case "PtgAttrSpace":
          case "PtgAttrSpaceSemi":
            _ = g;
            break;
          case "PtgTbl":
          case "PtgMemErr":
            break;
          case "PtgMissArg":
            f.push("");
            break;
          case "PtgAreaErr":
          case "PtgAreaErr3d":
            f.push("#REF!");
            break;
          case "PtgList":
            f.push("Table" + m[1].idx + "[#" + m[1].rt + "]");
            break;
          case "PtgMemAreaN":
          case "PtgMemNoMemN":
          case "PtgAttrNoop":
          case "PtgSheet":
          case "PtgEndSheet":
          case "PtgMemFunc":
          case "PtgMemNoMem":
            break;
          case "PtgElfCol":
          case "PtgElfColS":
          case "PtgElfColSV":
          case "PtgElfColV":
          case "PtgElfLel":
          case "PtgElfRadical":
          case "PtgElfRadicalLel":
          case "PtgElfRadicalS":
          case "PtgElfRw":
          case "PtgElfRwV":
            throw new Error("Unsupported ELFs");
          case "PtgSxName":
          default:
            throw new Error("Unrecognized Formula Token: " + String(m));
        }
        if (3 != i.biff && _ >= 0 && -1 == ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"].indexOf(e[0][g][0])) {
          var R = true;
          switch ((m = e[0][_])[1][0]) {
            case 4:
              R = false;
            case 0:
              A = ie(" ", m[1][1]);
              break;
            case 5:
              R = false;
            case 1:
              A = ie("\r", m[1][1]);
              break;
            default:
              if (A = "", i.WTF) {
                throw new Error("Unexpected PtgAttrSpaceType " + m[1][0]);
              }
          }
          f.push((R ? A : "") + f.pop() + (R ? "" : A));
          _ = -1;
        }
      }
      if (f.length > 1 && i.WTF) {
        throw new Error("bad formula stack");
      }
      return f[0];
    }
    function Ja(e, t, n) {
      var r;
      var i = e.l + t;
      var o = 2 == n.biff ? 1 : 2;
      var a = e.read_shift(o);
      if (65535 == a) {
        return [[], Lt(e, t - 2)];
      }
      var s = Qa(e, a, n);
      if (t !== a + o) {
        r = za(e, t - a - o, s, n);
      }
      e.l = i;
      return [s, r];
    }
    function Za(e, t, n) {
      var r;
      var i = e.l + t;
      var o = e.read_shift(2);
      var a = Qa(e, o, n);
      return 65535 == o ? [[], Lt(e, t - 2)] : (t !== o + 2 && (r = za(e, i - o - 2, a, n)), [a, r]);
    }
    function es(e, t, n) {
      var r = e.l + t;
      var i = ri(e);
      if (2 == n.biff) {
        ++e.l;
      }
      var o = function (e) {
        var t;
        if (65535 !== Tt(e, e.l + 6)) {
          return [In(e), "n"];
        }
        switch (e[e.l]) {
          case 0:
            e.l += 8;
            return ["String", "s"];
          case 1:
            t = 1 === e[e.l + 2];
            e.l += 8;
            return [t, "b"];
          case 2:
            t = e[e.l + 2];
            e.l += 8;
            return [t, "e"];
          case 3:
            e.l += 8;
            return ["", "s"];
        }
        return [];
      }(e);
      var a = e.read_shift(1);
      if (2 != n.biff) {
        e.read_shift(1);
        if (n.biff >= 5) {
          e.read_shift(4);
        }
      }
      var s = function (e, t, n) {
        var r;
        var i = e.l + t;
        var o = 2 == n.biff ? 1 : 2;
        var a = e.read_shift(o);
        if (65535 == a) {
          return [[], Lt(e, t - 2)];
        }
        var s = Qa(e, a, n);
        if (t !== a + o) {
          r = za(e, t - a - o, s, n);
        }
        e.l = i;
        return [s, r];
      }(e, r - e.l, n);
      return {
        cell: i,
        val: o[0],
        formula: s,
        shared: a >> 3 & 1,
        tt: o[1]
      };
    }
    function ts(e, t, n, r, i) {
      var o = ii(t, n, i);
      var a = function (e) {
        if (null == e) {
          var t = Ut(8);
          t.write_shift(1, 3);
          t.write_shift(1, 0);
          t.write_shift(2, 0);
          t.write_shift(2, 0);
          t.write_shift(2, 65535);
          return t;
        }
        return Fn("number" == typeof e ? e : 0);
      }(e.v);
      var s = Ut(6);
      s.write_shift(2, 33);
      s.write_shift(4, 0);
      for (var c = Ut(e.bf.length), u = 0; u < e.bf.length; ++u) {
        c[u] = e.bf[u];
      }
      return S([o, a, s, c]);
    }
    function ns(e, t, n) {
      var r = e.read_shift(4);
      var i = Qa(e, r, n);
      var o = e.read_shift(4);
      return [i, o > 0 ? za(e, o, i, n) : null];
    }
    var rs = ns;
    var is = ns;
    var os = ns;
    var as = ns;
    var ss = {
      0: "BEEP",
      1: "OPEN",
      2: "OPEN.LINKS",
      3: "CLOSE.ALL",
      4: "SAVE",
      5: "SAVE.AS",
      6: "FILE.DELETE",
      7: "PAGE.SETUP",
      8: "PRINT",
      9: "PRINTER.SETUP",
      10: "QUIT",
      11: "NEW.WINDOW",
      12: "ARRANGE.ALL",
      13: "WINDOW.SIZE",
      14: "WINDOW.MOVE",
      15: "FULL",
      16: "CLOSE",
      17: "RUN",
      22: "SET.PRINT.AREA",
      23: "SET.PRINT.TITLES",
      24: "SET.PAGE.BREAK",
      25: "REMOVE.PAGE.BREAK",
      26: "FONT",
      27: "DISPLAY",
      28: "PROTECT.DOCUMENT",
      29: "PRECISION",
      30: "A1.R1C1",
      31: "CALCULATE.NOW",
      32: "CALCULATION",
      34: "DATA.FIND",
      35: "EXTRACT",
      36: "DATA.DELETE",
      37: "SET.DATABASE",
      38: "SET.CRITERIA",
      39: "SORT",
      40: "DATA.SERIES",
      41: "TABLE",
      42: "FORMAT.NUMBER",
      43: "ALIGNMENT",
      44: "STYLE",
      45: "BORDER",
      46: "CELL.PROTECTION",
      47: "COLUMN.WIDTH",
      48: "UNDO",
      49: "CUT",
      50: "COPY",
      51: "PASTE",
      52: "CLEAR",
      53: "PASTE.SPECIAL",
      54: "EDIT.DELETE",
      55: "INSERT",
      56: "FILL.RIGHT",
      57: "FILL.DOWN",
      61: "DEFINE.NAME",
      62: "CREATE.NAMES",
      63: "FORMULA.GOTO",
      64: "FORMULA.FIND",
      65: "SELECT.LAST.CELL",
      66: "SHOW.ACTIVE.CELL",
      67: "GALLERY.AREA",
      68: "GALLERY.BAR",
      69: "GALLERY.COLUMN",
      70: "GALLERY.LINE",
      71: "GALLERY.PIE",
      72: "GALLERY.SCATTER",
      73: "COMBINATION",
      74: "PREFERRED",
      75: "ADD.OVERLAY",
      76: "GRIDLINES",
      77: "SET.PREFERRED",
      78: "AXES",
      79: "LEGEND",
      80: "ATTACH.TEXT",
      81: "ADD.ARROW",
      82: "SELECT.CHART",
      83: "SELECT.PLOT.AREA",
      84: "PATTERNS",
      85: "MAIN.CHART",
      86: "OVERLAY",
      87: "SCALE",
      88: "FORMAT.LEGEND",
      89: "FORMAT.TEXT",
      90: "EDIT.REPEAT",
      91: "PARSE",
      92: "JUSTIFY",
      93: "HIDE",
      94: "UNHIDE",
      95: "WORKSPACE",
      96: "FORMULA",
      97: "FORMULA.FILL",
      98: "FORMULA.ARRAY",
      99: "DATA.FIND.NEXT",
      100: "DATA.FIND.PREV",
      101: "FORMULA.FIND.NEXT",
      102: "FORMULA.FIND.PREV",
      103: "ACTIVATE",
      104: "ACTIVATE.NEXT",
      105: "ACTIVATE.PREV",
      106: "UNLOCKED.NEXT",
      107: "UNLOCKED.PREV",
      108: "COPY.PICTURE",
      109: "SELECT",
      110: "DELETE.NAME",
      111: "DELETE.FORMAT",
      112: "VLINE",
      113: "HLINE",
      114: "VPAGE",
      115: "HPAGE",
      116: "VSCROLL",
      117: "HSCROLL",
      118: "ALERT",
      119: "NEW",
      120: "CANCEL.COPY",
      121: "SHOW.CLIPBOARD",
      122: "MESSAGE",
      124: "PASTE.LINK",
      125: "APP.ACTIVATE",
      126: "DELETE.ARROW",
      127: "ROW.HEIGHT",
      128: "FORMAT.MOVE",
      129: "FORMAT.SIZE",
      130: "FORMULA.REPLACE",
      131: "SEND.KEYS",
      132: "SELECT.SPECIAL",
      133: "APPLY.NAMES",
      134: "REPLACE.FONT",
      135: "FREEZE.PANES",
      136: "SHOW.INFO",
      137: "SPLIT",
      138: "ON.WINDOW",
      139: "ON.DATA",
      140: "DISABLE.INPUT",
      142: "OUTLINE",
      143: "LIST.NAMES",
      144: "FILE.CLOSE",
      145: "SAVE.WORKBOOK",
      146: "DATA.FORM",
      147: "COPY.CHART",
      148: "ON.TIME",
      149: "WAIT",
      150: "FORMAT.FONT",
      151: "FILL.UP",
      152: "FILL.LEFT",
      153: "DELETE.OVERLAY",
      155: "SHORT.MENUS",
      159: "SET.UPDATE.STATUS",
      161: "COLOR.PALETTE",
      162: "DELETE.STYLE",
      163: "WINDOW.RESTORE",
      164: "WINDOW.MAXIMIZE",
      166: "CHANGE.LINK",
      167: "CALCULATE.DOCUMENT",
      168: "ON.KEY",
      169: "APP.RESTORE",
      170: "APP.MOVE",
      171: "APP.SIZE",
      172: "APP.MINIMIZE",
      173: "APP.MAXIMIZE",
      174: "BRING.TO.FRONT",
      175: "SEND.TO.BACK",
      185: "MAIN.CHART.TYPE",
      186: "OVERLAY.CHART.TYPE",
      187: "SELECT.END",
      188: "OPEN.MAIL",
      189: "SEND.MAIL",
      190: "STANDARD.FONT",
      191: "CONSOLIDATE",
      192: "SORT.SPECIAL",
      193: "GALLERY.3D.AREA",
      194: "GALLERY.3D.COLUMN",
      195: "GALLERY.3D.LINE",
      196: "GALLERY.3D.PIE",
      197: "VIEW.3D",
      198: "GOAL.SEEK",
      199: "WORKGROUP",
      200: "FILL.GROUP",
      201: "UPDATE.LINK",
      202: "PROMOTE",
      203: "DEMOTE",
      204: "SHOW.DETAIL",
      206: "UNGROUP",
      207: "OBJECT.PROPERTIES",
      208: "SAVE.NEW.OBJECT",
      209: "SHARE",
      210: "SHARE.NAME",
      211: "DUPLICATE",
      212: "APPLY.STYLE",
      213: "ASSIGN.TO.OBJECT",
      214: "OBJECT.PROTECTION",
      215: "HIDE.OBJECT",
      216: "SET.EXTRACT",
      217: "CREATE.PUBLISHER",
      218: "SUBSCRIBE.TO",
      219: "ATTRIBUTES",
      220: "SHOW.TOOLBAR",
      222: "PRINT.PREVIEW",
      223: "EDIT.COLOR",
      224: "SHOW.LEVELS",
      225: "FORMAT.MAIN",
      226: "FORMAT.OVERLAY",
      227: "ON.RECALC",
      228: "EDIT.SERIES",
      229: "DEFINE.STYLE",
      240: "LINE.PRINT",
      243: "ENTER.DATA",
      249: "GALLERY.RADAR",
      250: "MERGE.STYLES",
      251: "EDITION.OPTIONS",
      252: "PASTE.PICTURE",
      253: "PASTE.PICTURE.LINK",
      254: "SPELLING",
      256: "ZOOM",
      259: "INSERT.OBJECT",
      260: "WINDOW.MINIMIZE",
      265: "SOUND.NOTE",
      266: "SOUND.PLAY",
      267: "FORMAT.SHAPE",
      268: "EXTEND.POLYGON",
      269: "FORMAT.AUTO",
      272: "GALLERY.3D.BAR",
      273: "GALLERY.3D.SURFACE",
      274: "FILL.AUTO",
      276: "CUSTOMIZE.TOOLBAR",
      277: "ADD.TOOL",
      278: "EDIT.OBJECT",
      279: "ON.DOUBLECLICK",
      280: "ON.ENTRY",
      281: "WORKBOOK.ADD",
      282: "WORKBOOK.MOVE",
      283: "WORKBOOK.COPY",
      284: "WORKBOOK.OPTIONS",
      285: "SAVE.WORKSPACE",
      288: "CHART.WIZARD",
      289: "DELETE.TOOL",
      290: "MOVE.TOOL",
      291: "WORKBOOK.SELECT",
      292: "WORKBOOK.ACTIVATE",
      293: "ASSIGN.TO.TOOL",
      295: "COPY.TOOL",
      296: "RESET.TOOL",
      297: "CONSTRAIN.NUMERIC",
      298: "PASTE.TOOL",
      302: "WORKBOOK.NEW",
      305: "SCENARIO.CELLS",
      306: "SCENARIO.DELETE",
      307: "SCENARIO.ADD",
      308: "SCENARIO.EDIT",
      309: "SCENARIO.SHOW",
      310: "SCENARIO.SHOW.NEXT",
      311: "SCENARIO.SUMMARY",
      312: "PIVOT.TABLE.WIZARD",
      313: "PIVOT.FIELD.PROPERTIES",
      314: "PIVOT.FIELD",
      315: "PIVOT.ITEM",
      316: "PIVOT.ADD.FIELDS",
      318: "OPTIONS.CALCULATION",
      319: "OPTIONS.EDIT",
      320: "OPTIONS.VIEW",
      321: "ADDIN.MANAGER",
      322: "MENU.EDITOR",
      323: "ATTACH.TOOLBARS",
      324: "VBAActivate",
      325: "OPTIONS.CHART",
      328: "VBA.INSERT.FILE",
      330: "VBA.PROCEDURE.DEFINITION",
      336: "ROUTING.SLIP",
      338: "ROUTE.DOCUMENT",
      339: "MAIL.LOGON",
      342: "INSERT.PICTURE",
      343: "EDIT.TOOL",
      344: "GALLERY.DOUGHNUT",
      350: "CHART.TREND",
      352: "PIVOT.ITEM.PROPERTIES",
      354: "WORKBOOK.INSERT",
      355: "OPTIONS.TRANSITION",
      356: "OPTIONS.GENERAL",
      370: "FILTER.ADVANCED",
      373: "MAIL.ADD.MAILER",
      374: "MAIL.DELETE.MAILER",
      375: "MAIL.REPLY",
      376: "MAIL.REPLY.ALL",
      377: "MAIL.FORWARD",
      378: "MAIL.NEXT.LETTER",
      379: "DATA.LABEL",
      380: "INSERT.TITLE",
      381: "FONT.PROPERTIES",
      382: "MACRO.OPTIONS",
      383: "WORKBOOK.HIDE",
      384: "WORKBOOK.UNHIDE",
      385: "WORKBOOK.DELETE",
      386: "WORKBOOK.NAME",
      388: "GALLERY.CUSTOM",
      390: "ADD.CHART.AUTOFORMAT",
      391: "DELETE.CHART.AUTOFORMAT",
      392: "CHART.ADD.DATA",
      393: "AUTO.OUTLINE",
      394: "TAB.ORDER",
      395: "SHOW.DIALOG",
      396: "SELECT.ALL",
      397: "UNGROUP.SHEETS",
      398: "SUBTOTAL.CREATE",
      399: "SUBTOTAL.REMOVE",
      400: "RENAME.OBJECT",
      412: "WORKBOOK.SCROLL",
      413: "WORKBOOK.NEXT",
      414: "WORKBOOK.PREV",
      415: "WORKBOOK.TAB.SPLIT",
      416: "FULL.SCREEN",
      417: "WORKBOOK.PROTECT",
      420: "SCROLLBAR.PROPERTIES",
      421: "PIVOT.SHOW.PAGES",
      422: "TEXT.TO.COLUMNS",
      423: "FORMAT.CHARTTYPE",
      424: "LINK.FORMAT",
      425: "TRACER.DISPLAY",
      430: "TRACER.NAVIGATE",
      431: "TRACER.CLEAR",
      432: "TRACER.ERROR",
      433: "PIVOT.FIELD.GROUP",
      434: "PIVOT.FIELD.UNGROUP",
      435: "CHECKBOX.PROPERTIES",
      436: "LABEL.PROPERTIES",
      437: "LISTBOX.PROPERTIES",
      438: "EDITBOX.PROPERTIES",
      439: "PIVOT.REFRESH",
      440: "LINK.COMBO",
      441: "OPEN.TEXT",
      442: "HIDE.DIALOG",
      443: "SET.DIALOG.FOCUS",
      444: "ENABLE.OBJECT",
      445: "PUSHBUTTON.PROPERTIES",
      446: "SET.DIALOG.DEFAULT",
      447: "FILTER",
      448: "FILTER.SHOW.ALL",
      449: "CLEAR.OUTLINE",
      450: "FUNCTION.WIZARD",
      451: "ADD.LIST.ITEM",
      452: "SET.LIST.ITEM",
      453: "REMOVE.LIST.ITEM",
      454: "SELECT.LIST.ITEM",
      455: "SET.CONTROL.VALUE",
      456: "SAVE.COPY.AS",
      458: "OPTIONS.LISTS.ADD",
      459: "OPTIONS.LISTS.DELETE",
      460: "SERIES.AXES",
      461: "SERIES.X",
      462: "SERIES.Y",
      463: "ERRORBAR.X",
      464: "ERRORBAR.Y",
      465: "FORMAT.CHART",
      466: "SERIES.ORDER",
      467: "MAIL.LOGOFF",
      468: "CLEAR.ROUTING.SLIP",
      469: "APP.ACTIVATE.MICROSOFT",
      470: "MAIL.EDIT.MAILER",
      471: "ON.SHEET",
      472: "STANDARD.WIDTH",
      473: "SCENARIO.MERGE",
      474: "SUMMARY.INFO",
      475: "FIND.FILE",
      476: "ACTIVE.CELL.FONT",
      477: "ENABLE.TIPWIZARD",
      478: "VBA.MAKE.ADDIN",
      480: "INSERTDATATABLE",
      481: "WORKGROUP.OPTIONS",
      482: "MAIL.SEND.MAILER",
      485: "AUTOCORRECT",
      489: "POST.DOCUMENT",
      491: "PICKLIST",
      493: "VIEW.SHOW",
      494: "VIEW.DEFINE",
      495: "VIEW.DELETE",
      509: "SHEET.BACKGROUND",
      510: "INSERT.MAP.OBJECT",
      511: "OPTIONS.MENONO",
      517: "MSOCHECKS",
      518: "NORMAL",
      519: "LAYOUT",
      520: "RM.PRINT.AREA",
      521: "CLEAR.PRINT.AREA",
      522: "ADD.PRINT.AREA",
      523: "MOVE.BRK",
      545: "HIDECURR.NOTE",
      546: "HIDEALL.NOTES",
      547: "DELETE.NOTE",
      548: "TRAVERSE.NOTES",
      549: "ACTIVATE.NOTES",
      620: "PROTECT.REVISIONS",
      621: "UNPROTECT.REVISIONS",
      647: "OPTIONS.ME",
      653: "WEB.PUBLISH",
      667: "NEWWEBQUERY",
      673: "PIVOT.TABLE.CHART",
      753: "OPTIONS.SAVE",
      755: "OPTIONS.SPELL",
      808: "HIDEALL.INKANNOTS"
    };
    var cs = {
      0: "COUNT",
      1: "IF",
      2: "ISNA",
      3: "ISERROR",
      4: "SUM",
      5: "AVERAGE",
      6: "MIN",
      7: "MAX",
      8: "ROW",
      9: "COLUMN",
      10: "NA",
      11: "NPV",
      12: "STDEV",
      13: "DOLLAR",
      14: "FIXED",
      15: "SIN",
      16: "COS",
      17: "TAN",
      18: "ATAN",
      19: "PI",
      20: "SQRT",
      21: "EXP",
      22: "LN",
      23: "LOG10",
      24: "ABS",
      25: "INT",
      26: "SIGN",
      27: "ROUND",
      28: "LOOKUP",
      29: "INDEX",
      30: "REPT",
      31: "MID",
      32: "LEN",
      33: "VALUE",
      34: "TRUE",
      35: "FALSE",
      36: "AND",
      37: "OR",
      38: "NOT",
      39: "MOD",
      40: "DCOUNT",
      41: "DSUM",
      42: "DAVERAGE",
      43: "DMIN",
      44: "DMAX",
      45: "DSTDEV",
      46: "VAR",
      47: "DVAR",
      48: "TEXT",
      49: "LINEST",
      50: "TREND",
      51: "LOGEST",
      52: "GROWTH",
      53: "GOTO",
      54: "HALT",
      55: "RETURN",
      56: "PV",
      57: "FV",
      58: "NPER",
      59: "PMT",
      60: "RATE",
      61: "MIRR",
      62: "IRR",
      63: "RAND",
      64: "MATCH",
      65: "DATE",
      66: "TIME",
      67: "DAY",
      68: "MONTH",
      69: "YEAR",
      70: "WEEKDAY",
      71: "HOUR",
      72: "MINUTE",
      73: "SECOND",
      74: "NOW",
      75: "AREAS",
      76: "ROWS",
      77: "COLUMNS",
      78: "OFFSET",
      79: "ABSREF",
      80: "RELREF",
      81: "ARGUMENT",
      82: "SEARCH",
      83: "TRANSPOSE",
      84: "ERROR",
      85: "STEP",
      86: "TYPE",
      87: "ECHO",
      88: "SET.NAME",
      89: "CALLER",
      90: "DEREF",
      91: "WINDOWS",
      92: "SERIES",
      93: "DOCUMENTS",
      94: "ACTIVE.CELL",
      95: "SELECTION",
      96: "RESULT",
      97: "ATAN2",
      98: "ASIN",
      99: "ACOS",
      100: "CHOOSE",
      101: "HLOOKUP",
      102: "VLOOKUP",
      103: "LINKS",
      104: "INPUT",
      105: "ISREF",
      106: "GET.FORMULA",
      107: "GET.NAME",
      108: "SET.VALUE",
      109: "LOG",
      110: "EXEC",
      111: "CHAR",
      112: "LOWER",
      113: "UPPER",
      114: "PROPER",
      115: "LEFT",
      116: "RIGHT",
      117: "EXACT",
      118: "TRIM",
      119: "REPLACE",
      120: "SUBSTITUTE",
      121: "CODE",
      122: "NAMES",
      123: "DIRECTORY",
      124: "FIND",
      125: "CELL",
      126: "ISERR",
      127: "ISTEXT",
      128: "ISNUMBER",
      129: "ISBLANK",
      130: "T",
      131: "N",
      132: "FOPEN",
      133: "FCLOSE",
      134: "FSIZE",
      135: "FREADLN",
      136: "FREAD",
      137: "FWRITELN",
      138: "FWRITE",
      139: "FPOS",
      140: "DATEVALUE",
      141: "TIMEVALUE",
      142: "SLN",
      143: "SYD",
      144: "DDB",
      145: "GET.DEF",
      146: "REFTEXT",
      147: "TEXTREF",
      148: "INDIRECT",
      149: "REGISTER",
      150: "CALL",
      151: "ADD.BAR",
      152: "ADD.MENU",
      153: "ADD.COMMAND",
      154: "ENABLE.COMMAND",
      155: "CHECK.COMMAND",
      156: "RENAME.COMMAND",
      157: "SHOW.BAR",
      158: "DELETE.MENU",
      159: "DELETE.COMMAND",
      160: "GET.CHART.ITEM",
      161: "DIALOG.BOX",
      162: "CLEAN",
      163: "MDETERM",
      164: "MINVERSE",
      165: "MMULT",
      166: "FILES",
      167: "IPMT",
      168: "PPMT",
      169: "COUNTA",
      170: "CANCEL.KEY",
      171: "FOR",
      172: "WHILE",
      173: "BREAK",
      174: "NEXT",
      175: "INITIATE",
      176: "REQUEST",
      177: "POKE",
      178: "EXECUTE",
      179: "TERMINATE",
      180: "RESTART",
      181: "HELP",
      182: "GET.BAR",
      183: "PRODUCT",
      184: "FACT",
      185: "GET.CELL",
      186: "GET.WORKSPACE",
      187: "GET.WINDOW",
      188: "GET.DOCUMENT",
      189: "DPRODUCT",
      190: "ISNONTEXT",
      191: "GET.NOTE",
      192: "NOTE",
      193: "STDEVP",
      194: "VARP",
      195: "DSTDEVP",
      196: "DVARP",
      197: "TRUNC",
      198: "ISLOGICAL",
      199: "DCOUNTA",
      200: "DELETE.BAR",
      201: "UNREGISTER",
      204: "USDOLLAR",
      205: "FINDB",
      206: "SEARCHB",
      207: "REPLACEB",
      208: "LEFTB",
      209: "RIGHTB",
      210: "MIDB",
      211: "LENB",
      212: "ROUNDUP",
      213: "ROUNDDOWN",
      214: "ASC",
      215: "DBCS",
      216: "RANK",
      219: "ADDRESS",
      220: "DAYS360",
      221: "TODAY",
      222: "VDB",
      223: "ELSE",
      224: "ELSE.IF",
      225: "END.IF",
      226: "FOR.CELL",
      227: "MEDIAN",
      228: "SUMPRODUCT",
      229: "SINH",
      230: "COSH",
      231: "TANH",
      232: "ASINH",
      233: "ACOSH",
      234: "ATANH",
      235: "DGET",
      236: "CREATE.OBJECT",
      237: "VOLATILE",
      238: "LAST.ERROR",
      239: "CUSTOM.UNDO",
      240: "CUSTOM.REPEAT",
      241: "FORMULA.CONVERT",
      242: "GET.LINK.INFO",
      243: "TEXT.BOX",
      244: "INFO",
      245: "GROUP",
      246: "GET.OBJECT",
      247: "DB",
      248: "PAUSE",
      251: "RESUME",
      252: "FREQUENCY",
      253: "ADD.TOOLBAR",
      254: "DELETE.TOOLBAR",
      255: "User",
      256: "RESET.TOOLBAR",
      257: "EVALUATE",
      258: "GET.TOOLBAR",
      259: "GET.TOOL",
      260: "SPELLING.CHECK",
      261: "ERROR.TYPE",
      262: "APP.TITLE",
      263: "WINDOW.TITLE",
      264: "SAVE.TOOLBAR",
      265: "ENABLE.TOOL",
      266: "PRESS.TOOL",
      267: "REGISTER.ID",
      268: "GET.WORKBOOK",
      269: "AVEDEV",
      270: "BETADIST",
      271: "GAMMALN",
      272: "BETAINV",
      273: "BINOMDIST",
      274: "CHIDIST",
      275: "CHIINV",
      276: "COMBIN",
      277: "CONFIDENCE",
      278: "CRITBINOM",
      279: "EVEN",
      280: "EXPONDIST",
      281: "FDIST",
      282: "FINV",
      283: "FISHER",
      284: "FISHERINV",
      285: "FLOOR",
      286: "GAMMADIST",
      287: "GAMMAINV",
      288: "CEILING",
      289: "HYPGEOMDIST",
      290: "LOGNORMDIST",
      291: "LOGINV",
      292: "NEGBINOMDIST",
      293: "NORMDIST",
      294: "NORMSDIST",
      295: "NORMINV",
      296: "NORMSINV",
      297: "STANDARDIZE",
      298: "ODD",
      299: "PERMUT",
      300: "POISSON",
      301: "TDIST",
      302: "WEIBULL",
      303: "SUMXMY2",
      304: "SUMX2MY2",
      305: "SUMX2PY2",
      306: "CHITEST",
      307: "CORREL",
      308: "COVAR",
      309: "FORECAST",
      310: "FTEST",
      311: "INTERCEPT",
      312: "PEARSON",
      313: "RSQ",
      314: "STEYX",
      315: "SLOPE",
      316: "TTEST",
      317: "PROB",
      318: "DEVSQ",
      319: "GEOMEAN",
      320: "HARMEAN",
      321: "SUMSQ",
      322: "KURT",
      323: "SKEW",
      324: "ZTEST",
      325: "LARGE",
      326: "SMALL",
      327: "QUARTILE",
      328: "PERCENTILE",
      329: "PERCENTRANK",
      330: "MODE",
      331: "TRIMMEAN",
      332: "TINV",
      334: "MOVIE.COMMAND",
      335: "GET.MOVIE",
      336: "CONCATENATE",
      337: "POWER",
      338: "PIVOT.ADD.DATA",
      339: "GET.PIVOT.TABLE",
      340: "GET.PIVOT.FIELD",
      341: "GET.PIVOT.ITEM",
      342: "RADIANS",
      343: "DEGREES",
      344: "SUBTOTAL",
      345: "SUMIF",
      346: "COUNTIF",
      347: "COUNTBLANK",
      348: "SCENARIO.GET",
      349: "OPTIONS.LISTS.GET",
      350: "ISPMT",
      351: "DATEDIF",
      352: "DATESTRING",
      353: "NUMBERSTRING",
      354: "ROMAN",
      355: "OPEN.DIALOG",
      356: "SAVE.DIALOG",
      357: "VIEW.GET",
      358: "GETPIVOTDATA",
      359: "HYPERLINK",
      360: "PHONETIC",
      361: "AVERAGEA",
      362: "MAXA",
      363: "MINA",
      364: "STDEVPA",
      365: "VARPA",
      366: "STDEVA",
      367: "VARA",
      368: "BAHTTEXT",
      369: "THAIDAYOFWEEK",
      370: "THAIDIGIT",
      371: "THAIMONTHOFYEAR",
      372: "THAINUMSOUND",
      373: "THAINUMSTRING",
      374: "THAISTRINGLENGTH",
      375: "ISTHAIDIGIT",
      376: "ROUNDBAHTDOWN",
      377: "ROUNDBAHTUP",
      378: "THAIYEAR",
      379: "RTD",
      380: "CUBEVALUE",
      381: "CUBEMEMBER",
      382: "CUBEMEMBERPROPERTY",
      383: "CUBERANKEDMEMBER",
      384: "HEX2BIN",
      385: "HEX2DEC",
      386: "HEX2OCT",
      387: "DEC2BIN",
      388: "DEC2HEX",
      389: "DEC2OCT",
      390: "OCT2BIN",
      391: "OCT2HEX",
      392: "OCT2DEC",
      393: "BIN2DEC",
      394: "BIN2OCT",
      395: "BIN2HEX",
      396: "IMSUB",
      397: "IMDIV",
      398: "IMPOWER",
      399: "IMABS",
      400: "IMSQRT",
      401: "IMLN",
      402: "IMLOG2",
      403: "IMLOG10",
      404: "IMSIN",
      405: "IMCOS",
      406: "IMEXP",
      407: "IMARGUMENT",
      408: "IMCONJUGATE",
      409: "IMAGINARY",
      410: "IMREAL",
      411: "COMPLEX",
      412: "IMSUM",
      413: "IMPRODUCT",
      414: "SERIESSUM",
      415: "FACTDOUBLE",
      416: "SQRTPI",
      417: "QUOTIENT",
      418: "DELTA",
      419: "GESTEP",
      420: "ISEVEN",
      421: "ISODD",
      422: "MROUND",
      423: "ERF",
      424: "ERFC",
      425: "BESSELJ",
      426: "BESSELK",
      427: "BESSELY",
      428: "BESSELI",
      429: "XIRR",
      430: "XNPV",
      431: "PRICEMAT",
      432: "YIELDMAT",
      433: "INTRATE",
      434: "RECEIVED",
      435: "DISC",
      436: "PRICEDISC",
      437: "YIELDDISC",
      438: "TBILLEQ",
      439: "TBILLPRICE",
      440: "TBILLYIELD",
      441: "PRICE",
      442: "YIELD",
      443: "DOLLARDE",
      444: "DOLLARFR",
      445: "NOMINAL",
      446: "EFFECT",
      447: "CUMPRINC",
      448: "CUMIPMT",
      449: "EDATE",
      450: "EOMONTH",
      451: "YEARFRAC",
      452: "COUPDAYBS",
      453: "COUPDAYS",
      454: "COUPDAYSNC",
      455: "COUPNCD",
      456: "COUPNUM",
      457: "COUPPCD",
      458: "DURATION",
      459: "MDURATION",
      460: "ODDLPRICE",
      461: "ODDLYIELD",
      462: "ODDFPRICE",
      463: "ODDFYIELD",
      464: "RANDBETWEEN",
      465: "WEEKNUM",
      466: "AMORDEGRC",
      467: "AMORLINC",
      468: "CONVERT",
      724: "SHEETJS",
      469: "ACCRINT",
      470: "ACCRINTM",
      471: "WORKDAY",
      472: "NETWORKDAYS",
      473: "GCD",
      474: "MULTINOMIAL",
      475: "LCM",
      476: "FVSCHEDULE",
      477: "CUBEKPIMEMBER",
      478: "CUBESET",
      479: "CUBESETCOUNT",
      480: "IFERROR",
      481: "COUNTIFS",
      482: "SUMIFS",
      483: "AVERAGEIF",
      484: "AVERAGEIFS"
    };
    var us = {
      2: 1,
      3: 1,
      10: 0,
      15: 1,
      16: 1,
      17: 1,
      18: 1,
      19: 0,
      20: 1,
      21: 1,
      22: 1,
      23: 1,
      24: 1,
      25: 1,
      26: 1,
      27: 2,
      30: 2,
      31: 3,
      32: 1,
      33: 1,
      34: 0,
      35: 0,
      38: 1,
      39: 2,
      40: 3,
      41: 3,
      42: 3,
      43: 3,
      44: 3,
      45: 3,
      47: 3,
      48: 2,
      53: 1,
      61: 3,
      63: 0,
      65: 3,
      66: 3,
      67: 1,
      68: 1,
      69: 1,
      70: 1,
      71: 1,
      72: 1,
      73: 1,
      74: 0,
      75: 1,
      76: 1,
      77: 1,
      79: 2,
      80: 2,
      83: 1,
      85: 0,
      86: 1,
      89: 0,
      90: 1,
      94: 0,
      95: 0,
      97: 2,
      98: 1,
      99: 1,
      101: 3,
      102: 3,
      105: 1,
      106: 1,
      108: 2,
      111: 1,
      112: 1,
      113: 1,
      114: 1,
      117: 2,
      118: 1,
      119: 4,
      121: 1,
      126: 1,
      127: 1,
      128: 1,
      129: 1,
      130: 1,
      131: 1,
      133: 1,
      134: 1,
      135: 1,
      136: 2,
      137: 2,
      138: 2,
      140: 1,
      141: 1,
      142: 3,
      143: 4,
      144: 4,
      161: 1,
      162: 1,
      163: 1,
      164: 1,
      165: 2,
      172: 1,
      175: 2,
      176: 2,
      177: 3,
      178: 2,
      179: 1,
      184: 1,
      186: 1,
      189: 3,
      190: 1,
      195: 3,
      196: 3,
      197: 1,
      198: 1,
      199: 3,
      201: 1,
      207: 4,
      210: 3,
      211: 1,
      212: 2,
      213: 2,
      214: 1,
      215: 1,
      225: 0,
      229: 1,
      230: 1,
      231: 1,
      232: 1,
      233: 1,
      234: 1,
      235: 3,
      244: 1,
      247: 4,
      252: 2,
      257: 1,
      261: 1,
      271: 1,
      273: 4,
      274: 2,
      275: 2,
      276: 2,
      277: 3,
      278: 3,
      279: 1,
      280: 3,
      281: 3,
      282: 3,
      283: 1,
      284: 1,
      285: 2,
      286: 4,
      287: 3,
      288: 2,
      289: 4,
      290: 3,
      291: 3,
      292: 3,
      293: 4,
      294: 1,
      295: 3,
      296: 1,
      297: 3,
      298: 1,
      299: 2,
      300: 3,
      301: 3,
      302: 4,
      303: 2,
      304: 2,
      305: 2,
      306: 2,
      307: 2,
      308: 2,
      309: 3,
      310: 2,
      311: 2,
      312: 2,
      313: 2,
      314: 2,
      315: 2,
      316: 4,
      325: 2,
      326: 2,
      327: 2,
      328: 2,
      331: 2,
      332: 2,
      337: 2,
      342: 1,
      343: 1,
      346: 2,
      347: 1,
      350: 4,
      351: 3,
      352: 1,
      353: 2,
      360: 1,
      368: 1,
      369: 1,
      370: 1,
      371: 1,
      372: 1,
      373: 1,
      374: 1,
      375: 1,
      376: 1,
      377: 1,
      378: 1,
      382: 3,
      385: 1,
      392: 1,
      393: 1,
      396: 2,
      397: 2,
      398: 2,
      399: 1,
      400: 1,
      401: 1,
      402: 1,
      403: 1,
      404: 1,
      405: 1,
      406: 1,
      407: 1,
      408: 1,
      409: 1,
      410: 1,
      414: 4,
      415: 1,
      416: 1,
      417: 2,
      420: 1,
      421: 1,
      422: 2,
      424: 1,
      425: 2,
      426: 2,
      427: 2,
      428: 2,
      430: 3,
      438: 3,
      439: 3,
      440: 3,
      443: 2,
      444: 2,
      445: 2,
      446: 2,
      447: 6,
      448: 6,
      449: 2,
      450: 2,
      464: 2,
      468: 3,
      476: 2,
      479: 1,
      480: 2,
      65535: 0
    };
    var ls = {
      "_xlfn.ACOT": "ACOT",
      "_xlfn.ACOTH": "ACOTH",
      "_xlfn.AGGREGATE": "AGGREGATE",
      "_xlfn.ARABIC": "ARABIC",
      "_xlfn.AVERAGEIF": "AVERAGEIF",
      "_xlfn.AVERAGEIFS": "AVERAGEIFS",
      "_xlfn.BASE": "BASE",
      "_xlfn.BETA.DIST": "BETA.DIST",
      "_xlfn.BETA.INV": "BETA.INV",
      "_xlfn.BINOM.DIST": "BINOM.DIST",
      "_xlfn.BINOM.DIST.RANGE": "BINOM.DIST.RANGE",
      "_xlfn.BINOM.INV": "BINOM.INV",
      "_xlfn.BITAND": "BITAND",
      "_xlfn.BITLSHIFT": "BITLSHIFT",
      "_xlfn.BITOR": "BITOR",
      "_xlfn.BITRSHIFT": "BITRSHIFT",
      "_xlfn.BITXOR": "BITXOR",
      "_xlfn.CEILING.MATH": "CEILING.MATH",
      "_xlfn.CEILING.PRECISE": "CEILING.PRECISE",
      "_xlfn.CHISQ.DIST": "CHISQ.DIST",
      "_xlfn.CHISQ.DIST.RT": "CHISQ.DIST.RT",
      "_xlfn.CHISQ.INV": "CHISQ.INV",
      "_xlfn.CHISQ.INV.RT": "CHISQ.INV.RT",
      "_xlfn.CHISQ.TEST": "CHISQ.TEST",
      "_xlfn.COMBINA": "COMBINA",
      "_xlfn.CONCAT": "CONCAT",
      "_xlfn.CONFIDENCE.NORM": "CONFIDENCE.NORM",
      "_xlfn.CONFIDENCE.T": "CONFIDENCE.T",
      "_xlfn.COT": "COT",
      "_xlfn.COTH": "COTH",
      "_xlfn.COUNTIFS": "COUNTIFS",
      "_xlfn.COVARIANCE.P": "COVARIANCE.P",
      "_xlfn.COVARIANCE.S": "COVARIANCE.S",
      "_xlfn.CSC": "CSC",
      "_xlfn.CSCH": "CSCH",
      "_xlfn.DAYS": "DAYS",
      "_xlfn.DECIMAL": "DECIMAL",
      "_xlfn.ECMA.CEILING": "ECMA.CEILING",
      "_xlfn.ERF.PRECISE": "ERF.PRECISE",
      "_xlfn.ERFC.PRECISE": "ERFC.PRECISE",
      "_xlfn.EXPON.DIST": "EXPON.DIST",
      "_xlfn.F.DIST": "F.DIST",
      "_xlfn.F.DIST.RT": "F.DIST.RT",
      "_xlfn.F.INV": "F.INV",
      "_xlfn.F.INV.RT": "F.INV.RT",
      "_xlfn.F.TEST": "F.TEST",
      "_xlfn.FILTERXML": "FILTERXML",
      "_xlfn.FLOOR.MATH": "FLOOR.MATH",
      "_xlfn.FLOOR.PRECISE": "FLOOR.PRECISE",
      "_xlfn.FORECAST.ETS": "FORECAST.ETS",
      "_xlfn.FORECAST.ETS.CONFINT": "FORECAST.ETS.CONFINT",
      "_xlfn.FORECAST.ETS.SEASONALITY": "FORECAST.ETS.SEASONALITY",
      "_xlfn.FORECAST.ETS.STAT": "FORECAST.ETS.STAT",
      "_xlfn.FORECAST.LINEAR": "FORECAST.LINEAR",
      "_xlfn.FORMULATEXT": "FORMULATEXT",
      "_xlfn.GAMMA": "GAMMA",
      "_xlfn.GAMMA.DIST": "GAMMA.DIST",
      "_xlfn.GAMMA.INV": "GAMMA.INV",
      "_xlfn.GAMMALN.PRECISE": "GAMMALN.PRECISE",
      "_xlfn.GAUSS": "GAUSS",
      "_xlfn.HYPGEOM.DIST": "HYPGEOM.DIST",
      "_xlfn.IFERROR": "IFERROR",
      "_xlfn.IFNA": "IFNA",
      "_xlfn.IFS": "IFS",
      "_xlfn.IMCOSH": "IMCOSH",
      "_xlfn.IMCOT": "IMCOT",
      "_xlfn.IMCSC": "IMCSC",
      "_xlfn.IMCSCH": "IMCSCH",
      "_xlfn.IMSEC": "IMSEC",
      "_xlfn.IMSECH": "IMSECH",
      "_xlfn.IMSINH": "IMSINH",
      "_xlfn.IMTAN": "IMTAN",
      "_xlfn.ISFORMULA": "ISFORMULA",
      "_xlfn.ISO.CEILING": "ISO.CEILING",
      "_xlfn.ISOWEEKNUM": "ISOWEEKNUM",
      "_xlfn.LOGNORM.DIST": "LOGNORM.DIST",
      "_xlfn.LOGNORM.INV": "LOGNORM.INV",
      "_xlfn.MAXIFS": "MAXIFS",
      "_xlfn.MINIFS": "MINIFS",
      "_xlfn.MODE.MULT": "MODE.MULT",
      "_xlfn.MODE.SNGL": "MODE.SNGL",
      "_xlfn.MUNIT": "MUNIT",
      "_xlfn.NEGBINOM.DIST": "NEGBINOM.DIST",
      "_xlfn.NETWORKDAYS.INTL": "NETWORKDAYS.INTL",
      "_xlfn.NIGBINOM": "NIGBINOM",
      "_xlfn.NORM.DIST": "NORM.DIST",
      "_xlfn.NORM.INV": "NORM.INV",
      "_xlfn.NORM.S.DIST": "NORM.S.DIST",
      "_xlfn.NORM.S.INV": "NORM.S.INV",
      "_xlfn.NUMBERVALUE": "NUMBERVALUE",
      "_xlfn.PDURATION": "PDURATION",
      "_xlfn.PERCENTILE.EXC": "PERCENTILE.EXC",
      "_xlfn.PERCENTILE.INC": "PERCENTILE.INC",
      "_xlfn.PERCENTRANK.EXC": "PERCENTRANK.EXC",
      "_xlfn.PERCENTRANK.INC": "PERCENTRANK.INC",
      "_xlfn.PERMUTATIONA": "PERMUTATIONA",
      "_xlfn.PHI": "PHI",
      "_xlfn.POISSON.DIST": "POISSON.DIST",
      "_xlfn.QUARTILE.EXC": "QUARTILE.EXC",
      "_xlfn.QUARTILE.INC": "QUARTILE.INC",
      "_xlfn.QUERYSTRING": "QUERYSTRING",
      "_xlfn.RANK.AVG": "RANK.AVG",
      "_xlfn.RANK.EQ": "RANK.EQ",
      "_xlfn.RRI": "RRI",
      "_xlfn.SEC": "SEC",
      "_xlfn.SECH": "SECH",
      "_xlfn.SHEET": "SHEET",
      "_xlfn.SHEETS": "SHEETS",
      "_xlfn.SKEW.P": "SKEW.P",
      "_xlfn.STDEV.P": "STDEV.P",
      "_xlfn.STDEV.S": "STDEV.S",
      "_xlfn.SUMIFS": "SUMIFS",
      "_xlfn.SWITCH": "SWITCH",
      "_xlfn.T.DIST": "T.DIST",
      "_xlfn.T.DIST.2T": "T.DIST.2T",
      "_xlfn.T.DIST.RT": "T.DIST.RT",
      "_xlfn.T.INV": "T.INV",
      "_xlfn.T.INV.2T": "T.INV.2T",
      "_xlfn.T.TEST": "T.TEST",
      "_xlfn.TEXTJOIN": "TEXTJOIN",
      "_xlfn.UNICHAR": "UNICHAR",
      "_xlfn.UNICODE": "UNICODE",
      "_xlfn.VAR.P": "VAR.P",
      "_xlfn.VAR.S": "VAR.S",
      "_xlfn.WEBSERVICE": "WEBSERVICE",
      "_xlfn.WEIBULL.DIST": "WEIBULL.DIST",
      "_xlfn.WORKDAY.INTL": "WORKDAY.INTL",
      "_xlfn.XOR": "XOR",
      "_xlfn.Z.TEST": "Z.TEST"
    };
    function fs(e) {
      if ("of:" == e.slice(0, 3)) {
        e = e.slice(3);
      }
      if (61 == e.charCodeAt(0) && 61 == (e = e.slice(1)).charCodeAt(0)) {
        e = e.slice(1);
      }
      return (e = (e = (e = e.replace(/COM\.MICROSOFT\./g, "")).replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function (e, t) {
        return t.replace(/\./g, "");
      })).replace(/\[.(#[A-Z]*[?!])\]/g, "$1")).replace(/[;~]/g, ",").replace(/\|/g, ";");
    }
    function ds(e) {
      var t = e.split(":");
      return [t[0].split(".")[0], t[0].split(".")[1] + (t.length > 1 ? ":" + (t[1].split(".")[1] || t[1].split(".")[0]) : "")];
    }
    var hs = {};
    var ps = {};
    Jn.WS = ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"];
    var _s = "undefined" !== typeof Map;
    function As(e, t, n) {
      var r = 0;
      var i = e.length;
      if (n) {
        if (_s ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t)) {
          for (var o = _s ? n.get(t) : n[t]; r < o.length; ++r) {
            if (e[o[r]].t === t) {
              e.Count++;
              return o[r];
            }
          }
        }
      } else {
        for (; r < i; ++r) {
          if (e[r].t === t) {
            e.Count++;
            return r;
          }
        }
      }
      e[i] = {
        t: t
      };
      e.Count++;
      e.Unique++;
      if (n) {
        if (_s) {
          if (!n.has(t)) {
            n.set(t, []);
          }
          n.get(t).push(i);
        } else {
          if (!Object.prototype.hasOwnProperty.call(n, t)) {
            n[t] = [];
          }
          n[t].push(i);
        }
      }
      return i;
    }
    function gs(e, t) {
      var n = {
        min: e + 1,
        max: e + 1
      };
      var r = -1;
      if (t.MDW) {
        mo = t.MDW;
      }
      if (null != t.width) {
        n.customWidth = 1;
      } else {
        if (null != t.wpx) {
          r = bo(t.wpx);
        } else {
          if (null != t.wch) {
            r = t.wch;
          }
        }
      }
      if (r > -1) {
        n.width = wo(r);
        n.customWidth = 1;
      } else {
        if (null != t.width) {
          n.width = t.width;
        }
      }
      if (t.hidden) {
        n.hidden = true;
      }
      return n;
    }
    function vs(e, t) {
      if (e) {
        var n = [.7, .7, .75, .75, .3, .3];
        if ("xlml" == t) {
          n = [1, 1, 1, 1, .5, .5];
        }
        if (null == e.left) {
          e.left = n[0];
        }
        if (null == e.right) {
          e.right = n[1];
        }
        if (null == e.top) {
          e.top = n[2];
        }
        if (null == e.bottom) {
          e.bottom = n[3];
        }
        if (null == e.header) {
          e.header = n[4];
        }
        if (null == e.footer) {
          e.footer = n[5];
        }
      }
    }
    function ms(e, t, n) {
      var r = n.revssf[null != t.z ? t.z : "General"];
      var i = 60;
      var o = e.length;
      if (null == r && n.ssf) {
        for (; i < 392; ++i) {
          if (null == n.ssf[i]) {
            D.load(t.z, i);
            n.ssf[i] = t.z;
            n.revssf[t.z] = r = i;
            break;
          }
        }
      }
      for (i = 0; i != o; ++i) {
        if (e[i].numFmtId === r) {
          return i;
        }
      }
      e[o] = {
        numFmtId: r,
        fontId: 0,
        fillId: 0,
        borderId: 0,
        xfId: 0,
        applyNumberFormat: 1
      };
      return o;
    }
    function ys(e, t, n, r, i, o) {
      try {
        if (r.cellNF) {
          e.z = D._table[t];
        }
      } catch (_l) {
        if (r.WTF) {
          throw _l;
        }
      }
      if ("z" !== e.t) {
        if ("d" === e.t && "string" === typeof e.v) {
          e.v = te(e.v);
        }
        if (!r || false !== r.cellText) {
          try {
            if (null == D._table[t]) {
              D.load(P[t] || "General", t);
            }
            if ("e" === e.t) {
              e.w = e.w || Qn[e.v];
            } else if (0 === t) {
              if ("n" === e.t) {
                if ((0 | e.v) === e.v) {
                  e.w = D._general_int(e.v);
                } else {
                  e.w = D._general_num(e.v);
                }
              } else if ("d" === e.t) {
                var a = W(e.v);
                e.w = (0 | a) === a ? D._general_int(a) : D._general_num(a);
              } else {
                if (undefined === e.v) {
                  return "";
                }
                e.w = D._general(e.v, ps);
              }
            } else if ("d" === e.t) {
              e.w = D.format(t, W(e.v), ps);
            } else {
              e.w = D.format(t, e.v, ps);
            }
          } catch (_l) {
            if (r.WTF) {
              throw _l;
            }
          }
        }
        if (r.cellStyles && null != n) {
          try {
            e.s = o.Fills[n];
            if (e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb) {
              e.s.fgColor.rgb = vo(i.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0);
              if (r.WTF) {
                e.s.fgColor.raw_rgb = i.themeElements.clrScheme[e.s.fgColor.theme].rgb;
              }
            }
            if (e.s.bgColor && e.s.bgColor.theme) {
              e.s.bgColor.rgb = vo(i.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0);
              if (r.WTF) {
                e.s.bgColor.raw_rgb = i.themeElements.clrScheme[e.s.bgColor.theme].rgb;
              }
            }
          } catch (_l) {
            if (r.WTF && o.Fills) {
              throw _l;
            }
          }
        }
      }
    }
    function bs(e, t, n) {
      if (e && e["!ref"]) {
        var r = nn(e["!ref"]);
        if (r.e.c < r.s.c || r.e.r < r.s.r) {
          throw new Error("Bad range (" + n + "): " + e["!ref"]);
        }
      }
    }
    var ws = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g;
    var Es = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/;
    var xs = /<(?:\w:)?hyperlink [^>]*>/gm;
    var Cs = /"(\w*:\w*)"/;
    var Os = /<(?:\w:)?col\b[^>]*[\/]?>/g;
    var ks = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g;
    var Ss = /<(?:\w:)?pageMargins[^>]*\/>/g;
    var Ts = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/;
    var Bs = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
    function Ds(e, t, n, r, i, o, a) {
      if (!e) {
        return e;
      }
      if (!r) {
        r = {
          "!id": {}
        };
      }
      var s = t.dense ? [] : {};
      var c = {
        s: {
          r: 2e6,
          c: 2e6
        },
        e: {
          r: 0,
          c: 0
        }
      };
      var u = "";
      var l = "";
      var f = e.match(Es);
      if (f) {
        u = e.slice(0, f.index);
        l = e.slice(f.index + f[0].length);
      } else {
        u = l = e;
      }
      var d = u.match(Ts);
      if (d) {
        Is(d[0], s, i, n);
      }
      var h = (u.match(/<(?:\w*:)?dimension/) || {
        index: -1
      }).index;
      if (h > 0) {
        var p = u.slice(h, h + 50).match(Cs);
        if (p) {
          (function (e, t) {
            var n = nn(t);
            if (n.s.r <= n.e.r && n.s.c <= n.e.c && n.s.r >= 0 && n.s.c >= 0) {
              e["!ref"] = tn(n);
            }
          })(s, p[1]);
        }
      }
      var _ = u.match(Bs);
      if (_ && _[1]) {
        (function (e, t) {
          if (!t.Views) {
            t.Views = [{}];
          }
          (e.match(Ps) || []).forEach(function (e, n) {
            var r = Ee(e);
            if (!t.Views[n]) {
              t.Views[n] = {};
            }
            if (+r.zoomScale) {
              t.Views[n].zoom = +r.zoomScale;
            }
            if (Ne(r.rightToLeft)) {
              t.Views[n].RTL = true;
            }
          });
        })(_[1], i);
      }
      var A = [];
      if (t.cellStyles) {
        var g = u.match(Os);
        if (g) {
          (function (e, t) {
            for (var n = false, r = 0; r != t.length; ++r) {
              var i = Ee(t[r], true);
              if (i.hidden) {
                i.hidden = Ne(i.hidden);
              }
              var o = parseInt(i.min, 10) - 1;
              var a = parseInt(i.max, 10) - 1;
              for (delete i.min, delete i.max, i.width = +i.width, !n && i.width && (n = true, xo(i.width)), Co(i); o <= a;) {
                e[o++] = re(i);
              }
            }
          })(A, g);
        }
      }
      if (f) {
        Ms(f[1], s, t, c, o, a);
      }
      var v = l.match(ks);
      if (v) {
        s["!autofilter"] = function (e) {
          return {
            ref: (e.match(/ref="([^"]*)"/) || [])[1]
          };
        }(v[0]);
      }
      var m = [];
      var y = l.match(ws);
      if (y) {
        for (h = 0; h != y.length; ++h) {
          m[h] = nn(y[h].slice(y[h].indexOf("\"") + 1));
        }
      }
      var b = l.match(xs);
      if (b) {
        (function (e, t, n) {
          for (var r = Array.isArray(e), i = 0; i != t.length; ++i) {
            var o = Ee(Me(t[i]), true);
            if (!o.ref) {
              return;
            }
            var a = ((n || {})["!id"] || [])[o.id];
            if (a) {
              o.Target = a.Target;
              if (o.location) {
                o.Target += "#" + o.location;
              }
            } else {
              o.Target = "#" + o.location;
              a = {
                Target: o.Target,
                TargetMode: "Internal"
              };
            }
            o.Rel = a;
            if (o.tooltip) {
              o.Tooltip = o.tooltip;
              delete o.tooltip;
            }
            for (var s = nn(o.ref), c = s.s.r; c <= s.e.r; ++c) {
              for (var u = s.s.c; u <= s.e.c; ++u) {
                var l = Zt({
                  c: u,
                  r: c
                });
                if (r) {
                  if (!e[c]) {
                    e[c] = [];
                  }
                  if (!e[c][u]) {
                    e[c][u] = {
                      t: "z",
                      v: undefined
                    };
                  }
                  e[c][u].l = o;
                } else {
                  if (!e[l]) {
                    e[l] = {
                      t: "z",
                      v: undefined
                    };
                  }
                  e[l].l = o;
                }
              }
            }
          }
        })(s, b, r);
      }
      var w = l.match(Ss);
      if (w) {
        s["!margins"] = function (e) {
          var t = {};
          ["left", "right", "top", "bottom", "header", "footer"].forEach(function (n) {
            if (e[n]) {
              t[n] = parseFloat(e[n]);
            }
          });
          return t;
        }(Ee(w[0]));
      }
      if (!s["!ref"] && c.e.c >= c.s.c && c.e.r >= c.s.r) {
        s["!ref"] = tn(c);
      }
      if (t.sheetRows > 0 && s["!ref"]) {
        var E = nn(s["!ref"]);
        if (t.sheetRows <= +E.e.r) {
          E.e.r = t.sheetRows - 1;
          if (E.e.r > c.e.r) {
            E.e.r = c.e.r;
          }
          if (E.e.r < E.s.r) {
            E.s.r = E.e.r;
          }
          if (E.e.c > c.e.c) {
            E.e.c = c.e.c;
          }
          if (E.e.c < E.s.c) {
            E.s.c = E.e.c;
          }
          s["!fullref"] = s["!ref"];
          s["!ref"] = tn(E);
        }
      }
      if (A.length > 0) {
        s["!cols"] = A;
      }
      if (m.length > 0) {
        s["!merges"] = m;
      }
      return s;
    }
    function Is(e, t, n, r) {
      var i = Ee(e);
      if (!n.Sheets[r]) {
        n.Sheets[r] = {};
      }
      if (i.codeName) {
        n.Sheets[r].CodeName = ke(Me(i.codeName));
      }
    }
    var Fs = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"];
    var Rs = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];
    var Ps = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
    function Ns(e, t, n, r) {
      if (undefined === e.v && "string" !== typeof e.f || "z" === e.t) {
        return "";
      }
      var i = "";
      var o = e.t;
      var a = e.v;
      if ("z" !== e.t) {
        switch (e.t) {
          case "b":
            i = e.v ? "1" : "0";
            break;
          case "n":
            i = "" + e.v;
            break;
          case "e":
            i = Qn[e.v];
            break;
          case "d":
            if (r && r.cellDates) {
              i = te(e.v, -1).toISOString();
            } else {
              (e = re(e)).t = "n";
              i = "" + (e.v = W(te(e.v)));
            }
            if ("undefined" === typeof e.z) {
              e.z = D._table[14];
            }
            break;
          default:
            i = e.v;
        }
      }
      var s = Ye("v", Be(i));
      var c = {
        r: t
      };
      var u = ms(r.cellXfs, e, r);
      switch (0 !== u && (c.s = u), e.t) {
        case "n":
          break;
        case "d":
          c.t = "d";
          break;
        case "b":
          c.t = "b";
          break;
        case "e":
          c.t = "e";
          break;
        case "z":
          break;
        default:
          if (null == e.v) {
            delete e.t;
            break;
          }
          if (r && r.bookSST) {
            s = Ye("v", "" + As(r.Strings, e.v, r.revStrings));
            c.t = "s";
            break;
          }
          c.t = "str";
      }
      if (e.t != o) {
        e.t = o;
        e.v = a;
      }
      if ("string" == typeof e.f && e.f) {
        var l = e.F && e.F.slice(0, t.length) == t ? {
          t: "array",
          ref: e.F
        } : null;
        s = $e("f", Be(e.f), l) + (null != e.v ? s : "");
      }
      if (e.l) {
        n["!links"].push([t, e.l]);
      }
      if (e.c) {
        n["!comments"].push([t, e.c]);
      }
      return $e("c", s, c);
    }
    var Ms = function () {
      var e = /<(?:\w+:)?c[ \/>]/;
      var t = /<\/(?:\w+:)?row>/;
      var n = /r=["']([^"']*)["']/;
      var r = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;
      var i = /ref=["']([^"']*)["']/;
      var o = Ve("v");
      var a = Ve("f");
      return function (s, c, u, l, f, d) {
        for (var h, p, _, A, g, v = 0, m = "", y = [], b = [], w = 0, E = 0, x = 0, C = "", O = 0, k = 0, S = 0, T = 0, B = Array.isArray(d.CellXf), I = [], F = [], R = Array.isArray(c), P = [], N = {}, M = false, j = !!u.sheetStubs, L = s.split(t), U = 0, H = L.length; U != H; ++U) {
          var V = (m = L[U].trim()).length;
          if (0 !== V) {
            for (v = 0; v < V && 62 !== m.charCodeAt(v); ++v) {
              ;
            }
            ++v;
            O = null != (p = Ee(m.slice(0, v), true)).r ? parseInt(p.r, 10) : O + 1;
            k = -1;
            if (!(u.sheetRows && u.sheetRows < O)) {
              if (l.s.r > O - 1) {
                l.s.r = O - 1;
              }
              if (l.e.r < O - 1) {
                l.e.r = O - 1;
              }
              if (u && u.cellStyles) {
                N = {};
                M = false;
                if (p.ht) {
                  M = true;
                  N.hpt = parseFloat(p.ht);
                  N.hpx = ko(N.hpt);
                }
                if ("1" == p.hidden) {
                  M = true;
                  N.hidden = true;
                }
                if (null != p.outlineLevel) {
                  M = true;
                  N.level = +p.outlineLevel;
                }
                if (M) {
                  P[O - 1] = N;
                }
              }
              y = m.slice(v).split(e);
              for (var G = 0; G != y.length && "<" == y[G].trim().charAt(0); ++G) {
                ;
              }
              for (y = y.slice(G), v = 0; v != y.length; ++v) {
                if (0 !== (m = y[v].trim()).length) {
                  b = m.match(n);
                  w = v;
                  E = 0;
                  x = 0;
                  m = "<c " + ("<" == m.slice(0, 1) ? ">" : "") + m;
                  if (null != b && 2 === b.length) {
                    for (w = 0, C = b[1], E = 0; E != C.length && !((x = C.charCodeAt(E) - 64) < 1 || x > 26); ++E) {
                      w = 26 * w + x;
                    }
                    k = --w;
                  } else {
                    ++k;
                  }
                  for (E = 0; E != m.length && 62 !== m.charCodeAt(E); ++E) {
                    ;
                  }
                  ++E;
                  if (!(p = Ee(m.slice(0, E), true)).r) {
                    p.r = Zt({
                      r: O - 1,
                      c: k
                    });
                  }
                  h = {
                    t: ""
                  };
                  if (null != (b = (C = m.slice(E)).match(o)) && "" !== b[1]) {
                    h.v = ke(b[1]);
                  }
                  if (u.cellFormula) {
                    if (null != (b = C.match(a)) && "" !== b[1]) {
                      h.f = ke(Me(b[1])).replace(/\r\n/g, "\n");
                      if (!u.xlfn) {
                        h.f = Aa(h.f);
                      }
                      if (b[0].indexOf("t=\"array\"") > -1) {
                        h.F = (C.match(i) || [])[1];
                        if (h.F.indexOf(":") > -1) {
                          I.push([nn(h.F), h.F]);
                        }
                      } else if (b[0].indexOf("t=\"shared\"") > -1) {
                        A = Ee(b[0]);
                        var z = ke(Me(b[1]));
                        if (!u.xlfn) {
                          z = Aa(z);
                        }
                        F[parseInt(A.si, 10)] = [A, z, p.r];
                      }
                    } else if ((b = C.match(/<f[^>]*\/>/)) && F[(A = Ee(b[0])).si]) {
                      h.f = _a(F[A.si][1], F[A.si][2], p.r);
                    }
                    var Q = Jt(p.r);
                    for (E = 0; E < I.length; ++E) {
                      if (Q.r >= I[E][0].s.r && Q.r <= I[E][0].e.r && Q.c >= I[E][0].s.c && Q.c <= I[E][0].e.c) {
                        h.F = I[E][1];
                      }
                    }
                  }
                  if (null == p.t && undefined === h.v) {
                    if (h.f || h.F) {
                      h.v = 0;
                      h.t = "n";
                    } else {
                      if (!j) {
                        continue;
                      }
                      h.t = "z";
                    }
                  } else {
                    h.t = p.t || "n";
                  }
                  switch (l.s.c > k && (l.s.c = k), l.e.c < k && (l.e.c = k), h.t) {
                    case "n":
                      if ("" == h.v || null == h.v) {
                        if (!j) {
                          continue;
                        }
                        h.t = "z";
                      } else {
                        h.v = parseFloat(h.v);
                      }
                      break;
                    case "s":
                      if ("undefined" == typeof h.v) {
                        if (!j) {
                          continue;
                        }
                        h.t = "z";
                      } else {
                        _ = hs[parseInt(h.v, 10)];
                        h.v = _.t;
                        h.r = _.r;
                        if (u.cellHTML) {
                          h.h = _.h;
                        }
                      }
                      break;
                    case "str":
                      h.t = "s";
                      h.v = null != h.v ? Me(h.v) : "";
                      if (u.cellHTML) {
                        h.h = Fe(h.v);
                      }
                      break;
                    case "inlineStr":
                      b = C.match(r);
                      h.t = "s";
                      if (null != b && (_ = Xi(b[1]))) {
                        h.v = _.t;
                        if (u.cellHTML) {
                          h.h = _.h;
                        }
                      } else {
                        h.v = "";
                      }
                      break;
                    case "b":
                      h.v = Ne(h.v);
                      break;
                    case "d":
                      if (u.cellDates) {
                        h.v = te(h.v, 1);
                      } else {
                        h.v = W(te(h.v, 1));
                        h.t = "n";
                      }
                      break;
                    case "e":
                      if (!(u && false === u.cellText)) {
                        h.w = h.v;
                      }
                      h.v = Wn[h.v];
                  }
                  S = T = 0;
                  g = null;
                  if (B && undefined !== p.s && null != (g = d.CellXf[p.s])) {
                    if (null != g.numFmtId) {
                      S = g.numFmtId;
                    }
                    if (u.cellStyles && null != g.fillId) {
                      T = g.fillId;
                    }
                  }
                  ys(h, S, T, u, f, d);
                  if (u.cellDates && B && "n" == h.t && D.is_date(D._table[S])) {
                    h.t = "d";
                    h.v = q(h.v);
                  }
                  if (R) {
                    var K = Jt(p.r);
                    if (!c[K.r]) {
                      c[K.r] = [];
                    }
                    c[K.r][K.c] = h;
                  } else {
                    c[p.r] = h;
                  }
                }
              }
            }
          }
        }
        if (P.length > 0) {
          c["!rows"] = P;
        }
      };
    }();
    var js = $e("worksheet", null, {
      xmlns: tt.main[0],
      "xmlns:r": tt.r
    });
    function Ls(e, t, n, r) {
      var i;
      var o = [ve, js];
      var a = n.SheetNames[e];
      var s = "";
      var c = n.Sheets[a];
      if (null == c) {
        c = {};
      }
      var u = c["!ref"] || "A1";
      var l = nn(u);
      if (l.e.c > 16383 || l.e.r > 1048575) {
        if (t.WTF) {
          throw new Error("Range " + u + " exceeds format limit A1:XFD1048576");
        }
        l.e.c = Math.min(l.e.c, 16383);
        l.e.r = Math.min(l.e.c, 1048575);
        u = tn(l);
      }
      if (!r) {
        r = {};
      }
      c["!comments"] = [];
      var f = [];
      !function (e, t, n, r, i) {
        var o = false;
        var a = {};
        var s = null;
        if ("xlsx" !== r.bookType && t.vbaraw) {
          var c = t.SheetNames[n];
          try {
            if (t.Workbook) {
              c = t.Workbook.Sheets[n].CodeName || c;
            }
          } catch (_l) {}
          o = true;
          a.codeName = je(Be(c));
        }
        if (e && e["!outline"]) {
          var u = {
            summaryBelow: 1,
            summaryRight: 1
          };
          if (e["!outline"].above) {
            u.summaryBelow = 0;
          }
          if (e["!outline"].left) {
            u.summaryRight = 0;
          }
          s = (s || "") + $e("outlinePr", null, u);
        }
        if (o || s) {
          i[i.length] = $e("sheetPr", s, a);
        }
      }(c, n, e, t, o);
      o[o.length] = $e("dimension", null, {
        ref: u
      });
      o[o.length] = function (e, t, n, r) {
        var i = {
          workbookViewId: "0"
        };
        if ((((r || {}).Workbook || {}).Views || [])[0]) {
          i.rightToLeft = r.Workbook.Views[0].RTL ? "1" : "0";
        }
        return $e("sheetViews", $e("sheetView", null, i), {});
      }(0, 0, 0, n);
      if (t.sheetFormat) {
        o[o.length] = $e("sheetFormatPr", null, {
          defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
          baseColWidth: t.sheetFormat.baseColWidth || "10",
          outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
        });
      }
      if (null != c["!cols"] && c["!cols"].length > 0) {
        o[o.length] = function (e, t) {
          for (var n, r = ["<cols>"], i = 0; i != t.length; ++i) {
            if (n = t[i]) {
              r[r.length] = $e("col", null, gs(i, n));
            }
          }
          r[r.length] = "</cols>";
          return r.join("");
        }(0, c["!cols"]);
      }
      o[i = o.length] = "<sheetData/>";
      c["!links"] = [];
      if (null != c["!ref"] && (s = function (e, t, n, r) {
        var i;
        var o;
        var a = [];
        var s = [];
        var c = nn(e["!ref"]);
        var u = "";
        var l = "";
        var f = [];
        var d = 0;
        var h = 0;
        var p = e["!rows"];
        var _ = Array.isArray(e);
        var A = {
          r: l
        };
        var g = -1;
        for (h = c.s.c; h <= c.e.c; ++h) {
          f[h] = $t(h);
        }
        for (d = c.s.r; d <= c.e.r; ++d) {
          for (s = [], l = Yt(d), h = c.s.c; h <= c.e.c; ++h) {
            i = f[h] + l;
            var v = _ ? (e[d] || [])[h] : e[i];
            if (undefined !== v) {
              if (null != (u = Ns(v, i, e, t))) {
                s.push(u);
              }
            }
          }
          if (s.length > 0 || p && p[d]) {
            A = {
              r: l
            };
            if (p && p[d]) {
              if ((o = p[d]).hidden) {
                A.hidden = 1;
              }
              g = -1;
              if (o.hpx) {
                g = Oo(o.hpx);
              } else {
                if (o.hpt) {
                  g = o.hpt;
                }
              }
              if (g > -1) {
                A.ht = g;
                A.customHeight = 1;
              }
              if (o.level) {
                A.outlineLevel = o.level;
              }
            }
            a[a.length] = $e("row", s.join(""), A);
          }
        }
        if (p) {
          for (; d < p.length; ++d) {
            if (p && p[d]) {
              A = {
                r: d + 1
              };
              if ((o = p[d]).hidden) {
                A.hidden = 1;
              }
              g = -1;
              if (o.hpx) {
                g = Oo(o.hpx);
              } else {
                if (o.hpt) {
                  g = o.hpt;
                }
              }
              if (g > -1) {
                A.ht = g;
                A.customHeight = 1;
              }
              if (o.level) {
                A.outlineLevel = o.level;
              }
              a[a.length] = $e("row", "", A);
            }
          }
        }
        return a.join("");
      }(c, t, 0, 0)).length > 0) {
        o[o.length] = s;
      }
      if (o.length > i + 1) {
        o[o.length] = "</sheetData>";
        o[i] = o[i].replace("/>", ">");
      }
      if (null != c["!protect"]) {
        o[o.length] = function (e) {
          var t = {
            sheet: 1
          };
          Fs.forEach(function (n) {
            if (null != e[n] && e[n]) {
              t[n] = "1";
            }
          });
          Rs.forEach(function (n) {
            if (!(null == e[n] || e[n])) {
              t[n] = "0";
            }
          });
          if (e.password) {
            t.password = fo(e.password).toString(16).toUpperCase();
          }
          return $e("sheetProtection", null, t);
        }(c["!protect"]);
      }
      if (null != c["!autofilter"]) {
        o[o.length] = function (e, t, n, r) {
          var i = "string" == typeof e.ref ? e.ref : tn(e.ref);
          if (!n.Workbook) {
            n.Workbook = {
              Sheets: []
            };
          }
          if (!n.Workbook.Names) {
            n.Workbook.Names = [];
          }
          var o = n.Workbook.Names;
          var a = en(i);
          if (a.s.r == a.e.r) {
            a.e.r = en(t["!ref"]).e.r;
            i = tn(a);
          }
          for (var s = 0; s < o.length; ++s) {
            var c = o[s];
            if ("_xlnm._FilterDatabase" == c.Name && c.Sheet == r) {
              c.Ref = "'" + n.SheetNames[r] + "'!" + i;
              break;
            }
          }
          if (s == o.length) {
            o.push({
              Name: "_xlnm._FilterDatabase",
              Sheet: r,
              Ref: "'" + n.SheetNames[r] + "'!" + i
            });
          }
          return $e("autoFilter", null, {
            ref: i
          });
        }(c["!autofilter"], c, n, e);
      }
      if (null != c["!merges"] && c["!merges"].length > 0) {
        o[o.length] = function (e) {
          if (0 === e.length) {
            return "";
          }
          for (var t = "<mergeCells count=\"" + e.length + "\">", n = 0; n != e.length; ++n) {
            t += "<mergeCell ref=\"" + tn(e[n]) + "\"/>";
          }
          return t + "</mergeCells>";
        }(c["!merges"]);
      }
      var d;
      var h;
      var p = -1;
      var _ = -1;
      if (c["!links"].length > 0) {
        o[o.length] = "<hyperlinks>";
        c["!links"].forEach(function (e) {
          if (e[1].Target) {
            d = {
              ref: e[0]
            };
            if ("#" != e[1].Target.charAt(0)) {
              _ = ir(r, -1, Be(e[1].Target).replace(/#.*$/, ""), Jn.HLINK);
              d["r:id"] = "rId" + _;
            }
            if ((p = e[1].Target.indexOf("#")) > -1) {
              d.location = Be(e[1].Target.slice(p + 1));
            }
            if (e[1].Tooltip) {
              d.tooltip = Be(e[1].Tooltip);
            }
            o[o.length] = $e("hyperlink", null, d);
          }
        });
        o[o.length] = "</hyperlinks>";
      }
      delete c["!links"];
      if (null != c["!margins"]) {
        o[o.length] = (vs(h = c["!margins"]), $e("pageMargins", null, h));
      }
      if (!(t && !t.ignoreEC && undefined != t.ignoreEC)) {
        o[o.length] = Ye("ignoredErrors", $e("ignoredError", null, {
          numberStoredAsText: 1,
          sqref: u
        }));
      }
      if (f.length > 0) {
        _ = ir(r, -1, "../drawings/drawing" + (e + 1) + ".xml", Jn.DRAW);
        o[o.length] = $e("drawing", null, {
          "r:id": "rId" + _
        });
        c["!drawing"] = f;
      }
      if (c["!comments"].length > 0) {
        _ = ir(r, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Jn.VML);
        o[o.length] = $e("legacyDrawing", null, {
          "r:id": "rId" + _
        });
        c["!legacy"] = _;
      }
      if (o.length > 1) {
        o[o.length] = "</worksheet>";
        o[1] = o[1].replace("/>", ">");
      }
      return o.join("");
    }
    function Us(e, t, n, r) {
      var i = function (e, t, n) {
        var r = Ut(145);
        var i = (n["!rows"] || [])[e] || {};
        r.write_shift(4, e);
        r.write_shift(4, 0);
        var o = 320;
        if (i.hpx) {
          o = 20 * Oo(i.hpx);
        } else {
          if (i.hpt) {
            o = 20 * i.hpt;
          }
        }
        r.write_shift(2, o);
        r.write_shift(1, 0);
        var a = 0;
        if (i.level) {
          a |= i.level;
        }
        if (i.hidden) {
          a |= 16;
        }
        if (i.hpx || i.hpt) {
          a |= 32;
        }
        r.write_shift(1, a);
        r.write_shift(1, 0);
        var s = 0;
        var c = r.l;
        r.l += 4;
        for (var u = {
            r: e,
            c: 0
          }, l = 0; l < 16; ++l) {
          if (!(t.s.c > l + 1 << 10 || t.e.c < l << 10)) {
            for (var f = -1, d = -1, h = l << 10; h < l + 1 << 10; ++h) {
              u.c = h;
              if (Array.isArray(n) ? (n[u.r] || [])[u.c] : n[Zt(u)]) {
                if (f < 0) {
                  f = h;
                }
                d = h;
              }
            }
            if (!(f < 0)) {
              ++s;
              r.write_shift(4, f);
              r.write_shift(4, d);
            }
          }
        }
        var p = r.l;
        r.l = c;
        r.write_shift(4, s);
        r.l = p;
        return r.length > r.l ? r.slice(0, r.l) : r;
      }(r, n, t);
      if (i.length > 17 || (t["!rows"] || [])[r]) {
        Gt(e, "BrtRowHdr", i);
      }
    }
    var Hs = Bn;
    var Vs = Dn;
    function Gs(e) {
      return [vn(e), In(e), "n"];
    }
    var zs = Bn;
    var Qs = Dn;
    var Ws = ["left", "right", "top", "bottom", "header", "footer"];
    function Ks(e, t, n, r, i, o, a) {
      if (undefined === t.v) {
        return false;
      }
      var s = "";
      switch (t.t) {
        case "b":
          s = t.v ? "1" : "0";
          break;
        case "d":
          (t = re(t)).z = t.z || D._table[14];
          t.v = W(te(t.v));
          t.t = "n";
          break;
        case "n":
        case "e":
          s = "" + t.v;
          break;
        default:
          s = t.v;
      }
      var c = {
        r: n,
        c: r
      };
      switch (c.s = ms(i.cellXfs, t, i), t.l && o["!links"].push([Zt(c), t.l]), t.c && o["!comments"].push([Zt(c), t.c]), t.t) {
        case "s":
        case "str":
          if (i.bookSST) {
            s = As(i.Strings, t.v, i.revStrings);
            c.t = "s";
            c.v = s;
            if (a) {
              Gt(e, "BrtShortIsst", function (e, t, n) {
                if (null == n) {
                  n = Ut(8);
                }
                mn(t, n);
                n.write_shift(4, t.v);
                return n;
              }(0, c));
            } else {
              Gt(e, "BrtCellIsst", function (e, t, n) {
                if (null == n) {
                  n = Ut(12);
                }
                gn(t, n);
                n.write_shift(4, t.v);
                return n;
              }(0, c));
            }
          } else {
            c.t = "str";
            if (a) {
              Gt(e, "BrtShortSt", function (e, t, n) {
                if (null == n) {
                  n = Ut(8 + 4 * e.v.length);
                }
                mn(t, n);
                fn(e.v, n);
                return n.length > n.l ? n.slice(0, n.l) : n;
              }(t, c));
            } else {
              Gt(e, "BrtCellSt", function (e, t, n) {
                if (null == n) {
                  n = Ut(12 + 4 * e.v.length);
                }
                gn(t, n);
                fn(e.v, n);
                return n.length > n.l ? n.slice(0, n.l) : n;
              }(t, c));
            }
          }
          return true;
        case "n":
          if (t.v == (0 | t.v) && t.v > -1e3 && t.v < 1e3) {
            if (a) {
              Gt(e, "BrtShortRk", function (e, t, n) {
                if (null == n) {
                  n = Ut(8);
                }
                mn(t, n);
                Sn(e.v, n);
                return n;
              }(t, c));
            } else {
              Gt(e, "BrtCellRk", function (e, t, n) {
                if (null == n) {
                  n = Ut(12);
                }
                gn(t, n);
                Sn(e.v, n);
                return n;
              }(t, c));
            }
          } else {
            if (a) {
              Gt(e, "BrtShortReal", function (e, t, n) {
                if (null == n) {
                  n = Ut(12);
                }
                mn(t, n);
                Fn(e.v, n);
                return n;
              }(t, c));
            } else {
              Gt(e, "BrtCellReal", function (e, t, n) {
                if (null == n) {
                  n = Ut(16);
                }
                gn(t, n);
                Fn(e.v, n);
                return n;
              }(t, c));
            }
          }
          return true;
        case "b":
          c.t = "b";
          if (a) {
            Gt(e, "BrtShortBool", function (e, t, n) {
              if (null == n) {
                n = Ut(5);
              }
              mn(t, n);
              n.write_shift(1, e.v ? 1 : 0);
              return n;
            }(t, c));
          } else {
            Gt(e, "BrtCellBool", function (e, t, n) {
              if (null == n) {
                n = Ut(9);
              }
              gn(t, n);
              n.write_shift(1, e.v ? 1 : 0);
              return n;
            }(t, c));
          }
          return true;
        case "e":
          c.t = "e";
          if (a) {
            Gt(e, "BrtShortError", function (e, t, n) {
              if (null == n) {
                n = Ut(8);
              }
              mn(t, n);
              n.write_shift(1, e.v);
              n.write_shift(2, 0);
              n.write_shift(1, 0);
              return n;
            }(t, c));
          } else {
            Gt(e, "BrtCellError", function (e, t, n) {
              if (null == n) {
                n = Ut(9);
              }
              gn(t, n);
              n.write_shift(1, e.v);
              return n;
            }(t, c));
          }
          return true;
      }
      if (a) {
        Gt(e, "BrtShortBlank", function (e, t, n) {
          if (null == n) {
            n = Ut(4);
          }
          return mn(t, n);
        }(0, c));
      } else {
        Gt(e, "BrtCellBlank", function (e, t, n) {
          if (null == n) {
            n = Ut(8);
          }
          return gn(t, n);
        }(0, c));
      }
      return true;
    }
    function Xs(e, t) {
      if (t && t["!merges"]) {
        Gt(e, "BrtBeginMergeCells", function (e, t) {
          if (null == t) {
            t = Ut(4);
          }
          t.write_shift(4, e);
          return t;
        }(t["!merges"].length));
        t["!merges"].forEach(function (t) {
          Gt(e, "BrtMergeCell", Qs(t));
        });
        Gt(e, "BrtEndMergeCells");
      }
    }
    function Ys(e, t) {
      if (t && t["!cols"]) {
        Gt(e, "BrtBeginColInfos");
        t["!cols"].forEach(function (t, n) {
          if (t) {
            Gt(e, "BrtColInfo", function (e, t, n) {
              if (null == n) {
                n = Ut(18);
              }
              var r = gs(e, t);
              n.write_shift(-4, e);
              n.write_shift(-4, e);
              n.write_shift(4, 256 * (r.width || 10));
              n.write_shift(4, 0);
              var i = 0;
              if (t.hidden) {
                i |= 1;
              }
              if ("number" == typeof r.width) {
                i |= 2;
              }
              if (t.level) {
                i |= t.level << 8;
              }
              n.write_shift(2, i);
              return n;
            }(n, t));
          }
        });
        Gt(e, "BrtEndColInfos");
      }
    }
    function qs(e, t) {
      if (t && t["!ref"]) {
        Gt(e, "BrtBeginCellIgnoreECs");
        Gt(e, "BrtCellIgnoreEC", function (e) {
          var t = Ut(24);
          t.write_shift(4, 4);
          t.write_shift(4, 1);
          Dn(e, t);
          return t;
        }(nn(t["!ref"])));
        Gt(e, "BrtEndCellIgnoreECs");
      }
    }
    function $s(e, t, n) {
      t["!links"].forEach(function (t) {
        if (t[1].Target) {
          var r = ir(n, -1, t[1].Target.replace(/#.*$/, ""), Jn.HLINK);
          Gt(e, "BrtHLink", function (e, t) {
            var n = Ut(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
            Dn({
              s: Jt(e[0]),
              e: Jt(e[0])
            }, n);
            On("rId" + t, n);
            var r = e[1].Target.indexOf("#");
            fn((-1 == r ? "" : e[1].Target.slice(r + 1)) || "", n);
            fn(e[1].Tooltip || "", n);
            fn("", n);
            return n.slice(0, n.l);
          }(t, r));
        }
      });
      delete t["!links"];
    }
    function Js(e, t, n) {
      Gt(e, "BrtBeginWsViews");
      Gt(e, "BrtBeginWsView", function (e, t, n) {
        if (null == n) {
          n = Ut(30);
        }
        var r = 924;
        if ((((t || {}).Views || [])[0] || {}).RTL) {
          r |= 32;
        }
        n.write_shift(2, r);
        n.write_shift(4, 0);
        n.write_shift(4, 0);
        n.write_shift(4, 0);
        n.write_shift(1, 0);
        n.write_shift(1, 0);
        n.write_shift(2, 0);
        n.write_shift(2, 100);
        n.write_shift(2, 0);
        n.write_shift(2, 0);
        n.write_shift(2, 0);
        n.write_shift(4, 0);
        return n;
      }(0, n));
      Gt(e, "BrtEndWsView");
      Gt(e, "BrtEndWsViews");
    }
    function Zs(e, t) {
      if (t["!protect"]) {
        Gt(e, "BrtSheetProtection", function (e, t) {
          if (null == t) {
            t = Ut(66);
          }
          t.write_shift(2, e.password ? fo(e.password) : 0);
          t.write_shift(4, 1);
          [["objects", false], ["scenarios", false], ["formatCells", true], ["formatColumns", true], ["formatRows", true], ["insertColumns", true], ["insertRows", true], ["insertHyperlinks", true], ["deleteColumns", true], ["deleteRows", true], ["selectLockedCells", false], ["sort", true], ["autoFilter", true], ["pivotTables", true], ["selectUnlockedCells", false]].forEach(function (n) {
            if (n[1]) {
              t.write_shift(4, null == e[n[0]] || e[n[0]] ? 0 : 1);
            } else {
              t.write_shift(4, null != e[n[0]] && e[n[0]] ? 0 : 1);
            }
          });
          return t;
        }(t["!protect"]));
      }
    }
    function ec(e, t, n, r) {
      var i = Vt();
      var o = n.SheetNames[e];
      var a = n.Sheets[o] || {};
      var s = o;
      try {
        if (n && n.Workbook) {
          s = n.Workbook.Sheets[e].CodeName || s;
        }
      } catch (_l) {}
      var c = nn(a["!ref"] || "A1");
      if (c.e.c > 16383 || c.e.r > 1048575) {
        if (t.WTF) {
          throw new Error("Range " + (a["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
        }
        c.e.c = Math.min(c.e.c, 16383);
        c.e.r = Math.min(c.e.c, 1048575);
      }
      a["!links"] = [];
      a["!comments"] = [];
      Gt(i, "BrtBeginSheet");
      if (n.vbaraw) {
        Gt(i, "BrtWsProp", function (e, t) {
          if (null == t) {
            t = Ut(84 + 4 * e.length);
          }
          for (var n = 0; n < 3; ++n) {
            t.write_shift(1, 0);
          }
          Rn({
            auto: 1
          }, t);
          t.write_shift(-4, -1);
          t.write_shift(-4, -1);
          bn(e, t);
          return t.slice(0, t.l);
        }(s));
      }
      Gt(i, "BrtWsDim", Vs(c));
      Js(i, 0, n.Workbook);
      Ys(i, a);
      (function (e, t, n, r) {
        var i;
        var o = nn(t["!ref"] || "A1");
        var a = "";
        var s = [];
        Gt(e, "BrtBeginSheetData");
        var c = Array.isArray(t);
        var u = o.e.r;
        if (t["!rows"]) {
          u = Math.max(o.e.r, t["!rows"].length - 1);
        }
        for (var l = o.s.r; l <= u; ++l) {
          a = Yt(l);
          Us(e, t, o, l);
          var f = false;
          if (l <= o.e.r) {
            for (var d = o.s.c; d <= o.e.c; ++d) {
              if (l === o.s.r) {
                s[d] = $t(d);
              }
              i = s[d] + a;
              var h = c ? (t[l] || [])[d] : t[i];
              if (h) {
                f = Ks(e, h, l, d, r, t, f);
              } else {
                f = false;
              }
            }
          }
        }
        Gt(e, "BrtEndSheetData");
      })(i, a, 0, t);
      Zs(i, a);
      (function (e, t, n, r) {
        if (t["!autofilter"]) {
          var i = t["!autofilter"];
          var o = "string" === typeof i.ref ? i.ref : tn(i.ref);
          if (!n.Workbook) {
            n.Workbook = {
              Sheets: []
            };
          }
          if (!n.Workbook.Names) {
            n.Workbook.Names = [];
          }
          var a = n.Workbook.Names;
          var s = en(o);
          if (s.s.r == s.e.r) {
            s.e.r = en(t["!ref"]).e.r;
            o = tn(s);
          }
          for (var c = 0; c < a.length; ++c) {
            var u = a[c];
            if ("_xlnm._FilterDatabase" == u.Name && u.Sheet == r) {
              u.Ref = "'" + n.SheetNames[r] + "'!" + o;
              break;
            }
          }
          if (c == a.length) {
            a.push({
              Name: "_xlnm._FilterDatabase",
              Sheet: r,
              Ref: "'" + n.SheetNames[r] + "'!" + o
            });
          }
          Gt(e, "BrtBeginAFilter", Dn(nn(o)));
          Gt(e, "BrtEndAFilter");
        }
      })(i, a, n, e);
      Xs(i, a);
      $s(i, a, r);
      if (a["!margins"]) {
        Gt(i, "BrtMargins", function (e, t) {
          if (null == t) {
            t = Ut(48);
          }
          vs(e);
          Ws.forEach(function (n) {
            Fn(e[n], t);
          });
          return t;
        }(a["!margins"]));
      }
      if (!(t && !t.ignoreEC && undefined != t.ignoreEC)) {
        qs(i, a);
      }
      (function (e, t, n, r) {
        if (t["!comments"].length > 0) {
          var i = ir(r, -1, "../drawings/vmlDrawing" + (n + 1) + ".vml", Jn.VML);
          Gt(e, "BrtLegacyDrawing", On("rId" + i));
          t["!legacy"] = i;
        }
      })(i, a, e, r);
      Gt(i, "BrtEndSheet");
      return i.end();
    }
    function tc(e, t, n, r, i, o) {
      var a = o || {
        "!type": "chart"
      };
      if (!e) {
        return o;
      }
      var s = 0;
      var c = 0;
      var u = "A";
      var l = {
        s: {
          r: 2e6,
          c: 2e6
        },
        e: {
          r: 0,
          c: 0
        }
      };
      (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function (e) {
        var t = function (e) {
          var t;
          var n = [];
          var r = e.match(/^<c:numCache>/);
          (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function (e) {
            var t = e.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
            if (t) {
              n[+t[1]] = r ? +t[2] : t[2];
            }
          });
          var i = ke((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
          (e.match(/<c:f>(.*?)<\/c:f>/gm) || []).forEach(function (e) {
            t = e.replace(/<.*?>/g, "");
          });
          return [n, i, t];
        }(e);
        l.s.r = l.s.c = 0;
        l.e.c = s;
        u = $t(s);
        t[0].forEach(function (e, n) {
          a[u + Yt(n)] = {
            t: "n",
            v: e,
            z: t[1]
          };
          c = n;
        });
        if (l.e.r < c) {
          l.e.r = c;
        }
        ++s;
      });
      if (s > 0) {
        a["!ref"] = tn(l);
      }
      return a;
    }
    Jn.CHART = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart";
    Jn.CHARTEX = "http://schemas.microsoft.com/office/2014/relationships/chartEx";
    Jn.CS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet";
    $e("chartsheet", null, {
      xmlns: tt.main[0],
      "xmlns:r": tt.r
    });
    var nc = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]];
    var rc = [["activeTab", 0, "int"], ["autoFilterDateGrouping", true, "bool"], ["firstSheet", 0, "int"], ["minimized", false, "bool"], ["showHorizontalScroll", true, "bool"], ["showSheetTabs", true, "bool"], ["showVerticalScroll", true, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]];
    var ic = [];
    var oc = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];
    function ac(e, t) {
      for (var n = 0; n != e.length; ++n) {
        for (var r = e[n], i = 0; i != t.length; ++i) {
          var o = t[i];
          if (null == r[o[0]]) {
            r[o[0]] = o[1];
          } else {
            switch (o[2]) {
              case "bool":
                if ("string" == typeof r[o[0]]) {
                  r[o[0]] = Ne(r[o[0]]);
                }
                break;
              case "int":
                if ("string" == typeof r[o[0]]) {
                  r[o[0]] = parseInt(r[o[0]], 10);
                }
            }
          }
        }
      }
    }
    function sc(e, t) {
      for (var n = 0; n != t.length; ++n) {
        var r = t[n];
        if (null == e[r[0]]) {
          e[r[0]] = r[1];
        } else {
          switch (r[2]) {
            case "bool":
              if ("string" == typeof e[r[0]]) {
                e[r[0]] = Ne(e[r[0]]);
              }
              break;
            case "int":
              if ("string" == typeof e[r[0]]) {
                e[r[0]] = parseInt(e[r[0]], 10);
              }
          }
        }
      }
    }
    function cc(e) {
      sc(e.WBProps, nc);
      sc(e.CalcPr, oc);
      ac(e.WBView, rc);
      ac(e.Sheets, ic);
      ps.date1904 = Ne(e.WBProps.date1904);
    }
    var uc = "][*?/\\".split("");
    function lc(e, t) {
      if (e.length > 31) {
        if (t) {
          return false;
        }
        throw new Error("Sheet names cannot exceed 31 chars");
      }
      var n = true;
      uc.forEach(function (r) {
        if (-1 != e.indexOf(r)) {
          if (!t) {
            throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
          }
          n = false;
        }
      });
      return n;
    }
    function fc(e) {
      if (!e || !e.SheetNames || !e.Sheets) {
        throw new Error("Invalid Workbook");
      }
      if (!e.SheetNames.length) {
        throw new Error("Workbook is empty");
      }
      var t;
      var n;
      var r;
      var i = e.Workbook && e.Workbook.Sheets || [];
      t = e.SheetNames;
      n = i;
      r = !!e.vbaraw;
      t.forEach(function (e, i) {
        lc(e);
        for (var o = 0; o < i; ++o) {
          if (e == t[o]) {
            throw new Error("Duplicate Sheet Name: " + e);
          }
        }
        if (r) {
          var a = n && n[i] && n[i].CodeName || e;
          if (95 == a.charCodeAt(0) && a.length > 22) {
            throw new Error("Bad Code Name: Worksheet" + a);
          }
        }
      });
      for (var o = 0; o < e.SheetNames.length; ++o) {
        bs(e.Sheets[e.SheetNames[o]], e.SheetNames[o], o);
      }
    }
    var dc = /<\w+:workbook/;
    var hc = $e("workbook", null, {
      xmlns: tt.main[0],
      "xmlns:r": tt.r
    });
    function pc(e) {
      var t = [ve];
      t[t.length] = hc;
      var n = e.Workbook && (e.Workbook.Names || []).length > 0;
      var r = {
        codeName: "ThisWorkbook"
      };
      if (e.Workbook && e.Workbook.WBProps) {
        nc.forEach(function (t) {
          if (null != e.Workbook.WBProps[t[0]] && e.Workbook.WBProps[t[0]] != t[1]) {
            r[t[0]] = e.Workbook.WBProps[t[0]];
          }
        });
        if (e.Workbook.WBProps.CodeName) {
          r.codeName = e.Workbook.WBProps.CodeName;
          delete r.CodeName;
        }
      }
      t[t.length] = $e("workbookPr", null, r);
      var i = e.Workbook && e.Workbook.Sheets || [];
      var o = 0;
      if (i && i[0] && i[0].Hidden) {
        for (t[t.length] = "<bookViews>", o = 0; o != e.SheetNames.length && i[o] && i[o].Hidden; ++o) {
          ;
        }
        if (o == e.SheetNames.length) {
          o = 0;
        }
        t[t.length] = "<workbookView firstSheet=\"" + o + "\" activeTab=\"" + o + "\"/>";
        t[t.length] = "</bookViews>";
      }
      for (t[t.length] = "<sheets>", o = 0; o != e.SheetNames.length; ++o) {
        var a = {
          name: Be(e.SheetNames[o].slice(0, 31))
        };
        a.sheetId = "" + (o + 1);
        a["r:id"] = "rId" + (o + 1);
        if (i[o]) {
          switch (i[o].Hidden) {
            case 1:
              a.state = "hidden";
              break;
            case 2:
              a.state = "veryHidden";
          }
        }
        t[t.length] = $e("sheet", null, a);
      }
      t[t.length] = "</sheets>";
      if (n) {
        t[t.length] = "<definedNames>";
        if (e.Workbook && e.Workbook.Names) {
          e.Workbook.Names.forEach(function (e) {
            var n = {
              name: e.Name
            };
            if (e.Comment) {
              n.comment = e.Comment;
            }
            if (null != e.Sheet) {
              n.localSheetId = "" + e.Sheet;
            }
            if (e.Hidden) {
              n.hidden = "1";
            }
            if (e.Ref) {
              t[t.length] = $e("definedName", Be(e.Ref), n);
            }
          });
        }
        t[t.length] = "</definedNames>";
      }
      if (t.length > 2) {
        t[t.length] = "</workbook>";
        t[1] = t[1].replace("/>", ">");
      }
      return t.join("");
    }
    function _c(e, t) {
      if (!t) {
        t = Ut(127);
      }
      t.write_shift(4, e.Hidden);
      t.write_shift(4, e.iTabID);
      On(e.strRelID, t);
      fn(e.name.slice(0, 31), t);
      return t.length > t.l ? t.slice(0, t.l) : t;
    }
    function Ac(e, t) {
      var n = {};
      e.read_shift(4);
      n.ArchID = e.read_shift(4);
      e.l += t - 8;
      return n;
    }
    function gc(e, t) {
      if (t.Workbook && t.Workbook.Sheets) {
        for (var n = t.Workbook.Sheets, r = 0, i = -1, o = -1; r < n.length; ++r) {
          if (!n[r] || !n[r].Hidden && -1 == i) {
            i = r;
          } else {
            if (1 == n[r].Hidden && -1 == o) {
              o = r;
            }
          }
        }
        if (!(o > i)) {
          Gt(e, "BrtBeginBookViews");
          Gt(e, "BrtBookView", function (e, t) {
            if (!t) {
              t = Ut(29);
            }
            t.write_shift(-4, 0);
            t.write_shift(-4, 460);
            t.write_shift(4, 28800);
            t.write_shift(4, 17600);
            t.write_shift(4, 500);
            t.write_shift(4, e);
            t.write_shift(4, e);
            t.write_shift(1, 120);
            return t.length > t.l ? t.slice(0, t.l) : t;
          }(i));
          Gt(e, "BrtEndBookViews");
        }
      }
    }
    function vc(e, n) {
      var r = Vt();
      Gt(r, "BrtBeginBook");
      Gt(r, "BrtFileVersion", function (e, n) {
        if (!n) {
          n = Ut(127);
        }
        for (var r = 0; 4 != r; ++r) {
          n.write_shift(4, 0);
        }
        fn("SheetJS", n);
        fn(t.version, n);
        fn(t.version, n);
        fn("7262", n);
        n.length = n.l;
        return n.length > n.l ? n.slice(0, n.l) : n;
      }());
      Gt(r, "BrtWbProp", function (e, t) {
        if (!t) {
          t = Ut(72);
        }
        var n = 0;
        if (e && e.filterPrivacy) {
          n |= 8;
        }
        t.write_shift(4, n);
        t.write_shift(4, 0);
        bn(e && e.CodeName || "ThisWorkbook", t);
        return t.slice(0, t.l);
      }(e.Workbook && e.Workbook.WBProps || null));
      gc(r, e);
      (function (e, t) {
        Gt(e, "BrtBeginBundleShs");
        for (var n = 0; n != t.SheetNames.length; ++n) {
          Gt(e, "BrtBundleSh", _c({
            Hidden: t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[n] && t.Workbook.Sheets[n].Hidden || 0,
            iTabID: n + 1,
            strRelID: "rId" + (n + 1),
            name: t.SheetNames[n]
          }));
        }
        Gt(e, "BrtEndBundleShs");
      })(r, e);
      Gt(r, "BrtEndBook");
      return r.end();
    }
    function mc(e, t, n) {
      return ".bin" === t.slice(-4) ? function (e, t) {
        var n = {
          AppVersion: {},
          WBProps: {},
          WBView: [],
          Sheets: [],
          CalcPr: {},
          xmlns: ""
        };
        var r = [];
        var i = false;
        if (!t) {
          t = {};
        }
        t.biff = 12;
        var o = [];
        var a = [[]];
        a.SheetNames = [];
        a.XTI = [];
        au[16] = {
          n: "BrtFRTArchID$",
          f: Ac
        };
        Ht(e, function (e, s, c) {
          switch (c) {
            case 156:
              a.SheetNames.push(e.name);
              n.Sheets.push(e);
              break;
            case 153:
              n.WBProps = e;
              break;
            case 39:
              if (null != e.Sheet) {
                t.SID = e.Sheet;
              }
              e.Ref = $a(e.Ptg, 0, null, a, t);
              delete t.SID;
              delete e.Ptg;
              o.push(e);
              break;
            case 1036:
              break;
            case 357:
            case 358:
            case 355:
            case 667:
              if (a[0].length) {
                a.push([c, e]);
              } else {
                a[0] = [c, e];
              }
              a[a.length - 1].XTI = [];
              break;
            case 362:
              if (0 === a.length) {
                a[0] = [];
                a[0].XTI = [];
              }
              a[a.length - 1].XTI = a[a.length - 1].XTI.concat(e);
              a.XTI = a.XTI.concat(e);
              break;
            case 361:
              break;
            case 2071:
            case 158:
            case 143:
            case 664:
            case 353:
              break;
            case 3072:
            case 3073:
            case 534:
            case 677:
            case 157:
            case 610:
            case 2050:
            case 155:
            case 548:
            case 676:
            case 128:
            case 665:
            case 2128:
            case 2125:
            case 549:
            case 2053:
            case 596:
            case 2076:
            case 2075:
            case 2082:
            case 397:
            case 154:
            case 1117:
            case 553:
            case 2091:
              break;
            case 35:
              r.push(s);
              i = true;
              break;
            case 36:
              r.pop();
              i = false;
              break;
            case 37:
              r.push(s);
              i = true;
              break;
            case 38:
              r.pop();
              i = false;
              break;
            case 16:
              break;
            default:
              if ((s || "").indexOf("Begin") > 0) {
                ;
              } else if ((s || "").indexOf("End") > 0) {
                ;
              } else if (!i || t.WTF && "BrtACBegin" != r[r.length - 1] && "BrtFRTBegin" != r[r.length - 1]) {
                throw new Error("Unexpected record " + c + " " + s);
              }
          }
        }, t);
        cc(n);
        n.Names = o;
        n.supbooks = a;
        return n;
      }(e, n) : function (e, t) {
        if (!e) {
          throw new Error("Could not find file");
        }
        var n = {
          AppVersion: {},
          WBProps: {},
          WBView: [],
          Sheets: [],
          CalcPr: {},
          Names: [],
          xmlns: ""
        };
        var r = false;
        var i = "xmlns";
        var o = {};
        var a = 0;
        e.replace(ye, function (s, c) {
          var u = Ee(s);
          switch (xe(u[0])) {
            case "<?xml":
              break;
            case "<workbook":
              if (s.match(dc)) {
                i = "xmlns" + s.match(/<(\w+):/)[1];
              }
              n.xmlns = u[i];
              break;
            case "</workbook>":
              break;
            case "<fileVersion":
              delete u[0];
              n.AppVersion = u;
              break;
            case "<fileVersion/>":
            case "</fileVersion>":
            case "<fileSharing":
            case "<fileSharing/>":
              break;
            case "<workbookPr":
            case "<workbookPr/>":
              nc.forEach(function (e) {
                if (null != u[e[0]]) {
                  switch (e[2]) {
                    case "bool":
                      n.WBProps[e[0]] = Ne(u[e[0]]);
                      break;
                    case "int":
                      n.WBProps[e[0]] = parseInt(u[e[0]], 10);
                      break;
                    default:
                      n.WBProps[e[0]] = u[e[0]];
                  }
                }
              });
              if (u.codeName) {
                n.WBProps.CodeName = Me(u.codeName);
              }
              break;
            case "</workbookPr>":
            case "<workbookProtection":
            case "<workbookProtection/>":
              break;
            case "<bookViews":
            case "<bookViews>":
            case "</bookViews>":
              break;
            case "<workbookView":
            case "<workbookView/>":
              delete u[0];
              n.WBView.push(u);
              break;
            case "</workbookView>":
              break;
            case "<sheets":
            case "<sheets>":
            case "</sheets>":
              break;
            case "<sheet":
              switch (u.state) {
                case "hidden":
                  u.Hidden = 1;
                  break;
                case "veryHidden":
                  u.Hidden = 2;
                  break;
                default:
                  u.Hidden = 0;
              }
              delete u.state;
              u.name = ke(Me(u.name));
              delete u[0];
              n.Sheets.push(u);
              break;
            case "</sheet>":
              break;
            case "<functionGroups":
            case "<functionGroups/>":
            case "<functionGroup":
              break;
            case "<externalReferences":
            case "</externalReferences>":
            case "<externalReferences>":
            case "<externalReference":
            case "<definedNames/>":
              break;
            case "<definedNames>":
            case "<definedNames":
              r = true;
              break;
            case "</definedNames>":
              r = false;
              break;
            case "<definedName":
              (o = {}).Name = Me(u.name);
              if (u.comment) {
                o.Comment = u.comment;
              }
              if (u.localSheetId) {
                o.Sheet = +u.localSheetId;
              }
              if (Ne(u.hidden || "0")) {
                o.Hidden = true;
              }
              a = c + s.length;
              break;
            case "</definedName>":
              o.Ref = ke(Me(e.slice(a, c)));
              n.Names.push(o);
              break;
            case "<definedName/>":
              break;
            case "<calcPr":
            case "<calcPr/>":
              delete u[0];
              n.CalcPr = u;
              break;
            case "</calcPr>":
            case "<oleSize":
              break;
            case "<customWorkbookViews>":
            case "</customWorkbookViews>":
            case "<customWorkbookViews":
              break;
            case "<customWorkbookView":
            case "</customWorkbookView>":
              break;
            case "<pivotCaches>":
            case "</pivotCaches>":
            case "<pivotCaches":
            case "<pivotCache":
              break;
            case "<smartTagPr":
            case "<smartTagPr/>":
              break;
            case "<smartTagTypes":
            case "<smartTagTypes>":
            case "</smartTagTypes>":
            case "<smartTagType":
              break;
            case "<webPublishing":
            case "<webPublishing/>":
              break;
            case "<fileRecoveryPr":
            case "<fileRecoveryPr/>":
              break;
            case "<webPublishObjects>":
            case "<webPublishObjects":
            case "</webPublishObjects>":
            case "<webPublishObject":
              break;
            case "<extLst":
            case "<extLst>":
            case "</extLst>":
            case "<extLst/>":
              break;
            case "<ext":
              r = true;
              break;
            case "</ext>":
              r = false;
              break;
            case "<ArchID":
              break;
            case "<AlternateContent":
            case "<AlternateContent>":
              r = true;
              break;
            case "</AlternateContent>":
              r = false;
              break;
            case "<revisionPtr":
              break;
            default:
              if (!r && t.WTF) {
                throw new Error("unrecognized " + u[0] + " in workbook");
              }
          }
          return s;
        });
        if (-1 === tt.main.indexOf(n.xmlns)) {
          throw new Error("Unknown Namespace: " + n.xmlns);
        }
        cc(n);
        return n;
      }(e, n);
    }
    function yc(e, t, n, r, i, o, a, s) {
      return ".bin" === t.slice(-4) ? function (e, t, n, r, i, o, a) {
        if (!e) {
          return e;
        }
        var s = t || {};
        if (!r) {
          r = {
            "!id": {}
          };
        }
        var c;
        var u;
        var l;
        var f;
        var d;
        var h;
        var p;
        var _;
        var A;
        var g;
        var v = s.dense ? [] : {};
        var m = {
          s: {
            r: 2e6,
            c: 2e6
          },
          e: {
            r: 0,
            c: 0
          }
        };
        var y = [];
        var b = false;
        var w = false;
        var E = [];
        s.biff = 12;
        s["!row"] = 0;
        var x = 0;
        var C = false;
        var O = [];
        var k = {};
        var S = s.supbooks || i.supbooks || [[]];
        S.sharedf = k;
        S.arrayf = O;
        S.SheetNames = i.SheetNames || i.Sheets.map(function (e) {
          return e.name;
        });
        if (!s.supbooks && (s.supbooks = S, i.Names)) {
          for (var T = 0; T < i.Names.length; ++T) {
            S[0][T + 1] = i.Names[T];
          }
        }
        var B = [];
        var I = [];
        var F = false;
        au[16] = {
          n: "BrtShortReal",
          f: Gs
        };
        Ht(e, function (e, t, T) {
          if (!w) {
            switch (T) {
              case 148:
                c = e;
                break;
              case 0:
                u = e;
                if (s.sheetRows && s.sheetRows <= u.r) {
                  w = true;
                }
                A = Yt(d = u.r);
                s["!row"] = u.r;
                if (e.hidden || e.hpt || null != e.level) {
                  if (e.hpt) {
                    e.hpx = ko(e.hpt);
                  }
                  I[e.r] = e;
                }
                break;
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
              case 9:
              case 10:
              case 11:
              case 13:
              case 14:
              case 15:
              case 16:
              case 17:
              case 18:
                switch (l = {
                  t: e[2]
                }, e[2]) {
                  case "n":
                    l.v = e[1];
                    break;
                  case "s":
                    _ = hs[e[1]];
                    l.v = _.t;
                    l.r = _.r;
                    break;
                  case "b":
                    l.v = !!e[1];
                    break;
                  case "e":
                    l.v = e[1];
                    if (false !== s.cellText) {
                      l.w = Qn[l.v];
                    }
                    break;
                  case "str":
                    l.t = "s";
                    l.v = e[1];
                }
                if ((f = a.CellXf[e[0].iStyleRef]) && ys(l, f.numFmtId, null, s, o, a), h = -1 == e[0].c ? h + 1 : e[0].c, s.dense ? (v[d] || (v[d] = []), v[d][h] = l) : v[$t(h) + A] = l, s.cellFormula) {
                  for (C = false, x = 0; x < O.length; ++x) {
                    var R = O[x];
                    if (u.r >= R[0].s.r && u.r <= R[0].e.r && h >= R[0].s.c && h <= R[0].e.c) {
                      l.F = tn(R[0]);
                      C = true;
                    }
                  }
                  if (!C && e.length > 3) {
                    l.f = e[3];
                  }
                }
                if (m.s.r > u.r && (m.s.r = u.r), m.s.c > h && (m.s.c = h), m.e.r < u.r && (m.e.r = u.r), m.e.c < h && (m.e.c = h), s.cellDates && f && "n" == l.t && D.is_date(D._table[f.numFmtId])) {
                  var P = D.parse_date_code(l.v);
                  if (P) {
                    l.t = "d";
                    l.v = new Date(P.y, P.m - 1, P.d, P.H, P.M, P.S, P.u);
                  }
                }
                break;
              case 1:
              case 12:
                if (!s.sheetStubs || b) {
                  break;
                }
                l = {
                  t: "z",
                  v: undefined
                };
                h = -1 == e[0].c ? h + 1 : e[0].c;
                if (s.dense) {
                  if (!v[d]) {
                    v[d] = [];
                  }
                  v[d][h] = l;
                } else {
                  v[$t(h) + A] = l;
                }
                if (m.s.r > u.r) {
                  m.s.r = u.r;
                }
                if (m.s.c > h) {
                  m.s.c = h;
                }
                if (m.e.r < u.r) {
                  m.e.r = u.r;
                }
                if (m.e.c < h) {
                  m.e.c = h;
                }
                break;
              case 176:
                E.push(e);
                break;
              case 494:
                var N = r["!id"][e.relId];
                for (N ? (e.Target = N.Target, e.loc && (e.Target += "#" + e.loc), e.Rel = N) : "" == e.relId && (e.Target = "#" + e.loc), d = e.rfx.s.r; d <= e.rfx.e.r; ++d) {
                  for (h = e.rfx.s.c; h <= e.rfx.e.c; ++h) {
                    if (s.dense) {
                      if (!v[d]) {
                        v[d] = [];
                      }
                      if (!v[d][h]) {
                        v[d][h] = {
                          t: "z",
                          v: undefined
                        };
                      }
                      v[d][h].l = e;
                    } else {
                      p = Zt({
                        c: h,
                        r: d
                      });
                      if (!v[p]) {
                        v[p] = {
                          t: "z",
                          v: undefined
                        };
                      }
                      v[p].l = e;
                    }
                  }
                }
                break;
              case 426:
                if (!s.cellFormula) {
                  break;
                }
                O.push(e);
                (g = s.dense ? v[d][h] : v[$t(h) + A]).f = $a(e[1], 0, {
                  r: u.r,
                  c: h
                }, S, s);
                g.F = tn(e[0]);
                break;
              case 427:
                if (!s.cellFormula) {
                  break;
                }
                k[Zt(e[0].s)] = e[1];
                (g = s.dense ? v[d][h] : v[$t(h) + A]).f = $a(e[1], 0, {
                  r: u.r,
                  c: h
                }, S, s);
                break;
              case 60:
                if (!s.cellStyles) {
                  break;
                }
                for (; e.e >= e.s;) {
                  B[e.e--] = {
                    width: e.w / 256,
                    hidden: !!(1 & e.flags),
                    level: e.level
                  };
                  if (!F) {
                    F = true;
                    xo(e.w / 256);
                  }
                  Co(B[e.e + 1]);
                }
                break;
              case 161:
                v["!autofilter"] = {
                  ref: tn(e)
                };
                break;
              case 476:
                v["!margins"] = e;
                break;
              case 147:
                if (!i.Sheets[n]) {
                  i.Sheets[n] = {};
                }
                if (e.name) {
                  i.Sheets[n].CodeName = e.name;
                }
                break;
              case 137:
                if (!i.Views) {
                  i.Views = [{}];
                }
                if (!i.Views[0]) {
                  i.Views[0] = {};
                }
                if (e.RTL) {
                  i.Views[0].RTL = true;
                }
                break;
              case 485:
                break;
              case 64:
              case 1053:
              case 151:
                break;
              case 152:
              case 175:
              case 644:
              case 625:
              case 562:
              case 396:
              case 1112:
              case 1146:
              case 471:
              case 1050:
              case 649:
              case 1105:
              case 49:
              case 589:
              case 607:
              case 564:
              case 1055:
              case 168:
              case 174:
              case 1180:
              case 499:
              case 507:
              case 550:
              case 171:
              case 167:
              case 1177:
              case 169:
              case 1181:
              case 551:
              case 552:
              case 661:
              case 639:
              case 478:
              case 537:
              case 477:
              case 536:
              case 1103:
              case 680:
              case 1104:
              case 1024:
              case 663:
              case 535:
              case 678:
              case 504:
              case 1043:
              case 428:
              case 170:
              case 3072:
              case 50:
              case 2070:
              case 1045:
                break;
              case 35:
                b = true;
                break;
              case 36:
                b = false;
                break;
              case 37:
                y.push(t);
                b = true;
                break;
              case 38:
                y.pop();
                b = false;
                break;
              default:
                if ((t || "").indexOf("Begin") > 0) {
                  ;
                } else if ((t || "").indexOf("End") > 0) {
                  ;
                } else if (!b || s.WTF) {
                  throw new Error("Unexpected record " + T + " " + t);
                }
            }
          }
        }, s);
        delete s.supbooks;
        delete s["!row"];
        if (!v["!ref"] && (m.s.r < 2e6 || c && (c.e.r > 0 || c.e.c > 0 || c.s.r > 0 || c.s.c > 0))) {
          v["!ref"] = tn(c || m);
        }
        if (s.sheetRows && v["!ref"]) {
          var R = nn(v["!ref"]);
          if (s.sheetRows <= +R.e.r) {
            R.e.r = s.sheetRows - 1;
            if (R.e.r > m.e.r) {
              R.e.r = m.e.r;
            }
            if (R.e.r < R.s.r) {
              R.s.r = R.e.r;
            }
            if (R.e.c > m.e.c) {
              R.e.c = m.e.c;
            }
            if (R.e.c < R.s.c) {
              R.s.c = R.e.c;
            }
            v["!fullref"] = v["!ref"];
            v["!ref"] = tn(R);
          }
        }
        if (E.length > 0) {
          v["!merges"] = E;
        }
        if (B.length > 0) {
          v["!cols"] = B;
        }
        if (I.length > 0) {
          v["!rows"] = I;
        }
        return v;
      }(e, r, n, i, o, a, s) : Ds(e, r, n, i, o, a, s);
    }
    function bc(e, t, n, r, i, o, a, s) {
      return ".bin" === t.slice(-4) ? function (e, t, n, r, i) {
        if (!e) {
          return e;
        }
        if (!r) {
          r = {
            "!id": {}
          };
        }
        var o = {
          "!type": "chart",
          "!drawel": null,
          "!rel": ""
        };
        var a = [];
        var s = false;
        Ht(e, function (e, r, c) {
          switch (c) {
            case 550:
              o["!rel"] = e;
              break;
            case 651:
              if (!i.Sheets[n]) {
                i.Sheets[n] = {};
              }
              if (e.name) {
                i.Sheets[n].CodeName = e.name;
              }
              break;
            case 562:
            case 652:
            case 669:
            case 679:
            case 551:
            case 552:
            case 476:
            case 3072:
              break;
            case 35:
              s = true;
              break;
            case 36:
              s = false;
              break;
            case 37:
              a.push(r);
              break;
            case 38:
              a.pop();
              break;
            default:
              if ((r || "").indexOf("Begin") > 0) {
                a.push(r);
              } else if ((r || "").indexOf("End") > 0) {
                a.pop();
              } else if (!s || t.WTF) {
                throw new Error("Unexpected record " + c + " " + r);
              }
          }
        }, t);
        if (r["!id"][o["!rel"]]) {
          o["!drawel"] = r["!id"][o["!rel"]];
        }
        return o;
      }(e, r, n, i, o) : function (e, t, n, r, i) {
        if (!e) {
          return e;
        }
        if (!r) {
          r = {
            "!id": {}
          };
        }
        var o;
        var a = {
          "!type": "chart",
          "!drawel": null,
          "!rel": ""
        };
        var s = e.match(Ts);
        if (s) {
          Is(s[0], 0, i, n);
        }
        if (o = e.match(/drawing r:id="(.*?)"/)) {
          a["!rel"] = o[1];
        }
        if (r["!id"][a["!rel"]]) {
          a["!drawel"] = r["!id"][a["!rel"]];
        }
        return a;
      }(e, 0, n, i, o);
    }
    function wc(e, t, n, r) {
      return ".bin" === t.slice(-4) ? function (e, t, n) {
        var r = {
          NumberFmt: []
        };
        for (var i in D._table) r.NumberFmt[i] = D._table[i];
        r.CellXf = [];
        r.Fonts = [];
        var o = [];
        var a = false;
        Ht(e, function (e, i, s) {
          switch (s) {
            case 44:
              r.NumberFmt[e[0]] = e[1];
              D.load(e[1], e[0]);
              break;
            case 43:
              r.Fonts.push(e);
              if (null != e.color.theme && t && t.themeElements && t.themeElements.clrScheme) {
                e.color.rgb = vo(t.themeElements.clrScheme[e.color.theme].rgb, e.color.tint || 0);
              }
              break;
            case 1025:
            case 45:
            case 46:
              break;
            case 47:
              if ("BrtBeginCellXFs" == o[o.length - 1]) {
                r.CellXf.push(e);
              }
              break;
            case 48:
            case 507:
            case 572:
            case 475:
              break;
            case 1171:
            case 2102:
            case 1130:
            case 512:
            case 2095:
            case 3072:
              break;
            case 35:
              a = true;
              break;
            case 36:
              a = false;
              break;
            case 37:
              o.push(i);
              a = true;
              break;
            case 38:
              o.pop();
              a = false;
              break;
            default:
              if ((i || "").indexOf("Begin") > 0) {
                o.push(i);
              } else if ((i || "").indexOf("End") > 0) {
                o.pop();
              } else if (!a || n.WTF && "BrtACBegin" != o[o.length - 1]) {
                throw new Error("Unexpected record " + s + " " + i);
              }
          }
        });
        return r;
      }(e, n, r) : Do(e, n, r);
    }
    function Ec(e, t, n) {
      return ".bin" === t.slice(-4) ? function (e, t) {
        var n = [];
        var r = false;
        Ht(e, function (e, i, o) {
          switch (o) {
            case 159:
              n.Count = e[0];
              n.Unique = e[1];
              break;
            case 19:
              n.push(e);
              break;
            case 160:
              return true;
            case 35:
              r = true;
              break;
            case 36:
              r = false;
              break;
            default:
              if (i.indexOf("Begin") > 0 || i.indexOf("End"), !r || t.WTF) {
                throw new Error("Unexpected record " + o + " " + i);
              }
          }
        });
        return n;
      }(e, n) : function (e, t) {
        var n = [];
        var r = "";
        if (!e) {
          return n;
        }
        var i = e.match(Yi);
        if (i) {
          r = i[2].replace(qi, "").split($i);
          for (var o = 0; o != r.length; ++o) {
            var a = Xi(r[o].trim(), t);
            if (null != a) {
              n[n.length] = a;
            }
          }
          i = Ee(i[1]);
          n.Count = i.count;
          n.Unique = i.uniqueCount;
        }
        return n;
      }(e, n);
    }
    function xc(e, t, n) {
      return ".bin" === t.slice(-4) ? function (e, t) {
        var n = [];
        var r = [];
        var i = {};
        var o = false;
        Ht(e, function (e, a, s) {
          switch (s) {
            case 632:
              r.push(e);
              break;
            case 635:
              i = e;
              break;
            case 637:
              i.t = e.t;
              i.h = e.h;
              i.r = e.r;
              break;
            case 636:
              if (i.author = r[i.iauthor], delete i.iauthor, t.sheetRows && i.rfx && t.sheetRows <= i.rfx.r) {
                break;
              }
              if (!i.t) {
                i.t = "";
              }
              delete i.rfx;
              n.push(i);
              break;
            case 3072:
              break;
            case 35:
              o = true;
              break;
            case 36:
              o = false;
              break;
            case 37:
            case 38:
              break;
            default:
              if ((a || "").indexOf("Begin") > 0) {
                ;
              } else if ((a || "").indexOf("End") > 0) {
                ;
              } else if (!o || t.WTF) {
                throw new Error("Unexpected record " + s + " " + a);
              }
          }
        });
        return n;
      }(e, n) : function (e, t) {
        if (e.match(/<(?:\w+:)?comments *\/>/)) {
          return [];
        }
        var n = [];
        var r = [];
        var i = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
        if (i && i[1]) {
          i[1].split(/<\/\w*:?author>/).forEach(function (e) {
            if ("" !== e && "" !== e.trim()) {
              var t = e.match(/<(?:\w+:)?author[^>]*>(.*)/);
              if (t) {
                n.push(t[1]);
              }
            }
          });
        }
        var o = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
        if (o && o[1]) {
          o[1].split(/<\/\w*:?comment>/).forEach(function (e) {
            if ("" !== e && "" !== e.trim()) {
              var i = e.match(/<(?:\w+:)?comment[^>]*>/);
              if (i) {
                var o = Ee(i[0]);
                var a = {
                  author: o.authorId && n[o.authorId] || "sheetjsghost",
                  ref: o.ref,
                  guid: o.guid
                };
                var s = Jt(o.ref);
                if (!(t.sheetRows && t.sheetRows <= s.r)) {
                  var c = e.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/);
                  var u = !!c && !!c[1] && Xi(c[1]) || {
                    r: "",
                    t: "",
                    h: ""
                  };
                  a.r = u.r;
                  if ("<t></t>" == u.r) {
                    u.t = u.h = "";
                  }
                  a.t = u.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                  if (t.cellHTML) {
                    a.h = u.h;
                  }
                  r.push(a);
                }
              }
            }
          });
        }
        return r;
      }(e, n);
    }
    function Cc(e, t, n) {
      return ".bin" === t.slice(-4) ? function (e, t, n) {
        var r = [];
        Ht(e, function (e, t, n) {
          switch (n) {
            case 63:
              r.push(e);
              break;
            default:
              if ((t || "").indexOf("Begin") > 0) {
                ;
              } else if (!((t || "").indexOf("End") > 0)) {
                throw new Error("Unexpected record " + n + " " + t);
              }
          }
        });
        return r;
      }(e) : function (e) {
        var t = [];
        if (!e) {
          return t;
        }
        var n = 1;
        (e.match(ye) || []).forEach(function (e) {
          var r = Ee(e);
          switch (r[0]) {
            case "<?xml":
              break;
            case "<calcChain":
            case "<calcChain>":
            case "</calcChain>":
              break;
            case "<c":
              delete r[0];
              if (r.i) {
                n = r.i;
              } else {
                r.i = n;
              }
              t.push(r);
          }
        });
        return t;
      }(e);
    }
    function Oc(e, t, n, r) {
      if (".bin" === n.slice(-4)) {
        return function (e, t, n, r) {
          if (!e) {
            return e;
          }
          var i = r || {};
          var o = false;
          Ht(e, function (e, t, n) {
            switch (n) {
              case 359:
              case 363:
              case 364:
              case 366:
              case 367:
              case 368:
              case 369:
              case 370:
              case 371:
              case 472:
              case 577:
              case 578:
              case 579:
              case 580:
              case 581:
              case 582:
              case 583:
              case 584:
              case 585:
              case 586:
              case 587:
                break;
              case 35:
                o = true;
                break;
              case 36:
                o = false;
                break;
              default:
                if ((t || "").indexOf("Begin") > 0) {
                  ;
                } else if ((t || "").indexOf("End") > 0) {
                  ;
                } else if (!o || i.WTF) {
                  throw new Error("Unexpected record " + n.toString(16) + " " + t);
                }
            }
          }, i);
        }(e, 0, 0, r);
      }
    }
    function kc(e, t, n) {
      return (".bin" === t.slice(-4) ? vc : pc)(e, n);
    }
    function Sc(e, t, n, r, i) {
      return (".bin" === t.slice(-4) ? ec : Ls)(e, n, r, i);
    }
    function Tc(e, t, n) {
      return (".bin" === t.slice(-4) ? to : Zi)(e, n);
    }
    function Bc(e, t, n) {
      return (".bin" === t.slice(-4) ? ua : sa)(e, n);
    }
    var Dc = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;
    var Ic = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
    function Fc(e, t) {
      var n = e.split(/\s+/);
      var r = [];
      if (!t) {
        r[0] = n[0];
      }
      if (1 === n.length) {
        return r;
      }
      var i;
      var o;
      var a;
      var s = e.match(Dc);
      if (s) {
        for (a = 0; a != s.length; ++a) {
          if (-1 === (o = (i = s[a].match(Ic))[1].indexOf(":"))) {
            r[i[1]] = i[2].slice(1, i[2].length - 1);
          } else {
            r["xmlns:" === i[1].slice(0, 6) ? "xmlns" + i[1].slice(6) : i[1].slice(o + 1)] = i[2].slice(1, i[2].length - 1);
          }
        }
      }
      return r;
    }
    function Rc(e) {
      var t = {};
      if (1 === e.split(/\s+/).length) {
        return t;
      }
      var n;
      var r;
      var i;
      var o = e.match(Dc);
      if (o) {
        for (i = 0; i != o.length; ++i) {
          if (-1 === (r = (n = o[i].match(Ic))[1].indexOf(":"))) {
            t[n[1]] = n[2].slice(1, n[2].length - 1);
          } else {
            t["xmlns:" === n[1].slice(0, 6) ? "xmlns" + n[1].slice(6) : n[1].slice(r + 1)] = n[2].slice(1, n[2].length - 1);
          }
        }
      }
      return t;
    }
    function Pc(e, t, n, r) {
      var i = r;
      switch ((n[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
        case "boolean":
          i = Ne(r);
          break;
        case "i2":
        case "int":
          i = parseInt(r, 10);
          break;
        case "r4":
        case "float":
          i = parseFloat(r);
          break;
        case "date":
        case "dateTime.tz":
          i = te(r);
          break;
        case "i8":
        case "string":
        case "fixed":
        case "uuid":
        case "bin.base64":
          break;
        default:
          throw new Error("bad custprop:" + n[0]);
      }
      e[ke(t)] = i;
    }
    function Nc(e, t, n) {
      if ("z" !== e.t) {
        if (!n || false !== n.cellText) {
          try {
            if ("e" === e.t) {
              e.w = e.w || Qn[e.v];
            } else {
              if ("General" === t) {
                if ("n" === e.t) {
                  if ((0 | e.v) === e.v) {
                    e.w = D._general_int(e.v);
                  } else {
                    e.w = D._general_num(e.v);
                  }
                } else {
                  e.w = D._general(e.v);
                }
              } else {
                e.w = function (e, t) {
                  var n = R[e] || ke(e);
                  return "General" === n ? D._general(t) : D.format(n, t);
                }(t || "General", e.v);
              }
            }
          } catch (_l) {
            if (n.WTF) {
              throw _l;
            }
          }
        }
        try {
          var r = R[t] || t || "General";
          if (n.cellNF) {
            e.z = r;
          }
          if (n.cellDates && "n" == e.t && D.is_date(r)) {
            var i = D.parse_date_code(e.v);
            if (i) {
              e.t = "d";
              e.v = new Date(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u);
            }
          }
        } catch (_l) {
          if (n.WTF) {
            throw _l;
          }
        }
      }
    }
    function Mc(e, t, n) {
      if (n.cellStyles && t.Interior) {
        var r = t.Interior;
        if (r.Pattern) {
          r.patternType = So[r.Pattern] || r.Pattern;
        }
      }
      e[t.ID] = t;
    }
    function jc(e, t, n, r, i, o, a, s, c, u) {
      var l = "General";
      var f = r.StyleID;
      var d = {};
      u = u || {};
      var h = [];
      var p = 0;
      for (undefined === f && s && (f = s.StyleID), undefined === f && a && (f = a.StyleID); undefined !== o[f] && (o[f].nf && (l = o[f].nf), o[f].Interior && h.push(o[f].Interior), o[f].Parent);) {
        f = o[f].Parent;
      }
      switch (n.Type) {
        case "Boolean":
          r.t = "b";
          r.v = Ne(e);
          break;
        case "String":
          r.t = "s";
          r.r = Re(ke(e));
          r.v = e.indexOf("<") > -1 ? ke(t || e).replace(/<.*?>/g, "") : r.r;
          break;
        case "DateTime":
          if ("Z" != e.slice(-1)) {
            e += "Z";
          }
          r.v = (te(e) - new Date(Date.UTC(1899, 11, 30))) / 864e5;
          if (r.v !== r.v) {
            r.v = ke(e);
          } else {
            if (r.v < 60) {
              r.v = r.v - 1;
            }
          }
          if (!(l && "General" != l)) {
            l = "yyyy-mm-dd";
          }
        case "Number":
          if (undefined === r.v) {
            r.v = +e;
          }
          if (!r.t) {
            r.t = "n";
          }
          break;
        case "Error":
          r.t = "e";
          r.v = Wn[e];
          if (false !== u.cellText) {
            r.w = e;
          }
          break;
        default:
          if ("" == e && "" == t) {
            r.t = "z";
          } else {
            r.t = "s";
            r.v = Re(t || e);
          }
      }
      Nc(r, l, u);
      if (false !== u.cellFormula) {
        if (r.Formula) {
          var _ = ke(r.Formula);
          if (61 == _.charCodeAt(0)) {
            _ = _.slice(1);
          }
          r.f = fa(_, i);
          delete r.Formula;
          if ("RC" == r.ArrayRange) {
            r.F = fa("RC:RC", i);
          } else {
            if (r.ArrayRange) {
              r.F = fa(r.ArrayRange, i);
              c.push([nn(r.F), r.F]);
            }
          }
        } else {
          for (p = 0; p < c.length; ++p) {
            if (i.r >= c[p][0].s.r && i.r <= c[p][0].e.r && i.c >= c[p][0].s.c && i.c <= c[p][0].e.c) {
              r.F = c[p][1];
            }
          }
        }
      }
      if (u.cellStyles) {
        h.forEach(function (e) {
          if (!d.patternType && e.patternType) {
            d.patternType = e.patternType;
          }
        });
        r.s = d;
      }
      if (undefined !== r.StyleID) {
        r.ixfe = r.StyleID;
      }
    }
    function Lc(e) {
      e.t = e.v || "";
      e.t = e.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      e.v = e.w = e.ixfe = undefined;
    }
    function Uc(e) {
      if (m && i.isBuffer(e)) {
        return e.toString("utf8");
      }
      if ("string" === typeof e) {
        return e;
      }
      if ("undefined" !== typeof Uint8Array && e instanceof Uint8Array) {
        return Me(O(k(e)));
      }
      throw new Error("Bad input format: expected Buffer or string");
    }
    var Hc = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/gm;
    function Vc(e, t) {
      var n = t || {};
      I(D);
      var r = _(Uc(e));
      if (!("binary" != n.type && "array" != n.type && "base64" != n.type)) {
        r = "undefined" !== typeof cptable ? cptable.utils.decode(65001, p(r)) : Me(r);
      }
      var i;
      var o = r.slice(0, 1024).toLowerCase();
      var a = false;
      if (-1 == o.indexOf("<?xml")) {
        ["html", "table", "head", "meta", "script", "style", "div"].forEach(function (e) {
          if (o.indexOf("<" + e) >= 0) {
            a = true;
          }
        });
      }
      if (a) {
        return mu.to_workbook(r, n);
      }
      var s;
      var c = [];
      var u;
      var l = {};
      var f = [];
      var d = n.dense ? [] : {};
      var h = "";
      var A = {};
      var g = {};
      var v = Fc("<Data ss:Type=\"String\">");
      var m = 0;
      var y = 0;
      var b = 0;
      var w = {
        s: {
          r: 2e6,
          c: 2e6
        },
        e: {
          r: 0,
          c: 0
        }
      };
      var E = {};
      var x = {};
      var C = "";
      var O = 0;
      var k = [];
      var S = {};
      var T = {};
      var B = 0;
      var F = [];
      var P = [];
      var N = {};
      var M = [];
      var j = false;
      var L = [];
      var U = [];
      var H = {};
      var V = 0;
      var G = 0;
      var z = {
        Sheets: [],
        WBProps: {
          date1904: false
        }
      };
      var Q = {};
      Hc.lastIndex = 0;
      r = r.replace(/<!--([\s\S]*?)-->/gm, "");
      for (var W = ""; i = Hc.exec(r);) {
        switch (i[3] = (W = i[3]).toLowerCase()) {
          case "data":
            if ("data" == W) {
              if ("/" === i[1]) {
                if ((s = c.pop())[0] !== i[3]) {
                  throw new Error("Bad state: " + s.join("|"));
                }
              } else if ("/" !== i[0].charAt(i[0].length - 2)) {
                c.push([i[3], true]);
              }
              break;
            }
            if (c[c.length - 1][1]) {
              break;
            }
            if ("/" === i[1]) {
              jc(r.slice(m, i.index), C, v, "comment" == c[c.length - 1][0] ? N : A, {
                c: y,
                r: b
              }, E, M[y], g, L, n);
            } else {
              C = "";
              v = Fc(i[0]);
              m = i.index + i[0].length;
            }
            break;
          case "cell":
            if ("/" === i[1]) {
              if (P.length > 0) {
                A.c = P;
              }
              if ((!n.sheetRows || n.sheetRows > b) && undefined !== A.v) {
                if (n.dense) {
                  if (!d[b]) {
                    d[b] = [];
                  }
                  d[b][y] = A;
                } else {
                  d[$t(y) + Yt(b)] = A;
                }
              }
              if (A.HRef) {
                A.l = {
                  Target: A.HRef
                };
                if (A.HRefScreenTip) {
                  A.l.Tooltip = A.HRefScreenTip;
                }
                delete A.HRef;
                delete A.HRefScreenTip;
              }
              if (A.MergeAcross || A.MergeDown) {
                V = y + (0 | parseInt(A.MergeAcross, 10));
                G = b + (0 | parseInt(A.MergeDown, 10));
                k.push({
                  s: {
                    c: y,
                    r: b
                  },
                  e: {
                    c: V,
                    r: G
                  }
                });
              }
              if (n.sheetStubs) {
                if (A.MergeAcross || A.MergeDown) {
                  for (var K = y; K <= V; ++K) {
                    for (var X = b; X <= G; ++X) {
                      if (K > y || X > b) {
                        if (n.dense) {
                          if (!d[X]) {
                            d[X] = [];
                          }
                          d[X][K] = {
                            t: "z"
                          };
                        } else {
                          d[$t(K) + Yt(X)] = {
                            t: "z"
                          };
                        }
                      }
                    }
                  }
                  y = V + 1;
                } else {
                  ++y;
                }
              } else if (A.MergeAcross) {
                y = V + 1;
              } else {
                ++y;
              }
            } else {
              if ((A = Rc(i[0])).Index) {
                y = +A.Index - 1;
              }
              if (y < w.s.c) {
                w.s.c = y;
              }
              if (y > w.e.c) {
                w.e.c = y;
              }
              if ("/>" === i[0].slice(-2)) {
                ++y;
              }
              P = [];
            }
            break;
          case "row":
            if ("/" === i[1] || "/>" === i[0].slice(-2)) {
              if (b < w.s.r) {
                w.s.r = b;
              }
              if (b > w.e.r) {
                w.e.r = b;
              }
              if ("/>" === i[0].slice(-2) && (g = Fc(i[0])).Index) {
                b = +g.Index - 1;
              }
              y = 0;
              ++b;
            } else {
              if ((g = Fc(i[0])).Index) {
                b = +g.Index - 1;
              }
              H = {};
              if ("0" == g.AutoFitHeight || g.Height) {
                H.hpx = parseInt(g.Height, 10);
                H.hpt = Oo(H.hpx);
                U[b] = H;
              }
              if ("1" == g.Hidden) {
                H.hidden = true;
                U[b] = H;
              }
            }
            break;
          case "worksheet":
            if ("/" === i[1]) {
              if ((s = c.pop())[0] !== i[3]) {
                throw new Error("Bad state: " + s.join("|"));
              }
              f.push(h);
              if (w.s.r <= w.e.r && w.s.c <= w.e.c) {
                d["!ref"] = tn(w);
                if (n.sheetRows && n.sheetRows <= w.e.r) {
                  d["!fullref"] = d["!ref"];
                  w.e.r = n.sheetRows - 1;
                  d["!ref"] = tn(w);
                }
              }
              if (k.length) {
                d["!merges"] = k;
              }
              if (M.length > 0) {
                d["!cols"] = M;
              }
              if (U.length > 0) {
                d["!rows"] = U;
              }
              l[h] = d;
            } else {
              w = {
                s: {
                  r: 2e6,
                  c: 2e6
                },
                e: {
                  r: 0,
                  c: 0
                }
              };
              b = y = 0;
              c.push([i[3], false]);
              s = Fc(i[0]);
              h = ke(s.Name);
              d = n.dense ? [] : {};
              k = [];
              L = [];
              U = [];
              Q = {
                name: h,
                Hidden: 0
              };
              z.Sheets.push(Q);
            }
            break;
          case "table":
            if ("/" === i[1]) {
              if ((s = c.pop())[0] !== i[3]) {
                throw new Error("Bad state: " + s.join("|"));
              }
            } else {
              if ("/>" == i[0].slice(-2)) {
                break;
              }
              Fc(i[0]);
              c.push([i[3], false]);
              M = [];
              j = false;
            }
            break;
          case "style":
            if ("/" === i[1]) {
              Mc(E, x, n);
            } else {
              x = Fc(i[0]);
            }
            break;
          case "numberformat":
            x.nf = ke(Fc(i[0]).Format || "General");
            if (R[x.nf]) {
              x.nf = R[x.nf];
            }
            for (var Y = 0; 392 != Y && D._table[Y] != x.nf; ++Y) {
              ;
            }
            if (392 == Y) {
              for (Y = 57; 392 != Y; ++Y) {
                if (null == D._table[Y]) {
                  D.load(x.nf, Y);
                  break;
                }
              }
            }
            break;
          case "column":
            if ("table" !== c[c.length - 1][0]) {
              break;
            }
            if ((u = Fc(i[0])).Hidden && (u.hidden = true, delete u.Hidden), u.Width && (u.wpx = parseInt(u.Width, 10)), !j && u.wpx > 10) {
              j = true;
              mo = 6;
              for (var q = 0; q < M.length; ++q) {
                if (M[q]) {
                  Co(M[q]);
                }
              }
            }
            if (j) {
              Co(u);
            }
            M[u.Index - 1 || M.length] = u;
            for (var $ = 0; $ < +u.Span; ++$) {
              M[M.length] = re(u);
            }
            break;
          case "namedrange":
            if ("/" === i[1]) {
              break;
            }
            if (!z.Names) {
              z.Names = [];
            }
            var J = Ee(i[0]),
              Z = {
                Name: J.Name,
                Ref: fa(J.RefersTo.slice(1), {
                  r: 0,
                  c: 0
                })
              };
            if (z.Sheets.length > 0) {
              Z.Sheet = z.Sheets.length - 1;
            }
            z.Names.push(Z);
            break;
          case "namedcell":
          case "b":
          case "i":
          case "u":
          case "s":
          case "em":
          case "h2":
          case "h3":
          case "sub":
          case "sup":
          case "span":
          case "alignment":
          case "borders":
          case "border":
            break;
          case "font":
            if ("/>" === i[0].slice(-2)) {
              break;
            }
            if ("/" === i[1]) {
              C += r.slice(O, i.index);
            } else {
              O = i.index + i[0].length;
            }
            break;
          case "interior":
            if (!n.cellStyles) {
              break;
            }
            x.Interior = Fc(i[0]);
            break;
          case "protection":
            break;
          case "author":
          case "title":
          case "description":
          case "created":
          case "keywords":
          case "subject":
          case "category":
          case "company":
          case "lastauthor":
          case "lastsaved":
          case "lastprinted":
          case "version":
          case "revision":
          case "totaltime":
          case "hyperlinkbase":
          case "manager":
          case "contentstatus":
          case "identifier":
          case "language":
          case "appname":
            if ("/>" === i[0].slice(-2)) {
              break;
            }
            if ("/" === i[1]) {
              yr(S, W, r.slice(B, i.index));
            } else {
              B = i.index + i[0].length;
            }
            break;
          case "paragraphs":
            break;
          case "styles":
          case "workbook":
            if ("/" === i[1]) {
              if ((s = c.pop())[0] !== i[3]) {
                throw new Error("Bad state: " + s.join("|"));
              }
            } else {
              c.push([i[3], false]);
            }
            break;
          case "comment":
            if ("/" === i[1]) {
              if ((s = c.pop())[0] !== i[3]) {
                throw new Error("Bad state: " + s.join("|"));
              }
              Lc(N);
              P.push(N);
            } else {
              c.push([i[3], false]);
              N = {
                a: (s = Fc(i[0])).Author
              };
            }
            break;
          case "autofilter":
            if ("/" === i[1]) {
              if ((s = c.pop())[0] !== i[3]) {
                throw new Error("Bad state: " + s.join("|"));
              }
            } else if ("/" !== i[0].charAt(i[0].length - 2)) {
              var ee = Fc(i[0]);
              d["!autofilter"] = {
                ref: fa(ee.Range).replace(/\$/g, "")
              };
              c.push([i[3], true]);
            }
            break;
          case "name":
            break;
          case "datavalidation":
            if ("/" === i[1]) {
              if ((s = c.pop())[0] !== i[3]) {
                throw new Error("Bad state: " + s.join("|"));
              }
            } else if ("/" !== i[0].charAt(i[0].length - 2)) {
              c.push([i[3], true]);
            }
            break;
          case "pixelsperinch":
            break;
          case "componentoptions":
          case "documentproperties":
          case "customdocumentproperties":
          case "officedocumentsettings":
          case "pivottable":
          case "pivotcache":
          case "names":
          case "mapinfo":
          case "pagebreaks":
          case "querytable":
          case "sorting":
          case "schema":
          case "conditionalformatting":
          case "smarttagtype":
          case "smarttags":
          case "excelworkbook":
          case "workbookoptions":
          case "worksheetoptions":
            if ("/" === i[1]) {
              if ((s = c.pop())[0] !== i[3]) {
                throw new Error("Bad state: " + s.join("|"));
              }
            } else if ("/" !== i[0].charAt(i[0].length - 2)) {
              c.push([i[3], true]);
            }
            break;
          default:
            if (0 == c.length && "document" == i[3]) {
              return Cu(r, n);
            }
            if (0 == c.length && "uof" == i[3]) {
              return Cu(r, n);
            }
            var te = true;
            switch (c[c.length - 1][0]) {
              case "officedocumentsettings":
                switch (i[3]) {
                  case "allowpng":
                  case "removepersonalinformation":
                  case "downloadcomponents":
                  case "locationofcomponents":
                  case "colors":
                  case "color":
                  case "index":
                  case "rgb":
                  case "targetscreensize":
                  case "readonlyrecommended":
                    break;
                  default:
                    te = false;
                }
                break;
              case "componentoptions":
                switch (i[3]) {
                  case "toolbar":
                  case "hideofficelogo":
                  case "spreadsheetautofit":
                  case "label":
                  case "caption":
                  case "maxheight":
                  case "maxwidth":
                  case "nextsheetnumber":
                    break;
                  default:
                    te = false;
                }
                break;
              case "excelworkbook":
                switch (i[3]) {
                  case "date1904":
                    z.WBProps.date1904 = true;
                    break;
                  case "windowheight":
                  case "windowwidth":
                  case "windowtopx":
                  case "windowtopy":
                  case "tabratio":
                  case "protectstructure":
                  case "protectwindow":
                  case "protectwindows":
                  case "activesheet":
                  case "displayinknotes":
                  case "firstvisiblesheet":
                  case "supbook":
                  case "sheetname":
                  case "sheetindex":
                  case "sheetindexfirst":
                  case "sheetindexlast":
                  case "dll":
                  case "acceptlabelsinformulas":
                  case "donotsavelinkvalues":
                  case "iteration":
                  case "maxiterations":
                  case "maxchange":
                  case "path":
                  case "xct":
                  case "count":
                  case "selectedsheets":
                  case "calculation":
                  case "uncalced":
                  case "startupprompt":
                  case "crn":
                  case "externname":
                  case "formula":
                  case "colfirst":
                  case "collast":
                  case "wantadvise":
                  case "boolean":
                  case "error":
                  case "text":
                  case "ole":
                  case "noautorecover":
                  case "publishobjects":
                  case "donotcalculatebeforesave":
                  case "number":
                  case "refmoder1c1":
                  case "embedsavesmarttags":
                    break;
                  default:
                    te = false;
                }
                break;
              case "workbookoptions":
                switch (i[3]) {
                  case "owcversion":
                  case "height":
                  case "width":
                    break;
                  default:
                    te = false;
                }
                break;
              case "worksheetoptions":
                switch (i[3]) {
                  case "visible":
                    if ("/>" === i[0].slice(-2)) {
                      ;
                    } else if ("/" === i[1]) {
                      switch (r.slice(B, i.index)) {
                        case "SheetHidden":
                          Q.Hidden = 1;
                          break;
                        case "SheetVeryHidden":
                          Q.Hidden = 2;
                      }
                    } else {
                      B = i.index + i[0].length;
                    }
                    break;
                  case "header":
                    if (!d["!margins"]) {
                      vs(d["!margins"] = {}, "xlml");
                    }
                    d["!margins"].header = Ee(i[0]).Margin;
                    break;
                  case "footer":
                    if (!d["!margins"]) {
                      vs(d["!margins"] = {}, "xlml");
                    }
                    d["!margins"].footer = Ee(i[0]).Margin;
                    break;
                  case "pagemargins":
                    var ne = Ee(i[0]);
                    if (!d["!margins"]) {
                      vs(d["!margins"] = {}, "xlml");
                    }
                    if (ne.Top) {
                      d["!margins"].top = ne.Top;
                    }
                    if (ne.Left) {
                      d["!margins"].left = ne.Left;
                    }
                    if (ne.Right) {
                      d["!margins"].right = ne.Right;
                    }
                    if (ne.Bottom) {
                      d["!margins"].bottom = ne.Bottom;
                    }
                    break;
                  case "displayrighttoleft":
                    if (!z.Views) {
                      z.Views = [];
                    }
                    if (!z.Views[0]) {
                      z.Views[0] = {};
                    }
                    z.Views[0].RTL = true;
                    break;
                  case "freezepanes":
                  case "frozennosplit":
                    break;
                  case "splithorizontal":
                  case "splitvertical":
                  case "donotdisplaygridlines":
                  case "activerow":
                  case "activecol":
                  case "toprowbottompane":
                  case "leftcolumnrightpane":
                  case "unsynced":
                  case "print":
                  case "panes":
                  case "scale":
                  case "pane":
                  case "number":
                  case "layout":
                  case "pagesetup":
                  case "selected":
                  case "protectobjects":
                  case "enableselection":
                  case "protectscenarios":
                  case "validprinterinfo":
                  case "horizontalresolution":
                  case "verticalresolution":
                  case "numberofcopies":
                  case "activepane":
                  case "toprowvisible":
                  case "leftcolumnvisible":
                  case "fittopage":
                  case "rangeselection":
                  case "papersizeindex":
                  case "pagelayoutzoom":
                  case "pagebreakzoom":
                  case "filteron":
                  case "fitwidth":
                  case "fitheight":
                  case "commentslayout":
                  case "zoom":
                  case "lefttoright":
                  case "gridlines":
                  case "allowsort":
                  case "allowfilter":
                  case "allowinsertrows":
                  case "allowdeleterows":
                  case "allowinsertcols":
                  case "allowdeletecols":
                  case "allowinserthyperlinks":
                  case "allowformatcells":
                  case "allowsizecols":
                  case "allowsizerows":
                  case "nosummaryrowsbelowdetail":
                  case "tabcolorindex":
                  case "donotdisplayheadings":
                  case "showpagelayoutzoom":
                  case "nosummarycolumnsrightdetail":
                  case "blackandwhite":
                  case "donotdisplayzeros":
                  case "displaypagebreak":
                  case "rowcolheadings":
                  case "donotdisplayoutline":
                  case "noorientation":
                  case "allowusepivottables":
                  case "zeroheight":
                  case "viewablerange":
                  case "selection":
                  case "protectcontents":
                    break;
                  default:
                    te = false;
                }
                break;
              case "pivottable":
              case "pivotcache":
                switch (i[3]) {
                  case "immediateitemsondrop":
                  case "showpagemultipleitemlabel":
                  case "compactrowindent":
                  case "location":
                  case "pivotfield":
                  case "orientation":
                  case "layoutform":
                  case "layoutsubtotallocation":
                  case "layoutcompactrow":
                  case "position":
                  case "pivotitem":
                  case "datatype":
                  case "datafield":
                  case "sourcename":
                  case "parentfield":
                  case "ptlineitems":
                  case "ptlineitem":
                  case "countofsameitems":
                  case "item":
                  case "itemtype":
                  case "ptsource":
                  case "cacheindex":
                  case "consolidationreference":
                  case "filename":
                  case "reference":
                  case "nocolumngrand":
                  case "norowgrand":
                  case "blanklineafteritems":
                  case "hidden":
                  case "subtotal":
                  case "basefield":
                  case "mapchilditems":
                  case "function":
                  case "refreshonfileopen":
                  case "printsettitles":
                  case "mergelabels":
                  case "defaultversion":
                  case "refreshname":
                  case "refreshdate":
                  case "refreshdatecopy":
                  case "versionlastrefresh":
                  case "versionlastupdate":
                  case "versionupdateablemin":
                  case "versionrefreshablemin":
                  case "calculation":
                    break;
                  default:
                    te = false;
                }
                break;
              case "pagebreaks":
                switch (i[3]) {
                  case "colbreaks":
                  case "colbreak":
                  case "rowbreaks":
                  case "rowbreak":
                  case "colstart":
                  case "colend":
                  case "rowend":
                    break;
                  default:
                    te = false;
                }
                break;
              case "autofilter":
                switch (i[3]) {
                  case "autofiltercolumn":
                  case "autofiltercondition":
                  case "autofilterand":
                  case "autofilteror":
                    break;
                  default:
                    te = false;
                }
                break;
              case "querytable":
                switch (i[3]) {
                  case "id":
                  case "autoformatfont":
                  case "autoformatpattern":
                  case "querysource":
                  case "querytype":
                  case "enableredirections":
                  case "refreshedinxl9":
                  case "urlstring":
                  case "htmltables":
                  case "connection":
                  case "commandtext":
                  case "refreshinfo":
                  case "notitles":
                  case "nextid":
                  case "columninfo":
                  case "overwritecells":
                  case "donotpromptforfile":
                  case "textwizardsettings":
                  case "source":
                  case "number":
                  case "decimal":
                  case "thousandseparator":
                  case "trailingminusnumbers":
                  case "formatsettings":
                  case "fieldtype":
                  case "delimiters":
                  case "tab":
                  case "comma":
                  case "autoformatname":
                  case "versionlastedit":
                  case "versionlastrefresh":
                    break;
                  default:
                    te = false;
                }
                break;
              case "datavalidation":
                switch (i[3]) {
                  case "range":
                  case "type":
                  case "min":
                  case "max":
                  case "sort":
                  case "descending":
                  case "order":
                  case "casesensitive":
                  case "value":
                  case "errorstyle":
                  case "errormessage":
                  case "errortitle":
                  case "inputmessage":
                  case "inputtitle":
                  case "combohide":
                  case "inputhide":
                  case "condition":
                  case "qualifier":
                  case "useblank":
                  case "value1":
                  case "value2":
                  case "format":
                  case "cellrangelist":
                    break;
                  default:
                    te = false;
                }
                break;
              case "sorting":
              case "conditionalformatting":
                switch (i[3]) {
                  case "range":
                  case "type":
                  case "min":
                  case "max":
                  case "sort":
                  case "descending":
                  case "order":
                  case "casesensitive":
                  case "value":
                  case "errorstyle":
                  case "errormessage":
                  case "errortitle":
                  case "cellrangelist":
                  case "inputmessage":
                  case "inputtitle":
                  case "combohide":
                  case "inputhide":
                  case "condition":
                  case "qualifier":
                  case "useblank":
                  case "value1":
                  case "value2":
                  case "format":
                    break;
                  default:
                    te = false;
                }
                break;
              case "mapinfo":
              case "schema":
              case "data":
                switch (i[3]) {
                  case "map":
                  case "entry":
                  case "range":
                  case "xpath":
                  case "field":
                  case "xsdtype":
                  case "filteron":
                  case "aggregate":
                  case "elementtype":
                  case "attributetype":
                    break;
                  case "schema":
                  case "element":
                  case "complextype":
                  case "datatype":
                  case "all":
                  case "attribute":
                  case "extends":
                  case "row":
                    break;
                  default:
                    te = false;
                }
                break;
              case "smarttags":
                break;
              default:
                te = false;
            }
            if (te) {
              break;
            }
            if (i[3].match(/!\[CDATA/)) {
              break;
            }
            if (!c[c.length - 1][1]) {
              throw "Unrecognized tag: " + i[3] + "|" + c.join("|");
            }
            if ("customdocumentproperties" === c[c.length - 1][0]) {
              if ("/>" === i[0].slice(-2)) {
                break;
              }
              if ("/" === i[1]) {
                Pc(T, W, F, r.slice(B, i.index));
              } else {
                F = i;
                B = i.index + i[0].length;
              }
              break;
            }
            if (n.WTF) {
              throw "Unrecognized tag: " + i[3] + "|" + c.join("|");
            }
        }
      }
      var ie = {};
      if (!(n.bookSheets || n.bookProps)) {
        ie.Sheets = l;
      }
      ie.SheetNames = f;
      ie.Workbook = z;
      ie.SSF = D.get_table();
      ie.Props = S;
      ie.Custprops = T;
      return ie;
    }
    function Gc(e, t) {
      switch (Uu(t = t || {}), t.type || "base64") {
        case "base64":
          return Vc(v.decode(e), t);
        case "binary":
        case "buffer":
        case "file":
          return Vc(e, t);
        case "array":
          return Vc(O(e), t);
      }
    }
    function zc(e, t) {
      var n = [];
      if (e.Props) {
        n.push(function (e, t) {
          var n = [];
          H(vr).map(function (e) {
            for (var t = 0; t < sr.length; ++t) {
              if (sr[t][1] == e) {
                return sr[t];
              }
            }
            for (t = 0; t < dr.length; ++t) {
              if (dr[t][1] == e) {
                return dr[t];
              }
            }
            throw e;
          }).forEach(function (r) {
            if (null != e[r[1]]) {
              var i = t && t.Props && null != t.Props[r[1]] ? t.Props[r[1]] : e[r[1]];
              switch (r[2]) {
                case "date":
                  i = new Date(i).toISOString().replace(/\.\d*Z/, "Z");
              }
              if ("number" == typeof i) {
                i = String(i);
              } else {
                if (true === i || false === i) {
                  i = i ? "1" : "0";
                } else {
                  if (i instanceof Date) {
                    i = new Date(i).toISOString().replace(/\.\d*Z/, "");
                  }
                }
              }
              n.push(Ye(vr[r[1]] || r[1], i));
            }
          });
          return $e("DocumentProperties", n.join(""), {
            xmlns: nt
          });
        }(e.Props, t));
      }
      if (e.Custprops) {
        n.push(function (e, t) {
          var n = ["Worksheets", "SheetNames"];
          var r = "CustomDocumentProperties";
          var i = [];
          if (e) {
            H(e).forEach(function (t) {
              if (Object.prototype.hasOwnProperty.call(e, t)) {
                for (var r = 0; r < sr.length; ++r) {
                  if (t == sr[r][1]) {
                    return;
                  }
                }
                for (r = 0; r < dr.length; ++r) {
                  if (t == dr[r][1]) {
                    return;
                  }
                }
                for (r = 0; r < n.length; ++r) {
                  if (t == n[r]) {
                    return;
                  }
                }
                var o = e[t];
                var a = "string";
                if ("number" == typeof o) {
                  a = "float";
                  o = String(o);
                } else {
                  if (true === o || false === o) {
                    a = "boolean";
                    o = o ? "1" : "0";
                  } else {
                    o = String(o);
                  }
                }
                i.push($e(De(t), o, {
                  "dt:dt": a
                }));
              }
            });
          }
          if (t) {
            H(t).forEach(function (n) {
              if (Object.prototype.hasOwnProperty.call(t, n) && (!e || !Object.prototype.hasOwnProperty.call(e, n))) {
                var r = t[n];
                var o = "string";
                if ("number" == typeof r) {
                  o = "float";
                  r = String(r);
                } else {
                  if (true === r || false === r) {
                    o = "boolean";
                    r = r ? "1" : "0";
                  } else {
                    if (r instanceof Date) {
                      o = "dateTime.tz";
                      r = r.toISOString();
                    } else {
                      r = String(r);
                    }
                  }
                }
                i.push($e(De(n), r, {
                  "dt:dt": o
                }));
              }
            });
          }
          return "<" + r + " xmlns=\"" + nt + "\">" + i.join("") + "</" + r + ">";
        }(e.Props, e.Custprops));
      }
      return n.join("");
    }
    function Qc(e) {
      return $e("NamedRange", null, {
        "ss:Name": e.Name,
        "ss:RefersTo": "=" + ha(e.Ref, {
          r: 0,
          c: 0
        })
      });
    }
    function Wc(e, t, n, r, i, o, a) {
      if (!e || undefined == e.v && undefined == e.f) {
        return "";
      }
      var s = {};
      if (e.f) {
        s["ss:Formula"] = "=" + Be(ha(e.f, a));
      }
      if (e.F && e.F.slice(0, t.length) == t) {
        var c = Jt(e.F.slice(t.length + 1));
        s["ss:ArrayRange"] = "RC:R" + (c.r == a.r ? "" : "[" + (c.r - a.r) + "]") + "C" + (c.c == a.c ? "" : "[" + (c.c - a.c) + "]");
      }
      if (e.l && e.l.Target) {
        s["ss:HRef"] = Be(e.l.Target);
        if (e.l.Tooltip) {
          s["x:HRefScreenTip"] = Be(e.l.Tooltip);
        }
      }
      if (n["!merges"]) {
        for (var u = n["!merges"], l = 0; l != u.length; ++l) {
          if (u[l].s.c == a.c && u[l].s.r == a.r) {
            if (u[l].e.c > u[l].s.c) {
              s["ss:MergeAcross"] = u[l].e.c - u[l].s.c;
            }
            if (u[l].e.r > u[l].s.r) {
              s["ss:MergeDown"] = u[l].e.r - u[l].s.r;
            }
          }
        }
      }
      var f = "";
      var d = "";
      switch (e.t) {
        case "z":
          if (!r.sheetStubs) {
            return "";
          }
          break;
        case "n":
          f = "Number";
          d = String(e.v);
          break;
        case "b":
          f = "Boolean";
          d = e.v ? "1" : "0";
          break;
        case "e":
          f = "Error";
          d = Qn[e.v];
          break;
        case "d":
          f = "DateTime";
          d = new Date(e.v).toISOString();
          if (null == e.z) {
            e.z = e.z || D._table[14];
          }
          break;
        case "s":
          f = "String";
          d = ((e.v || "") + "").replace(Se, function (e) {
            return Oe[e];
          }).replace(Ie, function (e) {
            return "&#x" + e.charCodeAt(0).toString(16).toUpperCase() + ";";
          });
      }
      var h = ms(r.cellXfs, e, r);
      s["ss:StyleID"] = "s" + (21 + h);
      s["ss:Index"] = a.c + 1;
      var p = null != e.v ? d : "";
      var _ = "z" == e.t ? "" : "<Data ss:Type=\"" + f + "\">" + p + "</Data>";
      if ((e.c || []).length > 0) {
        _ += e.c.map(function (e) {
          var t = $e("ss:Data", Pe(e.t || ""), {
            xmlns: "http://www.w3.org/TR/REC-html40"
          });
          return $e("Comment", t, {
            "ss:Author": e.a
          });
        }).join("");
      }
      return $e("Cell", _, s);
    }
    function Kc(e, t) {
      var n = "<Row ss:Index=\"" + (e + 1) + "\"";
      if (t) {
        if (t.hpt && !t.hpx) {
          t.hpx = ko(t.hpt);
        }
        if (t.hpx) {
          n += " ss:AutoFitHeight=\"0\" ss:Height=\"" + t.hpx + "\"";
        }
        if (t.hidden) {
          n += " ss:Hidden=\"1\"";
        }
      }
      return n + ">";
    }
    function Xc(e, t, n) {
      var r = [];
      var i = n.SheetNames[e];
      var o = n.Sheets[i];
      var a = o ? function (e, t, n, r) {
        if (!e) {
          return "";
        }
        if (!((r || {}).Workbook || {}).Names) {
          return "";
        }
        for (var i = r.Workbook.Names, o = [], a = 0; a < i.length; ++a) {
          var s = i[a];
          if (s.Sheet == n) {
            if (!s.Name.match(/^_xlfn\./)) {
              o.push(Qc(s));
            }
          }
        }
        return o.join("");
      }(o, 0, e, n) : "";
      if (a.length > 0) {
        r.push("<Names>" + a + "</Names>");
      }
      if ((a = o ? function (e, t, n, r) {
        if (!e["!ref"]) {
          return "";
        }
        var i = nn(e["!ref"]);
        var o = e["!merges"] || [];
        var a = 0;
        var s = [];
        if (e["!cols"]) {
          e["!cols"].forEach(function (e, t) {
            Co(e);
            var n = !!e.width;
            var r = gs(t, e);
            var i = {
              "ss:Index": t + 1
            };
            if (n) {
              i["ss:Width"] = yo(r.width);
            }
            if (e.hidden) {
              i["ss:Hidden"] = "1";
            }
            s.push($e("Column", null, i));
          });
        }
        for (var c = Array.isArray(e), u = i.s.r; u <= i.e.r; ++u) {
          for (var l = [Kc(u, (e["!rows"] || [])[u])], f = i.s.c; f <= i.e.c; ++f) {
            var d = false;
            for (a = 0; a != o.length; ++a) {
              if (!(o[a].s.c > f) && !(o[a].s.r > u) && !(o[a].e.c < f) && !(o[a].e.r < u)) {
                if (!(o[a].s.c == f && o[a].s.r == u)) {
                  d = true;
                }
                break;
              }
            }
            if (!d) {
              var h = {
                r: u,
                c: f
              };
              var p = Zt(h);
              var _ = c ? (e[u] || [])[f] : e[p];
              l.push(Wc(_, p, e, t, 0, 0, h));
            }
          }
          l.push("</Row>");
          if (l.length > 2) {
            s.push(l.join(""));
          }
        }
        return s.join("");
      }(o, t) : "").length > 0) {
        r.push("<Table>" + a + "</Table>");
      }
      r.push(function (e, t, n, r) {
        if (!e) {
          return "";
        }
        var i = [];
        if (e["!margins"]) {
          i.push("<PageSetup>");
          if (e["!margins"].header) {
            i.push($e("Header", null, {
              "x:Margin": e["!margins"].header
            }));
          }
          if (e["!margins"].footer) {
            i.push($e("Footer", null, {
              "x:Margin": e["!margins"].footer
            }));
          }
          i.push($e("PageMargins", null, {
            "x:Bottom": e["!margins"].bottom || "0.75",
            "x:Left": e["!margins"].left || "0.7",
            "x:Right": e["!margins"].right || "0.7",
            "x:Top": e["!margins"].top || "0.75"
          }));
          i.push("</PageSetup>");
        }
        if (r && r.Workbook && r.Workbook.Sheets && r.Workbook.Sheets[n]) {
          if (r.Workbook.Sheets[n].Hidden) {
            i.push($e("Visible", 1 == r.Workbook.Sheets[n].Hidden ? "SheetHidden" : "SheetVeryHidden", {}));
          } else {
            for (var o = 0; o < n && (!r.Workbook.Sheets[o] || r.Workbook.Sheets[o].Hidden); ++o) {
              ;
            }
            if (o == n) {
              i.push("<Selected/>");
            }
          }
        }
        if (((((r || {}).Workbook || {}).Views || [])[0] || {}).RTL) {
          i.push("<DisplayRightToLeft/>");
        }
        if (e["!protect"]) {
          i.push(Ye("ProtectContents", "True"));
          if (e["!protect"].objects) {
            i.push(Ye("ProtectObjects", "True"));
          }
          if (e["!protect"].scenarios) {
            i.push(Ye("ProtectScenarios", "True"));
          }
          if (null == e["!protect"].selectLockedCells || e["!protect"].selectLockedCells) {
            if (!(null == e["!protect"].selectUnlockedCells || e["!protect"].selectUnlockedCells)) {
              i.push(Ye("EnableSelection", "UnlockedCells"));
            }
          } else {
            i.push(Ye("EnableSelection", "NoSelection"));
          }
          [["formatCells", "AllowFormatCells"], ["formatColumns", "AllowSizeCols"], ["formatRows", "AllowSizeRows"], ["insertColumns", "AllowInsertCols"], ["insertRows", "AllowInsertRows"], ["insertHyperlinks", "AllowInsertHyperlinks"], ["deleteColumns", "AllowDeleteCols"], ["deleteRows", "AllowDeleteRows"], ["sort", "AllowSort"], ["autoFilter", "AllowFilter"], ["pivotTables", "AllowUsePivotTables"]].forEach(function (t) {
            if (e["!protect"][t[0]]) {
              i.push("<" + t[1] + "/>");
            }
          });
        }
        return 0 == i.length ? "" : $e("WorksheetOptions", i.join(""), {
          xmlns: rt
        });
      }(o, 0, e, n));
      return r.join("");
    }
    function Yc(e, t) {
      if (!t) {
        t = {};
      }
      if (!e.SSF) {
        e.SSF = D.get_table();
      }
      if (e.SSF) {
        I(D);
        D.load_table(e.SSF);
        t.revssf = z(e.SSF);
        t.revssf[e.SSF[65535]] = 0;
        t.ssf = e.SSF;
        t.cellXfs = [];
        ms(t.cellXfs, {}, {
          revssf: {
            General: 0
          }
        });
      }
      var n = [];
      n.push(zc(e, t));
      n.push("");
      n.push("");
      n.push("");
      for (var r = 0; r < e.SheetNames.length; ++r) {
        n.push($e("Worksheet", Xc(r, t, e), {
          "ss:Name": Be(e.SheetNames[r])
        }));
      }
      n[2] = function (e, t) {
        var n = ["<Style ss:ID=\"Default\" ss:Name=\"Normal\"><NumberFormat/></Style>"];
        t.cellXfs.forEach(function (e, t) {
          var r = [];
          r.push($e("NumberFormat", null, {
            "ss:Format": Be(D._table[e.numFmtId])
          }));
          var i = {
            "ss:ID": "s" + (21 + t)
          };
          n.push($e("Style", r.join(""), i));
        });
        return $e("Styles", n.join(""));
      }(0, t);
      n[3] = function (e) {
        if (!((e || {}).Workbook || {}).Names) {
          return "";
        }
        for (var t = e.Workbook.Names, n = [], r = 0; r < t.length; ++r) {
          var i = t[r];
          if (null == i.Sheet) {
            if (!i.Name.match(/^_xlfn\./)) {
              n.push(Qc(i));
            }
          }
        }
        return $e("Names", n.join(""));
      }(e);
      return ve + $e("Workbook", n.join(""), {
        xmlns: it,
        "xmlns:o": nt,
        "xmlns:x": rt,
        "xmlns:ss": it,
        "xmlns:dt": ot,
        "xmlns:html": ct
      });
    }
    function qc(e) {
      var t = {};
      var n = e.content;
      n.l = 28;
      t.AnsiUserType = n.read_shift(0, "lpstr-ansi");
      t.AnsiClipboardFormat = function (e) {
        return Pn(e, 1);
      }(n);
      if (n.length - n.l <= 4) {
        return t;
      }
      var r = n.read_shift(4);
      return 0 == r || r > 40 ? t : (n.l -= 4, t.Reserved1 = n.read_shift(0, "lpstr-ansi"), n.length - n.l <= 4 || 1907505652 !== (r = n.read_shift(4)) ? t : (t.UnicodeClipboardFormat = function (e) {
        return Pn(e, 2);
      }(n), 0 == (r = n.read_shift(4)) || r > 40 ? t : (n.l -= 4, void (t.Reserved2 = n.read_shift(0, "lpwstr")))));
    }
    function $c(e, t, n, r) {
      var i = n;
      var o = [];
      var a = t.slice(t.l, t.l + i);
      if (r && r.enc && r.enc.insitu && a.length > 0) {
        switch (e.n) {
          case "BOF":
          case "FilePass":
          case "FileLock":
          case "InterfaceHdr":
          case "RRDInfo":
          case "RRDHead":
          case "UsrExcl":
          case "EOF":
          case "BoundSheet8":
            break;
          default:
            r.enc.insitu(a);
        }
      }
      o.push(a);
      t.l += i;
      for (var s = cu[Tt(t, t.l)], c = 0; null != s && "Continue" === s.n.slice(0, 8);) {
        i = Tt(t, t.l + 2);
        c = t.l + 4;
        if ("ContinueFrt" == s.n) {
          c += 4;
        } else {
          if ("ContinueFrt" == s.n.slice(0, 11)) {
            c += 12;
          }
        }
        a = t.slice(c, t.l + 4 + i);
        o.push(a);
        t.l += 4 + i;
        s = cu[Tt(t, t.l)];
      }
      var u = S(o);
      jt(u, 0);
      var l = 0;
      u.lens = [];
      for (var f = 0; f < o.length; ++f) {
        u.lens.push(l);
        l += o[f].length;
      }
      if (u.length < n) {
        throw "XLS Record " + (e && e.n || "??") + " Truncated: " + u.length + " < " + n;
      }
      return e.f(u, u.length, r);
    }
    function Jc(e, t, n) {
      if ("z" !== e.t && e.XF) {
        var r = 0;
        try {
          r = e.z || e.XF.numFmtId || 0;
          if (t.cellNF) {
            e.z = D._table[r];
          }
        } catch (_l) {
          if (t.WTF) {
            throw _l;
          }
        }
        if (!t || false !== t.cellText) {
          try {
            if ("e" === e.t) {
              e.w = e.w || Qn[e.v];
            } else {
              if (0 === r || "General" == r) {
                if ("n" === e.t) {
                  if ((0 | e.v) === e.v) {
                    e.w = D._general_int(e.v);
                  } else {
                    e.w = D._general_num(e.v);
                  }
                } else {
                  e.w = D._general(e.v);
                }
              } else {
                e.w = D.format(r, e.v, {
                  date1904: !!n
                });
              }
            }
          } catch (_l) {
            if (t.WTF) {
              throw _l;
            }
          }
        }
        if (t.cellDates && r && "n" == e.t && D.is_date(D._table[r] || String(r))) {
          var i = D.parse_date_code(e.v);
          if (i) {
            e.t = "d";
            e.v = new Date(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u);
          }
        }
      }
    }
    function Zc(e, t, n) {
      return {
        v: e,
        ixfe: t,
        t: n
      };
    }
    function eu(e, t) {
      var n = {
        opts: {}
      };
      var r = {};
      var i;
      var o;
      var a;
      var s;
      var c;
      var u;
      var l;
      var f;
      var h = t.dense ? [] : {};
      var p = {};
      var _ = {};
      var A = null;
      var g = [];
      var v = "";
      var m = {};
      var y = "";
      var b = {};
      var w = [];
      var E = true;
      var x = [];
      var C = [];
      var O = {
        Sheets: [],
        WBProps: {
          date1904: false
        },
        Views: [{}]
      };
      var k = {};
      var S = function (e) {
        return e < 8 ? zn[e] : e < 64 && C[e - 8] || zn[e];
      };
      var T = function (e, t, n) {
        if (!(U > 1) && (n.sheetRows && e.r >= n.sheetRows && (E = false), E)) {
          if (n.cellStyles && t.XF && t.XF.data) {
            (function (e, t, n) {
              var r;
              var i = t.XF.data;
              if (i && i.patternType && n && n.cellStyles) {
                t.s = {};
                t.s.patternType = i.patternType;
                if (r = go(S(i.icvFore))) {
                  t.s.fgColor = {
                    rgb: r
                  };
                }
                if (r = go(S(i.icvBack))) {
                  t.s.bgColor = {
                    rgb: r
                  };
                }
              }
            })(0, t, n);
          }
          delete t.ixfe;
          delete t.XF;
          i = e;
          y = Zt(e);
          if (!(_ && _.s && _.e)) {
            _ = {
              s: {
                r: 0,
                c: 0
              },
              e: {
                r: 0,
                c: 0
              }
            };
          }
          if (e.r < _.s.r) {
            _.s.r = e.r;
          }
          if (e.c < _.s.c) {
            _.s.c = e.c;
          }
          if (e.r + 1 > _.e.r) {
            _.e.r = e.r + 1;
          }
          if (e.c + 1 > _.e.c) {
            _.e.c = e.c + 1;
          }
          if (n.cellFormula && t.f) {
            for (var r = 0; r < w.length; ++r) {
              if (!(w[r][0].s.c > e.c || w[r][0].s.r > e.r) && !(w[r][0].e.c < e.c || w[r][0].e.r < e.r)) {
                t.F = tn(w[r][0]);
                if (!(w[r][0].s.c == e.c && w[r][0].s.r == e.r)) {
                  delete t.f;
                }
                if (t.f) {
                  t.f = "" + $a(w[r][1], 0, e, M, B);
                }
                break;
              }
            }
          }
          if (n.dense) {
            if (!h[e.r]) {
              h[e.r] = [];
            }
            h[e.r][e.c] = t;
          } else {
            h[y] = t;
          }
        }
      };
      var B = {
        enc: false,
        sbcch: 0,
        snames: [],
        sharedf: b,
        arrayf: w,
        rrtabid: [],
        lastuser: "",
        biff: 8,
        codepage: 0,
        winlocked: 0,
        cellStyles: !!t && !!t.cellStyles,
        WTF: !!t && !!t.wtf
      };
      if (t.password) {
        B.password = t.password;
      }
      var I = [];
      var F = [];
      var R = [];
      var P = [];
      var N = false;
      var M = [];
      M.SheetNames = B.snames;
      M.sharedf = B.sharedf;
      M.arrayf = B.arrayf;
      M.names = [];
      M.XTI = [];
      var j;
      var L = "";
      var U = 0;
      var V = 0;
      var G = [];
      var z = [];
      B.codepage = 1200;
      d(1200);
      for (var Q = false; e.l < e.length - 1;) {
        var W = e.l;
        var K = e.read_shift(2);
        if (0 === K && "EOF" === L) {
          break;
        }
        var X = e.l === e.length ? 0 : e.read_shift(2);
        var Y = cu[K];
        if (Y && Y.f) {
          if (t.bookSheets && "BoundSheet8" === L && "BoundSheet8" !== Y.n) {
            break;
          }
          L = Y.n;
          if (2 === Y.r || 12 == Y.r) {
            var q = e.read_shift(2);
            X -= 2;
            if (!B.enc && q !== K && ((255 & q) << 8 | q >> 8) !== K) {
              throw new Error("rt mismatch: " + q + "!=" + K);
            }
            if (12 == Y.r) {
              e.l += 10;
              X -= 10;
            }
          }
          var $ = {};
          $ = "EOF" === Y.n ? Y.f(e, X, B) : $c(Y, e, X, B);
          var J = Y.n;
          if (0 == U && "BOF" != J) {
            continue;
          }
          switch (J) {
            case "Date1904":
              n.opts.Date1904 = O.WBProps.date1904 = $;
              break;
            case "WriteProtect":
              n.opts.WriteProtect = true;
              break;
            case "FilePass":
              if (B.enc || (e.l = 0), B.enc = $, !t.password) {
                throw new Error("File is password-protected");
              }
              if (null == $.valid) {
                throw new Error("Encryption scheme unsupported");
              }
              if (!$.valid) {
                throw new Error("Password is incorrect");
              }
              break;
            case "WriteAccess":
              B.lastuser = $;
              break;
            case "FileSharing":
              break;
            case "CodePage":
              var Z = Number($);
              switch (Z) {
                case 21010:
                  Z = 1200;
                  break;
                case 32768:
                  Z = 1e4;
                  break;
                case 32769:
                  Z = 1252;
              }
              d(B.codepage = Z);
              Q = true;
              break;
            case "RRTabId":
              B.rrtabid = $;
              break;
            case "WinProtect":
              B.winlocked = $;
              break;
            case "Template":
            case "BookBool":
            case "UsesELFs":
            case "MTRSettings":
              break;
            case "RefreshAll":
            case "CalcCount":
            case "CalcDelta":
            case "CalcIter":
            case "CalcMode":
            case "CalcPrecision":
            case "CalcSaveRecalc":
              n.opts[J] = $;
              break;
            case "CalcRefMode":
              B.CalcRefMode = $;
              break;
            case "Uncalced":
              break;
            case "ForceFullCalculation":
              n.opts.FullCalc = $;
              break;
            case "WsBool":
              if ($.fDialog) {
                h["!type"] = "dialog";
              }
              break;
            case "XF":
              x.push($);
              break;
            case "ExtSST":
            case "BookExt":
            case "RichTextStream":
            case "BkHim":
              break;
            case "SupBook":
              M.push([$]);
              M[M.length - 1].XTI = [];
              break;
            case "ExternName":
              M[M.length - 1].push($);
              break;
            case "Index":
              break;
            case "Lbl":
              j = {
                Name: $.Name,
                Ref: $a($.rgce, 0, null, M, B)
              };
              if ($.itab > 0) {
                j.Sheet = $.itab - 1;
              }
              M.names.push(j);
              if (!M[0]) {
                M[0] = [];
                M[0].XTI = [];
              }
              M[M.length - 1].push($);
              if ("_xlnm._FilterDatabase" == $.Name && $.itab > 0 && $.rgce && $.rgce[0] && $.rgce[0][0] && "PtgArea3d" == $.rgce[0][0][0]) {
                z[$.itab - 1] = {
                  ref: tn($.rgce[0][0][1][2])
                };
              }
              break;
            case "ExternCount":
              B.ExternCount = $;
              break;
            case "ExternSheet":
              if (0 == M.length) {
                M[0] = [];
                M[0].XTI = [];
              }
              M[M.length - 1].XTI = M[M.length - 1].XTI.concat($);
              M.XTI = M.XTI.concat($);
              break;
            case "NameCmt":
              if (B.biff < 8) {
                break;
              }
              if (null != j) {
                j.Comment = $[1];
              }
              break;
            case "Protect":
              h["!protect"] = $;
              break;
            case "Password":
              if (0 !== $ && B.WTF) {
                console.error("Password verifier: " + $);
              }
              break;
            case "Prot4Rev":
            case "Prot4RevPass":
              break;
            case "BoundSheet8":
              p[$.pos] = $;
              B.snames.push($.name);
              break;
            case "EOF":
              if (--U) {
                break;
              }
              if (_.e) {
                if (_.e.r > 0 && _.e.c > 0) {
                  _.e.r--;
                  _.e.c--;
                  h["!ref"] = tn(_);
                  if (t.sheetRows && t.sheetRows <= _.e.r) {
                    var ee = _.e.r;
                    _.e.r = t.sheetRows - 1;
                    h["!fullref"] = h["!ref"];
                    h["!ref"] = tn(_);
                    _.e.r = ee;
                  }
                  _.e.r++;
                  _.e.c++;
                }
                if (I.length > 0) {
                  h["!merges"] = I;
                }
                if (F.length > 0) {
                  h["!objects"] = F;
                }
                if (R.length > 0) {
                  h["!cols"] = R;
                }
                if (P.length > 0) {
                  h["!rows"] = P;
                }
                O.Sheets.push(k);
              }
              if ("" === v) {
                m = h;
              } else {
                r[v] = h;
              }
              h = t.dense ? [] : {};
              break;
            case "BOF":
              if (8 === B.biff && (B.biff = {
                9: 2,
                521: 3,
                1033: 4
              }[K] || {
                512: 2,
                768: 3,
                1024: 4,
                1280: 5,
                1536: 8,
                2: 2,
                7: 2
              }[$.BIFFVer] || 8), 8 == B.biff && 0 == $.BIFFVer && 16 == $.dt && (B.biff = 2), U++) {
                break;
              }
              if (E = true, h = t.dense ? [] : {}, B.biff < 8 && !Q && (Q = true, d(B.codepage = t.codepage || 1252)), B.biff < 5) {
                if ("" === v) {
                  v = "Sheet1";
                }
                _ = {
                  s: {
                    r: 0,
                    c: 0
                  },
                  e: {
                    r: 0,
                    c: 0
                  }
                };
                var te = {
                  pos: e.l - X,
                  name: v
                };
                p[te.pos] = te;
                B.snames.push(v);
              } else {
                v = (p[W] || {
                  name: ""
                }).name;
              }
              if (32 == $.dt) {
                h["!type"] = "chart";
              }
              if (64 == $.dt) {
                h["!type"] = "macro";
              }
              I = [];
              F = [];
              B.arrayf = w = [];
              R = [];
              P = [];
              0;
              N = false;
              k = {
                Hidden: (p[W] || {
                  hs: 0
                }).hs,
                name: v
              };
              break;
            case "Number":
            case "BIFF2NUM":
            case "BIFF2INT":
              if ("chart" == h["!type"] && (t.dense ? (h[$.r] || [])[$.c] : h[Zt({
                c: $.c,
                r: $.r
              })])) {
                ++$.c;
              }
              u = {
                ixfe: $.ixfe,
                XF: x[$.ixfe] || {},
                v: $.val,
                t: "n"
              };
              if (V > 0) {
                u.z = G[u.ixfe >> 8 & 31];
              }
              Jc(u, t, n.opts.Date1904);
              T({
                c: $.c,
                r: $.r
              }, u, t);
              break;
            case "BoolErr":
              u = {
                ixfe: $.ixfe,
                XF: x[$.ixfe],
                v: $.val,
                t: $.t
              };
              if (V > 0) {
                u.z = G[u.ixfe >> 8 & 31];
              }
              Jc(u, t, n.opts.Date1904);
              T({
                c: $.c,
                r: $.r
              }, u, t);
              break;
            case "RK":
              u = {
                ixfe: $.ixfe,
                XF: x[$.ixfe],
                v: $.rknum,
                t: "n"
              };
              if (V > 0) {
                u.z = G[u.ixfe >> 8 & 31];
              }
              Jc(u, t, n.opts.Date1904);
              T({
                c: $.c,
                r: $.r
              }, u, t);
              break;
            case "MulRk":
              for (var ne = $.c; ne <= $.C; ++ne) {
                var re = $.rkrec[ne - $.c][0];
                u = {
                  ixfe: re,
                  XF: x[re],
                  v: $.rkrec[ne - $.c][1],
                  t: "n"
                };
                if (V > 0) {
                  u.z = G[u.ixfe >> 8 & 31];
                }
                Jc(u, t, n.opts.Date1904);
                T({
                  c: ne,
                  r: $.r
                }, u, t);
              }
              break;
            case "Formula":
              if ("String" == $.val) {
                A = $;
                break;
              }
              if ((u = Zc($.val, $.cell.ixfe, $.tt)).XF = x[u.ixfe], t.cellFormula) {
                var ie = $.formula;
                if (ie && ie[0] && ie[0][0] && "PtgExp" == ie[0][0][0]) {
                  var oe = ie[0][0][1][0];
                  var ae = ie[0][0][1][1];
                  var se = Zt({
                    r: oe,
                    c: ae
                  });
                  if (b[se]) {
                    u.f = "" + $a($.formula, 0, $.cell, M, B);
                  } else {
                    u.F = ((t.dense ? (h[oe] || [])[ae] : h[se]) || {}).F;
                  }
                } else {
                  u.f = "" + $a($.formula, 0, $.cell, M, B);
                }
              }
              if (V > 0) {
                u.z = G[u.ixfe >> 8 & 31];
              }
              Jc(u, t, n.opts.Date1904);
              T($.cell, u, t);
              A = $;
              break;
            case "String":
              if (!A) {
                throw new Error("String record expects Formula");
              }
              A.val = $;
              (u = Zc($, A.cell.ixfe, "s")).XF = x[u.ixfe];
              if (t.cellFormula) {
                u.f = "" + $a(A.formula, 0, A.cell, M, B);
              }
              if (V > 0) {
                u.z = G[u.ixfe >> 8 & 31];
              }
              Jc(u, t, n.opts.Date1904);
              T(A.cell, u, t);
              A = null;
              break;
            case "Array":
              w.push($);
              var ce = Zt($[0].s);
              if (o = t.dense ? (h[$[0].s.r] || [])[$[0].s.c] : h[ce], t.cellFormula && o) {
                if (!A) {
                  break;
                }
                if (!ce || !o) {
                  break;
                }
                o.f = "" + $a($[1], 0, $[0], M, B);
                o.F = tn($[0]);
              }
              break;
            case "ShrFmla":
              if (!E) {
                break;
              }
              if (!t.cellFormula) {
                break;
              }
              if (y) {
                if (!A) {
                  break;
                }
                b[Zt(A.cell)] = $[0];
                ((o = t.dense ? (h[A.cell.r] || [])[A.cell.c] : h[Zt(A.cell)]) || {}).f = "" + $a($[0], 0, i, M, B);
              }
              break;
            case "LabelSst":
              u = Zc(g[$.isst].t, $.ixfe, "s");
              if (g[$.isst].h) {
                u.h = g[$.isst].h;
              }
              u.XF = x[u.ixfe];
              if (V > 0) {
                u.z = G[u.ixfe >> 8 & 31];
              }
              Jc(u, t, n.opts.Date1904);
              T({
                c: $.c,
                r: $.r
              }, u, t);
              break;
            case "Blank":
              if (t.sheetStubs) {
                u = {
                  ixfe: $.ixfe,
                  XF: x[$.ixfe],
                  t: "z"
                };
                if (V > 0) {
                  u.z = G[u.ixfe >> 8 & 31];
                }
                Jc(u, t, n.opts.Date1904);
                T({
                  c: $.c,
                  r: $.r
                }, u, t);
              }
              break;
            case "MulBlank":
              if (t.sheetStubs) {
                for (var ue = $.c; ue <= $.C; ++ue) {
                  var le = $.ixfe[ue - $.c];
                  u = {
                    ixfe: le,
                    XF: x[le],
                    t: "z"
                  };
                  if (V > 0) {
                    u.z = G[u.ixfe >> 8 & 31];
                  }
                  Jc(u, t, n.opts.Date1904);
                  T({
                    c: ue,
                    r: $.r
                  }, u, t);
                }
              }
              break;
            case "RString":
            case "Label":
            case "BIFF2STR":
              (u = Zc($.val, $.ixfe, "s")).XF = x[u.ixfe];
              if (V > 0) {
                u.z = G[u.ixfe >> 8 & 31];
              }
              Jc(u, t, n.opts.Date1904);
              T({
                c: $.c,
                r: $.r
              }, u, t);
              break;
            case "Dimensions":
              if (1 === U) {
                _ = $;
              }
              break;
            case "SST":
              g = $;
              break;
            case "Format":
              if (4 == B.biff) {
                G[V++] = $[1];
                for (var fe = 0; fe < V + 163 && D._table[fe] != $[1]; ++fe) {
                  ;
                }
                if (fe >= 163) {
                  D.load($[1], V + 163);
                }
              } else {
                D.load($[1], $[0]);
              }
              break;
            case "BIFF2FORMAT":
              G[V++] = $;
              for (var de = 0; de < V + 163 && D._table[de] != $; ++de) {
                ;
              }
              if (de >= 163) {
                D.load($, V + 163);
              }
              break;
            case "MergeCells":
              I = I.concat($);
              break;
            case "Obj":
              F[$.cmo[0]] = B.lastobj = $;
              break;
            case "TxO":
              B.lastobj.TxO = $;
              break;
            case "ImData":
              B.lastobj.ImData = $;
              break;
            case "HLink":
              for (c = $[0].s.r; c <= $[0].e.r; ++c) {
                for (s = $[0].s.c; s <= $[0].e.c; ++s) {
                  if (o = t.dense ? (h[c] || [])[s] : h[Zt({
                    c: s,
                    r: c
                  })]) {
                    o.l = $[1];
                  }
                }
              }
              break;
            case "HLinkTooltip":
              for (c = $[0].s.r; c <= $[0].e.r; ++c) {
                for (s = $[0].s.c; s <= $[0].e.c; ++s) {
                  if ((o = t.dense ? (h[c] || [])[s] : h[Zt({
                    c: s,
                    r: c
                  })]) && o.l) {
                    o.l.Tooltip = $[1];
                  }
                }
              }
              break;
            case "Note":
              if (B.biff <= 5 && B.biff >= 2) {
                break;
              }
              o = t.dense ? (h[$[0].r] || [])[$[0].c] : h[Zt($[0])];
              var he = F[$[2]];
              if (!o) {
                if (t.dense) {
                  if (!h[$[0].r]) {
                    h[$[0].r] = [];
                  }
                  o = h[$[0].r][$[0].c] = {
                    t: "z"
                  };
                } else {
                  o = h[Zt($[0])] = {
                    t: "z"
                  };
                }
                _.e.r = Math.max(_.e.r, $[0].r);
                _.s.r = Math.min(_.s.r, $[0].r);
                _.e.c = Math.max(_.e.c, $[0].c);
                _.s.c = Math.min(_.s.c, $[0].c);
              }
              if (!o.c) {
                o.c = [];
              }
              a = {
                a: $[1],
                t: he.TxO.t
              };
              o.c.push(a);
              break;
            default:
              switch (Y.n) {
                case "ClrtClient":
                  break;
                case "XFExt":
                  x[$.ixfe];
                  $.ext.forEach(function (e) {
                    e[0];
                  });
                  break;
                case "DefColWidth":
                  $;
                  break;
                case "DefaultRowHeight":
                  $[1];
                  break;
                case "ColInfo":
                  if (!B.cellStyles) {
                    break;
                  }
                  for (; $.e >= $.s;) {
                    R[$.e--] = {
                      width: $.w / 256
                    };
                    if (!N) {
                      N = true;
                      xo($.w / 256);
                    }
                    Co(R[$.e + 1]);
                  }
                  break;
                case "Row":
                  var pe = {};
                  if (null != $.level) {
                    P[$.r] = pe;
                    pe.level = $.level;
                  }
                  if ($.hidden) {
                    P[$.r] = pe;
                    pe.hidden = true;
                  }
                  if ($.hpt) {
                    P[$.r] = pe;
                    pe.hpt = $.hpt;
                    pe.hpx = ko($.hpt);
                  }
                  break;
                case "LeftMargin":
                case "RightMargin":
                case "TopMargin":
                case "BottomMargin":
                  if (!h["!margins"]) {
                    vs(h["!margins"] = {});
                  }
                  h["!margins"][J.slice(0, -6).toLowerCase()] = $;
                  break;
                case "Setup":
                  if (!h["!margins"]) {
                    vs(h["!margins"] = {});
                  }
                  h["!margins"].header = $.header;
                  h["!margins"].footer = $.footer;
                  break;
                case "Window2":
                  if ($.RTL) {
                    O.Views[0].RTL = true;
                  }
                  break;
                case "Header":
                case "Footer":
                case "HCenter":
                case "VCenter":
                case "Pls":
                case "GCW":
                case "LHRecord":
                case "DBCell":
                case "EntExU2":
                case "SxView":
                case "Sxvd":
                case "SXVI":
                case "SXVDEx":
                case "SxIvd":
                case "SXString":
                case "Sync":
                case "Addin":
                case "SXDI":
                case "SXLI":
                case "SXEx":
                case "QsiSXTag":
                case "Selection":
                case "Feat":
                  break;
                case "FeatHdr":
                case "FeatHdr11":
                  break;
                case "Feature11":
                case "Feature12":
                case "List12":
                  break;
                case "Country":
                  l = $;
                  break;
                case "RecalcId":
                case "DxGCol":
                  break;
                case "Fbi":
                case "Fbi2":
                case "GelFrame":
                case "Font":
                case "XFCRC":
                case "Style":
                case "StyleExt":
                  break;
                case "Palette":
                  C = $;
                  break;
                case "Theme":
                  f = $;
                  break;
                case "ScenarioProtect":
                case "ObjProtect":
                case "CondFmt12":
                case "Table":
                case "TableStyles":
                case "TableStyle":
                case "TableStyleElement":
                case "SXStreamID":
                case "SXVS":
                case "DConRef":
                case "SXAddl":
                case "DConBin":
                case "DConName":
                case "SXPI":
                case "SxFormat":
                case "SxSelect":
                case "SxRule":
                case "SxFilt":
                case "SxItm":
                case "SxDXF":
                case "ScenMan":
                case "DCon":
                case "CellWatch":
                case "PrintRowCol":
                case "PrintGrid":
                case "PrintSize":
                case "XCT":
                case "CRN":
                case "Scl":
                case "SheetExt":
                case "SheetExtOptional":
                case "ObNoMacros":
                case "ObProj":
                  break;
                case "CodeName":
                  if (v) {
                    k.CodeName = $ || k.name;
                  } else {
                    O.WBProps.CodeName = $ || "ThisWorkbook";
                  }
                  break;
                case "GUIDTypeLib":
                case "WOpt":
                case "PhoneticInfo":
                case "OleObjectSize":
                  break;
                case "DXF":
                case "DXFN":
                case "DXFN12":
                case "DXFN12List":
                case "DXFN12NoCB":
                  break;
                case "Dv":
                case "DVal":
                  break;
                case "BRAI":
                case "Series":
                case "SeriesText":
                case "DConn":
                case "DbOrParamQry":
                case "DBQueryExt":
                case "OleDbConn":
                case "ExtString":
                case "IFmtRecord":
                  break;
                case "CondFmt":
                case "CF":
                case "CF12":
                case "CFEx":
                case "Excel9File":
                case "Units":
                  break;
                case "InterfaceHdr":
                case "Mms":
                case "InterfaceEnd":
                case "DSF":
                case "BuiltInFnGroupCount":
                  break;
                case "Window1":
                case "HideObj":
                case "GridSet":
                case "Guts":
                case "UserBView":
                case "UserSViewBegin":
                case "UserSViewEnd":
                case "Pane":
                  break;
                default:
                  switch (Y.n) {
                    case "Dat":
                    case "Begin":
                    case "End":
                    case "StartBlock":
                    case "EndBlock":
                    case "Frame":
                    case "Area":
                    case "Axis":
                    case "AxisLine":
                    case "Tick":
                      break;
                    case "AxesUsed":
                    case "CrtLayout12":
                    case "CrtLayout12A":
                    case "CrtLink":
                    case "CrtLine":
                    case "CrtMlFrt":
                    case "CrtMlFrtContinue":
                      break;
                    case "LineFormat":
                    case "AreaFormat":
                    case "Chart":
                    case "Chart3d":
                    case "Chart3DBarShape":
                    case "ChartFormat":
                    case "ChartFrtInfo":
                      break;
                    case "PlotArea":
                    case "PlotGrowth":
                      break;
                    case "SeriesList":
                    case "SerParent":
                    case "SerAuxTrend":
                      break;
                    case "DataFormat":
                    case "SerToCrt":
                    case "FontX":
                      break;
                    case "CatSerRange":
                    case "AxcExt":
                    case "SerFmt":
                    case "ShtProps":
                      break;
                    case "DefaultText":
                    case "Text":
                    case "CatLab":
                    case "DataLabExtContents":
                      break;
                    case "Legend":
                    case "LegendException":
                      break;
                    case "Pie":
                    case "Scatter":
                      break;
                    case "PieFormat":
                    case "MarkerFormat":
                      break;
                    case "StartObject":
                    case "EndObject":
                      break;
                    case "AlRuns":
                    case "ObjectLink":
                    case "SIIndex":
                      break;
                    case "AttachedLabel":
                    case "YMult":
                      break;
                    case "Line":
                    case "Bar":
                    case "Surf":
                    case "AxisParent":
                    case "Pos":
                    case "ValueRange":
                    case "SXViewEx9":
                    case "SXViewLink":
                    case "PivotChartBits":
                    case "SBaseRef":
                    case "TextPropsStream":
                    case "LnExt":
                    case "MkrExt":
                    case "CrtCoopt":
                      break;
                    case "Qsi":
                    case "Qsif":
                    case "Qsir":
                    case "QsiSXTag":
                    case "TxtQry":
                    case "FilterMode":
                      break;
                    case "AutoFilter":
                    case "AutoFilterInfo":
                    case "AutoFilter12":
                    case "DropDownObjIds":
                    case "Sort":
                    case "SortData":
                    case "ShapePropsStream":
                      break;
                    case "MsoDrawing":
                    case "MsoDrawingGroup":
                    case "MsoDrawingSelection":
                      break;
                    case "WebPub":
                    case "AutoWebPub":
                      break;
                    case "HeaderFooter":
                    case "HFPicture":
                    case "PLV":
                    case "HorizontalPageBreaks":
                    case "VerticalPageBreaks":
                      break;
                    case "Backup":
                    case "CompressPictures":
                    case "Compat12":
                      break;
                    case "Continue":
                    case "ContinueFrt12":
                      break;
                    case "FrtFontList":
                    case "FrtWrapper":
                      break;
                    default:
                      switch (Y.n) {
                        case "TabIdConf":
                        case "Radar":
                        case "RadarArea":
                        case "DropBar":
                        case "Intl":
                        case "CoordList":
                        case "SerAuxErrBar":
                          break;
                        case "BIFF2FONTCLR":
                        case "BIFF2FMTCNT":
                        case "BIFF2FONTXTRA":
                          break;
                        case "BIFF2XF":
                        case "BIFF3XF":
                        case "BIFF4XF":
                          break;
                        case "BIFF4FMTCNT":
                        case "BIFF2ROW":
                        case "BIFF2WINDOW2":
                          break;
                        case "SCENARIO":
                        case "DConBin":
                        case "PicF":
                        case "DataLabExt":
                        case "Lel":
                        case "BopPop":
                        case "BopPopCustom":
                        case "RealTimeData":
                        case "Name":
                          break;
                        case "LHNGraph":
                        case "FnGroupName":
                        case "AddMenu":
                        case "LPr":
                          break;
                        case "ListObj":
                        case "ListField":
                        case "RRSort":
                        case "BigName":
                          break;
                        case "ToolbarHdr":
                        case "ToolbarEnd":
                        case "DDEObjName":
                        case "FRTArchId$":
                          break;
                        default:
                          if (t.WTF) {
                            throw "Unrecognized Record " + Y.n;
                          }
                      }
                  }
              }
          }
        } else {
          e.l += X;
        }
      }
      n.SheetNames = H(p).sort(function (e, t) {
        return Number(e) - Number(t);
      }).map(function (e) {
        return p[e].name;
      });
      if (!t.bookSheets) {
        n.Sheets = r;
      }
      if (n.Sheets) {
        z.forEach(function (e, t) {
          n.Sheets[n.SheetNames[t]]["!autofilter"] = e;
        });
      }
      n.Preamble = m;
      n.Strings = g;
      n.SSF = D.get_table();
      if (B.enc) {
        n.Encryption = B.enc;
      }
      if (f) {
        n.Themes = f;
      }
      n.Metadata = {};
      if (undefined !== l) {
        n.Metadata.Country = l;
      }
      if (M.names.length > 0) {
        O.Names = M.names;
      }
      n.Workbook = O;
      return n;
    }
    var tu = "e0859ff2f94f6810ab9108002b27b3d9";
    var nu = "02d5cdd59c2e1b10939708002b2cf9ae";
    var ru = "05d5cdd59c2e1b10939708002b2cf9ae";
    function iu(e, t) {
      var n;
      var r;
      var i;
      var o;
      if (!t) {
        t = {};
      }
      Uu(t);
      h();
      if (t.codepage) {
        f(t.codepage);
      }
      if (e.FullPaths) {
        if (j.find(e, "/encryption")) {
          throw new Error("File is password-protected");
        }
        n = j.find(e, "!CompObj");
        r = j.find(e, "/Workbook") || j.find(e, "/Book");
      } else {
        switch (t.type) {
          case "base64":
            e = x(v.decode(e));
            break;
          case "binary":
            e = x(e);
            break;
          case "buffer":
            break;
          case "array":
            if (!Array.isArray(e)) {
              e = Array.prototype.slice.call(e);
            }
        }
        jt(e, 0);
        r = {
          content: e
        };
      }
      if (n) {
        qc(n);
      }
      if (t.bookProps && !t.bookSheets) {
        i = {};
      } else {
        var a = m ? "buffer" : "array";
        if (r && r.content) {
          i = eu(r.content, t);
        } else if ((o = j.find(e, "PerfectOffice_MAIN")) && o.content) {
          i = Vi.to_workbook(o.content, (t.type = a, t));
        } else {
          if (!(o = j.find(e, "NativeContent_MAIN")) || !o.content) {
            throw new Error("Cannot find Workbook stream");
          }
          i = Vi.to_workbook(o.content, (t.type = a, t));
        }
        if (t.bookVBA && e.FullPaths && j.find(e, "/_VBA_PROJECT_CUR/VBA/dir")) {
          i.vbaraw = function (e) {
            var t = j.utils.cfb_new({
              root: "R"
            });
            e.FullPaths.forEach(function (n, r) {
              if ("/" !== n.slice(-1) && n.match(/_VBA_PROJECT_CUR/)) {
                var i = n.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
                j.utils.cfb_add(t, i, e.FileIndex[r].content);
              }
            });
            return j.write(t);
          }(e);
        }
      }
      var s = {};
      if (e.FullPaths) {
        (function (e, t, n) {
          var r = j.find(e, "!DocumentSummaryInformation");
          if (r && r.size > 0) {
            try {
              var i = Mr(r, Mn, nu);
              for (var o in i) t[o] = i[o];
            } catch (_l) {
              if (n.WTF) {
                throw _l;
              }
            }
          }
          var a = j.find(e, "!SummaryInformation");
          if (a && a.size > 0) {
            try {
              var s = Mr(a, jn, tu);
              for (var c in s) if (null == t[c]) {
                t[c] = s[c];
              }
            } catch (_l) {
              if (n.WTF) {
                throw _l;
              }
            }
          }
          if (t.HeadingPairs && t.TitlesOfParts) {
            hr(t.HeadingPairs, t.TitlesOfParts, t, n);
            delete t.HeadingPairs;
            delete t.TitlesOfParts;
          }
        })(e, s, t);
      }
      i.Props = i.Custprops = s;
      if (t.bookFiles) {
        i.cfb = e;
      }
      return i;
    }
    function ou(e, t) {
      var n = t || {};
      var r = j.utils.cfb_new({
        root: "R"
      });
      var i = "/Workbook";
      switch (n.bookType || "xls") {
        case "xls":
          n.bookType = "biff8";
        case "xla":
          if (!n.bookType) {
            n.bookType = "xla";
          }
        case "biff8":
          i = "/Workbook";
          n.biff = 8;
          break;
        case "biff5":
          i = "/Book";
          n.biff = 5;
          break;
        default:
          throw new Error("invalid type " + n.bookType + " for XLS CFB");
      }
      j.utils.cfb_add(r, i, vu(e, n));
      if (8 == n.biff && (e.Props || e.Custprops)) {
        (function (e, t) {
          var n;
          var r = [];
          var i = [];
          var o = [];
          var a = 0;
          if (e.Props) {
            for (n = H(e.Props), a = 0; a < n.length; ++a) {
              (Object.prototype.hasOwnProperty.call(Un, n[a]) ? r : Object.prototype.hasOwnProperty.call(Hn, n[a]) ? i : o).push([n[a], e.Props[n[a]]]);
            }
          }
          if (e.Custprops) {
            for (n = H(e.Custprops), a = 0; a < n.length; ++a) {
              if (!Object.prototype.hasOwnProperty.call(e.Props || {}, n[a])) {
                (Object.prototype.hasOwnProperty.call(Un, n[a]) ? r : Object.prototype.hasOwnProperty.call(Hn, n[a]) ? i : o).push([n[a], e.Custprops[n[a]]]);
              }
            }
          }
          var s = [];
          for (a = 0; a < o.length; ++a) {
            if (!(Rr.indexOf(o[a][0]) > -1)) {
              if (null != o[a][1]) {
                s.push(o[a]);
              }
            }
          }
          if (i.length) {
            j.utils.cfb_add(t, "/\u0005SummaryInformation", jr(i, tu, Hn, jn));
          }
          if (r.length || s.length) {
            j.utils.cfb_add(t, "/\u0005DocumentSummaryInformation", jr(r, nu, Un, Mn, s.length ? s : null, ru));
          }
        })(e, r);
      }
      if (8 == n.biff && e.vbaraw) {
        (function (e, t) {
          t.FullPaths.forEach(function (n, r) {
            if (0 != r) {
              var i = n.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
              if ("/" !== i.slice(-1)) {
                j.utils.cfb_add(e, i, t.FileIndex[r].content);
              }
            }
          });
        })(r, j.read(e.vbaraw, {
          type: "string" == typeof e.vbaraw ? "binary" : "buffer"
        }));
      }
      return r;
    }
    var au = {
      0: {
        n: "BrtRowHdr",
        f: function (e, t) {
          var n = {};
          var r = e.l + t;
          n.r = e.read_shift(4);
          e.l += 4;
          var i = e.read_shift(2);
          e.l += 1;
          var o = e.read_shift(1);
          e.l = r;
          if (7 & o) {
            n.level = 7 & o;
          }
          if (16 & o) {
            n.hidden = true;
          }
          if (32 & o) {
            n.hpt = i / 20;
          }
          return n;
        }
      },
      1: {
        n: "BrtCellBlank",
        f: function (e) {
          return [An(e)];
        }
      },
      2: {
        n: "BrtCellRk",
        f: function (e) {
          return [An(e), kn(e), "n"];
        }
      },
      3: {
        n: "BrtCellError",
        f: function (e) {
          return [An(e), e.read_shift(1), "e"];
        }
      },
      4: {
        n: "BrtCellBool",
        f: function (e) {
          return [An(e), e.read_shift(1), "b"];
        }
      },
      5: {
        n: "BrtCellReal",
        f: function (e) {
          return [An(e), In(e), "n"];
        }
      },
      6: {
        n: "BrtCellSt",
        f: function (e) {
          return [An(e), ln(e), "str"];
        }
      },
      7: {
        n: "BrtCellIsst",
        f: function (e) {
          return [An(e), e.read_shift(4), "s"];
        }
      },
      8: {
        n: "BrtFmlaString",
        f: function (e, t, n) {
          var r = e.l + t;
          var i = An(e);
          i.r = n["!row"];
          var o = [i, ln(e), "str"];
          if (n.cellFormula) {
            e.l += 2;
            var a = is(e, r - e.l, n);
            o[3] = $a(a, 0, i, n.supbooks, n);
          } else {
            e.l = r;
          }
          return o;
        }
      },
      9: {
        n: "BrtFmlaNum",
        f: function (e, t, n) {
          var r = e.l + t;
          var i = An(e);
          i.r = n["!row"];
          var o = [i, In(e), "n"];
          if (n.cellFormula) {
            e.l += 2;
            var a = is(e, r - e.l, n);
            o[3] = $a(a, 0, i, n.supbooks, n);
          } else {
            e.l = r;
          }
          return o;
        }
      },
      10: {
        n: "BrtFmlaBool",
        f: function (e, t, n) {
          var r = e.l + t;
          var i = An(e);
          i.r = n["!row"];
          var o = [i, e.read_shift(1), "b"];
          if (n.cellFormula) {
            e.l += 2;
            var a = is(e, r - e.l, n);
            o[3] = $a(a, 0, i, n.supbooks, n);
          } else {
            e.l = r;
          }
          return o;
        }
      },
      11: {
        n: "BrtFmlaError",
        f: function (e, t, n) {
          var r = e.l + t;
          var i = An(e);
          i.r = n["!row"];
          var o = [i, e.read_shift(1), "e"];
          if (n.cellFormula) {
            e.l += 2;
            var a = is(e, r - e.l, n);
            o[3] = $a(a, 0, i, n.supbooks, n);
          } else {
            e.l = r;
          }
          return o;
        }
      },
      12: {
        n: "BrtShortBlank",
        f: function (e) {
          return [vn(e)];
        }
      },
      13: {
        n: "BrtShortRk",
        f: function (e) {
          return [vn(e), kn(e), "n"];
        }
      },
      14: {
        n: "BrtShortError",
        f: function (e) {
          return [vn(e), e.read_shift(1), "e"];
        }
      },
      15: {
        n: "BrtShortBool",
        f: function (e) {
          return [vn(e), e.read_shift(1), "b"];
        }
      },
      16: {
        n: "BrtShortReal",
        f: Gs
      },
      17: {
        n: "BrtShortSt",
        f: function (e) {
          return [vn(e), ln(e), "str"];
        }
      },
      18: {
        n: "BrtShortIsst",
        f: function (e) {
          return [vn(e), e.read_shift(4), "s"];
        }
      },
      19: {
        n: "BrtSSTItem",
        f: hn
      },
      20: {
        n: "BrtPCDIMissing"
      },
      21: {
        n: "BrtPCDINumber"
      },
      22: {
        n: "BrtPCDIBoolean"
      },
      23: {
        n: "BrtPCDIError"
      },
      24: {
        n: "BrtPCDIString"
      },
      25: {
        n: "BrtPCDIDatetime"
      },
      26: {
        n: "BrtPCDIIndex"
      },
      27: {
        n: "BrtPCDIAMissing"
      },
      28: {
        n: "BrtPCDIANumber"
      },
      29: {
        n: "BrtPCDIABoolean"
      },
      30: {
        n: "BrtPCDIAError"
      },
      31: {
        n: "BrtPCDIAString"
      },
      32: {
        n: "BrtPCDIADatetime"
      },
      33: {
        n: "BrtPCRRecord"
      },
      34: {
        n: "BrtPCRRecordDt"
      },
      35: {
        n: "BrtFRTBegin"
      },
      36: {
        n: "BrtFRTEnd"
      },
      37: {
        n: "BrtACBegin"
      },
      38: {
        n: "BrtACEnd"
      },
      39: {
        n: "BrtName",
        f: function (e, t, n) {
          var r = e.l + t;
          e.l += 4;
          e.l += 1;
          var i = e.read_shift(4);
          var o = xn(e);
          var a = os(e, 0, n);
          var s = wn(e);
          e.l = r;
          var c = {
            Name: o,
            Ptg: a
          };
          if (i < 268435455) {
            c.Sheet = i;
          }
          if (s) {
            c.Comment = s;
          }
          return c;
        }
      },
      40: {
        n: "BrtIndexRowBlock"
      },
      42: {
        n: "BrtIndexBlock"
      },
      43: {
        n: "BrtFont",
        f: function (e, t, n) {
          var r = {};
          r.sz = e.read_shift(2) / 20;
          var i = function (e) {
            var t = e.read_shift(1);
            e.l++;
            return {
              fBold: 1 & t,
              fItalic: 2 & t,
              fUnderline: 4 & t,
              fStrikeout: 8 & t,
              fOutline: 16 & t,
              fShadow: 32 & t,
              fCondense: 64 & t,
              fExtend: 128 & t
            };
          }(e);
          switch (i.fItalic && (r.italic = 1), i.fCondense && (r.condense = 1), i.fExtend && (r.extend = 1), i.fShadow && (r.shadow = 1), i.fOutline && (r.outline = 1), i.fStrikeout && (r.strike = 1), 700 === e.read_shift(2) && (r.bold = 1), e.read_shift(2)) {
            case 1:
              r.vertAlign = "superscript";
              break;
            case 2:
              r.vertAlign = "subscript";
          }
          var o = e.read_shift(1);
          if (0 != o) {
            r.underline = o;
          }
          var a = e.read_shift(1);
          if (a > 0) {
            r.family = a;
          }
          var s = e.read_shift(1);
          switch (s > 0 && (r.charset = s), e.l++, r.color = function (e) {
            var t = {};
            var n = e.read_shift(1) >>> 1;
            var r = e.read_shift(1);
            var i = e.read_shift(2, "i");
            var o = e.read_shift(1);
            var a = e.read_shift(1);
            var s = e.read_shift(1);
            switch (e.l++, n) {
              case 0:
                t.auto = 1;
                break;
              case 1:
                t.index = r;
                var c = zn[r];
                if (c) {
                  t.rgb = go(c);
                }
                break;
              case 2:
                t.rgb = go([o, a, s]);
                break;
              case 3:
                t.theme = r;
            }
            if (0 != i) {
              t.tint = i > 0 ? i / 32767 : i / 32768;
            }
            return t;
          }(e), e.read_shift(1)) {
            case 1:
              r.scheme = "major";
              break;
            case 2:
              r.scheme = "minor";
          }
          r.name = ln(e);
          return r;
        }
      },
      44: {
        n: "BrtFmt",
        f: function (e, t) {
          return [e.read_shift(2), ln(e)];
        }
      },
      45: {
        n: "BrtFill",
        f: Mo
      },
      46: {
        n: "BrtBorder",
        f: Ho
      },
      47: {
        n: "BrtXF",
        f: function (e, t) {
          var n = e.l + t;
          var r = e.read_shift(2);
          var i = e.read_shift(2);
          e.l = n;
          return {
            ixfe: r,
            numFmtId: i
          };
        }
      },
      48: {
        n: "BrtStyle"
      },
      49: {
        n: "BrtCellMeta"
      },
      50: {
        n: "BrtValueMeta"
      },
      51: {
        n: "BrtMdb"
      },
      52: {
        n: "BrtBeginFmd"
      },
      53: {
        n: "BrtEndFmd"
      },
      54: {
        n: "BrtBeginMdx"
      },
      55: {
        n: "BrtEndMdx"
      },
      56: {
        n: "BrtBeginMdxTuple"
      },
      57: {
        n: "BrtEndMdxTuple"
      },
      58: {
        n: "BrtMdxMbrIstr"
      },
      59: {
        n: "BrtStr"
      },
      60: {
        n: "BrtColInfo",
        f: Fi
      },
      62: {
        n: "BrtCellRString"
      },
      63: {
        n: "BrtCalcChainItem$",
        f: function (e) {
          var t = {};
          t.i = e.read_shift(4);
          var n = {};
          n.r = e.read_shift(4);
          n.c = e.read_shift(4);
          t.r = Zt(n);
          var r = e.read_shift(1);
          if (2 & r) {
            t.l = "1";
          }
          if (8 & r) {
            t.a = "1";
          }
          return t;
        }
      },
      64: {
        n: "BrtDVal",
        f: function () {}
      },
      65: {
        n: "BrtSxvcellNum"
      },
      66: {
        n: "BrtSxvcellStr"
      },
      67: {
        n: "BrtSxvcellBool"
      },
      68: {
        n: "BrtSxvcellErr"
      },
      69: {
        n: "BrtSxvcellDate"
      },
      70: {
        n: "BrtSxvcellNil"
      },
      128: {
        n: "BrtFileVersion"
      },
      129: {
        n: "BrtBeginSheet"
      },
      130: {
        n: "BrtEndSheet"
      },
      131: {
        n: "BrtBeginBook",
        f: Lt,
        p: 0
      },
      132: {
        n: "BrtEndBook"
      },
      133: {
        n: "BrtBeginWsViews"
      },
      134: {
        n: "BrtEndWsViews"
      },
      135: {
        n: "BrtBeginBookViews"
      },
      136: {
        n: "BrtEndBookViews"
      },
      137: {
        n: "BrtBeginWsView",
        f: function (e) {
          var t = e.read_shift(2);
          e.l += 28;
          return {
            RTL: 32 & t
          };
        }
      },
      138: {
        n: "BrtEndWsView"
      },
      139: {
        n: "BrtBeginCsViews"
      },
      140: {
        n: "BrtEndCsViews"
      },
      141: {
        n: "BrtBeginCsView"
      },
      142: {
        n: "BrtEndCsView"
      },
      143: {
        n: "BrtBeginBundleShs"
      },
      144: {
        n: "BrtEndBundleShs"
      },
      145: {
        n: "BrtBeginSheetData"
      },
      146: {
        n: "BrtEndSheetData"
      },
      147: {
        n: "BrtWsProp",
        f: function (e, t) {
          var n = {};
          e.l += 19;
          n.name = yn(e, t - 19);
          return n;
        }
      },
      148: {
        n: "BrtWsDim",
        f: Hs,
        p: 16
      },
      151: {
        n: "BrtPane",
        f: function () {}
      },
      152: {
        n: "BrtSel"
      },
      153: {
        n: "BrtWbProp",
        f: function (e, t) {
          var n = {};
          var r = e.read_shift(4);
          n.defaultThemeVersion = e.read_shift(4);
          var i = t > 8 ? ln(e) : "";
          if (i.length > 0) {
            n.CodeName = i;
          }
          n.autoCompressPictures = !!(65536 & r);
          n.backupFile = !!(64 & r);
          n.checkCompatibility = !!(4096 & r);
          n.date1904 = !!(1 & r);
          n.filterPrivacy = !!(8 & r);
          n.hidePivotFieldList = !!(1024 & r);
          n.promptedSolutions = !!(16 & r);
          n.publishItems = !!(2048 & r);
          n.refreshAllConnections = !!(262144 & r);
          n.saveExternalLinkValues = !!(128 & r);
          n.showBorderUnselectedTables = !!(4 & r);
          n.showInkAnnotation = !!(32 & r);
          n.showObjects = ["all", "placeholders", "none"][r >> 13 & 3];
          n.showPivotChartFilter = !!(32768 & r);
          n.updateLinks = ["userSet", "never", "always"][r >> 8 & 3];
          return n;
        }
      },
      154: {
        n: "BrtWbFactoid"
      },
      155: {
        n: "BrtFileRecover"
      },
      156: {
        n: "BrtBundleSh",
        f: function (e, t) {
          var n = {};
          n.Hidden = e.read_shift(4);
          n.iTabID = e.read_shift(4);
          n.strRelID = Cn(e, t - 8);
          n.name = ln(e);
          return n;
        }
      },
      157: {
        n: "BrtCalcProp"
      },
      158: {
        n: "BrtBookView"
      },
      159: {
        n: "BrtBeginSst",
        f: function (e) {
          return [e.read_shift(4), e.read_shift(4)];
        }
      },
      160: {
        n: "BrtEndSst"
      },
      161: {
        n: "BrtBeginAFilter",
        f: Bn
      },
      162: {
        n: "BrtEndAFilter"
      },
      163: {
        n: "BrtBeginFilterColumn"
      },
      164: {
        n: "BrtEndFilterColumn"
      },
      165: {
        n: "BrtBeginFilters"
      },
      166: {
        n: "BrtEndFilters"
      },
      167: {
        n: "BrtFilter"
      },
      168: {
        n: "BrtColorFilter"
      },
      169: {
        n: "BrtIconFilter"
      },
      170: {
        n: "BrtTop10Filter"
      },
      171: {
        n: "BrtDynamicFilter"
      },
      172: {
        n: "BrtBeginCustomFilters"
      },
      173: {
        n: "BrtEndCustomFilters"
      },
      174: {
        n: "BrtCustomFilter"
      },
      175: {
        n: "BrtAFilterDateGroupItem"
      },
      176: {
        n: "BrtMergeCell",
        f: zs
      },
      177: {
        n: "BrtBeginMergeCells"
      },
      178: {
        n: "BrtEndMergeCells"
      },
      179: {
        n: "BrtBeginPivotCacheDef"
      },
      180: {
        n: "BrtEndPivotCacheDef"
      },
      181: {
        n: "BrtBeginPCDFields"
      },
      182: {
        n: "BrtEndPCDFields"
      },
      183: {
        n: "BrtBeginPCDField"
      },
      184: {
        n: "BrtEndPCDField"
      },
      185: {
        n: "BrtBeginPCDSource"
      },
      186: {
        n: "BrtEndPCDSource"
      },
      187: {
        n: "BrtBeginPCDSRange"
      },
      188: {
        n: "BrtEndPCDSRange"
      },
      189: {
        n: "BrtBeginPCDFAtbl"
      },
      190: {
        n: "BrtEndPCDFAtbl"
      },
      191: {
        n: "BrtBeginPCDIRun"
      },
      192: {
        n: "BrtEndPCDIRun"
      },
      193: {
        n: "BrtBeginPivotCacheRecords"
      },
      194: {
        n: "BrtEndPivotCacheRecords"
      },
      195: {
        n: "BrtBeginPCDHierarchies"
      },
      196: {
        n: "BrtEndPCDHierarchies"
      },
      197: {
        n: "BrtBeginPCDHierarchy"
      },
      198: {
        n: "BrtEndPCDHierarchy"
      },
      199: {
        n: "BrtBeginPCDHFieldsUsage"
      },
      200: {
        n: "BrtEndPCDHFieldsUsage"
      },
      201: {
        n: "BrtBeginExtConnection"
      },
      202: {
        n: "BrtEndExtConnection"
      },
      203: {
        n: "BrtBeginECDbProps"
      },
      204: {
        n: "BrtEndECDbProps"
      },
      205: {
        n: "BrtBeginECOlapProps"
      },
      206: {
        n: "BrtEndECOlapProps"
      },
      207: {
        n: "BrtBeginPCDSConsol"
      },
      208: {
        n: "BrtEndPCDSConsol"
      },
      209: {
        n: "BrtBeginPCDSCPages"
      },
      210: {
        n: "BrtEndPCDSCPages"
      },
      211: {
        n: "BrtBeginPCDSCPage"
      },
      212: {
        n: "BrtEndPCDSCPage"
      },
      213: {
        n: "BrtBeginPCDSCPItem"
      },
      214: {
        n: "BrtEndPCDSCPItem"
      },
      215: {
        n: "BrtBeginPCDSCSets"
      },
      216: {
        n: "BrtEndPCDSCSets"
      },
      217: {
        n: "BrtBeginPCDSCSet"
      },
      218: {
        n: "BrtEndPCDSCSet"
      },
      219: {
        n: "BrtBeginPCDFGroup"
      },
      220: {
        n: "BrtEndPCDFGroup"
      },
      221: {
        n: "BrtBeginPCDFGItems"
      },
      222: {
        n: "BrtEndPCDFGItems"
      },
      223: {
        n: "BrtBeginPCDFGRange"
      },
      224: {
        n: "BrtEndPCDFGRange"
      },
      225: {
        n: "BrtBeginPCDFGDiscrete"
      },
      226: {
        n: "BrtEndPCDFGDiscrete"
      },
      227: {
        n: "BrtBeginPCDSDTupleCache"
      },
      228: {
        n: "BrtEndPCDSDTupleCache"
      },
      229: {
        n: "BrtBeginPCDSDTCEntries"
      },
      230: {
        n: "BrtEndPCDSDTCEntries"
      },
      231: {
        n: "BrtBeginPCDSDTCEMembers"
      },
      232: {
        n: "BrtEndPCDSDTCEMembers"
      },
      233: {
        n: "BrtBeginPCDSDTCEMember"
      },
      234: {
        n: "BrtEndPCDSDTCEMember"
      },
      235: {
        n: "BrtBeginPCDSDTCQueries"
      },
      236: {
        n: "BrtEndPCDSDTCQueries"
      },
      237: {
        n: "BrtBeginPCDSDTCQuery"
      },
      238: {
        n: "BrtEndPCDSDTCQuery"
      },
      239: {
        n: "BrtBeginPCDSDTCSets"
      },
      240: {
        n: "BrtEndPCDSDTCSets"
      },
      241: {
        n: "BrtBeginPCDSDTCSet"
      },
      242: {
        n: "BrtEndPCDSDTCSet"
      },
      243: {
        n: "BrtBeginPCDCalcItems"
      },
      244: {
        n: "BrtEndPCDCalcItems"
      },
      245: {
        n: "BrtBeginPCDCalcItem"
      },
      246: {
        n: "BrtEndPCDCalcItem"
      },
      247: {
        n: "BrtBeginPRule"
      },
      248: {
        n: "BrtEndPRule"
      },
      249: {
        n: "BrtBeginPRFilters"
      },
      250: {
        n: "BrtEndPRFilters"
      },
      251: {
        n: "BrtBeginPRFilter"
      },
      252: {
        n: "BrtEndPRFilter"
      },
      253: {
        n: "BrtBeginPNames"
      },
      254: {
        n: "BrtEndPNames"
      },
      255: {
        n: "BrtBeginPName"
      },
      256: {
        n: "BrtEndPName"
      },
      257: {
        n: "BrtBeginPNPairs"
      },
      258: {
        n: "BrtEndPNPairs"
      },
      259: {
        n: "BrtBeginPNPair"
      },
      260: {
        n: "BrtEndPNPair"
      },
      261: {
        n: "BrtBeginECWebProps"
      },
      262: {
        n: "BrtEndECWebProps"
      },
      263: {
        n: "BrtBeginEcWpTables"
      },
      264: {
        n: "BrtEndECWPTables"
      },
      265: {
        n: "BrtBeginECParams"
      },
      266: {
        n: "BrtEndECParams"
      },
      267: {
        n: "BrtBeginECParam"
      },
      268: {
        n: "BrtEndECParam"
      },
      269: {
        n: "BrtBeginPCDKPIs"
      },
      270: {
        n: "BrtEndPCDKPIs"
      },
      271: {
        n: "BrtBeginPCDKPI"
      },
      272: {
        n: "BrtEndPCDKPI"
      },
      273: {
        n: "BrtBeginDims"
      },
      274: {
        n: "BrtEndDims"
      },
      275: {
        n: "BrtBeginDim"
      },
      276: {
        n: "BrtEndDim"
      },
      277: {
        n: "BrtIndexPartEnd"
      },
      278: {
        n: "BrtBeginStyleSheet"
      },
      279: {
        n: "BrtEndStyleSheet"
      },
      280: {
        n: "BrtBeginSXView"
      },
      281: {
        n: "BrtEndSXVI"
      },
      282: {
        n: "BrtBeginSXVI"
      },
      283: {
        n: "BrtBeginSXVIs"
      },
      284: {
        n: "BrtEndSXVIs"
      },
      285: {
        n: "BrtBeginSXVD"
      },
      286: {
        n: "BrtEndSXVD"
      },
      287: {
        n: "BrtBeginSXVDs"
      },
      288: {
        n: "BrtEndSXVDs"
      },
      289: {
        n: "BrtBeginSXPI"
      },
      290: {
        n: "BrtEndSXPI"
      },
      291: {
        n: "BrtBeginSXPIs"
      },
      292: {
        n: "BrtEndSXPIs"
      },
      293: {
        n: "BrtBeginSXDI"
      },
      294: {
        n: "BrtEndSXDI"
      },
      295: {
        n: "BrtBeginSXDIs"
      },
      296: {
        n: "BrtEndSXDIs"
      },
      297: {
        n: "BrtBeginSXLI"
      },
      298: {
        n: "BrtEndSXLI"
      },
      299: {
        n: "BrtBeginSXLIRws"
      },
      300: {
        n: "BrtEndSXLIRws"
      },
      301: {
        n: "BrtBeginSXLICols"
      },
      302: {
        n: "BrtEndSXLICols"
      },
      303: {
        n: "BrtBeginSXFormat"
      },
      304: {
        n: "BrtEndSXFormat"
      },
      305: {
        n: "BrtBeginSXFormats"
      },
      306: {
        n: "BrtEndSxFormats"
      },
      307: {
        n: "BrtBeginSxSelect"
      },
      308: {
        n: "BrtEndSxSelect"
      },
      309: {
        n: "BrtBeginISXVDRws"
      },
      310: {
        n: "BrtEndISXVDRws"
      },
      311: {
        n: "BrtBeginISXVDCols"
      },
      312: {
        n: "BrtEndISXVDCols"
      },
      313: {
        n: "BrtEndSXLocation"
      },
      314: {
        n: "BrtBeginSXLocation"
      },
      315: {
        n: "BrtEndSXView"
      },
      316: {
        n: "BrtBeginSXTHs"
      },
      317: {
        n: "BrtEndSXTHs"
      },
      318: {
        n: "BrtBeginSXTH"
      },
      319: {
        n: "BrtEndSXTH"
      },
      320: {
        n: "BrtBeginISXTHRws"
      },
      321: {
        n: "BrtEndISXTHRws"
      },
      322: {
        n: "BrtBeginISXTHCols"
      },
      323: {
        n: "BrtEndISXTHCols"
      },
      324: {
        n: "BrtBeginSXTDMPS"
      },
      325: {
        n: "BrtEndSXTDMPs"
      },
      326: {
        n: "BrtBeginSXTDMP"
      },
      327: {
        n: "BrtEndSXTDMP"
      },
      328: {
        n: "BrtBeginSXTHItems"
      },
      329: {
        n: "BrtEndSXTHItems"
      },
      330: {
        n: "BrtBeginSXTHItem"
      },
      331: {
        n: "BrtEndSXTHItem"
      },
      332: {
        n: "BrtBeginMetadata"
      },
      333: {
        n: "BrtEndMetadata"
      },
      334: {
        n: "BrtBeginEsmdtinfo"
      },
      335: {
        n: "BrtMdtinfo"
      },
      336: {
        n: "BrtEndEsmdtinfo"
      },
      337: {
        n: "BrtBeginEsmdb"
      },
      338: {
        n: "BrtEndEsmdb"
      },
      339: {
        n: "BrtBeginEsfmd"
      },
      340: {
        n: "BrtEndEsfmd"
      },
      341: {
        n: "BrtBeginSingleCells"
      },
      342: {
        n: "BrtEndSingleCells"
      },
      343: {
        n: "BrtBeginList"
      },
      344: {
        n: "BrtEndList"
      },
      345: {
        n: "BrtBeginListCols"
      },
      346: {
        n: "BrtEndListCols"
      },
      347: {
        n: "BrtBeginListCol"
      },
      348: {
        n: "BrtEndListCol"
      },
      349: {
        n: "BrtBeginListXmlCPr"
      },
      350: {
        n: "BrtEndListXmlCPr"
      },
      351: {
        n: "BrtListCCFmla"
      },
      352: {
        n: "BrtListTrFmla"
      },
      353: {
        n: "BrtBeginExternals"
      },
      354: {
        n: "BrtEndExternals"
      },
      355: {
        n: "BrtSupBookSrc",
        f: Cn
      },
      357: {
        n: "BrtSupSelf"
      },
      358: {
        n: "BrtSupSame"
      },
      359: {
        n: "BrtSupTabs"
      },
      360: {
        n: "BrtBeginSupBook"
      },
      361: {
        n: "BrtPlaceholderName"
      },
      362: {
        n: "BrtExternSheet",
        f: Si
      },
      363: {
        n: "BrtExternTableStart"
      },
      364: {
        n: "BrtExternTableEnd"
      },
      366: {
        n: "BrtExternRowHdr"
      },
      367: {
        n: "BrtExternCellBlank"
      },
      368: {
        n: "BrtExternCellReal"
      },
      369: {
        n: "BrtExternCellBool"
      },
      370: {
        n: "BrtExternCellError"
      },
      371: {
        n: "BrtExternCellString"
      },
      372: {
        n: "BrtBeginEsmdx"
      },
      373: {
        n: "BrtEndEsmdx"
      },
      374: {
        n: "BrtBeginMdxSet"
      },
      375: {
        n: "BrtEndMdxSet"
      },
      376: {
        n: "BrtBeginMdxMbrProp"
      },
      377: {
        n: "BrtEndMdxMbrProp"
      },
      378: {
        n: "BrtBeginMdxKPI"
      },
      379: {
        n: "BrtEndMdxKPI"
      },
      380: {
        n: "BrtBeginEsstr"
      },
      381: {
        n: "BrtEndEsstr"
      },
      382: {
        n: "BrtBeginPRFItem"
      },
      383: {
        n: "BrtEndPRFItem"
      },
      384: {
        n: "BrtBeginPivotCacheIDs"
      },
      385: {
        n: "BrtEndPivotCacheIDs"
      },
      386: {
        n: "BrtBeginPivotCacheID"
      },
      387: {
        n: "BrtEndPivotCacheID"
      },
      388: {
        n: "BrtBeginISXVIs"
      },
      389: {
        n: "BrtEndISXVIs"
      },
      390: {
        n: "BrtBeginColInfos"
      },
      391: {
        n: "BrtEndColInfos"
      },
      392: {
        n: "BrtBeginRwBrk"
      },
      393: {
        n: "BrtEndRwBrk"
      },
      394: {
        n: "BrtBeginColBrk"
      },
      395: {
        n: "BrtEndColBrk"
      },
      396: {
        n: "BrtBrk"
      },
      397: {
        n: "BrtUserBookView"
      },
      398: {
        n: "BrtInfo"
      },
      399: {
        n: "BrtCUsr"
      },
      400: {
        n: "BrtUsr"
      },
      401: {
        n: "BrtBeginUsers"
      },
      403: {
        n: "BrtEOF"
      },
      404: {
        n: "BrtUCR"
      },
      405: {
        n: "BrtRRInsDel"
      },
      406: {
        n: "BrtRREndInsDel"
      },
      407: {
        n: "BrtRRMove"
      },
      408: {
        n: "BrtRREndMove"
      },
      409: {
        n: "BrtRRChgCell"
      },
      410: {
        n: "BrtRREndChgCell"
      },
      411: {
        n: "BrtRRHeader"
      },
      412: {
        n: "BrtRRUserView"
      },
      413: {
        n: "BrtRRRenSheet"
      },
      414: {
        n: "BrtRRInsertSh"
      },
      415: {
        n: "BrtRRDefName"
      },
      416: {
        n: "BrtRRNote"
      },
      417: {
        n: "BrtRRConflict"
      },
      418: {
        n: "BrtRRTQSIF"
      },
      419: {
        n: "BrtRRFormat"
      },
      420: {
        n: "BrtRREndFormat"
      },
      421: {
        n: "BrtRRAutoFmt"
      },
      422: {
        n: "BrtBeginUserShViews"
      },
      423: {
        n: "BrtBeginUserShView"
      },
      424: {
        n: "BrtEndUserShView"
      },
      425: {
        n: "BrtEndUserShViews"
      },
      426: {
        n: "BrtArrFmla",
        f: function (e, t, n) {
          var r = e.l + t;
          var i = Tn(e);
          var o = e.read_shift(1);
          var a = [i];
          a[2] = o;
          if (n.cellFormula) {
            var s = rs(e, r - e.l, n);
            a[1] = s;
          } else {
            e.l = r;
          }
          return a;
        }
      },
      427: {
        n: "BrtShrFmla",
        f: function (e, t, n) {
          var r = e.l + t;
          var i = [Bn(e, 16)];
          if (n.cellFormula) {
            var o = as(e, r - e.l, n);
            i[1] = o;
            e.l = r;
          } else {
            e.l = r;
          }
          return i;
        }
      },
      428: {
        n: "BrtTable"
      },
      429: {
        n: "BrtBeginExtConnections"
      },
      430: {
        n: "BrtEndExtConnections"
      },
      431: {
        n: "BrtBeginPCDCalcMems"
      },
      432: {
        n: "BrtEndPCDCalcMems"
      },
      433: {
        n: "BrtBeginPCDCalcMem"
      },
      434: {
        n: "BrtEndPCDCalcMem"
      },
      435: {
        n: "BrtBeginPCDHGLevels"
      },
      436: {
        n: "BrtEndPCDHGLevels"
      },
      437: {
        n: "BrtBeginPCDHGLevel"
      },
      438: {
        n: "BrtEndPCDHGLevel"
      },
      439: {
        n: "BrtBeginPCDHGLGroups"
      },
      440: {
        n: "BrtEndPCDHGLGroups"
      },
      441: {
        n: "BrtBeginPCDHGLGroup"
      },
      442: {
        n: "BrtEndPCDHGLGroup"
      },
      443: {
        n: "BrtBeginPCDHGLGMembers"
      },
      444: {
        n: "BrtEndPCDHGLGMembers"
      },
      445: {
        n: "BrtBeginPCDHGLGMember"
      },
      446: {
        n: "BrtEndPCDHGLGMember"
      },
      447: {
        n: "BrtBeginQSI"
      },
      448: {
        n: "BrtEndQSI"
      },
      449: {
        n: "BrtBeginQSIR"
      },
      450: {
        n: "BrtEndQSIR"
      },
      451: {
        n: "BrtBeginDeletedNames"
      },
      452: {
        n: "BrtEndDeletedNames"
      },
      453: {
        n: "BrtBeginDeletedName"
      },
      454: {
        n: "BrtEndDeletedName"
      },
      455: {
        n: "BrtBeginQSIFs"
      },
      456: {
        n: "BrtEndQSIFs"
      },
      457: {
        n: "BrtBeginQSIF"
      },
      458: {
        n: "BrtEndQSIF"
      },
      459: {
        n: "BrtBeginAutoSortScope"
      },
      460: {
        n: "BrtEndAutoSortScope"
      },
      461: {
        n: "BrtBeginConditionalFormatting"
      },
      462: {
        n: "BrtEndConditionalFormatting"
      },
      463: {
        n: "BrtBeginCFRule"
      },
      464: {
        n: "BrtEndCFRule"
      },
      465: {
        n: "BrtBeginIconSet"
      },
      466: {
        n: "BrtEndIconSet"
      },
      467: {
        n: "BrtBeginDatabar"
      },
      468: {
        n: "BrtEndDatabar"
      },
      469: {
        n: "BrtBeginColorScale"
      },
      470: {
        n: "BrtEndColorScale"
      },
      471: {
        n: "BrtCFVO"
      },
      472: {
        n: "BrtExternValueMeta"
      },
      473: {
        n: "BrtBeginColorPalette"
      },
      474: {
        n: "BrtEndColorPalette"
      },
      475: {
        n: "BrtIndexedColor"
      },
      476: {
        n: "BrtMargins",
        f: function (e) {
          var t = {};
          Ws.forEach(function (n) {
            t[n] = In(e);
          });
          return t;
        }
      },
      477: {
        n: "BrtPrintOptions"
      },
      478: {
        n: "BrtPageSetup"
      },
      479: {
        n: "BrtBeginHeaderFooter"
      },
      480: {
        n: "BrtEndHeaderFooter"
      },
      481: {
        n: "BrtBeginSXCrtFormat"
      },
      482: {
        n: "BrtEndSXCrtFormat"
      },
      483: {
        n: "BrtBeginSXCrtFormats"
      },
      484: {
        n: "BrtEndSXCrtFormats"
      },
      485: {
        n: "BrtWsFmtInfo",
        f: function () {}
      },
      486: {
        n: "BrtBeginMgs"
      },
      487: {
        n: "BrtEndMGs"
      },
      488: {
        n: "BrtBeginMGMaps"
      },
      489: {
        n: "BrtEndMGMaps"
      },
      490: {
        n: "BrtBeginMG"
      },
      491: {
        n: "BrtEndMG"
      },
      492: {
        n: "BrtBeginMap"
      },
      493: {
        n: "BrtEndMap"
      },
      494: {
        n: "BrtHLink",
        f: function (e, t) {
          var n = e.l + t;
          var r = Bn(e, 16);
          var i = wn(e);
          var o = ln(e);
          var a = ln(e);
          var s = ln(e);
          e.l = n;
          var c = {
            rfx: r,
            relId: i,
            loc: o,
            display: s
          };
          if (a) {
            c.Tooltip = a;
          }
          return c;
        }
      },
      495: {
        n: "BrtBeginDCon"
      },
      496: {
        n: "BrtEndDCon"
      },
      497: {
        n: "BrtBeginDRefs"
      },
      498: {
        n: "BrtEndDRefs"
      },
      499: {
        n: "BrtDRef"
      },
      500: {
        n: "BrtBeginScenMan"
      },
      501: {
        n: "BrtEndScenMan"
      },
      502: {
        n: "BrtBeginSct"
      },
      503: {
        n: "BrtEndSct"
      },
      504: {
        n: "BrtSlc"
      },
      505: {
        n: "BrtBeginDXFs"
      },
      506: {
        n: "BrtEndDXFs"
      },
      507: {
        n: "BrtDXF"
      },
      508: {
        n: "BrtBeginTableStyles"
      },
      509: {
        n: "BrtEndTableStyles"
      },
      510: {
        n: "BrtBeginTableStyle"
      },
      511: {
        n: "BrtEndTableStyle"
      },
      512: {
        n: "BrtTableStyleElement"
      },
      513: {
        n: "BrtTableStyleClient"
      },
      514: {
        n: "BrtBeginVolDeps"
      },
      515: {
        n: "BrtEndVolDeps"
      },
      516: {
        n: "BrtBeginVolType"
      },
      517: {
        n: "BrtEndVolType"
      },
      518: {
        n: "BrtBeginVolMain"
      },
      519: {
        n: "BrtEndVolMain"
      },
      520: {
        n: "BrtBeginVolTopic"
      },
      521: {
        n: "BrtEndVolTopic"
      },
      522: {
        n: "BrtVolSubtopic"
      },
      523: {
        n: "BrtVolRef"
      },
      524: {
        n: "BrtVolNum"
      },
      525: {
        n: "BrtVolErr"
      },
      526: {
        n: "BrtVolStr"
      },
      527: {
        n: "BrtVolBool"
      },
      528: {
        n: "BrtBeginCalcChain$"
      },
      529: {
        n: "BrtEndCalcChain$"
      },
      530: {
        n: "BrtBeginSortState"
      },
      531: {
        n: "BrtEndSortState"
      },
      532: {
        n: "BrtBeginSortCond"
      },
      533: {
        n: "BrtEndSortCond"
      },
      534: {
        n: "BrtBookProtection"
      },
      535: {
        n: "BrtSheetProtection"
      },
      536: {
        n: "BrtRangeProtection"
      },
      537: {
        n: "BrtPhoneticInfo"
      },
      538: {
        n: "BrtBeginECTxtWiz"
      },
      539: {
        n: "BrtEndECTxtWiz"
      },
      540: {
        n: "BrtBeginECTWFldInfoLst"
      },
      541: {
        n: "BrtEndECTWFldInfoLst"
      },
      542: {
        n: "BrtBeginECTwFldInfo"
      },
      548: {
        n: "BrtFileSharing"
      },
      549: {
        n: "BrtOleSize"
      },
      550: {
        n: "BrtDrawing",
        f: Cn
      },
      551: {
        n: "BrtLegacyDrawing"
      },
      552: {
        n: "BrtLegacyDrawingHF"
      },
      553: {
        n: "BrtWebOpt"
      },
      554: {
        n: "BrtBeginWebPubItems"
      },
      555: {
        n: "BrtEndWebPubItems"
      },
      556: {
        n: "BrtBeginWebPubItem"
      },
      557: {
        n: "BrtEndWebPubItem"
      },
      558: {
        n: "BrtBeginSXCondFmt"
      },
      559: {
        n: "BrtEndSXCondFmt"
      },
      560: {
        n: "BrtBeginSXCondFmts"
      },
      561: {
        n: "BrtEndSXCondFmts"
      },
      562: {
        n: "BrtBkHim"
      },
      564: {
        n: "BrtColor"
      },
      565: {
        n: "BrtBeginIndexedColors"
      },
      566: {
        n: "BrtEndIndexedColors"
      },
      569: {
        n: "BrtBeginMRUColors"
      },
      570: {
        n: "BrtEndMRUColors"
      },
      572: {
        n: "BrtMRUColor"
      },
      573: {
        n: "BrtBeginDVals"
      },
      574: {
        n: "BrtEndDVals"
      },
      577: {
        n: "BrtSupNameStart"
      },
      578: {
        n: "BrtSupNameValueStart"
      },
      579: {
        n: "BrtSupNameValueEnd"
      },
      580: {
        n: "BrtSupNameNum"
      },
      581: {
        n: "BrtSupNameErr"
      },
      582: {
        n: "BrtSupNameSt"
      },
      583: {
        n: "BrtSupNameNil"
      },
      584: {
        n: "BrtSupNameBool"
      },
      585: {
        n: "BrtSupNameFmla"
      },
      586: {
        n: "BrtSupNameBits"
      },
      587: {
        n: "BrtSupNameEnd"
      },
      588: {
        n: "BrtEndSupBook"
      },
      589: {
        n: "BrtCellSmartTagProperty"
      },
      590: {
        n: "BrtBeginCellSmartTag"
      },
      591: {
        n: "BrtEndCellSmartTag"
      },
      592: {
        n: "BrtBeginCellSmartTags"
      },
      593: {
        n: "BrtEndCellSmartTags"
      },
      594: {
        n: "BrtBeginSmartTags"
      },
      595: {
        n: "BrtEndSmartTags"
      },
      596: {
        n: "BrtSmartTagType"
      },
      597: {
        n: "BrtBeginSmartTagTypes"
      },
      598: {
        n: "BrtEndSmartTagTypes"
      },
      599: {
        n: "BrtBeginSXFilters"
      },
      600: {
        n: "BrtEndSXFilters"
      },
      601: {
        n: "BrtBeginSXFILTER"
      },
      602: {
        n: "BrtEndSXFilter"
      },
      603: {
        n: "BrtBeginFills"
      },
      604: {
        n: "BrtEndFills"
      },
      605: {
        n: "BrtBeginCellWatches"
      },
      606: {
        n: "BrtEndCellWatches"
      },
      607: {
        n: "BrtCellWatch"
      },
      608: {
        n: "BrtBeginCRErrs"
      },
      609: {
        n: "BrtEndCRErrs"
      },
      610: {
        n: "BrtCrashRecErr"
      },
      611: {
        n: "BrtBeginFonts"
      },
      612: {
        n: "BrtEndFonts"
      },
      613: {
        n: "BrtBeginBorders"
      },
      614: {
        n: "BrtEndBorders"
      },
      615: {
        n: "BrtBeginFmts"
      },
      616: {
        n: "BrtEndFmts"
      },
      617: {
        n: "BrtBeginCellXFs"
      },
      618: {
        n: "BrtEndCellXFs"
      },
      619: {
        n: "BrtBeginStyles"
      },
      620: {
        n: "BrtEndStyles"
      },
      625: {
        n: "BrtBigName"
      },
      626: {
        n: "BrtBeginCellStyleXFs"
      },
      627: {
        n: "BrtEndCellStyleXFs"
      },
      628: {
        n: "BrtBeginComments"
      },
      629: {
        n: "BrtEndComments"
      },
      630: {
        n: "BrtBeginCommentAuthors"
      },
      631: {
        n: "BrtEndCommentAuthors"
      },
      632: {
        n: "BrtCommentAuthor",
        f: ca
      },
      633: {
        n: "BrtBeginCommentList"
      },
      634: {
        n: "BrtEndCommentList"
      },
      635: {
        n: "BrtBeginComment",
        f: function (e) {
          var t = {};
          t.iauthor = e.read_shift(4);
          var n = Bn(e, 16);
          t.rfx = n.s;
          t.ref = Zt(n.s);
          e.l += 16;
          return t;
        }
      },
      636: {
        n: "BrtEndComment"
      },
      637: {
        n: "BrtCommentText",
        f: pn
      },
      638: {
        n: "BrtBeginOleObjects"
      },
      639: {
        n: "BrtOleObject"
      },
      640: {
        n: "BrtEndOleObjects"
      },
      641: {
        n: "BrtBeginSxrules"
      },
      642: {
        n: "BrtEndSxRules"
      },
      643: {
        n: "BrtBeginActiveXControls"
      },
      644: {
        n: "BrtActiveX"
      },
      645: {
        n: "BrtEndActiveXControls"
      },
      646: {
        n: "BrtBeginPCDSDTCEMembersSortBy"
      },
      648: {
        n: "BrtBeginCellIgnoreECs"
      },
      649: {
        n: "BrtCellIgnoreEC"
      },
      650: {
        n: "BrtEndCellIgnoreECs"
      },
      651: {
        n: "BrtCsProp",
        f: function (e, t) {
          e.l += 10;
          return {
            name: ln(e)
          };
        }
      },
      652: {
        n: "BrtCsPageSetup"
      },
      653: {
        n: "BrtBeginUserCsViews"
      },
      654: {
        n: "BrtEndUserCsViews"
      },
      655: {
        n: "BrtBeginUserCsView"
      },
      656: {
        n: "BrtEndUserCsView"
      },
      657: {
        n: "BrtBeginPcdSFCIEntries"
      },
      658: {
        n: "BrtEndPCDSFCIEntries"
      },
      659: {
        n: "BrtPCDSFCIEntry"
      },
      660: {
        n: "BrtBeginListParts"
      },
      661: {
        n: "BrtListPart"
      },
      662: {
        n: "BrtEndListParts"
      },
      663: {
        n: "BrtSheetCalcProp"
      },
      664: {
        n: "BrtBeginFnGroup"
      },
      665: {
        n: "BrtFnGroup"
      },
      666: {
        n: "BrtEndFnGroup"
      },
      667: {
        n: "BrtSupAddin"
      },
      668: {
        n: "BrtSXTDMPOrder"
      },
      669: {
        n: "BrtCsProtection"
      },
      671: {
        n: "BrtBeginWsSortMap"
      },
      672: {
        n: "BrtEndWsSortMap"
      },
      673: {
        n: "BrtBeginRRSort"
      },
      674: {
        n: "BrtEndRRSort"
      },
      675: {
        n: "BrtRRSortItem"
      },
      676: {
        n: "BrtFileSharingIso"
      },
      677: {
        n: "BrtBookProtectionIso"
      },
      678: {
        n: "BrtSheetProtectionIso"
      },
      679: {
        n: "BrtCsProtectionIso"
      },
      680: {
        n: "BrtRangeProtectionIso"
      },
      681: {
        n: "BrtDValList"
      },
      1024: {
        n: "BrtRwDescent"
      },
      1025: {
        n: "BrtKnownFonts"
      },
      1026: {
        n: "BrtBeginSXTupleSet"
      },
      1027: {
        n: "BrtEndSXTupleSet"
      },
      1028: {
        n: "BrtBeginSXTupleSetHeader"
      },
      1029: {
        n: "BrtEndSXTupleSetHeader"
      },
      1030: {
        n: "BrtSXTupleSetHeaderItem"
      },
      1031: {
        n: "BrtBeginSXTupleSetData"
      },
      1032: {
        n: "BrtEndSXTupleSetData"
      },
      1033: {
        n: "BrtBeginSXTupleSetRow"
      },
      1034: {
        n: "BrtEndSXTupleSetRow"
      },
      1035: {
        n: "BrtSXTupleSetRowItem"
      },
      1036: {
        n: "BrtNameExt"
      },
      1037: {
        n: "BrtPCDH14"
      },
      1038: {
        n: "BrtBeginPCDCalcMem14"
      },
      1039: {
        n: "BrtEndPCDCalcMem14"
      },
      1040: {
        n: "BrtSXTH14"
      },
      1041: {
        n: "BrtBeginSparklineGroup"
      },
      1042: {
        n: "BrtEndSparklineGroup"
      },
      1043: {
        n: "BrtSparkline"
      },
      1044: {
        n: "BrtSXDI14"
      },
      1045: {
        n: "BrtWsFmtInfoEx14"
      },
      1046: {
        n: "BrtBeginConditionalFormatting14"
      },
      1047: {
        n: "BrtEndConditionalFormatting14"
      },
      1048: {
        n: "BrtBeginCFRule14"
      },
      1049: {
        n: "BrtEndCFRule14"
      },
      1050: {
        n: "BrtCFVO14"
      },
      1051: {
        n: "BrtBeginDatabar14"
      },
      1052: {
        n: "BrtBeginIconSet14"
      },
      1053: {
        n: "BrtDVal14",
        f: function () {}
      },
      1054: {
        n: "BrtBeginDVals14"
      },
      1055: {
        n: "BrtColor14"
      },
      1056: {
        n: "BrtBeginSparklines"
      },
      1057: {
        n: "BrtEndSparklines"
      },
      1058: {
        n: "BrtBeginSparklineGroups"
      },
      1059: {
        n: "BrtEndSparklineGroups"
      },
      1061: {
        n: "BrtSXVD14"
      },
      1062: {
        n: "BrtBeginSXView14"
      },
      1063: {
        n: "BrtEndSXView14"
      },
      1064: {
        n: "BrtBeginSXView16"
      },
      1065: {
        n: "BrtEndSXView16"
      },
      1066: {
        n: "BrtBeginPCD14"
      },
      1067: {
        n: "BrtEndPCD14"
      },
      1068: {
        n: "BrtBeginExtConn14"
      },
      1069: {
        n: "BrtEndExtConn14"
      },
      1070: {
        n: "BrtBeginSlicerCacheIDs"
      },
      1071: {
        n: "BrtEndSlicerCacheIDs"
      },
      1072: {
        n: "BrtBeginSlicerCacheID"
      },
      1073: {
        n: "BrtEndSlicerCacheID"
      },
      1075: {
        n: "BrtBeginSlicerCache"
      },
      1076: {
        n: "BrtEndSlicerCache"
      },
      1077: {
        n: "BrtBeginSlicerCacheDef"
      },
      1078: {
        n: "BrtEndSlicerCacheDef"
      },
      1079: {
        n: "BrtBeginSlicersEx"
      },
      1080: {
        n: "BrtEndSlicersEx"
      },
      1081: {
        n: "BrtBeginSlicerEx"
      },
      1082: {
        n: "BrtEndSlicerEx"
      },
      1083: {
        n: "BrtBeginSlicer"
      },
      1084: {
        n: "BrtEndSlicer"
      },
      1085: {
        n: "BrtSlicerCachePivotTables"
      },
      1086: {
        n: "BrtBeginSlicerCacheOlapImpl"
      },
      1087: {
        n: "BrtEndSlicerCacheOlapImpl"
      },
      1088: {
        n: "BrtBeginSlicerCacheLevelsData"
      },
      1089: {
        n: "BrtEndSlicerCacheLevelsData"
      },
      1090: {
        n: "BrtBeginSlicerCacheLevelData"
      },
      1091: {
        n: "BrtEndSlicerCacheLevelData"
      },
      1092: {
        n: "BrtBeginSlicerCacheSiRanges"
      },
      1093: {
        n: "BrtEndSlicerCacheSiRanges"
      },
      1094: {
        n: "BrtBeginSlicerCacheSiRange"
      },
      1095: {
        n: "BrtEndSlicerCacheSiRange"
      },
      1096: {
        n: "BrtSlicerCacheOlapItem"
      },
      1097: {
        n: "BrtBeginSlicerCacheSelections"
      },
      1098: {
        n: "BrtSlicerCacheSelection"
      },
      1099: {
        n: "BrtEndSlicerCacheSelections"
      },
      1100: {
        n: "BrtBeginSlicerCacheNative"
      },
      1101: {
        n: "BrtEndSlicerCacheNative"
      },
      1102: {
        n: "BrtSlicerCacheNativeItem"
      },
      1103: {
        n: "BrtRangeProtection14"
      },
      1104: {
        n: "BrtRangeProtectionIso14"
      },
      1105: {
        n: "BrtCellIgnoreEC14"
      },
      1111: {
        n: "BrtList14"
      },
      1112: {
        n: "BrtCFIcon"
      },
      1113: {
        n: "BrtBeginSlicerCachesPivotCacheIDs"
      },
      1114: {
        n: "BrtEndSlicerCachesPivotCacheIDs"
      },
      1115: {
        n: "BrtBeginSlicers"
      },
      1116: {
        n: "BrtEndSlicers"
      },
      1117: {
        n: "BrtWbProp14"
      },
      1118: {
        n: "BrtBeginSXEdit"
      },
      1119: {
        n: "BrtEndSXEdit"
      },
      1120: {
        n: "BrtBeginSXEdits"
      },
      1121: {
        n: "BrtEndSXEdits"
      },
      1122: {
        n: "BrtBeginSXChange"
      },
      1123: {
        n: "BrtEndSXChange"
      },
      1124: {
        n: "BrtBeginSXChanges"
      },
      1125: {
        n: "BrtEndSXChanges"
      },
      1126: {
        n: "BrtSXTupleItems"
      },
      1128: {
        n: "BrtBeginSlicerStyle"
      },
      1129: {
        n: "BrtEndSlicerStyle"
      },
      1130: {
        n: "BrtSlicerStyleElement"
      },
      1131: {
        n: "BrtBeginStyleSheetExt14"
      },
      1132: {
        n: "BrtEndStyleSheetExt14"
      },
      1133: {
        n: "BrtBeginSlicerCachesPivotCacheID"
      },
      1134: {
        n: "BrtEndSlicerCachesPivotCacheID"
      },
      1135: {
        n: "BrtBeginConditionalFormattings"
      },
      1136: {
        n: "BrtEndConditionalFormattings"
      },
      1137: {
        n: "BrtBeginPCDCalcMemExt"
      },
      1138: {
        n: "BrtEndPCDCalcMemExt"
      },
      1139: {
        n: "BrtBeginPCDCalcMemsExt"
      },
      1140: {
        n: "BrtEndPCDCalcMemsExt"
      },
      1141: {
        n: "BrtPCDField14"
      },
      1142: {
        n: "BrtBeginSlicerStyles"
      },
      1143: {
        n: "BrtEndSlicerStyles"
      },
      1144: {
        n: "BrtBeginSlicerStyleElements"
      },
      1145: {
        n: "BrtEndSlicerStyleElements"
      },
      1146: {
        n: "BrtCFRuleExt"
      },
      1147: {
        n: "BrtBeginSXCondFmt14"
      },
      1148: {
        n: "BrtEndSXCondFmt14"
      },
      1149: {
        n: "BrtBeginSXCondFmts14"
      },
      1150: {
        n: "BrtEndSXCondFmts14"
      },
      1152: {
        n: "BrtBeginSortCond14"
      },
      1153: {
        n: "BrtEndSortCond14"
      },
      1154: {
        n: "BrtEndDVals14"
      },
      1155: {
        n: "BrtEndIconSet14"
      },
      1156: {
        n: "BrtEndDatabar14"
      },
      1157: {
        n: "BrtBeginColorScale14"
      },
      1158: {
        n: "BrtEndColorScale14"
      },
      1159: {
        n: "BrtBeginSxrules14"
      },
      1160: {
        n: "BrtEndSxrules14"
      },
      1161: {
        n: "BrtBeginPRule14"
      },
      1162: {
        n: "BrtEndPRule14"
      },
      1163: {
        n: "BrtBeginPRFilters14"
      },
      1164: {
        n: "BrtEndPRFilters14"
      },
      1165: {
        n: "BrtBeginPRFilter14"
      },
      1166: {
        n: "BrtEndPRFilter14"
      },
      1167: {
        n: "BrtBeginPRFItem14"
      },
      1168: {
        n: "BrtEndPRFItem14"
      },
      1169: {
        n: "BrtBeginCellIgnoreECs14"
      },
      1170: {
        n: "BrtEndCellIgnoreECs14"
      },
      1171: {
        n: "BrtDxf14"
      },
      1172: {
        n: "BrtBeginDxF14s"
      },
      1173: {
        n: "BrtEndDxf14s"
      },
      1177: {
        n: "BrtFilter14"
      },
      1178: {
        n: "BrtBeginCustomFilters14"
      },
      1180: {
        n: "BrtCustomFilter14"
      },
      1181: {
        n: "BrtIconFilter14"
      },
      1182: {
        n: "BrtPivotCacheConnectionName"
      },
      2048: {
        n: "BrtBeginDecoupledPivotCacheIDs"
      },
      2049: {
        n: "BrtEndDecoupledPivotCacheIDs"
      },
      2050: {
        n: "BrtDecoupledPivotCacheID"
      },
      2051: {
        n: "BrtBeginPivotTableRefs"
      },
      2052: {
        n: "BrtEndPivotTableRefs"
      },
      2053: {
        n: "BrtPivotTableRef"
      },
      2054: {
        n: "BrtSlicerCacheBookPivotTables"
      },
      2055: {
        n: "BrtBeginSxvcells"
      },
      2056: {
        n: "BrtEndSxvcells"
      },
      2057: {
        n: "BrtBeginSxRow"
      },
      2058: {
        n: "BrtEndSxRow"
      },
      2060: {
        n: "BrtPcdCalcMem15"
      },
      2067: {
        n: "BrtQsi15"
      },
      2068: {
        n: "BrtBeginWebExtensions"
      },
      2069: {
        n: "BrtEndWebExtensions"
      },
      2070: {
        n: "BrtWebExtension"
      },
      2071: {
        n: "BrtAbsPath15"
      },
      2072: {
        n: "BrtBeginPivotTableUISettings"
      },
      2073: {
        n: "BrtEndPivotTableUISettings"
      },
      2075: {
        n: "BrtTableSlicerCacheIDs"
      },
      2076: {
        n: "BrtTableSlicerCacheID"
      },
      2077: {
        n: "BrtBeginTableSlicerCache"
      },
      2078: {
        n: "BrtEndTableSlicerCache"
      },
      2079: {
        n: "BrtSxFilter15"
      },
      2080: {
        n: "BrtBeginTimelineCachePivotCacheIDs"
      },
      2081: {
        n: "BrtEndTimelineCachePivotCacheIDs"
      },
      2082: {
        n: "BrtTimelineCachePivotCacheID"
      },
      2083: {
        n: "BrtBeginTimelineCacheIDs"
      },
      2084: {
        n: "BrtEndTimelineCacheIDs"
      },
      2085: {
        n: "BrtBeginTimelineCacheID"
      },
      2086: {
        n: "BrtEndTimelineCacheID"
      },
      2087: {
        n: "BrtBeginTimelinesEx"
      },
      2088: {
        n: "BrtEndTimelinesEx"
      },
      2089: {
        n: "BrtBeginTimelineEx"
      },
      2090: {
        n: "BrtEndTimelineEx"
      },
      2091: {
        n: "BrtWorkBookPr15"
      },
      2092: {
        n: "BrtPCDH15"
      },
      2093: {
        n: "BrtBeginTimelineStyle"
      },
      2094: {
        n: "BrtEndTimelineStyle"
      },
      2095: {
        n: "BrtTimelineStyleElement"
      },
      2096: {
        n: "BrtBeginTimelineStylesheetExt15"
      },
      2097: {
        n: "BrtEndTimelineStylesheetExt15"
      },
      2098: {
        n: "BrtBeginTimelineStyles"
      },
      2099: {
        n: "BrtEndTimelineStyles"
      },
      2100: {
        n: "BrtBeginTimelineStyleElements"
      },
      2101: {
        n: "BrtEndTimelineStyleElements"
      },
      2102: {
        n: "BrtDxf15"
      },
      2103: {
        n: "BrtBeginDxfs15"
      },
      2104: {
        n: "brtEndDxfs15"
      },
      2105: {
        n: "BrtSlicerCacheHideItemsWithNoData"
      },
      2106: {
        n: "BrtBeginItemUniqueNames"
      },
      2107: {
        n: "BrtEndItemUniqueNames"
      },
      2108: {
        n: "BrtItemUniqueName"
      },
      2109: {
        n: "BrtBeginExtConn15"
      },
      2110: {
        n: "BrtEndExtConn15"
      },
      2111: {
        n: "BrtBeginOledbPr15"
      },
      2112: {
        n: "BrtEndOledbPr15"
      },
      2113: {
        n: "BrtBeginDataFeedPr15"
      },
      2114: {
        n: "BrtEndDataFeedPr15"
      },
      2115: {
        n: "BrtTextPr15"
      },
      2116: {
        n: "BrtRangePr15"
      },
      2117: {
        n: "BrtDbCommand15"
      },
      2118: {
        n: "BrtBeginDbTables15"
      },
      2119: {
        n: "BrtEndDbTables15"
      },
      2120: {
        n: "BrtDbTable15"
      },
      2121: {
        n: "BrtBeginDataModel"
      },
      2122: {
        n: "BrtEndDataModel"
      },
      2123: {
        n: "BrtBeginModelTables"
      },
      2124: {
        n: "BrtEndModelTables"
      },
      2125: {
        n: "BrtModelTable"
      },
      2126: {
        n: "BrtBeginModelRelationships"
      },
      2127: {
        n: "BrtEndModelRelationships"
      },
      2128: {
        n: "BrtModelRelationship"
      },
      2129: {
        n: "BrtBeginECTxtWiz15"
      },
      2130: {
        n: "BrtEndECTxtWiz15"
      },
      2131: {
        n: "BrtBeginECTWFldInfoLst15"
      },
      2132: {
        n: "BrtEndECTWFldInfoLst15"
      },
      2133: {
        n: "BrtBeginECTWFldInfo15"
      },
      2134: {
        n: "BrtFieldListActiveItem"
      },
      2135: {
        n: "BrtPivotCacheIdVersion"
      },
      2136: {
        n: "BrtSXDI15"
      },
      2137: {
        n: "BrtBeginModelTimeGroupings"
      },
      2138: {
        n: "BrtEndModelTimeGroupings"
      },
      2139: {
        n: "BrtBeginModelTimeGrouping"
      },
      2140: {
        n: "BrtEndModelTimeGrouping"
      },
      2141: {
        n: "BrtModelTimeGroupingCalcCol"
      },
      3072: {
        n: "BrtUid"
      },
      3073: {
        n: "BrtRevisionPtr"
      },
      5095: {
        n: "BrtBeginCalcFeatures"
      },
      5096: {
        n: "BrtEndCalcFeatures"
      },
      5097: {
        n: "BrtCalcFeature"
      },
      65535: {
        n: ""
      }
    };
    var su = V(au, "n");
    su.BrtFRTArchID$ = 16;
    var cu = {
      3: {
        n: "BIFF2NUM",
        f: function (e) {
          var t = ri(e);
          ++e.l;
          var n = In(e);
          t.t = "n";
          t.val = n;
          return t;
        }
      },
      4: {
        n: "BIFF2STR",
        f: function (e, t, n) {
          var r = ri(e);
          ++e.l;
          var i = qr(e, 0, n);
          r.t = "str";
          r.val = i;
          return r;
        }
      },
      6: {
        n: "Formula",
        f: es
      },
      9: {
        n: "BOF",
        f: pi
      },
      10: {
        n: "EOF",
        f: Lr
      },
      12: {
        n: "CalcCount",
        f: Vr
      },
      13: {
        n: "CalcMode",
        f: Vr
      },
      14: {
        n: "CalcPrecision",
        f: Ur
      },
      15: {
        n: "CalcRefMode",
        f: Ur
      },
      16: {
        n: "CalcDelta",
        f: In
      },
      17: {
        n: "CalcIter",
        f: Ur
      },
      18: {
        n: "Protect",
        f: Ur
      },
      19: {
        n: "Password",
        f: Vr
      },
      20: {
        n: "Header",
        f: xi
      },
      21: {
        n: "Footer",
        f: xi
      },
      23: {
        n: "ExternSheet",
        f: Si
      },
      24: {
        n: "Lbl",
        f: ki
      },
      25: {
        n: "WinProtect",
        f: Ur
      },
      26: {
        n: "VerticalPageBreaks"
      },
      27: {
        n: "HorizontalPageBreaks"
      },
      28: {
        n: "Note",
        f: function (e, t, n) {
          return function (e, t, n) {
            if (!(n.biff < 8)) {
              var r = e.read_shift(2);
              var i = e.read_shift(2);
              var o = e.read_shift(2);
              var a = e.read_shift(2);
              var s = qr(e, 0, n);
              if (n.biff < 8) {
                e.read_shift(1);
              }
              return [{
                r: r,
                c: i
              }, s, a, o];
            }
          }(e, 0, n);
        }
      },
      29: {
        n: "Selection"
      },
      34: {
        n: "Date1904",
        f: Ur
      },
      35: {
        n: "ExternName",
        f: Ci
      },
      36: {
        n: "COLWIDTH"
      },
      38: {
        n: "LeftMargin",
        f: In
      },
      39: {
        n: "RightMargin",
        f: In
      },
      40: {
        n: "TopMargin",
        f: In
      },
      41: {
        n: "BottomMargin",
        f: In
      },
      42: {
        n: "PrintRowCol",
        f: Ur
      },
      43: {
        n: "PrintGrid",
        f: Ur
      },
      47: {
        n: "FilePass",
        f: function (e, t, n) {
          var r = {
            Type: n.biff >= 8 ? e.read_shift(2) : 0
          };
          if (r.Type) {
            _o(e, t - 2, r);
          } else {
            (function (e, t, n, r) {
              var i = {
                key: Vr(e),
                verificationBytes: Vr(e)
              };
              if (n.password) {
                i.verifier = fo(n.password);
              }
              r.valid = i.verificationBytes === i.verifier;
              if (r.valid) {
                r.insitu = po(n.password);
              }
            })(e, n.biff, n, r);
          }
          return r;
        }
      },
      49: {
        n: "Font",
        f: function (e, t, n) {
          var r = {
            dyHeight: e.read_shift(2),
            fl: e.read_shift(2)
          };
          switch (n && n.biff || 8) {
            case 2:
              break;
            case 3:
            case 4:
              e.l += 2;
              break;
            default:
              e.l += 10;
          }
          r.name = Qr(e, 0, n);
          return r;
        }
      },
      51: {
        n: "PrintSize",
        f: Vr
      },
      60: {
        n: "Continue"
      },
      61: {
        n: "Window1",
        f: function (e) {
          return {
            Pos: [e.read_shift(2), e.read_shift(2)],
            Dim: [e.read_shift(2), e.read_shift(2)],
            Flags: e.read_shift(2),
            CurTab: e.read_shift(2),
            FirstTab: e.read_shift(2),
            Selected: e.read_shift(2),
            TabRatio: e.read_shift(2)
          };
        }
      },
      64: {
        n: "Backup",
        f: Ur
      },
      65: {
        n: "Pane",
        f: function () {}
      },
      66: {
        n: "CodePage",
        f: Vr
      },
      77: {
        n: "Pls"
      },
      80: {
        n: "DCon"
      },
      81: {
        n: "DConRef"
      },
      82: {
        n: "DConName"
      },
      85: {
        n: "DefColWidth",
        f: Vr
      },
      89: {
        n: "XCT"
      },
      90: {
        n: "CRN"
      },
      91: {
        n: "FileSharing"
      },
      92: {
        n: "WriteAccess",
        f: function (e, t, n) {
          if (n.enc) {
            e.l += t;
            return "";
          }
          var r = e.l;
          var i = qr(e, 0, n);
          e.read_shift(t + r - e.l);
          return i;
        }
      },
      93: {
        n: "Obj",
        f: function (e, t, n) {
          if (n && n.biff < 8) {
            return function (e, t, n) {
              e.l += 4;
              var r = e.read_shift(2);
              var i = e.read_shift(2);
              var o = e.read_shift(2);
              e.l += 2;
              e.l += 2;
              e.l += 2;
              e.l += 2;
              e.l += 2;
              e.l += 2;
              e.l += 2;
              e.l += 2;
              e.l += 2;
              e.l += 6;
              t -= 36;
              var a = [];
              a.push((Bi[r] || Lt)(e, t, n));
              return {
                cmo: [i, r, o],
                ft: a
              };
            }(e, t, n);
          }
          var r = fi(e);
          return {
            cmo: r,
            ft: function (e, t) {
              for (var n = e.l + t, r = []; e.l < n;) {
                var i = e.read_shift(2);
                e.l -= 2;
                try {
                  r.push(hi[i](e, n - e.l));
                } catch (_l) {
                  e.l = n;
                  return r;
                }
              }
              if (e.l != n) {
                e.l = n;
              }
              return r;
            }(e, t - 22, r[1])
          };
        }
      },
      94: {
        n: "Uncalced"
      },
      95: {
        n: "CalcSaveRecalc",
        f: Ur
      },
      96: {
        n: "Template"
      },
      97: {
        n: "Intl"
      },
      99: {
        n: "ObjProtect",
        f: Ur
      },
      125: {
        n: "ColInfo",
        f: Fi
      },
      128: {
        n: "Guts",
        f: function (e) {
          e.l += 4;
          var t = [e.read_shift(2), e.read_shift(2)];
          if (0 !== t[0]) {
            t[0]--;
          }
          if (0 !== t[1]) {
            t[1]--;
          }
          if (t[0] > 7 || t[1] > 7) {
            throw new Error("Bad Gutters: " + t.join("|"));
          }
          return t;
        }
      },
      129: {
        n: "WsBool",
        f: function (e, t, n) {
          return {
            fDialog: 16 & (n && 8 == n.biff || 2 == t ? e.read_shift(2) : (e.l += t, 0))
          };
        }
      },
      130: {
        n: "GridSet",
        f: Vr
      },
      131: {
        n: "HCenter",
        f: Ur
      },
      132: {
        n: "VCenter",
        f: Ur
      },
      133: {
        n: "BoundSheet8",
        f: function (e, t, n) {
          var r = e.read_shift(4);
          var i = 3 & e.read_shift(1);
          var o = e.read_shift(1);
          switch (o) {
            case 0:
              o = "Worksheet";
              break;
            case 1:
              o = "Macrosheet";
              break;
            case 2:
              o = "Chartsheet";
              break;
            case 6:
              o = "VBAModule";
          }
          var a = Qr(e, 0, n);
          if (0 === a.length) {
            a = "Sheet1";
          }
          return {
            pos: r,
            hs: i,
            dt: o,
            name: a
          };
        }
      },
      134: {
        n: "WriteProtect"
      },
      140: {
        n: "Country",
        f: function (e) {
          var t;
          var n = [0, 0];
          t = e.read_shift(2);
          n[0] = Vn[t] || t;
          t = e.read_shift(2);
          n[1] = Vn[t] || t;
          return n;
        }
      },
      141: {
        n: "HideObj",
        f: Vr
      },
      144: {
        n: "Sort"
      },
      146: {
        n: "Palette",
        f: function (e) {
          for (var t = e.read_shift(2), n = []; t-- > 0;) {
            n.push(ni(e));
          }
          return n;
        }
      },
      151: {
        n: "Sync"
      },
      152: {
        n: "LPr"
      },
      153: {
        n: "DxGCol"
      },
      154: {
        n: "FnGroupName"
      },
      155: {
        n: "FilterMode"
      },
      156: {
        n: "BuiltInFnGroupCount",
        f: Vr
      },
      157: {
        n: "AutoFilterInfo"
      },
      158: {
        n: "AutoFilter"
      },
      160: {
        n: "Scl",
        f: Pi
      },
      161: {
        n: "Setup",
        f: function (e, t) {
          var n = {};
          if (!(t < 32)) {
            e.l += 16;
            n.header = In(e);
            n.footer = In(e);
            e.l += 2;
          }
          return n;
        }
      },
      174: {
        n: "ScenMan"
      },
      175: {
        n: "SCENARIO"
      },
      176: {
        n: "SxView"
      },
      177: {
        n: "Sxvd"
      },
      178: {
        n: "SXVI"
      },
      180: {
        n: "SxIvd"
      },
      181: {
        n: "SXLI"
      },
      182: {
        n: "SXPI"
      },
      184: {
        n: "DocRoute"
      },
      185: {
        n: "RecipName"
      },
      189: {
        n: "MulRk",
        f: function (e, t) {
          for (var n = e.l + t - 2, r = e.read_shift(2), i = e.read_shift(2), o = []; e.l < n;) {
            o.push(ai(e));
          }
          if (e.l !== n) {
            throw new Error("MulRK read error");
          }
          var a = e.read_shift(2);
          if (o.length != a - i + 1) {
            throw new Error("MulRK length mismatch");
          }
          return {
            r: r,
            c: i,
            C: a,
            rkrec: o
          };
        }
      },
      190: {
        n: "MulBlank",
        f: function (e, t) {
          for (var n = e.l + t - 2, r = e.read_shift(2), i = e.read_shift(2), o = []; e.l < n;) {
            o.push(e.read_shift(2));
          }
          if (e.l !== n) {
            throw new Error("MulBlank read error");
          }
          var a = e.read_shift(2);
          if (o.length != a - i + 1) {
            throw new Error("MulBlank length mismatch");
          }
          return {
            r: r,
            c: i,
            C: a,
            ixfe: o
          };
        }
      },
      193: {
        n: "Mms",
        f: Lr
      },
      197: {
        n: "SXDI"
      },
      198: {
        n: "SXDB"
      },
      199: {
        n: "SXFDB"
      },
      200: {
        n: "SXDBB"
      },
      201: {
        n: "SXNum"
      },
      202: {
        n: "SxBool",
        f: Ur
      },
      203: {
        n: "SxErr"
      },
      204: {
        n: "SXInt"
      },
      205: {
        n: "SXString"
      },
      206: {
        n: "SXDtr"
      },
      207: {
        n: "SxNil"
      },
      208: {
        n: "SXTbl"
      },
      209: {
        n: "SXTBRGIITM"
      },
      210: {
        n: "SxTbpg"
      },
      211: {
        n: "ObProj"
      },
      213: {
        n: "SXStreamID"
      },
      215: {
        n: "DBCell"
      },
      216: {
        n: "SXRng"
      },
      217: {
        n: "SxIsxoper"
      },
      218: {
        n: "BookBool",
        f: Vr
      },
      220: {
        n: "DbOrParamQry"
      },
      221: {
        n: "ScenarioProtect",
        f: Ur
      },
      222: {
        n: "OleObjectSize"
      },
      224: {
        n: "XF",
        f: function (e, t, n) {
          var r = {};
          r.ifnt = e.read_shift(2);
          r.numFmtId = e.read_shift(2);
          r.flags = e.read_shift(2);
          r.fStyle = r.flags >> 2 & 1;
          6;
          r.data = function (e, t, n, r) {
            var i = {};
            var o = e.read_shift(4);
            var a = e.read_shift(4);
            var s = e.read_shift(4);
            var c = e.read_shift(2);
            i.patternType = Gn[s >> 26];
            return r.cellStyles ? (i.alc = 7 & o, i.fWrap = o >> 3 & 1, i.alcV = o >> 4 & 7, i.fJustLast = o >> 7 & 1, i.trot = o >> 8 & 255, i.cIndent = o >> 16 & 15, i.fShrinkToFit = o >> 20 & 1, i.iReadOrder = o >> 22 & 2, i.fAtrNum = o >> 26 & 1, i.fAtrFnt = o >> 27 & 1, i.fAtrAlc = o >> 28 & 1, i.fAtrBdr = o >> 29 & 1, i.fAtrPat = o >> 30 & 1, i.fAtrProt = o >> 31 & 1, i.dgLeft = 15 & a, i.dgRight = a >> 4 & 15, i.dgTop = a >> 8 & 15, i.dgBottom = a >> 12 & 15, i.icvLeft = a >> 16 & 127, i.icvRight = a >> 23 & 127, i.grbitDiag = a >> 30 & 3, i.icvTop = 127 & s, i.icvBottom = s >> 7 & 127, i.icvDiag = s >> 14 & 127, i.dgDiag = s >> 21 & 15, i.icvFore = 127 & c, i.icvBack = c >> 7 & 127, i.fsxButton = c >> 14 & 1, i) : i;
          }(e, 0, r.fStyle, n);
          return r;
        }
      },
      225: {
        n: "InterfaceHdr",
        f: function (e, t) {
          if (!(0 === t)) {
            e.read_shift(2);
          }
          return 1200;
        }
      },
      226: {
        n: "InterfaceEnd",
        f: Lr
      },
      227: {
        n: "SXVS"
      },
      229: {
        n: "MergeCells",
        f: function (e, t) {
          for (var n = [], r = e.read_shift(2); r--;) {
            n.push(si(e));
          }
          return n;
        }
      },
      233: {
        n: "BkHim"
      },
      235: {
        n: "MsoDrawingGroup"
      },
      236: {
        n: "MsoDrawing"
      },
      237: {
        n: "MsoDrawingSelection"
      },
      239: {
        n: "PhoneticInfo"
      },
      240: {
        n: "SxRule"
      },
      241: {
        n: "SXEx"
      },
      242: {
        n: "SxFilt"
      },
      244: {
        n: "SxDXF"
      },
      245: {
        n: "SxItm"
      },
      246: {
        n: "SxName"
      },
      247: {
        n: "SxSelect"
      },
      248: {
        n: "SXPair"
      },
      249: {
        n: "SxFmla"
      },
      251: {
        n: "SxFormat"
      },
      252: {
        n: "SST",
        f: function (e, t) {
          for (var n = e.l + t, r = e.read_shift(4), i = e.read_shift(4), o = [], a = 0; a != i && e.l < n; ++a) {
            o.push(Wr(e));
          }
          o.Count = r;
          o.Unique = i;
          return o;
        }
      },
      253: {
        n: "LabelSst",
        f: function (e) {
          var t = ri(e);
          t.isst = e.read_shift(4);
          return t;
        }
      },
      255: {
        n: "ExtSST",
        f: function (e, t) {
          var n = {};
          n.dsst = e.read_shift(2);
          e.l += t - 2;
          return n;
        }
      },
      256: {
        n: "SXVDEx"
      },
      259: {
        n: "SXFormula"
      },
      290: {
        n: "SXDBEx"
      },
      311: {
        n: "RRDInsDel"
      },
      312: {
        n: "RRDHead"
      },
      315: {
        n: "RRDChgCell"
      },
      317: {
        n: "RRTabId",
        f: zr
      },
      318: {
        n: "RRDRenSheet"
      },
      319: {
        n: "RRSort"
      },
      320: {
        n: "RRDMove"
      },
      330: {
        n: "RRFormat"
      },
      331: {
        n: "RRAutoFmt"
      },
      333: {
        n: "RRInsertSh"
      },
      334: {
        n: "RRDMoveBegin"
      },
      335: {
        n: "RRDMoveEnd"
      },
      336: {
        n: "RRDInsDelBegin"
      },
      337: {
        n: "RRDInsDelEnd"
      },
      338: {
        n: "RRDConflict"
      },
      339: {
        n: "RRDDefName"
      },
      340: {
        n: "RRDRstEtxp"
      },
      351: {
        n: "LRng"
      },
      352: {
        n: "UsesELFs",
        f: Ur
      },
      353: {
        n: "DSF",
        f: Lr
      },
      401: {
        n: "CUsr"
      },
      402: {
        n: "CbUsr"
      },
      403: {
        n: "UsrInfo"
      },
      404: {
        n: "UsrExcl"
      },
      405: {
        n: "FileLock"
      },
      406: {
        n: "RRDInfo"
      },
      407: {
        n: "BCUsrs"
      },
      408: {
        n: "UsrChk"
      },
      425: {
        n: "UserBView"
      },
      426: {
        n: "UserSViewBegin"
      },
      427: {
        n: "UserSViewEnd"
      },
      428: {
        n: "RRDUserView"
      },
      429: {
        n: "Qsi"
      },
      430: {
        n: "SupBook",
        f: function (e, t, n) {
          var r = e.l + t;
          var i = e.read_shift(2);
          var o = e.read_shift(2);
          n.sbcch = o;
          if (1025 == o || 14849 == o) {
            return [o, i];
          }
          if (o < 1 || o > 255) {
            throw new Error("Unexpected SupBook type: " + o);
          }
          for (var a = Xr(e, o), s = []; r > e.l;) {
            s.push(Yr(e));
          }
          return [o, i, a, s];
        }
      },
      431: {
        n: "Prot4Rev",
        f: Ur
      },
      432: {
        n: "CondFmt"
      },
      433: {
        n: "CF"
      },
      434: {
        n: "DVal"
      },
      437: {
        n: "DConBin"
      },
      438: {
        n: "TxO",
        f: function (e, t, n) {
          var r = e.l;
          var i = "";
          try {
            e.l += 4;
            var o = (n.lastobj || {
              cmo: [0, 0]
            }).cmo[1];
            if (-1 == [0, 5, 7, 11, 12, 14].indexOf(o)) {
              e.l += 6;
            } else {
              (function (e) {
                var t = e.read_shift(1);
                e.l++;
                var n = e.read_shift(2);
                e.l += 2;
                return [t, n];
              })(e);
            }
            var a = e.read_shift(2);
            e.read_shift(2);
            Vr(e);
            var s = e.read_shift(2);
            e.l += s;
            for (var c = 1; c < e.lens.length - 1; ++c) {
              if (e.l - r != e.lens[c]) {
                throw new Error("TxO: bad continue record");
              }
              var u = e[e.l];
              if ((i += Xr(e, e.lens[c + 1] - e.lens[c] - 1)).length >= (u ? a : 2 * a)) {
                break;
              }
            }
            if (i.length !== a && i.length !== 2 * a) {
              throw new Error("cchText: " + a + " != " + i.length);
            }
            e.l = r + t;
            return {
              t: i
            };
          } catch (_l) {
            e.l = r + t;
            return {
              t: i
            };
          }
        }
      },
      439: {
        n: "RefreshAll",
        f: Ur
      },
      440: {
        n: "HLink",
        f: function (e, t) {
          var n = si(e);
          e.l += 16;
          return [n, function (e, t) {
            var n = e.l + t;
            var r = e.read_shift(4);
            if (2 !== r) {
              throw new Error("Unrecognized streamVersion: " + r);
            }
            var i = e.read_shift(2);
            e.l += 2;
            var o;
            var a;
            var s;
            var c;
            var u;
            var l;
            var f = "";
            if (16 & i) {
              o = Zr(e, e.l);
            }
            if (128 & i) {
              a = Zr(e, e.l);
            }
            if (257 === (257 & i)) {
              s = Zr(e, e.l);
            }
            if (1 === (257 & i)) {
              c = Jr(e, e.l);
            }
            if (8 & i) {
              f = Zr(e, e.l);
            }
            if (32 & i) {
              u = e.read_shift(16);
            }
            if (64 & i) {
              l = br(e);
            }
            e.l = n;
            var d = a || s || c || "";
            if (d && f) {
              d += "#" + f;
            }
            if (!d) {
              d = "#" + f;
            }
            var h = {
              Target: d
            };
            if (u) {
              h.guid = u;
            }
            if (l) {
              h.time = l;
            }
            if (o) {
              h.Tooltip = o;
            }
            return h;
          }(e, t - 24)];
        }
      },
      441: {
        n: "Lel"
      },
      442: {
        n: "CodeName",
        f: Yr
      },
      443: {
        n: "SXFDBType"
      },
      444: {
        n: "Prot4RevPass",
        f: Vr
      },
      445: {
        n: "ObNoMacros"
      },
      446: {
        n: "Dv"
      },
      448: {
        n: "Excel9File",
        f: Lr
      },
      449: {
        n: "RecalcId",
        f: function (e) {
          e.read_shift(2);
          return e.read_shift(4);
        },
        r: 2
      },
      450: {
        n: "EntExU2",
        f: Lr
      },
      512: {
        n: "Dimensions",
        f: yi
      },
      513: {
        n: "Blank",
        f: Ri
      },
      515: {
        n: "Number",
        f: function (e) {
          var t = ri(e);
          var n = In(e);
          t.val = n;
          return t;
        }
      },
      516: {
        n: "Label",
        f: function (e, t, n) {
          e.l;
          var r = ri(e);
          if (2 == n.biff) {
            e.l++;
          }
          var i = Yr(e, e.l, n);
          r.val = i;
          return r;
        }
      },
      517: {
        n: "BoolErr",
        f: wi
      },
      518: {
        n: "Formula",
        f: es
      },
      519: {
        n: "String",
        f: Ni
      },
      520: {
        n: "Row",
        f: function (e) {
          var t = {};
          t.r = e.read_shift(2);
          t.c = e.read_shift(2);
          t.cnt = e.read_shift(2) - t.c;
          var n = e.read_shift(2);
          e.l += 4;
          var r = e.read_shift(1);
          e.l += 3;
          if (7 & r) {
            t.level = 7 & r;
          }
          if (32 & r) {
            t.hidden = true;
          }
          if (64 & r) {
            t.hpt = n / 20;
          }
          return t;
        }
      },
      523: {
        n: "Index"
      },
      545: {
        n: "Array",
        f: Ti
      },
      549: {
        n: "DefaultRowHeight",
        f: gi
      },
      566: {
        n: "Table"
      },
      574: {
        n: "Window2",
        f: function (e, t, n) {
          return n && n.biff >= 2 && n.biff < 5 ? {} : {
            RTL: 64 & e.read_shift(2)
          };
        }
      },
      638: {
        n: "RK",
        f: function (e) {
          var t = e.read_shift(2);
          var n = e.read_shift(2);
          var r = ai(e);
          return {
            r: t,
            c: n,
            ixfe: r[0],
            rknum: r[1]
          };
        }
      },
      659: {
        n: "Style"
      },
      1030: {
        n: "Formula",
        f: es
      },
      1048: {
        n: "BigName"
      },
      1054: {
        n: "Format",
        f: function (e, t, n) {
          return [e.read_shift(2), qr(e, 0, n)];
        }
      },
      1084: {
        n: "ContinueBigName"
      },
      1212: {
        n: "ShrFmla",
        f: function (e, t, n) {
          var r = ui(e);
          e.l++;
          var i = e.read_shift(1);
          return [Za(e, t -= 8, n), i, r];
        }
      },
      2048: {
        n: "HLinkTooltip",
        f: function (e, t) {
          e.read_shift(2);
          var n = si(e);
          var r = e.read_shift((t - 10) / 2, "dbcs-cont");
          return [n, r = r.replace(T, "")];
        }
      },
      2049: {
        n: "WebPub"
      },
      2050: {
        n: "QsiSXTag"
      },
      2051: {
        n: "DBQueryExt"
      },
      2052: {
        n: "ExtString"
      },
      2053: {
        n: "TxtQry"
      },
      2054: {
        n: "Qsir"
      },
      2055: {
        n: "Qsif"
      },
      2056: {
        n: "RRDTQSIF"
      },
      2057: {
        n: "BOF",
        f: pi
      },
      2058: {
        n: "OleDbConn"
      },
      2059: {
        n: "WOpt"
      },
      2060: {
        n: "SXViewEx"
      },
      2061: {
        n: "SXTH"
      },
      2062: {
        n: "SXPIEx"
      },
      2063: {
        n: "SXVDTEx"
      },
      2064: {
        n: "SXViewEx9"
      },
      2066: {
        n: "ContinueFrt"
      },
      2067: {
        n: "RealTimeData"
      },
      2128: {
        n: "ChartFrtInfo"
      },
      2129: {
        n: "FrtWrapper"
      },
      2130: {
        n: "StartBlock"
      },
      2131: {
        n: "EndBlock"
      },
      2132: {
        n: "StartObject"
      },
      2133: {
        n: "EndObject"
      },
      2134: {
        n: "CatLab"
      },
      2135: {
        n: "YMult"
      },
      2136: {
        n: "SXViewLink"
      },
      2137: {
        n: "PivotChartBits"
      },
      2138: {
        n: "FrtFontList"
      },
      2146: {
        n: "SheetExt"
      },
      2147: {
        n: "BookExt",
        r: 12
      },
      2148: {
        n: "SXAddl"
      },
      2149: {
        n: "CrErr"
      },
      2150: {
        n: "HFPicture"
      },
      2151: {
        n: "FeatHdr",
        f: Lr
      },
      2152: {
        n: "Feat"
      },
      2154: {
        n: "DataLabExt"
      },
      2155: {
        n: "DataLabExtContents"
      },
      2156: {
        n: "CellWatch"
      },
      2161: {
        n: "FeatHdr11"
      },
      2162: {
        n: "Feature11"
      },
      2164: {
        n: "DropDownObjIds"
      },
      2165: {
        n: "ContinueFrt11"
      },
      2166: {
        n: "DConn"
      },
      2167: {
        n: "List12"
      },
      2168: {
        n: "Feature12"
      },
      2169: {
        n: "CondFmt12"
      },
      2170: {
        n: "CF12"
      },
      2171: {
        n: "CFEx"
      },
      2172: {
        n: "XFCRC",
        f: function (e) {
          e.l += 2;
          var t = {
            cxfs: 0,
            crc: 0
          };
          t.cxfs = e.read_shift(2);
          t.crc = e.read_shift(4);
          return t;
        },
        r: 12
      },
      2173: {
        n: "XFExt",
        f: function (e, t) {
          e.l;
          e.l += 2;
          var n = e.read_shift(2);
          e.l += 2;
          for (var r = e.read_shift(2), i = []; r-- > 0;) {
            i.push(ra(e, e.l));
          }
          return {
            ixfe: n,
            ext: i
          };
        },
        r: 12
      },
      2174: {
        n: "AutoFilter12"
      },
      2175: {
        n: "ContinueFrt12"
      },
      2180: {
        n: "MDTInfo"
      },
      2181: {
        n: "MDXStr"
      },
      2182: {
        n: "MDXTuple"
      },
      2183: {
        n: "MDXSet"
      },
      2184: {
        n: "MDXProp"
      },
      2185: {
        n: "MDXKPI"
      },
      2186: {
        n: "MDB"
      },
      2187: {
        n: "PLV"
      },
      2188: {
        n: "Compat12",
        f: Ur,
        r: 12
      },
      2189: {
        n: "DXF"
      },
      2190: {
        n: "TableStyles",
        r: 12
      },
      2191: {
        n: "TableStyle"
      },
      2192: {
        n: "TableStyleElement"
      },
      2194: {
        n: "StyleExt"
      },
      2195: {
        n: "NamePublish"
      },
      2196: {
        n: "NameCmt",
        f: function (e, t, n) {
          if (!(n.biff < 8)) {
            var r = e.read_shift(2);
            var i = e.read_shift(2);
            return [Xr(e, r, n), Xr(e, i, n)];
          }
          e.l += t;
        },
        r: 12
      },
      2197: {
        n: "SortData"
      },
      2198: {
        n: "Theme",
        f: function (e, t, n) {
          var r = e.l + t;
          if (124226 !== e.read_shift(4)) {
            if (n.cellStyles && se) {
              var i;
              var o = e.slice(e.l);
              e.l = r;
              try {
                i = new se(o);
              } catch (_l) {
                return;
              }
              var a = pe(i, "theme/theme/theme1.xml", true);
              if (a) {
                return ea(a, n);
              }
            } else {
              e.l = r;
            }
          }
        },
        r: 12
      },
      2199: {
        n: "GUIDTypeLib"
      },
      2200: {
        n: "FnGrp12"
      },
      2201: {
        n: "NameFnGrp12"
      },
      2202: {
        n: "MTRSettings",
        f: function (e) {
          return [0 !== e.read_shift(4), 0 !== e.read_shift(4), e.read_shift(4)];
        },
        r: 12
      },
      2203: {
        n: "CompressPictures",
        f: Lr
      },
      2204: {
        n: "HeaderFooter"
      },
      2205: {
        n: "CrtLayout12"
      },
      2206: {
        n: "CrtMlFrt"
      },
      2207: {
        n: "CrtMlFrtContinue"
      },
      2211: {
        n: "ForceFullCalculation",
        f: function (e) {
          var t = function (e) {
            var t = e.read_shift(2);
            var n = e.read_shift(2);
            e.l += 8;
            return {
              type: t,
              flags: n
            };
          }(e);
          if (2211 != t.type) {
            throw new Error("Invalid Future Record " + t.type);
          }
          return 0 !== e.read_shift(4);
        }
      },
      2212: {
        n: "ShapePropsStream"
      },
      2213: {
        n: "TextPropsStream"
      },
      2214: {
        n: "RichTextStream"
      },
      2215: {
        n: "CrtLayout12A"
      },
      4097: {
        n: "Units"
      },
      4098: {
        n: "Chart"
      },
      4099: {
        n: "Series"
      },
      4102: {
        n: "DataFormat"
      },
      4103: {
        n: "LineFormat"
      },
      4105: {
        n: "MarkerFormat"
      },
      4106: {
        n: "AreaFormat"
      },
      4107: {
        n: "PieFormat"
      },
      4108: {
        n: "AttachedLabel"
      },
      4109: {
        n: "SeriesText"
      },
      4116: {
        n: "ChartFormat"
      },
      4117: {
        n: "Legend"
      },
      4118: {
        n: "SeriesList"
      },
      4119: {
        n: "Bar"
      },
      4120: {
        n: "Line"
      },
      4121: {
        n: "Pie"
      },
      4122: {
        n: "Area"
      },
      4123: {
        n: "Scatter"
      },
      4124: {
        n: "CrtLine"
      },
      4125: {
        n: "Axis"
      },
      4126: {
        n: "Tick"
      },
      4127: {
        n: "ValueRange"
      },
      4128: {
        n: "CatSerRange"
      },
      4129: {
        n: "AxisLine"
      },
      4130: {
        n: "CrtLink"
      },
      4132: {
        n: "DefaultText"
      },
      4133: {
        n: "Text"
      },
      4134: {
        n: "FontX",
        f: Vr
      },
      4135: {
        n: "ObjectLink"
      },
      4146: {
        n: "Frame"
      },
      4147: {
        n: "Begin"
      },
      4148: {
        n: "End"
      },
      4149: {
        n: "PlotArea"
      },
      4154: {
        n: "Chart3d"
      },
      4156: {
        n: "PicF"
      },
      4157: {
        n: "DropBar"
      },
      4158: {
        n: "Radar"
      },
      4159: {
        n: "Surf"
      },
      4160: {
        n: "RadarArea"
      },
      4161: {
        n: "AxisParent"
      },
      4163: {
        n: "LegendException"
      },
      4164: {
        n: "ShtProps",
        f: function (e, t, n) {
          var r = {
            area: false
          };
          if (5 != n.biff) {
            e.l += t;
            return r;
          }
          var i = e.read_shift(1);
          e.l += 3;
          if (16 & i) {
            r.area = true;
          }
          return r;
        }
      },
      4165: {
        n: "SerToCrt"
      },
      4166: {
        n: "AxesUsed"
      },
      4168: {
        n: "SBaseRef"
      },
      4170: {
        n: "SerParent"
      },
      4171: {
        n: "SerAuxTrend"
      },
      4174: {
        n: "IFmtRecord"
      },
      4175: {
        n: "Pos"
      },
      4176: {
        n: "AlRuns"
      },
      4177: {
        n: "BRAI"
      },
      4187: {
        n: "SerAuxErrBar"
      },
      4188: {
        n: "ClrtClient",
        f: function (e) {
          for (var t = e.read_shift(2), n = []; t-- > 0;) {
            n.push(ni(e));
          }
          return n;
        }
      },
      4189: {
        n: "SerFmt"
      },
      4191: {
        n: "Chart3DBarShape"
      },
      4192: {
        n: "Fbi"
      },
      4193: {
        n: "BopPop"
      },
      4194: {
        n: "AxcExt"
      },
      4195: {
        n: "Dat"
      },
      4196: {
        n: "PlotGrowth"
      },
      4197: {
        n: "SIIndex"
      },
      4198: {
        n: "GelFrame"
      },
      4199: {
        n: "BopPopCustom"
      },
      4200: {
        n: "Fbi2"
      },
      0: {
        n: "Dimensions",
        f: yi
      },
      2: {
        n: "BIFF2INT",
        f: function (e) {
          var t = ri(e);
          ++e.l;
          var n = e.read_shift(2);
          t.t = "n";
          t.val = n;
          return t;
        }
      },
      5: {
        n: "BoolErr",
        f: wi
      },
      7: {
        n: "String",
        f: function (e) {
          var t = e.read_shift(1);
          return 0 === t ? (e.l++, "") : e.read_shift(t, "sbcs-cont");
        }
      },
      8: {
        n: "BIFF2ROW"
      },
      11: {
        n: "Index"
      },
      22: {
        n: "ExternCount",
        f: Vr
      },
      30: {
        n: "BIFF2FORMAT",
        f: mi
      },
      31: {
        n: "BIFF2FMTCNT"
      },
      32: {
        n: "BIFF2COLINFO"
      },
      33: {
        n: "Array",
        f: Ti
      },
      37: {
        n: "DefaultRowHeight",
        f: gi
      },
      50: {
        n: "BIFF2FONTXTRA",
        f: function (e, t) {
          e.l += 6;
          e.l += 2;
          e.l += 1;
          e.l += 3;
          e.l += 1;
          e.l += t - 13;
        }
      },
      52: {
        n: "DDEObjName"
      },
      62: {
        n: "BIFF2WINDOW2"
      },
      67: {
        n: "BIFF2XF"
      },
      69: {
        n: "BIFF2FONTCLR"
      },
      86: {
        n: "BIFF4FMTCNT"
      },
      126: {
        n: "RK"
      },
      127: {
        n: "ImData",
        f: function (e) {
          var t = e.read_shift(2);
          var n = e.read_shift(2);
          var r = e.read_shift(4);
          var i = {
            fmt: t,
            env: n,
            len: r,
            data: e.slice(e.l, e.l + r)
          };
          e.l += r;
          return i;
        }
      },
      135: {
        n: "Addin"
      },
      136: {
        n: "Edg"
      },
      137: {
        n: "Pub"
      },
      145: {
        n: "Sub"
      },
      148: {
        n: "LHRecord"
      },
      149: {
        n: "LHNGraph"
      },
      150: {
        n: "Sound"
      },
      169: {
        n: "CoordList"
      },
      171: {
        n: "GCW"
      },
      188: {
        n: "ShrFmla"
      },
      191: {
        n: "ToolbarHdr"
      },
      192: {
        n: "ToolbarEnd"
      },
      194: {
        n: "AddMenu"
      },
      195: {
        n: "DelMenu"
      },
      214: {
        n: "RString",
        f: function (e, t, n) {
          var r = e.l + t;
          var i = ri(e);
          var o = e.read_shift(2);
          var a = Xr(e, o, n);
          e.l = r;
          i.t = "str";
          i.val = a;
          return i;
        }
      },
      223: {
        n: "UDDesc"
      },
      234: {
        n: "TabIdConf"
      },
      354: {
        n: "XL5Modify"
      },
      421: {
        n: "FileSharing2"
      },
      521: {
        n: "BOF",
        f: pi
      },
      536: {
        n: "Lbl",
        f: ki
      },
      547: {
        n: "ExternName",
        f: Ci
      },
      561: {
        n: "Font"
      },
      579: {
        n: "BIFF3XF"
      },
      1033: {
        n: "BOF",
        f: pi
      },
      1091: {
        n: "BIFF4XF"
      },
      2157: {
        n: "FeatInfo"
      },
      2163: {
        n: "FeatInfo11"
      },
      2177: {
        n: "SXAddl12"
      },
      2240: {
        n: "AutoWebPub"
      },
      2241: {
        n: "ListObj"
      },
      2242: {
        n: "ListField"
      },
      2243: {
        n: "ListDV"
      },
      2244: {
        n: "ListCondFmt"
      },
      2245: {
        n: "ListCF"
      },
      2246: {
        n: "FMQry"
      },
      2247: {
        n: "FMSQry"
      },
      2248: {
        n: "PLV"
      },
      2249: {
        n: "LnExt"
      },
      2250: {
        n: "MkrExt"
      },
      2251: {
        n: "CrtCoopt"
      },
      2262: {
        n: "FRTArchId$",
        r: 12
      },
      29282: {}
    };
    var uu = V(cu, "n");
    function lu(e, t, n, r) {
      var i = +t || +uu[t];
      if (!isNaN(i)) {
        var o = r || (n || []).length || 0;
        var a = e.next(4);
        a.write_shift(2, i);
        a.write_shift(2, o);
        if (o > 0 && kt(n)) {
          e.push(n);
        }
      }
    }
    function fu(e, t, n) {
      if (!e) {
        e = Ut(7);
      }
      e.write_shift(2, t);
      e.write_shift(2, n);
      e.write_shift(2, 0);
      e.write_shift(1, 0);
      return e;
    }
    function du(e, t, n, r) {
      if (null != t.v) {
        switch (t.t) {
          case "d":
          case "n":
            var i = "d" == t.t ? W(te(t.v)) : t.v;
            return void (i == (0 | i) && i >= 0 && i < 65536 ? lu(e, 2, function (e, t, n) {
              var r = Ut(9);
              fu(r, e, t);
              r.write_shift(2, n);
              return r;
            }(n, r, i)) : lu(e, 3, function (e, t, n) {
              var r = Ut(15);
              fu(r, e, t);
              r.write_shift(8, n, "f");
              return r;
            }(n, r, i)));
          case "b":
          case "e":
            return void lu(e, 5, function (e, t, n, r) {
              var i = Ut(9);
              fu(i, e, t);
              if ("e" == r) {
                i.write_shift(1, n);
                i.write_shift(1, 1);
              } else {
                i.write_shift(1, n ? 1 : 0);
                i.write_shift(1, 0);
              }
              return i;
            }(n, r, t.v, t.t));
          case "s":
          case "str":
            return void lu(e, 4, function (e, t, n) {
              var r = Ut(8 + 2 * n.length);
              fu(r, e, t);
              r.write_shift(1, n.length);
              r.write_shift(n.length, n, "sbcs");
              return r.l < r.length ? r.slice(0, r.l) : r;
            }(n, r, t.v));
        }
      }
      lu(e, 1, fu(null, n, r));
    }
    function hu(e, t) {
      var n = t || {};
      for (var r = Vt(), i = 0, o = 0; o < e.SheetNames.length; ++o) {
        if (e.SheetNames[o] == n.sheet) {
          i = o;
        }
      }
      if (0 == i && n.sheet && e.SheetNames[0] != n.sheet) {
        throw new Error("Sheet not found: " + n.sheet);
      }
      lu(r, 9, _i(0, 16, n));
      (function (e, t, n, r) {
        var i;
        var o = Array.isArray(t);
        var a = nn(t["!ref"] || "A1");
        var s = "";
        var c = [];
        if (a.e.c > 255 || a.e.r > 16383) {
          if (r.WTF) {
            throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
          }
          a.e.c = Math.min(a.e.c, 255);
          a.e.r = Math.min(a.e.c, 16383);
          i = tn(a);
        }
        for (var u = a.s.r; u <= a.e.r; ++u) {
          s = Yt(u);
          for (var l = a.s.c; l <= a.e.c; ++l) {
            if (u === a.s.r) {
              c[l] = $t(l);
            }
            i = c[l] + s;
            var f = o ? (t[u] || [])[l] : t[i];
            if (f) {
              du(e, f, u, l);
            }
          }
        }
      })(r, e.Sheets[e.SheetNames[i]], 0, n);
      lu(r, 10);
      return r.end();
    }
    function pu(e, t, n) {
      lu(e, "Font", function (e, t) {
        var n = e.name || "Arial";
        var r = t && 5 == t.biff;
        var i = Ut(r ? 15 + n.length : 16 + 2 * n.length);
        i.write_shift(2, 20 * (e.sz || 12));
        i.write_shift(4, 0);
        i.write_shift(2, 400);
        i.write_shift(4, 0);
        i.write_shift(2, 0);
        i.write_shift(1, n.length);
        if (!r) {
          i.write_shift(1, 1);
        }
        i.write_shift((r ? 1 : 2) * n.length, n, r ? "sbcs" : "utf16le");
        return i;
      }({
        sz: 12,
        color: {
          theme: 1
        },
        name: "Arial",
        family: 2,
        scheme: "minor"
      }, n));
    }
    function _u(e, t, n, r, i) {
      var o = 16 + ms(i.cellXfs, t, i);
      if (null != t.v || t.bf) {
        if (t.bf) {
          lu(e, "Formula", ts(t, n, r, 0, o));
        } else {
          switch (t.t) {
            case "d":
            case "n":
              lu(e, "Number", function (e, t, n, r) {
                var i = Ut(14);
                ii(e, t, r, i);
                Fn(n, i);
                return i;
              }(n, r, "d" == t.t ? W(te(t.v)) : t.v, o));
              break;
            case "b":
            case "e":
              lu(e, 517, Ei(n, r, t.v, o, 0, t.t));
              break;
            case "s":
            case "str":
              if (i.bookSST) {
                lu(e, "LabelSst", function (e, t, n, r) {
                  var i = Ut(10);
                  ii(e, t, r, i);
                  i.write_shift(4, n);
                  return i;
                }(n, r, As(i.Strings, t.v, i.revStrings), o));
              } else {
                lu(e, "Label", function (e, t, n, r, i) {
                  var o = !i || 8 == i.biff;
                  var a = Ut(+o + 8 + (1 + o) * n.length);
                  ii(e, t, r, a);
                  a.write_shift(2, n.length);
                  if (o) {
                    a.write_shift(1, 1);
                  }
                  a.write_shift((1 + o) * n.length, n, o ? "utf16le" : "sbcs");
                  return a;
                }(n, r, t.v, o, i));
              }
              break;
            default:
              lu(e, "Blank", ii(n, r, o));
          }
        }
      } else {
        lu(e, "Blank", ii(n, r, o));
      }
    }
    function Au(e, t, n) {
      var r;
      var i = Vt();
      var o = n.SheetNames[e];
      var a = n.Sheets[o] || {};
      var s = (n || {}).Workbook || {};
      var c = (s.Sheets || [])[e] || {};
      var u = Array.isArray(a);
      var l = 8 == t.biff;
      var f = "";
      var d = [];
      var h = nn(a["!ref"] || "A1");
      var p = l ? 65536 : 16384;
      if (h.e.c > 255 || h.e.r >= p) {
        if (t.WTF) {
          throw new Error("Range " + (a["!ref"] || "A1") + " exceeds format limit A1:IV16384");
        }
        h.e.c = Math.min(h.e.c, 255);
        h.e.r = Math.min(h.e.c, p - 1);
      }
      lu(i, 2057, _i(0, 16, t));
      lu(i, "CalcMode", Gr(1));
      lu(i, "CalcCount", Gr(100));
      lu(i, "CalcRefMode", Hr(true));
      lu(i, "CalcIter", Hr(false));
      lu(i, "CalcDelta", Fn(.001));
      lu(i, "CalcSaveRecalc", Hr(true));
      lu(i, "PrintRowCol", Hr(false));
      lu(i, "PrintGrid", Hr(false));
      lu(i, "GridSet", Gr(1));
      lu(i, "Guts", function (e) {
        var t = Ut(8);
        t.write_shift(4, 0);
        t.write_shift(2, e[0] ? e[0] + 1 : 0);
        t.write_shift(2, e[1] ? e[1] + 1 : 0);
        return t;
      }([0, 0]));
      lu(i, "HCenter", Hr(false));
      lu(i, "VCenter", Hr(false));
      lu(i, 512, function (e, t) {
        var n = 8 != t.biff && t.biff ? 2 : 4;
        var r = Ut(2 * n + 6);
        r.write_shift(n, e.s.r);
        r.write_shift(n, e.e.r + 1);
        r.write_shift(2, e.s.c);
        r.write_shift(2, e.e.c + 1);
        r.write_shift(2, 0);
        return r;
      }(h, t));
      if (l) {
        a["!links"] = [];
      }
      for (var _ = h.s.r; _ <= h.e.r; ++_) {
        f = Yt(_);
        for (var A = h.s.c; A <= h.e.c; ++A) {
          if (_ === h.s.r) {
            d[A] = $t(A);
          }
          r = d[A] + f;
          var g = u ? (a[_] || [])[A] : a[r];
          if (g) {
            _u(i, g, _, A, t);
            if (l && g.l) {
              a["!links"].push([r, g.l]);
            }
          }
        }
      }
      var v = c.CodeName || c.name || o;
      if (l) {
        lu(i, "Window2", function (e) {
          var t = Ut(18);
          var n = 1718;
          if (e && e.RTL) {
            n |= 64;
          }
          t.write_shift(2, n);
          t.write_shift(4, 0);
          t.write_shift(4, 64);
          t.write_shift(4, 0);
          t.write_shift(4, 0);
          return t;
        }((s.Views || [])[0]));
      }
      if (l && (a["!merges"] || []).length) {
        lu(i, "MergeCells", function (e) {
          var t = Ut(2 + 8 * e.length);
          t.write_shift(2, e.length);
          for (var n = 0; n < e.length; ++n) {
            ci(e[n], t);
          }
          return t;
        }(a["!merges"]));
      }
      if (l) {
        (function (e, t) {
          for (var n = 0; n < t["!links"].length; ++n) {
            var r = t["!links"][n];
            lu(e, "HLink", Di(r));
            if (r[1].Tooltip) {
              lu(e, "HLinkTooltip", Ii(r));
            }
          }
          delete t["!links"];
        })(i, a);
      }
      lu(i, "CodeName", $r(v));
      if (l) {
        (function (e, t) {
          var n = Ut(19);
          n.write_shift(4, 2151);
          n.write_shift(4, 0);
          n.write_shift(4, 0);
          n.write_shift(2, 3);
          n.write_shift(1, 1);
          n.write_shift(4, 0);
          lu(e, "FeatHdr", n);
          (n = Ut(39)).write_shift(4, 2152);
          n.write_shift(4, 0);
          n.write_shift(4, 0);
          n.write_shift(2, 3);
          n.write_shift(1, 0);
          n.write_shift(4, 0);
          n.write_shift(2, 1);
          n.write_shift(4, 4);
          n.write_shift(2, 0);
          ci(nn(t["!ref"] || "A1"), n);
          n.write_shift(4, 4);
          lu(e, "Feat", n);
        })(i, a);
      }
      lu(i, "EOF");
      return i.end();
    }
    function gu(e, t, n) {
      var r = Vt();
      var i = (e || {}).Workbook || {};
      var o = i.Sheets || [];
      var a = i.WBProps || {};
      var s = 8 == n.biff;
      var c = 5 == n.biff;
      lu(r, 2057, _i(0, 5, n));
      if ("xla" == n.bookType) {
        lu(r, "Addin");
      }
      lu(r, "InterfaceHdr", s ? Gr(1200) : null);
      lu(r, "Mms", function (e, t) {
        if (!t) {
          t = Ut(e);
        }
        for (var n = 0; n < e; ++n) {
          t.write_shift(1, 0);
        }
        return t;
      }(2));
      if (c) {
        lu(r, "ToolbarHdr");
      }
      if (c) {
        lu(r, "ToolbarEnd");
      }
      lu(r, "InterfaceEnd");
      lu(r, "WriteAccess", function (e, t) {
        var n = !t || 8 == t.biff;
        var r = Ut(n ? 112 : 54);
        for (r.write_shift(8 == t.biff ? 2 : 1, 7), n && r.write_shift(1, 0), r.write_shift(4, 859007059), r.write_shift(4, 5458548 | (n ? 0 : 536870912)); r.l < r.length;) {
          r.write_shift(1, n ? 0 : 32);
        }
        return r;
      }(0, n));
      lu(r, "CodePage", Gr(s ? 1200 : 1252));
      if (s) {
        lu(r, "DSF", Gr(0));
      }
      if (s) {
        lu(r, "Excel9File");
      }
      lu(r, "RRTabId", function (e) {
        for (var t = Ut(2 * e), n = 0; n < e; ++n) {
          t.write_shift(2, n + 1);
        }
        return t;
      }(e.SheetNames.length));
      if (s && e.vbaraw) {
        lu(r, "ObProj");
      }
      if (s && e.vbaraw) {
        lu(r, "CodeName", $r(a.CodeName || "ThisWorkbook"));
      }
      lu(r, "BuiltInFnGroupCount", Gr(17));
      lu(r, "WinProtect", Hr(false));
      lu(r, "Protect", Hr(false));
      lu(r, "Password", Gr(0));
      if (s) {
        lu(r, "Prot4Rev", Hr(false));
      }
      if (s) {
        lu(r, "Prot4RevPass", Gr(0));
      }
      lu(r, "Window1", function () {
        var e = Ut(18);
        e.write_shift(2, 0);
        e.write_shift(2, 0);
        e.write_shift(2, 29280);
        e.write_shift(2, 17600);
        e.write_shift(2, 56);
        e.write_shift(2, 0);
        e.write_shift(2, 0);
        e.write_shift(2, 1);
        e.write_shift(2, 500);
        return e;
      }());
      lu(r, "Backup", Hr(false));
      lu(r, "HideObj", Gr(0));
      lu(r, "Date1904", Hr("true" == function (e) {
        return e.Workbook && e.Workbook.WBProps && Ne(e.Workbook.WBProps.date1904) ? "true" : "false";
      }(e)));
      lu(r, "CalcPrecision", Hr(true));
      if (s) {
        lu(r, "RefreshAll", Hr(false));
      }
      lu(r, "BookBool", Gr(0));
      pu(r, 0, n);
      (function (e, t, n) {
        if (t) {
          [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (r) {
            for (var i = r[0]; i <= r[1]; ++i) {
              if (null != t[i]) {
                lu(e, "Format", vi(i, t[i], n));
              }
            }
          });
        }
      })(r, e.SSF, n);
      (function (e, t) {
        for (var n = 0; n < 16; ++n) {
          lu(e, "XF", bi({
            numFmtId: 0,
            style: true
          }, 0, t));
        }
        t.cellXfs.forEach(function (n) {
          lu(e, "XF", bi(n, 0, t));
        });
      })(r, n);
      if (s) {
        lu(r, "UsesELFs", Hr(false));
      }
      var u = r.end();
      var l = Vt();
      if (s) {
        lu(l, "Country", function (e) {
          if (!e) {
            e = Ut(4);
          }
          e.write_shift(2, 1);
          e.write_shift(2, 1);
          return e;
        }());
      }
      if (s && n.Strings) {
        (function (e, t, n, r) {
          var i = r || (n || []).length || 0;
          if (i <= 8224) {
            return lu(e, t, n, i);
          }
          var o = +t || +uu[t];
          if (!isNaN(o)) {
            for (var a = n.parts || [], s = 0, c = 0, u = 0; u + (a[s] || 8224) <= 8224;) {
              u += a[s] || 8224;
              s++;
            }
            var l = e.next(4);
            for (l.write_shift(2, o), l.write_shift(2, u), e.push(n.slice(c, c + u)), c += u; c < i;) {
              for ((l = e.next(4)).write_shift(2, 60), u = 0; u + (a[s] || 8224) <= 8224;) {
                u += a[s] || 8224;
                s++;
              }
              l.write_shift(2, u);
              e.push(n.slice(c, c + u));
              c += u;
            }
          }
        })(l, "SST", function (e, t) {
          var n = Ut(8);
          n.write_shift(4, e.Count);
          n.write_shift(4, e.Unique);
          for (var r = [], i = 0; i < e.length; ++i) {
            r[i] = Kr(e[i]);
          }
          var o = S([n].concat(r));
          o.parts = [n.length].concat(r.map(function (e) {
            return e.length;
          }));
          return o;
        }(n.Strings));
      }
      lu(l, "EOF");
      var f = l.end();
      var d = Vt();
      var h = 0;
      var p = 0;
      for (p = 0; p < e.SheetNames.length; ++p) {
        h += (s ? 12 : 11) + (s ? 2 : 1) * e.SheetNames[p].length;
      }
      var _ = u.length + h + f.length;
      for (p = 0; p < e.SheetNames.length; ++p) {
        lu(d, "BoundSheet8", Ai({
          pos: _,
          hs: (o[p] || {}).Hidden || 0,
          dt: 0,
          name: e.SheetNames[p]
        }, n));
        _ += t[p].length;
      }
      var A = d.end();
      if (h != A.length) {
        throw new Error("BS8 " + h + " != " + A.length);
      }
      var g = [];
      if (u.length) {
        g.push(u);
      }
      if (A.length) {
        g.push(A);
      }
      if (f.length) {
        g.push(f);
      }
      return ut([g]);
    }
    function vu(e, t) {
      var n = t || {};
      switch (n.biff || 2) {
        case 8:
        case 5:
          return function (e, t) {
            var n = t || {};
            var r = [];
            if (e && !e.SSF) {
              e.SSF = D.get_table();
            }
            if (e && e.SSF) {
              I(D);
              D.load_table(e.SSF);
              n.revssf = z(e.SSF);
              n.revssf[e.SSF[65535]] = 0;
              n.ssf = e.SSF;
            }
            n.Strings = [];
            n.Strings.Count = 0;
            n.Strings.Unique = 0;
            Hu(n);
            n.cellXfs = [];
            ms(n.cellXfs, {}, {
              revssf: {
                General: 0
              }
            });
            if (!e.Props) {
              e.Props = {};
            }
            for (var i = 0; i < e.SheetNames.length; ++i) {
              r[r.length] = Au(i, n, e);
            }
            r.unshift(gu(e, r, n));
            return ut([r]);
          }(e, t);
        case 4:
        case 3:
        case 2:
          return hu(e, t);
      }
      throw new Error("invalid type " + n.bookType + " for BIFF");
    }
    var mu = function () {
      function e(e, t) {
        var n = t || {};
        var r = n.dense ? [] : {};
        var i = (e = e.replace(/<!--.*?-->/g, "")).match(/<table/i);
        if (!i) {
          throw new Error("Invalid HTML: could not find <table>");
        }
        var o = e.match(/<\/table/i);
        var a = i.index;
        var s = o && o.index || e.length;
        var c = function (e, t, n) {
          if (ce || "string" == typeof t) {
            return e.split(t);
          }
          for (var r = e.split(t), i = [r[0]], o = 1; o < r.length; ++o) {
            i.push(n);
            i.push(r[o]);
          }
          return i;
        }(e.slice(a, s), /(:?<tr[^>]*>)/i, "<tr>");
        var u = -1;
        var l = 0;
        var f = 0;
        var d = 0;
        var h = {
          s: {
            r: 1e7,
            c: 1e7
          },
          e: {
            r: 0,
            c: 0
          }
        };
        var p = [];
        for (a = 0; a < c.length; ++a) {
          var _ = c[a].trim();
          var A = _.slice(0, 3).toLowerCase();
          if ("<tr" != A) {
            if ("<td" == A || "<th" == A) {
              var g = _.split(/<\/t[dh]>/i);
              for (s = 0; s < g.length; ++s) {
                var v = g[s].trim();
                if (v.match(/<t[dh]/i)) {
                  for (var m = v, y = 0; "<" == m.charAt(0) && (y = m.indexOf(">")) > -1;) {
                    m = m.slice(y + 1);
                  }
                  for (var b = 0; b < p.length; ++b) {
                    var w = p[b];
                    if (w.s.c == l && w.s.r < u && u <= w.e.r) {
                      l = w.e.c + 1;
                      b = -1;
                    }
                  }
                  var E = Ee(v.slice(0, v.indexOf(">")));
                  d = E.colspan ? +E.colspan : 1;
                  if ((f = +E.rowspan) > 1 || d > 1) {
                    p.push({
                      s: {
                        r: u,
                        c: l
                      },
                      e: {
                        r: u + (f || 1) - 1,
                        c: l + d - 1
                      }
                    });
                  }
                  var x = E.t || "";
                  if (m.length) {
                    m = Ge(m);
                    if (h.s.r > u) {
                      h.s.r = u;
                    }
                    if (h.e.r < u) {
                      h.e.r = u;
                    }
                    if (h.s.c > l) {
                      h.s.c = l;
                    }
                    if (h.e.c < l) {
                      h.e.c = l;
                    }
                    if (m.length) {
                      var C = {
                        t: "s",
                        v: m
                      };
                      if (!(n.raw || !m.trim().length || "s" == x)) {
                        if ("TRUE" === m) {
                          C = {
                            t: "b",
                            v: true
                          };
                        } else {
                          if ("FALSE" === m) {
                            C = {
                              t: "b",
                              v: false
                            };
                          } else {
                            if (isNaN(oe(m))) {
                              if (!isNaN(ae(m).getDate())) {
                                C = {
                                  t: "d",
                                  v: te(m)
                                };
                                if (!n.cellDates) {
                                  C = {
                                    t: "n",
                                    v: W(C.v)
                                  };
                                }
                                C.z = n.dateNF || D._table[14];
                              }
                            } else {
                              C = {
                                t: "n",
                                v: oe(m)
                              };
                            }
                          }
                        }
                      }
                      if (n.dense) {
                        if (!r[u]) {
                          r[u] = [];
                        }
                        r[u][l] = C;
                      } else {
                        r[Zt({
                          r: u,
                          c: l
                        })] = C;
                      }
                      l += d;
                    }
                  } else {
                    l += d;
                  }
                }
              }
            }
          } else {
            ++u;
            if (n.sheetRows && n.sheetRows <= u) {
              --u;
              break;
            }
            l = 0;
          }
        }
        r["!ref"] = tn(h);
        if (p.length) {
          r["!merges"] = p;
        }
        return r;
      }
      function t(e, t, n, r) {
        for (var i = e["!merges"] || [], o = [], a = t.s.c; a <= t.e.c; ++a) {
          for (var s = 0, c = 0, u = 0; u < i.length; ++u) {
            if (!(i[u].s.r > n || i[u].s.c > a) && !(i[u].e.r < n || i[u].e.c < a)) {
              if (i[u].s.r < n || i[u].s.c < a) {
                s = -1;
                break;
              }
              s = i[u].e.r - i[u].s.r + 1;
              c = i[u].e.c - i[u].s.c + 1;
              break;
            }
          }
          if (!(s < 0)) {
            var l = Zt({
              r: n,
              c: a
            });
            var f = r.dense ? (e[n] || [])[a] : e[l];
            var d = f && null != f.v && (f.h || Fe(f.w || (on(f), f.w) || "")) || "";
            var h = {};
            if (s > 1) {
              h.rowspan = s;
            }
            if (c > 1) {
              h.colspan = c;
            }
            h.t = f && f.t || "z";
            if (r.editable) {
              d = "<span contenteditable=\"true\">" + d + "</span>";
            }
            h.id = (r.id || "sjs") + "-" + l;
            if ("z" != h.t) {
              h.v = f.v;
              if (null != f.z) {
                h.z = f.z;
              }
            }
            o.push($e("td", d, h));
          }
        }
        return "<tr>" + o.join("") + "</tr>";
      }
      function n(e, t, n) {
        return [].join("") + "<table" + (n && n.id ? " id=\"" + n.id + "\"" : "") + ">";
      }
      var r = "<html><head><meta charset=\"utf-8\"/><title>SheetJS Table Export</title></head><body>";
      var i = "</body></html>";
      return {
        to_workbook: function (t, n) {
          return an(e(t, n), n);
        },
        to_sheet: e,
        _row: t,
        BEGIN: r,
        END: i,
        _preamble: n,
        from_sheet: function (e, o) {
          var a = o || {};
          var s = null != a.header ? a.header : r;
          var c = null != a.footer ? a.footer : i;
          var u = [s];
          var l = en(e["!ref"]);
          a.dense = Array.isArray(e);
          u.push(n(0, 0, a));
          for (var f = l.s.r; f <= l.e.r; ++f) {
            u.push(t(e, l, f, a));
          }
          u.push("</table>" + c);
          return u.join("");
        }
      };
    }();
    function yu(e, t, n) {
      var r = n || {};
      var i = 0;
      var o = 0;
      if (null != r.origin) {
        if ("number" == typeof r.origin) {
          i = r.origin;
        } else {
          var a = "string" == typeof r.origin ? Jt(r.origin) : r.origin;
          i = a.r;
          o = a.c;
        }
      }
      var s = t.getElementsByTagName("tr");
      var c = Math.min(r.sheetRows || 1e7, s.length);
      var u = {
        s: {
          r: 0,
          c: 0
        },
        e: {
          r: i,
          c: o
        }
      };
      if (e["!ref"]) {
        var l = en(e["!ref"]);
        u.s.r = Math.min(u.s.r, l.s.r);
        u.s.c = Math.min(u.s.c, l.s.c);
        u.e.r = Math.max(u.e.r, l.e.r);
        u.e.c = Math.max(u.e.c, l.e.c);
        if (-1 == i) {
          u.e.r = i = l.e.r + 1;
        }
      }
      var f = [];
      var d = 0;
      var h = e["!rows"] || (e["!rows"] = []);
      var p = 0;
      var _ = 0;
      var A = 0;
      var g = 0;
      var v = 0;
      var m = 0;
      for (e["!cols"] || (e["!cols"] = []); p < s.length && _ < c; ++p) {
        var y = s[p];
        if (wu(y)) {
          if (r.display) {
            continue;
          }
          h[_] = {
            hidden: true
          };
        }
        var b = y.children;
        for (A = g = 0; A < b.length; ++A) {
          var w = b[A];
          if (!r.display || !wu(w)) {
            var E = w.hasAttribute("v") ? w.getAttribute("v") : Ge(w.innerHTML);
            var x = w.getAttribute("z");
            for (d = 0; d < f.length; ++d) {
              var C = f[d];
              if (C.s.c == g + o && C.s.r < _ + i && _ + i <= C.e.r) {
                g = C.e.c + 1 - o;
                d = -1;
              }
            }
            m = +w.getAttribute("colspan") || 1;
            if ((v = +w.getAttribute("rowspan") || 1) > 1 || m > 1) {
              f.push({
                s: {
                  r: _ + i,
                  c: g + o
                },
                e: {
                  r: _ + i + (v || 1) - 1,
                  c: g + o + (m || 1) - 1
                }
              });
            }
            var O = {
              t: "s",
              v: E
            };
            var k = w.getAttribute("t") || "";
            if (null != E) {
              if (0 == E.length) {
                O.t = k || "z";
              } else {
                if (!(r.raw || 0 == E.trim().length || "s" == k)) {
                  if ("TRUE" === E) {
                    O = {
                      t: "b",
                      v: true
                    };
                  } else {
                    if ("FALSE" === E) {
                      O = {
                        t: "b",
                        v: false
                      };
                    } else {
                      if (isNaN(oe(E))) {
                        if (!isNaN(ae(E).getDate())) {
                          O = {
                            t: "d",
                            v: te(E)
                          };
                          if (!r.cellDates) {
                            O = {
                              t: "n",
                              v: W(O.v)
                            };
                          }
                          O.z = r.dateNF || D._table[14];
                        }
                      } else {
                        O = {
                          t: "n",
                          v: oe(E)
                        };
                      }
                    }
                  }
                }
              }
            }
            if (undefined === O.z && null != x) {
              O.z = x;
            }
            if (r.dense) {
              if (!e[_ + i]) {
                e[_ + i] = [];
              }
              e[_ + i][g + o] = O;
            } else {
              e[Zt({
                c: g + o,
                r: _ + i
              })] = O;
            }
            if (u.e.c < g + o) {
              u.e.c = g + o;
            }
            g += m;
          }
        }
        ++_;
      }
      if (f.length) {
        e["!merges"] = (e["!merges"] || []).concat(f);
      }
      u.e.r = Math.max(u.e.r, _ - 1 + i);
      e["!ref"] = tn(u);
      if (_ >= c) {
        e["!fullref"] = tn((u.e.r = s.length - p + _ - 1 + i, u));
      }
      return e;
    }
    function bu(e, t) {
      return yu((t || {}).dense ? [] : {}, e, t);
    }
    function wu(e) {
      var t = "";
      var n = function (e) {
        return e.ownerDocument.defaultView && "function" === typeof e.ownerDocument.defaultView.getComputedStyle ? e.ownerDocument.defaultView.getComputedStyle : "function" === typeof getComputedStyle ? getComputedStyle : null;
      }(e);
      if (n) {
        t = n(e).getPropertyValue("display");
      }
      if (!t) {
        t = e.style.display;
      }
      return "none" === t;
    }
    var Eu = function () {
      var e = function (e) {
        var t = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function (e, t) {
          return Array(parseInt(t, 10) + 1).join(" ");
        }).replace(/<text:tab[^>]*\/>/g, "\t").replace(/<text:line-break\/>/g, "\n");
        return [ke(t.replace(/<[^>]*>/g, ""))];
      };
      var t = {
        day: ["d", "dd"],
        month: ["m", "mm"],
        year: ["y", "yy"],
        hours: ["h", "hh"],
        minutes: ["m", "mm"],
        seconds: ["s", "ss"],
        "am-pm": ["A/P", "AM/PM"],
        "day-of-week": ["ddd", "dddd"],
        era: ["e", "ee"],
        quarter: ["\\Qm", "m\\\"th quarter\""]
      };
      return function (n, r) {
        var i = r || {};
        var o;
        var a;
        var s;
        var c;
        var u;
        var l;
        var f = Uc(n);
        var d = [];
        var h = {
          name: ""
        };
        var p = "";
        var _ = 0;
        var A = {};
        var g = [];
        var v = i.dense ? [] : {};
        var m = {
          value: ""
        };
        var y = "";
        var b = 0;
        var w = [];
        var E = -1;
        var x = -1;
        var C = {
          s: {
            r: 1e6,
            c: 1e7
          },
          e: {
            r: 0,
            c: 0
          }
        };
        var O = 0;
        var k = {};
        var S = [];
        var T = {};
        var B = [];
        var D = 1;
        var I = 1;
        var F = [];
        var R = {
          Names: []
        };
        var P = {};
        var N = ["", ""];
        var M = [];
        var j = {};
        var L = "";
        var U = 0;
        var H = false;
        var V = false;
        var G = 0;
        for (Hc.lastIndex = 0, f = f.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); u = Hc.exec(f);) {
          switch (u[3] = u[3].replace(/_.*$/, "")) {
            case "table":
            case "工作表":
              if ("/" === u[1]) {
                if (C.e.c >= C.s.c && C.e.r >= C.s.r) {
                  v["!ref"] = tn(C);
                } else {
                  v["!ref"] = "A1:A1";
                }
                if (i.sheetRows > 0 && i.sheetRows <= C.e.r) {
                  v["!fullref"] = v["!ref"];
                  C.e.r = i.sheetRows - 1;
                  v["!ref"] = tn(C);
                }
                if (S.length) {
                  v["!merges"] = S;
                }
                if (B.length) {
                  v["!rows"] = B;
                }
                s.name = s["名称"] || s.name;
                if ("undefined" !== typeof JSON) {
                  JSON.stringify(s);
                }
                g.push(s.name);
                A[s.name] = v;
                V = false;
              } else {
                if ("/" !== u[0].charAt(u[0].length - 2)) {
                  s = Ee(u[0], false);
                  E = x = -1;
                  C.s.r = C.s.c = 1e7;
                  C.e.r = C.e.c = 0;
                  v = i.dense ? [] : {};
                  S = [];
                  B = [];
                  V = true;
                }
              }
              break;
            case "table-row-group":
              if ("/" === u[1]) {
                --O;
              } else {
                ++O;
              }
              break;
            case "table-row":
            case "行":
              if ("/" === u[1]) {
                E += D;
                D = 1;
                break;
              }
              if ((c = Ee(u[0], false))["行号"] ? E = c["行号"] - 1 : -1 == E && (E = 0), (D = +c["number-rows-repeated"] || 1) < 10) {
                for (G = 0; G < D; ++G) {
                  if (O > 0) {
                    B[E + G] = {
                      level: O
                    };
                  }
                }
              }
              x = -1;
              break;
            case "covered-table-cell":
              if ("/" !== u[1]) {
                ++x;
              }
              if (i.sheetStubs) {
                if (i.dense) {
                  if (!v[E]) {
                    v[E] = [];
                  }
                  v[E][x] = {
                    t: "z"
                  };
                } else {
                  v[Zt({
                    r: E,
                    c: x
                  })] = {
                    t: "z"
                  };
                }
              }
              y = "";
              w = [];
              break;
            case "table-cell":
            case "数据":
              if ("/" === u[0].charAt(u[0].length - 2)) {
                ++x;
                m = Ee(u[0], false);
                I = parseInt(m["number-columns-repeated"] || "1", 10);
                l = {
                  t: "z",
                  v: null
                };
                if (m.formula && 0 != i.cellFormula) {
                  l.f = fs(ke(m.formula));
                }
                if ("string" == (m["数据类型"] || m["value-type"])) {
                  l.t = "s";
                  l.v = ke(m["string-value"] || "");
                  if (i.dense) {
                    if (!v[E]) {
                      v[E] = [];
                    }
                    v[E][x] = l;
                  } else {
                    v[Zt({
                      r: E,
                      c: x
                    })] = l;
                  }
                }
                x += I - 1;
              } else if ("/" !== u[1]) {
                I = 1;
                var z = D ? E + D - 1 : E;
                if (++x > C.e.c) {
                  C.e.c = x;
                }
                if (x < C.s.c) {
                  C.s.c = x;
                }
                if (E < C.s.r) {
                  C.s.r = E;
                }
                if (z > C.e.r) {
                  C.e.r = z;
                }
                M = [];
                j = {};
                l = {
                  t: (m = Ee(u[0], false))["数据类型"] || m["value-type"],
                  v: null
                };
                if (i.cellFormula) {
                  if (m.formula) {
                    m.formula = ke(m.formula);
                  }
                  if (m["number-matrix-columns-spanned"] && m["number-matrix-rows-spanned"]) {
                    T = {
                      s: {
                        r: E,
                        c: x
                      },
                      e: {
                        r: E + (parseInt(m["number-matrix-rows-spanned"], 10) || 0) - 1,
                        c: x + (parseInt(m["number-matrix-columns-spanned"], 10) || 0) - 1
                      }
                    };
                    l.F = tn(T);
                    F.push([T, l.F]);
                  }
                  if (m.formula) {
                    l.f = fs(m.formula);
                  } else {
                    for (G = 0; G < F.length; ++G) {
                      if (E >= F[G][0].s.r && E <= F[G][0].e.r && x >= F[G][0].s.c && x <= F[G][0].e.c) {
                        l.F = F[G][1];
                      }
                    }
                  }
                }
                switch ((m["number-columns-spanned"] || m["number-rows-spanned"]) && (T = {
                  s: {
                    r: E,
                    c: x
                  },
                  e: {
                    r: E + (parseInt(m["number-rows-spanned"], 10) || 0) - 1,
                    c: x + (parseInt(m["number-columns-spanned"], 10) || 0) - 1
                  }
                }, S.push(T)), m["number-columns-repeated"] && (I = parseInt(m["number-columns-repeated"], 10)), l.t) {
                  case "boolean":
                    l.t = "b";
                    l.v = Ne(m["boolean-value"]);
                    break;
                  case "float":
                  case "percentage":
                  case "currency":
                    l.t = "n";
                    l.v = parseFloat(m.value);
                    break;
                  case "date":
                    l.t = "d";
                    l.v = te(m["date-value"]);
                    if (!i.cellDates) {
                      l.t = "n";
                      l.v = W(l.v);
                    }
                    l.z = "m/d/yy";
                    break;
                  case "time":
                    l.t = "n";
                    l.v = J(m["time-value"]) / 86400;
                    break;
                  case "number":
                    l.t = "n";
                    l.v = parseFloat(m["数据数值"]);
                    break;
                  default:
                    if ("string" !== l.t && "text" !== l.t && l.t) {
                      throw new Error("Unsupported value type " + l.t);
                    }
                    l.t = "s";
                    if (null != m["string-value"]) {
                      y = ke(m["string-value"]);
                      w = [];
                    }
                }
              } else {
                H = false;
                if ("s" === l.t) {
                  l.v = y || "";
                  if (w.length) {
                    l.R = w;
                  }
                  H = 0 == b;
                }
                if (P.Target) {
                  l.l = P;
                }
                if (M.length > 0) {
                  l.c = M;
                  M = [];
                }
                if (y && false !== i.cellText) {
                  l.w = y;
                }
                if (H) {
                  l.t = "z";
                  delete l.v;
                }
                if ((!H || i.sheetStubs) && !(i.sheetRows && i.sheetRows <= E)) {
                  for (var Q = 0; Q < D; ++Q) {
                    I = parseInt(m["number-columns-repeated"] || "1", 10);
                    if (i.dense) {
                      for (v[E + Q] || (v[E + Q] = []), v[E + Q][x] = 0 == Q ? l : re(l); --I > 0;) {
                        v[E + Q][x + I] = re(l);
                      }
                    } else {
                      for (v[Zt({
                        r: E + Q,
                        c: x
                      })] = l; --I > 0;) {
                        v[Zt({
                          r: E + Q,
                          c: x + I
                        })] = re(l);
                      }
                    }
                    if (C.e.c <= x) {
                      C.e.c = x;
                    }
                  }
                }
                x += (I = parseInt(m["number-columns-repeated"] || "1", 10)) - 1;
                I = 0;
                l = {};
                y = "";
                w = [];
              }
              P = {};
              break;
            case "document":
            case "document-content":
            case "电子表格文档":
            case "spreadsheet":
            case "主体":
            case "scripts":
            case "styles":
            case "font-face-decls":
            case "master-styles":
              if ("/" === u[1]) {
                if ((o = d.pop())[0] !== u[3]) {
                  throw "Bad state: " + o;
                }
              } else if ("/" !== u[0].charAt(u[0].length - 2)) {
                d.push([u[3], true]);
              }
              break;
            case "annotation":
              if ("/" === u[1]) {
                if ((o = d.pop())[0] !== u[3]) {
                  throw "Bad state: " + o;
                }
                j.t = y;
                if (w.length) {
                  j.R = w;
                }
                j.a = L;
                M.push(j);
              } else if ("/" !== u[0].charAt(u[0].length - 2)) {
                d.push([u[3], false]);
              }
              L = "";
              U = 0;
              y = "";
              b = 0;
              w = [];
              break;
            case "creator":
              if ("/" === u[1]) {
                L = f.slice(U, u.index);
              } else {
                U = u.index + u[0].length;
              }
              break;
            case "meta":
            case "元数据":
            case "settings":
            case "config-item-set":
            case "config-item-map-indexed":
            case "config-item-map-entry":
            case "config-item-map-named":
            case "shapes":
            case "frame":
            case "text-box":
            case "image":
            case "data-pilot-tables":
            case "list-style":
            case "form":
            case "dde-links":
            case "event-listeners":
            case "chart":
              if ("/" === u[1]) {
                if ((o = d.pop())[0] !== u[3]) {
                  throw "Bad state: " + o;
                }
              } else if ("/" !== u[0].charAt(u[0].length - 2)) {
                d.push([u[3], false]);
              }
              y = "";
              b = 0;
              w = [];
              break;
            case "scientific-number":
            case "currency-symbol":
            case "currency-style":
              break;
            case "number-style":
            case "percentage-style":
            case "date-style":
            case "time-style":
              if ("/" === u[1]) {
                k[h.name] = p;
                if ((o = d.pop())[0] !== u[3]) {
                  throw "Bad state: " + o;
                }
              } else if ("/" !== u[0].charAt(u[0].length - 2)) {
                p = "";
                h = Ee(u[0], false);
                d.push([u[3], true]);
              }
              break;
            case "script":
            case "libraries":
            case "automatic-styles":
              break;
            case "default-style":
            case "page-layout":
            case "style":
            case "map":
            case "font-face":
            case "paragraph-properties":
            case "table-properties":
            case "table-column-properties":
            case "table-row-properties":
            case "table-cell-properties":
              break;
            case "number":
              switch (d[d.length - 1][0]) {
                case "time-style":
                case "date-style":
                  a = Ee(u[0], false);
                  p += t[u[3]]["long" === a.style ? 1 : 0];
              }
              break;
            case "fraction":
              break;
            case "day":
            case "month":
            case "year":
            case "era":
            case "day-of-week":
            case "week-of-year":
            case "quarter":
            case "hours":
            case "minutes":
            case "seconds":
            case "am-pm":
              switch (d[d.length - 1][0]) {
                case "time-style":
                case "date-style":
                  a = Ee(u[0], false);
                  p += t[u[3]]["long" === a.style ? 1 : 0];
              }
              break;
            case "boolean-style":
            case "boolean":
            case "text-style":
              break;
            case "text":
              if ("/>" === u[0].slice(-2)) {
                break;
              }
              if ("/" === u[1]) {
                switch (d[d.length - 1][0]) {
                  case "number-style":
                  case "date-style":
                  case "time-style":
                    p += f.slice(_, u.index);
                }
              } else {
                _ = u.index + u[0].length;
              }
              break;
            case "named-range":
              N = ds((a = Ee(u[0], false))["cell-range-address"]);
              var K = {
                Name: a.name,
                Ref: N[0] + "!" + N[1]
              };
              if (V) {
                K.Sheet = g.length;
              }
              R.Names.push(K);
              break;
            case "text-content":
            case "text-properties":
            case "embedded-text":
              break;
            case "body":
            case "电子表格":
            case "forms":
            case "table-column":
            case "table-header-rows":
            case "table-rows":
            case "table-column-group":
            case "table-header-columns":
            case "table-columns":
            case "null-date":
            case "graphic-properties":
            case "calculation-settings":
            case "named-expressions":
            case "label-range":
            case "label-ranges":
            case "named-expression":
            case "sort":
            case "sort-by":
            case "sort-groups":
            case "tab":
            case "line-break":
            case "span":
              break;
            case "p":
            case "文本串":
              if (["master-styles"].indexOf(d[d.length - 1][0]) > -1) {
                break;
              }
              if ("/" !== u[1] || m && m["string-value"]) {
                Ee(u[0], false);
                b = u.index + u[0].length;
              } else {
                var X = e(f.slice(b, u.index));
                y = (y.length > 0 ? y + "\n" : "") + X[0];
              }
              break;
            case "s":
              break;
            case "database-range":
              if ("/" === u[1]) {
                break;
              }
              try {
                A[(N = ds(Ee(u[0])["target-range-address"]))[0]]["!autofilter"] = {
                  ref: N[1]
                };
              } catch (_l) {}
              break;
            case "date":
            case "object":
              break;
            case "title":
            case "标题":
            case "desc":
            case "binary-data":
            case "table-source":
            case "scenario":
            case "iteration":
            case "content-validations":
            case "content-validation":
            case "help-message":
            case "error-message":
            case "database-ranges":
            case "filter":
            case "filter-and":
            case "filter-or":
            case "filter-condition":
            case "list-level-style-bullet":
            case "list-level-style-number":
            case "list-level-properties":
              break;
            case "sender-firstname":
            case "sender-lastname":
            case "sender-initials":
            case "sender-title":
            case "sender-position":
            case "sender-email":
            case "sender-phone-private":
            case "sender-fax":
            case "sender-company":
            case "sender-phone-work":
            case "sender-street":
            case "sender-city":
            case "sender-postal-code":
            case "sender-country":
            case "sender-state-or-province":
            case "author-name":
            case "author-initials":
            case "chapter":
            case "file-name":
            case "template-name":
            case "sheet-name":
            case "event-listener":
              break;
            case "initial-creator":
            case "creation-date":
            case "print-date":
            case "generator":
            case "document-statistic":
            case "user-defined":
            case "editing-duration":
            case "editing-cycles":
            case "config-item":
            case "page-number":
            case "page-count":
            case "time":
            case "cell-range-source":
            case "detective":
            case "operation":
            case "highlighted-range":
              break;
            case "data-pilot-table":
            case "source-cell-range":
            case "source-service":
            case "data-pilot-field":
            case "data-pilot-level":
            case "data-pilot-subtotals":
            case "data-pilot-subtotal":
            case "data-pilot-members":
            case "data-pilot-member":
            case "data-pilot-display-info":
            case "data-pilot-sort-info":
            case "data-pilot-layout-info":
            case "data-pilot-field-reference":
            case "data-pilot-groups":
            case "data-pilot-group":
            case "data-pilot-group-member":
            case "rect":
              break;
            case "dde-connection-decls":
            case "dde-connection-decl":
            case "dde-link":
            case "dde-source":
            case "properties":
            case "property":
              break;
            case "a":
              if ("/" !== u[1]) {
                if (!(P = Ee(u[0], false)).href) {
                  break;
                }
                P.Target = P.href;
                delete P.href;
                if ("#" == P.Target.charAt(0) && P.Target.indexOf(".") > -1) {
                  N = ds(P.Target.slice(1));
                  P.Target = "#" + N[0] + "!" + N[1];
                }
              }
              break;
            case "table-protection":
            case "data-pilot-grand-total":
            case "office-document-common-attrs":
              break;
            default:
              switch (u[2]) {
                case "dc:":
                case "calcext:":
                case "loext:":
                case "ooo:":
                case "chartooo:":
                case "draw:":
                case "style:":
                case "chart:":
                case "form:":
                case "uof:":
                case "表:":
                case "字:":
                  break;
                default:
                  if (i.WTF) {
                    throw new Error(u);
                  }
              }
          }
        }
        var Y = {
          Sheets: A,
          SheetNames: g,
          Workbook: R
        };
        if (i.bookSheets) {
          delete Y.Sheets;
        }
        return Y;
      };
    }();
    function xu(e, t) {
      t = t || {};
      var n = !!fe(e, "objectdata");
      if (n) {
        (function (e, t) {
          for (var n, r, i = Uc(e); n = Hc.exec(i);) {
            switch (n[3]) {
              case "manifest":
                break;
              case "file-entry":
                if ("/" == (r = Ee(n[0], false)).path && "application/vnd.oasis.opendocument.spreadsheet" !== r.type) {
                  throw new Error("This OpenDocument is not a spreadsheet");
                }
                break;
              case "encryption-data":
              case "algorithm":
              case "start-key-generation":
              case "key-derivation":
                throw new Error("Unsupported ODS Encryption");
              default:
                if (t && t.WTF) {
                  throw n;
                }
            }
          }
        })(he(e, "META-INF/manifest.xml"), t);
      }
      var r = pe(e, "content.xml");
      if (!r) {
        throw new Error("Missing content.xml in " + (n ? "ODS" : "UOF") + " file");
      }
      var i = Eu(n ? r : Me(r), t);
      if (fe(e, "meta.xml")) {
        i.Props = ur(he(e, "meta.xml"));
      }
      return i;
    }
    function Cu(e, t) {
      return Eu(e, t);
    }
    var Ou = function () {
      var e = "<office:document-styles " + qe({
        "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
        "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
        "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
        "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
        "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
        "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "xmlns:dc": "http://purl.org/dc/elements/1.1/",
        "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
        "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
        "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
        "office:version": "1.2"
      }) + "></office:document-styles>";
      return function () {
        return ve + e;
      };
    }();
    var ku = function () {
      var e = "          <table:table-cell />\n";
      var t = function (t, n, r) {
        var i = [];
        i.push("      <table:table table:name=\"" + Be(n.SheetNames[r]) + "\" table:style-name=\"ta1\">\n");
        var o = 0;
        var a = 0;
        var s = en(t["!ref"]);
        var c = t["!merges"] || [];
        var u = 0;
        var l = Array.isArray(t);
        for (o = 0; o < s.s.r; ++o) {
          i.push("        <table:table-row></table:table-row>\n");
        }
        for (; o <= s.e.r; ++o) {
          for (i.push("        <table:table-row>\n"), a = 0; a < s.s.c; ++a) {
            i.push(e);
          }
          for (; a <= s.e.c; ++a) {
            var f = false;
            var d = {};
            var h = "";
            for (u = 0; u != c.length; ++u) {
              if (!(c[u].s.c > a) && !(c[u].s.r > o) && !(c[u].e.c < a) && !(c[u].e.r < o)) {
                if (!(c[u].s.c == a && c[u].s.r == o)) {
                  f = true;
                }
                d["table:number-columns-spanned"] = c[u].e.c - c[u].s.c + 1;
                d["table:number-rows-spanned"] = c[u].e.r - c[u].s.r + 1;
                break;
              }
            }
            if (f) {
              i.push("          <table:covered-table-cell/>\n");
            } else {
              var p = Zt({
                r: o,
                c: a
              });
              var _ = l ? (t[o] || [])[a] : t[p];
              if (_ && _.f && (d["table:formula"] = Be(("of:=" + _.f.replace(da, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":")).replace(/;/g, "|").replace(/,/g, ";")), _.F && _.F.slice(0, p.length) == p)) {
                var A = en(_.F);
                d["table:number-matrix-columns-spanned"] = A.e.c - A.s.c + 1;
                d["table:number-matrix-rows-spanned"] = A.e.r - A.s.r + 1;
              }
              if (_) {
                switch (_.t) {
                  case "b":
                    h = _.v ? "TRUE" : "FALSE";
                    d["office:value-type"] = "boolean";
                    d["office:boolean-value"] = _.v ? "true" : "false";
                    break;
                  case "n":
                    h = _.w || String(_.v || 0);
                    d["office:value-type"] = "float";
                    d["office:value"] = _.v || 0;
                    break;
                  case "s":
                  case "str":
                    h = null == _.v ? "" : _.v;
                    d["office:value-type"] = "string";
                    break;
                  case "d":
                    h = _.w || te(_.v).toISOString();
                    d["office:value-type"] = "date";
                    d["office:date-value"] = te(_.v).toISOString();
                    d["table:style-name"] = "ce1";
                    break;
                  default:
                    i.push(e);
                    continue;
                }
                var g = Be(h).replace(/  +/g, function (e) {
                  return "<text:s text:c=\"" + e.length + "\"/>";
                }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "<text:line-break/>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
                if (_.l && _.l.Target) {
                  var v = _.l.Target;
                  g = $e("text:a", g, {
                    "xlink:href": v = "#" == v.charAt(0) ? "#" + v.slice(1).replace(/\./, "!") : v
                  });
                }
                i.push("          " + $e("table:table-cell", $e("text:p", g, {}), d) + "\n");
              } else {
                i.push(e);
              }
            }
          }
          i.push("        </table:table-row>\n");
        }
        i.push("      </table:table>\n");
        return i.join("");
      };
      return function (e, n) {
        var r = [ve];
        var i = qe({
          "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
          "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
          "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
          "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
          "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
          "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "xmlns:dc": "http://purl.org/dc/elements/1.1/",
          "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
          "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
          "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
          "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
          "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
          "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
          "xmlns:math": "http://www.w3.org/1998/Math/MathML",
          "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
          "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
          "xmlns:ooo": "http://openoffice.org/2004/office",
          "xmlns:ooow": "http://openoffice.org/2004/writer",
          "xmlns:oooc": "http://openoffice.org/2004/calc",
          "xmlns:dom": "http://www.w3.org/2001/xml-events",
          "xmlns:xforms": "http://www.w3.org/2002/xforms",
          "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
          "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
          "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
          "xmlns:rpt": "http://openoffice.org/2005/report",
          "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
          "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
          "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
          "xmlns:tableooo": "http://openoffice.org/2009/table",
          "xmlns:drawooo": "http://openoffice.org/2010/draw",
          "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
          "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
          "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
          "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
          "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
          "office:version": "1.2"
        });
        var o = qe({
          "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
          "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
        });
        if ("fods" == n.bookType) {
          r.push("<office:document" + i + o + ">\n");
        } else {
          r.push("<office:document-content" + i + ">\n");
        }
        (function (e) {
          e.push(" <office:automatic-styles>\n");
          e.push("  <number:date-style style:name=\"N37\" number:automatic-order=\"true\">\n");
          e.push("   <number:month number:style=\"long\"/>\n");
          e.push("   <number:text>/</number:text>\n");
          e.push("   <number:day number:style=\"long\"/>\n");
          e.push("   <number:text>/</number:text>\n");
          e.push("   <number:year/>\n");
          e.push("  </number:date-style>\n");
          e.push("  <style:style style:name=\"ta1\" style:family=\"table\">\n");
          e.push("   <style:table-properties table:display=\"true\" style:writing-mode=\"lr-tb\"/>\n");
          e.push("  </style:style>\n");
          e.push("  <style:style style:name=\"ce1\" style:family=\"table-cell\" style:parent-style-name=\"Default\" style:data-style-name=\"N37\"/>\n");
          e.push(" </office:automatic-styles>\n");
        })(r);
        r.push("  <office:body>\n");
        r.push("    <office:spreadsheet>\n");
        for (var a = 0; a != e.SheetNames.length; ++a) {
          r.push(t(e.Sheets[e.SheetNames[a]], e, a));
        }
        r.push("    </office:spreadsheet>\n");
        r.push("  </office:body>\n");
        if ("fods" == n.bookType) {
          r.push("</office:document>");
        } else {
          r.push("</office:document-content>");
        }
        return r.join("");
      };
    }();
    function Su(e, t) {
      if ("fods" == t.bookType) {
        return ku(e, t);
      }
      var n = Ae();
      var r = "";
      var i = [];
      var o = [];
      _e(n, r = "mimetype", "application/vnd.oasis.opendocument.spreadsheet");
      _e(n, r = "content.xml", ku(e, t));
      i.push([r, "text/xml"]);
      o.push([r, "ContentFile"]);
      _e(n, r = "styles.xml", Ou(e, t));
      i.push([r, "text/xml"]);
      o.push([r, "StylesFile"]);
      _e(n, r = "meta.xml", ar());
      i.push([r, "text/xml"]);
      o.push([r, "MetadataFile"]);
      _e(n, r = "manifest.rdf", function (e) {
        var t;
        var n;
        var r = [ve];
        r.push("<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n");
        for (var i = 0; i != e.length; ++i) {
          r.push(or(e[i][0], e[i][1]));
          r.push((t = "", n = e[i][0], ["  <rdf:Description rdf:about=\"" + t + "\">\n", "    <ns0:hasPart xmlns:ns0=\"http://docs.oasis-open.org/ns/office/1.2/meta/pkg#\" rdf:resource=\"" + n + "\"/>\n", "  </rdf:Description>\n"].join("")));
        }
        r.push(or("", "Document", "pkg"));
        r.push("</rdf:RDF>");
        return r.join("");
      }(o));
      i.push([r, "application/rdf+xml"]);
      _e(n, r = "META-INF/manifest.xml", function (e) {
        var t = [ve];
        t.push("<manifest:manifest xmlns:manifest=\"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0\" manifest:version=\"1.2\">\n");
        t.push("  <manifest:file-entry manifest:full-path=\"/\" manifest:version=\"1.2\" manifest:media-type=\"application/vnd.oasis.opendocument.spreadsheet\"/>\n");
        for (var n = 0; n < e.length; ++n) {
          t.push("  <manifest:file-entry manifest:full-path=\"" + e[n][0] + "\" manifest:media-type=\"" + e[n][1] + "\"/>\n");
        }
        t.push("</manifest:manifest>");
        return t.join("");
      }(i));
      return n;
    }
    function Tu(e) {
      return function (t, n) {
        var r = function (e, t) {
          if (!t) {
            return 0;
          }
          var n = e.SheetNames.indexOf(t);
          if (-1 == n) {
            throw new Error("Sheet not found: " + t);
          }
          return n;
        }(t, n.sheet);
        return e.from_sheet(t.Sheets[t.SheetNames[r]], n, t);
      };
    }
    var Bu = Tu(mu);
    var Du = Tu({
      from_sheet: ll
    });
    var Iu = Tu("undefined" !== typeof ji ? ji : {});
    var Fu = Tu("undefined" !== typeof Li ? Li : {});
    var Ru = Tu("undefined" !== typeof Hi ? Hi : {});
    var Pu = Tu("undefined" !== typeof Ao ? Ao : {});
    var Nu = Tu({
      from_sheet: fl
    });
    var Mu = Tu("undefined" !== typeof Mi ? Mi : {});
    var ju = Tu("undefined" !== typeof Ui ? Ui : {});
    function Lu(e) {
      return function (t) {
        for (var n = 0; n != e.length; ++n) {
          var r = e[n];
          if (undefined === t[r[0]]) {
            t[r[0]] = r[1];
          }
          if ("n" === r[2]) {
            t[r[0]] = Number(t[r[0]]);
          }
        }
      };
    }
    var Uu = function (e) {
      Lu([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(e);
    };
    var Hu = Lu([["cellDates", false], ["bookSST", false], ["bookType", "xlsx"], ["compression", false], ["WTF", false]]);
    function Vu(e) {
      return Jn.WS.indexOf(e) > -1 ? "sheet" : Jn.CS && e == Jn.CS ? "chart" : Jn.DS && e == Jn.DS ? "dialog" : Jn.MS && e == Jn.MS ? "macro" : e && e.length ? e : "sheet";
    }
    function Gu(e, t, n, r, i, o, a, s, c, u, l, f) {
      try {
        o[r] = er(pe(e, n, true), t);
        var d;
        var h = he(e, t);
        switch (s) {
          case "sheet":
            d = yc(h, t, i, c, o[r], u, l, f);
            break;
          case "chart":
            if (!(d = bc(h, t, i, c, o[r], u)) || !d["!drawel"]) {
              break;
            }
            var p = ge(d["!drawel"].Target, t),
              _ = Zn(p),
              A = ge(function (e, t) {
                if (!e) {
                  return "??";
                }
                var n = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
                return t["!id"][n].Target;
              }(pe(e, p, true), er(pe(e, _, true), p)), p),
              g = Zn(A);
            d = tc(pe(e, A, true), 0, 0, er(pe(e, g, true), A), 0, d);
            break;
          case "macro":
            m = t;
            o[r];
            m.slice(-4);
            d = {
              "!type": "macro"
            };
            break;
          case "dialog":
            d = function (e, t, n, r, i, o, a, s) {
              t.slice(-4);
              return {
                "!type": "dialog"
              };
            }(0, t, 0, 0, o[r]);
            break;
          default:
            throw new Error("Unrecognized sheet type " + s);
        }
        a[r] = d;
        var v = [];
        if (o && o[r]) {
          H(o[r]).forEach(function (n) {
            if (o[r][n].Type == Jn.CMNT) {
              var i = ge(o[r][n].Target, t);
              if (!(v = xc(he(e, i, true), i, c)) || !v.length) {
                return;
              }
              !function (e, t) {
                var n;
                var r = Array.isArray(e);
                t.forEach(function (t) {
                  var i = Jt(t.ref);
                  if (r) {
                    if (!e[i.r]) {
                      e[i.r] = [];
                    }
                    n = e[i.r][i.c];
                  } else {
                    n = e[t.ref];
                  }
                  if (!n) {
                    n = {
                      t: "z"
                    };
                    if (r) {
                      e[i.r][i.c] = n;
                    } else {
                      e[t.ref] = n;
                    }
                    var o = nn(e["!ref"] || "BDWGO1000001:A1");
                    if (o.s.r > i.r) {
                      o.s.r = i.r;
                    }
                    if (o.e.r < i.r) {
                      o.e.r = i.r;
                    }
                    if (o.s.c > i.c) {
                      o.s.c = i.c;
                    }
                    if (o.e.c < i.c) {
                      o.e.c = i.c;
                    }
                    var a = tn(o);
                    if (a !== e["!ref"]) {
                      e["!ref"] = a;
                    }
                  }
                  if (!n.c) {
                    n.c = [];
                  }
                  var s = {
                    a: t.author,
                    t: t.t,
                    r: t.r
                  };
                  if (t.h) {
                    s.h = t.h;
                  }
                  n.c.push(s);
                });
              }(d, v);
            }
          });
        }
      } catch (_l) {
        if (c.WTF) {
          throw _l;
        }
      }
      var m;
    }
    function zu(e) {
      return "/" == e.charAt(0) ? e.slice(1) : e;
    }
    function Qu(e, t) {
      I(D);
      Uu(t = t || {});
      if (fe(e, "META-INF/manifest.xml")) {
        return xu(e, t);
      }
      if (fe(e, "objectdata.xml")) {
        return xu(e, t);
      }
      if (fe(e, "Index/Document.iwa")) {
        throw new Error("Unsupported NUMBERS file");
      }
      var n;
      var r;
      var i = function (e) {
        for (var t = e.FullPaths || H(e.files), n = [], r = 0; r < t.length; ++r) {
          if ("/" != t[r].slice(-1)) {
            n.push(t[r]);
          }
        }
        return n.sort();
      }(e);
      var o = function (e) {
        var t = {
          workbooks: [],
          sheets: [],
          charts: [],
          dialogs: [],
          macros: [],
          rels: [],
          strs: [],
          comments: [],
          links: [],
          coreprops: [],
          extprops: [],
          custprops: [],
          themes: [],
          styles: [],
          calcchains: [],
          vba: [],
          drawings: [],
          TODO: [],
          xmlns: ""
        };
        if (!e || !e.match) {
          return t;
        }
        var n = {};
        (e.match(ye) || []).forEach(function (e) {
          var r = Ee(e);
          switch (r[0].replace(be, "<")) {
            case "<?xml":
              break;
            case "<Types":
              t.xmlns = r["xmlns" + (r[0].match(/<(\w+):/) || ["", ""])[1]];
              break;
            case "<Default":
              n[r.Extension] = r.ContentType;
              break;
            case "<Override":
              if (undefined !== t[Kn[r.ContentType]]) {
                t[Kn[r.ContentType]].push(r.PartName);
              }
          }
        });
        if (t.xmlns !== tt.CT) {
          throw new Error("Unknown Namespace: " + t.xmlns);
        }
        t.calcchain = t.calcchains.length > 0 ? t.calcchains[0] : "";
        t.sst = t.strs.length > 0 ? t.strs[0] : "";
        t.style = t.styles.length > 0 ? t.styles[0] : "";
        t.defaults = n;
        delete t.calcchains;
        return t;
      }(pe(e, "[Content_Types].xml"));
      var a = false;
      if (0 === o.workbooks.length && he(e, r = "xl/workbook.xml", true)) {
        o.workbooks.push(r);
      }
      if (0 === o.workbooks.length) {
        if (!he(e, r = "xl/workbook.bin", true)) {
          throw new Error("Could not find workbook");
        }
        o.workbooks.push(r);
        a = true;
      }
      if ("bin" == o.workbooks[0].slice(-3)) {
        a = true;
      }
      var s = {};
      var c = {};
      if (!t.bookSheets && !t.bookProps) {
        hs = [];
        if (o.sst) {
          try {
            hs = Ec(he(e, zu(o.sst)), o.sst, t);
          } catch (_l) {
            if (t.WTF) {
              throw _l;
            }
          }
        }
        if (t.cellStyles && o.themes.length) {
          s = function (e, t, n) {
            return ea(e, n);
          }(pe(e, o.themes[0].replace(/^\//, ""), true) || "", o.themes[0], t);
        }
        if (o.style) {
          c = wc(he(e, zu(o.style)), o.style, s, t);
        }
      }
      o.links.map(function (n) {
        try {
          er(pe(e, Zn(zu(n))), n);
          return Oc(he(e, zu(n)), 0, n, t);
        } catch (_l) {}
      });
      var u = mc(he(e, zu(o.workbooks[0])), o.workbooks[0], t);
      var l = {};
      var f = "";
      if (o.coreprops.length) {
        if (f = he(e, zu(o.coreprops[0]), true)) {
          l = ur(f);
        }
        if (0 !== o.extprops.length && (f = he(e, zu(o.extprops[0]), true))) {
          (function (e, t, n) {
            var r = {};
            if (!t) {
              t = {};
            }
            e = Me(e);
            dr.forEach(function (n) {
              var i = (e.match(Ve(n[0])) || [])[1];
              switch (n[2]) {
                case "string":
                  if (i) {
                    t[n[1]] = ke(i);
                  }
                  break;
                case "bool":
                  t[n[1]] = "true" === i;
                  break;
                case "raw":
                  var o = e.match(new RegExp("<" + n[0] + "[^>]*>([\\s\\S]*?)</" + n[0] + ">"));
                  if (o && o.length > 0) {
                    r[n[1]] = o[1];
                  }
              }
            });
            if (r.HeadingPairs && r.TitlesOfParts) {
              hr(r.HeadingPairs, r.TitlesOfParts, t, n);
            }
          })(f, l, t);
        }
      }
      var d = {};
      if (!(t.bookSheets && !t.bookProps)) {
        if (0 !== o.custprops.length && (f = pe(e, zu(o.custprops[0]), true))) {
          d = function (e, t) {
            var n = {};
            var r = "";
            var i = e.match(_r);
            if (i) {
              for (var o = 0; o != i.length; ++o) {
                var a = i[o];
                var s = Ee(a);
                switch (s[0]) {
                  case "<?xml":
                  case "<Properties":
                    break;
                  case "<property":
                    r = ke(s.name);
                    break;
                  case "</property>":
                    r = null;
                    break;
                  default:
                    if (0 === a.indexOf("<vt:")) {
                      var c = a.split(">");
                      var u = c[0].slice(4);
                      var l = c[1];
                      switch (u) {
                        case "lpstr":
                        case "bstr":
                        case "lpwstr":
                          n[r] = ke(l);
                          break;
                        case "bool":
                          n[r] = Ne(l);
                          break;
                        case "i1":
                        case "i2":
                        case "i4":
                        case "i8":
                        case "int":
                        case "uint":
                          n[r] = parseInt(l, 10);
                          break;
                        case "r4":
                        case "r8":
                        case "decimal":
                          n[r] = parseFloat(l);
                          break;
                        case "filetime":
                        case "date":
                          n[r] = te(l);
                          break;
                        case "cy":
                        case "error":
                          n[r] = ke(l);
                          break;
                        default:
                          if ("/" == u.slice(-1)) {
                            break;
                          }
                          if (t.WTF && "undefined" !== typeof console) {
                            console.warn("Unexpected", a, u, c);
                          }
                      }
                    } else if ("</" === a.slice(0, 2)) {
                      ;
                    } else if (t.WTF) {
                      throw new Error(a);
                    }
                }
              }
            }
            return n;
          }(f, t);
        }
      }
      var h = {};
      if ((t.bookSheets || t.bookProps) && (u.Sheets ? n = u.Sheets.map(function (e) {
        return e.name;
      }) : l.Worksheets && l.SheetNames.length > 0 && (n = l.SheetNames), t.bookProps && (h.Props = l, h.Custprops = d), t.bookSheets && "undefined" !== typeof n && (h.SheetNames = n), t.bookSheets ? h.SheetNames : t.bookProps)) {
        return h;
      }
      n = {};
      var p = {};
      if (t.bookDeps && o.calcchain) {
        p = Cc(he(e, zu(o.calcchain)), o.calcchain);
      }
      var _;
      var A;
      var g = 0;
      var v = {};
      var m = u.Sheets;
      l.Worksheets = m.length;
      l.SheetNames = [];
      for (var y = 0; y != m.length; ++y) {
        l.SheetNames[y] = m[y].name;
      }
      var b = a ? "bin" : "xml";
      var w = o.workbooks[0].lastIndexOf("/");
      var E = (o.workbooks[0].slice(0, w + 1) + "_rels/" + o.workbooks[0].slice(w + 1) + ".rels").replace(/^\//, "");
      if (!fe(e, E)) {
        E = "xl/_rels/workbook." + b + ".rels";
      }
      var x = er(pe(e, E, true), E);
      if (x) {
        x = function (e, t) {
          if (!e) {
            return 0;
          }
          try {
            e = t.map(function (t) {
              if (!t.id) {
                t.id = t.strRelID;
              }
              return [t.name, e["!id"][t.id].Target, Vu(e["!id"][t.id].Type)];
            });
          } catch (_l) {
            return null;
          }
          return e && 0 !== e.length ? e : null;
        }(x, u.Sheets);
      }
      var C = he(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
      e: for (g = 0; g != l.Worksheets; ++g) {
        var O = "sheet";
        if (x && x[g]) {
          _ = "xl/" + x[g][1].replace(/[\/]?xl\//, "");
          if (!fe(e, _)) {
            _ = x[g][1];
          }
          if (!fe(e, _)) {
            _ = E.replace(/_rels\/.*$/, "") + x[g][1];
          }
          O = x[g][2];
        } else {
          _ = (_ = "xl/worksheets/sheet" + (g + 1 - C) + "." + b).replace(/sheet0\./, "sheet.");
        }
        A = _.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels");
        if (t && null != t.sheets) {
          switch (typeof t.sheets) {
            case "number":
              if (g != t.sheets) {
                continue e;
              }
              break;
            case "string":
              if (l.SheetNames[g].toLowerCase() != t.sheets.toLowerCase()) {
                continue e;
              }
              break;
            default:
              if (Array.isArray && Array.isArray(t.sheets)) {
                for (var k = false, S = 0; S != t.sheets.length; ++S) {
                  if ("number" == typeof t.sheets[S] && t.sheets[S] == g) {
                    k = 1;
                  }
                  if ("string" == typeof t.sheets[S] && t.sheets[S].toLowerCase() == l.SheetNames[g].toLowerCase()) {
                    k = 1;
                  }
                }
                if (!k) {
                  continue e;
                }
              }
          }
        }
        Gu(e, _, A, l.SheetNames[g], g, v, n, O, t, u, s, c);
      }
      h = {
        Directory: o,
        Workbook: u,
        Props: l,
        Custprops: d,
        Deps: p,
        Sheets: n,
        SheetNames: l.SheetNames,
        Strings: hs,
        Styles: c,
        Themes: s,
        SSF: D.get_table()
      };
      if (t && t.bookFiles) {
        h.keys = i;
        h.files = e.files;
      }
      if (t && t.bookVBA) {
        if (o.vba.length > 0) {
          h.vbaraw = he(e, zu(o.vba[0]), true);
        } else {
          if (o.defaults && "application/vnd.ms-office.vbaProject" === o.defaults.bin) {
            h.vbaraw = he(e, "xl/vbaProject.bin", true);
          }
        }
      }
      return h;
    }
    function Wu(e, t) {
      var n = t || {};
      var r = "Workbook";
      var i = j.find(e, r);
      try {
        r = "/!DataSpaces/Version";
        if (!(i = j.find(e, r)) || !i.content) {
          throw new Error("ECMA-376 Encrypted file missing " + r);
        }
        (function (e) {
          var t = {};
          t.id = e.read_shift(0, "lpp4");
          t.R = ro(e, 4);
          t.U = ro(e, 4);
          t.W = ro(e, 4);
        })(i.content);
        r = "/!DataSpaces/DataSpaceMap";
        if (!(i = j.find(e, r)) || !i.content) {
          throw new Error("ECMA-376 Encrypted file missing " + r);
        }
        var o = function (e) {
          var t = [];
          e.l += 4;
          for (var n = e.read_shift(4); n-- > 0;) {
            t.push(io(e));
          }
          return t;
        }(i.content);
        if (1 !== o.length || 1 !== o[0].comps.length || 0 !== o[0].comps[0].t || "StrongEncryptionDataSpace" !== o[0].name || "EncryptedPackage" !== o[0].comps[0].v) {
          throw new Error("ECMA-376 Encrypted file bad " + r);
        }
        r = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace";
        if (!(i = j.find(e, r)) || !i.content) {
          throw new Error("ECMA-376 Encrypted file missing " + r);
        }
        var a = function (e) {
          var t = [];
          e.l += 4;
          for (var n = e.read_shift(4); n-- > 0;) {
            t.push(e.read_shift(0, "lpp4"));
          }
          return t;
        }(i.content);
        if (1 != a.length || "StrongEncryptionTransform" != a[0]) {
          throw new Error("ECMA-376 Encrypted file bad " + r);
        }
        r = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary";
        if (!(i = j.find(e, r)) || !i.content) {
          throw new Error("ECMA-376 Encrypted file missing " + r);
        }
        oo(i.content);
      } catch (_l) {}
      r = "/EncryptionInfo";
      if (!(i = j.find(e, r)) || !i.content) {
        throw new Error("ECMA-376 Encrypted file missing " + r);
      }
      var s = function (e) {
        var t = ro(e);
        switch (t.Minor) {
          case 2:
            return [t.Minor, co(e)];
          case 3:
            return [t.Minor, uo()];
          case 4:
            return [t.Minor, lo(e)];
        }
        throw new Error("ECMA-376 Encrypted file unrecognized Version: " + t.Minor);
      }(i.content);
      r = "/EncryptedPackage";
      if (!(i = j.find(e, r)) || !i.content) {
        throw new Error("ECMA-376 Encrypted file missing " + r);
      }
      if (4 == s[0] && "undefined" !== typeof decrypt_agile) {
        return decrypt_agile(s[1], i.content, n.password || "", n);
      }
      if (2 == s[0] && "undefined" !== typeof decrypt_std76) {
        return decrypt_std76(s[1], i.content, n.password || "", n);
      }
      throw new Error("File is password-protected");
    }
    function Ku(e, t) {
      ia = 1024;
      if ("ods" == t.bookType) {
        return Su(e, t);
      }
      if (e && !e.SSF) {
        e.SSF = D.get_table();
      }
      if (e && e.SSF) {
        I(D);
        D.load_table(e.SSF);
        t.revssf = z(e.SSF);
        t.revssf[e.SSF[65535]] = 0;
        t.ssf = e.SSF;
      }
      t.rels = {};
      t.wbrels = {};
      t.Strings = [];
      t.Strings.Count = 0;
      t.Strings.Unique = 0;
      if (_s) {
        t.revStrings = new Map();
      } else {
        t.revStrings = {};
        t.revStrings.foo = [];
        delete t.revStrings.foo;
      }
      var n = "xlsb" == t.bookType ? "bin" : "xml";
      var r = la.indexOf(t.bookType) > -1;
      var i = {
        workbooks: [],
        sheets: [],
        charts: [],
        dialogs: [],
        macros: [],
        rels: [],
        strs: [],
        comments: [],
        links: [],
        coreprops: [],
        extprops: [],
        custprops: [],
        themes: [],
        styles: [],
        calcchains: [],
        vba: [],
        drawings: [],
        TODO: [],
        xmlns: ""
      };
      Hu(t = t || {});
      var o = Ae();
      var a = "";
      var s = 0;
      t.cellXfs = [];
      ms(t.cellXfs, {}, {
        revssf: {
          General: 0
        }
      });
      if (!e.Props) {
        e.Props = {};
      }
      _e(o, a = "docProps/core.xml", function (e, t) {
        var n = t || {};
        var r = [ve, lr];
        var i = {};
        if (!e && !n.Props) {
          return r.join("");
        }
        if (e) {
          if (null != e.CreatedDate) {
            fr("dcterms:created", "string" === typeof e.CreatedDate ? e.CreatedDate : Je(e.CreatedDate, n.WTF), {
              "xsi:type": "dcterms:W3CDTF"
            }, r, i);
          }
          if (null != e.ModifiedDate) {
            fr("dcterms:modified", "string" === typeof e.ModifiedDate ? e.ModifiedDate : Je(e.ModifiedDate, n.WTF), {
              "xsi:type": "dcterms:W3CDTF"
            }, r, i);
          }
        }
        for (var o = 0; o != sr.length; ++o) {
          var a = sr[o];
          var s = n.Props && null != n.Props[a[1]] ? n.Props[a[1]] : e ? e[a[1]] : null;
          if (true === s) {
            s = "1";
          } else {
            if (false === s) {
              s = "0";
            } else {
              if ("number" == typeof s) {
                s = String(s);
              }
            }
          }
          if (null != s) {
            fr(a[0], s, null, r, i);
          }
        }
        if (r.length > 2) {
          r[r.length] = "</cp:coreProperties>";
          r[1] = r[1].replace("/>", ">");
        }
        return r.join("");
      }(e.Props, t));
      i.coreprops.push(a);
      ir(t.rels, 2, a, Jn.CORE_PROPS);
      a = "docProps/app.xml";
      if (e.Props && e.Props.SheetNames) {
        ;
      } else if (e.Workbook && e.Workbook.Sheets) {
        for (var c = [], u = 0; u < e.SheetNames.length; ++u) {
          if (2 != (e.Workbook.Sheets[u] || {}).Hidden) {
            c.push(e.SheetNames[u]);
          }
        }
        e.Props.SheetNames = c;
      } else {
        e.Props.SheetNames = e.SheetNames;
      }
      for (e.Props.Worksheets = e.Props.SheetNames.length, _e(o, a, function (e) {
        var t = [];
        var n = $e;
        if (!e) {
          e = {};
        }
        e.Application = "SheetJS";
        t[t.length] = ve;
        t[t.length] = pr;
        dr.forEach(function (r) {
          if (undefined !== e[r[1]]) {
            var i;
            switch (r[2]) {
              case "string":
                i = Be(String(e[r[1]]));
                break;
              case "bool":
                i = e[r[1]] ? "true" : "false";
            }
            if (undefined !== i) {
              t[t.length] = n(r[0], i);
            }
          }
        });
        t[t.length] = n("HeadingPairs", n("vt:vector", n("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + n("vt:variant", n("vt:i4", String(e.Worksheets))), {
          size: 2,
          baseType: "variant"
        }));
        t[t.length] = n("TitlesOfParts", n("vt:vector", e.SheetNames.map(function (e) {
          return "<vt:lpstr>" + Be(e) + "</vt:lpstr>";
        }).join(""), {
          size: e.Worksheets,
          baseType: "lpstr"
        }));
        if (t.length > 2) {
          t[t.length] = "</Properties>";
          t[1] = t[1].replace("/>", ">");
        }
        return t.join("");
      }(e.Props)), i.extprops.push(a), ir(t.rels, 3, a, Jn.EXT_PROPS), e.Custprops !== e.Props && H(e.Custprops || {}).length > 0 && (_e(o, a = "docProps/custom.xml", gr(e.Custprops)), i.custprops.push(a), ir(t.rels, 4, a, Jn.CUST_PROPS)), s = 1; s <= e.SheetNames.length; ++s) {
        var l = {
          "!id": {}
        };
        var f = e.Sheets[e.SheetNames[s - 1]];
        switch ((f || {})["!type"] || "sheet") {
          case "chart":
          default:
            _e(o, a = "xl/worksheets/sheet" + s + "." + n, Sc(s - 1, a, t, e, l));
            i.sheets.push(a);
            ir(t.wbrels, -1, "worksheets/sheet" + s + "." + n, Jn.WS[0]);
        }
        if (f) {
          var d = f["!comments"];
          var h = false;
          if (d && d.length > 0) {
            var p = "xl/comments" + s + "." + n;
            _e(o, p, Bc(d, p, t));
            i.comments.push(p);
            ir(l, -1, "../comments" + s + "." + n, Jn.CMNT);
            h = true;
          }
          if (f["!legacy"] && h) {
            _e(o, "xl/drawings/vmlDrawing" + s + ".vml", oa(s, f["!comments"]));
          }
          delete f["!comments"];
          delete f["!legacy"];
        }
        if (l["!id"].rId1) {
          _e(o, Zn(a), nr(l));
        }
      }
      if (null != t.Strings && t.Strings.length > 0) {
        _e(o, a = "xl/sharedStrings." + n, Tc(t.Strings, a, t));
        i.strs.push(a);
        ir(t.wbrels, -1, "sharedStrings." + n, Jn.SST);
      }
      _e(o, a = "xl/workbook." + n, kc(e, a, t));
      i.workbooks.push(a);
      ir(t.rels, 1, a, Jn.WB);
      _e(o, a = "xl/theme/theme1.xml", ta(e.Themes, t));
      i.themes.push(a);
      ir(t.wbrels, -1, "theme/theme1.xml", Jn.THEME);
      _e(o, a = "xl/styles." + n, function (e, t, n) {
        return (".bin" === t.slice(-4) ? Qo : Fo)(e, n);
      }(e, a, t));
      i.styles.push(a);
      ir(t.wbrels, -1, "styles." + n, Jn.STY);
      if (e.vbaraw && r) {
        _e(o, a = "xl/vbaProject.bin", e.vbaraw);
        i.vba.push(a);
        ir(t.wbrels, -1, "vbaProject.bin", Jn.VBA);
      }
      _e(o, "[Content_Types].xml", function (e, t) {
        var n;
        var r = [];
        r[r.length] = ve;
        r[r.length] = qn;
        r = r.concat($n);
        var i = function (i) {
          if (e[i] && e[i].length > 0) {
            n = e[i][0];
            r[r.length] = $e("Override", null, {
              PartName: ("/" == n[0] ? "" : "/") + n,
              ContentType: Xn[i][t.bookType || "xlsx"]
            });
          }
        };
        var o = function (n) {
          (e[n] || []).forEach(function (e) {
            r[r.length] = $e("Override", null, {
              PartName: ("/" == e[0] ? "" : "/") + e,
              ContentType: Xn[n][t.bookType || "xlsx"]
            });
          });
        };
        var a = function (t) {
          (e[t] || []).forEach(function (e) {
            r[r.length] = $e("Override", null, {
              PartName: ("/" == e[0] ? "" : "/") + e,
              ContentType: Yn[t][0]
            });
          });
        };
        i("workbooks");
        o("sheets");
        o("charts");
        a("themes");
        ["strs", "styles"].forEach(i);
        ["coreprops", "extprops", "custprops"].forEach(a);
        a("vba");
        a("comments");
        a("drawings");
        if (r.length > 2) {
          r[r.length] = "</Types>";
          r[1] = r[1].replace("/>", ">");
        }
        return r.join("");
      }(i, t));
      _e(o, "_rels/.rels", nr(t.rels));
      _e(o, "xl/_rels/workbook." + n + ".rels", nr(t.wbrels));
      delete t.revssf;
      delete t.ssf;
      return o;
    }
    function Xu(e, t) {
      var n = "";
      switch ((t || {}).type || "base64") {
        case "buffer":
          return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
        case "base64":
          n = v.decode(e.slice(0, 12));
          break;
        case "binary":
          n = e;
          break;
        case "array":
          return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
        default:
          throw new Error("Unrecognized type " + (t && t.type || "undefined"));
      }
      return [n.charCodeAt(0), n.charCodeAt(1), n.charCodeAt(2), n.charCodeAt(3), n.charCodeAt(4), n.charCodeAt(5), n.charCodeAt(6), n.charCodeAt(7)];
    }
    function Yu(e, t) {
      var n = e;
      var r = t || {};
      if (!r.type) {
        r.type = m && i.isBuffer(e) ? "buffer" : "base64";
      }
      return Qu(function (e, t) {
        var n;
        if (se) {
          switch (t.type) {
            case "base64":
              n = new se(e, {
                base64: true
              });
              break;
            case "binary":
            case "array":
              n = new se(e, {
                base64: false
              });
              break;
            case "buffer":
              n = new se(e);
              break;
            default:
              throw new Error("Unrecognized type " + t.type);
          }
        } else {
          switch (t.type) {
            case "base64":
              n = j.read(e, {
                type: "base64"
              });
              break;
            case "binary":
              n = j.read(e, {
                type: "binary"
              });
              break;
            case "buffer":
            case "array":
              n = j.read(e, {
                type: "buffer"
              });
              break;
            default:
              throw new Error("Unrecognized type " + t.type);
          }
        }
        return n;
      }(n, r), r);
    }
    function qu(e, t) {
      var n = 0;
      e: for (; n < e.length;) {
        switch (e.charCodeAt(n)) {
          case 10:
          case 13:
          case 32:
            ++n;
            break;
          case 60:
            return Gc(e.slice(n), t);
          default:
            break e;
        }
      }
      return Hi.to_workbook(e, t);
    }
    function $u(e, t, n, r) {
      return r ? (n.type = "string", Hi.to_workbook(e, n)) : Hi.to_workbook(t, n);
    }
    function Ju(e, t) {
      h();
      if ("undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer) {
        return Ju(new Uint8Array(e), t);
      }
      var n;
      var r = e;
      var o = false;
      var a = t || {};
      if (a.cellStyles) {
        a.cellNF = true;
        a.sheetStubs = true;
      }
      ps = {};
      if (a.dateNF) {
        ps.dateNF = a.dateNF;
      }
      if (!a.type) {
        a.type = m && i.isBuffer(e) ? "buffer" : "base64";
      }
      if ("file" == a.type) {
        a.type = m ? "buffer" : "binary";
        r = function (e) {
          if ("undefined" !== typeof M) {
            return M.readFileSync(e);
          }
          if ("undefined" !== typeof $ && "undefined" !== typeof File && "undefined" !== typeof Folder) {
            try {
              var t = File(e);
              t.open("r");
              t.encoding = "binary";
              var n = t.read();
              t.close();
              return n;
            } catch (_l) {
              if (!_l.message || !_l.message.match(/onstruct/)) {
                throw _l;
              }
            }
          }
          throw new Error("Cannot access file " + e);
        }(e);
      }
      if ("string" == a.type) {
        o = true;
        a.type = "binary";
        a.codepage = 65001;
        r = function (e) {
          return e.match(/[^\x00-\x7F]/) ? je(e) : e;
        }(e);
      }
      if ("array" == a.type && "undefined" !== typeof Uint8Array && e instanceof Uint8Array && "undefined" !== typeof ArrayBuffer) {
        var s = new ArrayBuffer(3);
        var c = new Uint8Array(s);
        c.foo = "bar";
        if (!c.foo) {
          (a = re(a)).type = "array";
          return Ju(k(r), a);
        }
      }
      switch ((n = Xu(r, a))[0]) {
        case 208:
          if (207 === n[1] && 17 === n[2] && 224 === n[3] && 161 === n[4] && 177 === n[5] && 26 === n[6] && 225 === n[7]) {
            return function (e, t) {
              return j.find(e, "EncryptedPackage") ? Wu(e, t) : iu(e, t);
            }(j.read(r, a), a);
          }
          break;
        case 9:
          if (n[1] <= 4) {
            return iu(r, a);
          }
          break;
        case 60:
          return Gc(r, a);
        case 73:
          if (73 === n[1] && 42 === n[2] && 0 === n[3]) {
            throw new Error("TIFF Image File is not a spreadsheet");
          }
          if (68 === n[1]) {
            return function (e, t) {
              var n = t || {};
              var r = !!n.WTF;
              n.WTF = true;
              try {
                var i = ji.to_workbook(e, n);
                n.WTF = r;
                return i;
              } catch (_l) {
                n.WTF = r;
                if (!_l.message.match(/SYLK bad record ID/) && r) {
                  throw _l;
                }
                return Hi.to_workbook(e, t);
              }
            }(r, a);
          }
          break;
        case 84:
          if (65 === n[1] && 66 === n[2] && 76 === n[3]) {
            return Li.to_workbook(r, a);
          }
          break;
        case 80:
          return 75 === n[1] && n[2] < 9 && n[3] < 9 ? Yu(r, a) : $u(e, r, a, o);
        case 239:
          return 60 === n[3] ? Gc(r, a) : $u(e, r, a, o);
        case 255:
          if (254 === n[1]) {
            return function (e, t) {
              var n = e;
              if ("base64" == t.type) {
                n = v.decode(n);
              }
              n = cptable.utils.decode(1200, n.slice(2), "str");
              t.type = "binary";
              return qu(n, t);
            }(r, a);
          }
          break;
        case 0:
          if (0 === n[1] && n[2] >= 2 && 0 === n[3]) {
            return Vi.to_workbook(r, a);
          }
          break;
        case 3:
        case 131:
        case 139:
        case 140:
          return Mi.to_workbook(r, a);
        case 123:
          if (92 === n[1] && 114 === n[2] && 116 === n[3]) {
            return Ao.to_workbook(r, a);
          }
          break;
        case 10:
        case 13:
        case 32:
          return function (e, t) {
            var n = "";
            var r = Xu(e, t);
            switch (t.type) {
              case "base64":
                n = v.decode(e);
                break;
              case "binary":
                n = e;
                break;
              case "buffer":
                n = e.toString("binary");
                break;
              case "array":
                n = ne(e);
                break;
              default:
                throw new Error("Unrecognized type " + t.type);
            }
            if (239 == r[0] && 187 == r[1] && 191 == r[2]) {
              n = Me(n);
            }
            return qu(n, t);
          }(r, a);
      }
      return Mi.versions.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? Mi.to_workbook(r, a) : $u(e, r, a, o);
    }
    function Zu(e, t) {
      var n = t || {};
      n.type = "file";
      return Ju(e, n);
    }
    function el(e, t) {
      switch (t.type) {
        case "base64":
        case "binary":
          break;
        case "buffer":
        case "array":
          t.type = "";
          break;
        case "file":
          return U(t.file, j.write(e, {
            type: m ? "buffer" : ""
          }));
        case "string":
          throw new Error("'string' output type invalid for '" + t.bookType + "' files");
        default:
          throw new Error("Unrecognized type " + t.type);
      }
      return j.write(e, t);
    }
    function tl(e, t, n) {
      if (!n) {
        n = "";
      }
      var r = n + e;
      switch (t.type) {
        case "base64":
          return v.encode(je(r));
        case "binary":
          return je(r);
        case "string":
          return e;
        case "file":
          return U(t.file, r, "utf8");
        case "buffer":
          return m ? y(r, "utf8") : tl(r, {
            type: "binary"
          }).split("").map(function (e) {
            return e.charCodeAt(0);
          });
      }
      throw new Error("Unrecognized type " + t.type);
    }
    function nl(e, t) {
      switch (t.type) {
        case "string":
        case "base64":
        case "binary":
          for (var n = "", r = 0; r < e.length; ++r) {
            n += String.fromCharCode(e[r]);
          }
          return "base64" == t.type ? v.encode(n) : "string" == t.type ? Me(n) : n;
        case "file":
          return U(t.file, e);
        case "buffer":
          return e;
        default:
          throw new Error("Unrecognized type " + t.type);
      }
    }
    function rl(e, t) {
      h();
      fc(e);
      var n = t || {};
      if (n.cellStyles) {
        n.cellNF = true;
        n.sheetStubs = true;
      }
      if ("array" == n.type) {
        n.type = "binary";
        var r = rl(e, n);
        n.type = "array";
        return C(r);
      }
      switch (n.bookType || "xlsb") {
        case "xml":
        case "xlml":
          return tl(Yc(e, n), n);
        case "slk":
        case "sylk":
          return tl(Iu(e, n), n);
        case "htm":
        case "html":
          return tl(Bu(e, n), n);
        case "txt":
          return function (e, t) {
            switch (t.type) {
              case "base64":
                return v.encode(e);
              case "binary":
              case "string":
                return e;
              case "file":
                return U(t.file, e, "binary");
              case "buffer":
                return m ? y(e, "binary") : e.split("").map(function (e) {
                  return e.charCodeAt(0);
                });
            }
            throw new Error("Unrecognized type " + t.type);
          }(Nu(e, n), n);
        case "csv":
          return tl(Du(e, n), n, "﻿");
        case "dif":
          return tl(Fu(e, n), n);
        case "dbf":
          return nl(Mu(e, n), n);
        case "prn":
          return tl(Ru(e, n), n);
        case "rtf":
          return tl(Pu(e, n), n);
        case "eth":
          return tl(ju(e, n), n);
        case "fods":
          return tl(Su(e, n), n);
        case "biff2":
          if (!n.biff) {
            n.biff = 2;
          }
        case "biff3":
          if (!n.biff) {
            n.biff = 3;
          }
        case "biff4":
          if (!n.biff) {
            n.biff = 4;
          }
          return nl(vu(e, n), n);
        case "biff5":
          if (!n.biff) {
            n.biff = 5;
          }
        case "biff8":
        case "xla":
        case "xls":
          if (!n.biff) {
            n.biff = 8;
          }
          return function (e, t) {
            var n = t || {};
            return el(ou(e, n), n);
          }(e, n);
        case "xlsx":
        case "xlsm":
        case "xlam":
        case "xlsb":
        case "ods":
          return function (e, t) {
            var n = t || {};
            var r = Ku(e, n);
            var i = {};
            if (n.compression) {
              i.compression = "DEFLATE";
            }
            if (n.password) {
              i.type = m ? "nodebuffer" : "string";
            } else {
              switch (n.type) {
                case "base64":
                  i.type = "base64";
                  break;
                case "binary":
                  i.type = "string";
                  break;
                case "string":
                  throw new Error("'string' output type invalid for '" + n.bookType + "' files");
                case "buffer":
                case "file":
                  i.type = m ? "nodebuffer" : "string";
                  break;
                default:
                  throw new Error("Unrecognized type " + n.type);
              }
            }
            var o = r.FullPaths ? j.write(r, {
              fileType: "zip",
              type: {
                nodebuffer: "buffer",
                string: "binary"
              }[i.type] || i.type
            }) : r.generate(i);
            return n.password && "undefined" !== typeof encrypt_agile ? el(encrypt_agile(o, n.password), n) : "file" === n.type ? U(n.file, o) : "string" == n.type ? Me(o) : o;
          }(e, n);
        default:
          throw new Error("Unrecognized bookType |" + n.bookType + "|");
      }
    }
    function il(e) {
      if (!e.bookType) {
        var t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
        if (t.match(/^\.[a-z]+$/)) {
          e.bookType = t.slice(1);
        }
        e.bookType = {
          xls: "biff8",
          htm: "html",
          slk: "sylk",
          socialcalc: "eth",
          Sh33tJS: "WTF"
        }[e.bookType] || e.bookType;
      }
    }
    function ol(e, t, n) {
      var r = n || {};
      r.type = "file";
      r.file = t;
      il(r);
      return rl(e, r);
    }
    function al(e, t, n, r, i, o, a, s) {
      var c = Yt(n);
      var u = s.defval;
      var l = s.raw || !Object.prototype.hasOwnProperty.call(s, "raw");
      var f = true;
      var d = 1 === i ? [] : {};
      if (1 !== i) {
        if (Object.defineProperty) {
          try {
            Object.defineProperty(d, "__rowNum__", {
              value: n,
              enumerable: false
            });
          } catch (_l) {
            d.__rowNum__ = n;
          }
        } else {
          d.__rowNum__ = n;
        }
      }
      if (!a || e[n]) {
        for (var h = t.s.c; h <= t.e.c; ++h) {
          var p = a ? e[n][h] : e[r[h] + c];
          if (undefined !== p && undefined !== p.t) {
            var _ = p.v;
            switch (p.t) {
              case "z":
                if (null == _) {
                  break;
                }
                continue;
              case "e":
                _ = undefined;
                break;
              case "s":
              case "d":
              case "b":
              case "n":
                break;
              default:
                throw new Error("unrecognized type " + p.t);
            }
            if (null != o[h]) {
              if (null == _) {
                if (undefined !== u) {
                  d[o[h]] = u;
                } else {
                  if (!l || null !== _) {
                    continue;
                  }
                  d[o[h]] = null;
                }
              } else {
                d[o[h]] = l || s.rawNumbers && "n" == p.t ? _ : on(p, _, s);
              }
              if (null != _) {
                f = false;
              }
            }
          } else {
            if (undefined === u) {
              continue;
            }
            if (null != o[h]) {
              d[o[h]] = u;
            }
          }
        }
      }
      return {
        row: d,
        isempty: f
      };
    }
    function sl(e, t) {
      if (null == e || null == e["!ref"]) {
        return [];
      }
      var n = {
        t: "n",
        v: 0
      };
      var r = 0;
      var i = 1;
      var o = [];
      var a = 0;
      var s = "";
      var c = {
        s: {
          r: 0,
          c: 0
        },
        e: {
          r: 0,
          c: 0
        }
      };
      var u = t || {};
      var l = null != u.range ? u.range : e["!ref"];
      switch (1 === u.header ? r = 1 : "A" === u.header ? r = 2 : Array.isArray(u.header) ? r = 3 : null == u.header && (r = 0), typeof l) {
        case "string":
          c = nn(l);
          break;
        case "number":
          (c = nn(e["!ref"])).s.r = l;
          break;
        default:
          c = l;
      }
      if (r > 0) {
        i = 0;
      }
      var f = Yt(c.s.r);
      var d = [];
      var h = [];
      var p = 0;
      var _ = 0;
      var A = Array.isArray(e);
      var g = c.s.r;
      var v = 0;
      var m = 0;
      for (A && !e[g] && (e[g] = []), v = c.s.c; v <= c.e.c; ++v) {
        switch (d[v] = $t(v), n = A ? e[g][v] : e[d[v] + f], r) {
          case 1:
            o[v] = v - c.s.c;
            break;
          case 2:
            o[v] = d[v];
            break;
          case 3:
            o[v] = u.header[v - c.s.c];
            break;
          default:
            for (null == n && (n = {
              w: "__EMPTY",
              t: "s"
            }), s = a = on(n, null, u), _ = 0, m = 0; m < o.length; ++m) {
              if (o[m] == s) {
                s = a + "_" + ++_;
              }
            }
            o[v] = s;
        }
      }
      for (g = c.s.r + i; g <= c.e.r; ++g) {
        var y = al(e, c, g, d, r, o, A, u);
        if (false === y.isempty || (1 === r ? false !== u.blankrows : u.blankrows)) {
          h[p++] = y.row;
        }
      }
      h.length = p;
      return h;
    }
    var cl = /"/g;
    function ul(e, t, n, r, i, o, a, s) {
      for (var c = true, u = [], l = "", f = Yt(n), d = t.s.c; d <= t.e.c; ++d) {
        if (r[d]) {
          var h = s.dense ? (e[n] || [])[d] : e[r[d] + f];
          if (null == h) {
            l = "";
          } else if (null != h.v) {
            c = false;
            l = "" + (s.rawNumbers && "n" == h.t ? h.v : on(h, null, s));
            for (var p = 0, _ = 0; p !== l.length; ++p) {
              if ((_ = l.charCodeAt(p)) === i || _ === o || 34 === _ || s.forceQuotes) {
                l = "\"" + l.replace(cl, "\"\"") + "\"";
                break;
              }
            }
            if ("ID" == l) {
              l = "\"ID\"";
            }
          } else if (null == h.f || h.F) {
            l = "";
          } else {
            c = false;
            if ((l = "=" + h.f).indexOf(",") >= 0) {
              l = "\"" + l.replace(cl, "\"\"") + "\"";
            }
          }
          u.push(l);
        }
      }
      return false === s.blankrows && c ? null : u.join(a);
    }
    function ll(e, t) {
      var n = [];
      var r = null == t ? {} : t;
      if (null == e || null == e["!ref"]) {
        return "";
      }
      var i = nn(e["!ref"]);
      var o = undefined !== r.FS ? r.FS : ",";
      var a = o.charCodeAt(0);
      var s = undefined !== r.RS ? r.RS : "\n";
      var c = s.charCodeAt(0);
      var u = new RegExp(("|" == o ? "\\|" : o) + "+$");
      var l = "";
      var f = [];
      r.dense = Array.isArray(e);
      for (var d = r.skipHidden && e["!cols"] || [], h = r.skipHidden && e["!rows"] || [], p = i.s.c; p <= i.e.c; ++p) {
        if (!(d[p] || {}).hidden) {
          f[p] = $t(p);
        }
      }
      for (var _ = i.s.r; _ <= i.e.r; ++_) {
        if (!(h[_] || {}).hidden) {
          if (null != (l = ul(e, i, _, f, a, c, o, r))) {
            if (r.strip) {
              l = l.replace(u, "");
            }
            n.push(l + s);
          }
        }
      }
      delete r.dense;
      return n.join("");
    }
    function fl(e, t) {
      if (!t) {
        t = {};
      }
      t.FS = "\t";
      t.RS = "\n";
      var n = ll(e, t);
      if ("undefined" == typeof cptable || "string" == t.type) {
        return n;
      }
      var r = cptable.utils.encode(1200, n, "str");
      return String.fromCharCode(255) + String.fromCharCode(254) + r;
    }
    function dl(e) {
      var t;
      var n = "";
      var r = "";
      if (null == e || null == e["!ref"]) {
        return [];
      }
      var i;
      var o = nn(e["!ref"]);
      var a = "";
      var s = [];
      var c = [];
      var u = Array.isArray(e);
      for (i = o.s.c; i <= o.e.c; ++i) {
        s[i] = $t(i);
      }
      for (var l = o.s.r; l <= o.e.r; ++l) {
        for (a = Yt(l), i = o.s.c; i <= o.e.c; ++i) {
          n = s[i] + a;
          r = "";
          if (undefined !== (t = u ? (e[l] || [])[i] : e[n])) {
            if (null != t.F) {
              n = t.F;
              if (!t.f) {
                continue;
              }
              r = t.f;
              if (-1 == n.indexOf(":")) {
                n = n + ":" + n;
              }
            }
            if (null != t.f) {
              r = t.f;
            } else {
              if ("z" == t.t) {
                continue;
              }
              if ("n" == t.t && null != t.v) {
                r = "" + t.v;
              } else if ("b" == t.t) {
                r = t.v ? "TRUE" : "FALSE";
              } else if (undefined !== t.w) {
                r = "'" + t.w;
              } else {
                if (undefined === t.v) {
                  continue;
                }
                r = "s" == t.t ? "'" + t.v : "" + t.v;
              }
            }
            c[c.length] = n + "=" + r;
          }
        }
      }
      return c;
    }
    function hl(e, t, n) {
      var r;
      var i = n || {};
      var o = +!i.skipHeader;
      var a = e || {};
      var s = 0;
      var c = 0;
      if (a && null != i.origin) {
        if ("number" == typeof i.origin) {
          s = i.origin;
        } else {
          var u = "string" == typeof i.origin ? Jt(i.origin) : i.origin;
          s = u.r;
          c = u.c;
        }
      }
      var l = {
        s: {
          c: 0,
          r: 0
        },
        e: {
          c: c,
          r: s + t.length - 1 + o
        }
      };
      if (a["!ref"]) {
        var f = nn(a["!ref"]);
        l.e.c = Math.max(l.e.c, f.e.c);
        l.e.r = Math.max(l.e.r, f.e.r);
        if (-1 == s) {
          s = f.e.r + 1;
          l.e.r = s + t.length - 1 + o;
        }
      } else if (-1 == s) {
        s = 0;
        l.e.r = t.length - 1 + o;
      }
      var d = i.header || [];
      var h = 0;
      t.forEach(function (e, t) {
        H(e).forEach(function (n) {
          if (-1 == (h = d.indexOf(n))) {
            d[h = d.length] = n;
          }
          var u = e[n];
          var l = "z";
          var f = "";
          var p = Zt({
            c: c + h,
            r: s + t + o
          });
          r = pl.sheet_get_cell(a, p);
          if (!u || "object" !== typeof u || u instanceof Date) {
            if ("number" == typeof u) {
              l = "n";
            } else {
              if ("boolean" == typeof u) {
                l = "b";
              } else {
                if ("string" == typeof u) {
                  l = "s";
                } else {
                  if (u instanceof Date) {
                    l = "d";
                    if (!i.cellDates) {
                      l = "n";
                      u = W(u);
                    }
                    f = i.dateNF || D._table[14];
                  }
                }
              }
            }
            if (r) {
              r.t = l;
              r.v = u;
              delete r.w;
              delete r.R;
              if (f) {
                r.z = f;
              }
            } else {
              a[p] = r = {
                t: l,
                v: u
              };
            }
            if (f) {
              r.z = f;
            }
          } else {
            a[p] = u;
          }
        });
      });
      l.e.c = Math.max(l.e.c, c + d.length - 1);
      var p = Yt(s);
      if (o) {
        for (h = 0; h < d.length; ++h) {
          a[$t(h + c) + p] = {
            t: "s",
            v: d[h]
          };
        }
      }
      a["!ref"] = tn(l);
      return a;
    }
    var pl = {
      encode_col: $t,
      encode_row: Yt,
      encode_cell: Zt,
      encode_range: tn,
      decode_col: qt,
      decode_row: Xt,
      split_cell: function (e) {
        return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
      },
      decode_cell: Jt,
      decode_range: en,
      format_cell: on,
      get_formulae: dl,
      make_csv: ll,
      make_json: sl,
      make_formulae: dl,
      sheet_add_aoa: sn,
      sheet_add_json: hl,
      sheet_add_dom: yu,
      aoa_to_sheet: cn,
      json_to_sheet: function (e, t) {
        return hl(null, e, t);
      },
      table_to_sheet: bu,
      table_to_book: function (e, t) {
        return an(bu(e, t), t);
      },
      sheet_to_csv: ll,
      sheet_to_txt: fl,
      sheet_to_json: sl,
      sheet_to_html: mu.from_sheet,
      sheet_to_formulae: dl,
      sheet_to_row_object_array: sl
    };
    !function (e) {
      function t(e, t, n) {
        return null != e[t] ? e[t] : e[t] = n;
      }
      function n(e, t, r) {
        if ("string" == typeof t) {
          if (Array.isArray(e)) {
            var i = Jt(t);
            if (!e[i.r]) {
              e[i.r] = [];
            }
            return e[i.r][i.c] || (e[i.r][i.c] = {
              t: "z"
            });
          }
          return e[t] || (e[t] = {
            t: "z"
          });
        }
        return n(e, Zt("number" != typeof t ? t : {
          r: t,
          c: r || 0
        }));
      }
      e.consts = e.consts || {};
      e.sheet_get_cell = n;
      e.book_new = function () {
        return {
          SheetNames: [],
          Sheets: {}
        };
      };
      e.book_append_sheet = function (e, t, n) {
        if (!n) {
          for (var r = 1; r <= 65535 && -1 != e.SheetNames.indexOf(n = "Sheet" + r); ++r, n = undefined) {
            ;
          }
        }
        if (!n || e.SheetNames.length >= 65535) {
          throw new Error("Too many worksheets");
        }
        lc(n);
        if (e.SheetNames.indexOf(n) >= 0) {
          throw new Error("Worksheet with name |" + n + "| already exists!");
        }
        e.SheetNames.push(n);
        e.Sheets[n] = t;
      };
      e.book_set_sheet_visibility = function (e, n, r) {
        t(e, "Workbook", {});
        t(e.Workbook, "Sheets", []);
        var i = function (e, t) {
          if ("number" == typeof t) {
            if (t >= 0 && e.SheetNames.length > t) {
              return t;
            }
            throw new Error("Cannot find sheet # " + t);
          }
          if ("string" == typeof t) {
            var n = e.SheetNames.indexOf(t);
            if (n > -1) {
              return n;
            }
            throw new Error("Cannot find sheet name |" + t + "|");
          }
          throw new Error("Cannot find sheet |" + t + "|");
        }(e, n);
        switch (t(e.Workbook.Sheets, i, {}), r) {
          case 0:
          case 1:
          case 2:
            break;
          default:
            throw new Error("Bad sheet visibility setting " + r);
        }
        e.Workbook.Sheets[i].Hidden = r;
      };
      [["SHEET_VISIBLE", 0], ["SHEET_HIDDEN", 1], ["SHEET_VERY_HIDDEN", 2]].forEach(function (t) {
        e.consts[t[0]] = t[1];
      });
      e.cell_set_number_format = function (e, t) {
        e.z = t;
        return e;
      };
      e.cell_set_hyperlink = function (e, t, n) {
        if (t) {
          e.l = {
            Target: t
          };
          if (n) {
            e.l.Tooltip = n;
          }
        } else {
          delete e.l;
        }
        return e;
      };
      e.cell_set_internal_link = function (t, n, r) {
        return e.cell_set_hyperlink(t, "#" + n, r);
      };
      e.cell_add_comment = function (e, t, n) {
        if (!e.c) {
          e.c = [];
        }
        e.c.push({
          t: t,
          a: n || "SheetJS"
        });
      };
      e.sheet_set_array_formula = function (e, t, r) {
        for (var i = "string" != typeof t ? t : nn(t), o = "string" == typeof t ? t : tn(t), a = i.s.r; a <= i.e.r; ++a) {
          for (var s = i.s.c; s <= i.e.c; ++s) {
            var c = n(e, a, s);
            c.t = "n";
            c.F = o;
            delete c.v;
            if (a == i.s.r && s == i.s.c) {
              c.f = r;
            }
          }
        }
        return e;
      };
    }(pl);
    if (m) {
      (function () {
        var e = require("./1083").Readable;
        t.stream = {
          to_json: function (t, n) {
            var r = e({
              objectMode: true
            });
            if (null == t || null == t["!ref"]) {
              r.push(null);
              return r;
            }
            var i = {
              t: "n",
              v: 0
            };
            var o = 0;
            var a = 1;
            var s = [];
            var c = 0;
            var u = "";
            var l = {
              s: {
                r: 0,
                c: 0
              },
              e: {
                r: 0,
                c: 0
              }
            };
            var f = n || {};
            var d = null != f.range ? f.range : t["!ref"];
            switch (1 === f.header ? o = 1 : "A" === f.header ? o = 2 : Array.isArray(f.header) && (o = 3), typeof d) {
              case "string":
                l = nn(d);
                break;
              case "number":
                (l = nn(t["!ref"])).s.r = d;
                break;
              default:
                l = d;
            }
            if (o > 0) {
              a = 0;
            }
            var h = Yt(l.s.r);
            var p = [];
            var _ = 0;
            var A = Array.isArray(t);
            var g = l.s.r;
            var v = 0;
            var m = 0;
            for (A && !t[g] && (t[g] = []), v = l.s.c; v <= l.e.c; ++v) {
              switch (p[v] = $t(v), i = A ? t[g][v] : t[p[v] + h], o) {
                case 1:
                  s[v] = v - l.s.c;
                  break;
                case 2:
                  s[v] = p[v];
                  break;
                case 3:
                  s[v] = f.header[v - l.s.c];
                  break;
                default:
                  for (null == i && (i = {
                    w: "__EMPTY",
                    t: "s"
                  }), u = c = on(i, null, f), _ = 0, m = 0; m < s.length; ++m) {
                    if (s[m] == u) {
                      u = c + "_" + ++_;
                    }
                  }
                  s[v] = u;
              }
            }
            g = l.s.r + a;
            r._read = function () {
              if (g > l.e.r) {
                return r.push(null);
              }
              for (; g <= l.e.r;) {
                var e = al(t, l, g, p, o, s, A, f);
                ++g;
                if (false === e.isempty || (1 === o ? false !== f.blankrows : f.blankrows)) {
                  r.push(e.row);
                  break;
                }
              }
            };
            return r;
          },
          to_html: function (t, n) {
            var r = e();
            var i = n || {};
            var o = null != i.header ? i.header : mu.BEGIN;
            var a = null != i.footer ? i.footer : mu.END;
            r.push(o);
            var s = en(t["!ref"]);
            i.dense = Array.isArray(t);
            r.push(mu._preamble(t, s, i));
            var c = s.s.r;
            var u = false;
            r._read = function () {
              if (c > s.e.r) {
                if (!u) {
                  u = true;
                  r.push("</table>" + a);
                }
                return r.push(null);
              }
              for (; c <= s.e.r;) {
                r.push(mu._row(t, s, c, i));
                ++c;
                break;
              }
            };
            return r;
          },
          to_csv: function (t, n) {
            var r = e();
            var i = null == n ? {} : n;
            if (null == t || null == t["!ref"]) {
              r.push(null);
              return r;
            }
            var o = nn(t["!ref"]);
            var a = undefined !== i.FS ? i.FS : ",";
            var s = a.charCodeAt(0);
            var c = undefined !== i.RS ? i.RS : "\n";
            var u = c.charCodeAt(0);
            var l = new RegExp(("|" == a ? "\\|" : a) + "+$");
            var f = "";
            var d = [];
            i.dense = Array.isArray(t);
            for (var h = i.skipHidden && t["!cols"] || [], p = i.skipHidden && t["!rows"] || [], _ = o.s.c; _ <= o.e.c; ++_) {
              if (!(h[_] || {}).hidden) {
                d[_] = $t(_);
              }
            }
            var A = o.s.r;
            var g = false;
            r._read = function () {
              if (!g) {
                g = true;
                return r.push("﻿");
              }
              for (; A <= o.e.r;) {
                ++A;
                if (!(p[A - 1] || {}).hidden && null != (f = ul(t, o, A - 1, d, s, u, a, i))) {
                  if (i.strip) {
                    f = f.replace(l, "");
                  }
                  r.push(f + c);
                  break;
                }
              }
              return A > o.e.r ? r.push(null) : undefined;
            };
            return r;
          }
        };
      })();
    }
    t.parse_xlscfb = iu;
    t.parse_zip = Qu;
    t.read = Ju;
    t.readFile = Zu;
    t.readFileSync = Zu;
    t.write = rl;
    t.writeFile = ol;
    t.writeFileSync = ol;
    t.writeFileAsync = function (e, t, n, r) {
      var i = n || {};
      i.type = "file";
      i.file = e;
      il(i);
      i.type = "buffer";
      var o = r;
      if (!(o instanceof Function)) {
        o = n;
      }
      return M.writeFile(e, rl(t, i), o);
    };
    t.utils = pl;
    t.SSF = D;
    if ("undefined" !== typeof j) {
      t.CFB = j;
    }
  })(exports);
}).call(this, require("../../710/251"), require("../../616/570/index").Buffer, require("../../710/368"));