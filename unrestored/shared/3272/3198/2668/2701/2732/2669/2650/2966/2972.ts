"use strict";

var r = require("../../../../../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "var";
  e.traverse(l, {
    kind: n,
    emit: t
  });
};
var i = require("../../../2634/index");
var a = i.assignmentExpression;
var s = i.expressionStatement;
var o = i.identifier;
var l = {
  Scope: function (e, t) {
    if ("let" === t.kind) {
      e.skip();
    }
  },
  FunctionParent: function (e) {
    e.skip();
  },
  VariableDeclaration: function (e, t) {
    if (!t.kind || e.node.kind === t.kind) {
      var n;
      var i;
      var l = [];
      var u = e.get("declarations");
      var c = r(u);
      try {
        for (c.s(); !(i = c.n()).done;) {
          var p = i.value;
          n = p.node.id;
          if (p.node.init) {
            l.push(s(a("=", p.node.id, p.node.init)));
          }
          for (var f = 0, d = Object.keys(p.getBindingIdentifiers()); f < d.length; f++) {
            var h = d[f];
            t.emit(o(h), h, null !== p.node.init);
          }
        }
      } catch (y) {
        c.e(y);
      } finally {
        c.f();
      }
      if (e.parentPath.isFor({
        left: e.node
      })) {
        e.replaceWith(n);
      } else {
        e.replaceWithMultiple(l);
      }
    }
  }
};