"use strict";

var r = require("../../../../../3200/624/index");
var i = require("../../../220");
var a = require("../../../230");
var s = require("../../../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var o = require("../../../2633/index");
var l = o;
var u = o.react;
var c = l.cloneNode;
var p = l.jsxExpressionContainer;
var f = l.variableDeclaration;
var d = l.variableDeclarator;
var h = {
  ReferencedIdentifier: function (e, t) {
    if (!e.isJSXIdentifier() || !u.isCompatTag(e.node.name) || e.parentPath.isJSXMemberExpression()) {
      if ("this" === e.node.name) {
        var n = e.scope;
        do {
          if (n.path.isFunction() && !n.path.isArrowFunctionExpression()) {
            break;
          }
        } while (n = n.parent);
        if (n) {
          t.breakOnScopePaths.push(n.path);
        }
      }
      var r = e.scope.getBinding(e.node.name);
      if (r) {
        var i;
        var a = s(r.constantViolations);
        try {
          for (a.s(); !(i = a.n()).done;) {
            if (i.value.scope !== r.path.scope) {
              t.mutableBinding = !0;
              return void e.stop();
            }
          }
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
        if (r === t.scope.getBinding(e.node.name)) {
          t.bindings[e.node.name] = r;
        }
      }
    }
  }
};
var y = function () {
  function e(t, n) {
    i(this, e);
    this.breakOnScopePaths = void 0;
    this.bindings = void 0;
    this.mutableBinding = void 0;
    this.scopes = void 0;
    this.scope = void 0;
    this.path = void 0;
    this.attachAfter = void 0;
    this.breakOnScopePaths = [];
    this.bindings = {};
    this.mutableBinding = !1;
    this.scopes = [];
    this.scope = n;
    this.path = t;
    this.attachAfter = !1;
  }
  a(e, [{
    key: "isCompatibleScope",
    value: function (e) {
      for (var t = 0, n = Object.keys(this.bindings); t < n.length; t++) {
        var r = n[t];
        var i = this.bindings[r];
        if (!e.bindingIdentifierEquals(r, i.identifier)) {
          return !1;
        }
      }
      return !0;
    }
  }, {
    key: "getCompatibleScopes",
    value: function () {
      var e = this.path.scope;
      do {
        if (!this.isCompatibleScope(e)) {
          break;
        }
        this.scopes.push(e);
        if (this.breakOnScopePaths.indexOf(e.path) >= 0) {
          break;
        }
      } while (e = e.parent);
    }
  }, {
    key: "getAttachmentPath",
    value: function () {
      var e = this._getAttachmentPath();
      if (e) {
        var t = e.scope;
        if (t.path === e) {
          t = e.scope.parent;
        }
        if (t.path.isProgram() || t.path.isFunction()) {
          for (var n = 0, r = Object.keys(this.bindings); n < r.length; n++) {
            var i = r[n];
            if (t.hasOwnBinding(i)) {
              var a = this.bindings[i];
              if ("param" !== a.kind && "params" !== a.path.parentKey) {
                if (this.getAttachmentParentForPath(a.path).key >= e.key) {
                  this.attachAfter = !0;
                  e = a.path;
                  var o;
                  var l = s(a.constantViolations);
                  try {
                    for (l.s(); !(o = l.n()).done;) {
                      var u = o.value;
                      if (this.getAttachmentParentForPath(u).key > e.key) {
                        e = u;
                      }
                    }
                  } catch (c) {
                    l.e(c);
                  } finally {
                    l.f();
                  }
                }
              }
            }
          }
        }
        return e;
      }
    }
  }, {
    key: "_getAttachmentPath",
    value: function () {
      var e = this.scopes.pop();
      if (e) {
        if (e.path.isFunction()) {
          if (!this.hasOwnParamBindings(e)) {
            return this.getNextScopeAttachmentParent();
          }
          if (this.scope === e) {
            return;
          }
          for (var t = e.path.get("body").get("body"), n = 0; n < t.length; n++) {
            if (!t[n].node._blockHoist) {
              return t[n];
            }
          }
        } else if (e.path.isProgram()) {
          return this.getNextScopeAttachmentParent();
        }
      }
    }
  }, {
    key: "getNextScopeAttachmentParent",
    value: function () {
      var e = this.scopes.pop();
      if (e) {
        return this.getAttachmentParentForPath(e.path);
      }
    }
  }, {
    key: "getAttachmentParentForPath",
    value: function (e) {
      do {
        if (!e.parentPath || Array.isArray(e.container) && e.isStatement()) {
          return e;
        }
      } while (e = e.parentPath);
    }
  }, {
    key: "hasOwnParamBindings",
    value: function (e) {
      for (var t = 0, n = Object.keys(this.bindings); t < n.length; t++) {
        var r = n[t];
        if (e.hasOwnBinding(r)) {
          var i = this.bindings[r];
          if ("param" === i.kind && i.constant) {
            return !0;
          }
        }
      }
      return !1;
    }
  }, {
    key: "run",
    value: function () {
      this.path.traverse(h, this);
      if (!this.mutableBinding) {
        this.getCompatibleScopes();
        var e = this.getAttachmentPath();
        if (e && e.getFunctionParent() !== this.path.getFunctionParent()) {
          var t = e.scope.generateUidIdentifier("ref");
          var n = d(t, this.path.node);
          var i = e[this.attachAfter ? "insertAfter" : "insertBefore"]([e.isVariableDeclarator() ? n : f("var", [n])]);
          var a = r(i, 1)[0];
          var s = this.path.parentPath;
          if (s.isJSXElement() && this.path.container === s.node.children) {
            t = p(t);
          }
          this.path.replaceWith(c(t));
          return e.isVariableDeclarator() ? a.get("init") : a.get("declarations.0.init");
        }
      }
    }
  }]);
  return e;
}();
exports.default = y;