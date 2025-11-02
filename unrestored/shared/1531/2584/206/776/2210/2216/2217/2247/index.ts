/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2247
 */

"use strict"

var r = /^[a-z_$][a-z0-9_$-]*$/i
var i = require("./2248")
var o = require("./2249")
module.exports = {
  add: function (e, t) {
    var this$RULES = this.RULES
    if (this$RULES.keywords[e]) {
      throw new Error("Keyword " + e + " is already defined")
    }
    if (!r.test(e)) {
      throw new Error("Keyword " + e + " is not a valid identifier")
    }
    if (t) {
      this.validateKeyword(t, true)
      var t$type = t.type
      if (Array.isArray(t$type)) {
        for (var a = 0; a < t$type.length; a++) {
          c(e, t$type[a], t)
        }
      } else {
        c(e, t$type, t)
      }
      var t$metaSchema = t.metaSchema
      if (t$metaSchema) {
        if (t.$data && this._opts.$data) {
          t$metaSchema = {
            anyOf: [t$metaSchema, {
              $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
            }]
          }
        }
        t.validateSchema = this.compile(t$metaSchema, true)
      }
    }
    function c(e, t, r) {
      for (var o, a = 0; a < this$RULES.length; a++) {
        var s = this$RULES[a]
        if (s.type == t) {
          o = s
          break
        }
      }
      if (!o) {
        o = {
          type: t,
          rules: []
        }
        this$RULES.push(o)
      }
      var c = {
        keyword: e,
        definition: r,
        custom: true,
        code: i,
        implements: r.implements
      }
      o.rules.push(c)
      this$RULES.custom[e] = c
    }
    this$RULES.keywords[e] = this$RULES.all[e] = true
    return this
  },
  get: function (e) {
    var t = this.RULES.custom[e]
    return t ? t.definition : this.RULES.keywords[e] || false
  },
  remove: function (e) {
    var this$RULES = this.RULES
    delete this$RULES.keywords[e]
    delete this$RULES.all[e]
    delete this$RULES.custom[e]
    for (var n = 0; n < this$RULES.length; n++) {
      for (var this$RULESN$rules = this$RULES[n].rules, i = 0; i < this$RULESN$rules.length; i++) {
        if (this$RULESN$rules[i].keyword == e) {
          this$RULESN$rules.splice(i, 1)
          break
        }
      }
    }
    return this
  },
  validate: function e(t, n) {
    e.errors = null
    var r = this._validateKeyword = this._validateKeyword || this.compile(o, true)
    if (r(t)) {
      return true
    }
    e.errors = r.errors
    if (n) {
      throw new Error("custom keyword definition is invalid: " + this.errorsText(r.errors))
    }
    return false
  }
}
