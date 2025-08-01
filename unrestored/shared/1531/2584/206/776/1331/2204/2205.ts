"use strict";

var r = "Boolean";
var i = "Identifier";
var o = "Keyword";
var a = "Null";
var s = "Numeric";
var c = "Punctuator";
var u = "String";
var l = "RegularExpression";
var f = "Template";
var d = "JSXIdentifier";
var h = "JSXText";
function p(e, t) {
  this._acornTokTypes = e;
  this._tokens = [];
  this._curlyBrace = null;
  this._code = t;
}
p.prototype = {
  constructor: p,
  translate: function (e, t) {
    var n = e.type;
    var f = this._acornTokTypes;
    if (n === f.name) {
      e.type = i;
      if ("static" === e.value) {
        e.type = o;
      }
      if (t.ecmaVersion > 5 && ("yield" === e.value || "let" === e.value)) {
        e.type = o;
      }
    } else if (n === f.semi || n === f.comma || n === f.parenL || n === f.parenR || n === f.braceL || n === f.braceR || n === f.dot || n === f.bracketL || n === f.colon || n === f.question || n === f.bracketR || n === f.ellipsis || n === f.arrow || n === f.jsxTagStart || n === f.incDec || n === f.starstar || n === f.jsxTagEnd || n === f.prefix || n.binop && !n.keyword || n.isAssign) {
      e.type = c;
      e.value = this._code.slice(e.start, e.end);
    } else if (n === f.jsxName) {
      e.type = d;
    } else if ("jsxText" === n.label || n === f.jsxAttrValueToken) {
      e.type = h;
    } else if (n.keyword) {
      if ("true" === n.keyword || "false" === n.keyword) {
        e.type = r;
      } else {
        if ("null" === n.keyword) {
          e.type = a;
        } else {
          e.type = o;
        }
      }
    } else if (n === f.num) {
      e.type = s;
      e.value = this._code.slice(e.start, e.end);
    } else if (n === f.string) {
      if (t.jsxAttrValueToken) {
        t.jsxAttrValueToken = !1;
        e.type = h;
      } else {
        e.type = u;
      }
      e.value = this._code.slice(e.start, e.end);
    } else if (n === f.regexp) {
      e.type = l;
      var p = e.value;
      e.regex = {
        flags: p.flags,
        pattern: p.pattern
      };
      e.value = "/".concat(p.pattern, "/").concat(p.flags);
    }
    return e;
  },
  onToken: function (e, t) {
    var n = this;
    var r = this._acornTokTypes;
    var i = t.tokens;
    var o = this._tokens;
    function a() {
      i.push(function (e, t) {
        var n = e[0];
        var r = e[e.length - 1];
        var i = {
          type: f,
          value: t.slice(n.start, r.end)
        };
        if (n.loc) {
          i.loc = {
            start: n.loc.start,
            end: r.loc.end
          };
        }
        if (n.range) {
          i.start = n.range[0];
          i.end = r.range[1];
          i.range = [i.start, i.end];
        }
        return i;
      }(n._tokens, n._code));
      n._tokens = [];
    }
    if (e.type !== r.eof) {
      if (e.type === r.backQuote) {
        if (this._curlyBrace) {
          i.push(this.translate(this._curlyBrace, t));
          this._curlyBrace = null;
        }
        o.push(e);
        return void (o.length > 1 && a());
      }
      if (e.type === r.dollarBraceL) {
        o.push(e);
        return void a();
      }
      if (e.type === r.braceR) {
        if (this._curlyBrace) {
          i.push(this.translate(this._curlyBrace, t));
        }
        return void (this._curlyBrace = e);
      }
      if (e.type === r.template || e.type === r.invalidTemplate) {
        if (this._curlyBrace) {
          o.push(this._curlyBrace);
          this._curlyBrace = null;
        }
        return void o.push(e);
      }
      if (this._curlyBrace) {
        i.push(this.translate(this._curlyBrace, t));
        this._curlyBrace = null;
      }
      i.push(this.translate(e, t));
    } else if (this._curlyBrace) {
      i.push(this.translate(this._curlyBrace, t));
    }
  }
};
module.exports = p;