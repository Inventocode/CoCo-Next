/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2242
 */

"use strict"

var r = require("../../180")
var i = require("../../204")
var o = require("../../../../1058/1393/1143/712/index")
var a = require("../../../../1058/1393/1143/532")
var s = require("../../../../20/791/2385/283/index")
var c = require("../../../../20/791/2385/284/index")
var u = require("./2243")
var /* [auto-meaningful-name] */require$$_1362$normalizeOptions = require("../1362").normalizeOptions
var f = Symbol("espree's internal state")
var d = Symbol("espree's esprimaFinishNode")
module.exports = function () {
  return function (e) {
    var t = Object.assign({}, e.acorn.tokTypes)
    if (e.acornJsx) {
      Object.assign(t, e.acornJsx.tokTypes)
    }
    return function (n) {
      s(p, n)
      var h = c(p)
      function p(e, n) {
        var i
        r(this, p)
        if (!("object" === typeof e && null !== e)) {
          e = {}
        }
        if (!("string" === typeof n || n instanceof String)) {
          n = String(n)
        }
        var o = require$$_1362$normalizeOptions(e)
        var a = o.ecmaFeatures || {}
        var s = true === o.tokens ? new u(t, n) : null;
        (i = h.call(this, {
          ecmaVersion: o.ecmaVersion,
          sourceType: o.sourceType,
          ranges: o.ranges,
          locations: o.locations,
          allowReturnOutsideFunction: Boolean(a.globalReturn),
          onToken: function (e) {
            if (s) {
              s.onToken(e, i[f])
            }
            if (e.type !== t.eof) {
              i[f].lastToken = e
            }
          },
          onComment: function (e, t, n, r, o, a) {
            if (i[f].comments) {
              var s = function (e, t, n, r, i, o) {
                var a = {
                  type: e ? "Block" : "Line",
                  value: t
                }
                if ("number" === typeof n) {
                  a.start = n
                  a.end = r
                  a.range = [n, r]
                }
                if ("object" === typeof i) {
                  a.loc = {
                    start: i,
                    end: o
                  }
                }
                return a
              }(e, t, n, r, o, a)
              i[f].comments.push(s)
            }
          }
        }, n))[f] = {
          tokens: s ? [] : null,
          comments: true === o.comment ? [] : null,
          impliedStrict: true === a.impliedStrict && i.options.ecmaVersion >= 5,
          ecmaVersion: i.options.ecmaVersion,
          jsxAttrValueToken: false,
          lastToken: null
        }
        return i
      }
      i(p, [
        {
          key: "tokenize",
          value: function () {
            do {
              this.next()
            } while (this.type !== t.eof)
            this.next()
            var e = this[f]
            var /* [auto-meaningful-name] */e$tokens = e.tokens
            if (e.comments) {
              e$tokens.comments = e.comments
            }
            return e$tokens
          }
        }, {
          key: "finishNode",
          value: function () {
            for (var e, /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), r = 0; r < arguments$length; r++) {
              n[r] = arguments[r]
            }
            var i = (e = o(a(p.prototype), "finishNode", this)).call.apply(e, [this].concat(n))
            return this[d](i)
          }
        }, {
          key: "finishNodeAt",
          value: function () {
            for (var e, /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), r = 0; r < arguments$length; r++) {
              n[r] = arguments[r]
            }
            var i = (e = o(a(p.prototype), "finishNodeAt", this)).call.apply(e, [this].concat(n))
            return this[d](i)
          }
        }, {
          key: "parse",
          value: function () {
            var e = this[f]
            var t = o(a(p.prototype), "parse", this).call(this)
            t.sourceType = this.options.sourceType
            if (e.comments) {
              t.comments = e.comments
            }
            if (e.tokens) {
              t.tokens = e.tokens
            }
            if (t.range) {
              t.range[0] = t.body.length ? t.body[0].range[0] : t.range[0]
              t.range[1] = e.lastToken ? e.lastToken.range[1] : t.range[1]
            }
            if (t.loc) {
              t.loc.start = t.body.length ? t.body[0].loc.start : t.loc.start
              t.loc.end = e.lastToken ? e.lastToken.loc.end : t.loc.end
            }
            return t
          }
        }, {
          key: "parseTopLevel",
          value: function (e) {
            if (this[f].impliedStrict) {
              this.strict = true
            }
            return o(a(p.prototype), "parseTopLevel", this).call(this, e)
          }
        }, {
          key: "raise",
          value: function (t, n) {
            var r = e.acorn.getLineInfo(this.input, t)
            var i = new SyntaxError(n)
            i.index = t
            i.lineNumber = r.line
            i.column = r.column + 1
            throw i
          }
        }, {
          key: "raiseRecoverable",
          value: function (e, t) {
            this.raise(e, t)
          }
        }, {
          key: "unexpected",
          value: function (e) {
            var /* [auto-meaningful-name] */UnexpectedToken = "Unexpected token"
            if (null !== e && undefined !== e) {
              this.pos = e
              if (this.options.locations) {
                for (; this.pos < this.lineStart;) {
                  this.lineStart = this.input.lastIndexOf("\n", this.lineStart - 2) + 1
                  --this.curLine
                }
              }
              this.nextToken()
            }
            if (this.end > this.start) {
              UnexpectedToken += " ".concat(this.input.slice(this.start, this.end))
            }
            this.raise(this.start, UnexpectedToken)
          }
        }, {
          key: "jsx_readString",
          value: function (e) {
            var n = o(a(p.prototype), "jsx_readString", this).call(this, e)
            if (this.type === t.string) {
              this[f].jsxAttrValueToken = true
            }
            return n
          }
        }, {
          key: d,
          value: function (e) {
            if ("TemplateElement" === e.type) {
              var t = "${" === this.input.slice(e.end, e.end + 2)
              if (e.range) {
                e.range[0]--
                e.range[1] += t ? 2 : 1
              }
              if (e.loc) {
                e.loc.start.column--
                e.loc.end.column += t ? 2 : 1
              }
            }
            if (e.type.indexOf("Function") > -1 && !e.generator) {
              e.generator = false
            }
            return e
          }
        }
      ])
      return p
    }(e)
  }
}
