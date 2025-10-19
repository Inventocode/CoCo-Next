/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1112
 */

"use strict";

var r = ["off", "warn", "error"];
var i = r.reduce(function (e, t, n) {
  e[t] = n;
  return e;
}, {});
var o = [0, 1, 2, "off", "warn", "error"];
module.exports = {
  getRuleSeverity: function (e) {
    var t = Array.isArray(e) ? e[0] : e;
    return 0 === t || 1 === t || 2 === t ? t : "string" === typeof t && i[t.toLowerCase()] || 0;
  },
  normalizeToStrings: function (e) {
    if (e.rules) {
      Object.keys(e.rules).forEach(function (t) {
        var n = e.rules[t];
        if ("number" === typeof n) {
          e.rules[t] = r[n] || r[0];
        } else {
          if (Array.isArray(n) && "number" === typeof n[0]) {
            n[0] = r[n[0]] || r[0];
          }
        }
      });
    }
  },
  isErrorSeverity: function (t) {
    return 2 === module.exports.getRuleSeverity(t);
  },
  isValidSeverity: function (e) {
    var t = Array.isArray(e) ? e[0] : e;
    if ("string" === typeof t) {
      t = t.toLowerCase();
    }
    return -1 !== o.indexOf(t);
  },
  isEverySeverityValid: function (e) {
    var t = this;
    return Object.keys(e).every(function (n) {
      return t.isValidSeverity(e[n]);
    });
  },
  normalizeConfigGlobal: function (e) {
    switch (e) {
      case "off":
        return "off";
      case true:
      case "true":
      case "writeable":
      case "writable":
        return "writable";
      case null:
      case false:
      case "false":
      case "readable":
      case "readonly":
        return "readonly";
      default:
        throw new Error("'".concat(e, "' is not a valid configuration for a global (use 'readonly', 'writable', or 'off')"));
    }
  }
};