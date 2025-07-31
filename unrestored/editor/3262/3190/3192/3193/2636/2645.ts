"use strict";

var r = require("../../../494");
var a = require("../../../../2873/2721/805/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.VISITOR_KEYS = exports.NODE_PARENT_VALIDATIONS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.ALIAS_KEYS = void 0;
exports.arrayOf = S;
exports.arrayOfType = E;
exports.assertEach = b;
exports.assertNodeOrValueType = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  function a(e, n, a) {
    var s;
    var u = r(t);
    try {
      for (u.s(); !(s = u.n()).done;) {
        var l = s.value;
        if (y(a) === l || (0, i.default)(l, a)) {
          return void (0, o.validateChild)(e, n, a);
        }
      }
    } catch (p) {
      u.e(p);
    } finally {
      u.f();
    }
    throw new TypeError("Property ".concat(n, " of ").concat(e.type, " expected node to be of a type ").concat(JSON.stringify(t), " but instead got ").concat(JSON.stringify(null == a ? void 0 : a.type)));
  }
  a.oneOfNodeOrValueTypes = t;
  return a;
};
exports.assertNodeType = v;
exports.assertOneOf = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  function r(e, n, r) {
    if (t.indexOf(r) < 0) {
      throw new TypeError("Property ".concat(n, " expected value to be one of ").concat(JSON.stringify(t), " but got ").concat(JSON.stringify(r)));
    }
  }
  r.oneOf = t;
  return r;
};
exports.assertOptionalChainStart = function () {
  return function (e) {
    for (var t, n = e; e;) {
      var r = n.type;
      if ("OptionalCallExpression" !== r) {
        if ("OptionalMemberExpression" !== r) {
          break;
        }
        if (n.optional) {
          return;
        }
        n = n.object;
      } else {
        if (n.optional) {
          return;
        }
        n = n.callee;
      }
    }
    throw new TypeError("Non-optional ".concat(e.type, " must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ").concat(null == (t = n) ? void 0 : t.type));
  };
};
exports.assertShape = function (e) {
  function t(t, n, r) {
    for (var a = [], i = 0, s = Object.keys(e); i < s.length; i++) {
      var u = s[i];
      try {
        (0, o.validateField)(t, u, r[u], e[u]);
      } catch (l) {
        if (l instanceof TypeError) {
          a.push(l.message);
          continue;
        }
        throw l;
      }
    }
    if (a.length) {
      throw new TypeError("Property ".concat(n, " of ").concat(t.type, " expected to have the following:\n").concat(a.join("\n")));
    }
  }
  t.shapeOf = e;
  return t;
};
exports.assertValueType = P;
exports.chain = O;
exports.default = x;
exports.defineAliasedType = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return function (e) {
    var n;
    var r;
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var o = i.aliases;
    if (!o) {
      if (i.inherits) {
        o = null == (r = D[i.inherits].aliases) ? void 0 : r.slice();
      }
      if (!(null != o)) {
        o = [];
      }
      i.aliases = o;
    }
    var s = t.filter(function (e) {
      return !o.includes(e);
    });
    (n = o).unshift.apply(n, a(s));
    return x(e, i);
  };
};
exports.typeIs = m;
exports.validate = T;
exports.validateArrayOfType = function (e) {
  return T(E(e));
};
exports.validateOptional = function (e) {
  return {
    validate: e,
    optional: !0
  };
};
exports.validateOptionalType = function (e) {
  return {
    validate: m(e),
    optional: !0
  };
};
exports.validateType = function (e) {
  return T(m(e));
};
var i = require("../2670");
var o = require("../2716");
var s = {};
exports.VISITOR_KEYS = s;
var u = {};
exports.ALIAS_KEYS = u;
var l = {};
exports.FLIPPED_ALIAS_KEYS = l;
var p = {};
exports.NODE_FIELDS = p;
var f = {};
exports.BUILDER_KEYS = f;
var d = {};
exports.DEPRECATED_KEYS = d;
var c = {};
function y(e) {
  return Array.isArray(e) ? "array" : null === e ? "null" : typeof e;
}
function T(e) {
  return {
    validate: e
  };
}
function m(e) {
  return "string" === typeof e ? v(e) : v.apply(void 0, a(e));
}
function S(e) {
  return O(P("array"), b(e));
}
function E(e) {
  return S(m(e));
}
function b(e) {
  function t(t, n, r) {
    if (Array.isArray(r)) {
      for (var a = 0; a < r.length; a++) {
        var i = "".concat(n, "[").concat(a, "]");
        var s = r[a];
        e(t, i, s);
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING) {
          (0, o.validateChild)(t, i, s);
        }
      }
    }
  }
  t.each = e;
  return t;
}
function v() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  function a(e, n, a) {
    var s;
    var u = r(t);
    try {
      for (u.s(); !(s = u.n()).done;) {
        var l = s.value;
        if ((0, i.default)(l, a)) {
          return void (0, o.validateChild)(e, n, a);
        }
      }
    } catch (p) {
      u.e(p);
    } finally {
      u.f();
    }
    throw new TypeError("Property ".concat(n, " of ").concat(e.type, " expected node to be of a type ").concat(JSON.stringify(t), " but instead got ").concat(JSON.stringify(null == a ? void 0 : a.type)));
  }
  a.oneOfNodeTypes = t;
  return a;
}
function P(e) {
  function t(t, n, r) {
    if (!(y(r) === e)) {
      throw new TypeError("Property ".concat(n, " expected type of ").concat(e, " but got ").concat(y(r)));
    }
  }
  t.type = e;
  return t;
}
function O() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  function a() {
    var e;
    var n = r(t);
    try {
      for (n.s(); !(e = n.n()).done;) {
        var a = e.value;
        a.apply(void 0, arguments);
      }
    } catch (i) {
      n.e(i);
    } finally {
      n.f();
    }
  }
  if (a.chainOf = t, t.length >= 2 && "type" in t[0] && "array" === t[0].type && !("each" in t[1])) {
    throw new Error('An assertValueType("array") validator can only be followed by an assertEach(...) validator.');
  }
  return a;
}
exports.NODE_PARENT_VALIDATIONS = c;
var A = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"];
var g = ["default", "optional", "validate"];
function x(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var n = t.inherits && D[t.inherits] || {};
  var a = t.fields;
  if (!a && (a = {}, n.fields)) {
    var i;
    var o = Object.getOwnPropertyNames(n.fields);
    var T = r(o);
    try {
      for (T.s(); !(i = T.n()).done;) {
        var m = i.value;
        var S = n.fields[m];
        var E = S.default;
        if (Array.isArray(E) ? E.length > 0 : E && "object" === typeof E) {
          throw new Error("field defaults can only be primitives or empty arrays currently");
        }
        a[m] = {
          default: Array.isArray(E) ? [] : E,
          optional: S.optional,
          validate: S.validate
        };
      }
    } catch (K) {
      T.e(K);
    } finally {
      T.f();
    }
  }
  for (var b = t.visitor || n.visitor || [], v = t.aliases || n.aliases || [], O = t.builder || n.builder || t.visitor || [], x = 0, I = Object.keys(t); x < I.length; x++) {
    var _ = I[x];
    if (-1 === A.indexOf(_)) {
      throw new Error('Unknown type option "'.concat(_, '" on ').concat(e));
    }
  }
  if (t.deprecatedAlias) {
    d[t.deprecatedAlias] = e;
  }
  var h;
  var N = r(b.concat(O));
  try {
    for (N.s(); !(h = N.n()).done;) {
      var j = h.value;
      a[j] = a[j] || {};
    }
  } catch (K) {
    N.e(K);
  } finally {
    N.f();
  }
  for (var L = 0, C = Object.keys(a); L < C.length; L++) {
    var B = C[L];
    var w = a[B];
    if (void 0 !== w.default && -1 === O.indexOf(B)) {
      w.optional = !0;
    }
    if (void 0 === w.default) {
      w.default = null;
    } else {
      if (!(w.validate || null == w.default)) {
        w.validate = P(y(w.default));
      }
    }
    for (var M = 0, F = Object.keys(w); M < F.length; M++) {
      var R = F[M];
      if (-1 === g.indexOf(R)) {
        throw new Error('Unknown field key "'.concat(R, '" on ').concat(e, ".").concat(B));
      }
    }
  }
  s[e] = t.visitor = b;
  f[e] = t.builder = O;
  p[e] = t.fields = a;
  u[e] = t.aliases = v;
  v.forEach(function (t) {
    l[t] = l[t] || [];
    l[t].push(e);
  });
  if (t.validate) {
    c[e] = t.validate;
  }
  D[e] = t;
}
var D = {};