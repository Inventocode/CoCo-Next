/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2230
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
  var d = e.opts.$data && a && a.$data
  if (d) {
    r += " var schema" + e$level + " = " + e.util.getData(a.$data, e$dataLevel, e.dataPathArr) + "; "
  }
  if (!d) {
    r += " var schema" + e$level + " = validate.schema" + s + ";"
  }
  r += "var " + f + " = equal(" + l + ", schema" + e$level + "); if (!" + f + ") {   "
  var h = h || []
  h.push(r)
  r = ""
  if (false !== e.createErrors) {
    r += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { allowedValue: schema" + e$level + " } "
    if (false !== e.opts.messages) {
      r += " , message: 'should be equal to constant' "
    }
    if (e.opts.verbose) {
      r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "
    }
    r += " } "
  } else {
    r += " {} "
  }
  var p = r
  r = h.pop()
  if (!e.compositeRule && u) {
    if (e.async) {
      r += " throw new ValidationError([" + p + "]); "
    } else {
      r += " validate.errors = [" + p + "]; return false; "
    }
  } else {
    r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
  }
  r += " }"
  if (u) {
    r += " else { "
  }
  return r
}
