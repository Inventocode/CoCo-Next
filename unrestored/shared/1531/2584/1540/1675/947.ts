"use strict";

require("../1244");
var r = require("../1745/398/index");
var o = require("../1683/945");
var i = require("../1736/167");
var a = require("../1742/247/index");
var s = require("../1740/422");
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
    var t = false;
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
      t = true;
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
        done: true,
        value: h.call(t, n, r)
      } : {
        done: true,
        value: e.call(n, t, r)
      } : {
        done: false
      };
    });
    r(String.prototype, e, m[0]);
    r(l, d, m[1]);
  }
  if (u) {
    s(l[d], "sham", true);
  }
};