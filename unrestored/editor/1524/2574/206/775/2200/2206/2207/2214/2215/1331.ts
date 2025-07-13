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
  var d = "maximum" == t;
  var p = d ? "exclusiveMaximum" : "exclusiveMinimum";
  var _ = e.schema[p];
  var A = e.opts.$data && _ && _.$data;
  var g = d ? "<" : ">";
  var v = d ? ">" : "<";
  var m = void 0;
  if (!h && "number" != typeof s && void 0 !== s) {
    throw new Error(t + " must be number");
  }
  if (!A && void 0 !== _ && "number" != typeof _ && "boolean" != typeof _) {
    throw new Error(p + " must be number or boolean");
  }
  if (A) {
    var y = e.util.getData(_.$data, a, e.dataPathArr);
    var b = "exclusive" + o;
    var w = "exclType" + o;
    var E = "exclIsNumber" + o;
    var x = "' + " + (S = "op" + o) + " + '";
    i += " var schemaExcl" + o + " = " + y + "; ";
    i += " var " + b + "; var " + w + " = typeof " + (y = "schemaExcl" + o) + "; if (" + w + " != 'boolean' && " + w + " != 'undefined' && " + w + " != 'number') { ";
    var C;
    m = p;
    (C = C || []).push(i);
    i = "";
    if (!1 !== e.createErrors) {
      i += " { keyword: '" + (m || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: {} ";
      if (!1 !== e.opts.messages) {
        i += " , message: '" + p + " should be boolean' ";
      }
      if (e.opts.verbose) {
        i += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " ";
      }
      i += " } ";
    } else {
      i += " {} ";
    }
    var O = i;
    i = C.pop();
    if (!e.compositeRule && l) {
      if (e.async) {
        i += " throw new ValidationError([" + O + "]); ";
      } else {
        i += " validate.errors = [" + O + "]; return false; ";
      }
    } else {
      i += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    }
    i += " } else if ( ";
    if (h) {
      i += " (" + r + " !== undefined && typeof " + r + " != 'number') || ";
    }
    i += " " + w + " == 'number' ? ( (" + b + " = " + r + " === undefined || " + y + " " + g + "= " + r + ") ? " + f + " " + v + "= " + y + " : " + f + " " + v + " " + r + " ) : ( (" + b + " = " + y + " === true) ? " + f + " " + v + "= " + r + " : " + f + " " + v + " " + r + " ) || " + f + " !== " + f + ") { var op" + o + " = " + b + " ? '" + g + "' : '" + g + "='; ";
    if (void 0 === s) {
      m = p;
      u = e.errSchemaPath + "/" + p;
      r = y;
      h = A;
    }
  } else {
    x = g;
    if ((E = "number" == typeof _) && h) {
      var S = "'" + x + "'";
      i += " if ( ";
      if (h) {
        i += " (" + r + " !== undefined && typeof " + r + " != 'number') || ";
      }
      i += " ( " + r + " === undefined || " + _ + " " + g + "= " + r + " ? " + f + " " + v + "= " + _ + " : " + f + " " + v + " " + r + " ) || " + f + " !== " + f + ") { ";
    } else {
      if (E && void 0 === s) {
        b = !0;
        m = p;
        u = e.errSchemaPath + "/" + p;
        r = _;
        v += "=";
      } else {
        if (E) {
          r = Math[d ? "min" : "max"](_, s);
        }
        if (_ === (!E || r)) {
          b = !0;
          m = p;
          u = e.errSchemaPath + "/" + p;
          v += "=";
        } else {
          b = !1;
          x += "=";
        }
      }
      S = "'" + x + "'";
      i += " if ( ";
      if (h) {
        i += " (" + r + " !== undefined && typeof " + r + " != 'number') || ";
      }
      i += " " + f + " " + v + " " + r + " || " + f + " !== " + f + ") { ";
    }
  }
  m = m || t;
  (C = C || []).push(i);
  i = "";
  if (!1 !== e.createErrors) {
    i += " { keyword: '" + (m || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { comparison: " + S + ", limit: " + r + ", exclusive: " + b + " } ";
    if (!1 !== e.opts.messages) {
      i += " , message: 'should be " + x + " ";
      i += h ? "' + " + r : r + "'";
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
  O = i;
  i = C.pop();
  if (!e.compositeRule && l) {
    if (e.async) {
      i += " throw new ValidationError([" + O + "]); ";
    } else {
      i += " validate.errors = [" + O + "]; return false; ";
    }
  } else {
    i += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
  }
  i += " } ";
  if (l) {
    i += " else { ";
  }
  return i;
};