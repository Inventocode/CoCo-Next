"use strict";

var r = require("../1633/86/index");
var o = require("../1541/530");
var i = require("./1236");
var a = require("../1633/167");
var s = require("../1253/472");
var c = require("../1683/943");
var l = require("./1239");
var u = require("../1745/398");
r({
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
});
if (!o && "function" == typeof i) {
  var d = s("Promise").prototype.finally;
  if (i.prototype.finally !== d) {
    u(i.prototype, "finally", d, {
      unsafe: !0
    });
  }
}