"use strict";

var r = require("../../../../../3262/3188/2658/2679/703/index");
var i = require("../../../../../3262/3188/2658/2679/529");
var o = require("../../../../../3262/3188/2658/2679/356/index");
var a = require("../../../../../3262/3188/2658/2679/357/index");
var s = require("../../../../../3262/3188/2658/220");
var c = require("../../../../../3262/3188/2658/230");
var u = require("./2185/1106/index").Syntax;
var l = require("./1107");
var f = require("./963");
var h = require("./2185/1322").Definition;
var d = require("../../../1035/1356/569");
function p(e) {
  return e.type === f.ClassName || e.type === f.Variable && "var" !== e.parent.kind;
}
var _ = function () {
  function e(t, n, r, i, o) {
    s(this, e);
    this.type = n;
    this.set = new Map();
    this.taints = new Map();
    this.dynamic = "global" === this.type || "with" === this.type;
    this.block = i;
    this.through = [];
    this.variables = [];
    this.references = [];
    this.variableScope = "global" === this.type || "function" === this.type || "module" === this.type ? this : r.variableScope;
    this.functionExpressionScope = !1;
    this.directCallToEvalScope = !1;
    this.thisFound = !1;
    this.__left = [];
    this.upper = r;
    this.isStrict = function (e, t, n, r) {
      var i;
      if (e.upper && e.upper.isStrict) {
        return !0;
      }
      if (n) {
        return !0;
      }
      if ("class" === e.type || "module" === e.type) {
        return !0;
      }
      if ("block" === e.type || "switch" === e.type) {
        return !1;
      }
      if ("function" === e.type) {
        if (t.type === u.ArrowFunctionExpression && t.body.type !== u.BlockStatement) {
          return !1;
        }
        if (!(i = t.type === u.Program ? t : t.body)) {
          return !1;
        }
      } else {
        if ("global" !== e.type) {
          return !1;
        }
        i = t;
      }
      if (r) {
        for (var o = 0, a = i.body.length; o < a; ++o) {
          var s = i.body[o];
          if (s.type !== u.DirectiveStatement) {
            break;
          }
          if ('"use strict"' === s.raw || "'use strict'" === s.raw) {
            return !0;
          }
        }
      } else {
        for (var c = 0, l = i.body.length; c < l; ++c) {
          var f = i.body[c];
          if (f.type !== u.ExpressionStatement) {
            break;
          }
          var h = f.expression;
          if (h.type !== u.Literal || "string" !== typeof h.value) {
            break;
          }
          if (null !== h.raw && void 0 !== h.raw) {
            if ('"use strict"' === h.raw || "'use strict'" === h.raw) {
              return !0;
            }
          } else if ("use strict" === h.value) {
            return !0;
          }
        }
      }
      return !1;
    }(this, i, o, t.__useDirective());
    this.childScopes = [];
    if (this.upper) {
      this.upper.childScopes.push(this);
    }
    this.__declaredVariables = t.__declaredVariables;
    (function (e, t) {
      e.scopes.push(t);
      var n = e.__nodeToScope.get(t.block);
      if (n) {
        n.push(t);
      } else {
        e.__nodeToScope.set(t.block, [t]);
      }
    })(t, this);
  }
  c(e, [{
    key: "__shouldStaticallyClose",
    value: function (e) {
      return !this.dynamic || e.__isOptimistic();
    }
  }, {
    key: "__shouldStaticallyCloseForGlobal",
    value: function (e) {
      var t = e.identifier.name;
      if (!this.set.has(t)) {
        return !1;
      }
      var n = this.set.get(t).defs;
      return n.length > 0 && n.every(p);
    }
  }, {
    key: "__staticCloseRef",
    value: function (e) {
      if (!this.__resolve(e)) {
        this.__delegateToUpperScope(e);
      }
    }
  }, {
    key: "__dynamicCloseRef",
    value: function (e) {
      var t = this;
      do {
        t.through.push(e);
        t = t.upper;
      } while (t);
    }
  }, {
    key: "__globalCloseRef",
    value: function (e) {
      if (this.__shouldStaticallyCloseForGlobal(e)) {
        this.__staticCloseRef(e);
      } else {
        this.__dynamicCloseRef(e);
      }
    }
  }, {
    key: "__close",
    value: function (e) {
      var t;
      t = this.__shouldStaticallyClose(e) ? this.__staticCloseRef : "global" !== this.type ? this.__dynamicCloseRef : this.__globalCloseRef;
      for (var n = 0, r = this.__left.length; n < r; ++n) {
        var i = this.__left[n];
        t.call(this, i);
      }
      this.__left = null;
      return this.upper;
    }
  }, {
    key: "__isValidResolution",
    value: function (e, t) {
      return !0;
    }
  }, {
    key: "__resolve",
    value: function (e) {
      var t = e.identifier.name;
      if (!this.set.has(t)) {
        return !1;
      }
      var n = this.set.get(t);
      return !!this.__isValidResolution(e, n) && (n.references.push(e), n.stack = n.stack && e.from.variableScope === this.variableScope, e.tainted && (n.tainted = !0, this.taints.set(n.name, !0)), e.resolved = n, !0);
    }
  }, {
    key: "__delegateToUpperScope",
    value: function (e) {
      if (this.upper) {
        this.upper.__left.push(e);
      }
      this.through.push(e);
    }
  }, {
    key: "__addDeclaredVariablesOfNode",
    value: function (e, t) {
      if (null !== t && void 0 !== t) {
        var n = this.__declaredVariables.get(t);
        if (!(null !== n && void 0 !== n)) {
          n = [];
          this.__declaredVariables.set(t, n);
        }
        if (-1 === n.indexOf(e)) {
          n.push(e);
        }
      }
    }
  }, {
    key: "__defineGeneric",
    value: function (e, t, n, r, i) {
      var o;
      if (!(o = t.get(e))) {
        o = new f(e, this);
        t.set(e, o);
        n.push(o);
      }
      if (i) {
        o.defs.push(i);
        this.__addDeclaredVariablesOfNode(o, i.node);
        this.__addDeclaredVariablesOfNode(o, i.parent);
      }
      if (r) {
        o.identifiers.push(r);
      }
    }
  }, {
    key: "__define",
    value: function (e, t) {
      if (e && e.type === u.Identifier) {
        this.__defineGeneric(e.name, this.set, this.variables, e, t);
      }
    }
  }, {
    key: "__referencing",
    value: function (e, t, n, r, i, o) {
      if (e && e.type === u.Identifier && "super" !== e.name) {
        var a = new l(e, this, t || l.READ, n, r, !!i, !!o);
        this.references.push(a);
        this.__left.push(a);
      }
    }
  }, {
    key: "__detectEval",
    value: function () {
      var e = this;
      this.directCallToEvalScope = !0;
      do {
        e.dynamic = !0;
        e = e.upper;
      } while (e);
    }
  }, {
    key: "__detectThis",
    value: function () {
      this.thisFound = !0;
    }
  }, {
    key: "__isClosed",
    value: function () {
      return null === this.__left;
    }
  }, {
    key: "resolve",
    value: function (e) {
      var t;
      var n;
      var r;
      for (d(this.__isClosed(), "Scope should be closed."), d(e.type === u.Identifier, "Target should be identifier."), n = 0, r = this.references.length; n < r; ++n) {
        if ((t = this.references[n]).identifier === e) {
          return t;
        }
      }
      return null;
    }
  }, {
    key: "isStatic",
    value: function () {
      return !this.dynamic;
    }
  }, {
    key: "isArgumentsMaterialized",
    value: function () {
      return !0;
    }
  }, {
    key: "isThisMaterialized",
    value: function () {
      return !0;
    }
  }, {
    key: "isUsedName",
    value: function (e) {
      if (this.set.has(e)) {
        return !0;
      }
      for (var t = 0, n = this.through.length; t < n; ++t) {
        if (this.through[t].identifier.name === e) {
          return !0;
        }
      }
      return !1;
    }
  }]);
  return e;
}();
var A = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r) {
    var i;
    s(this, n);
    (i = t.call(this, e, "global", null, r, !1)).implicit = {
      set: new Map(),
      variables: [],
      left: []
    };
    return i;
  }
  c(n, [{
    key: "__close",
    value: function (e) {
      for (var t = [], o = 0, a = this.__left.length; o < a; ++o) {
        var s = this.__left[o];
        if (s.__maybeImplicitGlobal && !this.set.has(s.identifier.name)) {
          t.push(s.__maybeImplicitGlobal);
        }
      }
      for (var c = 0, u = t.length; c < u; ++c) {
        var l = t[c];
        this.__defineImplicit(l.pattern, new h(f.ImplicitGlobalVariable, l.pattern, l.node, null, null, null));
      }
      this.implicit.left = this.__left;
      return r(i(n.prototype), "__close", this).call(this, e);
    }
  }, {
    key: "__defineImplicit",
    value: function (e, t) {
      if (e && e.type === u.Identifier) {
        this.__defineGeneric(e.name, this.implicit.set, this.implicit.variables, e, t);
      }
    }
  }]);
  return n;
}(_);
var g = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "module", r, i, !1);
  }
  return n;
}(_);
var v = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    var o;
    s(this, n);
    (o = t.call(this, e, "function-expression-name", r, i, !1)).__define(i.id, new h(f.FunctionName, i.id, i, null, null, null));
    o.functionExpressionScope = !0;
    return o;
  }
  return n;
}(_);
var m = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "catch", r, i, !1);
  }
  return n;
}(_);
var y = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "with", r, i, !1);
  }
  c(n, [{
    key: "__close",
    value: function (e) {
      if (this.__shouldStaticallyClose(e)) {
        return r(i(n.prototype), "__close", this).call(this, e);
      }
      for (var t = 0, o = this.__left.length; t < o; ++t) {
        var a = this.__left[t];
        a.tainted = !0;
        this.__delegateToUpperScope(a);
      }
      this.__left = null;
      return this.upper;
    }
  }]);
  return n;
}(_);
var b = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "block", r, i, !1);
  }
  return n;
}(_);
var w = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "switch", r, i, !1);
  }
  return n;
}(_);
var E = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i, o) {
    var a;
    s(this, n);
    if ((a = t.call(this, e, "function", r, i, o)).block.type !== u.ArrowFunctionExpression) {
      a.__defineArguments();
    }
    return a;
  }
  c(n, [{
    key: "isArgumentsMaterialized",
    value: function () {
      if (this.block.type === u.ArrowFunctionExpression) {
        return !1;
      }
      if (!this.isStatic()) {
        return !0;
      }
      var e = this.set.get("arguments");
      d(e, "Always have arguments variable.");
      return e.tainted || 0 !== e.references.length;
    }
  }, {
    key: "isThisMaterialized",
    value: function () {
      return !this.isStatic() || this.thisFound;
    }
  }, {
    key: "__defineArguments",
    value: function () {
      this.__defineGeneric("arguments", this.set, this.variables, null, null);
      this.taints.set("arguments", !0);
    }
  }, {
    key: "__isValidResolution",
    value: function (e, t) {
      if ("Program" === this.block.type) {
        return !0;
      }
      var n = this.block.body.range[0];
      return !(t.scope === this && e.identifier.range[0] < n && t.defs.every(function (e) {
        return e.name.range[0] >= n;
      }));
    }
  }]);
  return n;
}(_);
var x = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "for", r, i, !1);
  }
  return n;
}(_);
var C = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "class", r, i, !1);
  }
  return n;
}(_);
module.exports = {
  Scope: _,
  GlobalScope: A,
  ModuleScope: g,
  FunctionExpressionNameScope: v,
  CatchScope: m,
  WithScope: y,
  BlockScope: b,
  SwitchScope: w,
  FunctionScope: E,
  ForScope: x,
  ClassScope: C
};