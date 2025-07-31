"use strict";

require("../1241/index");
var r = require("../1738/398");
var o = require("../1241/944");
var i = require("../1626/167");
var a = require("../1735/247/index");
var s = require("../1735/422");
var c = a("species");
var l = RegExp.prototype;
module.exports = function (e, t, n, u) {
  var d = a(e);
  var p = !i(function () {
    var t = {};
    t[d] = function () {
      return 7;
    };
    return 7 != ""[e](t);
  });
  var f = p && !i(function () {
    var t = !1;
    var n = /a/;
    if ("split" === e) {
      (n = {}).constructor = {};
      n.constructor[c] = function () {
        return n;
      };
      n.flags = "";
      n[d] = /./[d];
    }
    n.exec = function () {
      t = !0;
      return null;
    };
    n[d]("");
    return !t;
  });
  if (!p || !f || n) {
    var h = /./[d];
    var m = t(d, ""[e], function (e, t, n, r, i) {
      var a = t.exec;
      return a === o || a === l.exec ? p && !i ? {
        done: !0,
        value: h.call(t, n, r)
      } : {
        done: !0,
        value: e.call(n, t, r)
      } : {
        done: !1
      };
    });
    r(String.prototype, e, m[0]);
    r(l, d, m[1]);
  }
  if (u) {
    s(l[d], "sham", !0);
  }
};