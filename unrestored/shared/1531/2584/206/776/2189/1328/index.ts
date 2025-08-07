"use strict";

var r = require("../../../../36/2668/2689/703/index");
var i = require("../../../../38/607/1970/529");
var o = require("../../../../38/607/356");
var a = require("../../../../38/607/357/index");
var s = require("../../../../36/2668/220");
var c = require("../../../../36/2668/230");
var u = require("./1109/index").Syntax;
var l = require("../1110");
var f = require("../964");
var d = require("./1329").Definition;
var h = require("../../../../1036/1363/569");
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
    this.functionExpressionScope = false;
    this.directCallToEvalScope = false;
    this.thisFound = false;
    this.__left = [];
    this.upper = r;
    this.isStrict = function (e, t, n, r) {
      var i;
      if (e.upper && e.upper.isStrict) {
        return true;
      }
      if (n) {
        return true;
      }
      if ("class" === e.type || "module" === e.type) {
        return true;
      }
      if ("block" === e.type || "switch" === e.type) {
        return false;
      }
      if ("function" === e.type) {
        if (t.type === u.ArrowFunctionExpression && t.body.type !== u.BlockStatement) {
          return false;
        }
        if (!(i = t.type === u.Program ? t : t.body)) {
          return false;
        }
      } else {
        if ("global" !== e.type) {
          return false;
        }
        i = t;
      }
      if (r) {
        for (var o = 0, a = i.body.length; o < a; ++o) {
          var s = i.body[o];
          if (s.type !== u.DirectiveStatement) {
            break;
          }
          if ("\"use strict\"" === s.raw || "'use strict'" === s.raw) {
            return true;
          }
        }
      } else {
        for (var c = 0, l = i.body.length; c < l; ++c) {
          var f = i.body[c];
          if (f.type !== u.ExpressionStatement) {
            break;
          }
          var d = f.expression;
          if (d.type !== u.Literal || "string" !== typeof d.value) {
            break;
          }
          if (null !== d.raw && undefined !== d.raw) {
            if ("\"use strict\"" === d.raw || "'use strict'" === d.raw) {
              return true;
            }
          } else if ("use strict" === d.value) {
            return true;
          }
        }
      }
      return false;
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
        return false;
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
      return true;
    }
  }, {
    key: "__resolve",
    value: function (e) {
      var t = e.identifier.name;
      if (!this.set.has(t)) {
        return false;
      }
      var n = this.set.get(t);
      return !!this.__isValidResolution(e, n) && (n.references.push(e), n.stack = n.stack && e.from.variableScope === this.variableScope, e.tainted && (n.tainted = true, this.taints.set(n.name, true)), e.resolved = n, true);
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
      if (null !== t && undefined !== t) {
        var n = this.__declaredVariables.get(t);
        if (!(null !== n && undefined !== n)) {
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
      this.directCallToEvalScope = true;
      do {
        e.dynamic = true;
        e = e.upper;
      } while (e);
    }
  }, {
    key: "__detectThis",
    value: function () {
      this.thisFound = true;
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
      for (h(this.__isClosed(), "Scope should be closed."), h(e.type === u.Identifier, "Target should be identifier."), n = 0, r = this.references.length; n < r; ++n) {
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
      return true;
    }
  }, {
    key: "isThisMaterialized",
    value: function () {
      return true;
    }
  }, {
    key: "isUsedName",
    value: function (e) {
      if (this.set.has(e)) {
        return true;
      }
      for (var t = 0, n = this.through.length; t < n; ++t) {
        if (this.through[t].identifier.name === e) {
          return true;
        }
      }
      return false;
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
    (i = t.call(this, e, "global", null, r, false)).implicit = {
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
        this.__defineImplicit(l.pattern, new d(f.ImplicitGlobalVariable, l.pattern, l.node, null, null, null));
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
    return t.call(this, e, "module", r, i, false);
  }
  return n;
}(_);
var v = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    var o;
    s(this, n);
    (o = t.call(this, e, "function-expression-name", r, i, false)).__define(i.id, new d(f.FunctionName, i.id, i, null, null, null));
    o.functionExpressionScope = true;
    return o;
  }
  return n;
}(_);
var m = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "catch", r, i, false);
  }
  return n;
}(_);
var y = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "with", r, i, false);
  }
  c(n, [{
    key: "__close",
    value: function (e) {
      if (this.__shouldStaticallyClose(e)) {
        return r(i(n.prototype), "__close", this).call(this, e);
      }
      for (var t = 0, o = this.__left.length; t < o; ++t) {
        var a = this.__left[t];
        a.tainted = true;
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
    return t.call(this, e, "block", r, i, false);
  }
  return n;
}(_);
var w = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "switch", r, i, false);
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
        return false;
      }
      if (!this.isStatic()) {
        return true;
      }
      var e = this.set.get("arguments");
      h(e, "Always have arguments variable.");
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
      this.taints.set("arguments", true);
    }
  }, {
    key: "__isValidResolution",
    value: function (e, t) {
      if ("Program" === this.block.type) {
        return true;
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
    return t.call(this, e, "for", r, i, false);
  }
  return n;
}(_);
var C = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, r, i) {
    s(this, n);
    return t.call(this, e, "class", r, i, false);
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