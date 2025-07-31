"use strict";

export { s as a };
var r = require("../2617/462");
function i(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function o(e) {
  var t;
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!Object(r.a)()) {
    return null;
  }
  var o;
  var a = document.createElement("style");
  if (null === (t = n.csp) || void 0 === t ? void 0 : t.nonce) {
    a.nonce = null === (o = n.csp) || void 0 === o ? void 0 : o.nonce;
  }
  a.innerHTML = e;
  var s = i(n);
  var c = s.firstChild;
  if (n.prepend && s.prepend) {
    s.prepend(a);
  } else {
    if (n.prepend && c) {
      s.insertBefore(a, c);
    } else {
      s.appendChild(a);
    }
  }
  return a;
}
var a = new Map();
function s(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  var r = i(n);
  if (!a.has(r)) {
    var s = o("", n);
    var c = s.parentNode;
    a.set(r, c);
    c.removeChild(s);
  }
  var u = Array.from(a.get(r).children).find(function (e) {
    return "STYLE" === e.tagName && e["rc-util-key"] === t;
  });
  if (u) {
    var l;
    var f;
    var h;
    if ((null === (l = n.csp) || void 0 === l ? void 0 : l.nonce) && u.nonce !== (null === (f = n.csp) || void 0 === f ? void 0 : f.nonce)) {
      u.nonce = null === (h = n.csp) || void 0 === h ? void 0 : h.nonce;
    }
    if (u.innerHTML !== e) {
      u.innerHTML = e;
    }
    return u;
  }
  var d = o(e, n);
  d["rc-util-key"] = t;
  return d;
}
export default s;