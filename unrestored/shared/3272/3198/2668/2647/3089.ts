"use strict";

var r = require("../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.explode = u;
exports.merge = function (e) {
  for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0, r = {}, i = 0; i < e.length; i++) {
    var a = e[i];
    var s = t[i];
    u(a);
    for (var o = 0, l = Object.keys(a); o < l.length; o++) {
      var c = l[o];
      var p = a[c];
      if (s || n) {
        p = f(p, s, n);
      }
      var d = r[c] = r[c] || {};
      m(d, p);
    }
  }
  return r;
};
exports.verify = c;
var i = require("./2652/2768");
var a = require("../2633/index");
var s = a.DEPRECATED_KEYS;
var o = a.FLIPPED_ALIAS_KEYS;
var l = a.TYPES;
function u(e) {
  if (e._exploded) {
    return e;
  }
  e._exploded = !0;
  for (var t = 0, n = Object.keys(e); t < n.length; t++) {
    var a = n[t];
    if (!y(a)) {
      var l = a.split("|");
      if (1 !== l.length) {
        var u = e[a];
        delete e[a];
        var p;
        var f = r(l);
        try {
          for (f.s(); !(p = f.n()).done;) {
            e[p.value] = u;
          }
        } catch (K) {
          f.e(K);
        } finally {
          f.f();
        }
      }
    }
  }
  c(e);
  delete e.__esModule;
  (function (e) {
    for (var t = 0, n = Object.keys(e); t < n.length; t++) {
      var r = n[t];
      if (!y(r)) {
        var i = e[r];
        if ("function" === typeof i) {
          e[r] = {
            enter: i
          };
        }
      }
    }
  })(e);
  d(e);
  for (var v = 0, g = Object.keys(e); v < g.length; v++) {
    var T = g[v];
    if (!y(T)) {
      var b = i[T];
      if (b) {
        for (var S = e[T], E = 0, x = Object.keys(S); E < x.length; E++) {
          var P = x[E];
          S[P] = h(b, S[P]);
        }
        delete e[T];
        if (b.types) {
          var A;
          var k = r(b.types);
          try {
            for (k.s(); !(A = k.n()).done;) {
              var w = A.value;
              if (e[w]) {
                m(e[w], S);
              } else {
                e[w] = S;
              }
            }
          } catch (K) {
            k.e(K);
          } finally {
            k.f();
          }
        } else {
          m(e, S);
        }
      }
    }
  }
  for (var O = 0, C = Object.keys(e); O < C.length; O++) {
    var I = C[O];
    if (!y(I)) {
      var N = e[I];
      var _ = o[I];
      var D = s[I];
      if (D) {
        console.trace("Visitor defined for ".concat(I, " but it has been renamed to ").concat(D));
        _ = [D];
      }
      if (_) {
        delete e[I];
        var j;
        var L = r(_);
        try {
          for (L.s(); !(j = L.n()).done;) {
            var M = j.value;
            var B = e[M];
            if (B) {
              m(B, N);
            } else {
              e[M] = Object.assign({}, N);
            }
          }
        } catch (K) {
          L.e(K);
        } finally {
          L.f();
        }
      }
    }
  }
  for (var F = 0, R = Object.keys(e); F < R.length; F++) {
    var U = R[F];
    if (!y(U)) {
      d(e[U]);
    }
  }
  return e;
}
function c(e) {
  if (!e._verified) {
    if ("function" === typeof e) {
      throw new Error("You passed `traverse()` a function when it expected a visitor object, are you sure you didn't mean `{ enter: Function }`?");
    }
    for (var t = 0, n = Object.keys(e); t < n.length; t++) {
      var r = n[t];
      if (!("enter" !== r && "exit" !== r)) {
        p(r, e[r]);
      }
      if (!y(r)) {
        if (l.indexOf(r) < 0) {
          throw new Error("You gave us a visitor for the node type ".concat(r, " but it's not a valid type"));
        }
        var i = e[r];
        if ("object" === typeof i) {
          for (var a = 0, s = Object.keys(i); a < s.length; a++) {
            var o = s[a];
            if ("enter" !== o && "exit" !== o) {
              throw new Error("You passed `traverse()` a visitor object with the property " + "".concat(r, " that has the invalid property ").concat(o));
            }
            p("".concat(r, ".").concat(o), i[o]);
          }
        }
      }
    }
    e._verified = !0;
  }
}
function p(e, t) {
  var n;
  var i = [].concat(t);
  var a = r(i);
  try {
    for (a.s(); !(n = a.n()).done;) {
      var s = n.value;
      if ("function" !== typeof s) {
        throw new TypeError("Non-function found defined in ".concat(e, " with type ").concat(typeof s));
      }
    }
  } catch (o) {
    a.e(o);
  } finally {
    a.f();
  }
}
function f(e, t, n) {
  for (var r = {}, i = function () {
      var i = s[a];
      var o = e[i];
      if (!Array.isArray(o)) {
        return "continue";
      }
      o = o.map(function (e) {
        var r = e;
        if (t) {
          r = function (n) {
            return e.call(t, n, t);
          };
        }
        if (n) {
          r = n(t.key, i, r);
        }
        if (r !== e) {
          r.toString = function () {
            return e.toString();
          };
        }
        return r;
      });
      r[i] = o;
    }, a = 0, s = Object.keys(e); a < s.length; a++) {
    i();
  }
  return r;
}
function d(e) {
  if (e.enter && !Array.isArray(e.enter)) {
    e.enter = [e.enter];
  }
  if (e.exit && !Array.isArray(e.exit)) {
    e.exit = [e.exit];
  }
}
function h(e, t) {
  var n = function (n) {
    if (e.checkPath(n)) {
      return t.apply(this, arguments);
    }
  };
  n.toString = function () {
    return t.toString();
  };
  return n;
}
function y(e) {
  return "_" === e[0] || "enter" === e || "exit" === e || "shouldSkip" === e || "denylist" === e || "noScope" === e || "skipKeys" === e || "blacklist" === e;
}
function m(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var i = r[n];
    e[i] = [].concat(e[i] || [], t[i]);
  }
}