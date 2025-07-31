"use strict";

var r = require("../../../../../3190/494");
var i = require("../../../../../../1524/2574/1/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (m(t)) {
    var n = v(t);
    var r = u(n);
    return y(r, e);
  }
  return e;
};
exports.getChalk = v;
exports.shouldHighlight = m;
var a = require("./2753");
var s = require("../../../2623/2664/2665/index");
var o = require("./2754/index");
var l = new Set(["as", "async", "from", "get", "of", "set"]);
function u(e) {
  return {
    keyword: e.cyan,
    capitalized: e.yellow,
    jsxIdentifier: e.yellow,
    punctuator: e.yellow,
    number: e.magenta,
    string: e.green,
    regex: e.magenta,
    comment: e.grey,
    invalid: e.white.bgRed.bold
  };
}
var c;
var p = /\r\n|[\n\r\u2028\u2029]/;
var f = /^[()[\]{}]$/;
var d = /^[a-z][\w-]*$/i;
var h = function (e, t, n) {
  if ("name" === e.type) {
    if ((0, s.isKeyword)(e.value) || (0, s.isStrictReservedWord)(e.value, !0) || l.has(e.value)) {
      return "keyword";
    }
    if (d.test(e.value) && ("<" === n[t - 1] || "</" == n.substr(t - 2, 2))) {
      return "jsxIdentifier";
    }
    if (e.value[0] !== e.value[0].toLowerCase()) {
      return "capitalized";
    }
  }
  return "punctuator" === e.type && f.test(e.value) ? "bracket" : "invalid" !== e.type || "@" !== e.value && "#" !== e.value ? e.type : "punctuator";
};
function y(e, t) {
  var n;
  var i = "";
  var a = r(c(t));
  try {
    var s = function () {
      var t = n.value;
      var r = t.type;
      var a = t.value;
      var s = e[r];
      i += s ? a.split(p).map(function (e) {
        return s(e);
      }).join("\n") : a;
    };
    for (a.s(); !(n = a.n()).done;) {
      s();
    }
  } catch (o) {
    a.e(o);
  } finally {
    a.f();
  }
  return i;
}
function m(e) {
  return !!o.supportsColor || e.forceColor;
}
function v(e) {
  return e.forceColor ? new o.constructor({
    enabled: !0,
    level: 1
  }) : o;
}
c = i.mark(function e(t) {
  var n;
  var r;
  return i.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          if (!(n = a.default.exec(t))) {
            e.next = 6;
            break;
          }
          r = a.matchToToken(n);
          e.next = 4;
          return {
            type: h(r, n.index, t),
            value: r.value
          };
        case 4:
          e.next = 0;
          break;
        case 6:
        case "end":
          return e.stop();
      }
    }
  }, e);
});