"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t;
  var n = e.node;
  var r = e.parent;
  var i = e.scope;
  var a = e.id;
  var c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (n.id) {
    return;
  }
  if (!y(r) && !h(r, {
    kind: "method"
  }) || r.computed && !f(r.key)) {
    if (g(r)) {
      a = r.id;
      if (p(a) && !c) {
        var d = i.parent.getBinding(a.name);
        if (d && d.constant && i.getBinding(a.name) === d) {
          n.id = o(a);
          return void (n.id[s] = !0);
        }
      }
    } else if (u(r, {
      operator: "="
    })) {
      a = r.left;
    } else if (!a) {
      return;
    }
  } else {
    a = r.key;
  }
  if (a && f(a)) {
    t = x(a);
  } else {
    if (a && p(a)) {
      t = a.name;
    }
  }
  if (void 0 === t) {
    return;
  }
  t = T(t);
  (a = l(t))[s] = !0;
  var m = A(n, t, i);
  return P(m, n, a, i) || n;
};
var r = require("./3076");
var i = require("../../../../2677/index");
var a = require("../../../../2633/index");
var s = a.NOT_LOCAL_BINDING;
var o = a.cloneNode;
var l = a.identifier;
var u = a.isAssignmentExpression;
var c = a.isFunction;
var p = a.isIdentifier;
var f = a.isLiteral;
var d = a.isNullLiteral;
var h = a.isObjectMethod;
var y = a.isObjectProperty;
var m = a.isRegExpLiteral;
var v = a.isTemplateLiteral;
var g = a.isVariableDeclarator;
var T = a.toBindingIdentifierName;
var b = (0, i.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n");
var S = (0, i.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n");
var E = {
  "ReferencedIdentifier|BindingIdentifier": function (e, t) {
    if (e.node.name === t.name) {
      if (e.scope.getBindingIdentifier(t.name) === t.outerDeclar) {
        t.selfReference = !0;
        e.stop();
      }
    }
  }
};
function x(e) {
  return d(e) ? "null" : m(e) ? "_".concat(e.pattern, "_").concat(e.flags) : v(e) ? e.quasis.map(function (e) {
    return e.value.raw;
  }).join("") : void 0 !== e.value ? e.value + "" : "";
}
function P(e, t, n, i) {
  if (e.selfReference) {
    if (!i.hasBinding(n.name) || i.hasGlobal(n.name)) {
      if (!c(t)) {
        return;
      }
      var a = b;
      if (t.generator) {
        a = S;
      }
      for (var s = a({
          FUNCTION: t,
          FUNCTION_ID: n,
          FUNCTION_KEY: i.generateUidIdentifier(n.name)
        }).expression, o = s.callee.body.body[0].params, l = 0, u = (0, r.default)(t); l < u; l++) {
        o.push(i.generateUidIdentifier("x"));
      }
      return s;
    }
    i.rename(n.name);
  }
  t.id = n;
  i.getProgramParent().references[n.name] = !0;
}
function A(e, t, n) {
  var r = {
    selfAssignment: !1,
    selfReference: !1,
    outerDeclar: n.getBindingIdentifier(t),
    references: [],
    name: t
  };
  var i = n.getOwnBinding(t);
  if (i) {
    if ("param" === i.kind) {
      r.selfReference = !0;
    }
  } else {
    if (r.outerDeclar || n.hasGlobal(t)) {
      n.traverse(e, E, r);
    }
  }
  return r;
}