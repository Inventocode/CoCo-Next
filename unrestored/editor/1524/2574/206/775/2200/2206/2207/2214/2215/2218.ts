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
  var f = "valid" + i;
  var h = "errs__" + i;
  var d = e.util.copy(e);
  var p = "";
  d.level++;
  var _ = "valid" + d.level;
  if (a.every(function (t) {
    return e.opts.strictKeywords ? "object" == typeof t && Object.keys(t).length > 0 || !1 === t : e.util.schemaHasRules(t, e.RULES.all);
  })) {
    var A = d.baseId;
    r += " var " + h + " = errors; var " + f + " = false;  ";
    var g = e.compositeRule;
    e.compositeRule = d.compositeRule = !0;
    var v = a;
    if (v) {
      for (var m, y = -1, b = v.length - 1; y < b;) {
        m = v[y += 1];
        d.schema = m;
        d.schemaPath = s + "[" + y + "]";
        d.errSchemaPath = c + "/" + y;
        r += "  " + e.validate(d) + " ";
        d.baseId = A;
        r += " " + f + " = " + f + " || " + _ + "; if (!" + f + ") { ";
        p += "}";
      }
    }
    e.compositeRule = d.compositeRule = g;
    r += " " + p + " if (!" + f + ") {   var err =   ";
    if (!1 !== e.createErrors) {
      r += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ";
      if (!1 !== e.opts.messages) {
        r += " , message: 'should match some schema in anyOf' ";
      }
      if (e.opts.verbose) {
        r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
      }
      r += " } ";
    } else {
      r += " {} ";
    }
    r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    if (!e.compositeRule && u) {
      if (e.async) {
        r += " throw new ValidationError(vErrors); ";
      } else {
        r += " validate.errors = vErrors; return false; ";
      }
    }
    r += " } else {  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; } ";
    if (e.opts.allErrors) {
      r += " } ";
    }
  } else if (u) {
    r += " if (true) { ";
  }
  return r;
};