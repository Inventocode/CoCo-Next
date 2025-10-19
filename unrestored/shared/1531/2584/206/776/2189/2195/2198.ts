/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2198
 */

"use strict";

var r = require("../../../../36/2668/220");
var i = require("../../../../36/2668/230");
var o = require("../../../../38/607/356");
var a = require("../../../../38/607/357/index");
var s = require("../1328/1109/index").Syntax;
var c = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, i, o) {
    var a;
    r(this, n);
    (a = t.call(this, null, e)).rootPattern = i;
    a.callback = o;
    a.assignments = [];
    a.rightHandNodes = [];
    a.restElements = [];
    return a;
  }
  i(n, [{
    key: "Identifier",
    value: function (e) {
      var t;
      var n = (t = this.restElements)[t.length - 1] || null;
      this.callback(e, {
        topLevel: e === this.rootPattern,
        rest: null !== n && undefined !== n && n.argument === e,
        assignments: this.assignments
      });
    }
  }, {
    key: "Property",
    value: function (e) {
      if (e.computed) {
        this.rightHandNodes.push(e.key);
      }
      this.visit(e.value);
    }
  }, {
    key: "ArrayPattern",
    value: function (e) {
      for (var t = 0, n = e.elements.length; t < n; ++t) {
        var r = e.elements[t];
        this.visit(r);
      }
    }
  }, {
    key: "AssignmentPattern",
    value: function (e) {
      this.assignments.push(e);
      this.visit(e.left);
      this.rightHandNodes.push(e.right);
      this.assignments.pop();
    }
  }, {
    key: "RestElement",
    value: function (e) {
      this.restElements.push(e);
      this.visit(e.argument);
      this.restElements.pop();
    }
  }, {
    key: "MemberExpression",
    value: function (e) {
      if (e.computed) {
        this.rightHandNodes.push(e.property);
      }
      this.rightHandNodes.push(e.object);
    }
  }, {
    key: "SpreadElement",
    value: function (e) {
      this.visit(e.argument);
    }
  }, {
    key: "ArrayExpression",
    value: function (e) {
      e.elements.forEach(this.visit, this);
    }
  }, {
    key: "AssignmentExpression",
    value: function (e) {
      this.assignments.push(e);
      this.visit(e.left);
      this.rightHandNodes.push(e.right);
      this.assignments.pop();
    }
  }, {
    key: "CallExpression",
    value: function (e) {
      var t = this;
      e.arguments.forEach(function (e) {
        t.rightHandNodes.push(e);
      });
      this.visit(e.callee);
    }
  }], [{
    key: "isPattern",
    value: function (e) {
      var t = e.type;
      return t === s.Identifier || t === s.ObjectPattern || t === s.ArrayPattern || t === s.SpreadElement || t === s.RestElement || t === s.AssignmentPattern;
    }
  }]);
  return n;
}(require("./1330/index").Visitor);
module.exports = c;