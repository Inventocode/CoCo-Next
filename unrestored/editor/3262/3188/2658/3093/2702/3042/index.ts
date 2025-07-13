"use strict";

import * as r from "../../../../../3190/494";
import * as i from "../../../220";
import * as a from "../../../230";
import * as s from "./3043";
import * as o from "./2784/index";
import * as l from "../../../2623/index";
import * as u from "./3046/index";
var c = l.isProgram;
var p = l.isFile;
var f = l.isEmptyStatement;
var d = /e/i;
var h = /\.0+$/;
var y = /^0[box]/;
var m = /^\s*[@#]__PURE__\s*$/;
var v = o.needsParens;
var g = o.needsWhitespaceAfter;
var T = o.needsWhitespaceBefore;
var b = function () {
  function e(t, n) {
    i(this, e);
    this.inForStatementInitCounter = 0;
    this._printStack = [];
    this._indent = 0;
    this._insideAux = !1;
    this._parenPushNewlineState = null;
    this._noLineTerminator = !1;
    this._printAuxAfterOnNextUserNode = !1;
    this._printedComments = new WeakSet();
    this._endsWithInteger = !1;
    this._endsWithWord = !1;
    this.format = t;
    this._buf = new s.default(n);
  }
  a(e, [{
    key: "generate",
    value: function (e) {
      this.print(e);
      this._maybeAddAuxComment();
      return this._buf.get();
    }
  }, {
    key: "indent",
    value: function () {
      if (!(this.format.compact || this.format.concise)) {
        this._indent++;
      }
    }
  }, {
    key: "dedent",
    value: function () {
      if (!(this.format.compact || this.format.concise)) {
        this._indent--;
      }
    }
  }, {
    key: "semicolon",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      this._maybeAddAuxComment();
      this._append(";", !e);
    }
  }, {
    key: "rightBrace",
    value: function () {
      if (this.format.minified) {
        this._buf.removeLastSemicolon();
      }
      this.token("}");
    }
  }, {
    key: "space",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (!this.format.compact) {
        if (e) {
          this._space();
        } else if (this._buf.hasContent()) {
          var t = this.getLastChar();
          if (32 !== t && 10 !== t) {
            this._space();
          }
        }
      }
    }
  }, {
    key: "word",
    value: function (e) {
      if (this._endsWithWord || this.endsWith(47) && 47 === e.charCodeAt(0)) {
        this._space();
      }
      this._maybeAddAuxComment();
      this._append(e);
      this._endsWithWord = !0;
    }
  }, {
    key: "number",
    value: function (e) {
      this.word(e);
      this._endsWithInteger = Number.isInteger(+e) && !y.test(e) && !d.test(e) && !h.test(e) && 46 !== e.charCodeAt(e.length - 1);
    }
  }, {
    key: "token",
    value: function (e) {
      var t = this.getLastChar();
      var n = e.charCodeAt(0);
      if ("--" === e && 33 === t || 43 === n && 43 === t || 45 === n && 45 === t || 46 === n && this._endsWithInteger) {
        this._space();
      }
      this._maybeAddAuxComment();
      this._append(e);
    }
  }, {
    key: "newline",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      if (!this.format.retainLines && !this.format.compact) {
        if (this.format.concise) {
          this.space();
        } else {
          var t = this.endsWithCharAndNewline();
          if (10 !== t && (123 !== t && 58 !== t || e--, !(e <= 0))) {
            for (var n = 0; n < e; n++) {
              this._newline();
            }
          }
        }
      }
    }
  }, {
    key: "endsWith",
    value: function (e) {
      return this.getLastChar() === e;
    }
  }, {
    key: "getLastChar",
    value: function () {
      return this._buf.getLastChar();
    }
  }, {
    key: "endsWithCharAndNewline",
    value: function () {
      return this._buf.endsWithCharAndNewline();
    }
  }, {
    key: "removeTrailingNewline",
    value: function () {
      this._buf.removeTrailingNewline();
    }
  }, {
    key: "exactSource",
    value: function (e, t) {
      this._catchUp("start", e);
      this._buf.exactSource(e, t);
    }
  }, {
    key: "source",
    value: function (e, t) {
      this._catchUp(e, t);
      this._buf.source(e, t);
    }
  }, {
    key: "withSource",
    value: function (e, t, n) {
      this._catchUp(e, t);
      this._buf.withSource(e, t, n);
    }
  }, {
    key: "_space",
    value: function () {
      this._append(" ", !0);
    }
  }, {
    key: "_newline",
    value: function () {
      this._append("\n", !0);
    }
  }, {
    key: "_append",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this._maybeAddParen(e);
      this._maybeIndent(e);
      if (t) {
        this._buf.queue(e);
      } else {
        this._buf.append(e);
      }
      this._endsWithWord = !1;
      this._endsWithInteger = !1;
    }
  }, {
    key: "_maybeIndent",
    value: function (e) {
      if (this._indent && this.endsWith(10) && 10 !== e.charCodeAt(0)) {
        this._buf.queue(this._getIndent());
      }
    }
  }, {
    key: "_maybeAddParen",
    value: function (e) {
      var t = this._parenPushNewlineState;
      if (t) {
        var n;
        for (n = 0; n < e.length && " " === e[n]; n++) {
          ;
        }
        if (n !== e.length) {
          var r = e[n];
          if ("\n" !== r) {
            if ("/" !== r || n + 1 === e.length) {
              return void (this._parenPushNewlineState = null);
            }
            var i = e[n + 1];
            if ("*" === i) {
              if (m.test(e.slice(n + 2, e.length - 2))) {
                return;
              }
            } else if ("/" !== i) {
              return void (this._parenPushNewlineState = null);
            }
          }
          this.token("(");
          this.indent();
          t.printed = !0;
        }
      }
    }
  }, {
    key: "_catchUp",
    value: function (e, t) {
      if (this.format.retainLines) {
        var n = t ? t[e] : null;
        if (null != (null == n ? void 0 : n.line)) {
          for (var r = n.line - this._buf.getCurrentLine(), i = 0; i < r; i++) {
            this._newline();
          }
        }
      }
    }
  }, {
    key: "_getIndent",
    value: function () {
      return this.format.indent.style.repeat(this._indent);
    }
  }, {
    key: "startTerminatorless",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return e ? (this._noLineTerminator = !0, null) : this._parenPushNewlineState = {
        printed: !1
      };
    }
  }, {
    key: "endTerminatorless",
    value: function (e) {
      this._noLineTerminator = !1;
      if (null != e && e.printed) {
        this.dedent();
        this.newline();
        this.token(")");
      }
    }
  }, {
    key: "print",
    value: function (e, t) {
      var n = this;
      if (e) {
        var r = this.format.concise;
        if (e._compact) {
          this.format.concise = !0;
        }
        var i = this[e.type];
        if (!i) {
          throw new ReferenceError("unknown node of type ".concat(JSON.stringify(e.type), " with constructor ").concat(JSON.stringify(null == e ? void 0 : e.constructor.name)));
        }
        this._printStack.push(e);
        var a = this._insideAux;
        this._insideAux = !e.loc;
        this._maybeAddAuxComment(this._insideAux && !a);
        var s = v(e, t, this._printStack);
        if (this.format.retainFunctionParens && "FunctionExpression" === e.type && e.extra && e.extra.parenthesized) {
          s = !0;
        }
        if (s) {
          this.token("(");
        }
        this._printLeadingComments(e);
        var o = c(e) || p(e) ? null : e.loc;
        this.withSource("start", o, function () {
          i.call(n, e, t);
        });
        this._printTrailingComments(e);
        if (s) {
          this.token(")");
        }
        this._printStack.pop();
        this.format.concise = r;
        this._insideAux = a;
      }
    }
  }, {
    key: "_maybeAddAuxComment",
    value: function (e) {
      if (e) {
        this._printAuxBeforeComment();
      }
      if (!this._insideAux) {
        this._printAuxAfterComment();
      }
    }
  }, {
    key: "_printAuxBeforeComment",
    value: function () {
      if (!this._printAuxAfterOnNextUserNode) {
        this._printAuxAfterOnNextUserNode = !0;
        var e = this.format.auxiliaryCommentBefore;
        if (e) {
          this._printComment({
            type: "CommentBlock",
            value: e
          });
        }
      }
    }
  }, {
    key: "_printAuxAfterComment",
    value: function () {
      if (this._printAuxAfterOnNextUserNode) {
        this._printAuxAfterOnNextUserNode = !1;
        var e = this.format.auxiliaryCommentAfter;
        if (e) {
          this._printComment({
            type: "CommentBlock",
            value: e
          });
        }
      }
    }
  }, {
    key: "getPossibleRaw",
    value: function (e) {
      var t = e.extra;
      if (t && null != t.raw && null != t.rawValue && e.value === t.rawValue) {
        return t.raw;
      }
    }
  }, {
    key: "printJoin",
    value: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (null != e && e.length) {
        if (n.indent) {
          this.indent();
        }
        for (var r = {
            addNewlines: n.addNewlines
          }, i = 0; i < e.length; i++) {
          var a = e[i];
          if (a) {
            if (n.statement) {
              this._printNewline(!0, a, t, r);
            }
            this.print(a, t);
            if (n.iterator) {
              n.iterator(a, i);
            }
            if (n.separator && i < e.length - 1) {
              n.separator.call(this);
            }
            if (n.statement) {
              this._printNewline(!1, a, t, r);
            }
          }
        }
        if (n.indent) {
          this.dedent();
        }
      }
    }
  }, {
    key: "printAndIndentOnComments",
    value: function (e, t) {
      var n = e.leadingComments && e.leadingComments.length > 0;
      if (n) {
        this.indent();
      }
      this.print(e, t);
      if (n) {
        this.dedent();
      }
    }
  }, {
    key: "printBlock",
    value: function (e) {
      var t = e.body;
      if (!f(t)) {
        this.space();
      }
      this.print(t, e);
    }
  }, {
    key: "_printTrailingComments",
    value: function (e) {
      this._printComments(this._getComments(!1, e));
    }
  }, {
    key: "_printLeadingComments",
    value: function (e) {
      this._printComments(this._getComments(!0, e), !0);
    }
  }, {
    key: "printInnerComments",
    value: function (e) {
      var t;
      var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (null != (t = e.innerComments) && t.length) {
        if (n) {
          this.indent();
        }
        this._printComments(e.innerComments);
        if (n) {
          this.dedent();
        }
      }
    }
  }, {
    key: "printSequence",
    value: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      n.statement = !0;
      return this.printJoin(e, t, n);
    }
  }, {
    key: "printList",
    value: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (null == n.separator) {
        n.separator = E;
      }
      return this.printJoin(e, t, n);
    }
  }, {
    key: "_printNewline",
    value: function (e, t, n, r) {
      if (!this.format.retainLines && !this.format.compact) {
        if (this.format.concise) {
          this.space();
        } else {
          var i = 0;
          if (this._buf.hasContent()) {
            if (!e) {
              i++;
            }
            if (r.addNewlines) {
              i += r.addNewlines(e, t) || 0;
            }
            if ((e ? T : g)(t, n)) {
              i++;
            }
          }
          this.newline(Math.min(2, i));
        }
      }
    }
  }, {
    key: "_getComments",
    value: function (e, t) {
      return t && (e ? t.leadingComments : t.trailingComments) || [];
    }
  }, {
    key: "_printComment",
    value: function (e, t) {
      var n = this;
      if (this.format.shouldPrintComment(e.value) && !e.ignore && !this._printedComments.has(e)) {
        this._printedComments.add(e);
        var r = "CommentBlock" === e.type;
        var i = r && !t && !this._noLineTerminator;
        if (i && this._buf.hasContent()) {
          this.newline(1);
        }
        var a = this.getLastChar();
        if (91 !== a && 123 !== a) {
          this.space();
        }
        var s = r || this._noLineTerminator ? "/*".concat(e.value, "*/") : "//".concat(e.value, "\n");
        if (r && this.format.indent.adjustMultilineComment) {
          var o;
          var l = null == (o = e.loc) ? void 0 : o.start.column;
          if (l) {
            var u = new RegExp("\\n\\s{1," + l + "}", "g");
            s = s.replace(u, "\n");
          }
          var c = Math.max(this._getIndent().length, this.format.retainLines ? 0 : this._buf.getCurrentColumn());
          s = s.replace(/\n(?!$)/g, "\n".concat(" ".repeat(c)));
        }
        if (this.endsWith(47)) {
          this._space();
        }
        this.withSource("start", e.loc, function () {
          n._append(s);
        });
        if (i) {
          this.newline(1);
        }
      }
    }
  }, {
    key: "_printComments",
    value: function (e, t) {
      if (null != e && e.length) {
        if (t && 1 === e.length && m.test(e[0].value)) {
          this._printComment(e[0], this._buf.hasContent() && !this.endsWith(10));
        } else {
          var n;
          var i = r(e);
          try {
            for (i.s(); !(n = i.n()).done;) {
              var a = n.value;
              this._printComment(a);
            }
          } catch (s) {
            i.e(s);
          } finally {
            i.f();
          }
        }
      }
    }
  }, {
    key: "printAssertions",
    value: function (e) {
      var t;
      if (null != (t = e.assertions) && t.length) {
        this.space();
        this.word("assert");
        this.space();
        this.token("{");
        this.space();
        this.printList(e.assertions, e);
        this.space();
        this.token("}");
      }
    }
  }]);
  return e;
}();
Object.assign(b.prototype, u);
b.prototype.Noop = function () {};
var S = b;
function E() {
  this.token(",");
  this.space();
}
export default S;