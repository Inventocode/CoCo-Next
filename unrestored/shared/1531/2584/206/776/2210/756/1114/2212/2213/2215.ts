!function () {
  "use strict";

  var t = require("./1334");
  function r(e, t) {
    return !(!t && "yield" === e) && i(e, t);
  }
  function i(e, t) {
    if (t && function (e) {
      switch (e) {
        case "implements":
        case "interface":
        case "package":
        case "private":
        case "protected":
        case "public":
        case "static":
        case "let":
          return true;
        default:
          return false;
      }
    }(e)) {
      return true;
    }
    switch (e.length) {
      case 2:
        return "if" === e || "in" === e || "do" === e;
      case 3:
        return "var" === e || "for" === e || "new" === e || "try" === e;
      case 4:
        return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;
      case 5:
        return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;
      case 6:
        return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;
      case 7:
        return "default" === e || "finally" === e || "extends" === e;
      case 8:
        return "function" === e || "continue" === e || "debugger" === e;
      case 10:
        return "instanceof" === e;
      default:
        return false;
    }
  }
  function o(e, t) {
    return "null" === e || "true" === e || "false" === e || r(e, t);
  }
  function a(e, t) {
    return "null" === e || "true" === e || "false" === e || i(e, t);
  }
  function s(e) {
    var n;
    var r;
    var i;
    if (0 === e.length) {
      return false;
    }
    i = e.charCodeAt(0);
    if (!t.isIdentifierStartES5(i)) {
      return false;
    }
    for (n = 1, r = e.length; n < r; ++n) {
      i = e.charCodeAt(n);
      if (!t.isIdentifierPartES5(i)) {
        return false;
      }
    }
    return true;
  }
  function c(e) {
    var n;
    var r;
    var i;
    var o;
    var a;
    if (0 === e.length) {
      return false;
    }
    for (a = t.isIdentifierStartES6, n = 0, r = e.length; n < r; ++n) {
      if (55296 <= (i = e.charCodeAt(n)) && i <= 56319) {
        if (++n >= r) {
          return false;
        }
        if (!(56320 <= (o = e.charCodeAt(n)) && o <= 57343)) {
          return false;
        }
        i = 1024 * (i - 55296) + (o - 56320) + 65536;
      }
      if (!a(i)) {
        return false;
      }
      a = t.isIdentifierPartES6;
    }
    return true;
  }
  module.exports = {
    isKeywordES5: r,
    isKeywordES6: i,
    isReservedWordES5: o,
    isReservedWordES6: a,
    isRestrictedWord: function (e) {
      return "eval" === e || "arguments" === e;
    },
    isIdentifierNameES5: s,
    isIdentifierNameES6: c,
    isIdentifierES5: function (e, t) {
      return s(e) && !o(e, t);
    },
    isIdentifierES6: function (e, t) {
      return c(e) && !a(e, t);
    }
  };
}();