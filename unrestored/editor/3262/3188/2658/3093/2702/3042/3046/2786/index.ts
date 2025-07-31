"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ArgumentPlaceholder = function () {
  this.token("?");
};
exports.ArrayPattern = exports.ArrayExpression = function (e) {
  var t = e.elements;
  var n = t.length;
  this.token("[");
  this.printInnerComments(e);
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    if (i) {
      if (r > 0) {
        this.space();
      }
      this.print(i, e);
      if (r < n - 1) {
        this.token(",");
      }
    } else {
      this.token(",");
    }
  }
  this.token("]");
};
exports.BigIntLiteral = function (e) {
  var t = this.getPossibleRaw(e);
  if (!this.format.minified && null != t) {
    return void this.word(t);
  }
  this.word(e.value + "n");
};
exports.BooleanLiteral = function (e) {
  this.word(e.value ? "true" : "false");
};
exports.DecimalLiteral = function (e) {
  var t = this.getPossibleRaw(e);
  if (!this.format.minified && null != t) {
    return void this.word(t);
  }
  this.word(e.value + "m");
};
exports.Identifier = function (e) {
  var t = this;
  this.exactSource(e.loc, function () {
    t.word(e.name);
  });
};
exports.NullLiteral = function () {
  this.word("null");
};
exports.NumericLiteral = function (e) {
  var t = this.getPossibleRaw(e);
  var n = this.format.jsescOption;
  var r = e.value + "";
  if (n.numbers) {
    this.number(i(e.value, n));
  } else {
    if (null == t) {
      this.number(r);
    } else {
      if (this.format.minified) {
        this.number(t.length < r.length ? t : r);
      } else {
        this.number(t);
      }
    }
  }
};
exports.ObjectPattern = exports.ObjectExpression = function (e) {
  var t = e.properties;
  this.token("{");
  this.printInnerComments(e);
  if (t.length) {
    this.space();
    this.printList(t, e, {
      indent: !0,
      statement: !0
    });
    this.space();
  }
  this.token("}");
};
exports.ObjectMethod = function (e) {
  this.printJoin(e.decorators, e);
  this._methodHead(e);
  this.space();
  this.print(e.body, e);
};
exports.ObjectProperty = function (e) {
  if (this.printJoin(e.decorators, e), e.computed) {
    this.token("[");
    this.print(e.key, e);
    this.token("]");
  } else {
    if (a(e.value) && s(e.key) && e.key.name === e.value.left.name) {
      return void this.print(e.value, e);
    }
    if (this.print(e.key, e), e.shorthand && s(e.key) && s(e.value) && e.key.name === e.value.name) {
      return;
    }
  }
  this.token(":");
  this.space();
  this.print(e.value, e);
};
exports.PipelineBareFunction = function (e) {
  this.print(e.callee, e);
};
exports.PipelinePrimaryTopicReference = function () {
  this.token("#");
};
exports.PipelineTopicExpression = function (e) {
  this.print(e.expression, e);
};
exports.RecordExpression = function (e) {
  var t;
  var n;
  var r = e.properties;
  if ("bar" === this.format.recordAndTupleSyntaxType) {
    t = "{|";
    n = "|}";
  } else {
    if ("hash" !== this.format.recordAndTupleSyntaxType) {
      throw new Error('The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" ('.concat(JSON.stringify(this.format.recordAndTupleSyntaxType), " received)."));
    }
    t = "#{";
    n = "}";
  }
  this.token(t);
  this.printInnerComments(e);
  if (r.length) {
    this.space();
    this.printList(r, e, {
      indent: !0,
      statement: !0
    });
    this.space();
  }
  this.token(n);
};
exports.RegExpLiteral = function (e) {
  this.word("/".concat(e.pattern, "/").concat(e.flags));
};
exports.SpreadElement = exports.RestElement = function (e) {
  this.token("...");
  this.print(e.argument, e);
};
exports.StringLiteral = function (e) {
  var t = this.getPossibleRaw(e);
  if (!this.format.minified && null != t) {
    return void this.token(t);
  }
  var n = i(e.value, Object.assign(this.format.jsescOption, this.format.jsonCompatibleStrings && {
    json: !0
  }));
  return this.token(n);
};
exports.TopicReference = function () {
  var e = this.format.topicToken;
  if (!o.has(e)) {
    var t = JSON.stringify(e);
    var n = Array.from(o, function (e) {
      return JSON.stringify(e);
    });
    throw new Error('The "topicToken" generator option must be one of ' + "".concat(n.join(", "), " (").concat(t, " received instead)."));
  }
  this.token(e);
};
exports.TupleExpression = function (e) {
  var t;
  var n;
  var r = e.elements;
  var i = r.length;
  if ("bar" === this.format.recordAndTupleSyntaxType) {
    t = "[|";
    n = "|]";
  } else {
    if ("hash" !== this.format.recordAndTupleSyntaxType) {
      throw new Error("".concat(this.format.recordAndTupleSyntaxType, " is not a valid recordAndTuple syntax type"));
    }
    t = "#[";
    n = "]";
  }
  this.token(t);
  this.printInnerComments(e);
  for (var a = 0; a < r.length; a++) {
    var s = r[a];
    if (s) {
      if (a > 0) {
        this.space();
      }
      this.print(s, e);
      if (a < i - 1) {
        this.token(",");
      }
    }
  }
  this.token(n);
};
var r = require("../../../../../2623/index");
var i = require("./2751");
var a = r.isAssignmentPattern;
var s = r.isIdentifier;
var o = new Set(["^", "%", "#"]);