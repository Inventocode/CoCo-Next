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
  var d = "errs__" + i;
  var h = e.util.copy(e);
  var p = "";
  h.level++;
  var _ = "valid" + h.level;
  var A = "i" + i;
  var g = h.dataLevel = e.dataLevel + 1;
  var v = "data" + g;
  var m = e.baseId;
  r += "var " + d + " = errors;var " + f + ";";
  if (Array.isArray(a)) {
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
      for (var C, O = -1, k = x.length - 1; O < k;) {
        C = x[O += 1];
        if (e.opts.strictKeywords ? "object" == typeof C && Object.keys(C).length > 0 || !1 === C : e.util.schemaHasRules(C, e.RULES.all)) {
          r += " " + _ + " = true; if (" + l + ".length > " + O + ") { ";
          var S = l + "[" + O + "]";
          h.schema = C;
          h.schemaPath = s + "[" + O + "]";
          h.errSchemaPath = c + "/" + O;
          h.errorPath = e.util.getPathExpr(e.errorPath, O, e.opts.jsonPointers, !0);
          h.dataPathArr[g] = O;
          var T = e.validate(h);
          h.baseId = m;
          if (e.util.varOccurences(T, v) < 2) {
            r += " " + e.util.varReplace(T, v, S) + " ";
          } else {
            r += " var " + v + " = " + S + "; " + T + " ";
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
      h.schema = y;
      h.schemaPath = e.schemaPath + ".additionalItems";
      h.errSchemaPath = e.errSchemaPath + "/additionalItems";
      r += " " + _ + " = true; if (" + l + ".length > " + a.length + ") {  for (var " + A + " = " + a.length + "; " + A + " < " + l + ".length; " + A + "++) { ";
      h.errorPath = e.util.getPathExpr(e.errorPath, A, e.opts.jsonPointers, !0);
      S = l + "[" + A + "]";
      h.dataPathArr[g] = A;
      T = e.validate(h);
      h.baseId = m;
      if (e.util.varOccurences(T, v) < 2) {
        r += " " + e.util.varReplace(T, v, S) + " ";
      } else {
        r += " var " + v + " = " + S + "; " + T + " ";
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
    h.schema = a;
    h.schemaPath = s;
    h.errSchemaPath = c;
    r += "  for (var " + A + " = 0; " + A + " < " + l + ".length; " + A + "++) { ";
    h.errorPath = e.util.getPathExpr(e.errorPath, A, e.opts.jsonPointers, !0);
    S = l + "[" + A + "]";
    h.dataPathArr[g] = A;
    T = e.validate(h);
    h.baseId = m;
    if (e.util.varOccurences(T, v) < 2) {
      r += " " + e.util.varReplace(T, v, S) + " ";
    } else {
      r += " var " + v + " = " + S + "; " + T + " ";
    }
    if (u) {
      r += " if (!" + _ + ") break; ";
    }
    r += " }";
  }
  if (u) {
    r += " " + p + " if (" + d + " == errors) {";
  }
  return r;
};