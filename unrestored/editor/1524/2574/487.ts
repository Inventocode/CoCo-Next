"use strict";

export { o as d };
export { i as e };
export { a as f };
export { s as c };
export { c as b };
export { u as a };
import * as r from "./80/index";
function o(e) {
  return Array.isArray(e) ? e : void 0 !== e ? [e] : [];
}
function i(e, t) {
  var n = t.labelInValue;
  var r = t.combobox;
  var o = new Map();
  if (void 0 === e || "" === e && r) {
    return [[], o];
  }
  var i = Array.isArray(e) ? e : [e];
  var a = i;
  if (n) {
    a = i.filter(function (e) {
      return null !== e;
    }).map(function (e) {
      var t = e.key;
      var n = e.value;
      var r = void 0 !== n ? n : t;
      o.set(r, e);
      return r;
    });
  }
  return [a, o];
}
function a(e, t) {
  var n = t.optionLabelProp;
  var r = t.labelInValue;
  var o = t.prevValueMap;
  var i = t.options;
  var a = t.getLabeledValue;
  var s = e;
  if (r) {
    s = s.map(function (e) {
      return a(e, {
        options: i,
        prevValueMap: o,
        labelInValue: r,
        optionLabelProp: n
      });
    });
  }
  return s;
}
function s(e, t) {
  var n;
  var o = Object(r.a)(t);
  for (n = e.length - 1; n >= 0 && e[n].disabled; n -= 1) {
    ;
  }
  var i = null;
  if (-1 !== n) {
    i = o[n];
    o.splice(n, 1);
  }
  return {
    values: o,
    removedValue: i
  };
}
var c = "undefined" !== typeof window && window.document && window.document.documentElement;
var l = 0;
function u() {
  var e;
  if (c) {
    e = l;
    l += 1;
  } else {
    e = "TEST_OR_SSR";
  }
  return e;
}