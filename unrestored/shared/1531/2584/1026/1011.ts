/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1011
 */

"use strict";

export { s as a };
import r = require("../2627/462");
function i(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function o(e) {
  var t;
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  if (!r.a()) {
    return null;
  }
  var o;
  var a = document.createElement("style");
  if (null === (t = n.csp) || undefined === t ? undefined : t.nonce) {
    a.nonce = null === (o = n.csp) || undefined === o ? undefined : o.nonce;
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
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
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
    var d;
    if ((null === (l = n.csp) || undefined === l ? undefined : l.nonce) && u.nonce !== (null === (f = n.csp) || undefined === f ? undefined : f.nonce)) {
      u.nonce = null === (d = n.csp) || undefined === d ? undefined : d.nonce;
    }
    if (u.innerHTML !== e) {
      u.innerHTML = e;
    }
    return u;
  }
  var h = o(e, n);
  h["rc-util-key"] = t;
  return h;
}
export default s;