"use strict";

export { i as a };
export { a as b };
export { s as c };
import * as r from "./324";
var o = {
  window: void 0,
  document: {
    getElementById: function (e) {
      return e ? document.querySelector("#".concat(r.a, " #").concat(e)) : null;
    }
  },
  history: void 0,
  navigator: {
    userAgent: navigator.userAgent
  },
  localStorage: void 0,
  top: void 0,
  self: void 0,
  parent: void 0,
  frames: void 0,
  opener: void 0,
  fetch: void 0,
  XMLHttpRequest: void 0,
  location: void 0,
  open: void 0,
  alert: void 0,
  confirm: void 0,
  prompt: void 0,
  print: void 0,
  sessionStorage: void 0,
  postMessage: void 0,
  eval: function () {
    console.error("eval is not implemented");
  }
};
var i = ["parent.location", "top.location", "WebSocket", "XMLHttpRequest", ".fetch", "socketcv.codemao.cn"];
var a = Object.keys(o);
var s = Object.values(o);