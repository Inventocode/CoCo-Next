"use strict";

var r = require("../../../../../../../3190/494");
var i = require("../../../../../220");
var a = require("../../../../../230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
require("../2743");
var s = require("./2927");
var o = require("../../../2624/index");
var l = o.VISITOR_KEYS;
o.assignmentExpression;
o.identifier;
o.toExpression;
o.variableDeclaration;
o.variableDeclarator;
var u = {
  ReferencedIdentifier: function (e, t) {
    var n = e.node;
    if (n.name === t.oldName) {
      n.name = t.newName;
    }
  },
  Scope: function (e, t) {
    if (!e.scope.bindingIdentifierEquals(t.oldName, t.binding.identifier)) {
      (function (e) {
        if (!e.isMethod() || !e.node.computed) {
          return void e.skip();
        }
        var t;
        var n = l[e.type];
        var i = r(n);
        try {
          for (i.s(); !(t = i.n()).done;) {
            var a = t.value;
            if ("key" !== a) {
              e.skipKey(a);
            }
          }
        } catch (s) {
          i.e(s);
        } finally {
          i.f();
        }
      })(e);
    }
  },
  "AssignmentExpression|Declaration|VariableDeclarator": function (e, t) {
    if (!e.isVariableDeclaration()) {
      var n = e.getOuterBindingIdentifiers();
      for (var r in n) if (r === t.oldName) {
        n[r].name = t.newName;
      }
    }
  }
};
var c = function () {
  function e(t, n, r) {
    i(this, e);
    this.newName = r;
    this.oldName = n;
    this.binding = t;
  }
  a(e, [{
    key: "maybeConvertFromExportDeclaration",
    value: function (e) {
      var t = e.parentPath;
      if (t.isExportDeclaration()) {
        if (!(t.isExportDefaultDeclaration() && !t.get("declaration").node.id)) {
          (0, s.default)(t);
        }
      }
    }
  }, {
    key: "maybeConvertFromClassFunctionDeclaration",
    value: function (e) {}
  }, {
    key: "maybeConvertFromClassFunctionExpression",
    value: function (e) {}
  }, {
    key: "rename",
    value: function (e) {
      var t = this;
      var n = this.binding;
      var r = this.oldName;
      var i = this.newName;
      var a = n.scope;
      var s = n.path.find(function (e) {
        return e.isDeclaration() || e.isFunctionExpression() || e.isClassExpression();
      });
      if (s) {
        if (s.getOuterBindingIdentifiers()[r] === n.identifier) {
          this.maybeConvertFromExportDeclaration(s);
        }
      }
      var o = e || a.block;
      if ("SwitchStatement" === (null == o ? void 0 : o.type)) {
        o.cases.forEach(function (e) {
          a.traverse(e, u, t);
        });
      } else {
        a.traverse(o, u, this);
      }
      if (!e) {
        a.removeOwnBinding(r);
        a.bindings[i] = n;
        this.binding.identifier.name = i;
      }
      if (s) {
        this.maybeConvertFromClassFunctionDeclaration(s);
        this.maybeConvertFromClassFunctionExpression(s);
      }
    }
  }]);
  return e;
}();
exports.default = c;