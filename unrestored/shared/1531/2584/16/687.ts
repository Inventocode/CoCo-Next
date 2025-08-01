"use strict";

var r = require("../242/index");
var i = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
};
var o = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
};
var a = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
};
var s = {};
function c(e) {
  return r.isMemo(e) ? a : s[e.$$typeof] || i;
}
s[r.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
};
s[r.Memo] = a;
var u = Object.defineProperty;
var l = Object.getOwnPropertyNames;
var f = Object.getOwnPropertySymbols;
var d = Object.getOwnPropertyDescriptor;
var h = Object.getPrototypeOf;
var p = Object.prototype;
module.exports = function e(t, n, r) {
  if ("string" !== typeof n) {
    if (p) {
      var i = h(n);
      if (i && i !== p) {
        e(t, i, r);
      }
    }
    var a = l(n);
    if (f) {
      a = a.concat(f(n));
    }
    for (var s = c(t), _ = c(n), A = 0; A < a.length; ++A) {
      var g = a[A];
      if (!o[g] && (!r || !r[g]) && (!_ || !_[g]) && (!s || !s[g])) {
        var v = d(n, g);
        try {
          u(t, g, v);
        } catch (m) {}
      }
    }
  }
  return t;
};