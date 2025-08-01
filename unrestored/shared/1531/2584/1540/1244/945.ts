"use strict";

var r = require("../1745/310");
var o = require("../1667/944");
var i = require("../1667/1074");
var a = require("../1541/932");
var s = require("../1253/575");
var c = require("../1745/423/index").get;
var l = require("../1667/1242");
var u = require("../1667/1243");
var d = RegExp.prototype.exec;
var p = a("native-string-replace", String.prototype.replace);
var f = d;
var h = function () {
  var e = /a/;
  var t = /b*/g;
  d.call(e, "a");
  d.call(t, "a");
  return 0 !== e.lastIndex || 0 !== t.lastIndex;
}();
var m = i.UNSUPPORTED_Y || i.BROKEN_CARET;
var g = void 0 !== /()??/.exec("")[1];
if (h || g || m || l || u) {
  f = function (e) {
    var t;
    var n;
    var i;
    var a;
    var l;
    var u;
    var _;
    var v = this;
    var b = c(v);
    var y = r(e);
    var E = b.raw;
    if (E) {
      E.lastIndex = v.lastIndex;
      t = f.call(E, y);
      v.lastIndex = E.lastIndex;
      return t;
    }
    var O = b.groups;
    var w = m && v.sticky;
    var C = o.call(v);
    var T = v.source;
    var S = 0;
    var I = y;
    if (w && (-1 === (C = C.replace("y", "")).indexOf("g") && (C += "g"), I = y.slice(v.lastIndex), v.lastIndex > 0 && (!v.multiline || v.multiline && "\n" !== y.charAt(v.lastIndex - 1)) && (T = "(?: " + T + ")", I = " " + I, S++), n = new RegExp("^(?:" + T + ")", C)), g && (n = new RegExp("^" + T + "$(?!\\s)", C)), h && (i = v.lastIndex), a = d.call(w ? n : v, I), w ? a ? (a.input = a.input.slice(S), a[0] = a[0].slice(S), a.index = v.lastIndex, v.lastIndex += a[0].length) : v.lastIndex = 0 : h && a && (v.lastIndex = v.global ? a.index + a[0].length : i), g && a && a.length > 1 && p.call(a[0], n, function () {
      for (l = 1; l < arguments.length - 2; l++) {
        if (void 0 === arguments[l]) {
          a[l] = void 0;
        }
      }
    }), a && O) {
      for (a.groups = u = s(null), l = 0; l < O.length; l++) {
        u[(_ = O[l])[0]] = a[_[1]];
      }
    }
    return a;
  };
}
module.exports = f;