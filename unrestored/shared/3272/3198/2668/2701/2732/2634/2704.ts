"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if (!e) {
    return;
  }
  var s = r.NODE_FIELDS[e.type];
  if (!s) {
    return;
  }
  var o = s[t];
  i(e, t, n, o);
  a(e, t, n);
};
exports.validateChild = a;
exports.validateField = i;
var r = require("./2643/index");
function i(e, t, n, r) {
  if (null != r && r.validate) {
    if (!(r.optional && null == n)) {
      r.validate(e, t, n);
    }
  }
}
function a(e, t, n) {
  if (null != n) {
    var i = r.NODE_PARENT_VALIDATIONS[n.type];
    if (i) {
      i(e, t, n);
    }
  }
}