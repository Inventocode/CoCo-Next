/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1652
 */

"use strict";

var r = require("../1623/86");
var o = require("../1684/530");
var i = require("./1236");
var a = require("../1736/167");
var s = require("../1664/472");
var c = require("../1683/943");
var l = require("./1239");
var u = require("../1745/398/index");
r({
  target: "Promise",
  proto: true,
  real: true,
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
      unsafe: true
    });
  }
}