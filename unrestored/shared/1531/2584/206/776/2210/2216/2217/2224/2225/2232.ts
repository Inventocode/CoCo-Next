/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2232
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
  var h = ""
  d.level++
  var p = "valid" + d.level
  var _ = {}
  var A = {}
  var /* [auto-meaningful-name] */e$opts$ownProperties = e.opts.ownProperties
  for (b in a) if ("__proto__" != b) {
    var v = a[b]
    var m = Array.isArray(v) ? A : _
    m[b] = v
  }
  r += "var " + f + " = errors;"
  var /* [auto-meaningful-name] */e$errorPath = e.errorPath
  for (var b in r += "var missing" + e$level + ";", A) if ((m = A[b]).length) {
    r += " if ( " + l + e.util.getProperty(b) + " !== undefined "
    if (e$opts$ownProperties) {
      r += " && Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(b) + "') "
    }
    if (u) {
      r += " && ( "
      var w = m
      if (w) {
        for (var E = -1, x = w.length - 1; E < x;) {
          B = w[E += 1]
          if (E) {
            r += " || "
          }
          r += " ( ( " + (R = l + (F = e.util.getProperty(B))) + " === undefined "
          if (e$opts$ownProperties) {
            r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(B) + "') "
          }
          r += ") && (missing" + e$level + " = " + e.util.toQuotedString(e.opts.jsonPointers ? B : F) + ") ) "
        }
      }
      r += ")) {  "
      var C = "missing" + e$level
      var O = "' + " + C + " + '"
      if (e.opts._errorDataPathProperty) {
        e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(e$errorPath, C, true) : e$errorPath + " + " + C
      }
      var k = k || []
      k.push(r)
      r = ""
      if (false !== e.createErrors) {
        r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { property: '" + e.util.escapeQuotes(b) + "', missingProperty: '" + O + "', depsCount: " + m.length + ", deps: '" + e.util.escapeQuotes(1 == m.length ? m[0] : m.join(", ")) + "' } "
        if (false !== e.opts.messages) {
          r += " , message: 'should have "
          if (1 == m.length) {
            r += "property " + e.util.escapeQuotes(m[0])
          } else {
            r += "properties " + e.util.escapeQuotes(m.join(", "))
          }
          r += " when property " + e.util.escapeQuotes(b) + " is present' "
        }
        if (e.opts.verbose) {
          r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "
        }
        r += " } "
      } else {
        r += " {} "
      }
      var S = r
      r = k.pop()
      if (!e.compositeRule && u) {
        if (e.async) {
          r += " throw new ValidationError([" + S + "]); "
        } else {
          r += " validate.errors = [" + S + "]; return false; "
        }
      } else {
        r += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
      }
    } else {
      r += " ) { "
      var T = m
      if (T) {
        for (var B, D = -1, I = T.length - 1; D < I;) {
          B = T[D += 1]
          var F = e.util.getProperty(B)
          O = e.util.escapeQuotes(B)
          var R = l + F
          if (e.opts._errorDataPathProperty) {
            e.errorPath = e.util.getPath(e$errorPath, B, e.opts.jsonPointers)
          }
          r += " if ( " + R + " === undefined "
          if (e$opts$ownProperties) {
            r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(B) + "') "
          }
          r += ") {  var err =   "
          if (false !== e.createErrors) {
            r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { property: '" + e.util.escapeQuotes(b) + "', missingProperty: '" + O + "', depsCount: " + m.length + ", deps: '" + e.util.escapeQuotes(1 == m.length ? m[0] : m.join(", ")) + "' } "
            if (false !== e.opts.messages) {
              r += " , message: 'should have "
              if (1 == m.length) {
                r += "property " + e.util.escapeQuotes(m[0])
              } else {
                r += "properties " + e.util.escapeQuotes(m.join(", "))
              }
              r += " when property " + e.util.escapeQuotes(b) + " is present' "
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
    r += " }   "
    if (u) {
      h += "}"
      r += " else { "
    }
  }
  e.errorPath = e$errorPath
  var /* [auto-meaningful-name] */d$baseId = d.baseId
  for (var b in _) {
    v = _[b]
    if (e.opts.strictKeywords ? "object" == typeof v && Object.keys(v).length > 0 || false === v : e.util.schemaHasRules(v, e.RULES.all)) {
      r += " " + p + " = true; if ( " + l + e.util.getProperty(b) + " !== undefined "
      if (e$opts$ownProperties) {
        r += " && Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(b) + "') "
      }
      r += ") { "
      d.schema = v
      d.schemaPath = s + e.util.getProperty(b)
      d.errSchemaPath = c + "/" + e.util.escapeFragment(b)
      r += "  " + e.validate(d) + " "
      d.baseId = d$baseId
      r += " }  "
      if (u) {
        r += " if (" + p + ") { "
        h += "}"
      }
    }
  }
  if (u) {
    r += "   " + h + " if (" + f + " == errors) {"
  }
  return r
}
