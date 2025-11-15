/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2236
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
  var A = "i" + e$level
  var g = h.dataLevel = e.dataLevel + 1
  var v = "data" + g
  var /* [auto-meaningful-name] */e$baseId = e.baseId
  r += "var " + d + " = errors;var " + f + ";"
  if (Array.isArray(a)) {
    var /* [auto-meaningful-name] */e$schema$additionalItems = e.schema.additionalItems
    if (false === e$schema$additionalItems) {
      r += " " + f + " = " + l + ".length <= " + a.length + "; "
      var b = c
      c = e.errSchemaPath + "/additionalItems"
      r += "  if (!" + f + ") {   "
      var w = w || []
      w.push(r)
      r = ""
      if (false !== e.createErrors) {
        r += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + a.length + " } "
        if (false !== e.opts.messages) {
          r += " , message: 'should NOT have more than " + a.length + " items' "
        }
        if (e.opts.verbose) {
          r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "
        }
        r += " } "
      } else {
        r += " {} "
      }
      var E = r
      r = w.pop()
      if (!e.compositeRule && u) {
        if (e.async) {
          r += " throw new ValidationError([" + E + "]); "
        } else {
          r += " validate.errors = [" + E + "]; return false; "
        }
      } else {
        r += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
      }
      r += " } "
      c = b
      if (u) {
        p += "}"
        r += " else { "
      }
    }
    var x = a
    if (x) {
      for (var C, O = -1, k = x.length - 1; O < k;) {
        C = x[O += 1]
        if (e.opts.strictKeywords ? "object" == typeof C && Object.keys(C).length > 0 || false === C : e.util.schemaHasRules(C, e.RULES.all)) {
          r += " " + _ + " = true; if (" + l + ".length > " + O + ") { "
          var S = l + "[" + O + "]"
          h.schema = C
          h.schemaPath = s + "[" + O + "]"
          h.errSchemaPath = c + "/" + O
          h.errorPath = e.util.getPathExpr(e.errorPath, O, e.opts.jsonPointers, true)
          h.dataPathArr[g] = O
          var T = e.validate(h)
          h.baseId = e$baseId
          if (e.util.varOccurences(T, v) < 2) {
            r += " " + e.util.varReplace(T, v, S) + " "
          } else {
            r += " var " + v + " = " + S + "; " + T + " "
          }
          r += " }  "
          if (u) {
            r += " if (" + _ + ") { "
            p += "}"
          }
        }
      }
    }
    if ("object" == typeof e$schema$additionalItems && (e.opts.strictKeywords ? "object" == typeof e$schema$additionalItems && Object.keys(e$schema$additionalItems).length > 0 || false === e$schema$additionalItems : e.util.schemaHasRules(e$schema$additionalItems, e.RULES.all))) {
      h.schema = e$schema$additionalItems
      h.schemaPath = e.schemaPath + ".additionalItems"
      h.errSchemaPath = e.errSchemaPath + "/additionalItems"
      r += " " + _ + " = true; if (" + l + ".length > " + a.length + ") {  for (var " + A + " = " + a.length + "; " + A + " < " + l + ".length; " + A + "++) { "
      h.errorPath = e.util.getPathExpr(e.errorPath, A, e.opts.jsonPointers, true)
      S = l + "[" + A + "]"
      h.dataPathArr[g] = A
      T = e.validate(h)
      h.baseId = e$baseId
      if (e.util.varOccurences(T, v) < 2) {
        r += " " + e.util.varReplace(T, v, S) + " "
      } else {
        r += " var " + v + " = " + S + "; " + T + " "
      }
      if (u) {
        r += " if (!" + _ + ") break; "
      }
      r += " } }  "
      if (u) {
        r += " if (" + _ + ") { "
        p += "}"
      }
    }
  } else if (e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || false === a : e.util.schemaHasRules(a, e.RULES.all)) {
    h.schema = a
    h.schemaPath = s
    h.errSchemaPath = c
    r += "  for (var " + A + " = 0; " + A + " < " + l + ".length; " + A + "++) { "
    h.errorPath = e.util.getPathExpr(e.errorPath, A, e.opts.jsonPointers, true)
    S = l + "[" + A + "]"
    h.dataPathArr[g] = A
    T = e.validate(h)
    h.baseId = e$baseId
    if (e.util.varOccurences(T, v) < 2) {
      r += " " + e.util.varReplace(T, v, S) + " "
    } else {
      r += " var " + v + " = " + S + "; " + T + " "
    }
    if (u) {
      r += " if (!" + _ + ") break; "
    }
    r += " }"
  }
  if (u) {
    r += " " + p + " if (" + d + " == errors) {"
  }
  return r
}
