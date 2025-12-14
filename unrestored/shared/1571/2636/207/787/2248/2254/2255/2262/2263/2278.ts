/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2278
 */

"use strict"

module.exports = function (e, t, n) {
  var r
  var i = " "
  var /* [auto-meaningful-name] */e$level = e.level
  var /* [auto-meaningful-name] */e$dataLevel = e.dataLevel
  var s = e.schema[t]
  var c = e.schemaPath + e.util.getProperty(t)
  var u = e.errSchemaPath + "/" + t
  var l = !e.opts.allErrors
  var f = "data" + (e$dataLevel || "")
  var d = e.opts.$data && s && s.$data
  if (d) {
    i += " var schema" + e$level + " = " + e.util.getData(s.$data, e$dataLevel, e.dataPathArr) + "; "
    r = "schema" + e$level
  } else {
    r = s
  }
  i += "if ( "
  if (d) {
    i += " (" + r + " !== undefined && typeof " + r + " != 'string') || "
  }
  i += " !" + (d ? "(new RegExp(" + r + "))" : e.usePattern(s)) + ".test(" + f + ") ) {   "
  var h = h || []
  h.push(i)
  i = ""
  if (false !== e.createErrors) {
    i += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { pattern:  "
    i += d ? "" + r : "" + e.util.toQuotedString(s)
    i += "  } "
    if (false !== e.opts.messages) {
      i += " , message: 'should match pattern \""
      i += d ? "' + " + r + " + '" : "" + e.util.escapeQuotes(s)
      i += "\"' "
    }
    if (e.opts.verbose) {
      i += " , schema:  "
      i += d ? "validate.schema" + c : "" + e.util.toQuotedString(s)
      i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "
    }
    i += " } "
  } else {
    i += " {} "
  }
  var p = i
  i = h.pop()
  if (!e.compositeRule && l) {
    if (e.async) {
      i += " throw new ValidationError([" + p + "]); "
    } else {
      i += " validate.errors = [" + p + "]; return false; "
    }
  } else {
    i += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
  }
  i += "} "
  if (l) {
    i += " else { "
  }
  return i
}
