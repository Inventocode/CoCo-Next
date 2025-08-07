"use strict";

var r = require("../242/index");
var i = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var o = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var a = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var s = {};
function c(e) {
  return r.isMemo(e) ? a : s[e.$$typeof] || i;
}
s[r.ForwardRef] = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
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