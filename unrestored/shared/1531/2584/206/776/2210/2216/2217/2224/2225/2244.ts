/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2244
 */

"use strict"

module.exports = function (e, t, n) {
  var r
  var i = " "
  var e$level = e.level
  var e$dataLevel = e.dataLevel
  var s = e.schema[t]
  var c = e.schemaPath + e.util.getProperty(t)
  var u = e.errSchemaPath + "/" + t
  var l = !e.opts.allErrors
  var f = "data" + (e$dataLevel || "")
  var d = "valid" + e$level
  var h = e.opts.$data && s && s.$data
  if (h) {
    i += " var schema" + e$level + " = " + e.util.getData(s.$data, e$dataLevel, e.dataPathArr) + "; "
    r = "schema" + e$level
  } else {
    r = s
  }
  if ((s || h) && false !== e.opts.uniqueItems) {
    if (h) {
      i += " var " + d + "; if (" + r + " === false || " + r + " === undefined) " + d + " = true; else if (typeof " + r + " != 'boolean') " + d + " = false; else { "
    }
    i += " var i = " + f + ".length , " + d + " = true , j; if (i > 1) { "
    var p = e.schema.items && e.schema.items.type
    var _ = Array.isArray(p)
    if (!p || "object" == p || "array" == p || _ && (p.indexOf("object") >= 0 || p.indexOf("array") >= 0)) {
      i += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + f + "[i], " + f + "[j])) { " + d + " = false; break outer; } } } "
    } else {
      i += " var itemIndices = {}, item; for (;i--;) { var item = " + f + "[i]; "
      var A = "checkDataType" + (_ ? "s" : "")
      i += " if (" + e.util[A](p, "item", e.opts.strictNumbers, true) + ") continue; "
      if (_) {
        i += " if (typeof item == 'string') item = '\"' + item; "
      }
      i += " if (typeof itemIndices[item] == 'number') { " + d + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "
    }
    i += " } "
    if (h) {
      i += "  }  "
    }
    i += " if (!" + d + ") {   "
    var g = g || []
    g.push(i)
    i = ""
    if (false !== e.createErrors) {
      i += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { i: i, j: j } "
      if (false !== e.opts.messages) {
        i += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "
      }
      if (e.opts.verbose) {
        i += " , schema:  "
        i += h ? "validate.schema" + c : "" + s
        i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "
      }
      i += " } "
    } else {
      i += " {} "
    }
    var v = i
    i = g.pop()
    if (!e.compositeRule && l) {
      if (e.async) {
        i += " throw new ValidationError([" + v + "]); "
      } else {
        i += " validate.errors = [" + v + "]; return false; "
      }
    } else {
      i += " var err = " + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
    }
    i += " } "
    if (l) {
      i += " else { "
    }
  } else if (l) {
    i += " if (true) { "
  }
  return i
}
