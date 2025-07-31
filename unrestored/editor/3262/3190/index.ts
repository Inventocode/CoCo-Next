"use strict";

var r = require("./624/index");
var a = require("./494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var i = require("./3191");
var o = require("./3192/index");
var s = require("../3188/2658/index");
var u = new Map([["react", ["cloneElement", "createContext", "createElement", "createFactory", "createRef", "forwardRef", "isValidElement", "memo", "lazy"]], ["react-dom", ["createPortal"]]]);
var l = (0, i.declare)(function (e) {
  e.assertVersion(7);
  return {
    name: "transform-react-pure-annotations",
    visitor: {
      CallExpression: function (e) {
        if (function (e) {
          if (!s.types.isMemberExpression(e.node.callee)) {
            var t;
            var n = e.get("callee");
            var i = a(u);
            try {
              for (i.s(); !(t = i.n()).done;) {
                var o;
                var l = r(t.value, 2);
                var p = l[0];
                var f = l[1];
                var d = a(f);
                try {
                  for (d.s(); !(o = d.n()).done;) {
                    var c = o.value;
                    if (n.referencesImport(p, c)) {
                      return !0;
                    }
                  }
                } catch (A) {
                  d.e(A);
                } finally {
                  d.f();
                }
              }
            } catch (A) {
              i.e(A);
            } finally {
              i.f();
            }
            return !1;
          }
          var y;
          var T = a(u);
          try {
            for (T.s(); !(y = T.n()).done;) {
              var m = r(y.value, 2);
              var S = m[0];
              var E = m[1];
              var b = e.get("callee.object");
              if (b.referencesImport(S, "default") || b.referencesImport(S, "*")) {
                var v;
                var P = a(E);
                try {
                  for (P.s(); !(v = P.n()).done;) {
                    var O = v.value;
                    if (s.types.isIdentifier(e.node.callee.property, {
                      name: O
                    })) {
                      return !0;
                    }
                  }
                } catch (A) {
                  P.e(A);
                } finally {
                  P.f();
                }
                return !1;
              }
            }
          } catch (A) {
            T.e(A);
          } finally {
            T.f();
          }
          return !1;
        }(e)) {
          (0, o.default)(e);
        }
      }
    }
  };
});
exports.default = l;