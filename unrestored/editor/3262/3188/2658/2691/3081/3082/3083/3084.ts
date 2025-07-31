"use strict";

var r = require("../../../../220");
var i = require("../../../../230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var a = require("../../../../../../../1524/2574/1035/1356/569");
var s = require("../../../../2623/index");
var o = s.callExpression;
var l = s.cloneNode;
var u = s.expressionStatement;
var c = s.identifier;
var p = s.importDeclaration;
var f = s.importDefaultSpecifier;
var d = s.importNamespaceSpecifier;
var h = s.importSpecifier;
var y = s.memberExpression;
var m = s.stringLiteral;
var v = s.variableDeclaration;
var g = s.variableDeclarator;
var T = function () {
  function e(t, n, i) {
    r(this, e);
    this._statements = [];
    this._resultName = null;
    this._scope = null;
    this._hub = null;
    this._importedSource = void 0;
    this._scope = n;
    this._hub = i;
    this._importedSource = t;
  }
  i(e, [{
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
      this._statements.push(p([], m(this._importedSource)));
      return this;
    }
  }, {
    key: "require",
    value: function () {
      this._statements.push(u(o(c("require"), [m(this._importedSource)])));
      return this;
    }
  }, {
    key: "namespace",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "namespace";
      var t = this._scope.generateUidIdentifier(e);
      var n = this._statements[this._statements.length - 1];
      a("ImportDeclaration" === n.type);
      a(0 === n.specifiers.length);
      n.specifiers = [d(t)];
      this._resultName = l(t);
      return this;
    }
  }, {
    key: "default",
    value: function (e) {
      e = this._scope.generateUidIdentifier(e);
      var t = this._statements[this._statements.length - 1];
      a("ImportDeclaration" === t.type);
      a(0 === t.specifiers.length);
      t.specifiers = [f(e)];
      this._resultName = l(e);
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
      a("ImportDeclaration" === n.type);
      a(0 === n.specifiers.length);
      n.specifiers = [h(e, c(t))];
      this._resultName = l(e);
      return this;
    }
  }, {
    key: "var",
    value: function (e) {
      e = this._scope.generateUidIdentifier(e);
      var t = this._statements[this._statements.length - 1];
      if ("ExpressionStatement" !== t.type) {
        a(this._resultName);
        t = u(this._resultName);
        this._statements.push(t);
      }
      this._statements[this._statements.length - 1] = v("var", [g(e, t.expression)]);
      this._resultName = l(e);
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
        t.expression = o(e, [t.expression]);
      } else {
        if ("VariableDeclaration" === t.type) {
          a(1 === t.declarations.length);
          t.declarations[0].init = o(e, [t.declarations[0].init]);
        } else {
          a.fail("Unexpected type.");
        }
      }
      return this;
    }
  }, {
    key: "prop",
    value: function (e) {
      var t = this._statements[this._statements.length - 1];
      if ("ExpressionStatement" === t.type) {
        t.expression = y(t.expression, c(e));
      } else {
        if ("VariableDeclaration" === t.type) {
          a(1 === t.declarations.length);
          t.declarations[0].init = y(t.declarations[0].init, c(e));
        } else {
          a.fail("Unexpected type:" + t.type);
        }
      }
      return this;
    }
  }, {
    key: "read",
    value: function (e) {
      this._resultName = y(this._resultName, c(e));
    }
  }]);
  return e;
}();
exports.default = T;