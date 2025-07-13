"use strict";

export default (function (e) {
  if (!e.isExportDeclaration()) {
    throw new Error("Only export declarations can be split.");
  }
  var t = e.isExportDefaultDeclaration();
  var n = e.get("declaration");
  var r = n.isClassDeclaration();
  if (t) {
    var c = n.isFunctionDeclaration() || r;
    var p = n.isScope() ? n.scope.parent : n.scope;
    var f = n.node.id;
    var d = !1;
    if (!f) {
      d = !0;
      f = p.generateUidIdentifier("default");
      if (c || n.isFunctionExpression() || n.isClassExpression()) {
        n.node.id = i(f);
      }
    }
    var h = c ? n : l("var", [u(i(f), n.node)]);
    var y = a(null, [s(i(f), o("default"))]);
    e.insertAfter(y);
    e.replaceWith(h);
    if (d) {
      p.registerDeclaration(e);
    }
    return e;
  }
  if (e.get("specifiers").length > 0) {
    throw new Error("It doesn't make sense to split exported specifiers.");
  }
  var m = n.getOuterBindingIdentifiers();
  var v = Object.keys(m).map(function (e) {
    return s(o(e), o(e));
  });
  var g = a(null, v);
  e.insertAfter(g);
  e.replaceWith(n.node);
  return e;
});
import * as r from "../../../2624/index";
var i = r.cloneNode;
var a = r.exportNamedDeclaration;
var s = r.exportSpecifier;
var o = r.identifier;
var l = r.variableDeclaration;
var u = r.variableDeclarator;