"use strict";

export { c as j };
export { l as n };
export { u as a };
export { d as p };
export { p as o };
export { f as l };
export { h as e };
export { m as b };
export { g as h };
export { _ as f };
export { v as d };
export { b as g };
export { y as c };
export { E as k };
export { O as m };
export { w as i };
require("../51/index");
var r = require("./773/index");
var o = require("../31/index");
var i = require("./303/index");
var a = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(i);
var s = require("./651");
function c(e) {
  return e + "_" + a.a.generate();
}
function l() {
  var e = document.getElementById("rootPlayer");
  return e ? e.clientHeight / e.clientWidth : 640 / 360;
}
function u() {
  return "undefined" === typeof window;
}
function d(e) {
  return Object(o.isPlainObject)(e) ? JSON.stringify(e) : (null === e || void 0 === e ? void 0 : e.toString()) || "";
}
function p(e) {
  return "%{COCO_player/".concat(e, "}");
}
function f() {
  var e = navigator.userAgent;
  return e.indexOf("Android") > -1 || e.indexOf("Linux") > -1 ? "Android" : e.indexOf("iPhone") > -1 ? "ios" : "web";
}
function h() {
  return window.location.pathname.includes("/editor-player.html");
}
function m() {
  var e = navigator.userAgent;
  return e.includes("Android") || e.includes("Linux");
}
function g() {
  var e = navigator.userAgent;
  return /\sQQ\/\d/.test(e);
}
function _() {
  return "web" !== f();
}
function v() {
  return navigator.userAgent.toLowerCase().includes("cordova");
}
function b() {
  return "web" === f();
}
function y(e) {
  return s.findIndex(function (t) {
    return e.includes(t);
  }) > -1;
}
function E(e) {
  var t = e ? new Date(e) : new Date();
  var n = t.getFullYear();
  var r = t.getMonth() + 1;
  var o = t.getDate();
  var i = t.getHours();
  var a = t.getMinutes();
  var s = "".concat(n, "-").concat(r < 10 ? "0" + r : r, "-").concat(o < 10 ? "0" + o : o);
  var c = "".concat(i < 10 ? "0" + i : i, ":").concat(a < 10 ? "0" + a : a, ":").concat("00");
  return {
    dateTime: "".concat(s, " ").concat(c),
    date: s,
    time: c,
    y: n,
    m: r,
    d: o,
    h: i,
    min: a,
    s: 0
  };
}
function O(e, t, n) {
  var r;
  var o;
  var i = "";
  if (t) {
    i = n ? null === (r = t[n]) || void 0 === r ? void 0 : r[e] : null === (o = t.defaultMode) || void 0 === o ? void 0 : o[e];
  }
  return i || "";
}
function w(e) {
  return Object(r.filterXSS)(e);
}
a.a.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_");
export default u;