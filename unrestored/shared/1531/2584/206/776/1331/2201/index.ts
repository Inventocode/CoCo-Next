/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2201
 */

"use strict"

var r = require("../../../../36/2668/220")
var i = require("../../../../36/2668/230")
var o = require("../../../../36/2668/2689/703/index")
var a = require("../../../../38/607/1970/529")
var s = require("../../../../38/607/356")
var c = require("../../../../38/607/357/index")
var u = require("./2202")
var l = /^[\da-fA-F]+$/
var f = /^\d+$/
var d = new WeakMap()
function h(e) {
  e = e.Parser.acorn || e
  var t = d.get(e)
  if (!t) {
    var e$tokTypes = e.tokTypes
    var e$TokContext = e.TokContext
    var e$TokenType = e.TokenType
    var o = new e$TokContext("<tag", false)
    var a = new e$TokContext("</tag", false)
    var s = new e$TokContext("<tag>...</tag>", true, true)
    var c = {
      tc_oTag: o,
      tc_cTag: a,
      tc_expr: s
    }
    var u = {
      jsxName: new e$TokenType("jsxName"),
      jsxText: new e$TokenType("jsxText", {
        beforeExpr: true
      }),
      jsxTagStart: new e$TokenType("jsxTagStart", {
        startsExpr: true
      }),
      jsxTagEnd: new e$TokenType("jsxTagEnd")
    }
    u.jsxTagStart.updateContext = function () {
      this.context.push(s)
      this.context.push(o)
      this.exprAllowed = false
    }
    u.jsxTagEnd.updateContext = function (e) {
      var t = this.context.pop()
      if (t === o && e === e$tokTypes.slash || t === a) {
        this.context.pop()
        this.exprAllowed = this.curContext() === s
      } else {
        this.exprAllowed = true
      }
    }
    t = {
      tokContexts: c,
      tokTypes: u
    }
    d.set(e, t)
  }
  return t
}
function p(e) {
  return e ? "JSXIdentifier" === e.type ? e.name : "JSXNamespacedName" === e.type ? e.namespace.name + ":" + e.name.name : "JSXMemberExpression" === e.type ? p(e.object) + "." + p(e.property) : undefined : e
}
module.exports = function (e) {
  e = e || {}
  return function (t) {
    return function (e, t) {
      var d = t.acorn || require("../1111")
      var _ = h(d)
      var d$tokTypes = d.tokTypes
      var _$tokTypes = _.tokTypes
      var d$tokContexts = d.tokContexts
      var _$tokContexts$tc_oTag = _.tokContexts.tc_oTag
      var _$tokContexts$tc_cTag = _.tokContexts.tc_cTag
      var _$tokContexts$tc_expr = _.tokContexts.tc_expr
      var d$isNewLine = d.isNewLine
      var d$isIdentifierStart = d.isIdentifierStart
      var d$isIdentifierChar = d.isIdentifierChar
      return function (t) {
        s(d, t)
        var n = c(d)
        function d() {
          r(this, d)
          return n.apply(this, arguments)
        }
        i(d, [{
          key: "jsx_readToken",
          value: function () {
            for (var e = "", this$pos = this.pos;;) {
              if (this.pos >= this.input.length) {
                this.raise(this.start, "Unterminated JSX contents")
              }
              var n = this.input.charCodeAt(this.pos)
              switch (n) {
                case 60:
                case 123:
                  return this.pos === this.start ? 60 === n && this.exprAllowed ? (++this.pos, this.finishToken(_$tokTypes.jsxTagStart)) : this.getTokenFromCode(n) : (e += this.input.slice(this$pos, this.pos), this.finishToken(_$tokTypes.jsxText, e))
                case 38:
                  e += this.input.slice(this$pos, this.pos)
                  e += this.jsx_readEntity()
                  this$pos = this.pos
                  break
                case 62:
                case 125:
                  this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (62 === n ? "&gt;" : "&rbrace;") + "` or `{\"" + this.input[this.pos] + "\"}`?")
                default:
                  if (d$isNewLine(n)) {
                    e += this.input.slice(this$pos, this.pos)
                    e += this.jsx_readNewLine(true)
                    this$pos = this.pos
                  } else {
                    ++this.pos
                  }
              }
            }
          }
        }, {
          key: "jsx_readNewLine",
          value: function (e) {
            var t
            var n = this.input.charCodeAt(this.pos)
            ++this.pos
            if (13 === n && 10 === this.input.charCodeAt(this.pos)) {
              ++this.pos
              t = e ? "\n" : "\r\n"
            } else {
              t = String.fromCharCode(n)
            }
            if (this.options.locations) {
              ++this.curLine
              this.lineStart = this.pos
            }
            return t
          }
        }, {
          key: "jsx_readString",
          value: function (e) {
            for (var t = "", n = ++this.pos;;) {
              if (this.pos >= this.input.length) {
                this.raise(this.start, "Unterminated string constant")
              }
              var r = this.input.charCodeAt(this.pos)
              if (r === e) {
                break
              }
              if (38 === r) {
                t += this.input.slice(n, this.pos)
                t += this.jsx_readEntity()
                n = this.pos
              } else {
                if (d$isNewLine(r)) {
                  t += this.input.slice(n, this.pos)
                  t += this.jsx_readNewLine(false)
                  n = this.pos
                } else {
                  ++this.pos
                }
              }
            }
            t += this.input.slice(n, this.pos++)
            return this.finishToken(d$tokTypes.string, t)
          }
        }, {
          key: "jsx_readEntity",
          value: function () {
            var e
            var t = ""
            var n = 0
            var r = this.input[this.pos]
            if ("&" !== r) {
              this.raise(this.pos, "Entity must start with an ampersand")
            }
            for (var i = ++this.pos; this.pos < this.input.length && n++ < 10;) {
              if (";" === (r = this.input[this.pos++])) {
                if ("#" === t[0]) {
                  if ("x" === t[1]) {
                    t = t.substr(2)
                    if (l.test(t)) {
                      e = String.fromCharCode(parseInt(t, 16))
                    }
                  } else {
                    t = t.substr(1)
                    if (f.test(t)) {
                      e = String.fromCharCode(parseInt(t, 10))
                    }
                  }
                } else {
                  e = u[t]
                }
                break
              }
              t += r
            }
            return e || (this.pos = i, "&")
          }
        }, {
          key: "jsx_readWord",
          value: function () {
            var e
            var this$pos = this.pos
            do {
              e = this.input.charCodeAt(++this.pos)
            } while (d$isIdentifierChar(e) || 45 === e)
            return this.finishToken(_$tokTypes.jsxName, this.input.slice(this$pos, this.pos))
          }
        }, {
          key: "jsx_parseIdentifier",
          value: function () {
            var e = this.startNode()
            if (this.type === _$tokTypes.jsxName) {
              e.name = this.value
            } else {
              if (this.type.keyword) {
                e.name = this.type.keyword
              } else {
                this.unexpected()
              }
            }
            this.next()
            return this.finishNode(e, "JSXIdentifier")
          }
        }, {
          key: "jsx_parseNamespacedName",
          value: function () {
            var this$start = this.start
            var this$startLoc = this.startLoc
            var r = this.jsx_parseIdentifier()
            if (!e.allowNamespaces || !this.eat(d$tokTypes.colon)) {
              return r
            }
            var i = this.startNodeAt(this$start, this$startLoc)
            i.namespace = r
            i.name = this.jsx_parseIdentifier()
            return this.finishNode(i, "JSXNamespacedName")
          }
        }, {
          key: "jsx_parseElementName",
          value: function () {
            if (this.type === _$tokTypes.jsxTagEnd) {
              return ""
            }
            var this$start = this.start
            var this$startLoc = this.startLoc
            var r = this.jsx_parseNamespacedName()
            for (this.type !== d$tokTypes.dot || "JSXNamespacedName" !== r.type || e.allowNamespacedObjects || this.unexpected(); this.eat(d$tokTypes.dot);) {
              var i = this.startNodeAt(this$start, this$startLoc)
              i.object = r
              i.property = this.jsx_parseIdentifier()
              r = this.finishNode(i, "JSXMemberExpression")
            }
            return r
          }
        }, {
          key: "jsx_parseAttributeValue",
          value: function () {
            switch (this.type) {
              case d$tokTypes.braceL:
                var e = this.jsx_parseExpressionContainer()
                if ("JSXEmptyExpression" === e.expression.type) {
                  this.raise(e.start, "JSX attributes must only be assigned a non-empty expression")
                }
                return e
              case _$tokTypes.jsxTagStart:
              case d$tokTypes.string:
                return this.parseExprAtom()
              default:
                this.raise(this.start, "JSX value should be either an expression or a quoted JSX text")
            }
          }
        }, {
          key: "jsx_parseEmptyExpression",
          value: function () {
            var e = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc)
            return this.finishNodeAt(e, "JSXEmptyExpression", this.start, this.startLoc)
          }
        }, {
          key: "jsx_parseExpressionContainer",
          value: function () {
            var e = this.startNode()
            this.next()
            e.expression = this.type === d$tokTypes.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression()
            this.expect(d$tokTypes.braceR)
            return this.finishNode(e, "JSXExpressionContainer")
          }
        }, {
          key: "jsx_parseAttribute",
          value: function () {
            var e = this.startNode()
            return this.eat(d$tokTypes.braceL) ? (this.expect(d$tokTypes.ellipsis), e.argument = this.parseMaybeAssign(), this.expect(d$tokTypes.braceR), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsx_parseNamespacedName(), e.value = this.eat(d$tokTypes.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(e, "JSXAttribute"))
          }
        }, {
          key: "jsx_parseOpeningElementAt",
          value: function (e, t) {
            var n = this.startNodeAt(e, t)
            n.attributes = []
            var r = this.jsx_parseElementName()
            for (r && (n.name = r); this.type !== d$tokTypes.slash && this.type !== _$tokTypes.jsxTagEnd;) {
              n.attributes.push(this.jsx_parseAttribute())
            }
            n.selfClosing = this.eat(d$tokTypes.slash)
            this.expect(_$tokTypes.jsxTagEnd)
            return this.finishNode(n, r ? "JSXOpeningElement" : "JSXOpeningFragment")
          }
        }, {
          key: "jsx_parseClosingElementAt",
          value: function (e, t) {
            var n = this.startNodeAt(e, t)
            var r = this.jsx_parseElementName()
            if (r) {
              n.name = r
            }
            this.expect(_$tokTypes.jsxTagEnd)
            return this.finishNode(n, r ? "JSXClosingElement" : "JSXClosingFragment")
          }
        }, {
          key: "jsx_parseElementAt",
          value: function (e, t) {
            var n = this.startNodeAt(e, t)
            var r = []
            var i = this.jsx_parseOpeningElementAt(e, t)
            var o = null
            if (!i.selfClosing) {
              e: for (;;) {
                switch (this.type) {
                  case _$tokTypes.jsxTagStart:
                    if (e = this.start, t = this.startLoc, this.next(), this.eat(d$tokTypes.slash)) {
                      o = this.jsx_parseClosingElementAt(e, t)
                      break e
                    }
                    r.push(this.jsx_parseElementAt(e, t))
                    break
                  case _$tokTypes.jsxText:
                    r.push(this.parseExprAtom())
                    break
                  case d$tokTypes.braceL:
                    r.push(this.jsx_parseExpressionContainer())
                    break
                  default:
                    this.unexpected()
                }
              }
              if (p(o.name) !== p(i.name)) {
                this.raise(o.start, "Expected corresponding JSX closing tag for <" + p(i.name) + ">")
              }
            }
            var a = i.name ? "Element" : "Fragment"
            n["opening" + a] = i
            n["closing" + a] = o
            n.children = r
            if (this.type === d$tokTypes.relational && "<" === this.value) {
              this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag")
            }
            return this.finishNode(n, "JSX" + a)
          }
        }, {
          key: "jsx_parseText",
          value: function () {
            var e = this.parseLiteral(this.value)
            e.type = "JSXText"
            return e
          }
        }, {
          key: "jsx_parseElement",
          value: function () {
            var this$start = this.start
            var this$startLoc = this.startLoc
            this.next()
            return this.jsx_parseElementAt(this$start, this$startLoc)
          }
        }, {
          key: "parseExprAtom",
          value: function (e) {
            return this.type === _$tokTypes.jsxText ? this.jsx_parseText() : this.type === _$tokTypes.jsxTagStart ? this.jsx_parseElement() : o(a(d.prototype), "parseExprAtom", this).call(this, e)
          }
        }, {
          key: "readToken",
          value: function (e) {
            var t = this.curContext()
            if (t === _$tokContexts$tc_expr) {
              return this.jsx_readToken()
            }
            if (t === _$tokContexts$tc_oTag || t === _$tokContexts$tc_cTag) {
              if (d$isIdentifierStart(e)) {
                return this.jsx_readWord()
              }
              if (62 == e) {
                ++this.pos
                return this.finishToken(_$tokTypes.jsxTagEnd)
              }
              if ((34 === e || 39 === e) && t == _$tokContexts$tc_oTag) {
                return this.jsx_readString(e)
              }
            }
            return 60 === e && this.exprAllowed && 33 !== this.input.charCodeAt(this.pos + 1) ? (++this.pos, this.finishToken(_$tokTypes.jsxTagStart)) : o(a(d.prototype), "readToken", this).call(this, e)
          }
        }, {
          key: "updateContext",
          value: function (e) {
            if (this.type == d$tokTypes.braceL) {
              var t = this.curContext()
              if (t == _$tokContexts$tc_oTag) {
                this.context.push(d$tokContexts.b_expr)
              } else {
                if (t == _$tokContexts$tc_expr) {
                  this.context.push(d$tokContexts.b_tmpl)
                } else {
                  o(a(d.prototype), "updateContext", this).call(this, e)
                }
              }
              this.exprAllowed = true
            } else {
              if (this.type !== d$tokTypes.slash || e !== _$tokTypes.jsxTagStart) {
                return o(a(d.prototype), "updateContext", this).call(this, e)
              }
              this.context.length -= 2
              this.context.push(_$tokContexts$tc_cTag)
              this.exprAllowed = false
            }
          }
        }], [{
          key: "acornJsx",
          get: function () {
            return _
          }
        }])
        return d
      }(t)
    }({
      allowNamespaces: false !== e.allowNamespaces,
      allowNamespacedObjects: !!e.allowNamespacedObjects
    }, t)
  }
}
Object.defineProperty(module.exports, "tokTypes", {
  get: function () {
    return h(require("../1111")).tokTypes
  },
  configurable: true,
  enumerable: true
})
