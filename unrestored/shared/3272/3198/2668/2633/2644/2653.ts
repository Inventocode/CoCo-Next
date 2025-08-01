"use strict";

var r = require("../../../../3200/494");
var i = require("../../../../2883/2731/806/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.VISITOR_KEYS = exports.NODE_PARENT_VALIDATIONS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.ALIAS_KEYS = void 0;
exports.arrayOf = v;
exports.arrayOfType = g;
exports.assertEach = T;
exports.assertNodeOrValueType = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  function i(e, n, i) {
    var o;
    var l = r(t);
    try {
      for (l.s(); !(o = l.n()).done;) {
        var u = o.value;
        if (h(i) === u || (0, a.default)(u, i)) {
          return void (0, s.validateChild)(e, n, i);
        }
      }
    } catch (c) {
      l.e(c);
    } finally {
      l.f();
    }
    throw new TypeError("Property ".concat(n, " of ").concat(e.type, " expected node to be of a type ").concat(JSON.stringify(t), " but instead got ").concat(JSON.stringify(null == i ? void 0 : i.type)));
  }
  i.oneOfNodeOrValueTypes = t;
  return i;
};
exports.assertNodeType = b;
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
    for (var i = [], a = 0, o = Object.keys(e); a < o.length; a++) {
      var l = o[a];
      try {
        (0, s.validateField)(t, l, r[l], e[l]);
      } catch (u) {
        if (u instanceof TypeError) {
          i.push(u.message);
          continue;
        }
        throw u;
      }
    }
    if (i.length) {
      throw new TypeError("Property ".concat(n, " of ").concat(t.type, " expected to have the following:\n").concat(i.join("\n")));
    }
  }
  t.shapeOf = e;
  return t;
};
exports.assertValueType = S;
exports.chain = E;
exports.default = A;
exports.defineAliasedType = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return function (e) {
    var n;
    var r;
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var s = a.aliases;
    if (!s) {
      if (a.inherits) {
        s = null == (r = k[a.inherits].aliases) ? void 0 : r.slice();
      }
      if (!(null != s)) {
        s = [];
      }
      a.aliases = s;
    }
    var o = t.filter(function (e) {
      return !s.includes(e);
    });
    (n = s).unshift.apply(n, i(o));
    return A(e, a);
  };
};
exports.typeIs = m;
exports.validate = y;
exports.validateArrayOfType = function (e) {
  return y(g(e));
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
  return y(m(e));
};
var a = require("../2673");
var s = require("../2710");
var o = {};
exports.VISITOR_KEYS = o;
var l = {};
exports.ALIAS_KEYS = l;
var u = {};
exports.FLIPPED_ALIAS_KEYS = u;
var c = {};
exports.NODE_FIELDS = c;
var p = {};
exports.BUILDER_KEYS = p;
var f = {};
exports.DEPRECATED_KEYS = f;
var d = {};
function h(e) {
  return Array.isArray(e) ? "array" : null === e ? "null" : typeof e;
}
function y(e) {
  return {
    validate: e
  };
}
function m(e) {
  return "string" === typeof e ? b(e) : b.apply(void 0, i(e));
}
function v(e) {
  return E(S("array"), T(e));
}
function g(e) {
  return v(m(e));
}
function T(e) {
  function t(t, n, r) {
    if (Array.isArray(r)) {
      for (var i = 0; i < r.length; i++) {
        var a = "".concat(n, "[").concat(i, "]");
        var o = r[i];
        e(t, a, o);
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING) {
          (0, s.validateChild)(t, a, o);
        }
      }
    }
  }
  t.each = e;
  return t;
}
function b() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  function i(e, n, i) {
    var o;
    var l = r(t);
    try {
      for (l.s(); !(o = l.n()).done;) {
        var u = o.value;
        if ((0, a.default)(u, i)) {
          return void (0, s.validateChild)(e, n, i);
        }
      }
    } catch (c) {
      l.e(c);
    } finally {
      l.f();
    }
    throw new TypeError("Property ".concat(n, " of ").concat(e.type, " expected node to be of a type ").concat(JSON.stringify(t), " but instead got ").concat(JSON.stringify(null == i ? void 0 : i.type)));
  }
  i.oneOfNodeTypes = t;
  return i;
}
function S(e) {
  function t(t, n, r) {
    if (!(h(r) === e)) {
      throw new TypeError("Property ".concat(n, " expected type of ").concat(e, " but got ").concat(h(r)));
    }
  }
  t.type = e;
  return t;
}
function E() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  function i() {
    var e;
    var n = r(t);
    try {
      for (n.s(); !(e = n.n()).done;) {
        var i = e.value;
        i.apply(void 0, arguments);
      }
    } catch (a) {
      n.e(a);
    } finally {
      n.f();
    }
  }
  if (i.chainOf = t, t.length >= 2 && "type" in t[0] && "array" === t[0].type && !("each" in t[1])) {
    throw new Error('An assertValueType("array") validator can only be followed by an assertEach(...) validator.');
  }
  return i;
}
exports.NODE_PARENT_VALIDATIONS = d;
var x = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"];
var P = ["default", "optional", "validate"];
function A(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var n = t.inherits && k[t.inherits] || {};
  var i = t.fields;
  if (!i && (i = {}, n.fields)) {
    var a;
    var s = Object.getOwnPropertyNames(n.fields);
    var y = r(s);
    try {
      for (y.s(); !(a = y.n()).done;) {
        var m = a.value;
        var v = n.fields[m];
        var g = v.default;
        if (Array.isArray(g) ? g.length > 0 : g && "object" === typeof g) {
          throw new Error("field defaults can only be primitives or empty arrays currently");
        }
        i[m] = {
          default: Array.isArray(g) ? [] : g,
          optional: v.optional,
          validate: v.validate
        };
      }
    } catch (R) {
      y.e(R);
    } finally {
      y.f();
    }
  }
  for (var T = t.visitor || n.visitor || [], b = t.aliases || n.aliases || [], E = t.builder || n.builder || t.visitor || [], A = 0, w = Object.keys(t); A < w.length; A++) {
    var O = w[A];
    if (-1 === x.indexOf(O)) {
      throw new Error('Unknown type option "'.concat(O, '" on ').concat(e));
    }
  }
  if (t.deprecatedAlias) {
    f[t.deprecatedAlias] = e;
  }
  var C;
  var I = r(T.concat(E));
  try {
    for (I.s(); !(C = I.n()).done;) {
      var N = C.value;
      i[N] = i[N] || {};
    }
  } catch (R) {
    I.e(R);
  } finally {
    I.f();
  }
  for (var _ = 0, D = Object.keys(i); _ < D.length; _++) {
    var j = D[_];
    var L = i[j];
    if (void 0 !== L.default && -1 === E.indexOf(j)) {
      L.optional = !0;
    }
    if (void 0 === L.default) {
      L.default = null;
    } else {
      if (!(L.validate || null == L.default)) {
        L.validate = S(h(L.default));
      }
    }
    for (var M = 0, B = Object.keys(L); M < B.length; M++) {
      var F = B[M];
      if (-1 === P.indexOf(F)) {
        throw new Error('Unknown field key "'.concat(F, '" on ').concat(e, ".").concat(j));
      }
    }
  }
  o[e] = t.visitor = T;
  p[e] = t.builder = E;
  c[e] = t.fields = i;
  l[e] = t.aliases = b;
  b.forEach(function (t) {
    u[t] = u[t] || [];
    u[t].push(e);
  });
  if (t.validate) {
    d[e] = t.validate;
  }
  k[e] = t;
}
var k = {};