"use strict";

export { i as a };
export { a as b };
export { s as c };
var r = require("./13/303/index");
var o = (module => {
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
})(r);
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
export default i;