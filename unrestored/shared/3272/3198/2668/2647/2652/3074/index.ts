"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.arrowFunctionToExpression = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  var t = e.allowInsertArrow;
  var n = void 0 === t || t;
  var r = e.specCompliant;
  var a = void 0 !== r && r;
  var s = e.noNewArrows;
  var o = void 0 === s ? !a : s;
  if (!this.isArrowFunctionExpression()) {
    throw this.buildCodeFrameError("Cannot convert non-arrow function to a function expression.");
  }
  var l = w(this, o, n);
  if (this.ensureBlock(), this.node.type = "FunctionExpression", !o) {
    var c = l ? null : this.parentPath.scope.generateUidIdentifier("arrowCheckId");
    if (c) {
      this.parentPath.scope.push({
        id: c,
        init: g([])
      });
    }
    this.get("body").unshiftContainer("body", p(u(this.hub.addHelper("newArrowCheck"), [A(), f(c ? c.name : l)])));
    this.replaceWith(u(y((0, i.default)(this, !0) || this.node, f("bind")), [c ? f(c.name) : A()]));
  }
};
exports.arrowFunctionToShadowed = function () {
  if (!this.isArrowFunctionExpression()) {
    return;
  }
  this.arrowFunctionToExpression();
};
exports.ensureBlock = function () {
  var e = this.get("body");
  var t = e.node;
  if (Array.isArray(e)) {
    throw new Error("Can't convert array path to a block statement");
  }
  if (!t) {
    throw new Error("Can't convert node without a body");
  }
  if (e.isBlockStatement()) {
    return t;
  }
  var n;
  var r;
  var i = [];
  var a = "body";
  if (e.isStatement()) {
    r = "body";
    n = 0;
    i.push(e.node);
  } else {
    a += ".body.0";
    if (this.isFunction()) {
      n = "argument";
      i.push(b(e.node));
    } else {
      n = "expression";
      i.push(p(e.node));
    }
  }
  this.node.body = l(i);
  var s = this.get(a);
  e.setup(s, r ? s.node[r] : s.node, r, n);
  return this.node;
};
exports.toComputedKey = function () {
  var e;
  if (this.isMemberExpression()) {
    e = this.node.property;
  } else {
    if (!this.isProperty() && !this.isMethod()) {
      throw new ReferenceError("todo");
    }
    e = this.node.key;
  }
  if (!this.node.computed) {
    if (d(e)) {
      e = x(e.name);
    }
  }
  return e;
};
exports.unwrapFunctionEnvironment = function () {
  if (!this.isArrowFunctionExpression() && !this.isFunctionExpression() && !this.isFunctionDeclaration()) {
    throw this.buildCodeFrameError("Can only unwrap the environment of a function.");
  }
  w(this);
};
var r = require("../../../2633/index");
var i = require("./3075/index");
var a = r.arrowFunctionExpression;
var s = r.assignmentExpression;
var o = r.binaryExpression;
var l = r.blockStatement;
var u = r.callExpression;
var c = r.conditionalExpression;
var p = r.expressionStatement;
var f = r.identifier;
var d = r.isIdentifier;
var h = r.jsxIdentifier;
var y = r.memberExpression;
var m = r.metaProperty;
var v = r.numericLiteral;
var g = r.objectExpression;
var T = r.restElement;
var b = r.returnStatement;
var S = r.sequenceExpression;
var E = r.spreadElement;
var x = r.stringLiteral;
var P = r.super;
var A = r.thisExpression;
var k = r.unaryExpression;
function w(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  var r = e.findParent(function (e) {
    return e.isFunction() && !e.isArrowFunctionExpression() || e.isProgram() || e.isClassProperty({
      static: !1
    });
  });
  var i = "constructor" === (null == r ? void 0 : r.node.kind);
  if (r.isClassProperty()) {
    throw e.buildCodeFrameError("Unable to transform arrow inside class property");
  }
  var a;
  var s = j(e);
  var l = s.thisPaths;
  var p = s.argumentsPaths;
  var d = s.newTargetPaths;
  var v = s.superProps;
  var g = s.superCalls;
  if (i && g.length > 0) {
    if (!n) {
      throw g[0].buildCodeFrameError("Unable to handle nested super() usage in arrow");
    }
    var T = [];
    r.traverse({
      Function: function (e) {
        if (!e.isArrowFunctionExpression()) {
          e.skip();
        }
      },
      ClassProperty: function (e) {
        e.skip();
      },
      CallExpression: function (e) {
        if (e.get("callee").isSuper()) {
          T.push(e);
        }
      }
    });
    var b = N(r);
    T.forEach(function (e) {
      var t = f(b);
      t.loc = e.node.callee.loc;
      e.get("callee").replaceWith(t);
    });
  }
  if (p.length > 0) {
    var S = D(r, "arguments", function () {
      var e = function () {
        return f("arguments");
      };
      return r.scope.path.isProgram() ? c(o("===", k("typeof", e()), x("undefined")), r.scope.buildUndefinedNode(), e()) : e();
    });
    p.forEach(function (e) {
      var t = f(S);
      t.loc = e.node.loc;
      e.replaceWith(t);
    });
  }
  if (d.length > 0) {
    var E = D(r, "newtarget", function () {
      return m(f("new"), f("target"));
    });
    d.forEach(function (e) {
      var t = f(E);
      t.loc = e.node.loc;
      e.replaceWith(t);
    });
  }
  if (v.length > 0) {
    if (!n) {
      throw v[0].buildCodeFrameError("Unable to handle nested super.prop usage");
    }
    var P = v.reduce(function (e, t) {
      return e.concat(O(t));
    }, []);
    P.forEach(function (e) {
      var t = e.node.computed ? "" : e.get("property").node.name;
      var n = e.parentPath.isAssignmentExpression({
        left: e.node
      });
      var i = e.parentPath.isCallExpression({
        callee: e.node
      });
      var a = _(r, n, t);
      var s = [];
      if (e.node.computed && s.push(e.get("property").node), n) {
        var o = e.parentPath.node.right;
        s.push(o);
      }
      var c = u(f(a), s);
      if (i) {
        e.parentPath.unshiftContainer("arguments", A());
        e.replaceWith(y(c, f("call")));
        l.push(e.parentPath.get("arguments.0"));
      } else {
        if (n) {
          e.parentPath.replaceWith(c);
        } else {
          e.replaceWith(c);
        }
      }
    });
  }
  if (l.length > 0 || !t) {
    a = I(r, i);
    if (t || i && C(r)) {
      l.forEach(function (e) {
        var t = e.isJSX() ? h(a) : f(a);
        t.loc = e.node.loc;
        e.replaceWith(t);
      });
      if (!t) {
        a = null;
      }
    }
  }
  return a;
}
function O(e) {
  if (e.parentPath.isAssignmentExpression() && "=" !== e.parentPath.node.operator) {
    var t = e.parentPath;
    var n = t.node.operator.slice(0, -1);
    var r = t.node.right;
    if (t.node.operator = "=", e.node.computed) {
      var i = e.scope.generateDeclaredUidIdentifier("tmp");
      t.get("left").replaceWith(y(e.node.object, s("=", i, e.node.property), !0));
      t.get("right").replaceWith(o(n, y(e.node.object, f(i.name), !0), r));
    } else {
      t.get("left").replaceWith(y(e.node.object, e.node.property));
      t.get("right").replaceWith(o(n, y(e.node.object, f(e.node.property.name)), r));
    }
    return [t.get("left"), t.get("right").get("left")];
  }
  if (e.parentPath.isUpdateExpression()) {
    var a = e.parentPath;
    var l = e.scope.generateDeclaredUidIdentifier("tmp");
    var u = e.node.computed ? e.scope.generateDeclaredUidIdentifier("prop") : null;
    var c = [s("=", l, y(e.node.object, u ? s("=", u, e.node.property) : e.node.property, e.node.computed)), s("=", y(e.node.object, u ? f(u.name) : e.node.property, e.node.computed), o("+", f(l.name), v(1)))];
    if (!e.parentPath.node.prefix) {
      c.push(f(l.name));
    }
    a.replaceWith(S(c));
    return [a.get("expressions.0.right"), a.get("expressions.1.left")];
  }
  return [e];
}
function C(e) {
  return e.isClassMethod() && !!e.parentPath.parentPath.node.superClass;
}
function I(e, t) {
  return D(e, "this", function (n) {
    if (!t || !C(e)) {
      return A();
    }
    var r = new WeakSet();
    e.traverse({
      Function: function (e) {
        if (!e.isArrowFunctionExpression()) {
          e.skip();
        }
      },
      ClassProperty: function (e) {
        e.skip();
      },
      CallExpression: function (e) {
        if (e.get("callee").isSuper()) {
          if (!r.has(e.node)) {
            r.add(e.node);
            e.replaceWithMultiple([e.node, s("=", f(n), f("this"))]);
          }
        }
      }
    });
  });
}
function N(e) {
  return D(e, "supercall", function () {
    var t = e.scope.generateUidIdentifier("args");
    return a([T(t)], u(P(), [E(f(t.name))]));
  });
}
function _(e, t, n) {
  return D(e, "superprop_".concat(t ? "set" : "get", ":").concat(n || ""), function () {
    var r;
    var i = [];
    if (n) {
      r = y(P(), f(n));
    } else {
      var o = e.scope.generateUidIdentifier("prop");
      i.unshift(o);
      r = y(P(), f(o.name), !0);
    }
    if (t) {
      var l = e.scope.generateUidIdentifier("value");
      i.push(l);
      r = s("=", r, f(l.name));
    }
    return a(i, r);
  });
}
function D(e, t, n) {
  var r = "binding:" + t;
  var i = e.getData(r);
  if (!i) {
    var a = e.scope.generateUidIdentifier(t);
    i = a.name;
    e.setData(r, i);
    e.scope.push({
      id: a,
      init: n(i)
    });
  }
  return i;
}
function j(e) {
  var t = [];
  var n = [];
  var r = [];
  var i = [];
  var a = [];
  e.traverse({
    ClassProperty: function (e) {
      e.skip();
    },
    Function: function (e) {
      if (!e.isArrowFunctionExpression()) {
        e.skip();
      }
    },
    ThisExpression: function (e) {
      t.push(e);
    },
    JSXIdentifier: function (e) {
      if ("this" === e.node.name && (e.parentPath.isJSXMemberExpression({
        object: e.node
      }) || e.parentPath.isJSXOpeningElement({
        name: e.node
      }))) {
        t.push(e);
      }
    },
    CallExpression: function (e) {
      if (e.get("callee").isSuper()) {
        a.push(e);
      }
    },
    MemberExpression: function (e) {
      if (e.get("object").isSuper()) {
        i.push(e);
      }
    },
    ReferencedIdentifier: function (e) {
      if ("arguments" === e.node.name) {
        var t = e.scope;
        do {
          if (t.hasOwnBinding("arguments")) {
            return void t.rename("arguments");
          }
          if (t.path.isFunction() && !t.path.isArrowFunctionExpression()) {
            break;
          }
        } while (t = t.parent);
        n.push(e);
      }
    },
    MetaProperty: function (e) {
      if (e.get("meta").isIdentifier({
        name: "new"
      }) && e.get("property").isIdentifier({
        name: "target"
      })) {
        r.push(e);
      }
    }
  });
  return {
    thisPaths: t,
    argumentsPaths: n,
    newTargetPaths: r,
    superProps: i,
    superCalls: a
  };
}