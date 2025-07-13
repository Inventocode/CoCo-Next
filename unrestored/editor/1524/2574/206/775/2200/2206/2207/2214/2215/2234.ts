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
  var h = "valid" + o;
  var d = e.opts.$data && s && s.$data;
  if (d ? (i += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ", r = "schema" + o) : r = s, (s || d) && !1 !== e.opts.uniqueItems) {
    if (d) {
      i += " var " + h + "; if (" + r + " === false || " + r + " === undefined) " + h + " = true; else if (typeof " + r + " != 'boolean') " + h + " = false; else { ";
    }
    i += " var i = " + f + ".length , " + h + " = true , j; if (i > 1) { ";
    var p = e.schema.items && e.schema.items.type;
    var _ = Array.isArray(p);
    if (!p || "object" == p || "array" == p || _ && (p.indexOf("object") >= 0 || p.indexOf("array") >= 0)) {
      i += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + f + "[i], " + f + "[j])) { " + h + " = false; break outer; } } } ";
    } else {
      i += " var itemIndices = {}, item; for (;i--;) { var item = " + f + "[i]; ";
      var A = "checkDataType" + (_ ? "s" : "");
      i += " if (" + e.util[A](p, "item", e.opts.strictNumbers, !0) + ") continue; ";
      if (_) {
        i += " if (typeof item == 'string') item = '\"' + item; ";
      }
      i += " if (typeof itemIndices[item] == 'number') { " + h + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
    }
    i += " } ";
    if (d) {
      i += "  }  ";
    }
    i += " if (!" + h + ") {   ";
    var g = g || [];
    g.push(i);
    i = "";
    if (!1 !== e.createErrors) {
      i += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { i: i, j: j } ";
      if (!1 !== e.opts.messages) {
        i += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ";
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
    var v = i;
    i = g.pop();
    if (!e.compositeRule && l) {
      if (e.async) {
        i += " throw new ValidationError([" + v + "]); ";
      } else {
        i += " validate.errors = [" + v + "]; return false; ";
      }
    } else {
      i += " var err = " + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    }
    i += " } ";
    if (l) {
      i += " else { ";
    }
  } else if (l) {
    i += " if (true) { ";
  }
  return i;
};