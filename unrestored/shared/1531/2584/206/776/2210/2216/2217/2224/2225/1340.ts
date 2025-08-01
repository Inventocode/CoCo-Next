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
  var h = "maxLength" == t ? ">" : "<";
  i += "if ( ";
  if (d) {
    i += " (" + r + " !== undefined && typeof " + r + " != 'number') || ";
  }
  if (!1 === e.opts.unicode) {
    i += " " + f + ".length ";
  } else {
    i += " ucs2length(" + f + ") ";
  }
  i += " " + h + " " + r + ") { ";
  var p = t;
  var _ = _ || [];
  _.push(i);
  i = "";
  if (!1 !== e.createErrors) {
    i += " { keyword: '" + (p || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { limit: " + r + " } ";
    if (!1 !== e.opts.messages) {
      i += " , message: 'should NOT be ";
      i += "maxLength" == t ? "longer" : "shorter";
      i += " than ";
      i += d ? "' + " + r + " + '" : "" + s;
      i += " characters' ";
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
  var A = i;
  i = _.pop();
  if (!e.compositeRule && l) {
    if (e.async) {
      i += " throw new ValidationError([" + A + "]); ";
    } else {
      i += " validate.errors = [" + A + "]; return false; ";
    }
  } else {
    i += " var err = " + A + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
  }
  i += "} ";
  if (l) {
    i += " else { ";
  }
  return i;
};