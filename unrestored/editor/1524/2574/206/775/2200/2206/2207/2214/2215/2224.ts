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
  if (!1 === e.opts.format) {
    if (u) {
      r += " if (true) { ";
    }
    return r;
  }
  var f;
  var h = e.opts.$data && a && a.$data;
  if (h) {
    r += " var schema" + i + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ";
    f = "schema" + i;
  } else {
    f = a;
  }
  var d = e.opts.unknownFormats;
  var p = Array.isArray(d);
  if (h) {
    r += " var " + (_ = "format" + i) + " = formats[" + f + "]; var " + (A = "isObject" + i) + " = typeof " + _ + " == 'object' && !(" + _ + " instanceof RegExp) && " + _ + ".validate; var " + (g = "formatType" + i) + " = " + A + " && " + _ + ".type || 'string'; if (" + A + ") { ";
    if (e.async) {
      r += " var async" + i + " = " + _ + ".async; ";
    }
    r += " " + _ + " = " + _ + ".validate; } if (  ";
    if (h) {
      r += " (" + f + " !== undefined && typeof " + f + " != 'string') || ";
    }
    r += " (";
    if ("ignore" != d) {
      r += " (" + f + " && !" + _ + " ";
      if (p) {
        r += " && self._opts.unknownFormats.indexOf(" + f + ") == -1 ";
      }
      r += ") || ";
    }
    r += " (" + _ + " && " + g + " == '" + n + "' && !(typeof " + _ + " == 'function' ? ";
    if (e.async) {
      r += " (async" + i + " ? await " + _ + "(" + l + ") : " + _ + "(" + l + ")) ";
    } else {
      r += " " + _ + "(" + l + ") ";
    }
    r += " : " + _ + ".test(" + l + "))))) {";
  } else {
    var _;
    if (!(_ = e.formats[a])) {
      if ("ignore" == d) {
        e.logger.warn('unknown format "' + a + '" ignored in schema at path "' + e.errSchemaPath + '"');
        if (u) {
          r += " if (true) { ";
        }
        return r;
      }
      if (p && d.indexOf(a) >= 0) {
        if (u) {
          r += " if (true) { ";
        }
        return r;
      }
      throw new Error('unknown format "' + a + '" is used in schema at path "' + e.errSchemaPath + '"');
    }
    var A;
    var g = (A = "object" == typeof _ && !(_ instanceof RegExp) && _.validate) && _.type || "string";
    if (A) {
      var v = !0 === _.async;
      _ = _.validate;
    }
    if (g != n) {
      if (u) {
        r += " if (true) { ";
      }
      return r;
    }
    if (v) {
      if (!e.async) {
        throw new Error("async format in sync schema");
      }
      r += " if (!(await " + (m = "formats" + e.util.getProperty(a) + ".validate") + "(" + l + "))) { ";
    } else {
      r += " if (! ";
      var m = "formats" + e.util.getProperty(a);
      if (A) {
        m += ".validate";
      }
      r += "function" == typeof _ ? " " + m + "(" + l + ") " : " " + m + ".test(" + l + ") ";
      r += ") { ";
    }
  }
  var y = y || [];
  y.push(r);
  r = "";
  if (!1 !== e.createErrors) {
    r += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { format:  ";
    r += h ? "" + f : "" + e.util.toQuotedString(a);
    r += "  } ";
    if (!1 !== e.opts.messages) {
      r += " , message: 'should match format \"";
      r += h ? "' + " + f + " + '" : "" + e.util.escapeQuotes(a);
      r += "\"' ";
    }
    if (e.opts.verbose) {
      r += " , schema:  ";
      r += h ? "validate.schema" + s : "" + e.util.toQuotedString(a);
      r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
    }
    r += " } ";
  } else {
    r += " {} ";
  }
  var b = r;
  r = y.pop();
  if (!e.compositeRule && u) {
    if (e.async) {
      r += " throw new ValidationError([" + b + "]); ";
    } else {
      r += " validate.errors = [" + b + "]; return false; ";
    }
  } else {
    r += " var err = " + b + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
  }
  r += " } ";
  if (u) {
    r += " else { ";
  }
  return r;
};