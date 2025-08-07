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
  var d = "errs__" + i;
  var h = e.util.copy(e);
  var p = "";
  h.level++;
  var _ = "valid" + h.level;
  if (a.every(function (t) {
    return e.opts.strictKeywords ? "object" == typeof t && Object.keys(t).length > 0 || false === t : e.util.schemaHasRules(t, e.RULES.all);
  })) {
    var A = h.baseId;
    r += " var " + d + " = errors; var " + f + " = false;  ";
    var g = e.compositeRule;
    e.compositeRule = h.compositeRule = true;
    var v = a;
    if (v) {
      for (var m, y = -1, b = v.length - 1; y < b;) {
        m = v[y += 1];
        h.schema = m;
        h.schemaPath = s + "[" + y + "]";
        h.errSchemaPath = c + "/" + y;
        r += "  " + e.validate(h) + " ";
        h.baseId = A;
        r += " " + f + " = " + f + " || " + _ + "; if (!" + f + ") { ";
        p += "}";
      }
    }
    e.compositeRule = h.compositeRule = g;
    r += " " + p + " if (!" + f + ") {   var err =   ";
    if (false !== e.createErrors) {
      r += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ";
      if (false !== e.opts.messages) {
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
    r += " } else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } ";
    if (e.opts.allErrors) {
      r += " } ";
    }
  } else if (u) {
    r += " if (true) { ";
  }
  return r;
};