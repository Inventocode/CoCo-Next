"use strict";

export default (function (e, t, n) {
  var r = n.placeholderWhitelist;
  var s = n.placeholderPattern;
  var o = n.preserveComments;
  var l = n.syntacticPlaceholders;
  var u = function (e, t, n) {
    var r = (t.plugins || []).slice();
    if (!1 !== n) {
      r.push("placeholders");
    }
    t = Object.assign({
      allowReturnOutsideFunction: !0,
      allowSuperOutsideMethod: !0,
      sourceType: "module"
    }, t, {
      plugins: r
    });
    try {
      return (0, i.parse)(e, t);
    } catch (o) {
      var s = o.loc;
      throw s && (o.message += "\n" + (0, a.codeFrameColumns)(e, {
        start: s
      }), o.code = "BABEL_TEMPLATE_PARSE_ERROR"), o;
    }
  }(t, n.parser, l);
  y(u, {
    preserveComments: o
  });
  e.validate(u);
  var c = {
    placeholders: [],
    placeholderNames: new Set()
  };
  var p = {
    placeholders: [],
    placeholderNames: new Set()
  };
  var f = {
    value: void 0
  };
  m(u, g, {
    syntactic: c,
    legacy: p,
    isLegacyRef: f,
    placeholderWhitelist: r,
    placeholderPattern: s,
    syntacticPlaceholders: l
  });
  return Object.assign({
    ast: u
  }, f.value ? p : c);
});
import * as r from "../../../../2624/index";
import * as i from "../../../../2659/2640/2956/2755";
import * as a from "../../../../2659/2640/2956/2752/index";
var s = r.isCallExpression;
var o = r.isExpressionStatement;
var l = r.isFunction;
var u = r.isIdentifier;
var c = r.isJSXIdentifier;
var p = r.isNewExpression;
var f = r.isPlaceholder;
var d = r.isStatement;
var h = r.isStringLiteral;
var y = r.removePropertiesDeep;
var m = r.traverse;
var v = /^[_$A-Z0-9]+$/;
function g(e, t, n) {
  var r;
  var i;
  if (f(e)) {
    if (!1 === n.syntacticPlaceholders) {
      throw new Error("%%foo%%-style placeholders can't be used when '.syntacticPlaceholders' is false.");
    }
    i = e.name.name;
    n.isLegacyRef.value = !1;
  } else {
    if (!1 === n.isLegacyRef.value || n.syntacticPlaceholders) {
      return;
    }
    if (u(e) || c(e)) {
      i = e.name;
      n.isLegacyRef.value = !0;
    } else {
      if (!h(e)) {
        return;
      }
      i = e.value;
      n.isLegacyRef.value = !0;
    }
  }
  if (!n.isLegacyRef.value && (null != n.placeholderPattern || null != n.placeholderWhitelist)) {
    throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible with '.syntacticPlaceholders: true'");
  }
  if (!n.isLegacyRef.value || !1 !== n.placeholderPattern && (n.placeholderPattern || v).test(i) || null != (r = n.placeholderWhitelist) && r.has(i)) {
    var a;
    var y = (t = t.slice())[t.length - 1];
    var m = y.node;
    var g = y.key;
    if (h(e) || f(e, {
      expectedNode: "StringLiteral"
    })) {
      a = "string";
    } else {
      if (p(m) && "arguments" === g || s(m) && "arguments" === g || l(m) && "params" === g) {
        a = "param";
      } else {
        if (o(m) && !f(e)) {
          a = "statement";
          t = t.slice(0, -1);
        } else {
          a = d(e) && f(e) ? "statement" : "other";
        }
      }
    }
    var T = n.isLegacyRef.value ? n.legacy : n.syntactic;
    var b = T.placeholders;
    var S = T.placeholderNames;
    b.push({
      name: i,
      type: a,
      resolve: function (e) {
        return function (e, t) {
          for (var n = e, r = 0; r < t.length - 1; r++) {
            var i = t[r];
            var a = i.key;
            var s = i.index;
            n = void 0 === s ? n[a] : n[a][s];
          }
          var o = t[t.length - 1];
          var l = o.key;
          var u = o.index;
          return {
            parent: n,
            key: l,
            index: u
          };
        }(e, t);
      },
      isDuplicate: S.has(i)
    });
    S.add(i);
  }
}