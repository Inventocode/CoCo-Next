"use strict";

var r = require("../../../../3198/2668/220");
var a = require("../../../../3198/2668/230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var i = require("../../../../../1531/2584/1036/1363/569");
var o = require("../../3195/2717/index");
var s = o.callExpression;
var u = o.cloneNode;
var l = o.expressionStatement;
var p = o.identifier;
var f = o.importDeclaration;
var d = o.importDefaultSpecifier;
var c = o.importNamespaceSpecifier;
var y = o.importSpecifier;
var T = o.memberExpression;
var m = o.stringLiteral;
var S = o.variableDeclaration;
var E = o.variableDeclarator;
var b = function () {
  function e(t, n, a) {
    r(this, e);
    this._statements = [];
    this._resultName = null;
    this._scope = null;
    this._hub = null;
    this._importedSource = void 0;
    this._scope = n;
    this._hub = a;
    this._importedSource = t;
  }
  a(e, [{
    key: "done",
    value: function () {
      return {
        statements: this._statements,
        resultName: this._resultName
      };
    }
  }, {
    key: "import",
    value: function () {
      this._statements.push(f([], m(this._importedSource)));
      return this;
    }
  }, {
    key: "require",
    value: function () {
      this._statements.push(l(s(p("require"), [m(this._importedSource)])));
      return this;
    }
  }, {
    key: "namespace",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "namespace";
      var t = this._scope.generateUidIdentifier(e);
      var n = this._statements[this._statements.length - 1];
      i("ImportDeclaration" === n.type);
      i(0 === n.specifiers.length);
      n.specifiers = [c(t)];
      this._resultName = u(t);
      return this;
    }
  }, {
    key: "default",
    value: function (e) {
      e = this._scope.generateUidIdentifier(e);
      var t = this._statements[this._statements.length - 1];
      i("ImportDeclaration" === t.type);
      i(0 === t.specifiers.length);
      t.specifiers = [d(e)];
      this._resultName = u(e);
      return this;
    }
  }, {
    key: "named",
    value: function (e, t) {
      if ("default" === t) {
        return this.default(e);
      }
      e = this._scope.generateUidIdentifier(e);
      var n = this._statements[this._statements.length - 1];
      i("ImportDeclaration" === n.type);
      i(0 === n.specifiers.length);
      n.specifiers = [y(e, p(t))];
      this._resultName = u(e);
      return this;
    }
  }, {
    key: "var",
    value: function (e) {
      e = this._scope.generateUidIdentifier(e);
      var t = this._statements[this._statements.length - 1];
      if ("ExpressionStatement" !== t.type) {
        i(this._resultName);
        t = l(this._resultName);
        this._statements.push(t);
      }
      this._statements[this._statements.length - 1] = S("var", [E(e, t.expression)]);
      this._resultName = u(e);
      return this;
    }
  }, {
    key: "defaultInterop",
    value: function () {
      return this._interop(this._hub.addHelper("interopRequireDefault"));
    }
  }, {
    key: "wildcardInterop",
    value: function () {
      return this._interop(this._hub.addHelper("interopRequireWildcard"));
    }
  }, {
    key: "_interop",
    value: function (e) {
      var t = this._statements[this._statements.length - 1];
      if ("ExpressionStatement" === t.type) {
        t.expression = s(e, [t.expression]);
      } else {
        if ("VariableDeclaration" === t.type) {
          i(1 === t.declarations.length);
          t.declarations[0].init = s(e, [t.declarations[0].init]);
        } else {
          i.fail("Unexpected type.");
        }
      }
      return this;
    }
  }, {
    key: "prop",
    value: function (e) {
      var t = this._statements[this._statements.length - 1];
      if ("ExpressionStatement" === t.type) {
        t.expression = T(t.expression, p(e));
      } else {
        if ("VariableDeclaration" === t.type) {
          i(1 === t.declarations.length);
          t.declarations[0].init = T(t.declarations[0].init, p(e));
        } else {
          i.fail("Unexpected type:" + t.type);
        }
      }
      return this;
    }
  }, {
    key: "read",
    value: function (e) {
      this._resultName = T(this._resultName, p(e));
    }
  }]);
  return e;
}();
exports.default = b;