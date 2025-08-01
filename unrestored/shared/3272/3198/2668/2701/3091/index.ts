"use strict";

var r;
var i;
var a;
var s;
var o;
var l;
var u;
var c;
var p;
var f;
var d;
var h;
var y;
var m = require("../../../../3200/624/index");
var v = require("../../3103/2686");
var g = require("../../../../3200/494");
var T = require("../../../../2883/2731/806/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.buildNamespaceInitStatements = function (e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  var s = [];
  var o = j(t.name);
  if (t.lazy) {
    o = C(o, []);
  }
  var l;
  var u = g(t.importsNamespace);
  try {
    for (u.s(); !(l = u.n()).done;) {
      var c = l.value;
      if (c !== t.name) {
        s.push(E.default.statement(r || (r = v(["var NAME = SOURCE;"])))({
          NAME: c,
          SOURCE: I(o)
        }));
      }
    }
  } catch (y) {
    u.e(y);
  } finally {
    u.f();
  }
  if (n) {
    s.push.apply(s, T(V(e, t, !0)));
  }
  var p;
  var f = g(t.reexportNamespace);
  try {
    for (f.s(); !(p = f.n()).done;) {
      var d = p.value;
      s.push((t.lazy ? E.default.statement(i || (i = v(['\n            Object.defineProperty(EXPORTS, "NAME", {\n              enumerable: true,\n              get: function() {\n                return NAMESPACE;\n              }\n            });\n          ']))) : E.default.statement(a || (a = v(["EXPORTS.NAME = NAMESPACE;"]))))({
        EXPORTS: e.exportName,
        NAME: d,
        NAMESPACE: I(o)
      }));
    }
  } catch (y) {
    f.e(y);
  } finally {
    f.f();
  }
  if (t.reexportAll) {
    var h = W(e, I(o), n);
    h.loc = t.reexportAll.loc;
    s.push(h);
  }
  return s;
};
exports.ensureStatementsHoisted = function (e) {
  e.forEach(function (e) {
    e._blockHoist = 3;
  });
};
Object.defineProperty(exports, "getModuleName", {
  enumerable: !0,
  get: function () {
    return w.default;
  }
});
Object.defineProperty(exports, "hasExports", {
  enumerable: !0,
  get: function () {
    return k.hasExports;
  }
});
Object.defineProperty(exports, "isModule", {
  enumerable: !0,
  get: function () {
    return x.isModule;
  }
});
Object.defineProperty(exports, "isSideEffectImport", {
  enumerable: !0,
  get: function () {
    return k.isSideEffectImport;
  }
});
exports.rewriteModuleStatementsAndPrepareHeader = function (e, t) {
  var n = t.loose;
  var r = t.exportName;
  var i = t.strict;
  var a = t.allowTopLevelThis;
  var s = t.strictMode;
  var o = t.noInterop;
  var l = t.importInterop;
  var p = void 0 === l ? o ? "none" : "babel" : l;
  var f = t.lazy;
  var d = t.esNamespaceOnly;
  var h = t.constantReexports;
  var y = void 0 === h ? n : h;
  var S = t.enumerableModuleMeta;
  var w = void 0 === S ? n : S;
  var O = t.noIncompleteNsImportDetection;
  (0, k.validateImportInteropOption)(p);
  b((0, x.isModule)(e), "Cannot process module statements in a script");
  e.node.sourceType = "script";
  var C = (0, k.default)(e, r, {
    importInterop: p,
    initializeReexports: y,
    lazy: f,
    esNamespaceOnly: d
  });
  if (!a) {
    (0, P.default)(e);
  }
  (0, A.default)(e, C);
  if (!1 !== s) {
    if (!e.node.directives.some(function (e) {
      return "use strict" === e.value.value;
    })) {
      e.unshiftContainer("directives", N(_("use strict")));
    }
  }
  var I = [];
  if ((0, k.hasExports)(C) && !i) {
    I.push(function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (t ? E.default.statement(u || (u = v(["\n        EXPORTS.__esModule = true;\n      "]))) : E.default.statement(c || (c = v(['\n        Object.defineProperty(EXPORTS, "__esModule", {\n          value: true,\n        });\n      ']))))({
        EXPORTS: e.exportName
      });
    }(C, w));
  }
  var D = function (e, t) {
    var n;
    var r = Object.create(null);
    var i = g(t.local.values());
    try {
      for (i.s(); !(n = i.n()).done;) {
        var a;
        var s = n.value;
        var o = g(s.names);
        try {
          for (o.s(); !(a = o.n()).done;) {
            var l = a.value;
            r[l] = !0;
          }
        } catch (S) {
          o.e(S);
        } finally {
          o.f();
        }
      }
    } catch (S) {
      i.e(S);
    } finally {
      i.f();
    }
    var u;
    var c = !1;
    var p = g(t.source.values());
    try {
      for (p.s(); !(u = p.n()).done;) {
        var f;
        var d = u.value;
        var h = g(d.reexports.keys());
        try {
          for (h.s(); !(f = h.n()).done;) {
            var y = f.value;
            r[y] = !0;
          }
        } catch (S) {
          h.e(S);
        } finally {
          h.f();
        }
        var m;
        var v = g(d.reexportNamespace);
        try {
          for (v.s(); !(m = v.n()).done;) {
            var T = m.value;
            r[T] = !0;
          }
        } catch (S) {
          v.e(S);
        } finally {
          v.f();
        }
        c = c || !!d.reexportAll;
      }
    } catch (S) {
      p.e(S);
    } finally {
      p.f();
    }
    if (!c || 0 === Object.keys(r).length) {
      return null;
    }
    var b = e.scope.generateUidIdentifier("exportNames");
    delete r.default;
    return {
      name: b.name,
      statement: R("var", [U(b, F(r))])
    };
  }(e, C);
  if (D) {
    C.exportNameListName = D.name;
    I.push(D.statement);
  }
  I.push.apply(I, T(function (e, t) {
    var n;
    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    var a = [];
    var s = g(t.local);
    try {
      for (s.s(); !(n = s.n()).done;) {
        var o = m(n.value, 2);
        var l = o[0];
        var u = o[1];
        if ("import" === u.kind) {
          ;
        } else if ("hoisted" === u.kind) {
          a.push([u.names[0], H(t, u.names, j(l))]);
        } else if (!i) {
          var c;
          var p = g(u.names);
          try {
            for (p.s(); !(c = p.n()).done;) {
              var f = c.value;
              a.push([f, null]);
            }
          } catch (F) {
            p.e(F);
          } finally {
            p.f();
          }
        }
      }
    } catch (F) {
      s.e(F);
    } finally {
      s.f();
    }
    var d;
    var h = g(t.source.values());
    try {
      for (h.s(); !(d = h.n()).done;) {
        var y = d.value;
        if (!r) {
          for (var v = V(t, y, !1), b = T(y.reexports.keys()), S = 0; S < v.length; S++) {
            a.push([b[S], v[S]]);
          }
        }
        if (!i) {
          var E;
          var x = g(y.reexportNamespace);
          try {
            for (x.s(); !(E = x.n()).done;) {
              var P = E.value;
              a.push([P, null]);
            }
          } catch (F) {
            x.e(F);
          } finally {
            x.f();
          }
        }
      }
    } catch (F) {
      h.e(F);
    } finally {
      h.f();
    }
    a.sort(function (e, t) {
      return e[0] > t[0] ? 1 : -1;
    });
    var A = [];
    if (i) {
      var k;
      var w = g(a);
      try {
        for (w.s(); !(k = w.n()).done;) {
          var O = m(k.value, 2);
          var C = O[1];
          A.push(C);
        }
      } catch (F) {
        w.e(F);
      } finally {
        w.f();
      }
    } else {
      for (var I = 100, N = 0, _ = []; N < a.length; N += I) {
        for (var D = 0; D < I && N + D < a.length; D++) {
          var L = m(a[N + D], 2);
          var M = L[0];
          var B = L[1];
          if (null !== B) {
            if (_.length > 0) {
              A.push(H(t, _, e.scope.buildUndefinedNode()));
              _ = [];
            }
            A.push(B);
          } else {
            _.push(M);
          }
        }
        if (_.length > 0) {
          A.push(H(t, _, e.scope.buildUndefinedNode()));
        }
      }
    }
    return A;
  }(e, C, y, O)));
  return {
    meta: C,
    headers: I
  };
};
Object.defineProperty(exports, "rewriteThis", {
  enumerable: !0,
  get: function () {
    return P.default;
  }
});
exports.wrapInterop = function (e, t, n) {
  if ("none" === n) {
    return null;
  }
  if ("node-namespace" === n) {
    return C(e.hub.addHelper("interopRequireWildcard"), [t, O(!0)]);
  }
  if ("node-default" === n) {
    return null;
  }
  var r;
  if ("default" === n) {
    r = "interopRequireDefault";
  } else {
    if ("namespace" !== n) {
      throw new Error("Unknown interop: ".concat(n));
    }
    r = "interopRequireWildcard";
  }
  return C(e.hub.addHelper(r), [t]);
};
var b = require("../../../../../1531/2584/1036/1363/569");
var S = require("../../2633/index");
var E = require("../../2677/index");
var x = require("./3092/index");
var P = require("./3095/index");
var A = require("./3099/index");
var k = require("./3101/index");
var w = require("./3102");
var O = S.booleanLiteral;
var C = S.callExpression;
var I = S.cloneNode;
var N = S.directive;
var _ = S.directiveLiteral;
var D = S.expressionStatement;
var j = S.identifier;
var L = S.isIdentifier;
var M = S.memberExpression;
var B = S.stringLiteral;
var F = S.valueToNode;
var R = S.variableDeclaration;
var U = S.variableDeclarator;
var K = {
  constant: E.default.statement(s || (s = v(["EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;"]))),
  constantComputed: E.default.statement(o || (o = v(['EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;']))),
  spec: E.default.statement(l || (l = v(['\n    Object.defineProperty(EXPORTS, "EXPORT_NAME", {\n      enumerable: true,\n      get: function() {\n        return NAMESPACE_IMPORT;\n      },\n    });\n    '])))
};
var V = function (e, t, n) {
  var r = t.lazy ? C(j(t.name), []) : j(t.name);
  var i = e.stringSpecifiers;
  return Array.from(t.reexports, function (a) {
    var s = m(a, 2);
    var o = s[0];
    var l = s[1];
    var u = I(r);
    if (!("default" === l && "node-default" === t.interop)) {
      u = i.has(l) ? M(u, B(l), !0) : M(u, j(l));
    }
    var c = {
      EXPORTS: e.exportName,
      EXPORT_NAME: o,
      NAMESPACE_IMPORT: u
    };
    return n || L(u) ? i.has(o) ? K.constantComputed(c) : K.constant(c) : K.spec(c);
  });
};
function W(e, t, n) {
  return (n ? E.default.statement(p || (p = v(['\n        Object.keys(NAMESPACE).forEach(function(key) {\n          if (key === "default" || key === "__esModule") return;\n          VERIFY_NAME_LIST;\n          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;\n\n          EXPORTS[key] = NAMESPACE[key];\n        });\n      ']))) : E.default.statement(f || (f = v(['\n        Object.keys(NAMESPACE).forEach(function(key) {\n          if (key === "default" || key === "__esModule") return;\n          VERIFY_NAME_LIST;\n          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;\n\n          Object.defineProperty(EXPORTS, key, {\n            enumerable: true,\n            get: function() {\n              return NAMESPACE[key];\n            },\n          });\n        });\n    ']))))({
    NAMESPACE: t,
    EXPORTS: e.exportName,
    VERIFY_NAME_LIST: e.exportNameListName ? (0, E.default)(d || (d = v(["\n            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;\n          "])))({
      EXPORTS_LIST: e.exportNameListName
    }) : null
  });
}
var Y = {
  computed: E.default.expression(h || (h = v(['EXPORTS["NAME"] = VALUE']))),
  default: E.default.expression(y || (y = v(["EXPORTS.NAME = VALUE"])))
};
function H(e, t, n) {
  var r = e.stringSpecifiers;
  var i = e.exportName;
  return D(t.reduce(function (e, t) {
    var n = {
      EXPORTS: i,
      NAME: t,
      VALUE: e
    };
    return r.has(t) ? Y.computed(n) : Y.default(n);
  }, n));
}