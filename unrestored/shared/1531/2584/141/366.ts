/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：366
 */

module.exports = function () {
  try {
    var e = function () {
      this.sendingData = 0;
      this.sendingItemKeys = [];
    };
    var t = {
      modules: {}
    };
    var n = t._ = {};
    (function () {
      var e = {
        function: true,
        object: true
      };
      var t = e[typeof window] && window || this;
      var n = t.JSON;
      var r = t.JSON3;
      var i = false;
      var o = function n(r, i) {
        if (!r) {
          r = t.Object();
        }
        if (!i) {
          i = t.Object();
        }
        var o = r.Number || t.Number;
        var a = r.String || t.String;
        var s = r.Object || t.Object;
        var c = r.Date || t.Date;
        var u = r.SyntaxError || t.SyntaxError;
        var l = r.TypeError || t.TypeError;
        var f = r.Math || t.Math;
        var d = r.JSON || t.JSON;
        if ("object" == typeof d && d) {
          i.stringify = d.stringify;
          i.parse = d.parse;
        }
        var h;
        var p = s.prototype;
        var _ = p.toString;
        var A = p.hasOwnProperty;
        function g(e, t) {
          try {
            e();
          } catch (r) {
            if (t) {
              t();
            }
          }
        }
        var v = new c(-0xc782b5b800cec);
        function m(e) {
          if (null != m[e]) {
            return m[e];
          }
          var t;
          if ("bug-string-char-index" == e) {
            t = "a" != "a"[0];
          } else if ("json" == e) {
            t = m("json-stringify") && m("date-serialization") && m("json-parse");
          } else if ("date-serialization" == e) {
            if (t = m("json-stringify") && v) {
              var n = i.stringify;
              g(function () {
                t = "\"-271821-04-20T00:00:00.000Z\"" == n(new c(-864e13)) && "\"+275760-09-13T00:00:00.000Z\"" == n(new c(864e13)) && "\"-000001-01-01T00:00:00.000Z\"" == n(new c(-621987552e5)) && "\"1969-12-31T23:59:59.999Z\"" == n(new c(-1));
              });
            }
          } else {
            var r;
            var s = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";
            if ("json-stringify" == e) {
              var u = "function" == typeof (n = i.stringify);
              if (u) {
                (r = function () {
                  return 1;
                }).toJSON = r;
                g(function () {
                  u = "0" === n(0) && "0" === n(new o()) && "\"\"" == n(new a()) && n(_) === h && n(h) === h && n() === h && "1" === n(r) && "[1]" == n([r]) && "[null]" == n([h]) && "null" == n(null) && "[null,null,null]" == n([h, _, null]) && n({
                    a: [r, true, false, null, "\u0000\b\n\f\r\t"]
                  }) == s && "1" === n(null, r) && "[\n 1,\n 2\n]" == n([1, 2], null, 1);
                }, function () {
                  u = false;
                });
              }
              t = u;
            }
            if ("json-parse" == e) {
              var l;
              var f = i.parse;
              if ("function" == typeof f) {
                g(function () {
                  if (!(0 !== f("0") || f(false))) {
                    r = f(s);
                    if (l = 5 == r.a.length && 1 === r.a[0]) {
                      g(function () {
                        l = !f("\"\t\"");
                      });
                      if (l) {
                        g(function () {
                          l = 1 !== f("01");
                        });
                      }
                      if (l) {
                        g(function () {
                          l = 1 !== f("1.");
                        });
                      }
                    }
                  }
                }, function () {
                  l = false;
                });
              }
              t = l;
            }
          }
          return m[e] = !!t;
        }
        g(function () {
          v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds();
        });
        m["bug-string-char-index"] = m["date-serialization"] = m.json = m["json-stringify"] = m["json-parse"] = null;
        if (!m("json")) {
          var y = m("bug-string-char-index");
          var b = function (t, n) {
            var r;
            var i;
            var o;
            var a = 0;
            for (o in (r = function () {
              this.valueOf = 0;
            }).prototype.valueOf = 0, i = new r()) if (A.call(i, o)) {
              a++;
            }
            r = i = null;
            if (a) {
              b = function (e, t) {
                var n;
                var r;
                var i = "[object Function]" == _.call(e);
                for (n in e) if (!(i && "prototype" == n || !A.call(e, n) || (r = "constructor" === n))) {
                  t(n);
                }
                if (r || A.call(e, n = "constructor")) {
                  t(n);
                }
              };
            } else {
              i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
              b = function (t, n) {
                var r;
                var o;
                var a = "[object Function]" == _.call(t);
                var s = !a && "function" != typeof t.constructor && e[typeof t.hasOwnProperty] && t.hasOwnProperty || A;
                for (r in t) if (!(a && "prototype" == r || !s.call(t, r))) {
                  n(r);
                }
                for (o = i.length; r = i[--o];) {
                  if (s.call(t, r)) {
                    n(r);
                  }
                }
              };
            }
            return b(t, n);
          };
          if (!m("json-stringify") && !m("date-serialization")) {
            var w = {
              92: "\\\\",
              34: "\\\"",
              8: "\\b",
              12: "\\f",
              10: "\\n",
              13: "\\r",
              9: "\\t"
            };
            var E = function (e, t) {
              return ("000000" + (t || 0)).slice(-e);
            };
            var x = function (e) {
              var t;
              var n;
              var r;
              var i;
              var o;
              var a;
              var s;
              var c;
              var u;
              if (v) {
                t = function (e) {
                  n = e.getUTCFullYear();
                  r = e.getUTCMonth();
                  i = e.getUTCDate();
                  a = e.getUTCHours();
                  s = e.getUTCMinutes();
                  c = e.getUTCSeconds();
                  u = e.getUTCMilliseconds();
                };
              } else {
                var l = f.floor;
                var d = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                var h = function (e, t) {
                  return d[t] + 365 * (e - 1970) + l((e - 1969 + (t = +(t > 1))) / 4) - l((e - 1901 + t) / 100) + l((e - 1601 + t) / 400);
                };
                t = function (e) {
                  for (i = l(e / 864e5), n = l(i / 365.2425) + 1970 - 1; h(n + 1, 0) <= i; n++) {
                    ;
                  }
                  for (r = l((i - h(n, 0)) / 30.42); h(n, r + 1) <= i; r++) {
                    ;
                  }
                  i = 1 + i - h(n, r);
                  a = l((o = (e % 864e5 + 864e5) % 864e5) / 36e5) % 24;
                  s = l(o / 6e4) % 60;
                  c = l(o / 1e3) % 60;
                  u = o % 1e3;
                };
              }
              return (x = function (e) {
                if (e > -1 / 0 && e < 1 / 0) {
                  t(e);
                  e = (n <= 0 || n >= 1e4 ? (n < 0 ? "-" : "+") + E(6, n < 0 ? -n : n) : E(4, n)) + "-" + E(2, r + 1) + "-" + E(2, i) + "T" + E(2, a) + ":" + E(2, s) + ":" + E(2, c) + "." + E(3, u) + "Z";
                  n = r = i = a = s = c = u = null;
                } else {
                  e = null;
                }
                return e;
              })(e);
            };
            if (m("json-stringify") && !m("date-serialization")) {
              var C = function (e) {
                return x(this);
              };
              var O = i.stringify;
              i.stringify = function (e, t, n) {
                var r = c.prototype.toJSON;
                c.prototype.toJSON = C;
                var i = O(e, t, n);
                c.prototype.toJSON = r;
                return i;
              };
            } else {
              var k = function (e) {
                var t = e.charCodeAt(0);
                return w[t] || "\\u00" + E(2, t.toString(16));
              };
              var S = /[\x00-\x1f\x22\x5c]/g;
              var T = function (e) {
                S.lastIndex = 0;
                return "\"" + (S.test(e) ? e.replace(S, k) : e) + "\"";
              };
              var B = function e(t, n, r, i, o, a, s) {
                var u;
                var f;
                var d;
                var p;
                var A;
                var v;
                var m;
                var y;
                var w;
                g(function () {
                  u = n[t];
                });
                if ("object" == typeof u && u) {
                  if (u.getUTCFullYear && "[object Date]" == _.call(u) && u.toJSON === c.prototype.toJSON) {
                    u = x(u);
                  } else {
                    if ("function" == typeof u.toJSON) {
                      u = u.toJSON(t);
                    }
                  }
                }
                if (r) {
                  u = r.call(n, t, u);
                }
                if (u == h) {
                  return u === h ? u : "null";
                }
                switch ("object" == (f = typeof u) && (d = _.call(u)), d || f) {
                  case "boolean":
                  case "[object Boolean]":
                    return "" + u;
                  case "number":
                  case "[object Number]":
                    return u > -1 / 0 && u < 1 / 0 ? "" + u : "null";
                  case "string":
                  case "[object String]":
                    return T("" + u);
                }
                if ("object" == typeof u) {
                  for (m = s.length; m--;) {
                    if (s[m] === u) {
                      throw l();
                    }
                  }
                  s.push(u);
                  p = [];
                  y = a;
                  a += o;
                  if ("[object Array]" == d) {
                    for (v = 0, m = u.length; v < m; v++) {
                      A = e(v, u, r, i, o, a, s);
                      p.push(A === h ? "null" : A);
                    }
                    w = p.length ? o ? "[\n" + a + p.join(",\n" + a) + "\n" + y + "]" : "[" + p.join(",") + "]" : "[]";
                  } else {
                    b(i || u, function (t) {
                      var n = e(t, u, r, i, o, a, s);
                      if (n !== h) {
                        p.push(T(t) + ":" + (o ? " " : "") + n);
                      }
                    });
                    w = p.length ? o ? "{\n" + a + p.join(",\n" + a) + "\n" + y + "}" : "{" + p.join(",") + "}" : "{}";
                  }
                  s.pop();
                  return w;
                }
              };
              i.stringify = function (t, n, r) {
                var i;
                var o;
                var a;
                var s;
                if (e[typeof n] && n) {
                  if ("[object Function]" == (s = _.call(n))) {
                    o = n;
                  } else if ("[object Array]" == s) {
                    a = {};
                    for (var c, u = 0, l = n.length; u < l;) {
                      c = n[u++];
                      if (!("[object String]" != (s = _.call(c)) && "[object Number]" != s)) {
                        a[c] = 1;
                      }
                    }
                  }
                }
                if (r) {
                  if ("[object Number]" == (s = _.call(r))) {
                    if ((r -= r % 1) > 0) {
                      for (r > 10 && (r = 10), i = ""; i.length < r;) {
                        i += " ";
                      }
                    }
                  } else if ("[object String]" == s) {
                    i = r.length <= 10 ? r : r.slice(0, 10);
                  }
                }
                return B("", ((c = {})[""] = t, c), o, a, i, "", []);
              };
            }
          }
          if (!m("json-parse")) {
            var D;
            var I;
            var F = a.fromCharCode;
            var R = {
              92: "\\",
              34: "\"",
              47: "/",
              98: "\b",
              116: "\t",
              110: "\n",
              102: "\f",
              114: "\r"
            };
            var P = function () {
              D = I = null;
              throw u();
            };
            var N = function () {
              for (var e, t, n, r, i, o = I, a = o.length; D < a;) {
                switch (i = o.charCodeAt(D)) {
                  case 9:
                  case 10:
                  case 13:
                  case 32:
                    D++;
                    break;
                  case 123:
                  case 125:
                  case 91:
                  case 93:
                  case 58:
                  case 44:
                    e = y ? o.charAt(D) : o[D];
                    D++;
                    return e;
                  case 34:
                    for (e = "@", D++; D < a;) {
                      if ((i = o.charCodeAt(D)) < 32) {
                        P();
                      } else if (92 == i) {
                        switch (i = o.charCodeAt(++D)) {
                          case 92:
                          case 34:
                          case 47:
                          case 98:
                          case 116:
                          case 110:
                          case 102:
                          case 114:
                            e += R[i];
                            D++;
                            break;
                          case 117:
                            for (t = ++D, n = D + 4; D < n; D++) {
                              if (!((i = o.charCodeAt(D)) >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70)) {
                                P();
                              }
                            }
                            e += F("0x" + o.slice(t, D));
                            break;
                          default:
                            P();
                        }
                      } else {
                        if (34 == i) {
                          break;
                        }
                        for (i = o.charCodeAt(D), t = D; i >= 32 && 92 != i && 34 != i;) {
                          i = o.charCodeAt(++D);
                        }
                        e += o.slice(t, D);
                      }
                    }
                    if (34 == o.charCodeAt(D)) {
                      D++;
                      return e;
                    }
                    P();
                  default:
                    if (t = D, 45 == i && (r = true, i = o.charCodeAt(++D)), i >= 48 && i <= 57) {
                      for (48 == i && (i = o.charCodeAt(D + 1)) >= 48 && i <= 57 && P(), r = false; D < a && (i = o.charCodeAt(D)) >= 48 && i <= 57; D++) {
                        ;
                      }
                      if (46 == o.charCodeAt(D)) {
                        for (n = ++D; n < a && !((i = o.charCodeAt(n)) < 48 || i > 57); n++) {
                          ;
                        }
                        if (n == D) {
                          P();
                        }
                        D = n;
                      }
                      if (101 == (i = o.charCodeAt(D)) || 69 == i) {
                        for (43 != (i = o.charCodeAt(++D)) && 45 != i || D++, n = D; n < a && !((i = o.charCodeAt(n)) < 48 || i > 57); n++) {
                          ;
                        }
                        if (n == D) {
                          P();
                        }
                        D = n;
                      }
                      return +o.slice(t, D);
                    }
                    if (r) {
                      P();
                    }
                    var s = o.slice(D, D + 4);
                    if ("true" == s) {
                      D += 4;
                      return true;
                    }
                    if ("fals" == s && 101 == o.charCodeAt(D + 4)) {
                      D += 5;
                      return false;
                    }
                    if ("null" == s) {
                      D += 4;
                      return null;
                    }
                    P();
                }
              }
              return "$";
            };
            var M = function (e, t, n) {
              var r = j(e, t, n);
              if (r === h) {
                delete e[t];
              } else {
                e[t] = r;
              }
            };
            var j = function (e, t, n) {
              var r;
              var i = e[t];
              if ("object" == typeof i && i) {
                if ("[object Array]" == _.call(i)) {
                  for (r = i.length; r--;) {
                    M(_, b, i);
                  }
                } else {
                  b(i, function (e) {
                    M(i, e, n);
                  });
                }
              }
              return n.call(e, t, i);
            };
            i.parse = function (e, t) {
              var n;
              var r;
              D = 0;
              I = "" + e;
              n = function e(t) {
                var n;
                var r;
                if ("$" == t) {
                  P();
                }
                if ("string" == typeof t) {
                  if ("@" == (y ? t.charAt(0) : t[0])) {
                    return t.slice(1);
                  }
                  if ("[" == t) {
                    for (n = []; "]" != (t = N());) {
                      if (r) {
                        if ("," == t) {
                          if ("]" == (t = N())) {
                            P();
                          }
                        } else {
                          P();
                        }
                      } else {
                        r = true;
                      }
                      if ("," == t) {
                        P();
                      }
                      n.push(e(t));
                    }
                    return n;
                  }
                  if ("{" == t) {
                    for (n = {}; "}" != (t = N());) {
                      if (r) {
                        if ("," == t) {
                          if ("}" == (t = N())) {
                            P();
                          }
                        } else {
                          P();
                        }
                      } else {
                        r = true;
                      }
                      if (!("," != t && "string" == typeof t && "@" == (y ? t.charAt(0) : t[0]) && ":" == N())) {
                        P();
                      }
                      n[t.slice(1)] = e(N());
                    }
                    return n;
                  }
                  P();
                }
                return t;
              }(N());
              if ("$" != N()) {
                P();
              }
              D = I = null;
              return t && "[object Function]" == _.call(t) ? j(((r = {})[""] = n, r), "", t) : n;
            };
          }
        }
        i.runInContext = n;
        return i;
      }(t, t.JSON3 = {
        noConflict: function () {
          if (!i) {
            i = true;
            t.JSON = n;
            t.JSON3 = r;
            n = r = null;
          }
          return o;
        }
      });
      t.JSON = {
        parse: o.parse,
        stringify: o.stringify
      };
    }).call(this);
    (function (e) {
      if (e.atob) {
        try {
          e.atob(" ");
        } catch (s) {
          e.atob = (n = e.atob, (r = function (e) {
            return n(String(e).replace(/[\t\n\f\r ]+/g, ""));
          }).original = n, r);
        }
      } else {
        var n;
        var r;
        var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
        e.btoa = function (e) {
          for (var n, r, o, a, s = "", c = 0, u = (e = String(e)).length % 3; c < e.length;) {
            if ((r = e.charCodeAt(c++)) > 255 || (o = e.charCodeAt(c++)) > 255 || (a = e.charCodeAt(c++)) > 255) {
              t.log("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
            }
            s += i.charAt((n = r << 16 | o << 8 | a) >> 18 & 63) + i.charAt(n >> 12 & 63) + i.charAt(n >> 6 & 63) + i.charAt(63 & n);
          }
          return u ? s.slice(0, u - 3) + "===".substring(u) : s;
        };
        e.atob = function (e) {
          e = String(e).replace(/[\t\n\f\r ]+/g, "");
          if (!o.test(e)) {
            t.log("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
          }
          e += "==".slice(2 - (3 & e.length));
          for (var n, r, a, s = "", c = 0; c < e.length;) {
            n = i.indexOf(e.charAt(c++)) << 18 | i.indexOf(e.charAt(c++)) << 12 | (r = i.indexOf(e.charAt(c++))) << 6 | (a = i.indexOf(e.charAt(c++)));
            s += 64 === r ? String.fromCharCode(n >> 16 & 255) : 64 === a ? String.fromCharCode(n >> 16 & 255, n >> 8 & 255) : String.fromCharCode(n >> 16 & 255, n >> 8 & 255, 255 & n);
          }
          return s;
        };
      }
    })(window);
    if (!String.prototype.replaceAll) {
      String.prototype.replaceAll = function (e, t) {
        return "[object regexp]" === Object.prototype.toString.call(e).toLowerCase() ? this.replace(e, t) : this.replace(new RegExp(e, "g"), t);
      };
    }
    _ = Array.prototype;
    A = Function.prototype;
    g = Object.prototype;
    v = _.slice;
    y = g.toString;
    b = g.hasOwnProperty;
    A.bind;
    w = _.forEach;
    _.indexOf;
    E = Array.isArray;
    x = {};
    C = n.each = function (e, t, r) {
      if (null == e) {
        return false;
      }
      if (w && e.forEach === w) {
        e.forEach(t, r);
      } else if (n.isArray(e) && e.length === +e.length) {
        for (var i = 0, o = e.length; i < o; i++) {
          if (i in e && t.call(r, e[i], i, e) === x) {
            return false;
          }
        }
      } else {
        for (var a in e) if (b.call(e, a) && t.call(r, e[a], a, e) === x) {
          return false;
        }
      }
    };
    n.map = function (e, t) {
      var n = [];
      return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (C(e, function (e, r, i) {
        n.push(t(e, r, i));
      }), n);
    };
    n.extend = function (e) {
      C(v.call(arguments, 1), function (t) {
        for (var n in t) if (b.call(t, n) && undefined !== t[n]) {
          e[n] = t[n];
        }
      });
      return e;
    };
    n.extend2Lev = function (e) {
      C(v.call(arguments, 1), function (t) {
        for (var r in t) if (undefined !== t[r]) {
          if (n.isObject(t[r]) && n.isObject(e[r])) {
            n.extend(e[r], t[r]);
          } else {
            e[r] = t[r];
          }
        }
      });
      return e;
    };
    n.coverExtend = function (e) {
      C(v.call(arguments, 1), function (t) {
        for (var n in t) if (undefined !== t[n] && undefined === e[n]) {
          e[n] = t[n];
        }
      });
      return e;
    };
    n.isArray = E || function (e) {
      return "[object Array]" === y.call(e);
    };
    n.isFunction = function (e) {
      if (!e) {
        return false;
      }
      var t = Object.prototype.toString.call(e);
      return "[object Function]" == t || "[object AsyncFunction]" == t;
    };
    n.isArguments = function (e) {
      return !(!e || !b.call(e, "callee"));
    };
    n.toArray = function (e) {
      return e ? e.toArray ? e.toArray() : n.isArray(e) || n.isArguments(e) ? v.call(e) : n.values(e) : [];
    };
    n.values = function (e) {
      var t = [];
      if (!(null == e)) {
        C(e, function (e) {
          t[t.length] = e;
        });
      }
      return t;
    };
    n.indexOf = function (e, t) {
      var n = e.indexOf;
      if (n) {
        return n.call(e, t);
      }
      for (var r = 0; r < e.length; r++) {
        if (t === e[r]) {
          return r;
        }
      }
      return -1;
    };
    n.hasAttributes = function (e, t) {
      if ("string" == typeof t) {
        return n.hasAttribute(e, t);
      }
      if (n.isArray(t)) {
        for (var r = false, i = 0; i < t.length; i++) {
          if (n.hasAttribute(e, t[i])) {
            r = true;
            break;
          }
        }
        return r;
      }
    };
    n.hasAttribute = function (e, t) {
      return e.hasAttribute ? e.hasAttribute(t) : !(!e.attributes[t] || !e.attributes[t].specified);
    };
    n.filter = function (e, t, n) {
      var r = Object.prototype.hasOwnProperty;
      if (e.filter) {
        return e.filter(t);
      }
      for (var i = [], o = 0; o < e.length; o++) {
        if (r.call(e, o)) {
          var a = e[o];
          if (t.call(n, a, o, e)) {
            i.push(a);
          }
        }
      }
      return i;
    };
    n.inherit = function (e, t) {
      e.prototype = new t();
      e.prototype.constructor = e;
      e.superclass = t.prototype;
      return e;
    };
    n.trim = function (e) {
      return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
    n.isObject = function (e) {
      return null != e && "[object Object]" == y.call(e);
    };
    n.isEmptyObject = function (e) {
      if (n.isObject(e)) {
        for (var t in e) if (b.call(e, t)) {
          return false;
        }
        return true;
      }
      return false;
    };
    n.isUndefined = function (e) {
      return undefined === e;
    };
    n.isString = function (e) {
      return "[object String]" == y.call(e);
    };
    n.isDate = function (e) {
      return "[object Date]" == y.call(e);
    };
    n.isBoolean = function (e) {
      return "[object Boolean]" == y.call(e);
    };
    n.isNumber = function (e) {
      return "[object Number]" == y.call(e) && /[\d\.]+/.test(String(e));
    };
    n.isElement = function (e) {
      return !(!e || 1 !== e.nodeType);
    };
    n.isJSONString = function (e) {
      try {
        JSON.parse(e);
      } catch (n) {
        return false;
      }
      return true;
    };
    n.safeJSONParse = function (e) {
      var t = null;
      try {
        t = JSON.parse(e);
      } catch (r) {
        return false;
      }
      return t;
    };
    n.decodeURIComponent = function (e) {
      var t = e;
      try {
        t = decodeURIComponent(e);
      } catch (r) {
        t = e;
      }
      return t;
    };
    n.decodeURI = function (e) {
      var t = e;
      try {
        t = decodeURI(e);
      } catch (r) {
        t = e;
      }
      return t;
    };
    n.isDecodeURI = function (e, t) {
      return e ? n.decodeURI(t) : t;
    };
    n.encodeDates = function (e) {
      n.each(e, function (t, r) {
        if (n.isDate(t)) {
          e[r] = n.formatDate(t);
        } else {
          if (n.isObject(t)) {
            e[r] = n.encodeDates(t);
          }
        }
      });
      return e;
    };
    n.mediaQueriesSupported = function () {
      return "undefined" != typeof window.matchMedia || "undefined" != typeof window.msMatchMedia;
    };
    n.getScreenOrientation = function () {
      var e = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type;
      var t = "未取到值";
      if (e) {
        t = e.indexOf("landscape") > -1 ? "landscape" : "portrait";
      } else if (n.mediaQueriesSupported()) {
        var r = window.matchMedia || window.msMatchMedia;
        if (r("(orientation: landscape)").matches) {
          t = "landscape";
        } else {
          if (r("(orientation: portrait)").matches) {
            t = "portrait";
          }
        }
      }
      return t;
    };
    n.now = Date.now || function () {
      return new Date().getTime();
    };
    n.throttle = function (e, t, r) {
      var i;
      var o;
      var a;
      var s = null;
      var c = 0;
      if (!r) {
        r = {};
      }
      var u = function () {
        c = false === r.leading ? 0 : n.now();
        s = null;
        a = e.apply(i, o);
        if (!s) {
          i = o = null;
        }
      };
      return function () {
        var l = n.now();
        if (!(c || false !== r.leading)) {
          c = l;
        }
        var f = t - (l - c);
        i = this;
        o = arguments;
        if (f <= 0 || f > t) {
          if (s) {
            clearTimeout(s);
            s = null;
          }
          c = l;
          a = e.apply(i, o);
          if (!s) {
            i = o = null;
          }
        } else {
          if (!(s || false === r.trailing)) {
            s = setTimeout(u, f);
          }
        }
        return a;
      };
    };
    n.hashCode = function (e) {
      if ("string" != typeof e) {
        return 0;
      }
      var t = 0;
      if (0 == e.length) {
        return t;
      }
      for (var n = 0; n < e.length; n++) {
        t = (t << 5) - t + e.charCodeAt(n);
        t &= t;
      }
      return t;
    };
    n.formatDate = function (e) {
      function t(e) {
        return e < 10 ? "0" + e : e;
      }
      return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds());
    };
    n.getRandomBasic = (f = new Date().getTime(), function (e) {
      return Math.ceil((f = (9301 * f + 49297) % 233280) / 233280 * e);
    });
    n.getRandom = function () {
      if ("function" == typeof Uint32Array) {
        var e = "";
        if ("undefined" != typeof crypto) {
          e = crypto;
        } else {
          if ("undefined" != typeof msCrypto) {
            e = msCrypto;
          }
        }
        if (n.isObject(e) && e.getRandomValues) {
          var t = new Uint32Array(1);
          return e.getRandomValues(t)[0] / Math.pow(2, 32);
        }
      }
      return n.getRandomBasic(1e19) / 1e19;
    };
    n.searchObjDate = function (e) {
      if (n.isObject(e)) {
        n.each(e, function (t, r) {
          if (n.isObject(t)) {
            n.searchObjDate(e[r]);
          } else {
            if (n.isDate(t)) {
              e[r] = n.formatDate(t);
            }
          }
        });
      }
    };
    n.searchZZAppStyle = function (e) {
      if ("undefined" != typeof e.properties.$project) {
        e.project = e.properties.$project;
        delete e.properties.$project;
      }
      if ("undefined" != typeof e.properties.$token) {
        e.token = e.properties.$token;
        delete e.properties.$token;
      }
    };
    n.formatJsonString = function (e) {
      try {
        return JSON.stringify(e, null, "  ");
      } catch (n) {
        return JSON.stringify(e);
      }
    };
    n.formatString = function (e, r) {
      return n.isNumber(r) && e.length > r ? (t.log("字符串长度超过限制，已经做截取--" + e), e.slice(0, r)) : e;
    };
    n.searchObjString = function (e) {
      var r = ["$element_selector", "$element_path"];
      if (n.isObject(e)) {
        n.each(e, function (i, o) {
          if (n.isObject(i)) {
            n.searchObjString(e[o]);
          } else {
            if (n.isString(i)) {
              e[o] = n.formatString(i, n.indexOf(r, o) > -1 ? 1024 : t.para.max_string_length);
            }
          }
        });
      }
    };
    n.parseSuperProperties = function (e) {
      var r = e.properties;
      var i = JSON.parse(JSON.stringify(e));
      if (n.isObject(r)) {
        n.each(r, function (e, o) {
          if (n.isFunction(e)) {
            try {
              r[o] = e(i);
              if (n.isFunction(r[o])) {
                t.log("您的属性- " + o + " 格式不满足要求，我们已经将其删除");
                delete r[o];
              }
            } catch (s) {
              delete r[o];
              t.log("您的属性- " + o + " 抛出了异常，我们已经将其删除");
            }
          }
        });
        n.strip_sa_properties(r);
      }
    };
    n.filterReservedProperties = function (e) {
      if (n.isObject(e)) {
        n.each(["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id", "original_id", "device_id", "properties", "second_id", "time", "users"], function (n, r) {
          if (n in e) {
            if (r < 3) {
              delete e[n];
              t.log("您的属性- " + n + "是保留字段，我们已经将其删除");
            } else {
              t.log("您的属性- " + n + "是保留字段，请避免其作为属性名");
            }
          }
        });
      }
    };
    n.searchConfigData = function (e) {
      if ("object" == typeof e && e.$option) {
        var t = e.$option;
        delete e.$option;
        return t;
      }
      return {};
    };
    n.unique = function (e) {
      for (var t, n = [], r = {}, i = 0; i < e.length; i++) {
        if (!((t = e[i]) in r)) {
          r[t] = true;
          n.push(t);
        }
      }
      return n;
    };
    n.strip_sa_properties = function (e) {
      return n.isObject(e) ? (n.each(e, function (r, i) {
        if (n.isArray(r)) {
          var o = [];
          n.each(r, function (e) {
            if (n.isString(e)) {
              o.push(e);
            } else {
              t.log("您的数据-", i, r, "的数组里的值必须是字符串,已经将其删除");
            }
          });
          e[i] = o;
        }
        if (!(n.isString(r) || n.isNumber(r) || n.isDate(r) || n.isBoolean(r) || n.isArray(r) || n.isFunction(r) || "$option" === i)) {
          t.log("您的数据-", i, r, "-格式不满足要求，我们已经将其删除");
          delete e[i];
        }
      }), e) : e;
    };
    n.strip_empty_properties = function (e) {
      var t = {};
      n.each(e, function (e, n) {
        if (null != e) {
          t[n] = e;
        }
      });
      return t;
    };
    n.base64Encode = function (e) {
      return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
        return String.fromCharCode("0x" + t);
      }));
    };
    n.base64Decode = function (e) {
      var t = n.map(atob(e).split(""), function (e) {
        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
      });
      return decodeURIComponent(t.join(""));
    };
    n.UUID = (d = function () {
      for (var e = 1 * new Date(), t = 0; e == 1 * new Date();) {
        t++;
      }
      return e.toString(16) + t.toString(16);
    }, function () {
      var e = String(screen.height * screen.width);
      e = e && /\d{5,}/.test(e) ? e.toString(16) : String(31242 * n.getRandom()).replace(".", "").slice(0, 8);
      return d() + "-" + n.getRandom().toString(16).replace(".", "") + "-" + function (e) {
        var t;
        var n;
        var r = navigator.userAgent;
        var i = [];
        var o = 0;
        function a(e, t) {
          var n;
          var r = 0;
          for (n = 0; n < t.length; n++) {
            r |= i[n] << 8 * n;
          }
          return e ^ r;
        }
        for (t = 0; t < r.length; t++) {
          n = r.charCodeAt(t);
          i.unshift(255 & n);
          if (i.length >= 4) {
            o = a(o, i);
            i = [];
          }
        }
        if (i.length > 0) {
          o = a(o, i);
        }
        return o.toString(16);
      }() + "-" + e + "-" + d() || (String(n.getRandom()) + String(n.getRandom()) + String(n.getRandom())).slice(2, 15);
    });
    n.getQueryParam = function (e, t) {
      t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      e = n.decodeURIComponent(e);
      var r = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
      return null === r || r && "string" != typeof r[1] && r[1].length ? "" : n.decodeURIComponent(r[1]);
    };
    n.urlParse = function (e) {
      var n = function (e) {
        this._fields = {
          Username: 4,
          Password: 5,
          Port: 7,
          Protocol: 2,
          Host: 6,
          Path: 8,
          URL: 0,
          QueryString: 9,
          Fragment: 10
        };
        this._values = {};
        this._regex = null;
        this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;
        if (undefined !== e) {
          this._parse(e);
        }
      };
      n.prototype.setUrl = function (e) {
        this._parse(e);
      };
      n.prototype._initValues = function () {
        for (var e in this._fields) this._values[e] = "";
      };
      n.prototype.addQueryString = function (e) {
        if ("object" != typeof e) {
          return false;
        }
        var t = this._values.QueryString || "";
        for (var n in e) t = new RegExp(n + "[^&]+").test(t) ? t.replace(new RegExp(n + "[^&]+"), n + "=" + e[n]) : "&" === t.slice(-1) ? t + n + "=" + e[n] : "" === t ? n + "=" + e[n] : t + "&" + n + "=" + e[n];
        this._values.QueryString = t;
      };
      n.prototype.getUrl = function () {
        var e = "";
        e += this._values.Origin;
        e += this._values.Port ? ":" + this._values.Port : "";
        e += this._values.Path;
        return (e += this._values.QueryString ? "?" + this._values.QueryString : "") + (this._values.Fragment ? "#" + this._values.Fragment : "");
      };
      n.prototype.getUrl = function () {
        var e = "";
        e += this._values.Origin;
        e += this._values.Port ? ":" + this._values.Port : "";
        return (e += this._values.Path) + (this._values.QueryString ? "?" + this._values.QueryString : "");
      };
      n.prototype._parse = function (e) {
        this._initValues();
        var n = this._regex.exec(e);
        for (var r in n || t.log("DPURLParser::_parse -> Invalid URL"), this._fields) if ("undefined" != typeof n[this._fields[r]]) {
          this._values[r] = n[this._fields[r]];
        }
        this._values.Hostname = this._values.Host.replace(/:\d+$/, "");
        this._values.Origin = this._values.Protocol + "://" + this._values.Hostname;
      };
      return new n(e);
    };
    n.addEvent = function () {
      function r(e) {
        if (e) {
          e.preventDefault = r.preventDefault;
          e.stopPropagation = r.stopPropagation;
          e._getPath = r._getPath;
        }
        return e;
      }
      r._getPath = function () {
        var t = this;
        return this.path || this.composedPath && this.composedPath() || function () {
          try {
            var n = t.target;
            var r = [n];
            if (null === n || null === n.parentElement) {
              return [];
            }
            for (; null !== n.parentElement;) {
              n = n.parentElement;
              r.unshift(n);
            }
            return r;
          } catch (e) {
            return [];
          }
        }();
      };
      r.preventDefault = function () {
        this.returnValue = false;
      };
      r.stopPropagation = function () {
        this.cancelBubble = true;
      };
      (function (e, i, o) {
        var a = !(!n.isObject(t.para.heatmap) || !t.para.heatmap.useCapture);
        if (n.isObject(t.para.heatmap) && "undefined" == typeof t.para.heatmap.useCapture && "click" === i) {
          a = true;
        }
        if (e && e.addEventListener) {
          e.addEventListener(i, function (e) {
            e._getPath = r._getPath;
            o.call(this, e);
          }, a);
        } else {
          var s = "on" + i;
          var c = e[s];
          e[s] = function (e, t, n) {
            return function (i) {
              if (i = i || r(window.event)) {
                i.target = i.srcElement;
                var o;
                var a;
                var s = true;
                if ("function" == typeof n) {
                  o = n(i);
                }
                a = t.call(e, i);
                if (!(false !== o && false !== a)) {
                  s = false;
                }
                return s;
              }
            };
          }(e, o, c);
        }
      }).apply(null, arguments);
    };
    n.addHashEvent = function (e) {
      var t = "pushState" in window.history ? "popstate" : "hashchange";
      n.addEvent(window, t, e);
    };
    n.addSinglePageEvent = function (e) {
      var t = location.href;
      var r = window.history.pushState;
      var i = window.history.replaceState;
      window.history.pushState = function () {
        r.apply(window.history, arguments);
        e(t);
        t = location.href;
      };
      window.history.replaceState = function () {
        i.apply(window.history, arguments);
        e(t);
        t = location.href;
      };
      var o = r ? "popstate" : "hashchange";
      n.addEvent(window, o, function () {
        e(t);
        t = location.href;
      });
    };
    n.cookie = {
      get: function (e) {
        for (var t = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i++) {
          for (var o = r[i]; " " == o.charAt(0);) {
            o = o.substring(1, o.length);
          }
          if (0 == o.indexOf(t)) {
            return n.decodeURIComponent(o.substring(t.length, o.length));
          }
        }
        return null;
      },
      set: function (e, r, i, o) {
        var a = "";
        var s = "";
        var c = "";
        i = null == i ? 73e3 : i;
        if (o = undefined === o ? t.para.cross_subdomain : o) {
          var u = n.getCurrentDomain(location.href);
          if ("url解析失败" === u) {
            u = "";
          }
          a = u ? "; domain=" + u : "";
        }
        if (0 !== i) {
          var l = new Date();
          if ("s" === String(i).slice(-1)) {
            l.setTime(l.getTime() + 1e3 * Number(String(i).slice(0, -1)));
          } else {
            l.setTime(l.getTime() + 24 * i * 60 * 60 * 1e3);
          }
          s = "; expires=" + l.toGMTString();
        }
        function f(e) {
          return !!e && e.replaceAll(/\r\n/g, "");
        }
        if (t.para.is_secure_cookie) {
          c = "; secure";
        }
        var d = "";
        var h = "";
        var p = "";
        if (e) {
          d = f(e);
        }
        if (r) {
          h = f(r);
        }
        if (a) {
          p = f(a);
        }
        if (d && h) {
          document.cookie = d + "=" + encodeURIComponent(h) + s + "; path=/" + p + c;
        }
      },
      encrypt: function (e) {
        return "data:enc;" + n.rot13obfs(e);
      },
      decrypt: function (e) {
        e = e.substring("data:enc;".length);
        return n.rot13defs(e);
      },
      resolveValue: function (e) {
        if (n.isString(e) && 0 === e.indexOf("data:enc;")) {
          e = n.cookie.decrypt(e);
        }
        return e;
      },
      remove: function (e, r) {
        r = undefined === r ? t.para.cross_subdomain : r;
        n.cookie.set(e, "", -1, r);
      },
      getCookieName: function (e, r) {
        var i = "";
        r = r || location.href;
        if (false === t.para.cross_subdomain) {
          try {
            i = n.URL(r).hostname;
          } catch (a) {
            t.log(a);
          }
          i = "string" == typeof i && "" !== i ? "sajssdk_2015_" + e + "_" + i.replace(/\./g, "_") : "sajssdk_2015_root_" + e;
        } else {
          i = "sajssdk_2015_cross_" + e;
        }
        return i;
      },
      getNewUser: function () {
        return null !== this.get("sensorsdata_is_new_user") || null !== this.get(this.getCookieName("new_user"));
      }
    };
    n.getElementContent = function (e, r) {
      var i = "";
      var o = "";
      if (e.textContent) {
        i = n.trim(e.textContent);
      } else {
        if (e.innerText) {
          i = n.trim(e.innerText);
        }
      }
      if (i) {
        i = i.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
      }
      o = i || "";
      if (!("input" !== r && "INPUT" !== r)) {
        if ("button" === e.type || "submit" === e.type || t.para.heatmap && "function" == typeof t.para.heatmap.collect_input && t.para.heatmap.collect_input(e)) {
          o = e.value || "";
        }
      }
      return o;
    };
    n.getEleInfo = function (e) {
      if (!e.target) {
        return false;
      }
      var r = e.target;
      var i = r.tagName.toLowerCase();
      var o = {};
      o.$element_type = i;
      o.$element_name = r.getAttribute("name");
      o.$element_id = r.getAttribute("id");
      o.$element_class_name = "string" == typeof r.className ? r.className : null;
      o.$element_target_url = r.getAttribute("href");
      o.$element_content = n.getElementContent(r, i);
      (o = n.strip_empty_properties(o)).$url = n.isDecodeURI(t.para.url_is_decode, location.href);
      o.$url_path = location.pathname;
      o.$title = document.title;
      o.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
      return o;
    };
    n.localStorage = {
      get: function (e) {
        return window.localStorage.getItem(e);
      },
      parse: function (e) {
        var r;
        try {
          r = JSON.parse(n.localStorage.get(e)) || null;
        } catch (i) {
          t.log(i);
        }
        return r;
      },
      set: function (e, t) {
        window.localStorage.setItem(e, t);
      },
      remove: function (e) {
        window.localStorage.removeItem(e);
      },
      isSupport: function () {
        var e = true;
        try {
          var t = "__sensorsdatasupport__";
          var r = "testIsSupportStorage";
          n.localStorage.set(t, r);
          if (n.localStorage.get(t) !== r) {
            e = false;
          }
          n.localStorage.remove(t);
        } catch (i) {
          e = false;
        }
        return e;
      }
    };
    n.sessionStorage = {
      isSupport: function () {
        var e = true;
        var t = "testIsSupportStorage";
        try {
          if (sessionStorage && sessionStorage.setItem) {
            sessionStorage.setItem("__sensorsdatasupport__", t);
            sessionStorage.removeItem("__sensorsdatasupport__", t);
            e = true;
          } else {
            e = false;
          }
        } catch (r) {
          e = false;
        }
        return e;
      }
    };
    n.isSupportCors = function () {
      return "undefined" != typeof window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest() || "undefined" != typeof XDomainRequest);
    };
    n.xhr = function (e) {
      if (e) {
        return "undefined" != typeof window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest() ? new XMLHttpRequest() : "undefined" != typeof XDomainRequest ? new XDomainRequest() : null;
      }
      if ("undefined" != typeof window.XMLHttpRequest) {
        return new XMLHttpRequest();
      }
      if (window.ActiveXObject) {
        try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (r) {
          try {
            return new ActiveXObject("Microsoft.XMLHTTP");
          } catch (r) {
            t.log(r);
          }
        }
      }
    };
    n.ajax = function (e) {
      function r(e) {
        if (!e) {
          return "";
        }
        try {
          return JSON.parse(e);
        } catch (n) {
          return {};
        }
      }
      e.timeout = e.timeout || 2e4;
      e.credentials = "undefined" == typeof e.credentials || e.credentials;
      var i = n.xhr(e.cors);
      if (!i) {
        return false;
      }
      if (!e.type) {
        e.type = e.data ? "POST" : "GET";
      }
      e = n.extend({
        success: function () {},
        error: function () {}
      }, e);
      t.debug.protocol.ajax(e.url);
      var o;
      var a = e.success;
      var s = e.error;
      e.success = function (e) {
        a(e);
        if (o) {
          clearTimeout(o);
          o = null;
        }
      };
      e.error = function (e) {
        s(e);
        if (o) {
          clearTimeout(o);
          o = null;
        }
      };
      o = setTimeout(function () {
        !function () {
          try {
            if (n.isObject(i) && i.abort) {
              i.abort();
            }
          } catch (r) {
            t.log(r);
          }
          if (o) {
            clearTimeout(o);
            o = null;
            if (e.error) {
              e.error();
            }
            i.onreadystatechange = null;
            i.onload = null;
            i.onerror = null;
          }
        }();
      }, e.timeout);
      if ("undefined" != typeof XDomainRequest && i instanceof XDomainRequest) {
        i.onload = function () {
          if (e.success) {
            e.success(r(i.responseText));
          }
          i.onreadystatechange = null;
          i.onload = null;
          i.onerror = null;
        };
        i.onerror = function () {
          if (e.error) {
            e.error(r(i.responseText), i.status);
          }
          i.onreadystatechange = null;
          i.onerror = null;
          i.onload = null;
        };
      }
      i.onreadystatechange = function () {
        try {
          if (4 == i.readyState) {
            if (i.status >= 200 && i.status < 300 || 304 == i.status) {
              e.success(r(i.responseText));
            } else {
              e.error(r(i.responseText), i.status);
            }
            i.onreadystatechange = null;
            i.onload = null;
          }
        } catch (t) {
          i.onreadystatechange = null;
          i.onload = null;
        }
      };
      i.open(e.type, e.url, true);
      try {
        if (e.credentials) {
          i.withCredentials = true;
        }
        if (n.isObject(e.header)) {
          n.each(e.header, function (e, t) {
            if (i.setRequestHeader) {
              i.setRequestHeader(t, e);
            }
          });
        }
        if (e.data) {
          if (!e.cors) {
            if (i.setRequestHeader) {
              i.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            }
          }
          if ("application/json" === e.contentType) {
            if (i.setRequestHeader) {
              i.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            }
          } else {
            if (i.setRequestHeader) {
              i.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
          }
        }
      } catch (c) {
        t.log(c);
      }
      i.send(e.data || null);
    };
    n.loadScript = function (e) {
      e = n.extend({
        success: function () {},
        error: function () {},
        appendCall: function (e) {
          document.getElementsByTagName("head")[0].appendChild(e);
        }
      }, e);
      var t = null;
      if ("css" === e.type) {
        (t = document.createElement("link")).rel = "stylesheet";
        t.href = e.url;
      }
      if ("js" === e.type) {
        (t = document.createElement("script")).async = "async";
        t.setAttribute("charset", "UTF-8");
        t.src = e.url;
        t.type = "text/javascript";
      }
      t.onload = t.onreadystatechange = function () {
        if (!(this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
          e.success();
          t.onload = t.onreadystatechange = null;
        }
      };
      t.onerror = function () {
        e.error();
        t.onerror = null;
      };
      e.appendCall(t);
    };
    n.getHostname = function (e, r) {
      if (!(r && "string" == typeof r)) {
        r = "hostname解析异常";
      }
      var i = null;
      try {
        i = n.URL(e).hostname;
      } catch (a) {
        t.log("getHostname传入的url参数不合法！");
      }
      return i || r;
    };
    n.getQueryParamsFromUrl = function (e) {
      var t = {};
      var r = e.split("?")[1] || "";
      if (r) {
        t = n.getURLSearchParams("?" + r);
      }
      return t;
    };
    n.getURLSearchParams = function (e) {
      for (var t = function (e) {
          return decodeURIComponent(e);
        }, n = {}, r = (e = e || "").substring(1).split("&"), i = 0; i < r.length; i++) {
        var o = r[i].indexOf("=");
        if (-1 !== o) {
          var a = r[i].substring(0, o);
          var s = r[i].substring(o + 1);
          a = t(a);
          s = t(s);
          n[a] = s;
        }
      }
      return n;
    };
    n.URL = function (e) {
      var r;
      var i = {};
      if ("function" == typeof window.URL && function () {
        try {
          return "http://modernizr.com/" === new URL("http://modernizr.com/").href;
        } catch (t) {
          return false;
        }
      }()) {
        if (!(i = new URL(e)).searchParams) {
          i.searchParams = (r = n.getURLSearchParams(i.search), {
            get: function (e) {
              return r[e];
            }
          });
        }
      } else {
        if (false === /^https?:\/\/.+/.test(e)) {
          t.log("Invalid URL");
        }
        var o = n.urlParse(e);
        i.hash = "";
        i.host = o._values.Host ? o._values.Host + (o._values.Port ? ":" + o._values.Port : "") : "";
        i.href = o._values.URL;
        i.password = o._values.Password;
        i.pathname = o._values.Path;
        i.port = o._values.Port;
        i.search = o._values.QueryString ? "?" + o._values.QueryString : "";
        i.username = o._values.Username;
        i.hostname = o._values.Hostname;
        i.protocol = o._values.Protocol ? o._values.Protocol + ":" : "";
        i.origin = o._values.Origin ? o._values.Origin + (o._values.Port ? ":" + o._values.Port : "") : "";
        i.searchParams = function () {
          var e = n.getURLSearchParams("?" + o._values.QueryString);
          return {
            get: function (t) {
              return e[t];
            }
          };
        }();
      }
      return i;
    };
    n.getCurrentDomain = function (e) {
      var r = t.para.current_domain;
      switch (typeof r) {
        case "function":
          var i = r();
          return "" === i || "" === n.trim(i) ? "url解析失败" : -1 !== i.indexOf(".") ? i : "url解析失败";
        case "string":
          return "" === r || "" === n.trim(r) ? "url解析失败" : -1 !== r.indexOf(".") ? r : "url解析失败";
        default:
          var o = n.getCookieTopLevelDomain();
          return "" === e || "" === o ? "url解析失败" : o;
      }
    };
    n.getCookieTopLevelDomain = function (e) {
      var t = (e = e || location.hostname) || false;
      if (!t) {
        return "";
      }
      var r = t.split(".");
      if (n.isArray(r) && r.length >= 2 && !/^(\d+\.)+\d+$/.test(t)) {
        for (var i = "." + r.splice(r.length - 1, 1); r.length > 0;) {
          i = "." + r.splice(r.length - 1, 1) + i;
          document.cookie = "sensorsdata_domain_test=true; path=/; domain=" + i;
          if (-1 !== document.cookie.indexOf("sensorsdata_domain_test=true")) {
            var o = new Date();
            o.setTime(o.getTime() - 1e3);
            document.cookie = "sensorsdata_domain_test=true; expires=" + o.toGMTString() + "; path=/; domain=" + i;
            return i;
          }
        }
      }
      return "";
    };
    n.isReferralTraffic = function (e) {
      return "" === (e = e || document.referrer) || n.getCookieTopLevelDomain(n.getHostname(e)) !== n.getCookieTopLevelDomain();
    };
    n.ry = function (e) {
      return new n.ry.init(e);
    };
    n.ry.init = function (e) {
      this.ele = e;
    };
    n.ry.init.prototype = {
      addClass: function (e) {
        if (-1 === (" " + this.ele.className + " ").indexOf(" " + e + " ")) {
          this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e;
        }
        return this;
      },
      removeClass: function (e) {
        var t = " " + this.ele.className + " ";
        if (-1 !== t.indexOf(" " + e + " ")) {
          this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1);
        }
        return this;
      },
      hasClass: function (e) {
        return -1 !== (" " + this.ele.className + " ").indexOf(" " + e + " ");
      },
      attr: function (e, t) {
        return "string" == typeof e && n.isUndefined(t) ? this.ele.getAttribute(e) : ("string" == typeof e && (t = String(t), this.ele.setAttribute(e, t)), this);
      },
      offset: function () {
        var e = this.ele.getBoundingClientRect();
        if (e.width || e.height) {
          var t = this.ele.ownerDocument.documentElement;
          return {
            top: e.top + window.pageYOffset - t.clientTop,
            left: e.left + window.pageXOffset - t.clientLeft
          };
        }
        return {
          top: 0,
          left: 0
        };
      },
      getSize: function () {
        if (!window.getComputedStyle) {
          return {
            width: this.ele.offsetWidth,
            height: this.ele.offsetHeight
          };
        }
        try {
          var e = this.ele.getBoundingClientRect();
          return {
            width: e.width,
            height: e.height
          };
        } catch (n) {
          return {
            width: 0,
            height: 0
          };
        }
      },
      getStyle: function (e) {
        return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e);
      },
      wrap: function (e) {
        var t = document.createElement(e);
        this.ele.parentNode.insertBefore(t, this.ele);
        t.appendChild(this.ele);
        return n.ry(t);
      },
      getCssStyle: function (e) {
        var t = this.ele.style.getPropertyValue(e);
        if (t) {
          return t;
        }
        var r = null;
        if ("function" == typeof window.getMatchedCSSRules) {
          r = getMatchedCSSRules(this.ele);
        }
        if (!r || !n.isArray(r)) {
          return null;
        }
        for (var i = r.length - 1; i >= 0; i--) {
          if (t = r[i].style.getPropertyValue(e)) {
            return t;
          }
        }
      },
      sibling: function (e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) {
          ;
        }
        return e;
      },
      next: function () {
        return this.sibling(this.ele, "nextSibling");
      },
      prev: function (e) {
        return this.sibling(this.ele, "previousSibling");
      },
      siblings: function (e) {
        return this.siblings((this.ele.parentNode || {}).firstChild, this.ele);
      },
      children: function (e) {
        return this.siblings(this.ele.firstChild);
      },
      parent: function () {
        var e = this.ele.parentNode;
        e = e && 11 !== e.nodeType ? e : null;
        return n.ry(e);
      },
      previousElementSibling: function () {
        var e = this.ele;
        if ("previousElementSibling" in document.documentElement) {
          return n.ry(e.previousElementSibling);
        }
        for (; e = e.previousSibling;) {
          if (1 === e.nodeType) {
            return n.ry(e);
          }
        }
        return n.ry(null);
      },
      getSameTypeSiblings: function () {
        for (var e = this.ele, t = e.parentNode, n = e.tagName.toLowerCase(), r = [], i = 0; i < t.children.length; i++) {
          var o = t.children[i];
          if (1 === o.nodeType && o.tagName.toLowerCase() === n) {
            r.push(t.children[i]);
          }
        }
        return r;
      }
    };
    n.strToUnicode = function (e) {
      if ("string" != typeof e) {
        t.log("转换unicode错误", e);
        return e;
      }
      for (var n = "", r = 0; r < e.length; r++) {
        n += "\\" + e.charCodeAt(r).toString(16);
      }
      return n;
    };
    n.getReferrer = function (e) {
      return "string" != typeof (e = e || document.referrer) ? "取值异常_referrer异常_" + String(e) : (0 === e.indexOf("https://www.baidu.com/") && (e = e.split("?")[0]), "string" == typeof (e = e.slice(0, t.para.max_referrer_string_length)) ? e : "");
    };
    n.getKeywordFromReferrer = function (e) {
      e = e || document.referrer;
      var r = t.para.source_type.keyword;
      if (document && "string" == typeof e) {
        if (0 === e.indexOf("http")) {
          var i = n.getReferSearchEngine(e);
          var o = n.getQueryParamsFromUrl(e);
          if (n.isEmptyObject(o)) {
            return "未取到值";
          }
          var a = null;
          for (var s in r) if (i === s && "object" == typeof o) {
            a = r[s];
            if (n.isArray(a)) {
              for (s = 0; s < a.length; s++) {
                var c = o[a[s]];
                if (c) {
                  return c;
                }
              }
            } else if (o[a]) {
              return o[a];
            }
          }
          return "未取到值";
        }
        return "" === e ? "未取到值_直接打开" : "未取到值_非http的url";
      }
      return "取值异常_referrer异常_" + String(e);
    };
    n.getWxAdIdFromUrl = function (e) {
      var t = n.getQueryParam(e, "gdt_vid");
      var r = n.getQueryParam(e, "hash_key");
      var i = n.getQueryParam(e, "callbacks");
      var o = {
        click_id: "",
        hash_key: "",
        callbacks: ""
      };
      if (n.isString(t) && t.length) {
        o.click_id = 16 == t.length || 18 == t.length ? t : "参数解析不合法";
        if (n.isString(r) && r.length) {
          o.hash_key = r;
        }
        if (n.isString(i) && i.length) {
          o.callbacks = i;
        }
      }
      return o;
    };
    n.getReferSearchEngine = function (e) {
      var r = n.getHostname(e);
      if (!r || "hostname解析异常" === r) {
        return "";
      }
      t.para.source_type.keyword;
      var i = {
        baidu: [/^.*\.baidu\.com$/],
        bing: [/^.*\.bing\.com$/],
        google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
        sm: [/^m\.sm\.cn$/],
        so: [/^.+\.so\.com$/],
        sogou: [/^.*\.sogou\.com$/],
        yahoo: [/^.*\.yahoo\.com$/]
      };
      for (var o in i) for (var a = i[o], s = 0, c = a.length; s < c; s++) {
        if (a[s].test(r)) {
          return o;
        }
      }
      return "未知搜索引擎";
    };
    n.getSourceFromReferrer = function () {
      function e(e, t) {
        for (var n = 0; n < e.length; n++) {
          if (-1 !== t.split("?")[0].indexOf(e[n])) {
            return true;
          }
        }
      }
      var r = "(" + t.para.source_type.utm.join("|") + ")\\=[^&]+";
      var i = t.para.source_type.search;
      var o = t.para.source_type.social;
      var a = document.referrer || "";
      var s = n.info.pageProp.url;
      if (s) {
        var c = s.match(new RegExp(r));
        return c && c[0] ? "付费广告流量" : e(i, a) ? "自然搜索流量" : e(o, a) ? "社交网站流量" : "" === a ? "直接流量" : "引荐流量";
      }
      return "获取url异常";
    };
    n.info = {
      initPage: function () {
        var e = n.getReferrer();
        var r = location.href;
        var i = n.getCurrentDomain(r);
        if (!i) {
          t.debug.jssdkDebug("url_domain异常_" + r + "_" + i);
        }
        this.pageProp = {
          referrer: e,
          referrer_host: e ? n.getHostname(e) : "",
          url: r,
          url_host: n.getHostname(r, "url_host取值异常"),
          url_domain: i
        };
      },
      pageProp: {},
      campaignParams: function () {
        var e = t.source_channel_standard.split(" ");
        var r = "";
        var i = {};
        if (n.isArray(t.para.source_channel) && t.para.source_channel.length > 0) {
          e = e.concat(t.para.source_channel);
          e = n.unique(e);
        }
        n.each(e, function (e) {
          if ((r = n.getQueryParam(location.href, e)).length) {
            i[e] = r;
          }
        });
        return i;
      },
      campaignParamsStandard: function (e, r) {
        e = e || "";
        r = r || "";
        var i = n.info.campaignParams();
        var o = {};
        var a = {};
        n.each(i, function (n, i, s) {
          if (-1 !== (" " + t.source_channel_standard + " ").indexOf(" " + i + " ")) {
            o[e + i] = s[i];
          } else {
            a[r + i] = s[i];
          }
        });
        return {
          $utms: o,
          otherUtms: a
        };
      },
      properties: function () {
        return {
          $timezone_offset: new Date().getTimezoneOffset(),
          $screen_height: Number(screen.height) || 0,
          $screen_width: Number(screen.width) || 0,
          $lib: "js",
          $lib_version: String(t.lib_version)
        };
      },
      currentProps: {},
      register: function (e) {
        n.extend(n.info.currentProps, e);
      }
    };
    n.autoExeQueue = function () {
      return {
        items: [],
        enqueue: function (e) {
          this.items.push(e);
          this.start();
        },
        dequeue: function () {
          return this.items.shift();
        },
        getCurrentItem: function () {
          return this.items[0];
        },
        isRun: false,
        start: function () {
          if (this.items.length > 0 && !this.isRun) {
            this.isRun = true;
            this.getCurrentItem().start();
          }
        },
        close: function () {
          this.dequeue();
          this.isRun = false;
          this.start();
        }
      };
    };
    n.trackLink = function (e, r, i) {
      var o = null;
      if ((e = e || {}).ele) {
        o = e.ele;
      }
      if (e.event) {
        o = e.target ? e.target : e.event.target;
      }
      i = i || {};
      if (!o || "object" != typeof o) {
        return false;
      }
      if (!o.href || /^javascript/.test(o.href) || o.target || o.download || o.onclick) {
        t.track(r, i);
        return false;
      }
      function a(e) {
        e.stopPropagation();
        e.preventDefault();
        var n = false;
        function a() {
          if (!n) {
            n = true;
            location.href = o.href;
          }
        }
        setTimeout(a, 1e3);
        t.track(r, i, a);
      }
      if (e.event) {
        a(e.event);
      }
      if (e.ele) {
        n.addEvent(e.ele, "click", function (e) {
          a(e);
        });
      }
    };
    n.eventEmitter = function () {
      this._events = [];
      this.pendingEvents = [];
    };
    n.eventEmitter.prototype = {
      emit: function (e) {
        var t = [].slice.call(arguments, 1);
        n.each(this._events, function (n) {
          if (n.type === e) {
            n.callback.apply(n.context, t);
          }
        });
        this.pendingEvents.push({
          type: e,
          data: t
        });
        if (this.pendingEvents.length > 20) {
          this.pendingEvents.shift();
        }
      },
      on: function (e, t, r, i) {
        if ("function" == typeof t) {
          this._events.push({
            type: e,
            callback: t,
            context: r || this
          });
          i = false !== i;
          if (this.pendingEvents.length > 0 && i) {
            n.each(this.pendingEvents, function (n) {
              if (n.type === e) {
                t.apply(r, n.data);
              }
            });
          }
        }
      },
      tempAdd: function (e, t) {
        if (t && e) {
          return this.emit(e, t);
        }
      },
      isReady: function () {}
    };
    n.rot13obfs = function (e, t) {
      t = "number" == typeof t ? t : 13;
      for (var n = (e = String(e)).split(""), r = 0, i = n.length; r < i; r++) {
        if (n[r].charCodeAt(0) < 126) {
          n[r] = String.fromCharCode((n[r].charCodeAt(0) + t) % 126);
        }
      }
      return n.join("");
    };
    n.rot13defs = function (e) {
      e = String(e);
      return n.rot13obfs(e, 113);
    };
    n.urlSafeBase64 = (h = {
      "+": "-",
      "/": "_",
      "=": "."
    }, p = {
      "-": "+",
      _: "/",
      ".": "="
    }, {
      encode: function (e) {
        return e.replace(/[+\/=]/g, function (e) {
          return h[e];
        });
      },
      decode: function (e) {
        return e.replace(/[-_.]/g, function (e) {
          return p[e];
        });
      },
      trim: function (e) {
        return e.replace(/[.=]{1,2}$/, "");
      },
      isBase64: function (e) {
        return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e);
      },
      isUrlSafeBase64: function (e) {
        return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e);
      }
    });
    n.setCssStyle = function (e) {
      var t = document.createElement("style");
      t.type = "text/css";
      try {
        t.appendChild(document.createTextNode(e));
      } catch (i) {
        t.styleSheet.cssText = e;
      }
      var n = document.getElementsByTagName("head")[0];
      var r = document.getElementsByTagName("script")[0];
      if (n) {
        if (n.children.length) {
          n.insertBefore(t, n.children[0]);
        } else {
          n.appendChild(t);
        }
      } else {
        r.parentNode.insertBefore(t, r);
      }
    };
    n.isIOS = function () {
      return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
    };
    n.getIOSVersion = function () {
      try {
        var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
        return e && e[1] ? Number.parseInt(e[1], 10) : "";
      } catch (n) {
        return "";
      }
    };
    n.getUA = function () {
      var e;
      var t = {};
      var n = navigator.userAgent.toLowerCase();
      if (e = n.match(/opera.([\d.]+)/)) {
        t.opera = Number(e[1].split(".")[0]);
      } else {
        if (e = n.match(/msie ([\d.]+)/)) {
          t.ie = Number(e[1].split(".")[0]);
        } else {
          if (e = n.match(/edge.([\d.]+)/)) {
            t.edge = Number(e[1].split(".")[0]);
          } else {
            if (e = n.match(/firefox\/([\d.]+)/)) {
              t.firefox = Number(e[1].split(".")[0]);
            } else {
              if (e = n.match(/chrome\/([\d.]+)/)) {
                t.chrome = Number(e[1].split(".")[0]);
              } else {
                if (e = n.match(/version\/([\d.]+).*safari/)) {
                  t.safari = Number(e[1].match(/^\d*.\d*/));
                }
              }
            }
          }
        }
      }
      return t;
    };
    n.getDomBySelector = function (e) {
      if (!n.isString(e)) {
        return null;
      }
      var r;
      var i = e.split(">");
      return (r = function e(r) {
        var a;
        var s = i.shift();
        if (!s) {
          return r;
        }
        try {
          a = function (e, t) {
            var r;
            if ("body" === (e = n.trim(e))) {
              return document.getElementsByTagName("body")[0];
            }
            if (0 === e.indexOf("#")) {
              e = e.slice(1);
              r = document.getElementById(e);
            } else if (e.indexOf(":nth-of-type") > -1) {
              var i = e.split(":nth-of-type");
              if (!i[0] || !i[1]) {
                return null;
              }
              var o = i[0];
              var a = i[1].match(/\(([0-9]+)\)/);
              if (!a || !a[1]) {
                return null;
              }
              var s = Number(a[1]);
              if (!(n.isElement(t) && t.children && t.children.length > 0)) {
                return null;
              }
              for (var c = t.children, u = 0; u < c.length; u++) {
                if (n.isElement(c[u]) && c[u].tagName.toLowerCase() === o && 0 == --s) {
                  r = c[u];
                  break;
                }
              }
              if (s > 0) {
                return null;
              }
            }
            return r || null;
          }(s, r);
        } catch (o) {
          t.log(o);
        }
        return a && n.isElement(a) ? e(a) : null;
      }()) && n.isElement(r) ? r : null;
    };
    n.jsonp = function (e) {
      if (!n.isObject(e) || !n.isString(e.callbackName)) {
        t.log("JSONP 请求缺少 callbackName");
        return false;
      }
      e.success = n.isFunction(e.success) ? e.success : function () {};
      e.error = n.isFunction(e.error) ? e.error : function () {};
      e.data = e.data || "";
      var r = document.createElement("script");
      var i = document.getElementsByTagName("head")[0];
      var o = null;
      var a = false;
      i.appendChild(r);
      if (n.isNumber(e.timeout)) {
        o = setTimeout(function () {
          if (a) {
            return false;
          }
          e.error("timeout");
          window[e.callbackName] = function () {
            t.log("call jsonp error");
          };
          o = null;
          i.removeChild(r);
          a = true;
        }, e.timeout);
      }
      window[e.callbackName] = function () {
        clearTimeout(o);
        o = null;
        e.success.apply(null, arguments);
        window[e.callbackName] = function () {
          t.log("call jsonp error");
        };
        i.removeChild(r);
      };
      if (e.url.indexOf("?") > -1) {
        e.url += "&callbackName=" + e.callbackName;
      } else {
        e.url += "?callbackName=" + e.callbackName;
      }
      if (n.isObject(e.data)) {
        var s = [];
        n.each(e.data, function (e, t) {
          s.push(t + "=" + e);
        });
        e.data = s.join("&");
        e.url += "&" + e.data;
      }
      r.onerror = function (n) {
        if (a) {
          return false;
        }
        window[e.callbackName] = function () {
          t.log("call jsonp error");
        };
        clearTimeout(o);
        o = null;
        i.removeChild(r);
        e.error(n);
        a = true;
      };
      r.src = e.url;
    };
    n.listenPageState = function (e) {
      ({
        visibleHandle: n.isFunction(e.visible) ? e.visible : function () {},
        hiddenHandler: n.isFunction(e.hidden) ? e.hidden : function () {},
        visibilityChange: null,
        hidden: null,
        isSupport: function () {
          return "undefined" != typeof document[this.hidden];
        },
        init: function () {
          if ("undefined" != typeof document.hidden) {
            this.hidden = "hidden";
            this.visibilityChange = "visibilitychange";
          } else {
            if ("undefined" != typeof document.mozHidden) {
              this.hidden = "mozHidden";
              this.visibilityChange = "mozvisibilitychange";
            } else {
              if ("undefined" != typeof document.msHidden) {
                this.hidden = "msHidden";
                this.visibilityChange = "msvisibilitychange";
              } else {
                if ("undefined" != typeof document.webkitHidden) {
                  this.hidden = "webkitHidden";
                  this.visibilityChange = "webkitvisibilitychange";
                }
              }
            }
          }
          this.listen();
        },
        listen: function () {
          if (this.isSupport()) {
            var e = this;
            document.addEventListener(e.visibilityChange, function () {
              if (document[e.hidden]) {
                e.hiddenHandler();
              } else {
                e.visibleHandle();
              }
            }, 1);
          } else if (document.addEventListener) {
            window.addEventListener("focus", this.visibleHandle, 1);
            window.addEventListener("blur", this.hiddenHandler, 1);
          } else {
            document.attachEvent("onfocusin", this.visibleHandle);
            document.attachEvent("onfocusout", this.hiddenHandler);
          }
        }
      }).init();
    };
    n.isSupportBeaconSend = function () {
      var e = n.getUA();
      var t = false;
      var r = navigator.userAgent.toLowerCase();
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        var i = (r.match(/os [\d._]*/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".").split(".");
        if ("undefined" == typeof e.safari) {
          e.safari = i[0];
        }
        if (i[0] && i[0] < 13) {
          if (e.chrome > 41 || e.firefox > 30 || e.opera > 25 || e.safari > 12) {
            t = true;
          }
        } else {
          if (e.chrome > 41 || e.firefox > 30 || e.opera > 25 || e.safari > 11.3) {
            t = true;
          }
        }
      } else if (e.chrome > 38 || e.edge > 13 || e.firefox > 30 || e.opera > 25 || e.safari > 11) {
        t = true;
      }
      return t;
    };
    n.secCheck = {
      isHttpUrl: function (e) {
        return "string" == typeof e && (false !== /^https?:\/\/.+/.test(e) || (t.log("Invalid URL"), false));
      },
      removeScriptProtocol: function (e) {
        if ("string" != typeof e) {
          return "";
        }
        for (var t = /^\s*javascript/i; t.test(e);) {
          e = e.replace(t, "");
        }
        return e;
      }
    };
    t.para_default = {
      preset_properties: {
        latest_utm: true,
        latest_traffic_source_type: true,
        latest_search_keyword: true,
        latest_referrer: true,
        latest_referrer_host: false,
        latest_landing_page: false,
        latest_wx_ad_click_id: undefined,
        url: true,
        title: true
      },
      encrypt_cookie: false,
      img_use_crossorigin: false,
      name: "sa",
      max_referrer_string_length: 200,
      max_string_length: 500,
      cross_subdomain: true,
      show_log: true,
      is_debug: false,
      debug_mode: false,
      debug_mode_upload: false,
      session_time: 0,
      use_client_time: false,
      source_channel: [],
      send_type: "image",
      vtrack_ignore: {},
      auto_init: true,
      is_track_single_page: false,
      is_single_page: false,
      batch_send: false,
      source_type: {},
      callback_timeout: 200,
      datasend_timeout: 3e3,
      queue_timeout: 300,
      is_track_device_id: false,
      ignore_oom: true,
      app_js_bridge: false,
      url_is_decode: false
    };
    t.addReferrerHost = function (e) {
      if (n.isObject(e.properties)) {
        if (e.properties.$first_referrer) {
          e.properties.$first_referrer_host = n.getHostname(e.properties.$first_referrer, "取值异常");
        }
        if (!("track" !== e.type && "track_signup" !== e.type)) {
          if ("$referrer" in e.properties) {
            e.properties.$referrer_host = "" === e.properties.$referrer ? "" : n.getHostname(e.properties.$referrer, "取值异常");
          }
          if (t.para.preset_properties.latest_referrer && t.para.preset_properties.latest_referrer_host) {
            e.properties.$latest_referrer_host = "" === e.properties.$latest_referrer ? "" : n.getHostname(e.properties.$latest_referrer, "取值异常");
          }
        }
      }
    };
    t.addPropsHook = function (e) {
      if (t.para.preset_properties && t.para.preset_properties.url && ("track" === e.type || "track_signup" === e.type) && "undefined" == typeof e.properties.$url) {
        e.properties.$url = n.isDecodeURI(t.para.url_is_decode, window.location.href);
      }
      if (t.para.preset_properties && t.para.preset_properties.title && ("track" === e.type || "track_signup" === e.type) && "undefined" == typeof e.properties.$title) {
        e.properties.$title = document.title;
      }
    };
    t.initPara = function (e) {
      t.para = e || t.para || {};
      var r;
      var i = {};
      if (n.isObject(t.para.is_track_latest)) {
        for (var o in t.para.is_track_latest) i["latest_" + o] = t.para.is_track_latest[o];
      }
      for (r in t.para.preset_properties = n.extend({}, t.para_default.preset_properties, i, t.para.preset_properties || {}), t.para_default) if (undefined === t.para[r]) {
        t.para[r] = t.para_default[r];
      }
      if ("string" == typeof t.para.server_url) {
        t.para.server_url = n.trim(t.para.server_url);
        if (t.para.server_url) {
          if ("://" === t.para.server_url.slice(0, 3)) {
            t.para.server_url = location.protocol.slice(0, -1) + t.para.server_url;
          } else {
            if ("//" === t.para.server_url.slice(0, 2)) {
              t.para.server_url = location.protocol + t.para.server_url;
            } else {
              if ("http" !== t.para.server_url.slice(0, 4)) {
                t.para.server_url = "";
              }
            }
          }
        }
      }
      if (!("string" != typeof t.para.web_url || "://" !== t.para.web_url.slice(0, 3) && "//" !== t.para.web_url.slice(0, 2))) {
        if ("://" === t.para.web_url.slice(0, 3)) {
          t.para.web_url = location.protocol.slice(0, -1) + t.para.web_url;
        } else {
          t.para.web_url = location.protocol + t.para.web_url;
        }
      }
      if ("image" !== t.para.send_type && "ajax" !== t.para.send_type && "beacon" !== t.para.send_type) {
        t.para.send_type = "image";
      }
      t.debug.protocol.serverUrl();
      t.bridge.initPara();
      t.bridge.initState();
      var a = {
        datasend_timeout: 6e3,
        send_interval: 6e3
      };
      if (n.localStorage.isSupport() && n.isSupportCors() && "object" == typeof localStorage) {
        if (true === t.para.batch_send) {
          t.para.batch_send = n.extend({}, a);
          t.para.use_client_time = true;
        } else {
          if ("object" == typeof t.para.batch_send) {
            t.para.use_client_time = true;
            t.para.batch_send = n.extend({}, a, t.para.batch_send);
          }
        }
      } else {
        t.para.batch_send = false;
      }
      var s = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      var c = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"];
      var u = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"];
      var l = {
        baidu: ["wd", "word", "kw", "keyword"],
        google: "q",
        bing: "q",
        yahoo: "p",
        sogou: ["query", "keyword"],
        so: "q",
        sm: "q"
      };
      if ("object" == typeof t.para.source_type) {
        t.para.source_type.utm = n.isArray(t.para.source_type.utm) ? t.para.source_type.utm.concat(s) : s;
        t.para.source_type.search = n.isArray(t.para.source_type.search) ? t.para.source_type.search.concat(c) : c;
        t.para.source_type.social = n.isArray(t.para.source_type.social) ? t.para.source_type.social.concat(u) : u;
        t.para.source_type.keyword = n.isObject(t.para.source_type.keyword) ? n.extend(l, t.para.source_type.keyword) : l;
      }
      var f = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
      if (t.para.heatmap && !n.isObject(t.para.heatmap)) {
        t.para.heatmap = {};
      }
      if (n.isObject(t.para.heatmap)) {
        t.para.heatmap.clickmap = t.para.heatmap.clickmap || "default";
        t.para.heatmap.scroll_notice_map = t.para.heatmap.scroll_notice_map || "default";
        t.para.heatmap.scroll_delay_time = t.para.heatmap.scroll_delay_time || 4e3;
        t.para.heatmap.scroll_event_duration = t.para.heatmap.scroll_event_duration || 18e3;
        t.para.heatmap.renderRefreshTime = t.para.heatmap.renderRefreshTime || 1e3;
        t.para.heatmap.loadTimeout = t.para.heatmap.loadTimeout || 1e3;
        if (true !== t.para.heatmap.get_vtrack_config) {
          t.para.heatmap.get_vtrack_config = false;
        }
        var d = n.isArray(t.para.heatmap.track_attr) ? n.filter(t.para.heatmap.track_attr, function (e) {
          return e && "string" == typeof e;
        }) : [];
        d.push("data-sensors-click");
        t.para.heatmap.track_attr = d;
        if (n.isObject(t.para.heatmap.collect_tags)) {
          if (true === t.para.heatmap.collect_tags.div) {
            t.para.heatmap.collect_tags.div = {
              ignore_tags: f,
              max_level: 1
            };
          } else {
            if (n.isObject(t.para.heatmap.collect_tags.div)) {
              if (t.para.heatmap.collect_tags.div.ignore_tags) {
                if (!n.isArray(t.para.heatmap.collect_tags.div.ignore_tags)) {
                  t.log("ignore_tags 参数必须是数组格式");
                  t.para.heatmap.collect_tags.div.ignore_tags = f;
                }
              } else {
                t.para.heatmap.collect_tags.div.ignore_tags = f;
              }
              if (t.para.heatmap.collect_tags.div.max_level && -1 === n.indexOf([1, 2, 3], t.para.heatmap.collect_tags.div.max_level)) {
                t.para.heatmap.collect_tags.div.max_level = 1;
              }
            } else {
              t.para.heatmap.collect_tags.div = false;
            }
          }
        } else {
          t.para.heatmap.collect_tags = {
            div: false
          };
        }
      }
      if (n.isArray(t.para.server_url) && t.para.server_url.length) {
        for (r = 0; r < t.para.server_url.length; r++) {
          if (!/sa\.gif[^\/]*$/.test(t.para.server_url[r])) {
            t.para.server_url[r] = t.para.server_url[r].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2");
          }
        }
      } else if (!(/sa\.gif[^\/]*$/.test(t.para.server_url) || "string" != typeof t.para.server_url)) {
        t.para.server_url = t.para.server_url.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2");
      }
      if ("string" == typeof t.para.server_url) {
        t.para.debug_mode_url = t.para.debug_mode_url || t.para.server_url.replace("sa.gif", "debug");
      }
      if (true === t.para.noCache) {
        t.para.noCache = "?" + new Date().getTime();
      } else {
        t.para.noCache = "";
      }
      if (t.para.callback_timeout > t.para.datasend_timeout) {
        t.para.datasend_timeout = t.para.callback_timeout;
      }
      if (t.para.callback_timeout > t.para.queue_timeout) {
        t.para.queue_timeout = t.para.callback_timeout;
      }
      if (t.para.queue_timeout > t.para.datasend_timeout) {
        t.para.datasend_timeout = t.para.queue_timeout;
      }
    };
    t.readyState = {
      state: 0,
      historyState: [],
      stateType: {
        1: "1-init未开始",
        2: "2-init开始",
        3: "3-store完成"
      },
      getState: function () {
        return this.historyState.join("\n");
      },
      setState: function (e) {
        if (String(e) in this.stateType) {
          this.state = e;
        }
        this.historyState.push(this.stateType[e]);
      }
    };
    t.setPreConfig = function (e) {
      t.para = e.para;
      t._q = e._q;
    };
    t.setInitVar = function () {
      t._t = t._t || 1 * new Date();
      t.lib_version = "1.18.6";
      t.is_first_visitor = false;
      t.source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term";
    };
    t.log = function () {
      if ((n.sessionStorage.isSupport() && "true" === sessionStorage.getItem("sensorsdata_jssdk_debug") || t.para.show_log) && (!n.isObject(arguments[0]) || true !== t.para.show_log && "string" !== t.para.show_log && false !== t.para.show_log || (arguments[0] = n.formatJsonString(arguments[0])), "object" == typeof console && console.log)) {
        try {
          return console.log.apply(console, arguments);
        } catch (r) {
          console.log(arguments[0]);
        }
      }
    };
    t.enableLocalLog = function () {
      if (n.sessionStorage.isSupport()) {
        try {
          sessionStorage.setItem("sensorsdata_jssdk_debug", "true");
        } catch (r) {
          t.log("enableLocalLog error: " + r.message);
        }
      }
    };
    t.disableLocalLog = function () {
      if (n.sessionStorage.isSupport()) {
        sessionStorage.removeItem("sensorsdata_jssdk_debug");
      }
    };
    t.debug = {
      distinct_id: function () {},
      jssdkDebug: function () {},
      _sendDebug: function (e) {
        t.track("_sensorsdata2019_debug", {
          _jssdk_debug_info: e
        });
      },
      apph5: function (e) {
        var r = "app_h5打通失败-";
        var i = {
          1: r + "use_app_track为false",
          2: r + "Android或者iOS，没有暴露相应方法",
          3.1: r + "Android校验server_url失败",
          3.2: r + "iOS校验server_url失败",
          4.1: r + "H5 校验 iOS server_url 失败",
          4.2: r + "H5 校验 Android server_url 失败"
        };
        var o = e.output;
        var a = e.step;
        var s = e.data || "";
        if (!("all" !== o && "console" !== o)) {
          t.log(i[a]);
        }
        if (("all" === o || "code" === o) && n.isObject(t.para.is_debug) && t.para.is_debug.apph5) {
          if (!(s.type && "profile" === s.type.slice(0, 7))) {
            s.properties._jssdk_debug_info = "apph5-" + String(a);
          }
        }
      },
      defineMode: function (e) {
        var t = {
          1: {
            title: "当前页面无法进行可视化全埋点",
            message: "App SDK 与 Web JS SDK 没有进行打通，请联系贵方技术人员修正 App SDK 的配置，详细信息请查看文档。",
            link_text: "配置文档",
            link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
          },
          2: {
            title: "当前页面无法进行可视化全埋点",
            message: "App SDK 与 Web JS SDK 没有进行打通，请联系贵方技术人员修正 Web JS SDK 的配置，详细信息请查看文档。",
            link_text: "配置文档",
            link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
          },
          3: {
            title: "当前页面无法进行可视化全埋点",
            message: "Web JS SDK 没有开启全埋点配置，请联系贵方工作人员修正 SDK 的配置，详细信息请查看文档。",
            link_text: "配置文档",
            link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_all-1573964.html"
          },
          4: {
            title: "当前页面无法进行可视化全埋点",
            message: "Web JS SDK 配置的数据校验地址与 App SDK 配置的数据校验地址不一致，请联系贵方工作人员修正 SDK 的配置，详细信息请查看文档。",
            link_text: "配置文档",
            link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
          }
        };
        return !(!e || !t[e]) && t[e];
      },
      protocol: {
        protocolIsSame: function (e, r) {
          try {
            if (n.URL(e).protocol !== n.URL(r).protocol) {
              return false;
            }
          } catch (i) {
            t.log("不支持 _.URL 方法");
            return false;
          }
          return true;
        },
        serverUrl: function () {
          if (n.isString(t.para.server_url) && "" !== t.para.server_url && !this.protocolIsSame(t.para.server_url, location.href)) {
            t.log("SDK 检测到您的数据发送地址和当前页面地址的协议不一致，建议您修改成一致的协议。\n因为：1、https 下面发送 http 的图片请求会失败。2、http 页面使用 https + ajax 方式发数据，在 ie9 及以下会丢失数据。");
          }
        },
        ajax: function (e) {
          if (e === t.para.server_url) {
            return false;
          }
          if (n.isString(e) && "" !== e && !this.protocolIsSame(e, location.href)) {
            t.log("SDK 检测到您的数据发送地址和当前页面地址的协议不一致，建议您修改成一致的协议。因为 http 页面使用 https + ajax 方式发数据，在 ie9 及以下会丢失数据。");
          }
        }
      }
    };
    var r = {
      setOnlineState: function (e) {
        if (true === e && n.isObject(t.para.jsapp) && "function" == typeof t.para.jsapp.getData) {
          t.para.jsapp.isOnline = true;
          var r = t.para.jsapp.getData();
          if (n.isArray(r) && r.length > 0) {
            n.each(r, function (e) {
              if (n.isJSONString(e)) {
                t.sendState.pushSend(JSON.parse(e));
              }
            });
          }
        } else {
          t.para.jsapp.isOnline = false;
        }
      },
      autoTrackIsUsed: false,
      isReady: function (e) {
        e();
      },
      getUtm: function () {
        return n.info.campaignParams();
      },
      getStayTime: function () {
        return (new Date() - t._t) / 1e3;
      },
      setProfileLocal: function (e) {
        if (!n.localStorage.isSupport()) {
          t.setProfile(e);
          return false;
        }
        if (!n.isObject(e) || n.isEmptyObject(e)) {
          return false;
        }
        var r = n.localStorage.parse("sensorsdata_2015_jssdk_profile");
        var i = false;
        if (n.isObject(r) && !n.isEmptyObject(r)) {
          for (var o in e) if (!((!(o in r) || r[o] === e[o]) && o in r)) {
            r[o] = e[o];
            i = true;
          }
          if (i) {
            n.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(r));
            t.setProfile(e);
          }
        } else {
          n.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(e));
          t.setProfile(e);
        }
      },
      setInitReferrer: function () {
        var e = n.getReferrer();
        t.setOnceProfile({
          _init_referrer: e,
          _init_referrer_host: n.info.pageProp.referrer_host
        });
      },
      setSessionReferrer: function () {
        var e = n.getReferrer();
        c.setSessionPropsOnce({
          _session_referrer: e,
          _session_referrer_host: n.info.pageProp.referrer_host
        });
      },
      setDefaultAttr: function () {
        n.info.register({
          _current_url: location.href,
          _referrer: n.getReferrer(),
          _referring_host: n.info.pageProp.referrer_host
        });
      },
      trackHeatMap: function (e, r, i) {
        if ("object" == typeof e && e.tagName) {
          var o = e.tagName.toLowerCase();
          var a = e.parentNode.tagName.toLowerCase();
          var s = t.para.heatmap && t.para.heatmap.track_attr ? t.para.heatmap.track_attr : ["data-sensors-click"];
          if (!("button" === o || "a" === o || "a" === a || "button" === a || "input" === o || "textarea" === o || n.hasAttributes(e, s))) {
            l.start(null, e, o, r, i);
          }
        }
      },
      trackAllHeatMap: function (e, t, n) {
        if ("object" == typeof e && e.tagName) {
          var r = e.tagName.toLowerCase();
          l.start(null, e, r, t, n);
        }
      },
      autoTrackSinglePage: function (e, r) {
        if (this.autoTrackIsUsed) {
          var i = n.info.pageProp.url;
        } else {
          i = n.info.pageProp.referrer;
        }
        function o() {
          var e = n.info.campaignParams();
          var r = {};
          n.each(e, function (e, n, i) {
            if (-1 !== (" " + t.source_channel_standard + " ").indexOf(" " + n + " ")) {
              r["$" + n] = i[n];
            } else {
              r[n] = i[n];
            }
          });
          return r;
        }
        function a(e, r) {
          t.track("$pageview", n.extend({
            $referrer: n.isDecodeURI(t.para.url_is_decode, i),
            $url: n.isDecodeURI(t.para.url_is_decode, location.href),
            $url_path: location.pathname,
            $title: document.title
          }, e, o()), r);
          i = location.href;
        }
        e = n.isObject(e) ? e : {};
        e = n.isObject(e) ? e : {};
        if (t.is_first_visitor && !e.not_set_profile) {
          t.setOnceProfile(n.extend({
            $first_visit_time: new Date(),
            $first_referrer: n.isDecodeURI(t.para.url_is_decode, n.getReferrer()),
            $first_browser_language: navigator.language || "取值异常",
            $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "取值异常",
            $first_traffic_source_type: n.getSourceFromReferrer(),
            $first_search_keyword: n.getKeywordFromReferrer()
          }, o()));
          t.is_first_visitor = false;
        }
        if (e.not_set_profile) {
          delete e.not_set_profile;
        }
        a(e, r);
        this.autoTrackSinglePage = a;
      },
      autoTrackWithoutProfile: function (e, t) {
        e = n.isObject(e) ? e : {};
        this.autoTrack(n.extend(e, {
          not_set_profile: true
        }), t);
      },
      autoTrack: function (e, r) {
        e = n.isObject(e) ? e : {};
        var i = n.info.campaignParams();
        var o = {};
        n.each(i, function (e, n, r) {
          if (-1 !== (" " + t.source_channel_standard + " ").indexOf(" " + n + " ")) {
            o["$" + n] = r[n];
          } else {
            o[n] = r[n];
          }
        });
        if (t.is_first_visitor && !e.not_set_profile) {
          t.setOnceProfile(n.extend({
            $first_visit_time: new Date(),
            $first_referrer: n.isDecodeURI(t.para.url_is_decode, n.getReferrer()),
            $first_browser_language: navigator.language || "取值异常",
            $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "取值异常",
            $first_traffic_source_type: n.getSourceFromReferrer(),
            $first_search_keyword: n.getKeywordFromReferrer()
          }, o));
          t.is_first_visitor = false;
        }
        if (e.not_set_profile) {
          delete e.not_set_profile;
        }
        var a = location.href;
        if (t.para.is_single_page) {
          n.addHashEvent(function () {
            var i = n.getReferrer(a);
            t.track("$pageview", n.extend({
              $referrer: n.isDecodeURI(t.para.url_is_decode, i),
              $url: n.isDecodeURI(t.para.url_is_decode, location.href),
              $url_path: location.pathname,
              $title: document.title
            }, o, e), r);
            a = location.href;
          });
        }
        t.track("$pageview", n.extend({
          $referrer: n.isDecodeURI(t.para.url_is_decode, n.getReferrer()),
          $url: n.isDecodeURI(t.para.url_is_decode, location.href),
          $url_path: location.pathname,
          $title: document.title
        }, o, e), r);
        this.autoTrackIsUsed = true;
      },
      getAnonymousID: function () {
        return n.isEmptyObject(t.store._state) ? "请先初始化SDK" : t.store._state._first_id || t.store._state.first_id || t.store._state._distinct_id || t.store._state.distinct_id;
      },
      setPlugin: function (e) {
        if (!n.isObject(e)) {
          return false;
        }
        n.each(e, function (e, r) {
          if (n.isFunction(e)) {
            if (n.isObject(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[r]) {
              e(window.SensorsDataWebJSSDKPlugin[r]);
            } else {
              t.log(r + "没有获取到,请查阅文档，调整" + r + "的引入顺序！");
            }
          }
        });
      },
      useModulePlugin: function () {
        t.use.apply(t, arguments);
      },
      useAppPlugin: function () {
        this.setPlugin.apply(this, arguments);
      }
    };
    t.quick = function () {
      var e = Array.prototype.slice.call(arguments);
      var n = e[0];
      var i = e.slice(1);
      if ("string" == typeof n && r[n]) {
        return r[n].apply(r, i);
      }
      if ("function" == typeof n) {
        n.apply(t, i);
      } else {
        t.log("quick方法中没有这个功能" + e[0]);
      }
    };
    t.use = function (e, r) {
      return n.isString(e) ? n.isObject(window.SensorsDataWebJSSDKPlugin) && n.isObject(window.SensorsDataWebJSSDKPlugin[e]) && n.isFunction(window.SensorsDataWebJSSDKPlugin[e].init) ? (window.SensorsDataWebJSSDKPlugin[e].init(t, r), window.SensorsDataWebJSSDKPlugin[e]) : n.isObject(t.modules) && n.isObject(t.modules[e]) && n.isFunction(t.modules[e].init) ? (t.modules[e].init(t, r), t.modules[e]) : void t.log(e + "没有获取到,请查阅文档，调整" + e + "的引入顺序！") : (t.log("use插件名称必须是字符串！"), false);
    };
    t.track = function (e, t, n) {
      if (s.check({
        event: e,
        properties: t
      })) {
        s.send({
          type: "track",
          event: e,
          properties: t
        }, n);
      }
    };
    t.trackLink = function (e, t, r) {
      if ("object" == typeof e && e.tagName) {
        n.trackLink({
          ele: e
        }, t, r);
      } else {
        if ("object" == typeof e && e.target && e.event) {
          n.trackLink(e, t, r);
        }
      }
    };
    t.trackLinks = function (e, r, i) {
      i = i || {};
      return !(!e || "object" != typeof e) && !(!e.href || /^javascript/.test(e.href) || e.target) && void n.addEvent(e, "click", function (n) {
        n.preventDefault();
        var o = false;
        function a() {
          if (!o) {
            o = true;
            location.href = e.href;
          }
        }
        setTimeout(a, 1e3);
        t.track(r, i, a);
      });
    };
    t.setProfile = function (e, t) {
      if (s.check({
        propertiesMust: e
      })) {
        s.send({
          type: "profile_set",
          properties: e
        }, t);
      }
    };
    t.setOnceProfile = function (e, t) {
      if (s.check({
        propertiesMust: e
      })) {
        s.send({
          type: "profile_set_once",
          properties: e
        }, t);
      }
    };
    t.appendProfile = function (e, r) {
      if (s.check({
        propertiesMust: e
      })) {
        n.each(e, function (r, i) {
          if (n.isString(r)) {
            e[i] = [r];
          } else {
            if (n.isArray(r)) {
              e[i] = r;
            } else {
              delete e[i];
              t.log("appendProfile属性的值必须是字符串或者数组");
            }
          }
        });
        if (!n.isEmptyObject(e)) {
          s.send({
            type: "profile_append",
            properties: e
          }, r);
        }
      }
    };
    t.incrementProfile = function (e, r) {
      var i = e;
      if (n.isString(e)) {
        (e = {})[i] = 1;
      }
      if (s.check({
        propertiesMust: e
      })) {
        if (function (e) {
          for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t) && !/-*\d+/.test(String(e[t]))) {
            return false;
          }
          return true;
        }(e)) {
          s.send({
            type: "profile_increment",
            properties: e
          }, r);
        } else {
          t.log("profile_increment的值只能是数字");
        }
      }
    };
    t.deleteProfile = function (e) {
      s.send({
        type: "profile_delete"
      }, e);
      c.set("distinct_id", n.UUID());
      c.set("first_id", "");
    };
    t.unsetProfile = function (e, r) {
      var i = e;
      var o = {};
      if (n.isString(e)) {
        (e = []).push(i);
      }
      if (n.isArray(e)) {
        n.each(e, function (e) {
          if (n.isString(e)) {
            o[e] = true;
          } else {
            t.log("profile_unset给的数组里面的值必须时string,已经过滤掉", e);
          }
        });
        s.send({
          type: "profile_unset",
          properties: o
        }, r);
      } else {
        t.log("profile_unset的参数是数组");
      }
    };
    t.identify = function (e, r) {
      if ("number" == typeof e) {
        e = String(e);
      }
      var i = c.getFirstId();
      if (undefined === e) {
        var o = n.UUID();
        if (i) {
          c.set("first_id", o);
        } else {
          c.set("distinct_id", o);
        }
      } else if (s.check({
        distinct_id: e
      })) {
        if (true === r) {
          if (i) {
            c.set("first_id", e);
          } else {
            c.set("distinct_id", e);
          }
        } else {
          if (i) {
            c.change("first_id", e);
          } else {
            c.change("distinct_id", e);
          }
        }
      } else {
        t.log("identify的参数必须是字符串");
      }
    };
    t.trackSignup = function (e, t, n, r) {
      if (s.check({
        distinct_id: e,
        event: t,
        properties: n
      })) {
        var i = c.getFirstId() || c.getDistinctId();
        c.set("distinct_id", e);
        s.send({
          original_id: i,
          distinct_id: e,
          type: "track_signup",
          event: t,
          properties: n
        }, r);
      }
    };
    t.registerPage = function (e) {
      if (s.check({
        properties: e
      })) {
        n.extend(n.info.currentProps, e);
      } else {
        t.log("register输入的参数有误");
      }
    };
    t.clearAllRegister = function (e) {
      c.clearAllProps(e);
    };
    t.clearPageRegister = function (e) {
      if (n.isArray(e) && e.length > 0) {
        for (var t = 0; t < e.length; t++) {
          if (n.isString(e[t]) && e[t] in n.info.currentProps) {
            delete n.info.currentProps[e[t]];
          }
        }
      } else if (true === e) {
        for (var t in n.info.currentProps) delete n.info.currentProps[t];
      }
    };
    t.register = function (e) {
      if (s.check({
        properties: e
      })) {
        c.setProps(e);
      } else {
        t.log("register输入的参数有误");
      }
    };
    t.registerOnce = function (e) {
      if (s.check({
        properties: e
      })) {
        c.setPropsOnce(e);
      } else {
        t.log("registerOnce输入的参数有误");
      }
    };
    t.registerSession = function (e) {
      if (s.check({
        properties: e
      })) {
        c.setSessionProps(e);
      } else {
        t.log("registerSession输入的参数有误");
      }
    };
    t.registerSessionOnce = function (e) {
      if (s.check({
        properties: e
      })) {
        c.setSessionPropsOnce(e);
      } else {
        t.log("registerSessionOnce输入的参数有误");
      }
    };
    t.login = function (e, n) {
      if ("number" == typeof e) {
        e = String(e);
      }
      if (s.check({
        distinct_id: e
      })) {
        var r = c.getFirstId();
        var i = c.getDistinctId();
        if (e !== i) {
          if (!r) {
            c.set("first_id", i);
          }
          t.trackSignup(e, "$SignUp", {}, n);
        } else {
          if (n) {
            n();
          }
        }
      } else {
        t.log("login的参数必须是字符串");
        if (n) {
          n();
        }
      }
    };
    t.logout = function (e) {
      var r = c.getFirstId();
      if (r) {
        c.set("first_id", "");
        if (true === e) {
          var i = n.UUID();
          c.set("distinct_id", i);
        } else {
          c.set("distinct_id", r);
        }
      } else {
        t.log("没有first_id，logout失败");
      }
    };
    t.getPresetProperties = function () {
      var e;
      var r;
      var i = {
        $is_first_day: n.cookie.getNewUser(),
        $referrer: n.isDecodeURI(t.para.url_is_decode, n.info.pageProp.referrer) || "",
        $referrer_host: n.info.pageProp.referrer ? n.getHostname(n.info.pageProp.referrer) : "",
        $url: n.isDecodeURI(t.para.url_is_decode, location.href),
        $url_path: location.pathname,
        $title: document.title || "",
        _distinct_id: c.getDistinctId()
      };
      var o = n.extend({}, n.info.properties(), t.store.getProps(), (e = n.info.campaignParams(), r = {}, n.each(e, function (e, n, i) {
        if (-1 !== (" " + t.source_channel_standard + " ").indexOf(" " + n + " ")) {
          r["$" + n] = i[n];
        } else {
          r[n] = i[n];
        }
      }), r), i);
      if (t.para.preset_properties.latest_referrer && t.para.preset_properties.latest_referrer_host) {
        o.$latest_referrer_host = "" === o.$latest_referrer ? "" : n.getHostname(o.$latest_referrer);
      }
      return o;
    };
    t.detectMode = function () {
      var e = {
        searchKeywordMatch: location.search.match(/sa-request-id=([^&#]+)/),
        isSeachHasKeyword: function () {
          var e = this.searchKeywordMatch;
          return !!(e && e[0] && e[1]) && ("string" == typeof sessionStorage.getItem("sensors-visual-mode") && sessionStorage.removeItem("sensors-visual-mode"), true);
        },
        hasKeywordHandle: function () {
          var e = this.searchKeywordMatch;
          var t = location.search.match(/sa-request-type=([^&#]+)/);
          var r = location.search.match(/sa-request-url=([^&#]+)/);
          l.setNotice(r);
          if (n.sessionStorage.isSupport()) {
            if (r && r[0] && r[1]) {
              sessionStorage.setItem("sensors_heatmap_url", decodeURIComponent(r[1]));
            }
            sessionStorage.setItem("sensors_heatmap_id", e[1]);
            if (t && t[0] && t[1]) {
              if ("1" === t[1] || "2" === t[1] || "3" === t[1]) {
                t = t[1];
                sessionStorage.setItem("sensors_heatmap_type", t);
              } else {
                t = null;
              }
            } else {
              t = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem("sensors_heatmap_type") : null;
            }
          }
          this.isReady(e[1], t);
        },
        isReady: function (e, r, i) {
          if (t.para.heatmap_url) {
            n.loadScript({
              success: function () {
                setTimeout(function () {
                  if ("undefined" != typeof sa_jssdk_heatmap_render) {
                    sa_jssdk_heatmap_render(t, e, r, i);
                    if ("object" == typeof console && "function" == typeof console.log) {
                      if (!(t.heatmap_version && t.heatmap_version === t.lib_version)) {
                        console.log("heatmap.js与sensorsdata.js版本号不一致，可能存在风险!");
                      }
                    }
                  }
                }, 0);
              },
              error: function () {},
              type: "js",
              url: t.para.heatmap_url
            });
          } else {
            t.log("没有指定heatmap_url的路径");
          }
        },
        isStorageHasKeyword: function () {
          return n.sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id");
        },
        storageHasKeywordHandle: function () {
          l.setNotice();
          e.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href);
        }
      };
      var r = {
        isStorageHasKeyword: function () {
          return n.sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors-visual-mode");
        },
        isSearchHasKeyword: function () {
          return !!location.search.match(/sa-visual-mode=true/) && ("string" == typeof sessionStorage.getItem("sensors_heatmap_id") && sessionStorage.removeItem("sensors_heatmap_id"), true);
        },
        loadVtrack: function () {
          n.loadScript({
            success: function () {},
            error: function () {},
            type: "js",
            url: t.para.vtrack_url ? t.para.vtrack_url : location.protocol + "//static.sensorsdata.cn/sdk/" + t.lib_version + "/vtrack.min.js"
          });
        },
        messageListener: function (e) {
          if ("sa-fe" !== e.data.source) {
            return false;
          }
          if ("v-track-mode" === e.data.type) {
            if (e.data.data && e.data.data.isVtrack) {
              if (n.sessionStorage.isSupport()) {
                sessionStorage.setItem("sensors-visual-mode", "true");
              }
              if (e.data.data.userURL && location.search.match(/sa-visual-mode=true/)) {
                o = e.data.data.userURL;
                var i = n.secCheck.isHttpUrl(o) ? n.secCheck.removeScriptProtocol(o) : (t.log("可视化模式检测 URL 失败"), false);
                if (i) {
                  window.location.href = i;
                }
              } else {
                r.loadVtrack();
              }
            }
            window.removeEventListener("message", r.messageListener, false);
          }
          var o;
        },
        removeMessageHandle: function () {
          if (window.removeEventListener) {
            window.removeEventListener("message", r.messageListener, false);
          }
        },
        verifyVtrackMode: function () {
          if (window.addEventListener) {
            window.addEventListener("message", r.messageListener, false);
          }
          r.postMessage();
        },
        postMessage: function () {
          if (window.parent && window.parent.postMessage) {
            window.parent.postMessage({
              source: "sa-web-sdk",
              type: "v-is-vtrack",
              data: {
                sdkversion: "1.18.6"
              }
            }, "*");
          }
        },
        notifyUser: function () {
          if (window.addEventListener) {
            window.addEventListener("message", function e(t) {
              if ("sa-fe" !== t.data.source) {
                return false;
              }
              if ("v-track-mode" === t.data.type) {
                if (t.data.data && t.data.data.isVtrack) {
                  alert("当前版本不支持，请升级部署神策数据治理");
                }
                window.removeEventListener("message", e, false);
              }
            }, false);
          }
          r.postMessage();
        }
      };
      var i = function (e) {
        var r = t.bridge.initDefineBridgeInfo();
        function i() {
          var e = [];
          if (!r.touch_app_bridge) {
            e.push(t.debug.defineMode("1"));
          }
          if (!n.isObject(t.para.app_js_bridge)) {
            e.push(t.debug.defineMode("2"));
            r.verify_success = false;
          }
          if (!(n.isObject(t.para.heatmap) && "default" == t.para.heatmap.clickmap)) {
            e.push(t.debug.defineMode("3"));
          }
          if ("fail" === r.verify_success) {
            e.push(t.debug.defineMode("4"));
          }
          var i = {
            callType: "app_alert",
            data: e
          };
          if (SensorsData_App_Visual_Bridge && SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info) {
            SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info(JSON.stringify(i));
          } else {
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage) {
              window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(i));
            }
          }
        }
        if (n.isObject(window.SensorsData_App_Visual_Bridge) && window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode && (true === window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode || window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode())) {
          if (n.isObject(t.para.heatmap) && "default" == t.para.heatmap.clickmap) {
            if (n.isObject(t.para.app_js_bridge) && "success" === r.verify_success) {
              if (e) {
                sa_jssdk_app_define_mode(t, e);
              } else {
                var o = location.protocol;
                o = n.indexOf(["http:", "https:"], o) > -1 ? o : "https:";
                n.loadScript({
                  success: function () {
                    setTimeout(function () {
                      if ("undefined" != typeof sa_jssdk_app_define_mode) {
                        sa_jssdk_app_define_mode(t, e);
                      }
                    }, 0);
                  },
                  error: function () {},
                  type: "js",
                  url: o + "//static.sensorsdata.cn/sdk/" + t.lib_version + "/vapph5define.min.js"
                });
              }
            } else {
              i();
            }
          } else {
            i();
          }
        }
      };
      if (t.para.heatmap && t.para.heatmap.collect_tags && n.isObject(t.para.heatmap.collect_tags)) {
        n.each(t.para.heatmap.collect_tags, function (e, n) {
          if ("div" !== n && e) {
            t.heatmap.otherTags.push(n);
          }
        });
      }
      if (e.isSeachHasKeyword()) {
        e.hasKeywordHandle();
      } else {
        if (window.parent !== self && r.isSearchHasKeyword()) {
          r.verifyVtrackMode();
        } else {
          if (e.isStorageHasKeyword()) {
            e.storageHasKeywordHandle();
          } else {
            if (window.parent !== self && r.isStorageHasKeyword()) {
              r.verifyVtrackMode();
            } else {
              t.readyState.setState(3);
              new t.JSBridge({
                type: "visualized",
                app_call_js: function () {
                  if ("undefined" != typeof sa_jssdk_app_define_mode) {
                    i(true);
                  } else {
                    i(false);
                  }
                }
              });
              i(false);
              t.bridge.app_js_bridge_v1();
              n.info.initPage();
              if (t.para.is_track_single_page) {
                n.addSinglePageEvent(function (e) {
                  var r = function (r) {
                    r = r || {};
                    if (e !== location.href) {
                      n.info.pageProp.referrer = e;
                      e = n.isDecodeURI(t.para.url_is_decode, e);
                      t.quick("autoTrack", n.extend({
                        $url: n.isDecodeURI(t.para.url_is_decode, location.href),
                        $referrer: e
                      }, r));
                    }
                  };
                  if ("boolean" == typeof t.para.is_track_single_page) {
                    r();
                  } else if ("function" == typeof t.para.is_track_single_page) {
                    var i = t.para.is_track_single_page();
                    if (n.isObject(i)) {
                      r(i);
                    } else {
                      if (true === i) {
                        r();
                      }
                    }
                  }
                });
              }
              if (t.para.batch_send) {
                n.addEvent(window, "onpagehide" in window ? "pagehide" : "unload", function (e) {
                  t.batchSend.clearPendingStatus();
                });
                t.batchSend.batchInterval();
              }
              t.store.init();
              t.vtrackcollect.init();
              t.readyState.setState(4);
              if (t._q && n.isArray(t._q) && t._q.length > 0) {
                n.each(t._q, function (e) {
                  t[e[0]].apply(t, Array.prototype.slice.call(e[1]));
                });
              }
              if (n.isObject(t.para.heatmap)) {
                l.initHeatmap();
                l.initScrollmap();
              }
              r.notifyUser();
            }
          }
        }
      }
    };
    e.prototype = {
      add: function (e) {
        if (n.isObject(e)) {
          this.writeStore(e);
          if (!("track_signup" !== e.type && "$pageview" !== e.event)) {
            this.sendStrategy();
          }
        }
      },
      clearPendingStatus: function () {
        if (this.sendingItemKeys.length) {
          this.removePendingItems(this.sendingItemKeys);
        }
      },
      remove: function (e) {
        if (this.sendingData > 0) {
          --this.sendingData;
        }
        if (n.isArray(e) && e.length > 0) {
          n.each(e, function (e) {
            n.localStorage.remove(e);
          });
        }
      },
      send: function (e) {
        var r;
        var i = this;
        if (n.isString(t.para.server_url) && "" !== t.para.server_url || n.isArray(t.para.server_url) && t.para.server_url.length) {
          r = n.isArray(t.para.server_url) ? t.para.server_url[0] : t.para.server_url;
          n.ajax({
            url: r,
            type: "POST",
            data: "data_list=" + encodeURIComponent(n.base64Encode(JSON.stringify(e.vals))),
            credentials: false,
            timeout: t.para.batch_send.datasend_timeout,
            cors: true,
            success: function () {
              i.remove(e.keys);
              i.removePendingItems(e.keys);
            },
            error: function () {
              if (i.sendingData > 0) {
                --i.sendingData;
              }
              i.removePendingItems(e.keys);
            }
          });
        } else {
          t.log("当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！");
        }
      },
      appendPendingItems: function (e) {
        if (false !== n.isArray(e)) {
          this.sendingItemKeys = n.unique(this.sendingItemKeys.concat(e));
          try {
            var t = this.getPendingItems();
            var r = n.unique(t.concat(e));
            localStorage.setItem("sawebjssdk-sendingitems", JSON.stringify(r));
          } catch (i) {}
        }
      },
      removePendingItems: function (e) {
        if (false !== n.isArray(e)) {
          if (this.sendingItemKeys.length) {
            this.sendingItemKeys = n.filter(this.sendingItemKeys, function (t) {
              return -1 === n.indexOf(e, t);
            });
          }
          try {
            var t = this.getPendingItems();
            var r = n.filter(t, function (t) {
              return -1 === n.indexOf(e, t);
            });
            localStorage.setItem("sawebjssdk-sendingitems", JSON.stringify(r));
          } catch (i) {}
        }
      },
      getPendingItems: function () {
        var e = [];
        try {
          var t = localStorage.getItem("sawebjssdk-sendingitems");
          if (t) {
            e = JSON.parse(t);
          }
        } catch (r) {}
        return e;
      },
      sendPrepare: function (e) {
        this.appendPendingItems(e.keys);
        var t = e.vals;
        if (t.length > 0) {
          this.send({
            keys: e.keys,
            vals: t
          });
        }
      },
      sendStrategy: function () {
        if (false === document.hasFocus()) {
          return false;
        }
        var e = this.readStore();
        if (e.keys.length > 0 && 0 === this.sendingData) {
          this.sendingData = 1;
          this.sendPrepare(e);
        }
      },
      batchInterval: function () {
        var e = this;
        setInterval(function () {
          e.sendStrategy();
        }, t.para.batch_send.send_interval);
      },
      readStore: function () {
        for (var e = [], r = [], i = null, o = new Date().getTime(), a = localStorage.length, s = this.getPendingItems(), c = 0; c < a; c++) {
          var u = localStorage.key(c);
          if (0 === u.indexOf("sawebjssdk-") && /^sawebjssdk\-\d+$/.test(u)) {
            if (s.length && n.indexOf(s, u) > -1) {
              continue;
            }
            if (i = localStorage.getItem(u)) {
              if ((i = n.safeJSONParse(i)) && n.isObject(i)) {
                i._flush_time = o;
                e.push(u);
                r.push(i);
              } else {
                localStorage.removeItem(u);
                t.log("localStorage-数据parse异常" + i);
              }
            } else {
              localStorage.removeItem(u);
              t.log("localStorage-数据取值异常" + i);
            }
          }
        }
        return {
          keys: e,
          vals: r
        };
      },
      writeStore: function (e) {
        var t = String(n.getRandom()).slice(2, 5) + String(n.getRandom()).slice(2, 5) + String(new Date().getTime()).slice(3);
        localStorage.setItem("sawebjssdk-" + t, JSON.stringify(e));
      }
    };
    t.batchSend = new e();
    var i = {
      getSendUrl: function (e, t) {
        var r = n.base64Encode(t);
        var i = "crc=" + n.hashCode(r);
        return -1 !== e.indexOf("?") ? e + "&data=" + encodeURIComponent(r) + "&ext=" + encodeURIComponent(i) : e + "?data=" + encodeURIComponent(r) + "&ext=" + encodeURIComponent(i);
      },
      getSendData: function (e) {
        var t = n.base64Encode(e);
        var r = "crc=" + n.hashCode(t);
        return "data=" + encodeURIComponent(t) + "&ext=" + encodeURIComponent(r);
      },
      getInstance: function (e) {
        var r = new this[this.getSendType(e)](e);
        var i = r.start;
        r.start = function () {
          if (n.isObject(t.para.is_debug) && t.para.is_debug.storage && t.store.requests) {
            t.store.requests.push({
              name: this.server_url,
              initiatorType: this.img ? "img" : "xmlhttprequest",
              entryType: "resource",
              requestData: this.data
            });
          }
          var e = this;
          i.apply(this, arguments);
          setTimeout(function () {
            e.isEnd(true);
          }, t.para.callback_timeout);
        };
        r.end = function () {
          if (this.callback) {
            this.callback();
          }
          var e = this;
          setTimeout(function () {
            if (e.lastClear) {
              e.lastClear();
            }
          }, t.para.datasend_timeout - t.para.callback_timeout);
        };
        r.isEnd = function (e) {
          if (!this.received) {
            this.received = true;
            this.end();
            var n = this;
            if (e) {
              if (t.para.queue_timeout - t.para.callback_timeout <= 0) {
                n.close();
              } else {
                setTimeout(function () {
                  n.close();
                }, t.para.queue_timeout - t.para.callback_timeout);
              }
            } else {
              n.close();
            }
          }
        };
        return r;
      },
      getRealtimeInstance: function (e) {
        var n = new this[this.getSendType(e)](e);
        var r = n.start;
        n.start = function () {
          var e = this;
          r.apply(this, arguments);
          setTimeout(function () {
            e.isEnd(true);
          }, t.para.callback_timeout);
        };
        n.end = function () {
          if (this.callback) {
            this.callback();
          }
          var e = this;
          setTimeout(function () {
            if (e.lastClear) {
              e.lastClear();
            }
          }, t.para.datasend_timeout - t.para.callback_timeout);
        };
        n.isEnd = function (e) {
          if (!this.received) {
            this.received = true;
            this.end();
          }
        };
        return n;
      },
      getSendType: function (e) {
        var r = ["image", "ajax", "beacon"];
        var i = r[0];
        if ("beacon" === (i = e.config && n.indexOf(r, e.config.send_type) > -1 ? e.config.send_type : t.para.send_type) && false === n.isSupportBeaconSend()) {
          i = "image";
        }
        if ("ajax" === i && false === n.isSupportCors()) {
          i = "image";
        }
        return i;
      },
      image: function (e) {
        this.callback = e.callback;
        this.img = document.createElement("img");
        this.img.width = 1;
        this.img.height = 1;
        if (t.para.img_use_crossorigin) {
          this.img.crossOrigin = "anonymous";
        }
        this.data = e.data;
        this.server_url = i.getSendUrl(e.server_url, e.data);
      }
    };
    i.image.prototype.start = function () {
      var e = this;
      if (t.para.ignore_oom) {
        this.img.onload = function () {
          this.onload = null;
          this.onerror = null;
          this.onabort = null;
          e.isEnd();
        };
        this.img.onerror = function () {
          this.onload = null;
          this.onerror = null;
          this.onabort = null;
          e.isEnd();
        };
        this.img.onabort = function () {
          this.onload = null;
          this.onerror = null;
          this.onabort = null;
          e.isEnd();
        };
      }
      this.img.src = this.server_url;
    };
    i.image.prototype.lastClear = function () {
      this.img.src = "";
    };
    i.ajax = function (e) {
      this.callback = e.callback;
      this.server_url = e.server_url;
      this.data = i.getSendData(e.data);
    };
    i.ajax.prototype.start = function () {
      var e = this;
      n.ajax({
        url: this.server_url,
        type: "POST",
        data: this.data,
        credentials: false,
        timeout: t.para.datasend_timeout,
        cors: true,
        success: function () {
          e.isEnd();
        },
        error: function () {
          e.isEnd();
        }
      });
    };
    i.beacon = function (e) {
      this.callback = e.callback;
      this.server_url = e.server_url;
      this.data = i.getSendData(e.data);
    };
    i.beacon.prototype.start = function () {
      var e = this;
      if ("object" == typeof navigator && "function" == typeof navigator.sendBeacon) {
        navigator.sendBeacon(this.server_url, this.data);
      }
      setTimeout(function () {
        e.isEnd();
      }, 40);
    };
    var a = {};
    t.sendState = a;
    t.events = new n.eventEmitter();
    a.queue = n.autoExeQueue();
    a.getSendCall = function (e, r, i) {
      if (t.is_heatmap_render_mode) {
        return false;
      }
      if (t.readyState.state < 3) {
        t.log("初始化没有完成");
        return false;
      }
      e._track_id = Number(String(n.getRandom()).slice(2, 5) + String(n.getRandom()).slice(2, 4) + String(new Date().getTime()).slice(-4));
      if (t.para.use_client_time) {
        e._flush_time = new Date().getTime();
      }
      var o = e;
      e = JSON.stringify(e);
      var a = {
        data: o,
        config: r,
        callback: i
      };
      t.events.tempAdd("send", o);
      if (!t.para.app_js_bridge && t.para.batch_send && localStorage.length < 200) {
        t.log(o);
        t.batchSend.add(a.data);
        return false;
      }
      t.bridge.dataSend(a, this, i);
      t.log(o);
    };
    a.prepareServerUrl = function (e) {
      if ("object" == typeof e.config && e.config.server_url) {
        this.sendCall(e, e.config.server_url, e.callback);
      } else if (n.isArray(t.para.server_url) && t.para.server_url.length) {
        for (var r = 0; r < t.para.server_url.length; r++) {
          this.sendCall(e, t.para.server_url[r]);
        }
      } else if ("string" == typeof t.para.server_url && "" !== t.para.server_url) {
        this.sendCall(e, t.para.server_url, e.callback);
      } else {
        t.log("当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！");
      }
    };
    a.sendCall = function (e, r, i) {
      var o = {
        server_url: r,
        data: JSON.stringify(e.data),
        callback: i,
        config: e.config
      };
      if (n.isObject(t.para.jsapp) && !t.para.jsapp.isOnline && "function" == typeof t.para.jsapp.setData) {
        delete o.callback;
        o = JSON.stringify(o);
        t.para.jsapp.setData(o);
      } else {
        if (t.para.use_client_time) {
          this.realtimeSend(o);
        } else {
          this.pushSend(o);
        }
      }
    };
    a.pushSend = function (e) {
      var t = i.getInstance(e);
      var n = this;
      t.close = function () {
        n.queue.close();
      };
      this.queue.enqueue(t);
    };
    a.realtimeSend = function (e) {
      i.getRealtimeInstance(e).start();
    };
    var s = {};
    t.saEvent = s;
    s.checkOption = {
      regChecks: {
        regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i
      },
      checkPropertiesKey: function (e) {
        var t = this;
        var r = true;
        n.each(e, function (e, n) {
          if (!t.regChecks.regName.test(n)) {
            r = false;
          }
        });
        return r;
      },
      check: function (e, t) {
        return "string" == typeof this[e] ? this[this[e]](t) : n.isFunction(this[e]) ? this[e](t) : undefined;
      },
      str: function (e) {
        return !!n.isString(e) || (t.log("请检查参数格式,必须是字符串"), true);
      },
      properties: function (e) {
        n.strip_sa_properties(e);
        return !e || (n.isObject(e) ? !!this.checkPropertiesKey(e) || (t.log("properties 里的自定义属性名需要是合法的变量名，不能以数字开头，且只包含：大小写字母、数字、下划线，自定义属性不能以 $ 开头"), true) : (t.log("properties可以没有，但有的话必须是对象"), true));
      },
      propertiesMust: function (e) {
        n.strip_sa_properties(e);
        return undefined === e || !n.isObject(e) || n.isEmptyObject(e) ? (t.log("properties必须是对象且有值"), true) : !!this.checkPropertiesKey(e) || (t.log("properties 里的自定义属性名需要是合法的变量名，不能以数字开头，且只包含：大小写字母、数字、下划线，自定义属性不能以 $ 开头"), true);
      },
      event: function (e) {
        return !(!n.isString(e) || !this.regChecks.regName.test(e)) || (t.log("请检查参数格式，eventName 必须是字符串，且需是合法的变量名，即不能以数字开头，且只包含：大小写字母、数字、下划线和 $,其中以 $ 开头的表明是系统的保留字段，自定义事件名请不要以 $ 开头"), true);
      },
      test_id: "str",
      group_id: "str",
      distinct_id: function (e) {
        return !(!n.isString(e) || !/^.{1,255}$/.test(e)) || (t.log("distinct_id必须是不能为空，且小于255位的字符串"), false);
      }
    };
    s.check = function (e) {
      for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t) && !this.checkOption.check(t, e[t])) {
        return false;
      }
      return true;
    };
    s.send = function (e, r) {
      var i = {
        distinct_id: c.getDistinctId(),
        lib: {
          $lib: "js",
          $lib_method: "code",
          $lib_version: String(t.lib_version)
        },
        properties: {}
      };
      if (n.isObject(e) && n.isObject(e.properties) && !n.isEmptyObject(e.properties)) {
        if (e.properties.$lib_detail) {
          i.lib.$lib_detail = e.properties.$lib_detail;
          delete e.properties.$lib_detail;
        }
        if (e.properties.$lib_method) {
          i.lib.$lib_method = e.properties.$lib_method;
          delete e.properties.$lib_method;
        }
      }
      n.extend(i, t.store.getUnionId(), e);
      if (n.isObject(e.properties) && !n.isEmptyObject(e.properties)) {
        n.extend(i.properties, e.properties);
      }
      if (!(e.type && "profile" === e.type.slice(0, 7))) {
        i.properties = n.extend({}, n.info.properties(), c.getProps(), c.getSessionProps(), n.info.currentProps, i.properties);
        if (t.para.preset_properties.latest_referrer && !n.isString(i.properties.$latest_referrer)) {
          i.properties.$latest_referrer = "取值异常";
        }
        if (t.para.preset_properties.latest_search_keyword && !n.isString(i.properties.$latest_search_keyword)) {
          i.properties.$latest_search_keyword = "取值异常";
        }
        if (t.para.preset_properties.latest_traffic_source_type && !n.isString(i.properties.$latest_traffic_source_type)) {
          i.properties.$latest_traffic_source_type = "取值异常";
        }
        if (t.para.preset_properties.latest_landing_page && !n.isString(i.properties.$latest_landing_page)) {
          i.properties.$latest_landing_page = "取值异常";
        }
        if ("not_collect" === t.para.preset_properties.latest_wx_ad_click_id) {
          delete i.properties._latest_wx_ad_click_id;
          delete i.properties._latest_wx_ad_hash_key;
          delete i.properties._latest_wx_ad_callbacks;
        } else {
          if (t.para.preset_properties.latest_wx_ad_click_id && !n.isString(i.properties._latest_wx_ad_click_id)) {
            i.properties._latest_wx_ad_click_id = "取值异常";
            i.properties._latest_wx_ad_hash_key = "取值异常";
            i.properties._latest_wx_ad_callbacks = "取值异常";
          }
        }
        if (n.isString(i.properties._latest_wx_ad_click_id)) {
          i.properties.$url = n.isDecodeURI(t.para.url_is_decode, window.location.href);
        }
      }
      if (i.properties.$time && n.isDate(i.properties.$time)) {
        i.time = 1 * i.properties.$time;
        delete i.properties.$time;
      } else {
        if (t.para.use_client_time) {
          i.time = 1 * new Date();
        }
      }
      var o = t.vtrackcollect.customProp.getVtrackProps(JSON.parse(JSON.stringify(i)));
      if (n.isObject(o) && !n.isEmptyObject(o)) {
        i.properties = n.extend(i.properties, o);
      }
      n.parseSuperProperties(i);
      n.filterReservedProperties(i.properties);
      n.searchObjDate(i);
      n.searchObjString(i);
      n.searchZZAppStyle(i);
      var a = n.searchConfigData(i.properties);
      u.checkIsAddSign(i);
      u.checkIsFirstTime(i);
      t.addReferrerHost(i);
      t.addPropsHook(i);
      if (true === t.para.debug_mode) {
        t.log(i);
        this.debugPath(JSON.stringify(i), r);
      } else {
        t.sendState.getSendCall(i, a, r);
      }
    };
    s.debugPath = function (e, r) {
      var i;
      var o = e;
      i = -1 !== t.para.debug_mode_url.indexOf("?") ? t.para.debug_mode_url + "&data=" + encodeURIComponent(n.base64Encode(e)) : t.para.debug_mode_url + "?data=" + encodeURIComponent(n.base64Encode(e));
      n.ajax({
        url: i,
        type: "GET",
        cors: true,
        header: {
          "Dry-Run": String(t.para.debug_mode_upload)
        },
        success: function (e) {
          if (true === n.isEmptyObject(e)) {
            alert("debug数据发送成功" + o);
          } else {
            alert("debug失败 错误原因" + JSON.stringify(e));
          }
        }
      });
    };
    var c = t.store = {
      requests: [],
      _sessionState: {},
      _state: {
        distinct_id: "",
        first_id: "",
        props: {}
      },
      getProps: function () {
        return this._state.props || {};
      },
      getSessionProps: function () {
        return this._sessionState;
      },
      getDistinctId: function () {
        return this._state._distinct_id || this._state.distinct_id;
      },
      getUnionId: function () {
        var e = {};
        var t = this._state._first_id || this._state.first_id;
        var n = this._state._distinct_id || this._state.distinct_id;
        if (t && n) {
          e.login_id = n;
          e.anonymous_id = t;
        } else {
          e.anonymous_id = n;
        }
        return e;
      },
      getFirstId: function () {
        return this._state._first_id || this._state.first_id;
      },
      toState: function (e) {
        var r = null;
        if (null != e && n.isJSONString(e)) {
          r = JSON.parse(e);
          this._state = n.extend(r);
          if (r.distinct_id) {
            if ("object" == typeof r.props) {
              for (var i in r.props) if ("string" == typeof r.props[i]) {
                r.props[i] = r.props[i].slice(0, t.para.max_referrer_string_length);
              }
              this.save();
            }
          } else {
            this.set("distinct_id", n.UUID());
            t.debug.distinct_id("1", e);
          }
        } else {
          this.set("distinct_id", n.UUID());
          t.debug.distinct_id("2", e);
        }
      },
      initSessionState: function () {
        var e = n.cookie.get("sensorsdata2015session");
        var t = null;
        if (null !== e && "object" == typeof (t = JSON.parse(e))) {
          this._sessionState = t || {};
        }
      },
      setOnce: function (e, t) {
        if (!(e in this._state)) {
          this.set(e, t);
        }
      },
      set: function (e, n) {
        this._state = this._state || {};
        var r = this._state.distinct_id;
        this._state[e] = n;
        if ("first_id" === e) {
          delete this._state._first_id;
        } else {
          if ("distinct_id" === e) {
            delete this._state._distinct_id;
          }
        }
        this.save();
        if ("distinct_id" === e && r) {
          t.events.tempAdd("changeDistinctId", n);
        }
      },
      change: function (e, t) {
        this._state["_" + e] = t;
      },
      setSessionProps: function (e) {
        var t = this._sessionState;
        n.extend(t, e);
        this.sessionSave(t);
      },
      setSessionPropsOnce: function (e) {
        var t = this._sessionState;
        n.coverExtend(t, e);
        this.sessionSave(t);
      },
      setProps: function (e, r) {
        var i = {};
        for (var o in i = r ? e : n.extend(this._state.props || {}, e)) if ("string" == typeof i[o]) {
          i[o] = i[o].slice(0, t.para.max_referrer_string_length);
        }
        this.set("props", i);
      },
      setPropsOnce: function (e) {
        var t = this._state.props || {};
        n.coverExtend(t, e);
        this.set("props", t);
      },
      clearAllProps: function (e) {
        this._sessionState = {};
        if (n.isArray(e) && e.length > 0) {
          for (var t = 0; t < e.length; t++) {
            if (n.isString(e[t]) && -1 === e[t].indexOf("latest_") && e[t] in this._state.props) {
              delete this._state.props[e[t]];
            }
          }
        } else {
          for (var t in this._state.props) if (1 !== t.indexOf("latest_")) {
            delete this._state.props[t];
          }
        }
        this.sessionSave({});
        this.save();
      },
      sessionSave: function (e) {
        this._sessionState = e;
        n.cookie.set("sensorsdata2015session", JSON.stringify(this._sessionState), 0);
      },
      save: function () {
        var e = JSON.parse(JSON.stringify(this._state));
        delete e._first_id;
        delete e._distinct_id;
        var r = JSON.stringify(e);
        if (t.para.encrypt_cookie) {
          r = n.cookie.encrypt(r);
        }
        n.cookie.set(this.getCookieName(), r, 73e3, t.para.cross_subdomain);
      },
      getCookieName: function () {
        var r = "";
        if (false === t.para.cross_subdomain) {
          try {
            r = n.URL(location.href).hostname;
          } catch (e) {
            t.log(e);
          }
          r = "string" == typeof r && "" !== r ? "sa_jssdk_2015_" + r.replace(/\./g, "_") : "sa_jssdk_2015_root";
        } else {
          r = "sensorsdata2015jssdkcross";
        }
        return r;
      },
      init: function () {
        this.initSessionState();
        var e = n.UUID();
        var r = n.cookie.get(this.getCookieName());
        if (null === (r = n.cookie.resolveValue(r))) {
          t.is_first_visitor = true;
          this.set("distinct_id", e);
        } else {
          if (!(n.isJSONString(r) && JSON.parse(r).distinct_id)) {
            t.is_first_visitor = true;
          }
          this.toState(r);
        }
        u.setDeviceId(e);
        u.storeInitCheck();
        u.checkIsFirstLatest();
      }
    };
    var u = {
      checkIsAddSign: function (e) {
        if ("track" === e.type) {
          if (n.cookie.getNewUser()) {
            e.properties.$is_first_day = true;
          } else {
            e.properties.$is_first_day = false;
          }
        }
      },
      is_first_visit_time: false,
      checkIsFirstTime: function (e) {
        if ("track" === e.type && "$pageview" === e.event) {
          if (this.is_first_visit_time) {
            e.properties.$is_first_time = true;
            this.is_first_visit_time = false;
          } else {
            e.properties.$is_first_time = false;
          }
        }
      },
      setDeviceId: function (e) {
        var r = null;
        var i = n.cookie.get("sensorsdata2015jssdkcross");
        var o = {};
        if (null != (i = n.cookie.resolveValue(i)) && n.isJSONString(i) && (o = JSON.parse(i)).$device_id) {
          r = o.$device_id;
        }
        r = r || e;
        if (true === t.para.cross_subdomain) {
          c.set("$device_id", r);
        } else {
          o.$device_id = r;
          o = JSON.stringify(o);
          if (t.para.encrypt_cookie) {
            o = n.cookie.encrypt(o);
          }
          n.cookie.set("sensorsdata2015jssdkcross", o, null, true);
        }
        if (t.para.is_track_device_id) {
          n.info.currentProps.$device_id = r;
        }
      },
      storeInitCheck: function () {
        if (t.is_first_visitor) {
          var e = new Date();
          var r = {
            h: 23 - e.getHours(),
            m: 59 - e.getMinutes(),
            s: 59 - e.getSeconds()
          };
          n.cookie.set(n.cookie.getCookieName("new_user"), "1", 3600 * r.h + 60 * r.m + r.s + "s");
          this.is_first_visit_time = true;
        } else {
          if (!n.cookie.getNewUser()) {
            this.checkIsAddSign = function (e) {
              if ("track" === e.type) {
                e.properties.$is_first_day = false;
              }
            };
          }
          this.checkIsFirstTime = function (e) {
            if ("track" === e.type && "$pageview" === e.event) {
              e.properties.$is_first_time = false;
            }
          };
        }
      },
      checkIsFirstLatest: function () {
        for (var e = n.info.pageProp.url_domain, r = ["$utm_source", "$utm_medium", "$utm_campaign", "$utm_content", "$utm_term"], i = c.getProps(), o = 0; o < r.length; o++) {
          if (r[o] in i) {
            delete i[r[o]];
          }
        }
        c.setProps(i, true);
        var a = {};
        if ("" === e) {
          e = "url解析失败";
        }
        n.each(t.para.preset_properties, function (r, i) {
          if (-1 === i.indexOf("latest_")) {
            return false;
          }
          i = i.slice(7);
          if (r) {
            if ("wx_ad_click_id" === i && "not_collect" === r) {
              return false;
            }
            if ("utm" !== i && "url解析失败" === e) {
              if ("wx_ad_click_id" === i) {
                a._latest_wx_ad_click_id = "url的domain解析失败";
                a._latest_wx_ad_hash_key = "url的domain解析失败";
                a._latest_wx_ad_callbacks = "url的domain解析失败";
              } else {
                a["$latest_" + i] = "url的domain解析失败";
              }
            } else if (n.isReferralTraffic(document.referrer)) {
              switch (i) {
                case "traffic_source_type":
                  a.$latest_traffic_source_type = n.getSourceFromReferrer();
                  break;
                case "referrer":
                  a.$latest_referrer = n.isDecodeURI(t.para.url_is_decode, n.info.pageProp.referrer);
                  break;
                case "search_keyword":
                  a.$latest_search_keyword = n.getKeywordFromReferrer();
                  break;
                case "landing_page":
                  a.$latest_landing_page = n.isDecodeURI(t.para.url_is_decode, location.href);
                  break;
                case "wx_ad_click_id":
                  var o = n.getWxAdIdFromUrl(location.href);
                  a._latest_wx_ad_click_id = o.click_id;
                  a._latest_wx_ad_hash_key = o.hash_key;
                  a._latest_wx_ad_callbacks = o.callbacks;
              }
            }
          } else if ("utm" === i && t.store._state.props) {
            for (var s in t.store._state.props) if (0 === s.indexOf("$latest_utm") || 0 === s.indexOf("_latest_") && s.indexOf("_latest_wx_ad_") < 0) {
              delete t.store._state.props[s];
            }
          } else if (t.store._state.props && "$latest_" + i in t.store._state.props) {
            delete t.store._state.props["$latest_" + i];
          } else {
            if ("wx_ad_click_id" == i && t.store._state.props && false === r) {
              n.each(["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"], function (e) {
                if (e in t.store._state.props) {
                  delete t.store._state.props[e];
                }
              });
            }
          }
        });
        t.register(a);
        if (t.para.preset_properties.latest_utm) {
          var s = n.info.campaignParamsStandard("$latest_", "_latest_");
          var u = s.$utms;
          var l = s.otherUtms;
          if (!n.isEmptyObject(u)) {
            t.register(u);
          }
          if (!n.isEmptyObject(l)) {
            t.register(l);
          }
        }
      }
    };
    t.bridge = {
      is_verify_success: false,
      initPara: function () {
        var e = {
          is_send: true,
          white_list: [],
          is_mui: false
        };
        if ("object" == typeof t.para.app_js_bridge) {
          t.para.app_js_bridge = n.extend({}, e, t.para.app_js_bridge);
        } else {
          if (true === t.para.use_app_track || true === t.para.app_js_bridge || "only" === t.para.use_app_track) {
            if (!(false !== t.para.use_app_track_is_send && "only" !== t.para.use_app_track)) {
              e.is_send = false;
            }
            t.para.app_js_bridge = n.extend({}, e);
          } else {
            if ("mui" === t.para.use_app_track) {
              e.is_mui = true;
              t.para.app_js_bridge = n.extend({}, e);
            }
          }
        }
        if (false === t.para.app_js_bridge.is_send) {
          t.log("设置了 is_send:false,如果打通失败，数据将被丢弃！");
        }
      },
      initState: function () {
        function e(e) {
          function r(e) {
            var r = {
              hostname: "",
              project: ""
            };
            try {
              r.hostname = n.URL(e).hostname;
              r.project = n.URL(e).searchParams.get("project") || "default";
            } catch (i) {
              t.log(i);
            }
            return r;
          }
          var i = r(e);
          var o = r(t.para.server_url);
          if (i.hostname === o.hostname && i.project === o.project) {
            return true;
          }
          if (t.para.app_js_bridge.white_list.length > 0) {
            for (var a = 0; a < t.para.app_js_bridge.white_list.length; a++) {
              var s = r(t.para.app_js_bridge.white_list[a]);
              if (s.hostname === i.hostname && s.project === i.project) {
                return true;
              }
            }
          }
          return false;
        }
        if (n.isObject(t.para.app_js_bridge) && !t.para.app_js_bridge.is_mui) {
          if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && n.isObject(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) {
            if (e(window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url)) {
              t.bridge.is_verify_success = true;
            }
          } else if (n.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track) {
            var r = window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url();
            if (r && e(r)) {
              t.bridge.is_verify_success = true;
            }
          }
        }
      },
      initDefineBridgeInfo: function () {
        var e = {
          touch_app_bridge: true,
          verify_success: false
        };
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && n.isObject(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url || n.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track) {
          if (t.bridge.is_verify_success) {
            e.verify_success = "success";
          } else {
            e.verify_success = "fail";
          }
        } else {
          if ("object" == typeof SensorsData_APP_JS_Bridge && (SensorsData_APP_JS_Bridge.sensorsdata_verify && SensorsData_APP_JS_Bridge.sensorsdata_visual_verify || SensorsData_APP_JS_Bridge.sensorsdata_track)) {
            if (SensorsData_APP_JS_Bridge.sensorsdata_verify && SensorsData_APP_JS_Bridge.sensorsdata_visual_verify) {
              if (SensorsData_APP_JS_Bridge.sensorsdata_visual_verify(JSON.stringify({
                server_url: t.para.server_url
              }))) {
                e.verify_success = "success";
              } else {
                e.verify_success = "fail";
              }
            } else {
              e.verify_success = "success";
            }
          } else {
            if (!/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent) || window.MSStream) {
              e.touch_app_bridge = false;
            } else {
              if (t.bridge.iOS_UA_bridge()) {
                e.verify_success = "success";
              } else {
                e.verify_success = "fail";
              }
            }
          }
        }
        return e;
      },
      iOS_UA_bridge: function () {
        if (/sensors-verify/.test(navigator.userAgent)) {
          var e = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);
          if (e && e[0] && "string" == typeof e[1] && 2 === e[1].split("?").length) {
            e = e[1].split("?");
            var r = null;
            var i = null;
            try {
              r = n.URL(t.para.server_url).hostname;
              i = n.URL(t.para.server_url).searchParams.get("project") || "default";
            } catch (a) {
              t.log(a);
            }
            return !(!r || r !== e[0] || !i || i !== e[1]);
          }
          return false;
        }
        return !!/sa-sdk-ios/.test(navigator.userAgent);
      },
      dataSend: function (e, r, i) {
        var o = e.data;
        if (n.isObject(t.para.app_js_bridge) && !t.para.app_js_bridge.is_mui) {
          if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && n.isObject(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) {
            if (t.bridge.is_verify_success) {
              window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify({
                callType: "app_h5_track",
                data: n.extend({
                  server_url: t.para.server_url
                }, o)
              }));
              if ("function" == typeof i) {
                i();
              }
            } else {
              if (t.para.app_js_bridge.is_send) {
                t.debug.apph5({
                  data: o,
                  step: "4.1",
                  output: "all"
                });
                r.prepareServerUrl(e);
              } else {
                if ("function" == typeof i) {
                  i();
                }
              }
            }
          } else if (n.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track) {
            if (t.bridge.is_verify_success) {
              SensorsData_APP_New_H5_Bridge.sensorsdata_track(JSON.stringify(n.extend({
                server_url: t.para.server_url
              }, o)));
              if ("function" == typeof i) {
                i();
              }
            } else {
              if (t.para.app_js_bridge.is_send) {
                t.debug.apph5({
                  data: o,
                  step: "4.2",
                  output: "all"
                });
                r.prepareServerUrl(e);
              } else {
                if ("function" == typeof i) {
                  i();
                }
              }
            }
          } else if ("object" == typeof SensorsData_APP_JS_Bridge && (SensorsData_APP_JS_Bridge.sensorsdata_verify || SensorsData_APP_JS_Bridge.sensorsdata_track)) {
            if (SensorsData_APP_JS_Bridge.sensorsdata_verify) {
              if (SensorsData_APP_JS_Bridge.sensorsdata_verify(JSON.stringify(n.extend({
                server_url: t.para.server_url
              }, o)))) {
                if ("function" == typeof i) {
                  i();
                }
              } else {
                if (t.para.app_js_bridge.is_send) {
                  t.debug.apph5({
                    data: o,
                    step: "3.1",
                    output: "all"
                  });
                  r.prepareServerUrl(e);
                } else {
                  if ("function" == typeof i) {
                    i();
                  }
                }
              }
            } else {
              SensorsData_APP_JS_Bridge.sensorsdata_track(JSON.stringify(n.extend({
                server_url: t.para.server_url
              }, o)));
              if ("function" == typeof i) {
                i();
              }
            }
          } else if (!/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent) || window.MSStream) {
            if (n.isObject(t.para.app_js_bridge) && true === t.para.app_js_bridge.is_send) {
              t.debug.apph5({
                data: o,
                step: "2",
                output: "all"
              });
              r.prepareServerUrl(e);
            } else {
              if ("function" == typeof i) {
                i();
              }
            }
          } else {
            var a = null;
            if (t.bridge.iOS_UA_bridge()) {
              a = document.createElement("iframe");
              var s = function (e) {
                var r = JSON.stringify(n.extend({
                  server_url: t.para.server_url
                }, e));
                r = r.replaceAll(/\r\n/g, "");
                return "sensorsanalytics://trackEvent?event=" + encodeURIComponent(r);
              }(o);
              a.setAttribute("src", s);
              document.documentElement.appendChild(a);
              a.parentNode.removeChild(a);
              a = null;
              if ("function" == typeof i) {
                i();
              }
            } else if (t.para.app_js_bridge.is_send) {
              t.debug.apph5({
                data: o,
                step: "3.2",
                output: "all"
              });
              r.prepareServerUrl(e);
            } else {
              if ("function" == typeof i) {
                i();
              }
            }
          }
        } else if (n.isObject(t.para.app_js_bridge) && t.para.app_js_bridge.is_mui) {
          if (n.isObject(window.plus) && window.plus.SDAnalytics && window.plus.SDAnalytics.trackH5Event) {
            window.plus.SDAnalytics.trackH5Event(data);
            if ("function" == typeof i) {
              i();
            }
          } else {
            if (n.isObject(t.para.app_js_bridge) && true === t.para.app_js_bridge.is_send) {
              r.prepareServerUrl(e);
            } else {
              if ("function" == typeof i) {
                i();
              }
            }
          }
        } else {
          t.debug.apph5({
            data: o,
            step: "1",
            output: "code"
          });
          r.prepareServerUrl(e);
        }
      },
      app_js_bridge_v1: function () {
        var e = null;
        var r = null;
        window.sensorsdata_app_js_bridge_call_js = function (t) {
          !function (t) {
            e = t;
            if (n.isJSONString(e)) {
              e = JSON.parse(e);
            }
            if (r) {
              r(e);
              r = null;
              e = null;
            }
          }(t);
        };
        t.getAppStatus = function (t) {
          (function () {
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
              var e = document.createElement("iframe");
              e.setAttribute("src", "sensorsanalytics://getAppInfo");
              document.documentElement.appendChild(e);
              e.parentNode.removeChild(e);
              e = null;
            }
          })();
          if ("object" == typeof window.SensorsData_APP_JS_Bridge && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app) {
            e = SensorsData_APP_JS_Bridge.sensorsdata_call_app();
            if (n.isJSONString(e)) {
              e = JSON.parse(e);
            }
          }
          if (!t) {
            return e;
          }
          if (null === e) {
            r = t;
          } else {
            t(e);
            e = null;
          }
        };
      },
      supportAppCallJs: function () {
        window.sensorsdata_app_call_js = function (e, t) {
          if (e in window.sensorsdata_app_call_js.modules) {
            window.sensorsdata_app_call_js.modules[e](t);
          }
        };
        window.sensorsdata_app_call_js.modules = {};
      }
    };
    t.JSBridge = function (e) {
      this.list = {};
      this.type = e.type;
      this.app_call_js = n.isFunction(e.app_call_js) ? e.app_call_js : function () {};
      this.init();
    };
    t.JSBridge.prototype.init = function () {
      var e = this;
      if (!window.sensorsdata_app_call_js.modules[this.type]) {
        window.sensorsdata_app_call_js.modules[this.type] = function (t) {
          e.app_call_js(t);
        };
      }
    };
    t.JSBridge.prototype.jsCallApp = function (e) {
      var r = {
        callType: this.type,
        data: e
      };
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage) {
        window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(r));
      } else {
        if (!n.isObject(window.SensorsData_APP_New_H5_Bridge) || !window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app) {
          t.log("数据发往App失败，App没有暴露bridge");
          return false;
        }
        window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(r));
      }
    };
    t.JSBridge.prototype.hasAppBridge = function () {
      return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage ? "ios" : n.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app ? "android" : (t.log("App端bridge未暴露"), false);
    };
    t.JSBridge.prototype.requestToApp = function (e) {
      var r = this;
      var i = n.isObject(e.data) ? e.data : {};
      if (!n.isFunction(e.callback)) {
        e.callback = function () {};
      }
      if (n.isObject(e.timeout) && n.isNumber(e.timeout.time)) {
        if (!n.isFunction(e.timeout.callback)) {
          e.timeout.callback = function () {};
        }
        e.timer = setTimeout(function () {
          e.timeout.callback();
          delete r.list[o];
        }, e.timeout.time);
      }
      var o = new Date().getTime().toString(16) + "-" + String(n.getRandom()).replace(".", "").slice(1, 8);
      this.list[o] = e;
      var a = {
        callType: this.type,
        data: i
      };
      a.data.message_id = o;
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage) {
        window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(a));
      } else {
        if (!n.isObject(window.SensorsData_APP_New_H5_Bridge) || !window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app) {
          t.log("数据发往App失败，App没有暴露bridge");
          return false;
        }
        window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(a));
      }
    };
    t.JSBridge.prototype.double = function (e) {
      if (e.message_id) {
        var t = this.list[e.message_id];
        if (t) {
          if (t.timer) {
            clearTimeout(t.timer);
          }
          t.callback(e);
          delete this.list[e.message_id];
        }
      }
    };
    var l = t.heatmap = {
      otherTags: [],
      getTargetElement: function (e, r) {
        var i = e;
        if ("object" != typeof i) {
          return null;
        }
        if ("string" != typeof i.tagName) {
          return null;
        }
        var o = i.tagName.toLowerCase();
        if ("body" === o.toLowerCase() || "html" === o.toLowerCase()) {
          return null;
        }
        if (!i || !i.parentNode || !i.parentNode.children) {
          return null;
        }
        var a = i.parentNode;
        var s = this.hasElement(r.originalEvent || r);
        var c = t.para.heatmap.track_attr;
        var u = this.otherTags;
        if ("a" === o || "button" === o || "input" === o || "textarea" === o || n.hasAttributes(i, c)) {
          return i;
        }
        if (n.indexOf(u, o) > -1) {
          return i;
        }
        if ("button" === a.tagName.toLowerCase() || "a" === a.tagName.toLowerCase() || n.hasAttributes(a, c)) {
          return a;
        }
        if ("area" === o && "map" === a.tagName.toLowerCase() && n.ry(a).prev().tagName && "img" === n.ry(a).prev().tagName.toLowerCase()) {
          return n.ry(a).prev();
        }
        if (s) {
          return s;
        }
        if ("div" === o && t.para.heatmap.collect_tags.div && this.isDivLevelValid(i)) {
          return (t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div && t.para.heatmap.collect_tags.div.max_level || 1) > 1 || this.isCollectableDiv(i) ? i : null;
        }
        if (this.isStyleTag(o) && t.para.heatmap.collect_tags.div) {
          var l = this.getCollectableParent(i);
          if (l && this.isDivLevelValid(l)) {
            return l;
          }
        }
        return null;
      },
      getDivLevels: function (e, t) {
        var r = l.getElementPath(e, true, t).split(" > ");
        var i = 0;
        n.each(r, function (e) {
          if ("div" === e) {
            i++;
          }
        });
        return i;
      },
      isDivLevelValid: function (e) {
        for (var n = t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div && t.para.heatmap.collect_tags.div.max_level || 1, r = e.getElementsByTagName("div"), i = r.length - 1; i >= 0; i--) {
          if (l.getDivLevels(r[i], e) > n) {
            return false;
          }
        }
        return true;
      },
      getElementPath: function (e, t, n) {
        for (var r = []; e.parentNode;) {
          if (e.id && !t && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)) {
            r.unshift(e.tagName.toLowerCase() + "#" + e.id);
            break;
          }
          if (n && e === n) {
            r.unshift(e.tagName.toLowerCase());
            break;
          }
          if (e === document.body) {
            r.unshift("body");
            break;
          }
          r.unshift(e.tagName.toLowerCase());
          e = e.parentNode;
        }
        return r.join(" > ");
      },
      getClosestLi: function (e) {
        return function (e, t) {
          for (; e && e !== document && 1 === e.nodeType; e = e.parentNode) {
            if ("li" === e.tagName.toLowerCase()) {
              return e;
            }
          }
          return null;
        }(e);
      },
      getElementPosition: function (e, r, i) {
        var o = t.heatmap.getClosestLi(e);
        if (!o) {
          return null;
        }
        var a = e.tagName.toLowerCase();
        var s = o.getElementsByTagName(a);
        var c = s.length;
        var u = [];
        if (c > 1) {
          for (var l = 0; l < c; l++) {
            if (t.heatmap.getElementPath(s[l], i) === r) {
              u.push(s[l]);
            }
          }
          if (u.length > 1) {
            return n.indexOf(u, e);
          }
        }
        return function (e) {
          e.tagName.toLowerCase();
          if (!e.parentNode) {
            return "";
          }
          if (1 === n.ry(e).getSameTypeSiblings().length) {
            return 0;
          }
          for (var t = 0, r = e; n.ry(r).previousElementSibling().ele; r = n.ry(r).previousElementSibling().ele, t++) {
            ;
          }
          return t;
        }(o);
      },
      setNotice: function (e) {
        t.is_heatmap_render_mode = true;
        if (!t.para.heatmap) {
          t.errorMsg = "您SDK没有配置开启点击图，可能没有数据！";
        }
        if (e && e[0] && e[1] && "http:" === e[1].slice(0, 5) && "https:" === location.protocol) {
          t.errorMsg = "您的当前页面是https的地址，神策分析环境也必须是https！";
        }
        if (!t.para.heatmap_url) {
          t.para.heatmap_url = location.protocol + "//static.sensorsdata.cn/sdk/" + t.lib_version + "/heatmap.min.js";
        }
      },
      getDomIndex: function (e) {
        if (!e.parentNode) {
          return -1;
        }
        for (var t = 0, n = e.tagName, r = e.parentNode.children, i = 0; i < r.length; i++) {
          if (r[i].tagName === n) {
            if (e === r[i]) {
              return t;
            }
            t++;
          }
        }
        return -1;
      },
      selector: function (e, n) {
        var r = e.parentNode && 9 == e.parentNode.nodeType ? -1 : this.getDomIndex(e);
        return e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && (!t.para.heatmap || t.para.heatmap && "not_use_id" !== t.para.heatmap.element_selector) && !n ? "#" + e.getAttribute("id") : e.tagName.toLowerCase() + (~r ? ":nth-of-type(" + (r + 1) + ")" : "");
      },
      getDomSelector: function (e, n, r) {
        if (!e || !e.parentNode || !e.parentNode.children) {
          return false;
        }
        n = n && n.join ? n : [];
        var i = e.nodeName.toLowerCase();
        return e && "body" !== i && 1 == e.nodeType ? (n.unshift(this.selector(e, r)), e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && t.para.heatmap && "not_use_id" !== t.para.heatmap.element_selector && !r ? n.join(" > ") : this.getDomSelector(e.parentNode, n, r)) : (n.unshift("body"), n.join(" > "));
      },
      na: function () {
        var e = document.documentElement.scrollLeft || window.pageXOffset;
        return parseInt(isNaN(e) ? 0 : e, 10);
      },
      i: function () {
        var e = 0;
        try {
          e = o.documentElement && o.documentElement.scrollTop || m.pageYOffset;
          e = isNaN(e) ? 0 : e;
        } catch (n) {
          e = 0;
        }
        return parseInt(e, 10);
      },
      getBrowserWidth: function () {
        var e = window.innerWidth || document.body.clientWidth;
        return isNaN(e) ? 0 : parseInt(e, 10);
      },
      getBrowserHeight: function () {
        var e = window.innerHeight || document.body.clientHeight;
        return isNaN(e) ? 0 : parseInt(e, 10);
      },
      getScrollWidth: function () {
        var e = parseInt(document.body.scrollWidth, 10);
        return isNaN(e) ? 0 : e;
      },
      W: function (e) {
        var t = parseInt(+e.clientX + Number(this.na()), 10);
        e = parseInt(+e.clientY + Number(this.i()), 10);
        return {
          x: isNaN(t) ? 0 : t,
          y: isNaN(e) ? 0 : e
        };
      },
      getEleDetail: function (e) {
        var r = this.getDomSelector(e);
        var i = n.getEleInfo({
          target: e
        });
        i.$element_selector = r || "";
        i.$element_path = t.heatmap.getElementPath(e, t.para.heatmap && "not_use_id" === t.para.heatmap.element_selector);
        var o = t.heatmap.getElementPosition(e, i.$element_path, t.para.heatmap && "not_use_id" === t.para.heatmap.element_selector);
        if (n.isNumber(o)) {
          i.$element_position = o;
        }
        return i;
      },
      start: function (e, r, i, o, a) {
        var s = n.isObject(o) ? o : {};
        var c = n.isFunction(a) ? a : n.isFunction(o) ? o : undefined;
        if (t.para.heatmap && t.para.heatmap.collect_element && !t.para.heatmap.collect_element(r)) {
          return false;
        }
        var u = this.getEleDetail(r);
        if (t.para.heatmap && t.para.heatmap.custom_property) {
          var l = t.para.heatmap.custom_property(r);
          if (n.isObject(l)) {
            u = n.extend(u, l);
          }
        }
        u = n.extend(u, s);
        if ("a" === i && t.para.heatmap && true === t.para.heatmap.isTrackLink) {
          n.trackLink({
            event: e,
            target: r
          }, "$WebClick", u);
        } else {
          t.track("$WebClick", u, c);
        }
      },
      hasElement: function (e) {
        var t = e._getPath ? e._getPath() : l.getElementPath(e.target, true).split(" > ");
        if (n.isArray(t) && t.length > 0) {
          for (var r = 0; r < t.length; r++) {
            if (t[r] && t[r].tagName && "a" === t[r].tagName.toLowerCase()) {
              return t[r];
            }
          }
        }
        return false;
      },
      isStyleTag: function (e, r) {
        return !(n.indexOf(["a", "div", "input", "button", "textarea"], e) > -1) && (!r || t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div ? !!(n.isObject(t.para.heatmap) && n.isObject(t.para.heatmap.collect_tags) && n.isObject(t.para.heatmap.collect_tags.div) && n.indexOf(t.para.heatmap.collect_tags.div.ignore_tags, e) > -1) : n.indexOf(["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"], e) > -1);
      },
      isCollectableDiv: function (e, n) {
        try {
          if (0 === e.children.length) {
            return true;
          }
          for (var r = 0; r < e.children.length; r++) {
            if (1 === e.children[r].nodeType) {
              var i = e.children[r].tagName.toLowerCase();
              var o = t.para && t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div && t.para.heatmap.collect_tags.div.max_level;
              if (!("div" === i && o > 1 || this.isStyleTag(i, n))) {
                return false;
              }
              if (!this.isCollectableDiv(e.children[r], n)) {
                return false;
              }
            }
          }
          return true;
        } catch (s) {
          t.log(s);
        }
        return false;
      },
      getCollectableParent: function (e, n) {
        try {
          var r = e.parentNode;
          var i = r ? r.tagName.toLowerCase() : "";
          if ("body" === i) {
            return false;
          }
          var o = t.para && t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div && t.para.heatmap.collect_tags.div.max_level;
          if (i && "div" === i && (o > 1 || this.isCollectableDiv(r, n))) {
            return r;
          }
          if (r && this.isStyleTag(i, n)) {
            return this.getCollectableParent(r, n);
          }
        } catch (s) {
          t.log(s);
        }
        return false;
      },
      initScrollmap: function () {
        if (!n.isObject(t.para.heatmap) || "default" !== t.para.heatmap.scroll_notice_map) {
          return false;
        }
        var e = function () {
          return !(t.para.scrollmap && n.isFunction(t.para.scrollmap.collect_url) && !t.para.scrollmap.collect_url());
        };
        var r = function (e) {
          var t = {};
          t.timeout = e.timeout || 1e3;
          t.func = e.func;
          t.hasInit = false;
          t.inter = null;
          t.main = function (e, t) {
            this.func(e, t);
            this.inter = null;
          };
          t.go = function (e) {
            var n = {};
            if (!this.inter) {
              n.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
              n.$viewport_position = Math.round(n.$viewport_position) || 0;
              n.$viewport_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
              n.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
              if (e) {
                t.main(n, true);
              } else {
                this.inter = setTimeout(function () {
                  t.main(n);
                }, this.timeout);
              }
            }
          };
          return t;
        }({
          timeout: 1e3,
          func: function (e, r) {
            var i = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
            var o = new Date();
            var a = o - this.current_time;
            if (a > t.para.heatmap.scroll_delay_time && i - e.$viewport_position != 0 || r) {
              e.$url = n.isDecodeURI(t.para.url_is_decode, location.href);
              e.$title = document.title;
              e.$url_path = location.pathname;
              e.event_duration = Math.min(t.para.heatmap.scroll_event_duration, parseInt(a) / 1e3);
              t.track("$WebStay", e);
            }
            this.current_time = o;
          }
        });
        r.current_time = new Date();
        n.addEvent(window, "scroll", function () {
          if (!e()) {
            return false;
          }
          r.go();
        });
        n.addEvent(window, "unload", function () {
          if (!e()) {
            return false;
          }
          r.go("notime");
        });
      },
      initHeatmap: function () {
        var e = this;
        return !(!n.isObject(t.para.heatmap) || "default" !== t.para.heatmap.clickmap) && !(n.isFunction(t.para.heatmap.collect_url) && !t.para.heatmap.collect_url()) && ("all" === t.para.heatmap.collect_elements ? t.para.heatmap.collect_elements = "all" : t.para.heatmap.collect_elements = "interact", void ("all" === t.para.heatmap.collect_elements ? n.addEvent(document, "click", function (t) {
          var n = t || window.event;
          if (!n) {
            return false;
          }
          var r = n.target || n.srcElement;
          if ("object" != typeof r) {
            return false;
          }
          if ("string" != typeof r.tagName) {
            return false;
          }
          var i = r.tagName.toLowerCase();
          if ("body" === i || "html" === i) {
            return false;
          }
          if (!r || !r.parentNode || !r.parentNode.children) {
            return false;
          }
          var o = r.parentNode.tagName.toLowerCase();
          if ("a" === o || "button" === o) {
            e.start(n, r.parentNode, o);
          } else {
            e.start(n, r, i);
          }
        }) : n.addEvent(document, "click", function (r) {
          var i = r || window.event;
          if (!i) {
            return false;
          }
          var o = i.target || i.srcElement;
          var a = t.heatmap.getTargetElement(o, r);
          if (a) {
            e.start(i, a, a.tagName.toLowerCase());
          } else {
            if (n.isElement(o) && "div" === o.tagName.toLowerCase() && n.isObject(t.para.heatmap) && t.para.heatmap.get_vtrack_config && t.unlimitedDiv.events.length > 0 && t.unlimitedDiv.isTargetEle(o)) {
              e.start(i, o, o.tagName.toLowerCase(), {
                $lib_method: "vtrack"
              });
            }
          }
        })));
      }
    };
    t.unlimitedDiv = {
      events: [],
      init: function () {
        this.filterWebClickEvents();
      },
      filterWebClickEvents: function (e) {
        this.events = t.vtrackcollect.getAssignConfigs(function (e) {
          return !(!n.isObject(e) || true !== e.event.unlimited_div || "webclick" !== e.event_type);
        }, e);
      },
      isTargetEle: function (e) {
        var r = t.heatmap.getEleDetail(e);
        if (!n.isObject(r) || !n.isString(r.$element_path)) {
          return false;
        }
        for (var i = 0; i < this.events.length; i++) {
          if (n.isObject(this.events[i]) && n.isObject(this.events[i].event) && t.vtrackcollect.configIsMatch(r, this.events[i].event)) {
            return true;
          }
        }
        return false;
      }
    };
    t.customProp = {
      events: [],
      configSwitch: false,
      collectAble: function () {
        return this.configSwitch && n.isObject(t.para.heatmap) && t.para.heatmap.get_vtrack_config;
      },
      updateEvents: function () {
        this.events = t.vtrackcollect.getAssignConfigs(function (e) {
          return !!(n.isObject(e) && n.isArray(e.properties) && e.properties.length > 0);
        });
        if (this.events.length) {
          this.configSwitch = true;
        } else {
          this.configSwitch = false;
        }
      },
      getVtrackProps: function (e) {
        var t = {};
        return this.collectAble() ? ("$WebClick" === e.event && (t = this.clickCustomPropMaker(e, this.events)), t) : {};
      },
      clickCustomPropMaker: function (e, r, i) {
        var o = this;
        i = i || this.filterConfig(e, r, t.vtrackcollect.url_info.page_url);
        var a = {};
        return i.length ? (n.each(i, function (t) {
          if (n.isArray(t.properties) && t.properties.length > 0) {
            n.each(t.properties, function (t) {
              var r = o.getProp(t, e);
              if (n.isObject(r)) {
                n.extend(a, r);
              }
            });
          }
        }), a) : {};
      },
      getProp: function (e, r) {
        if (!n.isObject(e)) {
          return false;
        }
        if (!(n.isString(e.name) && e.name.length > 0)) {
          t.log("----vtrackcustom----属性名不合法,属性抛弃", e.name);
          return false;
        }
        var i;
        var o;
        var a = {};
        if ("content" === e.method) {
          var s;
          if (n.isString(e.element_selector) && e.element_selector.length > 0) {
            s = n.getDomBySelector(e.element_selector);
          } else {
            if (!n.isString(e.list_selector)) {
              t.log("----vtrackcustom----属性配置异常，属性抛弃", e.name);
              return false;
            }
            var c = n.getDomBySelector(r.properties.$element_selector);
            if (!c) {
              t.log("----vtrackcustom----点击元素获取异常，属性抛弃", e.name);
              return false;
            }
            var u = t.heatmap.getClosestLi(c);
            s = this.getPropElInLi(u, e.list_selector);
          }
          if (!s || !n.isElement(s)) {
            t.log("----vtrackcustom----属性元素获取失败，属性抛弃", e.name);
            return false;
          }
          if ("input" === s.tagName.toLowerCase()) {
            i = s.value || "";
          } else if ("select" === s.tagName.toLowerCase()) {
            var l = s.selectedIndex;
            if (n.isNumber(l) && n.isElement(s[l])) {
              i = t._.getElementContent(s[l], "select");
            }
          } else {
            i = n.getElementContent(s, s.tagName.toLowerCase());
          }
          if (e.regular) {
            try {
              o = new RegExp(e.regular).exec(i);
            } catch (f) {
              t.log("----vtrackcustom----正则处理失败，属性抛弃", e.name);
              return false;
            }
            if (null === o) {
              t.log("----vtrackcustom----属性规则处理，未匹配到结果,属性抛弃", e.name);
              return false;
            }
            if (!n.isArray(o) || !n.isString(o[0])) {
              t.log("----vtrackcustom----正则处理异常，属性抛弃", e.name, o);
              return false;
            }
            i = o[0];
          }
          if ("STRING" === e.type) {
            a[e.name] = i;
          } else if ("NUMBER" === e.type) {
            if (i.length < 1) {
              t.log("----vtrackcustom----未获取到数字内容，属性抛弃", e.name, i);
              return false;
            }
            if (isNaN(Number(i))) {
              t.log("----vtrackcustom----数字类型属性转换失败，属性抛弃", e.name, i);
              return false;
            }
            a[e.name] = Number(i);
          }
          return a;
        }
        t.log("----vtrackcustom----属性不支持此获取方式", e.name, e.method);
        return false;
      },
      getPropElInLi: function (e, r) {
        if (!(e && n.isElement(e) && n.isString(r))) {
          return null;
        }
        if ("li" !== e.tagName.toLowerCase()) {
          return null;
        }
        var i;
        var o = t.heatmap.getDomSelector(e);
        return o ? (i = o + r, n.getDomBySelector(i) || null) : (t.log("----vtrackcustom---获取同级属性元素失败，selector信息异常", o, r), null);
      },
      filterConfig: function (e, r, i) {
        var o = [];
        if (!i) {
          var a = t.vtrackcollect.initUrl();
          if (!a) {
            return [];
          }
          i = a.page_url;
        }
        if ("$WebClick" === e.event) {
          n.each(r, function (r, a) {
            if (n.isObject(r) && "webclick" === r.event_type && n.isObject(r.event) && r.event.url_host === i.host && r.event.url_path === i.pathname && t.vtrackcollect.configIsMatch(e.properties, r.event)) {
              o.push(r);
            }
          });
        }
        return o;
      }
    };
    t.vtrackcollect = {
      unlimitedDiv: t.unlimitedDiv,
      config: {},
      storageEnable: true,
      storage_name: "webjssdkvtrackcollect",
      para: {
        session_time: 18e5,
        timeout: 5e3,
        update_interval: 18e5
      },
      url_info: {},
      timer: null,
      update_time: null,
      customProp: t.customProp,
      initUrl: function () {
        var e;
        var r;
        var i;
        var o = {
          server_url: {
            project: "",
            host: ""
          },
          page_url: {
            host: "",
            pathname: ""
          },
          api_url: ""
        };
        if (!n.isString(t.para.server_url)) {
          t.log("----vtrackcollect---server_url必须为字符串");
          return false;
        }
        try {
          e = n.URL(t.para.server_url);
          o.server_url.project = e.searchParams.get("project") || "default";
          o.server_url.host = e.host;
        } catch (s) {
          t.log("----vtrackcollect---server_url解析异常", s);
          return false;
        }
        try {
          r = n.URL(location.href);
          o.page_url.host = r.hostname;
          o.page_url.pathname = r.pathname;
        } catch (s) {
          t.log("----vtrackcollect---页面地址解析异常", s);
          return false;
        }
        try {
          (i = new n.urlParse(t.para.server_url))._values.Path = "/config/visualized/Web.conf";
          o.api_url = i.getUrl();
        } catch (s) {
          t.log("----vtrackcollect---API地址解析异常", s);
          return false;
        }
        this.url_info = o;
        return o;
      },
      init: function () {
        if (!n.isObject(t.para.heatmap) || !t.para.heatmap.get_vtrack_config) {
          return false;
        }
        if (!n.localStorage.isSupport()) {
          this.storageEnable = false;
        }
        if (!this.initUrl()) {
          t.log("----vtrackcustom----初始化失败，url信息解析失败");
          return false;
        }
        if (this.storageEnable) {
          var e = n.localStorage.parse(this.storage_name);
          if (n.isObject(e) && n.isObject(e.data)) {
            if (this.serverUrlIsSame(e.serverUrl)) {
              this.config = e.data;
              this.update_time = e.updateTime;
              this.updateConfig(e.data);
              var r = new Date().getTime() - this.update_time;
              if (n.isNumber(r) && r > 0 && r < this.para.session_time) {
                var i = this.para.update_interval - r;
                this.setNextFetch(i);
              } else {
                this.getConfigFromServer();
              }
            } else {
              this.getConfigFromServer();
            }
          } else {
            this.getConfigFromServer();
          }
        } else {
          this.getConfigFromServer();
        }
        this.pageStateListenner();
      },
      serverUrlIsSame: function (e) {
        return !!n.isObject(e) && e.host === this.url_info.server_url.host && e.project === this.url_info.server_url.project;
      },
      getConfigFromServer: function () {
        var e = this;
        this.sendRequest(function (r, i) {
          e.update_time = new Date().getTime();
          var o = {};
          if (200 === r) {
            if (i && n.isObject(i) && "Web" === i.os) {
              o = i;
              e.updateConfig(o);
            }
          } else {
            if (205 === r) {
              e.updateConfig(o);
            } else {
              if (304 === r) {
                o = e.config;
              } else {
                t.log("----vtrackcustom----数据异常", r);
                e.updateConfig(o);
              }
            }
          }
          e.updateStorage(o);
          e.setNextFetch();
        }, function (n) {
          e.update_time = new Date().getTime();
          t.log("----vtrackcustom----配置拉取失败", n);
          e.setNextFetch();
        });
      },
      setNextFetch: function (e) {
        var t = this;
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        e = e || this.para.update_interval;
        this.timer = setTimeout(function () {
          t.getConfigFromServer();
        }, e);
      },
      pageStateListenner: function () {
        var e = this;
        n.listenPageState({
          visible: function () {
            var t = new Date().getTime() - e.update_time;
            if (n.isNumber(t) && t > 0 && t < e.para.update_interval) {
              var r = e.para.update_interval - t;
              e.setNextFetch(r);
            } else {
              e.getConfigFromServer();
            }
          },
          hidden: function () {
            if (e.timer) {
              clearTimeout(e.timer);
              e.timer = null;
            }
          }
        });
      },
      updateConfig: function (e) {
        if (!n.isObject(e)) {
          return false;
        }
        this.config = e;
        this.customProp.updateEvents();
        this.unlimitedDiv.init(e);
      },
      updateStorage: function (e) {
        if (!this.storageEnable) {
          return false;
        }
        if (!n.isObject(e)) {
          return false;
        }
        var r;
        if (this.url_info.server_url) {
          r = this.url_info.server_url;
        } else {
          var i = t.vtrackcollect.initUrl();
          if (!i) {
            return false;
          }
          r = i.server_url;
        }
        var o = {
          updateTime: new Date().getTime(),
          data: e,
          serverUrl: r
        };
        n.localStorage.set(this.storage_name, JSON.stringify(o));
      },
      sendRequest: function (e, t) {
        var r = {
          app_id: this.url_info.page_url.host
        };
        if (this.config.version) {
          r.v = this.config.version;
        }
        n.jsonp({
          url: this.url_info.api_url,
          callbackName: "saJSSDKVtrackCollectConfig",
          data: r,
          timeout: this.para.timeout,
          success: function (t, n) {
            e(t, n);
          },
          error: function (e) {
            t(e);
          }
        });
      },
      getAssignConfigs: function (e, t) {
        if (!this.url_info.server_url && !this.initUrl()) {
          return [];
        }
        var r = this;
        var i = [];
        (t = t || this.config).events = t.events || t.eventList;
        return n.isObject(t) && n.isArray(t.events) && t.events.length > 0 ? (n.each(t.events, function (t) {
          if (n.isObject(t) && n.isObject(t.event) && t.event.url_host === r.url_info.page_url.host && t.event.url_path === r.url_info.page_url.pathname && e(t)) {
            i.push(t);
          }
        }), i) : [];
      },
      isDiv: function (e) {
        if (e.element_path) {
          var t = e.element_path.split(">");
          if ("div" !== n.trim(t.pop()).slice(0, 3)) {
            return false;
          }
        }
        return true;
      },
      configIsMatch: function (e, n) {
        if (!n.element_path) {
          return false;
        }
        if (n.limit_element_content && n.element_content !== e.$element_content) {
          return false;
        }
        if (n.limit_element_position && n.element_position !== String(e.$element_position)) {
          return false;
        }
        if (undefined !== e.$element_position) {
          if (n.element_path !== e.$element_path) {
            return false;
          }
        } else if (t.vtrackcollect.isDiv({
          element_path: n.element_path
        })) {
          if (e.$element_path.indexOf(n.element_path) < 0) {
            return false;
          }
        } else if (n.element_path !== e.$element_path) {
          return false;
        }
        return true;
      }
    };
    t.init = function (e) {
      if (t.readyState && t.readyState.state && t.readyState.state >= 2) {
        return false;
      }
      t.setInitVar();
      t.readyState.setState(2);
      t.initPara(e);
      t.bridge.supportAppCallJs();
      t.detectMode();
      if (t._.isIOS() && t._.getIOSVersion() && t._.getIOSVersion() < 13) {
        if (t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div) {
          t._.setCssStyle("div, [data-sensors-click] { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }");
        }
        if (t.para.heatmap && t.para.heatmap.track_attr) {
          t._.setCssStyle("[" + t.para.heatmap.track_attr.join("], [") + "] { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }");
        }
      }
    };
    n.each(["getAppStatus", "track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "clearAllRegister", "clearPageRegister"], function (e) {
      var r = t[e];
      t[e] = function () {
        if (t.readyState.state < 3) {
          if (!n.isArray(t._q)) {
            t._q = [];
          }
          t._q.push([e, arguments]);
          return false;
        }
        if (t.readyState.getState()) {
          return r.apply(t, arguments);
        }
        try {
          console.error("请先初始化神策JS SDK");
        } catch (i) {
          t.log(i);
        }
      };
    });
    t.modules.Amp = function () {
      "use strict";

      var e = {
        sd: null,
        init: function (e) {
          if (this.sd) {
            return false;
          }
          this.sd = e;
          if (!this.sd || !this.sd._) {
            return false;
          }
          var t = this.sd._.cookie.get("sensors_amp_id");
          var n = this.sd.store._state.distinct_id;
          if (t && t.length > 0) {
            var r = "amp-" === t.slice(0, 4);
            if (t !== n) {
              if (!r) {
                return false;
              }
              if (this.sd.store._state.first_id) {
                this.sd.identify(t, true);
                this.sd.saEvent.send({
                  original_id: t,
                  distinct_id: n,
                  type: "track_signup",
                  event: "$SignUp",
                  properties: {}
                }, null);
                this.setAmpId(n);
              } else {
                this.sd.identify(t, true);
              }
            }
          } else {
            this.setAmpId(n);
          }
          this.addListener();
        },
        addListener: function () {
          var e = this;
          this.sd.events.on("changeDistinctId", function (t) {
            e.setAmpId(t);
          });
          this.sd.events.isReady();
        },
        setAmpId: function (e) {
          this.sd._.cookie.set("sensors_amp_id", e);
        }
      };
      if (window.SensorsDataWebJSSDKPlugin && "[object Object]" === Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin)) {
        window.SensorsDataWebJSSDKPlugin.Amp = window.SensorsDataWebJSSDKPlugin.Amp || e;
      } else {
        window.SensorsDataWebJSSDKPlugin = {
          Amp: e
        };
      }
      return e;
    }();
    t.modules.Channel = function () {
      "use strict";

      var t;
      var n;
      var r = {
        event_list: [],
        latest_event_initial_time: null,
        max_save_time: 2592e6,
        init: function (e) {
          return !n && !!(n = e) && !!(t = n._).localStorage.isSupport() && (n.para.max_string_length = 1024, this.eventList.init(), this.addLatestChannelUrl(), void this.addIsChannelCallbackEvent());
        },
        addIsChannelCallbackEvent: function () {
          n.registerPage({
            $is_channel_callback_event: function (e) {
              if (e.event && "$WebClick" !== e.event && "$pageview" !== e.event && "$WebStay" !== e.event && "$SignUp" !== e.event) {
                return !r.eventList.hasEvent(e.event) && (r.eventList.add(e.event), true);
              }
            }
          });
        },
        addLatestChannelUrl: function () {
          var e = this.getUrlDomain();
          var i = this.cookie.getChannel();
          if ("url解析失败" === e) {
            this.registerAndSave({
              _sa_channel_landing_url: "",
              _sa_channel_landing_url_error: "url的domain解析失败"
            });
          } else if (t.isReferralTraffic(document.referrer)) {
            var o = t.getQueryParam(location.href, "sat_cf");
            if (t.isString(o) && o.length > 0) {
              this.registerAndSave({
                _sa_channel_landing_url: location.href
              });
              r.channelLinkHandler();
            } else {
              this.registerAndSave({
                _sa_channel_landing_url: ""
              });
            }
          } else if (i) {
            n.registerPage(i);
          } else {
            n.registerPage({
              _sa_channel_landing_url: "",
              _sa_channel_landing_url_error: "取值异常"
            });
          }
        },
        registerAndSave: function (e) {
          n.registerPage(e);
          this.cookie.saveChannel(e);
        },
        cookie: {
          getChannel: function () {
            var r;
            try {
              r = JSON.parse(t.cookie.get("sensorsdata2015jssdkchannel"));
            } catch (e) {
              n.log(e);
            }
            return !(!t.isObject(r) || !r.prop) && r.prop;
          },
          saveChannel: function (e) {
            var n = {
              prop: e
            };
            t.cookie.set("sensorsdata2015jssdkchannel", JSON.stringify(n));
          }
        },
        channelLinkHandler: function () {
          this.eventList.reset();
          n.track("$ChannelLinkReaching");
        },
        getUrlDomain: function () {
          var e = t.info.pageProp.url_domain;
          if ("" === e) {
            e = "url解析失败";
          }
          return e;
        },
        eventList: {
          init: function () {
            var e = this.get();
            var n = new Date().getTime();
            if (e && t.isNumber(e.latest_event_initial_time) && t.isArray(e.eventList)) {
              var i = n - e.latest_event_initial_time;
              if (i > 0 && i < r.max_save_time) {
                r.event_list = e.eventList;
                r.latest_event_initial_time = e.latest_event_initial_time;
              } else {
                this.reset();
              }
            } else {
              this.reset();
            }
          },
          get: function () {
            var r = {};
            try {
              r = JSON.parse(t.localStorage.get("sawebjssdkchannel"));
            } catch (e) {
              n.log(e);
            }
            return r;
          },
          add: function (e) {
            r.event_list.push(e);
            this.save();
          },
          save: function () {
            var e = {
              latest_event_initial_time: r.latest_event_initial_time,
              eventList: r.event_list
            };
            t.localStorage.set("sawebjssdkchannel", JSON.stringify(e));
          },
          reset: function () {
            r.event_list = [];
            r.latest_event_initial_time = new Date().getTime();
            this.save();
          },
          hasEvent: function (e) {
            var n = false;
            t.each(r.event_list, function (t) {
              if (t === e) {
                n = true;
              }
            });
            return n;
          }
        }
      };
      if (window.SensorsDataWebJSSDKPlugin && "[object Object]" === Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin)) {
        window.SensorsDataWebJSSDKPlugin.SensorsChannel = window.SensorsDataWebJSSDKPlugin.SensorsChannel || r;
      } else {
        window.SensorsDataWebJSSDKPlugin = {
          SensorsChannel: r
        };
      }
      return r;
    }();
    t.modules.Deeplink = function () {
      "use strict";

      /micromessenger\/([\d.]+)/i.test(navigator.userAgent || "");
      var e;
      var t = function () {
        var e = {};
        if ("undefined" != typeof document.hidden) {
          e.hidden = "hidden";
          e.visibilityChange = "visibilitychange";
        } else {
          if ("undefined" != typeof document.msHidden) {
            e.hidden = "msHidden";
            e.visibilityChange = "msvisibilitychange";
          } else {
            if ("undefined" != typeof document.webkitHidden) {
              e.hidden = "webkitHidden";
              e.visibilityChange = "webkitvisibilitychange";
            }
          }
        }
        return e;
      };
      function n() {
        return undefined !== e && document[e];
      }
      e = t().hidden;
      var r = {
        android: /Android/i,
        iOS: /iPhone|iPad|iPod/i
      };
      var i = function () {
        for (var e in r) if (navigator.userAgent.match(r[e])) {
          return e;
        }
        return "";
      }();
      var o = function (e) {
        return null != e && "[object Object]" == Object.prototype.toString.call(e);
      };
      var a = {
        key: null,
        timer: null,
        sd: null,
        data: null,
        timeout: 2500,
        apiURL: "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
        init: function () {
          if (this.sd) {
            this.log("deeplink已经初始化");
            return false;
          }
          if (o(sensorsDataAnalytic201505)) {
            this.sd = sensorsDataAnalytic201505;
          }
          this.log("init()");
          if (null === this.sd) {
            this.log("神策JS SDK未成功引入");
            return false;
          }
          var e = {};
          if (arguments.length > 0) {
            if (1 === arguments.length && o(arguments[0])) {
              e = arguments[0];
            } else {
              if (arguments.length >= 2 && o(arguments[1])) {
                e = arguments[1];
              }
            }
          }
          if (!r.hasOwnProperty(i)) {
            this.log("不支持当前系统，目前只支持Android和iOS");
            return false;
          }
          if (o(e) && this.sd._.isNumber(e.timeout) && e.timeout >= 2500) {
            this.timeout = e.timeout;
          }
          if (!this.sd.para.server_url) {
            this.log("神策JS SDK配置项server_url未正确配置");
            return false;
          }
          var t;
          var n;
          var s = {
            origin: (n = (t = this.sd)._.URL(t.para.server_url)).origin,
            project: n.searchParams.get("project") || "default"
          };
          this.apiURL = this.apiURL.replace("{origin}", s.origin).replace("{project}", s.project);
          var c = this.sd._.URL(window.location.href).searchParams.get("deeplink");
          if (!c) {
            this.log("当前页面缺少deeplink参数");
            return false;
          }
          var u = (c = window.decodeURIComponent(c)).match(/\/sd\/(\w+)\/(\w+)$/);
          if (!u) {
            this.log("当前页面的deeplink参数无效");
            return false;
          }
          this.key = u[2];
          this.apiURL = this.apiURL.replace("{key}", window.encodeURIComponent(u[2]));
          this.sd._.ajax({
            url: this.apiURL,
            type: "GET",
            cors: true,
            credentials: false,
            success: function (e) {
              if (e.errorMsg) {
                a.log("API报错：" + e.errorMsg);
                return false;
              }
              a.data = e;
              a.log("API查询成功，数据：" + JSON.stringify(e, null, "  "));
              if (this.data.app_key) {
                if (this.data.android_info && this.data.android_info.url_schemes) {
                  this.data.android_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key;
                }
                if (this.data.ios_info && this.data.ios_info.url_schemes) {
                  this.data.ios_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key;
                }
              }
            }.bind(this),
            error: function (e) {
              a.log("API查询出错");
            }
          });
          this.addListeners();
        },
        openDeepLink: function () {
          this.log("openDeeplink()");
          if (!this.data) {
            this.log("没有Deep link数据!");
            return false;
          }
          if ("iOS" === i) {
            this.log("当前系统是iOS");
            var t = this.sd && this.sd._ && this.sd._.getIOSVersion() >= 9 && this.data.ios_info.ios_wake_url ? this.data.ios_info.ios_wake_url : this.data.ios_info.url_schemes;
            this.log("唤起APP的地址：" + t);
            r = this;
            o = t;
            a = this.data.ios_info.download_url;
            r.log("尝试唤起 iOS app:" + o);
            window.location.href = o;
            r.timer = setTimeout(function () {
              if (n()) {
                r.log("The page is hidden, stop navigating to download page");
                return false;
              }
              r.log("App可能未安装，跳转到下载地址");
              window.location.href = a;
            }, r.timeout);
            r.log("new timer:" + r.timer);
          } else {
            this.log("当前系统是 android");
            (function (t, r, i) {
              t.log("尝试唤起 android app");
              var o = r;
              t.log("唤起APP的地址：" + o);
              window.location = o;
              t.timer = setTimeout(function () {
                var r = n();
                t.log("hide:" + e + ":" + document[e]);
                if (r) {
                  t.log("The page is hidden, stop navigating to download page");
                  return false;
                }
                t.log("App可能未安装，跳转到下载地址");
                window.location = i;
              }, t.timeout);
            })(this, this.data.android_info.url_schemes, this.data.android_info.download_url);
          }
          var r;
          var o;
          var a;
        },
        log: function (e) {
          if (this.sd) {
            this.sd.log(e);
          }
        },
        addListeners: function () {
          var e = t().visibilityChange;
          if (e) {
            document.addEventListener(e, function () {
              clearTimeout(this.timer);
              this.log("visibilitychange, clear timeout:" + this.timer);
            }.bind(this), false);
          }
          window.addEventListener("pagehide", function () {
            this.log("page hide, clear timeout:" + this.timer);
            clearTimeout(this.timer);
          }.bind(this), false);
        }
      };
      if (o(window.SensorsDataWebJSSDKPlugin)) {
        window.SensorsDataWebJSSDKPlugin.Deeplink = window.SensorsDataWebJSSDKPlugin.Deeplink || a;
        window.SensorsDataWebJSSDKPlugin.deeplink = window.SensorsDataWebJSSDKPlugin.deeplink || a;
      } else {
        window.SensorsDataWebJSSDKPlugin = {
          Deeplink: a,
          deeplink: a
        };
      }
      return a;
    }();
    t.modules.SiteLinker = function () {
      "use strict";

      var e = {
        getPart: function (e) {
          var t = this.option.length;
          if (t) {
            for (var n = 0; n < t; n++) {
              if (e.indexOf(this.option[n].part_url) > -1) {
                return true;
              }
            }
          }
          return false;
        },
        getPartHash: function (e) {
          var t = this.option.length;
          if (t) {
            for (var n = 0; n < t; n++) {
              if (e.indexOf(this.option[n].part_url) > -1) {
                return this.option[n].after_hash;
              }
            }
          }
          return false;
        },
        getCurrenId: function () {
          var e = this.store.getDistinctId() || "";
          var t = this.store.getFirstId() || "";
          if (this._.urlSafeBase64 && this._.urlSafeBase64.encode) {
            e = e ? this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(n.base64Encode(e))) : "";
          } else {
            if (this._.rot13obfs) {
              e = e ? this._.rot13obfs(e) : "";
            }
          }
          return encodeURIComponent(t ? "f" + e : "d" + e);
        },
        rewireteUrl: function (e, t) {
          var n = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e);
          var r = "";
          if (n) {
            var i;
            var o = n[1] || "";
            var a = n[2] || "";
            var s = n[3] || "";
            if (this.getPartHash(e)) {
              i = s.indexOf("_sasdk");
              r = s.indexOf("?") > -1 ? i > -1 ? o + a + "#" + s.substring(1, i) + "_sasdk=" + this.getCurrenId() : o + a + "#" + s.substring(1) + "&_sasdk=" + this.getCurrenId() : o + a + "#" + s.substring(1) + "?_sasdk=" + this.getCurrenId();
            } else {
              i = a.indexOf("_sasdk");
              r = /^\?(\w)+/.test(a) ? i > -1 ? o + "?" + a.substring(1, i) + "_sasdk=" + this.getCurrenId() + s : o + "?" + a.substring(1) + "&_sasdk=" + this.getCurrenId() + s : o + "?" + a.substring(1) + "_sasdk=" + this.getCurrenId() + s;
            }
            if (t) {
              t.href = r;
            }
            return r;
          }
        },
        getUrlId: function () {
          var e = location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);
          if (this._.isArray(e) && e[1]) {
            var t = decodeURIComponent(e[1]);
            if (!(!t || "f" !== t.substring(0, 1) && "d" !== t.substring(0, 1))) {
              if (this._.urlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64(t)) {
                t = t.substring(0, 1) + n.base64Decode(this._.urlSafeBase64.decode(t.substring(1)));
              } else {
                if (this._.rot13defs) {
                  t = t.substring(0, 1) + this._.rot13defs(t.substring(1));
                }
              }
            }
            return t;
          }
          return "";
        },
        setRefferId: function () {
          var e = this.store.getDistinctId();
          var t = this.getUrlId();
          if ("" === t) {
            return false;
          }
          var n = "a" === t.substring(0, 1) || "d" === t.substring(0, 1);
          if ((t = t.substring(1)) === e) {
            return false;
          }
          if (t && n && this.store.getFirstId()) {
            this.sd.identify(t, true);
            this.sd.saEvent.send({
              original_id: t,
              distinct_id: e,
              type: "track_signup",
              event: "$SignUp",
              properties: {}
            }, null);
          }
          if (t && n && !this.store.getFirstId()) {
            this.sd.identify(t, true);
          }
          if (!(!t || n || this.store.getFirstId())) {
            this.sd.login(t);
          }
        },
        addListen: function () {
          var e = this;
          var t = function (t) {
            var n;
            var r;
            var i = t.target;
            var o = i.tagName.toLowerCase();
            var a = i.parentNode;
            if ("a" === o && i.href || a && a.tagName && "a" === a.tagName.toLowerCase() && a.href) {
              if ("a" === o && i.href) {
                n = i.href;
                r = i;
              } else {
                n = a.href;
                r = a;
              }
              var s = e._.URL(n).protocol;
              if (!("http:" !== s && "https:" !== s)) {
                if (e.getPart(n)) {
                  e.rewireteUrl(n, r);
                }
              }
            }
          };
          e._.addEvent(document, "mousedown", t);
          if (window.PointerEvent && "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints >= 0) {
            e._.addEvent(document, "pointerdown", t);
          }
        },
        init: function (e, t) {
          this.sd = e;
          this._ = e._;
          this.store = e.store;
          this.para = e.para;
          if (this._.isObject(t) && this._.isArray(t.linker) && t.linker.length > 0) {
            this.setRefferId();
            this.addListen();
            this.option = t.linker;
            this.option = function (t) {
              for (var n = t.length, r = [], i = 0; i < n; i++) {
                if (/[A-Za-z0-9]+\./.test(t[i].part_url) && "[object Boolean]" == Object.prototype.toString.call(t[i].after_hash)) {
                  r.push(t[i]);
                } else {
                  e.log("linker 配置的第 " + (i + 1) + " 项格式不正确，请检查参数格式！");
                }
              }
              return r;
            }(this.option);
          } else {
            e.log("请配置打通域名参数！");
          }
        }
      };
      if (n.isObject(window.SensorsDataWebJSSDKPlugin)) {
        window.SensorsDataWebJSSDKPlugin.SiteLinker = window.SensorsDataWebJSSDKPlugin.SiteLinker || e;
      } else {
        window.SensorsDataWebJSSDKPlugin = {
          SiteLinker: e
        };
      }
      return e;
    }();
    if ("string" != typeof window.sensorsDataAnalytic201505) {
      return "undefined" == typeof window.sensorsDataAnalytic201505 ? (window.sensorsDataAnalytic201505 = t, t) : window.sensorsDataAnalytic201505;
    }
    t.setPreConfig(window[sensorsDataAnalytic201505]);
    window[sensorsDataAnalytic201505] = t;
    window.sensorsDataAnalytic201505 = t;
    t.init();
  } catch (O) {
    if ("object" == typeof console && console.log) {
      try {
        console.log(O);
      } catch (k) {
        t.log(k);
      }
    }
  }
  var f;
  var d;
  var h;
  var p;
  var _;
  var A;
  var g;
  var v;
  var y;
  var b;
  var w;
  var E;
  var x;
  var C;
}();