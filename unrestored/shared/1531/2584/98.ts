"use strict";

export { s as b };
export { c as a };
export { l as f };
export { u as g };
export { d as e };
export { p as d };
export { f as c };
var r = require("./9");
var o = require("./79");
var i = new Map();
var a = new Map();
function s(e) {
  var t = e.type;
  i.set(t, e);
}
function c(e) {
  var t = e.type;
  a.set(t, e);
}
function l(e) {
  return i.get(e) || a.get(e);
}
function u(e) {
  return a.has(e);
}
function d() {
  return Array.from(a.values()).filter(function (e) {
    return Object(o.d)(e.type);
  }).map(function (e) {
    return {
      type: e.type,
      code: e.code
    };
  });
}
function p() {
  var e = Array.from(i.values());
  var t = [];
  e.forEach(function (e) {
    if (Object(r.Mb)(e.type)) {
      t.push({
        id: e.id,
        type: e.type,
        cdnUrl: e.cdnUrl
      });
    }
  });
  return t;
}
function f() {
  Array.from(a.keys()).forEach(function (e) {
    if (Object(o.d)(e)) {
      a.delete(e);
    }
  });
  i.clear();
}
export default c;