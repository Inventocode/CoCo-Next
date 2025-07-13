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
  var h = e.util.copy(e);
  h.level++;
  var d = "valid" + h.level;
  if (e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || !1 === a : e.util.schemaHasRules(a, e.RULES.all)) {
    h.schema = a;
    h.schemaPath = s;
    h.errSchemaPath = c;
    r += " var " + f + " = errors;  ";
    var p;
    var _ = e.compositeRule;
    e.compositeRule = h.compositeRule = !0;
    h.createErrors = !1;
    if (h.opts.allErrors) {
      p = h.opts.allErrors;
      h.opts.allErrors = !1;
    }
    r += " " + e.validate(h) + " ";
    h.createErrors = !0;
    if (p) {
      h.opts.allErrors = p;
    }
    e.compositeRule = h.compositeRule = _;
    r += " if (" + d + ") {   ";
    var A = A || [];
    A.push(r);
    r = "";
    if (!1 !== e.createErrors) {
      r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ";
      if (!1 !== e.opts.messages) {
        r += " , message: 'should NOT be valid' ";
      }
      if (e.opts.verbose) {
        r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
      }
      r += " } ";
    } else {
      r += " {} ";
    }
    var g = r;
    r = A.pop();
    if (!e.compositeRule && u) {
      if (e.async) {
        r += " throw new ValidationError([" + g + "]); ";
      } else {
        r += " validate.errors = [" + g + "]; return false; ";
      }
    } else {
      r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    }
    r += " } else {  errors = " + f + "; if (vErrors !== null) { if (" + f + ") vErrors.length = " + f + "; else vErrors = null; } ";
    if (e.opts.allErrors) {
      r += " } ";
    }
  } else {
    r += "  var err =   ";
    if (!1 !== e.createErrors) {
      r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ";
      if (!1 !== e.opts.messages) {
        r += " , message: 'should NOT be valid' ";
      }
      if (e.opts.verbose) {
        r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
      }
      r += " } ";
    } else {
      r += " {} ";
    }
    r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    if (u) {
      r += " if (false) { ";
    }
  }
  return r;
};