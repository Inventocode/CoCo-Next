/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2281
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
  var h = "schema" + e$level
  if (!d) {
    if (a.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
      var p = []
      var _ = a
      if (_) {
        for (var A, g = -1, v = _.length - 1; g < v;) {
          A = _[g += 1]
          var m = e.schema.properties[A]
          if (!(m && (e.opts.strictKeywords ? "object" == typeof m && Object.keys(m).length > 0 || false === m : e.util.schemaHasRules(m, e.RULES.all)))) {
            p[p.length] = A
          }
        }
      }
    } else {
      p = a
    }
  }
  if (d || p.length) {
    var /* [auto-meaningful-name] */e$errorPath = e.errorPath
    var b = d || p.length >= e.opts.loopRequired
    var /* [auto-meaningful-name] */e$opts$ownProperties = e.opts.ownProperties
    if (u) {
      r += " var missing" + e$level + "; "
      if (b) {
        if (!d) {
          r += " var " + h + " = validate.schema" + s + "; "
        }
        var E = "' + " + (T = "schema" + e$level + "[" + (O = "i" + e$level) + "]") + " + '"
        if (e.opts._errorDataPathProperty) {
          e.errorPath = e.util.getPathExpr(e$errorPath, T, e.opts.jsonPointers)
        }
        r += " var " + f + " = true; "
        if (d) {
          r += " if (schema" + e$level + " === undefined) " + f + " = true; else if (!Array.isArray(schema" + e$level + ")) " + f + " = false; else {"
        }
        r += " for (var " + O + " = 0; " + O + " < " + h + ".length; " + O + "++) { " + f + " = " + l + "[" + h + "[" + O + "]] !== undefined "
        if (e$opts$ownProperties) {
          r += " &&   Object.prototype.hasOwnProperty.call(" + l + ", " + h + "[" + O + "]) "
        }
        r += "; if (!" + f + ") break; } "
        if (d) {
          r += "  }  "
        }
        r += "  if (!" + f + ") {   ";
        (S = S || []).push(r)
        r = ""
        if (false !== e.createErrors) {
          r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + E + "' } "
          if (false !== e.opts.messages) {
            r += " , message: '"
            if (e.opts._errorDataPathProperty) {
              r += "is a required property"
            } else {
              r += "should have required property \\'" + E + "\\'"
            }
            r += "' "
          }
          if (e.opts.verbose) {
            r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "
          }
          r += " } "
        } else {
          r += " {} "
        }
        var x = r
        r = S.pop()
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
      } else {
        r += " if ( "
        var C = p
        if (C) {
          for (var O = -1, k = C.length - 1; O < k;) {
            D = C[O += 1]
            if (O) {
              r += " || "
            }
            r += " ( ( " + (P = l + (F = e.util.getProperty(D))) + " === undefined "
            if (e$opts$ownProperties) {
              r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(D) + "') "
            }
            r += ") && (missing" + e$level + " = " + e.util.toQuotedString(e.opts.jsonPointers ? D : F) + ") ) "
          }
        }
        r += ") {  "
        var S
        E = "' + " + (T = "missing" + e$level) + " + '"
        if (e.opts._errorDataPathProperty) {
          e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(e$errorPath, T, true) : e$errorPath + " + " + T
        }
        (S = S || []).push(r)
        r = ""
        if (false !== e.createErrors) {
          r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + E + "' } "
          if (false !== e.opts.messages) {
            r += " , message: '"
            if (e.opts._errorDataPathProperty) {
              r += "is a required property"
            } else {
              r += "should have required property \\'" + E + "\\'"
            }
            r += "' "
          }
          if (e.opts.verbose) {
            r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "
          }
          r += " } "
        } else {
          r += " {} "
        }
        x = r
        r = S.pop()
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
      }
    } else if (b) {
      if (!d) {
        r += " var " + h + " = validate.schema" + s + "; "
      }
      var T
      E = "' + " + (T = "schema" + e$level + "[" + (O = "i" + e$level) + "]") + " + '"
      if (e.opts._errorDataPathProperty) {
        e.errorPath = e.util.getPathExpr(e$errorPath, T, e.opts.jsonPointers)
      }
      if (d) {
        r += " if (" + h + " && !Array.isArray(" + h + ")) {  var err =   "
        if (false !== e.createErrors) {
          r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + E + "' } "
          if (false !== e.opts.messages) {
            r += " , message: '"
            if (e.opts._errorDataPathProperty) {
              r += "is a required property"
            } else {
              r += "should have required property \\'" + E + "\\'"
            }
            r += "' "
          }
          if (e.opts.verbose) {
            r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "
          }
          r += " } "
        } else {
          r += " {} "
        }
        r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + h + " !== undefined) { "
      }
      r += " for (var " + O + " = 0; " + O + " < " + h + ".length; " + O + "++) { if (" + l + "[" + h + "[" + O + "]] === undefined "
      if (e$opts$ownProperties) {
        r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", " + h + "[" + O + "]) "
      }
      r += ") {  var err =   "
      if (false !== e.createErrors) {
        r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + E + "' } "
        if (false !== e.opts.messages) {
          r += " , message: '"
          if (e.opts._errorDataPathProperty) {
            r += "is a required property"
          } else {
            r += "should have required property \\'" + E + "\\'"
          }
          r += "' "
        }
        if (e.opts.verbose) {
          r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "
        }
        r += " } "
      } else {
        r += " {} "
      }
      r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } "
      if (d) {
        r += "  }  "
      }
    } else {
      var B = p
      if (B) {
        for (var D, I = -1, R = B.length - 1; I < R;) {
          D = B[I += 1]
          var F = e.util.getProperty(D)
          E = e.util.escapeQuotes(D)
          var P = l + F
          if (e.opts._errorDataPathProperty) {
            e.errorPath = e.util.getPath(e$errorPath, D, e.opts.jsonPointers)
          }
          r += " if ( " + P + " === undefined "
          if (e$opts$ownProperties) {
            r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(D) + "') "
          }
          r += ") {  var err =   "
          if (false !== e.createErrors) {
            r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + E + "' } "
            if (false !== e.opts.messages) {
              r += " , message: '"
              if (e.opts._errorDataPathProperty) {
                r += "is a required property"
              } else {
                r += "should have required property \\'" + E + "\\'"
              }
              r += "' "
            }
            if (e.opts.verbose) {
              r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "
            }
            r += " } "
          } else {
            r += " {} "
          }
          r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
        }
      }
    }
    e.errorPath = e$errorPath
  } else if (u) {
    r += " if (true) {"
  }
  return r
}
