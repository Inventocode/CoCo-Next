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
  if (!d) {
    r += " var schema" + i + " = validate.schema" + s + ";";
  }
  r += "var " + f + " = equal(" + l + ", schema" + i + "); if (!" + f + ") {   ";
  var h = h || [];
  h.push(r);
  r = "";
  if (false !== e.createErrors) {
    r += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { allowedValue: schema" + i + " } ";
    if (false !== e.opts.messages) {
      r += " , message: 'should be equal to constant' ";
    }
    if (e.opts.verbose) {
      r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
    }
    r += " } ";
  } else {
    r += " {} ";
  }
  var p = r;
  r = h.pop();
  if (!e.compositeRule && u) {
    if (e.async) {
      r += " throw new ValidationError([" + p + "]); ";
    } else {
      r += " validate.errors = [" + p + "]; return false; ";
    }
  } else {
    r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
  }
  r += " }";
  if (u) {
    r += " else { ";
  }
  return r;
};