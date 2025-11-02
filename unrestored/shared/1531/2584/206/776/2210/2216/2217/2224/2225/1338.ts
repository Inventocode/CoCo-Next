/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1338
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
  var d = e.opts.$data && s && s.$data
  if (d) {
    i += " var schema" + e$level + " = " + e.util.getData(s.$data, e$dataLevel, e.dataPathArr) + "; "
    r = "schema" + e$level
  } else {
    r = s
  }
  var h = "maximum" == t
  var p = h ? "exclusiveMaximum" : "exclusiveMinimum"
  var _ = e.schema[p]
  var A = e.opts.$data && _ && _.$data
  var g = h ? "<" : ">"
  var v = h ? ">" : "<"
  var m = undefined
  if (!d && "number" != typeof s && undefined !== s) {
    throw new Error(t + " must be number")
  }
  if (!A && undefined !== _ && "number" != typeof _ && "boolean" != typeof _) {
    throw new Error(p + " must be number or boolean")
  }
  if (A) {
    var y = e.util.getData(_.$data, e$dataLevel, e.dataPathArr)
    var b = "exclusive" + e$level
    var w = "exclType" + e$level
    var E = "exclIsNumber" + e$level
    var x = "' + " + (k = "op" + e$level) + " + '"
    i += " var schemaExcl" + e$level + " = " + y + "; "
    i += " var " + b + "; var " + w + " = typeof " + (y = "schemaExcl" + e$level) + "; if (" + w + " != 'boolean' && " + w + " != 'undefined' && " + w + " != 'number') { "
    var C
    m = p;
    (C = C || []).push(i)
    i = ""
    if (false !== e.createErrors) {
      i += " { keyword: '" + (m || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: {} "
      if (false !== e.opts.messages) {
        i += " , message: '" + p + " should be boolean' "
      }
      if (e.opts.verbose) {
        i += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "
      }
      i += " } "
    } else {
      i += " {} "
    }
    var O = i
    i = C.pop()
    if (!e.compositeRule && l) {
      if (e.async) {
        i += " throw new ValidationError([" + O + "]); "
      } else {
        i += " validate.errors = [" + O + "]; return false; "
      }
    } else {
      i += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
    }
    i += " } else if ( "
    if (d) {
      i += " (" + r + " !== undefined && typeof " + r + " != 'number') || "
    }
    i += " " + w + " == 'number' ? ( (" + b + " = " + r + " === undefined || " + y + " " + g + "= " + r + ") ? " + f + " " + v + "= " + y + " : " + f + " " + v + " " + r + " ) : ( (" + b + " = " + y + " === true) ? " + f + " " + v + "= " + r + " : " + f + " " + v + " " + r + " ) || " + f + " !== " + f + ") { var op" + e$level + " = " + b + " ? '" + g + "' : '" + g + "='; "
    if (undefined === s) {
      m = p
      u = e.errSchemaPath + "/" + p
      r = y
      d = A
    }
  } else {
    x = g
    if ((E = "number" == typeof _) && d) {
      var k = "'" + x + "'"
      i += " if ( "
      if (d) {
        i += " (" + r + " !== undefined && typeof " + r + " != 'number') || "
      }
      i += " ( " + r + " === undefined || " + _ + " " + g + "= " + r + " ? " + f + " " + v + "= " + _ + " : " + f + " " + v + " " + r + " ) || " + f + " !== " + f + ") { "
    } else {
      if (E && undefined === s) {
        b = true
        m = p
        u = e.errSchemaPath + "/" + p
        r = _
        v += "="
      } else {
        if (E) {
          r = Math[h ? "min" : "max"](_, s)
        }
        if (_ === (!E || r)) {
          b = true
          m = p
          u = e.errSchemaPath + "/" + p
          v += "="
        } else {
          b = false
          x += "="
        }
      }
      k = "'" + x + "'"
      i += " if ( "
      if (d) {
        i += " (" + r + " !== undefined && typeof " + r + " != 'number') || "
      }
      i += " " + f + " " + v + " " + r + " || " + f + " !== " + f + ") { "
    }
  }
  m = m || t;
  (C = C || []).push(i)
  i = ""
  if (false !== e.createErrors) {
    i += " { keyword: '" + (m || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { comparison: " + k + ", limit: " + r + ", exclusive: " + b + " } "
    if (false !== e.opts.messages) {
      i += " , message: 'should be " + x + " "
      i += d ? "' + " + r : r + "'"
    }
    if (e.opts.verbose) {
      i += " , schema:  "
      i += d ? "validate.schema" + c : "" + s
      i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "
    }
    i += " } "
  } else {
    i += " {} "
  }
  O = i
  i = C.pop()
  if (!e.compositeRule && l) {
    if (e.async) {
      i += " throw new ValidationError([" + O + "]); "
    } else {
      i += " validate.errors = [" + O + "]; return false; "
    }
  } else {
    i += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
  }
  i += " } "
  if (l) {
    i += " else { "
  }
  return i
}
