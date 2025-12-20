/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2269
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
  var _ = "i" + e$level
  var A = h.dataLevel = e.dataLevel + 1
  var g = "data" + A
  var /* [auto-meaningful-name] */e$baseId = e.baseId
  var m = e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || false === a : e.util.schemaHasRules(a, e.RULES.all)
  r += "var " + d + " = errors;var " + f + ";"
  if (m) {
    var /* [auto-meaningful-name] */e$compositeRule = e.compositeRule
    e.compositeRule = h.compositeRule = true
    h.schema = a
    h.schemaPath = s
    h.errSchemaPath = c
    r += " var " + p + " = false; for (var " + _ + " = 0; " + _ + " < " + l + ".length; " + _ + "++) { "
    h.errorPath = e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers, true)
    var b = l + "[" + _ + "]"
    h.dataPathArr[A] = _
    var w = e.validate(h)
    h.baseId = e$baseId
    if (e.util.varOccurences(w, g) < 2) {
      r += " " + e.util.varReplace(w, g, b) + " "
    } else {
      r += " var " + g + " = " + b + "; " + w + " "
    }
    r += " if (" + p + ") break; }  "
    e.compositeRule = h.compositeRule = e$compositeRule
    r += "  if (!" + p + ") {"
  } else {
    r += " if (" + l + ".length == 0) {"
  }
  var E = E || []
  E.push(r)
  r = ""
  if (false !== e.createErrors) {
    r += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} "
    if (false !== e.opts.messages) {
      r += " , message: 'should contain a valid item' "
    }
    if (e.opts.verbose) {
      r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "
    }
    r += " } "
  } else {
    r += " {} "
  }
  var x = r
  r = E.pop()
  if (!e.compositeRule && u) {
    if (e.async) {
      r += " throw new ValidationError([" + x + "]); "
    } else {
      r += " validate.errors = [" + x + "]; return false; "
    }
  } else {
    r += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
  }
  r += " } else { "
  if (m) {
    r += "  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } "
  }
  if (e.opts.allErrors) {
    r += " } "
  }
  return r
}
