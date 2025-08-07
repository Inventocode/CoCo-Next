"use strict";

var r = /^[a-z_$][a-z0-9_$-]*$/i;
var i = require("./2248");
var o = require("./2249");
module.exports = {
  add: function (e, t) {
    var n = this.RULES;
    if (n.keywords[e]) {
      throw new Error("Keyword " + e + " is already defined");
    }
    if (!r.test(e)) {
      throw new Error("Keyword " + e + " is not a valid identifier");
    }
    if (t) {
      this.validateKeyword(t, true);
      var o = t.type;
      if (Array.isArray(o)) {
        for (var a = 0; a < o.length; a++) {
          c(e, o[a], t);
        }
      } else {
        c(e, o, t);
      }
      var s = t.metaSchema;
      if (s) {
        if (t.$data && this._opts.$data) {
          s = {
            anyOf: [s, {
              $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
            }]
          };
        }
        t.validateSchema = this.compile(s, true);
      }
    }
    function c(e, t, r) {
      for (var o, a = 0; a < n.length; a++) {
        var s = n[a];
        if (s.type == t) {
          o = s;
          break;
        }
      }
      if (!o) {
        o = {
          type: t,
          rules: []
        };
        n.push(o);
      }
      var c = {
        keyword: e,
        definition: r,
        custom: true,
        code: i,
        implements: r.implements
      };
      o.rules.push(c);
      n.custom[e] = c;
    }
    n.keywords[e] = n.all[e] = true;
    return this;
  },
  get: function (e) {
    var t = this.RULES.custom[e];
    return t ? t.definition : this.RULES.keywords[e] || false;
  },
  remove: function (e) {
    var t = this.RULES;
    delete t.keywords[e];
    delete t.all[e];
    delete t.custom[e];
    for (var n = 0; n < t.length; n++) {
      for (var r = t[n].rules, i = 0; i < r.length; i++) {
        if (r[i].keyword == e) {
          r.splice(i, 1);
          break;
        }
      }
    }
    return this;
  },
  validate: function e(t, n) {
    e.errors = null;
    var r = this._validateKeyword = this._validateKeyword || this.compile(o, true);
    if (r(t)) {
      return true;
    }
    e.errors = r.errors;
    if (n) {
      throw new Error("custom keyword definition is invalid: " + this.errorsText(r.errors));
    }
    return false;
  }
};