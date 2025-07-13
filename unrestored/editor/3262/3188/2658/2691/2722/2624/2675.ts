"use strict";

export default i;
import * as r from "./2625";
function i(e, t, n) {
  for (var a = [].concat(e), s = Object.create(null); a.length;) {
    var o = a.shift();
    if (o) {
      var l = i.keys[o.type];
      if ((0, r.isIdentifier)(o)) {
        if (t) {
          (s[o.name] = s[o.name] || []).push(o);
        } else {
          s[o.name] = o;
        }
      } else if (!(0, r.isExportDeclaration)(o) || (0, r.isExportAllDeclaration)(o)) {
        if (n) {
          if ((0, r.isFunctionDeclaration)(o)) {
            a.push(o.id);
            continue;
          }
          if ((0, r.isFunctionExpression)(o)) {
            continue;
          }
        }
        if (l) {
          for (var u = 0; u < l.length; u++) {
            var c = l[u];
            if (o[c]) {
              a = a.concat(o[c]);
            }
          }
        }
      } else if ((0, r.isDeclaration)(o.declaration)) {
        a.push(o.declaration);
      }
    }
  }
  return s;
}
i.keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  DeclareInterface: ["id"],
  DeclareTypeAlias: ["id"],
  DeclareOpaqueType: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ArrowFunctionExpression: ["params"],
  ObjectMethod: ["params"],
  ClassMethod: ["params"],
  ClassPrivateMethod: ["params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};