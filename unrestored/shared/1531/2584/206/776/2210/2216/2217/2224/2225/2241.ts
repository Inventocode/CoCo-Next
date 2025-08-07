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
  var f = "errs__" + i;
  var d = e.util.copy(e);
  var h = "";
  d.level++;
  var p = "valid" + d.level;
  var _ = "key" + i;
  var A = "idx" + i;
  var g = d.dataLevel = e.dataLevel + 1;
  var v = "data" + g;
  var m = "dataProperties" + i;
  var y = Object.keys(a || {}).filter(F);
  var b = e.schema.patternProperties || {};
  var w = Object.keys(b).filter(F);
  var E = e.schema.additionalProperties;
  var x = y.length || w.length;
  var C = false === E;
  var O = "object" == typeof E && Object.keys(E).length;
  var k = e.opts.removeAdditional;
  var S = C || O || k;
  var T = e.opts.ownProperties;
  var B = e.baseId;
  var D = e.schema.required;
  if (D && (!e.opts.$data || !D.$data) && D.length < e.opts.loopRequired) {
    var I = e.util.toHash(D);
  }
  function F(e) {
    return "__proto__" !== e;
  }
  r += "var " + f + " = errors;var " + p + " = true;";
  if (T) {
    r += " var " + m + " = undefined;";
  }
  if (S) {
    r += T ? " " + m + " = " + m + " || Object.keys(" + l + "); for (var " + A + "=0; " + A + "<" + m + ".length; " + A + "++) { var " + _ + " = " + m + "[" + A + "]; " : " for (var " + _ + " in " + l + ") { ";
    if (x) {
      r += " var isAdditional" + i + " = !(false ";
      if (y.length) {
        if (y.length > 8) {
          r += " || validate.schema" + s + ".hasOwnProperty(" + _ + ") ";
        } else {
          var R = y;
          if (R) {
            for (var P = -1, N = R.length - 1; P < N;) {
              Y = R[P += 1];
              r += " || " + _ + " == " + e.util.toQuotedString(Y) + " ";
            }
          }
        }
      }
      if (w.length) {
        var M = w;
        if (M) {
          for (var j = -1, L = M.length - 1; j < L;) {
            oe = M[j += 1];
            r += " || " + e.usePattern(oe) + ".test(" + _ + ") ";
          }
        }
      }
      r += " ); if (isAdditional" + i + ") { ";
    }
    if ("all" == k) {
      r += " delete " + l + "[" + _ + "]; ";
    } else {
      var U = e.errorPath;
      var H = "' + " + _ + " + '";
      if (e.opts._errorDataPathProperty) {
        e.errorPath = e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers);
      }
      if (C) {
        if (k) {
          r += " delete " + l + "[" + _ + "]; ";
        } else {
          r += " " + p + " = false; ";
          var V = c;
          c = e.errSchemaPath + "/additionalProperties";
          (ne = ne || []).push(r);
          r = "";
          if (false !== e.createErrors) {
            r += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { additionalProperty: '" + H + "' } ";
            if (false !== e.opts.messages) {
              r += " , message: '";
              if (e.opts._errorDataPathProperty) {
                r += "is an invalid additional property";
              } else {
                r += "should NOT have additional properties";
              }
              r += "' ";
            }
            if (e.opts.verbose) {
              r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
            }
            r += " } ";
          } else {
            r += " {} ";
          }
          var G = r;
          r = ne.pop();
          if (!e.compositeRule && u) {
            if (e.async) {
              r += " throw new ValidationError([" + G + "]); ";
            } else {
              r += " validate.errors = [" + G + "]; return false; ";
            }
          } else {
            r += " var err = " + G + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          }
          c = V;
          if (u) {
            r += " break; ";
          }
        }
      } else if (O) {
        if ("failing" == k) {
          r += " var " + f + " = errors;  ";
          var z = e.compositeRule;
          e.compositeRule = d.compositeRule = true;
          d.schema = E;
          d.schemaPath = e.schemaPath + ".additionalProperties";
          d.errSchemaPath = e.errSchemaPath + "/additionalProperties";
          d.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers);
          var Q = l + "[" + _ + "]";
          d.dataPathArr[g] = _;
          var W = e.validate(d);
          d.baseId = B;
          if (e.util.varOccurences(W, v) < 2) {
            r += " " + e.util.varReplace(W, v, Q) + " ";
          } else {
            r += " var " + v + " = " + Q + "; " + W + " ";
          }
          r += " if (!" + p + ") { errors = " + f + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + l + "[" + _ + "]; }  ";
          e.compositeRule = d.compositeRule = z;
        } else {
          d.schema = E;
          d.schemaPath = e.schemaPath + ".additionalProperties";
          d.errSchemaPath = e.errSchemaPath + "/additionalProperties";
          d.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers);
          Q = l + "[" + _ + "]";
          d.dataPathArr[g] = _;
          W = e.validate(d);
          d.baseId = B;
          if (e.util.varOccurences(W, v) < 2) {
            r += " " + e.util.varReplace(W, v, Q) + " ";
          } else {
            r += " var " + v + " = " + Q + "; " + W + " ";
          }
          if (u) {
            r += " if (!" + p + ") break; ";
          }
        }
      }
      e.errorPath = U;
    }
    if (x) {
      r += " } ";
    }
    r += " }  ";
    if (u) {
      r += " if (" + p + ") { ";
      h += "}";
    }
  }
  var K = e.opts.useDefaults && !e.compositeRule;
  if (y.length) {
    var X = y;
    if (X) {
      for (var Y, q = -1, $ = X.length - 1; q < $;) {
        var J = a[Y = X[q += 1]];
        if (e.opts.strictKeywords ? "object" == typeof J && Object.keys(J).length > 0 || false === J : e.util.schemaHasRules(J, e.RULES.all)) {
          var Z = e.util.getProperty(Y);
          Q = l + Z;
          var ee = K && undefined !== J.default;
          d.schema = J;
          d.schemaPath = s + Z;
          d.errSchemaPath = c + "/" + e.util.escapeFragment(Y);
          d.errorPath = e.util.getPath(e.errorPath, Y, e.opts.jsonPointers);
          d.dataPathArr[g] = e.util.toQuotedString(Y);
          W = e.validate(d);
          d.baseId = B;
          if (e.util.varOccurences(W, v) < 2) {
            W = e.util.varReplace(W, v, Q);
            var te = Q;
          } else {
            te = v;
            r += " var " + v + " = " + Q + "; ";
          }
          if (ee) {
            r += " " + W + " ";
          } else {
            if (I && I[Y]) {
              r += " if ( " + te + " === undefined ";
              if (T) {
                r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(Y) + "') ";
              }
              r += ") { " + p + " = false; ";
              U = e.errorPath;
              V = c;
              var ne;
              var re = e.util.escapeQuotes(Y);
              if (e.opts._errorDataPathProperty) {
                e.errorPath = e.util.getPath(U, Y, e.opts.jsonPointers);
              }
              c = e.errSchemaPath + "/required";
              (ne = ne || []).push(r);
              r = "";
              if (false !== e.createErrors) {
                r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + re + "' } ";
                if (false !== e.opts.messages) {
                  r += " , message: '";
                  if (e.opts._errorDataPathProperty) {
                    r += "is a required property";
                  } else {
                    r += "should have required property \\'" + re + "\\'";
                  }
                  r += "' ";
                }
                if (e.opts.verbose) {
                  r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " ";
                }
                r += " } ";
              } else {
                r += " {} ";
              }
              G = r;
              r = ne.pop();
              if (!e.compositeRule && u) {
                if (e.async) {
                  r += " throw new ValidationError([" + G + "]); ";
                } else {
                  r += " validate.errors = [" + G + "]; return false; ";
                }
              } else {
                r += " var err = " + G + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
              }
              c = V;
              e.errorPath = U;
              r += " } else { ";
            } else if (u) {
              r += " if ( " + te + " === undefined ";
              if (T) {
                r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(Y) + "') ";
              }
              r += ") { " + p + " = true; } else { ";
            } else {
              r += " if (" + te + " !== undefined ";
              if (T) {
                r += " &&   Object.prototype.hasOwnProperty.call(" + l + ", '" + e.util.escapeQuotes(Y) + "') ";
              }
              r += " ) { ";
            }
            r += " " + W + " } ";
          }
        }
        if (u) {
          r += " if (" + p + ") { ";
          h += "}";
        }
      }
    }
  }
  if (w.length) {
    var ie = w;
    if (ie) {
      for (var oe, ae = -1, se = ie.length - 1; ae < se;) {
        J = b[oe = ie[ae += 1]];
        if (e.opts.strictKeywords ? "object" == typeof J && Object.keys(J).length > 0 || false === J : e.util.schemaHasRules(J, e.RULES.all)) {
          d.schema = J;
          d.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(oe);
          d.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(oe);
          r += T ? " " + m + " = " + m + " || Object.keys(" + l + "); for (var " + A + "=0; " + A + "<" + m + ".length; " + A + "++) { var " + _ + " = " + m + "[" + A + "]; " : " for (var " + _ + " in " + l + ") { ";
          r += " if (" + e.usePattern(oe) + ".test(" + _ + ")) { ";
          d.errorPath = e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers);
          Q = l + "[" + _ + "]";
          d.dataPathArr[g] = _;
          W = e.validate(d);
          d.baseId = B;
          if (e.util.varOccurences(W, v) < 2) {
            r += " " + e.util.varReplace(W, v, Q) + " ";
          } else {
            r += " var " + v + " = " + Q + "; " + W + " ";
          }
          if (u) {
            r += " if (!" + p + ") break; ";
          }
          r += " } ";
          if (u) {
            r += " else " + p + " = true; ";
          }
          r += " }  ";
          if (u) {
            r += " if (" + p + ") { ";
            h += "}";
          }
        }
      }
    }
  }
  if (u) {
    r += " " + h + " if (" + f + " == errors) {";
  }
  return r;
};