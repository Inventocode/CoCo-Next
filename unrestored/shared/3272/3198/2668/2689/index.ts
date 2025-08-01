"use strict";

var r = require("../../../3200/494");
var i = require("../../../3200/624/index");
var a = require("./703/index");
var s = require("./529");
var o = require("./356/index");
var l = require("./357/index");
var u = require("../../../2883/2731/806/index");
var c = require("../230");
var p = require("../220");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var f = /\r\n?|[\n\u2028\u2029]/;
var d = new RegExp(f.source, "g");
function h(e) {
  switch (e) {
    case 10:
    case 13:
    case 8232:
    case 8233:
      return !0;
    default:
      return !1;
  }
}
var y = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var m = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y");
var v = new RegExp("(?=(" + m.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");
function g(e) {
  switch (e) {
    case 9:
    case 11:
    case 12:
    case 32:
    case 160:
    case 5760:
    case 8192:
    case 8193:
    case 8194:
    case 8195:
    case 8196:
    case 8197:
    case 8198:
    case 8199:
    case 8200:
    case 8201:
    case 8202:
    case 8239:
    case 8287:
    case 12288:
    case 65279:
      return !0;
    default:
      return !1;
  }
}
var T = function e(t, n) {
  p(this, e);
  this.line = void 0;
  this.column = void 0;
  this.line = t;
  this.column = n;
};
var b = function e(t, n) {
  p(this, e);
  this.start = void 0;
  this.end = void 0;
  this.filename = void 0;
  this.identifierName = void 0;
  this.start = t;
  this.end = n;
};
function S(e, t) {
  var n;
  if (void 0 === e.trailingComments) {
    e.trailingComments = t;
  } else {
    (n = e.trailingComments).unshift.apply(n, u(t));
  }
}
function E(e, t) {
  var n;
  if (void 0 === e.innerComments) {
    e.innerComments = t;
  } else {
    (n = e.innerComments).unshift.apply(n, u(t));
  }
}
function x(e, t, n) {
  for (var r = null, i = t.length; null === r && i > 0;) {
    r = t[--i];
  }
  if (null === r || r.start > n.start) {
    E(e, n.comments);
  } else {
    S(r, n.comments);
  }
}
var P = function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    p(this, n);
    return t.apply(this, arguments);
  }
  c(n, [{
    key: "addComment",
    value: function (e) {
      if (this.filename) {
        e.loc.filename = this.filename;
      }
      this.state.comments.push(e);
    }
  }, {
    key: "processComment",
    value: function (e) {
      var t = this.state.commentStack;
      var n = t.length;
      if (0 !== n) {
        var r = n - 1;
        var i = t[r];
        if (i.start === e.end) {
          i.leadingNode = e;
          r--;
        }
        for (var a = e.start; r >= 0; r--) {
          var s = t[r];
          var o = s.end;
          if (!(o > a)) {
            if (o === a) {
              s.trailingNode = e;
            }
            break;
          }
          s.containingNode = e;
          this.finalizeComment(s);
          t.splice(r, 1);
        }
      }
    }
  }, {
    key: "finalizeComment",
    value: function (e) {
      var t = e.comments;
      if (null !== e.leadingNode || null !== e.trailingNode) {
        if (null !== e.leadingNode) {
          S(e.leadingNode, t);
        }
        if (null !== e.trailingNode) {
          (function (e, t) {
            var n;
            if (void 0 === e.leadingComments) {
              e.leadingComments = t;
            } else {
              (n = e.leadingComments).unshift.apply(n, u(t));
            }
          })(e.trailingNode, t);
        }
      } else {
        var n = e.containingNode;
        var r = e.start;
        if (44 === this.input.charCodeAt(r - 1)) {
          switch (n.type) {
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              x(n, n.properties, e);
              break;
            case "CallExpression":
            case "OptionalCallExpression":
              x(n, n.arguments, e);
              break;
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression":
            case "ObjectMethod":
            case "ClassMethod":
            case "ClassPrivateMethod":
              x(n, n.params, e);
              break;
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              x(n, n.elements, e);
              break;
            case "ExportNamedDeclaration":
            case "ImportDeclaration":
              x(n, n.specifiers, e);
              break;
            default:
              E(n, t);
          }
        } else {
          E(n, t);
        }
      }
    }
  }, {
    key: "finalizeRemainingComments",
    value: function () {
      for (var e = this.state.commentStack, t = e.length - 1; t >= 0; t--) {
        this.finalizeComment(e[t]);
      }
      this.state.commentStack = [];
    }
  }, {
    key: "resetPreviousNodeTrailingComments",
    value: function (e) {
      var t = this.state.commentStack;
      var n = t.length;
      if (0 !== n) {
        var r = t[n - 1];
        if (r.leadingNode === e) {
          r.leadingNode = null;
        }
      }
    }
  }, {
    key: "takeSurroundingComments",
    value: function (e, t, n) {
      var r = this.state.commentStack;
      var i = r.length;
      if (0 !== i) {
        for (var a = i - 1; a >= 0; a--) {
          var s = r[a];
          var o = s.end;
          if (s.start === n) {
            s.leadingNode = e;
          } else if (o === t) {
            s.trailingNode = e;
          } else if (o < t) {
            break;
          }
        }
      }
    }
  }]);
  return n;
}(function () {
  function e() {
    p(this, e);
    this.sawUnambiguousESM = !1;
    this.ambiguousScriptDifferentAst = !1;
  }
  c(e, [{
    key: "hasPlugin",
    value: function (e) {
      return this.plugins.has(e);
    }
  }, {
    key: "getPluginOption",
    value: function (e, t) {
      if (this.hasPlugin(e)) {
        return this.plugins.get(e)[t];
      }
    }
  }]);
  return e;
}());
var A = Object.freeze({
  SyntaxError: "BABEL_PARSER_SYNTAX_ERROR",
  SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
});
var k = C({
  AccessorIsGenerator: "A %0ter cannot be a generator.",
  ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
  AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
  AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
  AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
  AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
  AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
  AwaitNotInAsyncFunction: "'await' is only allowed within async functions.",
  BadGetterArity: "A 'get' accesor must not have any formal parameters.",
  BadSetterArity: "A 'set' accesor must have exactly one formal parameter.",
  BadSetterRestParameter: "A 'set' accesor function argument must not be a rest parameter.",
  ConstructorClassField: "Classes may not have a field named 'constructor'.",
  ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
  ConstructorIsAccessor: "Class constructor may not be an accessor.",
  ConstructorIsAsync: "Constructor can't be an async function.",
  ConstructorIsGenerator: "Constructor can't be a generator.",
  DeclarationMissingInitializer: "'%0' require an initialization value.",
  DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax.",
  DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
  DecoratorExportClass: "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.",
  DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
  DecoratorStaticBlock: "Decorators can't be used with a static block.",
  DeletePrivateField: "Deleting a private field is not allowed.",
  DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
  DuplicateConstructor: "Duplicate constructor in the same class.",
  DuplicateDefaultExport: "Only one default export allowed per module.",
  DuplicateExport: "`%0` has already been exported. Exported identifiers must be unique.",
  DuplicateProto: "Redefinition of __proto__ property.",
  DuplicateRegExpFlags: "Duplicate regular expression flag.",
  ElementAfterRest: "Rest element must be last element.",
  EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
  ExportBindingIsString: "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '%0' as '%1' } from 'some-module'`?",
  ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
  ForInOfLoopInitializer: "'%0' loop variable declaration may not have an initializer.",
  ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
  ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
  GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
  IllegalBreakContinue: "Unsyntactic %0.",
  IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
  IllegalReturn: "'return' outside of function.",
  ImportBindingIsString: 'A string literal cannot be used as an imported binding.\n- Did you mean `import { "%0" as foo }`?',
  ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.",
  ImportCallArity: "`import()` requires exactly %0.",
  ImportCallNotNewExpression: "Cannot use new with import(...).",
  ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
  InvalidBigIntLiteral: "Invalid BigIntLiteral.",
  InvalidCodePoint: "Code point out of bounds.",
  InvalidDecimal: "Invalid decimal.",
  InvalidDigit: "Expected number in radix %0.",
  InvalidEscapeSequence: "Bad character escape sequence.",
  InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
  InvalidEscapedReservedWord: "Escape sequence in keyword %0.",
  InvalidIdentifier: "Invalid identifier %0.",
  InvalidLhs: "Invalid left-hand side in %0.",
  InvalidLhsBinding: "Binding invalid left-hand side in %0.",
  InvalidNumber: "Invalid number.",
  InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
  InvalidOrUnexpectedToken: "Unexpected character '%0'.",
  InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
  InvalidPrivateFieldResolution: "Private name #%0 is not defined.",
  InvalidPropertyBindingPattern: "Binding member expression.",
  InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
  InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
  LabelRedeclaration: "Label '%0' is already declared.",
  LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
  LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
  MalformedRegExpFlags: "Invalid regular expression flag.",
  MissingClassName: "A class name is required.",
  MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
  MissingSemicolon: "Missing semicolon.",
  MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
  MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
  ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
  ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
  ModuleAttributesWithDuplicateKeys: 'Duplicate key "%0" is not allowed in module attributes.',
  ModuleExportNameHasLoneSurrogate: "An export name cannot include a lone surrogate, found '\\u%0'.",
  ModuleExportUndefined: "Export '%0' is not defined.",
  MultipleDefaultsInSwitch: "Multiple default clauses.",
  NewlineAfterThrow: "Illegal newline after throw.",
  NoCatchOrFinally: "Missing catch or finally clause.",
  NumberIdentifier: "Identifier directly after number.",
  NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
  ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
  OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
  OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
  OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
  ParamDupe: "Argument name clash.",
  PatternHasAccessor: "Object pattern can't contain getter or setter.",
  PatternHasMethod: "Object pattern can't contain methods.",
  PipeBodyIsTighter: "Unexpected %0 after pipeline body; any %0 expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
  PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
  PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
  PipeTopicUnconfiguredToken: 'Invalid topic token %0. In order to use %0 as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "%0" }.',
  PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
  PipeUnparenthesizedBody: "Hack-style pipe body cannot be an unparenthesized %0 expression; please wrap it in parentheses.",
  PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
  PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
  PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
  PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
  PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
  PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
  PrivateInExpectedIn: "Private names are only allowed in property accesses (`obj.#%0`) or in `in` expressions (`#%0 in obj`).",
  PrivateNameRedeclaration: "Duplicate private name #%0.",
  RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
  RecordNoProto: "'__proto__' is not allowed in Record expressions.",
  RestTrailingComma: "Unexpected trailing comma after rest element.",
  SloppyFunction: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
  StaticPrototype: "Classes may not have static property named prototype.",
  StrictDelete: "Deleting local variable in strict mode.",
  StrictEvalArguments: "Assigning to '%0' in strict mode.",
  StrictEvalArgumentsBinding: "Binding '%0' in strict mode.",
  StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
  StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
  StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
  StrictWith: "'with' in strict mode.",
  SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
  SuperPrivateField: "Private fields can't be accessed on super.",
  TrailingDecorator: "Decorators must be attached to a class element.",
  TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
  UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
  UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
  UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
  UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
  UnexpectedKeyword: "Unexpected keyword '%0'.",
  UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
  UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
  UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
  UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
  UnexpectedPrivateField: "Private names can only be used as the name of a class element (i.e. class C { #p = 42; #m() {} } )\n or a property of member expression (i.e. this.#p).",
  UnexpectedReservedWord: "Unexpected reserved word '%0'.",
  UnexpectedSuper: "'super' is only allowed in object methods and classes.",
  UnexpectedToken: "Unexpected token '%0'.",
  UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
  UnsupportedBind: "Binding should be performed on object property.",
  UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
  UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
  UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
  UnsupportedMetaProperty: "The only valid meta property for %0 is %0.%1.",
  UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
  UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
  UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
  UnterminatedComment: "Unterminated comment.",
  UnterminatedRegExp: "Unterminated regular expression.",
  UnterminatedString: "Unterminated string constant.",
  UnterminatedTemplate: "Unterminated template.",
  VarRedeclaration: "Identifier '%0' has already been declared.",
  YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
  YieldInParameter: "Yield expression is not allowed in formal parameters.",
  ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
}, A.SyntaxError);
var w = C({
  ImportMetaOutsideModule: "import.meta may appear only with 'sourceType: \"module\"'",
  ImportOutsideModule: "'import' and 'export' may appear only with 'sourceType: \"module\"'"
}, A.SourceTypeModuleError);
function O(e, t) {
  return "flow" === t && "PatternIsOptional" === e ? "OptionalBindingPattern" : e;
}
function C(e, t, n) {
  var r = {};
  Object.keys(e).forEach(function (i) {
    r[i] = Object.freeze({
      code: t,
      reasonCode: O(i, n),
      template: e[i]
    });
  });
  return Object.freeze(r);
}
var I = function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    p(this, n);
    return t.apply(this, arguments);
  }
  c(n, [{
    key: "getLocationForPosition",
    value: function (e) {
      return e === this.state.start ? this.state.startLoc : e === this.state.lastTokStart ? this.state.lastTokStartLoc : e === this.state.end ? this.state.endLoc : e === this.state.lastTokEnd ? this.state.lastTokEndLoc : function (e, t) {
        var n;
        var r = 1;
        var i = 0;
        for (d.lastIndex = 0; (n = d.exec(e)) && n.index < t;) {
          r++;
          i = d.lastIndex;
        }
        return new T(r, t - i);
      }(this.input, e);
    }
  }, {
    key: "raise",
    value: function (e, t) {
      for (var n = t.code, r = t.reasonCode, i = t.template, a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), o = 2; o < a; o++) {
        s[o - 2] = arguments[o];
      }
      return this.raiseWithData.apply(this, [e, {
        code: n,
        reasonCode: r
      }, i].concat(s));
    }
  }, {
    key: "raiseOverwrite",
    value: function (e, t) {
      for (var n = t.code, r = t.template, i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) {
        a[s - 2] = arguments[s];
      }
      var o = this.getLocationForPosition(e);
      var l = r.replace(/%(\d+)/g, function (e, t) {
        return a[t];
      }) + " (".concat(o.line, ":").concat(o.column, ")");
      if (this.options.errorRecovery) {
        for (var u = this.state.errors, c = u.length - 1; c >= 0; c--) {
          var p = u[c];
          if (p.pos === e) {
            return Object.assign(p, {
              message: l
            });
          }
          if (p.pos < e) {
            break;
          }
        }
      }
      return this._raise({
        code: n,
        loc: o,
        pos: e
      }, l);
    }
  }, {
    key: "raiseWithData",
    value: function (e, t, n) {
      for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++) {
        i[a - 3] = arguments[a];
      }
      var s = this.getLocationForPosition(e);
      var o = n.replace(/%(\d+)/g, function (e, t) {
        return i[t];
      }) + " (".concat(s.line, ":").concat(s.column, ")");
      return this._raise(Object.assign({
        loc: s,
        pos: e
      }, t), o);
    }
  }, {
    key: "_raise",
    value: function (e, t) {
      var n = new SyntaxError(t);
      Object.assign(n, e);
      if (this.options.errorRecovery) {
        if (!this.isLookahead) {
          this.state.errors.push(n);
        }
        return n;
      }
      throw n;
    }
  }]);
  return n;
}(P);
var N = function e(t, n) {
  p(this, e);
  this.token = void 0;
  this.preserveSpace = void 0;
  this.token = t;
  this.preserveSpace = !!n;
};
var _ = {
  brace: new N("{"),
  template: new N("`", !0)
};
var D = function e(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  p(this, e);
  this.label = void 0;
  this.keyword = void 0;
  this.beforeExpr = void 0;
  this.startsExpr = void 0;
  this.rightAssociative = void 0;
  this.isLoop = void 0;
  this.isAssign = void 0;
  this.prefix = void 0;
  this.postfix = void 0;
  this.binop = void 0;
  this.label = t;
  this.keyword = n.keyword;
  this.beforeExpr = !!n.beforeExpr;
  this.startsExpr = !!n.startsExpr;
  this.rightAssociative = !!n.rightAssociative;
  this.isLoop = !!n.isLoop;
  this.isAssign = !!n.isAssign;
  this.prefix = !!n.prefix;
  this.postfix = !!n.postfix;
  this.binop = null != n.binop ? n.binop : null;
  this.updateContext = null;
};
var j = new Map();
function L(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  t.keyword = e;
  var n = Y(e, t);
  j.set(e, n);
  return n;
}
function M(e, t) {
  return Y(e, {
    beforeExpr: !0,
    binop: t
  });
}
var B = -1;
var F = [];
var R = [];
var U = [];
var K = [];
var V = [];
var W = [];
function Y(e) {
  var t;
  var n;
  var r;
  var i;
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  ++B;
  R.push(e);
  U.push(null != (t = a.binop) ? t : -1);
  K.push(null != (n = a.beforeExpr) && n);
  V.push(null != (r = a.startsExpr) && r);
  W.push(null != (i = a.prefix) && i);
  F.push(new D(e, a));
  return B;
}
function H(e) {
  var t;
  var n;
  var r;
  var i;
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  ++B;
  j.set(e, B);
  R.push(e);
  U.push(null != (t = a.binop) ? t : -1);
  K.push(null != (n = a.beforeExpr) && n);
  V.push(null != (r = a.startsExpr) && r);
  W.push(null != (i = a.prefix) && i);
  F.push(new D("name", a));
  return B;
}
var q = {
  bracketL: Y("[", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  bracketHashL: Y("#[", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  bracketBarL: Y("[|", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  bracketR: Y("]"),
  bracketBarR: Y("|]"),
  braceL: Y("{", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  braceBarL: Y("{|", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  braceHashL: Y("#{", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  braceR: Y("}", {
    beforeExpr: !0
  }),
  braceBarR: Y("|}"),
  parenL: Y("(", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  parenR: Y(")"),
  comma: Y(",", {
    beforeExpr: !0
  }),
  semi: Y(";", {
    beforeExpr: !0
  }),
  colon: Y(":", {
    beforeExpr: !0
  }),
  doubleColon: Y("::", {
    beforeExpr: !0
  }),
  dot: Y("."),
  question: Y("?", {
    beforeExpr: !0
  }),
  questionDot: Y("?."),
  arrow: Y("=>", {
    beforeExpr: !0
  }),
  template: Y("template"),
  ellipsis: Y("...", {
    beforeExpr: !0
  }),
  backQuote: Y("`", {
    startsExpr: !0
  }),
  dollarBraceL: Y("${", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  at: Y("@"),
  hash: Y("#", {
    startsExpr: !0
  }),
  interpreterDirective: Y("#!..."),
  eq: Y("=", {
    beforeExpr: !0,
    isAssign: !0
  }),
  assign: Y("_=", {
    beforeExpr: !0,
    isAssign: !0
  }),
  slashAssign: Y("_=", {
    beforeExpr: !0,
    isAssign: !0
  }),
  xorAssign: Y("_=", {
    beforeExpr: !0,
    isAssign: !0
  }),
  moduloAssign: Y("_=", {
    beforeExpr: !0,
    isAssign: !0
  }),
  incDec: Y("++/--", {
    prefix: !0,
    postfix: !0,
    startsExpr: !0
  }),
  bang: Y("!", {
    beforeExpr: !0,
    prefix: !0,
    startsExpr: !0
  }),
  tilde: Y("~", {
    beforeExpr: !0,
    prefix: !0,
    startsExpr: !0
  }),
  pipeline: M("|>", 0),
  nullishCoalescing: M("??", 1),
  logicalOR: M("||", 1),
  logicalAND: M("&&", 2),
  bitwiseOR: M("|", 3),
  bitwiseXOR: M("^", 4),
  bitwiseAND: M("&", 5),
  equality: M("==/!=/===/!==", 6),
  relational: M("</>/<=/>=", 7),
  bitShift: M("<</>>/>>>", 8),
  plusMin: Y("+/-", {
    beforeExpr: !0,
    binop: 9,
    prefix: !0,
    startsExpr: !0
  }),
  modulo: Y("%", {
    binop: 10,
    startsExpr: !0
  }),
  star: Y("*", {
    binop: 10
  }),
  slash: M("/", 10),
  exponent: Y("**", {
    beforeExpr: !0,
    binop: 11,
    rightAssociative: !0
  }),
  _in: L("in", {
    beforeExpr: !0,
    binop: 7
  }),
  _instanceof: L("instanceof", {
    beforeExpr: !0,
    binop: 7
  }),
  _break: L("break"),
  _case: L("case", {
    beforeExpr: !0
  }),
  _catch: L("catch"),
  _continue: L("continue"),
  _debugger: L("debugger"),
  _default: L("default", {
    beforeExpr: !0
  }),
  _else: L("else", {
    beforeExpr: !0
  }),
  _finally: L("finally"),
  _function: L("function", {
    startsExpr: !0
  }),
  _if: L("if"),
  _return: L("return", {
    beforeExpr: !0
  }),
  _switch: L("switch"),
  _throw: L("throw", {
    beforeExpr: !0,
    prefix: !0,
    startsExpr: !0
  }),
  _try: L("try"),
  _var: L("var"),
  _const: L("const"),
  _with: L("with"),
  _new: L("new", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  _this: L("this", {
    startsExpr: !0
  }),
  _super: L("super", {
    startsExpr: !0
  }),
  _class: L("class", {
    startsExpr: !0
  }),
  _extends: L("extends", {
    beforeExpr: !0
  }),
  _export: L("export"),
  _import: L("import", {
    startsExpr: !0
  }),
  _null: L("null", {
    startsExpr: !0
  }),
  _true: L("true", {
    startsExpr: !0
  }),
  _false: L("false", {
    startsExpr: !0
  }),
  _typeof: L("typeof", {
    beforeExpr: !0,
    prefix: !0,
    startsExpr: !0
  }),
  _void: L("void", {
    beforeExpr: !0,
    prefix: !0,
    startsExpr: !0
  }),
  _delete: L("delete", {
    beforeExpr: !0,
    prefix: !0,
    startsExpr: !0
  }),
  _do: L("do", {
    isLoop: !0,
    beforeExpr: !0
  }),
  _for: L("for", {
    isLoop: !0
  }),
  _while: L("while", {
    isLoop: !0
  }),
  _as: H("as", {
    startsExpr: !0
  }),
  _assert: H("assert", {
    startsExpr: !0
  }),
  _async: H("async", {
    startsExpr: !0
  }),
  _await: H("await", {
    startsExpr: !0
  }),
  _from: H("from", {
    startsExpr: !0
  }),
  _get: H("get", {
    startsExpr: !0
  }),
  _let: H("let", {
    startsExpr: !0
  }),
  _meta: H("meta", {
    startsExpr: !0
  }),
  _of: H("of", {
    startsExpr: !0
  }),
  _sent: H("sent", {
    startsExpr: !0
  }),
  _set: H("set", {
    startsExpr: !0
  }),
  _static: H("static", {
    startsExpr: !0
  }),
  _yield: H("yield", {
    startsExpr: !0
  }),
  _asserts: H("asserts", {
    startsExpr: !0
  }),
  _checks: H("checks", {
    startsExpr: !0
  }),
  _exports: H("exports", {
    startsExpr: !0
  }),
  _global: H("global", {
    startsExpr: !0
  }),
  _implements: H("implements", {
    startsExpr: !0
  }),
  _intrinsic: H("intrinsic", {
    startsExpr: !0
  }),
  _infer: H("infer", {
    startsExpr: !0
  }),
  _is: H("is", {
    startsExpr: !0
  }),
  _mixins: H("mixins", {
    startsExpr: !0
  }),
  _proto: H("proto", {
    startsExpr: !0
  }),
  _require: H("require", {
    startsExpr: !0
  }),
  _keyof: H("keyof", {
    startsExpr: !0
  }),
  _readonly: H("readonly", {
    startsExpr: !0
  }),
  _unique: H("unique", {
    startsExpr: !0
  }),
  _abstract: H("abstract", {
    startsExpr: !0
  }),
  _declare: H("declare", {
    startsExpr: !0
  }),
  _enum: H("enum", {
    startsExpr: !0
  }),
  _module: H("module", {
    startsExpr: !0
  }),
  _namespace: H("namespace", {
    startsExpr: !0
  }),
  _interface: H("interface", {
    startsExpr: !0
  }),
  _type: H("type", {
    startsExpr: !0
  }),
  _opaque: H("opaque", {
    startsExpr: !0
  }),
  name: Y("name", {
    startsExpr: !0
  }),
  string: Y("string", {
    startsExpr: !0
  }),
  num: Y("num", {
    startsExpr: !0
  }),
  bigint: Y("bigint", {
    startsExpr: !0
  }),
  decimal: Y("decimal", {
    startsExpr: !0
  }),
  regexp: Y("regexp", {
    startsExpr: !0
  }),
  privateName: Y("#name", {
    startsExpr: !0
  }),
  eof: Y("eof"),
  jsxName: Y("jsxName"),
  jsxText: Y("jsxText", {
    beforeExpr: !0
  }),
  jsxTagStart: Y("jsxTagStart", {
    startsExpr: !0
  }),
  jsxTagEnd: Y("jsxTagEnd"),
  placeholder: Y("%%", {
    startsExpr: !0
  })
};
function J(e) {
  return e >= 85 && e <= 120;
}
function X(e) {
  return e >= 50 && e <= 120;
}
function G(e) {
  return e >= 50 && e <= 124;
}
function z(e) {
  return V[e];
}
function $(e) {
  return e >= 117 && e <= 119;
}
function Q(e) {
  return e >= 50 && e <= 84;
}
function Z(e) {
  return R[e];
}
function ee(e) {
  return U[e];
}
function te(e) {
  return F[e];
}
function ne(e) {
  return "number" === typeof e;
}
F[8].updateContext = function (e) {
  e.pop();
};
F[5].updateContext = F[7].updateContext = F[23].updateContext = function (e) {
  e.push(_.brace);
};
F[22].updateContext = function (e) {
  if (e[e.length - 1] === _.template) {
    e.pop();
  } else {
    e.push(_.template);
  }
};
F[130].updateContext = function (e) {
  e.push(_.j_expr, _.j_oTag);
};
var re = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
var ie = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
var ae = new RegExp("[" + re + "]");
var se = new RegExp("[" + re + ie + "]");
re = ie = null;
var oe = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
var le = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function ue(e, t) {
  for (var n = 65536, r = 0, i = t.length; r < i; r += 2) {
    if ((n += t[r]) > e) {
      return !1;
    }
    if ((n += t[r + 1]) >= e) {
      return !0;
    }
  }
  return !1;
}
function ce(e) {
  return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && ae.test(String.fromCharCode(e)) : ue(e, oe)));
}
function pe(e) {
  return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && se.test(String.fromCharCode(e)) : ue(e, oe) || ue(e, le))));
}
var fe = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"];
var de = ["eval", "arguments"];
var he = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]);
var ye = new Set(fe);
var me = new Set(de);
function ve(e, t) {
  return t && "await" === e || "enum" === e;
}
function ge(e, t) {
  return ve(e, t) || ye.has(e);
}
function Te(e) {
  return me.has(e);
}
function be(e, t) {
  return ge(e, t) || Te(e);
}
var Se = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
var Ee = function e(t) {
  p(this, e);
  this.var = new Set();
  this.lexical = new Set();
  this.functions = new Set();
  this.flags = t;
};
var xe = function () {
  function e(t, n) {
    p(this, e);
    this.scopeStack = [];
    this.undefinedExports = new Map();
    this.undefinedPrivateNames = new Map();
    this.raise = t;
    this.inModule = n;
  }
  c(e, [{
    key: "inFunction",
    get: function () {
      return (2 & this.currentVarScopeFlags()) > 0;
    }
  }, {
    key: "allowSuper",
    get: function () {
      return (16 & this.currentThisScopeFlags()) > 0;
    }
  }, {
    key: "allowDirectSuper",
    get: function () {
      return (32 & this.currentThisScopeFlags()) > 0;
    }
  }, {
    key: "inClass",
    get: function () {
      return (64 & this.currentThisScopeFlags()) > 0;
    }
  }, {
    key: "inClassAndNotInNonArrowFunction",
    get: function () {
      var e = this.currentThisScopeFlags();
      return (64 & e) > 0 && 0 === (2 & e);
    }
  }, {
    key: "inStaticBlock",
    get: function () {
      for (var e = this.scopeStack.length - 1;; e--) {
        var t = this.scopeStack[e].flags;
        if (128 & t) {
          return !0;
        }
        if (323 & t) {
          return !1;
        }
      }
    }
  }, {
    key: "inNonArrowFunction",
    get: function () {
      return (2 & this.currentThisScopeFlags()) > 0;
    }
  }, {
    key: "treatFunctionsAsVar",
    get: function () {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }
  }, {
    key: "createScope",
    value: function (e) {
      return new Ee(e);
    }
  }, {
    key: "enter",
    value: function (e) {
      this.scopeStack.push(this.createScope(e));
    }
  }, {
    key: "exit",
    value: function () {
      this.scopeStack.pop();
    }
  }, {
    key: "treatFunctionsAsVarInScope",
    value: function (e) {
      return !!(2 & e.flags || !this.inModule && 1 & e.flags);
    }
  }, {
    key: "declareName",
    value: function (e, t, n) {
      var r = this.currentScope();
      if (8 & t || 16 & t) {
        this.checkRedeclarationInScope(r, e, t, n);
        if (16 & t) {
          r.functions.add(e);
        } else {
          r.lexical.add(e);
        }
        if (8 & t) {
          this.maybeExportDefined(r, e);
        }
      } else if (4 & t) {
        for (var i = this.scopeStack.length - 1; i >= 0 && (r = this.scopeStack[i], this.checkRedeclarationInScope(r, e, t, n), r.var.add(e), this.maybeExportDefined(r, e), !(259 & r.flags)); --i) {
          ;
        }
      }
      if (this.inModule && 1 & r.flags) {
        this.undefinedExports.delete(e);
      }
    }
  }, {
    key: "maybeExportDefined",
    value: function (e, t) {
      if (this.inModule && 1 & e.flags) {
        this.undefinedExports.delete(t);
      }
    }
  }, {
    key: "checkRedeclarationInScope",
    value: function (e, t, n, r) {
      if (this.isRedeclaredInScope(e, t, n)) {
        this.raise(r, k.VarRedeclaration, t);
      }
    }
  }, {
    key: "isRedeclaredInScope",
    value: function (e, t, n) {
      return !!(1 & n) && (8 & n ? e.lexical.has(t) || e.functions.has(t) || e.var.has(t) : 16 & n ? e.lexical.has(t) || !this.treatFunctionsAsVarInScope(e) && e.var.has(t) : e.lexical.has(t) && !(8 & e.flags && e.lexical.values().next().value === t) || !this.treatFunctionsAsVarInScope(e) && e.functions.has(t));
    }
  }, {
    key: "checkLocalExport",
    value: function (e) {
      var t = e.name;
      var n = this.scopeStack[0];
      if (!(n.lexical.has(t) || n.var.has(t) || n.functions.has(t))) {
        this.undefinedExports.set(t, e.start);
      }
    }
  }, {
    key: "currentScope",
    value: function () {
      return this.scopeStack[this.scopeStack.length - 1];
    }
  }, {
    key: "currentVarScopeFlags",
    value: function () {
      for (var e = this.scopeStack.length - 1;; e--) {
        var t = this.scopeStack[e].flags;
        if (259 & t) {
          return t;
        }
      }
    }
  }, {
    key: "currentThisScopeFlags",
    value: function () {
      for (var e = this.scopeStack.length - 1;; e--) {
        var t = this.scopeStack[e].flags;
        if (323 & t && !(4 & t)) {
          return t;
        }
      }
    }
  }]);
  return e;
}();
var Pe = function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    var e;
    p(this, n);
    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) {
      i[a] = arguments[a];
    }
    (e = t.call.apply(t, [this].concat(i))).declareFunctions = new Set();
    return e;
  }
  return n;
}(Ee);
var Ae = function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    p(this, n);
    return t.apply(this, arguments);
  }
  c(n, [{
    key: "createScope",
    value: function (e) {
      return new Pe(e);
    }
  }, {
    key: "declareName",
    value: function (e, t, r) {
      var i = this.currentScope();
      if (2048 & t) {
        this.checkRedeclarationInScope(i, e, t, r);
        this.maybeExportDefined(i, e);
        return void i.declareFunctions.add(e);
      }
      a(s(n.prototype), "declareName", this).apply(this, arguments);
    }
  }, {
    key: "isRedeclaredInScope",
    value: function (e, t, r) {
      return !!a(s(n.prototype), "isRedeclaredInScope", this).apply(this, arguments) || !!(2048 & r) && !e.declareFunctions.has(t) && (e.lexical.has(t) || e.functions.has(t));
    }
  }, {
    key: "checkLocalExport",
    value: function (e) {
      if (!this.scopeStack[0].declareFunctions.has(e.name)) {
        a(s(n.prototype), "checkLocalExport", this).call(this, e);
      }
    }
  }]);
  return n;
}(xe);
var ke = function () {
  function e() {
    p(this, e);
    this.strict = void 0;
    this.curLine = void 0;
    this.lineStart = void 0;
    this.startLoc = void 0;
    this.endLoc = void 0;
    this.errors = [];
    this.potentialArrowAt = -1;
    this.noArrowAt = [];
    this.noArrowParamsConversionAt = [];
    this.maybeInArrowParameters = !1;
    this.inType = !1;
    this.noAnonFunctionType = !1;
    this.inPropertyName = !1;
    this.hasFlowComment = !1;
    this.isAmbientContext = !1;
    this.inAbstractClass = !1;
    this.topicContext = {
      maxNumOfResolvableTopics: 0,
      maxTopicIndex: null
    };
    this.soloAwait = !1;
    this.inFSharpPipelineDirectBody = !1;
    this.labels = [];
    this.decoratorStack = [[]];
    this.comments = [];
    this.commentStack = [];
    this.pos = 0;
    this.type = 127;
    this.value = null;
    this.start = 0;
    this.end = 0;
    this.lastTokEndLoc = null;
    this.lastTokStartLoc = null;
    this.lastTokStart = 0;
    this.lastTokEnd = 0;
    this.context = [_.brace];
    this.exprAllowed = !0;
    this.containsEsc = !1;
    this.strictErrors = new Map();
    this.tokensLength = 0;
  }
  c(e, [{
    key: "init",
    value: function (e) {
      var t = e.strictMode;
      var n = e.sourceType;
      var r = e.startLine;
      var i = e.startColumn;
      this.strict = !1 !== t && (!0 === t || "module" === n);
      this.curLine = r;
      this.lineStart = -i;
      this.startLoc = this.endLoc = new T(r, i);
    }
  }, {
    key: "curPosition",
    value: function () {
      return new T(this.curLine, this.pos - this.lineStart);
    }
  }, {
    key: "clone",
    value: function (t) {
      for (var n = new e(), r = Object.keys(this), i = 0, a = r.length; i < a; i++) {
        var s = r[i];
        var o = this[s];
        if (!t && Array.isArray(o)) {
          o = o.slice();
        }
        n[s] = o;
      }
      return n;
    }
  }]);
  return e;
}();
var we = function (e) {
  return e >= 48 && e <= 57;
};
var Oe = new Set([103, 109, 115, 105, 121, 117, 100]);
var Ce = {
  decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
  hex: [46, 88, 95, 120]
};
var Ie = {
  bin: [48, 49]
};
Ie.oct = [].concat(u(Ie.bin), [50, 51, 52, 53, 54, 55]);
Ie.dec = [].concat(u(Ie.oct), [56, 57]);
Ie.hex = [].concat(u(Ie.dec), [65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102]);
var Ne = function e(t) {
  p(this, e);
  this.type = t.type;
  this.value = t.value;
  this.start = t.start;
  this.end = t.end;
  this.loc = new b(t.startLoc, t.endLoc);
};
var _e = function (e) {
  o(n, e);
  var t = l(n);
  function n(e, r) {
    var i;
    p(this, n);
    (i = t.call(this)).isLookahead = void 0;
    i.tokens = [];
    i.state = new ke();
    i.state.init(e);
    i.input = r;
    i.length = r.length;
    i.isLookahead = !1;
    return i;
  }
  c(n, [{
    key: "pushToken",
    value: function (e) {
      this.tokens.length = this.state.tokensLength;
      this.tokens.push(e);
      ++this.state.tokensLength;
    }
  }, {
    key: "next",
    value: function () {
      this.checkKeywordEscapes();
      if (this.options.tokens) {
        this.pushToken(new Ne(this.state));
      }
      this.state.lastTokEnd = this.state.end;
      this.state.lastTokStart = this.state.start;
      this.state.lastTokEndLoc = this.state.endLoc;
      this.state.lastTokStartLoc = this.state.startLoc;
      this.nextToken();
    }
  }, {
    key: "eat",
    value: function (e) {
      return !!this.match(e) && (this.next(), !0);
    }
  }, {
    key: "match",
    value: function (e) {
      return this.state.type === e;
    }
  }, {
    key: "createLookaheadState",
    value: function (e) {
      return {
        pos: e.pos,
        value: null,
        type: e.type,
        start: e.start,
        end: e.end,
        lastTokEnd: e.end,
        context: [this.curContext()],
        inType: e.inType
      };
    }
  }, {
    key: "lookahead",
    value: function () {
      var e = this.state;
      this.state = this.createLookaheadState(e);
      this.isLookahead = !0;
      this.nextToken();
      this.isLookahead = !1;
      var t = this.state;
      this.state = e;
      return t;
    }
  }, {
    key: "nextTokenStart",
    value: function () {
      return this.nextTokenStartSince(this.state.pos);
    }
  }, {
    key: "nextTokenStartSince",
    value: function (e) {
      y.lastIndex = e;
      return y.test(this.input) ? y.lastIndex : e;
    }
  }, {
    key: "lookaheadCharCode",
    value: function () {
      return this.input.charCodeAt(this.nextTokenStart());
    }
  }, {
    key: "codePointAtPos",
    value: function (e) {
      var t = this.input.charCodeAt(e);
      if (55296 === (64512 & t) && ++e < this.input.length) {
        var n = this.input.charCodeAt(e);
        if (56320 === (64512 & n)) {
          t = 65536 + ((1023 & t) << 10) + (1023 & n);
        }
      }
      return t;
    }
  }, {
    key: "setStrict",
    value: function (e) {
      var t = this;
      this.state.strict = e;
      if (e) {
        this.state.strictErrors.forEach(function (e, n) {
          return t.raise(n, e);
        });
        this.state.strictErrors.clear();
      }
    }
  }, {
    key: "curContext",
    value: function () {
      return this.state.context[this.state.context.length - 1];
    }
  }, {
    key: "nextToken",
    value: function () {
      var e = this.curContext();
      if (!e.preserveSpace) {
        this.skipSpace();
      }
      this.state.start = this.state.pos;
      if (!this.isLookahead) {
        this.state.startLoc = this.state.curPosition();
      }
      if (this.state.pos >= this.length) {
        this.finishToken(127);
      } else {
        if (e === _.template) {
          this.readTmplToken();
        } else {
          this.getTokenFromCode(this.codePointAtPos(this.state.pos));
        }
      }
    }
  }, {
    key: "skipBlockComment",
    value: function () {
      var e;
      if (!this.isLookahead) {
        e = this.state.curPosition();
      }
      var t = this.state.pos;
      var n = this.input.indexOf("*/", t + 2);
      if (-1 === n) {
        throw this.raise(t, k.UnterminatedComment);
      }
      for (this.state.pos = n + 2, d.lastIndex = t + 2; d.test(this.input) && d.lastIndex <= n;) {
        ++this.state.curLine;
        this.state.lineStart = d.lastIndex;
      }
      if (!this.isLookahead) {
        var r = {
          type: "CommentBlock",
          value: this.input.slice(t + 2, n),
          start: t,
          end: n + 2,
          loc: new b(e, this.state.curPosition())
        };
        if (this.options.tokens) {
          this.pushToken(r);
        }
        return r;
      }
    }
  }, {
    key: "skipLineComment",
    value: function (e) {
      var t;
      var n = this.state.pos;
      if (!this.isLookahead) {
        t = this.state.curPosition();
      }
      var r = this.input.charCodeAt(this.state.pos += e);
      if (this.state.pos < this.length) {
        for (; !h(r) && ++this.state.pos < this.length;) {
          r = this.input.charCodeAt(this.state.pos);
        }
      }
      if (!this.isLookahead) {
        var i = this.state.pos;
        var a = {
          type: "CommentLine",
          value: this.input.slice(n + e, i),
          start: n,
          end: i,
          loc: new b(t, this.state.curPosition())
        };
        if (this.options.tokens) {
          this.pushToken(a);
        }
        return a;
      }
    }
  }, {
    key: "skipSpace",
    value: function () {
      var e = this.state.pos;
      var t = [];
      e: for (; this.state.pos < this.length;) {
        var n = this.input.charCodeAt(this.state.pos);
        switch (n) {
          case 32:
          case 160:
          case 9:
            ++this.state.pos;
            break;
          case 13:
            if (10 === this.input.charCodeAt(this.state.pos + 1)) {
              ++this.state.pos;
            }
          case 10:
          case 8232:
          case 8233:
            ++this.state.pos;
            ++this.state.curLine;
            this.state.lineStart = this.state.pos;
            break;
          case 47:
            switch (this.input.charCodeAt(this.state.pos + 1)) {
              case 42:
                var r = this.skipBlockComment();
                if (void 0 !== r) {
                  this.addComment(r);
                  if (this.options.attachComment) {
                    t.push(r);
                  }
                }
                break;
              case 47:
                var i = this.skipLineComment(2);
                if (void 0 !== i) {
                  this.addComment(i);
                  if (this.options.attachComment) {
                    t.push(i);
                  }
                }
                break;
              default:
                break e;
            }
            break;
          default:
            if (g(n)) {
              ++this.state.pos;
            } else if (45 !== n || this.inModule) {
              if (60 !== n || this.inModule) {
                break e;
              }
              var a = this.state.pos;
              if (33 !== this.input.charCodeAt(a + 1) || 45 !== this.input.charCodeAt(a + 2) || 45 !== this.input.charCodeAt(a + 3)) {
                break e;
              }
              var s = this.skipLineComment(4);
              if (void 0 !== s) {
                this.addComment(s);
                if (this.options.attachComment) {
                  t.push(s);
                }
              }
            } else {
              var o = this.state.pos;
              if (45 !== this.input.charCodeAt(o + 1) || 62 !== this.input.charCodeAt(o + 2) || !(0 === e || this.state.lineStart > e)) {
                break e;
              }
              var l = this.skipLineComment(3);
              if (void 0 !== l) {
                this.addComment(l);
                if (this.options.attachComment) {
                  t.push(l);
                }
              }
            }
        }
      }
      if (t.length > 0) {
        var u = {
          start: e,
          end: this.state.pos,
          comments: t,
          leadingNode: null,
          trailingNode: null,
          containingNode: null
        };
        this.state.commentStack.push(u);
      }
    }
  }, {
    key: "finishToken",
    value: function (e, t) {
      this.state.end = this.state.pos;
      var n = this.state.type;
      this.state.type = e;
      this.state.value = t;
      if (!this.isLookahead) {
        this.state.endLoc = this.state.curPosition();
        this.updateContext(n);
      }
    }
  }, {
    key: "readToken_numberSign",
    value: function () {
      if (0 !== this.state.pos || !this.readToken_interpreter()) {
        var e = this.state.pos + 1;
        var t = this.codePointAtPos(e);
        if (t >= 48 && t <= 57) {
          throw this.raise(this.state.pos, k.UnexpectedDigitAfterHash);
        }
        if (123 === t || 91 === t && this.hasPlugin("recordAndTuple")) {
          this.expectPlugin("recordAndTuple");
          if ("hash" !== this.getPluginOption("recordAndTuple", "syntaxType")) {
            throw this.raise(this.state.pos, 123 === t ? k.RecordExpressionHashIncorrectStartSyntaxType : k.TupleExpressionHashIncorrectStartSyntaxType);
          }
          this.state.pos += 2;
          if (123 === t) {
            this.finishToken(7);
          } else {
            this.finishToken(1);
          }
        } else if (ce(t)) {
          ++this.state.pos;
          this.finishToken(126, this.readWord1(t));
        } else {
          if (92 === t) {
            ++this.state.pos;
            this.finishToken(126, this.readWord1());
          } else {
            this.finishOp(25, 1);
          }
        }
      }
    }
  }, {
    key: "readToken_dot",
    value: function () {
      var e = this.input.charCodeAt(this.state.pos + 1);
      if (e >= 48 && e <= 57) {
        this.readNumber(!0);
      } else {
        if (46 === e && 46 === this.input.charCodeAt(this.state.pos + 2)) {
          this.state.pos += 3;
          this.finishToken(21);
        } else {
          ++this.state.pos;
          this.finishToken(16);
        }
      }
    }
  }, {
    key: "readToken_slash",
    value: function () {
      if (61 === this.input.charCodeAt(this.state.pos + 1)) {
        this.finishOp(29, 2);
      } else {
        this.finishOp(48, 1);
      }
    }
  }, {
    key: "readToken_interpreter",
    value: function () {
      if (0 !== this.state.pos || this.length < 2) {
        return !1;
      }
      var e = this.input.charCodeAt(this.state.pos + 1);
      if (33 !== e) {
        return !1;
      }
      var t = this.state.pos;
      for (this.state.pos += 1; !h(e) && ++this.state.pos < this.length;) {
        e = this.input.charCodeAt(this.state.pos);
      }
      var n = this.input.slice(t + 2, this.state.pos);
      this.finishToken(26, n);
      return !0;
    }
  }, {
    key: "readToken_mult_modulo",
    value: function (e) {
      var t = 42 === e ? 47 : 46;
      var n = 1;
      var r = this.input.charCodeAt(this.state.pos + 1);
      if (42 === e && 42 === r) {
        n++;
        r = this.input.charCodeAt(this.state.pos + 2);
        t = 49;
      }
      if (!(61 !== r || this.state.inType)) {
        n++;
        t = 37 === e ? 31 : 28;
      }
      this.finishOp(t, n);
    }
  }, {
    key: "readToken_pipe_amp",
    value: function (e) {
      var t = this.input.charCodeAt(this.state.pos + 1);
      if (t !== e) {
        if (124 === e) {
          if (62 === t) {
            return void this.finishOp(35, 2);
          }
          if (this.hasPlugin("recordAndTuple") && 125 === t) {
            if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) {
              throw this.raise(this.state.pos, k.RecordExpressionBarIncorrectEndSyntaxType);
            }
            this.state.pos += 2;
            return void this.finishToken(9);
          }
          if (this.hasPlugin("recordAndTuple") && 93 === t) {
            if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) {
              throw this.raise(this.state.pos, k.TupleExpressionBarIncorrectEndSyntaxType);
            }
            this.state.pos += 2;
            return void this.finishToken(4);
          }
        }
        if (61 !== t) {
          this.finishOp(124 === e ? 39 : 41, 1);
        } else {
          this.finishOp(28, 2);
        }
      } else if (61 === this.input.charCodeAt(this.state.pos + 2)) {
        this.finishOp(28, 3);
      } else {
        this.finishOp(124 === e ? 37 : 38, 2);
      }
    }
  }, {
    key: "readToken_caret",
    value: function () {
      if (61 !== this.input.charCodeAt(this.state.pos + 1) || this.state.inType) {
        this.finishOp(40, 1);
      } else {
        this.finishOp(30, 2);
      }
    }
  }, {
    key: "readToken_plus_min",
    value: function (e) {
      var t = this.input.charCodeAt(this.state.pos + 1);
      if (t !== e) {
        if (61 === t) {
          this.finishOp(28, 2);
        } else {
          this.finishOp(45, 1);
        }
      } else {
        this.finishOp(32, 2);
      }
    }
  }, {
    key: "readToken_lt_gt",
    value: function (e) {
      var t = this.input.charCodeAt(this.state.pos + 1);
      var n = 1;
      if (t === e) {
        n = 62 === e && 62 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2;
        return 61 === this.input.charCodeAt(this.state.pos + n) ? void this.finishOp(28, n + 1) : void this.finishOp(44, n);
      }
      if (61 === t) {
        n = 2;
      }
      this.finishOp(43, n);
    }
  }, {
    key: "readToken_eq_excl",
    value: function (e) {
      var t = this.input.charCodeAt(this.state.pos + 1);
      if (61 !== t) {
        return 61 === e && 62 === t ? (this.state.pos += 2, void this.finishToken(19)) : void this.finishOp(61 === e ? 27 : 33, 1);
      }
      this.finishOp(42, 61 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2);
    }
  }, {
    key: "readToken_question",
    value: function () {
      var e = this.input.charCodeAt(this.state.pos + 1);
      var t = this.input.charCodeAt(this.state.pos + 2);
      if (63 === e) {
        if (61 === t) {
          this.finishOp(28, 3);
        } else {
          this.finishOp(36, 2);
        }
      } else {
        if (46 !== e || t >= 48 && t <= 57) {
          ++this.state.pos;
          this.finishToken(17);
        } else {
          this.state.pos += 2;
          this.finishToken(18);
        }
      }
    }
  }, {
    key: "getTokenFromCode",
    value: function (e) {
      switch (e) {
        case 46:
          return void this.readToken_dot();
        case 40:
          ++this.state.pos;
          return void this.finishToken(10);
        case 41:
          ++this.state.pos;
          return void this.finishToken(11);
        case 59:
          ++this.state.pos;
          return void this.finishToken(13);
        case 44:
          ++this.state.pos;
          return void this.finishToken(12);
        case 91:
          if (this.hasPlugin("recordAndTuple") && 124 === this.input.charCodeAt(this.state.pos + 1)) {
            if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) {
              throw this.raise(this.state.pos, k.TupleExpressionBarIncorrectStartSyntaxType);
            }
            this.state.pos += 2;
            this.finishToken(2);
          } else {
            ++this.state.pos;
            this.finishToken(0);
          }
          return;
        case 93:
          ++this.state.pos;
          return void this.finishToken(3);
        case 123:
          if (this.hasPlugin("recordAndTuple") && 124 === this.input.charCodeAt(this.state.pos + 1)) {
            if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) {
              throw this.raise(this.state.pos, k.RecordExpressionBarIncorrectStartSyntaxType);
            }
            this.state.pos += 2;
            this.finishToken(6);
          } else {
            ++this.state.pos;
            this.finishToken(5);
          }
          return;
        case 125:
          ++this.state.pos;
          return void this.finishToken(8);
        case 58:
          return void (this.hasPlugin("functionBind") && 58 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14)));
        case 63:
          return void this.readToken_question();
        case 96:
          ++this.state.pos;
          return void this.finishToken(22);
        case 48:
          var t = this.input.charCodeAt(this.state.pos + 1);
          if (120 === t || 88 === t) {
            return void this.readRadixNumber(16);
          }
          if (111 === t || 79 === t) {
            return void this.readRadixNumber(8);
          }
          if (98 === t || 66 === t) {
            return void this.readRadixNumber(2);
          }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return void this.readNumber(!1);
        case 34:
        case 39:
          return void this.readString(e);
        case 47:
          return void this.readToken_slash();
        case 37:
        case 42:
          return void this.readToken_mult_modulo(e);
        case 124:
        case 38:
          return void this.readToken_pipe_amp(e);
        case 94:
          return void this.readToken_caret();
        case 43:
        case 45:
          return void this.readToken_plus_min(e);
        case 60:
        case 62:
          return void this.readToken_lt_gt(e);
        case 61:
        case 33:
          return void this.readToken_eq_excl(e);
        case 126:
          return void this.finishOp(34, 1);
        case 64:
          ++this.state.pos;
          return void this.finishToken(24);
        case 35:
          return void this.readToken_numberSign();
        case 92:
          return void this.readWord();
        default:
          if (ce(e)) {
            return void this.readWord(e);
          }
      }
      throw this.raise(this.state.pos, k.InvalidOrUnexpectedToken, String.fromCodePoint(e));
    }
  }, {
    key: "finishOp",
    value: function (e, t) {
      var n = this.input.slice(this.state.pos, this.state.pos + t);
      this.state.pos += t;
      this.finishToken(e, n);
    }
  }, {
    key: "readRegexp",
    value: function () {
      for (var e, t, n = this.state.start + 1, r = this.state.pos;; ++r) {
        if (r >= this.length) {
          throw this.raise(n, k.UnterminatedRegExp);
        }
        var i = this.input.charCodeAt(r);
        if (h(i)) {
          throw this.raise(n, k.UnterminatedRegExp);
        }
        if (e) {
          e = !1;
        } else {
          if (91 === i) {
            t = !0;
          } else if (93 === i && t) {
            t = !1;
          } else if (47 === i && !t) {
            break;
          }
          e = 92 === i;
        }
      }
      var a = this.input.slice(n, r);
      ++r;
      for (var s = ""; r < this.length;) {
        var o = this.codePointAtPos(r);
        var l = String.fromCharCode(o);
        if (Oe.has(o)) {
          if (s.includes(l)) {
            this.raise(r + 1, k.DuplicateRegExpFlags);
          }
        } else {
          if (!pe(o) && 92 !== o) {
            break;
          }
          this.raise(r + 1, k.MalformedRegExpFlags);
        }
        ++r;
        s += l;
      }
      this.state.pos = r;
      this.finishToken(125, {
        pattern: a,
        flags: s
      });
    }
  }, {
    key: "readInt",
    value: function (e, t, n) {
      for (var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = this.state.pos, a = 16 === e ? Ce.hex : Ce.decBinOct, s = 16 === e ? Ie.hex : 10 === e ? Ie.dec : 8 === e ? Ie.oct : Ie.bin, o = !1, l = 0, u = 0, c = null == t ? 1 / 0 : t; u < c; ++u) {
        var p = this.input.charCodeAt(this.state.pos);
        var f = void 0;
        if (95 !== p) {
          if ((f = p >= 97 ? p - 97 + 10 : p >= 65 ? p - 65 + 10 : we(p) ? p - 48 : 1 / 0) >= e) {
            if (this.options.errorRecovery && f <= 9) {
              f = 0;
              this.raise(this.state.start + u + 2, k.InvalidDigit, e);
            } else {
              if (!n) {
                break;
              }
              f = 0;
              o = !0;
            }
          }
          ++this.state.pos;
          l = l * e + f;
        } else {
          var d = this.input.charCodeAt(this.state.pos - 1);
          var h = this.input.charCodeAt(this.state.pos + 1);
          if (-1 === s.indexOf(h) || a.indexOf(d) > -1 || a.indexOf(h) > -1 || Number.isNaN(h)) {
            this.raise(this.state.pos, k.UnexpectedNumericSeparator);
          }
          if (!r) {
            this.raise(this.state.pos, k.NumericSeparatorInEscapeSequence);
          }
          ++this.state.pos;
        }
      }
      return this.state.pos === i || null != t && this.state.pos - i !== t || o ? null : l;
    }
  }, {
    key: "readRadixNumber",
    value: function (e) {
      var t = this.state.pos;
      var n = !1;
      this.state.pos += 2;
      var r = this.readInt(e);
      if (null == r) {
        this.raise(this.state.start + 2, k.InvalidDigit, e);
      }
      var i = this.input.charCodeAt(this.state.pos);
      if (110 === i) {
        ++this.state.pos;
        n = !0;
      } else if (109 === i) {
        throw this.raise(t, k.InvalidDecimal);
      }
      if (ce(this.codePointAtPos(this.state.pos))) {
        throw this.raise(this.state.pos, k.NumberIdentifier);
      }
      if (n) {
        var a = this.input.slice(t, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(123, a);
      } else {
        this.finishToken(122, r);
      }
    }
  }, {
    key: "readNumber",
    value: function (e) {
      var t = this.state.pos;
      var n = !1;
      var r = !1;
      var i = !1;
      var a = !1;
      var s = !1;
      if (!(e || null !== this.readInt(10))) {
        this.raise(t, k.InvalidNumber);
      }
      var o = this.state.pos - t >= 2 && 48 === this.input.charCodeAt(t);
      if (o) {
        var l = this.input.slice(t, this.state.pos);
        this.recordStrictModeErrors(t, k.StrictOctalLiteral);
        if (!this.state.strict) {
          var u = l.indexOf("_");
          if (u > 0) {
            this.raise(u + t, k.ZeroDigitNumericSeparator);
          }
        }
        s = o && !/[89]/.test(l);
      }
      var c = this.input.charCodeAt(this.state.pos);
      if (!(46 !== c || s)) {
        ++this.state.pos;
        this.readInt(10);
        n = !0;
        c = this.input.charCodeAt(this.state.pos);
      }
      if (!(69 !== c && 101 !== c || s)) {
        if (!(43 !== (c = this.input.charCodeAt(++this.state.pos)) && 45 !== c)) {
          ++this.state.pos;
        }
        if (null === this.readInt(10)) {
          this.raise(t, k.InvalidOrMissingExponent);
        }
        n = !0;
        a = !0;
        c = this.input.charCodeAt(this.state.pos);
      }
      if (110 === c) {
        if (n || o) {
          this.raise(t, k.InvalidBigIntLiteral);
        }
        ++this.state.pos;
        r = !0;
      }
      if (109 === c) {
        this.expectPlugin("decimal", this.state.pos);
        if (a || o) {
          this.raise(t, k.InvalidDecimal);
        }
        ++this.state.pos;
        i = !0;
      }
      if (ce(this.codePointAtPos(this.state.pos))) {
        throw this.raise(this.state.pos, k.NumberIdentifier);
      }
      var p = this.input.slice(t, this.state.pos).replace(/[_mn]/g, "");
      if (r) {
        this.finishToken(123, p);
      } else if (i) {
        this.finishToken(124, p);
      } else {
        var f = s ? parseInt(p, 8) : parseFloat(p);
        this.finishToken(122, f);
      }
    }
  }, {
    key: "readCodePoint",
    value: function (e) {
      var t;
      if (123 === this.input.charCodeAt(this.state.pos)) {
        var n = ++this.state.pos;
        t = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, !0, e);
        ++this.state.pos;
        if (null !== t && t > 1114111) {
          if (!e) {
            return null;
          }
          this.raise(n, k.InvalidCodePoint);
        }
      } else {
        t = this.readHexChar(4, !1, e);
      }
      return t;
    }
  }, {
    key: "readString",
    value: function (e) {
      for (var t = "", n = ++this.state.pos;;) {
        if (this.state.pos >= this.length) {
          throw this.raise(this.state.start, k.UnterminatedString);
        }
        var r = this.input.charCodeAt(this.state.pos);
        if (r === e) {
          break;
        }
        if (92 === r) {
          t += this.input.slice(n, this.state.pos);
          t += this.readEscapedChar(!1);
          n = this.state.pos;
        } else if (8232 === r || 8233 === r) {
          ++this.state.pos;
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
        } else {
          if (h(r)) {
            throw this.raise(this.state.start, k.UnterminatedString);
          }
          ++this.state.pos;
        }
      }
      t += this.input.slice(n, this.state.pos++);
      this.finishToken(121, t);
    }
  }, {
    key: "readTmplToken",
    value: function () {
      for (var e = "", t = this.state.pos, n = !1;;) {
        if (this.state.pos >= this.length) {
          throw this.raise(this.state.start, k.UnterminatedTemplate);
        }
        var r = this.input.charCodeAt(this.state.pos);
        if (96 === r || 36 === r && 123 === this.input.charCodeAt(this.state.pos + 1)) {
          return this.state.pos === this.state.start && this.match(20) ? 36 === r ? (this.state.pos += 2, void this.finishToken(23)) : (++this.state.pos, void this.finishToken(22)) : (e += this.input.slice(t, this.state.pos), void this.finishToken(20, n ? null : e));
        }
        if (92 === r) {
          e += this.input.slice(t, this.state.pos);
          var i = this.readEscapedChar(!0);
          if (null === i) {
            n = !0;
          } else {
            e += i;
          }
          t = this.state.pos;
        } else if (h(r)) {
          switch (e += this.input.slice(t, this.state.pos), ++this.state.pos, r) {
            case 13:
              if (10 === this.input.charCodeAt(this.state.pos)) {
                ++this.state.pos;
              }
            case 10:
              e += "\n";
              break;
            default:
              e += String.fromCharCode(r);
          }
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          t = this.state.pos;
        } else {
          ++this.state.pos;
        }
      }
    }
  }, {
    key: "recordStrictModeErrors",
    value: function (e, t) {
      if (this.state.strict && !this.state.strictErrors.has(e)) {
        this.raise(e, t);
      } else {
        this.state.strictErrors.set(e, t);
      }
    }
  }, {
    key: "readEscapedChar",
    value: function (e) {
      var t = !e;
      var n = this.input.charCodeAt(++this.state.pos);
      switch (++this.state.pos, n) {
        case 110:
          return "\n";
        case 114:
          return "\r";
        case 120:
          var r = this.readHexChar(2, !1, t);
          return null === r ? null : String.fromCharCode(r);
        case 117:
          var i = this.readCodePoint(t);
          return null === i ? null : String.fromCodePoint(i);
        case 116:
          return "\t";
        case 98:
          return "\b";
        case 118:
          return "\v";
        case 102:
          return "\f";
        case 13:
          if (10 === this.input.charCodeAt(this.state.pos)) {
            ++this.state.pos;
          }
        case 10:
          this.state.lineStart = this.state.pos;
          ++this.state.curLine;
        case 8232:
        case 8233:
          return "";
        case 56:
        case 57:
          if (e) {
            return null;
          }
          this.recordStrictModeErrors(this.state.pos - 1, k.StrictNumericEscape);
        default:
          if (n >= 48 && n <= 55) {
            var a = this.state.pos - 1;
            var s = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0];
            var o = parseInt(s, 8);
            if (o > 255) {
              s = s.slice(0, -1);
              o = parseInt(s, 8);
            }
            this.state.pos += s.length - 1;
            var l = this.input.charCodeAt(this.state.pos);
            if ("0" !== s || 56 === l || 57 === l) {
              if (e) {
                return null;
              }
              this.recordStrictModeErrors(a, k.StrictNumericEscape);
            }
            return String.fromCharCode(o);
          }
          return String.fromCharCode(n);
      }
    }
  }, {
    key: "readHexChar",
    value: function (e, t, n) {
      var r = this.state.pos;
      var i = this.readInt(16, e, t, !1);
      if (null === i) {
        if (n) {
          this.raise(r, k.InvalidEscapeSequence);
        } else {
          this.state.pos = r - 1;
        }
      }
      return i;
    }
  }, {
    key: "readWord1",
    value: function (e) {
      this.state.containsEsc = !1;
      var t = "";
      var n = this.state.pos;
      var r = this.state.pos;
      for (void 0 !== e && (this.state.pos += e <= 65535 ? 1 : 2); this.state.pos < this.length;) {
        var i = this.codePointAtPos(this.state.pos);
        if (pe(i)) {
          this.state.pos += i <= 65535 ? 1 : 2;
        } else {
          if (92 !== i) {
            break;
          }
          this.state.containsEsc = !0;
          t += this.input.slice(r, this.state.pos);
          var a = this.state.pos;
          var s = this.state.pos === n ? ce : pe;
          if (117 !== this.input.charCodeAt(++this.state.pos)) {
            this.raise(this.state.pos, k.MissingUnicodeEscape);
            r = this.state.pos - 1;
            continue;
          }
          ++this.state.pos;
          var o = this.readCodePoint(!0);
          if (null !== o) {
            if (!s(o)) {
              this.raise(a, k.EscapedCharNotAnIdentifier);
            }
            t += String.fromCodePoint(o);
          }
          r = this.state.pos;
        }
      }
      return t + this.input.slice(r, this.state.pos);
    }
  }, {
    key: "readWord",
    value: function (e) {
      var t = this.readWord1(e);
      var n = j.get(t);
      if (void 0 !== n) {
        this.finishToken(n, Z(n));
      } else {
        this.finishToken(120, t);
      }
    }
  }, {
    key: "checkKeywordEscapes",
    value: function () {
      var e = this.state.type;
      if (Q(e) && this.state.containsEsc) {
        this.raise(this.state.start, k.InvalidEscapedReservedWord, Z(e));
      }
    }
  }, {
    key: "updateContext",
    value: function (e) {
      var t = this.state;
      var n = t.context;
      switch (t.type) {
        case 8:
          n.pop();
          break;
        case 5:
        case 7:
        case 23:
          n.push(_.brace);
          break;
        case 22:
          if (n[n.length - 1] === _.template) {
            n.pop();
          } else {
            n.push(_.template);
          }
      }
    }
  }]);
  return n;
}(I);
var De = function e() {
  p(this, e);
  this.privateNames = new Set();
  this.loneAccessors = new Map();
  this.undefinedPrivateNames = new Map();
};
var je = function () {
  function e(t) {
    p(this, e);
    this.stack = [];
    this.undefinedPrivateNames = new Map();
    this.raise = t;
  }
  c(e, [{
    key: "current",
    value: function () {
      return this.stack[this.stack.length - 1];
    }
  }, {
    key: "enter",
    value: function () {
      this.stack.push(new De());
    }
  }, {
    key: "exit",
    value: function () {
      for (var e = this.stack.pop(), t = this.current(), n = 0, r = Array.from(e.undefinedPrivateNames); n < r.length; n++) {
        var a = i(r[n], 2);
        var s = a[0];
        var o = a[1];
        if (t) {
          if (!t.undefinedPrivateNames.has(s)) {
            t.undefinedPrivateNames.set(s, o);
          }
        } else {
          this.raise(o, k.InvalidPrivateFieldResolution, s);
        }
      }
    }
  }, {
    key: "declarePrivateName",
    value: function (e, t, n) {
      var r = this.current();
      var i = r.privateNames.has(e);
      if (3 & t) {
        var a = i && r.loneAccessors.get(e);
        if (a) {
          if (!(i = (3 & a) === (3 & t) || (4 & a) !== (4 & t))) {
            r.loneAccessors.delete(e);
          }
        } else if (!i) {
          r.loneAccessors.set(e, t);
        }
      }
      if (i) {
        this.raise(n, k.PrivateNameRedeclaration, e);
      }
      r.privateNames.add(e);
      r.undefinedPrivateNames.delete(e);
    }
  }, {
    key: "usePrivateName",
    value: function (e, t) {
      var n;
      var i;
      var a = r(this.stack);
      try {
        for (a.s(); !(i = a.n()).done;) {
          if ((n = i.value).privateNames.has(e)) {
            return;
          }
        }
      } catch (s) {
        a.e(s);
      } finally {
        a.f();
      }
      if (n) {
        n.undefinedPrivateNames.set(e, t);
      } else {
        this.raise(t, k.InvalidPrivateFieldResolution, e);
      }
    }
  }]);
  return e;
}();
var Le = function () {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    p(this, e);
    this.type = void 0;
    this.type = t;
  }
  c(e, [{
    key: "canBeArrowParameterDeclaration",
    value: function () {
      return 2 === this.type || 1 === this.type;
    }
  }, {
    key: "isCertainlyParameterDeclaration",
    value: function () {
      return 3 === this.type;
    }
  }]);
  return e;
}();
var Me = function (e) {
  o(n, e);
  var t = l(n);
  function n(e) {
    var r;
    p(this, n);
    (r = t.call(this, e)).errors = new Map();
    return r;
  }
  c(n, [{
    key: "recordDeclarationError",
    value: function (e, t) {
      this.errors.set(e, t);
    }
  }, {
    key: "clearDeclarationError",
    value: function (e) {
      this.errors.delete(e);
    }
  }, {
    key: "iterateErrors",
    value: function (e) {
      this.errors.forEach(e);
    }
  }]);
  return n;
}(Le);
var Be = function () {
  function e(t) {
    p(this, e);
    this.stack = [new Le()];
    this.raise = t;
  }
  c(e, [{
    key: "enter",
    value: function (e) {
      this.stack.push(e);
    }
  }, {
    key: "exit",
    value: function () {
      this.stack.pop();
    }
  }, {
    key: "recordParameterInitializerError",
    value: function (e, t) {
      for (var n = this.stack, r = n.length - 1, i = n[r]; !i.isCertainlyParameterDeclaration();) {
        if (!i.canBeArrowParameterDeclaration()) {
          return;
        }
        i.recordDeclarationError(e, t);
        i = n[--r];
      }
      this.raise(e, t);
    }
  }, {
    key: "recordParenthesizedIdentifierError",
    value: function (e, t) {
      var n = this.stack;
      var r = n[n.length - 1];
      if (r.isCertainlyParameterDeclaration()) {
        this.raise(e, t);
      } else {
        if (!r.canBeArrowParameterDeclaration()) {
          return;
        }
        r.recordDeclarationError(e, t);
      }
    }
  }, {
    key: "recordAsyncArrowParametersError",
    value: function (e, t) {
      for (var n = this.stack, r = n.length - 1, i = n[r]; i.canBeArrowParameterDeclaration();) {
        if (2 === i.type) {
          i.recordDeclarationError(e, t);
        }
        i = n[--r];
      }
    }
  }, {
    key: "validateAsPattern",
    value: function () {
      var e = this;
      var t = this.stack;
      var n = t[t.length - 1];
      if (n.canBeArrowParameterDeclaration()) {
        n.iterateErrors(function (n, r) {
          e.raise(r, n);
          for (var i = t.length - 2, a = t[i]; a.canBeArrowParameterDeclaration();) {
            a.clearDeclarationError(r);
            a = t[--i];
          }
        });
      }
    }
  }]);
  return e;
}();
function Fe() {
  return new Le();
}
var Re = function () {
  function e() {
    p(this, e);
    this.stacks = [];
  }
  c(e, [{
    key: "enter",
    value: function (e) {
      this.stacks.push(e);
    }
  }, {
    key: "exit",
    value: function () {
      this.stacks.pop();
    }
  }, {
    key: "currentFlags",
    value: function () {
      return this.stacks[this.stacks.length - 1];
    }
  }, {
    key: "hasAwait",
    get: function () {
      return (2 & this.currentFlags()) > 0;
    }
  }, {
    key: "hasYield",
    get: function () {
      return (1 & this.currentFlags()) > 0;
    }
  }, {
    key: "hasReturn",
    get: function () {
      return (4 & this.currentFlags()) > 0;
    }
  }, {
    key: "hasIn",
    get: function () {
      return (8 & this.currentFlags()) > 0;
    }
  }]);
  return e;
}();
function Ue(e, t) {
  return (e ? 2 : 0) | (t ? 1 : 0);
}
var Ke = function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    p(this, n);
    return t.apply(this, arguments);
  }
  c(n, [{
    key: "addExtra",
    value: function (e, t, n) {
      if (e) {
        (e.extra = e.extra || {})[t] = n;
      }
    }
  }, {
    key: "isRelational",
    value: function (e) {
      return this.match(43) && this.state.value === e;
    }
  }, {
    key: "expectRelational",
    value: function (e) {
      if (this.isRelational(e)) {
        this.next();
      } else {
        this.unexpected(null, 43);
      }
    }
  }, {
    key: "isContextual",
    value: function (e) {
      return this.state.type === e && !this.state.containsEsc;
    }
  }, {
    key: "isUnparsedContextual",
    value: function (e, t) {
      var n = e + t.length;
      if (this.input.slice(e, n) === t) {
        var r = this.input.charCodeAt(n);
        return !(pe(r) || 55296 === (64512 & r));
      }
      return !1;
    }
  }, {
    key: "isLookaheadContextual",
    value: function (e) {
      var t = this.nextTokenStart();
      return this.isUnparsedContextual(t, e);
    }
  }, {
    key: "eatContextual",
    value: function (e) {
      return !!this.isContextual(e) && (this.next(), !0);
    }
  }, {
    key: "expectContextual",
    value: function (e, t) {
      if (!this.eatContextual(e)) {
        this.unexpected(null, t);
      }
    }
  }, {
    key: "canInsertSemicolon",
    value: function () {
      return this.match(127) || this.match(8) || this.hasPrecedingLineBreak();
    }
  }, {
    key: "hasPrecedingLineBreak",
    value: function () {
      return f.test(this.input.slice(this.state.lastTokEnd, this.state.start));
    }
  }, {
    key: "hasFollowingLineBreak",
    value: function () {
      v.lastIndex = this.state.end;
      return v.test(this.input);
    }
  }, {
    key: "isLineTerminator",
    value: function () {
      return this.eat(13) || this.canInsertSemicolon();
    }
  }, {
    key: "semicolon",
    value: function () {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if (!(e ? this.isLineTerminator() : this.eat(13))) {
        this.raise(this.state.lastTokEnd, k.MissingSemicolon);
      }
    }
  }, {
    key: "expect",
    value: function (e, t) {
      if (!this.eat(e)) {
        this.unexpected(t, e);
      }
    }
  }, {
    key: "assertNoSpace",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Unexpected space.";
      if (this.state.start > this.state.lastTokEnd) {
        this.raise(this.state.lastTokEnd, {
          code: A.SyntaxError,
          reasonCode: "UnexpectedSpace",
          template: e
        });
      }
    }
  }, {
    key: "unexpected",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        code: A.SyntaxError,
        reasonCode: "UnexpectedToken",
        template: "Unexpected token"
      };
      throw ne(t) && (t = {
        code: A.SyntaxError,
        reasonCode: "UnexpectedToken",
        template: 'Unexpected token, expected "'.concat(Z(t), '"')
      }), this.raise(null != e ? e : this.state.start, t);
    }
  }, {
    key: "expectPlugin",
    value: function (e, t) {
      if (!this.hasPlugin(e)) {
        throw this.raiseWithData(null != t ? t : this.state.start, {
          missingPlugin: [e]
        }, "This experimental syntax requires enabling the parser plugin: '".concat(e, "'"));
      }
      return !0;
    }
  }, {
    key: "expectOnePlugin",
    value: function (e, t) {
      var n = this;
      if (!e.some(function (e) {
        return n.hasPlugin(e);
      })) {
        throw this.raiseWithData(null != t ? t : this.state.start, {
          missingPlugin: e
        }, "This experimental syntax requires enabling one of the following parser plugin(s): '".concat(e.join(", "), "'"));
      }
    }
  }, {
    key: "tryParse",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.clone();
      var n = {
        node: null
      };
      try {
        var r = e(function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          throw n.node = e, n;
        });
        if (this.state.errors.length > t.errors.length) {
          var i = this.state;
          this.state = t;
          this.state.tokensLength = i.tokensLength;
          return {
            node: r,
            error: i.errors[t.errors.length],
            thrown: !1,
            aborted: !1,
            failState: i
          };
        }
        return {
          node: r,
          error: null,
          thrown: !1,
          aborted: !1,
          failState: null
        };
      } catch (s) {
        var a = this.state;
        this.state = t;
        if (s instanceof SyntaxError) {
          return {
            node: null,
            error: s,
            thrown: !0,
            aborted: !1,
            failState: a
          };
        }
        if (s === n) {
          return {
            node: n.node,
            error: null,
            thrown: !1,
            aborted: !0,
            failState: a
          };
        }
        throw s;
      }
    }
  }, {
    key: "checkExpressionErrors",
    value: function (e, t) {
      if (!e) {
        return !1;
      }
      var n = e.shorthandAssign;
      var r = e.doubleProto;
      var i = e.optionalParameters;
      if (!t) {
        return n >= 0 || r >= 0 || i >= 0;
      }
      if (n >= 0) {
        this.unexpected(n);
      }
      if (r >= 0) {
        this.raise(r, k.DuplicateProto);
      }
      if (i >= 0) {
        this.unexpected(i);
      }
    }
  }, {
    key: "isLiteralPropertyName",
    value: function () {
      return G(this.state.type);
    }
  }, {
    key: "isPrivateName",
    value: function (e) {
      return "PrivateName" === e.type;
    }
  }, {
    key: "getPrivateNameSV",
    value: function (e) {
      return e.id.name;
    }
  }, {
    key: "hasPropertyAsPrivateName",
    value: function (e) {
      return ("MemberExpression" === e.type || "OptionalMemberExpression" === e.type) && this.isPrivateName(e.property);
    }
  }, {
    key: "isOptionalChain",
    value: function (e) {
      return "OptionalMemberExpression" === e.type || "OptionalCallExpression" === e.type;
    }
  }, {
    key: "isObjectProperty",
    value: function (e) {
      return "ObjectProperty" === e.type;
    }
  }, {
    key: "isObjectMethod",
    value: function (e) {
      return "ObjectMethod" === e.type;
    }
  }, {
    key: "initializeScopes",
    value: function () {
      var e = this;
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "module" === this.options.sourceType;
      var n = this.state.labels;
      this.state.labels = [];
      var r = this.exportedIdentifiers;
      this.exportedIdentifiers = new Set();
      var i = this.inModule;
      this.inModule = t;
      var a = this.scope;
      var s = this.getScopeHandler();
      this.scope = new s(this.raise.bind(this), this.inModule);
      var o = this.prodParam;
      this.prodParam = new Re();
      var l = this.classScope;
      this.classScope = new je(this.raise.bind(this));
      var u = this.expressionScope;
      this.expressionScope = new Be(this.raise.bind(this));
      return function () {
        e.state.labels = n;
        e.exportedIdentifiers = r;
        e.inModule = i;
        e.scope = a;
        e.prodParam = o;
        e.classScope = l;
        e.expressionScope = u;
      };
    }
  }, {
    key: "enterInitialScopes",
    value: function () {
      var e = 0;
      if (this.inModule) {
        e |= 2;
      }
      this.scope.enter(1);
      this.prodParam.enter(e);
    }
  }]);
  return n;
}(_e);
var Ve = function e() {
  p(this, e);
  this.shorthandAssign = -1;
  this.doubleProto = -1;
  this.optionalParameters = -1;
};
var We = function e(t, n, r) {
  p(this, e);
  this.type = "";
  this.start = n;
  this.end = 0;
  this.loc = new b(r);
  if (null != t && t.options.ranges) {
    this.range = [n, 0];
  }
  if (null != t && t.filename) {
    this.loc.filename = t.filename;
  }
};
var Ye = We.prototype;
function He(e) {
  var t = e.type;
  var n = e.start;
  var r = e.end;
  var i = e.loc;
  var a = e.range;
  var s = e.extra;
  var o = e.name;
  var l = Object.create(Ye);
  l.type = t;
  l.start = n;
  l.end = r;
  l.loc = i;
  l.range = a;
  l.extra = s;
  l.name = o;
  if ("Placeholder" === t) {
    l.expectedNode = e.expectedNode;
  }
  return l;
}
function qe(e) {
  var t = e.type;
  var n = e.start;
  var r = e.end;
  var i = e.loc;
  var a = e.range;
  var s = e.extra;
  if ("Placeholder" === t) {
    return function (e) {
      return He(e);
    }(e);
  }
  var o = Object.create(Ye);
  o.type = "StringLiteral";
  o.start = n;
  o.end = r;
  o.loc = i;
  o.range = a;
  o.extra = s;
  o.value = e.value;
  return o;
}
Ye.__clone = function () {
  for (var e = new We(), t = Object.keys(this), n = 0, r = t.length; n < r; n++) {
    var i = t[n];
    if ("leadingComments" !== i && "trailingComments" !== i && "innerComments" !== i) {
      e[i] = this[i];
    }
  }
  return e;
};
var Je = function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    p(this, n);
    return t.apply(this, arguments);
  }
  c(n, [{
    key: "startNode",
    value: function () {
      return new We(this, this.state.start, this.state.startLoc);
    }
  }, {
    key: "startNodeAt",
    value: function (e, t) {
      return new We(this, e, t);
    }
  }, {
    key: "startNodeAtNode",
    value: function (e) {
      return this.startNodeAt(e.start, e.loc.start);
    }
  }, {
    key: "finishNode",
    value: function (e, t) {
      return this.finishNodeAt(e, t, this.state.lastTokEnd, this.state.lastTokEndLoc);
    }
  }, {
    key: "finishNodeAt",
    value: function (e, t, n, r) {
      e.type = t;
      e.end = n;
      e.loc.end = r;
      if (this.options.ranges) {
        e.range[1] = n;
      }
      if (this.options.attachComment) {
        this.processComment(e);
      }
      return e;
    }
  }, {
    key: "resetStartLocation",
    value: function (e, t, n) {
      e.start = t;
      e.loc.start = n;
      if (this.options.ranges) {
        e.range[0] = t;
      }
    }
  }, {
    key: "resetEndLocation",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.lastTokEnd;
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state.lastTokEndLoc;
      e.end = t;
      e.loc.end = n;
      if (this.options.ranges) {
        e.range[1] = t;
      }
    }
  }, {
    key: "resetStartLocationFromNode",
    value: function (e, t) {
      this.resetStartLocation(e, t.start, t.loc.start);
    }
  }]);
  return n;
}(Ke);
var Xe = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
var Ge = C({
  AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
  AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
  AssignReservedType: "Cannot overwrite reserved type %0.",
  DeclareClassElement: "The `declare` modifier can only appear on class fields.",
  DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
  DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
  EnumBooleanMemberNotInitialized: "Boolean enum members need to be initialized. Use either `%0 = true,` or `%0 = false,` in enum `%1`.",
  EnumDuplicateMemberName: "Enum member names need to be unique, but the name `%0` has already been used before in enum `%1`.",
  EnumInconsistentMemberValues: "Enum `%0` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.",
  EnumInvalidExplicitType: "Enum type `%1` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
  EnumInvalidExplicitTypeUnknownSupplied: "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
  EnumInvalidMemberInitializerPrimaryType: "Enum `%0` has type `%2`, so the initializer of `%1` needs to be a %2 literal.",
  EnumInvalidMemberInitializerSymbolType: "Symbol enum members cannot be initialized. Use `%1,` in enum `%0`.",
  EnumInvalidMemberInitializerUnknownType: "The enum member initializer for `%1` needs to be a literal (either a boolean, number, or string) in enum `%0`.",
  EnumInvalidMemberName: "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `%0`, consider using `%1`, in enum `%2`.",
  EnumNumberMemberNotInitialized: "Number enum members need to be initialized, e.g. `%1 = 1` in enum `%0`.",
  EnumStringMemberInconsistentlyInitailized: "String enum members need to consistently either all use initializers, or use no initializers, in enum `%0`.",
  GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
  ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
  InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
  InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
  InexactVariance: "Explicit inexact syntax cannot have variance.",
  InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
  MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
  NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
  NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
  PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
  SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
  SpreadVariance: "Spread properties cannot have variance.",
  ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
  ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
  ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
  ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
  ThisParamNoDefault: "The `this` parameter may not have a default value.",
  TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
  TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
  UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
  UnexpectedReservedType: "Unexpected reserved type %0.",
  UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
  UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
  UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
  UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
  UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
  UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
  UnsupportedDeclareExportKind: "`declare export %0` is not supported. Use `%1` instead.",
  UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
  UnterminatedFlowComment: "Unterminated flow-comment."
}, A.SyntaxError, "flow");
function ze(e) {
  return "type" === e.importKind || "typeof" === e.importKind;
}
function $e(e) {
  return X(e) && 89 !== e;
}
var Qe = {
  const: "declare export var",
  let: "declare export var",
  type: "export type",
  interface: "export interface"
};
var Ze = /\*?\s*@((?:no)?flow)\b/;
var et = {
  quot: '"',
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: "\xa0",
  iexcl: "\xa1",
  cent: "\xa2",
  pound: "\xa3",
  curren: "\xa4",
  yen: "\xa5",
  brvbar: "\xa6",
  sect: "\xa7",
  uml: "\xa8",
  copy: "\xa9",
  ordf: "\xaa",
  laquo: "\xab",
  not: "\xac",
  shy: "\xad",
  reg: "\xae",
  macr: "\xaf",
  deg: "\xb0",
  plusmn: "\xb1",
  sup2: "\xb2",
  sup3: "\xb3",
  acute: "\xb4",
  micro: "\xb5",
  para: "\xb6",
  middot: "\xb7",
  cedil: "\xb8",
  sup1: "\xb9",
  ordm: "\xba",
  raquo: "\xbb",
  frac14: "\xbc",
  frac12: "\xbd",
  frac34: "\xbe",
  iquest: "\xbf",
  Agrave: "\xc0",
  Aacute: "\xc1",
  Acirc: "\xc2",
  Atilde: "\xc3",
  Auml: "\xc4",
  Aring: "\xc5",
  AElig: "\xc6",
  Ccedil: "\xc7",
  Egrave: "\xc8",
  Eacute: "\xc9",
  Ecirc: "\xca",
  Euml: "\xcb",
  Igrave: "\xcc",
  Iacute: "\xcd",
  Icirc: "\xce",
  Iuml: "\xcf",
  ETH: "\xd0",
  Ntilde: "\xd1",
  Ograve: "\xd2",
  Oacute: "\xd3",
  Ocirc: "\xd4",
  Otilde: "\xd5",
  Ouml: "\xd6",
  times: "\xd7",
  Oslash: "\xd8",
  Ugrave: "\xd9",
  Uacute: "\xda",
  Ucirc: "\xdb",
  Uuml: "\xdc",
  Yacute: "\xdd",
  THORN: "\xde",
  szlig: "\xdf",
  agrave: "\xe0",
  aacute: "\xe1",
  acirc: "\xe2",
  atilde: "\xe3",
  auml: "\xe4",
  aring: "\xe5",
  aelig: "\xe6",
  ccedil: "\xe7",
  egrave: "\xe8",
  eacute: "\xe9",
  ecirc: "\xea",
  euml: "\xeb",
  igrave: "\xec",
  iacute: "\xed",
  icirc: "\xee",
  iuml: "\xef",
  eth: "\xf0",
  ntilde: "\xf1",
  ograve: "\xf2",
  oacute: "\xf3",
  ocirc: "\xf4",
  otilde: "\xf5",
  ouml: "\xf6",
  divide: "\xf7",
  oslash: "\xf8",
  ugrave: "\xf9",
  uacute: "\xfa",
  ucirc: "\xfb",
  uuml: "\xfc",
  yacute: "\xfd",
  thorn: "\xfe",
  yuml: "\xff",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02c6",
  tilde: "\u02dc",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039a",
  Lambda: "\u039b",
  Mu: "\u039c",
  Nu: "\u039d",
  Xi: "\u039e",
  Omicron: "\u039f",
  Pi: "\u03a0",
  Rho: "\u03a1",
  Sigma: "\u03a3",
  Tau: "\u03a4",
  Upsilon: "\u03a5",
  Phi: "\u03a6",
  Chi: "\u03a7",
  Psi: "\u03a8",
  Omega: "\u03a9",
  alpha: "\u03b1",
  beta: "\u03b2",
  gamma: "\u03b3",
  delta: "\u03b4",
  epsilon: "\u03b5",
  zeta: "\u03b6",
  eta: "\u03b7",
  theta: "\u03b8",
  iota: "\u03b9",
  kappa: "\u03ba",
  lambda: "\u03bb",
  mu: "\u03bc",
  nu: "\u03bd",
  xi: "\u03be",
  omicron: "\u03bf",
  pi: "\u03c0",
  rho: "\u03c1",
  sigmaf: "\u03c2",
  sigma: "\u03c3",
  tau: "\u03c4",
  upsilon: "\u03c5",
  phi: "\u03c6",
  chi: "\u03c7",
  psi: "\u03c8",
  omega: "\u03c9",
  thetasym: "\u03d1",
  upsih: "\u03d2",
  piv: "\u03d6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200c",
  zwj: "\u200d",
  lrm: "\u200e",
  rlm: "\u200f",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201a",
  ldquo: "\u201c",
  rdquo: "\u201d",
  bdquo: "\u201e",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203a",
  oline: "\u203e",
  frasl: "\u2044",
  euro: "\u20ac",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211c",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21b5",
  lArr: "\u21d0",
  uArr: "\u21d1",
  rArr: "\u21d2",
  dArr: "\u21d3",
  hArr: "\u21d4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220b",
  prod: "\u220f",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221a",
  prop: "\u221d",
  infin: "\u221e",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222a",
  int: "\u222b",
  there4: "\u2234",
  sim: "\u223c",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22a5",
  sdot: "\u22c5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230a",
  rfloor: "\u230b",
  lang: "\u2329",
  rang: "\u232a",
  loz: "\u25ca",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};
var tt = /^[\da-fA-F]+$/;
var nt = /^\d+$/;
var rt = C({
  AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
  MissingClosingTagElement: "Expected corresponding JSX closing tag for <%0>.",
  MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
  UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
  UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
  UnterminatedJsxContent: "Unterminated JSX contents.",
  UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
}, A.SyntaxError, "jsx");
function it(e) {
  return !!e && ("JSXOpeningFragment" === e.type || "JSXClosingFragment" === e.type);
}
function at(e) {
  if ("JSXIdentifier" === e.type) {
    return e.name;
  }
  if ("JSXNamespacedName" === e.type) {
    return e.namespace.name + ":" + e.name.name;
  }
  if ("JSXMemberExpression" === e.type) {
    return at(e.object) + "." + at(e.property);
  }
  throw new Error("Node had unexpected type: " + e.type);
}
_.j_oTag = new N("<tag");
_.j_cTag = new N("</tag");
_.j_expr = new N("<tag>...</tag>", !0);
var st = function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    var e;
    p(this, n);
    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) {
      i[a] = arguments[a];
    }
    (e = t.call.apply(t, [this].concat(i))).types = new Set();
    e.enums = new Set();
    e.constEnums = new Set();
    e.classes = new Set();
    e.exportOnlyBindings = new Set();
    return e;
  }
  return n;
}(Ee);
var ot = function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    p(this, n);
    return t.apply(this, arguments);
  }
  c(n, [{
    key: "createScope",
    value: function (e) {
      return new st(e);
    }
  }, {
    key: "declareName",
    value: function (e, t, r) {
      var i = this.currentScope();
      if (1024 & t) {
        this.maybeExportDefined(i, e);
        return void i.exportOnlyBindings.add(e);
      }
      a(s(n.prototype), "declareName", this).apply(this, arguments);
      if (2 & t) {
        if (!(1 & t)) {
          this.checkRedeclarationInScope(i, e, t, r);
          this.maybeExportDefined(i, e);
        }
        i.types.add(e);
      }
      if (256 & t) {
        i.enums.add(e);
      }
      if (512 & t) {
        i.constEnums.add(e);
      }
      if (128 & t) {
        i.classes.add(e);
      }
    }
  }, {
    key: "isRedeclaredInScope",
    value: function (e, t, r) {
      if (e.enums.has(t)) {
        if (256 & r) {
          var i = !!(512 & r);
          var o = e.constEnums.has(t);
          return i !== o;
        }
        return !0;
      }
      return 128 & r && e.classes.has(t) ? !!e.lexical.has(t) && !!(1 & r) : !!(2 & r && e.types.has(t)) || a(s(n.prototype), "isRedeclaredInScope", this).apply(this, arguments);
    }
  }, {
    key: "checkLocalExport",
    value: function (e) {
      var t = this.scopeStack[0];
      var r = e.name;
      if (!(t.types.has(r) || t.exportOnlyBindings.has(r))) {
        a(s(n.prototype), "checkLocalExport", this).call(this, e);
      }
    }
  }]);
  return n;
}(xe);
function lt(e) {
  if (!e) {
    throw new Error("Assert fail");
  }
}
var ut = C({
  AbstractMethodHasImplementation: "Method '%0' cannot have an implementation because it is marked abstract.",
  AbstractPropertyHasInitializer: "Property '%0' cannot have an initializer because it is marked abstract.",
  AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
  AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
  ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
  ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
  ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
  DeclareAccessor: "'declare' is not allowed in %0ters.",
  DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
  DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
  DuplicateAccessibilityModifier: "Accessibility modifier already seen.",
  DuplicateModifier: "Duplicate modifier: '%0'.",
  EmptyHeritageClauseType: "'%0' list cannot be empty.",
  EmptyTypeArguments: "Type argument list cannot be empty.",
  EmptyTypeParameters: "Type parameter list cannot be empty.",
  ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
  ImportAliasHasImportType: "An import alias can not use 'import type'.",
  IncompatibleModifiers: "'%0' modifier cannot be used with '%1' modifier.",
  IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
  IndexSignatureHasAccessibility: "Index signatures cannot have an accessibility modifier ('%0').",
  IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
  IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
  IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
  InvalidModifierOnTypeMember: "'%0' modifier cannot appear on a type member.",
  InvalidModifiersOrder: "'%0' modifier must precede '%1' modifier.",
  InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
  MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
  MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.",
  NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
  NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
  OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
  OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
  PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
  PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
  PrivateElementHasAccessibility: "Private elements cannot have an accessibility modifier ('%0').",
  ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
  ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
  ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
  SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
  SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
  SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
  StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
  TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
  TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
  TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
  TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
  UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
  UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
  UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
  UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
  UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
  UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
  UnsupportedSignatureParameterKind: "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got %0."
}, A.SyntaxError, "typescript");
function ct(e) {
  return "private" === e || "public" === e || "protected" === e;
}
var pt = C({
  ClassNameIsRequired: "A class name is required."
}, A.SyntaxError);
function ft(e, t) {
  return e.some(function (e) {
    return Array.isArray(e) ? e[0] === t : e === t;
  });
}
function dt(e, t, n) {
  var r = e.find(function (e) {
    return Array.isArray(e) ? e[0] === t : e === t;
  });
  return r && Array.isArray(r) ? r[1][n] : null;
}
var ht = ["minimal", "fsharp", "hack", "smart"];
var yt = ["^", "%", "#"];
var mt = ["hash", "bar"];
var vt = {
  estree: function (e) {
    return function (e) {
      o(n, e);
      var t = l(n);
      function n() {
        p(this, n);
        return t.apply(this, arguments);
      }
      c(n, [{
        key: "parseRegExpLiteral",
        value: function (e) {
          var t = e.pattern;
          var n = e.flags;
          var r = null;
          try {
            r = new RegExp(t, n);
          } catch (a) {}
          var i = this.estreeParseLiteral(r);
          i.regex = {
            pattern: t,
            flags: n
          };
          return i;
        }
      }, {
        key: "parseBigIntLiteral",
        value: function (e) {
          var t;
          try {
            t = BigInt(e);
          } catch (r) {
            t = null;
          }
          var n = this.estreeParseLiteral(t);
          n.bigint = String(n.value || e);
          return n;
        }
      }, {
        key: "parseDecimalLiteral",
        value: function (e) {
          var t = this.estreeParseLiteral(null);
          t.decimal = String(t.value || e);
          return t;
        }
      }, {
        key: "estreeParseLiteral",
        value: function (e) {
          return this.parseLiteral(e, "Literal");
        }
      }, {
        key: "parseStringLiteral",
        value: function (e) {
          return this.estreeParseLiteral(e);
        }
      }, {
        key: "parseNumericLiteral",
        value: function (e) {
          return this.estreeParseLiteral(e);
        }
      }, {
        key: "parseNullLiteral",
        value: function () {
          return this.estreeParseLiteral(null);
        }
      }, {
        key: "parseBooleanLiteral",
        value: function (e) {
          return this.estreeParseLiteral(e);
        }
      }, {
        key: "directiveToStmt",
        value: function (e) {
          var t = e.value;
          var n = this.startNodeAt(e.start, e.loc.start);
          var r = this.startNodeAt(t.start, t.loc.start);
          r.value = t.extra.expressionValue;
          r.raw = t.extra.raw;
          n.expression = this.finishNodeAt(r, "Literal", t.end, t.loc.end);
          n.directive = t.extra.raw.slice(1, -1);
          return this.finishNodeAt(n, "ExpressionStatement", e.end, e.loc.end);
        }
      }, {
        key: "initFunction",
        value: function (e, t) {
          a(s(n.prototype), "initFunction", this).call(this, e, t);
          e.expression = !1;
        }
      }, {
        key: "checkDeclaration",
        value: function (e) {
          if (null != e && this.isObjectProperty(e)) {
            this.checkDeclaration(e.value);
          } else {
            a(s(n.prototype), "checkDeclaration", this).call(this, e);
          }
        }
      }, {
        key: "getObjectOrClassMethodParams",
        value: function (e) {
          return e.value.params;
        }
      }, {
        key: "isValidDirective",
        value: function (e) {
          var t;
          return "ExpressionStatement" === e.type && "Literal" === e.expression.type && "string" === typeof e.expression.value && !(null != (t = e.expression.extra) && t.parenthesized);
        }
      }, {
        key: "stmtToDirective",
        value: function (e) {
          var t = e.expression.value;
          var r = a(s(n.prototype), "stmtToDirective", this).call(this, e);
          this.addExtra(r.value, "expressionValue", t);
          return r;
        }
      }, {
        key: "parseBlockBody",
        value: function (e) {
          for (var t, r = this, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++) {
            o[l - 1] = arguments[l];
          }
          (t = a(s(n.prototype), "parseBlockBody", this)).call.apply(t, [this, e].concat(o));
          var u = e.directives.map(function (e) {
            return r.directiveToStmt(e);
          });
          e.body = u.concat(e.body);
          delete e.directives;
        }
      }, {
        key: "pushClassMethod",
        value: function (e, t, n, r, i, a) {
          this.parseMethod(t, n, r, i, a, "ClassMethod", !0);
          if (t.typeParameters) {
            t.value.typeParameters = t.typeParameters;
            delete t.typeParameters;
          }
          e.body.push(t);
        }
      }, {
        key: "parsePrivateName",
        value: function () {
          var e = a(s(n.prototype), "parsePrivateName", this).call(this);
          return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e;
        }
      }, {
        key: "convertPrivateNameToPrivateIdentifier",
        value: function (e) {
          var t = a(s(n.prototype), "getPrivateNameSV", this).call(this, e);
          delete (e = e).id;
          e.name = t;
          e.type = "PrivateIdentifier";
          return e;
        }
      }, {
        key: "isPrivateName",
        value: function (e) {
          return this.getPluginOption("estree", "classFeatures") ? "PrivateIdentifier" === e.type : a(s(n.prototype), "isPrivateName", this).call(this, e);
        }
      }, {
        key: "getPrivateNameSV",
        value: function (e) {
          return this.getPluginOption("estree", "classFeatures") ? e.name : a(s(n.prototype), "getPrivateNameSV", this).call(this, e);
        }
      }, {
        key: "parseLiteral",
        value: function (e, t) {
          var r = a(s(n.prototype), "parseLiteral", this).call(this, e, t);
          r.raw = r.extra.raw;
          delete r.extra;
          return r;
        }
      }, {
        key: "parseFunctionBody",
        value: function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          a(s(n.prototype), "parseFunctionBody", this).call(this, e, t, r);
          e.expression = "BlockStatement" !== e.body.type;
        }
      }, {
        key: "parseMethod",
        value: function (e, t, r, i, o, l) {
          var u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          var c = this.startNode();
          c.kind = e.kind;
          (c = a(s(n.prototype), "parseMethod", this).call(this, c, t, r, i, o, l, u)).type = "FunctionExpression";
          delete c.kind;
          e.value = c;
          if ("ClassPrivateMethod" === l) {
            e.computed = !1;
          }
          l = "MethodDefinition";
          return this.finishNode(e, l);
        }
      }, {
        key: "parseClassProperty",
        value: function () {
          for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++) {
            r[i] = arguments[i];
          }
          var o = (e = a(s(n.prototype), "parseClassProperty", this)).call.apply(e, [this].concat(r));
          return this.getPluginOption("estree", "classFeatures") ? (o.type = "PropertyDefinition", o) : o;
        }
      }, {
        key: "parseClassPrivateProperty",
        value: function () {
          for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++) {
            r[i] = arguments[i];
          }
          var o = (e = a(s(n.prototype), "parseClassPrivateProperty", this)).call.apply(e, [this].concat(r));
          return this.getPluginOption("estree", "classFeatures") ? (o.type = "PropertyDefinition", o.computed = !1, o) : o;
        }
      }, {
        key: "parseObjectMethod",
        value: function (e, t, r, i, o) {
          var l = a(s(n.prototype), "parseObjectMethod", this).call(this, e, t, r, i, o);
          if (l) {
            l.type = "Property";
            if ("method" === l.kind) {
              l.kind = "init";
            }
            l.shorthand = !1;
          }
          return l;
        }
      }, {
        key: "parseObjectProperty",
        value: function (e, t, r, i, o) {
          var l = a(s(n.prototype), "parseObjectProperty", this).call(this, e, t, r, i, o);
          if (l) {
            l.kind = "init";
            l.type = "Property";
          }
          return l;
        }
      }, {
        key: "isAssignable",
        value: function (e, t) {
          return null != e && this.isObjectProperty(e) ? this.isAssignable(e.value, t) : a(s(n.prototype), "isAssignable", this).call(this, e, t);
        }
      }, {
        key: "toAssignable",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return null != e && this.isObjectProperty(e) ? (this.toAssignable(e.value, t), e) : a(s(n.prototype), "toAssignable", this).call(this, e, t);
        }
      }, {
        key: "toAssignableObjectExpressionProp",
        value: function (e) {
          if ("get" === e.kind || "set" === e.kind) {
            this.raise(e.key.start, k.PatternHasAccessor);
          } else if (e.method) {
            this.raise(e.key.start, k.PatternHasMethod);
          } else {
            for (var t, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) {
              i[o - 1] = arguments[o];
            }
            (t = a(s(n.prototype), "toAssignableObjectExpressionProp", this)).call.apply(t, [this, e].concat(i));
          }
        }
      }, {
        key: "finishCallExpression",
        value: function (e, t) {
          a(s(n.prototype), "finishCallExpression", this).call(this, e, t);
          if ("Import" === e.callee.type) {
            var r;
            e.type = "ImportExpression";
            e.source = e.arguments[0];
            if (this.hasPlugin("importAssertions")) {
              e.attributes = null != (r = e.arguments[1]) ? r : null;
            }
            delete e.arguments;
            delete e.callee;
          }
          return e;
        }
      }, {
        key: "toReferencedArguments",
        value: function (e) {
          if ("ImportExpression" !== e.type) {
            a(s(n.prototype), "toReferencedArguments", this).call(this, e);
          }
        }
      }, {
        key: "parseExport",
        value: function (e) {
          switch (a(s(n.prototype), "parseExport", this).call(this, e), e.type) {
            case "ExportAllDeclaration":
              e.exported = null;
              break;
            case "ExportNamedDeclaration":
              if (1 === e.specifiers.length && "ExportNamespaceSpecifier" === e.specifiers[0].type) {
                e.type = "ExportAllDeclaration";
                e.exported = e.specifiers[0].exported;
                delete e.specifiers;
              }
          }
          return e;
        }
      }, {
        key: "parseSubscript",
        value: function (e, t, r, i, o) {
          var l = a(s(n.prototype), "parseSubscript", this).call(this, e, t, r, i, o);
          if (o.optionalChainMember) {
            if (!("OptionalMemberExpression" !== l.type && "OptionalCallExpression" !== l.type)) {
              l.type = l.type.substring(8);
            }
            if (o.stop) {
              var u = this.startNodeAtNode(l);
              u.expression = l;
              return this.finishNode(u, "ChainExpression");
            }
          } else if (!("MemberExpression" !== l.type && "CallExpression" !== l.type)) {
            l.optional = !1;
          }
          return l;
        }
      }, {
        key: "hasPropertyAsPrivateName",
        value: function (e) {
          if ("ChainExpression" === e.type) {
            e = e.expression;
          }
          return a(s(n.prototype), "hasPropertyAsPrivateName", this).call(this, e);
        }
      }, {
        key: "isOptionalChain",
        value: function (e) {
          return "ChainExpression" === e.type;
        }
      }, {
        key: "isObjectProperty",
        value: function (e) {
          return "Property" === e.type && "init" === e.kind && !e.method;
        }
      }, {
        key: "isObjectMethod",
        value: function (e) {
          return e.method || "get" === e.kind || "set" === e.kind;
        }
      }]);
      return n;
    }(e);
  },
  jsx: function (e) {
    return function (e) {
      o(n, e);
      var t = l(n);
      function n() {
        p(this, n);
        return t.apply(this, arguments);
      }
      c(n, [{
        key: "jsxReadToken",
        value: function () {
          for (var e = "", t = this.state.pos;;) {
            if (this.state.pos >= this.length) {
              throw this.raise(this.state.start, rt.UnterminatedJsxContent);
            }
            var r = this.input.charCodeAt(this.state.pos);
            switch (r) {
              case 60:
              case 123:
                return this.state.pos === this.state.start ? 60 === r && this.state.exprAllowed ? (++this.state.pos, this.finishToken(130)) : a(s(n.prototype), "getTokenFromCode", this).call(this, r) : (e += this.input.slice(t, this.state.pos), this.finishToken(129, e));
              case 38:
                e += this.input.slice(t, this.state.pos);
                e += this.jsxReadEntity();
                t = this.state.pos;
                break;
              case 62:
              case 125:
              default:
                if (h(r)) {
                  e += this.input.slice(t, this.state.pos);
                  e += this.jsxReadNewLine(!0);
                  t = this.state.pos;
                } else {
                  ++this.state.pos;
                }
            }
          }
        }
      }, {
        key: "jsxReadNewLine",
        value: function (e) {
          var t;
          var n = this.input.charCodeAt(this.state.pos);
          ++this.state.pos;
          if (13 === n && 10 === this.input.charCodeAt(this.state.pos)) {
            ++this.state.pos;
            t = e ? "\n" : "\r\n";
          } else {
            t = String.fromCharCode(n);
          }
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          return t;
        }
      }, {
        key: "jsxReadString",
        value: function (e) {
          for (var t = "", n = ++this.state.pos;;) {
            if (this.state.pos >= this.length) {
              throw this.raise(this.state.start, k.UnterminatedString);
            }
            var r = this.input.charCodeAt(this.state.pos);
            if (r === e) {
              break;
            }
            if (38 === r) {
              t += this.input.slice(n, this.state.pos);
              t += this.jsxReadEntity();
              n = this.state.pos;
            } else {
              if (h(r)) {
                t += this.input.slice(n, this.state.pos);
                t += this.jsxReadNewLine(!1);
                n = this.state.pos;
              } else {
                ++this.state.pos;
              }
            }
          }
          t += this.input.slice(n, this.state.pos++);
          return this.finishToken(121, t);
        }
      }, {
        key: "jsxReadEntity",
        value: function () {
          for (var e, t = "", n = 0, r = this.input[this.state.pos], i = ++this.state.pos; this.state.pos < this.length && n++ < 10;) {
            if (";" === (r = this.input[this.state.pos++])) {
              if ("#" === t[0]) {
                if ("x" === t[1]) {
                  t = t.substr(2);
                  if (tt.test(t)) {
                    e = String.fromCodePoint(parseInt(t, 16));
                  }
                } else {
                  t = t.substr(1);
                  if (nt.test(t)) {
                    e = String.fromCodePoint(parseInt(t, 10));
                  }
                }
              } else {
                e = et[t];
              }
              break;
            }
            t += r;
          }
          return e || (this.state.pos = i, "&");
        }
      }, {
        key: "jsxReadWord",
        value: function () {
          var e;
          var t = this.state.pos;
          do {
            e = this.input.charCodeAt(++this.state.pos);
          } while (pe(e) || 45 === e);
          return this.finishToken(128, this.input.slice(t, this.state.pos));
        }
      }, {
        key: "jsxParseIdentifier",
        value: function () {
          var e = this.startNode();
          if (this.match(128)) {
            e.name = this.state.value;
          } else {
            if (Q(this.state.type)) {
              e.name = Z(this.state.type);
            } else {
              this.unexpected();
            }
          }
          this.next();
          return this.finishNode(e, "JSXIdentifier");
        }
      }, {
        key: "jsxParseNamespacedName",
        value: function () {
          var e = this.state.start;
          var t = this.state.startLoc;
          var n = this.jsxParseIdentifier();
          if (!this.eat(14)) {
            return n;
          }
          var r = this.startNodeAt(e, t);
          r.namespace = n;
          r.name = this.jsxParseIdentifier();
          return this.finishNode(r, "JSXNamespacedName");
        }
      }, {
        key: "jsxParseElementName",
        value: function () {
          var e = this.state.start;
          var t = this.state.startLoc;
          var n = this.jsxParseNamespacedName();
          if ("JSXNamespacedName" === n.type) {
            return n;
          }
          for (; this.eat(16);) {
            var r = this.startNodeAt(e, t);
            r.object = n;
            r.property = this.jsxParseIdentifier();
            n = this.finishNode(r, "JSXMemberExpression");
          }
          return n;
        }
      }, {
        key: "jsxParseAttributeValue",
        value: function () {
          var e;
          switch (this.state.type) {
            case 5:
              e = this.startNode();
              this.next();
              if ("JSXEmptyExpression" === (e = this.jsxParseExpressionContainer(e)).expression.type) {
                this.raise(e.start, rt.AttributeIsEmpty);
              }
              return e;
            case 130:
            case 121:
              return this.parseExprAtom();
            default:
              throw this.raise(this.state.start, rt.UnsupportedJsxValue);
          }
        }
      }, {
        key: "jsxParseEmptyExpression",
        value: function () {
          var e = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
          return this.finishNodeAt(e, "JSXEmptyExpression", this.state.start, this.state.startLoc);
        }
      }, {
        key: "jsxParseSpreadChild",
        value: function (e) {
          this.next();
          e.expression = this.parseExpression();
          this.expect(8);
          return this.finishNode(e, "JSXSpreadChild");
        }
      }, {
        key: "jsxParseExpressionContainer",
        value: function (e) {
          if (this.match(8)) {
            e.expression = this.jsxParseEmptyExpression();
          } else {
            var t = this.parseExpression();
            e.expression = t;
          }
          this.expect(8);
          return this.finishNode(e, "JSXExpressionContainer");
        }
      }, {
        key: "jsxParseAttribute",
        value: function () {
          var e = this.startNode();
          return this.eat(5) ? (this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(27) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
        }
      }, {
        key: "jsxParseOpeningElementAt",
        value: function (e, t) {
          var n = this.startNodeAt(e, t);
          return this.match(131) ? (this.expect(131), this.finishNode(n, "JSXOpeningFragment")) : (n.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(n));
        }
      }, {
        key: "jsxParseOpeningElementAfterName",
        value: function (e) {
          for (var t = []; !this.match(48) && !this.match(131);) {
            t.push(this.jsxParseAttribute());
          }
          e.attributes = t;
          e.selfClosing = this.eat(48);
          this.expect(131);
          return this.finishNode(e, "JSXOpeningElement");
        }
      }, {
        key: "jsxParseClosingElementAt",
        value: function (e, t) {
          var n = this.startNodeAt(e, t);
          return this.match(131) ? (this.expect(131), this.finishNode(n, "JSXClosingFragment")) : (n.name = this.jsxParseElementName(), this.expect(131), this.finishNode(n, "JSXClosingElement"));
        }
      }, {
        key: "jsxParseElementAt",
        value: function (e, t) {
          var n = this.startNodeAt(e, t);
          var r = [];
          var i = this.jsxParseOpeningElementAt(e, t);
          var a = null;
          if (!i.selfClosing) {
            e: for (;;) {
              switch (this.state.type) {
                case 130:
                  if (e = this.state.start, t = this.state.startLoc, this.next(), this.eat(48)) {
                    a = this.jsxParseClosingElementAt(e, t);
                    break e;
                  }
                  r.push(this.jsxParseElementAt(e, t));
                  break;
                case 129:
                  r.push(this.parseExprAtom());
                  break;
                case 5:
                  var s = this.startNode();
                  this.next();
                  if (this.match(21)) {
                    r.push(this.jsxParseSpreadChild(s));
                  } else {
                    r.push(this.jsxParseExpressionContainer(s));
                  }
                  break;
                default:
                  throw this.unexpected();
              }
            }
            if (it(i) && !it(a)) {
              this.raise(a.start, rt.MissingClosingTagFragment);
            } else {
              if (!it(i) && it(a)) {
                this.raise(a.start, rt.MissingClosingTagElement, at(i.name));
              } else {
                if (!(it(i) || it(a))) {
                  if (at(a.name) !== at(i.name)) {
                    this.raise(a.start, rt.MissingClosingTagElement, at(i.name));
                  }
                }
              }
            }
          }
          if (it(i)) {
            n.openingFragment = i;
            n.closingFragment = a;
          } else {
            n.openingElement = i;
            n.closingElement = a;
          }
          n.children = r;
          if (this.isRelational("<")) {
            throw this.raise(this.state.start, rt.UnwrappedAdjacentJSXElements);
          }
          return it(i) ? this.finishNode(n, "JSXFragment") : this.finishNode(n, "JSXElement");
        }
      }, {
        key: "jsxParseElement",
        value: function () {
          var e = this.state.start;
          var t = this.state.startLoc;
          this.next();
          return this.jsxParseElementAt(e, t);
        }
      }, {
        key: "parseExprAtom",
        value: function (e) {
          return this.match(129) ? this.parseLiteral(this.state.value, "JSXText") : this.match(130) ? this.jsxParseElement() : this.isRelational("<") && 33 !== this.input.charCodeAt(this.state.pos) ? (this.finishToken(130), this.jsxParseElement()) : a(s(n.prototype), "parseExprAtom", this).call(this, e);
        }
      }, {
        key: "createLookaheadState",
        value: function (e) {
          var t = a(s(n.prototype), "createLookaheadState", this).call(this, e);
          t.inPropertyName = e.inPropertyName;
          return t;
        }
      }, {
        key: "getTokenFromCode",
        value: function (e) {
          if (this.state.inPropertyName) {
            return a(s(n.prototype), "getTokenFromCode", this).call(this, e);
          }
          var t = this.curContext();
          if (t === _.j_expr) {
            return this.jsxReadToken();
          }
          if (t === _.j_oTag || t === _.j_cTag) {
            if (ce(e)) {
              return this.jsxReadWord();
            }
            if (62 === e) {
              ++this.state.pos;
              return this.finishToken(131);
            }
            if ((34 === e || 39 === e) && t === _.j_oTag) {
              return this.jsxReadString(e);
            }
          }
          return 60 === e && this.state.exprAllowed && 33 !== this.input.charCodeAt(this.state.pos + 1) ? (++this.state.pos, this.finishToken(130)) : a(s(n.prototype), "getTokenFromCode", this).call(this, e);
        }
      }, {
        key: "updateContext",
        value: function (e) {
          a(s(n.prototype), "updateContext", this).call(this, e);
          var t = this.state;
          var r = t.context;
          var i = t.type;
          if (48 === i && 130 === e) {
            r.splice(-2, 2, _.j_cTag);
            this.state.exprAllowed = !1;
          } else if (130 === i) {
            r.push(_.j_expr, _.j_oTag);
          } else if (131 === i) {
            var o = r.pop();
            if (o === _.j_oTag && 48 === e || o === _.j_cTag) {
              r.pop();
              this.state.exprAllowed = r[r.length - 1] === _.j_expr;
            } else {
              this.state.exprAllowed = !0;
            }
          } else if (!Q(i) || 16 !== e && 18 !== e) {
            this.state.exprAllowed = K[i];
          } else {
            this.state.exprAllowed = !1;
          }
        }
      }]);
      return n;
    }(e);
  },
  flow: function (e) {
    return function (e) {
      o(n, e);
      var t = l(n);
      function n() {
        var e;
        p(this, n);
        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) {
          i[a] = arguments[a];
        }
        (e = t.call.apply(t, [this].concat(i))).flowPragma = void 0;
        return e;
      }
      c(n, [{
        key: "getScopeHandler",
        value: function () {
          return Ae;
        }
      }, {
        key: "shouldParseTypes",
        value: function () {
          return this.getPluginOption("flow", "all") || "flow" === this.flowPragma;
        }
      }, {
        key: "shouldParseEnums",
        value: function () {
          return !!this.getPluginOption("flow", "enums");
        }
      }, {
        key: "finishToken",
        value: function (e, t) {
          if (121 !== e && 13 !== e && 26 !== e && void 0 === this.flowPragma) {
            this.flowPragma = null;
          }
          return a(s(n.prototype), "finishToken", this).call(this, e, t);
        }
      }, {
        key: "addComment",
        value: function (e) {
          if (void 0 === this.flowPragma) {
            var t = Ze.exec(e.value);
            if (t) {
              if ("flow" === t[1]) {
                this.flowPragma = "flow";
              } else {
                if ("noflow" !== t[1]) {
                  throw new Error("Unexpected flow pragma");
                }
                this.flowPragma = "noflow";
              }
            } else {
              ;
            }
          }
          return a(s(n.prototype), "addComment", this).call(this, e);
        }
      }, {
        key: "flowParseTypeInitialiser",
        value: function (e) {
          var t = this.state.inType;
          this.state.inType = !0;
          this.expect(e || 14);
          var n = this.flowParseType();
          this.state.inType = t;
          return n;
        }
      }, {
        key: "flowParsePredicate",
        value: function () {
          var e = this.startNode();
          var t = this.state.start;
          this.next();
          this.expectContextual(99);
          if (this.state.lastTokStart > t + 1) {
            this.raise(t, Ge.UnexpectedSpaceBetweenModuloChecks);
          }
          return this.eat(10) ? (e.value = this.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
        }
      }, {
        key: "flowParseTypeAndPredicateInitialiser",
        value: function () {
          var e = this.state.inType;
          this.state.inType = !0;
          this.expect(14);
          var t = null;
          var n = null;
          if (this.match(46)) {
            this.state.inType = e;
            n = this.flowParsePredicate();
          } else {
            t = this.flowParseType();
            this.state.inType = e;
            if (this.match(46)) {
              n = this.flowParsePredicate();
            }
          }
          return [t, n];
        }
      }, {
        key: "flowParseDeclareClass",
        value: function (e) {
          this.next();
          this.flowParseInterfaceish(e, !0);
          return this.finishNode(e, "DeclareClass");
        }
      }, {
        key: "flowParseDeclareFunction",
        value: function (e) {
          this.next();
          var t = e.id = this.parseIdentifier();
          var n = this.startNode();
          var r = this.startNode();
          if (this.isRelational("<")) {
            n.typeParameters = this.flowParseTypeParameterDeclaration();
          } else {
            n.typeParameters = null;
          }
          this.expect(10);
          var a = this.flowParseFunctionTypeParams();
          n.params = a.params;
          n.rest = a.rest;
          n.this = a._this;
          this.expect(11);
          var s = this.flowParseTypeAndPredicateInitialiser();
          var o = i(s, 2);
          n.returnType = o[0];
          e.predicate = o[1];
          r.typeAnnotation = this.finishNode(n, "FunctionTypeAnnotation");
          t.typeAnnotation = this.finishNode(r, "TypeAnnotation");
          this.resetEndLocation(t);
          this.semicolon();
          this.scope.declareName(e.id.name, 2048, e.id.start);
          return this.finishNode(e, "DeclareFunction");
        }
      }, {
        key: "flowParseDeclare",
        value: function (e, t) {
          if (this.match(72)) {
            return this.flowParseDeclareClass(e);
          }
          if (this.match(60)) {
            return this.flowParseDeclareFunction(e);
          }
          if (this.match(66)) {
            return this.flowParseDeclareVariable(e);
          }
          if (this.eatContextual(115)) {
            return this.match(16) ? this.flowParseDeclareModuleExports(e) : (t && this.raise(this.state.lastTokStart, Ge.NestedDeclareModule), this.flowParseDeclareModule(e));
          }
          if (this.isContextual(118)) {
            return this.flowParseDeclareTypeAlias(e);
          }
          if (this.isContextual(119)) {
            return this.flowParseDeclareOpaqueType(e);
          }
          if (this.isContextual(117)) {
            return this.flowParseDeclareInterface(e);
          }
          if (this.match(74)) {
            return this.flowParseDeclareExportDeclaration(e, t);
          }
          throw this.unexpected();
        }
      }, {
        key: "flowParseDeclareVariable",
        value: function (e) {
          this.next();
          e.id = this.flowParseTypeAnnotatableIdentifier(!0);
          this.scope.declareName(e.id.name, 5, e.id.start);
          this.semicolon();
          return this.finishNode(e, "DeclareVariable");
        }
      }, {
        key: "flowParseDeclareModule",
        value: function (e) {
          var t = this;
          this.scope.enter(0);
          if (this.match(121)) {
            e.id = this.parseExprAtom();
          } else {
            e.id = this.parseIdentifier();
          }
          var n = e.body = this.startNode();
          var r = n.body = [];
          for (this.expect(5); !this.match(8);) {
            var i = this.startNode();
            if (this.match(75)) {
              this.next();
              if (!(this.isContextual(118) || this.match(79))) {
                this.raise(this.state.lastTokStart, Ge.InvalidNonTypeImportInDeclareModule);
              }
              this.parseImport(i);
            } else {
              this.expectContextual(113, Ge.UnsupportedStatementInDeclareModule);
              i = this.flowParseDeclare(i, !0);
            }
            r.push(i);
          }
          this.scope.exit();
          this.expect(8);
          this.finishNode(n, "BlockStatement");
          var a = null;
          var s = !1;
          r.forEach(function (e) {
            if (!function (e) {
              return "DeclareExportAllDeclaration" === e.type || "DeclareExportDeclaration" === e.type && (!e.declaration || "TypeAlias" !== e.declaration.type && "InterfaceDeclaration" !== e.declaration.type);
            }(e)) {
              if ("DeclareModuleExports" === e.type) {
                if (s) {
                  t.raise(e.start, Ge.DuplicateDeclareModuleExports);
                }
                if ("ES" === a) {
                  t.raise(e.start, Ge.AmbiguousDeclareModuleKind);
                }
                a = "CommonJS";
                s = !0;
              }
            } else {
              if ("CommonJS" === a) {
                t.raise(e.start, Ge.AmbiguousDeclareModuleKind);
              }
              a = "ES";
            }
          });
          e.kind = a || "CommonJS";
          return this.finishNode(e, "DeclareModule");
        }
      }, {
        key: "flowParseDeclareExportDeclaration",
        value: function (e, t) {
          this.expect(74);
          if (this.eat(57)) {
            if (this.match(60) || this.match(72)) {
              e.declaration = this.flowParseDeclare(this.startNode());
            } else {
              e.declaration = this.flowParseType();
              this.semicolon();
            }
            e.default = !0;
            return this.finishNode(e, "DeclareExportDeclaration");
          }
          if (this.match(67) || this.isLet() || (this.isContextual(118) || this.isContextual(117)) && !t) {
            var n = this.state.value;
            var r = Qe[n];
            throw this.raise(this.state.start, Ge.UnsupportedDeclareExportKind, n, r);
          }
          if (this.match(66) || this.match(60) || this.match(72) || this.isContextual(119)) {
            e.declaration = this.flowParseDeclare(this.startNode());
            e.default = !1;
            return this.finishNode(e, "DeclareExportDeclaration");
          }
          if (this.match(47) || this.match(5) || this.isContextual(117) || this.isContextual(118) || this.isContextual(119)) {
            if ("ExportNamedDeclaration" === (e = this.parseExport(e)).type) {
              e.type = "ExportDeclaration";
              e.default = !1;
              delete e.exportKind;
            }
            e.type = "Declare" + e.type;
            return e;
          }
          throw this.unexpected();
        }
      }, {
        key: "flowParseDeclareModuleExports",
        value: function (e) {
          this.next();
          this.expectContextual(100);
          e.typeAnnotation = this.flowParseTypeAnnotation();
          this.semicolon();
          return this.finishNode(e, "DeclareModuleExports");
        }
      }, {
        key: "flowParseDeclareTypeAlias",
        value: function (e) {
          this.next();
          this.flowParseTypeAlias(e);
          e.type = "DeclareTypeAlias";
          return e;
        }
      }, {
        key: "flowParseDeclareOpaqueType",
        value: function (e) {
          this.next();
          this.flowParseOpaqueType(e, !0);
          e.type = "DeclareOpaqueType";
          return e;
        }
      }, {
        key: "flowParseDeclareInterface",
        value: function (e) {
          this.next();
          this.flowParseInterfaceish(e);
          return this.finishNode(e, "DeclareInterface");
        }
      }, {
        key: "flowParseInterfaceish",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          e.id = this.flowParseRestrictedIdentifier(!t, !0);
          this.scope.declareName(e.id.name, t ? 17 : 9, e.id.start);
          if (this.isRelational("<")) {
            e.typeParameters = this.flowParseTypeParameterDeclaration();
          } else {
            e.typeParameters = null;
          }
          e.extends = [];
          e.implements = [];
          e.mixins = [];
          if (this.eat(73)) {
            do {
              e.extends.push(this.flowParseInterfaceExtends());
            } while (!t && this.eat(12));
          }
          if (this.isContextual(106)) {
            this.next();
            do {
              e.mixins.push(this.flowParseInterfaceExtends());
            } while (this.eat(12));
          }
          if (this.isContextual(102)) {
            this.next();
            do {
              e.implements.push(this.flowParseInterfaceExtends());
            } while (this.eat(12));
          }
          e.body = this.flowParseObjectType({
            allowStatic: t,
            allowExact: !1,
            allowSpread: !1,
            allowProto: t,
            allowInexact: !1
          });
        }
      }, {
        key: "flowParseInterfaceExtends",
        value: function () {
          var e = this.startNode();
          e.id = this.flowParseQualifiedTypeIdentifier();
          if (this.isRelational("<")) {
            e.typeParameters = this.flowParseTypeParameterInstantiation();
          } else {
            e.typeParameters = null;
          }
          return this.finishNode(e, "InterfaceExtends");
        }
      }, {
        key: "flowParseInterface",
        value: function (e) {
          this.flowParseInterfaceish(e);
          return this.finishNode(e, "InterfaceDeclaration");
        }
      }, {
        key: "checkNotUnderscore",
        value: function (e) {
          if ("_" === e) {
            this.raise(this.state.start, Ge.UnexpectedReservedUnderscore);
          }
        }
      }, {
        key: "checkReservedType",
        value: function (e, t, n) {
          if (Xe.has(e)) {
            this.raise(t, n ? Ge.AssignReservedType : Ge.UnexpectedReservedType, e);
          }
        }
      }, {
        key: "flowParseRestrictedIdentifier",
        value: function (e, t) {
          this.checkReservedType(this.state.value, this.state.start, t);
          return this.parseIdentifier(e);
        }
      }, {
        key: "flowParseTypeAlias",
        value: function (e) {
          e.id = this.flowParseRestrictedIdentifier(!1, !0);
          this.scope.declareName(e.id.name, 9, e.id.start);
          if (this.isRelational("<")) {
            e.typeParameters = this.flowParseTypeParameterDeclaration();
          } else {
            e.typeParameters = null;
          }
          e.right = this.flowParseTypeInitialiser(27);
          this.semicolon();
          return this.finishNode(e, "TypeAlias");
        }
      }, {
        key: "flowParseOpaqueType",
        value: function (e, t) {
          this.expectContextual(118);
          e.id = this.flowParseRestrictedIdentifier(!0, !0);
          this.scope.declareName(e.id.name, 9, e.id.start);
          if (this.isRelational("<")) {
            e.typeParameters = this.flowParseTypeParameterDeclaration();
          } else {
            e.typeParameters = null;
          }
          e.supertype = null;
          if (this.match(14)) {
            e.supertype = this.flowParseTypeInitialiser(14);
          }
          e.impltype = null;
          if (!t) {
            e.impltype = this.flowParseTypeInitialiser(27);
          }
          this.semicolon();
          return this.finishNode(e, "OpaqueType");
        }
      }, {
        key: "flowParseTypeParameter",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var t = this.state.start;
          var n = this.startNode();
          var r = this.flowParseVariance();
          var i = this.flowParseTypeAnnotatableIdentifier();
          n.name = i.name;
          n.variance = r;
          n.bound = i.typeAnnotation;
          if (this.match(27)) {
            this.eat(27);
            n.default = this.flowParseType();
          } else {
            if (e) {
              this.raise(t, Ge.MissingTypeParamDefault);
            }
          }
          return this.finishNode(n, "TypeParameter");
        }
      }, {
        key: "flowParseTypeParameterDeclaration",
        value: function () {
          var e = this.state.inType;
          var t = this.startNode();
          t.params = [];
          this.state.inType = !0;
          if (this.isRelational("<") || this.match(130)) {
            this.next();
          } else {
            this.unexpected();
          }
          var n = !1;
          do {
            var r = this.flowParseTypeParameter(n);
            t.params.push(r);
            if (r.default) {
              n = !0;
            }
            if (!this.isRelational(">")) {
              this.expect(12);
            }
          } while (!this.isRelational(">"));
          this.expectRelational(">");
          this.state.inType = e;
          return this.finishNode(t, "TypeParameterDeclaration");
        }
      }, {
        key: "flowParseTypeParameterInstantiation",
        value: function () {
          var e = this.startNode();
          var t = this.state.inType;
          e.params = [];
          this.state.inType = !0;
          this.expectRelational("<");
          var n = this.state.noAnonFunctionType;
          for (this.state.noAnonFunctionType = !1; !this.isRelational(">");) {
            e.params.push(this.flowParseType());
            if (!this.isRelational(">")) {
              this.expect(12);
            }
          }
          this.state.noAnonFunctionType = n;
          this.expectRelational(">");
          this.state.inType = t;
          return this.finishNode(e, "TypeParameterInstantiation");
        }
      }, {
        key: "flowParseTypeParameterInstantiationCallOrNew",
        value: function () {
          var e = this.startNode();
          var t = this.state.inType;
          for (e.params = [], this.state.inType = !0, this.expectRelational("<"); !this.isRelational(">");) {
            e.params.push(this.flowParseTypeOrImplicitInstantiation());
            if (!this.isRelational(">")) {
              this.expect(12);
            }
          }
          this.expectRelational(">");
          this.state.inType = t;
          return this.finishNode(e, "TypeParameterInstantiation");
        }
      }, {
        key: "flowParseInterfaceType",
        value: function () {
          var e = this.startNode();
          this.expectContextual(117);
          e.extends = [];
          if (this.eat(73)) {
            do {
              e.extends.push(this.flowParseInterfaceExtends());
            } while (this.eat(12));
          }
          e.body = this.flowParseObjectType({
            allowStatic: !1,
            allowExact: !1,
            allowSpread: !1,
            allowProto: !1,
            allowInexact: !1
          });
          return this.finishNode(e, "InterfaceTypeAnnotation");
        }
      }, {
        key: "flowParseObjectPropertyKey",
        value: function () {
          return this.match(122) || this.match(121) ? this.parseExprAtom() : this.parseIdentifier(!0);
        }
      }, {
        key: "flowParseObjectTypeIndexer",
        value: function (e, t, n) {
          e.static = t;
          if (14 === this.lookahead().type) {
            e.id = this.flowParseObjectPropertyKey();
            e.key = this.flowParseTypeInitialiser();
          } else {
            e.id = null;
            e.key = this.flowParseType();
          }
          this.expect(3);
          e.value = this.flowParseTypeInitialiser();
          e.variance = n;
          return this.finishNode(e, "ObjectTypeIndexer");
        }
      }, {
        key: "flowParseObjectTypeInternalSlot",
        value: function (e, t) {
          e.static = t;
          e.id = this.flowParseObjectPropertyKey();
          this.expect(3);
          this.expect(3);
          if (this.isRelational("<") || this.match(10)) {
            e.method = !0;
            e.optional = !1;
            e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.start, e.loc.start));
          } else {
            e.method = !1;
            if (this.eat(17)) {
              e.optional = !0;
            }
            e.value = this.flowParseTypeInitialiser();
          }
          return this.finishNode(e, "ObjectTypeInternalSlot");
        }
      }, {
        key: "flowParseObjectTypeMethodish",
        value: function (e) {
          for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.isRelational("<") && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(70) && (e.this = this.flowParseFunctionTypeParam(!0), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);) {
            e.params.push(this.flowParseFunctionTypeParam(!1));
            if (!this.match(11)) {
              this.expect(12);
            }
          }
          if (this.eat(21)) {
            e.rest = this.flowParseFunctionTypeParam(!1);
          }
          this.expect(11);
          e.returnType = this.flowParseTypeInitialiser();
          return this.finishNode(e, "FunctionTypeAnnotation");
        }
      }, {
        key: "flowParseObjectTypeCallProperty",
        value: function (e, t) {
          var n = this.startNode();
          e.static = t;
          e.value = this.flowParseObjectTypeMethodish(n);
          return this.finishNode(e, "ObjectTypeCallProperty");
        }
      }, {
        key: "flowParseObjectType",
        value: function (e) {
          var t = e.allowStatic;
          var n = e.allowExact;
          var r = e.allowSpread;
          var i = e.allowProto;
          var a = e.allowInexact;
          var s = this.state.inType;
          this.state.inType = !0;
          var o;
          var l;
          var u = this.startNode();
          u.callProperties = [];
          u.properties = [];
          u.indexers = [];
          u.internalSlots = [];
          var c = !1;
          for (n && this.match(6) ? (this.expect(6), o = 9, l = !0) : (this.expect(5), o = 8, l = !1), u.exact = l; !this.match(o);) {
            var p = !1;
            var f = null;
            var d = null;
            var h = this.startNode();
            if (i && this.isContextual(107)) {
              var y = this.lookahead();
              if (14 !== y.type && 17 !== y.type) {
                this.next();
                f = this.state.start;
                t = !1;
              }
            }
            if (t && this.isContextual(96)) {
              var m = this.lookahead();
              if (14 !== m.type && 17 !== m.type) {
                this.next();
                p = !0;
              }
            }
            var v = this.flowParseVariance();
            if (this.eat(0)) {
              if (null != f) {
                this.unexpected(f);
              }
              if (this.eat(0)) {
                if (v) {
                  this.unexpected(v.start);
                }
                u.internalSlots.push(this.flowParseObjectTypeInternalSlot(h, p));
              } else {
                u.indexers.push(this.flowParseObjectTypeIndexer(h, p, v));
              }
            } else if (this.match(10) || this.isRelational("<")) {
              if (null != f) {
                this.unexpected(f);
              }
              if (v) {
                this.unexpected(v.start);
              }
              u.callProperties.push(this.flowParseObjectTypeCallProperty(h, p));
            } else {
              var g = "init";
              if (this.isContextual(90) || this.isContextual(95)) {
                if (G(this.lookahead().type)) {
                  g = this.state.value;
                  this.next();
                }
              }
              var T = this.flowParseObjectTypeProperty(h, p, f, v, g, r, null != a ? a : !l);
              if (null === T) {
                c = !0;
                d = this.state.lastTokStart;
              } else {
                u.properties.push(T);
              }
            }
            this.flowObjectTypeSemicolon();
            if (!(!d || this.match(8) || this.match(9))) {
              this.raise(d, Ge.UnexpectedExplicitInexactInObject);
            }
          }
          this.expect(o);
          if (r) {
            u.inexact = c;
          }
          var b = this.finishNode(u, "ObjectTypeAnnotation");
          this.state.inType = s;
          return b;
        }
      }, {
        key: "flowParseObjectTypeProperty",
        value: function (e, t, n, r, i, a, s) {
          if (this.eat(21)) {
            return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (a ? s || this.raise(this.state.lastTokStart, Ge.InexactInsideExact) : this.raise(this.state.lastTokStart, Ge.InexactInsideNonObject), r && this.raise(r.start, Ge.InexactVariance), null) : (a || this.raise(this.state.lastTokStart, Ge.UnexpectedSpreadType), null != n && this.unexpected(n), r && this.raise(r.start, Ge.SpreadVariance), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
          }
          e.key = this.flowParseObjectPropertyKey();
          e.static = t;
          e.proto = null != n;
          e.kind = i;
          var o = !1;
          if (this.isRelational("<") || this.match(10)) {
            e.method = !0;
            if (null != n) {
              this.unexpected(n);
            }
            if (r) {
              this.unexpected(r.start);
            }
            e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.start, e.loc.start));
            if (!("get" !== i && "set" !== i)) {
              this.flowCheckGetterSetterParams(e);
            }
            if (!a && "constructor" === e.key.name && e.value.this) {
              this.raise(e.value.this.start, Ge.ThisParamBannedInConstructor);
            }
          } else {
            if ("init" !== i) {
              this.unexpected();
            }
            e.method = !1;
            if (this.eat(17)) {
              o = !0;
            }
            e.value = this.flowParseTypeInitialiser();
            e.variance = r;
          }
          e.optional = o;
          return this.finishNode(e, "ObjectTypeProperty");
        }
      }, {
        key: "flowCheckGetterSetterParams",
        value: function (e) {
          var t = "get" === e.kind ? 0 : 1;
          var n = e.start;
          var r = e.value.params.length + (e.value.rest ? 1 : 0);
          if (e.value.this) {
            this.raise(e.value.this.start, "get" === e.kind ? Ge.GetterMayNotHaveThisParam : Ge.SetterMayNotHaveThisParam);
          }
          if (r !== t) {
            if ("get" === e.kind) {
              this.raise(n, k.BadGetterArity);
            } else {
              this.raise(n, k.BadSetterArity);
            }
          }
          if ("set" === e.kind && e.value.rest) {
            this.raise(n, k.BadSetterRestParameter);
          }
        }
      }, {
        key: "flowObjectTypeSemicolon",
        value: function () {
          if (!(this.eat(13) || this.eat(12) || this.match(8) || this.match(9))) {
            this.unexpected();
          }
        }
      }, {
        key: "flowParseQualifiedTypeIdentifier",
        value: function (e, t, n) {
          e = e || this.state.start;
          t = t || this.state.startLoc;
          for (var r = n || this.flowParseRestrictedIdentifier(!0); this.eat(16);) {
            var i = this.startNodeAt(e, t);
            i.qualification = r;
            i.id = this.flowParseRestrictedIdentifier(!0);
            r = this.finishNode(i, "QualifiedTypeIdentifier");
          }
          return r;
        }
      }, {
        key: "flowParseGenericType",
        value: function (e, t, n) {
          var r = this.startNodeAt(e, t);
          r.typeParameters = null;
          r.id = this.flowParseQualifiedTypeIdentifier(e, t, n);
          if (this.isRelational("<")) {
            r.typeParameters = this.flowParseTypeParameterInstantiation();
          }
          return this.finishNode(r, "GenericTypeAnnotation");
        }
      }, {
        key: "flowParseTypeofType",
        value: function () {
          var e = this.startNode();
          this.expect(79);
          e.argument = this.flowParsePrimaryType();
          return this.finishNode(e, "TypeofTypeAnnotation");
        }
      }, {
        key: "flowParseTupleType",
        value: function () {
          var e = this.startNode();
          for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3));) {
            this.expect(12);
          }
          this.expect(3);
          return this.finishNode(e, "TupleTypeAnnotation");
        }
      }, {
        key: "flowParseFunctionTypeParam",
        value: function (e) {
          var t = null;
          var n = !1;
          var r = null;
          var i = this.startNode();
          var a = this.lookahead();
          var s = 70 === this.state.type;
          if (14 === a.type || 17 === a.type) {
            if (s && !e) {
              this.raise(i.start, Ge.ThisParamMustBeFirst);
            }
            t = this.parseIdentifier(s);
            if (this.eat(17)) {
              n = !0;
              if (s) {
                this.raise(i.start, Ge.ThisParamMayNotBeOptional);
              }
            }
            r = this.flowParseTypeInitialiser();
          } else {
            r = this.flowParseType();
          }
          i.name = t;
          i.optional = n;
          i.typeAnnotation = r;
          return this.finishNode(i, "FunctionTypeParam");
        }
      }, {
        key: "reinterpretTypeAsFunctionTypeParam",
        value: function (e) {
          var t = this.startNodeAt(e.start, e.loc.start);
          t.name = null;
          t.optional = !1;
          t.typeAnnotation = e;
          return this.finishNode(t, "FunctionTypeParam");
        }
      }, {
        key: "flowParseFunctionTypeParams",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          var t = null;
          var n = null;
          for (this.match(70) && ((n = this.flowParseFunctionTypeParam(!0)).name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);) {
            e.push(this.flowParseFunctionTypeParam(!1));
            if (!this.match(11)) {
              this.expect(12);
            }
          }
          if (this.eat(21)) {
            t = this.flowParseFunctionTypeParam(!1);
          }
          return {
            params: e,
            rest: t,
            _this: n
          };
        }
      }, {
        key: "flowIdentToTypeAnnotation",
        value: function (e, t, n, r) {
          switch (r.name) {
            case "any":
              return this.finishNode(n, "AnyTypeAnnotation");
            case "bool":
            case "boolean":
              return this.finishNode(n, "BooleanTypeAnnotation");
            case "mixed":
              return this.finishNode(n, "MixedTypeAnnotation");
            case "empty":
              return this.finishNode(n, "EmptyTypeAnnotation");
            case "number":
              return this.finishNode(n, "NumberTypeAnnotation");
            case "string":
              return this.finishNode(n, "StringTypeAnnotation");
            case "symbol":
              return this.finishNode(n, "SymbolTypeAnnotation");
            default:
              this.checkNotUnderscore(r.name);
              return this.flowParseGenericType(e, t, r);
          }
        }
      }, {
        key: "flowParsePrimaryType",
        value: function () {
          var e;
          var t;
          var r = this.state.start;
          var i = this.state.startLoc;
          var o = this.startNode();
          var l = !1;
          var u = this.state.noAnonFunctionType;
          switch (this.state.type) {
            case 5:
              return this.flowParseObjectType({
                allowStatic: !1,
                allowExact: !1,
                allowSpread: !0,
                allowProto: !1,
                allowInexact: !0
              });
            case 6:
              return this.flowParseObjectType({
                allowStatic: !1,
                allowExact: !0,
                allowSpread: !0,
                allowProto: !1,
                allowInexact: !1
              });
            case 0:
              this.state.noAnonFunctionType = !1;
              t = this.flowParseTupleType();
              this.state.noAnonFunctionType = u;
              return t;
            case 43:
              if ("<" === this.state.value) {
                o.typeParameters = this.flowParseTypeParameterDeclaration();
                this.expect(10);
                e = this.flowParseFunctionTypeParams();
                o.params = e.params;
                o.rest = e.rest;
                o.this = e._this;
                this.expect(11);
                this.expect(19);
                o.returnType = this.flowParseType();
                return this.finishNode(o, "FunctionTypeAnnotation");
              }
              break;
            case 10:
              if (this.next(), !this.match(11) && !this.match(21)) {
                if (J(this.state.type) || this.match(70)) {
                  var c = this.lookahead().type;
                  l = 17 !== c && 14 !== c;
                } else {
                  l = !0;
                }
              }
              if (l) {
                this.state.noAnonFunctionType = !1;
                t = this.flowParseType();
                this.state.noAnonFunctionType = u;
                if (this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && 19 === this.lookahead().type)) {
                  this.expect(11);
                  return t;
                }
                this.eat(12);
              }
              e = t ? this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(t)]) : this.flowParseFunctionTypeParams();
              o.params = e.params;
              o.rest = e.rest;
              o.this = e._this;
              this.expect(11);
              this.expect(19);
              o.returnType = this.flowParseType();
              o.typeParameters = null;
              return this.finishNode(o, "FunctionTypeAnnotation");
            case 121:
              return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
            case 77:
            case 78:
              o.value = this.match(77);
              this.next();
              return this.finishNode(o, "BooleanLiteralTypeAnnotation");
            case 45:
              if ("-" === this.state.value) {
                this.next();
                if (this.match(122)) {
                  return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", o);
                }
                if (this.match(123)) {
                  return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", o);
                }
                throw this.raise(this.state.start, Ge.UnexpectedSubtractionOperand);
              }
              throw this.unexpected();
            case 122:
              return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
            case 123:
              return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
            case 80:
              this.next();
              return this.finishNode(o, "VoidTypeAnnotation");
            case 76:
              this.next();
              return this.finishNode(o, "NullLiteralTypeAnnotation");
            case 70:
              this.next();
              return this.finishNode(o, "ThisTypeAnnotation");
            case 47:
              this.next();
              return this.finishNode(o, "ExistsTypeAnnotation");
            case 79:
              return this.flowParseTypeofType();
            default:
              if (Q(this.state.type)) {
                var p = Z(this.state.type);
                this.next();
                return a(s(n.prototype), "createIdentifier", this).call(this, o, p);
              }
              if (J(this.state.type)) {
                return this.isContextual(117) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(r, i, o, this.parseIdentifier());
              }
          }
          throw this.unexpected();
        }
      }, {
        key: "flowParsePostfixType",
        value: function () {
          for (var e = this.state.start, t = this.state.startLoc, n = this.flowParsePrimaryType(), r = !1; (this.match(0) || this.match(18)) && !this.canInsertSemicolon();) {
            var i = this.startNodeAt(e, t);
            var a = this.eat(18);
            r = r || a;
            this.expect(0);
            if (!a && this.match(3)) {
              i.elementType = n;
              this.next();
              n = this.finishNode(i, "ArrayTypeAnnotation");
            } else {
              i.objectType = n;
              i.indexType = this.flowParseType();
              this.expect(3);
              if (r) {
                i.optional = a;
                n = this.finishNode(i, "OptionalIndexedAccessType");
              } else {
                n = this.finishNode(i, "IndexedAccessType");
              }
            }
          }
          return n;
        }
      }, {
        key: "flowParsePrefixType",
        value: function () {
          var e = this.startNode();
          return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType();
        }
      }, {
        key: "flowParseAnonFunctionWithoutParens",
        value: function () {
          var e = this.flowParsePrefixType();
          if (!this.state.noAnonFunctionType && this.eat(19)) {
            var t = this.startNodeAt(e.start, e.loc.start);
            t.params = [this.reinterpretTypeAsFunctionTypeParam(e)];
            t.rest = null;
            t.this = null;
            t.returnType = this.flowParseType();
            t.typeParameters = null;
            return this.finishNode(t, "FunctionTypeAnnotation");
          }
          return e;
        }
      }, {
        key: "flowParseIntersectionType",
        value: function () {
          var e = this.startNode();
          this.eat(41);
          var t = this.flowParseAnonFunctionWithoutParens();
          for (e.types = [t]; this.eat(41);) {
            e.types.push(this.flowParseAnonFunctionWithoutParens());
          }
          return 1 === e.types.length ? t : this.finishNode(e, "IntersectionTypeAnnotation");
        }
      }, {
        key: "flowParseUnionType",
        value: function () {
          var e = this.startNode();
          this.eat(39);
          var t = this.flowParseIntersectionType();
          for (e.types = [t]; this.eat(39);) {
            e.types.push(this.flowParseIntersectionType());
          }
          return 1 === e.types.length ? t : this.finishNode(e, "UnionTypeAnnotation");
        }
      }, {
        key: "flowParseType",
        value: function () {
          var e = this.state.inType;
          this.state.inType = !0;
          var t = this.flowParseUnionType();
          this.state.inType = e;
          return t;
        }
      }, {
        key: "flowParseTypeOrImplicitInstantiation",
        value: function () {
          if (120 === this.state.type && "_" === this.state.value) {
            var e = this.state.start;
            var t = this.state.startLoc;
            var n = this.parseIdentifier();
            return this.flowParseGenericType(e, t, n);
          }
          return this.flowParseType();
        }
      }, {
        key: "flowParseTypeAnnotation",
        value: function () {
          var e = this.startNode();
          e.typeAnnotation = this.flowParseTypeInitialiser();
          return this.finishNode(e, "TypeAnnotation");
        }
      }, {
        key: "flowParseTypeAnnotatableIdentifier",
        value: function (e) {
          var t = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
          if (this.match(14)) {
            t.typeAnnotation = this.flowParseTypeAnnotation();
            this.resetEndLocation(t);
          }
          return t;
        }
      }, {
        key: "typeCastToParameter",
        value: function (e) {
          e.expression.typeAnnotation = e.typeAnnotation;
          this.resetEndLocation(e.expression, e.typeAnnotation.end, e.typeAnnotation.loc.end);
          return e.expression;
        }
      }, {
        key: "flowParseVariance",
        value: function () {
          var e = null;
          if (this.match(45)) {
            e = this.startNode();
            if ("+" === this.state.value) {
              e.kind = "plus";
            } else {
              e.kind = "minus";
            }
            this.next();
            this.finishNode(e, "Variance");
          }
          return e;
        }
      }, {
        key: "parseFunctionBody",
        value: function (e, t) {
          var r = this;
          var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return t ? this.forwardNoArrowParamsConversionAt(e, function () {
            return a(s(n.prototype), "parseFunctionBody", r).call(r, e, !0, i);
          }) : a(s(n.prototype), "parseFunctionBody", this).call(this, e, !1, i);
        }
      }, {
        key: "parseFunctionBodyAndFinish",
        value: function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (this.match(14)) {
            var o = this.startNode();
            var l = this.flowParseTypeAndPredicateInitialiser();
            var u = i(l, 2);
            o.typeAnnotation = u[0];
            e.predicate = u[1];
            e.returnType = o.typeAnnotation ? this.finishNode(o, "TypeAnnotation") : null;
          }
          a(s(n.prototype), "parseFunctionBodyAndFinish", this).call(this, e, t, r);
        }
      }, {
        key: "parseStatement",
        value: function (e, t) {
          if (this.state.strict && this.isContextual(117)) {
            if (X(this.lookahead().type)) {
              var r = this.startNode();
              this.next();
              return this.flowParseInterface(r);
            }
          } else if (this.shouldParseEnums() && this.isContextual(114)) {
            var i = this.startNode();
            this.next();
            return this.flowParseEnumDeclaration(i);
          }
          var o = a(s(n.prototype), "parseStatement", this).call(this, e, t);
          if (!(void 0 !== this.flowPragma || this.isValidDirective(o))) {
            this.flowPragma = null;
          }
          return o;
        }
      }, {
        key: "parseExpressionStatement",
        value: function (e, t) {
          if ("Identifier" === t.type) {
            if ("declare" === t.name) {
              if (this.match(72) || J(this.state.type) || this.match(60) || this.match(66) || this.match(74)) {
                return this.flowParseDeclare(e);
              }
            } else if (J(this.state.type)) {
              if ("interface" === t.name) {
                return this.flowParseInterface(e);
              }
              if ("type" === t.name) {
                return this.flowParseTypeAlias(e);
              }
              if ("opaque" === t.name) {
                return this.flowParseOpaqueType(e, !1);
              }
            }
          }
          return a(s(n.prototype), "parseExpressionStatement", this).call(this, e, t);
        }
      }, {
        key: "shouldParseExportDeclaration",
        value: function () {
          var e = this.state.type;
          return $(e) || this.shouldParseEnums() && 114 === e ? !this.state.containsEsc : a(s(n.prototype), "shouldParseExportDeclaration", this).call(this);
        }
      }, {
        key: "isExportDefaultSpecifier",
        value: function () {
          var e = this.state.type;
          return $(e) || this.shouldParseEnums() && 114 === e ? this.state.containsEsc : a(s(n.prototype), "isExportDefaultSpecifier", this).call(this);
        }
      }, {
        key: "parseExportDefaultExpression",
        value: function () {
          if (this.shouldParseEnums() && this.isContextual(114)) {
            var e = this.startNode();
            this.next();
            return this.flowParseEnumDeclaration(e);
          }
          return a(s(n.prototype), "parseExportDefaultExpression", this).call(this);
        }
      }, {
        key: "parseConditional",
        value: function (e, t, n, r) {
          var a = this;
          if (!this.match(17)) {
            return e;
          }
          if (this.state.maybeInArrowParameters) {
            var s = this.lookaheadCharCode();
            if (44 === s || 61 === s || 58 === s || 41 === s) {
              this.setOptionalParametersError(r);
              return e;
            }
          }
          this.expect(17);
          var o = this.state.clone();
          var l = this.state.noArrowAt;
          var c = this.startNodeAt(t, n);
          var p = this.tryParseConditionalConsequent();
          var f = p.consequent;
          var d = p.failed;
          var h = this.getArrowLikeExpressions(f);
          var y = i(h, 2);
          var m = y[0];
          var v = y[1];
          if (d || v.length > 0) {
            var g = u(l);
            if (v.length > 0) {
              this.state = o;
              this.state.noArrowAt = g;
              for (var T = 0; T < v.length; T++) {
                g.push(v[T].start);
              }
              var b = this.tryParseConditionalConsequent();
              f = b.consequent;
              d = b.failed;
              var S = this.getArrowLikeExpressions(f);
              var E = i(S, 2);
              m = E[0];
              v = E[1];
            }
            if (d && m.length > 1) {
              this.raise(o.start, Ge.AmbiguousConditionalArrow);
            }
            if (d && 1 === m.length) {
              this.state = o;
              g.push(m[0].start);
              this.state.noArrowAt = g;
              var x = this.tryParseConditionalConsequent();
              f = x.consequent;
              d = x.failed;
            }
          }
          this.getArrowLikeExpressions(f, !0);
          this.state.noArrowAt = l;
          this.expect(14);
          c.test = e;
          c.consequent = f;
          c.alternate = this.forwardNoArrowParamsConversionAt(c, function () {
            return a.parseMaybeAssign(void 0, void 0);
          });
          return this.finishNode(c, "ConditionalExpression");
        }
      }, {
        key: "tryParseConditionalConsequent",
        value: function () {
          this.state.noArrowParamsConversionAt.push(this.state.start);
          var e = this.parseMaybeAssignAllowIn();
          var t = !this.match(14);
          this.state.noArrowParamsConversionAt.pop();
          return {
            consequent: e,
            failed: t
          };
        }
      }, {
        key: "getArrowLikeExpressions",
        value: function (e, t) {
          for (var n = this, r = [e], i = []; 0 !== r.length;) {
            var a = r.pop();
            if ("ArrowFunctionExpression" === a.type) {
              if (a.typeParameters || !a.returnType) {
                this.finishArrowValidation(a);
              } else {
                i.push(a);
              }
              r.push(a.body);
            } else {
              if ("ConditionalExpression" === a.type) {
                r.push(a.consequent);
                r.push(a.alternate);
              }
            }
          }
          return t ? (i.forEach(function (e) {
            return n.finishArrowValidation(e);
          }), [i, []]) : function (e, t) {
            for (var n = [], r = [], i = 0; i < e.length; i++) {
              (t(e[i], i, e) ? n : r).push(e[i]);
            }
            return [n, r];
          }(i, function (e) {
            return e.params.every(function (e) {
              return n.isAssignable(e, !0);
            });
          });
        }
      }, {
        key: "finishArrowValidation",
        value: function (e) {
          var t;
          this.toAssignableList(e.params, null == (t = e.extra) ? void 0 : t.trailingComma, !1);
          this.scope.enter(6);
          a(s(n.prototype), "checkParams", this).call(this, e, !1, !0);
          this.scope.exit();
        }
      }, {
        key: "forwardNoArrowParamsConversionAt",
        value: function (e, t) {
          var n;
          if (-1 !== this.state.noArrowParamsConversionAt.indexOf(e.start)) {
            this.state.noArrowParamsConversionAt.push(this.state.start);
            n = t();
            this.state.noArrowParamsConversionAt.pop();
          } else {
            n = t();
          }
          return n;
        }
      }, {
        key: "parseParenItem",
        value: function (e, t, r) {
          e = a(s(n.prototype), "parseParenItem", this).call(this, e, t, r);
          if (this.eat(17)) {
            e.optional = !0;
            this.resetEndLocation(e);
          }
          if (this.match(14)) {
            var i = this.startNodeAt(t, r);
            i.expression = e;
            i.typeAnnotation = this.flowParseTypeAnnotation();
            return this.finishNode(i, "TypeCastExpression");
          }
          return e;
        }
      }, {
        key: "assertModuleNodeAllowed",
        value: function (e) {
          if (!("ImportDeclaration" === e.type && ("type" === e.importKind || "typeof" === e.importKind) || "ExportNamedDeclaration" === e.type && "type" === e.exportKind || "ExportAllDeclaration" === e.type && "type" === e.exportKind)) {
            a(s(n.prototype), "assertModuleNodeAllowed", this).call(this, e);
          }
        }
      }, {
        key: "parseExport",
        value: function (e) {
          var t = a(s(n.prototype), "parseExport", this).call(this, e);
          if (!("ExportNamedDeclaration" !== t.type && "ExportAllDeclaration" !== t.type)) {
            t.exportKind = t.exportKind || "value";
          }
          return t;
        }
      }, {
        key: "parseExportDeclaration",
        value: function (e) {
          if (this.isContextual(118)) {
            e.exportKind = "type";
            var t = this.startNode();
            this.next();
            return this.match(5) ? (e.specifiers = this.parseExportSpecifiers(!0), this.parseExportFrom(e), null) : this.flowParseTypeAlias(t);
          }
          if (this.isContextual(119)) {
            e.exportKind = "type";
            var r = this.startNode();
            this.next();
            return this.flowParseOpaqueType(r, !1);
          }
          if (this.isContextual(117)) {
            e.exportKind = "type";
            var i = this.startNode();
            this.next();
            return this.flowParseInterface(i);
          }
          if (this.shouldParseEnums() && this.isContextual(114)) {
            e.exportKind = "value";
            var o = this.startNode();
            this.next();
            return this.flowParseEnumDeclaration(o);
          }
          return a(s(n.prototype), "parseExportDeclaration", this).call(this, e);
        }
      }, {
        key: "eatExportStar",
        value: function (e) {
          return !!a(s(n.prototype), "eatExportStar", this).apply(this, arguments) || !(!this.isContextual(118) || 47 !== this.lookahead().type) && (e.exportKind = "type", this.next(), this.next(), !0);
        }
      }, {
        key: "maybeParseExportNamespaceSpecifier",
        value: function (e) {
          var t = this.state.start;
          var r = a(s(n.prototype), "maybeParseExportNamespaceSpecifier", this).call(this, e);
          if (r && "type" === e.exportKind) {
            this.unexpected(t);
          }
          return r;
        }
      }, {
        key: "parseClassId",
        value: function (e, t, r) {
          a(s(n.prototype), "parseClassId", this).call(this, e, t, r);
          if (this.isRelational("<")) {
            e.typeParameters = this.flowParseTypeParameterDeclaration();
          }
        }
      }, {
        key: "parseClassMember",
        value: function (e, t, r) {
          var i = this.state.start;
          if (this.isContextual(113)) {
            if (this.parseClassMemberFromModifier(e, t)) {
              return;
            }
            t.declare = !0;
          }
          a(s(n.prototype), "parseClassMember", this).call(this, e, t, r);
          if (t.declare) {
            if ("ClassProperty" !== t.type && "ClassPrivateProperty" !== t.type && "PropertyDefinition" !== t.type) {
              this.raise(i, Ge.DeclareClassElement);
            } else {
              if (t.value) {
                this.raise(t.value.start, Ge.DeclareClassFieldInitializer);
              }
            }
          }
        }
      }, {
        key: "isIterator",
        value: function (e) {
          return "iterator" === e || "asyncIterator" === e;
        }
      }, {
        key: "readIterator",
        value: function () {
          var e = a(s(n.prototype), "readWord1", this).call(this);
          var t = "@@" + e;
          if (!(this.isIterator(e) && this.state.inType)) {
            this.raise(this.state.pos, k.InvalidIdentifier, t);
          }
          this.finishToken(120, t);
        }
      }, {
        key: "getTokenFromCode",
        value: function (e) {
          var t = this.input.charCodeAt(this.state.pos + 1);
          return 123 === e && 124 === t ? this.finishOp(6, 2) : !this.state.inType || 62 !== e && 60 !== e ? this.state.inType && 63 === e ? 46 === t ? this.finishOp(18, 2) : this.finishOp(17, 1) : function (e, t) {
            return 64 === e && 64 === t;
          }(e, t) ? (this.state.pos += 2, this.readIterator()) : a(s(n.prototype), "getTokenFromCode", this).call(this, e) : this.finishOp(43, 1);
        }
      }, {
        key: "isAssignable",
        value: function (e, t) {
          return "TypeCastExpression" === e.type ? this.isAssignable(e.expression, t) : a(s(n.prototype), "isAssignable", this).call(this, e, t);
        }
      }, {
        key: "toAssignable",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return "TypeCastExpression" === e.type ? a(s(n.prototype), "toAssignable", this).call(this, this.typeCastToParameter(e), t) : a(s(n.prototype), "toAssignable", this).call(this, e, t);
        }
      }, {
        key: "toAssignableList",
        value: function (e, t, r) {
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            if ("TypeCastExpression" === (null == o ? void 0 : o.type)) {
              e[i] = this.typeCastToParameter(o);
            }
          }
          return a(s(n.prototype), "toAssignableList", this).call(this, e, t, r);
        }
      }, {
        key: "toReferencedList",
        value: function (e, t) {
          for (var n = 0; n < e.length; n++) {
            var r;
            var i = e[n];
            if (!(!i || "TypeCastExpression" !== i.type || null != (r = i.extra) && r.parenthesized || !(e.length > 1) && t)) {
              this.raise(i.typeAnnotation.start, Ge.TypeCastInPattern);
            }
          }
          return e;
        }
      }, {
        key: "parseArrayLike",
        value: function (e, t, r, i) {
          var o = a(s(n.prototype), "parseArrayLike", this).call(this, e, t, r, i);
          if (t && !this.state.maybeInArrowParameters) {
            this.toReferencedList(o.elements);
          }
          return o;
        }
      }, {
        key: "checkLVal",
        value: function (e) {
          if ("TypeCastExpression" !== e.type) {
            for (var t, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) {
              i[o - 1] = arguments[o];
            }
            return (t = a(s(n.prototype), "checkLVal", this)).call.apply(t, [this, e].concat(i));
          }
        }
      }, {
        key: "parseClassProperty",
        value: function (e) {
          if (this.match(14)) {
            e.typeAnnotation = this.flowParseTypeAnnotation();
          }
          return a(s(n.prototype), "parseClassProperty", this).call(this, e);
        }
      }, {
        key: "parseClassPrivateProperty",
        value: function (e) {
          if (this.match(14)) {
            e.typeAnnotation = this.flowParseTypeAnnotation();
          }
          return a(s(n.prototype), "parseClassPrivateProperty", this).call(this, e);
        }
      }, {
        key: "isClassMethod",
        value: function () {
          return this.isRelational("<") || a(s(n.prototype), "isClassMethod", this).call(this);
        }
      }, {
        key: "isClassProperty",
        value: function () {
          return this.match(14) || a(s(n.prototype), "isClassProperty", this).call(this);
        }
      }, {
        key: "isNonstaticConstructor",
        value: function (e) {
          return !this.match(14) && a(s(n.prototype), "isNonstaticConstructor", this).call(this, e);
        }
      }, {
        key: "pushClassMethod",
        value: function (e, t, r, i, o, l) {
          if (t.variance) {
            this.unexpected(t.variance.start);
          }
          delete t.variance;
          if (this.isRelational("<")) {
            t.typeParameters = this.flowParseTypeParameterDeclaration();
          }
          a(s(n.prototype), "pushClassMethod", this).call(this, e, t, r, i, o, l);
          if (t.params && o) {
            var u = t.params;
            if (u.length > 0 && this.isThisParam(u[0])) {
              this.raise(t.start, Ge.ThisParamBannedInConstructor);
            }
          } else if ("MethodDefinition" === t.type && o && t.value.params) {
            var c = t.value.params;
            if (c.length > 0 && this.isThisParam(c[0])) {
              this.raise(t.start, Ge.ThisParamBannedInConstructor);
            }
          }
        }
      }, {
        key: "pushClassPrivateMethod",
        value: function (e, t, r, i) {
          if (t.variance) {
            this.unexpected(t.variance.start);
          }
          delete t.variance;
          if (this.isRelational("<")) {
            t.typeParameters = this.flowParseTypeParameterDeclaration();
          }
          a(s(n.prototype), "pushClassPrivateMethod", this).call(this, e, t, r, i);
        }
      }, {
        key: "parseClassSuper",
        value: function (e) {
          a(s(n.prototype), "parseClassSuper", this).call(this, e);
          if (e.superClass && this.isRelational("<")) {
            e.superTypeParameters = this.flowParseTypeParameterInstantiation();
          }
          if (this.isContextual(102)) {
            this.next();
            var t = e.implements = [];
            do {
              var r = this.startNode();
              r.id = this.flowParseRestrictedIdentifier(!0);
              if (this.isRelational("<")) {
                r.typeParameters = this.flowParseTypeParameterInstantiation();
              } else {
                r.typeParameters = null;
              }
              t.push(this.finishNode(r, "ClassImplements"));
            } while (this.eat(12));
          }
        }
      }, {
        key: "checkGetterSetterParams",
        value: function (e) {
          a(s(n.prototype), "checkGetterSetterParams", this).call(this, e);
          var t = this.getObjectOrClassMethodParams(e);
          if (t.length > 0) {
            var r = t[0];
            if (this.isThisParam(r) && "get" === e.kind) {
              this.raise(r.start, Ge.GetterMayNotHaveThisParam);
            } else {
              if (this.isThisParam(r)) {
                this.raise(r.start, Ge.SetterMayNotHaveThisParam);
              }
            }
          }
        }
      }, {
        key: "parsePropertyName",
        value: function (e, t) {
          var r = this.flowParseVariance();
          var i = a(s(n.prototype), "parsePropertyName", this).call(this, e, t);
          e.variance = r;
          return i;
        }
      }, {
        key: "parseObjPropValue",
        value: function (e, t, r, i, o, l, u, c) {
          var p;
          if (e.variance) {
            this.unexpected(e.variance.start);
          }
          delete e.variance;
          if (this.isRelational("<") && !u) {
            p = this.flowParseTypeParameterDeclaration();
            if (!this.match(10)) {
              this.unexpected();
            }
          }
          a(s(n.prototype), "parseObjPropValue", this).call(this, e, t, r, i, o, l, u, c);
          if (p) {
            (e.value || e).typeParameters = p;
          }
        }
      }, {
        key: "parseAssignableListItemTypes",
        value: function (e) {
          if (this.eat(17)) {
            if ("Identifier" !== e.type) {
              this.raise(e.start, Ge.PatternIsOptional);
            }
            if (this.isThisParam(e)) {
              this.raise(e.start, Ge.ThisParamMayNotBeOptional);
            }
            e.optional = !0;
          }
          if (this.match(14)) {
            e.typeAnnotation = this.flowParseTypeAnnotation();
          } else {
            if (this.isThisParam(e)) {
              this.raise(e.start, Ge.ThisParamAnnotationRequired);
            }
          }
          if (this.match(27) && this.isThisParam(e)) {
            this.raise(e.start, Ge.ThisParamNoDefault);
          }
          this.resetEndLocation(e);
          return e;
        }
      }, {
        key: "parseMaybeDefault",
        value: function (e, t, r) {
          var i = a(s(n.prototype), "parseMaybeDefault", this).call(this, e, t, r);
          if ("AssignmentPattern" === i.type && i.typeAnnotation && i.right.start < i.typeAnnotation.start) {
            this.raise(i.typeAnnotation.start, Ge.TypeBeforeInitializer);
          }
          return i;
        }
      }, {
        key: "shouldParseDefaultImport",
        value: function (e) {
          return ze(e) ? $e(this.state.type) : a(s(n.prototype), "shouldParseDefaultImport", this).call(this, e);
        }
      }, {
        key: "parseImportSpecifierLocal",
        value: function (e, t, n, r) {
          t.local = ze(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier();
          this.checkLVal(t.local, r, 9);
          e.specifiers.push(this.finishNode(t, n));
        }
      }, {
        key: "maybeParseDefaultImportSpecifier",
        value: function (e) {
          e.importKind = "value";
          var t = null;
          if (this.match(79)) {
            t = "typeof";
          } else {
            if (this.isContextual(118)) {
              t = "type";
            }
          }
          if (t) {
            var r = this.lookahead();
            var i = r.type;
            if ("type" === t && 47 === i) {
              this.unexpected(r.start);
            }
            if ($e(i) || 5 === i || 47 === i) {
              this.next();
              e.importKind = t;
            }
          }
          return a(s(n.prototype), "maybeParseDefaultImportSpecifier", this).call(this, e);
        }
      }, {
        key: "parseImportSpecifier",
        value: function (e, t, n, r) {
          var i = e.imported;
          var a = null;
          if ("Identifier" === i.type) {
            if ("type" === i.name) {
              a = "type";
            } else {
              if ("typeof" === i.name) {
                a = "typeof";
              }
            }
          }
          var s = !1;
          if (this.isContextual(85) && !this.isLookaheadContextual("as")) {
            var o = this.parseIdentifier(!0);
            if (null === a || X(this.state.type)) {
              e.imported = i;
              e.importKind = null;
              e.local = this.parseIdentifier();
            } else {
              e.imported = o;
              e.importKind = a;
              e.local = He(o);
            }
          } else {
            if (null !== a && X(this.state.type)) {
              e.imported = this.parseIdentifier(!0);
              e.importKind = a;
            } else {
              if (t) {
                throw this.raise(e.start, k.ImportBindingIsString, i.value);
              }
              e.imported = i;
              e.importKind = null;
            }
            if (this.eatContextual(85)) {
              e.local = this.parseIdentifier();
            } else {
              s = !0;
              e.local = He(e.imported);
            }
          }
          var l = ze(e);
          if (n && l) {
            this.raise(e.start, Ge.ImportTypeShorthandOnlyInPureImport);
          }
          if (n || l) {
            this.checkReservedType(e.local.name, e.local.start, !0);
          }
          if (!(!s || n || l)) {
            this.checkReservedWord(e.local.name, e.start, !0, !0);
          }
          this.checkLVal(e.local, "import specifier", 9);
          return this.finishNode(e, "ImportSpecifier");
        }
      }, {
        key: "parseBindingAtom",
        value: function () {
          switch (this.state.type) {
            case 70:
              return this.parseIdentifier(!0);
            default:
              return a(s(n.prototype), "parseBindingAtom", this).call(this);
          }
        }
      }, {
        key: "parseFunctionParams",
        value: function (e, t) {
          var r = e.kind;
          if ("get" !== r && "set" !== r && this.isRelational("<")) {
            e.typeParameters = this.flowParseTypeParameterDeclaration();
          }
          a(s(n.prototype), "parseFunctionParams", this).call(this, e, t);
        }
      }, {
        key: "parseVarId",
        value: function (e, t) {
          a(s(n.prototype), "parseVarId", this).call(this, e, t);
          if (this.match(14)) {
            e.id.typeAnnotation = this.flowParseTypeAnnotation();
            this.resetEndLocation(e.id);
          }
        }
      }, {
        key: "parseAsyncArrowFromCallExpression",
        value: function (e, t) {
          if (this.match(14)) {
            var r = this.state.noAnonFunctionType;
            this.state.noAnonFunctionType = !0;
            e.returnType = this.flowParseTypeAnnotation();
            this.state.noAnonFunctionType = r;
          }
          return a(s(n.prototype), "parseAsyncArrowFromCallExpression", this).call(this, e, t);
        }
      }, {
        key: "shouldParseAsyncArrow",
        value: function () {
          return this.match(14) || a(s(n.prototype), "shouldParseAsyncArrow", this).call(this);
        }
      }, {
        key: "parseMaybeAssign",
        value: function (e, t) {
          var r;
          var i;
          var o = this;
          var l = null;
          if (this.hasPlugin("jsx") && (this.match(130) || this.isRelational("<"))) {
            l = this.state.clone();
            if (!(i = this.tryParse(function () {
              return a(s(n.prototype), "parseMaybeAssign", o).call(o, e, t);
            }, l)).error) {
              return i.node;
            }
            var u = this.state.context;
            var c = u[u.length - 1];
            if (c === _.j_oTag) {
              u.length -= 2;
            } else {
              if (c === _.j_expr) {
                u.length -= 1;
              }
            }
          }
          if (null != (r = i) && r.error || this.isRelational("<")) {
            var p;
            var f;
            var d;
            l = l || this.state.clone();
            var h = this.tryParse(function (r) {
              var i;
              d = o.flowParseTypeParameterDeclaration();
              var l = o.forwardNoArrowParamsConversionAt(d, function () {
                var r = a(s(n.prototype), "parseMaybeAssign", o).call(o, e, t);
                o.resetStartLocationFromNode(r, d);
                return r;
              });
              if (null != (i = l.extra) && i.parenthesized) {
                r();
              }
              var u = o.maybeUnwrapTypeCastExpression(l);
              if ("ArrowFunctionExpression" !== u.type) {
                r();
              }
              u.typeParameters = d;
              o.resetStartLocationFromNode(u, d);
              return l;
            }, l);
            var y = null;
            if (h.node && "ArrowFunctionExpression" === this.maybeUnwrapTypeCastExpression(h.node).type) {
              if (!h.error && !h.aborted) {
                if (h.node.async) {
                  this.raise(d.start, Ge.UnexpectedTypeParameterBeforeAsyncArrowFunction);
                }
                return h.node;
              }
              y = h.node;
            }
            if (null != (p = i) && p.node) {
              this.state = i.failState;
              return i.node;
            }
            if (y) {
              this.state = h.failState;
              return y;
            }
            if (null != (f = i) && f.thrown) {
              throw i.error;
            }
            if (h.thrown) {
              throw h.error;
            }
            throw this.raise(d.start, Ge.UnexpectedTokenAfterTypeParameter);
          }
          return a(s(n.prototype), "parseMaybeAssign", this).call(this, e, t);
        }
      }, {
        key: "parseArrow",
        value: function (e) {
          var t = this;
          if (this.match(14)) {
            var r = this.tryParse(function () {
              var n = t.state.noAnonFunctionType;
              t.state.noAnonFunctionType = !0;
              var r = t.startNode();
              var a = t.flowParseTypeAndPredicateInitialiser();
              var s = i(a, 2);
              r.typeAnnotation = s[0];
              e.predicate = s[1];
              t.state.noAnonFunctionType = n;
              if (t.canInsertSemicolon()) {
                t.unexpected();
              }
              if (!t.match(19)) {
                t.unexpected();
              }
              return r;
            });
            if (r.thrown) {
              return null;
            }
            if (r.error) {
              this.state = r.failState;
            }
            e.returnType = r.node.typeAnnotation ? this.finishNode(r.node, "TypeAnnotation") : null;
          }
          return a(s(n.prototype), "parseArrow", this).call(this, e);
        }
      }, {
        key: "shouldParseArrow",
        value: function (e) {
          return this.match(14) || a(s(n.prototype), "shouldParseArrow", this).call(this, e);
        }
      }, {
        key: "setArrowFunctionParameters",
        value: function (e, t) {
          if (-1 !== this.state.noArrowParamsConversionAt.indexOf(e.start)) {
            e.params = t;
          } else {
            a(s(n.prototype), "setArrowFunctionParameters", this).call(this, e, t);
          }
        }
      }, {
        key: "checkParams",
        value: function (e, t, r) {
          if (!r || -1 === this.state.noArrowParamsConversionAt.indexOf(e.start)) {
            for (var i = 0; i < e.params.length; i++) {
              if (this.isThisParam(e.params[i]) && i > 0) {
                this.raise(e.params[i].start, Ge.ThisParamMustBeFirst);
              }
            }
            return a(s(n.prototype), "checkParams", this).apply(this, arguments);
          }
        }
      }, {
        key: "parseParenAndDistinguishExpression",
        value: function (e) {
          return a(s(n.prototype), "parseParenAndDistinguishExpression", this).call(this, e && -1 === this.state.noArrowAt.indexOf(this.state.start));
        }
      }, {
        key: "parseSubscripts",
        value: function (e, t, r, i) {
          var o = this;
          if ("Identifier" === e.type && "async" === e.name && -1 !== this.state.noArrowAt.indexOf(t)) {
            this.next();
            var l = this.startNodeAt(t, r);
            l.callee = e;
            l.arguments = this.parseCallExpressionArguments(11, !1);
            e = this.finishNode(l, "CallExpression");
          } else if ("Identifier" === e.type && "async" === e.name && this.isRelational("<")) {
            var u = this.state.clone();
            var c = this.tryParse(function (e) {
              return o.parseAsyncArrowWithTypeParameters(t, r) || e();
            }, u);
            if (!c.error && !c.aborted) {
              return c.node;
            }
            var p = this.tryParse(function () {
              return a(s(n.prototype), "parseSubscripts", o).call(o, e, t, r, i);
            }, u);
            if (p.node && !p.error) {
              return p.node;
            }
            if (c.node) {
              this.state = c.failState;
              return c.node;
            }
            if (p.node) {
              this.state = p.failState;
              return p.node;
            }
            throw c.error || p.error;
          }
          return a(s(n.prototype), "parseSubscripts", this).call(this, e, t, r, i);
        }
      }, {
        key: "parseSubscript",
        value: function (e, t, r, i, o) {
          var l = this;
          if (this.match(18) && this.isLookaheadToken_lt()) {
            o.optionalChainMember = !0;
            if (i) {
              o.stop = !0;
              return e;
            }
            this.next();
            var u = this.startNodeAt(t, r);
            u.callee = e;
            u.typeArguments = this.flowParseTypeParameterInstantiation();
            this.expect(10);
            u.arguments = this.parseCallExpressionArguments(11, !1);
            u.optional = !0;
            return this.finishCallExpression(u, !0);
          }
          if (!i && this.shouldParseTypes() && this.isRelational("<")) {
            var c = this.startNodeAt(t, r);
            c.callee = e;
            var p = this.tryParse(function () {
              c.typeArguments = l.flowParseTypeParameterInstantiationCallOrNew();
              l.expect(10);
              c.arguments = l.parseCallExpressionArguments(11, !1);
              if (o.optionalChainMember) {
                c.optional = !1;
              }
              return l.finishCallExpression(c, o.optionalChainMember);
            });
            if (p.node) {
              if (p.error) {
                this.state = p.failState;
              }
              return p.node;
            }
          }
          return a(s(n.prototype), "parseSubscript", this).call(this, e, t, r, i, o);
        }
      }, {
        key: "parseNewArguments",
        value: function (e) {
          var t = this;
          var r = null;
          if (this.shouldParseTypes() && this.isRelational("<")) {
            r = this.tryParse(function () {
              return t.flowParseTypeParameterInstantiationCallOrNew();
            }).node;
          }
          e.typeArguments = r;
          a(s(n.prototype), "parseNewArguments", this).call(this, e);
        }
      }, {
        key: "parseAsyncArrowWithTypeParameters",
        value: function (e, t) {
          var n = this.startNodeAt(e, t);
          this.parseFunctionParams(n);
          if (this.parseArrow(n)) {
            return this.parseArrowExpression(n, void 0, !0);
          }
        }
      }, {
        key: "readToken_mult_modulo",
        value: function (e) {
          var t = this.input.charCodeAt(this.state.pos + 1);
          if (42 === e && 47 === t && this.state.hasFlowComment) {
            this.state.hasFlowComment = !1;
            this.state.pos += 2;
            return void this.nextToken();
          }
          a(s(n.prototype), "readToken_mult_modulo", this).call(this, e);
        }
      }, {
        key: "readToken_pipe_amp",
        value: function (e) {
          var t = this.input.charCodeAt(this.state.pos + 1);
          if (124 !== e || 125 !== t) {
            a(s(n.prototype), "readToken_pipe_amp", this).call(this, e);
          } else {
            this.finishOp(9, 2);
          }
        }
      }, {
        key: "parseTopLevel",
        value: function (e, t) {
          var r = a(s(n.prototype), "parseTopLevel", this).call(this, e, t);
          if (this.state.hasFlowComment) {
            this.raise(this.state.pos, Ge.UnterminatedFlowComment);
          }
          return r;
        }
      }, {
        key: "skipBlockComment",
        value: function () {
          if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
            if (this.state.hasFlowComment) {
              this.unexpected(null, Ge.NestedFlowComment);
            }
            this.hasFlowCommentCompletion();
            this.state.pos += this.skipFlowComment();
            return void (this.state.hasFlowComment = !0);
          }
          if (!this.state.hasFlowComment) {
            return a(s(n.prototype), "skipBlockComment", this).call(this);
          }
          var e = this.input.indexOf("*-/", this.state.pos += 2);
          if (-1 === e) {
            throw this.raise(this.state.pos - 2, k.UnterminatedComment);
          }
          this.state.pos = e + 3;
        }
      }, {
        key: "skipFlowComment",
        value: function () {
          for (var e = this.state.pos, t = 2; [32, 9].includes(this.input.charCodeAt(e + t));) {
            t++;
          }
          var n = this.input.charCodeAt(t + e);
          var r = this.input.charCodeAt(t + e + 1);
          return 58 === n && 58 === r ? t + 2 : "flow-include" === this.input.slice(t + e, t + e + 12) ? t + 12 : 58 === n && 58 !== r && t;
        }
      }, {
        key: "hasFlowCommentCompletion",
        value: function () {
          if (-1 === this.input.indexOf("*/", this.state.pos)) {
            throw this.raise(this.state.pos, k.UnterminatedComment);
          }
        }
      }, {
        key: "flowEnumErrorBooleanMemberNotInitialized",
        value: function (e, t) {
          var n = t.enumName;
          var r = t.memberName;
          this.raise(e, Ge.EnumBooleanMemberNotInitialized, r, n);
        }
      }, {
        key: "flowEnumErrorInvalidMemberName",
        value: function (e, t) {
          var n = t.enumName;
          var r = t.memberName;
          var i = r[0].toUpperCase() + r.slice(1);
          this.raise(e, Ge.EnumInvalidMemberName, r, i, n);
        }
      }, {
        key: "flowEnumErrorDuplicateMemberName",
        value: function (e, t) {
          var n = t.enumName;
          var r = t.memberName;
          this.raise(e, Ge.EnumDuplicateMemberName, r, n);
        }
      }, {
        key: "flowEnumErrorInconsistentMemberValues",
        value: function (e, t) {
          var n = t.enumName;
          this.raise(e, Ge.EnumInconsistentMemberValues, n);
        }
      }, {
        key: "flowEnumErrorInvalidExplicitType",
        value: function (e, t) {
          var n = t.enumName;
          var r = t.suppliedType;
          return this.raise(e, null === r ? Ge.EnumInvalidExplicitTypeUnknownSupplied : Ge.EnumInvalidExplicitType, n, r);
        }
      }, {
        key: "flowEnumErrorInvalidMemberInitializer",
        value: function (e, t) {
          var n = t.enumName;
          var r = t.explicitType;
          var i = t.memberName;
          var a = null;
          switch (r) {
            case "boolean":
            case "number":
            case "string":
              a = Ge.EnumInvalidMemberInitializerPrimaryType;
              break;
            case "symbol":
              a = Ge.EnumInvalidMemberInitializerSymbolType;
              break;
            default:
              a = Ge.EnumInvalidMemberInitializerUnknownType;
          }
          return this.raise(e, a, n, i, r);
        }
      }, {
        key: "flowEnumErrorNumberMemberNotInitialized",
        value: function (e, t) {
          var n = t.enumName;
          var r = t.memberName;
          this.raise(e, Ge.EnumNumberMemberNotInitialized, n, r);
        }
      }, {
        key: "flowEnumErrorStringMemberInconsistentlyInitailized",
        value: function (e, t) {
          var n = t.enumName;
          this.raise(e, Ge.EnumStringMemberInconsistentlyInitailized, n);
        }
      }, {
        key: "flowEnumMemberInit",
        value: function () {
          var e = this;
          var t = this.state.start;
          var n = function () {
            return e.match(12) || e.match(8);
          };
          switch (this.state.type) {
            case 122:
              var r = this.parseNumericLiteral(this.state.value);
              return n() ? {
                type: "number",
                pos: r.start,
                value: r
              } : {
                type: "invalid",
                pos: t
              };
            case 121:
              var i = this.parseStringLiteral(this.state.value);
              return n() ? {
                type: "string",
                pos: i.start,
                value: i
              } : {
                type: "invalid",
                pos: t
              };
            case 77:
            case 78:
              var a = this.parseBooleanLiteral(this.match(77));
              return n() ? {
                type: "boolean",
                pos: a.start,
                value: a
              } : {
                type: "invalid",
                pos: t
              };
            default:
              return {
                type: "invalid",
                pos: t
              };
          }
        }
      }, {
        key: "flowEnumMemberRaw",
        value: function () {
          var e = this.state.start;
          return {
            id: this.parseIdentifier(!0),
            init: this.eat(27) ? this.flowEnumMemberInit() : {
              type: "none",
              pos: e
            }
          };
        }
      }, {
        key: "flowEnumCheckExplicitTypeMismatch",
        value: function (e, t, n) {
          var r = t.explicitType;
          if (null !== r && r !== n) {
            this.flowEnumErrorInvalidMemberInitializer(e, t);
          }
        }
      }, {
        key: "flowEnumMembers",
        value: function (e) {
          for (var t = e.enumName, n = e.explicitType, r = new Set(), i = {
              booleanMembers: [],
              numberMembers: [],
              stringMembers: [],
              defaultedMembers: []
            }, a = !1; !this.match(8);) {
            if (this.eat(21)) {
              a = !0;
              break;
            }
            var s = this.startNode();
            var o = this.flowEnumMemberRaw();
            var l = o.id;
            var u = o.init;
            var c = l.name;
            if ("" !== c) {
              if (/^[a-z]/.test(c)) {
                this.flowEnumErrorInvalidMemberName(l.start, {
                  enumName: t,
                  memberName: c
                });
              }
              if (r.has(c)) {
                this.flowEnumErrorDuplicateMemberName(l.start, {
                  enumName: t,
                  memberName: c
                });
              }
              r.add(c);
              var p = {
                enumName: t,
                explicitType: n,
                memberName: c
              };
              switch (s.id = l, u.type) {
                case "boolean":
                  this.flowEnumCheckExplicitTypeMismatch(u.pos, p, "boolean");
                  s.init = u.value;
                  i.booleanMembers.push(this.finishNode(s, "EnumBooleanMember"));
                  break;
                case "number":
                  this.flowEnumCheckExplicitTypeMismatch(u.pos, p, "number");
                  s.init = u.value;
                  i.numberMembers.push(this.finishNode(s, "EnumNumberMember"));
                  break;
                case "string":
                  this.flowEnumCheckExplicitTypeMismatch(u.pos, p, "string");
                  s.init = u.value;
                  i.stringMembers.push(this.finishNode(s, "EnumStringMember"));
                  break;
                case "invalid":
                  throw this.flowEnumErrorInvalidMemberInitializer(u.pos, p);
                case "none":
                  switch (n) {
                    case "boolean":
                      this.flowEnumErrorBooleanMemberNotInitialized(u.pos, p);
                      break;
                    case "number":
                      this.flowEnumErrorNumberMemberNotInitialized(u.pos, p);
                      break;
                    default:
                      i.defaultedMembers.push(this.finishNode(s, "EnumDefaultedMember"));
                  }
              }
              if (!this.match(8)) {
                this.expect(12);
              }
            }
          }
          return {
            members: i,
            hasUnknownMembers: a
          };
        }
      }, {
        key: "flowEnumStringMembers",
        value: function (e, t, n) {
          var i = n.enumName;
          if (0 === e.length) {
            return t;
          }
          if (0 === t.length) {
            return e;
          }
          if (t.length > e.length) {
            var a;
            var s = r(e);
            try {
              for (s.s(); !(a = s.n()).done;) {
                var o = a.value;
                this.flowEnumErrorStringMemberInconsistentlyInitailized(o.start, {
                  enumName: i
                });
              }
            } catch (p) {
              s.e(p);
            } finally {
              s.f();
            }
            return t;
          }
          var l;
          var u = r(t);
          try {
            for (u.s(); !(l = u.n()).done;) {
              var c = l.value;
              this.flowEnumErrorStringMemberInconsistentlyInitailized(c.start, {
                enumName: i
              });
            }
          } catch (p) {
            u.e(p);
          } finally {
            u.f();
          }
          return e;
        }
      }, {
        key: "flowEnumParseExplicitType",
        value: function (e) {
          var t = e.enumName;
          if (this.eatContextual(93)) {
            if (!J(this.state.type)) {
              throw this.flowEnumErrorInvalidExplicitType(this.state.start, {
                enumName: t,
                suppliedType: null
              });
            }
            var n = this.state.value;
            this.next();
            if ("boolean" !== n && "number" !== n && "string" !== n && "symbol" !== n) {
              this.flowEnumErrorInvalidExplicitType(this.state.start, {
                enumName: t,
                suppliedType: n
              });
            }
            return n;
          }
          return null;
        }
      }, {
        key: "flowEnumBody",
        value: function (e, t) {
          var n = this;
          var i = t.enumName;
          var a = t.nameLoc;
          var s = this.flowEnumParseExplicitType({
            enumName: i
          });
          this.expect(5);
          var o = this.flowEnumMembers({
            enumName: i,
            explicitType: s
          });
          var l = o.members;
          var u = o.hasUnknownMembers;
          switch (e.hasUnknownMembers = u, s) {
            case "boolean":
              e.explicitType = !0;
              e.members = l.booleanMembers;
              this.expect(8);
              return this.finishNode(e, "EnumBooleanBody");
            case "number":
              e.explicitType = !0;
              e.members = l.numberMembers;
              this.expect(8);
              return this.finishNode(e, "EnumNumberBody");
            case "string":
              e.explicitType = !0;
              e.members = this.flowEnumStringMembers(l.stringMembers, l.defaultedMembers, {
                enumName: i
              });
              this.expect(8);
              return this.finishNode(e, "EnumStringBody");
            case "symbol":
              e.members = l.defaultedMembers;
              this.expect(8);
              return this.finishNode(e, "EnumSymbolBody");
            default:
              var c = function () {
                e.members = [];
                n.expect(8);
                return n.finishNode(e, "EnumStringBody");
              };
              e.explicitType = !1;
              var p = l.booleanMembers.length,
                f = l.numberMembers.length,
                d = l.stringMembers.length,
                h = l.defaultedMembers.length;
              if (p || f || d || h) {
                if (p || f) {
                  if (!f && !d && p >= h) {
                    var y;
                    var m = r(l.defaultedMembers);
                    try {
                      for (m.s(); !(y = m.n()).done;) {
                        var v = y.value;
                        this.flowEnumErrorBooleanMemberNotInitialized(v.start, {
                          enumName: i,
                          memberName: v.id.name
                        });
                      }
                    } catch (S) {
                      m.e(S);
                    } finally {
                      m.f();
                    }
                    e.members = l.booleanMembers;
                    this.expect(8);
                    return this.finishNode(e, "EnumBooleanBody");
                  }
                  if (!p && !d && f >= h) {
                    var g;
                    var T = r(l.defaultedMembers);
                    try {
                      for (T.s(); !(g = T.n()).done;) {
                        var b = g.value;
                        this.flowEnumErrorNumberMemberNotInitialized(b.start, {
                          enumName: i,
                          memberName: b.id.name
                        });
                      }
                    } catch (S) {
                      T.e(S);
                    } finally {
                      T.f();
                    }
                    e.members = l.numberMembers;
                    this.expect(8);
                    return this.finishNode(e, "EnumNumberBody");
                  }
                  this.flowEnumErrorInconsistentMemberValues(a, {
                    enumName: i
                  });
                  return c();
                }
                e.members = this.flowEnumStringMembers(l.stringMembers, l.defaultedMembers, {
                  enumName: i
                });
                this.expect(8);
                return this.finishNode(e, "EnumStringBody");
              }
              return c();
          }
        }
      }, {
        key: "flowParseEnumDeclaration",
        value: function (e) {
          var t = this.parseIdentifier();
          e.id = t;
          e.body = this.flowEnumBody(this.startNode(), {
            enumName: t.name,
            nameLoc: t.start
          });
          return this.finishNode(e, "EnumDeclaration");
        }
      }, {
        key: "isLookaheadToken_lt",
        value: function () {
          var e = this.nextTokenStart();
          if (60 === this.input.charCodeAt(e)) {
            var t = this.input.charCodeAt(e + 1);
            return 60 !== t && 61 !== t;
          }
          return !1;
        }
      }, {
        key: "maybeUnwrapTypeCastExpression",
        value: function (e) {
          return "TypeCastExpression" === e.type ? e.expression : e;
        }
      }]);
      return n;
    }(e);
  },
  typescript: function (e) {
    return function (e) {
      o(n, e);
      var t = l(n);
      function n() {
        p(this, n);
        return t.apply(this, arguments);
      }
      c(n, [{
        key: "getScopeHandler",
        value: function () {
          return ot;
        }
      }, {
        key: "tsIsIdentifier",
        value: function () {
          return J(this.state.type);
        }
      }, {
        key: "tsTokenCanFollowModifier",
        value: function () {
          return (this.match(0) || this.match(5) || this.match(47) || this.match(21) || this.match(126) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
        }
      }, {
        key: "tsNextTokenCanFollowModifier",
        value: function () {
          this.next();
          return this.tsTokenCanFollowModifier();
        }
      }, {
        key: "tsParseModifier",
        value: function (e, t) {
          if (J(this.state.type)) {
            var n = this.state.value;
            if (-1 !== e.indexOf(n)) {
              if (t && this.tsIsStartOfStaticBlocks()) {
                return;
              }
              if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
                return n;
              }
            }
          }
        }
      }, {
        key: "tsParseModifiers",
        value: function (e, t, n, r, i) {
          for (var a = this, s = function (t, n, r, i) {
              if (n === r && e[i]) {
                a.raise(t, ut.InvalidModifiersOrder, r, i);
              }
            }, o = function (t, n, r, i) {
              if (e[r] && n === i || e[i] && n === r) {
                a.raise(t, ut.IncompatibleModifiers, r, i);
              }
            };;) {
            var l = this.state.start;
            var u = this.tsParseModifier(t.concat(null != n ? n : []), i);
            if (!u) {
              break;
            }
            if (ct(u)) {
              if (e.accessibility) {
                this.raise(l, ut.DuplicateAccessibilityModifier);
              } else {
                s(l, u, u, "override");
                s(l, u, u, "static");
                s(l, u, u, "readonly");
                e.accessibility = u;
              }
            } else {
              if (Object.hasOwnProperty.call(e, u)) {
                this.raise(l, ut.DuplicateModifier, u);
              } else {
                s(l, u, "static", "readonly");
                s(l, u, "static", "override");
                s(l, u, "override", "readonly");
                s(l, u, "abstract", "override");
                o(l, u, "declare", "override");
                o(l, u, "static", "abstract");
              }
              e[u] = !0;
            }
            if (null != n && n.includes(u)) {
              this.raise(l, r, u);
            }
          }
        }
      }, {
        key: "tsIsListTerminator",
        value: function (e) {
          switch (e) {
            case "EnumMembers":
            case "TypeMembers":
              return this.match(8);
            case "HeritageClauseElement":
              return this.match(5);
            case "TupleElementTypes":
              return this.match(3);
            case "TypeParametersOrArguments":
              return this.isRelational(">");
          }
          throw new Error("Unreachable");
        }
      }, {
        key: "tsParseList",
        value: function (e, t) {
          for (var n = []; !this.tsIsListTerminator(e);) {
            n.push(t());
          }
          return n;
        }
      }, {
        key: "tsParseDelimitedList",
        value: function (e, t, n) {
          return function (e) {
            if (null == e) {
              throw new Error("Unexpected ".concat(e, " value."));
            }
            return e;
          }(this.tsParseDelimitedListWorker(e, t, !0, n));
        }
      }, {
        key: "tsParseDelimitedListWorker",
        value: function (e, t, n, r) {
          for (var i = [], a = -1; !this.tsIsListTerminator(e);) {
            a = -1;
            var s = t();
            if (null == s) {
              return;
            }
            i.push(s);
            if (!this.eat(12)) {
              if (this.tsIsListTerminator(e)) {
                break;
              }
              return void (n && this.expect(12));
            }
            a = this.state.lastTokStart;
          }
          if (r) {
            r.value = a;
          }
          return i;
        }
      }, {
        key: "tsParseBracketedList",
        value: function (e, t, n, r, i) {
          if (!r) {
            if (n) {
              this.expect(0);
            } else {
              this.expectRelational("<");
            }
          }
          var a = this.tsParseDelimitedList(e, t, i);
          if (n) {
            this.expect(3);
          } else {
            this.expectRelational(">");
          }
          return a;
        }
      }, {
        key: "tsParseImportType",
        value: function () {
          var e = this.startNode();
          this.expect(75);
          this.expect(10);
          if (!this.match(121)) {
            this.raise(this.state.start, ut.UnsupportedImportTypeArgument);
          }
          e.argument = this.parseExprAtom();
          this.expect(11);
          if (this.eat(16)) {
            e.qualifier = this.tsParseEntityName(!0);
          }
          if (this.isRelational("<")) {
            e.typeParameters = this.tsParseTypeArguments();
          }
          return this.finishNode(e, "TSImportType");
        }
      }, {
        key: "tsParseEntityName",
        value: function (e) {
          for (var t = this.parseIdentifier(); this.eat(16);) {
            var n = this.startNodeAtNode(t);
            n.left = t;
            n.right = this.parseIdentifier(e);
            t = this.finishNode(n, "TSQualifiedName");
          }
          return t;
        }
      }, {
        key: "tsParseTypeReference",
        value: function () {
          var e = this.startNode();
          e.typeName = this.tsParseEntityName(!1);
          if (!this.hasPrecedingLineBreak() && this.isRelational("<")) {
            e.typeParameters = this.tsParseTypeArguments();
          }
          return this.finishNode(e, "TSTypeReference");
        }
      }, {
        key: "tsParseThisTypePredicate",
        value: function (e) {
          this.next();
          var t = this.startNodeAtNode(e);
          t.parameterName = e;
          t.typeAnnotation = this.tsParseTypeAnnotation(!1);
          t.asserts = !1;
          return this.finishNode(t, "TSTypePredicate");
        }
      }, {
        key: "tsParseThisTypeNode",
        value: function () {
          var e = this.startNode();
          this.next();
          return this.finishNode(e, "TSThisType");
        }
      }, {
        key: "tsParseTypeQuery",
        value: function () {
          var e = this.startNode();
          this.expect(79);
          if (this.match(75)) {
            e.exprName = this.tsParseImportType();
          } else {
            e.exprName = this.tsParseEntityName(!0);
          }
          return this.finishNode(e, "TSTypeQuery");
        }
      }, {
        key: "tsParseTypeParameter",
        value: function () {
          var e = this.startNode();
          e.name = this.tsParseTypeParameterName();
          e.constraint = this.tsEatThenParseType(73);
          e.default = this.tsEatThenParseType(27);
          return this.finishNode(e, "TSTypeParameter");
        }
      }, {
        key: "tsTryParseTypeParameters",
        value: function () {
          if (this.isRelational("<")) {
            return this.tsParseTypeParameters();
          }
        }
      }, {
        key: "tsParseTypeParameters",
        value: function () {
          var e = this.startNode();
          if (this.isRelational("<") || this.match(130)) {
            this.next();
          } else {
            this.unexpected();
          }
          var t = {
            value: -1
          };
          e.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), !1, !0, t);
          if (0 === e.params.length) {
            this.raise(e.start, ut.EmptyTypeParameters);
          }
          if (-1 !== t.value) {
            this.addExtra(e, "trailingComma", t.value);
          }
          return this.finishNode(e, "TSTypeParameterDeclaration");
        }
      }, {
        key: "tsTryNextParseConstantContext",
        value: function () {
          return 67 === this.lookahead().type ? (this.next(), this.tsParseTypeReference()) : null;
        }
      }, {
        key: "tsFillSignature",
        value: function (e, t) {
          var n = 19 === e;
          t.typeParameters = this.tsTryParseTypeParameters();
          this.expect(10);
          t.parameters = this.tsParseBindingListForSignature();
          if (n || this.match(e)) {
            t.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(e);
          }
        }
      }, {
        key: "tsParseBindingListForSignature",
        value: function () {
          var e = this;
          return this.parseBindingList(11, 41).map(function (t) {
            if ("Identifier" !== t.type && "RestElement" !== t.type && "ObjectPattern" !== t.type && "ArrayPattern" !== t.type) {
              e.raise(t.start, ut.UnsupportedSignatureParameterKind, t.type);
            }
            return t;
          });
        }
      }, {
        key: "tsParseTypeMemberSemicolon",
        value: function () {
          if (!(this.eat(12) || this.isLineTerminator())) {
            this.expect(13);
          }
        }
      }, {
        key: "tsParseSignatureMember",
        value: function (e, t) {
          this.tsFillSignature(14, t);
          this.tsParseTypeMemberSemicolon();
          return this.finishNode(t, e);
        }
      }, {
        key: "tsIsUnambiguouslyIndexSignature",
        value: function () {
          this.next();
          return !!J(this.state.type) && (this.next(), this.match(14));
        }
      }, {
        key: "tsTryParseIndexSignature",
        value: function (e) {
          if (this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
            this.expect(0);
            var t = this.parseIdentifier();
            t.typeAnnotation = this.tsParseTypeAnnotation();
            this.resetEndLocation(t);
            this.expect(3);
            e.parameters = [t];
            var n = this.tsTryParseTypeAnnotation();
            if (n) {
              e.typeAnnotation = n;
            }
            this.tsParseTypeMemberSemicolon();
            return this.finishNode(e, "TSIndexSignature");
          }
        }
      }, {
        key: "tsParsePropertyOrMethodSignature",
        value: function (e, t) {
          if (this.eat(17)) {
            e.optional = !0;
          }
          var n = e;
          if (this.match(10) || this.isRelational("<")) {
            if (t) {
              this.raise(e.start, ut.ReadonlyForMethodSignature);
            }
            var r = n;
            if (r.kind && this.isRelational("<")) {
              this.raise(this.state.pos, ut.AccesorCannotHaveTypeParameters);
            }
            this.tsFillSignature(14, r);
            this.tsParseTypeMemberSemicolon();
            if ("get" === r.kind) {
              if (r.parameters.length > 0) {
                this.raise(this.state.pos, k.BadGetterArity);
                if (this.isThisParam(r.parameters[0])) {
                  this.raise(this.state.pos, ut.AccesorCannotDeclareThisParameter);
                }
              }
            } else if ("set" === r.kind) {
              if (1 !== r.parameters.length) {
                this.raise(this.state.pos, k.BadSetterArity);
              } else {
                var i = r.parameters[0];
                if (this.isThisParam(i)) {
                  this.raise(this.state.pos, ut.AccesorCannotDeclareThisParameter);
                }
                if ("Identifier" === i.type && i.optional) {
                  this.raise(this.state.pos, ut.SetAccesorCannotHaveOptionalParameter);
                }
                if ("RestElement" === i.type) {
                  this.raise(this.state.pos, ut.SetAccesorCannotHaveRestParameter);
                }
              }
              if (r.typeAnnotation) {
                this.raise(r.typeAnnotation.start, ut.SetAccesorCannotHaveReturnType);
              }
            } else {
              r.kind = "method";
            }
            return this.finishNode(r, "TSMethodSignature");
          }
          var a = n;
          if (t) {
            a.readonly = !0;
          }
          var s = this.tsTryParseTypeAnnotation();
          if (s) {
            a.typeAnnotation = s;
          }
          this.tsParseTypeMemberSemicolon();
          return this.finishNode(a, "TSPropertySignature");
        }
      }, {
        key: "tsParseTypeMember",
        value: function () {
          var e = this.startNode();
          if (this.match(10) || this.isRelational("<")) {
            return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
          }
          if (this.match(69)) {
            var t = this.startNode();
            this.next();
            return this.match(10) || this.isRelational("<") ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(t, "new"), this.tsParsePropertyOrMethodSignature(e, !1));
          }
          this.tsParseModifiers(e, ["readonly"], ["declare", "abstract", "private", "protected", "public", "static", "override"], ut.InvalidModifierOnTypeMember);
          var n = this.tsTryParseIndexSignature(e);
          return n || (this.parsePropertyName(e, !1), e.computed || "Identifier" !== e.key.type || "get" !== e.key.name && "set" !== e.key.name || !this.tsTokenCanFollowModifier() || (e.kind = e.key.name, this.parsePropertyName(e, !1)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly));
        }
      }, {
        key: "tsParseTypeLiteral",
        value: function () {
          var e = this.startNode();
          e.members = this.tsParseObjectTypeMembers();
          return this.finishNode(e, "TSTypeLiteral");
        }
      }, {
        key: "tsParseObjectTypeMembers",
        value: function () {
          this.expect(5);
          var e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
          this.expect(8);
          return e;
        }
      }, {
        key: "tsIsStartOfMappedType",
        value: function () {
          this.next();
          return this.eat(45) ? this.isContextual(110) : (this.isContextual(110) && this.next(), !!this.match(0) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(50))));
        }
      }, {
        key: "tsParseMappedTypeParameter",
        value: function () {
          var e = this.startNode();
          e.name = this.tsParseTypeParameterName();
          e.constraint = this.tsExpectThenParseType(50);
          return this.finishNode(e, "TSTypeParameter");
        }
      }, {
        key: "tsParseMappedType",
        value: function () {
          var e = this.startNode();
          this.expect(5);
          if (this.match(45)) {
            e.readonly = this.state.value;
            this.next();
            this.expectContextual(110);
          } else {
            if (this.eatContextual(110)) {
              e.readonly = !0;
            }
          }
          this.expect(0);
          e.typeParameter = this.tsParseMappedTypeParameter();
          e.nameType = this.eatContextual(85) ? this.tsParseType() : null;
          this.expect(3);
          if (this.match(45)) {
            e.optional = this.state.value;
            this.next();
            this.expect(17);
          } else {
            if (this.eat(17)) {
              e.optional = !0;
            }
          }
          e.typeAnnotation = this.tsTryParseType();
          this.semicolon();
          this.expect(8);
          return this.finishNode(e, "TSMappedType");
        }
      }, {
        key: "tsParseTupleType",
        value: function () {
          var e = this;
          var t = this.startNode();
          t.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
          var n = !1;
          var r = null;
          t.elementTypes.forEach(function (t) {
            var i;
            var a = t.type;
            if (!(!n || "TSRestType" === a || "TSOptionalType" === a || "TSNamedTupleMember" === a && t.optional)) {
              e.raise(t.start, ut.OptionalTypeBeforeRequired);
            }
            n = n || "TSNamedTupleMember" === a && t.optional || "TSOptionalType" === a;
            if ("TSRestType" === a) {
              a = (t = t.typeAnnotation).type;
            }
            var s = "TSNamedTupleMember" === a;
            if ((r = null != (i = r) ? i : s) !== s) {
              e.raise(t.start, ut.MixedLabeledAndUnlabeledElements);
            }
          });
          return this.finishNode(t, "TSTupleType");
        }
      }, {
        key: "tsParseTupleElementType",
        value: function () {
          var e = this.state;
          var t = e.start;
          var n = e.startLoc;
          var r = this.eat(21);
          var i = this.tsParseType();
          var a = this.eat(17);
          if (this.eat(14)) {
            var s = this.startNodeAtNode(i);
            s.optional = a;
            if ("TSTypeReference" !== i.type || i.typeParameters || "Identifier" !== i.typeName.type) {
              this.raise(i.start, ut.InvalidTupleMemberLabel);
              s.label = i;
            } else {
              s.label = i.typeName;
            }
            s.elementType = this.tsParseType();
            i = this.finishNode(s, "TSNamedTupleMember");
          } else if (a) {
            var o = this.startNodeAtNode(i);
            o.typeAnnotation = i;
            i = this.finishNode(o, "TSOptionalType");
          }
          if (r) {
            var l = this.startNodeAt(t, n);
            l.typeAnnotation = i;
            i = this.finishNode(l, "TSRestType");
          }
          return i;
        }
      }, {
        key: "tsParseParenthesizedType",
        value: function () {
          var e = this.startNode();
          this.expect(10);
          e.typeAnnotation = this.tsParseType();
          this.expect(11);
          return this.finishNode(e, "TSParenthesizedType");
        }
      }, {
        key: "tsParseFunctionOrConstructorType",
        value: function (e, t) {
          var n = this.startNode();
          if ("TSConstructorType" === e) {
            n.abstract = !!t;
            if (t) {
              this.next();
            }
            this.next();
          }
          this.tsFillSignature(19, n);
          return this.finishNode(n, e);
        }
      }, {
        key: "tsParseLiteralTypeNode",
        value: function () {
          var e = this;
          var t = this.startNode();
          t.literal = function () {
            switch (e.state.type) {
              case 122:
              case 123:
              case 121:
              case 77:
              case 78:
                return e.parseExprAtom();
              default:
                throw e.unexpected();
            }
          }();
          return this.finishNode(t, "TSLiteralType");
        }
      }, {
        key: "tsParseTemplateLiteralType",
        value: function () {
          var e = this.startNode();
          e.literal = this.parseTemplate(!1);
          return this.finishNode(e, "TSLiteralType");
        }
      }, {
        key: "parseTemplateSubstitution",
        value: function () {
          return this.state.inType ? this.tsParseType() : a(s(n.prototype), "parseTemplateSubstitution", this).call(this);
        }
      }, {
        key: "tsParseThisTypeOrThisTypePredicate",
        value: function () {
          var e = this.tsParseThisTypeNode();
          return this.isContextual(105) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e;
        }
      }, {
        key: "tsParseNonArrayType",
        value: function () {
          switch (this.state.type) {
            case 121:
            case 122:
            case 123:
            case 77:
            case 78:
              return this.tsParseLiteralTypeNode();
            case 45:
              if ("-" === this.state.value) {
                var e = this.startNode();
                var t = this.lookahead();
                if (122 !== t.type && 123 !== t.type) {
                  throw this.unexpected();
                }
                e.literal = this.parseMaybeUnary();
                return this.finishNode(e, "TSLiteralType");
              }
              break;
            case 70:
              return this.tsParseThisTypeOrThisTypePredicate();
            case 79:
              return this.tsParseTypeQuery();
            case 75:
              return this.tsParseImportType();
            case 5:
              return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
            case 0:
              return this.tsParseTupleType();
            case 10:
              return this.tsParseParenthesizedType();
            case 22:
              return this.tsParseTemplateLiteralType();
            default:
              var n = this.state.type;
              if (J(n) || 80 === n || 76 === n) {
                var r = 80 === n ? "TSVoidKeyword" : 76 === n ? "TSNullKeyword" : function (e) {
                  switch (e) {
                    case "any":
                      return "TSAnyKeyword";
                    case "boolean":
                      return "TSBooleanKeyword";
                    case "bigint":
                      return "TSBigIntKeyword";
                    case "never":
                      return "TSNeverKeyword";
                    case "number":
                      return "TSNumberKeyword";
                    case "object":
                      return "TSObjectKeyword";
                    case "string":
                      return "TSStringKeyword";
                    case "symbol":
                      return "TSSymbolKeyword";
                    case "undefined":
                      return "TSUndefinedKeyword";
                    case "unknown":
                      return "TSUnknownKeyword";
                    default:
                      return;
                  }
                }(this.state.value);
                if (void 0 !== r && 46 !== this.lookaheadCharCode()) {
                  var i = this.startNode();
                  this.next();
                  return this.finishNode(i, r);
                }
                return this.tsParseTypeReference();
              }
          }
          throw this.unexpected();
        }
      }, {
        key: "tsParseArrayTypeOrHigher",
        value: function () {
          for (var e = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(0);) {
            if (this.match(3)) {
              var t = this.startNodeAtNode(e);
              t.elementType = e;
              this.expect(3);
              e = this.finishNode(t, "TSArrayType");
            } else {
              var n = this.startNodeAtNode(e);
              n.objectType = e;
              n.indexType = this.tsParseType();
              this.expect(3);
              e = this.finishNode(n, "TSIndexedAccessType");
            }
          }
          return e;
        }
      }, {
        key: "tsParseTypeOperator",
        value: function () {
          var e = this.startNode();
          var t = this.state.value;
          this.next();
          e.operator = t;
          e.typeAnnotation = this.tsParseTypeOperatorOrHigher();
          if ("readonly" === t) {
            this.tsCheckTypeAnnotationForReadOnly(e);
          }
          return this.finishNode(e, "TSTypeOperator");
        }
      }, {
        key: "tsCheckTypeAnnotationForReadOnly",
        value: function (e) {
          switch (e.typeAnnotation.type) {
            case "TSTupleType":
            case "TSArrayType":
              return;
            default:
              this.raise(e.start, ut.UnexpectedReadonly);
          }
        }
      }, {
        key: "tsParseInferType",
        value: function () {
          var e = this.startNode();
          this.expectContextual(104);
          var t = this.startNode();
          t.name = this.tsParseTypeParameterName();
          e.typeParameter = this.finishNode(t, "TSTypeParameter");
          return this.finishNode(e, "TSInferType");
        }
      }, {
        key: "tsParseTypeOperatorOrHigher",
        value: function () {
          var e;
          return (e = this.state.type) >= 109 && e <= 111 && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(104) ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher();
        }
      }, {
        key: "tsParseUnionOrIntersectionType",
        value: function (e, t, n) {
          var r = this.startNode();
          var i = this.eat(n);
          var a = [];
          do {
            a.push(t());
          } while (this.eat(n));
          return 1 !== a.length || i ? (r.types = a, this.finishNode(r, e)) : a[0];
        }
      }, {
        key: "tsParseIntersectionTypeOrHigher",
        value: function () {
          return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 41);
        }
      }, {
        key: "tsParseUnionTypeOrHigher",
        value: function () {
          return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 39);
        }
      }, {
        key: "tsIsStartOfFunctionType",
        value: function () {
          return !!this.isRelational("<") || this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
        }
      }, {
        key: "tsSkipParameterStart",
        value: function () {
          if (J(this.state.type) || this.match(70)) {
            this.next();
            return !0;
          }
          if (this.match(5)) {
            var e = 1;
            for (this.next(); e > 0;) {
              if (this.match(5)) {
                ++e;
              } else {
                if (this.match(8)) {
                  --e;
                }
              }
              this.next();
            }
            return !0;
          }
          if (this.match(0)) {
            var t = 1;
            for (this.next(); t > 0;) {
              if (this.match(0)) {
                ++t;
              } else {
                if (this.match(3)) {
                  --t;
                }
              }
              this.next();
            }
            return !0;
          }
          return !1;
        }
      }, {
        key: "tsIsUnambiguouslyStartOfFunctionType",
        value: function () {
          this.next();
          if (this.match(11) || this.match(21)) {
            return !0;
          }
          if (this.tsSkipParameterStart()) {
            if (this.match(14) || this.match(12) || this.match(17) || this.match(27)) {
              return !0;
            }
            if (this.match(11) && (this.next(), this.match(19))) {
              return !0;
            }
          }
          return !1;
        }
      }, {
        key: "tsParseTypeOrTypePredicateAnnotation",
        value: function (e) {
          var t = this;
          return this.tsInType(function () {
            var n = t.startNode();
            t.expect(e);
            var r = t.startNode();
            var i = !!t.tsTryParse(t.tsParseTypePredicateAsserts.bind(t));
            if (i && t.match(70)) {
              var a = t.tsParseThisTypeOrThisTypePredicate();
              if ("TSThisType" === a.type) {
                r.parameterName = a;
                r.asserts = !0;
                r.typeAnnotation = null;
                a = t.finishNode(r, "TSTypePredicate");
              } else {
                t.resetStartLocationFromNode(a, r);
                a.asserts = !0;
              }
              n.typeAnnotation = a;
              return t.finishNode(n, "TSTypeAnnotation");
            }
            var s = t.tsIsIdentifier() && t.tsTryParse(t.tsParseTypePredicatePrefix.bind(t));
            if (!s) {
              return i ? (r.parameterName = t.parseIdentifier(), r.asserts = i, r.typeAnnotation = null, n.typeAnnotation = t.finishNode(r, "TSTypePredicate"), t.finishNode(n, "TSTypeAnnotation")) : t.tsParseTypeAnnotation(!1, n);
            }
            var o = t.tsParseTypeAnnotation(!1);
            r.parameterName = s;
            r.typeAnnotation = o;
            r.asserts = i;
            n.typeAnnotation = t.finishNode(r, "TSTypePredicate");
            return t.finishNode(n, "TSTypeAnnotation");
          });
        }
      }, {
        key: "tsTryParseTypeOrTypePredicateAnnotation",
        value: function () {
          return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0;
        }
      }, {
        key: "tsTryParseTypeAnnotation",
        value: function () {
          return this.match(14) ? this.tsParseTypeAnnotation() : void 0;
        }
      }, {
        key: "tsTryParseType",
        value: function () {
          return this.tsEatThenParseType(14);
        }
      }, {
        key: "tsParseTypePredicatePrefix",
        value: function () {
          var e = this.parseIdentifier();
          if (this.isContextual(105) && !this.hasPrecedingLineBreak()) {
            this.next();
            return e;
          }
        }
      }, {
        key: "tsParseTypePredicateAsserts",
        value: function () {
          if (98 !== this.state.type) {
            return !1;
          }
          var e = this.state.containsEsc;
          this.next();
          return !(!J(this.state.type) && !this.match(70)) && (e && this.raise(this.state.lastTokStart, k.InvalidEscapedReservedWord, "asserts"), !0);
        }
      }, {
        key: "tsParseTypeAnnotation",
        value: function () {
          var e = this;
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.startNode();
          this.tsInType(function () {
            if (t) {
              e.expect(14);
            }
            n.typeAnnotation = e.tsParseType();
          });
          return this.finishNode(n, "TSTypeAnnotation");
        }
      }, {
        key: "tsParseType",
        value: function () {
          lt(this.state.inType);
          var e = this.tsParseNonConditionalType();
          if (this.hasPrecedingLineBreak() || !this.eat(73)) {
            return e;
          }
          var t = this.startNodeAtNode(e);
          t.checkType = e;
          t.extendsType = this.tsParseNonConditionalType();
          this.expect(17);
          t.trueType = this.tsParseType();
          this.expect(14);
          t.falseType = this.tsParseType();
          return this.finishNode(t, "TSConditionalType");
        }
      }, {
        key: "isAbstractConstructorSignature",
        value: function () {
          return this.isContextual(112) && 69 === this.lookahead().type;
        }
      }, {
        key: "tsParseNonConditionalType",
        value: function () {
          return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(69) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
        }
      }, {
        key: "tsParseTypeAssertion",
        value: function () {
          if (this.getPluginOption("typescript", "disallowAmbiguousJSXLike")) {
            this.raise(this.state.start, ut.ReservedTypeAssertion);
          }
          var e = this.startNode();
          var t = this.tsTryNextParseConstantContext();
          e.typeAnnotation = t || this.tsNextThenParseType();
          this.expectRelational(">");
          e.expression = this.parseMaybeUnary();
          return this.finishNode(e, "TSTypeAssertion");
        }
      }, {
        key: "tsParseHeritageClause",
        value: function (e) {
          var t = this.state.start;
          var n = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));
          if (!n.length) {
            this.raise(t, ut.EmptyHeritageClauseType, e);
          }
          return n;
        }
      }, {
        key: "tsParseExpressionWithTypeArguments",
        value: function () {
          var e = this.startNode();
          e.expression = this.tsParseEntityName(!1);
          if (this.isRelational("<")) {
            e.typeParameters = this.tsParseTypeArguments();
          }
          return this.finishNode(e, "TSExpressionWithTypeArguments");
        }
      }, {
        key: "tsParseInterfaceDeclaration",
        value: function (e) {
          if (J(this.state.type)) {
            e.id = this.parseIdentifier();
            this.checkLVal(e.id, "typescript interface declaration", 130);
          } else {
            e.id = null;
            this.raise(this.state.start, ut.MissingInterfaceName);
          }
          e.typeParameters = this.tsTryParseTypeParameters();
          if (this.eat(73)) {
            e.extends = this.tsParseHeritageClause("extends");
          }
          var t = this.startNode();
          t.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this));
          e.body = this.finishNode(t, "TSInterfaceBody");
          return this.finishNode(e, "TSInterfaceDeclaration");
        }
      }, {
        key: "tsParseTypeAliasDeclaration",
        value: function (e) {
          var t = this;
          e.id = this.parseIdentifier();
          this.checkLVal(e.id, "typescript type alias", 2);
          e.typeParameters = this.tsTryParseTypeParameters();
          e.typeAnnotation = this.tsInType(function () {
            t.expect(27);
            if (t.isContextual(103) && 16 !== t.lookahead().type) {
              var e = t.startNode();
              t.next();
              return t.finishNode(e, "TSIntrinsicKeyword");
            }
            return t.tsParseType();
          });
          this.semicolon();
          return this.finishNode(e, "TSTypeAliasDeclaration");
        }
      }, {
        key: "tsInNoContext",
        value: function (e) {
          var t = this.state.context;
          this.state.context = [t[0]];
          try {
            return e();
          } finally {
            this.state.context = t;
          }
        }
      }, {
        key: "tsInType",
        value: function (e) {
          var t = this.state.inType;
          this.state.inType = !0;
          try {
            return e();
          } finally {
            this.state.inType = t;
          }
        }
      }, {
        key: "tsEatThenParseType",
        value: function (e) {
          return this.match(e) ? this.tsNextThenParseType() : void 0;
        }
      }, {
        key: "tsExpectThenParseType",
        value: function (e) {
          var t = this;
          return this.tsDoThenParseType(function () {
            return t.expect(e);
          });
        }
      }, {
        key: "tsNextThenParseType",
        value: function () {
          var e = this;
          return this.tsDoThenParseType(function () {
            return e.next();
          });
        }
      }, {
        key: "tsDoThenParseType",
        value: function (e) {
          var t = this;
          return this.tsInType(function () {
            e();
            return t.tsParseType();
          });
        }
      }, {
        key: "tsParseEnumMember",
        value: function () {
          var e = this.startNode();
          e.id = this.match(121) ? this.parseExprAtom() : this.parseIdentifier(!0);
          if (this.eat(27)) {
            e.initializer = this.parseMaybeAssignAllowIn();
          }
          return this.finishNode(e, "TSEnumMember");
        }
      }, {
        key: "tsParseEnumDeclaration",
        value: function (e, t) {
          if (t) {
            e.const = !0;
          }
          e.id = this.parseIdentifier();
          this.checkLVal(e.id, "typescript enum declaration", t ? 779 : 267);
          this.expect(5);
          e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
          this.expect(8);
          return this.finishNode(e, "TSEnumDeclaration");
        }
      }, {
        key: "tsParseModuleBlock",
        value: function () {
          var e = this.startNode();
          this.scope.enter(0);
          this.expect(5);
          this.parseBlockOrModuleBlockBody(e.body = [], void 0, !0, 8);
          this.scope.exit();
          return this.finishNode(e, "TSModuleBlock");
        }
      }, {
        key: "tsParseModuleOrNamespaceDeclaration",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          e.id = this.parseIdentifier();
          if (!t) {
            this.checkLVal(e.id, "module or namespace declaration", 1024);
          }
          if (this.eat(16)) {
            var n = this.startNode();
            this.tsParseModuleOrNamespaceDeclaration(n, !0);
            e.body = n;
          } else {
            this.scope.enter(256);
            this.prodParam.enter(0);
            e.body = this.tsParseModuleBlock();
            this.prodParam.exit();
            this.scope.exit();
          }
          return this.finishNode(e, "TSModuleDeclaration");
        }
      }, {
        key: "tsParseAmbientExternalModuleDeclaration",
        value: function (e) {
          if (this.isContextual(101)) {
            e.global = !0;
            e.id = this.parseIdentifier();
          } else {
            if (this.match(121)) {
              e.id = this.parseExprAtom();
            } else {
              this.unexpected();
            }
          }
          if (this.match(5)) {
            this.scope.enter(256);
            this.prodParam.enter(0);
            e.body = this.tsParseModuleBlock();
            this.prodParam.exit();
            this.scope.exit();
          } else {
            this.semicolon();
          }
          return this.finishNode(e, "TSModuleDeclaration");
        }
      }, {
        key: "tsParseImportEqualsDeclaration",
        value: function (e, t) {
          e.isExport = t || !1;
          e.id = this.parseIdentifier();
          this.checkLVal(e.id, "import equals declaration", 9);
          this.expect(27);
          var n = this.tsParseModuleReference();
          if ("type" === e.importKind && "TSExternalModuleReference" !== n.type) {
            this.raise(n.start, ut.ImportAliasHasImportType);
          }
          e.moduleReference = n;
          this.semicolon();
          return this.finishNode(e, "TSImportEqualsDeclaration");
        }
      }, {
        key: "tsIsExternalModuleReference",
        value: function () {
          return this.isContextual(108) && 40 === this.lookaheadCharCode();
        }
      }, {
        key: "tsParseModuleReference",
        value: function () {
          return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
        }
      }, {
        key: "tsParseExternalModuleReference",
        value: function () {
          var e = this.startNode();
          this.expectContextual(108);
          this.expect(10);
          if (!this.match(121)) {
            throw this.unexpected();
          }
          e.expression = this.parseExprAtom();
          this.expect(11);
          return this.finishNode(e, "TSExternalModuleReference");
        }
      }, {
        key: "tsLookAhead",
        value: function (e) {
          var t = this.state.clone();
          var n = e();
          this.state = t;
          return n;
        }
      }, {
        key: "tsTryParseAndCatch",
        value: function (e) {
          var t = this.tryParse(function (t) {
            return e() || t();
          });
          if (!t.aborted && t.node) {
            if (t.error) {
              this.state = t.failState;
            }
            return t.node;
          }
        }
      }, {
        key: "tsTryParse",
        value: function (e) {
          var t = this.state.clone();
          var n = e();
          return void 0 !== n && !1 !== n ? n : void (this.state = t);
        }
      }, {
        key: "tsTryParseDeclare",
        value: function (e) {
          var t = this;
          if (!this.isLineTerminator()) {
            var n;
            var r = this.state.type;
            if (this.isContextual(91)) {
              r = 66;
              n = "let";
            }
            return this.tsInAmbientContext(function () {
              switch (r) {
                case 60:
                  e.declare = !0;
                  return t.parseFunctionStatement(e, !1, !0);
                case 72:
                  e.declare = !0;
                  return t.parseClass(e, !0, !1);
                case 67:
                  if (t.match(67) && t.isLookaheadContextual("enum")) {
                    t.expect(67);
                    t.expectContextual(114);
                    return t.tsParseEnumDeclaration(e, !0);
                  }
                case 66:
                  n = n || t.state.value;
                  return t.parseVarStatement(e, n);
                case 101:
                  return t.tsParseAmbientExternalModuleDeclaration(e);
                default:
                  if (J(r)) {
                    return t.tsParseDeclaration(e, t.state.value, !0);
                  }
              }
            });
          }
        }
      }, {
        key: "tsTryParseExportDeclaration",
        value: function () {
          return this.tsParseDeclaration(this.startNode(), this.state.value, !0);
        }
      }, {
        key: "tsParseExpressionStatement",
        value: function (e, t) {
          switch (t.name) {
            case "declare":
              var n = this.tsTryParseDeclare(e);
              if (n) {
                n.declare = !0;
                return n;
              }
              break;
            case "global":
              if (this.match(5)) {
                this.scope.enter(256);
                this.prodParam.enter(0);
                var r = e;
                r.global = !0;
                r.id = t;
                r.body = this.tsParseModuleBlock();
                this.scope.exit();
                this.prodParam.exit();
                return this.finishNode(r, "TSModuleDeclaration");
              }
              break;
            default:
              return this.tsParseDeclaration(e, t.name, !1);
          }
        }
      }, {
        key: "tsParseDeclaration",
        value: function (e, t, n) {
          switch (t) {
            case "abstract":
              if (this.tsCheckLineTerminator(n) && (this.match(72) || J(this.state.type))) {
                return this.tsParseAbstractDeclaration(e);
              }
              break;
            case "enum":
              if (n || J(this.state.type)) {
                if (n) {
                  this.next();
                }
                return this.tsParseEnumDeclaration(e, !1);
              }
              break;
            case "interface":
              if (this.tsCheckLineTerminator(n) && J(this.state.type)) {
                return this.tsParseInterfaceDeclaration(e);
              }
              break;
            case "module":
              if (this.tsCheckLineTerminator(n)) {
                if (this.match(121)) {
                  return this.tsParseAmbientExternalModuleDeclaration(e);
                }
                if (J(this.state.type)) {
                  return this.tsParseModuleOrNamespaceDeclaration(e);
                }
              }
              break;
            case "namespace":
              if (this.tsCheckLineTerminator(n) && J(this.state.type)) {
                return this.tsParseModuleOrNamespaceDeclaration(e);
              }
              break;
            case "type":
              if (this.tsCheckLineTerminator(n) && J(this.state.type)) {
                return this.tsParseTypeAliasDeclaration(e);
              }
          }
        }
      }, {
        key: "tsCheckLineTerminator",
        value: function (e) {
          return e ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
        }
      }, {
        key: "tsTryParseGenericAsyncArrowFunction",
        value: function (e, t) {
          var r = this;
          if (this.isRelational("<")) {
            var i = this.state.maybeInArrowParameters;
            this.state.maybeInArrowParameters = !0;
            var o = this.tsTryParseAndCatch(function () {
              var i = r.startNodeAt(e, t);
              i.typeParameters = r.tsParseTypeParameters();
              a(s(n.prototype), "parseFunctionParams", r).call(r, i);
              i.returnType = r.tsTryParseTypeOrTypePredicateAnnotation();
              r.expect(19);
              return i;
            });
            this.state.maybeInArrowParameters = i;
            if (o) {
              return this.parseArrowExpression(o, null, !0);
            }
          }
        }
      }, {
        key: "tsParseTypeArguments",
        value: function () {
          var e = this;
          var t = this.startNode();
          t.params = this.tsInType(function () {
            return e.tsInNoContext(function () {
              e.expectRelational("<");
              return e.tsParseDelimitedList("TypeParametersOrArguments", e.tsParseType.bind(e));
            });
          });
          if (0 === t.params.length) {
            this.raise(t.start, ut.EmptyTypeArguments);
          }
          this.expectRelational(">");
          return this.finishNode(t, "TSTypeParameterInstantiation");
        }
      }, {
        key: "tsIsDeclarationStart",
        value: function () {
          return (e = this.state.type) >= 112 && e <= 118;
          var e;
        }
      }, {
        key: "isExportDefaultSpecifier",
        value: function () {
          return !this.tsIsDeclarationStart() && a(s(n.prototype), "isExportDefaultSpecifier", this).call(this);
        }
      }, {
        key: "parseAssignableListItem",
        value: function (e, t) {
          var n;
          var r = this.state.start;
          var i = this.state.startLoc;
          var a = !1;
          var s = !1;
          if (void 0 !== e) {
            var o = {};
            this.tsParseModifiers(o, ["public", "private", "protected", "override", "readonly"]);
            n = o.accessibility;
            s = o.override;
            a = o.readonly;
            if (!1 === e && (n || a || s)) {
              this.raise(r, ut.UnexpectedParameterModifier);
            }
          }
          var l = this.parseMaybeDefault();
          this.parseAssignableListItemTypes(l);
          var u = this.parseMaybeDefault(l.start, l.loc.start, l);
          if (n || a || s) {
            var c = this.startNodeAt(r, i);
            if (t.length) {
              c.decorators = t;
            }
            if (n) {
              c.accessibility = n;
            }
            if (a) {
              c.readonly = a;
            }
            if (s) {
              c.override = s;
            }
            if ("Identifier" !== u.type && "AssignmentPattern" !== u.type) {
              this.raise(c.start, ut.UnsupportedParameterPropertyKind);
            }
            c.parameter = u;
            return this.finishNode(c, "TSParameterProperty");
          }
          if (t.length) {
            l.decorators = t;
          }
          return u;
        }
      }, {
        key: "parseFunctionBodyAndFinish",
        value: function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (this.match(14)) {
            e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14);
          }
          var i = "FunctionDeclaration" === t ? "TSDeclareFunction" : "ClassMethod" === t || "ClassPrivateMethod" === t ? "TSDeclareMethod" : void 0;
          if (i && !this.match(5) && this.isLineTerminator()) {
            this.finishNode(e, i);
          } else {
            if ("TSDeclareFunction" === i && this.state.isAmbientContext && (this.raise(e.start, ut.DeclareFunctionHasImplementation), e.declare)) {
              a(s(n.prototype), "parseFunctionBodyAndFinish", this).call(this, e, i, r);
            } else {
              a(s(n.prototype), "parseFunctionBodyAndFinish", this).call(this, e, t, r);
            }
          }
        }
      }, {
        key: "registerFunctionStatementId",
        value: function (e) {
          if (!e.body && e.id) {
            this.checkLVal(e.id, "function name", 1024);
          } else {
            a(s(n.prototype), "registerFunctionStatementId", this).apply(this, arguments);
          }
        }
      }, {
        key: "tsCheckForInvalidTypeCasts",
        value: function (e) {
          var t = this;
          e.forEach(function (e) {
            if ("TSTypeCastExpression" === (null == e ? void 0 : e.type)) {
              t.raise(e.typeAnnotation.start, ut.UnexpectedTypeAnnotation);
            }
          });
        }
      }, {
        key: "toReferencedList",
        value: function (e, t) {
          this.tsCheckForInvalidTypeCasts(e);
          return e;
        }
      }, {
        key: "parseArrayLike",
        value: function () {
          for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++) {
            r[i] = arguments[i];
          }
          var o = (e = a(s(n.prototype), "parseArrayLike", this)).call.apply(e, [this].concat(r));
          if ("ArrayExpression" === o.type) {
            this.tsCheckForInvalidTypeCasts(o.elements);
          }
          return o;
        }
      }, {
        key: "parseSubscript",
        value: function (e, t, r, i, o) {
          var l = this;
          if (!this.hasPrecedingLineBreak() && this.match(33)) {
            this.state.exprAllowed = !1;
            this.next();
            var u = this.startNodeAt(t, r);
            u.expression = e;
            return this.finishNode(u, "TSNonNullExpression");
          }
          var c = !1;
          if (this.match(18) && 60 === this.lookaheadCharCode()) {
            if (i) {
              o.stop = !0;
              return e;
            }
            o.optionalChainMember = c = !0;
            this.next();
          }
          if (this.isRelational("<")) {
            var p;
            var f = this.tsTryParseAndCatch(function () {
              if (!i && l.atPossibleAsyncArrow(e)) {
                var n = l.tsTryParseGenericAsyncArrowFunction(t, r);
                if (n) {
                  return n;
                }
              }
              var a = l.startNodeAt(t, r);
              a.callee = e;
              var s = l.tsParseTypeArguments();
              if (s) {
                if (c && !l.match(10)) {
                  p = l.state.pos;
                  l.unexpected();
                }
                if (!i && l.eat(10)) {
                  a.arguments = l.parseCallExpressionArguments(11, !1);
                  l.tsCheckForInvalidTypeCasts(a.arguments);
                  a.typeParameters = s;
                  if (o.optionalChainMember) {
                    a.optional = c;
                  }
                  return l.finishCallExpression(a, o.optionalChainMember);
                }
                if (l.match(22)) {
                  var u = l.parseTaggedTemplateExpression(e, t, r, o);
                  u.typeParameters = s;
                  return u;
                }
              }
              l.unexpected();
            });
            if (p) {
              this.unexpected(p, 10);
            }
            if (f) {
              return f;
            }
          }
          return a(s(n.prototype), "parseSubscript", this).call(this, e, t, r, i, o);
        }
      }, {
        key: "parseNewArguments",
        value: function (e) {
          var t = this;
          if (this.isRelational("<")) {
            var r = this.tsTryParseAndCatch(function () {
              var e = t.tsParseTypeArguments();
              if (!t.match(10)) {
                t.unexpected();
              }
              return e;
            });
            if (r) {
              e.typeParameters = r;
            }
          }
          a(s(n.prototype), "parseNewArguments", this).call(this, e);
        }
      }, {
        key: "parseExprOp",
        value: function (e, t, r, i) {
          if (ee(50) > i && !this.hasPrecedingLineBreak() && this.isContextual(85)) {
            var o = this.startNodeAt(t, r);
            o.expression = e;
            var l = this.tsTryNextParseConstantContext();
            o.typeAnnotation = l || this.tsNextThenParseType();
            this.finishNode(o, "TSAsExpression");
            this.reScan_lt_gt();
            return this.parseExprOp(o, t, r, i);
          }
          return a(s(n.prototype), "parseExprOp", this).call(this, e, t, r, i);
        }
      }, {
        key: "checkReservedWord",
        value: function (e, t, n, r) {}
      }, {
        key: "checkDuplicateExports",
        value: function () {}
      }, {
        key: "parseImport",
        value: function (e) {
          e.importKind = "value";
          if (J(this.state.type) || this.match(47) || this.match(5)) {
            var t = this.lookahead();
            if (this.isContextual(118) && 12 !== t.type && 89 !== t.type && 27 !== t.type) {
              e.importKind = "type";
              this.next();
              t = this.lookahead();
            }
            if (J(this.state.type) && 27 === t.type) {
              return this.tsParseImportEqualsDeclaration(e);
            }
          }
          var r = a(s(n.prototype), "parseImport", this).call(this, e);
          if ("type" === r.importKind && r.specifiers.length > 1 && "ImportDefaultSpecifier" === r.specifiers[0].type) {
            this.raise(r.start, ut.TypeImportCannotSpecifyDefaultAndNamed);
          }
          return r;
        }
      }, {
        key: "parseExport",
        value: function (e) {
          if (this.match(75)) {
            this.next();
            if (this.isContextual(118) && 61 !== this.lookaheadCharCode()) {
              e.importKind = "type";
              this.next();
            } else {
              e.importKind = "value";
            }
            return this.tsParseImportEqualsDeclaration(e, !0);
          }
          if (this.eat(27)) {
            var t = e;
            t.expression = this.parseExpression();
            this.semicolon();
            return this.finishNode(t, "TSExportAssignment");
          }
          if (this.eatContextual(85)) {
            var r = e;
            this.expectContextual(116);
            r.id = this.parseIdentifier();
            this.semicolon();
            return this.finishNode(r, "TSNamespaceExportDeclaration");
          }
          if (this.isContextual(118) && 5 === this.lookahead().type) {
            this.next();
            e.exportKind = "type";
          } else {
            e.exportKind = "value";
          }
          return a(s(n.prototype), "parseExport", this).call(this, e);
        }
      }, {
        key: "isAbstractClass",
        value: function () {
          return this.isContextual(112) && 72 === this.lookahead().type;
        }
      }, {
        key: "parseExportDefaultExpression",
        value: function () {
          if (this.isAbstractClass()) {
            var e = this.startNode();
            this.next();
            e.abstract = !0;
            this.parseClass(e, !0, !0);
            return e;
          }
          if (this.match(117)) {
            var t = this.startNode();
            this.next();
            var r = this.tsParseInterfaceDeclaration(t);
            if (r) {
              return r;
            }
          }
          return a(s(n.prototype), "parseExportDefaultExpression", this).call(this);
        }
      }, {
        key: "parseStatementContent",
        value: function (e, t) {
          if (67 === this.state.type && 114 === this.lookahead().type) {
            var r = this.startNode();
            this.next();
            this.expectContextual(114);
            return this.tsParseEnumDeclaration(r, !0);
          }
          return a(s(n.prototype), "parseStatementContent", this).call(this, e, t);
        }
      }, {
        key: "parseAccessModifier",
        value: function () {
          return this.tsParseModifier(["public", "protected", "private"]);
        }
      }, {
        key: "tsHasSomeModifiers",
        value: function (e, t) {
          return t.some(function (t) {
            return ct(t) ? e.accessibility === t : !!e[t];
          });
        }
      }, {
        key: "tsIsStartOfStaticBlocks",
        value: function () {
          return this.isContextual(96) && 123 === this.lookaheadCharCode();
        }
      }, {
        key: "parseClassMember",
        value: function (e, t, n) {
          var r = this;
          var i = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
          this.tsParseModifiers(t, i, void 0, void 0, !0);
          var a = function () {
            if (r.tsIsStartOfStaticBlocks()) {
              r.next();
              r.next();
              if (r.tsHasSomeModifiers(t, i)) {
                r.raise(r.state.pos, ut.StaticBlockCannotHaveModifier);
              }
              r.parseClassStaticBlock(e, t);
            } else {
              r.parseClassMemberWithIsStatic(e, t, n, !!t.static);
            }
          };
          if (t.declare) {
            this.tsInAmbientContext(a);
          } else {
            a();
          }
        }
      }, {
        key: "parseClassMemberWithIsStatic",
        value: function (e, t, r, i) {
          var o = this.tsTryParseIndexSignature(t);
          if (o) {
            e.body.push(o);
            if (t.abstract) {
              this.raise(t.start, ut.IndexSignatureHasAbstract);
            }
            if (t.accessibility) {
              this.raise(t.start, ut.IndexSignatureHasAccessibility, t.accessibility);
            }
            if (t.declare) {
              this.raise(t.start, ut.IndexSignatureHasDeclare);
            }
            return void (t.override && this.raise(t.start, ut.IndexSignatureHasOverride));
          }
          if (!this.state.inAbstractClass && t.abstract) {
            this.raise(t.start, ut.NonAbstractClassHasAbstractMethod);
          }
          if (t.override) {
            if (!r.hadSuperClass) {
              this.raise(t.start, ut.OverrideNotInSubClass);
            }
          }
          a(s(n.prototype), "parseClassMemberWithIsStatic", this).call(this, e, t, r, i);
        }
      }, {
        key: "parsePostMemberNameModifiers",
        value: function (e) {
          if (this.eat(17)) {
            e.optional = !0;
          }
          if (e.readonly && this.match(10)) {
            this.raise(e.start, ut.ClassMethodHasReadonly);
          }
          if (e.declare && this.match(10)) {
            this.raise(e.start, ut.ClassMethodHasDeclare);
          }
        }
      }, {
        key: "parseExpressionStatement",
        value: function (e, t) {
          return ("Identifier" === t.type ? this.tsParseExpressionStatement(e, t) : void 0) || a(s(n.prototype), "parseExpressionStatement", this).call(this, e, t);
        }
      }, {
        key: "shouldParseExportDeclaration",
        value: function () {
          return !!this.tsIsDeclarationStart() || a(s(n.prototype), "shouldParseExportDeclaration", this).call(this);
        }
      }, {
        key: "parseConditional",
        value: function (e, t, r, i) {
          var o = this;
          if (!this.state.maybeInArrowParameters || !this.match(17)) {
            return a(s(n.prototype), "parseConditional", this).call(this, e, t, r, i);
          }
          var l = this.tryParse(function () {
            return a(s(n.prototype), "parseConditional", o).call(o, e, t, r);
          });
          return l.node ? (l.error && (this.state = l.failState), l.node) : (l.error && a(s(n.prototype), "setOptionalParametersError", this).call(this, i, l.error), e);
        }
      }, {
        key: "parseParenItem",
        value: function (e, t, r) {
          e = a(s(n.prototype), "parseParenItem", this).call(this, e, t, r);
          if (this.eat(17)) {
            e.optional = !0;
            this.resetEndLocation(e);
          }
          if (this.match(14)) {
            var i = this.startNodeAt(t, r);
            i.expression = e;
            i.typeAnnotation = this.tsParseTypeAnnotation();
            return this.finishNode(i, "TSTypeCastExpression");
          }
          return e;
        }
      }, {
        key: "parseExportDeclaration",
        value: function (e) {
          var t;
          var r = this.state.start;
          var i = this.state.startLoc;
          var o = this.eatContextual(113);
          if (o && (this.isContextual(113) || !this.shouldParseExportDeclaration())) {
            throw this.raise(this.state.start, ut.ExpectedAmbientAfterExportDeclare);
          }
          if (J(this.state.type)) {
            t = this.tsTryParseExportDeclaration();
          }
          if (!t) {
            t = a(s(n.prototype), "parseExportDeclaration", this).call(this, e);
          }
          if (t && ("TSInterfaceDeclaration" === t.type || "TSTypeAliasDeclaration" === t.type || o)) {
            e.exportKind = "type";
          }
          if (t && o) {
            this.resetStartLocation(t, r, i);
            t.declare = !0;
          }
          return t;
        }
      }, {
        key: "parseClassId",
        value: function (e, t, r) {
          if (t && !r || !this.isContextual(102)) {
            a(s(n.prototype), "parseClassId", this).call(this, e, t, r, e.declare ? 1024 : 139);
            var i = this.tsTryParseTypeParameters();
            if (i) {
              e.typeParameters = i;
            }
          }
        }
      }, {
        key: "parseClassPropertyAnnotation",
        value: function (e) {
          if (!e.optional && this.eat(33)) {
            e.definite = !0;
          }
          var t = this.tsTryParseTypeAnnotation();
          if (t) {
            e.typeAnnotation = t;
          }
        }
      }, {
        key: "parseClassProperty",
        value: function (e) {
          this.parseClassPropertyAnnotation(e);
          if (this.state.isAmbientContext && this.match(27)) {
            this.raise(this.state.start, ut.DeclareClassFieldHasInitializer);
          }
          if (e.abstract && this.match(27)) {
            var t = e.key;
            this.raise(this.state.start, ut.AbstractPropertyHasInitializer, "Identifier" !== t.type || e.computed ? "[".concat(this.input.slice(t.start, t.end), "]") : t.name);
          }
          return a(s(n.prototype), "parseClassProperty", this).call(this, e);
        }
      }, {
        key: "parseClassPrivateProperty",
        value: function (e) {
          if (e.abstract) {
            this.raise(e.start, ut.PrivateElementHasAbstract);
          }
          if (e.accessibility) {
            this.raise(e.start, ut.PrivateElementHasAccessibility, e.accessibility);
          }
          this.parseClassPropertyAnnotation(e);
          return a(s(n.prototype), "parseClassPrivateProperty", this).call(this, e);
        }
      }, {
        key: "pushClassMethod",
        value: function (e, t, r, i, o, l) {
          var u = this.tsTryParseTypeParameters();
          if (u && o) {
            this.raise(u.start, ut.ConstructorHasTypeParameters);
          }
          if (!(!t.declare || "get" !== t.kind && "set" !== t.kind)) {
            this.raise(t.start, ut.DeclareAccessor, t.kind);
          }
          if (u) {
            t.typeParameters = u;
          }
          a(s(n.prototype), "pushClassMethod", this).call(this, e, t, r, i, o, l);
        }
      }, {
        key: "pushClassPrivateMethod",
        value: function (e, t, r, i) {
          var o = this.tsTryParseTypeParameters();
          if (o) {
            t.typeParameters = o;
          }
          a(s(n.prototype), "pushClassPrivateMethod", this).call(this, e, t, r, i);
        }
      }, {
        key: "declareClassPrivateMethodInScope",
        value: function (e, t) {
          if ("TSDeclareMethod" !== e.type && ("MethodDefinition" !== e.type || e.value.body)) {
            a(s(n.prototype), "declareClassPrivateMethodInScope", this).call(this, e, t);
          }
        }
      }, {
        key: "parseClassSuper",
        value: function (e) {
          a(s(n.prototype), "parseClassSuper", this).call(this, e);
          if (e.superClass && this.isRelational("<")) {
            e.superTypeParameters = this.tsParseTypeArguments();
          }
          if (this.eatContextual(102)) {
            e.implements = this.tsParseHeritageClause("implements");
          }
        }
      }, {
        key: "parseObjPropValue",
        value: function (e) {
          var t;
          var r = this.tsTryParseTypeParameters();
          if (r) {
            e.typeParameters = r;
          }
          for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++) {
            o[l - 1] = arguments[l];
          }
          (t = a(s(n.prototype), "parseObjPropValue", this)).call.apply(t, [this, e].concat(o));
        }
      }, {
        key: "parseFunctionParams",
        value: function (e, t) {
          var r = this.tsTryParseTypeParameters();
          if (r) {
            e.typeParameters = r;
          }
          a(s(n.prototype), "parseFunctionParams", this).call(this, e, t);
        }
      }, {
        key: "parseVarId",
        value: function (e, t) {
          a(s(n.prototype), "parseVarId", this).call(this, e, t);
          if ("Identifier" === e.id.type && this.eat(33)) {
            e.definite = !0;
          }
          var r = this.tsTryParseTypeAnnotation();
          if (r) {
            e.id.typeAnnotation = r;
            this.resetEndLocation(e.id);
          }
        }
      }, {
        key: "parseAsyncArrowFromCallExpression",
        value: function (e, t) {
          if (this.match(14)) {
            e.returnType = this.tsParseTypeAnnotation();
          }
          return a(s(n.prototype), "parseAsyncArrowFromCallExpression", this).call(this, e, t);
        }
      }, {
        key: "parseMaybeAssign",
        value: function () {
          for (var e, t, r, i, o, l, u, c, p, f, d, h, y = this, m = arguments.length, v = new Array(m), g = 0; g < m; g++) {
            v[g] = arguments[g];
          }
          if (this.hasPlugin("jsx") && (this.match(130) || this.isRelational("<"))) {
            c = this.state.clone();
            if (!(p = this.tryParse(function () {
              var e;
              return (e = a(s(n.prototype), "parseMaybeAssign", y)).call.apply(e, [y].concat(v));
            }, c)).error) {
              return p.node;
            }
            var T = this.state.context;
            if (T[T.length - 1] === _.j_oTag) {
              T.length -= 2;
            } else {
              if (T[T.length - 1] === _.j_expr) {
                T.length -= 1;
              }
            }
          }
          if ((null == (e = p) || !e.error) && !this.isRelational("<")) {
            return (d = a(s(n.prototype), "parseMaybeAssign", this)).call.apply(d, [this].concat(v));
          }
          c = c || this.state.clone();
          var b = this.tryParse(function (e) {
            var t;
            var r;
            var i;
            h = y.tsParseTypeParameters();
            var o = (t = a(s(n.prototype), "parseMaybeAssign", y)).call.apply(t, [y].concat(v));
            if ("ArrowFunctionExpression" !== o.type || null != (r = o.extra) && r.parenthesized) {
              e();
            }
            if (0 !== (null == (i = h) ? void 0 : i.params.length)) {
              y.resetStartLocationFromNode(o, h);
            }
            o.typeParameters = h;
            return o;
          }, c);
          if (!b.error && !b.aborted) {
            if (h) {
              this.reportReservedArrowTypeParam(h);
            }
            return b.node;
          }
          if (!p && (lt(!this.hasPlugin("jsx")), !(f = this.tryParse(function () {
            var e;
            return (e = a(s(n.prototype), "parseMaybeAssign", y)).call.apply(e, [y].concat(v));
          }, c)).error)) {
            return f.node;
          }
          if (null != (t = p) && t.node) {
            this.state = p.failState;
            return p.node;
          }
          if (b.node) {
            this.state = b.failState;
            if (h) {
              this.reportReservedArrowTypeParam(h);
            }
            return b.node;
          }
          if (null != (r = f) && r.node) {
            this.state = f.failState;
            return f.node;
          }
          if (null != (i = p) && i.thrown) {
            throw p.error;
          }
          if (b.thrown) {
            throw b.error;
          }
          if (null != (o = f) && o.thrown) {
            throw f.error;
          }
          throw (null == (l = p) ? void 0 : l.error) || b.error || (null == (u = f) ? void 0 : u.error);
        }
      }, {
        key: "reportReservedArrowTypeParam",
        value: function (e) {
          var t;
          if (!(1 !== e.params.length || null != (t = e.extra) && t.trailingComma || !this.getPluginOption("typescript", "disallowAmbiguousJSXLike"))) {
            this.raise(e.start, ut.ReservedArrowTypeParam);
          }
        }
      }, {
        key: "parseMaybeUnary",
        value: function (e) {
          return !this.hasPlugin("jsx") && this.isRelational("<") ? this.tsParseTypeAssertion() : a(s(n.prototype), "parseMaybeUnary", this).call(this, e);
        }
      }, {
        key: "parseArrow",
        value: function (e) {
          var t = this;
          if (this.match(14)) {
            var r = this.tryParse(function (e) {
              var n = t.tsParseTypeOrTypePredicateAnnotation(14);
              if (!(!t.canInsertSemicolon() && t.match(19))) {
                e();
              }
              return n;
            });
            if (r.aborted) {
              return;
            }
            if (!r.thrown) {
              if (r.error) {
                this.state = r.failState;
              }
              e.returnType = r.node;
            }
          }
          return a(s(n.prototype), "parseArrow", this).call(this, e);
        }
      }, {
        key: "parseAssignableListItemTypes",
        value: function (e) {
          if (this.eat(17)) {
            if (!("Identifier" === e.type || this.state.isAmbientContext || this.state.inType)) {
              this.raise(e.start, ut.PatternIsOptional);
            }
            e.optional = !0;
          }
          var t = this.tsTryParseTypeAnnotation();
          if (t) {
            e.typeAnnotation = t;
          }
          this.resetEndLocation(e);
          return e;
        }
      }, {
        key: "isAssignable",
        value: function (e, t) {
          switch (e.type) {
            case "TSTypeCastExpression":
              return this.isAssignable(e.expression, t);
            case "TSParameterProperty":
              return !0;
            default:
              return a(s(n.prototype), "isAssignable", this).call(this, e, t);
          }
        }
      }, {
        key: "toAssignable",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          switch (e.type) {
            case "TSTypeCastExpression":
              return a(s(n.prototype), "toAssignable", this).call(this, this.typeCastToParameter(e), t);
            case "TSParameterProperty":
              return a(s(n.prototype), "toAssignable", this).call(this, e, t);
            case "ParenthesizedExpression":
              return this.toAssignableParenthesizedExpression(e, t);
            case "TSAsExpression":
            case "TSNonNullExpression":
            case "TSTypeAssertion":
              e.expression = this.toAssignable(e.expression, t);
              return e;
            default:
              return a(s(n.prototype), "toAssignable", this).call(this, e, t);
          }
        }
      }, {
        key: "toAssignableParenthesizedExpression",
        value: function (e, t) {
          switch (e.expression.type) {
            case "TSAsExpression":
            case "TSNonNullExpression":
            case "TSTypeAssertion":
            case "ParenthesizedExpression":
              e.expression = this.toAssignable(e.expression, t);
              return e;
            default:
              return a(s(n.prototype), "toAssignable", this).call(this, e, t);
          }
        }
      }, {
        key: "checkLVal",
        value: function (e, t) {
          for (var r, i, o = arguments.length, l = new Array(o > 2 ? o - 2 : 0), u = 2; u < o; u++) {
            l[u - 2] = arguments[u];
          }
          switch (e.type) {
            case "TSTypeCastExpression":
              return;
            case "TSParameterProperty":
              return void this.checkLVal.apply(this, [e.parameter, "parameter property"].concat(l));
            case "TSAsExpression":
            case "TSTypeAssertion":
              if (!l[0] && "parenthesized expression" !== t && (null == (i = e.extra) || !i.parenthesized)) {
                this.raise(e.start, k.InvalidLhs, t);
                break;
              }
              return void this.checkLVal.apply(this, [e.expression, "parenthesized expression"].concat(l));
            case "TSNonNullExpression":
              return void this.checkLVal.apply(this, [e.expression, t].concat(l));
            default:
              return void (r = a(s(n.prototype), "checkLVal", this)).call.apply(r, [this, e, t].concat(l));
          }
        }
      }, {
        key: "parseBindingAtom",
        value: function () {
          switch (this.state.type) {
            case 70:
              return this.parseIdentifier(!0);
            default:
              return a(s(n.prototype), "parseBindingAtom", this).call(this);
          }
        }
      }, {
        key: "parseMaybeDecoratorArguments",
        value: function (e) {
          if (this.isRelational("<")) {
            var t = this.tsParseTypeArguments();
            if (this.match(10)) {
              var r = a(s(n.prototype), "parseMaybeDecoratorArguments", this).call(this, e);
              r.typeParameters = t;
              return r;
            }
            this.unexpected(this.state.start, 10);
          }
          return a(s(n.prototype), "parseMaybeDecoratorArguments", this).call(this, e);
        }
      }, {
        key: "checkCommaAfterRest",
        value: function (e) {
          if (this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e) {
            this.next();
          } else {
            a(s(n.prototype), "checkCommaAfterRest", this).call(this, e);
          }
        }
      }, {
        key: "isClassMethod",
        value: function () {
          return this.isRelational("<") || a(s(n.prototype), "isClassMethod", this).call(this);
        }
      }, {
        key: "isClassProperty",
        value: function () {
          return this.match(33) || this.match(14) || a(s(n.prototype), "isClassProperty", this).call(this);
        }
      }, {
        key: "parseMaybeDefault",
        value: function () {
          for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++) {
            r[i] = arguments[i];
          }
          var o = (e = a(s(n.prototype), "parseMaybeDefault", this)).call.apply(e, [this].concat(r));
          if ("AssignmentPattern" === o.type && o.typeAnnotation && o.right.start < o.typeAnnotation.start) {
            this.raise(o.typeAnnotation.start, ut.TypeAnnotationAfterAssign);
          }
          return o;
        }
      }, {
        key: "getTokenFromCode",
        value: function (e) {
          return !this.state.inType || 62 !== e && 60 !== e ? a(s(n.prototype), "getTokenFromCode", this).call(this, e) : this.finishOp(43, 1);
        }
      }, {
        key: "reScan_lt_gt",
        value: function () {
          if (this.match(43)) {
            var e = this.input.charCodeAt(this.state.start);
            if (!(60 !== e && 62 !== e)) {
              this.state.pos -= 1;
              this.readToken_lt_gt(e);
            }
          }
        }
      }, {
        key: "toAssignableList",
        value: function (e) {
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            if (r) {
              switch (r.type) {
                case "TSTypeCastExpression":
                  e[t] = this.typeCastToParameter(r);
                  break;
                case "TSAsExpression":
                case "TSTypeAssertion":
                  if (this.state.maybeInArrowParameters) {
                    this.raise(r.start, ut.UnexpectedTypeCastInParameter);
                  } else {
                    e[t] = this.typeCastToParameter(r);
                  }
              }
            }
          }
          return a(s(n.prototype), "toAssignableList", this).apply(this, arguments);
        }
      }, {
        key: "typeCastToParameter",
        value: function (e) {
          e.expression.typeAnnotation = e.typeAnnotation;
          this.resetEndLocation(e.expression, e.typeAnnotation.end, e.typeAnnotation.loc.end);
          return e.expression;
        }
      }, {
        key: "shouldParseArrow",
        value: function (e) {
          var t = this;
          return this.match(14) ? e.every(function (e) {
            return t.isAssignable(e, !0);
          }) : a(s(n.prototype), "shouldParseArrow", this).call(this, e);
        }
      }, {
        key: "shouldParseAsyncArrow",
        value: function () {
          return this.match(14) || a(s(n.prototype), "shouldParseAsyncArrow", this).call(this);
        }
      }, {
        key: "canHaveLeadingDecorator",
        value: function () {
          return a(s(n.prototype), "canHaveLeadingDecorator", this).call(this) || this.isAbstractClass();
        }
      }, {
        key: "jsxParseOpeningElementAfterName",
        value: function (e) {
          var t = this;
          if (this.isRelational("<")) {
            var r = this.tsTryParseAndCatch(function () {
              return t.tsParseTypeArguments();
            });
            if (r) {
              e.typeParameters = r;
            }
          }
          return a(s(n.prototype), "jsxParseOpeningElementAfterName", this).call(this, e);
        }
      }, {
        key: "getGetterSetterExpectedParamCount",
        value: function (e) {
          var t = a(s(n.prototype), "getGetterSetterExpectedParamCount", this).call(this, e);
          var r = this.getObjectOrClassMethodParams(e)[0];
          return r && this.isThisParam(r) ? t + 1 : t;
        }
      }, {
        key: "parseCatchClauseParam",
        value: function () {
          var e = a(s(n.prototype), "parseCatchClauseParam", this).call(this);
          var t = this.tsTryParseTypeAnnotation();
          if (t) {
            e.typeAnnotation = t;
            this.resetEndLocation(e);
          }
          return e;
        }
      }, {
        key: "tsInAmbientContext",
        value: function (e) {
          var t = this.state.isAmbientContext;
          this.state.isAmbientContext = !0;
          try {
            return e();
          } finally {
            this.state.isAmbientContext = t;
          }
        }
      }, {
        key: "parseClass",
        value: function (e) {
          var t = this.state.inAbstractClass;
          this.state.inAbstractClass = !!e.abstract;
          try {
            for (var r, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++) {
              o[l - 1] = arguments[l];
            }
            return (r = a(s(n.prototype), "parseClass", this)).call.apply(r, [this, e].concat(o));
          } finally {
            this.state.inAbstractClass = t;
          }
        }
      }, {
        key: "tsParseAbstractDeclaration",
        value: function (e) {
          if (this.match(72)) {
            e.abstract = !0;
            return this.parseClass(e, !0, !1);
          }
          if (this.isContextual(117)) {
            if (!this.hasFollowingLineBreak()) {
              e.abstract = !0;
              this.raise(e.start, ut.NonClassMethodPropertyHasAbstractModifer);
              this.next();
              return this.tsParseInterfaceDeclaration(e);
            }
          } else {
            this.unexpected(null, 72);
          }
        }
      }, {
        key: "parseMethod",
        value: function () {
          for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++) {
            r[i] = arguments[i];
          }
          var o = (e = a(s(n.prototype), "parseMethod", this)).call.apply(e, [this].concat(r));
          if (o.abstract) {
            var l = this.hasPlugin("estree") ? !!o.value.body : !!o.body;
            if (l) {
              var u = o.key;
              this.raise(o.start, ut.AbstractMethodHasImplementation, "Identifier" !== u.type || o.computed ? "[".concat(this.input.slice(u.start, u.end), "]") : u.name);
            }
          }
          return o;
        }
      }, {
        key: "tsParseTypeParameterName",
        value: function () {
          return this.parseIdentifier().name;
        }
      }, {
        key: "shouldParseAsAmbientContext",
        value: function () {
          return !!this.getPluginOption("typescript", "dts");
        }
      }, {
        key: "parse",
        value: function () {
          if (this.shouldParseAsAmbientContext()) {
            this.state.isAmbientContext = !0;
          }
          return a(s(n.prototype), "parse", this).call(this);
        }
      }, {
        key: "getExpression",
        value: function () {
          if (this.shouldParseAsAmbientContext()) {
            this.state.isAmbientContext = !0;
          }
          return a(s(n.prototype), "getExpression", this).call(this);
        }
      }, {
        key: "parseExportSpecifier",
        value: function (e, t, r, i) {
          return !t && i ? (this.parseTypeOnlyImportExportSpecifier(e, !1, r), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", a(s(n.prototype), "parseExportSpecifier", this).call(this, e, t, r, i));
        }
      }, {
        key: "parseImportSpecifier",
        value: function (e, t, r, i) {
          return !t && i ? (this.parseTypeOnlyImportExportSpecifier(e, !0, r), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", a(s(n.prototype), "parseImportSpecifier", this).call(this, e, t, r, i));
        }
      }, {
        key: "parseTypeOnlyImportExportSpecifier",
        value: function (e, t, n) {
          var r;
          var i = t ? "imported" : "local";
          var a = t ? "local" : "exported";
          var s = e[i];
          var o = !1;
          var l = !0;
          var u = s.start;
          if (this.isContextual(85)) {
            var c = this.parseIdentifier();
            if (this.isContextual(85)) {
              var p = this.parseIdentifier();
              if (X(this.state.type)) {
                o = !0;
                s = c;
                r = this.parseIdentifier();
                l = !1;
              } else {
                r = p;
                l = !1;
              }
            } else if (X(this.state.type)) {
              l = !1;
              r = this.parseIdentifier();
            } else {
              o = !0;
              s = c;
            }
          } else if (X(this.state.type)) {
            o = !0;
            s = this.parseIdentifier();
          }
          if (o && n) {
            this.raise(u, t ? ut.TypeModifierIsUsedInTypeImports : ut.TypeModifierIsUsedInTypeExports);
          }
          e[i] = s;
          e[a] = r;
          e[t ? "importKind" : "exportKind"] = o ? "type" : "value";
          if (l && this.eatContextual(85)) {
            e[a] = t ? this.parseIdentifier() : this.parseModuleExportName();
          }
          if (!e[a]) {
            e[a] = He(e[i]);
          }
          if (t) {
            this.checkLVal(e[a], "import specifier", 9);
          }
        }
      }]);
      return n;
    }(e);
  },
  v8intrinsic: function (e) {
    return function (e) {
      o(n, e);
      var t = l(n);
      function n() {
        p(this, n);
        return t.apply(this, arguments);
      }
      c(n, [{
        key: "parseV8Intrinsic",
        value: function () {
          if (this.match(46)) {
            var e = this.state.start;
            var t = this.startNode();
            this.next();
            if (J(this.state.type)) {
              var n = this.parseIdentifierName(this.state.start);
              var r = this.createIdentifier(t, n);
              r.type = "V8IntrinsicIdentifier";
              if (this.match(10)) {
                return r;
              }
            }
            this.unexpected(e);
          }
        }
      }, {
        key: "parseExprAtom",
        value: function () {
          return this.parseV8Intrinsic() || a(s(n.prototype), "parseExprAtom", this).apply(this, arguments);
        }
      }]);
      return n;
    }(e);
  },
  placeholders: function (e) {
    return function (e) {
      o(n, e);
      var t = l(n);
      function n() {
        p(this, n);
        return t.apply(this, arguments);
      }
      c(n, [{
        key: "parsePlaceholder",
        value: function (e) {
          if (this.match(132)) {
            var t = this.startNode();
            this.next();
            this.assertNoSpace("Unexpected space in placeholder.");
            t.name = a(s(n.prototype), "parseIdentifier", this).call(this, !0);
            this.assertNoSpace("Unexpected space in placeholder.");
            this.expect(132);
            return this.finishPlaceholder(t, e);
          }
        }
      }, {
        key: "finishPlaceholder",
        value: function (e, t) {
          var n = !(!e.expectedNode || "Placeholder" !== e.type);
          e.expectedNode = t;
          return n ? e : this.finishNode(e, "Placeholder");
        }
      }, {
        key: "getTokenFromCode",
        value: function (e) {
          return 37 === e && 37 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(132, 2) : a(s(n.prototype), "getTokenFromCode", this).apply(this, arguments);
        }
      }, {
        key: "parseExprAtom",
        value: function () {
          return this.parsePlaceholder("Expression") || a(s(n.prototype), "parseExprAtom", this).apply(this, arguments);
        }
      }, {
        key: "parseIdentifier",
        value: function () {
          return this.parsePlaceholder("Identifier") || a(s(n.prototype), "parseIdentifier", this).apply(this, arguments);
        }
      }, {
        key: "checkReservedWord",
        value: function (e) {
          if (void 0 !== e) {
            a(s(n.prototype), "checkReservedWord", this).apply(this, arguments);
          }
        }
      }, {
        key: "parseBindingAtom",
        value: function () {
          return this.parsePlaceholder("Pattern") || a(s(n.prototype), "parseBindingAtom", this).apply(this, arguments);
        }
      }, {
        key: "checkLVal",
        value: function (e) {
          if ("Placeholder" !== e.type) {
            a(s(n.prototype), "checkLVal", this).apply(this, arguments);
          }
        }
      }, {
        key: "toAssignable",
        value: function (e) {
          return e && "Placeholder" === e.type && "Expression" === e.expectedNode ? (e.expectedNode = "Pattern", e) : a(s(n.prototype), "toAssignable", this).apply(this, arguments);
        }
      }, {
        key: "isLet",
        value: function (e) {
          return !!a(s(n.prototype), "isLet", this).call(this, e) || !!this.isContextual(91) && !e && 132 === this.lookahead().type;
        }
      }, {
        key: "verifyBreakContinue",
        value: function (e) {
          if (!(e.label && "Placeholder" === e.label.type)) {
            a(s(n.prototype), "verifyBreakContinue", this).apply(this, arguments);
          }
        }
      }, {
        key: "parseExpressionStatement",
        value: function (e, t) {
          if ("Placeholder" !== t.type || t.extra && t.extra.parenthesized) {
            return a(s(n.prototype), "parseExpressionStatement", this).apply(this, arguments);
          }
          if (this.match(14)) {
            var r = e;
            r.label = this.finishPlaceholder(t, "Identifier");
            this.next();
            r.body = this.parseStatement("label");
            return this.finishNode(r, "LabeledStatement");
          }
          this.semicolon();
          e.name = t.name;
          return this.finishPlaceholder(e, "Statement");
        }
      }, {
        key: "parseBlock",
        value: function () {
          return this.parsePlaceholder("BlockStatement") || a(s(n.prototype), "parseBlock", this).apply(this, arguments);
        }
      }, {
        key: "parseFunctionId",
        value: function () {
          return this.parsePlaceholder("Identifier") || a(s(n.prototype), "parseFunctionId", this).apply(this, arguments);
        }
      }, {
        key: "parseClass",
        value: function (e, t, n) {
          var r = t ? "ClassDeclaration" : "ClassExpression";
          this.next();
          this.takeDecorators(e);
          var i = this.state.strict;
          var a = this.parsePlaceholder("Identifier");
          if (a) {
            if (this.match(73) || this.match(132) || this.match(5)) {
              e.id = a;
            } else {
              if (n || !t) {
                e.id = null;
                e.body = this.finishPlaceholder(a, "ClassBody");
                return this.finishNode(e, r);
              }
              this.unexpected(null, pt.ClassNameIsRequired);
            }
          } else {
            this.parseClassId(e, t, n);
          }
          this.parseClassSuper(e);
          e.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!e.superClass, i);
          return this.finishNode(e, r);
        }
      }, {
        key: "parseExport",
        value: function (e) {
          var t = this.parsePlaceholder("Identifier");
          if (!t) {
            return a(s(n.prototype), "parseExport", this).apply(this, arguments);
          }
          if (!this.isContextual(89) && !this.match(12)) {
            e.specifiers = [];
            e.source = null;
            e.declaration = this.finishPlaceholder(t, "Declaration");
            return this.finishNode(e, "ExportNamedDeclaration");
          }
          this.expectPlugin("exportDefaultFrom");
          var r = this.startNode();
          r.exported = t;
          e.specifiers = [this.finishNode(r, "ExportDefaultSpecifier")];
          return a(s(n.prototype), "parseExport", this).call(this, e);
        }
      }, {
        key: "isExportDefaultSpecifier",
        value: function () {
          if (this.match(57)) {
            var e = this.nextTokenStart();
            if (this.isUnparsedContextual(e, "from") && this.input.startsWith(Z(132), this.nextTokenStartSince(e + 4))) {
              return !0;
            }
          }
          return a(s(n.prototype), "isExportDefaultSpecifier", this).call(this);
        }
      }, {
        key: "maybeParseExportDefaultSpecifier",
        value: function (e) {
          return !!(e.specifiers && e.specifiers.length > 0) || a(s(n.prototype), "maybeParseExportDefaultSpecifier", this).apply(this, arguments);
        }
      }, {
        key: "checkExport",
        value: function (e) {
          var t = e.specifiers;
          if (null != t && t.length) {
            e.specifiers = t.filter(function (e) {
              return "Placeholder" === e.exported.type;
            });
          }
          a(s(n.prototype), "checkExport", this).call(this, e);
          e.specifiers = t;
        }
      }, {
        key: "parseImport",
        value: function (e) {
          var t = this.parsePlaceholder("Identifier");
          if (!t) {
            return a(s(n.prototype), "parseImport", this).apply(this, arguments);
          }
          e.specifiers = [];
          if (!this.isContextual(89) && !this.match(12)) {
            e.source = this.finishPlaceholder(t, "StringLiteral");
            this.semicolon();
            return this.finishNode(e, "ImportDeclaration");
          }
          var r = this.startNodeAtNode(t);
          r.local = t;
          this.finishNode(r, "ImportDefaultSpecifier");
          e.specifiers.push(r);
          if (this.eat(12)) {
            var i = this.maybeParseStarImportSpecifier(e);
            if (!i) {
              this.parseNamedImportSpecifiers(e);
            }
          }
          this.expectContextual(89);
          e.source = this.parseImportSource();
          this.semicolon();
          return this.finishNode(e, "ImportDeclaration");
        }
      }, {
        key: "parseImportSource",
        value: function () {
          return this.parsePlaceholder("StringLiteral") || a(s(n.prototype), "parseImportSource", this).apply(this, arguments);
        }
      }]);
      return n;
    }(e);
  }
};
var gt = Object.keys(vt);
var Tt = {
  sourceType: "script",
  sourceFilename: void 0,
  startColumn: 0,
  startLine: 1,
  allowAwaitOutsideFunction: !1,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowSuperOutsideMethod: !1,
  allowUndeclaredExports: !1,
  plugins: [],
  strictMode: null,
  ranges: !1,
  tokens: !1,
  createParenthesizedExpressions: !1,
  errorRecovery: !1,
  attachComment: !0
};
var bt = function e(t) {
  return "ParenthesizedExpression" === t.type ? e(t.expression) : t;
};
var St = function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    p(this, n);
    return t.apply(this, arguments);
  }
  c(n, [{
    key: "toAssignable",
    value: function (e) {
      var t;
      var n;
      var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var i = void 0;
      switch (("ParenthesizedExpression" === e.type || null != (t = e.extra) && t.parenthesized) && (i = bt(e), r ? "Identifier" === i.type ? this.expressionScope.recordParenthesizedIdentifierError(e.start, k.InvalidParenthesizedAssignment) : "MemberExpression" !== i.type && this.raise(e.start, k.InvalidParenthesizedAssignment) : this.raise(e.start, k.InvalidParenthesizedAssignment)), e.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;
        case "ObjectExpression":
          e.type = "ObjectPattern";
          for (var a = 0, s = e.properties.length, o = s - 1; a < s; a++) {
            var l;
            var u = e.properties[a];
            var c = a === o;
            this.toAssignableObjectExpressionProp(u, c, r);
            if (c && "RestElement" === u.type && null != (l = e.extra) && l.trailingComma) {
              this.raiseRestNotLast(e.extra.trailingComma);
            }
          }
          break;
        case "ObjectProperty":
          this.toAssignable(e.value, r);
          break;
        case "SpreadElement":
          this.checkToRestConversion(e);
          e.type = "RestElement";
          var p = e.argument;
          this.toAssignable(p, r);
          break;
        case "ArrayExpression":
          e.type = "ArrayPattern";
          this.toAssignableList(e.elements, null == (n = e.extra) ? void 0 : n.trailingComma, r);
          break;
        case "AssignmentExpression":
          if ("=" !== e.operator) {
            this.raise(e.left.end, k.MissingEqInAssignment);
          }
          e.type = "AssignmentPattern";
          delete e.operator;
          this.toAssignable(e.left, r);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(i, r);
      }
      return e;
    }
  }, {
    key: "toAssignableObjectExpressionProp",
    value: function (e, t, n) {
      if ("ObjectMethod" === e.type) {
        var r = "get" === e.kind || "set" === e.kind ? k.PatternHasAccessor : k.PatternHasMethod;
        this.raise(e.key.start, r);
      } else if ("SpreadElement" !== e.type || t) {
        this.toAssignable(e, n);
      } else {
        this.raiseRestNotLast(e.start);
      }
    }
  }, {
    key: "toAssignableList",
    value: function (e, t, n) {
      var r = e.length;
      if (r) {
        var i = e[r - 1];
        if ("RestElement" === (null == i ? void 0 : i.type)) {
          --r;
        } else if ("SpreadElement" === (null == i ? void 0 : i.type)) {
          i.type = "RestElement";
          var a = i.argument;
          this.toAssignable(a, n);
          if ("Identifier" !== (a = bt(a)).type && "MemberExpression" !== a.type && "ArrayPattern" !== a.type && "ObjectPattern" !== a.type) {
            this.unexpected(a.start);
          }
          if (t) {
            this.raiseTrailingCommaAfterRest(t);
          }
          --r;
        }
      }
      for (var s = 0; s < r; s++) {
        var o = e[s];
        if (o) {
          this.toAssignable(o, n);
          if ("RestElement" === o.type) {
            this.raiseRestNotLast(o.start);
          }
        }
      }
      return e;
    }
  }, {
    key: "isAssignable",
    value: function (e, t) {
      var n = this;
      switch (e.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          return !0;
        case "ObjectExpression":
          var r = e.properties.length - 1;
          return e.properties.every(function (e, t) {
            return "ObjectMethod" !== e.type && (t === r || "SpreadElement" !== e.type) && n.isAssignable(e);
          });
        case "ObjectProperty":
          return this.isAssignable(e.value);
        case "SpreadElement":
          return this.isAssignable(e.argument);
        case "ArrayExpression":
          return e.elements.every(function (e) {
            return null === e || n.isAssignable(e);
          });
        case "AssignmentExpression":
          return "=" === e.operator;
        case "ParenthesizedExpression":
          return this.isAssignable(e.expression);
        case "MemberExpression":
        case "OptionalMemberExpression":
          return !t;
        default:
          return !1;
      }
    }
  }, {
    key: "toReferencedList",
    value: function (e, t) {
      return e;
    }
  }, {
    key: "toReferencedListDeep",
    value: function (e, t) {
      this.toReferencedList(e, t);
      var n;
      var i = r(e);
      try {
        for (i.s(); !(n = i.n()).done;) {
          var a = n.value;
          if ("ArrayExpression" === (null == a ? void 0 : a.type)) {
            this.toReferencedListDeep(a.elements);
          }
        }
      } catch (s) {
        i.e(s);
      } finally {
        i.f();
      }
    }
  }, {
    key: "parseSpread",
    value: function (e, t) {
      var n = this.startNode();
      this.next();
      n.argument = this.parseMaybeAssignAllowIn(e, void 0, t);
      return this.finishNode(n, "SpreadElement");
    }
  }, {
    key: "parseRestBinding",
    value: function () {
      var e = this.startNode();
      this.next();
      e.argument = this.parseBindingAtom();
      return this.finishNode(e, "RestElement");
    }
  }, {
    key: "parseBindingAtom",
    value: function () {
      switch (this.state.type) {
        case 0:
          var e = this.startNode();
          this.next();
          e.elements = this.parseBindingList(3, 93, !0);
          return this.finishNode(e, "ArrayPattern");
        case 5:
          return this.parseObjectLike(8, !0);
      }
      return this.parseIdentifier();
    }
  }, {
    key: "parseBindingList",
    value: function (e, t, n, r) {
      for (var i = [], a = !0; !this.eat(e);) {
        if (a) {
          a = !1;
        } else {
          this.expect(12);
        }
        if (n && this.match(12)) {
          i.push(null);
        } else {
          if (this.eat(e)) {
            break;
          }
          if (this.match(21)) {
            i.push(this.parseAssignableListItemTypes(this.parseRestBinding()));
            this.checkCommaAfterRest(t);
            this.expect(e);
            break;
          }
          var s = [];
          for (this.match(24) && this.hasPlugin("decorators") && this.raise(this.state.start, k.UnsupportedParameterDecorator); this.match(24);) {
            s.push(this.parseDecorator());
          }
          i.push(this.parseAssignableListItem(r, s));
        }
      }
      return i;
    }
  }, {
    key: "parseAssignableListItem",
    value: function (e, t) {
      var n = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(n);
      var r = this.parseMaybeDefault(n.start, n.loc.start, n);
      if (t.length) {
        n.decorators = t;
      }
      return r;
    }
  }, {
    key: "parseAssignableListItemTypes",
    value: function (e) {
      return e;
    }
  }, {
    key: "parseMaybeDefault",
    value: function (e, t, n) {
      var r;
      var i;
      var a;
      t = null != (r = t) ? r : this.state.startLoc;
      e = null != (i = e) ? i : this.state.start;
      n = null != (a = n) ? a : this.parseBindingAtom();
      if (!this.eat(27)) {
        return n;
      }
      var s = this.startNodeAt(e, t);
      s.left = n;
      s.right = this.parseMaybeAssignAllowIn();
      return this.finishNode(s, "AssignmentPattern");
    }
  }, {
    key: "checkLVal",
    value: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 64;
      var i = arguments.length > 3 ? arguments[3] : void 0;
      var a = arguments.length > 4 ? arguments[4] : void 0;
      var s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      switch (e.type) {
        case "Identifier":
          var o = e.name;
          if (this.state.strict && (s ? be(o, this.inModule) : Te(o))) {
            this.raise(e.start, 64 === n ? k.StrictEvalArguments : k.StrictEvalArgumentsBinding, o);
          }
          if (i) {
            if (i.has(o)) {
              this.raise(e.start, k.ParamDupe);
            } else {
              i.add(o);
            }
          }
          if (a && "let" === o) {
            this.raise(e.start, k.LetInLexicalBinding);
          }
          if (!(64 & n)) {
            this.scope.declareName(o, n, e.start);
          }
          break;
        case "MemberExpression":
          if (64 !== n) {
            this.raise(e.start, k.InvalidPropertyBindingPattern);
          }
          break;
        case "ObjectPattern":
          var l,
            u = r(e.properties);
          try {
            for (u.s(); !(l = u.n()).done;) {
              var c = l.value;
              if (this.isObjectProperty(c)) {
                c = c.value;
              } else if (this.isObjectMethod(c)) {
                continue;
              }
              this.checkLVal(c, "object destructuring pattern", n, i, a);
            }
          } catch (h) {
            u.e(h);
          } finally {
            u.f();
          }
          break;
        case "ArrayPattern":
          var p,
            f = r(e.elements);
          try {
            for (f.s(); !(p = f.n()).done;) {
              var d = p.value;
              if (d) {
                this.checkLVal(d, "array destructuring pattern", n, i, a);
              }
            }
          } catch (h) {
            f.e(h);
          } finally {
            f.f();
          }
          break;
        case "AssignmentPattern":
          this.checkLVal(e.left, "assignment pattern", n, i);
          break;
        case "RestElement":
          this.checkLVal(e.argument, "rest element", n, i);
          break;
        case "ParenthesizedExpression":
          this.checkLVal(e.expression, "parenthesized expression", n, i);
          break;
        default:
          this.raise(e.start, 64 === n ? k.InvalidLhs : k.InvalidLhsBinding, t);
      }
    }
  }, {
    key: "checkToRestConversion",
    value: function (e) {
      if ("Identifier" !== e.argument.type && "MemberExpression" !== e.argument.type) {
        this.raise(e.argument.start, k.InvalidRestAssignmentPattern);
      }
    }
  }, {
    key: "checkCommaAfterRest",
    value: function (e) {
      if (this.match(12)) {
        if (this.lookaheadCharCode() === e) {
          this.raiseTrailingCommaAfterRest(this.state.start);
        } else {
          this.raiseRestNotLast(this.state.start);
        }
      }
    }
  }, {
    key: "raiseRestNotLast",
    value: function (e) {
      throw this.raise(e, k.ElementAfterRest);
    }
  }, {
    key: "raiseTrailingCommaAfterRest",
    value: function (e) {
      this.raise(e, k.RestTrailingComma);
    }
  }]);
  return n;
}(Je);
var Et = new Map([["ArrowFunctionExpression", "arrow function"], ["AssignmentExpression", "assignment"], ["ConditionalExpression", "conditional"], ["YieldExpression", "yield"]]);
var xt = function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    p(this, n);
    return t.apply(this, arguments);
  }
  c(n, [{
    key: "checkProto",
    value: function (e, t, n, r) {
      if (!("SpreadElement" === e.type || this.isObjectMethod(e) || e.computed || e.shorthand)) {
        var i = e.key;
        if ("__proto__" === ("Identifier" === i.type ? i.name : i.value)) {
          if (t) {
            return void this.raise(i.start, k.RecordNoProto);
          }
          if (n.used) {
            if (r) {
              if (-1 === r.doubleProto) {
                r.doubleProto = i.start;
              }
            } else {
              this.raise(i.start, k.DuplicateProto);
            }
          }
          n.used = !0;
        }
      }
    }
  }, {
    key: "shouldExitDescending",
    value: function (e, t) {
      return "ArrowFunctionExpression" === e.type && e.start === t;
    }
  }, {
    key: "getExpression",
    value: function () {
      this.enterInitialScopes();
      this.nextToken();
      var e = this.parseExpression();
      if (!this.match(127)) {
        this.unexpected();
      }
      this.finalizeRemainingComments();
      e.comments = this.state.comments;
      e.errors = this.state.errors;
      if (this.options.tokens) {
        e.tokens = this.tokens;
      }
      return e;
    }
  }, {
    key: "parseExpression",
    value: function (e, t) {
      var n = this;
      return e ? this.disallowInAnd(function () {
        return n.parseExpressionBase(t);
      }) : this.allowInAnd(function () {
        return n.parseExpressionBase(t);
      });
    }
  }, {
    key: "parseExpressionBase",
    value: function (e) {
      var t = this.state.start;
      var n = this.state.startLoc;
      var r = this.parseMaybeAssign(e);
      if (this.match(12)) {
        var i = this.startNodeAt(t, n);
        for (i.expressions = [r]; this.eat(12);) {
          i.expressions.push(this.parseMaybeAssign(e));
        }
        this.toReferencedList(i.expressions);
        return this.finishNode(i, "SequenceExpression");
      }
      return r;
    }
  }, {
    key: "parseMaybeAssignDisallowIn",
    value: function (e, t) {
      var n = this;
      return this.disallowInAnd(function () {
        return n.parseMaybeAssign(e, t);
      });
    }
  }, {
    key: "parseMaybeAssignAllowIn",
    value: function (e, t) {
      var n = this;
      return this.allowInAnd(function () {
        return n.parseMaybeAssign(e, t);
      });
    }
  }, {
    key: "setOptionalParametersError",
    value: function (e, t) {
      var n;
      e.optionalParameters = null != (n = null == t ? void 0 : t.pos) ? n : this.state.start;
    }
  }, {
    key: "parseMaybeAssign",
    value: function (e, t) {
      var n;
      var r = this.state.start;
      var i = this.state.startLoc;
      if (this.isContextual(97) && this.prodParam.hasYield) {
        var a = this.parseYield();
        if (t) {
          a = t.call(this, a, r, i);
        }
        return a;
      }
      if (e) {
        n = !1;
      } else {
        e = new Ve();
        n = !0;
      }
      var s = this.state.type;
      if (10 === s || J(s)) {
        this.state.potentialArrowAt = this.state.start;
      }
      var o;
      var l = this.parseMaybeConditional(e);
      if (t) {
        l = t.call(this, l, r, i);
      }
      if ((o = this.state.type) >= 27 && o <= 31) {
        var u = this.startNodeAt(r, i);
        var c = this.state.value;
        u.operator = c;
        if (this.match(27)) {
          u.left = this.toAssignable(l, !0);
          e.doubleProto = -1;
        } else {
          u.left = l;
        }
        if (e.shorthandAssign >= u.left.start) {
          e.shorthandAssign = -1;
        }
        this.checkLVal(l, "assignment expression");
        this.next();
        u.right = this.parseMaybeAssign();
        return this.finishNode(u, "AssignmentExpression");
      }
      if (n) {
        this.checkExpressionErrors(e, !0);
      }
      return l;
    }
  }, {
    key: "parseMaybeConditional",
    value: function (e) {
      var t = this.state.start;
      var n = this.state.startLoc;
      var r = this.state.potentialArrowAt;
      var i = this.parseExprOps(e);
      return this.shouldExitDescending(i, r) ? i : this.parseConditional(i, t, n, e);
    }
  }, {
    key: "parseConditional",
    value: function (e, t, n, r) {
      if (this.eat(17)) {
        var i = this.startNodeAt(t, n);
        i.test = e;
        i.consequent = this.parseMaybeAssignAllowIn();
        this.expect(14);
        i.alternate = this.parseMaybeAssign();
        return this.finishNode(i, "ConditionalExpression");
      }
      return e;
    }
  }, {
    key: "parseMaybeUnaryOrPrivate",
    value: function (e) {
      return this.match(126) ? this.parsePrivateName() : this.parseMaybeUnary(e);
    }
  }, {
    key: "parseExprOps",
    value: function (e) {
      var t = this.state.start;
      var n = this.state.startLoc;
      var r = this.state.potentialArrowAt;
      var i = this.parseMaybeUnaryOrPrivate(e);
      return this.shouldExitDescending(i, r) ? i : this.parseExprOp(i, t, n, -1);
    }
  }, {
    key: "parseExprOp",
    value: function (e, t, n, r) {
      if (this.isPrivateName(e)) {
        var i = this.getPrivateNameSV(e);
        var a = e.start;
        if (r >= ee(50) || !this.prodParam.hasIn || !this.match(50)) {
          this.raise(a, k.PrivateInExpectedIn, i);
        }
        this.classScope.usePrivateName(i, a);
      }
      var s;
      var o = this.state.type;
      if ((s = o) >= 35 && s <= 51 && (this.prodParam.hasIn || !this.match(50))) {
        var l = ee(o);
        if (l > r) {
          if (35 === o) {
            this.expectPlugin("pipelineOperator");
            if (this.state.inFSharpPipelineDirectBody) {
              return e;
            }
            this.checkPipelineAtInfixOperator(e, t);
          }
          var u = this.startNodeAt(t, n);
          u.left = e;
          u.operator = this.state.value;
          var c = 37 === o || 38 === o;
          var p = 36 === o;
          if (p) {
            l = ee(38);
          }
          this.next();
          if (35 === o && "minimal" === this.getPluginOption("pipelineOperator", "proposal") && 88 === this.state.type && this.prodParam.hasAwait) {
            throw this.raise(this.state.start, k.UnexpectedAwaitAfterPipelineBody);
          }
          u.right = this.parseExprOpRightExpr(o, l);
          this.finishNode(u, c || p ? "LogicalExpression" : "BinaryExpression");
          var f = this.state.type;
          if (p && (37 === f || 38 === f) || c && 36 === f) {
            throw this.raise(this.state.start, k.MixingCoalesceWithLogical);
          }
          return this.parseExprOp(u, t, n, r);
        }
      }
      return e;
    }
  }, {
    key: "parseExprOpRightExpr",
    value: function (e, t) {
      var n = this;
      var r = this.state.start;
      var i = this.state.startLoc;
      switch (e) {
        case 35:
          switch (this.getPluginOption("pipelineOperator", "proposal")) {
            case "hack":
              return this.withTopicBindingContext(function () {
                return n.parseHackPipeBody();
              });
            case "smart":
              return this.withTopicBindingContext(function () {
                if (n.prodParam.hasYield && n.isContextual(97)) {
                  throw n.raise(n.state.start, k.PipeBodyIsTighter, n.state.value);
                }
                return n.parseSmartPipelineBodyInStyle(n.parseExprOpBaseRightExpr(e, t), r, i);
              });
            case "fsharp":
              return this.withSoloAwaitPermittingContext(function () {
                return n.parseFSharpPipelineBody(t);
              });
          }
        default:
          return this.parseExprOpBaseRightExpr(e, t);
      }
    }
  }, {
    key: "parseExprOpBaseRightExpr",
    value: function (e, t) {
      var n = this.state.start;
      var r = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), n, r, 49 === e ? t - 1 : t);
    }
  }, {
    key: "parseHackPipeBody",
    value: function () {
      var e;
      var t = this.state.start;
      var n = this.parseMaybeAssign();
      if (!(!Et.has(n.type) || null != (e = n.extra) && e.parenthesized)) {
        this.raise(t, k.PipeUnparenthesizedBody, Et.get(n.type));
      }
      if (!this.topicReferenceWasUsedInCurrentContext()) {
        this.raise(t, k.PipeTopicUnused);
      }
      return n;
    }
  }, {
    key: "checkExponentialAfterUnary",
    value: function (e) {
      if (this.match(49)) {
        this.raise(e.argument.start, k.UnexpectedTokenUnaryExponentiation);
      }
    }
  }, {
    key: "parseMaybeUnary",
    value: function (e, t) {
      var n = this.state.start;
      var r = this.state.startLoc;
      var i = this.isContextual(88);
      if (i && this.isAwaitAllowed()) {
        this.next();
        var a = this.parseAwait(n, r);
        if (!t) {
          this.checkExponentialAfterUnary(a);
        }
        return a;
      }
      var s;
      var o = this.match(32);
      var l = this.startNode();
      s = this.state.type;
      if (W[s]) {
        l.operator = this.state.value;
        l.prefix = !0;
        if (this.match(64)) {
          this.expectPlugin("throwExpressions");
        }
        var u = this.match(81);
        this.next();
        l.argument = this.parseMaybeUnary(null, !0);
        this.checkExpressionErrors(e, !0);
        if (this.state.strict && u) {
          var c = l.argument;
          if ("Identifier" === c.type) {
            this.raise(l.start, k.StrictDelete);
          } else {
            if (this.hasPropertyAsPrivateName(c)) {
              this.raise(l.start, k.DeletePrivateField);
            }
          }
        }
        if (!o) {
          if (!t) {
            this.checkExponentialAfterUnary(l);
          }
          return this.finishNode(l, "UnaryExpression");
        }
      }
      var p = this.parseUpdate(l, o, e);
      if (i) {
        var f = this.state.type;
        if ((this.hasPlugin("v8intrinsic") ? z(f) : z(f) && !this.match(46)) && !this.isAmbiguousAwait()) {
          this.raiseOverwrite(n, k.AwaitNotInAsyncContext);
          return this.parseAwait(n, r);
        }
      }
      return p;
    }
  }, {
    key: "parseUpdate",
    value: function (e, t, n) {
      if (t) {
        this.checkLVal(e.argument, "prefix operation");
        return this.finishNode(e, "UpdateExpression");
      }
      var r = this.state.start;
      var i = this.state.startLoc;
      var a = this.parseExprSubscripts(n);
      if (this.checkExpressionErrors(n, !1)) {
        return a;
      }
      for (; 32 === this.state.type && !this.canInsertSemicolon();) {
        var s = this.startNodeAt(r, i);
        s.operator = this.state.value;
        s.prefix = !1;
        s.argument = a;
        this.checkLVal(a, "postfix operation");
        this.next();
        a = this.finishNode(s, "UpdateExpression");
      }
      return a;
    }
  }, {
    key: "parseExprSubscripts",
    value: function (e) {
      var t = this.state.start;
      var n = this.state.startLoc;
      var r = this.state.potentialArrowAt;
      var i = this.parseExprAtom(e);
      return this.shouldExitDescending(i, r) ? i : this.parseSubscripts(i, t, n);
    }
  }, {
    key: "parseSubscripts",
    value: function (e, t, n, r) {
      var i = {
        optionalChainMember: !1,
        maybeAsyncArrow: this.atPossibleAsyncArrow(e),
        stop: !1
      };
      do {
        e = this.parseSubscript(e, t, n, r, i);
        i.maybeAsyncArrow = !1;
      } while (!i.stop);
      return e;
    }
  }, {
    key: "parseSubscript",
    value: function (e, t, n, r, i) {
      if (!r && this.eat(15)) {
        return this.parseBind(e, t, n, r, i);
      }
      if (this.match(22)) {
        return this.parseTaggedTemplateExpression(e, t, n, i);
      }
      var a = !1;
      if (this.match(18)) {
        if (r && 40 === this.lookaheadCharCode()) {
          i.stop = !0;
          return e;
        }
        i.optionalChainMember = a = !0;
        this.next();
      }
      if (!r && this.match(10)) {
        return this.parseCoverCallAndAsyncArrowHead(e, t, n, i, a);
      }
      var s = this.eat(0);
      return s || a || this.eat(16) ? this.parseMember(e, t, n, i, s, a) : (i.stop = !0, e);
    }
  }, {
    key: "parseMember",
    value: function (e, t, n, r, i, a) {
      var s = this.startNodeAt(t, n);
      s.object = e;
      s.computed = i;
      var o = !i && this.match(126) && this.state.value;
      var l = i ? this.parseExpression() : o ? this.parsePrivateName() : this.parseIdentifier(!0);
      if (!1 !== o) {
        if ("Super" === s.object.type) {
          this.raise(t, k.SuperPrivateField);
        }
        this.classScope.usePrivateName(o, l.start);
      }
      s.property = l;
      if (i) {
        this.expect(3);
      }
      return r.optionalChainMember ? (s.optional = a, this.finishNode(s, "OptionalMemberExpression")) : this.finishNode(s, "MemberExpression");
    }
  }, {
    key: "parseBind",
    value: function (e, t, n, r, i) {
      var a = this.startNodeAt(t, n);
      a.object = e;
      a.callee = this.parseNoCallExpr();
      i.stop = !0;
      return this.parseSubscripts(this.finishNode(a, "BindExpression"), t, n, r);
    }
  }, {
    key: "parseCoverCallAndAsyncArrowHead",
    value: function (e, t, n, r, i) {
      var a = this.state.maybeInArrowParameters;
      var s = null;
      this.state.maybeInArrowParameters = !0;
      this.next();
      var o = this.startNodeAt(t, n);
      o.callee = e;
      if (r.maybeAsyncArrow) {
        this.expressionScope.enter(new Me(2));
        s = new Ve();
      }
      if (r.optionalChainMember) {
        o.optional = i;
      }
      o.arguments = i ? this.parseCallExpressionArguments(11) : this.parseCallExpressionArguments(11, "Import" === e.type, "Super" !== e.type, o, s);
      this.finishCallExpression(o, r.optionalChainMember);
      if (r.maybeAsyncArrow && this.shouldParseAsyncArrow() && !i) {
        r.stop = !0;
        this.expressionScope.validateAsPattern();
        this.expressionScope.exit();
        o = this.parseAsyncArrowFromCallExpression(this.startNodeAt(t, n), o);
      } else {
        if (r.maybeAsyncArrow) {
          this.checkExpressionErrors(s, !0);
          this.expressionScope.exit();
        }
        this.toReferencedArguments(o);
      }
      this.state.maybeInArrowParameters = a;
      return o;
    }
  }, {
    key: "toReferencedArguments",
    value: function (e, t) {
      this.toReferencedListDeep(e.arguments, t);
    }
  }, {
    key: "parseTaggedTemplateExpression",
    value: function (e, t, n, r) {
      var i = this.startNodeAt(t, n);
      i.tag = e;
      i.quasi = this.parseTemplate(!0);
      if (r.optionalChainMember) {
        this.raise(t, k.OptionalChainingNoTemplate);
      }
      return this.finishNode(i, "TaggedTemplateExpression");
    }
  }, {
    key: "atPossibleAsyncArrow",
    value: function (e) {
      return "Identifier" === e.type && "async" === e.name && this.state.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && e.start === this.state.potentialArrowAt;
    }
  }, {
    key: "finishCallExpression",
    value: function (e, t) {
      if ("Import" === e.callee.type) {
        if (2 === e.arguments.length) {
          if (!this.hasPlugin("moduleAttributes")) {
            this.expectPlugin("importAssertions");
          }
        }
        if (0 === e.arguments.length || e.arguments.length > 2) {
          this.raise(e.start, k.ImportCallArity, this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? "one or two arguments" : "one argument");
        } else {
          var n;
          var i = r(e.arguments);
          try {
            for (i.s(); !(n = i.n()).done;) {
              var a = n.value;
              if ("SpreadElement" === a.type) {
                this.raise(a.start, k.ImportCallSpreadArgument);
              }
            }
          } catch (s) {
            i.e(s);
          } finally {
            i.f();
          }
        }
      }
      return this.finishNode(e, t ? "OptionalCallExpression" : "CallExpression");
    }
  }, {
    key: "parseCallExpressionArguments",
    value: function (e, t, n, r, i) {
      var a = [];
      var s = !0;
      var o = this.state.inFSharpPipelineDirectBody;
      for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(e);) {
        if (s) {
          s = !1;
        } else if (this.expect(12), this.match(e)) {
          if (!(!t || this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes"))) {
            this.raise(this.state.lastTokStart, k.ImportCallArgumentTrailingComma);
          }
          if (r) {
            this.addExtra(r, "trailingComma", this.state.lastTokStart);
          }
          this.next();
          break;
        }
        a.push(this.parseExprListItem(!1, i, n));
      }
      this.state.inFSharpPipelineDirectBody = o;
      return a;
    }
  }, {
    key: "shouldParseAsyncArrow",
    value: function () {
      return this.match(19) && !this.canInsertSemicolon();
    }
  }, {
    key: "parseAsyncArrowFromCallExpression",
    value: function (e, t) {
      var n;
      this.resetPreviousNodeTrailingComments(t);
      this.expect(19);
      this.parseArrowExpression(e, t.arguments, !0, null == (n = t.extra) ? void 0 : n.trailingComma);
      if (t.innerComments) {
        E(e, t.innerComments);
      }
      if (t.callee.trailingComments) {
        E(e, t.callee.trailingComments);
      }
      return e;
    }
  }, {
    key: "parseNoCallExpr",
    value: function () {
      var e = this.state.start;
      var t = this.state.startLoc;
      return this.parseSubscripts(this.parseExprAtom(), e, t, !0);
    }
  }, {
    key: "parseExprAtom",
    value: function (e) {
      var t;
      var n = this.state.type;
      switch (n) {
        case 71:
          return this.parseSuper();
        case 75:
          t = this.startNode();
          this.next();
          return this.match(16) ? this.parseImportMetaProperty(t) : (this.match(10) || this.raise(this.state.lastTokStart, k.UnsupportedImport), this.finishNode(t, "Import"));
        case 70:
          t = this.startNode();
          this.next();
          return this.finishNode(t, "ThisExpression");
        case 82:
          return this.parseDo(this.startNode(), !1);
        case 48:
        case 29:
          this.readRegexp();
          return this.parseRegExpLiteral(this.state.value);
        case 122:
          return this.parseNumericLiteral(this.state.value);
        case 123:
          return this.parseBigIntLiteral(this.state.value);
        case 124:
          return this.parseDecimalLiteral(this.state.value);
        case 121:
          return this.parseStringLiteral(this.state.value);
        case 76:
          return this.parseNullLiteral();
        case 77:
          return this.parseBooleanLiteral(!0);
        case 78:
          return this.parseBooleanLiteral(!1);
        case 10:
          var r = this.state.potentialArrowAt === this.state.start;
          return this.parseParenAndDistinguishExpression(r);
        case 2:
        case 1:
          return this.parseArrayLike(2 === this.state.type ? 4 : 3, !1, !0, e);
        case 0:
          return this.parseArrayLike(3, !0, !1, e);
        case 6:
        case 7:
          return this.parseObjectLike(6 === this.state.type ? 9 : 8, !1, !0, e);
        case 5:
          return this.parseObjectLike(8, !1, !1, e);
        case 60:
          return this.parseFunctionOrFunctionSent();
        case 24:
          this.parseDecorators();
        case 72:
          t = this.startNode();
          this.takeDecorators(t);
          return this.parseClass(t, !1);
        case 69:
          return this.parseNewOrNewTarget();
        case 22:
          return this.parseTemplate(!1);
        case 15:
          t = this.startNode();
          this.next();
          t.object = null;
          var i = t.callee = this.parseNoCallExpr();
          if ("MemberExpression" === i.type) {
            return this.finishNode(t, "BindExpression");
          }
          throw this.raise(i.start, k.UnsupportedBind);
        case 126:
          this.raise(this.state.start, k.PrivateInExpectedIn, this.state.value);
          return this.parsePrivateName();
        case 31:
          return this.parseTopicReferenceThenEqualsSign(46, "%");
        case 30:
          return this.parseTopicReferenceThenEqualsSign(40, "^");
        case 40:
        case 46:
        case 25:
          var a = this.getPluginOption("pipelineOperator", "proposal");
          if (a) {
            return this.parseTopicReference(a);
          }
        case 43:
          if ("<" === this.state.value) {
            var s = this.input.codePointAt(this.nextTokenStart());
            if (ce(s) || 62 === s) {
              this.expectOnePlugin(["jsx", "flow", "typescript"]);
            }
          }
        default:
          if (J(n)) {
            if (this.isContextual(115) && 123 === this.lookaheadCharCode() && !this.hasFollowingLineBreak()) {
              return this.parseModuleExpression();
            }
            var o = this.state.potentialArrowAt === this.state.start;
            var l = this.state.containsEsc;
            var u = this.parseIdentifier();
            if (!l && "async" === u.name && !this.canInsertSemicolon()) {
              var c = this.state.type;
              if (60 === c) {
                this.resetPreviousNodeTrailingComments(u);
                this.next();
                return this.parseFunction(this.startNodeAtNode(u), void 0, !0);
              }
              if (J(c)) {
                return 61 === this.lookaheadCharCode() ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(u)) : u;
              }
              if (82 === c) {
                this.resetPreviousNodeTrailingComments(u);
                return this.parseDo(this.startNodeAtNode(u), !0);
              }
            }
            return o && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(u), [u], !1)) : u;
          }
          throw this.unexpected();
      }
    }
  }, {
    key: "parseTopicReferenceThenEqualsSign",
    value: function (e, t) {
      var n = this.getPluginOption("pipelineOperator", "proposal");
      if (n) {
        this.state.type = e;
        this.state.value = t;
        this.state.pos--;
        this.state.end--;
        this.state.endLoc.column--;
        return this.parseTopicReference(n);
      }
      throw this.unexpected();
    }
  }, {
    key: "parseTopicReference",
    value: function (e) {
      var t = this.startNode();
      var n = this.state.start;
      var r = this.state.type;
      this.next();
      return this.finishTopicReference(t, n, e, r);
    }
  }, {
    key: "finishTopicReference",
    value: function (e, t, n, r) {
      var i;
      if (this.testTopicReferenceConfiguration(n, t, r)) {
        i = "smart" === n ? "PipelinePrimaryTopicReference" : "TopicReference";
        if (!this.topicReferenceIsAllowedInCurrentContext()) {
          if ("smart" === n) {
            this.raise(t, k.PrimaryTopicNotAllowed);
          } else {
            this.raise(t, k.PipeTopicUnbound);
          }
        }
        this.registerTopicReference();
        return this.finishNode(e, i);
      }
      throw this.raise(t, k.PipeTopicUnconfiguredToken, Z(r));
    }
  }, {
    key: "testTopicReferenceConfiguration",
    value: function (e, t, n) {
      switch (e) {
        case "hack":
          var r = this.getPluginOption("pipelineOperator", "topicToken");
          return Z(n) === r;
        case "smart":
          return 25 === n;
        default:
          throw this.raise(t, k.PipeTopicRequiresHackPipes);
      }
    }
  }, {
    key: "parseAsyncArrowUnaryFunction",
    value: function (e) {
      this.prodParam.enter(Ue(!0, this.prodParam.hasYield));
      var t = [this.parseIdentifier()];
      this.prodParam.exit();
      if (this.hasPrecedingLineBreak()) {
        this.raise(this.state.pos, k.LineTerminatorBeforeArrow);
      }
      this.expect(19);
      this.parseArrowExpression(e, t, !0);
      return e;
    }
  }, {
    key: "parseDo",
    value: function (e, t) {
      this.expectPlugin("doExpressions");
      if (t) {
        this.expectPlugin("asyncDoExpressions");
      }
      e.async = t;
      this.next();
      var n = this.state.labels;
      this.state.labels = [];
      if (t) {
        this.prodParam.enter(2);
        e.body = this.parseBlock();
        this.prodParam.exit();
      } else {
        e.body = this.parseBlock();
      }
      this.state.labels = n;
      return this.finishNode(e, "DoExpression");
    }
  }, {
    key: "parseSuper",
    value: function () {
      var e = this.startNode();
      this.next();
      if (!this.match(10) || this.scope.allowDirectSuper || this.options.allowSuperOutsideMethod) {
        if (!(this.scope.allowSuper || this.options.allowSuperOutsideMethod)) {
          this.raise(e.start, k.UnexpectedSuper);
        }
      } else {
        this.raise(e.start, k.SuperNotAllowed);
      }
      if (!(this.match(10) || this.match(0) || this.match(16))) {
        this.raise(e.start, k.UnsupportedSuper);
      }
      return this.finishNode(e, "Super");
    }
  }, {
    key: "parseMaybePrivateName",
    value: function (e) {
      return this.match(126) ? (e || this.raise(this.state.start + 1, k.UnexpectedPrivateField), this.parsePrivateName()) : this.parseIdentifier(!0);
    }
  }, {
    key: "parsePrivateName",
    value: function () {
      var e = this.startNode();
      var t = this.startNodeAt(this.state.start + 1, new T(this.state.curLine, this.state.start + 1 - this.state.lineStart));
      var n = this.state.value;
      this.next();
      e.id = this.createIdentifier(t, n);
      return this.finishNode(e, "PrivateName");
    }
  }, {
    key: "parseFunctionOrFunctionSent",
    value: function () {
      var e = this.startNode();
      this.next();
      if (this.prodParam.hasYield && this.match(16)) {
        var t = this.createIdentifier(this.startNodeAtNode(e), "function");
        this.next();
        if (this.match(94)) {
          this.expectPlugin("functionSent");
        } else {
          if (!this.hasPlugin("functionSent")) {
            this.unexpected();
          }
        }
        return this.parseMetaProperty(e, t, "sent");
      }
      return this.parseFunction(e);
    }
  }, {
    key: "parseMetaProperty",
    value: function (e, t, n) {
      e.meta = t;
      var r = this.state.containsEsc;
      e.property = this.parseIdentifier(!0);
      if (e.property.name !== n || r) {
        this.raise(e.property.start, k.UnsupportedMetaProperty, t.name, n);
      }
      return this.finishNode(e, "MetaProperty");
    }
  }, {
    key: "parseImportMetaProperty",
    value: function (e) {
      var t = this.createIdentifier(this.startNodeAtNode(e), "import");
      this.next();
      if (this.isContextual(92)) {
        if (!this.inModule) {
          this.raise(t.start, w.ImportMetaOutsideModule);
        }
        this.sawUnambiguousESM = !0;
      }
      return this.parseMetaProperty(e, t, "meta");
    }
  }, {
    key: "parseLiteralAtNode",
    value: function (e, t, n) {
      this.addExtra(n, "rawValue", e);
      this.addExtra(n, "raw", this.input.slice(n.start, this.state.end));
      n.value = e;
      this.next();
      return this.finishNode(n, t);
    }
  }, {
    key: "parseLiteral",
    value: function (e, t) {
      var n = this.startNode();
      return this.parseLiteralAtNode(e, t, n);
    }
  }, {
    key: "parseStringLiteral",
    value: function (e) {
      return this.parseLiteral(e, "StringLiteral");
    }
  }, {
    key: "parseNumericLiteral",
    value: function (e) {
      return this.parseLiteral(e, "NumericLiteral");
    }
  }, {
    key: "parseBigIntLiteral",
    value: function (e) {
      return this.parseLiteral(e, "BigIntLiteral");
    }
  }, {
    key: "parseDecimalLiteral",
    value: function (e) {
      return this.parseLiteral(e, "DecimalLiteral");
    }
  }, {
    key: "parseRegExpLiteral",
    value: function (e) {
      var t = this.parseLiteral(e.value, "RegExpLiteral");
      t.pattern = e.pattern;
      t.flags = e.flags;
      return t;
    }
  }, {
    key: "parseBooleanLiteral",
    value: function (e) {
      var t = this.startNode();
      t.value = e;
      this.next();
      return this.finishNode(t, "BooleanLiteral");
    }
  }, {
    key: "parseNullLiteral",
    value: function () {
      var e = this.startNode();
      this.next();
      return this.finishNode(e, "NullLiteral");
    }
  }, {
    key: "parseParenAndDistinguishExpression",
    value: function (e) {
      var t;
      var n = this.state.start;
      var r = this.state.startLoc;
      this.next();
      this.expressionScope.enter(new Me(1));
      var i = this.state.maybeInArrowParameters;
      var a = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = !0;
      this.state.inFSharpPipelineDirectBody = !1;
      for (var s, o, l = this.state.start, u = this.state.startLoc, c = [], p = new Ve(), f = !0; !this.match(11);) {
        if (f) {
          f = !1;
        } else if (this.expect(12, -1 === p.optionalParameters ? null : p.optionalParameters), this.match(11)) {
          o = this.state.start;
          break;
        }
        if (this.match(21)) {
          var d = this.state.start;
          var h = this.state.startLoc;
          s = this.state.start;
          c.push(this.parseParenItem(this.parseRestBinding(), d, h));
          this.checkCommaAfterRest(41);
          break;
        }
        c.push(this.parseMaybeAssignAllowIn(p, this.parseParenItem));
      }
      var y = this.state.lastTokEnd;
      var m = this.state.lastTokEndLoc;
      this.expect(11);
      this.state.maybeInArrowParameters = i;
      this.state.inFSharpPipelineDirectBody = a;
      var v = this.startNodeAt(n, r);
      if (e && this.shouldParseArrow(c) && (v = this.parseArrow(v))) {
        this.expressionScope.validateAsPattern();
        this.expressionScope.exit();
        this.parseArrowExpression(v, c, !1);
        return v;
      }
      this.expressionScope.exit();
      if (!c.length) {
        this.unexpected(this.state.lastTokStart);
      }
      if (o) {
        this.unexpected(o);
      }
      if (s) {
        this.unexpected(s);
      }
      this.checkExpressionErrors(p, !0);
      this.toReferencedListDeep(c, !0);
      if (c.length > 1) {
        (t = this.startNodeAt(l, u)).expressions = c;
        this.finishNode(t, "SequenceExpression");
        this.resetEndLocation(t, y, m);
      } else {
        t = c[0];
      }
      if (!this.options.createParenthesizedExpressions) {
        this.addExtra(t, "parenthesized", !0);
        this.addExtra(t, "parenStart", n);
        this.takeSurroundingComments(t, n, this.state.lastTokEnd);
        return t;
      }
      var g = this.startNodeAt(n, r);
      g.expression = t;
      this.finishNode(g, "ParenthesizedExpression");
      return g;
    }
  }, {
    key: "shouldParseArrow",
    value: function (e) {
      return !this.canInsertSemicolon();
    }
  }, {
    key: "parseArrow",
    value: function (e) {
      if (this.eat(19)) {
        return e;
      }
    }
  }, {
    key: "parseParenItem",
    value: function (e, t, n) {
      return e;
    }
  }, {
    key: "parseNewOrNewTarget",
    value: function () {
      var e = this.startNode();
      this.next();
      if (this.match(16)) {
        var t = this.createIdentifier(this.startNodeAtNode(e), "new");
        this.next();
        var n = this.parseMetaProperty(e, t, "target");
        if (!(this.scope.inNonArrowFunction || this.scope.inClass)) {
          this.raise(n.start, k.UnexpectedNewTarget);
        }
        return n;
      }
      return this.parseNew(e);
    }
  }, {
    key: "parseNew",
    value: function (e) {
      e.callee = this.parseNoCallExpr();
      if ("Import" === e.callee.type) {
        this.raise(e.callee.start, k.ImportCallNotNewExpression);
      } else {
        if (this.isOptionalChain(e.callee)) {
          this.raise(this.state.lastTokEnd, k.OptionalChainingNoNew);
        } else {
          if (this.eat(18)) {
            this.raise(this.state.start, k.OptionalChainingNoNew);
          }
        }
      }
      this.parseNewArguments(e);
      return this.finishNode(e, "NewExpression");
    }
  }, {
    key: "parseNewArguments",
    value: function (e) {
      if (this.eat(10)) {
        var t = this.parseExprList(11);
        this.toReferencedList(t);
        e.arguments = t;
      } else {
        e.arguments = [];
      }
    }
  }, {
    key: "parseTemplateElement",
    value: function (e) {
      var t = this.startNode();
      if (null === this.state.value) {
        if (!e) {
          this.raise(this.state.start + 1, k.InvalidEscapeSequenceTemplate);
        }
      }
      t.value = {
        raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
        cooked: this.state.value
      };
      this.next();
      t.tail = this.match(22);
      return this.finishNode(t, "TemplateElement");
    }
  }, {
    key: "parseTemplate",
    value: function (e) {
      var t = this.startNode();
      this.next();
      t.expressions = [];
      var n = this.parseTemplateElement(e);
      for (t.quasis = [n]; !n.tail;) {
        this.expect(23);
        t.expressions.push(this.parseTemplateSubstitution());
        this.expect(8);
        t.quasis.push(n = this.parseTemplateElement(e));
      }
      this.next();
      return this.finishNode(t, "TemplateLiteral");
    }
  }, {
    key: "parseTemplateSubstitution",
    value: function () {
      return this.parseExpression();
    }
  }, {
    key: "parseObjectLike",
    value: function (e, t, n, r) {
      if (n) {
        this.expectPlugin("recordAndTuple");
      }
      var i = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      var a = Object.create(null);
      var s = !0;
      var o = this.startNode();
      for (o.properties = [], this.next(); !this.match(e);) {
        if (s) {
          s = !1;
        } else if (this.expect(12), this.match(e)) {
          this.addExtra(o, "trailingComma", this.state.lastTokStart);
          break;
        }
        var l = this.parsePropertyDefinition(t, r);
        if (!t) {
          this.checkProto(l, n, a, r);
        }
        if (n && !this.isObjectProperty(l) && "SpreadElement" !== l.type) {
          this.raise(l.start, k.InvalidRecordProperty);
        }
        if (l.shorthand) {
          this.addExtra(l, "shorthand", !0);
        }
        o.properties.push(l);
      }
      this.next();
      this.state.inFSharpPipelineDirectBody = i;
      var u = "ObjectExpression";
      if (t) {
        u = "ObjectPattern";
      } else {
        if (n) {
          u = "RecordExpression";
        }
      }
      return this.finishNode(o, u);
    }
  }, {
    key: "maybeAsyncOrAccessorProp",
    value: function (e) {
      return !e.computed && "Identifier" === e.key.type && (this.isLiteralPropertyName() || this.match(0) || this.match(47));
    }
  }, {
    key: "parsePropertyDefinition",
    value: function (e, t) {
      var n = [];
      if (this.match(24)) {
        for (this.hasPlugin("decorators") && this.raise(this.state.start, k.UnsupportedPropertyDecorator); this.match(24);) {
          n.push(this.parseDecorator());
        }
      }
      var r;
      var i;
      var a = this.startNode();
      var s = !1;
      var o = !1;
      var l = !1;
      if (this.match(21)) {
        if (n.length) {
          this.unexpected();
        }
        return e ? (this.next(), a.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(a, "RestElement")) : this.parseSpread();
      }
      if (n.length) {
        a.decorators = n;
        n = [];
      }
      a.method = !1;
      if (e || t) {
        r = this.state.start;
        i = this.state.startLoc;
      }
      if (!e) {
        s = this.eat(47);
      }
      var u = this.state.containsEsc;
      var c = this.parsePropertyName(a, !1);
      if (!e && !s && !u && this.maybeAsyncOrAccessorProp(a)) {
        var p = c.name;
        if (!("async" !== p || this.hasPrecedingLineBreak())) {
          o = !0;
          this.resetPreviousNodeTrailingComments(c);
          s = this.eat(47);
          this.parsePropertyName(a, !1);
        }
        if (!("get" !== p && "set" !== p)) {
          l = !0;
          this.resetPreviousNodeTrailingComments(c);
          a.kind = p;
          if (this.match(47)) {
            s = !0;
            this.raise(this.state.pos, k.AccessorIsGenerator, p);
            this.next();
          }
          this.parsePropertyName(a, !1);
        }
      }
      this.parseObjPropValue(a, r, i, s, o, e, l, t);
      return a;
    }
  }, {
    key: "getGetterSetterExpectedParamCount",
    value: function (e) {
      return "get" === e.kind ? 0 : 1;
    }
  }, {
    key: "getObjectOrClassMethodParams",
    value: function (e) {
      return e.params;
    }
  }, {
    key: "checkGetterSetterParams",
    value: function (e) {
      var t;
      var n = this.getGetterSetterExpectedParamCount(e);
      var r = this.getObjectOrClassMethodParams(e);
      var i = e.start;
      if (r.length !== n) {
        if ("get" === e.kind) {
          this.raise(i, k.BadGetterArity);
        } else {
          this.raise(i, k.BadSetterArity);
        }
      }
      if ("set" === e.kind && "RestElement" === (null == (t = r[r.length - 1]) ? void 0 : t.type)) {
        this.raise(i, k.BadSetterRestParameter);
      }
    }
  }, {
    key: "parseObjectMethod",
    value: function (e, t, n, r, i) {
      return i ? (this.parseMethod(e, t, !1, !1, !1, "ObjectMethod"), this.checkGetterSetterParams(e), e) : n || t || this.match(10) ? (r && this.unexpected(), e.kind = "method", e.method = !0, this.parseMethod(e, t, n, !1, !1, "ObjectMethod")) : void 0;
    }
  }, {
    key: "parseObjectProperty",
    value: function (e, t, n, r, i) {
      e.shorthand = !1;
      return this.eat(14) ? (e.value = r ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(i), this.finishNode(e, "ObjectProperty")) : e.computed || "Identifier" !== e.key.type ? void 0 : (this.checkReservedWord(e.key.name, e.key.start, !0, !1), r ? e.value = this.parseMaybeDefault(t, n, He(e.key)) : this.match(27) && i ? (-1 === i.shorthandAssign && (i.shorthandAssign = this.state.start), e.value = this.parseMaybeDefault(t, n, He(e.key))) : e.value = He(e.key), e.shorthand = !0, this.finishNode(e, "ObjectProperty"));
    }
  }, {
    key: "parseObjPropValue",
    value: function (e, t, n, r, i, a, s, o) {
      var l = this.parseObjectMethod(e, r, i, a, s) || this.parseObjectProperty(e, t, n, a, o);
      if (!l) {
        this.unexpected();
      }
      return l;
    }
  }, {
    key: "parsePropertyName",
    value: function (e, t) {
      if (this.eat(0)) {
        e.computed = !0;
        e.key = this.parseMaybeAssignAllowIn();
        this.expect(3);
      } else {
        var n = this.state.inPropertyName;
        this.state.inPropertyName = !0;
        var r = this.state.type;
        e.key = 122 === r || 121 === r || 123 === r || 124 === r ? this.parseExprAtom() : this.parseMaybePrivateName(t);
        if (126 !== r) {
          e.computed = !1;
        }
        this.state.inPropertyName = n;
      }
      return e.key;
    }
  }, {
    key: "initFunction",
    value: function (e, t) {
      e.id = null;
      e.generator = !1;
      e.async = !!t;
    }
  }, {
    key: "parseMethod",
    value: function (e, t, n, r, i, a) {
      var s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      this.initFunction(e, n);
      e.generator = !!t;
      var o = r;
      this.scope.enter(18 | (s ? 64 : 0) | (i ? 32 : 0));
      this.prodParam.enter(Ue(n, e.generator));
      this.parseFunctionParams(e, o);
      this.parseFunctionBodyAndFinish(e, a, !0);
      this.prodParam.exit();
      this.scope.exit();
      return e;
    }
  }, {
    key: "parseArrayLike",
    value: function (e, t, n, r) {
      if (n) {
        this.expectPlugin("recordAndTuple");
      }
      var i = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      var a = this.startNode();
      this.next();
      a.elements = this.parseExprList(e, !n, r, a);
      this.state.inFSharpPipelineDirectBody = i;
      return this.finishNode(a, n ? "TupleExpression" : "ArrayExpression");
    }
  }, {
    key: "parseArrowExpression",
    value: function (e, t, n, r) {
      this.scope.enter(6);
      var i = Ue(n, !1);
      if (!this.match(0) && this.prodParam.hasIn) {
        i |= 8;
      }
      this.prodParam.enter(i);
      this.initFunction(e, n);
      var a = this.state.maybeInArrowParameters;
      if (t) {
        this.state.maybeInArrowParameters = !0;
        this.setArrowFunctionParameters(e, t, r);
      }
      this.state.maybeInArrowParameters = !1;
      this.parseFunctionBody(e, !0);
      this.prodParam.exit();
      this.scope.exit();
      this.state.maybeInArrowParameters = a;
      return this.finishNode(e, "ArrowFunctionExpression");
    }
  }, {
    key: "setArrowFunctionParameters",
    value: function (e, t, n) {
      e.params = this.toAssignableList(t, n, !1);
    }
  }, {
    key: "parseFunctionBodyAndFinish",
    value: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      this.parseFunctionBody(e, !1, n);
      this.finishNode(e, t);
    }
  }, {
    key: "parseFunctionBody",
    value: function (e, t) {
      var n = this;
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      var i = t && !this.match(5);
      this.expressionScope.enter(Fe());
      if (i) {
        e.body = this.parseMaybeAssign();
        this.checkParams(e, !1, t, !1);
      } else {
        var a = this.state.strict;
        var s = this.state.labels;
        this.state.labels = [];
        this.prodParam.enter(4 | this.prodParam.currentFlags());
        e.body = this.parseBlock(!0, !1, function (i) {
          var s = !n.isSimpleParamList(e.params);
          if (i && s) {
            var o = "method" !== e.kind && "constructor" !== e.kind || !e.key ? e.start : e.key.end;
            n.raise(o, k.IllegalLanguageModeDirective);
          }
          var l = !a && n.state.strict;
          n.checkParams(e, !n.state.strict && !t && !r && !s, t, l);
          if (n.state.strict && e.id) {
            n.checkLVal(e.id, "function name", 65, void 0, void 0, l);
          }
        });
        this.prodParam.exit();
        this.expressionScope.exit();
        this.state.labels = s;
      }
    }
  }, {
    key: "isSimpleParamList",
    value: function (e) {
      for (var t = 0, n = e.length; t < n; t++) {
        if ("Identifier" !== e[t].type) {
          return !1;
        }
      }
      return !0;
    }
  }, {
    key: "checkParams",
    value: function (e, t, n) {
      var i;
      var a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      var s = new Set();
      var o = r(e.params);
      try {
        for (o.s(); !(i = o.n()).done;) {
          var l = i.value;
          this.checkLVal(l, "function parameter list", 5, t ? null : s, void 0, a);
        }
      } catch (u) {
        o.e(u);
      } finally {
        o.f();
      }
    }
  }, {
    key: "parseExprList",
    value: function (e, t, n, r) {
      for (var i = [], a = !0; !this.eat(e);) {
        if (a) {
          a = !1;
        } else if (this.expect(12), this.match(e)) {
          if (r) {
            this.addExtra(r, "trailingComma", this.state.lastTokStart);
          }
          this.next();
          break;
        }
        i.push(this.parseExprListItem(t, n));
      }
      return i;
    }
  }, {
    key: "parseExprListItem",
    value: function (e, t, n) {
      var r;
      if (this.match(12)) {
        if (!e) {
          this.raise(this.state.pos, k.UnexpectedToken, ",");
        }
        r = null;
      } else if (this.match(21)) {
        var i = this.state.start;
        var a = this.state.startLoc;
        r = this.parseParenItem(this.parseSpread(t), i, a);
      } else if (this.match(17)) {
        this.expectPlugin("partialApplication");
        if (!n) {
          this.raise(this.state.start, k.UnexpectedArgumentPlaceholder);
        }
        var s = this.startNode();
        this.next();
        r = this.finishNode(s, "ArgumentPlaceholder");
      } else {
        r = this.parseMaybeAssignAllowIn(t, this.parseParenItem);
      }
      return r;
    }
  }, {
    key: "parseIdentifier",
    value: function (e) {
      var t = this.startNode();
      var n = this.parseIdentifierName(t.start, e);
      return this.createIdentifier(t, n);
    }
  }, {
    key: "createIdentifier",
    value: function (e, t) {
      e.name = t;
      e.loc.identifierName = t;
      return this.finishNode(e, "Identifier");
    }
  }, {
    key: "parseIdentifierName",
    value: function (e, t) {
      var n;
      var r = this.state;
      var i = r.start;
      var a = r.type;
      if (!X(a)) {
        throw this.unexpected();
      }
      n = this.state.value;
      if (t) {
        this.state.type = 120;
      } else {
        this.checkReservedWord(n, i, Q(a), !1);
      }
      this.next();
      return n;
    }
  }, {
    key: "checkReservedWord",
    value: function (e, t, n, r) {
      if (!(e.length > 10) && function (e) {
        return Se.has(e);
      }(e)) {
        if ("yield" === e) {
          if (this.prodParam.hasYield) {
            return void this.raise(t, k.YieldBindingIdentifier);
          }
        } else if ("await" === e) {
          if (this.prodParam.hasAwait) {
            return void this.raise(t, k.AwaitBindingIdentifier);
          }
          if (this.scope.inStaticBlock) {
            return void this.raise(t, k.AwaitBindingIdentifierInStaticBlock);
          }
          this.expressionScope.recordAsyncArrowParametersError(t, k.AwaitBindingIdentifier);
        } else if ("arguments" === e && this.scope.inClassAndNotInNonArrowFunction) {
          return void this.raise(t, k.ArgumentsInClass);
        }
        if (n && function (e) {
          return he.has(e);
        }(e)) {
          this.raise(t, k.UnexpectedKeyword, e);
        } else if ((this.state.strict ? r ? be : ge : ve)(e, this.inModule)) {
          this.raise(t, k.UnexpectedReservedWord, e);
        }
      }
    }
  }, {
    key: "isAwaitAllowed",
    value: function () {
      return !!this.prodParam.hasAwait || !(!this.options.allowAwaitOutsideFunction || this.scope.inFunction);
    }
  }, {
    key: "parseAwait",
    value: function (e, t) {
      var n = this.startNodeAt(e, t);
      this.expressionScope.recordParameterInitializerError(n.start, k.AwaitExpressionFormalParameter);
      if (this.eat(47)) {
        this.raise(n.start, k.ObsoleteAwaitStar);
      }
      if (!(this.scope.inFunction || this.options.allowAwaitOutsideFunction)) {
        if (this.isAmbiguousAwait()) {
          this.ambiguousScriptDifferentAst = !0;
        } else {
          this.sawUnambiguousESM = !0;
        }
      }
      if (!this.state.soloAwait) {
        n.argument = this.parseMaybeUnary(null, !0);
      }
      return this.finishNode(n, "AwaitExpression");
    }
  }, {
    key: "isAmbiguousAwait",
    value: function () {
      return this.hasPrecedingLineBreak() || this.match(45) || this.match(10) || this.match(0) || this.match(22) || this.match(125) || this.match(48) || this.hasPlugin("v8intrinsic") && this.match(46);
    }
  }, {
    key: "parseYield",
    value: function () {
      var e = this.startNode();
      this.expressionScope.recordParameterInitializerError(e.start, k.YieldInParameter);
      this.next();
      var t = !1;
      var n = null;
      if (!this.hasPrecedingLineBreak()) {
        switch (t = this.eat(47), this.state.type) {
          case 13:
          case 127:
          case 8:
          case 11:
          case 3:
          case 9:
          case 14:
          case 12:
            if (!t) {
              break;
            }
          default:
            n = this.parseMaybeAssign();
        }
      }
      e.delegate = t;
      e.argument = n;
      return this.finishNode(e, "YieldExpression");
    }
  }, {
    key: "checkPipelineAtInfixOperator",
    value: function (e, t) {
      if ("smart" === this.getPluginOption("pipelineOperator", "proposal") && "SequenceExpression" === e.type) {
        this.raise(t, k.PipelineHeadSequenceExpression);
      }
    }
  }, {
    key: "checkHackPipeBodyEarlyErrors",
    value: function (e) {
      if (!this.topicReferenceWasUsedInCurrentContext()) {
        this.raise(e, k.PipeTopicUnused);
      }
    }
  }, {
    key: "parseSmartPipelineBodyInStyle",
    value: function (e, t, n) {
      var r = this.startNodeAt(t, n);
      return this.isSimpleReference(e) ? (r.callee = e, this.finishNode(r, "PipelineBareFunction")) : (this.checkSmartPipeTopicBodyEarlyErrors(t), r.expression = e, this.finishNode(r, "PipelineTopicExpression"));
    }
  }, {
    key: "isSimpleReference",
    value: function (e) {
      switch (e.type) {
        case "MemberExpression":
          return !e.computed && this.isSimpleReference(e.object);
        case "Identifier":
          return !0;
        default:
          return !1;
      }
    }
  }, {
    key: "checkSmartPipeTopicBodyEarlyErrors",
    value: function (e) {
      if (this.match(19)) {
        throw this.raise(this.state.start, k.PipelineBodyNoArrow);
      }
      if (!this.topicReferenceWasUsedInCurrentContext()) {
        this.raise(e, k.PipelineTopicUnused);
      }
    }
  }, {
    key: "withTopicBindingContext",
    value: function (e) {
      var t = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 1,
        maxTopicIndex: null
      };
      try {
        return e();
      } finally {
        this.state.topicContext = t;
      }
    }
  }, {
    key: "withSmartMixTopicForbiddingContext",
    value: function (e) {
      if ("smart" !== this.getPluginOption("pipelineOperator", "proposal")) {
        return e();
      }
      var t = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      };
      try {
        return e();
      } finally {
        this.state.topicContext = t;
      }
    }
  }, {
    key: "withSoloAwaitPermittingContext",
    value: function (e) {
      var t = this.state.soloAwait;
      this.state.soloAwait = !0;
      try {
        return e();
      } finally {
        this.state.soloAwait = t;
      }
    }
  }, {
    key: "allowInAnd",
    value: function (e) {
      var t = this.prodParam.currentFlags();
      if (8 & ~t) {
        this.prodParam.enter(8 | t);
        try {
          return e();
        } finally {
          this.prodParam.exit();
        }
      }
      return e();
    }
  }, {
    key: "disallowInAnd",
    value: function (e) {
      var t = this.prodParam.currentFlags();
      if (8 & t) {
        this.prodParam.enter(-9 & t);
        try {
          return e();
        } finally {
          this.prodParam.exit();
        }
      }
      return e();
    }
  }, {
    key: "registerTopicReference",
    value: function () {
      this.state.topicContext.maxTopicIndex = 0;
    }
  }, {
    key: "topicReferenceIsAllowedInCurrentContext",
    value: function () {
      return this.state.topicContext.maxNumOfResolvableTopics >= 1;
    }
  }, {
    key: "topicReferenceWasUsedInCurrentContext",
    value: function () {
      return null != this.state.topicContext.maxTopicIndex && this.state.topicContext.maxTopicIndex >= 0;
    }
  }, {
    key: "parseFSharpPipelineBody",
    value: function (e) {
      var t = this.state.start;
      var n = this.state.startLoc;
      this.state.potentialArrowAt = this.state.start;
      var r = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !0;
      var i = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), t, n, e);
      this.state.inFSharpPipelineDirectBody = r;
      return i;
    }
  }, {
    key: "parseModuleExpression",
    value: function () {
      this.expectPlugin("moduleBlocks");
      var e = this.startNode();
      this.next();
      this.eat(5);
      var t = this.initializeScopes(!0);
      this.enterInitialScopes();
      var n = this.startNode();
      try {
        e.body = this.parseProgram(n, 8, "module");
      } finally {
        t();
      }
      this.eat(8);
      return this.finishNode(e, "ModuleExpression");
    }
  }]);
  return n;
}(St);
var Pt = {
  kind: "loop"
};
var At = {
  kind: "switch"
};
var kt = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
var wt = new RegExp("in(?:stanceof)?", "y");
var Ot = function (e) {
  o(n, e);
  var t = l(n);
  function n(e, a) {
    var s;
    p(this, n);
    e = function (e) {
      for (var t = {}, n = 0, r = Object.keys(Tt); n < r.length; n++) {
        var i = r[n];
        t[i] = e && null != e[i] ? e[i] : Tt[i];
      }
      return t;
    }(e);
    (s = t.call(this, e, a)).options = e;
    s.initializeScopes();
    s.plugins = function (e) {
      var t;
      var n = new Map();
      var a = r(e);
      try {
        for (a.s(); !(t = a.n()).done;) {
          var s = t.value;
          var o = Array.isArray(s) ? s : [s, {}];
          var l = i(o, 2);
          var u = l[0];
          var c = l[1];
          if (!n.has(u)) {
            n.set(u, c || {});
          }
        }
      } catch (p) {
        a.e(p);
      } finally {
        a.f();
      }
      return n;
    }(s.options.plugins);
    s.filename = e.sourceFilename;
    return s;
  }
  c(n, [{
    key: "getScopeHandler",
    value: function () {
      return xe;
    }
  }, {
    key: "parse",
    value: function () {
      this.enterInitialScopes();
      var e = this.startNode();
      var t = this.startNode();
      this.nextToken();
      e.errors = null;
      this.parseTopLevel(e, t);
      e.errors = this.state.errors;
      return e;
    }
  }]);
  return n;
}(function (e) {
  o(n, e);
  var t = l(n);
  function n() {
    p(this, n);
    return t.apply(this, arguments);
  }
  c(n, [{
    key: "parseTopLevel",
    value: function (e, t) {
      e.program = this.parseProgram(t);
      e.comments = this.state.comments;
      if (this.options.tokens) {
        e.tokens = function (e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            var r = n.type;
            if (126 !== r) {
              if ("number" === typeof r) {
                n.type = te(r);
              }
            } else {
              var i = n.loc;
              var a = n.start;
              var s = n.value;
              var o = n.end;
              var l = a + 1;
              var u = new T(i.start.line, i.start.column + 1);
              e.splice(t, 1, new Ne({
                type: te(25),
                value: "#",
                start: a,
                end: l,
                startLoc: i.start,
                endLoc: u
              }), new Ne({
                type: te(120),
                value: s,
                start: l,
                end: o,
                startLoc: u,
                endLoc: i.end
              }));
              t++;
            }
          }
          return e;
        }(this.tokens);
      }
      return this.finishNode(e, "File");
    }
  }, {
    key: "parseProgram",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 127;
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.options.sourceType;
      e.sourceType = n;
      e.interpreter = this.parseInterpreterDirective();
      this.parseBlockBody(e, !0, !0, t);
      if (this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0) {
        for (var r = 0, a = Array.from(this.scope.undefinedExports); r < a.length; r++) {
          var s = i(a[r], 1);
          var o = s[0];
          var l = this.scope.undefinedExports.get(o);
          this.raise(l, k.ModuleExportUndefined, o);
        }
      }
      return this.finishNode(e, "Program");
    }
  }, {
    key: "stmtToDirective",
    value: function (e) {
      var t = e;
      t.type = "Directive";
      t.value = t.expression;
      delete t.expression;
      var n = t.value;
      var r = this.input.slice(n.start, n.end);
      var i = n.value = r.slice(1, -1);
      this.addExtra(n, "raw", r);
      this.addExtra(n, "rawValue", i);
      n.type = "DirectiveLiteral";
      return t;
    }
  }, {
    key: "parseInterpreterDirective",
    value: function () {
      if (!this.match(26)) {
        return null;
      }
      var e = this.startNode();
      e.value = this.state.value;
      this.next();
      return this.finishNode(e, "InterpreterDirective");
    }
  }, {
    key: "isLet",
    value: function (e) {
      return !!this.isContextual(91) && this.isLetKeyword(e);
    }
  }, {
    key: "isLetKeyword",
    value: function (e) {
      var t = this.nextTokenStart();
      var n = this.codePointAtPos(t);
      if (92 === n || 91 === n) {
        return !0;
      }
      if (e) {
        return !1;
      }
      if (123 === n) {
        return !0;
      }
      if (ce(n)) {
        wt.lastIndex = t;
        if (wt.test(this.input)) {
          var r = this.codePointAtPos(wt.lastIndex);
          if (!pe(r) && 92 !== r) {
            return !1;
          }
        }
        return !0;
      }
      return !1;
    }
  }, {
    key: "parseStatement",
    value: function (e, t) {
      if (this.match(24)) {
        this.parseDecorators(!0);
      }
      return this.parseStatementContent(e, t);
    }
  }, {
    key: "parseStatementContent",
    value: function (e, t) {
      var n;
      var r = this.state.type;
      var i = this.startNode();
      switch (this.isLet(e) && (r = 66, n = "let"), r) {
        case 52:
          return this.parseBreakContinueStatement(i, !0);
        case 55:
          return this.parseBreakContinueStatement(i, !1);
        case 56:
          return this.parseDebuggerStatement(i);
        case 82:
          return this.parseDoStatement(i);
        case 83:
          return this.parseForStatement(i);
        case 60:
          if (46 === this.lookaheadCharCode()) {
            break;
          }
          if (e) {
            if (this.state.strict) {
              this.raise(this.state.start, k.StrictFunction);
            } else {
              if ("if" !== e && "label" !== e) {
                this.raise(this.state.start, k.SloppyFunction);
              }
            }
          }
          return this.parseFunctionStatement(i, !1, !e);
        case 72:
          if (e) {
            this.unexpected();
          }
          return this.parseClass(i, !0);
        case 61:
          return this.parseIfStatement(i);
        case 62:
          return this.parseReturnStatement(i);
        case 63:
          return this.parseSwitchStatement(i);
        case 64:
          return this.parseThrowStatement(i);
        case 65:
          return this.parseTryStatement(i);
        case 67:
        case 66:
          n = n || this.state.value;
          if (e && "var" !== n) {
            this.raise(this.state.start, k.UnexpectedLexicalDeclaration);
          }
          return this.parseVarStatement(i, n);
        case 84:
          return this.parseWhileStatement(i);
        case 68:
          return this.parseWithStatement(i);
        case 5:
          return this.parseBlock();
        case 13:
          return this.parseEmptyStatement(i);
        case 75:
          var a = this.lookaheadCharCode();
          if (40 === a || 46 === a) {
            break;
          }
        case 74:
          var s;
          if (!(this.options.allowImportExportEverywhere || t)) {
            this.raise(this.state.start, k.UnexpectedImportExport);
          }
          this.next();
          if (75 === r) {
            if (!("ImportDeclaration" !== (s = this.parseImport(i)).type || s.importKind && "value" !== s.importKind)) {
              this.sawUnambiguousESM = !0;
            }
          } else {
            if (!(("ExportNamedDeclaration" !== (s = this.parseExport(i)).type || s.exportKind && "value" !== s.exportKind) && ("ExportAllDeclaration" !== s.type || s.exportKind && "value" !== s.exportKind) && "ExportDefaultDeclaration" !== s.type)) {
              this.sawUnambiguousESM = !0;
            }
          }
          this.assertModuleNodeAllowed(i);
          return s;
        default:
          if (this.isAsyncFunction()) {
            if (e) {
              this.raise(this.state.start, k.AsyncFunctionInSingleStatementContext);
            }
            this.next();
            return this.parseFunctionStatement(i, !0, !e);
          }
      }
      var o = this.state.value;
      var l = this.parseExpression();
      return J(r) && "Identifier" === l.type && this.eat(14) ? this.parseLabeledStatement(i, o, l, e) : this.parseExpressionStatement(i, l);
    }
  }, {
    key: "assertModuleNodeAllowed",
    value: function (e) {
      if (!(this.options.allowImportExportEverywhere || this.inModule)) {
        this.raise(e.start, w.ImportOutsideModule);
      }
    }
  }, {
    key: "takeDecorators",
    value: function (e) {
      var t = this.state.decoratorStack[this.state.decoratorStack.length - 1];
      if (t.length) {
        e.decorators = t;
        this.resetStartLocationFromNode(e, t[0]);
        this.state.decoratorStack[this.state.decoratorStack.length - 1] = [];
      }
    }
  }, {
    key: "canHaveLeadingDecorator",
    value: function () {
      return this.match(72);
    }
  }, {
    key: "parseDecorators",
    value: function (e) {
      for (var t = this.state.decoratorStack[this.state.decoratorStack.length - 1]; this.match(24);) {
        var n = this.parseDecorator();
        t.push(n);
      }
      if (this.match(74)) {
        if (!e) {
          this.unexpected();
        }
        if (this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport")) {
          this.raise(this.state.start, k.DecoratorExportClass);
        }
      } else if (!this.canHaveLeadingDecorator()) {
        throw this.raise(this.state.start, k.UnexpectedLeadingDecorator);
      }
    }
  }, {
    key: "parseDecorator",
    value: function () {
      this.expectOnePlugin(["decorators-legacy", "decorators"]);
      var e = this.startNode();
      this.next();
      if (this.hasPlugin("decorators")) {
        this.state.decoratorStack.push([]);
        var t;
        var n = this.state.start;
        var r = this.state.startLoc;
        if (this.eat(10)) {
          t = this.parseExpression();
          this.expect(11);
        } else {
          for (t = this.parseIdentifier(!1); this.eat(16);) {
            var i = this.startNodeAt(n, r);
            i.object = t;
            i.property = this.parseIdentifier(!0);
            i.computed = !1;
            t = this.finishNode(i, "MemberExpression");
          }
        }
        e.expression = this.parseMaybeDecoratorArguments(t);
        this.state.decoratorStack.pop();
      } else {
        e.expression = this.parseExprSubscripts();
      }
      return this.finishNode(e, "Decorator");
    }
  }, {
    key: "parseMaybeDecoratorArguments",
    value: function (e) {
      if (this.eat(10)) {
        var t = this.startNodeAtNode(e);
        t.callee = e;
        t.arguments = this.parseCallExpressionArguments(11, !1);
        this.toReferencedList(t.arguments);
        return this.finishNode(t, "CallExpression");
      }
      return e;
    }
  }, {
    key: "parseBreakContinueStatement",
    value: function (e, t) {
      this.next();
      if (this.isLineTerminator()) {
        e.label = null;
      } else {
        e.label = this.parseIdentifier();
        this.semicolon();
      }
      this.verifyBreakContinue(e, t);
      return this.finishNode(e, t ? "BreakStatement" : "ContinueStatement");
    }
  }, {
    key: "verifyBreakContinue",
    value: function (e, t) {
      var n;
      for (n = 0; n < this.state.labels.length; ++n) {
        var r = this.state.labels[n];
        if (null == e.label || r.name === e.label.name) {
          if (null != r.kind && (t || "loop" === r.kind)) {
            break;
          }
          if (e.label && t) {
            break;
          }
        }
      }
      if (n === this.state.labels.length) {
        this.raise(e.start, k.IllegalBreakContinue, t ? "break" : "continue");
      }
    }
  }, {
    key: "parseDebuggerStatement",
    value: function (e) {
      this.next();
      this.semicolon();
      return this.finishNode(e, "DebuggerStatement");
    }
  }, {
    key: "parseHeaderExpression",
    value: function () {
      this.expect(10);
      var e = this.parseExpression();
      this.expect(11);
      return e;
    }
  }, {
    key: "parseDoStatement",
    value: function (e) {
      var t = this;
      this.next();
      this.state.labels.push(Pt);
      e.body = this.withSmartMixTopicForbiddingContext(function () {
        return t.parseStatement("do");
      });
      this.state.labels.pop();
      this.expect(84);
      e.test = this.parseHeaderExpression();
      this.eat(13);
      return this.finishNode(e, "DoWhileStatement");
    }
  }, {
    key: "parseForStatement",
    value: function (e) {
      this.next();
      this.state.labels.push(Pt);
      var t = -1;
      if (this.isAwaitAllowed() && this.eatContextual(88)) {
        t = this.state.lastTokStart;
      }
      this.scope.enter(0);
      this.expect(10);
      if (this.match(13)) {
        if (t > -1) {
          this.unexpected(t);
        }
        return this.parseFor(e, null);
      }
      var n = this.isContextual(91);
      var r = n && this.isLetKeyword();
      if (this.match(66) || this.match(67) || r) {
        var i = this.startNode();
        var a = r ? "let" : this.state.value;
        this.next();
        this.parseVar(i, !0, a);
        this.finishNode(i, "VariableDeclaration");
        return (this.match(50) || this.isContextual(93)) && 1 === i.declarations.length ? this.parseForIn(e, i, t) : (t > -1 && this.unexpected(t), this.parseFor(e, i));
      }
      var s = this.isContextual(87);
      var o = new Ve();
      var l = this.parseExpression(!0, o);
      var u = this.isContextual(93);
      if (u) {
        if (n) {
          this.raise(l.start, k.ForOfLet);
        } else {
          if (-1 === t && s && "Identifier" === l.type) {
            this.raise(l.start, k.ForOfAsync);
          }
        }
      }
      if (u || this.match(50)) {
        this.toAssignable(l, !0);
        var c = u ? "for-of statement" : "for-in statement";
        this.checkLVal(l, c);
        return this.parseForIn(e, l, t);
      }
      this.checkExpressionErrors(o, !0);
      if (t > -1) {
        this.unexpected(t);
      }
      return this.parseFor(e, l);
    }
  }, {
    key: "parseFunctionStatement",
    value: function (e, t, n) {
      this.next();
      return this.parseFunction(e, 1 | (n ? 0 : 2), t);
    }
  }, {
    key: "parseIfStatement",
    value: function (e) {
      this.next();
      e.test = this.parseHeaderExpression();
      e.consequent = this.parseStatement("if");
      e.alternate = this.eat(58) ? this.parseStatement("if") : null;
      return this.finishNode(e, "IfStatement");
    }
  }, {
    key: "parseReturnStatement",
    value: function (e) {
      if (!(this.prodParam.hasReturn || this.options.allowReturnOutsideFunction)) {
        this.raise(this.state.start, k.IllegalReturn);
      }
      this.next();
      if (this.isLineTerminator()) {
        e.argument = null;
      } else {
        e.argument = this.parseExpression();
        this.semicolon();
      }
      return this.finishNode(e, "ReturnStatement");
    }
  }, {
    key: "parseSwitchStatement",
    value: function (e) {
      this.next();
      e.discriminant = this.parseHeaderExpression();
      var t;
      var n;
      var r = e.cases = [];
      for (this.expect(5), this.state.labels.push(At), this.scope.enter(0); !this.match(8);) {
        if (this.match(53) || this.match(57)) {
          var i = this.match(53);
          if (t) {
            this.finishNode(t, "SwitchCase");
          }
          r.push(t = this.startNode());
          t.consequent = [];
          this.next();
          if (i) {
            t.test = this.parseExpression();
          } else {
            if (n) {
              this.raise(this.state.lastTokStart, k.MultipleDefaultsInSwitch);
            }
            n = !0;
            t.test = null;
          }
          this.expect(14);
        } else if (t) {
          t.consequent.push(this.parseStatement(null));
        } else {
          this.unexpected();
        }
      }
      this.scope.exit();
      if (t) {
        this.finishNode(t, "SwitchCase");
      }
      this.next();
      this.state.labels.pop();
      return this.finishNode(e, "SwitchStatement");
    }
  }, {
    key: "parseThrowStatement",
    value: function (e) {
      this.next();
      if (this.hasPrecedingLineBreak()) {
        this.raise(this.state.lastTokEnd, k.NewlineAfterThrow);
      }
      e.argument = this.parseExpression();
      this.semicolon();
      return this.finishNode(e, "ThrowStatement");
    }
  }, {
    key: "parseCatchClauseParam",
    value: function () {
      var e = this.parseBindingAtom();
      var t = "Identifier" === e.type;
      this.scope.enter(t ? 8 : 0);
      this.checkLVal(e, "catch clause", 9);
      return e;
    }
  }, {
    key: "parseTryStatement",
    value: function (e) {
      var t = this;
      this.next();
      e.block = this.parseBlock();
      e.handler = null;
      if (this.match(54)) {
        var n = this.startNode();
        this.next();
        if (this.match(10)) {
          this.expect(10);
          n.param = this.parseCatchClauseParam();
          this.expect(11);
        } else {
          n.param = null;
          this.scope.enter(0);
        }
        n.body = this.withSmartMixTopicForbiddingContext(function () {
          return t.parseBlock(!1, !1);
        });
        this.scope.exit();
        e.handler = this.finishNode(n, "CatchClause");
      }
      e.finalizer = this.eat(59) ? this.parseBlock() : null;
      if (!(e.handler || e.finalizer)) {
        this.raise(e.start, k.NoCatchOrFinally);
      }
      return this.finishNode(e, "TryStatement");
    }
  }, {
    key: "parseVarStatement",
    value: function (e, t) {
      this.next();
      this.parseVar(e, !1, t);
      this.semicolon();
      return this.finishNode(e, "VariableDeclaration");
    }
  }, {
    key: "parseWhileStatement",
    value: function (e) {
      var t = this;
      this.next();
      e.test = this.parseHeaderExpression();
      this.state.labels.push(Pt);
      e.body = this.withSmartMixTopicForbiddingContext(function () {
        return t.parseStatement("while");
      });
      this.state.labels.pop();
      return this.finishNode(e, "WhileStatement");
    }
  }, {
    key: "parseWithStatement",
    value: function (e) {
      var t = this;
      if (this.state.strict) {
        this.raise(this.state.start, k.StrictWith);
      }
      this.next();
      e.object = this.parseHeaderExpression();
      e.body = this.withSmartMixTopicForbiddingContext(function () {
        return t.parseStatement("with");
      });
      return this.finishNode(e, "WithStatement");
    }
  }, {
    key: "parseEmptyStatement",
    value: function (e) {
      this.next();
      return this.finishNode(e, "EmptyStatement");
    }
  }, {
    key: "parseLabeledStatement",
    value: function (e, t, n, i) {
      var a;
      var s = r(this.state.labels);
      try {
        for (s.s(); !(a = s.n()).done;) {
          if (a.value.name === t) {
            this.raise(n.start, k.LabelRedeclaration, t);
          }
        }
      } catch (p) {
        s.e(p);
      } finally {
        s.f();
      }
      for (var o, l = (o = this.state.type) >= 82 && o <= 84 ? "loop" : this.match(63) ? "switch" : null, u = this.state.labels.length - 1; u >= 0; u--) {
        var c = this.state.labels[u];
        if (c.statementStart !== e.start) {
          break;
        }
        c.statementStart = this.state.start;
        c.kind = l;
      }
      this.state.labels.push({
        name: t,
        kind: l,
        statementStart: this.state.start
      });
      e.body = this.parseStatement(i ? -1 === i.indexOf("label") ? i + "label" : i : "label");
      this.state.labels.pop();
      e.label = n;
      return this.finishNode(e, "LabeledStatement");
    }
  }, {
    key: "parseExpressionStatement",
    value: function (e, t) {
      e.expression = t;
      this.semicolon();
      return this.finishNode(e, "ExpressionStatement");
    }
  }, {
    key: "parseBlock",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      var n = arguments.length > 2 ? arguments[2] : void 0;
      var r = this.startNode();
      if (e) {
        this.state.strictErrors.clear();
      }
      this.expect(5);
      if (t) {
        this.scope.enter(0);
      }
      this.parseBlockBody(r, e, !1, 8, n);
      if (t) {
        this.scope.exit();
      }
      return this.finishNode(r, "BlockStatement");
    }
  }, {
    key: "isValidDirective",
    value: function (e) {
      return "ExpressionStatement" === e.type && "StringLiteral" === e.expression.type && !e.expression.extra.parenthesized;
    }
  }, {
    key: "parseBlockBody",
    value: function (e, t, n, r, i) {
      var a = e.body = [];
      var s = e.directives = [];
      this.parseBlockOrModuleBlockBody(a, t ? s : void 0, n, r, i);
    }
  }, {
    key: "parseBlockOrModuleBlockBody",
    value: function (e, t, n, r, i) {
      for (var a = this.state.strict, s = !1, o = !1; !this.match(r);) {
        var l = this.parseStatement(null, n);
        if (t && !o) {
          if (this.isValidDirective(l)) {
            var u = this.stmtToDirective(l);
            t.push(u);
            if (!(s || "use strict" !== u.value.value)) {
              s = !0;
              this.setStrict(!0);
            }
            continue;
          }
          o = !0;
          this.state.strictErrors.clear();
        }
        e.push(l);
      }
      if (i) {
        i.call(this, s);
      }
      if (!a) {
        this.setStrict(!1);
      }
      this.next();
    }
  }, {
    key: "parseFor",
    value: function (e, t) {
      var n = this;
      e.init = t;
      this.semicolon(!1);
      e.test = this.match(13) ? null : this.parseExpression();
      this.semicolon(!1);
      e.update = this.match(11) ? null : this.parseExpression();
      this.expect(11);
      e.body = this.withSmartMixTopicForbiddingContext(function () {
        return n.parseStatement("for");
      });
      this.scope.exit();
      this.state.labels.pop();
      return this.finishNode(e, "ForStatement");
    }
  }, {
    key: "parseForIn",
    value: function (e, t, n) {
      var r = this;
      var i = this.match(50);
      this.next();
      if (i) {
        if (n > -1) {
          this.unexpected(n);
        }
      } else {
        e.await = n > -1;
      }
      if ("VariableDeclaration" !== t.type || null == t.declarations[0].init || i && !this.state.strict && "var" === t.kind && "Identifier" === t.declarations[0].id.type) {
        if ("AssignmentPattern" === t.type) {
          this.raise(t.start, k.InvalidLhs, "for-loop");
        }
      } else {
        this.raise(t.start, k.ForInOfLoopInitializer, i ? "for-in" : "for-of");
      }
      e.left = t;
      e.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn();
      this.expect(11);
      e.body = this.withSmartMixTopicForbiddingContext(function () {
        return r.parseStatement("for");
      });
      this.scope.exit();
      this.state.labels.pop();
      return this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
    }
  }, {
    key: "parseVar",
    value: function (e, t, n) {
      var r = e.declarations = [];
      var i = this.hasPlugin("typescript");
      for (e.kind = n;;) {
        var a = this.startNode();
        this.parseVarId(a, n);
        if (this.eat(27)) {
          a.init = t ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn();
        } else {
          if ("const" !== n || this.match(50) || this.isContextual(93)) {
            if (!("Identifier" === a.id.type || t && (this.match(50) || this.isContextual(93)))) {
              this.raise(this.state.lastTokEnd, k.DeclarationMissingInitializer, "Complex binding patterns");
            }
          } else {
            if (!i) {
              this.raise(this.state.lastTokEnd, k.DeclarationMissingInitializer, "Const declarations");
            }
          }
          a.init = null;
        }
        r.push(this.finishNode(a, "VariableDeclarator"));
        if (!this.eat(12)) {
          break;
        }
      }
      return e;
    }
  }, {
    key: "parseVarId",
    value: function (e, t) {
      e.id = this.parseBindingAtom();
      this.checkLVal(e.id, "variable declaration", "var" === t ? 5 : 9, void 0, "var" !== t);
    }
  }, {
    key: "parseFunction",
    value: function (e) {
      var t = this;
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      var i = 1 & n;
      var a = 2 & n;
      var s = !!i && !(4 & n);
      this.initFunction(e, r);
      if (this.match(47) && a) {
        this.raise(this.state.start, k.GeneratorInSingleStatementContext);
      }
      e.generator = this.eat(47);
      if (i) {
        e.id = this.parseFunctionId(s);
      }
      var o = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = !1;
      this.scope.enter(2);
      this.prodParam.enter(Ue(r, e.generator));
      if (!i) {
        e.id = this.parseFunctionId();
      }
      this.parseFunctionParams(e, !1);
      this.withSmartMixTopicForbiddingContext(function () {
        t.parseFunctionBodyAndFinish(e, i ? "FunctionDeclaration" : "FunctionExpression");
      });
      this.prodParam.exit();
      this.scope.exit();
      if (i && !a) {
        this.registerFunctionStatementId(e);
      }
      this.state.maybeInArrowParameters = o;
      return e;
    }
  }, {
    key: "parseFunctionId",
    value: function (e) {
      return e || J(this.state.type) ? this.parseIdentifier() : null;
    }
  }, {
    key: "parseFunctionParams",
    value: function (e, t) {
      this.expect(10);
      this.expressionScope.enter(new Le(3));
      e.params = this.parseBindingList(11, 41, !1, t);
      this.expressionScope.exit();
    }
  }, {
    key: "registerFunctionStatementId",
    value: function (e) {
      if (e.id) {
        this.scope.declareName(e.id.name, this.state.strict || e.generator || e.async ? this.scope.treatFunctionsAsVar ? 5 : 9 : 17, e.id.start);
      }
    }
  }, {
    key: "parseClass",
    value: function (e, t, n) {
      this.next();
      this.takeDecorators(e);
      var r = this.state.strict;
      this.state.strict = !0;
      this.parseClassId(e, t, n);
      this.parseClassSuper(e);
      e.body = this.parseClassBody(!!e.superClass, r);
      return this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
    }
  }, {
    key: "isClassProperty",
    value: function () {
      return this.match(27) || this.match(13) || this.match(8);
    }
  }, {
    key: "isClassMethod",
    value: function () {
      return this.match(10);
    }
  }, {
    key: "isNonstaticConstructor",
    value: function (e) {
      return !e.computed && !e.static && ("constructor" === e.key.name || "constructor" === e.key.value);
    }
  }, {
    key: "parseClassBody",
    value: function (e, t) {
      var n = this;
      this.classScope.enter();
      var r = {
        hadConstructor: !1,
        hadSuperClass: e
      };
      var i = [];
      var a = this.startNode();
      a.body = [];
      this.expect(5);
      this.withSmartMixTopicForbiddingContext(function () {
        for (; !n.match(8);) {
          if (n.eat(13)) {
            if (i.length > 0) {
              throw n.raise(n.state.lastTokEnd, k.DecoratorSemicolon);
            }
          } else if (n.match(24)) {
            i.push(n.parseDecorator());
          } else {
            var e = n.startNode();
            if (i.length) {
              e.decorators = i;
              n.resetStartLocationFromNode(e, i[0]);
              i = [];
            }
            n.parseClassMember(a, e, r);
            if ("constructor" === e.kind && e.decorators && e.decorators.length > 0) {
              n.raise(e.start, k.DecoratorConstructor);
            }
          }
        }
      });
      this.state.strict = t;
      this.next();
      if (i.length) {
        throw this.raise(this.state.start, k.TrailingDecorator);
      }
      this.classScope.exit();
      return this.finishNode(a, "ClassBody");
    }
  }, {
    key: "parseClassMemberFromModifier",
    value: function (e, t) {
      var n = this.parseIdentifier(!0);
      if (this.isClassMethod()) {
        var r = t;
        r.kind = "method";
        r.computed = !1;
        r.key = n;
        r.static = !1;
        this.pushClassMethod(e, r, !1, !1, !1, !1);
        return !0;
      }
      if (this.isClassProperty()) {
        var i = t;
        i.computed = !1;
        i.key = n;
        i.static = !1;
        e.body.push(this.parseClassProperty(i));
        return !0;
      }
      this.resetPreviousNodeTrailingComments(n);
      return !1;
    }
  }, {
    key: "parseClassMember",
    value: function (e, t, n) {
      var r = this.isContextual(96);
      if (r) {
        if (this.parseClassMemberFromModifier(e, t)) {
          return;
        }
        if (this.eat(5)) {
          return void this.parseClassStaticBlock(e, t);
        }
      }
      this.parseClassMemberWithIsStatic(e, t, n, r);
    }
  }, {
    key: "parseClassMemberWithIsStatic",
    value: function (e, t, n, r) {
      var i = t;
      var a = t;
      var s = t;
      var o = t;
      var l = i;
      var u = i;
      t.static = r;
      if (this.eat(47)) {
        l.kind = "method";
        var c = this.match(126);
        this.parseClassElementName(l);
        return c ? void this.pushClassPrivateMethod(e, a, !0, !1) : (this.isNonstaticConstructor(i) && this.raise(i.key.start, k.ConstructorIsGenerator), void this.pushClassMethod(e, i, !0, !1, !1, !1));
      }
      var p = J(this.state.type) && !this.state.containsEsc;
      var f = this.match(126);
      var d = this.parseClassElementName(t);
      var h = this.state.start;
      this.parsePostMemberNameModifiers(u);
      if (this.isClassMethod()) {
        l.kind = "method";
        if (f) {
          return void this.pushClassPrivateMethod(e, a, !1, !1);
        }
        var y = this.isNonstaticConstructor(i);
        var m = !1;
        if (y) {
          i.kind = "constructor";
          if (n.hadConstructor && !this.hasPlugin("typescript")) {
            this.raise(d.start, k.DuplicateConstructor);
          }
          if (y && this.hasPlugin("typescript") && t.override) {
            this.raise(d.start, k.OverrideOnConstructor);
          }
          n.hadConstructor = !0;
          m = n.hadSuperClass;
        }
        this.pushClassMethod(e, i, !1, !1, y, m);
      } else if (this.isClassProperty()) {
        if (f) {
          this.pushClassPrivateProperty(e, o);
        } else {
          this.pushClassProperty(e, s);
        }
      } else if (p && "async" === d.name && !this.isLineTerminator()) {
        this.resetPreviousNodeTrailingComments(d);
        var v = this.eat(47);
        if (u.optional) {
          this.unexpected(h);
        }
        l.kind = "method";
        var g = this.match(126);
        this.parseClassElementName(l);
        this.parsePostMemberNameModifiers(u);
        if (g) {
          this.pushClassPrivateMethod(e, a, v, !0);
        } else {
          if (this.isNonstaticConstructor(i)) {
            this.raise(i.key.start, k.ConstructorIsAsync);
          }
          this.pushClassMethod(e, i, v, !0, !1, !1);
        }
      } else if (!p || "get" !== d.name && "set" !== d.name || this.match(47) && this.isLineTerminator()) {
        if (this.isLineTerminator()) {
          if (f) {
            this.pushClassPrivateProperty(e, o);
          } else {
            this.pushClassProperty(e, s);
          }
        } else {
          this.unexpected();
        }
      } else {
        this.resetPreviousNodeTrailingComments(d);
        l.kind = d.name;
        var T = this.match(126);
        this.parseClassElementName(i);
        if (T) {
          this.pushClassPrivateMethod(e, a, !1, !1);
        } else {
          if (this.isNonstaticConstructor(i)) {
            this.raise(i.key.start, k.ConstructorIsAccessor);
          }
          this.pushClassMethod(e, i, !1, !1, !1, !1);
        }
        this.checkGetterSetterParams(i);
      }
    }
  }, {
    key: "parseClassElementName",
    value: function (e) {
      var t = this.state;
      var n = t.type;
      var r = t.value;
      var i = t.start;
      if (!(120 !== n && 121 !== n || !e.static || "prototype" !== r)) {
        this.raise(i, k.StaticPrototype);
      }
      if (126 === n && "constructor" === r) {
        this.raise(i, k.ConstructorClassPrivateField);
      }
      return this.parsePropertyName(e, !0);
    }
  }, {
    key: "parseClassStaticBlock",
    value: function (e, t) {
      var n;
      this.scope.enter(208);
      var r = this.state.labels;
      this.state.labels = [];
      this.prodParam.enter(0);
      var i = t.body = [];
      this.parseBlockOrModuleBlockBody(i, void 0, !1, 8);
      this.prodParam.exit();
      this.scope.exit();
      this.state.labels = r;
      e.body.push(this.finishNode(t, "StaticBlock"));
      if (null != (n = t.decorators) && n.length) {
        this.raise(t.start, k.DecoratorStaticBlock);
      }
    }
  }, {
    key: "pushClassProperty",
    value: function (e, t) {
      if (!(t.computed || "constructor" !== t.key.name && "constructor" !== t.key.value)) {
        this.raise(t.key.start, k.ConstructorClassField);
      }
      e.body.push(this.parseClassProperty(t));
    }
  }, {
    key: "pushClassPrivateProperty",
    value: function (e, t) {
      var n = this.parseClassPrivateProperty(t);
      e.body.push(n);
      this.classScope.declarePrivateName(this.getPrivateNameSV(n.key), 0, n.key.start);
    }
  }, {
    key: "pushClassMethod",
    value: function (e, t, n, r, i, a) {
      e.body.push(this.parseMethod(t, n, r, i, a, "ClassMethod", !0));
    }
  }, {
    key: "pushClassPrivateMethod",
    value: function (e, t, n, r) {
      var i = this.parseMethod(t, n, r, !1, !1, "ClassPrivateMethod", !0);
      e.body.push(i);
      var a = "get" === i.kind ? i.static ? 6 : 2 : "set" === i.kind ? i.static ? 5 : 1 : 0;
      this.declareClassPrivateMethodInScope(i, a);
    }
  }, {
    key: "declareClassPrivateMethodInScope",
    value: function (e, t) {
      this.classScope.declarePrivateName(this.getPrivateNameSV(e.key), t, e.key.start);
    }
  }, {
    key: "parsePostMemberNameModifiers",
    value: function (e) {}
  }, {
    key: "parseClassPrivateProperty",
    value: function (e) {
      this.parseInitializer(e);
      this.semicolon();
      return this.finishNode(e, "ClassPrivateProperty");
    }
  }, {
    key: "parseClassProperty",
    value: function (e) {
      this.parseInitializer(e);
      this.semicolon();
      return this.finishNode(e, "ClassProperty");
    }
  }, {
    key: "parseInitializer",
    value: function (e) {
      this.scope.enter(80);
      this.expressionScope.enter(Fe());
      this.prodParam.enter(0);
      e.value = this.eat(27) ? this.parseMaybeAssignAllowIn() : null;
      this.expressionScope.exit();
      this.prodParam.exit();
      this.scope.exit();
    }
  }, {
    key: "parseClassId",
    value: function (e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 139;
      if (J(this.state.type)) {
        e.id = this.parseIdentifier();
        if (t) {
          this.checkLVal(e.id, "class name", r);
        }
      } else {
        if (n || !t) {
          e.id = null;
        } else {
          this.unexpected(null, k.MissingClassName);
        }
      }
    }
  }, {
    key: "parseClassSuper",
    value: function (e) {
      e.superClass = this.eat(73) ? this.parseExprSubscripts() : null;
    }
  }, {
    key: "parseExport",
    value: function (e) {
      var t = this.maybeParseExportDefaultSpecifier(e);
      var n = !t || this.eat(12);
      var r = n && this.eatExportStar(e);
      var i = r && this.maybeParseExportNamespaceSpecifier(e);
      var a = n && (!i || this.eat(12));
      var s = t || r;
      if (r && !i) {
        if (t) {
          this.unexpected();
        }
        this.parseExportFrom(e, !0);
        return this.finishNode(e, "ExportAllDeclaration");
      }
      var o;
      var l = this.maybeParseExportNamedSpecifiers(e);
      if (t && n && !r && !l || i && a && !l) {
        throw this.unexpected(null, 5);
      }
      if (s || l) {
        o = !1;
        this.parseExportFrom(e, s);
      } else {
        o = this.maybeParseExportDeclaration(e);
      }
      if (s || l || o) {
        this.checkExport(e, !0, !1, !!e.source);
        return this.finishNode(e, "ExportNamedDeclaration");
      }
      if (this.eat(57)) {
        e.declaration = this.parseExportDefaultExpression();
        this.checkExport(e, !0, !0);
        return this.finishNode(e, "ExportDefaultDeclaration");
      }
      throw this.unexpected(null, 5);
    }
  }, {
    key: "eatExportStar",
    value: function (e) {
      return this.eat(47);
    }
  }, {
    key: "maybeParseExportDefaultSpecifier",
    value: function (e) {
      if (this.isExportDefaultSpecifier()) {
        this.expectPlugin("exportDefaultFrom");
        var t = this.startNode();
        t.exported = this.parseIdentifier(!0);
        e.specifiers = [this.finishNode(t, "ExportDefaultSpecifier")];
        return !0;
      }
      return !1;
    }
  }, {
    key: "maybeParseExportNamespaceSpecifier",
    value: function (e) {
      if (this.isContextual(85)) {
        if (!e.specifiers) {
          e.specifiers = [];
        }
        var t = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
        this.next();
        t.exported = this.parseModuleExportName();
        e.specifiers.push(this.finishNode(t, "ExportNamespaceSpecifier"));
        return !0;
      }
      return !1;
    }
  }, {
    key: "maybeParseExportNamedSpecifiers",
    value: function (e) {
      if (this.match(5)) {
        var t;
        if (!e.specifiers) {
          e.specifiers = [];
        }
        var n = "type" === e.exportKind;
        (t = e.specifiers).push.apply(t, u(this.parseExportSpecifiers(n)));
        e.source = null;
        e.declaration = null;
        return !0;
      }
      return !1;
    }
  }, {
    key: "maybeParseExportDeclaration",
    value: function (e) {
      return !!this.shouldParseExportDeclaration() && (e.specifiers = [], e.source = null, e.declaration = this.parseExportDeclaration(e), !0);
    }
  }, {
    key: "isAsyncFunction",
    value: function () {
      if (!this.isContextual(87)) {
        return !1;
      }
      var e = this.nextTokenStart();
      return !f.test(this.input.slice(this.state.pos, e)) && this.isUnparsedContextual(e, "function");
    }
  }, {
    key: "parseExportDefaultExpression",
    value: function () {
      var e = this.startNode();
      var t = this.isAsyncFunction();
      if (this.match(60) || t) {
        this.next();
        if (t) {
          this.next();
        }
        return this.parseFunction(e, 5, t);
      }
      if (this.match(72)) {
        return this.parseClass(e, !0, !0);
      }
      if (this.match(24)) {
        if (this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport")) {
          this.raise(this.state.start, k.DecoratorBeforeExport);
        }
        this.parseDecorators(!1);
        return this.parseClass(e, !0, !0);
      }
      if (this.match(67) || this.match(66) || this.isLet()) {
        throw this.raise(this.state.start, k.UnsupportedDefaultExport);
      }
      var n = this.parseMaybeAssignAllowIn();
      this.semicolon();
      return n;
    }
  }, {
    key: "parseExportDeclaration",
    value: function (e) {
      return this.parseStatement(null);
    }
  }, {
    key: "isExportDefaultSpecifier",
    value: function () {
      var e = this.state.type;
      if (J(e)) {
        if (87 === e && !this.state.containsEsc || 91 === e) {
          return !1;
        }
        if ((118 === e || 117 === e) && !this.state.containsEsc) {
          var t = this.lookahead().type;
          if (J(t) && 89 !== t || 5 === t) {
            this.expectOnePlugin(["flow", "typescript"]);
            return !1;
          }
        }
      } else if (!this.match(57)) {
        return !1;
      }
      var n = this.nextTokenStart();
      var r = this.isUnparsedContextual(n, "from");
      if (44 === this.input.charCodeAt(n) || J(this.state.type) && r) {
        return !0;
      }
      if (this.match(57) && r) {
        var i = this.input.charCodeAt(this.nextTokenStartSince(n + 4));
        return 34 === i || 39 === i;
      }
      return !1;
    }
  }, {
    key: "parseExportFrom",
    value: function (e, t) {
      if (this.eatContextual(89)) {
        e.source = this.parseImportSource();
        this.checkExport(e);
        var n = this.maybeParseImportAssertions();
        if (n) {
          e.assertions = n;
        }
      } else if (t) {
        this.unexpected();
      } else {
        e.source = null;
      }
      this.semicolon();
    }
  }, {
    key: "shouldParseExportDeclaration",
    value: function () {
      var e = this.state.type;
      if (24 === e && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators"))) {
        if (!this.getPluginOption("decorators", "decoratorsBeforeExport")) {
          return !0;
        }
        this.unexpected(this.state.start, k.DecoratorBeforeExport);
      }
      return 66 === e || 67 === e || 60 === e || 72 === e || this.isLet() || this.isAsyncFunction();
    }
  }, {
    key: "checkExport",
    value: function (e, t, n, i) {
      if (t) {
        if (n) {
          this.checkDuplicateExports(e, "default");
          if (this.hasPlugin("exportDefaultFrom")) {
            var a;
            var s = e.declaration;
            if (!("Identifier" !== s.type || "from" !== s.name || s.end - s.start !== 4 || null != (a = s.extra) && a.parenthesized)) {
              this.raise(s.start, k.ExportDefaultFromAsIdentifier);
            }
          }
        } else if (e.specifiers && e.specifiers.length) {
          var o;
          var l = r(e.specifiers);
          try {
            for (l.s(); !(o = l.n()).done;) {
              var u = o.value;
              var c = u.exported;
              var p = "Identifier" === c.type ? c.name : c.value;
              this.checkDuplicateExports(u, p);
              if (!i && u.local) {
                var f = u.local;
                if ("Identifier" !== f.type) {
                  this.raise(u.start, k.ExportBindingIsString, f.value, p);
                } else {
                  this.checkReservedWord(f.name, f.start, !0, !1);
                  this.scope.checkLocalExport(f);
                }
              }
            }
          } catch (v) {
            l.e(v);
          } finally {
            l.f();
          }
        } else if (e.declaration) {
          if ("FunctionDeclaration" === e.declaration.type || "ClassDeclaration" === e.declaration.type) {
            var d = e.declaration.id;
            if (!d) {
              throw new Error("Assertion failure");
            }
            this.checkDuplicateExports(e, d.name);
          } else if ("VariableDeclaration" === e.declaration.type) {
            var h;
            var y = r(e.declaration.declarations);
            try {
              for (y.s(); !(h = y.n()).done;) {
                var m = h.value;
                this.checkDeclaration(m.id);
              }
            } catch (v) {
              y.e(v);
            } finally {
              y.f();
            }
          }
        }
      }
      if (this.state.decoratorStack[this.state.decoratorStack.length - 1].length) {
        throw this.raise(e.start, k.UnsupportedDecoratorExport);
      }
    }
  }, {
    key: "checkDeclaration",
    value: function (e) {
      if ("Identifier" === e.type) {
        this.checkDuplicateExports(e, e.name);
      } else if ("ObjectPattern" === e.type) {
        var t;
        var n = r(e.properties);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var i = t.value;
            this.checkDeclaration(i);
          }
        } catch (l) {
          n.e(l);
        } finally {
          n.f();
        }
      } else if ("ArrayPattern" === e.type) {
        var a;
        var s = r(e.elements);
        try {
          for (s.s(); !(a = s.n()).done;) {
            var o = a.value;
            if (o) {
              this.checkDeclaration(o);
            }
          }
        } catch (l) {
          s.e(l);
        } finally {
          s.f();
        }
      } else if ("ObjectProperty" === e.type) {
        this.checkDeclaration(e.value);
      } else {
        if ("RestElement" === e.type) {
          this.checkDeclaration(e.argument);
        } else {
          if ("AssignmentPattern" === e.type) {
            this.checkDeclaration(e.left);
          }
        }
      }
    }
  }, {
    key: "checkDuplicateExports",
    value: function (e, t) {
      if (this.exportedIdentifiers.has(t)) {
        this.raise(e.start, "default" === t ? k.DuplicateDefaultExport : k.DuplicateExport, t);
      }
      this.exportedIdentifiers.add(t);
    }
  }, {
    key: "parseExportSpecifiers",
    value: function (e) {
      var t = [];
      var n = !0;
      for (this.expect(5); !this.eat(8);) {
        if (n) {
          n = !1;
        } else if (this.expect(12), this.eat(8)) {
          break;
        }
        var r = this.isContextual(118);
        var i = this.match(121);
        var a = this.startNode();
        a.local = this.parseModuleExportName();
        t.push(this.parseExportSpecifier(a, i, e, r));
      }
      return t;
    }
  }, {
    key: "parseExportSpecifier",
    value: function (e, t, n, r) {
      if (this.eatContextual(85)) {
        e.exported = this.parseModuleExportName();
      } else {
        if (t) {
          e.exported = qe(e.local);
        } else {
          if (!e.exported) {
            e.exported = He(e.local);
          }
        }
      }
      return this.finishNode(e, "ExportSpecifier");
    }
  }, {
    key: "parseModuleExportName",
    value: function () {
      if (this.match(121)) {
        var e = this.parseStringLiteral(this.state.value);
        var t = e.value.match(kt);
        if (t) {
          this.raise(e.start, k.ModuleExportNameHasLoneSurrogate, t[0].charCodeAt(0).toString(16));
        }
        return e;
      }
      return this.parseIdentifier(!0);
    }
  }, {
    key: "parseImport",
    value: function (e) {
      e.specifiers = [];
      if (!this.match(121)) {
        var t = !this.maybeParseDefaultImportSpecifier(e) || this.eat(12);
        var n = t && this.maybeParseStarImportSpecifier(e);
        if (t && !n) {
          this.parseNamedImportSpecifiers(e);
        }
        this.expectContextual(89);
      }
      e.source = this.parseImportSource();
      var r = this.maybeParseImportAssertions();
      if (r) {
        e.assertions = r;
      } else {
        var i = this.maybeParseModuleAttributes();
        if (i) {
          e.attributes = i;
        }
      }
      this.semicolon();
      return this.finishNode(e, "ImportDeclaration");
    }
  }, {
    key: "parseImportSource",
    value: function () {
      if (!this.match(121)) {
        this.unexpected();
      }
      return this.parseExprAtom();
    }
  }, {
    key: "shouldParseDefaultImport",
    value: function (e) {
      return J(this.state.type);
    }
  }, {
    key: "parseImportSpecifierLocal",
    value: function (e, t, n, r) {
      t.local = this.parseIdentifier();
      this.checkLVal(t.local, r, 9);
      e.specifiers.push(this.finishNode(t, n));
    }
  }, {
    key: "parseAssertEntries",
    value: function () {
      var e = [];
      var t = new Set();
      do {
        if (this.match(8)) {
          break;
        }
        var n = this.startNode();
        var r = this.state.value;
        if (t.has(r)) {
          this.raise(this.state.start, k.ModuleAttributesWithDuplicateKeys, r);
        }
        t.add(r);
        if (this.match(121)) {
          n.key = this.parseStringLiteral(r);
        } else {
          n.key = this.parseIdentifier(!0);
        }
        this.expect(14);
        if (!this.match(121)) {
          throw this.unexpected(this.state.start, k.ModuleAttributeInvalidValue);
        }
        n.value = this.parseStringLiteral(this.state.value);
        this.finishNode(n, "ImportAttribute");
        e.push(n);
      } while (this.eat(12));
      return e;
    }
  }, {
    key: "maybeParseModuleAttributes",
    value: function () {
      if (!this.match(68) || this.hasPrecedingLineBreak()) {
        return this.hasPlugin("moduleAttributes") ? [] : null;
      }
      this.expectPlugin("moduleAttributes");
      this.next();
      var e = [];
      var t = new Set();
      do {
        var n = this.startNode();
        n.key = this.parseIdentifier(!0);
        if ("type" !== n.key.name) {
          this.raise(n.key.start, k.ModuleAttributeDifferentFromType, n.key.name);
        }
        if (t.has(n.key.name)) {
          this.raise(n.key.start, k.ModuleAttributesWithDuplicateKeys, n.key.name);
        }
        t.add(n.key.name);
        this.expect(14);
        if (!this.match(121)) {
          throw this.unexpected(this.state.start, k.ModuleAttributeInvalidValue);
        }
        n.value = this.parseStringLiteral(this.state.value);
        this.finishNode(n, "ImportAttribute");
        e.push(n);
      } while (this.eat(12));
      return e;
    }
  }, {
    key: "maybeParseImportAssertions",
    value: function () {
      if (!this.isContextual(86) || this.hasPrecedingLineBreak()) {
        return this.hasPlugin("importAssertions") ? [] : null;
      }
      this.expectPlugin("importAssertions");
      this.next();
      this.eat(5);
      var e = this.parseAssertEntries();
      this.eat(8);
      return e;
    }
  }, {
    key: "maybeParseDefaultImportSpecifier",
    value: function (e) {
      return !!this.shouldParseDefaultImport(e) && (this.parseImportSpecifierLocal(e, this.startNode(), "ImportDefaultSpecifier", "default import specifier"), !0);
    }
  }, {
    key: "maybeParseStarImportSpecifier",
    value: function (e) {
      if (this.match(47)) {
        var t = this.startNode();
        this.next();
        this.expectContextual(85);
        this.parseImportSpecifierLocal(e, t, "ImportNamespaceSpecifier", "import namespace specifier");
        return !0;
      }
      return !1;
    }
  }, {
    key: "parseNamedImportSpecifiers",
    value: function (e) {
      var t = !0;
      for (this.expect(5); !this.eat(8);) {
        if (t) {
          t = !1;
        } else {
          if (this.eat(14)) {
            throw this.raise(this.state.start, k.DestructureNamedImport);
          }
          this.expect(12);
          if (this.eat(8)) {
            break;
          }
        }
        var n = this.startNode();
        var r = this.match(121);
        var i = this.isContextual(118);
        n.imported = this.parseModuleExportName();
        var a = this.parseImportSpecifier(n, r, "type" === e.importKind || "typeof" === e.importKind, i);
        e.specifiers.push(a);
      }
    }
  }, {
    key: "parseImportSpecifier",
    value: function (e, t, n, r) {
      if (this.eatContextual(85)) {
        e.local = this.parseIdentifier();
      } else {
        var i = e.imported;
        if (t) {
          throw this.raise(e.start, k.ImportBindingIsString, i.value);
        }
        this.checkReservedWord(i.name, e.start, !0, !0);
        if (!e.local) {
          e.local = He(i);
        }
      }
      this.checkLVal(e.local, "import specifier", 9);
      return this.finishNode(e, "ImportSpecifier");
    }
  }, {
    key: "isThisParam",
    value: function (e) {
      return "Identifier" === e.type && "this" === e.name;
    }
  }]);
  return n;
}(xt));
var Ct = function (e) {
  for (var t = {}, n = 0, r = Object.keys(e); n < r.length; n++) {
    var i = r[n];
    t[i] = te(e[i]);
  }
  return t;
}(q);
function It(e, t) {
  var n = Ot;
  if (null != e && e.plugins) {
    !function (e) {
      if (ft(e, "decorators")) {
        if (ft(e, "decorators-legacy")) {
          throw new Error("Cannot use the decorators and decorators-legacy plugin together");
        }
        var t = dt(e, "decorators", "decoratorsBeforeExport");
        if (null == t) {
          throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'.");
        }
        if ("boolean" !== typeof t) {
          throw new Error("'decoratorsBeforeExport' must be a boolean.");
        }
      }
      if (ft(e, "flow") && ft(e, "typescript")) {
        throw new Error("Cannot combine flow and typescript plugins.");
      }
      if (ft(e, "placeholders") && ft(e, "v8intrinsic")) {
        throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
      }
      if (ft(e, "pipelineOperator")) {
        var n = dt(e, "pipelineOperator", "proposal");
        if (!ht.includes(n)) {
          var r = ht.map(function (e) {
            return '"'.concat(e, '"');
          }).join(", ");
          throw new Error('"pipelineOperator" requires "proposal" option whose value must be one of: '.concat(r, "."));
        }
        var i = ft(e, "recordAndTuple") && "hash" === dt(e, "recordAndTuple", "syntaxType");
        if ("hack" === n) {
          if (ft(e, "placeholders")) {
            throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
          }
          if (ft(e, "v8intrinsic")) {
            throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
          }
          var a = dt(e, "pipelineOperator", "topicToken");
          if (!yt.includes(a)) {
            var s = yt.map(function (e) {
              return '"'.concat(e, '"');
            }).join(", ");
            throw new Error('"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: '.concat(s, "."));
          }
          if ("#" === a && i) {
            throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
          }
        } else if ("smart" === n && i) {
          throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
        }
      }
      if (ft(e, "moduleAttributes")) {
        if (ft(e, "importAssertions")) {
          throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
        }
        if ("may-2020" !== dt(e, "moduleAttributes", "version")) {
          throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
        }
      }
      if (ft(e, "recordAndTuple") && !mt.includes(dt(e, "recordAndTuple", "syntaxType"))) {
        throw new Error("'recordAndTuple' requires 'syntaxType' option whose value should be one of: " + mt.map(function (e) {
          return "'".concat(e, "'");
        }).join(", "));
      }
      if (ft(e, "asyncDoExpressions") && !ft(e, "doExpressions")) {
        var o = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
        throw o.missingPlugins = "doExpressions", o;
      }
    }(e.plugins);
    n = function (e) {
      var t = gt.filter(function (t) {
        return ft(e, t);
      });
      var n = t.join("/");
      var i = Nt[n];
      if (!i) {
        i = Ot;
        var a;
        var s = r(t);
        try {
          for (s.s(); !(a = s.n()).done;) {
            var o = a.value;
            i = vt[o](i);
          }
        } catch (l) {
          s.e(l);
        } finally {
          s.f();
        }
        Nt[n] = i;
      }
      return i;
    }(e.plugins);
  }
  return new n(e, t);
}
var Nt = {};
exports.parse = function (e, t) {
  var n;
  if ("unambiguous" !== (null == (n = t) ? void 0 : n.sourceType)) {
    return It(t, e).parse();
  }
  t = Object.assign({}, t);
  try {
    t.sourceType = "module";
    var r = It(t, e);
    var i = r.parse();
    if (r.sawUnambiguousESM) {
      return i;
    }
    if (r.ambiguousScriptDifferentAst) {
      try {
        t.sourceType = "script";
        return It(t, e).parse();
      } catch (a) {}
    } else {
      i.program.sourceType = "script";
    }
    return i;
  } catch (s) {
    try {
      t.sourceType = "script";
      return It(t, e).parse();
    } catch (o) {}
    throw s;
  }
};
exports.parseExpression = function (e, t) {
  var n = It(t, e);
  if (n.options.strictMode) {
    n.state.strict = !0;
  }
  return n.getExpression();
};
exports.tokTypes = Ct;