"use strict";

var r = require("../1626/86/index");
var o = require("../1534/530");
var i = require("./1233");
var a = require("../1626/167");
var s = require("../1250/472");
var c = require("../1676/942");
var l = require("./1236");
var u = require("../1738/398");
if (r({
  target: "Promise",
  proto: !0,
  real: !0,
  forced: !!i && a(function () {
    i.prototype.finally.call({
      then: function () {}
    }, function () {});
  })
}, {
  finally: function (e) {
    var t = c(this, s("Promise"));
    var n = "function" == typeof e;
    return this.then(n ? function (n) {
      return l(t, e()).then(function () {
        return n;
      });
    } : e, n ? function (n) {
      return l(t, e()).then(function () {
        throw n;
      });
    } : e);
  }
}), !o && "function" == typeof i) {
  var d = s("Promise").prototype.finally;
  if (i.prototype.finally !== d) {
    u(i.prototype, "finally", d, {
      unsafe: !0
    });
  }
}