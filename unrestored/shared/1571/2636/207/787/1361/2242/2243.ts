/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2243
 */

"use strict"

var /* [auto-meaningful-name] */_Boolean = "Boolean"
var /* [auto-meaningful-name] */Identifier = "Identifier"
var /* [auto-meaningful-name] */Keyword = "Keyword"
var a = "Null"
var /* [auto-meaningful-name] */Numeric = "Numeric"
var /* [auto-meaningful-name] */Punctuator = "Punctuator"
var /* [auto-meaningful-name] */_String = "String"
var /* [auto-meaningful-name] */RegularExpression = "RegularExpression"
var /* [auto-meaningful-name] */Template = "Template"
var /* [auto-meaningful-name] */JSXIdentifier = "JSXIdentifier"
var /* [auto-meaningful-name] */JSXText = "JSXText"
function p(e, t) {
  this._acornTokTypes = e
  this._tokens = []
  this._curlyBrace = null
  this._code = t
}
p.prototype = {
  constructor: p,
  translate: function (e, t) {
    var /* [auto-meaningful-name] */e$type = e.type
    var /* [auto-meaningful-name] */this$_acornTokTypes = this._acornTokTypes
    if (e$type === this$_acornTokTypes.name) {
      e.type = Identifier
      if ("static" === e.value) {
        e.type = Keyword
      }
      if (t.ecmaVersion > 5 && ("yield" === e.value || "let" === e.value)) {
        e.type = Keyword
      }
    } else if (e$type === this$_acornTokTypes.semi || e$type === this$_acornTokTypes.comma || e$type === this$_acornTokTypes.parenL || e$type === this$_acornTokTypes.parenR || e$type === this$_acornTokTypes.braceL || e$type === this$_acornTokTypes.braceR || e$type === this$_acornTokTypes.dot || e$type === this$_acornTokTypes.bracketL || e$type === this$_acornTokTypes.colon || e$type === this$_acornTokTypes.question || e$type === this$_acornTokTypes.bracketR || e$type === this$_acornTokTypes.ellipsis || e$type === this$_acornTokTypes.arrow || e$type === this$_acornTokTypes.jsxTagStart || e$type === this$_acornTokTypes.incDec || e$type === this$_acornTokTypes.starstar || e$type === this$_acornTokTypes.jsxTagEnd || e$type === this$_acornTokTypes.prefix || e$type.binop && !e$type.keyword || e$type.isAssign) {
      e.type = Punctuator
      e.value = this._code.slice(e.start, e.end)
    } else if (e$type === this$_acornTokTypes.jsxName) {
      e.type = JSXIdentifier
    } else if ("jsxText" === e$type.label || e$type === this$_acornTokTypes.jsxAttrValueToken) {
      e.type = JSXText
    } else if (e$type.keyword) {
      if ("true" === e$type.keyword || "false" === e$type.keyword) {
        e.type = _Boolean
      } else {
        if ("null" === e$type.keyword) {
          e.type = a
        } else {
          e.type = Keyword
        }
      }
    } else if (e$type === this$_acornTokTypes.num) {
      e.type = Numeric
      e.value = this._code.slice(e.start, e.end)
    } else if (e$type === this$_acornTokTypes.string) {
      if (t.jsxAttrValueToken) {
        t.jsxAttrValueToken = false
        e.type = JSXText
      } else {
        e.type = _String
      }
      e.value = this._code.slice(e.start, e.end)
    } else if (e$type === this$_acornTokTypes.regexp) {
      e.type = RegularExpression
      var /* [auto-meaningful-name] */e$value = e.value
      e.regex = {
        flags: e$value.flags,
        pattern: e$value.pattern
      }
      e.value = "/".concat(e$value.pattern, "/").concat(e$value.flags)
    }
    return e
  },
  onToken: function (e, t) {
    var n = this
    var /* [auto-meaningful-name] */this$_acornTokTypes = this._acornTokTypes
    var /* [auto-meaningful-name] */t$tokens = t.tokens
    var /* [auto-meaningful-name] */this$_tokens = this._tokens
    function a() {
      t$tokens.push(function (e, t) {
        var n = e[0]
        var r = e[e.length - 1]
        var i = {
          type: Template,
          value: t.slice(n.start, r.end)
        }
        if (n.loc) {
          i.loc = {
            start: n.loc.start,
            end: r.loc.end
          }
        }
        if (n.range) {
          i.start = n.range[0]
          i.end = r.range[1]
          i.range = [i.start, i.end]
        }
        return i
      }(n._tokens, n._code))
      n._tokens = []
    }
    if (e.type !== this$_acornTokTypes.eof) {
      if (e.type === this$_acornTokTypes.backQuote) {
        if (this._curlyBrace) {
          t$tokens.push(this.translate(this._curlyBrace, t))
          this._curlyBrace = null
        }
        this$_tokens.push(e)
        return void (this$_tokens.length > 1 && a())
      }
      if (e.type === this$_acornTokTypes.dollarBraceL) {
        this$_tokens.push(e)
        return void a()
      }
      if (e.type === this$_acornTokTypes.braceR) {
        if (this._curlyBrace) {
          t$tokens.push(this.translate(this._curlyBrace, t))
        }
        return void (this._curlyBrace = e)
      }
      if (e.type === this$_acornTokTypes.template || e.type === this$_acornTokTypes.invalidTemplate) {
        if (this._curlyBrace) {
          this$_tokens.push(this._curlyBrace)
          this._curlyBrace = null
        }
        return void this$_tokens.push(e)
      }
      if (this._curlyBrace) {
        t$tokens.push(this.translate(this._curlyBrace, t))
        this._curlyBrace = null
      }
      t$tokens.push(this.translate(e, t))
    } else if (this._curlyBrace) {
      t$tokens.push(this.translate(this._curlyBrace, t))
    }
  }
}
module.exports = p
