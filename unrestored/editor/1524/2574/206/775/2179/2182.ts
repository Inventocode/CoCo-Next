"use strict";

import * as r from "../../../../../3262/3188/2658/220";
import * as i from "../../../../../3262/3188/2658/230";
import * as o from "./1321";
import * as a from "../../../1035/1356/569";
var s = o.GlobalScope;
var c = o.CatchScope;
var u = o.WithScope;
var l = o.ModuleScope;
var f = o.ClassScope;
var h = o.SwitchScope;
var d = o.FunctionScope;
var p = o.ForScope;
var _ = o.FunctionExpressionNameScope;
var A = o.BlockScope;
var g = function () {
  function e(t) {
    r(this, e);
    this.scopes = [];
    this.globalScope = null;
    this.__nodeToScope = new WeakMap();
    this.__currentScope = null;
    this.__options = t;
    this.__declaredVariables = new WeakMap();
  }
  i(e, [{
    key: "__useDirective",
    value: function () {
      return this.__options.directive;
    }
  }, {
    key: "__isOptimistic",
    value: function () {
      return this.__options.optimistic;
    }
  }, {
    key: "__ignoreEval",
    value: function () {
      return this.__options.ignoreEval;
    }
  }, {
    key: "__isNodejsScope",
    value: function () {
      return this.__options.nodejsScope;
    }
  }, {
    key: "isModule",
    value: function () {
      return "module" === this.__options.sourceType;
    }
  }, {
    key: "isImpliedStrict",
    value: function () {
      return this.__options.impliedStrict;
    }
  }, {
    key: "isStrictModeSupported",
    value: function () {
      return this.__options.ecmaVersion >= 5;
    }
  }, {
    key: "__get",
    value: function (e) {
      return this.__nodeToScope.get(e);
    }
  }, {
    key: "getDeclaredVariables",
    value: function (e) {
      return this.__declaredVariables.get(e) || [];
    }
  }, {
    key: "acquire",
    value: function (e, t) {
      function n(e) {
        return "function" !== e.type || !e.functionExpressionScope;
      }
      var r = this.__get(e);
      if (!r || 0 === r.length) {
        return null;
      }
      if (1 === r.length) {
        return r[0];
      }
      if (t) {
        for (var i = r.length - 1; i >= 0; --i) {
          var o = r[i];
          if (n(o)) {
            return o;
          }
        }
      } else {
        for (var a = 0, s = r.length; a < s; ++a) {
          var c = r[a];
          if (n(c)) {
            return c;
          }
        }
      }
      return null;
    }
  }, {
    key: "acquireAll",
    value: function (e) {
      return this.__get(e);
    }
  }, {
    key: "release",
    value: function (e, t) {
      var n = this.__get(e);
      if (n && n.length) {
        var r = n[0].upper;
        return r ? this.acquire(r.block, t) : null;
      }
      return null;
    }
  }, {
    key: "attach",
    value: function () {}
  }, {
    key: "detach",
    value: function () {}
  }, {
    key: "__nestScope",
    value: function (e) {
      if (e instanceof s) {
        a(null === this.__currentScope);
        this.globalScope = e;
      }
      this.__currentScope = e;
      return e;
    }
  }, {
    key: "__nestGlobalScope",
    value: function (e) {
      return this.__nestScope(new s(this, e));
    }
  }, {
    key: "__nestBlockScope",
    value: function (e) {
      return this.__nestScope(new A(this, this.__currentScope, e));
    }
  }, {
    key: "__nestFunctionScope",
    value: function (e, t) {
      return this.__nestScope(new d(this, this.__currentScope, e, t));
    }
  }, {
    key: "__nestForScope",
    value: function (e) {
      return this.__nestScope(new p(this, this.__currentScope, e));
    }
  }, {
    key: "__nestCatchScope",
    value: function (e) {
      return this.__nestScope(new c(this, this.__currentScope, e));
    }
  }, {
    key: "__nestWithScope",
    value: function (e) {
      return this.__nestScope(new u(this, this.__currentScope, e));
    }
  }, {
    key: "__nestClassScope",
    value: function (e) {
      return this.__nestScope(new f(this, this.__currentScope, e));
    }
  }, {
    key: "__nestSwitchScope",
    value: function (e) {
      return this.__nestScope(new h(this, this.__currentScope, e));
    }
  }, {
    key: "__nestModuleScope",
    value: function (e) {
      return this.__nestScope(new l(this, this.__currentScope, e));
    }
  }, {
    key: "__nestFunctionExpressionNameScope",
    value: function (e) {
      return this.__nestScope(new _(this, this.__currentScope, e));
    }
  }, {
    key: "__isES6",
    value: function () {
      return this.__options.ecmaVersion >= 6;
    }
  }]);
  return e;
}();
module.exports = g;