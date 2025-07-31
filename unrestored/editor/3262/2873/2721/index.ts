"use strict";

var r = require("./805/index");
var a = require("../../3190/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t = e.name;
  var n = e.development;
  return (0, o.declare)(function (e, o) {
    var P = o.pure;
    var O = o.throwIfNamespace;
    var A = void 0 === O || O;
    var g = o.filter;
    var x = o.runtime;
    var D = void 0 === x ? n ? "automatic" : "classic" : x;
    var I = o.importSource;
    var _ = void 0 === I ? p : I;
    var h = o.pragma;
    var N = void 0 === h ? f : h;
    var j = o.pragmaFrag;
    var L = void 0 === j ? d : j;
    var C = o.useSpread;
    var B = void 0 !== C && C;
    var w = o.useBuiltIns;
    var M = void 0 !== w && w;
    if ("classic" === D) {
      if ("boolean" !== typeof B) {
        throw new Error("transform-react-jsx currently only accepts a boolean option for useSpread (defaults to false)");
      }
      if ("boolean" !== typeof M) {
        throw new Error("transform-react-jsx currently only accepts a boolean option for useBuiltIns (defaults to false)");
      }
      if (B && M) {
        throw new Error("transform-react-jsx currently only accepts useBuiltIns or useSpread but not both");
      }
    }
    var F = {
      JSXOpeningElement: function (e, t) {
        var n = [];
        if (function (e) {
          var t = function (e) {
            var t = e.scope;
            do {
              if (t.path.isFunctionParent() && !t.path.isArrowFunctionExpression()) {
                return t.path;
              }
            } while (t = t.parent);
            return null;
          }(e);
          if (null === t) {
            return !0;
          }
          if (!t.isMethod()) {
            return !0;
          }
          if ("constructor" !== t.node.kind) {
            return !0;
          }
          n = t.parentPath.parentPath;
          return !(null !== n.node.superClass);
          var n;
        }(e)) {
          n.push(s.types.jsxAttribute(s.types.jsxIdentifier("__self"), s.types.jsxExpressionContainer(s.types.thisExpression())));
        }
        n.push(s.types.jsxAttribute(s.types.jsxIdentifier("__source"), s.types.jsxExpressionContainer(function (e, t) {
          var n = e.node.loc;
          if (!n) {
            return e.scope.buildUndefinedNode();
          }
          if (!t.fileNameIdentifier) {
            var r = t.filename;
            var a = void 0 === r ? "" : r;
            var i = e.scope.generateUidIdentifier("_jsxFileName");
            var o = e.hub.getScope();
            if (o) {
              o.push({
                id: i,
                init: s.types.stringLiteral(a)
              });
            }
            t.fileNameIdentifier = i;
          }
          return function (e, t, n) {
            var r = null != t ? s.types.numericLiteral(t) : s.types.nullLiteral();
            var a = null != n ? s.types.numericLiteral(n + 1) : s.types.nullLiteral();
            var i = s.types.objectProperty(s.types.identifier("fileName"), e);
            var o = s.types.objectProperty(s.types.identifier("lineNumber"), r);
            var u = s.types.objectProperty(s.types.identifier("columnNumber"), a);
            return s.types.objectExpression([i, o, u]);
          }(s.types.cloneNode(t.fileNameIdentifier), n.start.line, n.start.column);
        }(e, t))));
        e.pushContainer("attributes", n);
      }
    };
    return {
      name: t,
      inherits: i.default,
      visitor: {
        JSXNamespacedName: function (e) {
          if (A) {
            throw e.buildCodeFrameError("Namespace tags are not supported by default. React's JSX doesn't support namespace tags. You can set `throwIfNamespace: false` to bypass this warning.");
          }
        },
        JSXSpreadChild: function (e) {
          throw e.buildCodeFrameError("Spread children are not supported in React.");
        },
        Program: {
          enter: function (e, t) {
            var r = t.file;
            var i = D;
            var l = _;
            var d = N;
            var v = L;
            var P = !!o.importSource;
            var O = !!o.pragma;
            var A = !!o.pragmaFrag;
            if (r.ast.comments) {
              var g;
              var x = a(r.ast.comments);
              try {
                for (x.s(); !(g = x.n()).done;) {
                  var I = g.value;
                  var h = c.exec(I.value);
                  if (h) {
                    l = h[1];
                    P = !0;
                  }
                  var j = y.exec(I.value);
                  if (j) {
                    i = j[1];
                  }
                  var C = T.exec(I.value);
                  if (C) {
                    d = C[1];
                    O = !0;
                  }
                  var B = m.exec(I.value);
                  if (B) {
                    v = B[1];
                    A = !0;
                  }
                }
              } catch (K) {
                x.e(K);
              } finally {
                x.f();
              }
            }
            if (E(t, "runtime", i), "classic" === i) {
              if (P) {
                throw e.buildCodeFrameError("importSource cannot be set when runtime is classic.");
              }
              var w = b(d);
              var M = b(v);
              E(t, "id/createElement", function () {
                return s.types.cloneNode(w);
              });
              E(t, "id/fragment", function () {
                return s.types.cloneNode(M);
              });
              E(t, "defaultPure", d === f);
            } else {
              if ("automatic" !== i) {
                throw e.buildCodeFrameError('Runtime must be either "classic" or "automatic".');
              }
              if (O || A) {
                throw e.buildCodeFrameError("pragma and pragmaFrag cannot be set when runtime is automatic.");
              }
              var R = function (r, a) {
                return E(t, r, function (e, t, r, a) {
                  return function () {
                    var i = function (e, t) {
                      switch (t) {
                        case "Fragment":
                          return "".concat(e, "/").concat(n ? "jsx-dev-runtime" : "jsx-runtime");
                        case "jsxDEV":
                          return "".concat(e, "/jsx-dev-runtime");
                        case "jsx":
                        case "jsxs":
                          return "".concat(e, "/jsx-runtime");
                        case "createElement":
                          return e;
                      }
                    }(a, r);
                    if ((0, u.isModule)(t)) {
                      var o = S(e, "imports/".concat(r));
                      return o ? s.types.cloneNode(o) : (o = (0, u.addNamed)(t, r, i, {
                        importedInterop: "uncompiled",
                        importPosition: "after"
                      }), E(e, "imports/".concat(r), o), o);
                    }
                    var l = S(e, "requires/".concat(i));
                    if (l) {
                      l = s.types.cloneNode(l);
                    } else {
                      l = (0, u.addNamespace)(t, i, {
                        importedInterop: "uncompiled"
                      });
                      E(e, "requires/".concat(i), l);
                    }
                    return s.types.memberExpression(l, s.types.identifier(r));
                  };
                }(t, e, a, l));
              };
              R("id/jsx", n ? "jsxDEV" : "jsx");
              R("id/jsxs", n ? "jsxDEV" : "jsxs");
              R("id/createElement", "createElement");
              R("id/fragment", "Fragment");
              E(t, "defaultPure", l === p);
            }
            if (n) {
              e.traverse(F, t);
            }
          }
        },
        JSXElement: {
          exit: function (e, t) {
            var i;
            i = "classic" === S(t, "runtime") || function (e) {
              for (var t = e.get("openingElement").node.attributes, n = !1, r = 0; r < t.length; r++) {
                var a = t[r];
                if (n && s.types.isJSXAttribute(a) && "key" === a.name.name) {
                  return !0;
                }
                if (s.types.isJSXSpreadAttribute(a)) {
                  n = !0;
                }
              }
              return !1;
            }(e) ? function (e, t) {
              var n = e.get("openingElement");
              return R(t, "createElement", [Y(n), U(t, e, n.get("attributes"))].concat(r(s.types.react.buildChildren(e.node))));
            }(e, t) : function (e, t) {
              var r;
              var i = e.get("openingElement");
              var o = [Y(i)];
              var u = [];
              var l = Object.create(null);
              var p = a(i.get("attributes"));
              try {
                for (p.s(); !(r = p.n()).done;) {
                  var f = r.value;
                  if (f.isJSXAttribute() && s.types.isJSXIdentifier(f.node.name)) {
                    var d = f.node.name.name;
                    switch (d) {
                      case "__source":
                      case "__self":
                        if (l[d]) {
                          throw v(e, d);
                        }
                      case "key":
                        var c = K(f.node.value);
                        if (null === c) {
                          throw f.buildCodeFrameError('Please provide an explicit key value. Using "key" as a shorthand for "key={true}" is not allowed.');
                        }
                        l[d] = c;
                        break;
                      default:
                        u.push(f);
                    }
                  } else {
                    u.push(f);
                  }
                }
              } catch (b) {
                p.e(b);
              } finally {
                p.f();
              }
              var y;
              var T;
              var m;
              var S;
              var E = s.types.react.buildChildren(e.node);
              y = u.length || E.length ? function (e, t) {
                var n = e.reduce(V, []);
                if ((null == t ? void 0 : t.length) > 0) {
                  n.push(k(t));
                }
                return s.types.objectExpression(n);
              }(u, E) : s.types.objectExpression([]);
              o.push(y);
              if (n) {
                o.push(null != (T = l.key) ? T : e.scope.buildUndefinedNode(), s.types.booleanLiteral(E.length > 1), null != (m = l.__source) ? m : e.scope.buildUndefinedNode(), null != (S = l.__self) ? S : e.scope.buildUndefinedNode());
              } else {
                if (void 0 !== l.key) {
                  o.push(l.key);
                }
              }
              return R(t, E.length > 1 ? "jsxs" : "jsx", o);
            }(e, t);
            e.replaceWith(s.types.inherits(i, e.node));
          }
        },
        JSXFragment: {
          exit: function (e, t) {
            var a;
            a = "classic" === S(t, "runtime") ? function (e, t) {
              if (g && !g(e.node, t)) {
                return;
              }
              return R(t, "createElement", [S(t, "id/fragment")(), s.types.nullLiteral()].concat(r(s.types.react.buildChildren(e.node))));
            }(e, t) : function (e, t) {
              var r = [S(t, "id/fragment")()];
              var a = s.types.react.buildChildren(e.node);
              r.push(s.types.objectExpression(a.length > 0 ? [k(a)] : []));
              if (n) {
                r.push(e.scope.buildUndefinedNode(), s.types.booleanLiteral(a.length > 1));
              }
              return R(t, a.length > 1 ? "jsxs" : "jsx", r);
            }(e, t);
            e.replaceWith(s.types.inherits(a, e.node));
          }
        },
        JSXAttribute: function (e) {
          if (s.types.isJSXElement(e.node.value)) {
            e.node.value = s.types.jsxExpressionContainer(e.node.value);
          }
        }
      }
    };
    function R(e, t, n) {
      var r = s.types.callExpression(S(e, "id/".concat(t))(), n);
      if (null != P ? P : S(e, "defaultPure")) {
        (0, l.default)(r);
      }
      return r;
    }
    function K(e) {
      return s.types.isJSXExpressionContainer(e) ? e.expression : e;
    }
    function V(e, t) {
      if (s.types.isJSXSpreadAttribute(t.node)) {
        var n = t.node.argument;
        if (s.types.isObjectExpression(n)) {
          e.push.apply(e, r(n.properties));
        } else {
          e.push(s.types.spreadElement(n));
        }
        return e;
      }
      var a;
      var i = K("key" !== t.node.name.name ? t.node.value || s.types.booleanLiteral(!0) : t.node.value);
      if ("key" === t.node.name.name && null === i) {
        throw t.buildCodeFrameError('Please provide an explicit key value. Using "key" as a shorthand for "key={true}" is not allowed.');
      }
      if (s.types.isStringLiteral(i) && !s.types.isJSXExpressionContainer(t.node.value)) {
        i.value = i.value.replace(/\n\s+/g, " ");
        if (!(null == (a = i.extra))) {
          delete a.raw;
        }
      }
      if (s.types.isJSXNamespacedName(t.node.name)) {
        t.node.name = s.types.stringLiteral(t.node.name.namespace.name + ":" + t.node.name.name.name);
      } else {
        if (s.types.isValidIdentifier(t.node.name.name, !1)) {
          t.node.name.type = "Identifier";
        } else {
          t.node.name = s.types.stringLiteral(t.node.name.name);
        }
      }
      e.push(s.types.inherits(s.types.objectProperty(t.node.name, i), t.node));
      return e;
    }
    function k(e) {
      var t;
      if (1 === e.length) {
        t = e[0];
      } else {
        if (!(e.length > 1)) {
          return;
        }
        t = s.types.arrayExpression(e);
      }
      return s.types.objectProperty(s.types.identifier("children"), t);
    }
    function Y(e) {
      var t;
      var n = function e(t, n) {
        if (s.types.isJSXIdentifier(t)) {
          if ("this" === t.name && s.types.isReferenced(t, n)) {
            return s.types.thisExpression();
          }
          if (!s.types.isValidIdentifier(t.name, !1)) {
            return s.types.stringLiteral(t.name);
          }
          t.type = "Identifier";
        } else {
          if (s.types.isJSXMemberExpression(t)) {
            return s.types.memberExpression(e(t.object, t), e(t.property, t));
          }
          if (s.types.isJSXNamespacedName(t)) {
            return s.types.stringLiteral("".concat(t.namespace.name, ":").concat(t.name.name));
          }
        }
        return t;
      }(e.node.name, e.node);
      if (s.types.isIdentifier(n)) {
        t = n.name;
      } else {
        if (s.types.isLiteral(n)) {
          t = n.value;
        }
      }
      return s.types.react.isCompatTag(t) ? s.types.stringLiteral(t) : n;
    }
    function U(e, t, n) {
      var r = S(e, "runtime");
      if ("automatic" !== r) {
        var i = [];
        var o = n.reduce(V, []);
        if (B) {
          if (o.length) {
            i.push(s.types.objectExpression(o));
          }
        } else {
          var u = 0;
          o.forEach(function (e, t) {
            if (s.types.isSpreadElement(e)) {
              if (t > u) {
                i.push(s.types.objectExpression(o.slice(u, t)));
              }
              i.push(e.argument);
              u = t + 1;
            }
          });
          if (o.length > u) {
            i.push(s.types.objectExpression(o.slice(u)));
          }
        }
        if (!i.length) {
          return s.types.nullLiteral();
        }
        if (1 === i.length) {
          return i[0];
        }
        if (!s.types.isObjectExpression(i[0])) {
          i.unshift(s.types.objectExpression([]));
        }
        var l = M ? s.types.memberExpression(s.types.identifier("Object"), s.types.identifier("assign")) : e.addHelper("extends");
        return s.types.callExpression(l, i);
      }
      var p;
      var f = [];
      var d = Object.create(null);
      var c = a(n);
      try {
        for (c.s(); !(p = c.n()).done;) {
          var y = p.value;
          var T = s.types.isJSXAttribute(y) && s.types.isJSXIdentifier(y.name) && y.name.name;
          if ("automatic" === r && ("__source" === T || "__self" === T)) {
            if (d[T]) {
              throw v(t, T);
            }
            d[T] = !0;
          }
          V(f, y);
        }
      } catch (m) {
        c.e(m);
      } finally {
        c.f();
      }
      return 1 === f.length && s.types.isSpreadElement(f[0]) ? f[0].argument : f.length > 0 ? s.types.objectExpression(f) : s.types.nullLiteral();
    }
  });
};
var i = require("./2874");
var o = require("../../2690");
var s = require("../../3188/2658/index");
var u = require("./3132/index");
var l = require("./3185/index");
var p = "react";
var f = "React.createElement";
var d = "React.Fragment";
var c = /\*?\s*@jsxImportSource\s+([^\s]+)/;
var y = /\*?\s*@jsxRuntime\s+([^\s]+)/;
var T = /\*?\s*@jsx\s+([^\s]+)/;
var m = /\*?\s*@jsxFrag\s+([^\s]+)/;
var S = function (e, t) {
  return e.get("@babel/plugin-react-jsx/".concat(t));
};
var E = function (e, t, n) {
  return e.set("@babel/plugin-react-jsx/".concat(t), n);
};
function b(e) {
  return e.split(".").map(function (e) {
    return s.types.identifier(e);
  }).reduce(function (e, t) {
    return s.types.memberExpression(e, t);
  });
}
function v(e, t) {
  var n = "transform-react-jsx-".concat(t.slice(2));
  return e.buildCodeFrameError("Duplicate ".concat(t, " prop found. You are most likely using the deprecated ").concat(n, " Babel plugin. Both __source and __self are automatically set when using the automatic runtime. Please remove transform-react-jsx-source and transform-react-jsx-self from your Babel config."));
}