"use strict";

exports.LogicalExpression = t.BinaryExpression = t.AssignmentExpression = function (e, t) {
  var n = this.inForStatementInitCounter && "in" === e.operator && !i.needsParens(e, t);
  if (n) {
    this.token("(");
  }
  this.print(e.left, e);
  this.space();
  if ("in" === e.operator || "instanceof" === e.operator) {
    this.word(e.operator);
  } else {
    this.token(e.operator);
  }
  this.space();
  this.print(e.right, e);
  if (n) {
    this.token(")");
  }
};
exports.AssignmentPattern = function (e) {
  this.print(e.left, e);
  if (e.left.optional) {
    this.token("?");
  }
  this.print(e.left.typeAnnotation, e);
  this.space();
  this.token("=");
  this.space();
  this.print(e.right, e);
};
exports.BindExpression = function (e) {
  this.print(e.object, e);
  this.token("::");
  this.print(e.callee, e);
};
exports.CallExpression = function (e) {
  this.print(e.callee, e);
  this.print(e.typeArguments, e);
  this.print(e.typeParameters, e);
  this.token("(");
  this.printList(e.arguments, e);
  this.token(")");
};
exports.ConditionalExpression = function (e) {
  this.print(e.test, e);
  this.space();
  this.token("?");
  this.space();
  this.print(e.consequent, e);
  this.space();
  this.token(":");
  this.space();
  this.print(e.alternate, e);
};
exports.Decorator = function (e) {
  this.token("@");
  this.print(e.expression, e);
  this.newline();
};
exports.DoExpression = function (e) {
  if (e.async) {
    this.word("async");
    this.space();
  }
  this.word("do");
  this.space();
  this.print(e.body, e);
};
exports.EmptyStatement = function () {
  this.semicolon(!0);
};
exports.ExpressionStatement = function (e) {
  this.print(e.expression, e);
  this.semicolon();
};
exports.Import = function () {
  this.word("import");
};
exports.MemberExpression = function (e) {
  if (this.print(e.object, e), !e.computed && o(e.property)) {
    throw new TypeError("Got a MemberExpression for MemberExpression property");
  }
  var t = e.computed;
  if (s(e.property) && "number" === typeof e.property.value) {
    t = !0;
  }
  if (t) {
    this.token("[");
    this.print(e.property, e);
    this.token("]");
  } else {
    this.token(".");
    this.print(e.property, e);
  }
};
exports.MetaProperty = function (e) {
  this.print(e.meta, e);
  this.token(".");
  this.print(e.property, e);
};
exports.ModuleExpression = function (e) {
  this.word("module");
  this.space();
  this.token("{");
  if (0 === e.body.body.length) {
    this.token("}");
  } else {
    this.newline();
    this.printSequence(e.body.body, e, {
      indent: !0
    });
    this.rightBrace();
  }
};
exports.NewExpression = function (e, t) {
  if (this.word("new"), this.space(), this.print(e.callee, e), this.format.minified && 0 === e.arguments.length && !e.optional && !a(t, {
    callee: e
  }) && !o(t) && !l(t)) {
    return;
  }
  this.print(e.typeArguments, e);
  this.print(e.typeParameters, e);
  if (e.optional) {
    this.token("?.");
  }
  this.token("(");
  this.printList(e.arguments, e);
  this.token(")");
};
exports.OptionalCallExpression = function (e) {
  this.print(e.callee, e);
  this.print(e.typeArguments, e);
  this.print(e.typeParameters, e);
  if (e.optional) {
    this.token("?.");
  }
  this.token("(");
  this.printList(e.arguments, e);
  this.token(")");
};
exports.OptionalMemberExpression = function (e) {
  if (this.print(e.object, e), !e.computed && o(e.property)) {
    throw new TypeError("Got a MemberExpression for MemberExpression property");
  }
  var t = e.computed;
  if (s(e.property) && "number" === typeof e.property.value) {
    t = !0;
  }
  if (e.optional) {
    this.token("?.");
  }
  if (t) {
    this.token("[");
    this.print(e.property, e);
    this.token("]");
  } else {
    if (!e.optional) {
      this.token(".");
    }
    this.print(e.property, e);
  }
};
exports.ParenthesizedExpression = function (e) {
  this.token("(");
  this.print(e.expression, e);
  this.token(")");
};
exports.PrivateName = function (e) {
  this.token("#");
  this.print(e.id, e);
};
exports.SequenceExpression = function (e) {
  this.printList(e.expressions, e);
};
exports.Super = function () {
  this.word("super");
};
exports.ThisExpression = function () {
  this.word("this");
};
exports.UnaryExpression = function (e) {
  if ("void" === e.operator || "delete" === e.operator || "typeof" === e.operator || "throw" === e.operator) {
    this.word(e.operator);
    this.space();
  } else {
    this.token(e.operator);
  }
  this.print(e.argument, e);
};
exports.UpdateExpression = function (e) {
  if (e.prefix) {
    this.token(e.operator);
    this.print(e.argument, e);
  } else {
    this.startTerminatorless(!0);
    this.print(e.argument, e);
    this.endTerminatorless();
    this.token(e.operator);
  }
};
exports.V8IntrinsicIdentifier = function (e) {
  this.token("%");
  this.word(e.name);
};
import * as r from "../../../../../2624/index";
import * as i from "../2748/index";
var a = r.isCallExpression;
var s = r.isLiteral;
var o = r.isMemberExpression;
var l = r.isNewExpression;
function u(e) {
  return function (t) {
    if (this.word(e), t.delegate && this.token("*"), t.argument) {
      this.space();
      var n = this.startTerminatorless();
      this.print(t.argument, t);
      this.endTerminatorless(n);
    }
  };
}
var c = u("yield");
export { c as YieldExpression };
var p = u("await");
export { p as AwaitExpression };