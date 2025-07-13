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
  var h = e.opts.$data && s && s.$data;
  if (h) {
    i += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ";
    r = "schema" + o;
  } else {
    r = s;
  }
  i += "if ( ";
  if (h) {
    i += " (" + r + " !== undefined && typeof " + r + " != 'string') || ";
  }
  i += " !" + (h ? "(new RegExp(" + r + "))" : e.usePattern(s)) + ".test(" + f + ") ) {   ";
  var d = d || [];
  d.push(i);
  i = "";
  if (!1 !== e.createErrors) {
    i += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { pattern:  ";
    i += h ? "" + r : "" + e.util.toQuotedString(s);
    i += "  } ";
    if (!1 !== e.opts.messages) {
      i += " , message: 'should match pattern \"";
      i += h ? "' + " + r + " + '" : "" + e.util.escapeQuotes(s);
      i += "\"' ";
    }
    if (e.opts.verbose) {
      i += " , schema:  ";
      i += h ? "validate.schema" + c : "" + e.util.toQuotedString(s);
      i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " ";
    }
    i += " } ";
  } else {
    i += " {} ";
  }
  var p = i;
  i = d.pop();
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