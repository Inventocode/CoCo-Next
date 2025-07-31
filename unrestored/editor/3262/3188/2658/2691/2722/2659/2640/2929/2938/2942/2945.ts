"use strict";

var r = require("../../../../../../../../../3190/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.BreakStatement = void 0;
exports.CatchClause = function (e) {
  this.word("catch");
  this.space();
  if (e.param) {
    this.token("(");
    this.print(e.param, e);
    this.print(e.param.typeAnnotation, e);
    this.token(")");
    this.space();
  }
  this.print(e.body, e);
};
exports.ContinueStatement = void 0;
exports.DebuggerStatement = function () {
  this.word("debugger");
  this.semicolon();
};
exports.DoWhileStatement = function (e) {
  this.word("do");
  this.space();
  this.print(e.body, e);
  this.space();
  this.word("while");
  this.space();
  this.token("(");
  this.print(e.test, e);
  this.token(")");
  this.semicolon();
};
exports.ForOfStatement = exports.ForInStatement = void 0;
exports.ForStatement = function (e) {
  this.word("for");
  this.space();
  this.token("(");
  this.inForStatementInitCounter++;
  this.print(e.init, e);
  this.inForStatementInitCounter--;
  this.token(";");
  if (e.test) {
    this.space();
    this.print(e.test, e);
  }
  this.token(";");
  if (e.update) {
    this.space();
    this.print(e.update, e);
  }
  this.token(")");
  this.printBlock(e);
};
exports.IfStatement = function (e) {
  this.word("if");
  this.space();
  this.token("(");
  this.print(e.test, e);
  this.token(")");
  this.space();
  var t = e.alternate && o(function e(t) {
    return l(t.body) ? e(t.body) : t;
  }(e.consequent));
  if (t) {
    this.token("{");
    this.newline();
    this.indent();
  }
  this.printAndIndentOnComments(e.consequent, e);
  if (t) {
    this.dedent();
    this.newline();
    this.token("}");
  }
  if (e.alternate) {
    if (this.endsWith(125)) {
      this.space();
    }
    this.word("else");
    this.space();
    this.printAndIndentOnComments(e.alternate, e);
  }
};
exports.LabeledStatement = function (e) {
  this.print(e.label, e);
  this.token(":");
  this.space();
  this.print(e.body, e);
};
exports.ReturnStatement = void 0;
exports.SwitchCase = function (e) {
  if (e.test) {
    this.word("case");
    this.space();
    this.print(e.test, e);
    this.token(":");
  } else {
    this.word("default");
    this.token(":");
  }
  if (e.consequent.length) {
    this.newline();
    this.printSequence(e.consequent, e, {
      indent: !0
    });
  }
};
exports.SwitchStatement = function (e) {
  this.word("switch");
  this.space();
  this.token("(");
  this.print(e.discriminant, e);
  this.token(")");
  this.space();
  this.token("{");
  this.printSequence(e.cases, e, {
    indent: !0,
    addNewlines: function (t, n) {
      if (!t && e.cases[e.cases.length - 1] === n) {
        return -1;
      }
    }
  });
  this.token("}");
};
exports.ThrowStatement = void 0;
exports.TryStatement = function (e) {
  this.word("try");
  this.space();
  this.print(e.block, e);
  this.space();
  if (e.handlers) {
    this.print(e.handlers[0], e);
  } else {
    this.print(e.handler, e);
  }
  if (e.finalizer) {
    this.space();
    this.word("finally");
    this.space();
    this.print(e.finalizer, e);
  }
};
exports.VariableDeclaration = function (e, t) {
  if (e.declare) {
    this.word("declare");
    this.space();
  }
  this.word(e.kind);
  this.space();
  var n;
  var i = !1;
  if (!a(t)) {
    var o;
    var l = r(e.declarations);
    try {
      for (l.s(); !(o = l.n()).done;) {
        if (o.value.init) {
          i = !0;
        }
      }
    } catch (u) {
      l.e(u);
    } finally {
      l.f();
    }
  }
  if (i) {
    n = "const" === e.kind ? g : v;
  }
  if (this.printList(e.declarations, e, {
    separator: n
  }), a(t)) {
    if (s(t)) {
      if (t.init === e) {
        return;
      }
    } else if (t.left === e) {
      return;
    }
  }
  this.semicolon();
};
exports.VariableDeclarator = function (e) {
  this.print(e.id, e);
  if (e.definite) {
    this.token("!");
  }
  this.print(e.id.typeAnnotation, e);
  if (e.init) {
    this.space();
    this.token("=");
    this.space();
    this.print(e.init, e);
  }
};
exports.WhileStatement = function (e) {
  this.word("while");
  this.space();
  this.token("(");
  this.print(e.test, e);
  this.token(")");
  this.printBlock(e);
};
exports.WithStatement = function (e) {
  this.word("with");
  this.space();
  this.token("(");
  this.print(e.object, e);
  this.token(")");
  this.printBlock(e);
};
var i = require("../../../../../2624/index");
var a = i.isFor;
var s = i.isForStatement;
var o = i.isIfStatement;
var l = i.isStatement;
var u = function (e) {
  return function (t) {
    this.word("for");
    this.space();
    if ("of" === e && t.await) {
      this.word("await");
      this.space();
    }
    this.token("(");
    this.print(t.left, t);
    this.space();
    this.word(e);
    this.space();
    this.print(t.right, t);
    this.token(")");
    this.printBlock(t);
  };
};
var c = u("in");
exports.ForInStatement = c;
var p = u("of");
function f(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "label";
  return function (n) {
    this.word(e);
    var r = n[t];
    if (r) {
      this.space();
      var i = "label" == t;
      var a = this.startTerminatorless(i);
      this.print(r, n);
      this.endTerminatorless(a);
    }
    this.semicolon();
  };
}
exports.ForOfStatement = p;
var d = f("continue");
exports.ContinueStatement = d;
var h = f("return", "argument");
exports.ReturnStatement = h;
var y = f("break");
exports.BreakStatement = y;
var m = f("throw", "argument");
function v() {
  if (this.token(","), this.newline(), this.endsWith(10)) {
    for (var e = 0; e < 4; e++) {
      this.space(!0);
    }
  }
}
function g() {
  if (this.token(","), this.newline(), this.endsWith(10)) {
    for (var e = 0; e < 6; e++) {
      this.space(!0);
    }
  }
}
exports.ThrowStatement = m;