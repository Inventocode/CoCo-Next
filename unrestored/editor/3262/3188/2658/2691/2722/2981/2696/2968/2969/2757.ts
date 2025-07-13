"use strict";

import * as r from "../../../../../../../../2873/2721/805/index";
export default (function (e, t) {
  var n = s(e.ast);
  if (t) {
    e.placeholders.forEach(function (e) {
      if (!Object.prototype.hasOwnProperty.call(t, e.name)) {
        var n = e.name;
        throw new Error('Error: No substitution given for "'.concat(n, "\". If this is not meant to be a\n            placeholder you may want to consider passing one of the following options to @babel/template:\n            - { placeholderPattern: false, placeholderWhitelist: new Set(['").concat(n, "'])}\n            - { placeholderPattern: /^").concat(n, "$/ }"));
      }
    });
    Object.keys(t).forEach(function (t) {
      if (!e.placeholderNames.has(t)) {
        throw new Error('Unknown substitution "'.concat(t, '" given'));
      }
    });
  }
  e.placeholders.slice().reverse().forEach(function (e) {
    try {
      !function (e, t, n) {
        if (e.isDuplicate) {
          if (Array.isArray(n)) {
            n = n.map(function (e) {
              return s(e);
            });
          } else {
            if ("object" === typeof n) {
              n = s(n);
            }
          }
        }
        var i = e.resolve(t);
        var h = i.parent;
        var y = i.key;
        var m = i.index;
        if ("string" === e.type) {
          if ("string" === typeof n && (n = f(n)), !n || !p(n)) {
            throw new Error("Expected string substitution");
          }
        } else if ("statement" === e.type) {
          if (void 0 === m) {
            if (n) {
              if (Array.isArray(n)) {
                n = a(n);
              } else {
                if ("string" === typeof n) {
                  n = l(u(n));
                } else {
                  if (!c(n)) {
                    n = l(n);
                  }
                }
              }
            } else {
              n = o();
            }
          } else {
            if (n && !Array.isArray(n)) {
              if ("string" === typeof n) {
                n = u(n);
              }
              if (!c(n)) {
                n = l(n);
              }
            }
          }
        } else if ("param" === e.type) {
          if ("string" === typeof n && (n = u(n)), void 0 === m) {
            throw new Error("Assertion failure.");
          }
        } else if ("string" === typeof n && (n = u(n)), Array.isArray(n)) {
          throw new Error("Cannot replace single expression with an array.");
        }
        if (void 0 === m) {
          d(h, y, n);
          h[y] = n;
        } else {
          var v = h[y].slice();
          if ("statement" === e.type || "param" === e.type) {
            if (null == n) {
              v.splice(m, 1);
            } else {
              if (Array.isArray(n)) {
                v.splice.apply(v, [m, 1].concat(r(n)));
              } else {
                v[m] = n;
              }
            }
          } else {
            v[m] = n;
          }
          d(h, y, v);
          h[y] = v;
        }
      }(e, n, t && t[e.name] || null);
    } catch (i) {
      throw i.message = '@babel/template placeholder "'.concat(e.name, '": ').concat(i.message), i;
    }
  });
  return n;
});
import * as i from "../../../../2624/index";
var a = i.blockStatement;
var s = i.cloneNode;
var o = i.emptyStatement;
var l = i.expressionStatement;
var u = i.identifier;
var c = i.isStatement;
var p = i.isStringLiteral;
var f = i.stringLiteral;
var d = i.validate;