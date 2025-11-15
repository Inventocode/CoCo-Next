/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2235
 */

"use strict"

module.exports = function (e, t, n) {
  var r = " "
  var /* [auto-meaningful-name] */e$level = e.level
  var /* [auto-meaningful-name] */e$dataLevel = e.dataLevel
  var a = e.schema[t]
  var s = e.schemaPath + e.util.getProperty(t)
  var c = e.errSchemaPath + "/" + t
  var u = !e.opts.allErrors
  var l = "data" + (e$dataLevel || "")
  var f = "valid" + e$level
  var d = "errs__" + e$level
  var h = e.util.copy(e)
  h.level++
  var p = "valid" + h.level
  var /* [auto-meaningful-name] */e$schema$then = e.schema.then
  var /* [auto-meaningful-name] */e$schema$else = e.schema.else
  var g = undefined !== e$schema$then && (e.opts.strictKeywords ? "object" == typeof e$schema$then && Object.keys(e$schema$then).length > 0 || false === e$schema$then : e.util.schemaHasRules(e$schema$then, e.RULES.all))
  var v = undefined !== e$schema$else && (e.opts.strictKeywords ? "object" == typeof e$schema$else && Object.keys(e$schema$else).length > 0 || false === e$schema$else : e.util.schemaHasRules(e$schema$else, e.RULES.all))
  var /* [auto-meaningful-name] */h$baseId = h.baseId
  if (g || v) {
    var y
    h.createErrors = false
    h.schema = a
    h.schemaPath = s
    h.errSchemaPath = c
    r += " var " + d + " = errors; var " + f + " = true;  "
    var /* [auto-meaningful-name] */e$compositeRule = e.compositeRule
    e.compositeRule = h.compositeRule = true
    r += "  " + e.validate(h) + " "
    h.baseId = h$baseId
    h.createErrors = true
    r += "  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }  "
    e.compositeRule = h.compositeRule = e$compositeRule
    if (g) {
      r += " if (" + p + ") {  "
      h.schema = e.schema.then
      h.schemaPath = e.schemaPath + ".then"
      h.errSchemaPath = e.errSchemaPath + "/then"
      r += "  " + e.validate(h) + " "
      h.baseId = h$baseId
      r += " " + f + " = " + p + "; "
      if (g && v) {
        r += " var " + (y = "ifClause" + e$level) + " = 'then'; "
      } else {
        y = "'then'"
      }
      r += " } "
      if (v) {
        r += " else { "
      }
    } else {
      r += " if (!" + p + ") { "
    }
    if (v) {
      h.schema = e.schema.else
      h.schemaPath = e.schemaPath + ".else"
      h.errSchemaPath = e.errSchemaPath + "/else"
      r += "  " + e.validate(h) + " "
      h.baseId = h$baseId
      r += " " + f + " = " + p + "; "
      if (g && v) {
        r += " var " + (y = "ifClause" + e$level) + " = 'else'; "
      } else {
        y = "'else'"
      }
      r += " } "
    }
    r += " if (!" + f + ") {   var err =   "
    if (false !== e.createErrors) {
      r += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { failingKeyword: " + y + " } "
      if (false !== e.opts.messages) {
        r += " , message: 'should match \"' + " + y + " + '\" schema' "
      }
      if (e.opts.verbose) {
        r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "
      }
      r += " } "
    } else {
      r += " {} "
    }
    r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
    if (!e.compositeRule && u) {
      if (e.async) {
        r += " throw new ValidationError(vErrors); "
      } else {
        r += " validate.errors = vErrors; return false; "
      }
    }
    r += " }   "
    if (u) {
      r += " else { "
    }
  } else if (u) {
    r += " if (true) { "
  }
  return r
}
