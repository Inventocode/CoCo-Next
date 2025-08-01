"use strict";

var r;
var i;
function o(e) {
  return e.type === r.literal;
}
function a(e) {
  return e.type === r.argument;
}
function s(e) {
  return e.type === r.number;
}
function c(e) {
  return e.type === r.date;
}
function u(e) {
  return e.type === r.time;
}
function l(e) {
  return e.type === r.select;
}
function f(e) {
  return e.type === r.plural;
}
function d(e) {
  return e.type === r.pound;
}
function h(e) {
  return e.type === r.tag;
}
function p(e) {
  return !(!e || "object" !== typeof e || 0 !== e.type);
}
function _(e) {
  return !(!e || "object" !== typeof e || 1 !== e.type);
}
export { r as a };
export { o as e };
export { a as b };
export { s as f };
export { c };
export { u as l };
export { l as j };
export { f as h };
export { d as i };
export { h as k };
export { p as g };
export { _ as d };
(function (e) {
  e[e.literal = 0] = "literal";
  e[e.argument = 1] = "argument";
  e[e.number = 2] = "number";
  e[e.date = 3] = "date";
  e[e.time = 4] = "time";
  e[e.select = 5] = "select";
  e[e.plural = 6] = "plural";
  e[e.pound = 7] = "pound";
  e[e.tag = 8] = "tag";
})(r || (r = {}));
(function (e) {
  e[e.number = 0] = "number";
  e[e.dateTime = 1] = "dateTime";
})(i || (i = {}));
export default r;