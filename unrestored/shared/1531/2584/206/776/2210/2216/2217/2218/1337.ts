"use strict";

module.exports = function (e, t, n) {
  var r = "";
  var i = true === e.schema.$async;
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
  if (e.isTop) {
    r += " var validate = ";
    if (i) {
      e.async = true;
      r += "async ";
    }
    r += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ";
    if (a && (e.opts.sourceCode || e.opts.processCode)) {
      r += " /*# sourceURL=" + a + " */ ";
    }
  }
  if ("boolean" == typeof e.schema || !o && !e.schema.$ref) {
    var u = e.level;
    var l = e.dataLevel;
    var f = e.schema["false schema"];
    var d = e.schemaPath + e.util.getProperty("false schema");
    var h = e.errSchemaPath + "/false schema";
    var p = !e.opts.allErrors;
    var _ = "data" + (l || "");
    var A = "valid" + u;
    if (false === e.schema) {
      if (e.isTop) {
        p = true;
      } else {
        r += " var " + A + " = false; ";
      }
      (q = q || []).push(r);
      r = "";
      if (false !== e.createErrors) {
        r += " { keyword: 'false schema' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: {} ";
        if (false !== e.opts.messages) {
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
    e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema));
    e.baseId = e.baseId || e.rootId;
    delete e.isTop;
    e.dataPathArr = [""];
    if (undefined !== e.schema.default && e.opts.useDefaults && e.opts.strictDefaults) {
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
    if (a) {
      e.baseId = e.resolve.url(e.baseId, a);
    }
    if (i && !e.async) {
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
  if (w && e.opts.nullable && true === e.schema.nullable) {
    if (E) {
      if (-1 == w.indexOf("null")) {
        w = w.concat("null");
      }
    } else {
      if ("null" != w) {
        w = [w, "null"];
        E = true;
      }
    }
  }
  if (E && 1 == w.length) {
    w = w[0];
    E = false;
  }
  if (e.schema.$ref && o) {
    if ("fail" == e.opts.extendRefs) {
      throw new Error("$ref: validation keywords used in schema at path \"" + e.errSchemaPath + "\" (see option extendRefs)");
    }
    if (true !== e.opts.extendRefs) {
      o = false;
      e.logger.warn("$ref: keywords ignored in schema at path \"" + e.errSchemaPath + "\"");
    }
  }
  if (e.schema.$comment && e.opts.$comment) {
    r += " " + e.RULES.all.$comment.code(e, "$comment");
  }
  if (w) {
    if (e.opts.coerceTypes) {
      var x = e.util.coerceToTypes(e.opts.coerceTypes, w);
    }
    var C = e.RULES.types[w];
    if (x || E || true === C || C && !$(C)) {
      d = e.schemaPath + ".type";
      h = e.errSchemaPath + "/type";
      d = e.schemaPath + ".type";
      h = e.errSchemaPath + "/type";
      var O = E ? "checkDataTypes" : "checkDataType";
      r += " if (" + e.util[O](w, _, e.opts.strictNumbers, true) + ") { ";
      if (x) {
        var k = "dataType" + u;
        var S = "coerced" + u;
        r += " var " + k + " = typeof " + _ + "; var " + S + " = undefined; ";
        if ("array" == e.opts.coerceTypes) {
          r += " if (" + k + " == 'object' && Array.isArray(" + _ + ") && " + _ + ".length == 1) { " + _ + " = " + _ + "[0]; " + k + " = typeof " + _ + "; if (" + e.util.checkDataType(e.schema.type, _, e.opts.strictNumbers) + ") " + S + " = " + _ + "; } ";
        }
        r += " if (" + S + " !== undefined) ; ";
        var T = x;
        if (T) {
          for (var B, D = -1, I = T.length - 1; D < I;) {
            if ("string" == (B = T[D += 1])) {
              r += " else if (" + k + " == 'number' || " + k + " == 'boolean') " + S + " = '' + " + _ + "; else if (" + _ + " === null) " + S + " = ''; ";
            } else {
              if ("number" == B || "integer" == B) {
                r += " else if (" + k + " == 'boolean' || " + _ + " === null || (" + k + " == 'string' && " + _ + " && " + _ + " == +" + _ + " ";
                if ("integer" == B) {
                  r += " && !(" + _ + " % 1)";
                }
                r += ")) " + S + " = +" + _ + "; ";
              } else {
                if ("boolean" == B) {
                  r += " else if (" + _ + " === 'false' || " + _ + " === 0 || " + _ + " === null) " + S + " = false; else if (" + _ + " === 'true' || " + _ + " === 1) " + S + " = true; ";
                } else {
                  if ("null" == B) {
                    r += " else if (" + _ + " === '' || " + _ + " === 0 || " + _ + " === false) " + S + " = null; ";
                  } else {
                    if ("array" == e.opts.coerceTypes && "array" == B) {
                      r += " else if (" + k + " == 'string' || " + k + " == 'number' || " + k + " == 'boolean' || " + _ + " == null) " + S + " = [" + _ + "]; ";
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
        if (false !== e.createErrors) {
          r += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { type: '";
          r += E ? "" + w.join(",") : "" + w;
          r += "' } ";
          if (false !== e.opts.messages) {
            r += " , message: 'should be ";
            r += E ? "" + w.join(",") : "" + w;
            r += "' ";
          }
          if (e.opts.verbose) {
            r += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " ";
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
        r += " } if (" + S + " !== undefined) {  ";
        var F = l ? "data" + (l - 1 || "") : "parentData";
        r += " " + _ + " = " + S + "; ";
        if (!l) {
          r += "if (" + F + " !== undefined)";
        }
        r += " " + F + "[" + (l ? e.dataPathArr[l] : "parentDataProperty") + "] = " + S + "; } ";
      } else {
        (q = q || []).push(r);
        r = "";
        if (false !== e.createErrors) {
          r += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { type: '";
          r += E ? "" + w.join(",") : "" + w;
          r += "' } ";
          if (false !== e.opts.messages) {
            r += " , message: 'should be ";
            r += E ? "" + w.join(",") : "" + w;
            r += "' ";
          }
          if (e.opts.verbose) {
            r += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " ";
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
          if (C.type) {
            r += " if (" + e.util.checkDataType(C.type, _, e.opts.strictNumbers) + ") { ";
          }
          if (e.opts.useDefaults) {
            if ("object" == C.type && e.schema.properties) {
              f = e.schema.properties;
              var M = Object.keys(f);
              if (M) {
                for (var j, L = -1, U = M.length - 1; L < U;) {
                  if (undefined !== (G = f[j = M[L += 1]]).default) {
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
                  if (undefined !== (G = V[D += 1]).default) {
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
          if (p) {
            r += " " + y + " ";
            y = "";
          }
          if (C.type && (r += " } ", w && w === C.type && !x)) {
            r += " else { ";
            var q;
            d = e.schemaPath + ".type";
            h = e.errSchemaPath + "/type";
            (q = q || []).push(r);
            r = "";
            if (false !== e.createErrors) {
              r += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { type: '";
              r += E ? "" + w.join(",") : "" + w;
              r += "' } ";
              if (false !== e.opts.messages) {
                r += " , message: 'should be ";
                r += E ? "" + w.join(",") : "" + w;
                r += "' ";
              }
              if (e.opts.verbose) {
                r += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " ";
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
        return true;
      }
    }
  }
  function J(t) {
    return undefined !== e.schema[t.keyword] || t.implements && function (t) {
      for (var n = t.implements, r = 0; r < n.length; r++) {
        if (undefined !== e.schema[n[r]]) {
          return true;
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