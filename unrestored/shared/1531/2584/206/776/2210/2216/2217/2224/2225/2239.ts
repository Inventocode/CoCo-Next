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
  var A = h.baseId;
  var g = "prevValid" + i;
  var v = "passingSchemas" + i;
  r += "var " + d + " = errors , " + g + " = false , " + f + " = false , " + v + " = null; ";
  var m = e.compositeRule;
  e.compositeRule = h.compositeRule = !0;
  var y = a;
  if (y) {
    for (var b, w = -1, E = y.length - 1; w < E;) {
      b = y[w += 1];
      if (e.opts.strictKeywords ? "object" == typeof b && Object.keys(b).length > 0 || !1 === b : e.util.schemaHasRules(b, e.RULES.all)) {
        h.schema = b;
        h.schemaPath = s + "[" + w + "]";
        h.errSchemaPath = c + "/" + w;
        r += "  " + e.validate(h) + " ";
        h.baseId = A;
      } else {
        r += " var " + _ + " = true; ";
      }
      if (w) {
        r += " if (" + _ + " && " + g + ") { " + f + " = false; " + v + " = [" + v + ", " + w + "]; } else { ";
        p += "}";
      }
      r += " if (" + _ + ") { " + f + " = " + g + " = true; " + v + " = " + w + "; }";
    }
  }
  e.compositeRule = h.compositeRule = m;
  r += p + "if (!" + f + ") {   var err =   ";
  if (!1 !== e.createErrors) {
    r += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { passingSchemas: " + v + " } ";
    if (!1 !== e.opts.messages) {
      r += " , message: 'should match exactly one schema in oneOf' ";
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
  r += "} else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }";
  if (e.opts.allErrors) {
    r += " } ";
  }
  return r;
};