"use strict";

var r = require("../../220");
var i = require("../../230");
var a = require("../../2679/703/index");
var s = require("../../2679/529");
var o = require("../../2679/356/index");
var l = require("../../2679/357/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.CodeGenerator = void 0;
exports.default = function (e, t, n) {
  return new c(e, t, n).generate();
};
var u = require("./3035/index");
var c = function (e) {
  o(n, e);
  var t = l(n);
  function n(e) {
    var i;
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var s = arguments.length > 2 ? arguments[2] : void 0;
    r(this, n);
    var o = p(s, a);
    var l = a.sourceMaps ? new u.default(a, s) : null;
    (i = t.call(this, o, l)).ast = void 0;
    i.ast = e;
    return i;
  }
  i(n, [{
    key: "generate",
    value: function () {
      return a(s(n.prototype), "generate", this).call(this, this.ast);
    }
  }]);
  return n;
}(require("./3042/index").default);
function p(e, t) {
  var n = {
    auxiliaryCommentBefore: t.auxiliaryCommentBefore,
    auxiliaryCommentAfter: t.auxiliaryCommentAfter,
    shouldPrintComment: t.shouldPrintComment,
    retainLines: t.retainLines,
    retainFunctionParens: t.retainFunctionParens,
    comments: null == t.comments || t.comments,
    compact: t.compact,
    minified: t.minified,
    concise: t.concise,
    indent: {
      adjustMultilineComment: !0,
      style: "  ",
      base: 0
    },
    decoratorsBeforeExport: !!t.decoratorsBeforeExport,
    jsescOption: Object.assign({
      quotes: "double",
      wrap: !0,
      minimal: !1
    }, t.jsescOption),
    recordAndTupleSyntaxType: t.recordAndTupleSyntaxType,
    topicToken: t.topicToken
  };
  n.jsonCompatibleStrings = t.jsonCompatibleStrings;
  if (n.minified) {
    n.compact = !0;
    n.shouldPrintComment = n.shouldPrintComment || function () {
      return n.comments;
    };
  } else {
    n.shouldPrintComment = n.shouldPrintComment || function (e) {
      return n.comments || e.indexOf("@license") >= 0 || e.indexOf("@preserve") >= 0;
    };
  }
  if ("auto" === n.compact) {
    n.compact = e.length > 5e5;
    if (n.compact) {
      console.error("[BABEL] Note: The code generator has deoptimised the styling of " + "".concat(t.filename, " as it exceeds the max of ", "500KB", "."));
    }
  }
  if (n.compact) {
    n.indent.adjustMultilineComment = !1;
  }
  return n;
}
var f = function () {
  function e(t, n, i) {
    r(this, e);
    this._generator = void 0;
    this._generator = new c(t, n, i);
  }
  i(e, [{
    key: "generate",
    value: function () {
      return this._generator.generate();
    }
  }]);
  return e;
}();
exports.CodeGenerator = f;