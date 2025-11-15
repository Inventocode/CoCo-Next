/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2242
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
  var f = "errs__" + e$level
  var d = e.util.copy(e)
  d.level++
  var h = "valid" + d.level
  r += "var " + f + " = errors;"
  if (e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || false === a : e.util.schemaHasRules(a, e.RULES.all)) {
    d.schema = a
    d.schemaPath = s
    d.errSchemaPath = c
    var p = "key" + e$level
    var _ = "idx" + e$level
    var A = "i" + e$level
    var g = "' + " + p + " + '"
    var v = "data" + (d.dataLevel = e.dataLevel + 1)
    var m = "dataProperties" + e$level
    var /* [auto-meaningful-name] */e$opts$ownProperties = e.opts.ownProperties
    var /* [auto-meaningful-name] */e$baseId = e.baseId
    if (e$opts$ownProperties) {
      r += " var " + m + " = undefined; "
    }
    r += e$opts$ownProperties ? " " + m + " = " + m + " || Object.keys(" + l + "); for (var " + _ + "=0; " + _ + "<" + m + ".length; " + _ + "++) { var " + p + " = " + m + "[" + _ + "]; " : " for (var " + p + " in " + l + ") { "
    r += " var startErrs" + e$level + " = errors; "
    var w = p
    var /* [auto-meaningful-name] */e$compositeRule = e.compositeRule
    e.compositeRule = d.compositeRule = true
    var x = e.validate(d)
    d.baseId = e$baseId
    if (e.util.varOccurences(x, v) < 2) {
      r += " " + e.util.varReplace(x, v, w) + " "
    } else {
      r += " var " + v + " = " + w + "; " + x + " "
    }
    e.compositeRule = d.compositeRule = e$compositeRule
    r += " if (!" + h + ") { for (var " + A + "=startErrs" + e$level + "; " + A + "<errors; " + A + "++) { vErrors[" + A + "].propertyName = " + p + "; }   var err =   "
    if (false !== e.createErrors) {
      r += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { propertyName: '" + g + "' } "
      if (false !== e.opts.messages) {
        r += " , message: 'property name \\'" + g + "\\' is invalid' "
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
    if (u) {
      r += " break; "
    }
    r += " } }"
  }
  if (u) {
    r += "  if (" + f + " == errors) {"
  }
  return r
}
