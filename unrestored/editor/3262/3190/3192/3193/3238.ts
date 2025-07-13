"use strict";

export default (function (e, t, n) {
  switch (t.type) {
    case "MemberExpression":
    case "OptionalMemberExpression":
      return t.property === e ? !!t.computed : t.object === e;
    case "JSXMemberExpression":
      return t.object === e;
    case "VariableDeclarator":
      return t.init === e;
    case "ArrowFunctionExpression":
      return t.body === e;
    case "PrivateName":
      return !1;
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      return t.key === e && !!t.computed;
    case "ObjectProperty":
      return t.key === e ? !!t.computed : !n || "ObjectPattern" !== n.type;
    case "ClassProperty":
      return t.key !== e || !!t.computed;
    case "ClassPrivateProperty":
      return t.key !== e;
    case "ClassDeclaration":
    case "ClassExpression":
      return t.superClass === e;
    case "AssignmentExpression":
    case "AssignmentPattern":
      return t.right === e;
    case "LabeledStatement":
    case "CatchClause":
    case "RestElement":
      return !1;
    case "BreakStatement":
    case "ContinueStatement":
      return !1;
    case "FunctionDeclaration":
    case "FunctionExpression":
      return !1;
    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return !1;
    case "ExportSpecifier":
      return (null == n || !n.source) && t.local === e;
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
    case "ImportAttribute":
    case "JSXAttribute":
      return !1;
    case "ObjectPattern":
    case "ArrayPattern":
    case "MetaProperty":
      return !1;
    case "ObjectTypeProperty":
      return t.key !== e;
    case "TSEnumMember":
      return t.id !== e;
    case "TSPropertySignature":
      return t.key !== e || !!t.computed;
  }
  return !0;
});