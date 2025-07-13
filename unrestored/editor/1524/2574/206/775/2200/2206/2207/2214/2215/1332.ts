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
  if (h ? (i += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ", r = "schema" + o) : r = s, !h && "number" != typeof s) {
    throw new Error(t + " must be number");
  }
  i += "if ( ";
  if (h) {
    i += " (" + r + " !== undefined && typeof " + r + " != 'number') || ";
  }
  i += " " + f + ".length " + ("maxItems" == t ? ">" : "<") + " " + r + ") { ";
  var d = t;
  var p = p || [];
  p.push(i);
  i = "";
  if (!1 !== e.createErrors) {
    i += " { keyword: '" + (d || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { limit: " + r + " } ";
    if (!1 !== e.opts.messages) {
      i += " , message: 'should NOT have ";
      i += "maxItems" == t ? "more" : "fewer";
      i += " than ";
      i += h ? "' + " + r + " + '" : "" + s;
      i += " items' ";
    }
    if (e.opts.verbose) {
      i += " , schema:  ";
      i += h ? "validate.schema" + c : "" + s;
      i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " ";
    }
    i += " } ";
  } else {
    i += " {} ";
  }
  var _ = i;
  i = p.pop();
  if (!e.compositeRule && l) {
    if (e.async) {
      i += " throw new ValidationError([" + _ + "]); ";
    } else {
      i += " validate.errors = [" + _ + "]; return false; ";
    }
  } else {
    i += " var err = " + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
  }
  i += "} ";
  if (l) {
    i += " else { ";
  }
  return i;
};