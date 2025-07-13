"use strict";

import * as r from "../1626/86/index";
import * as o from "../1738/194";
import * as i from "../1250/472";
import * as a from "./530";
import * as s from "../1738/272";
import * as c from "./1053";
import * as l from "../1626/167";
import * as u from "../1738/332";
import * as d from "./818";
import * as p from "../1626/231";
import * as f from "./749";
import * as h from "../1659/241";
import * as m from "../1623/309";
import * as g from "../935/437";
import * as _ from "./628";
import * as v from "../1738/310";
import * as b from "../1250/627";
import * as y from "../1250/575";
import * as E from "./819/index";
import * as O from "./631";
import * as w from "./1061";
import * as C from "./1060";
import * as T from "./386";
import * as S from "./300/index";
import * as I from "./930";
import * as A from "../1735/422";
import * as j from "../1738/398";
import * as N from "./931";
import * as R from "./932";
import * as k from "./815";
import * as x from "./814";
import * as D from "../1735/247/index";
import * as M from "./1211";
import * as L from "./438/index";
import * as P from "../1738/531";
import * as B from "../1738/423/index";
var F = require("../1707/399").forEach;
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