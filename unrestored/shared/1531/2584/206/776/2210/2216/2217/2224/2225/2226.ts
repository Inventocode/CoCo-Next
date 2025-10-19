/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2226
 */

"use strict";

module.exports = function (e, t, n) {
  var r;
  var i;
  var o = " ";
  var a = e.level;
  var s = e.dataLevel;
  var c = e.schema[t];
  var u = e.errSchemaPath + "/" + t;
  var l = !e.opts.allErrors;
  var f = "data" + (s || "");
  var d = "valid" + a;
  if ("#" == c || "#/" == c) {
    if (e.isRoot) {
      r = e.async;
      i = "validate";
    } else {
      r = true === e.root.schema.$async;
      i = "root.refVal[0]";
    }
  } else {
    var h = e.resolveRef(e.baseId, c, e.isRoot);
    if (undefined === h) {
      var p = e.MissingRefError.message(e.baseId, c);
      if ("fail" == e.opts.missingRefs) {
        e.logger.error(p);
        (v = v || []).push(o);
        o = "";
        if (false !== e.createErrors) {
          o += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { ref: '" + e.util.escapeQuotes(c) + "' } ";
          if (false !== e.opts.messages) {
            o += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(c) + "' ";
          }
          if (e.opts.verbose) {
            o += " , schema: " + e.util.toQuotedString(c) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " ";
          }
          o += " } ";
        } else {
          o += " {} ";
        }
        var _ = o;
        o = v.pop();
        if (!e.compositeRule && l) {
          if (e.async) {
            o += " throw new ValidationError([" + _ + "]); ";
          } else {
            o += " validate.errors = [" + _ + "]; return false; ";
          }
        } else {
          o += " var err = " + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        if (l) {
          o += " if (false) { ";
        }
      } else {
        if ("ignore" != e.opts.missingRefs) {
          throw new e.MissingRefError(e.baseId, c, p);
        }
        e.logger.warn(p);
        if (l) {
          o += " if (true) { ";
        }
      }
    } else if (h.inline) {
      var A = e.util.copy(e);
      A.level++;
      var g = "valid" + A.level;
      A.schema = h.schema;
      A.schemaPath = "";
      A.errSchemaPath = c;
      o += " " + e.validate(A).replace(/validate\.schema/g, h.code) + " ";
      if (l) {
        o += " if (" + g + ") { ";
      }
    } else {
      r = true === h.$async || e.async && false !== h.$async;
      i = h.code;
    }
  }
  if (i) {
    var v;
    (v = v || []).push(o);
    o = "";
    if (e.opts.passContext) {
      o += " " + i + ".call(this, ";
    } else {
      o += " " + i + "( ";
    }
    o += " " + f + ", (dataPath || '')";
    if ("\"\"" != e.errorPath) {
      o += " + " + e.errorPath;
    }
    var m = o += " , " + (s ? "data" + (s - 1 || "") : "parentData") + " , " + (s ? e.dataPathArr[s] : "parentDataProperty") + ", rootData)  ";
    o = v.pop();
    if (r) {
      if (!e.async) {
        throw new Error("async schema referenced by sync schema");
      }
      if (l) {
        o += " var " + d + "; ";
      }
      o += " try { await " + m + "; ";
      if (l) {
        o += " " + d + " = true; ";
      }
      o += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ";
      if (l) {
        o += " " + d + " = false; ";
      }
      o += " } ";
      if (l) {
        o += " if (" + d + ") { ";
      }
    } else {
      o += " if (!" + m + ") { if (vErrors === null) vErrors = " + i + ".errors; else vErrors = vErrors.concat(" + i + ".errors); errors = vErrors.length; } ";
      if (l) {
        o += " else { ";
      }
    }
  }
  return o;
};