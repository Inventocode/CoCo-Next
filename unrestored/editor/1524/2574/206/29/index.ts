"use strict";

export { s as i };
export { c as m };
export { l as a };
export { u as o };
export { d as n };
export { p as k };
export { f as e };
export { h as b };
export { m as h };
export { g as f };
export { _ as d };
export { v as g };
export { b as c };
export { y as j };
export { E as l };
require("../../51/index");
var r = require("../../31/index");
var o = require("../../13/303/index");
var i = (module => {
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
})(o);
var a = require("./651");
function s(e) {
  return e + "_" + i.a.generate();
}
function c() {
  var e = document.getElementById("rootPlayer");
  return e ? e.clientHeight / e.clientWidth : 640 / 360;
}
function l() {
  return "undefined" === typeof window;
}
function u(e) {
  return Object(r.isPlainObject)(e) ? JSON.stringify(e) : (null === e || void 0 === e ? void 0 : e.toString()) || "";
}
function d(e) {
  return "%{COCO_player/".concat(e, "}");
}
function p() {
  var e = navigator.userAgent;
  return e.indexOf("Android") > -1 || e.indexOf("Linux") > -1 ? "Android" : e.indexOf("iPhone") > -1 ? "ios" : "web";
}
function f() {
  return window.location.pathname.includes("/editor-player.html");
}
function h() {
  var e = navigator.userAgent;
  return e.includes("Android") || e.includes("Linux");
}
function m() {
  var e = navigator.userAgent;
  return /\sQQ\/\d/.test(e);
}
function g() {
  return "web" !== p();
}
function _() {
  return navigator.userAgent.toLowerCase().includes("cordova");
}
function v() {
  return "web" === p();
}
function b(e) {
  return a.findIndex(function (t) {
    return e.includes(t);
  }) > -1;
}
function y(e) {
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
function E(e, t, n) {
  var r;
  var o;
  var i = "";
  if (t) {
    i = n ? null === (r = t[n]) || void 0 === r ? void 0 : r[e] : null === (o = t.defaultMode) || void 0 === o ? void 0 : o[e];
  }
  return i || "";
}
i.a.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_");
export default l;