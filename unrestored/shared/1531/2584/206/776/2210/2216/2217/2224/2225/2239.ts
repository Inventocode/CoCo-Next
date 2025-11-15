/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2239
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
  var p = ""
  h.level++
  var _ = "valid" + h.level
  var /* [auto-meaningful-name] */h$baseId = h.baseId
  var g = "prevValid" + e$level
  var v = "passingSchemas" + e$level
  r += "var " + d + " = errors , " + g + " = false , " + f + " = false , " + v + " = null; "
  var /* [auto-meaningful-name] */e$compositeRule = e.compositeRule
  e.compositeRule = h.compositeRule = true
  var y = a
  if (y) {
    for (var b, w = -1, E = y.length - 1; w < E;) {
      b = y[w += 1]
      if (e.opts.strictKeywords ? "object" == typeof b && Object.keys(b).length > 0 || false === b : e.util.schemaHasRules(b, e.RULES.all)) {
        h.schema = b
        h.schemaPath = s + "[" + w + "]"
        h.errSchemaPath = c + "/" + w
        r += "  " + e.validate(h) + " "
        h.baseId = h$baseId
      } else {
        r += " var " + _ + " = true; "
      }
      if (w) {
        r += " if (" + _ + " && " + g + ") { " + f + " = false; " + v + " = [" + v + ", " + w + "]; } else { "
        p += "}"
      }
      r += " if (" + _ + ") { " + f + " = " + g + " = true; " + v + " = " + w + "; }"
    }
  }
  e.compositeRule = h.compositeRule = e$compositeRule
  r += p + "if (!" + f + ") {   var err =   "
  if (false !== e.createErrors) {
    r += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { passingSchemas: " + v + " } "
    if (false !== e.opts.messages) {
      r += " , message: 'should match exactly one schema in oneOf' "
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
  r += "} else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }"
  if (e.opts.allErrors) {
    r += " } "
  }
  return r
}
