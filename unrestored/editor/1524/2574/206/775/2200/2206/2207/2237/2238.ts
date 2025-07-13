"use strict";

module.exports = function (e, t, n) {
  var r;
  var i;
  var o = " ";
  var a = e.level;
  var s = e.dataLevel;
  var c = e.schema[t];
  var u = e.schemaPath + e.util.getProperty(t);
  var l = e.errSchemaPath + "/" + t;
  var f = !e.opts.allErrors;
  var h = "data" + (s || "");
  var d = "valid" + a;
  var p = "errs__" + a;
  var _ = e.opts.$data && c && c.$data;
  if (_) {
    o += " var schema" + a + " = " + e.util.getData(c.$data, s, e.dataPathArr) + "; ";
    i = "schema" + a;
  } else {
    i = c;
  }
  var A;
  var g;
  var v;
  var m;
  var y;
  var b = "definition" + a;
  var w = this.definition;
  var E = "";
  if (_ && w.$data) {
    y = "keywordValidate" + a;
    var x = w.validateSchema;
    o += " var " + b + " = RULES.custom['" + t + "'].definition; var " + y + " = " + b + ".validate;";
  } else {
    if (!(m = e.useCustomRule(this, c, e.schema, e))) {
      return;
    }
    i = "validate.schema" + u;
    y = m.code;
    A = w.compile;
    g = w.inline;
    v = w.macro;
  }
  var C = y + ".errors";
  var O = "i" + a;
  var S = "ruleErr" + a;
  var k = w.async;
  if (k && !e.async) {
    throw new Error("async keyword in sync schema");
  }
  if (g || v || (o += C + " = null;"), o += "var " + p + " = errors;var " + d + ";", _ && w.$data && (E += "}", o += " if (" + i + " === undefined) { " + d + " = true; } else { ", x && (E += "}", o += " " + d + " = " + b + ".validateSchema(" + i + "); if (" + d + ") { ")), g) {
    if (w.statements) {
      o += " " + m.validate + " ";
    } else {
      o += " " + d + " = " + m.validate + "; ";
    }
  } else if (v) {
    var T = e.util.copy(e);
    E = "";
    T.level++;
    var B = "valid" + T.level;
    T.schema = m.validate;
    T.schemaPath = "";
    var D = e.compositeRule;
    e.compositeRule = T.compositeRule = !0;
    var I = e.validate(T).replace(/validate\.schema/g, y);
    e.compositeRule = T.compositeRule = D;
    o += " " + I;
  } else {
    (N = N || []).push(o);
    o = "";
    o += "  " + y + ".call( ";
    if (e.opts.passContext) {
      o += "this";
    } else {
      o += "self";
    }
    if (A || !1 === w.schema) {
      o += " , " + h + " ";
    } else {
      o += " , " + i + " , " + h + " , validate.schema" + e.schemaPath + " ";
    }
    o += " , (dataPath || '')";
    if ('""' != e.errorPath) {
      o += " + " + e.errorPath;
    }
    var F = s ? "data" + (s - 1 || "") : "parentData";
    var R = s ? e.dataPathArr[s] : "parentDataProperty";
    var P = o += " , " + F + " , " + R + " , rootData )  ";
    o = N.pop();
    if (!1 === w.errors) {
      o += " " + d + " = ";
      if (k) {
        o += "await ";
      }
      o += P + "; ";
    } else {
      o += k ? " var " + (C = "customErrors" + a) + " = null; try { " + d + " = await " + P + "; } catch (e) { " + d + " = false; if (e instanceof ValidationError) " + C + " = e.errors; else throw e; } " : " " + C + " = null; " + d + " = " + P + "; ";
    }
  }
  if (w.modifying && (o += " if (" + F + ") " + h + " = " + F + "[" + R + "];"), o += "" + E, w.valid) {
    if (f) {
      o += " if (true) { ";
    }
  } else {
    var N;
    o += " if ( ";
    if (void 0 === w.valid) {
      o += " !";
      o += v ? "" + B : "" + d;
    } else {
      o += " " + !w.valid + " ";
    }
    o += ") { ";
    r = this.keyword;
    (N = N || []).push(o);
    o = "";
    (N = N || []).push(o);
    o = "";
    if (!1 !== e.createErrors) {
      o += " { keyword: '" + (r || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { keyword: '" + this.keyword + "' } ";
      if (!1 !== e.opts.messages) {
        o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' ";
      }
      if (e.opts.verbose) {
        o += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " ";
      }
      o += " } ";
    } else {
      o += " {} ";
    }
    var M = o;
    o = N.pop();
    if (!e.compositeRule && f) {
      if (e.async) {
        o += " throw new ValidationError([" + M + "]); ";
      } else {
        o += " validate.errors = [" + M + "]; return false; ";
      }
    } else {
      o += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    }
    var j = o;
    o = N.pop();
    if (g) {
      if (w.errors) {
        if ("full" != w.errors) {
          o += "  for (var " + O + "=" + p + "; " + O + "<errors; " + O + "++) { var " + S + " = vErrors[" + O + "]; if (" + S + ".dataPath === undefined) " + S + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + S + ".schemaPath === undefined) { " + S + '.schemaPath = "' + l + '"; } ';
          if (e.opts.verbose) {
            o += " " + S + ".schema = " + i + "; " + S + ".data = " + h + "; ";
          }
          o += " } ";
        }
      } else {
        if (!1 === w.errors) {
          o += " " + j + " ";
        } else {
          o += " if (" + p + " == errors) { " + j + " } else {  for (var " + O + "=" + p + "; " + O + "<errors; " + O + "++) { var " + S + " = vErrors[" + O + "]; if (" + S + ".dataPath === undefined) " + S + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + S + ".schemaPath === undefined) { " + S + '.schemaPath = "' + l + '"; } ';
          if (e.opts.verbose) {
            o += " " + S + ".schema = " + i + "; " + S + ".data = " + h + "; ";
          }
          o += " } } ";
        }
      }
    } else {
      if (v) {
        o += "   var err =   ";
        if (!1 !== e.createErrors) {
          o += " { keyword: '" + (r || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { keyword: '" + this.keyword + "' } ";
          if (!1 !== e.opts.messages) {
            o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' ";
          }
          if (e.opts.verbose) {
            o += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " ";
          }
          o += " } ";
        } else {
          o += " {} ";
        }
        o += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (!e.compositeRule && f) {
          if (e.async) {
            o += " throw new ValidationError(vErrors); ";
          } else {
            o += " validate.errors = vErrors; return false; ";
          }
        }
      } else {
        if (!1 === w.errors) {
          o += " " + j + " ";
        } else {
          o += " if (Array.isArray(" + C + ")) { if (vErrors === null) vErrors = " + C + "; else vErrors = vErrors.concat(" + C + "); errors = vErrors.length;  for (var " + O + "=" + p + "; " + O + "<errors; " + O + "++) { var " + S + " = vErrors[" + O + "]; if (" + S + ".dataPath === undefined) " + S + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + S + '.schemaPath = "' + l + '";  ';
          if (e.opts.verbose) {
            o += " " + S + ".schema = " + i + "; " + S + ".data = " + h + "; ";
          }
          o += " } } else { " + j + " } ";
        }
      }
    }
    o += " } ";
    if (f) {
      o += " else { ";
    }
  }
  return o;
};