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
  r += "var " + f + " = errors;";
  if (e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || !1 === a : e.util.schemaHasRules(a, e.RULES.all)) {
    d.schema = a;
    d.schemaPath = s;
    d.errSchemaPath = c;
    var p = "key" + i;
    var _ = "idx" + i;
    var A = "i" + i;
    var g = "' + " + p + " + '";
    var v = "data" + (d.dataLevel = e.dataLevel + 1);
    var m = "dataProperties" + i;
    var y = e.opts.ownProperties;
    var b = e.baseId;
    if (y) {
      r += " var " + m + " = undefined; ";
    }
    r += y ? " " + m + " = " + m + " || Object.keys(" + l + "); for (var " + _ + "=0; " + _ + "<" + m + ".length; " + _ + "++) { var " + p + " = " + m + "[" + _ + "]; " : " for (var " + p + " in " + l + ") { ";
    r += " var startErrs" + i + " = errors; ";
    var w = p;
    var E = e.compositeRule;
    e.compositeRule = d.compositeRule = !0;
    var x = e.validate(d);
    d.baseId = b;
    if (e.util.varOccurences(x, v) < 2) {
      r += " " + e.util.varReplace(x, v, w) + " ";
    } else {
      r += " var " + v + " = " + w + "; " + x + " ";
    }
    e.compositeRule = d.compositeRule = E;
    r += " if (!" + h + ") { for (var " + A + "=startErrs" + i + "; " + A + "<errors; " + A + "++) { vErrors[" + A + "].propertyName = " + p + "; }   var err =   ";
    if (!1 !== e.createErrors) {
      r += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { propertyName: '" + g + "' } ";
      if (!1 !== e.opts.messages) {
        r += " , message: 'property name \\'" + g + "\\' is invalid' ";
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
    if (u) {
      r += " break; ";
    }
    r += " } }";
  }
  if (u) {
    r += "  if (" + f + " == errors) {";
  }
  return r;
};