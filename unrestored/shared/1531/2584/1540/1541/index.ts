"use strict";

var r = require("../1633/86/index");
var o = require("../1745/194");
var i = require("../1253/472");
var a = require("./530");
var s = require("../1745/272");
var c = require("./1054");
var l = require("../1633/167");
var u = require("../1745/332");
var d = require("./819");
var p = require("../1633/231");
var f = require("./749");
var h = require("../1666/241");
var m = require("../1731/309");
var g = require("../936/437");
var _ = require("./628");
var v = require("../1745/310");
var b = require("../1253/627");
var y = require("../1253/575");
var E = require("./820/index");
var O = require("./631");
var w = require("./1062");
var C = require("./1061");
var T = require("./386/index");
var S = require("./300");
var I = require("./931");
var A = require("../1742/422");
var j = require("../1745/398");
var N = require("./932");
var R = require("./933");
var k = require("./816");
var x = require("./815");
var D = require("../1742/247/index");
var M = require("./1214");
var L = require("./438/index");
var P = require("../1745/531");
var B = require("../1745/423/index");
var F = require("../1714/399").forEach;
var G = R("hidden");
var U = D("toPrimitive");
var W = B.set;
var H = B.getterFor("Symbol");
var V = Object.prototype;
var z = o.Symbol;
var Y = i("JSON", "stringify");
var K = T.f;
var q = S.f;
var X = w.f;
var Q = I.f;
var Z = N("symbols");
var J = N("op-symbols");
var $ = N("string-to-symbol-registry");
var ee = N("symbol-to-string-registry");
var te = N("wks");
var ne = o.QObject;
var re = !ne || !ne.prototype || !ne.prototype.findChild;
var oe = s && l(function () {
  return 7 != y(q({}, "a", {
    get: function () {
      return q(this, "a", {
        value: 7
      }).a;
    }
  })).a;
}) ? function (e, t, n) {
  var r = K(V, t);
  if (r) {
    delete V[t];
  }
  q(e, t, n);
  if (r && e !== V) {
    q(V, t, r);
  }
} : q;
var ie = function (e, t) {
  var n = Z[e] = y(z.prototype);
  W(n, {
    type: "Symbol",
    tag: e,
    description: t
  });
  if (!s) {
    n.description = t;
  }
  return n;
};
var ae = function (e, t, n) {
  if (e === V) {
    ae(J, t, n);
  }
  h(e);
  var r = _(t);
  h(n);
  return u(Z, r) ? (n.enumerable ? (u(e, G) && e[G][r] && (e[G][r] = !1), n = y(n, {
    enumerable: b(0, !1)
  })) : (u(e, G) || q(e, G, b(1, {})), e[G][r] = !0), oe(e, r, n)) : q(e, r, n);
};
var se = function (e, t) {
  h(e);
  var n = g(t);
  var r = E(n).concat(de(n));
  F(r, function (t) {
    if (!(s && !ce.call(n, t))) {
      ae(e, t, n[t]);
    }
  });
  return e;
};
var ce = function (e) {
  var t = _(e);
  var n = Q.call(this, t);
  return !(this === V && u(Z, t) && !u(J, t)) && (!(n || !u(this, t) || !u(Z, t) || u(this, G) && this[G][t]) || n);
};
var le = function (e, t) {
  var n = g(e);
  var r = _(t);
  if (n !== V || !u(Z, r) || u(J, r)) {
    var o = K(n, r);
    if (!(!o || !u(Z, r) || u(n, G) && n[G][r])) {
      o.enumerable = !0;
    }
    return o;
  }
};
var ue = function (e) {
  var t = X(g(e));
  var n = [];
  F(t, function (e) {
    if (!(u(Z, e) || u(k, e))) {
      n.push(e);
    }
  });
  return n;
};
var de = function (e) {
  var t = e === V;
  var n = X(t ? J : g(e));
  var r = [];
  F(n, function (e) {
    if (!(!u(Z, e) || t && !u(V, e))) {
      r.push(Z[e]);
    }
  });
  return r;
};
if (c || (j((z = function () {
  if (this instanceof z) {
    throw TypeError("Symbol is not a constructor");
  }
  var e = arguments.length && void 0 !== arguments[0] ? v(arguments[0]) : void 0;
  var t = x(e);
  var n = function e(n) {
    if (this === V) {
      e.call(J, n);
    }
    if (u(this, G) && u(this[G], t)) {
      this[G][t] = !1;
    }
    oe(this, t, b(1, n));
  };
  if (s && re) {
    oe(V, t, {
      configurable: !0,
      set: n
    });
  }
  return ie(t, e);
}).prototype, "toString", function () {
  return H(this).tag;
}), j(z, "withoutSetter", function (e) {
  return ie(x(e), e);
}), I.f = ce, S.f = ae, T.f = le, O.f = w.f = ue, C.f = de, M.f = function (e) {
  return ie(D(e), e);
}, s && (q(z.prototype, "description", {
  configurable: !0,
  get: function () {
    return H(this).description;
  }
}), a || j(V, "propertyIsEnumerable", ce, {
  unsafe: !0
}))), r({
  global: !0,
  wrap: !0,
  forced: !c,
  sham: !c
}, {
  Symbol: z
}), F(E(te), function (e) {
  L(e);
}), r({
  target: "Symbol",
  stat: !0,
  forced: !c
}, {
  for: function (e) {
    var t = v(e);
    if (u($, t)) {
      return $[t];
    }
    var n = z(t);
    $[t] = n;
    ee[n] = t;
    return n;
  },
  keyFor: function (e) {
    if (!f(e)) {
      throw TypeError(e + " is not a symbol");
    }
    if (u(ee, e)) {
      return ee[e];
    }
  },
  useSetter: function () {
    re = !0;
  },
  useSimple: function () {
    re = !1;
  }
}), r({
  target: "Object",
  stat: !0,
  forced: !c,
  sham: !s
}, {
  create: function (e, t) {
    return void 0 === t ? y(e) : se(y(e), t);
  },
  defineProperty: ae,
  defineProperties: se,
  getOwnPropertyDescriptor: le
}), r({
  target: "Object",
  stat: !0,
  forced: !c
}, {
  getOwnPropertyNames: ue,
  getOwnPropertySymbols: de
}), r({
  target: "Object",
  stat: !0,
  forced: l(function () {
    C.f(1);
  })
}, {
  getOwnPropertySymbols: function (e) {
    return C.f(m(e));
  }
}), Y) {
  r({
    target: "JSON",
    stat: !0,
    forced: !c || l(function () {
      var e = z();
      return "[null]" != Y([e]) || "{}" != Y({
        a: e
      }) || "{}" != Y(Object(e));
    })
  }, {
    stringify: function (e, t, n) {
      for (var r, o = [e], i = 1; arguments.length > i;) {
        o.push(arguments[i++]);
      }
      if (r = t, (p(t) || void 0 !== e) && !f(e)) {
        if (!d(t)) {
          t = function (e, t) {
            if ("function" == typeof r && (t = r.call(this, e, t)), !f(t)) {
              return t;
            }
          };
        }
        o[1] = t;
        return Y.apply(null, o);
      }
    }
  });
}
if (!z.prototype[U]) {
  A(z.prototype, U, z.prototype.valueOf);
}
P(z, "Symbol");
k[G] = !0;