"use strict";

var r = require("../../../../../../3272/3198/2668/220");
var i = require("../../../../../../3272/3198/2668/230");
var o = require("../../../../../../3272/3198/2668/2689/703/index");
var a = require("../../../../../../3272/3198/2668/2689/529");
var s = require("../../../../../../3272/3198/2668/2689/356/index");
var c = require("../../../../../../3272/3198/2668/2689/357/index");
var u = require("./2205");
var l = require("../1332").normalizeOptions;
var f = Symbol("espree's internal state");
var d = Symbol("espree's esprimaFinishNode");
module.exports = function () {
  return function (e) {
    var t = Object.assign({}, e.acorn.tokTypes);
    if (e.acornJsx) {
      Object.assign(t, e.acornJsx.tokTypes);
    }
    return function (n) {
      s(p, n);
      var h = c(p);
      function p(e, n) {
        var i;
        r(this, p);
        if (!("object" === typeof e && null !== e)) {
          e = {};
        }
        if (!("string" === typeof n || n instanceof String)) {
          n = String(n);
        }
        var o = l(e);
        var a = o.ecmaFeatures || {};
        var s = !0 === o.tokens ? new u(t, n) : null;
        (i = h.call(this, {
          ecmaVersion: o.ecmaVersion,
          sourceType: o.sourceType,
          ranges: o.ranges,
          locations: o.locations,
          allowReturnOutsideFunction: Boolean(a.globalReturn),
          onToken: function (e) {
            if (s) {
              s.onToken(e, i[f]);
            }
            if (e.type !== t.eof) {
              i[f].lastToken = e;
            }
          },
          onComment: function (e, t, n, r, o, a) {
            if (i[f].comments) {
              var s = function (e, t, n, r, i, o) {
                var a = {
                  type: e ? "Block" : "Line",
                  value: t
                };
                if ("number" === typeof n) {
                  a.start = n;
                  a.end = r;
                  a.range = [n, r];
                }
                if ("object" === typeof i) {
                  a.loc = {
                    start: i,
                    end: o
                  };
                }
                return a;
              }(e, t, n, r, o, a);
              i[f].comments.push(s);
            }
          }
        }, n))[f] = {
          tokens: s ? [] : null,
          comments: !0 === o.comment ? [] : null,
          impliedStrict: !0 === a.impliedStrict && i.options.ecmaVersion >= 5,
          ecmaVersion: i.options.ecmaVersion,
          jsxAttrValueToken: !1,
          lastToken: null
        };
        return i;
      }
      i(p, [{
        key: "tokenize",
        value: function () {
          do {
            this.next();
          } while (this.type !== t.eof);
          this.next();
          var e = this[f];
          var n = e.tokens;
          if (e.comments) {
            n.comments = e.comments;
          }
          return n;
        }
      }, {
        key: "finishNode",
        value: function () {
          for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
            n[r] = arguments[r];
          }
          var i = (e = o(a(p.prototype), "finishNode", this)).call.apply(e, [this].concat(n));
          return this[d](i);
        }
      }, {
        key: "finishNodeAt",
        value: function () {
          for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
            n[r] = arguments[r];
          }
          var i = (e = o(a(p.prototype), "finishNodeAt", this)).call.apply(e, [this].concat(n));
          return this[d](i);
        }
      }, {
        key: "parse",
        value: function () {
          var e = this[f];
          var t = o(a(p.prototype), "parse", this).call(this);
          t.sourceType = this.options.sourceType;
          if (e.comments) {
            t.comments = e.comments;
          }
          if (e.tokens) {
            t.tokens = e.tokens;
          }
          if (t.range) {
            t.range[0] = t.body.length ? t.body[0].range[0] : t.range[0];
            t.range[1] = e.lastToken ? e.lastToken.range[1] : t.range[1];
          }
          if (t.loc) {
            t.loc.start = t.body.length ? t.body[0].loc.start : t.loc.start;
            t.loc.end = e.lastToken ? e.lastToken.loc.end : t.loc.end;
          }
          return t;
        }
      }, {
        key: "parseTopLevel",
        value: function (e) {
          if (this[f].impliedStrict) {
            this.strict = !0;
          }
          return o(a(p.prototype), "parseTopLevel", this).call(this, e);
        }
      }, {
        key: "raise",
        value: function (t, n) {
          var r = e.acorn.getLineInfo(this.input, t);
          var i = new SyntaxError(n);
          throw i.index = t, i.lineNumber = r.line, i.column = r.column + 1, i;
        }
      }, {
        key: "raiseRecoverable",
        value: function (e, t) {
          this.raise(e, t);
        }
      }, {
        key: "unexpected",
        value: function (e) {
          var t = "Unexpected token";
          if (null !== e && void 0 !== e) {
            if (this.pos = e, this.options.locations) {
              for (; this.pos < this.lineStart;) {
                this.lineStart = this.input.lastIndexOf("\n", this.lineStart - 2) + 1;
                --this.curLine;
              }
            }
            this.nextToken();
          }
          if (this.end > this.start) {
            t += " ".concat(this.input.slice(this.start, this.end));
          }
          this.raise(this.start, t);
        }
      }, {
        key: "jsx_readString",
        value: function (e) {
          var n = o(a(p.prototype), "jsx_readString", this).call(this, e);
          if (this.type === t.string) {
            this[f].jsxAttrValueToken = !0;
          }
          return n;
        }
      }, {
        key: d,
        value: function (e) {
          if ("TemplateElement" === e.type) {
            var t = "${" === this.input.slice(e.end, e.end + 2);
            if (e.range) {
              e.range[0]--;
              e.range[1] += t ? 2 : 1;
            }
            if (e.loc) {
              e.loc.start.column--;
              e.loc.end.column += t ? 2 : 1;
            }
          }
          if (e.type.indexOf("Function") > -1 && !e.generator) {
            e.generator = !1;
          }
          return e;
        }
      }]);
      return p;
    }(e);
  };
};