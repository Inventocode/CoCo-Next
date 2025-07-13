"use strict";

import * as r from "../../../../../3190/624/index";
import * as i from "../../../../../3190/494";
export default (function (e, t, n) {
  var s = n.importInterop;
  var u = n.initializeReexports;
  var d = void 0 !== u && u;
  var h = n.lazy;
  var y = void 0 !== h && h;
  var m = n.esNamespaceOnly;
  var v = void 0 !== m && m;
  if (!t) {
    t = e.scope.generateUidIdentifier("exports").name;
  }
  var g = new Set();
  !function (e) {
    e.get("body").forEach(function (e) {
      if (e.isExportDefaultDeclaration()) {
        (0, o.default)(e);
      }
    });
  }(e);
  var T = function (e, t, n) {
    var s = t.lazy;
    var o = t.initializeReexports;
    var u = function (e, t, n) {
      var r = new Map();
      e.get("body").forEach(function (e) {
        var n;
        if (e.isImportDeclaration()) {
          n = "import";
        } else {
          if (e.isExportDefaultDeclaration() && (e = e.get("declaration")), e.isExportNamedDeclaration()) {
            if (e.node.declaration) {
              e = e.get("declaration");
            } else if (t && e.node.source && e.get("source").isStringLiteral()) {
              return void e.get("specifiers").forEach(function (e) {
                f(e);
                r.set(e.get("local").node.name, "block");
              });
            }
          }
          if (e.isFunctionDeclaration()) {
            n = "hoisted";
          } else if (e.isClassDeclaration()) {
            n = "block";
          } else if (e.isVariableDeclaration({
            kind: "var"
          })) {
            n = "var";
          } else {
            if (!e.isVariableDeclaration()) {
              return;
            }
            n = "block";
          }
        }
        Object.keys(e.getOuterBindingIdentifiers()).forEach(function (e) {
          r.set(e, n);
        });
      });
      var i = new Map();
      var a = function (e) {
        var t = e.node.name;
        var n = i.get(t);
        if (!n) {
          var a = r.get(t);
          if (void 0 === a) {
            throw e.buildCodeFrameError('Exporting local "'.concat(t, '", which is not declared.'));
          }
          n = {
            names: [],
            kind: a
          };
          i.set(t, n);
        }
        return n;
      };
      e.get("body").forEach(function (e) {
        if (!e.isExportNamedDeclaration() || !t && e.node.source) {
          if (e.isExportDefaultDeclaration()) {
            var r = e.get("declaration");
            if (!r.isFunctionDeclaration() && !r.isClassDeclaration()) {
              throw r.buildCodeFrameError("Unexpected default expression export.");
            }
            a(r.get("id")).names.push("default");
          }
        } else if (e.node.declaration) {
          var i = e.get("declaration");
          var s = i.getOuterBindingIdentifierPaths();
          Object.keys(s).forEach(function (e) {
            if ("__esModule" === e) {
              throw i.buildCodeFrameError('Illegal export "__esModule".');
            }
            a(s[e]).names.push(e);
          });
        } else {
          e.get("specifiers").forEach(function (e) {
            var t = e.get("local");
            var r = e.get("exported");
            var i = a(t);
            var s = p(r, n);
            if ("__esModule" === s) {
              throw r.buildCodeFrameError('Illegal export "__esModule".');
            }
            i.names.push(s);
          });
        }
      });
      return i;
    }(e, o, n);
    var c = new Map();
    var d = function (t) {
      var n = t.value;
      var r = c.get(n);
      if (!r) {
        r = {
          name: e.scope.generateUidIdentifier((0, a.basename)(n, (0, a.extname)(n))).name,
          interop: "none",
          loc: null,
          imports: new Map(),
          importsNamespace: new Set(),
          reexports: new Map(),
          reexportNamespace: new Set(),
          reexportAll: null,
          lazy: !1,
          source: n
        };
        c.set(n, r);
      }
      return r;
    };
    var h = !1;
    e.get("body").forEach(function (e) {
      if (e.isImportDeclaration()) {
        var t = d(e.node.source);
        if (!t.loc) {
          t.loc = e.node.loc;
        }
        e.get("specifiers").forEach(function (e) {
          if (e.isImportDefaultSpecifier()) {
            var r = e.get("local").node.name;
            t.imports.set(r, "default");
            var i = u.get(r);
            if (i) {
              u.delete(r);
              i.names.forEach(function (e) {
                t.reexports.set(e, "default");
              });
            }
          } else if (e.isImportNamespaceSpecifier()) {
            var a = e.get("local").node.name;
            t.importsNamespace.add(a);
            var s = u.get(a);
            if (s) {
              u.delete(a);
              s.names.forEach(function (e) {
                t.reexportNamespace.add(e);
              });
            }
          } else if (e.isImportSpecifier()) {
            var o = p(e.get("imported"), n);
            var l = e.get("local").node.name;
            t.imports.set(l, o);
            var c = u.get(l);
            if (c) {
              u.delete(l);
              c.names.forEach(function (e) {
                t.reexports.set(e, o);
              });
            }
          }
        });
      } else if (e.isExportAllDeclaration()) {
        h = !0;
        var r = d(e.node.source);
        if (!r.loc) {
          r.loc = e.node.loc;
        }
        r.reexportAll = {
          loc: e.node.loc
        };
      } else if (e.isExportNamedDeclaration() && e.node.source) {
        h = !0;
        var i = d(e.node.source);
        if (!i.loc) {
          i.loc = e.node.loc;
        }
        e.get("specifiers").forEach(function (e) {
          f(e);
          var t = p(e.get("local"), n);
          var r = p(e.get("exported"), n);
          if (i.reexports.set(r, t), "__esModule" === r) {
            throw e.get("exported").buildCodeFrameError('Illegal export "__esModule".');
          }
        });
      } else if (e.isExportNamedDeclaration() || e.isExportDefaultDeclaration()) {
        h = !0;
      }
    });
    var y;
    var m = i(c.values());
    try {
      for (m.s(); !(y = m.n()).done;) {
        var v = y.value;
        var g = !1;
        var T = !1;
        if (v.importsNamespace.size > 0) {
          g = !0;
          T = !0;
        }
        if (v.reexportAll) {
          T = !0;
        }
        var b;
        var S = i(v.imports.values());
        try {
          for (S.s(); !(b = S.n()).done;) {
            if ("default" === b.value) {
              g = !0;
            } else {
              T = !0;
            }
          }
        } catch (C) {
          S.e(C);
        } finally {
          S.f();
        }
        var E;
        var x = i(v.reexports.values());
        try {
          for (x.s(); !(E = x.n()).done;) {
            if ("default" === E.value) {
              g = !0;
            } else {
              T = !0;
            }
          }
        } catch (C) {
          x.e(C);
        } finally {
          x.f();
        }
        if (g && T) {
          v.interop = "namespace";
        } else {
          if (g) {
            v.interop = "default";
          }
        }
      }
    } catch (C) {
      m.e(C);
    } finally {
      m.f();
    }
    var P;
    var A = i(c);
    try {
      for (A.s(); !(P = A.n()).done;) {
        var k = r(P.value, 2);
        var w = k[0];
        var O = k[1];
        if (!1 !== s && !l(O) && !O.reexportAll) {
          if (!0 === s) {
            O.lazy = !/\./.test(w);
          } else if (Array.isArray(s)) {
            O.lazy = -1 !== s.indexOf(w);
          } else {
            if ("function" !== typeof s) {
              throw new Error(".lazy must be a boolean, string array, or function");
            }
            O.lazy = s(w);
          }
        }
      }
    } catch (C) {
      A.e(C);
    } finally {
      A.f();
    }
    return {
      hasExports: h,
      local: u,
      source: c
    };
  }(e, {
    initializeReexports: d,
    lazy: y
  }, g);
  var b = T.local;
  var S = T.source;
  var E = T.hasExports;
  !function (e) {
    e.get("body").forEach(function (e) {
      if (e.isImportDeclaration()) {
        e.remove();
      } else if (e.isExportNamedDeclaration()) {
        if (e.node.declaration) {
          e.node.declaration._blockHoist = e.node._blockHoist;
          e.replaceWith(e.node.declaration);
        } else {
          e.remove();
        }
      } else if (e.isExportDefaultDeclaration()) {
        var t = e.get("declaration");
        if (!t.isFunctionDeclaration() && !t.isClassDeclaration()) {
          throw t.buildCodeFrameError("Unexpected default expression export.");
        }
        t._blockHoist = e.node._blockHoist;
        e.replaceWith(t);
      } else if (e.isExportAllDeclaration()) {
        e.remove();
      }
    });
  }(e);
  var x;
  var P = i(S);
  try {
    for (P.s(); !(x = P.n()).done;) {
      var A = r(x.value, 2)[1];
      if (A.importsNamespace.size > 0) {
        A.name = A.importsNamespace.values().next().value;
      }
      var k = c(s, A.source);
      if ("none" === k) {
        A.interop = "none";
      } else {
        if ("node" === k && "namespace" === A.interop) {
          A.interop = "node-namespace";
        } else {
          if ("node" === k && "default" === A.interop) {
            A.interop = "node-default";
          } else {
            if (v && "namespace" === A.interop) {
              A.interop = "default";
            }
          }
        }
      }
    }
  } catch (w) {
    P.e(w);
  } finally {
    P.f();
  }
  return {
    exportName: t,
    exportNameListName: null,
    hasExports: E,
    local: b,
    source: S,
    stringSpecifiers: g
  };
});
exports.hasExports = function (e) {
  return e.hasExports;
};
export { l as isSideEffectImport };
export { u as validateImportInteropOption };
import * as a from "../../../../1184/index";
import * as s from "../../../2623/2664/2665/index";
import * as o from "./2779";
function l(e) {
  return 0 === e.imports.size && 0 === e.importsNamespace.size && 0 === e.reexports.size && 0 === e.reexportNamespace.size && !e.reexportAll;
}
function u(e) {
  if ("function" !== typeof e && "none" !== e && "babel" !== e && "node" !== e) {
    throw new Error('.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received '.concat(e, ")."));
  }
  return e;
}
function c(e, t) {
  return "function" === typeof e ? u(e(t)) : e;
}
function p(e, t) {
  if (e.isIdentifier()) {
    return e.node.name;
  }
  if (e.isStringLiteral()) {
    var n = e.node.value;
    if (!(0, s.isIdentifierName)(n)) {
      t.add(n);
    }
    return n;
  }
  throw new Error("Expected export specifier to be either Identifier or StringLiteral, got ".concat(e.node.type));
}
function f(e) {
  if (!e.isExportSpecifier()) {
    throw e.isExportNamespaceSpecifier() ? e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`.") : e.buildCodeFrameError("Unexpected export specifier type");
  }
}