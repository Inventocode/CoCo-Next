"use strict";

var r = require("../1626/86/index");
var o = require("../1738/272");
var i = require("../1738/194");
var a = require("../1738/332");
var s = require("../1626/231");
var c = require("../1534/300/index").f;
var l = require("./1207");
var u = i.Symbol;
if (o && "function" == typeof u && (!("description" in u.prototype) || void 0 !== u().description)) {
  var d = {};
  var p = function () {
    var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]);
    var t = this instanceof p ? new u(e) : void 0 === e ? u() : u(e);
    if ("" === e) {
      d[t] = !0;
    }
    return t;
  };
  l(p, u);
  var f = p.prototype = u.prototype;
  f.constructor = p;
  var h = f.toString;
  var m = "Symbol(test)" == String(u("test"));
  var g = /^Symbol\((.*)\)[^)]+$/;
  c(f, "description", {
    configurable: !0,
    get: function () {
      var e = s(this) ? this.valueOf() : this;
      var t = h.call(e);
      if (a(d, e)) {
        return "";
      }
      var n = m ? t.slice(7, -1) : t.replace(g, "$1");
      return "" === n ? void 0 : n;
    }
  });
  r({
    global: !0,
    forced: !0
  }, {
    Symbol: p
  });
}