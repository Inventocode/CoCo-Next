"use strict";

var r = require("../../../../3262/3190/494");
var i = require("../../../../3262/3190/624/index");
var o = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.editOp = exports.replaceOp = exports.insertOp = exports.moveOp = exports.removeOp = exports.type = void 0;
var a = o(require("../1356/1342"));
var s = o(require("../1356/1343"));
var c = require("../1356/1119");
var u = require("../1356/1120");
var l = function () {};
function f(e, t) {
  if (!e) {
    throw new Error(t);
  }
}
var h = !1;
exports.type = {
  name: "json1",
  uri: "http://sharejs.org/types/JSONv1",
  readCursor: c.readCursor,
  writeCursor: c.writeCursor,
  create: function (e) {
    return e;
  },
  isNoop: function (e) {
    return null == e;
  },
  setDebug: function (e) {
    h = e;
    l.quiet = !e;
  },
  registerSubtype: E,
  checkValidOp: D,
  normalize: I,
  apply: function (e, t) {
    if (l.quiet = !h, D(t), null === t) {
      return e;
    }
    var n = [];
    return function e(t, r) {
      var i = t;
      var o = 0;
      var a = {
        root: t
      };
      var s = 0;
      var c = a;
      var u = "root";
      function l() {
        for (; s < o; s++) {
          var e = r[s];
          if ("object" != typeof e) {
            f(y(c, u));
            c = c[u] = _(c[u]);
            u = e;
          }
        }
      }
      for (; o < r.length; o++) {
        var h = r[o];
        if (Array.isArray(h)) {
          var d = e(i, h);
          if (d !== i && void 0 !== d) {
            l();
            i = c[u] = d;
          }
        } else if ("object" == typeof h) {
          if (null != h.d) {
            l();
            i = m(c, u, n[h.d]);
          } else {
            if (void 0 !== h.i) {
              l();
              i = m(c, u, h.i);
            }
          }
          var p = O(h);
          if (p) {
            l();
            i = c[u] = p.apply(i, S(h));
          } else if (void 0 !== h.e) {
            throw Error("Subtype " + h.et + " undefined");
          }
        } else {
          i = b(i, h);
        }
      }
      return a.root;
    }(e = function e(t, r) {
      for (var i, o, a, s = [], c = 0; c < r.length; c++) {
        var u = r[c];
        if (Array.isArray(u)) {
          break;
        }
        if ("object" != typeof u) {
          s.push(t);
          t = b(t, u);
        }
      }
      for (var l = r.length - 1; l >= c; l--) {
        t = e(t, r[l]);
      }
      for (--c; c >= 0; c--) {
        var h = r[c];
        if ("object" != typeof h) {
          var d = s.pop();
          t = t === b(d, h) ? d : void 0 === t ? v(d, h) : (o = h, a = t, (i = _(i = d))[o] = a, i);
        } else if (A(h)) {
          f(void 0 !== t, "Cannot pick up or remove undefined");
          if (null != h.p) {
            n[h.p] = t;
          }
          t = void 0;
        }
      }
      return t;
    }(e, t), t);
  },
  transformPosition: function (e, t) {
    e = e.slice();
    D(t);
    for (var n, r, i = c.readCursor(t), o = !1, a = [], s = function (t) {
        var s = e[t];
        var u = i.getComponent();
        if (u && (void 0 !== u.r ? o = !0 : null != u.p && (o = !1, n = u.p, r = t)), t >= e.length) {
          return "break";
        }
        var l = 0;
        var f = c.advancer(i, void 0, function (e, t) {
          if (A(t)) {
            l++;
          }
        });
        a.unshift(f);
        var h = f(s);
        if ("number" == typeof s) {
          e[t] -= l;
        }
        return h ? void 0 : "break";
      }, u = 0;; u++) {
      if ("break" === s(u)) {
        break;
      }
    }
    if (a.forEach(function (e) {
      return e.end();
    }), o) {
      return null;
    }
    var l = function () {
      var t = 0;
      if (null != n) {
        var o = i.getPath();
        t = o.length;
        e = o.concat(e.slice(r));
      }
      for (var a = function () {
        var n = e[t];
        var r = d(i);
        var o = O(r);
        if (o) {
          var a = S(r);
          if (o.transformPosition) {
            e[t] = o.transformPosition(e[t], a);
          }
          return "break";
        }
        var s = 0;
        var u = c.advancer(i, function (e, t) {
          return g(t) ? ~(e - s) : e - s;
        }, function (e, t) {
          if (g(t)) {
            s++;
          }
        })(n);
        if ("number" == typeof n && (e[t] += s), !u) {
          return "break";
        }
      }; t < e.length; t++) {
        if ("break" === a()) {
          break;
        }
      }
    };
    if (null != n) {
      i.eachDrop(null, function (e) {
        if (e === n) {
          l();
        }
      });
    } else {
      l();
    }
    return e;
  },
  compose: F,
  tryTransform: M,
  transform: function (e, t, n) {
    var r = M(e, t, n);
    if (r.ok) {
      return r.result;
    }
    j(r.conflict);
  },
  makeInvertible: P,
  invert: R,
  invertWithDoc: function (e, t) {
    return R(P(e, t));
  },
  RM_UNEXPECTED_CONTENT: u.ConflictType.RM_UNEXPECTED_CONTENT,
  DROP_COLLISION: u.ConflictType.DROP_COLLISION,
  BLACKHOLE: u.ConflictType.BLACKHOLE,
  transformNoConflict: function (e, t, n) {
    return H(function () {
      return !0;
    }, e, t, n);
  },
  typeAllowingConflictsPred: function (e) {
    return Object.assign(Object.assign({}, exports.type), {
      transform: function (t, n, r) {
        return H(e, t, n, r);
      }
    });
  }
};
var d = function (e) {
  return e ? e.getComponent() : null;
};
function p(e) {
  return e && "object" == typeof e && !Array.isArray(e);
}
var _ = function (e) {
  return Array.isArray(e) ? e.slice() : null !== e && "object" == typeof e ? Object.assign({}, e) : e;
};
var A = function (e) {
  return e && (null != e.p || void 0 !== e.r);
};
var g = function (e) {
  return e && (null != e.d || void 0 !== e.i);
};
function v(e, t) {
  f(null != e);
  if ("number" == typeof t) {
    f(Array.isArray(e), "Invalid key - child is not an array");
    (e = e.slice()).splice(t, 1);
  } else {
    f(p(e), "Invalid key - child is not an object");
    delete (e = Object.assign({}, e))[t];
  }
  return e;
}
function m(e, t, n) {
  if ("number" == typeof t) {
    f(null != e, "Container is missing for key");
    f(Array.isArray(e), "Cannot use numerical key for object container");
    f(e.length >= t, "Cannot insert into out of bounds index");
    e.splice(t, 0, n);
  } else {
    f(p(e), "Cannot insert into missing item");
    f(void 0 === e[t], "Trying to overwrite value at key. Your op needs to remove it first");
    e[t] = n;
  }
  return n;
}
exports.removeOp = function (e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return c.writeCursor().writeAtPath(e, "r", t).get();
};
exports.moveOp = function (e, t) {
  return c.writeCursor().writeMove(e, t).get();
};
exports.insertOp = function (e, t) {
  return c.writeCursor().writeAtPath(e, "i", t).get();
};
exports.replaceOp = function (e, t, n) {
  return c.writeCursor().at(e, function (e) {
    e.write("r", t);
    e.write("i", n);
  }).get();
};
exports.editOp = function (e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return c.writeCursor().at(e, function (e) {
    return k(e, t, n, r);
  }).get();
};
var y = function (e, t) {
  return null != e && ("number" == typeof t ? Array.isArray(e) : "object" == typeof e);
};
var b = function (e, t) {
  return y(e, t) ? e[t] : void 0;
};
var w = {};
function E(e) {
  var t = e.type ? e.type : e;
  if (t.name) {
    w[t.name] = t;
  }
  if (t.uri) {
    w[t.uri] = t;
  }
}
var x = function (e) {
  var t = w[e];
  if (t) {
    return t;
  }
  throw Error("Missing type: " + e);
};
E(require("../1356/1344/index"));
var C = function (e, t) {
  return e + t;
};
E({
  name: "number",
  apply: C,
  compose: C,
  invert: function (e) {
    return -e;
  },
  transform: function (e) {
    return e;
  }
});
var O = function (e) {
  return null == e ? null : e.et ? x(e.et) : e.es ? w["text-unicode"] : null != e.ena ? w.number : null;
};
var S = function (e) {
  return e.es ? e.es : null != e.ena ? e.ena : e.e;
};
var k = function (e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  var o = "string" == typeof t ? [x(t), t] : [t, t.name];
  var a = i(o, 2);
  var s = a[0];
  var c = a[1];
  if (!(!r && s.isNoop && s.isNoop(n))) {
    if ("number" === c) {
      e.write("ena", n);
    } else {
      if ("text-unicode" === c) {
        e.write("es", n);
      } else {
        e.write("et", c);
        e.write("e", n);
      }
    }
  }
};
function T(e) {
  f("number" == typeof e);
  f(e >= 0);
  f(e === (0 | e));
}
function B(e) {
  if ("number" == typeof e) {
    T(e);
  } else {
    f("string" == typeof e);
  }
}
function D(e) {
  if (null !== e) {
    var t = new Set();
    var n = new Set();
    var r = function (e) {
      var r = !0;
      var i = !1;
      for (var o in e) {
        var a = e[o];
        if (r = !1, f("p" === o || "r" === o || "d" === o || "i" === o || "e" === o || "es" === o || "ena" === o || "et" === o, "Invalid component item '" + o + "'"), "p" === o) {
          T(a);
          f(!t.has(a));
          t.add(a);
          f(void 0 === e.r);
        } else if ("d" === o) {
          T(a);
          f(!n.has(a));
          n.add(a);
          f(void 0 === e.i);
        } else if ("e" === o || "es" === o || "ena" === o) {
          f(!i);
          i = !0;
          var s = O(e);
          f(s, "Missing type in edit");
          if (s.checkValidOp) {
            s.checkValidOp(S(e));
          }
        }
      }
      f(!r);
    };
    (function e(t, n, i) {
      if (!Array.isArray(t)) {
        throw Error("Op must be null or a list");
      }
      if (0 === t.length) {
        throw Error("Empty descent");
      }
      if (!n) {
        B(t[0]);
      }
      for (var o = 1, a = 0, s = 0, u = 0; u < t.length; u++) {
        var l = t[u];
        if (f(null != l), Array.isArray(l)) {
          var h = e(l, !1, i);
          if (a) {
            var d = typeof s;
            var p = typeof h;
            if (d === p) {
              f(s < h, "descent keys are not in order");
            } else {
              f("number" === d && "string" === p);
            }
          }
          s = h;
          a++;
          o = 3;
        } else if ("object" == typeof l) {
          f(1 === o, "Prev not scalar - instead ".concat(o));
          r(l);
          o = 2;
        } else {
          f(3 !== o);
          B(l);
          f(c.isValidPathItem(l), "Invalid path key");
          o = 1;
        }
      }
      f(1 !== a, "Operation makes multiple descents. Remove some []");
      f(2 === o || 3 === o);
      return t[0];
    })(e, !0, !1);
    f(t.size === n.size, "Mismatched picks and drops in op");
    for (var i = 0; i < t.size; i++) {
      f(t.has(i));
      f(n.has(i));
    }
  }
}
function I(e) {
  var t = 0;
  var n = [];
  var r = c.writeCursor();
  r.mergeTree(e, function (e, r) {
    var i;
    var o = O(e);
    if (o) {
      var a = S(e);
      k(r, o, o.normalize ? o.normalize(a) : a);
    }
    for (var s = 0, c = ["r", "p", "i", "d"]; s < c.length; s++) {
      var u = c[s];
      if (void 0 !== e[u]) {
        var l = "p" === u || "d" === u ? (i = e[u], null == n[i] && (n[i] = t++), n[i]) : e[u];
        r.write(u, l);
      }
    }
  });
  return r.get();
}
function F(e, t) {
  if (D(e), D(t), null == e) {
    return t;
  }
  if (null == t) {
    return e;
  }
  var n = 0;
  var r = c.readCursor(e);
  var i = c.readCursor(t);
  var o = c.writeCursor();
  var a = [];
  var s = [];
  var u = [];
  var l = [];
  var h = [];
  var p = [];
  var _ = new Set();
  r.traverse(null, function (e) {
    if (null != e.p) {
      u[e.p] = r.clone();
    }
  });
  i.traverse(null, function (e) {
    if (null != e.d) {
      l[e.d] = i.clone();
    }
  });
  var v = c.writeCursor();
  (function e(t, r, i, o, v, m, y, b) {
    f(r || i);
    var w = d(r);
    var E = d(i);
    var x = !!E && void 0 !== E.r;
    var C = !!w && void 0 !== w.i;
    var T = w ? w.d : null;
    var B = E ? E.p : null;
    var D = (m || x) && null == B;
    if (null != B) {
      o = l[B];
      y = s[B] = new c.WriteCursor();
    } else if (E && void 0 !== E.r) {
      o = null;
    } else {
      var I = d(o);
      if (I && null != I.d) {
        o = null;
      }
    }
    var F;
    var R = d(o);
    if (null != T) {
      if (t = u[T], b = a[T] = new c.WriteCursor(), D) {
        if (m && !x) {
          b.write("r", !0);
        }
      } else {
        var P = h[T] = n++;
        y.write("d", P);
      }
    } else if (w && void 0 !== w.i) {
      t = null;
    } else {
      var N = d(t);
      if (N && null != N.p) {
        t = null;
      }
    }
    if (C) {
      f(void 0 === v);
      F = w.i;
    } else {
      F = v;
    }
    var M = (null == B ? !C || m || x : void 0 === F) ? null : y.getComponent();
    if (null != B) {
      if (void 0 !== v || C) {
        ;
      } else {
        var j = null != T ? h[T] : n++;
        p[B] = j;
        b.write("p", j);
      }
    } else if (x) {
      if (!(C || void 0 !== v)) {
        E.r;
        b.write("r", E.r);
      }
    }
    var L = D ? null : O(w);
    var U = O(R);
    if ((L || U) && (L && L.name, U && U.name), L && U) {
      f(L === U);
      var H = S(w);
      var V = S(R);
      var G = L.compose(H, V);
      k(y, L, G);
      _.add(R);
    } else if (L) {
      k(y, L, S(w));
    } else {
      if (U) {
        k(y, U, S(R));
        _.add(R);
      }
    }
    var z = "object" == typeof F && null != F;
    var Q = !1;
    var W = 0;
    var K = 0;
    var X = 0;
    var Y = 0;
    var q = 0;
    var $ = c.advancer(o, function (e, t) {
      return g(t) ? Y - e - 1 : e - Y;
    }, function (e, t) {
      if (g(t)) {
        Y++;
      }
    });
    var J = c.advancer(t, function (e, t) {
      return A(t) ? W - e - 1 : e - W;
    }, function (e, t) {
      if (A(t)) {
        W++;
      }
    });
    if (c.eachChildOf(r, i, function (t, n, r) {
      var i;
      var o;
      var a = t;
      var s = t;
      var c = t;
      if ("number" == typeof t) {
        var u = t + X;
        o = $(u);
        s = u + Y;
        var l = t + K;
        i = J(l);
        if (g(d(o))) {
          i = null;
        }
        c = t + q;
        f((a = l + W) >= 0, "p1PickKey is negative");
        f(s >= 0, "p2DropKey is negative");
        var h = g(d(n));
        var p = A(d(r));
        if (h || p && !D) {
          q--;
        }
        if (h) {
          K--;
        }
        if (p) {
          X--;
        }
      } else {
        i = J(t);
        o = $(t);
      }
      b.descend(a);
      y.descend(s);
      var _;
      var v;
      var m;
      var w = z && !g(d(n)) ? F[c] : void 0;
      var E = e(i, n, r, o, w, D, y, b);
      if (z && !D) {
        if (w !== E) {
          if (!Q) {
            F = Array.isArray(F) ? F.slice() : Object.assign({}, F);
            Q = !0;
          }
          _ = F;
          m = E;
          if ("number" == typeof (v = c)) {
            f(Array.isArray(_));
            f(v < _.length);
          } else {
            f(!Array.isArray(_));
            f(void 0 !== _[v]);
          }
          if (void 0 === m) {
            if ("number" == typeof v) {
              _.splice(v, 1);
            } else {
              delete _[v];
            }
          } else {
            _[v] = m;
          }
        }
      } else {
        f(void 0 === E);
      }
      y.ascend();
      b.ascend();
    }), J.end(), $.end(), null != M) {
      M.i = F;
    } else if (!m && !x && null == B) {
      return F;
    }
  })(r, r.clone(), i, i.clone(), void 0, !1, o, v);
  o.reset();
  o.mergeTree(v.get());
  o.reset();
  o.get();
  a.map(function (e) {
    return e.get();
  });
  s.map(function (e) {
    return e.get();
  });
  r.traverse(o, function (e, t) {
    var n = e.p;
    if (null != n) {
      var r = h[n];
      if (null != r) {
        t.write("p", r);
      }
      var i = a[n];
      if (i) {
        i.get();
      }
      if (i) {
        t.mergeTree(i.get());
      }
    } else if (void 0 !== e.r) {
      t.write("r", e.r);
    }
  });
  o.reset();
  o.get();
  i.traverse(o, function (e, t) {
    var n = e.d;
    if (null != n) {
      var r = p[n];
      if (null != r) {
        t.write("d", r);
      }
      var i = s[n];
      if (i) {
        t.mergeTree(i.get());
      }
    } else if (void 0 !== e.i) {
      t.write("i", e.i);
    }
    var o = O(e);
    if (o && !_.has(e)) {
      k(t, o, S(e));
    }
  });
  return o.get();
}
function R(e) {
  if (null == e) {
    return null;
  }
  var t;
  var n = new c.ReadCursor(e);
  var i = new c.WriteCursor();
  var o = [];
  var a = [];
  (function e(n, i, a) {
    var s;
    var c = n.getComponent();
    var u = !1;
    if (c) {
      if (null != c.p) {
        i.write("d", c.p);
        o[c.p] = n.clone();
      }
      if (void 0 !== c.r) {
        i.write("i", c.r);
      }
      if (null != c.d) {
        i.write("p", c.d);
        a = void 0;
      }
      if (void 0 !== c.i) {
        a = s = c.i;
      }
      var l = O(c);
      if (l) {
        if (void 0 === a) {
          if (!t) {
            t = new Set();
          }
          t.add(c);
        } else {
          S(c);
          a = l.apply(a, S(c));
          u = !0;
        }
      }
    }
    var f;
    var h = 0;
    var d = r(n);
    try {
      for (d.s(); !(f = d.n()).done;) {
        var p = f.value;
        i.descend(p);
        var A = "number" == typeof p ? p - h : p;
        var v = b(a, A);
        if (g(n.getComponent())) {
          h++;
        }
        var m = e(n, i, v);
        if (void 0 !== a && void 0 !== m) {
          if (u || (u = !0, a = _(a)), !y(a, A)) {
            throw Error("Cannot modify child - invalid operation");
          }
          a[A] = m;
        }
        i.ascend();
      }
    } catch (w) {
      d.e(w);
    } finally {
      d.f();
    }
    if (void 0 === s) {
      return u ? a : void 0;
    }
    i.write("r", a);
  })(n, i, void 0);
  if (t) {
    i.reset();
    (function e(n, i, s) {
      var u = i.getComponent();
      if (u) {
        var l = u.d;
        if (null != l && (n = o[l], s = a[l] = c.writeCursor()), t.has(u)) {
          var f = O(u);
          if (!f.invert) {
            throw Error("Cannot invert subtype ".concat(f.name));
          }
          k(s, f, f.invert(S(u)));
        }
      }
      var h;
      var d = 0;
      var p = 0;
      var _ = c.advancer(n, function (e, t) {
        return A(t) ? d - e - 1 : e - d;
      }, function (e, t) {
        if (A(t)) {
          d++;
        }
      });
      var v = r(i);
      try {
        for (v.s(); !(h = v.n()).done;) {
          var m = h.value;
          if ("number" == typeof m) {
            var y = m - p;
            var b = _(y);
            var w = y + d;
            s.descend(w);
            e(b, i, s);
            if (g(i.getComponent())) {
              p++;
            }
            s.ascend();
          } else {
            s.descend(m);
            e(_(m), i, s);
            s.ascend();
          }
        }
      } catch (E) {
        v.e(E);
      } finally {
        v.f();
      }
      _.end();
    })(n.clone(), n, i);
    if (a.length) {
      i.reset();
      n.traverse(i, function (e, t) {
        var n = e.p;
        if (null != n) {
          var r = a[n];
          if (r) {
            r.get();
          }
          if (r) {
            t.mergeTree(r.get());
          }
        }
      });
    }
  }
  return i.get();
}
function P(e, t) {
  if (null == e || !function e(t, n) {
    return t.some(function (t) {
      return "object" == typeof t && (Array.isArray(t) ? e(t, n) : n(t));
    });
  }(e, function (e) {
    var t;
    return void 0 !== e.r || null != (null === (t = O(e)) || void 0 === t ? void 0 : t.makeInvertible);
  })) {
    return e;
  }
  var n = new c.ReadCursor(e);
  var i = new c.WriteCursor();
  var o = !1;
  var a = [];
  var u = [];
  (function e(t, n, i) {
    var c = t.getComponent();
    var l = !1;
    if (c) {
      if (null != c.d) {
        n.write("d", c.d);
      }
      if (void 0 !== c.i) {
        n.write("i", c.i);
      }
      var h = c.p;
      if (null != h && (a[h] = t.clone(), f(void 0 !== i, "Operation picks up at an invalid key"), u[h] = i, n.write("p", c.p)), void 0 !== c.r && void 0 === i) {
        throw Error("Invalid doc / op in makeInvertible: removed item missing from doc");
      }
      var d = O(c);
      if (d) {
        if (d.makeInvertible) {
          o = !0;
        } else {
          k(n, d, S(c), !0);
        }
      }
    }
    var p;
    var A = 0;
    var g = r(t);
    try {
      for (g.s(); !(p = g.n()).done;) {
        var m = p.value;
        n.descend(m);
        var y = "number" == typeof m ? m - A : m;
        var w = b(i, y);
        var E = e(t, n, w);
        if (w !== E) {
          if (!l) {
            l = !0;
            i = _(i);
          }
          if (void 0 === E) {
            i = v(i, y);
            if ("number" == typeof m) {
              A++;
            }
          } else {
            i[y] = E;
          }
        }
        n.ascend();
      }
    } catch (x) {
      g.e(x);
    } finally {
      g.f();
    }
    if (c) {
      if (void 0 !== c.r) {
        n.write("r", s.default(i));
        i = void 0;
      } else {
        if (null != c.p) {
          i = void 0;
        }
      }
    }
    return i;
  })(n, i, t);
  i.get();
  if (o) {
    i.reset();
    (function e(t, n, i, o, s) {
      var l = n.getComponent();
      if (l) {
        if (void 0 !== l.i) {
          o = l.i;
          s = !0;
        } else {
          if (null != l.d) {
            o = u[l.d];
            t = a[l.d];
            s = !1;
            l.d;
          }
        }
        var f = O(l);
        if (f && f.makeInvertible) {
          var h = S(l);
          k(i, f, f.makeInvertible(h, o), !0);
        }
      }
      var d;
      var p = 0;
      var _ = 0;
      var v = c.advancer(t, function (e, t) {
        return A(t) ? p - e - 1 : e - p;
      }, function (e, t) {
        if (A(t)) {
          p++;
        }
      });
      var m = r(n);
      try {
        for (m.s(); !(d = m.n()).done;) {
          var y = d.value;
          if ("number" == typeof y) {
            var w = y - _;
            var E = v(w);
            var x = b(o, s ? w : w + p);
            i.descend(y);
            e(E, n, i, x, s);
            if (g(n.getComponent())) {
              _++;
            }
            i.ascend();
          } else {
            var C = b(o, y);
            i.descend(y);
            e(v(y), n, i, C, s);
            i.ascend();
          }
        }
      } catch (T) {
        m.e(T);
      } finally {
        m.f();
      }
      v.end();
    })(n.clone(), n, i, t, !1);
  }
  return i.get();
}
var N = function e(t) {
  if (null == t) {
    return null;
  }
  for (var n = t.slice(), r = 0; r < t.length; r++) {
    var i = n[r];
    if (Array.isArray(i)) {
      n[r] = e(i);
    }
  }
  return n;
};
function M(e, n, i) {
  f("left" === i || "right" === i, "Direction must be left or right");
  var o = "left" === i ? 0 : 1;
  if (l.quiet = !h, l.prefix = 0, null == n) {
    return {
      ok: !0,
      result: e
    };
  }
  D(e);
  D(n);
  var p = null;
  var _ = [];
  var v = [];
  var m = [];
  var y = [];
  var b = [];
  var w = [];
  var E = [];
  var x = [];
  var C = [];
  var T = [];
  var B = [];
  var I = [];
  var F = [];
  var R = [];
  var P = [];
  var M = 0;
  var j = c.readCursor(e);
  var L = c.readCursor(n);
  var U = c.writeCursor();
  if (function e(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    var i = arguments.length > 2 ? arguments[2] : void 0;
    var o = d(n);
    if (o) {
      if (void 0 !== o.r) {
        i = n.clone();
      } else {
        if (null != o.p) {
          i = null;
          w[o.p] = t.clone();
        }
      }
    }
    var a;
    var s = t.getComponent();
    if (s && null != (a = s.p)) {
      b[a] = n ? n.clone() : null;
      m[a] = t.clone();
      if (i) {
        T[a] = !0;
        C[a] = i;
      }
      if (o && null != o.p) {
        R[a] = o.p;
      }
    }
    var u;
    var l = c.advancer(n);
    var f = r(t);
    try {
      for (f.s(); !(u = f.n()).done;) {
        var h = u.value;
        e(t, l(h), i);
      }
    } catch (p) {
      f.e(p);
    } finally {
      f.f();
    }
    l.end();
  }(L, j, null), function e(n, i, a, s, l) {
    var f;
    var h = a.getComponent();
    var _ = !1;
    if (h) {
      if (null != (f = h.d)) {
        y[f] = a.clone();
        if (null != s) {
          if (null == P[s]) {
            P[s] = [];
          }
          P[s].push(f);
        }
        T[f];
        n = b[f] || null;
        i = m[f] || null;
        if (T[f]) {
          if (l) {
            B[f] = !0;
          }
          l = C[f] || null;
        } else {
          if (!(!l || 1 !== o && null != R[f])) {
            if (null == p) {
              p = {
                type: u.ConflictType.RM_UNEXPECTED_CONTENT,
                op1: exports.removeOp(l.getPath()),
                op2: exports.moveOp(i.getPath(), a.getPath())
              };
            }
          }
        }
        _ = !0;
      } else {
        if (void 0 !== h.i) {
          n = i = null;
          _ = !0;
          if (l && null == p) {
            p = {
              type: u.ConflictType.RM_UNEXPECTED_CONTENT,
              op1: exports.removeOp(l.getPath()),
              op2: exports.insertOp(a.getPath(), h.i)
            };
          }
        }
      }
    }
    var g = d(n);
    if (g) {
      if (void 0 !== g.r) {
        l = n.clone();
      } else {
        if (null != g.p) {
          g.p;
          s = g.p;
          l = null;
        }
      }
    }
    var v = O(h);
    if (v && l && null == p) {
      p = {
        type: u.ConflictType.RM_UNEXPECTED_CONTENT,
        op1: exports.removeOp(l.getPath()),
        op2: exports.editOp(a.getPath(), v, S(h), !0)
      };
    }
    var w;
    var E = 0;
    var x = 0;
    var k = c.advancer(i, function (e, t) {
      return A(t) ? E - e - 1 : e - E;
    }, function (e, t) {
      if (A(t)) {
        E++;
      }
    });
    var D = c.advancer(n);
    var I = r(a);
    try {
      for (I.s(); !(w = I.n()).done;) {
        var F = w.value;
        if ("number" == typeof F) {
          var N = F - x;
          var M = k(N);
          x += +e(D(N + E), M, a, s, l);
        } else {
          var j = k(F);
          e(D(F), j, a, s, l);
        }
      }
    } catch (L) {
      I.e(L);
    } finally {
      I.f();
    }
    k.end();
    D.end();
    return _;
  }(j, L, L.clone(), null, null), y.map(function (e) {
    return e && e.get();
  }), p) {
    return {
      ok: !1,
      conflict: p
    };
  }
  B.map(function (e) {
    return !!e;
  });
  var H = [];
  var V = null;
  !function e(t, n, i, a, s) {
    var u = !1;
    var l = d(n);
    if (A(l)) {
      var h = l.p;
      if (null != h) {
        i = y[h];
        a = I[h] = c.writeCursor();
        u = !0;
        s = null;
      } else {
        i = null;
        s = n.clone();
      }
    } else if (g(d(i))) {
      i = null;
    }
    var p = t.getComponent();
    if (p) {
      var v = p.p;
      if (null != v) {
        if (s) {
          x[v] = s;
        }
        H[v] = s || 1 === o && u ? null : a.getComponent();
        _[v] = t.clone();
        if (i) {
          E[v] = i.clone();
        }
      } else {
        if (void 0 !== p.r) {
          if (!s) {
            a.write("r", !0);
          }
          if (s || u) {
            if (null == V) {
              V = new Set();
            }
            V.add(p);
          }
        }
      }
    }
    var m = 0;
    var b = 0;
    var w = c.advancer(n, void 0, function (e, t) {
      if (A(t)) {
        m++;
      }
    });
    var C = c.advancer(i, function (e, t) {
      return g(t) ? ~(e - b) : e - b;
    }, function (e, t) {
      if (g(t)) {
        b++;
      }
    });
    if (t) {
      var O;
      var S = r(t);
      try {
        for (S.s(); !(O = S.n()).done;) {
          var k = O.value;
          if ("string" == typeof k) {
            var T = w(k);
            var B = C(k);
            a.descend(k);
            e(t, T, B, a, s);
            a.ascend();
          } else {
            var D = w(k);
            var F = k - m;
            var R = A(d(D)) ? null : C(F);
            var P = F + b;
            f(P >= 0);
            a.descend(P);
            e(t, D, R, a, s);
            a.ascend();
          }
        }
      } catch (N) {
        S.e(N);
      } finally {
        S.f();
      }
    }
    w.end();
    C.end();
  }(j, L, L.clone(), U, null);
  U.reset();
  var G = [];
  if (function e(n, l, h, b, C, B) {
    f(l);
    var D = l.getComponent();
    var I = d(b);
    var P = !1;
    var N = function (e, n, r) {
      return e ? exports.moveOp(e.getPath(), n.getPath()) : exports.insertOp(n.getPath(), r.i);
    };
    if (g(D)) {
      var j = D.d;
      if (null != j) {
        v[j] = l.clone();
      }
      var L;
      var U = null != j ? H[j] : null;
      var z = !1;
      if (void 0 !== D.i || null != j && U) {
        if (I && (void 0 !== I.i || null != (L = I.d) && !T[L])) {
          if (!((z = null != L ? null != j && j === R[L] : a.default(I.i, D.i)) || null != L && 1 !== o && null != R[L])) {
            if (null == p) {
              p = {
                type: u.ConflictType.DROP_COLLISION,
                op1: N(null != j ? _[j] : null, l, D),
                op2: N(null != L ? m[L] : null, b, I)
              };
            }
          }
        }
        if (!z) {
          if (B) {
            if (null == p) {
              p = {
                type: u.ConflictType.RM_UNEXPECTED_CONTENT,
                op1: N(null != j ? _[j] : null, l, D),
                op2: exports.removeOp(B.getPath())
              };
            }
          } else {
            if (null != j) {
              G[M] = j;
              C.write("d", U.p = M++);
            } else {
              C.write("i", s.default(D.i));
            }
            P = !0;
          }
        }
      } else if (null != j && !U) {
        var Q = x[j];
        if (Q) {
          B = Q.clone();
        }
      }
      if (null != j) {
        n = _[j];
        h = w[j];
        b = E[j];
      } else {
        if (void 0 !== D.i) {
          n = h = null;
          if (!z) {
            b = null;
          }
        }
      }
    } else if (A(d(n))) {
      n = h = b = null;
    }
    var W = d(n);
    var K = d(h);
    if (A(K)) {
      var X = K.p;
      if (void 0 !== K.r && (!W || void 0 === W.r) || T[X]) {
        b = null;
        B = h.clone();
      } else {
        if (null != X) {
          b = y[X];
          if (!(1 !== o && null != R[X])) {
            if (!(C = F[X])) {
              C = F[X] = c.writeCursor();
            }
            C.reset();
            B = null;
          }
        }
      }
    } else if (!g(D) && g(I)) {
      b = null;
    }
    I = null != b ? b.getComponent() : null;
    var Y = O(D);
    if (Y) {
      var q = S(D);
      if (B) {
        if (null == p) {
          p = {
            type: u.ConflictType.RM_UNEXPECTED_CONTENT,
            op1: exports.editOp(l.getPath(), Y, q, !0),
            op2: exports.removeOp(B.getPath())
          };
        }
      } else {
        var $;
        var J = O(I);
        if (J) {
          if (Y !== J) {
            throw Error("Transforming incompatible types");
          }
          var Z = S(I);
          $ = Y.transform(q, Z, i);
        } else {
          $ = s.default(q);
        }
        k(C, Y, $);
      }
    }
    var ee;
    var te = 0;
    var ne = 0;
    var re = 0;
    var ie = 0;
    var oe = 0;
    var ae = 0;
    var se = null != n && n.descendFirst();
    var ce = se;
    var ue = c.advancer(h, void 0, function (e, t) {
      if (A(t)) {
        re++;
      }
    });
    var le = null != b && b.descendFirst();
    var fe = le;
    var he = r(l);
    try {
      for (he.s(); !(ee = he.n()).done;) {
        var de = ee.value;
        if ("number" == typeof de) {
          for (var pe = void 0, _e = g(l.getComponent()), Ae = de - ne, ge = void 0; se && "number" == typeof (ge = n.getKey());) {
            ge += te;
            var ve = n.getComponent();
            var me = A(ve);
            if (ge > Ae || ge === Ae && (!me || 0 === o && _e)) {
              break;
            }
            if (me) {
              te--;
              var ye = ve.p;
              H[ye];
              R.includes(ye);
              ve.d;
              d(F[ve.d]);
              A(d(F[ve.d]));
              if (!((void 0 === ve.r || V && V.has(ve)) && (null == ye || !H[ye] || 1 !== o && R.includes(ye)))) {
                oe--;
              }
            }
            se = n.nextSibling();
          }
          pe = se && ge === Ae ? n : null;
          for (var be = Ae - te, we = ue(be), Ee = be - re, xe = null, Ce = void 0, Oe = void 0; le && "number" == typeof (Ce = b.getKey());) {
            Oe = Ce - ie;
            var Se = b.getComponent();
            var ke = g(Se);
            if (Oe > Ee) {
              break;
            }
            if (Oe === Ee) {
              if (!ke) {
                xe = b;
                break;
              }
              if (0 === o && _e) {
                xe = b;
                break;
              }
              var Te = we && A(we.getComponent());
              if (0 === o && Te) {
                break;
              }
            }
            if (ke) {
              var Be = Se.d;
              T[Be];
              R[Be];
              if (void 0 === Se.i && (T[Be] || null != R[Be] && 1 !== o)) {
                if (T[Be] || null != R[Be] && 0 === o) {
                  ie++;
                  ae--;
                }
              } else {
                ie++;
              }
            }
            le = b.nextSibling();
          }
          var De = Ee + ie + oe + ae;
          f(De >= 0, "trying to descend to a negative index");
          C.descend(De);
          if (_e) {
            pe = we = xe = null;
            ne++;
          }
          if (e(pe, l, we, xe, C, B)) {
            ae++;
          }
          C.ascend();
        } else {
          for (var Ie = void 0; se && ("string" != typeof (Ie = n.getKey()) || !(Ie > de || Ie === de));) {
            se = n.nextSibling();
          }
          for (var Fe = se && Ie === de ? n : null, Re = ue(de), Pe = void 0; le && ("string" != typeof (Pe = b.getKey()) || !(Pe > de || Pe === de));) {
            le = b.nextSibling();
          }
          var Ne = le && Pe === de ? b : null;
          C.descend(de);
          e(Fe, l, Re, Ne, C, B);
          C.ascend();
        }
      }
    } catch (Me) {
      he.e(Me);
    } finally {
      he.f();
    }
    ue.end();
    if (ce) {
      n.ascend();
    }
    if (fe) {
      b.ascend();
    }
    return P;
  }(j, j.clone(), L, L.clone(), U, null), p) {
    return {
      ok: !1,
      conflict: p
    };
  }
  U.reset();
  var z = function (e, t, n) {
    return e.traverse(t, function (t, r) {
      if (null != t.d) {
        n(t.d, e, r);
      }
    });
  };
  if (T.length || I.length) {
    z(L, U, function (e, t, n) {
      if (T[e] && !B[e]) {
        n.write("r", !0);
      }
      if (I[e]) {
        n.mergeTree(I[e].get());
      }
    });
    U.reset();
  }
  var Q = [];
  var W = [];
  if ((F.length || T.length) && !p) {
    var K = c.readCursor(N(U.get()));
    if (z(K, null, function (e, t) {
      Q[e] = t.clone();
    }), F.forEach(function (e) {
      if (e) {
        z(c.readCursor(e.get()), null, function (e, t) {
          Q[e] = t.clone();
        });
      }
    }), function e(t, n, i, o, a, s) {
      l.prefix++;
      var u = d(n);
      if (u && A(u)) {
        if (null != u.p) {
          a = u;
          var f = u.p;
          Q[f].getPath();
          i = Q[f];
          o = W[f] = c.writeCursor();
        } else if (void 0 !== u.r) {
          i = null;
          s = !0;
        }
      } else if (g(d(i))) {
        i = null;
      }
      var h;
      var p = t.getComponent();
      if (p && null != (h = p.d)) {
        var _ = F[h];
        if (_) {
          _.get();
          o.mergeTree(_.get());
          i = c.readCursor(_.get());
        }
      }
      var v;
      var m = 0;
      var y = 0;
      var b = c.advancer(n, void 0, function (e, t) {
        if (A(t)) {
          m--;
        }
      });
      var w = c.advancer(i, function (e, t) {
        return g(t) ? -(e - y) - 1 : e - y;
      }, function (e, t) {
        if (g(t)) {
          y++;
        }
      });
      var E = r(t);
      try {
        for (E.s(); !(v = E.n()).done;) {
          var x = v.value;
          if ("number" == typeof x) {
            var C = b(x);
            var O = x + m;
            var S = w(O);
            var k = O + y;
            o.descend(k);
            e(t, C, S, o, a, s);
            o.ascend();
          } else {
            o.descend(x);
            e(t, b(x), w(x), o, a, s);
            o.ascend();
          }
        }
      } catch (T) {
        E.e(T);
      } finally {
        E.f();
      }
      b.end();
      w.end();
    }(L, K, K.clone(), U, null, !1), U.reset(), p) {
      return {
        ok: !1,
        conflict: p
      };
    }
    if (U.get(), W.length) {
      var X = W.map(function (e) {
        return e ? e.get() : null;
      });
      var Y = c.readCursor(N(U.get()));
      if (z(Y, U, function (e, t, n) {
        var r = X[e];
        if (r) {
          n.mergeTree(r);
          X[e] = null;
        }
      }), X.find(function (e) {
        return e;
      })) {
        var q = c.writeCursor();
        var $ = c.writeCursor();
        var J = 0;
        var Z = 0;
        X.forEach(function (e) {
          if (null != e) {
            z(c.readCursor(e), null, function (e) {
              var t = G[e];
              q.writeMove(_[t].getPath(), v[t].getPath(), J++);
              var n = P[t];
              if (n) {
                n.forEach(function (e) {
                  if (!(T[e] || 1 !== o && null != R[e])) {
                    $.writeMove(m[e].getPath(), y[e].getPath(), Z++);
                  }
                });
              }
            });
          }
        });
        p = {
          type: u.ConflictType.BLACKHOLE,
          op1: q.get(),
          op2: $.get()
        };
      }
    }
  }
  return p ? {
    ok: !1,
    conflict: p
  } : {
    ok: !0,
    result: U.get()
  };
}
var j = function (e) {
  var t = new Error("Transform detected write conflict");
  throw t.conflict = e, t.type = t.name = "writeConflict", t;
};
var L = function (e) {
  var t = c.writeCursor();
  c.readCursor(e).traverse(t, function (e, t) {
    if (g(e) || O(e)) {
      t.write("r", !0);
    }
  });
  return t.get();
};
var U = function (e, t) {
  var n = e.type;
  var r = e.op1;
  var i = e.op2;
  switch (n) {
    case u.ConflictType.DROP_COLLISION:
      return "left" === t ? [null, L(i)] : [L(r), null];
    case u.ConflictType.RM_UNEXPECTED_CONTENT:
      var o = !1;
      c.readCursor(r).traverse(null, function (e) {
        if (void 0 !== e.r) {
          o = !0;
        }
      });
      return o ? [null, L(i)] : [L(r), null];
    case u.ConflictType.BLACKHOLE:
      return [L(r), L(i)];
    default:
      throw Error("Unrecognised conflict: " + n);
  }
};
function H(e, t, n, r) {
  for (var o = null;;) {
    var a = M(t, n, r);
    if (a.ok) {
      return F(o, a.result);
    }
    var s = a.conflict;
    if (!e(s)) {
      j(s);
    }
    var c = U(s, r);
    var u = i(c, 2);
    var l = u[0];
    var f = u[1];
    t = F(I(t), l);
    n = F(I(n), f);
    o = F(o, f);
  }
}