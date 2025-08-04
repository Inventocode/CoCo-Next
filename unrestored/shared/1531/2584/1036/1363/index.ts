"use strict";

var r = require("../../38/607/494");
var i = require("../../38/607/624/index");
var o = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.editOp = exports.replaceOp = exports.insertOp = exports.moveOp = exports.removeOp = exports.type = void 0;
var a = o(require("./1349"));
var s = o(require("./1350"));
var c = require("../../49/32/1122");
var u = require("../../49/32/1123");
var l = Object({
  NODE_ENV: "production",
  PUBLIC_URL: "",
  WDS_SOCKET_HOST: void 0,
  WDS_SOCKET_PATH: void 0,
  WDS_SOCKET_PORT: void 0
}).JSON1_RELEASE_MODE;
var f = l ? function () {} : require("./2317").default;
function d(e, t) {
  if (l) {
    if (!e) {
      throw new Error(t);
    }
  } else {
    require("./569")(e, t);
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
    f.quiet = !e;
  },
  registerSubtype: C,
  checkValidOp: F,
  normalize: R,
  apply: function (e, t) {
    f.quiet = !h;
    if (!l) {
      f("apply");
      f("snapshot", e);
      f("op", t);
      f("repro: apply(".concat(JSON.stringify(e), ", ").concat(JSON.stringify(t), ")"));
    }
    F(t);
    if (null === t) {
      return e;
    }
    var n = [];
    e = function e(t, r) {
      for (var i = [], o = 0; o < r.length; o++) {
        var a = r[o];
        if (Array.isArray(a)) {
          break;
        }
        if ("object" !== typeof a) {
          i.push(t);
          t = E(t, a);
        }
      }
      for (var s = r.length - 1; s >= o; s--) {
        t = e(t, r[s]);
      }
      for (--o; o >= 0; o--) {
        var c = r[o];
        if ("object" !== typeof c) {
          var u = i.pop();
          var l = E(u, c);
          t = t === l ? u : void 0 === t ? m(u, c) : b(u, c, t);
        } else if (g(c)) {
          d(void 0 !== t, "Cannot pick up or remove undefined");
          if (null != c.p) {
            n[c.p] = t;
          }
          t = void 0;
        }
      }
      return t;
    }(e, t);
    f("--- after pick phase ---");
    f("held", n, "snapshot", e);
    e = function e(t, r) {
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
          if ("object" !== typeof e) {
            d(w(c, u));
            c = c[u] = A(c[u]);
            u = e;
          }
        }
      }
      for (; o < r.length; o++) {
        var f = r[o];
        if (Array.isArray(f)) {
          var h = e(i, f);
          if (h !== i && void 0 !== h) {
            l();
            i = c[u] = h;
          }
        } else if ("object" === typeof f) {
          if (null != f.d) {
            l();
            i = y(c, u, n[f.d]);
          } else {
            if (void 0 !== f.i) {
              l();
              i = y(c, u, f.i);
            }
          }
          var p = S(f);
          if (p) {
            l();
            i = c[u] = p.apply(i, T(f));
          } else if (void 0 !== f.e) {
            throw Error("Subtype " + f.et + " undefined");
          }
        } else {
          i = E(i, f);
        }
      }
      return a.root;
    }(e, t);
    f("-> apply returning snapshot", e);
    return e;
  },
  transformPosition: function (e, t) {
    f("transformPosition", e, t);
    P();
    e = e.slice();
    F(t);
    for (var n, r, i = c.readCursor(t), o = !1, a = [], s = function (t) {
        var s = e[t];
        var u = i.getComponent();
        f("pick phase", t, ":", s, u);
        if (u) {
          if (void 0 !== u.r) {
            o = !0;
          } else {
            if (null != u.p) {
              o = !1;
              n = u.p;
              r = t;
            }
          }
        }
        if (t >= e.length) {
          return "break";
        }
        var l = 0;
        var d = c.advancer(i, void 0, function (e, t) {
          if (g(t)) {
            l++;
          }
        });
        a.unshift(d);
        var h = d(s);
        if ("number" === typeof s) {
          e[t] -= l;
        }
        return h ? void 0 : "break";
      }, u = 0;; u++) {
      if ("break" === s(u)) {
        break;
      }
    }
    a.forEach(function (e) {
      return e.end();
    });
    N();
    f("after pick phase. Remove", o, "pi", r, "pas", n, "po", e);
    if (o) {
      f("item removed. Bailing!");
      return null;
    }
    var d = function () {
      P();
      var t = 0;
      if (null != n) {
        var o = i.getPath();
        t = o.length;
        if (!l) {
          f("path", e, "pi", r, "r", o);
        }
        e = o.concat(e.slice(r));
      }
      if (!l) {
        f("handleDrop at path", e, "read cursor", i.getPath());
      }
      for (var a = function () {
        var n = e[t];
        var r = p(i);
        var o = S(r);
        if (o) {
          var a = T(r);
          f("Embedded edit", a, o);
          if (o.transformPosition) {
            e[t] = o.transformPosition(e[t], a);
          }
          return "break";
        }
        var s = 0;
        var u = c.advancer(i, function (e, t) {
          return v(t) ? ~(e - s) : e - s;
        }, function (e, t) {
          if (v(t)) {
            s++;
          }
        })(n);
        if ("number" === typeof n) {
          e[t] += s;
        }
        if (!u) {
          return "break";
        }
      }; t < e.length; t++) {
        if ("break" === a()) {
          break;
        }
      }
      N();
    };
    if (null != n) {
      i.eachDrop(null, function (e) {
        if (e === n) {
          d();
        }
      });
    } else {
      d();
    }
    f("-> transformPosition returning", e);
    return e;
  },
  compose: M,
  tryTransform: H,
  transform: function (e, t, n) {
    var r = H(e, t, n);
    if (r.ok) {
      return r.result;
    }
    V(r.conflict);
  },
  makeInvertible: L,
  invert: j,
  invertWithDoc: function (e, t) {
    return j(L(e, t));
  },
  RM_UNEXPECTED_CONTENT: u.ConflictType.RM_UNEXPECTED_CONTENT,
  DROP_COLLISION: u.ConflictType.DROP_COLLISION,
  BLACKHOLE: u.ConflictType.BLACKHOLE,
  transformNoConflict: function (e, t, n) {
    return K(function () {
      return !0;
    }, e, t, n);
  },
  typeAllowingConflictsPred: function (e) {
    return Object.assign(Object.assign({}, exports.type), {
      transform: function (t, n, r) {
        return K(e, t, n, r);
      }
    });
  }
};
var p = function (e) {
  return e ? e.getComponent() : null;
};
function _(e) {
  return e && "object" === typeof e && !Array.isArray(e);
}
var A = function (e) {
  return Array.isArray(e) ? e.slice() : null !== e && "object" === typeof e ? Object.assign({}, e) : e;
};
var g = function (e) {
  return e && (null != e.p || void 0 !== e.r);
};
var v = function (e) {
  return e && (null != e.d || void 0 !== e.i);
};
function m(e, t) {
  d(null != e);
  if ("number" === typeof t) {
    d(Array.isArray(e), "Invalid key - child is not an array");
    (e = e.slice()).splice(t, 1);
  } else {
    d(_(e), "Invalid key - child is not an object");
    delete (e = Object.assign({}, e))[t];
  }
  return e;
}
function y(e, t, n) {
  if ("number" === typeof t) {
    d(null != e, "Container is missing for key");
    d(Array.isArray(e), "Cannot use numerical key for object container");
    d(e.length >= t, "Cannot insert into out of bounds index");
    e.splice(t, 0, n);
  } else {
    d(_(e), "Cannot insert into missing item");
    d(void 0 === e[t], "Trying to overwrite value at key. Your op needs to remove it first");
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
    return B(e, t, n, r);
  }).get();
};
var b = function (e, t, n) {
  (e = A(e))[t] = n;
  return e;
};
var w = function (e, t) {
  return null != e && ("number" === typeof t ? Array.isArray(e) : "object" === typeof e);
};
var E = function (e, t) {
  return w(e, t) ? e[t] : void 0;
};
var x = {};
function C(e) {
  var t = e.type ? e.type : e;
  if (t.name) {
    x[t.name] = t;
  }
  if (t.uri) {
    x[t.uri] = t;
  }
}
var O = function (e) {
  var t = x[e];
  if (t) {
    return t;
  }
  throw Error("Missing type: " + e);
};
C(require("./1351/index"));
var k = function (e, t) {
  return e + t;
};
C({
  name: "number",
  apply: k,
  compose: k,
  invert: function (e) {
    return -e;
  },
  transform: function (e) {
    return e;
  }
});
var S = function (e) {
  return null == e ? null : e.et ? O(e.et) : e.es ? x["text-unicode"] : null != e.ena ? x.number : null;
};
var T = function (e) {
  return e.es ? e.es : null != e.ena ? e.ena : e.e;
};
var B = function (e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  var o = "string" === typeof t ? [O(t), t] : [t, t.name];
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
function D(e) {
  d("number" === typeof e);
  d(e >= 0);
  d(e === (0 | e));
}
function I(e) {
  if ("number" === typeof e) {
    D(e);
  } else {
    d("string" === typeof e);
  }
}
function F(e) {
  if (null !== e) {
    var t = new Set();
    var n = new Set();
    var r = function (e) {
      var r = !0;
      var i = !1;
      for (var o in e) {
        var a = e[o];
        r = !1;
        d("p" === o || "r" === o || "d" === o || "i" === o || "e" === o || "es" === o || "ena" === o || "et" === o, "Invalid component item '" + o + "'");
        if ("p" === o) {
          D(a);
          d(!t.has(a));
          t.add(a);
          d(void 0 === e.r);
        } else if ("d" === o) {
          D(a);
          d(!n.has(a));
          n.add(a);
          d(void 0 === e.i);
        } else if ("e" === o || "es" === o || "ena" === o) {
          d(!i);
          i = !0;
          var s = S(e);
          d(s, "Missing type in edit");
          if (s.checkValidOp) {
            s.checkValidOp(T(e));
          }
        }
      }
      d(!r);
    };
    !function e(t, n, i) {
      if (!Array.isArray(t)) {
        throw Error("Op must be null or a list");
      }
      if (0 === t.length) {
        throw Error("Empty descent");
      }
      if (!n) {
        I(t[0]);
      }
      for (var o = 1, a = 0, s = 0, u = 0; u < t.length; u++) {
        var l = t[u];
        d(null != l);
        if (Array.isArray(l)) {
          var f = e(l, !1, i);
          if (a) {
            var h = typeof s;
            var p = typeof f;
            if (h === p) {
              d(s < f, "descent keys are not in order");
            } else {
              d("number" === h && "string" === p);
            }
          }
          s = f;
          a++;
          o = 3;
        } else if ("object" === typeof l) {
          d(1 === o, "Prev not scalar - instead ".concat(o));
          r(l);
          o = 2;
        } else {
          d(3 !== o);
          I(l);
          d(c.isValidPathItem(l), "Invalid path key");
          o = 1;
        }
      }
      d(1 !== a, "Operation makes multiple descents. Remove some []");
      d(2 === o || 3 === o);
      return t[0];
    }(e, !0, !1);
    d(t.size === n.size, "Mismatched picks and drops in op");
    for (var i = 0; i < t.size; i++) {
      d(t.has(i));
      d(n.has(i));
    }
  }
}
function R(e) {
  var t = 0;
  var n = [];
  var r = c.writeCursor();
  r.mergeTree(e, function (e, r) {
    var i;
    var o = S(e);
    if (o) {
      var a = T(e);
      B(r, o, o.normalize ? o.normalize(a) : a);
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
var P = function () {
  if (!l) {
    f.prefix++;
  }
};
var N = function () {
  if (!l) {
    f.prefix--;
  }
};
function M(e, t) {
  if (h && !l) {
    f("composing:");
    f("  op1:", e);
    f("  op2:", t);
  }
  F(e);
  F(t);
  if (null == e) {
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
  var _ = [];
  var A = [];
  var m = [];
  var y = new Set();
  var b = {};
  var w = function (e, t) {
    if (null != t) {
      if (null == b[e]) {
        b[e] = new Set();
      }
      var n = t.getPath().map(function (e, t) {
        return "".concat(t, ":").concat(e);
      }).join(".");
      if (b[e].has(n)) {
        throw Error("non-unique descent: ".concat(e, " ").concat(n));
      }
      b[e].add(n);
    }
  };
  r.traverse(null, function (e) {
    if (null != e.p) {
      u[e.p] = r.clone();
    }
  });
  i.traverse(null, function (e) {
    if (null != e.d) {
      _[e.d] = i.clone();
    }
  });
  var E = c.writeCursor();
  !function e(t, r, i, o, h, b, E, x) {
    d(r || i);
    if (!l) {
      f("xfBoundary", h, !!t && t.getPath(), !!r && r.getPath(), !!i && i.getPath(), !!o && o.getPath(), "lit:", h, "rmParent:", b);
    }
    P();
    var C = p(r);
    var O = p(i);
    var k = !!O && void 0 !== O.r;
    var D = !!C && void 0 !== C.i;
    var I = C ? C.d : null;
    var F = O ? O.p : null;
    f("pick2Slot", F, "drop1Slot", I);
    var R = (b || k) && null == F;
    if (null != F) {
      f("teleporting via c2 pick2Slot", F);
      o = _[F];
      if (!l) {
        f("r2Drop", o && o.getPath());
      }
      E = s[F] = new c.WriteCursor();
    } else if (O && void 0 !== O.r) {
      o = null;
    } else {
      var M = p(o);
      if (M && null != M.d) {
        o = null;
      }
    }
    var j;
    var L = p(o);
    if (null != I) {
      f("teleporting via c1 drop1Slot", I);
      t = u[I];
      x = a[I] = new c.WriteCursor();
      if (R) {
        f("Cancelling op1 move", I, "rmParent", b, "rmHere", k);
        if (b && !k) {
          x.write("r", !0);
        }
      } else {
        var U = A[I] = n++;
        f("assigning slot", U, "to op1 slot", I);
        E.write("d", U);
      }
    } else if (C && void 0 !== C.i) {
      t = null;
    } else {
      var H = p(t);
      if (H && null != H.p) {
        t = null;
      }
    }
    if (!l) {
      w("r1Pick", t);
      w("r1Drop", r);
      w("r2Pick", i);
      w("r2Drop", o);
    }
    if (D) {
      d(void 0 === h);
      j = C.i;
    } else {
      j = h;
    }
    if (void 0 !== j) {
      f("litOut", j);
    }
    var V = (null == F ? !D || b || k : void 0 === j) ? null : E.getComponent();
    f(V ? "insComponent" : "no insComponent - this insert will be discarded", D && !b && !k && null == F, null != F && void 0 !== j);
    if (null != F) {
      if (void 0 !== h || D) {
        ;
      } else {
        var G = null != I ? A[I] : n++;
        m[F] = G;
        f("assigning slot", G, "to op2 slot", I);
        x.write("p", G);
      }
    } else if (k) {
      if (!(D || void 0 !== h)) {
        f("keeping write here r=", O.r);
        x.write("r", O.r);
      }
    }
    var z = R ? null : S(C);
    var Q = S(L);
    f("components", C, L);
    if (z || Q) {
      f("types", z && z.name, Q && Q.name);
    }
    if (z && Q) {
      d(z === Q);
      var W = T(C);
      var K = T(L);
      var X = z.compose(W, K);
      f("compose ->", X);
      B(E, z, X);
      y.add(L);
    } else if (z) {
      f("copying edit type1", C);
      B(E, z, T(C));
    } else {
      if (Q) {
        f("copying edit type2", L);
        B(E, Q, T(L));
        y.add(L);
      }
    }
    var Y = "object" === typeof j && null != j;
    var q = !1;
    var $ = 0;
    var J = 0;
    var Z = 0;
    var ee = 0;
    var te = 0;
    var ne = c.advancer(o, function (e, t) {
      return v(t) ? ee - e - 1 : e - ee;
    }, function (e, t) {
      if (v(t)) {
        ee++;
      }
    });
    var re = c.advancer(t, function (e, t) {
      return g(t) ? $ - e - 1 : e - $;
    }, function (e, t) {
      if (g(t)) {
        $++;
      }
    });
    c.eachChildOf(r, i, function (t, n, r) {
      var i;
      var o;
      var a = t;
      var s = t;
      var c = t;
      if ("number" === typeof t) {
        var u = t + Z;
        o = ne(u);
        s = u + ee;
        var l = t + J;
        i = re(l);
        if (v(p(o))) {
          i = null;
        }
        a = l + $;
        c = t + te;
        f("p1PickOff", $, "p1DropOff", J, "p2PickOff", Z, "p2DropOff", ee, "litOff", te);
        f("inKey", t, "-> p1 mid", l, "-> p1 final", a);
        f("inKey", t, "-> p2 mid", u, "-> p2 final", s);
        d(a >= 0, "p1PickKey is negative");
        d(s >= 0, "p2DropKey is negative");
        var h = v(p(n));
        var _ = g(p(r));
        if (h || _ && !R) {
          te--;
        }
        if (h) {
          J--;
        }
        if (_) {
          Z--;
        }
      } else {
        i = re(t);
        o = ne(t);
      }
      f("->", "p1pick", a, "inkey", t, "p2drop", s, "litKey", c);
      x.descend(a);
      E.descend(s);
      var A = Y && !v(p(n)) ? j[c] : void 0;
      f("_lit", A, j, c);
      var m;
      var y;
      var b;
      var w = e(i, n, r, o, A, R, E, x);
      if (Y && !R) {
        f("_litResult", w);
        if (A !== w) {
          if (!q) {
            j = Array.isArray(j) ? j.slice() : Object.assign({}, j);
            q = !0;
          }
          m = j;
          b = w;
          if ("number" === typeof (y = c)) {
            d(Array.isArray(m));
            d(y < m.length);
          } else {
            d(!Array.isArray(m));
            d(void 0 !== m[y]);
          }
          if (void 0 === b) {
            if ("number" === typeof y) {
              m.splice(y, 1);
            } else {
              delete m[y];
            }
          } else {
            m[y] = b;
          }
          f("litOut ->", j);
        }
      } else {
        d(void 0 === w);
      }
      E.ascend();
      x.ascend();
    });
    re.end();
    ne.end();
    N();
    if (null != V) {
      V.i = j;
    } else if (!b && !k && null == F) {
      return j;
    }
  }(r, r.clone(), i, i.clone(), void 0, !1, o, E);
  o.reset();
  o.mergeTree(E.get());
  o.reset();
  f("intermediate op", o.get());
  f("heldPickWrites", a.map(function (e) {
    return e.get();
  }));
  f("heldDropWrites", s.map(function (e) {
    return e.get();
  }));
  r.traverse(o, function (e, t) {
    var n = e.p;
    if (null != n) {
      var r = A[n];
      if (null != r) {
        f("writing pick slot", r);
        t.write("p", r);
      }
      var i = a[n];
      if (i) {
        f("merge pick write", i.get());
      }
      if (i) {
        t.mergeTree(i.get());
      }
    } else if (void 0 !== e.r) {
      t.write("r", e.r);
    }
  });
  o.reset();
  f("intermediate op with picks", o.get());
  i.traverse(o, function (e, t) {
    var n = e.d;
    if (null != n) {
      var r = m[n];
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
    var o = S(e);
    if (o && !y.has(e)) {
      B(t, o, T(e));
    }
  });
  var x = o.get();
  f("-> compose returning", x);
  if (!l) {
    F(x);
  }
  return x;
}
function j(e) {
  if (null == e) {
    return null;
  }
  var t;
  var n = new c.ReadCursor(e);
  var i = new c.WriteCursor();
  var o = [];
  var a = [];
  f("inverting", e);
  (function e(n, i, a) {
    if (!l) {
      f("invertSimple", n.getPath(), a);
    }
    P();
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
      var d = S(c);
      if (d) {
        f("found edit", c, a);
        if (void 0 === a) {
          if (!t) {
            t = new Set();
          }
          t.add(c);
        } else {
          f("baking edit into subDoc", a, T(c));
          a = d.apply(a, T(c));
          u = !0;
        }
      }
    }
    var h;
    var p = 0;
    var _ = r(n);
    try {
      for (_.s(); !(h = _.n()).done;) {
        var g = h.value;
        i.descend(g);
        var m = "number" === typeof g ? g - p : g;
        var y = E(a, m);
        if (v(n.getComponent())) {
          p++;
        }
        var b = e(n, i, y);
        f("key", g, "raw", m, y, b, "subdoc", a);
        if (void 0 !== a && void 0 !== b) {
          if (!u) {
            u = !0;
            a = A(a);
          }
          if (!w(a, m)) {
            throw Error("Cannot modify child - invalid operation");
          }
          a[m] = b;
        }
        i.ascend();
      }
    } catch (x) {
      _.e(x);
    } finally {
      _.f();
    }
    N();
    if (void 0 === s) {
      return u ? a : void 0;
    }
    i.write("r", a);
  })(n, i, void 0);
  if (!l) {
    f("invert after pass 1", i.get());
  }
  if (t) {
    i.reset();
    (function e(n, i, s) {
      if (!l) {
        f("invXE", null === n || void 0 === n ? void 0 : n.getPath(), i.getPath(), s.getPath());
      }
      P();
      var u = i.getComponent();
      if (u) {
        var d = u.d;
        if (null != d) {
          f("teleporting to drop slot", d);
          n = o[d];
          s = a[d] = c.writeCursor();
        }
        if (t.has(u)) {
          var h = S(u);
          if (!h.invert) {
            throw Error("Cannot invert subtype ".concat(h.name));
          }
          if (!l) {
            f("inverting subtype", h.name, T(u));
          }
          B(s, h, h.invert(T(u)));
        }
      }
      var p;
      var _ = 0;
      var A = 0;
      var m = c.advancer(n, function (e, t) {
        return g(t) ? _ - e - 1 : e - _;
      }, function (e, t) {
        if (g(t)) {
          _++;
        }
      });
      var y = r(i);
      try {
        for (y.s(); !(p = y.n()).done;) {
          var b = p.value;
          if ("number" === typeof b) {
            var w = b - A;
            var E = m(w);
            var x = w + _;
            f("descend", b, w, x, "dropOff", A, "pickOff", _);
            s.descend(x);
            e(E, i, s);
            if (v(i.getComponent())) {
              A++;
            }
            s.ascend();
          } else {
            s.descend(b);
            e(m(b), i, s);
            s.ascend();
          }
        }
      } catch (C) {
        y.e(C);
      } finally {
        y.f();
      }
      m.end();
      N();
    })(n.clone(), n, i);
    if (a.length) {
      if (!l) {
        f("Merging held writes", a.map(function (e) {
          return e.get();
        }));
      }
      i.reset();
      n.traverse(i, function (e, t) {
        f("traverse", e);
        var n = e.p;
        if (null != n) {
          f("merging slot", n);
          var r = a[n];
          if (r) {
            f("merge", r.get());
          }
          if (r) {
            t.mergeTree(r.get());
          }
        }
      });
    }
  }
  var s = i.get();
  f("-> invert returning:", s);
  if (!l) {
    F(s);
  }
  return s;
}
function L(e, t) {
  f("makeInvertible", e, t);
  if (null == e || !function e(t, n) {
    return t.some(function (t) {
      return "object" === typeof t && (Array.isArray(t) ? e(t, n) : n(t));
    });
  }(e, function (e) {
    var t;
    return void 0 !== e.r || null != (null === (t = S(e)) || void 0 === t ? void 0 : t.makeInvertible);
  })) {
    return e;
  }
  var n = new c.ReadCursor(e);
  var i = new c.WriteCursor();
  var o = !1;
  var a = [];
  var u = [];
  (function e(t, n, i) {
    if (!l) {
      f("traversePick", t.getPath(), i);
    }
    P();
    var c = t.getComponent();
    var h = !1;
    if (c) {
      if (null != c.d) {
        n.write("d", c.d);
      }
      if (void 0 !== c.i) {
        n.write("i", c.i);
      }
      var p = c.p;
      if (null != p) {
        a[p] = t.clone();
        d(void 0 !== i, "Operation picks up at an invalid key");
        u[p] = i;
        n.write("p", c.p);
      }
      if (void 0 !== c.r && void 0 === i) {
        throw Error("Invalid doc / op in makeInvertible: removed item missing from doc");
      }
      var _ = S(c);
      if (_) {
        if (_.makeInvertible) {
          o = !0;
        } else {
          B(n, _, T(c), !0);
        }
      }
    }
    var g;
    var v = 0;
    var y = r(t);
    try {
      for (y.s(); !(g = y.n()).done;) {
        var b = g.value;
        n.descend(b);
        var w = "number" === typeof b ? b - v : b;
        var x = E(i, w);
        var C = e(t, n, x);
        if (x !== C) {
          f("childOut != childIn", x, C, b, w);
          if (!h) {
            h = !0;
            i = A(i);
          }
          if (void 0 === C) {
            i = m(i, w);
            if ("number" === typeof b) {
              v++;
            }
          } else {
            i[w] = C;
          }
          f("subDoc ->", i);
        }
        n.ascend();
      }
    } catch (O) {
      y.e(O);
    } finally {
      y.f();
    }
    if (c) {
      if (void 0 !== c.r) {
        f("write r", i);
        n.write("r", s.default(i));
        i = void 0;
      } else {
        if (null != c.p) {
          i = void 0;
        }
      }
    }
    f("tp returning", i);
    N();
    return i;
  })(n, i, t);
  f("after traversePick", i.get());
  if (o) {
    i.reset();
    (function e(t, n, i, o, s) {
      if (!l) {
        f("traverseDrop", null === t || void 0 === t ? void 0 : t.getPath(), n.getPath(), i.getPath(), o);
      }
      P();
      var d = n.getComponent();
      if (d) {
        if (void 0 !== d.i) {
          o = d.i;
          s = !0;
          f("using inserted subdoc", o);
        } else {
          if (null != d.d) {
            o = u[d.d];
            t = a[d.d];
            s = !1;
            f("teleporting to pick", d.d, o);
          }
        }
        var h = S(d);
        if (h && h.makeInvertible) {
          var p = T(d);
          f("makeInvertible on child", p, o);
          B(i, h, h.makeInvertible(p, o), !0);
        }
      }
      var _;
      var A = 0;
      var m = 0;
      var y = c.advancer(t, function (e, t) {
        return g(t) ? A - e - 1 : e - A;
      }, function (e, t) {
        if (g(t)) {
          A++;
        }
      });
      var b = r(n);
      try {
        for (b.s(); !(_ = b.n()).done;) {
          var w = _.value;
          if ("number" === typeof w) {
            var x = w - m;
            var C = y(x);
            var O = x + A;
            f("key", w, "mid", x, "raw", O, "isLiteral", s);
            var k = E(o, s ? x : O);
            i.descend(w);
            e(C, n, i, k, s);
            if (v(n.getComponent())) {
              m++;
            }
            i.ascend();
          } else {
            var D = E(o, w);
            i.descend(w);
            e(y(w), n, i, D, s);
            i.ascend();
          }
        }
      } catch (I) {
        b.e(I);
      } finally {
        b.f();
      }
      y.end();
      N();
    })(n.clone(), n, i, t, !1);
  }
  var h = i.get();
  f("-> makeInvertible returning", h);
  if (!l) {
    F(h);
  }
  return h;
}
var U = function e(t) {
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
function H(e, n, i) {
  d("left" === i || "right" === i, "Direction must be left or right");
  var o = "left" === i ? 0 : 1;
  f.quiet = !h;
  f.prefix = 0;
  if (null == n) {
    return {
      ok: !0,
      result: e
    };
  }
  if (!l && h) {
    f("transforming " + i + ":");
    f("op1", e);
    f("op2", n);
    f("repro: transform(".concat([e, n, i].map(function (e) {
      return JSON.stringify(e);
    }).join(", "), ")"));
  }
  F(e);
  F(n);
  var _ = {};
  var A = function (e, t) {
    if (null != t) {
      if (null == _[e]) {
        _[e] = new Set();
      }
      var n = t.getPath().map(function (e, t) {
        return "".concat(t, ":").concat(e);
      }).join(".");
      if (_[e].has(n)) {
        throw Error("non-unique descent: ".concat(e, " ").concat(n));
      }
      _[e].add(n);
    }
  };
  var m = null;
  var y = [];
  var b = [];
  var w = [];
  var E = [];
  var x = [];
  var C = [];
  var O = [];
  var k = [];
  var D = [];
  var I = [];
  var R = [];
  var M = [];
  var j = [];
  var L = [];
  var H = [];
  var V = 0;
  var G = c.readCursor(e);
  var z = c.readCursor(n);
  var Q = c.writeCursor();
  (function e(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    var i = arguments.length > 2 ? arguments[2] : void 0;
    if (!l) {
      f("scanOp2Pick", "r1Pick", n && n.getPath(), "r2Pick", t.getPath(), "removed1:", i && i.getPath());
    }
    P();
    var o = p(n);
    if (o) {
      if (void 0 !== o.r) {
        i = n.clone();
      } else {
        if (null != o.p) {
          i = null;
          C[o.p] = t.clone();
        }
      }
    }
    var a;
    var s = t.getComponent();
    if (s && null != (a = s.p)) {
      f("c2", s, "rm", !!i);
      x[a] = n ? n.clone() : null;
      w[a] = t.clone();
      if (i) {
        I[a] = !0;
        D[a] = i;
        f("Cancelled op2 slot", a);
      }
      if (o && null != o.p) {
        L[a] = o.p;
      }
    }
    var u;
    var d = c.advancer(n);
    var h = r(t);
    try {
      for (h.s(); !(u = h.n()).done;) {
        var _ = u.value;
        f("->", _);
        e(t, d(_), i);
      }
    } catch (A) {
      h.e(A);
    } finally {
      h.f();
    }
    d.end();
    N();
  })(z, G, null);
  if (!l) {
    f("op1PickAtOp2Pick", L);
    f("cancelledOp2", I);
    f("held op2 pick", C.map(function (e) {
      return !!e;
    }));
  }
  (function e(n, i, a, s, d) {
    if (!l) {
      f("scanOp2Drop", "r1Pick", n && n.getPath(), i && i.getPath(), "r2Drop", a.getPath(), "pickSlot1", s, "removed:", d && d.getPath());
    }
    P();
    var h;
    var _ = a.getComponent();
    var A = !1;
    if (_) {
      if (null != (h = _.d)) {
        E[h] = a.clone();
        if (null != s) {
          if (null == H[s]) {
            H[s] = [];
          }
          H[s].push(h);
        }
        f("tele r2Pick to op2 slot2", h, !!I[h]);
        n = x[h] || null;
        i = w[h] || null;
        if (I[h]) {
          if (d) {
            R[h] = !0;
          }
          d = D[h] || null;
        } else {
          if (!(!d || 1 !== o && null != L[h])) {
            f("conflicting op2 move because drop destination removed", h);
            if (!l) {
              f("path", a.getPath(), i.getPath());
            }
            if (null == m) {
              m = {
                type: u.ConflictType.RM_UNEXPECTED_CONTENT,
                op1: exports.removeOp(d.getPath()),
                op2: exports.moveOp(i.getPath(), a.getPath())
              };
            }
          }
        }
        A = !0;
      } else {
        if (void 0 !== _.i) {
          n = i = null;
          A = !0;
          if (d) {
            f("Conflicting op2 drop because op1 remove");
            if (null == m) {
              m = {
                type: u.ConflictType.RM_UNEXPECTED_CONTENT,
                op1: exports.removeOp(d.getPath()),
                op2: exports.insertOp(a.getPath(), _.i)
              };
            }
          }
        }
      }
    }
    var v = p(n);
    if (v) {
      if (void 0 !== v.r) {
        d = n.clone();
      } else {
        if (null != v.p) {
          f("Marking pickSlot1", v.p);
          s = v.p;
          d = null;
        }
      }
    }
    var y = S(_);
    if (y && d) {
      f("rm / edit conflict");
      if (null == m) {
        m = {
          type: u.ConflictType.RM_UNEXPECTED_CONTENT,
          op1: exports.removeOp(d.getPath()),
          op2: exports.editOp(a.getPath(), y, T(_), !0)
        };
      }
    }
    var b;
    var C = 0;
    var O = 0;
    var k = c.advancer(i, function (e, t) {
      return g(t) ? C - e - 1 : e - C;
    }, function (e, t) {
      if (g(t)) {
        C++;
      }
    });
    var B = c.advancer(n);
    var F = r(a);
    try {
      for (F.s(); !(b = F.n()).done;) {
        var M = b.value;
        f("key ->", M);
        if ("number" === typeof M) {
          var j = M - O;
          f("p2Mid", j);
          var U = k(j);
          var V = j + C;
          f("raw", V);
          var G = B(V);
          f("key", M, "p2DropOff", O, "p2PickOff", C);
          f("-> p2drop", M, "p2Mid", j, !!U, "raw", V, !!G);
          O += +e(G, U, a, s, d);
        } else {
          f("-> k", M);
          var z = k(M);
          e(B(M), z, a, s, d);
        }
      }
    } catch (Q) {
      F.e(Q);
    } finally {
      F.f();
    }
    k.end();
    B.end();
    N();
    return A;
  })(G, z, z.clone(), null, null);
  f("held op2 drop", E.map(function (e) {
    return e && e.get();
  }));
  if (m) {
    f("returning conflict 4", m);
    return {
      ok: !1,
      conflict: m
    };
  }
  f("discarded op2 drop", R.map(function (e) {
    return !!e;
  }));
  f("op1PicksOp2DropSlots", H);
  var W = [];
  var K = null;
  f("---- pick ----");
  (function e(t, n, i, a, s) {
    if (!l) {
      f("writeOp1Pick", "r1Pick", t.getPath(), "r2Pick", n && n.getPath(), "r2Drop", i && i.getPath(), "w", a.getPath(), "removed2", s && s.getPath());
    }
    P();
    var u = !1;
    var h = p(n);
    if (g(h)) {
      var _ = h.p;
      if (null != _) {
        if (!l) {
          f("teleporting via op2 slot2", _, "to", E[_].getPath());
        }
        i = E[_];
        a = M[_] = c.writeCursor();
        u = !0;
        s = null;
      } else {
        i = null;
        s = n.clone();
      }
    } else if (v(p(i))) {
      i = null;
    }
    if (!l) {
      A("op1pick r1Pick", t);
      A("op1pick r2Pick", n);
      A("op1pick r2Drop", i);
    }
    var m = t.getComponent();
    if (m) {
      var b = m.p;
      if (null != b) {
        if (s) {
          k[b] = s;
        }
        f("considering slot", b, "removed2", !!s, "iAmMoved", u);
        if (s || 1 === o && u) {
          f("cancelling p1 move", b);
          W[b] = null;
        } else {
          f("holding pick component");
          W[b] = a.getComponent();
        }
        y[b] = t.clone();
        if (i) {
          O[b] = i.clone();
        }
      } else {
        if (void 0 !== m.r) {
          if (!s) {
            f("copying remove");
            a.write("r", !0);
          }
          if (s || u) {
            f("Cancelling remove", m, !!s, u);
            if (null == K) {
              K = new Set();
            }
            K.add(m);
          }
        }
      }
    }
    var w = 0;
    var x = 0;
    var C = c.advancer(n, void 0, function (e, t) {
      if (g(t)) {
        w++;
        f("r2Pick++", w, e, t);
      }
    });
    var S = c.advancer(i, function (e, t) {
      return v(t) ? ~(e - x) : e - x;
    }, function (e, t) {
      if (v(t)) {
        x++;
        f("r2Drop++", x, e, t);
      }
    });
    f("children", "2p", !!n, "2d", !!i);
    if (t) {
      var T;
      var B = r(t);
      try {
        for (B.s(); !(T = B.n()).done;) {
          var D = T.value;
          f("-> k", D);
          if ("string" === typeof D) {
            var I = C(D);
            var F = S(D);
            a.descend(D);
            e(t, I, F, a, s);
            a.ascend();
          } else {
            var R = C(D);
            var j = D - w;
            var L = g(p(R)) ? null : S(j);
            var U = j + x;
            f("k" + D + " -> m" + j + " -> f" + U);
            d(U >= 0);
            a.descend(U);
            e(t, R, L, a, s);
            a.ascend();
          }
        }
      } catch (H) {
        B.e(H);
      } finally {
        B.f();
      }
    }
    C.end();
    S.end();
    N();
  })(G, z, z.clone(), Q, null);
  Q.reset();
  if (!l) {
    f("intermediate result", Q.get());
    f("held picks", y.map(function (e) {
      return e.getComponent() || !!e;
    }));
    f("held op2 drops by op1", O.map(function (e) {
      return e.getComponent() || !!e;
    }));
    f("held pick writes", M.map(function (e) {
      return e.get();
    }));
    f("pc", W);
  }
  var X = [];
  f("----- drop -----");
  (function e(n, h, _, x, D, F) {
    d(h);
    var R = h.getComponent();
    if (!l) {
      f("drop", n && n.getPath(), h.getPath(), _ && _.getPath(), x && x.getPath(), "c:", R, "r:", !!F);
    }
    P();
    var M = p(x);
    var U = !1;
    var H = function (e, n, r) {
      return e ? exports.moveOp(e.getPath(), n.getPath()) : exports.insertOp(n.getPath(), r.i);
    };
    if (v(R)) {
      var G = R.d;
      if (null != G) {
        b[G] = h.clone();
      }
      var z;
      var Q = null != G ? W[G] : null;
      var Y = !1;
      if (void 0 !== R.i || null != G && Q) {
        f("looking to write", R, M, I);
        if (M && (void 0 !== M.i || null != (z = M.d) && !I[z])) {
          if (!((Y = null != z ? null != G && G === L[z] : a.default(M.i, R.i)) || null != z && 1 !== o && null != L[z])) {
            f("Overlapping drop conflict!");
            if (null == m) {
              m = {
                type: u.ConflictType.DROP_COLLISION,
                op1: H(null != G ? y[G] : null, h, R),
                op2: H(null != z ? w[z] : null, x, M)
              };
            }
          }
        }
        f("write", "identical", Y, "removed2", !!F);
        if (!Y) {
          if (F) {
            f("Drop into remove conflict!");
            if (null == m) {
              m = {
                type: u.ConflictType.RM_UNEXPECTED_CONTENT,
                op1: H(null != G ? y[G] : null, h, R),
                op2: exports.removeOp(F.getPath())
              };
            }
          } else {
            if (null != G) {
              f("copying the drop", G, "using new slot", V);
              X[V] = G;
              D.write("d", Q.p = V++);
            } else {
              f("copying insert");
              D.write("i", s.default(R.i));
            }
            U = !0;
          }
        }
      } else if (null != G && !Q) {
        var q = k[G];
        if (q) {
          F = q.clone();
        }
      }
      if (null != G) {
        f("teleporting p1Pick and op2Pick via op1 slot", G);
        n = y[G];
        _ = C[G];
        x = O[G];
        if (!l) {
          f("p1Pick", n && n.getPath(), "p2Pick", _ && _.getPath(), "p2Drop", x && x.getPath());
        }
      } else {
        if (void 0 !== R.i) {
          n = _ = null;
          if (!Y) {
            x = null;
          }
        }
      }
    } else if (g(p(n))) {
      n = _ = x = null;
    }
    if (!l) {
      A("op1drop op2Pick", _);
      A("op1drop op1Pick", n);
      A("op1drop op1Drop", h);
    }
    var $ = p(n);
    var J = p(_);
    if (g(J)) {
      var Z = J.p;
      if (void 0 !== J.r && (!$ || void 0 === $.r) || I[Z]) {
        f("flagging remove");
        x = null;
        F = _.clone();
      } else {
        if (null != Z) {
          f("teleporting p2Drop via c2 slot2", Z);
          x = E[Z];
          if (!l) {
            f("p2Drop", x && x.getPath());
          }
          if (!(1 !== o && null != L[Z])) {
            f("teleporting write");
            if (!(D = j[Z])) {
              D = j[Z] = c.writeCursor();
            }
            D.reset();
            F = null;
          }
        }
      }
    } else if (!v(R) && v(M)) {
      x = null;
    }
    if (!l) {
      A("op1drop op2Drop", x);
    }
    M = null != x ? x.getComponent() : null;
    var ee = S(R);
    if (ee) {
      f("edit:", !!F, R, M);
      var te = T(R);
      if (F) {
        if (null == m) {
          m = {
            type: u.ConflictType.RM_UNEXPECTED_CONTENT,
            op1: exports.editOp(h.getPath(), ee, te, !0),
            op2: exports.removeOp(F.getPath())
          };
        }
      } else {
        var ne;
        var re = S(M);
        if (re) {
          if (ee !== re) {
            throw Error("Transforming incompatible types");
          }
          var ie = T(M);
          ne = ee.transform(te, ie, i);
        } else {
          ne = s.default(te);
        }
        f("write edit", ne);
        B(D, ee, ne);
      }
    }
    var oe = 0;
    var ae = 0;
    var se = 0;
    var ce = 0;
    var ue = 0;
    var le = 0;
    var fe = null != n && n.descendFirst();
    var de = fe;
    var he = c.advancer(_, void 0, function (e, t) {
      if (g(t)) {
        se++;
        f("p2Pick++", se, e, t);
      }
    });
    var pe = null != x && x.descendFirst();
    var _e = pe;
    f("children.", "1p:", !!n, "1d:", !!h, "2p:", !!_);
    var Ae;
    var ge = r(h);
    try {
      for (ge.s(); !(Ae = ge.n()).done;) {
        var ve = Ae.value;
        f("-> p1Drop looking at child", ve);
        if ("number" === typeof ve) {
          var me = void 0;
          f("p1DropEachChild k:", ve, "p1d:", ae, "p1p:", oe, "raw: -", "p2p:", se, "p2d:", ce, "op:", ue, "od:", le);
          var ye = v(h.getComponent());
          var be = ve - ae;
          var we = void 0;
          for (f("Looking for p2 Pick at k1Mid", be), P(); fe && "number" === typeof (we = n.getKey());) {
            we += oe;
            var Ee = n.getComponent();
            var xe = g(Ee);
            f("p1k", we, "k1mid", be, "hp", xe);
            if (we > be || we === be && (!xe || 0 === o && ye)) {
              break;
            }
            if (xe) {
              f("p1PickOff--");
              oe--;
              var Ce = Ee.p;
              f("considering outPickOff--", Ee, K, W[Ce], L.includes(Ce));
              f(null != Ee.d, p(j[Ee.d]), g(p(j[Ee.d])));
              if (!((void 0 === Ee.r || K && K.has(Ee)) && (null == Ce || !W[Ce] || 1 !== o && L.includes(Ce)))) {
                f("outPickOff-- from pickup");
                ue--;
              }
            }
            fe = n.nextSibling();
          }
          me = fe && we === be ? n : null;
          N();
          f("_p1Pick", !!me);
          var Oe = be - oe;
          f("ap2p", Oe);
          var ke = he(Oe);
          f("_p2Pick", !!ke, "p2PickOff", se);
          var Se = Oe - se;
          var Te = null;
          var Be = void 0;
          var De = void 0;
          for (f("Looking for p2 Drop at p2mid", Se), P(); pe && "number" === typeof (Be = x.getKey());) {
            De = Be - ce;
            var Ie = x.getComponent();
            var Fe = v(Ie);
            f("p2d looking at child", Be, Ie, "at op2mid", De, "target", Se, "  / raw", Oe, ce, Fe, ye);
            if (De > Se) {
              break;
            }
            if (De === Se) {
              if (!Fe) {
                Te = x;
                break;
              }
              if (0 === o && ye) {
                Te = x;
                break;
              }
              var Re = ke && g(ke.getComponent());
              if (0 === o && Re) {
                break;
              }
            }
            if (Fe) {
              var Pe = Ie.d;
              f("considering p2Drop", Ie, Pe, I[Pe], L[Pe]);
              if (void 0 === Ie.i && (I[Pe] || null != L[Pe] && 1 !== o)) {
                if (I[Pe] || null != L[Pe] && 0 === o) {
                  f("skipped because the drop was cancelled");
                  ce++;
                  le--;
                }
              } else {
                f("p2DropOff++ from drop");
                ce++;
              }
            }
            pe = x.nextSibling();
          }
          N();
          f("_p2Drop", !!Te);
          var Ne = Se + ce;
          f("->DropEachChild k:", ve, "p1d:", ae, "p1p:", oe, "raw:", Oe, "p2p:", se, "p2d:", ce, "op:", ue, "od:", le);
          var Me = Ne + ue + le;
          f("k: " + ve + " -> mid " + be + " -> raw " + Oe + " -> k2Mid " + Se + " -> k2Final " + Ne + " -> descend " + Me);
          d(Me >= 0, "trying to descend to a negative index");
          D.descend(Me);
          if (ye) {
            me = ke = Te = null;
            f("omg p1dropoff", ae);
            ae++;
          }
          if (e(me, h, ke, Te, D, F)) {
            le++;
          }
          D.ascend();
        } else {
          for (var je = void 0; fe && ("string" !== typeof (je = n.getKey()) || !(je > ve || je === ve));) {
            fe = n.nextSibling();
          }
          for (var Le = fe && je === ve ? n : null, Ue = he(ve), He = void 0; pe && ("string" !== typeof (He = x.getKey()) || !(He > ve || He === ve));) {
            pe = x.nextSibling();
          }
          var Ve = pe && He === ve ? x : null;
          D.descend(ve);
          e(Le, h, Ue, Ve, D, F);
          D.ascend();
        }
      }
    } catch (Ge) {
      ge.e(Ge);
    } finally {
      ge.f();
    }
    he.end();
    if (de) {
      n.ascend();
    }
    if (_e) {
      x.ascend();
    }
    N();
    return U;
  })(G, G.clone(), z, z.clone(), Q, null);
  if (m) {
    f("returning conflict 3", m);
    return {
      ok: !1,
      conflict: m
    };
  }
  Q.reset();
  if (!l) {
    f("output slot map", X);
    f("merging picks into partial output", Q.get());
    f("held pick writes", M.map(function (e) {
      return e.get();
    }));
  }
  var Y = function (e, t, n) {
    return e.traverse(t, function (t, r) {
      if (null != t.d) {
        n(t.d, e, r);
      }
    });
  };
  if (I.length || M.length) {
    f("merging");
    Y(z, Q, function (e, t, n) {
      if (I[e] && !R[e]) {
        f("removing at held drop2", e);
        n.write("r", !0);
      }
      if (M[e]) {
        n.mergeTree(M[e].get());
      }
    });
    Q.reset();
    if (!l) {
      f("after merge", Q.get());
    }
  }
  var q = [];
  var $ = [];
  if ((j.length || I.length) && !m) {
    f("------ write held picks and drops -----");
    if (!l) {
      f("held drop writes", j.map(function (e) {
        return e.get();
      }));
    }
    var J = c.readCursor(U(Q.get()));
    Y(J, null, function (e, t) {
      q[e] = t.clone();
    });
    j.forEach(function (e) {
      if (e) {
        Y(c.readCursor(e.get()), null, function (e, t) {
          q[e] = t.clone();
        });
      }
    });
    if (!l) {
      f("merging writes into", J.get());
      f("heldOutDropRead", q.map(function (e) {
        return e && e.getPath();
      }));
    }
    (function e(t, n, i, o, a, s) {
      if (!l) {
        f("writeHeldOp2Drop", "p2Drop", t.getPath(), "outPick", n && n.getPath(), "outDrop", i && i.getPath(), "pc", a, "rm out", s);
      }
      f.prefix++;
      var u = p(n);
      if (u && g(u)) {
        if (null != u.p) {
          a = u;
          var d = u.p;
          f("teleporting writes to output slot", d, q[d].getPath());
          i = q[d];
          o = $[d] = c.writeCursor();
        } else if (void 0 !== u.r) {
          i = null;
          s = !0;
        }
        f("coutp", u);
      } else if (v(p(i))) {
        i = null;
      }
      var h;
      var _ = t.getComponent();
      if (_ && null != (h = _.d)) {
        f("c2 drop slot", h);
        var m = j[h];
        if (m) {
          f("merge tree", m.get());
          o.mergeTree(m.get());
          i = c.readCursor(m.get());
        }
      }
      if (!l) {
        A("outDrop p2Drop", t);
        A("outDrop outPick", n);
      }
      var y;
      var b = 0;
      var w = 0;
      var E = c.advancer(n, void 0, function (e, t) {
        if (g(t)) {
          b--;
          f("outPickOff++");
        }
      });
      var x = c.advancer(i, function (e, t) {
        return v(t) ? -(e - w) - 1 : e - w;
      }, function (e, t) {
        if (v(t)) {
          w++;
          f("outDropOff++");
        }
      });
      var C = r(t);
      try {
        for (C.s(); !(y = C.n()).done;) {
          var O = y.value;
          if ("number" === typeof O) {
            var k = E(O);
            var S = O + b;
            var T = x(S);
            var B = S + w;
            f("->", O, "outPickOff", b, "-> rmid", S, "dropOff", w, "final", B);
            o.descend(B);
            e(t, k, T, o, a, s);
            o.ascend();
          } else {
            f("->", O);
            o.descend(O);
            e(t, E(O), x(O), o, a, s);
            o.ascend();
          }
        }
      } catch (D) {
        C.e(D);
      } finally {
        C.f();
      }
      N();
      E.end();
      x.end();
    })(z, J, J.clone(), Q, null, !1);
    Q.reset();
    if (m) {
      f("-> xf returning conflict 2", m);
      return {
        ok: !1,
        conflict: m
      };
    }
    f("-- after writeHeldOp2Drop", Q.get());
    if (!l) {
      f("held output writes", $.map(function (e) {
        return e.get();
      }));
    }
    if ($.length) {
      var Z = $.map(function (e) {
        return e ? e.get() : null;
      });
      var ee = c.readCursor(U(Q.get()));
      Y(ee, Q, function (e, t, n) {
        var r = Z[e];
        if (r) {
          n.mergeTree(r);
          Z[e] = null;
        }
      });
      if (Z.find(function (e) {
        return e;
      })) {
        f("BLACKHOLE");
        var te = c.writeCursor();
        var ne = c.writeCursor();
        var re = 0;
        var ie = 0;
        Z.forEach(function (e, t) {
          if (null != e) {
            Y(c.readCursor(e), null, function (e) {
              var t = X[e];
              te.writeMove(y[t].getPath(), b[t].getPath(), re++);
              f("blackhole slot1", t);
              var n = H[t];
              if (n) {
                n.forEach(function (e) {
                  if (!(I[e] || 1 !== o && null != L[e])) {
                    ne.writeMove(w[e].getPath(), E[e].getPath(), ie++);
                  }
                });
              }
            });
          }
        });
        m = {
          type: u.ConflictType.BLACKHOLE,
          op1: te.get(),
          op2: ne.get()
        };
      }
    }
  }
  if (m) {
    f("-> xf returning conflict 5", m);
    f();
    return {
      ok: !1,
      conflict: m
    };
  }
  var oe = Q.get();
  f("-> xf returning", oe);
  f();
  if (!l) {
    F(oe);
  }
  return {
    ok: !0,
    result: oe
  };
}
var V = function (e) {
  var t = new Error("Transform detected write conflict");
  throw t.conflict = e, t.type = t.name = "writeConflict", t;
};
var G = function (e) {
  var t = c.writeCursor();
  c.readCursor(e).traverse(t, function (e, t) {
    if (v(e) || S(e)) {
      t.write("r", !0);
    }
  });
  return t.get();
};
var z = function (e, t) {
  var n = e.type;
  var r = e.op1;
  var i = e.op2;
  switch (f("resolving conflict of type", n), n) {
    case u.ConflictType.DROP_COLLISION:
      return "left" === t ? [null, G(i)] : [G(r), null];
    case u.ConflictType.RM_UNEXPECTED_CONTENT:
      var o = !1;
      c.readCursor(r).traverse(null, function (e) {
        if (void 0 !== e.r) {
          o = !0;
        }
      });
      return o ? [null, G(i)] : [G(r), null];
    case u.ConflictType.BLACKHOLE:
      return [G(r), G(i)];
    default:
      throw Error("Unrecognised conflict: " + n);
  }
};
var Q = function (e) {
  var t = e.type;
  var n = e.op1;
  return {
    type: t,
    op1: e.op2,
    op2: n
  };
};
var W = function (e) {
  var t = e.type;
  var n = e.op1;
  var r = e.op2;
  return {
    type: t,
    op1: R(n),
    op2: R(r)
  };
};
function K(e, t, n, r) {
  for (var o = null;;) {
    var s = H(t, n, r);
    if (s.ok) {
      return M(o, s.result);
    }
    var c = s.conflict;
    f("detected conflict", c);
    if (!e(c)) {
      V(c);
    }
    if (!l && c.type === u.ConflictType.BLACKHOLE) {
      var h = H(n, t, "left" === r ? "right" : "left");
      d(!h.ok);
      try {
        d(a.default(W(h.conflict), W(Q(c))));
      } catch (v) {
        throw f.debug = !0, f("Inverted transform conflict", t, n, c, h.conflict), v;
      }
    }
    var p = z(c, r);
    var _ = i(p, 2);
    var A = _[0];
    var g = _[1];
    f("Resolve ops", A, g);
    t = M(R(t), A);
    n = M(R(n), g);
    o = M(o, g);
    f("recover from conflict", c);
    f("op1 ->", t);
    f("op2 ->", n);
  }
}