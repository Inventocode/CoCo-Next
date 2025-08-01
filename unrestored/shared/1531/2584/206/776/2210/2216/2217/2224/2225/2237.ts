"use strict";

module.exports = function (e, t, n) {
  var r;
  var i = " ";
  var o = e.level;
  var a = e.dataLevel;
  var s = e.schema[t];
  var c = e.schemaPath + e.util.getProperty(t);
  var u = e.errSchemaPath + "/" + t;
  var l = !e.opts.allErrors;
  var f = "data" + (a || "");
  var d = e.opts.$data && s && s.$data;
  if (d) {
    i += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ";
    r = "schema" + o;
  } else {
    r = s;
  }
  if (!d && "number" != typeof s) {
    throw new Error(t + " must be number");
  }
  i += "var division" + o + ";if (";
  if (d) {
    i += " " + r + " !== undefined && ( typeof " + r + " != 'number' || ";
  }
  i += " (division" + o + " = " + f + " / " + r + ", ";
  if (e.opts.multipleOfPrecision) {
    i += " Math.abs(Math.round(division" + o + ") - division" + o + ") > 1e-" + e.opts.multipleOfPrecision + " ";
  } else {
    i += " division" + o + " !== parseInt(division" + o + ") ";
  }
  i += " ) ";
  if (d) {
    i += "  )  ";
  }
  i += " ) {   ";
  var h = h || [];
  h.push(i);
  i = "";
  if (!1 !== e.createErrors) {
    i += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { multipleOf: " + r + " } ";
    if (!1 !== e.opts.messages) {
      i += " , message: 'should be multiple of ";
      i += d ? "' + " + r : r + "'";
    }
    if (e.opts.verbose) {
      i += " , schema:  ";
      i += d ? "validate.schema" + c : "" + s;
      i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " ";
    }
    i += " } ";
  } else {
    i += " {} ";
  }
  var p = i;
  i = h.pop();
  if (!e.compositeRule && l) {
    if (e.async) {
      i += " throw new ValidationError([" + p + "]); ";
    } else {
      i += " validate.errors = [" + p + "]; return false; ";
    }
  } else {
    i += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
  }
  i += "} ";
  if (l) {
    i += " else { ";
  }
  return i;
};