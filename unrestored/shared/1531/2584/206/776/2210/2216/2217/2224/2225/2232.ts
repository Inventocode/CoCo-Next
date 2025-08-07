"use strict";

module.exports = function (e, t, n) {
  var r = " ";
  var i = e.level;
  var o = e.dataLevel;
  var a = e.schema[t];
  var s = e.schemaPath + e.util.getProperty(t);
  var c = e.errSchemaPath + "/" + t;
  var u = !e.opts.allErrors;
  var l = "data" + (o || "");
  var f = "errs__" + i;
  var d = e.util.copy(e);
  var h = "";
  d.level++;
  var p = "valid" + d.level;
  var _ = {};
  var A = {};
  var g = e.opts.ownProperties;
  for (b in a) if ("__proto__" != b) {
    var v = a[b];
    var m = Array.isArray(v) ? A : _;
    m[b] = v;
  }
  r += "var " + f + " = errors;";
  var y = e.errorPath;
  for (var b in r += "var missing" + i + ";", A) if ((m = A[b]).length) {
    r += " if ( " + l + e.util.getProperty(b) + " !== undefined ";
    if (g) {
      r += " && Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(b) + "') ";
    }
    if (u) {
      r += " && ( ";
      var w = m;
      if (w) {
        for (var E = -1, x = w.length - 1; E < x;) {
          B = w[E += 1];
          if (E) {
            r += " || ";
          }
          r += " ( ( " + (R = l + (F = e.util.getProperty(B))) + " === undefined ";
          if (g) {
            r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(B) + "') ";
          }
          r += ") && (missing" + i + " = " + e.util.toQuotedString(e.opts.jsonPointers ? B : F) + ") ) ";
        }
      }
      r += ")) {  ";
      var C = "missing" + i;
      var O = "' + " + C + " + '";
      if (e.opts._errorDataPathProperty) {
        e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(y, C, true) : y + " + " + C;
      }
      var k = k || [];
      k.push(r);
      r = "";
      if (false !== e.createErrors) {
        r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { property: '" + e.util.escapeQuotes(b) + "', missingProperty: '" + O + "', depsCount: " + m.length + ", deps: '" + e.util.escapeQuotes(1 == m.length ? m[0] : m.join(", ")) + "' } ";
        if (false !== e.opts.messages) {
          r += " , message: 'should have ";
          if (1 == m.length) {
            r += "property " + e.util.escapeQuotes(m[0]);
          } else {
            r += "properties " + e.util.escapeQuotes(m.join(", "));
          }
          r += " when property " + e.util.escapeQuotes(b) + " is present' ";
        }
        if (e.opts.verbose) {
          r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
        }
        r += " } ";
      } else {
        r += " {} ";
      }
      var S = r;
      r = k.pop();
      if (!e.compositeRule && u) {
        if (e.async) {
          r += " throw new ValidationError([" + S + "]); ";
        } else {
          r += " validate.errors = [" + S + "]; return false; ";
        }
      } else {
        r += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
    } else {
      r += " ) { ";
      var T = m;
      if (T) {
        for (var B, D = -1, I = T.length - 1; D < I;) {
          B = T[D += 1];
          var F = e.util.getProperty(B);
          O = e.util.escapeQuotes(B);
          var R = l + F;
          if (e.opts._errorDataPathProperty) {
            e.errorPath = e.util.getPath(y, B, e.opts.jsonPointers);
          }
          r += " if ( " + R + " === undefined ";
          if (g) {
            r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(B) + "') ";
          }
          r += ") {  var err =   ";
          if (false !== e.createErrors) {
            r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { property: '" + e.util.escapeQuotes(b) + "', missingProperty: '" + O + "', depsCount: " + m.length + ", deps: '" + e.util.escapeQuotes(1 == m.length ? m[0] : m.join(", ")) + "' } ";
            if (false !== e.opts.messages) {
              r += " , message: 'should have ";
              if (1 == m.length) {
                r += "property " + e.util.escapeQuotes(m[0]);
              } else {
                r += "properties " + e.util.escapeQuotes(m.join(", "));
              }
              r += " when property " + e.util.escapeQuotes(b) + " is present' ";
            }
            if (e.opts.verbose) {
              r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
            }
            r += " } ";
          } else {
            r += " {} ";
          }
          r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
        }
      }
    }
    r += " }   ";
    if (u) {
      h += "}";
      r += " else { ";
    }
  }
  e.errorPath = y;
  var P = d.baseId;
  for (var b in _) {
    v = _[b];
    if (e.opts.strictKeywords ? "object" == typeof v && Object.keys(v).length > 0 || false === v : e.util.schemaHasRules(v, e.RULES.all)) {
      r += " " + p + " = true; if ( " + l + e.util.getProperty(b) + " !== undefined ";
      if (g) {
        r += " && Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(b) + "') ";
      }
      r += ") { ";
      d.schema = v;
      d.schemaPath = s + e.util.getProperty(b);
      d.errSchemaPath = c + "/" + e.util.escapeFragment(b);
      r += "  " + e.validate(d) + " ";
      d.baseId = P;
      r += " }  ";
      if (u) {
        r += " if (" + p + ") { ";
        h += "}";
      }
    }
  }
  if (u) {
    r += "   " + h + " if (" + f + " == errors) {";
  }
  return r;
};