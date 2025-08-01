"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = a;
var r = require("./2638");
function a(e, t, n) {
  for (var i = [].concat(e), o = Object.create(null); i.length;) {
    var s = i.shift();
    if (s) {
      var u = a.keys[s.type];
      if ((0, r.isIdentifier)(s)) {
        if (t) {
          (o[s.name] = o[s.name] || []).push(s);
        } else {
          o[s.name] = s;
        }
      } else if (!(0, r.isExportDeclaration)(s) || (0, r.isExportAllDeclaration)(s)) {
        if (n) {
          if ((0, r.isFunctionDeclaration)(s)) {
            i.push(s.id);
            continue;
          }
          if ((0, r.isFunctionExpression)(s)) {
            continue;
          }
        }
        if (u) {
          for (var l = 0; l < u.length; l++) {
            var p = u[l];
            if (s[p]) {
              i = i.concat(s[p]);
            }
          }
        }
      } else if ((0, r.isDeclaration)(s.declaration)) {
        i.push(s.declaration);
      }
    }
  }
  return o;
}
a.keys = {
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