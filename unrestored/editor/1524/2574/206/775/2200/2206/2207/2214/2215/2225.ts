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
  d.level++;
  var p = "valid" + d.level;
  var _ = e.schema.then;
  var A = e.schema.else;
  var g = void 0 !== _ && (e.opts.strictKeywords ? "object" == typeof _ && Object.keys(_).length > 0 || !1 === _ : e.util.schemaHasRules(_, e.RULES.all));
  var v = void 0 !== A && (e.opts.strictKeywords ? "object" == typeof A && Object.keys(A).length > 0 || !1 === A : e.util.schemaHasRules(A, e.RULES.all));
  var m = d.baseId;
  if (g || v) {
    var y;
    d.createErrors = !1;
    d.schema = a;
    d.schemaPath = s;
    d.errSchemaPath = c;
    r += " var " + h + " = errors; var " + f + " = true;  ";
    var b = e.compositeRule;
    e.compositeRule = d.compositeRule = !0;
    r += "  " + e.validate(d) + " ";
    d.baseId = m;
    d.createErrors = !0;
    r += "  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; }  ";
    e.compositeRule = d.compositeRule = b;
    if (g) {
      r += " if (" + p + ") {  ";
      d.schema = e.schema.then;
      d.schemaPath = e.schemaPath + ".then";
      d.errSchemaPath = e.errSchemaPath + "/then";
      r += "  " + e.validate(d) + " ";
      d.baseId = m;
      r += " " + f + " = " + p + "; ";
      if (g && v) {
        r += " var " + (y = "ifClause" + i) + " = 'then'; ";
      } else {
        y = "'then'";
      }
      r += " } ";
      if (v) {
        r += " else { ";
      }
    } else {
      r += " if (!" + p + ") { ";
    }
    if (v) {
      d.schema = e.schema.else;
      d.schemaPath = e.schemaPath + ".else";
      d.errSchemaPath = e.errSchemaPath + "/else";
      r += "  " + e.validate(d) + " ";
      d.baseId = m;
      r += " " + f + " = " + p + "; ";
      if (g && v) {
        r += " var " + (y = "ifClause" + i) + " = 'else'; ";
      } else {
        y = "'else'";
      }
      r += " } ";
    }
    r += " if (!" + f + ") {   var err =   ";
    if (!1 !== e.createErrors) {
      r += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { failingKeyword: " + y + " } ";
      if (!1 !== e.opts.messages) {
        r += " , message: 'should match \"' + " + y + " + '\" schema' ";
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
    r += " }   ";
    if (u) {
      r += " else { ";
    }
  } else if (u) {
    r += " if (true) { ";
  }
  return r;
};