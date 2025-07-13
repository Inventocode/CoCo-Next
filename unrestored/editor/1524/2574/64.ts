"use strict";

export { i as a };
export { a as b };
export { s as c };
import * as r from "./13/303/index";
import * as o from "./13/303/index";
function i(e) {
  return e + "_" + o.a.generate();
}
function a(e) {
  var t = window.getSelection ? window.getSelection() : null;
  if (t) {
    var n = document.createRange();
    n.selectNodeContents(e);
    n.collapse(!1);
    t.removeAllRanges();
    t.addRange(n);
  }
}
function s(e) {
  var t = window.getSelection ? window.getSelection() : null;
  if (t) {
    var n = document.createRange();
    n.selectNodeContents(e);
    t.removeAllRanges();
    t.addRange(n);
  }
}
o.a.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_");