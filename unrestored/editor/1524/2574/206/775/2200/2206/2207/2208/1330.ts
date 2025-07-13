"use strict";

module.exports = function (e, t, n) {
  var r = "";
  var i = !0 === e.schema.$async;
  var o = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref");
  var a = e.self._getId(e.schema);
  if (e.opts.strictKeywords) {
    var s = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);
    if (s) {
      var c = "unknown keyword: " + s;
      if ("log" !== e.opts.strictKeywords) {
        throw new Error(c);
      }
      e.logger.warn(c);
    }
  }
  if (e.isTop && (r += " var validate = ", i && (e.async = !0, r += "async "), r += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", a && (e.opts.sourceCode || e.opts.processCode) && (r += " /*# sourceURL=" + a + " */ ")), "boolean" == typeof e.schema || !o && !e.schema.$ref) {
    var u = e.level;
    var l = e.dataLevel;
    var f = e.schema["false schema"];
    var h = e.schemaPath + e.util.getProperty("false schema");
    var d = e.errSchemaPath + "/false schema";
    var p = !e.opts.allErrors;
    var _ = "data" + (l || "");
    var A = "valid" + u;
    if (!1 === e.schema) {
      if (e.isTop) {
        p = !0;
      } else {
        r += " var " + A + " = false; ";
      }
      (q = q || []).push(r);
      r = "";
      if (!1 !== e.createErrors) {
        r += " { keyword: 'false schema' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ";
        if (!1 !== e.opts.messages) {
          r += " , message: 'boolean schema is false' ";
        }
        if (e.opts.verbose) {
          r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " ";
        }
        r += " } ";
      } else {
        r += " {} ";
      }
      var g = r;
      r = q.pop();
      if (!e.compositeRule && p) {
        if (e.async) {
          r += " throw new ValidationError([" + g + "]); ";
        } else {
          r += " validate.errors = [" + g + "]; return false; ";
        }
      } else {
        r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
    } else if (e.isTop) {
      r += i ? " return data; " : " validate.errors = null; return true; ";
    } else {
      r += " var " + A + " = true; ";
    }
    if (e.isTop) {
      r += " }; return validate; ";
    }
    return r;
  }
  if (e.isTop) {
    var v = e.isTop;
    u = e.level = 0;
    l = e.dataLevel = 0;
    _ = "data";
    if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [""], void 0 !== e.schema.default && e.opts.useDefaults && e.opts.strictDefaults) {
      var m = "default is ignored in the schema root";
      if ("log" !== e.opts.strictDefaults) {
        throw new Error(m);
      }
      e.logger.warn(m);
    }
    r += " var vErrors = null; ";
    r += " var errors = 0;     ";
    r += " if (rootData === undefined) rootData = data; ";
  } else {
    u = e.level;
    _ = "data" + ((l = e.dataLevel) || "");
    if (a && (e.baseId = e.resolve.url(e.baseId, a)), i && !e.async) {
      throw new Error("async schema in sync schema");
    }
    r += " var errs_" + u + " = errors;";
  }
  A = "valid" + u;
  p = !e.opts.allErrors;
  var y = "";
  var b = "";
  var w = e.schema.type;
  var E = Array.isArray(w);
  if (w && e.opts.nullable && !0 === e.schema.nullable && (E ? -1 == w.indexOf("null") && (w = w.concat("null")) : "null" != w && (w = [w, "null"], E = !0)), E && 1 == w.length && (w = w[0], E = !1), e.schema.$ref && o) {
    if ("fail" == e.opts.extendRefs) {
      throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
    }
    if (!0 !== e.opts.extendRefs) {
      o = !1;
      e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"');
    }
  }
  if (e.schema.$comment && e.opts.$comment && (r += " " + e.RULES.all.$comment.code(e, "$comment")), w) {
    if (e.opts.coerceTypes) {
      var x = e.util.coerceToTypes(e.opts.coerceTypes, w);
    }
    var C = e.RULES.types[w];
    if (x || E || !0 === C || C && !$(C)) {
      h = e.schemaPath + ".type";
      d = e.errSchemaPath + "/type";
      h = e.schemaPath + ".type";
      d = e.errSchemaPath + "/type";
      var O = E ? "checkDataTypes" : "checkDataType";
      if (r += " if (" + e.util[O](w, _, e.opts.strictNumbers, !0) + ") { ", x) {
        var S = "dataType" + u;
        var k = "coerced" + u;
        r += " var " + S + " = typeof " + _ + "; var " + k + " = undefined; ";
        if ("array" == e.opts.coerceTypes) {
          r += " if (" + S + " == 'object' && Array.isArray(" + _ + ") && " + _ + ".length == 1) { " + _ + " = " + _ + "[0]; " + S + " = typeof " + _ + "; if (" + e.util.checkDataType(e.schema.type, _, e.opts.strictNumbers) + ") " + k + " = " + _ + "; } ";
        }
        r += " if (" + k + " !== undefined) ; ";
        var T = x;
        if (T) {
          for (var B, D = -1, I = T.length - 1; D < I;) {
            if ("string" == (B = T[D += 1])) {
              r += " else if (" + S + " == 'number' || " + S + " == 'boolean') " + k + " = '' + " + _ + "; else if (" + _ + " === null) " + k + " = ''; ";
            } else {
              if ("number" == B || "integer" == B) {
                r += " else if (" + S + " == 'boolean' || " + _ + " === null || (" + S + " == 'string' && " + _ + " && " + _ + " == +" + _ + " ";
                if ("integer" == B) {
                  r += " && !(" + _ + " % 1)";
                }
                r += ")) " + k + " = +" + _ + "; ";
              } else {
                if ("boolean" == B) {
                  r += " else if (" + _ + " === 'false' || " + _ + " === 0 || " + _ + " === null) " + k + " = false; else if (" + _ + " === 'true' || " + _ + " === 1) " + k + " = true; ";
                } else {
                  if ("null" == B) {
                    r += " else if (" + _ + " === '' || " + _ + " === 0 || " + _ + " === false) " + k + " = null; ";
                  } else {
                    if ("array" == e.opts.coerceTypes && "array" == B) {
                      r += " else if (" + S + " == 'string' || " + S + " == 'number' || " + S + " == 'boolean' || " + _ + " == null) " + k + " = [" + _ + "]; ";
                    }
                  }
                }
              }
            }
          }
        }
        r += " else {   ";
        (q = q || []).push(r);
        r = "";
        if (!1 !== e.createErrors) {
          r += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { type: '";
          r += E ? "" + w.join(",") : "" + w;
          r += "' } ";
          if (!1 !== e.opts.messages) {
            r += " , message: 'should be ";
            r += E ? "" + w.join(",") : "" + w;
            r += "' ";
          }
          if (e.opts.verbose) {
            r += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " ";
          }
          r += " } ";
        } else {
          r += " {} ";
        }
        g = r;
        r = q.pop();
        if (!e.compositeRule && p) {
          if (e.async) {
            r += " throw new ValidationError([" + g + "]); ";
          } else {
            r += " validate.errors = [" + g + "]; return false; ";
          }
        } else {
          r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        r += " } if (" + k + " !== undefined) {  ";
        var F = l ? "data" + (l - 1 || "") : "parentData";
        r += " " + _ + " = " + k + "; ";
        if (!l) {
          r += "if (" + F + " !== undefined)";
        }
        r += " " + F + "[" + (l ? e.dataPathArr[l] : "parentDataProperty") + "] = " + k + "; } ";
      } else {
        (q = q || []).push(r);
        r = "";
        if (!1 !== e.createErrors) {
          r += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { type: '";
          r += E ? "" + w.join(",") : "" + w;
          r += "' } ";
          if (!1 !== e.opts.messages) {
            r += " , message: 'should be ";
            r += E ? "" + w.join(",") : "" + w;
            r += "' ";
          }
          if (e.opts.verbose) {
            r += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " ";
          }
          r += " } ";
        } else {
          r += " {} ";
        }
        g = r;
        r = q.pop();
        if (!e.compositeRule && p) {
          if (e.async) {
            r += " throw new ValidationError([" + g + "]); ";
          } else {
            r += " validate.errors = [" + g + "]; return false; ";
          }
        } else {
          r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
      }
      r += " } ";
    }
  }
  if (e.schema.$ref && !o) {
    r += " " + e.RULES.all.$ref.code(e, "$ref") + " ";
    if (p) {
      r += " } if (errors === ";
      r += v ? "0" : "errs_" + u;
      r += ") { ";
      b += "}";
    }
  } else {
    var R = e.RULES;
    if (R) {
      for (var P = -1, N = R.length - 1; P < N;) {
        if ($(C = R[P += 1])) {
          if (C.type && (r += " if (" + e.util.checkDataType(C.type, _, e.opts.strictNumbers) + ") { "), e.opts.useDefaults) {
            if ("object" == C.type && e.schema.properties) {
              f = e.schema.properties;
              var M = Object.keys(f);
              if (M) {
                for (var j, L = -1, U = M.length - 1; L < U;) {
                  if (void 0 !== (G = f[j = M[L += 1]]).default) {
                    var H = _ + e.util.getProperty(j);
                    if (e.compositeRule) {
                      if (e.opts.strictDefaults) {
                        m = "default is ignored for: " + H;
                        if ("log" !== e.opts.strictDefaults) {
                          throw new Error(m);
                        }
                        e.logger.warn(m);
                      }
                    } else {
                      r += " if (" + H + " === undefined ";
                      if ("empty" == e.opts.useDefaults) {
                        r += " || " + H + " === null || " + H + " === '' ";
                      }
                      r += " ) " + H + " = ";
                      if ("shared" == e.opts.useDefaults) {
                        r += " " + e.useDefault(G.default) + " ";
                      } else {
                        r += " " + JSON.stringify(G.default) + " ";
                      }
                      r += "; ";
                    }
                  }
                }
              }
            } else if ("array" == C.type && Array.isArray(e.schema.items)) {
              var V = e.schema.items;
              if (V) {
                D = -1;
                for (var G, z = V.length - 1; D < z;) {
                  if (void 0 !== (G = V[D += 1]).default) {
                    H = _ + "[" + D + "]";
                    if (e.compositeRule) {
                      if (e.opts.strictDefaults) {
                        m = "default is ignored for: " + H;
                        if ("log" !== e.opts.strictDefaults) {
                          throw new Error(m);
                        }
                        e.logger.warn(m);
                      }
                    } else {
                      r += " if (" + H + " === undefined ";
                      if ("empty" == e.opts.useDefaults) {
                        r += " || " + H + " === null || " + H + " === '' ";
                      }
                      r += " ) " + H + " = ";
                      if ("shared" == e.opts.useDefaults) {
                        r += " " + e.useDefault(G.default) + " ";
                      } else {
                        r += " " + JSON.stringify(G.default) + " ";
                      }
                      r += "; ";
                    }
                  }
                }
              }
            }
          }
          var Q = C.rules;
          if (Q) {
            for (var W, K = -1, X = Q.length - 1; K < X;) {
              if (J(W = Q[K += 1])) {
                var Y = W.code(e, W.keyword, C.type);
                if (Y) {
                  r += " " + Y + " ";
                  if (p) {
                    y += "}";
                  }
                }
              }
            }
          }
          if (p && (r += " " + y + " ", y = ""), C.type && (r += " } ", w && w === C.type && !x)) {
            r += " else { ";
            var q;
            h = e.schemaPath + ".type";
            d = e.errSchemaPath + "/type";
            (q = q || []).push(r);
            r = "";
            if (!1 !== e.createErrors) {
              r += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { type: '";
              r += E ? "" + w.join(",") : "" + w;
              r += "' } ";
              if (!1 !== e.opts.messages) {
                r += " , message: 'should be ";
                r += E ? "" + w.join(",") : "" + w;
                r += "' ";
              }
              if (e.opts.verbose) {
                r += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " ";
              }
              r += " } ";
            } else {
              r += " {} ";
            }
            g = r;
            r = q.pop();
            if (!e.compositeRule && p) {
              if (e.async) {
                r += " throw new ValidationError([" + g + "]); ";
              } else {
                r += " validate.errors = [" + g + "]; return false; ";
              }
            } else {
              r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
            r += " } ";
          }
          if (p) {
            r += " if (errors === ";
            r += v ? "0" : "errs_" + u;
            r += ") { ";
            b += "}";
          }
        }
      }
    }
  }
  function $(e) {
    for (var t = e.rules, n = 0; n < t.length; n++) {
      if (J(t[n])) {
        return !0;
      }
    }
  }
  function J(t) {
    return void 0 !== e.schema[t.keyword] || t.implements && function (t) {
      for (var n = t.implements, r = 0; r < n.length; r++) {
        if (void 0 !== e.schema[n[r]]) {
          return !0;
        }
      }
    }(t);
  }
  if (p) {
    r += " " + b + " ";
  }
  if (v) {
    if (i) {
      r += " if (errors === 0) return data;           ";
      r += " else throw new ValidationError(vErrors); ";
    } else {
      r += " validate.errors = vErrors; ";
      r += " return errors === 0;       ";
    }
    r += " }; return validate;";
  } else {
    r += " var " + A + " = errors === errs_" + u + ";";
  }
  return r;
};