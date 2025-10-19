/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2238
 */

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
  d.level++;
  var h = "valid" + d.level;
  if (e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || false === a : e.util.schemaHasRules(a, e.RULES.all)) {
    d.schema = a;
    d.schemaPath = s;
    d.errSchemaPath = c;
    r += " var " + f + " = errors;  ";
    var p;
    var _ = e.compositeRule;
    e.compositeRule = d.compositeRule = true;
    d.createErrors = false;
    if (d.opts.allErrors) {
      p = d.opts.allErrors;
      d.opts.allErrors = false;
    }
    r += " " + e.validate(d) + " ";
    d.createErrors = true;
    if (p) {
      d.opts.allErrors = p;
    }
    e.compositeRule = d.compositeRule = _;
    r += " if (" + h + ") {   ";
    var A = A || [];
    A.push(r);
    r = "";
    if (false !== e.createErrors) {
      r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ";
      if (false !== e.opts.messages) {
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
    if (false !== e.createErrors) {
      r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ";
      if (false !== e.opts.messages) {
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