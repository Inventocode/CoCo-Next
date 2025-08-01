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
  var d = e.opts.$data && a && a.$data;
  if (d) {
    r += " var schema" + i + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ";
  }
  var h = "i" + i;
  var p = "schema" + i;
  if (!d) {
    r += " var " + p + " = validate.schema" + s + ";";
  }
  r += "var " + f + ";";
  if (d) {
    r += " if (schema" + i + " === undefined) " + f + " = true; else if (!Array.isArray(schema" + i + ")) " + f + " = false; else {";
  }
  r += f + " = false;for (var " + h + "=0; " + h + "<" + p + ".length; " + h + "++) if (equal(" + l + ", " + p + "[" + h + "])) { " + f + " = true; break; }";
  if (d) {
    r += "  }  ";
  }
  r += " if (!" + f + ") {   ";
  var _ = _ || [];
  _.push(r);
  r = "";
  if (!1 !== e.createErrors) {
    r += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { allowedValues: schema" + i + " } ";
    if (!1 !== e.opts.messages) {
      r += " , message: 'should be equal to one of the allowed values' ";
    }
    if (e.opts.verbose) {
      r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
    }
    r += " } ";
  } else {
    r += " {} ";
  }
  var A = r;
  r = _.pop();
  if (!e.compositeRule && u) {
    if (e.async) {
      r += " throw new ValidationError([" + A + "]); ";
    } else {
      r += " validate.errors = [" + A + "]; return false; ";
    }
  } else {
    r += " var err = " + A + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
  }
  r += " }";
  if (u) {
    r += " else { ";
  }
  return r;
};