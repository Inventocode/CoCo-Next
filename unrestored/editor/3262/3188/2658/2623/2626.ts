"use strict";

exports.isAnyTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("AnyTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isArgumentPlaceholder = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ArgumentPlaceholder" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isArrayExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ArrayExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isArrayPattern = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ArrayPattern" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isArrayTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ArrayTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isArrowFunctionExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ArrowFunctionExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isAssignmentExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("AssignmentExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isAssignmentPattern = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("AssignmentPattern" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isAwaitExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("AwaitExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBigIntLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("BigIntLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBinary = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("BinaryExpression" === n || "LogicalExpression" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBinaryExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("BinaryExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBindExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("BindExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBlock = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("BlockStatement" === n || "Program" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBlockParent = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("BlockStatement" === n || "CatchClause" === n || "DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Program" === n || "ObjectMethod" === n || "SwitchStatement" === n || "WhileStatement" === n || "ArrowFunctionExpression" === n || "ForOfStatement" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "StaticBlock" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBlockStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("BlockStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBooleanLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("BooleanLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBooleanLiteralTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("BooleanLiteralTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBooleanTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("BooleanTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isBreakStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("BreakStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isCallExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("CallExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isCatchClause = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("CatchClause" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isClass = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ClassExpression" === n || "ClassDeclaration" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isClassBody = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ClassBody" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isClassDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ClassDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isClassExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ClassExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isClassImplements = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ClassImplements" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isClassMethod = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ClassMethod" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isClassPrivateMethod = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ClassPrivateMethod" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isClassPrivateProperty = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ClassPrivateProperty" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isClassProperty = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ClassProperty" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isCompletionStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("BreakStatement" === n || "ContinueStatement" === n || "ReturnStatement" === n || "ThrowStatement" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isConditional = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ConditionalExpression" === n || "IfStatement" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isConditionalExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ConditionalExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isContinueStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ContinueStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDebuggerStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DebuggerStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDecimalLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DecimalLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("FunctionDeclaration" === n || "VariableDeclaration" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ImportDeclaration" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n || "EnumDeclaration" === n || "TSDeclareFunction" === n || "TSInterfaceDeclaration" === n || "TSTypeAliasDeclaration" === n || "TSEnumDeclaration" === n || "TSModuleDeclaration" === n || "Placeholder" === n && "Declaration" === e.expectedNode) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclareClass = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclareClass" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclareExportAllDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclareExportAllDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclareExportDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclareExportDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclareFunction = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclareFunction" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclareInterface = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclareInterface" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclareModule = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclareModule" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclareModuleExports = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclareModuleExports" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclareOpaqueType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclareOpaqueType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclareTypeAlias = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclareTypeAlias" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclareVariable = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclareVariable" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDeclaredPredicate = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DeclaredPredicate" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDecorator = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("Decorator" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDirective = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("Directive" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDirectiveLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DirectiveLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDoExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DoExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isDoWhileStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("DoWhileStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEmptyStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EmptyStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEmptyTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EmptyTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumBody = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("EnumBooleanBody" === n || "EnumNumberBody" === n || "EnumStringBody" === n || "EnumSymbolBody" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumBooleanBody = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EnumBooleanBody" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumBooleanMember = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EnumBooleanMember" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EnumDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumDefaultedMember = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EnumDefaultedMember" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumMember = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("EnumBooleanMember" === n || "EnumNumberMember" === n || "EnumStringMember" === n || "EnumDefaultedMember" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumNumberBody = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EnumNumberBody" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumNumberMember = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EnumNumberMember" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumStringBody = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EnumStringBody" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumStringMember = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EnumStringMember" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isEnumSymbolBody = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("EnumSymbolBody" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExistsTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ExistsTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExportAllDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ExportAllDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExportDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExportDefaultDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ExportDefaultDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExportDefaultSpecifier = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ExportDefaultSpecifier" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExportNamedDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ExportNamedDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExportNamespaceSpecifier = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ExportNamespaceSpecifier" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExportSpecifier = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ExportSpecifier" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ArrayExpression" === n || "AssignmentExpression" === n || "BinaryExpression" === n || "CallExpression" === n || "ConditionalExpression" === n || "FunctionExpression" === n || "Identifier" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "LogicalExpression" === n || "MemberExpression" === n || "NewExpression" === n || "ObjectExpression" === n || "SequenceExpression" === n || "ParenthesizedExpression" === n || "ThisExpression" === n || "UnaryExpression" === n || "UpdateExpression" === n || "ArrowFunctionExpression" === n || "ClassExpression" === n || "MetaProperty" === n || "Super" === n || "TaggedTemplateExpression" === n || "TemplateLiteral" === n || "YieldExpression" === n || "AwaitExpression" === n || "Import" === n || "BigIntLiteral" === n || "OptionalMemberExpression" === n || "OptionalCallExpression" === n || "TypeCastExpression" === n || "JSXElement" === n || "JSXFragment" === n || "BindExpression" === n || "DoExpression" === n || "RecordExpression" === n || "TupleExpression" === n || "DecimalLiteral" === n || "ModuleExpression" === n || "TopicReference" === n || "PipelineTopicExpression" === n || "PipelineBareFunction" === n || "PipelinePrimaryTopicReference" === n || "TSAsExpression" === n || "TSTypeAssertion" === n || "TSNonNullExpression" === n || "Placeholder" === n && ("Expression" === e.expectedNode || "Identifier" === e.expectedNode || "StringLiteral" === e.expectedNode)) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExpressionStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ExpressionStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isExpressionWrapper = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ExpressionStatement" === n || "ParenthesizedExpression" === n || "TypeCastExpression" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFile = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("File" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFlow = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("AnyTypeAnnotation" === n || "ArrayTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "BooleanLiteralTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "ClassImplements" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "DeclaredPredicate" === n || "ExistsTypeAnnotation" === n || "FunctionTypeAnnotation" === n || "FunctionTypeParam" === n || "GenericTypeAnnotation" === n || "InferredPredicate" === n || "InterfaceExtends" === n || "InterfaceDeclaration" === n || "InterfaceTypeAnnotation" === n || "IntersectionTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NullableTypeAnnotation" === n || "NumberLiteralTypeAnnotation" === n || "NumberTypeAnnotation" === n || "ObjectTypeAnnotation" === n || "ObjectTypeInternalSlot" === n || "ObjectTypeCallProperty" === n || "ObjectTypeIndexer" === n || "ObjectTypeProperty" === n || "ObjectTypeSpreadProperty" === n || "OpaqueType" === n || "QualifiedTypeIdentifier" === n || "StringLiteralTypeAnnotation" === n || "StringTypeAnnotation" === n || "SymbolTypeAnnotation" === n || "ThisTypeAnnotation" === n || "TupleTypeAnnotation" === n || "TypeofTypeAnnotation" === n || "TypeAlias" === n || "TypeAnnotation" === n || "TypeCastExpression" === n || "TypeParameter" === n || "TypeParameterDeclaration" === n || "TypeParameterInstantiation" === n || "UnionTypeAnnotation" === n || "Variance" === n || "VoidTypeAnnotation" === n || "EnumDeclaration" === n || "EnumBooleanBody" === n || "EnumNumberBody" === n || "EnumStringBody" === n || "EnumSymbolBody" === n || "EnumBooleanMember" === n || "EnumNumberMember" === n || "EnumStringMember" === n || "EnumDefaultedMember" === n || "IndexedAccessType" === n || "OptionalIndexedAccessType" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFlowBaseAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("AnyTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NumberTypeAnnotation" === n || "StringTypeAnnotation" === n || "SymbolTypeAnnotation" === n || "ThisTypeAnnotation" === n || "VoidTypeAnnotation" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFlowDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFlowPredicate = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("DeclaredPredicate" === n || "InferredPredicate" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFlowType = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("AnyTypeAnnotation" === n || "ArrayTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "BooleanLiteralTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "ExistsTypeAnnotation" === n || "FunctionTypeAnnotation" === n || "GenericTypeAnnotation" === n || "InterfaceTypeAnnotation" === n || "IntersectionTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NullableTypeAnnotation" === n || "NumberLiteralTypeAnnotation" === n || "NumberTypeAnnotation" === n || "ObjectTypeAnnotation" === n || "StringLiteralTypeAnnotation" === n || "StringTypeAnnotation" === n || "SymbolTypeAnnotation" === n || "ThisTypeAnnotation" === n || "TupleTypeAnnotation" === n || "TypeofTypeAnnotation" === n || "UnionTypeAnnotation" === n || "VoidTypeAnnotation" === n || "IndexedAccessType" === n || "OptionalIndexedAccessType" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFor = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ForInStatement" === n || "ForStatement" === n || "ForOfStatement" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isForInStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ForInStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isForOfStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ForOfStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isForStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ForStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isForXStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ForInStatement" === n || "ForOfStatement" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFunction = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("FunctionDeclaration" === n || "FunctionExpression" === n || "ObjectMethod" === n || "ArrowFunctionExpression" === n || "ClassMethod" === n || "ClassPrivateMethod" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFunctionDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("FunctionDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFunctionExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("FunctionExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFunctionParent = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("FunctionDeclaration" === n || "FunctionExpression" === n || "ObjectMethod" === n || "ArrowFunctionExpression" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "StaticBlock" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFunctionTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("FunctionTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isFunctionTypeParam = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("FunctionTypeParam" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isGenericTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("GenericTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isIdentifier = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("Identifier" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isIfStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("IfStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isImmutable = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "BigIntLiteral" === n || "JSXAttribute" === n || "JSXClosingElement" === n || "JSXElement" === n || "JSXExpressionContainer" === n || "JSXSpreadChild" === n || "JSXOpeningElement" === n || "JSXText" === n || "JSXFragment" === n || "JSXOpeningFragment" === n || "JSXClosingFragment" === n || "DecimalLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isImport = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("Import" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isImportAttribute = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ImportAttribute" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isImportDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ImportDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isImportDefaultSpecifier = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ImportDefaultSpecifier" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isImportNamespaceSpecifier = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ImportNamespaceSpecifier" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isImportSpecifier = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ImportSpecifier" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isIndexedAccessType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("IndexedAccessType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isInferredPredicate = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("InferredPredicate" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isInterfaceDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("InterfaceDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isInterfaceExtends = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("InterfaceExtends" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isInterfaceTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("InterfaceTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isInterpreterDirective = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("InterpreterDirective" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isIntersectionTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("IntersectionTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSX = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("JSXAttribute" === n || "JSXClosingElement" === n || "JSXElement" === n || "JSXEmptyExpression" === n || "JSXExpressionContainer" === n || "JSXSpreadChild" === n || "JSXIdentifier" === n || "JSXMemberExpression" === n || "JSXNamespacedName" === n || "JSXOpeningElement" === n || "JSXSpreadAttribute" === n || "JSXText" === n || "JSXFragment" === n || "JSXOpeningFragment" === n || "JSXClosingFragment" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXAttribute = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXAttribute" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXClosingElement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXClosingElement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXClosingFragment = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXClosingFragment" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXElement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXElement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXEmptyExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXEmptyExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXExpressionContainer = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXExpressionContainer" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXFragment = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXFragment" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXIdentifier = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXIdentifier" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXMemberExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXMemberExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXNamespacedName = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXNamespacedName" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXOpeningElement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXOpeningElement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXOpeningFragment = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXOpeningFragment" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXSpreadAttribute = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXSpreadAttribute" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXSpreadChild = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXSpreadChild" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isJSXText = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("JSXText" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isLVal = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("Identifier" === n || "MemberExpression" === n || "RestElement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "TSParameterProperty" === n || "Placeholder" === n && ("Pattern" === e.expectedNode || "Identifier" === e.expectedNode)) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isLabeledStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("LabeledStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "TemplateLiteral" === n || "BigIntLiteral" === n || "DecimalLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isLogicalExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("LogicalExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isLoop = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "WhileStatement" === n || "ForOfStatement" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isMemberExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("MemberExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isMetaProperty = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("MetaProperty" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isMethod = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ObjectMethod" === n || "ClassMethod" === n || "ClassPrivateMethod" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isMiscellaneous = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("Noop" === n || "Placeholder" === n || "V8IntrinsicIdentifier" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isMixedTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("MixedTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isModuleDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ImportDeclaration" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isModuleExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ModuleExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isModuleSpecifier = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ExportSpecifier" === n || "ImportDefaultSpecifier" === n || "ImportNamespaceSpecifier" === n || "ImportSpecifier" === n || "ExportNamespaceSpecifier" === n || "ExportDefaultSpecifier" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isNewExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("NewExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isNoop = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("Noop" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isNullLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("NullLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isNullLiteralTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("NullLiteralTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isNullableTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("NullableTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isNumberLiteral = function (e, t) {
  if (console.trace("The node type NumberLiteral has been renamed to NumericLiteral"), !e) {
    return !1;
  }
  if ("NumberLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isNumberLiteralTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("NumberLiteralTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isNumberTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("NumberTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isNumericLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("NumericLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ObjectExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectMember = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ObjectMethod" === n || "ObjectProperty" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectMethod = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ObjectMethod" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectPattern = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ObjectPattern" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectProperty = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ObjectProperty" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ObjectTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectTypeCallProperty = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ObjectTypeCallProperty" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectTypeIndexer = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ObjectTypeIndexer" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectTypeInternalSlot = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ObjectTypeInternalSlot" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectTypeProperty = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ObjectTypeProperty" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isObjectTypeSpreadProperty = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ObjectTypeSpreadProperty" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isOpaqueType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("OpaqueType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isOptionalCallExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("OptionalCallExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isOptionalIndexedAccessType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("OptionalIndexedAccessType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isOptionalMemberExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("OptionalMemberExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isParenthesizedExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ParenthesizedExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isPattern = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "Placeholder" === n && "Pattern" === e.expectedNode) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isPatternLike = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("Identifier" === n || "RestElement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "Placeholder" === n && ("Pattern" === e.expectedNode || "Identifier" === e.expectedNode)) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isPipelineBareFunction = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("PipelineBareFunction" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isPipelinePrimaryTopicReference = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("PipelinePrimaryTopicReference" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isPipelineTopicExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("PipelineTopicExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isPlaceholder = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("Placeholder" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isPrivate = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ClassPrivateProperty" === n || "ClassPrivateMethod" === n || "PrivateName" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isPrivateName = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("PrivateName" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isProgram = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("Program" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isProperty = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ObjectProperty" === n || "ClassProperty" === n || "ClassPrivateProperty" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isPureish = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("FunctionDeclaration" === n || "FunctionExpression" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "ArrowFunctionExpression" === n || "BigIntLiteral" === n || "DecimalLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isQualifiedTypeIdentifier = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("QualifiedTypeIdentifier" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isRecordExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("RecordExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isRegExpLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("RegExpLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isRegexLiteral = function (e, t) {
  if (console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"), !e) {
    return !1;
  }
  if ("RegexLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isRestElement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("RestElement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isRestProperty = function (e, t) {
  if (console.trace("The node type RestProperty has been renamed to RestElement"), !e) {
    return !1;
  }
  if ("RestProperty" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isReturnStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ReturnStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isScopable = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("BlockStatement" === n || "CatchClause" === n || "DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Program" === n || "ObjectMethod" === n || "SwitchStatement" === n || "WhileStatement" === n || "ArrowFunctionExpression" === n || "ClassExpression" === n || "ClassDeclaration" === n || "ForOfStatement" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "StaticBlock" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isSequenceExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("SequenceExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isSpreadElement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("SpreadElement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isSpreadProperty = function (e, t) {
  if (console.trace("The node type SpreadProperty has been renamed to SpreadElement"), !e) {
    return !1;
  }
  if ("SpreadProperty" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isStandardized = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ArrayExpression" === n || "AssignmentExpression" === n || "BinaryExpression" === n || "InterpreterDirective" === n || "Directive" === n || "DirectiveLiteral" === n || "BlockStatement" === n || "BreakStatement" === n || "CallExpression" === n || "CatchClause" === n || "ConditionalExpression" === n || "ContinueStatement" === n || "DebuggerStatement" === n || "DoWhileStatement" === n || "EmptyStatement" === n || "ExpressionStatement" === n || "File" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Identifier" === n || "IfStatement" === n || "LabeledStatement" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "LogicalExpression" === n || "MemberExpression" === n || "NewExpression" === n || "Program" === n || "ObjectExpression" === n || "ObjectMethod" === n || "ObjectProperty" === n || "RestElement" === n || "ReturnStatement" === n || "SequenceExpression" === n || "ParenthesizedExpression" === n || "SwitchCase" === n || "SwitchStatement" === n || "ThisExpression" === n || "ThrowStatement" === n || "TryStatement" === n || "UnaryExpression" === n || "UpdateExpression" === n || "VariableDeclaration" === n || "VariableDeclarator" === n || "WhileStatement" === n || "WithStatement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ArrowFunctionExpression" === n || "ClassBody" === n || "ClassExpression" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ExportSpecifier" === n || "ForOfStatement" === n || "ImportDeclaration" === n || "ImportDefaultSpecifier" === n || "ImportNamespaceSpecifier" === n || "ImportSpecifier" === n || "MetaProperty" === n || "ClassMethod" === n || "ObjectPattern" === n || "SpreadElement" === n || "Super" === n || "TaggedTemplateExpression" === n || "TemplateElement" === n || "TemplateLiteral" === n || "YieldExpression" === n || "AwaitExpression" === n || "Import" === n || "BigIntLiteral" === n || "ExportNamespaceSpecifier" === n || "OptionalMemberExpression" === n || "OptionalCallExpression" === n || "ClassProperty" === n || "ClassPrivateProperty" === n || "ClassPrivateMethod" === n || "PrivateName" === n || "StaticBlock" === n || "Placeholder" === n && ("Identifier" === e.expectedNode || "StringLiteral" === e.expectedNode || "BlockStatement" === e.expectedNode || "ClassBody" === e.expectedNode)) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("BlockStatement" === n || "BreakStatement" === n || "ContinueStatement" === n || "DebuggerStatement" === n || "DoWhileStatement" === n || "EmptyStatement" === n || "ExpressionStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "IfStatement" === n || "LabeledStatement" === n || "ReturnStatement" === n || "SwitchStatement" === n || "ThrowStatement" === n || "TryStatement" === n || "VariableDeclaration" === n || "WhileStatement" === n || "WithStatement" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ForOfStatement" === n || "ImportDeclaration" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n || "EnumDeclaration" === n || "TSDeclareFunction" === n || "TSInterfaceDeclaration" === n || "TSTypeAliasDeclaration" === n || "TSEnumDeclaration" === n || "TSModuleDeclaration" === n || "TSImportEqualsDeclaration" === n || "TSExportAssignment" === n || "TSNamespaceExportDeclaration" === n || "Placeholder" === n && ("Statement" === e.expectedNode || "Declaration" === e.expectedNode || "BlockStatement" === e.expectedNode)) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isStaticBlock = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("StaticBlock" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isStringLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("StringLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isStringLiteralTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("StringLiteralTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isStringTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("StringTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isSuper = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("Super" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isSwitchCase = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("SwitchCase" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isSwitchStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("SwitchStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isSymbolTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("SymbolTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSAnyKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSAnyKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSArrayType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSArrayType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSAsExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSAsExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSBaseType = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("TSAnyKeyword" === n || "TSBooleanKeyword" === n || "TSBigIntKeyword" === n || "TSIntrinsicKeyword" === n || "TSNeverKeyword" === n || "TSNullKeyword" === n || "TSNumberKeyword" === n || "TSObjectKeyword" === n || "TSStringKeyword" === n || "TSSymbolKeyword" === n || "TSUndefinedKeyword" === n || "TSUnknownKeyword" === n || "TSVoidKeyword" === n || "TSThisType" === n || "TSLiteralType" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSBigIntKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSBigIntKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSBooleanKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSBooleanKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSCallSignatureDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSCallSignatureDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSConditionalType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSConditionalType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSConstructSignatureDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSConstructSignatureDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSConstructorType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSConstructorType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSDeclareFunction = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSDeclareFunction" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSDeclareMethod = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSDeclareMethod" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSEntityName = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("Identifier" === n || "TSQualifiedName" === n || "Placeholder" === n && "Identifier" === e.expectedNode) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSEnumDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSEnumDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSEnumMember = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSEnumMember" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSExportAssignment = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSExportAssignment" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSExpressionWithTypeArguments = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSExpressionWithTypeArguments" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSExternalModuleReference = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSExternalModuleReference" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSFunctionType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSFunctionType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSImportEqualsDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSImportEqualsDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSImportType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSImportType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSIndexSignature = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSIndexSignature" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSIndexedAccessType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSIndexedAccessType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSInferType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSInferType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSInterfaceBody = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSInterfaceBody" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSInterfaceDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSInterfaceDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSIntersectionType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSIntersectionType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSIntrinsicKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSIntrinsicKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSLiteralType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSLiteralType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSMappedType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSMappedType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSMethodSignature = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSMethodSignature" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSModuleBlock = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSModuleBlock" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSModuleDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSModuleDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSNamedTupleMember = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSNamedTupleMember" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSNamespaceExportDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSNamespaceExportDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSNeverKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSNeverKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSNonNullExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSNonNullExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSNullKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSNullKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSNumberKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSNumberKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSObjectKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSObjectKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSOptionalType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSOptionalType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSParameterProperty = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSParameterProperty" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSParenthesizedType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSParenthesizedType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSPropertySignature = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSPropertySignature" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSQualifiedName = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSQualifiedName" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSRestType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSRestType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSStringKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSStringKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSSymbolKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSSymbolKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSThisType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSThisType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTupleType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTupleType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSType = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("TSAnyKeyword" === n || "TSBooleanKeyword" === n || "TSBigIntKeyword" === n || "TSIntrinsicKeyword" === n || "TSNeverKeyword" === n || "TSNullKeyword" === n || "TSNumberKeyword" === n || "TSObjectKeyword" === n || "TSStringKeyword" === n || "TSSymbolKeyword" === n || "TSUndefinedKeyword" === n || "TSUnknownKeyword" === n || "TSVoidKeyword" === n || "TSThisType" === n || "TSFunctionType" === n || "TSConstructorType" === n || "TSTypeReference" === n || "TSTypePredicate" === n || "TSTypeQuery" === n || "TSTypeLiteral" === n || "TSArrayType" === n || "TSTupleType" === n || "TSOptionalType" === n || "TSRestType" === n || "TSUnionType" === n || "TSIntersectionType" === n || "TSConditionalType" === n || "TSInferType" === n || "TSParenthesizedType" === n || "TSTypeOperator" === n || "TSIndexedAccessType" === n || "TSMappedType" === n || "TSLiteralType" === n || "TSExpressionWithTypeArguments" === n || "TSImportType" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeAliasDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypeAliasDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeAssertion = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypeAssertion" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeElement = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("TSCallSignatureDeclaration" === n || "TSConstructSignatureDeclaration" === n || "TSPropertySignature" === n || "TSMethodSignature" === n || "TSIndexSignature" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypeLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeOperator = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypeOperator" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeParameter = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypeParameter" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeParameterDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypeParameterDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeParameterInstantiation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypeParameterInstantiation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypePredicate = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypePredicate" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeQuery = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypeQuery" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSTypeReference = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSTypeReference" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSUndefinedKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSUndefinedKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSUnionType = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSUnionType" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSUnknownKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSUnknownKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTSVoidKeyword = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TSVoidKeyword" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTaggedTemplateExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TaggedTemplateExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTemplateElement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TemplateElement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTemplateLiteral = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TemplateLiteral" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTerminatorless = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("BreakStatement" === n || "ContinueStatement" === n || "ReturnStatement" === n || "ThrowStatement" === n || "YieldExpression" === n || "AwaitExpression" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isThisExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ThisExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isThisTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ThisTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isThrowStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("ThrowStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTopicReference = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TopicReference" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTryStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TryStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTupleExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TupleExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTupleTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TupleTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTypeAlias = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TypeAlias" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTypeCastExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TypeCastExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTypeParameter = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TypeParameter" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTypeParameterDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TypeParameterDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTypeParameterInstantiation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TypeParameterInstantiation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTypeScript = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("TSParameterProperty" === n || "TSDeclareFunction" === n || "TSDeclareMethod" === n || "TSQualifiedName" === n || "TSCallSignatureDeclaration" === n || "TSConstructSignatureDeclaration" === n || "TSPropertySignature" === n || "TSMethodSignature" === n || "TSIndexSignature" === n || "TSAnyKeyword" === n || "TSBooleanKeyword" === n || "TSBigIntKeyword" === n || "TSIntrinsicKeyword" === n || "TSNeverKeyword" === n || "TSNullKeyword" === n || "TSNumberKeyword" === n || "TSObjectKeyword" === n || "TSStringKeyword" === n || "TSSymbolKeyword" === n || "TSUndefinedKeyword" === n || "TSUnknownKeyword" === n || "TSVoidKeyword" === n || "TSThisType" === n || "TSFunctionType" === n || "TSConstructorType" === n || "TSTypeReference" === n || "TSTypePredicate" === n || "TSTypeQuery" === n || "TSTypeLiteral" === n || "TSArrayType" === n || "TSTupleType" === n || "TSOptionalType" === n || "TSRestType" === n || "TSNamedTupleMember" === n || "TSUnionType" === n || "TSIntersectionType" === n || "TSConditionalType" === n || "TSInferType" === n || "TSParenthesizedType" === n || "TSTypeOperator" === n || "TSIndexedAccessType" === n || "TSMappedType" === n || "TSLiteralType" === n || "TSExpressionWithTypeArguments" === n || "TSInterfaceDeclaration" === n || "TSInterfaceBody" === n || "TSTypeAliasDeclaration" === n || "TSAsExpression" === n || "TSTypeAssertion" === n || "TSEnumDeclaration" === n || "TSEnumMember" === n || "TSModuleDeclaration" === n || "TSModuleBlock" === n || "TSImportType" === n || "TSImportEqualsDeclaration" === n || "TSExternalModuleReference" === n || "TSNonNullExpression" === n || "TSExportAssignment" === n || "TSNamespaceExportDeclaration" === n || "TSTypeAnnotation" === n || "TSTypeParameterInstantiation" === n || "TSTypeParameterDeclaration" === n || "TSTypeParameter" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isTypeofTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("TypeofTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isUnaryExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("UnaryExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isUnaryLike = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("UnaryExpression" === n || "SpreadElement" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isUnionTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("UnionTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isUpdateExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("UpdateExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isUserWhitespacable = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("ObjectMethod" === n || "ObjectProperty" === n || "ObjectTypeInternalSlot" === n || "ObjectTypeCallProperty" === n || "ObjectTypeIndexer" === n || "ObjectTypeProperty" === n || "ObjectTypeSpreadProperty" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isV8IntrinsicIdentifier = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("V8IntrinsicIdentifier" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isVariableDeclaration = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("VariableDeclaration" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isVariableDeclarator = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("VariableDeclarator" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isVariance = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("Variance" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isVoidTypeAnnotation = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("VoidTypeAnnotation" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isWhile = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.type;
  if ("DoWhileStatement" === n || "WhileStatement" === n) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isWhileStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("WhileStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isWithStatement = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("WithStatement" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
exports.isYieldExpression = function (e, t) {
  if (!e) {
    return !1;
  }
  if ("YieldExpression" === e.type) {
    return "undefined" === typeof t || (0, r.default)(e, t);
  }
  return !1;
};
import * as r from "./2698";