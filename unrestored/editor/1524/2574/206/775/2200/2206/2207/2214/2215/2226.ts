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
  var p = "";
  d.level++;
  var _ = "valid" + d.level;
  var A = "i" + i;
  var g = d.dataLevel = e.dataLevel + 1;
  var v = "data" + g;
  var m = e.baseId;
  if (r += "var " + h + " = errors;var " + f + ";", Array.isArray(a)) {
    var y = e.schema.additionalItems;
    if (!1 === y) {
      r += " " + f + " = " + l + ".length <= " + a.length + "; ";
      var b = c;
      c = e.errSchemaPath + "/additionalItems";
      r += "  if (!" + f + ") {   ";
      var w = w || [];
      w.push(r);
      r = "";
      if (!1 !== e.createErrors) {
        r += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + a.length + " } ";
        if (!1 !== e.opts.messages) {
          r += " , message: 'should NOT have more than " + a.length + " items' ";
        }
        if (e.opts.verbose) {
          r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
        }
        r += " } ";
      } else {
        r += " {} ";
      }
      var E = r;
      r = w.pop();
      if (!e.compositeRule && u) {
        if (e.async) {
          r += " throw new ValidationError([" + E + "]); ";
        } else {
          r += " validate.errors = [" + E + "]; return false; ";
        }
      } else {
        r += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      r += " } ";
      c = b;
      if (u) {
        p += "}";
        r += " else { ";
      }
    }
    var x = a;
    if (x) {
      for (var C, O = -1, S = x.length - 1; O < S;) {
        if (C = x[O += 1], e.opts.strictKeywords ? "object" == typeof C && Object.keys(C).length > 0 || !1 === C : e.util.schemaHasRules(C, e.RULES.all)) {
          r += " " + _ + " = true; if (" + l + ".length > " + O + ") { ";
          var k = l + "[" + O + "]";
          d.schema = C;
          d.schemaPath = s + "[" + O + "]";
          d.errSchemaPath = c + "/" + O;
          d.errorPath = e.util.getPathExpr(e.errorPath, O, e.opts.jsonPointers, !0);
          d.dataPathArr[g] = O;
          var T = e.validate(d);
          d.baseId = m;
          if (e.util.varOccurences(T, v) < 2) {
            r += " " + e.util.varReplace(T, v, k) + " ";
          } else {
            r += " var " + v + " = " + k + "; " + T + " ";
          }
          r += " }  ";
          if (u) {
            r += " if (" + _ + ") { ";
            p += "}";
          }
        }
      }
    }
    if ("object" == typeof y && (e.opts.strictKeywords ? "object" == typeof y && Object.keys(y).length > 0 || !1 === y : e.util.schemaHasRules(y, e.RULES.all))) {
      d.schema = y;
      d.schemaPath = e.schemaPath + ".additionalItems";
      d.errSchemaPath = e.errSchemaPath + "/additionalItems";
      r += " " + _ + " = true; if (" + l + ".length > " + a.length + ") {  for (var " + A + " = " + a.length + "; " + A + " < " + l + ".length; " + A + "++) { ";
      d.errorPath = e.util.getPathExpr(e.errorPath, A, e.opts.jsonPointers, !0);
      k = l + "[" + A + "]";
      d.dataPathArr[g] = A;
      T = e.validate(d);
      d.baseId = m;
      if (e.util.varOccurences(T, v) < 2) {
        r += " " + e.util.varReplace(T, v, k) + " ";
      } else {
        r += " var " + v + " = " + k + "; " + T + " ";
      }
      if (u) {
        r += " if (!" + _ + ") break; ";
      }
      r += " } }  ";
      if (u) {
        r += " if (" + _ + ") { ";
        p += "}";
      }
    }
  } else if (e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || !1 === a : e.util.schemaHasRules(a, e.RULES.all)) {
    d.schema = a;
    d.schemaPath = s;
    d.errSchemaPath = c;
    r += "  for (var " + A + " = 0; " + A + " < " + l + ".length; " + A + "++) { ";
    d.errorPath = e.util.getPathExpr(e.errorPath, A, e.opts.jsonPointers, !0);
    k = l + "[" + A + "]";
    d.dataPathArr[g] = A;
    T = e.validate(d);
    d.baseId = m;
    if (e.util.varOccurences(T, v) < 2) {
      r += " " + e.util.varReplace(T, v, k) + " ";
    } else {
      r += " var " + v + " = " + k + "; " + T + " ";
    }
    if (u) {
      r += " if (!" + _ + ") break; ";
    }
    r += " }";
  }
  if (u) {
    r += " " + p + " if (" + h + " == errors) {";
  }
  return r;
};